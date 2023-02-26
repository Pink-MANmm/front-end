/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{aliasOf as o}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../renderers/support/ClassBreakInfo.js";import{SmartMappingSliderBase as e}from"./SmartMappingSliderBase.js";import p from"./ClassedColorSlider/ClassedColorSliderViewModel.js";import"../../chunks/widgetUtils.js";import{m}from"../../chunks/messageBundle.js";import{t as l}from"../../chunks/jsxFactory.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/commonProperties2.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../core/reactiveUtils.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/number2.js";import"../../chunks/messages.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../core/Handles.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../Slider/SliderViewModel.js";import"./support/utils.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"./SmartMappingSliderViewModel.js";var n;let a=n=class extends e{constructor(s,o){super(s,o),this._bgFillId=null,this._rampFillId=null,this.breaks=null,this.label=void 0,this.messages=null,this.viewModel=new p,this._bgFillId=`${this.id}-bg-fill`,this._rampFillId=`${this.id}-linear-gradient`}static fromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol.color;return{min:s.minValue,max:s.maxValue,color:o}}));return new n({breaks:t,histogramConfig:{bins:o?o.bins:[]}})}updateClassBreakInfos(s){const o=this.breaks;if(o.length===s.length)return s.map(((s,r)=>{const t=s.symbol;return t.color=o[r].color,new i({minValue:o[r].min,maxValue:o[r].max,symbol:t})}));console.error(`Number of input breakInfos must match number of slider breaks: ${o.length}`)}updateFromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol.color;return{min:s.minValue,max:s.maxValue,color:o}}));this.set({breaks:t}),o?.bins&&(this.histogramConfig.bins=o.bins)}render(){const{state:s,label:o,visibleElements:r}=this,t="disabled"===s,i=this.classes("esri-classed-color-slider","esri-widget","esri-widget--panel",{"esri-disabled":t,"esri-classed-color-slider--interactive-track":r.interactiveTrack});return l("div",{"aria-label":o,class:i},t?null:this.renderContent(this.renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))}renderRamp(){const{_bgFillId:s,_rampFillId:o,viewModel:r}=this,t=r.getStopInfo();return l("div",{class:"esri-classed-color-slider__ramp"},l("svg",{xmlns:"http://www.w3.org/2000/svg"},l("defs",null,this.renderRampFillDefinition(o,t),this.renderBackgroundFillDefinition(s)),l("rect",{x:"0",y:"0",fill:`url(#${s})`,height:"100%",width:"100%"}),l("rect",{x:"0",y:"0",fill:`url(#${o})`,height:"100%",width:"100%"})))}};s([o("viewModel.breaks")],a.prototype,"breaks",void 0),s([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0),s([r(),m("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],a.prototype,"messages",void 0),s([r()],a.prototype,"viewModel",void 0),a=n=s([t("esri.widgets.smartMapping.ClassedColorSlider")],a);const c=a;export{c as default};