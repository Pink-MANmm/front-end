/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{symbolTypesLabel as r,symbolTypesLabel3D as s}from"../../symbols.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{t as l}from"../../chunks/screenUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as a}from"../../chunks/reader.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{c,t as u,g as b,a as y,b as j,d as h}from"../../chunks/labelUtils.js";import{a as S}from"../../chunks/maybe.js";import f from"../../symbols/SimpleFillSymbol.js";import d from"../../symbols/SimpleLineSymbol.js";import v from"../../symbols/SimpleMarkerSymbol.js";import w from"../../symbols/TextSymbol.js";import{d as g,a as L,b as x,c as P,e as k,f as E,g as D}from"../../chunks/defaultsJSON.js";import{writeLabelSymbol as C}from"../../symbols/support/jsonUtils.js";import"../../symbols/CIMSymbol.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../chunks/enumeration.js";import"./fieldUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../chunks/lineMarkers.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/symbolConversion.js";var U;let A=U=class extends o{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?c(r.value):e}writeExpression(e,r,s){null!=this.value&&(e=c(this.value)),null!=e&&(r[s]=e)}clone(){return new U({expression:this.expression,title:this.title,value:this.value})}};e([n({type:String,json:{write:{writerEnsuresNonNull:!0}}})],A.prototype,"expression",void 0),e([a("expression",["expression","value"])],A.prototype,"readExpression",null),e([m("expression")],A.prototype,"writeExpression",null),e([n({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],A.prototype,"title",void 0),e([n({json:{read:!1,write:!1}})],A.prototype,"value",void 0),A=U=e([p("esri.layers.support.LabelExpressionInfo")],A);const O=A,N=v.fromJSON(g),B=d.fromJSON(L),I=f.fromJSON(x),M=w.fromJSON(P);function J(e){if(S(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return N;case"polyline":return B;case"polygon":case"extent":return I}return null}const F=v.fromJSON(k),R=d.fromJSON(E),V=f.fromJSON(D);var T;const z=new t({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function W(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function G(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let Q=T=class extends o{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=M,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,r){const s=(e,r,s)=>{switch(r){case"=":return e==s;case"<>":return e!=s;case">":return e>s;case">=":return e>=s;case"<":return e<s;case"<=":return e<=s}return!1};try{if(null==e)return!0;const t=e.split(" ");if(3===t.length)return s(r[t[0]],t[1],t[2]);if(7===t.length){const e=s(r[t[0]],t[1],t[2]),o=t[3],i=s(r[t[4]],t[5],t[6]);switch(o){case"AND":return e&&i;case"OR":return e||i}}return!1}catch(r){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,r){const s=r.labelExpressionInfo;if(!s||!s.value&&!s.expression)return e}writeLabelExpression(e,r,s){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=u(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=b(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[s]=e)}writeLabelExpressionInfo(e,r,s,t){if(null==e&&null!=this.labelExpression&&W(t))e=new O({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(t);o.expression&&(r[s]=o)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return y(this)}getLabelExpressionArcade(){return j(this)}getLabelExpressionSingleField(){return h(this)}hash(){return JSON.stringify(this)}clone(){return new T({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:i(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:i(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};e([n({type:String,json:{write:!0}})],Q.prototype,"name",void 0),e([n({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],Q.prototype,"allowOverrun",void 0),e([n({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],Q.prototype,"deconflictionStrategy",void 0),e([n({type:String,json:{write:{overridePolicy(e,r,s){return this.labelExpressionInfo&&"service"===s?.origin&&G(s.layer)?{enabled:!1}:{allowNull:!0}}}}})],Q.prototype,"labelExpression",void 0),e([a("labelExpression")],Q.prototype,"readLabelExpression",null),e([m("labelExpression")],Q.prototype,"writeLabelExpression",null),e([n({type:O,json:{write:{overridePolicy:(e,r,s)=>function(e){return W(e)||G(e.layer)}(s)?{allowNull:!0}:{enabled:!1}}}})],Q.prototype,"labelExpressionInfo",void 0),e([m("labelExpressionInfo")],Q.prototype,"writeLabelExpressionInfo",null),e([n({type:z.apiValues,json:{type:z.jsonValues,read:z.read,write:z.write}})],Q.prototype,"labelPlacement",void 0),e([n({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],Q.prototype,"labelPosition",void 0),e([n({type:Number})],Q.prototype,"maxScale",void 0),e([m("maxScale")],Q.prototype,"writeMaxScale",null),e([n({type:Number})],Q.prototype,"minScale",void 0),e([m("minScale")],Q.prototype,"writeMinScale",null),e([n({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],Q.prototype,"repeatLabel",void 0),e([n({type:Number,cast:l,json:{write:!0,origins:{"web-scene":{write:!1}}}})],Q.prototype,"repeatLabelDistance",void 0),e([n({types:r,json:{origins:{"web-scene":{types:s,write:C,default:null}},write:C,default:null}})],Q.prototype,"symbol",void 0),e([n({type:Boolean,json:{write:!0}})],Q.prototype,"useCodedValues",void 0),e([n({type:String,json:{write:!0}})],Q.prototype,"where",void 0),Q=T=e([p("esri.layers.support.LabelClass")],Q);const q=Q;export{O as L,V as a,F as b,B as c,N as d,q as default,R as e,I as f,J as g};
