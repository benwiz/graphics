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
var G__29314__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29315__i = 0, G__29315__a = new Array(arguments.length -  0);
while (G__29315__i < G__29315__a.length) {G__29315__a[G__29315__i] = arguments[G__29315__i + 0]; ++G__29315__i;}
  args = new cljs.core.IndexedSeq(G__29315__a,0,null);
} 
return G__29314__delegate.call(this,args);};
G__29314.cljs$lang$maxFixedArity = 0;
G__29314.cljs$lang$applyTo = (function (arglist__29316){
var args = cljs.core.seq(arglist__29316);
return G__29314__delegate(args);
});
G__29314.cljs$core$IFn$_invoke$arity$variadic = G__29314__delegate;
return G__29314;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29317__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29318__i = 0, G__29318__a = new Array(arguments.length -  0);
while (G__29318__i < G__29318__a.length) {G__29318__a[G__29318__i] = arguments[G__29318__i + 0]; ++G__29318__i;}
  args = new cljs.core.IndexedSeq(G__29318__a,0,null);
} 
return G__29317__delegate.call(this,args);};
G__29317.cljs$lang$maxFixedArity = 0;
G__29317.cljs$lang$applyTo = (function (arglist__29319){
var args = cljs.core.seq(arglist__29319);
return G__29317__delegate(args);
});
G__29317.cljs$core$IFn$_invoke$arity$variadic = G__29317__delegate;
return G__29317;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29320__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29321__i = 0, G__29321__a = new Array(arguments.length -  0);
while (G__29321__i < G__29321__a.length) {G__29321__a[G__29321__i] = arguments[G__29321__i + 0]; ++G__29321__i;}
  args = new cljs.core.IndexedSeq(G__29321__a,0,null);
} 
return G__29320__delegate.call(this,args);};
G__29320.cljs$lang$maxFixedArity = 0;
G__29320.cljs$lang$applyTo = (function (arglist__29322){
var args = cljs.core.seq(arglist__29322);
return G__29320__delegate(args);
});
G__29320.cljs$core$IFn$_invoke$arity$variadic = G__29320__delegate;
return G__29320;
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
var G__29323__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__29323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29324__i = 0, G__29324__a = new Array(arguments.length -  0);
while (G__29324__i < G__29324__a.length) {G__29324__a[G__29324__i] = arguments[G__29324__i + 0]; ++G__29324__i;}
  args = new cljs.core.IndexedSeq(G__29324__a,0,null);
} 
return G__29323__delegate.call(this,args);};
G__29323.cljs$lang$maxFixedArity = 0;
G__29323.cljs$lang$applyTo = (function (arglist__29325){
var args = cljs.core.seq(arglist__29325);
return G__29323__delegate(args);
});
G__29323.cljs$core$IFn$_invoke$arity$variadic = G__29323__delegate;
return G__29323;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__29326__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__29326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29327__i = 0, G__29327__a = new Array(arguments.length -  0);
while (G__29327__i < G__29327__a.length) {G__29327__a[G__29327__i] = arguments[G__29327__i + 0]; ++G__29327__i;}
  args = new cljs.core.IndexedSeq(G__29327__a,0,null);
} 
return G__29326__delegate.call(this,args);};
G__29326.cljs$lang$maxFixedArity = 0;
G__29326.cljs$lang$applyTo = (function (arglist__29328){
var args = cljs.core.seq(arglist__29328);
return G__29326__delegate(args);
});
G__29326.cljs$core$IFn$_invoke$arity$variadic = G__29326__delegate;
return G__29326;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__29329__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__29329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29330__i = 0, G__29330__a = new Array(arguments.length -  0);
while (G__29330__i < G__29330__a.length) {G__29330__a[G__29330__i] = arguments[G__29330__i + 0]; ++G__29330__i;}
  args = new cljs.core.IndexedSeq(G__29330__a,0,null);
} 
return G__29329__delegate.call(this,args);};
G__29329.cljs$lang$maxFixedArity = 0;
G__29329.cljs$lang$applyTo = (function (arglist__29331){
var args = cljs.core.seq(arglist__29331);
return G__29329__delegate(args);
});
G__29329.cljs$core$IFn$_invoke$arity$variadic = G__29329__delegate;
return G__29329;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526049317807
