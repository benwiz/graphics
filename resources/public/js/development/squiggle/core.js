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
var G__47415__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__47415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47416__i = 0, G__47416__a = new Array(arguments.length -  0);
while (G__47416__i < G__47416__a.length) {G__47416__a[G__47416__i] = arguments[G__47416__i + 0]; ++G__47416__i;}
  args = new cljs.core.IndexedSeq(G__47416__a,0,null);
} 
return G__47415__delegate.call(this,args);};
G__47415.cljs$lang$maxFixedArity = 0;
G__47415.cljs$lang$applyTo = (function (arglist__47417){
var args = cljs.core.seq(arglist__47417);
return G__47415__delegate(args);
});
G__47415.cljs$core$IFn$_invoke$arity$variadic = G__47415__delegate;
return G__47415;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__47418__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__47418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47419__i = 0, G__47419__a = new Array(arguments.length -  0);
while (G__47419__i < G__47419__a.length) {G__47419__a[G__47419__i] = arguments[G__47419__i + 0]; ++G__47419__i;}
  args = new cljs.core.IndexedSeq(G__47419__a,0,null);
} 
return G__47418__delegate.call(this,args);};
G__47418.cljs$lang$maxFixedArity = 0;
G__47418.cljs$lang$applyTo = (function (arglist__47420){
var args = cljs.core.seq(arglist__47420);
return G__47418__delegate(args);
});
G__47418.cljs$core$IFn$_invoke$arity$variadic = G__47418__delegate;
return G__47418;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__47421__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__47421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47422__i = 0, G__47422__a = new Array(arguments.length -  0);
while (G__47422__i < G__47422__a.length) {G__47422__a[G__47422__i] = arguments[G__47422__i + 0]; ++G__47422__i;}
  args = new cljs.core.IndexedSeq(G__47422__a,0,null);
} 
return G__47421__delegate.call(this,args);};
G__47421.cljs$lang$maxFixedArity = 0;
G__47421.cljs$lang$applyTo = (function (arglist__47423){
var args = cljs.core.seq(arglist__47423);
return G__47421__delegate(args);
});
G__47421.cljs$core$IFn$_invoke$arity$variadic = G__47421__delegate;
return G__47421;
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
var G__47424__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__47424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47425__i = 0, G__47425__a = new Array(arguments.length -  0);
while (G__47425__i < G__47425__a.length) {G__47425__a[G__47425__i] = arguments[G__47425__i + 0]; ++G__47425__i;}
  args = new cljs.core.IndexedSeq(G__47425__a,0,null);
} 
return G__47424__delegate.call(this,args);};
G__47424.cljs$lang$maxFixedArity = 0;
G__47424.cljs$lang$applyTo = (function (arglist__47426){
var args = cljs.core.seq(arglist__47426);
return G__47424__delegate(args);
});
G__47424.cljs$core$IFn$_invoke$arity$variadic = G__47424__delegate;
return G__47424;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__47427__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__47427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47428__i = 0, G__47428__a = new Array(arguments.length -  0);
while (G__47428__i < G__47428__a.length) {G__47428__a[G__47428__i] = arguments[G__47428__i + 0]; ++G__47428__i;}
  args = new cljs.core.IndexedSeq(G__47428__a,0,null);
} 
return G__47427__delegate.call(this,args);};
G__47427.cljs$lang$maxFixedArity = 0;
G__47427.cljs$lang$applyTo = (function (arglist__47429){
var args = cljs.core.seq(arglist__47429);
return G__47427__delegate(args);
});
G__47427.cljs$core$IFn$_invoke$arity$variadic = G__47427__delegate;
return G__47427;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__47430__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__47430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47431__i = 0, G__47431__a = new Array(arguments.length -  0);
while (G__47431__i < G__47431__a.length) {G__47431__a[G__47431__i] = arguments[G__47431__i + 0]; ++G__47431__i;}
  args = new cljs.core.IndexedSeq(G__47431__a,0,null);
} 
return G__47430__delegate.call(this,args);};
G__47430.cljs$lang$maxFixedArity = 0;
G__47430.cljs$lang$applyTo = (function (arglist__47432){
var args = cljs.core.seq(arglist__47432);
return G__47430__delegate(args);
});
G__47430.cljs$core$IFn$_invoke$arity$variadic = G__47430__delegate;
return G__47430;
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
var G__47433__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__47433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47434__i = 0, G__47434__a = new Array(arguments.length -  0);
while (G__47434__i < G__47434__a.length) {G__47434__a[G__47434__i] = arguments[G__47434__i + 0]; ++G__47434__i;}
  args = new cljs.core.IndexedSeq(G__47434__a,0,null);
} 
return G__47433__delegate.call(this,args);};
G__47433.cljs$lang$maxFixedArity = 0;
G__47433.cljs$lang$applyTo = (function (arglist__47435){
var args = cljs.core.seq(arglist__47435);
return G__47433__delegate(args);
});
G__47433.cljs$core$IFn$_invoke$arity$variadic = G__47433__delegate;
return G__47433;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__47436__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__47436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47437__i = 0, G__47437__a = new Array(arguments.length -  0);
while (G__47437__i < G__47437__a.length) {G__47437__a[G__47437__i] = arguments[G__47437__i + 0]; ++G__47437__i;}
  args = new cljs.core.IndexedSeq(G__47437__a,0,null);
} 
return G__47436__delegate.call(this,args);};
G__47436.cljs$lang$maxFixedArity = 0;
G__47436.cljs$lang$applyTo = (function (arglist__47438){
var args = cljs.core.seq(arglist__47438);
return G__47436__delegate(args);
});
G__47436.cljs$core$IFn$_invoke$arity$variadic = G__47436__delegate;
return G__47436;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__47439__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__47439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47440__i = 0, G__47440__a = new Array(arguments.length -  0);
while (G__47440__i < G__47440__a.length) {G__47440__a[G__47440__i] = arguments[G__47440__i + 0]; ++G__47440__i;}
  args = new cljs.core.IndexedSeq(G__47440__a,0,null);
} 
return G__47439__delegate.call(this,args);};
G__47439.cljs$lang$maxFixedArity = 0;
G__47439.cljs$lang$applyTo = (function (arglist__47441){
var args = cljs.core.seq(arglist__47441);
return G__47439__delegate(args);
});
G__47439.cljs$core$IFn$_invoke$arity$variadic = G__47439__delegate;
return G__47439;
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
var G__47442__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__47442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47443__i = 0, G__47443__a = new Array(arguments.length -  0);
while (G__47443__i < G__47443__a.length) {G__47443__a[G__47443__i] = arguments[G__47443__i + 0]; ++G__47443__i;}
  args = new cljs.core.IndexedSeq(G__47443__a,0,null);
} 
return G__47442__delegate.call(this,args);};
G__47442.cljs$lang$maxFixedArity = 0;
G__47442.cljs$lang$applyTo = (function (arglist__47444){
var args = cljs.core.seq(arglist__47444);
return G__47442__delegate(args);
});
G__47442.cljs$core$IFn$_invoke$arity$variadic = G__47442__delegate;
return G__47442;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__47445__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__47445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47446__i = 0, G__47446__a = new Array(arguments.length -  0);
while (G__47446__i < G__47446__a.length) {G__47446__a[G__47446__i] = arguments[G__47446__i + 0]; ++G__47446__i;}
  args = new cljs.core.IndexedSeq(G__47446__a,0,null);
} 
return G__47445__delegate.call(this,args);};
G__47445.cljs$lang$maxFixedArity = 0;
G__47445.cljs$lang$applyTo = (function (arglist__47447){
var args = cljs.core.seq(arglist__47447);
return G__47445__delegate(args);
});
G__47445.cljs$core$IFn$_invoke$arity$variadic = G__47445__delegate;
return G__47445;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__47448__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__47448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47449__i = 0, G__47449__a = new Array(arguments.length -  0);
while (G__47449__i < G__47449__a.length) {G__47449__a[G__47449__i] = arguments[G__47449__i + 0]; ++G__47449__i;}
  args = new cljs.core.IndexedSeq(G__47449__a,0,null);
} 
return G__47448__delegate.call(this,args);};
G__47448.cljs$lang$maxFixedArity = 0;
G__47448.cljs$lang$applyTo = (function (arglist__47450){
var args = cljs.core.seq(arglist__47450);
return G__47448__delegate(args);
});
G__47448.cljs$core$IFn$_invoke$arity$variadic = G__47448__delegate;
return G__47448;
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
var G__47451__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__47451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47452__i = 0, G__47452__a = new Array(arguments.length -  0);
while (G__47452__i < G__47452__a.length) {G__47452__a[G__47452__i] = arguments[G__47452__i + 0]; ++G__47452__i;}
  args = new cljs.core.IndexedSeq(G__47452__a,0,null);
} 
return G__47451__delegate.call(this,args);};
G__47451.cljs$lang$maxFixedArity = 0;
G__47451.cljs$lang$applyTo = (function (arglist__47453){
var args = cljs.core.seq(arglist__47453);
return G__47451__delegate(args);
});
G__47451.cljs$core$IFn$_invoke$arity$variadic = G__47451__delegate;
return G__47451;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__47454__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__47454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47455__i = 0, G__47455__a = new Array(arguments.length -  0);
while (G__47455__i < G__47455__a.length) {G__47455__a[G__47455__i] = arguments[G__47455__i + 0]; ++G__47455__i;}
  args = new cljs.core.IndexedSeq(G__47455__a,0,null);
} 
return G__47454__delegate.call(this,args);};
G__47454.cljs$lang$maxFixedArity = 0;
G__47454.cljs$lang$applyTo = (function (arglist__47456){
var args = cljs.core.seq(arglist__47456);
return G__47454__delegate(args);
});
G__47454.cljs$core$IFn$_invoke$arity$variadic = G__47454__delegate;
return G__47454;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__47457__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__47457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47458__i = 0, G__47458__a = new Array(arguments.length -  0);
while (G__47458__i < G__47458__a.length) {G__47458__a[G__47458__i] = arguments[G__47458__i + 0]; ++G__47458__i;}
  args = new cljs.core.IndexedSeq(G__47458__a,0,null);
} 
return G__47457__delegate.call(this,args);};
G__47457.cljs$lang$maxFixedArity = 0;
G__47457.cljs$lang$applyTo = (function (arglist__47459){
var args = cljs.core.seq(arglist__47459);
return G__47457__delegate(args);
});
G__47457.cljs$core$IFn$_invoke$arity$variadic = G__47457__delegate;
return G__47457;
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
var G__47460__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__47460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47461__i = 0, G__47461__a = new Array(arguments.length -  0);
while (G__47461__i < G__47461__a.length) {G__47461__a[G__47461__i] = arguments[G__47461__i + 0]; ++G__47461__i;}
  args = new cljs.core.IndexedSeq(G__47461__a,0,null);
} 
return G__47460__delegate.call(this,args);};
G__47460.cljs$lang$maxFixedArity = 0;
G__47460.cljs$lang$applyTo = (function (arglist__47462){
var args = cljs.core.seq(arglist__47462);
return G__47460__delegate(args);
});
G__47460.cljs$core$IFn$_invoke$arity$variadic = G__47460__delegate;
return G__47460;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__47463__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__47463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47464__i = 0, G__47464__a = new Array(arguments.length -  0);
while (G__47464__i < G__47464__a.length) {G__47464__a[G__47464__i] = arguments[G__47464__i + 0]; ++G__47464__i;}
  args = new cljs.core.IndexedSeq(G__47464__a,0,null);
} 
return G__47463__delegate.call(this,args);};
G__47463.cljs$lang$maxFixedArity = 0;
G__47463.cljs$lang$applyTo = (function (arglist__47465){
var args = cljs.core.seq(arglist__47465);
return G__47463__delegate(args);
});
G__47463.cljs$core$IFn$_invoke$arity$variadic = G__47463__delegate;
return G__47463;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__47466__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__47466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47467__i = 0, G__47467__a = new Array(arguments.length -  0);
while (G__47467__i < G__47467__a.length) {G__47467__a[G__47467__i] = arguments[G__47467__i + 0]; ++G__47467__i;}
  args = new cljs.core.IndexedSeq(G__47467__a,0,null);
} 
return G__47466__delegate.call(this,args);};
G__47466.cljs$lang$maxFixedArity = 0;
G__47466.cljs$lang$applyTo = (function (arglist__47468){
var args = cljs.core.seq(arglist__47468);
return G__47466__delegate(args);
});
G__47466.cljs$core$IFn$_invoke$arity$variadic = G__47466__delegate;
return G__47466;
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
var G__47469__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__47469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47470__i = 0, G__47470__a = new Array(arguments.length -  0);
while (G__47470__i < G__47470__a.length) {G__47470__a[G__47470__i] = arguments[G__47470__i + 0]; ++G__47470__i;}
  args = new cljs.core.IndexedSeq(G__47470__a,0,null);
} 
return G__47469__delegate.call(this,args);};
G__47469.cljs$lang$maxFixedArity = 0;
G__47469.cljs$lang$applyTo = (function (arglist__47471){
var args = cljs.core.seq(arglist__47471);
return G__47469__delegate(args);
});
G__47469.cljs$core$IFn$_invoke$arity$variadic = G__47469__delegate;
return G__47469;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__47472__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__47472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47473__i = 0, G__47473__a = new Array(arguments.length -  0);
while (G__47473__i < G__47473__a.length) {G__47473__a[G__47473__i] = arguments[G__47473__i + 0]; ++G__47473__i;}
  args = new cljs.core.IndexedSeq(G__47473__a,0,null);
} 
return G__47472__delegate.call(this,args);};
G__47472.cljs$lang$maxFixedArity = 0;
G__47472.cljs$lang$applyTo = (function (arglist__47474){
var args = cljs.core.seq(arglist__47474);
return G__47472__delegate(args);
});
G__47472.cljs$core$IFn$_invoke$arity$variadic = G__47472__delegate;
return G__47472;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__47475__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__47475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47476__i = 0, G__47476__a = new Array(arguments.length -  0);
while (G__47476__i < G__47476__a.length) {G__47476__a[G__47476__i] = arguments[G__47476__i + 0]; ++G__47476__i;}
  args = new cljs.core.IndexedSeq(G__47476__a,0,null);
} 
return G__47475__delegate.call(this,args);};
G__47475.cljs$lang$maxFixedArity = 0;
G__47475.cljs$lang$applyTo = (function (arglist__47477){
var args = cljs.core.seq(arglist__47477);
return G__47475__delegate(args);
});
G__47475.cljs$core$IFn$_invoke$arity$variadic = G__47475__delegate;
return G__47475;
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
var G__47478__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__47478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47479__i = 0, G__47479__a = new Array(arguments.length -  0);
while (G__47479__i < G__47479__a.length) {G__47479__a[G__47479__i] = arguments[G__47479__i + 0]; ++G__47479__i;}
  args = new cljs.core.IndexedSeq(G__47479__a,0,null);
} 
return G__47478__delegate.call(this,args);};
G__47478.cljs$lang$maxFixedArity = 0;
G__47478.cljs$lang$applyTo = (function (arglist__47480){
var args = cljs.core.seq(arglist__47480);
return G__47478__delegate(args);
});
G__47478.cljs$core$IFn$_invoke$arity$variadic = G__47478__delegate;
return G__47478;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__47481__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__47481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47482__i = 0, G__47482__a = new Array(arguments.length -  0);
while (G__47482__i < G__47482__a.length) {G__47482__a[G__47482__i] = arguments[G__47482__i + 0]; ++G__47482__i;}
  args = new cljs.core.IndexedSeq(G__47482__a,0,null);
} 
return G__47481__delegate.call(this,args);};
G__47481.cljs$lang$maxFixedArity = 0;
G__47481.cljs$lang$applyTo = (function (arglist__47483){
var args = cljs.core.seq(arglist__47483);
return G__47481__delegate(args);
});
G__47481.cljs$core$IFn$_invoke$arity$variadic = G__47481__delegate;
return G__47481;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__47484__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__47484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47485__i = 0, G__47485__a = new Array(arguments.length -  0);
while (G__47485__i < G__47485__a.length) {G__47485__a[G__47485__i] = arguments[G__47485__i + 0]; ++G__47485__i;}
  args = new cljs.core.IndexedSeq(G__47485__a,0,null);
} 
return G__47484__delegate.call(this,args);};
G__47484.cljs$lang$maxFixedArity = 0;
G__47484.cljs$lang$applyTo = (function (arglist__47486){
var args = cljs.core.seq(arglist__47486);
return G__47484__delegate(args);
});
G__47484.cljs$core$IFn$_invoke$arity$variadic = G__47484__delegate;
return G__47484;
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
var G__47487__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__47487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47488__i = 0, G__47488__a = new Array(arguments.length -  0);
while (G__47488__i < G__47488__a.length) {G__47488__a[G__47488__i] = arguments[G__47488__i + 0]; ++G__47488__i;}
  args = new cljs.core.IndexedSeq(G__47488__a,0,null);
} 
return G__47487__delegate.call(this,args);};
G__47487.cljs$lang$maxFixedArity = 0;
G__47487.cljs$lang$applyTo = (function (arglist__47489){
var args = cljs.core.seq(arglist__47489);
return G__47487__delegate(args);
});
G__47487.cljs$core$IFn$_invoke$arity$variadic = G__47487__delegate;
return G__47487;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__47490__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__47490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47491__i = 0, G__47491__a = new Array(arguments.length -  0);
while (G__47491__i < G__47491__a.length) {G__47491__a[G__47491__i] = arguments[G__47491__i + 0]; ++G__47491__i;}
  args = new cljs.core.IndexedSeq(G__47491__a,0,null);
} 
return G__47490__delegate.call(this,args);};
G__47490.cljs$lang$maxFixedArity = 0;
G__47490.cljs$lang$applyTo = (function (arglist__47492){
var args = cljs.core.seq(arglist__47492);
return G__47490__delegate(args);
});
G__47490.cljs$core$IFn$_invoke$arity$variadic = G__47490__delegate;
return G__47490;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__47493__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__47493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47494__i = 0, G__47494__a = new Array(arguments.length -  0);
while (G__47494__i < G__47494__a.length) {G__47494__a[G__47494__i] = arguments[G__47494__i + 0]; ++G__47494__i;}
  args = new cljs.core.IndexedSeq(G__47494__a,0,null);
} 
return G__47493__delegate.call(this,args);};
G__47493.cljs$lang$maxFixedArity = 0;
G__47493.cljs$lang$applyTo = (function (arglist__47495){
var args = cljs.core.seq(arglist__47495);
return G__47493__delegate(args);
});
G__47493.cljs$core$IFn$_invoke$arity$variadic = G__47493__delegate;
return G__47493;
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

//# sourceMappingURL=core.js.map?rel=1526523043418
