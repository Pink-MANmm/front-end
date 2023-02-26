// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../config ../kernel ../request ../core/Error ../core/jsonMap ../core/maybe ../core/screenUtils ../core/urlUtils ../geometry/Polygon ../layers/support/fieldUtils ../layers/support/floorFilterUtils ../renderers/visualVariables/support/visualVariableUtils ./geoprocessor/execute ./geoprocessor/submitJob ./support/fileFormat ./support/layoutTemplate ./support/printTaskUtils ./support/PrintTemplate ../support/apiKeyUtils".split(" "),function(A,t,ha,ra,
ia,sa,ja,C,z,B,ta,ua,va,wa,xa,ya,za,Aa,v,Ba,Ca){function L(){L=t._asyncToGenerator(function*(a,b,c){const d=M(a);let f=D.get(d);return Promise.resolve().then(()=>{if(f)return{data:f.gpMetadata};f={gpServerUrl:d,is11xService:!1,legendLayerNameMap:{},legendLayers:[]};return ia(d,{query:{f:"json"}})}).then(g=>{f.gpMetadata=g.data;f.cimVersion=f.gpMetadata.cimVersion;f.is11xService=!!f.cimVersion;D.set(d,f);return ka(b,f)}).then(g=>{const e=la(f);let k;const h=m=>"sync"===e?m.results&&m.results[0]&&m.results[0].value:
k.fetchResultData("Output_File",null,c).then(n=>n.value);return"async"===e?ya.submitJob(a,g,null,c).then(m=>{k=m;return m.waitForJobCompletion({interval:b.updateDelay}).then(h)}):xa.execute(a,g,null,c).then(h)})});return L.apply(this,arguments)}function N(){N=t._asyncToGenerator(function*(a){a=M(a);a=D.get(a);return la(a)});return N.apply(this,arguments)}function ka(a,b){return O.apply(this,arguments)}function O(){O=t._asyncToGenerator(function*(a,b){b=b||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};
var c=a.template||new Ba;null==c.showLabels&&(c.showLabels=!0);var d=c.exportOptions;let f;const g=Aa.toJSON(c.layout);d&&(f={dpi:d.dpi},"map_only"===g.toLowerCase()||""===g)&&(f.outputSize=[d.width,d.height]);d=c.layoutOptions;let e;if(d){let h;if("Miles"===d.scalebarUnit||"Kilometers"===d.scalebarUnit){var k="Kilometers";h="Miles"}else if("Meters"===d.scalebarUnit||"Feet"===d.scalebarUnit)k="Meters",h="Feet";e={titleText:d.titleText,authorText:d.authorText,copyrightText:d.copyrightText,customTextElements:d.customTextElements,
elementOverrides:d.elementOverrides,scaleBarOptions:{metricUnit:ma.toJSON(k),metricLabel:na[k],nonMetricUnit:ma.toJSON(h),nonMetricLabel:na[h]}}}k=null;null!=d&&d.legendLayers&&(k=d.legendLayers.map(h=>{b.legendLayerNameMap[h.layerId]=h.title;const m={id:h.layerId};h.subLayerIds&&(m.subLayerIds=h.subLayerIds);return m}));d=yield Da(a,c,b);if(d.operationalLayers){const h=/[\u4E00-\u9FFF\u0E00-\u0E7F\u0900-\u097F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/,m=/[\u0600-\u06FF]/,n=p=>{const u=p.text,l=(p=
p.font)&&p.family&&p.family.toLowerCase();u&&p&&("arial"===l||"arial unicode ms"===l)&&(p.family=h.test(u)?"Arial Unicode MS":"Arial","normal"!==p.style&&m.test(u)&&(p.family="Arial Unicode MS"))},r=()=>{throw new sa("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap");};d.operationalLayers.forEach(p=>{var u,l,E;null!=(u=p.featureCollection)&&u.layers?p.featureCollection.layers.forEach(w=>{var q,x,oa,pa;null!=(q=w.layerDefinition)&&null!=(x=q.drawingInfo)&&
null!=(oa=x.renderer)&&oa.symbol&&(q=w.layerDefinition.drawingInfo.renderer,"esriTS"===q.symbol.type?n(q.symbol):"CIMSymbolReference"!==q.symbol.type||b.is11xService||r());null!=(pa=w.featureSet)&&pa.features&&w.featureSet.features.forEach(H=>{H.symbol&&("esriTS"===H.symbol.type?n(H.symbol):"CIMSymbolReference"!==H.symbol.type||b.is11xService||r())})}):!b.is11xService&&null!=(l=p.layerDefinition)&&null!=(E=l.drawingInfo)&&E.renderer&&JSON.stringify(p.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&
r()})}a.outSpatialReference&&(d.mapOptions.spatialReference=a.outSpatialReference.toJSON());Object.assign(d,{exportOptions:f,layoutOptions:e||{}});Object.assign(d.layoutOptions,{legendOptions:{operationalLayers:null!=k?k:b.legendLayers.slice()}});b.legendLayers.length=0;D.set(b.gpServerUrl,b);c={Web_Map_as_JSON:JSON.stringify(d),Format:za.toJSON(c.format),Layout_Template:g};a.extraParameters&&Object.assign(c,a.extraParameters);return c});return O.apply(this,arguments)}function Da(a,b,c){return P.apply(this,
arguments)}function P(){P=t._asyncToGenerator(function*(a,b,c){var d=a.view;let f=d.spatialReference;const g={operationalLayers:yield Ea(d,b,c)};a=c.ssExtent||a.extent||d.extent;f&&f.isWrappable&&(a=a.clone()._normalize(!0),f=a.spatialReference);g.mapOptions={extent:a&&a.toJSON(),spatialReference:f&&f.toJSON(),showAttribution:b.attributionVisible};c.ssExtent=null;d.background&&(g.background=d.background.toJSON());d.rotation&&(g.mapOptions.rotation=-d.rotation);b.scalePreserved&&(g.mapOptions.scale=
b.outScale||d.scale);C.isSome(d.timeExtent)&&(b=C.isSome(d.timeExtent.start)?d.timeExtent.start.getTime():null,d=C.isSome(d.timeExtent.end)?d.timeExtent.end.getTime():null,g.mapOptions.time=[b,d]);return g});return P.apply(this,arguments)}function M(a){const b=a.lastIndexOf("/GPServer/");0<b&&(a=a.slice(0,b+9));return a}function Ea(a,b,c){return Q.apply(this,arguments)}function Q(){Q=t._asyncToGenerator(function*(a,b,c){const d=[],f={layerView:null,printTemplate:b,view:a};let g=0;b.scalePreserved&&
(g=b.outScale||a.scale);var e=v.getVisibleLayerViews(a,g);for(const k of e){e=k.layer;if(!e.loaded||"group"===(null==e?void 0:e.type))continue;let h;f.layerView=k;if(h=v.isScreenshotRequired(k)?yield F(e,f,c):v.isBingMapsLayer(e)?{culture:e.culture,key:e.key,type:`BingMaps${"aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road"}`}:v.isCSVLayer(e)?yield Fa(e,f,c):"feature"===(null==e?void 0:e.type)?yield Ga(e,f,c):"geojson"===(null==e?void 0:e.type)?yield Ha(e,f,c):"graphics"===(null==e?void 0:
e.type)?yield Ia(e,f,c):"imagery"===(null==e?void 0:e.type)?Ja(e,c):"imagery-tile"===(null==e?void 0:e.type)?yield Ka(e,f,c):"kml"===(null==e?void 0:e.type)?yield La(e,f,c):"map-image"===(null==e?void 0:e.type)?Ma(e,f,c):"map-notes"===(null==e?void 0:e.type)?yield Na(f,c):"open-street-map"===(null==e?void 0:e.type)?{type:"OpenStreetMap"}:"stream"===(null==e?void 0:e.type)?yield Oa(e,f,c):"tile"===(null==e?void 0:e.type)?Pa(e,c):"vector-tile"===(null==e?void 0:e.type)?yield Qa(e,f,c):"web-tile"===
(null==e?void 0:e.type)?Ra(e):"wms"===(null==e?void 0:e.type)?Sa(e):"wmts"===(null==e?void 0:e.type)?Ta(e):yield F(e,f,c))Array.isArray(h)?d.push(...h):(h.id=e.id,h.title=c.legendLayerNameMap[e.id]||e.title,h.opacity=e.opacity,h.minScale=e.minScale||0,h.maxScale=e.maxScale||0,v.isBlendLayer(e)&&e.blendMode&&"normal"!==e.blendMode&&(h.blendMode=e.blendMode),d.push(h))}g&&d.forEach(k=>{k.minScale=0;k.maxScale=0});a.graphics&&a.graphics.length&&(a=yield y(null,a.graphics,b,c))&&d.push(a);return d});
return Q.apply(this,arguments)}function Fa(a,b,c){return R.apply(this,arguments)}function R(){R=t._asyncToGenerator(function*(a,b,c){a.legendEnabled&&c.legendLayers.push({id:a.id});var d=b.layerView;b=b.printTemplate;if(c.is11xService&&!d.filter)c={type:"CSV"},a.write(c,{origin:"web-map"}),delete c.popupInfo,delete c.layerType,c.showLabels=b.showLabels&&a.labelsVisible;else return d=yield I(d),y(a,d,b,c);return c});return R.apply(this,arguments)}function y(a,b,c,d){return S.apply(this,arguments)}
function S(){S=t._asyncToGenerator(function*(a,b,c,d){let f;const g=v.createPolygonLayer(),e=v.createPolylineLayer(),k=v.createPointLayer(),h=v.createMultipointLayer(),m=v.createPointLayer();m.layerDefinition.name="textLayer";delete m.layerDefinition.drawingInfo;if(a){"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass?g.layerDefinition.name=e.layerDefinition.name=k.layerDefinition.name=h.layerDefinition.name=d.legendLayerNameMap[a.id]||a.get("arcgisProps.title")||
a.title:"esri.layers.GraphicsLayer"===a.declaredClass&&(b=a.graphics.items);if(a.renderer){var n=a.renderer.toJSON();g.layerDefinition.drawingInfo.renderer=n;e.layerDefinition.drawingInfo.renderer=n;k.layerDefinition.drawingInfo.renderer=n;h.layerDefinition.drawingInfo.renderer=n}if(c.showLabels&&a.labelsVisible&&"function"===typeof a.write){var r,p;if(n=null==(r=a.write({},{origin:"web-map"}).layerDefinition)?void 0:null==(p=r.drawingInfo)?void 0:p.labelingInfo)f=!0,g.layerDefinition.drawingInfo.labelingInfo=
n,e.layerDefinition.drawingInfo.labelingInfo=n,k.layerDefinition.drawingInfo.labelingInfo=n,h.layerDefinition.drawingInfo.labelingInfo=n}}null!=a&&a.renderer||f||(delete g.layerDefinition.drawingInfo,delete e.layerDefinition.drawingInfo,delete k.layerDefinition.drawingInfo,delete h.layerDefinition.drawingInfo);r=null==a?void 0:a.fieldsIndex;p=null==a?void 0:a.renderer;if(r){var u=new Set;f&&(yield ua.collectLabelingFields(u,a));p&&"function"===typeof p.collectRequiredFields&&(yield p.collectRequiredFields(u,
r));u=Array.from(u);r=r.fields.map(q=>q.toJSON());g.layerDefinition.fields=r;e.layerDefinition.fields=r;k.layerDefinition.fields=r;h.layerDefinition.fields=r}r=b&&b.length;let l;for(p=0;p<r;p++){var E;n=b[p]||b.getItemAt(p);if(!1!==n.visible&&n.geometry&&(l=n.toJSON(),l.hasOwnProperty("popupTemplate")&&delete l.popupTemplate,l.geometry&&l.geometry.z&&delete l.geometry.z,!l.symbol||!l.symbol.outline||"esriCLS"!==l.symbol.outline.type||d.is11xService)){!d.is11xService&&l.symbol&&l.symbol.outline&&l.symbol.outline.color&&
l.symbol.outline.color[3]&&(l.symbol.outline.color[3]=255);var w=a&&a.renderer&&("valueExpression"in a.renderer&&a.renderer.valueExpression||"hasVisualVariables"in a.renderer&&a.renderer.hasVisualVariables());if(!l.symbol&&a&&a.renderer&&w&&!d.is11xService){w=a.renderer;const q=yield w.getSymbolAsync(n);if(!q)continue;l.symbol=q.toJSON();"hasVisualVariables"in w&&w.hasVisualVariables()&&v.applyVisualVariables(l.symbol,{renderer:w,graphic:n,symbol:q})}l.symbol&&(l.symbol.angle||delete l.symbol.angle,
J(l.symbol)?l.symbol=yield K(l.symbol,d):l.symbol.text&&delete l.attributes);if(!(c&&c.forceFeatureAttributes||null==(E=u))&&E.length){const q={};u.forEach(x=>{l.attributes&&l.attributes.hasOwnProperty(x)&&(q[x]=l.attributes[x])});l.attributes=q}"polygon"===n.geometry.type?g.featureSet.features.push(l):"polyline"===n.geometry.type?e.featureSet.features.push(l):"point"===n.geometry.type?l.symbol&&l.symbol.text?m.featureSet.features.push(l):k.featureSet.features.push(l):"multipoint"===n.geometry.type?
h.featureSet.features.push(l):"extent"===n.geometry.type&&(l.geometry=ta.fromExtent(n.geometry).toJSON(),g.featureSet.features.push(l))}}a=[g,e,h,k,m].filter(q=>0<q.featureSet.features.length);for(const q of a)b=q.featureSet.features.every(x=>x.symbol),!b||c&&c.forceFeatureAttributes||q.featureSet.features.forEach(x=>{delete x.attributes}),b&&delete q.layerDefinition.drawingInfo,q.layerDefinition.drawingInfo&&q.layerDefinition.drawingInfo.renderer&&(yield qa(q.layerDefinition.drawingInfo.renderer,
d));return a.length?{featureCollection:{layers:a},showLabels:f}:null});return S.apply(this,arguments)}function Ga(a,b,c){return T.apply(this,arguments)}function T(){T=t._asyncToGenerator(function*(a,b,c){var d,f,g,e,k=a.renderer;const h=parseFloat(c.cimVersion);if("binning"===(null==(d=a.featureReduction)?void 0:d.type)||"cluster"===(null==(f=a.featureReduction)?void 0:f.type)&&(!c.is11xService||2.9>h)||"pie-chart"===(null==k?void 0:k.type)||"dot-density"===(null==k?void 0:k.type)&&(!c.is11xService||
2.6>h))return F(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});d=b.layerView;const {printTemplate:m,view:n}=b;b=k&&("valueExpression"in k&&k.valueExpression||"hasVisualVariables"in k&&k.hasVisualVariables());f="feature-layer"!==(null==(g=a.source)?void 0:g.type)&&"ogc-feature"!==(null==(e=a.source)?void 0:e.type);if(!c.is11xService&&b||d.filter||f||!k||"field"in k&&null!=k.field&&("string"!==typeof k.field||!a.getField(k.field)))k=yield I(d),g=yield y(a,k,m,c);else{var r,p;g=a.write();g={id:g.id,
title:g.title,opacity:g.opacity,minScale:g.minScale,maxScale:g.maxScale,url:g.url,layerType:g.layerType,customParameters:g.customParameters,layerDefinition:g.layerDefinition};g.showLabels=m.showLabels&&a.labelsVisible;G(g,a);null!=(r=g.layerDefinition)&&null!=(p=r.drawingInfo)&&p.renderer&&(delete g.layerDefinition.minScale,delete g.layerDefinition.maxScale,yield qa(g.layerDefinition.drawingInfo.renderer,c),"visualVariables"in k&&k.visualVariables&&k.visualVariables[0]&&(a=k.visualVariables[0],"size"===
a.type&&a.maxSize&&"number"!==typeof a.maxSize&&a.minSize&&"number"!==typeof a.minSize&&(a=wa.getSizeRangeAtScale(a,n.scale),g.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=a.minSize,g.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=a.maxSize)));if(a=va.getFloorFilterClause(d))g.layerDefinition||(g.layerDefinition={}),g.layerDefinition.definitionExpression=g.layerDefinition.definitionExpression?`(${g.layerDefinition.definitionExpression}) AND (${a})`:a}return g});
return T.apply(this,arguments)}function Ha(a,b,c){return U.apply(this,arguments)}function U(){U=t._asyncToGenerator(function*(a,{layerView:b,printTemplate:c},d){a.legendEnabled&&d.legendLayers.push({id:a.id});b=yield I(b);return y(a,b,c,d)});return U.apply(this,arguments)}function Ia(a,b,c){return V.apply(this,arguments)}function V(){V=t._asyncToGenerator(function*(a,{printTemplate:b},c){return y(a,null,b,c)});return V.apply(this,arguments)}function Ja(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});
var c=a.write();c={layerType:c.layerType,customParameters:c.customParameters};c.bandIds=a.bandIds;c.compressionQuality=a.compressionQuality;c.format=a.format;c.interpolation=a.interpolation;if(a.mosaicRule||a.definitionExpression)c.mosaicRule=a.exportImageServiceParameters.mosaicRule.toJSON();if(a.renderingRule||a.renderer)if(b.is11xService)a.renderingRule&&(c.renderingRule=a.renderingRule.toJSON()),a.renderer&&(c.layerDefinition=c.layerDefinition||{},c.layerDefinition.drawingInfo=c.layerDefinition.drawingInfo||
{},c.layerDefinition.drawingInfo.renderer=a.renderer.toJSON());else if(b=a.exportImageServiceParameters.combineRendererWithRenderingRule())c.renderingRule=b.toJSON();G(c,a);return c}function Ka(a,b,c){return W.apply(this,arguments)}function W(){W=t._asyncToGenerator(function*(a,b,c){var d;if("flow"===(null==(d=a.renderer)?void 0:d.type))return F(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});b=a.write()||{};b={bandIds:b.bandIds,customParameters:b.customParameters,interpolation:b.interpolation,
layerDefinition:b.layerDefinition,layerType:"ArcGISImageServiceLayer"};G(b,a);return b});return W.apply(this,arguments)}function La(a,b,c){return X.apply(this,arguments)}function X(){X=t._asyncToGenerator(function*(a,b,c){const d=b.printTemplate;if(c.is11xService)return c={type:"kml"},a.write(c,{origin:"web-map"}),delete c.layerType,c.url=B.normalize(a.url),c;{const f=[];b=b.layerView;b.allVisibleMapImages.forEach((g,e)=>{e={id:`${a.id}_image${e}`,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||
0,opacity:a.opacity,extent:g.extent};"data:image/png;base64,"===g.href.substr(0,22)?e.imageData=g.href.substr(22):e.url=g.href;f.push(e)});b=[...b.allVisiblePoints.items,...b.allVisiblePolylines.items,...b.allVisiblePolygons.items];c={id:a.id,...yield y(null,b,d,c)};f.push(c);return f}});return X.apply(this,arguments)}function Ma(a,{view:b},c){let d;const f={id:a.id,subLayerIds:[]};let g=[];const e=b.scale,k=h=>{var m=0===e;const n=0===h.minScale||e<=h.minScale,r=0===h.maxScale||e>=h.maxScale;h.visible&&
(m||n&&r)&&(h.sublayers?h.sublayers.forEach(k):(m=h.toExportImageJSON(),g.unshift({id:h.id,name:h.title,layerDefinition:{drawingInfo:m.drawingInfo,definitionExpression:m.definitionExpression,source:m.source}}),f.subLayerIds.push(h.id)))};a.sublayers&&a.sublayers.forEach(k);g.length&&(g=g.map(({id:h,name:m,layerDefinition:n})=>({id:h,name:m,layerDefinition:n})),d=(h=>({layerType:h.layerType,customParameters:h.customParameters}))(a.write()),d.layers=g,d.visibleLayers=a.capabilities.exportMap.supportsDynamicLayers?
void 0:f.subLayerIds,G(d,a),a.legendEnabled&&c.legendLayers.push(f));return d}function Na(a,b){return Y.apply(this,arguments)}function Y(){Y=t._asyncToGenerator(function*({layerView:a,printTemplate:b},c){const d=[];a=a.layer;if(C.isSome(a.featureCollections))for(var f of a.featureCollections){var g=yield y(f,f.source,b,c);g&&d.push(...g.featureCollection.layers)}else if(C.isSome(a.sublayers))for(g of a.sublayers)(f=yield y(null,g.graphics,b,c))&&d.push(...f.featureCollection.layers);return{featureCollection:{layers:d}}});
return Y.apply(this,arguments)}function F(a,b,c){return Z.apply(this,arguments)}function Z(){Z=t._asyncToGenerator(function*(a,{printTemplate:b,view:c},d){const f={type:"image"};a={format:"png",ignoreBackground:!0,layers:[a],rotation:0};const g=d.ssExtent||c.extent.clone();let e=96,k=!0,h=!0;if(b.exportOptions){const m=b.exportOptions;0<m.dpi&&(e=m.dpi);0<m.width&&(k=m.width%2===c.width%2);0<m.height&&(h=m.height%2===c.height%2)}"map-only"!==b.layout||!b.scalePreserved||b.outScale&&b.outScale!==c.scale||
96!==e||k&&h||(a.area={x:0,y:0,width:c.width,height:c.height},k||--a.area.width,h||--a.area.height,d.ssExtent||(b=c.toMap(z.createScreenPoint(a.area.width,a.area.height)),g.ymin=b.y,g.xmax=b.x,d.ssExtent=g));f.extent=g.clone()._normalize(!0).toJSON();c=yield c.takeScreenshot(a);({data:c}=B.dataComponents(c.dataUrl));f.imageData=c;return f});return Z.apply(this,arguments)}function Oa(a,b,c){return aa.apply(this,arguments)}function aa(){aa=t._asyncToGenerator(function*(a,{layerView:b,printTemplate:c},
d){a.legendEnabled&&d.legendLayers.push({id:a.id});b=yield I(b);return y(a,b,c,d)});return aa.apply(this,arguments)}function Pa(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});b=a.write();b={layerType:b.layerType,customParameters:b.customParameters};G(b,a);return b}function Qa(a,b,c){return ba.apply(this,arguments)}function ba(){ba=t._asyncToGenerator(function*(a,b,c){if(c.is11xService&&a.serviceUrl&&a.styleUrl){const d=ca(a.styleUrl,a.apiKey),f=ca(a.serviceUrl,a.apiKey);if(!d&&!f||"2.1.0"!==
c.cimVersion)return b={type:"VectorTileLayer"},b.styleUrl=B.normalize(a.styleUrl),b.token=d,f!==d&&(b.additionalTokens=[{url:a.serviceUrl,token:f}]),b}return F(a,b,c)});return ba.apply(this,arguments)}function Ra(a){const b={type:"WebTiledLayer",urlTemplate:a.urlTemplate.replace(/\${/g,"{"),credits:a.copyright};a.subDomains&&0<a.subDomains.length&&(b.subDomains=a.subDomains);return b}function Sa(a){let b;const c=[],d=f=>{f.visible&&(f.sublayers?f.sublayers.forEach(d):f.name&&c.unshift(f.name))};a.sublayers&&
a.sublayers.forEach(d);c.length&&(b={type:"wms",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,transparentBackground:a.imageTransparency,visibleLayers:c,url:B.normalize(a.url),version:a.version});return b}function Ta(a){const b=a.activeLayer;return{type:"wmts",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,format:b.imageFormat,layer:b.id,style:b.styleId,tileMatrixSet:b.tileMatrixSetId,url:B.normalize(a.url)}}function G(a,b){b.url&&
(a.url=B.normalize(a.url||b.url),a.token=ca(a.url,b.apiKey))}function ca(a,b){var c,d;return Ca.supportsApiKey(a)&&(b||ha.apiKey)?b||ha.apiKey:null==(c=ra.id)?void 0:null==(d=c.findCredential(a))?void 0:d.token}function K(a,b){return da.apply(this,arguments)}function da(){da=t._asyncToGenerator(function*(a,b){b.canvas||(b.canvas=document.createElement("canvas"));b.canvas.width=1024;b.canvas.height=1024;b=b.canvas.getContext("2d");var c;if(a.path){var d=new Path2D(a.path);d.closePath();b.fillStyle=
Array.isArray(a.color)?`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`:"rgb(0,0,0)";b.fill(d);var f=v.getContextBoundingBox(b);if(!f)return null;b.clearRect(0,0,1024,1024);const g=z.pt2px(a.size)/Math.max(f.width,f.height);b.scale(g,g);const e=1024/g;b.translate(e/2-f.width/2-f.x,e/2-f.height/2-f.y);Array.isArray(a.color)&&b.fill(d);null!=(c=a.outline)&&c.width&&Array.isArray(a.outline.color)&&(c=a.outline,b.lineWidth=z.pt2px(c.width)/g,b.lineJoin="round",b.strokeStyle=`rgba(${c.color[0]},${c.color[1]},${c.color[2]},${c.color[3]/
255})`,b.stroke(d),f.width+=b.lineWidth,f.height+=b.lineWidth);f.width*=g;f.height*=g;f=b.getImageData(512-f.width/2,512-f.height/2,Math.ceil(f.width),Math.ceil(f.height));c=f.width;d=f.height;b.canvas.width=c;b.canvas.height=d;b.putImageData(f,0,0)}else f=(yield ia("image/svg+xml"===a.contentType?"data:image/svg+xml;base64,"+a.imageData:a.url,{responseType:"image"})).data,c=z.pt2px(a.width),d=z.pt2px(a.height),b.canvas.width=c,b.canvas.height=d,b.drawImage(f,0,0,b.canvas.width,b.canvas.height);return{type:"esriPMS",
imageData:b.canvas.toDataURL("image/png").substr(22),angle:a.angle,contentType:"image/png",height:z.px2pt(d),width:z.px2pt(c),xoffset:a.xoffset,yoffset:a.yoffset}});return da.apply(this,arguments)}function qa(a,b){return ea.apply(this,arguments)}function ea(){ea=t._asyncToGenerator(function*(a,b){const c=a.type;if("simple"===c&&J(a.symbol))a.symbol=yield K(a.symbol,b);else if("uniqueValue"===c||"classBreaks"===c)if(J(a.defaultSymbol)&&(a.defaultSymbol=yield K(a.defaultSymbol,b)),a=a["uniqueValue"===
c?"uniqueValueInfos":"classBreakInfos"])for(const d of a)J(d.symbol)&&(d.symbol=yield K(d.symbol,b))});return ea.apply(this,arguments)}function I(a){return fa.apply(this,arguments)}function fa(){fa=t._asyncToGenerator(function*(a){return a.queryFeatures(a.createQuery()).then(b=>b.features)});return fa.apply(this,arguments)}function la(a){return a.gpMetadata&&a.gpMetadata.executionType?Ua.fromJSON(a.gpMetadata.executionType):"sync"}function J(a){return a&&(a.path||"image/svg+xml"===a.contentType||
a.url&&a.url.endsWith(".svg"))}const na={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},ma=new ja.JSONMap({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Ua=new ja.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),D=new Map;A.execute=function(a,b,c){return L.apply(this,arguments)};A.getGpPrintParams=ka;A.getGpServerUrl=M;A.getMode=function(a){return N.apply(this,arguments)};A.printCacheMap=D;Object.defineProperties(A,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});