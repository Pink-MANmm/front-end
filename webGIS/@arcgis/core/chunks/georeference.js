/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as t,a as r}from"./maybe.js";import{f as o,a as n,c as e}from"./unitUtils.js";import{b as a}from"./quatf64.js";import{q as i,u as s,e as l,j as c,m as p,v as u,w as f,b as g}from"./mat4.js";import{c as m,I as h}from"./mat4f64.js";import{a as y}from"./mat3.js";import{computeTranslationToOriginAndRotation as A,projectBuffer as j}from"../geometry/projection.js";import{c as w}from"./projectionEllipsoid.js";import{_ as d}from"./tslib.es6.js";import{JSONSupport as x}from"../core/JSONSupport.js";import{property as T}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as b}from"../core/accessorSupport/decorators/subclass.js";import{h as v,f as M,w as F,z as R,q as E}from"./mathUtils.js";import N from"../geometry/Point.js";import{c as z,b as P,d as S}from"./axisAngleDegrees.js";import{e as _,B}from"./BufferView.js";import{t as q,c as I,a as L}from"./vec3.js";import{c as O,d as G,e as Y,p as U,a as D,b as J,t as V,f as W,g as k}from"./projection.js";var C;let H=C=class extends x{constructor(t){super(t),this.origin=v(),this.translation=v(),this.rotation=z(),this.scale=M(1,1,1),this.geographic=!0}get localMatrix(){const t=m();return i(t,this.scale),s(t,t,S(this.rotation),P(this.rotation)),l(t,t,this.translation),t}get localMatrixInverse(){return c(m(),this.localMatrix)}applyLocal(t,r){return F(r,t,this.localMatrix)}applyLocalInverse(t,r){return F(r,t,this.localMatrixInverse)}project(t,r){const o=new Float64Array(t.length),n=_.fromTypedArray(o),e=_.fromTypedArray(t);if(this.geographic){const t=w(r),a=m();return A(r,this.origin,a,t),p(a,a,this.localMatrix),q(n,e,a),j(o,t,0,o,r,0,o.length/3),o}const{localMatrix:a,origin:i}=this;u(a,h)?I(n,e):q(n,e,a);for(let t=0;t<o.length;t+=3)o[t+0]+=i[0],o[t+1]+=i[1],o[t+2]+=i[2];return o}getOriginPoint(t){const[r,o,n]=this.origin;return new N({x:r,y:o,z:n,spatialReference:t})}equals(r){return t(r)&&this.geographic===r.geographic&&R(this.origin,r.origin)&&f(this.localMatrix,r.localMatrix)}clone(){const t={origin:E(this.origin),translation:E(this.translation),rotation:z(this.rotation),scale:E(this.scale),geographic:this.geographic};return new C(t)}};d([T({type:[Number],nonNullable:!0,json:{write:!0}})],H.prototype,"origin",void 0),d([T({type:[Number],nonNullable:!0,json:{write:!0}})],H.prototype,"translation",void 0),d([T({type:[Number],nonNullable:!0,json:{write:!0}})],H.prototype,"rotation",void 0),d([T({type:[Number],nonNullable:!0,json:{write:!0}})],H.prototype,"scale",void 0),d([T({type:Boolean,nonNullable:!0,json:{write:!0}})],H.prototype,"geographic",void 0),d([T()],H.prototype,"localMatrix",null),d([T()],H.prototype,"localMatrixInverse",null),H=C=d([b("esri.geometry.support.MeshTransform")],H);const K=H;function Q(t,r){return t.isGeographic||t.isWebMercator&&(r?.geographic??!0)}function X(t,o,n){return Q(o.spatialReference,n)?function(t,o,n){const e=o.spatialReference,a=et(o,n,it),i=new Float64Array(t.position.length),s=function(t,r,o,n){q(_.fromTypedArray(n),_.fromTypedArray(t),r);const e=new Float64Array(t.length);return O(n,e,o)}(t.position,a,e,i),l=y(lt,a),c=function(t,o,n,e,a){if(r(n))return null;const i=new Float32Array(n.length);return L(B.fromTypedArray(i),B.fromTypedArray(n),e),G(i,t,o,a,i),i}(s,i,t.normal,l,e),p=function(t,o,n,e,a){if(r(n))return null;const i=new Float32Array(n.length);L(B.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),B.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),e);for(let t=3;t<i.length;t+=4)i[t]=n[t];return Y(i,t,o,a,i),i}(s,i,t.tangent,l,e);return{position:s,normal:c,tangent:p}}(t,o,n):function(t,r,o){const n=new Float64Array(t.position.length),e=t.position,a=r.x,i=r.y,s=r.z||0,{horizontal:l,vertical:c}=at(o?o.unit:null,r.spatialReference);for(let t=0;t<e.length;t+=3)n[t+0]=e[t+0]*l+a,n[t+1]=e[t+1]*l+i,n[t+2]=e[t+2]*c+s;return{position:n,normal:t.normal,tangent:t.tangent}}(t,o,n)}function Z(o,n,e){const{position:a,normal:i,tangent:s}=o;if(r(n))return{position:a,normal:i,tangent:s};const l=n.localMatrix;return X({position:V(a,new Float64Array(a.length),l),normal:t(i)?W(i,new Float32Array(i.length),l):null,tangent:t(s)?k(s,new Float32Array(s.length),l):null},n.getOriginPoint(e),{geographic:n.geographic})}function $(t,r,o){if(o?.useTransform){const{position:n,normal:e,tangent:a}=t;return{vertexAttributes:{position:n,normal:e,tangent:a},transform:new K({origin:[r.x,r.y,r.z??0],geographic:Q(r.spatialReference,o)})}}return{vertexAttributes:X(t,r,o),transform:null}}function tt(t,r,o){return Q(r.spatialReference,o)?nt(t,r,o):ot(t,r,o)}function rt(t,o,n,e){if(r(o))return tt(t,n,e);const a=Z(t,o,n.spatialReference);return n.equals(o.getOriginPoint(n.spatialReference))?ot(a,n,e):Q(n.spatialReference,e)?nt(a,n,e):ot(a,n,e)}function ot(t,r,o){const n=new Float64Array(t.position.length),e=t.position,a=r.x,i=r.y,s=r.z||0,{horizontal:l,vertical:c}=at(o?o.unit:null,r.spatialReference);for(let t=0;t<e.length;t+=3)n[t+0]=(e[t+0]-a)/l,n[t+1]=(e[t+1]-i)/l,n[t+2]=(e[t+2]-s)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function nt(t,o,n){const e=o.spatialReference;et(o,n,it);const a=c(st,it),i=new Float64Array(t.position.length),s=function(t,r,o,n){const e=U(t,r,n),a=_.fromTypedArray(e),i=new Float64Array(e.length),s=_.fromTypedArray(i);return q(s,a,o),i}(t.position,e,a,i),l=y(lt,a),p=function(t,o,n,e,a){if(r(t))return null;const i=D(t,o,n,e,new Float32Array(t.length)),s=B.fromTypedArray(i);return L(s,s,a),i}(t.normal,t.position,i,e,l),u=function(t,o,n,e,a){if(r(t))return null;const i=J(t,o,n,e,new Float32Array(t.length)),s=B.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return L(s,s,a),i}(t.tangent,t.position,i,e,l);return{position:s,normal:p,tangent:u}}function et(t,r,o){A(t.spatialReference,[t.x,t.y,t.z||0],o,w(t.spatialReference));const{horizontal:n,vertical:e}=at(r?r.unit:null,t.spatialReference);return g(o,o,[n,n,e]),o}function at(t,a){if(r(t))return ct;const i=a.isGeographic?1:o(a),s=a.isGeographic?1:n(a),l=e(1,t,"meters");return{horizontal:l*i,vertical:l*s}}const it=m(),st=m(),lt=a(),ct={horizontal:1,vertical:1};export{K as M,$ as a,Z as b,rt as c,X as g,Q as i,tt as u};