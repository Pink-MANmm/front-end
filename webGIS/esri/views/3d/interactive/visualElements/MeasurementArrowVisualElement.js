// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/support/vectorStacks ./Object3DVisualElement ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/MeasurementArrowMaterial".split(" "),function(v,w,B,h,k,C,D,E,x,q,
l,r,F,G,H){r=function(y){function m(a){var b=y.call(this,a)||this;b._parameters=I;b._handles=null;b._origin=x.create();b._originTransform=D.create();b._arrowCenter=x.create();b._renderOccluded=G.RenderOccludedFlag.OccludeAndTransparent;b._geometry=null;b._stripeLength=1;b._stripesEnabled=!0;b._opacity=1;b.applyProps(a);return b}w._inheritsLoose(m,y);var d=m.prototype;d.createExternalResources=function(){const {arrowStripeEvenColor:a,arrowStripeOddColor:b,arrowOutlineColor:e}=this._parameters;this._arrowMaterial=
new H.MeasurementArrowMaterial({outlineColor:e,stripeEvenColor:this._stripesEnabled?a:b,stripeOddColor:b,renderOccluded:this.renderOccluded,polygonOffset:!0});this._handles=new B;this._handles.add(C.watch(()=>this.view.state.camera,()=>{this._viewChanged()}))};d.destroyExternalResources=function(){this._arrowMaterial=null;this._handles.destroy();this._handles=null};d.forEachExternalMaterial=function(a){a(this._arrowMaterial)};d.createGeometries=function(a){if(!(k.isNone(this._geometry)||k.isNone(this._geometry.startRenderSpace)||
k.isNone(this._geometry.endRenderSpace))){var b=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);a.addGeometry(b,this._arrowMaterial,this._originTransform);this._viewChanged()}};d._createArrowGeometry=function(a,b,e,c){const n=this.view.renderCoordsHelper,p=[],z=[],u=(t,f)=>{const g=l.sv3d.get();E.subtract(g,t,e);p.push(g);z.push(f)};if("euclidean"===c.type)c.eval(.5,this._arrowCenter),c=l.sv3d.get(),n.worldUpAtPosition(this._arrowCenter,
c),u(a,c),u(b,c);else for(c.eval(.5,this._arrowCenter),a=this._parameters.arrowSubdivisions+1&-2,b=0;b<a;++b){const t=b/(a-1),f=l.sv3d.get(),g=l.sv3d.get();c.eval(t,f);n.worldUpAtPosition(f,g);u(f,g)}return F.createPolylineGeometry(p,z)};d._geometryChanged=function(){this.recreateGeometry()};d._viewChanged=function(){if(this.view.ready&&this.attached&&k.isSome(this._geometry)){const a=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*
a})}};d._updateArrowOpacity=function(){var a=this.opacity;const {arrowStripeEvenColor:b,arrowStripeOddColor:e,arrowOutlineColor:c}=this._parameters,n=h.applyOpacity(A,this._stripesEnabled?b:e,a),p=h.applyOpacity(J,c,a);a=h.applyOpacity(K,e,a);this._arrowMaterial.setParameters({stripeEvenColor:n,outlineColor:p,stripeOddColor:a})};w._createClass(m,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._arrowMaterial&&
this._arrowMaterial.setParameters({renderOccluded:a}))}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this._geometryChanged()}},{key:"stripeLength",get:function(){return this._stripeLength},set:function(a){this._stripeLength=a;this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}},{key:"stripesEnabled",get:function(){return this._stripesEnabled},set:function(a){this._stripesEnabled=a;if(this.attached){a=this.opacity;const {arrowStripeEvenColor:b,
arrowStripeOddColor:e}=this._parameters;a=h.applyOpacity(A,this._stripesEnabled?b:e,a);this._arrowMaterial.setParameters({stripeEvenColor:a})}}},{key:"opacity",get:function(){return this._opacity},set:function(a){a!==this._opacity&&(this._opacity=a,this._updateArrowOpacity())}}]);return m}(r.Object3DVisualElement);const I={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128},A=q.create(),
J=q.create(),K=q.create();v.MeasurementArrowVisualElement=r;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});