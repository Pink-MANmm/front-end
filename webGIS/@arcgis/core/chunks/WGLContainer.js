/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../core/lang.js";import{i as e,a as t}from"./maybe.js";import{c as r}from"./mat3f32.js";import{b as s}from"./brushes.js";import{C as i}from"./Container.js";import o from"../core/Error.js";import{L as n}from"./Logger.js";import{watch as a}from"../core/reactiveUtils.js";import{D as c}from"./DisplayObject.js";import{e as h}from"./earcut.js";import{a as f}from"./vec2.js";import{a as m}from"./vec2f64.js";import{d as p,e as d}from"./featureConversionUtils.js";import{O as l}from"./OptimizedGeometry.js";import{i as u}from"./number3.js";import{B as g,V as y}from"./VertexArrayObject.js";import{P as _,U as x,D as w}from"./enums.js";import{W as v}from"./enums4.js";const I=n.getLogger("esri.views.2d.engine.webgl.Mesh2D"),A=(e,t,r,s)=>{let i=0;for(let s=1;s<r;s++){const r=e[2*(t+s-1)],o=e[2*(t+s-1)+1];i+=(e[2*(t+s)]-r)*(e[2*(t+s)+1]+o)}return s?i>0:i<0},E=({coords:e,lengths:t},r)=>{const s=[];for(let i=0,o=0;i<t.length;o+=t[i],i+=1){const n=o,a=[];for(;i<t.length-1&&A(e,o+t[i],t[i+1],r);i+=1,o+=t[i])a.push(o+t[i]-n);const c=e.slice(2*n,2*(o+t[i])),f=h(c,a,2);for(const e of f)s.push(e+n)}return s};class R{constructor(e,t,r,s=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=r,this.isMapSpace=s}static fromRect({x:e,y:t,width:r,height:s}){const i=e,o=t,n=i+r,a=o+s;return R.fromScreenExtent({xmin:i,ymin:o,xmax:n,ymax:a})}static fromPath(e){const t=p(new l,e.path,!1,!1),r=t.coords,s=new Uint32Array(E(t,!0)),i=new Uint32Array(r.length/2);for(let e=0;e<i.length;e++)i[e]=u(Math.floor(r[2*e]),Math.floor(r[2*e+1]));return new R({geometry:i},s,_.TRIANGLES)}static fromGeometry(e,t){const r=t.geometry.type;switch(r){case"polygon":return R.fromPolygon(e,t.geometry);case"extent":return R.fromMapExtent(e,t.geometry);default:return I.error(new o("mapview-bad-type",`Unable to create a mesh from type ${r}`,t)),R.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const r=d(new l,t,!1,!1),s=r.coords,i=new Uint32Array(E(r,!1)),o=new Uint32Array(s.length/2),n=m(),a=m();for(let t=0;t<o.length;t++)f(n,s[2*t],s[2*t+1]),e.toScreen(a,n),o[t]=u(Math.floor(a[0]),Math.floor(a[1]));return new R({geometry:o},i,_.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:r,ymax:s}){const i={geometry:new Uint32Array([u(e,r),u(t,r),u(e,s),u(e,s),u(t,r),u(t,s)])},o=new Uint32Array([0,1,2,3,4,5]);return new R(i,o,_.TRIANGLES)}static fromMapExtent(e,t){const[r,s]=e.toScreen([0,0],[t.xmin,t.ymin]),[i,o]=e.toScreen([0,0],[t.xmax,t.ymax]),n={geometry:new Uint32Array([u(r,s),u(i,s),u(r,o),u(r,o),u(i,s),u(i,o)])},a=new Uint32Array([0,1,2,3,4,5]);return new R(n,a,_.TRIANGLES)}destroy(){e(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const t in this._cache.vertexBuffers)e(this._cache.vertexBuffers[t])&&this._cache.vertexBuffers[t].dispose()}get elementType(){return(e=>{switch(this.indices.BYTES_PER_ELEMENT){case 1:return w.UNSIGNED_BYTE;case 2:return w.UNSIGNED_SHORT;case 4:return w.UNSIGNED_INT;default:throw new o("Cannot get DataType of array")}})()}getIndexBuffer(e,t=x.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=g.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=x.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((r,s)=>({...r,[s]:g.createVertex(e,t,this.vertices[s])})),{})),this._cache.vertexBuffers}}const B=n.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),L=e=>parseFloat(e)/100;class T extends c{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=a((()=>t.version),(()=>this._invalidate())),this.ready()}static fromClipArea(e,t){return new T(e,t)}_destroyGL(){e(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),e(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,r,s,i){const[o,n]=r.size;if("geometry"!==this._clip.type&&this._lastWidth===o&&this._lastHeight===n||(this._lastWidth=o,this._lastHeight=n,this._destroyGL()),t(this._cache.vao)){const t=this._createMesh(r,this._clip),o=t.getIndexBuffer(e),n=t.getVertexBuffers(e);this._cache.mesh=t,this._cache.vao=new y(e,s,i,n,o)}return this._cache.vao}_createTransforms(){return{dvs:r()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[r,s]=e.size,i="string"==typeof t.left?L(t.left)*r:t.left,o="string"==typeof t.right?L(t.right)*r:t.right,n="string"==typeof t.top?L(t.top)*s:t.top,a="string"==typeof t.bottom?L(t.bottom)*s:t.bottom,c=i,h=n;return{x:c,y:h,width:Math.max(r-o-c,0),height:Math.max(s-a-h,0)}}_createMesh(e,t){switch(t.type){case"rect":return R.fromRect(this._createScreenRect(e,t));case"path":return R.fromPath(t);case"geometry":return R.fromGeometry(e,t);default:return B.error(new o("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),R.fromRect({x:0,y:0,width:1,height:1})}}}class j extends i{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}_createTransforms(){return{dvs:r()}}doRender(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:s,profiler:i,drawPhase:o}=t,n=o===v.LABEL||o===v.HIGHLIGHT?1:s*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,n),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,n),i.recordContainerEnd()}renderChildren(e){t(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this.children)t.beforeRender(e);for(const t of this._renderPasses)try{t.render(e)}catch(e){}for(const t of this.children)t.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[s.clip],target:()=>this._clippingInfos,drawPhase:v.MAP|v.LABEL|v.LABEL_ALPHA|v.DEBUG|v.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(e(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const t=this._clips;e(t)&&t.length&&(this._clippingInfos=t.items.map((e=>T.fromClipArea(this.stage,e)))),this.requestRender()}}export{j as W};
