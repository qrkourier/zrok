"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2867],{2468:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"concepts/files","title":"Sharing Websites and Files","description":"With zrok it is possible to share files quickly and easily as well. To share files using zrok use","source":"@site/versioned_docs/version-0.4/concepts/files.md","sourceDirName":"concepts","slug":"/concepts/files","permalink":"/docs/concepts/files","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/concepts/files.md","tags":[],"version":"0.4","sidebarPosition":30,"frontMatter":{"title":"Sharing Websites and Files","sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"Sharing TCP and UDP Servers","permalink":"/docs/concepts/tunnels"},"next":{"title":"Open Source","permalink":"/docs/concepts/opensource"}}');var r=n(4848),t=n(8453);const o={title:"Sharing Websites and Files",sidebar_position:30},c=void 0,l={},a=[];function d(e){const s={code:"code",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["With ",(0,r.jsx)(s.code,{children:"zrok"})," it is possible to share files quickly and easily as well. To share files using ",(0,r.jsx)(s.code,{children:"zrok"})," use\nthe ",(0,r.jsx)(s.code,{children:"--backend-mode web"}),", for example: ",(0,r.jsx)(s.code,{children:"zrok share private . --backend-mode web"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Running with this mode will make it trivially easy to share files from the directory which the command\nwas run from."}),"\n",(0,r.jsx)(s.p,{children:"For example if you have a directory with a structure like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"-rw-r--r--+ 1 Michael None     7090 Apr 17 12:53 CHANGELOG.md\n-rw-r--r--+ 1 Michael None    11346 Apr 17 12:53 LICENSE\n-rw-r--r--+ 1 Michael None     2885 Apr 17 12:53 README.md\n-rwxr-xr-x+ 1 Michael None 44250624 Apr 17 13:00 zrok.exe*\n"})}),"\n",(0,r.jsx)(s.p,{children:"The files can be shared using a command such as:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"zrok share public --backend-mode web .\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Then the files can be access with a ",(0,r.jsx)(s.code,{children:"private"})," or ",(0,r.jsx)(s.code,{children:"public"})," share, for example as shown:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"zrok_share_web_files",src:n(3920).A+"",width:"952",height:"723"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"zrok"})," will automatically provide a stock website, which will allow the accessing user to browse and navigate the file tree. Clicking the files allows the user to download them."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"zrok"})," can also share a pre-rendered static HTML website. If you have a directory like this:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"-rw-rw-r--+ 1 Michael None 56 Jun 26 13:23 index.html\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"index.html"})," contains valid HTML, like this:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:"<html>\n<body>\n        <h1>Hello <code>zrok</code></h1>\n</html>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Sharing the directory will result in the following when you access the share in a web browser:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"zrok_share_web_website",src:n(6866).A+"",width:"952",height:"723"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"zrok"})," contains a built-in web server, which you can use to serve static websites as a share."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3920:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/zrok_share_web_files-936de420b39b071d71a8e275fe84e63d.png"},6866:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/zrok_share_web_website-5d4c550374b118d1992e488bb319e230.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(6540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);