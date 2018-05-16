// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.primitive');
goog.require('cljs.core');
goog.require('quil.core');
squiggle.primitive.setup = (function squiggle$primitive$setup(filename){
quil.core.background.call(null,(255),(200),(100));

var path = ((cljs.core._EQ_.call(null,window.location.hostname,"benwiz.io"))?["/squiggle/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''):["/assets/images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),quil.core.request_image.call(null,path)], null);
});
squiggle.primitive.setup_starry_night = (function squiggle$primitive$setup_starry_night(){
return squiggle.primitive.setup.call(null,"starry-night.jpg");
});
squiggle.primitive.update_state = (function squiggle$primitive$update_state(state){
return state;
});
squiggle.primitive.draw_state = (function squiggle$primitive$draw_state(state){
return null;
});

//# sourceMappingURL=primitive.js.map?rel=1526513622062
