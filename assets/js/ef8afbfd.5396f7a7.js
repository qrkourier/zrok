"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9905],{9530:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/self-hosting/linux/nginx","title":"NGINX Reverse Proxy for zrok","description":"Walkthrough Video","source":"@site/../docs/guides/self-hosting/linux/nginx.mdx","sourceDirName":"guides/self-hosting/linux","slug":"/guides/self-hosting/linux/nginx","permalink":"/docs/next/guides/self-hosting/linux/nginx","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/linux/nginx.mdx","tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"sidebar_position":50,"sidebar_label":"NGINX TLS"},"sidebar":"tutorialSidebar","previous":{"title":"Linux","permalink":"/docs/next/guides/self-hosting/linux/"},"next":{"title":"Interstitial Pages","permalink":"/docs/next/guides/self-hosting/interstitial-page"}}');var o=r(4848),i=r(8453);const s={sidebar_position:50,sidebar_label:"NGINX TLS"},l="NGINX Reverse Proxy for zrok",a={},c=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Choose a Reverse Proxy Address",id:"choose-a-reverse-proxy-address",level:2},{value:"Obtain a Wildcard Server Certificate",id:"obtain-a-wildcard-server-certificate",level:2},{value:"Install NGINX",id:"install-nginx",level:2},{value:"Configure NGINX",id:"configure-nginx",level:2},{value:"Restart NGINX",id:"restart-nginx",level:2},{value:"Check the Firewall",id:"check-the-firewall",level:2},{value:"Update the zrok Frontend",id:"update-the-zrok-frontend",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"nginx-reverse-proxy-for-zrok",children:"NGINX Reverse Proxy for zrok"})}),"\n",(0,o.jsx)(n.h2,{id:"walkthrough-video",children:"Walkthrough Video"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/870A5dke_u4?start=1080",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,o.jsxs)(n.p,{children:["I'll assume you have a running ",(0,o.jsx)(n.code,{children:"zrok"})," controller and frontend and wish to front both with NGINX providing server TLS. Go back to ",(0,o.jsx)(n.a,{href:"/docs/next/guides/self-hosting/linux/",children:"Self-Hosting Guide"})," if you still need to spin those up."]}),"\n",(0,o.jsx)(n.h2,{id:"choose-a-reverse-proxy-address",children:"Choose a Reverse Proxy Address"}),"\n",(0,o.jsxs)(n.p,{children:["I'll use ",(0,o.jsx)(n.code,{children:"https://api.zrok.quigley.com:443"})," in this example, and assume you already set up wildcard DNS like ",(0,o.jsx)(n.code,{children:"*.zrok.quigley.com"}),". This lets us elect ",(0,o.jsx)(n.code,{children:"api.zrok.quigley.com"})," as the controller DNS name, and forward any other incoming requests to the zrok public frontend."]}),"\n",(0,o.jsx)(n.h2,{id:"obtain-a-wildcard-server-certificate",children:"Obtain a Wildcard Server Certificate"}),"\n",(0,o.jsx)(n.p,{children:"You must complete a DNS challenge to obtain a wildcard certificate from Let's Encrypt. I'll assume you know how to create the necessary TXT record in the DNS zone you're using with zrok."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install certbot: ",(0,o.jsx)(n.a,{href:"https://eff-certbot.readthedocs.io/en/stable/install.html",children:"https://eff-certbot.readthedocs.io/en/stable/install.html"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run certbot with the manual plugin: ",(0,o.jsx)(n.a,{href:"https://certbot.eff.org/docs/using.html#manual",children:"https://certbot.eff.org/docs/using.html#manual"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# install cert for *.zrok.quigley.com in /etc/letsencrypt\nsudo certbot certonly --manual\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-nginx",children:(0,o.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/",children:"Install NGINX"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-nginx",children:"Configure NGINX"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"server {\n    listen              443 ssl;\n    server_name         api.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass      http://127.0.0.1:18080;\n      error_log       /var/log/nginx/zrok-controller.log;\n    }\n\n}\n\nmap $http_upgrade $connection_upgrade {\n    default      keep-alive;\n    'websocket'  upgrade;\n    ''           close;\n}\n\nserver {\n    listen              443 ssl;\n    server_name         *.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass       http://127.0.0.1:8080;\n      proxy_set_header Host $host;\n      error_log        /var/log/nginx/zrok-frontend.log;\n      proxy_busy_buffers_size   512k;\n      proxy_buffers    4 512k;\n      proxy_buffer_size   256k;\n\n      proxy_http_version 1.1;\n      proxy_set_header Upgrade $http_upgrade;\n      proxy_set_header Connection \"upgrade\";\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"restart-nginx",children:"Restart NGINX"}),"\n",(0,o.jsx)(n.p,{children:"Load the new configuration by restarting NGINX. Check the logs to make sure it's happy."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Started A high performance web server and a reverse proxy server."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"check-the-firewall",children:"Check the Firewall"}),"\n",(0,o.jsx)(n.p,{children:"If you followed the non-TLS quickstart then you may have opened 8080,108080/tcp in your firewall. You can go ahead and replace those exceptions with 443/tcp because only NGINX needs to be reachable for zrok to function."}),"\n",(0,o.jsx)(n.h2,{id:"update-the-zrok-frontend",children:"Update the zrok Frontend"}),"\n",(0,o.jsxs)(n.p,{children:['List available frontends to obtain the token identifier of the frontend named "public". You may need to set ',(0,o.jsx)(n.code,{children:"ZROK_ADMIN_TOKEN"})," or ",(0,o.jsx)(n.code,{children:"ZROK_API_ENDPOINT"})," before running ",(0,o.jsx)(n.code,{children:"zrok admin"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ zrok admin list frontends\n\n TOKEN         ZID        PUBLIC NAME  URL TEMPLATE                              CREATED AT                         UPDATED AT                    \n 2NiDTRYUww18  7DsLh9DXG  public       http://{token}.zrok.quigley.com:8080  2023-01-19 05:29:20.793 +0000 UTC  2023-01-19 06:17:25 +0000 UTC \n"})}),"\n",(0,o.jsx)(n.p,{children:"Update the URL template to use NGINX."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ zrok admin update frontend 2NiDTRYUww18 --url-template https://{token}.zrok.quigley.com:443\n[   0.028]    INFO main.(*adminUpdateFrontendCommand).run: updated global frontend '2NiDTRYUww18'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(6540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);