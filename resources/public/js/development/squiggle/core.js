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
goog.require('squiggle.primitive');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__40246__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__40246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40247__i = 0, G__40247__a = new Array(arguments.length -  0);
while (G__40247__i < G__40247__a.length) {G__40247__a[G__40247__i] = arguments[G__40247__i + 0]; ++G__40247__i;}
  args = new cljs.core.IndexedSeq(G__40247__a,0,null);
} 
return G__40246__delegate.call(this,args);};
G__40246.cljs$lang$maxFixedArity = 0;
G__40246.cljs$lang$applyTo = (function (arglist__40248){
var args = cljs.core.seq(arglist__40248);
return G__40246__delegate(args);
});
G__40246.cljs$core$IFn$_invoke$arity$variadic = G__40246__delegate;
return G__40246;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__40249__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__40249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40250__i = 0, G__40250__a = new Array(arguments.length -  0);
while (G__40250__i < G__40250__a.length) {G__40250__a[G__40250__i] = arguments[G__40250__i + 0]; ++G__40250__i;}
  args = new cljs.core.IndexedSeq(G__40250__a,0,null);
} 
return G__40249__delegate.call(this,args);};
G__40249.cljs$lang$maxFixedArity = 0;
G__40249.cljs$lang$applyTo = (function (arglist__40251){
var args = cljs.core.seq(arglist__40251);
return G__40249__delegate(args);
});
G__40249.cljs$core$IFn$_invoke$arity$variadic = G__40249__delegate;
return G__40249;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__40252__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__40252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40253__i = 0, G__40253__a = new Array(arguments.length -  0);
while (G__40253__i < G__40253__a.length) {G__40253__a[G__40253__i] = arguments[G__40253__i + 0]; ++G__40253__i;}
  args = new cljs.core.IndexedSeq(G__40253__a,0,null);
} 
return G__40252__delegate.call(this,args);};
G__40252.cljs$lang$maxFixedArity = 0;
G__40252.cljs$lang$applyTo = (function (arglist__40254){
var args = cljs.core.seq(arglist__40254);
return G__40252__delegate(args);
});
G__40252.cljs$core$IFn$_invoke$arity$variadic = G__40252__delegate;
return G__40252;
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
var G__40255__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__40255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40256__i = 0, G__40256__a = new Array(arguments.length -  0);
while (G__40256__i < G__40256__a.length) {G__40256__a[G__40256__i] = arguments[G__40256__i + 0]; ++G__40256__i;}
  args = new cljs.core.IndexedSeq(G__40256__a,0,null);
} 
return G__40255__delegate.call(this,args);};
G__40255.cljs$lang$maxFixedArity = 0;
G__40255.cljs$lang$applyTo = (function (arglist__40257){
var args = cljs.core.seq(arglist__40257);
return G__40255__delegate(args);
});
G__40255.cljs$core$IFn$_invoke$arity$variadic = G__40255__delegate;
return G__40255;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__40258__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__40258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40259__i = 0, G__40259__a = new Array(arguments.length -  0);
while (G__40259__i < G__40259__a.length) {G__40259__a[G__40259__i] = arguments[G__40259__i + 0]; ++G__40259__i;}
  args = new cljs.core.IndexedSeq(G__40259__a,0,null);
} 
return G__40258__delegate.call(this,args);};
G__40258.cljs$lang$maxFixedArity = 0;
G__40258.cljs$lang$applyTo = (function (arglist__40260){
var args = cljs.core.seq(arglist__40260);
return G__40258__delegate(args);
});
G__40258.cljs$core$IFn$_invoke$arity$variadic = G__40258__delegate;
return G__40258;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__40261__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__40261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40262__i = 0, G__40262__a = new Array(arguments.length -  0);
while (G__40262__i < G__40262__a.length) {G__40262__a[G__40262__i] = arguments[G__40262__i + 0]; ++G__40262__i;}
  args = new cljs.core.IndexedSeq(G__40262__a,0,null);
} 
return G__40261__delegate.call(this,args);};
G__40261.cljs$lang$maxFixedArity = 0;
G__40261.cljs$lang$applyTo = (function (arglist__40263){
var args = cljs.core.seq(arglist__40263);
return G__40261__delegate(args);
});
G__40261.cljs$core$IFn$_invoke$arity$variadic = G__40261__delegate;
return G__40261;
})()
:squiggle.solar_system.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_solar_system', squiggle.core.sketch_solar_system);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_solar_system,new cljs.core.Keyword(null,"host-id","host-id",742376279),"solar-system"], null));
}

