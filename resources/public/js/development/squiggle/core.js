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
var G__39639__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39640__i = 0, G__39640__a = new Array(arguments.length -  0);
while (G__39640__i < G__39640__a.length) {G__39640__a[G__39640__i] = arguments[G__39640__i + 0]; ++G__39640__i;}
  args = new cljs.core.IndexedSeq(G__39640__a,0,null);
} 
return G__39639__delegate.call(this,args);};
G__39639.cljs$lang$maxFixedArity = 0;
G__39639.cljs$lang$applyTo = (function (arglist__39641){
var args = cljs.core.seq(arglist__39641);
return G__39639__delegate(args);
});
G__39639.cljs$core$IFn$_invoke$arity$variadic = G__39639__delegate;
return G__39639;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39642__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39643__i = 0, G__39643__a = new Array(arguments.length -  0);
while (G__39643__i < G__39643__a.length) {G__39643__a[G__39643__i] = arguments[G__39643__i + 0]; ++G__39643__i;}
  args = new cljs.core.IndexedSeq(G__39643__a,0,null);
} 
return G__39642__delegate.call(this,args);};
G__39642.cljs$lang$maxFixedArity = 0;
G__39642.cljs$lang$applyTo = (function (arglist__39644){
var args = cljs.core.seq(arglist__39644);
return G__39642__delegate(args);
});
G__39642.cljs$core$IFn$_invoke$arity$variadic = G__39642__delegate;
return G__39642;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39645__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39646__i = 0, G__39646__a = new Array(arguments.length -  0);
while (G__39646__i < G__39646__a.length) {G__39646__a[G__39646__i] = arguments[G__39646__i + 0]; ++G__39646__i;}
  args = new cljs.core.IndexedSeq(G__39646__a,0,null);
} 
return G__39645__delegate.call(this,args);};
G__39645.cljs$lang$maxFixedArity = 0;
G__39645.cljs$lang$applyTo = (function (arglist__39647){
var args = cljs.core.seq(arglist__39647);
return G__39645__delegate(args);
});
G__39645.cljs$core$IFn$_invoke$arity$variadic = G__39645__delegate;
return G__39645;
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
var G__39648__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39649__i = 0, G__39649__a = new Array(arguments.length -  0);
while (G__39649__i < G__39649__a.length) {G__39649__a[G__39649__i] = arguments[G__39649__i + 0]; ++G__39649__i;}
  args = new cljs.core.IndexedSeq(G__39649__a,0,null);
} 
return G__39648__delegate.call(this,args);};
G__39648.cljs$lang$maxFixedArity = 0;
G__39648.cljs$lang$applyTo = (function (arglist__39650){
var args = cljs.core.seq(arglist__39650);
return G__39648__delegate(args);
});
G__39648.cljs$core$IFn$_invoke$arity$variadic = G__39648__delegate;
return G__39648;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39651__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39652__i = 0, G__39652__a = new Array(arguments.length -  0);
while (G__39652__i < G__39652__a.length) {G__39652__a[G__39652__i] = arguments[G__39652__i + 0]; ++G__39652__i;}
  args = new cljs.core.IndexedSeq(G__39652__a,0,null);
} 
return G__39651__delegate.call(this,args);};
G__39651.cljs$lang$maxFixedArity = 0;
G__39651.cljs$lang$applyTo = (function (arglist__39653){
var args = cljs.core.seq(arglist__39653);
return G__39651__delegate(args);
});
G__39651.cljs$core$IFn$_invoke$arity$variadic = G__39651__delegate;
return G__39651;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39654__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39655__i = 0, G__39655__a = new Array(arguments.length -  0);
while (G__39655__i < G__39655__a.length) {G__39655__a[G__39655__i] = arguments[G__39655__i + 0]; ++G__39655__i;}
  args = new cljs.core.IndexedSeq(G__39655__a,0,null);
} 
return G__39654__delegate.call(this,args);};
G__39654.cljs$lang$maxFixedArity = 0;
G__39654.cljs$lang$applyTo = (function (arglist__39656){
var args = cljs.core.seq(arglist__39656);
return G__39654__delegate(args);
});
G__39654.cljs$core$IFn$_invoke$arity$variadic = G__39654__delegate;
return G__39654;
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
var G__39657__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39658__i = 0, G__39658__a = new Array(arguments.length -  0);
while (G__39658__i < G__39658__a.length) {G__39658__a[G__39658__i] = arguments[G__39658__i + 0]; ++G__39658__i;}
  args = new cljs.core.IndexedSeq(G__39658__a,0,null);
} 
return G__39657__delegate.call(this,args);};
G__39657.cljs$lang$maxFixedArity = 0;
G__39657.cljs$lang$applyTo = (function (arglist__39659){
var args = cljs.core.seq(arglist__39659);
return G__39657__delegate(args);
});
G__39657.cljs$core$IFn$_invoke$arity$variadic = G__39657__delegate;
return G__39657;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39660__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39661__i = 0, G__39661__a = new Array(arguments.length -  0);
while (G__39661__i < G__39661__a.length) {G__39661__a[G__39661__i] = arguments[G__39661__i + 0]; ++G__39661__i;}
  args = new cljs.core.IndexedSeq(G__39661__a,0,null);
} 
return G__39660__delegate.call(this,args);};
G__39660.cljs$lang$maxFixedArity = 0;
G__39660.cljs$lang$applyTo = (function (arglist__39662){
var args = cljs.core.seq(arglist__39662);
return G__39660__delegate(args);
});
G__39660.cljs$core$IFn$_invoke$arity$variadic = G__39660__delegate;
return G__39660;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39663__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39664__i = 0, G__39664__a = new Array(arguments.length -  0);
while (G__39664__i < G__39664__a.length) {G__39664__a[G__39664__i] = arguments[G__39664__i + 0]; ++G__39664__i;}
  args = new cljs.core.IndexedSeq(G__39664__a,0,null);
} 
return G__39663__delegate.call(this,args);};
G__39663.cljs$lang$maxFixedArity = 0;
G__39663.cljs$lang$applyTo = (function (arglist__39665){
var args = cljs.core.seq(arglist__39665);
return G__39663__delegate(args);
});
G__39663.cljs$core$IFn$_invoke$arity$variadic = G__39663__delegate;
return G__39663;
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
var G__39666__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39667__i = 0, G__39667__a = new Array(arguments.length -  0);
while (G__39667__i < G__39667__a.length) {G__39667__a[G__39667__i] = arguments[G__39667__i + 0]; ++G__39667__i;}
  args = new cljs.core.IndexedSeq(G__39667__a,0,null);
} 
return G__39666__delegate.call(this,args);};
G__39666.cljs$lang$maxFixedArity = 0;
G__39666.cljs$lang$applyTo = (function (arglist__39668){
var args = cljs.core.seq(arglist__39668);
return G__39666__delegate(args);
});
G__39666.cljs$core$IFn$_invoke$arity$variadic = G__39666__delegate;
return G__39666;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39669__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39670__i = 0, G__39670__a = new Array(arguments.length -  0);
while (G__39670__i < G__39670__a.length) {G__39670__a[G__39670__i] = arguments[G__39670__i + 0]; ++G__39670__i;}
  args = new cljs.core.IndexedSeq(G__39670__a,0,null);
} 
return G__39669__delegate.call(this,args);};
G__39669.cljs$lang$maxFixedArity = 0;
G__39669.cljs$lang$applyTo = (function (arglist__39671){
var args = cljs.core.seq(arglist__39671);
return G__39669__delegate(args);
});
G__39669.cljs$core$IFn$_invoke$arity$variadic = G__39669__delegate;
return G__39669;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39672__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39673__i = 0, G__39673__a = new Array(arguments.length -  0);
while (G__39673__i < G__39673__a.length) {G__39673__a[G__39673__i] = arguments[G__39673__i + 0]; ++G__39673__i;}
  args = new cljs.core.IndexedSeq(G__39673__a,0,null);
} 
return G__39672__delegate.call(this,args);};
G__39672.cljs$lang$maxFixedArity = 0;
G__39672.cljs$lang$applyTo = (function (arglist__39674){
var args = cljs.core.seq(arglist__39674);
return G__39672__delegate(args);
});
G__39672.cljs$core$IFn$_invoke$arity$variadic = G__39672__delegate;
return G__39672;
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
var G__39675__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39676__i = 0, G__39676__a = new Array(arguments.length -  0);
while (G__39676__i < G__39676__a.length) {G__39676__a[G__39676__i] = arguments[G__39676__i + 0]; ++G__39676__i;}
  args = new cljs.core.IndexedSeq(G__39676__a,0,null);
} 
return G__39675__delegate.call(this,args);};
G__39675.cljs$lang$maxFixedArity = 0;
G__39675.cljs$lang$applyTo = (function (arglist__39677){
var args = cljs.core.seq(arglist__39677);
return G__39675__delegate(args);
});
G__39675.cljs$core$IFn$_invoke$arity$variadic = G__39675__delegate;
return G__39675;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39678__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39679__i = 0, G__39679__a = new Array(arguments.length -  0);
while (G__39679__i < G__39679__a.length) {G__39679__a[G__39679__i] = arguments[G__39679__i + 0]; ++G__39679__i;}
  args = new cljs.core.IndexedSeq(G__39679__a,0,null);
} 
return G__39678__delegate.call(this,args);};
G__39678.cljs$lang$maxFixedArity = 0;
G__39678.cljs$lang$applyTo = (function (arglist__39680){
var args = cljs.core.seq(arglist__39680);
return G__39678__delegate(args);
});
G__39678.cljs$core$IFn$_invoke$arity$variadic = G__39678__delegate;
return G__39678;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39681__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39682__i = 0, G__39682__a = new Array(arguments.length -  0);
while (G__39682__i < G__39682__a.length) {G__39682__a[G__39682__i] = arguments[G__39682__i + 0]; ++G__39682__i;}
  args = new cljs.core.IndexedSeq(G__39682__a,0,null);
} 
return G__39681__delegate.call(this,args);};
G__39681.cljs$lang$maxFixedArity = 0;
G__39681.cljs$lang$applyTo = (function (arglist__39683){
var args = cljs.core.seq(arglist__39683);
return G__39681__delegate(args);
});
G__39681.cljs$core$IFn$_invoke$arity$variadic = G__39681__delegate;
return G__39681;
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
var G__39684__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39685__i = 0, G__39685__a = new Array(arguments.length -  0);
while (G__39685__i < G__39685__a.length) {G__39685__a[G__39685__i] = arguments[G__39685__i + 0]; ++G__39685__i;}
  args = new cljs.core.IndexedSeq(G__39685__a,0,null);
} 
return G__39684__delegate.call(this,args);};
G__39684.cljs$lang$maxFixedArity = 0;
G__39684.cljs$lang$applyTo = (function (arglist__39686){
var args = cljs.core.seq(arglist__39686);
return G__39684__delegate(args);
});
G__39684.cljs$core$IFn$_invoke$arity$variadic = G__39684__delegate;
return G__39684;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39687__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39688__i = 0, G__39688__a = new Array(arguments.length -  0);
while (G__39688__i < G__39688__a.length) {G__39688__a[G__39688__i] = arguments[G__39688__i + 0]; ++G__39688__i;}
  args = new cljs.core.IndexedSeq(G__39688__a,0,null);
} 
return G__39687__delegate.call(this,args);};
G__39687.cljs$lang$maxFixedArity = 0;
G__39687.cljs$lang$applyTo = (function (arglist__39689){
var args = cljs.core.seq(arglist__39689);
return G__39687__delegate(args);
});
G__39687.cljs$core$IFn$_invoke$arity$variadic = G__39687__delegate;
return G__39687;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39690__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39691__i = 0, G__39691__a = new Array(arguments.length -  0);
while (G__39691__i < G__39691__a.length) {G__39691__a[G__39691__i] = arguments[G__39691__i + 0]; ++G__39691__i;}
  args = new cljs.core.IndexedSeq(G__39691__a,0,null);
} 
return G__39690__delegate.call(this,args);};
G__39690.cljs$lang$maxFixedArity = 0;
G__39690.cljs$lang$applyTo = (function (arglist__39692){
var args = cljs.core.seq(arglist__39692);
return G__39690__delegate(args);
});
G__39690.cljs$core$IFn$_invoke$arity$variadic = G__39690__delegate;
return G__39690;
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
var G__39693__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39694__i = 0, G__39694__a = new Array(arguments.length -  0);
while (G__39694__i < G__39694__a.length) {G__39694__a[G__39694__i] = arguments[G__39694__i + 0]; ++G__39694__i;}
  args = new cljs.core.IndexedSeq(G__39694__a,0,null);
} 
return G__39693__delegate.call(this,args);};
G__39693.cljs$lang$maxFixedArity = 0;
G__39693.cljs$lang$applyTo = (function (arglist__39695){
var args = cljs.core.seq(arglist__39695);
return G__39693__delegate(args);
});
G__39693.cljs$core$IFn$_invoke$arity$variadic = G__39693__delegate;
return G__39693;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39696__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39697__i = 0, G__39697__a = new Array(arguments.length -  0);
while (G__39697__i < G__39697__a.length) {G__39697__a[G__39697__i] = arguments[G__39697__i + 0]; ++G__39697__i;}
  args = new cljs.core.IndexedSeq(G__39697__a,0,null);
} 
return G__39696__delegate.call(this,args);};
G__39696.cljs$lang$maxFixedArity = 0;
G__39696.cljs$lang$applyTo = (function (arglist__39698){
var args = cljs.core.seq(arglist__39698);
return G__39696__delegate(args);
});
G__39696.cljs$core$IFn$_invoke$arity$variadic = G__39696__delegate;
return G__39696;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39699__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39700__i = 0, G__39700__a = new Array(arguments.length -  0);
while (G__39700__i < G__39700__a.length) {G__39700__a[G__39700__i] = arguments[G__39700__i + 0]; ++G__39700__i;}
  args = new cljs.core.IndexedSeq(G__39700__a,0,null);
} 
return G__39699__delegate.call(this,args);};
G__39699.cljs$lang$maxFixedArity = 0;
G__39699.cljs$lang$applyTo = (function (arglist__39701){
var args = cljs.core.seq(arglist__39701);
return G__39699__delegate(args);
});
G__39699.cljs$core$IFn$_invoke$arity$variadic = G__39699__delegate;
return G__39699;
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
var G__39702__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39703__i = 0, G__39703__a = new Array(arguments.length -  0);
while (G__39703__i < G__39703__a.length) {G__39703__a[G__39703__i] = arguments[G__39703__i + 0]; ++G__39703__i;}
  args = new cljs.core.IndexedSeq(G__39703__a,0,null);
} 
return G__39702__delegate.call(this,args);};
G__39702.cljs$lang$maxFixedArity = 0;
G__39702.cljs$lang$applyTo = (function (arglist__39704){
var args = cljs.core.seq(arglist__39704);
return G__39702__delegate(args);
});
G__39702.cljs$core$IFn$_invoke$arity$variadic = G__39702__delegate;
return G__39702;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39705__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39706__i = 0, G__39706__a = new Array(arguments.length -  0);
while (G__39706__i < G__39706__a.length) {G__39706__a[G__39706__i] = arguments[G__39706__i + 0]; ++G__39706__i;}
  args = new cljs.core.IndexedSeq(G__39706__a,0,null);
} 
return G__39705__delegate.call(this,args);};
G__39705.cljs$lang$maxFixedArity = 0;
G__39705.cljs$lang$applyTo = (function (arglist__39707){
var args = cljs.core.seq(arglist__39707);
return G__39705__delegate(args);
});
G__39705.cljs$core$IFn$_invoke$arity$variadic = G__39705__delegate;
return G__39705;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39708__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39709__i = 0, G__39709__a = new Array(arguments.length -  0);
while (G__39709__i < G__39709__a.length) {G__39709__a[G__39709__i] = arguments[G__39709__i + 0]; ++G__39709__i;}
  args = new cljs.core.IndexedSeq(G__39709__a,0,null);
} 
return G__39708__delegate.call(this,args);};
G__39708.cljs$lang$maxFixedArity = 0;
G__39708.cljs$lang$applyTo = (function (arglist__39710){
var args = cljs.core.seq(arglist__39710);
return G__39708__delegate(args);
});
G__39708.cljs$core$IFn$_invoke$arity$variadic = G__39708__delegate;
return G__39708;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526480932465
