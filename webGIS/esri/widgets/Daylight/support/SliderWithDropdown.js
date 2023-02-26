// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/events ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Slider ./SliderWithDropdownViewModel ../../support/Popover ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(n,f,p,k,q,g,e,w,x,r,t,u,v,y,h){e=function(l){function m(a,
b){var c=l.call(this,a,b)||this;c.viewModel=new u.SliderWithDropdownViewModel;c.buttonTooltip="";c.showDropDown=!0;c.currentIndex=0;c._dropdownAnchor=null;c._dropdownElement=null;c._popover=new v({owner:n._assertThisInitialized(c),placement:"bottom-start",anchorElement:()=>k.unwrap(c._dropdownAnchor),renderContentFunction:()=>c._renderPopover()});return c}n._inheritsLoose(m,l);var d=m.prototype;d.initialize=function(){this.own(q.watch(()=>this.viewModel.isDropdownOpen,a=>{this._popover.open=a},q.initial))};
d.destroy=function(){this._popover.destroy()};d.renderThumbLabel=function(a){return h.tsx("div",{class:this.classes("esri-slider-with-dropdown__box","esri-slider__label",{["esri-slider-with-dropdown__box--drop-down-on"]:this.showDropDown,["esri-slider-with-dropdown__box--drop-down-off"]:!this.showDropDown})},l.prototype.renderThumbLabel.call(this,a),this.showDropDown&&h.tsx("div",{bind:this,afterCreate:this._onDropdownAnchorAfterCreate,class:"esri-slider-with-dropdown__dropdown-root"},h.tsx("button",
{class:this.classes("esri-interactive"," esri-widget__anchor esri-slider-with-dropdown__anchor",this.isDropdownOpen?"esri-slider-with-dropdown__anchor--open":"esri-slider-with-dropdown__anchor--closed"),bind:this,disabled:this.disabled,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen.toString(),"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":"")))};d._onDropdownAnchorAfterCreate=
function(a){this._dropdownAnchor=a};d._renderPopover=function(){return h.tsx("ol",{role:"listbox",afterCreate:this._onDropdownAfterCreate,"aria-label":this.buttonTooltip,bind:this,class:this.classes("esri-slider-with-dropdown__list"),tabindex:"-1",onkeydown:this._onDropdownKeyDown,onfocusout:this._onDropdownFocusOut,onpointerdown:this._killEvent},this.items.map((a,b)=>h.tsx("li",{class:b===this.currentIndex?this.classes("esri-interactive","esri-slider-with-dropdown__list-item","esri-slider-with-dropdown__list-item--selected"):
this.classes("esri-interactive","esri-slider-with-dropdown__list-item"),bind:this,onclick:this._onDropdownItemClick,"data-result":b,"aria-label":a.label.join(" "),role:"option","aria-selected":(b===this.currentIndex).toString(),onkeydown:this._onLiKeyDown,tabindex:"0"},a.label.map(c=>h.tsx("span",{bind:this},c)))))};d._onDropdownAfterCreate=function(a){var b;this._dropdownElement=a;a=null!=(b=a.querySelector(".esri-slider-with-dropdown__list-item--selected"))?b:a.firstChild;k.isSome(a)&&a instanceof
HTMLElement&&(a.scrollIntoView(),a.focus())};d._onAnchorClick=function(){if(this.disabled)return!1;this.viewModel.toggle();return!0};d._onDropdownItemClick=function(a){this.viewModel.selectItem(a.currentTarget["data-result"])};d._onDropdownFocusOut=function(a){a=a.relatedTarget;null===a&&(a=document.activeElement);k.isSome(this._dropdownElement)&&!this._dropdownElement.contains(a)&&k.isSome(this._dropdownAnchor)&&!this._dropdownAnchor.contains(a)&&(this.viewModel.isDropdownOpen=!1)};d._killEvent=
function(a){a.stopPropagation();return!0};d._onDropdownKeyDown=function(a){a.stopPropagation();"Escape"===p.eventKey(a)&&(this.viewModel.isDropdownOpen=!1)};d._onLiKeyDown=function(a){const b=a.target;switch(p.eventKey(a)){case "ArrowUp":b.previousElementSibling&&b.previousElementSibling.focus();break;case "ArrowDown":b.nextElementSibling&&b.nextElementSibling.focus();break;case "Enter":b.click()}};return m}(t);f.__decorate([g.property()],e.prototype,"viewModel",void 0);f.__decorate([g.property()],
e.prototype,"buttonTooltip",void 0);f.__decorate([g.property()],e.prototype,"showDropDown",void 0);f.__decorate([g.property({aliasOf:"viewModel.items"})],e.prototype,"items",void 0);f.__decorate([g.property({aliasOf:"viewModel.currentIndex"})],e.prototype,"currentIndex",void 0);f.__decorate([g.property({aliasOf:"viewModel.currentItem"})],e.prototype,"currentItem",void 0);f.__decorate([g.property({aliasOf:"viewModel.isDropdownOpen"})],e.prototype,"isDropdownOpen",void 0);return e=f.__decorate([r.subclass("esri.widgets.Daylight.SliderWithDropdown")],
e)});