/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../core/lang.js";import{a as e}from"./maybe.js";function n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function r(e,n){return!!a(e.spatialReference,n.spatialReference)&&e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m}function a(e,n){return e===n||e&&n&&e.equals(n)}function i(i,u){return i===u||null!=i&&null!=u&&i.objectId===u.objectId&&!!function(i,u){if(i===u)return!0;if(e(i)||e(u))return!1;if(i.type!==u.type)return!1;switch(i.type){case"point":return r(i,u);case"extent":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!a(e.spatialReference,n.spatialReference)&&e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax}(i,u);case"polyline":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!a(e.spatialReference,n.spatialReference)&&t(e.paths,n.paths)}(i,u);case"polygon":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!a(e.spatialReference,n.spatialReference)&&t(e.rings,n.rings)}(i,u);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!a(e.spatialReference,t.spatialReference)&&n(e.points,t.points)}(i,u);case"mesh":return!1;default:return}}(i.geometry,u.geometry)&&!!function(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const r of t)if(e[r]!==n[r])return!1;return!0}(i.attributes,u.attributes)}export{i as e,r as p};
