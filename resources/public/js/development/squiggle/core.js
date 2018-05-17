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
var G__48024__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__48024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48025__i = 0, G__48025__a = new Array(arguments.length -  0);
while (G__48025__i < G__48025__a.length) {G__48025__a[G__48025__i] = arguments[G__48025__i + 0]; ++G__48025__i;}
  args = new cljs.core.IndexedSeq(G__48025__a,0,null);
} 
return G__48024__delegate.call(this,args);};
G__48024.cljs$lang$maxFixedArity = 0;
G__48024.cljs$lang$applyTo = (function (arglist__48026){
var args = cljs.core.seq(arglist__48026);
return G__48024__delegate(args);
});
G__48024.cljs$core$IFn$_invoke$arity$variadic = G__48024__delegate;
return G__48024;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__48027__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__48027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48028__i = 0, G__48028__a = new Array(arguments.length -  0);
while (G__48028__i < G__48028__a.length) {G__48028__a[G__48028__i] = arguments[G__48028__i + 0]; ++G__48028__i;}
  args = new cljs.core.IndexedSeq(G__48028__a,0,null);
} 
return G__48027__delegate.call(this,args);};
G__48027.cljs$lang$maxFixedArity = 0;
G__48027.cljs$lang$applyTo = (function (arglist__48029){
var args = cljs.core.seq(arglist__48029);
return G__48027__delegate(args);
});
G__48027.cljs$core$IFn$_invoke$arity$variadic = G__48027__delegate;
return G__48027;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__48030__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__48030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48031__i = 0, G__48031__a = new Array(arguments.length -  0);
while (G__48031__i < G__48031__a.length) {G__48031__a[G__48031__i] = arguments[G__48031__i + 0]; ++G__48031__i;}
  args = new cljs.core.IndexedSeq(G__48031__a,0,null);
} 
return G__48030__delegate.call(this,args);};
G__48030.cljs$lang$maxFixedArity = 0;
G__48030.cljs$lang$applyTo = (function (arglist__48032){
var args = cljs.core.seq(arglist__48032);
return G__48030__delegate(args);
});
G__48030.cljs$core$IFn$_invoke$arity$variadic = G__48030__delegate;
return G__48030;
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
var G__48033__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__48033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48034__i = 0, G__48034__a = new Array(arguments.length -  0);
while (G__48034__i < G__48034__a.length) {G__48034__a[G__48034__i] = arguments[G__48034__i + 0]; ++G__48034__i;}
  args = new cljs.core.IndexedSeq(G__48034__a,0,null);
} 
return G__48033__delegate.call(this,args);};
G__48033.cljs$lang$maxFixedArity = 0;
G__48033.cljs$lang$applyTo = (function (arglist__48035){
var args = cljs.core.seq(arglist__48035);
return G__48033__delegate(args);
});
G__48033.cljs$core$IFn$_invoke$arity$variadic = G__48033__delegate;
return G__48033;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__48036__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__48036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48037__i = 0, G__48037__a = new Array(arguments.length -  0);
while (G__48037__i < G__48037__a.length) {G__48037__a[G__48037__i] = arguments[G__48037__i + 0]; ++G__48037__i;}
  args = new cljs.core.IndexedSeq(G__48037__a,0,null);
} 
return G__48036__delegate.call(this,args);};
G__48036.cljs$lang$maxFixedArity = 0;
G__48036.cljs$lang$applyTo = (function (arglist__48038){
var args = cljs.core.seq(arglist__48038);
return G__48036__delegate(args);
});
G__48036.cljs$core$IFn$_invoke$arity$variadic = G__48036__delegate;
return G__48036;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__48039__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__48039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48040__i = 0, G__48040__a = new Array(arguments.length -  0);
while (G__48040__i < G__48040__a.length) {G__48040__a[G__48040__i] = arguments[G__48040__i + 0]; ++G__48040__i;}
  args = new cljs.core.IndexedSeq(G__48040__a,0,null);
} 
return G__48039__delegate.call(this,args);};
G__48039.cljs$lang$maxFixedArity = 0;
G__48039.cljs$lang$applyTo = (function (arglist__48041){
var args = cljs.core.seq(arglist__48041);
return G__48039__delegate(args);
});
G__48039.cljs$core$IFn$_invoke$arity$variadic = G__48039__delegate;
return G__48039;
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
var G__48042__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__48042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48043__i = 0, G__48043__a = new Array(arguments.length -  0);
while (G__48043__i < G__48043__a.length) {G__48043__a[G__48043__i] = arguments[G__48043__i + 0]; ++G__48043__i;}
  args = new cljs.core.IndexedSeq(G__48043__a,0,null);
} 
return G__48042__delegate.call(this,args);};
G__48042.cljs$lang$maxFixedArity = 0;
G__48042.cljs$lang$applyTo = (function (arglist__48044){
var args = cljs.core.seq(arglist__48044);
return G__48042__delegate(args);
});
G__48042.cljs$core$IFn$_invoke$arity$variadic = G__48042__delegate;
return G__48042;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__48045__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__48045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48046__i = 0, G__48046__a = new Array(arguments.length -  0);
while (G__48046__i < G__48046__a.length) {G__48046__a[G__48046__i] = arguments[G__48046__i + 0]; ++G__48046__i;}
  args = new cljs.core.IndexedSeq(G__48046__a,0,null);
} 
return G__48045__delegate.call(this,args);};
G__48045.cljs$lang$maxFixedArity = 0;
G__48045.cljs$lang$applyTo = (function (arglist__48047){
var args = cljs.core.seq(arglist__48047);
return G__48045__delegate(args);
});
G__48045.cljs$core$IFn$_invoke$arity$variadic = G__48045__delegate;
return G__48045;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__48048__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__48048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48049__i = 0, G__48049__a = new Array(arguments.length -  0);
while (G__48049__i < G__48049__a.length) {G__48049__a[G__48049__i] = arguments[G__48049__i + 0]; ++G__48049__i;}
  args = new cljs.core.IndexedSeq(G__48049__a,0,null);
} 
return G__48048__delegate.call(this,args);};
G__48048.cljs$lang$maxFixedArity = 0;
G__48048.cljs$lang$applyTo = (function (arglist__48050){
var args = cljs.core.seq(arglist__48050);
return G__48048__delegate(args);
});
G__48048.cljs$core$IFn$_invoke$arity$variadic = G__48048__delegate;
return G__48048;
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
var G__48051__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__48051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48052__i = 0, G__48052__a = new Array(arguments.length -  0);
while (G__48052__i < G__48052__a.length) {G__48052__a[G__48052__i] = arguments[G__48052__i + 0]; ++G__48052__i;}
  args = new cljs.core.IndexedSeq(G__48052__a,0,null);
} 
return G__48051__delegate.call(this,args);};
G__48051.cljs$lang$maxFixedArity = 0;
G__48051.cljs$lang$applyTo = (function (arglist__48053){
var args = cljs.core.seq(arglist__48053);
return G__48051__delegate(args);
});
G__48051.cljs$core$IFn$_invoke$arity$variadic = G__48051__delegate;
return G__48051;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__48054__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__48054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48055__i = 0, G__48055__a = new Array(arguments.length -  0);
while (G__48055__i < G__48055__a.length) {G__48055__a[G__48055__i] = arguments[G__48055__i + 0]; ++G__48055__i;}
  args = new cljs.core.IndexedSeq(G__48055__a,0,null);
} 
return G__48054__delegate.call(this,args);};
G__48054.cljs$lang$maxFixedArity = 0;
G__48054.cljs$lang$applyTo = (function (arglist__48056){
var args = cljs.core.seq(arglist__48056);
return G__48054__delegate(args);
});
G__48054.cljs$core$IFn$_invoke$arity$variadic = G__48054__delegate;
return G__48054;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__48057__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__48057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48058__i = 0, G__48058__a = new Array(arguments.length -  0);
while (G__48058__i < G__48058__a.length) {G__48058__a[G__48058__i] = arguments[G__48058__i + 0]; ++G__48058__i;}
  args = new cljs.core.IndexedSeq(G__48058__a,0,null);
} 
return G__48057__delegate.call(this,args);};
G__48057.cljs$lang$maxFixedArity = 0;
G__48057.cljs$lang$applyTo = (function (arglist__48059){
var args = cljs.core.seq(arglist__48059);
return G__48057__delegate(args);
});
G__48057.cljs$core$IFn$_invoke$arity$variadic = G__48057__delegate;
return G__48057;
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
var G__48060__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48061__i = 0, G__48061__a = new Array(arguments.length -  0);
while (G__48061__i < G__48061__a.length) {G__48061__a[G__48061__i] = arguments[G__48061__i + 0]; ++G__48061__i;}
  args = new cljs.core.IndexedSeq(G__48061__a,0,null);
} 
return G__48060__delegate.call(this,args);};
G__48060.cljs$lang$maxFixedArity = 0;
G__48060.cljs$lang$applyTo = (function (arglist__48062){
var args = cljs.core.seq(arglist__48062);
return G__48060__delegate(args);
});
G__48060.cljs$core$IFn$_invoke$arity$variadic = G__48060__delegate;
return G__48060;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__48063__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__48063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48064__i = 0, G__48064__a = new Array(arguments.length -  0);
while (G__48064__i < G__48064__a.length) {G__48064__a[G__48064__i] = arguments[G__48064__i + 0]; ++G__48064__i;}
  args = new cljs.core.IndexedSeq(G__48064__a,0,null);
} 
return G__48063__delegate.call(this,args);};
G__48063.cljs$lang$maxFixedArity = 0;
G__48063.cljs$lang$applyTo = (function (arglist__48065){
var args = cljs.core.seq(arglist__48065);
return G__48063__delegate(args);
});
G__48063.cljs$core$IFn$_invoke$arity$variadic = G__48063__delegate;
return G__48063;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48066__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48067__i = 0, G__48067__a = new Array(arguments.length -  0);
while (G__48067__i < G__48067__a.length) {G__48067__a[G__48067__i] = arguments[G__48067__i + 0]; ++G__48067__i;}
  args = new cljs.core.IndexedSeq(G__48067__a,0,null);
} 
return G__48066__delegate.call(this,args);};
G__48066.cljs$lang$maxFixedArity = 0;
G__48066.cljs$lang$applyTo = (function (arglist__48068){
var args = cljs.core.seq(arglist__48068);
return G__48066__delegate(args);
});
G__48066.cljs$core$IFn$_invoke$arity$variadic = G__48066__delegate;
return G__48066;
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
var G__48069__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48070__i = 0, G__48070__a = new Array(arguments.length -  0);
while (G__48070__i < G__48070__a.length) {G__48070__a[G__48070__i] = arguments[G__48070__i + 0]; ++G__48070__i;}
  args = new cljs.core.IndexedSeq(G__48070__a,0,null);
} 
return G__48069__delegate.call(this,args);};
G__48069.cljs$lang$maxFixedArity = 0;
G__48069.cljs$lang$applyTo = (function (arglist__48071){
var args = cljs.core.seq(arglist__48071);
return G__48069__delegate(args);
});
G__48069.cljs$core$IFn$_invoke$arity$variadic = G__48069__delegate;
return G__48069;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__48072__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__48072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48073__i = 0, G__48073__a = new Array(arguments.length -  0);
while (G__48073__i < G__48073__a.length) {G__48073__a[G__48073__i] = arguments[G__48073__i + 0]; ++G__48073__i;}
  args = new cljs.core.IndexedSeq(G__48073__a,0,null);
} 
return G__48072__delegate.call(this,args);};
G__48072.cljs$lang$maxFixedArity = 0;
G__48072.cljs$lang$applyTo = (function (arglist__48074){
var args = cljs.core.seq(arglist__48074);
return G__48072__delegate(args);
});
G__48072.cljs$core$IFn$_invoke$arity$variadic = G__48072__delegate;
return G__48072;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48075__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48076__i = 0, G__48076__a = new Array(arguments.length -  0);
while (G__48076__i < G__48076__a.length) {G__48076__a[G__48076__i] = arguments[G__48076__i + 0]; ++G__48076__i;}
  args = new cljs.core.IndexedSeq(G__48076__a,0,null);
} 
return G__48075__delegate.call(this,args);};
G__48075.cljs$lang$maxFixedArity = 0;
G__48075.cljs$lang$applyTo = (function (arglist__48077){
var args = cljs.core.seq(arglist__48077);
return G__48075__delegate(args);
});
G__48075.cljs$core$IFn$_invoke$arity$variadic = G__48075__delegate;
return G__48075;
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
var G__48078__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48079__i = 0, G__48079__a = new Array(arguments.length -  0);
while (G__48079__i < G__48079__a.length) {G__48079__a[G__48079__i] = arguments[G__48079__i + 0]; ++G__48079__i;}
  args = new cljs.core.IndexedSeq(G__48079__a,0,null);
} 
return G__48078__delegate.call(this,args);};
G__48078.cljs$lang$maxFixedArity = 0;
G__48078.cljs$lang$applyTo = (function (arglist__48080){
var args = cljs.core.seq(arglist__48080);
return G__48078__delegate(args);
});
G__48078.cljs$core$IFn$_invoke$arity$variadic = G__48078__delegate;
return G__48078;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__48081__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__48081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48082__i = 0, G__48082__a = new Array(arguments.length -  0);
while (G__48082__i < G__48082__a.length) {G__48082__a[G__48082__i] = arguments[G__48082__i + 0]; ++G__48082__i;}
  args = new cljs.core.IndexedSeq(G__48082__a,0,null);
} 
return G__48081__delegate.call(this,args);};
G__48081.cljs$lang$maxFixedArity = 0;
G__48081.cljs$lang$applyTo = (function (arglist__48083){
var args = cljs.core.seq(arglist__48083);
return G__48081__delegate(args);
});
G__48081.cljs$core$IFn$_invoke$arity$variadic = G__48081__delegate;
return G__48081;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48084__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48085__i = 0, G__48085__a = new Array(arguments.length -  0);
while (G__48085__i < G__48085__a.length) {G__48085__a[G__48085__i] = arguments[G__48085__i + 0]; ++G__48085__i;}
  args = new cljs.core.IndexedSeq(G__48085__a,0,null);
} 
return G__48084__delegate.call(this,args);};
G__48084.cljs$lang$maxFixedArity = 0;
G__48084.cljs$lang$applyTo = (function (arglist__48086){
var args = cljs.core.seq(arglist__48086);
return G__48084__delegate(args);
});
G__48084.cljs$core$IFn$_invoke$arity$variadic = G__48084__delegate;
return G__48084;
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
var G__48087__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__48087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48088__i = 0, G__48088__a = new Array(arguments.length -  0);
while (G__48088__i < G__48088__a.length) {G__48088__a[G__48088__i] = arguments[G__48088__i + 0]; ++G__48088__i;}
  args = new cljs.core.IndexedSeq(G__48088__a,0,null);
} 
return G__48087__delegate.call(this,args);};
G__48087.cljs$lang$maxFixedArity = 0;
G__48087.cljs$lang$applyTo = (function (arglist__48089){
var args = cljs.core.seq(arglist__48089);
return G__48087__delegate(args);
});
G__48087.cljs$core$IFn$_invoke$arity$variadic = G__48087__delegate;
return G__48087;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__48090__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__48090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48091__i = 0, G__48091__a = new Array(arguments.length -  0);
while (G__48091__i < G__48091__a.length) {G__48091__a[G__48091__i] = arguments[G__48091__i + 0]; ++G__48091__i;}
  args = new cljs.core.IndexedSeq(G__48091__a,0,null);
} 
return G__48090__delegate.call(this,args);};
G__48090.cljs$lang$maxFixedArity = 0;
G__48090.cljs$lang$applyTo = (function (arglist__48092){
var args = cljs.core.seq(arglist__48092);
return G__48090__delegate(args);
});
G__48090.cljs$core$IFn$_invoke$arity$variadic = G__48090__delegate;
return G__48090;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__48093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__48093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48094__i = 0, G__48094__a = new Array(arguments.length -  0);
while (G__48094__i < G__48094__a.length) {G__48094__a[G__48094__i] = arguments[G__48094__i + 0]; ++G__48094__i;}
  args = new cljs.core.IndexedSeq(G__48094__a,0,null);
} 
return G__48093__delegate.call(this,args);};
G__48093.cljs$lang$maxFixedArity = 0;
G__48093.cljs$lang$applyTo = (function (arglist__48095){
var args = cljs.core.seq(arglist__48095);
return G__48093__delegate(args);
});
G__48093.cljs$core$IFn$_invoke$arity$variadic = G__48093__delegate;
return G__48093;
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
var G__48096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__48096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48097__i = 0, G__48097__a = new Array(arguments.length -  0);
while (G__48097__i < G__48097__a.length) {G__48097__a[G__48097__i] = arguments[G__48097__i + 0]; ++G__48097__i;}
  args = new cljs.core.IndexedSeq(G__48097__a,0,null);
} 
return G__48096__delegate.call(this,args);};
G__48096.cljs$lang$maxFixedArity = 0;
G__48096.cljs$lang$applyTo = (function (arglist__48098){
var args = cljs.core.seq(arglist__48098);
return G__48096__delegate(args);
});
G__48096.cljs$core$IFn$_invoke$arity$variadic = G__48096__delegate;
return G__48096;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__48099__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__48099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48100__i = 0, G__48100__a = new Array(arguments.length -  0);
while (G__48100__i < G__48100__a.length) {G__48100__a[G__48100__i] = arguments[G__48100__i + 0]; ++G__48100__i;}
  args = new cljs.core.IndexedSeq(G__48100__a,0,null);
} 
return G__48099__delegate.call(this,args);};
G__48099.cljs$lang$maxFixedArity = 0;
G__48099.cljs$lang$applyTo = (function (arglist__48101){
var args = cljs.core.seq(arglist__48101);
return G__48099__delegate(args);
});
G__48099.cljs$core$IFn$_invoke$arity$variadic = G__48099__delegate;
return G__48099;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__48102__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__48102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48103__i = 0, G__48103__a = new Array(arguments.length -  0);
while (G__48103__i < G__48103__a.length) {G__48103__a[G__48103__i] = arguments[G__48103__i + 0]; ++G__48103__i;}
  args = new cljs.core.IndexedSeq(G__48103__a,0,null);
} 
return G__48102__delegate.call(this,args);};
G__48102.cljs$lang$maxFixedArity = 0;
G__48102.cljs$lang$applyTo = (function (arglist__48104){
var args = cljs.core.seq(arglist__48104);
return G__48102__delegate(args);
});
G__48102.cljs$core$IFn$_invoke$arity$variadic = G__48102__delegate;
return G__48102;
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

//# sourceMappingURL=core.js.map?rel=1526524073848
