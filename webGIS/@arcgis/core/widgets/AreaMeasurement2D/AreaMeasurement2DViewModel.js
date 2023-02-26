/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Handles.js";import{d as s,i as r,a as i,u as o}from"../../chunks/maybe.js";import{watch as n,initial as p,whenOnce as m}from"../../core/reactiveUtils.js";import{c as a,m as l}from"../../chunks/unitUtils.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{isLoaded as h,project as j,load as d}from"../../geometry/projection.js";import{d as y}from"../../chunks/defaultUnit.js";import"../../geometry.js";import k from"../../Graphic.js";import"../../intl.js";import"../../symbols.js";import{f,n as b,m as g,a as v,c as w}from"../../chunks/unitFormatUtils.js";import{geodesicDensify as S,planarLength as _,simplify as U,geodesicLength as L,geodesicArea as D,planarArea as I}from"../../geometry/geometryEngine.js";import{isSupported as C,geodesicDensify as M,geodesicLengths as x,geodesicAreas as A}from"../../geometry/support/geodesicUtils.js";import R from"../../layers/GraphicsLayer.js";import{V as O}from"../../chunks/ViewingMode.js";import T from"../../views/draw/Draw.js";import{I as F,c as P,s as V,d as G}from"../../chunks/dragEventPipeline.js";import{G as E}from"../../chunks/GraphicManipulator.js";import{f as q}from"../../chunks/messages.js";import{o as z}from"../../chunks/locale.js";import B from"../../geometry/Point.js";import W from"../../symbols/SimpleFillSymbol.js";import H from"../../symbols/SimpleLineSymbol.js";import Q from"../../symbols/TextSymbol.js";import N from"../../symbols/Font.js";import J from"../../symbols/SimpleMarkerSymbol.js";import K from"../../geometry/Polyline.js";import Z from"../../geometry/SpatialReference.js";import X from"../../geometry/Polygon.js";import{I as Y}from"../../chunks/InteractiveToolViewModel.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/Ellipsoid.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/mat4.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Clonable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/Cyclical.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/hydrated.js";import"../../chunks/GraphicsCollection.js";import"../../core/HandleOwner.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../views/draw/MultipointDrawAction.js";import"../../views/draw/DrawAction.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums2.js";import"../../chunks/settings.js";import"../../chunks/Settings2.js";import"../../chunks/SnappingContext.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/sphere.js";import"../../chunks/ray.js";import"../../chunks/vectorStacks.js";import"../../chunks/quatf64.js";import"../../chunks/mat4f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/DrawEvents.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/keybindings.js";import"../../chunks/screenUtils2.js";import"../../views/draw/PointDrawAction.js";import"../../chunks/DrawTool.js";import"../../chunks/drawSurfaces.js";import"../../chunks/quantityUtils.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../chunks/elevationInfoUtils.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../views/interactive/sketch/SketchTooltipOptions.js";import"../../chunks/euclideanLengthMeasurementUtils.js";import"../../chunks/measurementUtils2.js";import"../../chunks/quantityFormatUtils.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../../chunks/euclideanAreaMeasurementUtils.js";import"../../chunks/earcut.js";import"../../chunks/triangle.js";import"../../chunks/lineSegment.js";import"../../views/DOMContainer.js";import"../Popup.js";import"../../chunks/throttle.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../Feature.js";import"../Attachments.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../Feature/FeatureViewModel.js";import"../../chunks/languageUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/DataLayerSource.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils5.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/FeatureIndex.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../layers/mixins/OrderedLayer.js";import"../../layers/mixins/PortalLayer.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/TimeReference.js";import"../../chunks/featureReductionUtils.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/AggregateField.js";import"../../layers/support/OutStatistic.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils.js";import"../../support/popupUtils.js";import"../../chunks/Heading.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../chunks/utils6.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../Spinner/SpinnerViewModel.js";import"../../chunks/AnchorElementViewModel.js";import"../Popup/PopupViewModel.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/colorUtils2.js";import"../../chunks/mat2df32.js";import"../../chunks/layerViewUtils.js";import"../../chunks/actions.js";import"../support/GoTo.js";import"../../chunks/interfaces.js";import"../../chunks/drawUtils.js";import"../../views/draw/PolygonDrawAction.js";import"../../views/draw/PolylineDrawAction.js";import"../../views/draw/SegmentDrawAction.js";import"../../chunks/surfaceCoordinateSystems.js";import"../../chunks/mat2df64.js";import"../../chunks/quat.js";import"../../chunks/drapedUtils.js";let $=class extends F{constructor(e){super(e),this._drawActive=!1,this._handles=new t,this._measurementLayer=new R({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new R({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){q("esri/core/t9n/Units").then((e=>{this.messages=e})),this._handles.add(z((async()=>{this.messages=await q("esri/core/t9n/Units")})));const e=this.view;this._draw=new T({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this._handles.add([n((()=>[this.unit,this.geodesicDistanceThreshold,this.palette,this.messages]),(()=>{this._vertices.length>0&&this._updateGraphics()}),p)])}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=s(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._handles.removeAll(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._handles=s(this._handles),this._measurementLayer=s(this._measurementLayer),this._manipulatorLayer=s(this._manipulatorLayer)}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}reset(){this._vertices=[],this._measurementLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>this._stopSketch()))}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((e=>{e.manipulator.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){if(te(this.view.spatialReference)&&!h())return;if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._measurementLayer.removeAll();const t=this.view.spatialReference;for(;this._vertices.length>e.length;){const{manipulatorId:e}=this._vertices.pop();this.manipulators.remove(e)}for(let s=this._vertices.length;s<e.length;s++){const[r,i]=e[s],o=ee(new B({x:r,y:i,spatialReference:t}),this.view,this._manipulatorLayer,this.palette),n=this.manipulators.add(o);P(o,((e,t)=>{t.next(V(this.view)).next(G(e.graphic,O.Local)).next((()=>{const t=e.graphic.geometry;this._vertices[s].coord=[t.x,t.y],this._updateGraphics()}))})),this._vertices.push({manipulatorId:n,coord:[r,i]})}const s=this._vertices.length-1,r=this._vertices[s],[i,o]=e[s];if(r.coord[0]!==i||r.coord[1]!==o){r.coord=[i,o];const e=new B({x:i,y:o,spatialReference:t});this.manipulators.findById(r.manipulatorId).graphic.geometry=e}const n=this._drawActive?this._vertices[s].manipulatorId:null;this.manipulators.forEach((e=>{e.manipulator.interactive=null==n||e.id!==n})),this._updateGraphics()}_updateGraphics(){const e=function(e,t,s){if(2===e.length){const r=new K({paths:e,spatialReference:t});let i;if(t.isGeographic)if(C(t))i=M(r,1e5);else{const e=j(r,Z.WGS84),s=M(e,1e5);i=j(s,t)}else if(t.isWebMercator)i=S(r,1e5,"meters");else if(_(r,"meters")>=s){const e=j(r,Z.WGS84),s=M(e,1e5);i=j(s,t)}else i=r;return{measurement:null,fillGeometry:null,outlineGeometry:i}}e.push(e[0]);const r=new K({paths:[e],spatialReference:t}),i=new X({rings:[e],spatialReference:t});let o,n,p=null,m=null;if(t.isGeographic)if(C(t)){if(p=M(r,1e5),m=M(i,1e5),m=U(m),!m)return null;o=x([r],"meters")[0],n=A([m],"square-meters")[0]}else{const e=Z.WGS84,s=j(r,e),a=j(i,e);if(p=M(s,1e5),m=M(a,1e5),m=U(m),!m)return null;o=x([s],"meters")[0],n=A([m],"square-meters")[0],p=j(p,t),m=j(m,t)}else if(t.isWebMercator){if(p=S(r,1e5,"meters"),m=S(i,1e5,"meters"),m=U(m),!m)return null;o=L(r,"meters"),n=D(m,"square-meters")}else{const e=_(r,"meters");if(e>=s){const e=Z.WGS84,s=j(r,e),a=j(i,e);if(p=M(s,1e5),m=M(a,1e5),m=U(m),!m)return null;o=x([s],"meters")[0],n=A([m],"square-meters")[0],p=j(p,t),m=j(m,t)}else{if(p=r,m=U(i),!m)return null;o=e,n=I(m,"square-meters")}}return{measurement:{geometry:m,area:n,perimeter:o},fillGeometry:m,outlineGeometry:p}}(this._vertices.map((e=>e.coord)),this.view.spatialReference,this.geodesicDistanceThreshold);if(!e)return;const{measurement:t,fillGeometry:s,outlineGeometry:r}=e;this._set("measurement",t);const i=t?function(e,t,s){if(!t||!e)return null;const r={area:null,perimeter:null},{area:i,perimeter:o}=t;switch(s){case"metric":r.area=g(e,i,"square-meters");break;case"imperial":r.area=b(e,i,"square-meters");break;default:{const t=a(i,"square-meters",s);r.area=f(e,t,s);break}}const n=function(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(s);if(n)switch(n){case"metric":r.perimeter=w(e,o,"meters");break;case"imperial":r.perimeter=v(e,o,"meters");break;default:{const t=a(o,"meters",n);r.perimeter=f(e,t,n);break}}else r.perimeter="";return r}(this.messages,t,this.unit):null;if(this._set("measurementLabel",i),!s&&!r)return;let o,n,p;const{graphics:m}=this._measurementLayer;if(3===m.length)o=m.getItemAt(0),n=m.getItemAt(1),p=m.getItemAt(2);else{const{fillColor:e,pathColor:t,pathWidth:s}=this.palette;o=new k({symbol:new W({color:e,outline:null})}),n=new k({symbol:new H({color:t,width:s})}),p=new k({symbol:new Q({color:[255,255,255,1],font:new N({size:14,family:"sans-serif"}),haloColor:[0,0,0,.5],haloSize:2})}),m.removeAll(),m.addMany([o,n,p])}o.geometry=s,n.geometry=r,p.geometry=s?.centroid,p.symbol.text=i?.area}};function ee(e,t,s,r){const i=new J({style:"circle",color:r.handleColor,size:r.handleWidth,outline:{type:"simple-line",width:0}}),o=new J({style:"circle",color:r.handleColor,size:1.5*r.handleWidth,outline:{type:"simple-line",width:0}}),n=new k({geometry:e,symbol:i});return new E({view:t,layer:s,graphic:n,focusedSymbol:o})}function te(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:r}=e;return t&&!r&&!C(e)||!t&&!s}e([u()],$.prototype,"_drawActive",void 0),e([u({readOnly:!0})],$.prototype,"cursor",null),e([u({value:!0})],$.prototype,"editable",null),e([u({type:Number})],$.prototype,"geodesicDistanceThreshold",void 0),e([u({readOnly:!0})],$.prototype,"measurement",void 0),e([u({readOnly:!0})],$.prototype,"measurementLabel",void 0),e([u()],$.prototype,"messages",void 0),e([u()],$.prototype,"palette",void 0),e([u()],$.prototype,"unit",void 0),e([u({constructOnly:!0})],$.prototype,"view",void 0),$=e([c("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],$);const se={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]};let re=class extends Y{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views.",this._handles=new t,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null,this.palette=se}initialize(){this._handles.add([n((()=>o(this.view)?.spatialReference),(()=>this.clear())),n((()=>this.unit),(e=>{r(this.tool)&&(this.tool.unit=e)}),p),n((()=>this.geodesicDistanceThreshold),(e=>{r(this.tool)&&(this.tool.geodesicDistanceThreshold=e)}),p),n((()=>this.palette),(e=>{r(this.tool)&&(this.tool.palette=e)}),p)])}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}get state(){return this.disabled||i(this.view)||null==this.view.spatialReference?"disabled":r(this.tool)&&this.tool.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")}get unitOptions(){return l}set unitOptions(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")}async start(){const e=this.view;r(e)&&(await m((()=>e.ready)),te(e.spatialReference)&&await d()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new $({view:o(this.view),visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}_validateUnit(e){return this.unitOptions.includes(e)?e:this.unitOptions.includes(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]}_validateUnits(e=[]){const t=e.filter((e=>l.includes(e)));return 0===t.length?l.slice():t}};e([u(y)],re.prototype,"defaultUnit",void 0),e([u({type:Number})],re.prototype,"geodesicDistanceThreshold",void 0),e([u({readOnly:!0,aliasOf:"tool.measurement"})],re.prototype,"measurement",void 0),e([u({readOnly:!0,aliasOf:"tool.measurementLabel"})],re.prototype,"measurementLabel",void 0),e([u()],re.prototype,"palette",void 0),e([u({readOnly:!0})],re.prototype,"state",null),e([u({type:String})],re.prototype,"unit",null),e([u({type:[String]})],re.prototype,"unitOptions",null),re=e([c("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],re);const ie=re;export{ie as default};
