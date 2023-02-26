// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./observers"],function(h,c,f,m){function k(){"undefined"!==typeof customElements&&["calcite-tab-nav"].forEach(a=>{switch(a){case "calcite-tab-nav":customElements.get(a)||customElements.define(a,l)}})}const l=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabChange=c.createEvent(this,"calciteTabChange",7);this.calciteInternalTabChange=c.createEvent(this,"calciteInternalTabChange",7);
this.scale="m";this.layout="inline";this.position="below";this.bordered=!1;this.animationActiveDuration=.3;this.resizeObserver=m.createObserver("resize",()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateActiveWidth();this.updateOffsetPosition()});this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateOffsetPosition()}}async selectedTabChanged(){localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,
JSON.stringify(this.selectedTab));this.calciteInternalTabChange.emit({tab:this.selectedTab});this.selectedTabEl=await this.getTabTitleById(this.selectedTab)}selectedTabElChanged(){this.updateOffsetPosition();this.updateActiveWidth();this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){var a;this.parentTabsEl=this.el.closest("calcite-tabs");null===(a=this.resizeObserver)||void 0===a?void 0:a.observe(this.el)}disconnectedCallback(){var a;null===(a=this.resizeObserver)||
void 0===a?void 0:a.disconnect()}componentWillLoad(){const a=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(a)&&(this.selectedTab=JSON.parse(localStorage.getItem(a)))}componentWillRender(){const {parentTabsEl:a}=this;this.layout=null===a||void 0===a?void 0:a.layout;this.position=null===a||void 0===a?void 0:a.position;this.scale=null===a||void 0===a?void 0:a.scale;this.bordered=null===a||void 0===a?void 0:a.bordered;this.selectedTabEl&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&
this.tabTitles.every(a=>!a.active)&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then(a=>{this.calciteInternalTabChange.emit({tab:a})})}render(){const a=f.getElementDir(this.el),b=`${this.indicatorWidth}px`,e=`${this.indicatorOffset}px`;return c.h(c.Host,{role:"tablist"},c.h("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:d=>this.tabNavEl=d},c.h("div",{class:"tab-nav-active-indicator-container",ref:d=>this.activeIndicatorContainerEl=d},c.h("div",{class:"tab-nav-active-indicator",
ref:d=>this.activeIndicatorEl=d,style:"rtl"!==a?{width:b,left:e}:{width:b,right:e}})),c.h("slot",null)))}focusPreviousTabHandler(a){const b=this.getIndexOfTabTitle(a.target,this.enabledTabTitles);(this.enabledTabTitles[b-1]||this.enabledTabTitles[this.enabledTabTitles.length-1]).focus();a.stopPropagation();a.preventDefault()}focusNextTabHandler(a){const b=this.getIndexOfTabTitle(a.target,this.enabledTabTitles);(this.enabledTabTitles[b+1]||this.enabledTabTitles[0]).focus();a.stopPropagation();a.preventDefault()}internalActivateTabHandler(a){this.selectedTab=
a.detail.tab?a.detail.tab:this.getIndexOfTabTitle(a.target);a.stopPropagation();a.preventDefault()}activateTabHandler(a){this.calciteTabChange.emit({tab:this.selectedTab});a.stopPropagation();a.preventDefault()}updateTabTitles(a){a.target.active&&(this.selectedTab=a.detail)}globalInternalTabChangeHandler(a){this.syncId&&a.target!==this.el&&a.target.syncId===this.syncId&&this.selectedTab!==a.detail.tab&&(this.selectedTab=a.detail.tab,a.stopPropagation())}updateOffsetPosition(){var a,b,e,d,g;const n=
f.getElementDir(this.el),p=null===(a=this.activeIndicatorContainerEl)||void 0===a?void 0:a.offsetWidth;a=null===(b=this.selectedTabEl)||void 0===b?void 0:b.offsetLeft;b=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetWidth;this.indicatorOffset="rtl"!==n?a-(null===(d=this.tabNavEl)||void 0===d?NaN:d.scrollLeft):p-(a+b)+(null===(g=this.tabNavEl)||void 0===g?void 0:g.scrollLeft)}updateActiveWidth(){var a;this.indicatorWidth=null===(a=this.selectedTabEl)||void 0===a?void 0:a.offsetWidth}getIndexOfTabTitle(a,
b=this.tabTitles){return b.indexOf(a)}async getTabTitleById(a){return Promise.all(this.tabTitles.map(b=>b.getTabIdentifier())).then(b=>this.tabTitles[b.indexOf(a)])}get tabTitles(){return f.filterDirectChildren(this.el,"calcite-tab-title")}get enabledTabTitles(){return f.filterDirectChildren(this.el,"calcite-tab-title:not([disabled])")}get el(){return this}static get watchers(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex}:host([scale\x3ds]){min-height:1.5rem}:host([scale\x3dm]){min-height:2rem}:host([scale\x3dl]){min-height:2.75rem}.tab-nav{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:start;justify-content:flex-start;overflow:auto}:host([layout\x3dcenter]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{position:absolute;left:0px;right:0px;bottom:0px;height:0.125rem;width:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;bottom:0px;display:block;height:0.125rem;background-color:var(--calcite-ui-brand);-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position\x3dbelow]) .tab-nav-active-indicator{bottom:unset;top:0px}:host([position\x3dbelow]) .tab-nav-active-indicator-container{bottom:unset;top:0px}:host([bordered]) .tab-nav-active-indicator-container{bottom:unset}:host([bordered][position\x3dbelow]) .tab-nav-active-indicator-container{bottom:0;top:unset}"}},
[1,"calcite-tab-nav",{storageId:[1,"storage-id"],syncId:[1,"sync-id"],scale:[1537],layout:[1537],position:[1537],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTab:[32],selectedTabEl:[32]},[[0,"calciteTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsActivate","internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteTabTitleRegister","updateTabTitles"],
[16,"calciteInternalTabChange","globalInternalTabChangeHandler"]]]);k();h.TabNav=l;h.defineCustomElement=k});