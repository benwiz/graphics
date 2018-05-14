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
var G__45382__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__45382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45383__i = 0, G__45383__a = new Array(arguments.length -  0);
while (G__45383__i < G__45383__a.length) {G__45383__a[G__45383__i] = arguments[G__45383__i + 0]; ++G__45383__i;}
  args = new cljs.core.IndexedSeq(G__45383__a,0,null);
} 
return G__45382__delegate.call(this,args);};
G__45382.cljs$lang$maxFixedArity = 0;
G__45382.cljs$lang$applyTo = (function (arglist__45384){
var args = cljs.core.seq(arglist__45384);
return G__45382__delegate(args);
});
G__45382.cljs$core$IFn$_invoke$arity$variadic = G__45382__delegate;
return G__45382;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__45385__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__45385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45386__i = 0, G__45386__a = new Array(arguments.length -  0);
while (G__45386__i < G__45386__a.length) {G__45386__a[G__45386__i] = arguments[G__45386__i + 0]; ++G__45386__i;}
  args = new cljs.core.IndexedSeq(G__45386__a,0,null);
} 
return G__45385__delegate.call(this,args);};
G__45385.cljs$lang$maxFixedArity = 0;
G__45385.cljs$lang$applyTo = (function (arglist__45387){
var args = cljs.core.seq(arglist__45387);
return G__45385__delegate(args);
});
G__45385.cljs$core$IFn$_invoke$arity$variadic = G__45385__delegate;
return G__45385;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__45388__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__45388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45389__i = 0, G__45389__a = new Array(arguments.length -  0);
while (G__45389__i < G__45389__a.length) {G__45389__a[G__45389__i] = arguments[G__45389__i + 0]; ++G__45389__i;}
  args = new cljs.core.IndexedSeq(G__45389__a,0,null);
} 
return G__45388__delegate.call(this,args);};
G__45388.cljs$lang$maxFixedArity = 0;
G__45388.cljs$lang$applyTo = (function (arglist__45390){
var args = cljs.core.seq(arglist__45390);
return G__45388__delegate(args);
});
G__45388.cljs$core$IFn$_invoke$arity$variadic = G__45388__delegate;
return G__45388;
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
var G__45391__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__45391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45392__i = 0, G__45392__a = new Array(arguments.length -  0);
while (G__45392__i < G__45392__a.length) {G__45392__a[G__45392__i] = arguments[G__45392__i + 0]; ++G__45392__i;}
  args = new cljs.core.IndexedSeq(G__45392__a,0,null);
} 
return G__45391__delegate.call(this,args);};
G__45391.cljs$lang$maxFixedArity = 0;
G__45391.cljs$lang$applyTo = (function (arglist__45393){
var args = cljs.core.seq(arglist__45393);
return G__45391__delegate(args);
});
G__45391.cljs$core$IFn$_invoke$arity$variadic = G__45391__delegate;
return G__45391;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__45394__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__45394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45395__i = 0, G__45395__a = new Array(arguments.length -  0);
while (G__45395__i < G__45395__a.length) {G__45395__a[G__45395__i] = arguments[G__45395__i + 0]; ++G__45395__i;}
  args = new cljs.core.IndexedSeq(G__45395__a,0,null);
} 
return G__45394__delegate.call(this,args);};
G__45394.cljs$lang$maxFixedArity = 0;
G__45394.cljs$lang$applyTo = (function (arglist__45396){
var args = cljs.core.seq(arglist__45396);
return G__45394__delegate(args);
});
G__45394.cljs$core$IFn$_invoke$arity$variadic = G__45394__delegate;
return G__45394;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__45397__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__45397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45398__i = 0, G__45398__a = new Array(arguments.length -  0);
while (G__45398__i < G__45398__a.length) {G__45398__a[G__45398__i] = arguments[G__45398__i + 0]; ++G__45398__i;}
  args = new cljs.core.IndexedSeq(G__45398__a,0,null);
} 
return G__45397__delegate.call(this,args);};
G__45397.cljs$lang$maxFixedArity = 0;
G__45397.cljs$lang$applyTo = (function (arglist__45399){
var args = cljs.core.seq(arglist__45399);
return G__45397__delegate(args);
});
G__45397.cljs$core$IFn$_invoke$arity$variadic = G__45397__delegate;
return G__45397;
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
var G__45400__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__45400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45401__i = 0, G__45401__a = new Array(arguments.length -  0);
while (G__45401__i < G__45401__a.length) {G__45401__a[G__45401__i] = arguments[G__45401__i + 0]; ++G__45401__i;}
  args = new cljs.core.IndexedSeq(G__45401__a,0,null);
} 
return G__45400__delegate.call(this,args);};
G__45400.cljs$lang$maxFixedArity = 0;
G__45400.cljs$lang$applyTo = (function (arglist__45402){
var args = cljs.core.seq(arglist__45402);
return G__45400__delegate(args);
});
G__45400.cljs$core$IFn$_invoke$arity$variadic = G__45400__delegate;
return G__45400;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__45403__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__45403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45404__i = 0, G__45404__a = new Array(arguments.length -  0);
while (G__45404__i < G__45404__a.length) {G__45404__a[G__45404__i] = arguments[G__45404__i + 0]; ++G__45404__i;}
  args = new cljs.core.IndexedSeq(G__45404__a,0,null);
} 
return G__45403__delegate.call(this,args);};
G__45403.cljs$lang$maxFixedArity = 0;
G__45403.cljs$lang$applyTo = (function (arglist__45405){
var args = cljs.core.seq(arglist__45405);
return G__45403__delegate(args);
});
G__45403.cljs$core$IFn$_invoke$arity$variadic = G__45403__delegate;
return G__45403;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__45406__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__45406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45407__i = 0, G__45407__a = new Array(arguments.length -  0);
while (G__45407__i < G__45407__a.length) {G__45407__a[G__45407__i] = arguments[G__45407__i + 0]; ++G__45407__i;}
  args = new cljs.core.IndexedSeq(G__45407__a,0,null);
} 
return G__45406__delegate.call(this,args);};
G__45406.cljs$lang$maxFixedArity = 0;
G__45406.cljs$lang$applyTo = (function (arglist__45408){
var args = cljs.core.seq(arglist__45408);
return G__45406__delegate(args);
});
G__45406.cljs$core$IFn$_invoke$arity$variadic = G__45406__delegate;
return G__45406;
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
var G__45409__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__45409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45410__i = 0, G__45410__a = new Array(arguments.length -  0);
while (G__45410__i < G__45410__a.length) {G__45410__a[G__45410__i] = arguments[G__45410__i + 0]; ++G__45410__i;}
  args = new cljs.core.IndexedSeq(G__45410__a,0,null);
} 
return G__45409__delegate.call(this,args);};
G__45409.cljs$lang$maxFixedArity = 0;
G__45409.cljs$lang$applyTo = (function (arglist__45411){
var args = cljs.core.seq(arglist__45411);
return G__45409__delegate(args);
});
G__45409.cljs$core$IFn$_invoke$arity$variadic = G__45409__delegate;
return G__45409;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__45412__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__45412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45413__i = 0, G__45413__a = new Array(arguments.length -  0);
while (G__45413__i < G__45413__a.length) {G__45413__a[G__45413__i] = arguments[G__45413__i + 0]; ++G__45413__i;}
  args = new cljs.core.IndexedSeq(G__45413__a,0,null);
} 
return G__45412__delegate.call(this,args);};
G__45412.cljs$lang$maxFixedArity = 0;
G__45412.cljs$lang$applyTo = (function (arglist__45414){
var args = cljs.core.seq(arglist__45414);
return G__45412__delegate(args);
});
G__45412.cljs$core$IFn$_invoke$arity$variadic = G__45412__delegate;
return G__45412;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__45415__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__45415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45416__i = 0, G__45416__a = new Array(arguments.length -  0);
while (G__45416__i < G__45416__a.length) {G__45416__a[G__45416__i] = arguments[G__45416__i + 0]; ++G__45416__i;}
  args = new cljs.core.IndexedSeq(G__45416__a,0,null);
} 
return G__45415__delegate.call(this,args);};
G__45415.cljs$lang$maxFixedArity = 0;
G__45415.cljs$lang$applyTo = (function (arglist__45417){
var args = cljs.core.seq(arglist__45417);
return G__45415__delegate(args);
});
G__45415.cljs$core$IFn$_invoke$arity$variadic = G__45415__delegate;
return G__45415;
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

//# sourceMappingURL=core.js.map?rel=1526257927180
