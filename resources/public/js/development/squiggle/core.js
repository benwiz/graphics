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
var G__31424__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__31424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31425__i = 0, G__31425__a = new Array(arguments.length -  0);
while (G__31425__i < G__31425__a.length) {G__31425__a[G__31425__i] = arguments[G__31425__i + 0]; ++G__31425__i;}
  args = new cljs.core.IndexedSeq(G__31425__a,0,null);
} 
return G__31424__delegate.call(this,args);};
G__31424.cljs$lang$maxFixedArity = 0;
G__31424.cljs$lang$applyTo = (function (arglist__31426){
var args = cljs.core.seq(arglist__31426);
return G__31424__delegate(args);
});
G__31424.cljs$core$IFn$_invoke$arity$variadic = G__31424__delegate;
return G__31424;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__31427__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__31427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31428__i = 0, G__31428__a = new Array(arguments.length -  0);
while (G__31428__i < G__31428__a.length) {G__31428__a[G__31428__i] = arguments[G__31428__i + 0]; ++G__31428__i;}
  args = new cljs.core.IndexedSeq(G__31428__a,0,null);
} 
return G__31427__delegate.call(this,args);};
G__31427.cljs$lang$maxFixedArity = 0;
G__31427.cljs$lang$applyTo = (function (arglist__31429){
var args = cljs.core.seq(arglist__31429);
return G__31427__delegate(args);
});
G__31427.cljs$core$IFn$_invoke$arity$variadic = G__31427__delegate;
return G__31427;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__31430__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__31430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  0);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 0]; ++G__31431__i;}
  args = new cljs.core.IndexedSeq(G__31431__a,0,null);
} 
return G__31430__delegate.call(this,args);};
G__31430.cljs$lang$maxFixedArity = 0;
G__31430.cljs$lang$applyTo = (function (arglist__31432){
var args = cljs.core.seq(arglist__31432);
return G__31430__delegate(args);
});
G__31430.cljs$core$IFn$_invoke$arity$variadic = G__31430__delegate;
return G__31430;
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
var G__31433__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__31433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31434__i = 0, G__31434__a = new Array(arguments.length -  0);
while (G__31434__i < G__31434__a.length) {G__31434__a[G__31434__i] = arguments[G__31434__i + 0]; ++G__31434__i;}
  args = new cljs.core.IndexedSeq(G__31434__a,0,null);
} 
return G__31433__delegate.call(this,args);};
G__31433.cljs$lang$maxFixedArity = 0;
G__31433.cljs$lang$applyTo = (function (arglist__31435){
var args = cljs.core.seq(arglist__31435);
return G__31433__delegate(args);
});
G__31433.cljs$core$IFn$_invoke$arity$variadic = G__31433__delegate;
return G__31433;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__31436__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__31436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31437__i = 0, G__31437__a = new Array(arguments.length -  0);
while (G__31437__i < G__31437__a.length) {G__31437__a[G__31437__i] = arguments[G__31437__i + 0]; ++G__31437__i;}
  args = new cljs.core.IndexedSeq(G__31437__a,0,null);
} 
return G__31436__delegate.call(this,args);};
G__31436.cljs$lang$maxFixedArity = 0;
G__31436.cljs$lang$applyTo = (function (arglist__31438){
var args = cljs.core.seq(arglist__31438);
return G__31436__delegate(args);
});
G__31436.cljs$core$IFn$_invoke$arity$variadic = G__31436__delegate;
return G__31436;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__31439__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__31439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31440__i = 0, G__31440__a = new Array(arguments.length -  0);
while (G__31440__i < G__31440__a.length) {G__31440__a[G__31440__i] = arguments[G__31440__i + 0]; ++G__31440__i;}
  args = new cljs.core.IndexedSeq(G__31440__a,0,null);
} 
return G__31439__delegate.call(this,args);};
G__31439.cljs$lang$maxFixedArity = 0;
G__31439.cljs$lang$applyTo = (function (arglist__31441){
var args = cljs.core.seq(arglist__31441);
return G__31439__delegate(args);
});
G__31439.cljs$core$IFn$_invoke$arity$variadic = G__31439__delegate;
return G__31439;
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

//# sourceMappingURL=core.js.map?rel=1525956531327
