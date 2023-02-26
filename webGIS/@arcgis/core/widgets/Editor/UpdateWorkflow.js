/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{m as e}from"../../chunks/handleUtils.js";import{i as s}from"../../chunks/maybe.js";import{onAbort as o,createAbortError as i,throwIfAborted as r,isAborted as a}from"../../core/promiseUtils.js";import{watch as p}from"../../core/reactiveUtils.js";import"../../chunks/Logger.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{h as m}from"../../chunks/layerViewUtils.js";import{Edits as l}from"./Edits.js";import c from"./UpdateWorkflowData.js";import u from"./Workflow.js";import{c as d,e as j,h,f as y,g as b,i as g}from"../../chunks/workflowUtils.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/metadata.js";import"../../core/Accessor.js";import"../../core/HandleOwner.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/diffUtils.js";import"../../chunks/drapedUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/assets.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/GraphicState.js";import"../../chunks/hitTestSelectUtils.js";var k;let f=k=class extends u{constructor(t){super(t),this.type="update"}static create(t,e,s){const o=new k({data:new c({edits:new l,viewModel:t}),onCommit:async t=>{const e=t.edits.feature,o=e.sourceLayer,i=e.clone();if(!t.edits.attributesModified){const{objectIdField:t}=o;i.attributes={[t]:e.getAttribute(t)}}t.edits.geometryModified||(i.geometry=null),await s(o,{updateFeatures:[i]})}});return o._set("steps",this._createWorkflowSteps(o,e)),o}highlight(t){const{data:{viewModel:{view:e}}}=this,s=t&&e.allLayerViews.items.find((({layer:e})=>e===t.layer));m(s)&&this.handles.add(s.highlight(t),"candidate-highlight")}unhighlight(){this.handles.remove("candidate-highlight")}static _createWorkflowSteps(t,n="awaiting-feature-to-update"){const{data:m,handles:l}=t,c=new Map;return d(["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature","adding-attachment","editing-attachment"],n,{"awaiting-feature-to-update":()=>({id:"awaiting-feature-to-update",async setUp(){const{spinnerViewModel:t,view:e}=m.viewModel;let s=null;l.add({remove(){s&&(s.abort(),s=null)}},this.id),m.edits.feature=null;const a=e.on("immediate-click",(a=>{t.location=a.mapPoint,t.visible=!0,s&&s.abort();const{editableItems:p}=m.viewModel;s=new AbortController,new Promise(((t,r)=>{o(s.signal,(()=>r(i()))),t(j(p,e,a,s.signal))})).then((t=>{if(r(s),m.candidates=t.reduce(((t,e)=>e.error?t:[...t,...e.value]),[]),m.viewModel.spinnerViewModel.visible=1===m.candidates.length,0!==m.candidates.length)if(1===m.candidates.length){const t=m.candidates[0];m.edits.feature=t,m.viewModel.activeWorkflow.go("editing-existing-feature").catch((()=>{})).then((()=>m.viewModel.spinnerViewModel.visible=!1))}else m.viewModel.activeWorkflow.next()}))}));e.focus(),l.add(a,this.id)},async tearDown(){l.remove(this.id)}}),"awaiting-update-feature-candidate":()=>({id:"awaiting-update-feature-candidate",async setUp(){const{edits:e}=m;e.feature=null,l.add(p((()=>e.feature),(e=>{t.unhighlight(),t.highlight(e)})),this.id)},async tearDown(){t.unhighlight(),l.remove(this.id)}}),"editing-existing-feature":()=>({id:"editing-existing-feature",async setUp(){if(l.has("editing-existing-feature"))return;const o=m.edits.feature,i=m.viewModel;m.editableItem=i.editableItems.find((t=>t.layer===o.layer));const r=new AbortController;l.add({remove:()=>r.abort()},this.id);const n=i.view.whenLayerView(o.layer),u=h(o,i.view,r.signal),d=await n,j=await u;if(a(r))return;m.edits.updateGeometry(j.geometry),m.edits.updateAttributes(j.attributes),m.edits.trackChanges(),i.attachmentsViewModel.set({graphic:j,mode:"view"});const k=j.sourceLayer,f=y(i.layerInfos,k)?.formTemplate,w=i.view.spatialReference;i.featureFormViewModel.set({feature:j,formTemplate:f,spatialReference:w});const M="createInteractiveEditSession"in d?d.createInteractiveEditSession(o):null,S=[i.featureFormViewModel.on("value-change",(t=>{m.edits.updateAttributes(i.featureFormViewModel.getValues()),j.attributes=m.edits.feature.attributes,M&&M.setAttribute(t.fieldName,t.value)})),p((()=>i.attachmentsViewModel.mode),(t=>{"add"===t&&m.viewModel.activeWorkflow.go("adding-attachment"),"edit"===t&&m.viewModel.activeWorkflow.go("editing-attachment")}))];M&&(S.push(e((()=>M.rollback()))),l.add(e((()=>M.commit())),t._handleKeys.afterCommit));const{supportsGeometryUpdate:v}=k.capabilities.editing;if(v){i.sketchViewModel.allowDeleteKey=!1;const e=b(j),{interactive:o,visual:r}=await g(j,e,i.sketchViewModel,i.view,(({geometry:t,attributes:o})=>{if(s(e.rotation)){const{field:t}=e.rotation;i.featureFormViewModel.setValue(t,o[t])}if(s(e.size)){const{field:t}=e.size;i.featureFormViewModel.setValue(t,o[t])}m.edits.updateAttributes(o),m.edits.updateGeometry(t),i.featureFormViewModel.feature.geometry=t}),c);S.push(o,r),l.add(o,t._handleKeys.beforeCommit),l.add(r,t._handleKeys.afterCommit)}else t.highlight(j);l.add(S,this.id)},async tearDown({cancelled:e}){e&&(t.unhighlight(),l.remove(this.id))}}),"adding-attachment":()=>({id:"adding-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){m.viewModel.attachmentsViewModel.mode="view"}}),"editing-attachment":()=>({id:"editing-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){m.viewModel.attachmentsViewModel.mode="view"}})})}};f=k=t([n("esri.widgets.Editor.UpdateWorkflow")],f);const w=f;export{w as default};