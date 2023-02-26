/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../core/Evented.js";import{O as t}from"../core/Collection.js";import{s}from"./watch.js";class r extends e{constructor(){super(...arguments),this._set=new Set}clear(){if(this._set.size>0){const e=this.toArray();this._set.clear(),this.emit("after-changes",{type:t.REMOVE}),this.emit("change",{added:[],removed:e})}}get length(){return this._set.size}addMany(e){if(0!==e.length){for(const t of e)this._set.add(t);this.emit("after-changes",{type:t.ADD}),this.emit("change",{added:e,removed:[]})}}remove(e){this._set.delete(e)&&(this.emit("after-changes",{type:t.REMOVE}),this.emit("change",{added:[],removed:[e]}))}removeMany(e){const s=[];for(const t of e)this._set.delete(t)&&s.push(t);s.length>0&&(this.emit("after-changes",{type:t.REMOVE}),this.emit("change",{added:[],removed:s}))}toArray(){return[...this._set]}find(e){let t;return s(this._set,(s=>!!e(s)&&(t=s,!0))),t}forEach(e){this._set.forEach((t=>e(t)))}}export{r as E};