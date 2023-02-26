/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../request.js";import e from"../core/Error.js";import{a as r,i as o}from"../chunks/maybe.js";import{g as s}from"../chunks/object.js";import{removeTrailingSlash as i}from"../core/urlUtils.js";import{a as n,p as a}from"../chunks/utils5.js";import{_ as p}from"../chunks/tslib.es6.js";import{JSONSupport as u}from"../core/JSONSupport.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{e as c}from"../chunks/enumeration.js";import{r as d}from"../chunks/reader.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{w as h}from"../chunks/writer.js";import{i as v,b as f,u as y,a as g}from"../chunks/networkEnums.js";import k from"./support/TravelMode.js";import"../config.js";import"../kernel.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/jsonMap.js";import"../core/Clonable.js";let T=class extends u{constructor(t){super(t),this.dataType=null,this.name=null,this.parameterNames=null,this.restrictionUsageParameterName=null,this.timeNeutralAttributeName=null,this.trafficSupport=null,this.units=null,this.usageType=null}};p([l({type:String})],T.prototype,"dataType",void 0),p([c(v,{ignoreUnknown:!1})],T.prototype,"name",void 0),p([l({type:[String]})],T.prototype,"parameterNames",void 0),p([l({type:String})],T.prototype,"restrictionUsageParameterName",void 0),p([c(f,{ignoreUnknown:!1})],T.prototype,"timeNeutralAttributeName",void 0),p([l({type:String})],T.prototype,"trafficSupport",void 0),p([l({type:String})],T.prototype,"units",void 0),p([c(y)],T.prototype,"usageType",void 0),T=p([m("esri.rest.support.NetworkAttribute")],T);const j=T;let w=class extends u{constructor(t){super(t),this.buildTime=null,this.name=null,this.networkAttributes=null,this.networkSources=null,this.state=null}};p([l({type:Number})],w.prototype,"buildTime",void 0),p([l({type:String})],w.prototype,"name",void 0),p([l({type:[j]})],w.prototype,"networkAttributes",void 0),p([l()],w.prototype,"networkSources",void 0),p([l({type:String})],w.prototype,"state",void 0),w=p([m("esri.rest.support.NetworkDataset")],w);const M=w;let N=class extends u{constructor(t){super(t),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}readAccumulateAttributes(t){return r(t)?null:t.map((t=>v.fromJSON(t)))}writeAccumulateAttributes(t,e,o){!r(t)&&t.length&&(e[o]=t.map((t=>v.toJSON(t))))}};p([l()],N.prototype,"accumulateAttributeNames",void 0),p([d("accumulateAttributeNames")],N.prototype,"readAccumulateAttributes",null),p([h("accumulateAttributeNames")],N.prototype,"writeAccumulateAttributes",null),p([l()],N.prototype,"currentVersion",void 0),p([l()],N.prototype,"defaultTravelMode",void 0),p([l()],N.prototype,"directionsLanguage",void 0),p([c(g)],N.prototype,"directionsLengthUnits",void 0),p([l()],N.prototype,"directionsSupportedLanguages",void 0),p([c(f,{ignoreUnknown:!1})],N.prototype,"directionsTimeAttribute",void 0),p([l()],N.prototype,"hasZ",void 0),p([c(v,{ignoreUnknown:!1})],N.prototype,"impedance",void 0),p([l({type:M})],N.prototype,"networkDataset",void 0),p([l({type:[k]})],N.prototype,"supportedTravelModes",void 0),N=p([m("esri.rest.support.NetworkServiceDescription")],N);const S=N;function b(t,e,r,o){o[r]=[e.length,e.length+t.length],t.forEach((t=>{e.push(t.geometry)}))}function A(t,e){for(let r=0;r<e.length;r++){const o=t[e[r]];if(o&&o.length)for(const t of o)t.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function U(t,e){for(let r=0;r<e.length;r++){const s=t[e[r]];if(s&&s.length)for(const t of s)if(o(t)&&t.hasZ)return!0}return!1}async function L(r,o,p){if(!r)throw new e("network-service:missing-url","Url to Network service is missing");const u=n({f:"json",token:o},p),{data:l}=await t(r,u);l.supportedTravelModes||(l.supportedTravelModes=[]);for(let t=0;t<l.supportedTravelModes.length;t++)l.supportedTravelModes[t].id||(l.supportedTravelModes[t].id=l.supportedTravelModes[t].itemId);const c=l.currentVersion>=10.4?async function(r,o,s){try{const e=n({f:"json",token:o},s),a=i(r)+"/retrieveTravelModes",{data:{supportedTravelModes:p,defaultTravelMode:u}}=await t(a,e);return{supportedTravelModes:p,defaultTravelMode:u}}catch(t){throw new e("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:t})}}(r,o,p):async function(e,r){const o=n({f:"json"},r),{data:p}=await t(e.replace(/\/rest\/.*$/i,"/info"),o);if(!p||!p.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=p,l=i(u)+"/sharing/rest/portals/self",{data:c}=await t(l,o),d=s("helperServices.routingUtilities.url",c);if(!d)return{supportedTravelModes:[],defaultTravelMode:null};const m=a(u),h=/\/solve$/i.test(m.path)?"Route":/\/solveclosestfacility$/i.test(m.path)?"ClosestFacility":"ServiceAreas",v=n({f:"json",serviceName:h},r),f=i(d)+"/GetTravelModes/execute",y=await t(f,v),g=[];let k=null;if(y?.data?.results?.length){const t=y.data.results;for(const e of t)if("supportedTravelModes"===e.paramName){if(e.value?.features)for(const{attributes:t}of e.value.features)if(t){const e=JSON.parse(t.TravelMode);g.push(e)}}else"defaultTravelMode"===e.paramName&&(k=e.value)}return{supportedTravelModes:g,defaultTravelMode:k}}(r,p),{defaultTravelMode:d,supportedTravelModes:m}=await c;return l.defaultTravelMode=d,l.supportedTravelModes=m,S.fromJSON(l)}export{b as collectGeometries,A as dropZValuesOffInputGeometry,L as fetchServiceDescription,U as isInputGeometryZAware};
