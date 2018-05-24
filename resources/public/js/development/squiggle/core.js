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
var G__42368__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__42368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42369__i = 0, G__42369__a = new Array(arguments.length -  0);
while (G__42369__i < G__42369__a.length) {G__42369__a[G__42369__i] = arguments[G__42369__i + 0]; ++G__42369__i;}
  args = new cljs.core.IndexedSeq(G__42369__a,0,null);
} 
return G__42368__delegate.call(this,args);};
G__42368.cljs$lang$maxFixedArity = 0;
G__42368.cljs$lang$applyTo = (function (arglist__42370){
var args = cljs.core.seq(arglist__42370);
return G__42368__delegate(args);
});
G__42368.cljs$core$IFn$_invoke$arity$variadic = G__42368__delegate;
return G__42368;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__42371__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__42371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42372__i = 0, G__42372__a = new Array(arguments.length -  0);
while (G__42372__i < G__42372__a.length) {G__42372__a[G__42372__i] = arguments[G__42372__i + 0]; ++G__42372__i;}
  args = new cljs.core.IndexedSeq(G__42372__a,0,null);
} 
return G__42371__delegate.call(this,args);};
G__42371.cljs$lang$maxFixedArity = 0;
G__42371.cljs$lang$applyTo = (function (arglist__42373){
var args = cljs.core.seq(arglist__42373);
return G__42371__delegate(args);
});
G__42371.cljs$core$IFn$_invoke$arity$variadic = G__42371__delegate;
return G__42371;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__42374__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__42374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42375__i = 0, G__42375__a = new Array(arguments.length -  0);
while (G__42375__i < G__42375__a.length) {G__42375__a[G__42375__i] = arguments[G__42375__i + 0]; ++G__42375__i;}
  args = new cljs.core.IndexedSeq(G__42375__a,0,null);
} 
return G__42374__delegate.call(this,args);};
G__42374.cljs$lang$maxFixedArity = 0;
G__42374.cljs$lang$applyTo = (function (arglist__42376){
var args = cljs.core.seq(arglist__42376);
return G__42374__delegate(args);
});
G__42374.cljs$core$IFn$_invoke$arity$variadic = G__42374__delegate;
return G__42374;
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
var G__42377__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__42377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42378__i = 0, G__42378__a = new Array(arguments.length -  0);
while (G__42378__i < G__42378__a.length) {G__42378__a[G__42378__i] = arguments[G__42378__i + 0]; ++G__42378__i;}
  args = new cljs.core.IndexedSeq(G__42378__a,0,null);
} 
return G__42377__delegate.call(this,args);};
G__42377.cljs$lang$maxFixedArity = 0;
G__42377.cljs$lang$applyTo = (function (arglist__42379){
var args = cljs.core.seq(arglist__42379);
return G__42377__delegate(args);
});
G__42377.cljs$core$IFn$_invoke$arity$variadic = G__42377__delegate;
return G__42377;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__42380__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__42380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42381__i = 0, G__42381__a = new Array(arguments.length -  0);
while (G__42381__i < G__42381__a.length) {G__42381__a[G__42381__i] = arguments[G__42381__i + 0]; ++G__42381__i;}
  args = new cljs.core.IndexedSeq(G__42381__a,0,null);
} 
return G__42380__delegate.call(this,args);};
G__42380.cljs$lang$maxFixedArity = 0;
G__42380.cljs$lang$applyTo = (function (arglist__42382){
var args = cljs.core.seq(arglist__42382);
return G__42380__delegate(args);
});
G__42380.cljs$core$IFn$_invoke$arity$variadic = G__42380__delegate;
return G__42380;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__42383__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__42383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42384__i = 0, G__42384__a = new Array(arguments.length -  0);
while (G__42384__i < G__42384__a.length) {G__42384__a[G__42384__i] = arguments[G__42384__i + 0]; ++G__42384__i;}
  args = new cljs.core.IndexedSeq(G__42384__a,0,null);
} 
return G__42383__delegate.call(this,args);};
G__42383.cljs$lang$maxFixedArity = 0;
G__42383.cljs$lang$applyTo = (function (arglist__42385){
var args = cljs.core.seq(arglist__42385);
return G__42383__delegate(args);
});
G__42383.cljs$core$IFn$_invoke$arity$variadic = G__42383__delegate;
return G__42383;
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
var G__42386__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__42386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42387__i = 0, G__42387__a = new Array(arguments.length -  0);
while (G__42387__i < G__42387__a.length) {G__42387__a[G__42387__i] = arguments[G__42387__i + 0]; ++G__42387__i;}
  args = new cljs.core.IndexedSeq(G__42387__a,0,null);
} 
return G__42386__delegate.call(this,args);};
G__42386.cljs$lang$maxFixedArity = 0;
G__42386.cljs$lang$applyTo = (function (arglist__42388){
var args = cljs.core.seq(arglist__42388);
return G__42386__delegate(args);
});
G__42386.cljs$core$IFn$_invoke$arity$variadic = G__42386__delegate;
return G__42386;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__42389__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__42389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42390__i = 0, G__42390__a = new Array(arguments.length -  0);
while (G__42390__i < G__42390__a.length) {G__42390__a[G__42390__i] = arguments[G__42390__i + 0]; ++G__42390__i;}
  args = new cljs.core.IndexedSeq(G__42390__a,0,null);
} 
return G__42389__delegate.call(this,args);};
G__42389.cljs$lang$maxFixedArity = 0;
G__42389.cljs$lang$applyTo = (function (arglist__42391){
var args = cljs.core.seq(arglist__42391);
return G__42389__delegate(args);
});
G__42389.cljs$core$IFn$_invoke$arity$variadic = G__42389__delegate;
return G__42389;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__42392__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__42392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42393__i = 0, G__42393__a = new Array(arguments.length -  0);
while (G__42393__i < G__42393__a.length) {G__42393__a[G__42393__i] = arguments[G__42393__i + 0]; ++G__42393__i;}
  args = new cljs.core.IndexedSeq(G__42393__a,0,null);
} 
return G__42392__delegate.call(this,args);};
G__42392.cljs$lang$maxFixedArity = 0;
G__42392.cljs$lang$applyTo = (function (arglist__42394){
var args = cljs.core.seq(arglist__42394);
return G__42392__delegate(args);
});
G__42392.cljs$core$IFn$_invoke$arity$variadic = G__42392__delegate;
return G__42392;
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
var G__42395__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__42395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42396__i = 0, G__42396__a = new Array(arguments.length -  0);
while (G__42396__i < G__42396__a.length) {G__42396__a[G__42396__i] = arguments[G__42396__i + 0]; ++G__42396__i;}
  args = new cljs.core.IndexedSeq(G__42396__a,0,null);
} 
return G__42395__delegate.call(this,args);};
G__42395.cljs$lang$maxFixedArity = 0;
G__42395.cljs$lang$applyTo = (function (arglist__42397){
var args = cljs.core.seq(arglist__42397);
return G__42395__delegate(args);
});
G__42395.cljs$core$IFn$_invoke$arity$variadic = G__42395__delegate;
return G__42395;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__42398__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__42398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42399__i = 0, G__42399__a = new Array(arguments.length -  0);
while (G__42399__i < G__42399__a.length) {G__42399__a[G__42399__i] = arguments[G__42399__i + 0]; ++G__42399__i;}
  args = new cljs.core.IndexedSeq(G__42399__a,0,null);
} 
return G__42398__delegate.call(this,args);};
G__42398.cljs$lang$maxFixedArity = 0;
G__42398.cljs$lang$applyTo = (function (arglist__42400){
var args = cljs.core.seq(arglist__42400);
return G__42398__delegate(args);
});
G__42398.cljs$core$IFn$_invoke$arity$variadic = G__42398__delegate;
return G__42398;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__42401__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__42401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42402__i = 0, G__42402__a = new Array(arguments.length -  0);
while (G__42402__i < G__42402__a.length) {G__42402__a[G__42402__i] = arguments[G__42402__i + 0]; ++G__42402__i;}
  args = new cljs.core.IndexedSeq(G__42402__a,0,null);
} 
return G__42401__delegate.call(this,args);};
G__42401.cljs$lang$maxFixedArity = 0;
G__42401.cljs$lang$applyTo = (function (arglist__42403){
var args = cljs.core.seq(arglist__42403);
return G__42401__delegate(args);
});
G__42401.cljs$core$IFn$_invoke$arity$variadic = G__42401__delegate;
return G__42401;
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
var G__42404__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42405__i = 0, G__42405__a = new Array(arguments.length -  0);
while (G__42405__i < G__42405__a.length) {G__42405__a[G__42405__i] = arguments[G__42405__i + 0]; ++G__42405__i;}
  args = new cljs.core.IndexedSeq(G__42405__a,0,null);
} 
return G__42404__delegate.call(this,args);};
G__42404.cljs$lang$maxFixedArity = 0;
G__42404.cljs$lang$applyTo = (function (arglist__42406){
var args = cljs.core.seq(arglist__42406);
return G__42404__delegate(args);
});
G__42404.cljs$core$IFn$_invoke$arity$variadic = G__42404__delegate;
return G__42404;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__42407__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__42407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42408__i = 0, G__42408__a = new Array(arguments.length -  0);
while (G__42408__i < G__42408__a.length) {G__42408__a[G__42408__i] = arguments[G__42408__i + 0]; ++G__42408__i;}
  args = new cljs.core.IndexedSeq(G__42408__a,0,null);
} 
return G__42407__delegate.call(this,args);};
G__42407.cljs$lang$maxFixedArity = 0;
G__42407.cljs$lang$applyTo = (function (arglist__42409){
var args = cljs.core.seq(arglist__42409);
return G__42407__delegate(args);
});
G__42407.cljs$core$IFn$_invoke$arity$variadic = G__42407__delegate;
return G__42407;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42410__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42411__i = 0, G__42411__a = new Array(arguments.length -  0);
while (G__42411__i < G__42411__a.length) {G__42411__a[G__42411__i] = arguments[G__42411__i + 0]; ++G__42411__i;}
  args = new cljs.core.IndexedSeq(G__42411__a,0,null);
} 
return G__42410__delegate.call(this,args);};
G__42410.cljs$lang$maxFixedArity = 0;
G__42410.cljs$lang$applyTo = (function (arglist__42412){
var args = cljs.core.seq(arglist__42412);
return G__42410__delegate(args);
});
G__42410.cljs$core$IFn$_invoke$arity$variadic = G__42410__delegate;
return G__42410;
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
var G__42413__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42414__i = 0, G__42414__a = new Array(arguments.length -  0);
while (G__42414__i < G__42414__a.length) {G__42414__a[G__42414__i] = arguments[G__42414__i + 0]; ++G__42414__i;}
  args = new cljs.core.IndexedSeq(G__42414__a,0,null);
} 
return G__42413__delegate.call(this,args);};
G__42413.cljs$lang$maxFixedArity = 0;
G__42413.cljs$lang$applyTo = (function (arglist__42415){
var args = cljs.core.seq(arglist__42415);
return G__42413__delegate(args);
});
G__42413.cljs$core$IFn$_invoke$arity$variadic = G__42413__delegate;
return G__42413;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__42416__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__42416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42417__i = 0, G__42417__a = new Array(arguments.length -  0);
while (G__42417__i < G__42417__a.length) {G__42417__a[G__42417__i] = arguments[G__42417__i + 0]; ++G__42417__i;}
  args = new cljs.core.IndexedSeq(G__42417__a,0,null);
} 
return G__42416__delegate.call(this,args);};
G__42416.cljs$lang$maxFixedArity = 0;
G__42416.cljs$lang$applyTo = (function (arglist__42418){
var args = cljs.core.seq(arglist__42418);
return G__42416__delegate(args);
});
G__42416.cljs$core$IFn$_invoke$arity$variadic = G__42416__delegate;
return G__42416;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42419__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42420__i = 0, G__42420__a = new Array(arguments.length -  0);
while (G__42420__i < G__42420__a.length) {G__42420__a[G__42420__i] = arguments[G__42420__i + 0]; ++G__42420__i;}
  args = new cljs.core.IndexedSeq(G__42420__a,0,null);
} 
return G__42419__delegate.call(this,args);};
G__42419.cljs$lang$maxFixedArity = 0;
G__42419.cljs$lang$applyTo = (function (arglist__42421){
var args = cljs.core.seq(arglist__42421);
return G__42419__delegate(args);
});
G__42419.cljs$core$IFn$_invoke$arity$variadic = G__42419__delegate;
return G__42419;
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
var G__42422__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42423__i = 0, G__42423__a = new Array(arguments.length -  0);
while (G__42423__i < G__42423__a.length) {G__42423__a[G__42423__i] = arguments[G__42423__i + 0]; ++G__42423__i;}
  args = new cljs.core.IndexedSeq(G__42423__a,0,null);
} 
return G__42422__delegate.call(this,args);};
G__42422.cljs$lang$maxFixedArity = 0;
G__42422.cljs$lang$applyTo = (function (arglist__42424){
var args = cljs.core.seq(arglist__42424);
return G__42422__delegate(args);
});
G__42422.cljs$core$IFn$_invoke$arity$variadic = G__42422__delegate;
return G__42422;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__42425__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__42425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42426__i = 0, G__42426__a = new Array(arguments.length -  0);
while (G__42426__i < G__42426__a.length) {G__42426__a[G__42426__i] = arguments[G__42426__i + 0]; ++G__42426__i;}
  args = new cljs.core.IndexedSeq(G__42426__a,0,null);
} 
return G__42425__delegate.call(this,args);};
G__42425.cljs$lang$maxFixedArity = 0;
G__42425.cljs$lang$applyTo = (function (arglist__42427){
var args = cljs.core.seq(arglist__42427);
return G__42425__delegate(args);
});
G__42425.cljs$core$IFn$_invoke$arity$variadic = G__42425__delegate;
return G__42425;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42428__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42429__i = 0, G__42429__a = new Array(arguments.length -  0);
while (G__42429__i < G__42429__a.length) {G__42429__a[G__42429__i] = arguments[G__42429__i + 0]; ++G__42429__i;}
  args = new cljs.core.IndexedSeq(G__42429__a,0,null);
} 
return G__42428__delegate.call(this,args);};
G__42428.cljs$lang$maxFixedArity = 0;
G__42428.cljs$lang$applyTo = (function (arglist__42430){
var args = cljs.core.seq(arglist__42430);
return G__42428__delegate(args);
});
G__42428.cljs$core$IFn$_invoke$arity$variadic = G__42428__delegate;
return G__42428;
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
var G__42431__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42432__i = 0, G__42432__a = new Array(arguments.length -  0);
while (G__42432__i < G__42432__a.length) {G__42432__a[G__42432__i] = arguments[G__42432__i + 0]; ++G__42432__i;}
  args = new cljs.core.IndexedSeq(G__42432__a,0,null);
} 
return G__42431__delegate.call(this,args);};
G__42431.cljs$lang$maxFixedArity = 0;
G__42431.cljs$lang$applyTo = (function (arglist__42433){
var args = cljs.core.seq(arglist__42433);
return G__42431__delegate(args);
});
G__42431.cljs$core$IFn$_invoke$arity$variadic = G__42431__delegate;
return G__42431;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__42434__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__42434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42435__i = 0, G__42435__a = new Array(arguments.length -  0);
while (G__42435__i < G__42435__a.length) {G__42435__a[G__42435__i] = arguments[G__42435__i + 0]; ++G__42435__i;}
  args = new cljs.core.IndexedSeq(G__42435__a,0,null);
} 
return G__42434__delegate.call(this,args);};
G__42434.cljs$lang$maxFixedArity = 0;
G__42434.cljs$lang$applyTo = (function (arglist__42436){
var args = cljs.core.seq(arglist__42436);
return G__42434__delegate(args);
});
G__42434.cljs$core$IFn$_invoke$arity$variadic = G__42434__delegate;
return G__42434;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42437__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42438__i = 0, G__42438__a = new Array(arguments.length -  0);
while (G__42438__i < G__42438__a.length) {G__42438__a[G__42438__i] = arguments[G__42438__i + 0]; ++G__42438__i;}
  args = new cljs.core.IndexedSeq(G__42438__a,0,null);
} 
return G__42437__delegate.call(this,args);};
G__42437.cljs$lang$maxFixedArity = 0;
G__42437.cljs$lang$applyTo = (function (arglist__42439){
var args = cljs.core.seq(arglist__42439);
return G__42437__delegate(args);
});
G__42437.cljs$core$IFn$_invoke$arity$variadic = G__42437__delegate;
return G__42437;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__42440__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__42440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42441__i = 0, G__42441__a = new Array(arguments.length -  0);
while (G__42441__i < G__42441__a.length) {G__42441__a[G__42441__i] = arguments[G__42441__i + 0]; ++G__42441__i;}
  args = new cljs.core.IndexedSeq(G__42441__a,0,null);
} 
return G__42440__delegate.call(this,args);};
G__42440.cljs$lang$maxFixedArity = 0;
G__42440.cljs$lang$applyTo = (function (arglist__42442){
var args = cljs.core.seq(arglist__42442);
return G__42440__delegate(args);
});
G__42440.cljs$core$IFn$_invoke$arity$variadic = G__42440__delegate;
return G__42440;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__42443__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__42443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42444__i = 0, G__42444__a = new Array(arguments.length -  0);
while (G__42444__i < G__42444__a.length) {G__42444__a[G__42444__i] = arguments[G__42444__i + 0]; ++G__42444__i;}
  args = new cljs.core.IndexedSeq(G__42444__a,0,null);
} 
return G__42443__delegate.call(this,args);};
G__42443.cljs$lang$maxFixedArity = 0;
G__42443.cljs$lang$applyTo = (function (arglist__42445){
var args = cljs.core.seq(arglist__42445);
return G__42443__delegate(args);
});
G__42443.cljs$core$IFn$_invoke$arity$variadic = G__42443__delegate;
return G__42443;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__42446__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__42446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42447__i = 0, G__42447__a = new Array(arguments.length -  0);
while (G__42447__i < G__42447__a.length) {G__42447__a[G__42447__i] = arguments[G__42447__i + 0]; ++G__42447__i;}
  args = new cljs.core.IndexedSeq(G__42447__a,0,null);
} 
return G__42446__delegate.call(this,args);};
G__42446.cljs$lang$maxFixedArity = 0;
G__42446.cljs$lang$applyTo = (function (arglist__42448){
var args = cljs.core.seq(arglist__42448);
return G__42446__delegate(args);
});
G__42446.cljs$core$IFn$_invoke$arity$variadic = G__42446__delegate;
return G__42446;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527204667412
