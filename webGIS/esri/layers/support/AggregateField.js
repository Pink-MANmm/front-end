// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./OutStatistic".split(" "),function(h,b,a,f,m,n,p,k,l){var c;a=c=function(g){function d(){var e=g.apply(this,arguments)||this;e.name=null;e.outStatistic=null;return e}h._inheritsLoose(d,g);d.prototype.clone=function(){return new c({name:this.name,
outStatistic:this.outStatistic.clone()})};return d}(a.JSONSupport);b.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([f.property({type:l,json:{write:!0}})],a.prototype,"outStatistic",void 0);return a=c=b.__decorate([k.subclass("esri.layers.support.AggregateField")],a)});