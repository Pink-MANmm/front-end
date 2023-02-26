// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../3d/webgl-engine/lib/OrderIndependentTransparency ./BufferObject ./context-util ./enums ./FramebufferObject ./renderState ./VertexArrayObject ./VertexElementDescriptor".split(" "),function(P,R,S,T,t,U,V,W,X){var Q={exports:{}};(function(g){(function(r){r=r();void 0!==r&&(g.exports=r)})(function(){function r(a){if(null==z){z={};B={};for(var e in a)"number"==typeof a[e]&&(z[a[e]]=e,B[e]=a[e])}}function A(){if(null==z)throw"WebGLDebugUtils.init(ctx) not called";}function v(a){A();var e=
z[a];return void 0!==e?"gl."+e:"/*UNKNOWN WebGL ENUM*/ 0x"+a.toString(16)}function x(a,e,h,d){a=L[a];if(void 0!==a&&(a=a[e],void 0!==a&&a[h])){if("object"===typeof a[h]&&void 0!==a[h].enumBitwiseOr){e=a[h].enumBitwiseOr;h=0;a=[];for(var q=0;q<e.length;++q){var u=B[e[q]];0!==(d&u)&&(h|=u,a.push(v(u)))}return h===d?a.join(" | "):v(d)}return v(d)}return null===d?"null":void 0===d?"undefined":d.toString()}function C(a,e,h){a.__defineGetter__(h,function(){return e[h]});a.__defineSetter__(h,function(d){e[h]=
d})}function I(a,e,h,d){function q(p,f){return function(){h&&h(f,arguments);var D=p[f].apply(p,arguments),l=d.getError();0!=l&&(u[l]=!0,e(l,f,arguments));return D}}d=d||a;r(a);e=e||function(p,f,D){for(var l="",G=D.length,y=0;y<G;++y)l+=(0==y?"":", ")+x(f,G,y,D[y]);p="WebGL error "+v(p)+" in "+f+"("+l+")";window.console&&window.console.error?window.console.error(p):window.console&&window.console.log&&window.console.log(p)};var u={},E={},k;for(k in a)if("function"==typeof a[k])if("getExtension"!=k)E[k]=
q(a,k);else{var J=q(a,k);E[k]=function(){var p=J.apply(a,arguments);return I(p,e,h,d)}}else C(E,a,k);E.getError=function(){for(var p in u)if(u.hasOwnProperty(p)&&u[p])return u[p]=!1,p;return a.NO_ERROR};return E}function K(a){var e=a.getParameter(a.MAX_VERTEX_ATTRIBS),h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h);for(var d=0;d<e;++d)a.disableVertexAttribArray(d),a.vertexAttribPointer(d,4,a.FLOAT,!1,0,0),a.vertexAttrib1f(d,0);a.deleteBuffer(h);e=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);for(d=
0;d<e;++d)a.activeTexture(a.TEXTURE0+d),a.bindTexture(a.TEXTURE_CUBE_MAP,null),a.bindTexture(a.TEXTURE_2D,null);a.activeTexture(a.TEXTURE0);a.useProgram(null);a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);a.bindFramebuffer(a.FRAMEBUFFER,null);a.bindRenderbuffer(a.RENDERBUFFER,null);a.disable(a.BLEND);a.disable(a.CULL_FACE);a.disable(a.DEPTH_TEST);a.disable(a.DITHER);a.disable(a.SCISSOR_TEST);a.blendColor(0,0,0,0);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.ONE,a.ZERO);
a.clearColor(0,0,0,0);a.clearDepth(1);a.clearStencil(-1);a.colorMask(!0,!0,!0,!0);a.cullFace(a.BACK);a.depthFunc(a.LESS);a.depthMask(!0);a.depthRange(0,1);a.frontFace(a.CCW);a.hint(a.GENERATE_MIPMAP_HINT,a.DONT_CARE);a.lineWidth(1);a.pixelStorei(a.PACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.UNPACK_COLORSPACE_CONVERSION_WEBGL&&a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);
a.polygonOffset(0,0);a.sampleCoverage(1,!1);a.scissor(0,0,a.canvas.width,a.canvas.height);a.stencilFunc(a.ALWAYS,0,4294967295);a.stencilMask(4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP);a.viewport(0,0,a.canvas.width,a.canvas.height);for(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);a.getError(););}var L={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},
getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,
6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT",
"DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},
z=null,B=null;return{init:r,mightBeEnum:function(a){A();return void 0!==z[a]},glEnumToString:v,glFunctionArgToString:x,glFunctionArgsToString:function(a,e){for(var h="",d=e.length,q=0;q<d;++q)h+=(0==q?"":", ")+x(a,d,q,e[q]);return h},makeDebugContext:I,makeLostContextSimulatingCanvas:function(a){function e(c){return"function"==typeof c?c:function(b){c.handleEvent(b)}}function h(){for(var c=Object.keys(F),b=0;b<c.length;++b)delete F[c]}function d(){++H;l||y==H&&a.loseContext()}function q(c,b){var m=
c[b];return function(){d();if(!l)return m.apply(c,arguments)}}function u(c){return{statusMessage:c,preventDefault:function(){M=!0}}}function E(c){for(var b in c)"function"==typeof c[b]?f[b]=q(c,b):C(f,c,b);f.getError=function(){d();if(!l)for(var n;n=k.getError();)F[n]=!0;for(n in F)if(F[n])return delete F[n],n;return f.NO_ERROR};var m="createBuffer createFramebuffer createProgram createRenderbuffer createShader createTexture".split(" ");for(b=0;b<m.length;++b){var w=m[b];f[w]=function(n){return function(){d();
if(l)return null;var N=n.apply(c,arguments);N.__webglDebugContextLostId__=D;G.push(N);return N}}(c[w])}m="getActiveAttrib getActiveUniform getBufferParameter getContextAttributes getAttachedShaders getFramebufferAttachmentParameter getParameter getProgramParameter getProgramInfoLog getRenderbufferParameter getShaderParameter getShaderInfoLog getShaderSource getTexParameter getUniform getUniformLocation getVertexAttrib".split(" ");for(b=0;b<m.length;++b)w=m[b],f[w]=function(n){return function(){d();
return l?null:n.apply(c,arguments)}}(f[w]);m="isBuffer isEnabled isFramebuffer isProgram isRenderbuffer isShader isTexture".split(" ");for(b=0;b<m.length;++b)w=m[b],f[w]=function(n){return function(){d();return l?!1:n.apply(c,arguments)}}(f[w]);f.checkFramebufferStatus=function(n){return function(){d();return l?f.FRAMEBUFFER_UNSUPPORTED:n.apply(c,arguments)}}(f.checkFramebufferStatus);f.getAttribLocation=function(n){return function(){d();return l?-1:n.apply(c,arguments)}}(f.getAttribLocation);f.getVertexAttribOffset=
function(n){return function(){d();return l?0:n.apply(c,arguments)}}(f.getVertexAttribOffset);f.isContextLost=function(){return l};return f}var k,J=[],p=[];var f={};var D=1,l=!1,G=[],y=0,H=0,M=!1,O=0,F={};a.getContext=function(c){return function(){var b=c.apply(a,arguments);if(b instanceof WebGLRenderingContext){if(b!=k){if(k)throw"got different context";k=b;f=E(k)}return f}return b}}(a.getContext);(function(c){var b=c.addEventListener;c.addEventListener=function(m,w,n){switch(m){case "webglcontextlost":J.push(e(w));
break;case "webglcontextrestored":p.push(e(w));break;default:b.apply(c,arguments)}}})(a);a.loseContext=function(){if(!l){l=!0;y=0;for(++D;k.getError(););h();F[k.CONTEXT_LOST_WEBGL]=!0;var c=u("context lost"),b=J.slice();setTimeout(function(){for(var m=0;m<b.length;++m)b[m](c);0<=O&&setTimeout(function(){a.restoreContext()},O)},0)}};a.restoreContext=function(){l&&p.length&&setTimeout(function(){if(!M)throw"can not restore. webglcontestlost listener did not call event.preventDefault";for(var c=0;c<
G.length;++c){var b=G[c];b instanceof WebGLBuffer?k.deleteBuffer(b):b instanceof WebGLFramebuffer?k.deleteFramebuffer(b):b instanceof WebGLProgram?k.deleteProgram(b):b instanceof WebGLRenderbuffer?k.deleteRenderbuffer(b):b instanceof WebGLShader?k.deleteShader(b):b instanceof WebGLTexture&&k.deleteTexture(b)}K(k);l=!1;H=0;M=!1;c=p.slice();b=u("context restored");for(var m=0;m<c.length;++m)c[m](b)},0)};a.loseContextInNCalls=function(c){if(l)throw"You can not ask a lost contet to be lost";y=H+c};a.getNumCalls=
function(){return H};a.setRestoreTimeout=function(c){O=c};return a},resetToInitialState:K}})})(Q);P.testFloatBufferBlend=function(g){var r,A,v;if(!g.gl)return!1;if(g.type===T.ContextType.WEBGL1){var x,C;return!(null==(x=g.capabilities.textureFloat)||!x.textureFloat||null==(C=g.capabilities.colorBufferFloat)||!C.textureFloat)}if(!((null==(r=g.capabilities.textureFloat)?0:r.textureFloat)&&(null==(A=g.capabilities.colorBufferFloat)?0:A.textureFloat)&&(null==(v=g.capabilities.colorBufferFloat)?0:v.floatBlend)))return!1;
r=new U.FramebufferObject(g,{colorTarget:t.TargetType.TEXTURE,depthStencilTarget:t.DepthStencilTargetType.NONE},{target:t.TextureType.TEXTURE_2D,wrapMode:t.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:t.PixelFormat.RGBA,dataType:t.PixelType.FLOAT,internalFormat:t.SizedPixelFormat.RGBA32F,samplingMode:t.TextureSamplingMode.NEAREST,width:1,height:1});A=S.BufferObject.createVertex(g,t.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1]));v=new W.VertexArrayObject(g,new Map([["a_pos",0]]),{geometry:[new X.VertexElementDescriptor("a_pos",
2,t.DataType.UNSIGNED_SHORT,0,4)]},{geometry:A});x=g.programCache.acquire("\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor \x3d vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));g.useProgram(x);C=g.getBoundFramebufferObject();const {x:I,y:K,width:L,height:z}=g.getViewport();g.bindFramebuffer(r);g.setViewport(0,0,1,1);g.bindVAO(v);g.drawArrays(t.PrimitiveType.TRIANGLE_STRIP,
0,4);var B=V.makePipelineState({blending:R.blendingAlpha});g.setPipelineState(B);g.drawArrays(t.PrimitiveType.TRIANGLE_STRIP,0,4);Q.exports.init(g);B=g.gl.getError();g.setViewport(I,K,L,z);g.bindFramebuffer(C);x.dispose();v.dispose(!1);A.dispose();r.dispose();return 1282===B?(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1):!0};Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});