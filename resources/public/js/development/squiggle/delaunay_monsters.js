// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.delaunay_monsters');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('squiggle.delaunay');
squiggle.delaunay_monsters.point = (function squiggle$delaunay_monsters$point(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,quil.core.height.call(null)),new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"h","h",1109658740),(200)], null);
});
squiggle.delaunay_monsters.coords = (function squiggle$delaunay_monsters$coords(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)], null);
});
squiggle.delaunay_monsters.update_point = (function squiggle$delaunay_monsters$update_point(point){
if((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(point) <= (0))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(point) - (1))], null);
}
});
squiggle.delaunay_monsters.draw_point = (function squiggle$delaunay_monsters$draw_point(point){
return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),(10),(10));
});
squiggle.delaunay_monsters.draw_edges = (function squiggle$delaunay_monsters$draw_edges(triangle){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,(8)),(0))){
var a = cljs.core.get.call(null,triangle,(0));
var b = cljs.core.get.call(null,triangle,(1));
var c = cljs.core.get.call(null,triangle,(2));
quil.core.line.call(null,cljs.core.get.call(null,a,(0)),cljs.core.get.call(null,a,(1)),cljs.core.get.call(null,b,(0)),cljs.core.get.call(null,b,(1)));

quil.core.line.call(null,cljs.core.get.call(null,b,(0)),cljs.core.get.call(null,b,(1)),cljs.core.get.call(null,c,(0)),cljs.core.get.call(null,c,(1)));

return quil.core.line.call(null,cljs.core.get.call(null,c,(0)),cljs.core.get.call(null,c,(1)),cljs.core.get.call(null,a,(0)),cljs.core.get.call(null,a,(1)));
} else {
return null;
}
});
squiggle.delaunay_monsters.draw_triangles = (function squiggle$delaunay_monsters$draw_triangles(triangle){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,(10)),(0))){
var a = cljs.core.get.call(null,triangle,(0));
var b = cljs.core.get.call(null,triangle,(1));
var c = cljs.core.get.call(null,triangle,(2));
quil.core.fill.call(null,cljs.core.rand_int.call(null,(255)),(0),(0));

return quil.core.triangle.call(null,cljs.core.get.call(null,a,(0)),cljs.core.get.call(null,a,(1)),cljs.core.get.call(null,b,(0)),cljs.core.get.call(null,b,(1)),cljs.core.get.call(null,c,(0)),cljs.core.get.call(null,c,(1)));
} else {
return null;
}
});
squiggle.delaunay_monsters.setup = (function squiggle$delaunay_monsters$setup(){
quil.core.stroke.call(null,(255),(0),(0));

quil.core.fill.call(null,(255),(0),(0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.repeatedly.call(null,(5),squiggle.delaunay_monsters.point)], null);
});
squiggle.delaunay_monsters.update_state = (function squiggle$delaunay_monsters$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(squiggle.delaunay.triangulate.call(null,cljs.core.map.call(null,squiggle.delaunay_monsters.coords,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,squiggle.delaunay_monsters.update_point,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state)));
}),null,null)),(new cljs.core.LazySeq(null,(function (){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,(10)),(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [squiggle.delaunay_monsters.point.call(null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null)))], null);
});
squiggle.delaunay_monsters.draw_state = (function squiggle$delaunay_monsters$draw_state(state){
quil.core.background.call(null,(0),(0),(0));

cljs.core.mapv.call(null,squiggle.delaunay_monsters.draw_edges,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.mapv.call(null,squiggle.delaunay_monsters.draw_triangles,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=delaunay_monsters.js.map?rel=1527204800919
