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
var G__39090__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39091__i = 0, G__39091__a = new Array(arguments.length -  0);
while (G__39091__i < G__39091__a.length) {G__39091__a[G__39091__i] = arguments[G__39091__i + 0]; ++G__39091__i;}
  args = new cljs.core.IndexedSeq(G__39091__a,0,null);
} 
return G__39090__delegate.call(this,args);};
G__39090.cljs$lang$maxFixedArity = 0;
G__39090.cljs$lang$applyTo = (function (arglist__39092){
var args = cljs.core.seq(arglist__39092);
return G__39090__delegate(args);
});
G__39090.cljs$core$IFn$_invoke$arity$variadic = G__39090__delegate;
return G__39090;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39094__i = 0, G__39094__a = new Array(arguments.length -  0);
while (G__39094__i < G__39094__a.length) {G__39094__a[G__39094__i] = arguments[G__39094__i + 0]; ++G__39094__i;}
  args = new cljs.core.IndexedSeq(G__39094__a,0,null);
} 
return G__39093__delegate.call(this,args);};
G__39093.cljs$lang$maxFixedArity = 0;
G__39093.cljs$lang$applyTo = (function (arglist__39095){
var args = cljs.core.seq(arglist__39095);
return G__39093__delegate(args);
});
G__39093.cljs$core$IFn$_invoke$arity$variadic = G__39093__delegate;
return G__39093;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39097__i = 0, G__39097__a = new Array(arguments.length -  0);
while (G__39097__i < G__39097__a.length) {G__39097__a[G__39097__i] = arguments[G__39097__i + 0]; ++G__39097__i;}
  args = new cljs.core.IndexedSeq(G__39097__a,0,null);
} 
return G__39096__delegate.call(this,args);};
G__39096.cljs$lang$maxFixedArity = 0;
G__39096.cljs$lang$applyTo = (function (arglist__39098){
var args = cljs.core.seq(arglist__39098);
return G__39096__delegate(args);
});
G__39096.cljs$core$IFn$_invoke$arity$variadic = G__39096__delegate;
return G__39096;
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
var G__39099__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39100__i = 0, G__39100__a = new Array(arguments.length -  0);
while (G__39100__i < G__39100__a.length) {G__39100__a[G__39100__i] = arguments[G__39100__i + 0]; ++G__39100__i;}
  args = new cljs.core.IndexedSeq(G__39100__a,0,null);
} 
return G__39099__delegate.call(this,args);};
G__39099.cljs$lang$maxFixedArity = 0;
G__39099.cljs$lang$applyTo = (function (arglist__39101){
var args = cljs.core.seq(arglist__39101);
return G__39099__delegate(args);
});
G__39099.cljs$core$IFn$_invoke$arity$variadic = G__39099__delegate;
return G__39099;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39102__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39103__i = 0, G__39103__a = new Array(arguments.length -  0);
while (G__39103__i < G__39103__a.length) {G__39103__a[G__39103__i] = arguments[G__39103__i + 0]; ++G__39103__i;}
  args = new cljs.core.IndexedSeq(G__39103__a,0,null);
} 
return G__39102__delegate.call(this,args);};
G__39102.cljs$lang$maxFixedArity = 0;
G__39102.cljs$lang$applyTo = (function (arglist__39104){
var args = cljs.core.seq(arglist__39104);
return G__39102__delegate(args);
});
G__39102.cljs$core$IFn$_invoke$arity$variadic = G__39102__delegate;
return G__39102;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39105__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39106__i = 0, G__39106__a = new Array(arguments.length -  0);
while (G__39106__i < G__39106__a.length) {G__39106__a[G__39106__i] = arguments[G__39106__i + 0]; ++G__39106__i;}
  args = new cljs.core.IndexedSeq(G__39106__a,0,null);
} 
return G__39105__delegate.call(this,args);};
G__39105.cljs$lang$maxFixedArity = 0;
G__39105.cljs$lang$applyTo = (function (arglist__39107){
var args = cljs.core.seq(arglist__39107);
return G__39105__delegate(args);
});
G__39105.cljs$core$IFn$_invoke$arity$variadic = G__39105__delegate;
return G__39105;
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
var G__39108__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39109__i = 0, G__39109__a = new Array(arguments.length -  0);
while (G__39109__i < G__39109__a.length) {G__39109__a[G__39109__i] = arguments[G__39109__i + 0]; ++G__39109__i;}
  args = new cljs.core.IndexedSeq(G__39109__a,0,null);
} 
return G__39108__delegate.call(this,args);};
G__39108.cljs$lang$maxFixedArity = 0;
G__39108.cljs$lang$applyTo = (function (arglist__39110){
var args = cljs.core.seq(arglist__39110);
return G__39108__delegate(args);
});
G__39108.cljs$core$IFn$_invoke$arity$variadic = G__39108__delegate;
return G__39108;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39111__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39112__i = 0, G__39112__a = new Array(arguments.length -  0);
while (G__39112__i < G__39112__a.length) {G__39112__a[G__39112__i] = arguments[G__39112__i + 0]; ++G__39112__i;}
  args = new cljs.core.IndexedSeq(G__39112__a,0,null);
} 
return G__39111__delegate.call(this,args);};
G__39111.cljs$lang$maxFixedArity = 0;
G__39111.cljs$lang$applyTo = (function (arglist__39113){
var args = cljs.core.seq(arglist__39113);
return G__39111__delegate(args);
});
G__39111.cljs$core$IFn$_invoke$arity$variadic = G__39111__delegate;
return G__39111;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39114__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39115__i = 0, G__39115__a = new Array(arguments.length -  0);
while (G__39115__i < G__39115__a.length) {G__39115__a[G__39115__i] = arguments[G__39115__i + 0]; ++G__39115__i;}
  args = new cljs.core.IndexedSeq(G__39115__a,0,null);
} 
return G__39114__delegate.call(this,args);};
G__39114.cljs$lang$maxFixedArity = 0;
G__39114.cljs$lang$applyTo = (function (arglist__39116){
var args = cljs.core.seq(arglist__39116);
return G__39114__delegate(args);
});
G__39114.cljs$core$IFn$_invoke$arity$variadic = G__39114__delegate;
return G__39114;
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
var G__39117__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39118__i = 0, G__39118__a = new Array(arguments.length -  0);
while (G__39118__i < G__39118__a.length) {G__39118__a[G__39118__i] = arguments[G__39118__i + 0]; ++G__39118__i;}
  args = new cljs.core.IndexedSeq(G__39118__a,0,null);
} 
return G__39117__delegate.call(this,args);};
G__39117.cljs$lang$maxFixedArity = 0;
G__39117.cljs$lang$applyTo = (function (arglist__39119){
var args = cljs.core.seq(arglist__39119);
return G__39117__delegate(args);
});
G__39117.cljs$core$IFn$_invoke$arity$variadic = G__39117__delegate;
return G__39117;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39120__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39121__i = 0, G__39121__a = new Array(arguments.length -  0);
while (G__39121__i < G__39121__a.length) {G__39121__a[G__39121__i] = arguments[G__39121__i + 0]; ++G__39121__i;}
  args = new cljs.core.IndexedSeq(G__39121__a,0,null);
} 
return G__39120__delegate.call(this,args);};
G__39120.cljs$lang$maxFixedArity = 0;
G__39120.cljs$lang$applyTo = (function (arglist__39122){
var args = cljs.core.seq(arglist__39122);
return G__39120__delegate(args);
});
G__39120.cljs$core$IFn$_invoke$arity$variadic = G__39120__delegate;
return G__39120;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39123__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39124__i = 0, G__39124__a = new Array(arguments.length -  0);
while (G__39124__i < G__39124__a.length) {G__39124__a[G__39124__i] = arguments[G__39124__i + 0]; ++G__39124__i;}
  args = new cljs.core.IndexedSeq(G__39124__a,0,null);
} 
return G__39123__delegate.call(this,args);};
G__39123.cljs$lang$maxFixedArity = 0;
G__39123.cljs$lang$applyTo = (function (arglist__39125){
var args = cljs.core.seq(arglist__39125);
return G__39123__delegate(args);
});
G__39123.cljs$core$IFn$_invoke$arity$variadic = G__39123__delegate;
return G__39123;
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
var G__39126__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39127__i = 0, G__39127__a = new Array(arguments.length -  0);
while (G__39127__i < G__39127__a.length) {G__39127__a[G__39127__i] = arguments[G__39127__i + 0]; ++G__39127__i;}
  args = new cljs.core.IndexedSeq(G__39127__a,0,null);
} 
return G__39126__delegate.call(this,args);};
G__39126.cljs$lang$maxFixedArity = 0;
G__39126.cljs$lang$applyTo = (function (arglist__39128){
var args = cljs.core.seq(arglist__39128);
return G__39126__delegate(args);
});
G__39126.cljs$core$IFn$_invoke$arity$variadic = G__39126__delegate;
return G__39126;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39129__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39130__i = 0, G__39130__a = new Array(arguments.length -  0);
while (G__39130__i < G__39130__a.length) {G__39130__a[G__39130__i] = arguments[G__39130__i + 0]; ++G__39130__i;}
  args = new cljs.core.IndexedSeq(G__39130__a,0,null);
} 
return G__39129__delegate.call(this,args);};
G__39129.cljs$lang$maxFixedArity = 0;
G__39129.cljs$lang$applyTo = (function (arglist__39131){
var args = cljs.core.seq(arglist__39131);
return G__39129__delegate(args);
});
G__39129.cljs$core$IFn$_invoke$arity$variadic = G__39129__delegate;
return G__39129;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39132__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39133__i = 0, G__39133__a = new Array(arguments.length -  0);
while (G__39133__i < G__39133__a.length) {G__39133__a[G__39133__i] = arguments[G__39133__i + 0]; ++G__39133__i;}
  args = new cljs.core.IndexedSeq(G__39133__a,0,null);
} 
return G__39132__delegate.call(this,args);};
G__39132.cljs$lang$maxFixedArity = 0;
G__39132.cljs$lang$applyTo = (function (arglist__39134){
var args = cljs.core.seq(arglist__39134);
return G__39132__delegate(args);
});
G__39132.cljs$core$IFn$_invoke$arity$variadic = G__39132__delegate;
return G__39132;
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

//# sourceMappingURL=core.js.map?rel=1526325508727
