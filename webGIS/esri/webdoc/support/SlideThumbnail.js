// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(a,h,d,k,l,n,p,q,m){var b;a.SlideThumbnail=b=function(e){function c(){var f=e.apply(this,arguments)||this;f.url="";return f}h._inheritsLoose(c,e);var g=c.prototype;g.destroy=function(){this.url=""};g.clone=function(){return new b({url:this.url})};
return c}(k.JSONSupport);d.__decorate([l.property({type:String,json:{write:{isRequired:!0}}})],a.SlideThumbnail.prototype,"url",void 0);a.SlideThumbnail=b=d.__decorate([m.subclass("esri.webdoc.support.SlideThumbnail")],a.SlideThumbnail);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});