// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__40222__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40223__i = 0, G__40223__a = new Array(arguments.length -  0);
while (G__40223__i < G__40223__a.length) {G__40223__a[G__40223__i] = arguments[G__40223__i + 0]; ++G__40223__i;}
  args = new cljs.core.IndexedSeq(G__40223__a,0,null);
} 
return G__40222__delegate.call(this,args);};
G__40222.cljs$lang$maxFixedArity = 0;
G__40222.cljs$lang$applyTo = (function (arglist__40224){
var args = cljs.core.seq(arglist__40224);
return G__40222__delegate(args);
});
G__40222.cljs$core$IFn$_invoke$arity$variadic = G__40222__delegate;
return G__40222;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40225__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40226__i = 0, G__40226__a = new Array(arguments.length -  0);
while (G__40226__i < G__40226__a.length) {G__40226__a[G__40226__i] = arguments[G__40226__i + 0]; ++G__40226__i;}
  args = new cljs.core.IndexedSeq(G__40226__a,0,null);
} 
return G__40225__delegate.call(this,args);};
G__40225.cljs$lang$maxFixedArity = 0;
G__40225.cljs$lang$applyTo = (function (arglist__40227){
var args = cljs.core.seq(arglist__40227);
return G__40225__delegate(args);
});
G__40225.cljs$core$IFn$_invoke$arity$variadic = G__40225__delegate;
return G__40225;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40228__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40229__i = 0, G__40229__a = new Array(arguments.length -  0);
while (G__40229__i < G__40229__a.length) {G__40229__a[G__40229__i] = arguments[G__40229__i + 0]; ++G__40229__i;}
  args = new cljs.core.IndexedSeq(G__40229__a,0,null);
} 
return G__40228__delegate.call(this,args);};
G__40228.cljs$lang$maxFixedArity = 0;
G__40228.cljs$lang$applyTo = (function (arglist__40230){
var args = cljs.core.seq(arglist__40230);
return G__40228__delegate(args);
});
G__40228.cljs$core$IFn$_invoke$arity$variadic = G__40228__delegate;
return G__40228;
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
var G__40231__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40232__i = 0, G__40232__a = new Array(arguments.length -  0);
while (G__40232__i < G__40232__a.length) {G__40232__a[G__40232__i] = arguments[G__40232__i + 0]; ++G__40232__i;}
  args = new cljs.core.IndexedSeq(G__40232__a,0,null);
} 
return G__40231__delegate.call(this,args);};
G__40231.cljs$lang$maxFixedArity = 0;
G__40231.cljs$lang$applyTo = (function (arglist__40233){
var args = cljs.core.seq(arglist__40233);
return G__40231__delegate(args);
});
G__40231.cljs$core$IFn$_invoke$arity$variadic = G__40231__delegate;
return G__40231;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40234__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40235__i = 0, G__40235__a = new Array(arguments.length -  0);
while (G__40235__i < G__40235__a.length) {G__40235__a[G__40235__i] = arguments[G__40235__i + 0]; ++G__40235__i;}
  args = new cljs.core.IndexedSeq(G__40235__a,0,null);
} 
return G__40234__delegate.call(this,args);};
G__40234.cljs$lang$maxFixedArity = 0;
G__40234.cljs$lang$applyTo = (function (arglist__40236){
var args = cljs.core.seq(arglist__40236);
return G__40234__delegate(args);
});
G__40234.cljs$core$IFn$_invoke$arity$variadic = G__40234__delegate;
return G__40234;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40237__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40238__i = 0, G__40238__a = new Array(arguments.length -  0);
while (G__40238__i < G__40238__a.length) {G__40238__a[G__40238__i] = arguments[G__40238__i + 0]; ++G__40238__i;}
  args = new cljs.core.IndexedSeq(G__40238__a,0,null);
} 
return G__40237__delegate.call(this,args);};
G__40237.cljs$lang$maxFixedArity = 0;
G__40237.cljs$lang$applyTo = (function (arglist__40239){
var args = cljs.core.seq(arglist__40239);
return G__40237__delegate(args);
});
G__40237.cljs$core$IFn$_invoke$arity$variadic = G__40237__delegate;
return G__40237;
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
var G__40240__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40241__i = 0, G__40241__a = new Array(arguments.length -  0);
while (G__40241__i < G__40241__a.length) {G__40241__a[G__40241__i] = arguments[G__40241__i + 0]; ++G__40241__i;}
  args = new cljs.core.IndexedSeq(G__40241__a,0,null);
} 
return G__40240__delegate.call(this,args);};
G__40240.cljs$lang$maxFixedArity = 0;
G__40240.cljs$lang$applyTo = (function (arglist__40242){
var args = cljs.core.seq(arglist__40242);
return G__40240__delegate(args);
});
G__40240.cljs$core$IFn$_invoke$arity$variadic = G__40240__delegate;
return G__40240;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40243__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40244__i = 0, G__40244__a = new Array(arguments.length -  0);
while (G__40244__i < G__40244__a.length) {G__40244__a[G__40244__i] = arguments[G__40244__i + 0]; ++G__40244__i;}
  args = new cljs.core.IndexedSeq(G__40244__a,0,null);
} 
return G__40243__delegate.call(this,args);};
G__40243.cljs$lang$maxFixedArity = 0;
G__40243.cljs$lang$applyTo = (function (arglist__40245){
var args = cljs.core.seq(arglist__40245);
return G__40243__delegate(args);
});
G__40243.cljs$core$IFn$_invoke$arity$variadic = G__40243__delegate;
return G__40243;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40246__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40247__i = 0, G__40247__a = new Array(arguments.length -  0);
while (G__40247__i < G__40247__a.length) {G__40247__a[G__40247__i] = arguments[G__40247__i + 0]; ++G__40247__i;}
  args = new cljs.core.IndexedSeq(G__40247__a,0,null);
} 
return G__40246__delegate.call(this,args);};
G__40246.cljs$lang$maxFixedArity = 0;
G__40246.cljs$lang$applyTo = (function (arglist__40248){
var args = cljs.core.seq(arglist__40248);
return G__40246__delegate(args);
});
G__40246.cljs$core$IFn$_invoke$arity$variadic = G__40246__delegate;
return G__40246;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526062618916
