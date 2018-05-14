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
var G__39041__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39042__i = 0, G__39042__a = new Array(arguments.length -  0);
while (G__39042__i < G__39042__a.length) {G__39042__a[G__39042__i] = arguments[G__39042__i + 0]; ++G__39042__i;}
  args = new cljs.core.IndexedSeq(G__39042__a,0,null);
} 
return G__39041__delegate.call(this,args);};
G__39041.cljs$lang$maxFixedArity = 0;
G__39041.cljs$lang$applyTo = (function (arglist__39043){
var args = cljs.core.seq(arglist__39043);
return G__39041__delegate(args);
});
G__39041.cljs$core$IFn$_invoke$arity$variadic = G__39041__delegate;
return G__39041;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39044__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39045__i = 0, G__39045__a = new Array(arguments.length -  0);
while (G__39045__i < G__39045__a.length) {G__39045__a[G__39045__i] = arguments[G__39045__i + 0]; ++G__39045__i;}
  args = new cljs.core.IndexedSeq(G__39045__a,0,null);
} 
return G__39044__delegate.call(this,args);};
G__39044.cljs$lang$maxFixedArity = 0;
G__39044.cljs$lang$applyTo = (function (arglist__39046){
var args = cljs.core.seq(arglist__39046);
return G__39044__delegate(args);
});
G__39044.cljs$core$IFn$_invoke$arity$variadic = G__39044__delegate;
return G__39044;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39047__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39048__i = 0, G__39048__a = new Array(arguments.length -  0);
while (G__39048__i < G__39048__a.length) {G__39048__a[G__39048__i] = arguments[G__39048__i + 0]; ++G__39048__i;}
  args = new cljs.core.IndexedSeq(G__39048__a,0,null);
} 
return G__39047__delegate.call(this,args);};
G__39047.cljs$lang$maxFixedArity = 0;
G__39047.cljs$lang$applyTo = (function (arglist__39049){
var args = cljs.core.seq(arglist__39049);
return G__39047__delegate(args);
});
G__39047.cljs$core$IFn$_invoke$arity$variadic = G__39047__delegate;
return G__39047;
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
var G__39050__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39051__i = 0, G__39051__a = new Array(arguments.length -  0);
while (G__39051__i < G__39051__a.length) {G__39051__a[G__39051__i] = arguments[G__39051__i + 0]; ++G__39051__i;}
  args = new cljs.core.IndexedSeq(G__39051__a,0,null);
} 
return G__39050__delegate.call(this,args);};
G__39050.cljs$lang$maxFixedArity = 0;
G__39050.cljs$lang$applyTo = (function (arglist__39052){
var args = cljs.core.seq(arglist__39052);
return G__39050__delegate(args);
});
G__39050.cljs$core$IFn$_invoke$arity$variadic = G__39050__delegate;
return G__39050;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39053__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39054__i = 0, G__39054__a = new Array(arguments.length -  0);
while (G__39054__i < G__39054__a.length) {G__39054__a[G__39054__i] = arguments[G__39054__i + 0]; ++G__39054__i;}
  args = new cljs.core.IndexedSeq(G__39054__a,0,null);
} 
return G__39053__delegate.call(this,args);};
G__39053.cljs$lang$maxFixedArity = 0;
G__39053.cljs$lang$applyTo = (function (arglist__39055){
var args = cljs.core.seq(arglist__39055);
return G__39053__delegate(args);
});
G__39053.cljs$core$IFn$_invoke$arity$variadic = G__39053__delegate;
return G__39053;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39056__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39057__i = 0, G__39057__a = new Array(arguments.length -  0);
while (G__39057__i < G__39057__a.length) {G__39057__a[G__39057__i] = arguments[G__39057__i + 0]; ++G__39057__i;}
  args = new cljs.core.IndexedSeq(G__39057__a,0,null);
} 
return G__39056__delegate.call(this,args);};
G__39056.cljs$lang$maxFixedArity = 0;
G__39056.cljs$lang$applyTo = (function (arglist__39058){
var args = cljs.core.seq(arglist__39058);
return G__39056__delegate(args);
});
G__39056.cljs$core$IFn$_invoke$arity$variadic = G__39056__delegate;
return G__39056;
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
var G__39059__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39060__i = 0, G__39060__a = new Array(arguments.length -  0);
while (G__39060__i < G__39060__a.length) {G__39060__a[G__39060__i] = arguments[G__39060__i + 0]; ++G__39060__i;}
  args = new cljs.core.IndexedSeq(G__39060__a,0,null);
} 
return G__39059__delegate.call(this,args);};
G__39059.cljs$lang$maxFixedArity = 0;
G__39059.cljs$lang$applyTo = (function (arglist__39061){
var args = cljs.core.seq(arglist__39061);
return G__39059__delegate(args);
});
G__39059.cljs$core$IFn$_invoke$arity$variadic = G__39059__delegate;
return G__39059;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39062__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39063__i = 0, G__39063__a = new Array(arguments.length -  0);
while (G__39063__i < G__39063__a.length) {G__39063__a[G__39063__i] = arguments[G__39063__i + 0]; ++G__39063__i;}
  args = new cljs.core.IndexedSeq(G__39063__a,0,null);
} 
return G__39062__delegate.call(this,args);};
G__39062.cljs$lang$maxFixedArity = 0;
G__39062.cljs$lang$applyTo = (function (arglist__39064){
var args = cljs.core.seq(arglist__39064);
return G__39062__delegate(args);
});
G__39062.cljs$core$IFn$_invoke$arity$variadic = G__39062__delegate;
return G__39062;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39065__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39066__i = 0, G__39066__a = new Array(arguments.length -  0);
while (G__39066__i < G__39066__a.length) {G__39066__a[G__39066__i] = arguments[G__39066__i + 0]; ++G__39066__i;}
  args = new cljs.core.IndexedSeq(G__39066__a,0,null);
} 
return G__39065__delegate.call(this,args);};
G__39065.cljs$lang$maxFixedArity = 0;
G__39065.cljs$lang$applyTo = (function (arglist__39067){
var args = cljs.core.seq(arglist__39067);
return G__39065__delegate(args);
});
G__39065.cljs$core$IFn$_invoke$arity$variadic = G__39065__delegate;
return G__39065;
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
var G__39068__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39069__i = 0, G__39069__a = new Array(arguments.length -  0);
while (G__39069__i < G__39069__a.length) {G__39069__a[G__39069__i] = arguments[G__39069__i + 0]; ++G__39069__i;}
  args = new cljs.core.IndexedSeq(G__39069__a,0,null);
} 
return G__39068__delegate.call(this,args);};
G__39068.cljs$lang$maxFixedArity = 0;
G__39068.cljs$lang$applyTo = (function (arglist__39070){
var args = cljs.core.seq(arglist__39070);
return G__39068__delegate(args);
});
G__39068.cljs$core$IFn$_invoke$arity$variadic = G__39068__delegate;
return G__39068;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39071__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39072__i = 0, G__39072__a = new Array(arguments.length -  0);
while (G__39072__i < G__39072__a.length) {G__39072__a[G__39072__i] = arguments[G__39072__i + 0]; ++G__39072__i;}
  args = new cljs.core.IndexedSeq(G__39072__a,0,null);
} 
return G__39071__delegate.call(this,args);};
G__39071.cljs$lang$maxFixedArity = 0;
G__39071.cljs$lang$applyTo = (function (arglist__39073){
var args = cljs.core.seq(arglist__39073);
return G__39071__delegate(args);
});
G__39071.cljs$core$IFn$_invoke$arity$variadic = G__39071__delegate;
return G__39071;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39074__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39075__i = 0, G__39075__a = new Array(arguments.length -  0);
while (G__39075__i < G__39075__a.length) {G__39075__a[G__39075__i] = arguments[G__39075__i + 0]; ++G__39075__i;}
  args = new cljs.core.IndexedSeq(G__39075__a,0,null);
} 
return G__39074__delegate.call(this,args);};
G__39074.cljs$lang$maxFixedArity = 0;
G__39074.cljs$lang$applyTo = (function (arglist__39076){
var args = cljs.core.seq(arglist__39076);
return G__39074__delegate(args);
});
G__39074.cljs$core$IFn$_invoke$arity$variadic = G__39074__delegate;
return G__39074;
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

