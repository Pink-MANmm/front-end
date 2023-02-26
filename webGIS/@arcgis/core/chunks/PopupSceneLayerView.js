/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Error.js";import{i as s}from"./maybe.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{unpackFieldNames as a,populateMissingFields as o}from"../layers/support/fieldUtils.js";import{g as p,a as i}from"./popupUtils.js";const c=c=>{let n=class extends c{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:t}=s;return t?p(s,e)?void 0:new r("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s}):new r("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r){const t=this._validateFetchPopupFeatures(r);if(t)throw t;const c=s(r)?r.clientGraphics:null;if(!c||0===c.length)return[];const n="scene"===this.layer.type&&s(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,u=a(this.layer.fieldsIndex,await i(n,p(this.layer,r)));await this.prepareFetchPopupFeatures(u);const l=new Set,h=[],y=[];for(const e of c)o(u,e,l)?y.push(e):h.push(e);return 0===y.length?h:this.whenGraphicAttributes(y,[...l]).catch((()=>y)).then((e=>h.concat(e)))}};return n=e([t("esri.views.3d.layers.support.PopupSceneLayerView")],n),n};export{c as P};