/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import o from"../core/Error.js";import{M as t}from"../chunks/MultiOriginJSONSupport.js";import{schedule as s}from"../core/scheduling.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"./Layer.js";import{PortalLayer as m}from"./mixins/PortalLayer.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Evented.js";import"../chunks/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";let n=class extends(m(t(p))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,t)=>{s((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),t(new o("layer:unknown-layer-type",s,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};r([e({readOnly:!0})],n.prototype,"resourceInfo",void 0),r([e({type:["show","hide"]})],n.prototype,"listMode",void 0),r([e({json:{read:!1},readOnly:!0,value:"unknown"})],n.prototype,"type",void 0),n=r([i("esri.layers.UnknownLayer")],n);const c=n;export{c as default};
