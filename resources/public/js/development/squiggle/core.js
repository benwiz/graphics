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
var G__40462__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40463__i = 0, G__40463__a = new Array(arguments.length -  0);
while (G__40463__i < G__40463__a.length) {G__40463__a[G__40463__i] = arguments[G__40463__i + 0]; ++G__40463__i;}
  args = new cljs.core.IndexedSeq(G__40463__a,0,null);
} 
return G__40462__delegate.call(this,args);};
G__40462.cljs$lang$maxFixedArity = 0;
G__40462.cljs$lang$applyTo = (function (arglist__40464){
var args = cljs.core.seq(arglist__40464);
return G__40462__delegate(args);
});
G__40462.cljs$core$IFn$_invoke$arity$variadic = G__40462__delegate;
return G__40462;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40465__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40466__i = 0, G__40466__a = new Array(arguments.length -  0);
while (G__40466__i < G__40466__a.length) {G__40466__a[G__40466__i] = arguments[G__40466__i + 0]; ++G__40466__i;}
  args = new cljs.core.IndexedSeq(G__40466__a,0,null);
} 
return G__40465__delegate.call(this,args);};
G__40465.cljs$lang$maxFixedArity = 0;
G__40465.cljs$lang$applyTo = (function (arglist__40467){
var args = cljs.core.seq(arglist__40467);
return G__40465__delegate(args);
});
G__40465.cljs$core$IFn$_invoke$arity$variadic = G__40465__delegate;
return G__40465;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40468__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40469__i = 0, G__40469__a = new Array(arguments.length -  0);
while (G__40469__i < G__40469__a.length) {G__40469__a[G__40469__i] = arguments[G__40469__i + 0]; ++G__40469__i;}
  args = new cljs.core.IndexedSeq(G__40469__a,0,null);
} 
return G__40468__delegate.call(this,args);};
G__40468.cljs$lang$maxFixedArity = 0;
G__40468.cljs$lang$applyTo = (function (arglist__40470){
var args = cljs.core.seq(arglist__40470);
return G__40468__delegate(args);
});
G__40468.cljs$core$IFn$_invoke$arity$variadic = G__40468__delegate;
return G__40468;
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
var G__40471__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40472__i = 0, G__40472__a = new Array(arguments.length -  0);
while (G__40472__i < G__40472__a.length) {G__40472__a[G__40472__i] = arguments[G__40472__i + 0]; ++G__40472__i;}
  args = new cljs.core.IndexedSeq(G__40472__a,0,null);
} 
return G__40471__delegate.call(this,args);};
G__40471.cljs$lang$maxFixedArity = 0;
G__40471.cljs$lang$applyTo = (function (arglist__40473){
var args = cljs.core.seq(arglist__40473);
return G__40471__delegate(args);
});
G__40471.cljs$core$IFn$_invoke$arity$variadic = G__40471__delegate;
return G__40471;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40474__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40475__i = 0, G__40475__a = new Array(arguments.length -  0);
while (G__40475__i < G__40475__a.length) {G__40475__a[G__40475__i] = arguments[G__40475__i + 0]; ++G__40475__i;}
  args = new cljs.core.IndexedSeq(G__40475__a,0,null);
} 
return G__40474__delegate.call(this,args);};
G__40474.cljs$lang$maxFixedArity = 0;
G__40474.cljs$lang$applyTo = (function (arglist__40476){
var args = cljs.core.seq(arglist__40476);
return G__40474__delegate(args);
});
G__40474.cljs$core$IFn$_invoke$arity$variadic = G__40474__delegate;
return G__40474;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40477__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40478__i = 0, G__40478__a = new Array(arguments.length -  0);
while (G__40478__i < G__40478__a.length) {G__40478__a[G__40478__i] = arguments[G__40478__i + 0]; ++G__40478__i;}
  args = new cljs.core.IndexedSeq(G__40478__a,0,null);
} 
return G__40477__delegate.call(this,args);};
G__40477.cljs$lang$maxFixedArity = 0;
G__40477.cljs$lang$applyTo = (function (arglist__40479){
var args = cljs.core.seq(arglist__40479);
return G__40477__delegate(args);
});
G__40477.cljs$core$IFn$_invoke$arity$variadic = G__40477__delegate;
return G__40477;
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
var G__40480__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40481__i = 0, G__40481__a = new Array(arguments.length -  0);
while (G__40481__i < G__40481__a.length) {G__40481__a[G__40481__i] = arguments[G__40481__i + 0]; ++G__40481__i;}
  args = new cljs.core.IndexedSeq(G__40481__a,0,null);
} 
return G__40480__delegate.call(this,args);};
G__40480.cljs$lang$maxFixedArity = 0;
G__40480.cljs$lang$applyTo = (function (arglist__40482){
var args = cljs.core.seq(arglist__40482);
return G__40480__delegate(args);
});
G__40480.cljs$core$IFn$_invoke$arity$variadic = G__40480__delegate;
return G__40480;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40483__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40484__i = 0, G__40484__a = new Array(arguments.length -  0);
while (G__40484__i < G__40484__a.length) {G__40484__a[G__40484__i] = arguments[G__40484__i + 0]; ++G__40484__i;}
  args = new cljs.core.IndexedSeq(G__40484__a,0,null);
} 
return G__40483__delegate.call(this,args);};
G__40483.cljs$lang$maxFixedArity = 0;
G__40483.cljs$lang$applyTo = (function (arglist__40485){
var args = cljs.core.seq(arglist__40485);
return G__40483__delegate(args);
});
G__40483.cljs$core$IFn$_invoke$arity$variadic = G__40483__delegate;
return G__40483;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40486__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40487__i = 0, G__40487__a = new Array(arguments.length -  0);
while (G__40487__i < G__40487__a.length) {G__40487__a[G__40487__i] = arguments[G__40487__i + 0]; ++G__40487__i;}
  args = new cljs.core.IndexedSeq(G__40487__a,0,null);
} 
return G__40486__delegate.call(this,args);};
G__40486.cljs$lang$maxFixedArity = 0;
G__40486.cljs$lang$applyTo = (function (arglist__40488){
var args = cljs.core.seq(arglist__40488);
return G__40486__delegate(args);
});
G__40486.cljs$core$IFn$_invoke$arity$variadic = G__40486__delegate;
return G__40486;
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
var G__40489__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40490__i = 0, G__40490__a = new Array(arguments.length -  0);
while (G__40490__i < G__40490__a.length) {G__40490__a[G__40490__i] = arguments[G__40490__i + 0]; ++G__40490__i;}
  args = new cljs.core.IndexedSeq(G__40490__a,0,null);
} 
return G__40489__delegate.call(this,args);};
G__40489.cljs$lang$maxFixedArity = 0;
G__40489.cljs$lang$applyTo = (function (arglist__40491){
var args = cljs.core.seq(arglist__40491);
return G__40489__delegate(args);
});
G__40489.cljs$core$IFn$_invoke$arity$variadic = G__40489__delegate;
return G__40489;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40492__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40493__i = 0, G__40493__a = new Array(arguments.length -  0);
while (G__40493__i < G__40493__a.length) {G__40493__a[G__40493__i] = arguments[G__40493__i + 0]; ++G__40493__i;}
  args = new cljs.core.IndexedSeq(G__40493__a,0,null);
} 
return G__40492__delegate.call(this,args);};
G__40492.cljs$lang$maxFixedArity = 0;
G__40492.cljs$lang$applyTo = (function (arglist__40494){
var args = cljs.core.seq(arglist__40494);
return G__40492__delegate(args);
});
G__40492.cljs$core$IFn$_invoke$arity$variadic = G__40492__delegate;
return G__40492;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40495__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40496__i = 0, G__40496__a = new Array(arguments.length -  0);
while (G__40496__i < G__40496__a.length) {G__40496__a[G__40496__i] = arguments[G__40496__i + 0]; ++G__40496__i;}
  args = new cljs.core.IndexedSeq(G__40496__a,0,null);
} 
return G__40495__delegate.call(this,args);};
G__40495.cljs$lang$maxFixedArity = 0;
G__40495.cljs$lang$applyTo = (function (arglist__40497){
var args = cljs.core.seq(arglist__40497);
return G__40495__delegate(args);
});
G__40495.cljs$core$IFn$_invoke$arity$variadic = G__40495__delegate;
return G__40495;
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
var G__40498__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40499__i = 0, G__40499__a = new Array(arguments.length -  0);
while (G__40499__i < G__40499__a.length) {G__40499__a[G__40499__i] = arguments[G__40499__i + 0]; ++G__40499__i;}
  args = new cljs.core.IndexedSeq(G__40499__a,0,null);
} 
return G__40498__delegate.call(this,args);};
G__40498.cljs$lang$maxFixedArity = 0;
G__40498.cljs$lang$applyTo = (function (arglist__40500){
var args = cljs.core.seq(arglist__40500);
return G__40498__delegate(args);
});
G__40498.cljs$core$IFn$_invoke$arity$variadic = G__40498__delegate;
return G__40498;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40501__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40502__i = 0, G__40502__a = new Array(arguments.length -  0);
while (G__40502__i < G__40502__a.length) {G__40502__a[G__40502__i] = arguments[G__40502__i + 0]; ++G__40502__i;}
  args = new cljs.core.IndexedSeq(G__40502__a,0,null);
} 
return G__40501__delegate.call(this,args);};
G__40501.cljs$lang$maxFixedArity = 0;
G__40501.cljs$lang$applyTo = (function (arglist__40503){
var args = cljs.core.seq(arglist__40503);
return G__40501__delegate(args);
});
G__40501.cljs$core$IFn$_invoke$arity$variadic = G__40501__delegate;
return G__40501;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40504__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40505__i = 0, G__40505__a = new Array(arguments.length -  0);
while (G__40505__i < G__40505__a.length) {G__40505__a[G__40505__i] = arguments[G__40505__i + 0]; ++G__40505__i;}
  args = new cljs.core.IndexedSeq(G__40505__a,0,null);
} 
return G__40504__delegate.call(this,args);};
G__40504.cljs$lang$maxFixedArity = 0;
G__40504.cljs$lang$applyTo = (function (arglist__40506){
var args = cljs.core.seq(arglist__40506);
return G__40504__delegate(args);
});
G__40504.cljs$core$IFn$_invoke$arity$variadic = G__40504__delegate;
return G__40504;
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
var G__40507__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40508__i = 0, G__40508__a = new Array(arguments.length -  0);
while (G__40508__i < G__40508__a.length) {G__40508__a[G__40508__i] = arguments[G__40508__i + 0]; ++G__40508__i;}
  args = new cljs.core.IndexedSeq(G__40508__a,0,null);
} 
return G__40507__delegate.call(this,args);};
G__40507.cljs$lang$maxFixedArity = 0;
G__40507.cljs$lang$applyTo = (function (arglist__40509){
var args = cljs.core.seq(arglist__40509);
return G__40507__delegate(args);
});
G__40507.cljs$core$IFn$_invoke$arity$variadic = G__40507__delegate;
return G__40507;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40510__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40511__i = 0, G__40511__a = new Array(arguments.length -  0);
while (G__40511__i < G__40511__a.length) {G__40511__a[G__40511__i] = arguments[G__40511__i + 0]; ++G__40511__i;}
  args = new cljs.core.IndexedSeq(G__40511__a,0,null);
} 
return G__40510__delegate.call(this,args);};
G__40510.cljs$lang$maxFixedArity = 0;
G__40510.cljs$lang$applyTo = (function (arglist__40512){
var args = cljs.core.seq(arglist__40512);
return G__40510__delegate(args);
});
G__40510.cljs$core$IFn$_invoke$arity$variadic = G__40510__delegate;
return G__40510;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40513__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40514__i = 0, G__40514__a = new Array(arguments.length -  0);
while (G__40514__i < G__40514__a.length) {G__40514__a[G__40514__i] = arguments[G__40514__i + 0]; ++G__40514__i;}
  args = new cljs.core.IndexedSeq(G__40514__a,0,null);
} 
return G__40513__delegate.call(this,args);};
G__40513.cljs$lang$maxFixedArity = 0;
G__40513.cljs$lang$applyTo = (function (arglist__40515){
var args = cljs.core.seq(arglist__40515);
return G__40513__delegate(args);
});
G__40513.cljs$core$IFn$_invoke$arity$variadic = G__40513__delegate;
return G__40513;
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
var G__40516__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40517__i = 0, G__40517__a = new Array(arguments.length -  0);
while (G__40517__i < G__40517__a.length) {G__40517__a[G__40517__i] = arguments[G__40517__i + 0]; ++G__40517__i;}
  args = new cljs.core.IndexedSeq(G__40517__a,0,null);
} 
return G__40516__delegate.call(this,args);};
G__40516.cljs$lang$maxFixedArity = 0;
G__40516.cljs$lang$applyTo = (function (arglist__40518){
var args = cljs.core.seq(arglist__40518);
return G__40516__delegate(args);
});
G__40516.cljs$core$IFn$_invoke$arity$variadic = G__40516__delegate;
return G__40516;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40519__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40520__i = 0, G__40520__a = new Array(arguments.length -  0);
while (G__40520__i < G__40520__a.length) {G__40520__a[G__40520__i] = arguments[G__40520__i + 0]; ++G__40520__i;}
  args = new cljs.core.IndexedSeq(G__40520__a,0,null);
} 
return G__40519__delegate.call(this,args);};
G__40519.cljs$lang$maxFixedArity = 0;
G__40519.cljs$lang$applyTo = (function (arglist__40521){
var args = cljs.core.seq(arglist__40521);
return G__40519__delegate(args);
});
G__40519.cljs$core$IFn$_invoke$arity$variadic = G__40519__delegate;
return G__40519;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40522__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40523__i = 0, G__40523__a = new Array(arguments.length -  0);
while (G__40523__i < G__40523__a.length) {G__40523__a[G__40523__i] = arguments[G__40523__i + 0]; ++G__40523__i;}
  args = new cljs.core.IndexedSeq(G__40523__a,0,null);
} 
return G__40522__delegate.call(this,args);};
G__40522.cljs$lang$maxFixedArity = 0;
G__40522.cljs$lang$applyTo = (function (arglist__40524){
var args = cljs.core.seq(arglist__40524);
return G__40522__delegate(args);
});
G__40522.cljs$core$IFn$_invoke$arity$variadic = G__40522__delegate;
return G__40522;
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
var G__40525__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40526__i = 0, G__40526__a = new Array(arguments.length -  0);
while (G__40526__i < G__40526__a.length) {G__40526__a[G__40526__i] = arguments[G__40526__i + 0]; ++G__40526__i;}
  args = new cljs.core.IndexedSeq(G__40526__a,0,null);
} 
return G__40525__delegate.call(this,args);};
G__40525.cljs$lang$maxFixedArity = 0;
G__40525.cljs$lang$applyTo = (function (arglist__40527){
var args = cljs.core.seq(arglist__40527);
return G__40525__delegate(args);
});
G__40525.cljs$core$IFn$_invoke$arity$variadic = G__40525__delegate;
return G__40525;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40528__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40529__i = 0, G__40529__a = new Array(arguments.length -  0);
while (G__40529__i < G__40529__a.length) {G__40529__a[G__40529__i] = arguments[G__40529__i + 0]; ++G__40529__i;}
  args = new cljs.core.IndexedSeq(G__40529__a,0,null);
} 
return G__40528__delegate.call(this,args);};
G__40528.cljs$lang$maxFixedArity = 0;
G__40528.cljs$lang$applyTo = (function (arglist__40530){
var args = cljs.core.seq(arglist__40530);
return G__40528__delegate(args);
});
G__40528.cljs$core$IFn$_invoke$arity$variadic = G__40528__delegate;
return G__40528;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40531__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40532__i = 0, G__40532__a = new Array(arguments.length -  0);
while (G__40532__i < G__40532__a.length) {G__40532__a[G__40532__i] = arguments[G__40532__i + 0]; ++G__40532__i;}
  args = new cljs.core.IndexedSeq(G__40532__a,0,null);
} 
return G__40531__delegate.call(this,args);};
G__40531.cljs$lang$maxFixedArity = 0;
G__40531.cljs$lang$applyTo = (function (arglist__40533){
var args = cljs.core.seq(arglist__40533);
return G__40531__delegate(args);
});
G__40531.cljs$core$IFn$_invoke$arity$variadic = G__40531__delegate;
return G__40531;
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

//# sourceMappingURL=core.js.map?rel=1527386330447
