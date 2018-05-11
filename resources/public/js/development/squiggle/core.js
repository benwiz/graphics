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
var G__41241__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41242__i = 0, G__41242__a = new Array(arguments.length -  0);
while (G__41242__i < G__41242__a.length) {G__41242__a[G__41242__i] = arguments[G__41242__i + 0]; ++G__41242__i;}
  args = new cljs.core.IndexedSeq(G__41242__a,0,null);
} 
return G__41241__delegate.call(this,args);};
G__41241.cljs$lang$maxFixedArity = 0;
G__41241.cljs$lang$applyTo = (function (arglist__41243){
var args = cljs.core.seq(arglist__41243);
return G__41241__delegate(args);
});
G__41241.cljs$core$IFn$_invoke$arity$variadic = G__41241__delegate;
return G__41241;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41244__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41245__i = 0, G__41245__a = new Array(arguments.length -  0);
while (G__41245__i < G__41245__a.length) {G__41245__a[G__41245__i] = arguments[G__41245__i + 0]; ++G__41245__i;}
  args = new cljs.core.IndexedSeq(G__41245__a,0,null);
} 
return G__41244__delegate.call(this,args);};
G__41244.cljs$lang$maxFixedArity = 0;
G__41244.cljs$lang$applyTo = (function (arglist__41246){
var args = cljs.core.seq(arglist__41246);
return G__41244__delegate(args);
});
G__41244.cljs$core$IFn$_invoke$arity$variadic = G__41244__delegate;
return G__41244;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41247__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41248__i = 0, G__41248__a = new Array(arguments.length -  0);
while (G__41248__i < G__41248__a.length) {G__41248__a[G__41248__i] = arguments[G__41248__i + 0]; ++G__41248__i;}
  args = new cljs.core.IndexedSeq(G__41248__a,0,null);
} 
return G__41247__delegate.call(this,args);};
G__41247.cljs$lang$maxFixedArity = 0;
G__41247.cljs$lang$applyTo = (function (arglist__41249){
var args = cljs.core.seq(arglist__41249);
return G__41247__delegate(args);
});
G__41247.cljs$core$IFn$_invoke$arity$variadic = G__41247__delegate;
return G__41247;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__41250__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41251__i = 0, G__41251__a = new Array(arguments.length -  0);
while (G__41251__i < G__41251__a.length) {G__41251__a[G__41251__i] = arguments[G__41251__i + 0]; ++G__41251__i;}
  args = new cljs.core.IndexedSeq(G__41251__a,0,null);
} 
return G__41250__delegate.call(this,args);};
G__41250.cljs$lang$maxFixedArity = 0;
G__41250.cljs$lang$applyTo = (function (arglist__41252){
var args = cljs.core.seq(arglist__41252);
return G__41250__delegate(args);
});
G__41250.cljs$core$IFn$_invoke$arity$variadic = G__41250__delegate;
return G__41250;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41253__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41254__i = 0, G__41254__a = new Array(arguments.length -  0);
while (G__41254__i < G__41254__a.length) {G__41254__a[G__41254__i] = arguments[G__41254__i + 0]; ++G__41254__i;}
  args = new cljs.core.IndexedSeq(G__41254__a,0,null);
} 
return G__41253__delegate.call(this,args);};
G__41253.cljs$lang$maxFixedArity = 0;
G__41253.cljs$lang$applyTo = (function (arglist__41255){
var args = cljs.core.seq(arglist__41255);
return G__41253__delegate(args);
});
G__41253.cljs$core$IFn$_invoke$arity$variadic = G__41253__delegate;
return G__41253;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41256__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41257__i = 0, G__41257__a = new Array(arguments.length -  0);
while (G__41257__i < G__41257__a.length) {G__41257__a[G__41257__i] = arguments[G__41257__i + 0]; ++G__41257__i;}
  args = new cljs.core.IndexedSeq(G__41257__a,0,null);
} 
return G__41256__delegate.call(this,args);};
G__41256.cljs$lang$maxFixedArity = 0;
G__41256.cljs$lang$applyTo = (function (arglist__41258){
var args = cljs.core.seq(arglist__41258);
return G__41256__delegate(args);
});
G__41256.cljs$core$IFn$_invoke$arity$variadic = G__41256__delegate;
return G__41256;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__41259__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41260__i = 0, G__41260__a = new Array(arguments.length -  0);
while (G__41260__i < G__41260__a.length) {G__41260__a[G__41260__i] = arguments[G__41260__i + 0]; ++G__41260__i;}
  args = new cljs.core.IndexedSeq(G__41260__a,0,null);
} 
return G__41259__delegate.call(this,args);};
G__41259.cljs$lang$maxFixedArity = 0;
G__41259.cljs$lang$applyTo = (function (arglist__41261){
var args = cljs.core.seq(arglist__41261);
return G__41259__delegate(args);
});
G__41259.cljs$core$IFn$_invoke$arity$variadic = G__41259__delegate;
return G__41259;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41262__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41263__i = 0, G__41263__a = new Array(arguments.length -  0);
while (G__41263__i < G__41263__a.length) {G__41263__a[G__41263__i] = arguments[G__41263__i + 0]; ++G__41263__i;}
  args = new cljs.core.IndexedSeq(G__41263__a,0,null);
} 
return G__41262__delegate.call(this,args);};
G__41262.cljs$lang$maxFixedArity = 0;
G__41262.cljs$lang$applyTo = (function (arglist__41264){
var args = cljs.core.seq(arglist__41264);
return G__41262__delegate(args);
});
G__41262.cljs$core$IFn$_invoke$arity$variadic = G__41262__delegate;
return G__41262;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41265__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41266__i = 0, G__41266__a = new Array(arguments.length -  0);
while (G__41266__i < G__41266__a.length) {G__41266__a[G__41266__i] = arguments[G__41266__i + 0]; ++G__41266__i;}
  args = new cljs.core.IndexedSeq(G__41266__a,0,null);
} 
return G__41265__delegate.call(this,args);};
G__41265.cljs$lang$maxFixedArity = 0;
G__41265.cljs$lang$applyTo = (function (arglist__41267){
var args = cljs.core.seq(arglist__41267);
return G__41265__delegate(args);
});
G__41265.cljs$core$IFn$_invoke$arity$variadic = G__41265__delegate;
return G__41265;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526054659020
