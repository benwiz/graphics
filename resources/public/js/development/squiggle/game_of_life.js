// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.game_of_life');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('clojure.core.matrix');
squiggle.game_of_life.matrix_width = (25);
squiggle.game_of_life.matrix_height = (25);
squiggle.game_of_life.n_live_neighbors = (function squiggle$game_of_life$n_live_neighbors(state,i,j){
return cljs.core.get.call(null,cljs.core.frequencies.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((i > (0))) && ((j > (0)))))?clojure.core.matrix.mget.call(null,state,(i - (1)),(j - (1))):(-1)),(((j > (0)))?clojure.core.matrix.mget.call(null,state,i,(j - (1))):(-1)),(((((i < (squiggle.game_of_life.matrix_width - (1)))) && ((j > (0)))))?clojure.core.matrix.mget.call(null,state,(i + (1)),(j - (1))):(-1)),(((i > (0)))?clojure.core.matrix.mget.call(null,state,(i - (1)),j):(-1)),(((i < (squiggle.game_of_life.matrix_width - (1))))?clojure.core.matrix.mget.call(null,state,(i + (1)),j):(-1)),(((((i > (0))) && ((j < (squiggle.game_of_life.matrix_height - (1))))))?clojure.core.matrix.mget.call(null,state,(i - (1)),(j + (1))):(-1)),(((j < (squiggle.game_of_life.matrix_height - (1))))?clojure.core.matrix.mget.call(null,state,i,(j + (1))):(-1)),(((((i < (squiggle.game_of_life.matrix_width - (1)))) && ((j < (squiggle.game_of_life.matrix_height - (1))))))?clojure.core.matrix.mget.call(null,state,(i + (1)),(j + (1))):(-1))], null)),(1));
});
squiggle.game_of_life.tick = (function squiggle$game_of_life$tick(state,index,value){
var i = cljs.core.nth.call(null,index,(0));
var j = cljs.core.nth.call(null,index,(1));
var n = squiggle.game_of_life.n_live_neighbors.call(null,state,i,j);
if(cljs.core._EQ_.call(null,value,(1))){
if((n < (2))){
return (0);
} else {
if((n > (3))){
return (0);
} else {
return (1);

}
}
} else {
if(cljs.core._EQ_.call(null,n,(3))){
return (1);
} else {
return (0);

}
}
});
squiggle.game_of_life.draw_cell = (function squiggle$game_of_life$draw_cell(index,value){
var i = cljs.core.nth.call(null,index,(0));
var j = cljs.core.nth.call(null,index,(1));
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
quil.core.frame_rate.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(0));

quil.core.fill.call(null,(0),(0),(255));

return clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.mset.call(null,clojure.core.matrix.new_matrix.call(null,squiggle.game_of_life.matrix_width,squiggle.game_of_life.matrix_height),(9),(11),(1)),(10),(11),(1)),(11),(11),(1)),(12),(11),(1)),(13),(11),(1)),(14),(11),(1)),(15),(11),(1)),(16),(11),(1)),(9),(12),(1)),(11),(12),(1)),(12),(12),(1)),(13),(12),(1)),(14),(12),(1)),(16),(12),(1)),(9),(13),(1)),(10),(13),(1)),(11),(13),(1)),(12),(13),(1)),(13),(13),(1)),(14),(13),(1)),(15),(13),(1)),(16),(13),(1));
});
squiggle.game_of_life.update_state = (function squiggle$game_of_life$update_state(state){
quil.core.background.call(null,(0));

return clojure.core.matrix.emap_indexed.call(null,(function (index,value){
return squiggle.game_of_life.tick.call(null,state,index,value);
}),state);
});
squiggle.game_of_life.draw_state = (function squiggle$game_of_life$draw_state(state){
return clojure.core.matrix.emap_indexed.call(null,squiggle.game_of_life.draw_cell,state);
});

//# sourceMappingURL=game_of_life.js.map?rel=1526073948184
