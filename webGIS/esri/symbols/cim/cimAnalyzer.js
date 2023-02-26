// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../core/lang ../../core/Logger ../../core/maybe ../../core/screenUtils ../../core/string ../../support/arcadeOnDemand ./CIMSymbolHelper ./enums ./SDFHelper ./utils ./effects/CIMEffectHelper ../../views/2d/arcade/callExpressionWithFeature ../../views/2d/engine/webgl/definitions ../../views/2d/engine/webgl/fontUtils ../../views/2d/engine/webgl/grouping".split(" "),function(Z,sa,ta,aa,ua,Q,ja,D,S,E,N,W,u,ka,T,va,wa,xa){function ba(a){switch(a){case "Butt":return N.CapType.BUTT;
case "Square":return N.CapType.SQUARE;default:return N.CapType.ROUND}}function ca(a){switch(a){case "Bevel":return N.JoinType.BEVEL;case "Miter":return N.JoinType.MITER;default:return N.JoinType.ROUND}}function ya(a){switch(a){default:return"left";case "Right":return"right";case "Center":return"center";case "Justify":return da.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function za(a){switch(a){default:return"top";case "Center":return"middle";
case "Baseline":return"baseline";case "Bottom":return"bottom"}}function Aa(a){let k="",d="";a&&(a=a.toLowerCase(),a.includes("italic")?k="italic":a.includes("oblique")&&(k="oblique"),a.includes("bold")?d="bold":a.includes("light")&&(d="lighter"));return{style:k,weight:d}}function la(a,k,d,f){let b;a[k]?b=a[k]:(b={},a[k]=b);b[d]=f}function ma(a){return(a=a.markerPlacement)&&a.angleToLine?N.Alignment.MAP:N.Alignment.SCREEN}function ea(){ea=sa._asyncToGenerator(function*(a,k,d,f,b){f=null!=f?f:[];if(!a)return f;
let e;const h={};if("CIMSymbolReference"===a.type){if(e=a.symbol,a=a.primitiveOverrides){var c=[];for(const m of a){var g=m.valueExpressionInfo;g&&k?(g=S.createRendererExpression(g.expression,k.spatialReference,k.fields).then(q=>{q&&la(h,m.primitiveName,m.propertyName,q)}),c.push(g)):null!=m.value&&la(h,m.primitiveName,m.propertyName,m.value)}0<c.length&&(yield Promise.all(c))}}else return da.error("Expect cim type to be 'CIMSymbolReference'"),f;c=[];na(e,d,c);0<c.length&&(yield Promise.all(c));switch(e.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":Ba(e,
a,h,k,f,d,b)}return f});return ea.apply(this,arguments)}function Ba(a,k,d,f,b,e,h){if(a){var c=a.symbolLayers;if(c){var g=a.effects,m=E.CIMSymbolHelper.getSize(a);if("CIMPointSymbol"===a.type&&"Map"===a.angleAlignment)var q=N.Alignment.MAP;for(var w=c.length;w--;){var l=c[w];if(!l||!1===l.enable)continue;let z;g&&g.length&&(z=[...g]);var r=l.effects;r&&r.length&&(g?z.push(...r):z=[...r]);r=[];E.OverrideHelper.findEffectOverrides(z,k,r);r=0<r.length?Ca(z,r,d,f):z;var v=[];E.OverrideHelper.findApplicableOverrides(l,
k,v);switch(l.type){case "CIMSolidFill":Da(l,r,d,v,f,b);break;case "CIMPictureFill":Ea(l,r,d,v,f,e,b);break;case "CIMHatchFill":Fa(l,r,d,v,f,b);break;case "CIMGradientFill":{var t=d,p=f,y=b;const [G,O]=K(v,l.primitiveName,r,null,null);var x=D.numericHash(JSON.stringify(l)+O).toString();y.push({type:"fill",templateHash:x,materialHash:G?U(x,t,v,p):x,cim:l,materialOverrides:null,colorLocked:l.colorLocked,effects:r,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,
sampleAlphaOnly:!1})}break;case "CIMSolidStroke":Ga(l,r,d,v,f,b,"CIMPolygonSymbol"===a.type,m);break;case "CIMPictureStroke":Ha(l,r,d,v,f,b,"CIMPolygonSymbol"===a.type,m);break;case "CIMGradientStroke":{t=d;p=f;y=b;x="CIMPolygonSymbol"===a.type;var B=m,A=l.primitiveName,I=void 0!==l.width?l.width:4,F=ba(l.capStyle),C=ca(l.joinStyle),H=l.miterLimit;const [G,O]=K(v,A,r,null,null),L=D.numericHash(JSON.stringify(l)+O).toString();y.push({type:"line",templateHash:L,materialHash:G?U(L,t,v,p):L,cim:l,materialOverrides:null,
isOutline:x,colorLocked:l.colorLocked,effects:r,color:{r:128,g:128,b:128,a:1},width:n(A,t,"Width",p,I),cap:n(A,t,"CapStyle",p,F),join:n(A,t,"JoinStyle",p,C),miterLimit:n(A,t,"MiterLimit",p,H),referenceWidth:B,zOrder:fa(l.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}break;case "CIMCharacterMarker":ha(l,r,d,v,f,b);break;case "CIMPictureMarker":if(ha(l,r,d,v,f,b))break;"CIMLineSymbol"===a.type&&(q=ma(l));Ia(l,r,d,v,f,e,b,q,m);break;case "CIMVectorMarker":if(ha(l,r,d,v,f,b))break;"CIMLineSymbol"===
a.type&&(q=ma(l));t=d;p=f;y=b;x=e;B=q;A=m;I=h;if(C=l.markerGraphics){F=0;l.scaleSymbolsProportionally&&(H=l.frame)&&(F=H.ymax-H.ymin);H=oa(l.markerPlacement,v,t,p);for(const G of C)if(G&&(C=G.symbol))switch(C.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":Ja(l,r,H,null,G,v,t,p,y,x,B,A,F,I);break;case "CIMTextSymbol":Ka(l,r,H,G,t,v,p,y,B,A,F)}}break;default:da.error("Cannot analyze CIM layer",l.type)}}}}}function Da(a,k,d,f,b,e){const h=a.primitiveName,c=u.fromCIMColor(a.color),
[g,m]=K(f,h,k,null,null),q=D.numericHash(JSON.stringify(a)+m).toString();e.push({type:"fill",templateHash:q,materialHash:g?()=>q:q,cim:a,materialOverrides:null,colorLocked:a.colorLocked,color:n(h,d,"Color",b,c,M),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:k,applyRandomOffset:!1,sampleAlphaOnly:!0})}function Ea(a,k,d,f,b,e,h){const c=a.primitiveName,g=a.tintColor?u.fromCIMColor(a.tintColor):{r:255,g:255,b:255,a:1},[m,q]=K(f,c,k,null,null);f=D.numericHash(JSON.stringify(a)+q).toString();
const w=D.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString();let l=u.getValue(a.scaleX);if("width"in a){const r=a.width;let v=1;e=e.getResource(a.url);Q.isSome(e)&&(v=e.width/e.height);l/=a.height/r*v}h.push({type:"fill",templateHash:f,materialHash:m?()=>w:w,cim:a,materialOverrides:null,colorLocked:a.colorLocked,effects:k,color:n(c,d,"TintColor",b,g,M),height:n(c,d,"Height",b,a.height),scaleX:n(c,d,"ScaleX",b,l),angle:n(c,d,"Rotation",b,u.getValue(a.rotation)),offsetX:n(c,d,
"OffsetX",b,u.getValue(a.offsetX)),offsetY:n(c,d,"OffsetY",b,u.getValue(a.offsetY)),url:a.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function Fa(a,k,d,f,b,e){const h=["Rotation","OffsetX","OffsetY"],c=f.filter(v=>v.primitiveName!==a.primitiveName&&!h.includes(v.propertyName)),g=a.primitiveName,[m,q]=K(f,g,k,null,null);f=D.numericHash(JSON.stringify(a)+q).toString();const w=D.numericHash(`${a.separation}${JSON.stringify(a.lineSymbol)}`).toString();let l={r:255,g:255,b:255,a:1};if(a.lineSymbol){var r;
const v=null==(r=a.lineSymbol)?void 0:r.symbolLayers.find(t=>"CIMSolidStroke"===t.type);v&&(l=u.fromCIMColor(v.color))}e.push({type:"fill",templateHash:f,materialHash:m?U(w,d,c,b):w,cim:a,materialOverrides:c,colorLocked:a.colorLocked,effects:k,color:l,height:n(g,d,"Separation",b,a.separation),scaleX:1,angle:n(g,d,"Rotation",b,u.getValue(a.rotation)),offsetX:n(g,d,"OffsetX",b,u.getValue(a.offsetX)),offsetY:n(g,d,"OffsetY",b,u.getValue(a.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function Ga(a,
k,d,f,b,e,h,c){const g=a.primitiveName,m=u.fromCIMColor(a.color),q=void 0!==a.width?a.width:4,w=ba(a.capStyle),l=ca(a.joinStyle),r=a.miterLimit,[v,t]=K(f,g,k,null,null),p=D.numericHash(JSON.stringify(a)+t).toString();let y;if(k&&k instanceof Array&&0<k.length&&(f=k[k.length-1],"CIMGeometricEffectDashes"===f.type&&"NoConstraint"===f.lineDashEnding&&null===f.offsetAlongLine)){k=[...k];var x=k.pop();y=x.dashTemplate;x=x.scaleDash}e.push({type:"line",templateHash:p,materialHash:v?()=>p:p,cim:a,materialOverrides:null,
isOutline:h,colorLocked:a.colorLocked,effects:k,color:n(g,d,"Color",b,m,M),width:n(g,d,"Width",b,q),cap:n(g,d,"CapStyle",b,w),join:n(g,d,"JoinStyle",b,l),miterLimit:n(g,d,"MiterLimit",b,r),referenceWidth:c,zOrder:fa(a.name),dashTemplate:y,scaleDash:x,sampleAlphaOnly:!0})}function Ha(a,k,d,f,b,e,h,c){const g=D.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString(),m=a.primitiveName,q=u.fromCIMColor(a.tintColor),w=void 0!==a.width?a.width:4,l=ba(a.capStyle),r=ca(a.joinStyle),v=a.miterLimit,
[t,p]=K(f,m,k,null,null);f=D.numericHash(JSON.stringify(a)+p).toString();e.push({type:"line",templateHash:f,materialHash:t?()=>g:g,cim:a,materialOverrides:null,isOutline:h,colorLocked:a.colorLocked,effects:k,color:n(m,d,"TintColor",b,q,M),width:n(m,d,"Width",b,w),cap:n(m,d,"CapStyle",b,l),join:n(m,d,"JoinStyle",b,r),miterLimit:n(m,d,"MiterLimit",b,v),referenceWidth:c,zOrder:fa(a.name),dashTemplate:null,scaleDash:!1,url:a.url,sampleAlphaOnly:!1})}function ha(a,k,d,f,b,e){const h=a.markerPlacement;
if(!h||"CIMMarkerPlacementInsidePolygon"!==h.type)return!1;var c=Math.abs(h.stepX),g=Math.abs(h.stepY);if(0===c||0===g)return!0;const m=["Rotation","OffsetX","OffsetY"],q=f.filter(p=>p.primitiveName!==a.primitiveName&&!m.includes(p.propertyName)),w="url"in a?a.url:null,[l,r]=K(f,h.primitiveName,k,null,null);f=D.numericHash(JSON.stringify(a)+r).toString();let v=null;if("Random"===h.gridType){var t=ja.px2pt(va.RANDOM_INSIDE_POLYGON_TEXTURE_SIZE);const p=Math.max(Math.floor(t/c),1),y=Math.max(Math.floor(t/
g),1);t=g*y;v=x=>x?x*y:0;c=p*c/t}else h.shiftOddRows?(t=2*g,v=p=>p?2*p:0,c=c/g*.5):(t=g,v=null,c/=g);g={r:255,g:255,b:255,a:1};"tintColor"in a&&(g=u.fromCIMColor(a.tintColor));e.push({type:"fill",templateHash:f,materialHash:l?U(f,d,q,b):f,cim:a,materialOverrides:q,colorLocked:a.colorLocked,effects:k,color:n(h.primitiveName,d,"TintColor",b,g,M),height:n(h.primitiveName,d,"StepY",b,t,v),scaleX:c,angle:n(h.primitiveName,d,"GridAngle",b,h.gridAngle),offsetX:n(h.primitiveName,d,"OffsetX",b,u.getValue(h.offsetX)),
offsetY:n(h.primitiveName,d,"OffsetY",b,u.getValue(h.offsetY)),url:w,applyRandomOffset:"Random"===h.gridType,sampleAlphaOnly:!w});return!0}function Ia(a,k,d,f,b,e,h,c,g){var m;const q=a.primitiveName,w=u.getValue(a.size);let l=u.getValue(a.scaleX);const r=u.getValue(a.rotation),v=u.getValue(a.offsetX),t=u.getValue(a.offsetY),p=a.tintColor?u.fromCIMColor(a.tintColor):{r:255,g:255,b:255,a:1},y=D.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}${JSON.stringify(a.animatedSymbolProperties)}`).toString(),
x=oa(a.markerPlacement,f,d,b),B=La(a.animatedSymbolProperties,f,d,b),[A,I]=K(f,q,k,x,B);f=D.numericHash(JSON.stringify(a)+I).toString();const F=null!=(m=a.anchorPoint)?m:{x:0,y:0};if("width"in a){m=a.width;let C=1;e=e.getResource(a.url);Q.isSome(e)&&(C=e.width/e.height);l/=w/m*C}h.push({type:"marker",templateHash:f,materialHash:a.animatedSymbolProperties&&!0===a.animatedSymbolProperties.randomizeStartTime?(C,H,z,G)=>{z=xa.getMaterialGroup(G);C=u.evaluateValueOrFunction(B,C,H);return y+`-MATERIALGROUP(${z})`+
`-ASP(${JSON.stringify(C)})`}:A?(C,H)=>{C=u.evaluateValueOrFunction(B,C,H);return y+`-ASP(${JSON.stringify(C)})`}:y,cim:a,materialOverrides:null,colorLocked:a.colorLocked,effects:k,scaleSymbolsProportionally:!1,alignment:c,size:n(q,d,"Size",b,w),scaleX:n(q,d,"ScaleX",b,l),rotation:n(q,d,"Rotation",b,r),offsetX:n(q,d,"OffsetX",b,v),offsetY:n(q,d,"OffsetY",b,t),color:n(q,d,"TintColor",b,p,M),anchorPoint:{x:F.x,y:-F.y},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},
outlineWidth:0,frameHeight:0,rotateClockwise:a.rotateClockwise,referenceSize:g,sizeRatio:1,markerPlacement:x,url:a.url,animatedSymbolProperties:B})}function Ka(a,k,d,f,b,e,h,c,g,m,q){E.OverrideHelper.findApplicableOverrides(f,e,[]);var w=f.geometry;if("x"in w&&"y"in w){var l=f.symbol;var r=l.underline?"underline":l.strikethrough?"line-through":"none";var v=Aa(l.fontStyleName),t=wa.getFontFamily(l.fontFamilyName);l.font={family:t,decoration:r,...v};var p=a.frame,y=w.x-.5*(p.xmin+p.xmax),x=w.y-.5*(p.ymin+
p.ymax),B=a.size/q;q=a.primitiveName;w=u.getValue(l.height)*B;p=u.getValue(l.angle);y=u.getValue(a.offsetX)+(u.getValue(l.offsetX)+y)*B;x=u.getValue(a.offsetY)+(u.getValue(l.offsetY)+x)*B;var A=u.fromCIMColor(E.CIMSymbolHelper.getFillColor(l)),I=u.fromCIMColor(E.CIMSymbolHelper.getStrokeColor(l)),F=E.CIMSymbolHelper.getStrokeWidth(l);F||(I=u.fromCIMColor(E.CIMSymbolHelper.getFillColor(l.haloSymbol)),F=l.haloSize*B);var [C,H]=K(e,q,k,d,null);e=JSON.stringify(a.effects)+Number(a.colorLocked)+JSON.stringify(a.anchorPoint)+
a.anchorPointUnits+JSON.stringify(a.markerPlacement);e=D.numericHash(JSON.stringify(f)+e+H).toString();var z=n(f.primitiveName,b,"TextString",h,f.textString,u._adjustTextCase,l.textCase);if(null!=z){({fontStyleName:f}=l);var G=t+(f?"-"+f.toLowerCase():"-regular");"string"===typeof z&&z.includes("[")&&l.fieldMap&&(z=u.createLabelOverrideFunction(l.fieldMap,z,l.textCase));c.push({type:"text",templateHash:e,materialHash:C||"function"===typeof z||z.match(/\[(.*?)\]/)?(O,L,P)=>G+"-"+u.evaluateValueOrFunction(z,
O,L,P):G+"-"+D.numericHash(z),cim:l,materialOverrides:null,colorLocked:a.colorLocked,effects:k,alignment:g,anchorPoint:{x:a.anchorPoint?a.anchorPoint.x:0,y:a.anchorPoint?a.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,fontName:G,decoration:r,weight:n(q,b,"Weight",h,v.weight),style:n(q,b,"Size",h,v.style),size:n(q,b,"Size",h,w),angle:n(q,b,"Rotation",h,p),offsetX:n(q,b,"OffsetX",h,y),offsetY:n(q,b,"OffsetY",h,x),horizontalAlignment:ya(l.horizontalAlignment),verticalAlignment:za(l.verticalAlignment),
text:z,color:A,outlineColor:I,outlineSize:F,referenceSize:m,sizeRatio:1,markerPlacement:d})}}}function Ja(a,k,d,f,b,e,h,c,g,m,q,w,l,r){var v=b.symbol;const t=v.symbolLayers;if(t)if(r)pa(a,k,d,f,b,h,e,c,g,m,q,w,l);else if(r=t.length,t&&2===t.length&&t[0].enable&&t[1].enable&&"CIMSolidStroke"===t[0].type&&"CIMSolidFill"===t[1].type&&!t[0].effects&&!t[1].effects)Ma(a,k,d,f,b,t,e,h,c,g,q,w,l);else if(v=ka.CIMEffectHelper.applyEffects(v.effects,b.geometry,m.geometryEngine))for(;r--;){var p=t[r];if(p&&
!1!==p.enable)switch(p.type){case "CIMSolidFill":case "CIMSolidStroke":{var y,x=ka.CIMEffectHelper.applyEffects(p.effects,v,m.geometryEngine),B=W.getExtent(x);if(!B)continue;const [F,C,H]=W.getSDFMetrics(B,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);var A="CIMSolidFill"===p.type;x={type:"sdf",geom:x,asFill:A};var I=a.primitiveName;B=null!=(y=u.getValue(a.size))?y:10;const z=u.getValue(a.rotation),G=u.getValue(a.offsetX),O=u.getValue(a.offsetY),L=p.path,P=p.primitiveName,X=A?u.fromCIMColor(E.CIMSymbolHelper.getFillColor(p)):
u.fromCIMColor(E.CIMSymbolHelper.getStrokeColor(p)),Y=A?{r:0,g:0,b:0,a:0}:u.fromCIMColor(E.CIMSymbolHelper.getStrokeColor(p)),J=E.CIMSymbolHelper.getStrokeWidth(p);if(!A&&!J)break;A=!1;let qa="";for(const R of e)if(R.primitiveName===P||R.primitiveName===I)void 0!==R.value?qa+=`-${R.primitiveName}-${R.propertyName}-${JSON.stringify(R.value)}`:R.valueExpressionInfo&&(A=!0);Q.isSome(k)&&"function"===typeof k&&(A=!0);I=JSON.stringify({...a,markerGraphics:null});const ra=D.numericHash(JSON.stringify(x)+
L).toString();p={type:"marker",templateHash:D.numericHash(JSON.stringify(b)+JSON.stringify(p)+I+qa).toString(),materialHash:A?()=>ra:ra,cim:x,materialOverrides:null,colorLocked:a.colorLocked,effects:k,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:q,anchorPoint:{x:C,y:H},isAbsoluteAnchorPoint:!1,size:n(a.primitiveName,h,"Size",c,B),rotation:n(a.primitiveName,h,"Rotation",c,z),offsetX:n(a.primitiveName,h,"OffsetX",c,G),offsetY:n(a.primitiveName,h,"OffsetY",c,O),scaleX:1,frameHeight:l,
rotateClockwise:a.rotateClockwise,referenceSize:w,sizeRatio:F,color:n(P,h,"Color",c,X,M),outlineColor:n(P,h,"Color",c,Y,M),outlineWidth:n(P,h,"Width",c,J),markerPlacement:d,animatedSymbolProperties:f,path:L};g.push(p);break}default:pa(a,k,d,f,b,h,e,c,g,m,q,w,l)}}}function Ma(a,k,d,f,b,e,h,c,g,m,q,w,l){var r=b.geometry;const v=e[0];e=e[1];var t=W.getExtent(r);if(t){var [p,y,x]=W.getSDFMetrics(t,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);r={type:"sdf",geom:r,asFill:!0};var B=a.primitiveName;
t=u.getValue(a.size);var A=u.getValue(a.rotation),I=u.getValue(a.offsetX),F=u.getValue(a.offsetY),C=e.path,H=e.primitiveName,z=v.primitiveName,G=u.fromCIMColor(E.CIMSymbolHelper.getFillColor(e)),O=u.fromCIMColor(E.CIMSymbolHelper.getStrokeColor(v)),L=E.CIMSymbolHelper.getStrokeWidth(v),P=!1,X="";for(const J of h)if(J.primitiveName===H||J.primitiveName===z||J.primitiveName===B)void 0!==J.value?X+=`-${J.primitiveName}-${J.propertyName}-${JSON.stringify(J.value)}`:J.valueExpressionInfo&&(P=!0);h=JSON.stringify({...a,
markerGraphics:null});var Y=D.numericHash(JSON.stringify(r)+C).toString();a={type:"marker",templateHash:D.numericHash(JSON.stringify(b)+JSON.stringify(e)+JSON.stringify(v)+h+X).toString(),materialHash:P?()=>Y:Y,cim:r,materialOverrides:null,colorLocked:a.colorLocked,effects:k,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:q,anchorPoint:{x:y,y:x},isAbsoluteAnchorPoint:!1,size:n(a.primitiveName,c,"Size",g,t),rotation:n(a.primitiveName,c,"Rotation",g,A),offsetX:n(a.primitiveName,c,
"OffsetX",g,I),offsetY:n(a.primitiveName,c,"OffsetY",g,F),scaleX:1,frameHeight:l,rotateClockwise:a.rotateClockwise,referenceSize:w,sizeRatio:p,color:n(H,c,"Color",g,G,M),outlineColor:n(z,c,"Color",g,O,M),outlineWidth:n(z,c,"Width",g,L),markerPlacement:d,path:C,animatedSymbolProperties:f};m.push(a)}}function pa(a,k,d,f,b,e,h,c,g,m,q,w,l){b={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,anchorPoint:a.anchorPoint,anchorPointUnits:a.anchorPointUnits,offsetX:0,
offsetY:0,rotateClockwise:a.rotateClockwise,rotation:0,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[b],scaleSymbolsProportionally:a.scaleSymbolsProportionally,respectFrame:a.respectFrame,clippingPath:a.clippingPath};let r=[];const v=["Rotation","OffsetX","OffsetY"];r=h.filter(F=>F.primitiveName!==a.primitiveName||!v.includes(F.propertyName));var t="";for(var p of h)void 0!==p.value&&(t+=`-${p.primitiveName}-${p.propertyName}-${JSON.stringify(p.value)}`);
const [y,x,B]=E.CIMSymbolHelper.getTextureAnchor(b,m);h=a.primitiveName;m=u.getValue(a.rotation);p=u.getValue(a.offsetX);const A=u.getValue(a.offsetY);t=D.numericHash(JSON.stringify(b)+t).toString();const I=0<r.length||Q.isSome(k)&&"function"===typeof k;k={type:"marker",templateHash:t,materialHash:I?U(t,e,r,c):t,cim:b,materialOverrides:r,colorLocked:a.colorLocked,effects:k,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:q,anchorPoint:{x:y,y:x},isAbsoluteAnchorPoint:!1,size:a.size,
rotation:n(h,e,"Rotation",c,m),offsetX:n(h,e,"OffsetX",c,p),offsetY:n(h,e,"OffsetY",c,A),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:l,rotateClockwise:a.rotateClockwise,referenceSize:w,sizeRatio:B/ja.pt2px(a.size),markerPlacement:d,animatedSymbolProperties:f};g.push(k)}function fa(a){return a&&0===a.indexOf("Level_")&&(a=parseInt(a.substr(6),10),!isNaN(a))?a:0}function M(a){if(!a||0===a.length)return null;a=(new ta(a)).toRgba();return{r:a[0],g:a[1],
b:a[2],a:a[3]}}function n(a,k,d,f,b,e,h){if(a=k[a]){const c=a[d];if("string"===typeof c||"number"===typeof c||c instanceof Array)return e?e.call(null,c,h):c;if(null!=c&&c instanceof S.ArcadeExpression)return(g,m,q)=>{g=T(c,g,{$view:q},f.geometryType,m);null!==g&&e&&(g=e.call(null,g,h));return null!==g?g:b}}return b}function ia(a){return a?a.charAt(0).toLowerCase()+a.substr(1):a}function Ca(a,k,d,f){for(const b of k)if(b.valueExpressionInfo){const e=d[b.primitiveName]&&d[b.primitiveName][b.propertyName];
e instanceof S.ArcadeExpression&&(b.fn=(h,c,g)=>T(e,h,{$view:g},f.geometryType,c))}return(b,e,h)=>{for(var c of k)c.fn&&(c.value=c.fn(b,e,h));b=[];for(let m of a){var g;if(e=null==(g=m)?void 0:g.primitiveName){h=!1;for(const q of k)q.primitiveName===e&&(c=ia(q.propertyName),null!=q.value&&q.value!==m[c]&&(h||(m=aa.clone(m),h=!0),m[c]=q.value))}b.push(m)}return b}}function oa(a,k,d,f){const b=[];E.OverrideHelper.findApplicableOverrides(a,k,b);if(0===b.length)return a;for(const e of b)if(e.valueExpressionInfo){const h=
d[e.primitiveName]&&d[e.primitiveName][e.propertyName];h instanceof S.ArcadeExpression&&(e.fn=(c,g,m)=>T(h,c,{$view:m},f.geometryType,g))}return(e,h,c)=>{for(const g of b)g.fn&&(g.value=g.fn(e,h,c));e=aa.clone(a);h=a.primitiveName;for(const g of b)g.primitiveName===h&&(c=ia(g.propertyName),null!=g.value&&g.value!==e[c]&&(e[c]=g.value));return e}}function La(a,k,d,f){const b=[];E.OverrideHelper.findApplicableOverrides(a,k,b);if(0===b.length)return a;for(const e of b)if(e.valueExpressionInfo){const h=
d[e.primitiveName]&&d[e.primitiveName][e.propertyName];h instanceof S.ArcadeExpression&&(e.fn=(c,g,m)=>T(h,c,{$view:m},f.geometryType,g))}return(e,h,c)=>{for(const g of b)g.fn&&(g.value=g.fn(e,h,c));e=aa.clone(a);h=a.primitiveName;for(const g of b)g.primitiveName===h&&(c=ia(g.propertyName),null!=g.value&&g.value!==e[c]&&(e[c]=g.value));return e}}function U(a,k,d,f){for(const b of d)if(b.valueExpressionInfo){const e=k[b.primitiveName]&&k[b.primitiveName][b.propertyName];e instanceof S.ArcadeExpression&&
(b.fn=(h,c,g)=>T(e,h,{$view:g},f.geometryType,c))}return(b,e,h)=>{for(const c of d)c.fn&&(c.value=c.fn(b,e,h));return D.numericHash(a+E.OverrideHelper.buildOverrideKey(d)).toString()}}function K(a,k,d,f,b){let e=!1,h="";for(const c of a)c.primitiveName===k&&(void 0!==c.value?h+=`-${c.primitiveName}-${c.propertyName}-${JSON.stringify(c.value)}`:c.valueExpressionInfo&&(e=!0));Q.isSome(d)&&"function"===typeof d&&(e=!0);Q.isSome(f)&&"function"===typeof f&&(e=!0);Q.isSome(b)&&"function"===typeof b&&(e=
!0);return[e,h]}function na(a,k,d){if(a&&k)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a=a.symbolLayers)for(const f of a)switch(Na(f,k,d),f.type){case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMCharacterMarker":case "CIMPictureMarker":"url"in f&&f.url&&d.push(k.fetchResource(f.url,null));break;case "CIMVectorMarker":if(a=f.markerGraphics)for(const b of a)b&&(a=b.symbol)&&na(a,k,d)}}}
function Na(a,k,d){a.effects&&!Q.isSome(k.geometryEngine)&&(V?d.push(V):u.isGeometryEngineRequired(a.effects)&&(V=u.importGeometryEngine(),d.push(V),V.then(f=>k.geometryEngine=f)))}const da=ua.getLogger("esri.symbols.cim.cimAnalyzer");let V;Z.analyzeCIMResource=function(a,k){if(!k||0===k.length)return a;a=JSON.parse(JSON.stringify(a));E.OverrideHelper.applyOverrides(a,k);return a};Z.analyzeCIMSymbol=function(a,k,d,f,b){return ea.apply(this,arguments)};Object.defineProperties(Z,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});