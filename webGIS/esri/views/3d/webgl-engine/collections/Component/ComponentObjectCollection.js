// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/PooledArray ../../../../../chunks/mat3 ../../../../../chunks/mat3f32 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec4f32 ../../../../../chunks/vec32 ../../../../../chunks/vec33 ../../../../ViewingMode ../../../layers/i3s/I3SUtil ../../../layers/support/symbolColorUtils ../../../support/orientedBoundingBox ../../../support/buffer/glUtil ../../../support/buffer/InterleavedLayout ./ComponentData ./ComponentObject ./IntersectionGeometry ./Renderable ./RenderGeometry ./RenderSubmitSystem ./SourceGeometry ./Material/ComponentMaterial ./Material/shader/ComponentData.glsl ../../lib/ComponentUtils ../../lib/Util ../../lib/VertexAttribute ../../lib/verticalOffsetUtils ../../lib/edgeRendering/bufferLayouts ../../lib/edgeRendering/EdgeProcessingWorker ../../lib/TextureBackedBuffer/BufferManager ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject".split(" "),
function(L,M,C,m,N,O,U,w,D,V,W,X,Y,Z,E,F,P,aa,ba,y,ca,da,ea,fa,ha,r,ia,Q,ja,ka,la,ma,na,oa,G,z,pa){function H(u,h){return u===h?r.ComponentParameterSummary.All:0===u?r.ComponentParameterSummary.None:r.ComponentParameterSummary.Some}const R=C.getLogger("esri.views.3d.webgl-engine.collections.Component.ComponentObjectCollection");C=function(){function u(a,b){this._renderManager=a;this._viewingMode=b;this._objects=[new N,new N];this._renderSubmit=new fa.RenderSubmitSystem(this);this._renderManager.register(this._renderSubmit);
this._componentBufferManager=new oa.BufferManager(a.rctx,2)}var h=u.prototype;h.dispose=function(){ja.assert(0===this._objects[y.State.Hidden].length&&0===this._objects[y.State.Visible].length,"ObjectCollection should be empty upon disposal");this._componentBufferManager.destroy()};h.createObject=function(a){const b=new y.ComponentObject;b.toMapSpace=a.toMapSpace;b.transform=a.transform;b.obb=F.clone(a.obb);b.components=new ba(this._componentBufferManager,a.geometry.componentOffsets);b.renderable=
this._createRenderable(a,b.components);b.intersectionGeometry=new ca(a.geometry.positionData,b.components);this._objects[b.visible].push(b);return b};h.destroyObject=function(a){this._objects[a.visible].removeUnordered(a);a.dispose();this._notifyDirty()};h.setObjectVisibility=function(a,b){b!==a.visible&&(this._objects[a.visible].removeUnordered(a),this._objects[b].push(a),a.visible=b,this._notifyDirty())};h.preSubmit=function(a){const b=a.camera.eye;this.visibleObjects.forAll(c=>c.renderable.meta.cameraDepthSquared=
w.squaredDistance(b,c.obb.center))};h.getMaterial=function(a){return a.renderable.material};h.updateMaterial=function(a,b){a=a.renderable.material;b(a);a.dirty&&this._notifyDirty()};h.setAllComponentVisibilities=function(a,b){a.components.visibility.reset(b);a.components.visibilityDirty();this._notifyDirty()};h.forEachVisibleComponent=function(a,b){return a.components.visibility.forEachComponent(b)};h.getComponentCount=function(a){const b=a.components.visibility.componentCount();return{visible:b,
invisible:a.components.count-b}};h.setComponentData=function(a,b){const c=a.renderable.material,d=a.components;var f=d.materialDataBuffer;const k=d.materialDataIndices,e={castShadows:!0,pickable:!0,externalColor:V.create(),externalColorMixMode:E.ColorMixModeEnum.Multiply,elevationOffset:0};f=f.textureBuffer;const g=new Uint8Array(4),l=new Uint32Array(g.buffer);let q=0,n=0,x=0,t=d.verticalOffsets,I=Infinity,J=-Infinity,K=!1,v=!1,S=0;for(let p=0;p<d.count;p++)b(p,e),q+=+(1>e.externalColor[3]),n+=+(e.externalColorMixMode===
E.ColorMixModeEnum.Replace&&1===e.externalColor[3]),x+=+e.castShadows,E.encodeSymbolColor(e.externalColor,e.externalColorMixMode,g),g[2]=g[2]&254|+e.castShadows,f.setData(k[p],0,g[0],g[1],g[2],g[3]),K||(K=0<p&&S!==l[0]),S=l[0],v||(v=0!==e.elevationOffset),v&&m.isNone(t)&&(t=Array(p).fill(0)),m.isSome(t)&&(t[p]=e.elevationOffset),I=Math.min(I,e.elevationOffset),J=Math.max(J,e.elevationOffset),ia.encodeElevationOffset(e.elevationOffset,g),f.setData(k[p],1,g[0],g[1],g[2],g[3]),e.pickable!==Q.getVisibility(d.pickability,
p)&&(d.pickability=Q.updateVisibilityWithCount(d.pickability,d.count,p,e.pickable));d.verticalOffsets=v?t:null;a.offsetObb=v?Z.computeOffsetObb(a.obb,I,J,this._viewingMode,m.isSome(a.offsetObb)?a.offsetObb:F.clone(a.obb)):null;K||v?(c.componentParameters=new r.ComponentParametersVarying,c.componentParameters.castShadows=H(x,d.count),c.componentParameters.transparent=H(q,d.count),c.componentParameters.opaqueOverride=H(n,d.count),c.componentParameters.texture=f,f.updateTexture()):(c.componentParameters=
new r.ComponentParametersUniform,c.componentParameters.castShadows=e.castShadows?r.ComponentParameterSummary.All:r.ComponentParameterSummary.None,c.componentParameters.externalColor=e.externalColor,c.componentParameters.externalColorMixMode=e.externalColorMixMode);this._notifyDirty()};h.getComponentAabb=function(a,b,c,d=!1){a.intersectionGeometry.getComponentAabb(b,c);const f=a.components.verticalOffsets;if(d||m.isNone(f))return c;b=f[b];if(this._viewingMode===Y.ViewingMode.Local||0===b)return c[2]+=
b,c[5]+=b,c;b=m.unwrap(la.getVerticalOffsetI3S(b));b.localOrigin=a.transform.position;return b.applyToAabb(c)};h.getComponentObb=function(a){return a.obb};h.getObjectTransform=function(a){return a.transform};h.getComponentPositions=function(a,b,c){return a.intersectionGeometry.getComponentPositions(b,c)};h.intersect=function(a,b,c,d,f,k){m.isSome(f)&&(f.localOrigin=a.transform.position);const e=O.invert(T,a.transform.rotationScale);w.sub(A,b,a.transform.position);w.sub(B,c,a.transform.position);w.transformMat3(A,
A,e);w.transformMat3(B,B,e);b=O.transpose(T,e);return a.intersectionGeometry.intersect(A,B,d,b,f,a.components.verticalOffsets,k)};h.addEdges=function(a,b,c,d){const {indices:f,positions:k}=a.intersectionGeometry,e=a.components.offsets;return b.addComponentObject(a,a.transform,{center:a.obb.center,radius:F.radius(a.obb)},k,f,e,c,d)};h.extractEdgeInformation=function(){var a=M._asyncToGenerator(function*(b,c,d){var f=b.components.visibility;if(f.allInvisible())return{buffer:na.extractComponentsEdgeLocationsLayout.createBuffer(0),
origin:[0,0,0]};const {indices:k,positions:e}=b.intersectionGeometry,g=b.components.offsets,l=ma.EdgeInputBufferLayout.createBuffer(e.count);X.copy(l.position,e);W.transformMat3(l.position,l.position,b.transform.rotationScale);this._setComponentIndices(l.componentIndex,k,g);f=this._computeVisibilityIndices(k,f,g,l.count);b=D.clone(b.transform.position);c=yield c.extractComponentsEdgeLocations({indices:f,indicesLength:f.length,skipDeduplicate:!0,data:l,writerSettings:{reducedPrecision:!1,variants:0}},
d);return{origin:b,buffer:c}});return function(b,c,d){return a.apply(this,arguments)}}();h._setComponentIndices=function(a,b,c){let d=0;for(let k=0;k<c.length-1;k++){var f=c[k];const e=c[k+1];for(;f<e;f++)a.set(b?b[f]:f,d);d++}};h._computeVisibilityIndices=function(a,b,c,d){if(a&&b.allVisible())return a;let f=0;b.forEachComponentRange((g,l)=>{f+=c[l]-c[g];return!0});const k=2===(null==a?void 0:a.BYTES_PER_ELEMENT)||65536>=d?new Uint16Array(f):new Uint32Array(f);let e=0;b.forEachComponentRange((g,
l)=>{g=c[g];for(l=c[l];g<l;g++)k[e++]=a?a[g]:g;return!0});return k};h.addComponentHighlight=function(a,b){a=a.components;m.isNone(a.highlightCounts)&&(a.highlightCounts=new Uint32Array(a.count+1));0===a.highlightCounts[b]++&&(a.highlightsDirty(),this._notifyDirty());a.highlightCounts[a.count]++};h.removeComponentHighlight=function(a,b){a=a.components;if(m.isNone(a.highlightCounts))R.warn("Removing non-existing highlight.");else{var c=a.highlightCounts[b],d=a.highlightCounts[a.count];0===c?R.warn("Removing non-existing highlight."):
1<c?(a.highlightCounts[b]=c-1,a.highlightCounts[a.count]=d-1):(a.highlightCounts[b]=0,a.highlightsDirty(),this._notifyDirty(),1===d?a.highlightCounts=null:a.highlightCounts[a.count]=d-1)}};h.clearHighlights=function(a){a=a.components;m.isSome(a.highlightCounts)&&(a.highlightCounts=null,a.highlightsDirty(),this._notifyDirty())};h.getObjectGPUMemoryUsage=function(a){return a.renderable.meta.gpuMemoryEstimate};h._createRenderable=function(a,b){const c=this._renderManager.rctx,d=a.geometry;var f=d.vertices.layoutParameters,
k=G.BufferObject.createVertex(c,z.Usage.STATIC_DRAW,d.vertices.data);const e=m.applySome(d.indices,n=>G.BufferObject.createIndex(c,z.Usage.STATIC_DRAW,n));var g=P.glLayout(ha.createVertexBufferLayout(f));const l=new Uint16Array(d.vertices.count);for(let n=0;n<b.count;n++){var q=b.offsets[n];const x=b.offsets[n+1],t=b.materialDataIndices[n];if(m.isSome(d.indices))for(;q<x;q++)l[d.indices[q]]=t;else for(;q<x;q++)l[q]=t}b=G.BufferObject.createVertex(c,z.Usage.STATIC_DRAW,l.buffer);a=new r.ComponentMaterial(a.transform,
a.toMapSpace);g=new pa.VertexArrayObject(c,a.attributeLocations,{data:g,componentIndices:qa},{data:k,componentIndices:b},m.unwrap(e));f=new ea.RenderGeometry(g,z.PrimitiveType.TRIANGLES,f,m.isSome(e));k={cameraDepthSquared:.5,gpuMemoryEstimate:k.byteSize+b.byteSize+(m.isSome(e)?e.byteSize:0)};return new da.Renderable(a,f,k)};h._notifyDirty=function(){this._renderManager.notifyDirty()};M._createClass(u,[{key:"visibleObjects",get:function(){return this._objects[y.State.Visible]}}]);return u}();const qa=
P.glLayout(aa.newLayout().u16(ka.VertexAttribute.COMPONENTINDEX)),T=U.create(),A=D.create(),B=D.create();L.ComponentObjectCollection=C;Object.defineProperties(L,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});