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
var G__41504__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41505__i = 0, G__41505__a = new Array(arguments.length -  0);
while (G__41505__i < G__41505__a.length) {G__41505__a[G__41505__i] = arguments[G__41505__i + 0]; ++G__41505__i;}
  args = new cljs.core.IndexedSeq(G__41505__a,0,null);
} 
return G__41504__delegate.call(this,args);};
G__41504.cljs$lang$maxFixedArity = 0;
G__41504.cljs$lang$applyTo = (function (arglist__41506){
var args = cljs.core.seq(arglist__41506);
return G__41504__delegate(args);
});
G__41504.cljs$core$IFn$_invoke$arity$variadic = G__41504__delegate;
return G__41504;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41507__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41508__i = 0, G__41508__a = new Array(arguments.length -  0);
while (G__41508__i < G__41508__a.length) {G__41508__a[G__41508__i] = arguments[G__41508__i + 0]; ++G__41508__i;}
  args = new cljs.core.IndexedSeq(G__41508__a,0,null);
} 
return G__41507__delegate.call(this,args);};
G__41507.cljs$lang$maxFixedArity = 0;
G__41507.cljs$lang$applyTo = (function (arglist__41509){
var args = cljs.core.seq(arglist__41509);
return G__41507__delegate(args);
});
G__41507.cljs$core$IFn$_invoke$arity$variadic = G__41507__delegate;
return G__41507;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41510__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41511__i = 0, G__41511__a = new Array(arguments.length -  0);
while (G__41511__i < G__41511__a.length) {G__41511__a[G__41511__i] = arguments[G__41511__i + 0]; ++G__41511__i;}
  args = new cljs.core.IndexedSeq(G__41511__a,0,null);
} 
return G__41510__delegate.call(this,args);};
G__41510.cljs$lang$maxFixedArity = 0;
G__41510.cljs$lang$applyTo = (function (arglist__41512){
var args = cljs.core.seq(arglist__41512);
return G__41510__delegate(args);
});
G__41510.cljs$core$IFn$_invoke$arity$variadic = G__41510__delegate;
return G__41510;
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
var G__41513__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41514__i = 0, G__41514__a = new Array(arguments.length -  0);
while (G__41514__i < G__41514__a.length) {G__41514__a[G__41514__i] = arguments[G__41514__i + 0]; ++G__41514__i;}
  args = new cljs.core.IndexedSeq(G__41514__a,0,null);
} 
return G__41513__delegate.call(this,args);};
G__41513.cljs$lang$maxFixedArity = 0;
G__41513.cljs$lang$applyTo = (function (arglist__41515){
var args = cljs.core.seq(arglist__41515);
return G__41513__delegate(args);
});
G__41513.cljs$core$IFn$_invoke$arity$variadic = G__41513__delegate;
return G__41513;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41516__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41517__i = 0, G__41517__a = new Array(arguments.length -  0);
while (G__41517__i < G__41517__a.length) {G__41517__a[G__41517__i] = arguments[G__41517__i + 0]; ++G__41517__i;}
  args = new cljs.core.IndexedSeq(G__41517__a,0,null);
} 
return G__41516__delegate.call(this,args);};
G__41516.cljs$lang$maxFixedArity = 0;
G__41516.cljs$lang$applyTo = (function (arglist__41518){
var args = cljs.core.seq(arglist__41518);
return G__41516__delegate(args);
});
G__41516.cljs$core$IFn$_invoke$arity$variadic = G__41516__delegate;
return G__41516;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41519__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41520__i = 0, G__41520__a = new Array(arguments.length -  0);
while (G__41520__i < G__41520__a.length) {G__41520__a[G__41520__i] = arguments[G__41520__i + 0]; ++G__41520__i;}
  args = new cljs.core.IndexedSeq(G__41520__a,0,null);
} 
return G__41519__delegate.call(this,args);};
G__41519.cljs$lang$maxFixedArity = 0;
G__41519.cljs$lang$applyTo = (function (arglist__41521){
var args = cljs.core.seq(arglist__41521);
return G__41519__delegate(args);
});
G__41519.cljs$core$IFn$_invoke$arity$variadic = G__41519__delegate;
return G__41519;
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
var G__41522__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41523__i = 0, G__41523__a = new Array(arguments.length -  0);
while (G__41523__i < G__41523__a.length) {G__41523__a[G__41523__i] = arguments[G__41523__i + 0]; ++G__41523__i;}
  args = new cljs.core.IndexedSeq(G__41523__a,0,null);
} 
return G__41522__delegate.call(this,args);};
G__41522.cljs$lang$maxFixedArity = 0;
G__41522.cljs$lang$applyTo = (function (arglist__41524){
var args = cljs.core.seq(arglist__41524);
return G__41522__delegate(args);
});
G__41522.cljs$core$IFn$_invoke$arity$variadic = G__41522__delegate;
return G__41522;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41525__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41526__i = 0, G__41526__a = new Array(arguments.length -  0);
while (G__41526__i < G__41526__a.length) {G__41526__a[G__41526__i] = arguments[G__41526__i + 0]; ++G__41526__i;}
  args = new cljs.core.IndexedSeq(G__41526__a,0,null);
} 
return G__41525__delegate.call(this,args);};
G__41525.cljs$lang$maxFixedArity = 0;
G__41525.cljs$lang$applyTo = (function (arglist__41527){
var args = cljs.core.seq(arglist__41527);
return G__41525__delegate(args);
});
G__41525.cljs$core$IFn$_invoke$arity$variadic = G__41525__delegate;
return G__41525;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41528__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41529__i = 0, G__41529__a = new Array(arguments.length -  0);
while (G__41529__i < G__41529__a.length) {G__41529__a[G__41529__i] = arguments[G__41529__i + 0]; ++G__41529__i;}
  args = new cljs.core.IndexedSeq(G__41529__a,0,null);
} 
return G__41528__delegate.call(this,args);};
G__41528.cljs$lang$maxFixedArity = 0;
G__41528.cljs$lang$applyTo = (function (arglist__41530){
var args = cljs.core.seq(arglist__41530);
return G__41528__delegate(args);
});
G__41528.cljs$core$IFn$_invoke$arity$variadic = G__41528__delegate;
return G__41528;
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
var G__41531__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41532__i = 0, G__41532__a = new Array(arguments.length -  0);
while (G__41532__i < G__41532__a.length) {G__41532__a[G__41532__i] = arguments[G__41532__i + 0]; ++G__41532__i;}
  args = new cljs.core.IndexedSeq(G__41532__a,0,null);
} 
return G__41531__delegate.call(this,args);};
G__41531.cljs$lang$maxFixedArity = 0;
G__41531.cljs$lang$applyTo = (function (arglist__41533){
var args = cljs.core.seq(arglist__41533);
return G__41531__delegate(args);
});
G__41531.cljs$core$IFn$_invoke$arity$variadic = G__41531__delegate;
return G__41531;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41534__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41535__i = 0, G__41535__a = new Array(arguments.length -  0);
while (G__41535__i < G__41535__a.length) {G__41535__a[G__41535__i] = arguments[G__41535__i + 0]; ++G__41535__i;}
  args = new cljs.core.IndexedSeq(G__41535__a,0,null);
} 
return G__41534__delegate.call(this,args);};
G__41534.cljs$lang$maxFixedArity = 0;
G__41534.cljs$lang$applyTo = (function (arglist__41536){
var args = cljs.core.seq(arglist__41536);
return G__41534__delegate(args);
});
G__41534.cljs$core$IFn$_invoke$arity$variadic = G__41534__delegate;
return G__41534;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41537__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41538__i = 0, G__41538__a = new Array(arguments.length -  0);
while (G__41538__i < G__41538__a.length) {G__41538__a[G__41538__i] = arguments[G__41538__i + 0]; ++G__41538__i;}
  args = new cljs.core.IndexedSeq(G__41538__a,0,null);
} 
return G__41537__delegate.call(this,args);};
G__41537.cljs$lang$maxFixedArity = 0;
G__41537.cljs$lang$applyTo = (function (arglist__41539){
var args = cljs.core.seq(arglist__41539);
return G__41537__delegate(args);
});
G__41537.cljs$core$IFn$_invoke$arity$variadic = G__41537__delegate;
return G__41537;
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
var G__41540__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41541__i = 0, G__41541__a = new Array(arguments.length -  0);
while (G__41541__i < G__41541__a.length) {G__41541__a[G__41541__i] = arguments[G__41541__i + 0]; ++G__41541__i;}
  args = new cljs.core.IndexedSeq(G__41541__a,0,null);
} 
return G__41540__delegate.call(this,args);};
G__41540.cljs$lang$maxFixedArity = 0;
G__41540.cljs$lang$applyTo = (function (arglist__41542){
var args = cljs.core.seq(arglist__41542);
return G__41540__delegate(args);
});
G__41540.cljs$core$IFn$_invoke$arity$variadic = G__41540__delegate;
return G__41540;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__41543__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__41543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41544__i = 0, G__41544__a = new Array(arguments.length -  0);
while (G__41544__i < G__41544__a.length) {G__41544__a[G__41544__i] = arguments[G__41544__i + 0]; ++G__41544__i;}
  args = new cljs.core.IndexedSeq(G__41544__a,0,null);
} 
return G__41543__delegate.call(this,args);};
G__41543.cljs$lang$maxFixedArity = 0;
G__41543.cljs$lang$applyTo = (function (arglist__41545){
var args = cljs.core.seq(arglist__41545);
return G__41543__delegate(args);
});
G__41543.cljs$core$IFn$_invoke$arity$variadic = G__41543__delegate;
return G__41543;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41546__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41547__i = 0, G__41547__a = new Array(arguments.length -  0);
while (G__41547__i < G__41547__a.length) {G__41547__a[G__41547__i] = arguments[G__41547__i + 0]; ++G__41547__i;}
  args = new cljs.core.IndexedSeq(G__41547__a,0,null);
} 
return G__41546__delegate.call(this,args);};
G__41546.cljs$lang$maxFixedArity = 0;
G__41546.cljs$lang$applyTo = (function (arglist__41548){
var args = cljs.core.seq(arglist__41548);
return G__41546__delegate(args);
});
G__41546.cljs$core$IFn$_invoke$arity$variadic = G__41546__delegate;
return G__41546;
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
var G__41549__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41550__i = 0, G__41550__a = new Array(arguments.length -  0);
while (G__41550__i < G__41550__a.length) {G__41550__a[G__41550__i] = arguments[G__41550__i + 0]; ++G__41550__i;}
  args = new cljs.core.IndexedSeq(G__41550__a,0,null);
} 
return G__41549__delegate.call(this,args);};
G__41549.cljs$lang$maxFixedArity = 0;
G__41549.cljs$lang$applyTo = (function (arglist__41551){
var args = cljs.core.seq(arglist__41551);
return G__41549__delegate(args);
});
G__41549.cljs$core$IFn$_invoke$arity$variadic = G__41549__delegate;
return G__41549;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__41552__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__41552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41553__i = 0, G__41553__a = new Array(arguments.length -  0);
while (G__41553__i < G__41553__a.length) {G__41553__a[G__41553__i] = arguments[G__41553__i + 0]; ++G__41553__i;}
  args = new cljs.core.IndexedSeq(G__41553__a,0,null);
} 
return G__41552__delegate.call(this,args);};
G__41552.cljs$lang$maxFixedArity = 0;
G__41552.cljs$lang$applyTo = (function (arglist__41554){
var args = cljs.core.seq(arglist__41554);
return G__41552__delegate(args);
});
G__41552.cljs$core$IFn$_invoke$arity$variadic = G__41552__delegate;
return G__41552;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41555__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41556__i = 0, G__41556__a = new Array(arguments.length -  0);
while (G__41556__i < G__41556__a.length) {G__41556__a[G__41556__i] = arguments[G__41556__i + 0]; ++G__41556__i;}
  args = new cljs.core.IndexedSeq(G__41556__a,0,null);
} 
return G__41555__delegate.call(this,args);};
G__41555.cljs$lang$maxFixedArity = 0;
G__41555.cljs$lang$applyTo = (function (arglist__41557){
var args = cljs.core.seq(arglist__41557);
return G__41555__delegate(args);
});
G__41555.cljs$core$IFn$_invoke$arity$variadic = G__41555__delegate;
return G__41555;
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
var G__41558__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41559__i = 0, G__41559__a = new Array(arguments.length -  0);
while (G__41559__i < G__41559__a.length) {G__41559__a[G__41559__i] = arguments[G__41559__i + 0]; ++G__41559__i;}
  args = new cljs.core.IndexedSeq(G__41559__a,0,null);
} 
return G__41558__delegate.call(this,args);};
G__41558.cljs$lang$maxFixedArity = 0;
G__41558.cljs$lang$applyTo = (function (arglist__41560){
var args = cljs.core.seq(arglist__41560);
return G__41558__delegate(args);
});
G__41558.cljs$core$IFn$_invoke$arity$variadic = G__41558__delegate;
return G__41558;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__41561__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__41561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41562__i = 0, G__41562__a = new Array(arguments.length -  0);
while (G__41562__i < G__41562__a.length) {G__41562__a[G__41562__i] = arguments[G__41562__i + 0]; ++G__41562__i;}
  args = new cljs.core.IndexedSeq(G__41562__a,0,null);
} 
return G__41561__delegate.call(this,args);};
G__41561.cljs$lang$maxFixedArity = 0;
G__41561.cljs$lang$applyTo = (function (arglist__41563){
var args = cljs.core.seq(arglist__41563);
return G__41561__delegate(args);
});
G__41561.cljs$core$IFn$_invoke$arity$variadic = G__41561__delegate;
return G__41561;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41564__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41565__i = 0, G__41565__a = new Array(arguments.length -  0);
while (G__41565__i < G__41565__a.length) {G__41565__a[G__41565__i] = arguments[G__41565__i + 0]; ++G__41565__i;}
  args = new cljs.core.IndexedSeq(G__41565__a,0,null);
} 
return G__41564__delegate.call(this,args);};
G__41564.cljs$lang$maxFixedArity = 0;
G__41564.cljs$lang$applyTo = (function (arglist__41566){
var args = cljs.core.seq(arglist__41566);
return G__41564__delegate(args);
});
G__41564.cljs$core$IFn$_invoke$arity$variadic = G__41564__delegate;
return G__41564;
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
var G__41567__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41568__i = 0, G__41568__a = new Array(arguments.length -  0);
while (G__41568__i < G__41568__a.length) {G__41568__a[G__41568__i] = arguments[G__41568__i + 0]; ++G__41568__i;}
  args = new cljs.core.IndexedSeq(G__41568__a,0,null);
} 
return G__41567__delegate.call(this,args);};
G__41567.cljs$lang$maxFixedArity = 0;
G__41567.cljs$lang$applyTo = (function (arglist__41569){
var args = cljs.core.seq(arglist__41569);
return G__41567__delegate(args);
});
G__41567.cljs$core$IFn$_invoke$arity$variadic = G__41567__delegate;
return G__41567;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__41570__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__41570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41571__i = 0, G__41571__a = new Array(arguments.length -  0);
while (G__41571__i < G__41571__a.length) {G__41571__a[G__41571__i] = arguments[G__41571__i + 0]; ++G__41571__i;}
  args = new cljs.core.IndexedSeq(G__41571__a,0,null);
} 
return G__41570__delegate.call(this,args);};
G__41570.cljs$lang$maxFixedArity = 0;
G__41570.cljs$lang$applyTo = (function (arglist__41572){
var args = cljs.core.seq(arglist__41572);
return G__41570__delegate(args);
});
G__41570.cljs$core$IFn$_invoke$arity$variadic = G__41570__delegate;
return G__41570;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41573__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41574__i = 0, G__41574__a = new Array(arguments.length -  0);
while (G__41574__i < G__41574__a.length) {G__41574__a[G__41574__i] = arguments[G__41574__i + 0]; ++G__41574__i;}
  args = new cljs.core.IndexedSeq(G__41574__a,0,null);
} 
return G__41573__delegate.call(this,args);};
G__41573.cljs$lang$maxFixedArity = 0;
G__41573.cljs$lang$applyTo = (function (arglist__41575){
var args = cljs.core.seq(arglist__41575);
return G__41573__delegate(args);
});
G__41573.cljs$core$IFn$_invoke$arity$variadic = G__41573__delegate;
return G__41573;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527280145939
