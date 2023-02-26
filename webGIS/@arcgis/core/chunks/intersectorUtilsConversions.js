/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as r,a as t,f as e}from"./maybe.js";import{y as n}from"./mat4.js";import{h as a}from"./mathUtils.js";import{l as i}from"./aaBoundingBox.js";import{g as o}from"./sphere.js";import{i as s,I as u,b as c,c as l}from"./Intersector.js";function g(r){return s(r)&&r.intersector===u.PCL&&!!r.target}function p(r){return s(r)&&r.intersector===u.I3S&&!!r.target}function f(r){return s(r)&&r.intersector===u.TERRAIN&&!!r.target}function d(r){return s(r)&&r.intersector===u.OVERLAY&&!!r.target}function m(r){return s(r)&&r.intersector===u.LOD&&!!r.target}function h(r,t){return c(r)||l(r)?j(r.target.object.metadata,t):f(r)?t.map?.ground:g(r)||p(r)||d(r)?j(r.target,t):null}function y(t,e){const n=b(t,e);return r(n)&&"graphic"===n.type?n.graphic:null}function b(e,n){if(t(e))return null;if(c(e)||l(e))return U(e.target.object.metadata,n);if(g(e)){const r=e.target.createGraphic();return{type:"graphic",graphic:r,layer:r.layer}}return d(e)||m(e)?U(e.target,n):p(e)?function(e,n){const a=j(e,n);if(t(a))return null;const i=n.allLayerViews.find((r=>r.layer===a));return i&&!i.suspended&&"getGraphicFromIntersectorTarget"in i?(o=i.getGraphicFromIntersectorTarget(e),r(o)?{type:"graphic",graphic:o,layer:o.layer}:null):null;var o}(e.target,n):null}function U(r,e){if(t(r)||t(r.graphicUid))return null;const n=j(r,e);if(t(n))return null;if(n===e.graphics)return t(e.graphicsView)||"number"!=typeof r.graphicUid?null:e.graphicsView.getHit(r.graphicUid);const a=e.allLayerViews.find((r=>r.layer===n));return!a||a.suspended||t(r.graphicUid)?null:"getHit"in a?a.getHit(r.graphicUid):null}function j(e,n){return t(e.layerUid)?null:r(n.graphicsView)&&e.layerUid===n.graphicsView.processor.layer.id?n.graphics:n.map.findLayerByUid(e.layerUid)}function L(r,a){if(c(r)||l(r))return o(r.target.object.boundingVolumeWorldSpace.bounds);if(m(r)){n(B,r.transformation);const t=Math.max(B[0],B[1],B[2]);return r.target.baseBoundingSphere.radius*t}return p(r)?e(function(r,e){const n=j(r,e);if(t(n))return null;const a=e.allLayerViews.find((r=>r.layer===n));return a&&!a.suspended&&"getAABBFromIntersectorTarget"in a?a.getAABBFromIntersectorTarget(r):null}(r.target,a),(r=>.5*i(r))):null}function V(r){return!c(r)&&!l(r)&&(m(r)?r.target.numLodLevels>1:!!p(r))}const B=a();export{f as a,b,h as c,L as g,V as h,p as i,y as t};