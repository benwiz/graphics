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
var G__29186__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29187__i = 0, G__29187__a = new Array(arguments.length -  0);
while (G__29187__i < G__29187__a.length) {G__29187__a[G__29187__i] = arguments[G__29187__i + 0]; ++G__29187__i;}
  args = new cljs.core.IndexedSeq(G__29187__a,0,null);
} 
return G__29186__delegate.call(this,args);};
G__29186.cljs$lang$maxFixedArity = 0;
G__29186.cljs$lang$applyTo = (function (arglist__29188){
var args = cljs.core.seq(arglist__29188);
return G__29186__delegate(args);
});
G__29186.cljs$core$IFn$_invoke$arity$variadic = G__29186__delegate;
return G__29186;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29189__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29190__i = 0, G__29190__a = new Array(arguments.length -  0);
while (G__29190__i < G__29190__a.length) {G__29190__a[G__29190__i] = arguments[G__29190__i + 0]; ++G__29190__i;}
  args = new cljs.core.IndexedSeq(G__29190__a,0,null);
} 
return G__29189__delegate.call(this,args);};
G__29189.cljs$lang$maxFixedArity = 0;
G__29189.cljs$lang$applyTo = (function (arglist__29191){
var args = cljs.core.seq(arglist__29191);
return G__29189__delegate(args);
});
G__29189.cljs$core$IFn$_invoke$arity$variadic = G__29189__delegate;
return G__29189;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29192__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29193__i = 0, G__29193__a = new Array(arguments.length -  0);
while (G__29193__i < G__29193__a.length) {G__29193__a[G__29193__i] = arguments[G__29193__i + 0]; ++G__29193__i;}
  args = new cljs.core.IndexedSeq(G__29193__a,0,null);
} 
return G__29192__delegate.call(this,args);};
G__29192.cljs$lang$maxFixedArity = 0;
G__29192.cljs$lang$applyTo = (function (arglist__29194){
var args = cljs.core.seq(arglist__29194);
return G__29192__delegate(args);
});
G__29192.cljs$core$IFn$_invoke$arity$variadic = G__29192__delegate;
return G__29192;
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

//# sourceMappingURL=core.js.map?rel=1525924135360
