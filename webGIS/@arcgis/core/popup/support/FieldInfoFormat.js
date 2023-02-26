/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{d as r}from"../../chunks/date.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{I as i}from"../../chunks/ensureType.js";import{e}from"../../chunks/enumeration.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{f as m,c as p,a as n,b as c}from"../../chunks/number2.js";import"../../chunks/jsonMap.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/locale.js";var u;let h=u=class extends s{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new u({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?m(t,{...p(this.dateFormat),...this.dateTimeFormatOptions}):n(t,c(this))}formatRasterPixelValue(t){let r,s;return t.trim().includes(",")?(r=",",s=r+" ",this._formatDelimitedString(t,r,s,this)):t.trim().includes(";")?(r=";",s=r+" ",this._formatDelimitedString(t,r,s,this)):t.trim().includes(" ")?(r=s=" ",this._formatDelimitedString(t,r,s,this)):this.format(Number(t))}_formatDelimitedString(t,r,s,o){return t&&r&&s&&o?t.trim().split(r).map((t=>this.format(Number(t)))).join(s):t}};t([e(r)],h.prototype,"dateFormat",void 0),t([o({type:Object,json:{read:!1}})],h.prototype,"dateTimeFormatOptions",void 0),t([o({type:Boolean,json:{write:!0}})],h.prototype,"digitSeparator",void 0),t([o({type:i,json:{write:!0}})],h.prototype,"places",void 0),h=u=t([a("esri.popup.support.FieldInfoFormat")],h);const l=h;export{l as default};
