"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{8916:function(e,n,r){r.d(n,{FS:function(){return l},JZ:function(){return f},Tt:function(){return d},e7:function(){return p},wx:function(){return s}});var t=r(75582),i=r(82394),o=r(83784),u=r(30229);function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e){return"string"===typeof e?e:JSON.stringify(e)}function s(e,n){var r,t;return null===e||void 0===e||null===(r=e.find((function(e){var r=e.block;return n(r)})))||void 0===r||null===(t=r.variables)||void 0===t?void 0:t.map((function(e){var n=e.value;return a(a({},e),{},{value:l(n)})}))}function d(e){var n;return null===(n=s(e,(function(e){return e.uuid===o.C})))||void 0===n?void 0:n.reduce((function(e,n){var r=n.uuid,t=n.value;return a(a({},e),{},(0,i.Z)({},r,t))}),{})}function f(e,n){return n===u.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===u.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function p(e){return e?Object.entries(e).reduce((function(e,n){var r=(0,t.Z)(n,2),o=r[0],u=r[1],c=u;try{c=JSON.parse(u)}catch(l){}return a(a({},e),{},(0,i.Z)({},o,c))}),{}):e}},88785:function(e,n,r){r.d(n,{J:function(){return a},U:function(){return c}});var t=r(25976),i=r(44897),o=r(42631),u=r(70515),c=t.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],o.TR,14*u.iI,u.cd*u.iI,u.cd*u.iI,40*u.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||i.Z.interactive).linkPrimary,";\n  ")})),a=t.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;"," "," ",""],o.n_,u.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.absolute&&"\n    position: absolute;\n    z-index: 2;\n    right: 0;\n    top: ".concat(2.5*u.iI,"px;\n  ")}),(function(e){return e.topPosition&&"\n    top: -".concat(42*u.iI,"px;\n  ")}))},37899:function(e,n,r){var t=r(82394),i=r(75582),o=r(82684),u=r(71180),c=r(15338),a=r(97618),l=r(55485),s=r(38276),d=r(75499),f=r(30160),p=r(35576),b=r(17488),g=r(72473),h=r(70515),v=r(42122),m=r(81728),j=r(28598);function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){e.borderless,e.compact;var n=e.enableVariablesOverwrite,r=e.originalVariables,x=e.runtimeVariables,Z=(e.setEnableVariablesOverwrite,e.setRuntimeVariables),y=(0,o.useState)({}),P=y[0],w=y[1],k=(0,o.useState)(null),S=k[0],C=k[1],I=(0,o.useState)(null),D=I[0],_=I[1];(0,o.useEffect)((function(){var e=Object.entries(x||{}).reduce((function(e,n){var r=(0,i.Z)(n,2),o=r[0],u=r[1],c=(0,m.Pb)(u)&&"object"===typeof JSON.parse(u)&&!Array.isArray(JSON.parse(u))&&null!==JSON.parse(u);return O(O({},e),{},(0,t.Z)({},o,c))}),{});w(e)}),[]);var E=function(e,n){var r={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),Z((function(r){return O(O({},r),{},(0,t.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return P[e]?(0,j.jsx)(p.Z,O(O({},r),{},{rows:1,value:n})):(0,j.jsx)(b.Z,O({},r))};return(0,j.jsxs)(j.Fragment,{children:[n&&x&&Object.entries(x).length>0&&(0,j.jsx)(d.Z,{columnFlex:[null,1,null],columns:[{uuid:"Variable"},{uuid:"Value"},{label:function(){return""},uuid:"Action"}],rows:Object.entries(x).map((function(e){var n=(0,i.Z)(e,2),t=n[0],o=n[1];return[(0,j.jsx)(f.ZP,{default:!0,monospace:!0,children:t},"variable_".concat(t)),E(t,o),!(null!==r&&void 0!==r&&r[t])&&(0,j.jsx)(u.ZP,{iconOnly:!0,onClick:function(){Z((function(e){return(0,v.gR)(e,[t])}))},children:(0,j.jsx)(g.Trash,{default:!0})})]}))}),(0,j.jsx)(s.Z,{p:h.cd,children:(0,j.jsxs)(l.ZP,{alignItems:"center",children:[(0,j.jsx)(a.Z,{flex:1,children:(0,j.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return C(e.target.value)},placeholder:"New variable UUID",value:S||""})}),(0,j.jsx)(s.Z,{mr:1}),(0,j.jsx)(a.Z,{flex:1,children:(0,j.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return _(e.target.value)},placeholder:"Variable value",value:D||""})}),(0,j.jsx)(s.Z,{mr:1}),(0,j.jsx)(u.ZP,{beforeIcon:(0,j.jsx)(g.Add,{}),disabled:!S||!D,onClick:function(){Z((function(e){return O(O({},e),{},(0,t.Z)({},S,D))})),C(null),_(null)},children:"Add runtime variable"})]})}),(0,j.jsx)(c.Z,{light:!0})]})}},55072:function(e,n,r){r.d(n,{Et:function(){return f},Q:function(){return d}});r(82684);var t=r(71180),i=r(55485),o=r(38276),u=r(31748),c=r(72473),a=r(79633),l=r(70515),s=r(28598),d=30,f=9;n.ZP=function(e){var n=e.page,r=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],b=r;if(b>f)p=Array.from({length:f},(function(e,n){return n}));else{var g=Math.floor(b/2),h=n-g;n+g>=f?(h=f-b+2,b-=2):n-g<=0?(h=0,b-=2):(b-=4,h=n-Math.floor(b/2)),p=Array.from({length:b},(function(e,n){return n+h}))}return(0,s.jsx)(s.Fragment,{children:f>0&&(0,s.jsxs)(i.ZP,{alignItems:"center",children:[(0,s.jsx)(t.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,s.jsx)(c.PaginateArrowLeft,{size:1.5*l.iI,stroke:u.Av})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.ZP,{backgroundColor:e===n&&a.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(f-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(t.ZP,{disabled:n===f-1,onClick:function(){return d(n+1)},children:(0,s.jsx)(c.PaginateArrowRight,{size:1.5*l.iI,stroke:u.Av})})]})})}},83784:function(e,n,r){r.d(n,{C:function(){return t}});var t="global"},14805:function(e,n,r){var t=r(82394),i=r(44495),o=r(55485),u=r(44085),c=r(38276),a=r(30160),l=r(88785),s=r(70515),d=r(86735),f=r(28598);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.localTime,r=e.selectedDate,t=e.selectedTime,p=e.setSelectedDate,g=e.setSelectedTime,h=e.topPosition;return(0,f.jsxs)(l.J,{absolute:!0,topPosition:h,children:[(0,f.jsx)(i.ZP,{onChange:p,value:r}),(0,f.jsx)(c.Z,{mb:2}),(0,f.jsxs)(o.ZP,{alignItems:"center",children:[(0,f.jsxs)(a.ZP,{default:!0,large:!0,children:["Time (",n?"Local":"UTC","):"]}),(0,f.jsx)(c.Z,{pr:2}),(0,f.jsx)(u.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),g((function(n){return b(b({},n),{},{hour:e.target.value})}))},paddingRight:5*s.iI,placeholder:"HH",value:null===t||void 0===t?void 0:t.hour,children:(0,d.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,f.jsx)("option",{value:e,children:e},"hour_".concat(e))}))}),(0,f.jsx)(c.Z,{px:1,children:(0,f.jsx)(a.ZP,{bold:!0,large:!0,children:":"})}),(0,f.jsx)(u.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),g((function(n){return b(b({},n),{},{minute:e.target.value})}))},paddingRight:5*s.iI,placeholder:"MM",value:null===t||void 0===t?void 0:t.minute,children:(0,d.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,f.jsx)("option",{value:e,children:e},"minute_".concat(e))}))})]})]})}},79500:function(e,n,r){r.d(n,{a:function(){return o}});var t=r(16488),i=r(3917);function o(e,n){var r,o;if(null!==n&&void 0!==n&&n.localTimezone)r=(0,i.n$)(e),o={hour:(0,i.lJ)(String(r.getHours())),minute:(0,i.lJ)(String(r.getMinutes()))};else{var u=e.split(" ")[1];r=(0,t.eI)(e),o={hour:u.substring(0,2),minute:u.substring(3,5)}}return{date:r,time:o}}},9134:function(e,n,r){var t=r(82684),i=r(21124),o=r(68432),u=r(25976),c=r(65292),a=r(44897),l=r(95363),s=r(70515),d=r(28598);n.Z=function(e){var n=e.language,r=e.maxWidth,f=e.showLineNumbers,p=e.small,b=e.source,g=e.wrapLines,h=(0,t.useContext)(u.ThemeContext);function v(e){var t=e.value;return(0,d.jsx)(o.Z,{customStyle:{backgroundColor:(h.background||a.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:l.Vp,fontSize:p?12:14,marginBottom:0,marginTop:0,maxWidth:r,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:n,lineNumberStyle:{color:(h.content||a.Z.content).muted},showLineNumbers:f,style:c._4,useInlineStyles:!0,wrapLines:g,children:t})}return(0,d.jsx)(i.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(v,{value:n})}},children:b})}}}]);