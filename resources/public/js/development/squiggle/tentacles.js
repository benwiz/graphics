// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.tentacles');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.tentacles.setup = (function squiggle$tentacles$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(0));

quil.core.stroke.call(null,(0),(0),(255));

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.rand_int.call(null,(360)),new cljs.core.Keyword(null,"sat","sat",1064662667),(255),new cljs.core.Keyword(null,"val","val",128701612),(255),new cljs.core.Keyword(null,"x-direction","x-direction",1053577041),(1),new cljs.core.Keyword(null,"y-direction","y-direction",-2054381685),(1),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(quil.core.height.call(null) / (2))], null);
});
squiggle.tentacles.update_state = (function squiggle$tentacles$update_state(state){
var next_size = (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) - (5));
var size = ((cljs.core._EQ_.call(null,next_size,(0)))?(50):next_size);
var hue = ((cljs.core._EQ_.call(null,size,(50)))?cljs.core.rand_int.call(null,(360)):new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state));
var sat = ((cljs.core._EQ_.call(null,size,(50)))?(cljs.core.rand_int.call(null,(105)) + (150)):new cljs.core.Keyword(null,"sat","sat",1064662667).cljs$core$IFn$_invoke$arity$1(state));
var val = ((cljs.core._EQ_.call(null,size,(50)))?(cljs.core.rand_int.call(null,(105)) + (150)):new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(state));
var x_direction = ((cljs.core._EQ_.call(null,size,(50)))?cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)):new cljs.core.Keyword(null,"x-direction","x-direction",1053577041).cljs$core$IFn$_invoke$arity$1(state));
var y_direction = ((cljs.core._EQ_.call(null,size,(50)))?cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)):new cljs.core.Keyword(null,"y-direction","y-direction",-2054381685).cljs$core$IFn$_invoke$arity$1(state));
var x = ((cljs.core._EQ_.call(null,size,(50)))?quil.core.mouse_x.call(null):(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int.call(null,(10)) + (3)) * x_direction)));
var y = ((cljs.core._EQ_.call(null,size,(50)))?quil.core.mouse_y.call(null):(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int.call(null,(10)) + (3)) * y_direction)));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"hue","hue",-508078848),hue,new cljs.core.Keyword(null,"sat","sat",1064662667),sat,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"x-direction","x-direction",1053577041),x_direction,new cljs.core.Keyword(null,"y-direction","y-direction",-2054381685),y_direction,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
squiggle.tentacles.draw_state = (function squiggle$tentacles$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"sat","sat",1064662667).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(state));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state));
});

//# sourceMappingURL=tentacles.js.map?rel=1526257927141
