// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","../../geometry/support/Ellipsoid"],function(b,a,c){a={inches:a.convertUnit(1,"meters","inches"),feet:a.convertUnit(1,"meters","feet"),"us-feet":a.convertUnit(1,"meters","us-feet"),yards:a.convertUnit(1,"meters","yards"),miles:a.convertUnit(1,"meters","miles"),"nautical-miles":a.convertUnit(1,"meters","nautical-miles"),millimeters:a.convertUnit(1,"meters","millimeters"),centimeters:a.convertUnit(1,"meters","centimeters"),decimeters:a.convertUnit(1,"meters",
"decimeters"),meters:a.convertUnit(1,"meters","meters"),kilometers:a.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/a.lengthToDegrees(1,"meters",c.earth.radius)};b.meterIn=a;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});