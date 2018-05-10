// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.ten_print_remake');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.ten_print_remake.next_x = (function squiggle$ten_print_remake$next_x(x,r){
var desired_x = (x + (quil.core.width.call(null) / r));
if((desired_x > quil.core.width.call(null))){
return (0);
} else {
return desired_x;
}
});
squiggle.ten_print_remake.next_y = (function squiggle$ten_print_remake$next_y(x,y,r){
var desired_y = ((cljs.core._EQ_.call(null,x,quil.core.width.call(null)))?(y + (quil.core.width.call(null) / r)):y);
if((desired_y >= (240))){
return (0);
} else {
return desired_y;
}
});
squiggle.ten_print_remake.down_right = (function squiggle$ten_print_remake$down_right(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + (20)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (20))], null);
});
squiggle.ten_print_remake.setup = (function squiggle$ten_print_remake$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(20));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),(200),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
});
squiggle.ten_print_remake.update_state = (function squiggle$ten_print_remake$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.rand_int.call(null,(255)),new cljs.core.Keyword(null,"x","x",2099068185),squiggle.ten_print_remake.next_x.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),(10)),new cljs.core.Keyword(null,"y","y",-1757859776),squiggle.ten_print_remake.next_y.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),(10))], null);
});
squiggle.ten_print_remake.draw_state = (function squiggle$ten_print_remake$draw_state(state){
quil.core.stroke.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var coords = squiggle.ten_print_remake.down_right.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
return quil.core.line.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(coords));
});

//# sourceMappingURL=ten_print_remake.js.map?rel=1525923985308
