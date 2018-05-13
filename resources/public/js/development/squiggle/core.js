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
var G__41560__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41561__i = 0, G__41561__a = new Array(arguments.length -  0);
while (G__41561__i < G__41561__a.length) {G__41561__a[G__41561__i] = arguments[G__41561__i + 0]; ++G__41561__i;}
  args = new cljs.core.IndexedSeq(G__41561__a,0,null);
} 
return G__41560__delegate.call(this,args);};
G__41560.cljs$lang$maxFixedArity = 0;
G__41560.cljs$lang$applyTo = (function (arglist__41562){
var args = cljs.core.seq(arglist__41562);
return G__41560__delegate(args);
});
G__41560.cljs$core$IFn$_invoke$arity$variadic = G__41560__delegate;
return G__41560;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41563__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41564__i = 0, G__41564__a = new Array(arguments.length -  0);
while (G__41564__i < G__41564__a.length) {G__41564__a[G__41564__i] = arguments[G__41564__i + 0]; ++G__41564__i;}
  args = new cljs.core.IndexedSeq(G__41564__a,0,null);
} 
return G__41563__delegate.call(this,args);};
G__41563.cljs$lang$maxFixedArity = 0;
G__41563.cljs$lang$applyTo = (function (arglist__41565){
var args = cljs.core.seq(arglist__41565);
return G__41563__delegate(args);
});
G__41563.cljs$core$IFn$_invoke$arity$variadic = G__41563__delegate;
return G__41563;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41566__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41567__i = 0, G__41567__a = new Array(arguments.length -  0);
while (G__41567__i < G__41567__a.length) {G__41567__a[G__41567__i] = arguments[G__41567__i + 0]; ++G__41567__i;}
  args = new cljs.core.IndexedSeq(G__41567__a,0,null);
} 
return G__41566__delegate.call(this,args);};
G__41566.cljs$lang$maxFixedArity = 0;
G__41566.cljs$lang$applyTo = (function (arglist__41568){
var args = cljs.core.seq(arglist__41568);
return G__41566__delegate(args);
});
G__41566.cljs$core$IFn$_invoke$arity$variadic = G__41566__delegate;
return G__41566;
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
var G__41569__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41570__i = 0, G__41570__a = new Array(arguments.length -  0);
while (G__41570__i < G__41570__a.length) {G__41570__a[G__41570__i] = arguments[G__41570__i + 0]; ++G__41570__i;}
  args = new cljs.core.IndexedSeq(G__41570__a,0,null);
} 
return G__41569__delegate.call(this,args);};
G__41569.cljs$lang$maxFixedArity = 0;
G__41569.cljs$lang$applyTo = (function (arglist__41571){
var args = cljs.core.seq(arglist__41571);
return G__41569__delegate(args);
});
G__41569.cljs$core$IFn$_invoke$arity$variadic = G__41569__delegate;
return G__41569;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41572__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41573__i = 0, G__41573__a = new Array(arguments.length -  0);
while (G__41573__i < G__41573__a.length) {G__41573__a[G__41573__i] = arguments[G__41573__i + 0]; ++G__41573__i;}
  args = new cljs.core.IndexedSeq(G__41573__a,0,null);
} 
return G__41572__delegate.call(this,args);};
G__41572.cljs$lang$maxFixedArity = 0;
G__41572.cljs$lang$applyTo = (function (arglist__41574){
var args = cljs.core.seq(arglist__41574);
return G__41572__delegate(args);
});
G__41572.cljs$core$IFn$_invoke$arity$variadic = G__41572__delegate;
return G__41572;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41575__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41576__i = 0, G__41576__a = new Array(arguments.length -  0);
while (G__41576__i < G__41576__a.length) {G__41576__a[G__41576__i] = arguments[G__41576__i + 0]; ++G__41576__i;}
  args = new cljs.core.IndexedSeq(G__41576__a,0,null);
} 
return G__41575__delegate.call(this,args);};
G__41575.cljs$lang$maxFixedArity = 0;
G__41575.cljs$lang$applyTo = (function (arglist__41577){
var args = cljs.core.seq(arglist__41577);
return G__41575__delegate(args);
});
G__41575.cljs$core$IFn$_invoke$arity$variadic = G__41575__delegate;
return G__41575;
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
var G__41578__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41579__i = 0, G__41579__a = new Array(arguments.length -  0);
while (G__41579__i < G__41579__a.length) {G__41579__a[G__41579__i] = arguments[G__41579__i + 0]; ++G__41579__i;}
  args = new cljs.core.IndexedSeq(G__41579__a,0,null);
} 
return G__41578__delegate.call(this,args);};
G__41578.cljs$lang$maxFixedArity = 0;
G__41578.cljs$lang$applyTo = (function (arglist__41580){
var args = cljs.core.seq(arglist__41580);
return G__41578__delegate(args);
});
G__41578.cljs$core$IFn$_invoke$arity$variadic = G__41578__delegate;
return G__41578;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41581__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41582__i = 0, G__41582__a = new Array(arguments.length -  0);
while (G__41582__i < G__41582__a.length) {G__41582__a[G__41582__i] = arguments[G__41582__i + 0]; ++G__41582__i;}
  args = new cljs.core.IndexedSeq(G__41582__a,0,null);
} 
return G__41581__delegate.call(this,args);};
G__41581.cljs$lang$maxFixedArity = 0;
G__41581.cljs$lang$applyTo = (function (arglist__41583){
var args = cljs.core.seq(arglist__41583);
return G__41581__delegate(args);
});
G__41581.cljs$core$IFn$_invoke$arity$variadic = G__41581__delegate;
return G__41581;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41584__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41585__i = 0, G__41585__a = new Array(arguments.length -  0);
while (G__41585__i < G__41585__a.length) {G__41585__a[G__41585__i] = arguments[G__41585__i + 0]; ++G__41585__i;}
  args = new cljs.core.IndexedSeq(G__41585__a,0,null);
} 
return G__41584__delegate.call(this,args);};
G__41584.cljs$lang$maxFixedArity = 0;
G__41584.cljs$lang$applyTo = (function (arglist__41586){
var args = cljs.core.seq(arglist__41586);
return G__41584__delegate(args);
});
G__41584.cljs$core$IFn$_invoke$arity$variadic = G__41584__delegate;
return G__41584;
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
var G__41587__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41588__i = 0, G__41588__a = new Array(arguments.length -  0);
while (G__41588__i < G__41588__a.length) {G__41588__a[G__41588__i] = arguments[G__41588__i + 0]; ++G__41588__i;}
  args = new cljs.core.IndexedSeq(G__41588__a,0,null);
} 
return G__41587__delegate.call(this,args);};
G__41587.cljs$lang$maxFixedArity = 0;
G__41587.cljs$lang$applyTo = (function (arglist__41589){
var args = cljs.core.seq(arglist__41589);
return G__41587__delegate(args);
});
G__41587.cljs$core$IFn$_invoke$arity$variadic = G__41587__delegate;
return G__41587;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41590__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41591__i = 0, G__41591__a = new Array(arguments.length -  0);
while (G__41591__i < G__41591__a.length) {G__41591__a[G__41591__i] = arguments[G__41591__i + 0]; ++G__41591__i;}
  args = new cljs.core.IndexedSeq(G__41591__a,0,null);
} 
return G__41590__delegate.call(this,args);};
G__41590.cljs$lang$maxFixedArity = 0;
G__41590.cljs$lang$applyTo = (function (arglist__41592){
var args = cljs.core.seq(arglist__41592);
return G__41590__delegate(args);
});
G__41590.cljs$core$IFn$_invoke$arity$variadic = G__41590__delegate;
return G__41590;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41593__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41594__i = 0, G__41594__a = new Array(arguments.length -  0);
while (G__41594__i < G__41594__a.length) {G__41594__a[G__41594__i] = arguments[G__41594__i + 0]; ++G__41594__i;}
  args = new cljs.core.IndexedSeq(G__41594__a,0,null);
} 
return G__41593__delegate.call(this,args);};
G__41593.cljs$lang$maxFixedArity = 0;
G__41593.cljs$lang$applyTo = (function (arglist__41595){
var args = cljs.core.seq(arglist__41595);
return G__41593__delegate(args);
});
G__41593.cljs$core$IFn$_invoke$arity$variadic = G__41593__delegate;
return G__41593;
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

//# sourceMappingURL=core.js.map?rel=1526252898883
