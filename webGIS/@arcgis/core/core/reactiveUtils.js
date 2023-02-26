/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as n,o as t,isAborted as r,createAbortError as o,onAbort as s}from"./promiseUtils.js";import{m as i,h as e}from"../chunks/handleUtils.js";import{r as u}from"../chunks/maybe.js";import{b as c}from"../chunks/watch.js";export{a as autorun}from"../chunks/watch.js";import"./lang.js";import"./Error.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"./scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";function l(n,t,r={}){return f(n,t,r,g)}function m(n,t,r={}){return f(n,t,r,y)}function f(n,t,r={},o){let s=null;const i=r.once?(n,r)=>{o(n)&&(u(s),t(n,r))}:(n,r)=>{o(n)&&t(n,r)};if(s=c(n,i,r.sync,r.equals),r.initial){const t=n();i(t,t)}return s}function p(r,o,s,e={}){let c=null,m=null,a=null;function f(){c&&m&&(m.remove(),e.onListenerRemove?.(c),c=null,m=null)}function p(n){e.once&&e.once&&u(a),s(n)}const j=l(r,((r,s)=>{f(),n(r)&&(c=r,m=t(r,o,p),e.onListenerAdd?.(r))}),{sync:e.sync,initial:!0});return a=i((()=>{j.remove(),f()})),a}function j(n,t){return k(n,null,t)}function h(n,t){return k(n,y,t)}function k(n,t,i){if(r(i))return Promise.reject(o());const c=n();if(t?.(c))return Promise.resolve(c);let l=null;function m(){l=u(l)}return new Promise(((r,u)=>{l=e([s(i,(()=>{m(),u(o())})),f(n,(n=>{m(),r(n)}),{sync:!1,once:!0},t??g)])}))}function g(n){return!0}function y(n){return!!n}function v(n,t,r={}){let o=!1;const s=l(n,((n,r)=>{o||t(n,r)}),r);return{remove(){s.remove()},pause(){o=!0},resume(){o=!1}}}const d={sync:!0},P={initial:!0},b={sync:!0,initial:!0};export{P as initial,p as on,j as once,v as pausable,d as sync,b as syncAndInitial,l as watch,m as when,h as whenOnce};