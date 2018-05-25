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
var G__38961__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__38961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38962__i = 0, G__38962__a = new Array(arguments.length -  0);
while (G__38962__i < G__38962__a.length) {G__38962__a[G__38962__i] = arguments[G__38962__i + 0]; ++G__38962__i;}
  args = new cljs.core.IndexedSeq(G__38962__a,0,null);
} 
return G__38961__delegate.call(this,args);};
G__38961.cljs$lang$maxFixedArity = 0;
G__38961.cljs$lang$applyTo = (function (arglist__38963){
var args = cljs.core.seq(arglist__38963);
return G__38961__delegate(args);
});
G__38961.cljs$core$IFn$_invoke$arity$variadic = G__38961__delegate;
return G__38961;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__38964__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__38964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38965__i = 0, G__38965__a = new Array(arguments.length -  0);
while (G__38965__i < G__38965__a.length) {G__38965__a[G__38965__i] = arguments[G__38965__i + 0]; ++G__38965__i;}
  args = new cljs.core.IndexedSeq(G__38965__a,0,null);
} 
return G__38964__delegate.call(this,args);};
G__38964.cljs$lang$maxFixedArity = 0;
G__38964.cljs$lang$applyTo = (function (arglist__38966){
var args = cljs.core.seq(arglist__38966);
return G__38964__delegate(args);
});
G__38964.cljs$core$IFn$_invoke$arity$variadic = G__38964__delegate;
return G__38964;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__38967__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__38967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38968__i = 0, G__38968__a = new Array(arguments.length -  0);
while (G__38968__i < G__38968__a.length) {G__38968__a[G__38968__i] = arguments[G__38968__i + 0]; ++G__38968__i;}
  args = new cljs.core.IndexedSeq(G__38968__a,0,null);
} 
return G__38967__delegate.call(this,args);};
G__38967.cljs$lang$maxFixedArity = 0;
G__38967.cljs$lang$applyTo = (function (arglist__38969){
var args = cljs.core.seq(arglist__38969);
return G__38967__delegate(args);
});
G__38967.cljs$core$IFn$_invoke$arity$variadic = G__38967__delegate;
return G__38967;
})()
:squiggle.ten_print_remake.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_ten_print_remake', squiggle.core.sketch_ten_print_remake);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_ten_print_remake,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ten-print-remake"], null));
}

