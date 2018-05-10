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
var G__31401__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__31401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31402__i = 0, G__31402__a = new Array(arguments.length -  0);
while (G__31402__i < G__31402__a.length) {G__31402__a[G__31402__i] = arguments[G__31402__i + 0]; ++G__31402__i;}
  args = new cljs.core.IndexedSeq(G__31402__a,0,null);
} 
return G__31401__delegate.call(this,args);};
G__31401.cljs$lang$maxFixedArity = 0;
G__31401.cljs$lang$applyTo = (function (arglist__31403){
var args = cljs.core.seq(arglist__31403);
return G__31401__delegate(args);
});
G__31401.cljs$core$IFn$_invoke$arity$variadic = G__31401__delegate;
return G__31401;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__31404__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__31404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31405__i = 0, G__31405__a = new Array(arguments.length -  0);
while (G__31405__i < G__31405__a.length) {G__31405__a[G__31405__i] = arguments[G__31405__i + 0]; ++G__31405__i;}
  args = new cljs.core.IndexedSeq(G__31405__a,0,null);
} 
return G__31404__delegate.call(this,args);};
G__31404.cljs$lang$maxFixedArity = 0;
G__31404.cljs$lang$applyTo = (function (arglist__31406){
var args = cljs.core.seq(arglist__31406);
return G__31404__delegate(args);
});
G__31404.cljs$core$IFn$_invoke$arity$variadic = G__31404__delegate;
return G__31404;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__31407__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__31407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31408__i = 0, G__31408__a = new Array(arguments.length -  0);
while (G__31408__i < G__31408__a.length) {G__31408__a[G__31408__i] = arguments[G__31408__i + 0]; ++G__31408__i;}
  args = new cljs.core.IndexedSeq(G__31408__a,0,null);
} 
return G__31407__delegate.call(this,args);};
G__31407.cljs$lang$maxFixedArity = 0;
G__31407.cljs$lang$applyTo = (function (arglist__31409){
var args = cljs.core.seq(arglist__31409);
return G__31407__delegate(args);
});
G__31407.cljs$core$IFn$_invoke$arity$variadic = G__31407__delegate;
return G__31407;
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
var G__31410__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__31410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31411__i = 0, G__31411__a = new Array(arguments.length -  0);
while (G__31411__i < G__31411__a.length) {G__31411__a[G__31411__i] = arguments[G__31411__i + 0]; ++G__31411__i;}
  args = new cljs.core.IndexedSeq(G__31411__a,0,null);
} 
return G__31410__delegate.call(this,args);};
G__31410.cljs$lang$maxFixedArity = 0;
G__31410.cljs$lang$applyTo = (function (arglist__31412){
var args = cljs.core.seq(arglist__31412);
return G__31410__delegate(args);
});
G__31410.cljs$core$IFn$_invoke$arity$variadic = G__31410__delegate;
return G__31410;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__31413__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__31413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31414__i = 0, G__31414__a = new Array(arguments.length -  0);
while (G__31414__i < G__31414__a.length) {G__31414__a[G__31414__i] = arguments[G__31414__i + 0]; ++G__31414__i;}
  args = new cljs.core.IndexedSeq(G__31414__a,0,null);
} 
return G__31413__delegate.call(this,args);};
G__31413.cljs$lang$maxFixedArity = 0;
G__31413.cljs$lang$applyTo = (function (arglist__31415){
var args = cljs.core.seq(arglist__31415);
return G__31413__delegate(args);
});
G__31413.cljs$core$IFn$_invoke$arity$variadic = G__31413__delegate;
return G__31413;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__31416__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__31416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31417__i = 0, G__31417__a = new Array(arguments.length -  0);
while (G__31417__i < G__31417__a.length) {G__31417__a[G__31417__i] = arguments[G__31417__i + 0]; ++G__31417__i;}
  args = new cljs.core.IndexedSeq(G__31417__a,0,null);
} 
return G__31416__delegate.call(this,args);};
G__31416.cljs$lang$maxFixedArity = 0;
G__31416.cljs$lang$applyTo = (function (arglist__31418){
var args = cljs.core.seq(arglist__31418);
return G__31416__delegate(args);
});
G__31416.cljs$core$IFn$_invoke$arity$variadic = G__31416__delegate;
return G__31416;
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

//# sourceMappingURL=core.js.map?rel=1525956476040
