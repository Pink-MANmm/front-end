/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";const t=t=>{let s=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;var c,t;a&&"effectiveScaleRange"in a&&(c=e,t=a.effectiveScaleRange,c.minScale=c.minScale>0?t.minScale>0?Math.min(c.minScale,t.minScale):c.minScale:t.minScale,c.maxScale=c.maxScale>0?t.maxScale>0?Math.max(c.maxScale,t.maxScale):c.maxScale:t.maxScale);const s=this._get("effectiveScaleRange");return s&&s.minScale===e.minScale&&s.maxScale===e.maxScale?s:e}};return e([a({type:Number,nonNullable:!0,json:{write:!0}})],s.prototype,"minScale",void 0),e([a({type:Number,nonNullable:!0,json:{write:!0}})],s.prototype,"maxScale",void 0),e([a({readOnly:!0})],s.prototype,"effectiveScaleRange",null),s=e([c("esri.layers.mixins.ScaleRangeLayer")],s),s};export{t as ScaleRangeLayer};
