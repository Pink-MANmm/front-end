// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/reactiveUtils ../../state/controllers/GamepadKeyboardController ../../../input/InputHandler".split(" "),function(h,l,m,d,k,e){e=function(c){function f(b){var a=c.call(this,!0)||this;a.view=b;a.watchHandles=new m;a.handle=a.registerIncoming("gamepad",n=>a._handleEventGamepad(n));a.handle.pause();return a}l._inheritsLoose(f,c);var g=f.prototype;g.onInstall=function(b){c.prototype.onInstall.call(this,
b);this.watchHandles.add([d.watch(()=>this.view.navigation.gamepad.enabled,a=>{a?this.handle.resume():(this.handle.pause(),this.cameraControllerGamepad&&(this.cameraControllerGamepad.finishController(),this.cameraControllerGamepad=null))},d.initial),d.watch(()=>this.view.navigation.gamepad.device,a=>{this.cameraControllerGamepad&&a&&this.cameraControllerGamepad.gamepadDevice!==a&&(this.cameraControllerGamepad.finishController(),this.cameraControllerGamepad=null)})])};g.onUninstall=function(){this.watchHandles.removeAll();
c.prototype.onUninstall.call(this)};g._handleEventGamepad=function(b){var a=this.view.navigation.gamepad.device;if(!a||b.data.device===a)if((a=this.cameraControllerGamepad&&this.cameraControllerGamepad.active)||k.GamepadKeyboardController.activatesFor(this.view,b.data))a||(a=new k.GamepadKeyboardController({view:this.view,gamepadDevice:b.data.device}),this.view.state.switchCameraController(a)&&(this.cameraControllerGamepad=a)),this.cameraControllerGamepad&&this.cameraControllerGamepad.active&&this.cameraControllerGamepad.gamepadDevice===
b.data.device&&this.cameraControllerGamepad.handleEventGamepad(b.data)};return f}(e.InputHandler);h.GamepadNavigation=e;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});