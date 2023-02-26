"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3900],{74395:(e,t,i)=>{i.d(t,{B:()=>a});var s=i(76506),n=i(88994),r=i(92482);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new n.P(9,(0,s.h)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.e)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,i){!function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]}(t),e.search(o,i)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},56761:(e,t,i)=>{i.d(t,{F:()=>c});var s=i(60991),n=i(75067),r=i(92143),o=i(71252),a=i(53326),l=i(92482),d=i(40267),u=i(74395),h=i(44722);class c{constructor(e){this.geometryInfo=e,this._boundsStore=new u.B,this._featuresById=new Map,this._markedIds=new Set,this.events=new n.Z,this.featureAdapter=h.o}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,o.i)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t((0,a.C)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}toArray(){return Array.from(this._featuresById.values())}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.L.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let n;if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,o.i)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,o.a)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=(0,d.k)((0,o.i)(n)?n:(0,l.c)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.i)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}_remove(e){return(0,o.i)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},3900:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var s=i(60991),n=i(71252),r=i(32422),o=i(60947),a=i(40267),l=i(19957),d=i(56761),u=i(24251),h=i(50815),c=i(4571),p=i(77358),m=i(1709),f=i(54732),y=i(14249);i(76506),i(92143),i(31450),i(71552),i(40642),i(21801),i(34250),i(91306),i(60474),i(66396),i(86656),i(17533),i(6540),i(73796),i(12047),i(21972),i(91055),i(19657),i(6906),i(50406),i(97714),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(75067),i(53326),i(92482),i(82426),i(29794),i(74395),i(88994),i(98576),i(44722),i(1623),i(53785),i(57251),i(95587),i(89914),i(65775),i(12381),i(73173),i(82058),i(88762),i(32101),i(92624),i(92847),i(77314),i(91700),i(95533),i(94751),i(74569),i(22781),i(42318),i(71435),i(30831),i(72274),i(5777),i(81716),i(66774),i(63683),i(94479),i(48027),i(54174),i(59465),i(45702),i(51127),i(30776),i(70514),i(60217),i(89219),i(92653),i(85056),i(82933),i(15324),i(58085),i(55585),i(6941);const g=o.W,_={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o.W},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function x(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class B{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],o=null!=e.hasM?e.hasM:n.hasM,a=null!=e.hasZ?e.hasZ:n.hasZ,p=!e.spatialReference&&!n.spatialReference,x=p?g:e.spatialReference||n.spatialReference,b=p?_:null,B=e.geometryType||n.geometryType,F=!B;let S=e.objectIdField||n.objectIdField,M=e.timeInfo;if(!F&&(p&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!B))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!S)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&S!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${S}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),S=n.objectIdField),S&&!n.objectIdField){let e=null;r.some((t=>t.name===S&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:S,name:S,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===S&&(e.type="esriFieldTypeOID"),!f.k.jsonValues.includes(e.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const v={};for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,y.os)(e);void 0!==t&&(v[e.name]=t)}if(this._fieldsIndex=new m.Z(r),this._createDefaultAttributes=(0,c.b)(v,S),M){if(M.startTimeField){const e=this._fieldsIndex.get(M.startTimeField);e?(M.startTimeField=e.name,e.type="esriFieldTypeDate"):M.startTimeField=null}if(M.endTimeField){const e=this._fieldsIndex.get(M.endTimeField);e?(M.endTimeField=e.name,e.type="esriFieldTypeDate"):M.endTimeField=null}if(M.trackIdField){const e=this._fieldsIndex.get(M.trackIdField);e?M.trackIdField=e.name:(M.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))}M.startTimeField||M.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:M}}),M=null)}const w={warnings:t,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,c.a)(B),templates:(0,c.d)(v),extent:b,geometryType:B,objectIdField:S,fields:r,hasZ:!!a,hasM:!!o,timeInfo:M},assignedObjectIds:{}};if(this._queryEngine=new h.Q({fields:r,geometryType:B,hasM:o,hasZ:a,objectIdField:S,spatialReference:x,featureStore:new d.F({geometryType:B,hasM:o,hasZ:a}),timeInfo:M,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=l.i,w;const T=(0,l.f)(S,i);return this._nextObjectId=T+1,await(0,u.c)(i,x),this._loadInitialFeatures(w,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,p.l)(t,i),(0,u.c)(e.adds,t),(0,u.c)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,o=null,a=null,l=null;for(const t of e){const e=t.geometry;if(!(0,n.a)(e)&&(o||(o=(0,r.Ji)(e)),a||(a=e.spatialReference),null==i&&(i=x(e)),null==s&&(s=b(e)),o&&a&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:o,spatialReference:a,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:o,objectIdField:l,spatialReference:d,featureStore:h}=this._queryEngine,c=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==(0,r.Ji)(s.geometry)){e.featureErrors.push((0,p.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=(0,p.m)(this._fieldsIndex,t,s.attributes,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[l]),(0,n.i)(s.geometry)&&(s.geometry=(0,u.p)(s.geometry,s.geometry.spatialReference,d)),c.push(s))}if(h.addMany((0,a.n)([],c,i,o,s,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,p.c)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:o,hasZ:l,objectIdField:d,spatialReference:h,featureStore:c}=this._queryEngine,m=[];for(const o of t){if(o.geometry&&s!==(0,r.Ji)(o.geometry)){i.push((0,p.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,p.m)(this._fieldsIndex,t,o.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[d];e.uidToObjectId[o.uid]=t}(0,n.i)(o.geometry)&&(o.geometry=(0,u.p)((0,p.s)(o.geometry,h),o.geometry.spatialReference,h)),m.push(o),i.push((0,p.c)(o.attributes[d]))}}c.addMany((0,a.n)([],m,s,l,o,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:o,objectIdField:l,spatialReference:d,featureStore:h}=this._queryEngine;for(const c of t){const{attributes:t,geometry:m}=c,f=t&&t[l];if(null==f){e.push((0,p.a)(`Identifier field ${l} missing`));continue}if(!h.has(f)){e.push((0,p.a)(`Feature with object id ${f} missing`));continue}const y=(0,a.o)(h.getFeature(f),i,o,s);if((0,n.i)(m)){if(i!==(0,r.Ji)(m)){e.push((0,p.a)("Incorrect geometry type."));continue}y.geometry=(0,u.p)((0,p.s)(m,d),m.spatialReference,d)}if(t){const i=(0,p.m)(this._fieldsIndex,y.attributes,t);if(i){e.push(i);continue}}h.add((0,a.p)(y,i,o,s,l)),e.push((0,p.c)(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},88994:(e,t,i)=>{i.d(t,{P:()=>a});var s=i(76506),n=i(71252),r=i(6906),o=i(98576);class a{constructor(e=9,t){this.compareMinX=h,this.compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),x.prune(),b.prune(),B.prune()}all(e){this._all(this.data,e)}search(e,t){let i=this.data;const s=this._toBBox;if(g(e,i))for(I.clear();i;){for(let n=0,r=i.children.length;n<r;n++){const r=i.children[n],o=i.leaf?s(r):r;g(e,o)&&(i.leaf?t(r):y(e,o)?this._all(r,t):I.push(r))}i=I.pop()}}collides(e){let t=this.data;const i=this._toBBox;if(!g(e,t))return!1;for(I.clear();t;){for(let s=0,n=t.children.length;s<n;s++){const n=t.children[s],r=t.leaf?i(n):n;if(g(e,r)){if(t.leaf||y(e,r))return!0;I.push(n)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(e){if(!e)return this;let t,i=this.data,r=null,o=0,a=!1;const l=this._toBBox(e);for(b.clear(),B.clear();i||b.length>0;){if(i||(i=(0,n.b)(b.pop()),r=b.data[b.length-1],o=B.pop()??0,a=!0),i.leaf&&(t=(0,s.i)(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),b.push(i),this._condense(b),this;a||i.leaf||!y(i,l)?r?(o++,i=r.children[o],a=!1):i=null:(b.push(i),B.push(o),o=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=e;for(x.clear();i;){if(!0===i.leaf)for(const e of i.children)t(e);else x.pushArray(i.children);i=x.pop()??null}}_build(e,t,i,s){const n=i-t+1;let r=this._maxEntries;if(n<=r){const s=new S(e.slice(t,i+1));return l(s,this._toBBox),s}s||(s=Math.ceil(Math.log(n)/Math.log(r)),r=Math.ceil(n/r**(s-1)));const o=new M([]);o.height=s;const a=Math.ceil(n/r),d=a*Math.ceil(Math.sqrt(r));_(e,t,i,d,this.compareMinX);for(let n=t;n<=i;n+=d){const t=Math.min(n+d-1,i);_(e,n,t,a,this.compareMinY);for(let i=n;i<=t;i+=a){const n=Math.min(i+a-1,t);o.children.push(this._build(e,i,n,s-1))}}return l(o,this._toBBox),o}_chooseSubtree(e,t,i,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==i;){let i,s=1/0,o=1/0;for(let a=0,l=t.children.length;a<l;a++){const l=t.children[a],d=p(l),u=(n=e,r=l,(Math.max(r.maxX,n.maxX)-Math.min(r.minX,n.minX))*(Math.max(r.maxY,n.maxY)-Math.min(r.minY,n.minY))-d);u<o?(o=u,s=d<s?d:s,i=l):u===o&&d<s&&(s=d,i=l)}t=i||t.children[0]}var n,r;return t}_insert(e,t,i){const s=this._toBBox,n=i?e:s(e);b.clear();const r=this._chooseSubtree(n,this.data,t,b);for(r.children.push(e),u(r,n);t>=0&&b.data[t].children.length>this._maxEntries;)this._split(b,t),t--;this._adjustParentBBoxes(n,b,t)}_split(e,t){const i=e.data[t],s=i.children.length,n=this._minEntries;this._chooseSplitAxis(i,n,s);const r=this._chooseSplitIndex(i,n,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=i.children.splice(r,i.children.length-r),a=i.leaf?new S(o):new M(o);a.height=i.height,l(i,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(i,a)}_splitRoot(e,t){this.data=new M([e,t]),this.data.height=e.height+1,l(this.data,this._toBBox)}_chooseSplitIndex(e,t,i){let s,n,r;s=n=1/0;for(let o=t;o<=i-t;o++){const t=d(e,0,o,this._toBBox),a=d(e,o,i,this._toBBox),l=f(t,a),u=p(t)+p(a);l<s?(s=l,r=o,n=u<n?u:n):l===s&&u<n&&(n=u,r=o)}return r}_chooseSplitAxis(e,t,i){const s=e.leaf?this.compareMinX:h,n=e.leaf?this.compareMinY:c;this._allDistMargin(e,t,i,s)<this._allDistMargin(e,t,i,n)&&e.children.sort(s)}_allDistMargin(e,t,i,s){e.children.sort(s);const n=this._toBBox,r=d(e,0,t,n),o=d(e,i-t,i,n);let a=m(r)+m(o);for(let s=t;s<i-t;s++){const t=e.children[s];u(r,e.leaf?n(t):t),a+=m(r)}for(let s=i-t-1;s>=t;s--){const t=e.children[s];u(o,e.leaf?n(t):t),a+=m(o)}return a}_adjustParentBBoxes(e,t,i){for(let s=i;s>=0;s--)u(t.data[s],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const n=e.data[t-1],r=n.children;r.splice((0,s.i)(r,i,r.length,n.indexHint),1)}else this.clear();else l(i,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){d(e,0,e.children.length,t,e)}function d(e,t,i,s,n){n||(n=new S([])),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let r,o=t;o<i;o++)r=e.children[o],u(n,e.leaf?s(r):r);return n}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function f(e,t){const i=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),n=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,n-i)*Math.max(0,r-s)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,i,s,r){const a=[t,i];for(;a.length;){const t=(0,n.b)(a.pop()),i=(0,n.b)(a.pop());if(t-i<=s)continue;const l=i+Math.ceil((t-i)/s/2)*s;(0,o.q)(e,l,i,t,r),a.push(i,l,l,t)}}const I=new r.P,x=new r.P,b=new r.P,B=new r.P({deallocator:void 0});class F extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new s.P}}class S extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class M extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},4571:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>d,c:()=>h,d:()=>u});var s=i(76506),n=i(89219),r=i(6941);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.d:"esriGeometryPolyline"===e?r.a:r.b}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,s.h)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${a.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `)();return()=>new s}catch(i){return()=>({[t]:null,...e})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.q,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},6941:(e,t,i)=>{i.d(t,{a:()=>r,b:()=>o,c:()=>a,d:()=>n,e:()=>l,f:()=>d,g:()=>u});const s=[252,146,31,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},r={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},54732:(e,t,i)=>{i.d(t,{k:()=>s});const s=new(i(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},19957:(e,t,i)=>{i.d(t,{f:()=>n,i:()=>s});const s=1;function n(e,t){let i=0;for(const s of t){const t=s.attributes?.[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},44722:(e,t,i)=>{i.d(t,{o:()=>o});var s=i(71252),n=i(71331),r=i(16204);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,s.a)(e.centroid)&&(e.centroid=(0,n.g)(new r.O,e.geometry,t.hasZ,t.hasM)),e.centroid)}},77358:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>u,l:()=>y,m:()=>c,s:()=>f});var s=i(71252),n=i(60947),r=i(14249);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class d{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new d(e)}const h=new Set;function c(e,t,i,s=!1,n){h.clear();for(const o in i){const a=e.get(o);if(!a)continue;const d=i[o],u=p(a,d);if(u!==d&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:d,sanitizedValue:u}}),h.add(a.name),a&&(s||a.editable)){const e=(0,r.Qc)(a,u);if(e)return l((0,r.vP)(e,a,u));t[a.name]=u}}for(const t of e.requiredFields)if(!h.has(t.name))return l(`missing required field "${t.name}"`);return null}function p(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let m;function f(e,t){if(!e||!(0,n.j)(t))return e;if("rings"in e||"paths"in e){if((0,s.a)(m))throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function y(e,t){!(0,n.j)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,s.a)(m)&&(m=await Promise.all([i.e(3361),i.e(3981)]).then(i.bind(i,43981)).then((e=>e.g))),m}()}}}]);