// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry","../../../support/fieldUtils"],function(n,w,E,F,G){function*y(a){switch(a.type){case "Feature":yield a;break;case "FeatureCollection":for(const b of a.features)b&&(yield b)}}function*H(a){if(!a)return null;switch(a.type){case "Point":yield a.coordinates;break;case "LineString":case "MultiPoint":yield*a.coordinates;break;case "MultiLineString":case "Polygon":for(const b of a.coordinates)yield*b;break;case "MultiPolygon":for(const b of a.coordinates)for(const c of b)yield*c}}
function*I(a,b={}){const {geometryType:c,objectIdField:d}=b;for(const k of a){var f;const {geometry:e,properties:p,id:q}=k;if(e&&u[e.type]!==c)continue;a=p||{};let g=null!=(f=a[d])?f:null;d&&null!=q&&!a[d]&&(a[d]=g=q);yield new E.OptimizedFeature(e?J(new F,e,b):null,a,null,g)}}function K(a){for(const b of a)if(2<b.length)return!0;return!1}function z(a){let b=0;for(let c=0;c<a.length;c++){const d=a[c],f=a[(c+1)%a.length];b+=d[0]*f[1]-f[0]*d[1]}return 0>=b}function A(a){const b=a[0],c=a[a.length-1];
b[0]===c[0]&&b[1]===c[1]&&b[2]===c[2]||a.push(b);return a}function J(a,b,c){switch(b.type){case "LineString":return r(a,b.coordinates,c),a;case "MultiLineString":for(const f of b.coordinates)r(a,f,c);return a;case "MultiPoint":return r(a,b.coordinates,c),a;case "MultiPolygon":for(var d of b.coordinates)for(B(a,d[0],c),b=1;b<d.length;b++)C(a,d[b],c);return a;case "Point":return x(a,b.coordinates,c),a;case "Polygon":d=b.coordinates;B(a,d[0],c);for(b=1;b<d.length;b++)C(a,d[b],c);return a}}function B(a,
b,c){b=A(b);z(b)?r(a,b,c):D(a,b,c)}function C(a,b,c){b=A(b);z(b)?D(a,b,c):r(a,b,c)}function r(a,b,c){for(const d of b)x(a,d,c);a.lengths.push(b.length)}function D(a,b,c){for(let d=b.length-1;0<=d;d--)x(a,b[d],c);a.lengths.push(b.length)}function x(a,b,c){const [d,f,k]=b;a.coords.push(d,f);c.hasZ&&a.coords.push(k||0)}const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};
n.createOptimizedFeatures=function(a,b){return Array.from(I(y(a),b))};n.getGeometryType=function(a){return u[a]};n.inferLayerProperties=function(a,b={}){const c=[];var d=new Set;const f=new Set;var k=!1;let e=null,p=!1,q=void 0;({geometryType:b=null}=b);var g=!1;for(const t of y(a)){const {geometry:v,properties:l,id:m}=t;if(v&&(b||(b=u[v.type]),u[v.type]!==b))continue;k||(k=H(v),k=K(k));!p&&(p=null!=m)&&(q=typeof m,e=Object.keys(l).filter(h=>l[h]===m));p&&null!=m&&(1<e.length?e=e.filter(h=>l[h]===
m):1===e.length&&(e=l[e[0]]===m?e:[]));if(!g&&l){a=!0;for(const h in l)if(!d.has(h))if(g=l[h],null==g)a=!1,f.add(h);else{a:switch(typeof g){case "string":g="esriFieldTypeString";break a;case "number":g="esriFieldTypeDouble";break a;default:g="unknown"}"unknown"===g?f.add(h):(f.delete(h),d.add(h),c.push({name:h,alias:h,type:g}))}g=a}}if(d=e&&1===e.length&&e[0]||null)for(const t of c)if(t.name===d&&G.isNumericField(t)){t.type="esriFieldTypeOID";break}return{fields:c,geometryType:b,hasZ:k,objectIdFieldName:d,
objectIdFieldType:q,unknownFields:Array.from(f)}};n.validateGeoJSON=function(a){if(!a)throw new w("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==a.type)throw new w("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:a});({crs:a}=a);if(a){var b="string"===typeof a?a:"name"===a.type?a.properties.name:"EPSG"===a.type?a.properties.code:null,c=/.*(CRS84H?|4326)$/i;if(!b||!c.test(b))throw new w("geojson-layer:unsupported-crs",
"unsupported GeoJSON 'crs' member",{crs:a});}};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});