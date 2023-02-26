/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../core/lang.js";import{L as n}from"./Logger.js";function e(n,e){for(const[r,t]of n)if(e(t,r))return!0;return!1}function r(n,e){for(const[r,t]of n)if(e(t,r))return t;return null}function t(n,e,r){const t=n.get(e);if(void 0!==t)return t;const o=r();return n.set(e,o),o}const o=n.getLogger("esri.core.Accessor");function u(n){return null==n?n:new Date(n)}function a(n){return null==n?n:!!n}function s(n){return null==n?n:n.toString()}function i(n){return null==n?n:(n=parseFloat(n),isNaN(n)?0:n)}function l(n){return null==n?n:Math.round(parseFloat(n))}function c(n){return n&&n.constructor&&void 0!==n.constructor.__accessorMetadata__}function f(n,e){return null!=e&&n&&!(e instanceof n)}function p(n){return n&&"isCollection"in n}function y(n){return n&&n.Type?"function"==typeof n.Type?n.Type:n.Type.base:null}function v(n,e){return!!c(e)&&(o.error("Accessor#set","Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+d(n)+"'"),!0)}function g(n,e){return null==e?e:p(n)?function(n,e){if(!e||!e.constructor||!p(e.constructor))return v(n,e)?e:new n(e);const r=y(n.prototype.itemType),t=y(e.constructor.prototype.itemType);return r?t?r===t?e:r.prototype.isPrototypeOf(t.prototype)?new n(e):(v(n,e),e):new n(e):e}(n,e):f(n,e)?v(n,e)?e:new n(e):e}function d(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}const h=new WeakMap;function b(n){switch(n){case Number:return i;case T:return l;case Boolean:return a;case String:return s;case Date:return u;default:return t(h,n,(()=>g.bind(null,n)))}}function m(n,e){const r=b(n);return 1===arguments.length?r:r(e)}function w(n,e,r){return 1===arguments.length?w.bind(null,n):e?Array.isArray(e)?e.map((e=>n(e,r))):[n(e,r)]:e}function A(n,e){return 1===arguments.length?w(m.bind(null,n)):w(m.bind(null,n),e)}function $(n,e,r){return 0!==e&&Array.isArray(r)?r.map((r=>$(n,e-1,r))):n(r)}function j(n,e,r){if(2===arguments.length)return j.bind(null,n,e);if(!r)return r;let t=e,o=r=$(n,e,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let n=0;n<t;n++)r=[r];return r}function k(n,e,r){return 2===arguments.length?j(m.bind(null,n),e):j(m.bind(null,n),e,r)}function M(n){return!!Array.isArray(n)&&!n.some((e=>{const r=typeof e;return!("string"===r||"number"===r||"function"===r&&n.length>1)}))}function N(n,e){if(2===arguments.length)return N(n).call(null,e);const r=new Set,t=n.filter((n=>"function"!=typeof n)),u=n.filter((n=>"function"==typeof n));for(const e of n)"string"!=typeof e&&"number"!=typeof e||r.add(e);let a=null,s=null;return(n,e)=>{if(null==n)return n;const i=typeof n,l="string"===i||"number"===i;return l&&(r.has(n)||u.some((n=>"string"===i&&n===String||"number"===i&&n===Number)))||"object"===i&&u.some((e=>!f(n,e)))?n:(l&&t.length?(a||(a=t.map((n=>"string"==typeof n?`'${n}'`:`${n}`)).join(", ")),o.error("Accessor#set",`'${n}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof n&&u.length?(s||(s=u.map((n=>d(n))).join(", ")),o.error("Accessor#set",`'${n}' is not a valid value for this property, value must be one of ${s}`)):o.error("Accessor#set",`'${n}' is not a valid value for this property`),e&&(e.valid=!1),null)}}function S(n,e){if(2===arguments.length)return S(n).call(null,e);const r={},t=[],u=[];for(const e in n.typeMap){const o=n.typeMap[e];r[e]=m(o),t.push(d(o)),u.push(e)}const a=()=>`'${t.join("', '")}'`,s=()=>`'${u.join("', '")}'`,i="string"==typeof n.key?e=>e[n.key]:n.key;return e=>{if(n.base&&!f(n.base,e))return e;if(null==e)return e;const t=i(e)||n.defaultKeyValue,u=r[t];if(!u)return o.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!f(n.typeMap[t],e))return e;if("string"==typeof n.key&&!c(e)){const r={};for(const t in e)t!==n.key&&(r[t]=e[t]);return u(r)}return u(e)}}class T{}const _={native:n=>({type:"native",value:n}),array:n=>({type:"array",value:n}),oneOf:n=>({type:"one-of",values:n})};function B(n){if(!n||!("type"in n))return!1;switch(n.type){case"native":case"array":case"one-of":return!0}return!1}function C(n){switch(n.type){case"native":return m(n.value);case"array":return w(C(n.value));case"one-of":return function(n){let e=null;return(r,t)=>I(r,n)?r:(null==e&&(e=D(n)),o.error("Accessor#set",`Invalid property value, value needs to be of type ${e}`),t&&(t.valid=!1),null)}(n);default:return null}}function D(n){switch(n.type){case"native":switch(n.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case T:return"integer";case Date:return"date";default:return d(n.value)}case"array":return`array of ${D(n.value)}`;case"one-of":{const e=n.values.map((n=>D(n)));return`one of ${e.slice(0,e.length-1)} or ${e[e.length-1]}`}}return"unknown"}function I(n,e){if(null==n)return!0;switch(e.type){case"native":switch(e.value){case Number:case T:return"number"==typeof n;case Boolean:return"boolean"==typeof n;case String:return"string"==typeof n}return n instanceof e.value;case"array":return!!Array.isArray(n)&&!n.some((n=>!I(n,e.value)));case"one-of":return e.values.some((e=>I(n,e)))}}export{T as I,w as a,C as b,M as c,N as d,S as e,j as f,A as g,k as h,B as i,m as j,i as k,s as l,g as m,l as n,t as o,r as p,e as s,_ as t};
