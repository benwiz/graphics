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
var G__41048__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__41048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41049__i = 0, G__41049__a = new Array(arguments.length -  0);
while (G__41049__i < G__41049__a.length) {G__41049__a[G__41049__i] = arguments[G__41049__i + 0]; ++G__41049__i;}
  args = new cljs.core.IndexedSeq(G__41049__a,0,null);
} 
return G__41048__delegate.call(this,args);};
G__41048.cljs$lang$maxFixedArity = 0;
G__41048.cljs$lang$applyTo = (function (arglist__41050){
var args = cljs.core.seq(arglist__41050);
return G__41048__delegate(args);
});
G__41048.cljs$core$IFn$_invoke$arity$variadic = G__41048__delegate;
return G__41048;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__41051__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__41051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41052__i = 0, G__41052__a = new Array(arguments.length -  0);
while (G__41052__i < G__41052__a.length) {G__41052__a[G__41052__i] = arguments[G__41052__i + 0]; ++G__41052__i;}
  args = new cljs.core.IndexedSeq(G__41052__a,0,null);
} 
return G__41051__delegate.call(this,args);};
G__41051.cljs$lang$maxFixedArity = 0;
G__41051.cljs$lang$applyTo = (function (arglist__41053){
var args = cljs.core.seq(arglist__41053);
return G__41051__delegate(args);
});
G__41051.cljs$core$IFn$_invoke$arity$variadic = G__41051__delegate;
return G__41051;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__41054__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__41054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41055__i = 0, G__41055__a = new Array(arguments.length -  0);
while (G__41055__i < G__41055__a.length) {G__41055__a[G__41055__i] = arguments[G__41055__i + 0]; ++G__41055__i;}
  args = new cljs.core.IndexedSeq(G__41055__a,0,null);
} 
return G__41054__delegate.call(this,args);};
G__41054.cljs$lang$maxFixedArity = 0;
G__41054.cljs$lang$applyTo = (function (arglist__41056){
var args = cljs.core.seq(arglist__41056);
return G__41054__delegate(args);
});
G__41054.cljs$core$IFn$_invoke$arity$variadic = G__41054__delegate;
return G__41054;
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
var G__41057__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__41057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41058__i = 0, G__41058__a = new Array(arguments.length -  0);
while (G__41058__i < G__41058__a.length) {G__41058__a[G__41058__i] = arguments[G__41058__i + 0]; ++G__41058__i;}
  args = new cljs.core.IndexedSeq(G__41058__a,0,null);
} 
return G__41057__delegate.call(this,args);};
G__41057.cljs$lang$maxFixedArity = 0;
G__41057.cljs$lang$applyTo = (function (arglist__41059){
var args = cljs.core.seq(arglist__41059);
return G__41057__delegate(args);
});
G__41057.cljs$core$IFn$_invoke$arity$variadic = G__41057__delegate;
return G__41057;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__41060__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__41060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41061__i = 0, G__41061__a = new Array(arguments.length -  0);
while (G__41061__i < G__41061__a.length) {G__41061__a[G__41061__i] = arguments[G__41061__i + 0]; ++G__41061__i;}
  args = new cljs.core.IndexedSeq(G__41061__a,0,null);
} 
return G__41060__delegate.call(this,args);};
G__41060.cljs$lang$maxFixedArity = 0;
G__41060.cljs$lang$applyTo = (function (arglist__41062){
var args = cljs.core.seq(arglist__41062);
return G__41060__delegate(args);
});
G__41060.cljs$core$IFn$_invoke$arity$variadic = G__41060__delegate;
return G__41060;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__41063__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__41063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41064__i = 0, G__41064__a = new Array(arguments.length -  0);
while (G__41064__i < G__41064__a.length) {G__41064__a[G__41064__i] = arguments[G__41064__i + 0]; ++G__41064__i;}
  args = new cljs.core.IndexedSeq(G__41064__a,0,null);
} 
return G__41063__delegate.call(this,args);};
G__41063.cljs$lang$maxFixedArity = 0;
G__41063.cljs$lang$applyTo = (function (arglist__41065){
var args = cljs.core.seq(arglist__41065);
return G__41063__delegate(args);
});
G__41063.cljs$core$IFn$_invoke$arity$variadic = G__41063__delegate;
return G__41063;
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
var G__41066__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__41066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41067__i = 0, G__41067__a = new Array(arguments.length -  0);
while (G__41067__i < G__41067__a.length) {G__41067__a[G__41067__i] = arguments[G__41067__i + 0]; ++G__41067__i;}
  args = new cljs.core.IndexedSeq(G__41067__a,0,null);
} 
return G__41066__delegate.call(this,args);};
G__41066.cljs$lang$maxFixedArity = 0;
G__41066.cljs$lang$applyTo = (function (arglist__41068){
var args = cljs.core.seq(arglist__41068);
return G__41066__delegate(args);
});
G__41066.cljs$core$IFn$_invoke$arity$variadic = G__41066__delegate;
return G__41066;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__41069__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__41069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41070__i = 0, G__41070__a = new Array(arguments.length -  0);
while (G__41070__i < G__41070__a.length) {G__41070__a[G__41070__i] = arguments[G__41070__i + 0]; ++G__41070__i;}
  args = new cljs.core.IndexedSeq(G__41070__a,0,null);
} 
return G__41069__delegate.call(this,args);};
G__41069.cljs$lang$maxFixedArity = 0;
G__41069.cljs$lang$applyTo = (function (arglist__41071){
var args = cljs.core.seq(arglist__41071);
return G__41069__delegate(args);
});
G__41069.cljs$core$IFn$_invoke$arity$variadic = G__41069__delegate;
return G__41069;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__41072__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__41072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41073__i = 0, G__41073__a = new Array(arguments.length -  0);
while (G__41073__i < G__41073__a.length) {G__41073__a[G__41073__i] = arguments[G__41073__i + 0]; ++G__41073__i;}
  args = new cljs.core.IndexedSeq(G__41073__a,0,null);
} 
return G__41072__delegate.call(this,args);};
G__41072.cljs$lang$maxFixedArity = 0;
G__41072.cljs$lang$applyTo = (function (arglist__41074){
var args = cljs.core.seq(arglist__41074);
return G__41072__delegate(args);
});
G__41072.cljs$core$IFn$_invoke$arity$variadic = G__41072__delegate;
return G__41072;
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
var G__41075__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__41075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41076__i = 0, G__41076__a = new Array(arguments.length -  0);
while (G__41076__i < G__41076__a.length) {G__41076__a[G__41076__i] = arguments[G__41076__i + 0]; ++G__41076__i;}
  args = new cljs.core.IndexedSeq(G__41076__a,0,null);
} 
return G__41075__delegate.call(this,args);};
G__41075.cljs$lang$maxFixedArity = 0;
G__41075.cljs$lang$applyTo = (function (arglist__41077){
var args = cljs.core.seq(arglist__41077);
return G__41075__delegate(args);
});
G__41075.cljs$core$IFn$_invoke$arity$variadic = G__41075__delegate;
return G__41075;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__41078__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__41078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41079__i = 0, G__41079__a = new Array(arguments.length -  0);
while (G__41079__i < G__41079__a.length) {G__41079__a[G__41079__i] = arguments[G__41079__i + 0]; ++G__41079__i;}
  args = new cljs.core.IndexedSeq(G__41079__a,0,null);
} 
return G__41078__delegate.call(this,args);};
G__41078.cljs$lang$maxFixedArity = 0;
G__41078.cljs$lang$applyTo = (function (arglist__41080){
var args = cljs.core.seq(arglist__41080);
return G__41078__delegate(args);
});
G__41078.cljs$core$IFn$_invoke$arity$variadic = G__41078__delegate;
return G__41078;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__41081__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__41081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41082__i = 0, G__41082__a = new Array(arguments.length -  0);
while (G__41082__i < G__41082__a.length) {G__41082__a[G__41082__i] = arguments[G__41082__i + 0]; ++G__41082__i;}
  args = new cljs.core.IndexedSeq(G__41082__a,0,null);
} 
return G__41081__delegate.call(this,args);};
G__41081.cljs$lang$maxFixedArity = 0;
G__41081.cljs$lang$applyTo = (function (arglist__41083){
var args = cljs.core.seq(arglist__41083);
return G__41081__delegate(args);
});
G__41081.cljs$core$IFn$_invoke$arity$variadic = G__41081__delegate;
return G__41081;
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

