// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../brushes ./shaders/VTLMaterialManager ./style/StyleDefinition ../../../webgl/enums".split(" "),function(m,n,p,q,g,h){return function(){function l(a,c){this.spriteMosaic=a;this.glyphMosaic=c;this._brushCache=new Map;this._vtlMaterialManager=new q}var k=l.prototype;k.dispose=function(){this._brushCache&&(this._brushCache.forEach(a=>a.dispose()),this._brushCache=null);this._vtlMaterialManager=n.disposeMaybe(this._vtlMaterialManager);
this.spriteMosaic.dispose();this.glyphMosaic.dispose()};k.drawTile=function(a,c,d){const {context:b}=a,e=d.layers;0<d.backgroundBucketIds.length&&(a.renderPass="background",d.backgroundBucketIds.forEach(r=>this._renderStyleLayer(d.getLayerById(r),a,c,!0)));b.setBlendingEnabled(!1);b.setDepthTestEnabled(!0);b.setDepthWriteEnabled(!0);b.setDepthFunction(h.CompareFunction.LEQUAL);a.renderPass="opaque";for(var f=e.length-1;0<=f;f--)this._renderStyleLayer(e[f],a,c,!1);b.setDepthWriteEnabled(!1);b.setBlendingEnabled(!0);
b.setBlendFunctionSeparate(h.BlendFactor.ONE,h.BlendFactor.ONE_MINUS_SRC_ALPHA,h.BlendFactor.ONE,h.BlendFactor.ONE_MINUS_SRC_ALPHA);a.renderPass="translucent";for(f=0;f<e.length;f++)this._renderStyleLayer(e[f],a,c,!1);b.setDepthTestEnabled(!1);a.renderPass="symbol";for(f=0;f<e.length;f++)this._renderStyleLayer(e[f],a,c,!1);b.bindVAO()};k._renderStyleLayer=function(a,c,d,b=!1){if(b||a&&d.layerData.has(a.uid))if(b=a.getLayoutProperty("visibility"),!b||b.getValue()!==g.Visibility.NONE){({renderPass:b}=
c);switch(a.type){case g.StyleLayerType.BACKGROUND:if("background"!==b)return;var e="vtlBackground";break;case g.StyleLayerType.FILL:if("opaque"!==b&&"translucent"!==c.renderPass)return;e="vtlFill";break;case g.StyleLayerType.LINE:if("translucent"!==b)return;e="vtlLine";break;case g.StyleLayerType.CIRCLE:if("symbol"!==b)return;e="vtlCircle";break;case g.StyleLayerType.SYMBOL:if("symbol"!==b)return;e="vtlSymbol"}b=c.displayLevel;void 0!==a.minzoom&&a.minzoom>b+1E-6||void 0!==a.maxzoom&&a.maxzoom<=
b-1E-6||(c.styleLayerUID=a.uid,c.styleLayer=a,this._drawWithBrush(c,d,e))}};k._drawWithBrush=function(a,c,d){this._brushCache.has(d)||this._brushCache.set(d,new p.vtlBrushes[d]);this._brushCache.get(d).drawMany(a,[c])};m._createClass(l,[{key:"vectorTilesMaterialManager",get:function(){return this._vtlMaterialManager}}]);return l}()});