squiggle.core.sketch_solar_system = (function squiggle$core$run_sketch_$_sketch_solar_system(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"solar-system",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.update_state))?(function() { 
var G__38970__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__38970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38971__i = 0, G__38971__a = new Array(arguments.length -  0);
while (G__38971__i < G__38971__a.length) {G__38971__a[G__38971__i] = arguments[G__38971__i + 0]; ++G__38971__i;}
  args = new cljs.core.IndexedSeq(G__38971__a,0,null);
} 
return G__38970__delegate.call(this,args);};
G__38970.cljs$lang$maxFixedArity = 0;
G__38970.cljs$lang$applyTo = (function (arglist__38972){
var args = cljs.core.seq(arglist__38972);
return G__38970__delegate(args);
});
G__38970.cljs$core$IFn$_invoke$arity$variadic = G__38970__delegate;
return G__38970;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__38973__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__38973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38974__i = 0, G__38974__a = new Array(arguments.length -  0);
while (G__38974__i < G__38974__a.length) {G__38974__a[G__38974__i] = arguments[G__38974__i + 0]; ++G__38974__i;}
  args = new cljs.core.IndexedSeq(G__38974__a,0,null);
} 
return G__38973__delegate.call(this,args);};
G__38973.cljs$lang$maxFixedArity = 0;
G__38973.cljs$lang$applyTo = (function (arglist__38975){
var args = cljs.core.seq(arglist__38975);
return G__38973__delegate(args);
});
G__38973.cljs$core$IFn$_invoke$arity$variadic = G__38973__delegate;
return G__38973;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__38976__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__38976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38977__i = 0, G__38977__a = new Array(arguments.length -  0);
while (G__38977__i < G__38977__a.length) {G__38977__a[G__38977__i] = arguments[G__38977__i + 0]; ++G__38977__i;}
  args = new cljs.core.IndexedSeq(G__38977__a,0,null);
} 
return G__38976__delegate.call(this,args);};
G__38976.cljs$lang$maxFixedArity = 0;
G__38976.cljs$lang$applyTo = (function (arglist__38978){
var args = cljs.core.seq(arglist__38978);
return G__38976__delegate(args);
});
G__38976.cljs$core$IFn$_invoke$arity$variadic = G__38976__delegate;
return G__38976;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__38979__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__38979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38980__i = 0, G__38980__a = new Array(arguments.length -  0);
while (G__38980__i < G__38980__a.length) {G__38980__a[G__38980__i] = arguments[G__38980__i + 0]; ++G__38980__i;}
  args = new cljs.core.IndexedSeq(G__38980__a,0,null);
} 
return G__38979__delegate.call(this,args);};
G__38979.cljs$lang$maxFixedArity = 0;
G__38979.cljs$lang$applyTo = (function (arglist__38981){
var args = cljs.core.seq(arglist__38981);
return G__38979__delegate(args);
});
G__38979.cljs$core$IFn$_invoke$arity$variadic = G__38979__delegate;
return G__38979;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__38982__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__38982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38983__i = 0, G__38983__a = new Array(arguments.length -  0);
while (G__38983__i < G__38983__a.length) {G__38983__a[G__38983__i] = arguments[G__38983__i + 0]; ++G__38983__i;}
  args = new cljs.core.IndexedSeq(G__38983__a,0,null);
} 
return G__38982__delegate.call(this,args);};
G__38982.cljs$lang$maxFixedArity = 0;
G__38982.cljs$lang$applyTo = (function (arglist__38984){
var args = cljs.core.seq(arglist__38984);
return G__38982__delegate(args);
});
G__38982.cljs$core$IFn$_invoke$arity$variadic = G__38982__delegate;
return G__38982;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__38985__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__38985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38986__i = 0, G__38986__a = new Array(arguments.length -  0);
while (G__38986__i < G__38986__a.length) {G__38986__a[G__38986__i] = arguments[G__38986__i + 0]; ++G__38986__i;}
  args = new cljs.core.IndexedSeq(G__38986__a,0,null);
} 
return G__38985__delegate.call(this,args);};
G__38985.cljs$lang$maxFixedArity = 0;
G__38985.cljs$lang$applyTo = (function (arglist__38987){
var args = cljs.core.seq(arglist__38987);
return G__38985__delegate(args);
});
G__38985.cljs$core$IFn$_invoke$arity$variadic = G__38985__delegate;
return G__38985;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__38988__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__38988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38989__i = 0, G__38989__a = new Array(arguments.length -  0);
while (G__38989__i < G__38989__a.length) {G__38989__a[G__38989__i] = arguments[G__38989__i + 0]; ++G__38989__i;}
  args = new cljs.core.IndexedSeq(G__38989__a,0,null);
} 
return G__38988__delegate.call(this,args);};
G__38988.cljs$lang$maxFixedArity = 0;
G__38988.cljs$lang$applyTo = (function (arglist__38990){
var args = cljs.core.seq(arglist__38990);
return G__38988__delegate(args);
});
G__38988.cljs$core$IFn$_invoke$arity$variadic = G__38988__delegate;
return G__38988;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__38991__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__38991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38992__i = 0, G__38992__a = new Array(arguments.length -  0);
while (G__38992__i < G__38992__a.length) {G__38992__a[G__38992__i] = arguments[G__38992__i + 0]; ++G__38992__i;}
  args = new cljs.core.IndexedSeq(G__38992__a,0,null);
} 
return G__38991__delegate.call(this,args);};
G__38991.cljs$lang$maxFixedArity = 0;
G__38991.cljs$lang$applyTo = (function (arglist__38993){
var args = cljs.core.seq(arglist__38993);
return G__38991__delegate(args);
});
G__38991.cljs$core$IFn$_invoke$arity$variadic = G__38991__delegate;
return G__38991;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__38994__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__38994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38995__i = 0, G__38995__a = new Array(arguments.length -  0);
while (G__38995__i < G__38995__a.length) {G__38995__a[G__38995__i] = arguments[G__38995__i + 0]; ++G__38995__i;}
  args = new cljs.core.IndexedSeq(G__38995__a,0,null);
} 
return G__38994__delegate.call(this,args);};
G__38994.cljs$lang$maxFixedArity = 0;
G__38994.cljs$lang$applyTo = (function (arglist__38996){
var args = cljs.core.seq(arglist__38996);
return G__38994__delegate(args);
});
G__38994.cljs$core$IFn$_invoke$arity$variadic = G__38994__delegate;
return G__38994;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__38997__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__38997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38998__i = 0, G__38998__a = new Array(arguments.length -  0);
while (G__38998__i < G__38998__a.length) {G__38998__a[G__38998__i] = arguments[G__38998__i + 0]; ++G__38998__i;}
  args = new cljs.core.IndexedSeq(G__38998__a,0,null);
} 
return G__38997__delegate.call(this,args);};
G__38997.cljs$lang$maxFixedArity = 0;
G__38997.cljs$lang$applyTo = (function (arglist__38999){
var args = cljs.core.seq(arglist__38999);
return G__38997__delegate(args);
});
G__38997.cljs$core$IFn$_invoke$arity$variadic = G__38997__delegate;
return G__38997;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__39000__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__39000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39001__i = 0, G__39001__a = new Array(arguments.length -  0);
while (G__39001__i < G__39001__a.length) {G__39001__a[G__39001__i] = arguments[G__39001__i + 0]; ++G__39001__i;}
  args = new cljs.core.IndexedSeq(G__39001__a,0,null);
} 
return G__39000__delegate.call(this,args);};
G__39000.cljs$lang$maxFixedArity = 0;
G__39000.cljs$lang$applyTo = (function (arglist__39002){
var args = cljs.core.seq(arglist__39002);
return G__39000__delegate(args);
});
G__39000.cljs$core$IFn$_invoke$arity$variadic = G__39000__delegate;
return G__39000;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39003__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39004__i = 0, G__39004__a = new Array(arguments.length -  0);
while (G__39004__i < G__39004__a.length) {G__39004__a[G__39004__i] = arguments[G__39004__i + 0]; ++G__39004__i;}
  args = new cljs.core.IndexedSeq(G__39004__a,0,null);
} 
return G__39003__delegate.call(this,args);};
G__39003.cljs$lang$maxFixedArity = 0;
G__39003.cljs$lang$applyTo = (function (arglist__39005){
var args = cljs.core.seq(arglist__39005);
return G__39003__delegate(args);
});
G__39003.cljs$core$IFn$_invoke$arity$variadic = G__39003__delegate;
return G__39003;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39006__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39007__i = 0, G__39007__a = new Array(arguments.length -  0);
while (G__39007__i < G__39007__a.length) {G__39007__a[G__39007__i] = arguments[G__39007__i + 0]; ++G__39007__i;}
  args = new cljs.core.IndexedSeq(G__39007__a,0,null);
} 
return G__39006__delegate.call(this,args);};
G__39006.cljs$lang$maxFixedArity = 0;
G__39006.cljs$lang$applyTo = (function (arglist__39008){
var args = cljs.core.seq(arglist__39008);
return G__39006__delegate(args);
});
G__39006.cljs$core$IFn$_invoke$arity$variadic = G__39006__delegate;
return G__39006;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__39009__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__39009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39010__i = 0, G__39010__a = new Array(arguments.length -  0);
while (G__39010__i < G__39010__a.length) {G__39010__a[G__39010__i] = arguments[G__39010__i + 0]; ++G__39010__i;}
  args = new cljs.core.IndexedSeq(G__39010__a,0,null);
} 
return G__39009__delegate.call(this,args);};
G__39009.cljs$lang$maxFixedArity = 0;
G__39009.cljs$lang$applyTo = (function (arglist__39011){
var args = cljs.core.seq(arglist__39011);
return G__39009__delegate(args);
});
G__39009.cljs$core$IFn$_invoke$arity$variadic = G__39009__delegate;
return G__39009;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39012__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39013__i = 0, G__39013__a = new Array(arguments.length -  0);
while (G__39013__i < G__39013__a.length) {G__39013__a[G__39013__i] = arguments[G__39013__i + 0]; ++G__39013__i;}
  args = new cljs.core.IndexedSeq(G__39013__a,0,null);
} 
return G__39012__delegate.call(this,args);};
G__39012.cljs$lang$maxFixedArity = 0;
G__39012.cljs$lang$applyTo = (function (arglist__39014){
var args = cljs.core.seq(arglist__39014);
return G__39012__delegate(args);
});
G__39012.cljs$core$IFn$_invoke$arity$variadic = G__39012__delegate;
return G__39012;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39015__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39016__i = 0, G__39016__a = new Array(arguments.length -  0);
while (G__39016__i < G__39016__a.length) {G__39016__a[G__39016__i] = arguments[G__39016__i + 0]; ++G__39016__i;}
  args = new cljs.core.IndexedSeq(G__39016__a,0,null);
} 
return G__39015__delegate.call(this,args);};
G__39015.cljs$lang$maxFixedArity = 0;
G__39015.cljs$lang$applyTo = (function (arglist__39017){
var args = cljs.core.seq(arglist__39017);
return G__39015__delegate(args);
});
G__39015.cljs$core$IFn$_invoke$arity$variadic = G__39015__delegate;
return G__39015;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__39018__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__39018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39019__i = 0, G__39019__a = new Array(arguments.length -  0);
while (G__39019__i < G__39019__a.length) {G__39019__a[G__39019__i] = arguments[G__39019__i + 0]; ++G__39019__i;}
  args = new cljs.core.IndexedSeq(G__39019__a,0,null);
} 
return G__39018__delegate.call(this,args);};
G__39018.cljs$lang$maxFixedArity = 0;
G__39018.cljs$lang$applyTo = (function (arglist__39020){
var args = cljs.core.seq(arglist__39020);
return G__39018__delegate(args);
});
G__39018.cljs$core$IFn$_invoke$arity$variadic = G__39018__delegate;
return G__39018;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39021__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39022__i = 0, G__39022__a = new Array(arguments.length -  0);
while (G__39022__i < G__39022__a.length) {G__39022__a[G__39022__i] = arguments[G__39022__i + 0]; ++G__39022__i;}
  args = new cljs.core.IndexedSeq(G__39022__a,0,null);
} 
return G__39021__delegate.call(this,args);};
G__39021.cljs$lang$maxFixedArity = 0;
G__39021.cljs$lang$applyTo = (function (arglist__39023){
var args = cljs.core.seq(arglist__39023);
return G__39021__delegate(args);
});
G__39021.cljs$core$IFn$_invoke$arity$variadic = G__39021__delegate;
return G__39021;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39024__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39025__i = 0, G__39025__a = new Array(arguments.length -  0);
while (G__39025__i < G__39025__a.length) {G__39025__a[G__39025__i] = arguments[G__39025__i + 0]; ++G__39025__i;}
  args = new cljs.core.IndexedSeq(G__39025__a,0,null);
} 
return G__39024__delegate.call(this,args);};
G__39024.cljs$lang$maxFixedArity = 0;
G__39024.cljs$lang$applyTo = (function (arglist__39026){
var args = cljs.core.seq(arglist__39026);
return G__39024__delegate(args);
});
G__39024.cljs$core$IFn$_invoke$arity$variadic = G__39024__delegate;
return G__39024;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__39027__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__39027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39028__i = 0, G__39028__a = new Array(arguments.length -  0);
while (G__39028__i < G__39028__a.length) {G__39028__a[G__39028__i] = arguments[G__39028__i + 0]; ++G__39028__i;}
  args = new cljs.core.IndexedSeq(G__39028__a,0,null);
} 
return G__39027__delegate.call(this,args);};
G__39027.cljs$lang$maxFixedArity = 0;
G__39027.cljs$lang$applyTo = (function (arglist__39029){
var args = cljs.core.seq(arglist__39029);
return G__39027__delegate(args);
});
G__39027.cljs$core$IFn$_invoke$arity$variadic = G__39027__delegate;
return G__39027;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39030__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39031__i = 0, G__39031__a = new Array(arguments.length -  0);
while (G__39031__i < G__39031__a.length) {G__39031__a[G__39031__i] = arguments[G__39031__i + 0]; ++G__39031__i;}
  args = new cljs.core.IndexedSeq(G__39031__a,0,null);
} 
return G__39030__delegate.call(this,args);};
G__39030.cljs$lang$maxFixedArity = 0;
G__39030.cljs$lang$applyTo = (function (arglist__39032){
var args = cljs.core.seq(arglist__39032);
return G__39030__delegate(args);
});
G__39030.cljs$core$IFn$_invoke$arity$variadic = G__39030__delegate;
return G__39030;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_delaunay_monsters = (function squiggle$core$run_sketch_$_sketch_delaunay_monsters(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"delaunay-monsters",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.update_state))?(function() { 
var G__39033__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__39033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39034__i = 0, G__39034__a = new Array(arguments.length -  0);
while (G__39034__i < G__39034__a.length) {G__39034__a[G__39034__i] = arguments[G__39034__i + 0]; ++G__39034__i;}
  args = new cljs.core.IndexedSeq(G__39034__a,0,null);
} 
return G__39033__delegate.call(this,args);};
G__39033.cljs$lang$maxFixedArity = 0;
G__39033.cljs$lang$applyTo = (function (arglist__39035){
var args = cljs.core.seq(arglist__39035);
return G__39033__delegate(args);
});
G__39033.cljs$core$IFn$_invoke$arity$variadic = G__39033__delegate;
return G__39033;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__39036__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__39036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39037__i = 0, G__39037__a = new Array(arguments.length -  0);
while (G__39037__i < G__39037__a.length) {G__39037__a[G__39037__i] = arguments[G__39037__i + 0]; ++G__39037__i;}
  args = new cljs.core.IndexedSeq(G__39037__a,0,null);
} 
return G__39036__delegate.call(this,args);};
G__39036.cljs$lang$maxFixedArity = 0;
G__39036.cljs$lang$applyTo = (function (arglist__39038){
var args = cljs.core.seq(arglist__39038);
return G__39036__delegate(args);
});
G__39036.cljs$core$IFn$_invoke$arity$variadic = G__39036__delegate;
return G__39036;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__39039__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__39039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39040__i = 0, G__39040__a = new Array(arguments.length -  0);
while (G__39040__i < G__39040__a.length) {G__39040__a[G__39040__i] = arguments[G__39040__i + 0]; ++G__39040__i;}
  args = new cljs.core.IndexedSeq(G__39040__a,0,null);
} 
return G__39039__delegate.call(this,args);};
G__39039.cljs$lang$maxFixedArity = 0;
G__39039.cljs$lang$applyTo = (function (arglist__39041){
var args = cljs.core.seq(arglist__39041);
return G__39039__delegate(args);
});
G__39039.cljs$core$IFn$_invoke$arity$variadic = G__39039__delegate;
return G__39039;
})()
:squiggle.delaunay_monsters.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_delaunay_monsters', squiggle.core.sketch_delaunay_monsters);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21702__21703__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21702__21703__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_delaunay_monsters,new cljs.core.Keyword(null,"host-id","host-id",742376279),"delaunay-monsters"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527206798242
