import{r as h,ap as X,l as j,g as O,b as L,d as e,a as m,K as _,t as K,v as F,O as $,E as B,aq as q,P as V,S as G,R as Q,ar as U,as as J,a0 as D,a3 as w,ah as v,a5 as T,B as Y}from"./index-fcef34bf.js";var Z=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],R=h.forwardRef(function(a,i){var c,n=a.prefixCls,r=n===void 0?"rc-switch":n,s=a.className,l=a.checked,t=a.defaultChecked,d=a.disabled,P=a.loadingIcon,C=a.checkedChildren,y=a.unCheckedChildren,u=a.onClick,p=a.onChange,M=a.onKeyDown,z=X(a,Z),g=j(!1,{value:l,defaultValue:t}),x=O(g,2),S=x[0],f=x[1];function I(o,N){var b=S;return d||(b=o,f(b),p==null||p(b,N)),b}function E(o){o.which===_.LEFT?I(!1,o):o.which===_.RIGHT&&I(!0,o),M==null||M(o)}function H(o){var N=I(!S,o);u==null||u(N,o)}var A=L(r,s,(c={},e(c,"".concat(r,"-checked"),S),e(c,"".concat(r,"-disabled"),d),c));return h.createElement("button",m({},z,{type:"button",role:"switch","aria-checked":S,disabled:d,className:A,ref:i,onKeyDown:E,onClick:H}),P,h.createElement("span",{className:"".concat(r,"-inner")},h.createElement("span",{className:"".concat(r,"-inner-checked")},C),h.createElement("span",{className:"".concat(r,"-inner-unchecked")},y)))});R.displayName="Switch";var k=function(i){var c,n,r,s,l,t=i.componentCls,d=t+"-inner";return e({},t,e({},"&"+t+"-small",(l={minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:i.switchHeightSM+"px"},e(l,t+"-inner",(c={},e(c,d+"-checked",{marginInlineStart:"calc("+i.switchInnerMarginMinSM+"px - 100% + "+(i.switchPinSizeSM+i.switchPadding*2)+"px)",marginInlineEnd:"calc("+i.switchInnerMarginMaxSM+"px + 100% - "+(i.switchPinSizeSM+i.switchPadding*2)+"px)"}),e(c,d+"-unchecked",{marginTop:-i.switchHeightSM,marginInlineStart:i.switchInnerMarginMaxSM,marginInlineEnd:i.switchInnerMarginMinSM}),c)),e(l,t+"-handle",{width:i.switchPinSizeSM,height:i.switchPinSizeSM}),e(l,t+"-loading-icon",{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize}),e(l,"&"+t+"-checked",(r={},e(r,t+"-inner",(n={},e(n,d+"-checked",{marginInlineStart:i.switchInnerMarginMinSM,marginInlineEnd:i.switchInnerMarginMaxSM}),e(n,d+"-unchecked",{marginInlineStart:"calc("+i.switchInnerMarginMaxSM+"px + 100% - "+(i.switchPinSizeSM+i.switchPadding*2)+"px)",marginInlineEnd:"calc("+i.switchInnerMarginMinSM+"px - 100% + "+(i.switchPinSizeSM+i.switchPadding*2)+"px)"}),n)),e(r,t+"-handle",{insetInlineStart:"calc(100% - "+(i.switchPinSizeSM+i.switchPadding)+"px)"}),r)),e(l,"&:not("+t+"-disabled):active",(s={},e(s,"&:not("+t+"-checked) "+d,e({},d+"-unchecked",{marginInlineStart:i.switchInnerMarginMaxSM+i.marginXXS/2,marginInlineEnd:i.switchInnerMarginMinSM-i.marginXXS/2})),e(s,"&"+t+"-checked "+d,e({},d+"-checked",{marginInlineStart:i.switchInnerMarginMinSM-i.marginXXS/2,marginInlineEnd:i.switchInnerMarginMaxSM+i.marginXXS/2})),s)),l)))},ii=function(i){var c,n=i.componentCls;return e({},n,(c={},e(c,n+"-loading-icon"+i.iconCls,{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"}),e(c,"&"+n+"-checked "+n+"-loading-icon",{color:i.switchColor}),c))},ni=function(i){var c,n,r=i.componentCls,s=r+"-handle";return e({},r,(n={},e(n,s,{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:"all "+i.switchDuration+" ease-in-out","&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:"all "+i.switchDuration+" ease-in-out",content:'""'}}),e(n,"&"+r+"-checked "+s,{insetInlineStart:"calc(100% - "+(i.switchPinSize+i.switchPadding)+"px)"}),e(n,"&:not("+r+"-disabled):active",(c={},e(c,s+"::before",{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0}),e(c,"&"+r+"-checked "+s+"::before",{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}),c)),n))},ei=function(i){var c,n,r,s,l=i.componentCls,t=l+"-inner";return e({},l,(s={},e(s,t,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%"},e(c,t+"-checked, "+t+"-unchecked",{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:"margin-inline-start "+i.switchDuration+" ease-in-out, margin-inline-end "+i.switchDuration+" ease-in-out",pointerEvents:"none"}),e(c,t+"-checked",{marginInlineStart:"calc("+i.switchInnerMarginMin+"px - 100% + "+(i.switchPinSize+i.switchPadding*2)+"px)",marginInlineEnd:"calc("+i.switchInnerMarginMax+"px + 100% - "+(i.switchPinSize+i.switchPadding*2)+"px)"}),e(c,t+"-unchecked",{marginTop:-i.switchHeight,marginInlineStart:i.switchInnerMarginMax,marginInlineEnd:i.switchInnerMarginMin}),c)),e(s,"&"+l+"-checked "+t,(n={},e(n,t+"-checked",{marginInlineStart:i.switchInnerMarginMin,marginInlineEnd:i.switchInnerMarginMax}),e(n,t+"-unchecked",{marginInlineStart:"calc("+i.switchInnerMarginMax+"px + 100% - "+(i.switchPinSize+i.switchPadding*2)+"px)",marginInlineEnd:"calc("+i.switchInnerMarginMin+"px - 100% + "+(i.switchPinSize+i.switchPadding*2)+"px)"}),n)),e(s,"&:not("+l+"-disabled):active",(r={},e(r,"&:not("+l+"-checked) "+t,e({},t+"-unchecked",{marginInlineStart:i.switchInnerMarginMax+i.switchPadding*2,marginInlineEnd:i.switchInnerMarginMin-i.switchPadding*2})),e(r,"&"+l+"-checked "+t,e({},t+"-checked",{marginInlineStart:i.switchInnerMarginMin-i.switchPadding*2,marginInlineEnd:i.switchInnerMarginMax+i.switchPadding*2})),r)),s))},ai=function(i){var c,n=i.componentCls;return e({},n,m(m(m(m({},B(i)),e({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:i.switchHeight+"px",verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all "+i.motionDurationMid,userSelect:"none"},"&:hover:not("+n+"-disabled)",{background:i.colorTextTertiary})),q(i)),(c={},e(c,"&"+n+"-checked",e({background:i.switchColor},"&:hover:not("+n+"-disabled)",{background:i.colorPrimaryHover})),e(c,"&"+n+"-loading, &"+n+"-disabled",{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e(c,"&"+n+"-rtl",{direction:"rtl"}),c)))};const ci=K("Switch",function(a){var i=a.fontSize*a.lineHeight,c=a.controlHeight/2,n=2,r=i-n*2,s=c-n*2,l=F(a,{switchMinWidth:r*2+n*4,switchHeight:i,switchDuration:a.motionDurationMid,switchColor:a.colorPrimary,switchDisabledOpacity:a.opacityLoading,switchInnerMarginMin:r/2,switchInnerMarginMax:r+n+n*2,switchPadding:n,switchPinSize:r,switchBg:a.colorBgContainer,switchMinWidthSM:s*2+n*2,switchHeightSM:c,switchInnerMarginMinSM:s/2,switchInnerMarginMaxSM:s+n+n*2,switchPinSizeSM:s,switchHandleShadow:"0 2px 4px 0 "+new $("#00230b").setAlpha(.2).toRgbString(),switchLoadingIconSize:a.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, "+a.opacityLoading+")",switchHandleActiveInset:"-30%"});return[ai(l),ei(l),ni(l),ii(l),k(l)]});var ri=globalThis&&globalThis.__rest||function(a,i){var c={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&i.indexOf(n)<0&&(c[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(a);r<n.length;r++)i.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(a,n[r])&&(c[n[r]]=a[n[r]]);return c},W=h.forwardRef(function(a,i){var c,n=a.prefixCls,r=a.size,s=a.disabled,l=a.loading,t=a.className,d=t===void 0?"":t,P=ri(a,["prefixCls","size","disabled","loading","className"]),C=h.useContext(V),y=C.getPrefixCls,u=C.direction,p=h.useContext(G),M=h.useContext(Q),z=(s??M)||l,g=y("switch",n),x=h.createElement("div",{className:g+"-handle"},l&&h.createElement(J,{className:g+"-loading-icon"})),S=ci(g),f=O(S,2),I=f[0],E=f[1],H=L((c={},e(c,g+"-small",(r||p)==="small"),e(c,g+"-loading",l),e(c,g+"-rtl",u==="rtl"),c),d,E);return I(h.createElement(U,{insertExtraNode:!0},h.createElement(R,m({},P,{prefixCls:g,className:H,disabled:z,ref:i,loadingIcon:x}))))});W.__ANT_SWITCH=!0;const ti=W;function li(){return D("div",{children:[w("h1",{children:"Settings"}),D(v,{name:"basic",onFinish:i=>{console.log("Received values of form: ",i)},initialValues:{email:"",username:"",notifications:!1},children:[w(v.Item,{label:"Email",name:"email",rules:[{required:!1,message:"Please input your email!"}],children:w(T,{})}),w(v.Item,{label:"Username",name:"username",rules:[{required:!1,message:"Please input your username!"}],children:w(T,{})}),w(v.Item,{label:"Notifications",name:"notifications",valuePropName:"checked",children:w(ti,{})}),w(v.Item,{children:w(Y,{type:"primary",htmlType:"submit",children:"Save"})})]})]})}export{li as default};