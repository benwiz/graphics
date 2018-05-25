// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
goog.require('squiggle.pointillism');
goog.require('squiggle.delaunay_monsters');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__45870__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__45870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45871__i = 0, G__45871__a = new Array(arguments.length -  0);
while (G__45871__i < G__45871__a.length) {G__45871__a[G__45871__i] = arguments[G__45871__i + 0]; ++G__45871__i;}
  args = new cljs.core.IndexedSeq(G__45871__a,0,null);
} 
return G__45870__delegate.call(this,args);};
G__45870.cljs$lang$maxFixedArity = 0;
G__45870.cljs$lang$applyTo = (function (arglist__45872){
var args = cljs.core.seq(arglist__45872);
return G__45870__delegate(args);
});
G__45870.cljs$core$IFn$_invoke$arity$variadic = G__45870__delegate;
return G__45870;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__45873__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__45873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45874__i = 0, G__45874__a = new Array(arguments.length -  0);
while (G__45874__i < G__45874__a.length) {G__45874__a[G__45874__i] = arguments[G__45874__i + 0]; ++G__45874__i;}
  args = new cljs.core.IndexedSeq(G__45874__a,0,null);
} 
return G__45873__delegate.call(this,args);};
G__45873.cljs$lang$maxFixedArity = 0;
G__45873.cljs$lang$applyTo = (function (arglist__45875){
var args = cljs.core.seq(arglist__45875);
return G__45873__delegate(args);
});
G__45873.cljs$core$IFn$_invoke$arity$variadic = G__45873__delegate;
return G__45873;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__45876__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__45876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45877__i = 0, G__45877__a = new Array(arguments.length -  0);
while (G__45877__i < G__45877__a.length) {G__45877__a[G__45877__i] = arguments[G__45877__i + 0]; ++G__45877__i;}
  args = new cljs.core.IndexedSeq(G__45877__a,0,null);
} 
return G__45876__delegate.call(this,args);};
G__45876.cljs$lang$maxFixedArity = 0;
G__45876.cljs$lang$applyTo = (function (arglist__45878){
var args = cljs.core.seq(arglist__45878);
return G__45876__delegate(args);
});
G__45876.cljs$core$IFn$_invoke$arity$variadic = G__45876__delegate;
return G__45876;
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
var G__45879__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__45879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45880__i = 0, G__45880__a = new Array(arguments.length -  0);
while (G__45880__i < G__45880__a.length) {G__45880__a[G__45880__i] = arguments[G__45880__i + 0]; ++G__45880__i;}
  args = new cljs.core.IndexedSeq(G__45880__a,0,null);
} 
return G__45879__delegate.call(this,args);};
G__45879.cljs$lang$maxFixedArity = 0;
G__45879.cljs$lang$applyTo = (function (arglist__45881){
var args = cljs.core.seq(arglist__45881);
return G__45879__delegate(args);
});
G__45879.cljs$core$IFn$_invoke$arity$variadic = G__45879__delegate;
return G__45879;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__45882__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__45882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45883__i = 0, G__45883__a = new Array(arguments.length -  0);
while (G__45883__i < G__45883__a.length) {G__45883__a[G__45883__i] = arguments[G__45883__i + 0]; ++G__45883__i;}
  args = new cljs.core.IndexedSeq(G__45883__a,0,null);
} 
return G__45882__delegate.call(this,args);};
G__45882.cljs$lang$maxFixedArity = 0;
G__45882.cljs$lang$applyTo = (function (arglist__45884){
var args = cljs.core.seq(arglist__45884);
return G__45882__delegate(args);
});
G__45882.cljs$core$IFn$_invoke$arity$variadic = G__45882__delegate;
return G__45882;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__45885__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__45885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45886__i = 0, G__45886__a = new Array(arguments.length -  0);
while (G__45886__i < G__45886__a.length) {G__45886__a[G__45886__i] = arguments[G__45886__i + 0]; ++G__45886__i;}
  args = new cljs.core.IndexedSeq(G__45886__a,0,null);
} 
return G__45885__delegate.call(this,args);};
G__45885.cljs$lang$maxFixedArity = 0;
G__45885.cljs$lang$applyTo = (function (arglist__45887){
var args = cljs.core.seq(arglist__45887);
return G__45885__delegate(args);
});
G__45885.cljs$core$IFn$_invoke$arity$variadic = G__45885__delegate;
return G__45885;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__45888__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__45888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45889__i = 0, G__45889__a = new Array(arguments.length -  0);
while (G__45889__i < G__45889__a.length) {G__45889__a[G__45889__i] = arguments[G__45889__i + 0]; ++G__45889__i;}
  args = new cljs.core.IndexedSeq(G__45889__a,0,null);
} 
return G__45888__delegate.call(this,args);};
G__45888.cljs$lang$maxFixedArity = 0;
G__45888.cljs$lang$applyTo = (function (arglist__45890){
var args = cljs.core.seq(arglist__45890);
return G__45888__delegate(args);
});
G__45888.cljs$core$IFn$_invoke$arity$variadic = G__45888__delegate;
return G__45888;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__45891__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__45891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45892__i = 0, G__45892__a = new Array(arguments.length -  0);
while (G__45892__i < G__45892__a.length) {G__45892__a[G__45892__i] = arguments[G__45892__i + 0]; ++G__45892__i;}
  args = new cljs.core.IndexedSeq(G__45892__a,0,null);
} 
return G__45891__delegate.call(this,args);};
G__45891.cljs$lang$maxFixedArity = 0;
G__45891.cljs$lang$applyTo = (function (arglist__45893){
var args = cljs.core.seq(arglist__45893);
return G__45891__delegate(args);
});
G__45891.cljs$core$IFn$_invoke$arity$variadic = G__45891__delegate;
return G__45891;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__45894__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__45894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45895__i = 0, G__45895__a = new Array(arguments.length -  0);
while (G__45895__i < G__45895__a.length) {G__45895__a[G__45895__i] = arguments[G__45895__i + 0]; ++G__45895__i;}
  args = new cljs.core.IndexedSeq(G__45895__a,0,null);
} 
return G__45894__delegate.call(this,args);};
G__45894.cljs$lang$maxFixedArity = 0;
G__45894.cljs$lang$applyTo = (function (arglist__45896){
var args = cljs.core.seq(arglist__45896);
return G__45894__delegate(args);
});
G__45894.cljs$core$IFn$_invoke$arity$variadic = G__45894__delegate;
return G__45894;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__45897__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__45897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45898__i = 0, G__45898__a = new Array(arguments.length -  0);
while (G__45898__i < G__45898__a.length) {G__45898__a[G__45898__i] = arguments[G__45898__i + 0]; ++G__45898__i;}
  args = new cljs.core.IndexedSeq(G__45898__a,0,null);
} 
return G__45897__delegate.call(this,args);};
G__45897.cljs$lang$maxFixedArity = 0;
G__45897.cljs$lang$applyTo = (function (arglist__45899){
var args = cljs.core.seq(arglist__45899);
return G__45897__delegate(args);
});
G__45897.cljs$core$IFn$_invoke$arity$variadic = G__45897__delegate;
return G__45897;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__45900__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__45900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45901__i = 0, G__45901__a = new Array(arguments.length -  0);
while (G__45901__i < G__45901__a.length) {G__45901__a[G__45901__i] = arguments[G__45901__i + 0]; ++G__45901__i;}
  args = new cljs.core.IndexedSeq(G__45901__a,0,null);
} 
return G__45900__delegate.call(this,args);};
G__45900.cljs$lang$maxFixedArity = 0;
G__45900.cljs$lang$applyTo = (function (arglist__45902){
var args = cljs.core.seq(arglist__45902);
return G__45900__delegate(args);
});
G__45900.cljs$core$IFn$_invoke$arity$variadic = G__45900__delegate;
return G__45900;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__45903__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__45903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45904__i = 0, G__45904__a = new Array(arguments.length -  0);
while (G__45904__i < G__45904__a.length) {G__45904__a[G__45904__i] = arguments[G__45904__i + 0]; ++G__45904__i;}
  args = new cljs.core.IndexedSeq(G__45904__a,0,null);
} 
return G__45903__delegate.call(this,args);};
G__45903.cljs$lang$maxFixedArity = 0;
G__45903.cljs$lang$applyTo = (function (arglist__45905){
var args = cljs.core.seq(arglist__45905);
return G__45903__delegate(args);
});
G__45903.cljs$core$IFn$_invoke$arity$variadic = G__45903__delegate;
return G__45903;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__45906__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45907__i = 0, G__45907__a = new Array(arguments.length -  0);
while (G__45907__i < G__45907__a.length) {G__45907__a[G__45907__i] = arguments[G__45907__i + 0]; ++G__45907__i;}
  args = new cljs.core.IndexedSeq(G__45907__a,0,null);
} 
return G__45906__delegate.call(this,args);};
G__45906.cljs$lang$maxFixedArity = 0;
G__45906.cljs$lang$applyTo = (function (arglist__45908){
var args = cljs.core.seq(arglist__45908);
return G__45906__delegate(args);
});
G__45906.cljs$core$IFn$_invoke$arity$variadic = G__45906__delegate;
return G__45906;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__45909__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__45909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45910__i = 0, G__45910__a = new Array(arguments.length -  0);
while (G__45910__i < G__45910__a.length) {G__45910__a[G__45910__i] = arguments[G__45910__i + 0]; ++G__45910__i;}
  args = new cljs.core.IndexedSeq(G__45910__a,0,null);
} 
return G__45909__delegate.call(this,args);};
G__45909.cljs$lang$maxFixedArity = 0;
G__45909.cljs$lang$applyTo = (function (arglist__45911){
var args = cljs.core.seq(arglist__45911);
return G__45909__delegate(args);
});
G__45909.cljs$core$IFn$_invoke$arity$variadic = G__45909__delegate;
return G__45909;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45912__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45913__i = 0, G__45913__a = new Array(arguments.length -  0);
while (G__45913__i < G__45913__a.length) {G__45913__a[G__45913__i] = arguments[G__45913__i + 0]; ++G__45913__i;}
  args = new cljs.core.IndexedSeq(G__45913__a,0,null);
} 
return G__45912__delegate.call(this,args);};
G__45912.cljs$lang$maxFixedArity = 0;
G__45912.cljs$lang$applyTo = (function (arglist__45914){
var args = cljs.core.seq(arglist__45914);
return G__45912__delegate(args);
});
G__45912.cljs$core$IFn$_invoke$arity$variadic = G__45912__delegate;
return G__45912;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__45915__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45916__i = 0, G__45916__a = new Array(arguments.length -  0);
while (G__45916__i < G__45916__a.length) {G__45916__a[G__45916__i] = arguments[G__45916__i + 0]; ++G__45916__i;}
  args = new cljs.core.IndexedSeq(G__45916__a,0,null);
} 
return G__45915__delegate.call(this,args);};
G__45915.cljs$lang$maxFixedArity = 0;
G__45915.cljs$lang$applyTo = (function (arglist__45917){
var args = cljs.core.seq(arglist__45917);
return G__45915__delegate(args);
});
G__45915.cljs$core$IFn$_invoke$arity$variadic = G__45915__delegate;
return G__45915;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__45918__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__45918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45919__i = 0, G__45919__a = new Array(arguments.length -  0);
while (G__45919__i < G__45919__a.length) {G__45919__a[G__45919__i] = arguments[G__45919__i + 0]; ++G__45919__i;}
  args = new cljs.core.IndexedSeq(G__45919__a,0,null);
} 
return G__45918__delegate.call(this,args);};
G__45918.cljs$lang$maxFixedArity = 0;
G__45918.cljs$lang$applyTo = (function (arglist__45920){
var args = cljs.core.seq(arglist__45920);
return G__45918__delegate(args);
});
G__45918.cljs$core$IFn$_invoke$arity$variadic = G__45918__delegate;
return G__45918;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45921__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45922__i = 0, G__45922__a = new Array(arguments.length -  0);
while (G__45922__i < G__45922__a.length) {G__45922__a[G__45922__i] = arguments[G__45922__i + 0]; ++G__45922__i;}
  args = new cljs.core.IndexedSeq(G__45922__a,0,null);
} 
return G__45921__delegate.call(this,args);};
G__45921.cljs$lang$maxFixedArity = 0;
G__45921.cljs$lang$applyTo = (function (arglist__45923){
var args = cljs.core.seq(arglist__45923);
return G__45921__delegate(args);
});
G__45921.cljs$core$IFn$_invoke$arity$variadic = G__45921__delegate;
return G__45921;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__45924__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45925__i = 0, G__45925__a = new Array(arguments.length -  0);
while (G__45925__i < G__45925__a.length) {G__45925__a[G__45925__i] = arguments[G__45925__i + 0]; ++G__45925__i;}
  args = new cljs.core.IndexedSeq(G__45925__a,0,null);
} 
return G__45924__delegate.call(this,args);};
G__45924.cljs$lang$maxFixedArity = 0;
G__45924.cljs$lang$applyTo = (function (arglist__45926){
var args = cljs.core.seq(arglist__45926);
return G__45924__delegate(args);
});
G__45924.cljs$core$IFn$_invoke$arity$variadic = G__45924__delegate;
return G__45924;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__45927__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__45927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45928__i = 0, G__45928__a = new Array(arguments.length -  0);
while (G__45928__i < G__45928__a.length) {G__45928__a[G__45928__i] = arguments[G__45928__i + 0]; ++G__45928__i;}
  args = new cljs.core.IndexedSeq(G__45928__a,0,null);
} 
return G__45927__delegate.call(this,args);};
G__45927.cljs$lang$maxFixedArity = 0;
G__45927.cljs$lang$applyTo = (function (arglist__45929){
var args = cljs.core.seq(arglist__45929);
return G__45927__delegate(args);
});
G__45927.cljs$core$IFn$_invoke$arity$variadic = G__45927__delegate;
return G__45927;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45930__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45931__i = 0, G__45931__a = new Array(arguments.length -  0);
while (G__45931__i < G__45931__a.length) {G__45931__a[G__45931__i] = arguments[G__45931__i + 0]; ++G__45931__i;}
  args = new cljs.core.IndexedSeq(G__45931__a,0,null);
} 
return G__45930__delegate.call(this,args);};
G__45930.cljs$lang$maxFixedArity = 0;
G__45930.cljs$lang$applyTo = (function (arglist__45932){
var args = cljs.core.seq(arglist__45932);
return G__45930__delegate(args);
});
G__45930.cljs$core$IFn$_invoke$arity$variadic = G__45930__delegate;
return G__45930;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__45933__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__45933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45934__i = 0, G__45934__a = new Array(arguments.length -  0);
while (G__45934__i < G__45934__a.length) {G__45934__a[G__45934__i] = arguments[G__45934__i + 0]; ++G__45934__i;}
  args = new cljs.core.IndexedSeq(G__45934__a,0,null);
} 
return G__45933__delegate.call(this,args);};
G__45933.cljs$lang$maxFixedArity = 0;
G__45933.cljs$lang$applyTo = (function (arglist__45935){
var args = cljs.core.seq(arglist__45935);
return G__45933__delegate(args);
});
G__45933.cljs$core$IFn$_invoke$arity$variadic = G__45933__delegate;
return G__45933;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__45936__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__45936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45937__i = 0, G__45937__a = new Array(arguments.length -  0);
while (G__45937__i < G__45937__a.length) {G__45937__a[G__45937__i] = arguments[G__45937__i + 0]; ++G__45937__i;}
  args = new cljs.core.IndexedSeq(G__45937__a,0,null);
} 
return G__45936__delegate.call(this,args);};
G__45936.cljs$lang$maxFixedArity = 0;
G__45936.cljs$lang$applyTo = (function (arglist__45938){
var args = cljs.core.seq(arglist__45938);
return G__45936__delegate(args);
});
G__45936.cljs$core$IFn$_invoke$arity$variadic = G__45936__delegate;
return G__45936;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__45939__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__45939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45940__i = 0, G__45940__a = new Array(arguments.length -  0);
while (G__45940__i < G__45940__a.length) {G__45940__a[G__45940__i] = arguments[G__45940__i + 0]; ++G__45940__i;}
  args = new cljs.core.IndexedSeq(G__45940__a,0,null);
} 
return G__45939__delegate.call(this,args);};
G__45939.cljs$lang$maxFixedArity = 0;
G__45939.cljs$lang$applyTo = (function (arglist__45941){
var args = cljs.core.seq(arglist__45941);
return G__45939__delegate(args);
});
G__45939.cljs$core$IFn$_invoke$arity$variadic = G__45939__delegate;
return G__45939;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__45942__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__45942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45943__i = 0, G__45943__a = new Array(arguments.length -  0);
while (G__45943__i < G__45943__a.length) {G__45943__a[G__45943__i] = arguments[G__45943__i + 0]; ++G__45943__i;}
  args = new cljs.core.IndexedSeq(G__45943__a,0,null);
} 
return G__45942__delegate.call(this,args);};
G__45942.cljs$lang$maxFixedArity = 0;
G__45942.cljs$lang$applyTo = (function (arglist__45944){
var args = cljs.core.seq(arglist__45944);
return G__45942__delegate(args);
});
G__45942.cljs$core$IFn$_invoke$arity$variadic = G__45942__delegate;
return G__45942;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__45945__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__45945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45946__i = 0, G__45946__a = new Array(arguments.length -  0);
while (G__45946__i < G__45946__a.length) {G__45946__a[G__45946__i] = arguments[G__45946__i + 0]; ++G__45946__i;}
  args = new cljs.core.IndexedSeq(G__45946__a,0,null);
} 
return G__45945__delegate.call(this,args);};
G__45945.cljs$lang$maxFixedArity = 0;
G__45945.cljs$lang$applyTo = (function (arglist__45947){
var args = cljs.core.seq(arglist__45947);
return G__45945__delegate(args);
});
G__45945.cljs$core$IFn$_invoke$arity$variadic = G__45945__delegate;
return G__45945;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__45948__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__45948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45949__i = 0, G__45949__a = new Array(arguments.length -  0);
while (G__45949__i < G__45949__a.length) {G__45949__a[G__45949__i] = arguments[G__45949__i + 0]; ++G__45949__i;}
  args = new cljs.core.IndexedSeq(G__45949__a,0,null);
} 
return G__45948__delegate.call(this,args);};
G__45948.cljs$lang$maxFixedArity = 0;
G__45948.cljs$lang$applyTo = (function (arglist__45950){
var args = cljs.core.seq(arglist__45950);
return G__45948__delegate(args);
});
G__45948.cljs$core$IFn$_invoke$arity$variadic = G__45948__delegate;
return G__45948;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527206345373
