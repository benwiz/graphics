// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__41446__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41447__i = 0, G__41447__a = new Array(arguments.length -  0);
while (G__41447__i < G__41447__a.length) {G__41447__a[G__41447__i] = arguments[G__41447__i + 0]; ++G__41447__i;}
  args = new cljs.core.IndexedSeq(G__41447__a,0,null);
} 
return G__41446__delegate.call(this,args);};
G__41446.cljs$lang$maxFixedArity = 0;
G__41446.cljs$lang$applyTo = (function (arglist__41448){
var args = cljs.core.seq(arglist__41448);
return G__41446__delegate(args);
});
G__41446.cljs$core$IFn$_invoke$arity$variadic = G__41446__delegate;
return G__41446;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41449__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41450__i = 0, G__41450__a = new Array(arguments.length -  0);
while (G__41450__i < G__41450__a.length) {G__41450__a[G__41450__i] = arguments[G__41450__i + 0]; ++G__41450__i;}
  args = new cljs.core.IndexedSeq(G__41450__a,0,null);
} 
return G__41449__delegate.call(this,args);};
G__41449.cljs$lang$maxFixedArity = 0;
G__41449.cljs$lang$applyTo = (function (arglist__41451){
var args = cljs.core.seq(arglist__41451);
return G__41449__delegate(args);
});
G__41449.cljs$core$IFn$_invoke$arity$variadic = G__41449__delegate;
return G__41449;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41452__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41453__i = 0, G__41453__a = new Array(arguments.length -  0);
while (G__41453__i < G__41453__a.length) {G__41453__a[G__41453__i] = arguments[G__41453__i + 0]; ++G__41453__i;}
  args = new cljs.core.IndexedSeq(G__41453__a,0,null);
} 
return G__41452__delegate.call(this,args);};
G__41452.cljs$lang$maxFixedArity = 0;
G__41452.cljs$lang$applyTo = (function (arglist__41454){
var args = cljs.core.seq(arglist__41454);
return G__41452__delegate(args);
});
G__41452.cljs$core$IFn$_invoke$arity$variadic = G__41452__delegate;
return G__41452;
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
var G__41455__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41456__i = 0, G__41456__a = new Array(arguments.length -  0);
while (G__41456__i < G__41456__a.length) {G__41456__a[G__41456__i] = arguments[G__41456__i + 0]; ++G__41456__i;}
  args = new cljs.core.IndexedSeq(G__41456__a,0,null);
} 
return G__41455__delegate.call(this,args);};
G__41455.cljs$lang$maxFixedArity = 0;
G__41455.cljs$lang$applyTo = (function (arglist__41457){
var args = cljs.core.seq(arglist__41457);
return G__41455__delegate(args);
});
G__41455.cljs$core$IFn$_invoke$arity$variadic = G__41455__delegate;
return G__41455;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41458__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41459__i = 0, G__41459__a = new Array(arguments.length -  0);
while (G__41459__i < G__41459__a.length) {G__41459__a[G__41459__i] = arguments[G__41459__i + 0]; ++G__41459__i;}
  args = new cljs.core.IndexedSeq(G__41459__a,0,null);
} 
return G__41458__delegate.call(this,args);};
G__41458.cljs$lang$maxFixedArity = 0;
G__41458.cljs$lang$applyTo = (function (arglist__41460){
var args = cljs.core.seq(arglist__41460);
return G__41458__delegate(args);
});
G__41458.cljs$core$IFn$_invoke$arity$variadic = G__41458__delegate;
return G__41458;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41461__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41462__i = 0, G__41462__a = new Array(arguments.length -  0);
while (G__41462__i < G__41462__a.length) {G__41462__a[G__41462__i] = arguments[G__41462__i + 0]; ++G__41462__i;}
  args = new cljs.core.IndexedSeq(G__41462__a,0,null);
} 
return G__41461__delegate.call(this,args);};
G__41461.cljs$lang$maxFixedArity = 0;
G__41461.cljs$lang$applyTo = (function (arglist__41463){
var args = cljs.core.seq(arglist__41463);
return G__41461__delegate(args);
});
G__41461.cljs$core$IFn$_invoke$arity$variadic = G__41461__delegate;
return G__41461;
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
var G__41464__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41465__i = 0, G__41465__a = new Array(arguments.length -  0);
while (G__41465__i < G__41465__a.length) {G__41465__a[G__41465__i] = arguments[G__41465__i + 0]; ++G__41465__i;}
  args = new cljs.core.IndexedSeq(G__41465__a,0,null);
} 
return G__41464__delegate.call(this,args);};
G__41464.cljs$lang$maxFixedArity = 0;
G__41464.cljs$lang$applyTo = (function (arglist__41466){
var args = cljs.core.seq(arglist__41466);
return G__41464__delegate(args);
});
G__41464.cljs$core$IFn$_invoke$arity$variadic = G__41464__delegate;
return G__41464;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41467__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41468__i = 0, G__41468__a = new Array(arguments.length -  0);
while (G__41468__i < G__41468__a.length) {G__41468__a[G__41468__i] = arguments[G__41468__i + 0]; ++G__41468__i;}
  args = new cljs.core.IndexedSeq(G__41468__a,0,null);
} 
return G__41467__delegate.call(this,args);};
G__41467.cljs$lang$maxFixedArity = 0;
G__41467.cljs$lang$applyTo = (function (arglist__41469){
var args = cljs.core.seq(arglist__41469);
return G__41467__delegate(args);
});
G__41467.cljs$core$IFn$_invoke$arity$variadic = G__41467__delegate;
return G__41467;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41470__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41471__i = 0, G__41471__a = new Array(arguments.length -  0);
while (G__41471__i < G__41471__a.length) {G__41471__a[G__41471__i] = arguments[G__41471__i + 0]; ++G__41471__i;}
  args = new cljs.core.IndexedSeq(G__41471__a,0,null);
} 
return G__41470__delegate.call(this,args);};
G__41470.cljs$lang$maxFixedArity = 0;
G__41470.cljs$lang$applyTo = (function (arglist__41472){
var args = cljs.core.seq(arglist__41472);
return G__41470__delegate(args);
});
G__41470.cljs$core$IFn$_invoke$arity$variadic = G__41470__delegate;
return G__41470;
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
var G__41473__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41474__i = 0, G__41474__a = new Array(arguments.length -  0);
while (G__41474__i < G__41474__a.length) {G__41474__a[G__41474__i] = arguments[G__41474__i + 0]; ++G__41474__i;}
  args = new cljs.core.IndexedSeq(G__41474__a,0,null);
} 
return G__41473__delegate.call(this,args);};
G__41473.cljs$lang$maxFixedArity = 0;
G__41473.cljs$lang$applyTo = (function (arglist__41475){
var args = cljs.core.seq(arglist__41475);
return G__41473__delegate(args);
});
G__41473.cljs$core$IFn$_invoke$arity$variadic = G__41473__delegate;
return G__41473;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41476__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41477__i = 0, G__41477__a = new Array(arguments.length -  0);
while (G__41477__i < G__41477__a.length) {G__41477__a[G__41477__i] = arguments[G__41477__i + 0]; ++G__41477__i;}
  args = new cljs.core.IndexedSeq(G__41477__a,0,null);
} 
return G__41476__delegate.call(this,args);};
G__41476.cljs$lang$maxFixedArity = 0;
G__41476.cljs$lang$applyTo = (function (arglist__41478){
var args = cljs.core.seq(arglist__41478);
return G__41476__delegate(args);
});
G__41476.cljs$core$IFn$_invoke$arity$variadic = G__41476__delegate;
return G__41476;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41479__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41480__i = 0, G__41480__a = new Array(arguments.length -  0);
while (G__41480__i < G__41480__a.length) {G__41480__a[G__41480__i] = arguments[G__41480__i + 0]; ++G__41480__i;}
  args = new cljs.core.IndexedSeq(G__41480__a,0,null);
} 
return G__41479__delegate.call(this,args);};
G__41479.cljs$lang$maxFixedArity = 0;
G__41479.cljs$lang$applyTo = (function (arglist__41481){
var args = cljs.core.seq(arglist__41481);
return G__41479__delegate(args);
});
G__41479.cljs$core$IFn$_invoke$arity$variadic = G__41479__delegate;
return G__41479;
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

//# sourceMappingURL=core.js.map?rel=1526252566468
