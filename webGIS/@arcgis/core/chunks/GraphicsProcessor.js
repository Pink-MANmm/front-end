/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Graphic.js";import i from"../core/Collection.js";import{HandleOwner as s}from"../core/HandleOwner.js";import{m as r}from"./handleUtils.js";import{i as a,d as n,a as o}from"./maybe.js";import{isAbortError as l}from"../core/promiseUtils.js";import{watch as p,sync as h,syncAndInitial as c}from"../core/reactiveUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{d as y}from"./diffUtils.js";import g from"../layers/Layer.js";import{f as m,r as f}from"./CameraSpace.glsl.js";import{k as b,l as C}from"./ElevationQuery.js";import S from"../rest/support/Query.js";import{a8 as j,a9 as V}from"./lineUtils.js";import{G as v,a as w}from"./Graphics3DScaleVisibility.js";import{G,a as E,b as x}from"./Graphics3DObjectStates.js";import{U as O,O as A}from"./basicInterfaces.js";let _=class extends s{constructor(t){super(t),this.type="graphics-3d",this.graphicsCore=null,this.elevationAlignment=new G,this.drapeSourceType=j.Features,this._suspendResumeExtent=null}normalizeCtorArgs(t){const e={...t,scaleVisibility:null,frustumVisibility:null};return delete e.scaleVisibilityEnabled,delete e.frustumVisibilityEnabled,t.scaleVisibilityEnabled&&(e.scaleVisibility=new v),t.frustumVisibilityEnabled&&(e.frustumVisibility=new E),e}initialize(){const t=new w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:O.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);const{layer:e,scaleVisibility:i}=this;if(a(i)&&"effectiveScaleRange"in e){const t=e;this.updatingHandles.add((()=>t.effectiveScaleRange),(()=>i.layerMinMaxScaleChangeHandler()))}if("fullOpacity"in this.owner){const t=this.owner;this.updatingHandles.add((()=>t.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this.updatingHandles.add((()=>t.elevationInfo),((t,e)=>{y(t,e)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}}async setup(){const t=(t,e,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i);if(this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),a(this.scaleVisibility)&&"effectiveScaleRange"in this.layer){const e=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,e)}a(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new x(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(l(t))return;throw t}this.destroyed||(this.handles.add(p((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),h)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",n(this.elevationAlignment)),this._set("scaleVisibility",n(this.scaleVisibility)),this._set("frustumVisibility",n(this.frustumVisibility)),this._set("objectStates",n(this.objectStates)),this._set("graphicsCore",n(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibilitySuspended(){return!(!a(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return!(!a(this.frustumVisibility)||!this.frustumVisibility.suspended)}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||a(this.scaleVisibility)&&this.scaleVisibility.updating||a(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}notifyGraphicVisibilityChanged(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}getRenderingInfo(t,e,i){const s=b(t,{renderer:e,arcade:i});if(a(s)&&s.color){const t=s.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return s}getRenderingInfoAsync(t,e,i,s){return C(t,{renderer:e,arcade:i,...s})}getHit(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof g?this.layer:null,i=m(e,t);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(A.MaskOccludee,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof S)return P;if("number"==typeof t)return this.highlight([t]);if(t instanceof e)return this.highlight([t]);if(t instanceof i&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof e){const e=t.map((t=>t.uid)),{set:i,handle:s}=this.objectStates.acquireSet(A.Highlight,null);return this.objectStates.setUids(i,e),s}if("number"==typeof t[0]){const e=t,{set:i,handle:s}=this.objectStates.acquireSet(A.Highlight,null);return this.objectStates.setObjectIds(i,e),s}}return P}_setupSuspendResumeExtent(){const{scaleVisibility:t,frustumVisibility:e}=this;if(o(t)&&o(e))return;const i=({computedExtent:i,extentPadding:s})=>{this._suspendResumeExtent=f(i,this._suspendResumeExtent,V,s),a(t)&&t.setExtent(this._suspendResumeExtent),a(e)&&e.setExtent(this._suspendResumeExtent)};this.handles.add(p((()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding})),(t=>i(t)),c))}_updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};t([u()],_.prototype,"type",void 0),t([u({constructOnly:!0})],_.prototype,"owner",void 0),t([u()],_.prototype,"layer",null),t([u()],_.prototype,"view",null),t([u({constructOnly:!0})],_.prototype,"graphicsCore",void 0),t([u({constructOnly:!0})],_.prototype,"scaleVisibility",void 0),t([u({constructOnly:!0})],_.prototype,"frustumVisibility",void 0),t([u({readOnly:!0})],_.prototype,"elevationAlignment",void 0),t([u({readOnly:!0})],_.prototype,"objectStates",void 0),t([u({readOnly:!0})],_.prototype,"scaleVisibilitySuspended",null),t([u({readOnly:!0})],_.prototype,"frustumVisibilitySuspended",null),t([u()],_.prototype,"suspended",null),t([u({readOnly:!0})],_.prototype,"updating",null),t([u()],_.prototype,"loadedGraphics",null),t([u()],_.prototype,"fullOpacity",null),t([u()],_.prototype,"slicePlaneEnabled",null),t([u()],_.prototype,"drapeSourceType",void 0),t([u()],_.prototype,"updatePolicy",null),_=t([d("esri.views.3d.layers.graphics.GraphicsProcessor")],_);const P=r();export{_ as G};