// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3"],function(b,f){b.InteractionType=void 0;(function(a){a[a.NONE=0]="NONE";a[a.ZOOM=1]="ZOOM";a[a.TUMBLE=2]="TUMBLE";a[a.LOOK_AROUND=3]="LOOK_AROUND";a[a.PAN=4]="PAN";a[a.ASCEND=5]="ASCEND"})(b.InteractionType||(b.InteractionType={}));b.ConstraintTypes=void 0;(function(a){a[a.NONE=0]="NONE";a[a.TILT=1]="TILT";a[a.ALTITUDE=2]="ALTITUDE";a[a.DISTANCE=4]="DISTANCE";a[a.COLLISION=8]="COLLISION";a[a.ALL=15]="ALL";a[a.ALL_EXCEPT_COLLISION=7]="ALL_EXCEPT_COLLISION"})(b.ConstraintTypes||
(b.ConstraintTypes={}));b.TiltMode=void 0;(function(a){a[a.TUMBLE=0]="TUMBLE";a[a.LOOK_AROUND=1]="LOOK_AROUND"})(b.TiltMode||(b.TiltMode={}));const k={selection:b.ConstraintTypes.NONE,interactionType:b.InteractionType.NONE,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:b.TiltMode.TUMBLE};b.adjustRangeForInteraction=function(a,d,g,e,h,c){0!==a&&(g?(c.min=Math.min(c.min,d),c.max=Math.max(c.max,d)):null!=e?(c.min-=Math.max(0,(d-c.min)*(1-e)),c.max+=Math.max(0,(d-c.max)*
(1-e))):h&&(c.min-=Math.max(0,d-c.min-h),c.max+=Math.max(0,d-c.max-h)))};b.defaultApplyOptions=k;b.hasConstraintType=function(a,d){return 0!==(a&d)};b.interactionDirectionTowardsConstraintMinimization=function(a,d,g,e){d=d||a.viewForward;f.copy(e,d);f.scale(e,e,Math.sign(f.dot(d,g)));return e};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});