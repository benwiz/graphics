// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.game_of_life');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('clojure.core.matrix');
squiggle.game_of_life.matrix_width = (10);
squiggle.game_of_life.matrix_height = (10);
squiggle.game_of_life.draw_cell = (function squiggle$game_of_life$draw_cell(i,j,value){
var cell_width = (quil.core.width.call(null) / squiggle.game_of_life.matrix_width);
var cell_height = (quil.core.height.call(null) / squiggle.game_of_life.matrix_height);
var x = (i * cell_width);
var y = (j * cell_height);
if(cljs.core._EQ_.call(null,value,(1))){
return quil.core.rect.call(null,x,y,cell_width,cell_height);
} else {
return null;
}
});
squiggle.game_of_life.setup = (function squiggle$game_of_life$setup(){
quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(0));

quil.core.fill.call(null,(0),(0),(255));

return clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.new_matrix.call(null,squiggle.game_of_life.matrix_width,squiggle.game_of_life.matrix_height),(3),(3),(1)),(4),(3),(1)),(5),(3),(1));
});
squiggle.game_of_life.update_state = (function squiggle$game_of_life$update_state(state){
return state;
});
squiggle.game_of_life.draw_state = (function squiggle$game_of_life$draw_state(state){
return clojure.core.matrix.emap_indexed.call(null,(function (index,value){
return squiggle.game_of_life.draw_cell.call(null,cljs.core.nth.call(null,index,(0)),cljs.core.nth.call(null,index,(1)),value);
}),state);
});

//# sourceMappingURL=game_of_life.js.map?rel=1526054658988
