// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squiggle.ten_print_remake');
goog.require('squiggle.solar_system');
goog.require('squiggle.game_of_life');
goog.require('squiggle.tentacles');
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.sketch_ten_print_remake = (function squiggle$core$run_sketch_$_sketch_ten_print_remake(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ten-print-remake",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.update_state))?(function() { 
var G__43893__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__43893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43894__i = 0, G__43894__a = new Array(arguments.length -  0);
while (G__43894__i < G__43894__a.length) {G__43894__a[G__43894__i] = arguments[G__43894__i + 0]; ++G__43894__i;}
  args = new cljs.core.IndexedSeq(G__43894__a,0,null);
} 
return G__43893__delegate.call(this,args);};
G__43893.cljs$lang$maxFixedArity = 0;
G__43893.cljs$lang$applyTo = (function (arglist__43895){
var args = cljs.core.seq(arglist__43895);
return G__43893__delegate(args);
});
G__43893.cljs$core$IFn$_invoke$arity$variadic = G__43893__delegate;
return G__43893;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__43896__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__43896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43897__i = 0, G__43897__a = new Array(arguments.length -  0);
while (G__43897__i < G__43897__a.length) {G__43897__a[G__43897__i] = arguments[G__43897__i + 0]; ++G__43897__i;}
  args = new cljs.core.IndexedSeq(G__43897__a,0,null);
} 
return G__43896__delegate.call(this,args);};
G__43896.cljs$lang$maxFixedArity = 0;
G__43896.cljs$lang$applyTo = (function (arglist__43898){
var args = cljs.core.seq(arglist__43898);
return G__43896__delegate(args);
});
G__43896.cljs$core$IFn$_invoke$arity$variadic = G__43896__delegate;
return G__43896;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__43899__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__43899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43900__i = 0, G__43900__a = new Array(arguments.length -  0);
while (G__43900__i < G__43900__a.length) {G__43900__a[G__43900__i] = arguments[G__43900__i + 0]; ++G__43900__i;}
  args = new cljs.core.IndexedSeq(G__43900__a,0,null);
} 
return G__43899__delegate.call(this,args);};
G__43899.cljs$lang$maxFixedArity = 0;
G__43899.cljs$lang$applyTo = (function (arglist__43901){
var args = cljs.core.seq(arglist__43901);
return G__43899__delegate(args);
});
G__43899.cljs$core$IFn$_invoke$arity$variadic = G__43899__delegate;
return G__43899;
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
var G__43902__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__43902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43903__i = 0, G__43903__a = new Array(arguments.length -  0);
while (G__43903__i < G__43903__a.length) {G__43903__a[G__43903__i] = arguments[G__43903__i + 0]; ++G__43903__i;}
  args = new cljs.core.IndexedSeq(G__43903__a,0,null);
} 
return G__43902__delegate.call(this,args);};
G__43902.cljs$lang$maxFixedArity = 0;
G__43902.cljs$lang$applyTo = (function (arglist__43904){
var args = cljs.core.seq(arglist__43904);
return G__43902__delegate(args);
});
G__43902.cljs$core$IFn$_invoke$arity$variadic = G__43902__delegate;
return G__43902;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__43905__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__43905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43906__i = 0, G__43906__a = new Array(arguments.length -  0);
while (G__43906__i < G__43906__a.length) {G__43906__a[G__43906__i] = arguments[G__43906__i + 0]; ++G__43906__i;}
  args = new cljs.core.IndexedSeq(G__43906__a,0,null);
} 
return G__43905__delegate.call(this,args);};
G__43905.cljs$lang$maxFixedArity = 0;
G__43905.cljs$lang$applyTo = (function (arglist__43907){
var args = cljs.core.seq(arglist__43907);
return G__43905__delegate(args);
});
G__43905.cljs$core$IFn$_invoke$arity$variadic = G__43905__delegate;
return G__43905;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__43908__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__43908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43909__i = 0, G__43909__a = new Array(arguments.length -  0);
while (G__43909__i < G__43909__a.length) {G__43909__a[G__43909__i] = arguments[G__43909__i + 0]; ++G__43909__i;}
  args = new cljs.core.IndexedSeq(G__43909__a,0,null);
} 
return G__43908__delegate.call(this,args);};
G__43908.cljs$lang$maxFixedArity = 0;
G__43908.cljs$lang$applyTo = (function (arglist__43910){
var args = cljs.core.seq(arglist__43910);
return G__43908__delegate(args);
});
G__43908.cljs$core$IFn$_invoke$arity$variadic = G__43908__delegate;
return G__43908;
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
var G__43911__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__43911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43912__i = 0, G__43912__a = new Array(arguments.length -  0);
while (G__43912__i < G__43912__a.length) {G__43912__a[G__43912__i] = arguments[G__43912__i + 0]; ++G__43912__i;}
  args = new cljs.core.IndexedSeq(G__43912__a,0,null);
} 
return G__43911__delegate.call(this,args);};
G__43911.cljs$lang$maxFixedArity = 0;
G__43911.cljs$lang$applyTo = (function (arglist__43913){
var args = cljs.core.seq(arglist__43913);
return G__43911__delegate(args);
});
G__43911.cljs$core$IFn$_invoke$arity$variadic = G__43911__delegate;
return G__43911;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__43914__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__43914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43915__i = 0, G__43915__a = new Array(arguments.length -  0);
while (G__43915__i < G__43915__a.length) {G__43915__a[G__43915__i] = arguments[G__43915__i + 0]; ++G__43915__i;}
  args = new cljs.core.IndexedSeq(G__43915__a,0,null);
} 
return G__43914__delegate.call(this,args);};
G__43914.cljs$lang$maxFixedArity = 0;
G__43914.cljs$lang$applyTo = (function (arglist__43916){
var args = cljs.core.seq(arglist__43916);
return G__43914__delegate(args);
});
G__43914.cljs$core$IFn$_invoke$arity$variadic = G__43914__delegate;
return G__43914;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__43917__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__43917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43918__i = 0, G__43918__a = new Array(arguments.length -  0);
while (G__43918__i < G__43918__a.length) {G__43918__a[G__43918__i] = arguments[G__43918__i + 0]; ++G__43918__i;}
  args = new cljs.core.IndexedSeq(G__43918__a,0,null);
} 
return G__43917__delegate.call(this,args);};
G__43917.cljs$lang$maxFixedArity = 0;
G__43917.cljs$lang$applyTo = (function (arglist__43919){
var args = cljs.core.seq(arglist__43919);
return G__43917__delegate(args);
});
G__43917.cljs$core$IFn$_invoke$arity$variadic = G__43917__delegate;
return G__43917;
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
var G__43920__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__43920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43921__i = 0, G__43921__a = new Array(arguments.length -  0);
while (G__43921__i < G__43921__a.length) {G__43921__a[G__43921__i] = arguments[G__43921__i + 0]; ++G__43921__i;}
  args = new cljs.core.IndexedSeq(G__43921__a,0,null);
} 
return G__43920__delegate.call(this,args);};
G__43920.cljs$lang$maxFixedArity = 0;
G__43920.cljs$lang$applyTo = (function (arglist__43922){
var args = cljs.core.seq(arglist__43922);
return G__43920__delegate(args);
});
G__43920.cljs$core$IFn$_invoke$arity$variadic = G__43920__delegate;
return G__43920;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__43923__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__43923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43924__i = 0, G__43924__a = new Array(arguments.length -  0);
while (G__43924__i < G__43924__a.length) {G__43924__a[G__43924__i] = arguments[G__43924__i + 0]; ++G__43924__i;}
  args = new cljs.core.IndexedSeq(G__43924__a,0,null);
} 
return G__43923__delegate.call(this,args);};
G__43923.cljs$lang$maxFixedArity = 0;
G__43923.cljs$lang$applyTo = (function (arglist__43925){
var args = cljs.core.seq(arglist__43925);
return G__43923__delegate(args);
});
G__43923.cljs$core$IFn$_invoke$arity$variadic = G__43923__delegate;
return G__43923;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__43926__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__43926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43927__i = 0, G__43927__a = new Array(arguments.length -  0);
while (G__43927__i < G__43927__a.length) {G__43927__a[G__43927__i] = arguments[G__43927__i + 0]; ++G__43927__i;}
  args = new cljs.core.IndexedSeq(G__43927__a,0,null);
} 
return G__43926__delegate.call(this,args);};
G__43926.cljs$lang$maxFixedArity = 0;
G__43926.cljs$lang$applyTo = (function (arglist__43928){
var args = cljs.core.seq(arglist__43928);
return G__43926__delegate(args);
});
G__43926.cljs$core$IFn$_invoke$arity$variadic = G__43926__delegate;
return G__43926;
})()
:squiggle.tentacles.draw_state));
});
goog.exportSymbol('squiggle.core.sketch_tentacles', squiggle.core.sketch_tentacles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.sketch_tentacles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"tentacles"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1526255353788
