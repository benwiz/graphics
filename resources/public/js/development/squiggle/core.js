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
var G__28536__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28537__i = 0, G__28537__a = new Array(arguments.length -  0);
while (G__28537__i < G__28537__a.length) {G__28537__a[G__28537__i] = arguments[G__28537__i + 0]; ++G__28537__i;}
  args = new cljs.core.IndexedSeq(G__28537__a,0,null);
} 
return G__28536__delegate.call(this,args);};
G__28536.cljs$lang$maxFixedArity = 0;
G__28536.cljs$lang$applyTo = (function (arglist__28538){
var args = cljs.core.seq(arglist__28538);
return G__28536__delegate(args);
});
G__28536.cljs$core$IFn$_invoke$arity$variadic = G__28536__delegate;
return G__28536;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28539__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28540__i = 0, G__28540__a = new Array(arguments.length -  0);
while (G__28540__i < G__28540__a.length) {G__28540__a[G__28540__i] = arguments[G__28540__i + 0]; ++G__28540__i;}
  args = new cljs.core.IndexedSeq(G__28540__a,0,null);
} 
return G__28539__delegate.call(this,args);};
G__28539.cljs$lang$maxFixedArity = 0;
G__28539.cljs$lang$applyTo = (function (arglist__28541){
var args = cljs.core.seq(arglist__28541);
return G__28539__delegate(args);
});
G__28539.cljs$core$IFn$_invoke$arity$variadic = G__28539__delegate;
return G__28539;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28542__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28543__i = 0, G__28543__a = new Array(arguments.length -  0);
while (G__28543__i < G__28543__a.length) {G__28543__a[G__28543__i] = arguments[G__28543__i + 0]; ++G__28543__i;}
  args = new cljs.core.IndexedSeq(G__28543__a,0,null);
} 
return G__28542__delegate.call(this,args);};
G__28542.cljs$lang$maxFixedArity = 0;
G__28542.cljs$lang$applyTo = (function (arglist__28544){
var args = cljs.core.seq(arglist__28544);
return G__28542__delegate(args);
});
G__28542.cljs$core$IFn$_invoke$arity$variadic = G__28542__delegate;
return G__28542;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__28545__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__28545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28546__i = 0, G__28546__a = new Array(arguments.length -  0);
while (G__28546__i < G__28546__a.length) {G__28546__a[G__28546__i] = arguments[G__28546__i + 0]; ++G__28546__i;}
  args = new cljs.core.IndexedSeq(G__28546__a,0,null);
} 
return G__28545__delegate.call(this,args);};
G__28545.cljs$lang$maxFixedArity = 0;
G__28545.cljs$lang$applyTo = (function (arglist__28547){
var args = cljs.core.seq(arglist__28547);
return G__28545__delegate(args);
});
G__28545.cljs$core$IFn$_invoke$arity$variadic = G__28545__delegate;
return G__28545;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__28548__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__28548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28549__i = 0, G__28549__a = new Array(arguments.length -  0);
while (G__28549__i < G__28549__a.length) {G__28549__a[G__28549__i] = arguments[G__28549__i + 0]; ++G__28549__i;}
  args = new cljs.core.IndexedSeq(G__28549__a,0,null);
} 
return G__28548__delegate.call(this,args);};
G__28548.cljs$lang$maxFixedArity = 0;
G__28548.cljs$lang$applyTo = (function (arglist__28550){
var args = cljs.core.seq(arglist__28550);
return G__28548__delegate(args);
});
G__28548.cljs$core$IFn$_invoke$arity$variadic = G__28548__delegate;
return G__28548;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__28551__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__28551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28552__i = 0, G__28552__a = new Array(arguments.length -  0);
while (G__28552__i < G__28552__a.length) {G__28552__a[G__28552__i] = arguments[G__28552__i + 0]; ++G__28552__i;}
  args = new cljs.core.IndexedSeq(G__28552__a,0,null);
} 
return G__28551__delegate.call(this,args);};
G__28551.cljs$lang$maxFixedArity = 0;
G__28551.cljs$lang$applyTo = (function (arglist__28553){
var args = cljs.core.seq(arglist__28553);
return G__28551__delegate(args);
});
G__28551.cljs$core$IFn$_invoke$arity$variadic = G__28551__delegate;
return G__28551;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525992004340
