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
var G__44111__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__44111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44112__i = 0, G__44112__a = new Array(arguments.length -  0);
while (G__44112__i < G__44112__a.length) {G__44112__a[G__44112__i] = arguments[G__44112__i + 0]; ++G__44112__i;}
  args = new cljs.core.IndexedSeq(G__44112__a,0,null);
} 
return G__44111__delegate.call(this,args);};
G__44111.cljs$lang$maxFixedArity = 0;
G__44111.cljs$lang$applyTo = (function (arglist__44113){
var args = cljs.core.seq(arglist__44113);
return G__44111__delegate(args);
});
G__44111.cljs$core$IFn$_invoke$arity$variadic = G__44111__delegate;
return G__44111;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__44114__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__44114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44115__i = 0, G__44115__a = new Array(arguments.length -  0);
while (G__44115__i < G__44115__a.length) {G__44115__a[G__44115__i] = arguments[G__44115__i + 0]; ++G__44115__i;}
  args = new cljs.core.IndexedSeq(G__44115__a,0,null);
} 
return G__44114__delegate.call(this,args);};
G__44114.cljs$lang$maxFixedArity = 0;
G__44114.cljs$lang$applyTo = (function (arglist__44116){
var args = cljs.core.seq(arglist__44116);
return G__44114__delegate(args);
});
G__44114.cljs$core$IFn$_invoke$arity$variadic = G__44114__delegate;
return G__44114;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__44117__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__44117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44118__i = 0, G__44118__a = new Array(arguments.length -  0);
while (G__44118__i < G__44118__a.length) {G__44118__a[G__44118__i] = arguments[G__44118__i + 0]; ++G__44118__i;}
  args = new cljs.core.IndexedSeq(G__44118__a,0,null);
} 
return G__44117__delegate.call(this,args);};
G__44117.cljs$lang$maxFixedArity = 0;
G__44117.cljs$lang$applyTo = (function (arglist__44119){
var args = cljs.core.seq(arglist__44119);
return G__44117__delegate(args);
});
G__44117.cljs$core$IFn$_invoke$arity$variadic = G__44117__delegate;
return G__44117;
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
var G__44120__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__44120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44121__i = 0, G__44121__a = new Array(arguments.length -  0);
while (G__44121__i < G__44121__a.length) {G__44121__a[G__44121__i] = arguments[G__44121__i + 0]; ++G__44121__i;}
  args = new cljs.core.IndexedSeq(G__44121__a,0,null);
} 
return G__44120__delegate.call(this,args);};
G__44120.cljs$lang$maxFixedArity = 0;
G__44120.cljs$lang$applyTo = (function (arglist__44122){
var args = cljs.core.seq(arglist__44122);
return G__44120__delegate(args);
});
G__44120.cljs$core$IFn$_invoke$arity$variadic = G__44120__delegate;
return G__44120;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__44123__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__44123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44124__i = 0, G__44124__a = new Array(arguments.length -  0);
while (G__44124__i < G__44124__a.length) {G__44124__a[G__44124__i] = arguments[G__44124__i + 0]; ++G__44124__i;}
  args = new cljs.core.IndexedSeq(G__44124__a,0,null);
} 
return G__44123__delegate.call(this,args);};
G__44123.cljs$lang$maxFixedArity = 0;
G__44123.cljs$lang$applyTo = (function (arglist__44125){
var args = cljs.core.seq(arglist__44125);
return G__44123__delegate(args);
});
G__44123.cljs$core$IFn$_invoke$arity$variadic = G__44123__delegate;
return G__44123;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__44126__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__44126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44127__i = 0, G__44127__a = new Array(arguments.length -  0);
while (G__44127__i < G__44127__a.length) {G__44127__a[G__44127__i] = arguments[G__44127__i + 0]; ++G__44127__i;}
  args = new cljs.core.IndexedSeq(G__44127__a,0,null);
} 
return G__44126__delegate.call(this,args);};
G__44126.cljs$lang$maxFixedArity = 0;
G__44126.cljs$lang$applyTo = (function (arglist__44128){
var args = cljs.core.seq(arglist__44128);
return G__44126__delegate(args);
});
G__44126.cljs$core$IFn$_invoke$arity$variadic = G__44126__delegate;
return G__44126;
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
var G__44129__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__44129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44130__i = 0, G__44130__a = new Array(arguments.length -  0);
while (G__44130__i < G__44130__a.length) {G__44130__a[G__44130__i] = arguments[G__44130__i + 0]; ++G__44130__i;}
  args = new cljs.core.IndexedSeq(G__44130__a,0,null);
} 
return G__44129__delegate.call(this,args);};
G__44129.cljs$lang$maxFixedArity = 0;
G__44129.cljs$lang$applyTo = (function (arglist__44131){
var args = cljs.core.seq(arglist__44131);
return G__44129__delegate(args);
});
G__44129.cljs$core$IFn$_invoke$arity$variadic = G__44129__delegate;
return G__44129;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__44132__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__44132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44133__i = 0, G__44133__a = new Array(arguments.length -  0);
while (G__44133__i < G__44133__a.length) {G__44133__a[G__44133__i] = arguments[G__44133__i + 0]; ++G__44133__i;}
  args = new cljs.core.IndexedSeq(G__44133__a,0,null);
} 
return G__44132__delegate.call(this,args);};
G__44132.cljs$lang$maxFixedArity = 0;
G__44132.cljs$lang$applyTo = (function (arglist__44134){
var args = cljs.core.seq(arglist__44134);
return G__44132__delegate(args);
});
G__44132.cljs$core$IFn$_invoke$arity$variadic = G__44132__delegate;
return G__44132;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__44135__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__44135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44136__i = 0, G__44136__a = new Array(arguments.length -  0);
while (G__44136__i < G__44136__a.length) {G__44136__a[G__44136__i] = arguments[G__44136__i + 0]; ++G__44136__i;}
  args = new cljs.core.IndexedSeq(G__44136__a,0,null);
} 
return G__44135__delegate.call(this,args);};
G__44135.cljs$lang$maxFixedArity = 0;
G__44135.cljs$lang$applyTo = (function (arglist__44137){
var args = cljs.core.seq(arglist__44137);
return G__44135__delegate(args);
});
G__44135.cljs$core$IFn$_invoke$arity$variadic = G__44135__delegate;
return G__44135;
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
var G__44138__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__44138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44139__i = 0, G__44139__a = new Array(arguments.length -  0);
while (G__44139__i < G__44139__a.length) {G__44139__a[G__44139__i] = arguments[G__44139__i + 0]; ++G__44139__i;}
  args = new cljs.core.IndexedSeq(G__44139__a,0,null);
} 
return G__44138__delegate.call(this,args);};
G__44138.cljs$lang$maxFixedArity = 0;
G__44138.cljs$lang$applyTo = (function (arglist__44140){
var args = cljs.core.seq(arglist__44140);
return G__44138__delegate(args);
});
G__44138.cljs$core$IFn$_invoke$arity$variadic = G__44138__delegate;
return G__44138;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__44141__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__44141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44142__i = 0, G__44142__a = new Array(arguments.length -  0);
while (G__44142__i < G__44142__a.length) {G__44142__a[G__44142__i] = arguments[G__44142__i + 0]; ++G__44142__i;}
  args = new cljs.core.IndexedSeq(G__44142__a,0,null);
} 
return G__44141__delegate.call(this,args);};
G__44141.cljs$lang$maxFixedArity = 0;
G__44141.cljs$lang$applyTo = (function (arglist__44143){
var args = cljs.core.seq(arglist__44143);
return G__44141__delegate(args);
});
G__44141.cljs$core$IFn$_invoke$arity$variadic = G__44141__delegate;
return G__44141;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__44144__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__44144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44145__i = 0, G__44145__a = new Array(arguments.length -  0);
while (G__44145__i < G__44145__a.length) {G__44145__a[G__44145__i] = arguments[G__44145__i + 0]; ++G__44145__i;}
  args = new cljs.core.IndexedSeq(G__44145__a,0,null);
} 
return G__44144__delegate.call(this,args);};
G__44144.cljs$lang$maxFixedArity = 0;
G__44144.cljs$lang$applyTo = (function (arglist__44146){
var args = cljs.core.seq(arglist__44146);
return G__44144__delegate(args);
});
G__44144.cljs$core$IFn$_invoke$arity$variadic = G__44144__delegate;
return G__44144;
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
var G__44147__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44148__i = 0, G__44148__a = new Array(arguments.length -  0);
while (G__44148__i < G__44148__a.length) {G__44148__a[G__44148__i] = arguments[G__44148__i + 0]; ++G__44148__i;}
  args = new cljs.core.IndexedSeq(G__44148__a,0,null);
} 
return G__44147__delegate.call(this,args);};
G__44147.cljs$lang$maxFixedArity = 0;
G__44147.cljs$lang$applyTo = (function (arglist__44149){
var args = cljs.core.seq(arglist__44149);
return G__44147__delegate(args);
});
G__44147.cljs$core$IFn$_invoke$arity$variadic = G__44147__delegate;
return G__44147;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__44150__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__44150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44151__i = 0, G__44151__a = new Array(arguments.length -  0);
while (G__44151__i < G__44151__a.length) {G__44151__a[G__44151__i] = arguments[G__44151__i + 0]; ++G__44151__i;}
  args = new cljs.core.IndexedSeq(G__44151__a,0,null);
} 
return G__44150__delegate.call(this,args);};
G__44150.cljs$lang$maxFixedArity = 0;
G__44150.cljs$lang$applyTo = (function (arglist__44152){
var args = cljs.core.seq(arglist__44152);
return G__44150__delegate(args);
});
G__44150.cljs$core$IFn$_invoke$arity$variadic = G__44150__delegate;
return G__44150;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44153__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44154__i = 0, G__44154__a = new Array(arguments.length -  0);
while (G__44154__i < G__44154__a.length) {G__44154__a[G__44154__i] = arguments[G__44154__i + 0]; ++G__44154__i;}
  args = new cljs.core.IndexedSeq(G__44154__a,0,null);
} 
return G__44153__delegate.call(this,args);};
G__44153.cljs$lang$maxFixedArity = 0;
G__44153.cljs$lang$applyTo = (function (arglist__44155){
var args = cljs.core.seq(arglist__44155);
return G__44153__delegate(args);
});
G__44153.cljs$core$IFn$_invoke$arity$variadic = G__44153__delegate;
return G__44153;
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
var G__44156__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44157__i = 0, G__44157__a = new Array(arguments.length -  0);
while (G__44157__i < G__44157__a.length) {G__44157__a[G__44157__i] = arguments[G__44157__i + 0]; ++G__44157__i;}
  args = new cljs.core.IndexedSeq(G__44157__a,0,null);
} 
return G__44156__delegate.call(this,args);};
G__44156.cljs$lang$maxFixedArity = 0;
G__44156.cljs$lang$applyTo = (function (arglist__44158){
var args = cljs.core.seq(arglist__44158);
return G__44156__delegate(args);
});
G__44156.cljs$core$IFn$_invoke$arity$variadic = G__44156__delegate;
return G__44156;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__44159__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__44159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44160__i = 0, G__44160__a = new Array(arguments.length -  0);
while (G__44160__i < G__44160__a.length) {G__44160__a[G__44160__i] = arguments[G__44160__i + 0]; ++G__44160__i;}
  args = new cljs.core.IndexedSeq(G__44160__a,0,null);
} 
return G__44159__delegate.call(this,args);};
G__44159.cljs$lang$maxFixedArity = 0;
G__44159.cljs$lang$applyTo = (function (arglist__44161){
var args = cljs.core.seq(arglist__44161);
return G__44159__delegate(args);
});
G__44159.cljs$core$IFn$_invoke$arity$variadic = G__44159__delegate;
return G__44159;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44162__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44163__i = 0, G__44163__a = new Array(arguments.length -  0);
while (G__44163__i < G__44163__a.length) {G__44163__a[G__44163__i] = arguments[G__44163__i + 0]; ++G__44163__i;}
  args = new cljs.core.IndexedSeq(G__44163__a,0,null);
} 
return G__44162__delegate.call(this,args);};
G__44162.cljs$lang$maxFixedArity = 0;
G__44162.cljs$lang$applyTo = (function (arglist__44164){
var args = cljs.core.seq(arglist__44164);
return G__44162__delegate(args);
});
G__44162.cljs$core$IFn$_invoke$arity$variadic = G__44162__delegate;
return G__44162;
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
var G__44165__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44166__i = 0, G__44166__a = new Array(arguments.length -  0);
while (G__44166__i < G__44166__a.length) {G__44166__a[G__44166__i] = arguments[G__44166__i + 0]; ++G__44166__i;}
  args = new cljs.core.IndexedSeq(G__44166__a,0,null);
} 
return G__44165__delegate.call(this,args);};
G__44165.cljs$lang$maxFixedArity = 0;
G__44165.cljs$lang$applyTo = (function (arglist__44167){
var args = cljs.core.seq(arglist__44167);
return G__44165__delegate(args);
});
G__44165.cljs$core$IFn$_invoke$arity$variadic = G__44165__delegate;
return G__44165;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__44168__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__44168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44169__i = 0, G__44169__a = new Array(arguments.length -  0);
while (G__44169__i < G__44169__a.length) {G__44169__a[G__44169__i] = arguments[G__44169__i + 0]; ++G__44169__i;}
  args = new cljs.core.IndexedSeq(G__44169__a,0,null);
} 
return G__44168__delegate.call(this,args);};
G__44168.cljs$lang$maxFixedArity = 0;
G__44168.cljs$lang$applyTo = (function (arglist__44170){
var args = cljs.core.seq(arglist__44170);
return G__44168__delegate(args);
});
G__44168.cljs$core$IFn$_invoke$arity$variadic = G__44168__delegate;
return G__44168;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44171__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44172__i = 0, G__44172__a = new Array(arguments.length -  0);
while (G__44172__i < G__44172__a.length) {G__44172__a[G__44172__i] = arguments[G__44172__i + 0]; ++G__44172__i;}
  args = new cljs.core.IndexedSeq(G__44172__a,0,null);
} 
return G__44171__delegate.call(this,args);};
G__44171.cljs$lang$maxFixedArity = 0;
G__44171.cljs$lang$applyTo = (function (arglist__44173){
var args = cljs.core.seq(arglist__44173);
return G__44171__delegate(args);
});
G__44171.cljs$core$IFn$_invoke$arity$variadic = G__44171__delegate;
return G__44171;
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
var G__44174__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44175__i = 0, G__44175__a = new Array(arguments.length -  0);
while (G__44175__i < G__44175__a.length) {G__44175__a[G__44175__i] = arguments[G__44175__i + 0]; ++G__44175__i;}
  args = new cljs.core.IndexedSeq(G__44175__a,0,null);
} 
return G__44174__delegate.call(this,args);};
G__44174.cljs$lang$maxFixedArity = 0;
G__44174.cljs$lang$applyTo = (function (arglist__44176){
var args = cljs.core.seq(arglist__44176);
return G__44174__delegate(args);
});
G__44174.cljs$core$IFn$_invoke$arity$variadic = G__44174__delegate;
return G__44174;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__44177__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__44177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44178__i = 0, G__44178__a = new Array(arguments.length -  0);
while (G__44178__i < G__44178__a.length) {G__44178__a[G__44178__i] = arguments[G__44178__i + 0]; ++G__44178__i;}
  args = new cljs.core.IndexedSeq(G__44178__a,0,null);
} 
return G__44177__delegate.call(this,args);};
G__44177.cljs$lang$maxFixedArity = 0;
G__44177.cljs$lang$applyTo = (function (arglist__44179){
var args = cljs.core.seq(arglist__44179);
return G__44177__delegate(args);
});
G__44177.cljs$core$IFn$_invoke$arity$variadic = G__44177__delegate;
return G__44177;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44180__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44181__i = 0, G__44181__a = new Array(arguments.length -  0);
while (G__44181__i < G__44181__a.length) {G__44181__a[G__44181__i] = arguments[G__44181__i + 0]; ++G__44181__i;}
  args = new cljs.core.IndexedSeq(G__44181__a,0,null);
} 
return G__44180__delegate.call(this,args);};
G__44180.cljs$lang$maxFixedArity = 0;
G__44180.cljs$lang$applyTo = (function (arglist__44182){
var args = cljs.core.seq(arglist__44182);
return G__44180__delegate(args);
});
G__44180.cljs$core$IFn$_invoke$arity$variadic = G__44180__delegate;
return G__44180;
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
var G__44183__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__44183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44184__i = 0, G__44184__a = new Array(arguments.length -  0);
while (G__44184__i < G__44184__a.length) {G__44184__a[G__44184__i] = arguments[G__44184__i + 0]; ++G__44184__i;}
  args = new cljs.core.IndexedSeq(G__44184__a,0,null);
} 
return G__44183__delegate.call(this,args);};
G__44183.cljs$lang$maxFixedArity = 0;
G__44183.cljs$lang$applyTo = (function (arglist__44185){
var args = cljs.core.seq(arglist__44185);
return G__44183__delegate(args);
});
G__44183.cljs$core$IFn$_invoke$arity$variadic = G__44183__delegate;
return G__44183;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__44186__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__44186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44187__i = 0, G__44187__a = new Array(arguments.length -  0);
while (G__44187__i < G__44187__a.length) {G__44187__a[G__44187__i] = arguments[G__44187__i + 0]; ++G__44187__i;}
  args = new cljs.core.IndexedSeq(G__44187__a,0,null);
} 
return G__44186__delegate.call(this,args);};
G__44186.cljs$lang$maxFixedArity = 0;
G__44186.cljs$lang$applyTo = (function (arglist__44188){
var args = cljs.core.seq(arglist__44188);
return G__44186__delegate(args);
});
G__44186.cljs$core$IFn$_invoke$arity$variadic = G__44186__delegate;
return G__44186;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__44189__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__44189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44190__i = 0, G__44190__a = new Array(arguments.length -  0);
while (G__44190__i < G__44190__a.length) {G__44190__a[G__44190__i] = arguments[G__44190__i + 0]; ++G__44190__i;}
  args = new cljs.core.IndexedSeq(G__44190__a,0,null);
} 
return G__44189__delegate.call(this,args);};
G__44189.cljs$lang$maxFixedArity = 0;
G__44189.cljs$lang$applyTo = (function (arglist__44191){
var args = cljs.core.seq(arglist__44191);
return G__44189__delegate(args);
});
G__44189.cljs$core$IFn$_invoke$arity$variadic = G__44189__delegate;
return G__44189;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__44192__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__44192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44193__i = 0, G__44193__a = new Array(arguments.length -  0);
while (G__44193__i < G__44193__a.length) {G__44193__a[G__44193__i] = arguments[G__44193__i + 0]; ++G__44193__i;}
  args = new cljs.core.IndexedSeq(G__44193__a,0,null);
} 
return G__44192__delegate.call(this,args);};
G__44192.cljs$lang$maxFixedArity = 0;
G__44192.cljs$lang$applyTo = (function (arglist__44194){
var args = cljs.core.seq(arglist__44194);
return G__44192__delegate(args);
});
G__44192.cljs$core$IFn$_invoke$arity$variadic = G__44192__delegate;
return G__44192;
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

//# sourceMappingURL=core.js.map?rel=1527388513500
