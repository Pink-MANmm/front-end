/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e,{e as a}from"../Basemap.js";import r from"../config.js";import t from"../core/Collection.js";import{L as n}from"./Logger.js";import{a as s,i as l}from"./maybe.js";import{Url as i,makeAbsolute as c,normalize as u}from"../core/urlUtils.js";import{j as o}from"./ensureType.js";const f=n.getLogger("esri.support.basemapUtils");function p(){return{}}function y(e){for(const a in e){const r=e[a];!1===r?.destroyed&&r.destroy(),delete e[a]}}function d(t,n){let s;if("string"==typeof t){if(!(t in a)){const e=Object.entries(a).filter((([e,a])=>r.apiKey&&!a.classic||!r.apiKey&&a.classic&&!a.deprecated)).map((([e])=>`"${e}"`)).join(", ");return f.warn(`Unable to find basemap definition for: ${t}. Try one of these: ${e}`),null}n&&(s=n[t]),s||(s=e.fromId(t),n&&(n[t]=s))}else s=o(e,t);return s?.destroyed&&(f.warn("The provided basemap is already destroyed",{basemap:s}),s=null),s}function m(a,r=null){const t=d(a);if(!t)return null;const n=new e({id:t.id,title:t.title,baseLayers:t.baseLayers.slice(),referenceLayers:t.referenceLayers.slice()});return r&&(n.baseLayers=g(n.baseLayers,r.baseLayers),n.referenceLayers=g(n.referenceLayers,r.referenceLayers)),n.load().catch((()=>{})),n.portalItem=t.portalItem,n}function b(e){let r=null;const t=w(e),n=!t.baseLayers.length;for(const e in a){const s=U(t,q(a[e]),{mustMatchReferences:n});if("equal"===s){r=e;break}"base-layers-equal"===s&&(r=e)}return r}function L(e,a){return e===a||"equal"===U(w(e),w(a),{mustMatchReferences:!0})}function g(e,a){const r=new t;return e.forEach((e=>{const t=a.find((a=>k(j(e),j(a))))||e;r.includes(t)?r.push(e):r.push(t)})),r}function v(e){return!!e?.baseLayers.concat(e.referenceLayers).some(S)}function S(e){if(I(e.url))return!0;if("vector-tile"===e.type)for(const a in e.sourceNameToSource)if(I(e.sourceNameToSource[a]?.sourceUrl))return!0;return!1}function h(e,a){if(s(a)||s(e))return{spatialReference:null,updating:!1};if("not-loaded"===a.loadStatus)return a.load(),{spatialReference:null,updating:!0};if(a.spatialReference)return{spatialReference:a.spatialReference,updating:!1};if(0===a.baseLayers.length)return{spatialReference:null,updating:!1};const r=a.baseLayers.getItemAt(0);switch(r.loadStatus){case"not-loaded":r.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}const t=(("supportedSpatialReferences"in r?r.supportedSpatialReferences:null)||["tileInfo"in r?r.tileInfo?.spatialReference:r.spatialReference]).filter(Boolean);return e.spatialReference?{spatialReference:t.find((a=>e.spatialReference.equals(a)))??t[0]??null,updating:!1}:{spatialReference:t[0],updating:!1}}const R=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function I(e){if(!e)return!1;const a=new i(c(e));return R.test(a.authority)}function w(e){return e?!e.loaded&&e.resourceInfo?q(e.resourceInfo.data):{baseLayers:T(e.baseLayers),referenceLayers:T(e.referenceLayers)}:null}function T(e){return(t.isCollection(e)?e.toArray():e).map(j)}function j(e){return{type:e.type,url:$("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!l(e.sublayers)?void 0:e.sublayers?.map((e=>({id:e.id,visible:e.visible}))),activeLayerId:"wmts"===e.type?e.activeLayer?.id:void 0}}function q(e){return e?{baseLayers:x(e.baseMapLayers.filter((e=>!e.isReference))),referenceLayers:x(e.baseMapLayers.filter((e=>e.isReference)))}:null}function x(e){return e.map((e=>function(e){let a;switch(e.layerType){case"VectorTileLayer":a="vector-tile";break;case"ArcGISTiledMapServiceLayer":a="tile";break;default:a="unknown"}return{type:a,url:$(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e)))}function U(e,a,r){return null!=e!=(null!=a)?"not-equal":e?M(e.baseLayers,a.baseLayers)?M(e.referenceLayers,a.referenceLayers)?"equal":r.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function M(e,a){if(e.length!==a.length)return!1;for(let r=0;r<e.length;r++)if(!k(e[r],a[r]))return!1;return!0}function k(e,a){if(e.type!==a.type||e.url!==a.url||e.minScale!==a.minScale||e.maxScale!==a.maxScale||e.visible!==a.visible||e.opacity!==a.opacity)return!1;if(l(e.activeLayerId)||l(a.activeLayerId))return e.activeLayerId===a.activeLayerId;if(l(e.sublayers)||l(a.sublayers)){if(s(e.sublayers)||s(a.sublayers)||e.sublayers.length!==a.sublayers.length)return!1;for(let r=0;r<e.sublayers.length;r++){const t=e.sublayers.at(r),n=a.sublayers.at(r);if(t.id!==n.id||t.visible!==n.visible)return!1}}return!0}function $(e){return e?u(e).replace(/^\s*https?:/i,"").toLowerCase():""}export{m as a,L as b,p as c,y as d,d as e,h as f,b as g,v as h,S as i};