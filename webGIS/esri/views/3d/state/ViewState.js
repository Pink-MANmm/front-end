// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Evented ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/watch ../../../chunks/vec3f64 ../../../geometry/projectionEllipsoid ../../ViewAnimation ../../ViewingMode ./Constraints ./controllers/AnimationController ./controllers/CameraController ../support/PropertiesPool ../webgl-engine/lib/Camera".split(" "),
function(q,c,b,x,l,r,d,F,G,H,y,z,k,A,B,m,C,D,n,t,e){b=function(u){function p(){var a=u.apply(this,arguments)||this;a._propertiesPool=new t.PropertiesPool({camera:e.Camera},q._assertThisInitialized(a));a._lastSeenCameraProjectionValues=new e.Camera;a.events=new x;a.viewingMode=m.ViewingMode.Global;a._cameraChanged=!1;a.updateQueue=[];a.processingUpdates=!1;return a}q._inheritsLoose(p,u);var h=p.prototype;h.init=function(a,f){this._set("viewingMode",a);this._set("spatialReference",f);this._set("constraints",
new C.Constraints({mode:this.viewingMode}))};h.exit=function(){this.cameraController=null;this._propertiesPool.destroy();this._propertiesPool=new t.PropertiesPool({camera:e.Camera},this)};h.createInitialCamera=function(){if(this.viewingMode===m.ViewingMode.Global){const a=A.getReferenceEllipsoid(this.spatialReference).radius;this.camera=new e.Camera(k.fromValues(4*a,0,0),k.fromValues(a,0,0),k.fromValues(0,0,1))}else this.camera=new e.Camera(k.fromValues(0,0,100),k.fromValues(0,0,0),k.fromValues(0,
1,0))};h.switchCameraController=function(a){this.cameraController=a;return a.state!==n.State.Rejected};h.stopActiveCameraController=function(){return this.cameraController&&!this.cameraController.stopController()?!1:!0};h.updateCamera=function(a){this.updateQueue.push(a);this._processUpdateQueue()};h._processUpdateQueue=function(){if(0!==this.updateQueue.length&&!this.processingUpdates){this.processingUpdates=!0;var a=this.updateQueue.shift();g.copyFrom(this._get("camera"));a(g);this.camera=g;this.processingUpdates=
!1;this._processUpdateQueue()}};h._cameraProjectionChanged=function(a,f){return a.fov!==f.fov||a.fullViewport[0]!==f.fullViewport[0]||a.fullViewport[1]!==f.fullViewport[1]||a.fullViewport[2]!==f.fullViewport[2]||a.fullViewport[3]!==f.fullViewport[3]||a.padding[e.PaddingSide.TOP]!==f.padding[e.PaddingSide.TOP]||a.padding[e.PaddingSide.RIGHT]!==f.padding[e.PaddingSide.RIGHT]||a.padding[e.PaddingSide.BOTTOM]!==f.padding[e.PaddingSide.BOTTOM]||a.padding[e.PaddingSide.LEFT]!==f.padding[e.PaddingSide.LEFT]?
!0:!1};q._createClass(p,[{key:"animation",get:function(){return this.cameraController instanceof D.AnimationController&&l.isSome(this.cameraController.viewAnimation)?this.cameraController.viewAnimation:null}},{key:"camera",get:function(){return this._get("camera")},set:function(a){a!==g&&g.copyFrom(a);g.computeUp(this.viewingMode);v.camera=g;this.events.emit("before-camera-change",v);a=this._get("camera");this._cameraProjectionChanged(this._lastSeenCameraProjectionValues,g)&&(this._lastSeenCameraProjectionValues.copyFrom(g),
w.camera=this._lastSeenCameraProjectionValues,this.events.emit("camera-projection-changed",w));if(!a||!a.equals(g))if(this._set("camera",this._propertiesPool.get("camera").copyFrom(g)),this._cameraChanged=!a||!a.almostEquals(g)){const f=z.afterDispatch(()=>{this._cameraChanged=!1;f.remove()})}}},{key:"pixelRatio",get:function(){return this.camera.pixelRatio}},{key:"contentCamera",get:function(){return l.isSome(this._contentCamera)?this._contentCamera:this.camera},set:function(a){this._contentCamera=
l.isSome(a)?a.clone():null}},{key:"fixedContentCamera",get:function(){return l.isSome(this._contentCamera)}},{key:"isGlobal",get:function(){return this.viewingMode===m.ViewingMode.Global}},{key:"isLocal",get:function(){return this.viewingMode===m.ViewingMode.Local}},{key:"navigating",get:function(){return!(!this.cameraController||!this.cameraController.isInteractive)}},{key:"stationary",get:function(){return!this._cameraChanged&&!this.navigating}},{key:"cameraController",get:function(){return this._get("cameraController")},
set:function(a){this.stopActiveCameraController()?(a&&(this.own(r.watch(()=>a.state,f=>{if(f===n.State.Finished||f===n.State.Stopped)this._set("cameraController",null),this.updateCamera(E=>a.onControllerEnd(E))},r.sync)),a.onControllerStart(this.camera)),this._set("cameraController",a)):a&&(a.state=n.State.Rejected)}}]);return p}(b);c.__decorate([d.property({readOnly:!0,type:B})],b.prototype,"animation",null);c.__decorate([d.property({type:e.Camera})],b.prototype,"camera",null);c.__decorate([d.property()],
b.prototype,"pixelRatio",null);c.__decorate([d.property({})],b.prototype,"_contentCamera",void 0);c.__decorate([d.property({type:e.Camera})],b.prototype,"contentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"fixedContentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"constraints",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"events",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"isGlobal",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"isLocal",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"viewingMode",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"navigating",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"stationary",null);c.__decorate([d.property()],b.prototype,"_cameraChanged",void 0);c.__decorate([d.property()],b.prototype,"cameraController",null);c=b=c.__decorate([y.subclass("esri.views.3d.state.ViewState")],
b);const g=new e.Camera,v={camera:null},w={camera:null};return c});