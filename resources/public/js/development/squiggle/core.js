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
var tr__23078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__23078__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.squiggle = (function squiggle$core$run_sketch_$_squiggle(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__23209__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__23209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23210__i = 0, G__23210__a = new Array(arguments.length -  0);
while (G__23210__i < G__23210__a.length) {G__23210__a[G__23210__i] = arguments[G__23210__i + 0]; ++G__23210__i;}
  args = new cljs.core.IndexedSeq(G__23210__a,0,null);
} 
return G__23209__delegate.call(this,args);};
G__23209.cljs$lang$maxFixedArity = 0;
G__23209.cljs$lang$applyTo = (function (arglist__23211){
var args = cljs.core.seq(arglist__23211);
return G__23209__delegate(args);
});
G__23209.cljs$core$IFn$_invoke$arity$variadic = G__23209__delegate;
return G__23209;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__23212__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__23212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23213__i = 0, G__23213__a = new Array(arguments.length -  0);
while (G__23213__i < G__23213__a.length) {G__23213__a[G__23213__i] = arguments[G__23213__i + 0]; ++G__23213__i;}
  args = new cljs.core.IndexedSeq(G__23213__a,0,null);
} 
return G__23212__delegate.call(this,args);};
G__23212.cljs$lang$maxFixedArity = 0;
G__23212.cljs$lang$applyTo = (function (arglist__23214){
var args = cljs.core.seq(arglist__23214);
return G__23212__delegate(args);
});
G__23212.cljs$core$IFn$_invoke$arity$variadic = G__23212__delegate;
return G__23212;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__23215__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__23215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23216__i = 0, G__23216__a = new Array(arguments.length -  0);
while (G__23216__i < G__23216__a.length) {G__23216__a[G__23216__i] = arguments[G__23216__i + 0]; ++G__23216__i;}
  args = new cljs.core.IndexedSeq(G__23216__a,0,null);
} 
return G__23215__delegate.call(this,args);};
G__23215.cljs$lang$maxFixedArity = 0;
G__23215.cljs$lang$applyTo = (function (arglist__23217){
var args = cljs.core.seq(arglist__23217);
return G__23215__delegate(args);
});
G__23215.cljs$core$IFn$_invoke$arity$variadic = G__23215__delegate;
return G__23215;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle', squiggle.core.squiggle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21757__21758__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21757__21758__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1525651790252
