"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5348],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93776:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=["components"],p={title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Token"},c=void 0,l={unversionedId:"specs/gateway",id:"specs/gateway",isDocsHomePage:!1,title:"Wechaty Puppet Service Token Gateway",description:"What is Wechaty Puppet Service Token Gateway?",source:"@site/docs/specs/gateway.mdx",sourceDirName:"specs",slug:"/specs/gateway",permalink:"/docs/specs/gateway",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/gateway.mdx",tags:[],version:"current",lastUpdatedBy:"Rajiv Singh",lastUpdatedAt:1631370748,formattedLastUpdatedAt:"9/11/2021",frontMatter:{title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Token"}},s=[{value:"What is Wechaty Puppet Service Token Gateway?",id:"what-is-wechaty-puppet-service-token-gateway",children:[]},{value:"Starting Wechaty Puppet Servcie Token Gateway",id:"starting-wechaty-puppet-servcie-token-gateway",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-wechaty-puppet-service-token-gateway"},"What is Wechaty Puppet Service Token Gateway?"),(0,i.kt)("p",null,"Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET"),(0,i.kt)("td",{parentName:"tr",align:null},"defines the Wechaty Puppet Provider NPM name and its parameters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"intializes the unique Wechaty Puppet Service Token,that is generating  using the ",(0,i.kt)("a",{parentName:"td",href:"https://www.uuidgenerator.net/version4"},"UUID Generator"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET_SERVER_PORT"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the  free server port for the Wechaty Puppet Service,also used for docker port mapping"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_PUPPET_SERVER_PORT=8788 // any available port can be visited from internet"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_LOG"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the log mode for the service. Usually initialize the variable to ",(0,i.kt)("inlineCode",{parentName:"td"},"Verbose")," mode as this gives more debug log messages. ",(0,i.kt)("inlineCode",{parentName:"td"},"verbose")," mode is an option available in many OS that gives details on what the computer is doing,which drivers and software are being installed or loaded and many more."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_LOG="verbose"'))))),(0,i.kt)("h2",{id:"starting-wechaty-puppet-servcie-token-gateway"},"Starting Wechaty Puppet Servcie Token Gateway"),(0,i.kt)("p",null,"After the docker image has been created, use a docker command  to start the Wechaty Puppet Service Token Gateway with the below configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:"run -ti --rm \\",run:!0,"-ti":!0,"--rm":!0,"\\":!0},'  \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  \\\n  -e WECHATY_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  \\\n  -e WECHATY_LOG \\\n  \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  \\\n  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT\u201d \\\n  wechaty/wechaty:0.56\n')),(0,i.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"Use the command given below to check the running of the Wechaty Puppet Service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n")),(0,i.kt)("p",null,"Replace ${WECHATY_TOKEN} to your real token in the above configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 If you get an HTTP/200 response with a JSON object body that includes your ",(0,i.kt)("inlineCode",{parentName:"li"},"ip")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"port"),", then you are all set."),(0,i.kt)("li",{parentName:"ul"},"\u274c If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooted.")))}d.isMDXComponent=!0}}]);