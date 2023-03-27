package limits

import (
	"github.com/jmoiron/sqlx"
	"github.com/openziti/edge/rest_management_api_client"
	"github.com/openziti/zrok/controller/emailUi"
	"github.com/openziti/zrok/controller/store"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
)

type shareWarningAction struct {
	str  *store.Store
	edge *rest_management_api_client.ZitiEdgeManagement
	cfg  *emailUi.Config
}

func newShareWarningAction(cfg *emailUi.Config, str *store.Store, edge *rest_management_api_client.ZitiEdgeManagement) *shareWarningAction {
	return &shareWarningAction{str, edge, cfg}
}

func (a *shareWarningAction) HandleShare(shr *store.Share, rxBytes, txBytes int64, limit *BandwidthPerPeriod, trx *sqlx.Tx) error {
	logrus.Infof("warning '%v'", shr.Token)

	env, err := a.str.GetEnvironment(shr.EnvironmentId, trx)
	if err != nil {
		return err
	}

	acct, err := a.str.GetAccount(env.Id, trx)
	if err != nil {
		return err
	}

	if err := sendLimitWarningEmail(a.cfg, acct.Email, limit, rxBytes, txBytes); err != nil {
		return errors.Wrapf(err, "error sending limit warning email to '%v'", acct.Email)
	}

	return nil
}
