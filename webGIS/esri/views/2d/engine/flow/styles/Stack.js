// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(g,h){let m=function(){function d(a){this._styles=a}var e=d.prototype;e.isCompatible=function(a){if(!(a instanceof d)||this._styles.length!==a._styles.length)return!1;const b=this._styles.length;for(let c=0;c<b;c++)if(!this._styles[c].isCompatible(a._styles[c]))return!1;return!0};e.load=function(){var a=h._asyncToGenerator(function*(b,c){const f=yield Promise.all(this._styles.map(l=>l.load(b,c)));return new k(f)});return function(b,
c){return a.apply(this,arguments)}}();e.render=function(a,b,c){for(let f=0;f<this._styles.length;f++)this._styles[f].render(a,b,c.resources[f])};h._createClass(d,[{key:"animated",get:function(){return this._styles.reduce((a,b)=>a||b.animated,!1)}}]);return d}(),k=function(){function d(a){this.resources=a}var e=d.prototype;e.attach=function(a){for(const b of this.resources)b.attach(a)};e.detach=function(){for(const a of this.resources)a.detach()};h._createClass(d,[{key:"ready",get:function(){return this.resources.reduce((a,
b)=>a&&b.ready,!0)}}]);return d}();g.StackResources=k;g.default=m;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});