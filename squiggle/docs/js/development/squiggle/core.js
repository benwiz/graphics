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
var G__50019__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__50019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50020__i = 0, G__50020__a = new Array(arguments.length -  0);
while (G__50020__i < G__50020__a.length) {G__50020__a[G__50020__i] = arguments[G__50020__i + 0]; ++G__50020__i;}
  args = new cljs.core.IndexedSeq(G__50020__a,0,null);
} 
return G__50019__delegate.call(this,args);};
G__50019.cljs$lang$maxFixedArity = 0;
G__50019.cljs$lang$applyTo = (function (arglist__50021){
var args = cljs.core.seq(arglist__50021);
return G__50019__delegate(args);
});
G__50019.cljs$core$IFn$_invoke$arity$variadic = G__50019__delegate;
return G__50019;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__50022__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__50022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50023__i = 0, G__50023__a = new Array(arguments.length -  0);
while (G__50023__i < G__50023__a.length) {G__50023__a[G__50023__i] = arguments[G__50023__i + 0]; ++G__50023__i;}
  args = new cljs.core.IndexedSeq(G__50023__a,0,null);
} 
return G__50022__delegate.call(this,args);};
G__50022.cljs$lang$maxFixedArity = 0;
G__50022.cljs$lang$applyTo = (function (arglist__50024){
var args = cljs.core.seq(arglist__50024);
return G__50022__delegate(args);
});
G__50022.cljs$core$IFn$_invoke$arity$variadic = G__50022__delegate;
return G__50022;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__50025__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__50025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50026__i = 0, G__50026__a = new Array(arguments.length -  0);
while (G__50026__i < G__50026__a.length) {G__50026__a[G__50026__i] = arguments[G__50026__i + 0]; ++G__50026__i;}
  args = new cljs.core.IndexedSeq(G__50026__a,0,null);
} 
return G__50025__delegate.call(this,args);};
G__50025.cljs$lang$maxFixedArity = 0;
G__50025.cljs$lang$applyTo = (function (arglist__50027){
var args = cljs.core.seq(arglist__50027);
return G__50025__delegate(args);
});
G__50025.cljs$core$IFn$_invoke$arity$variadic = G__50025__delegate;
return G__50025;
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
var G__50028__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__50028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50029__i = 0, G__50029__a = new Array(arguments.length -  0);
while (G__50029__i < G__50029__a.length) {G__50029__a[G__50029__i] = arguments[G__50029__i + 0]; ++G__50029__i;}
  args = new cljs.core.IndexedSeq(G__50029__a,0,null);
} 
return G__50028__delegate.call(this,args);};
G__50028.cljs$lang$maxFixedArity = 0;
G__50028.cljs$lang$applyTo = (function (arglist__50030){
var args = cljs.core.seq(arglist__50030);
return G__50028__delegate(args);
});
G__50028.cljs$core$IFn$_invoke$arity$variadic = G__50028__delegate;
return G__50028;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__50031__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__50031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50032__i = 0, G__50032__a = new Array(arguments.length -  0);
while (G__50032__i < G__50032__a.length) {G__50032__a[G__50032__i] = arguments[G__50032__i + 0]; ++G__50032__i;}
  args = new cljs.core.IndexedSeq(G__50032__a,0,null);
} 
return G__50031__delegate.call(this,args);};
G__50031.cljs$lang$maxFixedArity = 0;
G__50031.cljs$lang$applyTo = (function (arglist__50033){
var args = cljs.core.seq(arglist__50033);
return G__50031__delegate(args);
});
G__50031.cljs$core$IFn$_invoke$arity$variadic = G__50031__delegate;
return G__50031;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__50034__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__50034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50035__i = 0, G__50035__a = new Array(arguments.length -  0);
while (G__50035__i < G__50035__a.length) {G__50035__a[G__50035__i] = arguments[G__50035__i + 0]; ++G__50035__i;}
  args = new cljs.core.IndexedSeq(G__50035__a,0,null);
} 
return G__50034__delegate.call(this,args);};
G__50034.cljs$lang$maxFixedArity = 0;
G__50034.cljs$lang$applyTo = (function (arglist__50036){
var args = cljs.core.seq(arglist__50036);
return G__50034__delegate(args);
});
G__50034.cljs$core$IFn$_invoke$arity$variadic = G__50034__delegate;
return G__50034;
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
var G__50037__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__50037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50038__i = 0, G__50038__a = new Array(arguments.length -  0);
while (G__50038__i < G__50038__a.length) {G__50038__a[G__50038__i] = arguments[G__50038__i + 0]; ++G__50038__i;}
  args = new cljs.core.IndexedSeq(G__50038__a,0,null);
} 
return G__50037__delegate.call(this,args);};
G__50037.cljs$lang$maxFixedArity = 0;
G__50037.cljs$lang$applyTo = (function (arglist__50039){
var args = cljs.core.seq(arglist__50039);
return G__50037__delegate(args);
});
G__50037.cljs$core$IFn$_invoke$arity$variadic = G__50037__delegate;
return G__50037;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__50040__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__50040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50041__i = 0, G__50041__a = new Array(arguments.length -  0);
while (G__50041__i < G__50041__a.length) {G__50041__a[G__50041__i] = arguments[G__50041__i + 0]; ++G__50041__i;}
  args = new cljs.core.IndexedSeq(G__50041__a,0,null);
} 
return G__50040__delegate.call(this,args);};
G__50040.cljs$lang$maxFixedArity = 0;
G__50040.cljs$lang$applyTo = (function (arglist__50042){
var args = cljs.core.seq(arglist__50042);
return G__50040__delegate(args);
});
G__50040.cljs$core$IFn$_invoke$arity$variadic = G__50040__delegate;
return G__50040;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__50043__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__50043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50044__i = 0, G__50044__a = new Array(arguments.length -  0);
while (G__50044__i < G__50044__a.length) {G__50044__a[G__50044__i] = arguments[G__50044__i + 0]; ++G__50044__i;}
  args = new cljs.core.IndexedSeq(G__50044__a,0,null);
} 
return G__50043__delegate.call(this,args);};
G__50043.cljs$lang$maxFixedArity = 0;
G__50043.cljs$lang$applyTo = (function (arglist__50045){
var args = cljs.core.seq(arglist__50045);
return G__50043__delegate(args);
});
G__50043.cljs$core$IFn$_invoke$arity$variadic = G__50043__delegate;
return G__50043;
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
var G__50046__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__50046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50047__i = 0, G__50047__a = new Array(arguments.length -  0);
while (G__50047__i < G__50047__a.length) {G__50047__a[G__50047__i] = arguments[G__50047__i + 0]; ++G__50047__i;}
  args = new cljs.core.IndexedSeq(G__50047__a,0,null);
} 
return G__50046__delegate.call(this,args);};
G__50046.cljs$lang$maxFixedArity = 0;
G__50046.cljs$lang$applyTo = (function (arglist__50048){
var args = cljs.core.seq(arglist__50048);
return G__50046__delegate(args);
});
G__50046.cljs$core$IFn$_invoke$arity$variadic = G__50046__delegate;
return G__50046;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__50049__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__50049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50050__i = 0, G__50050__a = new Array(arguments.length -  0);
while (G__50050__i < G__50050__a.length) {G__50050__a[G__50050__i] = arguments[G__50050__i + 0]; ++G__50050__i;}
  args = new cljs.core.IndexedSeq(G__50050__a,0,null);
} 
return G__50049__delegate.call(this,args);};
G__50049.cljs$lang$maxFixedArity = 0;
G__50049.cljs$lang$applyTo = (function (arglist__50051){
var args = cljs.core.seq(arglist__50051);
return G__50049__delegate(args);
});
G__50049.cljs$core$IFn$_invoke$arity$variadic = G__50049__delegate;
return G__50049;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__50052__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__50052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50053__i = 0, G__50053__a = new Array(arguments.length -  0);
while (G__50053__i < G__50053__a.length) {G__50053__a[G__50053__i] = arguments[G__50053__i + 0]; ++G__50053__i;}
  args = new cljs.core.IndexedSeq(G__50053__a,0,null);
} 
return G__50052__delegate.call(this,args);};
G__50052.cljs$lang$maxFixedArity = 0;
G__50052.cljs$lang$applyTo = (function (arglist__50054){
var args = cljs.core.seq(arglist__50054);
return G__50052__delegate(args);
});
G__50052.cljs$core$IFn$_invoke$arity$variadic = G__50052__delegate;
return G__50052;
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
var G__50055__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50056__i = 0, G__50056__a = new Array(arguments.length -  0);
while (G__50056__i < G__50056__a.length) {G__50056__a[G__50056__i] = arguments[G__50056__i + 0]; ++G__50056__i;}
  args = new cljs.core.IndexedSeq(G__50056__a,0,null);
} 
return G__50055__delegate.call(this,args);};
G__50055.cljs$lang$maxFixedArity = 0;
G__50055.cljs$lang$applyTo = (function (arglist__50057){
var args = cljs.core.seq(arglist__50057);
return G__50055__delegate(args);
});
G__50055.cljs$core$IFn$_invoke$arity$variadic = G__50055__delegate;
return G__50055;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__50058__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__50058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50059__i = 0, G__50059__a = new Array(arguments.length -  0);
while (G__50059__i < G__50059__a.length) {G__50059__a[G__50059__i] = arguments[G__50059__i + 0]; ++G__50059__i;}
  args = new cljs.core.IndexedSeq(G__50059__a,0,null);
} 
return G__50058__delegate.call(this,args);};
G__50058.cljs$lang$maxFixedArity = 0;
G__50058.cljs$lang$applyTo = (function (arglist__50060){
var args = cljs.core.seq(arglist__50060);
return G__50058__delegate(args);
});
G__50058.cljs$core$IFn$_invoke$arity$variadic = G__50058__delegate;
return G__50058;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50061__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50062__i = 0, G__50062__a = new Array(arguments.length -  0);
while (G__50062__i < G__50062__a.length) {G__50062__a[G__50062__i] = arguments[G__50062__i + 0]; ++G__50062__i;}
  args = new cljs.core.IndexedSeq(G__50062__a,0,null);
} 
return G__50061__delegate.call(this,args);};
G__50061.cljs$lang$maxFixedArity = 0;
G__50061.cljs$lang$applyTo = (function (arglist__50063){
var args = cljs.core.seq(arglist__50063);
return G__50061__delegate(args);
});
G__50061.cljs$core$IFn$_invoke$arity$variadic = G__50061__delegate;
return G__50061;
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
var G__50064__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50065__i = 0, G__50065__a = new Array(arguments.length -  0);
while (G__50065__i < G__50065__a.length) {G__50065__a[G__50065__i] = arguments[G__50065__i + 0]; ++G__50065__i;}
  args = new cljs.core.IndexedSeq(G__50065__a,0,null);
} 
return G__50064__delegate.call(this,args);};
G__50064.cljs$lang$maxFixedArity = 0;
G__50064.cljs$lang$applyTo = (function (arglist__50066){
var args = cljs.core.seq(arglist__50066);
return G__50064__delegate(args);
});
G__50064.cljs$core$IFn$_invoke$arity$variadic = G__50064__delegate;
return G__50064;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__50067__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__50067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50068__i = 0, G__50068__a = new Array(arguments.length -  0);
while (G__50068__i < G__50068__a.length) {G__50068__a[G__50068__i] = arguments[G__50068__i + 0]; ++G__50068__i;}
  args = new cljs.core.IndexedSeq(G__50068__a,0,null);
} 
return G__50067__delegate.call(this,args);};
G__50067.cljs$lang$maxFixedArity = 0;
G__50067.cljs$lang$applyTo = (function (arglist__50069){
var args = cljs.core.seq(arglist__50069);
return G__50067__delegate(args);
});
G__50067.cljs$core$IFn$_invoke$arity$variadic = G__50067__delegate;
return G__50067;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50070__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50071__i = 0, G__50071__a = new Array(arguments.length -  0);
while (G__50071__i < G__50071__a.length) {G__50071__a[G__50071__i] = arguments[G__50071__i + 0]; ++G__50071__i;}
  args = new cljs.core.IndexedSeq(G__50071__a,0,null);
} 
return G__50070__delegate.call(this,args);};
G__50070.cljs$lang$maxFixedArity = 0;
G__50070.cljs$lang$applyTo = (function (arglist__50072){
var args = cljs.core.seq(arglist__50072);
return G__50070__delegate(args);
});
G__50070.cljs$core$IFn$_invoke$arity$variadic = G__50070__delegate;
return G__50070;
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
var G__50073__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50074__i = 0, G__50074__a = new Array(arguments.length -  0);
while (G__50074__i < G__50074__a.length) {G__50074__a[G__50074__i] = arguments[G__50074__i + 0]; ++G__50074__i;}
  args = new cljs.core.IndexedSeq(G__50074__a,0,null);
} 
return G__50073__delegate.call(this,args);};
G__50073.cljs$lang$maxFixedArity = 0;
G__50073.cljs$lang$applyTo = (function (arglist__50075){
var args = cljs.core.seq(arglist__50075);
return G__50073__delegate(args);
});
G__50073.cljs$core$IFn$_invoke$arity$variadic = G__50073__delegate;
return G__50073;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__50076__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__50076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50077__i = 0, G__50077__a = new Array(arguments.length -  0);
while (G__50077__i < G__50077__a.length) {G__50077__a[G__50077__i] = arguments[G__50077__i + 0]; ++G__50077__i;}
  args = new cljs.core.IndexedSeq(G__50077__a,0,null);
} 
return G__50076__delegate.call(this,args);};
G__50076.cljs$lang$maxFixedArity = 0;
G__50076.cljs$lang$applyTo = (function (arglist__50078){
var args = cljs.core.seq(arglist__50078);
return G__50076__delegate(args);
});
G__50076.cljs$core$IFn$_invoke$arity$variadic = G__50076__delegate;
return G__50076;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50079__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50080__i = 0, G__50080__a = new Array(arguments.length -  0);
while (G__50080__i < G__50080__a.length) {G__50080__a[G__50080__i] = arguments[G__50080__i + 0]; ++G__50080__i;}
  args = new cljs.core.IndexedSeq(G__50080__a,0,null);
} 
return G__50079__delegate.call(this,args);};
G__50079.cljs$lang$maxFixedArity = 0;
G__50079.cljs$lang$applyTo = (function (arglist__50081){
var args = cljs.core.seq(arglist__50081);
return G__50079__delegate(args);
});
G__50079.cljs$core$IFn$_invoke$arity$variadic = G__50079__delegate;
return G__50079;
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
var G__50082__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50083__i = 0, G__50083__a = new Array(arguments.length -  0);
while (G__50083__i < G__50083__a.length) {G__50083__a[G__50083__i] = arguments[G__50083__i + 0]; ++G__50083__i;}
  args = new cljs.core.IndexedSeq(G__50083__a,0,null);
} 
return G__50082__delegate.call(this,args);};
G__50082.cljs$lang$maxFixedArity = 0;
G__50082.cljs$lang$applyTo = (function (arglist__50084){
var args = cljs.core.seq(arglist__50084);
return G__50082__delegate(args);
});
G__50082.cljs$core$IFn$_invoke$arity$variadic = G__50082__delegate;
return G__50082;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__50085__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__50085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50086__i = 0, G__50086__a = new Array(arguments.length -  0);
while (G__50086__i < G__50086__a.length) {G__50086__a[G__50086__i] = arguments[G__50086__i + 0]; ++G__50086__i;}
  args = new cljs.core.IndexedSeq(G__50086__a,0,null);
} 
return G__50085__delegate.call(this,args);};
G__50085.cljs$lang$maxFixedArity = 0;
G__50085.cljs$lang$applyTo = (function (arglist__50087){
var args = cljs.core.seq(arglist__50087);
return G__50085__delegate(args);
});
G__50085.cljs$core$IFn$_invoke$arity$variadic = G__50085__delegate;
return G__50085;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50088__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50089__i = 0, G__50089__a = new Array(arguments.length -  0);
while (G__50089__i < G__50089__a.length) {G__50089__a[G__50089__i] = arguments[G__50089__i + 0]; ++G__50089__i;}
  args = new cljs.core.IndexedSeq(G__50089__a,0,null);
} 
return G__50088__delegate.call(this,args);};
G__50088.cljs$lang$maxFixedArity = 0;
G__50088.cljs$lang$applyTo = (function (arglist__50090){
var args = cljs.core.seq(arglist__50090);
return G__50088__delegate(args);
});
G__50088.cljs$core$IFn$_invoke$arity$variadic = G__50088__delegate;
return G__50088;
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
var G__50091__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__50091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50092__i = 0, G__50092__a = new Array(arguments.length -  0);
while (G__50092__i < G__50092__a.length) {G__50092__a[G__50092__i] = arguments[G__50092__i + 0]; ++G__50092__i;}
  args = new cljs.core.IndexedSeq(G__50092__a,0,null);
} 
return G__50091__delegate.call(this,args);};
G__50091.cljs$lang$maxFixedArity = 0;
G__50091.cljs$lang$applyTo = (function (arglist__50093){
var args = cljs.core.seq(arglist__50093);
return G__50091__delegate(args);
});
G__50091.cljs$core$IFn$_invoke$arity$variadic = G__50091__delegate;
return G__50091;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__50094__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__50094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50095__i = 0, G__50095__a = new Array(arguments.length -  0);
while (G__50095__i < G__50095__a.length) {G__50095__a[G__50095__i] = arguments[G__50095__i + 0]; ++G__50095__i;}
  args = new cljs.core.IndexedSeq(G__50095__a,0,null);
} 
return G__50094__delegate.call(this,args);};
G__50094.cljs$lang$maxFixedArity = 0;
G__50094.cljs$lang$applyTo = (function (arglist__50096){
var args = cljs.core.seq(arglist__50096);
return G__50094__delegate(args);
});
G__50094.cljs$core$IFn$_invoke$arity$variadic = G__50094__delegate;
return G__50094;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__50097__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__50097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50098__i = 0, G__50098__a = new Array(arguments.length -  0);
while (G__50098__i < G__50098__a.length) {G__50098__a[G__50098__i] = arguments[G__50098__i + 0]; ++G__50098__i;}
  args = new cljs.core.IndexedSeq(G__50098__a,0,null);
} 
return G__50097__delegate.call(this,args);};
G__50097.cljs$lang$maxFixedArity = 0;
G__50097.cljs$lang$applyTo = (function (arglist__50099){
var args = cljs.core.seq(arglist__50099);
return G__50097__delegate(args);
});
G__50097.cljs$core$IFn$_invoke$arity$variadic = G__50097__delegate;
return G__50097;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__50100__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__50100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50101__i = 0, G__50101__a = new Array(arguments.length -  0);
while (G__50101__i < G__50101__a.length) {G__50101__a[G__50101__i] = arguments[G__50101__i + 0]; ++G__50101__i;}
  args = new cljs.core.IndexedSeq(G__50101__a,0,null);
} 
return G__50100__delegate.call(this,args);};
G__50100.cljs$lang$maxFixedArity = 0;
G__50100.cljs$lang$applyTo = (function (arglist__50102){
var args = cljs.core.seq(arglist__50102);
return G__50100__delegate(args);
});
G__50100.cljs$core$IFn$_invoke$arity$variadic = G__50100__delegate;
return G__50100;
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

//# sourceMappingURL=core.js.map?rel=1527391067612
