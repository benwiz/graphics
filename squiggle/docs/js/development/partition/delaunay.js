// Compiled by ClojureScript 1.10.238 {}
goog.provide('partition.delaunay');
goog.require('cljs.core');
goog.require('clojure.set');
partition.delaunay.circumscribe_triangle = (function partition$delaunay$circumscribe_triangle(p__39032){
var vec__39033 = p__39032;
var vec__39036 = cljs.core.nth.call(null,vec__39033,(0),null);
var ax = cljs.core.nth.call(null,vec__39036,(0),null);
var ay = cljs.core.nth.call(null,vec__39036,(1),null);
var vec__39039 = cljs.core.nth.call(null,vec__39033,(1),null);
var bx = cljs.core.nth.call(null,vec__39039,(0),null);
var by = cljs.core.nth.call(null,vec__39039,(1),null);
var vec__39042 = cljs.core.nth.call(null,vec__39033,(2),null);
var cx = cljs.core.nth.call(null,vec__39042,(0),null);
var cy = cljs.core.nth.call(null,vec__39042,(1),null);
var A = (bx - ax);
var B = (by - ay);
var C = (cx - ax);
var D = (cy - ay);
var E = ((A * (ax + bx)) + (B * (ay + by)));
var F = ((C * (ax + cx)) + (D * (ay + cy)));
var G = ((2) * ((A * (cy - by)) - (B * (cx - bx))));
if((Math.abs(G) > 1.0E-6)){
var cx__$1 = (((D * E) - (B * F)) / G);
var cy__$1 = (((A * F) - (C * E)) / G);
var dx = (cx__$1 - ax);
var dy = (cy__$1 - ay);
var r = (Math.pow(dx,(2)) + Math.pow(dy,(2)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),cy__$1,new cljs.core.Keyword(null,"radius-squared","radius-squared",555261953),r], null);
} else {
return null;
}
});
partition.delaunay.edges = (function partition$delaunay$edges(p__39045){
var vec__39046 = p__39045;
var p1 = cljs.core.nth.call(null,vec__39046,(0),null);
var p2 = cljs.core.nth.call(null,vec__39046,(1),null);
var p3 = cljs.core.nth.call(null,vec__39046,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p1], null)], null);
});
partition.delaunay.contains_point_QMARK_ = (function partition$delaunay$contains_point_QMARK_(p__39049,p__39050){
var map__39051 = p__39049;
var map__39051__$1 = ((((!((map__39051 == null)))?(((((map__39051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39051):map__39051);
var x = cljs.core.get.call(null,map__39051__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__39051__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius_squared = cljs.core.get.call(null,map__39051__$1,new cljs.core.Keyword(null,"radius-squared","radius-squared",555261953));
var vec__39052 = p__39050;
var px = cljs.core.nth.call(null,vec__39052,(0),null);
var py = cljs.core.nth.call(null,vec__39052,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = y;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = radius_squared;
if(cljs.core.truth_(and__3911__auto____$2)){
var and__3911__auto____$3 = px;
if(cljs.core.truth_(and__3911__auto____$3)){
return py;
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
var distance_squared = (Math.pow((x - px),(2)) + Math.pow((y - py),(2)));
return (distance_squared < radius_squared);
} else {
return null;
}
});
partition.delaunay.outer_edges = (function partition$delaunay$outer_edges(triangles){
var all_edges = cljs.core.mapcat.call(null,partition.delaunay.edges,triangles);
var matches = ((function (all_edges){
return (function (edge){
return cljs.core.filter.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([edge,cljs.core.reverse.call(null,edge)]),all_edges);
});})(all_edges))
;
var appears_once = ((function (all_edges,matches){
return (function (edge){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,matches.call(null,edge)),(1));
});})(all_edges,matches))
;
return cljs.core.filter.call(null,appears_once,all_edges);
});
partition.delaunay.make_new_triangles = (function partition$delaunay$make_new_triangles(containers,point){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p__39056){
var vec__39057 = p__39056;
var p1 = cljs.core.nth.call(null,vec__39057,(0),null);
var p2 = cljs.core.nth.call(null,vec__39057,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,point], null);
}),partition.delaunay.outer_edges.call(null,containers)));
});
partition.delaunay.add_point_to_triangles = (function partition$delaunay$add_point_to_triangles(triangles,point){
var containers = cljs.core.filter.call(null,(function (p1__39060_SHARP_){
return partition.delaunay.contains_point_QMARK_.call(null,partition.delaunay.circumscribe_triangle.call(null,p1__39060_SHARP_),point);
}),triangles);
var new_triangles = partition.delaunay.make_new_triangles.call(null,containers,point);
return clojure.set.union.call(null,clojure.set.difference.call(null,triangles,containers),new_triangles);
});
partition.delaunay.bounds = (function partition$delaunay$bounds(points){
var minx = ((-1000) + cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,points)));
var maxx = ((1000) + cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,points)));
var miny = ((-1000) + cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,points)));
var maxy = ((1000) + cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,points)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx,maxy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,maxy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx,miny], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,miny], null)], null);
});
partition.delaunay.triangulate = (function partition$delaunay$triangulate(points){
var points__$1 = cljs.core.map.call(null,(function (p__39065){
var vec__39066 = p__39065;
var x = cljs.core.nth.call(null,vec__39066,(0),null);
var y = cljs.core.nth.call(null,vec__39066,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),points);
var vec__39062 = partition.delaunay.bounds.call(null,points__$1);
var tl = cljs.core.nth.call(null,vec__39062,(0),null);
var tr = cljs.core.nth.call(null,vec__39062,(1),null);
var bl = cljs.core.nth.call(null,vec__39062,(2),null);
var br = cljs.core.nth.call(null,vec__39062,(3),null);
var initial = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tl,tr,bl], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bl,tr,br], null)]);
var with_bounds = cljs.core.reduce.call(null,partition.delaunay.add_point_to_triangles,initial,points__$1);
var triangles = cljs.core.remove.call(null,((function (points__$1,vec__39062,tl,tr,bl,br,initial,with_bounds){
return (function (p1__39061_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tl,tr,bl,br]),p1__39061_SHARP_);
});})(points__$1,vec__39062,tl,tr,bl,br,initial,with_bounds))
,with_bounds);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),points__$1,new cljs.core.Keyword(null,"triangles","triangles",-1525417058),triangles,new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.distinct.call(null,cljs.core.mapcat.call(null,partition.delaunay.edges,triangles))], null);
});

//# sourceMappingURL=delaunay.js.map?rel=1527203757171
