// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(a){a=a.toLowerCase().split(" ").join("-");switch(a){case "serif":return"noto-serif";case "sans-serif":return"arial-unicode-ms";case "monospace":return"ubuntu-mono";case "fantasy":return"cabin-sketch";case "cursive":return"redressed";default:return a}}b.getFontDecorationTop=function(a){switch(a){case "underline":return-26;case "line-through":return-18}return NaN};b.getFontFamily=d;b.getFullyQualifiedFontName=function(a){a:{if(a.weight)switch(a.weight.toLowerCase()){case "bold":case "bolder":var c=
"-bold";break a}c=""}a:{if(a.style)switch(a.style.toLowerCase()){case "italic":case "oblique":var e="-italic";break a}e=""}c+=e;return d(a.family)+(0<c.length?c:"-regular")};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});