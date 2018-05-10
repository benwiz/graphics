// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.solar_system');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.solar_system.setup = (function squiggle$solar_system$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sun","sun",-916295498),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"h","h",1109658740),(38),new cljs.core.Keyword(null,"s","s",1705939918),(230),new cljs.core.Keyword(null,"v","v",21465059),(230),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null),new cljs.core.Keyword(null,"mercury","mercury",2043505313),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"h","h",1109658740),(0),new cljs.core.Keyword(null,"s","s",1705939918),(175),new cljs.core.Keyword(null,"v","v",21465059),(175),new cljs.core.Keyword(null,"x","x",2099068185),(-35),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null);
});
squiggle.solar_system.update_state = (function squiggle$solar_system$update_state(state){
return state;
});
squiggle.solar_system.draw_state = (function squiggle$solar_system$draw_state(state){
quil.core.background.call(null,(0));

var tr__22080__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22080__auto__);

quil.core.fill.call(null,new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sun","sun",-916295498).cljs$core$IFn$_invoke$arity$1(state)));

quil.core.fill.call(null,new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mercury","mercury",2043505313).cljs$core$IFn$_invoke$arity$1(state)));
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=solar_system.js.map?rel=1525955682757
