"use strict";(self.webpackChunkusbnova_com=self.webpackChunkusbnova_com||[]).push([[475],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=u(a),d=l,c=N["".concat(o,".").concat(d)]||N[d]||k[d]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3513:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={title:"Functions",description:"All available script functions.",sidebar_position:20},i=void 0,p={unversionedId:"scripting/functions",id:"scripting/functions",title:"Functions",description:"All available script functions.",source:"@site/docs/scripting/functions.md",sourceDirName:"scripting",slug:"/scripting/functions",permalink:"/docs/scripting/functions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/functions.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Functions",description:"All available script functions.",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/scripting/basics"},next:{title:"Keys",permalink:"/docs/scripting/keys"}},o={},u=[{value:"Available Keyboard Layouts",id:"available-keyboard-layouts",level:2}],m={toc:u};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some USB Nova specific features are not documented yet.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REM Hello World!")),(0,l.kt)("td",{parentName:"tr",align:null},"Comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULT_DELAY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,l.kt)("td",{parentName:"tr",align:null},"Time in ms between every command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DELAY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DELAY 1000")),(0,l.kt)("td",{parentName:"tr",align:null},"Delay in ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,l.kt)("td",{parentName:"tr",align:null},"Types the following string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REPEAT")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"REPLAY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REPEAT 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Repeats the last command n times")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOCALE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOCALE DE")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the keyboard layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KEYCODE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KEYCODE 0x02 0x04")),(0,l.kt)("td",{parentName:"tr",align:null},"Types a specific key code (modifier, key1","[, ..., key6]",") in decimal or hexadecimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LED 40 20 10")),(0,l.kt)("td",{parentName:"tr",align:null},"Changes the color of the LED in decimal RGB values (0-255)")))),(0,l.kt)("h2",{id:"available-keyboard-layouts"},"Available Keyboard Layouts"),(0,l.kt)("p",null,"Currently supported keyboard layouts:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BE"),(0,l.kt)("li",{parentName:"ul"},"BG"),(0,l.kt)("li",{parentName:"ul"},"CA-CM"),(0,l.kt)("li",{parentName:"ul"},"CA-FR"),(0,l.kt)("li",{parentName:"ul"},"CH-DE"),(0,l.kt)("li",{parentName:"ul"},"CH-FR"),(0,l.kt)("li",{parentName:"ul"},"CZ"),(0,l.kt)("li",{parentName:"ul"},"DE"),(0,l.kt)("li",{parentName:"ul"},"DK"),(0,l.kt)("li",{parentName:"ul"},"EE"),(0,l.kt)("li",{parentName:"ul"},"ES-LA"),(0,l.kt)("li",{parentName:"ul"},"ES"),(0,l.kt)("li",{parentName:"ul"},"FI"),(0,l.kt)("li",{parentName:"ul"},"FR"),(0,l.kt)("li",{parentName:"ul"},"GB"),(0,l.kt)("li",{parentName:"ul"},"GR"),(0,l.kt)("li",{parentName:"ul"},"HU"),(0,l.kt)("li",{parentName:"ul"},"IE"),(0,l.kt)("li",{parentName:"ul"},"IN"),(0,l.kt)("li",{parentName:"ul"},"IS"),(0,l.kt)("li",{parentName:"ul"},"IT"),(0,l.kt)("li",{parentName:"ul"},"LT"),(0,l.kt)("li",{parentName:"ul"},"LV"),(0,l.kt)("li",{parentName:"ul"},"NL"),(0,l.kt)("li",{parentName:"ul"},"NO"),(0,l.kt)("li",{parentName:"ul"},"PL"),(0,l.kt)("li",{parentName:"ul"},"PT-BR"),(0,l.kt)("li",{parentName:"ul"},"PT"),(0,l.kt)("li",{parentName:"ul"},"RO"),(0,l.kt)("li",{parentName:"ul"},"RU"),(0,l.kt)("li",{parentName:"ul"},"SE"),(0,l.kt)("li",{parentName:"ul"},"SI"),(0,l.kt)("li",{parentName:"ul"},"SK"),(0,l.kt)("li",{parentName:"ul"},"TR"),(0,l.kt)("li",{parentName:"ul"},"UA"),(0,l.kt)("li",{parentName:"ul"},"US"),(0,l.kt)("li",{parentName:"ul"},"BE_MAC"),(0,l.kt)("li",{parentName:"ul"},"BG_MAC"),(0,l.kt)("li",{parentName:"ul"},"CA_FR_MAC"),(0,l.kt)("li",{parentName:"ul"},"CH_DE_MAC"),(0,l.kt)("li",{parentName:"ul"},"CH_FR_MAC"),(0,l.kt)("li",{parentName:"ul"},"CZ_MAC"),(0,l.kt)("li",{parentName:"ul"},"DE_MAC"),(0,l.kt)("li",{parentName:"ul"},"DK_MAC"),(0,l.kt)("li",{parentName:"ul"},"EE_MAC"),(0,l.kt)("li",{parentName:"ul"},"ES_MAC"),(0,l.kt)("li",{parentName:"ul"},"ES_LA_MAC"),(0,l.kt)("li",{parentName:"ul"},"FI_MAC"),(0,l.kt)("li",{parentName:"ul"},"FR_MAC"),(0,l.kt)("li",{parentName:"ul"},"GB_MAC"),(0,l.kt)("li",{parentName:"ul"},"GR_MAC"),(0,l.kt)("li",{parentName:"ul"},"HU_MAC"),(0,l.kt)("li",{parentName:"ul"},"IN_MAC"),(0,l.kt)("li",{parentName:"ul"},"IS_MAC"),(0,l.kt)("li",{parentName:"ul"},"IT_MAC"),(0,l.kt)("li",{parentName:"ul"},"LT_MAC"),(0,l.kt)("li",{parentName:"ul"},"LV_MAC"),(0,l.kt)("li",{parentName:"ul"},"NL_MAC"),(0,l.kt)("li",{parentName:"ul"},"NO_MAC"),(0,l.kt)("li",{parentName:"ul"},"PL_MAC"),(0,l.kt)("li",{parentName:"ul"},"PT_MAC"),(0,l.kt)("li",{parentName:"ul"},"PT_BR_MAC"),(0,l.kt)("li",{parentName:"ul"},"RO_MAC"),(0,l.kt)("li",{parentName:"ul"},"RU_MAC"),(0,l.kt)("li",{parentName:"ul"},"SE_MAC"),(0,l.kt)("li",{parentName:"ul"},"SI_MAC"),(0,l.kt)("li",{parentName:"ul"},"SK_MAC"),(0,l.kt)("li",{parentName:"ul"},"TR_MAC"),(0,l.kt)("li",{parentName:"ul"},"UA_MAC"),(0,l.kt)("li",{parentName:"ul"},"US_MAC")))}k.isMDXComponent=!0}}]);