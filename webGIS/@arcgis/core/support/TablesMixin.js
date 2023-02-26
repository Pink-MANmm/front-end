/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../core/Collection.js";import{r as e}from"../chunks/collectionUtils.js";import{L as r}from"../chunks/Logger.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";const n=r.getLogger("esri.support.TablesMixin");function p(t,s,e){if(t)for(let r=0,o=t.length;r<o;r++){const o=t.getItemAt(r);if(o[s]===e)return o;if("group"===o?.type){const t=p(o.tables,s,e);if(t)return t}}}const c=r=>{let c=class extends r{constructor(...t){super(...t),this.tables=new s,this.tables.on("after-add",(t=>{const s=t.item;s.parent&&s.parent!==this&&"tables"in s.parent&&s.parent.tables.remove(s),s.parent=this,"feature"!==s.type&&n.error(`Layer 'title:${s.title}, id:${s.id}' of type '${s.type}' is not supported as a table and will therefore be ignored.`)})),this.tables.on("after-remove",(t=>{t.item.parent=null}))}destroy(){const t=this.tables.removeAll();for(const s of t)s.destroy();this.tables.destroy()}set tables(t){this._set("tables",e(t,this._get("tables")))}findTableById(t){return p(this.tables,"id",t)}findTableByUid(t){return p(this.tables,"uid",t)}};return t([o()],c.prototype,"tables",null),c=t([i("esri.support.TablesMixin")],c),c};export{c as TablesMixin};
