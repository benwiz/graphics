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
squiggle.core.squiggle1 = (function squiggle$core$run_sketch_$_squiggle1(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle1",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27767__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27768__i = 0, G__27768__a = new Array(arguments.length -  0);
while (G__27768__i < G__27768__a.length) {G__27768__a[G__27768__i] = arguments[G__27768__i + 0]; ++G__27768__i;}
  args = new cljs.core.IndexedSeq(G__27768__a,0,null);
} 
return G__27767__delegate.call(this,args);};
G__27767.cljs$lang$maxFixedArity = 0;
G__27767.cljs$lang$applyTo = (function (arglist__27769){
var args = cljs.core.seq(arglist__27769);
return G__27767__delegate(args);
});
G__27767.cljs$core$IFn$_invoke$arity$variadic = G__27767__delegate;
return G__27767;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27770__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27771__i = 0, G__27771__a = new Array(arguments.length -  0);
while (G__27771__i < G__27771__a.length) {G__27771__a[G__27771__i] = arguments[G__27771__i + 0]; ++G__27771__i;}
  args = new cljs.core.IndexedSeq(G__27771__a,0,null);
} 
return G__27770__delegate.call(this,args);};
G__27770.cljs$lang$maxFixedArity = 0;
G__27770.cljs$lang$applyTo = (function (arglist__27772){
var args = cljs.core.seq(arglist__27772);
return G__27770__delegate(args);
});
G__27770.cljs$core$IFn$_invoke$arity$variadic = G__27770__delegate;
return G__27770;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27773__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27774__i = 0, G__27774__a = new Array(arguments.length -  0);
while (G__27774__i < G__27774__a.length) {G__27774__a[G__27774__i] = arguments[G__27774__i + 0]; ++G__27774__i;}
  args = new cljs.core.IndexedSeq(G__27774__a,0,null);
} 
return G__27773__delegate.call(this,args);};
G__27773.cljs$lang$maxFixedArity = 0;
G__27773.cljs$lang$applyTo = (function (arglist__27775){
var args = cljs.core.seq(arglist__27775);
return G__27773__delegate(args);
});
G__27773.cljs$core$IFn$_invoke$arity$variadic = G__27773__delegate;
return G__27773;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle1', squiggle.core.squiggle1);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21665__21666__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21665__21666__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle1,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle1"], null));
}

squiggle.core.squiggle2 = (function squiggle$core$run_sketch_$_squiggle2(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle2",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27776__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27777__i = 0, G__27777__a = new Array(arguments.length -  0);
while (G__27777__i < G__27777__a.length) {G__27777__a[G__27777__i] = arguments[G__27777__i + 0]; ++G__27777__i;}
  args = new cljs.core.IndexedSeq(G__27777__a,0,null);
} 
return G__27776__delegate.call(this,args);};
G__27776.cljs$lang$maxFixedArity = 0;
G__27776.cljs$lang$applyTo = (function (arglist__27778){
var args = cljs.core.seq(arglist__27778);
return G__27776__delegate(args);
});
G__27776.cljs$core$IFn$_invoke$arity$variadic = G__27776__delegate;
return G__27776;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27779__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27780__i = 0, G__27780__a = new Array(arguments.length -  0);
while (G__27780__i < G__27780__a.length) {G__27780__a[G__27780__i] = arguments[G__27780__i + 0]; ++G__27780__i;}
  args = new cljs.core.IndexedSeq(G__27780__a,0,null);
} 
return G__27779__delegate.call(this,args);};
G__27779.cljs$lang$maxFixedArity = 0;
G__27779.cljs$lang$applyTo = (function (arglist__27781){
var args = cljs.core.seq(arglist__27781);
return G__27779__delegate(args);
});
G__27779.cljs$core$IFn$_invoke$arity$variadic = G__27779__delegate;
return G__27779;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27782__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27783__i = 0, G__27783__a = new Array(arguments.length -  0);
while (G__27783__i < G__27783__a.length) {G__27783__a[G__27783__i] = arguments[G__27783__i + 0]; ++G__27783__i;}
  args = new cljs.core.IndexedSeq(G__27783__a,0,null);
} 
return G__27782__delegate.call(this,args);};
G__27782.cljs$lang$maxFixedArity = 0;
G__27782.cljs$lang$applyTo = (function (arglist__27784){
var args = cljs.core.seq(arglist__27784);
return G__27782__delegate(args);
});
G__27782.cljs$core$IFn$_invoke$arity$variadic = G__27782__delegate;
return G__27782;
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

//# sourceMappingURL=core.js.map?rel=1525815729201
