// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../utils ./operations/pbfJSONFeatureSet ./operations/query ../support/FeatureSet ../support/Query".split(" "),function(d,g,l,m,n,p,h){function e(){e=g._asyncToGenerator(function*(b,a,c){b=yield k(b,h.from(a),c);return p.fromJSON(b)});return e.apply(this,arguments)}function k(b,a,c){return f.apply(this,arguments)}function f(){f=g._asyncToGenerator(function*(b,a,c){b=l.parseUrl(b);c={...c};a=h.from(a);({data:a}=yield n.executeQueryPBF(b,a,new m.JSONFeatureSetParserContext({sourceSpatialReference:a.sourceSpatialReference,
applyTransform:!a.quantizationParameters}),c));return a});return f.apply(this,arguments)}d.executeQueryPBF=function(b,a,c){return e.apply(this,arguments)};d.executeRawQueryPBF=k;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});