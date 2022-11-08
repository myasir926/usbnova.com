"use strict";(self.webpackChunkusbnova_com=self.webpackChunkusbnova_com||[]).push([[428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Prevent Keyboard Setup Assistant",description:"How to prevent the Keyboard Setup Assistant on macOS.",sidebar_position:40},i=void 0,s={unversionedId:"usage/keyboardassistant",id:"usage/keyboardassistant",title:"Prevent Keyboard Setup Assistant",description:"How to prevent the Keyboard Setup Assistant on macOS.",source:"@site/docs/usage/keyboardassistant.md",sourceDirName:"usage",slug:"/usage/keyboardassistant",permalink:"/docs/usage/keyboardassistant",draft:!1,editUrl:"https://github.com/SpacehuhnTech/usbnova.com/blob/main/docs/usage/keyboardassistant.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Prevent Keyboard Setup Assistant",description:"How to prevent the Keyboard Setup Assistant on macOS.",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Hello World Script Example",permalink:"/docs/usage/helloworld"},next:{title:"Modes and Colors",permalink:"/docs/usage/"}},p={},l=[],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Keyboard Setup Assistant on macOS",src:n(2168).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"The keyboard setup assistant can break your attack flow. To prevent that, you have to make the BadUSB appear as an Apple keyboard."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can change the IDs to anything you want. Websites like devicehuhnt.com have a database that you can search for registered USB devices.")),(0,a.kt)("p",null,"This is how you make the USB Nova appear as a ",(0,a.kt)("em",{parentName:"p"},"Apple Aluminium Keyboard with ISO layout"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect your USB Nova in setup mode"),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"preferences.json")," in a text editor"),(0,a.kt)("li",{parentName:"ol"},"Change line ",(0,a.kt)("inlineCode",{parentName:"li"},'"hid_vid": "16D0",')," to ",(0,a.kt)("inlineCode",{parentName:"li"},'"hid_vid": "05AC",')),(0,a.kt)("li",{parentName:"ol"},"Change line ",(0,a.kt)("inlineCode",{parentName:"li"},'"hid_pid": "11A4",')," to ",(0,a.kt)("inlineCode",{parentName:"li"},'"hid_pid": "0250",')),(0,a.kt)("li",{parentName:"ol"},"Don't forget to save your changes")),(0,a.kt)("p",null,"Next time you plugin your USB Nova, it will use these IDs, and the target computer will think its an Apple Keyboard."))}u.isMDXComponent=!0},2168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/assistant-722fdceba967d5865b139ed596144a77.jpg"}}]);