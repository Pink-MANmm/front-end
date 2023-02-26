// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../renderers/support/heatmapUtils ../Technique ../../../../../webgl/enums".split(" "),function(g,p,q,r,t,d,f){d=function(h){function e(){return h.apply(this,arguments)||this}p._inheritsLoose(e,h);e.getStorageSpec=function({field:b,valueExpression:c}){return{visualVariables:!1,attributes:b||c?[{field:b,valueExpression:c}]:null}};e._createRendererSchema=function(){return{type:"heatmap",
radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}};e.createOrUpdateRendererSchema=function(b,c){const {radius:u,minDensity:k,maxDensity:v,referenceScale:w,field:x,valueExpression:y,colorStops:l}=c;c=v-k;const z=x||y?1:0,m=l.map(({color:A,ratio:B})=>`${B}:${A.toString()}`).join();let n=!0,a;q.isSome(b)&&"heatmap"===b.type?(a=b,n=m!==b.gradientHash):a=this._createRendererSchema();a.radius=r.pt2px(u);a.minDensity=k;a.densityRange=
c;a.referenceScale=w;a.isFieldActive=z;n&&(a.gradient=t.generateGradient(l),a.gradientHash=m);return a};return e}(d.Technique);d.type="heatmap";d.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:f.DataType.SHORT},{location:1,name:"a_vertexOffset",count:2,type:f.DataType.SHORT},{location:4,name:"a_id",count:4,type:f.DataType.UNSIGNED_BYTE}]}};g.HeatmapTechnique=d;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});