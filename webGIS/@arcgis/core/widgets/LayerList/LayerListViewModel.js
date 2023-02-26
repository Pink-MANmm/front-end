/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import t from"../../core/Evented.js";import i from"../../core/Handles.js";import{watch as r,initial as o}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import c from"./ListItem.js";import{e as l,b as m}from"../../chunks/layerListUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/maybe.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/shared.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/SimpleObservable.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/metadata.js";import"../../chunks/watch.js";import"../../core/HandleOwner.js";import"../../chunks/Identifiable.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"./ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/number2.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const p=s.ofType(c);let h=class extends t.EventedAccessor{constructor(e){super(e),this._handles=new i,this.listItemCreatedFunction=null,this.operationalItems=new p,this.view=null}initialize(){this._handles.add([r((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),o),r((()=>this.listItemCreatedFunction),(()=>this._listItemCreatedFunctionChanged()))],"view")}destroy(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,s){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:s})}moveListItem(e,s,t,i){const r=e?.layer;if(!r)return;const o=this.view?.map?.layers,a=s?l(s):o,n=t?l(t):o;if(!a||!n)return;const{operationalItems:c}=this,m=s?.children||c,p=t?.children||c,h=n.length-i;e.parent=t||null,m.includes(e)&&m.remove(e),a.includes(r)&&a.remove(r),p.includes(e)||p.add(e,h),n.includes(r)||n.add(r,h)}_createLayerViewHandles(e){const{_handles:s}=this;s.remove("layer-views"),this._compileList(),e&&s.add(e.on("change",(()=>this._compileList())),"layer-views")}_createMapLayerHandles(e){const{_handles:s}=this;s.remove("map-layers"),this._compileList(),e&&s.add(e.on("change",(()=>this._compileList())),"map-layers")}_createListItem(e){const{view:s,listItemCreatedFunction:t}=this;return new c({layer:e,listItemCreatedFunction:t,view:s})}_removeAllItems(){const{_handles:e,operationalItems:s}=this;s.forEach((s=>{e.remove(`children-${s.uid}`)})),s.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==m(e)))}_watchLayersListMode(e){const{_handles:s}=this;s.remove("layer-list-mode"),e&&e.forEach((e=>{"listMode"in e&&s.add(r((()=>e.listMode),(()=>this._compileList())),"layer-list-mode")}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const s=this._getViewableLayers(e);s&&s.length?(this._createNewItems(s),this._removeItems(s),this._sortItems(s)):this._removeAllItems()}_createNewItems(e){const{operationalItems:s}=this;e.forEach((e=>{s.find((s=>s.layer===e))||s.add(this._createListItem(e))}))}_removeItems(e){const{_handles:s,operationalItems:t}=this,i=[];t.forEach((t=>{t&&e&&e.includes(t.layer)||(s.remove(`children-${t.uid}`),i.push(t))})),t.removeMany(i)}_sortItems(e){const{operationalItems:s}=this;s.sort(((s,t)=>{const i=e.indexOf(s.layer),r=e.indexOf(t.layer);return i>r?-1:i<r?1:0}))}_listItemCreatedFunctionChanged(){this._removeAllItems(),this._compileList()}_viewHandles(){const{_handles:e,view:s}=this;e.remove(["map-layers","layer-views","view-layers"]),this._compileList(),s&&s.ready&&e.add([r((()=>this.view?.map?.allLayers),(e=>this._createMapLayerHandles(e)),o),r((()=>this.view?.allLayerViews),(e=>this._createLayerViewHandles(e)),o)],"view-layers")}};e([a()],h.prototype,"listItemCreatedFunction",void 0),e([a({type:p})],h.prototype,"operationalItems",void 0),e([a({readOnly:!0})],h.prototype,"state",null),e([a()],h.prototype,"view",void 0),h=e([n("esri.widgets.LayerList.LayerListViewModel")],h);const d=h;export{d as default};
