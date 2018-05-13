// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__43083__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43084__i = 0, G__43084__a = new Array(arguments.length -  0);
while (G__43084__i < G__43084__a.length) {G__43084__a[G__43084__i] = arguments[G__43084__i + 0]; ++G__43084__i;}
  args = new cljs.core.IndexedSeq(G__43084__a,0,null);
} 
return G__43083__delegate.call(this,args);};
G__43083.cljs$lang$maxFixedArity = 0;
G__43083.cljs$lang$applyTo = (function (arglist__43085){
var args = cljs.core.seq(arglist__43085);
return G__43083__delegate(args);
});
G__43083.cljs$core$IFn$_invoke$arity$variadic = G__43083__delegate;
return G__43083;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43086__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43087__i = 0, G__43087__a = new Array(arguments.length -  0);
while (G__43087__i < G__43087__a.length) {G__43087__a[G__43087__i] = arguments[G__43087__i + 0]; ++G__43087__i;}
  args = new cljs.core.IndexedSeq(G__43087__a,0,null);
} 
return G__43086__delegate.call(this,args);};
G__43086.cljs$lang$maxFixedArity = 0;
G__43086.cljs$lang$applyTo = (function (arglist__43088){
var args = cljs.core.seq(arglist__43088);
return G__43086__delegate(args);
});
G__43086.cljs$core$IFn$_invoke$arity$variadic = G__43086__delegate;
return G__43086;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43089__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43090__i = 0, G__43090__a = new Array(arguments.length -  0);
while (G__43090__i < G__43090__a.length) {G__43090__a[G__43090__i] = arguments[G__43090__i + 0]; ++G__43090__i;}
  args = new cljs.core.IndexedSeq(G__43090__a,0,null);
} 
return G__43089__delegate.call(this,args);};
G__43089.cljs$lang$maxFixedArity = 0;
G__43089.cljs$lang$applyTo = (function (arglist__43091){
var args = cljs.core.seq(arglist__43091);
return G__43089__delegate(args);
});
G__43089.cljs$core$IFn$_invoke$arity$variadic = G__43089__delegate;
return G__43089;
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
var G__43092__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43093__i = 0, G__43093__a = new Array(arguments.length -  0);
while (G__43093__i < G__43093__a.length) {G__43093__a[G__43093__i] = arguments[G__43093__i + 0]; ++G__43093__i;}
  args = new cljs.core.IndexedSeq(G__43093__a,0,null);
} 
return G__43092__delegate.call(this,args);};
G__43092.cljs$lang$maxFixedArity = 0;
G__43092.cljs$lang$applyTo = (function (arglist__43094){
var args = cljs.core.seq(arglist__43094);
return G__43092__delegate(args);
});
G__43092.cljs$core$IFn$_invoke$arity$variadic = G__43092__delegate;
return G__43092;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43095__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43096__i = 0, G__43096__a = new Array(arguments.length -  0);
while (G__43096__i < G__43096__a.length) {G__43096__a[G__43096__i] = arguments[G__43096__i + 0]; ++G__43096__i;}
  args = new cljs.core.IndexedSeq(G__43096__a,0,null);
} 
return G__43095__delegate.call(this,args);};
G__43095.cljs$lang$maxFixedArity = 0;
G__43095.cljs$lang$applyTo = (function (arglist__43097){
var args = cljs.core.seq(arglist__43097);
return G__43095__delegate(args);
});
G__43095.cljs$core$IFn$_invoke$arity$variadic = G__43095__delegate;
return G__43095;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43098__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43099__i = 0, G__43099__a = new Array(arguments.length -  0);
while (G__43099__i < G__43099__a.length) {G__43099__a[G__43099__i] = arguments[G__43099__i + 0]; ++G__43099__i;}
  args = new cljs.core.IndexedSeq(G__43099__a,0,null);
} 
return G__43098__delegate.call(this,args);};
G__43098.cljs$lang$maxFixedArity = 0;
G__43098.cljs$lang$applyTo = (function (arglist__43100){
var args = cljs.core.seq(arglist__43100);
return G__43098__delegate(args);
});
G__43098.cljs$core$IFn$_invoke$arity$variadic = G__43098__delegate;
return G__43098;
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
var G__43101__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43102__i = 0, G__43102__a = new Array(arguments.length -  0);
while (G__43102__i < G__43102__a.length) {G__43102__a[G__43102__i] = arguments[G__43102__i + 0]; ++G__43102__i;}
  args = new cljs.core.IndexedSeq(G__43102__a,0,null);
} 
return G__43101__delegate.call(this,args);};
G__43101.cljs$lang$maxFixedArity = 0;
G__43101.cljs$lang$applyTo = (function (arglist__43103){
var args = cljs.core.seq(arglist__43103);
return G__43101__delegate(args);
});
G__43101.cljs$core$IFn$_invoke$arity$variadic = G__43101__delegate;
return G__43101;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43104__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43105__i = 0, G__43105__a = new Array(arguments.length -  0);
while (G__43105__i < G__43105__a.length) {G__43105__a[G__43105__i] = arguments[G__43105__i + 0]; ++G__43105__i;}
  args = new cljs.core.IndexedSeq(G__43105__a,0,null);
} 
return G__43104__delegate.call(this,args);};
G__43104.cljs$lang$maxFixedArity = 0;
G__43104.cljs$lang$applyTo = (function (arglist__43106){
var args = cljs.core.seq(arglist__43106);
return G__43104__delegate(args);
});
G__43104.cljs$core$IFn$_invoke$arity$variadic = G__43104__delegate;
return G__43104;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43107__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43108__i = 0, G__43108__a = new Array(arguments.length -  0);
while (G__43108__i < G__43108__a.length) {G__43108__a[G__43108__i] = arguments[G__43108__i + 0]; ++G__43108__i;}
  args = new cljs.core.IndexedSeq(G__43108__a,0,null);
} 
return G__43107__delegate.call(this,args);};
G__43107.cljs$lang$maxFixedArity = 0;
G__43107.cljs$lang$applyTo = (function (arglist__43109){
var args = cljs.core.seq(arglist__43109);
return G__43107__delegate(args);
});
G__43107.cljs$core$IFn$_invoke$arity$variadic = G__43107__delegate;
return G__43107;
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
var G__43110__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43111__i = 0, G__43111__a = new Array(arguments.length -  0);
while (G__43111__i < G__43111__a.length) {G__43111__a[G__43111__i] = arguments[G__43111__i + 0]; ++G__43111__i;}
  args = new cljs.core.IndexedSeq(G__43111__a,0,null);
} 
return G__43110__delegate.call(this,args);};
G__43110.cljs$lang$maxFixedArity = 0;
G__43110.cljs$lang$applyTo = (function (arglist__43112){
var args = cljs.core.seq(arglist__43112);
return G__43110__delegate(args);
});
G__43110.cljs$core$IFn$_invoke$arity$variadic = G__43110__delegate;
return G__43110;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43113__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43114__i = 0, G__43114__a = new Array(arguments.length -  0);
while (G__43114__i < G__43114__a.length) {G__43114__a[G__43114__i] = arguments[G__43114__i + 0]; ++G__43114__i;}
  args = new cljs.core.IndexedSeq(G__43114__a,0,null);
} 
return G__43113__delegate.call(this,args);};
G__43113.cljs$lang$maxFixedArity = 0;
G__43113.cljs$lang$applyTo = (function (arglist__43115){
var args = cljs.core.seq(arglist__43115);
return G__43113__delegate(args);
});
G__43113.cljs$core$IFn$_invoke$arity$variadic = G__43113__delegate;
return G__43113;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43116__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43117__i = 0, G__43117__a = new Array(arguments.length -  0);
while (G__43117__i < G__43117__a.length) {G__43117__a[G__43117__i] = arguments[G__43117__i + 0]; ++G__43117__i;}
  args = new cljs.core.IndexedSeq(G__43117__a,0,null);
} 
return G__43116__delegate.call(this,args);};
G__43116.cljs$lang$maxFixedArity = 0;
G__43116.cljs$lang$applyTo = (function (arglist__43118){
var args = cljs.core.seq(arglist__43118);
return G__43116__delegate(args);
});
G__43116.cljs$core$IFn$_invoke$arity$variadic = G__43116__delegate;
return G__43116;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526254718206
