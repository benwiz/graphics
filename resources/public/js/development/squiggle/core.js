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
var G__40945__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40946__i = 0, G__40946__a = new Array(arguments.length -  0);
while (G__40946__i < G__40946__a.length) {G__40946__a[G__40946__i] = arguments[G__40946__i + 0]; ++G__40946__i;}
  args = new cljs.core.IndexedSeq(G__40946__a,0,null);
} 
return G__40945__delegate.call(this,args);};
G__40945.cljs$lang$maxFixedArity = 0;
G__40945.cljs$lang$applyTo = (function (arglist__40947){
var args = cljs.core.seq(arglist__40947);
return G__40945__delegate(args);
});
G__40945.cljs$core$IFn$_invoke$arity$variadic = G__40945__delegate;
return G__40945;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40948__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40949__i = 0, G__40949__a = new Array(arguments.length -  0);
while (G__40949__i < G__40949__a.length) {G__40949__a[G__40949__i] = arguments[G__40949__i + 0]; ++G__40949__i;}
  args = new cljs.core.IndexedSeq(G__40949__a,0,null);
} 
return G__40948__delegate.call(this,args);};
G__40948.cljs$lang$maxFixedArity = 0;
G__40948.cljs$lang$applyTo = (function (arglist__40950){
var args = cljs.core.seq(arglist__40950);
return G__40948__delegate(args);
});
G__40948.cljs$core$IFn$_invoke$arity$variadic = G__40948__delegate;
return G__40948;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40951__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40952__i = 0, G__40952__a = new Array(arguments.length -  0);
while (G__40952__i < G__40952__a.length) {G__40952__a[G__40952__i] = arguments[G__40952__i + 0]; ++G__40952__i;}
  args = new cljs.core.IndexedSeq(G__40952__a,0,null);
} 
return G__40951__delegate.call(this,args);};
G__40951.cljs$lang$maxFixedArity = 0;
G__40951.cljs$lang$applyTo = (function (arglist__40953){
var args = cljs.core.seq(arglist__40953);
return G__40951__delegate(args);
});
G__40951.cljs$core$IFn$_invoke$arity$variadic = G__40951__delegate;
return G__40951;
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
var G__40954__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40955__i = 0, G__40955__a = new Array(arguments.length -  0);
while (G__40955__i < G__40955__a.length) {G__40955__a[G__40955__i] = arguments[G__40955__i + 0]; ++G__40955__i;}
  args = new cljs.core.IndexedSeq(G__40955__a,0,null);
} 
return G__40954__delegate.call(this,args);};
G__40954.cljs$lang$maxFixedArity = 0;
G__40954.cljs$lang$applyTo = (function (arglist__40956){
var args = cljs.core.seq(arglist__40956);
return G__40954__delegate(args);
});
G__40954.cljs$core$IFn$_invoke$arity$variadic = G__40954__delegate;
return G__40954;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40957__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40958__i = 0, G__40958__a = new Array(arguments.length -  0);
while (G__40958__i < G__40958__a.length) {G__40958__a[G__40958__i] = arguments[G__40958__i + 0]; ++G__40958__i;}
  args = new cljs.core.IndexedSeq(G__40958__a,0,null);
} 
return G__40957__delegate.call(this,args);};
G__40957.cljs$lang$maxFixedArity = 0;
G__40957.cljs$lang$applyTo = (function (arglist__40959){
var args = cljs.core.seq(arglist__40959);
return G__40957__delegate(args);
});
G__40957.cljs$core$IFn$_invoke$arity$variadic = G__40957__delegate;
return G__40957;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40960__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40961__i = 0, G__40961__a = new Array(arguments.length -  0);
while (G__40961__i < G__40961__a.length) {G__40961__a[G__40961__i] = arguments[G__40961__i + 0]; ++G__40961__i;}
  args = new cljs.core.IndexedSeq(G__40961__a,0,null);
} 
return G__40960__delegate.call(this,args);};
G__40960.cljs$lang$maxFixedArity = 0;
G__40960.cljs$lang$applyTo = (function (arglist__40962){
var args = cljs.core.seq(arglist__40962);
return G__40960__delegate(args);
});
G__40960.cljs$core$IFn$_invoke$arity$variadic = G__40960__delegate;
return G__40960;
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
var G__40963__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40964__i = 0, G__40964__a = new Array(arguments.length -  0);
while (G__40964__i < G__40964__a.length) {G__40964__a[G__40964__i] = arguments[G__40964__i + 0]; ++G__40964__i;}
  args = new cljs.core.IndexedSeq(G__40964__a,0,null);
} 
return G__40963__delegate.call(this,args);};
G__40963.cljs$lang$maxFixedArity = 0;
G__40963.cljs$lang$applyTo = (function (arglist__40965){
var args = cljs.core.seq(arglist__40965);
return G__40963__delegate(args);
});
G__40963.cljs$core$IFn$_invoke$arity$variadic = G__40963__delegate;
return G__40963;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40966__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40967__i = 0, G__40967__a = new Array(arguments.length -  0);
while (G__40967__i < G__40967__a.length) {G__40967__a[G__40967__i] = arguments[G__40967__i + 0]; ++G__40967__i;}
  args = new cljs.core.IndexedSeq(G__40967__a,0,null);
} 
return G__40966__delegate.call(this,args);};
G__40966.cljs$lang$maxFixedArity = 0;
G__40966.cljs$lang$applyTo = (function (arglist__40968){
var args = cljs.core.seq(arglist__40968);
return G__40966__delegate(args);
});
G__40966.cljs$core$IFn$_invoke$arity$variadic = G__40966__delegate;
return G__40966;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40969__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40970__i = 0, G__40970__a = new Array(arguments.length -  0);
while (G__40970__i < G__40970__a.length) {G__40970__a[G__40970__i] = arguments[G__40970__i + 0]; ++G__40970__i;}
  args = new cljs.core.IndexedSeq(G__40970__a,0,null);
} 
return G__40969__delegate.call(this,args);};
G__40969.cljs$lang$maxFixedArity = 0;
G__40969.cljs$lang$applyTo = (function (arglist__40971){
var args = cljs.core.seq(arglist__40971);
return G__40969__delegate(args);
});
G__40969.cljs$core$IFn$_invoke$arity$variadic = G__40969__delegate;
return G__40969;
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

//# sourceMappingURL=core.js.map?rel=1526073493905
