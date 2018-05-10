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
var G__29374__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29375__i = 0, G__29375__a = new Array(arguments.length -  0);
while (G__29375__i < G__29375__a.length) {G__29375__a[G__29375__i] = arguments[G__29375__i + 0]; ++G__29375__i;}
  args = new cljs.core.IndexedSeq(G__29375__a,0,null);
} 
return G__29374__delegate.call(this,args);};
G__29374.cljs$lang$maxFixedArity = 0;
G__29374.cljs$lang$applyTo = (function (arglist__29376){
var args = cljs.core.seq(arglist__29376);
return G__29374__delegate(args);
});
G__29374.cljs$core$IFn$_invoke$arity$variadic = G__29374__delegate;
return G__29374;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29377__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29378__i = 0, G__29378__a = new Array(arguments.length -  0);
while (G__29378__i < G__29378__a.length) {G__29378__a[G__29378__i] = arguments[G__29378__i + 0]; ++G__29378__i;}
  args = new cljs.core.IndexedSeq(G__29378__a,0,null);
} 
return G__29377__delegate.call(this,args);};
G__29377.cljs$lang$maxFixedArity = 0;
G__29377.cljs$lang$applyTo = (function (arglist__29379){
var args = cljs.core.seq(arglist__29379);
return G__29377__delegate(args);
});
G__29377.cljs$core$IFn$_invoke$arity$variadic = G__29377__delegate;
return G__29377;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29380__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29381__i = 0, G__29381__a = new Array(arguments.length -  0);
while (G__29381__i < G__29381__a.length) {G__29381__a[G__29381__i] = arguments[G__29381__i + 0]; ++G__29381__i;}
  args = new cljs.core.IndexedSeq(G__29381__a,0,null);
} 
return G__29380__delegate.call(this,args);};
G__29380.cljs$lang$maxFixedArity = 0;
G__29380.cljs$lang$applyTo = (function (arglist__29382){
var args = cljs.core.seq(arglist__29382);
return G__29380__delegate(args);
});
G__29380.cljs$core$IFn$_invoke$arity$variadic = G__29380__delegate;
return G__29380;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27184__27185__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27184__27185__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__29383__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__29383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29384__i = 0, G__29384__a = new Array(arguments.length -  0);
while (G__29384__i < G__29384__a.length) {G__29384__a[G__29384__i] = arguments[G__29384__i + 0]; ++G__29384__i;}
  args = new cljs.core.IndexedSeq(G__29384__a,0,null);
} 
return G__29383__delegate.call(this,args);};
G__29383.cljs$lang$maxFixedArity = 0;
G__29383.cljs$lang$applyTo = (function (arglist__29385){
var args = cljs.core.seq(arglist__29385);
return G__29383__delegate(args);
});
G__29383.cljs$core$IFn$_invoke$arity$variadic = G__29383__delegate;
return G__29383;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__29386__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__29386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29387__i = 0, G__29387__a = new Array(arguments.length -  0);
while (G__29387__i < G__29387__a.length) {G__29387__a[G__29387__i] = arguments[G__29387__i + 0]; ++G__29387__i;}
  args = new cljs.core.IndexedSeq(G__29387__a,0,null);
} 
return G__29386__delegate.call(this,args);};
G__29386.cljs$lang$maxFixedArity = 0;
G__29386.cljs$lang$applyTo = (function (arglist__29388){
var args = cljs.core.seq(arglist__29388);
return G__29386__delegate(args);
});
G__29386.cljs$core$IFn$_invoke$arity$variadic = G__29386__delegate;
return G__29386;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__29389__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__29389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29390__i = 0, G__29390__a = new Array(arguments.length -  0);
while (G__29390__i < G__29390__a.length) {G__29390__a[G__29390__i] = arguments[G__29390__i + 0]; ++G__29390__i;}
  args = new cljs.core.IndexedSeq(G__29390__a,0,null);
} 
return G__29389__delegate.call(this,args);};
G__29389.cljs$lang$maxFixedArity = 0;
G__29389.cljs$lang$applyTo = (function (arglist__29391){
var args = cljs.core.seq(arglist__29391);
return G__29389__delegate(args);
});
G__29389.cljs$core$IFn$_invoke$arity$variadic = G__29389__delegate;
return G__29389;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27184__27185__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27184__27185__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525968472444
