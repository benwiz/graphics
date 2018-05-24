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
var G__39711__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39712__i = 0, G__39712__a = new Array(arguments.length -  0);
while (G__39712__i < G__39712__a.length) {G__39712__a[G__39712__i] = arguments[G__39712__i + 0]; ++G__39712__i;}
  args = new cljs.core.IndexedSeq(G__39712__a,0,null);
} 
return G__39711__delegate.call(this,args);};
G__39711.cljs$lang$maxFixedArity = 0;
G__39711.cljs$lang$applyTo = (function (arglist__39713){
var args = cljs.core.seq(arglist__39713);
return G__39711__delegate(args);
});
G__39711.cljs$core$IFn$_invoke$arity$variadic = G__39711__delegate;
return G__39711;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39714__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39715__i = 0, G__39715__a = new Array(arguments.length -  0);
while (G__39715__i < G__39715__a.length) {G__39715__a[G__39715__i] = arguments[G__39715__i + 0]; ++G__39715__i;}
  args = new cljs.core.IndexedSeq(G__39715__a,0,null);
} 
return G__39714__delegate.call(this,args);};
G__39714.cljs$lang$maxFixedArity = 0;
G__39714.cljs$lang$applyTo = (function (arglist__39716){
var args = cljs.core.seq(arglist__39716);
return G__39714__delegate(args);
});
G__39714.cljs$core$IFn$_invoke$arity$variadic = G__39714__delegate;
return G__39714;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39717__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39718__i = 0, G__39718__a = new Array(arguments.length -  0);
while (G__39718__i < G__39718__a.length) {G__39718__a[G__39718__i] = arguments[G__39718__i + 0]; ++G__39718__i;}
  args = new cljs.core.IndexedSeq(G__39718__a,0,null);
} 
return G__39717__delegate.call(this,args);};
G__39717.cljs$lang$maxFixedArity = 0;
G__39717.cljs$lang$applyTo = (function (arglist__39719){
var args = cljs.core.seq(arglist__39719);
return G__39717__delegate(args);
});
G__39717.cljs$core$IFn$_invoke$arity$variadic = G__39717__delegate;
return G__39717;
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
var G__39720__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39721__i = 0, G__39721__a = new Array(arguments.length -  0);
while (G__39721__i < G__39721__a.length) {G__39721__a[G__39721__i] = arguments[G__39721__i + 0]; ++G__39721__i;}
  args = new cljs.core.IndexedSeq(G__39721__a,0,null);
} 
return G__39720__delegate.call(this,args);};
G__39720.cljs$lang$maxFixedArity = 0;
G__39720.cljs$lang$applyTo = (function (arglist__39722){
var args = cljs.core.seq(arglist__39722);
return G__39720__delegate(args);
});
G__39720.cljs$core$IFn$_invoke$arity$variadic = G__39720__delegate;
return G__39720;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39723__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39724__i = 0, G__39724__a = new Array(arguments.length -  0);
while (G__39724__i < G__39724__a.length) {G__39724__a[G__39724__i] = arguments[G__39724__i + 0]; ++G__39724__i;}
  args = new cljs.core.IndexedSeq(G__39724__a,0,null);
} 
return G__39723__delegate.call(this,args);};
G__39723.cljs$lang$maxFixedArity = 0;
G__39723.cljs$lang$applyTo = (function (arglist__39725){
var args = cljs.core.seq(arglist__39725);
return G__39723__delegate(args);
});
G__39723.cljs$core$IFn$_invoke$arity$variadic = G__39723__delegate;
return G__39723;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39726__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39727__i = 0, G__39727__a = new Array(arguments.length -  0);
while (G__39727__i < G__39727__a.length) {G__39727__a[G__39727__i] = arguments[G__39727__i + 0]; ++G__39727__i;}
  args = new cljs.core.IndexedSeq(G__39727__a,0,null);
} 
return G__39726__delegate.call(this,args);};
G__39726.cljs$lang$maxFixedArity = 0;
G__39726.cljs$lang$applyTo = (function (arglist__39728){
var args = cljs.core.seq(arglist__39728);
return G__39726__delegate(args);
});
G__39726.cljs$core$IFn$_invoke$arity$variadic = G__39726__delegate;
return G__39726;
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
var G__39729__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39730__i = 0, G__39730__a = new Array(arguments.length -  0);
while (G__39730__i < G__39730__a.length) {G__39730__a[G__39730__i] = arguments[G__39730__i + 0]; ++G__39730__i;}
  args = new cljs.core.IndexedSeq(G__39730__a,0,null);
} 
return G__39729__delegate.call(this,args);};
G__39729.cljs$lang$maxFixedArity = 0;
G__39729.cljs$lang$applyTo = (function (arglist__39731){
var args = cljs.core.seq(arglist__39731);
return G__39729__delegate(args);
});
G__39729.cljs$core$IFn$_invoke$arity$variadic = G__39729__delegate;
return G__39729;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39732__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39733__i = 0, G__39733__a = new Array(arguments.length -  0);
while (G__39733__i < G__39733__a.length) {G__39733__a[G__39733__i] = arguments[G__39733__i + 0]; ++G__39733__i;}
  args = new cljs.core.IndexedSeq(G__39733__a,0,null);
} 
return G__39732__delegate.call(this,args);};
G__39732.cljs$lang$maxFixedArity = 0;
G__39732.cljs$lang$applyTo = (function (arglist__39734){
var args = cljs.core.seq(arglist__39734);
return G__39732__delegate(args);
});
G__39732.cljs$core$IFn$_invoke$arity$variadic = G__39732__delegate;
return G__39732;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39735__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39736__i = 0, G__39736__a = new Array(arguments.length -  0);
while (G__39736__i < G__39736__a.length) {G__39736__a[G__39736__i] = arguments[G__39736__i + 0]; ++G__39736__i;}
  args = new cljs.core.IndexedSeq(G__39736__a,0,null);
} 
return G__39735__delegate.call(this,args);};
G__39735.cljs$lang$maxFixedArity = 0;
G__39735.cljs$lang$applyTo = (function (arglist__39737){
var args = cljs.core.seq(arglist__39737);
return G__39735__delegate(args);
});
G__39735.cljs$core$IFn$_invoke$arity$variadic = G__39735__delegate;
return G__39735;
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
var G__39738__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39739__i = 0, G__39739__a = new Array(arguments.length -  0);
while (G__39739__i < G__39739__a.length) {G__39739__a[G__39739__i] = arguments[G__39739__i + 0]; ++G__39739__i;}
  args = new cljs.core.IndexedSeq(G__39739__a,0,null);
} 
return G__39738__delegate.call(this,args);};
G__39738.cljs$lang$maxFixedArity = 0;
G__39738.cljs$lang$applyTo = (function (arglist__39740){
var args = cljs.core.seq(arglist__39740);
return G__39738__delegate(args);
});
G__39738.cljs$core$IFn$_invoke$arity$variadic = G__39738__delegate;
return G__39738;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39741__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39742__i = 0, G__39742__a = new Array(arguments.length -  0);
while (G__39742__i < G__39742__a.length) {G__39742__a[G__39742__i] = arguments[G__39742__i + 0]; ++G__39742__i;}
  args = new cljs.core.IndexedSeq(G__39742__a,0,null);
} 
return G__39741__delegate.call(this,args);};
G__39741.cljs$lang$maxFixedArity = 0;
G__39741.cljs$lang$applyTo = (function (arglist__39743){
var args = cljs.core.seq(arglist__39743);
return G__39741__delegate(args);
});
G__39741.cljs$core$IFn$_invoke$arity$variadic = G__39741__delegate;
return G__39741;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39744__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39745__i = 0, G__39745__a = new Array(arguments.length -  0);
while (G__39745__i < G__39745__a.length) {G__39745__a[G__39745__i] = arguments[G__39745__i + 0]; ++G__39745__i;}
  args = new cljs.core.IndexedSeq(G__39745__a,0,null);
} 
return G__39744__delegate.call(this,args);};
G__39744.cljs$lang$maxFixedArity = 0;
G__39744.cljs$lang$applyTo = (function (arglist__39746){
var args = cljs.core.seq(arglist__39746);
return G__39744__delegate(args);
});
G__39744.cljs$core$IFn$_invoke$arity$variadic = G__39744__delegate;
return G__39744;
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
var G__39747__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39748__i = 0, G__39748__a = new Array(arguments.length -  0);
while (G__39748__i < G__39748__a.length) {G__39748__a[G__39748__i] = arguments[G__39748__i + 0]; ++G__39748__i;}
  args = new cljs.core.IndexedSeq(G__39748__a,0,null);
} 
return G__39747__delegate.call(this,args);};
G__39747.cljs$lang$maxFixedArity = 0;
G__39747.cljs$lang$applyTo = (function (arglist__39749){
var args = cljs.core.seq(arglist__39749);
return G__39747__delegate(args);
});
G__39747.cljs$core$IFn$_invoke$arity$variadic = G__39747__delegate;
return G__39747;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39750__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39751__i = 0, G__39751__a = new Array(arguments.length -  0);
while (G__39751__i < G__39751__a.length) {G__39751__a[G__39751__i] = arguments[G__39751__i + 0]; ++G__39751__i;}
  args = new cljs.core.IndexedSeq(G__39751__a,0,null);
} 
return G__39750__delegate.call(this,args);};
G__39750.cljs$lang$maxFixedArity = 0;
G__39750.cljs$lang$applyTo = (function (arglist__39752){
var args = cljs.core.seq(arglist__39752);
return G__39750__delegate(args);
});
G__39750.cljs$core$IFn$_invoke$arity$variadic = G__39750__delegate;
return G__39750;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39753__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39754__i = 0, G__39754__a = new Array(arguments.length -  0);
while (G__39754__i < G__39754__a.length) {G__39754__a[G__39754__i] = arguments[G__39754__i + 0]; ++G__39754__i;}
  args = new cljs.core.IndexedSeq(G__39754__a,0,null);
} 
return G__39753__delegate.call(this,args);};
G__39753.cljs$lang$maxFixedArity = 0;
G__39753.cljs$lang$applyTo = (function (arglist__39755){
var args = cljs.core.seq(arglist__39755);
return G__39753__delegate(args);
});
G__39753.cljs$core$IFn$_invoke$arity$variadic = G__39753__delegate;
return G__39753;
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
var G__39756__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39757__i = 0, G__39757__a = new Array(arguments.length -  0);
while (G__39757__i < G__39757__a.length) {G__39757__a[G__39757__i] = arguments[G__39757__i + 0]; ++G__39757__i;}
  args = new cljs.core.IndexedSeq(G__39757__a,0,null);
} 
return G__39756__delegate.call(this,args);};
G__39756.cljs$lang$maxFixedArity = 0;
G__39756.cljs$lang$applyTo = (function (arglist__39758){
var args = cljs.core.seq(arglist__39758);
return G__39756__delegate(args);
});
G__39756.cljs$core$IFn$_invoke$arity$variadic = G__39756__delegate;
return G__39756;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39759__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39760__i = 0, G__39760__a = new Array(arguments.length -  0);
while (G__39760__i < G__39760__a.length) {G__39760__a[G__39760__i] = arguments[G__39760__i + 0]; ++G__39760__i;}
  args = new cljs.core.IndexedSeq(G__39760__a,0,null);
} 
return G__39759__delegate.call(this,args);};
G__39759.cljs$lang$maxFixedArity = 0;
G__39759.cljs$lang$applyTo = (function (arglist__39761){
var args = cljs.core.seq(arglist__39761);
return G__39759__delegate(args);
});
G__39759.cljs$core$IFn$_invoke$arity$variadic = G__39759__delegate;
return G__39759;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39762__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39763__i = 0, G__39763__a = new Array(arguments.length -  0);
while (G__39763__i < G__39763__a.length) {G__39763__a[G__39763__i] = arguments[G__39763__i + 0]; ++G__39763__i;}
  args = new cljs.core.IndexedSeq(G__39763__a,0,null);
} 
return G__39762__delegate.call(this,args);};
G__39762.cljs$lang$maxFixedArity = 0;
G__39762.cljs$lang$applyTo = (function (arglist__39764){
var args = cljs.core.seq(arglist__39764);
return G__39762__delegate(args);
});
G__39762.cljs$core$IFn$_invoke$arity$variadic = G__39762__delegate;
return G__39762;
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
var G__39765__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39766__i = 0, G__39766__a = new Array(arguments.length -  0);
while (G__39766__i < G__39766__a.length) {G__39766__a[G__39766__i] = arguments[G__39766__i + 0]; ++G__39766__i;}
  args = new cljs.core.IndexedSeq(G__39766__a,0,null);
} 
return G__39765__delegate.call(this,args);};
G__39765.cljs$lang$maxFixedArity = 0;
G__39765.cljs$lang$applyTo = (function (arglist__39767){
var args = cljs.core.seq(arglist__39767);
return G__39765__delegate(args);
});
G__39765.cljs$core$IFn$_invoke$arity$variadic = G__39765__delegate;
return G__39765;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39768__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39769__i = 0, G__39769__a = new Array(arguments.length -  0);
while (G__39769__i < G__39769__a.length) {G__39769__a[G__39769__i] = arguments[G__39769__i + 0]; ++G__39769__i;}
  args = new cljs.core.IndexedSeq(G__39769__a,0,null);
} 
return G__39768__delegate.call(this,args);};
G__39768.cljs$lang$maxFixedArity = 0;
G__39768.cljs$lang$applyTo = (function (arglist__39770){
var args = cljs.core.seq(arglist__39770);
return G__39768__delegate(args);
});
G__39768.cljs$core$IFn$_invoke$arity$variadic = G__39768__delegate;
return G__39768;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39771__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39772__i = 0, G__39772__a = new Array(arguments.length -  0);
while (G__39772__i < G__39772__a.length) {G__39772__a[G__39772__i] = arguments[G__39772__i + 0]; ++G__39772__i;}
  args = new cljs.core.IndexedSeq(G__39772__a,0,null);
} 
return G__39771__delegate.call(this,args);};
G__39771.cljs$lang$maxFixedArity = 0;
G__39771.cljs$lang$applyTo = (function (arglist__39773){
var args = cljs.core.seq(arglist__39773);
return G__39771__delegate(args);
});
G__39771.cljs$core$IFn$_invoke$arity$variadic = G__39771__delegate;
return G__39771;
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
var G__39774__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39775__i = 0, G__39775__a = new Array(arguments.length -  0);
while (G__39775__i < G__39775__a.length) {G__39775__a[G__39775__i] = arguments[G__39775__i + 0]; ++G__39775__i;}
  args = new cljs.core.IndexedSeq(G__39775__a,0,null);
} 
return G__39774__delegate.call(this,args);};
G__39774.cljs$lang$maxFixedArity = 0;
G__39774.cljs$lang$applyTo = (function (arglist__39776){
var args = cljs.core.seq(arglist__39776);
return G__39774__delegate(args);
});
G__39774.cljs$core$IFn$_invoke$arity$variadic = G__39774__delegate;
return G__39774;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39777__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39778__i = 0, G__39778__a = new Array(arguments.length -  0);
while (G__39778__i < G__39778__a.length) {G__39778__a[G__39778__i] = arguments[G__39778__i + 0]; ++G__39778__i;}
  args = new cljs.core.IndexedSeq(G__39778__a,0,null);
} 
return G__39777__delegate.call(this,args);};
G__39777.cljs$lang$maxFixedArity = 0;
G__39777.cljs$lang$applyTo = (function (arglist__39779){
var args = cljs.core.seq(arglist__39779);
return G__39777__delegate(args);
});
G__39777.cljs$core$IFn$_invoke$arity$variadic = G__39777__delegate;
return G__39777;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39780__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39781__i = 0, G__39781__a = new Array(arguments.length -  0);
while (G__39781__i < G__39781__a.length) {G__39781__a[G__39781__i] = arguments[G__39781__i + 0]; ++G__39781__i;}
  args = new cljs.core.IndexedSeq(G__39781__a,0,null);
} 
return G__39780__delegate.call(this,args);};
G__39780.cljs$lang$maxFixedArity = 0;
G__39780.cljs$lang$applyTo = (function (arglist__39782){
var args = cljs.core.seq(arglist__39782);
return G__39780__delegate(args);
});
G__39780.cljs$core$IFn$_invoke$arity$variadic = G__39780__delegate;
return G__39780;
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
var G__39783__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__39783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39784__i = 0, G__39784__a = new Array(arguments.length -  0);
while (G__39784__i < G__39784__a.length) {G__39784__a[G__39784__i] = arguments[G__39784__i + 0]; ++G__39784__i;}
  args = new cljs.core.IndexedSeq(G__39784__a,0,null);
} 
return G__39783__delegate.call(this,args);};
G__39783.cljs$lang$maxFixedArity = 0;
G__39783.cljs$lang$applyTo = (function (arglist__39785){
var args = cljs.core.seq(arglist__39785);
return G__39783__delegate(args);
});
G__39783.cljs$core$IFn$_invoke$arity$variadic = G__39783__delegate;
return G__39783;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__39786__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__39786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39787__i = 0, G__39787__a = new Array(arguments.length -  0);
while (G__39787__i < G__39787__a.length) {G__39787__a[G__39787__i] = arguments[G__39787__i + 0]; ++G__39787__i;}
  args = new cljs.core.IndexedSeq(G__39787__a,0,null);
} 
return G__39786__delegate.call(this,args);};
G__39786.cljs$lang$maxFixedArity = 0;
G__39786.cljs$lang$applyTo = (function (arglist__39788){
var args = cljs.core.seq(arglist__39788);
return G__39786__delegate(args);
});
G__39786.cljs$core$IFn$_invoke$arity$variadic = G__39786__delegate;
return G__39786;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__39789__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__39789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39790__i = 0, G__39790__a = new Array(arguments.length -  0);
while (G__39790__i < G__39790__a.length) {G__39790__a[G__39790__i] = arguments[G__39790__i + 0]; ++G__39790__i;}
  args = new cljs.core.IndexedSeq(G__39790__a,0,null);
} 
return G__39789__delegate.call(this,args);};
G__39789.cljs$lang$maxFixedArity = 0;
G__39789.cljs$lang$applyTo = (function (arglist__39791){
var args = cljs.core.seq(arglist__39791);
return G__39789__delegate(args);
});
G__39789.cljs$core$IFn$_invoke$arity$variadic = G__39789__delegate;
return G__39789;
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

//# sourceMappingURL=core.js.map?rel=1527203207569
