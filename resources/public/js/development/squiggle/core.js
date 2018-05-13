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
var G__42923__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__42923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42924__i = 0, G__42924__a = new Array(arguments.length -  0);
while (G__42924__i < G__42924__a.length) {G__42924__a[G__42924__i] = arguments[G__42924__i + 0]; ++G__42924__i;}
  args = new cljs.core.IndexedSeq(G__42924__a,0,null);
} 
return G__42923__delegate.call(this,args);};
G__42923.cljs$lang$maxFixedArity = 0;
G__42923.cljs$lang$applyTo = (function (arglist__42925){
var args = cljs.core.seq(arglist__42925);
return G__42923__delegate(args);
});
G__42923.cljs$core$IFn$_invoke$arity$variadic = G__42923__delegate;
return G__42923;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__42926__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__42926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42927__i = 0, G__42927__a = new Array(arguments.length -  0);
while (G__42927__i < G__42927__a.length) {G__42927__a[G__42927__i] = arguments[G__42927__i + 0]; ++G__42927__i;}
  args = new cljs.core.IndexedSeq(G__42927__a,0,null);
} 
return G__42926__delegate.call(this,args);};
G__42926.cljs$lang$maxFixedArity = 0;
G__42926.cljs$lang$applyTo = (function (arglist__42928){
var args = cljs.core.seq(arglist__42928);
return G__42926__delegate(args);
});
G__42926.cljs$core$IFn$_invoke$arity$variadic = G__42926__delegate;
return G__42926;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__42929__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__42929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42930__i = 0, G__42930__a = new Array(arguments.length -  0);
while (G__42930__i < G__42930__a.length) {G__42930__a[G__42930__i] = arguments[G__42930__i + 0]; ++G__42930__i;}
  args = new cljs.core.IndexedSeq(G__42930__a,0,null);
} 
return G__42929__delegate.call(this,args);};
G__42929.cljs$lang$maxFixedArity = 0;
G__42929.cljs$lang$applyTo = (function (arglist__42931){
var args = cljs.core.seq(arglist__42931);
return G__42929__delegate(args);
});
G__42929.cljs$core$IFn$_invoke$arity$variadic = G__42929__delegate;
return G__42929;
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
var G__42932__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__42932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42933__i = 0, G__42933__a = new Array(arguments.length -  0);
while (G__42933__i < G__42933__a.length) {G__42933__a[G__42933__i] = arguments[G__42933__i + 0]; ++G__42933__i;}
  args = new cljs.core.IndexedSeq(G__42933__a,0,null);
} 
return G__42932__delegate.call(this,args);};
G__42932.cljs$lang$maxFixedArity = 0;
G__42932.cljs$lang$applyTo = (function (arglist__42934){
var args = cljs.core.seq(arglist__42934);
return G__42932__delegate(args);
});
G__42932.cljs$core$IFn$_invoke$arity$variadic = G__42932__delegate;
return G__42932;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__42935__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__42935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42936__i = 0, G__42936__a = new Array(arguments.length -  0);
while (G__42936__i < G__42936__a.length) {G__42936__a[G__42936__i] = arguments[G__42936__i + 0]; ++G__42936__i;}
  args = new cljs.core.IndexedSeq(G__42936__a,0,null);
} 
return G__42935__delegate.call(this,args);};
G__42935.cljs$lang$maxFixedArity = 0;
G__42935.cljs$lang$applyTo = (function (arglist__42937){
var args = cljs.core.seq(arglist__42937);
return G__42935__delegate(args);
});
G__42935.cljs$core$IFn$_invoke$arity$variadic = G__42935__delegate;
return G__42935;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__42938__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__42938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42939__i = 0, G__42939__a = new Array(arguments.length -  0);
while (G__42939__i < G__42939__a.length) {G__42939__a[G__42939__i] = arguments[G__42939__i + 0]; ++G__42939__i;}
  args = new cljs.core.IndexedSeq(G__42939__a,0,null);
} 
return G__42938__delegate.call(this,args);};
G__42938.cljs$lang$maxFixedArity = 0;
G__42938.cljs$lang$applyTo = (function (arglist__42940){
var args = cljs.core.seq(arglist__42940);
return G__42938__delegate(args);
});
G__42938.cljs$core$IFn$_invoke$arity$variadic = G__42938__delegate;
return G__42938;
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
var G__42941__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__42941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42942__i = 0, G__42942__a = new Array(arguments.length -  0);
while (G__42942__i < G__42942__a.length) {G__42942__a[G__42942__i] = arguments[G__42942__i + 0]; ++G__42942__i;}
  args = new cljs.core.IndexedSeq(G__42942__a,0,null);
} 
return G__42941__delegate.call(this,args);};
G__42941.cljs$lang$maxFixedArity = 0;
G__42941.cljs$lang$applyTo = (function (arglist__42943){
var args = cljs.core.seq(arglist__42943);
return G__42941__delegate(args);
});
G__42941.cljs$core$IFn$_invoke$arity$variadic = G__42941__delegate;
return G__42941;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__42944__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__42944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42945__i = 0, G__42945__a = new Array(arguments.length -  0);
while (G__42945__i < G__42945__a.length) {G__42945__a[G__42945__i] = arguments[G__42945__i + 0]; ++G__42945__i;}
  args = new cljs.core.IndexedSeq(G__42945__a,0,null);
} 
return G__42944__delegate.call(this,args);};
G__42944.cljs$lang$maxFixedArity = 0;
G__42944.cljs$lang$applyTo = (function (arglist__42946){
var args = cljs.core.seq(arglist__42946);
return G__42944__delegate(args);
});
G__42944.cljs$core$IFn$_invoke$arity$variadic = G__42944__delegate;
return G__42944;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__42947__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__42947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42948__i = 0, G__42948__a = new Array(arguments.length -  0);
while (G__42948__i < G__42948__a.length) {G__42948__a[G__42948__i] = arguments[G__42948__i + 0]; ++G__42948__i;}
  args = new cljs.core.IndexedSeq(G__42948__a,0,null);
} 
return G__42947__delegate.call(this,args);};
G__42947.cljs$lang$maxFixedArity = 0;
G__42947.cljs$lang$applyTo = (function (arglist__42949){
var args = cljs.core.seq(arglist__42949);
return G__42947__delegate(args);
});
G__42947.cljs$core$IFn$_invoke$arity$variadic = G__42947__delegate;
return G__42947;
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
var G__42950__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__42950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42951__i = 0, G__42951__a = new Array(arguments.length -  0);
while (G__42951__i < G__42951__a.length) {G__42951__a[G__42951__i] = arguments[G__42951__i + 0]; ++G__42951__i;}
  args = new cljs.core.IndexedSeq(G__42951__a,0,null);
} 
return G__42950__delegate.call(this,args);};
G__42950.cljs$lang$maxFixedArity = 0;
G__42950.cljs$lang$applyTo = (function (arglist__42952){
var args = cljs.core.seq(arglist__42952);
return G__42950__delegate(args);
});
G__42950.cljs$core$IFn$_invoke$arity$variadic = G__42950__delegate;
return G__42950;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__42953__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__42953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42954__i = 0, G__42954__a = new Array(arguments.length -  0);
while (G__42954__i < G__42954__a.length) {G__42954__a[G__42954__i] = arguments[G__42954__i + 0]; ++G__42954__i;}
  args = new cljs.core.IndexedSeq(G__42954__a,0,null);
} 
return G__42953__delegate.call(this,args);};
G__42953.cljs$lang$maxFixedArity = 0;
G__42953.cljs$lang$applyTo = (function (arglist__42955){
var args = cljs.core.seq(arglist__42955);
return G__42953__delegate(args);
});
G__42953.cljs$core$IFn$_invoke$arity$variadic = G__42953__delegate;
return G__42953;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__42956__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__42956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42957__i = 0, G__42957__a = new Array(arguments.length -  0);
while (G__42957__i < G__42957__a.length) {G__42957__a[G__42957__i] = arguments[G__42957__i + 0]; ++G__42957__i;}
  args = new cljs.core.IndexedSeq(G__42957__a,0,null);
} 
return G__42956__delegate.call(this,args);};
G__42956.cljs$lang$maxFixedArity = 0;
G__42956.cljs$lang$applyTo = (function (arglist__42958){
var args = cljs.core.seq(arglist__42958);
return G__42956__delegate(args);
});
G__42956.cljs$core$IFn$_invoke$arity$variadic = G__42956__delegate;
return G__42956;
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

//# sourceMappingURL=core.js.map?rel=1526254206735
