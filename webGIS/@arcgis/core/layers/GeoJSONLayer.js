/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{r,w as s}from"../renderers/support/jsonUtils.js";import{i as o,a as i}from"../chunks/maybe.js";import{M as n}from"../chunks/MultiOriginJSONSupport.js";import{urlToObject as p}from"../core/urlUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{h as l}from"../core/lang.js";import"../chunks/ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{f as u}from"../chunks/typeUtils.js";import c from"./Layer.js";import d from"../core/Error.js";import h from"../core/Loadable.js";import{L as y}from"../chunks/Logger.js";import{debounce as j}from"../core/promiseUtils.js";import{open as f}from"../core/workers/workers.js";import{c as b}from"../chunks/clientSideDefaults.js";import g from"../rest/support/FeatureSet.js";import k from"../geometry/Extent.js";import S from"../geometry/Polygon.js";import{BlendLayer as I}from"./mixins/BlendLayer.js";import{CustomParametersMixin as v}from"./mixins/CustomParametersMixin.js";import{FeatureEffectLayer as F}from"./mixins/FeatureEffectLayer.js";import{O}from"../chunks/OperationalLayer.js";import{OrderedLayer as x}from"./mixins/OrderedLayer.js";import{RefreshableLayer as E}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as R}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as D}from"./mixins/TemporalLayer.js";import{e as C,i as P,l as L,a as U,d as w,p as _,s as N,u as J}from"../chunks/commonProperties.js";import{f as M}from"../chunks/featureReductionUtils.js";import T from"./support/FeatureTemplate.js";import V from"./support/FeatureType.js";import q from"./support/Field.js";import{d as A}from"../chunks/fieldProperties.js";import{fixRendererFields as B,fixTimeInfoFields as Q}from"./support/fieldUtils.js";import G from"./support/LabelClass.js";import{r as z}from"../chunks/labelingInfo.js";import Z from"../rest/support/Query.js";import{createPopupTemplate as W}from"../support/popupUtils.js";import H from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polyline.js";import"../chunks/extentUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/assets.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/QueryEngineCapabilities.js";import"../chunks/defaultsJSON.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/AggregateField.js";import"./support/OutStatistic.js";import"../chunks/labelUtils.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"./support/FieldsIndex.js";const $=y.getLogger("esri.layers.graphics.sources.GeoJSONSource");let K=class extends h{constructor(){super(...arguments),this.type="geojson",this.refresh=j((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=o(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:k.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new d("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const t of e.addFeatures)r.push(this._serializeFeature(t));if(e.deleteFeatures)for(const r of e.deleteFeatures)"objectId"in r&&null!=r.objectId?s.push(r.objectId):"attributes"in r&&null!=r.attributes[t]&&s.push(r.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)o.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new d("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return i(t)?null:"mesh"===t.type||"extent"===t.type?S.fromExtent(t.extent):t}async _startWorker(e){this._connection=await f("GeoJSONSourceWorker",{strategy:l("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:p,customParameters:a}=this.layer,m="defaults"===this.layer.originOf("spatialReference"),c={url:n,customParameters:a,fields:t&&t.map((e=>e.toJSON())),geometryType:u.toJSON(o),hasZ:s,objectIdField:i,timeInfo:p?p.toJSON():null,spatialReference:m?null:r&&r.toJSON()},d=await this._connection.invoke("load",c,{signal:e});for(const e of d.warnings)$.warn(e.message,{layer:this.layer,warning:e});d.featureErrors.length&&$.warn(`Encountered ${d.featureErrors.length} validation errors while loading features`,d.featureErrors),this.sourceJSON=d.layerDefinition,this.capabilities=b(this.sourceJSON.hasZ,!0)}};e([a()],K.prototype,"capabilities",void 0),e([a()],K.prototype,"type",void 0),e([a({constructOnly:!0})],K.prototype,"layer",void 0),e([a()],K.prototype,"sourceJSON",void 0),K=e([m("esri.layers.graphics.sources.GeoJSONSource")],K);const X=A();let Y=class extends(x(v(F(I(D(R(E(O(n(c)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new K({layer:this}),this.spatialReference=H.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),B(this.renderer,this.fieldsIndex),Q(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?p(this.url):null}set renderer(e){B(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=p(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const r=await import("../chunks/editingSupport.js");await this.load();const s=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),s}on(e,t){return super.on(e,t)}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Z.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return o(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([a({readOnly:!0,json:{read:!1,write:!1}})],Y.prototype,"capabilities",null),e([a({type:String})],Y.prototype,"copyright",void 0),e([a({readOnly:!0})],Y.prototype,"createQueryVersion",null),e([a({readOnly:!0})],Y.prototype,"defaultPopupTemplate",null),e([a({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Y.prototype,"definitionExpression",void 0),e([a({type:String})],Y.prototype,"displayField",void 0),e([a({type:Boolean})],Y.prototype,"editingEnabled",void 0),e([a(C)],Y.prototype,"elevationInfo",void 0),e([a(M)],Y.prototype,"featureReduction",void 0),e([a({type:[q],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],Y.prototype,"fields",void 0),e([a(X.fieldsIndex)],Y.prototype,"fieldsIndex",void 0),e([a({type:k,json:{name:"extent"}})],Y.prototype,"fullExtent",void 0),e([a({type:["point","polygon","polyline","multipoint"],json:{read:{reader:u.read}}})],Y.prototype,"geometryType",void 0),e([a({type:Boolean})],Y.prototype,"hasZ",void 0),e([a(P)],Y.prototype,"id",void 0),e([a({type:Boolean,readOnly:!0})],Y.prototype,"isTable",null),e([a(L)],Y.prototype,"labelsVisible",void 0),e([a({type:[G],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z},write:!0}})],Y.prototype,"labelingInfo",void 0),e([a(U)],Y.prototype,"legendEnabled",void 0),e([a({type:["show","hide"]})],Y.prototype,"listMode",void 0),e([a({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],Y.prototype,"objectIdField",void 0),e([a(w)],Y.prototype,"opacity",void 0),e([a({type:["GeoJSON"]})],Y.prototype,"operationalLayerType",void 0),e([a({readOnly:!0})],Y.prototype,"parsedUrl",null),e([a(_)],Y.prototype,"popupEnabled",void 0),e([a({type:t,json:{name:"popupInfo",write:!0}})],Y.prototype,"popupTemplate",void 0),e([a({types:r,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:s}}}})],Y.prototype,"renderer",null),e([a(N)],Y.prototype,"screenSizePerspectiveEnabled",void 0),e([a({readOnly:!0})],Y.prototype,"source",void 0),e([a({type:H})],Y.prototype,"spatialReference",void 0),e([a({type:[T]})],Y.prototype,"templates",void 0),e([a()],Y.prototype,"title",void 0),e([a({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),e([a({type:String,readOnly:!0})],Y.prototype,"typeIdField",void 0),e([a({type:[V]})],Y.prototype,"types",void 0),e([a(J)],Y.prototype,"url",null),Y=e([m("esri.layers.GeoJSONLayer")],Y);const ee=Y;export{ee as default};
