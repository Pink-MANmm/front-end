// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/jsonMap"],function(b,c){b.RuleType=void 0;var a=b.RuleType||(b.RuleType={});a[a.RTJunctionJunctionConnectivity=1]="RTJunctionJunctionConnectivity";a[a.RTContainment=2]="RTContainment";a[a.RTAttachment=3]="RTAttachment";a[a.RTJunctionEdgeConnectivity=4]="RTJunctionEdgeConnectivity";a[a.RTEdgeJunctionEdgeConnectivity=5]="RTEdgeJunctionEdgeConnectivity";a=new c.JSONMap({connected:"connected",upstream:"upstream",downstream:"downstream",shortestPath:"shortest-path",subnetwork:"subnetwork",
subnetworkController:"subnetwork-controller",loops:"loops",isolation:"isolation"});c=new c.JSONMap({connectivity:"connectivity",attachment:"attachment",containment:"containment",junctionEdgeFromConnectivity:"junction-edge-from-connectivity",junctionMidspanConnectivity:"junction-midspan-connectivity",junctionEdgeToConnectivity:"junction-edge-to-connectivity"});b.associationTypeKebabDict=c;b.traceTypeKebabDict=a;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});