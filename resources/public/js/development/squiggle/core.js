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
var G__44199__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__44199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44200__i = 0, G__44200__a = new Array(arguments.length -  0);
while (G__44200__i < G__44200__a.length) {G__44200__a[G__44200__i] = arguments[G__44200__i + 0]; ++G__44200__i;}
  args = new cljs.core.IndexedSeq(G__44200__a,0,null);
} 
return G__44199__delegate.call(this,args);};
G__44199.cljs$lang$maxFixedArity = 0;
G__44199.cljs$lang$applyTo = (function (arglist__44201){
var args = cljs.core.seq(arglist__44201);
return G__44199__delegate(args);
});
G__44199.cljs$core$IFn$_invoke$arity$variadic = G__44199__delegate;
return G__44199;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__44202__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__44202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44203__i = 0, G__44203__a = new Array(arguments.length -  0);
while (G__44203__i < G__44203__a.length) {G__44203__a[G__44203__i] = arguments[G__44203__i + 0]; ++G__44203__i;}
  args = new cljs.core.IndexedSeq(G__44203__a,0,null);
} 
return G__44202__delegate.call(this,args);};
G__44202.cljs$lang$maxFixedArity = 0;
G__44202.cljs$lang$applyTo = (function (arglist__44204){
var args = cljs.core.seq(arglist__44204);
return G__44202__delegate(args);
});
G__44202.cljs$core$IFn$_invoke$arity$variadic = G__44202__delegate;
return G__44202;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__44205__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__44205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44206__i = 0, G__44206__a = new Array(arguments.length -  0);
while (G__44206__i < G__44206__a.length) {G__44206__a[G__44206__i] = arguments[G__44206__i + 0]; ++G__44206__i;}
  args = new cljs.core.IndexedSeq(G__44206__a,0,null);
} 
return G__44205__delegate.call(this,args);};
G__44205.cljs$lang$maxFixedArity = 0;
G__44205.cljs$lang$applyTo = (function (arglist__44207){
var args = cljs.core.seq(arglist__44207);
return G__44205__delegate(args);
});
G__44205.cljs$core$IFn$_invoke$arity$variadic = G__44205__delegate;
return G__44205;
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
var G__44208__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__44208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44209__i = 0, G__44209__a = new Array(arguments.length -  0);
while (G__44209__i < G__44209__a.length) {G__44209__a[G__44209__i] = arguments[G__44209__i + 0]; ++G__44209__i;}
  args = new cljs.core.IndexedSeq(G__44209__a,0,null);
} 
return G__44208__delegate.call(this,args);};
G__44208.cljs$lang$maxFixedArity = 0;
G__44208.cljs$lang$applyTo = (function (arglist__44210){
var args = cljs.core.seq(arglist__44210);
return G__44208__delegate(args);
});
G__44208.cljs$core$IFn$_invoke$arity$variadic = G__44208__delegate;
return G__44208;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__44211__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__44211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44212__i = 0, G__44212__a = new Array(arguments.length -  0);
while (G__44212__i < G__44212__a.length) {G__44212__a[G__44212__i] = arguments[G__44212__i + 0]; ++G__44212__i;}
  args = new cljs.core.IndexedSeq(G__44212__a,0,null);
} 
return G__44211__delegate.call(this,args);};
G__44211.cljs$lang$maxFixedArity = 0;
G__44211.cljs$lang$applyTo = (function (arglist__44213){
var args = cljs.core.seq(arglist__44213);
return G__44211__delegate(args);
});
G__44211.cljs$core$IFn$_invoke$arity$variadic = G__44211__delegate;
return G__44211;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__44214__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__44214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44215__i = 0, G__44215__a = new Array(arguments.length -  0);
while (G__44215__i < G__44215__a.length) {G__44215__a[G__44215__i] = arguments[G__44215__i + 0]; ++G__44215__i;}
  args = new cljs.core.IndexedSeq(G__44215__a,0,null);
} 
return G__44214__delegate.call(this,args);};
G__44214.cljs$lang$maxFixedArity = 0;
G__44214.cljs$lang$applyTo = (function (arglist__44216){
var args = cljs.core.seq(arglist__44216);
return G__44214__delegate(args);
});
G__44214.cljs$core$IFn$_invoke$arity$variadic = G__44214__delegate;
return G__44214;
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
var G__44217__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__44217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44218__i = 0, G__44218__a = new Array(arguments.length -  0);
while (G__44218__i < G__44218__a.length) {G__44218__a[G__44218__i] = arguments[G__44218__i + 0]; ++G__44218__i;}
  args = new cljs.core.IndexedSeq(G__44218__a,0,null);
} 
return G__44217__delegate.call(this,args);};
G__44217.cljs$lang$maxFixedArity = 0;
G__44217.cljs$lang$applyTo = (function (arglist__44219){
var args = cljs.core.seq(arglist__44219);
return G__44217__delegate(args);
});
G__44217.cljs$core$IFn$_invoke$arity$variadic = G__44217__delegate;
return G__44217;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__44220__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__44220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44221__i = 0, G__44221__a = new Array(arguments.length -  0);
while (G__44221__i < G__44221__a.length) {G__44221__a[G__44221__i] = arguments[G__44221__i + 0]; ++G__44221__i;}
  args = new cljs.core.IndexedSeq(G__44221__a,0,null);
} 
return G__44220__delegate.call(this,args);};
G__44220.cljs$lang$maxFixedArity = 0;
G__44220.cljs$lang$applyTo = (function (arglist__44222){
var args = cljs.core.seq(arglist__44222);
return G__44220__delegate(args);
});
G__44220.cljs$core$IFn$_invoke$arity$variadic = G__44220__delegate;
return G__44220;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__44223__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__44223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44224__i = 0, G__44224__a = new Array(arguments.length -  0);
while (G__44224__i < G__44224__a.length) {G__44224__a[G__44224__i] = arguments[G__44224__i + 0]; ++G__44224__i;}
  args = new cljs.core.IndexedSeq(G__44224__a,0,null);
} 
return G__44223__delegate.call(this,args);};
G__44223.cljs$lang$maxFixedArity = 0;
G__44223.cljs$lang$applyTo = (function (arglist__44225){
var args = cljs.core.seq(arglist__44225);
return G__44223__delegate(args);
});
G__44223.cljs$core$IFn$_invoke$arity$variadic = G__44223__delegate;
return G__44223;
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
var G__44226__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__44226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44227__i = 0, G__44227__a = new Array(arguments.length -  0);
while (G__44227__i < G__44227__a.length) {G__44227__a[G__44227__i] = arguments[G__44227__i + 0]; ++G__44227__i;}
  args = new cljs.core.IndexedSeq(G__44227__a,0,null);
} 
return G__44226__delegate.call(this,args);};
G__44226.cljs$lang$maxFixedArity = 0;
G__44226.cljs$lang$applyTo = (function (arglist__44228){
var args = cljs.core.seq(arglist__44228);
return G__44226__delegate(args);
});
G__44226.cljs$core$IFn$_invoke$arity$variadic = G__44226__delegate;
return G__44226;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__44229__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__44229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44230__i = 0, G__44230__a = new Array(arguments.length -  0);
while (G__44230__i < G__44230__a.length) {G__44230__a[G__44230__i] = arguments[G__44230__i + 0]; ++G__44230__i;}
  args = new cljs.core.IndexedSeq(G__44230__a,0,null);
} 
return G__44229__delegate.call(this,args);};
G__44229.cljs$lang$maxFixedArity = 0;
G__44229.cljs$lang$applyTo = (function (arglist__44231){
var args = cljs.core.seq(arglist__44231);
return G__44229__delegate(args);
});
G__44229.cljs$core$IFn$_invoke$arity$variadic = G__44229__delegate;
return G__44229;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__44232__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__44232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44233__i = 0, G__44233__a = new Array(arguments.length -  0);
while (G__44233__i < G__44233__a.length) {G__44233__a[G__44233__i] = arguments[G__44233__i + 0]; ++G__44233__i;}
  args = new cljs.core.IndexedSeq(G__44233__a,0,null);
} 
return G__44232__delegate.call(this,args);};
G__44232.cljs$lang$maxFixedArity = 0;
G__44232.cljs$lang$applyTo = (function (arglist__44234){
var args = cljs.core.seq(arglist__44234);
return G__44232__delegate(args);
});
G__44232.cljs$core$IFn$_invoke$arity$variadic = G__44232__delegate;
return G__44232;
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
var G__44235__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44236__i = 0, G__44236__a = new Array(arguments.length -  0);
while (G__44236__i < G__44236__a.length) {G__44236__a[G__44236__i] = arguments[G__44236__i + 0]; ++G__44236__i;}
  args = new cljs.core.IndexedSeq(G__44236__a,0,null);
} 
return G__44235__delegate.call(this,args);};
G__44235.cljs$lang$maxFixedArity = 0;
G__44235.cljs$lang$applyTo = (function (arglist__44237){
var args = cljs.core.seq(arglist__44237);
return G__44235__delegate(args);
});
G__44235.cljs$core$IFn$_invoke$arity$variadic = G__44235__delegate;
return G__44235;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__44238__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__44238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44239__i = 0, G__44239__a = new Array(arguments.length -  0);
while (G__44239__i < G__44239__a.length) {G__44239__a[G__44239__i] = arguments[G__44239__i + 0]; ++G__44239__i;}
  args = new cljs.core.IndexedSeq(G__44239__a,0,null);
} 
return G__44238__delegate.call(this,args);};
G__44238.cljs$lang$maxFixedArity = 0;
G__44238.cljs$lang$applyTo = (function (arglist__44240){
var args = cljs.core.seq(arglist__44240);
return G__44238__delegate(args);
});
G__44238.cljs$core$IFn$_invoke$arity$variadic = G__44238__delegate;
return G__44238;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44241__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44242__i = 0, G__44242__a = new Array(arguments.length -  0);
while (G__44242__i < G__44242__a.length) {G__44242__a[G__44242__i] = arguments[G__44242__i + 0]; ++G__44242__i;}
  args = new cljs.core.IndexedSeq(G__44242__a,0,null);
} 
return G__44241__delegate.call(this,args);};
G__44241.cljs$lang$maxFixedArity = 0;
G__44241.cljs$lang$applyTo = (function (arglist__44243){
var args = cljs.core.seq(arglist__44243);
return G__44241__delegate(args);
});
G__44241.cljs$core$IFn$_invoke$arity$variadic = G__44241__delegate;
return G__44241;
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
var G__44244__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44245__i = 0, G__44245__a = new Array(arguments.length -  0);
while (G__44245__i < G__44245__a.length) {G__44245__a[G__44245__i] = arguments[G__44245__i + 0]; ++G__44245__i;}
  args = new cljs.core.IndexedSeq(G__44245__a,0,null);
} 
return G__44244__delegate.call(this,args);};
G__44244.cljs$lang$maxFixedArity = 0;
G__44244.cljs$lang$applyTo = (function (arglist__44246){
var args = cljs.core.seq(arglist__44246);
return G__44244__delegate(args);
});
G__44244.cljs$core$IFn$_invoke$arity$variadic = G__44244__delegate;
return G__44244;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__44247__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__44247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44248__i = 0, G__44248__a = new Array(arguments.length -  0);
while (G__44248__i < G__44248__a.length) {G__44248__a[G__44248__i] = arguments[G__44248__i + 0]; ++G__44248__i;}
  args = new cljs.core.IndexedSeq(G__44248__a,0,null);
} 
return G__44247__delegate.call(this,args);};
G__44247.cljs$lang$maxFixedArity = 0;
G__44247.cljs$lang$applyTo = (function (arglist__44249){
var args = cljs.core.seq(arglist__44249);
return G__44247__delegate(args);
});
G__44247.cljs$core$IFn$_invoke$arity$variadic = G__44247__delegate;
return G__44247;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44250__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44251__i = 0, G__44251__a = new Array(arguments.length -  0);
while (G__44251__i < G__44251__a.length) {G__44251__a[G__44251__i] = arguments[G__44251__i + 0]; ++G__44251__i;}
  args = new cljs.core.IndexedSeq(G__44251__a,0,null);
} 
return G__44250__delegate.call(this,args);};
G__44250.cljs$lang$maxFixedArity = 0;
G__44250.cljs$lang$applyTo = (function (arglist__44252){
var args = cljs.core.seq(arglist__44252);
return G__44250__delegate(args);
});
G__44250.cljs$core$IFn$_invoke$arity$variadic = G__44250__delegate;
return G__44250;
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
var G__44253__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44254__i = 0, G__44254__a = new Array(arguments.length -  0);
while (G__44254__i < G__44254__a.length) {G__44254__a[G__44254__i] = arguments[G__44254__i + 0]; ++G__44254__i;}
  args = new cljs.core.IndexedSeq(G__44254__a,0,null);
} 
return G__44253__delegate.call(this,args);};
G__44253.cljs$lang$maxFixedArity = 0;
G__44253.cljs$lang$applyTo = (function (arglist__44255){
var args = cljs.core.seq(arglist__44255);
return G__44253__delegate(args);
});
G__44253.cljs$core$IFn$_invoke$arity$variadic = G__44253__delegate;
return G__44253;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__44256__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__44256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44257__i = 0, G__44257__a = new Array(arguments.length -  0);
while (G__44257__i < G__44257__a.length) {G__44257__a[G__44257__i] = arguments[G__44257__i + 0]; ++G__44257__i;}
  args = new cljs.core.IndexedSeq(G__44257__a,0,null);
} 
return G__44256__delegate.call(this,args);};
G__44256.cljs$lang$maxFixedArity = 0;
G__44256.cljs$lang$applyTo = (function (arglist__44258){
var args = cljs.core.seq(arglist__44258);
return G__44256__delegate(args);
});
G__44256.cljs$core$IFn$_invoke$arity$variadic = G__44256__delegate;
return G__44256;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44259__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44260__i = 0, G__44260__a = new Array(arguments.length -  0);
while (G__44260__i < G__44260__a.length) {G__44260__a[G__44260__i] = arguments[G__44260__i + 0]; ++G__44260__i;}
  args = new cljs.core.IndexedSeq(G__44260__a,0,null);
} 
return G__44259__delegate.call(this,args);};
G__44259.cljs$lang$maxFixedArity = 0;
G__44259.cljs$lang$applyTo = (function (arglist__44261){
var args = cljs.core.seq(arglist__44261);
return G__44259__delegate(args);
});
G__44259.cljs$core$IFn$_invoke$arity$variadic = G__44259__delegate;
return G__44259;
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
var G__44262__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__44262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44263__i = 0, G__44263__a = new Array(arguments.length -  0);
while (G__44263__i < G__44263__a.length) {G__44263__a[G__44263__i] = arguments[G__44263__i + 0]; ++G__44263__i;}
  args = new cljs.core.IndexedSeq(G__44263__a,0,null);
} 
return G__44262__delegate.call(this,args);};
G__44262.cljs$lang$maxFixedArity = 0;
G__44262.cljs$lang$applyTo = (function (arglist__44264){
var args = cljs.core.seq(arglist__44264);
return G__44262__delegate(args);
});
G__44262.cljs$core$IFn$_invoke$arity$variadic = G__44262__delegate;
return G__44262;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__44265__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__44265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44266__i = 0, G__44266__a = new Array(arguments.length -  0);
while (G__44266__i < G__44266__a.length) {G__44266__a[G__44266__i] = arguments[G__44266__i + 0]; ++G__44266__i;}
  args = new cljs.core.IndexedSeq(G__44266__a,0,null);
} 
return G__44265__delegate.call(this,args);};
G__44265.cljs$lang$maxFixedArity = 0;
G__44265.cljs$lang$applyTo = (function (arglist__44267){
var args = cljs.core.seq(arglist__44267);
return G__44265__delegate(args);
});
G__44265.cljs$core$IFn$_invoke$arity$variadic = G__44265__delegate;
return G__44265;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__44268__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__44268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44269__i = 0, G__44269__a = new Array(arguments.length -  0);
while (G__44269__i < G__44269__a.length) {G__44269__a[G__44269__i] = arguments[G__44269__i + 0]; ++G__44269__i;}
  args = new cljs.core.IndexedSeq(G__44269__a,0,null);
} 
return G__44268__delegate.call(this,args);};
G__44268.cljs$lang$maxFixedArity = 0;
G__44268.cljs$lang$applyTo = (function (arglist__44270){
var args = cljs.core.seq(arglist__44270);
return G__44268__delegate(args);
});
G__44268.cljs$core$IFn$_invoke$arity$variadic = G__44268__delegate;
return G__44268;
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
var G__44271__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.mouse_clicked,args);
};
var G__44271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44272__i = 0, G__44272__a = new Array(arguments.length -  0);
while (G__44272__i < G__44272__a.length) {G__44272__a[G__44272__i] = arguments[G__44272__i + 0]; ++G__44272__i;}
  args = new cljs.core.IndexedSeq(G__44272__a,0,null);
} 
return G__44271__delegate.call(this,args);};
G__44271.cljs$lang$maxFixedArity = 0;
G__44271.cljs$lang$applyTo = (function (arglist__44273){
var args = cljs.core.seq(arglist__44273);
return G__44271__delegate(args);
});
G__44271.cljs$core$IFn$_invoke$arity$variadic = G__44271__delegate;
return G__44271;
})()
:squiggle.delaunay_monsters.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__44274__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__44274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44275__i = 0, G__44275__a = new Array(arguments.length -  0);
while (G__44275__i < G__44275__a.length) {G__44275__a[G__44275__i] = arguments[G__44275__i + 0]; ++G__44275__i;}
  args = new cljs.core.IndexedSeq(G__44275__a,0,null);
} 
return G__44274__delegate.call(this,args);};
G__44274.cljs$lang$maxFixedArity = 0;
G__44274.cljs$lang$applyTo = (function (arglist__44276){
var args = cljs.core.seq(arglist__44276);
return G__44274__delegate(args);
});
G__44274.cljs$core$IFn$_invoke$arity$variadic = G__44274__delegate;
return G__44274;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__44277__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__44277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44278__i = 0, G__44278__a = new Array(arguments.length -  0);
while (G__44278__i < G__44278__a.length) {G__44278__a[G__44278__i] = arguments[G__44278__i + 0]; ++G__44278__i;}
  args = new cljs.core.IndexedSeq(G__44278__a,0,null);
} 
return G__44277__delegate.call(this,args);};
G__44277.cljs$lang$maxFixedArity = 0;
G__44277.cljs$lang$applyTo = (function (arglist__44279){
var args = cljs.core.seq(arglist__44279);
return G__44277__delegate(args);
});
G__44277.cljs$core$IFn$_invoke$arity$variadic = G__44277__delegate;
return G__44277;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__44280__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__44280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44281__i = 0, G__44281__a = new Array(arguments.length -  0);
while (G__44281__i < G__44281__a.length) {G__44281__a[G__44281__i] = arguments[G__44281__i + 0]; ++G__44281__i;}
  args = new cljs.core.IndexedSeq(G__44281__a,0,null);
} 
return G__44280__delegate.call(this,args);};
G__44280.cljs$lang$maxFixedArity = 0;
G__44280.cljs$lang$applyTo = (function (arglist__44282){
var args = cljs.core.seq(arglist__44282);
return G__44280__delegate(args);
});
G__44280.cljs$core$IFn$_invoke$arity$variadic = G__44280__delegate;
return G__44280;
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

//# sourceMappingURL=core.js.map?rel=1527388869475
