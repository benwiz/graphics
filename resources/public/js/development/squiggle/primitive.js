// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.primitive');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.primitive.max_i = (600);
squiggle.primitive.error = (function squiggle$primitive$error(t,p){
return Math.pow((p - t),(2));
});
squiggle.primitive.mse = (function squiggle$primitive$mse(target,prediction){

return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,squiggle.primitive.error,target,prediction)) / cljs.core.count.call(null,prediction));
});
squiggle.primitive.draw_shape = (function squiggle$primitive$draw_shape(shape){
quil.core.fill.call(null,cljs.core.get.call(null,shape,(4)),cljs.core.get.call(null,shape,(5)),cljs.core.get.call(null,shape,(6)));

return quil.core.ellipse.call(null,cljs.core.get.call(null,shape,(0)),cljs.core.get.call(null,shape,(1)),cljs.core.get.call(null,shape,(2)),cljs.core.get.call(null,shape,(3)));
});
squiggle.primitive.setup = (function squiggle$primitive$setup(filename){
quil.core.frame_rate.call(null,(60));

quil.core.background.call(null,(255),(255),(255));

var path = ((cljs.core._EQ_.call(null,window.location.hostname,"benwiz.io"))?["/squiggle/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''):["/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"target-image","target-image",1796431459),quil.core.load_image.call(null,path),new cljs.core.Keyword(null,"prediction-pixels","prediction-pixels",-506822864),quil.core.pixels.call(null),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next-shape","next-shape",103541154),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"best-shape","best-shape",2048427545),null,new cljs.core.Keyword(null,"best-mse","best-mse",-2132718887),(9007199254740991),new cljs.core.Keyword(null,"try-count","try-count",-137840440),(0)], null);
});
squiggle.primitive.setup_starry_night = (function squiggle$primitive$setup_starry_night(){
return squiggle.primitive.setup.call(null,"starry-night.jpg");
});
squiggle.primitive.update_state = (function squiggle$primitive$update_state(state){

var prediction_pixels = quil.core.pixels.call(null);
var mse = squiggle.primitive.mse.call(null,quil.core.pixels.call(null,new cljs.core.Keyword(null,"target-image","target-image",1796431459).cljs$core$IFn$_invoke$arity$1(state)),prediction_pixels);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"i","i",-1386841315),(((new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) < squiggle.primitive.max_i))?(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) + (1)):(0)),new cljs.core.Keyword(null,"target-image","target-image",1796431459),new cljs.core.Keyword(null,"target-image","target-image",1796431459).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"prediction-pixels","prediction-pixels",-506822864),prediction_pixels,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(((new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) < (0)))?new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(state):cljs.core.conj.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"best-shape","best-shape",2048427545).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"next-shape","next-shape",103541154),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,quil.core.width.call(null)),cljs.core.rand_int.call(null,quil.core.height.call(null)),(10),(10),(100),(0),(0)], null),new cljs.core.Keyword(null,"best-shape","best-shape",2048427545),(((mse < new cljs.core.Keyword(null,"best-mse","best-mse",-2132718887).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.Keyword(null,"next-shape","next-shape",103541154).cljs$core$IFn$_invoke$arity$1(state):new cljs.core.Keyword(null,"best-shape","best-shape",2048427545).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"best-mse","best-mse",-2132718887),(((new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state) < squiggle.primitive.max_i))?(((mse < new cljs.core.Keyword(null,"best-mse","best-mse",-2132718887).cljs$core$IFn$_invoke$arity$1(state)))?mse:new cljs.core.Keyword(null,"best-mse","best-mse",-2132718887).cljs$core$IFn$_invoke$arity$1(state)):(9007199254740991))], null);
});
squiggle.primitive.draw_state = (function squiggle$primitive$draw_state(state){
quil.core.background.call(null,(255),(255),(255));

quil.core.no_stroke.call(null);

cljs.core.dorun.call(null,cljs.core.map.call(null,squiggle.primitive.draw_shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(state)));

return squiggle.primitive.draw_shape.call(null,new cljs.core.Keyword(null,"next-shape","next-shape",103541154).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=primitive.js.map?rel=1526522341656
