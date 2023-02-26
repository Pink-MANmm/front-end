// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Error ./definitions ./GeometryUtils ./Rect ./RectangleBinPack ../../../webgl/enums ../../../webgl/Texture".split(" "),function(z,A,m,v,w,x,q,y){function n(l){return l&&"static"===l.type}return function(){function l(a,c,b=0){this._mosaicPages=[];this._pageHeight=this._pageWidth=this._currentPage=this._maxItemSize=0;this._mosaicRects=new Map;this._spriteCopyQueue=[];this.pixelRatio=1;(0>=a||0>=c)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!");
this._pageWidth=a;this._pageHeight=c;0<b&&(this._maxItemSize=b);this.pixelRatio=window.devicePixelRatio||1;this._binPack=new x(this._pageWidth,this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(Math.floor(this._pageWidth)*Math.floor(this._pageHeight))},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}var f=l.prototype;f.getWidth=function(a){return a>=this._mosaicPages.length?-1:this._mosaicPages[a].size[0]};f.getHeight=function(a){return a>=
this._mosaicPages.length?-1:this._mosaicPages[a].size[1]};f.getPageTexture=function(a){return a<this._mosaicPages.length?this._mosaicPages[a].texture:null};f.has=function(a){return this._mosaicRects.has(a)};f.getSpriteItem=function(a){return this._mosaicRects.get(a)};f.addSpriteItem=function(a,c,b,d,h,e){if(this._mosaicRects.has(a))return this._mosaicRects.get(a);let g,k,p;n(b)?[g,k,p]=this._allocateImage(c[0],c[1]):(g=new w(0,0,c[0],c[1]),k=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:b,
size:[c[0]+2*m.SPRITE_PADDING,c[1]+2*m.SPRITE_PADDING],dirty:!0,texture:void 0}));if(0>=g.width||0>=g.height)return null;e={rect:g,width:c[0],height:c[1],sdf:h,simplePattern:e,pixelRatio:1,page:k};this._mosaicRects.set(a,e);n(b)&&this._copy({rect:g,spriteSize:c,spriteData:b.data,page:k,pageSize:p,repeat:d,sdf:h});return e};f.hasItemsToProcess=function(){return 0!==this._spriteCopyQueue.length};f.processNextItem=function(){const a=this._spriteCopyQueue.pop();a&&this._copy(a)};f.getSpriteItems=function(a){const c=
{};for(const b of a)c[b]=this.getSpriteItem(b);return c};f.getMosaicItemPosition=function(a){const c=(a=this.getSpriteItem(a))&&a.rect;if(!c)return null;c.width=a.width;c.height=a.height;const b=m.SPRITE_PADDING,d=this._mosaicPages[a.page];return{size:[a.width,a.height],tl:[(c.x+b)/d[0],(c.y+b)/d[1]],br:[(c.x+b+a.width)/d[0],(c.y+b+a.height)/d[1]],page:a.page}};f.bind=function(a,c,b=0,d=0){b=this._mosaicPages[b];const h=b.mosaicsData;var e=b.texture;e||(e=b.size,e=n(h)?new y.Texture(a,{pixelFormat:q.PixelFormat.RGBA,
dataType:q.PixelType.UNSIGNED_BYTE,width:e[0],height:e[1]},new Uint8Array(h.data.buffer)):new y.Texture(a,{pixelFormat:q.PixelFormat.RGBA,dataType:q.PixelType.UNSIGNED_BYTE,samplingMode:q.TextureSamplingMode.LINEAR,wrapMode:q.TextureWrapMode.CLAMP_TO_EDGE,width:e[0],height:e[1]},null),b.texture=e);e.setSamplingMode(c);n(h)?(a.bindTexture(e,d),b.dirty&&(e.setData(new Uint8Array(h.data.buffer)),e.generateMipmap())):h.data.bindFrame(a,e,d);b.dirty=!1};l._copyBits=function(a,c,b,d,h,e,g,k,p,t,r){let u=
d*c+b;g=k*e+g;if(r)for(g-=e,r=-1;r<=t;r++,u=((r+t)%t+d)*c+b,g+=e)for(k=-1;k<=p;k++)h[g+k]=a[u+(k+p)%p];else for(b=0;b<t;b++){for(d=0;d<p;d++)h[g+d]=a[u+d];u+=c;g+=e}};f._copy=function(a){if(!(a.page>=this._mosaicPages.length)){var c=this._mosaicPages[a.page],b=c.mosaicsData;if(!n(c.mosaicsData))throw new A("mapview-invalid-resource","unsuitable data type!");var d=a.spriteData;(b=b.data)&&d||console.error("Source or target images are uninitialized!");l._copyBits(d,a.spriteSize[0],0,0,b,a.pageSize[0],
a.rect.x+m.SPRITE_PADDING,a.rect.y+m.SPRITE_PADDING,a.spriteSize[0],a.spriteSize[1],a.repeat);c.dirty=!0}};f._allocateImage=function(a,c){a+=2*m.SPRITE_PADDING;c+=2*m.SPRITE_PADDING;var b=Math.max(a,c);if(this._maxItemSize&&this._maxItemSize<b){b=2**Math.ceil(v.log2(a));const d=2**Math.ceil(v.log2(c));a=new w(0,0,a,c);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(b*d)},size:[b,d],dirty:!0,texture:void 0});return[a,this._mosaicPages.length-1,[b,d]]}b=this._binPack.allocate(a,
c);return 0>=b.width?(b=this._mosaicPages[this._currentPage],!b.dirty&&n(b.mosaicsData)&&(b.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new x(this._pageWidth,this._pageHeight),this._allocateImage(a,c)):[b,this._currentPage,[this._pageWidth,this._pageHeight]]};f.dispose=function(){this._binPack=
null;for(const c of this._mosaicPages){var a=c.texture;a&&a.dispose();a=c.mosaicsData;n(a)||a.data.destroy()}this._mosaicPages=null;this._mosaicRects.clear()};z._createClass(l,[{key:"itemCount",get:function(){return this._mosaicRects.size}}]);return l}()});