(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{83087:function(e,n,r){"use strict";r.r(n);var t=r(77837),i=r(38860),s=r.n(i),u=r(82684),a=r(65557),l=r(78650),o=r(43449),c=r(90758),f=r(93808),d=r(38276),h=r(59533),p=r(35686),m=r(86735),_=r(15610),v=r(69419),E=r(97133),b=r(75083),w=r(28598);function P(){var e=(0,u.useState)(null),n=e[0],r=e[1],t=(0,v.iV)(),i=t.file_path,s=(0,u.useMemo)((function(){var e=t["file_paths[]"]||[];return Array.isArray(e)||(e=[e]),e}),[t]),f=(0,u.useCallback)((function(e,n){var r=encodeURIComponent(e),t=(0,v.iV)()["file_paths[]"]||[];Array.isArray(t)||(t=[t]),t.includes(r)||t.push(r),(0,_.u)({file_path:r,"file_paths[]":t})}),[]),P=p.ZP.files.list(),x=P.data,Z=P.mutate,g=(0,u.useMemo)((function(){return(null===x||void 0===x?void 0:x.files)||[]}),[x]),j=(0,u.useRef)(null),k=(0,u.useState)(null),F=k[0],y=k[1],C=(0,u.useState)([]),N=C[0],S=C[1],R=(0,u.useState)({}),A=R[0],I=R[1],T=(0,u.useMemo)((function(){return(0,w.jsx)(d.Z,{ml:1,mt:1,children:(0,w.jsx)(l.Z,{fetchFiles:Z,files:g,openFile:f,ref:j,showError:r,uuid:"pages/manage/files"})})}),[Z,g,f,r]);return(0,u.useEffect)((function(){y(i)}),[i]),(0,u.useEffect)((function(){(0,m.fS)(s,N)||S(s)}),[s,N]),(0,w.jsx)(h.Z,{before:T,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"File browser"}}],errors:n,mainContainerHeader:(0,w.jsx)(E.rK,{secondary:!0,children:(0,w.jsx)(c.ZP,{filePaths:N,filesTouched:A,selectedFilePath:F})}),pageName:b.L6.FILE_BROWSER,children:null===s||void 0===s?void 0:s.map((function(e){return(0,w.jsx)("div",{style:{display:F===e?null:"none"},children:(0,w.jsx)(a.Z,{uuid:"manage/FileEditor/".concat(decodeURIComponent(e)),children:(0,w.jsx)(o.Z,{active:F===e,filePath:e,selectedFilePath:F,setErrors:r,setFilesTouched:I})})},e)}))})}P.getInitialProps=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,f.Z)(P)},90205:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/files",function(){return r(83087)}])}},function(e){e.O(0,[1557,1598,9774,2888,179],(function(){return n=90205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);