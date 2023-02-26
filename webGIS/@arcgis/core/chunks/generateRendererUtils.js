/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{J as t}from"./jsonMap.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{JSONSupport as a}from"../core/JSONSupport.js";import{t as s,f as o}from"./colorRamps.js";import i from"../symbols/Symbol.js";const r=new t({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let u=class extends a{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};e([l({type:i,json:{write:!0}})],u.prototype,"baseSymbol",void 0),e([l({types:s,json:{read:{reader:o},write:!0}})],u.prototype,"colorRamp",void 0),e([l({json:{read:r.read,write:r.write}})],u.prototype,"type",void 0),u=e([n("esri.rest.support.ClassificationDefinition")],u);const c=u,f=new t({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new t({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends c{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};e([l({json:{write:!0}})],d.prototype,"breakCount",void 0),e([l({json:{write:!0}})],d.prototype,"classificationField",void 0),e([l({type:String,json:{read:f.read,write:f.write}})],d.prototype,"classificationMethod",void 0),e([l({json:{write:!0}})],d.prototype,"normalizationField",void 0),e([l({json:{read:p.read,write:p.write}})],d.prototype,"normalizationType",void 0),e([l({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),e([l({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),e([l()],d.prototype,"type",void 0),d=e([n("esri.rest.support.ClassBreaksDefinition")],d);const m=d;function h(e,t){return Number(e.toFixed(t))}function b(e){const t=V(e),l=[],n=t.uniqueValues.length;for(let e=0;e<n;e++){const n=t.uniqueValues[e],a=t.valueFrequency[e],s=n.toString();l.push({value:n,count:a,label:s})}return{uniqueValues:l}}function y(e){const{normalizationTotal:t}=e,l=function(e){const t=e.definition,{classificationMethod:l,breakCount:n,normalizationType:a,definedInterval:s}=t,o=[];let i=e.values;if(0===i.length)return[];i=i.sort(((e,t)=>e-t));const r=i[0],u=i[i.length-1];if("equal-interval"===l)if(i.length>=n){const e=(u-r)/n;let t=r;for(let l=1;l<n;l++){const n=h(r+l*e,6);o.push({minValue:t,maxValue:n,label:v(t,n,a)}),t=n}o.push({minValue:t,maxValue:u,label:v(t,u,a)})}else i.forEach((e=>{o.push({minValue:e,maxValue:e,label:v(e,e,a)})}));else if("natural-breaks"===l){const t=V(i),l=e.valueFrequency||t.valueFrequency,s=function(e,t,l){const n=e.length,a=[];l>n&&(l=n);for(let e=0;e<l;e++)a.push(Math.round(e*n/l-1));a.push(n-1);let s=g(a,e,t,l);return function(e,t,l,n,a,s){let o=0,i=0,r=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<s-1;f++)for(;l[f+1]+1!==l[f+2];){l[f+1]=l[f+1]+1;const s=M(f,l,n,a);r=s.sbMean,o=s.sbSdcm;const p=M(f+1,l,n,a);if(u=p.sbMean,i=p.sbSdcm,!(o+i<t[f]+t[f+1])){l[f+1]=l[f+1]-1;break}t[f]=o,t[f+1]=i,e[f]=r,e[f+1]=u,c=!0}for(let f=s-1;f>0;f--)for(;l[f]!==l[f-1]+1;){l[f]=l[f]-1;const s=M(f-1,l,n,a);r=s.sbMean,o=s.sbSdcm;const p=M(f,l,n,a);if(u=p.sbMean,i=p.sbSdcm,!(o+i<t[f-1]+t[f])){l[f]=l[f]+1;break}t[f-1]=o,t[f]=i,e[f-1]=r,e[f]=u,c=!0}}return c}(s.mean,s.sdcm,a,e,t,l)&&(s=g(a,e,t,l)),a}(t.uniqueValues,l,n);let c=r;for(let e=1;e<n;e++)if(t.uniqueValues.length>e){const l=h(t.uniqueValues[s[e]],6);o.push({minValue:c,maxValue:l,label:v(c,l,a)}),c=l}o.push({minValue:c,maxValue:u,label:v(c,u,a)})}else if("quantile"===l)if(i.length>=n&&r!==u){let e=r,t=Math.ceil(i.length/n),l=0;for(let s=1;s<n;s++){let r=t+l-1;r>i.length&&(r=i.length-1),r<0&&(r=0),o.push({minValue:e,maxValue:i[r],label:v(e,i[r],a)}),e=i[r],l+=t,t=Math.ceil((i.length-l)/(n-s))}o.push({minValue:e,maxValue:u,label:v(e,u,a)})}else{let e=-1;for(let t=0;t<i.length;t++){const l=i[t];l!==e&&(e=l,o.push({minValue:e,maxValue:l,label:v(e,l,a)}),e=l)}}else if("standard-deviation"===l){const e=function(e){let t=0;for(let l=0;l<e.length;l++)t+=e[l];return t/=e.length,t}(i),t=function(e,t){let l=0;for(let n=0;n<e.length;n++){const a=e[n];l+=(a-t)*(a-t)}return l/=e.length,Math.sqrt(l)}(i,e);if(0===t)o.push({minValue:i[0],maxValue:i[0],label:v(i[0],i[0],a)});else{const l=function(e,t,l,n,a){let s=Math.max(n-e,t-n)/a/l;return s=s>=1?1:s>=.5?.5:.25,s}(r,u,n,e,t),s=l*t;let i=0,c=r;for(let t=n;t>=1;t--){const l=h(e-(t-.5)*s,6);o.push({minValue:c,maxValue:l,label:v(c,l,a)}),c=l,i++}let f=h(e+.5*s,6);o.push({minValue:c,maxValue:f,label:v(c,f,a)}),c=f,i++;for(let t=1;t<=n;t++)f=i===2*n?u:h(e+(t+.5)*s,6),o.push({minValue:c,maxValue:f,label:v(c,f,a)}),c=f,i++}}else if("defined-interval"===l){if(!s)return o;const e=i[0],t=i[i.length-1],l=Math.ceil((t-e)/s);let n=e;for(let t=1;t<l;t++){const l=h(e+t*s,6);o.push({minValue:n,maxValue:l,label:v(n,l,a)}),n=l}o.push({minValue:n,maxValue:t,label:v(n,t,a)})}return o}(e);return{classBreaks:l,normalizationTotal:t}}function v(e,t,l){let n=null;return n=e===t?l&&"percent-of-total"===l?e+"%":e.toString():l&&"percent-of-total"===l?e+"% - "+t+"%":e+" - "+t,n}function V(e){const t=[],l=[];let n=Number.MIN_VALUE,a=1,s=-1;for(let o=0;o<e.length;o++){const i=e[o];i===n?(a++,l[s]=a):null!==i&&(t.push(i),n=i,a=1,l.push(a),s++)}return{uniqueValues:t,valueFrequency:l}}function g(e,t,l,n){let a=[],s=[],o=[],i=0;const r=[],u=[];for(let a=0;a<n;a++){const n=M(a,e,t,l);r.push(n.sbMean),u.push(n.sbSdcm),i+=u[a]}let c,f=i,p=!0;for(;p||i<f;){p=!1,a=[];for(let t=0;t<n;t++)a.push(e[t]);for(let l=0;l<n;l++)for(let a=e[l]+1;a<=e[l+1];a++)if(c=t[a],l>0&&a!==e[l+1]&&Math.abs(c-r[l])>Math.abs(c-r[l-1]))e[l]=a;else if(l<n-1&&e[l]!==a-1&&Math.abs(c-r[l])>Math.abs(c-r[l+1])){e[l+1]=a-1;break}f=i,i=0,s=[],o=[];for(let a=0;a<n;a++){s.push(r[a]),o.push(u[a]);const n=M(a,e,t,l);r[a]=n.sbMean,u[a]=n.sbSdcm,i+=u[a]}}if(i>f){for(let t=0;t<n;t++)e[t]=a[t],r[t]=s[t],u[t]=o[t];i=f}return{mean:r,sdcm:u}}function M(e,t,l,n){let a=0,s=0;for(let o=t[e]+1;o<=t[e+1];o++){const e=n[o];a+=l[o]*e,s+=e}s<=0&&console.log("Exception in Natural Breaks calculation");const o=a/s;let i=0;for(let a=t[e]+1;a<=t[e+1];a++)i+=n[a]*(l[a]-o)**2;return{sbMean:o,sbSdcm:i}}export{m as C,c as a,b,y as c};
