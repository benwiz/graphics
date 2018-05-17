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
goog.require('squiggle.primitive');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__40758__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40759__i = 0, G__40759__a = new Array(arguments.length -  0);
while (G__40759__i < G__40759__a.length) {G__40759__a[G__40759__i] = arguments[G__40759__i + 0]; ++G__40759__i;}
  args = new cljs.core.IndexedSeq(G__40759__a,0,null);
} 
return G__40758__delegate.call(this,args);};
G__40758.cljs$lang$maxFixedArity = 0;
G__40758.cljs$lang$applyTo = (function (arglist__40760){
var args = cljs.core.seq(arglist__40760);
return G__40758__delegate(args);
});
G__40758.cljs$core$IFn$_invoke$arity$variadic = G__40758__delegate;
return G__40758;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40761__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40762__i = 0, G__40762__a = new Array(arguments.length -  0);
while (G__40762__i < G__40762__a.length) {G__40762__a[G__40762__i] = arguments[G__40762__i + 0]; ++G__40762__i;}
  args = new cljs.core.IndexedSeq(G__40762__a,0,null);
} 
return G__40761__delegate.call(this,args);};
G__40761.cljs$lang$maxFixedArity = 0;
G__40761.cljs$lang$applyTo = (function (arglist__40763){
var args = cljs.core.seq(arglist__40763);
return G__40761__delegate(args);
});
G__40761.cljs$core$IFn$_invoke$arity$variadic = G__40761__delegate;
return G__40761;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40764__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40765__i = 0, G__40765__a = new Array(arguments.length -  0);
while (G__40765__i < G__40765__a.length) {G__40765__a[G__40765__i] = arguments[G__40765__i + 0]; ++G__40765__i;}
  args = new cljs.core.IndexedSeq(G__40765__a,0,null);
} 
return G__40764__delegate.call(this,args);};
G__40764.cljs$lang$maxFixedArity = 0;
G__40764.cljs$lang$applyTo = (function (arglist__40766){
var args = cljs.core.seq(arglist__40766);
return G__40764__delegate(args);
});
G__40764.cljs$core$IFn$_invoke$arity$variadic = G__40764__delegate;
return G__40764;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__40767__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40768__i = 0, G__40768__a = new Array(arguments.length -  0);
while (G__40768__i < G__40768__a.length) {G__40768__a[G__40768__i] = arguments[G__40768__i + 0]; ++G__40768__i;}
  args = new cljs.core.IndexedSeq(G__40768__a,0,null);
} 
return G__40767__delegate.call(this,args);};
G__40767.cljs$lang$maxFixedArity = 0;
G__40767.cljs$lang$applyTo = (function (arglist__40769){
var args = cljs.core.seq(arglist__40769);
return G__40767__delegate(args);
});
G__40767.cljs$core$IFn$_invoke$arity$variadic = G__40767__delegate;
return G__40767;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40770__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40771__i = 0, G__40771__a = new Array(arguments.length -  0);
while (G__40771__i < G__40771__a.length) {G__40771__a[G__40771__i] = arguments[G__40771__i + 0]; ++G__40771__i;}
  args = new cljs.core.IndexedSeq(G__40771__a,0,null);
} 
return G__40770__delegate.call(this,args);};
G__40770.cljs$lang$maxFixedArity = 0;
G__40770.cljs$lang$applyTo = (function (arglist__40772){
var args = cljs.core.seq(arglist__40772);
return G__40770__delegate(args);
});
G__40770.cljs$core$IFn$_invoke$arity$variadic = G__40770__delegate;
return G__40770;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40773__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40774__i = 0, G__40774__a = new Array(arguments.length -  0);
while (G__40774__i < G__40774__a.length) {G__40774__a[G__40774__i] = arguments[G__40774__i + 0]; ++G__40774__i;}
  args = new cljs.core.IndexedSeq(G__40774__a,0,null);
} 
return G__40773__delegate.call(this,args);};
G__40773.cljs$lang$maxFixedArity = 0;
G__40773.cljs$lang$applyTo = (function (arglist__40775){
var args = cljs.core.seq(arglist__40775);
return G__40773__delegate(args);
});
G__40773.cljs$core$IFn$_invoke$arity$variadic = G__40773__delegate;
return G__40773;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__40776__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40777__i = 0, G__40777__a = new Array(arguments.length -  0);
while (G__40777__i < G__40777__a.length) {G__40777__a[G__40777__i] = arguments[G__40777__i + 0]; ++G__40777__i;}
  args = new cljs.core.IndexedSeq(G__40777__a,0,null);
} 
return G__40776__delegate.call(this,args);};
G__40776.cljs$lang$maxFixedArity = 0;
G__40776.cljs$lang$applyTo = (function (arglist__40778){
var args = cljs.core.seq(arglist__40778);
return G__40776__delegate(args);
});
G__40776.cljs$core$IFn$_invoke$arity$variadic = G__40776__delegate;
return G__40776;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40779__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40780__i = 0, G__40780__a = new Array(arguments.length -  0);
while (G__40780__i < G__40780__a.length) {G__40780__a[G__40780__i] = arguments[G__40780__i + 0]; ++G__40780__i;}
  args = new cljs.core.IndexedSeq(G__40780__a,0,null);
} 
return G__40779__delegate.call(this,args);};
G__40779.cljs$lang$maxFixedArity = 0;
G__40779.cljs$lang$applyTo = (function (arglist__40781){
var args = cljs.core.seq(arglist__40781);
return G__40779__delegate(args);
});
G__40779.cljs$core$IFn$_invoke$arity$variadic = G__40779__delegate;
return G__40779;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40782__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40783__i = 0, G__40783__a = new Array(arguments.length -  0);
while (G__40783__i < G__40783__a.length) {G__40783__a[G__40783__i] = arguments[G__40783__i + 0]; ++G__40783__i;}
  args = new cljs.core.IndexedSeq(G__40783__a,0,null);
} 
return G__40782__delegate.call(this,args);};
G__40782.cljs$lang$maxFixedArity = 0;
G__40782.cljs$lang$applyTo = (function (arglist__40784){
var args = cljs.core.seq(arglist__40784);
return G__40782__delegate(args);
});
G__40782.cljs$core$IFn$_invoke$arity$variadic = G__40782__delegate;
return G__40782;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__40785__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40786__i = 0, G__40786__a = new Array(arguments.length -  0);
while (G__40786__i < G__40786__a.length) {G__40786__a[G__40786__i] = arguments[G__40786__i + 0]; ++G__40786__i;}
  args = new cljs.core.IndexedSeq(G__40786__a,0,null);
} 
return G__40785__delegate.call(this,args);};
G__40785.cljs$lang$maxFixedArity = 0;
G__40785.cljs$lang$applyTo = (function (arglist__40787){
var args = cljs.core.seq(arglist__40787);
return G__40785__delegate(args);
});
G__40785.cljs$core$IFn$_invoke$arity$variadic = G__40785__delegate;
return G__40785;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40788__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40789__i = 0, G__40789__a = new Array(arguments.length -  0);
while (G__40789__i < G__40789__a.length) {G__40789__a[G__40789__i] = arguments[G__40789__i + 0]; ++G__40789__i;}
  args = new cljs.core.IndexedSeq(G__40789__a,0,null);
} 
return G__40788__delegate.call(this,args);};
G__40788.cljs$lang$maxFixedArity = 0;
G__40788.cljs$lang$applyTo = (function (arglist__40790){
var args = cljs.core.seq(arglist__40790);
return G__40788__delegate(args);
});
G__40788.cljs$core$IFn$_invoke$arity$variadic = G__40788__delegate;
return G__40788;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40791__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40792__i = 0, G__40792__a = new Array(arguments.length -  0);
while (G__40792__i < G__40792__a.length) {G__40792__a[G__40792__i] = arguments[G__40792__i + 0]; ++G__40792__i;}
  args = new cljs.core.IndexedSeq(G__40792__a,0,null);
} 
return G__40791__delegate.call(this,args);};
G__40791.cljs$lang$maxFixedArity = 0;
G__40791.cljs$lang$applyTo = (function (arglist__40793){
var args = cljs.core.seq(arglist__40793);
return G__40791__delegate(args);
});
G__40791.cljs$core$IFn$_invoke$arity$variadic = G__40791__delegate;
return G__40791;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40794__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40795__i = 0, G__40795__a = new Array(arguments.length -  0);
while (G__40795__i < G__40795__a.length) {G__40795__a[G__40795__i] = arguments[G__40795__i + 0]; ++G__40795__i;}
  args = new cljs.core.IndexedSeq(G__40795__a,0,null);
} 
return G__40794__delegate.call(this,args);};
G__40794.cljs$lang$maxFixedArity = 0;
G__40794.cljs$lang$applyTo = (function (arglist__40796){
var args = cljs.core.seq(arglist__40796);
return G__40794__delegate(args);
});
G__40794.cljs$core$IFn$_invoke$arity$variadic = G__40794__delegate;
return G__40794;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40797__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40798__i = 0, G__40798__a = new Array(arguments.length -  0);
while (G__40798__i < G__40798__a.length) {G__40798__a[G__40798__i] = arguments[G__40798__i + 0]; ++G__40798__i;}
  args = new cljs.core.IndexedSeq(G__40798__a,0,null);
} 
return G__40797__delegate.call(this,args);};
G__40797.cljs$lang$maxFixedArity = 0;
G__40797.cljs$lang$applyTo = (function (arglist__40799){
var args = cljs.core.seq(arglist__40799);
return G__40797__delegate(args);
});
G__40797.cljs$core$IFn$_invoke$arity$variadic = G__40797__delegate;
return G__40797;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40800__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40801__i = 0, G__40801__a = new Array(arguments.length -  0);
while (G__40801__i < G__40801__a.length) {G__40801__a[G__40801__i] = arguments[G__40801__i + 0]; ++G__40801__i;}
  args = new cljs.core.IndexedSeq(G__40801__a,0,null);
} 
return G__40800__delegate.call(this,args);};
G__40800.cljs$lang$maxFixedArity = 0;
G__40800.cljs$lang$applyTo = (function (arglist__40802){
var args = cljs.core.seq(arglist__40802);
return G__40800__delegate(args);
});
G__40800.cljs$core$IFn$_invoke$arity$variadic = G__40800__delegate;
return G__40800;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40803__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40804__i = 0, G__40804__a = new Array(arguments.length -  0);
while (G__40804__i < G__40804__a.length) {G__40804__a[G__40804__i] = arguments[G__40804__i + 0]; ++G__40804__i;}
  args = new cljs.core.IndexedSeq(G__40804__a,0,null);
} 
return G__40803__delegate.call(this,args);};
G__40803.cljs$lang$maxFixedArity = 0;
G__40803.cljs$lang$applyTo = (function (arglist__40805){
var args = cljs.core.seq(arglist__40805);
return G__40803__delegate(args);
});
G__40803.cljs$core$IFn$_invoke$arity$variadic = G__40803__delegate;
return G__40803;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40806__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40807__i = 0, G__40807__a = new Array(arguments.length -  0);
while (G__40807__i < G__40807__a.length) {G__40807__a[G__40807__i] = arguments[G__40807__i + 0]; ++G__40807__i;}
  args = new cljs.core.IndexedSeq(G__40807__a,0,null);
} 
return G__40806__delegate.call(this,args);};
G__40806.cljs$lang$maxFixedArity = 0;
G__40806.cljs$lang$applyTo = (function (arglist__40808){
var args = cljs.core.seq(arglist__40808);
return G__40806__delegate(args);
});
G__40806.cljs$core$IFn$_invoke$arity$variadic = G__40806__delegate;
return G__40806;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40809__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40810__i = 0, G__40810__a = new Array(arguments.length -  0);
while (G__40810__i < G__40810__a.length) {G__40810__a[G__40810__i] = arguments[G__40810__i + 0]; ++G__40810__i;}
  args = new cljs.core.IndexedSeq(G__40810__a,0,null);
} 
return G__40809__delegate.call(this,args);};
G__40809.cljs$lang$maxFixedArity = 0;
G__40809.cljs$lang$applyTo = (function (arglist__40811){
var args = cljs.core.seq(arglist__40811);
return G__40809__delegate(args);
});
G__40809.cljs$core$IFn$_invoke$arity$variadic = G__40809__delegate;
return G__40809;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40812__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40813__i = 0, G__40813__a = new Array(arguments.length -  0);
while (G__40813__i < G__40813__a.length) {G__40813__a[G__40813__i] = arguments[G__40813__i + 0]; ++G__40813__i;}
  args = new cljs.core.IndexedSeq(G__40813__a,0,null);
} 
return G__40812__delegate.call(this,args);};
G__40812.cljs$lang$maxFixedArity = 0;
G__40812.cljs$lang$applyTo = (function (arglist__40814){
var args = cljs.core.seq(arglist__40814);
return G__40812__delegate(args);
});
G__40812.cljs$core$IFn$_invoke$arity$variadic = G__40812__delegate;
return G__40812;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40815__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40816__i = 0, G__40816__a = new Array(arguments.length -  0);
while (G__40816__i < G__40816__a.length) {G__40816__a[G__40816__i] = arguments[G__40816__i + 0]; ++G__40816__i;}
  args = new cljs.core.IndexedSeq(G__40816__a,0,null);
} 
return G__40815__delegate.call(this,args);};
G__40815.cljs$lang$maxFixedArity = 0;
G__40815.cljs$lang$applyTo = (function (arglist__40817){
var args = cljs.core.seq(arglist__40817);
return G__40815__delegate(args);
});
G__40815.cljs$core$IFn$_invoke$arity$variadic = G__40815__delegate;
return G__40815;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40818__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40819__i = 0, G__40819__a = new Array(arguments.length -  0);
while (G__40819__i < G__40819__a.length) {G__40819__a[G__40819__i] = arguments[G__40819__i + 0]; ++G__40819__i;}
  args = new cljs.core.IndexedSeq(G__40819__a,0,null);
} 
return G__40818__delegate.call(this,args);};
G__40818.cljs$lang$maxFixedArity = 0;
G__40818.cljs$lang$applyTo = (function (arglist__40820){
var args = cljs.core.seq(arglist__40820);
return G__40818__delegate(args);
});
G__40818.cljs$core$IFn$_invoke$arity$variadic = G__40818__delegate;
return G__40818;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40821__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40822__i = 0, G__40822__a = new Array(arguments.length -  0);
while (G__40822__i < G__40822__a.length) {G__40822__a[G__40822__i] = arguments[G__40822__i + 0]; ++G__40822__i;}
  args = new cljs.core.IndexedSeq(G__40822__a,0,null);
} 
return G__40821__delegate.call(this,args);};
G__40821.cljs$lang$maxFixedArity = 0;
G__40821.cljs$lang$applyTo = (function (arglist__40823){
var args = cljs.core.seq(arglist__40823);
return G__40821__delegate(args);
});
G__40821.cljs$core$IFn$_invoke$arity$variadic = G__40821__delegate;
return G__40821;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40824__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40825__i = 0, G__40825__a = new Array(arguments.length -  0);
while (G__40825__i < G__40825__a.length) {G__40825__a[G__40825__i] = arguments[G__40825__i + 0]; ++G__40825__i;}
  args = new cljs.core.IndexedSeq(G__40825__a,0,null);
} 
return G__40824__delegate.call(this,args);};
G__40824.cljs$lang$maxFixedArity = 0;
G__40824.cljs$lang$applyTo = (function (arglist__40826){
var args = cljs.core.seq(arglist__40826);
return G__40824__delegate(args);
});
G__40824.cljs$core$IFn$_invoke$arity$variadic = G__40824__delegate;
return G__40824;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40827__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40828__i = 0, G__40828__a = new Array(arguments.length -  0);
while (G__40828__i < G__40828__a.length) {G__40828__a[G__40828__i] = arguments[G__40828__i + 0]; ++G__40828__i;}
  args = new cljs.core.IndexedSeq(G__40828__a,0,null);
} 
return G__40827__delegate.call(this,args);};
G__40827.cljs$lang$maxFixedArity = 0;
G__40827.cljs$lang$applyTo = (function (arglist__40829){
var args = cljs.core.seq(arglist__40829);
return G__40827__delegate(args);
});
G__40827.cljs$core$IFn$_invoke$arity$variadic = G__40827__delegate;
return G__40827;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_primitive_starry_night = (function squiggle$core$run_sketch_$_sketch_primitive_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"primitive-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.update_state))?(function() { 
var G__40830__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__40830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40831__i = 0, G__40831__a = new Array(arguments.length -  0);
while (G__40831__i < G__40831__a.length) {G__40831__a[G__40831__i] = arguments[G__40831__i + 0]; ++G__40831__i;}
  args = new cljs.core.IndexedSeq(G__40831__a,0,null);
} 
return G__40830__delegate.call(this,args);};
G__40830.cljs$lang$maxFixedArity = 0;
G__40830.cljs$lang$applyTo = (function (arglist__40832){
var args = cljs.core.seq(arglist__40832);
return G__40830__delegate(args);
});
G__40830.cljs$core$IFn$_invoke$arity$variadic = G__40830__delegate;
return G__40830;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__40833__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__40833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40834__i = 0, G__40834__a = new Array(arguments.length -  0);
while (G__40834__i < G__40834__a.length) {G__40834__a[G__40834__i] = arguments[G__40834__i + 0]; ++G__40834__i;}
  args = new cljs.core.IndexedSeq(G__40834__a,0,null);
} 
return G__40833__delegate.call(this,args);};
G__40833.cljs$lang$maxFixedArity = 0;
G__40833.cljs$lang$applyTo = (function (arglist__40835){
var args = cljs.core.seq(arglist__40835);
return G__40833__delegate(args);
});
G__40833.cljs$core$IFn$_invoke$arity$variadic = G__40833__delegate;
return G__40833;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__40836__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__40836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40837__i = 0, G__40837__a = new Array(arguments.length -  0);
while (G__40837__i < G__40837__a.length) {G__40837__a[G__40837__i] = arguments[G__40837__i + 0]; ++G__40837__i;}
  args = new cljs.core.IndexedSeq(G__40837__a,0,null);
} 
return G__40836__delegate.call(this,args);};
G__40836.cljs$lang$maxFixedArity = 0;
G__40836.cljs$lang$applyTo = (function (arglist__40838){
var args = cljs.core.seq(arglist__40838);
return G__40836__delegate(args);
});
G__40836.cljs$core$IFn$_invoke$arity$variadic = G__40836__delegate;
return G__40836;
})()
:squiggle.primitive.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_primitive_starry_night', squiggle.core.sketch_primitive_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_primitive_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"primitive-starry-night"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526517817572
