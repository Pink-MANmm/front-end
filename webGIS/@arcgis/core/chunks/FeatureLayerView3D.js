/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Error.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as o}from"../geometry/projection.js";import{e as i}from"./styleUtils2.js";import{F as p}from"./FeatureLayerViewBase3D.js";import"./Logger.js";import"../config.js";import"./object.js";import"./maybe.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./tracking.js";import"./mathUtils.js";import"./common.js";import"../core/promiseUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./writer.js";import"./Ellipsoid.js";import"./SimpleObservable.js";import"./mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/reactiveUtils.js";import"./CameraSpace.glsl.js";import"./mat4f64.js";import"./sphere.js";import"./vec4f64.js";import"./ray.js";import"./vectorStacks.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./basicInterfaces.js";import"./Material.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./ViewingMode.js";import"./Util.js";import"./utils4.js";import"./doublePrecisionUtils.js";import"../core/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./Octree.js";import"./frustum.js";import"./plane.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./typeUtils.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../Graphic.js";import"../geometry.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number2.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./glUtil3D.js";import"./geometryDataUtils.js";import"./triangle.js";import"./lineSegment.js";import"./BufferView.js";import"./vec2.js";import"./enums.js";import"./Texture.js";import"./context-util.js";import"./mat4f32.js";import"./ShaderTechniqueConfiguration.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject.js";import"./RenderSlot.js";import"./InterleavedLayout.js";import"./types.js";import"./FeatureLikeLayerView3D.js";import"./asyncUtils.js";import"../core/HandleOwner.js";import"./arcgisLayerUrl.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils5.js";import"../rest/support/ProjectParameters.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"./dehydratedFeatureComparison.js";import"../views/SceneView.js";import"../Camera.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./messages.js";import"./GraphicsCollection.js";import"../geometry/HeightModelInfo.js";import"./boundedPlane.js";import"./RenderCoordsHelper.js";import"./ElevationProvider.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"./layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./writeUtils.js";import"../Ground.js";import"./compilerUtils.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../layers/Layer.js";import"../support/TablesMixin.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./Scheduler.js";import"./debugFlags.js";import"./InputManager.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./heightModelInfoUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../widgets/Popup.js";import"./throttle.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"./languageUtils.js";import"./datetime.js";import"./number.js";import"./executeQueryJSON.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./FeatureIndex.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser2.js";import"./_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"./OperationalLayer.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"./featureReductionUtils.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/AggregateField.js";import"../layers/support/OutStatistic.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./versionUtils.js";import"./styleUtils.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"./themeUtils.js";import"./utils13.js";import"./numberUtils.js";import"./utils6.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./colorUtils2.js";import"./mat2df32.js";import"./layerViewUtils.js";import"./actions.js";import"../widgets/support/GoTo.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./Matrix4Uniform.js";import"./vec3f32.js";import"./lineUtils.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./interfaces2.js";import"./vec2f32.js";import"./FramebufferObject.js";import"./NestedMap.js";import"./Camera.js";import"./OrderIndependentTransparency.js";import"./Intersector.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./quat.js";import"./glUtil.js";import"./requestImageUtils.js";import"./floatRGBA.js";import"./Float3Uniform.js";import"./GeometryUtil.js";import"./HUDMaterial.js";import"./VisualVariables.glsl.js";import"./GLTextureMaterial.js";import"./Texture2.js";import"./earthUtils.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./ElevationQuery.js";import"./ElevationContext.js";import"./pointUtils.js";import"./vec3.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./VertexColor.glsl.js";import"./callExpressionWithFeature.js";import"./RenderGeometry.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./viewpointUtils.js";import"./ray2.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./DefaultVertexAttributeLayouts.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./vec4f32.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./VectorTile.js";import"./mat3f32.js";import"./enums3.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey.js";import"../views/2d/ViewState.js";import"./mat2df64.js";import"./I3SBinaryReader.js";import"./EdgeProcessingWorker.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"./Graphics3DFeatureProcessor.js";import"./Graphics3DScaleVisibility.js";import"./rendererConversion.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./Graphics3DObjectStates.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"./QueryEngineResult.js";import"../core/sql/WhereClause.js";import"./utils11.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils18.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./attributeUtils.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./projectExtentUtils.js";import"./LayerView3D.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./popupUtils.js";import"../views/layers/LayerView.js";import"./RefreshableLayerView.js";let m=class extends p{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=i()}initialize(){"capabilities"in this.layer&&this.layer.capabilities.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new r("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:this.layer}))),this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new r("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),"mesh"!==this.layer.geometryType||o(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};t([e({constructOnly:!0})],m.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),t([e()],m.prototype,"layer",void 0),m=t([s("esri.views.3d.layers.FeatureLayerView3D")],m);const a=m;export{a as default};
