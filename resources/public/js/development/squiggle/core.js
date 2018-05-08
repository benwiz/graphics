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
var G__28012__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.update_state,args);
};
var G__28012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28013__i = 0, G__28013__a = new Array(arguments.length -  0);
while (G__28013__i < G__28013__a.length) {G__28013__a[G__28013__i] = arguments[G__28013__i + 0]; ++G__28013__i;}
  args = new cljs.core.IndexedSeq(G__28013__a,0,null);
} 
return G__28012__delegate.call(this,args);};
G__28012.cljs$lang$maxFixedArity = 0;
G__28012.cljs$lang$applyTo = (function (arglist__28014){
var args = cljs.core.seq(arglist__28014);
return G__28012__delegate(args);
});
G__28012.cljs$core$IFn$_invoke$arity$variadic = G__28012__delegate;
return G__28012;
})()
:squiggle.squiggle1.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle1.setup))?(function() { 
var G__28015__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.setup,args);
};
var G__28015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28016__i = 0, G__28016__a = new Array(arguments.length -  0);
while (G__28016__i < G__28016__a.length) {G__28016__a[G__28016__i] = arguments[G__28016__i + 0]; ++G__28016__i;}
  args = new cljs.core.IndexedSeq(G__28016__a,0,null);
} 
return G__28015__delegate.call(this,args);};
G__28015.cljs$lang$maxFixedArity = 0;
G__28015.cljs$lang$applyTo = (function (arglist__28017){
var args = cljs.core.seq(arglist__28017);
return G__28015__delegate(args);
});
G__28015.cljs$core$IFn$_invoke$arity$variadic = G__28015__delegate;
return G__28015;
})()
:squiggle.squiggle1.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle1.draw_state))?(function() { 
var G__28018__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle1.draw_state,args);
};
var G__28018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28019__i = 0, G__28019__a = new Array(arguments.length -  0);
while (G__28019__i < G__28019__a.length) {G__28019__a[G__28019__i] = arguments[G__28019__i + 0]; ++G__28019__i;}
  args = new cljs.core.IndexedSeq(G__28019__a,0,null);
} 
return G__28018__delegate.call(this,args);};
G__28018.cljs$lang$maxFixedArity = 0;
G__28018.cljs$lang$applyTo = (function (arglist__28020){
var args = cljs.core.seq(arglist__28020);
return G__28018__delegate(args);
});
G__28018.cljs$core$IFn$_invoke$arity$variadic = G__28018__delegate;
return G__28018;
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
var G__28021__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.update_state,args);
};
var G__28021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28022__i = 0, G__28022__a = new Array(arguments.length -  0);
while (G__28022__i < G__28022__a.length) {G__28022__a[G__28022__i] = arguments[G__28022__i + 0]; ++G__28022__i;}
  args = new cljs.core.IndexedSeq(G__28022__a,0,null);
} 
return G__28021__delegate.call(this,args);};
G__28021.cljs$lang$maxFixedArity = 0;
G__28021.cljs$lang$applyTo = (function (arglist__28023){
var args = cljs.core.seq(arglist__28023);
return G__28021__delegate(args);
});
G__28021.cljs$core$IFn$_invoke$arity$variadic = G__28021__delegate;
return G__28021;
})()
:squiggle.squiggle2.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.setup))?(function() { 
var G__28024__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.setup,args);
};
var G__28024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28025__i = 0, G__28025__a = new Array(arguments.length -  0);
while (G__28025__i < G__28025__a.length) {G__28025__a[G__28025__i] = arguments[G__28025__i + 0]; ++G__28025__i;}
  args = new cljs.core.IndexedSeq(G__28025__a,0,null);
} 
return G__28024__delegate.call(this,args);};
G__28024.cljs$lang$maxFixedArity = 0;
G__28024.cljs$lang$applyTo = (function (arglist__28026){
var args = cljs.core.seq(arglist__28026);
return G__28024__delegate(args);
});
G__28024.cljs$core$IFn$_invoke$arity$variadic = G__28024__delegate;
return G__28024;
})()
:squiggle.squiggle2.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.draw_state))?(function() { 
var G__28027__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.draw_state,args);
};
var G__28027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28028__i = 0, G__28028__a = new Array(arguments.length -  0);
while (G__28028__i < G__28028__a.length) {G__28028__a[G__28028__i] = arguments[G__28028__i + 0]; ++G__28028__i;}
  args = new cljs.core.IndexedSeq(G__28028__a,0,null);
} 
return G__28027__delegate.call(this,args);};
G__28027.cljs$lang$maxFixedArity = 0;
G__28027.cljs$lang$applyTo = (function (arglist__28029){
var args = cljs.core.seq(arglist__28029);
return G__28027__delegate(args);
});
G__28027.cljs$core$IFn$_invoke$arity$variadic = G__28027__delegate;
return G__28027;
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

//# sourceMappingURL=core.js.map?rel=1525816216366
