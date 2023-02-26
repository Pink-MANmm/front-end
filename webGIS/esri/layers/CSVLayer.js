// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../core/Error ../core/maybe ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./FeatureLayer ./graphics/sources/CSVSource ./graphics/sources/support/clientSideDefaults ../rest/support/Query ../chunks/persistableUrlUtils ../geometry/SpatialReference".split(" "),function(h,
d,c,n,u,v,e,B,C,D,w,x,y,p,z,m,q,A){function r(k,l){throw new n(l,`CSVLayer (title: ${k.title}, id: ${k.id}) cannot be saved to a portal item`);}c=function(k){function l(...a){a=k.call(this,...a)||this;a.capabilities=z.createCapabilities(!1,!1);a.delimiter=null;a.editingEnabled=!1;a.fields=null;a.latitudeField=null;a.locationType="coordinates";a.longitudeField=null;a.operationalLayerType="CSV";a.outFields=["*"];a.path=null;a.portalItem=null;a.spatialReference=A.WGS84;a.source=null;a.type="csv";return a}
h._inheritsLoose(l,k);var f=l.prototype;f.normalizeCtorArgs=function(a,b){return"string"===typeof a?{url:a,...b}:a};f.readWebMapLabelsVisible=function(a,b){return null!=b.showLabels?b.showLabels:!!(b.layerDefinition&&b.layerDefinition.drawingInfo&&b.layerDefinition.drawingInfo.labelingInfo)};f.createGraphicsSource=function(){var a=h._asyncToGenerator(function*(b){const g=new p.CSVSource({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,
spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});this._set("source",g);yield g.load({signal:b});this.read({locationInfo:g.locationInfo,columnDelimiter:g.delimiter},{origin:"service",url:this.parsedUrl});return g});return function(b){return a.apply(this,arguments)}}();f.queryFeatures=function(a,b){return this.load().then(()=>this.source.queryFeatures(m.from(a)||this.createQuery())).then(g=>{if(null!=g&&g.features)for(const t of g.features)t.layer=
t.sourceLayer=this;return g})};f.queryObjectIds=function(a,b){return this.load().then(()=>this.source.queryObjectIds(m.from(a)||this.createQuery()))};f.queryFeatureCount=function(a,b){return this.load().then(()=>this.source.queryFeatureCount(m.from(a)||this.createQuery()))};f.queryExtent=function(a,b){return this.load().then(()=>this.source.queryExtent(m.from(a)||this.createQuery()))};f.write=function(a,b){return k.prototype.write.call(this,a,{...b,writeLayerSchema:!0})};f.clone=function(){throw new n("csv-layer:clone",
`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);};f.save=function(){var a=h._asyncToGenerator(function*(b){return r(this,"csv-layer:save")});return function(b){return a.apply(this,arguments)}}();f.saveAs=function(){var a=h._asyncToGenerator(function*(b,g){return r(this,"csv-layer:save-as")});return function(b,g){return a.apply(this,arguments)}}();f.hasDataChanged=function(){var a=h._asyncToGenerator(function*(){try{const {dataChanged:b,updates:g}=yield this.source.refresh(this.customParameters);
u.isSome(g)&&this.read(g,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return b}catch{}return!1});return function(){return a.apply(this,arguments)}}();f._verifyFields=function(){};f._verifySource=function(){};f._hasMemorySource=function(){return!1};h._createClass(l,[{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"url",set:function(a){a?(a=v.urlToObject(a),this._set("url",a.path),a.query&&(this.customParameters={...this.customParameters,...a.query})):this._set("url",
a)}}]);return l}(y);d.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"capabilities",void 0);d.__decorate([e.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],c.prototype,"delimiter",void 0);d.__decorate([e.property({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"editingEnabled",void 0);d.__decorate([e.property({json:{read:{source:"layerDefinition.fields"},
write:{target:"layerDefinition.fields"}}})],c.prototype,"fields",void 0);d.__decorate([e.property({type:Boolean,readOnly:!0})],c.prototype,"isTable",null);d.__decorate([w.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],c.prototype,"readWebMapLabelsVisible",null);d.__decorate([e.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"latitudeField",void 0);
d.__decorate([e.property({type:["show","hide"]})],c.prototype,"listMode",void 0);d.__decorate([e.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],c.prototype,"locationType",void 0);d.__decorate([e.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"longitudeField",void 0);d.__decorate([e.property({type:["CSV"]})],
c.prototype,"operationalLayerType",void 0);d.__decorate([e.property()],c.prototype,"outFields",void 0);d.__decorate([e.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],c.prototype,"path",void 0);d.__decorate([e.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0);d.__decorate([e.property({json:{read:!1},cast:null,type:p.CSVSource,readOnly:!0})],c.prototype,"source",void 0);d.__decorate([e.property({json:{read:!1},
value:"csv",readOnly:!0})],c.prototype,"type",void 0);d.__decorate([e.property({json:{read:q.read,write:{isRequired:!0,ignoreOrigin:!0,writer:q.write}}})],c.prototype,"url",null);return c=d.__decorate([x.subclass("esri.layers.CSVLayer")],c)});