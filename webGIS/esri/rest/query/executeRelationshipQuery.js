// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../utils ./operations/queryRelatedRecords ../support/FeatureSet ../support/RelationshipQuery".split(" "),function(d,h,k,l,r,m){function e(){e=h._asyncToGenerator(function*(a,b,c){b=m.from(b);a=k.parseUrl(a);return l.executeRelationshipQuery(a,b,c).then(f=>{const n=f.data,p={};Object.keys(n).forEach(q=>p[q]=r.fromJSON(n[q]));return p})});return e.apply(this,arguments)}function g(){g=h._asyncToGenerator(function*(a,b,c){b=m.from(b);a=k.parseUrl(a);
return l.executeRelationshipQueryForCount(a,b,{...c}).then(f=>f.data)});return g.apply(this,arguments)}d.executeRelationshipQuery=function(a,b,c){return e.apply(this,arguments)};d.executeRelationshipQueryForCount=function(a,b,c){return g.apply(this,arguments)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});