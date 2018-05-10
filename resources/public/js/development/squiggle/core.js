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
var G__28491__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28492__i = 0, G__28492__a = new Array(arguments.length -  0);
while (G__28492__i < G__28492__a.length) {G__28492__a[G__28492__i] = arguments[G__28492__i + 0]; ++G__28492__i;}
  args = new cljs.core.IndexedSeq(G__28492__a,0,null);
} 
return G__28491__delegate.call(this,args);};
G__28491.cljs$lang$maxFixedArity = 0;
G__28491.cljs$lang$applyTo = (function (arglist__28493){
var args = cljs.core.seq(arglist__28493);
return G__28491__delegate(args);
});
G__28491.cljs$core$IFn$_invoke$arity$variadic = G__28491__delegate;
return G__28491;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28494__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28495__i = 0, G__28495__a = new Array(arguments.length -  0);
while (G__28495__i < G__28495__a.length) {G__28495__a[G__28495__i] = arguments[G__28495__i + 0]; ++G__28495__i;}
  args = new cljs.core.IndexedSeq(G__28495__a,0,null);
} 
return G__28494__delegate.call(this,args);};
G__28494.cljs$lang$maxFixedArity = 0;
G__28494.cljs$lang$applyTo = (function (arglist__28496){
var args = cljs.core.seq(arglist__28496);
return G__28494__delegate(args);
});
G__28494.cljs$core$IFn$_invoke$arity$variadic = G__28494__delegate;
return G__28494;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28497__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28498__i = 0, G__28498__a = new Array(arguments.length -  0);
while (G__28498__i < G__28498__a.length) {G__28498__a[G__28498__i] = arguments[G__28498__i + 0]; ++G__28498__i;}
  args = new cljs.core.IndexedSeq(G__28498__a,0,null);
} 
return G__28497__delegate.call(this,args);};
G__28497.cljs$lang$maxFixedArity = 0;
G__28497.cljs$lang$applyTo = (function (arglist__28499){
var args = cljs.core.seq(arglist__28499);
return G__28497__delegate(args);
});
G__28497.cljs$core$IFn$_invoke$arity$variadic = G__28497__delegate;
return G__28497;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__28500__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__28500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28501__i = 0, G__28501__a = new Array(arguments.length -  0);
while (G__28501__i < G__28501__a.length) {G__28501__a[G__28501__i] = arguments[G__28501__i + 0]; ++G__28501__i;}
  args = new cljs.core.IndexedSeq(G__28501__a,0,null);
} 
return G__28500__delegate.call(this,args);};
G__28500.cljs$lang$maxFixedArity = 0;
G__28500.cljs$lang$applyTo = (function (arglist__28502){
var args = cljs.core.seq(arglist__28502);
return G__28500__delegate(args);
});
G__28500.cljs$core$IFn$_invoke$arity$variadic = G__28500__delegate;
return G__28500;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__28503__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__28503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28504__i = 0, G__28504__a = new Array(arguments.length -  0);
while (G__28504__i < G__28504__a.length) {G__28504__a[G__28504__i] = arguments[G__28504__i + 0]; ++G__28504__i;}
  args = new cljs.core.IndexedSeq(G__28504__a,0,null);
} 
return G__28503__delegate.call(this,args);};
G__28503.cljs$lang$maxFixedArity = 0;
G__28503.cljs$lang$applyTo = (function (arglist__28505){
var args = cljs.core.seq(arglist__28505);
return G__28503__delegate(args);
});
G__28503.cljs$core$IFn$_invoke$arity$variadic = G__28503__delegate;
return G__28503;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__28506__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__28506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28507__i = 0, G__28507__a = new Array(arguments.length -  0);
while (G__28507__i < G__28507__a.length) {G__28507__a[G__28507__i] = arguments[G__28507__i + 0]; ++G__28507__i;}
  args = new cljs.core.IndexedSeq(G__28507__a,0,null);
} 
return G__28506__delegate.call(this,args);};
G__28506.cljs$lang$maxFixedArity = 0;
G__28506.cljs$lang$applyTo = (function (arglist__28508){
var args = cljs.core.seq(arglist__28508);
return G__28506__delegate(args);
});
G__28506.cljs$core$IFn$_invoke$arity$variadic = G__28506__delegate;
return G__28506;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525988488944
