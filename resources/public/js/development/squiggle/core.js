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
var G__41426__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41427__i = 0, G__41427__a = new Array(arguments.length -  0);
while (G__41427__i < G__41427__a.length) {G__41427__a[G__41427__i] = arguments[G__41427__i + 0]; ++G__41427__i;}
  args = new cljs.core.IndexedSeq(G__41427__a,0,null);
} 
return G__41426__delegate.call(this,args);};
G__41426.cljs$lang$maxFixedArity = 0;
G__41426.cljs$lang$applyTo = (function (arglist__41428){
var args = cljs.core.seq(arglist__41428);
return G__41426__delegate(args);
});
G__41426.cljs$core$IFn$_invoke$arity$variadic = G__41426__delegate;
return G__41426;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41429__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41430__i = 0, G__41430__a = new Array(arguments.length -  0);
while (G__41430__i < G__41430__a.length) {G__41430__a[G__41430__i] = arguments[G__41430__i + 0]; ++G__41430__i;}
  args = new cljs.core.IndexedSeq(G__41430__a,0,null);
} 
return G__41429__delegate.call(this,args);};
G__41429.cljs$lang$maxFixedArity = 0;
G__41429.cljs$lang$applyTo = (function (arglist__41431){
var args = cljs.core.seq(arglist__41431);
return G__41429__delegate(args);
});
G__41429.cljs$core$IFn$_invoke$arity$variadic = G__41429__delegate;
return G__41429;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41432__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41433__i = 0, G__41433__a = new Array(arguments.length -  0);
while (G__41433__i < G__41433__a.length) {G__41433__a[G__41433__i] = arguments[G__41433__i + 0]; ++G__41433__i;}
  args = new cljs.core.IndexedSeq(G__41433__a,0,null);
} 
return G__41432__delegate.call(this,args);};
G__41432.cljs$lang$maxFixedArity = 0;
G__41432.cljs$lang$applyTo = (function (arglist__41434){
var args = cljs.core.seq(arglist__41434);
return G__41432__delegate(args);
});
G__41432.cljs$core$IFn$_invoke$arity$variadic = G__41432__delegate;
return G__41432;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__41435__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41436__i = 0, G__41436__a = new Array(arguments.length -  0);
while (G__41436__i < G__41436__a.length) {G__41436__a[G__41436__i] = arguments[G__41436__i + 0]; ++G__41436__i;}
  args = new cljs.core.IndexedSeq(G__41436__a,0,null);
} 
return G__41435__delegate.call(this,args);};
G__41435.cljs$lang$maxFixedArity = 0;
G__41435.cljs$lang$applyTo = (function (arglist__41437){
var args = cljs.core.seq(arglist__41437);
return G__41435__delegate(args);
});
G__41435.cljs$core$IFn$_invoke$arity$variadic = G__41435__delegate;
return G__41435;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41438__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41439__i = 0, G__41439__a = new Array(arguments.length -  0);
while (G__41439__i < G__41439__a.length) {G__41439__a[G__41439__i] = arguments[G__41439__i + 0]; ++G__41439__i;}
  args = new cljs.core.IndexedSeq(G__41439__a,0,null);
} 
return G__41438__delegate.call(this,args);};
G__41438.cljs$lang$maxFixedArity = 0;
G__41438.cljs$lang$applyTo = (function (arglist__41440){
var args = cljs.core.seq(arglist__41440);
return G__41438__delegate(args);
});
G__41438.cljs$core$IFn$_invoke$arity$variadic = G__41438__delegate;
return G__41438;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41441__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41442__i = 0, G__41442__a = new Array(arguments.length -  0);
while (G__41442__i < G__41442__a.length) {G__41442__a[G__41442__i] = arguments[G__41442__i + 0]; ++G__41442__i;}
  args = new cljs.core.IndexedSeq(G__41442__a,0,null);
} 
return G__41441__delegate.call(this,args);};
G__41441.cljs$lang$maxFixedArity = 0;
G__41441.cljs$lang$applyTo = (function (arglist__41443){
var args = cljs.core.seq(arglist__41443);
return G__41441__delegate(args);
});
G__41441.cljs$core$IFn$_invoke$arity$variadic = G__41441__delegate;
return G__41441;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__41444__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41445__i = 0, G__41445__a = new Array(arguments.length -  0);
while (G__41445__i < G__41445__a.length) {G__41445__a[G__41445__i] = arguments[G__41445__i + 0]; ++G__41445__i;}
  args = new cljs.core.IndexedSeq(G__41445__a,0,null);
} 
return G__41444__delegate.call(this,args);};
G__41444.cljs$lang$maxFixedArity = 0;
G__41444.cljs$lang$applyTo = (function (arglist__41446){
var args = cljs.core.seq(arglist__41446);
return G__41444__delegate(args);
});
G__41444.cljs$core$IFn$_invoke$arity$variadic = G__41444__delegate;
return G__41444;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41447__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41448__i = 0, G__41448__a = new Array(arguments.length -  0);
while (G__41448__i < G__41448__a.length) {G__41448__a[G__41448__i] = arguments[G__41448__i + 0]; ++G__41448__i;}
  args = new cljs.core.IndexedSeq(G__41448__a,0,null);
} 
return G__41447__delegate.call(this,args);};
G__41447.cljs$lang$maxFixedArity = 0;
G__41447.cljs$lang$applyTo = (function (arglist__41449){
var args = cljs.core.seq(arglist__41449);
return G__41447__delegate(args);
});
G__41447.cljs$core$IFn$_invoke$arity$variadic = G__41447__delegate;
return G__41447;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41450__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41451__i = 0, G__41451__a = new Array(arguments.length -  0);
while (G__41451__i < G__41451__a.length) {G__41451__a[G__41451__i] = arguments[G__41451__i + 0]; ++G__41451__i;}
  args = new cljs.core.IndexedSeq(G__41451__a,0,null);
} 
return G__41450__delegate.call(this,args);};
G__41450.cljs$lang$maxFixedArity = 0;
G__41450.cljs$lang$applyTo = (function (arglist__41452){
var args = cljs.core.seq(arglist__41452);
return G__41450__delegate(args);
});
G__41450.cljs$core$IFn$_invoke$arity$variadic = G__41450__delegate;
return G__41450;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__41453__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41454__i = 0, G__41454__a = new Array(arguments.length -  0);
while (G__41454__i < G__41454__a.length) {G__41454__a[G__41454__i] = arguments[G__41454__i + 0]; ++G__41454__i;}
  args = new cljs.core.IndexedSeq(G__41454__a,0,null);
} 
return G__41453__delegate.call(this,args);};
G__41453.cljs$lang$maxFixedArity = 0;
G__41453.cljs$lang$applyTo = (function (arglist__41455){
var args = cljs.core.seq(arglist__41455);
return G__41453__delegate(args);
});
G__41453.cljs$core$IFn$_invoke$arity$variadic = G__41453__delegate;
return G__41453;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41456__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41457__i = 0, G__41457__a = new Array(arguments.length -  0);
while (G__41457__i < G__41457__a.length) {G__41457__a[G__41457__i] = arguments[G__41457__i + 0]; ++G__41457__i;}
  args = new cljs.core.IndexedSeq(G__41457__a,0,null);
} 
return G__41456__delegate.call(this,args);};
G__41456.cljs$lang$maxFixedArity = 0;
G__41456.cljs$lang$applyTo = (function (arglist__41458){
var args = cljs.core.seq(arglist__41458);
return G__41456__delegate(args);
});
G__41456.cljs$core$IFn$_invoke$arity$variadic = G__41456__delegate;
return G__41456;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41459__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41460__i = 0, G__41460__a = new Array(arguments.length -  0);
while (G__41460__i < G__41460__a.length) {G__41460__a[G__41460__i] = arguments[G__41460__i + 0]; ++G__41460__i;}
  args = new cljs.core.IndexedSeq(G__41460__a,0,null);
} 
return G__41459__delegate.call(this,args);};
G__41459.cljs$lang$maxFixedArity = 0;
G__41459.cljs$lang$applyTo = (function (arglist__41461){
var args = cljs.core.seq(arglist__41461);
return G__41459__delegate(args);
});
G__41459.cljs$core$IFn$_invoke$arity$variadic = G__41459__delegate;
return G__41459;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41462__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41463__i = 0, G__41463__a = new Array(arguments.length -  0);
while (G__41463__i < G__41463__a.length) {G__41463__a[G__41463__i] = arguments[G__41463__i + 0]; ++G__41463__i;}
  args = new cljs.core.IndexedSeq(G__41463__a,0,null);
} 
return G__41462__delegate.call(this,args);};
G__41462.cljs$lang$maxFixedArity = 0;
G__41462.cljs$lang$applyTo = (function (arglist__41464){
var args = cljs.core.seq(arglist__41464);
return G__41462__delegate(args);
});
G__41462.cljs$core$IFn$_invoke$arity$variadic = G__41462__delegate;
return G__41462;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__41465__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__41465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41466__i = 0, G__41466__a = new Array(arguments.length -  0);
while (G__41466__i < G__41466__a.length) {G__41466__a[G__41466__i] = arguments[G__41466__i + 0]; ++G__41466__i;}
  args = new cljs.core.IndexedSeq(G__41466__a,0,null);
} 
return G__41465__delegate.call(this,args);};
G__41465.cljs$lang$maxFixedArity = 0;
G__41465.cljs$lang$applyTo = (function (arglist__41467){
var args = cljs.core.seq(arglist__41467);
return G__41465__delegate(args);
});
G__41465.cljs$core$IFn$_invoke$arity$variadic = G__41465__delegate;
return G__41465;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41468__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41469__i = 0, G__41469__a = new Array(arguments.length -  0);
while (G__41469__i < G__41469__a.length) {G__41469__a[G__41469__i] = arguments[G__41469__i + 0]; ++G__41469__i;}
  args = new cljs.core.IndexedSeq(G__41469__a,0,null);
} 
return G__41468__delegate.call(this,args);};
G__41468.cljs$lang$maxFixedArity = 0;
G__41468.cljs$lang$applyTo = (function (arglist__41470){
var args = cljs.core.seq(arglist__41470);
return G__41468__delegate(args);
});
G__41468.cljs$core$IFn$_invoke$arity$variadic = G__41468__delegate;
return G__41468;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41471__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41472__i = 0, G__41472__a = new Array(arguments.length -  0);
while (G__41472__i < G__41472__a.length) {G__41472__a[G__41472__i] = arguments[G__41472__i + 0]; ++G__41472__i;}
  args = new cljs.core.IndexedSeq(G__41472__a,0,null);
} 
return G__41471__delegate.call(this,args);};
G__41471.cljs$lang$maxFixedArity = 0;
G__41471.cljs$lang$applyTo = (function (arglist__41473){
var args = cljs.core.seq(arglist__41473);
return G__41471__delegate(args);
});
G__41471.cljs$core$IFn$_invoke$arity$variadic = G__41471__delegate;
return G__41471;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__41474__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__41474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41475__i = 0, G__41475__a = new Array(arguments.length -  0);
while (G__41475__i < G__41475__a.length) {G__41475__a[G__41475__i] = arguments[G__41475__i + 0]; ++G__41475__i;}
  args = new cljs.core.IndexedSeq(G__41475__a,0,null);
} 
return G__41474__delegate.call(this,args);};
G__41474.cljs$lang$maxFixedArity = 0;
G__41474.cljs$lang$applyTo = (function (arglist__41476){
var args = cljs.core.seq(arglist__41476);
return G__41474__delegate(args);
});
G__41474.cljs$core$IFn$_invoke$arity$variadic = G__41474__delegate;
return G__41474;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41477__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41478__i = 0, G__41478__a = new Array(arguments.length -  0);
while (G__41478__i < G__41478__a.length) {G__41478__a[G__41478__i] = arguments[G__41478__i + 0]; ++G__41478__i;}
  args = new cljs.core.IndexedSeq(G__41478__a,0,null);
} 
return G__41477__delegate.call(this,args);};
G__41477.cljs$lang$maxFixedArity = 0;
G__41477.cljs$lang$applyTo = (function (arglist__41479){
var args = cljs.core.seq(arglist__41479);
return G__41477__delegate(args);
});
G__41477.cljs$core$IFn$_invoke$arity$variadic = G__41477__delegate;
return G__41477;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41480__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41481__i = 0, G__41481__a = new Array(arguments.length -  0);
while (G__41481__i < G__41481__a.length) {G__41481__a[G__41481__i] = arguments[G__41481__i + 0]; ++G__41481__i;}
  args = new cljs.core.IndexedSeq(G__41481__a,0,null);
} 
return G__41480__delegate.call(this,args);};
G__41480.cljs$lang$maxFixedArity = 0;
G__41480.cljs$lang$applyTo = (function (arglist__41482){
var args = cljs.core.seq(arglist__41482);
return G__41480__delegate(args);
});
G__41480.cljs$core$IFn$_invoke$arity$variadic = G__41480__delegate;
return G__41480;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__41483__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__41483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41484__i = 0, G__41484__a = new Array(arguments.length -  0);
while (G__41484__i < G__41484__a.length) {G__41484__a[G__41484__i] = arguments[G__41484__i + 0]; ++G__41484__i;}
  args = new cljs.core.IndexedSeq(G__41484__a,0,null);
} 
return G__41483__delegate.call(this,args);};
G__41483.cljs$lang$maxFixedArity = 0;
G__41483.cljs$lang$applyTo = (function (arglist__41485){
var args = cljs.core.seq(arglist__41485);
return G__41483__delegate(args);
});
G__41483.cljs$core$IFn$_invoke$arity$variadic = G__41483__delegate;
return G__41483;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41486__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41487__i = 0, G__41487__a = new Array(arguments.length -  0);
while (G__41487__i < G__41487__a.length) {G__41487__a[G__41487__i] = arguments[G__41487__i + 0]; ++G__41487__i;}
  args = new cljs.core.IndexedSeq(G__41487__a,0,null);
} 
return G__41486__delegate.call(this,args);};
G__41486.cljs$lang$maxFixedArity = 0;
G__41486.cljs$lang$applyTo = (function (arglist__41488){
var args = cljs.core.seq(arglist__41488);
return G__41486__delegate(args);
});
G__41486.cljs$core$IFn$_invoke$arity$variadic = G__41486__delegate;
return G__41486;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41489__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41490__i = 0, G__41490__a = new Array(arguments.length -  0);
while (G__41490__i < G__41490__a.length) {G__41490__a[G__41490__i] = arguments[G__41490__i + 0]; ++G__41490__i;}
  args = new cljs.core.IndexedSeq(G__41490__a,0,null);
} 
return G__41489__delegate.call(this,args);};
G__41489.cljs$lang$maxFixedArity = 0;
G__41489.cljs$lang$applyTo = (function (arglist__41491){
var args = cljs.core.seq(arglist__41491);
return G__41489__delegate(args);
});
G__41489.cljs$core$IFn$_invoke$arity$variadic = G__41489__delegate;
return G__41489;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__41492__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__41492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41493__i = 0, G__41493__a = new Array(arguments.length -  0);
while (G__41493__i < G__41493__a.length) {G__41493__a[G__41493__i] = arguments[G__41493__i + 0]; ++G__41493__i;}
  args = new cljs.core.IndexedSeq(G__41493__a,0,null);
} 
return G__41492__delegate.call(this,args);};
G__41492.cljs$lang$maxFixedArity = 0;
G__41492.cljs$lang$applyTo = (function (arglist__41494){
var args = cljs.core.seq(arglist__41494);
return G__41492__delegate(args);
});
G__41492.cljs$core$IFn$_invoke$arity$variadic = G__41492__delegate;
return G__41492;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41495__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41496__i = 0, G__41496__a = new Array(arguments.length -  0);
while (G__41496__i < G__41496__a.length) {G__41496__a[G__41496__i] = arguments[G__41496__i + 0]; ++G__41496__i;}
  args = new cljs.core.IndexedSeq(G__41496__a,0,null);
} 
return G__41495__delegate.call(this,args);};
G__41495.cljs$lang$maxFixedArity = 0;
G__41495.cljs$lang$applyTo = (function (arglist__41497){
var args = cljs.core.seq(arglist__41497);
return G__41495__delegate(args);
});
G__41495.cljs$core$IFn$_invoke$arity$variadic = G__41495__delegate;
return G__41495;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__41498__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__41498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41499__i = 0, G__41499__a = new Array(arguments.length -  0);
while (G__41499__i < G__41499__a.length) {G__41499__a[G__41499__i] = arguments[G__41499__i + 0]; ++G__41499__i;}
  args = new cljs.core.IndexedSeq(G__41499__a,0,null);
} 
return G__41498__delegate.call(this,args);};
G__41498.cljs$lang$maxFixedArity = 0;
G__41498.cljs$lang$applyTo = (function (arglist__41500){
var args = cljs.core.seq(arglist__41500);
return G__41498__delegate(args);
});
G__41498.cljs$core$IFn$_invoke$arity$variadic = G__41498__delegate;
return G__41498;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__41501__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__41501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41502__i = 0, G__41502__a = new Array(arguments.length -  0);
while (G__41502__i < G__41502__a.length) {G__41502__a[G__41502__i] = arguments[G__41502__i + 0]; ++G__41502__i;}
  args = new cljs.core.IndexedSeq(G__41502__a,0,null);
} 
return G__41501__delegate.call(this,args);};
G__41501.cljs$lang$maxFixedArity = 0;
G__41501.cljs$lang$applyTo = (function (arglist__41503){
var args = cljs.core.seq(arglist__41503);
return G__41501__delegate(args);
});
G__41501.cljs$core$IFn$_invoke$arity$variadic = G__41501__delegate;
return G__41501;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__41504__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__41504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41505__i = 0, G__41505__a = new Array(arguments.length -  0);
while (G__41505__i < G__41505__a.length) {G__41505__a[G__41505__i] = arguments[G__41505__i + 0]; ++G__41505__i;}
  args = new cljs.core.IndexedSeq(G__41505__a,0,null);
} 
return G__41504__delegate.call(this,args);};
G__41504.cljs$lang$maxFixedArity = 0;
G__41504.cljs$lang$applyTo = (function (arglist__41506){
var args = cljs.core.seq(arglist__41506);
return G__41504__delegate(args);
});
G__41504.cljs$core$IFn$_invoke$arity$variadic = G__41504__delegate;
return G__41504;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27194__27195__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27194__27195__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527202231859
