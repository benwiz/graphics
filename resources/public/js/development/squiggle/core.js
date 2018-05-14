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
var G__39146__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.update_state,args);
};
var G__39146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39147__i = 0, G__39147__a = new Array(arguments.length -  0);
while (G__39147__i < G__39147__a.length) {G__39147__a[G__39147__i] = arguments[G__39147__i + 0]; ++G__39147__i;}
  args = new cljs.core.IndexedSeq(G__39147__a,0,null);
} 
return G__39146__delegate.call(this,args);};
G__39146.cljs$lang$maxFixedArity = 0;
G__39146.cljs$lang$applyTo = (function (arglist__39148){
var args = cljs.core.seq(arglist__39148);
return G__39146__delegate(args);
});
G__39146.cljs$core$IFn$_invoke$arity$variadic = G__39146__delegate;
return G__39146;
})()
:squiggle.ten_print_remake.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.setup))?(function() { 
var G__39149__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.setup,args);
};
var G__39149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39150__i = 0, G__39150__a = new Array(arguments.length -  0);
while (G__39150__i < G__39150__a.length) {G__39150__a[G__39150__i] = arguments[G__39150__i + 0]; ++G__39150__i;}
  args = new cljs.core.IndexedSeq(G__39150__a,0,null);
} 
return G__39149__delegate.call(this,args);};
G__39149.cljs$lang$maxFixedArity = 0;
G__39149.cljs$lang$applyTo = (function (arglist__39151){
var args = cljs.core.seq(arglist__39151);
return G__39149__delegate(args);
});
G__39149.cljs$core$IFn$_invoke$arity$variadic = G__39149__delegate;
return G__39149;
})()
:squiggle.ten_print_remake.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.ten_print_remake.draw_state))?(function() { 
var G__39152__delegate = function (args){
return cljs.core.apply.call(null,squiggle.ten_print_remake.draw_state,args);
};
var G__39152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39153__i = 0, G__39153__a = new Array(arguments.length -  0);
while (G__39153__i < G__39153__a.length) {G__39153__a[G__39153__i] = arguments[G__39153__i + 0]; ++G__39153__i;}
  args = new cljs.core.IndexedSeq(G__39153__a,0,null);
} 
return G__39152__delegate.call(this,args);};
G__39152.cljs$lang$maxFixedArity = 0;
G__39152.cljs$lang$applyTo = (function (arglist__39154){
var args = cljs.core.seq(arglist__39154);
return G__39152__delegate(args);
});
G__39152.cljs$core$IFn$_invoke$arity$variadic = G__39152__delegate;
return G__39152;
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
var G__39155__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.update_state,args);
};
var G__39155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39156__i = 0, G__39156__a = new Array(arguments.length -  0);
while (G__39156__i < G__39156__a.length) {G__39156__a[G__39156__i] = arguments[G__39156__i + 0]; ++G__39156__i;}
  args = new cljs.core.IndexedSeq(G__39156__a,0,null);
} 
return G__39155__delegate.call(this,args);};
G__39155.cljs$lang$maxFixedArity = 0;
G__39155.cljs$lang$applyTo = (function (arglist__39157){
var args = cljs.core.seq(arglist__39157);
return G__39155__delegate(args);
});
G__39155.cljs$core$IFn$_invoke$arity$variadic = G__39155__delegate;
return G__39155;
})()
:squiggle.solar_system.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.setup))?(function() { 
var G__39158__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.setup,args);
};
var G__39158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39159__i = 0, G__39159__a = new Array(arguments.length -  0);
while (G__39159__i < G__39159__a.length) {G__39159__a[G__39159__i] = arguments[G__39159__i + 0]; ++G__39159__i;}
  args = new cljs.core.IndexedSeq(G__39159__a,0,null);
} 
return G__39158__delegate.call(this,args);};
G__39158.cljs$lang$maxFixedArity = 0;
G__39158.cljs$lang$applyTo = (function (arglist__39160){
var args = cljs.core.seq(arglist__39160);
return G__39158__delegate(args);
});
G__39158.cljs$core$IFn$_invoke$arity$variadic = G__39158__delegate;
return G__39158;
})()
:squiggle.solar_system.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.solar_system.draw_state))?(function() { 
var G__39161__delegate = function (args){
return cljs.core.apply.call(null,squiggle.solar_system.draw_state,args);
};
var G__39161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39162__i = 0, G__39162__a = new Array(arguments.length -  0);
while (G__39162__i < G__39162__a.length) {G__39162__a[G__39162__i] = arguments[G__39162__i + 0]; ++G__39162__i;}
  args = new cljs.core.IndexedSeq(G__39162__a,0,null);
} 
return G__39161__delegate.call(this,args);};
G__39161.cljs$lang$maxFixedArity = 0;
G__39161.cljs$lang$applyTo = (function (arglist__39163){
var args = cljs.core.seq(arglist__39163);
return G__39161__delegate(args);
});
G__39161.cljs$core$IFn$_invoke$arity$variadic = G__39161__delegate;
return G__39161;
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
var G__39164__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.update_state,args);
};
var G__39164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39165__i = 0, G__39165__a = new Array(arguments.length -  0);
while (G__39165__i < G__39165__a.length) {G__39165__a[G__39165__i] = arguments[G__39165__i + 0]; ++G__39165__i;}
  args = new cljs.core.IndexedSeq(G__39165__a,0,null);
} 
return G__39164__delegate.call(this,args);};
G__39164.cljs$lang$maxFixedArity = 0;
G__39164.cljs$lang$applyTo = (function (arglist__39166){
var args = cljs.core.seq(arglist__39166);
return G__39164__delegate(args);
});
G__39164.cljs$core$IFn$_invoke$arity$variadic = G__39164__delegate;
return G__39164;
})()
:squiggle.game_of_life.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.setup))?(function() { 
var G__39167__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.setup,args);
};
var G__39167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39168__i = 0, G__39168__a = new Array(arguments.length -  0);
while (G__39168__i < G__39168__a.length) {G__39168__a[G__39168__i] = arguments[G__39168__i + 0]; ++G__39168__i;}
  args = new cljs.core.IndexedSeq(G__39168__a,0,null);
} 
return G__39167__delegate.call(this,args);};
G__39167.cljs$lang$maxFixedArity = 0;
G__39167.cljs$lang$applyTo = (function (arglist__39169){
var args = cljs.core.seq(arglist__39169);
return G__39167__delegate(args);
});
G__39167.cljs$core$IFn$_invoke$arity$variadic = G__39167__delegate;
return G__39167;
})()
:squiggle.game_of_life.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.game_of_life.draw_state))?(function() { 
var G__39170__delegate = function (args){
return cljs.core.apply.call(null,squiggle.game_of_life.draw_state,args);
};
var G__39170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39171__i = 0, G__39171__a = new Array(arguments.length -  0);
while (G__39171__i < G__39171__a.length) {G__39171__a[G__39171__i] = arguments[G__39171__i + 0]; ++G__39171__i;}
  args = new cljs.core.IndexedSeq(G__39171__a,0,null);
} 
return G__39170__delegate.call(this,args);};
G__39170.cljs$lang$maxFixedArity = 0;
G__39170.cljs$lang$applyTo = (function (arglist__39172){
var args = cljs.core.seq(arglist__39172);
return G__39170__delegate(args);
});
G__39170.cljs$core$IFn$_invoke$arity$variadic = G__39170__delegate;
return G__39170;
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
var G__39173__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.update_state,args);
};
var G__39173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39174__i = 0, G__39174__a = new Array(arguments.length -  0);
while (G__39174__i < G__39174__a.length) {G__39174__a[G__39174__i] = arguments[G__39174__i + 0]; ++G__39174__i;}
  args = new cljs.core.IndexedSeq(G__39174__a,0,null);
} 
return G__39173__delegate.call(this,args);};
G__39173.cljs$lang$maxFixedArity = 0;
G__39173.cljs$lang$applyTo = (function (arglist__39175){
var args = cljs.core.seq(arglist__39175);
return G__39173__delegate(args);
});
G__39173.cljs$core$IFn$_invoke$arity$variadic = G__39173__delegate;
return G__39173;
})()
:squiggle.tentacles.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.setup))?(function() { 
var G__39176__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.setup,args);
};
var G__39176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39177__i = 0, G__39177__a = new Array(arguments.length -  0);
while (G__39177__i < G__39177__a.length) {G__39177__a[G__39177__i] = arguments[G__39177__i + 0]; ++G__39177__i;}
  args = new cljs.core.IndexedSeq(G__39177__a,0,null);
} 
return G__39176__delegate.call(this,args);};
G__39176.cljs$lang$maxFixedArity = 0;
G__39176.cljs$lang$applyTo = (function (arglist__39178){
var args = cljs.core.seq(arglist__39178);
return G__39176__delegate(args);
});
G__39176.cljs$core$IFn$_invoke$arity$variadic = G__39176__delegate;
return G__39176;
})()
:squiggle.tentacles.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.tentacles.draw_state))?(function() { 
var G__39179__delegate = function (args){
return cljs.core.apply.call(null,squiggle.tentacles.draw_state,args);
};
var G__39179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39180__i = 0, G__39180__a = new Array(arguments.length -  0);
while (G__39180__i < G__39180__a.length) {G__39180__a[G__39180__i] = arguments[G__39180__i + 0]; ++G__39180__i;}
  args = new cljs.core.IndexedSeq(G__39180__a,0,null);
} 
return G__39179__delegate.call(this,args);};
G__39179.cljs$lang$maxFixedArity = 0;
G__39179.cljs$lang$applyTo = (function (arglist__39181){
var args = cljs.core.seq(arglist__39181);
return G__39179__delegate(args);
});
G__39179.cljs$core$IFn$_invoke$arity$variadic = G__39179__delegate;
return G__39179;
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
var G__39182__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.update_state,args);
};
var G__39182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39183__i = 0, G__39183__a = new Array(arguments.length -  0);
while (G__39183__i < G__39183__a.length) {G__39183__a[G__39183__i] = arguments[G__39183__i + 0]; ++G__39183__i;}
  args = new cljs.core.IndexedSeq(G__39183__a,0,null);
} 
return G__39182__delegate.call(this,args);};
G__39182.cljs$lang$maxFixedArity = 0;
G__39182.cljs$lang$applyTo = (function (arglist__39184){
var args = cljs.core.seq(arglist__39184);
return G__39182__delegate(args);
});
G__39182.cljs$core$IFn$_invoke$arity$variadic = G__39182__delegate;
return G__39182;
})()
:squiggle.pointillism.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.setup))?(function() { 
var G__39185__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.setup,args);
};
var G__39185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39186__i = 0, G__39186__a = new Array(arguments.length -  0);
while (G__39186__i < G__39186__a.length) {G__39186__a[G__39186__i] = arguments[G__39186__i + 0]; ++G__39186__i;}
  args = new cljs.core.IndexedSeq(G__39186__a,0,null);
} 
return G__39185__delegate.call(this,args);};
G__39185.cljs$lang$maxFixedArity = 0;
G__39185.cljs$lang$applyTo = (function (arglist__39187){
var args = cljs.core.seq(arglist__39187);
return G__39185__delegate(args);
});
G__39185.cljs$core$IFn$_invoke$arity$variadic = G__39185__delegate;
return G__39185;
})()
:squiggle.pointillism.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.pointillism.draw_state))?(function() { 
var G__39188__delegate = function (args){
return cljs.core.apply.call(null,squiggle.pointillism.draw_state,args);
};
var G__39188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39189__i = 0, G__39189__a = new Array(arguments.length -  0);
while (G__39189__i < G__39189__a.length) {G__39189__a[G__39189__i] = arguments[G__39189__i + 0]; ++G__39189__i;}
  args = new cljs.core.IndexedSeq(G__39189__a,0,null);
} 
return G__39188__delegate.call(this,args);};
G__39188.cljs$lang$maxFixedArity = 0;
G__39188.cljs$lang$applyTo = (function (arglist__39190){
var args = cljs.core.seq(arglist__39190);
return G__39188__delegate(args);
});
G__39188.cljs$core$IFn$_invoke$arity$variadic = G__39188__delegate;
return G__39188;
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

//# sourceMappingURL=core.js.map?rel=1526325644797
