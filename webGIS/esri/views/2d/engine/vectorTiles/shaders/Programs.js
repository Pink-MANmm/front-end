// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/programUtils"],function(d,b,c){d.background={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("background/background.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("background/background.frag")})};d.circle={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("circle/circle.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("circle/circle.frag")})};
d.fill={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("fill/fill.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("fill/fill.frag")})};d.icon={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id,SDF:a.sdf})+b.resolveIncludes("icon/icon.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,SDF:a.sdf})+b.resolveIncludes("icon/icon.frag")})};d.line={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern,
SDF:a.sdf})+b.resolveIncludes("line/line.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern,SDF:a.sdf})+b.resolveIncludes("line/line.frag")})};d.outline={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("outline/outline.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("outline/outline.frag")})};d.text={shaders:a=>({vertexShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("text/text.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id})+
b.resolveIncludes("text/text.frag")})};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});