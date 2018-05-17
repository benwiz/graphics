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
goog.require('squiggle.primitive');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__45273__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__45273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45274__i = 0, G__45274__a = new Array(arguments.length -  0);
while (G__45274__i < G__45274__a.length) {G__45274__a[G__45274__i] = arguments[G__45274__i + 0]; ++G__45274__i;}
  args = new cljs.core.IndexedSeq(G__45274__a,0,null);
} 
return G__45273__delegate.call(this,args);};
G__45273.cljs$lang$maxFixedArity = 0;
G__45273.cljs$lang$applyTo = (function (arglist__45275){
var args = cljs.core.seq(arglist__45275);
return G__45273__delegate(args);
});
G__45273.cljs$core$IFn$_invoke$arity$variadic = G__45273__delegate;
return G__45273;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__45276__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__45276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45277__i = 0, G__45277__a = new Array(arguments.length -  0);
while (G__45277__i < G__45277__a.length) {G__45277__a[G__45277__i] = arguments[G__45277__i + 0]; ++G__45277__i;}
  args = new cljs.core.IndexedSeq(G__45277__a,0,null);
} 
return G__45276__delegate.call(this,args);};
G__45276.cljs$lang$maxFixedArity = 0;
G__45276.cljs$lang$applyTo = (function (arglist__45278){
var args = cljs.core.seq(arglist__45278);
return G__45276__delegate(args);
});
G__45276.cljs$core$IFn$_invoke$arity$variadic = G__45276__delegate;
return G__45276;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__45279__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__45279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45280__i = 0, G__45280__a = new Array(arguments.length -  0);
while (G__45280__i < G__45280__a.length) {G__45280__a[G__45280__i] = arguments[G__45280__i + 0]; ++G__45280__i;}
  args = new cljs.core.IndexedSeq(G__45280__a,0,null);
} 
return G__45279__delegate.call(this,args);};
G__45279.cljs$lang$maxFixedArity = 0;
G__45279.cljs$lang$applyTo = (function (arglist__45281){
var args = cljs.core.seq(arglist__45281);
return G__45279__delegate(args);
});
G__45279.cljs$core$IFn$_invoke$arity$variadic = G__45279__delegate;
return G__45279;
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
var G__45282__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__45282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45283__i = 0, G__45283__a = new Array(arguments.length -  0);
while (G__45283__i < G__45283__a.length) {G__45283__a[G__45283__i] = arguments[G__45283__i + 0]; ++G__45283__i;}
  args = new cljs.core.IndexedSeq(G__45283__a,0,null);
} 
return G__45282__delegate.call(this,args);};
G__45282.cljs$lang$maxFixedArity = 0;
G__45282.cljs$lang$applyTo = (function (arglist__45284){
var args = cljs.core.seq(arglist__45284);
return G__45282__delegate(args);
});
G__45282.cljs$core$IFn$_invoke$arity$variadic = G__45282__delegate;
return G__45282;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__45285__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__45285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45286__i = 0, G__45286__a = new Array(arguments.length -  0);
while (G__45286__i < G__45286__a.length) {G__45286__a[G__45286__i] = arguments[G__45286__i + 0]; ++G__45286__i;}
  args = new cljs.core.IndexedSeq(G__45286__a,0,null);
} 
return G__45285__delegate.call(this,args);};
G__45285.cljs$lang$maxFixedArity = 0;
G__45285.cljs$lang$applyTo = (function (arglist__45287){
var args = cljs.core.seq(arglist__45287);
return G__45285__delegate(args);
});
G__45285.cljs$core$IFn$_invoke$arity$variadic = G__45285__delegate;
return G__45285;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__45288__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__45288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45289__i = 0, G__45289__a = new Array(arguments.length -  0);
while (G__45289__i < G__45289__a.length) {G__45289__a[G__45289__i] = arguments[G__45289__i + 0]; ++G__45289__i;}
  args = new cljs.core.IndexedSeq(G__45289__a,0,null);
} 
return G__45288__delegate.call(this,args);};
G__45288.cljs$lang$maxFixedArity = 0;
G__45288.cljs$lang$applyTo = (function (arglist__45290){
var args = cljs.core.seq(arglist__45290);
return G__45288__delegate(args);
});
G__45288.cljs$core$IFn$_invoke$arity$variadic = G__45288__delegate;
return G__45288;
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
var G__45291__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__45291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45292__i = 0, G__45292__a = new Array(arguments.length -  0);
while (G__45292__i < G__45292__a.length) {G__45292__a[G__45292__i] = arguments[G__45292__i + 0]; ++G__45292__i;}
  args = new cljs.core.IndexedSeq(G__45292__a,0,null);
} 
return G__45291__delegate.call(this,args);};
G__45291.cljs$lang$maxFixedArity = 0;
G__45291.cljs$lang$applyTo = (function (arglist__45293){
var args = cljs.core.seq(arglist__45293);
return G__45291__delegate(args);
});
G__45291.cljs$core$IFn$_invoke$arity$variadic = G__45291__delegate;
return G__45291;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__45294__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__45294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45295__i = 0, G__45295__a = new Array(arguments.length -  0);
while (G__45295__i < G__45295__a.length) {G__45295__a[G__45295__i] = arguments[G__45295__i + 0]; ++G__45295__i;}
  args = new cljs.core.IndexedSeq(G__45295__a,0,null);
} 
return G__45294__delegate.call(this,args);};
G__45294.cljs$lang$maxFixedArity = 0;
G__45294.cljs$lang$applyTo = (function (arglist__45296){
var args = cljs.core.seq(arglist__45296);
return G__45294__delegate(args);
});
G__45294.cljs$core$IFn$_invoke$arity$variadic = G__45294__delegate;
return G__45294;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__45297__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__45297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45298__i = 0, G__45298__a = new Array(arguments.length -  0);
while (G__45298__i < G__45298__a.length) {G__45298__a[G__45298__i] = arguments[G__45298__i + 0]; ++G__45298__i;}
  args = new cljs.core.IndexedSeq(G__45298__a,0,null);
} 
return G__45297__delegate.call(this,args);};
G__45297.cljs$lang$maxFixedArity = 0;
G__45297.cljs$lang$applyTo = (function (arglist__45299){
var args = cljs.core.seq(arglist__45299);
return G__45297__delegate(args);
});
G__45297.cljs$core$IFn$_invoke$arity$variadic = G__45297__delegate;
return G__45297;
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
var G__45300__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__45300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45301__i = 0, G__45301__a = new Array(arguments.length -  0);
while (G__45301__i < G__45301__a.length) {G__45301__a[G__45301__i] = arguments[G__45301__i + 0]; ++G__45301__i;}
  args = new cljs.core.IndexedSeq(G__45301__a,0,null);
} 
return G__45300__delegate.call(this,args);};
G__45300.cljs$lang$maxFixedArity = 0;
G__45300.cljs$lang$applyTo = (function (arglist__45302){
var args = cljs.core.seq(arglist__45302);
return G__45300__delegate(args);
});
G__45300.cljs$core$IFn$_invoke$arity$variadic = G__45300__delegate;
return G__45300;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__45303__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__45303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45304__i = 0, G__45304__a = new Array(arguments.length -  0);
while (G__45304__i < G__45304__a.length) {G__45304__a[G__45304__i] = arguments[G__45304__i + 0]; ++G__45304__i;}
  args = new cljs.core.IndexedSeq(G__45304__a,0,null);
} 
return G__45303__delegate.call(this,args);};
G__45303.cljs$lang$maxFixedArity = 0;
G__45303.cljs$lang$applyTo = (function (arglist__45305){
var args = cljs.core.seq(arglist__45305);
return G__45303__delegate(args);
});
G__45303.cljs$core$IFn$_invoke$arity$variadic = G__45303__delegate;
return G__45303;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__45306__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__45306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45307__i = 0, G__45307__a = new Array(arguments.length -  0);
while (G__45307__i < G__45307__a.length) {G__45307__a[G__45307__i] = arguments[G__45307__i + 0]; ++G__45307__i;}
  args = new cljs.core.IndexedSeq(G__45307__a,0,null);
} 
return G__45306__delegate.call(this,args);};
G__45306.cljs$lang$maxFixedArity = 0;
G__45306.cljs$lang$applyTo = (function (arglist__45308){
var args = cljs.core.seq(arglist__45308);
return G__45306__delegate(args);
});
G__45306.cljs$core$IFn$_invoke$arity$variadic = G__45306__delegate;
return G__45306;
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
var G__45309__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45310__i = 0, G__45310__a = new Array(arguments.length -  0);
while (G__45310__i < G__45310__a.length) {G__45310__a[G__45310__i] = arguments[G__45310__i + 0]; ++G__45310__i;}
  args = new cljs.core.IndexedSeq(G__45310__a,0,null);
} 
return G__45309__delegate.call(this,args);};
G__45309.cljs$lang$maxFixedArity = 0;
G__45309.cljs$lang$applyTo = (function (arglist__45311){
var args = cljs.core.seq(arglist__45311);
return G__45309__delegate(args);
});
G__45309.cljs$core$IFn$_invoke$arity$variadic = G__45309__delegate;
return G__45309;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__45312__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__45312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45313__i = 0, G__45313__a = new Array(arguments.length -  0);
while (G__45313__i < G__45313__a.length) {G__45313__a[G__45313__i] = arguments[G__45313__i + 0]; ++G__45313__i;}
  args = new cljs.core.IndexedSeq(G__45313__a,0,null);
} 
return G__45312__delegate.call(this,args);};
G__45312.cljs$lang$maxFixedArity = 0;
G__45312.cljs$lang$applyTo = (function (arglist__45314){
var args = cljs.core.seq(arglist__45314);
return G__45312__delegate(args);
});
G__45312.cljs$core$IFn$_invoke$arity$variadic = G__45312__delegate;
return G__45312;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45315__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45316__i = 0, G__45316__a = new Array(arguments.length -  0);
while (G__45316__i < G__45316__a.length) {G__45316__a[G__45316__i] = arguments[G__45316__i + 0]; ++G__45316__i;}
  args = new cljs.core.IndexedSeq(G__45316__a,0,null);
} 
return G__45315__delegate.call(this,args);};
G__45315.cljs$lang$maxFixedArity = 0;
G__45315.cljs$lang$applyTo = (function (arglist__45317){
var args = cljs.core.seq(arglist__45317);
return G__45315__delegate(args);
});
G__45315.cljs$core$IFn$_invoke$arity$variadic = G__45315__delegate;
return G__45315;
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
var G__45318__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45319__i = 0, G__45319__a = new Array(arguments.length -  0);
while (G__45319__i < G__45319__a.length) {G__45319__a[G__45319__i] = arguments[G__45319__i + 0]; ++G__45319__i;}
  args = new cljs.core.IndexedSeq(G__45319__a,0,null);
} 
return G__45318__delegate.call(this,args);};
G__45318.cljs$lang$maxFixedArity = 0;
G__45318.cljs$lang$applyTo = (function (arglist__45320){
var args = cljs.core.seq(arglist__45320);
return G__45318__delegate(args);
});
G__45318.cljs$core$IFn$_invoke$arity$variadic = G__45318__delegate;
return G__45318;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__45321__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__45321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45322__i = 0, G__45322__a = new Array(arguments.length -  0);
while (G__45322__i < G__45322__a.length) {G__45322__a[G__45322__i] = arguments[G__45322__i + 0]; ++G__45322__i;}
  args = new cljs.core.IndexedSeq(G__45322__a,0,null);
} 
return G__45321__delegate.call(this,args);};
G__45321.cljs$lang$maxFixedArity = 0;
G__45321.cljs$lang$applyTo = (function (arglist__45323){
var args = cljs.core.seq(arglist__45323);
return G__45321__delegate(args);
});
G__45321.cljs$core$IFn$_invoke$arity$variadic = G__45321__delegate;
return G__45321;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45324__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45325__i = 0, G__45325__a = new Array(arguments.length -  0);
while (G__45325__i < G__45325__a.length) {G__45325__a[G__45325__i] = arguments[G__45325__i + 0]; ++G__45325__i;}
  args = new cljs.core.IndexedSeq(G__45325__a,0,null);
} 
return G__45324__delegate.call(this,args);};
G__45324.cljs$lang$maxFixedArity = 0;
G__45324.cljs$lang$applyTo = (function (arglist__45326){
var args = cljs.core.seq(arglist__45326);
return G__45324__delegate(args);
});
G__45324.cljs$core$IFn$_invoke$arity$variadic = G__45324__delegate;
return G__45324;
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
var G__45327__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45328__i = 0, G__45328__a = new Array(arguments.length -  0);
while (G__45328__i < G__45328__a.length) {G__45328__a[G__45328__i] = arguments[G__45328__i + 0]; ++G__45328__i;}
  args = new cljs.core.IndexedSeq(G__45328__a,0,null);
} 
return G__45327__delegate.call(this,args);};
G__45327.cljs$lang$maxFixedArity = 0;
G__45327.cljs$lang$applyTo = (function (arglist__45329){
var args = cljs.core.seq(arglist__45329);
return G__45327__delegate(args);
});
G__45327.cljs$core$IFn$_invoke$arity$variadic = G__45327__delegate;
return G__45327;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__45330__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__45330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45331__i = 0, G__45331__a = new Array(arguments.length -  0);
while (G__45331__i < G__45331__a.length) {G__45331__a[G__45331__i] = arguments[G__45331__i + 0]; ++G__45331__i;}
  args = new cljs.core.IndexedSeq(G__45331__a,0,null);
} 
return G__45330__delegate.call(this,args);};
G__45330.cljs$lang$maxFixedArity = 0;
G__45330.cljs$lang$applyTo = (function (arglist__45332){
var args = cljs.core.seq(arglist__45332);
return G__45330__delegate(args);
});
G__45330.cljs$core$IFn$_invoke$arity$variadic = G__45330__delegate;
return G__45330;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45333__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45334__i = 0, G__45334__a = new Array(arguments.length -  0);
while (G__45334__i < G__45334__a.length) {G__45334__a[G__45334__i] = arguments[G__45334__i + 0]; ++G__45334__i;}
  args = new cljs.core.IndexedSeq(G__45334__a,0,null);
} 
return G__45333__delegate.call(this,args);};
G__45333.cljs$lang$maxFixedArity = 0;
G__45333.cljs$lang$applyTo = (function (arglist__45335){
var args = cljs.core.seq(arglist__45335);
return G__45333__delegate(args);
});
G__45333.cljs$core$IFn$_invoke$arity$variadic = G__45333__delegate;
return G__45333;
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
var G__45336__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45337__i = 0, G__45337__a = new Array(arguments.length -  0);
while (G__45337__i < G__45337__a.length) {G__45337__a[G__45337__i] = arguments[G__45337__i + 0]; ++G__45337__i;}
  args = new cljs.core.IndexedSeq(G__45337__a,0,null);
} 
return G__45336__delegate.call(this,args);};
G__45336.cljs$lang$maxFixedArity = 0;
G__45336.cljs$lang$applyTo = (function (arglist__45338){
var args = cljs.core.seq(arglist__45338);
return G__45336__delegate(args);
});
G__45336.cljs$core$IFn$_invoke$arity$variadic = G__45336__delegate;
return G__45336;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__45339__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__45339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45340__i = 0, G__45340__a = new Array(arguments.length -  0);
while (G__45340__i < G__45340__a.length) {G__45340__a[G__45340__i] = arguments[G__45340__i + 0]; ++G__45340__i;}
  args = new cljs.core.IndexedSeq(G__45340__a,0,null);
} 
return G__45339__delegate.call(this,args);};
G__45339.cljs$lang$maxFixedArity = 0;
G__45339.cljs$lang$applyTo = (function (arglist__45341){
var args = cljs.core.seq(arglist__45341);
return G__45339__delegate(args);
});
G__45339.cljs$core$IFn$_invoke$arity$variadic = G__45339__delegate;
return G__45339;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45342__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45343__i = 0, G__45343__a = new Array(arguments.length -  0);
while (G__45343__i < G__45343__a.length) {G__45343__a[G__45343__i] = arguments[G__45343__i + 0]; ++G__45343__i;}
  args = new cljs.core.IndexedSeq(G__45343__a,0,null);
} 
return G__45342__delegate.call(this,args);};
G__45342.cljs$lang$maxFixedArity = 0;
G__45342.cljs$lang$applyTo = (function (arglist__45344){
var args = cljs.core.seq(arglist__45344);
return G__45342__delegate(args);
});
G__45342.cljs$core$IFn$_invoke$arity$variadic = G__45342__delegate;
return G__45342;
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

