// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler"],function(h,m,n,d){d=function(k){function e(f){var a=k.call(this,!0)||this;a.view=f;a.registerIncoming("drag",c=>a._handleDrag(c));a.registerIncoming("pointer-down",()=>a._stopMomentumNavigation());const g=a.view.mapViewNavigation;a.dragEventSeparator=new n.DragEventSeparator({start:(c,b)=>{g.pinch.begin(a.view,b.data);b.stopPropagation()},update:(c,b)=>{g.pinch.update(a.view,
b.data);b.stopPropagation()},end:(c,b)=>{g.pinch.end(a.view);b.stopPropagation()},condition:c=>2<=c});return a}m._inheritsLoose(e,k);var l=e.prototype;l._handleDrag=function(f){this.dragEventSeparator.handle(f)};l._stopMomentumNavigation=function(){this.view.mapViewNavigation.pinch.stopMomentumNavigation()};return e}(d.InputHandler);h.PinchRotateAndZoom=d;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});