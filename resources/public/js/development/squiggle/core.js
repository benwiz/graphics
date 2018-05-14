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
var G__44621__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__44621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44622__i = 0, G__44622__a = new Array(arguments.length -  0);
while (G__44622__i < G__44622__a.length) {G__44622__a[G__44622__i] = arguments[G__44622__i + 0]; ++G__44622__i;}
  args = new cljs.core.IndexedSeq(G__44622__a,0,null);
} 
return G__44621__delegate.call(this,args);};
G__44621.cljs$lang$maxFixedArity = 0;
G__44621.cljs$lang$applyTo = (function (arglist__44623){
var args = cljs.core.seq(arglist__44623);
return G__44621__delegate(args);
});
G__44621.cljs$core$IFn$_invoke$arity$variadic = G__44621__delegate;
return G__44621;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__44624__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__44624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44625__i = 0, G__44625__a = new Array(arguments.length -  0);
while (G__44625__i < G__44625__a.length) {G__44625__a[G__44625__i] = arguments[G__44625__i + 0]; ++G__44625__i;}
  args = new cljs.core.IndexedSeq(G__44625__a,0,null);
} 
return G__44624__delegate.call(this,args);};
G__44624.cljs$lang$maxFixedArity = 0;
G__44624.cljs$lang$applyTo = (function (arglist__44626){
var args = cljs.core.seq(arglist__44626);
return G__44624__delegate(args);
});
G__44624.cljs$core$IFn$_invoke$arity$variadic = G__44624__delegate;
return G__44624;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__44627__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__44627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44628__i = 0, G__44628__a = new Array(arguments.length -  0);
while (G__44628__i < G__44628__a.length) {G__44628__a[G__44628__i] = arguments[G__44628__i + 0]; ++G__44628__i;}
  args = new cljs.core.IndexedSeq(G__44628__a,0,null);
} 
return G__44627__delegate.call(this,args);};
G__44627.cljs$lang$maxFixedArity = 0;
G__44627.cljs$lang$applyTo = (function (arglist__44629){
var args = cljs.core.seq(arglist__44629);
return G__44627__delegate(args);
});
G__44627.cljs$core$IFn$_invoke$arity$variadic = G__44627__delegate;
return G__44627;
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
var G__44630__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__44630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44631__i = 0, G__44631__a = new Array(arguments.length -  0);
while (G__44631__i < G__44631__a.length) {G__44631__a[G__44631__i] = arguments[G__44631__i + 0]; ++G__44631__i;}
  args = new cljs.core.IndexedSeq(G__44631__a,0,null);
} 
return G__44630__delegate.call(this,args);};
G__44630.cljs$lang$maxFixedArity = 0;
G__44630.cljs$lang$applyTo = (function (arglist__44632){
var args = cljs.core.seq(arglist__44632);
return G__44630__delegate(args);
});
G__44630.cljs$core$IFn$_invoke$arity$variadic = G__44630__delegate;
return G__44630;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__44633__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__44633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44634__i = 0, G__44634__a = new Array(arguments.length -  0);
while (G__44634__i < G__44634__a.length) {G__44634__a[G__44634__i] = arguments[G__44634__i + 0]; ++G__44634__i;}
  args = new cljs.core.IndexedSeq(G__44634__a,0,null);
} 
return G__44633__delegate.call(this,args);};
G__44633.cljs$lang$maxFixedArity = 0;
G__44633.cljs$lang$applyTo = (function (arglist__44635){
var args = cljs.core.seq(arglist__44635);
return G__44633__delegate(args);
});
G__44633.cljs$core$IFn$_invoke$arity$variadic = G__44633__delegate;
return G__44633;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__44636__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__44636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44637__i = 0, G__44637__a = new Array(arguments.length -  0);
while (G__44637__i < G__44637__a.length) {G__44637__a[G__44637__i] = arguments[G__44637__i + 0]; ++G__44637__i;}
  args = new cljs.core.IndexedSeq(G__44637__a,0,null);
} 
return G__44636__delegate.call(this,args);};
G__44636.cljs$lang$maxFixedArity = 0;
G__44636.cljs$lang$applyTo = (function (arglist__44638){
var args = cljs.core.seq(arglist__44638);
return G__44636__delegate(args);
});
G__44636.cljs$core$IFn$_invoke$arity$variadic = G__44636__delegate;
return G__44636;
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
var G__44639__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__44639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44640__i = 0, G__44640__a = new Array(arguments.length -  0);
while (G__44640__i < G__44640__a.length) {G__44640__a[G__44640__i] = arguments[G__44640__i + 0]; ++G__44640__i;}
  args = new cljs.core.IndexedSeq(G__44640__a,0,null);
} 
return G__44639__delegate.call(this,args);};
G__44639.cljs$lang$maxFixedArity = 0;
G__44639.cljs$lang$applyTo = (function (arglist__44641){
var args = cljs.core.seq(arglist__44641);
return G__44639__delegate(args);
});
G__44639.cljs$core$IFn$_invoke$arity$variadic = G__44639__delegate;
return G__44639;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__44642__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__44642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44643__i = 0, G__44643__a = new Array(arguments.length -  0);
while (G__44643__i < G__44643__a.length) {G__44643__a[G__44643__i] = arguments[G__44643__i + 0]; ++G__44643__i;}
  args = new cljs.core.IndexedSeq(G__44643__a,0,null);
} 
return G__44642__delegate.call(this,args);};
G__44642.cljs$lang$maxFixedArity = 0;
G__44642.cljs$lang$applyTo = (function (arglist__44644){
var args = cljs.core.seq(arglist__44644);
return G__44642__delegate(args);
});
G__44642.cljs$core$IFn$_invoke$arity$variadic = G__44642__delegate;
return G__44642;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__44645__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__44645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44646__i = 0, G__44646__a = new Array(arguments.length -  0);
while (G__44646__i < G__44646__a.length) {G__44646__a[G__44646__i] = arguments[G__44646__i + 0]; ++G__44646__i;}
  args = new cljs.core.IndexedSeq(G__44646__a,0,null);
} 
return G__44645__delegate.call(this,args);};
G__44645.cljs$lang$maxFixedArity = 0;
G__44645.cljs$lang$applyTo = (function (arglist__44647){
var args = cljs.core.seq(arglist__44647);
return G__44645__delegate(args);
});
G__44645.cljs$core$IFn$_invoke$arity$variadic = G__44645__delegate;
return G__44645;
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
var G__44648__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__44648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44649__i = 0, G__44649__a = new Array(arguments.length -  0);
while (G__44649__i < G__44649__a.length) {G__44649__a[G__44649__i] = arguments[G__44649__i + 0]; ++G__44649__i;}
  args = new cljs.core.IndexedSeq(G__44649__a,0,null);
} 
return G__44648__delegate.call(this,args);};
G__44648.cljs$lang$maxFixedArity = 0;
G__44648.cljs$lang$applyTo = (function (arglist__44650){
var args = cljs.core.seq(arglist__44650);
return G__44648__delegate(args);
});
G__44648.cljs$core$IFn$_invoke$arity$variadic = G__44648__delegate;
return G__44648;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__44651__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__44651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44652__i = 0, G__44652__a = new Array(arguments.length -  0);
while (G__44652__i < G__44652__a.length) {G__44652__a[G__44652__i] = arguments[G__44652__i + 0]; ++G__44652__i;}
  args = new cljs.core.IndexedSeq(G__44652__a,0,null);
} 
return G__44651__delegate.call(this,args);};
G__44651.cljs$lang$maxFixedArity = 0;
G__44651.cljs$lang$applyTo = (function (arglist__44653){
var args = cljs.core.seq(arglist__44653);
return G__44651__delegate(args);
});
G__44651.cljs$core$IFn$_invoke$arity$variadic = G__44651__delegate;
return G__44651;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__44654__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__44654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44655__i = 0, G__44655__a = new Array(arguments.length -  0);
while (G__44655__i < G__44655__a.length) {G__44655__a[G__44655__i] = arguments[G__44655__i + 0]; ++G__44655__i;}
  args = new cljs.core.IndexedSeq(G__44655__a,0,null);
} 
return G__44654__delegate.call(this,args);};
G__44654.cljs$lang$maxFixedArity = 0;
G__44654.cljs$lang$applyTo = (function (arglist__44656){
var args = cljs.core.seq(arglist__44656);
return G__44654__delegate(args);
});
G__44654.cljs$core$IFn$_invoke$arity$variadic = G__44654__delegate;
return G__44654;
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

//# sourceMappingURL=core.js.map?rel=1526257294604
