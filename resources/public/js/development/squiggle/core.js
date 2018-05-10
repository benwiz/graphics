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
var G__28178__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__28178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28179__i = 0, G__28179__a = new Array(arguments.length -  0);
while (G__28179__i < G__28179__a.length) {G__28179__a[G__28179__i] = arguments[G__28179__i + 0]; ++G__28179__i;}
  args = new cljs.core.IndexedSeq(G__28179__a,0,null);
} 
return G__28178__delegate.call(this,args);};
G__28178.cljs$lang$maxFixedArity = 0;
G__28178.cljs$lang$applyTo = (function (arglist__28180){
var args = cljs.core.seq(arglist__28180);
return G__28178__delegate(args);
});
G__28178.cljs$core$IFn$_invoke$arity$variadic = G__28178__delegate;
return G__28178;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__28181__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__28181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28182__i = 0, G__28182__a = new Array(arguments.length -  0);
while (G__28182__i < G__28182__a.length) {G__28182__a[G__28182__i] = arguments[G__28182__i + 0]; ++G__28182__i;}
  args = new cljs.core.IndexedSeq(G__28182__a,0,null);
} 
return G__28181__delegate.call(this,args);};
G__28181.cljs$lang$maxFixedArity = 0;
G__28181.cljs$lang$applyTo = (function (arglist__28183){
var args = cljs.core.seq(arglist__28183);
return G__28181__delegate(args);
});
G__28181.cljs$core$IFn$_invoke$arity$variadic = G__28181__delegate;
return G__28181;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__28184__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__28184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28185__i = 0, G__28185__a = new Array(arguments.length -  0);
while (G__28185__i < G__28185__a.length) {G__28185__a[G__28185__i] = arguments[G__28185__i + 0]; ++G__28185__i;}
  args = new cljs.core.IndexedSeq(G__28185__a,0,null);
} 
return G__28184__delegate.call(this,args);};
G__28184.cljs$lang$maxFixedArity = 0;
G__28184.cljs$lang$applyTo = (function (arglist__28186){
var args = cljs.core.seq(arglist__28186);
return G__28184__delegate(args);
});
G__28184.cljs$core$IFn$_invoke$arity$variadic = G__28184__delegate;
return G__28184;
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
var G__28187__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__28187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28188__i = 0, G__28188__a = new Array(arguments.length -  0);
while (G__28188__i < G__28188__a.length) {G__28188__a[G__28188__i] = arguments[G__28188__i + 0]; ++G__28188__i;}
  args = new cljs.core.IndexedSeq(G__28188__a,0,null);
} 
return G__28187__delegate.call(this,args);};
G__28187.cljs$lang$maxFixedArity = 0;
G__28187.cljs$lang$applyTo = (function (arglist__28189){
var args = cljs.core.seq(arglist__28189);
return G__28187__delegate(args);
});
G__28187.cljs$core$IFn$_invoke$arity$variadic = G__28187__delegate;
return G__28187;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__28190__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__28190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28191__i = 0, G__28191__a = new Array(arguments.length -  0);
while (G__28191__i < G__28191__a.length) {G__28191__a[G__28191__i] = arguments[G__28191__i + 0]; ++G__28191__i;}
  args = new cljs.core.IndexedSeq(G__28191__a,0,null);
} 
return G__28190__delegate.call(this,args);};
G__28190.cljs$lang$maxFixedArity = 0;
G__28190.cljs$lang$applyTo = (function (arglist__28192){
var args = cljs.core.seq(arglist__28192);
return G__28190__delegate(args);
});
G__28190.cljs$core$IFn$_invoke$arity$variadic = G__28190__delegate;
return G__28190;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__28193__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__28193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28194__i = 0, G__28194__a = new Array(arguments.length -  0);
while (G__28194__i < G__28194__a.length) {G__28194__a[G__28194__i] = arguments[G__28194__i + 0]; ++G__28194__i;}
  args = new cljs.core.IndexedSeq(G__28194__a,0,null);
} 
return G__28193__delegate.call(this,args);};
G__28193.cljs$lang$maxFixedArity = 0;
G__28193.cljs$lang$applyTo = (function (arglist__28195){
var args = cljs.core.seq(arglist__28195);
return G__28193__delegate(args);
});
G__28193.cljs$core$IFn$_invoke$arity$variadic = G__28193__delegate;
return G__28193;
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

//# sourceMappingURL=core.js.map?rel=1525988047827
