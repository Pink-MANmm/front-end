/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{h as t}from"../core/lang.js";import{O as e}from"./ArrayPool.js";var s;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(s||(s={}));const i=new TextDecoder("utf-8"),r=t("safari")||t("ios")?6:t("ff")?12:32;class n{constructor(t,e,i=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=s.unknown,this._init(t,e,i,r)}_init(t,e,s,i){this._data=t,this._dataView=e,this._pos=s,this._end=i}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+4294967296*t.getUint32(e+4,!0);return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+4294967296*t.getInt32(e+4,!0);return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,s=this._toString(this._data,e,e+t);return this._skip(t),s}getBytes(){const t=this._getLength(),e=this._pos,s=this._toBytes(this._data,e,e+t);return this._skip(t),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,s,i){const r=this.getMessage(),n=t(r,e,s,i);return r.release(),n}processMessage(t){const e=this.getMessage(),s=t(e);return e.release(),s}getMessage(){const t=this._getLength(),e=n.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){n.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case s.varint:this._decodeVarint();break;case s.fixed64:this._skip(8);break;case s.delimited:this._skip(this._getLength());break;case s.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e,s=this._pos,i=0;if(this._end-s>=10)do{if(e=t[s++],i|=127&e,0==(128&e))break;if(e=t[s++],i|=(127&e)<<7,0==(128&e))break;if(e=t[s++],i|=(127&e)<<14,0==(128&e))break;if(e=t[s++],i|=(127&e)<<21,0==(128&e))break;if(e=t[s++],i+=268435456*(127&e),0==(128&e))break;if(e=t[s++],i+=34359738368*(127&e),0==(128&e))break;if(e=t[s++],i+=4398046511104*(127&e),0==(128&e))break;if(e=t[s++],i+=562949953421312*(127&e),0==(128&e))break;if(e=t[s++],i+=72057594037927940*(127&e),0==(128&e))break;if(e=t[s++],i+=0x8000000000000000*(127&e),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;s!==this._end&&(e=t[s],0!=(128&e));)++s,i+=(127&e)*r,r*=128;if(s===this._end)throw new Error("Varint overrun!");++s,i+=e*r}return this._pos=s,i}_decodeSVarint(){const t=this._decodeVarint();return t%2?-(t+1)/2:t/2}_getLength(){if(this._dataType!==s.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,s){if((s=Math.min(this._end,s))-e>r){const r=t.subarray(e,s);return i.decode(r)}let n="",a="";for(let i=e;i<s;++i){const e=t[i];128&e?a+="%"+e.toString(16):(n+=decodeURIComponent(a)+String.fromCharCode(e),a="")}return a.length&&(n+=decodeURIComponent(a)),n}_toBytes(t,e,s){return s=Math.min(this._end,s),new Uint8Array(t.buffer,e,s-e)}}n.pool=new e(n,null,(t=>{t._data=null,t._dataView=null}));export{n as P};
