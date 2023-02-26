// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Loadable ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/SpatialReference ../layers/support/arcgisLayerUrl".split(" "),function(h,d,m,b,t,n,u,v,w,e,C,D,E,x,y,z,p){const A=t.getLogger("esri.networks.Network");
b=function(q){function l(a){a=q.call(this,a)||this;a.id=null;a.title=null;a.layerUrl=null;a.dataElement=null;a.fullExtent=null;a.spatialReference=null;a.type=null;a.sourceJSON=null;return a}h._inheritsLoose(l,q);var k=l.prototype;k.initialize=function(){this.when().catch(a=>{if(!v.isAbortError(a)){var c,f;A.error("#load()",`Failed to load layer (title: '${null!=(c=this.title)?c:"no title"}', id: '${null!=(f=this.id)?f:"no id"}')`,{error:a})}})};k.load=function(){var a=h._asyncToGenerator(function*(c){this.addResolvingPromise(this._fetchDataElement(this.featureServiceUrl,
this.layerId.toString(),c));this.addResolvingPromise(this._fetchLayerMetaData(this.layerUrl,c));return this});return function(c){return a.apply(this,arguments)}}();k.getLayerIdBySourceId=function(a){if(this.dataElement){const c=this.dataElement.domainNetworks;for(const f of c){for(const g of f.edgeSources?f.edgeSources:[])if(g.sourceId===a)return g.layerId;for(const g of f.junctionSources?f.junctionSources:[])if(g.sourceId===a)return g.layerId}}return null};k._fetchLayerMetaData=function(){var a=
h._asyncToGenerator(function*(c,f){c=yield m(c,{responseType:"json",query:{f:"json"},...f});this.sourceJSON=c.data;this.read(c.data,{origin:"service"})});return function(c,f){return a.apply(this,arguments)}}();k._fetchDataElement=function(){var a=h._asyncToGenerator(function*(c,f,g){this.dataElement||(c=yield m(`${c}/queryDataElements`,{responseType:"json",query:{layers:JSON.stringify([f]),f:"json"},...g}).then(B=>{var r;return null==(r=B.data.layerDataElements)?void 0:r[0]}))&&this.read(c,{origin:"service"})});
return function(c,f,g){return a.apply(this,arguments)}}();h._createClass(l,[{key:"datasetName",get:function(){var a;return null==(a=this.dataElement)?void 0:a.name}},{key:"owner",get:function(){var a;return null==(a=this.dataElement)?void 0:a.userIdentity}},{key:"schemaGeneration",get:function(){var a;return null==(a=this.dataElement)?void 0:a.schemaGeneration}},{key:"parsedUrl",get:function(){const a=this.layerUrl;return a?w.urlToObject(a):null}},{key:"featureServiceUrl",get:function(){const a=this.parsedUrl&&
p.parse(this.parsedUrl.path);return n.isSome(a)?a.url.path:null}},{key:"networkServiceUrl",get:function(){return this.featureServiceUrl?this.featureServiceUrl.replace(/\/FeatureServer/i,"/UtilityNetworkServer"):null}},{key:"layerId",get:function(){const a=this.parsedUrl&&p.parse(this.parsedUrl.path);return n.isSome(a)?a.sublayer:null}}]);return l}(u.MultiOriginJSONMixin(b));d.__decorate([e.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:!0,write:{isRequired:!0}}},read:!1}})],b.prototype,
"id",void 0);d.__decorate([e.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:!0,write:{isRequired:!0}}},read:!1}})],b.prototype,"title",void 0);d.__decorate([e.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:{source:"url"},write:{target:"url",isRequired:!0}}},read:!1}})],b.prototype,"layerUrl",void 0);d.__decorate([e.property({type:Object,json:{origins:{service:{read:!0}},read:!1}})],b.prototype,"dataElement",void 0);d.__decorate([e.property({type:y,json:{origins:{service:{read:{source:"extent"}}},
read:!1}})],b.prototype,"fullExtent",void 0);d.__decorate([e.property({type:z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:!1}})],b.prototype,"spatialReference",void 0);d.__decorate([e.property({type:["utility","trace"],readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"type",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"datasetName",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"owner",null);d.__decorate([e.property({readOnly:!0})],b.prototype,
"schemaGeneration",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"parsedUrl",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"featureServiceUrl",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"networkServiceUrl",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"layerId",null);d.__decorate([e.property()],b.prototype,"sourceJSON",void 0);return b=d.__decorate([x.subclass("esri.networks.Network")],b)});