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
var G__40503__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40504__i = 0, G__40504__a = new Array(arguments.length -  0);
while (G__40504__i < G__40504__a.length) {G__40504__a[G__40504__i] = arguments[G__40504__i + 0]; ++G__40504__i;}
  args = new cljs.core.IndexedSeq(G__40504__a,0,null);
} 
return G__40503__delegate.call(this,args);};
G__40503.cljs$lang$maxFixedArity = 0;
G__40503.cljs$lang$applyTo = (function (arglist__40505){
var args = cljs.core.seq(arglist__40505);
return G__40503__delegate(args);
});
G__40503.cljs$core$IFn$_invoke$arity$variadic = G__40503__delegate;
return G__40503;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40506__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40507__i = 0, G__40507__a = new Array(arguments.length -  0);
while (G__40507__i < G__40507__a.length) {G__40507__a[G__40507__i] = arguments[G__40507__i + 0]; ++G__40507__i;}
  args = new cljs.core.IndexedSeq(G__40507__a,0,null);
} 
return G__40506__delegate.call(this,args);};
G__40506.cljs$lang$maxFixedArity = 0;
G__40506.cljs$lang$applyTo = (function (arglist__40508){
var args = cljs.core.seq(arglist__40508);
return G__40506__delegate(args);
});
G__40506.cljs$core$IFn$_invoke$arity$variadic = G__40506__delegate;
return G__40506;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40509__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40510__i = 0, G__40510__a = new Array(arguments.length -  0);
while (G__40510__i < G__40510__a.length) {G__40510__a[G__40510__i] = arguments[G__40510__i + 0]; ++G__40510__i;}
  args = new cljs.core.IndexedSeq(G__40510__a,0,null);
} 
return G__40509__delegate.call(this,args);};
G__40509.cljs$lang$maxFixedArity = 0;
G__40509.cljs$lang$applyTo = (function (arglist__40511){
var args = cljs.core.seq(arglist__40511);
return G__40509__delegate(args);
});
G__40509.cljs$core$IFn$_invoke$arity$variadic = G__40509__delegate;
return G__40509;
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
var G__40512__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40513__i = 0, G__40513__a = new Array(arguments.length -  0);
while (G__40513__i < G__40513__a.length) {G__40513__a[G__40513__i] = arguments[G__40513__i + 0]; ++G__40513__i;}
  args = new cljs.core.IndexedSeq(G__40513__a,0,null);
} 
return G__40512__delegate.call(this,args);};
G__40512.cljs$lang$maxFixedArity = 0;
G__40512.cljs$lang$applyTo = (function (arglist__40514){
var args = cljs.core.seq(arglist__40514);
return G__40512__delegate(args);
});
G__40512.cljs$core$IFn$_invoke$arity$variadic = G__40512__delegate;
return G__40512;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40515__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40516__i = 0, G__40516__a = new Array(arguments.length -  0);
while (G__40516__i < G__40516__a.length) {G__40516__a[G__40516__i] = arguments[G__40516__i + 0]; ++G__40516__i;}
  args = new cljs.core.IndexedSeq(G__40516__a,0,null);
} 
return G__40515__delegate.call(this,args);};
G__40515.cljs$lang$maxFixedArity = 0;
G__40515.cljs$lang$applyTo = (function (arglist__40517){
var args = cljs.core.seq(arglist__40517);
return G__40515__delegate(args);
});
G__40515.cljs$core$IFn$_invoke$arity$variadic = G__40515__delegate;
return G__40515;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40518__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40519__i = 0, G__40519__a = new Array(arguments.length -  0);
while (G__40519__i < G__40519__a.length) {G__40519__a[G__40519__i] = arguments[G__40519__i + 0]; ++G__40519__i;}
  args = new cljs.core.IndexedSeq(G__40519__a,0,null);
} 
return G__40518__delegate.call(this,args);};
G__40518.cljs$lang$maxFixedArity = 0;
G__40518.cljs$lang$applyTo = (function (arglist__40520){
var args = cljs.core.seq(arglist__40520);
return G__40518__delegate(args);
});
G__40518.cljs$core$IFn$_invoke$arity$variadic = G__40518__delegate;
return G__40518;
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
var G__40521__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40522__i = 0, G__40522__a = new Array(arguments.length -  0);
while (G__40522__i < G__40522__a.length) {G__40522__a[G__40522__i] = arguments[G__40522__i + 0]; ++G__40522__i;}
  args = new cljs.core.IndexedSeq(G__40522__a,0,null);
} 
return G__40521__delegate.call(this,args);};
G__40521.cljs$lang$maxFixedArity = 0;
G__40521.cljs$lang$applyTo = (function (arglist__40523){
var args = cljs.core.seq(arglist__40523);
return G__40521__delegate(args);
});
G__40521.cljs$core$IFn$_invoke$arity$variadic = G__40521__delegate;
return G__40521;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40524__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40525__i = 0, G__40525__a = new Array(arguments.length -  0);
while (G__40525__i < G__40525__a.length) {G__40525__a[G__40525__i] = arguments[G__40525__i + 0]; ++G__40525__i;}
  args = new cljs.core.IndexedSeq(G__40525__a,0,null);
} 
return G__40524__delegate.call(this,args);};
G__40524.cljs$lang$maxFixedArity = 0;
G__40524.cljs$lang$applyTo = (function (arglist__40526){
var args = cljs.core.seq(arglist__40526);
return G__40524__delegate(args);
});
G__40524.cljs$core$IFn$_invoke$arity$variadic = G__40524__delegate;
return G__40524;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40527__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40528__i = 0, G__40528__a = new Array(arguments.length -  0);
while (G__40528__i < G__40528__a.length) {G__40528__a[G__40528__i] = arguments[G__40528__i + 0]; ++G__40528__i;}
  args = new cljs.core.IndexedSeq(G__40528__a,0,null);
} 
return G__40527__delegate.call(this,args);};
G__40527.cljs$lang$maxFixedArity = 0;
G__40527.cljs$lang$applyTo = (function (arglist__40529){
var args = cljs.core.seq(arglist__40529);
return G__40527__delegate(args);
});
G__40527.cljs$core$IFn$_invoke$arity$variadic = G__40527__delegate;
return G__40527;
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
var G__40530__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40531__i = 0, G__40531__a = new Array(arguments.length -  0);
while (G__40531__i < G__40531__a.length) {G__40531__a[G__40531__i] = arguments[G__40531__i + 0]; ++G__40531__i;}
  args = new cljs.core.IndexedSeq(G__40531__a,0,null);
} 
return G__40530__delegate.call(this,args);};
G__40530.cljs$lang$maxFixedArity = 0;
G__40530.cljs$lang$applyTo = (function (arglist__40532){
var args = cljs.core.seq(arglist__40532);
return G__40530__delegate(args);
});
G__40530.cljs$core$IFn$_invoke$arity$variadic = G__40530__delegate;
return G__40530;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40533__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40534__i = 0, G__40534__a = new Array(arguments.length -  0);
while (G__40534__i < G__40534__a.length) {G__40534__a[G__40534__i] = arguments[G__40534__i + 0]; ++G__40534__i;}
  args = new cljs.core.IndexedSeq(G__40534__a,0,null);
} 
return G__40533__delegate.call(this,args);};
G__40533.cljs$lang$maxFixedArity = 0;
G__40533.cljs$lang$applyTo = (function (arglist__40535){
var args = cljs.core.seq(arglist__40535);
return G__40533__delegate(args);
});
G__40533.cljs$core$IFn$_invoke$arity$variadic = G__40533__delegate;
return G__40533;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40536__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40537__i = 0, G__40537__a = new Array(arguments.length -  0);
while (G__40537__i < G__40537__a.length) {G__40537__a[G__40537__i] = arguments[G__40537__i + 0]; ++G__40537__i;}
  args = new cljs.core.IndexedSeq(G__40537__a,0,null);
} 
return G__40536__delegate.call(this,args);};
G__40536.cljs$lang$maxFixedArity = 0;
G__40536.cljs$lang$applyTo = (function (arglist__40538){
var args = cljs.core.seq(arglist__40538);
return G__40536__delegate(args);
});
G__40536.cljs$core$IFn$_invoke$arity$variadic = G__40536__delegate;
return G__40536;
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
var G__40539__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40540__i = 0, G__40540__a = new Array(arguments.length -  0);
while (G__40540__i < G__40540__a.length) {G__40540__a[G__40540__i] = arguments[G__40540__i + 0]; ++G__40540__i;}
  args = new cljs.core.IndexedSeq(G__40540__a,0,null);
} 
return G__40539__delegate.call(this,args);};
G__40539.cljs$lang$maxFixedArity = 0;
G__40539.cljs$lang$applyTo = (function (arglist__40541){
var args = cljs.core.seq(arglist__40541);
return G__40539__delegate(args);
});
G__40539.cljs$core$IFn$_invoke$arity$variadic = G__40539__delegate;
return G__40539;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40542__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40543__i = 0, G__40543__a = new Array(arguments.length -  0);
while (G__40543__i < G__40543__a.length) {G__40543__a[G__40543__i] = arguments[G__40543__i + 0]; ++G__40543__i;}
  args = new cljs.core.IndexedSeq(G__40543__a,0,null);
} 
return G__40542__delegate.call(this,args);};
G__40542.cljs$lang$maxFixedArity = 0;
G__40542.cljs$lang$applyTo = (function (arglist__40544){
var args = cljs.core.seq(arglist__40544);
return G__40542__delegate(args);
});
G__40542.cljs$core$IFn$_invoke$arity$variadic = G__40542__delegate;
return G__40542;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40545__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40546__i = 0, G__40546__a = new Array(arguments.length -  0);
while (G__40546__i < G__40546__a.length) {G__40546__a[G__40546__i] = arguments[G__40546__i + 0]; ++G__40546__i;}
  args = new cljs.core.IndexedSeq(G__40546__a,0,null);
} 
return G__40545__delegate.call(this,args);};
G__40545.cljs$lang$maxFixedArity = 0;
G__40545.cljs$lang$applyTo = (function (arglist__40547){
var args = cljs.core.seq(arglist__40547);
return G__40545__delegate(args);
});
G__40545.cljs$core$IFn$_invoke$arity$variadic = G__40545__delegate;
return G__40545;
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
var G__40548__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40549__i = 0, G__40549__a = new Array(arguments.length -  0);
while (G__40549__i < G__40549__a.length) {G__40549__a[G__40549__i] = arguments[G__40549__i + 0]; ++G__40549__i;}
  args = new cljs.core.IndexedSeq(G__40549__a,0,null);
} 
return G__40548__delegate.call(this,args);};
G__40548.cljs$lang$maxFixedArity = 0;
G__40548.cljs$lang$applyTo = (function (arglist__40550){
var args = cljs.core.seq(arglist__40550);
return G__40548__delegate(args);
});
G__40548.cljs$core$IFn$_invoke$arity$variadic = G__40548__delegate;
return G__40548;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40551__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40552__i = 0, G__40552__a = new Array(arguments.length -  0);
while (G__40552__i < G__40552__a.length) {G__40552__a[G__40552__i] = arguments[G__40552__i + 0]; ++G__40552__i;}
  args = new cljs.core.IndexedSeq(G__40552__a,0,null);
} 
return G__40551__delegate.call(this,args);};
G__40551.cljs$lang$maxFixedArity = 0;
G__40551.cljs$lang$applyTo = (function (arglist__40553){
var args = cljs.core.seq(arglist__40553);
return G__40551__delegate(args);
});
G__40551.cljs$core$IFn$_invoke$arity$variadic = G__40551__delegate;
return G__40551;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40554__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40555__i = 0, G__40555__a = new Array(arguments.length -  0);
while (G__40555__i < G__40555__a.length) {G__40555__a[G__40555__i] = arguments[G__40555__i + 0]; ++G__40555__i;}
  args = new cljs.core.IndexedSeq(G__40555__a,0,null);
} 
return G__40554__delegate.call(this,args);};
G__40554.cljs$lang$maxFixedArity = 0;
G__40554.cljs$lang$applyTo = (function (arglist__40556){
var args = cljs.core.seq(arglist__40556);
return G__40554__delegate(args);
});
G__40554.cljs$core$IFn$_invoke$arity$variadic = G__40554__delegate;
return G__40554;
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
var G__40557__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40558__i = 0, G__40558__a = new Array(arguments.length -  0);
while (G__40558__i < G__40558__a.length) {G__40558__a[G__40558__i] = arguments[G__40558__i + 0]; ++G__40558__i;}
  args = new cljs.core.IndexedSeq(G__40558__a,0,null);
} 
return G__40557__delegate.call(this,args);};
G__40557.cljs$lang$maxFixedArity = 0;
G__40557.cljs$lang$applyTo = (function (arglist__40559){
var args = cljs.core.seq(arglist__40559);
return G__40557__delegate(args);
});
G__40557.cljs$core$IFn$_invoke$arity$variadic = G__40557__delegate;
return G__40557;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40560__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40561__i = 0, G__40561__a = new Array(arguments.length -  0);
while (G__40561__i < G__40561__a.length) {G__40561__a[G__40561__i] = arguments[G__40561__i + 0]; ++G__40561__i;}
  args = new cljs.core.IndexedSeq(G__40561__a,0,null);
} 
return G__40560__delegate.call(this,args);};
G__40560.cljs$lang$maxFixedArity = 0;
G__40560.cljs$lang$applyTo = (function (arglist__40562){
var args = cljs.core.seq(arglist__40562);
return G__40560__delegate(args);
});
G__40560.cljs$core$IFn$_invoke$arity$variadic = G__40560__delegate;
return G__40560;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40563__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40564__i = 0, G__40564__a = new Array(arguments.length -  0);
while (G__40564__i < G__40564__a.length) {G__40564__a[G__40564__i] = arguments[G__40564__i + 0]; ++G__40564__i;}
  args = new cljs.core.IndexedSeq(G__40564__a,0,null);
} 
return G__40563__delegate.call(this,args);};
G__40563.cljs$lang$maxFixedArity = 0;
G__40563.cljs$lang$applyTo = (function (arglist__40565){
var args = cljs.core.seq(arglist__40565);
return G__40563__delegate(args);
});
G__40563.cljs$core$IFn$_invoke$arity$variadic = G__40563__delegate;
return G__40563;
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
var G__40566__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40567__i = 0, G__40567__a = new Array(arguments.length -  0);
while (G__40567__i < G__40567__a.length) {G__40567__a[G__40567__i] = arguments[G__40567__i + 0]; ++G__40567__i;}
  args = new cljs.core.IndexedSeq(G__40567__a,0,null);
} 
return G__40566__delegate.call(this,args);};
G__40566.cljs$lang$maxFixedArity = 0;
G__40566.cljs$lang$applyTo = (function (arglist__40568){
var args = cljs.core.seq(arglist__40568);
return G__40566__delegate(args);
});
G__40566.cljs$core$IFn$_invoke$arity$variadic = G__40566__delegate;
return G__40566;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40569__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40570__i = 0, G__40570__a = new Array(arguments.length -  0);
while (G__40570__i < G__40570__a.length) {G__40570__a[G__40570__i] = arguments[G__40570__i + 0]; ++G__40570__i;}
  args = new cljs.core.IndexedSeq(G__40570__a,0,null);
} 
return G__40569__delegate.call(this,args);};
G__40569.cljs$lang$maxFixedArity = 0;
G__40569.cljs$lang$applyTo = (function (arglist__40571){
var args = cljs.core.seq(arglist__40571);
return G__40569__delegate(args);
});
G__40569.cljs$core$IFn$_invoke$arity$variadic = G__40569__delegate;
return G__40569;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40572__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40573__i = 0, G__40573__a = new Array(arguments.length -  0);
while (G__40573__i < G__40573__a.length) {G__40573__a[G__40573__i] = arguments[G__40573__i + 0]; ++G__40573__i;}
  args = new cljs.core.IndexedSeq(G__40573__a,0,null);
} 
return G__40572__delegate.call(this,args);};
G__40572.cljs$lang$maxFixedArity = 0;
G__40572.cljs$lang$applyTo = (function (arglist__40574){
var args = cljs.core.seq(arglist__40574);
return G__40572__delegate(args);
});
G__40572.cljs$core$IFn$_invoke$arity$variadic = G__40572__delegate;
return G__40572;
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

