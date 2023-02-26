/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{A as s}from"../chunks/Analysis.js";import e from"./LineOfSightAnalysisObserver.js";import o from"./LineOfSightAnalysisTarget.js";import r from"../core/Collection.js";import{c as i,r as n}from"../chunks/collectionUtils.js";import{a as p,i as m,f as c,u as l}from"../chunks/maybe.js";import{watch as a,syncAndInitial as u}from"../core/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{projectOrLoad as g}from"../geometry/projection.js";import{f as y,e as k,t as d}from"../chunks/aaBoundingBox.js";import{g as f}from"../chunks/elevationInfoUtils.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../core/Clonable.js";import"../chunks/Identifiable.js";import"../core/JSONSupport.js";import"../chunks/featureReferenceUtils.js";import"../chunks/persistable.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../core/urlUtils.js";import"../chunks/uuid.js";import"../chunks/persistableUrlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/ElevationInfo.js";import"../chunks/jsonMap.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";const b=r.ofType(o);let v=class extends s{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own(a((()=>this._computeExtent()),(t=>{(p(t)||p(t.pending))&&this._set("extent",m(t)?t.extent:null)}),u))}get targets(){return this._get("targets")||new b}set targets(t){this._set("targets",n(t,this.targets,b))}get spatialReference(){return m(this.observer)&&m(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[c(this.observer,(t=>t.position))]}async waitComputeExtent(){const t=this._computeExtent();return m(t)?l(t.pending):null}_computeExtent(){const t=this.spatialReference;if(p(this.observer)||p(this.observer.position)||p(t))return null;const s=t=>"absolute-height"===f(t.position,t.elevationInfo),e=this.observer.position,o=y(e.x,e.y,e.z,e.x,e.y,e.z);for(const s of this.targets)if(m(s.position)){const e=g(s.position,t);if(m(e.pending))return{pending:e.pending,extent:null};if(m(e.geometry)){const{x:t,y:s,z:r}=e.geometry;k(o,[t,s,r])}}const r=d(o,t);return s(this.observer)&&this.targets.every(s)||(r.zmin=null,r.zmax=null),{pending:null,extent:r}}clear(){this.observer=null,this.targets.removeAll()}};t([h({type:["line-of-sight"]})],v.prototype,"type",void 0),t([h({type:e,json:{read:!0,write:!0}})],v.prototype,"observer",void 0),t([h({cast:i,type:b,nonNullable:!0,json:{read:!0,write:!0}})],v.prototype,"targets",null),t([h({value:null,readOnly:!0})],v.prototype,"extent",void 0),t([h({readOnly:!0})],v.prototype,"spatialReference",null),t([h({readOnly:!0})],v.prototype,"requiredPropertiesForEditing",null),t([h({readOnly:!0})],v.prototype,"nonEditableMessage",void 0),v=t([j("esri.analysis.LineOfSightAnalysis")],v);const x=v;export{x as default};
