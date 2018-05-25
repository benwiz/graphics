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
var G__49916__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__49916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49917__i = 0, G__49917__a = new Array(arguments.length -  0);
while (G__49917__i < G__49917__a.length) {G__49917__a[G__49917__i] = arguments[G__49917__i + 0]; ++G__49917__i;}
  args = new cljs.core.IndexedSeq(G__49917__a,0,null);
} 
return G__49916__delegate.call(this,args);};
G__49916.cljs$lang$maxFixedArity = 0;
G__49916.cljs$lang$applyTo = (function (arglist__49918){
var args = cljs.core.seq(arglist__49918);
return G__49916__delegate(args);
});
G__49916.cljs$core$IFn$_invoke$arity$variadic = G__49916__delegate;
return G__49916;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__49919__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__49919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49920__i = 0, G__49920__a = new Array(arguments.length -  0);
while (G__49920__i < G__49920__a.length) {G__49920__a[G__49920__i] = arguments[G__49920__i + 0]; ++G__49920__i;}
  args = new cljs.core.IndexedSeq(G__49920__a,0,null);
} 
return G__49919__delegate.call(this,args);};
G__49919.cljs$lang$maxFixedArity = 0;
G__49919.cljs$lang$applyTo = (function (arglist__49921){
var args = cljs.core.seq(arglist__49921);
return G__49919__delegate(args);
});
G__49919.cljs$core$IFn$_invoke$arity$variadic = G__49919__delegate;
return G__49919;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__49922__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__49922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49923__i = 0, G__49923__a = new Array(arguments.length -  0);
while (G__49923__i < G__49923__a.length) {G__49923__a[G__49923__i] = arguments[G__49923__i + 0]; ++G__49923__i;}
  args = new cljs.core.IndexedSeq(G__49923__a,0,null);
} 
return G__49922__delegate.call(this,args);};
G__49922.cljs$lang$maxFixedArity = 0;
G__49922.cljs$lang$applyTo = (function (arglist__49924){
var args = cljs.core.seq(arglist__49924);
return G__49922__delegate(args);
});
G__49922.cljs$core$IFn$_invoke$arity$variadic = G__49922__delegate;
return G__49922;
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
var G__49925__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__49925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49926__i = 0, G__49926__a = new Array(arguments.length -  0);
while (G__49926__i < G__49926__a.length) {G__49926__a[G__49926__i] = arguments[G__49926__i + 0]; ++G__49926__i;}
  args = new cljs.core.IndexedSeq(G__49926__a,0,null);
} 
return G__49925__delegate.call(this,args);};
G__49925.cljs$lang$maxFixedArity = 0;
G__49925.cljs$lang$applyTo = (function (arglist__49927){
var args = cljs.core.seq(arglist__49927);
return G__49925__delegate(args);
});
G__49925.cljs$core$IFn$_invoke$arity$variadic = G__49925__delegate;
return G__49925;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__49928__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__49928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49929__i = 0, G__49929__a = new Array(arguments.length -  0);
while (G__49929__i < G__49929__a.length) {G__49929__a[G__49929__i] = arguments[G__49929__i + 0]; ++G__49929__i;}
  args = new cljs.core.IndexedSeq(G__49929__a,0,null);
} 
return G__49928__delegate.call(this,args);};
G__49928.cljs$lang$maxFixedArity = 0;
G__49928.cljs$lang$applyTo = (function (arglist__49930){
var args = cljs.core.seq(arglist__49930);
return G__49928__delegate(args);
});
G__49928.cljs$core$IFn$_invoke$arity$variadic = G__49928__delegate;
return G__49928;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__49931__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__49931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49932__i = 0, G__49932__a = new Array(arguments.length -  0);
while (G__49932__i < G__49932__a.length) {G__49932__a[G__49932__i] = arguments[G__49932__i + 0]; ++G__49932__i;}
  args = new cljs.core.IndexedSeq(G__49932__a,0,null);
} 
return G__49931__delegate.call(this,args);};
G__49931.cljs$lang$maxFixedArity = 0;
G__49931.cljs$lang$applyTo = (function (arglist__49933){
var args = cljs.core.seq(arglist__49933);
return G__49931__delegate(args);
});
G__49931.cljs$core$IFn$_invoke$arity$variadic = G__49931__delegate;
return G__49931;
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
var G__49934__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__49934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49935__i = 0, G__49935__a = new Array(arguments.length -  0);
while (G__49935__i < G__49935__a.length) {G__49935__a[G__49935__i] = arguments[G__49935__i + 0]; ++G__49935__i;}
  args = new cljs.core.IndexedSeq(G__49935__a,0,null);
} 
return G__49934__delegate.call(this,args);};
G__49934.cljs$lang$maxFixedArity = 0;
G__49934.cljs$lang$applyTo = (function (arglist__49936){
var args = cljs.core.seq(arglist__49936);
return G__49934__delegate(args);
});
G__49934.cljs$core$IFn$_invoke$arity$variadic = G__49934__delegate;
return G__49934;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__49937__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__49937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49938__i = 0, G__49938__a = new Array(arguments.length -  0);
while (G__49938__i < G__49938__a.length) {G__49938__a[G__49938__i] = arguments[G__49938__i + 0]; ++G__49938__i;}
  args = new cljs.core.IndexedSeq(G__49938__a,0,null);
} 
return G__49937__delegate.call(this,args);};
G__49937.cljs$lang$maxFixedArity = 0;
G__49937.cljs$lang$applyTo = (function (arglist__49939){
var args = cljs.core.seq(arglist__49939);
return G__49937__delegate(args);
});
G__49937.cljs$core$IFn$_invoke$arity$variadic = G__49937__delegate;
return G__49937;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__49940__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__49940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49941__i = 0, G__49941__a = new Array(arguments.length -  0);
while (G__49941__i < G__49941__a.length) {G__49941__a[G__49941__i] = arguments[G__49941__i + 0]; ++G__49941__i;}
  args = new cljs.core.IndexedSeq(G__49941__a,0,null);
} 
return G__49940__delegate.call(this,args);};
G__49940.cljs$lang$maxFixedArity = 0;
G__49940.cljs$lang$applyTo = (function (arglist__49942){
var args = cljs.core.seq(arglist__49942);
return G__49940__delegate(args);
});
G__49940.cljs$core$IFn$_invoke$arity$variadic = G__49940__delegate;
return G__49940;
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
var G__49943__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__49943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49944__i = 0, G__49944__a = new Array(arguments.length -  0);
while (G__49944__i < G__49944__a.length) {G__49944__a[G__49944__i] = arguments[G__49944__i + 0]; ++G__49944__i;}
  args = new cljs.core.IndexedSeq(G__49944__a,0,null);
} 
return G__49943__delegate.call(this,args);};
G__49943.cljs$lang$maxFixedArity = 0;
G__49943.cljs$lang$applyTo = (function (arglist__49945){
var args = cljs.core.seq(arglist__49945);
return G__49943__delegate(args);
});
G__49943.cljs$core$IFn$_invoke$arity$variadic = G__49943__delegate;
return G__49943;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__49946__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__49946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49947__i = 0, G__49947__a = new Array(arguments.length -  0);
while (G__49947__i < G__49947__a.length) {G__49947__a[G__49947__i] = arguments[G__49947__i + 0]; ++G__49947__i;}
  args = new cljs.core.IndexedSeq(G__49947__a,0,null);
} 
return G__49946__delegate.call(this,args);};
G__49946.cljs$lang$maxFixedArity = 0;
G__49946.cljs$lang$applyTo = (function (arglist__49948){
var args = cljs.core.seq(arglist__49948);
return G__49946__delegate(args);
});
G__49946.cljs$core$IFn$_invoke$arity$variadic = G__49946__delegate;
return G__49946;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__49949__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__49949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49950__i = 0, G__49950__a = new Array(arguments.length -  0);
while (G__49950__i < G__49950__a.length) {G__49950__a[G__49950__i] = arguments[G__49950__i + 0]; ++G__49950__i;}
  args = new cljs.core.IndexedSeq(G__49950__a,0,null);
} 
return G__49949__delegate.call(this,args);};
G__49949.cljs$lang$maxFixedArity = 0;
G__49949.cljs$lang$applyTo = (function (arglist__49951){
var args = cljs.core.seq(arglist__49951);
return G__49949__delegate(args);
});
G__49949.cljs$core$IFn$_invoke$arity$variadic = G__49949__delegate;
return G__49949;
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
var G__49952__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__49952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49953__i = 0, G__49953__a = new Array(arguments.length -  0);
while (G__49953__i < G__49953__a.length) {G__49953__a[G__49953__i] = arguments[G__49953__i + 0]; ++G__49953__i;}
  args = new cljs.core.IndexedSeq(G__49953__a,0,null);
} 
return G__49952__delegate.call(this,args);};
G__49952.cljs$lang$maxFixedArity = 0;
G__49952.cljs$lang$applyTo = (function (arglist__49954){
var args = cljs.core.seq(arglist__49954);
return G__49952__delegate(args);
});
G__49952.cljs$core$IFn$_invoke$arity$variadic = G__49952__delegate;
return G__49952;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__49955__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__49955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49956__i = 0, G__49956__a = new Array(arguments.length -  0);
while (G__49956__i < G__49956__a.length) {G__49956__a[G__49956__i] = arguments[G__49956__i + 0]; ++G__49956__i;}
  args = new cljs.core.IndexedSeq(G__49956__a,0,null);
} 
return G__49955__delegate.call(this,args);};
G__49955.cljs$lang$maxFixedArity = 0;
G__49955.cljs$lang$applyTo = (function (arglist__49957){
var args = cljs.core.seq(arglist__49957);
return G__49955__delegate(args);
});
G__49955.cljs$core$IFn$_invoke$arity$variadic = G__49955__delegate;
return G__49955;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__49958__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__49958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49959__i = 0, G__49959__a = new Array(arguments.length -  0);
while (G__49959__i < G__49959__a.length) {G__49959__a[G__49959__i] = arguments[G__49959__i + 0]; ++G__49959__i;}
  args = new cljs.core.IndexedSeq(G__49959__a,0,null);
} 
return G__49958__delegate.call(this,args);};
G__49958.cljs$lang$maxFixedArity = 0;
G__49958.cljs$lang$applyTo = (function (arglist__49960){
var args = cljs.core.seq(arglist__49960);
return G__49958__delegate(args);
});
G__49958.cljs$core$IFn$_invoke$arity$variadic = G__49958__delegate;
return G__49958;
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
var G__49961__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__49961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49962__i = 0, G__49962__a = new Array(arguments.length -  0);
while (G__49962__i < G__49962__a.length) {G__49962__a[G__49962__i] = arguments[G__49962__i + 0]; ++G__49962__i;}
  args = new cljs.core.IndexedSeq(G__49962__a,0,null);
} 
return G__49961__delegate.call(this,args);};
G__49961.cljs$lang$maxFixedArity = 0;
G__49961.cljs$lang$applyTo = (function (arglist__49963){
var args = cljs.core.seq(arglist__49963);
return G__49961__delegate(args);
});
G__49961.cljs$core$IFn$_invoke$arity$variadic = G__49961__delegate;
return G__49961;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__49964__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__49964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49965__i = 0, G__49965__a = new Array(arguments.length -  0);
while (G__49965__i < G__49965__a.length) {G__49965__a[G__49965__i] = arguments[G__49965__i + 0]; ++G__49965__i;}
  args = new cljs.core.IndexedSeq(G__49965__a,0,null);
} 
return G__49964__delegate.call(this,args);};
G__49964.cljs$lang$maxFixedArity = 0;
G__49964.cljs$lang$applyTo = (function (arglist__49966){
var args = cljs.core.seq(arglist__49966);
return G__49964__delegate(args);
});
G__49964.cljs$core$IFn$_invoke$arity$variadic = G__49964__delegate;
return G__49964;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__49967__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__49967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49968__i = 0, G__49968__a = new Array(arguments.length -  0);
while (G__49968__i < G__49968__a.length) {G__49968__a[G__49968__i] = arguments[G__49968__i + 0]; ++G__49968__i;}
  args = new cljs.core.IndexedSeq(G__49968__a,0,null);
} 
return G__49967__delegate.call(this,args);};
G__49967.cljs$lang$maxFixedArity = 0;
G__49967.cljs$lang$applyTo = (function (arglist__49969){
var args = cljs.core.seq(arglist__49969);
return G__49967__delegate(args);
});
G__49967.cljs$core$IFn$_invoke$arity$variadic = G__49967__delegate;
return G__49967;
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
var G__49970__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__49970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49971__i = 0, G__49971__a = new Array(arguments.length -  0);
while (G__49971__i < G__49971__a.length) {G__49971__a[G__49971__i] = arguments[G__49971__i + 0]; ++G__49971__i;}
  args = new cljs.core.IndexedSeq(G__49971__a,0,null);
} 
return G__49970__delegate.call(this,args);};
G__49970.cljs$lang$maxFixedArity = 0;
G__49970.cljs$lang$applyTo = (function (arglist__49972){
var args = cljs.core.seq(arglist__49972);
return G__49970__delegate(args);
});
G__49970.cljs$core$IFn$_invoke$arity$variadic = G__49970__delegate;
return G__49970;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__49973__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__49973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49974__i = 0, G__49974__a = new Array(arguments.length -  0);
while (G__49974__i < G__49974__a.length) {G__49974__a[G__49974__i] = arguments[G__49974__i + 0]; ++G__49974__i;}
  args = new cljs.core.IndexedSeq(G__49974__a,0,null);
} 
return G__49973__delegate.call(this,args);};
G__49973.cljs$lang$maxFixedArity = 0;
G__49973.cljs$lang$applyTo = (function (arglist__49975){
var args = cljs.core.seq(arglist__49975);
return G__49973__delegate(args);
});
G__49973.cljs$core$IFn$_invoke$arity$variadic = G__49973__delegate;
return G__49973;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__49976__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__49976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49977__i = 0, G__49977__a = new Array(arguments.length -  0);
while (G__49977__i < G__49977__a.length) {G__49977__a[G__49977__i] = arguments[G__49977__i + 0]; ++G__49977__i;}
  args = new cljs.core.IndexedSeq(G__49977__a,0,null);
} 
return G__49976__delegate.call(this,args);};
G__49976.cljs$lang$maxFixedArity = 0;
G__49976.cljs$lang$applyTo = (function (arglist__49978){
var args = cljs.core.seq(arglist__49978);
return G__49976__delegate(args);
});
G__49976.cljs$core$IFn$_invoke$arity$variadic = G__49976__delegate;
return G__49976;
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
var G__49979__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__49979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49980__i = 0, G__49980__a = new Array(arguments.length -  0);
while (G__49980__i < G__49980__a.length) {G__49980__a[G__49980__i] = arguments[G__49980__i + 0]; ++G__49980__i;}
  args = new cljs.core.IndexedSeq(G__49980__a,0,null);
} 
return G__49979__delegate.call(this,args);};
G__49979.cljs$lang$maxFixedArity = 0;
G__49979.cljs$lang$applyTo = (function (arglist__49981){
var args = cljs.core.seq(arglist__49981);
return G__49979__delegate(args);
});
G__49979.cljs$core$IFn$_invoke$arity$variadic = G__49979__delegate;
return G__49979;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__49982__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__49982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49983__i = 0, G__49983__a = new Array(arguments.length -  0);
while (G__49983__i < G__49983__a.length) {G__49983__a[G__49983__i] = arguments[G__49983__i + 0]; ++G__49983__i;}
  args = new cljs.core.IndexedSeq(G__49983__a,0,null);
} 
return G__49982__delegate.call(this,args);};
G__49982.cljs$lang$maxFixedArity = 0;
G__49982.cljs$lang$applyTo = (function (arglist__49984){
var args = cljs.core.seq(arglist__49984);
return G__49982__delegate(args);
});
G__49982.cljs$core$IFn$_invoke$arity$variadic = G__49982__delegate;
return G__49982;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__49985__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__49985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49986__i = 0, G__49986__a = new Array(arguments.length -  0);
while (G__49986__i < G__49986__a.length) {G__49986__a[G__49986__i] = arguments[G__49986__i + 0]; ++G__49986__i;}
  args = new cljs.core.IndexedSeq(G__49986__a,0,null);
} 
return G__49985__delegate.call(this,args);};
G__49985.cljs$lang$maxFixedArity = 0;
G__49985.cljs$lang$applyTo = (function (arglist__49987){
var args = cljs.core.seq(arglist__49987);
return G__49985__delegate(args);
});
G__49985.cljs$core$IFn$_invoke$arity$variadic = G__49985__delegate;
return G__49985;
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
var G__49988__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__49988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49989__i = 0, G__49989__a = new Array(arguments.length -  0);
while (G__49989__i < G__49989__a.length) {G__49989__a[G__49989__i] = arguments[G__49989__i + 0]; ++G__49989__i;}
  args = new cljs.core.IndexedSeq(G__49989__a,0,null);
} 
return G__49988__delegate.call(this,args);};
G__49988.cljs$lang$maxFixedArity = 0;
G__49988.cljs$lang$applyTo = (function (arglist__49990){
var args = cljs.core.seq(arglist__49990);
return G__49988__delegate(args);
});
G__49988.cljs$core$IFn$_invoke$arity$variadic = G__49988__delegate;
return G__49988;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__49991__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__49991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49992__i = 0, G__49992__a = new Array(arguments.length -  0);
while (G__49992__i < G__49992__a.length) {G__49992__a[G__49992__i] = arguments[G__49992__i + 0]; ++G__49992__i;}
  args = new cljs.core.IndexedSeq(G__49992__a,0,null);
} 
return G__49991__delegate.call(this,args);};
G__49991.cljs$lang$maxFixedArity = 0;
G__49991.cljs$lang$applyTo = (function (arglist__49993){
var args = cljs.core.seq(arglist__49993);
return G__49991__delegate(args);
});
G__49991.cljs$core$IFn$_invoke$arity$variadic = G__49991__delegate;
return G__49991;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__49994__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__49994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49995__i = 0, G__49995__a = new Array(arguments.length -  0);
while (G__49995__i < G__49995__a.length) {G__49995__a[G__49995__i] = arguments[G__49995__i + 0]; ++G__49995__i;}
  args = new cljs.core.IndexedSeq(G__49995__a,0,null);
} 
return G__49994__delegate.call(this,args);};
G__49994.cljs$lang$maxFixedArity = 0;
G__49994.cljs$lang$applyTo = (function (arglist__49996){
var args = cljs.core.seq(arglist__49996);
return G__49994__delegate(args);
});
G__49994.cljs$core$IFn$_invoke$arity$variadic = G__49994__delegate;
return G__49994;
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

//# sourceMappingURL=core.js.map?rel=1527257809658
