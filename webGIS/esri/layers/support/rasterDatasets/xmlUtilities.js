// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function f(a,b){if(!a||!b)return[];var c=b;b.includes("/")?(c=b.slice(0,b.indexOf("/")),b=b.slice(b.indexOf("/")+1)):b="";const e=[];if(b){a=f(a,c);for(c=0;c<a.length;c++)f(a[c],b).forEach(l=>e.push(l));return e}b=a.getElementsByTagNameNS("*",c);if(!b||0===b.length)return[];for(a=0;a<b.length;a++)e.push(b[a]||b.item[a]);return e}function g(a,b){if(!a||!b)return null;let c=b;b.includes("/")?(c=b.slice(0,b.indexOf("/")),b=b.slice(b.indexOf("/")+1)):b="";a=f(a,c);return 0<
a.length?b?g(a[0],b):a[0]:null}function h(a,b=null){if(a=b?g(a,b):a)if(a=a.textContent||a.nodeValue)return a.trim();return null}function k(a,b){a=f(a,b);b=[];let c;for(let e=0;e<a.length;e++)if(c=a[e].textContent||a[e].nodeValue)c=c.trim(),""!==c&&b.push(c);return b}d.getElement=g;d.getElementNumericValue=function(a,b){a=h(a,b);return Number(a)};d.getElementNumericValues=function(a,b){return k(a,b).map(c=>Number(c))};d.getElementValue=h;d.getElementValues=k;d.getElements=f;d.getNodeNameIgnoreNS=function(a){return a.nodeName.slice(a.nodeName.lastIndexOf(":")+
1)};d.getSpaceDelimitedNumericValues=function(a,b=null){a=h(a,b);return null==a?void 0:a.split(" ").map(c=>Number(c))};d.isSameTagIgnoreNS=function(a,b){var c;a=null==a?void 0:null==(c=a.nodeName)?void 0:c.toLowerCase();b=b.toLowerCase();return a.slice(a.lastIndexOf(":")+1)===b};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});