squiggle.core.sketch_pointillism_starry_night = (function squiggle$core$run_sketch_$_sketch_pointillism_starry_night(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-starry-night",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41084__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41085__i = 0, G__41085__a = new Array(arguments.length -  0);
while (G__41085__i < G__41085__a.length) {G__41085__a[G__41085__i] = arguments[G__41085__i + 0]; ++G__41085__i;}
  args = new cljs.core.IndexedSeq(G__41085__a,0,null);
} 
return G__41084__delegate.call(this,args);};
G__41084.cljs$lang$maxFixedArity = 0;
G__41084.cljs$lang$applyTo = (function (arglist__41086){
var args = cljs.core.seq(arglist__41086);
return G__41084__delegate(args);
});
G__41084.cljs$core$IFn$_invoke$arity$variadic = G__41084__delegate;
return G__41084;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__41087__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__41087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41088__i = 0, G__41088__a = new Array(arguments.length -  0);
while (G__41088__i < G__41088__a.length) {G__41088__a[G__41088__i] = arguments[G__41088__i + 0]; ++G__41088__i;}
  args = new cljs.core.IndexedSeq(G__41088__a,0,null);
} 
return G__41087__delegate.call(this,args);};
G__41087.cljs$lang$maxFixedArity = 0;
G__41087.cljs$lang$applyTo = (function (arglist__41089){
var args = cljs.core.seq(arglist__41089);
return G__41087__delegate(args);
});
G__41087.cljs$core$IFn$_invoke$arity$variadic = G__41087__delegate;
return G__41087;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41090__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41091__i = 0, G__41091__a = new Array(arguments.length -  0);
while (G__41091__i < G__41091__a.length) {G__41091__a[G__41091__i] = arguments[G__41091__i + 0]; ++G__41091__i;}
  args = new cljs.core.IndexedSeq(G__41091__a,0,null);
} 
return G__41090__delegate.call(this,args);};
G__41090.cljs$lang$maxFixedArity = 0;
G__41090.cljs$lang$applyTo = (function (arglist__41092){
var args = cljs.core.seq(arglist__41092);
return G__41090__delegate(args);
});
G__41090.cljs$core$IFn$_invoke$arity$variadic = G__41090__delegate;
return G__41090;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_starry_night', squiggle.core.sketch_pointillism_starry_night);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_starry_night,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-starry-night"], null));
}

