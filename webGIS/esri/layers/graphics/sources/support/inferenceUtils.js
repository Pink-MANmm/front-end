// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/number","../csv/csv"],function(h,n,p){function k(b){if(!b.length)return"string";const d=/[^+-.,0-9]/;return b.map(a=>{var c=!1;if(""!==a){if(d.test(a))c=!0;else{c=l(a);if(!isNaN(c))return/[.,]/.test(a)||!Number.isInteger(c)||214783647<c||-214783648>c?"double":"integer";if(a.includes("E"))if(c=Number(a),isNaN(c))if(a.includes(","))if(a=a.replace(",","."),c=Number(a),isNaN(c))c=!0;else return"double";else c=!0;else return"double";else c=!0}return c&&!/^[-]?\d*[.,]?\d*$/.test(a)&&
m(new Date(a),a)?"date":"string"}}).reduce((a,c)=>{if(void 0===a||a===c)return c;if("string"===a||"string"===c)return"string";if("double"===a||"double"===c)return"double"})}function m(b,d){if(!b||"[object Date]"!==Object.prototype.toString.call(b)||isNaN(b.getTime()))return!1;b=!0;if(!q&&/\d+\W*$/.test(d)&&(d=d.match(/[a-zA-Z]{2,}/))){b=!1;let a=0;for(;!b&&a<=d.length;)b=!r.test(d[a]),a++;b=!b}return b}const l=function(){const b=n._parseInfo(),d=new RegExp("^"+b.regexp+"$"),a=new RegExp("["+b.group+
"\\s\\xa0]","g"),c=b.factor;return f=>{f=d.exec(f);b.factor=c;if(!f)return NaN;let e=f[1];if(!f[1]){if(!f[2])return NaN;e=f[2];b.factor*=-1}e=e.replace(a,"").replace(b.decimal,".");return+e*b.factor}}(),r=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,q=Number.isNaN((new Date("technology 10")).getTime()),t="lat latitude latitude83 latdecdeg lat_dd y ycenter point-y".split(" "),
u="lon lng long longitude longitude83 longdecdeg long_dd x xcenter point-x".split(" ");h.inferFieldType=k;h.inferFields=function(b,d,a,c){const f=[];d=p.parseRows(b,a,d);b=[];for(var e of d){if(10===b.length)break;b.push(e)}for(const g of a)if(g===c.longitudeFieldName||g===c.latitudeFieldName)f.push({name:g,type:"esriFieldTypeDouble",alias:g});else{a=b.map(v=>v[g]);a=k(a);e={name:g,type:null,alias:g};switch(a){case "integer":e.type="esriFieldTypeInteger";break;case "double":e.type="esriFieldTypeDouble";
break;case "date":e.type="esriFieldTypeDate";e.length=36;break;default:e.type="esriFieldTypeString",e.length=255}f.push(e)}return f};h.inferLocationInfo=function(b){const d=b.map(a=>a.toLowerCase());return{longitudeFieldName:b[d.indexOf(u.find(a=>d.includes(a)))],latitudeFieldName:b[d.indexOf(t.find(a=>d.includes(a)))]}};h.isValidDate=m;h.parseNumber=l;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});