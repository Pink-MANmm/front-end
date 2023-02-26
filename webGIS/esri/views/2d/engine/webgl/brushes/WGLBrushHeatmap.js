// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Logger ../../../../../core/maybe ../enums ../VertexStream ./WGLGeometryBrushMarker ../techniques/utils ../../../../webgl/context-util ../../../../webgl/enums ../../../../webgl/FramebufferObject ../../../../webgl/Texture".split(" "),function(A,B,r,C,D,E,w,F,b,G,x){const y=B.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap"),H={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",
0]])};return function(u){function v(){return u.apply(this,arguments)||this}A._inheritsLoose(v,u);var m=v.prototype;m.supportsSymbology=function(a){return a===C.WGLSymbologyType.HEATMAP};m.dispose=function(){u.prototype.dispose.call(this);this._accumulateOutputTexture=r.disposeMaybe(this._accumulateOutputTexture);this._accumulateFramebuffer=r.disposeMaybe(this._accumulateFramebuffer);this._resolveGradientTexture=r.disposeMaybe(this._resolveGradientTexture);this._tileQuad=r.disposeMaybe(this._tileQuad)};
m.drawGeometry=function(a,e,f,g){const {defines:c}=this._loadQualityProfile(a.context);u.prototype.drawGeometry.call(this,a,e,f,g?[...g,...c]:c)};m._drawMarkers=function(a,e,f,g,c,l,k){const {context:d}=a,h=d.getBoundFramebufferObject(),n=d.getViewport();this._prepareAccumulatePass(a,e,f,k);d.drawElements(g,c,b.DataType.UNSIGNED_INT,l);k||this._drawResolvePass(a,e,h,n)};m._prepareAccumulatePass=function(a,e,f,g){const {context:c,rendererInfo:l,state:k,displayLevel:d}=a;({rendererSchema:a}=l);w.assertRendererSchema(a,
"heatmap");const {referenceScale:h,radius:n,isFieldActive:t}=a;this._loadResources(c);this._updateResources(a);f.setUniform1f("u_radius",n*(0!==h?h/k.scale:1)*2**(e.key.level-d));g||(c.bindFramebuffer(this._accumulateFramebuffer),f.setUniform1f("u_isFieldActive",t),c.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),c.setBlendingEnabled(!0),c.setBlendFunction(b.BlendFactor.ONE,b.BlendFactor.ONE),c.setClearColor(0,0,0,0),c.clear(b.ClearBufferBit.COLOR_BUFFER_BIT))};
m._drawResolvePass=function(a,e,f,g){const {context:c,painter:l,rendererInfo:k}=a;var {rendererSchema:d}=k;w.assertRendererSchema(d,"heatmap");const {radius:h,minDensity:n,densityRange:t}=d;({defines:d}=this._loadQualityProfile(c));d=l.materialManager.getProgram(H,d);c.useProgram(d);this._setSharedUniforms(d,a,e);c.bindFramebuffer(f);c.setViewport(0,0,g.width,g.height);c.setBlendFunction(b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA);c.bindTexture(this._accumulateOutputTexture,8);c.bindTexture(this._resolveGradientTexture,
9);d.setUniform1i("u_texture",8);d.setUniform1i("u_gradient",9);d.setUniform2f("u_densityMinAndInvRange",n,1/t);d.setUniform1f("u_densityNormalization",3/(h*h*Math.PI));this._tileQuad.draw()};m._loadResources=function(a){var e,f,g,c;const l=a.type===F.ContextType.WEBGL2,{dataType:k,samplingMode:d,shadingRate:h}=this._loadQualityProfile(a);null!=(e=this._accumulateOutputTexture)?e:this._accumulateOutputTexture=new x.Texture(a,{target:b.TextureType.TEXTURE_2D,pixelFormat:l?b.PixelFormat.RED:b.PixelFormat.RGBA,
internalFormat:l?k===b.PixelType.FLOAT?b.SizedPixelFormat.R32F:b.SizedPixelFormat.R16F:b.PixelFormat.RGBA,dataType:k,samplingMode:d,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,width:Math.round(512*h),height:Math.round(512*h)});null!=(f=this._accumulateFramebuffer)?f:this._accumulateFramebuffer=new G.FramebufferObject(a,{},this._accumulateOutputTexture);null!=(g=this._resolveGradientTexture)?g:this._resolveGradientTexture=new x.Texture(a,{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGBA,
dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.LINEAR,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE});null!=(c=this._tileQuad)?c:this._tileQuad=new D(a,[0,0,1,0,0,1,1,1])};m._updateResources=function(a){const {gradientHash:e,gradient:f}=a;this._prevGradientHash!==e&&(this._resolveGradientTexture.resize(f.length/4,1),this._resolveGradientTexture.setData(f),this._prevGradientHash=e)};m._loadQualityProfile=function(a){if(r.isNone(this._qualityProfile)){const {textureFloat:e,colorBufferFloat:f}=
a.capabilities,{textureFloat:g,textureFloatLinear:c,textureHalfFloat:l,textureHalfFloatLinear:k,HALF_FLOAT:d}=e,{textureFloat:h,textureHalfFloat:n,floatBlend:t}=f;let p,q;a=g&&h&&t;const z=l&&n;a&&c?(p=b.PixelType.FLOAT,q=b.TextureSamplingMode.LINEAR):z&&k?(p=d,q=b.TextureSamplingMode.LINEAR):a?(p=b.PixelType.FLOAT,q=b.TextureSamplingMode.NEAREST):z?(p=d,q=b.TextureSamplingMode.NEAREST):y.error("Missing webgl extensions for heatmap!");q===b.TextureSamplingMode.NEAREST&&y.warnOnce("Missing linear filtering webgl extension(s). Heatmap quality may be reduced.");
this._qualityProfile={dataType:p,samplingMode:q,shadingRate:.5,defines:p===d?["heatmapPrecisionHalfFloat"]:[]}}return this._qualityProfile};return v}(E)});