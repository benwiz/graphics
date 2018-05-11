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
var G__27907__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__27907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27908__i = 0, G__27908__a = new Array(arguments.length -  0);
while (G__27908__i < G__27908__a.length) {G__27908__a[G__27908__i] = arguments[G__27908__i + 0]; ++G__27908__i;}
  args = new cljs.core.IndexedSeq(G__27908__a,0,null);
} 
return G__27907__delegate.call(this,args);};
G__27907.cljs$lang$maxFixedArity = 0;
G__27907.cljs$lang$applyTo = (function (arglist__27909){
var args = cljs.core.seq(arglist__27909);
return G__27907__delegate(args);
});
G__27907.cljs$core$IFn$_invoke$arity$variadic = G__27907__delegate;
return G__27907;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__27910__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__27910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27911__i = 0, G__27911__a = new Array(arguments.length -  0);
while (G__27911__i < G__27911__a.length) {G__27911__a[G__27911__i] = arguments[G__27911__i + 0]; ++G__27911__i;}
  args = new cljs.core.IndexedSeq(G__27911__a,0,null);
} 
return G__27910__delegate.call(this,args);};
G__27910.cljs$lang$maxFixedArity = 0;
G__27910.cljs$lang$applyTo = (function (arglist__27912){
var args = cljs.core.seq(arglist__27912);
return G__27910__delegate(args);
});
G__27910.cljs$core$IFn$_invoke$arity$variadic = G__27910__delegate;
return G__27910;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__27913__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__27913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27914__i = 0, G__27914__a = new Array(arguments.length -  0);
while (G__27914__i < G__27914__a.length) {G__27914__a[G__27914__i] = arguments[G__27914__i + 0]; ++G__27914__i;}
  args = new cljs.core.IndexedSeq(G__27914__a,0,null);
} 
return G__27913__delegate.call(this,args);};
G__27913.cljs$lang$maxFixedArity = 0;
G__27913.cljs$lang$applyTo = (function (arglist__27915){
var args = cljs.core.seq(arglist__27915);
return G__27913__delegate(args);
});
G__27913.cljs$core$IFn$_invoke$arity$variadic = G__27913__delegate;
return G__27913;
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
var G__27916__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__27916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27917__i = 0, G__27917__a = new Array(arguments.length -  0);
while (G__27917__i < G__27917__a.length) {G__27917__a[G__27917__i] = arguments[G__27917__i + 0]; ++G__27917__i;}
  args = new cljs.core.IndexedSeq(G__27917__a,0,null);
} 
return G__27916__delegate.call(this,args);};
G__27916.cljs$lang$maxFixedArity = 0;
G__27916.cljs$lang$applyTo = (function (arglist__27918){
var args = cljs.core.seq(arglist__27918);
return G__27916__delegate(args);
});
G__27916.cljs$core$IFn$_invoke$arity$variadic = G__27916__delegate;
return G__27916;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__27919__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__27919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27920__i = 0, G__27920__a = new Array(arguments.length -  0);
while (G__27920__i < G__27920__a.length) {G__27920__a[G__27920__i] = arguments[G__27920__i + 0]; ++G__27920__i;}
  args = new cljs.core.IndexedSeq(G__27920__a,0,null);
} 
return G__27919__delegate.call(this,args);};
G__27919.cljs$lang$maxFixedArity = 0;
G__27919.cljs$lang$applyTo = (function (arglist__27921){
var args = cljs.core.seq(arglist__27921);
return G__27919__delegate(args);
});
G__27919.cljs$core$IFn$_invoke$arity$variadic = G__27919__delegate;
return G__27919;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__27922__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__27922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27923__i = 0, G__27923__a = new Array(arguments.length -  0);
while (G__27923__i < G__27923__a.length) {G__27923__a[G__27923__i] = arguments[G__27923__i + 0]; ++G__27923__i;}
  args = new cljs.core.IndexedSeq(G__27923__a,0,null);
} 
return G__27922__delegate.call(this,args);};
G__27922.cljs$lang$maxFixedArity = 0;
G__27922.cljs$lang$applyTo = (function (arglist__27924){
var args = cljs.core.seq(arglist__27924);
return G__27922__delegate(args);
});
G__27922.cljs$core$IFn$_invoke$arity$variadic = G__27922__delegate;
return G__27922;
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

//# sourceMappingURL=core.js.map?rel=1526050881482
