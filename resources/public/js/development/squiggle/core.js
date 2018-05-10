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
var G__31379__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__31379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31380__i = 0, G__31380__a = new Array(arguments.length -  0);
while (G__31380__i < G__31380__a.length) {G__31380__a[G__31380__i] = arguments[G__31380__i + 0]; ++G__31380__i;}
  args = new cljs.core.IndexedSeq(G__31380__a,0,null);
} 
return G__31379__delegate.call(this,args);};
G__31379.cljs$lang$maxFixedArity = 0;
G__31379.cljs$lang$applyTo = (function (arglist__31381){
var args = cljs.core.seq(arglist__31381);
return G__31379__delegate(args);
});
G__31379.cljs$core$IFn$_invoke$arity$variadic = G__31379__delegate;
return G__31379;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__31382__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__31382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31383__i = 0, G__31383__a = new Array(arguments.length -  0);
while (G__31383__i < G__31383__a.length) {G__31383__a[G__31383__i] = arguments[G__31383__i + 0]; ++G__31383__i;}
  args = new cljs.core.IndexedSeq(G__31383__a,0,null);
} 
return G__31382__delegate.call(this,args);};
G__31382.cljs$lang$maxFixedArity = 0;
G__31382.cljs$lang$applyTo = (function (arglist__31384){
var args = cljs.core.seq(arglist__31384);
return G__31382__delegate(args);
});
G__31382.cljs$core$IFn$_invoke$arity$variadic = G__31382__delegate;
return G__31382;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__31385__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__31385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31386__i = 0, G__31386__a = new Array(arguments.length -  0);
while (G__31386__i < G__31386__a.length) {G__31386__a[G__31386__i] = arguments[G__31386__i + 0]; ++G__31386__i;}
  args = new cljs.core.IndexedSeq(G__31386__a,0,null);
} 
return G__31385__delegate.call(this,args);};
G__31385.cljs$lang$maxFixedArity = 0;
G__31385.cljs$lang$applyTo = (function (arglist__31387){
var args = cljs.core.seq(arglist__31387);
return G__31385__delegate(args);
});
G__31385.cljs$core$IFn$_invoke$arity$variadic = G__31385__delegate;
return G__31385;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__31388__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__31388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31389__i = 0, G__31389__a = new Array(arguments.length -  0);
while (G__31389__i < G__31389__a.length) {G__31389__a[G__31389__i] = arguments[G__31389__i + 0]; ++G__31389__i;}
  args = new cljs.core.IndexedSeq(G__31389__a,0,null);
} 
return G__31388__delegate.call(this,args);};
G__31388.cljs$lang$maxFixedArity = 0;
G__31388.cljs$lang$applyTo = (function (arglist__31390){
var args = cljs.core.seq(arglist__31390);
return G__31388__delegate(args);
});
G__31388.cljs$core$IFn$_invoke$arity$variadic = G__31388__delegate;
return G__31388;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__31391__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__31391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31392__i = 0, G__31392__a = new Array(arguments.length -  0);
while (G__31392__i < G__31392__a.length) {G__31392__a[G__31392__i] = arguments[G__31392__i + 0]; ++G__31392__i;}
  args = new cljs.core.IndexedSeq(G__31392__a,0,null);
} 
return G__31391__delegate.call(this,args);};
G__31391.cljs$lang$maxFixedArity = 0;
G__31391.cljs$lang$applyTo = (function (arglist__31393){
var args = cljs.core.seq(arglist__31393);
return G__31391__delegate(args);
});
G__31391.cljs$core$IFn$_invoke$arity$variadic = G__31391__delegate;
return G__31391;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__31394__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__31394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31395__i = 0, G__31395__a = new Array(arguments.length -  0);
while (G__31395__i < G__31395__a.length) {G__31395__a[G__31395__i] = arguments[G__31395__i + 0]; ++G__31395__i;}
  args = new cljs.core.IndexedSeq(G__31395__a,0,null);
} 
return G__31394__delegate.call(this,args);};
G__31394.cljs$lang$maxFixedArity = 0;
G__31394.cljs$lang$applyTo = (function (arglist__31396){
var args = cljs.core.seq(arglist__31396);
return G__31394__delegate(args);
});
G__31394.cljs$core$IFn$_invoke$arity$variadic = G__31394__delegate;
return G__31394;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525956431257
