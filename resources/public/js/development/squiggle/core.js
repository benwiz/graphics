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
var G__46053__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__46053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46054__i = 0, G__46054__a = new Array(arguments.length -  0);
while (G__46054__i < G__46054__a.length) {G__46054__a[G__46054__i] = arguments[G__46054__i + 0]; ++G__46054__i;}
  args = new cljs.core.IndexedSeq(G__46054__a,0,null);
} 
return G__46053__delegate.call(this,args);};
G__46053.cljs$lang$maxFixedArity = 0;
G__46053.cljs$lang$applyTo = (function (arglist__46055){
var args = cljs.core.seq(arglist__46055);
return G__46053__delegate(args);
});
G__46053.cljs$core$IFn$_invoke$arity$variadic = G__46053__delegate;
return G__46053;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__46056__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__46056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46057__i = 0, G__46057__a = new Array(arguments.length -  0);
while (G__46057__i < G__46057__a.length) {G__46057__a[G__46057__i] = arguments[G__46057__i + 0]; ++G__46057__i;}
  args = new cljs.core.IndexedSeq(G__46057__a,0,null);
} 
return G__46056__delegate.call(this,args);};
G__46056.cljs$lang$maxFixedArity = 0;
G__46056.cljs$lang$applyTo = (function (arglist__46058){
var args = cljs.core.seq(arglist__46058);
return G__46056__delegate(args);
});
G__46056.cljs$core$IFn$_invoke$arity$variadic = G__46056__delegate;
return G__46056;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__46059__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__46059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46060__i = 0, G__46060__a = new Array(arguments.length -  0);
while (G__46060__i < G__46060__a.length) {G__46060__a[G__46060__i] = arguments[G__46060__i + 0]; ++G__46060__i;}
  args = new cljs.core.IndexedSeq(G__46060__a,0,null);
} 
return G__46059__delegate.call(this,args);};
G__46059.cljs$lang$maxFixedArity = 0;
G__46059.cljs$lang$applyTo = (function (arglist__46061){
var args = cljs.core.seq(arglist__46061);
return G__46059__delegate(args);
});
G__46059.cljs$core$IFn$_invoke$arity$variadic = G__46059__delegate;
return G__46059;
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
var G__46062__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__46062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46063__i = 0, G__46063__a = new Array(arguments.length -  0);
while (G__46063__i < G__46063__a.length) {G__46063__a[G__46063__i] = arguments[G__46063__i + 0]; ++G__46063__i;}
  args = new cljs.core.IndexedSeq(G__46063__a,0,null);
} 
return G__46062__delegate.call(this,args);};
G__46062.cljs$lang$maxFixedArity = 0;
G__46062.cljs$lang$applyTo = (function (arglist__46064){
var args = cljs.core.seq(arglist__46064);
return G__46062__delegate(args);
});
G__46062.cljs$core$IFn$_invoke$arity$variadic = G__46062__delegate;
return G__46062;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__46065__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__46065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46066__i = 0, G__46066__a = new Array(arguments.length -  0);
while (G__46066__i < G__46066__a.length) {G__46066__a[G__46066__i] = arguments[G__46066__i + 0]; ++G__46066__i;}
  args = new cljs.core.IndexedSeq(G__46066__a,0,null);
} 
return G__46065__delegate.call(this,args);};
G__46065.cljs$lang$maxFixedArity = 0;
G__46065.cljs$lang$applyTo = (function (arglist__46067){
var args = cljs.core.seq(arglist__46067);
return G__46065__delegate(args);
});
G__46065.cljs$core$IFn$_invoke$arity$variadic = G__46065__delegate;
return G__46065;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__46068__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__46068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46069__i = 0, G__46069__a = new Array(arguments.length -  0);
while (G__46069__i < G__46069__a.length) {G__46069__a[G__46069__i] = arguments[G__46069__i + 0]; ++G__46069__i;}
  args = new cljs.core.IndexedSeq(G__46069__a,0,null);
} 
return G__46068__delegate.call(this,args);};
G__46068.cljs$lang$maxFixedArity = 0;
G__46068.cljs$lang$applyTo = (function (arglist__46070){
var args = cljs.core.seq(arglist__46070);
return G__46068__delegate(args);
});
G__46068.cljs$core$IFn$_invoke$arity$variadic = G__46068__delegate;
return G__46068;
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
var G__46071__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__46071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46072__i = 0, G__46072__a = new Array(arguments.length -  0);
while (G__46072__i < G__46072__a.length) {G__46072__a[G__46072__i] = arguments[G__46072__i + 0]; ++G__46072__i;}
  args = new cljs.core.IndexedSeq(G__46072__a,0,null);
} 
return G__46071__delegate.call(this,args);};
G__46071.cljs$lang$maxFixedArity = 0;
G__46071.cljs$lang$applyTo = (function (arglist__46073){
var args = cljs.core.seq(arglist__46073);
return G__46071__delegate(args);
});
G__46071.cljs$core$IFn$_invoke$arity$variadic = G__46071__delegate;
return G__46071;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__46074__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__46074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46075__i = 0, G__46075__a = new Array(arguments.length -  0);
while (G__46075__i < G__46075__a.length) {G__46075__a[G__46075__i] = arguments[G__46075__i + 0]; ++G__46075__i;}
  args = new cljs.core.IndexedSeq(G__46075__a,0,null);
} 
return G__46074__delegate.call(this,args);};
G__46074.cljs$lang$maxFixedArity = 0;
G__46074.cljs$lang$applyTo = (function (arglist__46076){
var args = cljs.core.seq(arglist__46076);
return G__46074__delegate(args);
});
G__46074.cljs$core$IFn$_invoke$arity$variadic = G__46074__delegate;
return G__46074;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__46077__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__46077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46078__i = 0, G__46078__a = new Array(arguments.length -  0);
while (G__46078__i < G__46078__a.length) {G__46078__a[G__46078__i] = arguments[G__46078__i + 0]; ++G__46078__i;}
  args = new cljs.core.IndexedSeq(G__46078__a,0,null);
} 
return G__46077__delegate.call(this,args);};
G__46077.cljs$lang$maxFixedArity = 0;
G__46077.cljs$lang$applyTo = (function (arglist__46079){
var args = cljs.core.seq(arglist__46079);
return G__46077__delegate(args);
});
G__46077.cljs$core$IFn$_invoke$arity$variadic = G__46077__delegate;
return G__46077;
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
var G__46080__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__46080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46081__i = 0, G__46081__a = new Array(arguments.length -  0);
while (G__46081__i < G__46081__a.length) {G__46081__a[G__46081__i] = arguments[G__46081__i + 0]; ++G__46081__i;}
  args = new cljs.core.IndexedSeq(G__46081__a,0,null);
} 
return G__46080__delegate.call(this,args);};
G__46080.cljs$lang$maxFixedArity = 0;
G__46080.cljs$lang$applyTo = (function (arglist__46082){
var args = cljs.core.seq(arglist__46082);
return G__46080__delegate(args);
});
G__46080.cljs$core$IFn$_invoke$arity$variadic = G__46080__delegate;
return G__46080;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__46083__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__46083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46084__i = 0, G__46084__a = new Array(arguments.length -  0);
while (G__46084__i < G__46084__a.length) {G__46084__a[G__46084__i] = arguments[G__46084__i + 0]; ++G__46084__i;}
  args = new cljs.core.IndexedSeq(G__46084__a,0,null);
} 
return G__46083__delegate.call(this,args);};
G__46083.cljs$lang$maxFixedArity = 0;
G__46083.cljs$lang$applyTo = (function (arglist__46085){
var args = cljs.core.seq(arglist__46085);
return G__46083__delegate(args);
});
G__46083.cljs$core$IFn$_invoke$arity$variadic = G__46083__delegate;
return G__46083;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__46086__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__46086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46087__i = 0, G__46087__a = new Array(arguments.length -  0);
while (G__46087__i < G__46087__a.length) {G__46087__a[G__46087__i] = arguments[G__46087__i + 0]; ++G__46087__i;}
  args = new cljs.core.IndexedSeq(G__46087__a,0,null);
} 
return G__46086__delegate.call(this,args);};
G__46086.cljs$lang$maxFixedArity = 0;
G__46086.cljs$lang$applyTo = (function (arglist__46088){
var args = cljs.core.seq(arglist__46088);
return G__46086__delegate(args);
});
G__46086.cljs$core$IFn$_invoke$arity$variadic = G__46086__delegate;
return G__46086;
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
var G__46089__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__46089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46090__i = 0, G__46090__a = new Array(arguments.length -  0);
while (G__46090__i < G__46090__a.length) {G__46090__a[G__46090__i] = arguments[G__46090__i + 0]; ++G__46090__i;}
  args = new cljs.core.IndexedSeq(G__46090__a,0,null);
} 
return G__46089__delegate.call(this,args);};
G__46089.cljs$lang$maxFixedArity = 0;
G__46089.cljs$lang$applyTo = (function (arglist__46091){
var args = cljs.core.seq(arglist__46091);
return G__46089__delegate(args);
});
G__46089.cljs$core$IFn$_invoke$arity$variadic = G__46089__delegate;
return G__46089;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__46092__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__46092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46093__i = 0, G__46093__a = new Array(arguments.length -  0);
while (G__46093__i < G__46093__a.length) {G__46093__a[G__46093__i] = arguments[G__46093__i + 0]; ++G__46093__i;}
  args = new cljs.core.IndexedSeq(G__46093__a,0,null);
} 
return G__46092__delegate.call(this,args);};
G__46092.cljs$lang$maxFixedArity = 0;
G__46092.cljs$lang$applyTo = (function (arglist__46094){
var args = cljs.core.seq(arglist__46094);
return G__46092__delegate(args);
});
G__46092.cljs$core$IFn$_invoke$arity$variadic = G__46092__delegate;
return G__46092;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__46095__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__46095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46096__i = 0, G__46096__a = new Array(arguments.length -  0);
while (G__46096__i < G__46096__a.length) {G__46096__a[G__46096__i] = arguments[G__46096__i + 0]; ++G__46096__i;}
  args = new cljs.core.IndexedSeq(G__46096__a,0,null);
} 
return G__46095__delegate.call(this,args);};
G__46095.cljs$lang$maxFixedArity = 0;
G__46095.cljs$lang$applyTo = (function (arglist__46097){
var args = cljs.core.seq(arglist__46097);
return G__46095__delegate(args);
});
G__46095.cljs$core$IFn$_invoke$arity$variadic = G__46095__delegate;
return G__46095;
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
var G__46098__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__46098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46099__i = 0, G__46099__a = new Array(arguments.length -  0);
while (G__46099__i < G__46099__a.length) {G__46099__a[G__46099__i] = arguments[G__46099__i + 0]; ++G__46099__i;}
  args = new cljs.core.IndexedSeq(G__46099__a,0,null);
} 
return G__46098__delegate.call(this,args);};
G__46098.cljs$lang$maxFixedArity = 0;
G__46098.cljs$lang$applyTo = (function (arglist__46100){
var args = cljs.core.seq(arglist__46100);
return G__46098__delegate(args);
});
G__46098.cljs$core$IFn$_invoke$arity$variadic = G__46098__delegate;
return G__46098;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__46101__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__46101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46102__i = 0, G__46102__a = new Array(arguments.length -  0);
while (G__46102__i < G__46102__a.length) {G__46102__a[G__46102__i] = arguments[G__46102__i + 0]; ++G__46102__i;}
  args = new cljs.core.IndexedSeq(G__46102__a,0,null);
} 
return G__46101__delegate.call(this,args);};
G__46101.cljs$lang$maxFixedArity = 0;
G__46101.cljs$lang$applyTo = (function (arglist__46103){
var args = cljs.core.seq(arglist__46103);
return G__46101__delegate(args);
});
G__46101.cljs$core$IFn$_invoke$arity$variadic = G__46101__delegate;
return G__46101;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__46104__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__46104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46105__i = 0, G__46105__a = new Array(arguments.length -  0);
while (G__46105__i < G__46105__a.length) {G__46105__a[G__46105__i] = arguments[G__46105__i + 0]; ++G__46105__i;}
  args = new cljs.core.IndexedSeq(G__46105__a,0,null);
} 
return G__46104__delegate.call(this,args);};
G__46104.cljs$lang$maxFixedArity = 0;
G__46104.cljs$lang$applyTo = (function (arglist__46106){
var args = cljs.core.seq(arglist__46106);
return G__46104__delegate(args);
});
G__46104.cljs$core$IFn$_invoke$arity$variadic = G__46104__delegate;
return G__46104;
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
var G__46107__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__46107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46108__i = 0, G__46108__a = new Array(arguments.length -  0);
while (G__46108__i < G__46108__a.length) {G__46108__a[G__46108__i] = arguments[G__46108__i + 0]; ++G__46108__i;}
  args = new cljs.core.IndexedSeq(G__46108__a,0,null);
} 
return G__46107__delegate.call(this,args);};
G__46107.cljs$lang$maxFixedArity = 0;
G__46107.cljs$lang$applyTo = (function (arglist__46109){
var args = cljs.core.seq(arglist__46109);
return G__46107__delegate(args);
});
G__46107.cljs$core$IFn$_invoke$arity$variadic = G__46107__delegate;
return G__46107;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__46110__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__46110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46111__i = 0, G__46111__a = new Array(arguments.length -  0);
while (G__46111__i < G__46111__a.length) {G__46111__a[G__46111__i] = arguments[G__46111__i + 0]; ++G__46111__i;}
  args = new cljs.core.IndexedSeq(G__46111__a,0,null);
} 
return G__46110__delegate.call(this,args);};
G__46110.cljs$lang$maxFixedArity = 0;
G__46110.cljs$lang$applyTo = (function (arglist__46112){
var args = cljs.core.seq(arglist__46112);
return G__46110__delegate(args);
});
G__46110.cljs$core$IFn$_invoke$arity$variadic = G__46110__delegate;
return G__46110;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__46113__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__46113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46114__i = 0, G__46114__a = new Array(arguments.length -  0);
while (G__46114__i < G__46114__a.length) {G__46114__a[G__46114__i] = arguments[G__46114__i + 0]; ++G__46114__i;}
  args = new cljs.core.IndexedSeq(G__46114__a,0,null);
} 
return G__46113__delegate.call(this,args);};
G__46113.cljs$lang$maxFixedArity = 0;
G__46113.cljs$lang$applyTo = (function (arglist__46115){
var args = cljs.core.seq(arglist__46115);
return G__46113__delegate(args);
});
G__46113.cljs$core$IFn$_invoke$arity$variadic = G__46113__delegate;
return G__46113;
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
var G__46116__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__46116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46117__i = 0, G__46117__a = new Array(arguments.length -  0);
while (G__46117__i < G__46117__a.length) {G__46117__a[G__46117__i] = arguments[G__46117__i + 0]; ++G__46117__i;}
  args = new cljs.core.IndexedSeq(G__46117__a,0,null);
} 
return G__46116__delegate.call(this,args);};
G__46116.cljs$lang$maxFixedArity = 0;
G__46116.cljs$lang$applyTo = (function (arglist__46118){
var args = cljs.core.seq(arglist__46118);
return G__46116__delegate(args);
});
G__46116.cljs$core$IFn$_invoke$arity$variadic = G__46116__delegate;
return G__46116;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__46119__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__46119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46120__i = 0, G__46120__a = new Array(arguments.length -  0);
while (G__46120__i < G__46120__a.length) {G__46120__a[G__46120__i] = arguments[G__46120__i + 0]; ++G__46120__i;}
  args = new cljs.core.IndexedSeq(G__46120__a,0,null);
} 
return G__46119__delegate.call(this,args);};
G__46119.cljs$lang$maxFixedArity = 0;
G__46119.cljs$lang$applyTo = (function (arglist__46121){
var args = cljs.core.seq(arglist__46121);
return G__46119__delegate(args);
});
G__46119.cljs$core$IFn$_invoke$arity$variadic = G__46119__delegate;
return G__46119;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__46122__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__46122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46123__i = 0, G__46123__a = new Array(arguments.length -  0);
while (G__46123__i < G__46123__a.length) {G__46123__a[G__46123__i] = arguments[G__46123__i + 0]; ++G__46123__i;}
  args = new cljs.core.IndexedSeq(G__46123__a,0,null);
} 
return G__46122__delegate.call(this,args);};
G__46122.cljs$lang$maxFixedArity = 0;
G__46122.cljs$lang$applyTo = (function (arglist__46124){
var args = cljs.core.seq(arglist__46124);
return G__46122__delegate(args);
});
G__46122.cljs$core$IFn$_invoke$arity$variadic = G__46122__delegate;
return G__46122;
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
var G__46125__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__46125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46126__i = 0, G__46126__a = new Array(arguments.length -  0);
while (G__46126__i < G__46126__a.length) {G__46126__a[G__46126__i] = arguments[G__46126__i + 0]; ++G__46126__i;}
  args = new cljs.core.IndexedSeq(G__46126__a,0,null);
} 
return G__46125__delegate.call(this,args);};
G__46125.cljs$lang$maxFixedArity = 0;
G__46125.cljs$lang$applyTo = (function (arglist__46127){
var args = cljs.core.seq(arglist__46127);
return G__46125__delegate(args);
});
G__46125.cljs$core$IFn$_invoke$arity$variadic = G__46125__delegate;
return G__46125;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__46128__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__46128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46129__i = 0, G__46129__a = new Array(arguments.length -  0);
while (G__46129__i < G__46129__a.length) {G__46129__a[G__46129__i] = arguments[G__46129__i + 0]; ++G__46129__i;}
  args = new cljs.core.IndexedSeq(G__46129__a,0,null);
} 
return G__46128__delegate.call(this,args);};
G__46128.cljs$lang$maxFixedArity = 0;
G__46128.cljs$lang$applyTo = (function (arglist__46130){
var args = cljs.core.seq(arglist__46130);
return G__46128__delegate(args);
});
G__46128.cljs$core$IFn$_invoke$arity$variadic = G__46128__delegate;
return G__46128;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__46131__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__46131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46132__i = 0, G__46132__a = new Array(arguments.length -  0);
while (G__46132__i < G__46132__a.length) {G__46132__a[G__46132__i] = arguments[G__46132__i + 0]; ++G__46132__i;}
  args = new cljs.core.IndexedSeq(G__46132__a,0,null);
} 
return G__46131__delegate.call(this,args);};
G__46131.cljs$lang$maxFixedArity = 0;
G__46131.cljs$lang$applyTo = (function (arglist__46133){
var args = cljs.core.seq(arglist__46133);
return G__46131__delegate(args);
});
G__46131.cljs$core$IFn$_invoke$arity$variadic = G__46131__delegate;
return G__46131;
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

//# sourceMappingURL=core.js.map?rel=1526522341710
