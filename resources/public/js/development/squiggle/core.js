// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.squiggle2');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__27610__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__27610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27611__i = 0, G__27611__a = new Array(arguments.length -  0);
while (G__27611__i < G__27611__a.length) {G__27611__a[G__27611__i] = arguments[G__27611__i + 0]; ++G__27611__i;}
  args = new cljs.core.IndexedSeq(G__27611__a,0,null);
} 
return G__27610__delegate.call(this,args);};
G__27610.cljs$lang$maxFixedArity = 0;
G__27610.cljs$lang$applyTo = (function (arglist__27612){
var args = cljs.core.seq(arglist__27612);
return G__27610__delegate(args);
});
G__27610.cljs$core$IFn$_invoke$arity$variadic = G__27610__delegate;
return G__27610;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__27613__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__27613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27614__i = 0, G__27614__a = new Array(arguments.length -  0);
while (G__27614__i < G__27614__a.length) {G__27614__a[G__27614__i] = arguments[G__27614__i + 0]; ++G__27614__i;}
  args = new cljs.core.IndexedSeq(G__27614__a,0,null);
} 
return G__27613__delegate.call(this,args);};
G__27613.cljs$lang$maxFixedArity = 0;
G__27613.cljs$lang$applyTo = (function (arglist__27615){
var args = cljs.core.seq(arglist__27615);
return G__27613__delegate(args);
});
G__27613.cljs$core$IFn$_invoke$arity$variadic = G__27613__delegate;
return G__27613;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__27616__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__27616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27617__i = 0, G__27617__a = new Array(arguments.length -  0);
while (G__27617__i < G__27617__a.length) {G__27617__a[G__27617__i] = arguments[G__27617__i + 0]; ++G__27617__i;}
  args = new cljs.core.IndexedSeq(G__27617__a,0,null);
} 
return G__27616__delegate.call(this,args);};
G__27616.cljs$lang$maxFixedArity = 0;
G__27616.cljs$lang$applyTo = (function (arglist__27618){
var args = cljs.core.seq(arglist__27618);
return G__27616__delegate(args);
});
G__27616.cljs$core$IFn$_invoke$arity$variadic = G__27616__delegate;
return G__27616;
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

squiggle.core.sketch_squiggle2 = (function squiggle$core$run_sketch_$_sketch_squiggle2(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle2",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.update_state))?(function() { 
var G__27619__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.update_state,args);
};
var G__27619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27620__i = 0, G__27620__a = new Array(arguments.length -  0);
while (G__27620__i < G__27620__a.length) {G__27620__a[G__27620__i] = arguments[G__27620__i + 0]; ++G__27620__i;}
  args = new cljs.core.IndexedSeq(G__27620__a,0,null);
} 
return G__27619__delegate.call(this,args);};
G__27619.cljs$lang$maxFixedArity = 0;
G__27619.cljs$lang$applyTo = (function (arglist__27621){
var args = cljs.core.seq(arglist__27621);
return G__27619__delegate(args);
});
G__27619.cljs$core$IFn$_invoke$arity$variadic = G__27619__delegate;
return G__27619;
})()
:squiggle.squiggle2.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.setup))?(function() { 
var G__27622__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.setup,args);
};
var G__27622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27623__i = 0, G__27623__a = new Array(arguments.length -  0);
while (G__27623__i < G__27623__a.length) {G__27623__a[G__27623__i] = arguments[G__27623__i + 0]; ++G__27623__i;}
  args = new cljs.core.IndexedSeq(G__27623__a,0,null);
} 
return G__27622__delegate.call(this,args);};
G__27622.cljs$lang$maxFixedArity = 0;
G__27622.cljs$lang$applyTo = (function (arglist__27624){
var args = cljs.core.seq(arglist__27624);
return G__27622__delegate(args);
});
G__27622.cljs$core$IFn$_invoke$arity$variadic = G__27622__delegate;
return G__27622;
})()
:squiggle.squiggle2.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.squiggle2.draw_state))?(function() { 
var G__27625__delegate = function (args){
return cljs.core.apply.call(null,squiggle.squiggle2.draw_state,args);
};
var G__27625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27626__i = 0, G__27626__a = new Array(arguments.length -  0);
while (G__27626__i < G__27626__a.length) {G__27626__a[G__27626__i] = arguments[G__27626__i + 0]; ++G__27626__i;}
  args = new cljs.core.IndexedSeq(G__27626__a,0,null);
} 
return G__27625__delegate.call(this,args);};
G__27625.cljs$lang$maxFixedArity = 0;
G__27625.cljs$lang$applyTo = (function (arglist__27627){
var args = cljs.core.seq(arglist__27627);
return G__27625__delegate(args);
});
G__27625.cljs$core$IFn$_invoke$arity$variadic = G__27625__delegate;
return G__27625;
})()
:squiggle.squiggle2.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_squiggle2', squiggle.core.sketch_squiggle2);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_squiggle2,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle2"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525921553040
