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
var G__52202__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__52202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52203__i = 0, G__52203__a = new Array(arguments.length -  0);
while (G__52203__i < G__52203__a.length) {G__52203__a[G__52203__i] = arguments[G__52203__i + 0]; ++G__52203__i;}
  args = new cljs.core.IndexedSeq(G__52203__a,0,null);
} 
return G__52202__delegate.call(this,args);};
G__52202.cljs$lang$maxFixedArity = 0;
G__52202.cljs$lang$applyTo = (function (arglist__52204){
var args = cljs.core.seq(arglist__52204);
return G__52202__delegate(args);
});
G__52202.cljs$core$IFn$_invoke$arity$variadic = G__52202__delegate;
return G__52202;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__52205__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__52205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52206__i = 0, G__52206__a = new Array(arguments.length -  0);
while (G__52206__i < G__52206__a.length) {G__52206__a[G__52206__i] = arguments[G__52206__i + 0]; ++G__52206__i;}
  args = new cljs.core.IndexedSeq(G__52206__a,0,null);
} 
return G__52205__delegate.call(this,args);};
G__52205.cljs$lang$maxFixedArity = 0;
G__52205.cljs$lang$applyTo = (function (arglist__52207){
var args = cljs.core.seq(arglist__52207);
return G__52205__delegate(args);
});
G__52205.cljs$core$IFn$_invoke$arity$variadic = G__52205__delegate;
return G__52205;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__52208__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__52208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52209__i = 0, G__52209__a = new Array(arguments.length -  0);
while (G__52209__i < G__52209__a.length) {G__52209__a[G__52209__i] = arguments[G__52209__i + 0]; ++G__52209__i;}
  args = new cljs.core.IndexedSeq(G__52209__a,0,null);
} 
return G__52208__delegate.call(this,args);};
G__52208.cljs$lang$maxFixedArity = 0;
G__52208.cljs$lang$applyTo = (function (arglist__52210){
var args = cljs.core.seq(arglist__52210);
return G__52208__delegate(args);
});
G__52208.cljs$core$IFn$_invoke$arity$variadic = G__52208__delegate;
return G__52208;
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
var G__52211__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__52211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52212__i = 0, G__52212__a = new Array(arguments.length -  0);
while (G__52212__i < G__52212__a.length) {G__52212__a[G__52212__i] = arguments[G__52212__i + 0]; ++G__52212__i;}
  args = new cljs.core.IndexedSeq(G__52212__a,0,null);
} 
return G__52211__delegate.call(this,args);};
G__52211.cljs$lang$maxFixedArity = 0;
G__52211.cljs$lang$applyTo = (function (arglist__52213){
var args = cljs.core.seq(arglist__52213);
return G__52211__delegate(args);
});
G__52211.cljs$core$IFn$_invoke$arity$variadic = G__52211__delegate;
return G__52211;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__52214__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__52214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52215__i = 0, G__52215__a = new Array(arguments.length -  0);
while (G__52215__i < G__52215__a.length) {G__52215__a[G__52215__i] = arguments[G__52215__i + 0]; ++G__52215__i;}
  args = new cljs.core.IndexedSeq(G__52215__a,0,null);
} 
return G__52214__delegate.call(this,args);};
G__52214.cljs$lang$maxFixedArity = 0;
G__52214.cljs$lang$applyTo = (function (arglist__52216){
var args = cljs.core.seq(arglist__52216);
return G__52214__delegate(args);
});
G__52214.cljs$core$IFn$_invoke$arity$variadic = G__52214__delegate;
return G__52214;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__52217__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__52217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52218__i = 0, G__52218__a = new Array(arguments.length -  0);
while (G__52218__i < G__52218__a.length) {G__52218__a[G__52218__i] = arguments[G__52218__i + 0]; ++G__52218__i;}
  args = new cljs.core.IndexedSeq(G__52218__a,0,null);
} 
return G__52217__delegate.call(this,args);};
G__52217.cljs$lang$maxFixedArity = 0;
G__52217.cljs$lang$applyTo = (function (arglist__52219){
var args = cljs.core.seq(arglist__52219);
return G__52217__delegate(args);
});
G__52217.cljs$core$IFn$_invoke$arity$variadic = G__52217__delegate;
return G__52217;
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
var G__52220__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__52220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52221__i = 0, G__52221__a = new Array(arguments.length -  0);
while (G__52221__i < G__52221__a.length) {G__52221__a[G__52221__i] = arguments[G__52221__i + 0]; ++G__52221__i;}
  args = new cljs.core.IndexedSeq(G__52221__a,0,null);
} 
return G__52220__delegate.call(this,args);};
G__52220.cljs$lang$maxFixedArity = 0;
G__52220.cljs$lang$applyTo = (function (arglist__52222){
var args = cljs.core.seq(arglist__52222);
return G__52220__delegate(args);
});
G__52220.cljs$core$IFn$_invoke$arity$variadic = G__52220__delegate;
return G__52220;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__52223__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__52223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52224__i = 0, G__52224__a = new Array(arguments.length -  0);
while (G__52224__i < G__52224__a.length) {G__52224__a[G__52224__i] = arguments[G__52224__i + 0]; ++G__52224__i;}
  args = new cljs.core.IndexedSeq(G__52224__a,0,null);
} 
return G__52223__delegate.call(this,args);};
G__52223.cljs$lang$maxFixedArity = 0;
G__52223.cljs$lang$applyTo = (function (arglist__52225){
var args = cljs.core.seq(arglist__52225);
return G__52223__delegate(args);
});
G__52223.cljs$core$IFn$_invoke$arity$variadic = G__52223__delegate;
return G__52223;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__52226__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__52226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52227__i = 0, G__52227__a = new Array(arguments.length -  0);
while (G__52227__i < G__52227__a.length) {G__52227__a[G__52227__i] = arguments[G__52227__i + 0]; ++G__52227__i;}
  args = new cljs.core.IndexedSeq(G__52227__a,0,null);
} 
return G__52226__delegate.call(this,args);};
G__52226.cljs$lang$maxFixedArity = 0;
G__52226.cljs$lang$applyTo = (function (arglist__52228){
var args = cljs.core.seq(arglist__52228);
return G__52226__delegate(args);
});
G__52226.cljs$core$IFn$_invoke$arity$variadic = G__52226__delegate;
return G__52226;
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
var G__52229__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__52229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52230__i = 0, G__52230__a = new Array(arguments.length -  0);
while (G__52230__i < G__52230__a.length) {G__52230__a[G__52230__i] = arguments[G__52230__i + 0]; ++G__52230__i;}
  args = new cljs.core.IndexedSeq(G__52230__a,0,null);
} 
return G__52229__delegate.call(this,args);};
G__52229.cljs$lang$maxFixedArity = 0;
G__52229.cljs$lang$applyTo = (function (arglist__52231){
var args = cljs.core.seq(arglist__52231);
return G__52229__delegate(args);
});
G__52229.cljs$core$IFn$_invoke$arity$variadic = G__52229__delegate;
return G__52229;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__52232__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__52232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52233__i = 0, G__52233__a = new Array(arguments.length -  0);
while (G__52233__i < G__52233__a.length) {G__52233__a[G__52233__i] = arguments[G__52233__i + 0]; ++G__52233__i;}
  args = new cljs.core.IndexedSeq(G__52233__a,0,null);
} 
return G__52232__delegate.call(this,args);};
G__52232.cljs$lang$maxFixedArity = 0;
G__52232.cljs$lang$applyTo = (function (arglist__52234){
var args = cljs.core.seq(arglist__52234);
return G__52232__delegate(args);
});
G__52232.cljs$core$IFn$_invoke$arity$variadic = G__52232__delegate;
return G__52232;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__52235__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__52235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52236__i = 0, G__52236__a = new Array(arguments.length -  0);
while (G__52236__i < G__52236__a.length) {G__52236__a[G__52236__i] = arguments[G__52236__i + 0]; ++G__52236__i;}
  args = new cljs.core.IndexedSeq(G__52236__a,0,null);
} 
return G__52235__delegate.call(this,args);};
G__52235.cljs$lang$maxFixedArity = 0;
G__52235.cljs$lang$applyTo = (function (arglist__52237){
var args = cljs.core.seq(arglist__52237);
return G__52235__delegate(args);
});
G__52235.cljs$core$IFn$_invoke$arity$variadic = G__52235__delegate;
return G__52235;
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
var G__52238__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__52238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52239__i = 0, G__52239__a = new Array(arguments.length -  0);
while (G__52239__i < G__52239__a.length) {G__52239__a[G__52239__i] = arguments[G__52239__i + 0]; ++G__52239__i;}
  args = new cljs.core.IndexedSeq(G__52239__a,0,null);
} 
return G__52238__delegate.call(this,args);};
G__52238.cljs$lang$maxFixedArity = 0;
G__52238.cljs$lang$applyTo = (function (arglist__52240){
var args = cljs.core.seq(arglist__52240);
return G__52238__delegate(args);
});
G__52238.cljs$core$IFn$_invoke$arity$variadic = G__52238__delegate;
return G__52238;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__52241__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__52241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52242__i = 0, G__52242__a = new Array(arguments.length -  0);
while (G__52242__i < G__52242__a.length) {G__52242__a[G__52242__i] = arguments[G__52242__i + 0]; ++G__52242__i;}
  args = new cljs.core.IndexedSeq(G__52242__a,0,null);
} 
return G__52241__delegate.call(this,args);};
G__52241.cljs$lang$maxFixedArity = 0;
G__52241.cljs$lang$applyTo = (function (arglist__52243){
var args = cljs.core.seq(arglist__52243);
return G__52241__delegate(args);
});
G__52241.cljs$core$IFn$_invoke$arity$variadic = G__52241__delegate;
return G__52241;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__52244__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__52244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52245__i = 0, G__52245__a = new Array(arguments.length -  0);
while (G__52245__i < G__52245__a.length) {G__52245__a[G__52245__i] = arguments[G__52245__i + 0]; ++G__52245__i;}
  args = new cljs.core.IndexedSeq(G__52245__a,0,null);
} 
return G__52244__delegate.call(this,args);};
G__52244.cljs$lang$maxFixedArity = 0;
G__52244.cljs$lang$applyTo = (function (arglist__52246){
var args = cljs.core.seq(arglist__52246);
return G__52244__delegate(args);
});
G__52244.cljs$core$IFn$_invoke$arity$variadic = G__52244__delegate;
return G__52244;
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

//# sourceMappingURL=core.js.map?rel=1526263426221
