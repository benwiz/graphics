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
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__47275__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__47275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47276__i = 0, G__47276__a = new Array(arguments.length -  0);
while (G__47276__i < G__47276__a.length) {G__47276__a[G__47276__i] = arguments[G__47276__i + 0]; ++G__47276__i;}
  args = new cljs.core.IndexedSeq(G__47276__a,0,null);
} 
return G__47275__delegate.call(this,args);};
G__47275.cljs$lang$maxFixedArity = 0;
G__47275.cljs$lang$applyTo = (function (arglist__47277){
var args = cljs.core.seq(arglist__47277);
return G__47275__delegate(args);
});
G__47275.cljs$core$IFn$_invoke$arity$variadic = G__47275__delegate;
return G__47275;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__47278__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__47278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47279__i = 0, G__47279__a = new Array(arguments.length -  0);
while (G__47279__i < G__47279__a.length) {G__47279__a[G__47279__i] = arguments[G__47279__i + 0]; ++G__47279__i;}
  args = new cljs.core.IndexedSeq(G__47279__a,0,null);
} 
return G__47278__delegate.call(this,args);};
G__47278.cljs$lang$maxFixedArity = 0;
G__47278.cljs$lang$applyTo = (function (arglist__47280){
var args = cljs.core.seq(arglist__47280);
return G__47278__delegate(args);
});
G__47278.cljs$core$IFn$_invoke$arity$variadic = G__47278__delegate;
return G__47278;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__47281__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__47281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47282__i = 0, G__47282__a = new Array(arguments.length -  0);
while (G__47282__i < G__47282__a.length) {G__47282__a[G__47282__i] = arguments[G__47282__i + 0]; ++G__47282__i;}
  args = new cljs.core.IndexedSeq(G__47282__a,0,null);
} 
return G__47281__delegate.call(this,args);};
G__47281.cljs$lang$maxFixedArity = 0;
G__47281.cljs$lang$applyTo = (function (arglist__47283){
var args = cljs.core.seq(arglist__47283);
return G__47281__delegate(args);
});
G__47281.cljs$core$IFn$_invoke$arity$variadic = G__47281__delegate;
return G__47281;
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
var G__47284__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__47284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47285__i = 0, G__47285__a = new Array(arguments.length -  0);
while (G__47285__i < G__47285__a.length) {G__47285__a[G__47285__i] = arguments[G__47285__i + 0]; ++G__47285__i;}
  args = new cljs.core.IndexedSeq(G__47285__a,0,null);
} 
return G__47284__delegate.call(this,args);};
G__47284.cljs$lang$maxFixedArity = 0;
G__47284.cljs$lang$applyTo = (function (arglist__47286){
var args = cljs.core.seq(arglist__47286);
return G__47284__delegate(args);
});
G__47284.cljs$core$IFn$_invoke$arity$variadic = G__47284__delegate;
return G__47284;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__47287__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__47287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47288__i = 0, G__47288__a = new Array(arguments.length -  0);
while (G__47288__i < G__47288__a.length) {G__47288__a[G__47288__i] = arguments[G__47288__i + 0]; ++G__47288__i;}
  args = new cljs.core.IndexedSeq(G__47288__a,0,null);
} 
return G__47287__delegate.call(this,args);};
G__47287.cljs$lang$maxFixedArity = 0;
G__47287.cljs$lang$applyTo = (function (arglist__47289){
var args = cljs.core.seq(arglist__47289);
return G__47287__delegate(args);
});
G__47287.cljs$core$IFn$_invoke$arity$variadic = G__47287__delegate;
return G__47287;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__47290__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__47290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47291__i = 0, G__47291__a = new Array(arguments.length -  0);
while (G__47291__i < G__47291__a.length) {G__47291__a[G__47291__i] = arguments[G__47291__i + 0]; ++G__47291__i;}
  args = new cljs.core.IndexedSeq(G__47291__a,0,null);
} 
return G__47290__delegate.call(this,args);};
G__47290.cljs$lang$maxFixedArity = 0;
G__47290.cljs$lang$applyTo = (function (arglist__47292){
var args = cljs.core.seq(arglist__47292);
return G__47290__delegate(args);
});
G__47290.cljs$core$IFn$_invoke$arity$variadic = G__47290__delegate;
return G__47290;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__47293__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__47293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47294__i = 0, G__47294__a = new Array(arguments.length -  0);
while (G__47294__i < G__47294__a.length) {G__47294__a[G__47294__i] = arguments[G__47294__i + 0]; ++G__47294__i;}
  args = new cljs.core.IndexedSeq(G__47294__a,0,null);
} 
return G__47293__delegate.call(this,args);};
G__47293.cljs$lang$maxFixedArity = 0;
G__47293.cljs$lang$applyTo = (function (arglist__47295){
var args = cljs.core.seq(arglist__47295);
return G__47293__delegate(args);
});
G__47293.cljs$core$IFn$_invoke$arity$variadic = G__47293__delegate;
return G__47293;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__47296__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__47296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47297__i = 0, G__47297__a = new Array(arguments.length -  0);
while (G__47297__i < G__47297__a.length) {G__47297__a[G__47297__i] = arguments[G__47297__i + 0]; ++G__47297__i;}
  args = new cljs.core.IndexedSeq(G__47297__a,0,null);
} 
return G__47296__delegate.call(this,args);};
G__47296.cljs$lang$maxFixedArity = 0;
G__47296.cljs$lang$applyTo = (function (arglist__47298){
var args = cljs.core.seq(arglist__47298);
return G__47296__delegate(args);
});
G__47296.cljs$core$IFn$_invoke$arity$variadic = G__47296__delegate;
return G__47296;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__47299__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__47299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47300__i = 0, G__47300__a = new Array(arguments.length -  0);
while (G__47300__i < G__47300__a.length) {G__47300__a[G__47300__i] = arguments[G__47300__i + 0]; ++G__47300__i;}
  args = new cljs.core.IndexedSeq(G__47300__a,0,null);
} 
return G__47299__delegate.call(this,args);};
G__47299.cljs$lang$maxFixedArity = 0;
G__47299.cljs$lang$applyTo = (function (arglist__47301){
var args = cljs.core.seq(arglist__47301);
return G__47299__delegate(args);
});
G__47299.cljs$core$IFn$_invoke$arity$variadic = G__47299__delegate;
return G__47299;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__47302__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__47302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47303__i = 0, G__47303__a = new Array(arguments.length -  0);
while (G__47303__i < G__47303__a.length) {G__47303__a[G__47303__i] = arguments[G__47303__i + 0]; ++G__47303__i;}
  args = new cljs.core.IndexedSeq(G__47303__a,0,null);
} 
return G__47302__delegate.call(this,args);};
G__47302.cljs$lang$maxFixedArity = 0;
G__47302.cljs$lang$applyTo = (function (arglist__47304){
var args = cljs.core.seq(arglist__47304);
return G__47302__delegate(args);
});
G__47302.cljs$core$IFn$_invoke$arity$variadic = G__47302__delegate;
return G__47302;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__47305__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__47305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47306__i = 0, G__47306__a = new Array(arguments.length -  0);
while (G__47306__i < G__47306__a.length) {G__47306__a[G__47306__i] = arguments[G__47306__i + 0]; ++G__47306__i;}
  args = new cljs.core.IndexedSeq(G__47306__a,0,null);
} 
return G__47305__delegate.call(this,args);};
G__47305.cljs$lang$maxFixedArity = 0;
G__47305.cljs$lang$applyTo = (function (arglist__47307){
var args = cljs.core.seq(arglist__47307);
return G__47305__delegate(args);
});
G__47305.cljs$core$IFn$_invoke$arity$variadic = G__47305__delegate;
return G__47305;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__47308__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__47308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47309__i = 0, G__47309__a = new Array(arguments.length -  0);
while (G__47309__i < G__47309__a.length) {G__47309__a[G__47309__i] = arguments[G__47309__i + 0]; ++G__47309__i;}
  args = new cljs.core.IndexedSeq(G__47309__a,0,null);
} 
return G__47308__delegate.call(this,args);};
G__47308.cljs$lang$maxFixedArity = 0;
G__47308.cljs$lang$applyTo = (function (arglist__47310){
var args = cljs.core.seq(arglist__47310);
return G__47308__delegate(args);
});
G__47308.cljs$core$IFn$_invoke$arity$variadic = G__47308__delegate;
return G__47308;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__47311__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__47311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47312__i = 0, G__47312__a = new Array(arguments.length -  0);
while (G__47312__i < G__47312__a.length) {G__47312__a[G__47312__i] = arguments[G__47312__i + 0]; ++G__47312__i;}
  args = new cljs.core.IndexedSeq(G__47312__a,0,null);
} 
return G__47311__delegate.call(this,args);};
G__47311.cljs$lang$maxFixedArity = 0;
G__47311.cljs$lang$applyTo = (function (arglist__47313){
var args = cljs.core.seq(arglist__47313);
return G__47311__delegate(args);
});
G__47311.cljs$core$IFn$_invoke$arity$variadic = G__47311__delegate;
return G__47311;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__47314__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__47314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47315__i = 0, G__47315__a = new Array(arguments.length -  0);
while (G__47315__i < G__47315__a.length) {G__47315__a[G__47315__i] = arguments[G__47315__i + 0]; ++G__47315__i;}
  args = new cljs.core.IndexedSeq(G__47315__a,0,null);
} 
return G__47314__delegate.call(this,args);};
G__47314.cljs$lang$maxFixedArity = 0;
G__47314.cljs$lang$applyTo = (function (arglist__47316){
var args = cljs.core.seq(arglist__47316);
return G__47314__delegate(args);
});
G__47314.cljs$core$IFn$_invoke$arity$variadic = G__47314__delegate;
return G__47314;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__47317__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__47317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47318__i = 0, G__47318__a = new Array(arguments.length -  0);
while (G__47318__i < G__47318__a.length) {G__47318__a[G__47318__i] = arguments[G__47318__i + 0]; ++G__47318__i;}
  args = new cljs.core.IndexedSeq(G__47318__a,0,null);
} 
return G__47317__delegate.call(this,args);};
G__47317.cljs$lang$maxFixedArity = 0;
G__47317.cljs$lang$applyTo = (function (arglist__47319){
var args = cljs.core.seq(arglist__47319);
return G__47317__delegate(args);
});
G__47317.cljs$core$IFn$_invoke$arity$variadic = G__47317__delegate;
return G__47317;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526260008700
