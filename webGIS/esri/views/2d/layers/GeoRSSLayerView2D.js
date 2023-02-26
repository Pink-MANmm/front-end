// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../PopupTemplate ../../../core/Collection ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ../../../renderers/SimpleRenderer ../../../renderers/support/jsonUtils ../../../rest/support/FeatureSet ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(p,r,t,u,d,k,C,D,E,F,v,l,w,x,y,z,A,B){k=function(q){function m(){var a=q.apply(this,arguments)||this;a._graphicsViewMap={};a._popupTemplates=new Map;a.graphicsViews=[];return a}p._inheritsLoose(m,q);var e=m.prototype;e.hitTest=function(){var a=p._asyncToGenerator(function*(b,f){if(!this.graphicsViews.length)return null;const g=this.layer;return this.graphicsViews.reverse().map(c=>{const n=this._popupTemplates.get(c);c=c.hitTest(b);for(const h of c)h.layer=g,h.sourceLayer=g,h.popupTemplate=
n;return c}).flat().map(c=>({type:"graphic",graphic:c,layer:g,mapPoint:b}))});return function(b,f){return a.apply(this,arguments)}}();e.update=function(a){if(this.graphicsViews)for(const b of this.graphicsViews)b.processUpdate(a)};e.attach=function(){this.handles.add([d.watch(()=>{var a;return null==(a=this.layer)?void 0:a.featureCollections},a=>{this._clear();for(const {popupInfo:g,featureSet:c,layerDefinition:n}of a){a=x.fromJSON(c);var b=new u(a.features),f=n.drawingInfo;const h=g?t.fromJSON(g):
null;f=w.fromJSON(f.renderer);b=new A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:b,renderer:f,container:new z(this.view.featuresTilingScheme)});this._graphicsViewMap[a.geometryType]=b;this._popupTemplates.set(b,h);"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=f.symbol):this.layer.lineSymbol=f.symbol:this.layer.polygonSymbol=f.symbol;this.graphicsViews.push(b);
this.container.addChild(b.container)}},d.initial),d.watch(()=>{var a;return null==(a=this.layer)?void 0:a.polygonSymbol},a=>{this._graphicsViewMap.polygon.renderer=new l({symbol:a})},d.initial),d.watch(()=>{var a;return null==(a=this.layer)?void 0:a.lineSymbol},a=>{this._graphicsViewMap.polyline.renderer=new l({symbol:a})},d.initial),d.watch(()=>{var a;return null==(a=this.layer)?void 0:a.pointSymbol},a=>{this._graphicsViewMap.point.renderer=new l({symbol:a})},d.initial)],"georsslayerview")};e.detach=
function(){this.handles.remove("georsslayerview");this._clear()};e.moveStart=function(){};e.moveEnd=function(){};e.viewChange=function(){for(const a of this.graphicsViews)a.viewChange()};e._clear=function(){this.container.removeAllChildren();for(const a of this.graphicsViews)a.destroy();this._graphicsViewMap={};this._popupTemplates.clear();this.graphicsViews.length=0};return m}(y.LayerView2DMixin(B));return k=r.__decorate([v.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],k)});