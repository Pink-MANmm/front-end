// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Error ../../../../core/Handles ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../rest/support/FeatureSet ../../../../rest/support/Query".split(" "),
function(d,g,f,q,n,r,t,h,A,B,C,u,v,w,x,y){const z=w.QueryEngine;d.I3SQueryEngine=function(p){function l(b){b=p.call(this,b)||this;b._dataQueryEngineInstance=null;b._handles=new r;return b}g._inheritsLoose(l,p);var e=l.prototype;e.initialize=function(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))};e.destroy=function(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null);this._handles&&
(this._handles.destroy(),this._handles=null);this._set("layerView",null)};e.executeQueryForCount=function(){var b=g._asyncToGenerator(function*(a,c){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(a),c)});return function(a,c){return b.apply(this,arguments)}}();e.executeQueryForExtent=function(){var b=g._asyncToGenerator(function*(a,c){const {count:k,extent:m}=yield this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),c);a=v.fromJSON(m);return{count:k,extent:a}});
return function(a,c){return b.apply(this,arguments)}}();e.executeQueryForIds=function(){var b=g._asyncToGenerator(function*(a,c){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),c)});return function(a,c){return b.apply(this,arguments)}}();e.executeQuery=function(){var b=g._asyncToGenerator(function*(a,c){a=this._ensureQueryJSON(a);if(a.returnGeometry)throw new n("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(a.returnCentroid)throw new n("feature-store:unsupported-query",
"returnCentroid is not yet supported for mesh scene layer queries");c=yield this.dataQueryEngine.executeQuery(a,c);c=x.fromJSON(c);c.features.forEach(k=>{k.geometry=null});return c});return function(a,c){return b.apply(this,arguments)}}();e._ensureQueryJSON=function(b){return t.isNone(b)?this.defaultQueryJSON:b.toJSON()};e._ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const b=this.layer.objectIdField||"OBJECTID",a=this.layer.fields.map(m=>
m.toJSON()),c=this.layerView.view.resourceController.scheduler,k=this.spatialReference.toJSON();return this._dataQueryEngineInstance=new z({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:a,timeInfo:null,spatialReference:k,objectIdField:b,featureStore:this.spatialIndex,scheduler:c,priority:this.priority})};g._createClass(l,[{key:"defaultQueryJSON",get:function(){return(new y({outSpatialReference:this.spatialReference})).toJSON()}},{key:"dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}}]);
return l}(q);f.__decorate([h.property({constructOnly:!0})],d.I3SQueryEngine.prototype,"layerView",void 0);f.__decorate([h.property({constructOnly:!0})],d.I3SQueryEngine.prototype,"priority",void 0);f.__decorate([h.property({constructOnly:!0})],d.I3SQueryEngine.prototype,"spatialIndex",void 0);f.__decorate([h.property({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],d.I3SQueryEngine.prototype,"spatialReference",void 0);f.__decorate([h.property({readOnly:!0,aliasOf:"layerView.i3slayer"})],
d.I3SQueryEngine.prototype,"layer",void 0);f.__decorate([h.property({readOnly:!0})],d.I3SQueryEngine.prototype,"defaultQueryJSON",null);d.I3SQueryEngine=f.__decorate([u.subclass("esri.views.3d.layers.i3s.I3SQueryEngine")],d.I3SQueryEngine);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});