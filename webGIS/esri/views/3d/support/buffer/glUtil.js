// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../webgl/enums","../../../webgl/VertexElementDescriptor"],function(e,a,g){const h={u8:a.DataType.UNSIGNED_BYTE,u16:a.DataType.UNSIGNED_SHORT,u32:a.DataType.UNSIGNED_INT,i8:a.DataType.BYTE,i16:a.DataType.SHORT,i32:a.DataType.INT,f32:a.DataType.FLOAT};e.glLayout=function(d,k=0){const l=d.stride;return d.fieldNames.filter(b=>{b=d.fields.get(b).optional;return!(b&&b.glPadding)}).map(b=>{const c=d.fields.get(b),m=c.constructor.ElementCount;var f=h[c.constructor.ElementType];if(!f)throw Error("BufferType not supported in WebGL");
return new g.VertexElementDescriptor(b,m,f,c.offset,l,!(!c.optional||!c.optional.glNormalized),k)})};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});