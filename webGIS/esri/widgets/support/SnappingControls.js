// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/uid ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../Widget ./widgetUtils ./decorators/messageBundle ./jsxFactory ./SnappingControls/SnappingControlsViewModel".split(" "),function(g,r,k,n,x,t,h,C,y,l,z,A,D,u,c,B){const v=
{header:!0,enabledToggle:!0,selfEnabledToggle:!0,featureEnabledToggle:!0,layerList:!0};h=function(w){function p(a,b){b=w.call(this,(()=>{const {view:d,viewModel:f,snappingOptions:m,...q}=a;return q})(),b)||this;b._layerListFilter=null;b.label=void 0;b.messages=null;b.messagesCommon=null;b.snappingOptions=null;b.view=null;b.visibleElements={...v};b._defaultViewModel=null;null!=a&&a.viewModel?b.viewModel=a.viewModel:(b._defaultViewModel=new B({snappingOptions:a.snappingOptions,view:a.view}),b.viewModel=
b._defaultViewModel);return b}r._inheritsLoose(p,w);var e=p.prototype;e.destroy=function(){this._defaultViewModel=n.destroyMaybe(this._defaultViewModel)};e.loadDependencies=function(){return Promise.all([new Promise((a,b)=>g(["../../chunks/calcite-action"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-block"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-icon"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-label"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-panel"],a,b)),new Promise((a,
b)=>g(["../../chunks/calcite-list"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-list-item"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-list-item-group"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-switch"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-checkbox"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-accordion-item"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-accordion"],a,b)),new Promise((a,b)=>g(["../../chunks/calcite-input"],a,b))])};e.castVisibleElements=
function(a){return{...v,...a}};e.render=function(){const {label:a,visibleElements:{header:b}}=this;return c.tsx("div",{"aria-label":a,class:this.classes("esri-snapping-controls","esri-widget")},c.tsx("div",{class:"esri-snapping-controls__container"},b?this.renderHeaderView():this.renderContent()))};e.renderHeaderView=function(){return c.tsx("calcite-panel",{heading:this.label,class:"esri-snapping-controls__panel"},this.renderContent())};e.renderContent=function(){return[this.renderToggles(),this.renderLayerList()]};
e.renderToggles=function(){return c.tsx("calcite-block",{class:"esri-snapping-controls__toggle-block",heading:"",open:!0},this.renderEnabledToggle(),c.tsx("div",{class:"esri-snapping-controls__nested-container"},this.renderSelfEnabledToggle(),this.renderFeatureEnabledToggle()))};e.renderEnabledToggle=function(){if(this.visibleElements.enabledToggle){var {messages:{enableSnapping:a},viewModel:{snappingOptions:{enabled:b,enabledToggled:d}}}=this;return c.tsx("calcite-label",{layout:"inline-space-between"},
a,c.tsx("calcite-switch",{checked:b,disabled:d,bind:this,onCalciteSwitchChange:this._enableSnappingSwitchChange}))}};e.renderSelfEnabledToggle=function(){if(this.visibleElements.selfEnabledToggle){var {messages:{geometryGuides:a},viewModel:{snappingOptions:{enabled:b,selfEnabled:d,enabledToggled:f}}}=this;return c.tsx("calcite-label",{layout:"inline-space-between"},a,c.tsx("calcite-switch",{checked:d,disabled:f||!b,bind:this,onCalciteSwitchChange:this._selfEnabledSwitchChange}))}};e.renderFeatureEnabledToggle=
function(){if(this.visibleElements.featureEnabledToggle){var {messages:{featureToFeature:a},viewModel:{snappingOptions:{enabled:b,featureEnabled:d,enabledToggled:f}}}=this;return c.tsx("calcite-label",{layout:"inline-space-between"},a,c.tsx("calcite-switch",{checked:d,disabled:f||!b,bind:this,onCalciteSwitchChange:this._featureEnabledSwitchChange}))}};e.renderLayerList=function(){if(this.visibleElements.layerList){var {messages:a,messagesCommon:b}=this,d=({target:{value:f}})=>this._layerListFilter=
""===f?null:new RegExp(f,"i");d=9<this.viewModel.layerListViewModel.operationalItems.length?c.tsx("calcite-input",{class:"esri-snapping-controls__layer-list__filter",clearable:!0,placeholder:null==a?void 0:a.searchLayers,onCalciteInputInput:d}):null;return c.tsx("calcite-block",{"intl-collapse":null==b?void 0:b.collapse,"intl-expand":null==b?void 0:b.expand,heading:a.snappingLayers,class:"esri-snapping-controls__layer-list-block",open:!0,collapsible:!0},d,c.tsx("calcite-list",{class:"esri-snapping-controls__layer-list"},
this.renderLayerListItemCollection(this.viewModel.layerListViewModel.operationalItems,n.unwrap(this._layerListFilter))))}};e.renderLayerListItemCollection=function(a,b){return a.map(d=>{if(b?this._itemTitleMatchesFilter(d,b):1)return 0<d.children.length?this.renderLayerListItemGroup(d):this.renderLayerListItem(d);const f=d.children.filter(m=>this._itemTitleMatchesFilter(m,b));return 0<f.length?this.renderLayerListItemGroup(d,f):null}).toArray()};e.renderLayerListItem=function(a){var {messages:{untitledLayer:b}}=
this;b=a.title||b;const d=c.tsx("calcite-checkbox",{value:a.layer.id,checked:a.enabled,bind:this,onCalciteCheckboxChange:f=>this._handleLayerListItemChange(f.target)});return c.tsx("calcite-list-item",{key:`${this.id}-list-item-${a.uid}`,onclick:()=>{this._handleLayerListItemChange({checked:!d.properties.checked,value:d.properties.value})}},c.tsx("calcite-label",{class:"esri-snapping-controls__layer-list__item",slot:"content-start",tabIndex:-1,layout:"inline","disable-spacing":"true"},c.tsx("div",
{class:"esri-snapping-controls__layer-list__item__checkbox"},d),c.tsx("div",{class:"esri-snapping-controls__layer-list__item__label"},b)))};e.renderLayerListItemGroup=function(a,b){const d=a.title||this.messages.untitledLayer,f=a.title&&""!==a.title?a.title:x.generateUID();return c.tsx("calcite-list-item",{key:f},c.tsx("calcite-accordion",{"icon-position":"start",appearance:"transparent",afterCreate:m=>{m.append(...Array.from(m.children).map(q=>{q.remove();return q}))}},c.tsx("calcite-accordion-item",
{active:!!b,"item-title":d,key:a.uid},c.tsx("calcite-list",null,[...this.renderLayerListItemCollection(null!=b?b:a.children)]))))};e._enableSnappingSwitchChange=function(a){this.snappingOptions.enabled=a.target.checked};e._featureEnabledSwitchChange=function(a){this.snappingOptions.featureEnabled=a.target.checked};e._itemTitleMatchesFilter=function(a,b){return b.test(a.title)};e._selfEnabledSwitchChange=function(a){this.snappingOptions.selfEnabled=a.target.checked};e._handleLayerListItemChange=function(){var a=
r._asyncToGenerator(function*(b){b.checked?this.viewModel.enableSnappingForLayer(b.value):this.viewModel.disableSnappingForLayer(b.value)});return function(b){return a.apply(this,arguments)}}();r._createClass(p,[{key:"viewModel",set:function(a){if(a!==this._get("viewModel")){if(n.isNone(this._defaultViewModel)||this._defaultViewModel!==a)this._defaultViewModel=n.destroyMaybe(this._defaultViewModel);this._set("viewModel",a)}}}]);return p}(A);k.__decorate([l.property()],h.prototype,"_layerListFilter",
void 0);k.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0);k.__decorate([l.property(),u.messageBundle("esri/widgets/support/SnappingControls/t9n/SnappingControls")],h.prototype,"messages",void 0);k.__decorate([l.property(),u.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0);k.__decorate([t.aliasOf("viewModel.snappingOptions")],h.prototype,"snappingOptions",void 0);k.__decorate([t.aliasOf("viewModel.view")],h.prototype,
"view",void 0);k.__decorate([l.property()],h.prototype,"viewModel",null);k.__decorate([l.property()],h.prototype,"visibleElements",void 0);k.__decorate([y.cast("visibleElements")],h.prototype,"castVisibleElements",null);return h=k.__decorate([z.subclass("esri.widgets.support.SnappingControls")],h)});