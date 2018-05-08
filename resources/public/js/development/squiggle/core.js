// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.squiggle1');
goog.require('squiggle.squiggle2');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_squiggle1 = (function squiggle$core$run_sketch_$_sketch_squiggle1(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle1",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle1.update_state))?(function() { 
var G__27990__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.update_state,args);
};
var G__27990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27991__i = 0, G__27991__a = new Array(arguments.length -  0);
while (G__27991__i < G__27991__a.length) {G__27991__a[G__27991__i] = arguments[G__27991__i + 0]; ++G__27991__i;}
  args = new cljs.core.IndexedSeq(G__27991__a,0,null);
} 
return G__27990__delegate.call(this,args);};
G__27990.cljs$lang$maxFixedArity = 0;
G__27990.cljs$lang$applyTo = (function (arglist__27992){
var args = cljs.core.seq(arglist__27992);
return G__27990__delegate(args);
});
G__27990.cljs$core$IFn$_invoke$arity$variadic = G__27990__delegate;
return G__27990;
})()
:squiggle.squiggle1.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle1.setup))?(function() { 
var G__27993__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.setup,args);
};
var G__27993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27994__i = 0, G__27994__a = new Array(arguments.length -  0);
while (G__27994__i < G__27994__a.length) {G__27994__a[G__27994__i] = arguments[G__27994__i + 0]; ++G__27994__i;}
  args = new cljs.core.IndexedSeq(G__27994__a,0,null);
} 
return G__27993__delegate.call(this,args);};
G__27993.cljs$lang$maxFixedArity = 0;
G__27993.cljs$lang$applyTo = (function (arglist__27995){
var args = cljs.core.seq(arglist__27995);
return G__27993__delegate(args);
});
G__27993.cljs$core$IFn$_invoke$arity$variadic = G__27993__delegate;
return G__27993;
})()
:squiggle.squiggle1.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle1.draw_state))?(function() { 
var G__27996__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.draw_state,args);
};
var G__27996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27997__i = 0, G__27997__a = new Array(arguments.length -  0);
while (G__27997__i < G__27997__a.length) {G__27997__a[G__27997__i] = arguments[G__27997__i + 0]; ++G__27997__i;}
  args = new cljs.core.IndexedSeq(G__27997__a,0,null);
} 
return G__27996__delegate.call(this,args);};
G__27996.cljs$lang$maxFixedArity = 0;
G__27996.cljs$lang$applyTo = (function (arglist__27998){
var args = cljs.core.seq(arglist__27998);
return G__27996__delegate(args);
});
G__27996.cljs$core$IFn$_invoke$arity$variadic = G__27996__delegate;
return G__27996;
})()
:squiggle.squiggle1.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_squiggle1', squiggle.core.sketch_squiggle1);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27183__27184__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27183__27184__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_squiggle1,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle1"], null));
}

squiggle.core.sketch_squiggle2 = (function squiggle$core$run_sketch_$_sketch_squiggle2(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle2",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.update_state))?(function() { 
var G__27999__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.update_state,args);
};
var G__27999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28000__i = 0, G__28000__a = new Array(arguments.length -  0);
while (G__28000__i < G__28000__a.length) {G__28000__a[G__28000__i] = arguments[G__28000__i + 0]; ++G__28000__i;}
  args = new cljs.core.IndexedSeq(G__28000__a,0,null);
} 
return G__27999__delegate.call(this,args);};
G__27999.cljs$lang$maxFixedArity = 0;
G__27999.cljs$lang$applyTo = (function (arglist__28001){
var args = cljs.core.seq(arglist__28001);
return G__27999__delegate(args);
});
G__27999.cljs$core$IFn$_invoke$arity$variadic = G__27999__delegate;
return G__27999;
})()
:squiggle.squiggle2.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.setup))?(function() { 
var G__28002__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.setup,args);
};
var G__28002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28003__i = 0, G__28003__a = new Array(arguments.length -  0);
while (G__28003__i < G__28003__a.length) {G__28003__a[G__28003__i] = arguments[G__28003__i + 0]; ++G__28003__i;}
  args = new cljs.core.IndexedSeq(G__28003__a,0,null);
} 
return G__28002__delegate.call(this,args);};
G__28002.cljs$lang$maxFixedArity = 0;
G__28002.cljs$lang$applyTo = (function (arglist__28004){
var args = cljs.core.seq(arglist__28004);
return G__28002__delegate(args);
});
G__28002.cljs$core$IFn$_invoke$arity$variadic = G__28002__delegate;
return G__28002;
})()
:squiggle.squiggle2.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.draw_state))?(function() { 
var G__28005__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.draw_state,args);
};
var G__28005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28006__i = 0, G__28006__a = new Array(arguments.length -  0);
while (G__28006__i < G__28006__a.length) {G__28006__a[G__28006__i] = arguments[G__28006__i + 0]; ++G__28006__i;}
  args = new cljs.core.IndexedSeq(G__28006__a,0,null);
} 
return G__28005__delegate.call(this,args);};
G__28005.cljs$lang$maxFixedArity = 0;
G__28005.cljs$lang$applyTo = (function (arglist__28007){
var args = cljs.core.seq(arglist__28007);
return G__28005__delegate(args);
});
G__28005.cljs$core$IFn$_invoke$arity$variadic = G__28005__delegate;
return G__28005;
})()
:squiggle.squiggle2.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_squiggle2', squiggle.core.sketch_squiggle2);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27183__27184__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27183__27184__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_squiggle2,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle2"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525816182518
