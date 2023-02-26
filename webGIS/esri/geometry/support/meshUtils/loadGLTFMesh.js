// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../request ../../../core/MapUtils ../../../core/mathUtils ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../MeshComponent ../MeshMaterialMetallicRoughness ../MeshTexture ../MeshVertexAttributes ../buffer/BufferView ../../../chunks/vec32 ../../../chunks/vec42 ../buffer/utils ./georeference ../../../views/3d/glTF/DefaultLoadingContext ../../../views/3d/glTF/loader ../../../views/3d/glTF/internal/indexUtils ../../../views/3d/webgl-engine/lib/geometryDataUtils ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA ../../../views/webgl/enums ../../../chunks/vec33 ../../../chunks/vec43 ../../../chunks/vec22".split(" "),
function(E,F,G,P,H,I,f,J,K,Q,R,S,T,U,V,n,w,z,x,W,X,Y,B,Z,aa,u,L,A,M){function C(){C=F._asyncToGenerator(function*(a,b,g){var c=new X.DefaultLoadingContext(ba(g));b=(yield Y.load(c,b,g,!0)).model;c=b.lods.shift();const d=new Map,e=new Map;b.textures.forEach((l,q)=>d.set(q,new U({data:l.data,wrap:ca(l.parameters.wrap)})));b.materials.forEach((l,q)=>e.set(q,da(l,d)));b=ea(c);for(var h of b.parts)fa(b,h,e);const {position:t,normal:m,tangent:k,color:p,texCoord0:r}=b.vertexAttributes;h={position:t.typedBuffer,
normal:f.isSome(m)?m.typedBuffer:null,tangent:f.isSome(k)?k.typedBuffer:null,uv:f.isSome(r)?r.typedBuffer:null,color:f.isSome(p)?p.typedBuffer:null};g=W.georeferenceByTransform(h,a,g);return{transform:g.transform,components:b.components,spatialReference:a.spatialReference,vertexAttributes:new V.MeshVertexAttributes({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:h.color,uv:h.uv})}});return C.apply(this,arguments)}function ba(a){return null!=
a&&a.resolveFile?{busy:!1,request:function(){var b=F._asyncToGenerator(function*(g,c,d){g=a.resolveFile(g);return(yield P(g,{responseType:"image"===c?"image":"binary"===c?"array-buffer":"json",signal:f.isSome(d)?d.signal:null})).data});return function(g,c,d){return b.apply(this,arguments)}}()}:null}function y(a,b){if(f.isNone(a))return"-";a=a.typedBuffer;return`${H.getOrCreateMapValue(b,a.buffer,()=>b.size)}/${a.byteOffset}/${a.byteLength}`}function ha(a){return f.isSome(a)?a.toString():"-"}function ea(a){let b=
0;var g=!1,c=!1,d=!1,e=!1;const h=new Map,t=new Map,m=[];for(const k of a.parts){const {attributes:{position:p,normal:r,color:l,tangent:q,texCoord0:N}}=k;a=`\n      ${y(p,h)}/\n      ${y(r,h)}/\n      ${y(l,h)}/\n      ${y(q,h)}/\n      ${y(N,h)}/\n      ${ha(k.transform)}\n    `;let D=!1;a=H.getOrCreateMapValue(t,a,()=>{D=!0;return{start:b,length:p.count}});D&&(b+=p.count);r&&(d=!0);l&&(g=!0);q&&(c=!0);N&&(e=!0);m.push({gltf:k,writeVertices:D,region:a})}return{vertexAttributes:{position:x.createBuffer(n.BufferViewVec3f64,
b),normal:d?x.createBuffer(n.BufferViewVec3f,b):null,tangent:c?x.createBuffer(n.BufferViewVec4f,b):null,color:g?x.createBuffer(n.BufferViewVec4u8,b):null,texCoord0:e?x.createBuffer(n.BufferViewVec2f,b):null},parts:m,components:[]}}function da(a,b){const g=new G(ia(a.color,a.opacity)),c=a.emissiveFactor?new G(ja(a.emissiveFactor)):null;var d=f.unwrap(f.applySome(a.textureColor,k=>b.get(k))),e=f.unwrap(f.applySome(a.textureNormal,k=>b.get(k))),h=f.unwrap(f.applySome(a.textureEmissive,k=>b.get(k))),
t=f.unwrap(f.applySome(a.textureOcclusion,k=>b.get(k)));a:{switch(a.alphaMode){case "OPAQUE":var m="opaque";break a;case "MASK":m="mask";break a;case "BLEND":m="blend";break a}m=void 0}return new T({color:g,colorTexture:d,normalTexture:e,emissiveColor:c,emissiveTexture:h,occlusionTexture:t,alphaMode:m,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,metallic:a.metallicFactor,roughness:a.roughnessFactor,metallicRoughnessTexture:f.unwrap(f.applySome(a.textureMetallicRoughness,k=>b.get(k)))})}function fa(a,
b,g){if(b.writeVertices){{const {position:t,normal:m,tangent:k,color:p,texCoord0:r}=a.vertexAttributes;var c=b.region.start;const {attributes:l,transform:q}=b.gltf;var d=l.position.count;w.transformMat4(t.slice(c,d),l.position,q);if(f.isSome(l.normal)&&f.isSome(m)){var e=J.normalFromMat4(K.create(),q),h=m.slice(c,d);w.transformMat3(h,l.normal,e);I.hasScaling(e)&&w.normalize(h,h)}else f.isSome(m)&&L.fill(m,0,0,1,{dstIndex:c,count:d});f.isSome(l.tangent)&&f.isSome(k)?(e=J.normalFromMat4(K.create(),
q),h=k.slice(c,d),z.transformMat3(h,l.tangent,e),I.hasScaling(e)&&z.normalize(h,h)):f.isSome(k)&&A.fill(k,0,0,1,1,{dstIndex:c,count:d});f.isSome(l.texCoord0)&&f.isSome(r)?M.normalizeIntegerBuffer(r.slice(c,d),l.texCoord0):f.isSome(r)&&M.fill(r,0,0,{dstIndex:c,count:d});f.isSome(l.color)&&f.isSome(p)?(e=l.color,c=p.slice(c,d),4===e.elementCount?e instanceof n.BufferViewVec4f?z.scale(c,e,255):e instanceof n.BufferViewVec4u8?A.copy(c,e):e instanceof n.BufferViewVec4u16&&z.shiftRight(c,e,8):(A.fill(c,
255,255,255,255),c=n.BufferViewVec3u8.fromTypedArray(c.typedBuffer,c.typedBufferStride),e instanceof n.BufferViewVec3f?w.scale(c,e,255):e instanceof n.BufferViewVec3u8?L.copy(c,e):e instanceof n.BufferViewVec3u16&&w.shiftRight(c,e,8))):f.isSome(p)&&A.fill(p.slice(c,d),255,255,255,255)}}c=b.gltf;a:{d=c.indices||c.attributes.position.count;switch(c.primitiveType){case u.PrimitiveType.TRIANGLES:d=B.trianglesToTriangles(d,Z.generateIndexArray);break a;case u.PrimitiveType.TRIANGLE_STRIP:d=B.triangleStripToTriangles(d);
break a;case u.PrimitiveType.TRIANGLE_FAN:d=B.triangleFanToTriangles(d);break a}d=void 0}if(b=b.region.start)for(e=0;e<d.length;e++)d[e]+=b;a.components.push(new S({faces:d,material:g.get(c.material),trustSourceNormals:!0}))}function ca(a){return{horizontal:O(a.s),vertical:O(a.t)}}function O(a){switch(a){case u.TextureWrapMode.CLAMP_TO_EDGE:return"clamp";case u.TextureWrapMode.MIRRORED_REPEAT:return"mirror";case u.TextureWrapMode.REPEAT:return"repeat"}}function v(a){return 255*a**(1/aa.COLOR_GAMMA)}
function ia(a,b){return R.fromValues(v(a[0]),v(a[1]),v(a[2]),b)}function ja(a){return Q.fromValues(v(a[0]),v(a[1]),v(a[2]))}E.loadGLTFMesh=function(a,b,g){return C.apply(this,arguments)};Object.defineProperties(E,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});