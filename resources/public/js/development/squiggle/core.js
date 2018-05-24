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
var G__41943__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41944__i = 0, G__41944__a = new Array(arguments.length -  0);
while (G__41944__i < G__41944__a.length) {G__41944__a[G__41944__i] = arguments[G__41944__i + 0]; ++G__41944__i;}
  args = new cljs.core.IndexedSeq(G__41944__a,0,null);
} 
return G__41943__delegate.call(this,args);};
G__41943.cljs$lang$maxFixedArity = 0;
G__41943.cljs$lang$applyTo = (function (arglist__41945){
var args = cljs.core.seq(arglist__41945);
return G__41943__delegate(args);
});
G__41943.cljs$core$IFn$_invoke$arity$variadic = G__41943__delegate;
return G__41943;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41946__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41947__i = 0, G__41947__a = new Array(arguments.length -  0);
while (G__41947__i < G__41947__a.length) {G__41947__a[G__41947__i] = arguments[G__41947__i + 0]; ++G__41947__i;}
  args = new cljs.core.IndexedSeq(G__41947__a,0,null);
} 
return G__41946__delegate.call(this,args);};
G__41946.cljs$lang$maxFixedArity = 0;
G__41946.cljs$lang$applyTo = (function (arglist__41948){
var args = cljs.core.seq(arglist__41948);
return G__41946__delegate(args);
});
G__41946.cljs$core$IFn$_invoke$arity$variadic = G__41946__delegate;
return G__41946;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41949__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41950__i = 0, G__41950__a = new Array(arguments.length -  0);
while (G__41950__i < G__41950__a.length) {G__41950__a[G__41950__i] = arguments[G__41950__i + 0]; ++G__41950__i;}
  args = new cljs.core.IndexedSeq(G__41950__a,0,null);
} 
return G__41949__delegate.call(this,args);};
G__41949.cljs$lang$maxFixedArity = 0;
G__41949.cljs$lang$applyTo = (function (arglist__41951){
var args = cljs.core.seq(arglist__41951);
return G__41949__delegate(args);
});
G__41949.cljs$core$IFn$_invoke$arity$variadic = G__41949__delegate;
return G__41949;
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
var G__41952__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41953__i = 0, G__41953__a = new Array(arguments.length -  0);
while (G__41953__i < G__41953__a.length) {G__41953__a[G__41953__i] = arguments[G__41953__i + 0]; ++G__41953__i;}
  args = new cljs.core.IndexedSeq(G__41953__a,0,null);
} 
return G__41952__delegate.call(this,args);};
G__41952.cljs$lang$maxFixedArity = 0;
G__41952.cljs$lang$applyTo = (function (arglist__41954){
var args = cljs.core.seq(arglist__41954);
return G__41952__delegate(args);
});
G__41952.cljs$core$IFn$_invoke$arity$variadic = G__41952__delegate;
return G__41952;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41955__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41956__i = 0, G__41956__a = new Array(arguments.length -  0);
while (G__41956__i < G__41956__a.length) {G__41956__a[G__41956__i] = arguments[G__41956__i + 0]; ++G__41956__i;}
  args = new cljs.core.IndexedSeq(G__41956__a,0,null);
} 
return G__41955__delegate.call(this,args);};
G__41955.cljs$lang$maxFixedArity = 0;
G__41955.cljs$lang$applyTo = (function (arglist__41957){
var args = cljs.core.seq(arglist__41957);
return G__41955__delegate(args);
});
G__41955.cljs$core$IFn$_invoke$arity$variadic = G__41955__delegate;
return G__41955;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41958__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41959__i = 0, G__41959__a = new Array(arguments.length -  0);
while (G__41959__i < G__41959__a.length) {G__41959__a[G__41959__i] = arguments[G__41959__i + 0]; ++G__41959__i;}
  args = new cljs.core.IndexedSeq(G__41959__a,0,null);
} 
return G__41958__delegate.call(this,args);};
G__41958.cljs$lang$maxFixedArity = 0;
G__41958.cljs$lang$applyTo = (function (arglist__41960){
var args = cljs.core.seq(arglist__41960);
return G__41958__delegate(args);
});
G__41958.cljs$core$IFn$_invoke$arity$variadic = G__41958__delegate;
return G__41958;
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
var G__41961__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41962__i = 0, G__41962__a = new Array(arguments.length -  0);
while (G__41962__i < G__41962__a.length) {G__41962__a[G__41962__i] = arguments[G__41962__i + 0]; ++G__41962__i;}
  args = new cljs.core.IndexedSeq(G__41962__a,0,null);
} 
return G__41961__delegate.call(this,args);};
G__41961.cljs$lang$maxFixedArity = 0;
G__41961.cljs$lang$applyTo = (function (arglist__41963){
var args = cljs.core.seq(arglist__41963);
return G__41961__delegate(args);
});
G__41961.cljs$core$IFn$_invoke$arity$variadic = G__41961__delegate;
return G__41961;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41964__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41965__i = 0, G__41965__a = new Array(arguments.length -  0);
while (G__41965__i < G__41965__a.length) {G__41965__a[G__41965__i] = arguments[G__41965__i + 0]; ++G__41965__i;}
  args = new cljs.core.IndexedSeq(G__41965__a,0,null);
} 
return G__41964__delegate.call(this,args);};
G__41964.cljs$lang$maxFixedArity = 0;
G__41964.cljs$lang$applyTo = (function (arglist__41966){
var args = cljs.core.seq(arglist__41966);
return G__41964__delegate(args);
});
G__41964.cljs$core$IFn$_invoke$arity$variadic = G__41964__delegate;
return G__41964;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41967__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41968__i = 0, G__41968__a = new Array(arguments.length -  0);
while (G__41968__i < G__41968__a.length) {G__41968__a[G__41968__i] = arguments[G__41968__i + 0]; ++G__41968__i;}
  args = new cljs.core.IndexedSeq(G__41968__a,0,null);
} 
return G__41967__delegate.call(this,args);};
G__41967.cljs$lang$maxFixedArity = 0;
G__41967.cljs$lang$applyTo = (function (arglist__41969){
var args = cljs.core.seq(arglist__41969);
return G__41967__delegate(args);
});
G__41967.cljs$core$IFn$_invoke$arity$variadic = G__41967__delegate;
return G__41967;
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
var G__41970__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41971__i = 0, G__41971__a = new Array(arguments.length -  0);
while (G__41971__i < G__41971__a.length) {G__41971__a[G__41971__i] = arguments[G__41971__i + 0]; ++G__41971__i;}
  args = new cljs.core.IndexedSeq(G__41971__a,0,null);
} 
return G__41970__delegate.call(this,args);};
G__41970.cljs$lang$maxFixedArity = 0;
G__41970.cljs$lang$applyTo = (function (arglist__41972){
var args = cljs.core.seq(arglist__41972);
return G__41970__delegate(args);
});
G__41970.cljs$core$IFn$_invoke$arity$variadic = G__41970__delegate;
return G__41970;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41973__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41974__i = 0, G__41974__a = new Array(arguments.length -  0);
while (G__41974__i < G__41974__a.length) {G__41974__a[G__41974__i] = arguments[G__41974__i + 0]; ++G__41974__i;}
  args = new cljs.core.IndexedSeq(G__41974__a,0,null);
} 
return G__41973__delegate.call(this,args);};
G__41973.cljs$lang$maxFixedArity = 0;
G__41973.cljs$lang$applyTo = (function (arglist__41975){
var args = cljs.core.seq(arglist__41975);
return G__41973__delegate(args);
});
G__41973.cljs$core$IFn$_invoke$arity$variadic = G__41973__delegate;
return G__41973;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41976__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41977__i = 0, G__41977__a = new Array(arguments.length -  0);
while (G__41977__i < G__41977__a.length) {G__41977__a[G__41977__i] = arguments[G__41977__i + 0]; ++G__41977__i;}
  args = new cljs.core.IndexedSeq(G__41977__a,0,null);
} 
return G__41976__delegate.call(this,args);};
G__41976.cljs$lang$maxFixedArity = 0;
G__41976.cljs$lang$applyTo = (function (arglist__41978){
var args = cljs.core.seq(arglist__41978);
return G__41976__delegate(args);
});
G__41976.cljs$core$IFn$_invoke$arity$variadic = G__41976__delegate;
return G__41976;
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
var G__41979__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41980__i = 0, G__41980__a = new Array(arguments.length -  0);
while (G__41980__i < G__41980__a.length) {G__41980__a[G__41980__i] = arguments[G__41980__i + 0]; ++G__41980__i;}
  args = new cljs.core.IndexedSeq(G__41980__a,0,null);
} 
return G__41979__delegate.call(this,args);};
G__41979.cljs$lang$maxFixedArity = 0;
G__41979.cljs$lang$applyTo = (function (arglist__41981){
var args = cljs.core.seq(arglist__41981);
return G__41979__delegate(args);
});
G__41979.cljs$core$IFn$_invoke$arity$variadic = G__41979__delegate;
return G__41979;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__41982__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__41982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41983__i = 0, G__41983__a = new Array(arguments.length -  0);
while (G__41983__i < G__41983__a.length) {G__41983__a[G__41983__i] = arguments[G__41983__i + 0]; ++G__41983__i;}
  args = new cljs.core.IndexedSeq(G__41983__a,0,null);
} 
return G__41982__delegate.call(this,args);};
G__41982.cljs$lang$maxFixedArity = 0;
G__41982.cljs$lang$applyTo = (function (arglist__41984){
var args = cljs.core.seq(arglist__41984);
return G__41982__delegate(args);
});
G__41982.cljs$core$IFn$_invoke$arity$variadic = G__41982__delegate;
return G__41982;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41985__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41986__i = 0, G__41986__a = new Array(arguments.length -  0);
while (G__41986__i < G__41986__a.length) {G__41986__a[G__41986__i] = arguments[G__41986__i + 0]; ++G__41986__i;}
  args = new cljs.core.IndexedSeq(G__41986__a,0,null);
} 
return G__41985__delegate.call(this,args);};
G__41985.cljs$lang$maxFixedArity = 0;
G__41985.cljs$lang$applyTo = (function (arglist__41987){
var args = cljs.core.seq(arglist__41987);
return G__41985__delegate(args);
});
G__41985.cljs$core$IFn$_invoke$arity$variadic = G__41985__delegate;
return G__41985;
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
var G__41988__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41989__i = 0, G__41989__a = new Array(arguments.length -  0);
while (G__41989__i < G__41989__a.length) {G__41989__a[G__41989__i] = arguments[G__41989__i + 0]; ++G__41989__i;}
  args = new cljs.core.IndexedSeq(G__41989__a,0,null);
} 
return G__41988__delegate.call(this,args);};
G__41988.cljs$lang$maxFixedArity = 0;
G__41988.cljs$lang$applyTo = (function (arglist__41990){
var args = cljs.core.seq(arglist__41990);
return G__41988__delegate(args);
});
G__41988.cljs$core$IFn$_invoke$arity$variadic = G__41988__delegate;
return G__41988;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__41991__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__41991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41992__i = 0, G__41992__a = new Array(arguments.length -  0);
while (G__41992__i < G__41992__a.length) {G__41992__a[G__41992__i] = arguments[G__41992__i + 0]; ++G__41992__i;}
  args = new cljs.core.IndexedSeq(G__41992__a,0,null);
} 
return G__41991__delegate.call(this,args);};
G__41991.cljs$lang$maxFixedArity = 0;
G__41991.cljs$lang$applyTo = (function (arglist__41993){
var args = cljs.core.seq(arglist__41993);
return G__41991__delegate(args);
});
G__41991.cljs$core$IFn$_invoke$arity$variadic = G__41991__delegate;
return G__41991;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41994__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41995__i = 0, G__41995__a = new Array(arguments.length -  0);
while (G__41995__i < G__41995__a.length) {G__41995__a[G__41995__i] = arguments[G__41995__i + 0]; ++G__41995__i;}
  args = new cljs.core.IndexedSeq(G__41995__a,0,null);
} 
return G__41994__delegate.call(this,args);};
G__41994.cljs$lang$maxFixedArity = 0;
G__41994.cljs$lang$applyTo = (function (arglist__41996){
var args = cljs.core.seq(arglist__41996);
return G__41994__delegate(args);
});
G__41994.cljs$core$IFn$_invoke$arity$variadic = G__41994__delegate;
return G__41994;
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
var G__41997__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41998__i = 0, G__41998__a = new Array(arguments.length -  0);
while (G__41998__i < G__41998__a.length) {G__41998__a[G__41998__i] = arguments[G__41998__i + 0]; ++G__41998__i;}
  args = new cljs.core.IndexedSeq(G__41998__a,0,null);
} 
return G__41997__delegate.call(this,args);};
G__41997.cljs$lang$maxFixedArity = 0;
G__41997.cljs$lang$applyTo = (function (arglist__41999){
var args = cljs.core.seq(arglist__41999);
return G__41997__delegate(args);
});
G__41997.cljs$core$IFn$_invoke$arity$variadic = G__41997__delegate;
return G__41997;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__42000__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__42000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42001__i = 0, G__42001__a = new Array(arguments.length -  0);
while (G__42001__i < G__42001__a.length) {G__42001__a[G__42001__i] = arguments[G__42001__i + 0]; ++G__42001__i;}
  args = new cljs.core.IndexedSeq(G__42001__a,0,null);
} 
return G__42000__delegate.call(this,args);};
G__42000.cljs$lang$maxFixedArity = 0;
G__42000.cljs$lang$applyTo = (function (arglist__42002){
var args = cljs.core.seq(arglist__42002);
return G__42000__delegate(args);
});
G__42000.cljs$core$IFn$_invoke$arity$variadic = G__42000__delegate;
return G__42000;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42003__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42004__i = 0, G__42004__a = new Array(arguments.length -  0);
while (G__42004__i < G__42004__a.length) {G__42004__a[G__42004__i] = arguments[G__42004__i + 0]; ++G__42004__i;}
  args = new cljs.core.IndexedSeq(G__42004__a,0,null);
} 
return G__42003__delegate.call(this,args);};
G__42003.cljs$lang$maxFixedArity = 0;
G__42003.cljs$lang$applyTo = (function (arglist__42005){
var args = cljs.core.seq(arglist__42005);
return G__42003__delegate(args);
});
G__42003.cljs$core$IFn$_invoke$arity$variadic = G__42003__delegate;
return G__42003;
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
var G__42006__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42007__i = 0, G__42007__a = new Array(arguments.length -  0);
while (G__42007__i < G__42007__a.length) {G__42007__a[G__42007__i] = arguments[G__42007__i + 0]; ++G__42007__i;}
  args = new cljs.core.IndexedSeq(G__42007__a,0,null);
} 
return G__42006__delegate.call(this,args);};
G__42006.cljs$lang$maxFixedArity = 0;
G__42006.cljs$lang$applyTo = (function (arglist__42008){
var args = cljs.core.seq(arglist__42008);
return G__42006__delegate(args);
});
G__42006.cljs$core$IFn$_invoke$arity$variadic = G__42006__delegate;
return G__42006;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__42009__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__42009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42010__i = 0, G__42010__a = new Array(arguments.length -  0);
while (G__42010__i < G__42010__a.length) {G__42010__a[G__42010__i] = arguments[G__42010__i + 0]; ++G__42010__i;}
  args = new cljs.core.IndexedSeq(G__42010__a,0,null);
} 
return G__42009__delegate.call(this,args);};
G__42009.cljs$lang$maxFixedArity = 0;
G__42009.cljs$lang$applyTo = (function (arglist__42011){
var args = cljs.core.seq(arglist__42011);
return G__42009__delegate(args);
});
G__42009.cljs$core$IFn$_invoke$arity$variadic = G__42009__delegate;
return G__42009;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42012__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42013__i = 0, G__42013__a = new Array(arguments.length -  0);
while (G__42013__i < G__42013__a.length) {G__42013__a[G__42013__i] = arguments[G__42013__i + 0]; ++G__42013__i;}
  args = new cljs.core.IndexedSeq(G__42013__a,0,null);
} 
return G__42012__delegate.call(this,args);};
G__42012.cljs$lang$maxFixedArity = 0;
G__42012.cljs$lang$applyTo = (function (arglist__42014){
var args = cljs.core.seq(arglist__42014);
return G__42012__delegate(args);
});
G__42012.cljs$core$IFn$_invoke$arity$variadic = G__42012__delegate;
return G__42012;
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
var G__42015__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__42015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42016__i = 0, G__42016__a = new Array(arguments.length -  0);
while (G__42016__i < G__42016__a.length) {G__42016__a[G__42016__i] = arguments[G__42016__i + 0]; ++G__42016__i;}
  args = new cljs.core.IndexedSeq(G__42016__a,0,null);
} 
return G__42015__delegate.call(this,args);};
G__42015.cljs$lang$maxFixedArity = 0;
G__42015.cljs$lang$applyTo = (function (arglist__42017){
var args = cljs.core.seq(arglist__42017);
return G__42015__delegate(args);
});
G__42015.cljs$core$IFn$_invoke$arity$variadic = G__42015__delegate;
return G__42015;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__42018__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__42018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42019__i = 0, G__42019__a = new Array(arguments.length -  0);
while (G__42019__i < G__42019__a.length) {G__42019__a[G__42019__i] = arguments[G__42019__i + 0]; ++G__42019__i;}
  args = new cljs.core.IndexedSeq(G__42019__a,0,null);
} 
return G__42018__delegate.call(this,args);};
G__42018.cljs$lang$maxFixedArity = 0;
G__42018.cljs$lang$applyTo = (function (arglist__42020){
var args = cljs.core.seq(arglist__42020);
return G__42018__delegate(args);
});
G__42018.cljs$core$IFn$_invoke$arity$variadic = G__42018__delegate;
return G__42018;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__42021__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__42021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42022__i = 0, G__42022__a = new Array(arguments.length -  0);
while (G__42022__i < G__42022__a.length) {G__42022__a[G__42022__i] = arguments[G__42022__i + 0]; ++G__42022__i;}
  args = new cljs.core.IndexedSeq(G__42022__a,0,null);
} 
return G__42021__delegate.call(this,args);};
G__42021.cljs$lang$maxFixedArity = 0;
G__42021.cljs$lang$applyTo = (function (arglist__42023){
var args = cljs.core.seq(arglist__42023);
return G__42021__delegate(args);
});
G__42021.cljs$core$IFn$_invoke$arity$variadic = G__42021__delegate;
return G__42021;
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

//# sourceMappingURL=core.js.map?rel=1527204563369
