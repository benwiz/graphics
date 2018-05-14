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
var G__45302__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__45302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45303__i = 0, G__45303__a = new Array(arguments.length -  0);
while (G__45303__i < G__45303__a.length) {G__45303__a[G__45303__i] = arguments[G__45303__i + 0]; ++G__45303__i;}
  args = new cljs.core.IndexedSeq(G__45303__a,0,null);
} 
return G__45302__delegate.call(this,args);};
G__45302.cljs$lang$maxFixedArity = 0;
G__45302.cljs$lang$applyTo = (function (arglist__45304){
var args = cljs.core.seq(arglist__45304);
return G__45302__delegate(args);
});
G__45302.cljs$core$IFn$_invoke$arity$variadic = G__45302__delegate;
return G__45302;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__45305__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__45305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45306__i = 0, G__45306__a = new Array(arguments.length -  0);
while (G__45306__i < G__45306__a.length) {G__45306__a[G__45306__i] = arguments[G__45306__i + 0]; ++G__45306__i;}
  args = new cljs.core.IndexedSeq(G__45306__a,0,null);
} 
return G__45305__delegate.call(this,args);};
G__45305.cljs$lang$maxFixedArity = 0;
G__45305.cljs$lang$applyTo = (function (arglist__45307){
var args = cljs.core.seq(arglist__45307);
return G__45305__delegate(args);
});
G__45305.cljs$core$IFn$_invoke$arity$variadic = G__45305__delegate;
return G__45305;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__45308__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__45308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45309__i = 0, G__45309__a = new Array(arguments.length -  0);
while (G__45309__i < G__45309__a.length) {G__45309__a[G__45309__i] = arguments[G__45309__i + 0]; ++G__45309__i;}
  args = new cljs.core.IndexedSeq(G__45309__a,0,null);
} 
return G__45308__delegate.call(this,args);};
G__45308.cljs$lang$maxFixedArity = 0;
G__45308.cljs$lang$applyTo = (function (arglist__45310){
var args = cljs.core.seq(arglist__45310);
return G__45308__delegate(args);
});
G__45308.cljs$core$IFn$_invoke$arity$variadic = G__45308__delegate;
return G__45308;
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
var G__45311__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__45311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45312__i = 0, G__45312__a = new Array(arguments.length -  0);
while (G__45312__i < G__45312__a.length) {G__45312__a[G__45312__i] = arguments[G__45312__i + 0]; ++G__45312__i;}
  args = new cljs.core.IndexedSeq(G__45312__a,0,null);
} 
return G__45311__delegate.call(this,args);};
G__45311.cljs$lang$maxFixedArity = 0;
G__45311.cljs$lang$applyTo = (function (arglist__45313){
var args = cljs.core.seq(arglist__45313);
return G__45311__delegate(args);
});
G__45311.cljs$core$IFn$_invoke$arity$variadic = G__45311__delegate;
return G__45311;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__45314__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__45314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45315__i = 0, G__45315__a = new Array(arguments.length -  0);
while (G__45315__i < G__45315__a.length) {G__45315__a[G__45315__i] = arguments[G__45315__i + 0]; ++G__45315__i;}
  args = new cljs.core.IndexedSeq(G__45315__a,0,null);
} 
return G__45314__delegate.call(this,args);};
G__45314.cljs$lang$maxFixedArity = 0;
G__45314.cljs$lang$applyTo = (function (arglist__45316){
var args = cljs.core.seq(arglist__45316);
return G__45314__delegate(args);
});
G__45314.cljs$core$IFn$_invoke$arity$variadic = G__45314__delegate;
return G__45314;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__45317__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__45317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45318__i = 0, G__45318__a = new Array(arguments.length -  0);
while (G__45318__i < G__45318__a.length) {G__45318__a[G__45318__i] = arguments[G__45318__i + 0]; ++G__45318__i;}
  args = new cljs.core.IndexedSeq(G__45318__a,0,null);
} 
return G__45317__delegate.call(this,args);};
G__45317.cljs$lang$maxFixedArity = 0;
G__45317.cljs$lang$applyTo = (function (arglist__45319){
var args = cljs.core.seq(arglist__45319);
return G__45317__delegate(args);
});
G__45317.cljs$core$IFn$_invoke$arity$variadic = G__45317__delegate;
return G__45317;
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
var G__45320__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__45320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45321__i = 0, G__45321__a = new Array(arguments.length -  0);
while (G__45321__i < G__45321__a.length) {G__45321__a[G__45321__i] = arguments[G__45321__i + 0]; ++G__45321__i;}
  args = new cljs.core.IndexedSeq(G__45321__a,0,null);
} 
return G__45320__delegate.call(this,args);};
G__45320.cljs$lang$maxFixedArity = 0;
G__45320.cljs$lang$applyTo = (function (arglist__45322){
var args = cljs.core.seq(arglist__45322);
return G__45320__delegate(args);
});
G__45320.cljs$core$IFn$_invoke$arity$variadic = G__45320__delegate;
return G__45320;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__45323__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__45323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45324__i = 0, G__45324__a = new Array(arguments.length -  0);
while (G__45324__i < G__45324__a.length) {G__45324__a[G__45324__i] = arguments[G__45324__i + 0]; ++G__45324__i;}
  args = new cljs.core.IndexedSeq(G__45324__a,0,null);
} 
return G__45323__delegate.call(this,args);};
G__45323.cljs$lang$maxFixedArity = 0;
G__45323.cljs$lang$applyTo = (function (arglist__45325){
var args = cljs.core.seq(arglist__45325);
return G__45323__delegate(args);
});
G__45323.cljs$core$IFn$_invoke$arity$variadic = G__45323__delegate;
return G__45323;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__45326__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__45326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45327__i = 0, G__45327__a = new Array(arguments.length -  0);
while (G__45327__i < G__45327__a.length) {G__45327__a[G__45327__i] = arguments[G__45327__i + 0]; ++G__45327__i;}
  args = new cljs.core.IndexedSeq(G__45327__a,0,null);
} 
return G__45326__delegate.call(this,args);};
G__45326.cljs$lang$maxFixedArity = 0;
G__45326.cljs$lang$applyTo = (function (arglist__45328){
var args = cljs.core.seq(arglist__45328);
return G__45326__delegate(args);
});
G__45326.cljs$core$IFn$_invoke$arity$variadic = G__45326__delegate;
return G__45326;
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
var G__45329__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__45329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45330__i = 0, G__45330__a = new Array(arguments.length -  0);
while (G__45330__i < G__45330__a.length) {G__45330__a[G__45330__i] = arguments[G__45330__i + 0]; ++G__45330__i;}
  args = new cljs.core.IndexedSeq(G__45330__a,0,null);
} 
return G__45329__delegate.call(this,args);};
G__45329.cljs$lang$maxFixedArity = 0;
G__45329.cljs$lang$applyTo = (function (arglist__45331){
var args = cljs.core.seq(arglist__45331);
return G__45329__delegate(args);
});
G__45329.cljs$core$IFn$_invoke$arity$variadic = G__45329__delegate;
return G__45329;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__45332__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__45332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45333__i = 0, G__45333__a = new Array(arguments.length -  0);
while (G__45333__i < G__45333__a.length) {G__45333__a[G__45333__i] = arguments[G__45333__i + 0]; ++G__45333__i;}
  args = new cljs.core.IndexedSeq(G__45333__a,0,null);
} 
return G__45332__delegate.call(this,args);};
G__45332.cljs$lang$maxFixedArity = 0;
G__45332.cljs$lang$applyTo = (function (arglist__45334){
var args = cljs.core.seq(arglist__45334);
return G__45332__delegate(args);
});
G__45332.cljs$core$IFn$_invoke$arity$variadic = G__45332__delegate;
return G__45332;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__45335__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__45335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45336__i = 0, G__45336__a = new Array(arguments.length -  0);
while (G__45336__i < G__45336__a.length) {G__45336__a[G__45336__i] = arguments[G__45336__i + 0]; ++G__45336__i;}
  args = new cljs.core.IndexedSeq(G__45336__a,0,null);
} 
return G__45335__delegate.call(this,args);};
G__45335.cljs$lang$maxFixedArity = 0;
G__45335.cljs$lang$applyTo = (function (arglist__45337){
var args = cljs.core.seq(arglist__45337);
return G__45335__delegate(args);
});
G__45335.cljs$core$IFn$_invoke$arity$variadic = G__45335__delegate;
return G__45335;
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

//# sourceMappingURL=core.js.map?rel=1526257859570
