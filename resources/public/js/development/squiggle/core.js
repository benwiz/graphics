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
var G__39251__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39252__i = 0, G__39252__a = new Array(arguments.length -  0);
while (G__39252__i < G__39252__a.length) {G__39252__a[G__39252__i] = arguments[G__39252__i + 0]; ++G__39252__i;}
  args = new cljs.core.IndexedSeq(G__39252__a,0,null);
} 
return G__39251__delegate.call(this,args);};
G__39251.cljs$lang$maxFixedArity = 0;
G__39251.cljs$lang$applyTo = (function (arglist__39253){
var args = cljs.core.seq(arglist__39253);
return G__39251__delegate(args);
});
G__39251.cljs$core$IFn$_invoke$arity$variadic = G__39251__delegate;
return G__39251;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39254__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39255__i = 0, G__39255__a = new Array(arguments.length -  0);
while (G__39255__i < G__39255__a.length) {G__39255__a[G__39255__i] = arguments[G__39255__i + 0]; ++G__39255__i;}
  args = new cljs.core.IndexedSeq(G__39255__a,0,null);
} 
return G__39254__delegate.call(this,args);};
G__39254.cljs$lang$maxFixedArity = 0;
G__39254.cljs$lang$applyTo = (function (arglist__39256){
var args = cljs.core.seq(arglist__39256);
return G__39254__delegate(args);
});
G__39254.cljs$core$IFn$_invoke$arity$variadic = G__39254__delegate;
return G__39254;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39257__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39258__i = 0, G__39258__a = new Array(arguments.length -  0);
while (G__39258__i < G__39258__a.length) {G__39258__a[G__39258__i] = arguments[G__39258__i + 0]; ++G__39258__i;}
  args = new cljs.core.IndexedSeq(G__39258__a,0,null);
} 
return G__39257__delegate.call(this,args);};
G__39257.cljs$lang$maxFixedArity = 0;
G__39257.cljs$lang$applyTo = (function (arglist__39259){
var args = cljs.core.seq(arglist__39259);
return G__39257__delegate(args);
});
G__39257.cljs$core$IFn$_invoke$arity$variadic = G__39257__delegate;
return G__39257;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21666__21667__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21666__21667__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__39260__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39261__i = 0, G__39261__a = new Array(arguments.length -  0);
while (G__39261__i < G__39261__a.length) {G__39261__a[G__39261__i] = arguments[G__39261__i + 0]; ++G__39261__i;}
  args = new cljs.core.IndexedSeq(G__39261__a,0,null);
} 
return G__39260__delegate.call(this,args);};
G__39260.cljs$lang$maxFixedArity = 0;
G__39260.cljs$lang$applyTo = (function (arglist__39262){
var args = cljs.core.seq(arglist__39262);
return G__39260__delegate(args);
});
G__39260.cljs$core$IFn$_invoke$arity$variadic = G__39260__delegate;
return G__39260;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39263__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39264__i = 0, G__39264__a = new Array(arguments.length -  0);
while (G__39264__i < G__39264__a.length) {G__39264__a[G__39264__i] = arguments[G__39264__i + 0]; ++G__39264__i;}
  args = new cljs.core.IndexedSeq(G__39264__a,0,null);
} 
return G__39263__delegate.call(this,args);};
G__39263.cljs$lang$maxFixedArity = 0;
G__39263.cljs$lang$applyTo = (function (arglist__39265){
var args = cljs.core.seq(arglist__39265);
return G__39263__delegate(args);
});
G__39263.cljs$core$IFn$_invoke$arity$variadic = G__39263__delegate;
return G__39263;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39266__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39267__i = 0, G__39267__a = new Array(arguments.length -  0);
while (G__39267__i < G__39267__a.length) {G__39267__a[G__39267__i] = arguments[G__39267__i + 0]; ++G__39267__i;}
  args = new cljs.core.IndexedSeq(G__39267__a,0,null);
} 
return G__39266__delegate.call(this,args);};
G__39266.cljs$lang$maxFixedArity = 0;
G__39266.cljs$lang$applyTo = (function (arglist__39268){
var args = cljs.core.seq(arglist__39268);
return G__39266__delegate(args);
});
G__39266.cljs$core$IFn$_invoke$arity$variadic = G__39266__delegate;
return G__39266;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21666__21667__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21666__21667__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__39269__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39270__i = 0, G__39270__a = new Array(arguments.length -  0);
while (G__39270__i < G__39270__a.length) {G__39270__a[G__39270__i] = arguments[G__39270__i + 0]; ++G__39270__i;}
  args = new cljs.core.IndexedSeq(G__39270__a,0,null);
} 
return G__39269__delegate.call(this,args);};
G__39269.cljs$lang$maxFixedArity = 0;
G__39269.cljs$lang$applyTo = (function (arglist__39271){
var args = cljs.core.seq(arglist__39271);
return G__39269__delegate(args);
});
G__39269.cljs$core$IFn$_invoke$arity$variadic = G__39269__delegate;
return G__39269;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39272__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39273__i = 0, G__39273__a = new Array(arguments.length -  0);
while (G__39273__i < G__39273__a.length) {G__39273__a[G__39273__i] = arguments[G__39273__i + 0]; ++G__39273__i;}
  args = new cljs.core.IndexedSeq(G__39273__a,0,null);
} 
return G__39272__delegate.call(this,args);};
G__39272.cljs$lang$maxFixedArity = 0;
G__39272.cljs$lang$applyTo = (function (arglist__39274){
var args = cljs.core.seq(arglist__39274);
return G__39272__delegate(args);
});
G__39272.cljs$core$IFn$_invoke$arity$variadic = G__39272__delegate;
return G__39272;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39275__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39276__i = 0, G__39276__a = new Array(arguments.length -  0);
while (G__39276__i < G__39276__a.length) {G__39276__a[G__39276__i] = arguments[G__39276__i + 0]; ++G__39276__i;}
  args = new cljs.core.IndexedSeq(G__39276__a,0,null);
} 
return G__39275__delegate.call(this,args);};
G__39275.cljs$lang$maxFixedArity = 0;
G__39275.cljs$lang$applyTo = (function (arglist__39277){
var args = cljs.core.seq(arglist__39277);
return G__39275__delegate(args);
});
G__39275.cljs$core$IFn$_invoke$arity$variadic = G__39275__delegate;
return G__39275;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21666__21667__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21666__21667__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526056154524
