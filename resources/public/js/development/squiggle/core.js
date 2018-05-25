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
var G__48377__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__48377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48378__i = 0, G__48378__a = new Array(arguments.length -  0);
while (G__48378__i < G__48378__a.length) {G__48378__a[G__48378__i] = arguments[G__48378__i + 0]; ++G__48378__i;}
  args = new cljs.core.IndexedSeq(G__48378__a,0,null);
} 
return G__48377__delegate.call(this,args);};
G__48377.cljs$lang$maxFixedArity = 0;
G__48377.cljs$lang$applyTo = (function (arglist__48379){
var args = cljs.core.seq(arglist__48379);
return G__48377__delegate(args);
});
G__48377.cljs$core$IFn$_invoke$arity$variadic = G__48377__delegate;
return G__48377;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__48380__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__48380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48381__i = 0, G__48381__a = new Array(arguments.length -  0);
while (G__48381__i < G__48381__a.length) {G__48381__a[G__48381__i] = arguments[G__48381__i + 0]; ++G__48381__i;}
  args = new cljs.core.IndexedSeq(G__48381__a,0,null);
} 
return G__48380__delegate.call(this,args);};
G__48380.cljs$lang$maxFixedArity = 0;
G__48380.cljs$lang$applyTo = (function (arglist__48382){
var args = cljs.core.seq(arglist__48382);
return G__48380__delegate(args);
});
G__48380.cljs$core$IFn$_invoke$arity$variadic = G__48380__delegate;
return G__48380;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__48383__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__48383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48384__i = 0, G__48384__a = new Array(arguments.length -  0);
while (G__48384__i < G__48384__a.length) {G__48384__a[G__48384__i] = arguments[G__48384__i + 0]; ++G__48384__i;}
  args = new cljs.core.IndexedSeq(G__48384__a,0,null);
} 
return G__48383__delegate.call(this,args);};
G__48383.cljs$lang$maxFixedArity = 0;
G__48383.cljs$lang$applyTo = (function (arglist__48385){
var args = cljs.core.seq(arglist__48385);
return G__48383__delegate(args);
});
G__48383.cljs$core$IFn$_invoke$arity$variadic = G__48383__delegate;
return G__48383;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__48386__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__48386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48387__i = 0, G__48387__a = new Array(arguments.length -  0);
while (G__48387__i < G__48387__a.length) {G__48387__a[G__48387__i] = arguments[G__48387__i + 0]; ++G__48387__i;}
  args = new cljs.core.IndexedSeq(G__48387__a,0,null);
} 
return G__48386__delegate.call(this,args);};
G__48386.cljs$lang$maxFixedArity = 0;
G__48386.cljs$lang$applyTo = (function (arglist__48388){
var args = cljs.core.seq(arglist__48388);
return G__48386__delegate(args);
});
G__48386.cljs$core$IFn$_invoke$arity$variadic = G__48386__delegate;
return G__48386;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__48389__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__48389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48390__i = 0, G__48390__a = new Array(arguments.length -  0);
while (G__48390__i < G__48390__a.length) {G__48390__a[G__48390__i] = arguments[G__48390__i + 0]; ++G__48390__i;}
  args = new cljs.core.IndexedSeq(G__48390__a,0,null);
} 
return G__48389__delegate.call(this,args);};
G__48389.cljs$lang$maxFixedArity = 0;
G__48389.cljs$lang$applyTo = (function (arglist__48391){
var args = cljs.core.seq(arglist__48391);
return G__48389__delegate(args);
});
G__48389.cljs$core$IFn$_invoke$arity$variadic = G__48389__delegate;
return G__48389;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__48392__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__48392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48393__i = 0, G__48393__a = new Array(arguments.length -  0);
while (G__48393__i < G__48393__a.length) {G__48393__a[G__48393__i] = arguments[G__48393__i + 0]; ++G__48393__i;}
  args = new cljs.core.IndexedSeq(G__48393__a,0,null);
} 
return G__48392__delegate.call(this,args);};
G__48392.cljs$lang$maxFixedArity = 0;
G__48392.cljs$lang$applyTo = (function (arglist__48394){
var args = cljs.core.seq(arglist__48394);
return G__48392__delegate(args);
});
G__48392.cljs$core$IFn$_invoke$arity$variadic = G__48392__delegate;
return G__48392;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__48395__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__48395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48396__i = 0, G__48396__a = new Array(arguments.length -  0);
while (G__48396__i < G__48396__a.length) {G__48396__a[G__48396__i] = arguments[G__48396__i + 0]; ++G__48396__i;}
  args = new cljs.core.IndexedSeq(G__48396__a,0,null);
} 
return G__48395__delegate.call(this,args);};
G__48395.cljs$lang$maxFixedArity = 0;
G__48395.cljs$lang$applyTo = (function (arglist__48397){
var args = cljs.core.seq(arglist__48397);
return G__48395__delegate(args);
});
G__48395.cljs$core$IFn$_invoke$arity$variadic = G__48395__delegate;
return G__48395;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__48398__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__48398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48399__i = 0, G__48399__a = new Array(arguments.length -  0);
while (G__48399__i < G__48399__a.length) {G__48399__a[G__48399__i] = arguments[G__48399__i + 0]; ++G__48399__i;}
  args = new cljs.core.IndexedSeq(G__48399__a,0,null);
} 
return G__48398__delegate.call(this,args);};
G__48398.cljs$lang$maxFixedArity = 0;
G__48398.cljs$lang$applyTo = (function (arglist__48400){
var args = cljs.core.seq(arglist__48400);
return G__48398__delegate(args);
});
G__48398.cljs$core$IFn$_invoke$arity$variadic = G__48398__delegate;
return G__48398;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__48401__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__48401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48402__i = 0, G__48402__a = new Array(arguments.length -  0);
while (G__48402__i < G__48402__a.length) {G__48402__a[G__48402__i] = arguments[G__48402__i + 0]; ++G__48402__i;}
  args = new cljs.core.IndexedSeq(G__48402__a,0,null);
} 
return G__48401__delegate.call(this,args);};
G__48401.cljs$lang$maxFixedArity = 0;
G__48401.cljs$lang$applyTo = (function (arglist__48403){
var args = cljs.core.seq(arglist__48403);
return G__48401__delegate(args);
});
G__48401.cljs$core$IFn$_invoke$arity$variadic = G__48401__delegate;
return G__48401;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__48404__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__48404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48405__i = 0, G__48405__a = new Array(arguments.length -  0);
while (G__48405__i < G__48405__a.length) {G__48405__a[G__48405__i] = arguments[G__48405__i + 0]; ++G__48405__i;}
  args = new cljs.core.IndexedSeq(G__48405__a,0,null);
} 
return G__48404__delegate.call(this,args);};
G__48404.cljs$lang$maxFixedArity = 0;
G__48404.cljs$lang$applyTo = (function (arglist__48406){
var args = cljs.core.seq(arglist__48406);
return G__48404__delegate(args);
});
G__48404.cljs$core$IFn$_invoke$arity$variadic = G__48404__delegate;
return G__48404;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__48407__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__48407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48408__i = 0, G__48408__a = new Array(arguments.length -  0);
while (G__48408__i < G__48408__a.length) {G__48408__a[G__48408__i] = arguments[G__48408__i + 0]; ++G__48408__i;}
  args = new cljs.core.IndexedSeq(G__48408__a,0,null);
} 
return G__48407__delegate.call(this,args);};
G__48407.cljs$lang$maxFixedArity = 0;
G__48407.cljs$lang$applyTo = (function (arglist__48409){
var args = cljs.core.seq(arglist__48409);
return G__48407__delegate(args);
});
G__48407.cljs$core$IFn$_invoke$arity$variadic = G__48407__delegate;
return G__48407;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__48410__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__48410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48411__i = 0, G__48411__a = new Array(arguments.length -  0);
while (G__48411__i < G__48411__a.length) {G__48411__a[G__48411__i] = arguments[G__48411__i + 0]; ++G__48411__i;}
  args = new cljs.core.IndexedSeq(G__48411__a,0,null);
} 
return G__48410__delegate.call(this,args);};
G__48410.cljs$lang$maxFixedArity = 0;
G__48410.cljs$lang$applyTo = (function (arglist__48412){
var args = cljs.core.seq(arglist__48412);
return G__48410__delegate(args);
});
G__48410.cljs$core$IFn$_invoke$arity$variadic = G__48410__delegate;
return G__48410;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__48413__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48414__i = 0, G__48414__a = new Array(arguments.length -  0);
while (G__48414__i < G__48414__a.length) {G__48414__a[G__48414__i] = arguments[G__48414__i + 0]; ++G__48414__i;}
  args = new cljs.core.IndexedSeq(G__48414__a,0,null);
} 
return G__48413__delegate.call(this,args);};
G__48413.cljs$lang$maxFixedArity = 0;
G__48413.cljs$lang$applyTo = (function (arglist__48415){
var args = cljs.core.seq(arglist__48415);
return G__48413__delegate(args);
});
G__48413.cljs$core$IFn$_invoke$arity$variadic = G__48413__delegate;
return G__48413;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__48416__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__48416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48417__i = 0, G__48417__a = new Array(arguments.length -  0);
while (G__48417__i < G__48417__a.length) {G__48417__a[G__48417__i] = arguments[G__48417__i + 0]; ++G__48417__i;}
  args = new cljs.core.IndexedSeq(G__48417__a,0,null);
} 
return G__48416__delegate.call(this,args);};
G__48416.cljs$lang$maxFixedArity = 0;
G__48416.cljs$lang$applyTo = (function (arglist__48418){
var args = cljs.core.seq(arglist__48418);
return G__48416__delegate(args);
});
G__48416.cljs$core$IFn$_invoke$arity$variadic = G__48416__delegate;
return G__48416;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48419__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48420__i = 0, G__48420__a = new Array(arguments.length -  0);
while (G__48420__i < G__48420__a.length) {G__48420__a[G__48420__i] = arguments[G__48420__i + 0]; ++G__48420__i;}
  args = new cljs.core.IndexedSeq(G__48420__a,0,null);
} 
return G__48419__delegate.call(this,args);};
G__48419.cljs$lang$maxFixedArity = 0;
G__48419.cljs$lang$applyTo = (function (arglist__48421){
var args = cljs.core.seq(arglist__48421);
return G__48419__delegate(args);
});
G__48419.cljs$core$IFn$_invoke$arity$variadic = G__48419__delegate;
return G__48419;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__48422__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48423__i = 0, G__48423__a = new Array(arguments.length -  0);
while (G__48423__i < G__48423__a.length) {G__48423__a[G__48423__i] = arguments[G__48423__i + 0]; ++G__48423__i;}
  args = new cljs.core.IndexedSeq(G__48423__a,0,null);
} 
return G__48422__delegate.call(this,args);};
G__48422.cljs$lang$maxFixedArity = 0;
G__48422.cljs$lang$applyTo = (function (arglist__48424){
var args = cljs.core.seq(arglist__48424);
return G__48422__delegate(args);
});
G__48422.cljs$core$IFn$_invoke$arity$variadic = G__48422__delegate;
return G__48422;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__48425__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__48425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48426__i = 0, G__48426__a = new Array(arguments.length -  0);
while (G__48426__i < G__48426__a.length) {G__48426__a[G__48426__i] = arguments[G__48426__i + 0]; ++G__48426__i;}
  args = new cljs.core.IndexedSeq(G__48426__a,0,null);
} 
return G__48425__delegate.call(this,args);};
G__48425.cljs$lang$maxFixedArity = 0;
G__48425.cljs$lang$applyTo = (function (arglist__48427){
var args = cljs.core.seq(arglist__48427);
return G__48425__delegate(args);
});
G__48425.cljs$core$IFn$_invoke$arity$variadic = G__48425__delegate;
return G__48425;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48428__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48429__i = 0, G__48429__a = new Array(arguments.length -  0);
while (G__48429__i < G__48429__a.length) {G__48429__a[G__48429__i] = arguments[G__48429__i + 0]; ++G__48429__i;}
  args = new cljs.core.IndexedSeq(G__48429__a,0,null);
} 
return G__48428__delegate.call(this,args);};
G__48428.cljs$lang$maxFixedArity = 0;
G__48428.cljs$lang$applyTo = (function (arglist__48430){
var args = cljs.core.seq(arglist__48430);
return G__48428__delegate(args);
});
G__48428.cljs$core$IFn$_invoke$arity$variadic = G__48428__delegate;
return G__48428;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__48431__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48432__i = 0, G__48432__a = new Array(arguments.length -  0);
while (G__48432__i < G__48432__a.length) {G__48432__a[G__48432__i] = arguments[G__48432__i + 0]; ++G__48432__i;}
  args = new cljs.core.IndexedSeq(G__48432__a,0,null);
} 
return G__48431__delegate.call(this,args);};
G__48431.cljs$lang$maxFixedArity = 0;
G__48431.cljs$lang$applyTo = (function (arglist__48433){
var args = cljs.core.seq(arglist__48433);
return G__48431__delegate(args);
});
G__48431.cljs$core$IFn$_invoke$arity$variadic = G__48431__delegate;
return G__48431;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__48434__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__48434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48435__i = 0, G__48435__a = new Array(arguments.length -  0);
while (G__48435__i < G__48435__a.length) {G__48435__a[G__48435__i] = arguments[G__48435__i + 0]; ++G__48435__i;}
  args = new cljs.core.IndexedSeq(G__48435__a,0,null);
} 
return G__48434__delegate.call(this,args);};
G__48434.cljs$lang$maxFixedArity = 0;
G__48434.cljs$lang$applyTo = (function (arglist__48436){
var args = cljs.core.seq(arglist__48436);
return G__48434__delegate(args);
});
G__48434.cljs$core$IFn$_invoke$arity$variadic = G__48434__delegate;
return G__48434;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48437__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48438__i = 0, G__48438__a = new Array(arguments.length -  0);
while (G__48438__i < G__48438__a.length) {G__48438__a[G__48438__i] = arguments[G__48438__i + 0]; ++G__48438__i;}
  args = new cljs.core.IndexedSeq(G__48438__a,0,null);
} 
return G__48437__delegate.call(this,args);};
G__48437.cljs$lang$maxFixedArity = 0;
G__48437.cljs$lang$applyTo = (function (arglist__48439){
var args = cljs.core.seq(arglist__48439);
return G__48437__delegate(args);
});
G__48437.cljs$core$IFn$_invoke$arity$variadic = G__48437__delegate;
return G__48437;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__48440__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48441__i = 0, G__48441__a = new Array(arguments.length -  0);
while (G__48441__i < G__48441__a.length) {G__48441__a[G__48441__i] = arguments[G__48441__i + 0]; ++G__48441__i;}
  args = new cljs.core.IndexedSeq(G__48441__a,0,null);
} 
return G__48440__delegate.call(this,args);};
G__48440.cljs$lang$maxFixedArity = 0;
G__48440.cljs$lang$applyTo = (function (arglist__48442){
var args = cljs.core.seq(arglist__48442);
return G__48440__delegate(args);
});
G__48440.cljs$core$IFn$_invoke$arity$variadic = G__48440__delegate;
return G__48440;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__48443__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__48443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48444__i = 0, G__48444__a = new Array(arguments.length -  0);
while (G__48444__i < G__48444__a.length) {G__48444__a[G__48444__i] = arguments[G__48444__i + 0]; ++G__48444__i;}
  args = new cljs.core.IndexedSeq(G__48444__a,0,null);
} 
return G__48443__delegate.call(this,args);};
G__48443.cljs$lang$maxFixedArity = 0;
G__48443.cljs$lang$applyTo = (function (arglist__48445){
var args = cljs.core.seq(arglist__48445);
return G__48443__delegate(args);
});
G__48443.cljs$core$IFn$_invoke$arity$variadic = G__48443__delegate;
return G__48443;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48446__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48447__i = 0, G__48447__a = new Array(arguments.length -  0);
while (G__48447__i < G__48447__a.length) {G__48447__a[G__48447__i] = arguments[G__48447__i + 0]; ++G__48447__i;}
  args = new cljs.core.IndexedSeq(G__48447__a,0,null);
} 
return G__48446__delegate.call(this,args);};
G__48446.cljs$lang$maxFixedArity = 0;
G__48446.cljs$lang$applyTo = (function (arglist__48448){
var args = cljs.core.seq(arglist__48448);
return G__48446__delegate(args);
});
G__48446.cljs$core$IFn$_invoke$arity$variadic = G__48446__delegate;
return G__48446;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__48449__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__48449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48450__i = 0, G__48450__a = new Array(arguments.length -  0);
while (G__48450__i < G__48450__a.length) {G__48450__a[G__48450__i] = arguments[G__48450__i + 0]; ++G__48450__i;}
  args = new cljs.core.IndexedSeq(G__48450__a,0,null);
} 
return G__48449__delegate.call(this,args);};
G__48449.cljs$lang$maxFixedArity = 0;
G__48449.cljs$lang$applyTo = (function (arglist__48451){
var args = cljs.core.seq(arglist__48451);
return G__48449__delegate(args);
});
G__48449.cljs$core$IFn$_invoke$arity$variadic = G__48449__delegate;
return G__48449;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__48452__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__48452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48453__i = 0, G__48453__a = new Array(arguments.length -  0);
while (G__48453__i < G__48453__a.length) {G__48453__a[G__48453__i] = arguments[G__48453__i + 0]; ++G__48453__i;}
  args = new cljs.core.IndexedSeq(G__48453__a,0,null);
} 
return G__48452__delegate.call(this,args);};
G__48452.cljs$lang$maxFixedArity = 0;
G__48452.cljs$lang$applyTo = (function (arglist__48454){
var args = cljs.core.seq(arglist__48454);
return G__48452__delegate(args);
});
G__48452.cljs$core$IFn$_invoke$arity$variadic = G__48452__delegate;
return G__48452;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__48455__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__48455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48456__i = 0, G__48456__a = new Array(arguments.length -  0);
while (G__48456__i < G__48456__a.length) {G__48456__a[G__48456__i] = arguments[G__48456__i + 0]; ++G__48456__i;}
  args = new cljs.core.IndexedSeq(G__48456__a,0,null);
} 
return G__48455__delegate.call(this,args);};
G__48455.cljs$lang$maxFixedArity = 0;
G__48455.cljs$lang$applyTo = (function (arglist__48457){
var args = cljs.core.seq(arglist__48457);
return G__48455__delegate(args);
});
G__48455.cljs$core$IFn$_invoke$arity$variadic = G__48455__delegate;
return G__48455;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28715__28716__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28715__28716__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527209156450
