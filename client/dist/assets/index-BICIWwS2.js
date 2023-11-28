function Ym(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function os(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tf={exports:{}},Za={},Cf={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),qm=Symbol.for("react.portal"),Xm=Symbol.for("react.fragment"),Qm=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),rg=Symbol.for("react.memo"),ig=Symbol.for("react.lazy"),jc=Symbol.iterator;function sg(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var _f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kf=Object.assign,bf={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||_f}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pf(){}Pf.prototype=Yr.prototype;function Eu(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||_f}var Tu=Eu.prototype=new Pf;Tu.constructor=Eu;kf(Tu,Yr.prototype);Tu.isPureReactComponent=!0;var Nc=Array.isArray,jf=Object.prototype.hasOwnProperty,Cu={current:null},Nf={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jf.call(t,r)&&!Nf.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:ls,type:e,key:s,ref:a,props:i,_owner:Cu.current}}function ag(e,t){return{$$typeof:ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===ls}function og(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oc=/\/+/g;function So(e,t){return typeof e=="object"&&e!==null&&e.key!=null?og(""+e.key):t.toString(36)}function Ms(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ls:case qm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+So(a,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(Oc,"$&/")+"/"),Ms(i,t,n,"",function(u){return u})):i!=null&&(_u(i)&&(i=ag(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Oc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nc(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+So(s,o);a+=Ms(s,t,n,l,i)}else if(l=sg(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+So(s,o++),a+=Ms(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gs(e,t,n){if(e==null)return e;var r=[],i=0;return Ms(e,r,"","",function(s){return t.call(n,s,i++)}),r}function lg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Rs={transition:null},ug={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Rs,ReactCurrentOwner:Cu};K.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Yr;K.Fragment=Xm;K.Profiler=Km;K.PureComponent=Eu;K.StrictMode=Qm;K.Suspense=ng;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kf({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Cu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)jf.call(t,l)&&!Nf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:ls,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jm,_context:e},e.Consumer=e};K.createElement=Of;K.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:tg,render:e}};K.isValidElement=_u;K.lazy=function(e){return{$$typeof:ig,_payload:{_status:-1,_result:e},_init:lg}};K.memo=function(e,t){return{$$typeof:rg,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Rs.transition;Rs.transition={};try{e()}finally{Rs.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return De.current.useCallback(e,t)};K.useContext=function(e){return De.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return De.current.useDeferredValue(e)};K.useEffect=function(e,t){return De.current.useEffect(e,t)};K.useId=function(){return De.current.useId()};K.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return De.current.useMemo(e,t)};K.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};K.useRef=function(e){return De.current.useRef(e)};K.useState=function(e){return De.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return De.current.useTransition()};K.version="18.2.0";Cf.exports=K;var b=Cf.exports;const Y=os(b),cg=Ym({__proto__:null,default:Y},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=b,fg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,mg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gg={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hg.call(t,r)&&!gg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fg,type:e,key:s,ref:a,props:i,_owner:mg.current}}Za.Fragment=pg;Za.jsx=Lf;Za.jsxs=Lf;Tf.exports=Za;var f=Tf.exports,al={},If={exports:{}},nt={},zf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,A){var V=z.length;z.push(A);e:for(;0<V;){var Q=V-1>>>1,se=z[Q];if(0<i(se,A))z[Q]=A,z[V]=se,V=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var A=z[0],V=z.pop();if(V!==A){z[0]=V;e:for(var Q=0,se=z.length,tn=se>>>1;Q<tn;){var it=2*(Q+1)-1,Rt=z[it],st=it+1,kt=z[st];if(0>i(Rt,V))st<se&&0>i(kt,Rt)?(z[Q]=kt,z[st]=V,Q=st):(z[Q]=Rt,z[it]=V,Q=it);else if(st<se&&0>i(kt,V))z[Q]=kt,z[st]=V,Q=st;else break e}}return A}function i(z,A){var V=z.sortIndex-A.sortIndex;return V!==0?V:z.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,p=null,g=3,v=!1,w=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=z)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function x(z){if(y=!1,h(z),!w)if(n(l)!==null)w=!0,$(S);else{var A=n(u);A!==null&&ee(x,A.startTime-z)}}function S(z,A){w=!1,y&&(y=!1,m(j),j=-1),v=!0;var V=g;try{for(h(A),p=n(l);p!==null&&(!(p.expirationTime>A)||z&&!R());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var se=Q(p.expirationTime<=A);A=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),h(A)}else r(l);p=n(l)}if(p!==null)var tn=!0;else{var it=n(u);it!==null&&ee(x,it.startTime-A),tn=!1}return tn}finally{p=null,g=V,v=!1}}var C=!1,k=null,j=-1,N=5,P=-1;function R(){return!(e.unstable_now()-P<N)}function L(){if(k!==null){var z=e.unstable_now();P=z;var A=!0;try{A=k(!0,z)}finally{A?O():(C=!1,k=null)}}else C=!1}var O;if(typeof d=="function")O=function(){d(L)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,_=T.port2;T.port1.onmessage=L,O=function(){_.postMessage(null)}}else O=function(){E(L,0)};function $(z){k=z,C||(C=!0,O())}function ee(z,A){j=E(function(){z(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,$(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var V=g;g=A;try{return z()}finally{g=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,A){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=g;g=z;try{return A()}finally{g=V}},e.unstable_scheduleCallback=function(z,A,V){var Q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,z={id:c++,callback:A,priorityLevel:z,startTime:V,expirationTime:se,sortIndex:-1},V>Q?(z.sortIndex=V,t(u,z),n(l)===null&&z===n(u)&&(y?(m(j),j=-1):y=!0,ee(x,V-Q))):(z.sortIndex=se,t(l,z),w||v||(w=!0,$(S))),z},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(z){var A=g;return function(){var V=g;g=A;try{return z.apply(this,arguments)}finally{g=V}}}})(Af);zf.exports=Af;var vg=zf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=b,tt=vg;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rf=new Set,bi={};function ir(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(bi[e]=t,e=0;e<t.length;e++)Rf.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,yg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lc={},Ic={};function xg(e){return ol.call(Ic,e)?!0:ol.call(Lc,e)?!1:yg.test(e)?Ic[e]=!0:(Lc[e]=!0,!1)}function wg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sg(e,t,n,r){if(t===null||typeof t>"u"||wg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ku,bu);je[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ku,bu);je[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ku,bu);je[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pu(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sg(t,n,i,r)&&(n=null),r||i===null?xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),$f=Symbol.for("react.provider"),Df=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Ff=Symbol.for("react.offscreen"),zc=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Eo;function di(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var To=!1;function Co(e,t){if(!e||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{To=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Eg(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=Co(e.type,!1),e;case 11:return e=Co(e.type.render,!1),e;case 1:return e=Co(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case ll:return"Profiler";case ju:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Df:return(e.displayName||"Context")+".Consumer";case $f:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function Tg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=Bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=Cg(e))}function Vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uf(e,t){t=t.checked,t!=null&&Pu(e,"checked",t,!1)}function pl(e,t){Uf(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(fi(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function Hf(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,Wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_g=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){_g.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Zf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function Yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kg=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,_r=null,kr=null;function Dc(e){if(e=ds(e)){if(typeof wl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ka(t),wl(e.stateNode,e.type,t))}}function qf(e){_r?kr?kr.push(e):kr=[e]:_r=e}function Xf(){if(_r){var e=_r,t=kr;if(kr=_r=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function Qf(e,t){return e(t)}function Kf(){}var _o=!1;function Jf(e,t,n){if(_o)return e(t,n);_o=!0;try{return Qf(e,t,n)}finally{_o=!1,(_r!==null||kr!==null)&&(Kf(),Xf())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Sl=!1;if(Yt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Sl=!1}function bg(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vi=!1,ra=null,ia=!1,El=null,Pg={onError:function(e){vi=!0,ra=e}};function jg(e,t,n,r,i,s,a,o,l){vi=!1,ra=null,bg.apply(Pg,arguments)}function Ng(e,t,n,r,i,s,a,o,l){if(jg.apply(this,arguments),vi){if(vi){var u=ra;vi=!1,ra=null}else throw Error(I(198));ia||(ia=!0,El=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(sr(e)!==e)throw Error(I(188))}function Og(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fc(i),e;if(s===r)return Fc(i),t;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function tp(e){return e=Og(e),e!==null?np(e):null}function np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=np(e);if(t!==null)return t;e=e.sibling}return null}var rp=tt.unstable_scheduleCallback,Bc=tt.unstable_cancelCallback,Lg=tt.unstable_shouldYield,Ig=tt.unstable_requestPaint,ye=tt.unstable_now,zg=tt.unstable_getCurrentPriorityLevel,Iu=tt.unstable_ImmediatePriority,ip=tt.unstable_UserBlockingPriority,sa=tt.unstable_NormalPriority,Ag=tt.unstable_LowPriority,sp=tt.unstable_IdlePriority,Ya=null,It=null;function Mg(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Dg,Rg=Math.log,$g=Math.LN2;function Dg(e){return e>>>=0,e===0?32:31-(Rg(e)/$g|0)|0}var ws=64,Ss=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=pi(o):(s&=a,s!==0&&(r=pi(s)))}else a=n&~i,a!==0?r=pi(a):s!==0&&(r=pi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function Fg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-xt(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=Fg(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ap(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function us(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Vg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function op(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lp,Au,up,cp,dp,Cl=!1,Es=[],gn=null,vn=null,yn=null,Ni=new Map,Oi=new Map,un=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function ri(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ds(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hg(e,t,n,r,i){switch(t){case"focusin":return gn=ri(gn,e,t,n,r,i),!0;case"dragenter":return vn=ri(vn,e,t,n,r,i),!0;case"mouseover":return yn=ri(yn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,ri(Ni.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oi.set(s,ri(Oi.get(s)||null,e,t,n,r,i)),!0}return!1}function fp(e){var t=$n(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=ep(n),t!==null){e.blockedOn=t,dp(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=ds(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function Uc(e,t,n){$s(e)&&n.delete(t)}function Gg(){Cl=!1,gn!==null&&$s(gn)&&(gn=null),vn!==null&&$s(vn)&&(vn=null),yn!==null&&$s(yn)&&(yn=null),Ni.forEach(Uc),Oi.forEach(Uc)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Gg)))}function Li(e){function t(i){return ii(i,e)}if(0<Es.length){ii(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&ii(gn,e),vn!==null&&ii(vn,e),yn!==null&&ii(yn,e),Ni.forEach(t),Oi.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&un.shift()}var br=Jt.ReactCurrentBatchConfig,oa=!0;function Wg(e,t,n,r){var i=re,s=br.transition;br.transition=null;try{re=1,Mu(e,t,n,r)}finally{re=i,br.transition=s}}function Zg(e,t,n,r){var i=re,s=br.transition;br.transition=null;try{re=4,Mu(e,t,n,r)}finally{re=i,br.transition=s}}function Mu(e,t,n,r){if(oa){var i=_l(e,t,n,r);if(i===null)Mo(e,t,r,la,n),Vc(e,r);else if(Hg(i,e,t,n,r))r.stopPropagation();else if(Vc(e,r),t&4&&-1<Ug.indexOf(e)){for(;i!==null;){var s=ds(i);if(s!==null&&lp(s),s=_l(e,t,n,r),s===null&&Mo(e,t,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mo(e,t,r,null,n)}}var la=null;function _l(e,t,n,r){if(la=null,e=Lu(r),e=$n(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function pp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zg()){case Iu:return 1;case ip:return 4;case sa:case Ag:return 16;case sp:return 536870912;default:return 16}default:return 16}}var fn=null,Ru=null,Ds=null;function hp(){if(Ds)return Ds;var e,t=Ru,n=t.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function Hc(){return!1}function rt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ts:Hc,this.isPropagationStopped=Hc,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=rt(qr),cs=ge({},qr,{view:0,detail:0}),Yg=rt(cs),bo,Po,si,qa=ge({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(bo=e.screenX-si.screenX,Po=e.screenY-si.screenY):Po=bo=0,si=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),Gc=rt(qa),qg=ge({},qa,{dataTransfer:0}),Xg=rt(qg),Qg=ge({},cs,{relatedTarget:0}),jo=rt(Qg),Kg=ge({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=rt(Kg),ev=ge({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tv=rt(ev),nv=ge({},qr,{data:0}),Wc=rt(nv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sv[e])?!!t[e]:!1}function Du(){return av}var ov=ge({},cs,{key:function(e){if(e.key){var t=rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=rt(ov),uv=ge({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=rt(uv),cv=ge({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),dv=rt(cv),fv=ge({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=rt(fv),hv=ge({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=rt(hv),gv=[9,13,27,32],Fu=Yt&&"CompositionEvent"in window,yi=null;Yt&&"documentMode"in document&&(yi=document.documentMode);var vv=Yt&&"TextEvent"in window&&!yi,mp=Yt&&(!Fu||yi&&8<yi&&11>=yi),Yc=String.fromCharCode(32),qc=!1;function gp(e,t){switch(e){case"keyup":return gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function yv(e,t){switch(e){case"compositionend":return vp(t);case"keypress":return t.which!==32?null:(qc=!0,Yc);case"textInput":return e=t.data,e===Yc&&qc?null:e;default:return null}}function xv(e,t){if(pr)return e==="compositionend"||!Fu&&gp(e,t)?(e=hp(),Ds=Ru=fn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mp&&t.locale!=="ko"?null:t.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wv[e.type]:t==="textarea"}function yp(e,t,n,r){qf(r),t=ua(t,"onChange"),0<t.length&&(n=new $u("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Ii=null;function Sv(e){jp(e,0)}function Xa(e){var t=gr(e);if(Vf(t))return e}function Ev(e,t){if(e==="change")return t}var xp=!1;if(Yt){var No;if(Yt){var Oo="oninput"in document;if(!Oo){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Oo=typeof Qc.oninput=="function"}No=Oo}else No=!1;xp=No&&(!document.documentMode||9<document.documentMode)}function Kc(){xi&&(xi.detachEvent("onpropertychange",wp),Ii=xi=null)}function wp(e){if(e.propertyName==="value"&&Xa(Ii)){var t=[];yp(t,Ii,e,Lu(e)),Jf(Sv,t)}}function Tv(e,t,n){e==="focusin"?(Kc(),xi=t,Ii=n,xi.attachEvent("onpropertychange",wp)):e==="focusout"&&Kc()}function Cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(Ii)}function _v(e,t){if(e==="click")return Xa(t)}function kv(e,t){if(e==="input"||e==="change")return Xa(t)}function bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:bv;function zi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ep(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pv(e){var t=Ep(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ed(n,s);var a=ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jv=Yt&&"documentMode"in document&&11>=document.documentMode,hr=null,kl=null,wi=null,bl=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bl||hr==null||hr!==na(r)||(r=hr,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&zi(wi,r)||(wi=r,r=ua(kl,"onSelect"),0<r.length&&(t=new $u("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Lo={},Tp={};Yt&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Qa(e){if(Lo[e])return Lo[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tp)return Lo[e]=t[n];return e}var Cp=Qa("animationend"),_p=Qa("animationiteration"),kp=Qa("animationstart"),bp=Qa("transitionend"),Pp=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Pp.set(e,t),ir(t,[e])}for(var Io=0;Io<nd.length;Io++){var zo=nd[Io],Nv=zo.toLowerCase(),Ov=zo[0].toUpperCase()+zo.slice(1);On(Nv,"on"+Ov)}On(Cp,"onAnimationEnd");On(_p,"onAnimationIteration");On(kp,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(bp,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ng(r,t,void 0,e),e.currentTarget=null}function jp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;rd(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;rd(i,o,u),s=l}}}if(ia)throw e=El,ia=!1,El=null,e}function ae(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(Np(t,e,2,!1),n.add(r))}function Ao(e,t,n){var r=0;t&&(r|=4),Np(n,e,r,t)}var _s="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[_s]){e[_s]=!0,Rf.forEach(function(n){n!=="selectionchange"&&(Lv.has(n)||Ao(n,!1,e),Ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_s]||(t[_s]=!0,Ao("selectionchange",!1,t))}}function Np(e,t,n,r){switch(pp(t)){case 1:var i=Wg;break;case 4:i=Zg;break;default:i=Mu}n=i.bind(null,t,n,e),i=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Mo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=$n(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}Jf(function(){var u=s,c=Lu(n),p=[];e:{var g=Pp.get(e);if(g!==void 0){var v=$u,w=e;switch(e){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":v=lv;break;case"focusin":w="focus",v=jo;break;case"focusout":w="blur",v=jo;break;case"beforeblur":case"afterblur":v=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dv;break;case Cp:case _p:case kp:v=Jg;break;case bp:v=pv;break;case"scroll":v=Yg;break;case"wheel":v=mv;break;case"copy":case"cut":case"paste":v=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zc}var y=(t&4)!==0,E=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var d=u,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=ji(d,m),x!=null&&y.push(Mi(d,x,h)))),E)break;d=d.return}0<y.length&&(g=new v(g,w,null,n,c),p.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==xl&&(w=n.relatedTarget||n.fromElement)&&($n(w)||w[qt]))break e;if((v||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?$n(w):null,w!==null&&(E=sr(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=Gc,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Zc,x="onPointerLeave",m="onPointerEnter",d="pointer"),E=v==null?g:gr(v),h=w==null?g:gr(w),g=new y(x,d+"leave",v,n,c),g.target=E,g.relatedTarget=h,x=null,$n(c)===u&&(y=new y(m,d+"enter",w,n,c),y.target=h,y.relatedTarget=E,x=y),E=x,v&&w)t:{for(y=v,m=w,d=0,h=y;h;h=or(h))d++;for(h=0,x=m;x;x=or(x))h++;for(;0<d-h;)y=or(y),d--;for(;0<h-d;)m=or(m),h--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=or(y),m=or(m)}y=null}else y=null;v!==null&&id(p,g,v,y,!1),w!==null&&E!==null&&id(p,E,w,y,!0)}}e:{if(g=u?gr(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Ev;else if(Xc(g))if(xp)S=kv;else{S=Cv;var C=Tv}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=_v);if(S&&(S=S(e,u))){yp(p,S,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&hl(g,"number",g.value)}switch(C=u?gr(u):window,e){case"focusin":(Xc(C)||C.contentEditable==="true")&&(hr=C,kl=u,wi=null);break;case"focusout":wi=kl=hr=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,td(p,n,c);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":td(p,n,c)}var k;if(Fu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else pr?gp(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(mp&&n.locale!=="ko"&&(pr||j!=="onCompositionStart"?j==="onCompositionEnd"&&pr&&(k=hp()):(fn=c,Ru="value"in fn?fn.value:fn.textContent,pr=!0)),C=ua(u,j),0<C.length&&(j=new Wc(j,e,null,n,c),p.push({event:j,listeners:C}),k?j.data=k:(k=vp(n),k!==null&&(j.data=k)))),(k=vv?yv(e,n):xv(e,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=k))}jp(p,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(e,n),s!=null&&r.unshift(Mi(e,s,i)),s=ji(e,t),s!=null&&r.push(Mi(e,s,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=ji(n,s),l!=null&&a.unshift(Mi(n,l,o))):i||(l=ji(n,s),l!=null&&a.push(Mi(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Iv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Iv,`
`).replace(zv,"")}function ks(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(I(425))}function ca(){}var Pl=null,jl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(Rv)}:Ol;function Rv(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Xr,Ri="__reactProps$"+Xr,qt="__reactContainer$"+Xr,Ll="__reactEvents$"+Xr,$v="__reactListeners$"+Xr,Dv="__reactHandles$"+Xr;function $n(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=od(e);e!==null;){if(n=e[Ot])return n;e=od(e)}return t}e=n,n=e.parentNode}return null}function ds(e){return e=e[Ot]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ka(e){return e[Ri]||null}var Il=[],vr=-1;function Ln(e){return{current:e}}function le(e){0>vr||(e.current=Il[vr],Il[vr]=null,vr--)}function ie(e,t){vr++,Il[vr]=e.current,e.current=t}var bn={},Ie=Ln(bn),We=Ln(!1),qn=bn;function zr(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function da(){le(We),le(Ie)}function ld(e,t,n){if(Ie.current!==bn)throw Error(I(168));ie(Ie,t),ie(We,n)}function Op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Tg(e)||"Unknown",i));return ge({},n,r)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,qn=Ie.current,ie(Ie,e),ie(We,We.current),!0}function ud(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Op(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,le(We),le(Ie),ie(Ie,e)):le(We),ie(We,n)}var Vt=null,Ja=!1,$o=!1;function Lp(e){Vt===null?Vt=[e]:Vt.push(e)}function Fv(e){Ja=!0,Lp(e)}function In(){if(!$o&&Vt!==null){$o=!0;var e=0,t=re;try{var n=Vt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Ja=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),rp(Iu,In),i}finally{re=t,$o=!1}}return null}var yr=[],xr=0,pa=null,ha=0,at=[],ot=0,Xn=null,Ht=1,Gt="";function Mn(e,t){yr[xr++]=ha,yr[xr++]=pa,pa=e,ha=t}function Ip(e,t,n){at[ot++]=Ht,at[ot++]=Gt,at[ot++]=Xn,Xn=e;var r=Ht;e=Gt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ht=1<<32-xt(t)+i|n<<i|r,Gt=s+e}else Ht=1<<s|n<<i|r,Gt=e}function Vu(e){e.return!==null&&(Mn(e,1),Ip(e,1,0))}function Uu(e){for(;e===pa;)pa=yr[--xr],yr[xr]=null,ha=yr[--xr],yr[xr]=null;for(;e===Xn;)Xn=at[--ot],at[ot]=null,Gt=at[--ot],at[ot]=null,Ht=at[--ot],at[ot]=null}var et=null,Je=null,de=!1,gt=null;function zp(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Ht,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(de){var t=Je;if(t){var n=t;if(!cd(e,t)){if(zl(e))throw Error(I(418));t=xn(n.nextSibling);var r=et;t&&cd(e,t)?zp(r,n):(e.flags=e.flags&-4097|2,de=!1,et=e)}}else{if(zl(e))throw Error(I(418));e.flags=e.flags&-4097|2,de=!1,et=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function bs(e){if(e!==et)return!1;if(!de)return dd(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=Je)){if(zl(e))throw Ap(),Error(I(418));for(;t;)zp(e,t),t=xn(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?xn(e.stateNode.nextSibling):null;return!0}function Ap(){for(var e=Je;e;)e=xn(e.nextSibling)}function Ar(){Je=et=null,de=!1}function Hu(e){gt===null?gt=[e]:gt.push(e)}var Bv=Jt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ma=Ln(null),ga=null,wr=null,Gu=null;function Wu(){Gu=wr=ga=null}function Zu(e){var t=ma.current;le(ma),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){ga=e,Gu=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(ga===null)throw Error(I(308));wr=e,ga.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Dn=null;function Yu(e){Dn===null?Dn=[e]:Dn.push(e)}function Mp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Yu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var i=e.updateQueue;ln=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;a=0,c=u=l=null,o=s;do{var g=o.lane,v=o.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,y=o;switch(g=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(v,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,g=typeof w=="function"?w.call(v,p,g):w,g==null)break e;p=ge({},p,g);break e;case 2:ln=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[o]:g.push(o))}else v={eventTime:v,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=v,l=p):c=c.next=v,a|=g;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Kn|=a,e.lanes=a,e.memoizedState=p}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var $p=new Mf.Component().refs;function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=En(e),s=Wt(r,i);s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(wt(t,e,i,r),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=En(e),s=Wt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(wt(t,e,i,r),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=En(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(wt(t,e,r,n),Bs(t,e,r))}};function hd(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!zi(n,r)||!zi(i,s):!0}function Dp(e,t,n){var r=!1,i=bn,s=t.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ze(t)?qn:Ie.current,r=t.contextTypes,s=(r=r!=null)?zr(e,i):bn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=$p,qu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ze(t)?qn:Ie.current,i.context=zr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Rl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),va(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;o===$p&&(o=i.refs={}),a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ps(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function Fp(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Tn(m,d),m.index=0,m.sibling=null,m}function s(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,d,h,x){return d===null||d.tag!==6?(d=Go(h,m.mode,x),d.return=m,d):(d=i(d,h),d.return=m,d)}function l(m,d,h,x){var S=h.type;return S===fr?c(m,d,h.props.children,x,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&gd(S)===d.type)?(x=i(d,h.props),x.ref=ai(m,d,h),x.return=m,x):(x=Zs(h.type,h.key,h.props,null,m.mode,x),x.ref=ai(m,d,h),x.return=m,x)}function u(m,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Wo(h,m.mode,x),d.return=m,d):(d=i(d,h.children||[]),d.return=m,d)}function c(m,d,h,x,S){return d===null||d.tag!==7?(d=Hn(h,m.mode,x,S),d.return=m,d):(d=i(d,h),d.return=m,d)}function p(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Go(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vs:return h=Zs(d.type,d.key,d.props,null,m.mode,h),h.ref=ai(m,null,d),h.return=m,h;case dr:return d=Wo(d,m.mode,h),d.return=m,d;case on:var x=d._init;return p(m,x(d._payload),h)}if(fi(d)||ti(d))return d=Hn(d,m.mode,h,null),d.return=m,d;Ps(m,d)}return null}function g(m,d,h,x){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:o(m,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vs:return h.key===S?l(m,d,h,x):null;case dr:return h.key===S?u(m,d,h,x):null;case on:return S=h._init,g(m,d,S(h._payload),x)}if(fi(h)||ti(h))return S!==null?null:c(m,d,h,x,null);Ps(m,h)}return null}function v(m,d,h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,o(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vs:return m=m.get(x.key===null?h:x.key)||null,l(d,m,x,S);case dr:return m=m.get(x.key===null?h:x.key)||null,u(d,m,x,S);case on:var C=x._init;return v(m,d,h,C(x._payload),S)}if(fi(x)||ti(x))return m=m.get(h)||null,c(d,m,x,S,null);Ps(d,x)}return null}function w(m,d,h,x){for(var S=null,C=null,k=d,j=d=0,N=null;k!==null&&j<h.length;j++){k.index>j?(N=k,k=null):N=k.sibling;var P=g(m,k,h[j],x);if(P===null){k===null&&(k=N);break}e&&k&&P.alternate===null&&t(m,k),d=s(P,d,j),C===null?S=P:C.sibling=P,C=P,k=N}if(j===h.length)return n(m,k),de&&Mn(m,j),S;if(k===null){for(;j<h.length;j++)k=p(m,h[j],x),k!==null&&(d=s(k,d,j),C===null?S=k:C.sibling=k,C=k);return de&&Mn(m,j),S}for(k=r(m,k);j<h.length;j++)N=v(k,m,j,h[j],x),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?j:N.key),d=s(N,d,j),C===null?S=N:C.sibling=N,C=N);return e&&k.forEach(function(R){return t(m,R)}),de&&Mn(m,j),S}function y(m,d,h,x){var S=ti(h);if(typeof S!="function")throw Error(I(150));if(h=S.call(h),h==null)throw Error(I(151));for(var C=S=null,k=d,j=d=0,N=null,P=h.next();k!==null&&!P.done;j++,P=h.next()){k.index>j?(N=k,k=null):N=k.sibling;var R=g(m,k,P.value,x);if(R===null){k===null&&(k=N);break}e&&k&&R.alternate===null&&t(m,k),d=s(R,d,j),C===null?S=R:C.sibling=R,C=R,k=N}if(P.done)return n(m,k),de&&Mn(m,j),S;if(k===null){for(;!P.done;j++,P=h.next())P=p(m,P.value,x),P!==null&&(d=s(P,d,j),C===null?S=P:C.sibling=P,C=P);return de&&Mn(m,j),S}for(k=r(m,k);!P.done;j++,P=h.next())P=v(k,m,j,P.value,x),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?j:P.key),d=s(P,d,j),C===null?S=P:C.sibling=P,C=P);return e&&k.forEach(function(L){return t(m,L)}),de&&Mn(m,j),S}function E(m,d,h,x){if(typeof h=="object"&&h!==null&&h.type===fr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case vs:e:{for(var S=h.key,C=d;C!==null;){if(C.key===S){if(S=h.type,S===fr){if(C.tag===7){n(m,C.sibling),d=i(C,h.props.children),d.return=m,m=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&gd(S)===C.type){n(m,C.sibling),d=i(C,h.props),d.ref=ai(m,C,h),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}h.type===fr?(d=Hn(h.props.children,m.mode,x,h.key),d.return=m,m=d):(x=Zs(h.type,h.key,h.props,null,m.mode,x),x.ref=ai(m,d,h),x.return=m,m=x)}return a(m);case dr:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=i(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Wo(h,m.mode,x),d.return=m,m=d}return a(m);case on:return C=h._init,E(m,d,C(h._payload),x)}if(fi(h))return w(m,d,h,x);if(ti(h))return y(m,d,h,x);Ps(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,h),d.return=m,m=d):(n(m,d),d=Go(h,m.mode,x),d.return=m,m=d),a(m)):n(m,d)}return E}var Mr=Fp(!0),Bp=Fp(!1),fs={},zt=Ln(fs),$i=Ln(fs),Di=Ln(fs);function Fn(e){if(e===fs)throw Error(I(174));return e}function Xu(e,t){switch(ie(Di,t),ie($i,e),ie(zt,fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}le(zt),ie(zt,t)}function Rr(){le(zt),le($i),le(Di)}function Vp(e){Fn(Di.current);var t=Fn(zt.current),n=gl(t,e.type);t!==n&&(ie($i,e),ie(zt,n))}function Qu(e){$i.current===e&&(le(zt),le($i))}var pe=Ln(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Do=[];function Ku(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var Vs=Jt.ReactCurrentDispatcher,Fo=Jt.ReactCurrentBatchConfig,Qn=0,he=null,Se=null,Ce=null,xa=!1,Si=!1,Fi=0,Vv=0;function Ne(){throw Error(I(321))}function Ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function ec(e,t,n,r,i,s){if(Qn=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?Wv:Zv,e=n(r,i),Si){s=0;do{if(Si=!1,Fi=0,25<=s)throw Error(I(301));s+=1,Ce=Se=null,t.updateQueue=null,Vs.current=Yv,e=n(r,i)}while(Si)}if(Vs.current=wa,t=Se!==null&&Se.next!==null,Qn=0,Ce=Se=he=null,xa=!1,t)throw Error(I(300));return e}function tc(){var e=Fi!==0;return Fi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function dt(){if(Se===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ce===null?he.memoizedState:Ce.next;if(t!==null)Ce=t,Se=e;else{if(e===null)throw Error(I(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Bi(e,t){return typeof t=="function"?t(e):t}function Bo(e){var t=dt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Qn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=r):l=l.next=p,he.lanes|=c,Kn|=c}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,Ct(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,he.lanes|=s,Kn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=dt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Ct(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Up(){}function Hp(e,t){var n=he,r=dt(),i=t(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,nc(Zp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Vi(9,Wp.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(I(349));Qn&30||Gp(n,t,i)}return i}function Gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wp(e,t,n,r){t.value=n,t.getSnapshot=r,Yp(t)&&qp(e)}function Zp(e,t,n){return n(function(){Yp(t)&&qp(e)})}function Yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function qp(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function vd(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gv.bind(null,he,e),[t.memoizedState,e]}function Vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xp(){return dt().memoizedState}function Us(e,t,n,r){var i=jt();he.flags|=e,i.memoizedState=Vi(1|t,n,void 0,r===void 0?null:r)}function to(e,t,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(Se!==null){var a=Se.memoizedState;if(s=a.destroy,r!==null&&Ju(r,a.deps)){i.memoizedState=Vi(t,n,s,r);return}}he.flags|=e,i.memoizedState=Vi(1|t,n,s,r)}function yd(e,t){return Us(8390656,8,e,t)}function nc(e,t){return to(2048,8,e,t)}function Qp(e,t){return to(4,2,e,t)}function Kp(e,t){return to(4,4,e,t)}function Jp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function eh(e,t,n){return n=n!=null?n.concat([e]):null,to(4,4,Jp.bind(null,t,e),n)}function rc(){}function th(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rh(e,t,n){return Qn&21?(Ct(n,t)||(n=ap(),he.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Uv(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),t()}finally{re=n,Fo.transition=r}}function ih(){return dt().memoizedState}function Hv(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sh(e))ah(t,n);else if(n=Mp(e,t,n,r),n!==null){var i=Re();wt(n,e,r,i),oh(n,t,r)}}function Gv(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sh(e))ah(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,Ct(o,a)){var l=t.interleaved;l===null?(i.next=i,Yu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Mp(e,t,i,r),n!==null&&(i=Re(),wt(n,e,r,i),oh(n,t,r))}}function sh(e){var t=e.alternate;return e===he||t!==null&&t===he}function ah(e,t){Si=xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}var wa={readContext:ct,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Wv={readContext:ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Us(4194308,4,Jp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Us(4194308,4,e,t)},useInsertionEffect:function(e,t){return Us(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hv.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:rc,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=Uv.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=jt();if(de){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ke===null)throw Error(I(349));Qn&30||Gp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yd(Zp.bind(null,r,s,e),[e]),r.flags|=2048,Vi(9,Wp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=jt(),t=ke.identifierPrefix;if(de){var n=Gt,r=Ht;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zv={readContext:ct,useCallback:th,useContext:ct,useEffect:nc,useImperativeHandle:eh,useInsertionEffect:Qp,useLayoutEffect:Kp,useMemo:nh,useReducer:Bo,useRef:Xp,useState:function(){return Bo(Bi)},useDebugValue:rc,useDeferredValue:function(e){var t=dt();return rh(t,Se.memoizedState,e)},useTransition:function(){var e=Bo(Bi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Up,useSyncExternalStore:Hp,useId:ih,unstable_isNewReconciler:!1},Yv={readContext:ct,useCallback:th,useContext:ct,useEffect:nc,useImperativeHandle:eh,useInsertionEffect:Qp,useLayoutEffect:Kp,useMemo:nh,useReducer:Vo,useRef:Xp,useState:function(){return Vo(Bi)},useDebugValue:rc,useDeferredValue:function(e){var t=dt();return Se===null?t.memoizedState=e:rh(t,Se.memoizedState,e)},useTransition:function(){var e=Vo(Bi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Up,useSyncExternalStore:Hp,useId:ih,unstable_isNewReconciler:!1};function $r(e,t){try{var n="",r=t;do n+=Eg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function lh(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ea||(Ea=!0,ql=r),Dl(e,t)},n}function uh(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=u0.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Xv=Jt.ReactCurrentOwner,He=!1;function Me(e,t,n,r){t.child=e===null?Bp(t,null,n,r):Mr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var s=t.ref;return Pr(t,i),r=ec(e,t,n,r,s,i),n=tc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&n&&Vu(t),t.flags|=1,Me(e,t,r,i),t.child)}function Td(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ch(e,t,s,r,i)):(e=Zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=Tn(s,r),e.ref=t.ref,e.return=t,t.child=e}function ch(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(zi(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return Fl(e,t,n,r,i)}function dh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Er,Qe),Qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Er,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Er,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ie(Er,Qe),Qe|=r;return Me(e,t,i,n),t.child}function fh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,i){var s=Ze(n)?qn:Ie.current;return s=zr(t,s),Pr(t,i),n=ec(e,t,n,r,s,i),r=tc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&r&&Vu(t),t.flags|=1,Me(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Ze(n)){var s=!0;fa(t)}else s=!1;if(Pr(t,i),t.stateNode===null)Hs(e,t),Dp(t,n,r),$l(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ze(n)?qn:Ie.current,u=zr(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&md(t,a,r,u),ln=!1;var g=t.memoizedState;a.state=g,va(t,r,a,i),l=t.memoizedState,o!==r||g!==l||We.current||ln?(typeof c=="function"&&(Rl(t,n,c,r),l=t.memoizedState),(o=ln||hd(t,n,o,r,g,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rp(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:ht(t.type,o),a.props=u,p=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ze(n)?qn:Ie.current,l=zr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||g!==l)&&md(t,a,r,l),ln=!1,g=t.memoizedState,a.state=g,va(t,r,a,i);var w=t.memoizedState;o!==p||g!==w||We.current||ln?(typeof v=="function"&&(Rl(t,n,v,r),w=t.memoizedState),(u=ln||hd(t,n,u,r,g,w,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,s,i)}function Bl(e,t,n,r,i,s){fh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ud(t,n,!1),Qt(e,t,s);r=t.stateNode,Xv.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Mr(t,e.child,null,s),t.child=Mr(t,null,o,s)):Me(e,t,o,s),t.memoizedState=r.state,i&&ud(t,n,!0),t.child}function ph(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Xu(e,t.containerInfo)}function _d(e,t,n,r,i){return Ar(),Hu(i),t.flags|=256,Me(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function hh(e,t,n){var r=t.pendingProps,i=pe.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(pe,i&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=io(a,r,0,null),e=Hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ul(n),t.memoizedState=Vl,e):ic(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Qv(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Tn(o,s):(s=Hn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Ul(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return s=e.child,e=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ic(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function js(e,t,n,r){return r!==null&&Hu(r),Mr(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qv(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Uo(Error(I(422))),js(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=io({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Mr(t,e.child,null,a),t.child.memoizedState=Ul(a),t.memoizedState=Vl,s);if(!(t.mode&1))return js(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(I(419)),r=Uo(s,r,void 0),js(e,t,a,r)}if(o=(a&e.childLanes)!==0,He||o){if(r=ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(e,i),wt(r,e,i,-1))}return cc(),r=Uo(Error(I(421))),js(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Je=xn(i.nextSibling),et=t,de=!0,gt=null,e!==null&&(at[ot++]=Ht,at[ot++]=Gt,at[ot++]=Xn,Ht=e.id,Gt=e.overflow,Xn=t),t=ic(t,r.children),t.flags|=4096,t)}function kd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Ho(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,t);else if(e.tag===19)kd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ho(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ho(t,!0,n,null,s);break;case"together":Ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kv(e,t,n){switch(t.tag){case 3:ph(t),Ar();break;case 5:Vp(t);break;case 1:Ze(t.type)&&fa(t);break;case 4:Xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?hh(e,t,n):(ie(pe,pe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,dh(e,t,n)}return Qt(e,t,n)}var gh,Hl,vh,yh;gh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};vh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(zt.current);var s=null;switch(n){case"input":i=fl(e,i),r=fl(e,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=ml(e,i),r=ml(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ca)}vl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};yh=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jv(e,t,n){var r=t.pendingProps;switch(Uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ze(t.type)&&da(),Oe(t),null;case 3:return r=t.stateNode,Rr(),le(We),le(Ie),Ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Kl(gt),gt=null))),Hl(e,t),Oe(t),null;case 5:Qu(t);var i=Fn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)vh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Oe(t),null}if(e=Fn(zt.current),bs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ot]=t,r[Ri]=s,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)ae(hi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Ac(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Rc(r,s),ae("invalid",r)}vl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,o,e),i=["children",""+o]):bi.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":ys(r),Mc(r,s,!0);break;case"textarea":ys(r),$c(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ot]=t,e[Ri]=r,gh(e,t,!1,!1),t.stateNode=e;e:{switch(a=yl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)ae(hi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":Ac(e,r),i=fl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Rc(e,r),i=ml(e,r),ae("invalid",e);break;default:i=r}vl(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Yf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",e):l!=null&&Pu(e,s,l,a))}switch(n){case"input":ys(e),Mc(e,r,!1);break;case"textarea":ys(e),$c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Cr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)yh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Fn(Di.current),Fn(zt.current),bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(s=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ks(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Oe(t),null;case 13:if(le(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Je!==null&&t.mode&1&&!(t.flags&128))Ap(),Ar(),t.flags|=98560,s=!1;else if(s=bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(I(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Ot]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else gt!==null&&(Kl(gt),gt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Ee===0&&(Ee=3):cc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Rr(),Hl(e,t),e===null&&Ai(t.stateNode.containerInfo),Oe(t),null;case 10:return Zu(t.type._context),Oe(t),null;case 17:return Ze(t.type)&&da(),Oe(t),null;case 19:if(le(pe),s=t.memoizedState,s===null)return Oe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)oi(s,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,oi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(pe,pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&ye()>Dr&&(t.flags|=128,r=!0,oi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!de)return Oe(t),null}else 2*ye()-s.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,oi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ye(),t.sibling=null,n=pe.current,ie(pe,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function e0(e,t){switch(Uu(t),t.tag){case 1:return Ze(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),le(We),le(Ie),Ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qu(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return Rr(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Ns=!1,Le=!1,t0=typeof WeakSet=="function"?WeakSet:Set,B=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){ve(e,t,r)}}var bd=!1;function n0(e,t){if(Pl=oa,e=Ep(),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,p=e,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(o=a+i),p!==s||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++u===i&&(o=a),g===s&&++c===r&&(l=a),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},oa=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,E=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:ht(t.type,y),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){ve(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return w=bd,bd=!1,w}function Ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gl(t,n,s)}i=i.next}while(i!==r)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xh(e){var t=e.alternate;t!==null&&(e.alternate=null,xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Ri],delete t[Ll],delete t[$v],delete t[Dv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wh(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ca));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var be=null,mt=!1;function rn(e,t,n){for(n=n.child;n!==null;)Sh(e,t,n),n=n.sibling}function Sh(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:Le||Sr(n,t);case 6:var r=be,i=mt;be=null,rn(e,t,n),be=r,mt=i,be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),Li(e)):Ro(be,n.stateNode));break;case 4:r=be,i=mt,be=n.stateNode.containerInfo,mt=!0,rn(e,t,n),be=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Gl(n,t,a),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!Le&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ve(n,t,o)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,rn(e,t,n),Le=r):rn(e,t,n);break;default:rn(e,t,n)}}function jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t0),t.forEach(function(r){var i=d0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:be=o.stateNode,mt=!1;break e;case 3:be=o.stateNode.containerInfo,mt=!0;break e;case 4:be=o.stateNode.containerInfo,mt=!0;break e}o=o.return}if(be===null)throw Error(I(160));Sh(s,a,i),be=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eh(t,e),t=t.sibling}function Eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),bt(e),r&4){try{Ei(3,e,e.return),no(3,e)}catch(y){ve(e,e.return,y)}try{Ei(5,e,e.return)}catch(y){ve(e,e.return,y)}}break;case 1:pt(t,e),bt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(pt(t,e),bt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(y){ve(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Uf(i,s),yl(o,a);var u=yl(o,s);for(a=0;a<l.length;a+=2){var c=l[a],p=l[a+1];c==="style"?Yf(i,p):c==="dangerouslySetInnerHTML"?Wf(i,p):c==="children"?Pi(i,p):Pu(i,c,p,u)}switch(o){case"input":pl(i,s);break;case"textarea":Hf(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Cr(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ri]=s}catch(y){ve(e,e.return,y)}}break;case 6:if(pt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ve(e,e.return,y)}}break;case 3:if(pt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(y){ve(e,e.return,y)}break;case 4:pt(t,e),bt(e);break;case 13:pt(t,e),bt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(oc=ye())),r&4&&jd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||c,pt(t,e),Le=u):pt(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(B=e,c=e.child;c!==null;){for(p=B=c;B!==null;){switch(g=B,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ei(4,g,g.return);break;case 1:Sr(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:Sr(g,g.return);break;case 22:if(g.memoizedState!==null){Od(p);continue}}v!==null?(v.return=g,B=v):Od(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Zf("display",a))}catch(y){ve(e,e.return,y)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ve(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),bt(e),r&4&&jd(e);break;case 21:break;default:pt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=Pd(e);Yl(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Pd(e);Zl(e,o,a);break;default:throw Error(I(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,n){B=e,Th(e)}function Th(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ns;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Le;o=Ns;var u=Le;if(Ns=a,(Le=l)&&!u)for(B=i;B!==null;)a=B,l=a.child,a.tag===22&&a.memoizedState!==null?Ld(i):l!==null?(l.return=a,B=l):Ld(i);for(;s!==null;)B=s,Th(s),s=s.sibling;B=i,Ns=o,Le=u}Nd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Nd(e)}}function Nd(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||no(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&pd(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Li(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Le||t.flags&512&&Wl(t)}catch(g){ve(t,t.return,g)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Od(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Ld(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{no(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var s=t.return;try{Wl(t)}catch(l){ve(t,s,l)}break;case 5:var a=t.return;try{Wl(t)}catch(l){ve(t,a,l)}}}catch(l){ve(t,t.return,l)}if(t===e){B=null;break}var o=t.sibling;if(o!==null){o.return=t.return,B=o;break}B=t.return}}var i0=Math.ceil,Sa=Jt.ReactCurrentDispatcher,sc=Jt.ReactCurrentOwner,ut=Jt.ReactCurrentBatchConfig,J=0,ke=null,we=null,Pe=0,Qe=0,Er=Ln(0),Ee=0,Ui=null,Kn=0,ro=0,ac=0,Ti=null,Ue=null,oc=0,Dr=1/0,Ft=null,Ea=!1,ql=null,Sn=null,Os=!1,pn=null,Ta=0,Ci=0,Xl=null,Gs=-1,Ws=0;function Re(){return J&6?ye():Gs!==-1?Gs:Gs=ye()}function En(e){return e.mode&1?J&2&&Pe!==0?Pe&-Pe:Bv.transition!==null?(Ws===0&&(Ws=ap()),Ws):(e=re,e!==0||(e=window.event,e=e===void 0?16:pp(e.type)),e):1}function wt(e,t,n,r){if(50<Ci)throw Ci=0,Xl=null,Error(I(185));us(e,n,r),(!(J&2)||e!==ke)&&(e===ke&&(!(J&2)&&(ro|=n),Ee===4&&cn(e,Pe)),Ye(e,r),n===1&&J===0&&!(t.mode&1)&&(Dr=ye()+500,Ja&&In()))}function Ye(e,t){var n=e.callbackNode;Bg(e,t);var r=aa(e,e===ke?Pe:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?Fv(Id.bind(null,e)):Lp(Id.bind(null,e)),Mv(function(){!(J&6)&&In()}),n=null;else{switch(op(r)){case 1:n=Iu;break;case 4:n=ip;break;case 16:n=sa;break;case 536870912:n=sp;break;default:n=sa}n=Oh(n,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ch(e,t){if(Gs=-1,Ws=0,J&6)throw Error(I(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=aa(e,e===ke?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var i=J;J|=2;var s=kh();(ke!==e||Pe!==t)&&(Ft=null,Dr=ye()+500,Un(e,t));do try{o0();break}catch(o){_h(e,o)}while(1);Wu(),Sa.current=s,J=i,we!==null?t=0:(ke=null,Pe=0,t=Ee)}if(t!==0){if(t===2&&(i=Tl(e),i!==0&&(r=i,t=Ql(e,i))),t===1)throw n=Ui,Un(e,0),cn(e,r),Ye(e,ye()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!s0(i)&&(t=Ca(e,r),t===2&&(s=Tl(e),s!==0&&(r=s,t=Ql(e,s))),t===1))throw n=Ui,Un(e,0),cn(e,r),Ye(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Rn(e,Ue,Ft);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=oc+500-ye(),10<t)){if(aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Rn.bind(null,e,Ue,Ft),t);break}Rn(e,Ue,Ft);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-xt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i0(r/1960))-r,10<r){e.timeoutHandle=Ol(Rn.bind(null,e,Ue,Ft),r);break}Rn(e,Ue,Ft);break;case 5:Rn(e,Ue,Ft);break;default:throw Error(I(329))}}}return Ye(e,ye()),e.callbackNode===n?Ch.bind(null,e):null}function Ql(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Kl(t)),e}function Kl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~ac,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Id(e){if(J&6)throw Error(I(327));jr();var t=aa(e,0);if(!(t&1))return Ye(e,ye()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=Ui,Un(e,0),cn(e,t),Ye(e,ye()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Ue,Ft),Ye(e,ye()),null}function lc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Dr=ye()+500,Ja&&In())}}function Jn(e){pn!==null&&pn.tag===0&&!(J&6)&&jr();var t=J;J|=1;var n=ut.transition,r=re;try{if(ut.transition=null,re=1,e)return e()}finally{re=r,ut.transition=n,J=t,!(J&6)&&In()}}function uc(){Qe=Er.current,le(Er)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Av(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Rr(),le(We),le(Ie),Ku();break;case 5:Qu(r);break;case 4:Rr();break;case 13:le(pe);break;case 19:le(pe);break;case 10:Zu(r.type._context);break;case 22:case 23:uc()}n=n.return}if(ke=e,we=e=Tn(e.current,null),Pe=Qe=t,Ee=0,Ui=null,ac=ro=Kn=0,Ue=Ti=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Dn=null}return e}function _h(e,t){do{var n=we;try{if(Wu(),Vs.current=wa,xa){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xa=!1}if(Qn=0,Ce=Se=he=null,Si=!1,Fi=0,sc.current=null,n===null||n.return===null){Ee=1,Ui=t,we=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Pe,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=wd(a);if(v!==null){v.flags&=-257,Sd(v,a,o,s,t),v.mode&1&&xd(s,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){xd(s,u,t),cc();break e}l=Error(I(426))}}else if(de&&o.mode&1){var E=wd(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Sd(E,a,o,s,t),Hu($r(l,o));break e}}s=l=$r(l,o),Ee!==4&&(Ee=2),Ti===null?Ti=[s]:Ti.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=lh(s,l,t);fd(s,m);break e;case 1:o=l;var d=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Sn===null||!Sn.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=uh(s,o,t);fd(s,x);break e}}s=s.return}while(s!==null)}Ph(n)}catch(S){t=S,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function kh(){var e=Sa.current;return Sa.current=wa,e===null?wa:e}function cc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),ke===null||!(Kn&268435455)&&!(ro&268435455)||cn(ke,Pe)}function Ca(e,t){var n=J;J|=2;var r=kh();(ke!==e||Pe!==t)&&(Ft=null,Un(e,t));do try{a0();break}catch(i){_h(e,i)}while(1);if(Wu(),J=n,Sa.current=r,we!==null)throw Error(I(261));return ke=null,Pe=0,Ee}function a0(){for(;we!==null;)bh(we)}function o0(){for(;we!==null&&!Lg();)bh(we)}function bh(e){var t=Nh(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Ph(e):we=t,sc.current=null}function Ph(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,we=null;return}}else if(n=Jv(n,t,Qe),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ee===0&&(Ee=5)}function Rn(e,t,n){var r=re,i=ut.transition;try{ut.transition=null,re=1,l0(e,t,n,r)}finally{ut.transition=i,re=r}return null}function l0(e,t,n,r){do jr();while(pn!==null);if(J&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vg(e,s),e===ke&&(we=ke=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Oh(sa,function(){return jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var a=re;re=1;var o=J;J|=4,sc.current=null,n0(e,n),Eh(n,e),Pv(jl),oa=!!Pl,jl=Pl=null,e.current=n,r0(n),Ig(),J=o,re=a,ut.transition=s}else e.current=n;if(Os&&(Os=!1,pn=e,Ta=i),s=e.pendingLanes,s===0&&(Sn=null),Mg(n.stateNode),Ye(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ea)throw Ea=!1,e=ql,ql=null,e;return Ta&1&&e.tag!==0&&jr(),s=e.pendingLanes,s&1?e===Xl?Ci++:(Ci=0,Xl=e):Ci=0,In(),null}function jr(){if(pn!==null){var e=op(Ta),t=ut.transition,n=re;try{if(ut.transition=null,re=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Ta=0,J&6)throw Error(I(331));var i=J;for(J|=4,B=e.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Ei(8,c,s)}var p=c.child;if(p!==null)p.return=c,B=p;else for(;B!==null;){c=B;var g=c.sibling,v=c.return;if(xh(c),c===u){B=null;break}if(g!==null){g.return=v,B=g;break}B=v}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ei(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var d=e.current;for(B=d;B!==null;){a=B;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,B=h;else e:for(a=d;B!==null;){if(o=B,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:no(9,o)}}catch(S){ve(o,o.return,S)}if(o===a){B=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,B=x;break e}B=o.return}}if(J=i,In(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ya,e)}catch{}r=!0}return r}finally{re=n,ut.transition=t}}return!1}function zd(e,t,n){t=$r(n,t),t=lh(e,t,1),e=wn(e,t,1),t=Re(),e!==null&&(us(e,1,t),Ye(e,t))}function ve(e,t,n){if(e.tag===3)zd(e,e,n);else for(;t!==null;){if(t.tag===3){zd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=$r(n,e),e=uh(t,e,1),t=wn(t,e,1),e=Re(),t!==null&&(us(t,1,e),Ye(t,e));break}}t=t.return}}function u0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>ye()-oc?Un(e,0):ac|=n),Ye(e,t)}function jh(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=Re();e=Xt(e,t),e!==null&&(us(e,t,n),Ye(e,n))}function c0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jh(e,n)}function d0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),jh(e,n)}var Nh;Nh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Kv(e,t,n);He=!!(e.flags&131072)}else He=!1,de&&t.flags&1048576&&Ip(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=zr(t,Ie.current);Pr(t,n),i=ec(null,t,r,e,i,n);var s=tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(s=!0,fa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qu(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,$l(t,r,e,n),t=Bl(null,t,r,!0,s,n)):(t.tag=0,de&&s&&Vu(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=p0(r),e=ht(r,e),i){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=Td(null,t,r,ht(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Fl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Cd(e,t,r,i,n);case 3:e:{if(ph(t),e===null)throw Error(I(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Rp(e,t),va(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=$r(Error(I(423)),t),t=_d(e,t,r,n,i);break e}else if(r!==i){i=$r(Error(I(424)),t),t=_d(e,t,r,n,i);break e}else for(Je=xn(t.stateNode.containerInfo.firstChild),et=t,de=!0,gt=null,n=Bp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=Qt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Vp(t),e===null&&Al(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Nl(r,i)?a=null:s!==null&&Nl(r,s)&&(t.flags|=32),fh(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&Al(t),null;case 13:return hh(e,t,n);case 4:return Xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Ed(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ie(ma,r._currentValue),r._currentValue=a,s!==null)if(Ct(s.value,a)){if(s.children===i.children&&!We.current){t=Qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ml(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(I(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ml(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pr(t,n),i=ct(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Td(e,t,r,i,n);case 15:return ch(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Hs(e,t),t.tag=1,Ze(r)?(e=!0,fa(t)):e=!1,Pr(t,n),Dp(t,r,i),$l(t,r,i,n),Bl(null,t,r,!0,e,n);case 19:return mh(e,t,n);case 22:return dh(e,t,n)}throw Error(I(156,t.tag))};function Oh(e,t){return rp(e,t)}function f0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new f0(e,t,n,r)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Ou)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zs(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")dc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return Hn(n.children,i,s,t);case ju:a=8,i|=8;break;case ll:return e=lt(12,n,t,i|2),e.elementType=ll,e.lanes=s,e;case ul:return e=lt(13,n,t,i),e.elementType=ul,e.lanes=s,e;case cl:return e=lt(19,n,t,i),e.elementType=cl,e.lanes=s,e;case Ff:return io(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $f:a=10;break e;case Df:a=9;break e;case Nu:a=11;break e;case Ou:a=14;break e;case on:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=lt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Hn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Ff,e.lanes=n,e.stateNode={isHidden:!1},e}function Go(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Wo(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,i,s,a,o,l){return e=new h0(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=lt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(s),e}function m0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lh(e){if(!e)return bn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Op(e,n,t)}return t}function Ih(e,t,n,r,i,s,a,o,l){return e=fc(n,r,!0,e,i,s,a,o,l),e.context=Lh(null),n=e.current,r=Re(),i=En(n),s=Wt(r,i),s.callback=t??null,wn(n,s,i),e.current.lanes=i,us(e,i,r),Ye(e,r),e}function so(e,t,n,r){var i=t.current,s=Re(),a=En(i);return n=Lh(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,a),e!==null&&(wt(e,i,a,s),Bs(e,i,a)),a}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function g0(){return null}var zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}ao.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));so(e,t,null,null)};ao.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){so(null,e,null,null)}),t[qt]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=cp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&fp(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function v0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_a(a);s.call(u)}}var a=Ih(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=a,e[qt]=a.current,Ai(e.nodeType===8?e.parentNode:e),Jn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=_a(l);o.call(u)}}var l=fc(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=l,e[qt]=l.current,Ai(e.nodeType===8?e.parentNode:e),Jn(function(){so(t,l,n,r)}),l}function lo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=_a(a);o.call(l)}}so(t,a,e,i)}else a=v0(n,t,e,i,r);return _a(a)}lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(zu(t,n|1),Ye(t,ye()),!(J&6)&&(Dr=ye()+500,In()))}break;case 13:Jn(function(){var r=Xt(e,1);if(r!==null){var i=Re();wt(r,e,1,i)}}),pc(e,1)}};Au=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Re();wt(t,e,134217728,n)}pc(e,134217728)}};up=function(e){if(e.tag===13){var t=En(e),n=Xt(e,t);if(n!==null){var r=Re();wt(n,e,t,r)}pc(e,t)}};cp=function(){return re};dp=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};wl=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ka(r);if(!i)throw Error(I(90));Vf(r),pl(r,i)}}}break;case"textarea":Hf(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Qf=lc;Kf=Jn;var y0={usingClientEntryPoint:!1,Events:[ds,gr,Ka,qf,Xf,lc]},li={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x0={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tp(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Ya=Ls.inject(x0),It=Ls}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(I(200));return m0(e,t,null,n)};nt.createRoot=function(e,t){if(!mc(e))throw Error(I(299));var n=!1,r="",i=zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,i),e[qt]=t.current,Ai(e.nodeType===8?e.parentNode:e),new hc(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=tp(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Jn(e)};nt.hydrate=function(e,t,n){if(!oo(t))throw Error(I(200));return lo(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=zh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ih(t,null,e,1,n??null,i,!1,s,a),e[qt]=t.current,Ai(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ao(t)};nt.render=function(e,t,n){if(!oo(t))throw Error(I(200));return lo(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!oo(e))throw Error(I(40));return e._reactRootContainer?(Jn(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};nt.unstable_batchedUpdates=lc;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oo(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return lo(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function Ah(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ah)}catch(e){console.error(e)}}Ah(),If.exports=nt;var w0=If.exports,Rd=w0;al.createRoot=Rd.createRoot,al.hydrateRoot=Rd.hydrateRoot;const uo=Y.createContext({});var Mh={exports:{}},S0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E0=S0,T0=E0;function Rh(){}function $h(){}$h.resetWarningCache=Rh;var C0=function(){function e(r,i,s,a,o,l){if(l!==T0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$h,resetWarningCache:Rh};return n.PropTypes=n,n};Mh.exports=C0();var _0=Mh.exports;const ue=os(_0);function k0(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Dh=b,b0=k0(Dh);function $d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P0(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var j0=!!(typeof window<"u"&&window.document&&window.document.createElement);function N0(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(s){if(typeof s!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],o;function l(){o=e(a.map(function(c){return c.props})),u.canUseDOM?t(o):n&&(o=n(o))}var u=function(c){P0(p,c);function p(){return c.apply(this,arguments)||this}p.peek=function(){return o},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var w=o;return o=void 0,a=[],w};var g=p.prototype;return g.UNSAFE_componentWillMount=function(){a.push(this),l()},g.componentDidUpdate=function(){l()},g.componentWillUnmount=function(){var w=a.indexOf(this);a.splice(w,1),l()},g.render=function(){return b0.createElement(s,this.props)},p}(Dh.PureComponent);return $d(u,"displayName","SideEffect("+r(s)+")"),$d(u,"canUseDOM",j0),u}}var O0=N0;const L0=os(O0);var I0=typeof Element<"u",z0=typeof Map=="function",A0=typeof Set=="function",M0=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ys(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ys(e[r],t[r]))return!1;return!0}var s;if(z0&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;for(s=e.entries();!(r=s.next()).done;)if(!Ys(r.value[1],t.get(r.value[0])))return!1;return!0}if(A0&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(M0&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(I0&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Ys(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var R0=function(t,n){try{return Ys(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const $0=os(R0);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Dd=Object.getOwnPropertySymbols,D0=Object.prototype.hasOwnProperty,F0=Object.prototype.propertyIsEnumerable;function B0(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function V0(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var U0=V0()?Object.assign:function(e,t){for(var n,r=B0(e),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var a in n)D0.call(n,a)&&(r[a]=n[a]);if(Dd){i=Dd(n);for(var o=0;o<i.length;o++)F0.call(n,i[o])&&(r[i[o]]=n[i[o]])}}return r};const H0=os(U0);var Gn={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},W={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(W).map(function(e){return W[e]});var ce={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},ka={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Hi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},G0=Object.keys(ka).reduce(function(e,t){return e[ka[t]]=t,e},{}),W0=[W.NOSCRIPT,W.SCRIPT,W.STYLE],vt="data-react-helmet",Z0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y0=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X0=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Fd=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q0=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Jl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K0=function(t){var n=Nr(t,W.TITLE),r=Nr(t,Hi.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Nr(t,Hi.DEFAULT_TITLE);return n||i||void 0},J0=function(t){return Nr(t,Hi.ON_CHANGE_CLIENT_STATE)||function(){}},Zo=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return Ve({},r,i)},{})},ey=function(t,n){return n.filter(function(r){return typeof r[W.BASE]<"u"}).map(function(r){return r[W.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var s=Object.keys(i),a=0;a<s.length;a++){var o=s[a],l=o.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},ui=function(t,n,r){var i={};return r.filter(function(s){return Array.isArray(s[t])?!0:(typeof s[t]<"u"&&iy("Helmet: "+t+' should be of type "Array". Instead found type "'+Z0(s[t])+'"'),!1)}).map(function(s){return s[t]}).reverse().reduce(function(s,a){var o={};a.filter(function(g){for(var v=void 0,w=Object.keys(g),y=0;y<w.length;y++){var E=w[y],m=E.toLowerCase();n.indexOf(m)!==-1&&!(v===ce.REL&&g[v].toLowerCase()==="canonical")&&!(m===ce.REL&&g[m].toLowerCase()==="stylesheet")&&(v=m),n.indexOf(E)!==-1&&(E===ce.INNER_HTML||E===ce.CSS_TEXT||E===ce.ITEM_PROP)&&(v=E)}if(!v||!g[v])return!1;var d=g[v].toLowerCase();return i[v]||(i[v]={}),o[v]||(o[v]={}),i[v][d]?!1:(o[v][d]=!0,!0)}).reverse().forEach(function(g){return s.push(g)});for(var l=Object.keys(o),u=0;u<l.length;u++){var c=l[u],p=H0({},i[c],o[c]);i[c]=p}return s},[]).reverse()},Nr=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},ty=function(t){return{baseTag:ey([ce.HREF,ce.TARGET],t),bodyAttributes:Zo(Gn.BODY,t),defer:Nr(t,Hi.DEFER),encode:Nr(t,Hi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Zo(Gn.HTML,t),linkTags:ui(W.LINK,[ce.REL,ce.HREF],t),metaTags:ui(W.META,[ce.NAME,ce.CHARSET,ce.HTTPEQUIV,ce.PROPERTY,ce.ITEM_PROP],t),noscriptTags:ui(W.NOSCRIPT,[ce.INNER_HTML],t),onChangeClientState:J0(t),scriptTags:ui(W.SCRIPT,[ce.SRC,ce.INNER_HTML],t),styleTags:ui(W.STYLE,[ce.CSS_TEXT],t),title:K0(t),titleAttributes:Zo(Gn.TITLE,t)}},eu=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){eu(t)},0)}}(),Bd=function(t){return clearTimeout(t)},ny=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||eu:global.requestAnimationFrame||eu,ry=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Bd:global.cancelAnimationFrame||Bd,iy=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},ci=null,sy=function(t){ci&&ry(ci),t.defer?ci=ny(function(){Vd(t,function(){ci=null})}):(Vd(t),ci=null)},Vd=function(t,n){var r=t.baseTag,i=t.bodyAttributes,s=t.htmlAttributes,a=t.linkTags,o=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,p=t.styleTags,g=t.title,v=t.titleAttributes;tu(W.BODY,i),tu(W.HTML,s),ay(g,v);var w={baseTag:lr(W.BASE,r),linkTags:lr(W.LINK,a),metaTags:lr(W.META,o),noscriptTags:lr(W.NOSCRIPT,l),scriptTags:lr(W.SCRIPT,c),styleTags:lr(W.STYLE,p)},y={},E={};Object.keys(w).forEach(function(m){var d=w[m],h=d.newTags,x=d.oldTags;h.length&&(y[m]=h),x.length&&(E[m]=w[m].oldTags)}),n&&n(),u(t,y,E)},Fh=function(t){return Array.isArray(t)?t.join(""):t},ay=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Fh(t)),tu(W.TITLE,n)},tu=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(vt),s=i?i.split(","):[],a=[].concat(s),o=Object.keys(n),l=0;l<o.length;l++){var u=o[l],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),s.indexOf(u)===-1&&s.push(u);var p=a.indexOf(u);p!==-1&&a.splice(p,1)}for(var g=a.length-1;g>=0;g--)r.removeAttribute(a[g]);s.length===a.length?r.removeAttribute(vt):r.getAttribute(vt)!==o.join(",")&&r.setAttribute(vt,o.join(","))}},lr=function(t,n){var r=document.head||document.querySelector(W.HEAD),i=r.querySelectorAll(t+"["+vt+"]"),s=Array.prototype.slice.call(i),a=[],o=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var c in l)if(l.hasOwnProperty(c))if(c===ce.INNER_HTML)u.innerHTML=l.innerHTML;else if(c===ce.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[c]>"u"?"":l[c];u.setAttribute(c,p)}u.setAttribute(vt,"true"),s.some(function(g,v){return o=v,u.isEqualNode(g)})?s.splice(o,1):a.push(u)}),s.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:s,newTags:a}},Bh=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},oy=function(t,n,r,i){var s=Bh(r),a=Fh(n);return s?"<"+t+" "+vt+'="true" '+s+">"+Jl(a,i)+"</"+t+">":"<"+t+" "+vt+'="true">'+Jl(a,i)+"</"+t+">"},ly=function(t,n,r){return n.reduce(function(i,s){var a=Object.keys(s).filter(function(u){return!(u===ce.INNER_HTML||u===ce.CSS_TEXT)}).reduce(function(u,c){var p=typeof s[c]>"u"?c:c+'="'+Jl(s[c],r)+'"';return u?u+" "+p:p},""),o=s.innerHTML||s.cssText||"",l=W0.indexOf(t)===-1;return i+"<"+t+" "+vt+'="true" '+a+(l?"/>":">"+o+"</"+t+">")},"")},Vh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[ka[i]||i]=t[i],r},n)},uy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[G0[i]||i]=t[i],r},n)},cy=function(t,n,r){var i,s=(i={key:n},i[vt]=!0,i),a=Vh(r,s);return[Y.createElement(W.TITLE,a,n)]},dy=function(t,n){return n.map(function(r,i){var s,a=(s={key:i},s[vt]=!0,s);return Object.keys(r).forEach(function(o){var l=ka[o]||o;if(l===ce.INNER_HTML||l===ce.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[o]}),Y.createElement(t,a)})},$t=function(t,n,r){switch(t){case W.TITLE:return{toComponent:function(){return cy(t,n.title,n.titleAttributes)},toString:function(){return oy(t,n.title,n.titleAttributes,r)}};case Gn.BODY:case Gn.HTML:return{toComponent:function(){return Vh(n)},toString:function(){return Bh(n)}};default:return{toComponent:function(){return dy(t,n)},toString:function(){return ly(t,n,r)}}}},Uh=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,s=t.htmlAttributes,a=t.linkTags,o=t.metaTags,l=t.noscriptTags,u=t.scriptTags,c=t.styleTags,p=t.title,g=p===void 0?"":p,v=t.titleAttributes;return{base:$t(W.BASE,n,i),bodyAttributes:$t(Gn.BODY,r,i),htmlAttributes:$t(Gn.HTML,s,i),link:$t(W.LINK,a,i),meta:$t(W.META,o,i),noscript:$t(W.NOSCRIPT,l,i),script:$t(W.SCRIPT,u,i),style:$t(W.STYLE,c,i),title:$t(W.TITLE,{title:g,titleAttributes:v},i)}},fy=function(t){var n,r;return r=n=function(i){X0(s,i);function s(){return Y0(this,s),Q0(this,i.apply(this,arguments))}return s.prototype.shouldComponentUpdate=function(o){return!$0(this.props,o)},s.prototype.mapNestedChildrenToProps=function(o,l){if(!l)return null;switch(o.type){case W.SCRIPT:case W.NOSCRIPT:return{innerHTML:l};case W.STYLE:return{cssText:l}}throw new Error("<"+o.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},s.prototype.flattenArrayTypeChildren=function(o){var l,u=o.child,c=o.arrayTypeChildren,p=o.newChildProps,g=o.nestedChildren;return Ve({},c,(l={},l[u.type]=[].concat(c[u.type]||[],[Ve({},p,this.mapNestedChildrenToProps(u,g))]),l))},s.prototype.mapObjectTypeChildren=function(o){var l,u,c=o.child,p=o.newProps,g=o.newChildProps,v=o.nestedChildren;switch(c.type){case W.TITLE:return Ve({},p,(l={},l[c.type]=v,l.titleAttributes=Ve({},g),l));case W.BODY:return Ve({},p,{bodyAttributes:Ve({},g)});case W.HTML:return Ve({},p,{htmlAttributes:Ve({},g)})}return Ve({},p,(u={},u[c.type]=Ve({},g),u))},s.prototype.mapArrayTypeChildrenToProps=function(o,l){var u=Ve({},l);return Object.keys(o).forEach(function(c){var p;u=Ve({},u,(p={},p[c]=o[c],p))}),u},s.prototype.warnOnInvalidChildren=function(o,l){return!0},s.prototype.mapChildrenToProps=function(o,l){var u=this,c={};return Y.Children.forEach(o,function(p){if(!(!p||!p.props)){var g=p.props,v=g.children,w=Fd(g,["children"]),y=uy(w);switch(u.warnOnInvalidChildren(p,v),p.type){case W.LINK:case W.META:case W.NOSCRIPT:case W.SCRIPT:case W.STYLE:c=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:c,newChildProps:y,nestedChildren:v});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(c,l),l},s.prototype.render=function(){var o=this.props,l=o.children,u=Fd(o,["children"]),c=Ve({},u);return l&&(c=this.mapChildrenToProps(l,c)),Y.createElement(t,c)},q0(s,null,[{key:"canUseDOM",set:function(o){t.canUseDOM=o}}]),s}(Y.Component),n.propTypes={base:ue.object,bodyAttributes:ue.object,children:ue.oneOfType([ue.arrayOf(ue.node),ue.node]),defaultTitle:ue.string,defer:ue.bool,encodeSpecialCharacters:ue.bool,htmlAttributes:ue.object,link:ue.arrayOf(ue.object),meta:ue.arrayOf(ue.object),noscript:ue.arrayOf(ue.object),onChangeClientState:ue.func,script:ue.arrayOf(ue.object),style:ue.arrayOf(ue.object),title:ue.string,titleAttributes:ue.object,titleTemplate:ue.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=Uh({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},py=function(){return null},hy=L0(ty,sy,Uh)(py),nu=fy(hy);nu.renderStatic=nu.rewind;const Hh=({title:e="Stens;Calculator"})=>f.jsx(nu,{children:f.jsx("title",{children:e})});/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Ud="popstate";function my(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:o}=r.location;return ru("",{pathname:s,search:a,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ba(i)}return vy(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gy(){return Math.random().toString(36).substr(2,8)}function Hd(e,t){return{usr:e.state,key:e.key,idx:t}}function ru(e,t,n,r){return n===void 0&&(n=null),Gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qr(t):t,{state:n,key:t&&t.key||r||gy()})}function ba(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=hn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Gi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function p(){o=hn.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:o,location:y.location,delta:m})}function g(E,m){o=hn.Push;let d=ru(y.location,E,m);n&&n(d,E),u=c()+1;let h=Hd(d,u),x=y.createHref(d);try{a.pushState(h,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}s&&l&&l({action:o,location:y.location,delta:1})}function v(E,m){o=hn.Replace;let d=ru(y.location,E,m);n&&n(d,E),u=c();let h=Hd(d,u),x=y.createHref(d);a.replaceState(h,"",x),s&&l&&l({action:o,location:y.location,delta:0})}function w(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:ba(E);return me(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let y={get action(){return o},get location(){return e(i,a)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ud,p),l=E,()=>{i.removeEventListener(Ud,p),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let m=w(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(E){return a.go(E)}};return y}var Gd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gd||(Gd={}));function yy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Qr(t):t,i=Wi(r.pathname||"/",n);if(i==null)return null;let s=Gh(e);xy(s);let a=null;for(let o=0;a==null&&o<s.length;++o)a=Py(s[o],Ny(i));return a}function Gh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gh(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:ky(u,s.index),routesMeta:c})};return e.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))i(s,a);else for(let l of Wh(s.path))i(s,a,l)}),t}function Wh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Wh(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function xy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:by(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wy=/^:\w+$/,Sy=3,Ey=2,Ty=1,Cy=10,_y=-2,Wd=e=>e==="*";function ky(e,t){let n=e.split("/"),r=n.length;return n.some(Wd)&&(r+=_y),t&&(r+=Ey),n.filter(i=>!Wd(i)).reduce((i,s)=>i+(wy.test(s)?Sy:s===""?Ty:Cy),r)}function by(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Py(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let a=0;a<n.length;++a){let o=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=iu({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let p=o.route;s.push({params:r,pathname:Cn([i,c.pathname]),pathnameBase:zy(Cn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=Cn([i,c.pathnameBase]))}return s}function iu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,c,p)=>{let{paramName:g,isOptional:v}=c;if(g==="*"){let y=o[p]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const w=o[p];return v&&!w?u[g]=void 0:u[g]=Oy(w||"",g),u},{}),pathname:s,pathnameBase:a,pattern:e}}function jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,o,l)=>(r.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ny(e){try{return decodeURI(e)}catch(t){return gc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oy(e,t){try{return decodeURIComponent(e)}catch(n){return gc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ly(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Qr(e):e;return{pathname:n?n.startsWith("/")?n:Iy(n,t):t,search:Ay(r),hash:My(i)}}function Iy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Qr(e):(i=Gi({},e),me(!i.pathname||!i.pathname.includes("?"),Yo("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Yo("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Yo("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else if(r){let p=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p.pop();i.pathname=g.join("/")}o="/"+p.join("/")}else{let p=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}o=p>=0?t[p]:"/"}let l=Ly(i,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),zy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ay=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,My=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zh=["post","put","patch","delete"];new Set(Zh);const $y=["get",...Zh];new Set($y);/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}const co=b.createContext(null),Yh=b.createContext(null),ar=b.createContext(null),fo=b.createContext(null),en=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qh=b.createContext(null);function Dy(e,t){let{relative:n}=t===void 0?{}:t;Kr()||me(!1);let{basename:r,navigator:i}=b.useContext(ar),{hash:s,pathname:a,search:o}=po(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Cn([r,a])),i.createHref({pathname:l,search:o,hash:s})}function Kr(){return b.useContext(fo)!=null}function Jr(){return Kr()||me(!1),b.useContext(fo).location}function Xh(e){b.useContext(ar).static||b.useLayoutEffect(e)}function xc(){let{isDataRoute:e}=b.useContext(en);return e?e1():Fy()}function Fy(){Kr()||me(!1);let e=b.useContext(co),{basename:t,navigator:n}=b.useContext(ar),{matches:r}=b.useContext(en),{pathname:i}=Jr(),s=JSON.stringify(vc(r).map(l=>l.pathnameBase)),a=b.useRef(!1);return Xh(()=>{a.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=yc(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Cn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const By=b.createContext(null);function Vy(e){let t=b.useContext(en).outlet;return t&&b.createElement(By.Provider,{value:e},t)}function po(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(en),{pathname:i}=Jr(),s=JSON.stringify(vc(r).map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase));return b.useMemo(()=>yc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Uy(e,t){return Hy(e,t)}function Hy(e,t,n){Kr()||me(!1);let{navigator:r}=b.useContext(ar),{matches:i}=b.useContext(en),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let l=Jr(),u;if(t){var c;let y=typeof t=="string"?Qr(t):t;o==="/"||(c=y.pathname)!=null&&c.startsWith(o)||me(!1),u=y}else u=l;let p=u.pathname||"/",g=o==="/"?p:p.slice(o.length)||"/",v=yy(e,{pathname:g}),w=qy(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Cn([o,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?o:Cn([o,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&w?b.createElement(fo.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hn.Pop}},w):w}function Gy(){let e=Jy(),t=Ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,s)}const Wy=b.createElement(Gy,null);class Zy extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(en.Provider,{value:this.props.routeContext},b.createElement(qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yy(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(co);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(en.Provider,{value:t},r)}function qy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let o=s.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));o>=0||me(!1),s=s.slice(0,Math.min(s.length,o+1))}return s.reduceRight((o,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,p=null;n&&(p=l.route.errorElement||Wy);let g=t.concat(s.slice(0,u+1)),v=()=>{let w;return c?w=p:l.route.Component?w=b.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=o,b.createElement(Yy,{match:l,routeContext:{outlet:o,matches:g,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(Zy,{location:n.location,revalidation:n.revalidation,component:p,error:c,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Qh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qh||{}),ja=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ja||{});function Xy(e){let t=b.useContext(co);return t||me(!1),t}function Qy(e){let t=b.useContext(Yh);return t||me(!1),t}function Ky(e){let t=b.useContext(en);return t||me(!1),t}function Kh(e){let t=Ky(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Jy(){var e;let t=b.useContext(qh),n=Qy(ja.UseRouteError),r=Kh(ja.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function e1(){let{router:e}=Xy(Qh.UseNavigateStable),t=Kh(ja.UseNavigateStable),n=b.useRef(!1);return Xh(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Pa({fromRouteId:t},s)))},[e,t])}function Jh(e){let{to:t,replace:n,state:r,relative:i}=e;Kr()||me(!1);let{matches:s}=b.useContext(en),{pathname:a}=Jr(),o=xc(),l=yc(t,vc(s).map(c=>c.pathnameBase),a,i==="path"),u=JSON.stringify(l);return b.useEffect(()=>o(JSON.parse(u),{replace:n,state:r,relative:i}),[o,u,i,n,r]),null}function t1(e){return Vy(e.context)}function Pt(e){me(!1)}function n1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hn.Pop,navigator:s,static:a=!1}=e;Kr()&&me(!1);let o=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:o,navigator:s,static:a}),[o,s,a]);typeof r=="string"&&(r=Qr(r));let{pathname:u="/",search:c="",hash:p="",state:g=null,key:v="default"}=r,w=b.useMemo(()=>{let y=Wi(u,o);return y==null?null:{location:{pathname:y,search:c,hash:p,state:g,key:v},navigationType:i}},[o,u,c,p,g,v,i]);return w==null?null:b.createElement(ar.Provider,{value:l},b.createElement(fo.Provider,{children:n,value:w}))}function r1(e){let{children:t,location:n}=e;return Uy(su(t),n)}new Promise(()=>{});function su(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,su(r.props.children,s));return}r.type!==Pt&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=su(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}function em(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function i1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s1(e,t){return e.button===0&&(!t||t==="_self")&&!i1(e)}const a1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],o1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],l1=b.createContext({isTransitioning:!1}),u1="startTransition",Zd=cg[u1];function c1(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=my({window:i,v5Compat:!0}));let a=s.current,[o,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(p=>{u&&Zd?Zd(()=>l(p)):l(p)},[l,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(n1,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const d1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tm=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,unstable_viewTransition:p}=t,g=em(t,a1),{basename:v}=b.useContext(ar),w,y=!1;if(typeof u=="string"&&f1.test(u)&&(w=u,d1))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Wi(x.pathname,v);x.origin===h.origin&&S!=null?u=S+x.search+x.hash:y=!0}catch{}let E=Dy(u,{relative:i}),m=h1(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:p});function d(h){r&&r(h),h.defaultPrevented||m(h)}return b.createElement("a",Na({},g,{href:w||E,onClick:y||s?r:d,ref:n,target:l}))}),Yd=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:o,to:l,unstable_viewTransition:u,children:c}=t,p=em(t,o1),g=po(l,{relative:p.relative}),v=Jr(),w=b.useContext(Yh),{navigator:y}=b.useContext(ar),E=w!=null&&m1(g)&&u===!0,m=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,d=v.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(d=d.toLowerCase(),h=h?h.toLowerCase():null,m=m.toLowerCase());const x=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=d===m||!a&&d.startsWith(m)&&d.charAt(x)==="/",C=h!=null&&(h===m||!a&&h.startsWith(m)&&h.charAt(m.length)==="/"),k={isActive:S,isPending:C,isTransitioning:E},j=S?r:void 0,N;typeof s=="function"?N=s(k):N=[s,S?"active":null,C?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(k):o;return b.createElement(tm,Na({},p,{"aria-current":j,className:N,ref:n,style:P,to:l,unstable_viewTransition:u}),typeof c=="function"?c(k):c)});var au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(au||(au={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));function p1(e){let t=b.useContext(co);return t||me(!1),t}function h1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:o}=t===void 0?{}:t,l=xc(),u=Jr(),c=po(e,{relative:a});return b.useCallback(p=>{if(s1(p,n)){p.preventDefault();let g=r!==void 0?r:ba(u)===ba(c);l(e,{replace:g,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:o})}},[u,l,c,r,i,n,e,s,a,o])}function m1(e,t){t===void 0&&(t={});let n=b.useContext(l1);n==null&&me(!1);let{basename:r}=p1(au.useViewTransitionState),i=po(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Wi(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Wi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return iu(i.pathname,a)!=null||iu(i.pathname,s)!=null}const nm="/assets/santa-cruz-logo-removebg-preview-RqkXXYT6.png";var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ge.apply(this,arguments)};function Oa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var oe="-ms-",_i="-moz-",ne="-webkit-",rm="comm",ho="rule",wc="decl",g1="@import",im="@keyframes",v1="@layer",y1=Math.abs,Sc=String.fromCharCode,ou=Object.assign;function x1(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function sm(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function qs(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function am(e){return e.length}function mi(e,t){return t.push(e),e}function w1(e,t){return e.map(t).join("")}function Xd(e,t){return e.filter(function(n){return!Bt(n,t)})}var mo=1,Br=1,om=0,ft=0,xe=0,ei="";function go(e,t,n,r,i,s,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:mo,column:Br,length:a,return:"",siblings:o}}function sn(e,t){return ou(go("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ur(e){for(;e.root;)e=sn(e.root,{children:[e]});mi(e,e.siblings)}function S1(){return xe}function E1(){return xe=ft>0?_e(ei,--ft):0,Br--,xe===10&&(Br=1,mo--),xe}function St(){return xe=ft<om?_e(ei,ft++):0,Br++,xe===10&&(Br=1,mo++),xe}function Wn(){return _e(ei,ft)}function Xs(){return ft}function vo(e,t){return Fr(ei,e,t)}function lu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T1(e){return mo=Br=1,om=Nt(ei=e),ft=0,[]}function C1(e){return ei="",e}function qo(e){return sm(vo(ft-1,uu(e===91?e+2:e===40?e+1:e)))}function _1(e){for(;(xe=Wn())&&xe<33;)St();return lu(e)>2||lu(xe)>3?"":" "}function k1(e,t){for(;--t&&St()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return vo(e,Xs()+(t<6&&Wn()==32&&St()==32))}function uu(e){for(;St();)switch(xe){case e:return ft;case 34:case 39:e!==34&&e!==39&&uu(xe);break;case 40:e===41&&uu(e);break;case 92:St();break}return ft}function b1(e,t){for(;St()&&e+xe!==47+10;)if(e+xe===42+42&&Wn()===47)break;return"/*"+vo(t,ft-1)+"*"+Sc(e===47?e:St())}function P1(e){for(;!lu(Wn());)St();return vo(e,ft)}function j1(e){return C1(Qs("",null,null,null,[""],e=T1(e),0,[0],e))}function Qs(e,t,n,r,i,s,a,o,l){for(var u=0,c=0,p=a,g=0,v=0,w=0,y=1,E=1,m=1,d=0,h="",x=i,S=s,C=r,k=h;E;)switch(w=d,d=St()){case 40:if(w!=108&&_e(k,p-1)==58){qs(k+=q(qo(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:k+=qo(d);break;case 9:case 10:case 13:case 32:k+=_1(w);break;case 92:k+=k1(Xs()-1,7);continue;case 47:switch(Wn()){case 42:case 47:mi(N1(b1(St(),Xs()),t,n,l),l);break;default:k+="/"}break;case 123*y:o[u++]=Nt(k)*m;case 125*y:case 59:case 0:switch(d){case 0:case 125:E=0;case 59+c:m==-1&&(k=q(k,/\f/g,"")),v>0&&Nt(k)-p&&mi(v>32?Kd(k+";",r,n,p-1,l):Kd(q(k," ","")+";",r,n,p-2,l),l);break;case 59:k+=";";default:if(mi(C=Qd(k,t,n,u,c,i,o,h,x=[],S=[],p,s),s),d===123)if(c===0)Qs(k,t,C,C,x,s,p,o,S);else switch(g===99&&_e(k,3)===110?100:g){case 100:case 108:case 109:case 115:Qs(e,C,C,r&&mi(Qd(e,C,C,0,0,i,o,h,i,x=[],p,S),S),i,S,p,o,r?x:S);break;default:Qs(k,C,C,C,[""],S,0,o,S)}}u=c=v=0,y=m=1,h=k="",p=a;break;case 58:p=1+Nt(k),v=w;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&E1()==125)continue}switch(k+=Sc(d),d*y){case 38:m=c>0?1:(k+="\f",-1);break;case 44:o[u++]=(Nt(k)-1)*m,m=1;break;case 64:Wn()===45&&(k+=qo(St())),g=Wn(),c=p=Nt(h=k+=P1(Xs())),d++;break;case 45:w===45&&Nt(k)==2&&(y=0)}}return s}function Qd(e,t,n,r,i,s,a,o,l,u,c,p){for(var g=i-1,v=i===0?s:[""],w=am(v),y=0,E=0,m=0;y<r;++y)for(var d=0,h=Fr(e,g+1,g=y1(E=a[y])),x=e;d<w;++d)(x=sm(E>0?v[d]+" "+h:q(h,/&\f/g,v[d])))&&(l[m++]=x);return go(e,t,n,i===0?ho:o,l,u,c,p)}function N1(e,t,n,r){return go(e,t,n,rm,Sc(S1()),Fr(e,2,-2),0,r)}function Kd(e,t,n,r,i){return go(e,t,n,wc,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function lm(e,t,n){switch(x1(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return _i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+_i+e+oe+e+e;case 5936:switch(_e(e,t+11)){case 114:return ne+e+oe+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+oe+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+oe+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+oe+e+e;case 6165:return ne+e+oe+"flex-"+e+e;case 5187:return ne+e+q(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return ne+e+oe+"flex-item-"+q(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":oe+"grid-row-"+q(e,/flex-|-self/g,""))+e;case 4675:return ne+e+oe+"flex-line-pack"+q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+oe+q(e,"shrink","negative")+e;case 5292:return ne+e+oe+q(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+q(e,"-grow","")+ne+e+oe+q(e,"grow","positive")+e;case 4554:return ne+q(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return oe+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return oe+q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Bt(r.props,/grid-\w+-end/)})?~qs(e+(n=n[t].value),"span")?e:oe+q(e,"-start","")+e+oe+"grid-row-span:"+(~qs(n,"span")?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":oe+q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:oe+q(q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+_i+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qs(e,"stretch")?lm(q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,a,o,l,u){return oe+i+":"+s+u+(a?oe+i+"-span:"+(o?l:+l-+s)+u:"")+e});case 4949:if(_e(e,t+6)===121)return q(e,":",":"+ne)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(_e(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+oe+"$2box$3")+e;case 100:return q(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(e,"scroll-","scroll-snap-")+e}return e}function La(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function O1(e,t,n,r){switch(e.type){case v1:if(e.children.length)break;case g1:case wc:return e.return=e.return||e.value;case rm:return"";case im:return e.return=e.value+"{"+La(e.children,r)+"}";case ho:if(!Nt(e.value=e.props.join(",")))return""}return Nt(n=La(e.children,r))?e.return=e.value+"{"+n+"}":""}function L1(e){var t=am(e);return function(n,r,i,s){for(var a="",o=0;o<t;o++)a+=e[o](n,r,i,s)||"";return a}}function I1(e){return function(t){t.root||(t=t.return)&&e(t)}}function z1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wc:e.return=lm(e.value,e.length,n);return;case im:return La([sn(e,{value:q(e.value,"@","@"+ne)})],r);case ho:if(e.length)return w1(n=e.props,function(i){switch(Bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ur(sn(e,{props:[q(i,/:(read-\w+)/,":"+_i+"$1")]})),ur(sn(e,{props:[i]})),ou(e,{props:Xd(n,r)});break;case"::placeholder":ur(sn(e,{props:[q(i,/:(plac\w+)/,":"+ne+"input-$1")]})),ur(sn(e,{props:[q(i,/:(plac\w+)/,":"+_i+"$1")]})),ur(sn(e,{props:[q(i,/:(plac\w+)/,oe+"input-$1")]})),ur(sn(e,{props:[i]})),ou(e,{props:Xd(n,r)});break}return""})}}var A1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xe={},Vr=typeof process<"u"&&Xe!==void 0&&(Xe.REACT_APP_SC_ATTR||Xe.SC_ATTR)||"data-styled",Ec=typeof window<"u"&&"HTMLElement"in window,M1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xe.REACT_APP_SC_DISABLE_SPEEDY!==""?Xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xe!==void 0&&Xe.SC_DISABLE_SPEEDY!==void 0&&Xe.SC_DISABLE_SPEEDY!==""&&Xe.SC_DISABLE_SPEEDY!=="false"&&Xe.SC_DISABLE_SPEEDY),yo=Object.freeze([]),Ur=Object.freeze({});function R1(e,t,n){return n===void 0&&(n=Ur),e.theme!==n.theme&&e.theme||t||n.theme}var um=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D1=/(^-|-$)/g;function Jd(e){return e.replace($1,"-").replace(D1,"")}var F1=/(a)(d)/gi,ef=function(e){return String.fromCharCode(e+(e>25?39:97))};function cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ef(t%52)+n;return(ef(t%52)+n).replace(F1,"$1-$2")}var Xo,Tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cm=function(e){return Tr(5381,e)};function B1(e){return cu(cm(e)>>>0)}function V1(e){return e.displayName||e.name||"Component"}function Qo(e){return typeof e=="string"&&!0}var dm=typeof Symbol=="function"&&Symbol.for,fm=dm?Symbol.for("react.memo"):60115,U1=dm?Symbol.for("react.forward_ref"):60112,H1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},W1=((Xo={})[U1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xo[fm]=pm,Xo);function tf(e){return("type"in(t=e)&&t.type.$$typeof)===fm?pm:"$$typeof"in e?W1[e.$$typeof]:H1;var t}var Z1=Object.defineProperty,Y1=Object.getOwnPropertyNames,nf=Object.getOwnPropertySymbols,q1=Object.getOwnPropertyDescriptor,X1=Object.getPrototypeOf,rf=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(rf){var r=X1(t);r&&r!==rf&&hm(e,r,n)}var i=Y1(t);nf&&(i=i.concat(nf(t)));for(var s=tf(e),a=tf(t),o=0;o<i.length;++o){var l=i[o];if(!(l in G1||n&&n[l]||a&&l in a||s&&l in s)){var u=q1(t,l);try{Z1(e,l,u)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function Tc(e){return typeof e=="object"&&"styledComponentId"in e}function Bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function du(e,t,n){if(n===void 0&&(n=!1),!n&&!Zi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=du(e[r],t[r]);else if(Zi(t))for(var r in t)e[r]=du(e[r],t[r]);return e}function Cc(e,t){Object.defineProperty(e,"toString",{value:t})}function ps(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Q1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw ps(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(o,n[a])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,a=i;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Ks=new Map,Ia=new Map,Js=1,Is=function(e){if(Ks.has(e))return Ks.get(e);for(;Ia.has(Js);)Js++;var t=Js++;return Ks.set(e,t),Ia.set(t,e),t},K1=function(e,t){Js=t+1,Ks.set(e,t),Ia.set(t,e)},J1="style[".concat(Vr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),ex=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tx=function(e,t,n){for(var r,i=n.split(","),s=0,a=i.length;s<a;s++)(r=i[s])&&e.registerName(t,r)},nx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,a=r.length;s<a;s++){var o=r[s].trim();if(o){var l=o.match(ex);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(K1(c,u),tx(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(o)}}};function rx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(o){var l=Array.from(o.querySelectorAll("style[".concat(Vr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Vr,"active"),r.setAttribute("data-styled-version","6.1.1");var a=rx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,s),r},ix=function(){function e(t){this.element=mm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var a=r[i];if(a.ownerNode===n)return a}throw ps(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),sx=function(){function e(t){this.element=mm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ax=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),af=Ec,ox={isServer:!Ec,useCSSOMInjection:!M1},gm=function(){function e(t,n,r){t===void 0&&(t=Ur),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},ox),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ec&&af&&(af=!1,function(s){for(var a=document.querySelectorAll(J1),o=0,l=a.length;o<l;o++){var u=a[o];u&&u.getAttribute(Vr)!=="active"&&(nx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Cc(this,function(){return function(s){for(var a=s.getTag(),o=a.length,l="",u=function(p){var g=function(m){return Ia.get(m)}(p);if(g===void 0)return"continue";var v=s.names.get(g),w=a.getGroup(p);if(v===void 0||w.length===0)return"continue";var y="".concat(Vr,".g").concat(p,'[id="').concat(g,'"]'),E="";v!==void 0&&v.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(w).concat(y,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<o;c++)u(c);return l}(i)})}return e.registerId=function(t){return Is(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ax(i):r?new ix(i):new sx(i)}(this.options),new Q1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Is(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Is(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Is(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lx=/&/g,ux=/^\s*\/\/.*$/gm;function vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vm(n.children,t)),n})}function cx(e){var t,n,r,i=e===void 0?Ur:e,s=i.options,a=s===void 0?Ur:s,o=i.plugins,l=o===void 0?yo:o,u=function(g,v,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},c=l.slice();c.push(function(g){g.type===ho&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(lx,n).replace(r,u))}),a.prefix&&c.push(z1),c.push(O1);var p=function(g,v,w,y){v===void 0&&(v=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(ux,""),m=j1(w||v?"".concat(w," ").concat(v," { ").concat(E," }"):E);a.namespace&&(m=vm(m,a.namespace));var d=[];return La(m,L1(c.concat(I1(function(h){return d.push(h)})))),d};return p.hash=l.length?l.reduce(function(g,v){return v.name||ps(15),Tr(g,v.name)},5381).toString():"",p}var dx=new gm,fu=cx(),ym=Y.createContext({shouldForwardProp:void 0,styleSheet:dx,stylis:fu});ym.Consumer;Y.createContext(void 0);function of(){return b.useContext(ym)}var fx=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=fu);var a=r.name+s.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,s(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cc(this,function(){throw ps(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fu),this.name+t.hash},e}(),px=function(e){return e>="A"&&e<="Z"};function lf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;px(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xm=function(e){return e==null||e===!1||e===""},wm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!xm(s)&&(Array.isArray(s)&&s.isCss||Hr(s)?r.push("".concat(lf(i),":"),s,";"):Zi(s)?r.push.apply(r,Oa(Oa(["".concat(i," {")],wm(s),!1),["}"],!1)):r.push("".concat(lf(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in A1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zn(e,t,n,r){if(xm(e))return[];if(Tc(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Zn(i,t,n,r)}var s;return e instanceof fx?n?(e.inject(n,r),[e.getName(r)]):[e]:Zi(e)?wm(e):Array.isArray(e)?Array.prototype.concat.apply(yo,e.map(function(a){return Zn(a,t,n,r)})):[e.toString()]}function hx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!Tc(n))return!1}return!0}var mx=cm("6.1.1"),gx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hx(t),this.componentId=n,this.baseHash=Tr(mx,n),this.baseStyle=r,gm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bn(i,this.staticRulesId);else{var s=sf(Zn(this.rules,t,n,r)),a=cu(Tr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var o=r(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,o)}i=Bn(i,a),this.staticRulesId=a}else{for(var l=Tr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var g=sf(Zn(p,t,n,r));l=Tr(l,g+c),u+=g}}if(u){var v=cu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Bn(i,v)}}return i},e}(),Sm=Y.createContext(void 0);Sm.Consumer;var Ko={};function vx(e,t,n){var r=Tc(e),i=e,s=!Qo(e),a=t.attrs,o=a===void 0?yo:a,l=t.componentId,u=l===void 0?function(x,S){var C=typeof x!="string"?"sc":Jd(x);Ko[C]=(Ko[C]||0)+1;var k="".concat(C,"-").concat(B1("6.1.1"+C+Ko[C]));return S?"".concat(S,"-").concat(k):k}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(x){return Qo(x)?"styled.".concat(x):"Styled(".concat(V1(x),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Jd(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;w=function(x,S){return y(x,S)&&E(x,S)}}else w=y}var m=new gx(n,g,r?i.componentStyle:void 0);function d(x,S){return function(C,k,j){var N=C.attrs,P=C.componentStyle,R=C.defaultProps,L=C.foldedComponentIds,O=C.styledComponentId,T=C.target,_=Y.useContext(Sm),$=of(),ee=C.shouldForwardProp||$.shouldForwardProp,z=function(it,Rt,st){for(var kt,An=Ge(Ge({},Rt),{className:void 0,theme:st}),wo=0;wo<it.length;wo+=1){var ms=Hr(kt=it[wo])?kt(An):kt;for(var nn in ms)An[nn]=nn==="className"?Bn(An[nn],ms[nn]):nn==="style"?Ge(Ge({},An[nn]),ms[nn]):ms[nn]}return Rt.className&&(An.className=Bn(An.className,Rt.className)),An}(N,k,R1(k,_,R)||Ur),A=z.as||T,V={};for(var Q in z)z[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?V.as=z.forwardedAs:ee&&!ee(Q,A)||(V[Q]=z[Q]));var se=function(it,Rt){var st=of(),kt=it.generateAndInjectStyles(Rt,st.styleSheet,st.stylis);return kt}(P,z),tn=Bn(L,O);return se&&(tn+=" "+se),z.className&&(tn+=" "+z.className),V[Qo(A)&&!um.has(A)?"class":"className"]=tn,V.ref=j,b.createElement(A,V)}(h,x,S)}d.displayName=p;var h=Y.forwardRef(d);return h.attrs=v,h.componentStyle=m,h.displayName=p,h.shouldForwardProp=w,h.foldedComponentIds=r?Bn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(S){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var j=0,N=C;j<N.length;j++)du(S,N[j],!0);return S}({},i.defaultProps,x):x}}),Cc(h,function(){return".".concat(h.styledComponentId)}),s&&hm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function uf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var cf=function(e){return Object.assign(e,{isCss:!0})};function yx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hr(e)||Zi(e)){var r=e;return cf(Zn(uf(yo,Oa([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Zn(i):cf(Zn(uf(i,t)))}function pu(e,t,n){if(n===void 0&&(n=Ur),!t)throw ps(1,t);var r=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,n,yx.apply(void 0,Oa([i],s,!1)))};return r.attrs=function(i){return pu(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pu(e,t,Ge(Ge({},n),i))},r}var Em=function(e){return pu(vx,e)},Te=Em;um.forEach(function(e){Te[e]=Em(e)});const xx=()=>f.jsx(wx,{children:f.jsx("div",{className:"wrapper",children:f.jsxs("article",{className:"nav-bar",children:[f.jsx("section",{className:"logo",children:f.jsx("img",{src:nm,alt:""})}),f.jsx("nav",{className:"menu-desk",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Yd,{to:"/home",children:f.jsx("span",{children:"Página Inicial"})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"A Escola"})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"Nossa História"})}),f.jsx("li",{children:f.jsx(Yd,{to:"/form/fan-member",children:f.jsx("span",{children:"Desfile Conosco"})})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"Créditos"})})]})}),f.jsx("button",{id:"menu-drop",children:f.jsx("i",{className:"fa-solid fa-bars"})}),f.jsx("nav",{className:"menu-mobile",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsxs("a",{href:"./components/pages/not-found.html",children:[f.jsx("i",{className:"fa-solid fa-house"}),f.jsx("span",{children:"Página Inicial"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"./components/pages/not-found.html",children:[f.jsx("i",{className:"fa-solid fa-school"}),f.jsx("span",{children:"A Escola"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"./components/pages/not-found.html",children:[f.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),f.jsx("span",{children:"Nossa História"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"./components/pages/not-found.html",children:[f.jsx("i",{className:"fa-solid fa-users"}),f.jsx("span",{children:"Sócio Torcedor"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"./components/pages/not-found.html",children:[f.jsx("i",{className:"fa-solid fa-circle-info"}),f.jsx("span",{children:"Créditos"})]})})]})})]})})}),wx=Te.header`
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(255, 255, 255, 0.95);
	z-index: 100;

	* {
		color: rgb(218, 218, 218);
	}

	.wrapper {
		.nav-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			grid-column: 2 / 12;

			section {
				height: 70px;

				&.logo {
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 60px;
						margin-right: 15px;
					}

					span {
						font-size: 2rem;
						color: var(--color-text-soft);
						font-weight: bold;
					}
				}
			}

			nav.menu-desk {
				display: flex;

				ul {
					display: flex;

					li {
						margin: 0 20px;

						span {
							color: var(--color-text-soft);
							font-weight: bold;
							position: relative;
							font-family: Playpen Sans;

							&::after {
								content: '';
								display: block;
								transform-origin: right;
								position: absolute;
								height: 3px;
								background: var(--color-primary-soft);
								inset: 0;
								top: 100%;
								width: 100%;
								transition:
									transform 300ms ease-in-out,
									transform-origin 0ms;
								transform: scaleX(0);
							}

							&:hover::after {
								transform: scaleX(1);
								transform-origin: left;
							}
						}
						.active {
							& span::after {
								transform: scaleX(1);
								transform-origin: left;
							}
						}
					}
				}
			}

			button {
				cursor: pointer;
				font-weight: bold;
				z-index: 10;
				transition: 300ms;
				display: none;

				i {
					color: var(--color-primary);
					font-size: 2rem;
				}
			}

			nav.menu-mobile {
				position: fixed;
				left: 100%;
				top: 0;
				background: #fff;
				width: 100%;
				min-width: 300px;
				max-width: 400px;
				height: 100%;
				opacity: 0;
				box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.614);

				&.active {
					opacity: 1;
					transform: translateX(-100%);
				}

				ul {
					margin: 80px 0 0 0;

					li {
						display: flex;
						align-items: center;
						margin-left: 0;
						opacity: 1;
						border-bottom: 1px solic var(--color-primary-soft);

						a {
							display: inline-block;
							width: 100%;
							height: 100%;
							padding: 15px 40px;
							transition: 200ms;
							font-size: 1.1rem;
							letter-spacing: 2px;
							cursor: pointer;

							&:hover {
								background: var(--color-primary-soft);

								* {
									color: #fff;
								}
							}

							&:last-child {
								border: none;
							}

							i {
								cursor: pointer;
								transition: 300ms ease-in-out;
								color: var(--color-primary);
							}

							span {
								margin-left: 10px;
								cursor: pointer;
								color: var(--color-primary);
							}
						}
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 950px) {
			.wrapper {
				.nav-bar {
					button {
						display: block;
					}

					nav {
						&.menu-desk {
							display: none;

							&.menu-mobile {
							}
						}
					}
				}
			}
		}
	}
`;var Tm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},df=Y.createContext&&Y.createContext(Tm),_n=function(){return _n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_n.apply(this,arguments)},Sx=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Cm(e){return e&&e.map(function(t,n){return Y.createElement(t.tag,_n({key:n},t.attr),Cm(t.child))})}function Be(e){return function(t){return Y.createElement(Ex,_n({attr:_n({},e.attr)},t),Cm(e.child))}}function Ex(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,a=Sx(e,["attr","size","title"]),o=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Y.createElement("svg",_n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:_n(_n({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&Y.createElement("title",null,s),e.children)};return df!==void 0?Y.createElement(df.Consumer,null,function(n){return t(n)}):t(Tm)}function Tx(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Cx(e){return Be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function _x(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"}}]})(e)}function kx(e){return Be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function bx(e){return Be({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"}}]})(e)}function Px(e){return Be({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"}}]})(e)}function jx(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"}}]})(e)}function Nx(e){return Be({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"}}]})(e)}function Ox(e){return Be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"}}]})(e)}function Lx(e){return Be({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z"}}]})(e)}function Ix(e){return Be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"}}]})(e)}const hu=({customStyled:e})=>f.jsxs(zx,{$footer:e,children:[f.jsx("li",{children:f.jsx("a",{target:"_blank",href:"https://www.instagram.com/academicosdesantacruzrj/",children:f.jsx(Cx,{})})}),f.jsx("li",{children:f.jsx("a",{target:"_blank",href:"https://www.facebook.com/acadsantacruz?mibextid=LQQJ4d",children:f.jsx(Tx,{})})}),f.jsx("li",{children:f.jsx("a",{target:"_blank",href:"https://www.youtube.com/@academicosdesantacruz",children:f.jsx(kx,{})})}),f.jsx("li",{children:f.jsx("a",{target:"_blank",href:"https://x.com/acadsantacruz?s=11",children:f.jsx(_x,{})})})]}),zx=Te.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;

		* {
			font-size: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		${e=>e.$footer?"":`&:nth-child(1) {
						* {
							color: #e4405f;
						}
					}
					&:nth-child(2) {
						* {
							color: #3b5998;
						}
					}
					&:nth-child(3) {
						* {
							color: #cd201f;
						}
					}
					&:nth-child(4) {
						* {
							color: #000000;
						}
					}`}

		&:hover {
		background: #ffffff;

			* {
				color: ${e=>e.$footer?"rgb(28, 59, 53)":"var(--color-primary-soft)"};
			}
		}
	}
`,Ax=()=>f.jsx(Mx,{children:f.jsxs("div",{className:"wrapper",children:[f.jsxs("section",{className:"structure",children:[f.jsxs("div",{className:"",children:[f.jsx("h3",{children:"Página Inicial"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"",children:"Capa"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Notícias"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Enredo"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Apoiadores"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Contato"})})]})]}),f.jsxs("div",{className:"",children:[f.jsx("h3",{children:"A Escola"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"",children:"Diretoria"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"O Parvilhão"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"A Torcida"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Desfile Conosco"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Sócio Torcedor"})})]})]}),f.jsxs("div",{className:"",children:[f.jsx("h3",{children:"Nossa Historia"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"",children:"A Fundação"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Colocações"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Presidentes"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Premiações"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Galeria"})})]})]}),f.jsxs("div",{className:"",children:[f.jsx("h3",{children:"Créditos"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"",children:"Fotografias"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Dados de Desfiles"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Dev Team"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Termos de Uso"})}),f.jsx("li",{children:f.jsx("a",{href:"",children:"Política de Privacidade"})})]})]})]}),f.jsxs("section",{className:"newsletter",children:[f.jsxs("p",{children:["Desenvolvido e realizado por ",f.jsx("a",{href:"#",children:"@WebPulse"})]}),f.jsx("h3",{children:"Inscreva-se para receber nossas novidades!"}),f.jsxs("form",{action:"",children:[f.jsx("input",{type:"text",name:"",id:"",placeholder:"Digite seu e-mail"}),f.jsxs("button",{type:"submit",children:[f.jsx("span",{children:"Inscrever-se"}),f.jsx("i",{className:"fa-solid fa-envelope"})]})]}),f.jsx("div",{className:"social-media",children:f.jsx(hu,{customStyled:!0})})]}),f.jsx("section",{className:"copyriht",children:f.jsx("p",{children:"© Copyright 2023 - Todos os direitos reservados."})}),f.jsxs("section",{className:"terms",children:[f.jsx("a",{href:"",children:"Termos de Uso"}),f.jsx("a",{href:"",children:"Politica de Privacidade"}),f.jsx("a",{href:"",children:"Não Venda Minhas Informações"})]})]})}),Mx=Te.footer`
	background: rgb(28, 59, 53);
	padding: 60px 0px 70px;
	width: 100%;

	* {
		color: #fff;
		font-family: Playpen Sans;
		font-size: 1rem;
		font-weight: normal;
	}

	.wrapper {
		gap: 15px;

		section {
			&.structure {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-column: 2/8;
				grid-row: 1/2;
				gap: 15px;

				div {
					grid-column: 1fr;

					h3 {
						font-weight: 600;
						margin-bottom: 20px;
						text-transform: uppercase;
						font-weight: normal;
					}

					ul {
						margin-bottom: 20px;

						li {
							a {
								color: var(--color-gray);
								transition: 0;
								font-size: 0.8rem;

								&:hover {
									color: white;
									text-decoration: underline;
								}
							}
						}
					}
				}
			}

			&.newsletter {
				grid-column: 8/12;
				grid-row: 1/2;
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				p {
					font-size: 0.9rem;
					margin-bottom: 10px;
					color: var(--color-gray);

					a {
						color: var(--color-gray);
						transition: 0;
						font-size: 0.8rem;

						&:hover {
							color: white;
							text-decoration: underline;
						}
					}
				}

				h3 {
					margin-bottom: 20px;
					font-size: 1.1rem;
				}

				form {
					display: flex;
					justify-content: space-between;
					width: 100%;
					margin-bottom: 30px;

					input {
						color: #1c3b35;
						background: #fff;
						height: 40px;
						width: 65%;
						padding: 0 15px;
						border-radius: 100px;
						margin-right: 10px;
					}

					button {
						background: #e9bb3b;
						width: 30%;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 100px;
						min-width: 130px;

						span {
							color: #1c3b35;
						}

						i {
							color: #1c3b35;
							display: none;
						}
					}
				}

				.social-links {
					display: flex;
					margin-bottom: 20px;
					align-items: center;

					a {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						// background: var(--color-primary);
						transition: 300ms ease-in-out;
						margin: 0 10px;

						i {
							font-size: 2rem;
						}

						&:hover {
							// background: var(--color-primary-soft);
						}
					}
				}

				.logo {
					display: flex;
					justify-content: center;
					align-items: center;

					.img {
						width: 100px;
						height: 100px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #fff;
						border-radius: 50%;

						img {
							width: 100%;
							height: 100%;
							object-fit: scale-down;
						}
					}

					address {
						margin-left: 25px;
						font-size: 0.8rem;
						color: var(--color-gray);
						width: 250px;
						border-left: 3px solid #fff;
						padding-left: 15px;
					}
				}
			}

			&.copyriht {
				grid-column: 2/6;
				grid-row: 2/3;
				display: flex;
				align-items: center;
			}

			&.terms {
				grid-column: 6/12;
				grid-row: 2/3;
				display: flex;
				flex-wrap: wrap;
				justify-content: end;
				align-items: center;

				a {
					color: var(--color-gray);
					transition: 0ms;
					display: block;
					margin: 10px 12px;
					font-size: 0.9rem;

					&:hover {
						color: white;
						text-decoration: underline;
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 1230px) {
			.wrapper {
				section {
					&.structure {
					}

					&.newsletter {
					}

					&.copyriht {
						grid-column: 2/12;
						justify-content: center;
						grid-row: 3/4;

						p {
							text-align: center;
						}
					}

					&.terms {
						grid-column: 2/12;

						justify-content: center;

						a {
							text-align: center;
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			.wrapper {
				section {
					&.structure {
						grid-column: 2/12;
						grid-row: 2/3;

						* {
							text-align: center;
						}
					}

					&.newsletter {
						grid-row: 1/2;
						grid-column: 2/12;
					}

					&.copyriht {
						grid-row: 4/5;
					}

					&.terms {
						grid-row: 3/4;
					}
				}
			}
		}

		@media (max-width: 800px) {
			.wrapper {
				section {
					&.structure {
						grid-template-columns: repeat(2, 1fr);
					}
				}
			}
		}

		@media (max-width: 600px) {
			.wrapper {
				section {
					&.newsletter {
						form {
							input {
								width: 80%;
							}

							button {
								width: auto;
								min-width: 0;
								padding: 0 1rem;

								span {
									display: none;
								}

								i {
									display: block;
								}
							}
						}
					}
				}
			}
		}
	}
`,Rx=({children:e,title:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Hh,{title:t}),f.jsx(xx,{}),e,f.jsx(Ax,{})]}),_c=({children:e,title:t})=>f.jsxs(f.Fragment,{children:[f.jsx(Hh,{title:t}),e]}),$x=()=>f.jsx(Dx,{children:f.jsxs("div",{className:"wrapper",children:[f.jsx("div",{className:"left",children:f.jsxs("div",{className:"container",children:[f.jsx("h2",{children:"Grêmio Recreativo Escola de Samba"}),f.jsx("h1",{children:"Acadêmicos de Santa Cruz"}),f.jsx("p",{children:"Bem-vindos! Aqui o samba é vida, a cultura é paixão e a alegria é eterna. No coração de Santa Cruz, encontre a felicidade em cada batida de tambor. Feliz da vida é quem tem a Santa Cruz no coração."}),f.jsx(tm,{to:"/not-found",children:f.jsx("span",{children:"Ir para Loja"})}),f.jsx("div",{className:"social-media",children:f.jsx(hu,{})})]})}),f.jsxs("div",{className:"right",children:[f.jsx("div",{className:"img",children:f.jsx("img",{src:nm,alt:"Logo"})}),f.jsx("div",{className:"social-media",children:f.jsx(hu,{})})]})]})}),Dx=Te.section`
	height: 98dvh;
	min-height: 700px;
	max-height: 1200px;

	.wrapper > div {
		&.left {
			grid-column: 2/7;
			align-items: center;
			display: flex;
			justify-content: center;

			.container {
				h2 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 2.5rem;
				}

				h1 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 4rem;
					margin-bottom: 20px;
				}

				p {
					color: var(--color-text-soft);
					font-size: 1.1rem;
					margin-bottom: 50px;
				}

				span {
					background: var(--color-primary-soft);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 10px 50px;
					margin-bottom: 25px;

					&:hover {
						background: var(--color-primary);
						border-radius: 0px 10px;
					}
				}

				.social-media {
					display: none;
				}
			}
		}

		&.right {
			grid-column: 8/12;

			.img {
				align-items: center;
				display: flex;
				justify-content: center;
				margin-bottom: 0px;

				img {
					width: 450px;
				}
			}
			.social-media {
			}
		}
	}

	@media screen {
		@media (max-width: 1350px) {
			.wrapper > div {
				&.left {
					.container {
						h2 {
							font-size: 2rem;
						}

						h1 {
							font-size: 3.5rem;
						}

						p {
							font-size: 1rem;
						}
					}
				}
			}
		}

		@media (max-width: 1200px) {
			.wrapper > div {
				&.left {
					grid-column: 2/8;

					.container {
						p {
							width: 90%;
						}
					}
				}

				&.right {
					grid-column: 9/12;

					.img {
						width: 100%;

						img {
							width: 150%;
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			.wrapper {
				> div {
					&.left {
						grid-column: 2/8;

						.container {
							h2 {
								font-size: 2rem;
							}

							h1 {
								font-size: 3rem;
							}
						}
					}

					&.right {
						grid-column: 9/12;

						.img {
							width: 100%;

							img {
								width: 150%;
							}
						}
					}
				}
			}
		}

		@media (max-width: 880px) {
			.wrapper {
				> div {
					&.left {
						grid-column: 2/12;

						.container {
							h2 {
								font-size: 2rem;
							}

							h1 {
								font-size: 2.8rem;
							}

							p {
								width: 100%;
							}

							span {
								padding: 15px 50px;
								font-size: 1.1rem;
							}

							.social-media {
								display: flex;
							}
						}
					}

					&.right {
						display: none;
					}
				}
			}
		}

		@media (max-width: 370px) {
			main {
				.nav-info .wrapper {
					section {
						&.contact {
							div:nth-child(2) {
								display: none;
							}
						}
					}
				}
			}
		}
	}
`,Fx=()=>f.jsxs(Bx,{children:[f.jsx("ul",{className:"slides"}),f.jsx("button",{className:"prev",children:f.jsx("i",{className:"fa-solid fa-chevron-left"})}),f.jsx("button",{className:"next",children:f.jsx("i",{className:"fa-solid fa-chevron-right"})}),f.jsx("ul",{className:"pagination"})]}),Bx=Te.section`
	position: relative;
	height: 100vh;
	min-height: 200px;
	width: 100%;
	overflow: hidden;
	margin-bottom: 100px;

	.slides {
		width: 100%;
		height: 100%;
		position: relative;

		li {
			width: 100%;
			height: 100%;
			top: 0;
			left: 100%;
			position: absolute;

			.img {
				width: 100%;
				height: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.text {
				position: absolute;
				top: 0;
				left: 0;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: hsla(0, 0%, 0%, 0.2);
				height: 100%;
				width: 100%;

				* {
					color: var(--color-white);
				}

				h2 {
					font-size: 3rem;
					margin-bottom: 20px;
				}

				p {
					font-size: 1.5rem;
					margin-bottom: 30px;
					width: 50%;
				}

				a {
					background: var(--color-primary);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 15px 50px;
					border: 3px solid var(--color-white);
					font-size: 1.5rem;
					text-transform: uppercase;

					&:hover {
						background: var(--color-primary-soft);
						border-radius: 0px 10px;
					}
				}
			}

			&.toRightOld {
				animation: toRightOld 500ms ease-in-out;
			}

			&.toRightNew {
				animation: toRightNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.toLeftOld {
				animation: toLeftOld 500ms ease-in-out;
			}

			&.toLeftNew {
				animation: toLeftNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.active {
				left: 0;
			}
		}
	}

	> button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 15px 15px;
		border-radius: 10px;

		&.prev {
			left: 30px;
		}

		&.next {
			right: 30px;
		}

		i {
			font-size: 3.5rem;
			color: var(--color-primary-soft);
		}
	}

	.pagination {
		position: absolute;
		bottom: 30px;
		display: flex;
		left: 50%;
		transform: translateX(-50%);

		.dot {
			width: 50px;
			height: 5px;
			margin: 0 5px;
			background: var(--color-white);
			border-radius: 10px;
			cursor: pointer;
			transition: 300ms ease-in-out;

			&.active {
				background: var(--color-primary);
				top: 0;
				left: 0;
				cursor: default;
			}
		}
	}
`,Vx=()=>f.jsxs(Ux,{children:[f.jsx("h1",{children:"Sobre a Escola"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("h2",{children:"64"}),f.jsx("h3",{children:"Anos"})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"150K"}),f.jsx("h3",{children:"Sócios"})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"15"}),f.jsx("h3",{children:"Troféus"})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"10+"}),f.jsx("h3",{children:"Patrocínios"})]})]})]}),Ux=Te.section`
	margin-bottom: 50px;

	h1 {
		color: var(--color-primary);
		text-align: center;
		font-size: 2.3rem;
		margin-bottom: 20px;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-items: center;
		gap: 50px 100px;
		max-width: 2000px;

		li {
			grid-column: 1fr;

			h2 {
				font-size: 5rem;
				color: var(--color-text);
				text-align: center;
				font-family: Playpen Sans;
			}

			h3 {
				color: var(--color-text-soft);
				text-align: center;
				font-family: Playpen Sans;
			}
		}
	}
`;function ff(e){return Be({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}}]})(e)}function pf(e){return Be({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}}]})(e)}function Hx(e){return Be({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"}}]})(e)}const Gx="/assets/plot-2024-nDiE6ejs.jpeg",Wx=()=>{const[e]=b.useState(new Audio("src/assets/audio/plot-song.mpeg")),[t,n]=b.useState(!1),[r,i]=b.useState(0),[s,a]=b.useState(1),[o,l]=b.useState(s),[u,c]=b.useState(Array.from({length:150}).map((E,m)=>f.jsx("div",{className:"bar",style:{animation:`ocilation 1s infinite alternate ${m*(Math.random()*.05)}s`,animationPlayState:"paused"}},m))),p=()=>{t?e==null||e.pause():e==null||e.play(),n(E=>!E)},g=()=>{c(E=>E.map(m=>{const d=t?"running":"paused";return Y.cloneElement(m,{style:{...m.props.style,animationPlayState:d}})}))},v=()=>{i(e.currentTime/e.duration*100)},w=E=>{e.volume=E,a(E)},y=()=>{l(s),w(s===0?o:0)};return b.useEffect(()=>(e.loop=!0,e.addEventListener("timeupdate",v),()=>{e.removeEventListener("timeupdate",v)}),[]),b.useEffect(()=>{g()},[t]),f.jsxs(Zx,{children:[f.jsxs("div",{className:"disc-cover",children:[f.jsx("img",{src:Gx,alt:"Logo Enredo-2024"}),f.jsxs("div",{className:"icons",children:[f.jsx("button",{onClick:p,children:t?f.jsx(ff,{}):f.jsx(pf,{})}),f.jsx("div",{className:"player-bars",children:u})]})]}),f.jsxs("div",{className:"audio",children:[f.jsxs("div",{className:"progress",children:[f.jsx("div",{className:"button",children:f.jsx("button",{onClick:p,children:t?f.jsx(ff,{}):f.jsx(pf,{})})}),f.jsx("div",{className:"range",children:f.jsx("input",{type:"range",className:"audio-progress",min:"0",max:"100",step:"0.01",value:r,onChange:E=>{const m=parseFloat(E.target.value);e.currentTime=m/100*e.duration,v()}})})]}),f.jsxs("div",{className:"volume",children:[f.jsx("div",{className:"button",children:f.jsx("button",{onClick:y,children:s===0?f.jsx(Ix,{}):s<.25?f.jsx(Lx,{}):s<1?f.jsx(Ox,{}):f.jsx(Nx,{})})}),f.jsx("div",{className:"range",children:f.jsx("input",{type:"range",className:"audio-volume",min:"0",max:"1",step:"0.01",value:s,onChange:E=>{const m=parseFloat(E.target.value);w(m)}})})]})]})]})},Zx=Te.section`
	grid-column: 7/12;

	.disc-cover {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		box-shadow:
			-10px -10px 10px 0 #fff,
			10px 10px 10px 0 rgba(0, 0, 0, 0.6);
		height: auto;
		overflow: hidden;
		margin: 0 auto 50px;
		border-radius: 6px;

		img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			object-fit: cover;
		}

		.icons {
			align-items: center;
			background: rgba(0, 0, 0, 0.6);
			border-radius: 6px;
			display: flex;
			height: 100%;
			justify-content: center;
			left: 0;
			opacity: 0.7;
			position: absolute;
			top: 0;
			transition: 300ms;
			width: 100%;

			button {
				align-items: center;
				border-radius: 50%;
				border: 3px solid transparent;
				cursor: pointer;
				display: flex;
				height: 80px;
				justify-content: center;
				transition: 300ms;
				width: 80px;
				background: #000;

				* {
					color: #ffffff;
				}

				font-size: 4rem;
				margin-right: 8px;

				&:hover {
					border: 3px solid white;
				}
			}

			.player-bars {
				display: flex;
				position: absolute;
				bottom: 0px;

				.bar {
					margin: 0 2px;
					background: #000;
					border-radius: 10px 10px 0px 0px;
					width: 1px;
					height: 50px;
					border: 2px solid #fff;
					border-bottom: none;
					transform: translateY(45px);
				}

				@keyframes ocilation {
					from {
						transform: translateY(45px);
					}

					to {
						transform: translateY(0px);
					}
				}
			}
		}

		&:hover .icons {
			opacity: 1;
		}
	}
	* {
		/* outline: 1px dotted; */
	}
	.audio {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		padding: 0px 20px;
		height: 50px;
		gap: 25px;
		background: #ffffff;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 60px;
		justify-content: center;
		align-items: center;

		> div {
			display: flex;
			width: 100%;
			gap: 10px;

			.button {
				display: flex;
				justify-content: center;
				align-items: center;
				button {
					display: flex;
					justify-content: center;
					align-items: center;
					* {
						color: #000000;
						font-size: 1.5rem;
					}
				}
			}

			.range {
				width: 100%;
				input[type='range'] {
					-webkit-appearance: none;
					height: 3px;
					background: var(--color-primary);

					width: 100%;
					border-radius: 50px;
				}

				input[type='range']::-webkit-slider-thumb {
					-webkit-appearance: none;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: var(--color-primary);
					cursor: pointer;
				}

				input[type='range']::-webkit-slider-runnable-track {
					/* -webkit-appearance: none; */
					/* width: 100%; */
					/* height: 10px; */
					/* cursor: pointer; */
					/* background: #912c2c;  */
					/* border-radius: 5px; */
					/* position: relative; */
				}
			}
			&.progress {
				grid-column: 1/9;
			}
			&.volume {
				grid-column: 9/13;
			}
		}
	}
`,Yx=()=>f.jsx(qx,{children:f.jsxs("div",{className:"wrapper",children:[f.jsxs("div",{className:"description",children:[f.jsx("h2",{children:"Enredo 2024"}),f.jsx("h1",{children:"As bruxas estão soltas!"}),f.jsx("p",{children:'O enredo "As Bruxas Estão Soltas!" celebra o poder feminino, explorando a manifestação das energias ancestrais através da Deusa Terra e dos quatro elementos da criação.'}),f.jsx("p",{children:"A narrativa aborda a conexão entre passado e presente, destacando as mulheres que, ao longo da história, detinham conhecimentos medicinais e espirituais, mas foram perseguidas sob a acusação de bruxaria."}),f.jsx("p",{children:"O enredo também aborda a resistência dessas mulheres e sua contínua luta contra o machismo e a intolerância, honrando a força do sagrado feminino e a capacidade de voar além dos limites impostos, como estrelas brilhantes no céu."}),f.jsx("span",{children:"Iae, gostou? Para ter acesso a nossa sinopse completa basta baixar o PDF a baixo:"}),f.jsx("button",{className:"custom-button",children:"Baixar Sinopse"})]}),f.jsx(Wx,{})]})}),qx=Te.section`
	height: auto;

	.wrapper {
		.description {
			grid-column: 2/6;

			h2 {
				font-size: 2rem;
				color: var(--color-primary);
				font-family: Playpen Sans;
			}

			h1 {
				margin-bottom: 20px;
				font-size: 2.5rem;
				color: var(--color-text);
			}

			p {
				color: var(--color-text-soft);
				text-align: justify;
				margin-bottom: 10px;
			}

			span {
				margin-top: 30px;
				margin-bottom: 30px;
				display: block;
				color: var(--color-text);
			}

			button {
				display: block;
			}
		}
	}
	@media screen {
		@media (max-width: 1100px) {
			.wrapper {
				margin-bottom: 50px;

				.description {
					grid-column: 2/12;
					margin-bottom: 70px;
				}

				.disc-cover,
				.audio {
					grid-column: 2/12;
				}
			}
		}
	}
`,Xx=()=>(console.log("HomeAboutSchool"),f.jsx(Qx,{children:f.jsxs("div",{className:"wrapper",children:[f.jsx("div",{className:"text-container",children:f.jsxs("div",{className:"wiki",children:[f.jsx("p",{children:"Grêmio Recreativo Escola de Samba Acadêmicos de Santa Cruz (ou simplesmente Santa Cruz) é uma escola de samba brasileira da cidade do Rio de Janeiro, com sede no bairro de Santa Cruz, na zona oeste da cidade. Dentre as escolas de samba do carnaval carioca que já desfilaram na Marquês de Sapucaí, é a que se situa mais distante do sambódromo, localizada na Rua do Império em Santa Cruz. Atualmente é filiada a LIGA RJ, entidade criada juntamente com outras oito escolas em 2019, e participa da Série Ouro, grupo de acesso à elite do carnaval carioca."}),f.jsx("p",{children:"Desde a sua estreia no carnaval carioca sempre foi tida como a escola de samba representante da zona rural do Rio, fato este que, por vezes implicava em preconceito por parte da mídia e de sambistas de outras escolas. Já no seu quarto ano de desfiles no Rio de Janeiro figurava entre as grandes do carnaval carioca. Fato este que se repetiria por mais oito vezes. A Acadêmicos de Santa Cruz porém, nunca permaneceu neste grupo."}),f.jsx("p",{children:"A Santa Cruz sempre esteve atrelada às manifestações culturais do seu bairro e ligada aos projetos sociais. Estes já beneficiaram crianças e jovens, adultos e idosos ao longo dos anos. Acordos com a iniciativa privada, principalmente empresários e comerciantes locais, sempre foram fundamentais para a realização dos seus desfiles e a manutenção destes projetos."}),f.jsx("div",{className:"read-more",children:f.jsxs("a",{target:"_blank",href:"https://pt.wikipedia.org/wiki/Acad%C3%AAmicos_de_Santa_Cruz",children:[f.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),f.jsx("span",{children:"Continuar Lendo"})]})})]})}),f.jsx("div",{className:"img-container",children:f.jsx("div",{className:"img",children:f.jsx("img",{src:"src/assets/images/pavillion.jpeg",alt:"Pavilhão"})})})]})})),Qx=Te.section`
	padding: 50px 0 100px;

	.wrapper {
		.text-container {
			grid-column: 2/7;

			.wiki {
				position: relative;

				p {
					color: var(--color-text-soft);
					line-height: 1.5rem;
					text-indent: 1rem;
					text-align: justify;
					margin-bottom: 20px;
				}

				.read-more {
					display: flex;
					align-items: end;
					justify-content: center;
					width: 100%;
					position: absolute;
					bottom: -50px;
					background: linear-gradient(0deg, #ffffff 15%, #ffffff00 100%);
					height: 300px;

					a {
						background: var(--color-primary-soft);
						padding: 15px 30px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 10px 0;

						i {
							color: var(--color-white);
							font-size: 1.2rem;
							padding: 0;
							margin-right: 10px;
						}

						span {
							color: var(--color-white);
						}

						&:hover {
							border-radius: 0px 10px;
						}
					}
				}
			}
		}

		.img-container {
			grid-column: 8/12;
			display: flex;
			justify-content: center;
			align-items: center;

			.img {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				max-width: 450px;
				width: 100%;
				height: auto;

				img {
					width: 100%;
					object-fit: scale-down;
					border-radius: 0px 10px;
					border: 3px solid var(--color-gray);
					box-shadow: 0 0 15px 0 #0000006e;

					&:hover {
						border-radius: 10px 0;
					}
				}

				&::before,
				&::after {
					content: '';
					width: 100px;
					height: 100px;
					position: absolute;
					border: 10px solid var(--color-primary);
				}

				&::before {
					top: -30px;
					right: -30px;
					border-left: none;
					border-bottom: none;
				}

				&::after {
					bottom: -30px;
					left: -30px;
					border-right: none;
					border-top: none;
				}
			}
		}
	}
`,Kx=[{image:"Drogamix.png",alt:""},{image:"Lfbets.png",alt:""},{image:"Haras.png",alt:""},{image:"La-Dame-Femme.png",alt:""}],Jx=[{image:"image-1.jpg",alt:""},{image:"image-2.jpg",alt:""},{image:"image-5.jpg",alt:""},{image:"image-4.jpg",alt:""},{image:"image-3.jpg",alt:""}],ew=[{cargo:"Presidente",nome:"Ricardo",imagem:"diretoria-1.jpg"}],tw={sponsors:Kx,banner:Jx,diretoria:ew};function hf(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function kc(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:hf(t[n])&&hf(e[n])&&Object.keys(t[n]).length>0&&kc(e[n],t[n])})}const _m={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zn(){const e=typeof document<"u"?document:{};return kc(e,_m),e}const nw={document:_m,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function qe(){const e=typeof window<"u"?window:{};return kc(e,nw),e}function an(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function rw(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function za(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Aa(){return Date.now()}function iw(e){const t=qe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function sw(e,t){t===void 0&&(t="x");const n=qe();let r,i,s;const a=iw(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function zs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function aw(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!aw(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const o=i[s],l=Object.getOwnPropertyDescriptor(r,o);l!==void 0&&l.enumerable&&(zs(e[o])&&zs(r[o])?r[o].__swiper__?e[o]=r[o]:Ke(e[o],r[o]):!zs(e[o])&&zs(r[o])?(e[o]={},r[o].__swiper__?e[o]=r[o]:Ke(e[o],r[o])):e[o]=r[o])}}}return e}function As(e,t,n){e.style.setProperty(t,n)}function km(e){let{swiper:t,targetPosition:n,side:r}=e;const i=qe(),s=-t.translate;let a=null,o;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>s?"next":"prev",c=(g,v)=>u==="next"&&g>=v||u==="prev"&&g<=v,p=()=>{o=new Date().getTime(),a===null&&(a=o);const g=Math.max(Math.min((o-a)/l,1),0),v=.5-Math.cos(g*Math.PI)/2;let w=s+v*(n-s);if(c(w,n)&&(w=n),t.wrapperEl.scrollTo({[r]:w}),c(w,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:w})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Lt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Ma(e){try{console.warn(e);return}catch{}}function Gr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:an(t)),n}function ow(e){const t=qe(),n=zn(),r=e.getBoundingClientRect(),i=n.body,s=e.clientTop||i.clientTop||0,a=e.clientLeft||i.clientLeft||0,o=e===t?t.scrollY:e.scrollTop,l=e===t?t.scrollX:e.scrollLeft;return{top:r.top+o-s,left:r.left+l-a}}function lw(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function uw(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function mn(e,t){return qe().getComputedStyle(e,null).getPropertyValue(t)}function Yi(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function bm(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function mu(e,t,n){const r=qe();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function bc(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=Lt(e.el,`.${r[i]}`)[0];s||(s=Gr("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function cw(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const s=y=>(Array.isArray(y)?y:[y]).filter(E=>!!E);function a(y){let E;return y&&typeof y=="string"&&t.isElement&&(E=t.el.querySelector(y),E)?E:(y&&(typeof y=="string"&&(E=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&E.length>1&&t.el.querySelectorAll(y).length===1&&(E=t.el.querySelector(y))),y&&!E?y:E)}function o(y,E){const m=t.params.navigation;y=s(y),y.forEach(d=>{d&&(d.classList[E?"add":"remove"](...m.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=E),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](m.lockClass))})}function l(){const{nextEl:y,prevEl:E}=t.navigation;if(t.params.loop){o(E,!1),o(y,!1);return}o(E,t.isBeginning&&!t.params.rewind),o(y,t.isEnd&&!t.params.rewind)}function u(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const y=t.params.navigation;if(t.params.navigation=bc(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let E=a(y.nextEl),m=a(y.prevEl);Object.assign(t.navigation,{nextEl:E,prevEl:m}),E=s(E),m=s(m);const d=(h,x)=>{h&&h.addEventListener("click",x==="next"?c:u),!t.enabled&&h&&h.classList.add(...y.lockClass.split(" "))};E.forEach(h=>d(h,"next")),m.forEach(h=>d(h,"prev"))}function g(){let{nextEl:y,prevEl:E}=t.navigation;y=s(y),E=s(E);const m=(d,h)=>{d.removeEventListener("click",h==="next"?c:u),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(d=>m(d,"next")),E.forEach(d=>m(d,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?w():(p(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{g()}),r("enable disable",()=>{let{nextEl:y,prevEl:E}=t.navigation;if(y=s(y),E=s(E),t.enabled){l();return}[...y,...E].filter(m=>!!m).forEach(m=>m.classList.add(t.params.navigation.lockClass))}),r("click",(y,E)=>{let{nextEl:m,prevEl:d}=t.navigation;m=s(m),d=s(d);const h=E.target;if(t.params.navigation.hideOnClick&&!d.includes(h)&&!m.includes(h)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let x;m.length?x=m[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(x=d[0].classList.contains(t.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...m,...d].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const v=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),l()},w=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(t.navigation,{enable:v,disable:w,update:l,init:p,destroy:g})}function Ut(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function dw(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let a,o=0;const l=d=>(Array.isArray(d)?d:[d]).filter(h=>!!h);function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(d,h){const{bulletActiveClass:x}=t.params.pagination;d&&(d=d[`${h==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${x}-${h}`),d=d[`${h==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${x}-${h}-${h}`)))}function p(d){const h=d.target.closest(Ut(t.params.pagination.bulletClass));if(!h)return;d.preventDefault();const x=Yi(h)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===x)return;t.slideToLoop(x)}else t.slideTo(x)}function g(){const d=t.rtl,h=t.params.pagination;if(u())return;let x=t.pagination.el;x=l(x);let S,C;const k=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,j=t.params.loop?Math.ceil(k/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),h.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const N=t.pagination.bullets;let P,R,L;if(h.dynamicBullets&&(a=mu(N[0],t.isHorizontal()?"width":"height",!0),x.forEach(O=>{O.style[t.isHorizontal()?"width":"height"]=`${a*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&C!==void 0&&(o+=S-(C||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),P=Math.max(S-o,0),R=P+(Math.min(N.length,h.dynamicMainBullets)-1),L=(R+P)/2),N.forEach(O=>{const T=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(_=>`${h.bulletActiveClass}${_}`)].map(_=>typeof _=="string"&&_.includes(" ")?_.split(" "):_).flat();O.classList.remove(...T)}),x.length>1)N.forEach(O=>{const T=Yi(O);T===S?O.classList.add(...h.bulletActiveClass.split(" ")):t.isElement&&O.setAttribute("part","bullet"),h.dynamicBullets&&(T>=P&&T<=R&&O.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),T===P&&c(O,"prev"),T===R&&c(O,"next"))});else{const O=N[S];if(O&&O.classList.add(...h.bulletActiveClass.split(" ")),t.isElement&&N.forEach((T,_)=>{T.setAttribute("part",_===S?"bullet-active":"bullet")}),h.dynamicBullets){const T=N[P],_=N[R];for(let $=P;$<=R;$+=1)N[$]&&N[$].classList.add(...`${h.bulletActiveClass}-main`.split(" "));c(T,"prev"),c(_,"next")}}if(h.dynamicBullets){const O=Math.min(N.length,h.dynamicMainBullets+4),T=(a*O-a)/2-L*a,_=d?"right":"left";N.forEach($=>{$.style[t.isHorizontal()?_:"top"]=`${T}px`})}}x.forEach((N,P)=>{if(h.type==="fraction"&&(N.querySelectorAll(Ut(h.currentClass)).forEach(R=>{R.textContent=h.formatFractionCurrent(S+1)}),N.querySelectorAll(Ut(h.totalClass)).forEach(R=>{R.textContent=h.formatFractionTotal(j)})),h.type==="progressbar"){let R;h.progressbarOpposite?R=t.isHorizontal()?"vertical":"horizontal":R=t.isHorizontal()?"horizontal":"vertical";const L=(S+1)/j;let O=1,T=1;R==="horizontal"?O=L:T=L,N.querySelectorAll(Ut(h.progressbarFillClass)).forEach(_=>{_.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${T})`,_.style.transitionDuration=`${t.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(N.innerHTML=h.renderCustom(t,S+1,j),P===0&&i("paginationRender",N)):(P===0&&i("paginationRender",N),i("paginationUpdate",N)),t.params.watchOverflow&&t.enabled&&N.classList[t.isLocked?"add":"remove"](h.lockClass)})}function v(){const d=t.params.pagination;if(u())return;const h=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let x=t.pagination.el;x=l(x);let S="";if(d.type==="bullets"){let C=t.params.loop?Math.ceil(h/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>h&&(C=h);for(let k=0;k<C;k+=1)d.renderBullet?S+=d.renderBullet.call(t,k,d.bulletClass):S+=`<${d.bulletElement} ${t.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?S=d.renderFraction.call(t,d.currentClass,d.totalClass):S=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?S=d.renderProgressbar.call(t,d.progressbarFillClass):S=`<span class="${d.progressbarFillClass}"></span>`),t.pagination.bullets=[],x.forEach(C=>{d.type!=="custom"&&(C.innerHTML=S||""),d.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(Ut(d.bulletClass)))}),d.type!=="custom"&&i("paginationRender",x[0])}function w(){t.params.pagination=bc(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const d=t.params.pagination;if(!d.el)return;let h;typeof d.el=="string"&&t.isElement&&(h=t.el.querySelector(d.el)),!h&&typeof d.el=="string"&&(h=[...document.querySelectorAll(d.el)]),h||(h=d.el),!(!h||h.length===0)&&(t.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...t.el.querySelectorAll(d.el)],h.length>1&&(h=h.filter(x=>bm(x,".swiper")[0]===t.el)[0])),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(t.pagination,{el:h}),h=l(h),h.forEach(x=>{d.type==="bullets"&&d.clickable&&x.classList.add(...(d.clickableClass||"").split(" ")),x.classList.add(d.modifierClass+d.type),x.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(x.classList.add(`${d.modifierClass}${d.type}-dynamic`),o=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&x.classList.add(d.progressbarOppositeClass),d.clickable&&x.addEventListener("click",p),t.enabled||x.classList.add(d.lockClass)}))}function y(){const d=t.params.pagination;if(u())return;let h=t.pagination.el;h&&(h=l(h),h.forEach(x=>{x.classList.remove(d.hiddenClass),x.classList.remove(d.modifierClass+d.type),x.classList.remove(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(x.classList.remove(...(d.clickableClass||"").split(" ")),x.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(x=>x.classList.remove(...d.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const d=t.params.pagination;let{el:h}=t.pagination;h=l(h),h.forEach(x=>{x.classList.remove(d.horizontalClass,d.verticalClass),x.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?m():(w(),v(),g())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&g()}),r("snapIndexChange",()=>{g()}),r("snapGridLengthChange",()=>{v(),g()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{g()}),r("click",(d,h)=>{const x=h.target,S=l(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&x===t.navigation.nextEl||t.navigation.prevEl&&x===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(t.params.pagination.hiddenClass))}});const E=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList.remove(t.params.pagination.paginationDisabledClass))),w(),v(),g()},m=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:E,disable:m,render:v,update:g,init:w,destroy:y})}function fw(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=zn();let a=!1,o=null,l=null,u,c,p,g;n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null};function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:L,rtlTranslate:O}=t,{dragEl:T,el:_}=L,$=t.params.scrollbar,ee=t.params.loop?t.progressLoop:t.progress;let z=c,A=(p-c)*ee;O?(A=-A,A>0?(z=c-A,A=0):-A+c>p&&(z=p+A)):A<0?(z=c+A,A=0):A+c>p&&(z=p-A),t.isHorizontal()?(T.style.transform=`translate3d(${A}px, 0, 0)`,T.style.width=`${z}px`):(T.style.transform=`translate3d(0px, ${A}px, 0)`,T.style.height=`${z}px`),$.hide&&(clearTimeout(o),_.style.opacity=1,o=setTimeout(()=>{_.style.opacity=0,_.style.transitionDuration="400ms"},1e3))}function w(L){!t.params.scrollbar.el||!t.scrollbar.el||(t.scrollbar.dragEl.style.transitionDuration=`${L}ms`)}function y(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:L}=t,{dragEl:O,el:T}=L;O.style.width="",O.style.height="",p=t.isHorizontal()?T.offsetWidth:T.offsetHeight,g=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),t.params.scrollbar.dragSize==="auto"?c=p*g:c=parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?O.style.width=`${c}px`:O.style.height=`${c}px`,g>=1?T.style.display="none":T.style.display="",t.params.scrollbar.hide&&(T.style.opacity=0),t.params.watchOverflow&&t.enabled&&L.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function E(L){return t.isHorizontal()?L.clientX:L.clientY}function m(L){const{scrollbar:O,rtlTranslate:T}=t,{el:_}=O;let $;$=(E(L)-ow(_)[t.isHorizontal()?"left":"top"]-(u!==null?u:c/2))/(p-c),$=Math.max(Math.min($,1),0),T&&($=1-$);const ee=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*$;t.updateProgress(ee),t.setTranslate(ee),t.updateActiveIndex(),t.updateSlidesClasses()}function d(L){const O=t.params.scrollbar,{scrollbar:T,wrapperEl:_}=t,{el:$,dragEl:ee}=T;a=!0,u=L.target===ee?E(L)-L.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,L.preventDefault(),L.stopPropagation(),_.style.transitionDuration="100ms",ee.style.transitionDuration="100ms",m(L),clearTimeout(l),$.style.transitionDuration="0ms",O.hide&&($.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",L)}function h(L){const{scrollbar:O,wrapperEl:T}=t,{el:_,dragEl:$}=O;a&&(L.preventDefault?L.preventDefault():L.returnValue=!1,m(L),T.style.transitionDuration="0ms",_.style.transitionDuration="0ms",$.style.transitionDuration="0ms",i("scrollbarDragMove",L))}function x(L){const O=t.params.scrollbar,{scrollbar:T,wrapperEl:_}=t,{el:$}=T;a&&(a=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",_.style.transitionDuration=""),O.hide&&(clearTimeout(l),l=za(()=>{$.style.opacity=0,$.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",L),O.snapOnRelease&&t.slideToClosest())}function S(L){const{scrollbar:O,params:T}=t,_=O.el;if(!_)return;const $=_,ee=T.passiveListeners?{passive:!1,capture:!1}:!1,z=T.passiveListeners?{passive:!0,capture:!1}:!1;if(!$)return;const A=L==="on"?"addEventListener":"removeEventListener";$[A]("pointerdown",d,ee),s[A]("pointermove",h,ee),s[A]("pointerup",x,z)}function C(){!t.params.scrollbar.el||!t.scrollbar.el||S("on")}function k(){!t.params.scrollbar.el||!t.scrollbar.el||S("off")}function j(){const{scrollbar:L,el:O}=t;t.params.scrollbar=bc(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const T=t.params.scrollbar;if(!T.el)return;let _;if(typeof T.el=="string"&&t.isElement&&(_=t.el.querySelector(T.el)),!_&&typeof T.el=="string"){if(_=s.querySelectorAll(T.el),!_.length)return}else _||(_=T.el);t.params.uniqueNavElements&&typeof T.el=="string"&&_.length>1&&O.querySelectorAll(T.el).length===1&&(_=O.querySelector(T.el)),_.length>0&&(_=_[0]),_.classList.add(t.isHorizontal()?T.horizontalClass:T.verticalClass);let $;_&&($=_.querySelector(Ut(t.params.scrollbar.dragClass)),$||($=Gr("div",t.params.scrollbar.dragClass),_.append($))),Object.assign(L,{el:_,dragEl:$}),T.draggable&&C(),_&&_.classList[t.enabled?"remove":"add"](...an(t.params.scrollbar.lockClass))}function N(){const L=t.params.scrollbar,O=t.scrollbar.el;O&&O.classList.remove(...an(t.isHorizontal()?L.horizontalClass:L.verticalClass)),k()}r("init",()=>{t.params.scrollbar.enabled===!1?R():(j(),y(),v())}),r("update resize observerUpdate lock unlock",()=>{y()}),r("setTranslate",()=>{v()}),r("setTransition",(L,O)=>{w(O)}),r("enable disable",()=>{const{el:L}=t.scrollbar;L&&L.classList[t.enabled?"remove":"add"](...an(t.params.scrollbar.lockClass))}),r("destroy",()=>{N()});const P=()=>{t.el.classList.remove(...an(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...an(t.params.scrollbar.scrollbarDisabledClass)),j(),y(),v()},R=()=>{t.el.classList.add(...an(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...an(t.params.scrollbar.scrollbarDisabledClass)),N()};Object.assign(t.scrollbar,{enable:P,disable:R,updateSize:y,setTranslate:v,init:j,destroy:N})}function pw(e){let{swiper:t,extendParams:n,on:r}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function s(T){const _=i;_.length!==0&&(_.innerHTML="",_.innerHTML=T)}const a=T=>(Array.isArray(T)?T:[T]).filter(_=>!!_);function o(T){T===void 0&&(T=16);const _=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(T).replace(/x/g,_)}function l(T){T=a(T),T.forEach(_=>{_.setAttribute("tabIndex","0")})}function u(T){T=a(T),T.forEach(_=>{_.setAttribute("tabIndex","-1")})}function c(T,_){T=a(T),T.forEach($=>{$.setAttribute("role",_)})}function p(T,_){T=a(T),T.forEach($=>{$.setAttribute("aria-roledescription",_)})}function g(T,_){T=a(T),T.forEach($=>{$.setAttribute("aria-controls",_)})}function v(T,_){T=a(T),T.forEach($=>{$.setAttribute("aria-label",_)})}function w(T,_){T=a(T),T.forEach($=>{$.setAttribute("id",_)})}function y(T,_){T=a(T),T.forEach($=>{$.setAttribute("aria-live",_)})}function E(T){T=a(T),T.forEach(_=>{_.setAttribute("aria-disabled",!0)})}function m(T){T=a(T),T.forEach(_=>{_.setAttribute("aria-disabled",!1)})}function d(T){if(T.keyCode!==13&&T.keyCode!==32)return;const _=t.params.a11y,$=T.target;t.pagination&&t.pagination.el&&($===t.pagination.el||t.pagination.el.contains(T.target))&&!T.target.matches(Ut(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&$===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?s(_.lastSlideMessage):s(_.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&$===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?s(_.firstSlideMessage):s(_.prevSlideMessage)),t.pagination&&$.matches(Ut(t.params.pagination.bulletClass))&&$.click())}function h(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:T,prevEl:_}=t.navigation;_&&(t.isBeginning?(E(_),u(_)):(m(_),l(_))),T&&(t.isEnd?(E(T),u(T)):(m(T),l(T)))}function x(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function S(){return x()&&t.params.pagination.clickable}function C(){const T=t.params.a11y;x()&&t.pagination.bullets.forEach(_=>{t.params.pagination.clickable&&(l(_),t.params.pagination.renderBullet||(c(_,"button"),v(_,T.paginationBulletMessage.replace(/\{\{index\}\}/,Yi(_)+1)))),_.matches(Ut(t.params.pagination.bulletActiveClass))?_.setAttribute("aria-current","true"):_.removeAttribute("aria-current")})}const k=(T,_,$)=>{l(T),T.tagName!=="BUTTON"&&(c(T,"button"),T.addEventListener("keydown",d)),v(T,$),g(T,_)},j=()=>{t.a11y.clicked=!0},N=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},P=T=>{if(t.a11y.clicked)return;const _=T.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!_||!t.slides.includes(_))return;const $=t.slides.indexOf(_)===t.activeIndex,ee=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(_);$||ee||T.sourceCapabilities&&T.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(_),0))},R=()=>{const T=t.params.a11y;T.itemRoleDescriptionMessage&&p(t.slides,T.itemRoleDescriptionMessage),T.slideRole&&c(t.slides,T.slideRole);const _=t.slides.length;T.slideLabelMessage&&t.slides.forEach(($,ee)=>{const z=t.params.loop?parseInt($.getAttribute("data-swiper-slide-index"),10):ee,A=T.slideLabelMessage.replace(/\{\{index\}\}/,z+1).replace(/\{\{slidesLength\}\}/,_);v($,A)})},L=()=>{const T=t.params.a11y;t.el.append(i);const _=t.el;T.containerRoleDescriptionMessage&&p(_,T.containerRoleDescriptionMessage),T.containerMessage&&v(_,T.containerMessage);const $=t.wrapperEl,ee=T.id||$.getAttribute("id")||`swiper-wrapper-${o(16)}`,z=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";w($,ee),y($,z),R();let{nextEl:A,prevEl:V}=t.navigation?t.navigation:{};A=a(A),V=a(V),A&&A.forEach(Q=>k(Q,ee,T.nextSlideMessage)),V&&V.forEach(Q=>k(Q,ee,T.prevSlideMessage)),S()&&a(t.pagination.el).forEach(se=>{se.addEventListener("keydown",d)}),t.el.addEventListener("focus",P,!0),t.el.addEventListener("pointerdown",j,!0),t.el.addEventListener("pointerup",N,!0)};function O(){i&&i.remove();let{nextEl:T,prevEl:_}=t.navigation?t.navigation:{};T=a(T),_=a(_),T&&T.forEach($=>$.removeEventListener("keydown",d)),_&&_.forEach($=>$.removeEventListener("keydown",d)),S()&&a(t.pagination.el).forEach(ee=>{ee.removeEventListener("keydown",d)}),t.el.removeEventListener("focus",P,!0),t.el.removeEventListener("pointerdown",j,!0),t.el.removeEventListener("pointerup",N,!0)}r("beforeInit",()=>{i=Gr("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),r("afterInit",()=>{t.params.a11y.enabled&&L()}),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&R()}),r("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&h()}),r("paginationUpdate",()=>{t.params.a11y.enabled&&C()}),r("destroy",()=>{t.params.a11y.enabled&&O()})}let Jo;function hw(){const e=qe(),t=zn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Pm(){return Jo||(Jo=hw()),Jo}let el;function mw(e){let{userAgent:t}=e===void 0?{}:e;const n=Pm(),r=qe(),i=r.navigator.platform,s=t||r.navigator.userAgent,a={ios:!1,android:!1},o=r.screen.width,l=r.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),g=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let w=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&w&&n.touch&&y.indexOf(`${o}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),w=!1),u&&!v&&(a.os="android",a.android=!0),(c||g||p)&&(a.os="ios",a.ios=!0),a}function gw(e){return e===void 0&&(e={}),el||(el=mw(e)),el}let tl;function vw(){const e=qe();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,s]=r.split("Version/")[1].split(" ")[0].split(".").map(a=>Number(a));t=i<16||i===16&&s<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function yw(){return tl||(tl=vw()),tl}function xw(e){let{swiper:t,on:n,emit:r}=e;const i=qe();let s=null,a=null;const o=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:g,height:v}=t;let w=g,y=v;p.forEach(E=>{let{contentBoxSize:m,contentRect:d,target:h}=E;h&&h!==t.el||(w=d?d.width:(m[0]||m).inlineSize,y=d?d.height:(m[0]||m).blockSize)}),(w!==g||y!==v)&&o()})}),s.observe(t.el))},u=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function ww(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],a=qe(),o=function(c,p){p===void 0&&(p={});const g=a.MutationObserver||a.WebkitMutationObserver,v=new g(w=>{if(t.__preventObserver__)return;if(w.length===1){i("observerUpdate",w[0]);return}const y=function(){i("observerUpdate",w[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});v.observe(c,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const c=bm(t.hostEl);for(let p=0;p<c.length;p+=1)o(c[p])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var Sw={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function Ew(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(mn(r,"padding-left")||0,10)-parseInt(mn(r,"padding-right")||0,10),n=n-parseInt(mn(r,"padding-top")||0,10)-parseInt(mn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Tw(){const e=this;function t(P,R){return parseFloat(P.getPropertyValue(e.getDirectionLabel(R))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:o}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=Lt(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:c.length;let g=[];const v=[],w=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let E=n.slidesOffsetAfter;typeof E=="function"&&(E=n.slidesOffsetAfter.call(e));const m=e.snapGrid.length,d=e.slidesGrid.length;let h=n.spaceBetween,x=-y,S=0,C=0;if(typeof s>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*s:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,c.forEach(P=>{a?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(As(r,"--swiper-centered-offset-before",""),As(r,"--swiper-centered-offset-after",""));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let j;const N=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(P=>typeof n.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<p;P+=1){j=0;let R;if(c[P]&&(R=c[P]),k&&e.grid.updateSlide(P,R,c),!(c[P]&&mn(R,"display")==="none")){if(n.slidesPerView==="auto"){N&&(c[P].style[e.getDirectionLabel("width")]="");const L=getComputedStyle(R),O=R.style.transform,T=R.style.webkitTransform;if(O&&(R.style.transform="none"),T&&(R.style.webkitTransform="none"),n.roundLengths)j=e.isHorizontal()?mu(R,"width",!0):mu(R,"height",!0);else{const _=t(L,"width"),$=t(L,"padding-left"),ee=t(L,"padding-right"),z=t(L,"margin-left"),A=t(L,"margin-right"),V=L.getPropertyValue("box-sizing");if(V&&V==="border-box")j=_+z+A;else{const{clientWidth:Q,offsetWidth:se}=R;j=_+$+ee+z+A+(se-Q)}}O&&(R.style.transform=O),T&&(R.style.webkitTransform=T),n.roundLengths&&(j=Math.floor(j))}else j=(s-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(j=Math.floor(j)),c[P]&&(c[P].style[e.getDirectionLabel("width")]=`${j}px`);c[P]&&(c[P].swiperSlideSize=j),w.push(j),n.centeredSlides?(x=x+j/2+S/2+h,S===0&&P!==0&&(x=x-s/2-h),P===0&&(x=x-s/2-h),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),C%n.slidesPerGroup===0&&g.push(x),v.push(x)):(n.roundLengths&&(x=Math.floor(x)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&g.push(x),v.push(x),x=x+j+h),e.virtualSize+=j+h,S=j,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+E,a&&o&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),k&&e.grid.updateWrapperSize(j,g),!n.centeredSlides){const P=[];for(let R=0;R<g.length;R+=1){let L=g[R];n.roundLengths&&(L=Math.floor(L)),g[R]<=e.virtualSize-s&&P.push(L)}g=P,Math.floor(e.virtualSize-s)-Math.floor(g[g.length-1])>1&&g.push(e.virtualSize-s)}if(l&&n.loop){const P=w[0]+h;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),L=P*n.slidesPerGroup;for(let O=0;O<R;O+=1)g.push(g[g.length-1]+L)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&g.push(g[g.length-1]+P),v.push(v[v.length-1]+P),e.virtualSize+=P}if(g.length===0&&(g=[0]),h!==0){const P=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");c.filter((R,L)=>!n.cssMode||n.loop?!0:L!==c.length-1).forEach(R=>{R.style[P]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let P=0;w.forEach(L=>{P+=L+(h||0)}),P-=h;const R=P-s;g=g.map(L=>L<=0?-y:L>R?R+E:L)}if(n.centerInsufficientSlides){let P=0;if(w.forEach(R=>{P+=R+(h||0)}),P-=h,P<s){const R=(s-P)/2;g.forEach((L,O)=>{g[O]=L-R}),v.forEach((L,O)=>{v[O]=L+R})}}if(Object.assign(e,{slides:c,snapGrid:g,slidesGrid:v,slidesSizesGrid:w}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){As(r,"--swiper-centered-offset-before",`${-g[0]}px`),As(r,"--swiper-centered-offset-after",`${e.size/2-w[w.length-1]/2}px`);const P=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(L=>L+P),e.slidesGrid=e.slidesGrid.map(L=>L+R)}if(p!==u&&e.emit("slidesLengthChange"),g.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const P=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(P);p<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(P):R&&e.el.classList.remove(P)}}function Cw(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=o=>r?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{n.push(o)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const o=t.activeIndex+s;if(o>t.slides.length&&!r)break;n.push(a(o))}else n.push(a(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const o=n[s].offsetHeight;i=o>i?o:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function _w(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function kw(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=n.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+o),g=(a-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+o),v=-(a-c),w=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l];(v>=0&&v<t.size-1||w>1&&w<=t.size||v<=0&&w>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),y&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-g:g}}function bw(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:o}=t;const l=s,u=a;if(r===0)i=0,s=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;s=c||i<=0,a=p||i>=1,c&&(i=0),p&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),g=t.slidesGrid[c],v=t.slidesGrid[p],w=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=g?o=(y-g)/w:o=(y+w-v)/w,o>1&&(o-=1)}Object.assign(t,{progress:i,progressLoop:o,isBeginning:s,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(l&&!s||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}function Pw(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,o=p=>Lt(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];t.forEach(p=>{p.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,c;if(s)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=o(`[data-swiper-slide-index="${p}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],c=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(l.classList.add(n.slideActiveClass),a?(c&&c.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(c=uw(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),c&&c.classList.add(n.slideNextClass),u=lw(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass))),e.emitSlidesClasses()}const ea=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},nl=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,o=[a-t];o.push(...Array.from({length:t}).map((l,u)=>a+r+u)),e.slides.forEach((l,u)=>{o.includes(l.column)&&nl(e,u)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=s+t;a+=1){const o=(a%n+n)%n;(o<i||o>s)&&nl(e,o)}else for(let a=Math.max(i-t,0);a<=Math.min(s+t,n-1);a+=1)a!==i&&(a>s||a<i)&&nl(e,a)};function jw(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Nw(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:o}=t;let l=e,u;const c=v=>{let w=v-t.virtual.slidesBefore;return w<0&&(w=t.virtual.slides.length+w),w>=t.virtual.slides.length&&(w-=t.virtual.slides.length),w};if(typeof l>"u"&&(l=jw(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);u=v+Math.floor((l-v)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s&&!t.params.loop){u!==o&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let g;if(t.virtual&&i.virtual.enabled&&i.loop)g=c(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let w=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(w)&&(w=Math.max(t.slides.indexOf(v),0)),g=Math.floor(w/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?g=parseInt(v,10):g=l}else g=l;Object.assign(t,{previousSnapIndex:o,snapIndex:u,previousRealIndex:a,realIndex:g,previousIndex:s,activeIndex:l}),t.initialized&&gu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==g&&t.emit("realIndexChange"),t.emit("slideChange"))}function Ow(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${r.slideClass}, swiper-slide`)&&(i=o)});let s=!1,a;if(i){for(let o=0;o<n.slides.length;o+=1)if(n.slides[o]===i){s=!0,a=o;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Lw={updateSize:Ew,updateSlides:Tw,updateAutoHeight:Cw,updateSlidesOffset:_w,updateSlidesProgress:kw,updateProgress:bw,updateSlidesClasses:Pw,updateActiveIndex:Nw,updateClickedSlide:Ow};function Iw(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=sw(s,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function zw(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=n;let o=0,l=0;const u=0;n.isHorizontal()?o=r?-e:e:l=e,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?o:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-o:-l:i.virtualTranslate||(n.isHorizontal()?o-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${u}px)`);let c;const p=n.maxTranslate()-n.minTranslate();p===0?c=0:c=(e-n.minTranslate())/p,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function Aw(){return-this.snapGrid[0]}function Mw(){return-this.snapGrid[this.snapGrid.length-1]}function Rw(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,s.updateProgress(c),a.cssMode){const p=s.isHorizontal();if(t===0)o[p?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return km({swiper:s,targetPosition:-c,side:p?"left":"top"}),!0;o.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(g){!s||s.destroyed||g.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var $w={getTranslate:Iw,setTranslate:zw,minTranslate:Aw,maxTranslate:Mw,translateTo:Rw};function Dw(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function jm(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:a}=t;let o=r;if(o||(s>a?o="next":s<a?o="prev":o="reset"),t.emit(`transition${i}`),n&&s!==a){if(o==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),o==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function Fw(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),jm({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Bw(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),jm({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Vw={setTransition:Dw,transitionStart:Fw,transitionEnd:Bw};function Uw(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let a=e;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:g,wrapperEl:v,enabled:w}=s;if(s.animating&&o.preventInteractionOnTransition||!w&&!r&&!i)return!1;const y=Math.min(s.params.slidesPerGroupSkip,a);let E=y+Math.floor((a-y)/s.params.slidesPerGroup);E>=l.length&&(E=l.length-1);const m=-l[E];if(o.normalizeSlideIndex)for(let h=0;h<u.length;h+=1){const x=-Math.floor(m*100),S=Math.floor(u[h]*100),C=Math.floor(u[h+1]*100);typeof u[h+1]<"u"?x>=S&&x<C-(C-S)/2?a=h:x>=S&&x<C&&(a=h+1):x>=S&&(a=h)}if(s.initialized&&a!==p&&(!s.allowSlideNext&&(g?m>s.translate&&m>s.minTranslate():m<s.translate&&m<s.minTranslate())||!s.allowSlidePrev&&m>s.translate&&m>s.maxTranslate()&&(p||0)!==a))return!1;a!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(m);let d;if(a>p?d="next":a<p?d="prev":d="reset",g&&-m===s.translate||!g&&m===s.translate)return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(m),d!=="reset"&&(s.transitionStart(n,d),s.transitionEnd(n,d)),!1;if(o.cssMode){const h=s.isHorizontal(),x=g?m:-m;if(t===0){const S=s.virtual&&s.params.virtual.enabled;S&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),S&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[h?"scrollLeft":"scrollTop"]=x})):v[h?"scrollLeft":"scrollTop"]=x,S&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return km({swiper:s,targetPosition:x,side:h?"left":"top"}),!0;v.scrollTo({[h?"left":"top"]:x,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(m),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,d),t===0?s.transitionEnd(n,d):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(x){!s||s.destroyed||x.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,d))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Hw(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this,s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let o;if(s){const g=a*i.params.grid.rows;o=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===g)[0].column}else o=i.getSlideIndexByData(a);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let p=l-o<c;if(u&&(p=p||o<Math.ceil(c/2)),p){const g=u?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?o+1:o-l+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(s){const g=a*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===g)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function Gw(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i)return r;let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:o,u=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function Ww(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:u}=r;if(!l)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=o?r.translate:-r.translate;function g(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const v=g(p),w=s.map(m=>g(m));let y=s[w.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let m;s.forEach((d,h)=>{v>=d&&(m=h)}),typeof m<"u"&&(y=s[m>0?m-1:m])}let E=0;if(typeof y<"u"&&(E=a.indexOf(y),E<0&&(E=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,e,t,n)}),!0;return r.slideTo(E,e,t,n)}function Zw(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function Yw(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const u=i.snapGrid[o],c=i.snapGrid[o+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[o-1],c=i.snapGrid[o];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function qw(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Lt(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),za(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Lt(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),za(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Xw={slideTo:Uw,slideToLoop:Hw,slideNext:Gw,slidePrev:Ww,slideReset:Zw,slideToClosest:Yw,slideToClickedSlide:qw};function Qw(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{Lt(r,`.${n.slideClass}, swiper-slide`).forEach((p,g)=>{p.setAttribute("data-swiper-slide-index",g)})},s=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(s?n.grid.rows:1),o=t.slides.length%a!==0,l=s&&t.slides.length%n.grid.rows!==0,u=c=>{for(let p=0;p<c;p+=1){const g=t.isElement?Gr("swiper-slide",[n.slideBlankClass]):Gr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(g)}};if(o){if(n.loopAddBlankSlides){const c=a-t.slides.length%a;u(c),t.recalcSlides(),t.updateSlides()}else Ma("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-t.slides.length%n.grid.rows;u(c),t.recalcSlides(),t.updateSlides()}else Ma("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function Kw(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:o}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:p,slidesEl:g,params:v}=l,{centeredSlides:w}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),w&&y%2===0&&(y=y+1));const E=v.slidesPerGroupAuto?y:v.slidesPerGroup;let m=E;m%E!==0&&(m+=E-m%E),m+=v.loopAdditionalSlides,l.loopedSlides=m;const d=l.grid&&v.grid&&v.grid.rows>1;u.length<y+m?Ma("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&v.grid.fill==="row"&&Ma("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],x=[];let S=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(O=>O.classList.contains(v.slideActiveClass))[0]):S=s;const C=r==="next"||!r,k=r==="prev"||!r;let j=0,N=0;const P=d?Math.ceil(u.length/v.grid.rows):u.length,L=(d?u[s].column:s)+(w&&typeof i>"u"?-y/2+.5:0);if(L<m){j=Math.max(m-L,E);for(let O=0;O<m-L;O+=1){const T=O-Math.floor(O/P)*P;if(d){const _=P-T-1;for(let $=u.length-1;$>=0;$-=1)u[$].column===_&&h.push($)}else h.push(P-T-1)}}else if(L+y>P-m){N=Math.max(L-(P-m*2),E);for(let O=0;O<N;O+=1){const T=O-Math.floor(O/P)*P;d?u.forEach((_,$)=>{_.column===T&&x.push($)}):x.push(T)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),k&&h.forEach(O=>{u[O].swiperLoopMoveDOM=!0,g.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),C&&x.forEach(O=>{u[O].swiperLoopMoveDOM=!0,g.append(u[O]),u[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():d&&(h.length>0&&k||x.length>0&&C)&&l.slides.forEach((O,T)=>{l.grid.updateSlide(T,O,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(h.length>0&&k){if(typeof t>"u"){const O=l.slidesGrid[S],_=l.slidesGrid[S+j]-O;o?l.setTranslate(l.translate-_):(l.slideTo(S+j,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-_,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-_))}else if(i){const O=d?h.length/v.grid.rows:h.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(x.length>0&&C)if(typeof t>"u"){const O=l.slidesGrid[S],_=l.slidesGrid[S-N]-O;o?l.setTranslate(l.translate-_):(l.slideTo(S-N,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-_,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-_))}else{const O=d?x.length/v.grid.rows:x.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const O={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(T=>{!T.destroyed&&T.params.loop&&T.loopFix({...O,slideTo:T.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function Jw(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var eS={loopCreate:Qw,loopFix:Kw,loopDestroy:Jw};function tS(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function nS(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var rS={setGrabCursor:tS,unsetGrabCursor:nS};function iS(e,t){t===void 0&&(t=this);function n(r){if(!r||r===zn()||r===qe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function mf(e,t,n){const r=qe(),{params:i}=e,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(n<=a||n>=r.innerWidth-a)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function sS(e){const t=this,n=zn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){mf(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=t;if(!o||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(g?iS(p,l):l.closest(p))){t.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const v=a.currentX,w=a.currentY;if(!mf(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=w,i.touchStartTime=Aa(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const E=y&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||E)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function aS(e){const t=zn(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:o}=n;if(!o||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p}),r.touchStartTime=Aa());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=p;const g=s.currentX-s.startX,v=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(g**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:g*g+v*v>=25&&(C=Math.atan2(Math.abs(v),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let w=n.isHorizontal()?g:v,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(w=Math.abs(w)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),s.diff=w,w*=i.touchRatio,a&&(w=-w,y=-y);const E=n.touchesDirection;n.swipeDirection=w>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const m=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(m&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&E!==n.touchesDirection&&m&&d&&Math.abs(w)>=1){Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=w+r.startTranslate;let x=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),w>0?(m&&d&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+w)**S))):w<0&&(m&&d&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-w)**S))),x&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(w)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function oS(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=Aa(),g=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),g<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Aa(),za(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(a.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const w=v>=-t.maxTranslate()&&!t.params.loop;let y=0,E=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const C=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[S+C]<"u"?(w||v>=u[S]&&v<u[S+C])&&(y=S,E=u[S+C]-u[S]):(w||v>=u[S])&&(y=S,E=u[u.length-1]-u[u.length-2])}let m=null,d=null;a.rewind&&(t.isBeginning?d=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const h=(v-u[y])/E,x=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(g>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?m:y+x):t.slideTo(y)),t.swipeDirection==="prev"&&(h>1-a.longSwipesRatio?t.slideTo(y+x):d!==null&&h<0&&Math.abs(h)>a.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+x):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:y+x),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function gf(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function lS(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function uS(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function cS(e){const t=this;ea(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dS(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Nm=(e,t)=>{const n=zn(),{params:r,el:i,wrapperEl:s,device:a}=e,o=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:o}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:o}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",gf,!0):e[u]("observerUpdate",gf,!0),i[l]("load",e.onLoad,{capture:!0})};function fS(){const e=this,{params:t}=e;e.onTouchStart=sS.bind(e),e.onTouchMove=aS.bind(e),e.onTouchEnd=oS.bind(e),e.onDocumentTouchStart=dS.bind(e),t.cssMode&&(e.onScroll=uS.bind(e)),e.onClick=lS.bind(e),e.onLoad=cS.bind(e),Nm(e,"on")}function pS(){Nm(this,"off")}var hS={attachEvents:fS,detachEvents:pS};const vf=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function mS(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in s?s[a]:void 0)||e.originalParams,u=vf(e,r),c=vf(e,l),p=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const d=r[m]&&r[m].enabled,h=l[m]&&l[m].enabled;d&&!h&&e[m].disable(),!d&&h&&e[m].enable()});const g=l.direction&&l.direction!==r.direction,v=r.loop&&(l.slidesPerView!==r.slidesPerView||g),w=r.loop;g&&n&&e.changeDirection(),Ke(e.params,l);const y=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!y?e.disable():!p&&y&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&E?(e.loopCreate(t),e.updateSlides()):w&&!E&&e.loopDestroy()),e.emit("breakpoint",l)}function gS(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=qe(),s=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:u}=a[o];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var vS={setBreakpoint:mS,getBreakpoint:gS};function yS(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function xS(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,a=yS(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function wS(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var SS={addClasses:xS,removeClasses:wS};function ES(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var TS={checkOverflow:ES},vu={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function CS(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ke(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Ke(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ke(t,r)}}const rl={eventsEmitter:Sw,update:Lw,translate:$w,transition:Vw,slide:Xw,loop:eS,grabCursor:rS,events:hS,breakpoints:vS,checkOverflow:TS,classes:SS},il={};let Pc=class Dt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ke({},n),t&&!n.el&&(n.el=t);const a=zn();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const c=[];return a.querySelectorAll(n.el).forEach(p=>{const g=Ke({},n,{el:p});c.push(new Dt(g))}),c}const o=this;o.__swiper__=!0,o.support=Pm(),o.device=gw({userAgent:n.userAgent}),o.browser=yw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],n.modules&&Array.isArray(n.modules)&&o.modules.push(...n.modules);const l={};o.modules.forEach(c=>{c({params:n,swiper:o,extendParams:CS(n,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const u=Ke({},vu,l);return o.params=Ke({},u,il,n),o.originalParams=Ke({},o.params),o.passedParams=Ke({},n),o.params&&o.params.on&&Object.keys(o.params.on).forEach(c=>{o.on(c,o.params.on[c])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Lt(n,`.${r.slideClass}, swiper-slide`),s=Yi(i[0]);return Yi(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Lt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=s[u]?s[u].swiperSlideSize:0,g;for(let v=u+1;v<s.length;v+=1)s[v]&&!g&&(p+=s[v].swiperSlideSize,c+=1,p>l&&(g=!0));for(let v=u-1;v>=0;v-=1)s[v]&&!g&&(p+=s[v].swiperSlideSize,c+=1,p>l&&(g=!0))}else if(t==="current")for(let p=u+1;p<s.length;p+=1)(n?a[p]+o[p]-a[u]<l:a[p]-a[u]<l)&&(c+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ea(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(a.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Lt(r,i())[0])();return!a&&n.params.createElements&&(a=Gr("div",n.params.wrapperClass),r.append(a),Lt(r,`.${n.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||mn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||mn(r,"direction")==="rtl"),wrongRTL:mn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?ea(n,s):s.addEventListener("load",a=>{ea(n,a.target)})}),gu(n),n.initialized=!0,gu(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:o}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,rw(r)),r.destroyed=!0),null}static extendDefaults(t){Ke(il,t)}static get extendedDefaults(){return il}static get defaults(){return vu}static installModule(t){Dt.prototype.__modules__||(Dt.prototype.__modules__=[]);const n=Dt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Dt.installModule(n)),Dt):(Dt.installModule(t),Dt)}};Object.keys(rl).forEach(e=>{Object.keys(rl[e]).forEach(t=>{Pc.prototype[t]=rl[e][t]})});Pc.use([xw,ww]);const Om=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function er(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Or(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:er(t[r])&&er(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Or(e[r],t[r]):e[r]=t[r]})}function Lm(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Im(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function zm(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Am(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function _S(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function kS(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:a,scrollbarEl:o,paginationEl:l}=e;const u=i.filter(N=>N!=="children"&&N!=="direction"&&N!=="wrapperClass"),{params:c,pagination:p,navigation:g,scrollbar:v,virtual:w,thumbs:y}=t;let E,m,d,h,x,S,C,k;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(E=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(m=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&g&&!g.prevEl&&!g.nextEl&&(x=!0);const j=N=>{t[N]&&(t[N].destroy(),N==="navigation"?(t.isElement&&(t[N].prevEl.remove(),t[N].nextEl.remove()),c[N].prevEl=void 0,c[N].nextEl=void 0,t[N].prevEl=void 0,t[N].nextEl=void 0):(t.isElement&&t[N].el.remove(),c[N].el=void 0,t[N].el=void 0))};i.includes("loop")&&t.isElement&&(c.loop&&!r.loop?S=!0:!c.loop&&r.loop?C=!0:k=!0),u.forEach(N=>{if(er(c[N])&&er(r[N]))Object.assign(c[N],r[N]),(N==="navigation"||N==="pagination"||N==="scrollbar")&&"enabled"in r[N]&&!r[N].enabled&&j(N);else{const P=r[N];(P===!0||P===!1)&&(N==="navigation"||N==="pagination"||N==="scrollbar")?P===!1&&j(N):c[N]=r[N]}}),u.includes("controller")&&!m&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&w&&c.virtual.enabled?(w.slides=n,w.update(!0)):i.includes("virtual")&&w&&c.virtual.enabled&&(n&&(w.slides=n),w.update(!0)),i.includes("children")&&n&&c.loop&&(k=!0),E&&y.init()&&y.update(!0),m&&(t.controller.control=c.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(c.pagination.el=l),p.init(),p.render(),p.update()),h&&(t.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),t.el.appendChild(o)),o&&(c.scrollbar.el=o),v.init(),v.updateSize(),v.setTranslate()),x&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),s&&(c.navigation.nextEl=s),a&&(c.navigation.prevEl=a),g.init(),g.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||k)&&t.loopDestroy(),(C||k)&&t.loopCreate(),t.update()}function bS(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Or(n,vu),n._emitClasses=!0,n.init=!1;const s={},a=Om.map(l=>l.replace(/_/,"")),o=Object.assign({},e);return Object.keys(o).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?er(e[l])?(n[l]={},i[l]={},Or(n[l],e[l]),Or(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:s[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function PS(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:a,swiper:o}=e;Lm(t)&&r&&i&&(o.params.navigation.nextEl=r,o.originalParams.navigation.nextEl=r,o.params.navigation.prevEl=i,o.originalParams.navigation.prevEl=i),Im(t)&&s&&(o.params.pagination.el=s,o.originalParams.pagination.el=s),zm(t)&&a&&(o.params.scrollbar.el=a,o.originalParams.scrollbar.el=a),o.init(n)}function jS(e,t,n,r,i){const s=[];if(!t)return s;const a=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Om.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(er(e[l])&&er(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?a(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),c.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),s}const NS=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}function Mm(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Rm(e){const t=[];return Y.Children.toArray(e).forEach(n=>{Mm(n)?t.push(n):n.props&&n.props.children&&Rm(n.props.children).forEach(r=>t.push(r))}),t}function OS(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Y.Children.toArray(e).forEach(r=>{if(Mm(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Rm(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function LS(e,t,n){if(!n)return null;const r=c=>{let p=c;return c<0?p=t.length+c:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:a}=n,o=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=o;c<l;c+=1)c>=s&&c<=a&&u.push(t[r(c)]);return u.map((c,p)=>Y.cloneElement(c,{swiper:e,style:i,key:`slide-${p}`}))}function ki(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const yf=b.createContext(null),IS=b.createContext(null),$m=b.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:a,...o}=e===void 0?{}:e,l=!1;const[u,c]=b.useState("swiper"),[p,g]=b.useState(null),[v,w]=b.useState(!1),y=b.useRef(!1),E=b.useRef(null),m=b.useRef(null),d=b.useRef(null),h=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),k=b.useRef(null),{params:j,passedParams:N,rest:P,events:R}=bS(o),{slides:L,slots:O}=OS(s),T=()=>{w(!v)};Object.assign(j.on,{_containerClasses(A,V){c(V)}});const _=()=>{Object.assign(j.on,R),l=!0;const A={...j};if(delete A.wrapperClass,m.current=new Pc(A),m.current.virtual&&m.current.params.virtual.enabled){m.current.virtual.slides=L;const V={cache:!1,slides:L,renderExternal:g,renderExternalUpdate:!1};Or(m.current.params.virtual,V),Or(m.current.originalParams.virtual,V)}};E.current||_(),m.current&&m.current.on("_beforeBreakpoint",T);const $=()=>{l||!R||!m.current||Object.keys(R).forEach(A=>{m.current.on(A,R[A])})},ee=()=>{!R||!m.current||Object.keys(R).forEach(A=>{m.current.off(A,R[A])})};b.useEffect(()=>()=>{m.current&&m.current.off("_beforeBreakpoint",T)}),b.useEffect(()=>{!y.current&&m.current&&(m.current.emitSlidesClasses(),y.current=!0)}),ki(()=>{if(t&&(t.current=E.current),!!E.current)return m.current.destroyed&&_(),PS({el:E.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:k.current,swiper:m.current},j),a&&a(m.current),()=>{m.current&&!m.current.destroyed&&m.current.destroy(!0,!1)}},[]),ki(()=>{$();const A=jS(N,d.current,L,h.current,V=>V.key);return d.current=N,h.current=L,A.length&&m.current&&!m.current.destroyed&&kS({swiper:m.current,slides:L,passedParams:N,changedParams:A,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{ee()}}),ki(()=>{NS(m.current)},[p]);function z(){return j.virtual?LS(m.current,L,p):L.map((A,V)=>Y.cloneElement(A,{swiper:m.current,swiperSlideIndex:V}))}return Y.createElement(r,Ra({ref:E,className:Am(`${u}${n?` ${n}`:""}`)},P),Y.createElement(IS.Provider,{value:m.current},O["container-start"],Y.createElement(i,{className:_S(j.wrapperClass)},O["wrapper-start"],z(),O["wrapper-end"]),Lm(j)&&Y.createElement(Y.Fragment,null,Y.createElement("div",{ref:S,className:"swiper-button-prev"}),Y.createElement("div",{ref:x,className:"swiper-button-next"})),zm(j)&&Y.createElement("div",{ref:k,className:"swiper-scrollbar"}),Im(j)&&Y.createElement("div",{ref:C,className:"swiper-pagination"}),O["container-end"]))});$m.displayName="Swiper";const Dm=b.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:a,lazy:o,virtualIndex:l,swiperSlideIndex:u,...c}=e===void 0?{}:e;const p=b.useRef(null),[g,v]=b.useState("swiper-slide"),[w,y]=b.useState(!1);function E(x,S,C){S===p.current&&v(C)}ki(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!s)){if(s.destroyed){g!=="swiper-slide"&&v("swiper-slide");return}return s.on("_slideClass",E),()=>{s&&s.off("_slideClass",E)}}}),ki(()=>{s&&p.current&&!s.destroyed&&v(s.getSlideClasses(p.current))},[s]);const m={isActive:g.indexOf("swiper-slide-active")>=0,isVisible:g.indexOf("swiper-slide-visible")>=0,isPrev:g.indexOf("swiper-slide-prev")>=0,isNext:g.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(m):r,h=()=>{y(!0)};return Y.createElement(n,Ra({ref:p,className:Am(`${g}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:h},c),a&&Y.createElement(yf.Provider,{value:m},Y.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},d(),o&&!w&&Y.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&Y.createElement(yf.Provider,{value:m},d(),o&&!w&&Y.createElement("div",{className:"swiper-lazy-preloader"})))});Dm.displayName="SwiperSlide";const zS=()=>{const[e]=b.useState(tw.sponsors);return f.jsxs(AS,{children:[f.jsx("h1",{children:"Apoios"}),f.jsx($m,{modules:[cw,dw,fw,pw],spaceBetween:50,slidesPerView:3,pagination:{clickable:!0},onSwiper:t=>console.log(t),onSlideChange:()=>console.log("slide change"),children:e.map((t,n)=>f.jsx(Dm,{children:f.jsx("img",{src:`src/assets/images/Sponsors/${t.image}`,alt:t.image})},n))}),f.jsx("div",{className:"swiper-pagination"})]})},AS=Te.section`
	padding: 50px 0;
	margin: 0 auto;

	h1 {
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		font-family: Poppins, sans-serif;
		color: var(--color-primary-soft);
	}

	.swiper {
		display: block;
		max-width: 1700px;
		width: 100vw;
		.swiper-wrapper {
			height: 300px;

			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				border-radius: 5px;

				img {
					width: 350px;
					height: 200px;
					object-fit: scale-down;
				}
			}
		}

		// .swiper-button-prev {}

		// .swiper-button-next {}

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}

		// .scrollbar {}
	}
`,MS=()=>f.jsx(RS,{children:f.jsxs("div",{className:"wrapper",children:[f.jsxs("div",{className:"text",children:[f.jsx("h3",{children:"Formulário de contato"}),f.jsx("h2",{children:"Fale Com Nossa Agremiação!"}),f.jsx("p",{children:"Tire suas dúvidas com nosso time. Deixe suas informações de contato e será um prazer lhe retonar!"}),f.jsxs("ul",{className:"info",children:[f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-phone"}),f.jsx("span",{})," +55 (00) 0 0000-0000"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-envelope"}),f.jsx("span",{})," exemplo@academicos.com.br"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-map-location-dot"}),f.jsx("address",{children:"Rua do Império, nº 573; Santa Cruz, Rio de Janeiro - RJ; CEP 23.555-024"})]})]}),f.jsx("div",{className:"map",children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.902216920123!2d-43.69324992558163!3d-22.916977238233624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf7524c69eb5b%3A0xc5d324fb7fbbd336!2sR.%20do%20Imp%C3%A9rio%2C%20573%20-%20Santa%20Cruz%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023555-024!5e0!3m2!1spt-BR!2sbr!4v1698871972883!5m2!1spt-BR!2sbr",width:"600",height:"450",loading:"lazy"})})]}),f.jsx("div",{className:"form",children:f.jsxs("form",{action:"",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:"Nome:"}),f.jsx("input",{type:"text",name:"",id:"",placeholder:"Seu nome"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:"E-mail:"}),f.jsx("input",{type:"text",name:"",id:"",placeholder:"exemplo@gmail.com"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:"Telefone:"}),f.jsx("input",{type:"text",name:"",id:"",placeholder:"+00 (00) 0 0000-0000"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:"Assunto:"}),f.jsx("input",{type:"text",name:"",id:"",placeholder:"Assunto da mensagem"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:"Descrição:"}),f.jsx("textarea",{name:"",id:"",placeholder:"Como podemos te ajudar?"})]}),f.jsxs("div",{className:"agree-terms",children:[f.jsx("input",{type:"checkbox",name:"",id:"terms"}),f.jsxs("label",{htmlFor:"terms",children:[f.jsx("div",{className:"check",children:f.jsx(Hx,{})}),f.jsxs("span",{children:["Ao entrar em contato com a agremiação, seus dados pessoais fornecidos e o conteúdo e histórico da sua mensagem serão armazenados e poderão ser tratados e ultilizados pela agremiação. Ao enviar sua mensagem, você esta ciente e de acordo com estas condições, conforme nossos ",f.jsx("a",{href:"",children:"Termos de Uso"}),f.jsx("span",{children:" e "}),f.jsx("a",{href:"",children:"Política de Privacidade"}),"."]})]})]}),f.jsx("button",{type:"submit",children:"Enviar mensagem"})]})})]})}),RS=Te.section`
	background: linear-gradient(0deg, #0b1127 0%, #1f2a4b 100%);
	height: auto;
	padding: 70px 0 80px;

	* {
		/* outline: 1px dotted; */
		color: #ffffff;
	}

	.wrapper {
		> div {
			display: flex;
			justify-content: center;
			max-width: 1000px;
		}

		.text {
			grid-column: 2/7;
			flex-direction: column;

			> h3 {
				font-size: 1.2rem;
				color: var(--color-gray);
				font-family: Playpen Sans;
			}

			h2 {
				margin-bottom: 20px;
				font-size: 2.5rem;
			}

			> p {
				margin-bottom: 50px;
			}

			ul {
				margin-bottom: 50px;
				border-left: 3px solid var(--color-white);
				padding-left: 20px;

				li {
					margin: 10px 0;
					display: flex;

					// i {}

					span,
					address {
						margin-left: 10px;
						display: block;
					}
				}
			}

			.map {
				width: 100%;
				height: 400px;

				position: relative;

				iframe {
					width: 100%;
					height: 100%;
					border-radius: 10px 0px;
				}

				&::before,
				&::after {
					content: '';
					width: 100px;
					color: #fff;
					height: 100px;
					position: absolute;
					border: 10px solid var(--color-primary);
				}

				&::before {
					top: -30px;
					right: -30px;
					border-left: none;
					border-bottom: none;
				}

				&::after {
					bottom: -30px;
					left: -30px;
					border-right: none;
					border-top: none;
				}
			}
		}

		.form {
			align-items: center;
			grid-column: 8/12;

			form {
				width: 100%;

				> div {
					width: 100%;
					margin-bottom: 20px;

					label {
						display: block;
						margin-bottom: 10px;
						font-size: 1.2rem;
						font-weight: bold;
					}

					input[type='text'],
					textarea {
						background: #fff;
						width: 100%;
						height: 50px;
						font-size: 1.2rem;
						padding: 0 10px;
						color: var(--color-text-soft);
						border: 3px solid var(--color-gray);
						border-radius: 10px 0;

						&:focus {
							border: 3px solid var(--color-primary);
							border-radius: 0px 10px;
						}
					}

					textarea {
						padding: 10px;
						height: 180px;
						resize: none;
					}
				}

				div.agree-terms {
					display: flex;

					input[type='checkbox'] {
						display: none;

						+ label .check {
							display: flex;
							width: 20px;
							height: 20px;
							align-items: center;
							justify-content: center;
							border: 1px solid #000;
							background-color: #fff;
							border-radius: 4px;
							cursor: pointer;
						}

						&:checked + label .check {
							background-color: var(--color-primary);
							color: #fff;
							border: 1px solid #fff;
						}
					}

					label {
						position: relative;
						display: flex;
						justify-content: space-between;
						width: 100%;
						gap: 10px;

						span {
							font-size: 0.8rem;
							text-align: justify;
							font-weight: normal;
							color: var(--color-gray-soft);
							display: block;
							flex: 1;
							* {
								font-size: 0.8rem;
							}
							a {
								text-decoration: underline;
							}
							span {
								display: inline;
							}
						}
					}
				}

				button {
					width: 100%;
					height: 50px;
					background: var(--color-primary);
					color: var(--color-white);
					font-weight: bold;
					border-radius: 10px 0;
					font-size: 1.2rem;
					cursor: pointer;

					&:hover {
						background: var(--color-primary-soft);
						border-radius: 0px 10px;
					}
				}
			}
		}
	}
`;function $S(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}const DS=()=>f.jsx(FS,{children:f.jsxs("div",{className:"wrapper",children:[f.jsxs("section",{className:"contact",children:[f.jsxs("div",{children:[f.jsx(jx,{}),f.jsx("span",{children:"+55 (43) 9 3421-7348"})]}),f.jsxs("div",{children:[f.jsx($S,{}),f.jsx("span",{children:"gresasc@academicos.com"})]})]}),f.jsx("p",{children:"Siga-nos para ficar por dentro das novidades!"}),f.jsx("section",{className:"social-network",children:f.jsx("span",{children:"As Bruxas Estão Soltas!"})})]})}),FS=Te.section`
	background: var(--color-primary);
	height: 40px;
	width: 100%;

	* {
		color: #ffffff;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2%;

		> p {
			font-size: 0.8rem;

			&:hover {
				color: white;
			}
		}

		section {
			display: flex;

			&.contact {
				gap: 30px;

				div {
					display: flex;
					align-items: center;
					cursor: pointer;

					svg {
						margin-right: 5px;
					}

					span {
						font-size: 0.8rem;
					}

					&:hover {
						i,
						span {
							color: white;
						}
					}
				}
			}
			
			&.social-network {
				display: flex;
				align-items: center;
				justify-content: center;

				span {
					margin-right: 15px;
					font-size: 0.8rem;
				}

				a {
					margin: 0 3px;

					i {
						font-size: 1.2rem;
					}

					&:hover {
						i {
							color: white;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 880px) {
			p {
				display: none;
			}
		}

		@media (max-width: 650px) {
			.wrapper {
				section {
					&.contact {
						width: 100%;
						justify-content: space-evenly;
					}

					&.social-network {
						display: none;
					}
				}
			}
		}

		@media (max-width: 370px) {
			.wrapper {
				section {
					&.contact {
						div:nth-child(2) {
							display: none;
						}
					}
				}
			}
		}
	}
`,BS=()=>f.jsx(_c,{title:"Home Page",children:f.jsxs(VS,{children:[f.jsx($x,{}),f.jsx(DS,{}),f.jsx(Fx,{}),f.jsx(Yx,{}),f.jsx(zS,{}),f.jsx(Vx,{}),f.jsx(Xx,{}),f.jsx(MS,{})]})}),VS=Te.main`
	width: 100%;

	@media screen {
		@media (max-width: 1350px) {
			main {
				.cover {
					.wrapper > div {
						&.left {
							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 3.5rem;
								}

								p {
									font-size: 1rem;
								}
							}
						}
					}
				}
			}
		}

		@media (max-width: 1200px) {
			main {
				.cover {
					.wrapper > div {
						&.left {
							grid-column: 2/8;

							.container {
								p {
									width: 90%;
								}
							}
						}

						&.right {
							grid-column: 9/12;

							.img {
								width: 100%;

								img {
									width: 150%;
								}
							}
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			main {
				.cover .wrapper {
					> div {
						&.left {
							grid-column: 2/8;

							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 3rem;
								}
							}
						}

						&.right {
							grid-column: 9/12;

							.img {
								width: 100%;

								img {
									width: 150%;
								}
							}
						}
					}
				}

				.details {
					ul {
						grid-template-columns: repeat(2, 1fr);
						gap: 100px 150px;
					}
				}
			}

			main .banner {
				height: 600px;
			}

			main .about-school .wrapper .text-container {
				grid-column: 2/12;
				margin-bottom: 150px;
			}

			main .about-school .wrapper .img-container {
				grid-column: 2/12;
			}

			main > .contact .wrapper > .text {
				grid-column: 2/12;
				margin-bottom: 100px;
			}

			main > .contact .wrapper > .form {
				grid-column: 2/12;
			}
		}

		@media (max-width: 1100px) {
			main {
				.plot .wrapper {
					margin-bottom: 50px;

					.description {
						grid-column: 2/12;
						margin-bottom: 70px;
					}

					.disc-cover,
					.audio {
						grid-column: 2/12;
					}
				}
			}
		}

		@media (max-width: 880px) {
			main {
				.cover .wrapper {
					> div {
						&.left {
							grid-column: 2/12;

							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 2.8rem;
								}

								p {
									width: 100%;
								}

								> a {
									padding: 15px 50px;
									font-size: 1.1rem;
								}

								.social-links {
									display: flex;
								}
							}
						}

						&.right {
							display: none;
						}
					}
				}

				.nav-info {
					justify-content: space-evenly;

					p {
						display: none;
					}
				}
			}
		}

		@media (max-width: 650px) {
			main {
				.nav-info .wrapper {
					section {
						&.contact {
							width: 100%;
							justify-content: space-evenly;
						}

						&.social-network {
							display: none;
						}
					}
				}

				.banner {
					height: 400px;
					margin-bottom: 80px;
				}

				.sponsors {
					h1 {
						font-size: 1.5rem;
					}
				}

				.details {
					ul {
						grid-template-columns: repeat(1, 1fr);
						gap: 100px 0;
					}
				}
			}
		}

		@media (max-width: 370px) {
			main {
				.nav-info .wrapper {
					section {
						&.contact {
							div:nth-child(2) {
								display: none;
							}
						}
					}
				}
			}
		}
	}
`,Ae=({label:e="Label",error:t="",name:n="name",placeholder:r="",type:i="text"})=>{const[s,a]=b.useState(""),o=l=>{console.log("handleInputChange"),a(l.target.value),console.log(l.target.value)};return f.jsxs(US,{children:[f.jsx("label",{className:"label",htmlFor:n,children:e}),f.jsx("input",{type:i,placeholder:`${r}`,name:n,id:n,onChange:l=>o(l),value:s}),f.jsx("span",{className:"error-message",children:t})]})},US=Te.div`
	width: 90%;
	margin: 0 auto 20px;
	.label {
		margin-bottom: 10px;
		display: block;
	}
	input {
		display: block;
		width: 100%;
		height: 50px;
		border: 1px solid #ccc;
		border-radius: 5px;
		/* background-color: #e2e2e2; */
		padding: 0 10px;
		font-size: 1.2rem;
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`,xf=({label:e="Label",error:t="",name:n="name",placeholder:r="Selecione seu dado",options:i=[],onChange:s})=>{const[a,o]=b.useState(""),l=u=>{o(u.target.value),s&&s(u)};return f.jsxs(HS,{children:[f.jsx("label",{className:"label",htmlFor:n,children:e}),f.jsxs("select",{name:n,id:n,value:a,onChange:l,children:[f.jsx("option",{value:"",disabled:!0,children:r}),i.map((u,c)=>f.jsx("option",{value:u,children:u},c))]}),f.jsx("span",{className:"error-message",children:t})]})},HS=Te.div`
	width: 90%;
	margin: 0 auto 20px;
	.label {
		margin-bottom: 10px;
		display: block;
	}
	select {
		display: block;
		width: 100%;
		height: 50px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 0 10px;
		font-size: 1.2rem;

		cursor: pointer;
		option {
			cursor: pointer;
			&:hover {
				background: #ccc;
			}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`,wf=({error:e="",name:t="name",placeholder:n="Selecione seu dado",radios:r=[],onChange:i,additionalInput:s})=>{const[a,o]=b.useState(""),l=u=>{o(u.target.value),i&&i(u)};return f.jsxs(GS,{children:[f.jsx("span",{className:"label",children:n}),f.jsx("div",{className:"radios",children:r.map((u,c)=>f.jsxs("div",{className:"radio",children:[f.jsx("input",{type:"radio",name:t,id:`${t}-${c}`,value:u.value,checked:a===u.value,onChange:l}),f.jsx("label",{htmlFor:`${t}-${c}`,children:u.label})]},c))}),f.jsx("div",{className:"input",children:s&&typeof s=="object"&&a===s.condition&&f.jsx(Ae,{name:s.name,label:s.label,placeholder:s.placeholder,type:s.type})}),f.jsx("span",{className:"error-message",children:e})]})},GS=Te.div`
	width: 90%;
	margin: 0 auto 0px;
	.label {
		margin-bottom: 10px;
		display: block;
		font-size: 1.2rem;
	}
	.radios {
		display: block;
		padding: 0 10px;
		margin-bottom: 20px;

		.radio {
			display: inline-block;
			margin-right: 20px;

			input {
				margin-right: 5px;
				cursor: pointer;
			}
			label {
				font-size: 1.2rem;
				cursor: pointer;
			}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`,WS=()=>{const[e,t]=b.useState(5),[n]=b.useState([f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Dados Pessoais"}),f.jsx(Ae,{name:"name",label:"Nome:",placeholder:"Ex. Carlos"}),f.jsx(Ae,{name:"birth",label:"Data de Nascimento:",type:"date"}),f.jsx(Ae,{name:"cpf",label:"CPF:",placeholder:"Ex. 012.345.567-91"})]}),f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Dados de Contato"}),f.jsx(Ae,{name:"email",label:"Email:",placeholder:"Ex. carlos@academicos.com.br",type:"email"}),f.jsx(Ae,{name:"tell",label:"Telefone:",placeholder:"Ex. +00 (00) 0 0000-0000",type:"tell"})]}),f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Endereço"}),f.jsx(Ae,{name:"country",label:"País:",placeholder:"Ex. Brasil"}),f.jsx(xf,{name:"state",label:"Estado:",placeholder:"Selecione seu estado",options:["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]}),f.jsx(Ae,{name:"city",label:"Cidade:",placeholder:"Ex. Juatina"}),f.jsx(Ae,{name:"neighborhood",label:"Bairro:",placeholder:"Ex. Centro"}),f.jsx(Ae,{name:"street",label:"Logradouro:",placeholder:"Ex. Rua Soares"}),f.jsx(Ae,{name:"number",label:"Número:",placeholder:"Ex. 123"}),f.jsx(Ae,{name:"complement",label:"Complemento:",placeholder:"Ex. Apt. 456"}),f.jsx(Ae,{name:"cep",label:"CEP:",placeholder:"Ex. 12345-678"})]}),f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Perfil"}),f.jsx(Ae,{name:"height",label:"Altura:",placeholder:"Ex. 1.75m"}),f.jsx(Ae,{name:"weight",label:"Peso:",placeholder:"Ex. 65Kg"}),f.jsx(xf,{name:"mannequin",label:"Manequim:",placeholder:"Selecione seu manequim",options:["PP","P","M","G","GG","XXG"]})]}),f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Sobre Você"}),f.jsx(wf,{name:"experience",placeholder:"Você possui experiência em desfiles?",radios:[{value:"yes",label:"Sim"},{value:"no",label:"Não"}]}),f.jsx(wf,{name:"fanMember",placeholder:"Você é sócio torcedor da escola?",radios:[{value:"yes",label:"Sim"},{value:"no",label:"Não"}],additionalInput:{condition:"yes",name:"experienceTime",label:"Número de Inscrição:",placeholder:"Ex. 123456789",type:"text"}})]})]),r=n.length,i=o=>{o.preventDefault(),t(l=>Math.max(l-1,1))},s=o=>{o.preventDefault(),e!==r&&t(l=>Math.min(l+1,r))},a=o=>{o.preventDefault(),console.log("Submit")};return f.jsx(ZS,{children:f.jsxs("form",{onSubmit:a,children:[n[e-1],f.jsxs("div",{className:"pagination",children:[f.jsxs("button",{onClick:i,disabled:e===1,className:"button-prev",children:[f.jsx(bx,{}),f.jsx("span",{children:"Anterior"})]}),f.jsx("div",{className:"dots",children:[...Array(r)].map((o,l)=>f.jsx("span",{className:e===l+1?"active":""},l))}),f.jsx("button",{onClick:s,type:e===r?"submit":"button",children:e===r?f.jsx("span",{children:"Finalizar"}):f.jsxs(f.Fragment,{children:[f.jsx("span",{children:"Próximo"}),f.jsx(Px,{})]})})]})]})})},ZS=Te.main`
	margin: 150px 0 100px;
	display: flex;
	justify-content: center;

	* {
		/* outline: 1px dotted; */
	}

	form {
		width: 80%;
		min-width: 300px;
		max-width: 800px;
		padding-bottom: 50px;

		fieldset {
			border: 1px solid #ccc;
			border-radius: 10px;
			margin-bottom: 50px;
			padding: 20px 0;

			legend {
				font-size: 30px;
				font-weight: bold;
				margin: 0 0 20px 25px;
				padding: 0 10px;
			}
		}
		.pagination {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-content: center;
		}
		span {
			font-size: 20px;
			font-weight: bold;
			color: var(--color-primary-soft);
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.dots {
			display: flex;
			justify-content: center;
			align-items: center;

			span {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #ccc;
				margin: 0 5px;

				&.active {
					background-color: var(--color-primary-soft);
				}
			}
		}

		button {
			padding: 10px;
			cursor: pointer;
			padding: 10px 20px;
			background-color: var(--color-primary-soft);
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;

			* {
				font-size: 20px;
				font-weight: normal;
				color: var(--color-white);
			}

			&:disabled,
			&:disabled * {
				color: var(--color-white);
				opacity: 0.5;
				cursor: not-allowed;
				background: #a5a5a5;
			}
		}
	}
	@media screen {
		@media (max-width: 768px) {
			form {
				button {
					* {
						font-size: 16px;
					}
				}
			}
		}
		@media (max-width: 500px) {
			form {
				button.button-prev {
					span {
						display: none;
					}
				}
			}
		}
	}
`,YS="/assets/funny-404-error-page-design-GaDX6q99.gif",qS=()=>f.jsxs(XS,{children:[f.jsx("h1",{children:"404"}),f.jsx("h2",{children:"Ops! Parece que você está perdido!"}),f.jsx("h3",{children:"Esta página não esta disponível..."}),f.jsx("a",{href:"/",children:"Voltar ao Inicio"})]}),XS=Te.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	background-image: url(${YS});
	background-repeat: no-repeat;
	background-position: center 50%;

	* {
		text-align: center;
	}

	h1 {
		color: var(--color-gray);
		font-size: 7rem;
		margin-bottom: 320px;
		font-family: 'Courier New', Courier, monospace;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		&::after {
			content: 'Error: Page Not Found';
			width: 150%;
			bottom: 0;
			position: absolute;
			text-align: center;
			display: block;
			color: var(--color-text-soft);
			font-size: 1.5rem;
		}
	}

	h2 {
		color: var(--color-text);
		font-size: min(3rem, 5vw);
		margin-bottom: 10px;
	}

	h3 {
		color: var(--color-text-soft);
		font-size: min(2rem, 4vw);
		margin-bottom: 20px;
	}

	a {
		display: block;
		background: var(--color-primary-soft);
		padding: 10px 20px;
		color: var(--color-white);
		font-weight: bold;
		border-radius: 10px 0px;

		&:hover {
			border-radius: 0px 10px;
		}
	}
`;var te;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const s={};for(const a of i)s[a]=a;return s},e.getValidEnumValues=i=>{const s=e.objectKeys(i).filter(o=>typeof i[i[o]]!="number"),a={};for(const o of s)a[o]=i[o];return e.objectValues(a)},e.objectValues=i=>e.objectKeys(i).map(function(s){return i[s]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&s.push(a);return s},e.find=(i,s)=>{for(const a of i)if(s(a))return a},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}e.joinValues=r,e.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(te||(te={}));var yu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(yu||(yu={}));const D=te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),dn=e=>{switch(typeof e){case"undefined":return D.undefined;case"string":return D.string;case"number":return isNaN(e)?D.nan:D.number;case"boolean":return D.boolean;case"function":return D.function;case"bigint":return D.bigint;case"symbol":return D.symbol;case"object":return Array.isArray(e)?D.array:e===null?D.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?D.promise:typeof Map<"u"&&e instanceof Map?D.map:typeof Set<"u"&&e instanceof Set?D.set:typeof Date<"u"&&e instanceof Date?D.date:D.object;default:return D.unknown}},M=te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),QS=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Et extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(s){return s.message},r={_errors:[]},i=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(i);else if(a.code==="invalid_return_type")i(a.returnTypeError);else if(a.code==="invalid_arguments")i(a.argumentsError);else if(a.path.length===0)r._errors.push(n(a));else{let o=r,l=0;for(;l<a.path.length;){const u=a.path[l];l===a.path.length-1?(o[u]=o[u]||{_errors:[]},o[u]._errors.push(n(a))):o[u]=o[u]||{_errors:[]},o=o[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}Et.create=e=>new Et(e);const qi=(e,t)=>{let n;switch(e.code){case M.invalid_type:e.received===D.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case M.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,te.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:n=`Unrecognized key(s) in object: ${te.joinValues(e.keys,", ")}`;break;case M.invalid_union:n="Invalid input";break;case M.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${te.joinValues(e.options)}`;break;case M.invalid_enum_value:n=`Invalid enum value. Expected ${te.joinValues(e.options)}, received '${e.received}'`;break;case M.invalid_arguments:n="Invalid function arguments";break;case M.invalid_return_type:n="Invalid function return type";break;case M.invalid_date:n="Invalid date";break;case M.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:te.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case M.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case M.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case M.custom:n="Invalid input";break;case M.invalid_intersection_types:n="Intersection results could not be merged";break;case M.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case M.not_finite:n="Number must be finite";break;default:n=t.defaultError,te.assertNever(e)}return{message:n}};let Fm=qi;function KS(e){Fm=e}function $a(){return Fm}const Da=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,s=[...n,...i.path||[]],a={...i,path:s};let o="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)o=u(a,{data:t,defaultError:o}).message;return{...i,path:s,message:i.message||o}},JS=[];function F(e,t){const n=Da({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,$a(),qi].filter(r=>!!r)});e.common.issues.push(n)}class ze{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return G;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return ze.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:s,value:a}=i;if(s.status==="aborted"||a.status==="aborted")return G;s.status==="dirty"&&t.dirty(),a.status==="dirty"&&t.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||i.alwaysSet)&&(r[s.value]=a.value)}return{status:t.value,value:r}}}const G=Object.freeze({status:"aborted"}),Bm=e=>({status:"dirty",value:e}),$e=e=>({status:"valid",value:e}),xu=e=>e.status==="aborted",wu=e=>e.status==="dirty",Xi=e=>e.status==="valid",Fa=e=>typeof Promise<"u"&&e instanceof Promise;var U;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(U||(U={}));class At{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Sf=(e,t)=>{if(Xi(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Et(e.common.issues);return this._error=n,this._error}}};function Z(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(a,o)=>a.code!=="invalid_type"?{message:o.defaultError}:typeof o.data>"u"?{message:r??o.defaultError}:{message:n??o.defaultError},description:i}}class X{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return dn(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:dn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new ze,ctx:{common:t.parent.common,data:t.data,parsedType:dn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Fa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:dn(t)},s=this._parseSync({data:t,path:i.path,parent:i});return Sf(i,s)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:dn(t)},i=this._parse({data:t,path:r.path,parent:r}),s=await(Fa(i)?i:Promise.resolve(i));return Sf(r,s)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,s)=>{const a=t(i),o=()=>s.addIssue({code:M.custom,...r(i)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new _t({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Zt.create(this,this._def)}nullable(){return rr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Tt.create(this,this._def)}promise(){return Zr.create(this,this._def)}or(t){return es.create([this,t],this._def)}and(t){return ts.create(this,t,this._def)}transform(t){return new _t({...Z(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new as({...Z(this._def),innerType:this,defaultValue:n,typeName:H.ZodDefault})}brand(){return new Um({typeName:H.ZodBranded,type:this,...Z(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ha({...Z(this._def),innerType:this,catchValue:n,typeName:H.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return hs.create(this,t)}readonly(){return Wa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const eE=/^c[^\s-]{8,}$/i,tE=/^[a-z][a-z0-9]*$/,nE=/^[0-9A-HJKMNP-TV-Z]{26}$/,rE=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,iE=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,sE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let sl;const aE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,oE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,lE=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function uE(e,t){return!!((t==="v4"||!t)&&aE.test(e)||(t==="v6"||!t)&&oE.test(e))}class yt extends X{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==D.string){const s=this._getOrReturnCtx(t);return F(s,{code:M.invalid_type,expected:D.string,received:s.parsedType}),G}const r=new ze;let i;for(const s of this._def.checks)if(s.kind==="min")t.data.length<s.value&&(i=this._getOrReturnCtx(t,i),F(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")t.data.length>s.value&&(i=this._getOrReturnCtx(t,i),F(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const a=t.data.length>s.value,o=t.data.length<s.value;(a||o)&&(i=this._getOrReturnCtx(t,i),a?F(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&F(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")iE.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"email",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")sl||(sl=new RegExp(sE,"u")),sl.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"emoji",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")rE.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"uuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")eE.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"cuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")tE.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"cuid2",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")nE.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"ulid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),F(i,{validation:"url",code:M.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"regex",code:M.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?t.data=t.data.trim():s.kind==="includes"?t.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(t,i),F(i,{code:M.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?t.data=t.data.toLowerCase():s.kind==="toUpperCase"?t.data=t.data.toUpperCase():s.kind==="startsWith"?t.data.startsWith(s.value)||(i=this._getOrReturnCtx(t,i),F(i,{code:M.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?t.data.endsWith(s.value)||(i=this._getOrReturnCtx(t,i),F(i,{code:M.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?lE(s).test(t.data)||(i=this._getOrReturnCtx(t,i),F(i,{code:M.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="ip"?uE(t.data,s.version)||(i=this._getOrReturnCtx(t,i),F(i,{validation:"ip",code:M.invalid_string,message:s.message}),r.dirty()):te.assertNever(s);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(i=>t.test(i),{validation:n,code:M.invalid_string,...U.errToObj(r)})}_addCheck(t){return new yt({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...U.errToObj(t)})}url(t){return this._addCheck({kind:"url",...U.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...U.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...U.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...U.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...U.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...U.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...U.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...U.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...U.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...U.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...U.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...U.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...U.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...U.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...U.errToObj(n)})}nonempty(t){return this.min(1,U.errToObj(t))}trim(){return new yt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new yt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new yt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}yt.create=e=>{var t;return new yt({checks:[],typeName:H.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Z(e)})};function cE(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(e.toFixed(i).replace(".","")),a=parseInt(t.toFixed(i).replace(".",""));return s%a/Math.pow(10,i)}class Pn extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==D.number){const s=this._getOrReturnCtx(t);return F(s,{code:M.invalid_type,expected:D.number,received:s.parsedType}),G}let r;const i=new ze;for(const s of this._def.checks)s.kind==="int"?te.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),F(r,{code:M.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?cE(t.data,s.value)!==0&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),F(r,{code:M.not_finite,message:s.message}),i.dirty()):te.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,U.toString(n))}gt(t,n){return this.setLimit("min",t,!1,U.toString(n))}lte(t,n){return this.setLimit("max",t,!0,U.toString(n))}lt(t,n){return this.setLimit("max",t,!1,U.toString(n))}setLimit(t,n,r,i){return new Pn({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(t){return new Pn({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:U.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:U.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:U.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:U.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:U.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:U.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:U.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:U.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:U.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&te.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Pn.create=e=>new Pn({checks:[],typeName:H.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Z(e)});class jn extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==D.bigint){const s=this._getOrReturnCtx(t);return F(s,{code:M.invalid_type,expected:D.bigint,received:s.parsedType}),G}let r;const i=new ze;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?t.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),F(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):te.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,U.toString(n))}gt(t,n){return this.setLimit("min",t,!1,U.toString(n))}lte(t,n){return this.setLimit("max",t,!0,U.toString(n))}lt(t,n){return this.setLimit("max",t,!1,U.toString(n))}setLimit(t,n,r,i){return new jn({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:U.toString(i)}]})}_addCheck(t){return new jn({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:U.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:U.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:U.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:U.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:U.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}jn.create=e=>{var t;return new jn({checks:[],typeName:H.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Z(e)})};class Qi extends X{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==D.boolean){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.boolean,received:r.parsedType}),G}return $e(t.data)}}Qi.create=e=>new Qi({typeName:H.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Z(e)});class tr extends X{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==D.date){const s=this._getOrReturnCtx(t);return F(s,{code:M.invalid_type,expected:D.date,received:s.parsedType}),G}if(isNaN(t.data.getTime())){const s=this._getOrReturnCtx(t);return F(s,{code:M.invalid_date}),G}const r=new ze;let i;for(const s of this._def.checks)s.kind==="min"?t.data.getTime()<s.value&&(i=this._getOrReturnCtx(t,i),F(i,{code:M.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?t.data.getTime()>s.value&&(i=this._getOrReturnCtx(t,i),F(i,{code:M.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):te.assertNever(s);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new tr({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:U.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:U.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}tr.create=e=>new tr({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:H.ZodDate,...Z(e)});class Ba extends X{_parse(t){if(this._getType(t)!==D.symbol){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.symbol,received:r.parsedType}),G}return $e(t.data)}}Ba.create=e=>new Ba({typeName:H.ZodSymbol,...Z(e)});class Ki extends X{_parse(t){if(this._getType(t)!==D.undefined){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.undefined,received:r.parsedType}),G}return $e(t.data)}}Ki.create=e=>new Ki({typeName:H.ZodUndefined,...Z(e)});class Ji extends X{_parse(t){if(this._getType(t)!==D.null){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.null,received:r.parsedType}),G}return $e(t.data)}}Ji.create=e=>new Ji({typeName:H.ZodNull,...Z(e)});class Wr extends X{constructor(){super(...arguments),this._any=!0}_parse(t){return $e(t.data)}}Wr.create=e=>new Wr({typeName:H.ZodAny,...Z(e)});class Yn extends X{constructor(){super(...arguments),this._unknown=!0}_parse(t){return $e(t.data)}}Yn.create=e=>new Yn({typeName:H.ZodUnknown,...Z(e)});class Kt extends X{_parse(t){const n=this._getOrReturnCtx(t);return F(n,{code:M.invalid_type,expected:D.never,received:n.parsedType}),G}}Kt.create=e=>new Kt({typeName:H.ZodNever,...Z(e)});class Va extends X{_parse(t){if(this._getType(t)!==D.undefined){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.void,received:r.parsedType}),G}return $e(t.data)}}Va.create=e=>new Va({typeName:H.ZodVoid,...Z(e)});class Tt extends X{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==D.array)return F(n,{code:M.invalid_type,expected:D.array,received:n.parsedType}),G;if(i.exactLength!==null){const a=n.data.length>i.exactLength.value,o=n.data.length<i.exactLength.value;(a||o)&&(F(n,{code:a?M.too_big:M.too_small,minimum:o?i.exactLength.value:void 0,maximum:a?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(F(n,{code:M.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(F(n,{code:M.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((a,o)=>i.type._parseAsync(new At(n,a,n.path,o)))).then(a=>ze.mergeArray(r,a));const s=[...n.data].map((a,o)=>i.type._parseSync(new At(n,a,n.path,o)));return ze.mergeArray(r,s)}get element(){return this._def.type}min(t,n){return new Tt({...this._def,minLength:{value:t,message:U.toString(n)}})}max(t,n){return new Tt({...this._def,maxLength:{value:t,message:U.toString(n)}})}length(t,n){return new Tt({...this._def,exactLength:{value:t,message:U.toString(n)}})}nonempty(t){return this.min(1,t)}}Tt.create=(e,t)=>new Tt({type:e,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...Z(t)});function cr(e){if(e instanceof fe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Zt.create(cr(r))}return new fe({...e._def,shape:()=>t})}else return e instanceof Tt?new Tt({...e._def,type:cr(e.element)}):e instanceof Zt?Zt.create(cr(e.unwrap())):e instanceof rr?rr.create(cr(e.unwrap())):e instanceof Mt?Mt.create(e.items.map(t=>cr(t))):e}class fe extends X{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=te.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==D.object){const u=this._getOrReturnCtx(t);return F(u,{code:M.invalid_type,expected:D.object,received:u.parsedType}),G}const{status:r,ctx:i}=this._processInputParams(t),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Kt&&this._def.unknownKeys==="strip"))for(const u in i.data)a.includes(u)||o.push(u);const l=[];for(const u of a){const c=s[u],p=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new At(i,p,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof Kt){const u=this._def.unknownKeys;if(u==="passthrough")for(const c of o)l.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(u==="strict")o.length>0&&(F(i,{code:M.unrecognized_keys,keys:o}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const c of o){const p=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new At(i,p,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const c of l){const p=await c.key;u.push({key:p,value:await c.value,alwaysSet:c.alwaysSet})}return u}).then(u=>ze.mergeObjectSync(r,u)):ze.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return U.errToObj,new fe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,s,a,o;const l=(a=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&a!==void 0?a:r.defaultError;return n.code==="unrecognized_keys"?{message:(o=U.errToObj(t).message)!==null&&o!==void 0?o:l}:{message:l}}}:{}})}strip(){return new fe({...this._def,unknownKeys:"strip"})}passthrough(){return new fe({...this._def,unknownKeys:"passthrough"})}extend(t){return new fe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new fe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:H.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new fe({...this._def,catchall:t})}pick(t){const n={};return te.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new fe({...this._def,shape:()=>n})}omit(t){const n={};return te.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new fe({...this._def,shape:()=>n})}deepPartial(){return cr(this)}partial(t){const n={};return te.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new fe({...this._def,shape:()=>n})}required(t){const n={};return te.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof Zt;)s=s._def.innerType;n[r]=s}}),new fe({...this._def,shape:()=>n})}keyof(){return Vm(te.objectKeys(this.shape))}}fe.create=(e,t)=>new fe({shape:()=>e,unknownKeys:"strip",catchall:Kt.create(),typeName:H.ZodObject,...Z(t)});fe.strictCreate=(e,t)=>new fe({shape:()=>e,unknownKeys:"strict",catchall:Kt.create(),typeName:H.ZodObject,...Z(t)});fe.lazycreate=(e,t)=>new fe({shape:e,unknownKeys:"strip",catchall:Kt.create(),typeName:H.ZodObject,...Z(t)});class es extends X{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Et(o.ctx.common.issues));return F(n,{code:M.invalid_union,unionErrors:a}),G}if(n.common.async)return Promise.all(r.map(async s=>{const a={...n,common:{...n.common,issues:[]},parent:null};return{result:await s._parseAsync({data:n.data,path:n.path,parent:a}),ctx:a}})).then(i);{let s;const a=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},c=l._parseSync({data:n.data,path:n.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!s&&(s={result:c,ctx:u}),u.common.issues.length&&a.push(u.common.issues)}if(s)return n.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(l=>new Et(l));return F(n,{code:M.invalid_union,unionErrors:o}),G}}get options(){return this._def.options}}es.create=(e,t)=>new es({options:e,typeName:H.ZodUnion,...Z(t)});const ta=e=>e instanceof rs?ta(e.schema):e instanceof _t?ta(e.innerType()):e instanceof is?[e.value]:e instanceof Nn?e.options:e instanceof ss?Object.keys(e.enum):e instanceof as?ta(e._def.innerType):e instanceof Ki?[void 0]:e instanceof Ji?[null]:null;class xo extends X{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==D.object)return F(n,{code:M.invalid_type,expected:D.object,received:n.parsedType}),G;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):(F(n,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),G)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const s of n){const a=ta(s.shape[t]);if(!a)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const o of a){if(i.has(o))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);i.set(o,s)}}return new xo({typeName:H.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Z(r)})}}function Su(e,t){const n=dn(e),r=dn(t);if(e===t)return{valid:!0,data:e};if(n===D.object&&r===D.object){const i=te.objectKeys(t),s=te.objectKeys(e).filter(o=>i.indexOf(o)!==-1),a={...e,...t};for(const o of s){const l=Su(e[o],t[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(n===D.array&&r===D.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let s=0;s<e.length;s++){const a=e[s],o=t[s],l=Su(a,o);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===D.date&&r===D.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ts extends X{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(s,a)=>{if(xu(s)||xu(a))return G;const o=Su(s.value,a.value);return o.valid?((wu(s)||wu(a))&&n.dirty(),{status:n.value,value:o.data}):(F(r,{code:M.invalid_intersection_types}),G)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([s,a])=>i(s,a)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ts.create=(e,t,n)=>new ts({left:e,right:t,typeName:H.ZodIntersection,...Z(n)});class Mt extends X{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==D.array)return F(r,{code:M.invalid_type,expected:D.array,received:r.parsedType}),G;if(r.data.length<this._def.items.length)return F(r,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),G;!this._def.rest&&r.data.length>this._def.items.length&&(F(r,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new At(r,a,r.path,o)):null}).filter(a=>!!a);return r.common.async?Promise.all(s).then(a=>ze.mergeArray(n,a)):ze.mergeArray(n,s)}get items(){return this._def.items}rest(t){return new Mt({...this._def,rest:t})}}Mt.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Mt({items:e,typeName:H.ZodTuple,rest:null,...Z(t)})};class ns extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==D.object)return F(r,{code:M.invalid_type,expected:D.object,received:r.parsedType}),G;const i=[],s=this._def.keyType,a=this._def.valueType;for(const o in r.data)i.push({key:s._parse(new At(r,o,r.path,o)),value:a._parse(new At(r,r.data[o],r.path,o))});return r.common.async?ze.mergeObjectAsync(n,i):ze.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof X?new ns({keyType:t,valueType:n,typeName:H.ZodRecord,...Z(r)}):new ns({keyType:yt.create(),valueType:t,typeName:H.ZodRecord,...Z(n)})}}class Ua extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==D.map)return F(r,{code:M.invalid_type,expected:D.map,received:r.parsedType}),G;const i=this._def.keyType,s=this._def.valueType,a=[...r.data.entries()].map(([o,l],u)=>({key:i._parse(new At(r,o,r.path,[u,"key"])),value:s._parse(new At(r,l,r.path,[u,"value"]))}));if(r.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return G;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),o.set(u.value,c.value)}return{status:n.value,value:o}})}else{const o=new Map;for(const l of a){const u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return G;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),o.set(u.value,c.value)}return{status:n.value,value:o}}}}Ua.create=(e,t,n)=>new Ua({valueType:t,keyType:e,typeName:H.ZodMap,...Z(n)});class nr extends X{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==D.set)return F(r,{code:M.invalid_type,expected:D.set,received:r.parsedType}),G;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(F(r,{code:M.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(F(r,{code:M.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function a(l){const u=new Set;for(const c of l){if(c.status==="aborted")return G;c.status==="dirty"&&n.dirty(),u.add(c.value)}return{status:n.value,value:u}}const o=[...r.data.values()].map((l,u)=>s._parse(new At(r,l,r.path,u)));return r.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(t,n){return new nr({...this._def,minSize:{value:t,message:U.toString(n)}})}max(t,n){return new nr({...this._def,maxSize:{value:t,message:U.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}nr.create=(e,t)=>new nr({valueType:e,minSize:null,maxSize:null,typeName:H.ZodSet,...Z(t)});class Lr extends X{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==D.function)return F(n,{code:M.invalid_type,expected:D.function,received:n.parsedType}),G;function r(o,l){return Da({data:o,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,$a(),qi].filter(u=>!!u),issueData:{code:M.invalid_arguments,argumentsError:l}})}function i(o,l){return Da({data:o,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,$a(),qi].filter(u=>!!u),issueData:{code:M.invalid_return_type,returnTypeError:l}})}const s={errorMap:n.common.contextualErrorMap},a=n.data;if(this._def.returns instanceof Zr){const o=this;return $e(async function(...l){const u=new Et([]),c=await o._def.args.parseAsync(l,s).catch(v=>{throw u.addIssue(r(l,v)),u}),p=await Reflect.apply(a,this,c);return await o._def.returns._def.type.parseAsync(p,s).catch(v=>{throw u.addIssue(i(p,v)),u})})}else{const o=this;return $e(function(...l){const u=o._def.args.safeParse(l,s);if(!u.success)throw new Et([r(l,u.error)]);const c=Reflect.apply(a,this,u.data),p=o._def.returns.safeParse(c,s);if(!p.success)throw new Et([i(c,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Lr({...this._def,args:Mt.create(t).rest(Yn.create())})}returns(t){return new Lr({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Lr({args:t||Mt.create([]).rest(Yn.create()),returns:n||Yn.create(),typeName:H.ZodFunction,...Z(r)})}}class rs extends X{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}rs.create=(e,t)=>new rs({getter:e,typeName:H.ZodLazy,...Z(t)});class is extends X{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return F(n,{received:n.data,code:M.invalid_literal,expected:this._def.value}),G}return{status:"valid",value:t.data}}get value(){return this._def.value}}is.create=(e,t)=>new is({value:e,typeName:H.ZodLiteral,...Z(t)});function Vm(e,t){return new Nn({values:e,typeName:H.ZodEnum,...Z(t)})}class Nn extends X{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return F(n,{expected:te.joinValues(r),received:n.parsedType,code:M.invalid_type}),G}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return F(n,{received:n.data,code:M.invalid_enum_value,options:r}),G}return $e(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Nn.create(t)}exclude(t){return Nn.create(this.options.filter(n=>!t.includes(n)))}}Nn.create=Vm;class ss extends X{_parse(t){const n=te.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==D.string&&r.parsedType!==D.number){const i=te.objectValues(n);return F(r,{expected:te.joinValues(i),received:r.parsedType,code:M.invalid_type}),G}if(n.indexOf(t.data)===-1){const i=te.objectValues(n);return F(r,{received:r.data,code:M.invalid_enum_value,options:i}),G}return $e(t.data)}get enum(){return this._def.values}}ss.create=(e,t)=>new ss({values:e,typeName:H.ZodNativeEnum,...Z(t)});class Zr extends X{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==D.promise&&n.common.async===!1)return F(n,{code:M.invalid_type,expected:D.promise,received:n.parsedType}),G;const r=n.parsedType===D.promise?n.data:Promise.resolve(n.data);return $e(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Zr.create=(e,t)=>new Zr({type:e,typeName:H.ZodPromise,...Z(t)});class _t extends X{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null,s={addIssue:a=>{F(r,a),a.fatal?n.abort():n.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="preprocess"){const a=i.transform(r.data,s);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(a).then(o=>this._def.schema._parseAsync({data:o,path:r.path,parent:r})):this._def.schema._parseSync({data:a,path:r.path,parent:r})}if(i.type==="refinement"){const a=o=>{const l=i.refinement(o,s);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?G:(o.status==="dirty"&&n.dirty(),a(o.value),{status:n.value,value:o.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>o.status==="aborted"?G:(o.status==="dirty"&&n.dirty(),a(o.value).then(()=>({status:n.value,value:o.value}))))}if(i.type==="transform")if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Xi(a))return a;const o=i.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:o}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>Xi(a)?Promise.resolve(i.transform(a.value,s)).then(o=>({status:n.value,value:o})):a);te.assertNever(i)}}_t.create=(e,t,n)=>new _t({schema:e,typeName:H.ZodEffects,effect:t,...Z(n)});_t.createWithPreprocess=(e,t,n)=>new _t({schema:t,effect:{type:"preprocess",transform:e},typeName:H.ZodEffects,...Z(n)});class Zt extends X{_parse(t){return this._getType(t)===D.undefined?$e(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Zt.create=(e,t)=>new Zt({innerType:e,typeName:H.ZodOptional,...Z(t)});class rr extends X{_parse(t){return this._getType(t)===D.null?$e(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}rr.create=(e,t)=>new rr({innerType:e,typeName:H.ZodNullable,...Z(t)});class as extends X{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===D.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}as.create=(e,t)=>new as({innerType:e,typeName:H.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Z(t)});class Ha extends X{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Fa(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Et(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Et(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Ha.create=(e,t)=>new Ha({innerType:e,typeName:H.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Z(t)});class Ga extends X{_parse(t){if(this._getType(t)!==D.nan){const r=this._getOrReturnCtx(t);return F(r,{code:M.invalid_type,expected:D.nan,received:r.parsedType}),G}return{status:"valid",value:t.data}}}Ga.create=e=>new Ga({typeName:H.ZodNaN,...Z(e)});const dE=Symbol("zod_brand");class Um extends X{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class hs extends X{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?G:s.status==="dirty"?(n.dirty(),Bm(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?G:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new hs({in:t,out:n,typeName:H.ZodPipeline})}}class Wa extends X{_parse(t){const n=this._def.innerType._parse(t);return Xi(n)&&(n.value=Object.freeze(n.value)),n}}Wa.create=(e,t)=>new Wa({innerType:e,typeName:H.ZodReadonly,...Z(t)});const Hm=(e,t={},n)=>e?Wr.create().superRefine((r,i)=>{var s,a;if(!e(r)){const o=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(a=(s=o.fatal)!==null&&s!==void 0?s:n)!==null&&a!==void 0?a:!0,u=typeof o=="string"?{message:o}:o;i.addIssue({code:"custom",...u,fatal:l})}}):Wr.create(),fE={object:fe.lazycreate};var H;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(H||(H={}));const pE=(e,t={message:`Input not instance of ${e.name}`})=>Hm(n=>n instanceof e,t),Gm=yt.create,Wm=Pn.create,hE=Ga.create,mE=jn.create,Zm=Qi.create,gE=tr.create,vE=Ba.create,yE=Ki.create,xE=Ji.create,wE=Wr.create,SE=Yn.create,EE=Kt.create,TE=Va.create,CE=Tt.create,_E=fe.create,kE=fe.strictCreate,bE=es.create,PE=xo.create,jE=ts.create,NE=Mt.create,OE=ns.create,LE=Ua.create,IE=nr.create,zE=Lr.create,AE=rs.create,ME=is.create,RE=Nn.create,$E=ss.create,DE=Zr.create,Ef=_t.create,FE=Zt.create,BE=rr.create,VE=_t.createWithPreprocess,UE=hs.create,HE=()=>Gm().optional(),GE=()=>Wm().optional(),WE=()=>Zm().optional(),ZE={string:e=>yt.create({...e,coerce:!0}),number:e=>Pn.create({...e,coerce:!0}),boolean:e=>Qi.create({...e,coerce:!0}),bigint:e=>jn.create({...e,coerce:!0}),date:e=>tr.create({...e,coerce:!0})},YE=G;var Vn=Object.freeze({__proto__:null,defaultErrorMap:qi,setErrorMap:KS,getErrorMap:$a,makeIssue:Da,EMPTY_PATH:JS,addIssueToContext:F,ParseStatus:ze,INVALID:G,DIRTY:Bm,OK:$e,isAborted:xu,isDirty:wu,isValid:Xi,isAsync:Fa,get util(){return te},get objectUtil(){return yu},ZodParsedType:D,getParsedType:dn,ZodType:X,ZodString:yt,ZodNumber:Pn,ZodBigInt:jn,ZodBoolean:Qi,ZodDate:tr,ZodSymbol:Ba,ZodUndefined:Ki,ZodNull:Ji,ZodAny:Wr,ZodUnknown:Yn,ZodNever:Kt,ZodVoid:Va,ZodArray:Tt,ZodObject:fe,ZodUnion:es,ZodDiscriminatedUnion:xo,ZodIntersection:ts,ZodTuple:Mt,ZodRecord:ns,ZodMap:Ua,ZodSet:nr,ZodFunction:Lr,ZodLazy:rs,ZodLiteral:is,ZodEnum:Nn,ZodNativeEnum:ss,ZodPromise:Zr,ZodEffects:_t,ZodTransformer:_t,ZodOptional:Zt,ZodNullable:rr,ZodDefault:as,ZodCatch:Ha,ZodNaN:Ga,BRAND:dE,ZodBranded:Um,ZodPipeline:hs,ZodReadonly:Wa,custom:Hm,Schema:X,ZodSchema:X,late:fE,get ZodFirstPartyTypeKind(){return H},coerce:ZE,any:wE,array:CE,bigint:mE,boolean:Zm,date:gE,discriminatedUnion:PE,effect:Ef,enum:RE,function:zE,instanceof:pE,intersection:jE,lazy:AE,literal:ME,map:LE,nan:hE,nativeEnum:$E,never:EE,null:xE,nullable:BE,number:Wm,object:_E,oboolean:WE,onumber:GE,optional:FE,ostring:HE,pipeline:UE,preprocess:VE,promise:DE,record:OE,set:IE,strictObject:kE,string:Gm,symbol:vE,transformer:Ef,tuple:NE,undefined:yE,union:bE,unknown:SE,void:TE,NEVER:YE,ZodIssueCode:M,quotelessJson:QS,ZodError:Et});const qE=Vn.object({username:Vn.string(),email:Vn.string().email(),password:Vn.string().min(8)});function XE(){const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[a,o]=b.useState(""),{apiUrl:l}=b.useContext(uo),u=async c=>{c.preventDefault(),console.log(e,i);try{const p={username:e,email:n,password:i};qE.parse(p)}catch{o("Invalid credentials")}try{const p=await fetch(`${l}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:n,password:i})}),g=await p.json();p.ok?(o(g.message),console.log(g.message)):o(g.message)}catch(p){console.error("Error:",p)}};return f.jsxs(_c,{title:"Register Form",children:[f.jsx("h2",{children:"Register"}),f.jsxs("form",{onSubmit:u,children:[f.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:c=>t(c.target.value)}),f.jsx("input",{type:"email",placeholder:"E-mail",value:n,onChange:c=>r(c.target.value)}),f.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:c=>s(c.target.value)}),a&&f.jsx("div",{className:"error",children:a}),f.jsx("button",{type:"submit",children:"Register"})]})]})}const QE=Vn.object({username:Vn.string(),password:Vn.string().min(6)});function KE(){const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),{apiUrl:a,token:o,setToken:l}=b.useContext(uo);console.log(o);const u=xc(),c=async p=>{p.preventDefault(),console.log(e,n);try{const g={username:e,password:n};QE.parse(g)}catch{s("Invalid credentials")}try{const g=await fetch(`${a}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:n})}),v=await g.json();g.ok?(s(""),console.log(v.token),l(v.token),u("/private/application")):s(v.message)}catch(g){console.error("Error:",g)}};return f.jsx(_c,{title:"Login Form",children:f.jsxs("main",{children:[f.jsx("h2",{children:"Login"}),f.jsxs("form",{onSubmit:c,children:[f.jsx("input",{type:"text",placeholder:"Username",value:e,onChange:p=>t(p.target.value)}),f.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:p=>r(p.target.value)}),i&&f.jsx("div",{className:"error",children:i}),f.jsx("button",{type:"submit",children:"Login"})]})]})})}function JE(){return f.jsxs("div",{children:[f.jsx("h1",{children:"Application"}),f.jsx("p",{children:"This is a private route."})]})}function eT(){const{token:e}=b.useContext(uo);return e?f.jsx(t1,{}):f.jsx(Jh,{to:"/form/login"})}const tT=()=>f.jsxs(r1,{children:[f.jsx(Pt,{path:"/home",element:f.jsx(BS,{})}),f.jsxs(Pt,{path:"/form",children:[f.jsx(Pt,{path:"fan-member",element:f.jsx(WS,{})}),f.jsx(Pt,{path:"login",element:f.jsx(KE,{})}),f.jsx(Pt,{path:"register",element:f.jsx(XE,{})})]}),f.jsx(Pt,{path:"/private",element:f.jsx(eT,{}),children:f.jsx(Pt,{path:"application",element:f.jsx(JE,{})})}),f.jsx(Pt,{index:!0,element:f.jsx(Jh,{to:"/home"})}),f.jsx(Pt,{path:"/*",element:f.jsx(qS,{})})]});function nT(){const[e,t]=Y.useState(""),n={apiUrl:"http://localhost:3001/api",token:e,setToken:t};return f.jsx(uo.Provider,{value:n,children:f.jsx(Rx,{title:"index",children:f.jsx(tT,{})})})}al.createRoot(document.getElementById("root")).render(f.jsx(Y.StrictMode,{children:f.jsx(c1,{children:f.jsx(nT,{})})}));