squiggle.core.sketch_pointillism = (function squiggle$core$run_sketch_$_sketch_pointillism(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pointillism",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.update_state))?(function() { 
var G__39077__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39078__i = 0, G__39078__a = new Array(arguments.length -  0);
while (G__39078__i < G__39078__a.length) {G__39078__a[G__39078__i] = arguments[G__39078__i + 0]; ++G__39078__i;}
  args = new cljs.core.IndexedSeq(G__39078__a,0,null);
} 
return G__39077__delegate.call(this,args);};
G__39077.cljs$lang$maxFixedArity = 0;
G__39077.cljs$lang$applyTo = (function (arglist__39079){
var args = cljs.core.seq(arglist__39079);
return G__39077__delegate(args);
});
G__39077.cljs$core$IFn$_invoke$arity$variadic = G__39077__delegate;
return G__39077;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39080__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39081__i = 0, G__39081__a = new Array(arguments.length -  0);
while (G__39081__i < G__39081__a.length) {G__39081__a[G__39081__i] = arguments[G__39081__i + 0]; ++G__39081__i;}
  args = new cljs.core.IndexedSeq(G__39081__a,0,null);
} 
return G__39080__delegate.call(this,args);};
G__39080.cljs$lang$maxFixedArity = 0;
G__39080.cljs$lang$applyTo = (function (arglist__39082){
var args = cljs.core.seq(arglist__39082);
return G__39080__delegate(args);
});
G__39080.cljs$core$IFn$_invoke$arity$variadic = G__39080__delegate;
return G__39080;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39083__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39084__i = 0, G__39084__a = new Array(arguments.length -  0);
while (G__39084__i < G__39084__a.length) {G__39084__a[G__39084__i] = arguments[G__39084__i + 0]; ++G__39084__i;}
  args = new cljs.core.IndexedSeq(G__39084__a,0,null);
} 
return G__39083__delegate.call(this,args);};
G__39083.cljs$lang$maxFixedArity = 0;
G__39083.cljs$lang$applyTo = (function (arglist__39085){
var args = cljs.core.seq(arglist__39085);
return G__39083__delegate(args);
});
G__39083.cljs$core$IFn$_invoke$arity$variadic = G__39083__delegate;
return G__39083;
})()
:squiggle.pointillism.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_pointillism', squiggle.core.sketch_pointillism);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_pointillism,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pointillism"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526326893347
