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
var G__41005__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41006__i = 0, G__41006__a = new Array(arguments.length -  0);
while (G__41006__i < G__41006__a.length) {G__41006__a[G__41006__i] = arguments[G__41006__i + 0]; ++G__41006__i;}
  args = new cljs.core.IndexedSeq(G__41006__a,0,null);
} 
return G__41005__delegate.call(this,args);};
G__41005.cljs$lang$maxFixedArity = 0;
G__41005.cljs$lang$applyTo = (function (arglist__41007){
var args = cljs.core.seq(arglist__41007);
return G__41005__delegate(args);
});
G__41005.cljs$core$IFn$_invoke$arity$variadic = G__41005__delegate;
return G__41005;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41008__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41009__i = 0, G__41009__a = new Array(arguments.length -  0);
while (G__41009__i < G__41009__a.length) {G__41009__a[G__41009__i] = arguments[G__41009__i + 0]; ++G__41009__i;}
  args = new cljs.core.IndexedSeq(G__41009__a,0,null);
} 
return G__41008__delegate.call(this,args);};
G__41008.cljs$lang$maxFixedArity = 0;
G__41008.cljs$lang$applyTo = (function (arglist__41010){
var args = cljs.core.seq(arglist__41010);
return G__41008__delegate(args);
});
G__41008.cljs$core$IFn$_invoke$arity$variadic = G__41008__delegate;
return G__41008;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41011__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41012__i = 0, G__41012__a = new Array(arguments.length -  0);
while (G__41012__i < G__41012__a.length) {G__41012__a[G__41012__i] = arguments[G__41012__i + 0]; ++G__41012__i;}
  args = new cljs.core.IndexedSeq(G__41012__a,0,null);
} 
return G__41011__delegate.call(this,args);};
G__41011.cljs$lang$maxFixedArity = 0;
G__41011.cljs$lang$applyTo = (function (arglist__41013){
var args = cljs.core.seq(arglist__41013);
return G__41011__delegate(args);
});
G__41011.cljs$core$IFn$_invoke$arity$variadic = G__41011__delegate;
return G__41011;
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
var G__41014__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41015__i = 0, G__41015__a = new Array(arguments.length -  0);
while (G__41015__i < G__41015__a.length) {G__41015__a[G__41015__i] = arguments[G__41015__i + 0]; ++G__41015__i;}
  args = new cljs.core.IndexedSeq(G__41015__a,0,null);
} 
return G__41014__delegate.call(this,args);};
G__41014.cljs$lang$maxFixedArity = 0;
G__41014.cljs$lang$applyTo = (function (arglist__41016){
var args = cljs.core.seq(arglist__41016);
return G__41014__delegate(args);
});
G__41014.cljs$core$IFn$_invoke$arity$variadic = G__41014__delegate;
return G__41014;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41017__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41018__i = 0, G__41018__a = new Array(arguments.length -  0);
while (G__41018__i < G__41018__a.length) {G__41018__a[G__41018__i] = arguments[G__41018__i + 0]; ++G__41018__i;}
  args = new cljs.core.IndexedSeq(G__41018__a,0,null);
} 
return G__41017__delegate.call(this,args);};
G__41017.cljs$lang$maxFixedArity = 0;
G__41017.cljs$lang$applyTo = (function (arglist__41019){
var args = cljs.core.seq(arglist__41019);
return G__41017__delegate(args);
});
G__41017.cljs$core$IFn$_invoke$arity$variadic = G__41017__delegate;
return G__41017;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41020__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41021__i = 0, G__41021__a = new Array(arguments.length -  0);
while (G__41021__i < G__41021__a.length) {G__41021__a[G__41021__i] = arguments[G__41021__i + 0]; ++G__41021__i;}
  args = new cljs.core.IndexedSeq(G__41021__a,0,null);
} 
return G__41020__delegate.call(this,args);};
G__41020.cljs$lang$maxFixedArity = 0;
G__41020.cljs$lang$applyTo = (function (arglist__41022){
var args = cljs.core.seq(arglist__41022);
return G__41020__delegate(args);
});
G__41020.cljs$core$IFn$_invoke$arity$variadic = G__41020__delegate;
return G__41020;
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
var G__41023__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41024__i = 0, G__41024__a = new Array(arguments.length -  0);
while (G__41024__i < G__41024__a.length) {G__41024__a[G__41024__i] = arguments[G__41024__i + 0]; ++G__41024__i;}
  args = new cljs.core.IndexedSeq(G__41024__a,0,null);
} 
return G__41023__delegate.call(this,args);};
G__41023.cljs$lang$maxFixedArity = 0;
G__41023.cljs$lang$applyTo = (function (arglist__41025){
var args = cljs.core.seq(arglist__41025);
return G__41023__delegate(args);
});
G__41023.cljs$core$IFn$_invoke$arity$variadic = G__41023__delegate;
return G__41023;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41026__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41027__i = 0, G__41027__a = new Array(arguments.length -  0);
while (G__41027__i < G__41027__a.length) {G__41027__a[G__41027__i] = arguments[G__41027__i + 0]; ++G__41027__i;}
  args = new cljs.core.IndexedSeq(G__41027__a,0,null);
} 
return G__41026__delegate.call(this,args);};
G__41026.cljs$lang$maxFixedArity = 0;
G__41026.cljs$lang$applyTo = (function (arglist__41028){
var args = cljs.core.seq(arglist__41028);
return G__41026__delegate(args);
});
G__41026.cljs$core$IFn$_invoke$arity$variadic = G__41026__delegate;
return G__41026;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41029__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41030__i = 0, G__41030__a = new Array(arguments.length -  0);
while (G__41030__i < G__41030__a.length) {G__41030__a[G__41030__i] = arguments[G__41030__i + 0]; ++G__41030__i;}
  args = new cljs.core.IndexedSeq(G__41030__a,0,null);
} 
return G__41029__delegate.call(this,args);};
G__41029.cljs$lang$maxFixedArity = 0;
G__41029.cljs$lang$applyTo = (function (arglist__41031){
var args = cljs.core.seq(arglist__41031);
return G__41029__delegate(args);
});
G__41029.cljs$core$IFn$_invoke$arity$variadic = G__41029__delegate;
return G__41029;
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
var G__41032__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41033__i = 0, G__41033__a = new Array(arguments.length -  0);
while (G__41033__i < G__41033__a.length) {G__41033__a[G__41033__i] = arguments[G__41033__i + 0]; ++G__41033__i;}
  args = new cljs.core.IndexedSeq(G__41033__a,0,null);
} 
return G__41032__delegate.call(this,args);};
G__41032.cljs$lang$maxFixedArity = 0;
G__41032.cljs$lang$applyTo = (function (arglist__41034){
var args = cljs.core.seq(arglist__41034);
return G__41032__delegate(args);
});
G__41032.cljs$core$IFn$_invoke$arity$variadic = G__41032__delegate;
return G__41032;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41035__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41036__i = 0, G__41036__a = new Array(arguments.length -  0);
while (G__41036__i < G__41036__a.length) {G__41036__a[G__41036__i] = arguments[G__41036__i + 0]; ++G__41036__i;}
  args = new cljs.core.IndexedSeq(G__41036__a,0,null);
} 
return G__41035__delegate.call(this,args);};
G__41035.cljs$lang$maxFixedArity = 0;
G__41035.cljs$lang$applyTo = (function (arglist__41037){
var args = cljs.core.seq(arglist__41037);
return G__41035__delegate(args);
});
G__41035.cljs$core$IFn$_invoke$arity$variadic = G__41035__delegate;
return G__41035;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41038__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41039__i = 0, G__41039__a = new Array(arguments.length -  0);
while (G__41039__i < G__41039__a.length) {G__41039__a[G__41039__i] = arguments[G__41039__i + 0]; ++G__41039__i;}
  args = new cljs.core.IndexedSeq(G__41039__a,0,null);
} 
return G__41038__delegate.call(this,args);};
G__41038.cljs$lang$maxFixedArity = 0;
G__41038.cljs$lang$applyTo = (function (arglist__41040){
var args = cljs.core.seq(arglist__41040);
return G__41038__delegate(args);
});
G__41038.cljs$core$IFn$_invoke$arity$variadic = G__41038__delegate;
return G__41038;
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
var G__41041__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41042__i = 0, G__41042__a = new Array(arguments.length -  0);
while (G__41042__i < G__41042__a.length) {G__41042__a[G__41042__i] = arguments[G__41042__i + 0]; ++G__41042__i;}
  args = new cljs.core.IndexedSeq(G__41042__a,0,null);
} 
return G__41041__delegate.call(this,args);};
G__41041.cljs$lang$maxFixedArity = 0;
G__41041.cljs$lang$applyTo = (function (arglist__41043){
var args = cljs.core.seq(arglist__41043);
return G__41041__delegate(args);
});
G__41041.cljs$core$IFn$_invoke$arity$variadic = G__41041__delegate;
return G__41041;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__41044__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__41044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41045__i = 0, G__41045__a = new Array(arguments.length -  0);
while (G__41045__i < G__41045__a.length) {G__41045__a[G__41045__i] = arguments[G__41045__i + 0]; ++G__41045__i;}
  args = new cljs.core.IndexedSeq(G__41045__a,0,null);
} 
return G__41044__delegate.call(this,args);};
G__41044.cljs$lang$maxFixedArity = 0;
G__41044.cljs$lang$applyTo = (function (arglist__41046){
var args = cljs.core.seq(arglist__41046);
return G__41044__delegate(args);
});
G__41044.cljs$core$IFn$_invoke$arity$variadic = G__41044__delegate;
return G__41044;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41047__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41048__i = 0, G__41048__a = new Array(arguments.length -  0);
while (G__41048__i < G__41048__a.length) {G__41048__a[G__41048__i] = arguments[G__41048__i + 0]; ++G__41048__i;}
  args = new cljs.core.IndexedSeq(G__41048__a,0,null);
} 
return G__41047__delegate.call(this,args);};
G__41047.cljs$lang$maxFixedArity = 0;
G__41047.cljs$lang$applyTo = (function (arglist__41049){
var args = cljs.core.seq(arglist__41049);
return G__41047__delegate(args);
});
G__41047.cljs$core$IFn$_invoke$arity$variadic = G__41047__delegate;
return G__41047;
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
var G__41050__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41051__i = 0, G__41051__a = new Array(arguments.length -  0);
while (G__41051__i < G__41051__a.length) {G__41051__a[G__41051__i] = arguments[G__41051__i + 0]; ++G__41051__i;}
  args = new cljs.core.IndexedSeq(G__41051__a,0,null);
} 
return G__41050__delegate.call(this,args);};
G__41050.cljs$lang$maxFixedArity = 0;
G__41050.cljs$lang$applyTo = (function (arglist__41052){
var args = cljs.core.seq(arglist__41052);
return G__41050__delegate(args);
});
G__41050.cljs$core$IFn$_invoke$arity$variadic = G__41050__delegate;
return G__41050;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__41053__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__41053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41054__i = 0, G__41054__a = new Array(arguments.length -  0);
while (G__41054__i < G__41054__a.length) {G__41054__a[G__41054__i] = arguments[G__41054__i + 0]; ++G__41054__i;}
  args = new cljs.core.IndexedSeq(G__41054__a,0,null);
} 
return G__41053__delegate.call(this,args);};
G__41053.cljs$lang$maxFixedArity = 0;
G__41053.cljs$lang$applyTo = (function (arglist__41055){
var args = cljs.core.seq(arglist__41055);
return G__41053__delegate(args);
});
G__41053.cljs$core$IFn$_invoke$arity$variadic = G__41053__delegate;
return G__41053;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41056__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41057__i = 0, G__41057__a = new Array(arguments.length -  0);
while (G__41057__i < G__41057__a.length) {G__41057__a[G__41057__i] = arguments[G__41057__i + 0]; ++G__41057__i;}
  args = new cljs.core.IndexedSeq(G__41057__a,0,null);
} 
return G__41056__delegate.call(this,args);};
G__41056.cljs$lang$maxFixedArity = 0;
G__41056.cljs$lang$applyTo = (function (arglist__41058){
var args = cljs.core.seq(arglist__41058);
return G__41056__delegate(args);
});
G__41056.cljs$core$IFn$_invoke$arity$variadic = G__41056__delegate;
return G__41056;
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
var G__41059__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41060__i = 0, G__41060__a = new Array(arguments.length -  0);
while (G__41060__i < G__41060__a.length) {G__41060__a[G__41060__i] = arguments[G__41060__i + 0]; ++G__41060__i;}
  args = new cljs.core.IndexedSeq(G__41060__a,0,null);
} 
return G__41059__delegate.call(this,args);};
G__41059.cljs$lang$maxFixedArity = 0;
G__41059.cljs$lang$applyTo = (function (arglist__41061){
var args = cljs.core.seq(arglist__41061);
return G__41059__delegate(args);
});
G__41059.cljs$core$IFn$_invoke$arity$variadic = G__41059__delegate;
return G__41059;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__41062__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__41062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41063__i = 0, G__41063__a = new Array(arguments.length -  0);
while (G__41063__i < G__41063__a.length) {G__41063__a[G__41063__i] = arguments[G__41063__i + 0]; ++G__41063__i;}
  args = new cljs.core.IndexedSeq(G__41063__a,0,null);
} 
return G__41062__delegate.call(this,args);};
G__41062.cljs$lang$maxFixedArity = 0;
G__41062.cljs$lang$applyTo = (function (arglist__41064){
var args = cljs.core.seq(arglist__41064);
return G__41062__delegate(args);
});
G__41062.cljs$core$IFn$_invoke$arity$variadic = G__41062__delegate;
return G__41062;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41065__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41066__i = 0, G__41066__a = new Array(arguments.length -  0);
while (G__41066__i < G__41066__a.length) {G__41066__a[G__41066__i] = arguments[G__41066__i + 0]; ++G__41066__i;}
  args = new cljs.core.IndexedSeq(G__41066__a,0,null);
} 
return G__41065__delegate.call(this,args);};
G__41065.cljs$lang$maxFixedArity = 0;
G__41065.cljs$lang$applyTo = (function (arglist__41067){
var args = cljs.core.seq(arglist__41067);
return G__41065__delegate(args);
});
G__41065.cljs$core$IFn$_invoke$arity$variadic = G__41065__delegate;
return G__41065;
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
var G__41068__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41069__i = 0, G__41069__a = new Array(arguments.length -  0);
while (G__41069__i < G__41069__a.length) {G__41069__a[G__41069__i] = arguments[G__41069__i + 0]; ++G__41069__i;}
  args = new cljs.core.IndexedSeq(G__41069__a,0,null);
} 
return G__41068__delegate.call(this,args);};
G__41068.cljs$lang$maxFixedArity = 0;
G__41068.cljs$lang$applyTo = (function (arglist__41070){
var args = cljs.core.seq(arglist__41070);
return G__41068__delegate(args);
});
G__41068.cljs$core$IFn$_invoke$arity$variadic = G__41068__delegate;
return G__41068;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__41071__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__41071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41072__i = 0, G__41072__a = new Array(arguments.length -  0);
while (G__41072__i < G__41072__a.length) {G__41072__a[G__41072__i] = arguments[G__41072__i + 0]; ++G__41072__i;}
  args = new cljs.core.IndexedSeq(G__41072__a,0,null);
} 
return G__41071__delegate.call(this,args);};
G__41071.cljs$lang$maxFixedArity = 0;
G__41071.cljs$lang$applyTo = (function (arglist__41073){
var args = cljs.core.seq(arglist__41073);
return G__41071__delegate(args);
});
G__41071.cljs$core$IFn$_invoke$arity$variadic = G__41071__delegate;
return G__41071;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41074__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41075__i = 0, G__41075__a = new Array(arguments.length -  0);
while (G__41075__i < G__41075__a.length) {G__41075__a[G__41075__i] = arguments[G__41075__i + 0]; ++G__41075__i;}
  args = new cljs.core.IndexedSeq(G__41075__a,0,null);
} 
return G__41074__delegate.call(this,args);};
G__41074.cljs$lang$maxFixedArity = 0;
G__41074.cljs$lang$applyTo = (function (arglist__41076){
var args = cljs.core.seq(arglist__41076);
return G__41074__delegate(args);
});
G__41074.cljs$core$IFn$_invoke$arity$variadic = G__41074__delegate;
return G__41074;
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
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.mouse_clicked))?(function() { 
var G__41077__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__41077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41078__i = 0, G__41078__a = new Array(arguments.length -  0);
while (G__41078__i < G__41078__a.length) {G__41078__a[G__41078__i] = arguments[G__41078__i + 0]; ++G__41078__i;}
  args = new cljs.core.IndexedSeq(G__41078__a,0,null);
} 
return G__41077__delegate.call(this,args);};
G__41077.cljs$lang$maxFixedArity = 0;
G__41077.cljs$lang$applyTo = (function (arglist__41079){
var args = cljs.core.seq(arglist__41079);
return G__41077__delegate(args);
});
G__41077.cljs$core$IFn$_invoke$arity$variadic = G__41077__delegate;
return G__41077;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__41080__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__41080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41081__i = 0, G__41081__a = new Array(arguments.length -  0);
while (G__41081__i < G__41081__a.length) {G__41081__a[G__41081__i] = arguments[G__41081__i + 0]; ++G__41081__i;}
  args = new cljs.core.IndexedSeq(G__41081__a,0,null);
} 
return G__41080__delegate.call(this,args);};
G__41080.cljs$lang$maxFixedArity = 0;
G__41080.cljs$lang$applyTo = (function (arglist__41082){
var args = cljs.core.seq(arglist__41082);
return G__41080__delegate(args);
});
G__41080.cljs$core$IFn$_invoke$arity$variadic = G__41080__delegate;
return G__41080;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__41083__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__41083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41084__i = 0, G__41084__a = new Array(arguments.length -  0);
while (G__41084__i < G__41084__a.length) {G__41084__a[G__41084__i] = arguments[G__41084__i + 0]; ++G__41084__i;}
  args = new cljs.core.IndexedSeq(G__41084__a,0,null);
} 
return G__41083__delegate.call(this,args);};
G__41083.cljs$lang$maxFixedArity = 0;
G__41083.cljs$lang$applyTo = (function (arglist__41085){
var args = cljs.core.seq(arglist__41085);
return G__41083__delegate(args);
});
G__41083.cljs$core$IFn$_invoke$arity$variadic = G__41083__delegate;
return G__41083;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__41086__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__41086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41087__i = 0, G__41087__a = new Array(arguments.length -  0);
while (G__41087__i < G__41087__a.length) {G__41087__a[G__41087__i] = arguments[G__41087__i + 0]; ++G__41087__i;}
  args = new cljs.core.IndexedSeq(G__41087__a,0,null);
} 
return G__41086__delegate.call(this,args);};
G__41086.cljs$lang$maxFixedArity = 0;
G__41086.cljs$lang$applyTo = (function (arglist__41088){
var args = cljs.core.seq(arglist__41088);
return G__41086__delegate(args);
});
G__41086.cljs$core$IFn$_invoke$arity$variadic = G__41086__delegate;
return G__41086;
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

//# sourceMappingURL=core.js.map?rel=1527386730854
