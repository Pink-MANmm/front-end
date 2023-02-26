/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{r as s}from"../chunks/reader.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";var a;let n=a=class extends e{constructor(t){super(t),this.type="sun",this.date=null,this.directShadowsEnabled=!1,this.displayUTCOffset=null}readDate(t,e){return null!=e.datetime&&new Date(e.datetime)||null}writeDate(t,e,r){e[r]=t.getTime()}readDirectShadowsEnabled(t,e){return!!e.directShadows}writedirectShadowsEnabled(t,e,r){t&&(e[r]=t)}writeDisplayUTCOffset(t,e){null!=t&&(e.displayUTCOffset=t)}clone(){return new a(this.cloneConstructProperties())}cloneConstructProperties(){const t={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};return null!=this.date&&(t.date=new Date(this.date.getTime())),t}};t([r({readOnly:!0,type:["sun"],json:{write:!0}})],n.prototype,"type",void 0),t([r({type:Date,json:{type:Number,write:{target:"datetime"}}})],n.prototype,"date",void 0),t([s("date",["datetime"])],n.prototype,"readDate",null),t([i("date")],n.prototype,"writeDate",null),t([r({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],n.prototype,"directShadowsEnabled",void 0),t([s("directShadowsEnabled",["directShadows"])],n.prototype,"readDirectShadowsEnabled",null),t([i("directShadowsEnabled")],n.prototype,"writedirectShadowsEnabled",null),t([r({type:Number,json:{write:!0}})],n.prototype,"displayUTCOffset",void 0),t([i("displayUTCOffset")],n.prototype,"writeDisplayUTCOffset",null),n=a=t([o("esri.webscene.SunLighting")],n);const p=n;export{p as default};
