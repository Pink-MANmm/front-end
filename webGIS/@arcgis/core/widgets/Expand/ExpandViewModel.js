/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import s from"../../core/Handles.js";import{on as i,when as o,pausable as r}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";let a=class extends e{constructor(t){super(t),this._viewpointHandle=null,this._handles=new s,this.group=null}initialize(){this._handles.add(i((()=>this.view?.ui),"expand",(t=>{const{target:e}=t;e&&e!==this&&e.expanded&&e.group&&e.group===this.group&&this._collapse()})))}destroy(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null}set autoCollapse(t){this._set("autoCollapse",t),this._watchViewpoint()}set expanded(t){const e=!!t;this._set("expanded",e);const s=this.get("view.ui");s&&s.emit("expand",{target:this}),this._viewpointHandleChange(e)}get state(){return this.get("view.ready")?"ready":"disabled"}set view(t){this._get("view")!==t&&(this._set("view",t),t&&o((()=>t.ready),(()=>{this.view===t&&this._watchViewpoint()}),{once:!0,initial:!0}))}_viewpointHandleChange(t){this._viewpointHandle&&(t?o((()=>this.view.stationary),(()=>this._viewpointHandle.resume()),{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const t="viewpoint";this._handles.remove(t),this._viewpointHandle=null;const{autoCollapse:e,view:s}=this;if(s&&e){const e=r((()=>"3d"===s.type?s.camera:s.viewpoint),(()=>this._collapse()));this._handles.add(e,t),this._viewpointHandle=e}}_collapse(){this.expanded=!1}};t([n({value:!1})],a.prototype,"autoCollapse",null),t([n({value:!1})],a.prototype,"expanded",null),t([n()],a.prototype,"group",void 0),t([n({readOnly:!0})],a.prototype,"state",null),t([n({value:null})],a.prototype,"view",null),a=t([p("esri.widgets.Expand.ExpandViewModel")],a);const l=a;export{l as default};
