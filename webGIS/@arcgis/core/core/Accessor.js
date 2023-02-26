/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{b as t,f as e,a as s}from"../chunks/maybe.js";import{g as r}from"../chunks/get.js";import{L as i,subclass as o}from"./accessorSupport/decorators/subclass.js";import{a as n}from"../chunks/metadata.js";import{a,clone as c,equals as l}from"./lang.js";import{L as h}from"../chunks/Logger.js";import{O as u}from"../chunks/ArrayPool.js";import{F as d,t as _,r as p,a as f,b as g,i as v}from"../chunks/tracking.js";import{g as m}from"../chunks/utils.js";import{property as y,s as E}from"./accessorSupport/decorators/property.js";import{r as b,w as O}from"../chunks/watch.js";import"../chunks/ensureType.js";import"../chunks/object.js";import"./Error.js";import"../config.js";import"../chunks/string.js";import"../chunks/handleUtils.js";import"./scheduling.js";import"../chunks/nextTick.js";import"./promiseUtils.js";function S(t){const e=[];return function*(){yield*e;for(const s of t)e.push(s),yield s}}function A(t,e){for(const s of t)if(null!=s&&e(s))return s}function C(t){return null!=t&&"function"==typeof t[Symbol.iterator]}var I;!function(t){t[t.DEFAULTS=0]="DEFAULTS",t[t.COMPUTED=1]="COMPUTED",t[t.SERVICE=2]="SERVICE",t[t.PORTAL_ITEM=3]="PORTAL_ITEM",t[t.WEB_SCENE=4]="WEB_SCENE",t[t.WEB_MAP=5]="WEB_MAP",t[t.USER=6]="USER"}(I||(I={}));const T=I.USER+1;function w(t){switch(t){case"defaults":return I.DEFAULTS;case"service":return I.SERVICE;case"portal-item":return I.PORTAL_ITEM;case"web-scene":return I.WEB_SCENE;case"web-map":return I.WEB_MAP;case"user":return I.USER}}function D(e){switch(e){case I.DEFAULTS:return"defaults";case I.SERVICE:return"service";case I.PORTAL_ITEM:return"portal-item";case I.WEB_SCENE:return"web-scene";case I.WEB_MAP:return"web-map";case I.USER:return"user"}return t(void 0)}function N(t){return D(t)}class k{constructor(t,e){this._observers=t,this._observer=e}remove(){a(this._observers,this._observer)}}class j{constructor(t,e,s){this.properties=t,this.propertyName=e,this.metadata=s,this._observers=null,this._accessed=null,this._handles=null,this.flags=d.Dirty|(s.nonNullable?d.NonNullable:0)|(s.hasOwnProperty("value")?d.HasDefaultValue:0)|(void 0===s.get?d.DepTrackingInitialized:0)|(void 0===s.dependsOn?d.AutoTracked:0)}destroy(){if(this.flags&d.Dirty&&this._observers){const t=this._observers.slice();for(const e of t)e.onCommitted()}this._accessed=null,this._observers=null,this._clearObservationHandles()}getComputed(){_(this);const t=this.properties.store,e=this.propertyName,s=this.flags,r=t.get(e);if(s&d.Computing)return r;if(~s&d.Dirty&&t.has(e))return r;this.flags|=d.Computing;const i=this.properties.host;let o;s&d.AutoTracked?o=p(this,this.metadata.get,i):(f(i,this),o=this.metadata.get.call(i)),t.set(e,o,I.COMPUTED);const n=t.get(e);return n===r?this.flags&=~d.Dirty:g(this.commit,this),this.flags&=~d.Computing,n}onObservableAccessed(t){t!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(t)||this._accessed.push(t))}onTrackingEnd(){this._clearObservationHandles(),this.flags|=d.DepTrackingInitialized;const t=this._accessed;if(null===t)return;let e=this._handles;null===e&&(e=this._handles=[]);for(let s=0;s<t.length;++s)e.push(t[s].observe(this));t.length=0}observe(t){return null===this._observers&&(this._observers=[]),this._observers.includes(t)||this._observers.push(t),new k(this._observers,t)}notifyChange(){this.onInvalidated(),this.onCommitted()}invalidate(){this.onInvalidated()}onInvalidated(){~this.flags&d.Overriden&&(this.flags|=d.Dirty);const t=this._observers;if(null!==t)for(let e=0;e<t.length;++e)t[e].onInvalidated()}commit(){this.flags&=~d.Dirty,this.onCommitted()}onCommitted(){if(null===this._observers)return;const t=this._observers.slice();for(let e=0;e<t.length;++e)t[e].onCommitted()}_clearObservationHandles(){const t=this._handles;if(null!==t){for(let e=0;e<t.length;++e)t[e].remove();t.length=0}}}class U{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(t){const e=new U;return this._values.forEach(((s,r)=>{t&&t.has(r)||e.set(r,c(s))})),e}get(t){return this._values.get(t)}originOf(){return I.USER}keys(){return[...this._values.keys()]}set(t,e){this._values.set(t,e)}delete(t){this._values.delete(t)}has(t){return this._values.has(t)}forEach(t){this._values.forEach(t)}}function P(t,e,s){return void 0!==t}function R(t,e,s,r){return!(void 0===t||null==s&&t.flags&d.NonNullable&&(r.lifecycle,i.INITIALIZING,1))}h.getLogger("esri.core.accessorSupport.Properties");class L{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=i.INITIALIZING,this.store=new U,this._origin=I.USER;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const t in s){const e=new j(this,t,s[t]);this.properties.set(t,e)}this.metadatas=s,this._autoDestroy=e.autoDestroy}initialize(){this.lifecycle=i.CONSTRUCTING}constructed(){this.lifecycle=i.CONSTRUCTED}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[e,s]of this.properties){const r=this.internalGet(e);r&&(t=r)&&"function"==typeof t.destroy&&(r.destroy(),~s.flags&d.NonNullable&&this._internalSet(s,null)),s.destroy()}else for(const[t,e]of this.properties)e.destroy();var t}get initialized(){return this.lifecycle!==i.INITIALIZING}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();_(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&e.flags&d.HasDefaultValue)return"defaults"}return D(e)}has(t){return!!this.properties.has(t)&&this.store.has(t)}keys(){return[...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(P(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);P(s)&&this._internalSet(s,e)}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!P(r))return"";const i=new Set,o=p({onObservableAccessed:t=>i.add(t),onTrackingEnd:()=>{}},(()=>r.metadata.get?.call(t)));let n=`${s}${t.declaredClass.split(".").pop()}.${e}: ${o}\n`;if(0===i.size)return n;s+="  ";for(const t of i){if(!(t instanceof j))continue;const e=t.properties.host,r=t.propertyName,i=m(e);n+=i?i.getDependsInfo(e,r,s):`${s}${r}: undefined\n`}return n}setAtOrigin(t,e,s){const r=this.properties.get(t);if(P(r))return this._setAtOrigin(r,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(e.flags&d.Overriden)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&e.flags&d.Overriden&&(e.flags&=~d.Overriden,e.notifyChange())}override(t,e){const s=this.properties.get(t);if(!R(s,0,e,this))return;const r=s.metadata.cast;if(r){const t=this._cast(r,e),{valid:s,value:i}=t;if(M.release(t),!s)return;e=i}s.flags|=d.Overriden,this._internalSet(s,e)}set(t,e){const s=this.properties.get(t);if(!R(s,0,e,this))return;const r=s.metadata.cast;if(r){const t=this._cast(r,e),{valid:s,value:i}=t;if(M.release(t),!s)return;e=i}const i=s.metadata.set;i?i.call(this.host,e):this._internalSet(s,e)}setDefaultOrigin(t){this._origin=w(t)}getDefaultOrigin(){return D(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange()}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate()}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit()}_internalSet(t,e){const s=this.lifecycle!==i.INITIALIZING?this._origin:I.DEFAULTS;this._setAtOrigin(t,e,s)}_setAtOrigin(t,e,s){const r=this.store,i=t.propertyName;r.has(i,s)&&l(e,r.get(i))&&~t.flags&d.Overriden&&s===r.originOf(i)||(t.invalidate(),r.set(i,e,s),t.commit(),v(this.host,t))}_cast(t,e){const s=M.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}const M=new u(class{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}});var z;function B(t){if(null==t)return{value:t};if(Array.isArray(t))return{type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor?.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return{type:Boolean,value:t};case"string":return{type:String,value:t};case"number":return{type:Number,value:t};case"function":return{type:t,value:null};default:return}}const G=Symbol("Accessor-Handles");class W{constructor(...t){if(this[z]=null,this.constructor===W)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new L(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t))}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:e,declaredClass:s,constructor:r}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const i=this;class a extends i{constructor(...t){super(...t),this.inherited=null,r&&r.apply(this,t)}}n(a.prototype);for(const e in t){const s=t[e];a.prototype[e]="function"==typeof s?function(...t){const r=this.inherited;let o;this.inherited=function(...t){if(i.prototype[e])return i.prototype[e].apply(this,t)};try{o=s.apply(this,t)}catch(t){throw this.inherited=r,t}return this.inherited=r,o}:t[e]}for(const t in e){const s=B(e[t]);y(s)(a.prototype,t)}return o(s)(a)}postscript(t){const e=this.__accessor__,s=e.ctorArgs||t;e.initialize(),s&&(this.set(s),e.ctorArgs=null),e.constructed(),this.initialize()}initialize(){}destroy(){this.destroyed||(e(this[G],(t=>{t.forEach((t=>t.remove()))})),this[G]=null,b(this),this.__accessor__.destroy())}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&this.__accessor__.lifecycle===i.CONSTRUCTED||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t)}get(t){return r(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,e){return E(this,t,e),this}watch(t,e,s){return O(this,t,e,s)}own(t){let e=this[G];if(s(e)&&(e=this[G]=new Set),C(t))for(const s of t)e.add(s);else e.add(t)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,e){return this.__accessor__.override(t,e)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t)}_get(t){return this.__accessor__.internalGet(t)}_set(t,e){return this.__accessor__.internalSet(t,e),this}}z=G;export{I as O,T as a,D as b,k as c,S as d,W as default,C as e,A as f,N as i,w as n};