// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.ten_print_remake');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.ten_print_remake.setup = (function squiggle$ten_print_remake$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(20));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),(200),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
});
squiggle.ten_print_remake.update_state = (function squiggle$ten_print_remake$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state)], null);
});
squiggle.ten_print_remake.draw_state = (function squiggle$ten_print_remake$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),(50),(50));
});

//# sourceMappingURL=ten_print_remake.js.map?rel=1525922322971
