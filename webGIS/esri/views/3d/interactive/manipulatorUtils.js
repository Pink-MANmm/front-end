// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/mat4 ../../../chunks/vec3 ../../../chunks/vec4f64 ../../../geometry/support/vectorStacks ../../../layers/graphics/hydratedFeatures ./Manipulator3D ../layers/graphics/graphicUtils ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/GeometryUtil ../webgl-engine/lib/Material ../webgl-engine/materials/ColorMaterial ../webgl-engine/materials/ShadedColorMaterial".split(" "),function(e,h,u,g,k,f,v,w,x,l,y,n,p,z){function q(a,c=n.RenderOccludedFlag.OccludeAndTransparent,
b=!0){const d=k.fromValues(a[0],a[1],a[2],3<a.length?a[3]:1);a=1>a[3];return b?new z.ShadedColorMaterial({color:d,transparent:a,writeDepth:!0,cullFace:l.CullFaceOptions.Back,renderOccluded:c}):new p.ColorMaterial({color:d,transparent:a,writeDepth:!0,cullFace:l.CullFaceOptions.Back,renderOccluded:c})}function r(a,c,b,d){a=g.normalize(f.sv3d.get(),a);c=g.normalize(f.sv3d.get(),c);const m=g.cross(f.sv3d.get(),a,c);d[0]=a[0];d[1]=a[1];d[2]=a[2];d[3]=0;d[4]=c[0];d[5]=c[1];d[6]=c[2];d[7]=0;d[8]=m[0];d[9]=
m[1];d[10]=m[2];d[11]=0;d[12]=b[0];d[13]=b[1];d[14]=b[2];d[15]=1;return d}function t(a,c){const b=a.getViewForGraphic(c);return h.isSome(b)&&"computeAttachmentOrigin"in b?b.computeAttachmentOrigin(c,a.spatialReference):null}e.calculateInputRotationTransform=function(a,c,b,d){a=g.subtract(f.sv3d.get(),a,b);d=g.cross(f.sv3d.get(),d,a);b=r(a,d,b,f.sm4d.get());u.invert(b,b);c=g.transformMat4(f.sv3d.get(),c,b);return Math.atan2(c[1],c[0])};e.calculateTranslateRotateFromBases=r;e.createManipulatorMaterial=
q;e.createManipulatorOutlineMaterial=function(a,c=n.RenderOccludedFlag.OccludeAndTransparent){a=k.fromValues(a[0],a[1],a[2],4===a.length?a[3]:1);return new p.ColorMaterial({color:a,transparent:!0,writeDepth:!0,cullFace:l.CullFaceOptions.Front,renderOccluded:c})};e.createSphereManipulator=function(a,c,b){return new w.Manipulator3D({view:a,renderObjects:[{geometry:y.createSphereGeometry(1,32,32),material:q(k.fromValues(c[0],c[1],c[2],null!=b?b:1))}]})};e.getGraphicAttachmentOrigin=t;e.placeAtGraphic=
function(a,c,b){a=t(a,b);h.isSome(a)?c.elevationAlignedLocation=a:(b=b.geometry,h.isNone(b)||(b="mesh"===b.type?b.anchor:x.computeCentroid(b),h.isNone(b)||(c.location=v.hydrateGeometry(b))))};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});