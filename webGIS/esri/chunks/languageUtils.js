// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../arcade/FunctionWrapper ../arcade/ImmutableArray ../arcade/ImmutablePathArray ../arcade/ImmutablePointArray ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ./datetime ../core/maybe ../core/number ../geometry/support/coordsUtils ../intl/locale ../arcade/featureset/support/shared".split(" "),function(f,ca,Ta,x,Ua,H,da,A,ea,I,fa,ha,J,Va,ia,Wa,Xa,S){function B(a,b,c){return""===b||null===
b||void 0===b||b===c||b===c?a:a=a.split(b).join(c)}function K(a){return a instanceof L||a instanceof Ta||a instanceof M}function E(a){return m(a)||p(a)||n(a)||q(a)||null===a||a===t||"number"===typeof a?!0:!1}function ja(a,b){return void 0===a?b:a}function m(a){return"string"===typeof a||a instanceof String}function q(a){return"boolean"===typeof a}function p(a){return"number"===typeof a}function ka(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a}function u(a){return a instanceof Array}
function la(a){return"esri.arcade.Feature"===(null==a?void 0:a.arcadeDeclaredClass)?!0:!1}function ma(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===a.declaredRootClass)}function na(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureSetCollection"===a.declaredRootClass)}function y(a){return a instanceof x}function n(a){return a instanceof Date}function oa(a,b,c){if(a.length<b||a.length>c)throw Error("Function called with wrong number of Parameters");}
function pa(a){return 0>a?-Math.round(-a):Math.round(a)}function qa(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){const c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"===b?c:c&3|8).toString(16)})}function N(a,b){if(!1===isNaN(a)){if(void 0===b||null===b||""===b)return a.toString();b=B(b,"\u2030","");b=B(b,"\u00a4","");return ia.format(a,{pattern:b})}return a.toString()}function F(a,b){a=J.DateTime.fromJSDate(a);return void 0===b||null===b||""===
b?a.toISO({suppressMilliseconds:!0}):a.toFormat(T(b),{locale:Xa.getLocale(),numberingSystem:"latn"})}function T(a){a=a.replace(/LTS|LT|LL?L?L?|l{1,4}/g,"[$\x26]");let b="";const c=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const d of a.match(c))switch(d){case "D":b+="d";break;case "DD":b+="dd";break;case "DDD":b+="o";break;case "d":b+="c";
break;case "ddd":b+="ccc";break;case "dddd":b+="cccc";break;case "M":b+="L";break;case "MM":b+="LL";break;case "MMM":b+="LLL";break;case "MMMM":b+="LLLL";break;case "YY":b+="yy";break;case "Y":case "YYYY":b+="yyyy";break;case "Q":b+="q";break;case "Z":b+="ZZ";break;case "ZZ":b+="ZZZ";break;case "S":b+="'S'";break;case "SS":b+="'SS'";break;case "SSS":b+="u";break;case "A":case "a":b+="a";break;case "m":case "mm":case "h":case "hh":case "H":case "HH":case "s":case "ss":case "X":case "x":b+=d;break;
default:b=2<=d.length&&"["===d.slice(0,1)&&"]"===d.slice(-1)?b+`'${d.slice(1,-1)}'`:b+`'${d}'`}return b}function h(a,b,c){switch(c){case "\x3e":return a>b;case "\x3c":return a<b;case "\x3e\x3d":return a>=b;case "\x3c\x3d":return a<=b}return!1}function ra(a,b,c){if(null===a){if(null===b||b===t)return h(null,null,c);if(p(b))return h(0,b,c);if(m(b)||q(b))return h(0,l(b),c);if(n(b))return h(0,b.getTime(),c)}if(a===t){if(null===b||b===t)return h(null,null,c);if(p(b))return h(0,b,c);if(m(b)||q(b))return h(0,
l(b),c);if(n(b))return h(0,b.getTime(),c)}else if(p(a)){if(p(b))return h(a,b,c);if(q(b))return h(a,l(b),c);if(null===b||b===t)return h(a,0,c);if(m(b))return h(a,l(b),c);if(n(b))return h(a,b.getTime(),c)}else if(m(a)){if(m(b))return h(w(a),w(b),c);if(n(b))return h(l(a),b.getTime(),c);if(p(b))return h(l(a),b,c);if(null===b||b===t)return h(l(a),0,c);if(q(b))return h(l(a),l(b),c)}else if(n(a)){if(n(b))return h(a,b,c);if(null===b||b===t)return h(a.getTime(),0,c);if(p(b))return h(a.getTime(),b,c);if(q(b)||
m(b))return h(a.getTime(),l(b),c)}else if(q(a)){if(q(b))return h(a,b,c);if(p(b))return h(l(a),l(b),c);if(n(b))return h(l(a),b.getTime(),c);if(null===b||b===t)return h(l(a),0,c);if(m(b))return h(l(a),l(b),c)}return!U(a,b)||"\x3c\x3d"!==c&&"\x3e\x3d"!==c?!1:!0}function U(a,b){if(a===b||null===a&&b===t||null===b&&a===t)return!0;if(n(a)&&n(b))return a.getTime()===b.getTime();if(a instanceof Ua||a instanceof H)return a.equalityTest(b);if(a instanceof I&&b instanceof I){const c=a.cache._arcadeCacheId,d=
b.cache._arcadeCacheId;if(void 0!==c&&null!==c)return c===d}return void 0!==a&&void 0!==b&&null!==a&&null!==b&&"object"===typeof a&&"object"===typeof b&&(a._arcadeCacheId===b._arcadeCacheId&&void 0!==a._arcadeCacheId&&null!==a._arcadeCacheId||a._underlyingGraphic===b._underlyingGraphic&&void 0!==a._underlyingGraphic&&null!==a._underlyingGraphic)?!0:!1}function w(a,b){if(m(a))return a;if(null===a)return"";if(p(a))return N(a,b);if(q(a))return a.toString();if(n(a))return F(a,b);if(a instanceof A)return JSON.stringify(a.toJSON());
if(u(a)){b=[];for(var c=0;c<a.length;c++)b[c]=O(a[c]);return"["+b.join(",")+"]"}if(a instanceof x){b=[];for(c=0;c<a.length();c++)b[c]=O(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():K(a)?"object, Function":""}function sa(a){const b=[];if(!1===u(a))return null;if(a instanceof x){for(var c=0;c<a.length();c++)b[c]=l(a.get(c));return b}for(c=0;c<a.length;c++)b[c]=l(a[c]);return b}function V(a,b){if(m(a))return a;if(null===a)return"";if(p(a))return N(a,
b);if(q(a))return a.toString();if(n(a))return F(a,b);if(a instanceof A)return a instanceof da?'{"xmin":'+a.xmin.toString()+',"ymin":'+a.ymin.toString()+","+(a.hasZ?'"zmin":'+a.zmin.toString()+",":"")+(a.hasM?'"mmin":'+a.mmin.toString()+",":"")+'"xmax":'+a.xmax.toString()+',"ymax":'+a.ymax.toString()+","+(a.hasZ?'"zmax":'+a.zmax.toString()+",":"")+(a.hasM?'"mmax":'+a.mmax.toString()+",":"")+'"spatialReference":'+P(a.spatialReference)+"}":P(a.toJSON(),(d,e)=>d.key===e.key?0:"spatialReference"===d.key?
1:"spatialReference"===e.key||d.key<e.key?-1:d.key>e.key?1:0);if(u(a)){b=[];for(var c=0;c<a.length;c++)b[c]=O(a[c]);return"["+b.join(",")+"]"}if(a instanceof x){b=[];for(c=0;c<a.length();c++)b[c]=O(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():K(a)?"object, Function":""}function O(a){return null===a?"null":q(a)||p(a)||m(a)?JSON.stringify(a):a instanceof A||a instanceof x||a instanceof Array?V(a):a instanceof Date?JSON.stringify(F(a,
"")):null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():"null"}function l(a,b){return p(a)?a:null===a||""===a?0:n(a)?NaN:q(a)?a?1:0:u(a)||""===a||void 0===a?NaN:void 0!==b&&m(a)?(b=B(b,"\u2030",""),b=B(b,"\u00a4",""),ia.parse(a,{pattern:b})):a===t?0:Number(a)}function ta(a){return n(a)?a:m(a)&&(a=ua(a))?a.toJSDate():null}function va(a){return n(a)?J.DateTime.fromJSDate(a):m(a)?ua(a):null}function ua(a){const b=/ (\d\d)/;let c=J.DateTime.fromISO(a);return c.isValid||b.test(a)&&(a=
a.replace(b,"T$1"),c=J.DateTime.fromISO(a),c.isValid)?c:null}function wa(a){return q(a)?a:m(a)?(a=a.toLowerCase(),"true"===a?!0:!1):p(a)?0===a||isNaN(a)?!1:!0:!1}function xa(a,b){if(Va.isNone(a))return null;if(null===a.spatialReference||void 0===a.spatialReference)a.spatialReference=b;return a}function ya(a){if(null===a)return null;if(a instanceof I)return"NaN"===a.x||null===a.x||isNaN(a.x)?null:a;if(a instanceof fa){if(0===a.rings.length)return null;for(const b of a.rings)if(0<b.length)return a;
return null}if(a instanceof ha){if(0===a.paths.length)return null;for(const b of a.paths)if(0<b.length)return a;return null}return a instanceof ea?0===a.points.length?null:a:a instanceof da?"NaN"===a.xmin||null===a.xmin||isNaN(a.xmin)?null:a:null}function W(a,b){if(!a||!a.domain)return b;let c=null;if("string"===a.field.type||"esriFieldTypeString"===a.field.type)b=w(b);else{if(null===b||void 0===b)return null;if(""===b)return b;b=l(b)}for(let d=0;d<a.domain.codedValues.length;d++){const e=a.domain.codedValues[d];
e.code===b&&(c=e)}return null===c?b:c.name}function X(a,b){if(!a||!a.domain)return b;let c=null;b=w(b);for(let d=0;d<a.domain.codedValues.length;d++){const e=a.domain.codedValues[d];e.name===b&&(c=e)}return null===c?b:c.code}function G(a,b,c=null,d=null){if(!b||!b.fields)return null;let e=null;for(let v=0;v<b.fields.length;v++){const r=b.fields[v];r.name.toLowerCase()===a.toString().toLowerCase()&&(e=r)}if(null===e)throw Error("Field not found");let g,k;null===d&&c&&b.typeIdField&&(d=c.hasField(b.typeIdField)?
c.field(b.typeIdField):null);null!==d&&void 0!==d&&b.types.some(function(v){return v.id===d?((g=v.domains&&v.domains[e.name])&&"inherited"===g.type&&(g=za(e.name,b),k=!0),!0):!1});k||g||(g=za(a,b));return{field:e,domain:g}}function za(a,b){let c;b.fields.some(function(d){d.name.toLowerCase()===a.toLowerCase()&&(c=d.domain);return!!c});return c}function P(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});const c="boolean"===typeof b.cycles?b.cycles:!1,d=b.cmp&&function(g){return function(k){return function(v,
r){return g({key:v,value:k[v]},{key:r,value:k[r]})}}}(b.cmp),e=[];return function v(k){k&&k.toJSON&&"function"===typeof k.toJSON&&(k=k.toJSON());if(void 0!==k){if("number"===typeof k)return isFinite(k)?""+k:"null";if("object"!==typeof k)return JSON.stringify(k);var r;if(Array.isArray(k)){var z="[";for(r=0;r<k.length;r++)r&&(z+=","),z+=v(k[r])||"null";return z+"]"}if(null===k)return"null";if(e.includes(k)){if(c)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON");
}var Ya=e.push(k)-1,Aa=Object.keys(k).sort(d&&d(k));z="";for(r=0;r<Aa.length;r++){const Ba=Aa[r],Ca=v(k[Ba]);Ca&&(z&&(z+=","),z+=JSON.stringify(Ba)+":"+Ca)}e.splice(Ya,1);return"{"+z+"}"}}(a)}function Da(a){if(null===a)return null;const b=[];for(const c of a)c&&c.arcadeDeclaredClass&&"esri.arcade.Feature"===c.arcadeDeclaredClass?b.push(c.geometry()):b.push(c);return b}function C(a,b){if(b instanceof I)a.push(b.hasZ?b.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);else throw Error("Invalid Argument");
}function Ea(a,b){if(u(a)||y(a)){let c=!1,d=!1,e=[];if(u(a)){for(const g of a)C(e,g);0<e.length&&(b=a[0].spatialReference,c=a[0].hasZ,d=a[0].hasM)}else if(a instanceof H)e=a._elements,0<e.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(y(a)){for(const g of a.toArray())C(e,g);0<e.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}else throw Error("Invalid Argument");if(0===e.length)return null;!1===Wa.isClockwise(e,d,c)&&(e=e.slice(0).reverse());return new fa({rings:[e],
spatialReference:b,hasZ:c,hasM:d})}return a}function Fa(a,b){if(u(a)||y(a)){let c=!1,d=!1,e=[];if(u(a)){for(const g of a)C(e,g);0<e.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,d=!0===a[0].hasM)}else if(a instanceof H)e=a._elements,0<e.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(y(a)){for(const g of a.toArray())C(e,g);0<e.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}return 0===e.length?null:new ha({paths:[e],spatialReference:b,hasZ:c,hasM:d})}return a}
function Ga(a,b){if(u(a)||y(a)){let c=!1,d=!1,e=[];if(u(a)){for(const g of a)C(e,g);0<e.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,d=!0===a[0].hasM)}else if(a instanceof H)e=a._elements,0<e.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(y(a)){for(const g of a.toArray())C(e,g);0<e.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}return 0===e.length?null:new ea({points:e,spatialReference:b,hasZ:c,hasM:d})}return a}function Ha(a,b=!1){const c=
[];if(null===a)return c;if(!0===u(a)){for(var d=0;d<a.length;d++){var e=w(a[d]);""===e&&!0!==b||c.push(e)}return c}if(a instanceof x){for(d=0;d<a.length();d++)e=w(a.get(d)),""===e&&!0!==b||c.push(e);return c}return E(a)?(a=w(a),""===a&&!0!==b||c.push(a),c):[]}function Ia(a){Y++;return 0===Y%100?(Y=0,new Promise(b=>{setTimeout(()=>{b(a)},0)})):a}function Ja(a,b,c){switch(c){case "\x26":return a&b;case "|":return a|b;case "^":return a^b;case "\x3c\x3c":return a<<b;case "\x3e\x3e":return a>>b;case "\x3e\x3e\x3e":return a>>>
b}}function D(a,b=null){if(null!=a){if(q(a)||p(a)||m(a))return a;if(a instanceof A)return!0===(null==b?void 0:b.keepGeometryType)?a:a.toJSON();if(a instanceof x)return a.toArray().map(c=>D(c,b));if(a instanceof Array)return a.map(c=>D(c,b));if(a instanceof Date)return a;if(null!==a&&"object"===typeof a&&void 0!==a.castAsJson)return a.castAsJson(b)}return null}function Za(a,b,c,d,e){return Z.apply(this,arguments)}function Z(){Z=ca._asyncToGenerator(function*(a,b,c,d,e){a=yield aa(a,b,c);e[d]=a});return Z.apply(this,
arguments)}function aa(a){return ba.apply(this,arguments)}function ba(){ba=ca._asyncToGenerator(function*(a,b=null,c=null){a instanceof x&&(a=a.toArray());if(null!=a){if(E(a)||a instanceof A||a instanceof Date)return D(a,c);if(a instanceof Array){const d=[],e=[];for(const g of a)null===g||E(g)||g instanceof A||g instanceof Date?e.push(D(g,c)):(e.push(null),d.push(Za(g,b,c,e.length-1,e)));0<d.length&&(yield Promise.all(d));return e}if(null!==a&&"object"===typeof a&&void 0!==a.castAsJsonAsync)return a.castAsJsonAsync(b,
c)}return null});return ba.apply(this,arguments)}function Ka(a,b,c){const d=a.fullSchema();return null!==d&&d.fields?G(b,d,a,c):null}function La(a){a=a.fullSchema();return null!==a&&a.fields?a.typeIdField?{subtypeField:a.typeIdField,subtypes:a.types?a.types.map(b=>({name:b.name,code:b.id})):[]}:null:null}function Ma(a,b,c,d){const e=a.fullSchema();if(null===e||!e.fields)return null;d=G(b,e,a,d);if(void 0===c)try{c=a.field(b)}catch(g){return null}return W(d,c)}function Na(a,b,c,d){const e=a.fullSchema();
if(null===e||!e.fields)return null;if(void 0===c){try{c=a.field(b)}catch(g){return null}return c}a=G(b,e,a,d);return X(a,c)}function Oa(a){a=a.fullSchema();if(null===a||!a.fields)return null;const b=[];for(const c of a.fields)b.push(S.esriFieldToJson(c));return{objectIdField:a.objectIdField,globalIdField:a.globalIdField,geometryType:void 0===S.layerGeometryEsriRestConstants[a.geometryType]?"":S.layerGeometryEsriRestConstants[a.geometryType],fields:b}}let Q=function(a){this.value=a},R=function(a){this.value=
a},L=function(a){this.fn=a},M=function(a,b){this.paramCount=b;this.fn=a};const Pa=L,Qa=M,t={type:"VOID"},Ra={type:"BREAK"},Sa={type:"CONTINUE"};let Y=0;const $a=Object.freeze(Object.defineProperty({__proto__:null,ReturnResultE:Q,ImplicitResultE:R,NativeFunctionE:L,SizzleFunctionE:M,NativeFunction:Pa,ImplicitResult:R,ReturnResult:Q,SizzleFunction:Qa,voidOperation:t,breakResult:Ra,continueResult:Sa,multiReplace:B,isFunctionParameter:K,isSimpleType:E,defaultUndefined:ja,isString:m,isBoolean:q,isNumber:p,
isInteger:ka,isArray:u,isFeature:la,isFeatureSet:ma,isFeatureSetCollection:na,isImmutableArray:y,isDate:n,pcCheck:oa,absRound:pa,generateUUID:qa,formatNumber:N,formatDate:F,standardiseDateFormat:T,greaterThanLessThan:ra,equalityTest:U,toString:w,toNumberArray:sa,toStringExplicit:V,toNumber:l,toDate:ta,toDateTime:va,toBoolean:wa,fixSpatialReference:xa,fixNullGeometry:ya,getDomainValue:W,getDomainCode:X,getDomain:G,stableStringify:P,autoCastFeatureToGeometry:Da,autoCastArrayOfPointsToPolygon:Ea,autoCastArrayOfPointsToPolyline:Fa,
autoCastArrayOfPointsToMultiPoint:Ga,toStringArray:Ha,tick:Ia,binaryOperator:Ja,castAsJson:D,castAsJsonAsync:aa,featureFullDomain:Ka,featureSubtypes:La,featureDomainValueLookup:Ma,featureDomainCodeLookup:Na,featureSchema:Oa},Symbol.toStringTag,{value:"Module"}));f.ImplicitResult=R;f.ImplicitResultE=R;f.NativeFunction=Pa;f.NativeFunctionE=L;f.ReturnResult=Q;f.ReturnResultE=Q;f.SizzleFunction=Qa;f.SizzleFunctionE=M;f.absRound=pa;f.autoCastArrayOfPointsToMultiPoint=Ga;f.autoCastArrayOfPointsToPolygon=
Ea;f.autoCastArrayOfPointsToPolyline=Fa;f.autoCastFeatureToGeometry=Da;f.binaryOperator=Ja;f.breakResult=Ra;f.castAsJson=D;f.castAsJsonAsync=aa;f.continueResult=Sa;f.defaultUndefined=ja;f.equalityTest=U;f.featureDomainCodeLookup=Na;f.featureDomainValueLookup=Ma;f.featureFullDomain=Ka;f.featureSchema=Oa;f.featureSubtypes=La;f.fixNullGeometry=ya;f.fixSpatialReference=xa;f.formatDate=F;f.formatNumber=N;f.generateUUID=qa;f.getDomain=G;f.getDomainCode=X;f.getDomainValue=W;f.greaterThanLessThan=ra;f.isArray=
u;f.isBoolean=q;f.isDate=n;f.isFeature=la;f.isFeatureSet=ma;f.isFeatureSetCollection=na;f.isFunctionParameter=K;f.isImmutableArray=y;f.isInteger=ka;f.isNumber=p;f.isSimpleType=E;f.isString=m;f.lc=$a;f.multiReplace=B;f.pcCheck=oa;f.stableStringify=P;f.standardiseDateFormat=T;f.tick=Ia;f.toBoolean=wa;f.toDate=ta;f.toDateTime=va;f.toNumber=l;f.toNumberArray=sa;f.toString=w;f.toStringArray=Ha;f.toStringExplicit=V;f.voidOperation=t});