// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(h){function n(c){c=(new Date(c)).getTime();return Number.isNaN(c)?null:c}const q=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;h.parseDate=function(c){var p;var d,e,f,a=q.exec(c);if(a){a=a.groups;var k=+a.year,l=+a.month-1,m=+a.day,g=+(null!=(d=a.hours)?d:0);d=+(null!=(e=a.minutes)?e:0);e=+(null!=(f=a.seconds)?
f:0);if(23<g||59<d||59<e)var b=null;else b=(f=null!=(b=a.ms)?b:"0")?+f.padEnd(3,"0").substring(0,3):0,b=a.isUTC?Date.UTC(k,l,m,g,d,e,b):a.offsetSign?6E4*("+"===a.offsetSign?-1:1)*(60*+a.offsetHours+ +a.offsetMinutes)+Date.UTC(k,l,m,g,d,e,b):(new Date(k,l,m,g,d,e,b)).getTime(),b=Number.isNaN(b)?null:b}else b=null;return null!=(p=b)?p:n(c)};h.parseJSDate=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});