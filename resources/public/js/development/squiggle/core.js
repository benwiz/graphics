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
var G__29214__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29215__i = 0, G__29215__a = new Array(arguments.length -  0);
while (G__29215__i < G__29215__a.length) {G__29215__a[G__29215__i] = arguments[G__29215__i + 0]; ++G__29215__i;}
  args = new cljs.core.IndexedSeq(G__29215__a,0,null);
} 
return G__29214__delegate.call(this,args);};
G__29214.cljs$lang$maxFixedArity = 0;
G__29214.cljs$lang$applyTo = (function (arglist__29216){
var args = cljs.core.seq(arglist__29216);
return G__29214__delegate(args);
});
G__29214.cljs$core$IFn$_invoke$arity$variadic = G__29214__delegate;
return G__29214;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29217__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29218__i = 0, G__29218__a = new Array(arguments.length -  0);
while (G__29218__i < G__29218__a.length) {G__29218__a[G__29218__i] = arguments[G__29218__i + 0]; ++G__29218__i;}
  args = new cljs.core.IndexedSeq(G__29218__a,0,null);
} 
return G__29217__delegate.call(this,args);};
G__29217.cljs$lang$maxFixedArity = 0;
G__29217.cljs$lang$applyTo = (function (arglist__29219){
var args = cljs.core.seq(arglist__29219);
return G__29217__delegate(args);
});
G__29217.cljs$core$IFn$_invoke$arity$variadic = G__29217__delegate;
return G__29217;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29220__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29221__i = 0, G__29221__a = new Array(arguments.length -  0);
while (G__29221__i < G__29221__a.length) {G__29221__a[G__29221__i] = arguments[G__29221__i + 0]; ++G__29221__i;}
  args = new cljs.core.IndexedSeq(G__29221__a,0,null);
} 
return G__29220__delegate.call(this,args);};
G__29220.cljs$lang$maxFixedArity = 0;
G__29220.cljs$lang$applyTo = (function (arglist__29222){
var args = cljs.core.seq(arglist__29222);
return G__29220__delegate(args);
});
G__29220.cljs$core$IFn$_invoke$arity$variadic = G__29220__delegate;
return G__29220;
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

//# sourceMappingURL=core.js.map?rel=1525924235736