squiggle.core.sketch_pointillism_girl_with_pearl_earing = (function squiggle$core$run_sketch_$_sketch_pointillism_girl_with_pearl_earing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-girl-with-pearl-earing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41094__i = 0, G__41094__a = new Array(arguments.length -  0);
while (G__41094__i < G__41094__a.length) {G__41094__a[G__41094__i] = arguments[G__41094__i + 0]; ++G__41094__i;}
  args = new cljs.core.IndexedSeq(G__41094__a,0,null);
} 
return G__41093__delegate.call(this,args);};
G__41093.cljs$lang$maxFixedArity = 0;
G__41093.cljs$lang$applyTo = (function (arglist__41095){
var args = cljs.core.seq(arglist__41095);
return G__41093__delegate(args);
});
G__41093.cljs$core$IFn$_invoke$arity$variadic = G__41093__delegate;
return G__41093;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__41096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__41096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41097__i = 0, G__41097__a = new Array(arguments.length -  0);
while (G__41097__i < G__41097__a.length) {G__41097__a[G__41097__i] = arguments[G__41097__i + 0]; ++G__41097__i;}
  args = new cljs.core.IndexedSeq(G__41097__a,0,null);
} 
return G__41096__delegate.call(this,args);};
G__41096.cljs$lang$maxFixedArity = 0;
G__41096.cljs$lang$applyTo = (function (arglist__41098){
var args = cljs.core.seq(arglist__41098);
return G__41096__delegate(args);
});
G__41096.cljs$core$IFn$_invoke$arity$variadic = G__41096__delegate;
return G__41096;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41099__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41100__i = 0, G__41100__a = new Array(arguments.length -  0);
while (G__41100__i < G__41100__a.length) {G__41100__a[G__41100__i] = arguments[G__41100__i + 0]; ++G__41100__i;}
  args = new cljs.core.IndexedSeq(G__41100__a,0,null);
} 
return G__41099__delegate.call(this,args);};
G__41099.cljs$lang$maxFixedArity = 0;
G__41099.cljs$lang$applyTo = (function (arglist__41101){
var args = cljs.core.seq(arglist__41101);
return G__41099__delegate(args);
});
G__41099.cljs$core$IFn$_invoke$arity$variadic = G__41099__delegate;
return G__41099;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_girl_with_pearl_earing', squiggle.core.sketch_pointillism_girl_with_pearl_earing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_girl_with_pearl_earing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-girl-with-pearl-earing"], null));
}

