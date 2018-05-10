// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.example');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__29352__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29353__i = 0, G__29353__a = new Array(arguments.length -  0);
while (G__29353__i < G__29353__a.length) {G__29353__a[G__29353__i] = arguments[G__29353__i + 0]; ++G__29353__i;}
  args = new cljs.core.IndexedSeq(G__29353__a,0,null);
} 
return G__29352__delegate.call(this,args);};
G__29352.cljs$lang$maxFixedArity = 0;
G__29352.cljs$lang$applyTo = (function (arglist__29354){
var args = cljs.core.seq(arglist__29354);
return G__29352__delegate(args);
});
G__29352.cljs$core$IFn$_invoke$arity$variadic = G__29352__delegate;
return G__29352;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29355__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29356__i = 0, G__29356__a = new Array(arguments.length -  0);
while (G__29356__i < G__29356__a.length) {G__29356__a[G__29356__i] = arguments[G__29356__i + 0]; ++G__29356__i;}
  args = new cljs.core.IndexedSeq(G__29356__a,0,null);
} 
return G__29355__delegate.call(this,args);};
G__29355.cljs$lang$maxFixedArity = 0;
G__29355.cljs$lang$applyTo = (function (arglist__29357){
var args = cljs.core.seq(arglist__29357);
return G__29355__delegate(args);
});
G__29355.cljs$core$IFn$_invoke$arity$variadic = G__29355__delegate;
return G__29355;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29358__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29359__i = 0, G__29359__a = new Array(arguments.length -  0);
while (G__29359__i < G__29359__a.length) {G__29359__a[G__29359__i] = arguments[G__29359__i + 0]; ++G__29359__i;}
  args = new cljs.core.IndexedSeq(G__29359__a,0,null);
} 
return G__29358__delegate.call(this,args);};
G__29358.cljs$lang$maxFixedArity = 0;
G__29358.cljs$lang$applyTo = (function (arglist__29360){
var args = cljs.core.seq(arglist__29360);
return G__29358__delegate(args);
});
G__29358.cljs$core$IFn$_invoke$arity$variadic = G__29358__delegate;
return G__29358;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27184__27185__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27184__27185__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__29361__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__29361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29362__i = 0, G__29362__a = new Array(arguments.length -  0);
while (G__29362__i < G__29362__a.length) {G__29362__a[G__29362__i] = arguments[G__29362__i + 0]; ++G__29362__i;}
  args = new cljs.core.IndexedSeq(G__29362__a,0,null);
} 
return G__29361__delegate.call(this,args);};
G__29361.cljs$lang$maxFixedArity = 0;
G__29361.cljs$lang$applyTo = (function (arglist__29363){
var args = cljs.core.seq(arglist__29363);
return G__29361__delegate(args);
});
G__29361.cljs$core$IFn$_invoke$arity$variadic = G__29361__delegate;
return G__29361;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__29364__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__29364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29365__i = 0, G__29365__a = new Array(arguments.length -  0);
while (G__29365__i < G__29365__a.length) {G__29365__a[G__29365__i] = arguments[G__29365__i + 0]; ++G__29365__i;}
  args = new cljs.core.IndexedSeq(G__29365__a,0,null);
} 
return G__29364__delegate.call(this,args);};
G__29364.cljs$lang$maxFixedArity = 0;
G__29364.cljs$lang$applyTo = (function (arglist__29366){
var args = cljs.core.seq(arglist__29366);
return G__29364__delegate(args);
});
G__29364.cljs$core$IFn$_invoke$arity$variadic = G__29364__delegate;
return G__29364;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__29367__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__29367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29368__i = 0, G__29368__a = new Array(arguments.length -  0);
while (G__29368__i < G__29368__a.length) {G__29368__a[G__29368__i] = arguments[G__29368__i + 0]; ++G__29368__i;}
  args = new cljs.core.IndexedSeq(G__29368__a,0,null);
} 
return G__29367__delegate.call(this,args);};
G__29367.cljs$lang$maxFixedArity = 0;
G__29367.cljs$lang$applyTo = (function (arglist__29369){
var args = cljs.core.seq(arglist__29369);
return G__29367__delegate(args);
});
G__29367.cljs$core$IFn$_invoke$arity$variadic = G__29367__delegate;
return G__29367;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27184__27185__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27184__27185__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525968357725
