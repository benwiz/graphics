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
var G__28090__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28091__i = 0, G__28091__a = new Array(arguments.length -  0);
while (G__28091__i < G__28091__a.length) {G__28091__a[G__28091__i] = arguments[G__28091__i + 0]; ++G__28091__i;}
  args = new cljs.core.IndexedSeq(G__28091__a,0,null);
} 
return G__28090__delegate.call(this,args);};
G__28090.cljs$lang$maxFixedArity = 0;
G__28090.cljs$lang$applyTo = (function (arglist__28092){
var args = cljs.core.seq(arglist__28092);
return G__28090__delegate(args);
});
G__28090.cljs$core$IFn$_invoke$arity$variadic = G__28090__delegate;
return G__28090;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28094__i = 0, G__28094__a = new Array(arguments.length -  0);
while (G__28094__i < G__28094__a.length) {G__28094__a[G__28094__i] = arguments[G__28094__i + 0]; ++G__28094__i;}
  args = new cljs.core.IndexedSeq(G__28094__a,0,null);
} 
return G__28093__delegate.call(this,args);};
G__28093.cljs$lang$maxFixedArity = 0;
G__28093.cljs$lang$applyTo = (function (arglist__28095){
var args = cljs.core.seq(arglist__28095);
return G__28093__delegate(args);
});
G__28093.cljs$core$IFn$_invoke$arity$variadic = G__28093__delegate;
return G__28093;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28097__i = 0, G__28097__a = new Array(arguments.length -  0);
while (G__28097__i < G__28097__a.length) {G__28097__a[G__28097__i] = arguments[G__28097__i + 0]; ++G__28097__i;}
  args = new cljs.core.IndexedSeq(G__28097__a,0,null);
} 
return G__28096__delegate.call(this,args);};
G__28096.cljs$lang$maxFixedArity = 0;
G__28096.cljs$lang$applyTo = (function (arglist__28098){
var args = cljs.core.seq(arglist__28098);
return G__28096__delegate(args);
});
G__28096.cljs$core$IFn$_invoke$arity$variadic = G__28096__delegate;
return G__28096;
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
var G__28099__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__28099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28100__i = 0, G__28100__a = new Array(arguments.length -  0);
while (G__28100__i < G__28100__a.length) {G__28100__a[G__28100__i] = arguments[G__28100__i + 0]; ++G__28100__i;}
  args = new cljs.core.IndexedSeq(G__28100__a,0,null);
} 
return G__28099__delegate.call(this,args);};
G__28099.cljs$lang$maxFixedArity = 0;
G__28099.cljs$lang$applyTo = (function (arglist__28101){
var args = cljs.core.seq(arglist__28101);
return G__28099__delegate(args);
});
G__28099.cljs$core$IFn$_invoke$arity$variadic = G__28099__delegate;
return G__28099;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__28102__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__28102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28103__i = 0, G__28103__a = new Array(arguments.length -  0);
while (G__28103__i < G__28103__a.length) {G__28103__a[G__28103__i] = arguments[G__28103__i + 0]; ++G__28103__i;}
  args = new cljs.core.IndexedSeq(G__28103__a,0,null);
} 
return G__28102__delegate.call(this,args);};
G__28102.cljs$lang$maxFixedArity = 0;
G__28102.cljs$lang$applyTo = (function (arglist__28104){
var args = cljs.core.seq(arglist__28104);
return G__28102__delegate(args);
});
G__28102.cljs$core$IFn$_invoke$arity$variadic = G__28102__delegate;
return G__28102;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__28105__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__28105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28106__i = 0, G__28106__a = new Array(arguments.length -  0);
while (G__28106__i < G__28106__a.length) {G__28106__a[G__28106__i] = arguments[G__28106__i + 0]; ++G__28106__i;}
  args = new cljs.core.IndexedSeq(G__28106__a,0,null);
} 
return G__28105__delegate.call(this,args);};
G__28105.cljs$lang$maxFixedArity = 0;
G__28105.cljs$lang$applyTo = (function (arglist__28107){
var args = cljs.core.seq(arglist__28107);
return G__28105__delegate(args);
});
G__28105.cljs$core$IFn$_invoke$arity$variadic = G__28105__delegate;
return G__28105;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525987957835