squiggle.core.sketch_pointillism_picasso_face = (function squiggle$core$run_sketch_$_sketch_pointillism_picasso_face(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-picasso-face",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41102__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41103__i = 0, G__41103__a = new Array(arguments.length -  0);
while (G__41103__i < G__41103__a.length) {G__41103__a[G__41103__i] = arguments[G__41103__i + 0]; ++G__41103__i;}
  args = new cljs.core.IndexedSeq(G__41103__a,0,null);
} 
return G__41102__delegate.call(this,args);};
G__41102.cljs$lang$maxFixedArity = 0;
G__41102.cljs$lang$applyTo = (function (arglist__41104){
var args = cljs.core.seq(arglist__41104);
return G__41102__delegate(args);
});
G__41102.cljs$core$IFn$_invoke$arity$variadic = G__41102__delegate;
return G__41102;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__41105__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__41105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41106__i = 0, G__41106__a = new Array(arguments.length -  0);
while (G__41106__i < G__41106__a.length) {G__41106__a[G__41106__i] = arguments[G__41106__i + 0]; ++G__41106__i;}
  args = new cljs.core.IndexedSeq(G__41106__a,0,null);
} 
return G__41105__delegate.call(this,args);};
G__41105.cljs$lang$maxFixedArity = 0;
G__41105.cljs$lang$applyTo = (function (arglist__41107){
var args = cljs.core.seq(arglist__41107);
return G__41105__delegate(args);
});
G__41105.cljs$core$IFn$_invoke$arity$variadic = G__41105__delegate;
return G__41105;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41108__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41109__i = 0, G__41109__a = new Array(arguments.length -  0);
while (G__41109__i < G__41109__a.length) {G__41109__a[G__41109__i] = arguments[G__41109__i + 0]; ++G__41109__i;}
  args = new cljs.core.IndexedSeq(G__41109__a,0,null);
} 
return G__41108__delegate.call(this,args);};
G__41108.cljs$lang$maxFixedArity = 0;
G__41108.cljs$lang$applyTo = (function (arglist__41110){
var args = cljs.core.seq(arglist__41110);
return G__41108__delegate(args);
});
G__41108.cljs$core$IFn$_invoke$arity$variadic = G__41108__delegate;
return G__41108;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_picasso_face', squiggle.core.sketch_pointillism_picasso_face);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_picasso_face,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-picasso-face"], null));
}

squiggle.core.sketch_pointillism_georges_seurat = (function squiggle$core$run_sketch_$_sketch_pointillism_georges_seurat(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism-georges-seurat",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__41111__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__41111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41112__i = 0, G__41112__a = new Array(arguments.length -  0);
while (G__41112__i < G__41112__a.length) {G__41112__a[G__41112__i] = arguments[G__41112__i + 0]; ++G__41112__i;}
  args = new cljs.core.IndexedSeq(G__41112__a,0,null);
} 
return G__41111__delegate.call(this,args);};
G__41111.cljs$lang$maxFixedArity = 0;
G__41111.cljs$lang$applyTo = (function (arglist__41113){
var args = cljs.core.seq(arglist__41113);
return G__41111__delegate(args);
});
G__41111.cljs$core$IFn$_invoke$arity$variadic = G__41111__delegate;
return G__41111;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__41114__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__41114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41115__i = 0, G__41115__a = new Array(arguments.length -  0);
while (G__41115__i < G__41115__a.length) {G__41115__a[G__41115__i] = arguments[G__41115__i + 0]; ++G__41115__i;}
  args = new cljs.core.IndexedSeq(G__41115__a,0,null);
} 
return G__41114__delegate.call(this,args);};
G__41114.cljs$lang$maxFixedArity = 0;
G__41114.cljs$lang$applyTo = (function (arglist__41116){
var args = cljs.core.seq(arglist__41116);
return G__41114__delegate(args);
});
G__41114.cljs$core$IFn$_invoke$arity$variadic = G__41114__delegate;
return G__41114;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__41117__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__41117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41118__i = 0, G__41118__a = new Array(arguments.length -  0);
while (G__41118__i < G__41118__a.length) {G__41118__a[G__41118__i] = arguments[G__41118__i + 0]; ++G__41118__i;}
  args = new cljs.core.IndexedSeq(G__41118__a,0,null);
} 
return G__41117__delegate.call(this,args);};
G__41117.cljs$lang$maxFixedArity = 0;
G__41117.cljs$lang$applyTo = (function (arglist__41119){
var args = cljs.core.seq(arglist__41119);
return G__41117__delegate(args);
});
G__41117.cljs$core$IFn$_invoke$arity$variadic = G__41117__delegate;
return G__41117;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism_georges_seurat', squiggle.core.sketch_pointillism_georges_seurat);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism_georges_seurat,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism-georges-seurat"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1527279947812
