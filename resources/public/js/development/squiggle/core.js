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
var G__52350__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__52350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52351__i = 0, G__52351__a = new Array(arguments.length -  0);
while (G__52351__i < G__52351__a.length) {G__52351__a[G__52351__i] = arguments[G__52351__i + 0]; ++G__52351__i;}
  args = new cljs.core.IndexedSeq(G__52351__a,0,null);
} 
return G__52350__delegate.call(this,args);};
G__52350.cljs$lang$maxFixedArity = 0;
G__52350.cljs$lang$applyTo = (function (arglist__52352){
var args = cljs.core.seq(arglist__52352);
return G__52350__delegate(args);
});
G__52350.cljs$core$IFn$_invoke$arity$variadic = G__52350__delegate;
return G__52350;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__52353__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__52353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52354__i = 0, G__52354__a = new Array(arguments.length -  0);
while (G__52354__i < G__52354__a.length) {G__52354__a[G__52354__i] = arguments[G__52354__i + 0]; ++G__52354__i;}
  args = new cljs.core.IndexedSeq(G__52354__a,0,null);
} 
return G__52353__delegate.call(this,args);};
G__52353.cljs$lang$maxFixedArity = 0;
G__52353.cljs$lang$applyTo = (function (arglist__52355){
var args = cljs.core.seq(arglist__52355);
return G__52353__delegate(args);
});
G__52353.cljs$core$IFn$_invoke$arity$variadic = G__52353__delegate;
return G__52353;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__52356__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__52356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52357__i = 0, G__52357__a = new Array(arguments.length -  0);
while (G__52357__i < G__52357__a.length) {G__52357__a[G__52357__i] = arguments[G__52357__i + 0]; ++G__52357__i;}
  args = new cljs.core.IndexedSeq(G__52357__a,0,null);
} 
return G__52356__delegate.call(this,args);};
G__52356.cljs$lang$maxFixedArity = 0;
G__52356.cljs$lang$applyTo = (function (arglist__52358){
var args = cljs.core.seq(arglist__52358);
return G__52356__delegate(args);
});
G__52356.cljs$core$IFn$_invoke$arity$variadic = G__52356__delegate;
return G__52356;
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
var G__52359__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__52359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52360__i = 0, G__52360__a = new Array(arguments.length -  0);
while (G__52360__i < G__52360__a.length) {G__52360__a[G__52360__i] = arguments[G__52360__i + 0]; ++G__52360__i;}
  args = new cljs.core.IndexedSeq(G__52360__a,0,null);
} 
return G__52359__delegate.call(this,args);};
G__52359.cljs$lang$maxFixedArity = 0;
G__52359.cljs$lang$applyTo = (function (arglist__52361){
var args = cljs.core.seq(arglist__52361);
return G__52359__delegate(args);
});
G__52359.cljs$core$IFn$_invoke$arity$variadic = G__52359__delegate;
return G__52359;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__52362__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__52362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52363__i = 0, G__52363__a = new Array(arguments.length -  0);
while (G__52363__i < G__52363__a.length) {G__52363__a[G__52363__i] = arguments[G__52363__i + 0]; ++G__52363__i;}
  args = new cljs.core.IndexedSeq(G__52363__a,0,null);
} 
return G__52362__delegate.call(this,args);};
G__52362.cljs$lang$maxFixedArity = 0;
G__52362.cljs$lang$applyTo = (function (arglist__52364){
var args = cljs.core.seq(arglist__52364);
return G__52362__delegate(args);
});
G__52362.cljs$core$IFn$_invoke$arity$variadic = G__52362__delegate;
return G__52362;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__52365__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__52365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52366__i = 0, G__52366__a = new Array(arguments.length -  0);
while (G__52366__i < G__52366__a.length) {G__52366__a[G__52366__i] = arguments[G__52366__i + 0]; ++G__52366__i;}
  args = new cljs.core.IndexedSeq(G__52366__a,0,null);
} 
return G__52365__delegate.call(this,args);};
G__52365.cljs$lang$maxFixedArity = 0;
G__52365.cljs$lang$applyTo = (function (arglist__52367){
var args = cljs.core.seq(arglist__52367);
return G__52365__delegate(args);
});
G__52365.cljs$core$IFn$_invoke$arity$variadic = G__52365__delegate;
return G__52365;
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
var G__52368__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__52368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52369__i = 0, G__52369__a = new Array(arguments.length -  0);
while (G__52369__i < G__52369__a.length) {G__52369__a[G__52369__i] = arguments[G__52369__i + 0]; ++G__52369__i;}
  args = new cljs.core.IndexedSeq(G__52369__a,0,null);
} 
return G__52368__delegate.call(this,args);};
G__52368.cljs$lang$maxFixedArity = 0;
G__52368.cljs$lang$applyTo = (function (arglist__52370){
var args = cljs.core.seq(arglist__52370);
return G__52368__delegate(args);
});
G__52368.cljs$core$IFn$_invoke$arity$variadic = G__52368__delegate;
return G__52368;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__52371__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__52371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52372__i = 0, G__52372__a = new Array(arguments.length -  0);
while (G__52372__i < G__52372__a.length) {G__52372__a[G__52372__i] = arguments[G__52372__i + 0]; ++G__52372__i;}
  args = new cljs.core.IndexedSeq(G__52372__a,0,null);
} 
return G__52371__delegate.call(this,args);};
G__52371.cljs$lang$maxFixedArity = 0;
G__52371.cljs$lang$applyTo = (function (arglist__52373){
var args = cljs.core.seq(arglist__52373);
return G__52371__delegate(args);
});
G__52371.cljs$core$IFn$_invoke$arity$variadic = G__52371__delegate;
return G__52371;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__52374__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__52374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52375__i = 0, G__52375__a = new Array(arguments.length -  0);
while (G__52375__i < G__52375__a.length) {G__52375__a[G__52375__i] = arguments[G__52375__i + 0]; ++G__52375__i;}
  args = new cljs.core.IndexedSeq(G__52375__a,0,null);
} 
return G__52374__delegate.call(this,args);};
G__52374.cljs$lang$maxFixedArity = 0;
G__52374.cljs$lang$applyTo = (function (arglist__52376){
var args = cljs.core.seq(arglist__52376);
return G__52374__delegate(args);
});
G__52374.cljs$core$IFn$_invoke$arity$variadic = G__52374__delegate;
return G__52374;
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
var G__52377__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__52377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52378__i = 0, G__52378__a = new Array(arguments.length -  0);
while (G__52378__i < G__52378__a.length) {G__52378__a[G__52378__i] = arguments[G__52378__i + 0]; ++G__52378__i;}
  args = new cljs.core.IndexedSeq(G__52378__a,0,null);
} 
return G__52377__delegate.call(this,args);};
G__52377.cljs$lang$maxFixedArity = 0;
G__52377.cljs$lang$applyTo = (function (arglist__52379){
var args = cljs.core.seq(arglist__52379);
return G__52377__delegate(args);
});
G__52377.cljs$core$IFn$_invoke$arity$variadic = G__52377__delegate;
return G__52377;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__52380__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__52380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52381__i = 0, G__52381__a = new Array(arguments.length -  0);
while (G__52381__i < G__52381__a.length) {G__52381__a[G__52381__i] = arguments[G__52381__i + 0]; ++G__52381__i;}
  args = new cljs.core.IndexedSeq(G__52381__a,0,null);
} 
return G__52380__delegate.call(this,args);};
G__52380.cljs$lang$maxFixedArity = 0;
G__52380.cljs$lang$applyTo = (function (arglist__52382){
var args = cljs.core.seq(arglist__52382);
return G__52380__delegate(args);
});
G__52380.cljs$core$IFn$_invoke$arity$variadic = G__52380__delegate;
return G__52380;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__52383__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__52383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52384__i = 0, G__52384__a = new Array(arguments.length -  0);
while (G__52384__i < G__52384__a.length) {G__52384__a[G__52384__i] = arguments[G__52384__i + 0]; ++G__52384__i;}
  args = new cljs.core.IndexedSeq(G__52384__a,0,null);
} 
return G__52383__delegate.call(this,args);};
G__52383.cljs$lang$maxFixedArity = 0;
G__52383.cljs$lang$applyTo = (function (arglist__52385){
var args = cljs.core.seq(arglist__52385);
return G__52383__delegate(args);
});
G__52383.cljs$core$IFn$_invoke$arity$variadic = G__52383__delegate;
return G__52383;
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

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__52386__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__52386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52387__i = 0, G__52387__a = new Array(arguments.length -  0);
while (G__52387__i < G__52387__a.length) {G__52387__a[G__52387__i] = arguments[G__52387__i + 0]; ++G__52387__i;}
  args = new cljs.core.IndexedSeq(G__52387__a,0,null);
} 
return G__52386__delegate.call(this,args);};
G__52386.cljs$lang$maxFixedArity = 0;
G__52386.cljs$lang$applyTo = (function (arglist__52388){
var args = cljs.core.seq(arglist__52388);
return G__52386__delegate(args);
});
G__52386.cljs$core$IFn$_invoke$arity$variadic = G__52386__delegate;
return G__52386;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__52389__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__52389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52390__i = 0, G__52390__a = new Array(arguments.length -  0);
while (G__52390__i < G__52390__a.length) {G__52390__a[G__52390__i] = arguments[G__52390__i + 0]; ++G__52390__i;}
  args = new cljs.core.IndexedSeq(G__52390__a,0,null);
} 
return G__52389__delegate.call(this,args);};
G__52389.cljs$lang$maxFixedArity = 0;
G__52389.cljs$lang$applyTo = (function (arglist__52391){
var args = cljs.core.seq(arglist__52391);
return G__52389__delegate(args);
});
G__52389.cljs$core$IFn$_invoke$arity$variadic = G__52389__delegate;
return G__52389;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__52392__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__52392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52393__i = 0, G__52393__a = new Array(arguments.length -  0);
while (G__52393__i < G__52393__a.length) {G__52393__a[G__52393__i] = arguments[G__52393__i + 0]; ++G__52393__i;}
  args = new cljs.core.IndexedSeq(G__52393__a,0,null);
} 
return G__52392__delegate.call(this,args);};
G__52392.cljs$lang$maxFixedArity = 0;
G__52392.cljs$lang$applyTo = (function (arglist__52394){
var args = cljs.core.seq(arglist__52394);
return G__52392__delegate(args);
});
G__52392.cljs$core$IFn$_invoke$arity$variadic = G__52392__delegate;
return G__52392;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526263828718
