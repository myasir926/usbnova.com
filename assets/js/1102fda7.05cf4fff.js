"use strict";(self.webpackChunkusbnova_com=self.webpackChunkusbnova_com||[]).push([[382],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7137:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Preferences",description:"USB Nova Preferences/Settings explained in detail",sidebar_position:30},i=void 0,o={unversionedId:"preferences",id:"preferences",title:"Preferences",description:"USB Nova Preferences/Settings explained in detail",source:"@site/docs/preferences.md",sourceDirName:".",slug:"/preferences",permalink:"/docs/preferences",draft:!1,editUrl:"https://github.com/SpacehuhnTech/usbnova.com/blob/main/docs/preferences.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Preferences",description:"USB Nova Preferences/Settings explained in detail",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Keys",permalink:"/docs/scripting/keys"},next:{title:"Firmware Update",permalink:"/docs/update"}},p={},d=[{value:"Preferences.json",id:"preferencesjson",level:2},{value:"Settings Explained",id:"settings-explained",level:2}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preferencesjson"},"Preferences.json"),(0,r.kt)("p",null,"Plug in your USB Nova in setup mode to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"preferences.json")," file on the drive."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you edit the JSON file, make sure it stays correctly formatted. Otherwise the USB Nova won't be able to apply your settings.\nYou can easily test if your file is valid with online tools like ",(0,r.kt)("a",{parentName:"p",href:"https://jsonformatter.org/"},"jsonformatter"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enable_msc": false,\n  "enable_led": true,\n  "enable_hid": true,\n  "hid_vid": "16D0",\n  "hid_pid": "11A4",\n  "hid_rev": "0100",\n  "msc_vid": "SpHuhn",\n  "msc_pid": "USB Nova",\n  "msc_rev": "1.0",\n  "default_layout": "US",\n  "default_delay": 5,\n  "main_script": "main_script.txt",\n  "attack_color": [\n    128,\n    0,\n    0,\n    0\n  ],\n  "setup_color": [\n    0,\n    0,\n    20,\n    0\n  ],\n  "idle_color": [\n    0,\n    30,\n    0,\n    0\n  ],\n  "disable_capslock": true,\n  "run_on_indicator": false,\n  "initial_delay": 1000\n}\n')),(0,r.kt)("h2",{id:"settings-explained"},"Settings Explained"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Restart is required to apply changes!\nSome features only work on Windows (*). ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_msc"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable USB mass storage (USB drive) in attack mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_led"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable RGB LED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_hid"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable HID in setup mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hid_vid"),(0,r.kt)("td",{parentName:"tr",align:null},"16D0"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Keyboard Vendor ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hid_pid"),(0,r.kt)("td",{parentName:"tr",align:null},"11A4"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Keyboard Product ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hid_rev"),(0,r.kt)("td",{parentName:"tr",align:null},"0100"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Keyboard Product Revision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msc_vid"),(0,r.kt)("td",{parentName:"tr",align:null},"SpHuhn"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Mass Storage Vendor ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msc_pid"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Nova"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Mass Storage Product ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msc_rev"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Mass Storage Product Revision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default_layout"),(0,r.kt)("td",{parentName:"tr",align:null},"US"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Keyboard Layout (",(0,r.kt)("a",{parentName:"td",href:"/docs/scripting/functions#available-keyboard-layouts"},"see all available layouts"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Default delay between each line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"main_script"),(0,r.kt)("td",{parentName:"tr",align:null},"main_script.txt"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of your BadUSB script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attack_color"),(0,r.kt)("td",{parentName:"tr",align:null},"[128,0,0,0]"),(0,r.kt)("td",{parentName:"tr",align:null},"LED color for attack mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setup_color"),(0,r.kt)("td",{parentName:"tr",align:null},"[0,0,20,0]"),(0,r.kt)("td",{parentName:"tr",align:null},"LED color for setup mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idle_color"),(0,r.kt)("td",{parentName:"tr",align:null},"[0,30,0,0]"),(0,r.kt)("td",{parentName:"tr",align:null},"LED color for finished attack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disable_capslock"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"(*) Turn off capslock before starting attack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_on_indicator"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"(*) Start script when the user presses capslock, numlock, or another indicator key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initial_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Startup delay")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Colors are defined like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"[Red, Green, Blue, Blink-Interval]"),". The color values go from 0 to 255. The blink interval is in milliseconds, and 0 means it's not blinking.")))}u.isMDXComponent=!0}}]);