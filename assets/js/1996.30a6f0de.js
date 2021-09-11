"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1996],{56573:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(27378);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},24142:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(30808),a=n(27378),o=n(4289),l=n(50353),i=n(45626),c=n(161),s=(0,a.createContext)({collectLink:function(){}}),u=n(98948),m=n(51721),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,g=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),w=(0,l.Z)().siteConfig,_=w.trailingSlash,y=w.baseUrl,C=(0,u.C)().withBaseUrl,N=(0,a.useContext)(s),S=v||h,L=(0,i.Z)(S),I=null==S?void 0:S.replace("pathname://",""),B=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;B&&L&&(B=(0,m.applyTrailingSlash)(B,{trailingSlash:_,baseUrl:y}));var D,T=(0,a.useRef)(!1),P=f?o.OL:o.rU,M=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!M&&L&&null!=B&&window.docusaurus.prefetch(B),function(){M&&D&&D.disconnect()}}),[B,M,L]);var U=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,A=!B||!L||U;return B&&L&&!U&&!p&&N.collectLink(B),A?a.createElement("a",Object.assign({href:B},S&&!L&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(P,Object.assign({},Z,{onMouseEnter:function(){T.current||null==B||(window.docusaurus.preload(B),T.current=!0)},innerRef:function(e){var t,n;M&&e&&L&&(t=e,n=function(){null!=B&&window.docusaurus.prefetch(B)},(D=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))}))).observe(t))},to:B||""},f&&{isActive:b,activeClassName:g}))}},45626:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},98948:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(50353),a=n(45626);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},31554:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(27378),a="iconExternalLink_pqex",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},51996:function(e,t,n){n.d(t,{Z:function(){return Ie}});var r=n(27378),a=n(38944),o=n(69635),l=n(11787),i=n(35013),c="skipToContent_3wvD";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,i.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(25773),d=n(30808),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,i=(0,d.Z)(e,f);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},i),r.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var h="announcementBar_2FrG",g="announcementBarPlaceholder_3Bc7",b="announcementBarClose_QGKR",p="announcementBarContent_1th2";var E=function(){var e=(0,i.nT)(),t=e.isClosed,n=e.close,o=(0,i.LU)().announcementBar;if(!o)return null;var c=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!c||m&&t?null:r.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&r.createElement("div",{className:g}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:c}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",b),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14})):null)},k=n(78347),Z=n(76457),w={toggle:"toggle_2wFP"},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggle,w.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggle,w.light),style:n},t)},C=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,i=e.onChange,c=(0,r.useState)(o),s=c[0],u=c[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function N(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,c=(0,Z.Z)();return r.createElement(C,(0,m.Z)({disabled:!c,icons:{checked:r.createElement(_,{icon:n,style:a}),unchecked:r.createElement(y,{icon:o,style:l})}},e))}var S=n(29237),L=n(95135),I=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],c=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,L.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)l(!0);else{if(c.current)return c.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-u,i=window.innerHeight;a&&r>=a?l(!1):r+i<o&&l(!0)}}),[u,c]),(0,i.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var B=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},D=n(98245),T=n(76889),P=n(75330),M=n(13059),U=["width","height","className"],A=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,i=(0,d.Z)(e,U);return r.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},i),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},O=["width","height","className"];function x(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,i=(0,d.Z)(e,O);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},i),r.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var R="toggle_2vag",W="navbarHideable_z9Sw",j="navbarHidden_2kTK",H="navbarSidebarToggle_3XMU",V="navbarSidebarCloseSvg_1G3c",z="right";function q(){return(0,i.LU)().navbar.items}function F(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function K(e){var t=e.sidebarShown,n=e.toggleSidebar;B(t);var o=q(),c=F(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:a}),l=(0,i.D9)(o),c=(0,r.useState)((function(){return!1})),s=c[0],u=c[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(M.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(N,{className:H,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(x,{width:20,height:20,className:V}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var G=function(){var e,t=(0,i.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,D.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,i.Rb)((function(){a&&o(!1)}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),c=F(),s=(0,T.gA)(),u=I(n),d=u.navbarRef,f=u.isNavbarVisible,v=q(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:z)}))}}(v),b=g.leftItems,p=g.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[W]=n,e[j]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},r.createElement(A,null)),r.createElement(M.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({},e,{key:t}))})),!c.disabled&&r.createElement(N,{className:R,checked:c.isDarkTheme,onChange:c.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&r.createElement(K,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},X=n(24142),Y=n(98948),J=n(45626),Q="footerLogoLink_1gX9",$=n(68167),ee=n(31554),te=["to","href","label","prependBaseUrlToHref"];function ne(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,te),i=(0,Y.Z)(t),c=(0,Y.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(X.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?c:n}:{to:i},l),n&&!(0,J.Z)(n)?r.createElement("span",null,a,r.createElement(ee.Z,null)):a)}var re=function(e){var t=e.sources,n=e.alt;return r.createElement($.Z,{className:"footer__logo",alt:n,sources:t})};var ae=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,c=t.logo,s=void 0===c?{}:c,u={light:(0,Y.Z)(s.src),dark:(0,Y.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(ne,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(X.Z,{href:s.href,className:Q},r.createElement(re,{alt:s.alt,sources:u})):r.createElement(re,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},oe=n(161),le=n(30138),ie=(0,i.WA)("theme"),ce="light",se="dark",ue=function(e){return e===se?se:ce},me=function(e){(0,i.WA)("theme").set(ue(e))},de=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return oe.Z.canUseDOM?ue(document.documentElement.getAttribute("data-theme")):ue(e)}(t)),l=o[0],c=o[1],s=(0,r.useCallback)((function(){c(ce),me(ce)}),[]),u=(0,r.useCallback)((function(){c(se),me(se)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ue(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=ie.get();null!==e&&c(ue(e))}catch(t){le.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?se:ce)}))}),[]),{isDarkTheme:l===se,setLightTheme:s,setDarkTheme:u}},fe=n(20579);var ve=function(e){var t=de(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(fe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},he=n(30138),ge="docusaurus.tab.",be=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(ge)){var n=t.substring(ge.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){he.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},pe=n(84956);var Ee=function(e){var t=be(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(pe.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ke(e){var t=e.children;return r.createElement(ve,null,r.createElement(i.pl,null,r.createElement(Ee,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t)))))}var Ze=n(55361),we=n(50353);function _e(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(Ze.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var ye=n(71956);function Ce(){var e=(0,we.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,i.l5)();return r.createElement(Ze.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ne(e){var t=e.permalink,n=(0,we.Z)().siteConfig.url,a=function(){var e=(0,we.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,Y.Z)(t)}(),l=t?""+n+t:a;return r.createElement(Ze.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function Se(e){var t=(0,we.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,Y.Z)(n),p=(0,i.pe)(d),E=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(Ze.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:b}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(ye.Z,{image:u}),v&&r.createElement(ye.Z,{image:v}),r.createElement(ye.Z,{description:f,keywords:h}),r.createElement(Ne,null),r.createElement(Ce,null),r.createElement(_e,(0,m.Z)({tag:i.HX,locale:o},g)),r.createElement(Ze.Z,null,s.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var Le=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ie=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Le(),r.createElement(ke,null,r.createElement(Se,e),r.createElement(u,null),r.createElement(E,null),r.createElement(G,null),r.createElement("div",{className:(0,a.Z)(i.kM.wrapper.main,o,l)},t),!n&&r.createElement(ae,null))}},13059:function(e,t,n){var r=n(25773),a=n(30808),o=n(27378),l=n(24142),i=n(68167),c=n(98948),s=n(50353),u=n(35013),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.Z)(e,m),p=(0,c.Z)(v.href||"/"),E={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)};return o.createElement(l.Z,(0,r.Z)({to:p},b,v.target&&{target:v.target}),v.src&&o.createElement(i.Z,{className:h,sources:E,alt:v.alt||d||t}),null!=d&&o.createElement("b",{className:g},d))}},39970:function(e,t,n){n.d(t,{O:function(){return g}});var r=n(25773),a=n(30808),o=n(27378),l=n(38944),i=n(24142),c=n(98948),s=n(31554),u=n(45626),m=n(75330),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function g(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,g=void 0===h?"":h,b=e.prependBaseUrlToHref,p=(0,a.Z)(e,d),E=(0,c.Z)(m),k=(0,c.Z)(n),Z=(0,c.Z)(f,{forcePrependBaseUrl:!0}),w=v&&f&&!(0,u.Z)(f),_="dropdown__link--active"===g;return o.createElement(i.Z,(0,r.Z)({},f?{href:b?Z:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(g)?"":g,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),p),w?o.createElement("span",null,v,o.createElement(s.Z,_&&{width:12,height:12})):v)}function b(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,f),s=o.createElement(g,(0,r.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(g,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,i=(e.position,(0,a.Z)(e,h)),c=l?p:b;return o.createElement(c,(0,r.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,m.E)(l)}))}},5807:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(25773),a=n(30808),o=n(27378),l=n(39970),i=n(76889),c=n(38944),s=n(75330),u=n(35013),m=n(51721),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),g=(0,i.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,i.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([b,E,k].filter(Boolean)),n),w=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},18259:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(25773),a=n(30808),o=n(27378),l=n(39970),i=n(43727),c=n(76889),s=n(35013),u=n(11787),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,c.Iw)(v),k=(0,c.gB)(v),Z=(0,c.yW)(v),w=(0,s.J)(v),_=w.preferredVersion,y=w.savePreferredVersionName;var C,N=(C=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(g,C,b)),S=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,L=f&&N?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,I=f&&N?void 0:d(S).path;return N.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,items:N,isActive:h?function(){return!1}:void 0}))}},71393:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(25773),a=n(30808),o=n(27378),l=n(39970),i=n(76889),c=n(35013),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:b,to:p}))}},43727:function(e,t,n){var r=n(25773),a=n(30808),o=n(27378),l=n(38944),i=n(35013),c=n(39970),s=n(75330),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":g})},o.createElement(c.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),h=f(n,v),g=(0,i.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,E=g.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?h:v;return o.createElement(l,r)}},75330:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return E}});var r=n(30808),a=n(27378),o=n(39970),l=n(43727),i=n(25773),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(50353),m=n(35013),d="iconLanguage_geqI",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,p=(0,m.l5)();function E(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),w=t?"Languages":E(h);return a.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,w)),items:Z}))}var h=n(78347);function g(e){return e.mobile?null:a.createElement(h.Z,null)}var b=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return l.Z},docsVersion:function(){return n(71393).Z},docsVersionDropdown:function(){return n(18259).Z},doc:function(){return n(5807).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,b),o=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(o,n)}},71956:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(27378),a=n(55361),o=n(35013),l=n(98948);function i(e){var t=e.title,n=e.description,i=e.keywords,c=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=c?m(c,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),i&&r.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},20579:function(e,t,n){var r=n(27378).createContext(void 0);t.Z=r},68167:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(25773),a=n(30808),o=n(27378),l=n(38944),i=n(76457),c=n(29237),s={themedImage:"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},84956:function(e,t,n){var r=(0,n(27378).createContext)(void 0);t.Z=r},95135:function(e,t,n){var r=n(27378),a=n(161),o=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},29237:function(e,t,n){var r=n(27378),a=n(20579);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},98245:function(e,t,n){var r=n(27378),a=n(161),o="desktop",l="mobile",i="ssr";function c(){return a.Z.canUseDOM?window.innerWidth>996?o:l:i}t.Z=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},78347:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(25773),a=n(30808),o=n(27378),l=n(31542),i=n(50353),c=n(69635),s=n(98948),u=n(24142),m=n(55361),d=n(49033);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(56573);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=g(e,["translations"]),l=r.buttonText,i=void 0===l?"Search":l,c=r.buttonAriaLabel,s=void 0===c?"Search":c,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===b?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(76889),k=n(35013);function Z(){var e=function(){var e=(0,i.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),r=(0,k.Oh)(),a=[k.HX].concat(Object.keys(t).map((function(e){var a,o,l=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,i=r[e],c=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:i)?o:c;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(11787),_="searchBox_2oeJ",y=["contextualSearch"],C=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,u,d=e.contextualSearch,f=(0,a.Z)(e,y),v=(0,i.Z)().siteMetadata,h=Z(),g=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],b=d?[].concat(h,g):g,E=Object.assign({},f.searchParameters,{facetFilters:b}),k=(0,s.C)().withBaseUrl,L=(0,c.k6)(),I=(0,o.useRef)(null),B=(0,o.useRef)(null),D=(0,o.useState)(!1),T=D[0],P=D[1],M=(0,o.useState)(null),U=M[0],A=M[1],O=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(5610).then(n.bind(n,95610)),Promise.all([n.e(532),n.e(9127)]).then(n.bind(n,89127)),Promise.all([n.e(532),n.e(3729)]).then(n.bind(n,43729))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),x=(0,o.useCallback)((function(){O().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),P(!0)}))}),[O,P]),R=(0,o.useCallback)((function(){P(!1),I.current.remove()}),[P]),W=(0,o.useCallback)((function(e){O().then((function(){P(!0),A(e.key)}))}),[O,P,A]),j=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,H=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,V=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,r.Z)({},e,{onClose:R}))}}),[R]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,l])}({isOpen:T,onOpen:x,onClose:R,onInput:W,searchButtonRef:B});var q=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(p,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:x,ref:B,translations:{buttonText:q,buttonAriaLabel:q}})),T&&(0,l.createPortal)(o.createElement(C,(0,r.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:U,navigator:j,transformItems:H,hitComponent:N,resultsFooterComponent:V,transformSearchClient:z},f,{searchParameters:E})),I.current))}var I=function(){var e=(0,i.Z)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},49033:function(e,t,n){var r=n(69635),a=n(161),o=n(50353);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}},42520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],l="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,l)}},51721:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(42520);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29219);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29219:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);