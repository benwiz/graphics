// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.pointillism');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.pointillism.setup = (function squiggle$pointillism$setup(filename){
var path = ((cljs.core._EQ_.call(null,window.location.hostname,"benwiz.io"))?["/squiggle/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''):["/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''));
quil.core.frame_rate.call(null,(80));

quil.core.background.call(null,(0));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"finished?","finished?",2067288119),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"i","i",-1386841315)],[(0),(0),(0),(0),(0),false,quil.core.request_image.call(null,path),(0),(0)]);
});
squiggle.pointillism.setup_starry_night = (function squiggle$pointillism$setup_starry_night(){
return squiggle.pointillism.setup.call(null,"starry-night.jpg");
});
squiggle.pointillism.setup_girl_with_pearl_earing = (function squiggle$pointillism$setup_girl_with_pearl_earing(){
return squiggle.pointillism.setup.call(null,"girl-with-pearl-earing.jpg");
});
squiggle.pointillism.setup_picasso_face = (function squiggle$pointillism$setup_picasso_face(){
return squiggle.pointillism.setup.call(null,"picasso-face.jpg");
});
squiggle.pointillism.setup_georges_seurat = (function squiggle$pointillism$setup_georges_seurat(){
return squiggle.pointillism.setup.call(null,"georges-seurat.jpg");
});
squiggle.pointillism.setup_deep_space = (function squiggle$pointillism$setup_deep_space(){
return squiggle.pointillism.setup.call(null,"deep-space.jpg");
});
squiggle.pointillism.setup_andromeda = (function squiggle$pointillism$setup_andromeda(){
return squiggle.pointillism.setup.call(null,"andromeda.jpg");
});
squiggle.pointillism.update_state = (function squiggle$pointillism$update_state(state){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"finished?","finished?",2067288119).cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state))){
if((new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state).width > (0))){
var x = cljs.core.rand_int.call(null,quil.core.width.call(null));
var y = cljs.core.rand_int.call(null,quil.core.height.call(null));
var rgb = quil.core.get_pixel.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state),x,y);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"i","i",-1386841315),(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) + (1)),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"c","c",-1763192079),rgb,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.rand_int.call(null,Math.max(((10) - Math.floor((new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) / (3000)))),(6))),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"finished?","finished?",2067288119),(quil.core.frame_count.call(null) >= (10000))], null);
} else {
return state;
}
} else {
return state;
}
} else {
return null;
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

//# sourceMappingURL=pointillism.js.map?rel=1527279947725
