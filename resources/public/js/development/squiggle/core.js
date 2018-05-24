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
var G__39200__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39201__i = 0, G__39201__a = new Array(arguments.length -  0);
while (G__39201__i < G__39201__a.length) {G__39201__a[G__39201__i] = arguments[G__39201__i + 0]; ++G__39201__i;}
  args = new cljs.core.IndexedSeq(G__39201__a,0,null);
} 
return G__39200__delegate.call(this,args);};
G__39200.cljs$lang$maxFixedArity = 0;
G__39200.cljs$lang$applyTo = (function (arglist__39202){
var args = cljs.core.seq(arglist__39202);
return G__39200__delegate(args);
});
G__39200.cljs$core$IFn$_invoke$arity$variadic = G__39200__delegate;
return G__39200;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39203__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39204__i = 0, G__39204__a = new Array(arguments.length -  0);
while (G__39204__i < G__39204__a.length) {G__39204__a[G__39204__i] = arguments[G__39204__i + 0]; ++G__39204__i;}
  args = new cljs.core.IndexedSeq(G__39204__a,0,null);
} 
return G__39203__delegate.call(this,args);};
G__39203.cljs$lang$maxFixedArity = 0;
G__39203.cljs$lang$applyTo = (function (arglist__39205){
var args = cljs.core.seq(arglist__39205);
return G__39203__delegate(args);
});
G__39203.cljs$core$IFn$_invoke$arity$variadic = G__39203__delegate;
return G__39203;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39206__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39207__i = 0, G__39207__a = new Array(arguments.length -  0);
while (G__39207__i < G__39207__a.length) {G__39207__a[G__39207__i] = arguments[G__39207__i + 0]; ++G__39207__i;}
  args = new cljs.core.IndexedSeq(G__39207__a,0,null);
} 
return G__39206__delegate.call(this,args);};
G__39206.cljs$lang$maxFixedArity = 0;
G__39206.cljs$lang$applyTo = (function (arglist__39208){
var args = cljs.core.seq(arglist__39208);
return G__39206__delegate(args);
});
G__39206.cljs$core$IFn$_invoke$arity$variadic = G__39206__delegate;
return G__39206;
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
var G__39209__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39210__i = 0, G__39210__a = new Array(arguments.length -  0);
while (G__39210__i < G__39210__a.length) {G__39210__a[G__39210__i] = arguments[G__39210__i + 0]; ++G__39210__i;}
  args = new cljs.core.IndexedSeq(G__39210__a,0,null);
} 
return G__39209__delegate.call(this,args);};
G__39209.cljs$lang$maxFixedArity = 0;
G__39209.cljs$lang$applyTo = (function (arglist__39211){
var args = cljs.core.seq(arglist__39211);
return G__39209__delegate(args);
});
G__39209.cljs$core$IFn$_invoke$arity$variadic = G__39209__delegate;
return G__39209;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39212__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39213__i = 0, G__39213__a = new Array(arguments.length -  0);
while (G__39213__i < G__39213__a.length) {G__39213__a[G__39213__i] = arguments[G__39213__i + 0]; ++G__39213__i;}
  args = new cljs.core.IndexedSeq(G__39213__a,0,null);
} 
return G__39212__delegate.call(this,args);};
G__39212.cljs$lang$maxFixedArity = 0;
G__39212.cljs$lang$applyTo = (function (arglist__39214){
var args = cljs.core.seq(arglist__39214);
return G__39212__delegate(args);
});
G__39212.cljs$core$IFn$_invoke$arity$variadic = G__39212__delegate;
return G__39212;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39215__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39216__i = 0, G__39216__a = new Array(arguments.length -  0);
while (G__39216__i < G__39216__a.length) {G__39216__a[G__39216__i] = arguments[G__39216__i + 0]; ++G__39216__i;}
  args = new cljs.core.IndexedSeq(G__39216__a,0,null);
} 
return G__39215__delegate.call(this,args);};
G__39215.cljs$lang$maxFixedArity = 0;
G__39215.cljs$lang$applyTo = (function (arglist__39217){
var args = cljs.core.seq(arglist__39217);
return G__39215__delegate(args);
});
G__39215.cljs$core$IFn$_invoke$arity$variadic = G__39215__delegate;
return G__39215;
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
var G__39218__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39219__i = 0, G__39219__a = new Array(arguments.length -  0);
while (G__39219__i < G__39219__a.length) {G__39219__a[G__39219__i] = arguments[G__39219__i + 0]; ++G__39219__i;}
  args = new cljs.core.IndexedSeq(G__39219__a,0,null);
} 
return G__39218__delegate.call(this,args);};
G__39218.cljs$lang$maxFixedArity = 0;
G__39218.cljs$lang$applyTo = (function (arglist__39220){
var args = cljs.core.seq(arglist__39220);
return G__39218__delegate(args);
});
G__39218.cljs$core$IFn$_invoke$arity$variadic = G__39218__delegate;
return G__39218;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39221__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39222__i = 0, G__39222__a = new Array(arguments.length -  0);
while (G__39222__i < G__39222__a.length) {G__39222__a[G__39222__i] = arguments[G__39222__i + 0]; ++G__39222__i;}
  args = new cljs.core.IndexedSeq(G__39222__a,0,null);
} 
return G__39221__delegate.call(this,args);};
G__39221.cljs$lang$maxFixedArity = 0;
G__39221.cljs$lang$applyTo = (function (arglist__39223){
var args = cljs.core.seq(arglist__39223);
return G__39221__delegate(args);
});
G__39221.cljs$core$IFn$_invoke$arity$variadic = G__39221__delegate;
return G__39221;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39224__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39225__i = 0, G__39225__a = new Array(arguments.length -  0);
while (G__39225__i < G__39225__a.length) {G__39225__a[G__39225__i] = arguments[G__39225__i + 0]; ++G__39225__i;}
  args = new cljs.core.IndexedSeq(G__39225__a,0,null);
} 
return G__39224__delegate.call(this,args);};
G__39224.cljs$lang$maxFixedArity = 0;
G__39224.cljs$lang$applyTo = (function (arglist__39226){
var args = cljs.core.seq(arglist__39226);
return G__39224__delegate(args);
});
G__39224.cljs$core$IFn$_invoke$arity$variadic = G__39224__delegate;
return G__39224;
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
var G__39227__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39228__i = 0, G__39228__a = new Array(arguments.length -  0);
while (G__39228__i < G__39228__a.length) {G__39228__a[G__39228__i] = arguments[G__39228__i + 0]; ++G__39228__i;}
  args = new cljs.core.IndexedSeq(G__39228__a,0,null);
} 
return G__39227__delegate.call(this,args);};
G__39227.cljs$lang$maxFixedArity = 0;
G__39227.cljs$lang$applyTo = (function (arglist__39229){
var args = cljs.core.seq(arglist__39229);
return G__39227__delegate(args);
});
G__39227.cljs$core$IFn$_invoke$arity$variadic = G__39227__delegate;
return G__39227;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39230__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39231__i = 0, G__39231__a = new Array(arguments.length -  0);
while (G__39231__i < G__39231__a.length) {G__39231__a[G__39231__i] = arguments[G__39231__i + 0]; ++G__39231__i;}
  args = new cljs.core.IndexedSeq(G__39231__a,0,null);
} 
return G__39230__delegate.call(this,args);};
G__39230.cljs$lang$maxFixedArity = 0;
G__39230.cljs$lang$applyTo = (function (arglist__39232){
var args = cljs.core.seq(arglist__39232);
return G__39230__delegate(args);
});
G__39230.cljs$core$IFn$_invoke$arity$variadic = G__39230__delegate;
return G__39230;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39233__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39234__i = 0, G__39234__a = new Array(arguments.length -  0);
while (G__39234__i < G__39234__a.length) {G__39234__a[G__39234__i] = arguments[G__39234__i + 0]; ++G__39234__i;}
  args = new cljs.core.IndexedSeq(G__39234__a,0,null);
} 
return G__39233__delegate.call(this,args);};
G__39233.cljs$lang$maxFixedArity = 0;
G__39233.cljs$lang$applyTo = (function (arglist__39235){
var args = cljs.core.seq(arglist__39235);
return G__39233__delegate(args);
});
G__39233.cljs$core$IFn$_invoke$arity$variadic = G__39233__delegate;
return G__39233;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39236__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39237__i = 0, G__39237__a = new Array(arguments.length -  0);
while (G__39237__i < G__39237__a.length) {G__39237__a[G__39237__i] = arguments[G__39237__i + 0]; ++G__39237__i;}
  args = new cljs.core.IndexedSeq(G__39237__a,0,null);
} 
return G__39236__delegate.call(this,args);};
G__39236.cljs$lang$maxFixedArity = 0;
G__39236.cljs$lang$applyTo = (function (arglist__39238){
var args = cljs.core.seq(arglist__39238);
return G__39236__delegate(args);
});
G__39236.cljs$core$IFn$_invoke$arity$variadic = G__39236__delegate;
return G__39236;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39239__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39240__i = 0, G__39240__a = new Array(arguments.length -  0);
while (G__39240__i < G__39240__a.length) {G__39240__a[G__39240__i] = arguments[G__39240__i + 0]; ++G__39240__i;}
  args = new cljs.core.IndexedSeq(G__39240__a,0,null);
} 
return G__39239__delegate.call(this,args);};
G__39239.cljs$lang$maxFixedArity = 0;
G__39239.cljs$lang$applyTo = (function (arglist__39241){
var args = cljs.core.seq(arglist__39241);
return G__39239__delegate(args);
});
G__39239.cljs$core$IFn$_invoke$arity$variadic = G__39239__delegate;
return G__39239;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39242__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39243__i = 0, G__39243__a = new Array(arguments.length -  0);
while (G__39243__i < G__39243__a.length) {G__39243__a[G__39243__i] = arguments[G__39243__i + 0]; ++G__39243__i;}
  args = new cljs.core.IndexedSeq(G__39243__a,0,null);
} 
return G__39242__delegate.call(this,args);};
G__39242.cljs$lang$maxFixedArity = 0;
G__39242.cljs$lang$applyTo = (function (arglist__39244){
var args = cljs.core.seq(arglist__39244);
return G__39242__delegate(args);
});
G__39242.cljs$core$IFn$_invoke$arity$variadic = G__39242__delegate;
return G__39242;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39245__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39246__i = 0, G__39246__a = new Array(arguments.length -  0);
while (G__39246__i < G__39246__a.length) {G__39246__a[G__39246__i] = arguments[G__39246__i + 0]; ++G__39246__i;}
  args = new cljs.core.IndexedSeq(G__39246__a,0,null);
} 
return G__39245__delegate.call(this,args);};
G__39245.cljs$lang$maxFixedArity = 0;
G__39245.cljs$lang$applyTo = (function (arglist__39247){
var args = cljs.core.seq(arglist__39247);
return G__39245__delegate(args);
});
G__39245.cljs$core$IFn$_invoke$arity$variadic = G__39245__delegate;
return G__39245;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39248__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39249__i = 0, G__39249__a = new Array(arguments.length -  0);
while (G__39249__i < G__39249__a.length) {G__39249__a[G__39249__i] = arguments[G__39249__i + 0]; ++G__39249__i;}
  args = new cljs.core.IndexedSeq(G__39249__a,0,null);
} 
return G__39248__delegate.call(this,args);};
G__39248.cljs$lang$maxFixedArity = 0;
G__39248.cljs$lang$applyTo = (function (arglist__39250){
var args = cljs.core.seq(arglist__39250);
return G__39248__delegate(args);
});
G__39248.cljs$core$IFn$_invoke$arity$variadic = G__39248__delegate;
return G__39248;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39251__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
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
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39254__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
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
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39257__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
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
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39260__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
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
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39263__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
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
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39266__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
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
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39269__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
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
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__39272__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
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
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__39275__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
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
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__39278__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__39278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39279__i = 0, G__39279__a = new Array(arguments.length -  0);
while (G__39279__i < G__39279__a.length) {G__39279__a[G__39279__i] = arguments[G__39279__i + 0]; ++G__39279__i;}
  args = new cljs.core.IndexedSeq(G__39279__a,0,null);
} 
return G__39278__delegate.call(this,args);};
G__39278.cljs$lang$maxFixedArity = 0;
G__39278.cljs$lang$applyTo = (function (arglist__39280){
var args = cljs.core.seq(arglist__39280);
return G__39278__delegate(args);
});
G__39278.cljs$core$IFn$_invoke$arity$variadic = G__39278__delegate;
return G__39278;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527201158856
