// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./DeviceLocationFeed ./FeatureFenceParameters ./Geotrigger ./GeotriggerNotificationOptions ./support/typeUtils".split(" "),function(k,c,e,a,r,t,f,l,m,n,p,q,d){a=function(g){function h(b){b=g.call(this,b)||this;b.enterExitRule=
"enter-contains-and-exit-does-not-intersect";b.feed=null;b.feedAccuracyMode="use-geometry";b.fenceNotificationRule=null;b.fenceParameters=null;b.name=null;b.notificationOptions=null;b.type="fence";return b}k._inheritsLoose(h,g);return h}(p);c.__decorate([f.enumeration(d.enterExitRuleKebabDict)],a.prototype,"enterExitRule",void 0);c.__decorate([e.property({type:m,json:{write:{isRequired:!0}}})],a.prototype,"feed",void 0);c.__decorate([f.enumeration(d.feedAccuracyModeKebabDict)],a.prototype,"feedAccuracyMode",
void 0);c.__decorate([e.property({type:d.fenceNotificationRuleKebabDict.apiValues,json:{type:d.fenceNotificationRuleKebabDict.jsonValues,read:d.fenceNotificationRuleKebabDict.read,write:{writer:d.fenceNotificationRuleKebabDict.write,isRequired:!0}}})],a.prototype,"fenceNotificationRule",void 0);c.__decorate([e.property({type:n,json:{write:{isRequired:!0}}})],a.prototype,"fenceParameters",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([e.property({type:q,
json:{write:!0}})],a.prototype,"notificationOptions",void 0);c.__decorate([f.enumeration({fence:"fence"},{readOnly:!0})],a.prototype,"type",void 0);return a=c.__decorate([l.subclass("esri.webdoc.geotriggersInfo.FenceGeotrigger")],a)});