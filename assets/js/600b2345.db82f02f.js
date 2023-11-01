"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),h=r,p=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(p,o(o({ref:t},c),{},{components:n})):i.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:40},o="Configuring Limits",l={unversionedId:"guides/self-hosting/metrics-and-limits/configuring-limits",id:"guides/self-hosting/metrics-and-limits/configuring-limits",title:"Configuring Limits",description:"If you have not yet configured metrics, please visit the metrics guide first before working through the limits configuration.",source:"@site/../docs/guides/self-hosting/metrics-and-limits/configuring-limits.md",sourceDirName:"guides/self-hosting/metrics-and-limits",slug:"/guides/self-hosting/metrics-and-limits/configuring-limits",permalink:"/docs/guides/self-hosting/metrics-and-limits/configuring-limits",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/metrics-and-limits/configuring-limits.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Configuring Metrics",permalink:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics"},next:{title:"OAuth",permalink:"/docs/category/oauth"}},s={},m=[{value:"The Global Controls",id:"the-global-controls",level:2},{value:"Resource Limits",id:"resource-limits",level:2},{value:"Bandwidth Limits",id:"bandwidth-limits",level:2},{value:"Limit Actions",id:"limit-actions",level:3},{value:"Unlimited Accounts",id:"unlimited-accounts",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-limits"},"Configuring Limits"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have not yet configured ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics"},"metrics"),", please visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics"},"metrics guide")," first before working through the limits configuration.")),(0,r.kt)("p",null,"The limits facility in ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is responsible for controlling the number of resources in use (environments, shares) and also for ensuring that any single account, environment, or share is held below the configured thresholds."),(0,r.kt)("p",null,"Take this ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," controller configuration stanza as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"limits:\n  enforcing:        true\n  cycle:            1m\n  environments:     -1\n  shares:           -1\n  bandwidth:\n    per_account:\n      period:       5m\n      warning:\n        rx:         -1\n        tx:         -1\n        total:      7242880\n      limit:\n        rx:         -1\n        tx:         -1\n        total:      10485760\n    per_environment:\n      period:       5m\n      warning:\n        rx:         -1\n        tx:         -1\n        total:      -1\n      limit:\n        rx:         -1\n        tx:         -1\n        total:      -1\n    per_share:\n      period:       5m\n      warning:\n        rx:         -1\n        tx:         -1\n        total:      -1\n      limit:\n        rx:         -1\n        tx:         -1\n        total:      -1\n")),(0,r.kt)("h2",{id:"the-global-controls"},"The Global Controls"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcing")," boolean will globally enable or disable limits for the controller."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cycle")," value controls how frequently the limits system will look for limited resources to re-enable."),(0,r.kt)("h2",{id:"resource-limits"},"Resource Limits"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"environments")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," values control the number of environments and shares that are allowed per-account. Any limit value can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),", which means ",(0,r.kt)("em",{parentName:"p"},"unlimited"),"."),(0,r.kt)("h2",{id:"bandwidth-limits"},"Bandwidth Limits"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bandwidth")," section is designed to provide a configurable system for controlling the amount of data transfer that can be performed by users of the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance. The bandwidth limits are configurable for each share, environment, and account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"per_account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"per_environment"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"per_share")," are all configured the same way:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"period")," specifies the time window for the bandwidth limit. See the documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#ParseDuration"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Duration.ParseDuration"))," for details about the format used for these durations. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"period")," is set to 5 minutes, then the limits implementation will monitor the send and receive traffic for the resource (share, environment, or account) for the last 5 minutes, and if the amount of data is greater than either the ",(0,r.kt)("inlineCode",{parentName:"p"},"warning")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," threshold, action will be taken."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rx")," value is the number of bytes ",(0,r.kt)("em",{parentName:"p"},"received")," by the resource. The ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," value is the number of bytes ",(0,r.kt)("em",{parentName:"p"},"transmitted")," by the resource. And ",(0,r.kt)("inlineCode",{parentName:"p"},"total")," is the combined ",(0,r.kt)("inlineCode",{parentName:"p"},"rx"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," value."),(0,r.kt)("p",null,"If the traffic quantity is greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"warning")," threshold, the user will receive an email notification letting them know that their data transfer size is rising and will eventually be limited (the email details the limit threshold)."),(0,r.kt)("p",null,"If the traffic quantity is greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," threshold, the resources will be limited until the traffic in the window (the last 5 minutes in our example) falls back below the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," threshold."),(0,r.kt)("h3",{id:"limit-actions"},"Limit Actions"),(0,r.kt)("p",null,"When a resource is limited, the actions taken differ depending on what kind of resource is being limited."),(0,r.kt)("p",null,"When a share is limited, the dial service policies for that share are removed. No other action is taken. This means that public frontends will simply return a ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," as if the share is no longer there. Private frontends will also return ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," errors. When the limit is relaxed, the dial policies are put back in place and the share will continue operating normally."),(0,r.kt)("p",null,"When an environment is limited, all of the shares in that environment become limited, and the user is not able to create new shares in that environment. When the limit is relaxed, all of the share limits are relaxed and the user is again able to add shares to the environment."),(0,r.kt)("p",null,"When an account is limited, all of the environments in that account become limited (limiting all of the shares), and the user is not able to create new environments or shares. When the limit is relaxed, all of the environments and shares will return to normal operation."),(0,r.kt)("h2",{id:"unlimited-accounts"},"Unlimited Accounts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," table in the database includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"limitless")," column. When this column is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the account is not subject to any of the limits in the system."))}d.isMDXComponent=!0}}]);