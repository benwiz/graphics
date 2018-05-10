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
var G__28529__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28530__i = 0, G__28530__a = new Array(arguments.length -  0);
while (G__28530__i < G__28530__a.length) {G__28530__a[G__28530__i] = arguments[G__28530__i + 0]; ++G__28530__i;}
  args = new cljs.core.IndexedSeq(G__28530__a,0,null);
} 
return G__28529__delegate.call(this,args);};
G__28529.cljs$lang$maxFixedArity = 0;
G__28529.cljs$lang$applyTo = (function (arglist__28531){
var args = cljs.core.seq(arglist__28531);
return G__28529__delegate(args);
});
G__28529.cljs$core$IFn$_invoke$arity$variadic = G__28529__delegate;
return G__28529;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28532__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28533__i = 0, G__28533__a = new Array(arguments.length -  0);
while (G__28533__i < G__28533__a.length) {G__28533__a[G__28533__i] = arguments[G__28533__i + 0]; ++G__28533__i;}
  args = new cljs.core.IndexedSeq(G__28533__a,0,null);
} 
return G__28532__delegate.call(this,args);};
G__28532.cljs$lang$maxFixedArity = 0;
G__28532.cljs$lang$applyTo = (function (arglist__28534){
var args = cljs.core.seq(arglist__28534);
return G__28532__delegate(args);
});
G__28532.cljs$core$IFn$_invoke$arity$variadic = G__28532__delegate;
return G__28532;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28535__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28536__i = 0, G__28536__a = new Array(arguments.length -  0);
while (G__28536__i < G__28536__a.length) {G__28536__a[G__28536__i] = arguments[G__28536__i + 0]; ++G__28536__i;}
  args = new cljs.core.IndexedSeq(G__28536__a,0,null);
} 
return G__28535__delegate.call(this,args);};
G__28535.cljs$lang$maxFixedArity = 0;
G__28535.cljs$lang$applyTo = (function (arglist__28537){
var args = cljs.core.seq(arglist__28537);
return G__28535__delegate(args);
});
G__28535.cljs$core$IFn$_invoke$arity$variadic = G__28535__delegate;
return G__28535;
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

//# sourceMappingURL=core.js.map?rel=1525922605923
