// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../../chunks/vec2f32 ../../../../layers/support/rasterFunctions/pixelUtils ../DisplayObject ../../../webgl/enums ../../../webgl/rasterUtils".split(" "),function(l,m,n,h,v,p,w,q,u,r){const x={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,
stretchType:"none",type:"stretch"};q=function(k){function g(a=null,b=null,d=null){var c=k.call(this)||this;c._textureInvalidated=!0;c._colormapTextureInvalidated=!0;c._supportsBilinearTexture=!0;c.stencilRef=0;c.coordScale=[1,1];c._symbolizerParameters=null;c.height=null;c.isRendereredSource=!1;c.pixelRatio=1;c.resolution=0;c.rotation=0;c._source=null;c.rawPixelData=null;c._suspended=!1;c._bandIds=null;c._interpolation=null;c._transformGrid=null;c.width=null;c.x=0;c.y=0;c.source=a;c.transformGrid=
b;c.interpolation=d;return c}m._inheritsLoose(g,k);var e=g.prototype;e.destroy=function(){const a=this.getTextures();null==a?void 0:a.textures.forEach(b=>b.dispose());this._colormapTexture=this._transformGridTexture=this._rasterTexture=null};e.invalidateTexture=function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())};e._createTransforms=function(){return{dvs:v.create()}};e.setTransform=function(a){const b=h.identity(this.transforms.dvs),[d,c]=a.toScreenNoRotation([0,
0],[this.x,this.y]);var f=this.resolution/this.pixelRatio/a.resolution;const t=f*this.width;f*=this.height;const y=Math.PI*this.rotation/180;h.translate(b,b,p.fromValues(d,c));h.translate(b,b,p.fromValues(t/2,f/2));h.rotate(b,b,-y);h.translate(b,b,p.fromValues(-t/2,-f/2));h.scaleByVec2(b,b,p.fromValues(t,f));h.multiply(this.transforms.dvs,a.displayViewMat3,b)};e.getTextures=function(){if(!this._rasterTexture)return null;const a=[],b=[];this._transformGridTexture&&(b.push(this._transformGridTexture),
a.push("u_transformGrid"));this._rasterTexture&&(b.push(this._rasterTexture),a.push("u_image"));this._colormapTexture&&(b.push(this._colormapTexture),a.push("u_colormap"));return{names:a,textures:b}};e.onAttach=function(){this.invalidateTexture()};e.onDetach=function(){this.invalidateTexture()};e.updateTexture=function({context:a}){if(this.stage){var b=this._isValidSource(this.source);b&&this._colormapTextureInvalidated&&(this._colormapTextureInvalidated=!1,this._updateColormapTexture(a));this._textureInvalidated&&
(this._textureInvalidated=!1,this._createOrDestroyRasterTexture(a),this._rasterTexture&&(b?this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=r.createTransformTexture(a,this.transformGrid)):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender()))}else{var d,c;null==(b=this._rasterTexture)?void 0:b.dispose();null==(d=this._transformGridTexture)?void 0:d.dispose();null==(c=this._colormapTexture)?void 0:c.dispose();this._colormapTexture=this._transformGridTexture=
this._rasterTextureBandIds=this._rasterTexture=null}};e._createOrDestroyRasterTexture=function(a){var b,d;const c=n.isSome(this.source)?w.extractBands(this.source,this.bandIds):null;if(this._isValidSource(c)){var f=!this._isBandIdschanged(this.bandIds);if(this._rasterTexture){if(f)return;this._rasterTexture.dispose();this._rasterTexture=this._rasterTextureBandIds=null}this._supportsBilinearTexture=null==(b=a.capabilities.textureFloat)?void 0:b.textureFloatLinear;b=this._getTextureSamplingMethod(this.interpolation);
f=this.isRendereredSource||!(null!=(d=a.capabilities.textureFloat)&&d.textureFloat);this._rasterTexture=r.createRasterTexture(a,c,b,f);this._rasterTextureBandIds=this.bandIds?[...this.bandIds]:null}else this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=this._rasterTextureBandIds=null)};e._isBandIdschanged=function(a){const b=this._rasterTextureBandIds;return!(null==b&&null==a||b&&a&&b.join("")===a.join(""))};e._isValidSource=function(a){var b;return n.isSome(a)&&0<(null==(b=
a.pixels)?void 0:b.length)};e._getTextureSamplingMethod=function(a){const {type:b,colormap:d}=this.symbolizerParameters,c="lut"===b||"stretch"===b&&n.isSome(d);return!this._supportsBilinearTexture||c||"bilinear"!==a&&"cubic"!==a?"nearest":"bilinear"};e._updateColormapTexture=function(a){const b=this._colormap,d=this.symbolizerParameters.colormap;if(!d)this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormap=null;else if(!b)this._colormapTexture=r.createColormapTexture(a,
d),this._colormap=d;else if(d.length!==b.length||d.some((c,f)=>c!==b[f]))this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=r.createColormapTexture(a,d),this._colormap=d};m._createClass(g,[{key:"symbolizerParameters",get:function(){return this._symbolizerParameters||x},set:function(a){this._symbolizerParameters!==a&&(this._symbolizerParameters=a,this._colormapTextureInvalidated=!0)}},{key:"source",get:function(){return this._source},set:function(a){this._source!==
a&&(this._source=a,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=this._rasterTexture=null),this.invalidateTexture())}},{key:"suspended",get:function(){return this._suspended},set:function(a){this._suspended&&!a&&this.stage&&(this.ready(),this.requestRender());this._suspended=a}},{key:"bandIds",get:function(){return this._bandIds},set:function(a){this._bandIds=a;this._isBandIdschanged(a)&&this.invalidateTexture()}},{key:"interpolation",get:function(){return this._interpolation||
"nearest"},set:function(a){this._interpolation=a;this._rasterTexture&&this._rasterTexture.setSamplingMode("bilinear"===this._getTextureSamplingMethod(a)?u.TextureSamplingMode.LINEAR:u.TextureSamplingMode.NEAREST)}},{key:"transformGrid",get:function(){return this._transformGrid},set:function(a){this._transformGrid=a;this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null)}}]);return g}(q.DisplayObject);let z=function(k){function g(){return k.apply(this,arguments)||
this}m._inheritsLoose(g,k);m._createClass(g,[{key:"source",get:function(){return this._source}}]);return g}(q);l.RasterBitmap=q;l.RasterBitmapWithSource=z;l.hasSource=function(k){return n.isSome(k.source)};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});