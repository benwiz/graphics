// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.primitive');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.primitive.error = (function squiggle$primitive$error(t,p){
return Math.pow((p - t),(2));
});
squiggle.primitive.mse = (function squiggle$primitive$mse(target,prediction){

return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,squiggle.primitive.error,target,prediction)) / cljs.core.count.call(null,prediction));
});
squiggle.primitive.setup = (function squiggle$primitive$setup(filename){
quil.core.frame_rate.call(null,(1));

quil.core.background.call(null,(255),(200),(105));

var path = ((cljs.core._EQ_.call(null,window.location.hostname,"benwiz.io"))?["/squiggle/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''):["/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-image","target-image",1796431459),quil.core.load_image.call(null,path),new cljs.core.Keyword(null,"prediction-pixels","prediction-pixels",-506822864),quil.core.pixels.call(null)], null);
});
squiggle.primitive.setup_starry_night = (function squiggle$primitive$setup_starry_night(){
return squiggle.primitive.setup.call(null,"starry-night.jpg");
});
squiggle.primitive.update_state = (function squiggle$primitive$update_state(state){
cljs.core.println.call(null,squiggle.primitive.mse.call(null,quil.core.pixels.call(null,new cljs.core.Keyword(null,"target-image","target-image",1796431459).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"prediction-pixels","prediction-pixels",-506822864).cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
squiggle.primitive.draw_state = (function squiggle$primitive$draw_state(state){
return null;
});

//# sourceMappingURL=primitive.js.map?rel=1526517670100
