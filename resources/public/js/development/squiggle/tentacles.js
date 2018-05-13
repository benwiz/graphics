// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.tentacles');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.tentacles.setup = (function squiggle$tentacles$setup(){
quil.core.frame_rate.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(0));

quil.core.stroke.call(null,(0),(0),(255));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.rand_int.call(null,(360)),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(quil.core.height.call(null) / (2))], null);
});
squiggle.tentacles.update_state = (function squiggle$tentacles$update_state(state){
var next_size = (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) - (5));
var size = ((cljs.core._EQ_.call(null,next_size,(0)))?(50):next_size);
var hue = ((cljs.core._EQ_.call(null,size,(50)))?cljs.core.rand_int.call(null,(360)):new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state));
var x = ((cljs.core._EQ_.call(null,size,(50)))?quil.core.mouse_x.call(null):((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + (cljs.core.rand_int.call(null,(10)) + (10))) * cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))));
var y = ((cljs.core._EQ_.call(null,size,(50)))?quil.core.mouse_y.call(null):((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + (cljs.core.rand_int.call(null,(10)) + (10))) * cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"hue","hue",-508078848),hue,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
squiggle.tentacles.draw_state = (function squiggle$tentacles$draw_state(state){
if(cljs.core.truth_(quil.core.mouse_pressed_QMARK_.call(null))){
quil.core.fill.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state),(250),(250));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});

//# sourceMappingURL=tentacles.js.map?rel=1526255353756
