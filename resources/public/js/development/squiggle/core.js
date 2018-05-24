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
var G__40921__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40922__i = 0, G__40922__a = new Array(arguments.length -  0);
while (G__40922__i < G__40922__a.length) {G__40922__a[G__40922__i] = arguments[G__40922__i + 0]; ++G__40922__i;}
  args = new cljs.core.IndexedSeq(G__40922__a,0,null);
} 
return G__40921__delegate.call(this,args);};
G__40921.cljs$lang$maxFixedArity = 0;
G__40921.cljs$lang$applyTo = (function (arglist__40923){
var args = cljs.core.seq(arglist__40923);
return G__40921__delegate(args);
});
G__40921.cljs$core$IFn$_invoke$arity$variadic = G__40921__delegate;
return G__40921;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40924__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40925__i = 0, G__40925__a = new Array(arguments.length -  0);
while (G__40925__i < G__40925__a.length) {G__40925__a[G__40925__i] = arguments[G__40925__i + 0]; ++G__40925__i;}
  args = new cljs.core.IndexedSeq(G__40925__a,0,null);
} 
return G__40924__delegate.call(this,args);};
G__40924.cljs$lang$maxFixedArity = 0;
G__40924.cljs$lang$applyTo = (function (arglist__40926){
var args = cljs.core.seq(arglist__40926);
return G__40924__delegate(args);
});
G__40924.cljs$core$IFn$_invoke$arity$variadic = G__40924__delegate;
return G__40924;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40927__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40928__i = 0, G__40928__a = new Array(arguments.length -  0);
while (G__40928__i < G__40928__a.length) {G__40928__a[G__40928__i] = arguments[G__40928__i + 0]; ++G__40928__i;}
  args = new cljs.core.IndexedSeq(G__40928__a,0,null);
} 
return G__40927__delegate.call(this,args);};
G__40927.cljs$lang$maxFixedArity = 0;
G__40927.cljs$lang$applyTo = (function (arglist__40929){
var args = cljs.core.seq(arglist__40929);
return G__40927__delegate(args);
});
G__40927.cljs$core$IFn$_invoke$arity$variadic = G__40927__delegate;
return G__40927;
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
var G__40930__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40931__i = 0, G__40931__a = new Array(arguments.length -  0);
while (G__40931__i < G__40931__a.length) {G__40931__a[G__40931__i] = arguments[G__40931__i + 0]; ++G__40931__i;}
  args = new cljs.core.IndexedSeq(G__40931__a,0,null);
} 
return G__40930__delegate.call(this,args);};
G__40930.cljs$lang$maxFixedArity = 0;
G__40930.cljs$lang$applyTo = (function (arglist__40932){
var args = cljs.core.seq(arglist__40932);
return G__40930__delegate(args);
});
G__40930.cljs$core$IFn$_invoke$arity$variadic = G__40930__delegate;
return G__40930;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40933__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40934__i = 0, G__40934__a = new Array(arguments.length -  0);
while (G__40934__i < G__40934__a.length) {G__40934__a[G__40934__i] = arguments[G__40934__i + 0]; ++G__40934__i;}
  args = new cljs.core.IndexedSeq(G__40934__a,0,null);
} 
return G__40933__delegate.call(this,args);};
G__40933.cljs$lang$maxFixedArity = 0;
G__40933.cljs$lang$applyTo = (function (arglist__40935){
var args = cljs.core.seq(arglist__40935);
return G__40933__delegate(args);
});
G__40933.cljs$core$IFn$_invoke$arity$variadic = G__40933__delegate;
return G__40933;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40936__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40937__i = 0, G__40937__a = new Array(arguments.length -  0);
while (G__40937__i < G__40937__a.length) {G__40937__a[G__40937__i] = arguments[G__40937__i + 0]; ++G__40937__i;}
  args = new cljs.core.IndexedSeq(G__40937__a,0,null);
} 
return G__40936__delegate.call(this,args);};
G__40936.cljs$lang$maxFixedArity = 0;
G__40936.cljs$lang$applyTo = (function (arglist__40938){
var args = cljs.core.seq(arglist__40938);
return G__40936__delegate(args);
});
G__40936.cljs$core$IFn$_invoke$arity$variadic = G__40936__delegate;
return G__40936;
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
var G__40939__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40940__i = 0, G__40940__a = new Array(arguments.length -  0);
while (G__40940__i < G__40940__a.length) {G__40940__a[G__40940__i] = arguments[G__40940__i + 0]; ++G__40940__i;}
  args = new cljs.core.IndexedSeq(G__40940__a,0,null);
} 
return G__40939__delegate.call(this,args);};
G__40939.cljs$lang$maxFixedArity = 0;
G__40939.cljs$lang$applyTo = (function (arglist__40941){
var args = cljs.core.seq(arglist__40941);
return G__40939__delegate(args);
});
G__40939.cljs$core$IFn$_invoke$arity$variadic = G__40939__delegate;
return G__40939;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40942__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40943__i = 0, G__40943__a = new Array(arguments.length -  0);
while (G__40943__i < G__40943__a.length) {G__40943__a[G__40943__i] = arguments[G__40943__i + 0]; ++G__40943__i;}
  args = new cljs.core.IndexedSeq(G__40943__a,0,null);
} 
return G__40942__delegate.call(this,args);};
G__40942.cljs$lang$maxFixedArity = 0;
G__40942.cljs$lang$applyTo = (function (arglist__40944){
var args = cljs.core.seq(arglist__40944);
return G__40942__delegate(args);
});
G__40942.cljs$core$IFn$_invoke$arity$variadic = G__40942__delegate;
return G__40942;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40945__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40946__i = 0, G__40946__a = new Array(arguments.length -  0);
while (G__40946__i < G__40946__a.length) {G__40946__a[G__40946__i] = arguments[G__40946__i + 0]; ++G__40946__i;}
  args = new cljs.core.IndexedSeq(G__40946__a,0,null);
} 
return G__40945__delegate.call(this,args);};
G__40945.cljs$lang$maxFixedArity = 0;
G__40945.cljs$lang$applyTo = (function (arglist__40947){
var args = cljs.core.seq(arglist__40947);
return G__40945__delegate(args);
});
G__40945.cljs$core$IFn$_invoke$arity$variadic = G__40945__delegate;
return G__40945;
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
var G__40948__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40949__i = 0, G__40949__a = new Array(arguments.length -  0);
while (G__40949__i < G__40949__a.length) {G__40949__a[G__40949__i] = arguments[G__40949__i + 0]; ++G__40949__i;}
  args = new cljs.core.IndexedSeq(G__40949__a,0,null);
} 
return G__40948__delegate.call(this,args);};
G__40948.cljs$lang$maxFixedArity = 0;
G__40948.cljs$lang$applyTo = (function (arglist__40950){
var args = cljs.core.seq(arglist__40950);
return G__40948__delegate(args);
});
G__40948.cljs$core$IFn$_invoke$arity$variadic = G__40948__delegate;
return G__40948;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40951__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40952__i = 0, G__40952__a = new Array(arguments.length -  0);
while (G__40952__i < G__40952__a.length) {G__40952__a[G__40952__i] = arguments[G__40952__i + 0]; ++G__40952__i;}
  args = new cljs.core.IndexedSeq(G__40952__a,0,null);
} 
return G__40951__delegate.call(this,args);};
G__40951.cljs$lang$maxFixedArity = 0;
G__40951.cljs$lang$applyTo = (function (arglist__40953){
var args = cljs.core.seq(arglist__40953);
return G__40951__delegate(args);
});
G__40951.cljs$core$IFn$_invoke$arity$variadic = G__40951__delegate;
return G__40951;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40954__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40955__i = 0, G__40955__a = new Array(arguments.length -  0);
while (G__40955__i < G__40955__a.length) {G__40955__a[G__40955__i] = arguments[G__40955__i + 0]; ++G__40955__i;}
  args = new cljs.core.IndexedSeq(G__40955__a,0,null);
} 
return G__40954__delegate.call(this,args);};
G__40954.cljs$lang$maxFixedArity = 0;
G__40954.cljs$lang$applyTo = (function (arglist__40956){
var args = cljs.core.seq(arglist__40956);
return G__40954__delegate(args);
});
G__40954.cljs$core$IFn$_invoke$arity$variadic = G__40954__delegate;
return G__40954;
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
var G__40957__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40958__i = 0, G__40958__a = new Array(arguments.length -  0);
while (G__40958__i < G__40958__a.length) {G__40958__a[G__40958__i] = arguments[G__40958__i + 0]; ++G__40958__i;}
  args = new cljs.core.IndexedSeq(G__40958__a,0,null);
} 
return G__40957__delegate.call(this,args);};
G__40957.cljs$lang$maxFixedArity = 0;
G__40957.cljs$lang$applyTo = (function (arglist__40959){
var args = cljs.core.seq(arglist__40959);
return G__40957__delegate(args);
});
G__40957.cljs$core$IFn$_invoke$arity$variadic = G__40957__delegate;
return G__40957;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40960__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40961__i = 0, G__40961__a = new Array(arguments.length -  0);
while (G__40961__i < G__40961__a.length) {G__40961__a[G__40961__i] = arguments[G__40961__i + 0]; ++G__40961__i;}
  args = new cljs.core.IndexedSeq(G__40961__a,0,null);
} 
return G__40960__delegate.call(this,args);};
G__40960.cljs$lang$maxFixedArity = 0;
G__40960.cljs$lang$applyTo = (function (arglist__40962){
var args = cljs.core.seq(arglist__40962);
return G__40960__delegate(args);
});
G__40960.cljs$core$IFn$_invoke$arity$variadic = G__40960__delegate;
return G__40960;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40963__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40964__i = 0, G__40964__a = new Array(arguments.length -  0);
while (G__40964__i < G__40964__a.length) {G__40964__a[G__40964__i] = arguments[G__40964__i + 0]; ++G__40964__i;}
  args = new cljs.core.IndexedSeq(G__40964__a,0,null);
} 
return G__40963__delegate.call(this,args);};
G__40963.cljs$lang$maxFixedArity = 0;
G__40963.cljs$lang$applyTo = (function (arglist__40965){
var args = cljs.core.seq(arglist__40965);
return G__40963__delegate(args);
});
G__40963.cljs$core$IFn$_invoke$arity$variadic = G__40963__delegate;
return G__40963;
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
var G__40966__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40967__i = 0, G__40967__a = new Array(arguments.length -  0);
while (G__40967__i < G__40967__a.length) {G__40967__a[G__40967__i] = arguments[G__40967__i + 0]; ++G__40967__i;}
  args = new cljs.core.IndexedSeq(G__40967__a,0,null);
} 
return G__40966__delegate.call(this,args);};
G__40966.cljs$lang$maxFixedArity = 0;
G__40966.cljs$lang$applyTo = (function (arglist__40968){
var args = cljs.core.seq(arglist__40968);
return G__40966__delegate(args);
});
G__40966.cljs$core$IFn$_invoke$arity$variadic = G__40966__delegate;
return G__40966;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40969__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40970__i = 0, G__40970__a = new Array(arguments.length -  0);
while (G__40970__i < G__40970__a.length) {G__40970__a[G__40970__i] = arguments[G__40970__i + 0]; ++G__40970__i;}
  args = new cljs.core.IndexedSeq(G__40970__a,0,null);
} 
return G__40969__delegate.call(this,args);};
G__40969.cljs$lang$maxFixedArity = 0;
G__40969.cljs$lang$applyTo = (function (arglist__40971){
var args = cljs.core.seq(arglist__40971);
return G__40969__delegate(args);
});
G__40969.cljs$core$IFn$_invoke$arity$variadic = G__40969__delegate;
return G__40969;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40972__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40973__i = 0, G__40973__a = new Array(arguments.length -  0);
while (G__40973__i < G__40973__a.length) {G__40973__a[G__40973__i] = arguments[G__40973__i + 0]; ++G__40973__i;}
  args = new cljs.core.IndexedSeq(G__40973__a,0,null);
} 
return G__40972__delegate.call(this,args);};
G__40972.cljs$lang$maxFixedArity = 0;
G__40972.cljs$lang$applyTo = (function (arglist__40974){
var args = cljs.core.seq(arglist__40974);
return G__40972__delegate(args);
});
G__40972.cljs$core$IFn$_invoke$arity$variadic = G__40972__delegate;
return G__40972;
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
var G__40975__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40976__i = 0, G__40976__a = new Array(arguments.length -  0);
while (G__40976__i < G__40976__a.length) {G__40976__a[G__40976__i] = arguments[G__40976__i + 0]; ++G__40976__i;}
  args = new cljs.core.IndexedSeq(G__40976__a,0,null);
} 
return G__40975__delegate.call(this,args);};
G__40975.cljs$lang$maxFixedArity = 0;
G__40975.cljs$lang$applyTo = (function (arglist__40977){
var args = cljs.core.seq(arglist__40977);
return G__40975__delegate(args);
});
G__40975.cljs$core$IFn$_invoke$arity$variadic = G__40975__delegate;
return G__40975;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40978__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40979__i = 0, G__40979__a = new Array(arguments.length -  0);
while (G__40979__i < G__40979__a.length) {G__40979__a[G__40979__i] = arguments[G__40979__i + 0]; ++G__40979__i;}
  args = new cljs.core.IndexedSeq(G__40979__a,0,null);
} 
return G__40978__delegate.call(this,args);};
G__40978.cljs$lang$maxFixedArity = 0;
G__40978.cljs$lang$applyTo = (function (arglist__40980){
var args = cljs.core.seq(arglist__40980);
return G__40978__delegate(args);
});
G__40978.cljs$core$IFn$_invoke$arity$variadic = G__40978__delegate;
return G__40978;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40981__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40982__i = 0, G__40982__a = new Array(arguments.length -  0);
while (G__40982__i < G__40982__a.length) {G__40982__a[G__40982__i] = arguments[G__40982__i + 0]; ++G__40982__i;}
  args = new cljs.core.IndexedSeq(G__40982__a,0,null);
} 
return G__40981__delegate.call(this,args);};
G__40981.cljs$lang$maxFixedArity = 0;
G__40981.cljs$lang$applyTo = (function (arglist__40983){
var args = cljs.core.seq(arglist__40983);
return G__40981__delegate(args);
});
G__40981.cljs$core$IFn$_invoke$arity$variadic = G__40981__delegate;
return G__40981;
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
var G__40984__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40985__i = 0, G__40985__a = new Array(arguments.length -  0);
while (G__40985__i < G__40985__a.length) {G__40985__a[G__40985__i] = arguments[G__40985__i + 0]; ++G__40985__i;}
  args = new cljs.core.IndexedSeq(G__40985__a,0,null);
} 
return G__40984__delegate.call(this,args);};
G__40984.cljs$lang$maxFixedArity = 0;
G__40984.cljs$lang$applyTo = (function (arglist__40986){
var args = cljs.core.seq(arglist__40986);
return G__40984__delegate(args);
});
G__40984.cljs$core$IFn$_invoke$arity$variadic = G__40984__delegate;
return G__40984;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40987__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40988__i = 0, G__40988__a = new Array(arguments.length -  0);
while (G__40988__i < G__40988__a.length) {G__40988__a[G__40988__i] = arguments[G__40988__i + 0]; ++G__40988__i;}
  args = new cljs.core.IndexedSeq(G__40988__a,0,null);
} 
return G__40987__delegate.call(this,args);};
G__40987.cljs$lang$maxFixedArity = 0;
G__40987.cljs$lang$applyTo = (function (arglist__40989){
var args = cljs.core.seq(arglist__40989);
return G__40987__delegate(args);
});
G__40987.cljs$core$IFn$_invoke$arity$variadic = G__40987__delegate;
return G__40987;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40990__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40991__i = 0, G__40991__a = new Array(arguments.length -  0);
while (G__40991__i < G__40991__a.length) {G__40991__a[G__40991__i] = arguments[G__40991__i + 0]; ++G__40991__i;}
  args = new cljs.core.IndexedSeq(G__40991__a,0,null);
} 
return G__40990__delegate.call(this,args);};
G__40990.cljs$lang$maxFixedArity = 0;
G__40990.cljs$lang$applyTo = (function (arglist__40992){
var args = cljs.core.seq(arglist__40992);
return G__40990__delegate(args);
});
G__40990.cljs$core$IFn$_invoke$arity$variadic = G__40990__delegate;
return G__40990;
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
var G__40993__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__40993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40994__i = 0, G__40994__a = new Array(arguments.length -  0);
while (G__40994__i < G__40994__a.length) {G__40994__a[G__40994__i] = arguments[G__40994__i + 0]; ++G__40994__i;}
  args = new cljs.core.IndexedSeq(G__40994__a,0,null);
} 
return G__40993__delegate.call(this,args);};
G__40993.cljs$lang$maxFixedArity = 0;
G__40993.cljs$lang$applyTo = (function (arglist__40995){
var args = cljs.core.seq(arglist__40995);
return G__40993__delegate(args);
});
G__40993.cljs$core$IFn$_invoke$arity$variadic = G__40993__delegate;
return G__40993;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__40996__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__40996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40997__i = 0, G__40997__a = new Array(arguments.length -  0);
while (G__40997__i < G__40997__a.length) {G__40997__a[G__40997__i] = arguments[G__40997__i + 0]; ++G__40997__i;}
  args = new cljs.core.IndexedSeq(G__40997__a,0,null);
} 
return G__40996__delegate.call(this,args);};
G__40996.cljs$lang$maxFixedArity = 0;
G__40996.cljs$lang$applyTo = (function (arglist__40998){
var args = cljs.core.seq(arglist__40998);
return G__40996__delegate(args);
});
G__40996.cljs$core$IFn$_invoke$arity$variadic = G__40996__delegate;
return G__40996;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__40999__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__40999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41000__i = 0, G__41000__a = new Array(arguments.length -  0);
while (G__41000__i < G__41000__a.length) {G__41000__a[G__41000__i] = arguments[G__41000__i + 0]; ++G__41000__i;}
  args = new cljs.core.IndexedSeq(G__41000__a,0,null);
} 
return G__40999__delegate.call(this,args);};
G__40999.cljs$lang$maxFixedArity = 0;
G__40999.cljs$lang$applyTo = (function (arglist__41001){
var args = cljs.core.seq(arglist__41001);
return G__40999__delegate(args);
});
G__40999.cljs$core$IFn$_invoke$arity$variadic = G__40999__delegate;
return G__40999;
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

//# sourceMappingURL=core.js.map?rel=1527204320182
