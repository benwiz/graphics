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
var G__50178__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__50178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50179__i = 0, G__50179__a = new Array(arguments.length -  0);
while (G__50179__i < G__50179__a.length) {G__50179__a[G__50179__i] = arguments[G__50179__i + 0]; ++G__50179__i;}
  args = new cljs.core.IndexedSeq(G__50179__a,0,null);
} 
return G__50178__delegate.call(this,args);};
G__50178.cljs$lang$maxFixedArity = 0;
G__50178.cljs$lang$applyTo = (function (arglist__50180){
var args = cljs.core.seq(arglist__50180);
return G__50178__delegate(args);
});
G__50178.cljs$core$IFn$_invoke$arity$variadic = G__50178__delegate;
return G__50178;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__50181__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__50181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50182__i = 0, G__50182__a = new Array(arguments.length -  0);
while (G__50182__i < G__50182__a.length) {G__50182__a[G__50182__i] = arguments[G__50182__i + 0]; ++G__50182__i;}
  args = new cljs.core.IndexedSeq(G__50182__a,0,null);
} 
return G__50181__delegate.call(this,args);};
G__50181.cljs$lang$maxFixedArity = 0;
G__50181.cljs$lang$applyTo = (function (arglist__50183){
var args = cljs.core.seq(arglist__50183);
return G__50181__delegate(args);
});
G__50181.cljs$core$IFn$_invoke$arity$variadic = G__50181__delegate;
return G__50181;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__50184__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__50184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50185__i = 0, G__50185__a = new Array(arguments.length -  0);
while (G__50185__i < G__50185__a.length) {G__50185__a[G__50185__i] = arguments[G__50185__i + 0]; ++G__50185__i;}
  args = new cljs.core.IndexedSeq(G__50185__a,0,null);
} 
return G__50184__delegate.call(this,args);};
G__50184.cljs$lang$maxFixedArity = 0;
G__50184.cljs$lang$applyTo = (function (arglist__50186){
var args = cljs.core.seq(arglist__50186);
return G__50184__delegate(args);
});
G__50184.cljs$core$IFn$_invoke$arity$variadic = G__50184__delegate;
return G__50184;
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
var G__50187__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__50187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50188__i = 0, G__50188__a = new Array(arguments.length -  0);
while (G__50188__i < G__50188__a.length) {G__50188__a[G__50188__i] = arguments[G__50188__i + 0]; ++G__50188__i;}
  args = new cljs.core.IndexedSeq(G__50188__a,0,null);
} 
return G__50187__delegate.call(this,args);};
G__50187.cljs$lang$maxFixedArity = 0;
G__50187.cljs$lang$applyTo = (function (arglist__50189){
var args = cljs.core.seq(arglist__50189);
return G__50187__delegate(args);
});
G__50187.cljs$core$IFn$_invoke$arity$variadic = G__50187__delegate;
return G__50187;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__50190__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__50190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50191__i = 0, G__50191__a = new Array(arguments.length -  0);
while (G__50191__i < G__50191__a.length) {G__50191__a[G__50191__i] = arguments[G__50191__i + 0]; ++G__50191__i;}
  args = new cljs.core.IndexedSeq(G__50191__a,0,null);
} 
return G__50190__delegate.call(this,args);};
G__50190.cljs$lang$maxFixedArity = 0;
G__50190.cljs$lang$applyTo = (function (arglist__50192){
var args = cljs.core.seq(arglist__50192);
return G__50190__delegate(args);
});
G__50190.cljs$core$IFn$_invoke$arity$variadic = G__50190__delegate;
return G__50190;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__50193__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__50193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50194__i = 0, G__50194__a = new Array(arguments.length -  0);
while (G__50194__i < G__50194__a.length) {G__50194__a[G__50194__i] = arguments[G__50194__i + 0]; ++G__50194__i;}
  args = new cljs.core.IndexedSeq(G__50194__a,0,null);
} 
return G__50193__delegate.call(this,args);};
G__50193.cljs$lang$maxFixedArity = 0;
G__50193.cljs$lang$applyTo = (function (arglist__50195){
var args = cljs.core.seq(arglist__50195);
return G__50193__delegate(args);
});
G__50193.cljs$core$IFn$_invoke$arity$variadic = G__50193__delegate;
return G__50193;
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
var G__50196__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__50196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50197__i = 0, G__50197__a = new Array(arguments.length -  0);
while (G__50197__i < G__50197__a.length) {G__50197__a[G__50197__i] = arguments[G__50197__i + 0]; ++G__50197__i;}
  args = new cljs.core.IndexedSeq(G__50197__a,0,null);
} 
return G__50196__delegate.call(this,args);};
G__50196.cljs$lang$maxFixedArity = 0;
G__50196.cljs$lang$applyTo = (function (arglist__50198){
var args = cljs.core.seq(arglist__50198);
return G__50196__delegate(args);
});
G__50196.cljs$core$IFn$_invoke$arity$variadic = G__50196__delegate;
return G__50196;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__50199__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__50199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50200__i = 0, G__50200__a = new Array(arguments.length -  0);
while (G__50200__i < G__50200__a.length) {G__50200__a[G__50200__i] = arguments[G__50200__i + 0]; ++G__50200__i;}
  args = new cljs.core.IndexedSeq(G__50200__a,0,null);
} 
return G__50199__delegate.call(this,args);};
G__50199.cljs$lang$maxFixedArity = 0;
G__50199.cljs$lang$applyTo = (function (arglist__50201){
var args = cljs.core.seq(arglist__50201);
return G__50199__delegate(args);
});
G__50199.cljs$core$IFn$_invoke$arity$variadic = G__50199__delegate;
return G__50199;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__50202__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__50202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50203__i = 0, G__50203__a = new Array(arguments.length -  0);
while (G__50203__i < G__50203__a.length) {G__50203__a[G__50203__i] = arguments[G__50203__i + 0]; ++G__50203__i;}
  args = new cljs.core.IndexedSeq(G__50203__a,0,null);
} 
return G__50202__delegate.call(this,args);};
G__50202.cljs$lang$maxFixedArity = 0;
G__50202.cljs$lang$applyTo = (function (arglist__50204){
var args = cljs.core.seq(arglist__50204);
return G__50202__delegate(args);
});
G__50202.cljs$core$IFn$_invoke$arity$variadic = G__50202__delegate;
return G__50202;
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
var G__50205__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__50205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50206__i = 0, G__50206__a = new Array(arguments.length -  0);
while (G__50206__i < G__50206__a.length) {G__50206__a[G__50206__i] = arguments[G__50206__i + 0]; ++G__50206__i;}
  args = new cljs.core.IndexedSeq(G__50206__a,0,null);
} 
return G__50205__delegate.call(this,args);};
G__50205.cljs$lang$maxFixedArity = 0;
G__50205.cljs$lang$applyTo = (function (arglist__50207){
var args = cljs.core.seq(arglist__50207);
return G__50205__delegate(args);
});
G__50205.cljs$core$IFn$_invoke$arity$variadic = G__50205__delegate;
return G__50205;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__50208__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__50208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50209__i = 0, G__50209__a = new Array(arguments.length -  0);
while (G__50209__i < G__50209__a.length) {G__50209__a[G__50209__i] = arguments[G__50209__i + 0]; ++G__50209__i;}
  args = new cljs.core.IndexedSeq(G__50209__a,0,null);
} 
return G__50208__delegate.call(this,args);};
G__50208.cljs$lang$maxFixedArity = 0;
G__50208.cljs$lang$applyTo = (function (arglist__50210){
var args = cljs.core.seq(arglist__50210);
return G__50208__delegate(args);
});
G__50208.cljs$core$IFn$_invoke$arity$variadic = G__50208__delegate;
return G__50208;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__50211__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__50211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50212__i = 0, G__50212__a = new Array(arguments.length -  0);
while (G__50212__i < G__50212__a.length) {G__50212__a[G__50212__i] = arguments[G__50212__i + 0]; ++G__50212__i;}
  args = new cljs.core.IndexedSeq(G__50212__a,0,null);
} 
return G__50211__delegate.call(this,args);};
G__50211.cljs$lang$maxFixedArity = 0;
G__50211.cljs$lang$applyTo = (function (arglist__50213){
var args = cljs.core.seq(arglist__50213);
return G__50211__delegate(args);
});
G__50211.cljs$core$IFn$_invoke$arity$variadic = G__50211__delegate;
return G__50211;
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
var G__50214__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50215__i = 0, G__50215__a = new Array(arguments.length -  0);
while (G__50215__i < G__50215__a.length) {G__50215__a[G__50215__i] = arguments[G__50215__i + 0]; ++G__50215__i;}
  args = new cljs.core.IndexedSeq(G__50215__a,0,null);
} 
return G__50214__delegate.call(this,args);};
G__50214.cljs$lang$maxFixedArity = 0;
G__50214.cljs$lang$applyTo = (function (arglist__50216){
var args = cljs.core.seq(arglist__50216);
return G__50214__delegate(args);
});
G__50214.cljs$core$IFn$_invoke$arity$variadic = G__50214__delegate;
return G__50214;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__50217__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__50217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50218__i = 0, G__50218__a = new Array(arguments.length -  0);
while (G__50218__i < G__50218__a.length) {G__50218__a[G__50218__i] = arguments[G__50218__i + 0]; ++G__50218__i;}
  args = new cljs.core.IndexedSeq(G__50218__a,0,null);
} 
return G__50217__delegate.call(this,args);};
G__50217.cljs$lang$maxFixedArity = 0;
G__50217.cljs$lang$applyTo = (function (arglist__50219){
var args = cljs.core.seq(arglist__50219);
return G__50217__delegate(args);
});
G__50217.cljs$core$IFn$_invoke$arity$variadic = G__50217__delegate;
return G__50217;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50220__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50221__i = 0, G__50221__a = new Array(arguments.length -  0);
while (G__50221__i < G__50221__a.length) {G__50221__a[G__50221__i] = arguments[G__50221__i + 0]; ++G__50221__i;}
  args = new cljs.core.IndexedSeq(G__50221__a,0,null);
} 
return G__50220__delegate.call(this,args);};
G__50220.cljs$lang$maxFixedArity = 0;
G__50220.cljs$lang$applyTo = (function (arglist__50222){
var args = cljs.core.seq(arglist__50222);
return G__50220__delegate(args);
});
G__50220.cljs$core$IFn$_invoke$arity$variadic = G__50220__delegate;
return G__50220;
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
var G__50223__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50224__i = 0, G__50224__a = new Array(arguments.length -  0);
while (G__50224__i < G__50224__a.length) {G__50224__a[G__50224__i] = arguments[G__50224__i + 0]; ++G__50224__i;}
  args = new cljs.core.IndexedSeq(G__50224__a,0,null);
} 
return G__50223__delegate.call(this,args);};
G__50223.cljs$lang$maxFixedArity = 0;
G__50223.cljs$lang$applyTo = (function (arglist__50225){
var args = cljs.core.seq(arglist__50225);
return G__50223__delegate(args);
});
G__50223.cljs$core$IFn$_invoke$arity$variadic = G__50223__delegate;
return G__50223;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__50226__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__50226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50227__i = 0, G__50227__a = new Array(arguments.length -  0);
while (G__50227__i < G__50227__a.length) {G__50227__a[G__50227__i] = arguments[G__50227__i + 0]; ++G__50227__i;}
  args = new cljs.core.IndexedSeq(G__50227__a,0,null);
} 
return G__50226__delegate.call(this,args);};
G__50226.cljs$lang$maxFixedArity = 0;
G__50226.cljs$lang$applyTo = (function (arglist__50228){
var args = cljs.core.seq(arglist__50228);
return G__50226__delegate(args);
});
G__50226.cljs$core$IFn$_invoke$arity$variadic = G__50226__delegate;
return G__50226;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50229__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50230__i = 0, G__50230__a = new Array(arguments.length -  0);
while (G__50230__i < G__50230__a.length) {G__50230__a[G__50230__i] = arguments[G__50230__i + 0]; ++G__50230__i;}
  args = new cljs.core.IndexedSeq(G__50230__a,0,null);
} 
return G__50229__delegate.call(this,args);};
G__50229.cljs$lang$maxFixedArity = 0;
G__50229.cljs$lang$applyTo = (function (arglist__50231){
var args = cljs.core.seq(arglist__50231);
return G__50229__delegate(args);
});
G__50229.cljs$core$IFn$_invoke$arity$variadic = G__50229__delegate;
return G__50229;
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
var G__50232__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50233__i = 0, G__50233__a = new Array(arguments.length -  0);
while (G__50233__i < G__50233__a.length) {G__50233__a[G__50233__i] = arguments[G__50233__i + 0]; ++G__50233__i;}
  args = new cljs.core.IndexedSeq(G__50233__a,0,null);
} 
return G__50232__delegate.call(this,args);};
G__50232.cljs$lang$maxFixedArity = 0;
G__50232.cljs$lang$applyTo = (function (arglist__50234){
var args = cljs.core.seq(arglist__50234);
return G__50232__delegate(args);
});
G__50232.cljs$core$IFn$_invoke$arity$variadic = G__50232__delegate;
return G__50232;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__50235__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__50235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50236__i = 0, G__50236__a = new Array(arguments.length -  0);
while (G__50236__i < G__50236__a.length) {G__50236__a[G__50236__i] = arguments[G__50236__i + 0]; ++G__50236__i;}
  args = new cljs.core.IndexedSeq(G__50236__a,0,null);
} 
return G__50235__delegate.call(this,args);};
G__50235.cljs$lang$maxFixedArity = 0;
G__50235.cljs$lang$applyTo = (function (arglist__50237){
var args = cljs.core.seq(arglist__50237);
return G__50235__delegate(args);
});
G__50235.cljs$core$IFn$_invoke$arity$variadic = G__50235__delegate;
return G__50235;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50238__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50239__i = 0, G__50239__a = new Array(arguments.length -  0);
while (G__50239__i < G__50239__a.length) {G__50239__a[G__50239__i] = arguments[G__50239__i + 0]; ++G__50239__i;}
  args = new cljs.core.IndexedSeq(G__50239__a,0,null);
} 
return G__50238__delegate.call(this,args);};
G__50238.cljs$lang$maxFixedArity = 0;
G__50238.cljs$lang$applyTo = (function (arglist__50240){
var args = cljs.core.seq(arglist__50240);
return G__50238__delegate(args);
});
G__50238.cljs$core$IFn$_invoke$arity$variadic = G__50238__delegate;
return G__50238;
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
var G__50241__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__50241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50242__i = 0, G__50242__a = new Array(arguments.length -  0);
while (G__50242__i < G__50242__a.length) {G__50242__a[G__50242__i] = arguments[G__50242__i + 0]; ++G__50242__i;}
  args = new cljs.core.IndexedSeq(G__50242__a,0,null);
} 
return G__50241__delegate.call(this,args);};
G__50241.cljs$lang$maxFixedArity = 0;
G__50241.cljs$lang$applyTo = (function (arglist__50243){
var args = cljs.core.seq(arglist__50243);
return G__50241__delegate(args);
});
G__50241.cljs$core$IFn$_invoke$arity$variadic = G__50241__delegate;
return G__50241;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__50244__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__50244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50245__i = 0, G__50245__a = new Array(arguments.length -  0);
while (G__50245__i < G__50245__a.length) {G__50245__a[G__50245__i] = arguments[G__50245__i + 0]; ++G__50245__i;}
  args = new cljs.core.IndexedSeq(G__50245__a,0,null);
} 
return G__50244__delegate.call(this,args);};
G__50244.cljs$lang$maxFixedArity = 0;
G__50244.cljs$lang$applyTo = (function (arglist__50246){
var args = cljs.core.seq(arglist__50246);
return G__50244__delegate(args);
});
G__50244.cljs$core$IFn$_invoke$arity$variadic = G__50244__delegate;
return G__50244;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__50247__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__50247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50248__i = 0, G__50248__a = new Array(arguments.length -  0);
while (G__50248__i < G__50248__a.length) {G__50248__a[G__50248__i] = arguments[G__50248__i + 0]; ++G__50248__i;}
  args = new cljs.core.IndexedSeq(G__50248__a,0,null);
} 
return G__50247__delegate.call(this,args);};
G__50247.cljs$lang$maxFixedArity = 0;
G__50247.cljs$lang$applyTo = (function (arglist__50249){
var args = cljs.core.seq(arglist__50249);
return G__50247__delegate(args);
});
G__50247.cljs$core$IFn$_invoke$arity$variadic = G__50247__delegate;
return G__50247;
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
var G__50250__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__50250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50251__i = 0, G__50251__a = new Array(arguments.length -  0);
while (G__50251__i < G__50251__a.length) {G__50251__a[G__50251__i] = arguments[G__50251__i + 0]; ++G__50251__i;}
  args = new cljs.core.IndexedSeq(G__50251__a,0,null);
} 
return G__50250__delegate.call(this,args);};
G__50250.cljs$lang$maxFixedArity = 0;
G__50250.cljs$lang$applyTo = (function (arglist__50252){
var args = cljs.core.seq(arglist__50252);
return G__50250__delegate(args);
});
G__50250.cljs$core$IFn$_invoke$arity$variadic = G__50250__delegate;
return G__50250;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__50253__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__50253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50254__i = 0, G__50254__a = new Array(arguments.length -  0);
while (G__50254__i < G__50254__a.length) {G__50254__a[G__50254__i] = arguments[G__50254__i + 0]; ++G__50254__i;}
  args = new cljs.core.IndexedSeq(G__50254__a,0,null);
} 
return G__50253__delegate.call(this,args);};
G__50253.cljs$lang$maxFixedArity = 0;
G__50253.cljs$lang$applyTo = (function (arglist__50255){
var args = cljs.core.seq(arglist__50255);
return G__50253__delegate(args);
});
G__50253.cljs$core$IFn$_invoke$arity$variadic = G__50253__delegate;
return G__50253;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__50256__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__50256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50257__i = 0, G__50257__a = new Array(arguments.length -  0);
while (G__50257__i < G__50257__a.length) {G__50257__a[G__50257__i] = arguments[G__50257__i + 0]; ++G__50257__i;}
  args = new cljs.core.IndexedSeq(G__50257__a,0,null);
} 
return G__50256__delegate.call(this,args);};
G__50256.cljs$lang$maxFixedArity = 0;
G__50256.cljs$lang$applyTo = (function (arglist__50258){
var args = cljs.core.seq(arglist__50258);
return G__50256__delegate(args);
});
G__50256.cljs$core$IFn$_invoke$arity$variadic = G__50256__delegate;
return G__50256;
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

//# sourceMappingURL=core.js.map?rel=1527257916107
