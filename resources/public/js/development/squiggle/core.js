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
var G__43343__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43344__i = 0, G__43344__a = new Array(arguments.length -  0);
while (G__43344__i < G__43344__a.length) {G__43344__a[G__43344__i] = arguments[G__43344__i + 0]; ++G__43344__i;}
  args = new cljs.core.IndexedSeq(G__43344__a,0,null);
} 
return G__43343__delegate.call(this,args);};
G__43343.cljs$lang$maxFixedArity = 0;
G__43343.cljs$lang$applyTo = (function (arglist__43345){
var args = cljs.core.seq(arglist__43345);
return G__43343__delegate(args);
});
G__43343.cljs$core$IFn$_invoke$arity$variadic = G__43343__delegate;
return G__43343;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43346__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43347__i = 0, G__43347__a = new Array(arguments.length -  0);
while (G__43347__i < G__43347__a.length) {G__43347__a[G__43347__i] = arguments[G__43347__i + 0]; ++G__43347__i;}
  args = new cljs.core.IndexedSeq(G__43347__a,0,null);
} 
return G__43346__delegate.call(this,args);};
G__43346.cljs$lang$maxFixedArity = 0;
G__43346.cljs$lang$applyTo = (function (arglist__43348){
var args = cljs.core.seq(arglist__43348);
return G__43346__delegate(args);
});
G__43346.cljs$core$IFn$_invoke$arity$variadic = G__43346__delegate;
return G__43346;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43349__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43350__i = 0, G__43350__a = new Array(arguments.length -  0);
while (G__43350__i < G__43350__a.length) {G__43350__a[G__43350__i] = arguments[G__43350__i + 0]; ++G__43350__i;}
  args = new cljs.core.IndexedSeq(G__43350__a,0,null);
} 
return G__43349__delegate.call(this,args);};
G__43349.cljs$lang$maxFixedArity = 0;
G__43349.cljs$lang$applyTo = (function (arglist__43351){
var args = cljs.core.seq(arglist__43351);
return G__43349__delegate(args);
});
G__43349.cljs$core$IFn$_invoke$arity$variadic = G__43349__delegate;
return G__43349;
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
var G__43352__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43353__i = 0, G__43353__a = new Array(arguments.length -  0);
while (G__43353__i < G__43353__a.length) {G__43353__a[G__43353__i] = arguments[G__43353__i + 0]; ++G__43353__i;}
  args = new cljs.core.IndexedSeq(G__43353__a,0,null);
} 
return G__43352__delegate.call(this,args);};
G__43352.cljs$lang$maxFixedArity = 0;
G__43352.cljs$lang$applyTo = (function (arglist__43354){
var args = cljs.core.seq(arglist__43354);
return G__43352__delegate(args);
});
G__43352.cljs$core$IFn$_invoke$arity$variadic = G__43352__delegate;
return G__43352;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43355__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43356__i = 0, G__43356__a = new Array(arguments.length -  0);
while (G__43356__i < G__43356__a.length) {G__43356__a[G__43356__i] = arguments[G__43356__i + 0]; ++G__43356__i;}
  args = new cljs.core.IndexedSeq(G__43356__a,0,null);
} 
return G__43355__delegate.call(this,args);};
G__43355.cljs$lang$maxFixedArity = 0;
G__43355.cljs$lang$applyTo = (function (arglist__43357){
var args = cljs.core.seq(arglist__43357);
return G__43355__delegate(args);
});
G__43355.cljs$core$IFn$_invoke$arity$variadic = G__43355__delegate;
return G__43355;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43358__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43359__i = 0, G__43359__a = new Array(arguments.length -  0);
while (G__43359__i < G__43359__a.length) {G__43359__a[G__43359__i] = arguments[G__43359__i + 0]; ++G__43359__i;}
  args = new cljs.core.IndexedSeq(G__43359__a,0,null);
} 
return G__43358__delegate.call(this,args);};
G__43358.cljs$lang$maxFixedArity = 0;
G__43358.cljs$lang$applyTo = (function (arglist__43360){
var args = cljs.core.seq(arglist__43360);
return G__43358__delegate(args);
});
G__43358.cljs$core$IFn$_invoke$arity$variadic = G__43358__delegate;
return G__43358;
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
var G__43361__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43362__i = 0, G__43362__a = new Array(arguments.length -  0);
while (G__43362__i < G__43362__a.length) {G__43362__a[G__43362__i] = arguments[G__43362__i + 0]; ++G__43362__i;}
  args = new cljs.core.IndexedSeq(G__43362__a,0,null);
} 
return G__43361__delegate.call(this,args);};
G__43361.cljs$lang$maxFixedArity = 0;
G__43361.cljs$lang$applyTo = (function (arglist__43363){
var args = cljs.core.seq(arglist__43363);
return G__43361__delegate(args);
});
G__43361.cljs$core$IFn$_invoke$arity$variadic = G__43361__delegate;
return G__43361;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43364__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43365__i = 0, G__43365__a = new Array(arguments.length -  0);
while (G__43365__i < G__43365__a.length) {G__43365__a[G__43365__i] = arguments[G__43365__i + 0]; ++G__43365__i;}
  args = new cljs.core.IndexedSeq(G__43365__a,0,null);
} 
return G__43364__delegate.call(this,args);};
G__43364.cljs$lang$maxFixedArity = 0;
G__43364.cljs$lang$applyTo = (function (arglist__43366){
var args = cljs.core.seq(arglist__43366);
return G__43364__delegate(args);
});
G__43364.cljs$core$IFn$_invoke$arity$variadic = G__43364__delegate;
return G__43364;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43367__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43368__i = 0, G__43368__a = new Array(arguments.length -  0);
while (G__43368__i < G__43368__a.length) {G__43368__a[G__43368__i] = arguments[G__43368__i + 0]; ++G__43368__i;}
  args = new cljs.core.IndexedSeq(G__43368__a,0,null);
} 
return G__43367__delegate.call(this,args);};
G__43367.cljs$lang$maxFixedArity = 0;
G__43367.cljs$lang$applyTo = (function (arglist__43369){
var args = cljs.core.seq(arglist__43369);
return G__43367__delegate(args);
});
G__43367.cljs$core$IFn$_invoke$arity$variadic = G__43367__delegate;
return G__43367;
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
var G__43370__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43371__i = 0, G__43371__a = new Array(arguments.length -  0);
while (G__43371__i < G__43371__a.length) {G__43371__a[G__43371__i] = arguments[G__43371__i + 0]; ++G__43371__i;}
  args = new cljs.core.IndexedSeq(G__43371__a,0,null);
} 
return G__43370__delegate.call(this,args);};
G__43370.cljs$lang$maxFixedArity = 0;
G__43370.cljs$lang$applyTo = (function (arglist__43372){
var args = cljs.core.seq(arglist__43372);
return G__43370__delegate(args);
});
G__43370.cljs$core$IFn$_invoke$arity$variadic = G__43370__delegate;
return G__43370;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43373__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43374__i = 0, G__43374__a = new Array(arguments.length -  0);
while (G__43374__i < G__43374__a.length) {G__43374__a[G__43374__i] = arguments[G__43374__i + 0]; ++G__43374__i;}
  args = new cljs.core.IndexedSeq(G__43374__a,0,null);
} 
return G__43373__delegate.call(this,args);};
G__43373.cljs$lang$maxFixedArity = 0;
G__43373.cljs$lang$applyTo = (function (arglist__43375){
var args = cljs.core.seq(arglist__43375);
return G__43373__delegate(args);
});
G__43373.cljs$core$IFn$_invoke$arity$variadic = G__43373__delegate;
return G__43373;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43376__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43377__i = 0, G__43377__a = new Array(arguments.length -  0);
while (G__43377__i < G__43377__a.length) {G__43377__a[G__43377__i] = arguments[G__43377__i + 0]; ++G__43377__i;}
  args = new cljs.core.IndexedSeq(G__43377__a,0,null);
} 
return G__43376__delegate.call(this,args);};
G__43376.cljs$lang$maxFixedArity = 0;
G__43376.cljs$lang$applyTo = (function (arglist__43378){
var args = cljs.core.seq(arglist__43378);
return G__43376__delegate(args);
});
G__43376.cljs$core$IFn$_invoke$arity$variadic = G__43376__delegate;
return G__43376;
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

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__43379__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43380__i = 0, G__43380__a = new Array(arguments.length -  0);
while (G__43380__i < G__43380__a.length) {G__43380__a[G__43380__i] = arguments[G__43380__i + 0]; ++G__43380__i;}
  args = new cljs.core.IndexedSeq(G__43380__a,0,null);
} 
return G__43379__delegate.call(this,args);};
G__43379.cljs$lang$maxFixedArity = 0;
G__43379.cljs$lang$applyTo = (function (arglist__43381){
var args = cljs.core.seq(arglist__43381);
return G__43379__delegate(args);
});
G__43379.cljs$core$IFn$_invoke$arity$variadic = G__43379__delegate;
return G__43379;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__43382__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__43382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43383__i = 0, G__43383__a = new Array(arguments.length -  0);
while (G__43383__i < G__43383__a.length) {G__43383__a[G__43383__i] = arguments[G__43383__i + 0]; ++G__43383__i;}
  args = new cljs.core.IndexedSeq(G__43383__a,0,null);
} 
return G__43382__delegate.call(this,args);};
G__43382.cljs$lang$maxFixedArity = 0;
G__43382.cljs$lang$applyTo = (function (arglist__43384){
var args = cljs.core.seq(arglist__43384);
return G__43382__delegate(args);
});
G__43382.cljs$core$IFn$_invoke$arity$variadic = G__43382__delegate;
return G__43382;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43385__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43386__i = 0, G__43386__a = new Array(arguments.length -  0);
while (G__43386__i < G__43386__a.length) {G__43386__a[G__43386__i] = arguments[G__43386__i + 0]; ++G__43386__i;}
  args = new cljs.core.IndexedSeq(G__43386__a,0,null);
} 
return G__43385__delegate.call(this,args);};
G__43385.cljs$lang$maxFixedArity = 0;
G__43385.cljs$lang$applyTo = (function (arglist__43387){
var args = cljs.core.seq(arglist__43387);
return G__43385__delegate(args);
});
G__43385.cljs$core$IFn$_invoke$arity$variadic = G__43385__delegate;
return G__43385;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__43388__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43389__i = 0, G__43389__a = new Array(arguments.length -  0);
while (G__43389__i < G__43389__a.length) {G__43389__a[G__43389__i] = arguments[G__43389__i + 0]; ++G__43389__i;}
  args = new cljs.core.IndexedSeq(G__43389__a,0,null);
} 
return G__43388__delegate.call(this,args);};
G__43388.cljs$lang$maxFixedArity = 0;
G__43388.cljs$lang$applyTo = (function (arglist__43390){
var args = cljs.core.seq(arglist__43390);
return G__43388__delegate(args);
});
G__43388.cljs$core$IFn$_invoke$arity$variadic = G__43388__delegate;
return G__43388;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__43391__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__43391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43392__i = 0, G__43392__a = new Array(arguments.length -  0);
while (G__43392__i < G__43392__a.length) {G__43392__a[G__43392__i] = arguments[G__43392__i + 0]; ++G__43392__i;}
  args = new cljs.core.IndexedSeq(G__43392__a,0,null);
} 
return G__43391__delegate.call(this,args);};
G__43391.cljs$lang$maxFixedArity = 0;
G__43391.cljs$lang$applyTo = (function (arglist__43393){
var args = cljs.core.seq(arglist__43393);
return G__43391__delegate(args);
});
G__43391.cljs$core$IFn$_invoke$arity$variadic = G__43391__delegate;
return G__43391;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43394__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43395__i = 0, G__43395__a = new Array(arguments.length -  0);
while (G__43395__i < G__43395__a.length) {G__43395__a[G__43395__i] = arguments[G__43395__i + 0]; ++G__43395__i;}
  args = new cljs.core.IndexedSeq(G__43395__a,0,null);
} 
return G__43394__delegate.call(this,args);};
G__43394.cljs$lang$maxFixedArity = 0;
G__43394.cljs$lang$applyTo = (function (arglist__43396){
var args = cljs.core.seq(arglist__43396);
return G__43394__delegate(args);
});
G__43394.cljs$core$IFn$_invoke$arity$variadic = G__43394__delegate;
return G__43394;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__43397__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43398__i = 0, G__43398__a = new Array(arguments.length -  0);
while (G__43398__i < G__43398__a.length) {G__43398__a[G__43398__i] = arguments[G__43398__i + 0]; ++G__43398__i;}
  args = new cljs.core.IndexedSeq(G__43398__a,0,null);
} 
return G__43397__delegate.call(this,args);};
G__43397.cljs$lang$maxFixedArity = 0;
G__43397.cljs$lang$applyTo = (function (arglist__43399){
var args = cljs.core.seq(arglist__43399);
return G__43397__delegate(args);
});
G__43397.cljs$core$IFn$_invoke$arity$variadic = G__43397__delegate;
return G__43397;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__43400__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__43400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43401__i = 0, G__43401__a = new Array(arguments.length -  0);
while (G__43401__i < G__43401__a.length) {G__43401__a[G__43401__i] = arguments[G__43401__i + 0]; ++G__43401__i;}
  args = new cljs.core.IndexedSeq(G__43401__a,0,null);
} 
return G__43400__delegate.call(this,args);};
G__43400.cljs$lang$maxFixedArity = 0;
G__43400.cljs$lang$applyTo = (function (arglist__43402){
var args = cljs.core.seq(arglist__43402);
return G__43400__delegate(args);
});
G__43400.cljs$core$IFn$_invoke$arity$variadic = G__43400__delegate;
return G__43400;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43403__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43404__i = 0, G__43404__a = new Array(arguments.length -  0);
while (G__43404__i < G__43404__a.length) {G__43404__a[G__43404__i] = arguments[G__43404__i + 0]; ++G__43404__i;}
  args = new cljs.core.IndexedSeq(G__43404__a,0,null);
} 
return G__43403__delegate.call(this,args);};
G__43403.cljs$lang$maxFixedArity = 0;
G__43403.cljs$lang$applyTo = (function (arglist__43405){
var args = cljs.core.seq(arglist__43405);
return G__43403__delegate(args);
});
G__43403.cljs$core$IFn$_invoke$arity$variadic = G__43403__delegate;
return G__43403;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__43406__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43407__i = 0, G__43407__a = new Array(arguments.length -  0);
while (G__43407__i < G__43407__a.length) {G__43407__a[G__43407__i] = arguments[G__43407__i + 0]; ++G__43407__i;}
  args = new cljs.core.IndexedSeq(G__43407__a,0,null);
} 
return G__43406__delegate.call(this,args);};
G__43406.cljs$lang$maxFixedArity = 0;
G__43406.cljs$lang$applyTo = (function (arglist__43408){
var args = cljs.core.seq(arglist__43408);
return G__43406__delegate(args);
});
G__43406.cljs$core$IFn$_invoke$arity$variadic = G__43406__delegate;
return G__43406;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__43409__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__43409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43410__i = 0, G__43410__a = new Array(arguments.length -  0);
while (G__43410__i < G__43410__a.length) {G__43410__a[G__43410__i] = arguments[G__43410__i + 0]; ++G__43410__i;}
  args = new cljs.core.IndexedSeq(G__43410__a,0,null);
} 
return G__43409__delegate.call(this,args);};
G__43409.cljs$lang$maxFixedArity = 0;
G__43409.cljs$lang$applyTo = (function (arglist__43411){
var args = cljs.core.seq(arglist__43411);
return G__43409__delegate(args);
});
G__43409.cljs$core$IFn$_invoke$arity$variadic = G__43409__delegate;
return G__43409;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43412__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43413__i = 0, G__43413__a = new Array(arguments.length -  0);
while (G__43413__i < G__43413__a.length) {G__43413__a[G__43413__i] = arguments[G__43413__i + 0]; ++G__43413__i;}
  args = new cljs.core.IndexedSeq(G__43413__a,0,null);
} 
return G__43412__delegate.call(this,args);};
G__43412.cljs$lang$maxFixedArity = 0;
G__43412.cljs$lang$applyTo = (function (arglist__43414){
var args = cljs.core.seq(arglist__43414);
return G__43412__delegate(args);
});
G__43412.cljs$core$IFn$_invoke$arity$variadic = G__43412__delegate;
return G__43412;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526412048157
