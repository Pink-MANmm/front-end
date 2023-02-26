// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../../../../../core/PooledArray ../../../../../chunks/mat3 ../../../../../chunks/mat3f64 ../../../../../chunks/quat ../../../../../chunks/quatf64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/plane ../../../support/orientedBoundingBox ../../lib/depthRange".split(" "),function(J,K,F,L,T,U,V,k,x,M,N,w){function G(b,c,a){return k.set(b,c.data[a+0],c.data[a+1],c.data[a+2])}function g(b,c){b.push(c[0]);b.push(c[1]);b.push(c[2])}
function W(b,c,a,q){U.conjugate(O,b.quaternion);k.sub(l,c,b.center);k.transformQuat(l,l,O);const r=8*((l[0]<-b.halfSize[0]?-1:l[0]>b.halfSize[0]?1:0)+3*(l[1]<-b.halfSize[1]?-1:l[1]>b.halfSize[1]?1:0)+9*(l[2]<-b.halfSize[2]?-1:l[2]>b.halfSize[2]?1:0)+13);c=P[r];if(0===c)return c;L.fromQuat(C,b.quaternion);L.scale(C,C,b.halfSize);const p=(e,d)=>{d=P[r+d+1];k.set(e,((d&1)<<1)-1,(d&2)-1,((d&4)>>1)-1);k.transformMat3(e,e,C);return k.add(e,b.center,e)};a.length=0;g(a,p(H,0));g(a,p(Q,1));g(a,p(l,2));g(a,
p(R,3));q(a);if(1===c)return c;a.length=0;g(a,H);g(a,R);g(a,p(l,4));g(a,p(S,5));q(a);if(2===c)return c;a.length=0;g(a,H);g(a,S);g(a,p(l,6));g(a,Q);q(a);return c}const D=new F({allocator:b=>b||{near:Infinity,far:-Infinity,mask:0,object:null},deallocator:b=>{b.object=null;return b}}),u=w.empty(),h=x.create(),y=x.create(),X=new F({deallocator:null}),Y=new F({deallocator:null}),P=(()=>{const b=new Int8Array(216);let c=0;const a=q=>{for(let r=0;r<q.length;r++)b[c+r]=q[r];c+=8};a([3,0,6,2,3,1,5,4]);a([2,
0,2,3,1,5,4,0]);a([3,1,0,2,3,7,5,4]);a([2,0,1,3,2,6,4,0]);a([1,0,1,3,2,0,0,0]);a([2,1,5,7,3,2,0,0]);a([3,2,0,1,3,7,6,4]);a([2,2,0,1,3,7,6,0]);a([3,3,0,1,5,7,6,2]);a([2,0,1,5,4,6,2,0]);a([1,0,1,5,4,0,0,0]);a([2,1,3,7,5,4,0,0]);a([1,0,2,6,4,0,0,0]);a([0,0,0,0,0,0,0,0]);a([1,1,3,7,5,0,0,0]);a([2,2,3,7,6,4,0,0]);a([1,2,3,7,6,0,0,0]);a([2,3,1,5,7,6,2,0]);a([3,4,0,1,5,7,6,2]);a([2,5,7,6,4,0,1,0]);a([3,5,0,1,3,7,6,4]);a([2,4,5,7,6,2,0,0]);a([1,4,5,7,6,0,0,0]);a([2,5,1,3,7,6,4,0]);a([3,6,0,2,3,7,5,4]);a([2,
6,2,3,7,5,4,0]);a([3,7,6,2,3,1,5,4]);return b})(),C=T.create(),O=V.create(),l=x.create(),H=x.create(),Q=x.create(),R=x.create(),S=x.create();J.computeDepthRange=function(b,c){const a=w.empty(),{eye:q,frustum:r,viewForward:p}=b;c.forAll(e=>{var d=K.isSome(e.offsetObb)?e.offsetObb:e.obb;const f=k.dot(k.sub(l,d.center,q),p),m=N.projectedRadius(d,p);if(!w.within(a,f-m)||!w.within(a,f+m)){a:{var n=0;for(let v=0;4>v;v++){const t=N.intersectPlane(d,r[v]);if(0<t){d=-1;break a}0===t&&(n|=1<<v)}d=n}-1!==d&&
(0===d?(u.far=f+m,u.near=f-m,w.union(a,u)):(n=D.pushNew(),n.near=f-m,n.far=f+m,n.mask=d,n.object=e))}});for(b=0;b<D.length;b++){const e=D.data[b];w.within(a,e.near)&&w.within(a,e.far)||(u.far=e.far,u.near=Infinity,c=K.isSome(e.object.offsetObb)?e.object.offsetObb:e.object.obb,0===W(c,q,X,d=>{var f=Y;for(var m=0;4>m&&0<d.length;m++)if(0!==(e.mask&1<<m)){{var n=r[m],v=d,t=f;t.length=0;const I=v.length-3;G(h,v,I);const z=M.signedDistance(n,h);0>=z&&(t.push(h[0]),t.push(h[1]),t.push(h[2]));let E=0,A=
z;for(E;E<I;E+=3){G(y,v,E);const B=M.signedDistance(n,y);0>A*B&&(k.lerp(h,y,h,B/(B-A)),g(t,h));0>=B&&g(t,y);A=B;k.copy(h,y)}0>A*z&&(G(y,v,I),k.lerp(h,y,h,z/(z-A)),g(t,h))}n=d;d=f;f=n}for(f=0;f<d.length;f+=3)k.set(h,d.data[f+0],d.data[f+1],d.data[f+2]),m=k.dot(k.sub(h,h,q),p),u.near=Math.min(u.near,m)})&&(u.near=0),w.union(a,u))}D.length=0;return a};Object.defineProperties(J,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});