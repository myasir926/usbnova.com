"use strict";(self.webpackChunkusbnova_com=self.webpackChunkusbnova_com||[]).push([[603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Hello World Script Example",description:"A simple example to get you started with BadUSB script.",sidebar_position:30},l=void 0,i={unversionedId:"usage/helloworld",id:"usage/helloworld",title:"Hello World Script Example",description:"A simple example to get you started with BadUSB script.",source:"@site/docs/usage/helloworld.md",sourceDirName:"usage",slug:"/usage/helloworld",permalink:"/docs/usage/helloworld",draft:!1,editUrl:"https://github.com/SpacehuhnTech/usbnova.com/blob/main/docs/usage/helloworld.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Hello World Script Example",description:"A simple example to get you started with BadUSB script.",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Change Keyboard Layout",permalink:"/docs/usage/layout"},next:{title:"Prevent Keyboard Setup Assistant",permalink:"/docs/usage/keyboardassistant"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Here\'s a simple example to get you started. It opens notepad and types out "Hello World!".\nIt uses the US keyboard layout and is made for Windows.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Hello World for Windows\nLOCALE US\nDEFAULT_DELAY 200\nGUI r\nSTRING notepad\nENTER\nSTRING Hello World!\n")))}d.isMDXComponent=!0}}]);