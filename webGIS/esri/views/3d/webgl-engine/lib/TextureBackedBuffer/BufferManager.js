// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./ManagedTextureBackedBuffer"],function(d,e){let g=function(){function f(a,b=1){this.rctx=a;this.fieldCount=b;this.buffers=[]}var c=f.prototype;c.garbageCollect=function(){this.buffers=this.buffers.filter(a=>0===a.activeCount?(a.dispose(),!1):!0)};c.destroy=function(){this.buffers.forEach(a=>a.dispose());this.buffers=[]};c.getBuffer=function(a){for(const b of this.buffers)if(b.availableCount>=a)return b;if(a>e.MAX_INDEX_COUNT)return null;a=new e.ManagedTextureBackedBuffer(this.rctx,
this.fieldCount);this.buffers.push(a);return a};c.updateTextures=function(){for(const a of this.buffers)a.textureBuffer.updateTexture()};return f}();d.BufferManager=g;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});