// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Logger ../../../core/maybe ../../../core/PooledArray ../../../core/workers/WorkerHandle ../../../geometry/projection ../../../libs/i3s/enums".split(" "),function(q,x,r,y,z,A,v,h){function w(c,f,l){a.clear();var b=Infinity;let d=Infinity,m=-Infinity,k=-Infinity,t=!1;for(const u of f){var e="clip"===u.type?h.ModificationType.Inside:"mask"===u.type?h.ModificationType.Outside:h.ModificationType.Replace;const n=u.geometry;f=g=>g;if(n.spatialReference){if(!v.canProjectWithoutEngine(n.spatialReference,
l)){B.warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}f=g=>{v.projectVectorToVector(g,n.spatialReference,p,l);return p}}else n.hasZ||(p[2]=0,f=g=>{p[0]=g[0];p[1]=g[1];return p});t=t||e===h.ModificationType.Outside;a.push(e);a.push(n.rings.length);for(const g of n.rings){a.push(g.length);for(const C of g)e=f(C),a.push(e[0]),a.push(e[1]),a.push(e[2]),b=Math.min(b,e[0]),d=Math.min(d,e[1]),m=Math.max(m,e[0]),k=Math.max(k,e[1])}}y.isSome(c)&&(t?(a.push(h.ModificationType.Inside),
a.push(2),a.push(4),a.push(b-1E-4),a.push(d-1E-4),a.push(0),a.push(m+1E-4),a.push(d-1E-4),a.push(0),a.push(m+1E-4),a.push(k+1E-4),a.push(0),a.push(b-1E-4),a.push(k+1E-4),a.push(0)):(a.push(h.ModificationType.Outside),a.push(1)),a.push(4),a.push(c[0]),a.push(c[1]),a.push(0),a.push(c[2]),a.push(c[1]),a.push(0),a.push(c[2]),a.push(c[3]),a.push(0),a.push(c[0]),a.push(c[3]),a.push(0));a.push(h.ModificationType.Finished);c=new Float64Array(a.length);for(b=0;b<a.length;++b)c[b]=a.getItemAt(b);return c}const B=
r.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle");r=function(c){function f(b){return c.call(this,"SceneLayerWorker","process",{process:d=>[d.geometryBuffer]},b,{hasInitialize:!0})||this}x._inheritsLoose(f,c);var l=f.prototype;l.setModifications=function(b,d,m,k){b={context:b,modifications:w(d,m,k),isGeodetic:k.isGeographic};this.broadcast(b,"setModifications")};l.setLegacySchema=function(b,d){d=JSON.stringify(d);this.broadcast({context:b,jsonSchema:d},"setLegacySchema")};l.destroyContext=function(b){return this.broadcast(b,
"destroyContext")};return f}(A.WorkerHandle);const a=new z({deallocator:null}),p=[0,0,0];q.I3SMeshWorkerHandle=r;q.toWasmModification=w;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});