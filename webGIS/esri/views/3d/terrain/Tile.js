// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/ObjectPool ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/common ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../../../chunks/sphere ../../2d/engine/vectorTiles/VectorTile ../support/StreamDataLoader ./ElevationBounds ./ElevationTileAgent ./interfaces ./LayerClass ./MapTileAgent ./RasterTile ./TerrainConst ./terrainUtils ./TileAgent ./TilePerLayerInfo ./TileTexture ./TileUpdate ./tileUtils ../../webgl/Util".split(" "),
function(q,W,X,w,M,E,Y,m,z,N,Z,F,aa,G,ba,O,P,p,r,Q,ca,C,l,v,H,da,n,I,R){function ea(g,e,a,b){const c=a===r.LayerClass.ELEVATION?J.acquire():K.acquire();c.init(g,e,a,b);return c}function D(g){g.dispose();g instanceof P.ElevationTileAgent?J.release(g):g instanceof Q.MapTileAgent&&K.release(g)}function x(g,e,a){return Math.abs(g-e)<=a}function S(g,e,a){return w.isNone(g)||w.isNone(e)||e===g?!1:g.level>=e.level?T(g,e,a):T(e,g,l.oppositeCorner(a))}function T(g,e,a){l.internalAssert(g.level>=e.level);var b=
l.isWestCorner(a),c=l.isNorthCorner(a);a=g.extent;const d=e.extent;var f=[b?a[0]:a[2],c?a[3]:a[1]];const k=[b?d[2]:d[0],c?d[1]:d[3]];b=1E-5*(a[2]-a[0]);c=x(f[0],k[0],b)||g.surface.isGlobal&&x(f[0],-k[0],b);f=x(f[1],k[1],b);return c&&f?!0:g.level===e.level||!c&&!f?!1:c?U(d[1],d[3],a[1],a[3],b):U(d[0],d[2],a[0],a[2],b)}function U(g,e,a,b,c=N.EPSILON){return g-c<=a&&a<=b&&b<=e+c}const L=z.create(),A=z.create(),t=z.create();let ha=function(){function g(){this.lij=[0,0,0];this._children=[null,null,null,
null];this._pendingUpdates=0;this._dirty=!0;this._previouslyRendered=!1;this.extent=F.create();this._elevationBounds=Y.create();this.layerInfo=[[],[]];this.extentInRadians=F.create();this.centerAtSeaLevel=z.create();this._center=[z.create(),aa.create(),z.create()];this.up=z.unitZ();this._intersectsClippingArea=this._isWithinClippingArea=!0;this._maxTesselation=0;this._usedMemory=null;this._curvatureHeight=this._edgeLen2=this._edgeLen=this.renderOrder=this._screenDepth=this._mapDataRefCount=this._mapTileMemory=
0}g.prune=function(){K.prune(0);J.prune(0);H.TilePerLayerInfo.prune()};var e=g.prototype;e.computeVisibility=function(){this._dirty=!1;const a=this._intersectsClippingArea&&this._isVisible(this.surface.frustum);a!==this._visible&&(this._visible=a,this._surface.emit("tiles-visibility-changed"),this._surface.renderer.setNeedsRender(),this.updateAgentSuspension());return this._visible};e.init=function(a,b,c){this.lij[0]=a[0];this.lij[1]=a[1];this.lij[2]=a[2];this.ellipsoid=Z.getReferenceEllipsoid(c.tilingScheme.spatialReference);
c.tilingScheme.getExtent(a[0],a[1],a[2],this.extent);c.tilingScheme.convertExtentToRadians(this.extent,this.extentInRadians);this._intersectsClippingArea=this._isWithinClippingArea=!0;this._clippingArea=null;this._mapDataRefCount=0;c.upsampleMapCache.pop(this.key);this._edgeLen2=this._edgeLen=0;this._center[q.CenterPosition.MIDDLE][3]=0;this.vlevel=a?a[0]:0;b&&b.elevationBounds?E.copy(this._elevationBounds,b.elevationBounds):E.set(this._elevationBounds,0,0);this._pendingUpdates=0;this.renderData=
null;this._screenDepth=0;this._previouslyRendered=this._visible=!1;this._parent=b;this.unsetChildren();this._surface=c;this.updateVisibility();for(const d of r.LayerClasses){a=c.numLayers(d);b=this.layerInfo[d];for(const f of b)f.release();b.length=a;for(let f=0;f<a;f++)b[f]=H.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool),d===r.LayerClass.ELEVATION&&this.findElevationBoundsForLayer(f,-1)}this.computeElevationBounds();this._maxTesselation=Math.min(c.tilingScheme.pixelSize,C.MAX_PATCH_TESSELATION)};
e.release=function(){l.weakAssert(!this.renderData,"tile.renderData was not unloaded");this._surface.upsampleMapCache.pop(this.key);for(const a of r.LayerClasses){for(const b of this.layerInfo[a])b.release();this.layerInfo[a].length=0}this._surface=this._parent=null;this.setMemoryDirty()};e.refMapData=function(){++this._mapDataRefCount;this.isCached||this._surface.upsampleMapCache.pop(this.key)};e.unrefMapData=function(){--this._mapDataRefCount;if(this.isCached){this.setMemoryDirty();const a=this.cachedMemory;
0<a&&this._surface.upsampleMapCache.put(this.key,this,a)}};e.setMemoryDirty=function(){this._usedMemory=null};e._ensureUsedMemory=function(){if(w.isSome(this._usedMemory))return this._usedMemory;let a=this._mapTileMemory=this._usedMemory=0;for(var {data:b}of this.layerInfo[r.LayerClass.MAP])b instanceof G.VectorTile?a+=this._getTerrainDataMemory(b):this._mapTileMemory+=this._getTerrainDataMemory(b);b=this.cpuImageMemorySize;for(const c of this.layerInfo[r.LayerClass.ELEVATION])this._usedMemory+=c.data?
b:0;this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,this._mapTileMemory+=R.getGpuMemoryUsage(this.renderData.textureDescriptor));this.isCached&&this._surface.upsampleMapCache.updateSize(this.key,this,this._mapTileMemory+a);return this._usedMemory};e.getUsedMemoryForLayer=function(a,b){b=this.layerInfo[a][b];return null!=b&&b.data?a===r.LayerClass.MAP?this.isCached?0:this._getTerrainDataMemory(b.data):a===r.LayerClass.ELEVATION?this.cpuImageMemorySize:0:0};e._getTerrainDataMemory=
function(a){return a instanceof da?R.getGpuMemoryUsage(a.texture):a instanceof HTMLImageElement||a instanceof ba.ImageWithType?this.cpuImageMemorySize:a instanceof G.VectorTile||a instanceof ca.RasterTile?a.memoryUsage:0};e.updateScreenDepth=function(a){var b=this._center[q.CenterPosition.MIDDLE];const c=b[0],d=b[1];b=b[2];const f=a[2]*c+a[6]*d+a[10]*b+a[14];this._screenDepth=0>f?0:f/(a[3]*c+a[7]*d+a[11]*b+a[15])};e.shouldSplit=function(a,b,c){if(w.isSome(a.frustum)&&(!this._intersectsClippingArea||
!this._isVisible(a.frustum)))return n.TileUpdate.NONE;const d=this.level;m.subtract(L,this._center[q.CenterPosition.MIDDLE],b);var f=m.squaredLength(L);let k=q.CenterPosition.MIDDLE;m.subtract(A,this._center[q.CenterPosition.TOP],b);var h=m.squaredLength(A);h<f&&(f=h,k=q.CenterPosition.TOP);m.subtract(A,this._center[q.CenterPosition.BOTTOM],b);h=m.squaredLength(A);h<f&&(f=h,k=q.CenterPosition.BOTTOM);if(this._edgeLen2>f&&d<a.maxLod)return n.TileUpdate.SPLIT;f=Math.sqrt(f);const u=this._edgeLen/(a.fovX*
f*2);h=()=>{const V=d+Math.ceil(-Math.log2(a.relativeWidthLimit/u));return V!==this.vlevel?(this.vlevel=V,n.TileUpdate.VSPLITMERGE):n.TileUpdate.NONE_HIT_MAXLOD};if(c===p.LODSnapping.ON&&1===this._surface.snapLevel-d)return d>=a.maxLod?h():n.TileUpdate.SPLIT;const y=m.dot(this.up,L);c=this._elevationBounds[1]-this._elevationBounds[0];const B=c/this.edgeLen;return a.aboveGround&&0<y&&.001>B&&0<y/f-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-B?n.TileUpdate.NONE:u<a.relativeWidthLimit?
this.vlevel!==this.level?(this.vlevel=this.level,n.TileUpdate.VSPLITMERGE):n.TileUpdate.NONE:d>=a.maxLod?h():6<d&&(m.subtract(A,this._center[k],b),m.scale(t,this.up,y),m.subtract(t,t,A),h=m.squaredLength(t),h>this.radius*this.radius&&(m.scale(t,t,this.radius/Math.sqrt(h)),m.add(t,t,this._center[k]),m.subtract(t,b,t),Math.min(1,(Math.abs(m.dot(t,this.up))+.5*c+this._curvatureHeight)/m.length(t))*(this._edgeLen/(a.fovY*f*2))<.1/a.angledSplitBias*a.relativeHeightLimit))?n.TileUpdate.NONE:n.TileUpdate.SPLIT};
e.setChildren=function(a,b,c,d){l.weakAssert(!!(a&&b&&c&&d),"Null child passed");this._children[0]=a;this._children[1]=b;this._children[2]=c;this._children[3]=d};e.unsetChildren=function(){this._children[0]=null;this._children[1]=null;this._children[2]=null;this._children[3]=null};e.prepareToLoad=function(a){this.refMapData();for(const b of r.LayerClasses)this._createOrUpdateAgents(0,b);a.updateTileGeometryState(this)};e.load=function(a){this.prepareToLoad(a);this.loadPrepared(a)};e.loadPrepared=
function(a){a.loadTile(this)};e.unload=function(a){a.unloadTile(this);for(const b of r.LayerClasses){a=this.layerInfo[b];for(const c of a)c.loadingAgent&&c.loadingAgent!==v.TILE_AGENT_DONE&&(D(c.loadingAgent),c.loadingAgent=null),c.pendingUpdates=0}this.resetPendingUpdate(n.TileUpdate.GEOMETRY);this.resetPendingUpdate(n.TileUpdate.TEXTURE_NOFADING);this.resetPendingUpdate(n.TileUpdate.TEXTURE_FADING);this.unrefMapData()};e.unloadMapData=function(){const a=this.layerInfo[r.LayerClass.MAP];for(const b of a)b.loadingAgent&&
b.loadingAgent!==v.TILE_AGENT_DONE&&(D(b.loadingAgent),b.loadingAgent=null),b.pendingUpdates=0;this.renderData&&this.renderData.releaseTexture();this.setMemoryDirty()};e.updateClippingStatus=function(a){if(F.equals(a,this._clippingArea))return!1;var b=this._intersectsClippingArea;const c=this._isWithinClippingArea;w.isSome(a)?(this._intersectsClippingArea=this.intersectsExtent(a),this._isWithinClippingArea=this._isWithinExtent(a)):this._isWithinClippingArea=this._intersectsClippingArea=!0;this._clippingArea=
a;this.updateVisibility();a=c&&this._isWithinClippingArea;b=!c&&!b&&!this._isWithinClippingArea&&!this._intersectsClippingArea;!this.renderData||a||b||this.setPendingUpdate(n.TileUpdate.GEOMETRY);return!0};e.updateVisibility=function(){this._dirty=!0;this._surface.setTileTreeDirty()};e.getLayerInfo=function(a,b){return this.layerInfo[b][a]};e.hasLayerData=function(a,b){a=this.layerInfo[b][a];return!(!a||!a.data||a.dataInvalidated)};e._isSuspended=function(a){return this.hasPendingUpdate(n.TileUpdate.SPLIT)?
!0:a===r.LayerClass.ELEVATION?!1:!this.loadable};e.hasPendingUpdate=function(a){return(this._pendingUpdates&a)===a};e.setPendingUpdate=function(a){this._pendingUpdates|=a;a===n.TileUpdate.SPLIT||a===n.TileUpdate.MERGE?this._surface.setTileTreeDirty():this._surface.requestUpdate()};e.resetPendingUpdate=function(a){return this.hasPendingUpdate(a)?(this._pendingUpdates&=~a,!0):!1};e.requestLayerData=function(a,b,c){const d=this.layerInfo[b][a];if(d.waitingAgents.has(c))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",
this.lij.toString(),c.tile.lij.toString(),b,a),!0;d.waitingAgents.push(c);if(d.data&&!d.dataInvalidated)return console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),c.tile.lij.toString(),b,a),c.dataArrived(this),!0;if(d.requestPromise)return!0;w.abortMaybe(d.requestAbort);d.requestAbort=new AbortController;const f=this._surface.requestTileData(this,a,b,d.requestAbort);if(!f)return d.requestAbort=null,!1;a=()=>{d.requestPromise===f&&(d.requestPromise=
null,d.requestAbort=null)};d.requestPromise=f;f.then(a,a);return!0};e.hasLij=function(a){return this.lij[0]===a[0]&&this.lij[1]===a[1]&&this.lij[2]===a[2]};e.findByLij=function(a){return this.hasLij(a)?this:this.isLeaf?null:(a=this._children[0].findByLij(a)||this._children[1].findByLij(a)||this._children[2].findByLij(a)||this._children[3].findByLij(a))?a:null};e.distanceToSquared=function(a){return m.squaredLength(m.subtract(t,this._center[q.CenterPosition.MIDDLE],a))};e.containsPoint=function(a){const b=
this.extent;return a[0]>=b[0]&&a[1]>=b[1]&&a[0]<=b[2]&&a[1]<=b[3]};e.unrequestLayerData=function(a,b,c){a=this.layerInfo[b][a];b=a.waitingAgents;c=null!=b.removeUnordered(c);l.weakAssert(c,"agent has not requested this piece of map data");1>b.length&&(a.abortRequest(),this.setMemoryDirty())};e.dataArrived=function(a,b,c){a=this.layerInfo[b][a];a.data=c;a.dataInvalidated=!1;a.waitingAgents.forAll(d=>d.dataArrived(this));a.waitingAgents.clear();this.setMemoryDirty()};e.dataMissing=function(a,b,c){c.notInTilemap||
console.error(`Tile ${this.lij.toString()} layer ${b}/${a} error ${c}`);a=this.layerInfo[b][a];a.dataMissing=!0;a.waitingAgents.forAll(d=>d.dataMissing());a.waitingAgents.clear();this.setMemoryDirty()};e.updateRenderData=function(a,b){switch(a){case r.LayerClass.MAP:return this._updateTexture(b);case r.LayerClass.ELEVATION:return this._updateGeometry()}};e._updateTexture=function(a){this.renderData&&(this.resetPendingUpdate(a===p.TextureUpdate.FADING?n.TileUpdate.TEXTURE_NOFADING:n.TileUpdate.TEXTURE_FADING),
this.setPendingUpdate(a===p.TextureUpdate.FADING?n.TileUpdate.TEXTURE_FADING:n.TileUpdate.TEXTURE_NOFADING))};e._updateGeometry=function(){this.setPendingUpdate(n.TileUpdate.GEOMETRY);for(const a of this.layerInfo[r.LayerClass.ELEVATION])a.pendingUpdates|=n.TileUpdate.GEOMETRY};e.invalidateLayerData=function(a,b){this.layerInfo[b][a].invalidateSourceData();this.restartAgents(b)};e.computeElevationBounds=function(){const a=this._elevationBounds;E.set(a,Number.MAX_VALUE,-Number.MAX_VALUE);const b=this.layerInfo[r.LayerClass.ELEVATION];
let c=!0;for(const d of b)w.isSome(d.elevationBounds)&&(a[0]=Math.min(a[0],d.elevationBounds.min),a[1]=Math.max(a[1],d.elevationBounds.max),d.elevationBounds.hasNoDataValues||(c=!1));c&&(a[0]=Math.min(a[0],0),a[1]=Math.max(a[1],0));this.updateRadiusAndCenter();this._surface.setTileTreeDirty()};e._updateCenter=function(){const a=this._elevationBounds;m.scale(t,this.up,.5*(a[0]+a[1]));m.add(this._center[q.CenterPosition.MIDDLE],this.centerAtSeaLevel,t);m.scale(t,this.up,a[0]);m.add(this._center[q.CenterPosition.TOP],
this.centerAtSeaLevel,t);m.scale(t,this.up,a[1]);m.add(this._center[q.CenterPosition.BOTTOM],this.centerAtSeaLevel,t)};e.findElevationBoundsForLayer=function(a,b){const c=this.layerInfo[r.LayerClass.ELEVATION][a];if(!(w.isSome(c.elevationBounds)&&c.elevationBounds.level>=b)&&(b=this._surface.layerViewByIndex(a,r.LayerClass.ELEVATION),b=l.getLayerWithExtentRange(b),I.fallsWithinLayer(this,b,!1))){b=fa;var d=!1;if(c.data)a=c.data,b.min=a.bounds[0],b.max=a.bounds[1],b.hasNoDataValues=a.hasNoDataValues,
b.level=this.level,d=!0;else{let f=0,k,h;for(let u=this._parent;u&&(!h||f<C.getElevationDesiredResolutionLevel(this.level))&&!(f=this.vlevel-u.level,k=h||k,h=u.layerInfo[r.LayerClass.ELEVATION][a].data,!h&&k&&f>=C.getElevationDesiredResolutionLevel(this.level));u=u.parent);if(h=h||k)h.computeMinMaxValue(this.lij[0],this.lij[1],this.lij[2],b),Infinity!==b.min&&(b.level=h.level,d=!0)}d&&(w.isNone(c.elevationBounds)&&(c.elevationBounds=new O.ElevationBounds),c.elevationBounds.copyFrom(b))}};e.modifyLayers=
function(a,b,c){c=this.layerInfo[c];for(var d of c)d.loadingAgent&&d.loadingAgent!==v.TILE_AGENT_DONE&&(D(d.loadingAgent),d.loadingAgent=null),d.waitingAgents.clear();for(d=0;d<c.length;++d)void 0===a[d]&&c[d].release();a=Array(...c);d=b.length;c.length=d;for(let f=0;f<d;f++){const k=b[f];c[f]=-1<k?a[k]:H.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool)}this.setMemoryDirty()};e.restartAgents=function(a){this.renderData&&(this._createOrUpdateAgents(0,a),this.updateRenderData(a,p.TextureUpdate.FADING))};
e.updateAgents=function(a){if(this.renderData){const b=this.layerInfo[a];for(const c of b)c.loadingAgent===v.TILE_AGENT_DONE&&(c.loadingAgent=null);this._createOrUpdateAgents(0,a)}};e.updateAgentSuspension=function(){for(const a of r.LayerClasses){const b=this._isSuspended(a);for(const c of this.layerInfo[a])c.loadingAgent&&c.loadingAgent!==v.TILE_AGENT_DONE&&(c.loadingAgent.setSuspension(b),c.loadingAgent===v.TILE_AGENT_DONE&&this.updateRenderData(a,p.TextureUpdate.FADING))}};e.removeLayerAgent=
function(a,b){a=this.layerInfo[b][a];a.loadingAgent&&a.loadingAgent!==v.TILE_AGENT_DONE&&a.loadingAgent.dispose();a.loadingAgent=null};e.agentDone=function(a,b){const c=this.layerInfo[b][a];c.loadingAgent=v.TILE_AGENT_DONE;!c.data&&w.isNone(c.upsampleInfo)&&this._createOrUpdateAgents(a+1,b)};e._createOrUpdateAgents=function(a,b){const c=this.layerInfo[b];if(0!==c.length){var d=(()=>{for(let k=a;k<c.length;++k){const h=this._surface.layerViewByIndex(k,b);if(l.isBlendableLayerView(h)&&"normal"!==h.layer.blendMode)return!0}return!1})(),
f=this._isSuspended(b);for(let k=a;k<c.length;++k){const h=c[k];let u=!1;const y=this._surface.layerViewByIndex(k,b),B=l.getLayerWithExtentRange(y);h.loadingAgent?I.fallsWithinLayer(this,B,!1)?(h.loadingAgent!==v.TILE_AGENT_DONE&&h.loadingAgent.setSuspension(f),h.loadingAgent!==v.TILE_AGENT_DONE&&(u=h.loadingAgent.update())):h.dispose():I.fallsWithinLayer(this,B,!1)&&(h.loadingAgent=ea(this,k,b,f),(u=h.loadingAgent.startLoading())?h.loadingAgent===v.TILE_AGENT_DONE&&this.setPendingUpdate(n.TileUpdate.GEOMETRY):
(D(h.loadingAgent),h.loadingAgent=v.TILE_AGENT_DONE));h.loadingAgent===v.TILE_AGENT_DONE&&this.updateRenderData(b,p.TextureUpdate.FADING);if(!d&&u&&y.isOpaque)break}}};e._isWithinExtent=function(a){const b=this.extent;return b[0]>=a[0]&&a[2]>=b[2]&&b[1]>=a[1]&&a[3]>=b[3]};e.intersectsExtent=function(a){const b=this.extent;return b[2]>=a[0]&&a[2]>=b[0]&&b[3]>=a[1]&&a[3]>=b[1]};e.getElevationBasedVerticesPerSide=function(a){const b=this.vlevel-this.level;a=Math.max(this.level-a,C.getElevationDesiredResolutionLevel(this.level)-
b);return X.clamp((this.maxTesselation>>a)+1,2,this.maxTesselation+1)};e._findLIJ=function(a,b){if(!a)return null;var c=this.surface.rootTiles;if(w.isSome(c))for(var d of c){c=d.level;var f=a[0];c>f?c=!1:(c=f-c,f=Math.floor(a[2]/2**c),c=Math.floor(a[1]/2**c)===d.lij[1]&&f===d.lij[2]);if(c){for(c=a[0]-d.level-1;0<=c&&!d.isLeaf&&!b(d);)d=d.children[2*(a[1]>>c&1)+(a[2]>>c&1)],c--;return b(d)?d:null}}return null};e.findNeighborTile=function(a,b){const c=this.lij;return(a=this.getNeighborLIJ(c,a))?c[0]===
a[0]&&c[1]===a[1]&&c[2]===a[2]?b(this)?this:null:this._findLIJ(a,b):null};e.findCorner=function(a,b){a=a===p.NeighborIndex.NORTH_EAST?1:a===p.NeighborIndex.NORTH_WEST?0:a===p.NeighborIndex.SOUTH_WEST?2:3;let c=this;for(;!(c.isLeaf||b&&b(c));)c=c.children[a];return c};e.findNeighborCornerTileExact=function(a,b){var c;return null==(c=this.findNeighborTile(a,d=>b(d)||d.level===this.level))?void 0:c.findCorner(l.oppositeCorner(a),b)};e.forAllSubtreeOnSide=function(a,b){const c=a===p.NeighborIndex.NORTH?
[0,1]:a===p.NeighborIndex.NORTH_EAST?[1]:a===p.NeighborIndex.EAST?[1,3]:a===p.NeighborIndex.SOUTH_EAST?[3]:a===p.NeighborIndex.SOUTH?[2,3]:a===p.NeighborIndex.SOUTH_WEST?[2]:a===p.NeighborIndex.WEST?[0,2]:[0],d=f=>{b(f)||f.isLeaf||c.forEach(k=>d(f.children[k]))};d(this)};e.forallNeighbors=function(a){l.neighborCornerIndices.forEach(b=>this.findNeighborCornerTileExact(b,a));l.neighborEdgeIndices.forEach(b=>{var c;return null==(c=this.findNeighborTile(b,d=>d.level===this.level||a(d)))?void 0:c.forAllSubtreeOnSide(l.oppositeEdge(b),
a)})};e.getNeighborEdgeStartVertexIndex=function(a,b){b=null!=b?b:this.findNeighborTile(l.neighborEdgeIndices[a],f=>f.isLoaded);if(!b||!this.isLoaded||!b.isLoaded)return 0;var c=this.level-b.level;if(0===c)return 0;c=2**c;const d=(a=1===(a&1))?0:1;b=this.lij[d+1]-b.lij[d+1]*c;return a?c-1-b:b};e._updateNeighborsWithChangedEdgeResolution=function(){for(let b=0;4>b;++b)if(this.renderData.geometryState.neighborData.modifiedEdgeResolutions[b]){var a=l.neighborEdgeIndices[b];const c=this.findNeighborTile(a,
d=>d.isLoaded||d.level===this.level);if(c){if(!c.isLoaded){l.internalAssert(!c.isLeaf);const d=(b+2)%4;a=l.oppositeEdge(a);c.forAllSubtreeOnSide(a,f=>{if(f.isLoaded)return f.updateEdgeAfterResolutionChange(d),!0;l.internalAssert(!f.isLeaf);return!1})}this.renderData.geometryState.neighborData.modifiedEdgeResolutions[b]=!1}}};e.updateNeighborDataAndGeometryIfNeeded=function(){this.isLoaded&&this.renderData.updateNeighborDataAndGeometryIfNeeded()};e.updateNeighborsAfterGeometryChange=function(a=this.level){this.forEachLoadedNeighbor(b=>
this._updateNeighbor(b));l.neighborEdgeIndices.forEach(b=>{b=this.findNeighborTile(b,c=>c.isLoaded&&c.level<a);null==b?void 0:b.updateNeighborsWithChangedEdgeResolution()})};e.updateNeighborsWithChangedEdgeResolution=function(){this.isLoaded&&this._updateNeighborsWithChangedEdgeResolution()};e.updateEdgeAfterResolutionChange=function(a){this.renderData.updateEdgeAfterResolutionChange(a)};e.forEachLoadedNeighbor=function(a){const b=this.level,c=d=>d.level===b||d.isLoaded;l.neighborEdgeIndices.forEach((d,
f)=>{var k,h;const u=this.findNeighborTile(d,c);null!=u&&u!==this&&u.forAllSubtreeOnSide(l.oppositeEdge(d),y=>y.isLoaded?(a(y),!0):!1);(d=null==(k=this.renderData)?void 0:null==(h=k.geometryState)?void 0:h.neighborData)&&(d.modifiedEdgeResolutions[f]=!1)});l.neighborCornerIndices.forEach(d=>{var f;const k=null==(f=this.findNeighborTile(d,c))?void 0:f.findCorner(l.oppositeCorner(d),h=>h.isLoaded);l.internalAssert(!k||S(this,k,d));null!=k&&k.isLoaded&&a(k)})};e._updateNeighbor=function(a){null!=a&&
a.isLoaded&&a.updateNeighborDataAndGeometryIfNeeded()};e.getNeighborLIJ=function(a,b){const c=l.isNorth(b)?-1:l.isSouth(b)?1:0;b=l.isWest(b)?-1:l.isEast(b)?1:0;a=[a[0],a[1]+c,a[2]+b];return 0>a[1]?null:this.surface.isGlobal?this.wrapLIJ(a):0>a[2]?null:a};e.wrapLIJ=function(a){return!a||0>a[1]||a[1]>=2**a[0]?null:this.surface.wrapEastWest(a)};e.compareLIJs=function(a){const b=this.lij;var c=b[0],d=a[0];if(c===d)return[b,a];const f=c-d;if(0>f)return c=2**-f,[[d,b[1]*c,b[2]*c],a];d=2**f;return[b,[c,
a[1]*d,a[2]*d]]};e.checkGeometryWaterproofness=function(){l.ENABLE_WATERPROOFNESS_TESTS&&(l.internalAssert(this.isLoaded),this.renderData.checkGeometryWaterproofness())};e.shouldHaveNeighbor=function(a){const b=this.extent,c=this.surface.rootTilesExtent,d=.25*(b[2]-b[0]);if(l.isNorth(a)&&b[3]+d>=c[3]||l.isSouth(a)&&b[1]-d<=c[1])return!1;const f=this.surface.isGlobal;return!f&&l.isWest(a)&&b[0]-d<=c[0]||!f&&l.isEast(a)&&b[2]+d>=c[2]?!1:!0};W._createClass(g,[{key:"isCached",get:function(){return!this.shouldLoad&&
0>=this._mapDataRefCount}},{key:"maxTesselation",get:function(){return this._maxTesselation}},{key:"isWithinClippingArea",get:function(){return this._isWithinClippingArea}},{key:"intersectsClippingArea",get:function(){return this._intersectsClippingArea}},{key:"clippingArea",get:function(){return this._clippingArea}},{key:"parent",get:function(){return this._parent}},{key:"children",get:function(){return this._children}},{key:"surface",get:function(){return this._surface}},{key:"elevationBounds",
get:function(){return this._elevationBounds}},{key:"level",get:function(){return this.lij[0]}},{key:"key",get:function(){return`${this.lij[0]}/${this.lij[1]}/${this.lij[2]}`}},{key:"edgeLen",get:function(){return this._edgeLen}},{key:"radius",get:function(){return this._center[q.CenterPosition.MIDDLE][3]}},{key:"screenDepth",get:function(){return this._screenDepth}},{key:"visible",get:function(){this._dirty&&this.computeVisibility();return this._visible}},{key:"loadable",get:function(){return this.visible||
this._surface.view.state.fixedContentCamera}},{key:"rendered",get:function(){const a=!!this.renderData;a!==this._previouslyRendered&&(this._surface.emit("tiles-visibility-changed"),this._previouslyRendered=a,this._surface.renderer.setNeedsRender());return a}},{key:"shouldLoad",get:function(){if(!this.loadable)return!1;if(this._surface.lodSnapping===p.LODSnapping.ON){const a=this.level-this._surface.snapLevel;if(0===a)return!0;if(1===a)return!1}return this.isLeaf}},{key:"usedMemory",get:function(){return this._ensureUsedMemory()+
(this.isCached?0:this._mapTileMemory)}},{key:"cachedMemory",get:function(){return this.isCached?this.mapTileMemory:0}},{key:"mapTileMemory",get:function(){this._ensureUsedMemory();return this.layerInfo[r.LayerClass.MAP].reduce((a,b)=>a+(b instanceof G.VectorTile?b.memoryUsage:0),this._mapTileMemory)}},{key:"cpuImageMemorySize",get:function(){const a=this._surface.tilingScheme.pixelSize;return a*a*4}},{key:"isLoaded",get:function(){var a,b;return null!=(a=null==(b=this.renderData)?void 0:b.hasGeometry)?
a:!1}},{key:"updating",get:function(){if(this.hasPendingUpdates)return!0;for(const a of r.LayerClasses){const b=this.layerInfo[a];for(const c of b)if(c.loadingAgent&&c.loadingAgent!==v.TILE_AGENT_DONE&&c.loadingAgent.updating)return!0}return!1}},{key:"hasPendingUpdates",get:function(){return 0!==this._pendingUpdates}},{key:"isLeaf",get:function(){return null==this._children[0]}},{key:"test",get:function(){return{cachedMemory:this.cachedMemory}}},{key:"westNeighborWestExtent",get:function(){return this.extent[0]*
(this.isWestEnd?-1:1)}},{key:"eastNeighborEastExtent",get:function(){return this.extent[2]*(this.isEastEnd?-1:1)}},{key:"isEastEnd",get:function(){return this.lij[2]===this.surface.lijEastEnd(this.level)-1}},{key:"isWestEnd",get:function(){return 0===this.lij[2]}},{key:"isNorthEnd",get:function(){return 0===this.lij[1]}},{key:"isSouthEnd",get:function(){return this.extent[1]+N.EPSILON>=this.surface.extent[1]}}]);return g}();const K=new M(Q.MapTileAgent),J=new M(P.ElevationTileAgent),fa=new O.ElevationBounds;
q.CenterPosition=void 0;(function(g){g[g.TOP=0]="TOP";g[g.MIDDLE=1]="MIDDLE";g[g.BOTTOM=2]="BOTTOM"})(q.CenterPosition||(q.CenterPosition={}));q.SplitLimits=function(){this.angledSplitBias=this.maxLod=this.relativeHeightLimit=this.relativeWidthLimit=this.fovY=this.fovX=0;this.aboveGround=!0};q.Tile=ha;q.almostEquals=x;q.isCornerNeighbor=S;q.isEdgeNeighbor=function(g,e,a){if(w.isNone(g)||w.isNone(e))return!1;if(0===g.level&&0===e.level&&(g.isEastEnd&&e.isWestEnd&&a===p.NeighborIndex.EAST||g.isWestEnd&&
e.isEastEnd&&a===p.NeighborIndex.WEST))return!0;const b=1E-6*(g.extent[2]-g.extent[0]);switch(a){case p.NeighborIndex.NORTH:return x(g.extent[3],e.extent[1],b);case p.NeighborIndex.SOUTH:return x(g.extent[1],e.extent[3],b);case p.NeighborIndex.EAST:return x(g.extent[2],e.extent[0],b)||x(g.extent[2],-e.extent[0],b);case p.NeighborIndex.WEST:return x(g.extent[0],e.extent[2],b)||x(g.extent[0],-e.extent[2],b)}};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});