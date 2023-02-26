// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/vec2 ../../chunks/vec2f64 ./viewpointUtils ./ViewState".split(" "),function(n,c,g,t,h,z,A,B,u,p,x,y,v){var q,r;let d=q=function(k){function e(){var a=k.apply(this,arguments)||this;a.left=0;a.top=0;a.right=
0;a.bottom=0;return a}n._inheritsLoose(e,k);e.prototype.clone=function(){return new q({left:this.left,top:this.top,right:this.right,bottom:this.bottom})};return e}(g);c.__decorate([h.property()],d.prototype,"left",void 0);c.__decorate([h.property()],d.prototype,"top",void 0);c.__decorate([h.property()],d.prototype,"right",void 0);c.__decorate([h.property()],d.prototype,"bottom",void 0);d=q=c.__decorate([u.subclass("esri.views.2d.PaddedViewState.Padding")],d);g=r=function(k){function e(...a){var b=
k.call(this,...a)||this;b.paddedViewState=new v;b._updateContent=(()=>{const f=x.create();return()=>{var m=b._get("size");const l=b._get("padding");if(m&&l){var w=b.paddedViewState;p.set(f,l.left+l.right,l.top+l.bottom);p.subtract(f,m,f);p.copy(w.size,f);if(m=w.viewpoint)b.viewpoint=m}}})();b.own(t.watch(()=>[b.size,b.padding],()=>b._updateContent(),t.sync));b.padding=new d;b.size=[0,0];return b}n._inheritsLoose(e,k);e.prototype.clone=function(){return new r({padding:this.padding.clone(),size:this.size.slice(),
viewpoint:this.paddedViewState.viewpoint.clone(),pixelRatio:this.pixelRatio})};n._createClass(e,[{key:"padding",set:function(a){this._set("padding",a||new d)}},{key:"viewpoint",set:function(a){if(a){const b=a.clone();this.paddedViewState.viewpoint=a;y.addPadding(b,a,this._get("size"),this._get("padding"));a=this._viewpoint2D;const f=b.targetGeometry;a.center[0]=f.x;a.center[1]=f.y;a.rotation=b.rotation;a.scale=b.scale;a.spatialReference=f.spatialReference;this._update()}}}]);return e}(v);c.__decorate([h.property()],
g.prototype,"paddedViewState",void 0);c.__decorate([h.property({type:d})],g.prototype,"padding",null);c.__decorate([h.property()],g.prototype,"viewpoint",null);return g=r=c.__decorate([u.subclass("esri.views.2d.PaddedViewState")],g)});