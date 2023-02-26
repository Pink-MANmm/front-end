// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/Handles ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/persistable ./Layer ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/commonProperties ./support/I3SLayerDefinitions ./support/SceneModifications ../chunks/persistableUrlUtils".split(" "),
function(h,d,l,u,m,b,v,q,e,I,J,K,w,x,y,z,A,B,C,D,E,n,F,k,r,G){b=function(t){function p(...a){a=t.call(this,...a)||this;a._handles=new u;a.geometryType="mesh";a.operationalLayerType="IntegratedMeshLayer";a.type="integrated-mesh";a.nodePages=null;a.materialDefinitions=null;a.textureSetDefinitions=null;a.geometryDefinitions=null;a.serviceUpdateTimeStamp=null;a.profile="mesh-pyramids";a.modifications=null;a._modificationsSource=null;a.elevationInfo=null;a.path=null;return a}h._inheritsLoose(p,t);var f=
p.prototype;f.destroy=function(){this._handles.destroy()};f.initialize=function(){this._handles.add(q.on(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,q.sync))};f.normalizeCtorArgs=function(a,c){return"string"===typeof a?{url:a,...c}:a};f.readModifications=function(a,c,g){this._modificationsSource={url:G.fromJSON(a,g),context:g}};f.load=function(){var a=h._asyncToGenerator(function*(c){this.addResolvingPromise(this._doLoad(c));return this});return function(c){return a.apply(this,
arguments)}}();f._doLoad=function(){var a=h._asyncToGenerator(function*(c){const g=m.get(c,"signal");try{yield this.loadFromPortal({supportedTypes:["Scene Service"]},c)}catch(H){v.throwIfAbortError(H)}yield this._fetchService(g);m.isSome(this._modificationsSource)&&(c=yield r.fromUrl(this._modificationsSource.url,this.spatialReference,c),this.setAtOrigin("modifications",c,this._modificationsSource.context.origin),this._modificationsSource=null);yield this._fetchIndexAndUpdateExtent(this.nodePages,
g)});return function(c){return a.apply(this,arguments)}}();f.beforeSave=function(){if(!m.isNone(this._modificationsSource))return this.load().then(()=>{},()=>{})};f.saveAs=function(){var a=h._asyncToGenerator(function*(c,g){return this._debouncedSaveOperations(n.SaveOperationType.SAVE_AS,{...g,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},c)});return function(c,g){return a.apply(this,arguments)}}();f.save=function(){var a=h._asyncToGenerator(function*(){return this._debouncedSaveOperations(n.SaveOperationType.SAVE,
{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"})});return function(){return a.apply(this,arguments)}}();f.validateLayer=function(a){if(a.layerType&&"IntegratedMesh"!==a.layerType)throw new l("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,
supportedVersions:"1.x"});if(1<this.version.major)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});};f._getTypeKeywords=function(){return["IntegratedMeshLayer"]};return p}(n.SceneService(B.ArcGISService(C.OperationalLayer(D.PortalLayer(E.ScaleRangeLayer(b.MultiOriginJSONMixin(A.APIKeyMixin(z))))))));d.__decorate([e.property({type:String,readOnly:!0})],b.prototype,"geometryType",void 0);d.__decorate([e.property({type:["show",
"hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property({type:["IntegratedMeshLayer"]})],b.prototype,"operationalLayerType",void 0);d.__decorate([e.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);d.__decorate([e.property({type:k.I3SNodePageDefinition,readOnly:!0})],b.prototype,"nodePages",void 0);d.__decorate([e.property({type:[k.I3SMaterialDefinition],readOnly:!0})],b.prototype,"materialDefinitions",void 0);d.__decorate([e.property({type:[k.I3STextureSetDefinition],
readOnly:!0})],b.prototype,"textureSetDefinitions",void 0);d.__decorate([e.property({type:[k.I3SGeometryDefinition],readOnly:!0})],b.prototype,"geometryDefinitions",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"serviceUpdateTimeStamp",void 0);d.__decorate([e.property({type:r}),y.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],b.prototype,"modifications",void 0);d.__decorate([w.reader(["web-scene","portal-item"],"modifications")],b.prototype,
"readModifications",null);d.__decorate([e.property(F.elevationInfo)],b.prototype,"elevationInfo",void 0);d.__decorate([e.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0);return b=d.__decorate([x.subclass("esri.layers.IntegratedMeshLayer")],b)});