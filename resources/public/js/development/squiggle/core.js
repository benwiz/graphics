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
var G__43853__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43854__i = 0, G__43854__a = new Array(arguments.length -  0);
while (G__43854__i < G__43854__a.length) {G__43854__a[G__43854__i] = arguments[G__43854__i + 0]; ++G__43854__i;}
  args = new cljs.core.IndexedSeq(G__43854__a,0,null);
} 
return G__43853__delegate.call(this,args);};
G__43853.cljs$lang$maxFixedArity = 0;
G__43853.cljs$lang$applyTo = (function (arglist__43855){
var args = cljs.core.seq(arglist__43855);
return G__43853__delegate(args);
});
G__43853.cljs$core$IFn$_invoke$arity$variadic = G__43853__delegate;
return G__43853;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43856__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43857__i = 0, G__43857__a = new Array(arguments.length -  0);
while (G__43857__i < G__43857__a.length) {G__43857__a[G__43857__i] = arguments[G__43857__i + 0]; ++G__43857__i;}
  args = new cljs.core.IndexedSeq(G__43857__a,0,null);
} 
return G__43856__delegate.call(this,args);};
G__43856.cljs$lang$maxFixedArity = 0;
G__43856.cljs$lang$applyTo = (function (arglist__43858){
var args = cljs.core.seq(arglist__43858);
return G__43856__delegate(args);
});
G__43856.cljs$core$IFn$_invoke$arity$variadic = G__43856__delegate;
return G__43856;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43859__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43860__i = 0, G__43860__a = new Array(arguments.length -  0);
while (G__43860__i < G__43860__a.length) {G__43860__a[G__43860__i] = arguments[G__43860__i + 0]; ++G__43860__i;}
  args = new cljs.core.IndexedSeq(G__43860__a,0,null);
} 
return G__43859__delegate.call(this,args);};
G__43859.cljs$lang$maxFixedArity = 0;
G__43859.cljs$lang$applyTo = (function (arglist__43861){
var args = cljs.core.seq(arglist__43861);
return G__43859__delegate(args);
});
G__43859.cljs$core$IFn$_invoke$arity$variadic = G__43859__delegate;
return G__43859;
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
var G__43862__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43863__i = 0, G__43863__a = new Array(arguments.length -  0);
while (G__43863__i < G__43863__a.length) {G__43863__a[G__43863__i] = arguments[G__43863__i + 0]; ++G__43863__i;}
  args = new cljs.core.IndexedSeq(G__43863__a,0,null);
} 
return G__43862__delegate.call(this,args);};
G__43862.cljs$lang$maxFixedArity = 0;
G__43862.cljs$lang$applyTo = (function (arglist__43864){
var args = cljs.core.seq(arglist__43864);
return G__43862__delegate(args);
});
G__43862.cljs$core$IFn$_invoke$arity$variadic = G__43862__delegate;
return G__43862;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43865__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43866__i = 0, G__43866__a = new Array(arguments.length -  0);
while (G__43866__i < G__43866__a.length) {G__43866__a[G__43866__i] = arguments[G__43866__i + 0]; ++G__43866__i;}
  args = new cljs.core.IndexedSeq(G__43866__a,0,null);
} 
return G__43865__delegate.call(this,args);};
G__43865.cljs$lang$maxFixedArity = 0;
G__43865.cljs$lang$applyTo = (function (arglist__43867){
var args = cljs.core.seq(arglist__43867);
return G__43865__delegate(args);
});
G__43865.cljs$core$IFn$_invoke$arity$variadic = G__43865__delegate;
return G__43865;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43868__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43869__i = 0, G__43869__a = new Array(arguments.length -  0);
while (G__43869__i < G__43869__a.length) {G__43869__a[G__43869__i] = arguments[G__43869__i + 0]; ++G__43869__i;}
  args = new cljs.core.IndexedSeq(G__43869__a,0,null);
} 
return G__43868__delegate.call(this,args);};
G__43868.cljs$lang$maxFixedArity = 0;
G__43868.cljs$lang$applyTo = (function (arglist__43870){
var args = cljs.core.seq(arglist__43870);
return G__43868__delegate(args);
});
G__43868.cljs$core$IFn$_invoke$arity$variadic = G__43868__delegate;
return G__43868;
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
var G__43871__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43872__i = 0, G__43872__a = new Array(arguments.length -  0);
while (G__43872__i < G__43872__a.length) {G__43872__a[G__43872__i] = arguments[G__43872__i + 0]; ++G__43872__i;}
  args = new cljs.core.IndexedSeq(G__43872__a,0,null);
} 
return G__43871__delegate.call(this,args);};
G__43871.cljs$lang$maxFixedArity = 0;
G__43871.cljs$lang$applyTo = (function (arglist__43873){
var args = cljs.core.seq(arglist__43873);
return G__43871__delegate(args);
});
G__43871.cljs$core$IFn$_invoke$arity$variadic = G__43871__delegate;
return G__43871;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43874__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43875__i = 0, G__43875__a = new Array(arguments.length -  0);
while (G__43875__i < G__43875__a.length) {G__43875__a[G__43875__i] = arguments[G__43875__i + 0]; ++G__43875__i;}
  args = new cljs.core.IndexedSeq(G__43875__a,0,null);
} 
return G__43874__delegate.call(this,args);};
G__43874.cljs$lang$maxFixedArity = 0;
G__43874.cljs$lang$applyTo = (function (arglist__43876){
var args = cljs.core.seq(arglist__43876);
return G__43874__delegate(args);
});
G__43874.cljs$core$IFn$_invoke$arity$variadic = G__43874__delegate;
return G__43874;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43877__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43878__i = 0, G__43878__a = new Array(arguments.length -  0);
while (G__43878__i < G__43878__a.length) {G__43878__a[G__43878__i] = arguments[G__43878__i + 0]; ++G__43878__i;}
  args = new cljs.core.IndexedSeq(G__43878__a,0,null);
} 
return G__43877__delegate.call(this,args);};
G__43877.cljs$lang$maxFixedArity = 0;
G__43877.cljs$lang$applyTo = (function (arglist__43879){
var args = cljs.core.seq(arglist__43879);
return G__43877__delegate(args);
});
G__43877.cljs$core$IFn$_invoke$arity$variadic = G__43877__delegate;
return G__43877;
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
var G__43880__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43881__i = 0, G__43881__a = new Array(arguments.length -  0);
while (G__43881__i < G__43881__a.length) {G__43881__a[G__43881__i] = arguments[G__43881__i + 0]; ++G__43881__i;}
  args = new cljs.core.IndexedSeq(G__43881__a,0,null);
} 
return G__43880__delegate.call(this,args);};
G__43880.cljs$lang$maxFixedArity = 0;
G__43880.cljs$lang$applyTo = (function (arglist__43882){
var args = cljs.core.seq(arglist__43882);
return G__43880__delegate(args);
});
G__43880.cljs$core$IFn$_invoke$arity$variadic = G__43880__delegate;
return G__43880;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43883__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43884__i = 0, G__43884__a = new Array(arguments.length -  0);
while (G__43884__i < G__43884__a.length) {G__43884__a[G__43884__i] = arguments[G__43884__i + 0]; ++G__43884__i;}
  args = new cljs.core.IndexedSeq(G__43884__a,0,null);
} 
return G__43883__delegate.call(this,args);};
G__43883.cljs$lang$maxFixedArity = 0;
G__43883.cljs$lang$applyTo = (function (arglist__43885){
var args = cljs.core.seq(arglist__43885);
return G__43883__delegate(args);
});
G__43883.cljs$core$IFn$_invoke$arity$variadic = G__43883__delegate;
return G__43883;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43886__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43887__i = 0, G__43887__a = new Array(arguments.length -  0);
while (G__43887__i < G__43887__a.length) {G__43887__a[G__43887__i] = arguments[G__43887__i + 0]; ++G__43887__i;}
  args = new cljs.core.IndexedSeq(G__43887__a,0,null);
} 
return G__43886__delegate.call(this,args);};
G__43886.cljs$lang$maxFixedArity = 0;
G__43886.cljs$lang$applyTo = (function (arglist__43888){
var args = cljs.core.seq(arglist__43888);
return G__43886__delegate(args);
});
G__43886.cljs$core$IFn$_invoke$arity$variadic = G__43886__delegate;
return G__43886;
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

//# sourceMappingURL=core.js.map?rel=1526255308140
