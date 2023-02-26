// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Camera ../../../Viewpoint ../../../core/Accessor ../../../core/Handles ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/scheduling ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/Extent ../../../geometry/Point ../../../geometry/support/webMercatorUtils ../../ViewingMode ../camera/constraintUtils ../camera/intersectionUtils ./ConstraintsManager ./Frustum ./GoToOperation ./controllers/SurfaceCollisionCorrectionController ../support/cameraUtils ../support/PropertiesPool ../support/viewpointUtils ../webgl-engine/lib/Camera".split(" "),
function(v,g,t,y,e,E,F,n,q,G,H,h,aa,ba,ca,I,J,K,z,L,A,M,N,O,P,B,Q,R,S,T,f,U,C,u){const p=F.getLogger("esri.views.3d.state.ViewStateManager");e=function(D){function w(a){var b=D.call(this,a)||this;b.propertiesPool=new U.PropertiesPool({frustum:R.Frustum},v._assertThisInitialized(b));b.handles=new E;b.cameraSetByUser=!1;b.gotoOperation=null;b.ready=!1;b._windowDevicePixelRatio=1;b._devicePixelRatioOverride=null;b._maximumPixelRatioOverride=null;b.test={contentCameraResetState:new Map,setDevicePixelRatio:c=>
b._devicePixelRatioOverride=c,setMaximumPixelRatio:c=>b._maximumPixelRatioOverride=c};return b}v._inheritsLoose(w,D);var d=w.prototype;d.installContentCameraReset=function(a){this.handles.remove("contentCameraReset");this.test.contentCameraResetState.clear();if(!this.view.state.fixedContentCamera)return!1;const b=this.zoom,c=this.view.state.camera.distance**2,l=K.fromArray(this.view.state.camera.center),m=a.sticky?this.contentCamera.clone():null;this.handles.add([q.watch(()=>this.contentCamera,()=>
{a.sticky||(this.handles.remove("contentCameraReset"),this.test.contentCameraResetState.clear())}),q.watch(()=>this.zoom,k=>{this.test.contentCameraResetState.set("view.zoom",Math.abs(k-b)/2);2<Math.abs(k-b)?this.contentCamera=null:this.view.state.fixedContentCamera||(this.contentCamera=m)}),q.watch(()=>this.view.state.camera,k=>{k=J.squaredDistance(l,k.center);this.test.contentCameraResetState.set("camera.center",k/c);k>c?this.contentCamera=null:this.view.state.fixedContentCamera||(this.contentCamera=
m)})],"contentCameraReset");return!0};d._paddingToArray=function(a,b,c){a?z.set(c,a.top||0,a.right||0,a.bottom||0,a.left||0):z.set(c,0,0,0,0);for(a=0;4>a;a++)c[a]=Math.round(c[a]*b)};d.initialize=function(){this.handles.add([q.on(()=>this.view.state.events,"before-camera-change",a=>this._updateElevation(a.camera))]);q.watch(()=>this.view.state.camera,a=>this._updateElevation(a),{once:!0,sync:!0});this.handles.add(G.addFrameTask({prepare:()=>this._prepareFrame()}));this.handles.add(q.watch(()=>this.view.state.cameraController,
()=>{this.cameraSetByUser=!0;this.handles.remove("pending-initial-view")}));this.handles.add(q.on(()=>this.view.state.events,"camera-projection-changed",()=>this.notifyChange("scale")))};d.destroy=function(){this.deinit();this.handles&&(this.handles.destroy(),this.handles=null);this.propertiesPool&&(this.propertiesPool.destroy(),this.propertiesPool=null)};d.init=function(){this.constraintsManager=new Q.ConstraintsManager({view:this.view});this._prepareFrame();var a=this._getInitialProperties();this.cameraSetByUser=
!1;this._set("ready",!0);for(const b of a)this.set(b.name,b.value);this.cameraSetByUser||((a=this.view.get("map.initialViewProperties.viewpoint")||this.view.initialExtent)&&this.isCompatible(a)?this._setInitialView(a):this.view.state.viewingMode===O.ViewingMode.Local&&this.handles.add(q.when(()=>this.view.basemapTerrain.ready,()=>{this.handles.remove("pending-initial-view");this._setInitialView(this.view.dataExtent)},{once:!0,initial:!0}),"pending-initial-view"))};d.deinit=function(){this._cancelGoToOperation();
this.ready&&(this._override("padding",this.padding),this._set("ready",!1),this._clearOverride("hasInitialView"),this.cameraSetByUser=!1,this.handles.remove("pending-initial-view"),this.constraintsManager&&(this.constraintsManager.destroy(),this.constraintsManager=null))};d.goTo=function(){var a=v._asyncToGenerator(function*(b,c){c={animate:!0,...c};n.isSome(this.gotoOperation)&&this.gotoOperation.abort(c.animate);this.gotoOperation=new S.GoToOperation(b,c,this.view);this.view.resourceController.scheduler.stopFrame();
return this.gotoOperation});return function(b,c){return a.apply(this,arguments)}}();d.debugSetCameraOnContent=function(){this.setStateCamera(B.cameraOnContentAlongViewDirection(this.view),{applyConstraints:!1})};d.step=function(a){const b=this.view.state,c=b&&this.view.state.cameraController;c&&(b.updateCamera(l=>{c.stepController(a,l)}),c.steppingFinished&&c.finishController())};d._cancelGoToOperation=function(){n.isSome(this.gotoOperation)&&(this.gotoOperation.abort(),this.gotoOperation=null)};
d._getInitialProperties=function(){const a=new Set,b=[];for(const {propertyName:c,overrides:l}of V){const m=a.has(c),k=this._isOverridden(c);!m&&k&&b.push({name:c,value:this._get(c)});this._clearOverride(c);(m||k)&&l.forEach(W=>a.add(W))}return b};d._setInitialView=function(a){if(!n.isNone(a)&&!this.cameraSetByUser)if(a instanceof t)this.setStateCamera(f.externalToInternal(this.view,a),{applyConstraints:!1});else if(a instanceof y)if(a.targetGeometry instanceof A){var b=f.fromExtent(this.view,a.targetGeometry,
0,.5,f.OrientationMode.LOCKED);n.isSome(b)&&this.setStateCamera(f.externalToInternal(this.view,b),{applyConstraints:!0})}else b={applyConstraints:!a.camera},a=this._viewpointToCamera(a),this.setStateCamera(a,b);else b=f.fromExtent(this.view,a,0,.5,f.OrientationMode.LOCKED),n.isSome(b)&&this.setStateCamera(f.externalToInternal(this.view,b),{applyConstraints:!0})};d._updatePropertyBeforeReady=function(a,b){if(this.ready)return!1;this._override(a,b);b&&X.includes(a)&&this._override("hasInitialView",
!0);return!0};d.isCompatible=function(a){return n.isNone(a)?!1:a instanceof y?a.camera?this.isCompatible(a.camera):this.isCompatible(a.targetGeometry):a instanceof t?this.isCompatible(a.position):a.spatialReference&&N.canProject(a.spatialReference,this.view.spatialReference)};d._getPreservingHeadingTilt=function(a=Y){this.cameraSetByUser?(a.heading=this.camera.heading,a.tilt=this.camera.tilt):(a.heading=0,a.tilt=.5);return a};d._centerPointAtDistanceToCamera=function(a,b,c=r){const {heading:l,tilt:m}=
this._getPreservingHeadingTilt();a=f.getObserverForPointAtDistance(this.view,l,m,a,b,f.OrientationMode.ADJUST);if(n.isNone(a))return null;c.copyFrom(this.view.state.camera);c.eye=a.eye;c.center=a.center;c.up=a.up;return c};d._centerToCamera=function(a){const b=this.view.pointsOfInterest.centerOnContent;b.runTask();return this._centerPointAtDistanceToCamera(a,b.distance)};d._extentToCamera=function(a){const {heading:b,tilt:c}=this._getPreservingHeadingTilt();a=f.fromExtent(this.view,a,b,c,f.OrientationMode.ADJUST,
Z);return n.isSome(a)?f.externalToInternal(this.view,a):null};d._scaleToCamera=function(a){if(null==a)return null;const b=this.view.pointsOfInterest.centerOnContent;b.runTask();const c=b.renderLocation;a=f.scaleToDistance(this.view,a,b.location.latitude);return this._centerPointAtDistanceToCamera(c,a)};d._zoomToCamera=function(a){return this._scaleToCamera(f.zoomToScale(this.view,a))};d._viewpointToCamera=function(a){return f.externalToInternal(this.view,C.toCamera(this.view,a))};d.setStateCamera=
function(a,b){if(n.isNone(a)||!this.view.state.stopActiveCameraController())return!1;this.cameraSetByUser=!0;b.doNotCancelGoToOperation||this._cancelGoToOperation();this.view.state.updateCamera(c=>{b.positionAndOrientationOnly?(c.eye=a.eye,c.center=a.center,c.up=a.up):c.copyFrom(a);b.applyConstraints&&P.applyAll(this.view,c)});b.applyConstraints||(this.view.state.cameraController=new T.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:a}));return!0};d._prepareFrame=function(){const {surface:a,
canvas:b}=this.view;if(a&&b){this._windowDevicePixelRatio=window.devicePixelRatio;var c=this._devicePixelRatio,l=Math.round(a.clientWidth*c),m=Math.round(a.clientHeight*c);if(0!==l&&0!==m){if(b.width!==l||b.height!==m)b.width=l,b.height=m;if(this.view.state){const k=this.view.state.camera;if(k.fullWidth!==l||k.fullHeight!==m||k.pixelRatio!==c)r.copyFrom(k),r.pixelRatio!==c&&(this._paddingToArray(this.padding,c,x),r.padding=x),r.fullWidth=l,r.fullHeight=m,r.pixelRatio=c,this.view.state.camera=r}}}};
d._updateElevation=function(a){var b=this.view.basemapTerrain&&this.view.basemapTerrain.spatialReference;const c=this.view.renderCoordsHelper.getAltitude(a.eye);b=b?B.surfaceElevationBelowRenderLocation(this.view,a.eye):0;a.relativeElevation=c-b};v._createClass(w,[{key:"camera",get:function(){const a=this._get("camera");if(!this.ready)return a;const b=f.internalToExternal(this.view,this.view.state.camera);return b&&a&&b.equals(a)?a:b},set:function(a){this._updatePropertyBeforeReady("camera",a)||(this.view.elevationProvider.enableElevationCache(!0),
this.setStateCamera(f.externalToInternal(this.view,a),{applyConstraints:!1})||p.error("#camera\x3d","Invalid camera",a),this.view.elevationProvider.enableElevationCache(!1))}},{key:"contentCamera",get:function(){const a=this._get("contentCamera");if(!this.ready)return a;const b=f.internalToExternal(this.view,this.view.state.contentCamera);return b&&a&&b.equals(a)?a:b},set:function(a){this._updatePropertyBeforeReady("contentCamera",a)||(a=f.externalToInternal(this.view,a),n.isNone(a)?this.view.state.contentCamera=
null:(this._updateElevation(a),this.view.state.contentCamera=a))}},{key:"center",get:function(){return this.ready?this.view.pointsOfInterest.centerOnContent.location:this._get("center")},set:function(a){this._updatePropertyBeforeReady("center",a)||(a?this.isCompatible(a)?this.setStateCamera(this._centerToCamera(a),{applyConstraints:!0})?this.view.pointsOfInterest.centerOnContent.runTask():p.error("#center\x3d","Invalid center",a):p.error("#center\x3d","Center has an incompatible spatial reference (center: "+
(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):p.error("#center\x3d","Center may not be null or undefined"))}},{key:"extent",get:function(){if(!this.ready)return this._get("extent");var a=this.view;a=f.toExtent(a,a.state.camera,a.pointsOfInterest.centerOnContent.renderLocation);return n.isSome(a)?a:this._get("extent")},set:function(a){this._updatePropertyBeforeReady("extent",a)||(a?this.isCompatible(a)?this.setStateCamera(this._extentToCamera(a),
{applyConstraints:!0})||p.error("#extent\x3d","Invalid extent",a):p.error("#extent\x3d","Extent has an incompatible spatial reference (extent: "+(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):p.error("#extent\x3d","Extent may not be null or undefined"))}},{key:"frustum",get:function(){const a=this.propertiesPool.get("frustum");a.renderCoordsHelper=this.view.renderCoordsHelper;a.update(this.view.state.camera);return a}},{key:"hasInitialView",get:function(){return!!this.view.get("map.initialViewProperties.viewpoint")}},
{key:"scale",get:function(){if(this.ready){const a=this.view.pointsOfInterest.centerOnContent;return f.distanceToScale(this.view,a.distance,a.location.latitude)}return this._get("scale")},set:function(a){this._updatePropertyBeforeReady("scale",a)||this.setStateCamera(this._scaleToCamera(a),{applyConstraints:!0})||p.error("#scale\x3d","Invalid scale",a)}},{key:"padding",get:function(){if(!this.ready)return this._get("padding");var a=this.view.state.camera,b=a.padding;const c=a.pixelRatio;a=this._get("padding");
const l=Math.round(b[u.PaddingSide.TOP]/c),m=Math.round(b[u.PaddingSide.RIGHT]/c),k=Math.round(b[u.PaddingSide.BOTTOM]/c);b=Math.round(b[u.PaddingSide.LEFT]/c);return null!=a&&a.top===l&&a.right===m&&a.bottom===k&&a.left===b?a:{top:l,right:m,bottom:k,left:b}},set:function(a){this._updatePropertyBeforeReady("padding",a)||(this._paddingToArray(a,this.view.state.camera.pixelRatio,x),this.view.state.updateCamera(b=>b.padding=x))}},{key:"screenCenter",get:function(){const a=this.padding;return H.createScreenPoint((this.view.width-
(a.left+a.right))/2+a.left,(this.view.height-(a.top+a.bottom))/2+a.top)}},{key:"viewpoint",get:function(){return this.ready?C.fromCamera(this.view,this.camera):this._get("viewpoint")},set:function(a){if(!this._updatePropertyBeforeReady("viewpoint",a))if(a)if(this.isCompatible(a))this.setStateCamera(this._viewpointToCamera(a),{applyConstraints:!a.camera})||p.error("#viewpoint\x3d","Invalid viewpoint",a);else{var b=n.isSome(a.camera)?a.camera.position:a.targetGeometry;b=n.isSome(b)&&b.spatialReference;
p.error("#viewpoint\x3d","Viewpoint has an incompatible spatial reference (viewpoint: "+(b?b.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a)}else p.error("#viewpoint\x3d","Viewpoint may not be null or undefined")}},{key:"zoom",get:function(){return this.ready?f.scaleToZoom(this.view,this.scale):this._get("zoom")},set:function(a){this._updatePropertyBeforeReady("zoom",a)||this.setStateCamera(this._zoomToCamera(a),{applyConstraints:!0})||p.error("#zoom\x3d","Invalid zoom",a)}},{key:"maximumPixelRatio",
get:function(){if(n.isSome(this._maximumPixelRatioOverride))return this._maximumPixelRatioOverride;let a=Infinity;const {maximumPixelRatio:b,maximumRenderResolution:c}=this.view.qualitySettings;null!=b&&(a=Math.min(a,b));null!=c&&(a=Math.min(a,c/Math.max(this.view.width,this.view.height)));return a}},{key:"_devicePixelRatio",get:function(){return n.isNone(this._devicePixelRatioOverride)?Math.min(this._windowDevicePixelRatio,this.maximumPixelRatio):this._devicePixelRatioOverride}}]);return w}(e);g.__decorate([h.property({type:t,
dependsOn:["view.state.camera","ready"]})],e.prototype,"camera",null);g.__decorate([h.property({type:t,dependsOn:["view.state.contentCamera","ready"]})],e.prototype,"contentCamera",null);g.__decorate([h.property({type:M})],e.prototype,"center",null);g.__decorate([h.property({type:A})],e.prototype,"extent",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"frustum",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"hasInitialView",null);g.__decorate([h.property({readOnly:!0,type:Boolean})],
e.prototype,"ready",void 0);g.__decorate([h.property({type:Number})],e.prototype,"scale",null);g.__decorate([h.property()],e.prototype,"padding",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"screenCenter",null);g.__decorate([h.property({constructOnly:!0})],e.prototype,"view",void 0);g.__decorate([h.property({type:y})],e.prototype,"viewpoint",null);g.__decorate([h.property({type:Number})],e.prototype,"zoom",null);g.__decorate([h.property()],e.prototype,"maximumPixelRatio",null);g.__decorate([h.property()],
e.prototype,"_devicePixelRatio",null);g.__decorate([h.property()],e.prototype,"_windowDevicePixelRatio",void 0);g.__decorate([h.property()],e.prototype,"_devicePixelRatioOverride",void 0);g.__decorate([h.property()],e.prototype,"_maximumPixelRatioOverride",void 0);g=e=g.__decorate([I.subclass("esri.views.3d.state.ViewStateManager")],e);const X="camera viewpoint extent scale center zoom".split(" "),V=[{propertyName:"camera",overrides:["viewpoint"]},{propertyName:"viewpoint",overrides:["extent"]},{propertyName:"extent",
overrides:["center","scale"]},{propertyName:"center",overrides:[]},{propertyName:"scale",overrides:["zoom"]},{propertyName:"zoom",overrides:[]},{propertyName:"padding",overrides:[]}],Y={heading:0,tilt:0},Z=new t,r=new u.Camera,x=L.create();return g});