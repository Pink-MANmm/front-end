// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Collection ../core/Error ../core/HandleOwner ../core/Handles ../core/has ../core/jsonMap ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/reactiveUtils ../core/sql ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/extensions/serializableProperty/reader ../form/FormTemplate ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./Layer ./graphics/sources/MemorySource ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/FeatureIndex ./support/featureReductionUtils ./support/fieldProperties ./support/fieldUtils ./support/GeometryFieldsInfo ./support/LayerFloorInfo ./support/Relationship ./support/SubtypeSublayer ./support/TimeInfo ./support/versionUtils ./support/source/DataLayerSource ../renderers/support/styleUtils ../rest/support/AttachmentQuery ../rest/support/FeatureSet ../rest/support/Query ../rest/support/RelationshipQuery".split(" "),
function(N,y,f,D,Na,Oa,Pa,Qa,Ra,Y,Z,O,P,aa,Q,t,p,e,ba,ca,da,ea,A,fa,H,R,S,ha,I,g,Sa,ia,n,ja,E,ka,la,ma,na,T,oa,U,pa,qa,ra,sa,ta,ua,va,wa,z,u,V,xa,ya,J,za,Aa,Ba,F,Ca,Da,Ea,Fa,Ga,Ha,B,W){function k(m,q,d){return!(m&&m.hasOwnProperty(q)?!m[q]:!d)}function G(m,q,d){return m&&m.hasOwnProperty(q)?m[q]:d}function Ia(m){var q;m=null==m?void 0:null==(q=m.supportedSpatialAggregationStatistics)?void 0:q.map(d=>d.toLowerCase());return{envelope:!(null==m||!m.includes("envelopeaggregate")),centroid:!(null==m||
!m.includes("centroidaggregate")),convexHull:!(null==m||!m.includes("convexhullaggregate"))}}function C(m,q){var d;m=null==m?void 0:null==(d=m.supportedOperationsWithCacheHint)?void 0:d.map(b=>b.toLowerCase());return!(null==m||!m.includes(q.toLowerCase()))}function K(m,q,d){m=!(null==d||!d.writeLayerSchema);return{enabled:m,ignoreOrigin:m}}const L=new da.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),
Ja={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},X=ea.getLogger("esri.layers.SubtypeGroupLayer");D=ya.defineFieldProperties();e=function(m){function q(...b){var a=m.call(this,...b)||this;a._handles=new ba;a.capabilities=null;a.charts=null;a.copyright=null;a.displayField=null;a.definitionExpression=null;a.dynamicDataSource=null;a.editFieldsInfo=null;a.editingEnabled=!0;a.editingInfo=null;a.elevationInfo=null;a.featureReduction=
null;a.fields=null;a.fieldsIndex=null;a.floorInfo=null;a.formTemplate=null;a.fullExtent=null;a.gdbVersion=null;a.geometryFieldsInfo=null;a.geometryType=null;a.hasM=void 0;a.hasZ=void 0;a.heightModelInfo=null;a.historicMoment=null;a.isTable=!1;a.layerId=void 0;a.legendEnabled=!0;a.minScale=0;a.maxScale=0;a.globalIdField=null;a.objectIdField=null;a.outFields=null;a.path=null;a.relationships=null;a.sourceJSON=null;a.returnM=void 0;a.returnZ=void 0;a.screenSizePerspectiveEnabled=!0;a.serviceDefinitionExpression=
null;a.spatialReference=T.WGS84;a.subtypeField=null;a.sublayers=new (t.ofType(F));a.timeInfo=null;a.title=null;a.sublayerTitleMode="item-title";a.trackIdField=null;a.type="subtype-group";a.typeIdField=null;a.indexes=new (t.ofType(V.FeatureIndex));a.userIsAdmin=!1;a.version=void 0;a.visible=!0;a.own(S.watch(()=>a.sublayers,(c,h)=>a._handleSublayersChange(c,h),S.sync));return a}y._inheritsLoose(q,m);var d=q.prototype;d.destroy=function(){var b;null==(b=this.source)?void 0:b.destroy();this._handles=
A.destroyMaybe(this._handles)};d.normalizeCtorArgs=function(b,a){return"string"===typeof b?{url:b,...a}:b};d.load=function(b){var a=this;const c=A.isSome(b)?b.signal:null;if(this.portalItem&&this.portalItem.loaded&&this.source)this.addResolvingPromise(this.createGraphicsSource(c).then(l=>this._initLayerProperties(l)));else{var h=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},b).catch(R.throwIfAbortError).then(y._asyncToGenerator(function*(){if(a.url&&null==a.layerId&&
/FeatureServer|MapServer\/*$/i.test(a.url)){const l=yield a._fetchFirstLayerId(c);null!=l&&(a.layerId=l)}if(!a.url&&!a._hasMemorySource())throw new p("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return a._initLayerProperties(yield a.createGraphicsSource(c))})).then(()=>this.finishLoadEditablePortalLayer(b));this.addResolvingPromise(h);return Promise.resolve(this)}};d.readCapabilities=function(b,a){a=a.layerDefinition||a;return{analytics:this._readAnalyticsCapabilities(a),
attachment:this._readAttachmentCapabilities(a),data:this._readDataCapabilities(a),metadata:this._readMetadataCapabilities(a),operations:this._readOperationsCapabilities(a.capabilities||b,a),query:this._readQueryCapabilities(a),queryRelated:this._readQueryRelatedCapabilities(a),queryTopFeatures:this._readQueryTopFeaturesCapabilities(a),editing:this._readEditingCapabilities(a)}};d.readEditingEnabled=function(b,a){return this._readEditingEnabled(a,!1)};d.readEditingEnabledFromWebMap=function(b,a,c){return this._readEditingEnabled(a,
!0,c)};d.writeEditingEnabled=function(b,a){this._writeEditingEnabled(b,a,!1)};d.writeEditingEnabledToWebMap=function(b,a,c,h){this._writeEditingEnabled(b,a,!0,h)};d.readEditingInfo=function(b,a){({editingInfo:b}=a);return b?{lastEditDate:null!=b.lastEditDate?new Date(b.lastEditDate):null}:null};d.readIsTable=function(b,a){a=a&&a.layerDefinition||a;return"Table"===a.type||!a.geometryType};d.writeIsTable=function(b,a,c,h){null!=h&&h.writeLayerSchema&&H.setDeepValue(c,b?"Table":"Feature Layer",a)};d.readMinScale=
function(b,a){return a.effectiveMinScale||b||0};d.readMaxScale=function(b,a){return a.effectiveMaxScale||b||0};d.readGlobalIdFieldFromService=function(b,a){a=a.layerDefinition||a;if(a.globalIdField)return a.globalIdField;if(a.fields)for(const c of a.fields)if("esriFieldTypeGlobalID"===c.type)return c.name};d.readObjectIdFieldFromService=function(b,a){a=a.layerDefinition||a;if(a.objectIdField)return a.objectIdField;if(a.fields)for(const c of a.fields)if("esriFieldTypeOID"===c.type)return c.name};d.readRenderer=
function(b,a,c){a=a.layerDefinition||a;if(b=a.drawingInfo&&a.drawingInfo.renderer||void 0)return(b=O.read(b,a,c)||void 0)||X.error("Failed to create renderer",{rendererDefinition:a.drawingInfo.renderer,layer:this,context:c}),b;if(a.defaultSymbol)return a.types&&a.types.length?new Z({defaultSymbol:M(a.defaultSymbol,a,c),field:a.typeIdField,uniqueValueInfos:a.types.map(h=>({id:h.id,symbol:M(h.symbol,h,c)}))}):new Y({symbol:M(a.defaultSymbol,a,c)})};d.castSource=function(b){return b?Array.isArray(b)||
b instanceof t?new U.MemorySource({layer:this,items:b}):b:null};d.readSource=function(b,a){b=Ha.fromJSON(a.featureSet);return new U.MemorySource({layer:this,items:b&&b.features||[]})};d.readServiceDefinitionExpression=function(b,a){return a.definitionQuery||a.definitionExpression};d.readTitle=function(b,a){b=a.layerDefinition&&a.layerDefinition.name||a.name;a=a.title||a.layerDefinition&&a.layerDefinition.title;if(b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?
z.titleFromUrlAndName(this.url,b):b;if(!b&&this.url){const c=z.parse(this.url);A.isSome(c)&&(b=c.title)}if(!b)return;"item-title-and-service-name"===this.sublayerTitleMode&&a&&a!==b&&(b=a+" - "+b);return z.cleanTitle(b)}if("item-title"===this.sublayerTitleMode&&a)return a};d.readTitleFromWebMap=function(b,a){return a.title||a.layerDefinition&&a.layerDefinition.name};d.readTypeIdField=function(b,a){a=a.layerDefinition||a;let c=a.typeIdField;c&&a.fields&&(c=c.toLowerCase(),b=a.fields.find(h=>h.name.toLowerCase()===
c))&&(c=b.name);return c};d.writeUrl=function(b,a,c,h){z.writeUrlWithLayerId(this,b,null,a,h)};d.readVersion=function(b,a){return a.currentVersion?a.currentVersion:a.hasOwnProperty("capabilities")||a.hasOwnProperty("drawingInfo")||a.hasOwnProperty("hasAttachments")||a.hasOwnProperty("htmlPopupType")||a.hasOwnProperty("relationships")||a.hasOwnProperty("timeInfo")||a.hasOwnProperty("typeIdField")||a.hasOwnProperty("types")?10:9.3};d.readVisible=function(b,a){if(a.layerDefinition&&null!=a.layerDefinition.defaultVisibility)return!!a.layerDefinition.defaultVisibility;
if(null!=a.visibility)return!!a.visibility};d.addAttachment=function(b,a){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("addAttachment"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support addAttachment capability");return this.source.addAttachment(b,a)})};d.updateAttachment=function(b,a,c){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("updateAttachment"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support updateAttachment capability");
return this.source.updateAttachment(b,a,c)})};d.applyEdits=function(){var b=y._asyncToGenerator(function*(a,c){const h=yield new Promise((l,r)=>N(["./graphics/editingSupport"],l,r));yield this.load();return h.applyEdits(this,this.source,a,c)});return function(a,c){return b.apply(this,arguments)}}();d.on=function(b,a){return m.prototype.on.call(this,b,a)};d.createGraphicsSource=function(){var b=y._asyncToGenerator(function*(a){if(this._hasMemorySource())return this.emit("graphics-source-create",{graphicsSource:this.source}),
this.source.load({signal:a});const c=yield new Promise((h,l)=>N(["./graphics/sources/FeatureLayerSource"],r=>h(Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}))),l));R.throwIfAborted(a);a=yield(new c.default({layer:this})).load({signal:a});this.emit("graphics-source-create",{graphicsSource:a});return a});return function(a){return b.apply(this,arguments)}}();d.createQuery=function(){const b=new B,a=this.get("capabilities.data"),c=this.get("capabilities.query"),
h=this.sublayers.map(v=>v.subtypeCode);b.dynamicDataSource=this.dynamicDataSource;b.gdbVersion=this.gdbVersion;b.historicMoment=this.historicMoment;b.returnGeometry=!0;c&&(b.compactGeometryEnabled=c.supportsCompactGeometry,b.defaultSpatialReferenceEnabled=c.supportsDefaultSpatialReference);a&&(a.supportsZ&&null!=this.returnZ&&(b.returnZ=this.returnZ),a.supportsM&&null!=this.returnM&&(b.returnM=this.returnM));b.outFields=["*"];b.where=`${this.subtypeField} IN (${h.join(",")})`;this.definitionExpression&&
(b.where+=` AND (${this.definitionExpression})`);const {timeOffset:l,timeExtent:r}=this;b.timeExtent=null!=l&&null!=r?r.offset(-l.value,l.unit):r||null;b.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null;return b};d.deleteAttachments=function(b,a){return this.load().then(()=>this._checkAttachmentSupport(b)).then(()=>{if(!("deleteAttachments"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support deleteAttachments capability");return this.source.deleteAttachments(b,
a)})};d.fetchRecomputedExtents=function(b){return this.load({signal:null==b?void 0:b.signal}).then(()=>{if(this.source.fetchRecomputedExtents)return this.source.fetchRecomputedExtents(b);throw new p("SubtypeGroupLayer","Layer source does not support fetchUpdates capability");})};d.getFieldDomain=function(b,a){return this._getLayerDomain(b)};d.getField=function(b){return this.fieldsIndex.get(b)};d.queryAttachments=function(b,a){b=Ga.from(b);return this.load().then(()=>{if(!this.get("capabilities.data.supportsAttachment"))throw new p("SubtypeGroupLayer",
"this layer doesn't support attachments");const {attachmentTypes:c,objectIds:h,globalIds:l,num:r,size:v,start:w,where:x}=b;if(!this.get("capabilities.operations.supportsQueryAttachments")){const Ka=c&&c.length,La=l&&l.length,Ma=v&&v.length;if(h&&1<h.length||Ka||La||Ma||r||w||x)throw new p("SubtypeGroupLayer","when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",b);}if(!(h&&h.length||x))throw new p("SubtypeGroupLayer","'objectIds' or 'where' are required to perform attachment query",
b);if(!("queryAttachments"in this.source))throw new p("SubtypeGroupLayer","Layer source does not support queryAttachments capability",b);return this.source.queryAttachments(b)})};d.queryFeatures=function(b,a){const c=B.from(b)||this.createQuery();b=A.unwrapOr(c.outFields,[]);b.includes(this.subtypeField)||(b.push(this.subtypeField),c.outFields=b);return this.load().then(()=>this.source.queryFeatures(c,a)).then(h=>{if(null!=h&&h.features)for(const l of h.features)l.layer=this._findSublayerForFeature(l),
l.sourceLayer=this;return h})};d._findSublayerForFeature=function(b){const a=this.fieldsIndex.get(this.subtypeField),c=b.attributes[a.name];return this.sublayers.find(h=>h.subtypeCode===c)};d.queryObjectIds=function(b,a){return this.load().then(()=>{if(this.source.queryObjectIds)return this.source.queryObjectIds(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryObjectIds capability");})};d.queryFeatureCount=function(b,a){return this.load().then(()=>
{if(this.source.queryFeatureCount)return this.source.queryFeatureCount(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryFeatureCount capability");})};d.queryExtent=function(b,a){return this.load().then(()=>{if(this.source.queryExtent)return this.source.queryExtent(B.from(b)||this.createQuery(),a);throw new p("SubtypeGroupLayer","Layer source does not support queryExtent capability");})};d.queryRelatedFeatures=function(b,a){return this.load().then(()=>
{if("queryRelatedFeatures"in this.source)return this.source.queryRelatedFeatures(W.from(b),a);throw new p("SubtypeGroupLayer","Layer source does not support queryRelatedFeatures capability");})};d.queryRelatedFeaturesCount=function(b,a){return this.load().then(()=>{if("queryRelatedFeaturesCount"in this.source)return this.source.queryRelatedFeaturesCount(W.from(b),a);throw new p("SubtypeGroupLayer","Layer source does not support queryRelatedFeaturesCount capability");})};d.read=function(b,a){const c=
b.featureCollection;if(c){const h=c.layers;h&&1===h.length&&(m.prototype.read.call(this,h[0],a),null!=c.showLegend&&m.prototype.read.call(this,{showLegend:c.showLegend},a))}m.prototype.read.call(this,b,a);a&&"service"===a.origin&&this.revert(["objectIdField","fields","timeInfo","spatialReference"],"service")};d.write=function(b,a){var c,h;a={...a,writeLayerSchema:null!=(c=null==(h=a)?void 0:h.writeLayerSchema)?c:this._hasMemorySource()};c=a.origin;h=a.layerContainerType;const l=a.messages;if(this.isTable){if("web-scene"===
c||"web-map"===c&&"tables"!==h)return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,{layer:this})),null;if(this._hasMemorySource())return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,{layer:this})),null}else if(this.loaded&&"web-map"===c&&"tables"===
h)return l&&l.push(new p("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,{layer:this})),null;return m.prototype.write.call(this,b,a)};d.serviceSupportsSpatialReference=function(b){return Da.serviceSupportsSpatialReference(this,b)};d._readEditingEnabled=function(b,a,c){var h;let l=null==(h=b.layerDefinition)?void 0:h.capabilities;if(l)return this._hasEditingCapability(l);l=b.capabilities;return a&&
"web-map"===(null==c?void 0:c.origin)&&!this._hasMemorySource()&&l?this._hasEditingCapability(l):!0};d._hasEditingCapability=function(b){return b.toLowerCase().split(",").map(a=>a.trim()).includes("editing")};d._writeEditingEnabled=function(b,a,c,h){if(!b){var l,r;b=null!=(l=this.capabilities)&&null!=(r=l.operations)&&r.supportsSync?"Query,Sync":"Query";H.setDeepValue("layerDefinition.capabilities",b,a);!c||null!=h&&h.writeLayerSchema||(a.capabilities=b)}};d._checkAttachmentSupport=function(b){const {attributes:a}=
b,{objectIdField:c}=this;if(!this.get("capabilities.data.supportsAttachment"))return Promise.reject(new p("SubtypeGroupLayer","this layer doesn't support attachments"));if(!b)return Promise.reject(new p("SubtypeGroupLayer","A feature is required to add/delete/update attachments"));if(!a)return Promise.reject(new p("SubtypeGroupLayer","'attributes' are required on a feature to query attachments"));if(!a[c])return Promise.reject(new p("SubtypeGroupLayer",`feature is missing the identifying attribute ${c}`))};
d._getLayerDomain=function(b){return(b=this.fieldsIndex.get(b))?b.domain:null};d._fetchFirstLayerId=function(b){return aa(this.url,{query:{f:"json",...this.customParameters},responseType:"json",signal:b}).then(a=>{if(a=a.data){if(Array.isArray(a.layers)&&0<a.layers.length)return a.layers[0].id;if(Array.isArray(a.tables)&&0<a.tables.length)return a.tables[0].id}})};d._initLayerProperties=function(){var b=y._asyncToGenerator(function*(a){this._set("source",a);a.sourceJSON&&(this.sourceJSON=a.sourceJSON,
this.read(a.sourceJSON,{origin:"service",url:this.parsedUrl}));this._verifySource();this._verifyFields();J.fixRendererFields(this.renderer,this.fieldsIndex);J.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);return Fa.loadStyleRenderer(this,{origin:"service"})});return function(a){return b.apply(this,arguments)}}();d.hasDataChanged=function(){var b=y._asyncToGenerator(function*(){var a;if(null!=(a=this.source)&&a.refresh)try{var c;const {dataChanged:h,updates:l}=yield null==(c=this.source)?void 0:
c.refresh();A.isSome(l)&&(this.sourceJSON={...this.sourceJSON,...l},this.read(l,{origin:"service",url:this.parsedUrl}));if(h)return!0}catch{}if(this.definitionExpression)try{return(yield ha.parseWhereClause(this.definitionExpression,this.fieldsIndex)).hasDateFunctions}catch{}return!1});return function(){return b.apply(this,arguments)}}();d._verifyFields=function(){var b;const a=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+
a+")");this.isTable||this._hasMemorySource()||-1!==a.search(/\/FeatureServer\//i)||null!=(b=this.fields)&&b.some(c=>"geometry"===c.type)||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+a+")")};d._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new p("feature-layer:mixed-source-and-url","SubtypeGroupLayer cannot be created with both an in-memory source and a url");
}else if(!this.url)throw new p("feature-layer:source-or-url-required","SubtypeGroupLayer requires either a url, a valid portal item or a source");};d._initMemorySource=function(b){b.forEach(a=>{a.layer=this;a.sourceLayer=this});this._handles.add([b.on("after-add",a=>{a.item.layer=this;a.item.sourceLayer=this}),b.on("after-remove",a=>{a.item.layer=null;a.item.sourceLayer=null})],"fl-source")};d._resetMemorySource=function(b){b.forEach(a=>{a.layer=null;a.sourceLayer=null});this._handles.remove("fl-source")};
d._hasMemorySource=function(){return!(this.url||!this.source)};d._readAnalyticsCapabilities=function(b){return{supportsCacheHint:C(b.advancedQueryCapabilities,"queryAnalytics")}};d._readAttachmentCapabilities=function(b){const a=b.attachmentProperties,c={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:C(b.advancedQueryCapabilities,"queryAttachments"),supportsResize:k(b,"supportsAttachmentsResizing",!1)};a&&Array.isArray(a)&&a.forEach(h=>
{const l=Ja[h.name];l&&(c[l]=!!h.isEnabled)});return c};d._readDataCapabilities=function(b){return{isVersioned:k(b,"isDataVersioned",!1),supportsAttachment:k(b,"hasAttachments",!1),supportsM:k(b,"hasM",!1),supportsZ:k(b,"hasZ",!1)}};d._readMetadataCapabilities=function(b){return{supportsAdvancedFieldProperties:k(b,"supportsFieldDescriptionProperty",!1)}};d._readOperationsCapabilities=function(b,a){b=b?b.toLowerCase().split(",").map(x=>x.trim()):[];const c=b.includes("editing");let h=c&&b.includes("create"),
l=c&&b.includes("delete"),r=c&&b.includes("update");const v=b.includes("changetracking"),w=a.advancedQueryCapabilities;!c||h||l||r||(h=l=r=!0);return{supportsCalculate:k(a,"supportsCalculate",!1),supportsTruncate:k(a,"supportsTruncate",!1),supportsValidateSql:k(a,"supportsValidateSql",!1),supportsAdd:h,supportsDelete:l,supportsEditing:c,supportsChangeTracking:v,supportsQuery:b.includes("query"),supportsQueryAnalytics:k(w,"supportsQueryAnalytic",!1),supportsQueryAttachments:k(w,"supportsQueryAttachments",
!1),supportsQueryTopFeatures:k(w,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:k(a,"supportsAttachmentsResizing",!1),supportsSync:b.includes("sync"),supportsUpdate:r,supportsExceedsLimitStatistics:k(a,"supportsExceedsLimitStatistics",!1)}};d._readQueryCapabilities=function(b){var a;const c=b.advancedQueryCapabilities,h=b.ownershipBasedAccessControlForFeatures,l=b.archivingInfo;var r=null==(a=this.url)?void 0:a.includes("MapServer");a=!ca("mapserver-pbf-enabled")&&r&&10.81>this.version;
r=z.isHostedAgolService(this.url);const v=(b.supportedQueryFormats||"").split(",").reduce((w,x)=>{(x=x.toLowerCase().trim())&&w.add(x);return w},new Set);return{supportsStatistics:k(c,"supportsStatistics",b.supportsStatistics),supportsPercentileStatistics:k(c,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:k(c,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:Ia(c),supportsCentroid:k(c,"supportsReturningGeometryCentroid",!1),supportsDistance:k(c,
"supportsQueryWithDistance",!1),supportsDistinct:k(c,"supportsDistinct",b.supportsAdvancedQueries),supportsExtent:k(c,"supportsReturningQueryExtent",!1),supportsGeometryProperties:k(c,"supportsReturningGeometryProperties",!1),supportsHavingClause:k(c,"supportsHavingClause",!1),supportsOrderBy:k(c,"supportsOrderBy",b.supportsAdvancedQueries),supportsPagination:k(c,"supportsPagination",!1),supportsQuantization:k(b,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:k(b,"supportsQuantizationEditMode",
!1),supportsQueryGeometry:k(b,"supportsReturningQueryGeometry",!1),supportsResultType:k(c,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:k(c,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:k(c,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:k(b,"useStandardizedQueries",!1),supportsTopFeaturesQuery:k(c,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:k(h,"allowOthersToQuery",!0),supportsHistoricMoment:k(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:!a&&
v.has("pbf"),supportsDisjointSpatialRelationship:k(c,"supportsDisjointSpatialRel",!1),supportsCacheHint:k(c,"supportsQueryWithCacheHint",!1)||C(c,"query"),supportsDefaultSpatialReference:k(c,"supportsDefaultSR",!1),supportsCompactGeometry:r,maxRecordCountFactor:G(b,"maxRecordCountFactor",void 0),maxRecordCount:G(b,"maxRecordCount",void 0),standardMaxRecordCount:G(b,"standardMaxRecordCount",void 0),tileMaxRecordCount:G(b,"tileMaxRecordCount",void 0)}};d._readQueryRelatedCapabilities=function(b){b=
b.advancedQueryCapabilities;const a=k(b,"supportsAdvancedQueryRelated",!1);return{supportsPagination:k(b,"supportsQueryRelatedPagination",!1),supportsCount:a,supportsOrderBy:a,supportsCacheHint:C(b,"queryRelated")}};d._readQueryTopFeaturesCapabilities=function(b){return{supportsCacheHint:C(b.advancedQueryCapabilities,"queryTopFilter")}};d._readEditingCapabilities=function(b){const a=b.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:k(b,"allowGeometryUpdates",!0),supportsGlobalId:k(b,
"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:k(b,"supportsReturnServiceEditsInSourceSpatialReference",!1),supportsRollbackOnFailure:k(b,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:k(b,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:k(b,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:k(a,"allowAnonymousToDelete",!0),supportsDeleteByOthers:k(a,"allowOthersToDelete",!0),supportsUpdateByAnonymous:k(a,"allowAnonymousToUpdate",
!0),supportsUpdateByOthers:k(a,"allowOthersToUpdate",!0)}};d._handleSublayersChange=function(b,a){a&&(a.forEach(c=>{c.parent=null}),this.handles.remove("sublayers-owner"));b&&(b.forEach(c=>{c.parent=this}),this.handles.add([b.on("after-add",({item:c})=>{c.parent=this}),b.on("after-remove",({item:c})=>{c.parent=null})],"sublayers-owner"))};y._createClass(q,[{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("dynamicDataSource");this.commitProperty("timeExtent");
this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("gdbVersion");this.commitProperty("historicMoment");this.commitProperty("returnZ");this.commitProperty("capabilities");this.commitProperty("returnM");return(this._get("createQueryVersion")||0)+1}},{key:"parsedUrl",get:function(){const b=this.url?I.urlToObject(this.url):null;null!=b&&(null!=this.dynamicDataSource?b.path=I.join(b.path,"dynamicLayer"):null!=this.layerId&&(b.path=I.join(b.path,this.layerId.toString())));
return b}},{key:"renderer",set:function(b){J.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"source",set:function(b){const a=this._get("source");a!==b&&(a&&a instanceof t&&this._resetMemorySource(a),b&&b instanceof t&&this._initMemorySource(b),this._set("source",b))}},{key:"url",set:function(b){b=z.sanitizeUrlWithLayerId({layer:this,url:b,nonStandardUrlAllowed:!0,logger:X});this._set("url",b.url);null!=b.layerId&&this._set("layerId",b.layerId)}}]);return q}(qa.BlendLayer(wa.TemporalLayer(va.ScaleRangeLayer(ua.RefreshableLayer(pa.ArcGISService(sa.OperationalLayer(ta.PortalLayer(fa.MultiOriginJSONMixin(ra.CustomParametersMixin(e.HandleOwnerMixin(oa)))))))))));
f.__decorate([g.property({readOnly:!0,json:{read:!1}})],e.prototype,"capabilities",void 0);f.__decorate([n.reader("service","capabilities","advancedQueryCapabilities allowGeometryUpdates allowUpdateWithoutMValues archivingInfo capabilities hasAttachments hasM hasZ maxRecordCount maxRecordCountFactor ownershipBasedAccessControlForFeatures standardMaxRecordCount supportedQueryFormats supportsAdvancedQueries supportsApplyEditsWithGlobalIds supportsAttachmentsByUploadId supportsAttachmentsResizing supportsCalculate supportsCoordinatesQuantization supportsExceedsLimitStatistics supportsFieldDescriptionProperty supportsQuantizationEditMode supportsRollbackOnFailureParameter supportsStatistics supportsTruncate supportsValidateSql tileMaxRecordCount useStandardizedQueries".split(" "))],
e.prototype,"readCapabilities",null);f.__decorate([g.property({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],e.prototype,"charts",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"createQueryVersion",null);f.__decorate([g.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],e.prototype,"copyright",void 0);f.__decorate([g.property({type:String,json:{read:{source:"layerDefinition.displayField"},
origins:{service:{read:{source:"displayField"}}}}})],e.prototype,"displayField",void 0);f.__decorate([g.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],e.prototype,"definitionExpression",void 0);f.__decorate([g.property({types:Q.symbolTypes,readOnly:!0})],e.prototype,"defaultSymbol",void 0);f.__decorate([g.property({type:Ea.DataLayerSource})],e.prototype,"dynamicDataSource",void 0);f.__decorate([g.property({readOnly:!0})],
e.prototype,"editFieldsInfo",void 0);f.__decorate([g.property({type:Boolean})],e.prototype,"editingEnabled",void 0);f.__decorate([n.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],e.prototype,"readEditingEnabled",null);f.__decorate([n.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],e.prototype,"readEditingEnabledFromWebMap",null);f.__decorate([E.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],
e.prototype,"writeEditingEnabled",null);f.__decorate([E.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],e.prototype,"writeEditingEnabledToWebMap",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"editingInfo",void 0);f.__decorate([n.reader("editingInfo")],e.prototype,"readEditingInfo",null);f.__decorate([g.property(u.elevationInfo)],e.prototype,"elevationInfo",void 0);f.__decorate([g.property(xa.featureReductionProperty)],e.prototype,
"featureReduction",void 0);f.__decorate([g.property({...D.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{read:!0},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:K}}}}})],e.prototype,"fields",void 0);f.__decorate([g.property(D.fieldsIndex)],e.prototype,"fieldsIndex",void 0);f.__decorate([g.property({type:Aa,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"},origins:{"web-scene":{write:!1}}}})],e.prototype,"floorInfo",
void 0);f.__decorate([g.property({type:la,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"formTemplate",void 0);f.__decorate([g.property({type:ma,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],e.prototype,"fullExtent",void 0);f.__decorate([g.property()],e.prototype,"gdbVersion",void 0);f.__decorate([g.property({readOnly:!0,type:za,json:{read:{source:"geometryProperties"}}})],e.prototype,"geometryFieldsInfo",void 0);
f.__decorate([g.property({type:"point polygon polyline multipoint multipatch mesh".split(" "),json:{origins:{service:{read:L.read},"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:K,writer(m,q,d){(m=m?L.toJSON(m):null)&&H.setDeepValue(d,m,q)}}}},read:{source:"layerDefinition.geometryType",reader:L.read}}})],e.prototype,"geometryType",void 0);f.__decorate([g.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],e.prototype,"hasM",void 0);
f.__decorate([g.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],e.prototype,"hasZ",void 0);f.__decorate([g.property({readOnly:!0,type:na})],e.prototype,"heightModelInfo",void 0);f.__decorate([g.property({type:Date})],e.prototype,"historicMoment",void 0);f.__decorate([g.property(u.id)],e.prototype,"id",void 0);f.__decorate([g.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],e.prototype,"isTable",void 0);f.__decorate([n.reader("service",
"isTable",["type","geometryType"]),n.reader("isTable",["layerDefinition.type","layerDefinition.geometryType"])],e.prototype,"readIsTable",null);f.__decorate([E.writer("web-map","isTable")],e.prototype,"writeIsTable",null);f.__decorate([g.property(u.opacityDrawingInfo)],e.prototype,"opacity",void 0);f.__decorate([g.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],e.prototype,"layerId",void 0);f.__decorate([g.property(u.legendEnabled)],e.prototype,"legendEnabled",void 0);
f.__decorate([g.property({type:["show","hide"]})],e.prototype,"listMode",void 0);f.__decorate([g.property(u.minScale)],e.prototype,"minScale",void 0);f.__decorate([n.reader("service","minScale",["minScale","effectiveMinScale"])],e.prototype,"readMinScale",null);f.__decorate([g.property(u.maxScale)],e.prototype,"maxScale",void 0);f.__decorate([n.reader("service","maxScale",["maxScale","effectiveMaxScale"])],e.prototype,"readMaxScale",null);f.__decorate([g.property({type:String})],e.prototype,"globalIdField",
void 0);f.__decorate([n.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),n.reader("service","globalIdField",["globalIdField","fields"])],e.prototype,"readGlobalIdFieldFromService",null);f.__decorate([g.property({type:String,json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:K}}}}})],e.prototype,"objectIdField",void 0);f.__decorate([n.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),n.reader("service",
"objectIdField",["objectIdField","fields"])],e.prototype,"readObjectIdFieldFromService",null);f.__decorate([g.property({value:"ArcGISSubtypeGroupLayer",type:["ArcGISSubtypeGroupLayer"]})],e.prototype,"operationalLayerType",void 0);f.__decorate([g.property(D.outFields)],e.prototype,"outFields",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"parsedUrl",null);f.__decorate([g.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],e.prototype,"path",void 0);f.__decorate([g.property({type:[Ba],
readOnly:!0})],e.prototype,"relationships",void 0);f.__decorate([g.property({types:P.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:P.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(m,q,d){return{ignoreOrigin:null==d?void 0:d.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(m,q,d){return{ignoreOrigin:null==d?void 0:d.writeLayerSchema}}}}})],e.prototype,"renderer",
null);f.__decorate([n.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),n.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],e.prototype,"readRenderer",null);f.__decorate([g.property()],e.prototype,"sourceJSON",void 0);f.__decorate([g.property({type:Boolean})],e.prototype,"returnM",void 0);f.__decorate([g.property({type:Boolean})],e.prototype,"returnZ",void 0);f.__decorate([g.property(u.screenSizePerspectiveEnabled)],e.prototype,"screenSizePerspectiveEnabled",
void 0);f.__decorate([g.property()],e.prototype,"source",null);f.__decorate([ia.cast("source")],e.prototype,"castSource",null);f.__decorate([n.reader("portal-item","source",["featureSet"]),n.reader("web-map","source",["featureSet"])],e.prototype,"readSource",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"serviceDefinitionExpression",void 0);f.__decorate([n.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],e.prototype,"readServiceDefinitionExpression",
null);f.__decorate([g.property({type:T,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],e.prototype,"spatialReference",void 0);f.__decorate([g.property({type:String})],e.prototype,"subtypeField",void 0);f.__decorate([g.property({type:t.ofType(F),json:{origins:{service:{read:{source:"subtypes",reader:(m,q,d)=>{m=m.map(b=>new F({subtypeCode:b.code,renderer:O.read(q.drawingInfo.renderer,q,d),title:b.name}));return new (t.ofType(F))(m)}}}}}})],
e.prototype,"sublayers",void 0);f.__decorate([g.property({type:Ca})],e.prototype,"timeInfo",void 0);f.__decorate([g.property()],e.prototype,"title",void 0);f.__decorate([n.reader("service","title",["name"]),n.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],e.prototype,"readTitle",null);f.__decorate([n.reader("web-map","title",["layerDefinition.name","title"])],e.prototype,"readTitleFromWebMap",null);f.__decorate([g.property({type:String})],e.prototype,"sublayerTitleMode",
void 0);f.__decorate([g.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],e.prototype,"trackIdField",void 0);f.__decorate([g.property({json:{read:!1}})],e.prototype,"type",void 0);f.__decorate([g.property({type:String})],e.prototype,"typeIdField",void 0);f.__decorate([n.reader("service","typeIdField"),n.reader("typeIdField",["layerDefinition.typeIdField"])],e.prototype,"readTypeIdField",null);f.__decorate([g.property({readOnly:!0,json:{write:!1}})],e.prototype,"serverGens",void 0);
f.__decorate([g.property({type:t.ofType(V.FeatureIndex),readOnly:!0})],e.prototype,"indexes",void 0);f.__decorate([g.property(u.url)],e.prototype,"url",null);f.__decorate([E.writer("url")],e.prototype,"writeUrl",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"userIsAdmin",void 0);f.__decorate([g.property({json:{origins:{service:{read:!0}},read:!1}})],e.prototype,"version",void 0);f.__decorate([n.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "))],
e.prototype,"readVersion",null);f.__decorate([g.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],e.prototype,"visible",void 0);f.__decorate([n.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],e.prototype,"readVisible",null);e=f.__decorate([ja.subclass("esri.layers.SubtypeGroupLayer")],e);const M=ka.createTypeReader({types:Q.symbolTypesRenderer});return e});