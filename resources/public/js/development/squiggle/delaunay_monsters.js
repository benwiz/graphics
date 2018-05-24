// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.delaunay_monsters');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.delaunay_monsters.point = (function squiggle$delaunay_monsters$point(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,quil.core.height.call(null)),new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"h","h",1109658740),(100)], null);
});
squiggle.delaunay_monsters.draw_point = (function squiggle$delaunay_monsters$draw_point(point){
return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),(10),(10));
});
squiggle.delaunay_monsters.setup = (function squiggle$delaunay_monsters$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.repeatedly.call(null,(5),squiggle.delaunay_monsters.point)], null);
});
squiggle.delaunay_monsters.update_state = (function squiggle$delaunay_monsters$update_state(state){
return state;
});
squiggle.delaunay_monsters.draw_state = (function squiggle$delaunay_monsters$draw_state(state){
cljs.core.println.call(null,cljs.core.type.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.mapv.call(null,squiggle.delaunay_monsters.draw_point,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=delaunay_monsters.js.map?rel=1527202231734
