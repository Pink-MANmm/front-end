// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/has ./keys ./gamepad/GamepadSource ../support/screenUtils".split(" "),function(k,n,e,p,q,r){const l=e("trident"),m=e("edge"),t=e("chrome"),u=e("ff"),v=e("safari");e=function(){function f(a,b){this.input=b;this._active={};this._activePointerCaptures=new Set;this._keyDownState=new Set;this._eventId=1;this._browserTouchPanningEnabled=!1;this._element=a;a.getAttribute("tabindex")||a.setAttribute("tabindex","0");this._eventHandlers={"key-down":this._handleKey,
"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost};this._updateTouchAction();this._element.addEventListener("keydown",this._preventAltKeyDefault);this._gamepadSource=new q.GamepadSource(a,this.input);
this._gamepadSource.onEvent=c=>this._callback("gamepad",c)}var d=f.prototype;d.destroy=function(){this.activeEvents=this._callback=null;this._activePointerCaptures.forEach(a=>{this._releasePointerCaptureSafe(a)});this._gamepadSource&&(this._gamepadSource.destroy(),this._gamepadSource=null);this._activePointerCaptures=null;this._removeTouchAction();this._element.removeEventListener("keydown",this._preventAltKeyDefault)};d.setPointerCapture=function(a,b){b?(this._element.setPointerCapture(a.pointerId),
this._activePointerCaptures.add(a.pointerId)):(this._releasePointerCaptureSafe(a.pointerId),this._activePointerCaptures.delete(a.pointerId))};d._updateTouchAction=function(){this._element.classList.remove(this._browserTouchPanningEnabled?"esri-view-surface--touch-none":"esri-view-surface--touch-pan");this._element.classList.add(this._browserTouchPanningEnabled?"esri-view-surface--touch-pan":"esri-view-surface--touch-none")};d._updateTouchEventHandling=function(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",
this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};d._removeTouchAction=function(){this._element.classList.remove("esri-view-surface--touch-none");this._element.classList.remove("esri-view-surface--touch-pan");this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};d._releasePointerCaptureSafe=function(a){try{this._element.hasPointerCapture&&!this._element.hasPointerCapture(a)||this._element.releasePointerCapture(a)}catch(b){}};
d._updateNormalizedPointerLikeEvent=function(a,b){a=r.createScreenPointFromNativeEvent(this._element,a);f.test.disableSubpixelCoordinates&&(a.x=Math.round(a.x),a.y=Math.round(a.y));b.x=a.x;b.y=a.y;return b};d._handleKey=function(a,b){const c=p.eventKey(b);c&&"key-up"===a&&this._keyDownState.delete(c);b={native:b,key:c,repeat:c&&this._keyDownState.has(c)};c&&"key-down"===a&&this._keyDownState.add(b.key);this._callback(a,b)};d._handlePointer=function(a,b){b=this._updateNormalizedPointerLikeEvent(b,
{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});this._callback(a,b)};d._handlePointerPreventDefault=function(a,b){const c=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});b.preventDefault();this._callback(a,c)};d._handleMouseWheel=function(a,b){let c=b.deltaY;switch(b.deltaMode){case 0:if(l||m)c=c/document.documentElement.clientHeight*600;break;case 1:c*=
30;break;case 2:c*=900}l||m?c*=.7:t||v?c*=.6:u&&(c*=1.375);const g=Math.abs(c);100<g&&(c=c/g*200/(1+Math.exp(-.02*(g-100))));b=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,deltaY:c});this._callback(a,b)};d._handlePointerCaptureLost=function(a,b){this._activePointerCaptures.delete(b.pointerId);this._handleDefault(a,b)};d._handleDefault=function(a,b){const c={native:b};b.preventDefault();this._callback(a,c)};d._preventAltKeyDefault=function(a){"Alt"===a.key&&a.preventDefault()};d._preventMultiTouchPanning=
function(a){1<a.touches.length&&a.preventDefault()};n._createClass(f,[{key:"browserTouchPanningEnabled",get:function(){return this._browserTouchPanningEnabled},set:function(a){this._browserTouchPanningEnabled=a;this._updateTouchAction();this._updateTouchEventHandling()}},{key:"onEventReceived",set:function(a){this._callback=a}},{key:"activeEvents",set:function(a){for(const b in this._active)a&&a.has(b)||(this._element.removeEventListener(h[b],this._active[b]),delete this._active[b]);a&&a.forEach(b=>
{if(!this._active[b]&&h[b]){const c=(this._eventHandlers[b]||this._handleDefault).bind(this,b);this._element.addEventListener(h[b],c);this._active[b]=c}});this._gamepadSource.hasEventListeners=a&&a.has("gamepad")}}]);return f}();e.test={disableSubpixelCoordinates:!1};const h={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture",
"context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};k.BrowserEventSource=e;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});