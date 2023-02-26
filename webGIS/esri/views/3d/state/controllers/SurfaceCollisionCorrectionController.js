// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../camera/constraintUtils ../../camera/intersectionUtils ./CameraController ../../camera/constraintUtils/surfaceCollision".split(" "),function(b,g,e,m,h,q,r,t,n,u,p,f,k){b.SurfaceCollisionCorrectionController=
function(l){function d(a){a=l.call(this,a)||this;a.handles=new m;return a}g._inheritsLoose(d,l);var c=d.prototype;c.onControllerStart=function(){this.state=f.State.Running;this.handles.add(this.view.basemapTerrain.on("elevation-change",a=>this._handleElevationChangeEvent(a)));this._applyCorrection()};c.onControllerEnd=function(){this.handles.removeAll()};c.stepController=function(){};c._handleElevationChangeEvent=function(a){p.eyeWithinExtent(this.view,this.desiredCamera,a.extent,a.spatialReference)&&
this._applyCorrection()};c._applyCorrection=function(){this.view.state.updateCamera(a=>{a.copyViewFrom(this.desiredCamera);k.applySurfaceCollisionConstraint(this.view,a,k.Mode.EYE_AND_CENTER)||this.constraintEnabled||(this.state=f.State.Stopped)})};g._createClass(d,[{key:"desiredCamera",set:function(a){this._set("desiredCamera",a.clone())}},{key:"canStop",get:function(){return!0}},{key:"constraintEnabled",get:function(){return this.view.state.constraints.collision.enabled}}]);return d}(f.CameraController);
e.__decorate([h.property({constructOnly:!0})],b.SurfaceCollisionCorrectionController.prototype,"view",void 0);e.__decorate([h.property({constructOnly:!0})],b.SurfaceCollisionCorrectionController.prototype,"desiredCamera",null);b.SurfaceCollisionCorrectionController=e.__decorate([n.subclass("esri.views.3d.state.controllers.SurfaceCollisionCorrectionController")],b.SurfaceCollisionCorrectionController);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});