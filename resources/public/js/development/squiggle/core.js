// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
squiggle.core.setup = (function squiggle$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
squiggle.core.update_state = (function squiggle$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
squiggle.core.draw_state = (function squiggle$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__22079__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22079__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.squiggle = (function squiggle$core$run_sketch_$_squiggle(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle1",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27747__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27748__i = 0, G__27748__a = new Array(arguments.length -  0);
while (G__27748__i < G__27748__a.length) {G__27748__a[G__27748__i] = arguments[G__27748__i + 0]; ++G__27748__i;}
  args = new cljs.core.IndexedSeq(G__27748__a,0,null);
} 
return G__27747__delegate.call(this,args);};
G__27747.cljs$lang$maxFixedArity = 0;
G__27747.cljs$lang$applyTo = (function (arglist__27749){
var args = cljs.core.seq(arglist__27749);
return G__27747__delegate(args);
});
G__27747.cljs$core$IFn$_invoke$arity$variadic = G__27747__delegate;
return G__27747;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27750__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27751__i = 0, G__27751__a = new Array(arguments.length -  0);
while (G__27751__i < G__27751__a.length) {G__27751__a[G__27751__i] = arguments[G__27751__i + 0]; ++G__27751__i;}
  args = new cljs.core.IndexedSeq(G__27751__a,0,null);
} 
return G__27750__delegate.call(this,args);};
G__27750.cljs$lang$maxFixedArity = 0;
G__27750.cljs$lang$applyTo = (function (arglist__27752){
var args = cljs.core.seq(arglist__27752);
return G__27750__delegate(args);
});
G__27750.cljs$core$IFn$_invoke$arity$variadic = G__27750__delegate;
return G__27750;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27753__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27754__i = 0, G__27754__a = new Array(arguments.length -  0);
while (G__27754__i < G__27754__a.length) {G__27754__a[G__27754__i] = arguments[G__27754__i + 0]; ++G__27754__i;}
  args = new cljs.core.IndexedSeq(G__27754__a,0,null);
} 
return G__27753__delegate.call(this,args);};
G__27753.cljs$lang$maxFixedArity = 0;
G__27753.cljs$lang$applyTo = (function (arglist__27755){
var args = cljs.core.seq(arglist__27755);
return G__27753__delegate(args);
});
G__27753.cljs$core$IFn$_invoke$arity$variadic = G__27753__delegate;
return G__27753;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle', squiggle.core.squiggle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle1"], null));
}

squiggle.core.squiggle2 = (function squiggle$core$run_sketch_$_squiggle2(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle2",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27756__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27757__i = 0, G__27757__a = new Array(arguments.length -  0);
while (G__27757__i < G__27757__a.length) {G__27757__a[G__27757__i] = arguments[G__27757__i + 0]; ++G__27757__i;}
  args = new cljs.core.IndexedSeq(G__27757__a,0,null);
} 
return G__27756__delegate.call(this,args);};
G__27756.cljs$lang$maxFixedArity = 0;
G__27756.cljs$lang$applyTo = (function (arglist__27758){
var args = cljs.core.seq(arglist__27758);
return G__27756__delegate(args);
});
G__27756.cljs$core$IFn$_invoke$arity$variadic = G__27756__delegate;
return G__27756;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27759__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27760__i = 0, G__27760__a = new Array(arguments.length -  0);
while (G__27760__i < G__27760__a.length) {G__27760__a[G__27760__i] = arguments[G__27760__i + 0]; ++G__27760__i;}
  args = new cljs.core.IndexedSeq(G__27760__a,0,null);
} 
return G__27759__delegate.call(this,args);};
G__27759.cljs$lang$maxFixedArity = 0;
G__27759.cljs$lang$applyTo = (function (arglist__27761){
var args = cljs.core.seq(arglist__27761);
return G__27759__delegate(args);
});
G__27759.cljs$core$IFn$_invoke$arity$variadic = G__27759__delegate;
return G__27759;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27762__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27763__i = 0, G__27763__a = new Array(arguments.length -  0);
while (G__27763__i < G__27763__a.length) {G__27763__a[G__27763__i] = arguments[G__27763__i + 0]; ++G__27763__i;}
  args = new cljs.core.IndexedSeq(G__27763__a,0,null);
} 
return G__27762__delegate.call(this,args);};
G__27762.cljs$lang$maxFixedArity = 0;
G__27762.cljs$lang$applyTo = (function (arglist__27764){
var args = cljs.core.seq(arglist__27764);
return G__27762__delegate(args);
});
G__27762.cljs$core$IFn$_invoke$arity$variadic = G__27762__delegate;
return G__27762;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle2', squiggle.core.squiggle2);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle2,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle2"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525815723144
