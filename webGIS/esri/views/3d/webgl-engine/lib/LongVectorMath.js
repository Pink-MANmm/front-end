// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.add=function(c,d,b){b=b||c;b.length=c.length;for(let a=0;a<c.length;a++)b[a]=c[a]+d[a];return b};e.dotProduct=function(c,d){let b=0;for(let a=0;a<c.length;a++)b+=c[a]*d[a];return b};e.elementwiseProduct=function(c,d,b){b=b||c;b.length=c.length;for(let a=0;a<c.length;a++)b[a]=c[a]*d[a];return b};e.scalarProduct=function(c,d,b){b=b||c;b.length=c.length;for(let a=0;a<c.length;a++)b[a]=c[a]*d;return b};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});