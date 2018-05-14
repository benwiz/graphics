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
var G__52054__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__52054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52055__i = 0, G__52055__a = new Array(arguments.length -  0);
while (G__52055__i < G__52055__a.length) {G__52055__a[G__52055__i] = arguments[G__52055__i + 0]; ++G__52055__i;}
  args = new cljs.core.IndexedSeq(G__52055__a,0,null);
} 
return G__52054__delegate.call(this,args);};
G__52054.cljs$lang$maxFixedArity = 0;
G__52054.cljs$lang$applyTo = (function (arglist__52056){
var args = cljs.core.seq(arglist__52056);
return G__52054__delegate(args);
});
G__52054.cljs$core$IFn$_invoke$arity$variadic = G__52054__delegate;
return G__52054;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__52057__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__52057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52058__i = 0, G__52058__a = new Array(arguments.length -  0);
while (G__52058__i < G__52058__a.length) {G__52058__a[G__52058__i] = arguments[G__52058__i + 0]; ++G__52058__i;}
  args = new cljs.core.IndexedSeq(G__52058__a,0,null);
} 
return G__52057__delegate.call(this,args);};
G__52057.cljs$lang$maxFixedArity = 0;
G__52057.cljs$lang$applyTo = (function (arglist__52059){
var args = cljs.core.seq(arglist__52059);
return G__52057__delegate(args);
});
G__52057.cljs$core$IFn$_invoke$arity$variadic = G__52057__delegate;
return G__52057;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__52060__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__52060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52061__i = 0, G__52061__a = new Array(arguments.length -  0);
while (G__52061__i < G__52061__a.length) {G__52061__a[G__52061__i] = arguments[G__52061__i + 0]; ++G__52061__i;}
  args = new cljs.core.IndexedSeq(G__52061__a,0,null);
} 
return G__52060__delegate.call(this,args);};
G__52060.cljs$lang$maxFixedArity = 0;
G__52060.cljs$lang$applyTo = (function (arglist__52062){
var args = cljs.core.seq(arglist__52062);
return G__52060__delegate(args);
});
G__52060.cljs$core$IFn$_invoke$arity$variadic = G__52060__delegate;
return G__52060;
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
var G__52063__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__52063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52064__i = 0, G__52064__a = new Array(arguments.length -  0);
while (G__52064__i < G__52064__a.length) {G__52064__a[G__52064__i] = arguments[G__52064__i + 0]; ++G__52064__i;}
  args = new cljs.core.IndexedSeq(G__52064__a,0,null);
} 
return G__52063__delegate.call(this,args);};
G__52063.cljs$lang$maxFixedArity = 0;
G__52063.cljs$lang$applyTo = (function (arglist__52065){
var args = cljs.core.seq(arglist__52065);
return G__52063__delegate(args);
});
G__52063.cljs$core$IFn$_invoke$arity$variadic = G__52063__delegate;
return G__52063;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__52066__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__52066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52067__i = 0, G__52067__a = new Array(arguments.length -  0);
while (G__52067__i < G__52067__a.length) {G__52067__a[G__52067__i] = arguments[G__52067__i + 0]; ++G__52067__i;}
  args = new cljs.core.IndexedSeq(G__52067__a,0,null);
} 
return G__52066__delegate.call(this,args);};
G__52066.cljs$lang$maxFixedArity = 0;
G__52066.cljs$lang$applyTo = (function (arglist__52068){
var args = cljs.core.seq(arglist__52068);
return G__52066__delegate(args);
});
G__52066.cljs$core$IFn$_invoke$arity$variadic = G__52066__delegate;
return G__52066;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__52069__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__52069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52070__i = 0, G__52070__a = new Array(arguments.length -  0);
while (G__52070__i < G__52070__a.length) {G__52070__a[G__52070__i] = arguments[G__52070__i + 0]; ++G__52070__i;}
  args = new cljs.core.IndexedSeq(G__52070__a,0,null);
} 
return G__52069__delegate.call(this,args);};
G__52069.cljs$lang$maxFixedArity = 0;
G__52069.cljs$lang$applyTo = (function (arglist__52071){
var args = cljs.core.seq(arglist__52071);
return G__52069__delegate(args);
});
G__52069.cljs$core$IFn$_invoke$arity$variadic = G__52069__delegate;
return G__52069;
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
var G__52072__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__52072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52073__i = 0, G__52073__a = new Array(arguments.length -  0);
while (G__52073__i < G__52073__a.length) {G__52073__a[G__52073__i] = arguments[G__52073__i + 0]; ++G__52073__i;}
  args = new cljs.core.IndexedSeq(G__52073__a,0,null);
} 
return G__52072__delegate.call(this,args);};
G__52072.cljs$lang$maxFixedArity = 0;
G__52072.cljs$lang$applyTo = (function (arglist__52074){
var args = cljs.core.seq(arglist__52074);
return G__52072__delegate(args);
});
G__52072.cljs$core$IFn$_invoke$arity$variadic = G__52072__delegate;
return G__52072;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__52075__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__52075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52076__i = 0, G__52076__a = new Array(arguments.length -  0);
while (G__52076__i < G__52076__a.length) {G__52076__a[G__52076__i] = arguments[G__52076__i + 0]; ++G__52076__i;}
  args = new cljs.core.IndexedSeq(G__52076__a,0,null);
} 
return G__52075__delegate.call(this,args);};
G__52075.cljs$lang$maxFixedArity = 0;
G__52075.cljs$lang$applyTo = (function (arglist__52077){
var args = cljs.core.seq(arglist__52077);
return G__52075__delegate(args);
});
G__52075.cljs$core$IFn$_invoke$arity$variadic = G__52075__delegate;
return G__52075;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__52078__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__52078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52079__i = 0, G__52079__a = new Array(arguments.length -  0);
while (G__52079__i < G__52079__a.length) {G__52079__a[G__52079__i] = arguments[G__52079__i + 0]; ++G__52079__i;}
  args = new cljs.core.IndexedSeq(G__52079__a,0,null);
} 
return G__52078__delegate.call(this,args);};
G__52078.cljs$lang$maxFixedArity = 0;
G__52078.cljs$lang$applyTo = (function (arglist__52080){
var args = cljs.core.seq(arglist__52080);
return G__52078__delegate(args);
});
G__52078.cljs$core$IFn$_invoke$arity$variadic = G__52078__delegate;
return G__52078;
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
var G__52081__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__52081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52082__i = 0, G__52082__a = new Array(arguments.length -  0);
while (G__52082__i < G__52082__a.length) {G__52082__a[G__52082__i] = arguments[G__52082__i + 0]; ++G__52082__i;}
  args = new cljs.core.IndexedSeq(G__52082__a,0,null);
} 
return G__52081__delegate.call(this,args);};
G__52081.cljs$lang$maxFixedArity = 0;
G__52081.cljs$lang$applyTo = (function (arglist__52083){
var args = cljs.core.seq(arglist__52083);
return G__52081__delegate(args);
});
G__52081.cljs$core$IFn$_invoke$arity$variadic = G__52081__delegate;
return G__52081;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__52084__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__52084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52085__i = 0, G__52085__a = new Array(arguments.length -  0);
while (G__52085__i < G__52085__a.length) {G__52085__a[G__52085__i] = arguments[G__52085__i + 0]; ++G__52085__i;}
  args = new cljs.core.IndexedSeq(G__52085__a,0,null);
} 
return G__52084__delegate.call(this,args);};
G__52084.cljs$lang$maxFixedArity = 0;
G__52084.cljs$lang$applyTo = (function (arglist__52086){
var args = cljs.core.seq(arglist__52086);
return G__52084__delegate(args);
});
G__52084.cljs$core$IFn$_invoke$arity$variadic = G__52084__delegate;
return G__52084;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__52087__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__52087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52088__i = 0, G__52088__a = new Array(arguments.length -  0);
while (G__52088__i < G__52088__a.length) {G__52088__a[G__52088__i] = arguments[G__52088__i + 0]; ++G__52088__i;}
  args = new cljs.core.IndexedSeq(G__52088__a,0,null);
} 
return G__52087__delegate.call(this,args);};
G__52087.cljs$lang$maxFixedArity = 0;
G__52087.cljs$lang$applyTo = (function (arglist__52089){
var args = cljs.core.seq(arglist__52089);
return G__52087__delegate(args);
});
G__52087.cljs$core$IFn$_invoke$arity$variadic = G__52087__delegate;
return G__52087;
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
var G__52090__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__52090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52091__i = 0, G__52091__a = new Array(arguments.length -  0);
while (G__52091__i < G__52091__a.length) {G__52091__a[G__52091__i] = arguments[G__52091__i + 0]; ++G__52091__i;}
  args = new cljs.core.IndexedSeq(G__52091__a,0,null);
} 
return G__52090__delegate.call(this,args);};
G__52090.cljs$lang$maxFixedArity = 0;
G__52090.cljs$lang$applyTo = (function (arglist__52092){
var args = cljs.core.seq(arglist__52092);
return G__52090__delegate(args);
});
G__52090.cljs$core$IFn$_invoke$arity$variadic = G__52090__delegate;
return G__52090;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__52093__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__52093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52094__i = 0, G__52094__a = new Array(arguments.length -  0);
while (G__52094__i < G__52094__a.length) {G__52094__a[G__52094__i] = arguments[G__52094__i + 0]; ++G__52094__i;}
  args = new cljs.core.IndexedSeq(G__52094__a,0,null);
} 
return G__52093__delegate.call(this,args);};
G__52093.cljs$lang$maxFixedArity = 0;
G__52093.cljs$lang$applyTo = (function (arglist__52095){
var args = cljs.core.seq(arglist__52095);
return G__52093__delegate(args);
});
G__52093.cljs$core$IFn$_invoke$arity$variadic = G__52093__delegate;
return G__52093;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__52096__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__52096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52097__i = 0, G__52097__a = new Array(arguments.length -  0);
while (G__52097__i < G__52097__a.length) {G__52097__a[G__52097__i] = arguments[G__52097__i + 0]; ++G__52097__i;}
  args = new cljs.core.IndexedSeq(G__52097__a,0,null);
} 
return G__52096__delegate.call(this,args);};
G__52096.cljs$lang$maxFixedArity = 0;
G__52096.cljs$lang$applyTo = (function (arglist__52098){
var args = cljs.core.seq(arglist__52098);
return G__52096__delegate(args);
});
G__52096.cljs$core$IFn$_invoke$arity$variadic = G__52096__delegate;
return G__52096;
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

//# sourceMappingURL=core.js.map?rel=1526263241001
