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
var G__39193__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39194__i = 0, G__39194__a = new Array(arguments.length -  0);
while (G__39194__i < G__39194__a.length) {G__39194__a[G__39194__i] = arguments[G__39194__i + 0]; ++G__39194__i;}
  args = new cljs.core.IndexedSeq(G__39194__a,0,null);
} 
return G__39193__delegate.call(this,args);};
G__39193.cljs$lang$maxFixedArity = 0;
G__39193.cljs$lang$applyTo = (function (arglist__39195){
var args = cljs.core.seq(arglist__39195);
return G__39193__delegate(args);
});
G__39193.cljs$core$IFn$_invoke$arity$variadic = G__39193__delegate;
return G__39193;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39196__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39197__i = 0, G__39197__a = new Array(arguments.length -  0);
while (G__39197__i < G__39197__a.length) {G__39197__a[G__39197__i] = arguments[G__39197__i + 0]; ++G__39197__i;}
  args = new cljs.core.IndexedSeq(G__39197__a,0,null);
} 
return G__39196__delegate.call(this,args);};
G__39196.cljs$lang$maxFixedArity = 0;
G__39196.cljs$lang$applyTo = (function (arglist__39198){
var args = cljs.core.seq(arglist__39198);
return G__39196__delegate(args);
});
G__39196.cljs$core$IFn$_invoke$arity$variadic = G__39196__delegate;
return G__39196;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39199__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39200__i = 0, G__39200__a = new Array(arguments.length -  0);
while (G__39200__i < G__39200__a.length) {G__39200__a[G__39200__i] = arguments[G__39200__i + 0]; ++G__39200__i;}
  args = new cljs.core.IndexedSeq(G__39200__a,0,null);
} 
return G__39199__delegate.call(this,args);};
G__39199.cljs$lang$maxFixedArity = 0;
G__39199.cljs$lang$applyTo = (function (arglist__39201){
var args = cljs.core.seq(arglist__39201);
return G__39199__delegate(args);
});
G__39199.cljs$core$IFn$_invoke$arity$variadic = G__39199__delegate;
return G__39199;
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
var G__39202__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39203__i = 0, G__39203__a = new Array(arguments.length -  0);
while (G__39203__i < G__39203__a.length) {G__39203__a[G__39203__i] = arguments[G__39203__i + 0]; ++G__39203__i;}
  args = new cljs.core.IndexedSeq(G__39203__a,0,null);
} 
return G__39202__delegate.call(this,args);};
G__39202.cljs$lang$maxFixedArity = 0;
G__39202.cljs$lang$applyTo = (function (arglist__39204){
var args = cljs.core.seq(arglist__39204);
return G__39202__delegate(args);
});
G__39202.cljs$core$IFn$_invoke$arity$variadic = G__39202__delegate;
return G__39202;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39205__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39206__i = 0, G__39206__a = new Array(arguments.length -  0);
while (G__39206__i < G__39206__a.length) {G__39206__a[G__39206__i] = arguments[G__39206__i + 0]; ++G__39206__i;}
  args = new cljs.core.IndexedSeq(G__39206__a,0,null);
} 
return G__39205__delegate.call(this,args);};
G__39205.cljs$lang$maxFixedArity = 0;
G__39205.cljs$lang$applyTo = (function (arglist__39207){
var args = cljs.core.seq(arglist__39207);
return G__39205__delegate(args);
});
G__39205.cljs$core$IFn$_invoke$arity$variadic = G__39205__delegate;
return G__39205;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39208__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39209__i = 0, G__39209__a = new Array(arguments.length -  0);
while (G__39209__i < G__39209__a.length) {G__39209__a[G__39209__i] = arguments[G__39209__i + 0]; ++G__39209__i;}
  args = new cljs.core.IndexedSeq(G__39209__a,0,null);
} 
return G__39208__delegate.call(this,args);};
G__39208.cljs$lang$maxFixedArity = 0;
G__39208.cljs$lang$applyTo = (function (arglist__39210){
var args = cljs.core.seq(arglist__39210);
return G__39208__delegate(args);
});
G__39208.cljs$core$IFn$_invoke$arity$variadic = G__39208__delegate;
return G__39208;
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
var G__39211__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39212__i = 0, G__39212__a = new Array(arguments.length -  0);
while (G__39212__i < G__39212__a.length) {G__39212__a[G__39212__i] = arguments[G__39212__i + 0]; ++G__39212__i;}
  args = new cljs.core.IndexedSeq(G__39212__a,0,null);
} 
return G__39211__delegate.call(this,args);};
G__39211.cljs$lang$maxFixedArity = 0;
G__39211.cljs$lang$applyTo = (function (arglist__39213){
var args = cljs.core.seq(arglist__39213);
return G__39211__delegate(args);
});
G__39211.cljs$core$IFn$_invoke$arity$variadic = G__39211__delegate;
return G__39211;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39214__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39215__i = 0, G__39215__a = new Array(arguments.length -  0);
while (G__39215__i < G__39215__a.length) {G__39215__a[G__39215__i] = arguments[G__39215__i + 0]; ++G__39215__i;}
  args = new cljs.core.IndexedSeq(G__39215__a,0,null);
} 
return G__39214__delegate.call(this,args);};
G__39214.cljs$lang$maxFixedArity = 0;
G__39214.cljs$lang$applyTo = (function (arglist__39216){
var args = cljs.core.seq(arglist__39216);
return G__39214__delegate(args);
});
G__39214.cljs$core$IFn$_invoke$arity$variadic = G__39214__delegate;
return G__39214;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39217__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39218__i = 0, G__39218__a = new Array(arguments.length -  0);
while (G__39218__i < G__39218__a.length) {G__39218__a[G__39218__i] = arguments[G__39218__i + 0]; ++G__39218__i;}
  args = new cljs.core.IndexedSeq(G__39218__a,0,null);
} 
return G__39217__delegate.call(this,args);};
G__39217.cljs$lang$maxFixedArity = 0;
G__39217.cljs$lang$applyTo = (function (arglist__39219){
var args = cljs.core.seq(arglist__39219);
return G__39217__delegate(args);
});
G__39217.cljs$core$IFn$_invoke$arity$variadic = G__39217__delegate;
return G__39217;
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
var G__39220__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39221__i = 0, G__39221__a = new Array(arguments.length -  0);
while (G__39221__i < G__39221__a.length) {G__39221__a[G__39221__i] = arguments[G__39221__i + 0]; ++G__39221__i;}
  args = new cljs.core.IndexedSeq(G__39221__a,0,null);
} 
return G__39220__delegate.call(this,args);};
G__39220.cljs$lang$maxFixedArity = 0;
G__39220.cljs$lang$applyTo = (function (arglist__39222){
var args = cljs.core.seq(arglist__39222);
return G__39220__delegate(args);
});
G__39220.cljs$core$IFn$_invoke$arity$variadic = G__39220__delegate;
return G__39220;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39223__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39224__i = 0, G__39224__a = new Array(arguments.length -  0);
while (G__39224__i < G__39224__a.length) {G__39224__a[G__39224__i] = arguments[G__39224__i + 0]; ++G__39224__i;}
  args = new cljs.core.IndexedSeq(G__39224__a,0,null);
} 
return G__39223__delegate.call(this,args);};
G__39223.cljs$lang$maxFixedArity = 0;
G__39223.cljs$lang$applyTo = (function (arglist__39225){
var args = cljs.core.seq(arglist__39225);
return G__39223__delegate(args);
});
G__39223.cljs$core$IFn$_invoke$arity$variadic = G__39223__delegate;
return G__39223;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39226__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39227__i = 0, G__39227__a = new Array(arguments.length -  0);
while (G__39227__i < G__39227__a.length) {G__39227__a[G__39227__i] = arguments[G__39227__i + 0]; ++G__39227__i;}
  args = new cljs.core.IndexedSeq(G__39227__a,0,null);
} 
return G__39226__delegate.call(this,args);};
G__39226.cljs$lang$maxFixedArity = 0;
G__39226.cljs$lang$applyTo = (function (arglist__39228){
var args = cljs.core.seq(arglist__39228);
return G__39226__delegate(args);
});
G__39226.cljs$core$IFn$_invoke$arity$variadic = G__39226__delegate;
return G__39226;
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

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39229__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39230__i = 0, G__39230__a = new Array(arguments.length -  0);
while (G__39230__i < G__39230__a.length) {G__39230__a[G__39230__i] = arguments[G__39230__i + 0]; ++G__39230__i;}
  args = new cljs.core.IndexedSeq(G__39230__a,0,null);
} 
return G__39229__delegate.call(this,args);};
G__39229.cljs$lang$maxFixedArity = 0;
G__39229.cljs$lang$applyTo = (function (arglist__39231){
var args = cljs.core.seq(arglist__39231);
return G__39229__delegate(args);
});
G__39229.cljs$core$IFn$_invoke$arity$variadic = G__39229__delegate;
return G__39229;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39232__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39233__i = 0, G__39233__a = new Array(arguments.length -  0);
while (G__39233__i < G__39233__a.length) {G__39233__a[G__39233__i] = arguments[G__39233__i + 0]; ++G__39233__i;}
  args = new cljs.core.IndexedSeq(G__39233__a,0,null);
} 
return G__39232__delegate.call(this,args);};
G__39232.cljs$lang$maxFixedArity = 0;
G__39232.cljs$lang$applyTo = (function (arglist__39234){
var args = cljs.core.seq(arglist__39234);
return G__39232__delegate(args);
});
G__39232.cljs$core$IFn$_invoke$arity$variadic = G__39232__delegate;
return G__39232;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39235__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39236__i = 0, G__39236__a = new Array(arguments.length -  0);
while (G__39236__i < G__39236__a.length) {G__39236__a[G__39236__i] = arguments[G__39236__i + 0]; ++G__39236__i;}
  args = new cljs.core.IndexedSeq(G__39236__a,0,null);
} 
return G__39235__delegate.call(this,args);};
G__39235.cljs$lang$maxFixedArity = 0;
G__39235.cljs$lang$applyTo = (function (arglist__39237){
var args = cljs.core.seq(arglist__39237);
return G__39235__delegate(args);
});
G__39235.cljs$core$IFn$_invoke$arity$variadic = G__39235__delegate;
return G__39235;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526327121927
