/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNumericField as e,getFieldDefaultValue as t}from"./fieldUtils.js";import"../../core/Error.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";function s(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function i(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function r(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class o{constructor(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!t)return;const o=[];for(const l of t){const t=l&&l.name;if(t){const p=n(t);this._fieldsMap.set(t,l),this._fieldsMap.set(p,l),o.push(p),s(l)?(this.dateFields.push(l),this._dateFieldsSet.add(l)):e(l)&&(this._numericFieldsSet.add(l),this.numericFields.push(l)),i(l)||r(l)||(l.editable=null==l.editable||!!l.editable,l.nullable=null==l.nullable||!!l.nullable)}}o.sort(),this.uid=o.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)i(e)||r(e)||e.nullable||void 0!==t(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}function n(e){return e.toLowerCase().trim()}export{o as default};
