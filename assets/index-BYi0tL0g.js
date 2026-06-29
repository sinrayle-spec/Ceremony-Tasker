var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e),f=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ee(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ee(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ee(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=ee(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=ee(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ee(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return ee(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),m=s(((e,t)=>{t.exports=p()})),h=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),g=s(((e,t)=>{t.exports=h()})),_=s((e=>{var t=m();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),v=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=_()})),y=s((e=>{var t=g(),n=m(),r=v();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),_=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var ee=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case _:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ne=[],L=-1;function R(e){return{current:e}}function z(e){0>L||(e.current=ne[L],ne[L]=null,L--)}function B(e,t){L++,ne[L]=e.current,e.current=t}var re=R(null),ie=R(null),ae=R(null),oe=R(null);function se(e,t){switch(B(ae,t),B(ie,e),B(re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}z(re),B(re,e)}function ce(){z(re),z(ie),z(ae)}function le(e){e.memoizedState!==null&&B(oe,e);var t=re.current,n=Hd(t,e.type);t!==n&&(B(ie,e),B(re,n))}function ue(e){ie.current===e&&(z(re),z(ie)),oe.current===e&&(z(oe),Qf._currentValue=I)}var de,fe;function pe(e){if(de===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);de=t&&t[1]||``,fe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+de+e+fe}var me=!1;function he(e,t){if(!e||me)return``;me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?pe(n):``}function ge(e,t){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe(`Lazy`);case 13:return e.child!==t&&t!==null?pe(`Suspense Fallback`):pe(`Suspense`);case 19:return pe(`SuspenseList`);case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return pe(`Activity`);default:return``}}function _e(e){try{var t=``,n=null;do t+=ge(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ve=Object.prototype.hasOwnProperty,ye=t.unstable_scheduleCallback,be=t.unstable_cancelCallback,xe=t.unstable_shouldYield,V=t.unstable_requestPaint,Se=t.unstable_now,Ce=t.unstable_getCurrentPriorityLevel,we=t.unstable_ImmediatePriority,Te=t.unstable_UserBlockingPriority,Ee=t.unstable_NormalPriority,De=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,ke=t.log,Ae=t.unstable_setDisableYieldValue,je=null,Me=null;function Ne(e){if(typeof ke==`function`&&Ae(e),Me&&typeof Me.setStrictMode==`function`)try{Me.setStrictMode(je,e)}catch{}}var H=Math.clz32?Math.clz32:Ie,Pe=Math.log,Fe=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(Pe(e)/Fe|0)|0}var Le=256,Re=262144,ze=4194304;function Be(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ve(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Be(n))):i=Be(o):i=Be(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Be(n))):i=Be(o)):i=Be(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function He(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ue(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function We(){var e=ze;return ze<<=1,!(ze&62914560)&&(ze=4194304),e}function Ge(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ke(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-H(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Je(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-H(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ye(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-H(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Xe(e,t){var n=t&-t;return n=n&42?1:Ze(n),(n&(e.suspendedLanes|t))===0?n:0}function Ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qe(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function $e(){var e=F.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function et(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var tt=Math.random().toString(36).slice(2),nt=`__reactFiber$`+tt,rt=`__reactProps$`+tt,it=`__reactContainer$`+tt,at=`__reactEvents$`+tt,ot=`__reactListeners$`+tt,st=`__reactHandles$`+tt,ct=`__reactResources$`+tt,lt=`__reactMarker$`+tt;function ut(e){delete e[nt],delete e[rt],delete e[at],delete e[ot],delete e[st]}function dt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[nt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ft(e){if(e=e[nt]||e[it]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function pt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function mt(e){var t=e[ct];return t||=e[ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function ht(e){e[lt]=!0}var gt=new Set,_t={};function vt(e,t){yt(e,t),yt(e+`Capture`,t)}function yt(e,t){for(_t[e]=t,e=0;e<t.length;e++)gt.add(t[e])}var bt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),xt={},St={};function Ct(e){return ve.call(St,e)?!0:ve.call(xt,e)?!1:bt.test(e)?St[e]=!0:(xt[e]=!0,!1)}function wt(e,t,n){if(Ct(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Tt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Et(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Dt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ot(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function kt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function At(e){if(!e._valueTracker){var t=Ot(e)?`checked`:`value`;e._valueTracker=kt(e,t,``+e[t])}}function jt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ot(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Mt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Nt=/[\n"\\]/g;function Pt(e){return e.replace(Nt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ft(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Dt(t)):e.value!==``+Dt(t)&&(e.value=``+Dt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Lt(e,o,Dt(n)):Lt(e,o,Dt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Dt(s):e.removeAttribute(`name`)}function It(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){At(e);return}n=n==null?``:``+Dt(n),t=t==null?n:``+Dt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),At(e)}function Lt(e,t,n){t===`number`&&Mt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Rt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zt(e,t,n){if(t!=null&&(t=``+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Dt(n)}function Bt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Dt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),At(e)}function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ht=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Ut(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ht.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Wt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ut(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Ut(e,o,t[o])}function Gt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Kt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jt(e){return qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Yt(){}var Xt=null;function Zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qt=null,$t=null;function en(e){var t=ft(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ft(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Pt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[rt]||null;if(!a)throw Error(i(90));Ft(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&jt(r)}break a;case`textarea`:zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Rt(e,!!n.multiple,t,!1)}}}var tn=!1;function nn(e,t,n){if(tn)return e(t,n);tn=!0;try{return e(t)}finally{if(tn=!1,(Qt!==null||$t!==null)&&(bu(),Qt&&(t=Qt,e=$t,$t=Qt=null,en(t),e)))for(t=0;t<e.length;t++)en(e[t])}}function rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[rt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var an=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),on=!1;if(an)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){on=!0}}),window.addEventListener(`test`,sn,sn),window.removeEventListener(`test`,sn,sn)}catch{on=!1}var cn=null,ln=null,un=null;function dn(){if(un)return un;var e,t=ln,n=t.length,r,i=`value`in cn?cn.value:cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return un=i.slice(e,1<r?1-r:void 0)}function fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?pn:mn,this.isPropagationStopped=mn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=f({},gn,{view:0,detail:0}),yn=hn(vn),bn,xn,Sn,Cn=f({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=hn(Cn),Tn=hn(f({},Cn,{dataTransfer:0})),En=hn(f({},vn,{relatedTarget:0})),Dn=hn(f({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=hn(f({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=hn(f({},gn,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=hn(f({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=hn(f({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=hn(f({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Rn=hn(f({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=hn(f({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=hn(f({},gn,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=an&&`CompositionEvent`in window,Un=null;an&&`documentMode`in document&&(Un=document.documentMode);var Wn=an&&`TextEvent`in window&&!Un,Gn=an&&(!Hn||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!Hn&&Jn(e,t)?(e=dn(),un=ln=cn=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){Qt?$t?$t.push(r):$t=[r]:Qt=r,t=Ed(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){yd(e,0)}function ar(e){if(jt(pt(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(an){var cr;if(an){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent(`onpropertychange`,fr),rr=nr=null)}function fr(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,Zt(e)),nn(ir,t)}}function pr(e,t,n){e===`focusin`?(dr(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function hr(e,t){if(e===`click`)return ar(t)}function gr(e,t){if(e===`input`||e===`change`)return ar(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ve.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mt(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=an&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Mt(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};an&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),vt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-H(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,re.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ii(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return li(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ii(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ii(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ii(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:_e(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:_e(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-H(r)-1;r&=~(1<<i),n+=1;var a=32-H(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-H(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[nt]=e,t[rt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),It(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=R(null),Hi=null,Ui=null;function Wi(e,t,n){B(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,z(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===oe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=P.S;P.S=function(e,t){eu=Se(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=R(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?B(ma,ma.current):B(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Yt,Yt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Yt,Yt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===p?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case _:return t=fi(t,e.mode,n),t.return=e,t;case O:return t=wa(t),f(e,t,n)}if(te(t)||M(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case _:return n.key===i?u(e,t,n,r):null;case O:return n=wa(n),p(e,t,n,r)}if(te(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case _:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=wa(r),m(e,t,n,r,i)}if(te(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function g(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function v(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case _:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=wa(o),b(e,r,o,c)}if(te(o))return g(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),v(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ye(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Y&p)===p:(r&p)===p){p!==0&&p===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ia=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=R(null),Ya=R(0);function Xa(e,t){e=Ul,B(Ya,e),B(Ja,t),Ul=e|t.baseLanes}function Za(){B(Ya,Ul),B(Ja,Ja.current)}function Qa(){Ul=Ya.current,z(Ja),z(Ya)}var $a=R(null),eo=null;function to(e){var t=e.alternate;B(oo,oo.current&1),B($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){B(oo,oo.current),B($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(B(oo,oo.current),B($a,e),eo===null&&(eo=e)):io(e)}function io(){B(oo,oo.current),B($a,$a.current)}function ao(e){z($a),eo===e&&(eo=null),z(oo)}var oo=R(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){P.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Ne(!0);try{n()}finally{Ne(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),vr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Ms(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,I,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ye(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Ne(!0);try{n(t)}finally{Ne(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-H(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=Xe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=Xe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,B(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:le(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(ae.current).createElement(n),r[nt]=t,r[rt]=e,Pd(r,n,e),ht(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return le(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,ae.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),le(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:We(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(ue(t),n=ae.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=re.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(ue(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=re.current,Li(t))Fi(t,o);else{var s=Bd(ae.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[nt]=t,o[rt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ae.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[nt]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[nt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[nt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return ce(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(z(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return B(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Se()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*Se()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Se(),e.sibling=null,n=oo.current,B(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&z(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ue(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(oo),null;case 4:return ce(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&z(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),ce();break;case 26:case 27:case 5:ue(t);break;case 4:ce();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:z(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&z(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[rt]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[nt]=e,t[rt]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ut(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount==`function`)try{Me.onCommitFiberUnmount(je,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[lt]||o[nt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[nt]=e,ht(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[nt]=e,ht(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Vt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Se()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Vt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:P.T===null?$e():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Re;Re<<=1,!(Re&3932160)&&(Re=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ke(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||He(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Se(),10<a)){if(yu(r,t,Jl,!Bl),Ve(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},jl(t,a,d);var m=(a&62914560)===a?$l-Se():(a&4194048)===a?eu-Se():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-H(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Je(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=He(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-H(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,P.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=P.H;return P.H=Is,e===null?Is:e}function Eu(){var e=P.A;return P.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,P.H=i,P.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Se()+500,Su(e,t)):Vl=He(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,P.H=r,P.A=a,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!xe();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,qe(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ee,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,F.p=a,P.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,F.p=r,P.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,F.p=r,P.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,V();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),Qe(n),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot==`function`)try{Me.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=Qe(su),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Me&&typeof Me.onPostCommitFiberRoot==`function`)try{Me.onPostCommitFiberRoot(je,o)}catch{}return!0}finally{F.p=a,P.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Ke(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),Ke(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Se()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=We()),e=$r(e,t),e!==null&&(Ke(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ye(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-H(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ve(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||He(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Se(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-H(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ue(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ve(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&be(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||He(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&be(r),Qe(n)){case 2:case 8:n=Te;break;case 32:n=Ee;break;case 268435456:n=Oe;break;default:n=Ee}return r=cd.bind(null,e),n=ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&be(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ve(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Se()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ye(we,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Le,Le<<=1,!(Le&261888)&&(Le=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Jt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[rt]||null).action),o=r.submitter;o&&(t=(t=o[rt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),yt(`onMouseEnter`,[`mouseout`,`mouseover`]),yt(`onMouseLeave`,[`mouseout`,`mouseover`]),yt(`onPointerEnter`,[`pointerout`,`pointerover`]),yt(`onPointerLeave`,[`pointerout`,`pointerover`]),vt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),vt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),vt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),vt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),vt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),vt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[at];n===void 0&&(n=t[at]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,gt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!on||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=dt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}nn(function(){var r=a,i=Zt(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(fn(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=En;break;case`focusout`:u=`blur`,l=En;break;case`beforeblur`:case`afterblur`:l=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Ln;break;case Ir:case Lr:case Rr:l=Dn;break;case Hr:l=Rn;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=zn;break;case`copy`:case`cut`:case`paste`:l=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=In;break;case`toggle`:case`beforetoggle`:l=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=rn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Xt&&(u=n.relatedTarget||n.fromElement)&&(dt(u)||u[it]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?dt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:pt(l),h=u==null?c:pt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,dt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?pt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=or;else if(er(c))if(sr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Gt(r.elementType)&&(v=or):v=hr;if(v&&=v(e,r)){tr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Lt(c,`number`,c.value)}switch(y=r?pt(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=dn()):(cn=i,ln=`value`in cn?cn.value:cn.textContent,Xn=!0)),y=Ed(r,x),0<y.length&&(x=new kn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=rn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=rn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=rn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=rn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Vt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Vt(e,``+r);break;case`className`:Tt(e,`class`,r);break;case`tabIndex`:Tt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Tt(e,n,r);break;case`style`:Wt(e,r,o);break;case`data`:if(t!==`object`){Tt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Yt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Jt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),wt(e,`popover`,r);break;case`xlinkActuate`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:wt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Kt.get(n)||n,wt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Wt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Vt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Vt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Yt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!_t.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[rt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):wt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}It(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Rt(e,!!r,n,!0):Rt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Bt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Gt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ft(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Rt(e,!!n,n?[]:``,!1):Rt(e,!!n,t,!0)):Rt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Gt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[lt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ut(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[lt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ut(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=F.d;F.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=ft(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Pt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),ht(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Pt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Pt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Pt(n.imageSizes)+`"]`)):i+=`[href="`+Pt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),ht(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Pt(r)+`"][href="`+Pt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),ht(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=mt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);ht(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=mt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),ht(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=mt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),ht(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ae.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=mt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=mt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=mt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Pt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),ht(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Pt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Pt(n.href)+`"]`);if(r)return t.instance=r,ht(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),ht(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,ht(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),ht(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,ht(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),ht(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[lt]||a[nt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,ht(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),ht(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.hiddenUpdates=Ge(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=Ze(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,up(e,t,n,r)}finally{F.p=a,P.T=i}}function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,up(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Be(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-H(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Se()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Zt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=dt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ce()){case we:return 2;case Te:return 8;case Ee:case De:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ft(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=dt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,et(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,et(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xt=r,n.target.dispatchEvent(r),Xt=null}else return t=ft(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ft(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[rt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[rt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[it]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=$e();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{je=zp.inject(Rp),Me=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[it]=t.current,Sd(e),new Fp(t)}})),b=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=y()})),x=u(m(),1),S=b(),C=s(((e,t)=>{t.exports={}})),w=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r():typeof define==`function`&&define.amd?define([],r):n.CryptoJS=r()})(e,function(){var e=e||function(e,t){var n;if(typeof window<`u`&&window.crypto&&(n=window.crypto),typeof self<`u`&&self.crypto&&(n=self.crypto),typeof globalThis<`u`&&globalThis.crypto&&(n=globalThis.crypto),!n&&typeof window<`u`&&window.msCrypto&&(n=window.msCrypto),!n&&typeof global<`u`&&global.crypto&&(n=global.crypto),!n&&typeof f==`function`)try{n=C()}catch{}var r=function(){if(n){if(typeof n.getRandomValues==`function`)try{return n.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof n.randomBytes==`function`)try{return n.randomBytes(4).readInt32LE()}catch{}}throw Error(`Native crypto module could not be used to get secure random number.`)},i=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),a={},o=a.lib={},s=o.Base=function(){return{extend:function(e){var t=i(this);return e&&t.mixIn(e),(!t.hasOwnProperty(`init`)||this.init===t.init)&&(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty(`toString`)&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),c=o.WordArray=s.extend({init:function(e,n){e=this.words=e||[],n==t?this.sigBytes=e.length*4:this.sigBytes=n},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var a=0;a<i;a++){var o=n[a>>>2]>>>24-a%4*8&255;t[r+a>>>2]|=o<<24-(r+a)%4*8}else for(var s=0;s<i;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(r());return new c.init(t,e)}}),l=a.enc={},u=l.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var a=t[i>>>2]>>>24-i%4*8&255;r.push((a>>>4).toString(16)),r.push((a&15).toString(16))}return r.join(``)},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new c.init(n,t/2)}},d=l.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var a=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(a))}return r.join(``)},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(e.charCodeAt(r)&255)<<24-r%4*8;return new c.init(n,t)}},p=l.Utf8={stringify:function(e){try{return decodeURIComponent(escape(d.stringify(e)))}catch{throw Error(`Malformed UTF-8 data`)}},parse:function(e){return d.parse(unescape(encodeURIComponent(e)))}},m=o.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(e){typeof e==`string`&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,r=this._data,i=r.words,a=r.sigBytes,o=this.blockSize,s=a/(o*4);s=t?e.ceil(s):e.max((s|0)-this._minBufferSize,0);var l=s*o,u=e.min(l*4,a);if(l){for(var d=0;d<l;d+=o)this._doProcessBlock(i,d);n=i.splice(0,l),r.sigBytes-=u}return new c.init(n,u)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});o.Hasher=m.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:512/32,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new h.HMAC.init(e,n).finalize(t)}}});var h=a.algo={};return a}(Math);return e})})),T=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib,i=r.Base,a=r.WordArray,o=n.x64={};o.Word=i.extend({init:function(e,t){this.high=e,this.low=t}}),o.WordArray=i.extend({init:function(e,n){e=this.words=e||[],n==t?this.sigBytes=e.length*8:this.sigBytes=n},toX32:function(){for(var e=this.words,t=e.length,n=[],r=0;r<t;r++){var i=e[r];n.push(i.high),n.push(i.low)}return a.create(n,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),t=e.words=this.words.slice(0),n=t.length,r=0;r<n;r++)t[r]=t[r].clone();return e}})})(),e})})),E=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(){if(typeof ArrayBuffer==`function`){var t=e.lib.WordArray,n=t.init,r=t.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||typeof Uint8ClampedArray<`u`&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,r=[],i=0;i<t;i++)r[i>>>2]|=e[i]<<24-i%4*8;n.call(this,r,t)}else n.apply(this,arguments)};r.prototype=t}})(),e.lib.WordArray})})),D=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.WordArray,r=t.enc;r.Utf16=r.Utf16BE={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i+=2){var a=t[i>>>2]>>>16-i%4*8&65535;r.push(String.fromCharCode(a))}return r.join(``)},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>1]|=e.charCodeAt(i)<<16-i%2*16;return n.create(r,t*2)}},r.Utf16LE={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],a=0;a<n;a+=2){var o=i(t[a>>>2]>>>16-a%4*8&65535);r.push(String.fromCharCode(o))}return r.join(``)},parse:function(e){for(var t=e.length,r=[],a=0;a<t;a++)r[a>>>1]|=i(e.charCodeAt(a)<<16-a%2*16);return n.create(r,t*2)}};function i(e){return e<<8&4278255360|e>>>8&16711935}})(),e.enc.Utf16})})),O=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.WordArray,r=t.enc;r.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],a=0;a<n;a+=3)for(var o=t[a>>>2]>>>24-a%4*8&255,s=t[a+1>>>2]>>>24-(a+1)%4*8&255,c=t[a+2>>>2]>>>24-(a+2)%4*8&255,l=o<<16|s<<8|c,u=0;u<4&&a+u*.75<n;u++)i.push(r.charAt(l>>>6*(3-u)&63));var d=r.charAt(64);if(d)for(;i.length%4;)i.push(d);return i.join(``)},parse:function(e){var t=e.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var a=0;a<n.length;a++)r[n.charCodeAt(a)]=a}var o=n.charAt(64);if(o){var s=e.indexOf(o);s!==-1&&(t=s)}return i(e,t,r)},_map:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`};function i(e,t,r){for(var i=[],a=0,o=0;o<t;o++)if(o%4){var s=r[e.charCodeAt(o-1)]<<o%4*2|r[e.charCodeAt(o)]>>>6-o%4*2;i[a>>>2]|=s<<24-a%4*8,a++}return n.create(i,a)}})(),e.enc.Base64})})),k=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.WordArray,r=t.enc;r.Base64url={stringify:function(e,t){t===void 0&&(t=!0);var n=e.words,r=e.sigBytes,i=t?this._safe_map:this._map;e.clamp();for(var a=[],o=0;o<r;o+=3)for(var s=n[o>>>2]>>>24-o%4*8&255,c=n[o+1>>>2]>>>24-(o+1)%4*8&255,l=n[o+2>>>2]>>>24-(o+2)%4*8&255,u=s<<16|c<<8|l,d=0;d<4&&o+d*.75<r;d++)a.push(i.charAt(u>>>6*(3-d)&63));var f=i.charAt(64);if(f)for(;a.length%4;)a.push(f);return a.join(``)},parse:function(e,t){t===void 0&&(t=!0);var n=e.length,r=t?this._safe_map:this._map,a=this._reverseMap;if(!a){a=this._reverseMap=[];for(var o=0;o<r.length;o++)a[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var c=e.indexOf(s);c!==-1&&(n=c)}return i(e,n,a)},_map:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,_safe_map:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`};function i(e,t,r){for(var i=[],a=0,o=0;o<t;o++)if(o%4){var s=r[e.charCodeAt(o-1)]<<o%4*2|r[e.charCodeAt(o)]>>>6-o%4*2;i[a>>>2]|=s<<24-a%4*8,a++}return n.create(i,a)}})(),e.enc.Base64url})})),A=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib,i=r.WordArray,a=r.Hasher,o=n.algo,s=[];(function(){for(var e=0;e<64;e++)s[e]=t.abs(t.sin(e+1))*4294967296|0})();var c=o.MD5=a.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=(i<<8|i>>>24)&16711935|(i<<24|i>>>8)&4278255360}var a=this._hash.words,o=e[t+0],c=e[t+1],p=e[t+2],m=e[t+3],h=e[t+4],g=e[t+5],_=e[t+6],v=e[t+7],y=e[t+8],b=e[t+9],x=e[t+10],S=e[t+11],C=e[t+12],w=e[t+13],T=e[t+14],E=e[t+15],D=a[0],O=a[1],k=a[2],A=a[3];D=l(D,O,k,A,o,7,s[0]),A=l(A,D,O,k,c,12,s[1]),k=l(k,A,D,O,p,17,s[2]),O=l(O,k,A,D,m,22,s[3]),D=l(D,O,k,A,h,7,s[4]),A=l(A,D,O,k,g,12,s[5]),k=l(k,A,D,O,_,17,s[6]),O=l(O,k,A,D,v,22,s[7]),D=l(D,O,k,A,y,7,s[8]),A=l(A,D,O,k,b,12,s[9]),k=l(k,A,D,O,x,17,s[10]),O=l(O,k,A,D,S,22,s[11]),D=l(D,O,k,A,C,7,s[12]),A=l(A,D,O,k,w,12,s[13]),k=l(k,A,D,O,T,17,s[14]),O=l(O,k,A,D,E,22,s[15]),D=u(D,O,k,A,c,5,s[16]),A=u(A,D,O,k,_,9,s[17]),k=u(k,A,D,O,S,14,s[18]),O=u(O,k,A,D,o,20,s[19]),D=u(D,O,k,A,g,5,s[20]),A=u(A,D,O,k,x,9,s[21]),k=u(k,A,D,O,E,14,s[22]),O=u(O,k,A,D,h,20,s[23]),D=u(D,O,k,A,b,5,s[24]),A=u(A,D,O,k,T,9,s[25]),k=u(k,A,D,O,m,14,s[26]),O=u(O,k,A,D,y,20,s[27]),D=u(D,O,k,A,w,5,s[28]),A=u(A,D,O,k,p,9,s[29]),k=u(k,A,D,O,v,14,s[30]),O=u(O,k,A,D,C,20,s[31]),D=d(D,O,k,A,g,4,s[32]),A=d(A,D,O,k,y,11,s[33]),k=d(k,A,D,O,S,16,s[34]),O=d(O,k,A,D,T,23,s[35]),D=d(D,O,k,A,c,4,s[36]),A=d(A,D,O,k,h,11,s[37]),k=d(k,A,D,O,v,16,s[38]),O=d(O,k,A,D,x,23,s[39]),D=d(D,O,k,A,w,4,s[40]),A=d(A,D,O,k,o,11,s[41]),k=d(k,A,D,O,m,16,s[42]),O=d(O,k,A,D,_,23,s[43]),D=d(D,O,k,A,b,4,s[44]),A=d(A,D,O,k,C,11,s[45]),k=d(k,A,D,O,E,16,s[46]),O=d(O,k,A,D,p,23,s[47]),D=f(D,O,k,A,o,6,s[48]),A=f(A,D,O,k,v,10,s[49]),k=f(k,A,D,O,T,15,s[50]),O=f(O,k,A,D,g,21,s[51]),D=f(D,O,k,A,C,6,s[52]),A=f(A,D,O,k,m,10,s[53]),k=f(k,A,D,O,x,15,s[54]),O=f(O,k,A,D,c,21,s[55]),D=f(D,O,k,A,y,6,s[56]),A=f(A,D,O,k,E,10,s[57]),k=f(k,A,D,O,_,15,s[58]),O=f(O,k,A,D,w,21,s[59]),D=f(D,O,k,A,h,6,s[60]),A=f(A,D,O,k,S,10,s[61]),k=f(k,A,D,O,p,15,s[62]),O=f(O,k,A,D,b,21,s[63]),a[0]=a[0]+D|0,a[1]=a[1]+O|0,a[2]=a[2]+k|0,a[3]=a[3]+A|0},_doFinalize:function(){var e=this._data,n=e.words,r=this._nDataBytes*8,i=e.sigBytes*8;n[i>>>5]|=128<<24-i%32;var a=t.floor(r/4294967296),o=r;n[(i+64>>>9<<4)+15]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,n[(i+64>>>9<<4)+14]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,e.sigBytes=(n.length+1)*4,this._process();for(var s=this._hash,c=s.words,l=0;l<4;l++){var u=c[l];c[l]=(u<<8|u>>>24)&16711935|(u<<24|u>>>8)&4278255360}return s},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+i+o;return(s<<a|s>>>32-a)+t}function u(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+i+o;return(s<<a|s>>>32-a)+t}function d(e,t,n,r,i,a,o){var s=e+(t^n^r)+i+o;return(s<<a|s>>>32-a)+t}function f(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+i+o;return(s<<a|s>>>32-a)+t}n.MD5=a._createHelper(c),n.HmacMD5=a._createHmacHelper(c)})(Math),e.MD5})})),j=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib,r=n.WordArray,i=n.Hasher,a=t.algo,o=[],s=a.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],a=n[2],s=n[3],c=n[4],l=0;l<80;l++){if(l<16)o[l]=e[t+l]|0;else{var u=o[l-3]^o[l-8]^o[l-14]^o[l-16];o[l]=u<<1|u>>>31}var d=(r<<5|r>>>27)+c+o[l];l<20?d+=(i&a|~i&s)+1518500249:l<40?d+=(i^a^s)+1859775393:l<60?d+=(i&a|i&s|a&s)-1894007588:d+=(i^a^s)-899497514,c=s,s=a,a=i<<30|i>>>2,i=r,r=d}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+a|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),t[(r+64>>>9<<4)+15]=n,e.sigBytes=t.length*4,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=i._createHelper(s),t.HmacSHA1=i._createHmacHelper(s)})(),e.SHA1})})),M=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib,i=r.WordArray,a=r.Hasher,o=n.algo,s=[],c=[];(function(){function e(e){for(var n=t.sqrt(e),r=2;r<=n;r++)if(!(e%r))return!1;return!0}function n(e){return(e-(e|0))*4294967296|0}for(var r=2,i=0;i<64;)e(r)&&(i<8&&(s[i]=n(t.pow(r,1/2))),c[i]=n(t.pow(r,1/3)),i++),r++})();var l=[],u=o.SHA256=a.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],u=n[5],d=n[6],f=n[7],p=0;p<64;p++){if(p<16)l[p]=e[t+p]|0;else{var m=l[p-15],h=(m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3,g=l[p-2],_=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;l[p]=h+l[p-7]+_+l[p-16]}var v=s&u^~s&d,y=r&i^r&a^i&a,b=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),x=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),S=f+x+v+c[p]+l[p],C=b+y;f=d,d=u,u=s,s=o+S|0,o=a,a=i,i=r,r=S+C|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+a|0,n[3]=n[3]+o|0,n[4]=n[4]+s|0,n[5]=n[5]+u|0,n[6]=n[6]+d|0,n[7]=n[7]+f|0},_doFinalize:function(){var e=this._data,n=e.words,r=this._nDataBytes*8,i=e.sigBytes*8;return n[i>>>5]|=128<<24-i%32,n[(i+64>>>9<<4)+14]=t.floor(r/4294967296),n[(i+64>>>9<<4)+15]=r,e.sigBytes=n.length*4,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});n.SHA256=a._createHelper(u),n.HmacSHA256=a._createHmacHelper(u)})(Math),e.SHA256})})),ee=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),M()):typeof define==`function`&&define.amd?define([`./core`,`./sha256`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.WordArray,r=t.algo,i=r.SHA256,a=r.SHA224=i.extend({_doReset:function(){this._hash=new n.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=i._doFinalize.call(this);return e.sigBytes-=4,e}});t.SHA224=i._createHelper(a),t.HmacSHA224=i._createHmacHelper(a)})(),e.SHA224})})),N=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),T()):typeof define==`function`&&define.amd?define([`./core`,`./x64-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.Hasher,r=t.x64,i=r.Word,a=r.WordArray,o=t.algo;function s(){return i.create.apply(i,arguments)}var c=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],l=[];(function(){for(var e=0;e<80;e++)l[e]=s()})();var u=o.SHA512=n.extend({_doReset:function(){this._hash=new a.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],u=n[5],d=n[6],f=n[7],p=r.high,m=r.low,h=i.high,g=i.low,_=a.high,v=a.low,y=o.high,b=o.low,x=s.high,S=s.low,C=u.high,w=u.low,T=d.high,E=d.low,D=f.high,O=f.low,k=p,A=m,j=h,M=g,ee=_,N=v,te=y,P=b,F=x,I=S,ne=C,L=w,R=T,z=E,B=D,re=O,ie=0;ie<80;ie++){var ae,oe,se=l[ie];if(ie<16)oe=se.high=e[t+ie*2]|0,ae=se.low=e[t+ie*2+1]|0;else{var ce=l[ie-15],le=ce.high,ue=ce.low,de=(le>>>1|ue<<31)^(le>>>8|ue<<24)^le>>>7,fe=(ue>>>1|le<<31)^(ue>>>8|le<<24)^(ue>>>7|le<<25),pe=l[ie-2],me=pe.high,he=pe.low,ge=(me>>>19|he<<13)^(me<<3|he>>>29)^me>>>6,_e=(he>>>19|me<<13)^(he<<3|me>>>29)^(he>>>6|me<<26),ve=l[ie-7],ye=ve.high,be=ve.low,xe=l[ie-16],V=xe.high,Se=xe.low;ae=fe+be,oe=de+ye+ +(ae>>>0<fe>>>0),ae+=_e,oe=oe+ge+ +(ae>>>0<_e>>>0),ae+=Se,oe=oe+V+ +(ae>>>0<Se>>>0),se.high=oe,se.low=ae}var Ce=F&ne^~F&R,we=I&L^~I&z,Te=k&j^k&ee^j&ee,Ee=A&M^A&N^M&N,De=(k>>>28|A<<4)^(k<<30|A>>>2)^(k<<25|A>>>7),Oe=(A>>>28|k<<4)^(A<<30|k>>>2)^(A<<25|k>>>7),ke=(F>>>14|I<<18)^(F>>>18|I<<14)^(F<<23|I>>>9),Ae=(I>>>14|F<<18)^(I>>>18|F<<14)^(I<<23|F>>>9),je=c[ie],Me=je.high,Ne=je.low,H=re+Ae,Pe=B+ke+ +(H>>>0<re>>>0),H=H+we,Pe=Pe+Ce+ +(H>>>0<we>>>0),H=H+Ne,Pe=Pe+Me+ +(H>>>0<Ne>>>0),H=H+ae,Pe=Pe+oe+ +(H>>>0<ae>>>0),Fe=Oe+Ee,Ie=De+Te+ +(Fe>>>0<Oe>>>0);B=R,re=z,R=ne,z=L,ne=F,L=I,I=P+H|0,F=te+Pe+ +(I>>>0<P>>>0)|0,te=ee,P=N,ee=j,N=M,j=k,M=A,A=H+Fe|0,k=Pe+Ie+ +(A>>>0<H>>>0)|0}m=r.low=m+A,r.high=p+k+ +(m>>>0<A>>>0),g=i.low=g+M,i.high=h+j+ +(g>>>0<M>>>0),v=a.low=v+N,a.high=_+ee+ +(v>>>0<N>>>0),b=o.low=b+P,o.high=y+te+ +(b>>>0<P>>>0),S=s.low=S+I,s.high=x+F+ +(S>>>0<I>>>0),w=u.low=w+L,u.high=C+ne+ +(w>>>0<L>>>0),E=d.low=E+z,d.high=T+R+ +(E>>>0<z>>>0),O=f.low=O+re,f.high=D+B+ +(O>>>0<re>>>0)},_doFinalize:function(){var e=this._data,t=e.words,n=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+128>>>10<<5)+30]=Math.floor(n/4294967296),t[(r+128>>>10<<5)+31]=n,e.sigBytes=t.length*4,this._process(),this._hash.toX32()},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:1024/32});t.SHA512=n._createHelper(u),t.HmacSHA512=n._createHmacHelper(u)})(),e.SHA512})})),te=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),T(),N()):typeof define==`function`&&define.amd?define([`./core`,`./x64-core`,`./sha512`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.x64,r=n.Word,i=n.WordArray,a=t.algo,o=a.SHA512,s=a.SHA384=o.extend({_doReset:function(){this._hash=new i.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var e=o._doFinalize.call(this);return e.sigBytes-=16,e}});t.SHA384=o._createHelper(s),t.HmacSHA384=o._createHmacHelper(s)})(),e.SHA384})})),P=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),T()):typeof define==`function`&&define.amd?define([`./core`,`./x64-core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib,i=r.WordArray,a=r.Hasher,o=n.x64.Word,s=n.algo,c=[],l=[],u=[];(function(){for(var e=1,t=0,n=0;n<24;n++){c[e+5*t]=(n+1)*(n+2)/2%64;var r=t%5,i=(2*e+3*t)%5;e=r,t=i}for(var e=0;e<5;e++)for(var t=0;t<5;t++)l[e+5*t]=t+(2*e+3*t)%5*5;for(var a=1,s=0;s<24;s++){for(var d=0,f=0,p=0;p<7;p++){if(a&1){var m=(1<<p)-1;m<32?f^=1<<m:d^=1<<m-32}a&128?a=a<<1^113:a<<=1}u[s]=o.create(d,f)}})();var d=[];(function(){for(var e=0;e<25;e++)d[e]=o.create()})();var f=s.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new o.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var n=this._state,r=this.blockSize/2,i=0;i<r;i++){var a=e[t+2*i],o=e[t+2*i+1];a=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,o=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360;var s=n[i];s.high^=o,s.low^=a}for(var f=0;f<24;f++){for(var p=0;p<5;p++){for(var m=0,h=0,g=0;g<5;g++){var s=n[p+5*g];m^=s.high,h^=s.low}var _=d[p];_.high=m,_.low=h}for(var p=0;p<5;p++)for(var v=d[(p+4)%5],y=d[(p+1)%5],b=y.high,x=y.low,m=v.high^(b<<1|x>>>31),h=v.low^(x<<1|b>>>31),g=0;g<5;g++){var s=n[p+5*g];s.high^=m,s.low^=h}for(var S=1;S<25;S++){var m,h,s=n[S],C=s.high,w=s.low,T=c[S];T<32?(m=C<<T|w>>>32-T,h=w<<T|C>>>32-T):(m=w<<T-32|C>>>64-T,h=C<<T-32|w>>>64-T);var E=d[l[S]];E.high=m,E.low=h}var D=d[0],O=n[0];D.high=O.high,D.low=O.low;for(var p=0;p<5;p++)for(var g=0;g<5;g++){var S=p+5*g,s=n[S],k=d[S],A=d[(p+1)%5+5*g],j=d[(p+2)%5+5*g];s.high=k.high^~A.high&j.high,s.low=k.low^~A.low&j.low}var s=n[0],M=u[f];s.high^=M.high,s.low^=M.low}},_doFinalize:function(){var e=this._data,n=e.words;this._nDataBytes*8;var r=e.sigBytes*8,a=this.blockSize*32;n[r>>>5]|=1<<24-r%32,n[(t.ceil((r+1)/a)*a>>>5)-1]|=128,e.sigBytes=n.length*4,this._process();for(var o=this._state,s=this.cfg.outputLength/8,c=s/8,l=[],u=0;u<c;u++){var d=o[u],f=d.high,p=d.low;f=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,p=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360,l.push(p),l.push(f)}return new i.init(l,s)},clone:function(){for(var e=a.clone.call(this),t=e._state=this._state.slice(0),n=0;n<25;n++)t[n]=t[n].clone();return e}});n.SHA3=a._createHelper(f),n.HmacSHA3=a._createHmacHelper(f)})(Math),e.SHA3})})),F=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib,i=r.WordArray,a=r.Hasher,o=n.algo,s=i.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),c=i.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),l=i.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),u=i.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=i.create([0,1518500249,1859775393,2400959708,2840853838]),f=i.create([1352829926,1548603684,1836072691,2053994217,0]),p=o.RIPEMD160=a.extend({_doReset:function(){this._hash=i.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=(i<<8|i>>>24)&16711935|(i<<24|i>>>8)&4278255360}for(var a=this._hash.words,o=d.words,p=f.words,b=s.words,x=c.words,S=l.words,C=u.words,w,T,E,D,O,k=w=a[0],A=T=a[1],j=E=a[2],M=D=a[3],ee=O=a[4],N,n=0;n<80;n+=1)N=w+e[t+b[n]]|0,n<16?N+=m(T,E,D)+o[0]:n<32?N+=h(T,E,D)+o[1]:n<48?N+=g(T,E,D)+o[2]:n<64?N+=_(T,E,D)+o[3]:N+=v(T,E,D)+o[4],N|=0,N=y(N,S[n]),N=N+O|0,w=O,O=D,D=y(E,10),E=T,T=N,N=k+e[t+x[n]]|0,n<16?N+=v(A,j,M)+p[0]:n<32?N+=_(A,j,M)+p[1]:n<48?N+=g(A,j,M)+p[2]:n<64?N+=h(A,j,M)+p[3]:N+=m(A,j,M)+p[4],N|=0,N=y(N,C[n]),N=N+ee|0,k=ee,ee=M,M=y(j,10),j=A,A=N;N=a[1]+E+M|0,a[1]=a[2]+D+ee|0,a[2]=a[3]+O+k|0,a[3]=a[4]+w+A|0,a[4]=a[0]+T+j|0,a[0]=N},_doFinalize:function(){var e=this._data,t=e.words,n=this._nDataBytes*8,r=e.sigBytes*8;t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=(n<<8|n>>>24)&16711935|(n<<24|n>>>8)&4278255360,e.sigBytes=(t.length+1)*4,this._process();for(var i=this._hash,a=i.words,o=0;o<5;o++){var s=a[o];a[o]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360}return i},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});function m(e,t,n){return e^t^n}function h(e,t,n){return e&t|~e&n}function g(e,t,n){return(e|~t)^n}function _(e,t,n){return e&n|t&~n}function v(e,t,n){return e^(t|~n)}function y(e,t){return e<<t|e>>>32-t}n.RIPEMD160=a._createHelper(p),n.HmacRIPEMD160=a._createHmacHelper(p)})(Math),e.RIPEMD160})})),I=s(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=e=r(w()):typeof define==`function`&&define.amd?define([`./core`],r):r(n.CryptoJS)})(e,function(e){(function(){var t=e,n=t.lib.Base,r=t.enc.Utf8,i=t.algo;i.HMAC=n.extend({init:function(e,t){e=this._hasher=new e.init,typeof t==`string`&&(t=r.parse(t));var n=e.blockSize,i=n*4;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var a=this._oKey=t.clone(),o=this._iKey=t.clone(),s=a.words,c=o.words,l=0;l<n;l++)s[l]^=1549556828,c[l]^=909522486;a.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})})()})})),ne=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),M(),I()):typeof define==`function`&&define.amd?define([`./core`,`./sha256`,`./hmac`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib,r=n.Base,i=n.WordArray,a=t.algo,o=a.SHA256,s=a.HMAC,c=a.PBKDF2=r.extend({cfg:r.extend({keySize:128/32,hasher:o,iterations:25e4}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=s.create(n.hasher,e),a=i.create(),o=i.create([1]),c=a.words,l=o.words,u=n.keySize,d=n.iterations;c.length<u;){var f=r.update(t).finalize(o);r.reset();for(var p=f.words,m=p.length,h=f,g=1;g<d;g++){h=r.finalize(h),r.reset();for(var _=h.words,v=0;v<m;v++)p[v]^=_[v]}a.concat(f),l[0]++}return a.sigBytes=u*4,a}});t.PBKDF2=function(e,t,n){return c.create(n).compute(e,t)}})(),e.PBKDF2})})),L=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),j(),I()):typeof define==`function`&&define.amd?define([`./core`,`./sha1`,`./hmac`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib,r=n.Base,i=n.WordArray,a=t.algo,o=a.MD5,s=a.EvpKDF=r.extend({cfg:r.extend({keySize:128/32,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n,r=this.cfg,a=r.hasher.create(),o=i.create(),s=o.words,c=r.keySize,l=r.iterations;s.length<c;){n&&a.update(n),n=a.update(e).finalize(t),a.reset();for(var u=1;u<l;u++)n=a.finalize(n),a.reset();o.concat(n)}return o.sigBytes=c*4,o}});t.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)}})(),e.EvpKDF})})),R=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),L()):typeof define==`function`&&define.amd?define([`./core`,`./evpkdf`],r):r(n.CryptoJS)})(e,function(e){e.lib.Cipher||function(t){var n=e,r=n.lib,i=r.Base,a=r.WordArray,o=r.BufferedBlockAlgorithm,s=n.enc;s.Utf8;var c=s.Base64,l=n.algo.EvpKDF,u=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return typeof e==`string`?S:y}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()});r.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var d=n.mode={},f=r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),p=d.CBC=function(){var e=f.extend();e.Encryptor=e.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;n.call(this,e,t,i),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),e.Decryptor=e.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,a=e.slice(t,t+i);r.decryptBlock(e,t),n.call(this,e,t,i),this._prevBlock=a}});function n(e,n,r){var i,a=this._iv;a?(i=a,this._iv=t):i=this._prevBlock;for(var o=0;o<r;o++)e[n+o]^=i[o]}return e}(),m=n.pad={},h=m.Pkcs7={pad:function(e,t){for(var n=t*4,r=n-e.sigBytes%n,i=r<<24|r<<16|r<<8|r,o=[],s=0;s<r;s+=4)o.push(i);var c=a.create(o,r);e.concat(c)},unpad:function(e){var t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}};r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:p,padding:h}),reset:function(){var e;u.reset.call(this);var t=this.cfg,n=t.iv,r=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=r.createEncryptor:(e=r.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,n&&n.words):(this._mode=e.call(r,this,n&&n.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:128/32});var g=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),_=n.format={},v=_.OpenSSL={stringify:function(e){var t,n=e.ciphertext,r=e.salt;return t=r?a.create([1398893684,1701076831]).concat(r).concat(n):n,t.toString(c)},parse:function(e){var t,n=c.parse(e),r=n.words;return r[0]==1398893684&&r[1]==1701076831&&(t=a.create(r.slice(2,4)),r.splice(0,4),n.sigBytes-=16),g.create({ciphertext:n,salt:t})}},y=r.SerializableCipher=i.extend({cfg:i.extend({format:v}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r),a=i.finalize(t),o=i.cfg;return g.create({ciphertext:a,key:n,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return typeof e==`string`?t.parse(e,this):e}}),b=n.kdf={},x=b.OpenSSL={execute:function(e,t,n,r,i){if(r||=a.random(64/8),i)var o=l.create({keySize:t+n,hasher:i}).compute(e,r);else var o=l.create({keySize:t+n}).compute(e,r);var s=a.create(o.words.slice(t),n*4);return o.sigBytes=t*4,g.create({key:o,iv:s,salt:r})}},S=r.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:x}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=r.kdf.execute(n,e.keySize,e.ivSize,r.salt,r.hasher);r.iv=i.iv;var a=y.encrypt.call(this,e,t,i.key,r);return a.mixIn(i),a},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt,r.hasher);return r.iv=i.iv,y.decrypt.call(this,e,t,i.key,r)}})}()})})),z=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.mode.CFB=function(){var t=e.lib.BlockCipherMode.extend();t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;n.call(this,e,t,i,r),this._prevBlock=e.slice(t,t+i)}}),t.Decryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,a=e.slice(t,t+i);n.call(this,e,t,i,r),this._prevBlock=a}});function n(e,t,n,r){var i,a=this._iv;a?(i=a.slice(0),this._iv=void 0):i=this._prevBlock,r.encryptBlock(i,0);for(var o=0;o<n;o++)e[t+o]^=i[o]}return t}(),e.mode.CFB})})),B=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.mode.CTR=function(){var t=e.lib.BlockCipherMode.extend();return t.Decryptor=t.Encryptor=t.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=this._iv,a=this._counter;i&&(a=this._counter=i.slice(0),this._iv=void 0);var o=a.slice(0);n.encryptBlock(o,0),a[r-1]=a[r-1]+1|0;for(var s=0;s<r;s++)e[t+s]^=o[s]}}),t}(),e.mode.CTR})})),re=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.mode.CTRGladman=function(){var t=e.lib.BlockCipherMode.extend();function n(e){if((e>>24&255)==255){var t=e>>16&255,n=e>>8&255,r=e&255;t===255?(t=0,n===255?(n=0,r===255?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}function r(e){return(e[0]=n(e[0]))===0&&(e[1]=n(e[1])),e}return t.Decryptor=t.Encryptor=t.extend({processBlock:function(e,t){var n=this._cipher,i=n.blockSize,a=this._iv,o=this._counter;a&&(o=this._counter=a.slice(0),this._iv=void 0),r(o);var s=o.slice(0);n.encryptBlock(s,0);for(var c=0;c<i;c++)e[t+c]^=s[c]}}),t}(),e.mode.CTRGladman})})),ie=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.mode.OFB=function(){var t=e.lib.BlockCipherMode.extend();return t.Decryptor=t.Encryptor=t.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=this._iv,a=this._keystream;i&&(a=this._keystream=i.slice(0),this._iv=void 0),n.encryptBlock(a,0);for(var o=0;o<r;o++)e[t+o]^=a[o]}}),t}(),e.mode.OFB})})),ae=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.mode.ECB=function(){var t=e.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),t.Decryptor=t.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),t}(),e.mode.ECB})})),oe=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.pad.AnsiX923={pad:function(e,t){var n=e.sigBytes,r=t*4,i=r-n%r,a=n+i-1;e.clamp(),e.words[a>>>2]|=i<<24-a%4*8,e.sigBytes+=i},unpad:function(e){var t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}},e.pad.Ansix923})})),se=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.pad.Iso10126={pad:function(t,n){var r=n*4,i=r-t.sigBytes%r;t.concat(e.lib.WordArray.random(i-1)).concat(e.lib.WordArray.create([i<<24],1))},unpad:function(e){var t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}},e.pad.Iso10126})})),ce=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.pad.Iso97971={pad:function(t,n){t.concat(e.lib.WordArray.create([2147483648],1)),e.pad.ZeroPadding.pad(t,n)},unpad:function(t){e.pad.ZeroPadding.unpad(t),t.sigBytes--}},e.pad.Iso97971})})),le=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.pad.ZeroPadding={pad:function(e,t){var n=t*4;e.clamp(),e.sigBytes+=n-(e.sigBytes%n||n)},unpad:function(e){for(var t=e.words,n=e.sigBytes-1,n=e.sigBytes-1;n>=0;n--)if(t[n>>>2]>>>24-n%4*8&255){e.sigBytes=n+1;break}}},e.pad.ZeroPadding})})),ue=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding})})),de=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),R()):typeof define==`function`&&define.amd?define([`./core`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(t){var n=e,r=n.lib.CipherParams,i=n.enc.Hex,a=n.format;a.Hex={stringify:function(e){return e.ciphertext.toString(i)},parse:function(e){var t=i.parse(e);return r.create({ciphertext:t})}}})(),e.format.Hex})})),fe=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.BlockCipher,r=t.algo,i=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[];(function(){for(var e=[],t=0;t<256;t++)t<128?e[t]=t<<1:e[t]=t<<1^283;for(var n=0,r=0,t=0;t<256;t++){var m=r^r<<1^r<<2^r<<3^r<<4;m=m>>>8^m&255^99,i[n]=m,a[m]=n;var h=e[n],g=e[h],_=e[g],v=e[m]*257^m*16843008;o[n]=v<<24|v>>>8,s[n]=v<<16|v>>>16,c[n]=v<<8|v>>>24,l[n]=v;var v=_*16843009^g*65537^h*257^n*16843008;u[m]=v<<24|v>>>8,d[m]=v<<16|v>>>16,f[m]=v<<8|v>>>24,p[m]=v,n?(n=h^e[e[e[_^h]]],r^=e[e[r]]):n=r=1}})();var m=[0,1,2,4,8,16,32,64,128,27,54],h=r.AES=n.extend({_doReset:function(){var e;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var t=this._keyPriorReset=this._key,n=t.words,r=t.sigBytes/4,a=((this._nRounds=r+6)+1)*4,o=this._keySchedule=[],s=0;s<a;s++)s<r?o[s]=n[s]:(e=o[s-1],s%r?r>6&&s%r==4&&(e=i[e>>>24]<<24|i[e>>>16&255]<<16|i[e>>>8&255]<<8|i[e&255]):(e=e<<8|e>>>24,e=i[e>>>24]<<24|i[e>>>16&255]<<16|i[e>>>8&255]<<8|i[e&255],e^=m[s/r|0]<<24),o[s]=o[s-r]^e);for(var c=this._invKeySchedule=[],l=0;l<a;l++){var s=a-l;if(l%4)var e=o[s];else var e=o[s-4];l<4||s<=4?c[l]=e:c[l]=u[i[e>>>24]]^d[i[e>>>16&255]]^f[i[e>>>8&255]]^p[i[e&255]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,s,c,l,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,u,d,f,p,a);var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,a,o,s){for(var c=this._nRounds,l=e[t]^n[0],u=e[t+1]^n[1],d=e[t+2]^n[2],f=e[t+3]^n[3],p=4,m=1;m<c;m++){var h=r[l>>>24]^i[u>>>16&255]^a[d>>>8&255]^o[f&255]^n[p++],g=r[u>>>24]^i[d>>>16&255]^a[f>>>8&255]^o[l&255]^n[p++],_=r[d>>>24]^i[f>>>16&255]^a[l>>>8&255]^o[u&255]^n[p++],v=r[f>>>24]^i[l>>>16&255]^a[u>>>8&255]^o[d&255]^n[p++];l=h,u=g,d=_,f=v}var h=(s[l>>>24]<<24|s[u>>>16&255]<<16|s[d>>>8&255]<<8|s[f&255])^n[p++],g=(s[u>>>24]<<24|s[d>>>16&255]<<16|s[f>>>8&255]<<8|s[l&255])^n[p++],_=(s[d>>>24]<<24|s[f>>>16&255]<<16|s[l>>>8&255]<<8|s[u&255])^n[p++],v=(s[f>>>24]<<24|s[l>>>16&255]<<16|s[u>>>8&255]<<8|s[d&255])^n[p++];e[t]=h,e[t+1]=g,e[t+2]=_,e[t+3]=v},keySize:256/32});t.AES=n._createHelper(h)})(),e.AES})})),pe=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib,r=n.WordArray,i=n.BlockCipher,a=t.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],l=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=a.DES=i.extend({_doReset:function(){for(var e=this._key.words,t=[],n=0;n<56;n++){var r=o[n]-1;t[n]=e[r>>>5]>>>31-r%32&1}for(var i=this._subKeys=[],a=0;a<16;a++){for(var l=i[a]=[],u=c[a],n=0;n<24;n++)l[n/6|0]|=t[(s[n]-1+u)%28]<<31-n%6,l[4+(n/6|0)]|=t[28+(s[n+24]-1+u)%28]<<31-n%6;l[0]=l[0]<<1|l[0]>>>31;for(var n=1;n<7;n++)l[n]=l[n]>>>(n-1)*4+3;l[7]=l[7]<<5|l[7]>>>27}for(var d=this._invSubKeys=[],n=0;n<16;n++)d[n]=i[15-n]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,t,n){this._lBlock=e[t],this._rBlock=e[t+1],f.call(this,4,252645135),f.call(this,16,65535),p.call(this,2,858993459),p.call(this,8,16711935),f.call(this,1,1431655765);for(var r=0;r<16;r++){for(var i=n[r],a=this._lBlock,o=this._rBlock,s=0,c=0;c<8;c++)s|=l[c][((o^i[c])&u[c])>>>0];this._lBlock=o,this._rBlock=a^s}var d=this._lBlock;this._lBlock=this._rBlock,this._rBlock=d,f.call(this,1,1431655765),p.call(this,8,16711935),p.call(this,2,858993459),f.call(this,16,65535),f.call(this,4,252645135),e[t]=this._lBlock,e[t+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function f(e,t){var n=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=n,this._lBlock^=n<<e}function p(e,t){var n=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=n,this._rBlock^=n<<e}t.DES=i._createHelper(d);var m=a.TripleDES=i.extend({_doReset:function(){var e=this._key.words;if(e.length!==2&&e.length!==4&&e.length<6)throw Error(`Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.`);var t=e.slice(0,2),n=e.length<4?e.slice(0,2):e.slice(2,4),i=e.length<6?e.slice(0,2):e.slice(4,6);this._des1=d.createEncryptor(r.create(t)),this._des2=d.createEncryptor(r.create(n)),this._des3=d.createEncryptor(r.create(i))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:192/32,ivSize:64/32,blockSize:64/32});t.TripleDES=i._createHelper(m)})(),e.TripleDES})})),me=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.StreamCipher,r=t.algo,i=r.RC4=n.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes,r=this._S=[],i=0;i<256;i++)r[i]=i;for(var i=0,a=0;i<256;i++){var o=i%n,s=t[o>>>2]>>>24-o%4*8&255;a=(a+r[i]+s)%256;var c=r[i];r[i]=r[a],r[a]=c}this._i=this._j=0},_doProcessBlock:function(e,t){e[t]^=a.call(this)},keySize:256/32,ivSize:0});function a(){for(var e=this._S,t=this._i,n=this._j,r=0,i=0;i<4;i++){t=(t+1)%256,n=(n+e[t])%256;var a=e[t];e[t]=e[n],e[n]=a,r|=e[(e[t]+e[n])%256]<<24-i*8}return this._i=t,this._j=n,r}t.RC4=n._createHelper(i);var o=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)a.call(this)}});t.RC4Drop=n._createHelper(o)})(),e.RC4})})),he=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.StreamCipher,r=t.algo,i=[],a=[],o=[],s=r.Rabbit=n.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,n=0;n<4;n++)e[n]=(e[n]<<8|e[n]>>>24)&16711935|(e[n]<<24|e[n]>>>8)&4278255360;var r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,e[0]&4294901760|e[1]&65535,e[3]<<16|e[3]>>>16,e[1]&4294901760|e[2]&65535,e[0]<<16|e[0]>>>16,e[2]&4294901760|e[3]&65535,e[1]<<16|e[1]>>>16,e[3]&4294901760|e[0]&65535];this._b=0;for(var n=0;n<4;n++)c.call(this);for(var n=0;n<8;n++)i[n]^=r[n+4&7];if(t){var a=t.words,o=a[0],s=a[1],l=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,u=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,d=l>>>16|u&4294901760,f=u<<16|l&65535;i[0]^=l,i[1]^=d,i[2]^=u,i[3]^=f,i[4]^=l,i[5]^=d,i[6]^=u,i[7]^=f;for(var n=0;n<4;n++)c.call(this)}},_doProcessBlock:function(e,t){var n=this._X;c.call(this),i[0]=n[0]^n[5]>>>16^n[3]<<16,i[1]=n[2]^n[7]>>>16^n[5]<<16,i[2]=n[4]^n[1]>>>16^n[7]<<16,i[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)i[r]=(i[r]<<8|i[r]>>>24)&16711935|(i[r]<<24|i[r]>>>8)&4278255360,e[t+r]^=i[r]},blockSize:128/32,ivSize:64/32});function c(){for(var e=this._X,t=this._C,n=0;n<8;n++)a[n]=t[n];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+ +(t[0]>>>0<a[0]>>>0)|0,t[2]=t[2]+886263092+ +(t[1]>>>0<a[1]>>>0)|0,t[3]=t[3]+1295307597+ +(t[2]>>>0<a[2]>>>0)|0,t[4]=t[4]+3545052371+ +(t[3]>>>0<a[3]>>>0)|0,t[5]=t[5]+886263092+ +(t[4]>>>0<a[4]>>>0)|0,t[6]=t[6]+1295307597+ +(t[5]>>>0<a[5]>>>0)|0,t[7]=t[7]+3545052371+ +(t[6]>>>0<a[6]>>>0)|0,this._b=+(t[7]>>>0<a[7]>>>0);for(var n=0;n<8;n++){var r=e[n]+t[n],i=r&65535,s=r>>>16;o[n]=((i*i>>>17)+i*s>>>15)+s*s^((r&4294901760)*r|0)+((r&65535)*r|0)}e[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,e[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,e[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,e[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,e[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,e[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,e[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,e[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}t.Rabbit=n._createHelper(s)})(),e.Rabbit})})),ge=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.StreamCipher,r=t.algo,i=[],a=[],o=[],s=r.RabbitLegacy=n.extend({_doReset:function(){var e=this._key.words,t=this.cfg.iv,n=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],r=this._C=[e[2]<<16|e[2]>>>16,e[0]&4294901760|e[1]&65535,e[3]<<16|e[3]>>>16,e[1]&4294901760|e[2]&65535,e[0]<<16|e[0]>>>16,e[2]&4294901760|e[3]&65535,e[1]<<16|e[1]>>>16,e[3]&4294901760|e[0]&65535];this._b=0;for(var i=0;i<4;i++)c.call(this);for(var i=0;i<8;i++)r[i]^=n[i+4&7];if(t){var a=t.words,o=a[0],s=a[1],l=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,u=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,d=l>>>16|u&4294901760,f=u<<16|l&65535;r[0]^=l,r[1]^=d,r[2]^=u,r[3]^=f,r[4]^=l,r[5]^=d,r[6]^=u,r[7]^=f;for(var i=0;i<4;i++)c.call(this)}},_doProcessBlock:function(e,t){var n=this._X;c.call(this),i[0]=n[0]^n[5]>>>16^n[3]<<16,i[1]=n[2]^n[7]>>>16^n[5]<<16,i[2]=n[4]^n[1]>>>16^n[7]<<16,i[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)i[r]=(i[r]<<8|i[r]>>>24)&16711935|(i[r]<<24|i[r]>>>8)&4278255360,e[t+r]^=i[r]},blockSize:128/32,ivSize:64/32});function c(){for(var e=this._X,t=this._C,n=0;n<8;n++)a[n]=t[n];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+ +(t[0]>>>0<a[0]>>>0)|0,t[2]=t[2]+886263092+ +(t[1]>>>0<a[1]>>>0)|0,t[3]=t[3]+1295307597+ +(t[2]>>>0<a[2]>>>0)|0,t[4]=t[4]+3545052371+ +(t[3]>>>0<a[3]>>>0)|0,t[5]=t[5]+886263092+ +(t[4]>>>0<a[4]>>>0)|0,t[6]=t[6]+1295307597+ +(t[5]>>>0<a[5]>>>0)|0,t[7]=t[7]+3545052371+ +(t[6]>>>0<a[6]>>>0)|0,this._b=+(t[7]>>>0<a[7]>>>0);for(var n=0;n<8;n++){var r=e[n]+t[n],i=r&65535,s=r>>>16;o[n]=((i*i>>>17)+i*s>>>15)+s*s^((r&4294901760)*r|0)+((r&65535)*r|0)}e[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,e[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,e[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,e[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,e[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,e[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,e[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,e[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}t.RabbitLegacy=n._createHelper(s)})(),e.RabbitLegacy})})),_e=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),O(),A(),L(),R()):typeof define==`function`&&define.amd?define([`./core`,`./enc-base64`,`./md5`,`./evpkdf`,`./cipher-core`],r):r(n.CryptoJS)})(e,function(e){return(function(){var t=e,n=t.lib.BlockCipher,r=t.algo;let i=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],a=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var o={pbox:[],sbox:[]};function s(e,t){let n=t>>24&255,r=t>>16&255,i=t>>8&255,a=t&255,o=e.sbox[0][n]+e.sbox[1][r];return o^=e.sbox[2][i],o+=e.sbox[3][a],o}function c(e,t,n){let r=t,i=n,a;for(let t=0;t<16;++t)r^=e.pbox[t],i=s(e,r)^i,a=r,r=i,i=a;return a=r,r=i,i=a,i^=e.pbox[16],r^=e.pbox[17],{left:r,right:i}}function l(e,t,n){let r=t,i=n,a;for(let t=17;t>1;--t)r^=e.pbox[t],i=s(e,r)^i,a=r,r=i,i=a;return a=r,r=i,i=a,i^=e.pbox[1],r^=e.pbox[0],{left:r,right:i}}function u(e,t,n){for(let t=0;t<4;t++){e.sbox[t]=[];for(let n=0;n<256;n++)e.sbox[t][n]=a[t][n]}let r=0;for(let a=0;a<18;a++)e.pbox[a]=i[a]^t[r],r++,r>=n&&(r=0);let o=0,s=0,l=0;for(let t=0;t<18;t+=2)l=c(e,o,s),o=l.left,s=l.right,e.pbox[t]=o,e.pbox[t+1]=s;for(let t=0;t<4;t++)for(let n=0;n<256;n+=2)l=c(e,o,s),o=l.left,s=l.right,e.sbox[t][n]=o,e.sbox[t][n+1]=s;return!0}var d=r.Blowfish=n.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var e=this._keyPriorReset=this._key,t=e.words;u(o,t,e.sigBytes/4)}},encryptBlock:function(e,t){var n=c(o,e[t],e[t+1]);e[t]=n.left,e[t+1]=n.right},decryptBlock:function(e,t){var n=l(o,e[t],e[t+1]);e[t]=n.left,e[t+1]=n.right},blockSize:64/32,keySize:128/32,ivSize:64/32});t.Blowfish=n._createHelper(d)})(),e.Blowfish})})),ve=s(((e,t)=>{(function(n,r,i){typeof e==`object`?t.exports=e=r(w(),T(),E(),D(),O(),k(),A(),j(),M(),ee(),N(),te(),P(),F(),I(),ne(),L(),R(),z(),B(),re(),ie(),ae(),oe(),se(),ce(),le(),ue(),de(),fe(),pe(),me(),he(),ge(),_e()):typeof define==`function`&&define.amd?define(`./core,./x64-core,./lib-typedarrays,./enc-utf16,./enc-base64,./enc-base64url,./md5,./sha1,./sha256,./sha224,./sha512,./sha384,./sha3,./ripemd160,./hmac,./pbkdf2,./evpkdf,./cipher-core,./mode-cfb,./mode-ctr,./mode-ctr-gladman,./mode-ofb,./mode-ecb,./pad-ansix923,./pad-iso10126,./pad-iso97971,./pad-zeropadding,./pad-nopadding,./format-hex,./aes,./tripledes,./rc4,./rabbit,./rabbit-legacy,./blowfish`.split(`,`),r):n.CryptoJS=r(n.CryptoJS)})(e,function(e){return e})})),ye=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),be=s(((e,t)=>{t.exports=ye()})),xe=u(ve(),1),V=be();function Se({onUnlock:e}){let[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(``),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(1),[l,u]=(0,x.useState)(``);(0,x.useEffect)(()=>{localStorage.getItem(`ct_pin_hash`)||n(!0)},[]);let d=l=>{if(u(``),r.length<4){let d=r+l;if(i(d),d.length===4)if(t)if(s===1)o(d),i(``),c(2);else if(d===a){let t=xe.default.SHA256(d).toString();localStorage.setItem(`ct_pin_hash`,t),n(!1),e(d)}else u(`パスコードが一致しません。最初からやり直してください。`),i(``),o(``),c(1);else{let t=localStorage.getItem(`ct_pin_hash`);xe.default.SHA256(d).toString()===t?e(d):(u(`パスコードが正しくありません。`),setTimeout(()=>{i(``)},300))}}};return(0,V.jsxs)(`div`,{className:`lock-screen fade-in`,children:[(0,V.jsxs)(`div`,{className:`lock-header`,children:[(0,V.jsx)(`div`,{className:`lock-logo-wrapper`,children:(0,V.jsxs)(`svg`,{className:`lock-logo`,viewBox:`0 0 512 512`,children:[(0,V.jsx)(`use`,{href:`/icon.svg#goldGrad`}),(0,V.jsx)(`circle`,{cx:`256`,cy:`256`,r:`240`,fill:`none`,stroke:`#d97706`,strokeWidth:`4`,opacity:`0.2`}),(0,V.jsx)(`path`,{d:`M256,120 C220,190 225,300 256,360 C287,300 292,190 256,120 Z`,fill:`#d97706`}),(0,V.jsx)(`path`,{d:`M256,360 C180,380 120,320 256,360 Z`,fill:`#d97706`})]})}),(0,V.jsx)(`h1`,{className:`lock-title`,children:`Ceremony Tasker`}),(0,V.jsx)(`p`,{className:`lock-subtitle`,children:t?s===1?`暗号化用パスコード(4桁)を設定してください`:`確認のためもう一度入力してください`:`パスコードを入力してロックを解除`})]}),(0,V.jsx)(`div`,{className:`pin-dots`,children:[0,1,2,3].map(e=>(0,V.jsx)(`div`,{className:`pin-dot ${r.length>e?`filled`:``} ${l&&r.length===0?`error`:``}`},e))}),l&&(0,V.jsx)(`p`,{className:`lock-error`,children:l}),(0,V.jsxs)(`div`,{className:`keypad`,children:[[1,2,3,4,5,6,7,8,9].map(e=>(0,V.jsx)(`button`,{onClick:()=>d(e.toString()),className:`key-btn`,children:e},e)),(0,V.jsx)(`button`,{onClick:()=>{i(``),u(``)},className:`key-btn text-muted`,children:`消去`}),(0,V.jsx)(`button`,{onClick:()=>d(`0`),className:`key-btn`,children:`0`}),(0,V.jsx)(`button`,{onClick:()=>{r.length>0&&i(r.slice(0,-1))},className:`key-btn text-muted`,children:`⌫`})]}),(0,V.jsxs)(`div`,{className:`compliance-banner`,children:[(0,V.jsxs)(`svg`,{className:`compliance-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,V.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),(0,V.jsxs)(`div`,{className:`compliance-text`,children:[(0,V.jsx)(`strong`,{children:`完全ローカル暗号化（コンプライアンス準拠）`}),(0,V.jsx)(`p`,{children:`お客様や故人様の個人情報は、設定したパスコードで端末内に強力に暗号化（AES）され保存されます。外部サーバーへの送信は一切行われません。`})]})]}),(0,V.jsx)(`style`,{children:`
        .lock-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100vh;
          padding: 40px 24px;
          background-color: var(--bg-primary);
          z-index: 1000;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .lock-header {
          text-align: center;
          margin-top: 20px;
        }

        .lock-logo-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 16px;
          background-color: rgba(217, 119, 6, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(217, 119, 6, 0.2);
          box-shadow: 0 0 20px rgba(217, 119, 6, 0.1);
        }

        .lock-logo {
          width: 48px;
          height: 48px;
          color: var(--color-gold);
        }

        .lock-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .lock-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          max-width: 280px;
          margin: 0 auto;
        }

        .pin-dots {
          display: flex;
          gap: 20px;
          margin: 30px 0;
        }

        .pin-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pin-dot.filled {
          background-color: var(--color-gold);
          border-color: var(--color-gold);
          box-shadow: 0 0 10px var(--color-gold-light);
          transform: scale(1.1);
        }

        .pin-dot.error {
          border-color: var(--color-red);
          animation: shake 0.3s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        .lock-error {
          color: var(--color-red);
          font-size: 13px;
          margin-bottom: 10px;
          text-align: center;
          min-height: 20px;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 320px;
          margin-bottom: 30px;
        }

        .key-btn {
          height: 64px;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 500;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .key-btn:active {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          box-shadow: 0 0 8px var(--border-glow);
          transform: scale(0.92);
        }

        .compliance-banner {
          display: flex;
          gap: 12px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: 12px;
          width: 100%;
          max-width: 380px;
          align-items: flex-start;
        }

        .compliance-icon {
          width: 20px;
          height: 20px;
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .compliance-text {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .compliance-text strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 2px;
        }
      `})]})}function Ce({activeTab:e,setActiveTab:t}){return(0,V.jsxs)(`nav`,{className:`nav-bar`,children:[[{id:`tasks`,label:`案件・タスク`,icon:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,V.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,V.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,V.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,V.jsx)(`polyline`,{points:`10 9 9 9 8 9`})]})},{id:`calendar`,label:`カレンダー`,icon:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`}),(0,V.jsx)(`line`,{x1:`16`,y1:`2`,x2:`16`,y2:`6`}),(0,V.jsx)(`line`,{x1:`8`,y1:`2`,x2:`8`,y2:`6`}),(0,V.jsx)(`line`,{x1:`3`,y1:`10`,x2:`21`,y2:`10`})]})},{id:`gallery`,label:`打合せ書面`,icon:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`}),(0,V.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,V.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]})},{id:`customers`,label:`顧客名簿`,icon:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),(0,V.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,V.jsx)(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87`}),(0,V.jsx)(`path`,{d:`M16 3.13a4 4 0 0 1 0 7.75`})]})},{id:`settings`,label:`設定`,icon:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,V.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z`})]})}].map(n=>(0,V.jsxs)(`button`,{className:`nav-item ${e===n.id?`active`:``}`,onClick:()=>t(n.id),children:[(0,V.jsx)(`div`,{className:`nav-icon`,children:n.icon}),(0,V.jsx)(`span`,{className:`nav-label`,children:n.label})]},n.id)),(0,V.jsx)(`style`,{children:`
        .nav-bar {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px; /* モバイル幅に制限 */
          height: calc(64px + var(--safe-area-bottom));
          background-color: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-bottom: var(--safe-area-bottom);
          z-index: 900;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          height: 100%;
          color: var(--text-secondary);
          transition: color 0.15s ease, transform 0.1s ease;
        }

        .nav-item:active {
          transform: scale(0.95);
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          margin-bottom: 4px;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item.active .nav-icon {
          color: var(--color-gold-light);
          transform: translateY(-2px) scale(1.1);
        }

        .nav-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .nav-item.active .nav-label {
          color: var(--text-primary);
          font-weight: 700;
        }
      `})]})}var we=[{date:`2025-01-29`,lMonth:1,isLeap:!1},{date:`2025-02-28`,lMonth:2,isLeap:!1},{date:`2025-03-29`,lMonth:3,isLeap:!1},{date:`2025-04-28`,lMonth:4,isLeap:!1},{date:`2025-05-27`,lMonth:5,isLeap:!1},{date:`2025-06-25`,lMonth:6,isLeap:!1},{date:`2025-07-25`,lMonth:6,isLeap:!0},{date:`2025-08-23`,lMonth:7,isLeap:!1},{date:`2025-09-22`,lMonth:8,isLeap:!1},{date:`2025-10-21`,lMonth:9,isLeap:!1},{date:`2025-11-20`,lMonth:10,isLeap:!1},{date:`2025-12-19`,lMonth:11,isLeap:!1},{date:`2026-01-17`,lMonth:12,isLeap:!1},{date:`2026-02-17`,lMonth:1,isLeap:!1},{date:`2026-03-19`,lMonth:2,isLeap:!1},{date:`2026-04-17`,lMonth:3,isLeap:!1},{date:`2026-05-17`,lMonth:4,isLeap:!1},{date:`2026-06-15`,lMonth:5,isLeap:!1},{date:`2026-07-14`,lMonth:6,isLeap:!1},{date:`2026-08-13`,lMonth:7,isLeap:!1},{date:`2026-09-11`,lMonth:8,isLeap:!1},{date:`2026-10-11`,lMonth:9,isLeap:!1},{date:`2026-11-09`,lMonth:10,isLeap:!1},{date:`2026-12-09`,lMonth:11,isLeap:!1},{date:`2027-01-08`,lMonth:12,isLeap:!1},{date:`2027-02-07`,lMonth:1,isLeap:!1},{date:`2027-03-08`,lMonth:2,isLeap:!1},{date:`2027-04-07`,lMonth:3,isLeap:!1},{date:`2027-05-06`,lMonth:4,isLeap:!1},{date:`2027-06-05`,lMonth:5,isLeap:!1},{date:`2027-07-04`,lMonth:6,isLeap:!1},{date:`2027-08-02`,lMonth:7,isLeap:!1},{date:`2027-09-01`,lMonth:8,isLeap:!1},{date:`2027-09-30`,lMonth:9,isLeap:!1},{date:`2027-10-29`,lMonth:10,isLeap:!1},{date:`2027-11-28`,lMonth:11,isLeap:!1},{date:`2027-12-28`,lMonth:12,isLeap:!1},{date:`2028-01-27`,lMonth:1,isLeap:!1},{date:`2028-02-25`,lMonth:2,isLeap:!1},{date:`2028-03-26`,lMonth:3,isLeap:!1},{date:`2028-04-25`,lMonth:4,isLeap:!1},{date:`2028-05-24`,lMonth:5,isLeap:!1},{date:`2028-06-23`,lMonth:5,isLeap:!0},{date:`2028-07-22`,lMonth:6,isLeap:!1},{date:`2028-08-20`,lMonth:7,isLeap:!1},{date:`2028-09-19`,lMonth:8,isLeap:!1},{date:`2028-10-18`,lMonth:9,isLeap:!1},{date:`2028-11-16`,lMonth:10,isLeap:!1},{date:`2028-12-16`,lMonth:11,isLeap:!1},{date:`2029-01-15`,lMonth:12,isLeap:!1},{date:`2029-02-12`,lMonth:1,isLeap:!1},{date:`2029-03-14`,lMonth:2,isLeap:!1},{date:`2029-04-12`,lMonth:3,isLeap:!1},{date:`2029-05-12`,lMonth:4,isLeap:!1},{date:`2029-06-10`,lMonth:5,isLeap:!1},{date:`2029-07-10`,lMonth:6,isLeap:!1},{date:`2029-08-08`,lMonth:7,isLeap:!1},{date:`2029-09-07`,lMonth:8,isLeap:!1},{date:`2029-10-06`,lMonth:9,isLeap:!1},{date:`2029-11-05`,lMonth:10,isLeap:!1},{date:`2029-12-04`,lMonth:11,isLeap:!1},{date:`2030-01-03`,lMonth:12,isLeap:!1},{date:`2030-02-01`,lMonth:1,isLeap:!1},{date:`2030-03-03`,lMonth:2,isLeap:!1},{date:`2030-04-01`,lMonth:3,isLeap:!1},{date:`2030-05-01`,lMonth:4,isLeap:!1},{date:`2030-05-30`,lMonth:5,isLeap:!1},{date:`2030-06-29`,lMonth:6,isLeap:!1},{date:`2030-07-28`,lMonth:7,isLeap:!1},{date:`2030-08-27`,lMonth:7,isLeap:!0},{date:`2030-09-25`,lMonth:8,isLeap:!1},{date:`2030-10-25`,lMonth:9,isLeap:!1},{date:`2030-11-23`,lMonth:10,isLeap:!1},{date:`2030-12-23`,lMonth:11,isLeap:!1},{date:`2031-01-21`,lMonth:12,isLeap:!1}],Te=[`大安`,`赤口`,`先勝`,`友引`,`先負`,`仏滅`],Ee=e=>{let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()},De=e=>{let t=new Date(e),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),r=-1;for(let e=0;e<we.length&&Ee(we[e].date)<=n;e++)r=e;if(r===-1)return{name:`不明`,lMonth:0,lDay:0,isLeap:!1};let i=we[r],a=n-Ee(i.date),o=Math.floor(a/(1e3*60*60*24))+1;return{name:Te[(i.lMonth+o)%6],lMonth:i.lMonth,lDay:o,isLeap:i.isLeap}};function Oe({tasks:e,onSelectDate:t,selectedDate:n,onSelectTask:r}){let[i,a]=(0,x.useState)(new Date),o=i.getFullYear(),s=i.getMonth(),c=new Date(o,s,1),l=new Date(o,s+1,0),u=c.getDay(),d=l.getDate(),f=new Date(o,s,0).getDate(),p=()=>{a(new Date(o,s-1,1))},m=()=>{a(new Date(o,s+1,1))},h=e=>{t(new Date(o,s,e))},g=[];for(let e=u-1;e>=0;e--)g.push({day:f-e,isCurrentMonth:!1,dateObj:new Date(o,s-1,f-e)});for(let e=1;e<=d;e++)g.push({day:e,isCurrentMonth:!0,dateObj:new Date(o,s,e)});let _=42-g.length;for(let e=1;e<=_;e++)g.push({day:e,isCurrentMonth:!1,dateObj:new Date(o,s+1,e)});let v=e=>{if(!e)return`blue`;let t=e.toLowerCase();return t.includes(`施行`)||t.includes(`通夜`)||t.includes(`葬儀`)||t.includes(`告別式`)?`red`:t.includes(`法要`)||t.includes(`法事`)||t.includes(`忌`)||t.includes(`盆`)||t.includes(`納骨`)?`purple`:t.includes(`搬送`)?`orange`:t.includes(`相談`)?`green`:t.includes(`見積`)?`yellow`:t.includes(`打合せ`)?`blue`:t.includes(`アフター`)?`pink`:(t.includes(`業務`),`gray`)},y=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,b=t=>{let n=y(t),r=[];return e.forEach(e=>{e.date===n&&r.push({id:`${e.id}_main`,originalTaskId:e.id,title:e.title,category:e.category||`打合せ`,time:e.time||``,color:v(e.category||`打合せ`),notes:e.notes||``,images:e.images||[]})}),r},S=(e,t)=>!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),C=n?`${n.getFullYear()}年${n.getMonth()+1}月${n.getDate()}日`:``,w=n?b(n):[];return(0,V.jsxs)(`div`,{className:`calendar-section fade-in`,children:[(0,V.jsxs)(`div`,{className:`calendar-header`,children:[(0,V.jsx)(`button`,{onClick:p,className:`month-nav-btn`,children:`<`}),(0,V.jsxs)(`h2`,{className:`current-month-label`,children:[o,`年 `,s+1,`月`]}),(0,V.jsx)(`button`,{onClick:m,className:`month-nav-btn`,children:`>`})]}),(0,V.jsx)(`div`,{className:`weekdays-grid`,children:[`日`,`月`,`火`,`水`,`木`,`金`,`土`].map((e,t)=>(0,V.jsx)(`div`,{className:`weekday-cell ${t===0?`sun`:t===6?`sat`:``}`,children:e},t))}),(0,V.jsx)(`div`,{className:`days-grid`,children:g.map((e,t)=>{let r=b(e.dateObj),i=S(e.dateObj,n),a=S(e.dateObj,new Date),o=De(e.dateObj),s=o.name===`友引`;return(0,V.jsxs)(`div`,{className:`day-cell 
                ${e.isCurrentMonth?`current-month`:`other-month`} 
                ${i?`selected`:``} 
                ${a?`today`:``}
                ${s&&e.isCurrentMonth?`tomobiki-highlight`:``}
              `,onClick:()=>e.isCurrentMonth&&h(e.day),children:[(0,V.jsxs)(`div`,{className:`day-top-row`,children:[(0,V.jsx)(`div`,{className:`day-number`,children:e.day}),e.isCurrentMonth&&(0,V.jsx)(`div`,{className:`rokuyo-label ${s?`tomobiki-text`:``}`,children:o.name})]}),(0,V.jsxs)(`div`,{className:`task-bars`,children:[r.slice(0,3).map(e=>(0,V.jsx)(`div`,{className:`task-bar`,style:{backgroundColor:`var(--color-${e.color||`blue`})`},title:e.title,children:e.title},e.id)),r.length>3&&(0,V.jsxs)(`div`,{className:`task-bar-more`,children:[`+`,r.length-3,`件`]})]})]},t)})}),n&&(0,V.jsxs)(`div`,{className:`selected-day-panel`,children:[(0,V.jsxs)(`div`,{className:`panel-header`,children:[(0,V.jsxs)(`h3`,{children:[C,` の案件`]}),(0,V.jsxs)(`span`,{className:`selected-rokuyo-badge`,children:[`六曜: `,De(n).name]})]}),w.length===0?(0,V.jsx)(`p`,{className:`no-tasks-text`,children:`この日の予定はありません。`}):(0,V.jsx)(`div`,{className:`selected-tasks-list`,children:w.map(t=>(0,V.jsxs)(`div`,{className:`selected-task-card`,style:{borderLeftColor:`var(--color-${t.color||`blue`})`},onClick:()=>{let n=e.find(e=>e.id===t.originalTaskId);n&&r(n)},children:[(0,V.jsxs)(`div`,{className:`selected-task-card-header`,children:[(0,V.jsx)(`span`,{className:`selected-task-title`,children:t.title}),(0,V.jsx)(`span`,{className:`badge badge-${t.color||`blue`}`,children:t.category||`その他`})]}),t.notes&&(0,V.jsx)(`p`,{className:`selected-task-notes`,children:t.notes}),(0,V.jsxs)(`div`,{className:`selected-task-footer`,children:[t.time&&(0,V.jsxs)(`span`,{className:`selected-task-time`,children:[`🕒 `,t.time]}),t.images&&t.images.length>0&&(0,V.jsxs)(`span`,{className:`image-attached-indicator`,children:[`📎 書面 (`,t.images.length,`枚) あり`]})]})]},t.id))})]}),(0,V.jsx)(`style`,{children:`
        .calendar-section {
          padding: 16px;
          padding-bottom: 90px;
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .month-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
        }

        .current-month-label {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .weekdays-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 8px;
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .weekday-cell.sun { color: var(--color-red); }
        .weekday-cell.sat { color: var(--color-blue); }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: 78px; /* 文字表示用に高さを拡張 */
          gap: 4px;
          margin-bottom: 20px;
        }

        .day-cell {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid transparent;
          transition: all 0.15s ease;
          position: relative;
        }

        .day-cell.other-month {
          opacity: 0.25;
          pointer-events: none;
        }

        .day-cell.today {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .day-cell.selected {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          box-shadow: 0 0 8px var(--border-glow);
        }

        .day-cell.tomobiki-highlight {
          background-color: rgba(217, 119, 6, 0.04);
          border: 1px solid rgba(217, 119, 6, 0.25);
        }

        .day-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .day-number {
          font-size: 12px;
          font-weight: 600;
        }

        .rokuyo-label {
          font-size: 9px;
          color: var(--text-muted);
          text-align: right;
        }

        .tomobiki-text {
          color: var(--color-amber);
          font-weight: 700;
        }

        /* 改善された予定カラーバー (複数積み重ね表示) */
        .task-bars {
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 100%;
          margin-top: auto;
          overflow: hidden;
        }

        .task-bar {
          width: 100%;
          height: 13px;
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          font-size: 8px;
          line-height: 13px;
          color: #ffffff;
          padding: 0 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 700;
          text-align: left;
        }

        .task-bar-more {
          font-size: 8px;
          color: var(--text-secondary);
          text-align: center;
          line-height: 8px;
          font-weight: 700;
        }

        /* 詳細パネル */
        .selected-day-panel {
          background-color: var(--bg-secondary);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid var(--border-color);
          animation: fadeIn 0.25s ease;
          margin-top: auto;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }

        .panel-header h3 {
          font-size: 15px;
          font-weight: 700;
        }

        .selected-rokuyo-badge {
          font-size: 11px;
          color: var(--color-gold-light);
          background-color: rgba(217, 119, 6, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .no-tasks-text {
          font-size: 13px;
          color: var(--text-secondary);
          text-align: center;
          padding: 16px 0;
        }

        .selected-tasks-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 200px;
          overflow-y: auto;
        }

        .selected-task-card {
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
        }

        .selected-task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .selected-task-title {
          font-size: 14px;
          font-weight: 600;
        }

        .selected-task-notes {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .selected-task-footer {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted);
        }

        .image-attached-indicator {
          color: var(--color-gold);
          font-weight: 500;
        }
      `})]})}var ke=s(((e,t)=>{var n=function(e){var t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return r(o,`_invoke`,{value:E(e,n,new A(i||[]))}),o}e.wrap=u;function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(j([])));S&&S!==t&&n.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);v.prototype=y,r(C,`constructor`,{value:y,configurable:!0}),r(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}e.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return t?t===v||(t.displayName||t.name)===`GeneratorFunction`:!1},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}};function T(e,t){function i(r,a,o,s){var c=d(e[r],e,a);if(c.type===`throw`)s(c.arg);else{var l=c.arg,u=l.value;return u&&typeof u==`object`&&n.call(u,`__await`)?t.resolve(u.__await).then(function(e){i(`next`,e,o,s)},function(e){i(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return i(`throw`,e,o,s)})}}var a;function o(e,n){function r(){return new t(function(t,r){i(e,n,t,r)})}return a=a?a.then(r,r):r()}r(this,`_invoke`,{value:o})}w(T.prototype),l(T.prototype,s,function(){return this}),e.AsyncIterator=T,e.async=function(t,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})};function E(e,t,n){var r=f;return function(i,a){if(r===m)throw Error(`Generator is already running`);if(r===h){if(i===`throw`)throw a;return M()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=D(o,n);if(s){if(s===g)continue;return s}}if(n.method===`next`)n.sent=n._sent=n.arg;else if(n.method===`throw`){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else n.method===`return`&&n.abrupt(`return`,n.arg);r=m;var c=d(e,t,n);if(c.type===`normal`){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}else c.type===`throw`&&(r=h,n.method=`throw`,n.arg=c.arg)}}}function D(e,t){var n=t.method,r=e.iterator[n];if(r===i)return t.delegate=null,n===`throw`&&e.iterator.return&&(t.method=`return`,t.arg=i,D(e,t),t.method===`throw`)||n!==`return`&&(t.method=`throw`,t.arg=TypeError(`The iterator does not provide a '`+n+`' method`)),g;var a=d(r,e.iterator,t.arg);if(a.type===`throw`)return t.method=`throw`,t.arg=a.arg,t.delegate=null,g;var o=a.arg;if(!o)return t.method=`throw`,t.arg=TypeError(`iterator result is not an object`),t.delegate=null,g;if(o.done)t[e.resultName]=o.value,t.next=e.nextLoc,t.method!==`return`&&(t.method=`next`,t.arg=i);else return o;return t.delegate=null,g}w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`});function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(O,this),this.reset(!0)}e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}};function j(e){if(e){var t=e[o];if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:M}}e.values=j;function M(){return{value:i,done:!0}}return A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method=`next`,this.arg=i,this.tryEntries.forEach(k),!e)for(var t in this)t.charAt(0)===`t`&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type=`throw`,s.arg=e,t.next=n,r&&(t.method=`next`,t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return r(`end`);if(o.tryLoc<=this.prev){var c=n.call(o,`catchLoc`),l=n.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else throw Error(`try statement without catch or finally`)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;k(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},this.method===`next`&&(this.arg=i),g}},e}(typeof t==`object`?t.exports:{});try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}})),Ae=s(((e,t)=>{t.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`})),je=s(((e,t)=>{var n=Ae(),r=0;t.exports=({id:e,action:t,payload:i={}})=>{let a=e;return a===void 0&&(a=n(`Job`,r),r+=1),{id:a,action:t,payload:i}}})),Me=s((e=>{var t=!1;e.logging=t,e.setLogging=e=>{t=e},e.log=(...n)=>t?console.log.apply(e,n):null})),Ne=s(((e,t)=>{var n=je(),{log:r}=Me(),i=Ae(),a=0;t.exports=()=>{let t=i(`Scheduler`,a),o={},s={},c=[];a+=1;let l=()=>c.length,u=()=>Object.keys(o).length,d=()=>{if(c.length!==0){let e=Object.keys(o);for(let t=0;t<e.length;t+=1)if(s[e[t]]===void 0){c[0](o[e[t]]);break}}},f=(i,a)=>new Promise((o,l)=>{let u=n({action:i,payload:a});c.push(async t=>{c.shift(),s[t.id]=u;try{o(await t[i].apply(e,[...a,u.id]))}catch(e){l(e)}finally{delete s[t.id],d()}}),r(`[${t}]: Add ${u.id} to JobQueue`),r(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:e=>(o[e.id]=e,r(`[${t}]: Add ${e.id}`),r(`[${t}]: Number of workers=${u()}`),d(),e.id),addJob:async(e,...n)=>{if(u()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return f(e,n)},terminate:async()=>{Object.keys(o).forEach(async e=>{await o[e].terminate()}),c=[]},getQueueLen:l,getNumWorkers:u}}})),H=s(((e,t)=>{t.exports=e=>{let t={};return typeof WorkerGlobalScope<`u`?t.type=`webworker`:typeof document==`object`?t.type=`browser`:typeof process==`object`&&typeof f==`function`&&(t.type=`node`),e===void 0?t:t[e]}})),Pe=s(((e,t)=>{var n=H()(`type`)===`browser`?e=>new URL(e,window.location.href).href:e=>e;t.exports=e=>{let t={...e};return[`corePath`,`workerPath`,`langPath`].forEach(r=>{e[r]&&(t[r]=n(t[r]))}),t}})),Fe=s(((e,t)=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}})),Ie=c({author:()=>``,browser:()=>Ke,bugs:()=>$e,collective:()=>tt,contributors:()=>qe,default:()=>nt,dependencies:()=>Xe,description:()=>ze,devDependencies:()=>Ye,homepage:()=>et,jsdelivr:()=>We,license:()=>Je,main:()=>Be,name:()=>Le,overrides:()=>Ze,repository:()=>Qe,scripts:()=>Ge,type:()=>Ve,types:()=>He,unpkg:()=>Ue,version:()=>Re}),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt=o((()=>{Le=`tesseract.js`,Re=`7.0.0`,ze=`Pure Javascript Multilingual OCR`,Be=`src/index.js`,Ve=`commonjs`,He=`src/index.d.ts`,Ue=`dist/tesseract.min.js`,We=`dist/tesseract.min.js`,Ge={start:`node scripts/server.js`,build:`rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs`,"profile:tesseract":`webpack-bundle-analyzer dist/tesseract-stats.json`,"profile:worker":`webpack-bundle-analyzer dist/worker-stats.json`,prepublishOnly:`npm run build`,wait:`rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js`,test:`npm-run-all -p -r start test:all`,"test:all":`npm-run-all wait test:browser test:node:all`,"test:browser":`karma start karma.conf.js`,"test:node":`nyc mocha --exit --bail --require ./scripts/test-helper.mjs`,"test:node:all":`npm run test:node -- ./tests/*.test.mjs`,lint:`eslint src`,"lint:fix":`eslint --fix src`,postinstall:`opencollective-postinstall || true`},Ke={"./src/worker/node/index.js":`./src/worker/browser/index.js`},qe=[`jeromewu`],Je=`Apache-2.0`,Ye={"@babel/core":`^7.21.4`,"@babel/eslint-parser":`^7.21.3`,"@babel/preset-env":`^7.21.4`,"@rollup/plugin-commonjs":`^24.1.0`,acorn:`^8.8.2`,"babel-loader":`^9.1.2`,buffer:`^6.0.3`,cors:`^2.8.5`,eslint:`^7.32.0`,"eslint-config-airbnb-base":`^14.2.1`,"eslint-plugin-import":`^2.27.5`,"expect.js":`^0.3.1`,express:`^4.18.2`,mocha:`^10.2.0`,"npm-run-all":`^4.1.5`,karma:`^6.4.2`,"karma-chrome-launcher":`^3.2.0`,"karma-firefox-launcher":`^2.1.2`,"karma-mocha":`^2.0.1`,"karma-webpack":`^5.0.0`,nyc:`^15.1.0`,rimraf:`^5.0.0`,rollup:`^3.20.7`,"wait-on":`^7.0.1`,webpack:`^5.79.0`,"webpack-bundle-analyzer":`^4.8.0`,"webpack-cli":`^5.0.1`,"webpack-dev-middleware":`^6.0.2`,"rollup-plugin-sourcemaps":`^0.6.3`},Xe={"bmp-js":`^0.1.0`,"idb-keyval":`^6.2.0`,"is-url":`^1.2.4`,"node-fetch":`^2.6.9`,"opencollective-postinstall":`^2.0.3`,"regenerator-runtime":`^0.13.3`,"tesseract.js-core":`^7.0.0`,"wasm-feature-detect":`^1.8.0`,zlibjs:`^0.3.1`},Ze={"@rollup/pluginutils":`^5.0.2`},Qe={type:`git`,url:`https://github.com/naptha/tesseract.js.git`},$e={url:`https://github.com/naptha/tesseract.js/issues`},et=`https://github.com/naptha/tesseract.js`,tt={type:`opencollective`,url:`https://opencollective.com/tesseractjs`},nt={name:Le,version:Re,description:ze,main:Be,type:Ve,types:He,unpkg:Ue,jsdelivr:We,scripts:Ge,browser:Ke,author:``,contributors:qe,license:Je,devDependencies:Ye,dependencies:Xe,overrides:Ze,repository:Qe,bugs:$e,homepage:et,collective:tt}})),it=s(((e,t)=>{t.exports={workerBlobURL:!0,logger:()=>{}}})),at=s(((e,t)=>{var n=(rt(),d(Ie).default).version;t.exports={...it(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}})),ot=s(((e,t)=>{t.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){let t=new Blob([`importScripts("${e}");`],{type:`application/javascript`});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}})),st=s(((e,t)=>{t.exports=e=>{e.terminate()}})),ct=s(((e,t)=>{t.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}})),lt=s(((e,t)=>{t.exports=async(e,t)=>{e.postMessage(t)}})),ut=s(((e,t)=>{var n=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)}),r=async e=>{let t=e;return e===void 0?`undefined`:(typeof e==`string`?t=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(`,`)[1]).split(``).map(e=>e.charCodeAt(0)):await(await fetch(e)).arrayBuffer():typeof HTMLElement<`u`&&e instanceof HTMLElement?(e.tagName===`IMG`&&(t=await r(e.src)),e.tagName===`VIDEO`&&(t=await r(e.poster)),e.tagName===`CANVAS`&&await new Promise(r=>{e.toBlob(async e=>{t=await n(e),r()})})):typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?t=await n(await e.convertToBlob()):(e instanceof File||e instanceof Blob)&&(t=await n(e)),new Uint8Array(t))};t.exports=r})),dt=s(((e,t)=>{t.exports={defaultOptions:at(),spawnWorker:ot(),terminateWorker:st(),onMessage:ct(),send:lt(),loadImage:ut()}})),ft=s(((e,t)=>{var n=Pe(),r=je(),{log:i}=Me(),a=Ae(),o=Fe(),{defaultOptions:s,spawnWorker:c,terminateWorker:l,onMessage:u,loadImage:d,send:f}=dt(),p=0;t.exports=async(e=`eng`,t=o.LSTM_ONLY,m={},h={})=>{let g=a(`Worker`,p),{logger:_,errorHandler:v,...y}=n({...s,...m}),b={},x=typeof e==`string`?e.split(`+`):e,S=t,C=h,w=[o.DEFAULT,o.LSTM_ONLY].includes(t)&&!y.legacyCore,T,E,D=new Promise((e,t)=>{E=e,T=t}),O=e=>{T(e.message)},k=c(y);k.onerror=O,p+=1;let A=({id:e,action:t,payload:n})=>new Promise((r,a)=>{i(`[${g}]: Start ${e}, action=${t}`);let o=`${t}-${e}`;b[o]={resolve:r,reject:a},f(k,{workerId:g,jobId:e,action:t,payload:n})}),j=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),M=e=>A(r({id:e,action:`load`,payload:{options:{lstmOnly:w,corePath:y.corePath,logging:y.logging}}})),ee=(e,t,n)=>A(r({id:n,action:`FS`,payload:{method:`writeFile`,args:[e,t]}})),N=(e,t)=>A(r({id:t,action:`FS`,payload:{method:`readFile`,args:[e,{encoding:`utf8`}]}})),te=(e,t)=>A(r({id:t,action:`FS`,payload:{method:`unlink`,args:[e]}})),P=(e,t,n)=>A(r({id:n,action:`FS`,payload:{method:e,args:t}})),F=(e,t)=>A(r({id:t,action:`loadLanguage`,payload:{langs:e,options:{langPath:y.langPath,dataPath:y.dataPath,cachePath:y.cachePath,cacheMethod:y.cacheMethod,gzip:y.gzip,lstmOnly:[o.DEFAULT,o.LSTM_ONLY].includes(S)&&!y.legacyLang}}})),I=(e,t,n,i)=>A(r({id:i,action:`initialize`,payload:{langs:e,oem:t,config:n}})),ne=(e=`eng`,t,n,r)=>{if(w&&[o.TESSERACT_ONLY,o.TESSERACT_LSTM_COMBINED].includes(t))throw Error(`Legacy model requested but code missing.`);let i=t||S;S=i;let a=n||C;C=a;let s=(typeof e==`string`?e.split(`+`):e).filter(e=>!x.includes(e));return x.push(...s),s.length>0?F(s,r).then(()=>I(e,i,a,r)):I(e,i,a,r)},L=(e={},t)=>A(r({id:t,action:`setParameters`,payload:{params:e}})),R=async(e,t={},n={text:!0},i)=>A(r({id:i,action:`recognize`,payload:{image:await d(e),options:t,output:n}})),z=async(e,t)=>{if(w)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return A(r({id:t,action:`detect`,payload:{image:await d(e)}}))},B=async()=>(k!==null&&(l(k),k=null),Promise.resolve());u(k,({workerId:e,jobId:t,status:n,action:r,data:a})=>{let o=`${r}-${t}`;if(n===`resolve`)i(`[${e}]: Complete ${t}`),b[o].resolve({jobId:t,data:a}),delete b[o];else if(n===`reject`)if(b[o].reject(a),delete b[o],r===`load`&&T(a),v)v(a);else throw Error(a);else n===`progress`&&_({...a,userJobId:t})});let re={id:g,worker:k,load:j,writeText:ee,readText:N,removeFile:te,FS:P,reinitialize:ne,setParameters:L,recognize:R,detect:z,terminate:B};return M().then(()=>F(e)).then(()=>I(e,t,h)).then(()=>E(re)).catch(()=>{}),D}})),pt=s(((e,t)=>{var n=ft();t.exports={recognize:async(e,t,r)=>{let i=await n(t,1,r);return i.recognize(e).finally(async()=>{await i.terminate()})},detect:async(e,t)=>{let r=await n(`osd`,0,t);return r.detect(e).finally(async()=>{await r.terminate()})}}})),mt=s(((e,t)=>{t.exports={AFR:`afr`,AMH:`amh`,ARA:`ara`,ASM:`asm`,AZE:`aze`,AZE_CYRL:`aze_cyrl`,BEL:`bel`,BEN:`ben`,BOD:`bod`,BOS:`bos`,BUL:`bul`,CAT:`cat`,CEB:`ceb`,CES:`ces`,CHI_SIM:`chi_sim`,CHI_TRA:`chi_tra`,CHR:`chr`,CYM:`cym`,DAN:`dan`,DEU:`deu`,DZO:`dzo`,ELL:`ell`,ENG:`eng`,ENM:`enm`,EPO:`epo`,EST:`est`,EUS:`eus`,FAS:`fas`,FIN:`fin`,FRA:`fra`,FRK:`frk`,FRM:`frm`,GLE:`gle`,GLG:`glg`,GRC:`grc`,GUJ:`guj`,HAT:`hat`,HEB:`heb`,HIN:`hin`,HRV:`hrv`,HUN:`hun`,IKU:`iku`,IND:`ind`,ISL:`isl`,ITA:`ita`,ITA_OLD:`ita_old`,JAV:`jav`,JPN:`jpn`,KAN:`kan`,KAT:`kat`,KAT_OLD:`kat_old`,KAZ:`kaz`,KHM:`khm`,KIR:`kir`,KOR:`kor`,KUR:`kur`,LAO:`lao`,LAT:`lat`,LAV:`lav`,LIT:`lit`,MAL:`mal`,MAR:`mar`,MKD:`mkd`,MLT:`mlt`,MSA:`msa`,MYA:`mya`,NEP:`nep`,NLD:`nld`,NOR:`nor`,ORI:`ori`,PAN:`pan`,POL:`pol`,POR:`por`,PUS:`pus`,RON:`ron`,RUS:`rus`,SAN:`san`,SIN:`sin`,SLK:`slk`,SLV:`slv`,SPA:`spa`,SPA_OLD:`spa_old`,SQI:`sqi`,SRP:`srp`,SRP_LATN:`srp_latn`,SWA:`swa`,SWE:`swe`,SYR:`syr`,TAM:`tam`,TEL:`tel`,TGK:`tgk`,TGL:`tgl`,THA:`tha`,TIR:`tir`,TUR:`tur`,UIG:`uig`,UKR:`ukr`,URD:`urd`,UZB:`uzb`,UZB_CYRL:`uzb_cyrl`,VIE:`vie`,YID:`yid`}})),ht=s(((e,t)=>{t.exports={OSD_ONLY:`0`,AUTO_OSD:`1`,AUTO_ONLY:`2`,AUTO:`3`,SINGLE_COLUMN:`4`,SINGLE_BLOCK_VERT_TEXT:`5`,SINGLE_BLOCK:`6`,SINGLE_LINE:`7`,SINGLE_WORD:`8`,CIRCLE_WORD:`9`,SINGLE_CHAR:`10`,SPARSE_TEXT:`11`,SPARSE_TEXT_OSD:`12`,RAW_LINE:`13`}})),gt=s(((e,t)=>{ke();var n=Ne(),r=ft(),i=pt(),a=mt(),o=Fe(),s=ht(),{setLogging:c}=Me();t.exports={languages:a,OEM:o,PSM:s,createScheduler:n,createWorker:r,setLogging:c,...i}}))();function _t({imageData:e,onSave:t,onClose:n}){let r=(0,x.useRef)(null),i=(0,x.useRef)(null),[a,o]=(0,x.useState)(`pen`),[s,c]=(0,x.useState)(`#e11d48`),[l,u]=(0,x.useState)(4),[d,f]=(0,x.useState)(!1),[p,m]=(0,x.useState)(``),[h,g]=(0,x.useState)(!1),[_,v]=(0,x.useState)({width:0,height:0}),y=(0,x.useRef)({x:0,y:0}),b=(0,x.useRef)(null);(0,x.useEffect)(()=>{let t=new Image;t.src=e,t.onload=()=>{b.current=t;let e=Math.min(window.innerWidth-32,448),n=e/t.width,i=e,a=t.height*n;v({width:i,height:a}),setTimeout(()=>{let e=r.current;e&&e.getContext(`2d`).drawImage(t,0,0,i,a)},50)}},[e]);let S=e=>{let t=r.current;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect();return e.touches&&e.touches.length>0?{x:e.touches[0].clientX-n.left,y:e.touches[0].clientY-n.top}:{x:e.clientX-n.left,y:e.clientY-n.top}},C=e=>{if(a===`text`){y.current=S(e),g(!0);return}f(!0),y.current=S(e)},w=e=>{if(!d||a===`text`)return;e.cancelable&&e.preventDefault();let t=r.current;if(!t)return;let n=t.getContext(`2d`),i=S(e);n.beginPath(),n.moveTo(y.current.x,y.current.y),n.lineTo(i.x,i.y),a===`eraser`?(n.globalCompositeOperation=`destination-out`,n.lineWidth=l*4):(n.globalCompositeOperation=`source-over`,n.strokeStyle=s,n.lineWidth=l,n.lineCap=`round`,n.lineJoin=`round`),n.stroke(),y.current=i},T=()=>{f(!1)};return(0,V.jsxs)(`div`,{className:`editor-modal-overlay`,onClick:n,children:[(0,V.jsxs)(`div`,{className:`editor-modal-content`,onClick:e=>e.stopPropagation(),ref:i,children:[(0,V.jsxs)(`div`,{className:`editor-modal-header`,children:[(0,V.jsx)(`h3`,{children:`写真に注釈・赤入れ`}),(0,V.jsx)(`button`,{className:`close-btn`,onClick:n,children:`✕`})]}),(0,V.jsxs)(`div`,{className:`canvas-wrapper`,children:[(0,V.jsx)(`canvas`,{ref:r,width:_.width,height:_.height,onMouseDown:C,onMouseMove:w,onMouseUp:T,onMouseLeave:T,onTouchStart:C,onTouchMove:w,onTouchEnd:T,className:`editor-canvas`}),h&&(0,V.jsx)(`div`,{className:`canvas-text-input-overlay`,children:(0,V.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),!p.trim()){g(!1);return}let t=r.current;if(!t)return;let n=t.getContext(`2d`);n.globalCompositeOperation=`source-over`,n.font=`bold ${l*4}px var(--font-sans)`,n.fillStyle=s,n.strokeStyle=`#ffffff`,n.lineWidth=4,n.strokeText(p,y.current.x,y.current.y),n.fillText(p,y.current.x,y.current.y),m(``),g(!1)},className:`text-input-form`,children:[(0,V.jsx)(`input`,{type:`text`,value:p,onChange:e=>m(e.target.value),placeholder:`入力して確定してください...`,autoFocus:!0,className:`canvas-inline-input`}),(0,V.jsxs)(`div`,{className:`form-btns`,children:[(0,V.jsx)(`button`,{type:`submit`,className:`text-confirm-btn`,children:`確定`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>g(!1),className:`text-cancel-btn`,children:`取消`})]})]})})]}),(0,V.jsxs)(`div`,{className:`editor-toolbar`,children:[(0,V.jsxs)(`div`,{className:`toolbar-row`,children:[(0,V.jsx)(`span`,{className:`row-label`,children:`ツール:`}),(0,V.jsxs)(`div`,{className:`tool-selector`,children:[(0,V.jsx)(`button`,{type:`button`,className:`tool-btn ${a===`pen`?`active`:``}`,onClick:()=>o(`pen`),children:`🖊️ ペン`}),(0,V.jsx)(`button`,{type:`button`,className:`tool-btn ${a===`eraser`?`active`:``}`,onClick:()=>o(`eraser`),children:`🧽 消しゴム`}),(0,V.jsx)(`button`,{type:`button`,className:`tool-btn ${a===`text`?`active`:``}`,onClick:()=>o(`text`),children:`🔤 文字入れ`})]})]}),a!==`eraser`&&(0,V.jsxs)(`div`,{className:`toolbar-row`,children:[(0,V.jsx)(`span`,{className:`row-label`,children:`カラー:`}),(0,V.jsx)(`div`,{className:`color-selector`,children:[{hex:`#e11d48`,label:`赤`},{hex:`#2563eb`,label:`青`},{hex:`#1e293b`,label:`黒`}].map(e=>(0,V.jsx)(`button`,{type:`button`,className:`color-btn ${s===e.hex?`selected`:``}`,style:{backgroundColor:e.hex},onClick:()=>c(e.hex),title:e.label},e.hex))})]}),(0,V.jsxs)(`div`,{className:`toolbar-row`,children:[(0,V.jsx)(`span`,{className:`row-label`,children:`サイズ:`}),(0,V.jsx)(`div`,{className:`brush-selector`,children:[{size:3,label:`細`},{size:6,label:`中`},{size:10,label:`太`}].map(e=>(0,V.jsx)(`button`,{type:`button`,className:`brush-btn ${l===e.size?`active`:``}`,onClick:()=>u(e.size),children:e.label},e.size))})]})]}),(0,V.jsxs)(`div`,{className:`editor-modal-footer`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>{if(window.confirm(`すべての書き込みをクリアして元画像に戻しますか？`)){let e=r.current;if(!e||!b.current)return;let t=e.getContext(`2d`);t.globalCompositeOperation=`source-over`,t.clearRect(0,0,_.width,_.height),t.drawImage(b.current,0,0,_.width,_.height)}},className:`reset-btn-editor`,children:`🔄 全クリア`}),(0,V.jsxs)(`div`,{className:`right-btns`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:n,className:`cancel-btn-editor`,children:`キャンセル`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{let e=r.current;e&&t(e.toDataURL(`image/jpeg`,.85))},className:`save-btn-editor`,children:`💾 保存する`})]})]})]}),(0,V.jsx)(`style`,{children:`
        .editor-modal-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: rgba(0,0,0,0.8);
          backdrop-filter: blur(4px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .editor-modal-content {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-height: 95vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .editor-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .editor-modal-header h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .close-btn {
          font-size: 16px;
          color: var(--text-secondary);
        }

        /* キャンバス領域 */
        .canvas-wrapper {
          position: relative;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 260px;
          max-height: 50vh;
        }

        .editor-canvas {
          display: block;
          touch-action: none; /* スマホブラウザのスクロール等を防止 */
        }

        /* インラインテキスト入力 */
        .canvas-text-input-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10;
        }

        .text-input-form {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: 12px;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .canvas-inline-input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
        }

        .form-btns {
          display: flex;
          gap: 10px;
        }

        .text-confirm-btn {
          flex: 1;
          background-color: var(--color-gold);
          color: white;
          padding: 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
        }

        .text-cancel-btn {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
        }

        /* ツールバー */
        .editor-toolbar {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          background-color: rgba(255,255,255,0.01);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .toolbar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .row-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          width: 50px;
          text-transform: uppercase;
        }

        .tool-selector, .brush-selector {
          display: flex;
          gap: 8px;
          flex: 1;
        }

        .tool-btn, .brush-btn {
          flex: 1;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
        }

        .tool-btn.active, .brush-btn.active {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          color: var(--text-primary);
        }

        .color-selector {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .color-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: transform 0.15s;
        }

        .color-btn.selected {
          border-color: white;
          transform: scale(1.15);
          box-shadow: 0 0 8px rgba(255,255,255,0.2);
        }

        /* フッター */
        .editor-modal-footer {
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reset-btn-editor {
          background-color: rgba(225, 29, 72, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(225, 29, 72, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .right-btns {
          display: flex;
          gap: 10px;
        }

        .cancel-btn-editor {
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
        }

        .save-btn-editor {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
      `})]})}function vt({tasks:e,passcode:t,categories:n=[],onAddTask:r,onUpdateTask:i,onDeleteTask:a,targetEditTaskId:o,clearTargetEditTaskId:s}){let[c,l]=(0,x.useState)(!1),[u,d]=(0,x.useState)(null),[f,p]=(0,x.useState)(`active`),[m,h]=(0,x.useState)(`recent`),[g,_]=(0,x.useState)(``),[v,y]=(0,x.useState)(new Date().toISOString().split(`T`)[0]),[b,S]=(0,x.useState)(``),[C,w]=(0,x.useState)(`打合せ`),[T,E]=(0,x.useState)(`blue`),[D,O]=(0,x.useState)(``),[k,A]=(0,x.useState)([]),[j,M]=(0,x.useState)(!1),[ee,N]=(0,x.useState)(0),[te,P]=(0,x.useState)(``),[F,I]=(0,x.useState)(!1),[ne,L]=(0,x.useState)(null),[R,z]=(0,x.useState)(null),[B,re]=(0,x.useState)(null),[ie,ae]=(0,x.useState)(null);(0,x.useEffect)(()=>{if(o){let t=e.find(e=>e.id===o);t&&ke(t),s()}},[o]);let[oe,se]=(0,x.useState)(new Date),[ce,le]=(0,x.useState)([]),[ue,de]=(0,x.useState)([]),fe=(0,x.useRef)(null),pe=(0,x.useRef)(null);(0,x.useEffect)(()=>{let t=setInterval(()=>{let t=new Date;se(t),e.forEach(e=>{if(e.status!==`completed`&&e.date&&e.time){let n=new Date(`${e.date}T${e.time}:00`).getTime();t.getTime()>=n&&t.getTime()-n<6e4&&!ue.includes(e.id)&&!ce.includes(e.id)&&(le(t=>[...t,e.id]),de(t=>[...t,e.id]),`vibrate`in navigator&&navigator.vibrate([500,250,500,250,500]))}})},1e3);return()=>clearInterval(t)},[e,ue,ce]),(0,x.useEffect)(()=>{if(ce.length>0){if(!pe.current){let e=()=>{try{fe.current||=new(window.AudioContext||window.webkitAudioContext);let e=fe.current;e.state===`suspended`&&e.resume();let t=e.createOscillator(),n=e.createGain();t.type=`square`,t.frequency.setValueAtTime(880,e.currentTime),n.gain.setValueAtTime(0,e.currentTime),n.gain.linearRampToValueAtTime(.2,e.currentTime+.02),n.gain.setValueAtTime(.2,e.currentTime+.15),n.gain.linearRampToValueAtTime(0,e.currentTime+.2),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.2)}catch(e){console.error(`アラーム再生失敗:`,e)}};e(),pe.current=setInterval(e,1e3)}}else pe.current&&=(clearInterval(pe.current),null);return()=>{pe.current&&=(clearInterval(pe.current),null)}},[ce]);let me=e=>{le(t=>t.filter(t=>t!==e))},he=()=>{fe.current||=new(window.AudioContext||window.webkitAudioContext)},ge=e=>{if(!e.date||!e.time)return`時間未設定`;let t=new Date(`${e.date}T${e.time}:00`).getTime()-oe.getTime();if(t<=0)return`⚠️ 期限超過`;let n=Math.floor(t/1e3),r=Math.floor(n/86400),i=Math.floor(n%86400/3600),a=Math.floor(n%3600/60),o=n%60,s=e=>e.toString().padStart(2,`0`);return r>0?`${r}日 ${s(i)}時間 ${s(a)}分`:i>0?`${s(i)}時間 ${s(a)}分 ${s(o)}秒`:`${s(a)}分 ${s(o)}秒`},_e=e=>{if(!e.date||!e.time)return`normal`;let t=new Date(`${e.date}T${e.time}:00`).getTime()-oe.getTime();if(t<=0)return`red`;let n=t/(1e3*60*60*24);return n<=1?`orange`:n<=3?`yellow`:n<=7?`cyan`:`green`},ve=e=>new Promise(t=>{let n=new FileReader;n.readAsDataURL(e),n.onload=e=>{let n=new Image;n.src=e.target.result,n.onload=()=>{let e=document.createElement(`canvas`),r=n.width,i=n.height;r>800&&(i=Math.round(i*800/r),r=800),e.width=r,e.height=i,e.getContext(`2d`).drawImage(n,0,0,r,i),t(e.toDataURL(`image/jpeg`,.6))}}}),ye=async e=>{let t=Array.from(e.target.files);if(t.length===0)return;let n=await Promise.all(t.map(async e=>{let t=await ve(e);return{id:`img_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,data:t}}));A(e=>[...e,...n])},be=async e=>{let t=e.target.files[0];if(t){M(!0),N(0),P(``);try{let e=await ve(t),n={id:`img_${Date.now()}`,data:e};A(e=>[...e,n]);let r=await(0,gt.createWorker)(`jpn`,1,{logger:e=>{e.status===`recognizing text`&&N(Math.floor(e.progress*100))}}),{data:{text:i}}=await r.recognize(e);P(i),await r.terminate()}catch(e){console.error(`OCR処理エラー:`,e),alert(`文字認識に失敗しました。`)}finally{M(!1)}}},xe=e=>{A(t=>t.filter(t=>t.id!==e))},Se=e=>{ae(e)},Ce=e=>{A(t=>t.map(t=>t.id===ie.id?{...t,data:e}:t)),ae(null)},we=e=>{if(!B)return;let{task:t,eventId:n,imageId:r}=B,a=(t.events||[]).map(t=>t.id===n?{...t,images:(t.images||[]).map(t=>t.id===r?{...t,data:e}:t)}:t);i(t.id,{events:a}),re(null)},Te=e=>e.images&&Array.isArray(e.images)?e.images:e.imageData?[{id:`img_migrated`,data:e.imageData}]:[],Ee=e=>{w(e);let t=(n||[]).find(t=>t.name===e);t&&t.color?E(t.color):E(`blue`)},De=e=>{e.preventDefault(),g.trim()&&(u?(i(u,{title:g,date:v,time:b,category:C,color:T,notes:D,images:k,hasImage:k.length>0}),d(null)):(r({title:g,date:v,time:b,category:C,color:T,notes:D,images:k,hasImage:k.length>0,status:`active`}),l(!1)),Oe())},Oe=()=>{_(``),y(new Date().toISOString().split(`T`)[0]),S(``),w(`打合せ`),E(`blue`),O(``),A([]),P(``),I(!1)},ke=e=>{d(e.id),_(e.title),y(e.date),S(e.time||``),w(e.category||`打合せ`),E(e.color||`blue`),O(e.notes||``),A(Te(e)),l(!0)},Ae=()=>{d(null),l(!1),Oe()},je=e=>{i(e.id,{status:e.status===`completed`?`active`:`completed`})},Me=e=>{if(!e.date)return 1/0;let t=e.time||`00:00`;return new Date(`${e.date}T${t}:00`).getTime()},Ne=(()=>{let t=e.filter(e=>f===`active`?e.status!==`completed`:e.status===`completed`);if(f===`completed`&&m===`recent`){let e=oe.getTime()-720*60*60*1e3;t=t.filter(t=>{let n=Me(t);return n===1/0||n>=e})}return t.sort((e,t)=>{let n=Me(e),r=Me(t);return f===`completed`?r-n:n-r})})();return(0,V.jsxs)(`div`,{className:`task-section fade-in`,onClick:he,children:[c?(0,V.jsxs)(`div`,{className:`add-task-form-container`,children:[(0,V.jsxs)(`div`,{className:`form-header`,children:[(0,V.jsx)(`h2`,{children:u?`案件情報の編集`:`新規案件登録`}),(0,V.jsx)(`button`,{onClick:u?Ae:()=>l(!1),className:`close-form-btn`,children:`キャンセル`})]}),(0,V.jsxs)(`form`,{onSubmit:De,className:`task-form`,children:[(0,V.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`14px`},children:[(0,V.jsx)(`label`,{children:`👤 顧客名簿から情報をコピー`}),(0,V.jsxs)(`select`,{onChange:t=>{let n=t.target.value;if(!n)return;let r=e.find(e=>e.id===n);r&&(_(`${r.deceasedLastName?`${r.deceasedLastName}家`:r.title||`新規お客様`} 葬儀`),O(`【顧客情報コピー】\n故人名: ${r.deceasedLastName||``} ${r.deceasedFirstName||``}\n喪主名: ${r.mournerLastName||``} ${r.mournerFirstName||``}\n連絡先: ${r.contact||``}\n寺院宗派: ${r.templeName||``} (${r.sect||``})`))},className:`load-customer-select`,defaultValue:``,style:{width:`100%`,padding:`8px 12px`,borderRadius:`8px`,backgroundColor:`var(--bg-secondary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,fontSize:`13px`,outline:`none`,cursor:`pointer`},children:[(0,V.jsx)(`option`,{value:``,children:`-- [顧客名簿から選択して自動入力] --`}),e.filter(e=>e.deceasedLastName||e.title).map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.deceasedLastName?`${e.deceasedLastName}家 (故人: ${e.deceasedLastName} ${e.deceasedFirstName||``})`:e.title},e.id))]})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`案件名（故人名/家名など）*`}),(0,V.jsx)(`input`,{type:`text`,value:g,onChange:e=>_(e.target.value),placeholder:`例：山田家 葬儀`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-row`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`日付 (期限)`}),(0,V.jsx)(`input`,{type:`date`,value:v,onChange:e=>y(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`時間 (アラーム時刻)`}),(0,V.jsx)(`input`,{type:`time`,value:b,onChange:e=>S(e.target.value)})]})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`カテゴリ`}),(0,V.jsx)(`select`,{value:C,onChange:e=>Ee(e.target.value),children:n.map(e=>(0,V.jsx)(`option`,{value:e.name,children:e.name},e.id))})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`打ち合わせメモ / 備考`}),(0,V.jsx)(`textarea`,{rows:`4`,value:D,onChange:e=>O(e.target.value),placeholder:`打合せの要点や注意事項を入力...`})]}),(0,V.jsxs)(`div`,{className:`ocr-upload-section`,children:[(0,V.jsxs)(`div`,{className:`section-title-row`,children:[(0,V.jsx)(`h3`,{children:`打合せ書面（写真）の添付`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>I(!F),className:`ocr-toggle-link`,children:F?`写真を普通に添付する`:`ローカルAIで写真の文字を読み取る`})]}),F?(0,V.jsxs)(`div`,{className:`ocr-panel`,children:[(0,V.jsx)(`div`,{className:`ocr-desc`,children:`カメラで書面を撮影すると、ローカルAIが文字を抽出し、フォームに転記できます。画像も自動添付されます。`}),(0,V.jsxs)(`div`,{className:`file-input-wrapper`,children:[(0,V.jsx)(`input`,{type:`file`,accept:`image/*`,capture:`environment`,onChange:be,id:`ocr-file-picker`}),(0,V.jsx)(`label`,{htmlFor:`ocr-file-picker`,className:`file-picker-label`,children:`📷 カメラ起動 / 写真を選択`})]}),j&&(0,V.jsxs)(`div`,{className:`ocr-progress-bar-container`,children:[(0,V.jsx)(`div`,{className:`ocr-loading-spinner`}),(0,V.jsxs)(`div`,{className:`ocr-progress-text`,children:[`文字認識中... (`,ee,`%)`]}),(0,V.jsx)(`div`,{className:`ocr-progress-track`,children:(0,V.jsx)(`div`,{className:`ocr-progress-fill`,style:{width:`${ee}%`}})})]}),te&&(0,V.jsxs)(`div`,{className:`ocr-result-container`,children:[(0,V.jsx)(`label`,{children:`AI読み取り結果（タップで転記）`}),(0,V.jsx)(`textarea`,{rows:`5`,value:te,readOnly:!0,className:`ocr-result-textarea`}),(0,V.jsxs)(`div`,{className:`ocr-action-buttons`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>{_(te.slice(0,30).replace(/\n/g,` `))},className:`ocr-fill-btn`,children:`案件名に設定`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{O(e=>e?`${e}\n\n【読み取りテキスト】\n${te}`:te)},className:`ocr-fill-btn`,children:`備考に追記`})]})]})]}):(0,V.jsxs)(`div`,{className:`normal-upload-panel`,children:[(0,V.jsxs)(`div`,{className:`file-input-wrapper`,children:[(0,V.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:ye,id:`normal-file-picker`}),(0,V.jsx)(`label`,{htmlFor:`normal-file-picker`,className:`file-picker-label`,children:`📁 写真を追加添付 / カメラで複数撮影`})]}),k.length>0&&(0,V.jsx)(`div`,{className:`form-images-preview-list`,children:k.map((e,t)=>(0,V.jsxs)(`div`,{className:`preview-image-item-wrapper`,children:[(0,V.jsx)(`img`,{src:e.data,alt:`サムネイル`,className:`form-preview-thumb`}),(0,V.jsxs)(`div`,{className:`preview-actions-overlay`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>Se(e),className:`img-edit-action-btn`,children:`✏️ 赤入れ`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>xe(e.id),className:`img-remove-action-btn`,children:`✕`})]})]},e.id))})]})]}),(0,V.jsx)(`button`,{type:`submit`,className:`submit-task-btn`,children:u?`変更を保存する`:`案件を保存する`})]})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`task-header-controls`,children:[(0,V.jsxs)(`div`,{className:`task-tabs`,children:[(0,V.jsxs)(`button`,{className:`task-tab ${f===`active`?`active`:``}`,onClick:()=>p(`active`),children:[`未完了 (`,e.filter(e=>e.status!==`completed`).length,`)`]}),(0,V.jsxs)(`button`,{className:`task-tab ${f===`completed`?`active`:``}`,onClick:()=>p(`completed`),children:[`完了済 (`,e.filter(e=>e.status===`completed`).length,`)`]})]}),f===`completed`&&(0,V.jsxs)(`div`,{className:`archive-filter-row`,children:[(0,V.jsx)(`span`,{className:`filter-label`,children:`履歴の表示範囲:`}),(0,V.jsxs)(`div`,{className:`archive-toggle-group`,children:[(0,V.jsx)(`button`,{className:`archive-toggle-btn ${m===`recent`?`active`:``}`,onClick:()=>h(`recent`),children:`直近30日分`}),(0,V.jsx)(`button`,{className:`archive-toggle-btn ${m===`all`?`active`:``}`,onClick:()=>h(`all`),children:`すべての過去ログ`})]})]}),(0,V.jsx)(`button`,{onClick:()=>{l(!0),d(null)},className:`add-task-trigger-btn`,children:`＋ 新規案件登録`})]}),(0,V.jsx)(`div`,{className:`tasks-list-container`,children:Ne.length===0?(0,V.jsx)(`p`,{className:`no-tasks-placeholder`,children:f===`completed`&&m===`recent`?`直近30日間に完了した案件はありません。古い記録は「すべての過去ログ」から確認できます。`:`登録されている案件はありません。`}):Ne.map(e=>{let n=ce.includes(e.id),r=e.date&&e.time,i=ge(e),o=i===`⚠️ 期限超過`,s=Te(e);return(0,V.jsxs)(`div`,{className:`task-card 
                      ${e.status===`completed`?`completed`:``} 
                      ${n?`alarm-ringing`:``}
                    `,style:{borderLeftColor:`var(--color-${e.color||`blue`})`},children:[n&&(0,V.jsx)(`div`,{className:`alarm-flashing-overlay`}),(0,V.jsxs)(`div`,{className:`task-card-header`,children:[(0,V.jsx)(`span`,{className:`task-card-title`,children:e.title}),(0,V.jsxs)(`div`,{className:`task-card-actions`,children:[n&&(0,V.jsx)(`button`,{onClick:()=>me(e.id),className:`card-alarm-stop-btn`,children:`🔕 音を止める`}),(0,V.jsx)(`button`,{onClick:()=>je(e),className:`status-toggle-btn ${e.status===`completed`?`reopen`:`done`}`,children:e.status===`completed`?`未完了に戻す`:`完了`}),(0,V.jsx)(`button`,{onClick:()=>ke(e),className:`edit-icon-btn`,title:`編集`,children:`✏️`}),(0,V.jsx)(`button`,{onClick:()=>{let n=window.prompt(`【警告】この案件データを完全に削除します。よろしければログイン用のパスコードを入力してください：`);if(n!==null){if(n!==String(t)){alert(`パスコードが一致しないため、削除を中止しました。`);return}a(e.id)}},className:`delete-btn`,title:`削除`,children:`🗑️`})]})]}),(0,V.jsxs)(`div`,{className:`task-card-meta`,children:[(0,V.jsxs)(`span`,{className:`meta-item`,children:[`📅 `,e.date,` `,e.time?`🕒 ${e.time}`:`🕒 時間未指定`]}),(0,V.jsx)(`span`,{className:`badge badge-${e.color||`blue`}`,children:e.category})]}),e.status!==`completed`&&r&&(0,V.jsxs)(`div`,{className:`task-card-countdown-timer timer-color-${_e(e)}`,children:[(0,V.jsxs)(`svg`,{className:`timer-icon-inline`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,V.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,V.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]}),(0,V.jsx)(`span`,{className:`countdown-time-label`,children:o?`期限を超過しています`:`期限まで: ${i}`})]}),e.notes&&(0,V.jsx)(`p`,{className:`task-card-notes`,children:e.notes}),s.length>0&&(0,V.jsxs)(`div`,{className:`task-card-image-attachment`,children:[(0,V.jsxs)(`div`,{className:`attachment-label`,children:[`📎 添付書面（`,s.length,`枚 - タップで拡大）:`]}),(0,V.jsx)(`div`,{className:`task-thumbnails-scroll-container`,children:s.map((e,t)=>(0,V.jsx)(`div`,{className:`task-thumbnail-wrapper-multiple`,onClick:()=>L(e),children:(0,V.jsx)(`img`,{src:e.data,alt:`添付書面 ${t+1}`,className:`task-card-thumbnail`})},e.id||t))})]})]},e.id)})})]}),ne&&(0,V.jsx)(`div`,{className:`preview-modal-overlay`,onClick:()=>L(null),children:(0,V.jsxs)(`div`,{className:`preview-modal-content`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`preview-modal-header`,children:[(0,V.jsx)(`span`,{className:`preview-modal-title`,children:`添付書面 拡大プレビュー`}),(0,V.jsx)(`button`,{className:`preview-modal-close`,onClick:()=>L(null),children:`✕`})]}),(0,V.jsx)(`div`,{className:`preview-modal-img-container`,children:(0,V.jsx)(`img`,{src:ne.data,alt:`拡大書面`,className:`preview-modal-img`})}),(0,V.jsx)(`div`,{className:`preview-modal-footer`,children:`ピンチイン・アウト、またはドラッグでスクロールしてご確認いただけます。`})]})}),ie&&(0,V.jsx)(_t,{imageData:ie.data,onSave:Ce,onClose:()=>ae(null)}),B&&(0,V.jsx)(_t,{imageData:B.data,onSave:we,onClose:()=>re(null)}),(0,V.jsx)(`style`,{children:`
        .task-section {
          padding: 16px;
          padding-bottom: 90px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }

        .task-header-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .task-tabs {
          display: flex;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 2px;
          border: 1px solid var(--border-color);
        }

        .task-tab {
          flex: 1;
          padding: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: center;
          border-radius: 6px;
        }

        .task-tab.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }

        /* 完了アーカイブ用トグル */
        .archive-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          border-radius: 10px;
          margin-top: 4px;
        }

        .filter-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .archive-toggle-group {
          display: flex;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 2px;
        }

        .archive-toggle-btn {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          color: var(--text-secondary);
          border-radius: 4px;
        }

        .archive-toggle-btn.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .add-task-trigger-btn {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px; /* 14px -> 16px */
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        .tasks-list-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          flex: 1;
        }

        .no-tasks-placeholder {
          text-align: center;
          color: var(--text-secondary);
          font-size: 14px;
          padding: 40px 16px;
          line-height: 1.5;
        }

        .task-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 5px solid var(--color-blue); /* 4px -> 5px */
          border-radius: 12px;
          padding: 18px; /* 16px -> 18px */
          position: relative;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .task-card.completed {
          opacity: 0.5;
        }

        .task-card.alarm-ringing {
          border-color: var(--color-red) !important;
          box-shadow: 0 0 15px rgba(225, 29, 72, 0.4);
          animation: cardShake 0.4s infinite ease-in-out;
        }

        @keyframes cardShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-0.5deg); }
          75% { transform: rotate(0.5deg); }
        }

        .alarm-flashing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(225, 29, 72, 0.05);
          pointer-events: none;
          animation: flashRed 1s infinite alternate;
          z-index: 1;
        }

        @keyframes flashRed {
          from { opacity: 0.2; }
          to { opacity: 0.8; }
        }

        .task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        /* 文字サイズの大幅拡大 */
        .task-card-title {
          font-size: 20px; /* 16px -> 20px */
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .task-card-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-shrink: 0;
        }

        .status-toggle-btn {
          font-size: 12px; /* 11px -> 12px */
          font-weight: 700;
          padding: 6px 10px; /* 余白拡大 */
          border-radius: 6px;
        }

        .status-toggle-btn.done {
          background-color: rgba(217, 119, 6, 0.1);
          color: var(--color-gold-light);
          border: 1px solid rgba(217, 119, 6, 0.3);
        }

        .status-toggle-btn.reopen {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .card-alarm-stop-btn {
          background: linear-gradient(135deg, var(--color-red), #991b1b);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 6px;
          animation: bounce 1s infinite alternate;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        @keyframes bounce {
          from { transform: scale(0.95); }
          to { transform: scale(1.05); }
        }

        .edit-icon-btn, .delete-btn {
          background: none;
          border: none;
          font-size: 16px; /* 14px -> 16px */
          cursor: pointer;
        }

        .task-card-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap; /* 折り返し対応 */
          margin-bottom: 12px;
          position: relative;
          z-index: 2;
        }

        .meta-item {
          font-size: 17px; /* 14px -> 17px */
          font-weight: 700; /* より太く強調 */
          color: var(--text-primary);
        }

        /* カウントダウン表示タイマーの拡大 */
        .task-card-countdown-timer {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(217, 119, 6, 0.06);
          border: 1px solid rgba(217, 119, 6, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          color: var(--color-gold-light);
          position: relative;
          z-index: 2;
        }

        .task-card-countdown-timer.timer-color-red {
          background-color: rgba(225, 29, 72, 0.06);
          border-color: rgba(225, 29, 72, 0.25);
          color: var(--color-red);
        }

        .task-card-countdown-timer.timer-color-orange {
          background-color: rgba(249, 115, 22, 0.06);
          border-color: rgba(249, 115, 22, 0.25);
          color: var(--color-orange);
        }

        .task-card-countdown-timer.timer-color-yellow {
          background-color: rgba(234, 179, 8, 0.06);
          border-color: rgba(234, 179, 8, 0.25);
          color: var(--color-yellow);
        }

        .task-card-countdown-timer.timer-color-cyan {
          background-color: rgba(6, 182, 212, 0.06);
          border-color: rgba(6, 182, 212, 0.25);
          color: #06b6d4; /* シアン */
        }

        .task-card-countdown-timer.timer-color-green {
          background-color: rgba(34, 197, 94, 0.06);
          border-color: rgba(34, 197, 94, 0.25);
          color: var(--color-green);
        }

        .timer-icon-inline {
          width: 16px;
          height: 16px;
        }

        .countdown-time-label {
          font-size: 15px; /* 12px -> 15px */
          font-weight: 700;
          font-family: monospace;
        }

        /* メモ文字の拡大 */
        .task-card-notes {
          font-size: 16px; /* 13px -> 16px */
          color: var(--text-primary);
          line-height: 1.5; /* 読みやすさ向上 */
          margin-bottom: 12px;
          background-color: rgba(255,255,255,0.015);
          padding: 10px 12px;
          border-radius: 6px;
          border-left: 3px solid var(--border-color);
          white-space: pre-wrap;
          position: relative;
          z-index: 2;
        }

        /* 複数書面カルーセル */
        .task-card-image-attachment {
          margin-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 8px;
          position: relative;
          z-index: 2;
        }

        .attachment-label {
          font-size: 13px; /* 11px -> 13px */
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .task-thumbnails-scroll-container {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
          -webkit-overflow-scrolling: touch;
        }

        .task-thumbnail-wrapper-multiple {
          flex-shrink: 0;
          width: 100px;
          height: 80px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          cursor: pointer;
          background-color: #000;
        }

        .task-card-thumbnail {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 登録フォーム */
        .add-task-form-container {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .form-header h2 {
          font-size: 18px;
          font-weight: 700;
        }

        .close-form-btn {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .task-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ocr-upload-section {
          background-color: rgba(255,255,255,0.01);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 16px;
          margin-top: 10px;
        }

        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .section-title-row h3 {
          font-size: 13px;
          font-weight: 700;
        }

        .ocr-toggle-link {
          font-size: 11px;
          color: var(--color-gold-light);
          text-decoration: underline;
        }

        .ocr-panel {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ocr-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .file-input-wrapper {
          position: relative;
          text-align: center;
        }

        .file-input-wrapper input[type="file"] {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .file-picker-label {
          display: block;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .form-images-preview-list {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 12px 0 4px;
        }

        .preview-image-item-wrapper {
          position: relative;
          flex-shrink: 0;
          width: 100px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background-color: #000;
        }

        .form-preview-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-actions-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4px;
          opacity: 0;
          transition: opacity 0.15s;
        }

        .preview-image-item-wrapper:hover .preview-actions-overlay,
        .preview-image-item-wrapper:active .preview-actions-overlay {
          opacity: 1;
        }

        .img-edit-action-btn {
          width: 100%;
          background-color: var(--color-gold);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 0;
          border-radius: 4px;
          text-align: center;
        }

        .img-remove-action-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: var(--color-red);
          color: white;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-task-btn {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          margin-top: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        /* 拡大モーダル */
        .preview-modal-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: rgba(0,0,0,0.85);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .preview-modal-content {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .preview-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .preview-modal-title {
          font-size: 14px;
          font-weight: 700;
        }

        .preview-modal-close {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 16px;
          cursor: pointer;
        }

        .preview-modal-img-container {
          flex: 1;
          overflow: auto;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .preview-modal-img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .preview-modal-footer {
          padding: 12px;
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
          border-top: 1px solid var(--border-color);
          background-color: rgba(0,0,0,0.05);
        }
      `})]})}function yt({tasks:e}){let[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(1),[a,o]=(0,x.useState)({x:0,y:0}),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)({x:0,y:0}),d=[];e.forEach(e=>{e.images&&Array.isArray(e.images)?e.images.forEach((t,n)=>{d.push({id:t.id||`${e.id}_img_${n}`,data:t.data,taskTitle:e.title,taskDate:e.date})}):e.imageData&&d.push({id:`${e.id}_img_migrated`,data:e.imageData,taskTitle:e.title,taskDate:e.date})});let f=e=>{n(e),i(1),o({x:0,y:0})};return(0,V.jsxs)(`div`,{className:`gallery-section fade-in`,children:[(0,V.jsx)(`h2`,{className:`gallery-title`,children:`打合せ書面（写真）一覧`}),(0,V.jsx)(`p`,{className:`gallery-desc`,children:`案件に紐づく見積書、配置図、進行表などを安全に確認できます。`}),d.length===0?(0,V.jsxs)(`div`,{className:`no-images-placeholder`,children:[(0,V.jsxs)(`svg`,{className:`no-img-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`}),(0,V.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,V.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]}),(0,V.jsx)(`p`,{children:`添付された書面写真はありません。`}),(0,V.jsx)(`span`,{children:`案件登録時に写真を添付するとここに表示されます。`})]}):(0,V.jsx)(`div`,{className:`gallery-grid`,children:d.map(e=>(0,V.jsxs)(`div`,{className:`gallery-card`,onClick:()=>f(e),children:[(0,V.jsx)(`div`,{className:`gallery-img-wrapper`,children:(0,V.jsx)(`img`,{src:e.data,alt:e.taskTitle,className:`gallery-thumb`})}),(0,V.jsxs)(`div`,{className:`gallery-info`,children:[(0,V.jsx)(`span`,{className:`gallery-task-title`,children:e.taskTitle}),(0,V.jsxs)(`span`,{className:`gallery-task-date`,children:[`📅 `,e.taskDate]})]})]},e.id))}),t&&(0,V.jsxs)(`div`,{className:`fullscreen-overlay`,children:[(0,V.jsxs)(`div`,{className:`fullscreen-header`,children:[(0,V.jsxs)(`div`,{className:`header-info`,children:[(0,V.jsx)(`span`,{className:`overlay-title`,children:t.taskTitle}),(0,V.jsxs)(`span`,{className:`overlay-date`,children:[`📅 `,t.taskDate,` の打合せ書面`]})]}),(0,V.jsx)(`button`,{onClick:()=>{n(null)},className:`close-overlay-btn`,children:`✕ 閉じる`})]}),(0,V.jsx)(`div`,{className:`fullscreen-image-container`,onTouchStart:e=>{if(r===1)return;let t=e.touches[0];c(!0),u({x:t.clientX-a.x,y:t.clientY-a.y})},onTouchMove:e=>{if(!s)return;let t=e.touches[0];o({x:t.clientX-l.x,y:t.clientY-l.y})},onTouchEnd:()=>{c(!1)},children:(0,V.jsx)(`img`,{src:t.data,alt:`打合せ書面`,className:`fullscreen-img`,style:{transform:`translate(${a.x}px, ${a.y}px) scale(${r})`,transition:s?`none`:`transform 0.15s ease-out`,cursor:r>1?`grab`:`default`},draggable:`false`})}),(0,V.jsxs)(`div`,{className:`zoom-controls`,children:[(0,V.jsxs)(`div`,{className:`zoom-btn-row`,children:[(0,V.jsx)(`button`,{onClick:()=>i(e=>Math.max(e-.25,.75)),className:`zoom-btn`,children:`-`}),(0,V.jsx)(`button`,{onClick:()=>{i(1),o({x:0,y:0})},className:`zoom-btn reset`,children:`等倍`}),(0,V.jsx)(`button`,{onClick:()=>i(e=>Math.min(e+.25,3)),className:`zoom-btn`,children:`+`})]}),r>1&&(0,V.jsxs)(`span`,{className:`zoom-indicator`,children:[`ズーム中 (`,Math.round(r*100),`%) / ドラッグで移動`]})]})]}),(0,V.jsx)(`style`,{children:`
        .gallery-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .gallery-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .gallery-desc {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .no-images-placeholder {
          text-align: center;
          color: var(--text-secondary);
          padding: 60px 20px;
          background-color: var(--bg-secondary);
          border-radius: 16px;
          border: 1px dashed var(--border-color);
          margin-top: 10px;
        }

        .no-img-icon {
          width: 48px;
          height: 48px;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .no-images-placeholder p {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .no-images-placeholder span {
          font-size: 11px;
          color: var(--text-muted);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          overflow-y: auto;
        }

        .gallery-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        .gallery-img-wrapper {
          width: 100%;
          height: 120px;
          background-color: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-info {
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gallery-task-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gallery-task-date {
          font-size: 10px;
          color: var(--text-secondary);
        }

        /* モーダル表示 */
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: #000;
          z-index: 1500;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.2s ease-out;
        }

        .fullscreen-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .header-info {
          display: flex;
          flex-direction: column;
        }

        .overlay-title {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .overlay-date {
          font-size: 11px;
          color: #94a3b8;
        }

        .close-overlay-btn {
          background-color: rgba(255,255,255,0.15);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(5px);
        }

        .fullscreen-image-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .fullscreen-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          user-select: none;
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .zoom-btn-row {
          display: flex;
          gap: 8px;
        }

        .zoom-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.15);
          color: white;
          font-size: 18px;
          font-weight: 700;
          backdrop-filter: blur(5px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .zoom-btn.reset {
          width: 60px;
          border-radius: 20px;
          font-size: 12px;
        }

        .zoom-indicator {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          background-color: rgba(0,0,0,0.6);
          padding: 4px 10px;
          border-radius: 10px;
          pointer-events: none;
        }
      `})]})}var bt=(e,t,n)=>{let r=new Date(e,t-1,n).getTime(),i=new Date(2019,4,1).getTime(),a=new Date(1989,0,8).getTime(),o=new Date(1926,11,25).getTime(),s=new Date(1912,6,30).getTime();if(new Date(1868,0,25).getTime(),r>=i){let r=e-2019+1;return`令和${r===1?`元`:r}年${t}月${n}日`}else if(r>=a){let r=e-1989+1;return`平成${r===1?`元`:r}年${t}月${n}日`}else if(r>=o){let r=e-1926+1;return`昭和${r===1?`元`:r}年${t}月${n}日`}else if(r>=s){let r=e-1912+1;return`大正${r===1?`元`:r}年${t}月${n}日`}else{let r=e-1868+1;return`明治${r===1?`元`:r}年${t}月${n}日`}},xt=e=>{if(!e)return``;let t=e.trim();if(!t)return``;t=t.replace(/[Ａ-Ｚａ-ｚ０-９／．－]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248));let n=t.match(/^([shrtm])(\d+|元)[./-]?([01]?\d)[./-]?([0-3]?\d)$/i);if(n){let e=n[1].toLowerCase(),t=``;e===`s`?t=`昭和`:e===`h`?t=`平成`:e===`r`?t=`令和`:e===`t`?t=`大正`:e===`m`&&(t=`明治`);let r=n[2],i=r===`元`?1:parseInt(r,10),a=parseInt(n[3],10),o=parseInt(n[4],10);if(t&&!isNaN(i)&&!isNaN(a)&&!isNaN(o))return`${t}${i===1?`元`:i}年${a}月${o}日`}let r=t.match(/^([shrtm])(\d{1,2})(\d{2})(\d{2})$/i);if(r){let e=r[1].toLowerCase(),t=``;e===`s`?t=`昭和`:e===`h`?t=`平成`:e===`r`?t=`令和`:e===`t`?t=`大正`:e===`m`&&(t=`明治`);let n=parseInt(r[2],10),i=parseInt(r[3],10),a=parseInt(r[4],10);if(t&&!isNaN(n)&&!isNaN(i)&&!isNaN(a))return`${t}${n===1?`元`:n}年${i}月${a}日`}let i=t.match(/^(\d{4})[./-]?([01]?\d)[./-]?([0-3]?\d)$/);if(i){let e=parseInt(i[1],10),t=parseInt(i[2],10),n=parseInt(i[3],10);if(!isNaN(e)&&!isNaN(t)&&!isNaN(n)&&t>=1&&t<=12&&n>=1&&n<=31)return bt(e,t,n)}let a=t.match(/^(\d{4})(\d{2})(\d{2})$/);if(a){let e=parseInt(a[1],10),t=parseInt(a[2],10),n=parseInt(a[3],10);if(!isNaN(e)&&!isNaN(t)&&!isNaN(n)&&t>=1&&t<=12&&n>=1&&n<=31)return bt(e,t,n)}return t},St=e=>{if(!e)return null;let t=e.trim(),n=t.match(/^(明治|大正|昭和|平成|令和)(元|\d+)年(\d+)月(\d+)日$/);if(n){let e=n[1],t=n[2]===`元`?1:parseInt(n[2],10),r=parseInt(n[3],10),i=parseInt(n[4],10),a=0;e===`令和`?a=2019:e===`平成`?a=1989:e===`昭和`?a=1926:e===`大正`?a=1912:e===`明治`&&(a=1868);let o=a+t-1;return new Date(o,r-1,i)}let r=t.match(/^(\d{4})[./-]?([01]?\d)[./-]?([0-3]?\d)$/);if(r){let e=parseInt(r[1],10),t=parseInt(r[2],10),n=parseInt(r[3],10);return new Date(e,t-1,n)}let i=Date.parse(t);return isNaN(i)?null:new Date(i)},Ct=(e,t)=>{let n=St(e),r=St(t);if(!n)return null;let i=r||new Date,a=i.getFullYear()-n.getFullYear(),o=i.getMonth()-n.getMonth();(o<0||o===0&&i.getDate()<n.getDate())&&a--;let s=i.getFullYear()-n.getFullYear()+1;return{fullAge:a>=0?a:0,countAge:s>=1?s:1}};function wt({tasks:e,passcode:t,sects:n=[],onUpdateCustomer:r,onDeleteCustomer:i,onAddCustomer:a,onEditCustomer:o}){let[s,c]=(0,x.useState)(``),[l,u]=(0,x.useState)(`newest`),[d,f]=(0,x.useState)(null),[p,m]=(0,x.useState)(!1),[h,g]=(0,x.useState)(null),[_,v]=(0,x.useState)(``),[y,b]=(0,x.useState)(``),[S,C]=(0,x.useState)(``),[w,T]=(0,x.useState)(``),[E,D]=(0,x.useState)(``),[O,k]=(0,x.useState)(``),[A,j]=(0,x.useState)(``),[M,ee]=(0,x.useState)(``),[N,te]=(0,x.useState)(``),[P,F]=(0,x.useState)(``),[I,ne]=(0,x.useState)(``),[L,R]=(0,x.useState)(``),[z,B]=(0,x.useState)(``),[re,ie]=(0,x.useState)(`打合せ`),[ae,oe]=(0,x.useState)(``),[se,ce]=(0,x.useState)(new Date().toISOString().split(`T`)[0]),[le,ue]=(0,x.useState)(``),[de,fe]=(0,x.useState)(``),[pe,me]=(0,x.useState)(null),[he,ge]=(0,x.useState)(`打合せ`),[_e,ve]=(0,x.useState)(``),[ye,be]=(0,x.useState)(``),[xe,Se]=(0,x.useState)(``),[Ce,we]=(0,x.useState)(``),[Te,Ee]=(0,x.useState)(null),De=e=>{if(e.status===`completed`)return!1;let t=(e.events||[]).some(e=>e.status!==`completed`);return(e.events||[]).length===0||t},Oe=e=>{switch(e){case`施行`:return`red`;case`搬送`:return`orange`;case`打合せ`:return`blue`;case`事前相談`:return`green`;case`法要`:return`purple`;case`アフター`:return`pink`;case`社内業務`:return`gray`;case`見積`:return`yellow`;default:return`blue`}},ke=()=>{let t=[...e];if(s.trim()){let e=s.toLowerCase();t=t.filter(t=>{let n=`${t.deceasedLastName||``}${t.deceasedFirstName||``}`.toLowerCase(),r=`${t.mournerLastName||``}${t.mournerFirstName||``}`.toLowerCase();return t.title.toLowerCase().includes(e)||n.includes(e)||(t.deceasedLastName||``).toLowerCase().includes(e)||(t.deceasedFirstName||``).toLowerCase().includes(e)||(t.deceasedName||``).toLowerCase().includes(e)||r.includes(e)||(t.mournerLastName||``).toLowerCase().includes(e)||(t.mournerFirstName||``).toLowerCase().includes(e)||(t.mournerName||``).toLowerCase().includes(e)||(t.address||``).toLowerCase().includes(e)||(t.contact||``).toLowerCase().includes(e)||(t.templeName||``).toLowerCase().includes(e)||(t.sect||``).toLowerCase().includes(e)||(t.wakeDate||``).toLowerCase().includes(e)||(t.funeralDate||``).toLowerCase().includes(e)||(t.notes||``).toLowerCase().includes(e)})}return t.sort((e,t)=>{if(l===`newest`){let n=parseInt(e.id.replace(`task_`,``),10)||0;return(parseInt(t.id.replace(`task_`,``),10)||0)-n}if(l===`oldest`)return(parseInt(e.id.replace(`task_`,``),10)||0)-(parseInt(t.id.replace(`task_`,``),10)||0);if(l===`name`)return e.title.localeCompare(t.title,`ja`);if(l===`funeral`)return(e.funeralDate?new Date(e.funeralDate).getTime():1/0)-(t.funeralDate?new Date(t.funeralDate).getTime():1/0);if(l===`death`){let n=e.deathDate?new Date(e.deathDate).getTime():0;return(t.deathDate?new Date(t.deathDate).getTime():0)-n}return 0})},Ae=e=>new Promise(t=>{let n=new FileReader;n.readAsDataURL(e),n.onload=e=>{let n=new Image;n.src=e.target.result,n.onload=()=>{let e=document.createElement(`canvas`),r=n.width,i=n.height;r>800&&(i=Math.round(i*800/r),r=800),e.width=r,e.height=i,e.getContext(`2d`).drawImage(n,0,0,r,i),t(e.toDataURL(`image/jpeg`,.6))}}}),je=async(e,t,n)=>{if(n)try{let i=await Ae(n),a={id:`evt_img_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,data:i},o=(e.events||[]).map(e=>e.id===t?{...e,images:[...e.images||[],a]}:e);r(e.id,{events:o})}catch(e){console.error(e),alert(`写真の追加に失敗しました。`)}},Me=(e,t,n)=>{if(!window.confirm(`この写真を削除してもよろしいですか？`))return;let i=(e.events||[]).map(e=>e.id===t?{...e,images:(e.images||[]).filter(e=>e.id!==n)}:e);r(e.id,{events:i})},Ne=e=>{g(e.id),v(e.deceasedLastName||e.deceasedName||``),b(e.deceasedFirstName||``),C(e.birthDate||``),T(e.deathDate||``),D(e.address||``),k(e.mournerLastName||e.mournerName||``),j(e.mournerFirstName||``),ee(e.contact||``),te(e.templeName||``),F(e.sect||``),ne(e.wakeDate||``),R(e.funeralDate||``),B(e.notes||``)},H=()=>{m(!0),g(null),v(``),b(``),C(``),T(``),D(``),k(``),j(``),ee(``),te(``),F(``),ne(``),R(``),B(``)},Pe=()=>{g(null)},Fe=e=>{r(e,{title:_?`${_}家`:O?`${O}家`:`新規お客様`,deceasedLastName:_,deceasedFirstName:y,birthDate:S,deathDate:w,address:E,mournerLastName:O,mournerFirstName:A,contact:M,templeName:N,sect:P,wakeDate:I,funeralDate:L,notes:z}),g(null)},Ie=e=>{e.preventDefault(),a({title:_?`${_}家`:O?`${O}家`:`新規お客様`,deceasedLastName:_,deceasedFirstName:y,birthDate:S,deathDate:w,address:E,mournerLastName:O,mournerFirstName:A,contact:M,templeName:N,sect:P,wakeDate:I,funeralDate:L,notes:z,status:`active`,events:[]}),m(!1)},Le=(e,t)=>{let n=(e.events||[]).map(e=>e.id===t?{...e,status:e.status===`completed`?`active`:`completed`}:e),i=n.every(e=>e.status===`completed`);r(e.id,{events:n,status:i?`completed`:`active`})},Re=e=>{if(!se){alert(`日付を入力してください。`);return}let t=re===`CUSTOM`?ae.trim():re;if(!t){alert(`カテゴリーを入力または選択してください。`);return}let n={id:`evt_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t,date:se,time:le,alarmEnabled:!0,status:`active`,notes:de},i=[...e.events||[],n];r(e.id,{events:i,status:`active`}),fe(``),ue(``),oe(``)},ze=(e,n)=>{if(!window.confirm(`この予定を削除してもよろしいですか？`))return;let i=window.prompt(`安全のため、ログイン用のパスコードを入力してください：`);if(i===null)return;if(i!==String(t)){alert(`パスコードが一致しないため、削除を中止しました。`);return}let a=(e.events||[]).filter(e=>e.id!==n),o=a.length>0&&a.every(e=>e.status===`completed`);r(e.id,{events:a,status:o?`completed`:`active`})},Be=e=>{me(e.id),[`打合せ`,`施行`,`搬送`,`事前相談`,`法要 (四十九日/納骨等)`,`一周忌法要`,`三回忌法要`,`見積`].includes(e.category)?(ge(e.category),ve(``)):(ge(`CUSTOM`),ve(e.category)),be(e.date||``),Se(e.time||``),we(e.notes||``)},Ve=()=>{me(null)},He=(e,t)=>{let n=he===`CUSTOM`?_e.trim():he;if(!n){alert(`カテゴリー名を入力または選択してください。`);return}let i=(e.events||[]).map(e=>e.id===t?{...e,category:n,date:ye,time:xe,notes:Ce}:e),a=i.every(e=>e.status===`completed`);r(e.id,{events:i,status:a?`completed`:`active`}),me(null)},Ue=ke();if(d){let n=e.find(e=>e.id===d);if(!n)return f(null),null;let r=De(n),a=h===n.id;return(0,V.jsxs)(`div`,{className:`customer-directory fade-in`,style:{overflowY:`auto`,height:`calc(100dvh - 120px)`},children:[(0,V.jsxs)(`div`,{className:`directory-detail-header`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>{f(null),g(null)},className:`back-list-btn`,children:`← 顧客一覧に戻る`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{let e=window.prompt(`【警告】この顧客のすべての記録と写真を完全に削除します。よろしければログイン用のパスコードを入力してください：`);if(e!==null){if(e!==String(t)){alert(`パスコードが一致しないため、削除を中止しました。`);return}i(n.id),f(null)}},className:`detail-delete-btn`,children:`🗑️ 顧客データを削除`})]}),(0,V.jsxs)(`div`,{className:`directory-customer-card detail-mode ${r?`active-status`:`completed-status`}`,children:[(0,V.jsxs)(`div`,{className:`customer-card-header`,style:{borderBottom:`1px solid rgba(255,255,255,0.05)`,paddingBottom:`12px`,marginBottom:`12px`},children:[(0,V.jsxs)(`div`,{className:`customer-title-block`,children:[(0,V.jsx)(`span`,{className:`customer-card-title`,style:{fontSize:`20px`},children:n.title}),(0,V.jsx)(`span`,{className:`status-badge ${r?`badge-active`:`badge-completed`}`,children:r?`進行中`:`施行完了`})]}),(0,V.jsx)(`div`,{className:`customer-card-actions`,children:(0,V.jsx)(`button`,{type:`button`,onClick:()=>o(n.id),className:`edit-profile-btn`,title:`詳細図面・OCR・書面ファイルを編集`,children:`📁 ファイル・OCR管理`})})]}),(0,V.jsxs)(`div`,{className:`customer-expanded-panel`,style:{display:`block`,borderTop:`none`,paddingTop:0,marginTop:0},children:[(0,V.jsxs)(`div`,{className:`customer-section-block`,children:[(0,V.jsxs)(`div`,{className:`block-header`,children:[(0,V.jsx)(`h4`,{children:`👤 顧客基本情報`}),a?(0,V.jsxs)(`div`,{className:`edit-actions-row`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>Fe(n.id),className:`inline-action-btn save`,children:`💾 保存`}),(0,V.jsx)(`button`,{type:`button`,onClick:Pe,className:`inline-action-btn cancel`,children:`キャンセル`})]}):(0,V.jsx)(`button`,{type:`button`,onClick:()=>Ne(n),className:`inline-action-btn edit`,children:`✏️ プロフィールを編集`})]}),a?(0,V.jsxs)(`div`,{className:`inline-edit-form-grid`,children:[(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,children:[(0,V.jsx)(`label`,{children:`故人名`}),(0,V.jsxs)(`div`,{className:`name-inputs-flex`,children:[(0,V.jsx)(`input`,{type:`text`,value:_,onChange:e=>v(e.target.value),placeholder:`姓 例：山田`}),(0,V.jsx)(`input`,{type:`text`,value:y,onChange:e=>b(e.target.value),placeholder:`名 例：太郎`})]})]}),(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,children:[(0,V.jsx)(`label`,{children:`喪主名`}),(0,V.jsxs)(`div`,{className:`name-inputs-flex`,children:[(0,V.jsx)(`input`,{type:`text`,value:O,onChange:e=>k(e.target.value),placeholder:`姓 例：山田`}),(0,V.jsx)(`input`,{type:`text`,value:A,onChange:e=>j(e.target.value),placeholder:`名 例：太一`})]})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`生年月日`}),(0,V.jsx)(`input`,{type:`text`,value:S,onChange:e=>C(e.target.value),onBlur:e=>C(xt(e.target.value)),placeholder:`例：s52/6/10 または 1977-06-10`})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`連絡先`}),(0,V.jsx)(`input`,{type:`text`,value:M,onChange:e=>ee(e.target.value),placeholder:`連絡先`})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`逝去日`}),(0,V.jsx)(`input`,{type:`date`,value:w,onChange:e=>T(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`住所`}),(0,V.jsx)(`input`,{type:`text`,value:E,onChange:e=>D(e.target.value),placeholder:`住所`})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`寺院名`}),(0,V.jsx)(`input`,{type:`text`,value:N,onChange:e=>te(e.target.value),placeholder:`お寺`})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`宗派`}),(0,V.jsx)(`input`,{type:`text`,list:`sect-options`,value:P,onChange:e=>F(e.target.value),placeholder:`宗派を入力または選択`})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`通夜日`}),(0,V.jsx)(`input`,{type:`date`,value:I,onChange:e=>ne(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,children:[(0,V.jsx)(`label`,{children:`葬儀告別式日`}),(0,V.jsx)(`input`,{type:`date`,value:L,onChange:e=>R(e.target.value)})]}),(()=>{let e=Ct(S,w);return e?(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,style:{backgroundColor:`rgba(212, 175, 55, 0.08)`,border:`1px solid rgba(212, 175, 55, 0.2)`,borderRadius:`8px`,padding:`10px 14px`,marginTop:`4px`,display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,V.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`bold`,color:`var(--color-gold-light)`},children:`年齢 (自動計算):`}),(0,V.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:`bold`},children:[`行年（満年齢）：`,e.fullAge,`歳`]}),(0,V.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`/`}),(0,V.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:`bold`},children:[`享年（数え年）：`,e.countAge,`歳`]})]}):null})(),(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,children:[(0,V.jsx)(`label`,{children:`全体備考`}),(0,V.jsx)(`textarea`,{value:z,onChange:e=>B(e.target.value),placeholder:`備考欄`,rows:`2`})]})]}):(0,V.jsx)(`table`,{className:`customer-details-table`,children:(0,V.jsxs)(`tbody`,{children:[(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`故人名`}),(0,V.jsx)(`td`,{children:n.deceasedLastName||n.deceasedFirstName?`${n.deceasedLastName||``} ${n.deceasedFirstName||``}`:n.deceasedName||`未登録`}),(0,V.jsx)(`th`,{children:`喪主名`}),(0,V.jsx)(`td`,{children:n.mournerLastName||n.mournerFirstName?`${n.mournerLastName||``} ${n.mournerFirstName||``}`:n.mournerName||`未登録`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`生年月日`}),(0,V.jsx)(`td`,{children:n.birthDate||`未登録`}),(0,V.jsx)(`th`,{children:`連絡先`}),(0,V.jsx)(`td`,{children:n.contact||`未登録`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`逝去日`}),(0,V.jsx)(`td`,{children:n.deathDate||`未登録`}),(0,V.jsx)(`th`,{children:`住所`}),(0,V.jsx)(`td`,{children:n.address||`未登録`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`寺院名`}),(0,V.jsx)(`td`,{children:n.templeName||`未登録`}),(0,V.jsx)(`th`,{children:`宗派`}),(0,V.jsx)(`td`,{children:n.sect||`未登録`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`通夜日`}),(0,V.jsx)(`td`,{children:n.wakeDate||`未登録`}),(0,V.jsx)(`th`,{children:`葬儀日`}),(0,V.jsx)(`td`,{children:n.funeralDate||`未登録`})]}),(()=>{let e=Ct(n.birthDate,n.deathDate);return e?(0,V.jsxs)(`tr`,{style:{backgroundColor:`rgba(212, 175, 55, 0.08)`},children:[(0,V.jsx)(`th`,{children:`自動計算年齢`}),(0,V.jsxs)(`td`,{colSpan:`3`,children:[(0,V.jsxs)(`strong`,{style:{color:`var(--color-gold-light)`},children:[`行年（満年齢）：`,e.fullAge,`歳`]}),(0,V.jsx)(`span`,{style:{margin:`0 12px`,color:`var(--text-muted)`},children:`/`}),(0,V.jsxs)(`strong`,{style:{color:`var(--color-gold-light)`},children:[`享年（数え年）：`,e.countAge,`歳`]})]})]}):null})(),n.notes&&(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`全体備考`}),(0,V.jsx)(`td`,{colSpan:`3`,style:{whiteSpace:`pre-wrap`},children:n.notes})]})]})})]}),(0,V.jsxs)(`div`,{className:`customer-section-block`,style:{marginTop:`14px`},children:[(0,V.jsx)(`h4`,{children:`⏳ 進行中の予定`}),(0,V.jsxs)(`div`,{className:`directory-events-list`,children:[[...n.events||[]].filter(e=>e.status!==`completed`).sort((e,t)=>(e.date?new Date(`${e.date}T${e.time||`00:00`}:00`).getTime():1/0)-(t.date?new Date(`${t.date}T${t.time||`00:00`}:00`).getTime():1/0)).map(e=>pe===e.id?(0,V.jsxs)(`div`,{className:`directory-event-edit-row`,style:{display:`flex`,flexDirection:`column`,gap:`8px`,backgroundColor:`rgba(255, 255, 255, 0.05)`,border:`1px solid var(--border-color)`,borderRadius:`8px`,padding:`10px 14px`,marginBottom:`6px`},children:[(0,V.jsxs)(`div`,{className:`form-row-flex`,children:[(0,V.jsxs)(`select`,{value:he,onChange:e=>ge(e.target.value),className:`inline-event-input`,style:{width:`130px`,fontSize:`11px`},children:[(0,V.jsx)(`option`,{value:`打合せ`,children:`打合せ`}),(0,V.jsx)(`option`,{value:`施行`,children:`施行`}),(0,V.jsx)(`option`,{value:`搬送`,children:`搬送`}),(0,V.jsx)(`option`,{value:`事前相談`,children:`事前相談`}),(0,V.jsx)(`option`,{value:`法要 (四十九日/納骨等)`,children:`法要 (四十九日/納骨等)`}),(0,V.jsx)(`option`,{value:`一周忌法要`,children:`一周忌法要`}),(0,V.jsx)(`option`,{value:`三回忌法要`,children:`三回忌法要`}),(0,V.jsx)(`option`,{value:`見積`,children:`見積`}),(0,V.jsx)(`option`,{value:`CUSTOM`,children:`その他 (自由入力)`})]}),he===`CUSTOM`&&(0,V.jsx)(`input`,{type:`text`,placeholder:`カテゴリ名`,value:_e,onChange:e=>ve(e.target.value),className:`inline-event-input`,style:{width:`120px`,fontSize:`11px`},required:!0}),(0,V.jsx)(`input`,{type:`date`,value:ye,onChange:e=>be(e.target.value),className:`inline-event-input`,style:{flex:1,fontSize:`11px`}}),(0,V.jsx)(`input`,{type:`time`,value:xe,onChange:e=>Se(e.target.value),className:`inline-event-input`,style:{width:`80px`,fontSize:`11px`}})]}),(0,V.jsxs)(`div`,{className:`form-row-flex`,children:[(0,V.jsx)(`input`,{type:`text`,placeholder:`詳細メモ`,value:Ce,onChange:e=>we(e.target.value),className:`inline-event-input`,style:{flex:1,fontSize:`11px`}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>He(n,e.id),className:`inline-action-btn save`,style:{fontSize:`11px`,padding:`4px 8px`},children:`保存`}),(0,V.jsx)(`button`,{type:`button`,onClick:Ve,className:`inline-action-btn cancel`,style:{fontSize:`11px`,padding:`4px 8px`},children:`取消`})]})]},e.id):(0,V.jsxs)(`div`,{className:`directory-event-row border-${Oe(e.category)}`,style:{display:`flex`,flexDirection:`column`,alignItems:`stretch`,gap:`8px`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,V.jsxs)(`label`,{className:`event-row-label`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:!1,onChange:()=>Le(n,e.id),className:`event-checkbox`}),(0,V.jsx)(`span`,{className:`badge badge-${Oe(e.category)}`,children:e.category}),(0,V.jsxs)(`span`,{className:`event-datetime`,children:[`📅 `,e.date,` `,e.time?`🕒 ${e.time}`:``]}),e.notes&&(0,V.jsxs)(`span`,{className:`event-notes-label`,children:[`(`,e.notes,`)`]})]}),(0,V.jsxs)(`div`,{className:`event-row-actions`,style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`label`,{htmlFor:`dir_cam_${n.id}_${e.id}`,className:`event-camera-btn`,style:{cursor:`pointer`,fontSize:`11px`,padding:`3px 8px`,backgroundColor:`rgba(255,255,255,0.05)`,border:`1px solid var(--border-color)`,borderRadius:`6px`,display:`inline-flex`,alignItems:`center`,fontWeight:`bold`,color:`var(--text-secondary)`},children:`📷 写真を追加`}),(0,V.jsx)(`input`,{type:`file`,id:`dir_cam_${n.id}_${e.id}`,accept:`image/*`,style:{display:`none`},onChange:t=>{t.target.files&&t.target.files[0]&&je(n,e.id,t.target.files[0])}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>Be(e),className:`inline-event-action-btn edit-btn`,style:{background:`none`,border:`none`,cursor:`pointer`,fontSize:`11px`,color:`var(--text-secondary)`},title:`予定を編集`,children:`✏️`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>ze(n,e.id),className:`inline-event-action-btn delete-btn`,style:{background:`none`,border:`none`,cursor:`pointer`,fontSize:`11px`,color:`var(--color-red)`},title:`予定を削除`,children:`🗑️`})]})]}),e.images&&e.images.length>0&&(0,V.jsx)(`div`,{className:`event-thumbnails-slider`,style:{display:`flex`,gap:`8px`,overflowX:`auto`,padding:`4px 0`,marginTop:`2px`,borderTop:`1px dashed rgba(255,255,255,0.05)`},children:e.images.map(t=>(0,V.jsxs)(`div`,{className:`event-thumb-wrapper`,style:{position:`relative`,width:`50px`,height:`50px`,flexShrink:0,borderRadius:`6px`,overflow:`hidden`,border:`1px solid var(--border-color)`},children:[(0,V.jsx)(`img`,{src:t.data,alt:`event doc`,onClick:()=>Ee(t.data),style:{width:`100%`,height:`100%`,objectFit:`cover`,cursor:`pointer`}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>Me(n,e.id,t.id),style:{position:`absolute`,top:`2px`,right:`2px`,width:`14px`,height:`14px`,borderRadius:`50%`,backgroundColor:`rgba(0,0,0,0.6)`,color:`white`,border:`none`,fontSize:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`},children:`✕`})]},t.id))})]},e.id)),[...n.events||[]].filter(e=>e.status!==`completed`).length===0&&(0,V.jsx)(`p`,{className:`no-events-text`,children:`現在、進行中の予定はありません。`})]})]}),[...n.events||[]].some(e=>e.status===`completed`)&&(0,V.jsxs)(`div`,{className:`customer-section-block`,style:{marginTop:`14px`},children:[(0,V.jsx)(`h4`,{style:{fontSize:`11px`,color:`var(--text-muted)`},children:`✅ 完了済みの履歴`}),(0,V.jsx)(`div`,{className:`directory-events-list completed-list`,children:[...n.events||[]].filter(e=>e.status===`completed`).sort((e,t)=>{let n=e.date?new Date(`${e.date}T${e.time||`00:00`}:00`).getTime():1/0;return(t.date?new Date(`${t.date}T${t.time||`00:00`}:00`).getTime():1/0)-n}).map(e=>pe===e.id?(0,V.jsxs)(`div`,{className:`directory-event-edit-row`,style:{display:`flex`,flexDirection:`column`,gap:`8px`,backgroundColor:`rgba(255, 255, 255, 0.05)`,border:`1px solid var(--border-color)`,borderRadius:`8px`,padding:`10px 14px`,marginBottom:`6px`},children:[(0,V.jsxs)(`div`,{className:`form-row-flex`,children:[(0,V.jsxs)(`select`,{value:he,onChange:e=>ge(e.target.value),className:`inline-event-input`,style:{width:`130px`,fontSize:`11px`},children:[(0,V.jsx)(`option`,{value:`打合せ`,children:`打合せ`}),(0,V.jsx)(`option`,{value:`施行`,children:`施行`}),(0,V.jsx)(`option`,{value:`搬送`,children:`搬送`}),(0,V.jsx)(`option`,{value:`事前相談`,children:`事前相談`}),(0,V.jsx)(`option`,{value:`法要 (四十九日/納骨等)`,children:`法要 (四十九日/納骨等)`}),(0,V.jsx)(`option`,{value:`一周忌法要`,children:`一周忌法要`}),(0,V.jsx)(`option`,{value:`三回忌法要`,children:`三回忌法要`}),(0,V.jsx)(`option`,{value:`見積`,children:`見積`}),(0,V.jsx)(`option`,{value:`CUSTOM`,children:`その他 (自由入力)`})]}),he===`CUSTOM`&&(0,V.jsx)(`input`,{type:`text`,placeholder:`カテゴリ名`,value:_e,onChange:e=>ve(e.target.value),className:`inline-event-input`,style:{width:`120px`,fontSize:`11px`},required:!0}),(0,V.jsx)(`input`,{type:`date`,value:ye,onChange:e=>be(e.target.value),className:`inline-event-input`,style:{flex:1,fontSize:`11px`}}),(0,V.jsx)(`input`,{type:`time`,value:xe,onChange:e=>Se(e.target.value),className:`inline-event-input`,style:{width:`80px`,fontSize:`11px`}})]}),(0,V.jsxs)(`div`,{className:`form-row-flex`,children:[(0,V.jsx)(`input`,{type:`text`,placeholder:`詳細メモ`,value:Ce,onChange:e=>we(e.target.value),className:`inline-event-input`,style:{flex:1,fontSize:`11px`}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>He(n,e.id),className:`inline-action-btn save`,style:{fontSize:`11px`,padding:`4px 8px`},children:`保存`}),(0,V.jsx)(`button`,{type:`button`,onClick:Ve,className:`inline-action-btn cancel`,style:{fontSize:`11px`,padding:`4px 8px`},children:`取消`})]})]},e.id):(0,V.jsxs)(`div`,{className:`directory-event-row completed-item`,style:{opacity:.75,display:`flex`,flexDirection:`column`,alignItems:`stretch`,gap:`8px`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,V.jsxs)(`label`,{className:`event-row-label`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:!0,onChange:()=>Le(n,e.id),className:`event-checkbox`}),(0,V.jsx)(`span`,{className:`badge badge-gray`,children:e.category}),(0,V.jsxs)(`span`,{className:`event-datetime`,style:{textDecoration:`line-through`},children:[`📅 `,e.date,` `,e.time?`🕒 ${e.time}`:``]}),e.notes&&(0,V.jsxs)(`span`,{className:`event-notes-label`,style:{textDecoration:`line-through`},children:[`(`,e.notes,`)`]})]}),(0,V.jsxs)(`div`,{className:`event-row-actions`,style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`label`,{htmlFor:`dir_cam_${n.id}_${e.id}`,className:`event-camera-btn`,style:{cursor:`pointer`,fontSize:`11px`,padding:`3px 8px`,backgroundColor:`rgba(255,255,255,0.05)`,border:`1px solid var(--border-color)`,borderRadius:`6px`,display:`inline-flex`,alignItems:`center`,fontWeight:`bold`,color:`var(--text-secondary)`},children:`📷 写真を追加`}),(0,V.jsx)(`input`,{type:`file`,id:`dir_cam_${n.id}_${e.id}`,accept:`image/*`,style:{display:`none`},onChange:t=>{t.target.files&&t.target.files[0]&&je(n,e.id,t.target.files[0])}}),(0,V.jsx)(`span`,{style:{fontSize:`11px`,cursor:`not-allowed`,opacity:.7,padding:`2px 4px`},title:`完了済みの予定は編集ロックされています。未完了に戻すと編集できます。`,children:`🔒`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>ze(n,e.id),className:`inline-event-action-btn delete-btn`,style:{background:`none`,border:`none`,cursor:`pointer`,fontSize:`11px`,color:`var(--color-red)`},title:`予定を削除`,children:`🗑️`})]})]}),e.images&&e.images.length>0&&(0,V.jsx)(`div`,{className:`event-thumbnails-slider`,style:{display:`flex`,gap:`8px`,overflowX:`auto`,padding:`4px 0`,marginTop:`2px`,borderTop:`1px dashed rgba(255,255,255,0.05)`},children:e.images.map(t=>(0,V.jsxs)(`div`,{className:`event-thumb-wrapper`,style:{position:`relative`,width:`50px`,height:`50px`,flexShrink:0,borderRadius:`6px`,overflow:`hidden`,border:`1px solid var(--border-color)`},children:[(0,V.jsx)(`img`,{src:t.data,alt:`event doc`,onClick:()=>Ee(t.data),style:{width:`100%`,height:`100%`,objectFit:`cover`,cursor:`pointer`}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>Me(n,e.id,t.id),style:{position:`absolute`,top:`2px`,right:`2px`,width:`14px`,height:`14px`,borderRadius:`50%`,backgroundColor:`rgba(0,0,0,0.6)`,color:`white`,border:`none`,fontSize:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`},children:`✕`})]},t.id))})]},e.id))})]}),(0,V.jsxs)(`div`,{className:`customer-section-block add-event-inline-block`,style:{marginTop:`14px`},children:[(0,V.jsx)(`h4`,{children:`📅 新しい予定を登録`}),(0,V.jsxs)(`div`,{className:`inline-add-event-form`,children:[(0,V.jsxs)(`div`,{className:`form-row-flex`,children:[(0,V.jsxs)(`select`,{value:re,onChange:e=>ie(e.target.value),className:`inline-event-input select-category`,style:{width:`130px`},children:[(0,V.jsx)(`option`,{value:`打合せ`,children:`打合せ`}),(0,V.jsx)(`option`,{value:`施行`,children:`施行`}),(0,V.jsx)(`option`,{value:`搬送`,children:`搬送`}),(0,V.jsx)(`option`,{value:`事前相談`,children:`事前相談`}),(0,V.jsx)(`option`,{value:`法要 (四十九日/納骨等)`,children:`法要 (四十九日/納骨等)`}),(0,V.jsx)(`option`,{value:`一周忌法要`,children:`一周忌法要`}),(0,V.jsx)(`option`,{value:`三回忌法要`,children:`三回忌法要`}),(0,V.jsx)(`option`,{value:`見積`,children:`見積`}),(0,V.jsx)(`option`,{value:`CUSTOM`,children:`その他 (自由入力)`})]}),re===`CUSTOM`&&(0,V.jsx)(`input`,{type:`text`,placeholder:`自由入力のカテゴリ名`,value:ae,onChange:e=>oe(e.target.value),className:`inline-event-input input-custom-category`,style:{width:`130px`},required:!0}),(0,V.jsx)(`input`,{type:`date`,value:se,onChange:e=>ce(e.target.value),className:`inline-event-input input-date`}),(0,V.jsx)(`input`,{type:`time`,value:le,onChange:e=>ue(e.target.value),className:`inline-event-input input-time`})]}),(0,V.jsxs)(`div`,{className:`form-row-flex`,style:{marginTop:`8px`},children:[(0,V.jsx)(`input`,{type:`text`,placeholder:`予定に関する詳細メモ（例：式場手配など）`,value:de,onChange:e=>fe(e.target.value),className:`inline-event-input input-notes`,style:{flex:1}}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>Re(n),className:`inline-add-event-submit-btn`,children:`＋ 予定を追加`})]})]})]})]})]}),Te&&(0,V.jsx)(`div`,{className:`preview-modal-overlay`,onClick:()=>Ee(null),style:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(0,0,0,0.85)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:99999,padding:`16px`},children:(0,V.jsxs)(`div`,{className:`preview-modal-content`,onClick:e=>e.stopPropagation(),style:{backgroundColor:`var(--bg-secondary)`,border:`1px solid var(--border-color)`,borderRadius:`16px`,maxWidth:`500px`,width:`100%`,overflow:`hidden`,boxShadow:`0 10px 30px rgba(0,0,0,0.5)`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(`div`,{className:`preview-modal-header`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`12px 16px`,borderBottom:`1px solid var(--border-color)`},children:[(0,V.jsx)(`span`,{className:`preview-modal-title`,style:{fontSize:`14px`,fontWeight:`bold`},children:`予定添付写真 拡大`}),(0,V.jsx)(`button`,{className:`preview-modal-close`,onClick:()=>Ee(null),style:{background:`none`,border:`none`,color:`var(--text-secondary)`,fontSize:`20px`,cursor:`pointer`},children:`✕`})]}),(0,V.jsx)(`div`,{className:`preview-modal-img-container`,style:{textAlign:`center`,padding:`16px`,backgroundColor:`black`},children:(0,V.jsx)(`img`,{src:Te,alt:`予定写真`,style:{maxWidth:`100%`,maxHeight:`60vh`,borderRadius:`8px`}})}),(0,V.jsx)(`div`,{className:`preview-modal-footer`,style:{padding:`12px 16px`,borderTop:`1px solid var(--border-color)`,fontSize:`12px`,color:`var(--text-secondary)`,textAlign:`center`},children:`撮影した書類写真等をご確認いただけます。`})]})})]})}return(0,V.jsxs)(`div`,{className:`customer-directory fade-in`,children:[(0,V.jsxs)(`div`,{className:`directory-header-controls`,children:[(0,V.jsx)(`h2`,{className:`directory-title`,children:`👤 顧客名簿・基本情報管理`}),(0,V.jsxs)(`div`,{className:`search-bar-container`,children:[(0,V.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`故人名、喪主名、宗派、連絡先などで名簿を検索...`,value:s,onChange:e=>c(e.target.value),className:`search-input`}),s&&(0,V.jsx)(`button`,{type:`button`,onClick:()=>c(``),className:`search-clear-btn`,title:`検索をクリア`,children:`✕`})]}),(0,V.jsxs)(`div`,{className:`sort-bar-container`,children:[(0,V.jsx)(`label`,{className:`sort-label`,children:`並び替え:`}),(0,V.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),className:`sort-select`,children:[(0,V.jsx)(`option`,{value:`newest`,children:`登録が新しい順`}),(0,V.jsx)(`option`,{value:`oldest`,children:`登録が古い順`}),(0,V.jsx)(`option`,{value:`name`,children:`五十音順 (案件名)`}),(0,V.jsx)(`option`,{value:`funeral`,children:`葬儀日が近い順`}),(0,V.jsx)(`option`,{value:`death`,children:`逝去日が新しい順`})]})]}),(0,V.jsx)(`button`,{onClick:H,className:`add-customer-trigger-btn`,style:{marginTop:`8px`,width:`100%`,padding:`10px`,backgroundColor:`var(--color-gold)`,color:`white`,border:`none`,borderRadius:`10px`,fontWeight:`bold`,fontSize:`13px`,cursor:`pointer`},children:`＋ 新規顧客追加`})]}),p&&(0,V.jsxs)(`form`,{onSubmit:Ie,className:`inline-edit-form-grid`,style:{backgroundColor:`var(--bg-secondary)`,border:`1px solid var(--border-color)`,borderRadius:`16px`,padding:`16px`,margin:`16px 0`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`12px`},children:[(0,V.jsx)(`h3`,{className:`span-2`,style:{fontSize:`14px`,fontWeight:`bold`,color:`var(--color-gold-light)`,margin:`0 0 4px 0`},children:`👤 新規顧客の追加`}),(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,children:[(0,V.jsx)(`label`,{children:`故人名`}),(0,V.jsxs)(`div`,{className:`name-inputs-flex`,style:{display:`flex`,gap:`8px`},children:[(0,V.jsx)(`input`,{type:`text`,value:_,onChange:e=>v(e.target.value),placeholder:`姓 例：山田`,style:{flex:1,backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}}),(0,V.jsx)(`input`,{type:`text`,value:y,onChange:e=>b(e.target.value),placeholder:`名 例：太郎`,style:{flex:1,backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]})]}),(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,children:[(0,V.jsx)(`label`,{children:`喪主名`}),(0,V.jsxs)(`div`,{className:`name-inputs-flex`,style:{display:`flex`,gap:`8px`},children:[(0,V.jsx)(`input`,{type:`text`,value:O,onChange:e=>k(e.target.value),placeholder:`姓 例：山田`,style:{flex:1,backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}}),(0,V.jsx)(`input`,{type:`text`,value:A,onChange:e=>j(e.target.value),placeholder:`名 例：太一`,style:{flex:1,backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`生年月日`}),(0,V.jsx)(`input`,{type:`text`,value:S,onChange:e=>C(e.target.value),onBlur:e=>C(xt(e.target.value)),placeholder:`例：s52/6/10 または 1977-06-10`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`連絡先`}),(0,V.jsx)(`input`,{type:`text`,value:M,onChange:e=>ee(e.target.value),placeholder:`連絡先`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`逝去日`}),(0,V.jsx)(`input`,{type:`date`,value:w,onChange:e=>T(e.target.value),style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`住所`}),(0,V.jsx)(`input`,{type:`text`,value:E,onChange:e=>D(e.target.value),placeholder:`住所`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`寺院名`}),(0,V.jsx)(`input`,{type:`text`,value:N,onChange:e=>te(e.target.value),placeholder:`お寺`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`宗派`}),(0,V.jsx)(`input`,{type:`text`,list:`sect-options`,value:P,onChange:e=>F(e.target.value),placeholder:`宗派を入力または選択`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`通夜日`}),(0,V.jsx)(`input`,{type:`date`,value:I,onChange:e=>ne(e.target.value),style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`edit-form-group`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`葬儀告別式日`}),(0,V.jsx)(`input`,{type:`date`,value:L,onChange:e=>R(e.target.value),style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(()=>{let e=Ct(S,w);return e?(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,style:{backgroundColor:`rgba(212, 175, 55, 0.08)`,border:`1px solid rgba(212, 175, 55, 0.2)`,borderRadius:`8px`,padding:`10px 14px`,marginTop:`4px`,display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,V.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`bold`,color:`var(--color-gold-light)`},children:`年齢 (自動計算):`}),(0,V.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:`bold`},children:[`行年（満年齢）：`,e.fullAge,`歳`]}),(0,V.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`/`}),(0,V.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:`bold`},children:[`享年（数え年）：`,e.countAge,`歳`]})]}):null})(),(0,V.jsxs)(`div`,{className:`edit-form-group span-2`,style:{display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`label`,{children:`全体備考`}),(0,V.jsx)(`textarea`,{value:z,onChange:e=>B(e.target.value),placeholder:`備考欄`,rows:`2`,style:{backgroundColor:`var(--bg-tertiary)`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,padding:`8px`,borderRadius:`6px`}})]}),(0,V.jsxs)(`div`,{className:`span-2`,style:{display:`flex`,gap:`10px`,justifyContent:`flex-end`,marginTop:`12px`},children:[(0,V.jsx)(`button`,{type:`submit`,style:{padding:`8px 16px`,backgroundColor:`var(--color-blue)`,color:`white`,border:`none`,borderRadius:`6px`,fontWeight:`bold`,cursor:`pointer`},children:`登録`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>m(!1),style:{padding:`8px 16px`,backgroundColor:`rgba(255,255,255,0.05)`,border:`1px solid var(--border-color)`,color:`var(--text-secondary)`,borderRadius:`6px`,cursor:`pointer`},children:`キャンセル`})]})]}),(0,V.jsx)(`div`,{className:`customers-list-container`,children:Ue.length===0?(0,V.jsx)(`p`,{className:`no-tasks-placeholder`,children:`登録されているお客様情報はありません。`}):Ue.map(e=>{let t=De(e);return(0,V.jsxs)(`div`,{className:`directory-customer-card clickable-card ${t?`active-status`:`completed-status`}`,onClick:()=>f(e.id),children:[(0,V.jsxs)(`div`,{className:`customer-card-header`,children:[(0,V.jsxs)(`div`,{className:`customer-title-block`,children:[(0,V.jsx)(`span`,{className:`customer-card-title`,children:e.title}),(0,V.jsx)(`span`,{className:`status-badge ${t?`badge-active`:`badge-completed`}`,children:t?`進行中`:`施行完了`})]}),(0,V.jsx)(`span`,{className:`card-arrow-indicator`,children:`詳細 ❯`})]}),(0,V.jsxs)(`div`,{className:`customer-quick-info`,children:[(0,V.jsxs)(`span`,{className:`quick-info-item`,children:[(0,V.jsx)(`strong`,{children:`故人:`}),` `,e.deceasedLastName||e.deceasedFirstName?`${e.deceasedLastName||``} ${e.deceasedFirstName||``}`:e.deceasedName||`未登録`]}),(0,V.jsxs)(`span`,{className:`quick-info-item`,children:[(0,V.jsx)(`strong`,{children:`喪主:`}),` `,e.mournerLastName||e.mournerFirstName?`${e.mournerLastName||``} ${e.mournerFirstName||``}`:e.mournerName||`未登録`]}),(0,V.jsxs)(`span`,{className:`quick-info-item`,children:[(0,V.jsx)(`strong`,{children:`宗派:`}),` `,e.sect||`未登録`]})]})]},e.id)})}),(0,V.jsx)(`style`,{children:`
        .customer-directory {
          padding: 16px;
          padding-bottom: 90px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }

        .directory-header-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .directory-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .customers-list-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .directory-customer-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 5px solid var(--text-muted);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }

        .directory-customer-card.active-status {
          border-left-color: var(--color-blue);
        }

        .directory-customer-card.completed-status {
          border-left-color: var(--color-green);
          opacity: 0.85;
        }

        .customer-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .customer-title-block {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .customer-card-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .status-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 20px;
        }

        .badge-active {
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--color-blue);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .badge-completed {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--color-green);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .edit-profile-btn {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .edit-profile-btn:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .customer-quick-info {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 12px;
          color: var(--text-secondary);
          background-color: rgba(0,0,0,0.15);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .quick-info-item strong {
          color: var(--text-muted);
        }

        /* 顧客カードのクリック対応 */
        .directory-customer-card.clickable-card {
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .directory-customer-card.clickable-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
          border-color: var(--color-gold);
        }

        .card-arrow-indicator {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 700;
        }

        .directory-customer-card.detail-mode {
          border-left-width: 6px;
        }

        /* 詳細画面ヘッダー */
        .directory-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .back-list-btn {
          padding: 8px 14px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .back-list-btn:hover {
          background-color: var(--bg-tertiary);
        }

        .detail-delete-btn {
          padding: 8px 14px;
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .detail-delete-btn:hover {
          background-color: rgba(239, 68, 68, 0.2);
        }

        /* Expanded Details panel styling */
        .customer-expanded-panel {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .customer-section-block {
          background-color: rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 12px;
        }

        .customer-section-block h4 {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .block-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .block-header h4 {
          margin-bottom: 0;
        }

        .inline-action-btn {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          border: none;
        }

        .inline-action-btn.edit {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .inline-action-btn.save {
          background-color: var(--color-green);
          color: white;
        }

        .inline-action-btn.cancel {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .edit-actions-row {
          display: flex;
          gap: 6px;
        }

        /* Inline profile edit inputs */
        .inline-edit-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .edit-form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edit-form-group.span-2 {
          grid-column: span 2;
        }

        .edit-form-group label {
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .edit-form-group input,
        .edit-form-group textarea {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 6px;
          outline: none;
        }

        .name-inputs-flex {
          display: flex;
          gap: 8px;
        }

        .name-inputs-flex input {
          flex: 1;
        }

        /* Inline events checklist timeline styling */
        .directory-events-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .directory-event-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
        }

        .directory-event-row:hover {
          transform: translateX(2px);
        }

        .directory-event-row.completed-item {
          border-left-color: var(--text-muted);
          background-color: rgba(0,0,0,0.1);
        }

        .directory-event-row.border-red { border-left-color: var(--color-red); }
        .directory-event-row.border-orange { border-left-color: var(--color-orange); }
        .directory-event-row.border-blue { border-left-color: var(--color-blue); }
        .directory-event-row.border-green { border-left-color: var(--color-green); }
        .directory-event-row.border-purple { border-left-color: var(--color-purple); }
        .directory-event-row.border-pink { border-left-color: var(--color-pink); }
        .directory-event-row.border-gray { border-left-color: var(--color-gray); }
        .directory-event-row.border-yellow { border-left-color: var(--color-yellow); }

        .event-row-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          flex: 1;
        }

        .event-checkbox {
          width: 14px;
          height: 14px;
          accent-color: var(--color-blue);
          cursor: pointer;
        }

        .event-datetime {
          font-weight: 500;
          color: var(--text-primary);
        }

        .event-notes-label {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .no-events-text {
          font-size: 12px;
          color: var(--text-muted);
          font-style: italic;
          padding: 4px 0;
        }

        /* Inline Event Creator Section styling */
        .add-event-inline-block {
          border-color: rgba(59, 130, 246, 0.25);
          background-color: rgba(59, 130, 246, 0.02);
        }

        .inline-add-event-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-row-flex {
          display: flex;
          gap: 8px;
          width: 100%;
        }

        .inline-event-input {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 6px;
          outline: none;
        }

        .inline-event-input.select-category {
          width: 90px;
          font-weight: 700;
          cursor: pointer;
        }

        .inline-event-input.input-date {
          flex: 1;
        }

        .inline-event-input.input-time {
          width: 80px;
        }

        .inline-add-event-submit-btn {
          background-color: var(--color-blue);
          color: white;
          border: none;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .inline-add-event-submit-btn:hover {
          background-color: #2563eb;
        }
      `}),(0,V.jsx)(`datalist`,{id:`sect-options`,children:n.map((e,t)=>(0,V.jsx)(`option`,{value:e},t))})]})}function Tt({categories:e,onUpdateCategories:t,sects:n=[],onUpdateSects:r}){let[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(`blue`),[c,l]=(0,x.useState)(null),[u,d]=(0,x.useState)(``),[f,p]=(0,x.useState)(`blue`),[m,h]=(0,x.useState)(``),[g,_]=(0,x.useState)(null),[v,y]=(0,x.useState)(``),b=[{id:`blue`,label:`青`,hex:`var(--color-blue)`},{id:`red`,label:`赤`,hex:`var(--color-red)`},{id:`orange`,label:`橙`,hex:`var(--color-orange)`},{id:`green`,label:`緑`,hex:`var(--color-green)`},{id:`purple`,label:`紫`,hex:`var(--color-purple)`},{id:`pink`,label:`桃`,hex:`var(--color-pink)`},{id:`gray`,label:`灰`,hex:`var(--color-gray)`},{id:`yellow`,label:`黄`,hex:`var(--color-yellow)`}],S=n=>{if(n.preventDefault(),!i.trim())return;let r={id:`cat_${Date.now()}`,name:i.trim(),color:o};t([...e,r]),a(``),s(`blue`)},C=n=>{if(e.length<=1){alert(`少なくとも1つのカテゴリーが必要です。`);return}window.confirm(`このカテゴリーを削除してもよろしいですか？（すでに登録済みの案件の表示色などは維持されますが、新規選択はできなくなります）`)&&t(e.filter(e=>e.id!==n))},w=e=>{l(e.id),d(e.name),p(e.color)},T=()=>{u.trim()&&(t(e.map(e=>e.id===c?{...e,name:u.trim(),color:f}:e)),l(null))},E=(n,r)=>{let i=r===`up`?n-1:n+1;if(i<0||i>=e.length)return;let a=[...e],o=a[n];a[n]=a[i],a[i]=o,t(a)},D=e=>{if(e.preventDefault(),m.trim()){if(n.includes(m.trim())){alert(`その宗派はすでに登録されています。`);return}r([...n,m.trim()]),h(``)}},O=e=>{if(n.length<=1){alert(`少なくとも1つの宗派が必要です。`);return}window.confirm(`この宗派を削除してもよろしいですか？`)&&r(n.filter((t,n)=>n!==e))},k=(e,t)=>{_(e),y(t)},A=()=>{if(v.trim()){if(n.includes(v.trim())&&n[g]!==v.trim()){alert(`その宗派名はすでに登録されています。`);return}r(n.map((e,t)=>t===g?v.trim():e)),_(null)}},j=(e,t)=>{let i=t===`up`?e-1:e+1;if(i<0||i>=n.length)return;let a=[...n],o=a[e];a[e]=a[i],a[i]=o,r(a)};return(0,V.jsxs)(`div`,{className:`settings-section fade-in`,children:[(0,V.jsx)(`div`,{className:`settings-header`,children:(0,V.jsx)(`h2`,{children:`🛠️ アプリ環境設定`})}),(0,V.jsxs)(`div`,{className:`settings-content`,children:[(0,V.jsxs)(`div`,{className:`settings-card`,children:[(0,V.jsx)(`h3`,{children:`📅 予定カテゴリーのカスタマイズ`}),(0,V.jsx)(`p`,{className:`card-desc`,children:`案件や予定を作成する際の選択肢（カテゴリー名と枠線の色）を自由に追加・変更、および順序の並び替えができます。`}),(0,V.jsxs)(`form`,{onSubmit:S,className:`add-cat-form`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`新規カテゴリー名`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`例: 回忌法要、初盆など`,value:i,onChange:e=>a(e.target.value),required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`テーマカラー`}),(0,V.jsx)(`div`,{className:`color-picker-row`,children:b.map(e=>(0,V.jsx)(`button`,{type:`button`,className:`color-dot-btn ${e.id} ${o===e.id?`selected`:``}`,onClick:()=>s(e.id),title:e.label},e.id))})]}),(0,V.jsx)(`button`,{type:`submit`,className:`add-submit-btn`,children:`＋ カテゴリーを追加`})]}),(0,V.jsxs)(`div`,{className:`categories-list-container`,children:[(0,V.jsxs)(`h4`,{children:[`登録中のカテゴリー一覧 (`,e.length,`)`]}),(0,V.jsx)(`div`,{className:`categories-grid`,children:e.map((t,n)=>{let r=c===t.id;return(0,V.jsx)(`div`,{className:`category-item-card`,style:{borderLeft:`4px solid var(--color-${t.color})`},children:r?(0,V.jsxs)(`div`,{className:`edit-mode-container`,children:[(0,V.jsx)(`input`,{type:`text`,value:u,onChange:e=>d(e.target.value),className:`edit-name-input`,required:!0}),(0,V.jsx)(`div`,{className:`edit-color-picker`,children:b.map(e=>(0,V.jsx)(`button`,{type:`button`,className:`color-dot-btn mini ${e.id} ${f===e.id?`selected`:``}`,onClick:()=>p(e.id)},e.id))}),(0,V.jsxs)(`div`,{className:`edit-actions`,children:[(0,V.jsx)(`button`,{onClick:T,className:`save-btn`,children:`保存`}),(0,V.jsx)(`button`,{onClick:()=>l(null),className:`cancel-btn`,children:`取消`})]})]}):(0,V.jsxs)(`div`,{className:`view-mode-container`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,V.jsxs)(`div`,{className:`cat-reorder-actions`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>E(n,`up`),disabled:n===0,className:`reorder-btn`,title:`上へ`,children:`▲`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>E(n,`down`),disabled:n===e.length-1,className:`reorder-btn`,title:`下へ`,children:`▼`})]}),(0,V.jsx)(`div`,{className:`cat-info`,children:(0,V.jsx)(`span`,{className:`badge badge-${t.color}`,children:t.name})})]}),(0,V.jsxs)(`div`,{className:`cat-actions`,children:[(0,V.jsx)(`button`,{onClick:()=>w(t),className:`action-icon-btn`,title:`編集`,children:`✏️`}),(0,V.jsx)(`button`,{onClick:()=>C(t.id),className:`action-icon-btn delete`,title:`削除`,children:`🗑️`})]})]})},t.id)})})]})]}),(0,V.jsxs)(`div`,{className:`settings-card`,style:{marginTop:`16px`},children:[(0,V.jsx)(`h3`,{children:`🛐 宗派のカスタマイズ`}),(0,V.jsx)(`p`,{className:`card-desc`,children:`顧客名簿に登録する際の「宗派」の選択肢を自由に追加・変更、および順序の並び替えができます。`}),(0,V.jsxs)(`form`,{onSubmit:D,className:`add-cat-form`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`新規宗派名`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`例: 天台宗、キリスト教など`,value:m,onChange:e=>h(e.target.value),required:!0})]}),(0,V.jsx)(`button`,{type:`submit`,className:`add-submit-btn`,children:`＋ 宗派を追加`})]}),(0,V.jsxs)(`div`,{className:`categories-list-container`,children:[(0,V.jsxs)(`h4`,{children:[`登録中の宗派一覧 (`,n.length,`)`]}),(0,V.jsx)(`div`,{className:`categories-grid`,children:n.map((e,t)=>(0,V.jsx)(`div`,{className:`category-item-card`,style:{borderLeft:`4px solid var(--color-gold)`},children:g===t?(0,V.jsxs)(`div`,{className:`edit-mode-container`,children:[(0,V.jsx)(`input`,{type:`text`,value:v,onChange:e=>y(e.target.value),className:`edit-name-input`,required:!0}),(0,V.jsxs)(`div`,{className:`edit-actions`,style:{marginTop:`4px`},children:[(0,V.jsx)(`button`,{onClick:A,className:`save-btn`,children:`保存`}),(0,V.jsx)(`button`,{onClick:()=>_(null),className:`cancel-btn`,children:`取消`})]})]}):(0,V.jsxs)(`div`,{className:`view-mode-container`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,V.jsxs)(`div`,{className:`cat-reorder-actions`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>j(t,`up`),disabled:t===0,className:`reorder-btn`,title:`上へ`,children:`▲`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>j(t,`down`),disabled:t===n.length-1,className:`reorder-btn`,title:`下へ`,children:`▼`})]}),(0,V.jsx)(`div`,{className:`cat-info`,children:(0,V.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:`bold`},children:e})})]}),(0,V.jsxs)(`div`,{className:`cat-actions`,children:[(0,V.jsx)(`button`,{onClick:()=>k(t,e),className:`action-icon-btn`,title:`編集`,children:`✏️`}),(0,V.jsx)(`button`,{onClick:()=>O(t),className:`action-icon-btn delete`,title:`削除`,children:`🗑️`})]})]})},t))})]})]}),(0,V.jsxs)(`div`,{className:`settings-card`,style:{marginTop:`16px`,border:`1px solid rgba(225, 29, 72, 0.25)`,backgroundColor:`rgba(225, 29, 72, 0.02)`},children:[(0,V.jsx)(`h3`,{style:{color:`var(--color-red)`},children:`🔄 システムアップデート`}),(0,V.jsx)(`p`,{className:`card-desc`,children:`スマホアプリのプログラムキャッシュをクリアし、最新バージョンへ強制更新します。※登録済みのデータ（名簿やタスクなど）は消去されません。`}),(0,V.jsx)(`button`,{type:`button`,onClick:async()=>{if(window.confirm(`アプリのプログラムキャッシュをクリアし、最新版を強制ロードします。よろしいですか？
(入力されたデータは消えません)`))try{if(`serviceWorker`in navigator){let e=await navigator.serviceWorker.getRegistrations();for(let t of e)await t.unregister()}if(`caches`in window){let e=await caches.keys();for(let t of e)await caches.delete(t)}localStorage.removeItem(`ct_migrated_defaults_v3`),window.location.reload(!0)}catch(e){console.error(e),alert(`アップデート処理に失敗しました。画面を一度閉じて開き直してください。`)}},className:`add-submit-btn`,style:{backgroundColor:`var(--color-red)`,marginTop:`8px`},children:`キャッシュをクリアして強制更新`})]})]}),(0,V.jsx)(`style`,{children:`
        .settings-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
          flex: 1;
          padding-bottom: 80px;
        }

        .settings-header h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .settings-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .settings-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-gold-light);
        }

        .card-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .add-cat-form {
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .color-picker-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          padding: 4px 0;
        }

        .color-dot-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
        }

        .color-dot-btn:active {
          transform: scale(0.9);
        }

        .color-dot-btn.selected {
          border-color: #fff;
          transform: scale(1.1);
          box-shadow: 0 0 6px var(--color-gold-light);
        }

        .color-dot-btn.blue { background-color: var(--color-blue); }
        .color-dot-btn.red { background-color: var(--color-red); }
        .color-dot-btn.orange { background-color: var(--color-orange); }
        .color-dot-btn.green { background-color: var(--color-green); }
        .color-dot-btn.purple { background-color: var(--color-purple); }
        .color-dot-btn.pink { background-color: var(--color-pink); }
        .color-dot-btn.gray { background-color: var(--color-gray); }
        .color-dot-btn.yellow { background-color: var(--color-yellow); }

        .color-dot-btn.mini {
          width: 18px;
          height: 18px;
        }

        .add-submit-btn {
          background-color: var(--color-gold);
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .add-submit-btn:hover {
          background-color: var(--color-gold-light);
        }

        .categories-list-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px dashed var(--border-color);
          padding-top: 14px;
        }

        .categories-list-container h4 {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .categories-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-item-card {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .view-mode-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .edit-mode-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        .edit-name-input {
          width: 100%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 13px;
        }

        .edit-color-picker {
          display: flex;
          gap: 6px;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .save-btn {
          background-color: var(--color-blue);
          color: white;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: bold;
        }

        .cancel-btn {
          background-color: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .cat-actions {
          display: flex;
          gap: 8px;
        }

        .action-icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 12px;
          padding: 4px;
          border-radius: 4px;
        }

        .action-icon-btn:hover {
          background-color: rgba(255,255,255,0.05);
        }

        .action-icon-btn.delete:hover {
          background-color: rgba(239,68,68,0.1);
        }

        /* 順序並べ替え用アクションCSS */
        .cat-reorder-actions {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-right: 12px;
          align-items: center;
          justify-content: center;
        }

        .reorder-btn {
          font-size: 8px;
          color: var(--text-secondary);
          width: 18px;
          height: 18px;
          line-height: 16px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .reorder-btn:disabled {
          opacity: 0.15;
          cursor: not-allowed;
          pointer-events: none;
        }
      `})]})}var Et=(e,t)=>{if(!e||!t)return``;try{let n=typeof e==`string`?e:JSON.stringify(e);return xe.default.AES.encrypt(n,t).toString()}catch(e){return console.error(`暗号化エラー:`,e),``}},Dt=(e,t)=>{if(!e||!t)return null;try{let n=xe.default.AES.decrypt(e,t).toString(xe.default.enc.Utf8);if(!n)return null;try{return JSON.parse(n)}catch{return n}}catch(e){return console.error(`復号エラー:`,e),null}};function Ot(e,t,n){let[r,i]=(0,x.useState)(t);return(0,x.useEffect)(()=>{if(!n){i(t);return}try{let r=window.localStorage.getItem(e);if(r){let e=Dt(r,n);if(e!==null){i(e);return}}i(t)}catch(n){console.error(`LocalStorage(${e})のロードに失敗しました:`,n),i(t)}},[e,n]),[r,t=>{try{let a=t instanceof Function?t(r):t;if(i(a),n){let t=Et(a,n);window.localStorage.setItem(e,t)}}catch(t){console.error(`LocalStorage(${e})の保存に失敗しました:`,t)}}]}function kt(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(`tasks`),[i,a]=(0,x.useState)(new Date),[o,s]=(0,x.useState)(null),[c,l]=Ot(`ct_tasks`,[],e),[u,d]=Ot(`ct_categories`,[{id:`cat_1`,name:`施行`,color:`red`},{id:`cat_2`,name:`打合せ`,color:`blue`},{id:`cat_3`,name:`法事`,color:`purple`},{id:`cat_4`,name:`社内業務`,color:`gray`}],e),[f,p]=Ot(`ct_sects`,[`浄土真宗本願寺派(西)`,`真宗大谷派(東)`,`法華宗`,`曹洞宗`,`日蓮宗`,`真言宗`,`浄土宗`,`臨済宗`,`創価学会`],e);(0,x.useEffect)(()=>{`serviceWorker`in navigator&&navigator.serviceWorker.getRegistrations().then(e=>{for(let t of e)t.unregister().then(()=>{console.log(`Service Worker unregistered successfully`)})})},[]),(0,x.useEffect)(()=>{if(c&&c.length>0){let e=!1,t=c.map(t=>t.events?t:(e=!0,{...t,events:[{id:`evt_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t.category||`打合せ`,date:t.date||new Date().toISOString().split(`T`)[0],time:t.time||``,alarmEnabled:!0,status:t.status===`completed`?`completed`:`active`,notes:``}]}));e&&l(t)}},[c,l]),(0,x.useEffect)(()=>{if(e){let e=localStorage.getItem(`ct_migrated_defaults_v3`),t=Array.isArray(u)&&(u.length>4||u.some(e=>e.name===`搬送`||e.name===`事前相談`)),n=Array.isArray(f)&&(f.includes(`浄土真宗`)||!f.includes(`創価学会`));(!e||t||n)&&(d([{id:`cat_1`,name:`施行`,color:`red`},{id:`cat_2`,name:`打合せ`,color:`blue`},{id:`cat_3`,name:`法事`,color:`purple`},{id:`cat_4`,name:`社内業務`,color:`gray`}]),p([`浄土真宗本願寺派(西)`,`真宗大谷派(東)`,`法華宗`,`曹洞宗`,`日蓮宗`,`真言宗`,`浄土宗`,`臨済宗`,`創価学会`]),localStorage.setItem(`ct_migrated_defaults_v3`,`true`))}},[e,u,f,d,p]),(0,x.useEffect)(()=>{`Notification`in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,x.useEffect)(()=>{let e=0,t=()=>{document.visibilityState===`hidden`?e=Date.now():e&&Date.now()-e>6e4&&h()};return document.addEventListener(`visibilitychange`,t),()=>{document.removeEventListener(`visibilitychange`,t)}},[]);let m=e=>{t(e)},h=()=>{t(null),r(`tasks`)},g=e=>{let t={...e,id:`task_${Date.now()}`};l(e=>[...e,t])},_=(e,t)=>{l(n=>n.map(n=>n.id===e?{...n,...t}:n))},v=e=>{window.confirm(`この案件を完全に削除してもよろしいですか？`)&&l(t=>t.filter(t=>t.id!==e))};return e?(0,V.jsxs)(`div`,{className:`app-container fade-in`,children:[(0,V.jsxs)(`header`,{className:`app-header`,children:[(0,V.jsxs)(`div`,{className:`header-logo-section`,children:[(0,V.jsx)(`svg`,{className:`header-logo`,viewBox:`0 0 512 512`,children:(0,V.jsx)(`path`,{d:`M256,120 C220,190 225,300 256,360 C287,300 292,190 256,120 Z`,fill:`#fbbf24`})}),(0,V.jsxs)(`span`,{className:`app-title-text`,children:[`Ceremony Tasker `,(0,V.jsx)(`small`,{style:{fontSize:`10px`,opacity:.5},children:`v14`})]})]}),(0,V.jsxs)(`button`,{onClick:h,className:`lock-btn`,title:`アプリをロックする`,children:[(0,V.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,className:`lock-icon-svg`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,V.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),`ロック`]})]}),(0,V.jsxs)(`main`,{className:`app-content`,children:[n===`tasks`&&(0,V.jsx)(vt,{tasks:c,passcode:e,categories:u,onAddTask:g,onUpdateTask:_,onDeleteTask:v,targetEditTaskId:o,clearTargetEditTaskId:()=>s(null)}),n===`calendar`&&(0,V.jsx)(Oe,{tasks:c,selectedDate:i,onSelectDate:a,onSelectTask:e=>{r(`tasks`)}}),n===`gallery`&&(0,V.jsx)(yt,{tasks:c}),n===`customers`&&(0,V.jsx)(wt,{tasks:c,passcode:e,sects:f,onUpdateCustomer:_,onDeleteCustomer:v,onAddCustomer:g,onEditCustomer:e=>{s(e),r(`tasks`)}}),n===`settings`&&(0,V.jsx)(Tt,{categories:u,onUpdateCategories:d,sects:f,onUpdateSects:p})]}),(0,V.jsx)(Ce,{activeTab:n,setActiveTab:r}),(0,V.jsx)(`style`,{children:`
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          height: 100dvh;
          width: 100%;
          overflow: hidden;
        }

        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 800;
        }

        .header-logo-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-logo {
          width: 20px;
          height: 20px;
        }

        .app-title-text {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: linear-gradient(to right, var(--color-gold-light), #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lock-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .lock-btn:active {
          background-color: rgba(239, 68, 68, 0.2);
        }

        .lock-icon-svg {
          width: 12px;
          height: 12px;
        }

        .app-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 0;
          overflow: hidden;
        }
      `})]}):(0,V.jsx)(Se,{onUnlock:m})}(0,S.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(x.StrictMode,{children:(0,V.jsx)(kt,{})}));