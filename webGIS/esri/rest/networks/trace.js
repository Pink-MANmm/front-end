// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/TraceResult"],function(k,l,m,g,n){function h(){h=l._asyncToGenerator(function*(d,c,f){d=g.parseUrl(d);var e=c.toJSON();e.traceLocations=JSON.stringify(c.traceLocations);c.resultTypes&&(e.resultTypes=JSON.stringify(c.resultTypes));e=g.encode({...d.query,...e,f:"json"});f=g.asValidOptions(e,f);return m(`${d.path}/trace`,f).then(a=>{var b=c.outSpatialReference;({data:a}=a);a?(a=n.fromJSON(a.traceResults),
a.aggregatedGeometry&&b&&(a.aggregatedGeometry.line&&(a.aggregatedGeometry.line.spatialReference=b.clone()),a.aggregatedGeometry.multipoint&&(a.aggregatedGeometry.multipoint.spatialReference=b.clone()),a.aggregatedGeometry.polygon&&(a.aggregatedGeometry.polygon.spatialReference=b.clone())),b=a):b=null;return b})});return h.apply(this,arguments)}k.trace=function(d,c,f){return h.apply(this,arguments)};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});