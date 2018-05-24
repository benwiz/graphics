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
goog.require('squiggle.delaunay_monsters');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__40306__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40307__i = 0, G__40307__a = new Array(arguments.length -  0);
while (G__40307__i < G__40307__a.length) {G__40307__a[G__40307__i] = arguments[G__40307__i + 0]; ++G__40307__i;}
  args = new cljs.core.IndexedSeq(G__40307__a,0,null);
} 
return G__40306__delegate.call(this,args);};
G__40306.cljs$lang$maxFixedArity = 0;
G__40306.cljs$lang$applyTo = (function (arglist__40308){
var args = cljs.core.seq(arglist__40308);
return G__40306__delegate(args);
});
G__40306.cljs$core$IFn$_invoke$arity$variadic = G__40306__delegate;
return G__40306;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40309__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40310__i = 0, G__40310__a = new Array(arguments.length -  0);
while (G__40310__i < G__40310__a.length) {G__40310__a[G__40310__i] = arguments[G__40310__i + 0]; ++G__40310__i;}
  args = new cljs.core.IndexedSeq(G__40310__a,0,null);
} 
return G__40309__delegate.call(this,args);};
G__40309.cljs$lang$maxFixedArity = 0;
G__40309.cljs$lang$applyTo = (function (arglist__40311){
var args = cljs.core.seq(arglist__40311);
return G__40309__delegate(args);
});
G__40309.cljs$core$IFn$_invoke$arity$variadic = G__40309__delegate;
return G__40309;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40312__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40313__i = 0, G__40313__a = new Array(arguments.length -  0);
while (G__40313__i < G__40313__a.length) {G__40313__a[G__40313__i] = arguments[G__40313__i + 0]; ++G__40313__i;}
  args = new cljs.core.IndexedSeq(G__40313__a,0,null);
} 
return G__40312__delegate.call(this,args);};
G__40312.cljs$lang$maxFixedArity = 0;
G__40312.cljs$lang$applyTo = (function (arglist__40314){
var args = cljs.core.seq(arglist__40314);
return G__40312__delegate(args);
});
G__40312.cljs$core$IFn$_invoke$arity$variadic = G__40312__delegate;
return G__40312;
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
var G__40315__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40316__i = 0, G__40316__a = new Array(arguments.length -  0);
while (G__40316__i < G__40316__a.length) {G__40316__a[G__40316__i] = arguments[G__40316__i + 0]; ++G__40316__i;}
  args = new cljs.core.IndexedSeq(G__40316__a,0,null);
} 
return G__40315__delegate.call(this,args);};
G__40315.cljs$lang$maxFixedArity = 0;
G__40315.cljs$lang$applyTo = (function (arglist__40317){
var args = cljs.core.seq(arglist__40317);
return G__40315__delegate(args);
});
G__40315.cljs$core$IFn$_invoke$arity$variadic = G__40315__delegate;
return G__40315;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40318__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40319__i = 0, G__40319__a = new Array(arguments.length -  0);
while (G__40319__i < G__40319__a.length) {G__40319__a[G__40319__i] = arguments[G__40319__i + 0]; ++G__40319__i;}
  args = new cljs.core.IndexedSeq(G__40319__a,0,null);
} 
return G__40318__delegate.call(this,args);};
G__40318.cljs$lang$maxFixedArity = 0;
G__40318.cljs$lang$applyTo = (function (arglist__40320){
var args = cljs.core.seq(arglist__40320);
return G__40318__delegate(args);
});
G__40318.cljs$core$IFn$_invoke$arity$variadic = G__40318__delegate;
return G__40318;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40321__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40322__i = 0, G__40322__a = new Array(arguments.length -  0);
while (G__40322__i < G__40322__a.length) {G__40322__a[G__40322__i] = arguments[G__40322__i + 0]; ++G__40322__i;}
  args = new cljs.core.IndexedSeq(G__40322__a,0,null);
} 
return G__40321__delegate.call(this,args);};
G__40321.cljs$lang$maxFixedArity = 0;
G__40321.cljs$lang$applyTo = (function (arglist__40323){
var args = cljs.core.seq(arglist__40323);
return G__40321__delegate(args);
});
G__40321.cljs$core$IFn$_invoke$arity$variadic = G__40321__delegate;
return G__40321;
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
var G__40324__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40325__i = 0, G__40325__a = new Array(arguments.length -  0);
while (G__40325__i < G__40325__a.length) {G__40325__a[G__40325__i] = arguments[G__40325__i + 0]; ++G__40325__i;}
  args = new cljs.core.IndexedSeq(G__40325__a,0,null);
} 
return G__40324__delegate.call(this,args);};
G__40324.cljs$lang$maxFixedArity = 0;
G__40324.cljs$lang$applyTo = (function (arglist__40326){
var args = cljs.core.seq(arglist__40326);
return G__40324__delegate(args);
});
G__40324.cljs$core$IFn$_invoke$arity$variadic = G__40324__delegate;
return G__40324;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40327__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40328__i = 0, G__40328__a = new Array(arguments.length -  0);
while (G__40328__i < G__40328__a.length) {G__40328__a[G__40328__i] = arguments[G__40328__i + 0]; ++G__40328__i;}
  args = new cljs.core.IndexedSeq(G__40328__a,0,null);
} 
return G__40327__delegate.call(this,args);};
G__40327.cljs$lang$maxFixedArity = 0;
G__40327.cljs$lang$applyTo = (function (arglist__40329){
var args = cljs.core.seq(arglist__40329);
return G__40327__delegate(args);
});
G__40327.cljs$core$IFn$_invoke$arity$variadic = G__40327__delegate;
return G__40327;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40330__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40331__i = 0, G__40331__a = new Array(arguments.length -  0);
while (G__40331__i < G__40331__a.length) {G__40331__a[G__40331__i] = arguments[G__40331__i + 0]; ++G__40331__i;}
  args = new cljs.core.IndexedSeq(G__40331__a,0,null);
} 
return G__40330__delegate.call(this,args);};
G__40330.cljs$lang$maxFixedArity = 0;
G__40330.cljs$lang$applyTo = (function (arglist__40332){
var args = cljs.core.seq(arglist__40332);
return G__40330__delegate(args);
});
G__40330.cljs$core$IFn$_invoke$arity$variadic = G__40330__delegate;
return G__40330;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__40333__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40334__i = 0, G__40334__a = new Array(arguments.length -  0);
while (G__40334__i < G__40334__a.length) {G__40334__a[G__40334__i] = arguments[G__40334__i + 0]; ++G__40334__i;}
  args = new cljs.core.IndexedSeq(G__40334__a,0,null);
} 
return G__40333__delegate.call(this,args);};
G__40333.cljs$lang$maxFixedArity = 0;
G__40333.cljs$lang$applyTo = (function (arglist__40335){
var args = cljs.core.seq(arglist__40335);
return G__40333__delegate(args);
});
G__40333.cljs$core$IFn$_invoke$arity$variadic = G__40333__delegate;
return G__40333;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40336__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40337__i = 0, G__40337__a = new Array(arguments.length -  0);
while (G__40337__i < G__40337__a.length) {G__40337__a[G__40337__i] = arguments[G__40337__i + 0]; ++G__40337__i;}
  args = new cljs.core.IndexedSeq(G__40337__a,0,null);
} 
return G__40336__delegate.call(this,args);};
G__40336.cljs$lang$maxFixedArity = 0;
G__40336.cljs$lang$applyTo = (function (arglist__40338){
var args = cljs.core.seq(arglist__40338);
return G__40336__delegate(args);
});
G__40336.cljs$core$IFn$_invoke$arity$variadic = G__40336__delegate;
return G__40336;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40339__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40340__i = 0, G__40340__a = new Array(arguments.length -  0);
while (G__40340__i < G__40340__a.length) {G__40340__a[G__40340__i] = arguments[G__40340__i + 0]; ++G__40340__i;}
  args = new cljs.core.IndexedSeq(G__40340__a,0,null);
} 
return G__40339__delegate.call(this,args);};
G__40339.cljs$lang$maxFixedArity = 0;
G__40339.cljs$lang$applyTo = (function (arglist__40341){
var args = cljs.core.seq(arglist__40341);
return G__40339__delegate(args);
});
G__40339.cljs$core$IFn$_invoke$arity$variadic = G__40339__delegate;
return G__40339;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40342__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40343__i = 0, G__40343__a = new Array(arguments.length -  0);
while (G__40343__i < G__40343__a.length) {G__40343__a[G__40343__i] = arguments[G__40343__i + 0]; ++G__40343__i;}
  args = new cljs.core.IndexedSeq(G__40343__a,0,null);
} 
return G__40342__delegate.call(this,args);};
G__40342.cljs$lang$maxFixedArity = 0;
G__40342.cljs$lang$applyTo = (function (arglist__40344){
var args = cljs.core.seq(arglist__40344);
return G__40342__delegate(args);
});
G__40342.cljs$core$IFn$_invoke$arity$variadic = G__40342__delegate;
return G__40342;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40345__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40346__i = 0, G__40346__a = new Array(arguments.length -  0);
while (G__40346__i < G__40346__a.length) {G__40346__a[G__40346__i] = arguments[G__40346__i + 0]; ++G__40346__i;}
  args = new cljs.core.IndexedSeq(G__40346__a,0,null);
} 
return G__40345__delegate.call(this,args);};
G__40345.cljs$lang$maxFixedArity = 0;
G__40345.cljs$lang$applyTo = (function (arglist__40347){
var args = cljs.core.seq(arglist__40347);
return G__40345__delegate(args);
});
G__40345.cljs$core$IFn$_invoke$arity$variadic = G__40345__delegate;
return G__40345;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40348__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40349__i = 0, G__40349__a = new Array(arguments.length -  0);
while (G__40349__i < G__40349__a.length) {G__40349__a[G__40349__i] = arguments[G__40349__i + 0]; ++G__40349__i;}
  args = new cljs.core.IndexedSeq(G__40349__a,0,null);
} 
return G__40348__delegate.call(this,args);};
G__40348.cljs$lang$maxFixedArity = 0;
G__40348.cljs$lang$applyTo = (function (arglist__40350){
var args = cljs.core.seq(arglist__40350);
return G__40348__delegate(args);
});
G__40348.cljs$core$IFn$_invoke$arity$variadic = G__40348__delegate;
return G__40348;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40351__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40352__i = 0, G__40352__a = new Array(arguments.length -  0);
while (G__40352__i < G__40352__a.length) {G__40352__a[G__40352__i] = arguments[G__40352__i + 0]; ++G__40352__i;}
  args = new cljs.core.IndexedSeq(G__40352__a,0,null);
} 
return G__40351__delegate.call(this,args);};
G__40351.cljs$lang$maxFixedArity = 0;
G__40351.cljs$lang$applyTo = (function (arglist__40353){
var args = cljs.core.seq(arglist__40353);
return G__40351__delegate(args);
});
G__40351.cljs$core$IFn$_invoke$arity$variadic = G__40351__delegate;
return G__40351;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40354__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40355__i = 0, G__40355__a = new Array(arguments.length -  0);
while (G__40355__i < G__40355__a.length) {G__40355__a[G__40355__i] = arguments[G__40355__i + 0]; ++G__40355__i;}
  args = new cljs.core.IndexedSeq(G__40355__a,0,null);
} 
return G__40354__delegate.call(this,args);};
G__40354.cljs$lang$maxFixedArity = 0;
G__40354.cljs$lang$applyTo = (function (arglist__40356){
var args = cljs.core.seq(arglist__40356);
return G__40354__delegate(args);
});
G__40354.cljs$core$IFn$_invoke$arity$variadic = G__40354__delegate;
return G__40354;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40357__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40358__i = 0, G__40358__a = new Array(arguments.length -  0);
while (G__40358__i < G__40358__a.length) {G__40358__a[G__40358__i] = arguments[G__40358__i + 0]; ++G__40358__i;}
  args = new cljs.core.IndexedSeq(G__40358__a,0,null);
} 
return G__40357__delegate.call(this,args);};
G__40357.cljs$lang$maxFixedArity = 0;
G__40357.cljs$lang$applyTo = (function (arglist__40359){
var args = cljs.core.seq(arglist__40359);
return G__40357__delegate(args);
});
G__40357.cljs$core$IFn$_invoke$arity$variadic = G__40357__delegate;
return G__40357;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40360__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40361__i = 0, G__40361__a = new Array(arguments.length -  0);
while (G__40361__i < G__40361__a.length) {G__40361__a[G__40361__i] = arguments[G__40361__i + 0]; ++G__40361__i;}
  args = new cljs.core.IndexedSeq(G__40361__a,0,null);
} 
return G__40360__delegate.call(this,args);};
G__40360.cljs$lang$maxFixedArity = 0;
G__40360.cljs$lang$applyTo = (function (arglist__40362){
var args = cljs.core.seq(arglist__40362);
return G__40360__delegate(args);
});
G__40360.cljs$core$IFn$_invoke$arity$variadic = G__40360__delegate;
return G__40360;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40363__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40364__i = 0, G__40364__a = new Array(arguments.length -  0);
while (G__40364__i < G__40364__a.length) {G__40364__a[G__40364__i] = arguments[G__40364__i + 0]; ++G__40364__i;}
  args = new cljs.core.IndexedSeq(G__40364__a,0,null);
} 
return G__40363__delegate.call(this,args);};
G__40363.cljs$lang$maxFixedArity = 0;
G__40363.cljs$lang$applyTo = (function (arglist__40365){
var args = cljs.core.seq(arglist__40365);
return G__40363__delegate(args);
});
G__40363.cljs$core$IFn$_invoke$arity$variadic = G__40363__delegate;
return G__40363;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40366__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40367__i = 0, G__40367__a = new Array(arguments.length -  0);
while (G__40367__i < G__40367__a.length) {G__40367__a[G__40367__i] = arguments[G__40367__i + 0]; ++G__40367__i;}
  args = new cljs.core.IndexedSeq(G__40367__a,0,null);
} 
return G__40366__delegate.call(this,args);};
G__40366.cljs$lang$maxFixedArity = 0;
G__40366.cljs$lang$applyTo = (function (arglist__40368){
var args = cljs.core.seq(arglist__40368);
return G__40366__delegate(args);
});
G__40366.cljs$core$IFn$_invoke$arity$variadic = G__40366__delegate;
return G__40366;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40369__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40370__i = 0, G__40370__a = new Array(arguments.length -  0);
while (G__40370__i < G__40370__a.length) {G__40370__a[G__40370__i] = arguments[G__40370__i + 0]; ++G__40370__i;}
  args = new cljs.core.IndexedSeq(G__40370__a,0,null);
} 
return G__40369__delegate.call(this,args);};
G__40369.cljs$lang$maxFixedArity = 0;
G__40369.cljs$lang$applyTo = (function (arglist__40371){
var args = cljs.core.seq(arglist__40371);
return G__40369__delegate(args);
});
G__40369.cljs$core$IFn$_invoke$arity$variadic = G__40369__delegate;
return G__40369;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40372__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40373__i = 0, G__40373__a = new Array(arguments.length -  0);
while (G__40373__i < G__40373__a.length) {G__40373__a[G__40373__i] = arguments[G__40373__i + 0]; ++G__40373__i;}
  args = new cljs.core.IndexedSeq(G__40373__a,0,null);
} 
return G__40372__delegate.call(this,args);};
G__40372.cljs$lang$maxFixedArity = 0;
G__40372.cljs$lang$applyTo = (function (arglist__40374){
var args = cljs.core.seq(arglist__40374);
return G__40372__delegate(args);
});
G__40372.cljs$core$IFn$_invoke$arity$variadic = G__40372__delegate;
return G__40372;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40375__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40376__i = 0, G__40376__a = new Array(arguments.length -  0);
while (G__40376__i < G__40376__a.length) {G__40376__a[G__40376__i] = arguments[G__40376__i + 0]; ++G__40376__i;}
  args = new cljs.core.IndexedSeq(G__40376__a,0,null);
} 
return G__40375__delegate.call(this,args);};
G__40375.cljs$lang$maxFixedArity = 0;
G__40375.cljs$lang$applyTo = (function (arglist__40377){
var args = cljs.core.seq(arglist__40377);
return G__40375__delegate(args);
});
G__40375.cljs$core$IFn$_invoke$arity$variadic = G__40375__delegate;
return G__40375;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__40378__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__40378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40379__i = 0, G__40379__a = new Array(arguments.length -  0);
while (G__40379__i < G__40379__a.length) {G__40379__a[G__40379__i] = arguments[G__40379__i + 0]; ++G__40379__i;}
  args = new cljs.core.IndexedSeq(G__40379__a,0,null);
} 
return G__40378__delegate.call(this,args);};
G__40378.cljs$lang$maxFixedArity = 0;
G__40378.cljs$lang$applyTo = (function (arglist__40380){
var args = cljs.core.seq(arglist__40380);
return G__40378__delegate(args);
});
G__40378.cljs$core$IFn$_invoke$arity$variadic = G__40378__delegate;
return G__40378;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__40381__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__40381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40382__i = 0, G__40382__a = new Array(arguments.length -  0);
while (G__40382__i < G__40382__a.length) {G__40382__a[G__40382__i] = arguments[G__40382__i + 0]; ++G__40382__i;}
  args = new cljs.core.IndexedSeq(G__40382__a,0,null);
} 
return G__40381__delegate.call(this,args);};
G__40381.cljs$lang$maxFixedArity = 0;
G__40381.cljs$lang$applyTo = (function (arglist__40383){
var args = cljs.core.seq(arglist__40383);
return G__40381__delegate(args);
});
G__40381.cljs$core$IFn$_invoke$arity$variadic = G__40381__delegate;
return G__40381;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__40384__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__40384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40385__i = 0, G__40385__a = new Array(arguments.length -  0);
while (G__40385__i < G__40385__a.length) {G__40385__a[G__40385__i] = arguments[G__40385__i + 0]; ++G__40385__i;}
  args = new cljs.core.IndexedSeq(G__40385__a,0,null);
} 
return G__40384__delegate.call(this,args);};
G__40384.cljs$lang$maxFixedArity = 0;
G__40384.cljs$lang$applyTo = (function (arglist__40386){
var args = cljs.core.seq(arglist__40386);
return G__40384__delegate(args);
});
G__40384.cljs$core$IFn$_invoke$arity$variadic = G__40384__delegate;
return G__40384;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527203393668
