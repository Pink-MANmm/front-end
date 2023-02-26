/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{B as s,j as t,k as n,C as a,n as o,h as c,f as r,m as i,D as h}from"./mathUtils.js";import{E as u}from"./common.js";function M(s,t,n){n*=.5;const a=Math.sin(n);return s[0]=a*t[0],s[1]=a*t[1],s[2]=a*t[2],s[3]=Math.cos(n),s}function f(s,t){const n=2*Math.acos(t[3]),a=Math.sin(n/2);return a>u?(s[0]=t[0]/a,s[1]=t[1]/a,s[2]=t[2]/a):(s[0]=1,s[1]=0,s[2]=0),n}function e(s,t,n){const a=t[0],o=t[1],c=t[2],r=t[3],i=n[0],h=n[1],u=n[2],M=n[3];return s[0]=a*M+r*i+o*u-c*h,s[1]=o*M+r*h+c*i-a*u,s[2]=c*M+r*u+a*h-o*i,s[3]=r*M-a*i-o*h-c*u,s}function m(s,t){const n=t[0],a=t[1],o=t[2],c=t[3],r=n*n+a*a+o*o+c*c,i=r?1/r:0;return s[0]=-n*i,s[1]=-a*i,s[2]=-o*i,s[3]=c*i,s}function j(s,t){return s[0]=-t[0],s[1]=-t[1],s[2]=-t[2],s[3]=t[3],s}function p(s,t,n,a){const o=.5*Math.PI/180;t*=o,n*=o,a*=o;const c=Math.sin(t),r=Math.cos(t),i=Math.sin(n),h=Math.cos(n),u=Math.sin(a),M=Math.cos(a);return s[0]=c*h*M-r*i*u,s[1]=r*i*M+c*h*u,s[2]=r*h*u-c*i*M,s[3]=r*h*M+c*i*u,s}const I=i,P=h,g=s;function k(s,c,r){const i=t(c,r);return i<-.999999?(n(l,x,c),a(l)<1e-6&&n(l,B,c),o(l,l),M(s,l,Math.PI),s):i>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(n(l,c,r),s[0]=l[0],s[1]=l[1],s[2]=l[2],s[3]=1+i,P(s,s))}const l=c(),x=r(1,0,0),B=r(0,1,0);export{I as a,j as c,g as e,p as f,f as g,m as i,e as m,k as r,M as s};
