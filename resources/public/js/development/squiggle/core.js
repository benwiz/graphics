// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__41332__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41333__i = 0, G__41333__a = new Array(arguments.length -  0);
while (G__41333__i < G__41333__a.length) {G__41333__a[G__41333__i] = arguments[G__41333__i + 0]; ++G__41333__i;}
  args = new cljs.core.IndexedSeq(G__41333__a,0,null);
} 
return G__41332__delegate.call(this,args);};
G__41332.cljs$lang$maxFixedArity = 0;
G__41332.cljs$lang$applyTo = (function (arglist__41334){
var args = cljs.core.seq(arglist__41334);
return G__41332__delegate(args);
});
G__41332.cljs$core$IFn$_invoke$arity$variadic = G__41332__delegate;
return G__41332;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41335__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41336__i = 0, G__41336__a = new Array(arguments.length -  0);
while (G__41336__i < G__41336__a.length) {G__41336__a[G__41336__i] = arguments[G__41336__i + 0]; ++G__41336__i;}
  args = new cljs.core.IndexedSeq(G__41336__a,0,null);
} 
return G__41335__delegate.call(this,args);};
G__41335.cljs$lang$maxFixedArity = 0;
G__41335.cljs$lang$applyTo = (function (arglist__41337){
var args = cljs.core.seq(arglist__41337);
return G__41335__delegate(args);
});
G__41335.cljs$core$IFn$_invoke$arity$variadic = G__41335__delegate;
return G__41335;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41338__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41339__i = 0, G__41339__a = new Array(arguments.length -  0);
while (G__41339__i < G__41339__a.length) {G__41339__a[G__41339__i] = arguments[G__41339__i + 0]; ++G__41339__i;}
  args = new cljs.core.IndexedSeq(G__41339__a,0,null);
} 
return G__41338__delegate.call(this,args);};
G__41338.cljs$lang$maxFixedArity = 0;
G__41338.cljs$lang$applyTo = (function (arglist__41340){
var args = cljs.core.seq(arglist__41340);
return G__41338__delegate(args);
});
G__41338.cljs$core$IFn$_invoke$arity$variadic = G__41338__delegate;
return G__41338;
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
var G__41341__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41342__i = 0, G__41342__a = new Array(arguments.length -  0);
while (G__41342__i < G__41342__a.length) {G__41342__a[G__41342__i] = arguments[G__41342__i + 0]; ++G__41342__i;}
  args = new cljs.core.IndexedSeq(G__41342__a,0,null);
} 
return G__41341__delegate.call(this,args);};
G__41341.cljs$lang$maxFixedArity = 0;
G__41341.cljs$lang$applyTo = (function (arglist__41343){
var args = cljs.core.seq(arglist__41343);
return G__41341__delegate(args);
});
G__41341.cljs$core$IFn$_invoke$arity$variadic = G__41341__delegate;
return G__41341;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41344__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41345__i = 0, G__41345__a = new Array(arguments.length -  0);
while (G__41345__i < G__41345__a.length) {G__41345__a[G__41345__i] = arguments[G__41345__i + 0]; ++G__41345__i;}
  args = new cljs.core.IndexedSeq(G__41345__a,0,null);
} 
return G__41344__delegate.call(this,args);};
G__41344.cljs$lang$maxFixedArity = 0;
G__41344.cljs$lang$applyTo = (function (arglist__41346){
var args = cljs.core.seq(arglist__41346);
return G__41344__delegate(args);
});
G__41344.cljs$core$IFn$_invoke$arity$variadic = G__41344__delegate;
return G__41344;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41347__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41348__i = 0, G__41348__a = new Array(arguments.length -  0);
while (G__41348__i < G__41348__a.length) {G__41348__a[G__41348__i] = arguments[G__41348__i + 0]; ++G__41348__i;}
  args = new cljs.core.IndexedSeq(G__41348__a,0,null);
} 
return G__41347__delegate.call(this,args);};
G__41347.cljs$lang$maxFixedArity = 0;
G__41347.cljs$lang$applyTo = (function (arglist__41349){
var args = cljs.core.seq(arglist__41349);
return G__41347__delegate(args);
});
G__41347.cljs$core$IFn$_invoke$arity$variadic = G__41347__delegate;
return G__41347;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__41350__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41351__i = 0, G__41351__a = new Array(arguments.length -  0);
while (G__41351__i < G__41351__a.length) {G__41351__a[G__41351__i] = arguments[G__41351__i + 0]; ++G__41351__i;}
  args = new cljs.core.IndexedSeq(G__41351__a,0,null);
} 
return G__41350__delegate.call(this,args);};
G__41350.cljs$lang$maxFixedArity = 0;
G__41350.cljs$lang$applyTo = (function (arglist__41352){
var args = cljs.core.seq(arglist__41352);
return G__41350__delegate(args);
});
G__41350.cljs$core$IFn$_invoke$arity$variadic = G__41350__delegate;
return G__41350;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41353__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41354__i = 0, G__41354__a = new Array(arguments.length -  0);
while (G__41354__i < G__41354__a.length) {G__41354__a[G__41354__i] = arguments[G__41354__i + 0]; ++G__41354__i;}
  args = new cljs.core.IndexedSeq(G__41354__a,0,null);
} 
return G__41353__delegate.call(this,args);};
G__41353.cljs$lang$maxFixedArity = 0;
G__41353.cljs$lang$applyTo = (function (arglist__41355){
var args = cljs.core.seq(arglist__41355);
return G__41353__delegate(args);
});
G__41353.cljs$core$IFn$_invoke$arity$variadic = G__41353__delegate;
return G__41353;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41356__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41357__i = 0, G__41357__a = new Array(arguments.length -  0);
while (G__41357__i < G__41357__a.length) {G__41357__a[G__41357__i] = arguments[G__41357__i + 0]; ++G__41357__i;}
  args = new cljs.core.IndexedSeq(G__41357__a,0,null);
} 
return G__41356__delegate.call(this,args);};
G__41356.cljs$lang$maxFixedArity = 0;
G__41356.cljs$lang$applyTo = (function (arglist__41358){
var args = cljs.core.seq(arglist__41358);
return G__41356__delegate(args);
});
G__41356.cljs$core$IFn$_invoke$arity$variadic = G__41356__delegate;
return G__41356;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526086798205
