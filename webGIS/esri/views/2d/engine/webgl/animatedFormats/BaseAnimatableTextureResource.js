// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Error ../../../../../core/maybe ../../../../../core/promiseUtils ../definitions ./utils".split(" "),function(f,m,n,p,q,g,r){let u=function(){function h(b){this._requestRender=b;this._frameData=null}var e=h.prototype;e.destroy=function(){this._playHandle.remove()};e.bindFrame=function(b,c,d){b.bindTexture(c,d);p.isNone(this._frameData)||(c.updateData(0,g.SPRITE_PADDING,g.SPRITE_PADDING,this._frameData.width,this._frameData.height,
this._frameData),this._frameData=null)};e._load=function(){var b=m._asyncToGenerator(function*(c,d,k,l){try{const a=yield this._loadAnimation(c,t=>{this._frameData=t;this._requestRender.requestRender()},l);this.frameCount=a.frameDurations.length;this.width=a.width;this.height=a.height;this._playHandle=r.play(a,d,k)}catch(a){if(!q.isAbortError(a))return new n("invalid-resource","Could not parse animated resource.")}});return function(c,d,k,l){return b.apply(this,arguments)}}();return h}();f.BaseAnimatableTextureResource=
u;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});