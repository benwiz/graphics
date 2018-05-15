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
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__39180__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39181__i = 0, G__39181__a = new Array(arguments.length -  0);
while (G__39181__i < G__39181__a.length) {G__39181__a[G__39181__i] = arguments[G__39181__i + 0]; ++G__39181__i;}
  args = new cljs.core.IndexedSeq(G__39181__a,0,null);
} 
return G__39180__delegate.call(this,args);};
G__39180.cljs$lang$maxFixedArity = 0;
G__39180.cljs$lang$applyTo = (function (arglist__39182){
var args = cljs.core.seq(arglist__39182);
return G__39180__delegate(args);
});
G__39180.cljs$core$IFn$_invoke$arity$variadic = G__39180__delegate;
return G__39180;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39183__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39184__i = 0, G__39184__a = new Array(arguments.length -  0);
while (G__39184__i < G__39184__a.length) {G__39184__a[G__39184__i] = arguments[G__39184__i + 0]; ++G__39184__i;}
  args = new cljs.core.IndexedSeq(G__39184__a,0,null);
} 
return G__39183__delegate.call(this,args);};
G__39183.cljs$lang$maxFixedArity = 0;
G__39183.cljs$lang$applyTo = (function (arglist__39185){
var args = cljs.core.seq(arglist__39185);
return G__39183__delegate(args);
});
G__39183.cljs$core$IFn$_invoke$arity$variadic = G__39183__delegate;
return G__39183;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39186__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39187__i = 0, G__39187__a = new Array(arguments.length -  0);
while (G__39187__i < G__39187__a.length) {G__39187__a[G__39187__i] = arguments[G__39187__i + 0]; ++G__39187__i;}
  args = new cljs.core.IndexedSeq(G__39187__a,0,null);
} 
return G__39186__delegate.call(this,args);};
G__39186.cljs$lang$maxFixedArity = 0;
G__39186.cljs$lang$applyTo = (function (arglist__39188){
var args = cljs.core.seq(arglist__39188);
return G__39186__delegate(args);
});
G__39186.cljs$core$IFn$_invoke$arity$variadic = G__39186__delegate;
return G__39186;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__39189__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39190__i = 0, G__39190__a = new Array(arguments.length -  0);
while (G__39190__i < G__39190__a.length) {G__39190__a[G__39190__i] = arguments[G__39190__i + 0]; ++G__39190__i;}
  args = new cljs.core.IndexedSeq(G__39190__a,0,null);
} 
return G__39189__delegate.call(this,args);};
G__39189.cljs$lang$maxFixedArity = 0;
G__39189.cljs$lang$applyTo = (function (arglist__39191){
var args = cljs.core.seq(arglist__39191);
return G__39189__delegate(args);
});
G__39189.cljs$core$IFn$_invoke$arity$variadic = G__39189__delegate;
return G__39189;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39192__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39193__i = 0, G__39193__a = new Array(arguments.length -  0);
while (G__39193__i < G__39193__a.length) {G__39193__a[G__39193__i] = arguments[G__39193__i + 0]; ++G__39193__i;}
  args = new cljs.core.IndexedSeq(G__39193__a,0,null);
} 
return G__39192__delegate.call(this,args);};
G__39192.cljs$lang$maxFixedArity = 0;
G__39192.cljs$lang$applyTo = (function (arglist__39194){
var args = cljs.core.seq(arglist__39194);
return G__39192__delegate(args);
});
G__39192.cljs$core$IFn$_invoke$arity$variadic = G__39192__delegate;
return G__39192;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39195__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39196__i = 0, G__39196__a = new Array(arguments.length -  0);
while (G__39196__i < G__39196__a.length) {G__39196__a[G__39196__i] = arguments[G__39196__i + 0]; ++G__39196__i;}
  args = new cljs.core.IndexedSeq(G__39196__a,0,null);
} 
return G__39195__delegate.call(this,args);};
G__39195.cljs$lang$maxFixedArity = 0;
G__39195.cljs$lang$applyTo = (function (arglist__39197){
var args = cljs.core.seq(arglist__39197);
return G__39195__delegate(args);
});
G__39195.cljs$core$IFn$_invoke$arity$variadic = G__39195__delegate;
return G__39195;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__39198__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39199__i = 0, G__39199__a = new Array(arguments.length -  0);
while (G__39199__i < G__39199__a.length) {G__39199__a[G__39199__i] = arguments[G__39199__i + 0]; ++G__39199__i;}
  args = new cljs.core.IndexedSeq(G__39199__a,0,null);
} 
return G__39198__delegate.call(this,args);};
G__39198.cljs$lang$maxFixedArity = 0;
G__39198.cljs$lang$applyTo = (function (arglist__39200){
var args = cljs.core.seq(arglist__39200);
return G__39198__delegate(args);
});
G__39198.cljs$core$IFn$_invoke$arity$variadic = G__39198__delegate;
return G__39198;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39201__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39202__i = 0, G__39202__a = new Array(arguments.length -  0);
while (G__39202__i < G__39202__a.length) {G__39202__a[G__39202__i] = arguments[G__39202__i + 0]; ++G__39202__i;}
  args = new cljs.core.IndexedSeq(G__39202__a,0,null);
} 
return G__39201__delegate.call(this,args);};
G__39201.cljs$lang$maxFixedArity = 0;
G__39201.cljs$lang$applyTo = (function (arglist__39203){
var args = cljs.core.seq(arglist__39203);
return G__39201__delegate(args);
});
G__39201.cljs$core$IFn$_invoke$arity$variadic = G__39201__delegate;
return G__39201;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39204__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39205__i = 0, G__39205__a = new Array(arguments.length -  0);
while (G__39205__i < G__39205__a.length) {G__39205__a[G__39205__i] = arguments[G__39205__i + 0]; ++G__39205__i;}
  args = new cljs.core.IndexedSeq(G__39205__a,0,null);
} 
return G__39204__delegate.call(this,args);};
G__39204.cljs$lang$maxFixedArity = 0;
G__39204.cljs$lang$applyTo = (function (arglist__39206){
var args = cljs.core.seq(arglist__39206);
return G__39204__delegate(args);
});
G__39204.cljs$core$IFn$_invoke$arity$variadic = G__39204__delegate;
return G__39204;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__39207__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39208__i = 0, G__39208__a = new Array(arguments.length -  0);
while (G__39208__i < G__39208__a.length) {G__39208__a[G__39208__i] = arguments[G__39208__i + 0]; ++G__39208__i;}
  args = new cljs.core.IndexedSeq(G__39208__a,0,null);
} 
return G__39207__delegate.call(this,args);};
G__39207.cljs$lang$maxFixedArity = 0;
G__39207.cljs$lang$applyTo = (function (arglist__39209){
var args = cljs.core.seq(arglist__39209);
return G__39207__delegate(args);
});
G__39207.cljs$core$IFn$_invoke$arity$variadic = G__39207__delegate;
return G__39207;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39210__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39211__i = 0, G__39211__a = new Array(arguments.length -  0);
while (G__39211__i < G__39211__a.length) {G__39211__a[G__39211__i] = arguments[G__39211__i + 0]; ++G__39211__i;}
  args = new cljs.core.IndexedSeq(G__39211__a,0,null);
} 
return G__39210__delegate.call(this,args);};
G__39210.cljs$lang$maxFixedArity = 0;
G__39210.cljs$lang$applyTo = (function (arglist__39212){
var args = cljs.core.seq(arglist__39212);
return G__39210__delegate(args);
});
G__39210.cljs$core$IFn$_invoke$arity$variadic = G__39210__delegate;
return G__39210;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39213__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39214__i = 0, G__39214__a = new Array(arguments.length -  0);
while (G__39214__i < G__39214__a.length) {G__39214__a[G__39214__i] = arguments[G__39214__i + 0]; ++G__39214__i;}
  args = new cljs.core.IndexedSeq(G__39214__a,0,null);
} 
return G__39213__delegate.call(this,args);};
G__39213.cljs$lang$maxFixedArity = 0;
G__39213.cljs$lang$applyTo = (function (arglist__39215){
var args = cljs.core.seq(arglist__39215);
return G__39213__delegate(args);
});
G__39213.cljs$core$IFn$_invoke$arity$variadic = G__39213__delegate;
return G__39213;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39216__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39217__i = 0, G__39217__a = new Array(arguments.length -  0);
while (G__39217__i < G__39217__a.length) {G__39217__a[G__39217__i] = arguments[G__39217__i + 0]; ++G__39217__i;}
  args = new cljs.core.IndexedSeq(G__39217__a,0,null);
} 
return G__39216__delegate.call(this,args);};
G__39216.cljs$lang$maxFixedArity = 0;
G__39216.cljs$lang$applyTo = (function (arglist__39218){
var args = cljs.core.seq(arglist__39218);
return G__39216__delegate(args);
});
G__39216.cljs$core$IFn$_invoke$arity$variadic = G__39216__delegate;
return G__39216;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39219__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39220__i = 0, G__39220__a = new Array(arguments.length -  0);
while (G__39220__i < G__39220__a.length) {G__39220__a[G__39220__i] = arguments[G__39220__i + 0]; ++G__39220__i;}
  args = new cljs.core.IndexedSeq(G__39220__a,0,null);
} 
return G__39219__delegate.call(this,args);};
G__39219.cljs$lang$maxFixedArity = 0;
G__39219.cljs$lang$applyTo = (function (arglist__39221){
var args = cljs.core.seq(arglist__39221);
return G__39219__delegate(args);
});
G__39219.cljs$core$IFn$_invoke$arity$variadic = G__39219__delegate;
return G__39219;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39222__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39223__i = 0, G__39223__a = new Array(arguments.length -  0);
while (G__39223__i < G__39223__a.length) {G__39223__a[G__39223__i] = arguments[G__39223__i + 0]; ++G__39223__i;}
  args = new cljs.core.IndexedSeq(G__39223__a,0,null);
} 
return G__39222__delegate.call(this,args);};
G__39222.cljs$lang$maxFixedArity = 0;
G__39222.cljs$lang$applyTo = (function (arglist__39224){
var args = cljs.core.seq(arglist__39224);
return G__39222__delegate(args);
});
G__39222.cljs$core$IFn$_invoke$arity$variadic = G__39222__delegate;
return G__39222;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39225__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39226__i = 0, G__39226__a = new Array(arguments.length -  0);
while (G__39226__i < G__39226__a.length) {G__39226__a[G__39226__i] = arguments[G__39226__i + 0]; ++G__39226__i;}
  args = new cljs.core.IndexedSeq(G__39226__a,0,null);
} 
return G__39225__delegate.call(this,args);};
G__39225.cljs$lang$maxFixedArity = 0;
G__39225.cljs$lang$applyTo = (function (arglist__39227){
var args = cljs.core.seq(arglist__39227);
return G__39225__delegate(args);
});
G__39225.cljs$core$IFn$_invoke$arity$variadic = G__39225__delegate;
return G__39225;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39228__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39229__i = 0, G__39229__a = new Array(arguments.length -  0);
while (G__39229__i < G__39229__a.length) {G__39229__a[G__39229__i] = arguments[G__39229__i + 0]; ++G__39229__i;}
  args = new cljs.core.IndexedSeq(G__39229__a,0,null);
} 
return G__39228__delegate.call(this,args);};
G__39228.cljs$lang$maxFixedArity = 0;
G__39228.cljs$lang$applyTo = (function (arglist__39230){
var args = cljs.core.seq(arglist__39230);
return G__39228__delegate(args);
});
G__39228.cljs$core$IFn$_invoke$arity$variadic = G__39228__delegate;
return G__39228;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39231__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39232__i = 0, G__39232__a = new Array(arguments.length -  0);
while (G__39232__i < G__39232__a.length) {G__39232__a[G__39232__i] = arguments[G__39232__i + 0]; ++G__39232__i;}
  args = new cljs.core.IndexedSeq(G__39232__a,0,null);
} 
return G__39231__delegate.call(this,args);};
G__39231.cljs$lang$maxFixedArity = 0;
G__39231.cljs$lang$applyTo = (function (arglist__39233){
var args = cljs.core.seq(arglist__39233);
return G__39231__delegate(args);
});
G__39231.cljs$core$IFn$_invoke$arity$variadic = G__39231__delegate;
return G__39231;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39234__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39235__i = 0, G__39235__a = new Array(arguments.length -  0);
while (G__39235__i < G__39235__a.length) {G__39235__a[G__39235__i] = arguments[G__39235__i + 0]; ++G__39235__i;}
  args = new cljs.core.IndexedSeq(G__39235__a,0,null);
} 
return G__39234__delegate.call(this,args);};
G__39234.cljs$lang$maxFixedArity = 0;
G__39234.cljs$lang$applyTo = (function (arglist__39236){
var args = cljs.core.seq(arglist__39236);
return G__39234__delegate(args);
});
G__39234.cljs$core$IFn$_invoke$arity$variadic = G__39234__delegate;
return G__39234;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39237__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39238__i = 0, G__39238__a = new Array(arguments.length -  0);
while (G__39238__i < G__39238__a.length) {G__39238__a[G__39238__i] = arguments[G__39238__i + 0]; ++G__39238__i;}
  args = new cljs.core.IndexedSeq(G__39238__a,0,null);
} 
return G__39237__delegate.call(this,args);};
G__39237.cljs$lang$maxFixedArity = 0;
G__39237.cljs$lang$applyTo = (function (arglist__39239){
var args = cljs.core.seq(arglist__39239);
return G__39237__delegate(args);
});
G__39237.cljs$core$IFn$_invoke$arity$variadic = G__39237__delegate;
return G__39237;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39240__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39241__i = 0, G__39241__a = new Array(arguments.length -  0);
while (G__39241__i < G__39241__a.length) {G__39241__a[G__39241__i] = arguments[G__39241__i + 0]; ++G__39241__i;}
  args = new cljs.core.IndexedSeq(G__39241__a,0,null);
} 
return G__39240__delegate.call(this,args);};
G__39240.cljs$lang$maxFixedArity = 0;
G__39240.cljs$lang$applyTo = (function (arglist__39242){
var args = cljs.core.seq(arglist__39242);
return G__39240__delegate(args);
});
G__39240.cljs$core$IFn$_invoke$arity$variadic = G__39240__delegate;
return G__39240;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39243__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39244__i = 0, G__39244__a = new Array(arguments.length -  0);
while (G__39244__i < G__39244__a.length) {G__39244__a[G__39244__i] = arguments[G__39244__i + 0]; ++G__39244__i;}
  args = new cljs.core.IndexedSeq(G__39244__a,0,null);
} 
return G__39243__delegate.call(this,args);};
G__39243.cljs$lang$maxFixedArity = 0;
G__39243.cljs$lang$applyTo = (function (arglist__39245){
var args = cljs.core.seq(arglist__39245);
return G__39243__delegate(args);
});
G__39243.cljs$core$IFn$_invoke$arity$variadic = G__39243__delegate;
return G__39243;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39246__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39247__i = 0, G__39247__a = new Array(arguments.length -  0);
while (G__39247__i < G__39247__a.length) {G__39247__a[G__39247__i] = arguments[G__39247__i + 0]; ++G__39247__i;}
  args = new cljs.core.IndexedSeq(G__39247__a,0,null);
} 
return G__39246__delegate.call(this,args);};
G__39246.cljs$lang$maxFixedArity = 0;
G__39246.cljs$lang$applyTo = (function (arglist__39248){
var args = cljs.core.seq(arglist__39248);
return G__39246__delegate(args);
});
G__39246.cljs$core$IFn$_invoke$arity$variadic = G__39246__delegate;
return G__39246;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39249__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39250__i = 0, G__39250__a = new Array(arguments.length -  0);
while (G__39250__i < G__39250__a.length) {G__39250__a[G__39250__i] = arguments[G__39250__i + 0]; ++G__39250__i;}
  args = new cljs.core.IndexedSeq(G__39250__a,0,null);
} 
return G__39249__delegate.call(this,args);};
G__39249.cljs$lang$maxFixedArity = 0;
G__39249.cljs$lang$applyTo = (function (arglist__39251){
var args = cljs.core.seq(arglist__39251);
return G__39249__delegate(args);
});
G__39249.cljs$core$IFn$_invoke$arity$variadic = G__39249__delegate;
return G__39249;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_pointillism_deep_space = (function squiggle$core$run_sketch_$_sketch_pointillism_deep_space(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-deep-space",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39252__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39253__i = 0, G__39253__a = new Array(arguments.length -  0);
while (G__39253__i < G__39253__a.length) {G__39253__a[G__39253__i] = arguments[G__39253__i + 0]; ++G__39253__i;}
  args = new cljs.core.IndexedSeq(G__39253__a,0,null);
} 
return G__39252__delegate.call(this,args);};
G__39252.cljs$lang$maxFixedArity = 0;
G__39252.cljs$lang$applyTo = (function (arglist__39254){
var args = cljs.core.seq(arglist__39254);
return G__39252__delegate(args);
});
G__39252.cljs$core$IFn$_invoke$arity$variadic = G__39252__delegate;
return G__39252;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_deep_space))?(function() { 
var G__39255__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_deep_space,args);
};
var G__39255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39256__i = 0, G__39256__a = new Array(arguments.length -  0);
while (G__39256__i < G__39256__a.length) {G__39256__a[G__39256__i] = arguments[G__39256__i + 0]; ++G__39256__i;}
  args = new cljs.core.IndexedSeq(G__39256__a,0,null);
} 
return G__39255__delegate.call(this,args);};
G__39255.cljs$lang$maxFixedArity = 0;
G__39255.cljs$lang$applyTo = (function (arglist__39257){
var args = cljs.core.seq(arglist__39257);
return G__39255__delegate(args);
});
G__39255.cljs$core$IFn$_invoke$arity$variadic = G__39255__delegate;
return G__39255;
})()
:squiggle.pointillism.setup_deep_space),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39258__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39259__i = 0, G__39259__a = new Array(arguments.length -  0);
while (G__39259__i < G__39259__a.length) {G__39259__a[G__39259__i] = arguments[G__39259__i + 0]; ++G__39259__i;}
  args = new cljs.core.IndexedSeq(G__39259__a,0,null);
} 
return G__39258__delegate.call(this,args);};
G__39258.cljs$lang$maxFixedArity = 0;
G__39258.cljs$lang$applyTo = (function (arglist__39260){
var args = cljs.core.seq(arglist__39260);
return G__39258__delegate(args);
});
G__39258.cljs$core$IFn$_invoke$arity$variadic = G__39258__delegate;
return G__39258;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_deep_space', squiggle.core.sketch_pointillism_deep_space);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_deep_space,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-deep-space"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526422740026
