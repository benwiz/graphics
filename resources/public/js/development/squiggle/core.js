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
var G__42626__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__42626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42627__i = 0, G__42627__a = new Array(arguments.length -  0);
while (G__42627__i < G__42627__a.length) {G__42627__a[G__42627__i] = arguments[G__42627__i + 0]; ++G__42627__i;}
  args = new cljs.core.IndexedSeq(G__42627__a,0,null);
} 
return G__42626__delegate.call(this,args);};
G__42626.cljs$lang$maxFixedArity = 0;
G__42626.cljs$lang$applyTo = (function (arglist__42628){
var args = cljs.core.seq(arglist__42628);
return G__42626__delegate(args);
});
G__42626.cljs$core$IFn$_invoke$arity$variadic = G__42626__delegate;
return G__42626;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__42629__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__42629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42630__i = 0, G__42630__a = new Array(arguments.length -  0);
while (G__42630__i < G__42630__a.length) {G__42630__a[G__42630__i] = arguments[G__42630__i + 0]; ++G__42630__i;}
  args = new cljs.core.IndexedSeq(G__42630__a,0,null);
} 
return G__42629__delegate.call(this,args);};
G__42629.cljs$lang$maxFixedArity = 0;
G__42629.cljs$lang$applyTo = (function (arglist__42631){
var args = cljs.core.seq(arglist__42631);
return G__42629__delegate(args);
});
G__42629.cljs$core$IFn$_invoke$arity$variadic = G__42629__delegate;
return G__42629;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__42632__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__42632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42633__i = 0, G__42633__a = new Array(arguments.length -  0);
while (G__42633__i < G__42633__a.length) {G__42633__a[G__42633__i] = arguments[G__42633__i + 0]; ++G__42633__i;}
  args = new cljs.core.IndexedSeq(G__42633__a,0,null);
} 
return G__42632__delegate.call(this,args);};
G__42632.cljs$lang$maxFixedArity = 0;
G__42632.cljs$lang$applyTo = (function (arglist__42634){
var args = cljs.core.seq(arglist__42634);
return G__42632__delegate(args);
});
G__42632.cljs$core$IFn$_invoke$arity$variadic = G__42632__delegate;
return G__42632;
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
var G__42635__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__42635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42636__i = 0, G__42636__a = new Array(arguments.length -  0);
while (G__42636__i < G__42636__a.length) {G__42636__a[G__42636__i] = arguments[G__42636__i + 0]; ++G__42636__i;}
  args = new cljs.core.IndexedSeq(G__42636__a,0,null);
} 
return G__42635__delegate.call(this,args);};
G__42635.cljs$lang$maxFixedArity = 0;
G__42635.cljs$lang$applyTo = (function (arglist__42637){
var args = cljs.core.seq(arglist__42637);
return G__42635__delegate(args);
});
G__42635.cljs$core$IFn$_invoke$arity$variadic = G__42635__delegate;
return G__42635;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__42638__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__42638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42639__i = 0, G__42639__a = new Array(arguments.length -  0);
while (G__42639__i < G__42639__a.length) {G__42639__a[G__42639__i] = arguments[G__42639__i + 0]; ++G__42639__i;}
  args = new cljs.core.IndexedSeq(G__42639__a,0,null);
} 
return G__42638__delegate.call(this,args);};
G__42638.cljs$lang$maxFixedArity = 0;
G__42638.cljs$lang$applyTo = (function (arglist__42640){
var args = cljs.core.seq(arglist__42640);
return G__42638__delegate(args);
});
G__42638.cljs$core$IFn$_invoke$arity$variadic = G__42638__delegate;
return G__42638;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__42641__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__42641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42642__i = 0, G__42642__a = new Array(arguments.length -  0);
while (G__42642__i < G__42642__a.length) {G__42642__a[G__42642__i] = arguments[G__42642__i + 0]; ++G__42642__i;}
  args = new cljs.core.IndexedSeq(G__42642__a,0,null);
} 
return G__42641__delegate.call(this,args);};
G__42641.cljs$lang$maxFixedArity = 0;
G__42641.cljs$lang$applyTo = (function (arglist__42643){
var args = cljs.core.seq(arglist__42643);
return G__42641__delegate(args);
});
G__42641.cljs$core$IFn$_invoke$arity$variadic = G__42641__delegate;
return G__42641;
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
var G__42644__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__42644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42645__i = 0, G__42645__a = new Array(arguments.length -  0);
while (G__42645__i < G__42645__a.length) {G__42645__a[G__42645__i] = arguments[G__42645__i + 0]; ++G__42645__i;}
  args = new cljs.core.IndexedSeq(G__42645__a,0,null);
} 
return G__42644__delegate.call(this,args);};
G__42644.cljs$lang$maxFixedArity = 0;
G__42644.cljs$lang$applyTo = (function (arglist__42646){
var args = cljs.core.seq(arglist__42646);
return G__42644__delegate(args);
});
G__42644.cljs$core$IFn$_invoke$arity$variadic = G__42644__delegate;
return G__42644;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__42647__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__42647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42648__i = 0, G__42648__a = new Array(arguments.length -  0);
while (G__42648__i < G__42648__a.length) {G__42648__a[G__42648__i] = arguments[G__42648__i + 0]; ++G__42648__i;}
  args = new cljs.core.IndexedSeq(G__42648__a,0,null);
} 
return G__42647__delegate.call(this,args);};
G__42647.cljs$lang$maxFixedArity = 0;
G__42647.cljs$lang$applyTo = (function (arglist__42649){
var args = cljs.core.seq(arglist__42649);
return G__42647__delegate(args);
});
G__42647.cljs$core$IFn$_invoke$arity$variadic = G__42647__delegate;
return G__42647;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__42650__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__42650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42651__i = 0, G__42651__a = new Array(arguments.length -  0);
while (G__42651__i < G__42651__a.length) {G__42651__a[G__42651__i] = arguments[G__42651__i + 0]; ++G__42651__i;}
  args = new cljs.core.IndexedSeq(G__42651__a,0,null);
} 
return G__42650__delegate.call(this,args);};
G__42650.cljs$lang$maxFixedArity = 0;
G__42650.cljs$lang$applyTo = (function (arglist__42652){
var args = cljs.core.seq(arglist__42652);
return G__42650__delegate(args);
});
G__42650.cljs$core$IFn$_invoke$arity$variadic = G__42650__delegate;
return G__42650;
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
var G__42653__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__42653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42654__i = 0, G__42654__a = new Array(arguments.length -  0);
while (G__42654__i < G__42654__a.length) {G__42654__a[G__42654__i] = arguments[G__42654__i + 0]; ++G__42654__i;}
  args = new cljs.core.IndexedSeq(G__42654__a,0,null);
} 
return G__42653__delegate.call(this,args);};
G__42653.cljs$lang$maxFixedArity = 0;
G__42653.cljs$lang$applyTo = (function (arglist__42655){
var args = cljs.core.seq(arglist__42655);
return G__42653__delegate(args);
});
G__42653.cljs$core$IFn$_invoke$arity$variadic = G__42653__delegate;
return G__42653;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__42656__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__42656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42657__i = 0, G__42657__a = new Array(arguments.length -  0);
while (G__42657__i < G__42657__a.length) {G__42657__a[G__42657__i] = arguments[G__42657__i + 0]; ++G__42657__i;}
  args = new cljs.core.IndexedSeq(G__42657__a,0,null);
} 
return G__42656__delegate.call(this,args);};
G__42656.cljs$lang$maxFixedArity = 0;
G__42656.cljs$lang$applyTo = (function (arglist__42658){
var args = cljs.core.seq(arglist__42658);
return G__42656__delegate(args);
});
G__42656.cljs$core$IFn$_invoke$arity$variadic = G__42656__delegate;
return G__42656;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__42659__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__42659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42660__i = 0, G__42660__a = new Array(arguments.length -  0);
while (G__42660__i < G__42660__a.length) {G__42660__a[G__42660__i] = arguments[G__42660__i + 0]; ++G__42660__i;}
  args = new cljs.core.IndexedSeq(G__42660__a,0,null);
} 
return G__42659__delegate.call(this,args);};
G__42659.cljs$lang$maxFixedArity = 0;
G__42659.cljs$lang$applyTo = (function (arglist__42661){
var args = cljs.core.seq(arglist__42661);
return G__42659__delegate(args);
});
G__42659.cljs$core$IFn$_invoke$arity$variadic = G__42659__delegate;
return G__42659;
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
var G__42662__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42663__i = 0, G__42663__a = new Array(arguments.length -  0);
while (G__42663__i < G__42663__a.length) {G__42663__a[G__42663__i] = arguments[G__42663__i + 0]; ++G__42663__i;}
  args = new cljs.core.IndexedSeq(G__42663__a,0,null);
} 
return G__42662__delegate.call(this,args);};
G__42662.cljs$lang$maxFixedArity = 0;
G__42662.cljs$lang$applyTo = (function (arglist__42664){
var args = cljs.core.seq(arglist__42664);
return G__42662__delegate(args);
});
G__42662.cljs$core$IFn$_invoke$arity$variadic = G__42662__delegate;
return G__42662;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_starry_night))?(function() { 
var G__42665__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_starry_night,args);
};
var G__42665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42666__i = 0, G__42666__a = new Array(arguments.length -  0);
while (G__42666__i < G__42666__a.length) {G__42666__a[G__42666__i] = arguments[G__42666__i + 0]; ++G__42666__i;}
  args = new cljs.core.IndexedSeq(G__42666__a,0,null);
} 
return G__42665__delegate.call(this,args);};
G__42665.cljs$lang$maxFixedArity = 0;
G__42665.cljs$lang$applyTo = (function (arglist__42667){
var args = cljs.core.seq(arglist__42667);
return G__42665__delegate(args);
});
G__42665.cljs$core$IFn$_invoke$arity$variadic = G__42665__delegate;
return G__42665;
})()
:squiggle.pointillism.setup_starry_night),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42668__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42669__i = 0, G__42669__a = new Array(arguments.length -  0);
while (G__42669__i < G__42669__a.length) {G__42669__a[G__42669__i] = arguments[G__42669__i + 0]; ++G__42669__i;}
  args = new cljs.core.IndexedSeq(G__42669__a,0,null);
} 
return G__42668__delegate.call(this,args);};
G__42668.cljs$lang$maxFixedArity = 0;
G__42668.cljs$lang$applyTo = (function (arglist__42670){
var args = cljs.core.seq(arglist__42670);
return G__42668__delegate(args);
});
G__42668.cljs$core$IFn$_invoke$arity$variadic = G__42668__delegate;
return G__42668;
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
var G__42671__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42672__i = 0, G__42672__a = new Array(arguments.length -  0);
while (G__42672__i < G__42672__a.length) {G__42672__a[G__42672__i] = arguments[G__42672__i + 0]; ++G__42672__i;}
  args = new cljs.core.IndexedSeq(G__42672__a,0,null);
} 
return G__42671__delegate.call(this,args);};
G__42671.cljs$lang$maxFixedArity = 0;
G__42671.cljs$lang$applyTo = (function (arglist__42673){
var args = cljs.core.seq(arglist__42673);
return G__42671__delegate(args);
});
G__42671.cljs$core$IFn$_invoke$arity$variadic = G__42671__delegate;
return G__42671;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_girl_with_pearl_earing))?(function() { 
var G__42674__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_girl_with_pearl_earing,args);
};
var G__42674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42675__i = 0, G__42675__a = new Array(arguments.length -  0);
while (G__42675__i < G__42675__a.length) {G__42675__a[G__42675__i] = arguments[G__42675__i + 0]; ++G__42675__i;}
  args = new cljs.core.IndexedSeq(G__42675__a,0,null);
} 
return G__42674__delegate.call(this,args);};
G__42674.cljs$lang$maxFixedArity = 0;
G__42674.cljs$lang$applyTo = (function (arglist__42676){
var args = cljs.core.seq(arglist__42676);
return G__42674__delegate(args);
});
G__42674.cljs$core$IFn$_invoke$arity$variadic = G__42674__delegate;
return G__42674;
})()
:squiggle.pointillism.setup_girl_with_pearl_earing),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42677__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42678__i = 0, G__42678__a = new Array(arguments.length -  0);
while (G__42678__i < G__42678__a.length) {G__42678__a[G__42678__i] = arguments[G__42678__i + 0]; ++G__42678__i;}
  args = new cljs.core.IndexedSeq(G__42678__a,0,null);
} 
return G__42677__delegate.call(this,args);};
G__42677.cljs$lang$maxFixedArity = 0;
G__42677.cljs$lang$applyTo = (function (arglist__42679){
var args = cljs.core.seq(arglist__42679);
return G__42677__delegate(args);
});
G__42677.cljs$core$IFn$_invoke$arity$variadic = G__42677__delegate;
return G__42677;
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
var G__42680__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42681__i = 0, G__42681__a = new Array(arguments.length -  0);
while (G__42681__i < G__42681__a.length) {G__42681__a[G__42681__i] = arguments[G__42681__i + 0]; ++G__42681__i;}
  args = new cljs.core.IndexedSeq(G__42681__a,0,null);
} 
return G__42680__delegate.call(this,args);};
G__42680.cljs$lang$maxFixedArity = 0;
G__42680.cljs$lang$applyTo = (function (arglist__42682){
var args = cljs.core.seq(arglist__42682);
return G__42680__delegate(args);
});
G__42680.cljs$core$IFn$_invoke$arity$variadic = G__42680__delegate;
return G__42680;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_picasso_face))?(function() { 
var G__42683__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_picasso_face,args);
};
var G__42683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42684__i = 0, G__42684__a = new Array(arguments.length -  0);
while (G__42684__i < G__42684__a.length) {G__42684__a[G__42684__i] = arguments[G__42684__i + 0]; ++G__42684__i;}
  args = new cljs.core.IndexedSeq(G__42684__a,0,null);
} 
return G__42683__delegate.call(this,args);};
G__42683.cljs$lang$maxFixedArity = 0;
G__42683.cljs$lang$applyTo = (function (arglist__42685){
var args = cljs.core.seq(arglist__42685);
return G__42683__delegate(args);
});
G__42683.cljs$core$IFn$_invoke$arity$variadic = G__42683__delegate;
return G__42683;
})()
:squiggle.pointillism.setup_picasso_face),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42686__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42687__i = 0, G__42687__a = new Array(arguments.length -  0);
while (G__42687__i < G__42687__a.length) {G__42687__a[G__42687__i] = arguments[G__42687__i + 0]; ++G__42687__i;}
  args = new cljs.core.IndexedSeq(G__42687__a,0,null);
} 
return G__42686__delegate.call(this,args);};
G__42686.cljs$lang$maxFixedArity = 0;
G__42686.cljs$lang$applyTo = (function (arglist__42688){
var args = cljs.core.seq(arglist__42688);
return G__42686__delegate(args);
});
G__42686.cljs$core$IFn$_invoke$arity$variadic = G__42686__delegate;
return G__42686;
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
var G__42689__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__42689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42690__i = 0, G__42690__a = new Array(arguments.length -  0);
while (G__42690__i < G__42690__a.length) {G__42690__a[G__42690__i] = arguments[G__42690__i + 0]; ++G__42690__i;}
  args = new cljs.core.IndexedSeq(G__42690__a,0,null);
} 
return G__42689__delegate.call(this,args);};
G__42689.cljs$lang$maxFixedArity = 0;
G__42689.cljs$lang$applyTo = (function (arglist__42691){
var args = cljs.core.seq(arglist__42691);
return G__42689__delegate(args);
});
G__42689.cljs$core$IFn$_invoke$arity$variadic = G__42689__delegate;
return G__42689;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(604),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup_georges_seurat))?(function() { 
var G__42692__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup_georges_seurat,args);
};
var G__42692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42693__i = 0, G__42693__a = new Array(arguments.length -  0);
while (G__42693__i < G__42693__a.length) {G__42693__a[G__42693__i] = arguments[G__42693__i + 0]; ++G__42693__i;}
  args = new cljs.core.IndexedSeq(G__42693__a,0,null);
} 
return G__42692__delegate.call(this,args);};
G__42692.cljs$lang$maxFixedArity = 0;
G__42692.cljs$lang$applyTo = (function (arglist__42694){
var args = cljs.core.seq(arglist__42694);
return G__42692__delegate(args);
});
G__42692.cljs$core$IFn$_invoke$arity$variadic = G__42692__delegate;
return G__42692;
})()
:squiggle.pointillism.setup_georges_seurat),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__42695__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__42695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42696__i = 0, G__42696__a = new Array(arguments.length -  0);
while (G__42696__i < G__42696__a.length) {G__42696__a[G__42696__i] = arguments[G__42696__i + 0]; ++G__42696__i;}
  args = new cljs.core.IndexedSeq(G__42696__a,0,null);
} 
return G__42695__delegate.call(this,args);};
G__42695.cljs$lang$maxFixedArity = 0;
G__42695.cljs$lang$applyTo = (function (arglist__42697){
var args = cljs.core.seq(arglist__42697);
return G__42695__delegate(args);
});
G__42695.cljs$core$IFn$_invoke$arity$variadic = G__42695__delegate;
return G__42695;
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
var G__42698__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.update_state,args);
};
var G__42698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42699__i = 0, G__42699__a = new Array(arguments.length -  0);
while (G__42699__i < G__42699__a.length) {G__42699__a[G__42699__i] = arguments[G__42699__i + 0]; ++G__42699__i;}
  args = new cljs.core.IndexedSeq(G__42699__a,0,null);
} 
return G__42698__delegate.call(this,args);};
G__42698.cljs$lang$maxFixedArity = 0;
G__42698.cljs$lang$applyTo = (function (arglist__42700){
var args = cljs.core.seq(arglist__42700);
return G__42698__delegate(args);
});
G__42698.cljs$core$IFn$_invoke$arity$variadic = G__42698__delegate;
return G__42698;
})()
:squiggle.delaunay_monsters.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.setup))?(function() { 
var G__42701__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.setup,args);
};
var G__42701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42702__i = 0, G__42702__a = new Array(arguments.length -  0);
while (G__42702__i < G__42702__a.length) {G__42702__a[G__42702__i] = arguments[G__42702__i + 0]; ++G__42702__i;}
  args = new cljs.core.IndexedSeq(G__42702__a,0,null);
} 
return G__42701__delegate.call(this,args);};
G__42701.cljs$lang$maxFixedArity = 0;
G__42701.cljs$lang$applyTo = (function (arglist__42703){
var args = cljs.core.seq(arglist__42703);
return G__42701__delegate(args);
});
G__42701.cljs$core$IFn$_invoke$arity$variadic = G__42701__delegate;
return G__42701;
})()
:squiggle.delaunay_monsters.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.delaunay_monsters.draw_state))?(function() { 
var G__42704__delegate = function (args){
return cljs.core.apply.call(null,squiggle.delaunay_monsters.draw_state,args);
};
var G__42704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42705__i = 0, G__42705__a = new Array(arguments.length -  0);
while (G__42705__i < G__42705__a.length) {G__42705__a[G__42705__i] = arguments[G__42705__i + 0]; ++G__42705__i;}
  args = new cljs.core.IndexedSeq(G__42705__a,0,null);
} 
return G__42704__delegate.call(this,args);};
G__42704.cljs$lang$maxFixedArity = 0;
G__42704.cljs$lang$applyTo = (function (arglist__42706){
var args = cljs.core.seq(arglist__42706);
return G__42704__delegate(args);
});
G__42704.cljs$core$IFn$_invoke$arity$variadic = G__42704__delegate;
return G__42704;
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

//# sourceMappingURL=core.js.map?rel=1527204801109