squiggle.core.sketch_game_of_life = (function squiggle$core$run_sketch_$_sketch_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.update_state))?(function() { 
var G__40264__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__40264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40265__i = 0, G__40265__a = new Array(arguments.length -  0);
while (G__40265__i < G__40265__a.length) {G__40265__a[G__40265__i] = arguments[G__40265__i + 0]; ++G__40265__i;}
  args = new cljs.core.IndexedSeq(G__40265__a,0,null);
} 
return G__40264__delegate.call(this,args);};
G__40264.cljs$lang$maxFixedArity = 0;
G__40264.cljs$lang$applyTo = (function (arglist__40266){
var args = cljs.core.seq(arglist__40266);
return G__40264__delegate(args);
});
G__40264.cljs$core$IFn$_invoke$arity$variadic = G__40264__delegate;
return G__40264;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__40267__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__40267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40268__i = 0, G__40268__a = new Array(arguments.length -  0);
while (G__40268__i < G__40268__a.length) {G__40268__a[G__40268__i] = arguments[G__40268__i + 0]; ++G__40268__i;}
  args = new cljs.core.IndexedSeq(G__40268__a,0,null);
} 
return G__40267__delegate.call(this,args);};
G__40267.cljs$lang$maxFixedArity = 0;
G__40267.cljs$lang$applyTo = (function (arglist__40269){
var args = cljs.core.seq(arglist__40269);
return G__40267__delegate(args);
});
G__40267.cljs$core$IFn$_invoke$arity$variadic = G__40267__delegate;
return G__40267;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__40270__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__40270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40271__i = 0, G__40271__a = new Array(arguments.length -  0);
while (G__40271__i < G__40271__a.length) {G__40271__a[G__40271__i] = arguments[G__40271__i + 0]; ++G__40271__i;}
  args = new cljs.core.IndexedSeq(G__40271__a,0,null);
} 
return G__40270__delegate.call(this,args);};
G__40270.cljs$lang$maxFixedArity = 0;
G__40270.cljs$lang$applyTo = (function (arglist__40272){
var args = cljs.core.seq(arglist__40272);
return G__40270__delegate(args);
});
G__40270.cljs$core$IFn$_invoke$arity$variadic = G__40270__delegate;
return G__40270;
})()
:squiggle.game_of_life.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_game_of_life', squiggle.core.sketch_game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

