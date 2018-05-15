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
var G__43648__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43649__i = 0, G__43649__a = new Array(arguments.length -  0);
while (G__43649__i < G__43649__a.length) {G__43649__a[G__43649__i] = arguments[G__43649__i + 0]; ++G__43649__i;}
  args = new cljs.core.IndexedSeq(G__43649__a,0,null);
} 
return G__43648__delegate.call(this,args);};
G__43648.cljs$lang$maxFixedArity = 0;
G__43648.cljs$lang$applyTo = (function (arglist__43650){
var args = cljs.core.seq(arglist__43650);
return G__43648__delegate(args);
});
G__43648.cljs$core$IFn$_invoke$arity$variadic = G__43648__delegate;
return G__43648;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43651__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43652__i = 0, G__43652__a = new Array(arguments.length -  0);
while (G__43652__i < G__43652__a.length) {G__43652__a[G__43652__i] = arguments[G__43652__i + 0]; ++G__43652__i;}
  args = new cljs.core.IndexedSeq(G__43652__a,0,null);
} 
return G__43651__delegate.call(this,args);};
G__43651.cljs$lang$maxFixedArity = 0;
G__43651.cljs$lang$applyTo = (function (arglist__43653){
var args = cljs.core.seq(arglist__43653);
return G__43651__delegate(args);
});
G__43651.cljs$core$IFn$_invoke$arity$variadic = G__43651__delegate;
return G__43651;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43654__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43655__i = 0, G__43655__a = new Array(arguments.length -  0);
while (G__43655__i < G__43655__a.length) {G__43655__a[G__43655__i] = arguments[G__43655__i + 0]; ++G__43655__i;}
  args = new cljs.core.IndexedSeq(G__43655__a,0,null);
} 
return G__43654__delegate.call(this,args);};
G__43654.cljs$lang$maxFixedArity = 0;
G__43654.cljs$lang$applyTo = (function (arglist__43656){
var args = cljs.core.seq(arglist__43656);
return G__43654__delegate(args);
});
G__43654.cljs$core$IFn$_invoke$arity$variadic = G__43654__delegate;
return G__43654;
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
var G__43657__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43658__i = 0, G__43658__a = new Array(arguments.length -  0);
while (G__43658__i < G__43658__a.length) {G__43658__a[G__43658__i] = arguments[G__43658__i + 0]; ++G__43658__i;}
  args = new cljs.core.IndexedSeq(G__43658__a,0,null);
} 
return G__43657__delegate.call(this,args);};
G__43657.cljs$lang$maxFixedArity = 0;
G__43657.cljs$lang$applyTo = (function (arglist__43659){
var args = cljs.core.seq(arglist__43659);
return G__43657__delegate(args);
});
G__43657.cljs$core$IFn$_invoke$arity$variadic = G__43657__delegate;
return G__43657;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43660__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43661__i = 0, G__43661__a = new Array(arguments.length -  0);
while (G__43661__i < G__43661__a.length) {G__43661__a[G__43661__i] = arguments[G__43661__i + 0]; ++G__43661__i;}
  args = new cljs.core.IndexedSeq(G__43661__a,0,null);
} 
return G__43660__delegate.call(this,args);};
G__43660.cljs$lang$maxFixedArity = 0;
G__43660.cljs$lang$applyTo = (function (arglist__43662){
var args = cljs.core.seq(arglist__43662);
return G__43660__delegate(args);
});
G__43660.cljs$core$IFn$_invoke$arity$variadic = G__43660__delegate;
return G__43660;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43663__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43664__i = 0, G__43664__a = new Array(arguments.length -  0);
while (G__43664__i < G__43664__a.length) {G__43664__a[G__43664__i] = arguments[G__43664__i + 0]; ++G__43664__i;}
  args = new cljs.core.IndexedSeq(G__43664__a,0,null);
} 
return G__43663__delegate.call(this,args);};
G__43663.cljs$lang$maxFixedArity = 0;
G__43663.cljs$lang$applyTo = (function (arglist__43665){
var args = cljs.core.seq(arglist__43665);
return G__43663__delegate(args);
});
G__43663.cljs$core$IFn$_invoke$arity$variadic = G__43663__delegate;
return G__43663;
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
var G__43666__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43667__i = 0, G__43667__a = new Array(arguments.length -  0);
while (G__43667__i < G__43667__a.length) {G__43667__a[G__43667__i] = arguments[G__43667__i + 0]; ++G__43667__i;}
  args = new cljs.core.IndexedSeq(G__43667__a,0,null);
} 
return G__43666__delegate.call(this,args);};
G__43666.cljs$lang$maxFixedArity = 0;
G__43666.cljs$lang$applyTo = (function (arglist__43668){
var args = cljs.core.seq(arglist__43668);
return G__43666__delegate(args);
});
G__43666.cljs$core$IFn$_invoke$arity$variadic = G__43666__delegate;
return G__43666;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43669__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43670__i = 0, G__43670__a = new Array(arguments.length -  0);
while (G__43670__i < G__43670__a.length) {G__43670__a[G__43670__i] = arguments[G__43670__i + 0]; ++G__43670__i;}
  args = new cljs.core.IndexedSeq(G__43670__a,0,null);
} 
return G__43669__delegate.call(this,args);};
G__43669.cljs$lang$maxFixedArity = 0;
G__43669.cljs$lang$applyTo = (function (arglist__43671){
var args = cljs.core.seq(arglist__43671);
return G__43669__delegate(args);
});
G__43669.cljs$core$IFn$_invoke$arity$variadic = G__43669__delegate;
return G__43669;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43672__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43673__i = 0, G__43673__a = new Array(arguments.length -  0);
while (G__43673__i < G__43673__a.length) {G__43673__a[G__43673__i] = arguments[G__43673__i + 0]; ++G__43673__i;}
  args = new cljs.core.IndexedSeq(G__43673__a,0,null);
} 
return G__43672__delegate.call(this,args);};
G__43672.cljs$lang$maxFixedArity = 0;
G__43672.cljs$lang$applyTo = (function (arglist__43674){
var args = cljs.core.seq(arglist__43674);
return G__43672__delegate(args);
});
G__43672.cljs$core$IFn$_invoke$arity$variadic = G__43672__delegate;
return G__43672;
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
var G__43675__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43676__i = 0, G__43676__a = new Array(arguments.length -  0);
while (G__43676__i < G__43676__a.length) {G__43676__a[G__43676__i] = arguments[G__43676__i + 0]; ++G__43676__i;}
  args = new cljs.core.IndexedSeq(G__43676__a,0,null);
} 
return G__43675__delegate.call(this,args);};
G__43675.cljs$lang$maxFixedArity = 0;
G__43675.cljs$lang$applyTo = (function (arglist__43677){
var args = cljs.core.seq(arglist__43677);
return G__43675__delegate(args);
});
G__43675.cljs$core$IFn$_invoke$arity$variadic = G__43675__delegate;
return G__43675;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43678__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43679__i = 0, G__43679__a = new Array(arguments.length -  0);
while (G__43679__i < G__43679__a.length) {G__43679__a[G__43679__i] = arguments[G__43679__i + 0]; ++G__43679__i;}
  args = new cljs.core.IndexedSeq(G__43679__a,0,null);
} 
return G__43678__delegate.call(this,args);};
G__43678.cljs$lang$maxFixedArity = 0;
G__43678.cljs$lang$applyTo = (function (arglist__43680){
var args = cljs.core.seq(arglist__43680);
return G__43678__delegate(args);
});
G__43678.cljs$core$IFn$_invoke$arity$variadic = G__43678__delegate;
return G__43678;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43681__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43682__i = 0, G__43682__a = new Array(arguments.length -  0);
while (G__43682__i < G__43682__a.length) {G__43682__a[G__43682__i] = arguments[G__43682__i + 0]; ++G__43682__i;}
  args = new cljs.core.IndexedSeq(G__43682__a,0,null);
} 
return G__43681__delegate.call(this,args);};
G__43681.cljs$lang$maxFixedArity = 0;
G__43681.cljs$lang$applyTo = (function (arglist__43683){
var args = cljs.core.seq(arglist__43683);
return G__43681__delegate(args);
});
G__43681.cljs$core$IFn$_invoke$arity$variadic = G__43681__delegate;
return G__43681;
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
var G__43684__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43685__i = 0, G__43685__a = new Array(arguments.length -  0);
while (G__43685__i < G__43685__a.length) {G__43685__a[G__43685__i] = arguments[G__43685__i + 0]; ++G__43685__i;}
  args = new cljs.core.IndexedSeq(G__43685__a,0,null);
} 
return G__43684__delegate.call(this,args);};
G__43684.cljs$lang$maxFixedArity = 0;
G__43684.cljs$lang$applyTo = (function (arglist__43686){
var args = cljs.core.seq(arglist__43686);
return G__43684__delegate(args);
});
G__43684.cljs$core$IFn$_invoke$arity$variadic = G__43684__delegate;
return G__43684;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__43687__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__43687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43688__i = 0, G__43688__a = new Array(arguments.length -  0);
while (G__43688__i < G__43688__a.length) {G__43688__a[G__43688__i] = arguments[G__43688__i + 0]; ++G__43688__i;}
  args = new cljs.core.IndexedSeq(G__43688__a,0,null);
} 
return G__43687__delegate.call(this,args);};
G__43687.cljs$lang$maxFixedArity = 0;
G__43687.cljs$lang$applyTo = (function (arglist__43689){
var args = cljs.core.seq(arglist__43689);
return G__43687__delegate(args);
});
G__43687.cljs$core$IFn$_invoke$arity$variadic = G__43687__delegate;
return G__43687;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43690__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43691__i = 0, G__43691__a = new Array(arguments.length -  0);
while (G__43691__i < G__43691__a.length) {G__43691__a[G__43691__i] = arguments[G__43691__i + 0]; ++G__43691__i;}
  args = new cljs.core.IndexedSeq(G__43691__a,0,null);
} 
return G__43690__delegate.call(this,args);};
G__43690.cljs$lang$maxFixedArity = 0;
G__43690.cljs$lang$applyTo = (function (arglist__43692){
var args = cljs.core.seq(arglist__43692);
return G__43690__delegate(args);
});
G__43690.cljs$core$IFn$_invoke$arity$variadic = G__43690__delegate;
return G__43690;
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
var G__43693__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43694__i = 0, G__43694__a = new Array(arguments.length -  0);
while (G__43694__i < G__43694__a.length) {G__43694__a[G__43694__i] = arguments[G__43694__i + 0]; ++G__43694__i;}
  args = new cljs.core.IndexedSeq(G__43694__a,0,null);
} 
return G__43693__delegate.call(this,args);};
G__43693.cljs$lang$maxFixedArity = 0;
G__43693.cljs$lang$applyTo = (function (arglist__43695){
var args = cljs.core.seq(arglist__43695);
return G__43693__delegate(args);
});
G__43693.cljs$core$IFn$_invoke$arity$variadic = G__43693__delegate;
return G__43693;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__43696__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__43696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43697__i = 0, G__43697__a = new Array(arguments.length -  0);
while (G__43697__i < G__43697__a.length) {G__43697__a[G__43697__i] = arguments[G__43697__i + 0]; ++G__43697__i;}
  args = new cljs.core.IndexedSeq(G__43697__a,0,null);
} 
return G__43696__delegate.call(this,args);};
G__43696.cljs$lang$maxFixedArity = 0;
G__43696.cljs$lang$applyTo = (function (arglist__43698){
var args = cljs.core.seq(arglist__43698);
return G__43696__delegate(args);
});
G__43696.cljs$core$IFn$_invoke$arity$variadic = G__43696__delegate;
return G__43696;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43699__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43700__i = 0, G__43700__a = new Array(arguments.length -  0);
while (G__43700__i < G__43700__a.length) {G__43700__a[G__43700__i] = arguments[G__43700__i + 0]; ++G__43700__i;}
  args = new cljs.core.IndexedSeq(G__43700__a,0,null);
} 
return G__43699__delegate.call(this,args);};
G__43699.cljs$lang$maxFixedArity = 0;
G__43699.cljs$lang$applyTo = (function (arglist__43701){
var args = cljs.core.seq(arglist__43701);
return G__43699__delegate(args);
});
G__43699.cljs$core$IFn$_invoke$arity$variadic = G__43699__delegate;
return G__43699;
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
var G__43702__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43703__i = 0, G__43703__a = new Array(arguments.length -  0);
while (G__43703__i < G__43703__a.length) {G__43703__a[G__43703__i] = arguments[G__43703__i + 0]; ++G__43703__i;}
  args = new cljs.core.IndexedSeq(G__43703__a,0,null);
} 
return G__43702__delegate.call(this,args);};
G__43702.cljs$lang$maxFixedArity = 0;
G__43702.cljs$lang$applyTo = (function (arglist__43704){
var args = cljs.core.seq(arglist__43704);
return G__43702__delegate(args);
});
G__43702.cljs$core$IFn$_invoke$arity$variadic = G__43702__delegate;
return G__43702;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__43705__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__43705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43706__i = 0, G__43706__a = new Array(arguments.length -  0);
while (G__43706__i < G__43706__a.length) {G__43706__a[G__43706__i] = arguments[G__43706__i + 0]; ++G__43706__i;}
  args = new cljs.core.IndexedSeq(G__43706__a,0,null);
} 
return G__43705__delegate.call(this,args);};
G__43705.cljs$lang$maxFixedArity = 0;
G__43705.cljs$lang$applyTo = (function (arglist__43707){
var args = cljs.core.seq(arglist__43707);
return G__43705__delegate(args);
});
G__43705.cljs$core$IFn$_invoke$arity$variadic = G__43705__delegate;
return G__43705;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43708__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43709__i = 0, G__43709__a = new Array(arguments.length -  0);
while (G__43709__i < G__43709__a.length) {G__43709__a[G__43709__i] = arguments[G__43709__i + 0]; ++G__43709__i;}
  args = new cljs.core.IndexedSeq(G__43709__a,0,null);
} 
return G__43708__delegate.call(this,args);};
G__43708.cljs$lang$maxFixedArity = 0;
G__43708.cljs$lang$applyTo = (function (arglist__43710){
var args = cljs.core.seq(arglist__43710);
return G__43708__delegate(args);
});
G__43708.cljs$core$IFn$_invoke$arity$variadic = G__43708__delegate;
return G__43708;
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
var G__43711__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43712__i = 0, G__43712__a = new Array(arguments.length -  0);
while (G__43712__i < G__43712__a.length) {G__43712__a[G__43712__i] = arguments[G__43712__i + 0]; ++G__43712__i;}
  args = new cljs.core.IndexedSeq(G__43712__a,0,null);
} 
return G__43711__delegate.call(this,args);};
G__43711.cljs$lang$maxFixedArity = 0;
G__43711.cljs$lang$applyTo = (function (arglist__43713){
var args = cljs.core.seq(arglist__43713);
return G__43711__delegate(args);
});
G__43711.cljs$core$IFn$_invoke$arity$variadic = G__43711__delegate;
return G__43711;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__43714__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__43714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43715__i = 0, G__43715__a = new Array(arguments.length -  0);
while (G__43715__i < G__43715__a.length) {G__43715__a[G__43715__i] = arguments[G__43715__i + 0]; ++G__43715__i;}
  args = new cljs.core.IndexedSeq(G__43715__a,0,null);
} 
return G__43714__delegate.call(this,args);};
G__43714.cljs$lang$maxFixedArity = 0;
G__43714.cljs$lang$applyTo = (function (arglist__43716){
var args = cljs.core.seq(arglist__43716);
return G__43714__delegate(args);
});
G__43714.cljs$core$IFn$_invoke$arity$variadic = G__43714__delegate;
return G__43714;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43717__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43718__i = 0, G__43718__a = new Array(arguments.length -  0);
while (G__43718__i < G__43718__a.length) {G__43718__a[G__43718__i] = arguments[G__43718__i + 0]; ++G__43718__i;}
  args = new cljs.core.IndexedSeq(G__43718__a,0,null);
} 
return G__43717__delegate.call(this,args);};
G__43717.cljs$lang$maxFixedArity = 0;
G__43717.cljs$lang$applyTo = (function (arglist__43719){
var args = cljs.core.seq(arglist__43719);
return G__43717__delegate(args);
});
G__43717.cljs$core$IFn$_invoke$arity$variadic = G__43717__delegate;
return G__43717;
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

//# sourceMappingURL=core.js.map?rel=1526412617472
