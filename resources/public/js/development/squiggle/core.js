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
var G__50093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__50093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50094__i = 0, G__50094__a = new Array(arguments.length -  0);
while (G__50094__i < G__50094__a.length) {G__50094__a[G__50094__i] = arguments[G__50094__i + 0]; ++G__50094__i;}
  args = new cljs.core.IndexedSeq(G__50094__a,0,null);
} 
return G__50093__delegate.call(this,args);};
G__50093.cljs$lang$maxFixedArity = 0;
G__50093.cljs$lang$applyTo = (function (arglist__50095){
var args = cljs.core.seq(arglist__50095);
return G__50093__delegate(args);
});
G__50093.cljs$core$IFn$_invoke$arity$variadic = G__50093__delegate;
return G__50093;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__50096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__50096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50097__i = 0, G__50097__a = new Array(arguments.length -  0);
while (G__50097__i < G__50097__a.length) {G__50097__a[G__50097__i] = arguments[G__50097__i + 0]; ++G__50097__i;}
  args = new cljs.core.IndexedSeq(G__50097__a,0,null);
} 
return G__50096__delegate.call(this,args);};
G__50096.cljs$lang$maxFixedArity = 0;
G__50096.cljs$lang$applyTo = (function (arglist__50098){
var args = cljs.core.seq(arglist__50098);
return G__50096__delegate(args);
});
G__50096.cljs$core$IFn$_invoke$arity$variadic = G__50096__delegate;
return G__50096;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__50099__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__50099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50100__i = 0, G__50100__a = new Array(arguments.length -  0);
while (G__50100__i < G__50100__a.length) {G__50100__a[G__50100__i] = arguments[G__50100__i + 0]; ++G__50100__i;}
  args = new cljs.core.IndexedSeq(G__50100__a,0,null);
} 
return G__50099__delegate.call(this,args);};
G__50099.cljs$lang$maxFixedArity = 0;
G__50099.cljs$lang$applyTo = (function (arglist__50101){
var args = cljs.core.seq(arglist__50101);
return G__50099__delegate(args);
});
G__50099.cljs$core$IFn$_invoke$arity$variadic = G__50099__delegate;
return G__50099;
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
var G__50102__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__50102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50103__i = 0, G__50103__a = new Array(arguments.length -  0);
while (G__50103__i < G__50103__a.length) {G__50103__a[G__50103__i] = arguments[G__50103__i + 0]; ++G__50103__i;}
  args = new cljs.core.IndexedSeq(G__50103__a,0,null);
} 
return G__50102__delegate.call(this,args);};
G__50102.cljs$lang$maxFixedArity = 0;
G__50102.cljs$lang$applyTo = (function (arglist__50104){
var args = cljs.core.seq(arglist__50104);
return G__50102__delegate(args);
});
G__50102.cljs$core$IFn$_invoke$arity$variadic = G__50102__delegate;
return G__50102;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__50105__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__50105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50106__i = 0, G__50106__a = new Array(arguments.length -  0);
while (G__50106__i < G__50106__a.length) {G__50106__a[G__50106__i] = arguments[G__50106__i + 0]; ++G__50106__i;}
  args = new cljs.core.IndexedSeq(G__50106__a,0,null);
} 
return G__50105__delegate.call(this,args);};
G__50105.cljs$lang$maxFixedArity = 0;
G__50105.cljs$lang$applyTo = (function (arglist__50107){
var args = cljs.core.seq(arglist__50107);
return G__50105__delegate(args);
});
G__50105.cljs$core$IFn$_invoke$arity$variadic = G__50105__delegate;
return G__50105;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__50108__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__50108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50109__i = 0, G__50109__a = new Array(arguments.length -  0);
while (G__50109__i < G__50109__a.length) {G__50109__a[G__50109__i] = arguments[G__50109__i + 0]; ++G__50109__i;}
  args = new cljs.core.IndexedSeq(G__50109__a,0,null);
} 
return G__50108__delegate.call(this,args);};
G__50108.cljs$lang$maxFixedArity = 0;
G__50108.cljs$lang$applyTo = (function (arglist__50110){
var args = cljs.core.seq(arglist__50110);
return G__50108__delegate(args);
});
G__50108.cljs$core$IFn$_invoke$arity$variadic = G__50108__delegate;
return G__50108;
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
var G__50111__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__50111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50112__i = 0, G__50112__a = new Array(arguments.length -  0);
while (G__50112__i < G__50112__a.length) {G__50112__a[G__50112__i] = arguments[G__50112__i + 0]; ++G__50112__i;}
  args = new cljs.core.IndexedSeq(G__50112__a,0,null);
} 
return G__50111__delegate.call(this,args);};
G__50111.cljs$lang$maxFixedArity = 0;
G__50111.cljs$lang$applyTo = (function (arglist__50113){
var args = cljs.core.seq(arglist__50113);
return G__50111__delegate(args);
});
G__50111.cljs$core$IFn$_invoke$arity$variadic = G__50111__delegate;
return G__50111;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__50114__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__50114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50115__i = 0, G__50115__a = new Array(arguments.length -  0);
while (G__50115__i < G__50115__a.length) {G__50115__a[G__50115__i] = arguments[G__50115__i + 0]; ++G__50115__i;}
  args = new cljs.core.IndexedSeq(G__50115__a,0,null);
} 
return G__50114__delegate.call(this,args);};
G__50114.cljs$lang$maxFixedArity = 0;
G__50114.cljs$lang$applyTo = (function (arglist__50116){
var args = cljs.core.seq(arglist__50116);
return G__50114__delegate(args);
});
G__50114.cljs$core$IFn$_invoke$arity$variadic = G__50114__delegate;
return G__50114;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__50117__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__50117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50118__i = 0, G__50118__a = new Array(arguments.length -  0);
while (G__50118__i < G__50118__a.length) {G__50118__a[G__50118__i] = arguments[G__50118__i + 0]; ++G__50118__i;}
  args = new cljs.core.IndexedSeq(G__50118__a,0,null);
} 
return G__50117__delegate.call(this,args);};
G__50117.cljs$lang$maxFixedArity = 0;
G__50117.cljs$lang$applyTo = (function (arglist__50119){
var args = cljs.core.seq(arglist__50119);
return G__50117__delegate(args);
});
G__50117.cljs$core$IFn$_invoke$arity$variadic = G__50117__delegate;
return G__50117;
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
var G__50120__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__50120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50121__i = 0, G__50121__a = new Array(arguments.length -  0);
while (G__50121__i < G__50121__a.length) {G__50121__a[G__50121__i] = arguments[G__50121__i + 0]; ++G__50121__i;}
  args = new cljs.core.IndexedSeq(G__50121__a,0,null);
} 
return G__50120__delegate.call(this,args);};
G__50120.cljs$lang$maxFixedArity = 0;
G__50120.cljs$lang$applyTo = (function (arglist__50122){
var args = cljs.core.seq(arglist__50122);
return G__50120__delegate(args);
});
G__50120.cljs$core$IFn$_invoke$arity$variadic = G__50120__delegate;
return G__50120;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__50123__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__50123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50124__i = 0, G__50124__a = new Array(arguments.length -  0);
while (G__50124__i < G__50124__a.length) {G__50124__a[G__50124__i] = arguments[G__50124__i + 0]; ++G__50124__i;}
  args = new cljs.core.IndexedSeq(G__50124__a,0,null);
} 
return G__50123__delegate.call(this,args);};
G__50123.cljs$lang$maxFixedArity = 0;
G__50123.cljs$lang$applyTo = (function (arglist__50125){
var args = cljs.core.seq(arglist__50125);
return G__50123__delegate(args);
});
G__50123.cljs$core$IFn$_invoke$arity$variadic = G__50123__delegate;
return G__50123;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__50126__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__50126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50127__i = 0, G__50127__a = new Array(arguments.length -  0);
while (G__50127__i < G__50127__a.length) {G__50127__a[G__50127__i] = arguments[G__50127__i + 0]; ++G__50127__i;}
  args = new cljs.core.IndexedSeq(G__50127__a,0,null);
} 
return G__50126__delegate.call(this,args);};
G__50126.cljs$lang$maxFixedArity = 0;
G__50126.cljs$lang$applyTo = (function (arglist__50128){
var args = cljs.core.seq(arglist__50128);
return G__50126__delegate(args);
});
G__50126.cljs$core$IFn$_invoke$arity$variadic = G__50126__delegate;
return G__50126;
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
var G__50129__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50130__i = 0, G__50130__a = new Array(arguments.length -  0);
while (G__50130__i < G__50130__a.length) {G__50130__a[G__50130__i] = arguments[G__50130__i + 0]; ++G__50130__i;}
  args = new cljs.core.IndexedSeq(G__50130__a,0,null);
} 
return G__50129__delegate.call(this,args);};
G__50129.cljs$lang$maxFixedArity = 0;
G__50129.cljs$lang$applyTo = (function (arglist__50131){
var args = cljs.core.seq(arglist__50131);
return G__50129__delegate(args);
});
G__50129.cljs$core$IFn$_invoke$arity$variadic = G__50129__delegate;
return G__50129;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__50132__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__50132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50133__i = 0, G__50133__a = new Array(arguments.length -  0);
while (G__50133__i < G__50133__a.length) {G__50133__a[G__50133__i] = arguments[G__50133__i + 0]; ++G__50133__i;}
  args = new cljs.core.IndexedSeq(G__50133__a,0,null);
} 
return G__50132__delegate.call(this,args);};
G__50132.cljs$lang$maxFixedArity = 0;
G__50132.cljs$lang$applyTo = (function (arglist__50134){
var args = cljs.core.seq(arglist__50134);
return G__50132__delegate(args);
});
G__50132.cljs$core$IFn$_invoke$arity$variadic = G__50132__delegate;
return G__50132;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50135__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50136__i = 0, G__50136__a = new Array(arguments.length -  0);
while (G__50136__i < G__50136__a.length) {G__50136__a[G__50136__i] = arguments[G__50136__i + 0]; ++G__50136__i;}
  args = new cljs.core.IndexedSeq(G__50136__a,0,null);
} 
return G__50135__delegate.call(this,args);};
G__50135.cljs$lang$maxFixedArity = 0;
G__50135.cljs$lang$applyTo = (function (arglist__50137){
var args = cljs.core.seq(arglist__50137);
return G__50135__delegate(args);
});
G__50135.cljs$core$IFn$_invoke$arity$variadic = G__50135__delegate;
return G__50135;
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
var G__50138__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50139__i = 0, G__50139__a = new Array(arguments.length -  0);
while (G__50139__i < G__50139__a.length) {G__50139__a[G__50139__i] = arguments[G__50139__i + 0]; ++G__50139__i;}
  args = new cljs.core.IndexedSeq(G__50139__a,0,null);
} 
return G__50138__delegate.call(this,args);};
G__50138.cljs$lang$maxFixedArity = 0;
G__50138.cljs$lang$applyTo = (function (arglist__50140){
var args = cljs.core.seq(arglist__50140);
return G__50138__delegate(args);
});
G__50138.cljs$core$IFn$_invoke$arity$variadic = G__50138__delegate;
return G__50138;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__50141__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__50141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50142__i = 0, G__50142__a = new Array(arguments.length -  0);
while (G__50142__i < G__50142__a.length) {G__50142__a[G__50142__i] = arguments[G__50142__i + 0]; ++G__50142__i;}
  args = new cljs.core.IndexedSeq(G__50142__a,0,null);
} 
return G__50141__delegate.call(this,args);};
G__50141.cljs$lang$maxFixedArity = 0;
G__50141.cljs$lang$applyTo = (function (arglist__50143){
var args = cljs.core.seq(arglist__50143);
return G__50141__delegate(args);
});
G__50141.cljs$core$IFn$_invoke$arity$variadic = G__50141__delegate;
return G__50141;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50144__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50145__i = 0, G__50145__a = new Array(arguments.length -  0);
while (G__50145__i < G__50145__a.length) {G__50145__a[G__50145__i] = arguments[G__50145__i + 0]; ++G__50145__i;}
  args = new cljs.core.IndexedSeq(G__50145__a,0,null);
} 
return G__50144__delegate.call(this,args);};
G__50144.cljs$lang$maxFixedArity = 0;
G__50144.cljs$lang$applyTo = (function (arglist__50146){
var args = cljs.core.seq(arglist__50146);
return G__50144__delegate(args);
});
G__50144.cljs$core$IFn$_invoke$arity$variadic = G__50144__delegate;
return G__50144;
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
var G__50147__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50148__i = 0, G__50148__a = new Array(arguments.length -  0);
while (G__50148__i < G__50148__a.length) {G__50148__a[G__50148__i] = arguments[G__50148__i + 0]; ++G__50148__i;}
  args = new cljs.core.IndexedSeq(G__50148__a,0,null);
} 
return G__50147__delegate.call(this,args);};
G__50147.cljs$lang$maxFixedArity = 0;
G__50147.cljs$lang$applyTo = (function (arglist__50149){
var args = cljs.core.seq(arglist__50149);
return G__50147__delegate(args);
});
G__50147.cljs$core$IFn$_invoke$arity$variadic = G__50147__delegate;
return G__50147;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__50150__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__50150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50151__i = 0, G__50151__a = new Array(arguments.length -  0);
while (G__50151__i < G__50151__a.length) {G__50151__a[G__50151__i] = arguments[G__50151__i + 0]; ++G__50151__i;}
  args = new cljs.core.IndexedSeq(G__50151__a,0,null);
} 
return G__50150__delegate.call(this,args);};
G__50150.cljs$lang$maxFixedArity = 0;
G__50150.cljs$lang$applyTo = (function (arglist__50152){
var args = cljs.core.seq(arglist__50152);
return G__50150__delegate(args);
});
G__50150.cljs$core$IFn$_invoke$arity$variadic = G__50150__delegate;
return G__50150;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50153__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50154__i = 0, G__50154__a = new Array(arguments.length -  0);
while (G__50154__i < G__50154__a.length) {G__50154__a[G__50154__i] = arguments[G__50154__i + 0]; ++G__50154__i;}
  args = new cljs.core.IndexedSeq(G__50154__a,0,null);
} 
return G__50153__delegate.call(this,args);};
G__50153.cljs$lang$maxFixedArity = 0;
G__50153.cljs$lang$applyTo = (function (arglist__50155){
var args = cljs.core.seq(arglist__50155);
return G__50153__delegate(args);
});
G__50153.cljs$core$IFn$_invoke$arity$variadic = G__50153__delegate;
return G__50153;
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
var G__50156__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50157__i = 0, G__50157__a = new Array(arguments.length -  0);
while (G__50157__i < G__50157__a.length) {G__50157__a[G__50157__i] = arguments[G__50157__i + 0]; ++G__50157__i;}
  args = new cljs.core.IndexedSeq(G__50157__a,0,null);
} 
return G__50156__delegate.call(this,args);};
G__50156.cljs$lang$maxFixedArity = 0;
G__50156.cljs$lang$applyTo = (function (arglist__50158){
var args = cljs.core.seq(arglist__50158);
return G__50156__delegate(args);
});
G__50156.cljs$core$IFn$_invoke$arity$variadic = G__50156__delegate;
return G__50156;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__50159__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__50159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50160__i = 0, G__50160__a = new Array(arguments.length -  0);
while (G__50160__i < G__50160__a.length) {G__50160__a[G__50160__i] = arguments[G__50160__i + 0]; ++G__50160__i;}
  args = new cljs.core.IndexedSeq(G__50160__a,0,null);
} 
return G__50159__delegate.call(this,args);};
G__50159.cljs$lang$maxFixedArity = 0;
G__50159.cljs$lang$applyTo = (function (arglist__50161){
var args = cljs.core.seq(arglist__50161);
return G__50159__delegate(args);
});
G__50159.cljs$core$IFn$_invoke$arity$variadic = G__50159__delegate;
return G__50159;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50162__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50163__i = 0, G__50163__a = new Array(arguments.length -  0);
while (G__50163__i < G__50163__a.length) {G__50163__a[G__50163__i] = arguments[G__50163__i + 0]; ++G__50163__i;}
  args = new cljs.core.IndexedSeq(G__50163__a,0,null);
} 
return G__50162__delegate.call(this,args);};
G__50162.cljs$lang$maxFixedArity = 0;
G__50162.cljs$lang$applyTo = (function (arglist__50164){
var args = cljs.core.seq(arglist__50164);
return G__50162__delegate(args);
});
G__50162.cljs$core$IFn$_invoke$arity$variadic = G__50162__delegate;
return G__50162;
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
var G__50165__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__50165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50166__i = 0, G__50166__a = new Array(arguments.length -  0);
while (G__50166__i < G__50166__a.length) {G__50166__a[G__50166__i] = arguments[G__50166__i + 0]; ++G__50166__i;}
  args = new cljs.core.IndexedSeq(G__50166__a,0,null);
} 
return G__50165__delegate.call(this,args);};
G__50165.cljs$lang$maxFixedArity = 0;
G__50165.cljs$lang$applyTo = (function (arglist__50167){
var args = cljs.core.seq(arglist__50167);
return G__50165__delegate(args);
});
G__50165.cljs$core$IFn$_invoke$arity$variadic = G__50165__delegate;
return G__50165;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__50168__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__50168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50169__i = 0, G__50169__a = new Array(arguments.length -  0);
while (G__50169__i < G__50169__a.length) {G__50169__a[G__50169__i] = arguments[G__50169__i + 0]; ++G__50169__i;}
  args = new cljs.core.IndexedSeq(G__50169__a,0,null);
} 
return G__50168__delegate.call(this,args);};
G__50168.cljs$lang$maxFixedArity = 0;
G__50168.cljs$lang$applyTo = (function (arglist__50170){
var args = cljs.core.seq(arglist__50170);
return G__50168__delegate(args);
});
G__50168.cljs$core$IFn$_invoke$arity$variadic = G__50168__delegate;
return G__50168;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__50171__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__50171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50172__i = 0, G__50172__a = new Array(arguments.length -  0);
while (G__50172__i < G__50172__a.length) {G__50172__a[G__50172__i] = arguments[G__50172__i + 0]; ++G__50172__i;}
  args = new cljs.core.IndexedSeq(G__50172__a,0,null);
} 
return G__50171__delegate.call(this,args);};
G__50171.cljs$lang$maxFixedArity = 0;
G__50171.cljs$lang$applyTo = (function (arglist__50173){
var args = cljs.core.seq(arglist__50173);
return G__50171__delegate(args);
});
G__50171.cljs$core$IFn$_invoke$arity$variadic = G__50171__delegate;
return G__50171;
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

//# sourceMappingURL=core.js.map?rel=1527257854773
