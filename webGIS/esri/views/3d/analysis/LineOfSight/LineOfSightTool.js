// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Color ../../../../analysis/LineOfSightAnalysisObserver ../../../../analysis/LineOfSightAnalysisTarget ../../../../core/Collection ../../../../core/Handles ../../../../core/Logger ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/lineSegment ../../../../support/elevationInfoUtils ../../../../symbols/support/ElevationInfo ./LineOfSightRayIntersector ./LineOfSightToolConfiguration ./lineOfSightToolUtils ../../interactive/visualElements/LaserlineVisualElement ../../webgl-engine/lib/IntersectorInterfaces ../../../input/ViewEvents ../../../interactive/AnalysisToolBase ../../../interactive/dragEventPipeline ../../../interactive/interfaces ../../../support/screenUtils ../../../input/IViewEvents".split(" "),
function(g,y,h,z,A,r,t,u,J,d,k,l,Q,R,S,K,B,C,D,L,E,F,M,v,T,N,G,w,H,x){var m;(function(n){n.Ready="ready";n.Creating="creating";n.Created="created"})(m||(m={}));t=t.ofType(r);const I=J.getLogger("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool");g.LineOfSightTool=function(n){function q(a){a=n.call(this,a)||this;a.preferManipulatorCursor=!0;a.removeIncompleteOnCancel=!1;a.configuration=new E.LineOfSightToolConfiguration;a.analysisViewData=null;a._laserlineVisualElement=null;a._grabbedManipulator=
null;a._analysisHandles=new u;a._handles=new u;a._manipulatorHandles=new u;a._targetTrackerManipulator=null;return a}y._inheritsLoose(q,n);var c=q.prototype;c.initialize=function(){this._intersector=new L.LineOfSightRayIntersector({view:this.view});this._handles.add(k.watch(()=>this.state,a=>{a===m.Created&&this.finishToolCreation()},k.syncAndInitial));this._observerManipulator=this._createObserverManipulator();this._handles.add([k.watch(()=>({...this.configuration.observer}),()=>this._updateObserverManipulatorStyle(),
k.sync),k.watch(()=>this.analysisViewData.elevationAlignedObserver,a=>this._onObserverLocationChange(a),k.syncAndInitial),k.watch(()=>({...this.configuration.laserLine}),()=>this._createVisualElements(),k.syncAndInitial),k.watch(()=>this._laserLineRendererDependencies(),a=>this._updateLaserLineRenderer(a)),this._connectComputations()])};c.destroy=function(){this._handles=d.destroyMaybe(this._handles);this._manipulatorHandles=d.destroyMaybe(this._manipulatorHandles);this._analysisHandles=d.destroyMaybe(this._analysisHandles);
this._observerManipulator=null;this._clearCursorTracker();this._removeVisualElements();this._intersector=null;this._set("analysis",null)};c.continue=function(){this.view.activeTool=this};c.stop=function(){this.view.activeTool=null};c.onEditableChange=function(){this.analysisViewData.editable=this.internallyEditable};c.onInputEvent=function(a){switch(a.type){case "immediate-double-click":this._doubleClickHandler(a);break;case "key-down":this._keyDownHandler(a);break;case "pointer-move":this._pointerMoveHandler(a)}};
c.onInputEventAfter=function(a){switch(a.type){case "immediate-click":this._clickHandler(a)}};c.onShow=function(){};c.onHide=function(){this._grabbedManipulator=null};c.onDeactivate=function(){this._clearCursorTracker()};c._connectComputations=function(){return k.on(()=>this.analysisViewData.computations,"change",a=>this._onComputationsCollectionChange(a),{onListenerAdd:a=>{for(const b of a)this._connectComputation(b)},onListenerRemove:a=>{for(const b of a)this._disconnectComputation(b)},sync:!0})};
c._onComputationsCollectionChange=function({added:a,removed:b}){for(const e of b)this._disconnectComputation(e);for(const e of a)this._connectComputation(e)};c._connectComputation=function(a){if(this.destroyed)I.warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");else{var b=this._analysisHandles;if(!b.has(a)){var e=this._createTargetManipulator(a.target);d.isNone(this._targetTrackerManipulator)&&e.metadata.target===this.analysisViewData.cursorTarget&&(this._targetTrackerManipulator=
e,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=!1,this._updateLaserLineRenderer());b.add([k.watch(()=>this._getLineOfSightManipulatorStateDependencies(a),()=>this._updateManipulatorState(e,a),k.syncAndInitial),k.watch(()=>a.elevationAlignedTargetLocation,f=>this._onTargetLocationChange(f,e),k.syncAndInitial)],a)}}};c._disconnectComputation=function(a){this.destroyed?I.warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring."):
(this._analysisHandles.remove(a),a=this._getTargetManipulator(a.target),d.isSome(a)&&(this.manipulators.remove(a),this._manipulatorHandles.remove(a),d.isSome(this._targetTrackerManipulator)&&this._targetTrackerManipulator===a&&(this._targetTrackerManipulator=null)))};c._clearCursorTracker=function(){this.analysisViewData.cursorTarget=d.destroyMaybe(this.analysisViewData.cursorTarget)};c._createManipulator=function(a,b,e){const f=F.createSphereManipulator(this.view,a);f.metadata=e;this._manipulatorHandles.add([b(f),
f.events.on("grab-changed",p=>this._manipulatorGrabChanged(f,p)),f.events.on("immediate-click",p=>this._manipulatorClick(f,p))],f);this.manipulators.add(f);return f};c._createTargetManipulator=function(a){var b=this.configuration;b=this._createManipulator({size:b.target.size,customColor1:b.target.visibleColor,customColor2:b.target.occludedColor,customColor3:b.target.undefinedColor,visible:!0},e=>this._createTargetManipulatorDragPipeline(e),{target:a,type:"target"});d.isSome(a.position)?b.elevationAlignedLocation=
a.position:b.available=!1;return b};c._getTargetManipulator=function(a){let b=null;this.manipulators.forEach(e=>{e=e.manipulator;d.isNone(b)&&"target"===e.metadata.type&&e.metadata.target===a&&(b=e)});return b};c._createObserverManipulator=function(){const a=this.configuration;return this._createManipulator({size:a.observer.size,color:a.observer.color,visible:!0},b=>this._createObserverManipulatorDragPipeline(b),{type:"observer",intersection:null})};c._updateObserverManipulatorStyle=function(){const a=
this._observerManipulator,b=this.configuration.observer;a.renderObjects=F.createSphereManipulatorRenderObjects({size:b.size,color:b.color,visible:a.available})};c._screenToIntersection=function(){return a=>{const b=this._intersector.getScreenPointIntersection(a.screenEnd);return d.isNone(b)?null:{...a,intersection:b}}};c._createTargetManipulatorDragPipeline=function(a){return G.createManipulatorDragEventPipeline(a,(b,e,f)=>{e.next(this._screenToIntersection()).next(this._updateTargetDragStep(a)).next(()=>
this._updateLaserLineRenderer());f.next(this._cancelTargetDragStep(a.metadata.target)).next(()=>this._updateLaserLineRenderer())})};c._createObserverManipulatorDragPipeline=function(a){return G.createManipulatorDragEventPipeline(a,(b,e,f)=>{e.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>this._updateLaserLineRenderer());f.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})};c._updateObserverDragStep=function(){return a=>{d.isSome(a.intersection.point)?
(d.isNone(this.analysis.observer)&&(this.analysis.observer=new A),this._updateFromIntersection(this.analysis.observer,a.intersection)):this.analysis.observer=null;return a}};c._cancelObserverDragStep=function(){const a=d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?this.analysis.observer.clone():null;return b=>{this.analysis.observer=a;return b}};c._updateTargetDragStep=function(a){return b=>{this._updateFromIntersection(a.metadata.target,b.intersection);const e=b.intersection.point;
d.isSome(e)&&(a.elevationAlignedLocation=e);return b}};c._cancelTargetDragStep=function(a){const b=d.applySome(a.position,e=>e.clone());return e=>{a.position=b;return e}};c._manipulatorGrabChanged=function(a,b){switch(b.action){case "start":this._grabbedManipulator=a;break;case "end":this._grabbedManipulator===a&&(this._grabbedManipulator=null)}};c._updateManipulatorState=function(a,b){const {isValid:e,isTargetVisible:f}=b.computationResult;a.state=e?f?w.ManipulatorStateCustomFlags.Custom1:w.ManipulatorStateCustomFlags.Custom2:
w.ManipulatorStateCustomFlags.Custom3};c._getLineOfSightManipulatorStateDependencies=function(a){const {isValid:b,isTargetVisible:e}=a.computationResult;return{isValid:b,isTargetVisible:e}};c._laserLineRendererDependencies=function(){return{laserlineVisualElement:this._laserlineVisualElement,grabbedManipulator:this._grabbedManipulator,shouldRenderTracker:this._shouldRenderTracker,observerPosition:d.isSome(this.analysis.observer)?this.analysis.observer.position:null,visible:this.visible}};c._updateLaserLineRenderer=
function(a=this._laserLineRendererDependencies()){const {laserlineVisualElement:b,grabbedManipulator:e,shouldRenderTracker:f,observerPosition:p,visible:O}=a;d.isNone(b)||(a=d.isSome(e)?e:f&&d.isSome(p)?this._targetTrackerManipulator:null,this.configuration.laserLine.enabled&&d.isSome(a)&&O?(b.visible=!0,b.heightManifoldTarget=a.renderLocation,b.lineVerticalPlaneSegment=a!==this._observerManipulator?B.fromPoints(this._observerManipulator.renderLocation,a.renderLocation,P):null):(b.visible=!1,b.heightManifoldTarget=
null,b.lineVerticalPlaneSegment=null))};c._createVisualElements=function(){const a=this.configuration.laserLine;this._removeVisualElements();this._laserlineVisualElement=new M.LaserlineVisualElement({view:this.view,attached:!0,visible:this.visible,style:{glowColor:z.toUnitRGB(a.glowColor),glowWidth:a.glowWidth,innerColor:z.toUnitRGB(a.innerColor),innerWidth:a.innerWidth,globalAlpha:a.globalAlpha}})};c._removeVisualElements=function(){d.isSome(this._laserlineVisualElement)&&(this._laserlineVisualElement.destroy(),
this._laserlineVisualElement=null)};c._onObserverLocationChange=function(a){d.isNone(a)?this._observerManipulator.available=!1:(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=a)};c._onTargetLocationChange=function(a,b){d.isSome(a)?(b.elevationAlignedLocation=a,b!==this._targetTrackerManipulator&&(b.available=!0)):b.available=!1};c._addPointFromClickEvent=function(a){a=this._intersector.getScreenPointIntersection(a);
if(!d.isNone(a)&&!d.isNone(a.point))if(d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)){this._clearCursorTracker();var b=new r;this._updateFromIntersection(b,a);this.analysis.targets.add(b)}else b=new A,this._updateFromIntersection(b,a),this.analysis.observer=b};c._clickHandler=function(a){this.active&&a.button!==x.MouseButton.Right&&(this._addPointFromClickEvent(H.createScreenPointFromEvent(a)),a.stopPropagation())};c._doubleClickHandler=function(a){this.active&&a.button!==
x.MouseButton.Right&&(this.stop(),a.stopPropagation())};c._keyDownHandler=function(a){this.active&&"Escape"===a.key&&(this.stop(),a.stopPropagation())};c._pointerMoveHandler=function(a){this.hasFocusedManipulators||(this._latestPointerMovePointerType=a.pointerType,this._updateLaserLineRenderer(),!this._showTracker||d.isNone(this.analysis.observer)||d.isNone(this.analysis.observer.position)||(a=H.createScreenPointFromEvent(a),a=this._intersector.getScreenPointIntersection(a),d.isSome(a)&&d.isSome(a.point)&&
(d.isNone(this.analysisViewData.cursorTarget)&&(this.analysisViewData.cursorTarget=new r),this._updateFromIntersection(this.analysisViewData.cursorTarget,a),this._updateLaserLineRenderer())))};c._updateFromIntersection=function(a,b){if(d.isNone(b.point))a.position=null,a.elevationInfo=null,a.feature=null;else{switch(b.type){case v.IntersectorType.OBJECT:if(d.isSome(b.graphic)){const e=b.graphic,f=C.getGraphicEffectiveElevationInfo(e);"on-the-ground"===f.mode&&(f.mode="relative-to-ground",f.offset=
0);a.elevationInfo=new D.default(f);a.feature=e}else a.elevationInfo=null,a.feature=null;break;case v.IntersectorType.TERRAIN:case v.IntersectorType.I3S:a.elevationInfo=new D.default({mode:"on-the-ground"});a.feature=null;break;default:a.elevationInfo=null,a.feature=null}b=b.point.clone();b.z=C.getConvertedElevation(this.view,b,{mode:"absolute-height",offset:0},a.elevationInfo);a.position=b}};c._manipulatorClick=function(a,b){"observer"===a.metadata.type||a.grabbing||a.dragging||b.button!==x.MouseButton.Right||
1>=this.analysis.targets.length||({target:a}=a.metadata,this.analysis.targets.remove(a),b.stopPropagation())};y._createClass(q,[{key:"state",get:function(){return this.active?d.isSome(this._grabbedManipulator)?m.Created:m.Creating:d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?m.Created:m.Ready}},{key:"cursor",get:function(){return this.active&&this._showTracker?"crosshair":null}},{key:"updating",get:function(){return d.isSome(this.analysisViewData)?this.analysisViewData.updating:
!1}},{key:"_showTracker",get:function(){return this.active&&"mouse"===this._latestPointerMovePointerType}},{key:"_shouldRenderTracker",get:function(){return this._showTracker&&d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)&&!this.hasFocusedManipulators}},{key:"testInfo",get:function(){return{laserLineVisualElement:this._laserlineVisualElement}}}]);return q}(N.AnalysisToolBase);h.__decorate([l.property({constructOnly:!0})],g.LineOfSightTool.prototype,"view",void 0);h.__decorate([l.property({constructOnly:!0})],
g.LineOfSightTool.prototype,"analysis",void 0);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"state",null);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"cursor",null);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"preferManipulatorCursor",void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,"removeIncompleteOnCancel",void 0);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"updating",null);h.__decorate([l.property({type:E.LineOfSightToolConfiguration})],
g.LineOfSightTool.prototype,"configuration",void 0);h.__decorate([l.property({constructOnly:!0})],g.LineOfSightTool.prototype,"analysisViewData",void 0);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"_showTracker",null);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_latestPointerMovePointerType",void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_shouldRenderTracker",null);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_laserlineVisualElement",
void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_grabbedManipulator",void 0);g.LineOfSightTool=h.__decorate([K.subclass("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")],g.LineOfSightTool);const P=B.create();g.LineOfSightTargetCollection=t;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});