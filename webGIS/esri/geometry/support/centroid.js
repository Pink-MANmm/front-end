// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./coordsUtils"],function(p,y){function z(a,c){if(!a||!a.length)return null;const b=[],h=[],d=c?[Infinity,-Infinity,Infinity,-Infinity,Infinity,-Infinity]:[Infinity,-Infinity,Infinity,-Infinity];for(let k=0,e=a.length;k<e;k++){const f=G(a[k],c,d);f&&h.push(f)}h.sort((k,e)=>{let f=k[2]-e[2];0===f&&c&&(f=k[4]-e[4]);return f});h.length&&(b[0]=h[0][0],b[1]=h[0][1],c&&(b[2]=h[0][3]),b[0]<d[0]||b[0]>d[1]||b[1]<d[2]||b[1]>d[3]||c&&(b[2]<d[4]||b[2]>d[5]))&&(b.length=0);if(!b.length)if(a=
a[0]&&a[0].length?A(a[0],c):null)b[0]=a[0],b[1]=a[1],c&&2<a.length&&(b[2]=a[2]);else return null;return b}function G(a,c,b){let h=0,d=0,k=0,e=0,f=0;const g=a.length?a[0][0]:0,n=a.length?a[0][1]:0,q=a.length&&c?a[0][2]:0;for(let m=0;m<a.length;m++){var l=a[m];const B=a[(m+1)%a.length],[r,t,u]=l,v=r-g,C=t-n,D=c?u-q:void 0,[H,I,J]=B,w=H-g,E=I-n,F=c?J-q:void 0,x=v*E-w*C;e+=x;h+=(v+w)*x;d+=(C+E)*x;c&&2<l.length&&2<B.length&&(l=v*F-w*D,k+=(D+F)*l,f+=l);r<b[0]&&(b[0]=r);r>b[1]&&(b[1]=r);t<b[2]&&(b[2]=t);
t>b[3]&&(b[3]=t);c&&(u<b[4]&&(b[4]=u),u>b[5]&&(b[5]=u))}0<e&&(e*=-1);0<f&&(f*=-1);if(!e)return null;e*=.5;f*=.5;a=[h/(6*e)+g,d/(6*e)+n,e];c&&(b[4]===b[5]||0===f?(a[3]=(b[4]+b[5])/2,a[4]=0):(a[3]=k/(6*f)+q,a[4]=f));return a}function A(a,c){const b=c?[0,0,0]:[0,0],h=c?[0,0,0]:[0,0];let d=0,k=0,e=0,f=0;for(let n=0,q=a.length;n<q-1;n++){var g=a[n];const l=a[n+1];if(g&&l){b[0]=g[0];b[1]=g[1];h[0]=l[0];h[1]=l[1];c&&2<g.length&&2<l.length&&(b[2]=g[2],h[2]=l[2]);const m=y.getLength(b,h);m&&(d+=m,g=y.getMidpoint(g,
l),k+=m*g[0],e+=m*g[1],c&&2<g.length&&(f+=m*g[2]))}}return 0<d?c?[k/d,e/d,f/d]:[k/d,e/d]:a.length?a[0]:null}p.extentCentroid=function(a){return a?a.hasZ?[a.xmax-a.xmin/2,a.ymax-a.ymin/2,a.zmax-a.zmin/2]:[a.xmax-a.xmin/2,a.ymax-a.ymin/2]:null};p.lineCentroid=A;p.polygonCentroid=function(a){return a?z(a.rings,a.hasZ):null};p.ringsCentroid=z;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});