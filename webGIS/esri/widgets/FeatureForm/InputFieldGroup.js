// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass".split(" "),function(q,d,b,r,g,l,n,x,y,z,f,t){const u=["visibility"];b=function(h){function m(a){a=h.call(this,a)||this;a._expressionTrackingHandles=
new Map;a.arcade=null;a.visibilityExpression=null;a.description=null;a.expressionTrackingProvider=null;a.feature=null;a.groupElement=null;a.label=null;a.spatialReference=null;return a}q._inheritsLoose(m,h);var k=m.prototype;k.initialize=function(){this.own([...u.map(a=>l.watch(()=>this.get(`${a}Function`),c=>{g.isSome(c)?this._registerExpressionWithTrackingProvider(a):this._unregisterExpressionWithTrackingProvider(a)},l.syncAndInitial)),l.watch(()=>[this.visible,this.inputFields],([a])=>{const {inputFields:c}=
this;a=a?void 0:!1;for(const e of c)e.required=a},{initial:!0,equals:(a,c)=>c[0]===a[0]&&c[1]===a[1]})])};k.destroy=function(){for(const a of this._expressionTrackingHandles.values())a.remove()};k._registerExpressionWithTrackingProvider=function(a){const {_expressionTrackingHandles:c,expressionTrackingProvider:e}=this;if(!g.isNone(e)&&!c.has(a)){var p=`evaluated${v(a)}Expression`,w=e.registerExpression(()=>this.notifyChange(p));c.set(a,w)}};k._unregisterExpressionWithTrackingProvider=function(a){const {_expressionTrackingHandles:c}=
this,e=c.get(a);e&&(e.remove(),c.delete(a))};k._dirtyEvaluatedVisibilityExpression=function(){const {groupElement:a}=this;g.isSome(a)&&a.visibilityExpression&&this.notifyChange("evaluatedVisibilityExpression")};q._createClass(m,[{key:"visibilityFunction",set:function(a){this._set("visibilityFunction",a);g.isSome(a)?this._registerExpressionWithTrackingProvider("visibility"):this._unregisterExpressionWithTrackingProvider("visibility")}},{key:"evaluatedVisibilityExpression",get:function(){const {visibilityFunction:a,
spatialReference:c}=this;if(!g.isNone(a)){var {arcade:e}=this,p=e.arcadeUtils.getViewInfo({spatialReference:g.unwrap(c)});return e.arcadeUtils.executeFunction(a,e.arcadeUtils.createExecContext(this.feature,p))}}},{key:"inputFields",get:function(){return this._get("inputFields")},set:function(a){this.handles.removeAll();a&&this.handles.add(a.map(c=>l.watch(()=>c.visible,()=>this._dirtyEvaluatedVisibilityExpression())));this._set("inputFields",a)}},{key:"state",get:function(){return g.isSome(this.groupElement)&&
this.groupElement.initialState||"expanded"},set:function(a){g.isNone(a)?this._clearOverride("state"):this._override("state",a)}},{key:"visible",get:function(){return!1!==this.evaluatedVisibilityExpression&&this.inputFields&&this.inputFields.some(a=>a.visible)}}]);return m}(r.HandleOwnerMixin(b));d.__decorate([f.property()],b.prototype,"arcade",void 0);d.__decorate([n.aliasOf("groupElement.visibilityExpression")],b.prototype,"visibilityExpression",void 0);d.__decorate([f.property()],b.prototype,"visibilityFunction",
null);d.__decorate([f.property()],b.prototype,"evaluatedVisibilityExpression",null);d.__decorate([n.aliasOf("groupElement.description")],b.prototype,"description",void 0);d.__decorate([f.property()],b.prototype,"expressionTrackingProvider",void 0);d.__decorate([f.property()],b.prototype,"feature",void 0);d.__decorate([f.property()],b.prototype,"groupElement",void 0);d.__decorate([f.property()],b.prototype,"inputFields",null);d.__decorate([n.aliasOf("groupElement.label")],b.prototype,"label",void 0);
d.__decorate([f.property()],b.prototype,"spatialReference",void 0);d.__decorate([f.property()],b.prototype,"state",null);d.__decorate([f.property()],b.prototype,"visible",null);b=d.__decorate([t.subclass("esri.widgets.FeatureForm.InputFieldGroup")],b);const v=h=>h.charAt(0).toUpperCase()+h.slice(1);return b});