// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__27753__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__27753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27754__i = 0, G__27754__a = new Array(arguments.length -  0);
while (G__27754__i < G__27754__a.length) {G__27754__a[G__27754__i] = arguments[G__27754__i + 0]; ++G__27754__i;}
  args = new cljs.core.IndexedSeq(G__27754__a,0,null);
} 
return G__27753__delegate.call(this,args);};
G__27753.cljs$lang$maxFixedArity = 0;
G__27753.cljs$lang$applyTo = (function (arglist__27755){
var args = cljs.core.seq(arglist__27755);
return G__27753__delegate(args);
});
G__27753.cljs$core$IFn$_invoke$arity$variadic = G__27753__delegate;
return G__27753;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__27756__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__27756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27757__i = 0, G__27757__a = new Array(arguments.length -  0);
while (G__27757__i < G__27757__a.length) {G__27757__a[G__27757__i] = arguments[G__27757__i + 0]; ++G__27757__i;}
  args = new cljs.core.IndexedSeq(G__27757__a,0,null);
} 
return G__27756__delegate.call(this,args);};
G__27756.cljs$lang$maxFixedArity = 0;
G__27756.cljs$lang$applyTo = (function (arglist__27758){
var args = cljs.core.seq(arglist__27758);
return G__27756__delegate(args);
});
G__27756.cljs$core$IFn$_invoke$arity$variadic = G__27756__delegate;
return G__27756;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__27759__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__27759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27760__i = 0, G__27760__a = new Array(arguments.length -  0);
while (G__27760__i < G__27760__a.length) {G__27760__a[G__27760__i] = arguments[G__27760__i + 0]; ++G__27760__i;}
  args = new cljs.core.IndexedSeq(G__27760__a,0,null);
} 
return G__27759__delegate.call(this,args);};
G__27759.cljs$lang$maxFixedArity = 0;
G__27759.cljs$lang$applyTo = (function (arglist__27761){
var args = cljs.core.seq(arglist__27761);
return G__27759__delegate(args);
});
G__27759.cljs$core$IFn$_invoke$arity$variadic = G__27759__delegate;
return G__27759;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27183__27184__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27183__27184__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__27762__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__27762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27763__i = 0, G__27763__a = new Array(arguments.length -  0);
while (G__27763__i < G__27763__a.length) {G__27763__a[G__27763__i] = arguments[G__27763__i + 0]; ++G__27763__i;}
  args = new cljs.core.IndexedSeq(G__27763__a,0,null);
} 
return G__27762__delegate.call(this,args);};
G__27762.cljs$lang$maxFixedArity = 0;
G__27762.cljs$lang$applyTo = (function (arglist__27764){
var args = cljs.core.seq(arglist__27764);
return G__27762__delegate(args);
});
G__27762.cljs$core$IFn$_invoke$arity$variadic = G__27762__delegate;
return G__27762;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__27765__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__27765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27766__i = 0, G__27766__a = new Array(arguments.length -  0);
while (G__27766__i < G__27766__a.length) {G__27766__a[G__27766__i] = arguments[G__27766__i + 0]; ++G__27766__i;}
  args = new cljs.core.IndexedSeq(G__27766__a,0,null);
} 
return G__27765__delegate.call(this,args);};
G__27765.cljs$lang$maxFixedArity = 0;
G__27765.cljs$lang$applyTo = (function (arglist__27767){
var args = cljs.core.seq(arglist__27767);
return G__27765__delegate(args);
});
G__27765.cljs$core$IFn$_invoke$arity$variadic = G__27765__delegate;
return G__27765;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__27768__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__27768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27769__i = 0, G__27769__a = new Array(arguments.length -  0);
while (G__27769__i < G__27769__a.length) {G__27769__a[G__27769__i] = arguments[G__27769__i + 0]; ++G__27769__i;}
  args = new cljs.core.IndexedSeq(G__27769__a,0,null);
} 
return G__27768__delegate.call(this,args);};
G__27768.cljs$lang$maxFixedArity = 0;
G__27768.cljs$lang$applyTo = (function (arglist__27770){
var args = cljs.core.seq(arglist__27770);
return G__27768__delegate(args);
});
G__27768.cljs$core$IFn$_invoke$arity$variadic = G__27768__delegate;
return G__27768;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27183__27184__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27183__27184__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525956694811
