/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{I as t}from"./mathUtils.js";function n(n,f,i){const u=n.byteLength/(4*f),s=new Uint32Array(n,0,u*f);let c=new Uint32Array(u);const a=i?.minReduction??0,h=i?.originalIndices||null,g=h?h.length:0,y=i?.componentOffsets||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n)}else U=u;const w=Math.floor(1.1*U)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(t(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!y&&!!h,b=m?g:u,d=m?new Uint32Array(g):null,p=1.96;let M=0!==a?Math.ceil(4*p*p/(a*a)*a*(1-a)):b,q=1,I=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+p*Math.sqrt(n*(1-n)/t)<a)return null;M*=2}if(t===I){for(let t=0;t<2*w;t++)o[t]=0;if(h)for(let t=y[q-1];t<y[q];t++)d[t]=c[h[t]];I=y[++q]}const n=m?h[t]:t,r=n*f,i=l(s,r,f);let u=i%w,g=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(s,r,t*f,f)){g=c[t];break}}u++,u>=w&&(u-=w)}g===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),c[n]=g}if(0!==a&&1-A/u<a)return null;if(m){for(let t=y[q-1];t<d.length;t++)d[t]=c[h[t]];c=d}const j=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)c[t]===A&&(r(s,(m?h[t]:t)*f,j,A*f,f),A++);if(h&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=c[h[n]];c=t}return{buffer:j.buffer,indices:c,uniqueCount:A}}function e(t,n,e,r){for(let l=0;l<r;l++)if(t[n+l]!==t[e+l])return!1;return!0}function r(t,n,e,r,l){for(let o=0;o<l;o++)e[r+o]=t[n+o]}function l(t,n,e){let r=0;for(let l=0;l<e;l++)r=t[n+l]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let o=null;export{n as d};