squiggle.core.sketch_tentacles = (function squiggle$core$run_sketch_$_sketch_tentacles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"tentacles",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.update_state))?(function() { 
var G__40273__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__40273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40274__i = 0, G__40274__a = new Array(arguments.length -  0);
while (G__40274__i < G__40274__a.length) {G__40274__a[G__40274__i] = arguments[G__40274__i + 0]; ++G__40274__i;}
  args = new cljs.core.IndexedSeq(G__40274__a,0,null);
} 
return G__40273__delegate.call(this,args);};
G__40273.cljs$lang$maxFixedArity = 0;
G__40273.cljs$lang$applyTo = (function (arglist__40275){
var args = cljs.core.seq(arglist__40275);
return G__40273__delegate(args);
});
G__40273.cljs$core$IFn$_invoke$arity$variadic = G__40273__delegate;
return G__40273;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__40276__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__40276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40277__i = 0, G__40277__a = new Array(arguments.length -  0);
while (G__40277__i < G__40277__a.length) {G__40277__a[G__40277__i] = arguments[G__40277__i + 0]; ++G__40277__i;}
  args = new cljs.core.IndexedSeq(G__40277__a,0,null);
} 
return G__40276__delegate.call(this,args);};
G__40276.cljs$lang$maxFixedArity = 0;
G__40276.cljs$lang$applyTo = (function (arglist__40278){
var args = cljs.core.seq(arglist__40278);
return G__40276__delegate(args);
});
G__40276.cljs$core$IFn$_invoke$arity$variadic = G__40276__delegate;
return G__40276;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__40279__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__40279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40280__i = 0, G__40280__a = new Array(arguments.length -  0);
while (G__40280__i < G__40280__a.length) {G__40280__a[G__40280__i] = arguments[G__40280__i + 0]; ++G__40280__i;}
  args = new cljs.core.IndexedSeq(G__40280__a,0,null);
} 
return G__40279__delegate.call(this,args);};
G__40279.cljs$lang$maxFixedArity = 0;
G__40279.cljs$lang$applyTo = (function (arglist__40281){
var args = cljs.core.seq(arglist__40281);
return G__40279__delegate(args);
});
G__40279.cljs$core$IFn$_invoke$arity$variadic = G__40279__delegate;
return G__40279;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40282__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40283__i = 0, G__40283__a = new Array(arguments.length -  0);
while (G__40283__i < G__40283__a.length) {G__40283__a[G__40283__i] = arguments[G__40283__i + 0]; ++G__40283__i;}
  args = new cljs.core.IndexedSeq(G__40283__a,0,null);
} 
return G__40282__delegate.call(this,args);};
G__40282.cljs$lang$maxFixedArity = 0;
G__40282.cljs$lang$applyTo = (function (arglist__40284){
var args = cljs.core.seq(arglist__40284);
return G__40282__delegate(args);
});
G__40282.cljs$core$IFn$_invoke$arity$variadic = G__40282__delegate;
return G__40282;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__40285__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__40285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40286__i = 0, G__40286__a = new Array(arguments.length -  0);
while (G__40286__i < G__40286__a.length) {G__40286__a[G__40286__i] = arguments[G__40286__i + 0]; ++G__40286__i;}
  args = new cljs.core.IndexedSeq(G__40286__a,0,null);
} 
return G__40285__delegate.call(this,args);};
G__40285.cljs$lang$maxFixedArity = 0;
G__40285.cljs$lang$applyTo = (function (arglist__40287){
var args = cljs.core.seq(arglist__40287);
return G__40285__delegate(args);
});
G__40285.cljs$core$IFn$_invoke$arity$variadic = G__40285__delegate;
return G__40285;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40288__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40289__i = 0, G__40289__a = new Array(arguments.length -  0);
while (G__40289__i < G__40289__a.length) {G__40289__a[G__40289__i] = arguments[G__40289__i + 0]; ++G__40289__i;}
  args = new cljs.core.IndexedSeq(G__40289__a,0,null);
} 
return G__40288__delegate.call(this,args);};
G__40288.cljs$lang$maxFixedArity = 0;
G__40288.cljs$lang$applyTo = (function (arglist__40290){
var args = cljs.core.seq(arglist__40290);
return G__40288__delegate(args);
});
G__40288.cljs$core$IFn$_invoke$arity$variadic = G__40288__delegate;
return G__40288;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40291__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40292__i = 0, G__40292__a = new Array(arguments.length -  0);
while (G__40292__i < G__40292__a.length) {G__40292__a[G__40292__i] = arguments[G__40292__i + 0]; ++G__40292__i;}
  args = new cljs.core.IndexedSeq(G__40292__a,0,null);
} 
return G__40291__delegate.call(this,args);};
G__40291.cljs$lang$maxFixedArity = 0;
G__40291.cljs$lang$applyTo = (function (arglist__40293){
var args = cljs.core.seq(arglist__40293);
return G__40291__delegate(args);
});
G__40291.cljs$core$IFn$_invoke$arity$variadic = G__40291__delegate;
return G__40291;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__40294__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__40294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40295__i = 0, G__40295__a = new Array(arguments.length -  0);
while (G__40295__i < G__40295__a.length) {G__40295__a[G__40295__i] = arguments[G__40295__i + 0]; ++G__40295__i;}
  args = new cljs.core.IndexedSeq(G__40295__a,0,null);
} 
return G__40294__delegate.call(this,args);};
G__40294.cljs$lang$maxFixedArity = 0;
G__40294.cljs$lang$applyTo = (function (arglist__40296){
var args = cljs.core.seq(arglist__40296);
return G__40294__delegate(args);
});
G__40294.cljs$core$IFn$_invoke$arity$variadic = G__40294__delegate;
return G__40294;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40297__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40298__i = 0, G__40298__a = new Array(arguments.length -  0);
while (G__40298__i < G__40298__a.length) {G__40298__a[G__40298__i] = arguments[G__40298__i + 0]; ++G__40298__i;}
  args = new cljs.core.IndexedSeq(G__40298__a,0,null);
} 
return G__40297__delegate.call(this,args);};
G__40297.cljs$lang$maxFixedArity = 0;
G__40297.cljs$lang$applyTo = (function (arglist__40299){
var args = cljs.core.seq(arglist__40299);
return G__40297__delegate(args);
});
G__40297.cljs$core$IFn$_invoke$arity$variadic = G__40297__delegate;
return G__40297;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40300__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40301__i = 0, G__40301__a = new Array(arguments.length -  0);
while (G__40301__i < G__40301__a.length) {G__40301__a[G__40301__i] = arguments[G__40301__i + 0]; ++G__40301__i;}
  args = new cljs.core.IndexedSeq(G__40301__a,0,null);
} 
return G__40300__delegate.call(this,args);};
G__40300.cljs$lang$maxFixedArity = 0;
G__40300.cljs$lang$applyTo = (function (arglist__40302){
var args = cljs.core.seq(arglist__40302);
return G__40300__delegate(args);
});
G__40300.cljs$core$IFn$_invoke$arity$variadic = G__40300__delegate;
return G__40300;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__40303__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__40303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40304__i = 0, G__40304__a = new Array(arguments.length -  0);
while (G__40304__i < G__40304__a.length) {G__40304__a[G__40304__i] = arguments[G__40304__i + 0]; ++G__40304__i;}
  args = new cljs.core.IndexedSeq(G__40304__a,0,null);
} 
return G__40303__delegate.call(this,args);};
G__40303.cljs$lang$maxFixedArity = 0;
G__40303.cljs$lang$applyTo = (function (arglist__40305){
var args = cljs.core.seq(arglist__40305);
return G__40303__delegate(args);
});
G__40303.cljs$core$IFn$_invoke$arity$variadic = G__40303__delegate;
return G__40303;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40306__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40307__i = 0, G__40307__a = new Array(arguments.length -  0);
while (G__40307__i < G__40307__a.length) {G__40307__a[G__40307__i] = arguments[G__40307__i + 0]; ++G__40307__i;}
  args = new cljs.core.IndexedSeq(G__40307__a,0,null);
} 
return G__40306__delegate.call(this,args);};
G__40306.cljs$lang$maxFixedArity = 0;
G__40306.cljs$lang$applyTo = (function (arglist__40308){
var args = cljs.core.seq(arglist__40308);
return G__40306__delegate(args);
});
G__40306.cljs$core$IFn$_invoke$arity$variadic = G__40306__delegate;
return G__40306;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__40309__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__40309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40310__i = 0, G__40310__a = new Array(arguments.length -  0);
while (G__40310__i < G__40310__a.length) {G__40310__a[G__40310__i] = arguments[G__40310__i + 0]; ++G__40310__i;}
  args = new cljs.core.IndexedSeq(G__40310__a,0,null);
} 
return G__40309__delegate.call(this,args);};
G__40309.cljs$lang$maxFixedArity = 0;
G__40309.cljs$lang$applyTo = (function (arglist__40311){
var args = cljs.core.seq(arglist__40311);
return G__40309__delegate(args);
});
G__40309.cljs$core$IFn$_invoke$arity$variadic = G__40309__delegate;
return G__40309;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__40312__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__40312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40313__i = 0, G__40313__a = new Array(arguments.length -  0);
while (G__40313__i < G__40313__a.length) {G__40313__a[G__40313__i] = arguments[G__40313__i + 0]; ++G__40313__i;}
  args = new cljs.core.IndexedSeq(G__40313__a,0,null);
} 
return G__40312__delegate.call(this,args);};
G__40312.cljs$lang$maxFixedArity = 0;
G__40312.cljs$lang$applyTo = (function (arglist__40314){
var args = cljs.core.seq(arglist__40314);
return G__40312__delegate(args);
});
G__40312.cljs$core$IFn$_invoke$arity$variadic = G__40312__delegate;
return G__40312;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__40315__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__40315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40316__i = 0, G__40316__a = new Array(arguments.length -  0);
while (G__40316__i < G__40316__a.length) {G__40316__a[G__40316__i] = arguments[G__40316__i + 0]; ++G__40316__i;}
  args = new cljs.core.IndexedSeq(G__40316__a,0,null);
} 
return G__40315__delegate.call(this,args);};
G__40315.cljs$lang$maxFixedArity = 0;
G__40315.cljs$lang$applyTo = (function (arglist__40317){
var args = cljs.core.seq(arglist__40317);
return G__40315__delegate(args);
});
G__40315.cljs$core$IFn$_invoke$arity$variadic = G__40315__delegate;
return G__40315;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}

