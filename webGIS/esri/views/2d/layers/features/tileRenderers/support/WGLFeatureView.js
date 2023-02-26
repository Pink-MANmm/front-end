// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/promiseUtils ../../../../engine/brushes ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(m,n,k,p,c,q,l){const r=k("featurelayer-order-by-server-enabled");k=function(g){function h(a,b,d,f){a=g.call(this,a)||this;a._pointToCallbacks=[];a._layer=d;a._layerView=b;a._onUpdate=f;return a}n._inheritsLoose(h,g);var e=h.prototype;e.renderChildren=function(a){this.attributeView.update();
this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);g.prototype.renderChildren.call(this,a)};e.hasEmptyAttributeView=function(){return this.attributeView.isEmpty()};e.isUpdating=function(){return this.attributeView.isUpdating()};e.hitTest=function(a){const b=p.createResolver();this._pointToCallbacks.push({point:a,resolver:b});this.requestRender();return b.promise};e.onTileData=function(a,b){const d=r&&"orderBy"in this._layer&&this._layer.orderBy,f=(null==d?void 0:d.length)&&!d[0].valueExpression&&
d[0].field;a.patch(b,d&&this._layerView.orderByFields===f);this.contains(a)||this.addChild(a);this.requestRender()};e.onTileError=function(a){this.contains(a)||this.addChild(a)};e.updateTransitionProperties=function(a,b){g.prototype.updateTransitionProperties.call(this,a,b);this._layerView.featureEffectView.transitionStep(a,b);this._layerView.featureEffectView.transitioning&&this.requestRender()};e.doRender=function(a){const {minScale:b,maxScale:d}=this._layer,f=a.state.scale;f<=(b||Infinity)&&f>=
d&&g.prototype.doRender.call(this,a)};e.onAttributeStoreUpdate=function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();this._onUpdate()};e.setStencilReference=function(a){const {rendererSchema:b}=a.rendererInfo;if("dot-density"===b.type&&1<b.dotSize)for(const d of this.children)d.stencilRef=d.key.level+1;else g.prototype.setStencilReference.call(this,a)};e.prepareRenderPasses=function(a){const b=a.registerRenderPass({name:"label",brushes:[c.brushes.label],target:()=>this.hasLabels?
this.children:null,drawPhase:l.WGLDrawPhase.LABEL|l.WGLDrawPhase.LABEL_ALPHA}),d=a.registerRenderPass({name:"geometry",brushes:[c.brushes.fill,c.brushes.dotDensity,c.brushes.line,c.brushes.marker,c.brushes.heatmap,c.brushes.pieChart,c.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,
enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),f=a.registerRenderPass({name:"highlight",brushes:[c.brushes.fill,c.brushes.dotDensity,c.brushes.line,c.brushes.marker,c.brushes.pieChart,c.brushes.text],target:()=>this.children,drawPhase:l.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:a.effects.highlight,enable:()=>
!!this._layerView.hasHighlight()}]});return[...g.prototype.prepareRenderPasses.call(this,a),d,f,b]};n._createClass(h,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some(b=>b.labelingInfo&&b.labelingInfo.length&&b.labelsVisible);var a=this._layer.featureReduction;a=a&&"labelingInfo"in a&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&
this._layer.labelsVisible||!!a}}]);return h}(q.FeatureContainer);m.WGLFeatureView=k;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});