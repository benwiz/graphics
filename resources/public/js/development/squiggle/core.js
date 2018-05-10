// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.example');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__29838__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29839__i = 0, G__29839__a = new Array(arguments.length -  0);
while (G__29839__i < G__29839__a.length) {G__29839__a[G__29839__i] = arguments[G__29839__i + 0]; ++G__29839__i;}
  args = new cljs.core.IndexedSeq(G__29839__a,0,null);
} 
return G__29838__delegate.call(this,args);};
G__29838.cljs$lang$maxFixedArity = 0;
G__29838.cljs$lang$applyTo = (function (arglist__29840){
var args = cljs.core.seq(arglist__29840);
return G__29838__delegate(args);
});
G__29838.cljs$core$IFn$_invoke$arity$variadic = G__29838__delegate;
return G__29838;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29841__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29842__i = 0, G__29842__a = new Array(arguments.length -  0);
while (G__29842__i < G__29842__a.length) {G__29842__a[G__29842__i] = arguments[G__29842__i + 0]; ++G__29842__i;}
  args = new cljs.core.IndexedSeq(G__29842__a,0,null);
} 
return G__29841__delegate.call(this,args);};
G__29841.cljs$lang$maxFixedArity = 0;
G__29841.cljs$lang$applyTo = (function (arglist__29843){
var args = cljs.core.seq(arglist__29843);
return G__29841__delegate(args);
});
G__29841.cljs$core$IFn$_invoke$arity$variadic = G__29841__delegate;
return G__29841;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29844__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29845__i = 0, G__29845__a = new Array(arguments.length -  0);
while (G__29845__i < G__29845__a.length) {G__29845__a[G__29845__i] = arguments[G__29845__i + 0]; ++G__29845__i;}
  args = new cljs.core.IndexedSeq(G__29845__a,0,null);
} 
return G__29844__delegate.call(this,args);};
G__29844.cljs$lang$maxFixedArity = 0;
G__29844.cljs$lang$applyTo = (function (arglist__29846){
var args = cljs.core.seq(arglist__29846);
return G__29844__delegate(args);
});
G__29844.cljs$core$IFn$_invoke$arity$variadic = G__29844__delegate;
return G__29844;
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

//# sourceMappingURL=core.js.map?rel=1525954366245
