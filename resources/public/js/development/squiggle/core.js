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
var G__39693__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39694__i = 0, G__39694__a = new Array(arguments.length -  0);
while (G__39694__i < G__39694__a.length) {G__39694__a[G__39694__i] = arguments[G__39694__i + 0]; ++G__39694__i;}
  args = new cljs.core.IndexedSeq(G__39694__a,0,null);
} 
return G__39693__delegate.call(this,args);};
G__39693.cljs$lang$maxFixedArity = 0;
G__39693.cljs$lang$applyTo = (function (arglist__39695){
var args = cljs.core.seq(arglist__39695);
return G__39693__delegate(args);
});
G__39693.cljs$core$IFn$_invoke$arity$variadic = G__39693__delegate;
return G__39693;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39696__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39697__i = 0, G__39697__a = new Array(arguments.length -  0);
while (G__39697__i < G__39697__a.length) {G__39697__a[G__39697__i] = arguments[G__39697__i + 0]; ++G__39697__i;}
  args = new cljs.core.IndexedSeq(G__39697__a,0,null);
} 
return G__39696__delegate.call(this,args);};
G__39696.cljs$lang$maxFixedArity = 0;
G__39696.cljs$lang$applyTo = (function (arglist__39698){
var args = cljs.core.seq(arglist__39698);
return G__39696__delegate(args);
});
G__39696.cljs$core$IFn$_invoke$arity$variadic = G__39696__delegate;
return G__39696;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39699__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39700__i = 0, G__39700__a = new Array(arguments.length -  0);
while (G__39700__i < G__39700__a.length) {G__39700__a[G__39700__i] = arguments[G__39700__i + 0]; ++G__39700__i;}
  args = new cljs.core.IndexedSeq(G__39700__a,0,null);
} 
return G__39699__delegate.call(this,args);};
G__39699.cljs$lang$maxFixedArity = 0;
G__39699.cljs$lang$applyTo = (function (arglist__39701){
var args = cljs.core.seq(arglist__39701);
return G__39699__delegate(args);
});
G__39699.cljs$core$IFn$_invoke$arity$variadic = G__39699__delegate;
return G__39699;
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
var G__39702__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39703__i = 0, G__39703__a = new Array(arguments.length -  0);
while (G__39703__i < G__39703__a.length) {G__39703__a[G__39703__i] = arguments[G__39703__i + 0]; ++G__39703__i;}
  args = new cljs.core.IndexedSeq(G__39703__a,0,null);
} 
return G__39702__delegate.call(this,args);};
G__39702.cljs$lang$maxFixedArity = 0;
G__39702.cljs$lang$applyTo = (function (arglist__39704){
var args = cljs.core.seq(arglist__39704);
return G__39702__delegate(args);
});
G__39702.cljs$core$IFn$_invoke$arity$variadic = G__39702__delegate;
return G__39702;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39705__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39706__i = 0, G__39706__a = new Array(arguments.length -  0);
while (G__39706__i < G__39706__a.length) {G__39706__a[G__39706__i] = arguments[G__39706__i + 0]; ++G__39706__i;}
  args = new cljs.core.IndexedSeq(G__39706__a,0,null);
} 
return G__39705__delegate.call(this,args);};
G__39705.cljs$lang$maxFixedArity = 0;
G__39705.cljs$lang$applyTo = (function (arglist__39707){
var args = cljs.core.seq(arglist__39707);
return G__39705__delegate(args);
});
G__39705.cljs$core$IFn$_invoke$arity$variadic = G__39705__delegate;
return G__39705;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39708__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39709__i = 0, G__39709__a = new Array(arguments.length -  0);
while (G__39709__i < G__39709__a.length) {G__39709__a[G__39709__i] = arguments[G__39709__i + 0]; ++G__39709__i;}
  args = new cljs.core.IndexedSeq(G__39709__a,0,null);
} 
return G__39708__delegate.call(this,args);};
G__39708.cljs$lang$maxFixedArity = 0;
G__39708.cljs$lang$applyTo = (function (arglist__39710){
var args = cljs.core.seq(arglist__39710);
return G__39708__delegate(args);
});
G__39708.cljs$core$IFn$_invoke$arity$variadic = G__39708__delegate;
return G__39708;
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
var G__39711__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39712__i = 0, G__39712__a = new Array(arguments.length -  0);
while (G__39712__i < G__39712__a.length) {G__39712__a[G__39712__i] = arguments[G__39712__i + 0]; ++G__39712__i;}
  args = new cljs.core.IndexedSeq(G__39712__a,0,null);
} 
return G__39711__delegate.call(this,args);};
G__39711.cljs$lang$maxFixedArity = 0;
G__39711.cljs$lang$applyTo = (function (arglist__39713){
var args = cljs.core.seq(arglist__39713);
return G__39711__delegate(args);
});
G__39711.cljs$core$IFn$_invoke$arity$variadic = G__39711__delegate;
return G__39711;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39714__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39715__i = 0, G__39715__a = new Array(arguments.length -  0);
while (G__39715__i < G__39715__a.length) {G__39715__a[G__39715__i] = arguments[G__39715__i + 0]; ++G__39715__i;}
  args = new cljs.core.IndexedSeq(G__39715__a,0,null);
} 
return G__39714__delegate.call(this,args);};
G__39714.cljs$lang$maxFixedArity = 0;
G__39714.cljs$lang$applyTo = (function (arglist__39716){
var args = cljs.core.seq(arglist__39716);
return G__39714__delegate(args);
});
G__39714.cljs$core$IFn$_invoke$arity$variadic = G__39714__delegate;
return G__39714;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39717__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39718__i = 0, G__39718__a = new Array(arguments.length -  0);
while (G__39718__i < G__39718__a.length) {G__39718__a[G__39718__i] = arguments[G__39718__i + 0]; ++G__39718__i;}
  args = new cljs.core.IndexedSeq(G__39718__a,0,null);
} 
return G__39717__delegate.call(this,args);};
G__39717.cljs$lang$maxFixedArity = 0;
G__39717.cljs$lang$applyTo = (function (arglist__39719){
var args = cljs.core.seq(arglist__39719);
return G__39717__delegate(args);
});
G__39717.cljs$core$IFn$_invoke$arity$variadic = G__39717__delegate;
return G__39717;
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
var G__39720__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39721__i = 0, G__39721__a = new Array(arguments.length -  0);
while (G__39721__i < G__39721__a.length) {G__39721__a[G__39721__i] = arguments[G__39721__i + 0]; ++G__39721__i;}
  args = new cljs.core.IndexedSeq(G__39721__a,0,null);
} 
return G__39720__delegate.call(this,args);};
G__39720.cljs$lang$maxFixedArity = 0;
G__39720.cljs$lang$applyTo = (function (arglist__39722){
var args = cljs.core.seq(arglist__39722);
return G__39720__delegate(args);
});
G__39720.cljs$core$IFn$_invoke$arity$variadic = G__39720__delegate;
return G__39720;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39723__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39724__i = 0, G__39724__a = new Array(arguments.length -  0);
while (G__39724__i < G__39724__a.length) {G__39724__a[G__39724__i] = arguments[G__39724__i + 0]; ++G__39724__i;}
  args = new cljs.core.IndexedSeq(G__39724__a,0,null);
} 
return G__39723__delegate.call(this,args);};
G__39723.cljs$lang$maxFixedArity = 0;
G__39723.cljs$lang$applyTo = (function (arglist__39725){
var args = cljs.core.seq(arglist__39725);
return G__39723__delegate(args);
});
G__39723.cljs$core$IFn$_invoke$arity$variadic = G__39723__delegate;
return G__39723;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39726__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39727__i = 0, G__39727__a = new Array(arguments.length -  0);
while (G__39727__i < G__39727__a.length) {G__39727__a[G__39727__i] = arguments[G__39727__i + 0]; ++G__39727__i;}
  args = new cljs.core.IndexedSeq(G__39727__a,0,null);
} 
return G__39726__delegate.call(this,args);};
G__39726.cljs$lang$maxFixedArity = 0;
G__39726.cljs$lang$applyTo = (function (arglist__39728){
var args = cljs.core.seq(arglist__39728);
return G__39726__delegate(args);
});
G__39726.cljs$core$IFn$_invoke$arity$variadic = G__39726__delegate;
return G__39726;
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

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39729__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39730__i = 0, G__39730__a = new Array(arguments.length -  0);
while (G__39730__i < G__39730__a.length) {G__39730__a[G__39730__i] = arguments[G__39730__i + 0]; ++G__39730__i;}
  args = new cljs.core.IndexedSeq(G__39730__a,0,null);
} 
return G__39729__delegate.call(this,args);};
G__39729.cljs$lang$maxFixedArity = 0;
G__39729.cljs$lang$applyTo = (function (arglist__39731){
var args = cljs.core.seq(arglist__39731);
return G__39729__delegate(args);
});
G__39729.cljs$core$IFn$_invoke$arity$variadic = G__39729__delegate;
return G__39729;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39732__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39733__i = 0, G__39733__a = new Array(arguments.length -  0);
while (G__39733__i < G__39733__a.length) {G__39733__a[G__39733__i] = arguments[G__39733__i + 0]; ++G__39733__i;}
  args = new cljs.core.IndexedSeq(G__39733__a,0,null);
} 
return G__39732__delegate.call(this,args);};
G__39732.cljs$lang$maxFixedArity = 0;
G__39732.cljs$lang$applyTo = (function (arglist__39734){
var args = cljs.core.seq(arglist__39734);
return G__39732__delegate(args);
});
G__39732.cljs$core$IFn$_invoke$arity$variadic = G__39732__delegate;
return G__39732;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39735__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39736__i = 0, G__39736__a = new Array(arguments.length -  0);
while (G__39736__i < G__39736__a.length) {G__39736__a[G__39736__i] = arguments[G__39736__i + 0]; ++G__39736__i;}
  args = new cljs.core.IndexedSeq(G__39736__a,0,null);
} 
return G__39735__delegate.call(this,args);};
G__39735.cljs$lang$maxFixedArity = 0;
G__39735.cljs$lang$applyTo = (function (arglist__39737){
var args = cljs.core.seq(arglist__39737);
return G__39735__delegate(args);
});
G__39735.cljs$core$IFn$_invoke$arity$variadic = G__39735__delegate;
return G__39735;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526326502937
