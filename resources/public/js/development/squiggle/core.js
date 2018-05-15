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
var G__39546__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39547__i = 0, G__39547__a = new Array(arguments.length -  0);
while (G__39547__i < G__39547__a.length) {G__39547__a[G__39547__i] = arguments[G__39547__i + 0]; ++G__39547__i;}
  args = new cljs.core.IndexedSeq(G__39547__a,0,null);
} 
return G__39546__delegate.call(this,args);};
G__39546.cljs$lang$maxFixedArity = 0;
G__39546.cljs$lang$applyTo = (function (arglist__39548){
var args = cljs.core.seq(arglist__39548);
return G__39546__delegate(args);
});
G__39546.cljs$core$IFn$_invoke$arity$variadic = G__39546__delegate;
return G__39546;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39549__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39550__i = 0, G__39550__a = new Array(arguments.length -  0);
while (G__39550__i < G__39550__a.length) {G__39550__a[G__39550__i] = arguments[G__39550__i + 0]; ++G__39550__i;}
  args = new cljs.core.IndexedSeq(G__39550__a,0,null);
} 
return G__39549__delegate.call(this,args);};
G__39549.cljs$lang$maxFixedArity = 0;
G__39549.cljs$lang$applyTo = (function (arglist__39551){
var args = cljs.core.seq(arglist__39551);
return G__39549__delegate(args);
});
G__39549.cljs$core$IFn$_invoke$arity$variadic = G__39549__delegate;
return G__39549;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39552__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39553__i = 0, G__39553__a = new Array(arguments.length -  0);
while (G__39553__i < G__39553__a.length) {G__39553__a[G__39553__i] = arguments[G__39553__i + 0]; ++G__39553__i;}
  args = new cljs.core.IndexedSeq(G__39553__a,0,null);
} 
return G__39552__delegate.call(this,args);};
G__39552.cljs$lang$maxFixedArity = 0;
G__39552.cljs$lang$applyTo = (function (arglist__39554){
var args = cljs.core.seq(arglist__39554);
return G__39552__delegate(args);
});
G__39552.cljs$core$IFn$_invoke$arity$variadic = G__39552__delegate;
return G__39552;
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
var G__39555__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39556__i = 0, G__39556__a = new Array(arguments.length -  0);
while (G__39556__i < G__39556__a.length) {G__39556__a[G__39556__i] = arguments[G__39556__i + 0]; ++G__39556__i;}
  args = new cljs.core.IndexedSeq(G__39556__a,0,null);
} 
return G__39555__delegate.call(this,args);};
G__39555.cljs$lang$maxFixedArity = 0;
G__39555.cljs$lang$applyTo = (function (arglist__39557){
var args = cljs.core.seq(arglist__39557);
return G__39555__delegate(args);
});
G__39555.cljs$core$IFn$_invoke$arity$variadic = G__39555__delegate;
return G__39555;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39558__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39559__i = 0, G__39559__a = new Array(arguments.length -  0);
while (G__39559__i < G__39559__a.length) {G__39559__a[G__39559__i] = arguments[G__39559__i + 0]; ++G__39559__i;}
  args = new cljs.core.IndexedSeq(G__39559__a,0,null);
} 
return G__39558__delegate.call(this,args);};
G__39558.cljs$lang$maxFixedArity = 0;
G__39558.cljs$lang$applyTo = (function (arglist__39560){
var args = cljs.core.seq(arglist__39560);
return G__39558__delegate(args);
});
G__39558.cljs$core$IFn$_invoke$arity$variadic = G__39558__delegate;
return G__39558;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39561__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39562__i = 0, G__39562__a = new Array(arguments.length -  0);
while (G__39562__i < G__39562__a.length) {G__39562__a[G__39562__i] = arguments[G__39562__i + 0]; ++G__39562__i;}
  args = new cljs.core.IndexedSeq(G__39562__a,0,null);
} 
return G__39561__delegate.call(this,args);};
G__39561.cljs$lang$maxFixedArity = 0;
G__39561.cljs$lang$applyTo = (function (arglist__39563){
var args = cljs.core.seq(arglist__39563);
return G__39561__delegate(args);
});
G__39561.cljs$core$IFn$_invoke$arity$variadic = G__39561__delegate;
return G__39561;
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
var G__39564__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39565__i = 0, G__39565__a = new Array(arguments.length -  0);
while (G__39565__i < G__39565__a.length) {G__39565__a[G__39565__i] = arguments[G__39565__i + 0]; ++G__39565__i;}
  args = new cljs.core.IndexedSeq(G__39565__a,0,null);
} 
return G__39564__delegate.call(this,args);};
G__39564.cljs$lang$maxFixedArity = 0;
G__39564.cljs$lang$applyTo = (function (arglist__39566){
var args = cljs.core.seq(arglist__39566);
return G__39564__delegate(args);
});
G__39564.cljs$core$IFn$_invoke$arity$variadic = G__39564__delegate;
return G__39564;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39567__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39568__i = 0, G__39568__a = new Array(arguments.length -  0);
while (G__39568__i < G__39568__a.length) {G__39568__a[G__39568__i] = arguments[G__39568__i + 0]; ++G__39568__i;}
  args = new cljs.core.IndexedSeq(G__39568__a,0,null);
} 
return G__39567__delegate.call(this,args);};
G__39567.cljs$lang$maxFixedArity = 0;
G__39567.cljs$lang$applyTo = (function (arglist__39569){
var args = cljs.core.seq(arglist__39569);
return G__39567__delegate(args);
});
G__39567.cljs$core$IFn$_invoke$arity$variadic = G__39567__delegate;
return G__39567;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39570__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39571__i = 0, G__39571__a = new Array(arguments.length -  0);
while (G__39571__i < G__39571__a.length) {G__39571__a[G__39571__i] = arguments[G__39571__i + 0]; ++G__39571__i;}
  args = new cljs.core.IndexedSeq(G__39571__a,0,null);
} 
return G__39570__delegate.call(this,args);};
G__39570.cljs$lang$maxFixedArity = 0;
G__39570.cljs$lang$applyTo = (function (arglist__39572){
var args = cljs.core.seq(arglist__39572);
return G__39570__delegate(args);
});
G__39570.cljs$core$IFn$_invoke$arity$variadic = G__39570__delegate;
return G__39570;
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
var G__39573__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39574__i = 0, G__39574__a = new Array(arguments.length -  0);
while (G__39574__i < G__39574__a.length) {G__39574__a[G__39574__i] = arguments[G__39574__i + 0]; ++G__39574__i;}
  args = new cljs.core.IndexedSeq(G__39574__a,0,null);
} 
return G__39573__delegate.call(this,args);};
G__39573.cljs$lang$maxFixedArity = 0;
G__39573.cljs$lang$applyTo = (function (arglist__39575){
var args = cljs.core.seq(arglist__39575);
return G__39573__delegate(args);
});
G__39573.cljs$core$IFn$_invoke$arity$variadic = G__39573__delegate;
return G__39573;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39576__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39577__i = 0, G__39577__a = new Array(arguments.length -  0);
while (G__39577__i < G__39577__a.length) {G__39577__a[G__39577__i] = arguments[G__39577__i + 0]; ++G__39577__i;}
  args = new cljs.core.IndexedSeq(G__39577__a,0,null);
} 
return G__39576__delegate.call(this,args);};
G__39576.cljs$lang$maxFixedArity = 0;
G__39576.cljs$lang$applyTo = (function (arglist__39578){
var args = cljs.core.seq(arglist__39578);
return G__39576__delegate(args);
});
G__39576.cljs$core$IFn$_invoke$arity$variadic = G__39576__delegate;
return G__39576;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39579__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39580__i = 0, G__39580__a = new Array(arguments.length -  0);
while (G__39580__i < G__39580__a.length) {G__39580__a[G__39580__i] = arguments[G__39580__i + 0]; ++G__39580__i;}
  args = new cljs.core.IndexedSeq(G__39580__a,0,null);
} 
return G__39579__delegate.call(this,args);};
G__39579.cljs$lang$maxFixedArity = 0;
G__39579.cljs$lang$applyTo = (function (arglist__39581){
var args = cljs.core.seq(arglist__39581);
return G__39579__delegate(args);
});
G__39579.cljs$core$IFn$_invoke$arity$variadic = G__39579__delegate;
return G__39579;
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
var G__39582__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39583__i = 0, G__39583__a = new Array(arguments.length -  0);
while (G__39583__i < G__39583__a.length) {G__39583__a[G__39583__i] = arguments[G__39583__i + 0]; ++G__39583__i;}
  args = new cljs.core.IndexedSeq(G__39583__a,0,null);
} 
return G__39582__delegate.call(this,args);};
G__39582.cljs$lang$maxFixedArity = 0;
G__39582.cljs$lang$applyTo = (function (arglist__39584){
var args = cljs.core.seq(arglist__39584);
return G__39582__delegate(args);
});
G__39582.cljs$core$IFn$_invoke$arity$variadic = G__39582__delegate;
return G__39582;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39585__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39586__i = 0, G__39586__a = new Array(arguments.length -  0);
while (G__39586__i < G__39586__a.length) {G__39586__a[G__39586__i] = arguments[G__39586__i + 0]; ++G__39586__i;}
  args = new cljs.core.IndexedSeq(G__39586__a,0,null);
} 
return G__39585__delegate.call(this,args);};
G__39585.cljs$lang$maxFixedArity = 0;
G__39585.cljs$lang$applyTo = (function (arglist__39587){
var args = cljs.core.seq(arglist__39587);
return G__39585__delegate(args);
});
G__39585.cljs$core$IFn$_invoke$arity$variadic = G__39585__delegate;
return G__39585;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39588__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39589__i = 0, G__39589__a = new Array(arguments.length -  0);
while (G__39589__i < G__39589__a.length) {G__39589__a[G__39589__i] = arguments[G__39589__i + 0]; ++G__39589__i;}
  args = new cljs.core.IndexedSeq(G__39589__a,0,null);
} 
return G__39588__delegate.call(this,args);};
G__39588.cljs$lang$maxFixedArity = 0;
G__39588.cljs$lang$applyTo = (function (arglist__39590){
var args = cljs.core.seq(arglist__39590);
return G__39588__delegate(args);
});
G__39588.cljs$core$IFn$_invoke$arity$variadic = G__39588__delegate;
return G__39588;
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
var G__39591__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39592__i = 0, G__39592__a = new Array(arguments.length -  0);
while (G__39592__i < G__39592__a.length) {G__39592__a[G__39592__i] = arguments[G__39592__i + 0]; ++G__39592__i;}
  args = new cljs.core.IndexedSeq(G__39592__a,0,null);
} 
return G__39591__delegate.call(this,args);};
G__39591.cljs$lang$maxFixedArity = 0;
G__39591.cljs$lang$applyTo = (function (arglist__39593){
var args = cljs.core.seq(arglist__39593);
return G__39591__delegate(args);
});
G__39591.cljs$core$IFn$_invoke$arity$variadic = G__39591__delegate;
return G__39591;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39594__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39595__i = 0, G__39595__a = new Array(arguments.length -  0);
while (G__39595__i < G__39595__a.length) {G__39595__a[G__39595__i] = arguments[G__39595__i + 0]; ++G__39595__i;}
  args = new cljs.core.IndexedSeq(G__39595__a,0,null);
} 
return G__39594__delegate.call(this,args);};
G__39594.cljs$lang$maxFixedArity = 0;
G__39594.cljs$lang$applyTo = (function (arglist__39596){
var args = cljs.core.seq(arglist__39596);
return G__39594__delegate(args);
});
G__39594.cljs$core$IFn$_invoke$arity$variadic = G__39594__delegate;
return G__39594;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39597__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39598__i = 0, G__39598__a = new Array(arguments.length -  0);
while (G__39598__i < G__39598__a.length) {G__39598__a[G__39598__i] = arguments[G__39598__i + 0]; ++G__39598__i;}
  args = new cljs.core.IndexedSeq(G__39598__a,0,null);
} 
return G__39597__delegate.call(this,args);};
G__39597.cljs$lang$maxFixedArity = 0;
G__39597.cljs$lang$applyTo = (function (arglist__39599){
var args = cljs.core.seq(arglist__39599);
return G__39597__delegate(args);
});
G__39597.cljs$core$IFn$_invoke$arity$variadic = G__39597__delegate;
return G__39597;
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
var G__39600__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39601__i = 0, G__39601__a = new Array(arguments.length -  0);
while (G__39601__i < G__39601__a.length) {G__39601__a[G__39601__i] = arguments[G__39601__i + 0]; ++G__39601__i;}
  args = new cljs.core.IndexedSeq(G__39601__a,0,null);
} 
return G__39600__delegate.call(this,args);};
G__39600.cljs$lang$maxFixedArity = 0;
G__39600.cljs$lang$applyTo = (function (arglist__39602){
var args = cljs.core.seq(arglist__39602);
return G__39600__delegate(args);
});
G__39600.cljs$core$IFn$_invoke$arity$variadic = G__39600__delegate;
return G__39600;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39603__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39604__i = 0, G__39604__a = new Array(arguments.length -  0);
while (G__39604__i < G__39604__a.length) {G__39604__a[G__39604__i] = arguments[G__39604__i + 0]; ++G__39604__i;}
  args = new cljs.core.IndexedSeq(G__39604__a,0,null);
} 
return G__39603__delegate.call(this,args);};
G__39603.cljs$lang$maxFixedArity = 0;
G__39603.cljs$lang$applyTo = (function (arglist__39605){
var args = cljs.core.seq(arglist__39605);
return G__39603__delegate(args);
});
G__39603.cljs$core$IFn$_invoke$arity$variadic = G__39603__delegate;
return G__39603;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39606__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39607__i = 0, G__39607__a = new Array(arguments.length -  0);
while (G__39607__i < G__39607__a.length) {G__39607__a[G__39607__i] = arguments[G__39607__i + 0]; ++G__39607__i;}
  args = new cljs.core.IndexedSeq(G__39607__a,0,null);
} 
return G__39606__delegate.call(this,args);};
G__39606.cljs$lang$maxFixedArity = 0;
G__39606.cljs$lang$applyTo = (function (arglist__39608){
var args = cljs.core.seq(arglist__39608);
return G__39606__delegate(args);
});
G__39606.cljs$core$IFn$_invoke$arity$variadic = G__39606__delegate;
return G__39606;
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
var G__39609__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39610__i = 0, G__39610__a = new Array(arguments.length -  0);
while (G__39610__i < G__39610__a.length) {G__39610__a[G__39610__i] = arguments[G__39610__i + 0]; ++G__39610__i;}
  args = new cljs.core.IndexedSeq(G__39610__a,0,null);
} 
return G__39609__delegate.call(this,args);};
G__39609.cljs$lang$maxFixedArity = 0;
G__39609.cljs$lang$applyTo = (function (arglist__39611){
var args = cljs.core.seq(arglist__39611);
return G__39609__delegate(args);
});
G__39609.cljs$core$IFn$_invoke$arity$variadic = G__39609__delegate;
return G__39609;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39612__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39613__i = 0, G__39613__a = new Array(arguments.length -  0);
while (G__39613__i < G__39613__a.length) {G__39613__a[G__39613__i] = arguments[G__39613__i + 0]; ++G__39613__i;}
  args = new cljs.core.IndexedSeq(G__39613__a,0,null);
} 
return G__39612__delegate.call(this,args);};
G__39612.cljs$lang$maxFixedArity = 0;
G__39612.cljs$lang$applyTo = (function (arglist__39614){
var args = cljs.core.seq(arglist__39614);
return G__39612__delegate(args);
});
G__39612.cljs$core$IFn$_invoke$arity$variadic = G__39612__delegate;
return G__39612;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39615__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39616__i = 0, G__39616__a = new Array(arguments.length -  0);
while (G__39616__i < G__39616__a.length) {G__39616__a[G__39616__i] = arguments[G__39616__i + 0]; ++G__39616__i;}
  args = new cljs.core.IndexedSeq(G__39616__a,0,null);
} 
return G__39615__delegate.call(this,args);};
G__39615.cljs$lang$maxFixedArity = 0;
G__39615.cljs$lang$applyTo = (function (arglist__39617){
var args = cljs.core.seq(arglist__39617);
return G__39615__delegate(args);
});
G__39615.cljs$core$IFn$_invoke$arity$variadic = G__39615__delegate;
return G__39615;
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
var G__39618__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39619__i = 0, G__39619__a = new Array(arguments.length -  0);
while (G__39619__i < G__39619__a.length) {G__39619__a[G__39619__i] = arguments[G__39619__i + 0]; ++G__39619__i;}
  args = new cljs.core.IndexedSeq(G__39619__a,0,null);
} 
return G__39618__delegate.call(this,args);};
G__39618.cljs$lang$maxFixedArity = 0;
G__39618.cljs$lang$applyTo = (function (arglist__39620){
var args = cljs.core.seq(arglist__39620);
return G__39618__delegate(args);
});
G__39618.cljs$core$IFn$_invoke$arity$variadic = G__39618__delegate;
return G__39618;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_deep_space))?(function() { 
var G__39621__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_deep_space,args);
};
var G__39621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39622__i = 0, G__39622__a = new Array(arguments.length -  0);
while (G__39622__i < G__39622__a.length) {G__39622__a[G__39622__i] = arguments[G__39622__i + 0]; ++G__39622__i;}
  args = new cljs.core.IndexedSeq(G__39622__a,0,null);
} 
return G__39621__delegate.call(this,args);};
G__39621.cljs$lang$maxFixedArity = 0;
G__39621.cljs$lang$applyTo = (function (arglist__39623){
var args = cljs.core.seq(arglist__39623);
return G__39621__delegate(args);
});
G__39621.cljs$core$IFn$_invoke$arity$variadic = G__39621__delegate;
return G__39621;
})()
:squiggle.pointillism.setup_deep_space),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39624__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39625__i = 0, G__39625__a = new Array(arguments.length -  0);
while (G__39625__i < G__39625__a.length) {G__39625__a[G__39625__i] = arguments[G__39625__i + 0]; ++G__39625__i;}
  args = new cljs.core.IndexedSeq(G__39625__a,0,null);
} 
return G__39624__delegate.call(this,args);};
G__39624.cljs$lang$maxFixedArity = 0;
G__39624.cljs$lang$applyTo = (function (arglist__39626){
var args = cljs.core.seq(arglist__39626);
return G__39624__delegate(args);
});
G__39624.cljs$core$IFn$_invoke$arity$variadic = G__39624__delegate;
return G__39624;
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
var G__39627__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39628__i = 0, G__39628__a = new Array(arguments.length -  0);
while (G__39628__i < G__39628__a.length) {G__39628__a[G__39628__i] = arguments[G__39628__i + 0]; ++G__39628__i;}
  args = new cljs.core.IndexedSeq(G__39628__a,0,null);
} 
return G__39627__delegate.call(this,args);};
G__39627.cljs$lang$maxFixedArity = 0;
G__39627.cljs$lang$applyTo = (function (arglist__39629){
var args = cljs.core.seq(arglist__39629);
return G__39627__delegate(args);
});
G__39627.cljs$core$IFn$_invoke$arity$variadic = G__39627__delegate;
return G__39627;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_andromeda))?(function() { 
var G__39630__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_andromeda,args);
};
var G__39630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39631__i = 0, G__39631__a = new Array(arguments.length -  0);
while (G__39631__i < G__39631__a.length) {G__39631__a[G__39631__i] = arguments[G__39631__i + 0]; ++G__39631__i;}
  args = new cljs.core.IndexedSeq(G__39631__a,0,null);
} 
return G__39630__delegate.call(this,args);};
G__39630.cljs$lang$maxFixedArity = 0;
G__39630.cljs$lang$applyTo = (function (arglist__39632){
var args = cljs.core.seq(arglist__39632);
return G__39630__delegate(args);
});
G__39630.cljs$core$IFn$_invoke$arity$variadic = G__39630__delegate;
return G__39630;
})()
:squiggle.pointillism.setup_andromeda),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39633__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39634__i = 0, G__39634__a = new Array(arguments.length -  0);
while (G__39634__i < G__39634__a.length) {G__39634__a[G__39634__i] = arguments[G__39634__i + 0]; ++G__39634__i;}
  args = new cljs.core.IndexedSeq(G__39634__a,0,null);
} 
return G__39633__delegate.call(this,args);};
G__39633.cljs$lang$maxFixedArity = 0;
G__39633.cljs$lang$applyTo = (function (arglist__39635){
var args = cljs.core.seq(arglist__39635);
return G__39633__delegate(args);
});
G__39633.cljs$core$IFn$_invoke$arity$variadic = G__39633__delegate;
return G__39633;
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

//# sourceMappingURL=core.js.map?rel=1526423871771
