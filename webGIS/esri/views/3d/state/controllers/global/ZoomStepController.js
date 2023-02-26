// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/time ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/set ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projectionEllipsoid ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/common ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils/ray ../../../support/geometryUtils/sphere ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/verticalOffsetUtils ../../../../animation/easing ../../../camera/constraintUtils/surfaceCollision".split(" "),
function(k,x,y,z,N,O,P,Q,R,A,c,h,B,C,D,q,E,r,F,G,v,H,I,J,K){k.ZoomStepController=function(w){function t(){var a=w.apply(this,arguments)||this;a.zoomLocation=h.create();a.tmpCamera=new v.Camera;a.tmpViewDir=h.create();a.tmpRayDir={origin:h.create(),direction:h.create()};a.targetOnSphere=h.create();a.tmpCenter=h.create();a.constraintOptions={selection:q.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:q.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new v.Camera,interactionDirection:null,
tiltMode:q.TiltMode.TUMBLE};a.sphere=C.create();return a}x._inheritsLoose(t,w);var l=t.prototype;l.initialize=function(){this.intersector=H.newIntersector(this.view.state.viewingMode)};l.zoomStep=function(a,e){if(this.active){var f=this.view.state,{interactionStartCamera:b}=this.constraintOptions;this.animation.finished?b.copyFrom(f.camera):this.animation.cameraAt(1,b);var d=b=!1;this.intersectionHelper.intersectScreen(e,this.zoomLocation,0===this.view.map.ground.opacity?L:{})&&(b=0<a?!0:!1,d=!0);
this.tmpCamera.copyFrom(f.camera);b?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:c.copy(this.zoomLocation,this.tmpCamera.center);this._updateCamera(this.tmpCamera,a,this.zoomLocation,e,d);this.begin(this.tmpCamera)}};l.animationSettings=function(){return{apex:null,duration:z.Milliseconds(600),
easing:J.outExpo}};l._updateCamera=function(a,e,f,b,d){var g=B.getReferenceEllipsoid(this.view.spatialReference);g=r.decideNavigationMode(a,b,d,g);var m;this.view.camera.position.hasZ&&(m=Math.abs(this.view.camera.position.z));c.normalize(n,a.eye);c.scale(n,n,-1);F.fromScreenAtEye(a,b,this.tmpRayDir);c.normalize(this.tmpRayDir.direction,this.tmpRayDir.direction);const u=Math.max(Math.min(12,1/Math.abs(c.dot(n,this.tmpRayDir.direction)))*m,200);if(g===r.NavigationMode.Horizontal){e=.6**e;this.sphere[3]=
c.length(f);c.subtract(this.tmpViewDir,a.center,a.eye);d=Math.min(c.length(this.tmpViewDir),u);g=d*e;1>=e&&4>g&&(g=4,e=g/d);if(1E-6>Math.abs(d-g))return;d=c.length(a.center);this.sphere[3]!==d&&(a.center=c.scale(p,a.center,(this.sphere[3]+e*(d-this.sphere[3]))/d));c.scale(this.tmpViewDir,this.tmpViewDir,-e);a.eye=c.add(p,a.center,this.tmpViewDir);D.applyAll(this.view,a,this.constraintOptions);1E-12<c.squaredDistance(f,a.center)&&G.intersectScreen(this.sphere,a,b,this.targetOnSphere)&&r.panToPosition(this.sphere,
a,f,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0)}else{g=.6**Math.abs(e);m=0<e?1:-1;c.subtract(this.tmpViewDir,f,a.eye);const M=c.length(this.tmpViewDir);b=(b=this.view._stage.renderView.getMinimalDepthForArea(null,b[0],b[1],this.view.state.camera,60))?Math.min(u,b):u;b=d?Math.min(b,M):b;c.scale(this.tmpRayDir.direction,this.tmpRayDir.direction,b);c.add(f,this.tmpRayDir.origin,this.tmpRayDir.direction);f=b*g;d=Math.max(4,1.01*a.nearFar[0]);0<e&&f<d&&(f=d,g=f/b);if(1E-6>Math.abs(b-
f))return;c.scale(this.tmpRayDir.direction,this.tmpRayDir.direction,m*(1-g));a.eye=c.add(p,a.eye,this.tmpRayDir.direction);a.center=c.add(p,a.center,this.tmpRayDir.direction)}K.applySurfaceCollisionConstraint(this.view,a)};return t}(E.PointToPointAnimationController);k.ZoomStepController=y.__decorate([A.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],k.ZoomStepController);const p=h.create(),n=h.create(),L={exclude:new Set([I.TERRAIN_ID])};Object.defineProperties(k,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});