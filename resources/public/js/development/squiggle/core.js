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
var G__44781__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__44781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44782__i = 0, G__44782__a = new Array(arguments.length -  0);
while (G__44782__i < G__44782__a.length) {G__44782__a[G__44782__i] = arguments[G__44782__i + 0]; ++G__44782__i;}
  args = new cljs.core.IndexedSeq(G__44782__a,0,null);
} 
return G__44781__delegate.call(this,args);};
G__44781.cljs$lang$maxFixedArity = 0;
G__44781.cljs$lang$applyTo = (function (arglist__44783){
var args = cljs.core.seq(arglist__44783);
return G__44781__delegate(args);
});
G__44781.cljs$core$IFn$_invoke$arity$variadic = G__44781__delegate;
return G__44781;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__44784__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__44784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44785__i = 0, G__44785__a = new Array(arguments.length -  0);
while (G__44785__i < G__44785__a.length) {G__44785__a[G__44785__i] = arguments[G__44785__i + 0]; ++G__44785__i;}
  args = new cljs.core.IndexedSeq(G__44785__a,0,null);
} 
return G__44784__delegate.call(this,args);};
G__44784.cljs$lang$maxFixedArity = 0;
G__44784.cljs$lang$applyTo = (function (arglist__44786){
var args = cljs.core.seq(arglist__44786);
return G__44784__delegate(args);
});
G__44784.cljs$core$IFn$_invoke$arity$variadic = G__44784__delegate;
return G__44784;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__44787__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__44787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44788__i = 0, G__44788__a = new Array(arguments.length -  0);
while (G__44788__i < G__44788__a.length) {G__44788__a[G__44788__i] = arguments[G__44788__i + 0]; ++G__44788__i;}
  args = new cljs.core.IndexedSeq(G__44788__a,0,null);
} 
return G__44787__delegate.call(this,args);};
G__44787.cljs$lang$maxFixedArity = 0;
G__44787.cljs$lang$applyTo = (function (arglist__44789){
var args = cljs.core.seq(arglist__44789);
return G__44787__delegate(args);
});
G__44787.cljs$core$IFn$_invoke$arity$variadic = G__44787__delegate;
return G__44787;
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
var G__44790__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__44790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44791__i = 0, G__44791__a = new Array(arguments.length -  0);
while (G__44791__i < G__44791__a.length) {G__44791__a[G__44791__i] = arguments[G__44791__i + 0]; ++G__44791__i;}
  args = new cljs.core.IndexedSeq(G__44791__a,0,null);
} 
return G__44790__delegate.call(this,args);};
G__44790.cljs$lang$maxFixedArity = 0;
G__44790.cljs$lang$applyTo = (function (arglist__44792){
var args = cljs.core.seq(arglist__44792);
return G__44790__delegate(args);
});
G__44790.cljs$core$IFn$_invoke$arity$variadic = G__44790__delegate;
return G__44790;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__44793__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__44793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44794__i = 0, G__44794__a = new Array(arguments.length -  0);
while (G__44794__i < G__44794__a.length) {G__44794__a[G__44794__i] = arguments[G__44794__i + 0]; ++G__44794__i;}
  args = new cljs.core.IndexedSeq(G__44794__a,0,null);
} 
return G__44793__delegate.call(this,args);};
G__44793.cljs$lang$maxFixedArity = 0;
G__44793.cljs$lang$applyTo = (function (arglist__44795){
var args = cljs.core.seq(arglist__44795);
return G__44793__delegate(args);
});
G__44793.cljs$core$IFn$_invoke$arity$variadic = G__44793__delegate;
return G__44793;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__44796__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__44796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44797__i = 0, G__44797__a = new Array(arguments.length -  0);
while (G__44797__i < G__44797__a.length) {G__44797__a[G__44797__i] = arguments[G__44797__i + 0]; ++G__44797__i;}
  args = new cljs.core.IndexedSeq(G__44797__a,0,null);
} 
return G__44796__delegate.call(this,args);};
G__44796.cljs$lang$maxFixedArity = 0;
G__44796.cljs$lang$applyTo = (function (arglist__44798){
var args = cljs.core.seq(arglist__44798);
return G__44796__delegate(args);
});
G__44796.cljs$core$IFn$_invoke$arity$variadic = G__44796__delegate;
return G__44796;
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
var G__44799__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__44799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44800__i = 0, G__44800__a = new Array(arguments.length -  0);
while (G__44800__i < G__44800__a.length) {G__44800__a[G__44800__i] = arguments[G__44800__i + 0]; ++G__44800__i;}
  args = new cljs.core.IndexedSeq(G__44800__a,0,null);
} 
return G__44799__delegate.call(this,args);};
G__44799.cljs$lang$maxFixedArity = 0;
G__44799.cljs$lang$applyTo = (function (arglist__44801){
var args = cljs.core.seq(arglist__44801);
return G__44799__delegate(args);
});
G__44799.cljs$core$IFn$_invoke$arity$variadic = G__44799__delegate;
return G__44799;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__44802__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__44802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44803__i = 0, G__44803__a = new Array(arguments.length -  0);
while (G__44803__i < G__44803__a.length) {G__44803__a[G__44803__i] = arguments[G__44803__i + 0]; ++G__44803__i;}
  args = new cljs.core.IndexedSeq(G__44803__a,0,null);
} 
return G__44802__delegate.call(this,args);};
G__44802.cljs$lang$maxFixedArity = 0;
G__44802.cljs$lang$applyTo = (function (arglist__44804){
var args = cljs.core.seq(arglist__44804);
return G__44802__delegate(args);
});
G__44802.cljs$core$IFn$_invoke$arity$variadic = G__44802__delegate;
return G__44802;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__44805__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__44805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44806__i = 0, G__44806__a = new Array(arguments.length -  0);
while (G__44806__i < G__44806__a.length) {G__44806__a[G__44806__i] = arguments[G__44806__i + 0]; ++G__44806__i;}
  args = new cljs.core.IndexedSeq(G__44806__a,0,null);
} 
return G__44805__delegate.call(this,args);};
G__44805.cljs$lang$maxFixedArity = 0;
G__44805.cljs$lang$applyTo = (function (arglist__44807){
var args = cljs.core.seq(arglist__44807);
return G__44805__delegate(args);
});
G__44805.cljs$core$IFn$_invoke$arity$variadic = G__44805__delegate;
return G__44805;
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
var G__44808__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__44808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44809__i = 0, G__44809__a = new Array(arguments.length -  0);
while (G__44809__i < G__44809__a.length) {G__44809__a[G__44809__i] = arguments[G__44809__i + 0]; ++G__44809__i;}
  args = new cljs.core.IndexedSeq(G__44809__a,0,null);
} 
return G__44808__delegate.call(this,args);};
G__44808.cljs$lang$maxFixedArity = 0;
G__44808.cljs$lang$applyTo = (function (arglist__44810){
var args = cljs.core.seq(arglist__44810);
return G__44808__delegate(args);
});
G__44808.cljs$core$IFn$_invoke$arity$variadic = G__44808__delegate;
return G__44808;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__44811__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__44811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44812__i = 0, G__44812__a = new Array(arguments.length -  0);
while (G__44812__i < G__44812__a.length) {G__44812__a[G__44812__i] = arguments[G__44812__i + 0]; ++G__44812__i;}
  args = new cljs.core.IndexedSeq(G__44812__a,0,null);
} 
return G__44811__delegate.call(this,args);};
G__44811.cljs$lang$maxFixedArity = 0;
G__44811.cljs$lang$applyTo = (function (arglist__44813){
var args = cljs.core.seq(arglist__44813);
return G__44811__delegate(args);
});
G__44811.cljs$core$IFn$_invoke$arity$variadic = G__44811__delegate;
return G__44811;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__44814__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__44814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44815__i = 0, G__44815__a = new Array(arguments.length -  0);
while (G__44815__i < G__44815__a.length) {G__44815__a[G__44815__i] = arguments[G__44815__i + 0]; ++G__44815__i;}
  args = new cljs.core.IndexedSeq(G__44815__a,0,null);
} 
return G__44814__delegate.call(this,args);};
G__44814.cljs$lang$maxFixedArity = 0;
G__44814.cljs$lang$applyTo = (function (arglist__44816){
var args = cljs.core.seq(arglist__44816);
return G__44814__delegate(args);
});
G__44814.cljs$core$IFn$_invoke$arity$variadic = G__44814__delegate;
return G__44814;
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

//# sourceMappingURL=core.js.map?rel=1526257414600
