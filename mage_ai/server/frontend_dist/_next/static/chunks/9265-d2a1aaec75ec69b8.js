"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9265],{62072:function(t,n,e){function i(t){return null==t?void 0:t[0]}function r(t){return null==t?void 0:t[1]}e.d(n,{l8:function(){return i},xf:function(){return r}})},59309:function(t,n,e){e.d(n,{ZP:function(){return c}});var i=e(12759),r=e(27500),o=e(82610),a=e(34812),u=e(77944),l={expand:i.Z,diverging:r.Z,none:o.Z,silhouette:a.Z,wiggle:u.Z};Object.keys(l);function c(t){return t&&l[t]||l.none}},18246:function(t,n,e){e.d(n,{ZP:function(){return c}});var i=e(39586),r=e(25516),o=e(54164),a=e(8512),u=e(2010),l={ascending:i.Z,descending:r.Z,insideout:o.Z,none:a.Z,reverse:u.Z};Object.keys(l);function c(t){return t&&l[t]||l.none}},66909:function(t,n,e){e.d(n,{Eh:function(){return c},t0:function(){return d}});var i=e(25976),r=e(2842),o=e(4982),a=e(61896),u=e(47041),l=e(70515),c=(l.iI,o.O$+3*l.iI+a.dN),d=i.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})([""," overflow:auto;position:absolute;width:100%;"," ",""],u.w5,(function(t){return"\n    height: calc(100vh - ".concat(r.uX,"px - ").concat(t.heightOffset,"px);\n  ")}),(function(t){return t.overflowHidden&&"\n    overflow: hidden;\n  "}));i.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*l.iI,(function(t){return t.noPadding&&"\n    padding: 0;\n  "}))},4982:function(t,n,e){e.d(n,{O$:function(){return pt},Fk:function(){return vt}});var i=e(75582),r=e(12691),o=e.n(r),a=e(26304),u=e(21831),l=e(82394),c=e(82684),d=e(26226),s=e(84969),f=e(90948),h=e(65743),m=e(63588),p=e.n(m),v=e(75823),x=e(29989),g=e(62072),y=e(53989),b=e(49894),Z=e(18246),j=e(59309),k=["data","className","top","left","y","x0","x1","xScale","yScale","color","keys","value","order","offset","children"];function S(){return S=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},S.apply(this,arguments)}function w(t){var n=t.data,e=t.className,i=t.top,r=t.left,o=t.y,a=t.x0,u=void 0===a?g.l8:a,l=t.x1,d=void 0===l?g.xf:l,s=t.xScale,f=t.yScale,m=t.color,w=t.keys,L=t.value,T=t.order,M=t.offset,O=t.children,I=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,k),E=(0,v.Z)();w&&E.keys(w),L&&(0,b.Z)(E.value,L),T&&E.order((0,Z.ZP)(T)),M&&E.offset((0,j.ZP)(M));var R=E(n),Y=(0,y.Z)(f),D=R.map((function(t,n){var e=t.key;return{index:n,key:e,bars:t.map((function(n,i){var r=(s(d(n))||0)-(s(u(n))||0),a=s(u(n)),l="bandwidth"in f?f(o(n.data)):Math.max((f(o(n.data))||0)-r/2);return{bar:n,key:e,index:i,height:Y,width:r,x:a||0,y:l||0,color:m(t.key,i)}}))}}));return O?c.createElement(c.Fragment,null,O(D)):c.createElement(x.Z,{className:p()("visx-bar-stack-horizontal",e),top:i,left:r},D.map((function(t){return t.bars.map((function(n){return c.createElement(h.Z,S({key:"bar-stack-"+t.index+"-"+n.index,x:n.x,y:n.y,height:n.height,width:n.width,fill:n.color},I))}))})))}var L=e(79487),T=e(25976),M=e(61655),O=e(16853),I=e(65376),E=e(48072),R=e(24903),Y=e(84181),D=e(98677),P=e(30160),C=e(70987),_=e(79633),A=e(61896),N=e(70515),H=e(95363),F=e(28598),V=["height","width"];function z(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function U(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?z(Object(e),!0).forEach((function(n){(0,l.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var B={bottom:5*N.iI,left:3*N.iI,right:20*N.iI,top:0},Q=function(t){return t.x},W=function(t){return t.y},X=(0,M.Z)((function(t){var n=t.data,e=t.height,i=t.hideTooltip,r=t.large,o=t.margin,a=void 0===o?{}:o,l=t.renderTooltipContent,d=t.showTooltip,m=t.tooltipData,p=t.tooltipLeft,v=t.tooltipOpen,g=t.tooltipTop,y=t.width,b=t.xAxisLabel,Z=t.xNumTicks,j=t.yLabelFormat,k=t.ySerialize,S=j;S||(S=function(t){return t.length>20?"".concat(t.substring(0,20),"..."):t});var M=r?A.iD:A.J5,N=(0,c.useContext)(T.ThemeContext),V=U(U({},B),a),z=n.slice(Math.max(0,n.length-50)),X=Object.keys(z[0]||[]).filter((function(t){return"x"===t})),G=(0,R.Z)({domain:X,range:[_.hM]}),$=(0,Y.Z)({domain:[0,Math.max.apply(Math,(0,u.Z)(z.map(Q)))],nice:!0}),J=(0,D.Z)({domain:z.map(W),padding:.35}),q={active:(null===N||void 0===N?void 0:N.content.default)||C.Z.content.default,backgroundPrimary:(null===N||void 0===N?void 0:N.chart.backgroundPrimary)||C.Z.chart.backgroundPrimary,backgroundSecondary:(null===N||void 0===N?void 0:N.chart.backgroundSecondary)||C.Z.chart.backgroundSecondary,muted:(null===N||void 0===N?void 0:N.content.muted)||C.Z.content.muted,primary:(null===N||void 0===N?void 0:N.chart.primary)||C.Z.chart.primary,tooltipBackground:(null===N||void 0===N?void 0:N.background.navigation)||C.Z.background.navigation},K=z.map(k),tt=Math.min(Math.max.apply(Math,(0,u.Z)(K.map((function(t){return String(t).length})))),20);6*tt>2*V.right?V.right+=5.5*tt:6*tt>=V.right&&(V.right+=3.75*tt);var nt=y-V.left-V.right,et=e-V.top-V.bottom;V.left+=7*tt,$.rangeRound([0,nt]),J.rangeRound([et,0]);var it=z.map(Q).length,rt=J(K[it-1]),ot=(0,c.useCallback)((function(t){var n=(0,E.Z)(t)||{x:0,y:0},e=n.x,i=n.y,r=1-(i-rt/2)/(et-rt),o=Math.floor(r*it),a=z[o];"undefined"===typeof a&&(a=z[o-1]),i>rt&&i<et-rt&&d({tooltipData:a,tooltipLeft:e,tooltipTop:i+V.top})}),[z,it,V.top,d,rt,et]);return y<10?null:(0,F.jsxs)("div",{children:[(0,F.jsxs)("svg",{height:e,width:y,children:[(0,F.jsx)(h.Z,{fill:"transparent",height:e-(V.top+V.bottom),onMouseLeave:function(){return i()},onMouseMove:ot,onTouchMove:ot,onTouchStart:ot,rx:14,width:y-V.left,x:V.left,y:0}),(0,F.jsxs)(x.Z,{left:V.left,top:V.top,children:[(0,F.jsx)(w,{color:G,data:z,height:et,keys:X,pointerEvents:"none",xScale:$,y:k,yScale:J,children:function(t){return t.map((function(t){return t.bars.map((function(n){return(0,F.jsx)("g",{children:(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("rect",{fill:q.backgroundPrimary,height:n.height,pointerEvents:"none",rx:4,width:n.width,x:n.x,y:n.y})})},"barstack-horizontal-".concat(t.index,"-").concat(n.index))}))}))}}),(0,F.jsx)(s.Z,{hideTicks:!0,scale:J,stroke:q.muted,tickFormat:function(t){return S(t)},tickLabelProps:function(){return{fill:q.active,fontFamily:H.ry,fontSize:M,style:{width:"10px"},textAnchor:"end"}},tickStroke:q.muted,tickValues:K,top:2}),(0,F.jsx)(f.Z,{label:b,labelProps:{fill:q.muted,fontFamily:H.ry,fontSize:M,textAnchor:"middle"},numTicks:Z,scale:$,stroke:q.muted,tickLabelProps:function(){return{fill:q.active,fontFamily:H.ry,fontSize:M,textAnchor:"middle"}},tickStroke:q.muted,top:et})]}),m&&(0,F.jsx)("g",{children:(0,F.jsx)(L.Z,{from:{x:V.left,y:g},pointerEvents:"none",stroke:_.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:nt+V.left,y:g}})})]}),v&&m&&(0,F.jsx)(O.Z,{left:p,style:U(U({},I.j),{},{backgroundColor:q.tooltipBackground}),top:g,children:(0,F.jsxs)(P.ZP,{black:!0,small:!0,children:[null===l||void 0===l?void 0:l(m),!l&&Q(m).toFixed(4)]})})]})}));var G,$,J,q,K=function(t){var n=t.height,e=t.width,i=(0,a.Z)(t,V);return(0,F.jsx)("div",{style:{height:n,width:"undefined"===typeof e?"100%":e},children:(0,F.jsx)(d.Z,{children:function(t){var n=t.width,e=t.height;return(0,F.jsx)(X,U(U({},i),{},{height:e,width:n}))}})})},tt=e(97618),nt=e(52729),et=e(48670),it=e(87862),rt=e(89370),ot=e(86735),at=(ot.Qj,ot.tS,ot.tS,ot.tS,ot.tS,ot.Qj,ot.Qj,ot.Qj,ot.tS,ot.tS,G={},(0,l.Z)(G,rt.RL.EMAIL,"domain_distribution"),(0,l.Z)(G,rt.RL.TEXT,"word_distribution"),(0,l.Z)(G,rt.RL.LIST,"element_distribution"),(0,l.Z)(G,"default","value_counts"),G),ut=[].concat((0,u.Z)(rt.P_),[rt.RL.TEXT,rt.RL.EMAIL,rt.RL.LIST]),lt=($={},(0,l.Z)($,rt.RL.EMAIL,"Domain distribution"),(0,l.Z)($,rt.RL.TEXT,"Word distribution"),(0,l.Z)($,rt.RL.LIST,"Element distribution"),(0,l.Z)($,"default","Distribution of values"),e(31353));!function(t){t.RANGE="range"}(J||(J={})),function(t){t.BAR_HORIZONTAL="bar_horizontal",t.LINE_CHART="line_chart",t.HISTOGRAM="histogram"}(q||(q={}));var ct=e(48888),dt=e(92083),st=e.n(dt),ft=e(81728);function ht(t,n){var e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i||{},o=r.calculateAnomaly,a=r.feature,l=r.getYValue,c=t.x,d=t.x_metadata,s=d.label,f=d.label_type,h=t.y,m=(null===h||void 0===h?void 0:h.map((function(t){return null===l||void 0===l?void 0:l(t)})))||[],p=Math.max.apply(Math,(0,u.Z)(m)),v=Math.max.apply(Math,(0,u.Z)(m)),x=(0,ot.Sm)(m),g=(0,ot.IN)(m),y=x/Math.max(1,m.length),b=n[s]||a,Z=null===b||void 0===b?void 0:b.columnType,j=rt.RL.DATETIME===Z,k=[],S=[],w=c.length,L=c.map((function(t,n){var i,r,a,u,l=t.label,c=t.max,d=t.min,s=h[n];if(J.RANGE===f)if(e||(e=c-d),u=rt.RL.NUMBER===Z&&e<=w)i=Number(d);else if(i=e/2+d,j){var b="M/D/YYYY",L="M/D/YYYY",T="M/D/YYYY";e<=1?(b=e<=.1?"H:mm:ss.SSS":"H:mm:ss",L="H:mm:ss.SSS",T="H:mm:ss.SSS"):e<=60?(b="H:mm",L="H:mm:ss",T="H:mm:ss"):e<=3600?(b="H:mm",L="M/D/YYYY H:mm",T="H:mm"):e<=86400&&(L="M/D/YYYY H:mm",T="M/D/YYYY H:mm"),i=st().unix(i).format(b),r=st().unix(d).format(L),a=st().unix(c).format(T)}else i=(0,ft.QV)(i);else i=l;var M=n>=1?h[n-1]:null,O=!1;o&&(O=o({x:t,y:s,yPrevious:M,yValues:m,yValuesAverage:y,yValuesMax:p,yValuesMin:v,yValuesStandardDeviation:g,yValuesSum:x}));var I={hideRange:u,isUnusual:O,x:t,xLabel:i,xLabelMax:a,xLabelMin:r,y:s};return O&&(u?S.push(I):k.push(I)),I}));return{distribution:{data:L,featureUUID:s},rangedWithUnusualDistribution:(0,ot.YC)(k,(function(t){var n=t.y;return l(n)}),{ascending:!1}),unusualDistribution:(0,ot.YC)(S,(function(t){var n=t.y;return l(n)}),{ascending:!1})}}var mt=e(40489);var pt=12*N.iI;function vt(t){var n=t.columnTypes,e=t.columns,r=t.insightsByFeatureUUID,a=t.insightsOverview,u=t.noColumnLinks,l=void 0!==u&&u,c=t.statistics;return function(t,u,d){var s=d.width,f=e[u],h=n[f],m=lt.T5[h],p=(r[f]||{}).charts,v=a.time_series,x=e.filter((function(t){return n[t]===rt.RL.DATETIME})),g=null===v||void 0===v?void 0:v.map((function(t){return ht(t,{},{feature:{columnType:h,uuid:f}}).distribution})),y={};null===g||void 0===g||g.forEach((function(t,n){var e=t.data;y[x[n]]=(0,F.jsx)(nt.Z,{data:e.map((function(t){var n=t.x,e=t.xLabel,i=t.xLabelMax,r=t.xLabelMin;return[e,t.y.count,r,i,n.min,n.max]})),height:pt,large:!0,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var n=(0,i.Z)(t,4),e=n[1],r=n[2],o=n[3];return(0,F.jsxs)("p",{children:["Rows: ",e,(0,F.jsx)("br",{}),"Start: ",r,(0,F.jsx)("br",{}),"End: ",o]})},sortData:function(t){return(0,ot.YC)(t,"[4]")}},f)}));var b,Z=null===p||void 0===p?void 0:p.find((function(t){var n=t.type;return q.HISTOGRAM===n})),j=(Z?ht(Z,{},{feature:{columnType:h,uuid:f},getYValue:function(t){return t.value}}):{}).distribution,k=void 0===j?null:j,S=at[h]||at.default,w=null===c||void 0===c?void 0:c["".concat(f,"/").concat(S)],L=Object.entries(w||{}).map((function(t){var n=(0,i.Z)(t,2),e=n[0];return{x:n[1],y:e}})),T=rt.RL.TRUE_OR_FALSE===h;if(rt.RL.DATETIME===h)b=y[f];else if(k&&!T)b=(0,F.jsx)(nt.Z,{data:k.data.map((function(t){var n=t.hideRange,e=t.isUnusual,i=t.x;return[t.xLabel,t.y.value,i.min,i.max,e,n]})),height:pt,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var n=(0,i.Z)(t,6),e=n[1],r=n[2],o=n[3],a=n[5];return(0,F.jsxs)("p",{children:[a&&(0,F.jsxs)(F.Fragment,{children:["Rows: ",e,(0,F.jsx)("br",{}),"Value: ",r]}),!a&&(0,F.jsxs)(F.Fragment,{children:["Rows: ",e,(0,F.jsx)("br",{}),"Range: ",r," - ",o]})]})},sortData:function(t){return(0,ot.YC)(t,"[2]")},width:s-2*N.iI});else if(ut.includes(h)){var M=(0,ot.YC)((0,ot.YC)(L,"x",{ascending:!1}).slice(0,5),"x");b=(0,F.jsx)(K,{data:M,height:pt,margin:{bottom:0,left:0,right:20,top:0},renderTooltipContent:function(t){var n=t.x,e=t.y;return"".concat(e," appears ").concat((0,ft.x6)(n)," times")},xNumTicks:2,ySerialize:function(t){return t.y}})}else T&&w&&(b=(0,F.jsx)(it.Z,{data:Object.entries(w),getX:function(t){var n=(0,i.Z)(t,2),e=n[0],r=n[1];return"".concat(e," (").concat((0,ft.x6)(r),")")},getY:function(t){return(0,i.Z)(t,2)[1]},height:pt}));return(0,F.jsxs)("div",{style:{padding:N.iI},children:[(0,F.jsxs)("div",{style:{alignItems:"center",display:"flex",marginBottom:N.iI},children:[m&&(0,F.jsx)(tt.Z,{title:rt.Rp[h],children:(0,F.jsx)(m,{size:2*N.iI})}),(0,F.jsx)("div",{style:{marginLeft:.5*N.iI,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:s-4.5*N.iI},children:l?(0,F.jsx)(P.ZP,{bold:!0,default:!0,title:e[u],children:e[u]}):(0,F.jsx)(o(),{as:(0,mt.o_)(ct.oE,u),href:"/datasets/[...slug]",passHref:!0,children:(0,F.jsx)(et.Z,{bold:!0,monospace:!0,secondary:!0,small:!0,title:e[u],children:e[u]})})})]}),b,!b&&(0,F.jsx)("div",{style:{height:pt}})]})}}},9134:function(t,n,e){var i=e(82684),r=e(21124),o=e(68432),a=e(25976),u=e(65292),l=e(44897),c=e(95363),d=e(70515),s=e(28598);n.Z=function(t){var n=t.language,e=t.maxWidth,f=t.showLineNumbers,h=t.small,m=t.source,p=t.wrapLines,v=(0,i.useContext)(a.ThemeContext);function x(t){var i=t.value;return(0,s.jsx)(o.Z,{customStyle:{backgroundColor:(v.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:c.Vp,fontSize:h?12:14,marginBottom:0,marginTop:0,maxWidth:e,paddingBottom:2*d.iI,paddingTop:2*d.iI},language:n,lineNumberStyle:{color:(v.content||l.Z.content).muted},showLineNumbers:f,style:u._4,useInlineStyles:!0,wrapLines:p,children:i})}return(0,s.jsx)(r.D,{components:{code:function(t){var n=t.children;return(0,s.jsx)(x,{value:n})}},children:m})}}}]);