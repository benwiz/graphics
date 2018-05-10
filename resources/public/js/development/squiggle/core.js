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
var G__27785__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__27785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27786__i = 0, G__27786__a = new Array(arguments.length -  0);
while (G__27786__i < G__27786__a.length) {G__27786__a[G__27786__i] = arguments[G__27786__i + 0]; ++G__27786__i;}
  args = new cljs.core.IndexedSeq(G__27786__a,0,null);
} 
return G__27785__delegate.call(this,args);};
G__27785.cljs$lang$maxFixedArity = 0;
G__27785.cljs$lang$applyTo = (function (arglist__27787){
var args = cljs.core.seq(arglist__27787);
return G__27785__delegate(args);
});
G__27785.cljs$core$IFn$_invoke$arity$variadic = G__27785__delegate;
return G__27785;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__27788__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__27788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27789__i = 0, G__27789__a = new Array(arguments.length -  0);
while (G__27789__i < G__27789__a.length) {G__27789__a[G__27789__i] = arguments[G__27789__i + 0]; ++G__27789__i;}
  args = new cljs.core.IndexedSeq(G__27789__a,0,null);
} 
return G__27788__delegate.call(this,args);};
G__27788.cljs$lang$maxFixedArity = 0;
G__27788.cljs$lang$applyTo = (function (arglist__27790){
var args = cljs.core.seq(arglist__27790);
return G__27788__delegate(args);
});
G__27788.cljs$core$IFn$_invoke$arity$variadic = G__27788__delegate;
return G__27788;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__27791__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__27791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27792__i = 0, G__27792__a = new Array(arguments.length -  0);
while (G__27792__i < G__27792__a.length) {G__27792__a[G__27792__i] = arguments[G__27792__i + 0]; ++G__27792__i;}
  args = new cljs.core.IndexedSeq(G__27792__a,0,null);
} 
return G__27791__delegate.call(this,args);};
G__27791.cljs$lang$maxFixedArity = 0;
G__27791.cljs$lang$applyTo = (function (arglist__27793){
var args = cljs.core.seq(arglist__27793);
return G__27791__delegate(args);
});
G__27791.cljs$core$IFn$_invoke$arity$variadic = G__27791__delegate;
return G__27791;
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
var G__27794__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__27794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27795__i = 0, G__27795__a = new Array(arguments.length -  0);
while (G__27795__i < G__27795__a.length) {G__27795__a[G__27795__i] = arguments[G__27795__i + 0]; ++G__27795__i;}
  args = new cljs.core.IndexedSeq(G__27795__a,0,null);
} 
return G__27794__delegate.call(this,args);};
G__27794.cljs$lang$maxFixedArity = 0;
G__27794.cljs$lang$applyTo = (function (arglist__27796){
var args = cljs.core.seq(arglist__27796);
return G__27794__delegate(args);
});
G__27794.cljs$core$IFn$_invoke$arity$variadic = G__27794__delegate;
return G__27794;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__27797__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__27797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27798__i = 0, G__27798__a = new Array(arguments.length -  0);
while (G__27798__i < G__27798__a.length) {G__27798__a[G__27798__i] = arguments[G__27798__i + 0]; ++G__27798__i;}
  args = new cljs.core.IndexedSeq(G__27798__a,0,null);
} 
return G__27797__delegate.call(this,args);};
G__27797.cljs$lang$maxFixedArity = 0;
G__27797.cljs$lang$applyTo = (function (arglist__27799){
var args = cljs.core.seq(arglist__27799);
return G__27797__delegate(args);
});
G__27797.cljs$core$IFn$_invoke$arity$variadic = G__27797__delegate;
return G__27797;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__27800__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__27800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27801__i = 0, G__27801__a = new Array(arguments.length -  0);
while (G__27801__i < G__27801__a.length) {G__27801__a[G__27801__i] = arguments[G__27801__i + 0]; ++G__27801__i;}
  args = new cljs.core.IndexedSeq(G__27801__a,0,null);
} 
return G__27800__delegate.call(this,args);};
G__27800.cljs$lang$maxFixedArity = 0;
G__27800.cljs$lang$applyTo = (function (arglist__27802){
var args = cljs.core.seq(arglist__27802);
return G__27800__delegate(args);
});
G__27800.cljs$core$IFn$_invoke$arity$variadic = G__27800__delegate;
return G__27800;
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

//# sourceMappingURL=core.js.map?rel=1525986972999
