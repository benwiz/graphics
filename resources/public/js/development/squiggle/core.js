// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.squiggle2');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__28918__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28919__i = 0, G__28919__a = new Array(arguments.length -  0);
while (G__28919__i < G__28919__a.length) {G__28919__a[G__28919__i] = arguments[G__28919__i + 0]; ++G__28919__i;}
  args = new cljs.core.IndexedSeq(G__28919__a,0,null);
} 
return G__28918__delegate.call(this,args);};
G__28918.cljs$lang$maxFixedArity = 0;
G__28918.cljs$lang$applyTo = (function (arglist__28920){
var args = cljs.core.seq(arglist__28920);
return G__28918__delegate(args);
});
G__28918.cljs$core$IFn$_invoke$arity$variadic = G__28918__delegate;
return G__28918;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28921__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28922__i = 0, G__28922__a = new Array(arguments.length -  0);
while (G__28922__i < G__28922__a.length) {G__28922__a[G__28922__i] = arguments[G__28922__i + 0]; ++G__28922__i;}
  args = new cljs.core.IndexedSeq(G__28922__a,0,null);
} 
return G__28921__delegate.call(this,args);};
G__28921.cljs$lang$maxFixedArity = 0;
G__28921.cljs$lang$applyTo = (function (arglist__28923){
var args = cljs.core.seq(arglist__28923);
return G__28921__delegate(args);
});
G__28921.cljs$core$IFn$_invoke$arity$variadic = G__28921__delegate;
return G__28921;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28924__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28925__i = 0, G__28925__a = new Array(arguments.length -  0);
while (G__28925__i < G__28925__a.length) {G__28925__a[G__28925__i] = arguments[G__28925__i + 0]; ++G__28925__i;}
  args = new cljs.core.IndexedSeq(G__28925__a,0,null);
} 
return G__28924__delegate.call(this,args);};
G__28924.cljs$lang$maxFixedArity = 0;
G__28924.cljs$lang$applyTo = (function (arglist__28926){
var args = cljs.core.seq(arglist__28926);
return G__28924__delegate(args);
});
G__28924.cljs$core$IFn$_invoke$arity$variadic = G__28924__delegate;
return G__28924;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525923607446
