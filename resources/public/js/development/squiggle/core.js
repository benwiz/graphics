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
var G__43975__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43976__i = 0, G__43976__a = new Array(arguments.length -  0);
while (G__43976__i < G__43976__a.length) {G__43976__a[G__43976__i] = arguments[G__43976__i + 0]; ++G__43976__i;}
  args = new cljs.core.IndexedSeq(G__43976__a,0,null);
} 
return G__43975__delegate.call(this,args);};
G__43975.cljs$lang$maxFixedArity = 0;
G__43975.cljs$lang$applyTo = (function (arglist__43977){
var args = cljs.core.seq(arglist__43977);
return G__43975__delegate(args);
});
G__43975.cljs$core$IFn$_invoke$arity$variadic = G__43975__delegate;
return G__43975;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43978__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43979__i = 0, G__43979__a = new Array(arguments.length -  0);
while (G__43979__i < G__43979__a.length) {G__43979__a[G__43979__i] = arguments[G__43979__i + 0]; ++G__43979__i;}
  args = new cljs.core.IndexedSeq(G__43979__a,0,null);
} 
return G__43978__delegate.call(this,args);};
G__43978.cljs$lang$maxFixedArity = 0;
G__43978.cljs$lang$applyTo = (function (arglist__43980){
var args = cljs.core.seq(arglist__43980);
return G__43978__delegate(args);
});
G__43978.cljs$core$IFn$_invoke$arity$variadic = G__43978__delegate;
return G__43978;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43981__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43982__i = 0, G__43982__a = new Array(arguments.length -  0);
while (G__43982__i < G__43982__a.length) {G__43982__a[G__43982__i] = arguments[G__43982__i + 0]; ++G__43982__i;}
  args = new cljs.core.IndexedSeq(G__43982__a,0,null);
} 
return G__43981__delegate.call(this,args);};
G__43981.cljs$lang$maxFixedArity = 0;
G__43981.cljs$lang$applyTo = (function (arglist__43983){
var args = cljs.core.seq(arglist__43983);
return G__43981__delegate(args);
});
G__43981.cljs$core$IFn$_invoke$arity$variadic = G__43981__delegate;
return G__43981;
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
var G__43984__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43985__i = 0, G__43985__a = new Array(arguments.length -  0);
while (G__43985__i < G__43985__a.length) {G__43985__a[G__43985__i] = arguments[G__43985__i + 0]; ++G__43985__i;}
  args = new cljs.core.IndexedSeq(G__43985__a,0,null);
} 
return G__43984__delegate.call(this,args);};
G__43984.cljs$lang$maxFixedArity = 0;
G__43984.cljs$lang$applyTo = (function (arglist__43986){
var args = cljs.core.seq(arglist__43986);
return G__43984__delegate(args);
});
G__43984.cljs$core$IFn$_invoke$arity$variadic = G__43984__delegate;
return G__43984;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43987__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43988__i = 0, G__43988__a = new Array(arguments.length -  0);
while (G__43988__i < G__43988__a.length) {G__43988__a[G__43988__i] = arguments[G__43988__i + 0]; ++G__43988__i;}
  args = new cljs.core.IndexedSeq(G__43988__a,0,null);
} 
return G__43987__delegate.call(this,args);};
G__43987.cljs$lang$maxFixedArity = 0;
G__43987.cljs$lang$applyTo = (function (arglist__43989){
var args = cljs.core.seq(arglist__43989);
return G__43987__delegate(args);
});
G__43987.cljs$core$IFn$_invoke$arity$variadic = G__43987__delegate;
return G__43987;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43990__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43991__i = 0, G__43991__a = new Array(arguments.length -  0);
while (G__43991__i < G__43991__a.length) {G__43991__a[G__43991__i] = arguments[G__43991__i + 0]; ++G__43991__i;}
  args = new cljs.core.IndexedSeq(G__43991__a,0,null);
} 
return G__43990__delegate.call(this,args);};
G__43990.cljs$lang$maxFixedArity = 0;
G__43990.cljs$lang$applyTo = (function (arglist__43992){
var args = cljs.core.seq(arglist__43992);
return G__43990__delegate(args);
});
G__43990.cljs$core$IFn$_invoke$arity$variadic = G__43990__delegate;
return G__43990;
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
var G__43993__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43994__i = 0, G__43994__a = new Array(arguments.length -  0);
while (G__43994__i < G__43994__a.length) {G__43994__a[G__43994__i] = arguments[G__43994__i + 0]; ++G__43994__i;}
  args = new cljs.core.IndexedSeq(G__43994__a,0,null);
} 
return G__43993__delegate.call(this,args);};
G__43993.cljs$lang$maxFixedArity = 0;
G__43993.cljs$lang$applyTo = (function (arglist__43995){
var args = cljs.core.seq(arglist__43995);
return G__43993__delegate(args);
});
G__43993.cljs$core$IFn$_invoke$arity$variadic = G__43993__delegate;
return G__43993;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43996__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43997__i = 0, G__43997__a = new Array(arguments.length -  0);
while (G__43997__i < G__43997__a.length) {G__43997__a[G__43997__i] = arguments[G__43997__i + 0]; ++G__43997__i;}
  args = new cljs.core.IndexedSeq(G__43997__a,0,null);
} 
return G__43996__delegate.call(this,args);};
G__43996.cljs$lang$maxFixedArity = 0;
G__43996.cljs$lang$applyTo = (function (arglist__43998){
var args = cljs.core.seq(arglist__43998);
return G__43996__delegate(args);
});
G__43996.cljs$core$IFn$_invoke$arity$variadic = G__43996__delegate;
return G__43996;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43999__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44000__i = 0, G__44000__a = new Array(arguments.length -  0);
while (G__44000__i < G__44000__a.length) {G__44000__a[G__44000__i] = arguments[G__44000__i + 0]; ++G__44000__i;}
  args = new cljs.core.IndexedSeq(G__44000__a,0,null);
} 
return G__43999__delegate.call(this,args);};
G__43999.cljs$lang$maxFixedArity = 0;
G__43999.cljs$lang$applyTo = (function (arglist__44001){
var args = cljs.core.seq(arglist__44001);
return G__43999__delegate(args);
});
G__43999.cljs$core$IFn$_invoke$arity$variadic = G__43999__delegate;
return G__43999;
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
var G__44002__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__44002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44003__i = 0, G__44003__a = new Array(arguments.length -  0);
while (G__44003__i < G__44003__a.length) {G__44003__a[G__44003__i] = arguments[G__44003__i + 0]; ++G__44003__i;}
  args = new cljs.core.IndexedSeq(G__44003__a,0,null);
} 
return G__44002__delegate.call(this,args);};
G__44002.cljs$lang$maxFixedArity = 0;
G__44002.cljs$lang$applyTo = (function (arglist__44004){
var args = cljs.core.seq(arglist__44004);
return G__44002__delegate(args);
});
G__44002.cljs$core$IFn$_invoke$arity$variadic = G__44002__delegate;
return G__44002;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__44005__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__44005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44006__i = 0, G__44006__a = new Array(arguments.length -  0);
while (G__44006__i < G__44006__a.length) {G__44006__a[G__44006__i] = arguments[G__44006__i + 0]; ++G__44006__i;}
  args = new cljs.core.IndexedSeq(G__44006__a,0,null);
} 
return G__44005__delegate.call(this,args);};
G__44005.cljs$lang$maxFixedArity = 0;
G__44005.cljs$lang$applyTo = (function (arglist__44007){
var args = cljs.core.seq(arglist__44007);
return G__44005__delegate(args);
});
G__44005.cljs$core$IFn$_invoke$arity$variadic = G__44005__delegate;
return G__44005;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__44008__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__44008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44009__i = 0, G__44009__a = new Array(arguments.length -  0);
while (G__44009__i < G__44009__a.length) {G__44009__a[G__44009__i] = arguments[G__44009__i + 0]; ++G__44009__i;}
  args = new cljs.core.IndexedSeq(G__44009__a,0,null);
} 
return G__44008__delegate.call(this,args);};
G__44008.cljs$lang$maxFixedArity = 0;
G__44008.cljs$lang$applyTo = (function (arglist__44010){
var args = cljs.core.seq(arglist__44010);
return G__44008__delegate(args);
});
G__44008.cljs$core$IFn$_invoke$arity$variadic = G__44008__delegate;
return G__44008;
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

//# sourceMappingURL=core.js.map?rel=1526255477261
