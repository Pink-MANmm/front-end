// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./guid ./dom ./observers ./interactive ./icon".split(" "),function(e,b,h,d,k,l,m){function f(){"undefined"!==typeof customElements&&["calcite-tab-title","calcite-icon"].forEach(a=>{switch(a){case "calcite-tab-title":customElements.get(a)||customElements.define(a,g);break;case "calcite-icon":customElements.get(a)||m.defineCustomElement()}})}const g=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabsActivate=
b.createEvent(this,"calciteTabsActivate",7);this.calciteInternalTabsActivate=b.createEvent(this,"calciteInternalTabsActivate",7);this.calciteTabsFocusNext=b.createEvent(this,"calciteTabsFocusNext",7);this.calciteTabsFocusPrevious=b.createEvent(this,"calciteTabsFocusPrevious",7);this.calciteTabTitleRegister=b.createEvent(this,"calciteTabTitleRegister",7);this.bordered=this.disabled=this.active=!1;this.mutationObserver=k.createObserver("mutation",()=>this.updateHasText());this.hasText=!1;this.guid=
`calcite-tab-title-${h.guid()}`}activeTabChanged(){this.active&&this.emitActiveTab(!1)}connectedCallback(){this.setupTextContentObserver();this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var a,c;null===(a=this.mutationObserver)||void 0===a?void 0:a.disconnect();null===(c=document.body)||void 0===c?void 0:c.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))}componentWillLoad(){b.Build.isBrowser&&
this.updateHasText();this.tab&&this.active&&this.emitActiveTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered);!this.parentTabsEl&&this.parentTabNavEl&&(this.position=d.getElementProp(this.parentTabNavEl,"position",this.position),this.scale=d.getElementProp(this.parentTabNavEl,"scale",this.scale))}render(){const a=this.el.id||this.guid,c=this.bordered&&
!this.disabled&&"center"!==this.layout,n=b.h("calcite-icon",{class:"calcite-tab-title--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),p=b.h("calcite-icon",{class:"calcite-tab-title--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return b.h(b.Host,{"aria-controls":this.controls,"aria-expanded":d.toAriaBoolean(this.active),id:a,role:"tab"},b.h("a",{class:{container:!0,"container--has-text":this.hasText},
style:c&&{width:`${this.parentTabNavEl.indicatorWidth}px`}},this.iconStart?n:null,b.h("slot",null),this.iconEnd?p:null))}async componentDidLoad(){this.calciteTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){l.updateHostInteraction(this,!0)}internalTabChangeHandler(a){a.composedPath().find(c=>"CALCITE-TABS"===c.tagName)===this.parentTabsEl&&(this.tab?this.active=this.tab===a.detail.tab:this.getTabIndex().then(c=>{this.active=c===a.detail.tab}),a.stopPropagation())}onClick(){this.emitActiveTab()}keyDownHandler(a){switch(a.key){case " ":case "Enter":this.emitActiveTab();
a.preventDefault();break;case "ArrowRight":"ltr"===d.getElementDir(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case "ArrowLeft":"ltr"===d.getElementDir(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(a=[],c=[]){this.controls=
a[c.indexOf(this.el.id)]||null}updateHasText(){this.hasText=0<this.el.textContent.trim().length}setupTextContentObserver(){var a;null===(a=this.mutationObserver)||void 0===a?void 0:a.observe(this.el,{childList:!0,subtree:!0})}emitActiveTab(a=!0){if(!this.disabled){var c={tab:this.tab};this.calciteInternalTabsActivate.emit(c);a&&this.calciteTabsActivate.emit(c)}}get el(){return this}static get watchers(){return{active:["activeTabChanged"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{margin-right:1.25rem;display:block;-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout\x3dcenter]){margin-top:0px;margin-bottom:0px;margin-left:1.25rem;margin-right:1.25rem;text-align:center;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position\x3dbelow]) a{border-bottom-width:0px;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host([active]) a{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale\x3ds]){-webkit-margin-end:1rem;margin-inline-end:1rem}:host([scale\x3ds]) a,:host([scale\x3ds]) span{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale\x3dm]) a,:host([scale\x3dm]) span{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale\x3dl]){-webkit-margin-end:1.5rem;margin-inline-end:1.5rem}:host([scale\x3dl]) a,:host([scale\x3dl]) span{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-pack:center;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;padding-left:0px;padding-right:0px;padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;border-bottom-color:transparent;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([bordered]){-webkit-margin-end:0;margin-inline-end:0}:host([bordered][active]){-webkit-box-shadow:inset 0px -2px var(--calcite-ui-foreground-1);box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][active][position\x3dbelow]){-webkit-box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1);box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) a,:host([bordered]:focus) a,:host([bordered]:active) a{position:relative}:host([bordered]:hover) a{background-color:var(--calcite-button-transparent-hover);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([bordered]) a{border-bottom-style:unset}:host([bordered][position\x3dbelow]) a{border-top-style:unset}:host([active][bordered]) a{border-left:1px solid var(--calcite-ui-border-1);border-right:1px solid var(--calcite-ui-border-1)}:host([bordered]) a,:host([bordered]) span{padding-left:0.75rem;padding-right:0.75rem}:host([bordered][scale\x3ds]) a,:host([bordered][scale\x3ds]) span{padding-left:0.5rem;padding-right:0.5rem}:host([bordered][scale\x3dl]) a,:host([bordered][scale\x3dl]) span{padding-left:1rem;padding-right:1rem}"}},
[1,"calcite-tab-title",{active:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1537],scale:[1537],bordered:[1540],tab:[513],controls:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]);f();e.TabTitle=g;e.defineCustomElement=f});