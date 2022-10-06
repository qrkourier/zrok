package main

import (
	"bytes"
	"encoding/base64"
	"fmt"
	"github.com/go-openapi/runtime"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/openziti-test-kitchen/zrok/model"
	"github.com/openziti-test-kitchen/zrok/rest_client_zrok"
	"github.com/openziti-test-kitchen/zrok/rest_client_zrok/tunnel"
	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
	"github.com/openziti-test-kitchen/zrok/zrokdir"
	"github.com/openziti/sdk-golang/ziti"
	"github.com/openziti/sdk-golang/ziti/config"
	"github.com/openziti/sdk-golang/ziti/edge"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"io"
	"math/rand"
	"net/http"
	"time"
)

func init() {
	rootCmd.AddCommand(newRun().cmd)
}

type run struct {
	cmd            *cobra.Command
	loopers        int
	iterations     int
	statusEvery    int
	dwellSeconds   int
	timeoutSeconds int
	minPayload     int
	maxPayload     int
}

func newRun() *run {
	cmd := &cobra.Command{
		Use:   "run",
		Short: "Start a loop agent",
		Args:  cobra.ExactArgs(0),
	}
	r := &run{cmd: cmd}
	cmd.Run = r.run
	cmd.Flags().IntVarP(&r.loopers, "loopers", "l", 1, "Number of current loopers to start")
	cmd.Flags().IntVarP(&r.iterations, "iterations", "i", 1, "Number of iterations per looper")
	cmd.Flags().IntVarP(&r.statusEvery, "status-every", "E", 100, "Show status every # iterations")
	cmd.Flags().IntVarP(&r.dwellSeconds, "dwell-seconds", "D", 1, "Dwell # seconds before starting iterations")
	cmd.Flags().IntVarP(&r.timeoutSeconds, "timeout-seconds", "T", 30, "Time out after # seconds when sending http requests")
	cmd.Flags().IntVar(&r.minPayload, "min-payload", 64, "Minimum payload size in bytes")
	cmd.Flags().IntVar(&r.maxPayload, "max-payload", 10240, "Maximum payload size in bytes")
	return r
}

func (r *run) run(_ *cobra.Command, _ []string) {
	var loopers []*looper
	for i := 0; i < r.loopers; i++ {
		l := newLooper(i, r)
		loopers = append(loopers, l)
		go l.run()
	}
	for _, l := range loopers {
		<-l.done
	}
}

type looper struct {
	id            int
	r             *run
	env           *zrokdir.Environment
	done          chan struct{}
	listener      edge.Listener
	zif           string
	zrok          *rest_client_zrok.Zrok
	service       string
	proxyEndpoint string
	auth          runtime.ClientAuthInfoWriter
}

func newLooper(id int, r *run) *looper {
	return &looper{
		id:   id,
		r:    r,
		done: make(chan struct{}),
	}
}

func (l *looper) run() {
	defer close(l.done)
	defer logrus.Infof("stopping #%d", l.id)

	l.startup()
	logrus.Infof("looper #%d, service: %v, frontend: %v", l.id, l.service, l.proxyEndpoint)
	go l.serviceListener()
	l.dwell()
	l.iterate()
	logrus.Infof("looper #%d: complete", l.id)
	l.shutdown()
}

func (l *looper) serviceListener() {
	zcfg, err := config.NewFromFile(l.zif)
	if err != nil {
		logrus.Errorf("error opening ziti config '%v': %v", l.zif, err)
		return
	}
	opts := ziti.ListenOptions{
		ConnectTimeout: 5 * time.Minute,
		MaxConnections: 10,
	}
	if l.listener, err = ziti.NewContextWithConfig(zcfg).ListenWithOptions(l.service, &opts); err == nil {
		if err := http.Serve(l.listener, l); err != nil {
			logrus.Errorf("looper #%d, error serving: %v", l.id, err)
		}
	} else {
		logrus.Errorf("looper #%d, error listening: %v", l.id, err)
	}
}

func (l *looper) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	buf := new(bytes.Buffer)
	io.Copy(buf, r.Body)
	w.Write(buf.Bytes())
}

func (l *looper) startup() {
	logrus.Infof("starting #%d", l.id)

	var err error
	l.env, err = zrokdir.LoadEnvironment()
	if err != nil {
		panic(err)
	}
	l.zif, err = zrokdir.ZitiIdentityFile("environment")
	if err != nil {
		panic(err)
	}
	l.zrok, err = zrokdir.ZrokClient(l.env.ApiEndpoint)
	if err != nil {
		panic(err)
	}
	l.auth = httptransport.APIKeyAuth("x-token", "header", l.env.ZrokToken)
	tunnelReq := tunnel.NewTunnelParams()
	tunnelReq.Body = &rest_model_zrok.TunnelRequest{
		ZitiIdentityID: l.env.ZitiIdentityId,
		Endpoint:       fmt.Sprintf("looper#%d", l.id),
		AuthScheme:     string(model.None),
	}
	tunnelResp, err := l.zrok.Tunnel.Tunnel(tunnelReq, l.auth)
	if err != nil {
		panic(err)
	}
	l.service = tunnelResp.Payload.Service
	l.proxyEndpoint = tunnelResp.Payload.ProxyEndpoint
}

func (l *looper) dwell() {
	time.Sleep(time.Duration(l.r.dwellSeconds) * time.Second)
}

func (l *looper) iterate() {
	for i := 0; i < l.r.iterations; i++ {
		if i > 0 && i%l.r.statusEvery == 0 {
			logrus.Infof("looper #%d: iteration #%d", l.id, i)
		}
		sz := l.r.maxPayload
		if l.r.maxPayload-l.r.minPayload > 0 {
			sz = rand.Intn(l.r.maxPayload-l.r.minPayload) + l.r.minPayload
		}
		outpayload := make([]byte, sz)
		outbase64 := base64.StdEncoding.EncodeToString(outpayload)
		rand.Read(outpayload)
		if req, err := http.NewRequest("POST", l.proxyEndpoint, bytes.NewBufferString(outbase64)); err == nil {
			client := &http.Client{Timeout: time.Second * time.Duration(l.r.timeoutSeconds)}
			if resp, err := client.Do(req); err == nil {
				inpayload := new(bytes.Buffer)
				io.Copy(inpayload, resp.Body)
				inbase64 := inpayload.String()
				if inbase64 != outbase64 {
					logrus.Errorf("looper #%d payload mismatch!", l.id)
				} else {
					logrus.Debugf("looper #%d payload match", l.id)
				}
			} else {
				logrus.Errorf("looper #%d error: %v", l.id, err)
			}
		} else {
			logrus.Errorf("looper #%d error creating request: %v", l.id, err)
		}
	}
}

func (l *looper) shutdown() {
	if l.listener != nil {
		if err := l.listener.Close(); err != nil {
			logrus.Errorf("looper #%d error closing listener: %v", l.id, err)
		}
	}

	untunnelReq := tunnel.NewUntunnelParams()
	untunnelReq.Body = &rest_model_zrok.UntunnelRequest{
		ZitiIdentityID: l.env.ZitiIdentityId,
		Service:        l.service,
	}
	if _, err := l.zrok.Tunnel.Untunnel(untunnelReq, l.auth); err != nil {
		logrus.Errorf("error shutting down looper #%d: %v", l.id, err)
	}
}