squiggle.core.sketch_primitive_starry_night = (function squiggle$core$run_sketch_$_sketch_primitive_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"primitive-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.update_state))?(function() { 
var G__40575__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__40575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40576__i = 0, G__40576__a = new Array(arguments.length -  0);
while (G__40576__i < G__40576__a.length) {G__40576__a[G__40576__i] = arguments[G__40576__i + 0]; ++G__40576__i;}
  args = new cljs.core.IndexedSeq(G__40576__a,0,null);
} 
return G__40575__delegate.call(this,args);};
G__40575.cljs$lang$maxFixedArity = 0;
G__40575.cljs$lang$applyTo = (function (arglist__40577){
var args = cljs.core.seq(arglist__40577);
return G__40575__delegate(args);
});
G__40575.cljs$core$IFn$_invoke$arity$variadic = G__40575__delegate;
return G__40575;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__40578__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__40578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40579__i = 0, G__40579__a = new Array(arguments.length -  0);
while (G__40579__i < G__40579__a.length) {G__40579__a[G__40579__i] = arguments[G__40579__i + 0]; ++G__40579__i;}
  args = new cljs.core.IndexedSeq(G__40579__a,0,null);
} 
return G__40578__delegate.call(this,args);};
G__40578.cljs$lang$maxFixedArity = 0;
G__40578.cljs$lang$applyTo = (function (arglist__40580){
var args = cljs.core.seq(arglist__40580);
return G__40578__delegate(args);
});
G__40578.cljs$core$IFn$_invoke$arity$variadic = G__40578__delegate;
return G__40578;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__40581__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__40581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40582__i = 0, G__40582__a = new Array(arguments.length -  0);
while (G__40582__i < G__40582__a.length) {G__40582__a[G__40582__i] = arguments[G__40582__i + 0]; ++G__40582__i;}
  args = new cljs.core.IndexedSeq(G__40582__a,0,null);
} 
return G__40581__delegate.call(this,args);};
G__40581.cljs$lang$maxFixedArity = 0;
G__40581.cljs$lang$applyTo = (function (arglist__40583){
var args = cljs.core.seq(arglist__40583);
return G__40581__delegate(args);
});
G__40581.cljs$core$IFn$_invoke$arity$variadic = G__40581__delegate;
return G__40581;
})()
:squiggle.primitive.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_primitive_starry_night', squiggle.core.sketch_primitive_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_primitive_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"primitive-starry-night"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526517670160
