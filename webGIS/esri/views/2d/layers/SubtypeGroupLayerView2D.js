// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ../../../layers/support/FeatureFilter ./FeatureLayerView2D".split(" "),function(l,m,n,k,g,t,u,v,w,p,q,r){g=function(e){function h(){return e.apply(this,arguments)||this}l._inheritsLoose(h,
e);var f=h.prototype;f.initialize=function(){this.handles.add([k.watch(()=>{var a;return null==(a=this.view)?void 0:a.viewpoint},()=>this._update(),k.initial)])};f._injectOverrides=function(a){a=e.prototype._injectOverrides.call(this,a);const d=this.view.scale;var c=this.layer.sublayers.filter(b=>!b.visible||0!==b.minScale&&d>b.minScale||0!==b.maxScale&&d<b.maxScale).map(b=>b.subtypeCode);if(!c.length)return a;a=n.isSome(a)?a:(new q).toJSON();c=`NOT ${this.layer.subtypeField} IN (${c.join(",")})`;
a.where=a.where?`(${a.where}) AND (${c})`:c;return a};f._setLayersForFeature=function(a){var d=this.layer.fieldsIndex.get(this.layer.subtypeField);const c=a.attributes[d.name];d=this.layer.sublayers.find(b=>b.subtypeCode===c);a.layer=d;a.sourceLayer=this.layer};f._createSchemaConfig=function(){const a={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(b=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:b.labelingInfo,labelsVisible:b.labelsVisible,
renderer:b.renderer,subtypeCode:b.subtypeCode,orderBy:null}))},d=this.layer.sublayers.map(b=>b.subtypeCode).join(",");let c=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";c+=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${d})`:"1\x3d2";return{...e.prototype._createSchemaConfig.call(this),...a,definitionExpression:c}};return h}(r);return g=m.__decorate([p.subclass("esri.views.2d.layers.SubtypeGroupLayerView2D")],g)});