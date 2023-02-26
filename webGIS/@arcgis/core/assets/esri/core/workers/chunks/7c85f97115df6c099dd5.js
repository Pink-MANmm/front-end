"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7050],{75025:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(29768),s=r(92143),o=r(71252),l=r(34250),n=(r(76506),r(91306),r(17533)),a=r(21132);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if((0,o.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.a)(e,s.L.getLogger(this.declaredClass)))}};return(0,i._)([(0,l.Cb)()],t.prototype,"title",null),(0,i._)([(0,l.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},22203:(e,t,r)=>{r.d(t,{C:()=>d});var i=r(29768),s=r(15324),o=r(95873),l=r(71252),n=(r(76506),r(60991),r(92143),r(19657)),a=r(34250),u=(r(91306),r(17533));let p=class extends((0,o.p)(s.Z)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add((0,n.a)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=(0,l.i)(this.getCollections)?this.getCollections():null;if((0,l.a)(e))return void this.removeAll();let t=0;for(const r of e)(0,l.i)(r)&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e;for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,a.Cb)()],p.prototype,"getCollections",void 0),(0,i._)([(0,a.Cb)()],p.prototype,"getChildrenFunction",void 0),(0,i._)([(0,a.Cb)()],p.prototype,"itemFilterFunction",void 0),p=(0,i._)([(0,u.j)("esri.core.CollectionFlattener")],p);const d=p},10738:(e,t,r)=>{r.d(t,{V:()=>s});var i=r(60991);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),l=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(o,10);return new s(n,a,t)}}},52228:(e,t,r)=>{var i,s;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function l(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function a(e,t){const r=t||n(e),o=e.valueUnit||"unknown";return r===i.Unknown?s.Constant:e.stops?s.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?s.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?s.Proportional:s.Additive:s.Identity:s.RealWorldSize}r.d(t,{I:()=>i,T:()=>s,a:()=>a,b:()=>l,g:()=>n,i:()=>o}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(s||(s={}))},20820:(e,t,r)=>{r.d(t,{a:()=>l,i:()=>a,s:()=>o});var i=r(71252),s=r(21972);function o(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!n(e,t)}function l(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&((0,i.a)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>s.O.SERVICE||e.originIdOf("labelingInfo")>s.O.SERVICE||e.originIdOf("opacity")>s.O.SERVICE||e.originIdOf("labelsVisible")>s.O.SERVICE}))||!n(e,t)}function n(e,t){if(!e||!e.length||(0,i.a)(t))return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let s=0;const o=r.length;for(const{id:t}of e){for(;s<o&&r[s]!==t;)s++;if(s>=o)return!1}return!0}function a(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}},52991:(e,t,r)=>{r.d(t,{E:()=>s,_:()=>o});var i=r(71252);async function s(e,t){const{WhereClause:i}=await Promise.resolve().then(r.bind(r,72274));return i.create(e,t)}function o(e,t){return(0,i.i)(e)?(0,i.i)(t)?`(${e}) AND (${t})`:e:t}},96994:(e,t,r)=>{r.d(t,{V:()=>l});var i=r(29768),s=r(34250),o=(r(76506),r(91306),r(17533));r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540);const l=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},97064:(e,t,r)=>{r.d(t,{O:()=>h});var i=r(29768),s=r(82058),o=r(50406),l=r(32101),n=r(10738),a=r(34250),u=(r(76506),r(91306),r(97714)),p=r(17533),d=r(21801),y=r(60947),c=r(67541);r(31450),r(71552),r(88762),r(60991),r(92143),r(40642),r(60474),r(66396),r(86656),r(6540),r(73796),r(12047),r(21972),r(91055),r(19657),r(6906),r(2906),r(91597),r(86787),r(35132),r(89623),r(93314),r(35197),r(38742),r(1557),r(47842),r(57251),r(14249),r(60217),r(74569),r(84069),r(44567),r(98380),r(92896),r(22781),r(32422),r(17298),r(85557),r(53785),r(95587),r(34394);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!r)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,s=r.includes("data"),o=r.includes("query"),l=r.includes("map"),a=!!t.exportTilesAllowed,u=r.includes("tilemap"),p="tile"!==i&&!!t.supportsDynamicLayers,d="tile"!==i&&(!t.tileInfo||p),y="tile"!==i&&(!t.tileInfo||p),c="tile"!==i,h=t.cimVersion&&n.V.parse(t.cimVersion),f=h?.since(1,4)??!1,b=h?.since(2,0)??!1;return{operations:{supportsExportMap:l,supportsExportTiles:a,supportsIdentify:o,supportsQuery:s,supportsTileMap:u},exportMap:l?{supportsArcadeExpressionForLabeling:f,supportsSublayersChanges:c,supportsDynamicLayers:p,supportsSublayerVisibility:d,supportsSublayerDefinitionExpression:y,supportsCIMSymbols:b}:null,exportTiles:a?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,l.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}}),(e=>({error:e}))));const t=await this._allLayersAndTablesPromise;if((0,o.k_)(e),"result"in t)return t.result;throw t.error}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"capabilities",void 0),(0,i._)([(0,u.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),(0,i._)([(0,a.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({type:d.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)(c.i)],t.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)(c.p)],t.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:y.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,i._)([(0,u.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=(0,i._)([(0,p.j)("esri.layers.mixins.ArcGISMapService")],t),t}},93844:(e,t,r)=>{r.d(t,{x:()=>m});var i=r(29768),s=r(15324),o=r(22203),l=r(60991),n=r(92143),a=r(58085),u=r(34250),p=(r(76506),r(66396)),d=(r(91306),r(17533)),y=r(21972),c=r(9530),h=r(20820);r(91055),r(75067),r(60474),r(86656),r(31450),r(71552),r(40642),r(6540),r(19657),r(6906),r(50406),r(89914),r(95873),r(82933),r(74569),r(21801),r(73796),r(12047),r(97714),r(60947),r(2906),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(86748),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33957),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(55306),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(29794),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(65684),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(71206),r(9352),r(89241),r(91700),r(51979),r(63136),r(32037),r(60698),r(90811),r(60045),r(68681),r(53321),r(86758),r(95310),r(93939),r(238),r(68714),r(20208),r(54179),r(21132),r(78303),r(9801),r(53523),r(42911),r(46826),r(45433),r(46495),r(97546),r(54732),r(1709),r(77807),r(50203),r(6941),r(2180),r(69218),r(31292),r(93314),r(35197),r(27207),r(78893);const f=n.L.getLogger("esri.layers.TileLayer"),b=s.Z.ofType(c.Z);function g(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&g(e.sublayers,t)}))}const m=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new o.C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[y.O.SERVICE]:{},[y.O.PORTAL_ITEM]:{},[y.O.WEB_SCENE]:{},[y.O.WEB_MAP]:{}},this.own((0,a.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),a.Z_))}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=(0,y.n)(t.origin);if(i<y.O.SERVICE)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>y.O.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:o}=this.createSublayersForOrigin("web-document"),l=(0,p.g)(this);l.setDefaultOrigin(o),this._set("sublayers",new b(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=(0,y.n)("web-document"===e?"web-map":e);let r=y.O.SERVICE,i=this.sublayersSourceJSON[y.O.SERVICE].layers,s=this.sublayersSourceJSON[y.O.SERVICE].context,o=null;const l=[y.O.PORTAL_ITEM,y.O.WEB_SCENE,y.O.WEB_MAP].filter((e=>e<=t));for(const e of l){const t=this.sublayersSourceJSON[e];(0,h.i)(t.layers)&&(r=e,i=t.layers,s=t.context,t.visibleLayers&&(o={visibleLayers:t.visibleLayers,context:t.context}))}const n=[y.O.PORTAL_ITEM,y.O.WEB_SCENE,y.O.WEB_MAP].filter((e=>e>r&&e<=t));let a=null;for(const e of n){const{layers:t,visibleLayers:r,context:i}=this.sublayersSourceJSON[e];t&&(a={layers:t,context:i}),r&&(o={visibleLayers:r,context:i})}const u=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const s=new c.Z;if(s.read(e,t),i[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(s)}else r.unshift(s)})),r):r}(i,s),p=new Map,d=new Set;if(a)for(const e of a.layers)p.set(e.id,e);if(o)for(const e of o.visibleLayers)d.add(e);return g(u,(e=>{a&&e.read(p.get(e.id),a.context),o&&e.read({defaultVisibility:d.has(e.id)},o.context)})),{origin:(0,y.b)(r),sublayers:new b({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{f.error(new l.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"allSublayers",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,type:s.Z.ofType(c.Z)})],t.prototype,"serviceSublayers",void 0),(0,i._)([(0,u.Cb)({value:null,type:b,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=(0,i._)([(0,d.j)("esri.layers.mixins.SublayersOwner")],t),t}},46495:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(29768),s=r(66122),o=r(57251),l=r(12047),n=r(34250),a=(r(76506),r(91306),r(17533));r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);const u=new o.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends((0,s.J)(l.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,n.Cb)({json:{write:!0}})],p.prototype,"name",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],p.prototype,"description",void 0),(0,i._)([(0,n.Cb)({json:{read:u.read,write:u.write}})],p.prototype,"drawingTool",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],p.prototype,"thumbnail",void 0),p=(0,i._)([(0,a.j)("esri.layers.support.FeatureTemplate")],p);const d=p},78303:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(29768),s=r(66122),o=r(12047),l=r(34250),n=(r(76506),r(91306),r(97714)),a=r(17533),u=r(2906),p=r(9801),d=r(46495);r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(53523),r(59465),r(57251),r(42911),r(46826),r(45433);let y=class extends((0,s.J)(o.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,p.f)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"id",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"name",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],y.prototype,"domains",void 0),(0,i._)([(0,n.r)("domains")],y.prototype,"readDomains",null),(0,i._)([(0,u.w)("domains")],y.prototype,"writeDomains",null),(0,i._)([(0,l.Cb)({type:[d.Z],json:{write:!0}})],y.prototype,"templates",void 0),y=(0,i._)([(0,a.j)("esri.layers.support.FeatureType")],y);const c=y},2180:(e,t,r)=>{r.d(t,{Z:()=>p});var i,s=r(29768),o=r(15324),l=r(12047),n=r(34250),a=(r(76506),r(91306),r(17533));r(91055),r(75067),r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(6540),r(19657),r(6906),r(50406),r(60991),r(89914);let u=i=class extends l.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=i=(0,s._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],u);const p=u},9530:(e,t,r)=>{r.d(t,{Z:()=>W});var i,s=r(29768),o=(r(74569),r(86748)),l=(r(55306),r(71206),r(51979),r(60698),r(53321),r(65684),r(86758),r(95310),r(20208)),n=r(82058),a=r(96467),u=r(15324),p=r(60991),d=r(95873),y=r(82673),c=r(76506),h=r(81184),f=r(92143),b=r(71252),g=r(54179),m=r(52991),v=r(32101),w=r(34250),S=r(66396),I=r(86787),_=r(97714),E=r(17533),C=r(2906),O=r(91306),x=r(21972),L=r(21132),F=r(78303),D=r(97546),T=r(1709),j=r(77807),A=r(2180),P=r(69218),V=r(31292),M=r(78893),N=r(21801);function Z(e){return e&&"esriSMS"===e.type}function R(e,t,r){const i=this.originIdOf(t)>=(0,x.n)(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===r.layer?.type&&(r.writeSublayerStructure||i)}}function k(e,t,r){return{enabled:!!r&&"tile"===r.layer?.type&&this._isOverridden(t)}}function U(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function J(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=(0,x.n)(r.origin))}}r(73796),r(12047),r(60474),r(86656),r(91055),r(6540),r(19657),r(6906),r(50406),r(71552),r(31450),r(40642),r(60947),r(84069),r(91597),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33957),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(34229),r(37029),r(75067),r(89914),r(26822),r(51723),r(23243),r(51669),r(6090),r(48027),r(54174),r(82426),r(29794),r(3977),r(36741),r(34394),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(66122),r(63571),r(30776),r(63130),r(25696),r(98402),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(67477),r(78533),r(74653),r(91091),r(58943),r(33101),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(9352),r(89241),r(91700),r(63136),r(32037),r(90811),r(60045),r(68681),r(93939),r(238),r(68714),r(82933),r(58085),r(9801),r(53523),r(42911),r(46826),r(45433),r(46495),r(54732),r(50203),r(6941),r(93314),r(35197),r(27207);const $=f.L.getLogger("esri.layers.support.Sublayer");let q=0;const B=new Set;B.add("layer"),B.add("parent"),B.add("loaded"),B.add("loadStatus"),B.add("loadError"),B.add("loadWarnings");let K=i=class extends((0,d.p)((0,g.M)((0,y.I)(h.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{if(!this.layer&&!this.url)throw new p.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let t=null;if(!this.layer||this.originIdOf("url")>x.O.SERVICE||"data-layer"===this.source?.type)t=(await(0,n.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{let r=this.id;"map-layer"===this.source?.type&&(r=this.source.mapLayerId),t=await this.layer.fetchSublayerInfo(r,e)}t&&(this.sourceJSON=t,this.read({layerDefinition:t},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[],i=this.url?(0,L.p)(this.url):null,s=r.includes((0,b.i)(i)&&"MapServer"===i.serverType?"data":"query");return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new T.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?q++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=(0,O.n)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if((0,a.dU)(t)){$.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new P.M({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,O.j)(u.Z.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return null}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,t=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===t?.type)return`${e.path}/${t.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,v.B7)(r)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,S.g)(this),t=new i;return(0,S.g)(t).store=e.clone(B),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){return new V.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=this.layer?.parsedUrl,t=new(0,(await Promise.all([r.e(3064),r.e(1580),r.e(9506)]).then(r.bind(r,9506))).default)({url:e.path});return e&&this.source&&("map-layer"===this.source.type?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(t.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>x.O.SERVICE&&(t.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>x.O.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>x.O.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>x.O.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>x.O.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>x.O.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>x.O.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>x.O.DEFAULTS&&(t.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>x.O.SERVICE&&(t.renderer=(0,c.d9)(this.renderer)),"data-layer"===this.source?.type&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>x.O.DEFAULTS&&(t.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>x.O.DEFAULTS&&(t.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>x.O.DEFAULTS&&(t.customParameters=this.layer.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let s=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(s=e),!!s)})),s}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),t){if(await this.load(),!this.capabilities?.operations?.supportsQuery)throw new p.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:i},{default:s}]=await Promise.all([Promise.resolve().then(r.bind(r,49214)).then((e=>e.q)),r.e(7258).then(r.bind(r,87258))]),o=await i(this.url,V.Z.from(e),this.layer?.spatialReference??null,{...t,query:{...this.layer?.customParameters,token:this.layer?.apiKey}}),l=s.fromJSON(o.data);if(l?.features)for(const e of l.features)e.sourceLayer=this;return l}toExportImageJSON(e){const t={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},r=(0,m._)(e,this.definitionExpression);(0,b.i)(r)&&(t.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{}),s=Object.keys(i).some((e=>i[e]>x.O.SERVICE));if(s){const e=t.drawingInfo={};i.renderer>x.O.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>x.O.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>x.O.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),i.opacity>x.O.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)Z(e.symbol)&&t(e.symbol);"symbol"in e&&Z(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&Z(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,o;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",o="supportsModification"}const l=(0,S.g)(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(o&&!1===this.get(`capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${o}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||($.error(new p.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){$.error(new p.Z("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};K.test={isMapImageLayerOverridePolicy:e=>e===U||e===R,isTileImageLayerOverridePolicy:e=>e===k},(0,s._)([(0,w.Cb)({readOnly:!0})],K.prototype,"capabilities",void 0),(0,s._)([(0,_.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],K.prototype,"readCapabilities",null),(0,s._)([(0,w.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:R}}})],K.prototype,"definitionExpression",null),(0,s._)([(0,w.Cb)({type:[D.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],K.prototype,"fields",void 0),(0,s._)([(0,w.Cb)({readOnly:!0})],K.prototype,"fieldsIndex",null),(0,s._)([(0,w.Cb)({type:A.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:R},origins:{"web-scene":{read:!1,write:!1}}}})],K.prototype,"floorInfo",null),(0,s._)([(0,w.Cb)({type:N.Z,json:{read:{source:"layerDefinition.extent"}}})],K.prototype,"fullExtent",void 0),(0,s._)([(0,w.Cb)({type:String})],K.prototype,"globalIdField",void 0),(0,s._)([(0,_.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],K.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,w.Cb)({type:O.I,json:{write:{ignoreOrigin:!0}}})],K.prototype,"id",null),(0,s._)([(0,w.Cb)({value:null,type:[j.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:U}}})],K.prototype,"labelingInfo",null),(0,s._)([(0,C.w)("labelingInfo")],K.prototype,"writeLabelingInfo",null),(0,s._)([(0,w.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:U}}})],K.prototype,"labelsVisible",null),(0,s._)([(0,w.Cb)({value:null})],K.prototype,"layer",null),(0,s._)([(0,w.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:J}}})],K.prototype,"legendEnabled",void 0),(0,s._)([(0,w.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],K.prototype,"listMode",null),(0,s._)([(0,w.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],K.prototype,"minScale",null),(0,s._)([(0,_.r)("minScale",["minScale","layerDefinition.minScale"])],K.prototype,"readMinScale",null),(0,s._)([(0,w.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],K.prototype,"maxScale",null),(0,s._)([(0,_.r)("maxScale",["maxScale","layerDefinition.maxScale"])],K.prototype,"readMaxScale",null),(0,s._)([(0,w.Cb)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),(0,s._)([(0,w.Cb)({type:String})],K.prototype,"objectIdField",void 0),(0,s._)([(0,_.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],K.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,w.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:U}}})],K.prototype,"opacity",null),(0,s._)([(0,_.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],K.prototype,"readOpacity",null),(0,s._)([(0,C.w)("opacity")],K.prototype,"writeOpacity",null),(0,s._)([(0,w.Cb)({json:{type:O.I,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:U}}})],K.prototype,"parent",void 0),(0,s._)([(0,C.w)("parent")],K.prototype,"writeParent",null),(0,s._)([(0,w.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:J,writer(e,t,r){t[r]=!e}}}})],K.prototype,"popupEnabled",void 0),(0,s._)([(0,w.Cb)({type:o.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:J}}})],K.prototype,"popupTemplate",void 0),(0,s._)([(0,w.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,s._)([(0,w.Cb)({types:l.r,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U},origins:{"web-scene":{types:l.w,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U}}}}})],K.prototype,"renderer",null),(0,s._)([(0,w.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":P.D,"map-layer":P.M}},cast(e){if(e){if("mapLayerId"in e)return(0,O.m)(P.M,e);if("dataSource"in e)return(0,O.m)(P.D,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:U}}})],K.prototype,"source",null),(0,s._)([(0,w.Cb)()],K.prototype,"sourceJSON",void 0),(0,s._)([(0,w.Cb)({value:null,json:{type:[O.I],write:{target:"subLayerIds",allowNull:!0,overridePolicy:U}}})],K.prototype,"sublayers",null),(0,s._)([(0,I.p)("sublayers")],K.prototype,"castSublayers",null),(0,s._)([(0,C.w)("sublayers")],K.prototype,"writeSublayers",null),(0,s._)([(0,w.Cb)({type:String,json:{name:"name",write:{overridePolicy:J}}})],K.prototype,"title",void 0),(0,s._)([(0,w.Cb)({type:String})],K.prototype,"typeIdField",void 0),(0,s._)([(0,_.r)("typeIdField",["layerDefinition.typeIdField"])],K.prototype,"readTypeIdField",null),(0,s._)([(0,w.Cb)({type:[F.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],K.prototype,"types",void 0),(0,s._)([(0,w.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:k}}})],K.prototype,"url",null),(0,s._)([(0,w.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:U}}})],K.prototype,"visible",null),(0,s._)([(0,C.w)("visible")],K.prototype,"writeVisible",null),K=i=(0,s._)([(0,E.j)("esri.layers.support.Sublayer")],K);const W=K}}]);