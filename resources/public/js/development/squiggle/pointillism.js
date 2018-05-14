// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.pointillism');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.pointillism.setup = (function squiggle$pointillism$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.background.call(null,(0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"r","r",-471384190),(200),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"size","size",1098693007),(30)], null)], null);
});
squiggle.pointillism.update_state = (function squiggle$pointillism$update_state(state){
return state;
});
squiggle.pointillism.draw_state = (function squiggle$pointillism$draw_state(state){
return cljs.core.mapv.call(null,(function (point){
quil.core.fill.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(point));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(point));
}),state);
});

//# sourceMappingURL=pointillism.js.map?rel=1526260008642
