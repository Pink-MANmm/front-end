// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Collection ../../core/collectionUtils ../../core/Evented ../../core/HandleOwner ../../core/Loadable ../../core/Logger ../../core/maybe ../../core/Promise ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/projection ../../geometry/support/aaBoundingRect ../../geometry/support/intersectsBase ../graphics/data/BoundsStore ./ImageElement ./MediaElementBase ./mediaUtils ./VideoElement ../../geometry/SpatialReference".split(" "),
function(k,l,h,u,v,w,x,y,z,g,A,B,C,p,O,P,Q,D,E,q,F,G,H,I,J,K,L,M){const r=u.ofType({key:"type",defaultKeyValue:"image",base:J,typeMap:{image:I,video:L}});h=function(t){function m(b){var a=t.call(this,b)||this;a._index=new H.BoundsStore;a._elementViewsMap=new Map;a._elementsIndexes=new Map;a._elementsChangedHandler=d=>{for(var f of d.removed){const c=a._elementViewsMap.get(f);a._elementViewsMap.delete(f);a._index.delete(c);a.handles.remove(c);c.destroy();a.notifyChange("fullExtent")}({spatialReference:f}=
k._assertThisInitialized(a));for(const c of d.added){if(a._elementViewsMap.get(c))continue;const e=new K.MediaElementView({spatialReference:f,element:c});a._elementViewsMap.set(c,e);d=C.watch(()=>e.bounds,()=>a._updateIndexForElement(e,!1));a._updateIndexForElement(e,!0);a.handles.add(d,e)}a._elementsIndexes.clear();a.elements.forEach((c,e)=>a._elementsIndexes.set(c,e));a.emit("refresh")};a.elements=new r;return a}k._inheritsLoose(m,t);var n=m.prototype;n.load=function(){var b=k._asyncToGenerator(function*(a){B.throwIfAborted(a);
this.spatialReference||(a=this.elements.find(d=>g.isSome(d.georeference)&&g.isSome(d.georeference.coords)),this._set("spatialReference",a?g.unwrap(g.unwrap(a.georeference).coords).spatialReference:M.WGS84));this._elementsChangedHandler({added:this.elements.items,removed:[]});this.handles.add(this.elements.on("change",this._elementsChangedHandler));return this});return function(a){return b.apply(this,arguments)}}();n.destroy=function(){this._index.clear();this._elementViewsMap.clear();this._elementsIndexes.clear()};
n.queryElements=function(){var b=k._asyncToGenerator(function*(a,d){yield this.load();yield q.initializeProjection(a.spatialReference,this.spatialReference,null,d);a=q.project(a,this.spatialReference);if(!a)return[];a=a.normalize();const f=[];for(const c of a)this._index.forEachInBounds(F.fromExtent(c),({normalizedCoords:e,element:N})=>{g.isSome(e)&&G.extentIntersectsPolygon(c,e)&&f.push(N)});f.sort((c,e)=>this._elementsIndexes.get(c)-this._elementsIndexes.get(e));return f});return function(a,d){return b.apply(this,
arguments)}}();n._updateIndexForElement=function(b,a){const d=b.normalizedBounds,f=this._index.has(b),c=g.isSome(d);this._index.delete(b);c&&this._index.set(b,d);this.notifyChange("fullExtent");a||f===c||this.emit("refresh")};k._createClass(m,[{key:"elements",set:function(b){this._set("elements",v.referenceSetter(b,this._get("elements"),r))}},{key:"fullExtent",get:function(){if("not-loaded"===this.loadStatus)return null;const b=this._index.fullBounds;return g.isNone(b)?null:new E({xmin:b[0],ymin:b[1],
xmax:b[2],ymax:b[3],spatialReference:this.spatialReference})}},{key:"spatialReference",set:function(b){"not-loaded"!==this.loadStatus?z.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded."):this._set("spatialReference",b)}}]);return m}(y.LoadableMixin(A.EsriPromiseMixin(x.HandleOwnerMixin(w.EventedAccessor))));l.__decorate([p.property()],h.prototype,"elements",null);l.__decorate([p.property({readOnly:!0})],h.prototype,"fullExtent",
null);l.__decorate([p.property()],h.prototype,"spatialReference",null);return h=l.__decorate([D.subclass("esri.layers.support.LocalMediaElementSource")],h)});