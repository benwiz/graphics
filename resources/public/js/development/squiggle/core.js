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
var G__39451__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39452__i = 0, G__39452__a = new Array(arguments.length -  0);
while (G__39452__i < G__39452__a.length) {G__39452__a[G__39452__i] = arguments[G__39452__i + 0]; ++G__39452__i;}
  args = new cljs.core.IndexedSeq(G__39452__a,0,null);
} 
return G__39451__delegate.call(this,args);};
G__39451.cljs$lang$maxFixedArity = 0;
G__39451.cljs$lang$applyTo = (function (arglist__39453){
var args = cljs.core.seq(arglist__39453);
return G__39451__delegate(args);
});
G__39451.cljs$core$IFn$_invoke$arity$variadic = G__39451__delegate;
return G__39451;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39454__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39455__i = 0, G__39455__a = new Array(arguments.length -  0);
while (G__39455__i < G__39455__a.length) {G__39455__a[G__39455__i] = arguments[G__39455__i + 0]; ++G__39455__i;}
  args = new cljs.core.IndexedSeq(G__39455__a,0,null);
} 
return G__39454__delegate.call(this,args);};
G__39454.cljs$lang$maxFixedArity = 0;
G__39454.cljs$lang$applyTo = (function (arglist__39456){
var args = cljs.core.seq(arglist__39456);
return G__39454__delegate(args);
});
G__39454.cljs$core$IFn$_invoke$arity$variadic = G__39454__delegate;
return G__39454;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39457__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39458__i = 0, G__39458__a = new Array(arguments.length -  0);
while (G__39458__i < G__39458__a.length) {G__39458__a[G__39458__i] = arguments[G__39458__i + 0]; ++G__39458__i;}
  args = new cljs.core.IndexedSeq(G__39458__a,0,null);
} 
return G__39457__delegate.call(this,args);};
G__39457.cljs$lang$maxFixedArity = 0;
G__39457.cljs$lang$applyTo = (function (arglist__39459){
var args = cljs.core.seq(arglist__39459);
return G__39457__delegate(args);
});
G__39457.cljs$core$IFn$_invoke$arity$variadic = G__39457__delegate;
return G__39457;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__39460__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39461__i = 0, G__39461__a = new Array(arguments.length -  0);
while (G__39461__i < G__39461__a.length) {G__39461__a[G__39461__i] = arguments[G__39461__i + 0]; ++G__39461__i;}
  args = new cljs.core.IndexedSeq(G__39461__a,0,null);
} 
return G__39460__delegate.call(this,args);};
G__39460.cljs$lang$maxFixedArity = 0;
G__39460.cljs$lang$applyTo = (function (arglist__39462){
var args = cljs.core.seq(arglist__39462);
return G__39460__delegate(args);
});
G__39460.cljs$core$IFn$_invoke$arity$variadic = G__39460__delegate;
return G__39460;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39463__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39464__i = 0, G__39464__a = new Array(arguments.length -  0);
while (G__39464__i < G__39464__a.length) {G__39464__a[G__39464__i] = arguments[G__39464__i + 0]; ++G__39464__i;}
  args = new cljs.core.IndexedSeq(G__39464__a,0,null);
} 
return G__39463__delegate.call(this,args);};
G__39463.cljs$lang$maxFixedArity = 0;
G__39463.cljs$lang$applyTo = (function (arglist__39465){
var args = cljs.core.seq(arglist__39465);
return G__39463__delegate(args);
});
G__39463.cljs$core$IFn$_invoke$arity$variadic = G__39463__delegate;
return G__39463;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39466__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39467__i = 0, G__39467__a = new Array(arguments.length -  0);
while (G__39467__i < G__39467__a.length) {G__39467__a[G__39467__i] = arguments[G__39467__i + 0]; ++G__39467__i;}
  args = new cljs.core.IndexedSeq(G__39467__a,0,null);
} 
return G__39466__delegate.call(this,args);};
G__39466.cljs$lang$maxFixedArity = 0;
G__39466.cljs$lang$applyTo = (function (arglist__39468){
var args = cljs.core.seq(arglist__39468);
return G__39466__delegate(args);
});
G__39466.cljs$core$IFn$_invoke$arity$variadic = G__39466__delegate;
return G__39466;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__39469__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39470__i = 0, G__39470__a = new Array(arguments.length -  0);
while (G__39470__i < G__39470__a.length) {G__39470__a[G__39470__i] = arguments[G__39470__i + 0]; ++G__39470__i;}
  args = new cljs.core.IndexedSeq(G__39470__a,0,null);
} 
return G__39469__delegate.call(this,args);};
G__39469.cljs$lang$maxFixedArity = 0;
G__39469.cljs$lang$applyTo = (function (arglist__39471){
var args = cljs.core.seq(arglist__39471);
return G__39469__delegate(args);
});
G__39469.cljs$core$IFn$_invoke$arity$variadic = G__39469__delegate;
return G__39469;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39472__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39473__i = 0, G__39473__a = new Array(arguments.length -  0);
while (G__39473__i < G__39473__a.length) {G__39473__a[G__39473__i] = arguments[G__39473__i + 0]; ++G__39473__i;}
  args = new cljs.core.IndexedSeq(G__39473__a,0,null);
} 
return G__39472__delegate.call(this,args);};
G__39472.cljs$lang$maxFixedArity = 0;
G__39472.cljs$lang$applyTo = (function (arglist__39474){
var args = cljs.core.seq(arglist__39474);
return G__39472__delegate(args);
});
G__39472.cljs$core$IFn$_invoke$arity$variadic = G__39472__delegate;
return G__39472;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39475__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39476__i = 0, G__39476__a = new Array(arguments.length -  0);
while (G__39476__i < G__39476__a.length) {G__39476__a[G__39476__i] = arguments[G__39476__i + 0]; ++G__39476__i;}
  args = new cljs.core.IndexedSeq(G__39476__a,0,null);
} 
return G__39475__delegate.call(this,args);};
G__39475.cljs$lang$maxFixedArity = 0;
G__39475.cljs$lang$applyTo = (function (arglist__39477){
var args = cljs.core.seq(arglist__39477);
return G__39475__delegate(args);
});
G__39475.cljs$core$IFn$_invoke$arity$variadic = G__39475__delegate;
return G__39475;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__39478__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39479__i = 0, G__39479__a = new Array(arguments.length -  0);
while (G__39479__i < G__39479__a.length) {G__39479__a[G__39479__i] = arguments[G__39479__i + 0]; ++G__39479__i;}
  args = new cljs.core.IndexedSeq(G__39479__a,0,null);
} 
return G__39478__delegate.call(this,args);};
G__39478.cljs$lang$maxFixedArity = 0;
G__39478.cljs$lang$applyTo = (function (arglist__39480){
var args = cljs.core.seq(arglist__39480);
return G__39478__delegate(args);
});
G__39478.cljs$core$IFn$_invoke$arity$variadic = G__39478__delegate;
return G__39478;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39481__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39482__i = 0, G__39482__a = new Array(arguments.length -  0);
while (G__39482__i < G__39482__a.length) {G__39482__a[G__39482__i] = arguments[G__39482__i + 0]; ++G__39482__i;}
  args = new cljs.core.IndexedSeq(G__39482__a,0,null);
} 
return G__39481__delegate.call(this,args);};
G__39481.cljs$lang$maxFixedArity = 0;
G__39481.cljs$lang$applyTo = (function (arglist__39483){
var args = cljs.core.seq(arglist__39483);
return G__39481__delegate(args);
});
G__39481.cljs$core$IFn$_invoke$arity$variadic = G__39481__delegate;
return G__39481;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39484__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39485__i = 0, G__39485__a = new Array(arguments.length -  0);
while (G__39485__i < G__39485__a.length) {G__39485__a[G__39485__i] = arguments[G__39485__i + 0]; ++G__39485__i;}
  args = new cljs.core.IndexedSeq(G__39485__a,0,null);
} 
return G__39484__delegate.call(this,args);};
G__39484.cljs$lang$maxFixedArity = 0;
G__39484.cljs$lang$applyTo = (function (arglist__39486){
var args = cljs.core.seq(arglist__39486);
return G__39484__delegate(args);
});
G__39484.cljs$core$IFn$_invoke$arity$variadic = G__39484__delegate;
return G__39484;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39487__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39488__i = 0, G__39488__a = new Array(arguments.length -  0);
while (G__39488__i < G__39488__a.length) {G__39488__a[G__39488__i] = arguments[G__39488__i + 0]; ++G__39488__i;}
  args = new cljs.core.IndexedSeq(G__39488__a,0,null);
} 
return G__39487__delegate.call(this,args);};
G__39487.cljs$lang$maxFixedArity = 0;
G__39487.cljs$lang$applyTo = (function (arglist__39489){
var args = cljs.core.seq(arglist__39489);
return G__39487__delegate(args);
});
G__39487.cljs$core$IFn$_invoke$arity$variadic = G__39487__delegate;
return G__39487;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39490__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39491__i = 0, G__39491__a = new Array(arguments.length -  0);
while (G__39491__i < G__39491__a.length) {G__39491__a[G__39491__i] = arguments[G__39491__i + 0]; ++G__39491__i;}
  args = new cljs.core.IndexedSeq(G__39491__a,0,null);
} 
return G__39490__delegate.call(this,args);};
G__39490.cljs$lang$maxFixedArity = 0;
G__39490.cljs$lang$applyTo = (function (arglist__39492){
var args = cljs.core.seq(arglist__39492);
return G__39490__delegate(args);
});
G__39490.cljs$core$IFn$_invoke$arity$variadic = G__39490__delegate;
return G__39490;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39493__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39494__i = 0, G__39494__a = new Array(arguments.length -  0);
while (G__39494__i < G__39494__a.length) {G__39494__a[G__39494__i] = arguments[G__39494__i + 0]; ++G__39494__i;}
  args = new cljs.core.IndexedSeq(G__39494__a,0,null);
} 
return G__39493__delegate.call(this,args);};
G__39493.cljs$lang$maxFixedArity = 0;
G__39493.cljs$lang$applyTo = (function (arglist__39495){
var args = cljs.core.seq(arglist__39495);
return G__39493__delegate(args);
});
G__39493.cljs$core$IFn$_invoke$arity$variadic = G__39493__delegate;
return G__39493;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39496__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39497__i = 0, G__39497__a = new Array(arguments.length -  0);
while (G__39497__i < G__39497__a.length) {G__39497__a[G__39497__i] = arguments[G__39497__i + 0]; ++G__39497__i;}
  args = new cljs.core.IndexedSeq(G__39497__a,0,null);
} 
return G__39496__delegate.call(this,args);};
G__39496.cljs$lang$maxFixedArity = 0;
G__39496.cljs$lang$applyTo = (function (arglist__39498){
var args = cljs.core.seq(arglist__39498);
return G__39496__delegate(args);
});
G__39496.cljs$core$IFn$_invoke$arity$variadic = G__39496__delegate;
return G__39496;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39499__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39500__i = 0, G__39500__a = new Array(arguments.length -  0);
while (G__39500__i < G__39500__a.length) {G__39500__a[G__39500__i] = arguments[G__39500__i + 0]; ++G__39500__i;}
  args = new cljs.core.IndexedSeq(G__39500__a,0,null);
} 
return G__39499__delegate.call(this,args);};
G__39499.cljs$lang$maxFixedArity = 0;
G__39499.cljs$lang$applyTo = (function (arglist__39501){
var args = cljs.core.seq(arglist__39501);
return G__39499__delegate(args);
});
G__39499.cljs$core$IFn$_invoke$arity$variadic = G__39499__delegate;
return G__39499;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39502__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39503__i = 0, G__39503__a = new Array(arguments.length -  0);
while (G__39503__i < G__39503__a.length) {G__39503__a[G__39503__i] = arguments[G__39503__i + 0]; ++G__39503__i;}
  args = new cljs.core.IndexedSeq(G__39503__a,0,null);
} 
return G__39502__delegate.call(this,args);};
G__39502.cljs$lang$maxFixedArity = 0;
G__39502.cljs$lang$applyTo = (function (arglist__39504){
var args = cljs.core.seq(arglist__39504);
return G__39502__delegate(args);
});
G__39502.cljs$core$IFn$_invoke$arity$variadic = G__39502__delegate;
return G__39502;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39505__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39506__i = 0, G__39506__a = new Array(arguments.length -  0);
while (G__39506__i < G__39506__a.length) {G__39506__a[G__39506__i] = arguments[G__39506__i + 0]; ++G__39506__i;}
  args = new cljs.core.IndexedSeq(G__39506__a,0,null);
} 
return G__39505__delegate.call(this,args);};
G__39505.cljs$lang$maxFixedArity = 0;
G__39505.cljs$lang$applyTo = (function (arglist__39507){
var args = cljs.core.seq(arglist__39507);
return G__39505__delegate(args);
});
G__39505.cljs$core$IFn$_invoke$arity$variadic = G__39505__delegate;
return G__39505;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39508__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39509__i = 0, G__39509__a = new Array(arguments.length -  0);
while (G__39509__i < G__39509__a.length) {G__39509__a[G__39509__i] = arguments[G__39509__i + 0]; ++G__39509__i;}
  args = new cljs.core.IndexedSeq(G__39509__a,0,null);
} 
return G__39508__delegate.call(this,args);};
G__39508.cljs$lang$maxFixedArity = 0;
G__39508.cljs$lang$applyTo = (function (arglist__39510){
var args = cljs.core.seq(arglist__39510);
return G__39508__delegate(args);
});
G__39508.cljs$core$IFn$_invoke$arity$variadic = G__39508__delegate;
return G__39508;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39511__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39512__i = 0, G__39512__a = new Array(arguments.length -  0);
while (G__39512__i < G__39512__a.length) {G__39512__a[G__39512__i] = arguments[G__39512__i + 0]; ++G__39512__i;}
  args = new cljs.core.IndexedSeq(G__39512__a,0,null);
} 
return G__39511__delegate.call(this,args);};
G__39511.cljs$lang$maxFixedArity = 0;
G__39511.cljs$lang$applyTo = (function (arglist__39513){
var args = cljs.core.seq(arglist__39513);
return G__39511__delegate(args);
});
G__39511.cljs$core$IFn$_invoke$arity$variadic = G__39511__delegate;
return G__39511;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39514__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39515__i = 0, G__39515__a = new Array(arguments.length -  0);
while (G__39515__i < G__39515__a.length) {G__39515__a[G__39515__i] = arguments[G__39515__i + 0]; ++G__39515__i;}
  args = new cljs.core.IndexedSeq(G__39515__a,0,null);
} 
return G__39514__delegate.call(this,args);};
G__39514.cljs$lang$maxFixedArity = 0;
G__39514.cljs$lang$applyTo = (function (arglist__39516){
var args = cljs.core.seq(arglist__39516);
return G__39514__delegate(args);
});
G__39514.cljs$core$IFn$_invoke$arity$variadic = G__39514__delegate;
return G__39514;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39517__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39518__i = 0, G__39518__a = new Array(arguments.length -  0);
while (G__39518__i < G__39518__a.length) {G__39518__a[G__39518__i] = arguments[G__39518__i + 0]; ++G__39518__i;}
  args = new cljs.core.IndexedSeq(G__39518__a,0,null);
} 
return G__39517__delegate.call(this,args);};
G__39517.cljs$lang$maxFixedArity = 0;
G__39517.cljs$lang$applyTo = (function (arglist__39519){
var args = cljs.core.seq(arglist__39519);
return G__39517__delegate(args);
});
G__39517.cljs$core$IFn$_invoke$arity$variadic = G__39517__delegate;
return G__39517;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39520__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39521__i = 0, G__39521__a = new Array(arguments.length -  0);
while (G__39521__i < G__39521__a.length) {G__39521__a[G__39521__i] = arguments[G__39521__i + 0]; ++G__39521__i;}
  args = new cljs.core.IndexedSeq(G__39521__a,0,null);
} 
return G__39520__delegate.call(this,args);};
G__39520.cljs$lang$maxFixedArity = 0;
G__39520.cljs$lang$applyTo = (function (arglist__39522){
var args = cljs.core.seq(arglist__39522);
return G__39520__delegate(args);
});
G__39520.cljs$core$IFn$_invoke$arity$variadic = G__39520__delegate;
return G__39520;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_pointillism_deep_space = (function squiggle$core$run_sketch_$_sketch_pointillism_deep_space(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-deep-space",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39523__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39524__i = 0, G__39524__a = new Array(arguments.length -  0);
while (G__39524__i < G__39524__a.length) {G__39524__a[G__39524__i] = arguments[G__39524__i + 0]; ++G__39524__i;}
  args = new cljs.core.IndexedSeq(G__39524__a,0,null);
} 
return G__39523__delegate.call(this,args);};
G__39523.cljs$lang$maxFixedArity = 0;
G__39523.cljs$lang$applyTo = (function (arglist__39525){
var args = cljs.core.seq(arglist__39525);
return G__39523__delegate(args);
});
G__39523.cljs$core$IFn$_invoke$arity$variadic = G__39523__delegate;
return G__39523;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_deep_space))?(function() { 
var G__39526__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_deep_space,args);
};
var G__39526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39527__i = 0, G__39527__a = new Array(arguments.length -  0);
while (G__39527__i < G__39527__a.length) {G__39527__a[G__39527__i] = arguments[G__39527__i + 0]; ++G__39527__i;}
  args = new cljs.core.IndexedSeq(G__39527__a,0,null);
} 
return G__39526__delegate.call(this,args);};
G__39526.cljs$lang$maxFixedArity = 0;
G__39526.cljs$lang$applyTo = (function (arglist__39528){
var args = cljs.core.seq(arglist__39528);
return G__39526__delegate(args);
});
G__39526.cljs$core$IFn$_invoke$arity$variadic = G__39526__delegate;
return G__39526;
})()
:squiggle.pointillism.setup_deep_space),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39529__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39530__i = 0, G__39530__a = new Array(arguments.length -  0);
while (G__39530__i < G__39530__a.length) {G__39530__a[G__39530__i] = arguments[G__39530__i + 0]; ++G__39530__i;}
  args = new cljs.core.IndexedSeq(G__39530__a,0,null);
} 
return G__39529__delegate.call(this,args);};
G__39529.cljs$lang$maxFixedArity = 0;
G__39529.cljs$lang$applyTo = (function (arglist__39531){
var args = cljs.core.seq(arglist__39531);
return G__39529__delegate(args);
});
G__39529.cljs$core$IFn$_invoke$arity$variadic = G__39529__delegate;
return G__39529;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_deep_space', squiggle.core.sketch_pointillism_deep_space);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_deep_space,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-deep-space"], null));
}

