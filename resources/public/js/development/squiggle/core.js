// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
goog.require('squiggle.pointillism');
goog.require('squiggle.delaunay_monsters');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.mouse_clicked))?(function() { 
var G__42415__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__42415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42416__i = 0, G__42416__a = new Array(arguments.length -  0);
while (G__42416__i < G__42416__a.length) {G__42416__a[G__42416__i] = arguments[G__42416__i + 0]; ++G__42416__i;}
  args = new cljs.core.IndexedSeq(G__42416__a,0,null);
} 
return G__42415__delegate.call(this,args);};
G__42415.cljs$lang$maxFixedArity = 0;
G__42415.cljs$lang$applyTo = (function (arglist__42417){
var args = cljs.core.seq(arglist__42417);
return G__42415__delegate(args);
});
G__42415.cljs$core$IFn$_invoke$arity$variadic = G__42415__delegate;
return G__42415;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__42418__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__42418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42419__i = 0, G__42419__a = new Array(arguments.length -  0);
while (G__42419__i < G__42419__a.length) {G__42419__a[G__42419__i] = arguments[G__42419__i + 0]; ++G__42419__i;}
  args = new cljs.core.IndexedSeq(G__42419__a,0,null);
} 
return G__42418__delegate.call(this,args);};
G__42418.cljs$lang$maxFixedArity = 0;
G__42418.cljs$lang$applyTo = (function (arglist__42420){
var args = cljs.core.seq(arglist__42420);
return G__42418__delegate(args);
});
G__42418.cljs$core$IFn$_invoke$arity$variadic = G__42418__delegate;
return G__42418;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__42421__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__42421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42422__i = 0, G__42422__a = new Array(arguments.length -  0);
while (G__42422__i < G__42422__a.length) {G__42422__a[G__42422__i] = arguments[G__42422__i + 0]; ++G__42422__i;}
  args = new cljs.core.IndexedSeq(G__42422__a,0,null);
} 
return G__42421__delegate.call(this,args);};
G__42421.cljs$lang$maxFixedArity = 0;
G__42421.cljs$lang$applyTo = (function (arglist__42423){
var args = cljs.core.seq(arglist__42423);
return G__42421__delegate(args);
});
G__42421.cljs$core$IFn$_invoke$arity$variadic = G__42421__delegate;
return G__42421;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__42424__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__42424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42425__i = 0, G__42425__a = new Array(arguments.length -  0);
while (G__42425__i < G__42425__a.length) {G__42425__a[G__42425__i] = arguments[G__42425__i + 0]; ++G__42425__i;}
  args = new cljs.core.IndexedSeq(G__42425__a,0,null);
} 
return G__42424__delegate.call(this,args);};
G__42424.cljs$lang$maxFixedArity = 0;
G__42424.cljs$lang$applyTo = (function (arglist__42426){
var args = cljs.core.seq(arglist__42426);
return G__42424__delegate(args);
});
G__42424.cljs$core$IFn$_invoke$arity$variadic = G__42424__delegate;
return G__42424;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527281726980
