// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,f,l,m,n,k){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.returnTopmostRaster=null;b.showNoDataRecords=null;return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({showNoDataRecords:this.showNoDataRecords,
returnTopmostRaster:this.returnTopmostRaster})};return e}(a.JSONSupport);c.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"returnTopmostRaster",void 0);c.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"showNoDataRecords",void 0);return a=d=c.__decorate([k.subclass("esri.popup.LayerOptions")],a)});