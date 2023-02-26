/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";let p=class extends t{constructor(){super(...arguments),this.north=null,this.up=null,this.spatialReference=null}};r([o({type:Number,json:{write:!0}})],p.prototype,"north",void 0),r([o({type:Number,json:{write:!0}})],p.prototype,"up",void 0),r([o({type:e,json:{write:!0}})],p.prototype,"spatialReference",void 0),p=r([s("esri.rest.support.ImageAngleResult")],p);const i=p;export{i as default};
