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
var G__29425__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__29425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29426__i = 0, G__29426__a = new Array(arguments.length -  0);
while (G__29426__i < G__29426__a.length) {G__29426__a[G__29426__i] = arguments[G__29426__i + 0]; ++G__29426__i;}
  args = new cljs.core.IndexedSeq(G__29426__a,0,null);
} 
return G__29425__delegate.call(this,args);};
G__29425.cljs$lang$maxFixedArity = 0;
G__29425.cljs$lang$applyTo = (function (arglist__29427){
var args = cljs.core.seq(arglist__29427);
return G__29425__delegate(args);
});
G__29425.cljs$core$IFn$_invoke$arity$variadic = G__29425__delegate;
return G__29425;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__29428__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__29428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29429__i = 0, G__29429__a = new Array(arguments.length -  0);
while (G__29429__i < G__29429__a.length) {G__29429__a[G__29429__i] = arguments[G__29429__i + 0]; ++G__29429__i;}
  args = new cljs.core.IndexedSeq(G__29429__a,0,null);
} 
return G__29428__delegate.call(this,args);};
G__29428.cljs$lang$maxFixedArity = 0;
G__29428.cljs$lang$applyTo = (function (arglist__29430){
var args = cljs.core.seq(arglist__29430);
return G__29428__delegate(args);
});
G__29428.cljs$core$IFn$_invoke$arity$variadic = G__29428__delegate;
return G__29428;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__29431__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__29431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29432__i = 0, G__29432__a = new Array(arguments.length -  0);
while (G__29432__i < G__29432__a.length) {G__29432__a[G__29432__i] = arguments[G__29432__i + 0]; ++G__29432__i;}
  args = new cljs.core.IndexedSeq(G__29432__a,0,null);
} 
return G__29431__delegate.call(this,args);};
G__29431.cljs$lang$maxFixedArity = 0;
G__29431.cljs$lang$applyTo = (function (arglist__29433){
var args = cljs.core.seq(arglist__29433);
return G__29431__delegate(args);
});
G__29431.cljs$core$IFn$_invoke$arity$variadic = G__29431__delegate;
return G__29431;
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
var G__29434__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__29434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29435__i = 0, G__29435__a = new Array(arguments.length -  0);
while (G__29435__i < G__29435__a.length) {G__29435__a[G__29435__i] = arguments[G__29435__i + 0]; ++G__29435__i;}
  args = new cljs.core.IndexedSeq(G__29435__a,0,null);
} 
return G__29434__delegate.call(this,args);};
G__29434.cljs$lang$maxFixedArity = 0;
G__29434.cljs$lang$applyTo = (function (arglist__29436){
var args = cljs.core.seq(arglist__29436);
return G__29434__delegate(args);
});
G__29434.cljs$core$IFn$_invoke$arity$variadic = G__29434__delegate;
return G__29434;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__29437__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__29437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29438__i = 0, G__29438__a = new Array(arguments.length -  0);
while (G__29438__i < G__29438__a.length) {G__29438__a[G__29438__i] = arguments[G__29438__i + 0]; ++G__29438__i;}
  args = new cljs.core.IndexedSeq(G__29438__a,0,null);
} 
return G__29437__delegate.call(this,args);};
G__29437.cljs$lang$maxFixedArity = 0;
G__29437.cljs$lang$applyTo = (function (arglist__29439){
var args = cljs.core.seq(arglist__29439);
return G__29437__delegate(args);
});
G__29437.cljs$core$IFn$_invoke$arity$variadic = G__29437__delegate;
return G__29437;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__29440__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__29440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29441__i = 0, G__29441__a = new Array(arguments.length -  0);
while (G__29441__i < G__29441__a.length) {G__29441__a[G__29441__i] = arguments[G__29441__i + 0]; ++G__29441__i;}
  args = new cljs.core.IndexedSeq(G__29441__a,0,null);
} 
return G__29440__delegate.call(this,args);};
G__29440.cljs$lang$maxFixedArity = 0;
G__29440.cljs$lang$applyTo = (function (arglist__29442){
var args = cljs.core.seq(arglist__29442);
return G__29440__delegate(args);
});
G__29440.cljs$core$IFn$_invoke$arity$variadic = G__29440__delegate;
return G__29440;
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

//# sourceMappingURL=core.js.map?rel=1526049564226
