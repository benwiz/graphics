// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.delaunay_monsters');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('squiggle.delaunay');
goog.require('squiggle.listen');
goog.require('cljs.core.async');
squiggle.delaunay_monsters.num_points = (10);
squiggle.delaunay_monsters.step = (2);
squiggle.delaunay_monsters.edge_rate = (4);
squiggle.delaunay_monsters.triangle_rate = (10);
squiggle.delaunay_monsters.birth_rate = (15);
squiggle.delaunay_monsters.point = (function squiggle$delaunay_monsters$point(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,quil.core.height.call(null)),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.rand.call(null,((2) * Math.PI)),new cljs.core.Keyword(null,"h","h",1109658740),(150)], null);
});
squiggle.delaunay_monsters.coords = (function squiggle$delaunay_monsters$coords(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)], null);
});
squiggle.delaunay_monsters.update_point = (function squiggle$delaunay_monsters$update_point(point){
var min_x = (-100);
var max_x = (quil.core.width.call(null) + (100));
var min_y = (-100);
var max_y = (quil.core.height.call(null) + (100));
if((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(point) <= (0))){
return null;
} else {
if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) < min_x)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) > max_x)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) < min_y)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) > max_y)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) < min_x))?min_x:(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) > max_x))?max_x:(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + (squiggle.delaunay_monsters.step * quil.core.cos.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point)))))),new cljs.core.Keyword(null,"y","y",-1757859776),(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) < min_y))?min_y:(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) > max_y))?max_y:(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + (squiggle.delaunay_monsters.step * quil.core.sin.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point)))))),new cljs.core.Keyword(null,"a","a",-2123407586),((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point) + Math.PI) + (cljs.core.rand.call(null,Math.PI) - (Math.PI / (2)))),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(point) - (1))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + (squiggle.delaunay_monsters.step * quil.core.cos.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point)))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + (squiggle.delaunay_monsters.step * quil.core.sin.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point)))),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(point) - (1))], null);
}
}
});
squiggle.delaunay_monsters.draw_point = (function squiggle$delaunay_monsters$draw_point(point){
quil.core.fill.call(null,(255),(0),(0));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),(10),(10));
});
squiggle.delaunay_monsters.draw_edges = (function squiggle$delaunay_monsters$draw_edges(triangle){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,squiggle.delaunay_monsters.edge_rate),(0))){
var a = cljs.core.get.call(null,triangle,(0));
var b = cljs.core.get.call(null,triangle,(1));
var c = cljs.core.get.call(null,triangle,(2));
quil.core.stroke.call(null,cljs.core.rand_int.call(null,(255)),(0),(0));

quil.core.line.call(null,cljs.core.get.call(null,a,(0)),cljs.core.get.call(null,a,(1)),cljs.core.get.call(null,b,(0)),cljs.core.get.call(null,b,(1)));

quil.core.line.call(null,cljs.core.get.call(null,b,(0)),cljs.core.get.call(null,b,(1)),cljs.core.get.call(null,c,(0)),cljs.core.get.call(null,c,(1)));

return quil.core.line.call(null,cljs.core.get.call(null,c,(0)),cljs.core.get.call(null,c,(1)),cljs.core.get.call(null,a,(0)),cljs.core.get.call(null,a,(1)));
} else {
return null;
}
});
squiggle.delaunay_monsters.draw_triangles = (function squiggle$delaunay_monsters$draw_triangles(triangle){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,squiggle.delaunay_monsters.triangle_rate),(0))){
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
quil.core.frame_rate.call(null,(30));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.repeatedly.call(null,squiggle.delaunay_monsters.num_points,squiggle.delaunay_monsters.point)], null);
});
squiggle.delaunay_monsters.update_state = (function squiggle$delaunay_monsters$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(squiggle.delaunay.triangulate.call(null,cljs.core.map.call(null,squiggle.delaunay_monsters.coords,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,squiggle.delaunay_monsters.update_point,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(state)));
}),null,null)),(new cljs.core.LazySeq(null,(function (){
if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,squiggle.delaunay_monsters.birth_rate),(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [squiggle.delaunay_monsters.point.call(null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null))),new cljs.core.Keyword(null,"audio-channel","audio-channel",-751707293),new cljs.core.Keyword(null,"audio-channel","audio-channel",-751707293).cljs$core$IFn$_invoke$arity$1(state)], null);
});
squiggle.delaunay_monsters.draw_state = (function squiggle$delaunay_monsters$draw_state(state){
quil.core.background.call(null,(0),(0),(0));

cljs.core.mapv.call(null,squiggle.delaunay_monsters.draw_edges,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.mapv.call(null,squiggle.delaunay_monsters.draw_triangles,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(state));
});
squiggle.delaunay_monsters.mouse_clicked = (function squiggle$delaunay_monsters$mouse_clicked(state,event){
cljs.core.println.call(null,"click");

if(cljs.core._EQ_.call(null,0.5,squiggle.delaunay_monsters.step)){
squiggle.delaunay_monsters.step = 10.0;
} else {
squiggle.delaunay_monsters.step = 0.5;
}

quil.core.redraw.call(null);

return state;
});

//# sourceMappingURL=delaunay_monsters.js.map?rel=1527391067512
