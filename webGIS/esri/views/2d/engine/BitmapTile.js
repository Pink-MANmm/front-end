// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/mat3f32","./Bitmap","./webgl/TiledDisplayObject"],function(h,k,l,p,f){f=function(c){function e(a,g,q,m,n,r=null){var d=c.call(this,a,g,q,m,n)||this;d.bitmap=new p.Bitmap(r,"standard",!1);d.bitmap.coordScale=[m,n];d.bitmap.once("isReady",()=>d.ready());return d}k._inheritsLoose(e,c);var b=e.prototype;b.destroy=function(){c.prototype.destroy.call(this);this.bitmap.destroy()};b.beforeRender=function(a){c.prototype.beforeRender.call(this,
a);this.bitmap.beforeRender(a)};b.afterRender=function(a){c.prototype.afterRender.call(this,a);this.bitmap.afterRender(a)};b._createTransforms=function(){return{dvs:l.create(),tileMat3:l.create()}};b.setTransform=function(a,g){c.prototype.setTransform.call(this,a,g);this.bitmap.transforms.dvs=this.transforms.dvs};b.onAttach=function(){this.bitmap.stage=this.stage};b.onDetach=function(){this.bitmap&&(this.bitmap.stage=null)};k._createClass(e,[{key:"stencilRef",get:function(){return this.bitmap.stencilRef},
set:function(a){this.bitmap.stencilRef=a}}]);return e}(f.TiledDisplayObject);h.BitmapTile=f;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});