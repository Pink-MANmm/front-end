// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../SmartMappingSliderViewModel".split(" "),function(k,f,l,b,w,x,r,t){b=function(m){function c(a){a=m.call(this,a)||this;a.zoomingEnabled=!1;return a}k._inheritsLoose(c,m);c.prototype.getStopInfo=function(){const {breaks:a,max:d,min:n}=this,g=
d-n;if(!a||!a.length||!g)return[];const p=[];a.forEach(e=>{const {color:q,max:u,min:v}=e;let h;d===n?e=h=0:(e=(d-v)/g,h=(d-u)/g);p.push({offset:e,color:q},{offset:h,color:q})});return p};k._createClass(c,[{key:"breaks",get:function(){return this.breaks}}]);return c}(t);f.__decorate([l.property()],b.prototype,"breaks",null);f.__decorate([l.property({readOnly:!0})],b.prototype,"zoomingEnabled",void 0);return b=f.__decorate([r.subclass("esri.widgets.smartMapping.ClassedColorSlider.ClassedColorSliderViewModel")],
b)});