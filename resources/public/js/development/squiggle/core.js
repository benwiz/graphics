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
var G__39283__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39284__i = 0, G__39284__a = new Array(arguments.length -  0);
while (G__39284__i < G__39284__a.length) {G__39284__a[G__39284__i] = arguments[G__39284__i + 0]; ++G__39284__i;}
  args = new cljs.core.IndexedSeq(G__39284__a,0,null);
} 
return G__39283__delegate.call(this,args);};
G__39283.cljs$lang$maxFixedArity = 0;
G__39283.cljs$lang$applyTo = (function (arglist__39285){
var args = cljs.core.seq(arglist__39285);
return G__39283__delegate(args);
});
G__39283.cljs$core$IFn$_invoke$arity$variadic = G__39283__delegate;
return G__39283;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39286__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39287__i = 0, G__39287__a = new Array(arguments.length -  0);
while (G__39287__i < G__39287__a.length) {G__39287__a[G__39287__i] = arguments[G__39287__i + 0]; ++G__39287__i;}
  args = new cljs.core.IndexedSeq(G__39287__a,0,null);
} 
return G__39286__delegate.call(this,args);};
G__39286.cljs$lang$maxFixedArity = 0;
G__39286.cljs$lang$applyTo = (function (arglist__39288){
var args = cljs.core.seq(arglist__39288);
return G__39286__delegate(args);
});
G__39286.cljs$core$IFn$_invoke$arity$variadic = G__39286__delegate;
return G__39286;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39289__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39290__i = 0, G__39290__a = new Array(arguments.length -  0);
while (G__39290__i < G__39290__a.length) {G__39290__a[G__39290__i] = arguments[G__39290__i + 0]; ++G__39290__i;}
  args = new cljs.core.IndexedSeq(G__39290__a,0,null);
} 
return G__39289__delegate.call(this,args);};
G__39289.cljs$lang$maxFixedArity = 0;
G__39289.cljs$lang$applyTo = (function (arglist__39291){
var args = cljs.core.seq(arglist__39291);
return G__39289__delegate(args);
});
G__39289.cljs$core$IFn$_invoke$arity$variadic = G__39289__delegate;
return G__39289;
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
var G__39292__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39293__i = 0, G__39293__a = new Array(arguments.length -  0);
while (G__39293__i < G__39293__a.length) {G__39293__a[G__39293__i] = arguments[G__39293__i + 0]; ++G__39293__i;}
  args = new cljs.core.IndexedSeq(G__39293__a,0,null);
} 
return G__39292__delegate.call(this,args);};
G__39292.cljs$lang$maxFixedArity = 0;
G__39292.cljs$lang$applyTo = (function (arglist__39294){
var args = cljs.core.seq(arglist__39294);
return G__39292__delegate(args);
});
G__39292.cljs$core$IFn$_invoke$arity$variadic = G__39292__delegate;
return G__39292;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39295__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39296__i = 0, G__39296__a = new Array(arguments.length -  0);
while (G__39296__i < G__39296__a.length) {G__39296__a[G__39296__i] = arguments[G__39296__i + 0]; ++G__39296__i;}
  args = new cljs.core.IndexedSeq(G__39296__a,0,null);
} 
return G__39295__delegate.call(this,args);};
G__39295.cljs$lang$maxFixedArity = 0;
G__39295.cljs$lang$applyTo = (function (arglist__39297){
var args = cljs.core.seq(arglist__39297);
return G__39295__delegate(args);
});
G__39295.cljs$core$IFn$_invoke$arity$variadic = G__39295__delegate;
return G__39295;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39298__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39299__i = 0, G__39299__a = new Array(arguments.length -  0);
while (G__39299__i < G__39299__a.length) {G__39299__a[G__39299__i] = arguments[G__39299__i + 0]; ++G__39299__i;}
  args = new cljs.core.IndexedSeq(G__39299__a,0,null);
} 
return G__39298__delegate.call(this,args);};
G__39298.cljs$lang$maxFixedArity = 0;
G__39298.cljs$lang$applyTo = (function (arglist__39300){
var args = cljs.core.seq(arglist__39300);
return G__39298__delegate(args);
});
G__39298.cljs$core$IFn$_invoke$arity$variadic = G__39298__delegate;
return G__39298;
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
var G__39301__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39302__i = 0, G__39302__a = new Array(arguments.length -  0);
while (G__39302__i < G__39302__a.length) {G__39302__a[G__39302__i] = arguments[G__39302__i + 0]; ++G__39302__i;}
  args = new cljs.core.IndexedSeq(G__39302__a,0,null);
} 
return G__39301__delegate.call(this,args);};
G__39301.cljs$lang$maxFixedArity = 0;
G__39301.cljs$lang$applyTo = (function (arglist__39303){
var args = cljs.core.seq(arglist__39303);
return G__39301__delegate(args);
});
G__39301.cljs$core$IFn$_invoke$arity$variadic = G__39301__delegate;
return G__39301;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39304__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39305__i = 0, G__39305__a = new Array(arguments.length -  0);
while (G__39305__i < G__39305__a.length) {G__39305__a[G__39305__i] = arguments[G__39305__i + 0]; ++G__39305__i;}
  args = new cljs.core.IndexedSeq(G__39305__a,0,null);
} 
return G__39304__delegate.call(this,args);};
G__39304.cljs$lang$maxFixedArity = 0;
G__39304.cljs$lang$applyTo = (function (arglist__39306){
var args = cljs.core.seq(arglist__39306);
return G__39304__delegate(args);
});
G__39304.cljs$core$IFn$_invoke$arity$variadic = G__39304__delegate;
return G__39304;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39307__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39308__i = 0, G__39308__a = new Array(arguments.length -  0);
while (G__39308__i < G__39308__a.length) {G__39308__a[G__39308__i] = arguments[G__39308__i + 0]; ++G__39308__i;}
  args = new cljs.core.IndexedSeq(G__39308__a,0,null);
} 
return G__39307__delegate.call(this,args);};
G__39307.cljs$lang$maxFixedArity = 0;
G__39307.cljs$lang$applyTo = (function (arglist__39309){
var args = cljs.core.seq(arglist__39309);
return G__39307__delegate(args);
});
G__39307.cljs$core$IFn$_invoke$arity$variadic = G__39307__delegate;
return G__39307;
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
var G__39310__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39311__i = 0, G__39311__a = new Array(arguments.length -  0);
while (G__39311__i < G__39311__a.length) {G__39311__a[G__39311__i] = arguments[G__39311__i + 0]; ++G__39311__i;}
  args = new cljs.core.IndexedSeq(G__39311__a,0,null);
} 
return G__39310__delegate.call(this,args);};
G__39310.cljs$lang$maxFixedArity = 0;
G__39310.cljs$lang$applyTo = (function (arglist__39312){
var args = cljs.core.seq(arglist__39312);
return G__39310__delegate(args);
});
G__39310.cljs$core$IFn$_invoke$arity$variadic = G__39310__delegate;
return G__39310;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39313__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39314__i = 0, G__39314__a = new Array(arguments.length -  0);
while (G__39314__i < G__39314__a.length) {G__39314__a[G__39314__i] = arguments[G__39314__i + 0]; ++G__39314__i;}
  args = new cljs.core.IndexedSeq(G__39314__a,0,null);
} 
return G__39313__delegate.call(this,args);};
G__39313.cljs$lang$maxFixedArity = 0;
G__39313.cljs$lang$applyTo = (function (arglist__39315){
var args = cljs.core.seq(arglist__39315);
return G__39313__delegate(args);
});
G__39313.cljs$core$IFn$_invoke$arity$variadic = G__39313__delegate;
return G__39313;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39316__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39317__i = 0, G__39317__a = new Array(arguments.length -  0);
while (G__39317__i < G__39317__a.length) {G__39317__a[G__39317__i] = arguments[G__39317__i + 0]; ++G__39317__i;}
  args = new cljs.core.IndexedSeq(G__39317__a,0,null);
} 
return G__39316__delegate.call(this,args);};
G__39316.cljs$lang$maxFixedArity = 0;
G__39316.cljs$lang$applyTo = (function (arglist__39318){
var args = cljs.core.seq(arglist__39318);
return G__39316__delegate(args);
});
G__39316.cljs$core$IFn$_invoke$arity$variadic = G__39316__delegate;
return G__39316;
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
var G__39319__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39320__i = 0, G__39320__a = new Array(arguments.length -  0);
while (G__39320__i < G__39320__a.length) {G__39320__a[G__39320__i] = arguments[G__39320__i + 0]; ++G__39320__i;}
  args = new cljs.core.IndexedSeq(G__39320__a,0,null);
} 
return G__39319__delegate.call(this,args);};
G__39319.cljs$lang$maxFixedArity = 0;
G__39319.cljs$lang$applyTo = (function (arglist__39321){
var args = cljs.core.seq(arglist__39321);
return G__39319__delegate(args);
});
G__39319.cljs$core$IFn$_invoke$arity$variadic = G__39319__delegate;
return G__39319;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39322__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39323__i = 0, G__39323__a = new Array(arguments.length -  0);
while (G__39323__i < G__39323__a.length) {G__39323__a[G__39323__i] = arguments[G__39323__i + 0]; ++G__39323__i;}
  args = new cljs.core.IndexedSeq(G__39323__a,0,null);
} 
return G__39322__delegate.call(this,args);};
G__39322.cljs$lang$maxFixedArity = 0;
G__39322.cljs$lang$applyTo = (function (arglist__39324){
var args = cljs.core.seq(arglist__39324);
return G__39322__delegate(args);
});
G__39322.cljs$core$IFn$_invoke$arity$variadic = G__39322__delegate;
return G__39322;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39325__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39326__i = 0, G__39326__a = new Array(arguments.length -  0);
while (G__39326__i < G__39326__a.length) {G__39326__a[G__39326__i] = arguments[G__39326__i + 0]; ++G__39326__i;}
  args = new cljs.core.IndexedSeq(G__39326__a,0,null);
} 
return G__39325__delegate.call(this,args);};
G__39325.cljs$lang$maxFixedArity = 0;
G__39325.cljs$lang$applyTo = (function (arglist__39327){
var args = cljs.core.seq(arglist__39327);
return G__39325__delegate(args);
});
G__39325.cljs$core$IFn$_invoke$arity$variadic = G__39325__delegate;
return G__39325;
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
var G__39328__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39329__i = 0, G__39329__a = new Array(arguments.length -  0);
while (G__39329__i < G__39329__a.length) {G__39329__a[G__39329__i] = arguments[G__39329__i + 0]; ++G__39329__i;}
  args = new cljs.core.IndexedSeq(G__39329__a,0,null);
} 
return G__39328__delegate.call(this,args);};
G__39328.cljs$lang$maxFixedArity = 0;
G__39328.cljs$lang$applyTo = (function (arglist__39330){
var args = cljs.core.seq(arglist__39330);
return G__39328__delegate(args);
});
G__39328.cljs$core$IFn$_invoke$arity$variadic = G__39328__delegate;
return G__39328;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39331__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39332__i = 0, G__39332__a = new Array(arguments.length -  0);
while (G__39332__i < G__39332__a.length) {G__39332__a[G__39332__i] = arguments[G__39332__i + 0]; ++G__39332__i;}
  args = new cljs.core.IndexedSeq(G__39332__a,0,null);
} 
return G__39331__delegate.call(this,args);};
G__39331.cljs$lang$maxFixedArity = 0;
G__39331.cljs$lang$applyTo = (function (arglist__39333){
var args = cljs.core.seq(arglist__39333);
return G__39331__delegate(args);
});
G__39331.cljs$core$IFn$_invoke$arity$variadic = G__39331__delegate;
return G__39331;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39334__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39335__i = 0, G__39335__a = new Array(arguments.length -  0);
while (G__39335__i < G__39335__a.length) {G__39335__a[G__39335__i] = arguments[G__39335__i + 0]; ++G__39335__i;}
  args = new cljs.core.IndexedSeq(G__39335__a,0,null);
} 
return G__39334__delegate.call(this,args);};
G__39334.cljs$lang$maxFixedArity = 0;
G__39334.cljs$lang$applyTo = (function (arglist__39336){
var args = cljs.core.seq(arglist__39336);
return G__39334__delegate(args);
});
G__39334.cljs$core$IFn$_invoke$arity$variadic = G__39334__delegate;
return G__39334;
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
var G__39337__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39338__i = 0, G__39338__a = new Array(arguments.length -  0);
while (G__39338__i < G__39338__a.length) {G__39338__a[G__39338__i] = arguments[G__39338__i + 0]; ++G__39338__i;}
  args = new cljs.core.IndexedSeq(G__39338__a,0,null);
} 
return G__39337__delegate.call(this,args);};
G__39337.cljs$lang$maxFixedArity = 0;
G__39337.cljs$lang$applyTo = (function (arglist__39339){
var args = cljs.core.seq(arglist__39339);
return G__39337__delegate(args);
});
G__39337.cljs$core$IFn$_invoke$arity$variadic = G__39337__delegate;
return G__39337;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39340__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39341__i = 0, G__39341__a = new Array(arguments.length -  0);
while (G__39341__i < G__39341__a.length) {G__39341__a[G__39341__i] = arguments[G__39341__i + 0]; ++G__39341__i;}
  args = new cljs.core.IndexedSeq(G__39341__a,0,null);
} 
return G__39340__delegate.call(this,args);};
G__39340.cljs$lang$maxFixedArity = 0;
G__39340.cljs$lang$applyTo = (function (arglist__39342){
var args = cljs.core.seq(arglist__39342);
return G__39340__delegate(args);
});
G__39340.cljs$core$IFn$_invoke$arity$variadic = G__39340__delegate;
return G__39340;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39343__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39344__i = 0, G__39344__a = new Array(arguments.length -  0);
while (G__39344__i < G__39344__a.length) {G__39344__a[G__39344__i] = arguments[G__39344__i + 0]; ++G__39344__i;}
  args = new cljs.core.IndexedSeq(G__39344__a,0,null);
} 
return G__39343__delegate.call(this,args);};
G__39343.cljs$lang$maxFixedArity = 0;
G__39343.cljs$lang$applyTo = (function (arglist__39345){
var args = cljs.core.seq(arglist__39345);
return G__39343__delegate(args);
});
G__39343.cljs$core$IFn$_invoke$arity$variadic = G__39343__delegate;
return G__39343;
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
var G__39346__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39347__i = 0, G__39347__a = new Array(arguments.length -  0);
while (G__39347__i < G__39347__a.length) {G__39347__a[G__39347__i] = arguments[G__39347__i + 0]; ++G__39347__i;}
  args = new cljs.core.IndexedSeq(G__39347__a,0,null);
} 
return G__39346__delegate.call(this,args);};
G__39346.cljs$lang$maxFixedArity = 0;
G__39346.cljs$lang$applyTo = (function (arglist__39348){
var args = cljs.core.seq(arglist__39348);
return G__39346__delegate(args);
});
G__39346.cljs$core$IFn$_invoke$arity$variadic = G__39346__delegate;
return G__39346;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39349__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39350__i = 0, G__39350__a = new Array(arguments.length -  0);
while (G__39350__i < G__39350__a.length) {G__39350__a[G__39350__i] = arguments[G__39350__i + 0]; ++G__39350__i;}
  args = new cljs.core.IndexedSeq(G__39350__a,0,null);
} 
return G__39349__delegate.call(this,args);};
G__39349.cljs$lang$maxFixedArity = 0;
G__39349.cljs$lang$applyTo = (function (arglist__39351){
var args = cljs.core.seq(arglist__39351);
return G__39349__delegate(args);
});
G__39349.cljs$core$IFn$_invoke$arity$variadic = G__39349__delegate;
return G__39349;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39352__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39353__i = 0, G__39353__a = new Array(arguments.length -  0);
while (G__39353__i < G__39353__a.length) {G__39353__a[G__39353__i] = arguments[G__39353__i + 0]; ++G__39353__i;}
  args = new cljs.core.IndexedSeq(G__39353__a,0,null);
} 
return G__39352__delegate.call(this,args);};
G__39352.cljs$lang$maxFixedArity = 0;
G__39352.cljs$lang$applyTo = (function (arglist__39354){
var args = cljs.core.seq(arglist__39354);
return G__39352__delegate(args);
});
G__39352.cljs$core$IFn$_invoke$arity$variadic = G__39352__delegate;
return G__39352;
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
var G__39355__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__39355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39356__i = 0, G__39356__a = new Array(arguments.length -  0);
while (G__39356__i < G__39356__a.length) {G__39356__a[G__39356__i] = arguments[G__39356__i + 0]; ++G__39356__i;}
  args = new cljs.core.IndexedSeq(G__39356__a,0,null);
} 
return G__39355__delegate.call(this,args);};
G__39355.cljs$lang$maxFixedArity = 0;
G__39355.cljs$lang$applyTo = (function (arglist__39357){
var args = cljs.core.seq(arglist__39357);
return G__39355__delegate(args);
});
G__39355.cljs$core$IFn$_invoke$arity$variadic = G__39355__delegate;
return G__39355;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__39358__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__39358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39359__i = 0, G__39359__a = new Array(arguments.length -  0);
while (G__39359__i < G__39359__a.length) {G__39359__a[G__39359__i] = arguments[G__39359__i + 0]; ++G__39359__i;}
  args = new cljs.core.IndexedSeq(G__39359__a,0,null);
} 
return G__39358__delegate.call(this,args);};
G__39358.cljs$lang$maxFixedArity = 0;
G__39358.cljs$lang$applyTo = (function (arglist__39360){
var args = cljs.core.seq(arglist__39360);
return G__39358__delegate(args);
});
G__39358.cljs$core$IFn$_invoke$arity$variadic = G__39358__delegate;
return G__39358;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__39361__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__39361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39362__i = 0, G__39362__a = new Array(arguments.length -  0);
while (G__39362__i < G__39362__a.length) {G__39362__a[G__39362__i] = arguments[G__39362__i + 0]; ++G__39362__i;}
  args = new cljs.core.IndexedSeq(G__39362__a,0,null);
} 
return G__39361__delegate.call(this,args);};
G__39361.cljs$lang$maxFixedArity = 0;
G__39361.cljs$lang$applyTo = (function (arglist__39363){
var args = cljs.core.seq(arglist__39363);
return G__39361__delegate(args);
});
G__39361.cljs$core$IFn$_invoke$arity$variadic = G__39361__delegate;
return G__39361;
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

//# sourceMappingURL=core.js.map?rel=1526513622162
