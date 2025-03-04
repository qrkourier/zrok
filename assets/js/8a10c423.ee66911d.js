"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3929],{633:(e,r,s)=>{s.d(r,{Ay:()=>o,RM:()=>t});var n=s(4848),i=s(8453);const t=[];function a(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Set up ",(0,n.jsx)(r.code,{children:"zrok"}),"'s Linux package repository by following ",(0,n.jsx)(r.a,{href:"/docs/next/guides/install/linux#install-zrok-from-the-repository",children:"the Linux install guide"}),", or run this one-liner to complete the repo setup and install packages."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -sSLf https://get.openziti.io/install.bash \\\n| sudo bash -s zrok-share\n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If you set up the repository by following the guide, then also install the ",(0,n.jsx)(r.code,{children:"zrok-share"})," package. This package provides the systemd service."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Ubuntu, Debian"',children:"sudo apt install zrok-share\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Fedora, Rocky"',children:"sudo dnf install zrok-share\n"})}),"\n"]}),"\n"]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},7715:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"guides/linux-user-share/index","title":"Linux User Share","description":"Overview","source":"@site/../docs/guides/linux-user-share/index.mdx","sourceDirName":"guides/linux-user-share","slug":"/guides/linux-user-share/","permalink":"/docs/next/guides/linux-user-share/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/linux-user-share/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Linux User Share"},"sidebar":"tutorialSidebar","previous":{"title":"Private Share","permalink":"/docs/next/guides/docker-share/docker_private_share_guide"},"next":{"title":"Self Hosting","permalink":"/docs/next/category/self-hosting"}}');var i=s(4848),t=s(8453),a=s(633);const o={title:"Linux User Share"},l=void 0,c={},h=[{value:"Overview",id:"overview",level:2},{value:"Install the Linux Package",id:"install-the-linux-package",level:2},...a.RM,{value:"Create a User Share Configuration File",id:"create-a-user-share-configuration-file",level:2},{value:"Edit the User Share Configuration File",id:"edit-the-user-share-configuration-file",level:2},{value:"Start the User Share Service",id:"start-the-user-share-service",level:2},{value:"Check the User Share Journal",id:"check-the-user-share-journal",level:2},{value:"Add Another User Share",id:"add-another-user-share",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(r.p,{children:["You can run any number of zrok share services as ",(0,i.jsx)(r.code,{children:"systemd --user"})," units with your Linux user's zrok environment in ",(0,i.jsx)(r.code,{children:"~/.zrok"}),". This is like ",(0,i.jsx)(r.a,{href:"/docs/next/guides/frontdoor",children:"zrok frontdoor"})," except that frontdoor is a system service managed by root separately from your user's login. Linux user shares, Linux system services, and Docker shares all use the same configuration environment variables."]}),"\n",(0,i.jsx)(r.h2,{id:"install-the-linux-package",children:"Install the Linux Package"}),"\n",(0,i.jsxs)(r.p,{children:["The package provides the ",(0,i.jsx)(r.code,{children:"zrok"})," executable and service unit template."]}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(r.h2,{id:"create-a-user-share-configuration-file",children:"Create a User Share Configuration File"}),"\n",(0,i.jsxs)(r.p,{children:["Substitute a name for your instance in place of ",(0,i.jsx)(r.code,{children:"my-instance"})," in the following example. To avoid character escaping problems, use only letters, numbers, hyphens, and underscores in the instance name, not spaces or other special characters."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'ZROK_INSTANCE="my-instance"\ncp /opt/openziti/etc/zrok/zrok-share.env ~/.zrok/zrok-share@${ZROK_INSTANCE}.env\n'})}),"\n",(0,i.jsx)(r.h2,{id:"edit-the-user-share-configuration-file",children:"Edit the User Share Configuration File"}),"\n",(0,i.jsxs)(r.p,{children:["Edit the configuration file in ",(0,i.jsx)(r.code,{children:"~/.zrok/zrok-share@${ZROK_INSTANCE}.env"})," as you would for ",(0,i.jsx)(r.a,{href:"/docs/next/guides/frontdoor",children:"zrok frontdoor"}),', except ignore the first section "ZROK ENVIRONMENT" because user shares re-use ',(0,i.jsx)(r.code,{children:"~/.zrok"})," and do not need a separate zrok environment."]}),"\n",(0,i.jsx)(r.h2,{id:"start-the-user-share-service",children:"Start the User Share Service"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"systemctl --user enable --now zrok-share@${ZROK_INSTANCE}.service\n"})}),"\n",(0,i.jsx)(r.h2,{id:"check-the-user-share-journal",children:"Check the User Share Journal"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"journalctl --user -lfu zrok-share@${ZROK_INSTANCE}.service\n"})}),"\n",(0,i.jsx)(r.h2,{id:"add-another-user-share",children:"Add Another User Share"}),"\n",(0,i.jsxs)(r.p,{children:["To create another user share, choose another instance name, copy the ",(0,i.jsx)(r.code,{children:"zrok-share.env"})," file, edit the configuration file, and start the service."]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>o});var n=s(6540);const i={},t=n.createContext(i);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);