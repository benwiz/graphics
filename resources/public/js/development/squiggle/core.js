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
var tr__27596__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__27596__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
squiggle.core.run_sketch = (function squiggle$core$run_sketch(){
squiggle.core.squiggle = (function squiggle$core$run_sketch_$_squiggle(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle1",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27946__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27947__i = 0, G__27947__a = new Array(arguments.length -  0);
while (G__27947__i < G__27947__a.length) {G__27947__a[G__27947__i] = arguments[G__27947__i + 0]; ++G__27947__i;}
  args = new cljs.core.IndexedSeq(G__27947__a,0,null);
} 
return G__27946__delegate.call(this,args);};
G__27946.cljs$lang$maxFixedArity = 0;
G__27946.cljs$lang$applyTo = (function (arglist__27948){
var args = cljs.core.seq(arglist__27948);
return G__27946__delegate(args);
});
G__27946.cljs$core$IFn$_invoke$arity$variadic = G__27946__delegate;
return G__27946;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27949__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27950__i = 0, G__27950__a = new Array(arguments.length -  0);
while (G__27950__i < G__27950__a.length) {G__27950__a[G__27950__i] = arguments[G__27950__i + 0]; ++G__27950__i;}
  args = new cljs.core.IndexedSeq(G__27950__a,0,null);
} 
return G__27949__delegate.call(this,args);};
G__27949.cljs$lang$maxFixedArity = 0;
G__27949.cljs$lang$applyTo = (function (arglist__27951){
var args = cljs.core.seq(arglist__27951);
return G__27949__delegate(args);
});
G__27949.cljs$core$IFn$_invoke$arity$variadic = G__27949__delegate;
return G__27949;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27952__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27953__i = 0, G__27953__a = new Array(arguments.length -  0);
while (G__27953__i < G__27953__a.length) {G__27953__a[G__27953__i] = arguments[G__27953__i + 0]; ++G__27953__i;}
  args = new cljs.core.IndexedSeq(G__27953__a,0,null);
} 
return G__27952__delegate.call(this,args);};
G__27952.cljs$lang$maxFixedArity = 0;
G__27952.cljs$lang$applyTo = (function (arglist__27954){
var args = cljs.core.seq(arglist__27954);
return G__27952__delegate(args);
});
G__27952.cljs$core$IFn$_invoke$arity$variadic = G__27952__delegate;
return G__27952;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle', squiggle.core.squiggle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle1"], null));
}

squiggle.core.squiggle2 = (function squiggle$core$run_sketch_$_squiggle2(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squiggle2",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squiggle.core.update_state))?(function() { 
var G__27955__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.update_state,args);
};
var G__27955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27956__i = 0, G__27956__a = new Array(arguments.length -  0);
while (G__27956__i < G__27956__a.length) {G__27956__a[G__27956__i] = arguments[G__27956__i + 0]; ++G__27956__i;}
  args = new cljs.core.IndexedSeq(G__27956__a,0,null);
} 
return G__27955__delegate.call(this,args);};
G__27955.cljs$lang$maxFixedArity = 0;
G__27955.cljs$lang$applyTo = (function (arglist__27957){
var args = cljs.core.seq(arglist__27957);
return G__27955__delegate(args);
});
G__27955.cljs$core$IFn$_invoke$arity$variadic = G__27955__delegate;
return G__27955;
})()
:squiggle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squiggle.core.setup))?(function() { 
var G__27958__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.setup,args);
};
var G__27958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27959__i = 0, G__27959__a = new Array(arguments.length -  0);
while (G__27959__i < G__27959__a.length) {G__27959__a[G__27959__i] = arguments[G__27959__i + 0]; ++G__27959__i;}
  args = new cljs.core.IndexedSeq(G__27959__a,0,null);
} 
return G__27958__delegate.call(this,args);};
G__27958.cljs$lang$maxFixedArity = 0;
G__27958.cljs$lang$applyTo = (function (arglist__27960){
var args = cljs.core.seq(arglist__27960);
return G__27958__delegate(args);
});
G__27958.cljs$core$IFn$_invoke$arity$variadic = G__27958__delegate;
return G__27958;
})()
:squiggle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squiggle.core.draw_state))?(function() { 
var G__27961__delegate = function (args){
return cljs.core.apply.call(null,squiggle.core.draw_state,args);
};
var G__27961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27962__i = 0, G__27962__a = new Array(arguments.length -  0);
while (G__27962__i < G__27962__a.length) {G__27962__a[G__27962__i] = arguments[G__27962__i + 0]; ++G__27962__i;}
  args = new cljs.core.IndexedSeq(G__27962__a,0,null);
} 
return G__27961__delegate.call(this,args);};
G__27961.cljs$lang$maxFixedArity = 0;
G__27961.cljs$lang$applyTo = (function (arglist__27963){
var args = cljs.core.seq(arglist__27963);
return G__27961__delegate(args);
});
G__27961.cljs$core$IFn$_invoke$arity$variadic = G__27961__delegate;
return G__27961;
})()
:squiggle.core.draw_state));
});
goog.exportSymbol('squiggle.core.squiggle2', squiggle.core.squiggle2);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27182__27183__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27182__27183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squiggle.core.squiggle2,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squiggle2"], null));
}
});
goog.exportSymbol('squiggle.core.run_sketch', squiggle.core.run_sketch);
squiggle.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1525815359472