squiggle.core.sketch_primitive_starry_night = (function squiggle$core$run_sketch_$_sketch_primitive_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"primitive-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.update_state))?(function() { 
var G__40318__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.update_state,args);
};
var G__40318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40319__i = 0, G__40319__a = new Array(arguments.length -  0);
while (G__40319__i < G__40319__a.length) {G__40319__a[G__40319__i] = arguments[G__40319__i + 0]; ++G__40319__i;}
  args = new cljs.core.IndexedSeq(G__40319__a,0,null);
} 
return G__40318__delegate.call(this,args);};
G__40318.cljs$lang$maxFixedArity = 0;
G__40318.cljs$lang$applyTo = (function (arglist__40320){
var args = cljs.core.seq(arglist__40320);
return G__40318__delegate(args);
});
G__40318.cljs$core$IFn$_invoke$arity$variadic = G__40318__delegate;
return G__40318;
})()
:squiggle.primitive.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.setup_starry_night))?(function() { 
var G__40321__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.setup_starry_night,args);
};
var G__40321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40322__i = 0, G__40322__a = new Array(arguments.length -  0);
while (G__40322__i < G__40322__a.length) {G__40322__a[G__40322__i] = arguments[G__40322__i + 0]; ++G__40322__i;}
  args = new cljs.core.IndexedSeq(G__40322__a,0,null);
} 
return G__40321__delegate.call(this,args);};
G__40321.cljs$lang$maxFixedArity = 0;
G__40321.cljs$lang$applyTo = (function (arglist__40323){
var args = cljs.core.seq(arglist__40323);
return G__40321__delegate(args);
});
G__40321.cljs$core$IFn$_invoke$arity$variadic = G__40321__delegate;
return G__40321;
})()
:squiggle.primitive.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.primitive.draw_state))?(function() { 
var G__40324__delegate = function (args){
return cljs.core.apply.call(null,squiggle.primitive.draw_state,args);
};
var G__40324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40325__i = 0, G__40325__a = new Array(arguments.length -  0);
while (G__40325__i < G__40325__a.length) {G__40325__a[G__40325__i] = arguments[G__40325__i + 0]; ++G__40325__i;}
  args = new cljs.core.IndexedSeq(G__40325__a,0,null);
} 
return G__40324__delegate.call(this,args);};
G__40324.cljs$lang$maxFixedArity = 0;
G__40324.cljs$lang$applyTo = (function (arglist__40326){
var args = cljs.core.seq(arglist__40326);
return G__40324__delegate(args);
});
G__40324.cljs$core$IFn$_invoke$arity$variadic = G__40324__delegate;
return G__40324;
})()
:squiggle.primitive.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_primitive_starry_night', squiggle.core.sketch_primitive_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27081__27082__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27081__27082__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_primitive_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"primitive-starry-night"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526517603129
