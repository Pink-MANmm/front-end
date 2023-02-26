// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/promiseUtils ../core/shaderModules/interfaces ./basicInterfaces ./GLMaterial".split(" "),function(k,l,c,q,r,n,m){m=function(h){function e(b){var a=h.call(this,b)||this;a._numLoading=0;a._disposed=!1;a._textureRepository=b.textureRep;a._textureId=b.textureId;a._acquire(b.textureId,d=>a._texture=d);a._acquire(b.normalTextureId,d=>a._textureNormal=d);a._acquire(b.emissiveTextureId,d=>a._textureEmissive=
d);a._acquire(b.occlusionTextureId,d=>a._textureOcclusion=d);a._acquire(b.metallicRoughnessTextureId,d=>a._textureMetallicRoughness=d);return a}l._inheritsLoose(e,h);var f=e.prototype;f.dispose=function(){this._texture=c.releaseMaybe(this._texture);this._textureNormal=c.releaseMaybe(this._textureNormal);this._textureEmissive=c.releaseMaybe(this._textureEmissive);this._textureOcclusion=c.releaseMaybe(this._textureOcclusion);this._textureMetallicRoughness=c.releaseMaybe(this._textureMetallicRoughness);
this._disposed=!0};f.ensureResources=function(b){return 0===this._numLoading?n.ResourceState.LOADED:n.ResourceState.LOADING};f.updateTexture=function(b){if(c.isNone(this._texture)||b!==this._texture.id)this._texture=c.releaseMaybe(this._texture),this._textureId=b,this._acquire(this._textureId,a=>this._texture=a)};f._acquire=function(b,a){c.isNone(b)?a(null):(b=this._textureRepository.acquire(b),q.isPromiseLike(b)?(++this._numLoading,b.then(d=>{this._disposed?(c.releaseMaybe(d),a(null)):a(d)}).finally(()=>
--this._numLoading)):a(b))};l._createClass(e,[{key:"textureBindParameters",get:function(){return new p(c.isSome(this._texture)?this._texture.glTexture:null,c.isSome(this._textureNormal)?this._textureNormal.glTexture:null,c.isSome(this._textureEmissive)?this._textureEmissive.glTexture:null,c.isSome(this._textureOcclusion)?this._textureOcclusion.glTexture:null,c.isSome(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}}]);return e}(m);let p=function(h){function e(f=null,
b=null,a=null,d=null,t=null){var g=h.call(this)||this;g.texture=f;g.textureNormal=b;g.textureEmissive=a;g.textureOcclusion=d;g.textureMetallicRoughness=t;return g}l._inheritsLoose(e,h);return e}(r.NoParameters);k.GLTextureMaterial=m;k.GLTextureMaterialBindParameters=p;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});