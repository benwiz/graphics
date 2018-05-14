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
var G__39244__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39245__i = 0, G__39245__a = new Array(arguments.length -  0);
while (G__39245__i < G__39245__a.length) {G__39245__a[G__39245__i] = arguments[G__39245__i + 0]; ++G__39245__i;}
  args = new cljs.core.IndexedSeq(G__39245__a,0,null);
} 
return G__39244__delegate.call(this,args);};
G__39244.cljs$lang$maxFixedArity = 0;
G__39244.cljs$lang$applyTo = (function (arglist__39246){
var args = cljs.core.seq(arglist__39246);
return G__39244__delegate(args);
});
G__39244.cljs$core$IFn$_invoke$arity$variadic = G__39244__delegate;
return G__39244;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39247__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39248__i = 0, G__39248__a = new Array(arguments.length -  0);
while (G__39248__i < G__39248__a.length) {G__39248__a[G__39248__i] = arguments[G__39248__i + 0]; ++G__39248__i;}
  args = new cljs.core.IndexedSeq(G__39248__a,0,null);
} 
return G__39247__delegate.call(this,args);};
G__39247.cljs$lang$maxFixedArity = 0;
G__39247.cljs$lang$applyTo = (function (arglist__39249){
var args = cljs.core.seq(arglist__39249);
return G__39247__delegate(args);
});
G__39247.cljs$core$IFn$_invoke$arity$variadic = G__39247__delegate;
return G__39247;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39250__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39251__i = 0, G__39251__a = new Array(arguments.length -  0);
while (G__39251__i < G__39251__a.length) {G__39251__a[G__39251__i] = arguments[G__39251__i + 0]; ++G__39251__i;}
  args = new cljs.core.IndexedSeq(G__39251__a,0,null);
} 
return G__39250__delegate.call(this,args);};
G__39250.cljs$lang$maxFixedArity = 0;
G__39250.cljs$lang$applyTo = (function (arglist__39252){
var args = cljs.core.seq(arglist__39252);
return G__39250__delegate(args);
});
G__39250.cljs$core$IFn$_invoke$arity$variadic = G__39250__delegate;
return G__39250;
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
var G__39253__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39254__i = 0, G__39254__a = new Array(arguments.length -  0);
while (G__39254__i < G__39254__a.length) {G__39254__a[G__39254__i] = arguments[G__39254__i + 0]; ++G__39254__i;}
  args = new cljs.core.IndexedSeq(G__39254__a,0,null);
} 
return G__39253__delegate.call(this,args);};
G__39253.cljs$lang$maxFixedArity = 0;
G__39253.cljs$lang$applyTo = (function (arglist__39255){
var args = cljs.core.seq(arglist__39255);
return G__39253__delegate(args);
});
G__39253.cljs$core$IFn$_invoke$arity$variadic = G__39253__delegate;
return G__39253;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39256__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39257__i = 0, G__39257__a = new Array(arguments.length -  0);
while (G__39257__i < G__39257__a.length) {G__39257__a[G__39257__i] = arguments[G__39257__i + 0]; ++G__39257__i;}
  args = new cljs.core.IndexedSeq(G__39257__a,0,null);
} 
return G__39256__delegate.call(this,args);};
G__39256.cljs$lang$maxFixedArity = 0;
G__39256.cljs$lang$applyTo = (function (arglist__39258){
var args = cljs.core.seq(arglist__39258);
return G__39256__delegate(args);
});
G__39256.cljs$core$IFn$_invoke$arity$variadic = G__39256__delegate;
return G__39256;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39259__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39260__i = 0, G__39260__a = new Array(arguments.length -  0);
while (G__39260__i < G__39260__a.length) {G__39260__a[G__39260__i] = arguments[G__39260__i + 0]; ++G__39260__i;}
  args = new cljs.core.IndexedSeq(G__39260__a,0,null);
} 
return G__39259__delegate.call(this,args);};
G__39259.cljs$lang$maxFixedArity = 0;
G__39259.cljs$lang$applyTo = (function (arglist__39261){
var args = cljs.core.seq(arglist__39261);
return G__39259__delegate(args);
});
G__39259.cljs$core$IFn$_invoke$arity$variadic = G__39259__delegate;
return G__39259;
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
var G__39262__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39263__i = 0, G__39263__a = new Array(arguments.length -  0);
while (G__39263__i < G__39263__a.length) {G__39263__a[G__39263__i] = arguments[G__39263__i + 0]; ++G__39263__i;}
  args = new cljs.core.IndexedSeq(G__39263__a,0,null);
} 
return G__39262__delegate.call(this,args);};
G__39262.cljs$lang$maxFixedArity = 0;
G__39262.cljs$lang$applyTo = (function (arglist__39264){
var args = cljs.core.seq(arglist__39264);
return G__39262__delegate(args);
});
G__39262.cljs$core$IFn$_invoke$arity$variadic = G__39262__delegate;
return G__39262;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39265__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39266__i = 0, G__39266__a = new Array(arguments.length -  0);
while (G__39266__i < G__39266__a.length) {G__39266__a[G__39266__i] = arguments[G__39266__i + 0]; ++G__39266__i;}
  args = new cljs.core.IndexedSeq(G__39266__a,0,null);
} 
return G__39265__delegate.call(this,args);};
G__39265.cljs$lang$maxFixedArity = 0;
G__39265.cljs$lang$applyTo = (function (arglist__39267){
var args = cljs.core.seq(arglist__39267);
return G__39265__delegate(args);
});
G__39265.cljs$core$IFn$_invoke$arity$variadic = G__39265__delegate;
return G__39265;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39268__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39269__i = 0, G__39269__a = new Array(arguments.length -  0);
while (G__39269__i < G__39269__a.length) {G__39269__a[G__39269__i] = arguments[G__39269__i + 0]; ++G__39269__i;}
  args = new cljs.core.IndexedSeq(G__39269__a,0,null);
} 
return G__39268__delegate.call(this,args);};
G__39268.cljs$lang$maxFixedArity = 0;
G__39268.cljs$lang$applyTo = (function (arglist__39270){
var args = cljs.core.seq(arglist__39270);
return G__39268__delegate(args);
});
G__39268.cljs$core$IFn$_invoke$arity$variadic = G__39268__delegate;
return G__39268;
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
var G__39271__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39272__i = 0, G__39272__a = new Array(arguments.length -  0);
while (G__39272__i < G__39272__a.length) {G__39272__a[G__39272__i] = arguments[G__39272__i + 0]; ++G__39272__i;}
  args = new cljs.core.IndexedSeq(G__39272__a,0,null);
} 
return G__39271__delegate.call(this,args);};
G__39271.cljs$lang$maxFixedArity = 0;
G__39271.cljs$lang$applyTo = (function (arglist__39273){
var args = cljs.core.seq(arglist__39273);
return G__39271__delegate(args);
});
G__39271.cljs$core$IFn$_invoke$arity$variadic = G__39271__delegate;
return G__39271;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39274__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39275__i = 0, G__39275__a = new Array(arguments.length -  0);
while (G__39275__i < G__39275__a.length) {G__39275__a[G__39275__i] = arguments[G__39275__i + 0]; ++G__39275__i;}
  args = new cljs.core.IndexedSeq(G__39275__a,0,null);
} 
return G__39274__delegate.call(this,args);};
G__39274.cljs$lang$maxFixedArity = 0;
G__39274.cljs$lang$applyTo = (function (arglist__39276){
var args = cljs.core.seq(arglist__39276);
return G__39274__delegate(args);
});
G__39274.cljs$core$IFn$_invoke$arity$variadic = G__39274__delegate;
return G__39274;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39277__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39278__i = 0, G__39278__a = new Array(arguments.length -  0);
while (G__39278__i < G__39278__a.length) {G__39278__a[G__39278__i] = arguments[G__39278__i + 0]; ++G__39278__i;}
  args = new cljs.core.IndexedSeq(G__39278__a,0,null);
} 
return G__39277__delegate.call(this,args);};
G__39277.cljs$lang$maxFixedArity = 0;
G__39277.cljs$lang$applyTo = (function (arglist__39279){
var args = cljs.core.seq(arglist__39279);
return G__39277__delegate(args);
});
G__39277.cljs$core$IFn$_invoke$arity$variadic = G__39277__delegate;
return G__39277;
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
var G__39280__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39281__i = 0, G__39281__a = new Array(arguments.length -  0);
while (G__39281__i < G__39281__a.length) {G__39281__a[G__39281__i] = arguments[G__39281__i + 0]; ++G__39281__i;}
  args = new cljs.core.IndexedSeq(G__39281__a,0,null);
} 
return G__39280__delegate.call(this,args);};
G__39280.cljs$lang$maxFixedArity = 0;
G__39280.cljs$lang$applyTo = (function (arglist__39282){
var args = cljs.core.seq(arglist__39282);
return G__39280__delegate(args);
});
G__39280.cljs$core$IFn$_invoke$arity$variadic = G__39280__delegate;
return G__39280;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39283__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39284__i = 0, G__39284__a = new Array(arguments.length -  0);
while (G__39284__i < G__39284__a.length) {G__39284__a[G__39284__i] = arguments[G__39284__i + 0]; ++G__39284__i;}
  args = new cljs.core.IndexedSeq(G__39284__a,0,null);
} 
return G__39283__delegate.call(this,args);};
G__39283.cljs$lang$maxFixedArity = 0;
G__39283.cljs$lang$applyTo = (function (arglist__39285){
var args = cljs.core.seq(arglist__39285);
return G__39283__delegate(args);
});
G__39283.cljs$core$IFn$_invoke$arity$variadic = G__39283__delegate;
return G__39283;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39286__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39287__i = 0, G__39287__a = new Array(arguments.length -  0);
while (G__39287__i < G__39287__a.length) {G__39287__a[G__39287__i] = arguments[G__39287__i + 0]; ++G__39287__i;}
  args = new cljs.core.IndexedSeq(G__39287__a,0,null);
} 
return G__39286__delegate.call(this,args);};
G__39286.cljs$lang$maxFixedArity = 0;
G__39286.cljs$lang$applyTo = (function (arglist__39288){
var args = cljs.core.seq(arglist__39288);
return G__39286__delegate(args);
});
G__39286.cljs$core$IFn$_invoke$arity$variadic = G__39286__delegate;
return G__39286;
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

//# sourceMappingURL=core.js.map?rel=1526327161219
