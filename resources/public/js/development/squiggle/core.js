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
var G__43496__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43497__i = 0, G__43497__a = new Array(arguments.length -  0);
while (G__43497__i < G__43497__a.length) {G__43497__a[G__43497__i] = arguments[G__43497__i + 0]; ++G__43497__i;}
  args = new cljs.core.IndexedSeq(G__43497__a,0,null);
} 
return G__43496__delegate.call(this,args);};
G__43496.cljs$lang$maxFixedArity = 0;
G__43496.cljs$lang$applyTo = (function (arglist__43498){
var args = cljs.core.seq(arglist__43498);
return G__43496__delegate(args);
});
G__43496.cljs$core$IFn$_invoke$arity$variadic = G__43496__delegate;
return G__43496;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43499__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43500__i = 0, G__43500__a = new Array(arguments.length -  0);
while (G__43500__i < G__43500__a.length) {G__43500__a[G__43500__i] = arguments[G__43500__i + 0]; ++G__43500__i;}
  args = new cljs.core.IndexedSeq(G__43500__a,0,null);
} 
return G__43499__delegate.call(this,args);};
G__43499.cljs$lang$maxFixedArity = 0;
G__43499.cljs$lang$applyTo = (function (arglist__43501){
var args = cljs.core.seq(arglist__43501);
return G__43499__delegate(args);
});
G__43499.cljs$core$IFn$_invoke$arity$variadic = G__43499__delegate;
return G__43499;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43502__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43503__i = 0, G__43503__a = new Array(arguments.length -  0);
while (G__43503__i < G__43503__a.length) {G__43503__a[G__43503__i] = arguments[G__43503__i + 0]; ++G__43503__i;}
  args = new cljs.core.IndexedSeq(G__43503__a,0,null);
} 
return G__43502__delegate.call(this,args);};
G__43502.cljs$lang$maxFixedArity = 0;
G__43502.cljs$lang$applyTo = (function (arglist__43504){
var args = cljs.core.seq(arglist__43504);
return G__43502__delegate(args);
});
G__43502.cljs$core$IFn$_invoke$arity$variadic = G__43502__delegate;
return G__43502;
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
var G__43505__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43506__i = 0, G__43506__a = new Array(arguments.length -  0);
while (G__43506__i < G__43506__a.length) {G__43506__a[G__43506__i] = arguments[G__43506__i + 0]; ++G__43506__i;}
  args = new cljs.core.IndexedSeq(G__43506__a,0,null);
} 
return G__43505__delegate.call(this,args);};
G__43505.cljs$lang$maxFixedArity = 0;
G__43505.cljs$lang$applyTo = (function (arglist__43507){
var args = cljs.core.seq(arglist__43507);
return G__43505__delegate(args);
});
G__43505.cljs$core$IFn$_invoke$arity$variadic = G__43505__delegate;
return G__43505;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43508__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43509__i = 0, G__43509__a = new Array(arguments.length -  0);
while (G__43509__i < G__43509__a.length) {G__43509__a[G__43509__i] = arguments[G__43509__i + 0]; ++G__43509__i;}
  args = new cljs.core.IndexedSeq(G__43509__a,0,null);
} 
return G__43508__delegate.call(this,args);};
G__43508.cljs$lang$maxFixedArity = 0;
G__43508.cljs$lang$applyTo = (function (arglist__43510){
var args = cljs.core.seq(arglist__43510);
return G__43508__delegate(args);
});
G__43508.cljs$core$IFn$_invoke$arity$variadic = G__43508__delegate;
return G__43508;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43511__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43512__i = 0, G__43512__a = new Array(arguments.length -  0);
while (G__43512__i < G__43512__a.length) {G__43512__a[G__43512__i] = arguments[G__43512__i + 0]; ++G__43512__i;}
  args = new cljs.core.IndexedSeq(G__43512__a,0,null);
} 
return G__43511__delegate.call(this,args);};
G__43511.cljs$lang$maxFixedArity = 0;
G__43511.cljs$lang$applyTo = (function (arglist__43513){
var args = cljs.core.seq(arglist__43513);
return G__43511__delegate(args);
});
G__43511.cljs$core$IFn$_invoke$arity$variadic = G__43511__delegate;
return G__43511;
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
var G__43514__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43515__i = 0, G__43515__a = new Array(arguments.length -  0);
while (G__43515__i < G__43515__a.length) {G__43515__a[G__43515__i] = arguments[G__43515__i + 0]; ++G__43515__i;}
  args = new cljs.core.IndexedSeq(G__43515__a,0,null);
} 
return G__43514__delegate.call(this,args);};
G__43514.cljs$lang$maxFixedArity = 0;
G__43514.cljs$lang$applyTo = (function (arglist__43516){
var args = cljs.core.seq(arglist__43516);
return G__43514__delegate(args);
});
G__43514.cljs$core$IFn$_invoke$arity$variadic = G__43514__delegate;
return G__43514;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43517__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43518__i = 0, G__43518__a = new Array(arguments.length -  0);
while (G__43518__i < G__43518__a.length) {G__43518__a[G__43518__i] = arguments[G__43518__i + 0]; ++G__43518__i;}
  args = new cljs.core.IndexedSeq(G__43518__a,0,null);
} 
return G__43517__delegate.call(this,args);};
G__43517.cljs$lang$maxFixedArity = 0;
G__43517.cljs$lang$applyTo = (function (arglist__43519){
var args = cljs.core.seq(arglist__43519);
return G__43517__delegate(args);
});
G__43517.cljs$core$IFn$_invoke$arity$variadic = G__43517__delegate;
return G__43517;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43520__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43521__i = 0, G__43521__a = new Array(arguments.length -  0);
while (G__43521__i < G__43521__a.length) {G__43521__a[G__43521__i] = arguments[G__43521__i + 0]; ++G__43521__i;}
  args = new cljs.core.IndexedSeq(G__43521__a,0,null);
} 
return G__43520__delegate.call(this,args);};
G__43520.cljs$lang$maxFixedArity = 0;
G__43520.cljs$lang$applyTo = (function (arglist__43522){
var args = cljs.core.seq(arglist__43522);
return G__43520__delegate(args);
});
G__43520.cljs$core$IFn$_invoke$arity$variadic = G__43520__delegate;
return G__43520;
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
var G__43523__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43524__i = 0, G__43524__a = new Array(arguments.length -  0);
while (G__43524__i < G__43524__a.length) {G__43524__a[G__43524__i] = arguments[G__43524__i + 0]; ++G__43524__i;}
  args = new cljs.core.IndexedSeq(G__43524__a,0,null);
} 
return G__43523__delegate.call(this,args);};
G__43523.cljs$lang$maxFixedArity = 0;
G__43523.cljs$lang$applyTo = (function (arglist__43525){
var args = cljs.core.seq(arglist__43525);
return G__43523__delegate(args);
});
G__43523.cljs$core$IFn$_invoke$arity$variadic = G__43523__delegate;
return G__43523;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43526__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43527__i = 0, G__43527__a = new Array(arguments.length -  0);
while (G__43527__i < G__43527__a.length) {G__43527__a[G__43527__i] = arguments[G__43527__i + 0]; ++G__43527__i;}
  args = new cljs.core.IndexedSeq(G__43527__a,0,null);
} 
return G__43526__delegate.call(this,args);};
G__43526.cljs$lang$maxFixedArity = 0;
G__43526.cljs$lang$applyTo = (function (arglist__43528){
var args = cljs.core.seq(arglist__43528);
return G__43526__delegate(args);
});
G__43526.cljs$core$IFn$_invoke$arity$variadic = G__43526__delegate;
return G__43526;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43529__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43530__i = 0, G__43530__a = new Array(arguments.length -  0);
while (G__43530__i < G__43530__a.length) {G__43530__a[G__43530__i] = arguments[G__43530__i + 0]; ++G__43530__i;}
  args = new cljs.core.IndexedSeq(G__43530__a,0,null);
} 
return G__43529__delegate.call(this,args);};
G__43529.cljs$lang$maxFixedArity = 0;
G__43529.cljs$lang$applyTo = (function (arglist__43531){
var args = cljs.core.seq(arglist__43531);
return G__43529__delegate(args);
});
G__43529.cljs$core$IFn$_invoke$arity$variadic = G__43529__delegate;
return G__43529;
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
var G__43532__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43533__i = 0, G__43533__a = new Array(arguments.length -  0);
while (G__43533__i < G__43533__a.length) {G__43533__a[G__43533__i] = arguments[G__43533__i + 0]; ++G__43533__i;}
  args = new cljs.core.IndexedSeq(G__43533__a,0,null);
} 
return G__43532__delegate.call(this,args);};
G__43532.cljs$lang$maxFixedArity = 0;
G__43532.cljs$lang$applyTo = (function (arglist__43534){
var args = cljs.core.seq(arglist__43534);
return G__43532__delegate(args);
});
G__43532.cljs$core$IFn$_invoke$arity$variadic = G__43532__delegate;
return G__43532;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__43535__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__43535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43536__i = 0, G__43536__a = new Array(arguments.length -  0);
while (G__43536__i < G__43536__a.length) {G__43536__a[G__43536__i] = arguments[G__43536__i + 0]; ++G__43536__i;}
  args = new cljs.core.IndexedSeq(G__43536__a,0,null);
} 
return G__43535__delegate.call(this,args);};
G__43535.cljs$lang$maxFixedArity = 0;
G__43535.cljs$lang$applyTo = (function (arglist__43537){
var args = cljs.core.seq(arglist__43537);
return G__43535__delegate(args);
});
G__43535.cljs$core$IFn$_invoke$arity$variadic = G__43535__delegate;
return G__43535;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43538__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43539__i = 0, G__43539__a = new Array(arguments.length -  0);
while (G__43539__i < G__43539__a.length) {G__43539__a[G__43539__i] = arguments[G__43539__i + 0]; ++G__43539__i;}
  args = new cljs.core.IndexedSeq(G__43539__a,0,null);
} 
return G__43538__delegate.call(this,args);};
G__43538.cljs$lang$maxFixedArity = 0;
G__43538.cljs$lang$applyTo = (function (arglist__43540){
var args = cljs.core.seq(arglist__43540);
return G__43538__delegate(args);
});
G__43538.cljs$core$IFn$_invoke$arity$variadic = G__43538__delegate;
return G__43538;
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
var G__43541__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43542__i = 0, G__43542__a = new Array(arguments.length -  0);
while (G__43542__i < G__43542__a.length) {G__43542__a[G__43542__i] = arguments[G__43542__i + 0]; ++G__43542__i;}
  args = new cljs.core.IndexedSeq(G__43542__a,0,null);
} 
return G__43541__delegate.call(this,args);};
G__43541.cljs$lang$maxFixedArity = 0;
G__43541.cljs$lang$applyTo = (function (arglist__43543){
var args = cljs.core.seq(arglist__43543);
return G__43541__delegate(args);
});
G__43541.cljs$core$IFn$_invoke$arity$variadic = G__43541__delegate;
return G__43541;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__43544__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__43544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43545__i = 0, G__43545__a = new Array(arguments.length -  0);
while (G__43545__i < G__43545__a.length) {G__43545__a[G__43545__i] = arguments[G__43545__i + 0]; ++G__43545__i;}
  args = new cljs.core.IndexedSeq(G__43545__a,0,null);
} 
return G__43544__delegate.call(this,args);};
G__43544.cljs$lang$maxFixedArity = 0;
G__43544.cljs$lang$applyTo = (function (arglist__43546){
var args = cljs.core.seq(arglist__43546);
return G__43544__delegate(args);
});
G__43544.cljs$core$IFn$_invoke$arity$variadic = G__43544__delegate;
return G__43544;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43547__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43548__i = 0, G__43548__a = new Array(arguments.length -  0);
while (G__43548__i < G__43548__a.length) {G__43548__a[G__43548__i] = arguments[G__43548__i + 0]; ++G__43548__i;}
  args = new cljs.core.IndexedSeq(G__43548__a,0,null);
} 
return G__43547__delegate.call(this,args);};
G__43547.cljs$lang$maxFixedArity = 0;
G__43547.cljs$lang$applyTo = (function (arglist__43549){
var args = cljs.core.seq(arglist__43549);
return G__43547__delegate(args);
});
G__43547.cljs$core$IFn$_invoke$arity$variadic = G__43547__delegate;
return G__43547;
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
var G__43550__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43551__i = 0, G__43551__a = new Array(arguments.length -  0);
while (G__43551__i < G__43551__a.length) {G__43551__a[G__43551__i] = arguments[G__43551__i + 0]; ++G__43551__i;}
  args = new cljs.core.IndexedSeq(G__43551__a,0,null);
} 
return G__43550__delegate.call(this,args);};
G__43550.cljs$lang$maxFixedArity = 0;
G__43550.cljs$lang$applyTo = (function (arglist__43552){
var args = cljs.core.seq(arglist__43552);
return G__43550__delegate(args);
});
G__43550.cljs$core$IFn$_invoke$arity$variadic = G__43550__delegate;
return G__43550;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__43553__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__43553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43554__i = 0, G__43554__a = new Array(arguments.length -  0);
while (G__43554__i < G__43554__a.length) {G__43554__a[G__43554__i] = arguments[G__43554__i + 0]; ++G__43554__i;}
  args = new cljs.core.IndexedSeq(G__43554__a,0,null);
} 
return G__43553__delegate.call(this,args);};
G__43553.cljs$lang$maxFixedArity = 0;
G__43553.cljs$lang$applyTo = (function (arglist__43555){
var args = cljs.core.seq(arglist__43555);
return G__43553__delegate(args);
});
G__43553.cljs$core$IFn$_invoke$arity$variadic = G__43553__delegate;
return G__43553;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43556__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43557__i = 0, G__43557__a = new Array(arguments.length -  0);
while (G__43557__i < G__43557__a.length) {G__43557__a[G__43557__i] = arguments[G__43557__i + 0]; ++G__43557__i;}
  args = new cljs.core.IndexedSeq(G__43557__a,0,null);
} 
return G__43556__delegate.call(this,args);};
G__43556.cljs$lang$maxFixedArity = 0;
G__43556.cljs$lang$applyTo = (function (arglist__43558){
var args = cljs.core.seq(arglist__43558);
return G__43556__delegate(args);
});
G__43556.cljs$core$IFn$_invoke$arity$variadic = G__43556__delegate;
return G__43556;
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
var G__43559__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__43559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43560__i = 0, G__43560__a = new Array(arguments.length -  0);
while (G__43560__i < G__43560__a.length) {G__43560__a[G__43560__i] = arguments[G__43560__i + 0]; ++G__43560__i;}
  args = new cljs.core.IndexedSeq(G__43560__a,0,null);
} 
return G__43559__delegate.call(this,args);};
G__43559.cljs$lang$maxFixedArity = 0;
G__43559.cljs$lang$applyTo = (function (arglist__43561){
var args = cljs.core.seq(arglist__43561);
return G__43559__delegate(args);
});
G__43559.cljs$core$IFn$_invoke$arity$variadic = G__43559__delegate;
return G__43559;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__43562__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__43562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43563__i = 0, G__43563__a = new Array(arguments.length -  0);
while (G__43563__i < G__43563__a.length) {G__43563__a[G__43563__i] = arguments[G__43563__i + 0]; ++G__43563__i;}
  args = new cljs.core.IndexedSeq(G__43563__a,0,null);
} 
return G__43562__delegate.call(this,args);};
G__43562.cljs$lang$maxFixedArity = 0;
G__43562.cljs$lang$applyTo = (function (arglist__43564){
var args = cljs.core.seq(arglist__43564);
return G__43562__delegate(args);
});
G__43562.cljs$core$IFn$_invoke$arity$variadic = G__43562__delegate;
return G__43562;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__43565__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__43565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43566__i = 0, G__43566__a = new Array(arguments.length -  0);
while (G__43566__i < G__43566__a.length) {G__43566__a[G__43566__i] = arguments[G__43566__i + 0]; ++G__43566__i;}
  args = new cljs.core.IndexedSeq(G__43566__a,0,null);
} 
return G__43565__delegate.call(this,args);};
G__43565.cljs$lang$maxFixedArity = 0;
G__43565.cljs$lang$applyTo = (function (arglist__43567){
var args = cljs.core.seq(arglist__43567);
return G__43565__delegate(args);
});
G__43565.cljs$core$IFn$_invoke$arity$variadic = G__43565__delegate;
return G__43565;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526412445304
