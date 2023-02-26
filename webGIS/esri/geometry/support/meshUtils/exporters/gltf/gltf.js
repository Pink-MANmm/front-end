// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/MapUtils ../../../../../core/maybe ../../../../../chunks/quat ../../../../../chunks/quatf64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../MeshMaterialMetallicRoughness ../../georeference ./buffer ./geometry ./types ./imageutils ../../../../../views/webgl/enums".split(" "),function(F,L,q,M,G,H,v,N,O,I,J,f,C,k){let P=function(){function K(a,b,c){this.params={};this.materialMap=[];this.imageMap=new Map;this.textureMap=new Map;this.gltf={asset:{version:"2.0",
copyright:a.copyright,generator:a.generator},extras:{options:b,binChunkBuffer:null,promises:[]}};c&&(this.params=c);this._addScenes(a)}var n=K.prototype;n._addScenes=function(a){this.gltf.scene=a.defaultScene;const b=this.gltf.extras.options.bufferOutputType===f.BufferOutputType.GLB||this.gltf.extras.options.imageOutputType===f.ImageOutputType.GLB;b&&(this.gltf.extras.binChunkBuffer=new I.Buffer(this.gltf));a.forEachScene(c=>{this._addScene(c)});b&&this.gltf.extras.binChunkBuffer.finalize()};n._addScene=
function(a){this.gltf.scenes||(this.gltf.scenes=[]);const b={};a.name&&(b.name=a.name);a.forEachNode(c=>{b.nodes||(b.nodes=[]);c=this._addNode(c);b.nodes.push(c)});this.gltf.scenes.push(b)};n._addNode=function(a){this.gltf.nodes||(this.gltf.nodes=[]);const b={};a.name&&(b.name=a.name);var c=a.translation;H.exactEquals(c,v.ZEROS)||(b.translation=v.clone(c));c=a.rotation;M.exactEquals(c,G.IDENTITY)||(b.rotation=G.clone(c));c=a.scale;H.exactEquals(c,v.ONES)||(b.scale=v.clone(c));a.mesh&&a.mesh.vertexAttributes.position?
b.mesh=this._addMesh(a.mesh):a.forEachNode(d=>{b.children||(b.children=[]);d=this._addNode(d);b.children.push(d)});a=this.gltf.nodes.length;this.gltf.nodes.push(b);return a};n._addMesh=function(a){this.gltf.meshes||(this.gltf.meshes=[]);const b={primitives:[]},c=this.gltf.extras.options.bufferOutputType===f.BufferOutputType.GLB;let d;d=c?this.gltf.extras.binChunkBuffer:new I.Buffer(this.gltf);this.params.origin||(this.params.origin=J.computeOrigin(a));var e=O.ungeoreferenceByTransform(a.vertexAttributes,
a.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});J.smoothNormals(a,e);this._flipYZAxis(e);const l=d.addBufferView(k.DataType.FLOAT,f.AttributeType.VEC3,f.TargetBuffer.ARRAY_BUFFER);let h;e.normal&&(h=d.addBufferView(k.DataType.FLOAT,f.AttributeType.VEC3,f.TargetBuffer.ARRAY_BUFFER));let m;a.vertexAttributes.uv&&(m=d.addBufferView(k.DataType.FLOAT,f.AttributeType.VEC2,f.TargetBuffer.ARRAY_BUFFER));let g;e.tangent&&(g=d.addBufferView(k.DataType.FLOAT,f.AttributeType.VEC4,
f.TargetBuffer.ARRAY_BUFFER));let p;a.vertexAttributes.color&&(p=d.addBufferView(k.DataType.UNSIGNED_BYTE,f.AttributeType.VEC4,f.TargetBuffer.ARRAY_BUFFER));l.startAccessor("POSITION");h&&h.startAccessor("NORMAL");m&&m.startAccessor("TEXCOORD_0");g&&g.startAccessor("TANGENT");p&&p.startAccessor("COLOR_0");var r=e.position.length/3;const {position:D,normal:w,tangent:t}=e,{color:u,uv:E}=a.vertexAttributes;for(e=0;e<r;++e)l.push(D[3*e]),l.push(D[3*e+1]),l.push(D[3*e+2]),h&&q.isSome(w)&&(h.push(w[3*e]),
h.push(w[3*e+1]),h.push(w[3*e+2])),m&&q.isSome(E)&&(m.push(E[2*e]),m.push(E[2*e+1])),g&&q.isSome(t)&&(g.push(t[4*e]),g.push(t[4*e+1]),g.push(t[4*e+2]),g.push(t[4*e+3])),p&&q.isSome(u)&&(p.push(u[4*e]),p.push(u[4*e+1]),p.push(u[4*e+2]),p.push(u[4*e+3]));r=l.endAccessor();r=this._addAccessor(l.index,r);if(h){var x=h.endAccessor();x=this._addAccessor(h.index,x)}if(m){var y=m.endAccessor();y=this._addAccessor(m.index,y)}if(g){var z=g.endAccessor();z=this._addAccessor(g.index,z)}if(p){var A=p.endAccessor();
A=this._addAccessor(p.index,A)}let B;a.components&&0<a.components.length&&a.components[0].faces?(B=d.addBufferView(k.DataType.UNSIGNED_INT,f.AttributeType.SCALAR,f.TargetBuffer.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,a.components,b,r,x,y,z,A)):this._addMeshVertexNonIndexed(a.components,b,r,x,y,z,A);l.finalize();h&&h.finalize();m&&m.finalize();g&&g.finalize();B&&B.finalize();p&&p.finalize();c||d.finalize();a=this.gltf.meshes.length;this.gltf.meshes.push(b);return a};n._flipYZAxis=function({position:a,
normal:b,tangent:c}){this._flipYZBuffer(a,3);this._flipYZBuffer(b,3);this._flipYZBuffer(c,4)};n._flipYZBuffer=function(a,b){if(!q.isNone(a))for(let c=1,d=2;c<a.length;c+=b,d+=b){const e=a[c];a[c]=a[d];a[d]=-e}};n._addMaterial=function(a){if(null!==a){var b=this.materialMap.indexOf(a);if(-1!==b)return b;this.gltf.materials||(this.gltf.materials=[]);b={};switch(a.alphaMode){case "mask":b.alphaMode=f.AlphaMode.MASK;break;case "auto":case "blend":b.alphaMode=f.AlphaMode.BLEND}.5!==a.alphaCutoff&&(b.alphaCutoff=
a.alphaCutoff);a.doubleSided&&(b.doubleSided=a.doubleSided);b.pbrMetallicRoughness={};var c=d=>{d=d.toRgba();d[0]=(d[0]/255)**2.1;d[1]=(d[1]/255)**2.1;d[2]=(d[2]/255)**2.1;return d};q.isSome(a.color)&&(b.pbrMetallicRoughness.baseColorFactor=c(a.color));q.isSome(a.colorTexture)&&(b.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(a.colorTexture)});q.isSome(a.normalTexture)&&(b.normalTexture={index:this._addTexture(a.normalTexture)});a instanceof N?(q.isSome(a.emissiveTexture)&&(b.emissiveTexture=
{index:this._addTexture(a.emissiveTexture)}),q.isSome(a.emissiveColor)&&(c=c(a.emissiveColor),b.emissiveFactor=[c[0],c[1],c[2]]),q.isSome(a.occlusionTexture)&&(b.occlusionTexture={index:this._addTexture(a.occlusionTexture)}),q.isSome(a.metallicRoughnessTexture)&&(b.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(a.metallicRoughnessTexture)}),b.pbrMetallicRoughness.metallicFactor=a.metallic,b.pbrMetallicRoughness.roughnessFactor=a.roughness):(b.pbrMetallicRoughness.metallicFactor=
1,b.pbrMetallicRoughness.roughnessFactor=1);c=this.gltf.materials.length;this.gltf.materials.push(b);this.materialMap.push(a);return c}};n._addTexture=function(a){this.gltf.textures||(this.gltf.textures=[]);return L.getOrCreateMapValue(this.textureMap,a,()=>{const b={sampler:this._addSampler(a),source:this._addImage(a)},c=this.gltf.textures.length;this.gltf.textures.push(b);return c})};n._addImage=function(a){var b=this.imageMap.get(a);if(null!=b)return b;this.gltf.images||(this.gltf.images=[]);const c=
{};if(a.url)c.uri=a.url;else{c.extras=a.data;for(b=0;b<this.gltf.images.length;++b)if(a.data===this.gltf.images[b].extras)return b;switch(this.gltf.extras.options.imageOutputType){case f.ImageOutputType.GLB:{const d=this.gltf.extras.binChunkBuffer.addBufferView(k.DataType.UNSIGNED_BYTE,f.AttributeType.SCALAR);b=C.imageToArrayBuffer(a.data).then(({data:e,type:l})=>{c.mimeType=l;return e});d.writeAsync(b).then(()=>{d.finalize()});c.bufferView=d.index;break}case f.ImageOutputType.DataURI:c.uri=C.imageToDataURI(a.data);
break;default:this.gltf.extras.promises.push(C.imageToArrayBuffer(a.data).then(({data:d,type:e})=>{c.uri=d;c.mimeType=e}))}}b=this.gltf.images.length;this.gltf.images.push(c);this.imageMap.set(a,b);return b};n._addSampler=function(a){this.gltf.samplers||(this.gltf.samplers=[]);var b=k.TextureWrapMode.REPEAT;let c=k.TextureWrapMode.REPEAT;if("string"===typeof a.wrap)switch(a.wrap){case "clamp":c=b=k.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":c=b=k.TextureWrapMode.MIRRORED_REPEAT}else{switch(a.wrap.vertical){case "clamp":c=
k.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":c=k.TextureWrapMode.MIRRORED_REPEAT}switch(a.wrap.horizontal){case "clamp":b=k.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":b=k.TextureWrapMode.MIRRORED_REPEAT}}a={wrapS:b,wrapT:c};for(b=0;b<this.gltf.samplers.length;++b)if(JSON.stringify(a)===JSON.stringify(this.gltf.samplers[b]))return b;b=this.gltf.samplers.length;this.gltf.samplers.push(a);return b};n._addAccessor=function(a,b){this.gltf.accessors||(this.gltf.accessors=[]);a={bufferView:a,
byteOffset:b.byteOffset,componentType:b.componentType,count:b.count,type:b.type,min:b.min,max:b.max,name:b.name};b.normalized&&(a.normalized=!0);b=this.gltf.accessors.length;this.gltf.accessors.push(a);return b};n._addMeshVertexIndexed=function(a,b,c,d,e,l,h,m){for(const g of b){a.startAccessor("INDICES");for(b=0;b<g.faces.length;++b)a.push(g.faces[b]);b=a.endAccessor();b={attributes:{POSITION:d},indices:this._addAccessor(a.index,b),material:this._addMaterial(g.material)};e&&"flat"!==g.shading&&(b.attributes.NORMAL=
e);l&&(b.attributes.TEXCOORD_0=l);h&&"flat"!==g.shading&&(b.attributes.TANGENT=h);m&&(b.attributes.COLOR_0=m);c.primitives.push(b)}};n._addMeshVertexNonIndexed=function(a,b,c,d,e,l,h){c={attributes:{POSITION:c}};d&&(c.attributes.NORMAL=d);e&&(c.attributes.TEXCOORD_0=e);l&&(c.attributes.TANGENT=l);h&&(c.attributes.COLOR_0=h);a&&(c.material=this._addMaterial(a[0].material));b.primitives.push(c)};return K}();F.GLTF=P;Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});