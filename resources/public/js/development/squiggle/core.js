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
var G__42967__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__42967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42968__i = 0, G__42968__a = new Array(arguments.length -  0);
while (G__42968__i < G__42968__a.length) {G__42968__a[G__42968__i] = arguments[G__42968__i + 0]; ++G__42968__i;}
  args = new cljs.core.IndexedSeq(G__42968__a,0,null);
} 
return G__42967__delegate.call(this,args);};
G__42967.cljs$lang$maxFixedArity = 0;
G__42967.cljs$lang$applyTo = (function (arglist__42969){
var args = cljs.core.seq(arglist__42969);
return G__42967__delegate(args);
});
G__42967.cljs$core$IFn$_invoke$arity$variadic = G__42967__delegate;
return G__42967;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__42970__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__42970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42971__i = 0, G__42971__a = new Array(arguments.length -  0);
while (G__42971__i < G__42971__a.length) {G__42971__a[G__42971__i] = arguments[G__42971__i + 0]; ++G__42971__i;}
  args = new cljs.core.IndexedSeq(G__42971__a,0,null);
} 
return G__42970__delegate.call(this,args);};
G__42970.cljs$lang$maxFixedArity = 0;
G__42970.cljs$lang$applyTo = (function (arglist__42972){
var args = cljs.core.seq(arglist__42972);
return G__42970__delegate(args);
});
G__42970.cljs$core$IFn$_invoke$arity$variadic = G__42970__delegate;
return G__42970;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__42973__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__42973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42974__i = 0, G__42974__a = new Array(arguments.length -  0);
while (G__42974__i < G__42974__a.length) {G__42974__a[G__42974__i] = arguments[G__42974__i + 0]; ++G__42974__i;}
  args = new cljs.core.IndexedSeq(G__42974__a,0,null);
} 
return G__42973__delegate.call(this,args);};
G__42973.cljs$lang$maxFixedArity = 0;
G__42973.cljs$lang$applyTo = (function (arglist__42975){
var args = cljs.core.seq(arglist__42975);
return G__42973__delegate(args);
});
G__42973.cljs$core$IFn$_invoke$arity$variadic = G__42973__delegate;
return G__42973;
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
var G__42976__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__42976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42977__i = 0, G__42977__a = new Array(arguments.length -  0);
while (G__42977__i < G__42977__a.length) {G__42977__a[G__42977__i] = arguments[G__42977__i + 0]; ++G__42977__i;}
  args = new cljs.core.IndexedSeq(G__42977__a,0,null);
} 
return G__42976__delegate.call(this,args);};
G__42976.cljs$lang$maxFixedArity = 0;
G__42976.cljs$lang$applyTo = (function (arglist__42978){
var args = cljs.core.seq(arglist__42978);
return G__42976__delegate(args);
});
G__42976.cljs$core$IFn$_invoke$arity$variadic = G__42976__delegate;
return G__42976;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__42979__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__42979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42980__i = 0, G__42980__a = new Array(arguments.length -  0);
while (G__42980__i < G__42980__a.length) {G__42980__a[G__42980__i] = arguments[G__42980__i + 0]; ++G__42980__i;}
  args = new cljs.core.IndexedSeq(G__42980__a,0,null);
} 
return G__42979__delegate.call(this,args);};
G__42979.cljs$lang$maxFixedArity = 0;
G__42979.cljs$lang$applyTo = (function (arglist__42981){
var args = cljs.core.seq(arglist__42981);
return G__42979__delegate(args);
});
G__42979.cljs$core$IFn$_invoke$arity$variadic = G__42979__delegate;
return G__42979;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__42982__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__42982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42983__i = 0, G__42983__a = new Array(arguments.length -  0);
while (G__42983__i < G__42983__a.length) {G__42983__a[G__42983__i] = arguments[G__42983__i + 0]; ++G__42983__i;}
  args = new cljs.core.IndexedSeq(G__42983__a,0,null);
} 
return G__42982__delegate.call(this,args);};
G__42982.cljs$lang$maxFixedArity = 0;
G__42982.cljs$lang$applyTo = (function (arglist__42984){
var args = cljs.core.seq(arglist__42984);
return G__42982__delegate(args);
});
G__42982.cljs$core$IFn$_invoke$arity$variadic = G__42982__delegate;
return G__42982;
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
var G__42985__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__42985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42986__i = 0, G__42986__a = new Array(arguments.length -  0);
while (G__42986__i < G__42986__a.length) {G__42986__a[G__42986__i] = arguments[G__42986__i + 0]; ++G__42986__i;}
  args = new cljs.core.IndexedSeq(G__42986__a,0,null);
} 
return G__42985__delegate.call(this,args);};
G__42985.cljs$lang$maxFixedArity = 0;
G__42985.cljs$lang$applyTo = (function (arglist__42987){
var args = cljs.core.seq(arglist__42987);
return G__42985__delegate(args);
});
G__42985.cljs$core$IFn$_invoke$arity$variadic = G__42985__delegate;
return G__42985;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__42988__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__42988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42989__i = 0, G__42989__a = new Array(arguments.length -  0);
while (G__42989__i < G__42989__a.length) {G__42989__a[G__42989__i] = arguments[G__42989__i + 0]; ++G__42989__i;}
  args = new cljs.core.IndexedSeq(G__42989__a,0,null);
} 
return G__42988__delegate.call(this,args);};
G__42988.cljs$lang$maxFixedArity = 0;
G__42988.cljs$lang$applyTo = (function (arglist__42990){
var args = cljs.core.seq(arglist__42990);
return G__42988__delegate(args);
});
G__42988.cljs$core$IFn$_invoke$arity$variadic = G__42988__delegate;
return G__42988;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__42991__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__42991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42992__i = 0, G__42992__a = new Array(arguments.length -  0);
while (G__42992__i < G__42992__a.length) {G__42992__a[G__42992__i] = arguments[G__42992__i + 0]; ++G__42992__i;}
  args = new cljs.core.IndexedSeq(G__42992__a,0,null);
} 
return G__42991__delegate.call(this,args);};
G__42991.cljs$lang$maxFixedArity = 0;
G__42991.cljs$lang$applyTo = (function (arglist__42993){
var args = cljs.core.seq(arglist__42993);
return G__42991__delegate(args);
});
G__42991.cljs$core$IFn$_invoke$arity$variadic = G__42991__delegate;
return G__42991;
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
var G__42994__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__42994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42995__i = 0, G__42995__a = new Array(arguments.length -  0);
while (G__42995__i < G__42995__a.length) {G__42995__a[G__42995__i] = arguments[G__42995__i + 0]; ++G__42995__i;}
  args = new cljs.core.IndexedSeq(G__42995__a,0,null);
} 
return G__42994__delegate.call(this,args);};
G__42994.cljs$lang$maxFixedArity = 0;
G__42994.cljs$lang$applyTo = (function (arglist__42996){
var args = cljs.core.seq(arglist__42996);
return G__42994__delegate(args);
});
G__42994.cljs$core$IFn$_invoke$arity$variadic = G__42994__delegate;
return G__42994;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__42997__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__42997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42998__i = 0, G__42998__a = new Array(arguments.length -  0);
while (G__42998__i < G__42998__a.length) {G__42998__a[G__42998__i] = arguments[G__42998__i + 0]; ++G__42998__i;}
  args = new cljs.core.IndexedSeq(G__42998__a,0,null);
} 
return G__42997__delegate.call(this,args);};
G__42997.cljs$lang$maxFixedArity = 0;
G__42997.cljs$lang$applyTo = (function (arglist__42999){
var args = cljs.core.seq(arglist__42999);
return G__42997__delegate(args);
});
G__42997.cljs$core$IFn$_invoke$arity$variadic = G__42997__delegate;
return G__42997;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43000__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43001__i = 0, G__43001__a = new Array(arguments.length -  0);
while (G__43001__i < G__43001__a.length) {G__43001__a[G__43001__i] = arguments[G__43001__i + 0]; ++G__43001__i;}
  args = new cljs.core.IndexedSeq(G__43001__a,0,null);
} 
return G__43000__delegate.call(this,args);};
G__43000.cljs$lang$maxFixedArity = 0;
G__43000.cljs$lang$applyTo = (function (arglist__43002){
var args = cljs.core.seq(arglist__43002);
return G__43000__delegate(args);
});
G__43000.cljs$core$IFn$_invoke$arity$variadic = G__43000__delegate;
return G__43000;
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
var G__43003__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43004__i = 0, G__43004__a = new Array(arguments.length -  0);
while (G__43004__i < G__43004__a.length) {G__43004__a[G__43004__i] = arguments[G__43004__i + 0]; ++G__43004__i;}
  args = new cljs.core.IndexedSeq(G__43004__a,0,null);
} 
return G__43003__delegate.call(this,args);};
G__43003.cljs$lang$maxFixedArity = 0;
G__43003.cljs$lang$applyTo = (function (arglist__43005){
var args = cljs.core.seq(arglist__43005);
return G__43003__delegate(args);
});
G__43003.cljs$core$IFn$_invoke$arity$variadic = G__43003__delegate;
return G__43003;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__43006__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__43006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43007__i = 0, G__43007__a = new Array(arguments.length -  0);
while (G__43007__i < G__43007__a.length) {G__43007__a[G__43007__i] = arguments[G__43007__i + 0]; ++G__43007__i;}
  args = new cljs.core.IndexedSeq(G__43007__a,0,null);
} 
return G__43006__delegate.call(this,args);};
G__43006.cljs$lang$maxFixedArity = 0;
G__43006.cljs$lang$applyTo = (function (arglist__43008){
var args = cljs.core.seq(arglist__43008);
return G__43006__delegate(args);
});
G__43006.cljs$core$IFn$_invoke$arity$variadic = G__43006__delegate;
return G__43006;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43009__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43010__i = 0, G__43010__a = new Array(arguments.length -  0);
while (G__43010__i < G__43010__a.length) {G__43010__a[G__43010__i] = arguments[G__43010__i + 0]; ++G__43010__i;}
  args = new cljs.core.IndexedSeq(G__43010__a,0,null);
} 
return G__43009__delegate.call(this,args);};
G__43009.cljs$lang$maxFixedArity = 0;
G__43009.cljs$lang$applyTo = (function (arglist__43011){
var args = cljs.core.seq(arglist__43011);
return G__43009__delegate(args);
});
G__43009.cljs$core$IFn$_invoke$arity$variadic = G__43009__delegate;
return G__43009;
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
var G__43012__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43013__i = 0, G__43013__a = new Array(arguments.length -  0);
while (G__43013__i < G__43013__a.length) {G__43013__a[G__43013__i] = arguments[G__43013__i + 0]; ++G__43013__i;}
  args = new cljs.core.IndexedSeq(G__43013__a,0,null);
} 
return G__43012__delegate.call(this,args);};
G__43012.cljs$lang$maxFixedArity = 0;
G__43012.cljs$lang$applyTo = (function (arglist__43014){
var args = cljs.core.seq(arglist__43014);
return G__43012__delegate(args);
});
G__43012.cljs$core$IFn$_invoke$arity$variadic = G__43012__delegate;
return G__43012;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__43015__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__43015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43016__i = 0, G__43016__a = new Array(arguments.length -  0);
while (G__43016__i < G__43016__a.length) {G__43016__a[G__43016__i] = arguments[G__43016__i + 0]; ++G__43016__i;}
  args = new cljs.core.IndexedSeq(G__43016__a,0,null);
} 
return G__43015__delegate.call(this,args);};
G__43015.cljs$lang$maxFixedArity = 0;
G__43015.cljs$lang$applyTo = (function (arglist__43017){
var args = cljs.core.seq(arglist__43017);
return G__43015__delegate(args);
});
G__43015.cljs$core$IFn$_invoke$arity$variadic = G__43015__delegate;
return G__43015;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43018__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43019__i = 0, G__43019__a = new Array(arguments.length -  0);
while (G__43019__i < G__43019__a.length) {G__43019__a[G__43019__i] = arguments[G__43019__i + 0]; ++G__43019__i;}
  args = new cljs.core.IndexedSeq(G__43019__a,0,null);
} 
return G__43018__delegate.call(this,args);};
G__43018.cljs$lang$maxFixedArity = 0;
G__43018.cljs$lang$applyTo = (function (arglist__43020){
var args = cljs.core.seq(arglist__43020);
return G__43018__delegate(args);
});
G__43018.cljs$core$IFn$_invoke$arity$variadic = G__43018__delegate;
return G__43018;
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
var G__43021__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43022__i = 0, G__43022__a = new Array(arguments.length -  0);
while (G__43022__i < G__43022__a.length) {G__43022__a[G__43022__i] = arguments[G__43022__i + 0]; ++G__43022__i;}
  args = new cljs.core.IndexedSeq(G__43022__a,0,null);
} 
return G__43021__delegate.call(this,args);};
G__43021.cljs$lang$maxFixedArity = 0;
G__43021.cljs$lang$applyTo = (function (arglist__43023){
var args = cljs.core.seq(arglist__43023);
return G__43021__delegate(args);
});
G__43021.cljs$core$IFn$_invoke$arity$variadic = G__43021__delegate;
return G__43021;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__43024__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__43024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43025__i = 0, G__43025__a = new Array(arguments.length -  0);
while (G__43025__i < G__43025__a.length) {G__43025__a[G__43025__i] = arguments[G__43025__i + 0]; ++G__43025__i;}
  args = new cljs.core.IndexedSeq(G__43025__a,0,null);
} 
return G__43024__delegate.call(this,args);};
G__43024.cljs$lang$maxFixedArity = 0;
G__43024.cljs$lang$applyTo = (function (arglist__43026){
var args = cljs.core.seq(arglist__43026);
return G__43024__delegate(args);
});
G__43024.cljs$core$IFn$_invoke$arity$variadic = G__43024__delegate;
return G__43024;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43027__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43028__i = 0, G__43028__a = new Array(arguments.length -  0);
while (G__43028__i < G__43028__a.length) {G__43028__a[G__43028__i] = arguments[G__43028__i + 0]; ++G__43028__i;}
  args = new cljs.core.IndexedSeq(G__43028__a,0,null);
} 
return G__43027__delegate.call(this,args);};
G__43027.cljs$lang$maxFixedArity = 0;
G__43027.cljs$lang$applyTo = (function (arglist__43029){
var args = cljs.core.seq(arglist__43029);
return G__43027__delegate(args);
});
G__43027.cljs$core$IFn$_invoke$arity$variadic = G__43027__delegate;
return G__43027;
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
var G__43030__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43031__i = 0, G__43031__a = new Array(arguments.length -  0);
while (G__43031__i < G__43031__a.length) {G__43031__a[G__43031__i] = arguments[G__43031__i + 0]; ++G__43031__i;}
  args = new cljs.core.IndexedSeq(G__43031__a,0,null);
} 
return G__43030__delegate.call(this,args);};
G__43030.cljs$lang$maxFixedArity = 0;
G__43030.cljs$lang$applyTo = (function (arglist__43032){
var args = cljs.core.seq(arglist__43032);
return G__43030__delegate(args);
});
G__43030.cljs$core$IFn$_invoke$arity$variadic = G__43030__delegate;
return G__43030;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__43033__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__43033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43034__i = 0, G__43034__a = new Array(arguments.length -  0);
while (G__43034__i < G__43034__a.length) {G__43034__a[G__43034__i] = arguments[G__43034__i + 0]; ++G__43034__i;}
  args = new cljs.core.IndexedSeq(G__43034__a,0,null);
} 
return G__43033__delegate.call(this,args);};
G__43033.cljs$lang$maxFixedArity = 0;
G__43033.cljs$lang$applyTo = (function (arglist__43035){
var args = cljs.core.seq(arglist__43035);
return G__43033__delegate(args);
});
G__43033.cljs$core$IFn$_invoke$arity$variadic = G__43033__delegate;
return G__43033;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43036__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43037__i = 0, G__43037__a = new Array(arguments.length -  0);
while (G__43037__i < G__43037__a.length) {G__43037__a[G__43037__i] = arguments[G__43037__i + 0]; ++G__43037__i;}
  args = new cljs.core.IndexedSeq(G__43037__a,0,null);
} 
return G__43036__delegate.call(this,args);};
G__43036.cljs$lang$maxFixedArity = 0;
G__43036.cljs$lang$applyTo = (function (arglist__43038){
var args = cljs.core.seq(arglist__43038);
return G__43036__delegate(args);
});
G__43036.cljs$core$IFn$_invoke$arity$variadic = G__43036__delegate;
return G__43036;
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
var G__43039__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__43039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43040__i = 0, G__43040__a = new Array(arguments.length -  0);
while (G__43040__i < G__43040__a.length) {G__43040__a[G__43040__i] = arguments[G__43040__i + 0]; ++G__43040__i;}
  args = new cljs.core.IndexedSeq(G__43040__a,0,null);
} 
return G__43039__delegate.call(this,args);};
G__43039.cljs$lang$maxFixedArity = 0;
G__43039.cljs$lang$applyTo = (function (arglist__43041){
var args = cljs.core.seq(arglist__43041);
return G__43039__delegate(args);
});
G__43039.cljs$core$IFn$_invoke$arity$variadic = G__43039__delegate;
return G__43039;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__43042__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__43042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43043__i = 0, G__43043__a = new Array(arguments.length -  0);
while (G__43043__i < G__43043__a.length) {G__43043__a[G__43043__i] = arguments[G__43043__i + 0]; ++G__43043__i;}
  args = new cljs.core.IndexedSeq(G__43043__a,0,null);
} 
return G__43042__delegate.call(this,args);};
G__43042.cljs$lang$maxFixedArity = 0;
G__43042.cljs$lang$applyTo = (function (arglist__43044){
var args = cljs.core.seq(arglist__43044);
return G__43042__delegate(args);
});
G__43042.cljs$core$IFn$_invoke$arity$variadic = G__43042__delegate;
return G__43042;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__43045__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__43045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43046__i = 0, G__43046__a = new Array(arguments.length -  0);
while (G__43046__i < G__43046__a.length) {G__43046__a[G__43046__i] = arguments[G__43046__i + 0]; ++G__43046__i;}
  args = new cljs.core.IndexedSeq(G__43046__a,0,null);
} 
return G__43045__delegate.call(this,args);};
G__43045.cljs$lang$maxFixedArity = 0;
G__43045.cljs$lang$applyTo = (function (arglist__43047){
var args = cljs.core.seq(arglist__43047);
return G__43045__delegate(args);
});
G__43045.cljs$core$IFn$_invoke$arity$variadic = G__43045__delegate;
return G__43045;
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

//# sourceMappingURL=core.js.map?rel=1527204921490
