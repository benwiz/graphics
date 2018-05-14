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
var G__46130__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__46130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46131__i = 0, G__46131__a = new Array(arguments.length -  0);
while (G__46131__i < G__46131__a.length) {G__46131__a[G__46131__i] = arguments[G__46131__i + 0]; ++G__46131__i;}
  args = new cljs.core.IndexedSeq(G__46131__a,0,null);
} 
return G__46130__delegate.call(this,args);};
G__46130.cljs$lang$maxFixedArity = 0;
G__46130.cljs$lang$applyTo = (function (arglist__46132){
var args = cljs.core.seq(arglist__46132);
return G__46130__delegate(args);
});
G__46130.cljs$core$IFn$_invoke$arity$variadic = G__46130__delegate;
return G__46130;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__46133__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__46133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46134__i = 0, G__46134__a = new Array(arguments.length -  0);
while (G__46134__i < G__46134__a.length) {G__46134__a[G__46134__i] = arguments[G__46134__i + 0]; ++G__46134__i;}
  args = new cljs.core.IndexedSeq(G__46134__a,0,null);
} 
return G__46133__delegate.call(this,args);};
G__46133.cljs$lang$maxFixedArity = 0;
G__46133.cljs$lang$applyTo = (function (arglist__46135){
var args = cljs.core.seq(arglist__46135);
return G__46133__delegate(args);
});
G__46133.cljs$core$IFn$_invoke$arity$variadic = G__46133__delegate;
return G__46133;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__46136__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__46136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46137__i = 0, G__46137__a = new Array(arguments.length -  0);
while (G__46137__i < G__46137__a.length) {G__46137__a[G__46137__i] = arguments[G__46137__i + 0]; ++G__46137__i;}
  args = new cljs.core.IndexedSeq(G__46137__a,0,null);
} 
return G__46136__delegate.call(this,args);};
G__46136.cljs$lang$maxFixedArity = 0;
G__46136.cljs$lang$applyTo = (function (arglist__46138){
var args = cljs.core.seq(arglist__46138);
return G__46136__delegate(args);
});
G__46136.cljs$core$IFn$_invoke$arity$variadic = G__46136__delegate;
return G__46136;
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
var G__46139__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__46139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46140__i = 0, G__46140__a = new Array(arguments.length -  0);
while (G__46140__i < G__46140__a.length) {G__46140__a[G__46140__i] = arguments[G__46140__i + 0]; ++G__46140__i;}
  args = new cljs.core.IndexedSeq(G__46140__a,0,null);
} 
return G__46139__delegate.call(this,args);};
G__46139.cljs$lang$maxFixedArity = 0;
G__46139.cljs$lang$applyTo = (function (arglist__46141){
var args = cljs.core.seq(arglist__46141);
return G__46139__delegate(args);
});
G__46139.cljs$core$IFn$_invoke$arity$variadic = G__46139__delegate;
return G__46139;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__46142__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__46142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46143__i = 0, G__46143__a = new Array(arguments.length -  0);
while (G__46143__i < G__46143__a.length) {G__46143__a[G__46143__i] = arguments[G__46143__i + 0]; ++G__46143__i;}
  args = new cljs.core.IndexedSeq(G__46143__a,0,null);
} 
return G__46142__delegate.call(this,args);};
G__46142.cljs$lang$maxFixedArity = 0;
G__46142.cljs$lang$applyTo = (function (arglist__46144){
var args = cljs.core.seq(arglist__46144);
return G__46142__delegate(args);
});
G__46142.cljs$core$IFn$_invoke$arity$variadic = G__46142__delegate;
return G__46142;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__46145__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__46145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46146__i = 0, G__46146__a = new Array(arguments.length -  0);
while (G__46146__i < G__46146__a.length) {G__46146__a[G__46146__i] = arguments[G__46146__i + 0]; ++G__46146__i;}
  args = new cljs.core.IndexedSeq(G__46146__a,0,null);
} 
return G__46145__delegate.call(this,args);};
G__46145.cljs$lang$maxFixedArity = 0;
G__46145.cljs$lang$applyTo = (function (arglist__46147){
var args = cljs.core.seq(arglist__46147);
return G__46145__delegate(args);
});
G__46145.cljs$core$IFn$_invoke$arity$variadic = G__46145__delegate;
return G__46145;
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
var G__46148__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__46148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46149__i = 0, G__46149__a = new Array(arguments.length -  0);
while (G__46149__i < G__46149__a.length) {G__46149__a[G__46149__i] = arguments[G__46149__i + 0]; ++G__46149__i;}
  args = new cljs.core.IndexedSeq(G__46149__a,0,null);
} 
return G__46148__delegate.call(this,args);};
G__46148.cljs$lang$maxFixedArity = 0;
G__46148.cljs$lang$applyTo = (function (arglist__46150){
var args = cljs.core.seq(arglist__46150);
return G__46148__delegate(args);
});
G__46148.cljs$core$IFn$_invoke$arity$variadic = G__46148__delegate;
return G__46148;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__46151__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__46151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46152__i = 0, G__46152__a = new Array(arguments.length -  0);
while (G__46152__i < G__46152__a.length) {G__46152__a[G__46152__i] = arguments[G__46152__i + 0]; ++G__46152__i;}
  args = new cljs.core.IndexedSeq(G__46152__a,0,null);
} 
return G__46151__delegate.call(this,args);};
G__46151.cljs$lang$maxFixedArity = 0;
G__46151.cljs$lang$applyTo = (function (arglist__46153){
var args = cljs.core.seq(arglist__46153);
return G__46151__delegate(args);
});
G__46151.cljs$core$IFn$_invoke$arity$variadic = G__46151__delegate;
return G__46151;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__46154__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__46154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46155__i = 0, G__46155__a = new Array(arguments.length -  0);
while (G__46155__i < G__46155__a.length) {G__46155__a[G__46155__i] = arguments[G__46155__i + 0]; ++G__46155__i;}
  args = new cljs.core.IndexedSeq(G__46155__a,0,null);
} 
return G__46154__delegate.call(this,args);};
G__46154.cljs$lang$maxFixedArity = 0;
G__46154.cljs$lang$applyTo = (function (arglist__46156){
var args = cljs.core.seq(arglist__46156);
return G__46154__delegate(args);
});
G__46154.cljs$core$IFn$_invoke$arity$variadic = G__46154__delegate;
return G__46154;
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
var G__46157__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__46157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46158__i = 0, G__46158__a = new Array(arguments.length -  0);
while (G__46158__i < G__46158__a.length) {G__46158__a[G__46158__i] = arguments[G__46158__i + 0]; ++G__46158__i;}
  args = new cljs.core.IndexedSeq(G__46158__a,0,null);
} 
return G__46157__delegate.call(this,args);};
G__46157.cljs$lang$maxFixedArity = 0;
G__46157.cljs$lang$applyTo = (function (arglist__46159){
var args = cljs.core.seq(arglist__46159);
return G__46157__delegate(args);
});
G__46157.cljs$core$IFn$_invoke$arity$variadic = G__46157__delegate;
return G__46157;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__46160__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__46160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46161__i = 0, G__46161__a = new Array(arguments.length -  0);
while (G__46161__i < G__46161__a.length) {G__46161__a[G__46161__i] = arguments[G__46161__i + 0]; ++G__46161__i;}
  args = new cljs.core.IndexedSeq(G__46161__a,0,null);
} 
return G__46160__delegate.call(this,args);};
G__46160.cljs$lang$maxFixedArity = 0;
G__46160.cljs$lang$applyTo = (function (arglist__46162){
var args = cljs.core.seq(arglist__46162);
return G__46160__delegate(args);
});
G__46160.cljs$core$IFn$_invoke$arity$variadic = G__46160__delegate;
return G__46160;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__46163__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__46163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46164__i = 0, G__46164__a = new Array(arguments.length -  0);
while (G__46164__i < G__46164__a.length) {G__46164__a[G__46164__i] = arguments[G__46164__i + 0]; ++G__46164__i;}
  args = new cljs.core.IndexedSeq(G__46164__a,0,null);
} 
return G__46163__delegate.call(this,args);};
G__46163.cljs$lang$maxFixedArity = 0;
G__46163.cljs$lang$applyTo = (function (arglist__46165){
var args = cljs.core.seq(arglist__46165);
return G__46163__delegate(args);
});
G__46163.cljs$core$IFn$_invoke$arity$variadic = G__46163__delegate;
return G__46163;
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

//# sourceMappingURL=core.js.map?rel=1526258927902
