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
var G__42270__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__42270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42271__i = 0, G__42271__a = new Array(arguments.length -  0);
while (G__42271__i < G__42271__a.length) {G__42271__a[G__42271__i] = arguments[G__42271__i + 0]; ++G__42271__i;}
  args = new cljs.core.IndexedSeq(G__42271__a,0,null);
} 
return G__42270__delegate.call(this,args);};
G__42270.cljs$lang$maxFixedArity = 0;
G__42270.cljs$lang$applyTo = (function (arglist__42272){
var args = cljs.core.seq(arglist__42272);
return G__42270__delegate(args);
});
G__42270.cljs$core$IFn$_invoke$arity$variadic = G__42270__delegate;
return G__42270;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__42273__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__42273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42274__i = 0, G__42274__a = new Array(arguments.length -  0);
while (G__42274__i < G__42274__a.length) {G__42274__a[G__42274__i] = arguments[G__42274__i + 0]; ++G__42274__i;}
  args = new cljs.core.IndexedSeq(G__42274__a,0,null);
} 
return G__42273__delegate.call(this,args);};
G__42273.cljs$lang$maxFixedArity = 0;
G__42273.cljs$lang$applyTo = (function (arglist__42275){
var args = cljs.core.seq(arglist__42275);
return G__42273__delegate(args);
});
G__42273.cljs$core$IFn$_invoke$arity$variadic = G__42273__delegate;
return G__42273;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__42276__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__42276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42277__i = 0, G__42277__a = new Array(arguments.length -  0);
while (G__42277__i < G__42277__a.length) {G__42277__a[G__42277__i] = arguments[G__42277__i + 0]; ++G__42277__i;}
  args = new cljs.core.IndexedSeq(G__42277__a,0,null);
} 
return G__42276__delegate.call(this,args);};
G__42276.cljs$lang$maxFixedArity = 0;
G__42276.cljs$lang$applyTo = (function (arglist__42278){
var args = cljs.core.seq(arglist__42278);
return G__42276__delegate(args);
});
G__42276.cljs$core$IFn$_invoke$arity$variadic = G__42276__delegate;
return G__42276;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__42279__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__42279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42280__i = 0, G__42280__a = new Array(arguments.length -  0);
while (G__42280__i < G__42280__a.length) {G__42280__a[G__42280__i] = arguments[G__42280__i + 0]; ++G__42280__i;}
  args = new cljs.core.IndexedSeq(G__42280__a,0,null);
} 
return G__42279__delegate.call(this,args);};
G__42279.cljs$lang$maxFixedArity = 0;
G__42279.cljs$lang$applyTo = (function (arglist__42281){
var args = cljs.core.seq(arglist__42281);
return G__42279__delegate(args);
});
G__42279.cljs$core$IFn$_invoke$arity$variadic = G__42279__delegate;
return G__42279;
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

//# sourceMappingURL=core.js.map?rel=1527281362458
