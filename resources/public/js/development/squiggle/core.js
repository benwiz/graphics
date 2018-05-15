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
var G__42207__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__42207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42208__i = 0, G__42208__a = new Array(arguments.length -  0);
while (G__42208__i < G__42208__a.length) {G__42208__a[G__42208__i] = arguments[G__42208__i + 0]; ++G__42208__i;}
  args = new cljs.core.IndexedSeq(G__42208__a,0,null);
} 
return G__42207__delegate.call(this,args);};
G__42207.cljs$lang$maxFixedArity = 0;
G__42207.cljs$lang$applyTo = (function (arglist__42209){
var args = cljs.core.seq(arglist__42209);
return G__42207__delegate(args);
});
G__42207.cljs$core$IFn$_invoke$arity$variadic = G__42207__delegate;
return G__42207;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__42210__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__42210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42211__i = 0, G__42211__a = new Array(arguments.length -  0);
while (G__42211__i < G__42211__a.length) {G__42211__a[G__42211__i] = arguments[G__42211__i + 0]; ++G__42211__i;}
  args = new cljs.core.IndexedSeq(G__42211__a,0,null);
} 
return G__42210__delegate.call(this,args);};
G__42210.cljs$lang$maxFixedArity = 0;
G__42210.cljs$lang$applyTo = (function (arglist__42212){
var args = cljs.core.seq(arglist__42212);
return G__42210__delegate(args);
});
G__42210.cljs$core$IFn$_invoke$arity$variadic = G__42210__delegate;
return G__42210;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__42213__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__42213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42214__i = 0, G__42214__a = new Array(arguments.length -  0);
while (G__42214__i < G__42214__a.length) {G__42214__a[G__42214__i] = arguments[G__42214__i + 0]; ++G__42214__i;}
  args = new cljs.core.IndexedSeq(G__42214__a,0,null);
} 
return G__42213__delegate.call(this,args);};
G__42213.cljs$lang$maxFixedArity = 0;
G__42213.cljs$lang$applyTo = (function (arglist__42215){
var args = cljs.core.seq(arglist__42215);
return G__42213__delegate(args);
});
G__42213.cljs$core$IFn$_invoke$arity$variadic = G__42213__delegate;
return G__42213;
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
var G__42216__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__42216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42217__i = 0, G__42217__a = new Array(arguments.length -  0);
while (G__42217__i < G__42217__a.length) {G__42217__a[G__42217__i] = arguments[G__42217__i + 0]; ++G__42217__i;}
  args = new cljs.core.IndexedSeq(G__42217__a,0,null);
} 
return G__42216__delegate.call(this,args);};
G__42216.cljs$lang$maxFixedArity = 0;
G__42216.cljs$lang$applyTo = (function (arglist__42218){
var args = cljs.core.seq(arglist__42218);
return G__42216__delegate(args);
});
G__42216.cljs$core$IFn$_invoke$arity$variadic = G__42216__delegate;
return G__42216;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__42219__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__42219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42220__i = 0, G__42220__a = new Array(arguments.length -  0);
while (G__42220__i < G__42220__a.length) {G__42220__a[G__42220__i] = arguments[G__42220__i + 0]; ++G__42220__i;}
  args = new cljs.core.IndexedSeq(G__42220__a,0,null);
} 
return G__42219__delegate.call(this,args);};
G__42219.cljs$lang$maxFixedArity = 0;
G__42219.cljs$lang$applyTo = (function (arglist__42221){
var args = cljs.core.seq(arglist__42221);
return G__42219__delegate(args);
});
G__42219.cljs$core$IFn$_invoke$arity$variadic = G__42219__delegate;
return G__42219;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__42222__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__42222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42223__i = 0, G__42223__a = new Array(arguments.length -  0);
while (G__42223__i < G__42223__a.length) {G__42223__a[G__42223__i] = arguments[G__42223__i + 0]; ++G__42223__i;}
  args = new cljs.core.IndexedSeq(G__42223__a,0,null);
} 
return G__42222__delegate.call(this,args);};
G__42222.cljs$lang$maxFixedArity = 0;
G__42222.cljs$lang$applyTo = (function (arglist__42224){
var args = cljs.core.seq(arglist__42224);
return G__42222__delegate(args);
});
G__42222.cljs$core$IFn$_invoke$arity$variadic = G__42222__delegate;
return G__42222;
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
var G__42225__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__42225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42226__i = 0, G__42226__a = new Array(arguments.length -  0);
while (G__42226__i < G__42226__a.length) {G__42226__a[G__42226__i] = arguments[G__42226__i + 0]; ++G__42226__i;}
  args = new cljs.core.IndexedSeq(G__42226__a,0,null);
} 
return G__42225__delegate.call(this,args);};
G__42225.cljs$lang$maxFixedArity = 0;
G__42225.cljs$lang$applyTo = (function (arglist__42227){
var args = cljs.core.seq(arglist__42227);
return G__42225__delegate(args);
});
G__42225.cljs$core$IFn$_invoke$arity$variadic = G__42225__delegate;
return G__42225;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__42228__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__42228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42229__i = 0, G__42229__a = new Array(arguments.length -  0);
while (G__42229__i < G__42229__a.length) {G__42229__a[G__42229__i] = arguments[G__42229__i + 0]; ++G__42229__i;}
  args = new cljs.core.IndexedSeq(G__42229__a,0,null);
} 
return G__42228__delegate.call(this,args);};
G__42228.cljs$lang$maxFixedArity = 0;
G__42228.cljs$lang$applyTo = (function (arglist__42230){
var args = cljs.core.seq(arglist__42230);
return G__42228__delegate(args);
});
G__42228.cljs$core$IFn$_invoke$arity$variadic = G__42228__delegate;
return G__42228;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__42231__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__42231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42232__i = 0, G__42232__a = new Array(arguments.length -  0);
while (G__42232__i < G__42232__a.length) {G__42232__a[G__42232__i] = arguments[G__42232__i + 0]; ++G__42232__i;}
  args = new cljs.core.IndexedSeq(G__42232__a,0,null);
} 
return G__42231__delegate.call(this,args);};
G__42231.cljs$lang$maxFixedArity = 0;
G__42231.cljs$lang$applyTo = (function (arglist__42233){
var args = cljs.core.seq(arglist__42233);
return G__42231__delegate(args);
});
G__42231.cljs$core$IFn$_invoke$arity$variadic = G__42231__delegate;
return G__42231;
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
var G__42234__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__42234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42235__i = 0, G__42235__a = new Array(arguments.length -  0);
while (G__42235__i < G__42235__a.length) {G__42235__a[G__42235__i] = arguments[G__42235__i + 0]; ++G__42235__i;}
  args = new cljs.core.IndexedSeq(G__42235__a,0,null);
} 
return G__42234__delegate.call(this,args);};
G__42234.cljs$lang$maxFixedArity = 0;
G__42234.cljs$lang$applyTo = (function (arglist__42236){
var args = cljs.core.seq(arglist__42236);
return G__42234__delegate(args);
});
G__42234.cljs$core$IFn$_invoke$arity$variadic = G__42234__delegate;
return G__42234;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__42237__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__42237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42238__i = 0, G__42238__a = new Array(arguments.length -  0);
while (G__42238__i < G__42238__a.length) {G__42238__a[G__42238__i] = arguments[G__42238__i + 0]; ++G__42238__i;}
  args = new cljs.core.IndexedSeq(G__42238__a,0,null);
} 
return G__42237__delegate.call(this,args);};
G__42237.cljs$lang$maxFixedArity = 0;
G__42237.cljs$lang$applyTo = (function (arglist__42239){
var args = cljs.core.seq(arglist__42239);
return G__42237__delegate(args);
});
G__42237.cljs$core$IFn$_invoke$arity$variadic = G__42237__delegate;
return G__42237;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__42240__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__42240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42241__i = 0, G__42241__a = new Array(arguments.length -  0);
while (G__42241__i < G__42241__a.length) {G__42241__a[G__42241__i] = arguments[G__42241__i + 0]; ++G__42241__i;}
  args = new cljs.core.IndexedSeq(G__42241__a,0,null);
} 
return G__42240__delegate.call(this,args);};
G__42240.cljs$lang$maxFixedArity = 0;
G__42240.cljs$lang$applyTo = (function (arglist__42242){
var args = cljs.core.seq(arglist__42242);
return G__42240__delegate(args);
});
G__42240.cljs$core$IFn$_invoke$arity$variadic = G__42240__delegate;
return G__42240;
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
var G__42243__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42244__i = 0, G__42244__a = new Array(arguments.length -  0);
while (G__42244__i < G__42244__a.length) {G__42244__a[G__42244__i] = arguments[G__42244__i + 0]; ++G__42244__i;}
  args = new cljs.core.IndexedSeq(G__42244__a,0,null);
} 
return G__42243__delegate.call(this,args);};
G__42243.cljs$lang$maxFixedArity = 0;
G__42243.cljs$lang$applyTo = (function (arglist__42245){
var args = cljs.core.seq(arglist__42245);
return G__42243__delegate(args);
});
G__42243.cljs$core$IFn$_invoke$arity$variadic = G__42243__delegate;
return G__42243;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__42246__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__42246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42247__i = 0, G__42247__a = new Array(arguments.length -  0);
while (G__42247__i < G__42247__a.length) {G__42247__a[G__42247__i] = arguments[G__42247__i + 0]; ++G__42247__i;}
  args = new cljs.core.IndexedSeq(G__42247__a,0,null);
} 
return G__42246__delegate.call(this,args);};
G__42246.cljs$lang$maxFixedArity = 0;
G__42246.cljs$lang$applyTo = (function (arglist__42248){
var args = cljs.core.seq(arglist__42248);
return G__42246__delegate(args);
});
G__42246.cljs$core$IFn$_invoke$arity$variadic = G__42246__delegate;
return G__42246;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42249__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42250__i = 0, G__42250__a = new Array(arguments.length -  0);
while (G__42250__i < G__42250__a.length) {G__42250__a[G__42250__i] = arguments[G__42250__i + 0]; ++G__42250__i;}
  args = new cljs.core.IndexedSeq(G__42250__a,0,null);
} 
return G__42249__delegate.call(this,args);};
G__42249.cljs$lang$maxFixedArity = 0;
G__42249.cljs$lang$applyTo = (function (arglist__42251){
var args = cljs.core.seq(arglist__42251);
return G__42249__delegate(args);
});
G__42249.cljs$core$IFn$_invoke$arity$variadic = G__42249__delegate;
return G__42249;
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
var G__42252__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42253__i = 0, G__42253__a = new Array(arguments.length -  0);
while (G__42253__i < G__42253__a.length) {G__42253__a[G__42253__i] = arguments[G__42253__i + 0]; ++G__42253__i;}
  args = new cljs.core.IndexedSeq(G__42253__a,0,null);
} 
return G__42252__delegate.call(this,args);};
G__42252.cljs$lang$maxFixedArity = 0;
G__42252.cljs$lang$applyTo = (function (arglist__42254){
var args = cljs.core.seq(arglist__42254);
return G__42252__delegate(args);
});
G__42252.cljs$core$IFn$_invoke$arity$variadic = G__42252__delegate;
return G__42252;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__42255__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__42255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42256__i = 0, G__42256__a = new Array(arguments.length -  0);
while (G__42256__i < G__42256__a.length) {G__42256__a[G__42256__i] = arguments[G__42256__i + 0]; ++G__42256__i;}
  args = new cljs.core.IndexedSeq(G__42256__a,0,null);
} 
return G__42255__delegate.call(this,args);};
G__42255.cljs$lang$maxFixedArity = 0;
G__42255.cljs$lang$applyTo = (function (arglist__42257){
var args = cljs.core.seq(arglist__42257);
return G__42255__delegate(args);
});
G__42255.cljs$core$IFn$_invoke$arity$variadic = G__42255__delegate;
return G__42255;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42258__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42259__i = 0, G__42259__a = new Array(arguments.length -  0);
while (G__42259__i < G__42259__a.length) {G__42259__a[G__42259__i] = arguments[G__42259__i + 0]; ++G__42259__i;}
  args = new cljs.core.IndexedSeq(G__42259__a,0,null);
} 
return G__42258__delegate.call(this,args);};
G__42258.cljs$lang$maxFixedArity = 0;
G__42258.cljs$lang$applyTo = (function (arglist__42260){
var args = cljs.core.seq(arglist__42260);
return G__42258__delegate(args);
});
G__42258.cljs$core$IFn$_invoke$arity$variadic = G__42258__delegate;
return G__42258;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526410646393
