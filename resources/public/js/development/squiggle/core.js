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
var G__29777__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29778__i = 0, G__29778__a = new Array(arguments.length -  0);
while (G__29778__i < G__29778__a.length) {G__29778__a[G__29778__i] = arguments[G__29778__i + 0]; ++G__29778__i;}
  args = new cljs.core.IndexedSeq(G__29778__a,0,null);
} 
return G__29777__delegate.call(this,args);};
G__29777.cljs$lang$maxFixedArity = 0;
G__29777.cljs$lang$applyTo = (function (arglist__29779){
var args = cljs.core.seq(arglist__29779);
return G__29777__delegate(args);
});
G__29777.cljs$core$IFn$_invoke$arity$variadic = G__29777__delegate;
return G__29777;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29780__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29781__i = 0, G__29781__a = new Array(arguments.length -  0);
while (G__29781__i < G__29781__a.length) {G__29781__a[G__29781__i] = arguments[G__29781__i + 0]; ++G__29781__i;}
  args = new cljs.core.IndexedSeq(G__29781__a,0,null);
} 
return G__29780__delegate.call(this,args);};
G__29780.cljs$lang$maxFixedArity = 0;
G__29780.cljs$lang$applyTo = (function (arglist__29782){
var args = cljs.core.seq(arglist__29782);
return G__29780__delegate(args);
});
G__29780.cljs$core$IFn$_invoke$arity$variadic = G__29780__delegate;
return G__29780;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29783__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29784__i = 0, G__29784__a = new Array(arguments.length -  0);
while (G__29784__i < G__29784__a.length) {G__29784__a[G__29784__i] = arguments[G__29784__i + 0]; ++G__29784__i;}
  args = new cljs.core.IndexedSeq(G__29784__a,0,null);
} 
return G__29783__delegate.call(this,args);};
G__29783.cljs$lang$maxFixedArity = 0;
G__29783.cljs$lang$applyTo = (function (arglist__29785){
var args = cljs.core.seq(arglist__29785);
return G__29783__delegate(args);
});
G__29783.cljs$core$IFn$_invoke$arity$variadic = G__29783__delegate;
return G__29783;
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

//# sourceMappingURL=core.js.map?rel=1525925622696
