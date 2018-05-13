// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__43203__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43204__i = 0, G__43204__a = new Array(arguments.length -  0);
while (G__43204__i < G__43204__a.length) {G__43204__a[G__43204__i] = arguments[G__43204__i + 0]; ++G__43204__i;}
  args = new cljs.core.IndexedSeq(G__43204__a,0,null);
} 
return G__43203__delegate.call(this,args);};
G__43203.cljs$lang$maxFixedArity = 0;
G__43203.cljs$lang$applyTo = (function (arglist__43205){
var args = cljs.core.seq(arglist__43205);
return G__43203__delegate(args);
});
G__43203.cljs$core$IFn$_invoke$arity$variadic = G__43203__delegate;
return G__43203;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43206__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43207__i = 0, G__43207__a = new Array(arguments.length -  0);
while (G__43207__i < G__43207__a.length) {G__43207__a[G__43207__i] = arguments[G__43207__i + 0]; ++G__43207__i;}
  args = new cljs.core.IndexedSeq(G__43207__a,0,null);
} 
return G__43206__delegate.call(this,args);};
G__43206.cljs$lang$maxFixedArity = 0;
G__43206.cljs$lang$applyTo = (function (arglist__43208){
var args = cljs.core.seq(arglist__43208);
return G__43206__delegate(args);
});
G__43206.cljs$core$IFn$_invoke$arity$variadic = G__43206__delegate;
return G__43206;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43209__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43210__i = 0, G__43210__a = new Array(arguments.length -  0);
while (G__43210__i < G__43210__a.length) {G__43210__a[G__43210__i] = arguments[G__43210__i + 0]; ++G__43210__i;}
  args = new cljs.core.IndexedSeq(G__43210__a,0,null);
} 
return G__43209__delegate.call(this,args);};
G__43209.cljs$lang$maxFixedArity = 0;
G__43209.cljs$lang$applyTo = (function (arglist__43211){
var args = cljs.core.seq(arglist__43211);
return G__43209__delegate(args);
});
G__43209.cljs$core$IFn$_invoke$arity$variadic = G__43209__delegate;
return G__43209;
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
var G__43212__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43213__i = 0, G__43213__a = new Array(arguments.length -  0);
while (G__43213__i < G__43213__a.length) {G__43213__a[G__43213__i] = arguments[G__43213__i + 0]; ++G__43213__i;}
  args = new cljs.core.IndexedSeq(G__43213__a,0,null);
} 
return G__43212__delegate.call(this,args);};
G__43212.cljs$lang$maxFixedArity = 0;
G__43212.cljs$lang$applyTo = (function (arglist__43214){
var args = cljs.core.seq(arglist__43214);
return G__43212__delegate(args);
});
G__43212.cljs$core$IFn$_invoke$arity$variadic = G__43212__delegate;
return G__43212;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43215__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43216__i = 0, G__43216__a = new Array(arguments.length -  0);
while (G__43216__i < G__43216__a.length) {G__43216__a[G__43216__i] = arguments[G__43216__i + 0]; ++G__43216__i;}
  args = new cljs.core.IndexedSeq(G__43216__a,0,null);
} 
return G__43215__delegate.call(this,args);};
G__43215.cljs$lang$maxFixedArity = 0;
G__43215.cljs$lang$applyTo = (function (arglist__43217){
var args = cljs.core.seq(arglist__43217);
return G__43215__delegate(args);
});
G__43215.cljs$core$IFn$_invoke$arity$variadic = G__43215__delegate;
return G__43215;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43218__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43219__i = 0, G__43219__a = new Array(arguments.length -  0);
while (G__43219__i < G__43219__a.length) {G__43219__a[G__43219__i] = arguments[G__43219__i + 0]; ++G__43219__i;}
  args = new cljs.core.IndexedSeq(G__43219__a,0,null);
} 
return G__43218__delegate.call(this,args);};
G__43218.cljs$lang$maxFixedArity = 0;
G__43218.cljs$lang$applyTo = (function (arglist__43220){
var args = cljs.core.seq(arglist__43220);
return G__43218__delegate(args);
});
G__43218.cljs$core$IFn$_invoke$arity$variadic = G__43218__delegate;
return G__43218;
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
var G__43221__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43222__i = 0, G__43222__a = new Array(arguments.length -  0);
while (G__43222__i < G__43222__a.length) {G__43222__a[G__43222__i] = arguments[G__43222__i + 0]; ++G__43222__i;}
  args = new cljs.core.IndexedSeq(G__43222__a,0,null);
} 
return G__43221__delegate.call(this,args);};
G__43221.cljs$lang$maxFixedArity = 0;
G__43221.cljs$lang$applyTo = (function (arglist__43223){
var args = cljs.core.seq(arglist__43223);
return G__43221__delegate(args);
});
G__43221.cljs$core$IFn$_invoke$arity$variadic = G__43221__delegate;
return G__43221;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43224__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43225__i = 0, G__43225__a = new Array(arguments.length -  0);
while (G__43225__i < G__43225__a.length) {G__43225__a[G__43225__i] = arguments[G__43225__i + 0]; ++G__43225__i;}
  args = new cljs.core.IndexedSeq(G__43225__a,0,null);
} 
return G__43224__delegate.call(this,args);};
G__43224.cljs$lang$maxFixedArity = 0;
G__43224.cljs$lang$applyTo = (function (arglist__43226){
var args = cljs.core.seq(arglist__43226);
return G__43224__delegate(args);
});
G__43224.cljs$core$IFn$_invoke$arity$variadic = G__43224__delegate;
return G__43224;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43227__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43228__i = 0, G__43228__a = new Array(arguments.length -  0);
while (G__43228__i < G__43228__a.length) {G__43228__a[G__43228__i] = arguments[G__43228__i + 0]; ++G__43228__i;}
  args = new cljs.core.IndexedSeq(G__43228__a,0,null);
} 
return G__43227__delegate.call(this,args);};
G__43227.cljs$lang$maxFixedArity = 0;
G__43227.cljs$lang$applyTo = (function (arglist__43229){
var args = cljs.core.seq(arglist__43229);
return G__43227__delegate(args);
});
G__43227.cljs$core$IFn$_invoke$arity$variadic = G__43227__delegate;
return G__43227;
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
var G__43230__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43231__i = 0, G__43231__a = new Array(arguments.length -  0);
while (G__43231__i < G__43231__a.length) {G__43231__a[G__43231__i] = arguments[G__43231__i + 0]; ++G__43231__i;}
  args = new cljs.core.IndexedSeq(G__43231__a,0,null);
} 
return G__43230__delegate.call(this,args);};
G__43230.cljs$lang$maxFixedArity = 0;
G__43230.cljs$lang$applyTo = (function (arglist__43232){
var args = cljs.core.seq(arglist__43232);
return G__43230__delegate(args);
});
G__43230.cljs$core$IFn$_invoke$arity$variadic = G__43230__delegate;
return G__43230;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43233__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43234__i = 0, G__43234__a = new Array(arguments.length -  0);
while (G__43234__i < G__43234__a.length) {G__43234__a[G__43234__i] = arguments[G__43234__i + 0]; ++G__43234__i;}
  args = new cljs.core.IndexedSeq(G__43234__a,0,null);
} 
return G__43233__delegate.call(this,args);};
G__43233.cljs$lang$maxFixedArity = 0;
G__43233.cljs$lang$applyTo = (function (arglist__43235){
var args = cljs.core.seq(arglist__43235);
return G__43233__delegate(args);
});
G__43233.cljs$core$IFn$_invoke$arity$variadic = G__43233__delegate;
return G__43233;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43236__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43237__i = 0, G__43237__a = new Array(arguments.length -  0);
while (G__43237__i < G__43237__a.length) {G__43237__a[G__43237__i] = arguments[G__43237__i + 0]; ++G__43237__i;}
  args = new cljs.core.IndexedSeq(G__43237__a,0,null);
} 
return G__43236__delegate.call(this,args);};
G__43236.cljs$lang$maxFixedArity = 0;
G__43236.cljs$lang$applyTo = (function (arglist__43238){
var args = cljs.core.seq(arglist__43238);
return G__43236__delegate(args);
});
G__43236.cljs$core$IFn$_invoke$arity$variadic = G__43236__delegate;
return G__43236;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526254827591
