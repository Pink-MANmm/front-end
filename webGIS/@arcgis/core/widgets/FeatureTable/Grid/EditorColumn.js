/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import i from"./Column.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../core/Evented.js";import"../../../core/Accessor.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/HandleOwner.js";import"../../../core/Handles.js";import"../../../core/Collection.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../core/reactiveUtils.js";import"./support/ButtonMenu.js";import"../../../core/accessorSupport/decorators/aliasOf.js";import"../../Widget.js";import"../../../intl.js";import"../../../chunks/number2.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/assets.js";import"../../../chunks/domUtils.js";import"../../../core/Promise.js";import"../../../chunks/uuid.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/projector.js";import"../../../chunks/widgetUtils.js";import"../../../chunks/jsxWidgetSupport.js";import"./support/ButtonMenuViewModel.js";import"./support/ButtonMenuItem.js";import"../../../chunks/Popover.js";import"../../../chunks/jsxFactory.js";let n=class extends i{constructor(t){super(t),this.activeEditInfo=null,this.cellValueValidatorFunction=({oldValue:t,value:o})=>t!==o,this.editable=!1,this.inputRenderFunction=({root:t,column:o,rowData:e})=>{if(this.activeEditInfo?.updating)return;if(!this.editable)return;const i=this.getCellValue(o,e),n=this.createInputElement({root:t,column:o,rowData:e,value:i});this._set("activeEditInfo",{column:o,input:n,root:t,rowData:e,updating:!0,oldValue:i});const s=this.createInputContainer();s.appendChild(n),this.removeCellContent(t),t.appendChild(s),n.focus(),n instanceof HTMLInputElement&&n.select(),this.grid?.notifyResize()},this.loadingMessage="",this.inputType="text",this.maxLength=null,this.parseInputValueFunction=({input:t})=>t.value,this.renderFunction=t=>{const{root:o,column:e,rowData:i}=t,{activeEditInfo:n}=this;if(n&&n.updating)return;const s=this.getCellValue(e,i),r=this.cellValueFormatFunction({column:e,rowData:i,value:s});o.onclick=()=>o.focus(),o.ondblclick=()=>this.inputRenderFunction(t),o.ontouchend=()=>this.inputRenderFunction(t);const u=this.grid?.getSlotElementByName(o.slot),c=u?.parentElement;c&&!c.onkeydown&&(c.onkeydown=o=>{"Enter"!==o.key||this.activeEditInfo||this.inputRenderFunction(t),"Escape"===o.key&&this.activeEditInfo&&this.cancel()}),r?.toString()!==o.innerHTML&&(o.innerHTML=r)},this.required=!1,this.store=null,this.updateRowItemFunction=({rowData:t,column:o,value:e})=>{t.item[o.path]=e},this.updateStoreItemFunction=({rowData:t,column:o,value:e})=>this.store?.updateItem({index:t.index,name:o.path,value:e})}cancel(){const{activeEditInfo:t}=this;if(!t)return;const{column:o,root:e,rowData:i,oldValue:n}=t;this._set("activeEditInfo",null);const s=this.cellValueFormatFunction({column:o,rowData:i,value:n});e.innerHTML=s,this.grid?.notifyResize()}createInputContainer(){const t=document.createElement("div");return t.classList.add("esri-editor-column__cell-input--container"),t}createInputElement({value:t}){const o=document.createElement("input");return o.classList.add("esri-editor-column__cell-input"),o.maxLength=this.maxLength,o.type=this.inputType,o.value=t,o.onblur=()=>{o.onblur=null,this.submit()},o}async submit(){const{activeEditInfo:t}=this;if(!t)return;const{column:o,input:e,root:i,rowData:n,oldValue:s}=t,r=this.parseInputValueFunction({input:e,column:o,rowData:n});if(this.cellValueValidatorFunction({value:r,oldValue:s,column:o,rowData:n})){i.innerHTML=this.loadingMessage,this.grid?.notifyResize();try{await this.updateStoreItemFunction({rowData:n,column:o,value:r}),this.updateRowItemFunction({rowData:n,column:o,value:r});const t=this.getCellValue(o,n),e=this.cellValueFormatFunction({column:o,rowData:n,value:t});i.innerHTML=e,this.emit("value-change",{column:o,rowData:n,value:t}),this._set("activeEditInfo",null),this.grid?.notifyResize()}catch(t){this.cancel()}}else this.cancel()}};t([o({readOnly:!0})],n.prototype,"activeEditInfo",void 0),t([o()],n.prototype,"cellValueValidatorFunction",void 0),t([o()],n.prototype,"editable",void 0),t([o()],n.prototype,"inputRenderFunction",void 0),t([o({constructOnly:!0})],n.prototype,"loadingMessage",void 0),t([o()],n.prototype,"inputType",void 0),t([o()],n.prototype,"maxLength",void 0),t([o()],n.prototype,"parseInputValueFunction",void 0),t([o()],n.prototype,"renderFunction",void 0),t([o()],n.prototype,"required",void 0),t([o()],n.prototype,"store",void 0),t([o()],n.prototype,"updateRowItemFunction",void 0),t([o()],n.prototype,"updateStoreItemFunction",void 0),n=t([e("esri.widgets.FeatureTable.Grid.EditorColumn")],n);const s=n;export{s as default};
