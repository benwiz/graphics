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
var G__30884__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__30884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30885__i = 0, G__30885__a = new Array(arguments.length -  0);
while (G__30885__i < G__30885__a.length) {G__30885__a[G__30885__i] = arguments[G__30885__i + 0]; ++G__30885__i;}
  args = new cljs.core.IndexedSeq(G__30885__a,0,null);
} 
return G__30884__delegate.call(this,args);};
G__30884.cljs$lang$maxFixedArity = 0;
G__30884.cljs$lang$applyTo = (function (arglist__30886){
var args = cljs.core.seq(arglist__30886);
return G__30884__delegate(args);
});
G__30884.cljs$core$IFn$_invoke$arity$variadic = G__30884__delegate;
return G__30884;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__30887__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__30887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30888__i = 0, G__30888__a = new Array(arguments.length -  0);
while (G__30888__i < G__30888__a.length) {G__30888__a[G__30888__i] = arguments[G__30888__i + 0]; ++G__30888__i;}
  args = new cljs.core.IndexedSeq(G__30888__a,0,null);
} 
return G__30887__delegate.call(this,args);};
G__30887.cljs$lang$maxFixedArity = 0;
G__30887.cljs$lang$applyTo = (function (arglist__30889){
var args = cljs.core.seq(arglist__30889);
return G__30887__delegate(args);
});
G__30887.cljs$core$IFn$_invoke$arity$variadic = G__30887__delegate;
return G__30887;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__30890__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__30890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30891__i = 0, G__30891__a = new Array(arguments.length -  0);
while (G__30891__i < G__30891__a.length) {G__30891__a[G__30891__i] = arguments[G__30891__i + 0]; ++G__30891__i;}
  args = new cljs.core.IndexedSeq(G__30891__a,0,null);
} 
return G__30890__delegate.call(this,args);};
G__30890.cljs$lang$maxFixedArity = 0;
G__30890.cljs$lang$applyTo = (function (arglist__30892){
var args = cljs.core.seq(arglist__30892);
return G__30890__delegate(args);
});
G__30890.cljs$core$IFn$_invoke$arity$variadic = G__30890__delegate;
return G__30890;
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
var G__30893__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__30893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30894__i = 0, G__30894__a = new Array(arguments.length -  0);
while (G__30894__i < G__30894__a.length) {G__30894__a[G__30894__i] = arguments[G__30894__i + 0]; ++G__30894__i;}
  args = new cljs.core.IndexedSeq(G__30894__a,0,null);
} 
return G__30893__delegate.call(this,args);};
G__30893.cljs$lang$maxFixedArity = 0;
G__30893.cljs$lang$applyTo = (function (arglist__30895){
var args = cljs.core.seq(arglist__30895);
return G__30893__delegate(args);
});
G__30893.cljs$core$IFn$_invoke$arity$variadic = G__30893__delegate;
return G__30893;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__30896__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__30896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30897__i = 0, G__30897__a = new Array(arguments.length -  0);
while (G__30897__i < G__30897__a.length) {G__30897__a[G__30897__i] = arguments[G__30897__i + 0]; ++G__30897__i;}
  args = new cljs.core.IndexedSeq(G__30897__a,0,null);
} 
return G__30896__delegate.call(this,args);};
G__30896.cljs$lang$maxFixedArity = 0;
G__30896.cljs$lang$applyTo = (function (arglist__30898){
var args = cljs.core.seq(arglist__30898);
return G__30896__delegate(args);
});
G__30896.cljs$core$IFn$_invoke$arity$variadic = G__30896__delegate;
return G__30896;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__30899__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__30899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30900__i = 0, G__30900__a = new Array(arguments.length -  0);
while (G__30900__i < G__30900__a.length) {G__30900__a[G__30900__i] = arguments[G__30900__i + 0]; ++G__30900__i;}
  args = new cljs.core.IndexedSeq(G__30900__a,0,null);
} 
return G__30899__delegate.call(this,args);};
G__30899.cljs$lang$maxFixedArity = 0;
G__30899.cljs$lang$applyTo = (function (arglist__30901){
var args = cljs.core.seq(arglist__30901);
return G__30899__delegate(args);
});
G__30899.cljs$core$IFn$_invoke$arity$variadic = G__30899__delegate;
return G__30899;
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

//# sourceMappingURL=core.js.map?rel=1525955682781