squiggle.core.sketch_primitive_starry_night = (function squiggle$core$run_sketch_$_sketch_primitive_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"primitive-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.update_state))?(function() { 
var G__45345__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__45345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45346__i = 0, G__45346__a = new Array(arguments.length -  0);
while (G__45346__i < G__45346__a.length) {G__45346__a[G__45346__i] = arguments[G__45346__i + 0]; ++G__45346__i;}
  args = new cljs.core.IndexedSeq(G__45346__a,0,null);
} 
return G__45345__delegate.call(this,args);};
G__45345.cljs$lang$maxFixedArity = 0;
G__45345.cljs$lang$applyTo = (function (arglist__45347){
var args = cljs.core.seq(arglist__45347);
return G__45345__delegate(args);
});
G__45345.cljs$core$IFn$_invoke$arity$variadic = G__45345__delegate;
return G__45345;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__45348__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__45348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45349__i = 0, G__45349__a = new Array(arguments.length -  0);
while (G__45349__i < G__45349__a.length) {G__45349__a[G__45349__i] = arguments[G__45349__i + 0]; ++G__45349__i;}
  args = new cljs.core.IndexedSeq(G__45349__a,0,null);
} 
return G__45348__delegate.call(this,args);};
G__45348.cljs$lang$maxFixedArity = 0;
G__45348.cljs$lang$applyTo = (function (arglist__45350){
var args = cljs.core.seq(arglist__45350);
return G__45348__delegate(args);
});
G__45348.cljs$core$IFn$_invoke$arity$variadic = G__45348__delegate;
return G__45348;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__45351__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__45351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45352__i = 0, G__45352__a = new Array(arguments.length -  0);
while (G__45352__i < G__45352__a.length) {G__45352__a[G__45352__i] = arguments[G__45352__i + 0]; ++G__45352__i;}
  args = new cljs.core.IndexedSeq(G__45352__a,0,null);
} 
return G__45351__delegate.call(this,args);};
G__45351.cljs$lang$maxFixedArity = 0;
G__45351.cljs$lang$applyTo = (function (arglist__45353){
var args = cljs.core.seq(arglist__45353);
return G__45351__delegate(args);
});
G__45351.cljs$core$IFn$_invoke$arity$variadic = G__45351__delegate;
return G__45351;
})()
:squiggle.primitive.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_primitive_starry_night', squiggle.core.sketch_primitive_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_primitive_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"primitive-starry-night"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526521984214
