// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.pointillism');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.pointillism.setup = (function squiggle$pointillism$setup(){
quil.core.frame_rate.call(null,(120));

quil.core.background.call(null,(0));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"size","size",1098693007),(0),new cljs.core.Keyword(null,"image","image",-58725096),quil.core.request_image.call(null,"/squiggle/assets/images/starry-night.jpg")], null);
});
squiggle.pointillism.update_state = (function squiggle$pointillism$update_state(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state))){
if((new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state).width > (0))){
var x = cljs.core.rand_int.call(null,quil.core.width.call(null));
var y = cljs.core.rand_int.call(null,quil.core.height.call(null));
var rgb = quil.core.get_pixel.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state),x,y);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"c","c",-1763192079),rgb,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.rand_int.call(null,(10)),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state)], null);
} else {
return null;
}
} else {
return state;
}
});
squiggle.pointillism.draw_state = (function squiggle$pointillism$draw_state(state){
quil.core.stroke.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));

quil.core.fill.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(state));

if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,(2)),(0))){
quil.core.no_fill.call(null);
} else {
}

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=pointillism.js.map?rel=1526326502865