squiggle.core.sketch_pointillism_andromeda = (function squiggle$core$run_sketch_$_sketch_pointillism_andromeda(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-andromeda",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39532__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39533__i = 0, G__39533__a = new Array(arguments.length -  0);
while (G__39533__i < G__39533__a.length) {G__39533__a[G__39533__i] = arguments[G__39533__i + 0]; ++G__39533__i;}
  args = new cljs.core.IndexedSeq(G__39533__a,0,null);
} 
return G__39532__delegate.call(this,args);};
G__39532.cljs$lang$maxFixedArity = 0;
G__39532.cljs$lang$applyTo = (function (arglist__39534){
var args = cljs.core.seq(arglist__39534);
return G__39532__delegate(args);
});
G__39532.cljs$core$IFn$_invoke$arity$variadic = G__39532__delegate;
return G__39532;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_andromeda))?(function() { 
var G__39535__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_andromeda,args);
};
var G__39535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39536__i = 0, G__39536__a = new Array(arguments.length -  0);
while (G__39536__i < G__39536__a.length) {G__39536__a[G__39536__i] = arguments[G__39536__i + 0]; ++G__39536__i;}
  args = new cljs.core.IndexedSeq(G__39536__a,0,null);
} 
return G__39535__delegate.call(this,args);};
G__39535.cljs$lang$maxFixedArity = 0;
G__39535.cljs$lang$applyTo = (function (arglist__39537){
var args = cljs.core.seq(arglist__39537);
return G__39535__delegate(args);
});
G__39535.cljs$core$IFn$_invoke$arity$variadic = G__39535__delegate;
return G__39535;
})()
:squiggle.pointillism.setup_andromeda),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39538__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39539__i = 0, G__39539__a = new Array(arguments.length -  0);
while (G__39539__i < G__39539__a.length) {G__39539__a[G__39539__i] = arguments[G__39539__i + 0]; ++G__39539__i;}
  args = new cljs.core.IndexedSeq(G__39539__a,0,null);
} 
return G__39538__delegate.call(this,args);};
G__39538.cljs$lang$maxFixedArity = 0;
G__39538.cljs$lang$applyTo = (function (arglist__39540){
var args = cljs.core.seq(arglist__39540);
return G__39538__delegate(args);
});
G__39538.cljs$core$IFn$_invoke$arity$variadic = G__39538__delegate;
return G__39538;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_andromeda', squiggle.core.sketch_pointillism_andromeda);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_andromeda,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-andromeda"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526423106311
