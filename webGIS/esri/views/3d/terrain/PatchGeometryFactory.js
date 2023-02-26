// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ./ElevationData ./interfaces ./PatchGeometry ./PatchGeometryLUT ./PatchRenderData ./TerrainConst ./terrainUtils".split(" "),function(va,fa,aa,O,da,Qa,Ra,wa,M,Da,Ea,fb,nb,Fa,ta){function Sa(a,c,b,d,k,f){const h=c-1;var m=a.vertexAttributes.count,n=2*(Math.min(c-2,d[1])-Math.max(1,d[0]))*(Math.min(c-
2,k[1])-Math.max(1,k[0]));const y=ta.neighborEdgeIndices.map((p,l)=>0===l&&k[1]<c-2||1===l&&d[1]<c-2||2===l&&1<k[0]||3===l&&1<d[0]);var q=a.outerEdges.reduce((p,l,w)=>p+(y[w]?0:h-2+l.count-1),0);const r=b.reduce((p,l)=>p+h*(2*(l.latitudeResolution-1)+1),0);n=3*(n+q+r)*(f?2:1);const e=new (65536<m?Uint32Array:Uint16Array)(n);let g=0;m=(p,l,w)=>{e[g++]=p;e[g++]=l;e[g++]=w};q=(p,l,w)=>{e[g++]=p;e[g++]=l;e[g++]=l;e[g++]=w;e[g++]=w;e[g++]=p};const u=f?q:m,t=c-2,v=h-2;(()=>{for(let p=Math.max(k[0],1)-1;p<
Math.min(k[1],c-2)-1;++p)for(let l=Math.max(d[0],1)-1;l<Math.min(d[1],c-2)-1;++l){const w=p*t+l,B=w+1,E=B+t,G=E-1;u(w,B,E);u(E,G,w)}})();(()=>{for(let l=0;4>l;++l){if(y[l])continue;const w=a.outerEdges[l],B=a.innerEdges[l];let E=0,G=0;const P=w.count,A=B.count;h-2+w.count-1;const H=1===l||2===l?(x,z,J)=>u(x,z,J):(x,z,J)=>u(x,J,z);for(;E<P-1||G<A-1;){const x=B.getVertexOffset(G),z=w.getVertexOffset(E);var p=E<P-1;const J=G<A-1,Z=p?h*(E+.5)/(P-1):0,R=J?1+v*(G+.5)/(A-1):0;p&&(!J||Z<=R)?(++E,p=w.getVertexOffset(E),
H(x,z,p)):(++G,p=B.getVertexOffset(G),H(x,z,p))}}})();b.forEach(p=>{let l=a.outerEdges[p.connectedOuterEdgeOffset].offset0;for(let w=0;w<p.latitudeResolution;++w){const B=0===w?p.rowOffset:l+c;for(let E=0;E<h;E++)u(l,l+1,B+E),w<p.latitudeResolution-1&&u(l+1,B+E+1,B+E),++l;l=B}});a.indices=e;a.indexCount=n}function Ta(a,c){const b=a.localOrigin,d=a.geometryInfo;a=a.geometryState.neighborData.edgeResolutions;const k=d.numVerticesPerSide-2,f=d.vertexAttributes.position.typedBuffer;for(let m=0;4>m;++m){var h=
0===m||2===m;d.innerEdges[m]=new Ea.EdgeDescriptor(f,b,(0===m?k-1:0)*k+(1===m?k-1:0),(h?0:1)*k+(h?1:0),k);h=a[m]+1;d.outerEdges[m]=new Ea.EdgeDescriptor(f,b,c,1,h);c+=h}}function Ua(a,c){Va(a,c);var b=a.geometryState.clippingArea,d=a.tile.extent;b=aa.isSome(b)&&(d[0]<b[0]||d[2]>b[2]||d[1]<b[1]||d[3]>b[3])?gb:hb;for(d=0;4>d;++d)b(a,d,c);Wa(a,c)}function Xa(a,c,b,d,k){const f=Math.cos(b);b=Math.sin(b);const h=Math.sin(c);d=k+d;a[0]=Math.cos(c)*f*d;a[1]=h*f*d;a[2]=b*d}function Ca(a,c,b){return a?d=>
(Math.PI/2-2*Math.atan(Math.exp(-d/c)))*c:d=>d*b}function ib(a,c){var b=a.geometryState;const d=a.tile,k=d.extent,f=aa.unwrapOr(b.clippingArea,k);var h=a.geometryInfo;const m=h.boundingBox,n=h.outerEdges,y=b.neighborData.cornerNeighborData,q=h.uvOffsetAndScale[2],r=h.uvOffsetAndScale[3],e=0<q?1/q:1,g=0<r?1/r:1,u=-h.uvOffsetAndScale[0]*e,t=-h.uvOffsetAndScale[1]*g;h=d.surface.isWebMercatorOnPlateeCarree;const v=Ca(h,h?d.ellipsoid.radius:0,c),p=b.samplerData,l=b.neighborData.edgeNeighbours,w=a.localOrigin;
a=(B,E,G,P,A)=>{var H=k[1]*(1-A)+k[3]*A,x=fa.clamp(k[0]*(1-P)+k[2]*P,f[0],f[2]);H=fa.clamp(H,f[1],f[3]);var z=[H===k[3],x===k[2],H===k[1],x===k[0]];const J=!z[3]&&!z[1]||!z[0]&&!z[2];z=J?z[0]&&aa.isSome(l[0])?l[0]:z[1]&&aa.isSome(l[1])?l[1]:z[2]&&aa.isSome(l[2])?l[2]:z[3]&&aa.isSome(l[3])?l[3]:null:null;G=J?z?z.neighborTile.level===d.level?.5*(M.sampleElevationOrZero(x,H,p)+M.sampleElevationOrZero(x,H,z.neighborSamplerData)):M.sampleElevationOrZero(x,H,z.neighborSamplerData):M.sampleElevationOrZero(x,
H,p):y[G].elevation;x=x*c-w[0];H=v(H)-w[1];G-=w[2];pa(x,H,G,m);P=fa.clamp(u+P*e,0,1);A=fa.clamp(t+A*g,0,1);B.setVertexRawXYZUV(E,x,H,G,P,A)};for(b=0;4>b;++b)h=n[b],a(h,0,0===b?3:1===b?1:2,1===b?1:0,0===b?1:0),a(h,h.count-1,2===b?1:3===b?3:0,3===b?0:1,2===b?0:1)}function Ya(a){Za(a,(c,b,d,k)=>{var f=a.tile.extentInRadians;Xa(c,f[0===b?0:2],f[0===d?1:3],k,a.tile.ellipsoid.radius)})}function Va(a,c){const b=a.tile;aa.isSome(b.renderData.geometryState.clippingArea)?ib(a,c):Za(a,(d,k,f,h)=>{var m=a.tile.extent,
n=Ca(b.surface.isWebMercatorOnPlateeCarree,b.ellipsoid.radius,c);f=0===f?m[1]:m[3];d[0]=(0===k?m[0]:m[2])*c;d[1]=n(f);d[2]=h})}function Za(a,c){var b=a.geometryInfo;const d=b.outerEdges,k=a.geometryState.neighborData.cornerNeighborData,f=b.boundingBox,h=a.localOrigin;a=(m,n,y,q,r)=>{c(qa,y,q,k[n].elevation);for(n=0;3>n;++n)qa[n]-=h[n];pa(qa[0],qa[1],qa[2],f);m.setVertexRawXYZUV(r,qa[0],qa[1],qa[2],y,q)};for(b=0;4>b;++b){const m=d[b];a(m,0===b?3:1===b?1:2,1===b?1:0,0===b?1:0,0);a(m,2===b?1:3===b?3:
0,3===b?0:1,2===b?0:1,m.count-1)}}function Ka(a){var c,b;const d=a.vao;a=a.geometryInfo.vertexAttributes;null==d?void 0:null==(c=d.vertexBuffers)?void 0:null==(b=c.geometry)?void 0:b.setSubData(a.position.typedBuffer)}function $a(a){Ya(a);for(let c=0;4>c;++c)jb(a,c);ab(a)}function jb(a,c){var b,d,k,f=a.geometryState,h=f.neighborData;const m=a.tile;m.level;const n=m.extent;var y=n[2]-n[0],q=n[3]-n[1],r=m.extentInRadians;const e=r[0];r[1];const g=r[2];r[3];const u=m.ellipsoid.radius,t=La(a);r=h.edgeNeighbours[c];
const v=h.edgeResolutions[c],p=1===c||3===c;h=1===c?1:0;var l=0===c?1:0,w=n[0]+h*y;q=n[1]+l*q;var B=e*(1-h)+g*h;const E=t(l);r=null==r?void 0:r.neighborTile;var G=m.level-(null!=(b=null==r?void 0:r.level)?b:m.level);const P=2**G,A=v*P,H=(I=>{if(!I)return 0;const ea=p?0:1;I=m.lij[ea+1]-I.lij[ea+1]*P;return(p?P-1-I:I)*v})(r),x=null==r?void 0:r.extent;b=(c+2)%4;const z=f.samplerData,J=null==r?void 0:null==(d=r.renderData)?void 0:null==(k=d.geometryState)?void 0:k.samplerData;d=r&&0===G;k=(I,ea,ma,Ga)=>
.5*(M.sampleElevationOrZero(I,ea,J)+M.sampleElevationOrZero(ma,Ga,z));f=(I,ea)=>M.sampleElevationOrZero(I,ea,J);const Z=d?k:f;let R=x?1===b?x[2]:x[0]:w,V=x?0===b?x[3]:x[1]:q;k=(I,ea,ma)=>{I=(H+I)/A;V=x[1]*(1-I)+x[3]*I;return Z(R,V,ea,ma)};f=(I,ea,ma)=>{I=(H+I)/A;R=x[0]*(1-I)+x[2]*I;return Z(R,V,ea,ma)};k=r?p?k:f:(I,ea,ma)=>M.sampleElevationOrZero(ea,ma,z);let K=h,X=w,U=B,Q=l,Y=q,F=E,D=Math.sin(U),C=Math.cos(U),L=Math.cos(F),W=Math.sin(F);const T=p?()=>t(Q):()=>E;h=I=>{Q=I;Y=n[1]*(1-I)+n[3]*I;F=T();
L=Math.cos(F);W=Math.sin(F)};l=I=>{K=I;X=n[0]*(1-I)+n[2]*I;U=e*(1-K)+g*K;D=Math.sin(U);C=Math.cos(U)};h=p?h:l;f=a.geometryInfo;l=f.boundingBox;B=f.vertexAttributes;w=B.position.typedBuffer;q=B.uv0.typedBuffer;B=B.normal.typedBuffer;f=f.outerEdges[c];G=f.getVertexOffset(1);b=v+1;var N=a.localOrigin;a=N[0];const ba=N[1];N=N[2];const la=m.surface.shadingEnabled;var ca=1===c?-1:3===c?1:0;c=0===c?-1:2===c?1:0;y/=v;const ha=ca*y,Ma=c*y,kb=1/v*ca,lb=1/v*c,Na=I=>{O.sub(ra,I,ja);O.cross(za,ra,na);O.cross(oa,
za,ra);O.add(S,S,oa)};for(y=1;y<b-1;++y){h(y/v);c=k(y,X,Y);var ka=u+c;c=C*L*ka;ca=D*L*ka;const I=W*ka,ea=c-a,ma=ca-ba,Ga=I-N;pa(ea,ma,Ga,l);ka=Fa.GEOMETRY_VERTEX_STRIDE*G;w[ka+0]=ea;w[ka+1]=ma;w[ka+2]=Ga;q[ka+0]=K;q[ka+1]=Q;la&&(O.set(S,0,0,0),O.set(ja,c,ca,I),O.normalize(na,ja),c=(sa,xa)=>{xa=M.sampleElevationOrZero(X+sa*ha,Y+sa*Ma,xa);xa=u+xa;var Ha=K+sa*kb,Ia=e*(1-Ha)+g*Ha;Ha=Math.sin(Ia);Ia=Math.cos(Ia);sa=t(Q+sa*lb);const bb=Math.cos(sa);sa=da.fromValues(Ia*bb*xa,Ha*bb*xa,Math.sin(sa)*xa);Na(sa)},
r&&c(-1,J),r&&!d||c(1,z),B[ka+0]=S[0],B[ka+1]=S[1],B[ka+2]=S[2]);++G}if(la)for(r=1;r<b-1;++r)f.getVertexRawNormal(S,r),f.getVertex(ja,r),O.normalize(na,ja),f.getVertex(ia,r-1),Na(ia),f.getVertex(ia,r+1),Na(ia),O.normalize(S,S),f.setVertexRawNormal(r,S[0],S[1],S[2])}function cb(a,c,b,d,k,f,h){const m=(y,q)=>M.sampleElevationOrZero(y,q,b),n=(y,q)=>M.sampleElevationOrZero(y,q,d);return h===k?!a||c?m:null:h===f?a?n:null:null}function Ja(a,c,b,d){if(c!==a)return()=>0;a=c?3:2;const k=c?1:0,f=d(a,k),h=d(k,
a),m=(null!=f?1:0)+(null!=h?1:0),n=c?b:0,y=c?0:b;return(q,r,e)=>((null!=f?-(f(q+n,r+y)-e):0)+(null!=h?+(h(q-n,r-y)-e):0))/m}function hb(a,c,b){var d=a.geometryState.neighborData,k=a.tile,f=k.surface,h=f.shadingEnabled,m=d.edgeResolutions[c],n=k.extent;const y=m+1,q=d.edgeNeighbours[c];d=a.localOrigin;const r=a.geometryState.samplerData;var e=(x,z)=>M.sampleElevationOrZero(x,z,r),g=(x,z)=>.5*(M.sampleElevationOrZero(x,z,q.neighborSamplerData)+M.sampleElevationOrZero(x,z,r)),u=(x,z)=>M.sampleElevationOrZero(x,
z,q.neighborSamplerData);const t=(null==q?void 0:q.neighborTile.level)===k.level;g=t?g:u;e=aa.isSome(q)?g:e;g=a.geometryInfo;a=g.outerEdges[c];f=Ca(f.isWebMercatorOnPlateeCarree,k.ellipsoid.radius,b);u=g.boundingBox;g=1===c||3===c;const v=1===c?n[2]:n[0],p=0===c?n[3]:n[1],l=1===c?1:0,w=0===c?1:0;k=(n[2]-n[0])/m;const B=null==q?void 0:q.neighborSamplerData,E=aa.isSome(q);var G=(x,z)=>cb(E,t,r,B,x,z,c);const P=Ja(g,!0,k,G);G=Ja(g,!1,k,G);for(let x=1;x<y-1;++x){var A=x/m,H=g?v:n[0]*(1-A)+n[2]*A;const z=
g?n[1]*(1-A)+n[3]*A:p,J=g?l:A;A=g?A:w;const Z=e(H,z),R=H*b-d[0],V=f(z)-d[1],K=Z-d[2];pa(R,V,K,u);if(h){const X=P(H,z,Z);H=G(H,z,Z);a.setVertexRawXYZUVN(x,R,V,K,J,A,X,H,k)}else a.setVertexRawXYZUV(x,R,V,K,J,A)}if(h)for(b=g?0:1,h=g?1:0,m=1;m<y-1;++m)a.getNormal(Aa,m),n=a.getVertexZ(m-1),d=a.getVertexZ(m+1),d=n-d,n=Aa[0]+.5*b*d,d=Aa[1]+.5*h*d,e=2*k,f=1/Math.sqrt(n*n+d*d+e*e),a.setVertexRawNormal(m,f*n,f*d,f*e)}function gb(a,c,b){var d=a.geometryState.neighborData,k=a.tile,f=k.level,h=k.surface,m=h.shadingEnabled;
const n=d.edgeNeighbours[c];var y=d.edgeResolutions[c],q=k.extent,r=a.geometryState,e=aa.unwrapOr(r.clippingArea,db),g=a.geometryInfo,u=g.uvOffsetAndScale[0];d=g.uvOffsetAndScale[1];var t=u+g.uvOffsetAndScale[2],v=d+g.uvOffsetAndScale[3];t=t>u?1/(t-u):1;v=v>d?1/(v-d):1;u=-u*t;const p=-d*v;d=y+1;var l=[q[3]>e[3],q[2]>e[2],q[1]<e[1],q[0]<e[0]];const w=r.samplerData;r=(K,X)=>M.sampleElevationOrZero(K,X,w);const B=(null==n?void 0:n.neighborTile.level)===f;var E=(K,X)=>{const U=M.sampleElevationOrZero(K,
X,n.neighborSamplerData);return B?.5*(U+M.sampleElevationOrZero(K,X,w)):U};E=aa.isSome(n)?E:r;l=l[c]?r:E;r=g.outerEdges[c];E=g.boundingBox;g=1===c||3===c;const G=fa.clamp(1===c?q[2]:q[0],e[0],e[2]),P=fa.clamp(0===c?q[3]:q[1],e[1],e[3]),A=1===c?1:0,H=0===c?1:0;a=a.localOrigin;h=Ca(h.isWebMercatorOnPlateeCarree,k.ellipsoid.radius,b);k=(q[2]-q[0])/y;const x=null==n?void 0:n.neighborSamplerData,z=aa.isSome(n),J=(null==n?void 0:n.neighborTile.level)===f;var Z=(K,X)=>cb(z,J,w,x,K,X,c);f=Ja(g,!0,k,Z);Z=
Ja(g,!1,k,Z);for(let K=1;K<d-1;++K){var R=K/y,V=g?G:fa.clamp(q[0]*(1-R)+q[2]*R,e[0],e[2]);const X=g?fa.clamp(q[1]*(1-R)+q[3]*R,e[1],e[3]):P,U=g?A:fa.clamp(u+R*t,0,1);R=g?fa.clamp(p+R*v,0,1):H;const Q=l(V,X),Y=V*b-a[0],F=h(X)-a[1],D=Q-a[2];pa(Y,F,D,E);if(m){const C=f(V,X,Q);V=Z(V,X,Q);r.setVertexRawXYZUVN(K,Y,F,D,U,R,C,V,k)}else r.setVertexRawXYZUV(K,Y,F,D,U,R)}if(m)for(b=g?0:1,m=g?1:0,y=1;y<d-1;++y)r.getNormal(Aa,y),q=r.getVertexZ(y-1),e=r.getVertexZ(y+1),e=q-e,q=Aa[0]+.5*b*e,e=Aa[1]+.5*m*e,t=2*k,
v=1/Math.sqrt(q*q+e*e+t*t),r.setVertexRawNormal(y,v*q,v*e,v*t)}function La(a){a=a.tile;if(a.surface.isWebMercator){const b=a.extent,d=a.ellipsoid.radius;return k=>{var f=b[1];return Math.PI/2-2*Math.atan(Math.exp(-(f+k*(b[3]-f))/d))}}const c=a.extentInRadians;return b=>c[1]*(1-b)+c[3]*b}function ab(a){a.tile.surface.shadingEnabled&&eb(a,(c,b,d,k,f,h,m)=>{{var n=ia;const y=La(b);b=b.tile;const q=b.extent;ta.internalAssert(wa.containsXYWithMargin(q,f,h,1));f=(f-q[0])/(q[2]-q[0]);const r=b.extentInRadians;
f=r[0]*(1-f)+r[2]*f;h=y((h-q[1])/(q[3]-q[1]));Xa(n,f,h,m,b.ellipsoid.radius)}O.sub(ra,ia,d);O.cross(za,ra,k);O.cross(c,za,ra)})}function Wa(a,c){a.tile.surface.shadingEnabled&&eb(a,(b,d,k,f,h,m,n)=>{mb(a,c)(ia,h,m,n);d=ia[0]-k[0];f=ia[1]-k[1];k=ia[2]-k[2];b[0]=-d*k;b[1]=-f*k;b[2]=d*d+f*f})}function mb(a,c){return a.tile.surface.isWebMercatorOnPlateeCarree?(b,d,k,f)=>{var h=a.tile.ellipsoid.radius;b[0]=d*c;b[1]=(Math.PI/2-2*Math.atan(Math.exp(-k/h)))*h;b[2]=f}:(b,d,k,f)=>{b[0]=d*c;b[1]=k*c;b[2]=f}}
function eb(a,c){var b;if(a.tile.surface.shadingEnabled){var d=a.geometryState.neighborData.cornerNeighborData,k=a.tile,f=k.extent,h="local"===(null==(b=a.tile.surface.view)?void 0:b.viewingMode);h&&O.set(na,0,0,1);{const y=(e,g,u,t,v,p)=>{e=(1===p?v.extent[0]:3===p?v.extent[2]:e)+Ba[u][0]*t;g=(0===p?v.extent[1]:2===p?v.extent[3]:g)+Ba[u][1]*t;ta.internalAssert(wa.containsXYWithMargin(v.extent,e,g,1));u=M.sampleElevationOrZero(e,g,v.renderData.geometryState.samplerData);c(oa,v.renderData,ja,na,e,
g,u);O.add(S,S,oa)},q=(e,g,u,t)=>{const v=u.extent[0===t||1===t?2:0]+Ba[e][0]*g;e=u.extent[0===t||3===t?3:1]+Ba[e][1]*g;ta.internalAssert(wa.containsXYWithMargin(u.extent,v,e,1));g=M.sampleElevationOrZero(v,e,u.renderData.geometryState.samplerData);c(oa,u.renderData,ja,na,v,e,g);O.add(S,S,oa)},r=(e,g,u,t,v,p)=>{var l=Ba[e][0]*g;g*=Ba[e][1];e=u.extent[0===t||1===t?2:0]+l;t=u.extent[0===t||3===t?3:1]+g;l=v.extent[0===p||1===p?2:0]+l;g=v.extent[0===p||3===p?3:1]+g;ta.internalAssert(wa.containsXYWithMargin(u.extent,
e,t,1));ta.internalAssert(wa.containsXYWithMargin(v.extent,l,g,1));p=M.sampleElevationOrZero(e,t,u.renderData.geometryState.samplerData);v=M.sampleElevationOrZero(l,g,v.renderData.geometryState.samplerData);c(oa,u.renderData,ja,na,e,t,.5*(p+v));O.add(S,S,oa)};b=e=>{var g=0===e||1===e?f[2]:f[0],u=0===e||3===e?f[3]:f[1];e=d[e].cornerTiles;var t=e.reduce((l,w)=>{var B;return Math.min(l,null!=(B=null==w?void 0:w.level)?B:Infinity)},Infinity);for(var v=0;4>v;++v){var p=e[v];ua[v]=(null==p?void 0:p.level)===
t?p:null}for(e=0;4>e;++e)if(t=ua[(e+3)%4],v=ua[e],null!=t&&t!==k&&t===v){v=(t.extent[2]-t.extent[0])/Math.max(t.renderData.geometryState.neighborData.edgeResolutions[(e+2)%4],2**(k.level-t.level));p=(e+0)%4;const l=(e+1)%4;y(g,u,(e+3)%4,v,t,e);y(g,u,p,v,t,e);y(g,u,l,v,t,e);return S}ta.internalAssert(ua.some(l=>(null==l?void 0:l.isLoaded)||l===k));g=ua.reduce((l,w)=>w?w.extent[2]-w.extent[0]:l,0);u=ua.reduce((l,w)=>{var B;return Math.max(l,null!=(B=null==w?void 0:w.renderData.geometryState.numVerticesPerSide)?
B:1)},1);g/=u;for(u=0;4>u;++u)if(e=ua[(u+3)%4],t=ua[(u+0)%4],e||t)v=0===u?1:1===u?2:2===u?3:0,p=0===u?2:1===u?3:2===u?0:1,e&&t?r(u,g,e,v,t,p):q(u,g,null!=e?e:t,e?v:p);return S};for(var m=0;4>m;++m){var n=a.geometryInfo.outerEdges[m];n.getVertex(ja,1===m||2===m?0:n.count-1);h||O.normalize(na,ja);O.set(S,0,0,0);n=b(m);O.normalize(Oa[m],n)}}a=a.geometryInfo.outerEdges;for(h=0;4>h;++h)b=a[h],m=Oa[0===h?3:1===h?1:2],b.setVertexRawNormal(0,m[0],m[1],m[2]),m=Oa[2===h?1:3===h?3:0],b.setVertexRawNormal(b.count-
1,m[0],m[1],m[2])}}function pa(a,c,b,d){a<d[0]?d[0]=a:a>d[3]&&(d[3]=a);c<d[1]?d[1]=c:c>d[4]&&(d[4]=c);b<d[2]?d[2]=b:b>d[5]&&(d[5]=b)}const Ba=[[0,1],[1,0],[0,-1],[-1,0]],ya=new fb.PatchGeometryLUT,db=wa.fromValues(-Infinity,-Infinity,Infinity,Infinity),qa=da.create(),ia=da.create(),ra=da.create(),za=da.create(),oa=da.create(),ja=da.create(),Pa=da.create(),na=da.create(),S=da.create(),Aa=da.create(),Oa=[da.create(),da.create(),da.create(),da.create()],ua=[null,null,null,null];va.createPlanarGlobePatch=
function(a,c){var b=a.tile;const d=b.extent,k=a.localOrigin,f=a.geometryState;var h=b.surface;const m=h.isWebMercatorOnPlateeCarree,n=h.shadingEnabled,y=d[0],q=d[1],r=d[2]-y,e=d[3]-q;var g=f.clippingArea;h=aa.isSome(g)?Math.max(0,(g[0]-d[0])/r):0;const u=aa.isSome(g)?Math.max(0,(g[1]-d[1])/e):0,t=aa.isSome(g)?Math.min(1,(g[2]-d[0])/r):1,v=aa.isSome(g)?Math.min(1,(g[3]-d[1])/e):1;var p=t-h,l=v-u;const w=0<p?1/p:1,B=0<l?1/l:1,E=-h*w,G=-u*B;p=f.numVerticesPerSide;const P=p-1;l=(p-2)**2;var A=f.neighborData.edgeResolutions.reduce((F,
D)=>F+D+1,0);l+=A;A=Ea.acquireTerrainAttributes(l);const H=A.position.typedBuffer,x=A.uv0.typedBuffer,z=A.normal.typedBuffer,J=a.geometryInfo,Z=J.boundingBox;Ra.empty(Z);let R=0;b=b.ellipsoid.radius;const V=f.samplerData;g=aa.isSome(g)?g:db;const K=wa.fromValues(Math.max(d[0],g[0]),Math.max(d[1],g[1]),Math.min(d[2],g[2]),Math.min(d[3],g[3])),X=k[0],U=k[1],Q=k[2],Y=Ca(m,b,c);(()=>{for(let ba=1;ba<=P-1;ba++){var F=ba/P,D=G+F*B;F=fa.clamp(q+F*e,K[1],K[3]);D=fa.clamp(D,0,1);const la=Y(F)-U,ca=r/P;for(let ha=
1;ha<=P-1;ha++){var C=ha/P,L=E+C*w;C=fa.clamp(y+C*r,K[0],K[2]);var W=fa.clamp(L,0,1);L=M.sampleElevationOrZero(C,F,V);var T=C*c-X,N=L-Q;pa(T,la,N,Z);L=Fa.GEOMETRY_VERTEX_STRIDE*R;H[L+0]=T;H[L+1]=la;H[L+2]=N;x[L+0]=W;x[L+1]=D;if(n){T=M.sampleElevationOrZero(C+ca,F,V);N=M.sampleElevationOrZero(C-ca,F,V);W=M.sampleElevationOrZero(C,F+ca,V);const Ma=M.sampleElevationOrZero(C,F-ca,V);C=.25*(N-T);W=.25*(Ma-W);T=ca;N=Math.sqrt(C*C+W*W+T*T);z[L+0]=C/N;z[L+1]=W/N;z[L+2]=T/N}++R}}})();J.numVerticesPerSide=
f.numVerticesPerSide;J.vertexAttributes=A;Qa.set(a.geometryInfo.uvOffsetAndScale,h,u,t-h,v-u);Ta(a,R);Ua(a,c);R=l;Sa(J,f.numVerticesPerSide,[],[0,p-1],[0,p-1],f.wireframe);a.intersectionData=null};va.createSphericalGlobePatch=function(a,c){var b=a.tile;const {extent:d,extentInRadians:k,surface:f}=b,h=a.localOrigin,m=a.geometryState;var n=f.isWebMercator;const y=f.shadingEnabled,q=m.numVerticesPerSide,r=q-1,e=(q-2)**2,g=n&&(c===Da.PatchType.HAS_SOUTH_POLE||c===Da.PatchType.HAS_BOTH_POLES),u=n&&(c===
Da.PatchType.HAS_NORTH_POLE||c===Da.PatchType.HAS_BOTH_POLES);var t=6*((g?1:0)+(u?1:0))*(r+1);c=m.neighborData;n=c.edgeResolutions.reduce((U,Q)=>U+Q+1,0);const v=Ea.acquireTerrainAttributes(e+t+n);t=a.geometryInfo;t.numVerticesPerSide=m.numVerticesPerSide;t.vertexAttributes=v;Qa.set(t.uvOffsetAndScale,0,0,1,1);const p=v.position.typedBuffer,l=v.uv0.typedBuffer,w=v.normal.typedBuffer,B=t.boundingBox;Ra.empty(B);const E=h[0],G=h[1],P=h[2];ya.update(r,k);let A=0;const H=m.samplerData,x=b.ellipsoid.radius,
z=La(a),J=q-2,Z=d[0],R=d[2],V=d[1],K=d[3];(()=>{for(let D=1;D<=J;D++){const C=D/r,L=V*(1-C)+K*C;var U=z(C);const W=Math.cos(U);U=Math.sin(U);for(let T=1;T<=J;T++){const N=T/r;var Q=ya.sinLonLUT[T],Y=ya.cosLonLUT[T],F=x+M.sampleElevationOrZero(Z*(1-N)+R*N,L,H);Y=Y*W*F-E;Q=Q*W*F-G;F=U*F-P;pa(Y,Q,F,B);const ba=Fa.GEOMETRY_VERTEX_STRIDE*A;p[ba+0]=Y;p[ba+1]=Q;p[ba+2]=F;l[ba+0]=N;l[ba+1]=C;++A}}})();y&&(()=>{const U=D=>{O.subtract(ra,D,Pa);O.cross(za,ra,na);O.cross(oa,za,ra);return oa},Q=v.position,Y=v.normal;
A=0;const F=(D,C,L)=>{if(1<D&&1<C&&D<J&&C<J)Q.getVec(A+L,ia);else{L=D/r;var W=Z*(1-L)+R*L;L=ya.sinLonLUT[D];D=ya.cosLonLUT[D];var T=C/r;C=V*(1-T)+K*T;var N=z(T);T=Math.cos(N);N=Math.sin(N);W=x+M.sampleElevationOrZero(W,C,H);O.set(ia,D*T*W-E,L*T*W-G,N*W-P)}O.add(S,S,U(ia))};for(let D=1;D<=J;D++)for(let C=1;C<=J;C++)Q.getVec(A,Pa),O.add(ja,Pa,a.localOrigin),O.normalize(na,ja),O.set(S,0,0,0),F(C-1,D,-1),F(C+1,D,1),F(C,D-1,-J),F(C,D+1,+J),O.normalize(S,S),Y.setVec(A,S),++A})();A=e;Ta(a,e);$a(a);A=e+n;
const X=[];(()=>{const U=(Q,Y)=>{Y*=q;pa(-E,-G,-P+Q*x,B);X.push({connectedRowOffset:Y,connectedOuterEdgeOffset:1===Q?0:2,rowOffset:A,latitudeResolution:6});Y=Math.PI/2-2*Math.atan(Math.exp(-(-1===Q?V:K)/x));const F=Q*Math.PI/2-Y;Q=.99*(1===Q?1:-1);const D=x+0;for(let W=1;6>=W;++W){var C=Y+W/6*F;const T=Math.cos(C);C=Math.sin(C);for(let N=0;N<=r;N++){var L=N/r;const ba=ya.cosLonLUT[N]*T*D-E,la=ya.sinLonLUT[N]*T*D-G,ca=C*D-P;pa(ba,la,ca,B);const ha=Fa.GEOMETRY_VERTEX_STRIDE*A;p[ha+0]=ba;p[ha+1]=la;
p[ha+2]=ca;l[ha+0]=L;l[ha+1]=Q;y&&(L=1/Math.sqrt(ba*ba+la*la+ca*ca),w[ha+0]=L*ba,w[ha+1]=L*la,w[ha+2]=L*ca);++A}}};g&&U(-1,0);u&&U(1,r)})();Sa(t,m.numVerticesPerSide,X,[0,q-1],[0,q-1],m.wireframe);a.intersectionData=null;for(b=0;4>b;++b)ta.internalAssert(t.outerEdges[b].count===c.edgeResolutions[b]+1)};va.updateCornerElevationsPlanar=function(a,c){Va(a,c);Wa(a,c);Ka(a)};va.updateCornerElevationsSpherical=function(a){var c,b;Ya(a);ab(a);const d=a.vao;a=a.geometryInfo.vertexAttributes;null==d?void 0:
null==(c=d.vertexBuffers)?void 0:null==(b=c.geometry)?void 0:b.setSubData(a.position.typedBuffer)};va.updateEdgesElevationsAndNormalsPlanar=function(a,c){Ua(a,c);Ka(a)};va.updateEdgesElevationsSpherical=function(a){$a(a);Ka(a)};Object.defineProperties(va,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});