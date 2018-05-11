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
var G__27859__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__27859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27860__i = 0, G__27860__a = new Array(arguments.length -  0);
while (G__27860__i < G__27860__a.length) {G__27860__a[G__27860__i] = arguments[G__27860__i + 0]; ++G__27860__i;}
  args = new cljs.core.IndexedSeq(G__27860__a,0,null);
} 
return G__27859__delegate.call(this,args);};
G__27859.cljs$lang$maxFixedArity = 0;
G__27859.cljs$lang$applyTo = (function (arglist__27861){
var args = cljs.core.seq(arglist__27861);
return G__27859__delegate(args);
});
G__27859.cljs$core$IFn$_invoke$arity$variadic = G__27859__delegate;
return G__27859;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__27862__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__27862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27863__i = 0, G__27863__a = new Array(arguments.length -  0);
while (G__27863__i < G__27863__a.length) {G__27863__a[G__27863__i] = arguments[G__27863__i + 0]; ++G__27863__i;}
  args = new cljs.core.IndexedSeq(G__27863__a,0,null);
} 
return G__27862__delegate.call(this,args);};
G__27862.cljs$lang$maxFixedArity = 0;
G__27862.cljs$lang$applyTo = (function (arglist__27864){
var args = cljs.core.seq(arglist__27864);
return G__27862__delegate(args);
});
G__27862.cljs$core$IFn$_invoke$arity$variadic = G__27862__delegate;
return G__27862;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__27865__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__27865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27866__i = 0, G__27866__a = new Array(arguments.length -  0);
while (G__27866__i < G__27866__a.length) {G__27866__a[G__27866__i] = arguments[G__27866__i + 0]; ++G__27866__i;}
  args = new cljs.core.IndexedSeq(G__27866__a,0,null);
} 
return G__27865__delegate.call(this,args);};
G__27865.cljs$lang$maxFixedArity = 0;
G__27865.cljs$lang$applyTo = (function (arglist__27867){
var args = cljs.core.seq(arglist__27867);
return G__27865__delegate(args);
});
G__27865.cljs$core$IFn$_invoke$arity$variadic = G__27865__delegate;
return G__27865;
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
var G__27868__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__27868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27869__i = 0, G__27869__a = new Array(arguments.length -  0);
while (G__27869__i < G__27869__a.length) {G__27869__a[G__27869__i] = arguments[G__27869__i + 0]; ++G__27869__i;}
  args = new cljs.core.IndexedSeq(G__27869__a,0,null);
} 
return G__27868__delegate.call(this,args);};
G__27868.cljs$lang$maxFixedArity = 0;
G__27868.cljs$lang$applyTo = (function (arglist__27870){
var args = cljs.core.seq(arglist__27870);
return G__27868__delegate(args);
});
G__27868.cljs$core$IFn$_invoke$arity$variadic = G__27868__delegate;
return G__27868;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__27871__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__27871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27872__i = 0, G__27872__a = new Array(arguments.length -  0);
while (G__27872__i < G__27872__a.length) {G__27872__a[G__27872__i] = arguments[G__27872__i + 0]; ++G__27872__i;}
  args = new cljs.core.IndexedSeq(G__27872__a,0,null);
} 
return G__27871__delegate.call(this,args);};
G__27871.cljs$lang$maxFixedArity = 0;
G__27871.cljs$lang$applyTo = (function (arglist__27873){
var args = cljs.core.seq(arglist__27873);
return G__27871__delegate(args);
});
G__27871.cljs$core$IFn$_invoke$arity$variadic = G__27871__delegate;
return G__27871;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__27874__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__27874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27875__i = 0, G__27875__a = new Array(arguments.length -  0);
while (G__27875__i < G__27875__a.length) {G__27875__a[G__27875__i] = arguments[G__27875__i + 0]; ++G__27875__i;}
  args = new cljs.core.IndexedSeq(G__27875__a,0,null);
} 
return G__27874__delegate.call(this,args);};
G__27874.cljs$lang$maxFixedArity = 0;
G__27874.cljs$lang$applyTo = (function (arglist__27876){
var args = cljs.core.seq(arglist__27876);
return G__27874__delegate(args);
});
G__27874.cljs$core$IFn$_invoke$arity$variadic = G__27874__delegate;
return G__27874;
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

//# sourceMappingURL=core.js.map?rel=1526050790129
