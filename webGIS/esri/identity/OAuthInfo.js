// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,l,m,n,k){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b._oAuthCred=null;b.appId=null;b.authNamespace="/";b.expiration=20160;b.flowType="auto";b.forceLogin=!1;b.forceUserId=!1;b.locale=null;b.minTimeUntilExpiration=30;b.popup=
!1;b.popupCallbackUrl="oauth-callback.html";b.popupWindowFeatures="height\x3d490,width\x3d800,resizable,scrollbars,status";b.portalUrl="https://www.arcgis.com";b.preserveUrlHash=!1;b.userId=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return e.fromJSON(this.toJSON())};return f}(a.JSONSupport);c.__decorate([d.property({json:{write:!0}})],a.prototype,"appId",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"authNamespace",void 0);c.__decorate([d.property({json:{write:!0}})],
a.prototype,"expiration",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"flowType",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"forceLogin",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"forceUserId",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"locale",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"minTimeUntilExpiration",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"popup",void 0);
c.__decorate([d.property({json:{write:!0}})],a.prototype,"popupCallbackUrl",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"popupWindowFeatures",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"portalUrl",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"preserveUrlHash",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"userId",void 0);return a=e=c.__decorate([k.subclass("esri.identity.OAuthInfo")],a)});