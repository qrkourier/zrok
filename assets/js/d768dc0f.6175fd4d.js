"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4247],{1916:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/self-hosting/linux/index","title":"Self-Hosting Guide for Linux","description":"Walkthrough Video","source":"@site/../docs/guides/self-hosting/linux/index.mdx","sourceDirName":"guides/self-hosting/linux","slug":"/guides/self-hosting/linux/","permalink":"/docs/guides/self-hosting/linux/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/linux/index.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40,"title":"Self-Hosting Guide for Linux","sidebar_label":"Linux"},"sidebar":"tutorialSidebar","previous":{"title":"Self Hosting","permalink":"/docs/category/self-hosting"},"next":{"title":"NGINX TLS","permalink":"/docs/guides/self-hosting/linux/nginx"}}');var t=r(4848),i=r(8453);const s={sidebar_position:40,title:"Self-Hosting Guide for Linux",sidebar_label:"Linux"},l=void 0,c={},d=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before you Begin",id:"before-you-begin",level:2},{value:"OpenZiti",id:"openziti",level:2},{value:"Install zrok",id:"install-zrok",level:2},{value:"Configure the Controller",id:"configure-the-controller",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Bootstrap OpenZiti for zrok",id:"bootstrap-openziti-for-zrok",level:2},{value:"Run zrok Controller",id:"run-zrok-controller",level:2},{value:"Create zrok Frontend",id:"create-zrok-frontend",level:2},{value:"Configure the Public Frontend",id:"configure-the-public-frontend",level:2},{value:"Start Public Frontend",id:"start-public-frontend",level:2},{value:"Create a User Account",id:"create-a-user-account",level:2},{value:"Invite Additional Users",id:"invite-additional-users",level:2},{value:"Enable Your Environment",id:"enable-your-environment",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"walkthrough-video",children:"Walkthrough Video"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/870A5dke_u4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you Begin"}),"\n",(0,t.jsxs)(n.p,{children:["This will get you up and running with a self-hosted instance of ",(0,t.jsx)(n.code,{children:"zrok"}),". I'll assume you have the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a Linux server with a public IP"}),"\n",(0,t.jsxs)(n.li,{children:["a wildcard DNS record like ",(0,t.jsx)(n.code,{children:"*.zrok.quigley.com"})," that resolves to the server IP"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"openziti",children:"OpenZiti"}),"\n",(0,t.jsxs)(n.p,{children:['OpenZiti (a.k.a. "Ziti") provides secure network backhaul for ',(0,t.jsx)(n.code,{children:"zrok"})," public and private shares. You need a Ziti Controller and a Ziti Router. You can run everything on the same Linux VPS."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the Ziti Controller package by following the ",(0,t.jsx)(n.a,{href:"https://openziti.io/docs/category/deployments",children:"Linux controller deployment guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure your answer file (",(0,t.jsx)(n.code,{children:"/opt/openziti/etc/controller/bootstrap.env"}),") has the FQDN of your Linux server and an admin password defined."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure your firewall allows the controller port from the answer file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the controller service (",(0,t.jsx)(n.code,{children:"ziti-controller.service"}),") and check the status."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to the Ziti Controller"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ziti edge login localhost:1280 -u admin -p <password>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Administratively Create a Ziti Router"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ziti edge create edge-router "router1" -o /tmp/router1.jwt\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the Ziti Router package by following ",(0,t.jsx)(n.a,{href:"https://openziti.io/docs/category/deployments",children:"the Linux router deployment guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure your answer file (",(0,t.jsx)(n.code,{children:"/opt/openziti/etc/router/bootstrap.env"}),") has the FQDN of your Linux server for both controller and router addresses and the enrollment token from the previous step."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure your firewall allows the router port from the answer file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the router service (",(0,t.jsx)(n.code,{children:"ziti-router.service"}),") and check the status."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify the new router is online."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ziti edge list edge-routers\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-zrok",children:"Install zrok"}),"\n",(0,t.jsxs)(n.p,{children:["Debian and RPM packages are available for ",(0,t.jsx)(n.code,{children:"zrok"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install zrok\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Follow ",(0,t.jsx)(n.a,{href:"/docs/guides/install/linux",children:"the Linux installation guide"})," to install the ",(0,t.jsx)(n.code,{children:"zrok"})," package from the repository or manually install the binary for your platform."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-controller",children:"Configure the Controller"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"zrok"})," controller configuration file in ",(0,t.jsx)(n.code,{children:"etc/ctrl.yml"}),". The controller can terminate TLS or you may front the server with a reverse proxy that continually renews the necessary wildcard certificate (e.g., Caddy w/ a DNS provider plugin). This example will expose the non-TLS listener for the controller."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'#    _____ __ ___ | | __\n#   |_  / \'__/ _ \\| |/ /\n#    / /| | | (_) |   <\n#   /___|_|  \\___/|_|\\_\\\n# controller configuration\n\nv:                  3\n\nadmin:\n  # generate these admin tokens from a source of randomness, e.g. \n  #  LC_ALL=C tr -dc _A-Z-a-z-0-9 < /dev/urandom | head -c32\n  secrets:\n    -               Q8V0LqnNb5wNX9kE1fgQ0H6VlcvJybB1  # be sure to change this!\n\nendpoint:\n  host:             0.0.0.0\n  port:             18080\n\ninvites:\n  invites_open:    true\n\nstore:\n  path:             zrok.db\n  type:             sqlite3\n\nziti:\n  api_endpoint:     "https://127.0.0.1:1280"\n  username:         admin\n  password:         "XO0xHp75uuyeireO2xmmVlK91T7B9fpD"\n\n# you can use certbot to renew the wildcard cert for the controller with a DNS provider API token or front this `zrok` # controller with Caddy\n#tls:\n#  cert_path: "/Path/To/Cert/zrok.crt"\n#  key_path:  "/Path/To/Cert/zrok.key"\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"admin"})," section defines privileged administrative credentials and must be set in the ",(0,t.jsx)(n.code,{children:"ZROK_ADMIN_TOKEN"})," environment variable in shells where you want to run ",(0,t.jsx)(n.code,{children:"zrok admin"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"endpoint"})," section defines where your ",(0,t.jsx)(n.code,{children:"zrok"})," controller will listen."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"store"})," section defines the local ",(0,t.jsx)(n.code,{children:"sqlite3"})," database used by the controller."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ziti"})," section defines how the ",(0,t.jsx)(n.code,{children:"zrok"})," controller should communicate with your OpenZiti installation. When using the OpenZiti quickstart, an administrative password will be generated; the ",(0,t.jsx)(n.code,{children:"password"})," in the ",(0,t.jsx)(n.code,{children:"ziti"})," stanza should reflect this password."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Be sure to see the ",(0,t.jsxs)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(9873).A+"",children:["reference configuration at ",(0,t.jsx)(n.code,{children:"etc/ctrl.yml"})]})," for the complete documentation of the current configuration file format for the ",(0,t.jsx)(n.code,{children:"zrok"})," controller and service instance components."]}),(0,t.jsxs)(n.p,{children:["See the separate guides on ",(0,t.jsx)(n.a,{href:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics",children:"configuring metrics"})," and ",(0,t.jsx)(n.a,{href:"/docs/guides/self-hosting/metrics-and-limits/configuring-limits",children:"configuring limits"})," for details about both of these specialized areas of service instance configuration."]})]}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"zrok"})," binaries are configured to work with the global ",(0,t.jsx)(n.code,{children:"zrok.io"})," service, and default to using ",(0,t.jsx)(n.code,{children:"api.zrok.io"})," as the endpoint for communicating with the service."]}),"\n",(0,t.jsxs)(n.p,{children:["To work with a self-hosted ",(0,t.jsx)(n.code,{children:"zrok"})," deployment, you'll need to set the ",(0,t.jsx)(n.code,{children:"ZROK_API_ENDPOINT"})," environment variable to point to the address where your ",(0,t.jsx)(n.code,{children:"zrok"})," controller will be listening, according to ",(0,t.jsx)(n.code,{children:"endpoint"})," in the configuration file above."]}),"\n",(0,t.jsx)(n.p,{children:"In my case, I've set:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export ZROK_API_ENDPOINT=http://127.0.0.1:18080\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"/docs/guides/self-hosting/instance-configuration",children:["Read more about configuring your self-hosted ",(0,t.jsx)(n.code,{children:"zrok"})," instance"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"bootstrap-openziti-for-zrok",children:"Bootstrap OpenZiti for zrok"}),"\n",(0,t.jsxs)(n.p,{children:["With your OpenZiti network running and your configuration saved to a local file (I refer to mine as ",(0,t.jsx)(n.code,{children:"etc/ctrl.yml"})," in these examples), you're ready to bootstrap the Ziti network."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"zrok admin bootstrap"})," command to bootstrap like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ zrok admin bootstrap etc/ctrl.yml\n[   0.002]    INFO main.(*adminBootstrap).run: {\n\t...\n}\n[   0.002]    INFO zrok/controller/store.Open: database connected\n[   0.006]    INFO zrok/controller/store.(*Store).migrate: applied 0 migrations\n[   0.006]    INFO zrok/controller.Bootstrap: connecting to the ziti edge management api\n[   0.039]    INFO zrok/controller.Bootstrap: creating identity for controller ziti access\n[   0.071]    INFO zrok/controller.Bootstrap: controller identity: jKd8AINSz\n[   0.082]    INFO zrok/controller.assertIdentity: asserted identity 'jKd8AINSz'\n[   0.085]    INFO zrok/controller.assertErpForIdentity: asserted erps for 'ctrl' (jKd8AINSz)\n[   0.085]    INFO zrok/controller.Bootstrap: creating identity for frontend ziti access\n[   0.118]    INFO zrok/controller.Bootstrap: frontend identity: sqJRAINSiB\n[   0.119]    INFO zrok/controller.assertIdentity: asserted identity 'sqJRAINSiB'\n[   0.120]    INFO zrok/controller.assertErpForIdentity: asserted erps for 'frontend' (sqJRAINSiB)\n[   0.120] WARNING zrok/controller.Bootstrap: missing public frontend for ziti id 'sqJRAINSiB'; please use 'zrok admin create frontend sqJRAINSiB public https://{token}.your.dns.name' to create a frontend instance\n[   0.123]    INFO zrok/controller.assertZrokProxyConfigType: found 'zrok.proxy.v1' config type with id '33CyjNbIepkXHN5VzGDA8L'\n[   0.124]    INFO zrok/controller.assertMetricsService: creating 'metrics' service\n[   0.126]    INFO zrok/controller.assertMetricsService: asserted 'metrics' service (5RpPZZ7T8bZf1ENjwGiPc3)\n[   0.128]    INFO zrok/controller.assertMetricsSerp: creating 'metrics' serp\n[   0.130]    INFO zrok/controller.assertMetricsSerp: asserted 'metrics' serp\n[   0.134]    INFO zrok/controller.assertCtrlMetricsBind: creating 'ctrl-metrics-bind' service policy\n[   0.135]    INFO zrok/controller.assertCtrlMetricsBind: asserted 'ctrl-metrics-bind' service policy\n[   0.138]    INFO zrok/controller.assertFrontendMetricsDial: creating 'frontend-metrics-dial' service policy\n[   0.140]    INFO zrok/controller.assertFrontendMetricsDial: asserted 'frontend-metrics-dial' service policy\n[   0.140]    INFO main.(*adminBootstrap).run: bootstrap complete!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"zrok admin bootstrap"})," command configures the ",(0,t.jsx)(n.code,{children:"zrok"})," database, the necessary OpenZiti identities, and all of the OpenZiti policies required to run a ",(0,t.jsx)(n.code,{children:"zrok"})," service."]}),"\n",(0,t.jsx)(n.p,{children:"Notice this warning:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[   0.120] WARNING zrok/controller.Bootstrap: missing public frontend for ziti id 'sqJRAINSiB'; please use 'zrok admin create frontend sqJRAINSiB public https://{token}.your.dns.name' to create a frontend instance\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you find it necessary to re-run the ",(0,t.jsx)(n.code,{children:"zrok admin bootstrap"})," command, you may need to add the ",(0,t.jsx)(n.code,{children:"--skip-frontend"})," flag to avoid re-creating the default ",(0,t.jsx)(n.code,{children:"public"})," frontend's Ziti identity and router policy."]}),"\n",(0,t.jsx)(n.h2,{id:"run-zrok-controller",children:"Run zrok Controller"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"zrok"}),' bootstrap process wants us to create a "public frontend" for our service. ',(0,t.jsx)(n.code,{children:"zrok"})," uses public frontends to allow users to specify where they would like public traffic to ingress from."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"zrok admin create frontend"})," command requires a running ",(0,t.jsx)(n.code,{children:"zrok"})," controller, so let's start that up first:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ zrok controller etc/ctrl.yml \n[   0.003]    INFO main.(*controllerCommand).run: {\n\t...\n}\n[   0.016]    INFO zrok/controller.inspectZiti: inspecting ziti controller configuration\n[   0.048]    INFO zrok/controller.findZrokProxyConfigType: found 'zrok.proxy.v1' config type with id '33CyjNbIepkXHN5VzGDA8L'\n[   0.048]    INFO zrok/controller/store.Open: database connected\n[   0.048]    INFO zrok/controller/store.(*Store).migrate: applied 0 migrations\n[   0.049]    INFO zrok/controller.(*metricsAgent).run: starting\n[   0.064]    INFO zrok/rest_server_zrok.setupGlobalMiddleware: configuring\n[   0.064]    INFO zrok/ui.StaticBuilder: building\n[   0.065]    INFO zrok/rest_server_zrok.(*Server).Logf: Serving zrok at http://[::]:18080\n[   0.085]    INFO zrok/controller.(*metricsAgent).listen: started\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-zrok-frontend",children:"Create zrok Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["With our ",(0,t.jsx)(n.code,{children:"ZROK_ADMIN_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"ZROK_API_ENDPOINT"})," environment variables set, we can create our public frontend like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ zrok admin create frontend sqJRAINSiB public http://{token}.zrok.quigley.com:8080\n[   0.037]    INFO main.(*adminCreateFrontendCommand).run: created global public frontend 'WEirJNHVlcW9'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The id of the frontend was emitted earlier in by the ",(0,t.jsx)(n.code,{children:"zrok"})," controller when we ran the bootstrap command. If you don't have that log message the you can find the id again with the ",(0,t.jsx)(n.code,{children:"ziti"})," CLI like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# log in as admin (example)\nziti edge login localhost:1280 -u admin -p XO0xHp75uuyeireO2xmmVlK91T7B9fpD\n\n# list Ziti identities created by the quickstart and bootstrap\nziti edge list identities\n"})}),"\n",(0,t.jsx)(n.p,{children:'The id is shown for the frontend identity named "public."'}),"\n",(0,t.jsxs)(n.p,{children:["Nice work! The ",(0,t.jsx)(n.code,{children:"zrok"})," controller is fully configured now that you have created the ",(0,t.jsx)(n.code,{children:"zrok"})," frontend."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-public-frontend",children:"Configure the Public Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["Create an http frontend configuration file in ",(0,t.jsx)(n.code,{children:"etc/http-frontend.yml"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"v:                  3\nhost_match:         zrok.quigley.com\naddress:            0.0.0.0:8080\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This frontend config file has a ",(0,t.jsx)(n.code,{children:"host_match"})," pattern that represents the DNS zone you're using with this instance of ",(0,t.jsx)(n.code,{children:"zrok"}),". Incoming HTTP requests with a matching ",(0,t.jsx)(n.code,{children:"Host"})," header will be handled by this frontend. You may also specify the interface address where the frontend will listen for public access requests."]}),"\n",(0,t.jsxs)(n.p,{children:["The frontend does not provide server TLS, but you may front the server with a reverse proxy. The reverse proxy must forward the ",(0,t.jsx)(n.code,{children:"Host"})," header supplied by the viewer. This example will expose the non-TLS listener for the frontend."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also specify an ",(0,t.jsx)(n.code,{children:"oauth"})," configuration in this file, full details of are found in ",(0,t.jsx)(n.a,{href:"/docs/guides/self-hosting/oauth/configuring-oauth#configuring-your-public-frontend",children:"OAuth Public Frontend Configuration"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"start-public-frontend",children:"Start Public Frontend"}),"\n",(0,t.jsx)(n.p,{children:"In another terminal window, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ zrok access public etc/http-frontend.yml\n[   0.002]    INFO main.(*accessPublicCommand).run: {\n\t...\n}\n[   0.002]    INFO zrok/endpoints/public_frontend.newMetricsAgent: loaded 'public' identity\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"zrok"})," frontend uses the ",(0,t.jsx)(n.code,{children:"public"})," identity created during the bootstrap process to securely access zrok backends. to provide public access for the ",(0,t.jsx)(n.code,{children:"zrok"})," deployment. It is expected that the configured listener for this frontend corresponds to the DNS template specified when creating the public frontend record above."]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-user-account",children:"Create a User Account"}),"\n",(0,t.jsxs)(n.p,{children:["With our ",(0,t.jsx)(n.code,{children:"ZROK_ADMIN_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"ZROK_API_ENDPOINT"})," environment variables set, we can create our first user account."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"zrok admin create account <email> <password>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is the account token you will use to enable each device's zrok environment."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"SuGzRPjVDIcF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"invite-additional-users",children:"Invite Additional Users"}),"\n",(0,t.jsxs)(n.p,{children:["Offer this onboarding method to your users if you have configured an email-sending service in your ",(0,t.jsx)(n.code,{children:"zrok"})," controller configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ zrok invite\nNew Email: user@domain.com\nConfirm Email: user@domain.com\ninvitation sent to 'user@domain.com'!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you look at the console output from your ",(0,t.jsx)(n.code,{children:"zrok"})," controller, you'll see a message like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[ 238.168]    INFO zrok/controller.(*inviteHandler).Handle: account request for 'user@domain.com' has registration token 'U2Ewt1UCn3ql'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can access your ",(0,t.jsx)(n.code,{children:"zrok"})," controller's registration UI by pointing a web browser at:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://localhost:18080/register/U2Ewt1UCn3ql\n"})}),"\n",(0,t.jsx)(n.p,{children:"The UI will ask you to set a password for your new account. Go ahead and do that."}),"\n",(0,t.jsx)(n.p,{children:"After doing that, I see the following output in my controller console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[ 516.778]    INFO zrok/controller.(*registerHandler).Handle: created account 'user@domain.com' with token 'SuGzRPjVDIcF'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Keep track of the token listed above (",(0,t.jsx)(n.code,{children:"SuGzRPjVDIcF"}),"). We'll use this to enable our shell for this ",(0,t.jsx)(n.code,{children:"zrok"})," deployment."]}),"\n",(0,t.jsx)(n.h2,{id:"enable-your-environment",children:"Enable Your Environment"}),"\n",(0,t.jsx)(n.p,{children:"On another device that can reach your Linux server by FQDN, configure the API endpoint and enable the environment with the account token you received when you created the first user account."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export ZROK_API_ENDPOINT=https://zrok.quigley.com\n# or\nzrok config set apiEndpoint https://zrok.quigley.com\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"zrok enable SuGzRPjVDIcF\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"zrok environment '2AS1WZ3Sz' enabled for 'SuGzRPjVDIcF'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"zrok status --secrets\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"Config:\n\n  CONFIG       VALUE                      SOURCE\n  apiEndpoint  https://zrok.quigley.com   env\n\nEnvironment:\n\n  PROPERTY       VALUE\n  Secret Token   SuGzRPjVDIcF\n  Ziti Identity  2AS1WZ3Sz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Congratulations. You have a working ",(0,t.jsx)(n.code,{children:"zrok"})," environment!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},9873:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/files/ctrl-8468281a3bbdbc5852c252b0af86a113.yml"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(6540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);