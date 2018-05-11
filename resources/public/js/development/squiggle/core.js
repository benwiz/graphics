// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__41261__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41262__i = 0, G__41262__a = new Array(arguments.length -  0);
while (G__41262__i < G__41262__a.length) {G__41262__a[G__41262__i] = arguments[G__41262__i + 0]; ++G__41262__i;}
  args = new cljs.core.IndexedSeq(G__41262__a,0,null);
} 
return G__41261__delegate.call(this,args);};
G__41261.cljs$lang$maxFixedArity = 0;
G__41261.cljs$lang$applyTo = (function (arglist__41263){
var args = cljs.core.seq(arglist__41263);
return G__41261__delegate(args);
});
G__41261.cljs$core$IFn$_invoke$arity$variadic = G__41261__delegate;
return G__41261;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41264__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41265__i = 0, G__41265__a = new Array(arguments.length -  0);
while (G__41265__i < G__41265__a.length) {G__41265__a[G__41265__i] = arguments[G__41265__i + 0]; ++G__41265__i;}
  args = new cljs.core.IndexedSeq(G__41265__a,0,null);
} 
return G__41264__delegate.call(this,args);};
G__41264.cljs$lang$maxFixedArity = 0;
G__41264.cljs$lang$applyTo = (function (arglist__41266){
var args = cljs.core.seq(arglist__41266);
return G__41264__delegate(args);
});
G__41264.cljs$core$IFn$_invoke$arity$variadic = G__41264__delegate;
return G__41264;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41267__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41268__i = 0, G__41268__a = new Array(arguments.length -  0);
while (G__41268__i < G__41268__a.length) {G__41268__a[G__41268__i] = arguments[G__41268__i + 0]; ++G__41268__i;}
  args = new cljs.core.IndexedSeq(G__41268__a,0,null);
} 
return G__41267__delegate.call(this,args);};
G__41267.cljs$lang$maxFixedArity = 0;
G__41267.cljs$lang$applyTo = (function (arglist__41269){
var args = cljs.core.seq(arglist__41269);
return G__41267__delegate(args);
});
G__41267.cljs$core$IFn$_invoke$arity$variadic = G__41267__delegate;
return G__41267;
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
var G__41270__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41271__i = 0, G__41271__a = new Array(arguments.length -  0);
while (G__41271__i < G__41271__a.length) {G__41271__a[G__41271__i] = arguments[G__41271__i + 0]; ++G__41271__i;}
  args = new cljs.core.IndexedSeq(G__41271__a,0,null);
} 
return G__41270__delegate.call(this,args);};
G__41270.cljs$lang$maxFixedArity = 0;
G__41270.cljs$lang$applyTo = (function (arglist__41272){
var args = cljs.core.seq(arglist__41272);
return G__41270__delegate(args);
});
G__41270.cljs$core$IFn$_invoke$arity$variadic = G__41270__delegate;
return G__41270;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41273__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41274__i = 0, G__41274__a = new Array(arguments.length -  0);
while (G__41274__i < G__41274__a.length) {G__41274__a[G__41274__i] = arguments[G__41274__i + 0]; ++G__41274__i;}
  args = new cljs.core.IndexedSeq(G__41274__a,0,null);
} 
return G__41273__delegate.call(this,args);};
G__41273.cljs$lang$maxFixedArity = 0;
G__41273.cljs$lang$applyTo = (function (arglist__41275){
var args = cljs.core.seq(arglist__41275);
return G__41273__delegate(args);
});
G__41273.cljs$core$IFn$_invoke$arity$variadic = G__41273__delegate;
return G__41273;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41276__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41277__i = 0, G__41277__a = new Array(arguments.length -  0);
while (G__41277__i < G__41277__a.length) {G__41277__a[G__41277__i] = arguments[G__41277__i + 0]; ++G__41277__i;}
  args = new cljs.core.IndexedSeq(G__41277__a,0,null);
} 
return G__41276__delegate.call(this,args);};
G__41276.cljs$lang$maxFixedArity = 0;
G__41276.cljs$lang$applyTo = (function (arglist__41278){
var args = cljs.core.seq(arglist__41278);
return G__41276__delegate(args);
});
G__41276.cljs$core$IFn$_invoke$arity$variadic = G__41276__delegate;
return G__41276;
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
var G__41279__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41280__i = 0, G__41280__a = new Array(arguments.length -  0);
while (G__41280__i < G__41280__a.length) {G__41280__a[G__41280__i] = arguments[G__41280__i + 0]; ++G__41280__i;}
  args = new cljs.core.IndexedSeq(G__41280__a,0,null);
} 
return G__41279__delegate.call(this,args);};
G__41279.cljs$lang$maxFixedArity = 0;
G__41279.cljs$lang$applyTo = (function (arglist__41281){
var args = cljs.core.seq(arglist__41281);
return G__41279__delegate(args);
});
G__41279.cljs$core$IFn$_invoke$arity$variadic = G__41279__delegate;
return G__41279;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41282__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41283__i = 0, G__41283__a = new Array(arguments.length -  0);
while (G__41283__i < G__41283__a.length) {G__41283__a[G__41283__i] = arguments[G__41283__i + 0]; ++G__41283__i;}
  args = new cljs.core.IndexedSeq(G__41283__a,0,null);
} 
return G__41282__delegate.call(this,args);};
G__41282.cljs$lang$maxFixedArity = 0;
G__41282.cljs$lang$applyTo = (function (arglist__41284){
var args = cljs.core.seq(arglist__41284);
return G__41282__delegate(args);
});
G__41282.cljs$core$IFn$_invoke$arity$variadic = G__41282__delegate;
return G__41282;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41285__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41286__i = 0, G__41286__a = new Array(arguments.length -  0);
while (G__41286__i < G__41286__a.length) {G__41286__a[G__41286__i] = arguments[G__41286__i + 0]; ++G__41286__i;}
  args = new cljs.core.IndexedSeq(G__41286__a,0,null);
} 
return G__41285__delegate.call(this,args);};
G__41285.cljs$lang$maxFixedArity = 0;
G__41285.cljs$lang$applyTo = (function (arglist__41287){
var args = cljs.core.seq(arglist__41287);
return G__41285__delegate(args);
});
G__41285.cljs$core$IFn$_invoke$arity$variadic = G__41285__delegate;
return G__41285;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526073948232
