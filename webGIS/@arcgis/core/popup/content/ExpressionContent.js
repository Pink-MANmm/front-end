/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import t from"../ElementExpressionInfo.js";import e from"./Content.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";var p;let n=p=class extends e{constructor(s){super(s),this.expressionInfo=null,this.type="expression"}clone(){return new p({expressionInfo:this.expressionInfo?.clone()})}};s([o({type:t,json:{write:!0}})],n.prototype,"expressionInfo",void 0),s([o({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=p=s([r("esri.popup.content.ExpressionContent")],n);const i=n;export{i as default};
