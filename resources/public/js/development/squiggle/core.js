// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
goog.require('squiggle.pointillism');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__39311__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39312__i = 0, G__39312__a = new Array(arguments.length -  0);
while (G__39312__i < G__39312__a.length) {G__39312__a[G__39312__i] = arguments[G__39312__i + 0]; ++G__39312__i;}
  args = new cljs.core.IndexedSeq(G__39312__a,0,null);
} 
return G__39311__delegate.call(this,args);};
G__39311.cljs$lang$maxFixedArity = 0;
G__39311.cljs$lang$applyTo = (function (arglist__39313){
var args = cljs.core.seq(arglist__39313);
return G__39311__delegate(args);
});
G__39311.cljs$core$IFn$_invoke$arity$variadic = G__39311__delegate;
return G__39311;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39314__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39315__i = 0, G__39315__a = new Array(arguments.length -  0);
while (G__39315__i < G__39315__a.length) {G__39315__a[G__39315__i] = arguments[G__39315__i + 0]; ++G__39315__i;}
  args = new cljs.core.IndexedSeq(G__39315__a,0,null);
} 
return G__39314__delegate.call(this,args);};
G__39314.cljs$lang$maxFixedArity = 0;
G__39314.cljs$lang$applyTo = (function (arglist__39316){
var args = cljs.core.seq(arglist__39316);
return G__39314__delegate(args);
});
G__39314.cljs$core$IFn$_invoke$arity$variadic = G__39314__delegate;
return G__39314;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39317__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39318__i = 0, G__39318__a = new Array(arguments.length -  0);
while (G__39318__i < G__39318__a.length) {G__39318__a[G__39318__i] = arguments[G__39318__i + 0]; ++G__39318__i;}
  args = new cljs.core.IndexedSeq(G__39318__a,0,null);
} 
return G__39317__delegate.call(this,args);};
G__39317.cljs$lang$maxFixedArity = 0;
G__39317.cljs$lang$applyTo = (function (arglist__39319){
var args = cljs.core.seq(arglist__39319);
return G__39317__delegate(args);
});
G__39317.cljs$core$IFn$_invoke$arity$variadic = G__39317__delegate;
return G__39317;
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
var G__39320__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39321__i = 0, G__39321__a = new Array(arguments.length -  0);
while (G__39321__i < G__39321__a.length) {G__39321__a[G__39321__i] = arguments[G__39321__i + 0]; ++G__39321__i;}
  args = new cljs.core.IndexedSeq(G__39321__a,0,null);
} 
return G__39320__delegate.call(this,args);};
G__39320.cljs$lang$maxFixedArity = 0;
G__39320.cljs$lang$applyTo = (function (arglist__39322){
var args = cljs.core.seq(arglist__39322);
return G__39320__delegate(args);
});
G__39320.cljs$core$IFn$_invoke$arity$variadic = G__39320__delegate;
return G__39320;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39323__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39324__i = 0, G__39324__a = new Array(arguments.length -  0);
while (G__39324__i < G__39324__a.length) {G__39324__a[G__39324__i] = arguments[G__39324__i + 0]; ++G__39324__i;}
  args = new cljs.core.IndexedSeq(G__39324__a,0,null);
} 
return G__39323__delegate.call(this,args);};
G__39323.cljs$lang$maxFixedArity = 0;
G__39323.cljs$lang$applyTo = (function (arglist__39325){
var args = cljs.core.seq(arglist__39325);
return G__39323__delegate(args);
});
G__39323.cljs$core$IFn$_invoke$arity$variadic = G__39323__delegate;
return G__39323;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39326__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39327__i = 0, G__39327__a = new Array(arguments.length -  0);
while (G__39327__i < G__39327__a.length) {G__39327__a[G__39327__i] = arguments[G__39327__i + 0]; ++G__39327__i;}
  args = new cljs.core.IndexedSeq(G__39327__a,0,null);
} 
return G__39326__delegate.call(this,args);};
G__39326.cljs$lang$maxFixedArity = 0;
G__39326.cljs$lang$applyTo = (function (arglist__39328){
var args = cljs.core.seq(arglist__39328);
return G__39326__delegate(args);
});
G__39326.cljs$core$IFn$_invoke$arity$variadic = G__39326__delegate;
return G__39326;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__39329__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39330__i = 0, G__39330__a = new Array(arguments.length -  0);
while (G__39330__i < G__39330__a.length) {G__39330__a[G__39330__i] = arguments[G__39330__i + 0]; ++G__39330__i;}
  args = new cljs.core.IndexedSeq(G__39330__a,0,null);
} 
return G__39329__delegate.call(this,args);};
G__39329.cljs$lang$maxFixedArity = 0;
G__39329.cljs$lang$applyTo = (function (arglist__39331){
var args = cljs.core.seq(arglist__39331);
return G__39329__delegate(args);
});
G__39329.cljs$core$IFn$_invoke$arity$variadic = G__39329__delegate;
return G__39329;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39332__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39333__i = 0, G__39333__a = new Array(arguments.length -  0);
while (G__39333__i < G__39333__a.length) {G__39333__a[G__39333__i] = arguments[G__39333__i + 0]; ++G__39333__i;}
  args = new cljs.core.IndexedSeq(G__39333__a,0,null);
} 
return G__39332__delegate.call(this,args);};
G__39332.cljs$lang$maxFixedArity = 0;
G__39332.cljs$lang$applyTo = (function (arglist__39334){
var args = cljs.core.seq(arglist__39334);
return G__39332__delegate(args);
});
G__39332.cljs$core$IFn$_invoke$arity$variadic = G__39332__delegate;
return G__39332;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39335__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39336__i = 0, G__39336__a = new Array(arguments.length -  0);
while (G__39336__i < G__39336__a.length) {G__39336__a[G__39336__i] = arguments[G__39336__i + 0]; ++G__39336__i;}
  args = new cljs.core.IndexedSeq(G__39336__a,0,null);
} 
return G__39335__delegate.call(this,args);};
G__39335.cljs$lang$maxFixedArity = 0;
G__39335.cljs$lang$applyTo = (function (arglist__39337){
var args = cljs.core.seq(arglist__39337);
return G__39335__delegate(args);
});
G__39335.cljs$core$IFn$_invoke$arity$variadic = G__39335__delegate;
return G__39335;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__39338__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39339__i = 0, G__39339__a = new Array(arguments.length -  0);
while (G__39339__i < G__39339__a.length) {G__39339__a[G__39339__i] = arguments[G__39339__i + 0]; ++G__39339__i;}
  args = new cljs.core.IndexedSeq(G__39339__a,0,null);
} 
return G__39338__delegate.call(this,args);};
G__39338.cljs$lang$maxFixedArity = 0;
G__39338.cljs$lang$applyTo = (function (arglist__39340){
var args = cljs.core.seq(arglist__39340);
return G__39338__delegate(args);
});
G__39338.cljs$core$IFn$_invoke$arity$variadic = G__39338__delegate;
return G__39338;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39341__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39342__i = 0, G__39342__a = new Array(arguments.length -  0);
while (G__39342__i < G__39342__a.length) {G__39342__a[G__39342__i] = arguments[G__39342__i + 0]; ++G__39342__i;}
  args = new cljs.core.IndexedSeq(G__39342__a,0,null);
} 
return G__39341__delegate.call(this,args);};
G__39341.cljs$lang$maxFixedArity = 0;
G__39341.cljs$lang$applyTo = (function (arglist__39343){
var args = cljs.core.seq(arglist__39343);
return G__39341__delegate(args);
});
G__39341.cljs$core$IFn$_invoke$arity$variadic = G__39341__delegate;
return G__39341;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39344__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39345__i = 0, G__39345__a = new Array(arguments.length -  0);
while (G__39345__i < G__39345__a.length) {G__39345__a[G__39345__i] = arguments[G__39345__i + 0]; ++G__39345__i;}
  args = new cljs.core.IndexedSeq(G__39345__a,0,null);
} 
return G__39344__delegate.call(this,args);};
G__39344.cljs$lang$maxFixedArity = 0;
G__39344.cljs$lang$applyTo = (function (arglist__39346){
var args = cljs.core.seq(arglist__39346);
return G__39344__delegate(args);
});
G__39344.cljs$core$IFn$_invoke$arity$variadic = G__39344__delegate;
return G__39344;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39347__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39348__i = 0, G__39348__a = new Array(arguments.length -  0);
while (G__39348__i < G__39348__a.length) {G__39348__a[G__39348__i] = arguments[G__39348__i + 0]; ++G__39348__i;}
  args = new cljs.core.IndexedSeq(G__39348__a,0,null);
} 
return G__39347__delegate.call(this,args);};
G__39347.cljs$lang$maxFixedArity = 0;
G__39347.cljs$lang$applyTo = (function (arglist__39349){
var args = cljs.core.seq(arglist__39349);
return G__39347__delegate(args);
});
G__39347.cljs$core$IFn$_invoke$arity$variadic = G__39347__delegate;
return G__39347;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39350__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39351__i = 0, G__39351__a = new Array(arguments.length -  0);
while (G__39351__i < G__39351__a.length) {G__39351__a[G__39351__i] = arguments[G__39351__i + 0]; ++G__39351__i;}
  args = new cljs.core.IndexedSeq(G__39351__a,0,null);
} 
return G__39350__delegate.call(this,args);};
G__39350.cljs$lang$maxFixedArity = 0;
G__39350.cljs$lang$applyTo = (function (arglist__39352){
var args = cljs.core.seq(arglist__39352);
return G__39350__delegate(args);
});
G__39350.cljs$core$IFn$_invoke$arity$variadic = G__39350__delegate;
return G__39350;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39353__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39354__i = 0, G__39354__a = new Array(arguments.length -  0);
while (G__39354__i < G__39354__a.length) {G__39354__a[G__39354__i] = arguments[G__39354__i + 0]; ++G__39354__i;}
  args = new cljs.core.IndexedSeq(G__39354__a,0,null);
} 
return G__39353__delegate.call(this,args);};
G__39353.cljs$lang$maxFixedArity = 0;
G__39353.cljs$lang$applyTo = (function (arglist__39355){
var args = cljs.core.seq(arglist__39355);
return G__39353__delegate(args);
});
G__39353.cljs$core$IFn$_invoke$arity$variadic = G__39353__delegate;
return G__39353;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526408770550
