// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ./DynamicLayerView3D ../../layers/ImageryLayerView".split(" "),function(f,n,l,p,q,h,v,w,x,y,r,t,u){h=function(m){function k(){var b=m.apply(this,arguments)||this;
b.type="imagery-3d";b.redrawDebounced=p.debounce(function(){var a=f._asyncToGenerator(function*(d){b.redraw((c,g)=>b._redrawImage(c,g),d)});return function(d){return a.apply(this,arguments)}}(),2E3);return b}f._inheritsLoose(k,m);var e=k.prototype;e.initialize=function(){this.handles.add([q.when(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]);this.updatingHandles.add(()=>
{var b,a;return null==(b=this.layer)?void 0:null==(a=b.exportImageServiceParameters)?void 0:a.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())});this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))};e._initializeMaximumDataResolution=function(){const b=this.view.basemapTerrain.spatialReference,a=this.layer.fullExtent;a&&b.equals(a.spatialReference);this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}};
e.getFetchOptions=function(){return{timeExtent:this.timeExtent}};e.processResult=function(){var b=f._asyncToGenerator(function*(a,d,c){d.imageElement?a.image=d.imageElement:(a.image=document.createElement("canvas"),a.pixelData=d.pixelData,yield this._redrawImage(a,c))});return function(a,d,c){return b.apply(this,arguments)}}();e._redrawImage=function(){var b=f._asyncToGenerator(function*(a,d){if(!(a.image instanceof HTMLCanvasElement)||l.isNone(a.pixelData))throw Error();var c=a.image;const g=c.getContext("2d");
a=yield this.layer.applyRenderer(a.pixelData,{signal:d});a=this.layer.applyFilter(a).pixelBlock;if(l.isNone(a))throw Error();c.width=a.width;c.height=a.height;c=g.createImageData(a.width,a.height);c.data.set(a.getAsRGBA());g.putImageData(c,0,0)});return function(a,d){return b.apply(this,arguments)}}();return k}(u(t));return h=n.__decorate([r.subclass("esri.views.3d.layers.ImageryLayerView3D")],h)});