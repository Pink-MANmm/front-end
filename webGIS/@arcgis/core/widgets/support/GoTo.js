/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";const t=t=>{let e=class extends t{constructor(...o){super(...o),this.goToOverride=null,this.view=null}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return o([r()],e.prototype,"goToOverride",void 0),o([r()],e.prototype,"view",void 0),e=o([s("esri.widgets.support.GoTo")],e),e};export{t as GoToMixin};