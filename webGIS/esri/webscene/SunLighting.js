// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer".split(" "),function(p,c,b,f,r,t,u,m,q,g){var h;b=h=function(n){function k(a){a=n.call(this,a)||this;a.type="sun";a.date=null;a.directShadowsEnabled=!1;a.displayUTCOffset=null;return a}
p._inheritsLoose(k,n);var e=k.prototype;e.readDate=function(a,d){return null!=d.datetime&&new Date(d.datetime)||null};e.writeDate=function(a,d,l){d[l]=a.getTime()};e.readDirectShadowsEnabled=function(a,d){return!!d.directShadows};e.writedirectShadowsEnabled=function(a,d,l){a&&(d[l]=a)};e.writeDisplayUTCOffset=function(a,d){null!=a&&(d.displayUTCOffset=a)};e.clone=function(){return new h(this.cloneConstructProperties())};e.cloneConstructProperties=function(){const a={directShadowsEnabled:this.directShadowsEnabled,
displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};null!=this.date&&(a.date=new Date(this.date.getTime()));return a};return k}(b.JSONSupport);c.__decorate([f.property({readOnly:!0,type:["sun"],json:{write:!0}})],b.prototype,"type",void 0);c.__decorate([f.property({type:Date,json:{type:Number,write:{target:"datetime"}}})],b.prototype,"date",void 0);c.__decorate([m.reader("date",["datetime"])],b.prototype,"readDate",null);c.__decorate([g.writer("date")],b.prototype,"writeDate",
null);c.__decorate([f.property({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],b.prototype,"directShadowsEnabled",void 0);c.__decorate([m.reader("directShadowsEnabled",["directShadows"])],b.prototype,"readDirectShadowsEnabled",null);c.__decorate([g.writer("directShadowsEnabled")],b.prototype,"writedirectShadowsEnabled",null);c.__decorate([f.property({type:Number,json:{write:!0}})],b.prototype,"displayUTCOffset",void 0);c.__decorate([g.writer("displayUTCOffset")],b.prototype,"writeDisplayUTCOffset",
null);return b=h=c.__decorate([q.subclass("esri.webscene.SunLighting")],b)});