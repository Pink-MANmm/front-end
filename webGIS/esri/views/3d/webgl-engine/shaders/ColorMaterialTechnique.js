// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderLibrary/ShaderOutputOptions ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/basicInterfaces ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../../../../chunks/ColorMaterial.glsl ../../../webgl/renderState".split(" "),function(t,n,u,p,v,f,q,w,g,x,l,y,h){f=function(e){function c(){return e.apply(this,arguments)||
this}u._inheritsLoose(c,e);var k=c.prototype;k.initializeProgram=function(b){const d=c.shader.get().build(this.configuration);return new x.Program(b.rctx,d,w.Default3D)};k._createPipeline=function(b,d){const a=this.configuration,m=b===q.TransparencyPassType.NONE,r=b===q.TransparencyPassType.FrontFace;return h.makePipelineState({blending:a.output!==p.ShaderOutput.Color&&a.output!==p.ShaderOutput.Alpha||!a.transparent?null:m?g.blendingDefault:g.oitBlending(b),culling:h.cullingParams(a.cullFace),depthTest:{func:g.oitDepthTest(b)},
depthWrite:m||r?a.writeDepth&&h.defaultDepthWriteParams:null,colorWrite:h.defaultColorWriteParams,stencilWrite:a.hasOccludees?l.stencilWriteMaskOn:null,stencilTest:a.hasOccludees?d?l.stencilToolMaskBaseParams:l.stencilBaseAllZerosParams:null,polygonOffset:m||r?a.polygonOffset&&z:g.getOITPolygonOffset(a.enableOffset)})};k.initializePipeline=function(){this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0);return this._createPipeline(this.configuration.transparencyPassType,
!1)};k.getPipelineState=function(b,d){return d?this._occludeePipelineState:e.prototype.getPipelineState.call(this,b,d)};return c}(f.ShaderTechnique);f.shader=new v.ReloadableShaderModule(y.ColorMaterial,()=>new Promise((e,c)=>t(["./ColorMaterial.glsl"],e,c)));const z={factor:1,units:1};n.ColorMaterialTechnique=f;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});