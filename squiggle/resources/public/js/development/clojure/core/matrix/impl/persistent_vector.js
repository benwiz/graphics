// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__35468 = (i + (1));
var G__35469 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__35468;
v__$1 = G__35469;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__3911__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__3911__auto__){
var and__3911__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__3911__auto____$1){
var temp__5455__auto__ = cljs.core.next.call(null,shape);
if(temp__5455__auto__){
var ns = temp__5455__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__5455__auto__,and__3911__auto____$1,and__3911__auto__){
return (function (p1__35470_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__35470_SHARP_,ns);
});})(ns,temp__5455__auto__,and__3911__auto____$1,and__3911__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__5455__auto__,and__3911__auto____$1,and__3911__auto__){
return (function (p1__35471_SHARP_){
return !((p1__35471_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__5455__auto__,and__3911__auto____$1,and__3911__auto__))
,v);
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if(!((x instanceof cljs.core.PersistentVector))){
return false;
} else {
var and__3911__auto__ = cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x);
if(and__3911__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__3911__auto__;
}

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if((((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,dims);
if(temp__5455__auto__){
var dims__$1 = temp__5455__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,["Can't broadcast to a lower dimensional shape"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__27979__auto__ = r;
if(typeof x__27979__auto__ === 'number'){
return x__27979__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__27979__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var temp__5455__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5455__auto____$1){
var next_indexes = temp__5455__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,["Trying to set on a persistent vector with insufficient indexes?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__35472_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__35472_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__35474(s__35475){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__35475__$1 = s__35475;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35475__$1);
if(temp__5457__auto__){
var s__35475__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35475__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35475__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35477 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35476 = (0);
while(true){
if((i__35476 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__35476);
cljs.core.chunk_append.call(null,b__35477,cljs.core.mapv.call(null,((function (i__35476,j,c__4290__auto__,size__4291__auto__,b__35477,s__35475__$2,temp__5457__auto__,m__$1){
return (function (p1__35473_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__35473_SHARP_,j);
});})(i__35476,j,c__4290__auto__,size__4291__auto__,b__35477,s__35475__$2,temp__5457__auto__,m__$1))
,m__$1));

var G__35478 = (i__35476 + (1));
i__35476 = G__35478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35477),clojure$core$matrix$impl$persistent_vector$iter__35474.call(null,cljs.core.chunk_rest.call(null,s__35475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35477),null);
}
} else {
var j = cljs.core.first.call(null,s__35475__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__35475__$2,temp__5457__auto__,m__$1){
return (function (p1__35473_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__35473_SHARP_,j);
});})(j,s__35475__$2,temp__5457__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__35474.call(null,cljs.core.rest.call(null,s__35475__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,["Joining with array of incompatible size"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,ordering);
if(temp__5455__auto__){
var ordering__$1 = temp__5455__auto__;
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,ordering__$1));
var next_ordering = cljs.core.map.call(null,((function (dim,ordering__$1,temp__5455__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__5455__auto__,m__$1))
,cljs.core.next.call(null,ordering__$1));
var slice_range = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dim));
return cljs.core.mapv.call(null,((function (dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.get_slice.call(null,m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__35479_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__35479_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__35480_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__35480_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1))){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_.call(null,shape)){
throw cljs.core.ex_info.call(null,["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.next.call(null,shape),cljs.core.map.call(null,clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__35481 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__35481,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35481,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__35484 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__35484,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35484,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,["Mismatched vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__35487 = (i + (1));
var G__35488 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__35487;
res = G__35488;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__35489 = (i + (1));
var G__35490 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__35489;
res = G__35490;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__35491 = (i + (1));
var G__35492 = (res + (x * x));
i = G__35491;
res = G__35492;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__35493 = (i + (1));
var G__35494 = (res + (x * x));
i = G__35493;
res = G__35494;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
var acount = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,acount,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__3911__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__3911__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),clojure.core.matrix.protocols.get_1d.call(null,b,i)))){
var G__35495 = (i + (1));
i = G__35495;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3911__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),b.call(null,i)))){
var G__35496 = (i + (1));
i = G__35496;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__35497 = cljs.core.next.call(null,sa);
var G__35498 = cljs.core.next.call(null,sb);
sa = G__35497;
sb = G__35498;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__35500 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__35500,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35500,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__35503(s__35504){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__35504__$1 = s__35504;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35504__$1);
if(temp__5457__auto__){
var s__35504__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35504__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35504__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35506 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35505 = (0);
while(true){
if((i__35505 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__35505);
cljs.core.chunk_append.call(null,b__35506,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__35511 = (i__35505 + (1));
i__35505 = G__35511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35506),clojure$core$matrix$impl$persistent_vector$iter__35503.call(null,cljs.core.chunk_rest.call(null,s__35504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35506),null);
}
} else {
var i = cljs.core.first.call(null,s__35504__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__35503.call(null,cljs.core.rest.call(null,s__35504__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__35499_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__35499_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__35507(s__35508){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__35508__$1 = s__35508;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35508__$1);
if(temp__5457__auto__){
var s__35508__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35508__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35508__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35510 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35509 = (0);
while(true){
if((i__35509 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__35509);
cljs.core.chunk_append.call(null,b__35510,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__35512 = (i__35509 + (1));
i__35509 = G__35512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35510),clojure$core$matrix$impl$persistent_vector$iter__35507.call(null,cljs.core.chunk_rest.call(null,s__35508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35510),null);
}
} else {
var j = cljs.core.first.call(null,s__35508__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__35507.call(null,cljs.core.rest.call(null,s__35508__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if(!((cljs.core.long$.call(null,cljs.core.last.call(null,clojure.core.matrix.protocols.get_shape.call(null,m__$1))) === cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__35513_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__35513_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__35514_SHARP_){
return (p1__35514_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__35515_SHARP_){
return (a * p1__35515_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__35517){
var vec__35518 = p__35517;
var name = cljs.core.nth.call(null,vec__35518,(0),null);
var func = cljs.core.nth.call(null,vec__35518,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35516__auto__","x__35516__auto__",-1494708454,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35516__auto__","x__35516__auto__",-1494708454,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))))),null,(1),null)))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__34679__auto__ = m__$1;
return ((((0) === cljs.core.count.call(null,pv__34679__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__34679__auto__,(0)))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1))){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,["Can't convert to persistent vector array: inconsistent shape."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.call(null,["Invalid shape while copying to double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
var m__$1 = m;
var ct = cljs.core.count.call(null,m__$1);
var skip = cljs.core.quot.call(null,size,ct);
var n__4376__auto__ = ct;
var i = (0);
while(true){
if((i < n__4376__auto__)){
var slc_35523 = cljs.core.nth.call(null,m__$1,i);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,slc_35523,arr,(off + (i * skip)),skip);

var G__35524 = (i + (1));
i = G__35524;
continue;
} else {
return null;
}
break;
}
} else {
var vals__27944__auto__ = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__27944__auto__){
var v = cljs.core.first.call(null,vals__27944__auto__);
(arr[(off + i)] = v);

var G__35525 = cljs.core.next.call(null,vals__27944__auto__);
var G__35526 = (i + (1));
vals__27944__auto__ = G__35525;
i = G__35526;
continue;
} else {
return null;
}
break;
}

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__27944__auto___35527 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_35528 = cljs.core.long$.call(null,(0));
while(true){
if(vals__27944__auto___35527){
var v_35529 = cljs.core.first.call(null,vals__27944__auto___35527);
(arr[(off + i_35528)] = v_35529);

var G__35530 = cljs.core.next.call(null,vals__27944__auto___35527);
var G__35531 = (i_35528 + (1));
vals__27944__auto___35527 = G__35530;
i_35528 = G__35531;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null)))))){
var n__4376__auto___35532 = size;
var i_35533 = (0);
while(true){
if((i_35533 < n__4376__auto___35532)){
(arr[(off + i_35533)] = cljs.core.nth.call(null,m,i_35533));

var G__35534 = (i_35533 + (1));
i_35533 = G__35534;
continue;
} else {
}
break;
}
} else {
var skip_35535 = cljs.core.quot.call(null,size,ct);
var n__4376__auto___35536 = ct;
var i_35537 = (0);
while(true){
if((i_35537 < n__4376__auto___35536)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_35537),arr,(off + (i_35537 * skip_35535)),skip_35535);

var G__35538 = (i_35537 + (1));
i_35537 = G__35538;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__35541 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__35541,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35541,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__3922__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__35539_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__35539_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__35544_35548 = cljs.core.seq.call(null,m__$1);
var chunk__35545_35549 = null;
var count__35546_35550 = (0);
var i__35547_35551 = (0);
while(true){
if((i__35547_35551 < count__35546_35550)){
var s_35552 = cljs.core._nth.call(null,chunk__35545_35549,i__35547_35551);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_35552,f);


var G__35553 = seq__35544_35548;
var G__35554 = chunk__35545_35549;
var G__35555 = count__35546_35550;
var G__35556 = (i__35547_35551 + (1));
seq__35544_35548 = G__35553;
chunk__35545_35549 = G__35554;
count__35546_35550 = G__35555;
i__35547_35551 = G__35556;
continue;
} else {
var temp__5457__auto___35557 = cljs.core.seq.call(null,seq__35544_35548);
if(temp__5457__auto___35557){
var seq__35544_35558__$1 = temp__5457__auto___35557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35544_35558__$1)){
var c__4319__auto___35559 = cljs.core.chunk_first.call(null,seq__35544_35558__$1);
var G__35560 = cljs.core.chunk_rest.call(null,seq__35544_35558__$1);
var G__35561 = c__4319__auto___35559;
var G__35562 = cljs.core.count.call(null,c__4319__auto___35559);
var G__35563 = (0);
seq__35544_35548 = G__35560;
chunk__35545_35549 = G__35561;
count__35546_35550 = G__35562;
i__35547_35551 = G__35563;
continue;
} else {
var s_35564 = cljs.core.first.call(null,seq__35544_35558__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_35564,f);


var G__35565 = cljs.core.next.call(null,seq__35544_35558__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35544_35548 = G__35565;
chunk__35545_35549 = G__35566;
count__35546_35550 = G__35567;
i__35547_35551 = G__35568;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4376__auto___35569 = cljs.core.count.call(null,m__$1);
var i_35570 = (0);
while(true){
if((i_35570 < n__4376__auto___35569)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_35570),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_35570));

var G__35571 = (i_35570 + (1));
i_35570 = G__35571;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4376__auto___35572 = cljs.core.count.call(null,m__$1);
var i_35573 = (0);
while(true){
if((i_35573 < n__4376__auto___35572)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_35573),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_35573),cljs.core.map.call(null,((function (i_35573,n__4376__auto___35572,m__$1){
return (function (p1__35540_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__35540_SHARP_,i_35573);
});})(i_35573,n__4376__auto___35572,m__$1))
,more));

var G__35574 = (i_35573 + (1));
i_35573 = G__35574;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__27979__auto__ = ms__$1;
if(typeof x__27979__auto__ === 'number'){
return x__27979__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__27979__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__35594(s__35595){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__35595__$1 = s__35595;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35595__$1);
if(temp__5457__auto__){
var s__35595__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35595__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35595__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35597 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35596 = (0);
while(true){
if((i__35596 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__35596);
cljs.core.chunk_append.call(null,b__35597,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__35602 = (i__35596 + (1));
i__35596 = G__35602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35597),clojure$core$matrix$impl$persistent_vector$iter__35594.call(null,cljs.core.chunk_rest.call(null,s__35595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35597),null);
}
} else {
var i = cljs.core.first.call(null,s__35595__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__35594.call(null,cljs.core.rest.call(null,s__35595__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__35598(s__35599){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__35599__$1 = s__35599;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35599__$1);
if(temp__5457__auto__){
var s__35599__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35599__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35599__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35601 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35600 = (0);
while(true){
if((i__35600 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__35600);
cljs.core.chunk_append.call(null,b__35601,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__35600,i,c__4290__auto__,size__4291__auto__,b__35601,s__35599__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__35575_SHARP_,p2__35576_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__35575_SHARP_),p2__35576_SHARP_);
});})(i__35600,i,c__4290__auto__,size__4291__auto__,b__35601,s__35599__$2,temp__5457__auto__,dims,ms__$1))
));

var G__35603 = (i__35600 + (1));
i__35600 = G__35603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35601),clojure$core$matrix$impl$persistent_vector$iter__35598.call(null,cljs.core.chunk_rest.call(null,s__35599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35601),null);
}
} else {
var i = cljs.core.first.call(null,s__35599__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__35599__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__35575_SHARP_,p2__35576_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__35575_SHARP_),p2__35576_SHARP_);
});})(i,s__35599__$2,temp__5457__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__35598.call(null,cljs.core.rest.call(null,s__35599__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,["mapping with array of higher dimensionality?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0)))))){
throw cljs.core.ex_info.call(null,["Incompatible vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__27979__auto__ = as__$1;
if(typeof x__27979__auto__ === 'number'){
return x__27979__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__27979__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__35577_SHARP_,p2__35578_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35577_SHARP_], null),p2__35578_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__35604__delegate = function (p1__35579_SHARP_,rest__35580_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35579_SHARP_], null),rest__35580_SHARP_);
};
var G__35604 = function (p1__35579_SHARP_,var_args){
var rest__35580_SHARP_ = null;
if (arguments.length > 1) {
var G__35605__i = 0, G__35605__a = new Array(arguments.length -  1);
while (G__35605__i < G__35605__a.length) {G__35605__a[G__35605__i] = arguments[G__35605__i + 1]; ++G__35605__i;}
  rest__35580_SHARP_ = new cljs.core.IndexedSeq(G__35605__a,0,null);
} 
return G__35604__delegate.call(this,p1__35579_SHARP_,rest__35580_SHARP_);};
G__35604.cljs$lang$maxFixedArity = 1;
G__35604.cljs$lang$applyTo = (function (arglist__35606){
var p1__35579_SHARP_ = cljs.core.first(arglist__35606);
var rest__35580_SHARP_ = cljs.core.rest(arglist__35606);
return G__35604__delegate(p1__35579_SHARP_,rest__35580_SHARP_);
});
G__35604.cljs$core$IFn$_invoke$arity$variadic = G__35604__delegate;
return G__35604;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__35607__delegate = function (p1__35581_SHARP_,rest__35582_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__35581_SHARP_),rest__35582_SHARP_);
};
var G__35607 = function (p1__35581_SHARP_,var_args){
var rest__35582_SHARP_ = null;
if (arguments.length > 1) {
var G__35608__i = 0, G__35608__a = new Array(arguments.length -  1);
while (G__35608__i < G__35608__a.length) {G__35608__a[G__35608__i] = arguments[G__35608__i + 1]; ++G__35608__i;}
  rest__35582_SHARP_ = new cljs.core.IndexedSeq(G__35608__a,0,null);
} 
return G__35607__delegate.call(this,p1__35581_SHARP_,rest__35582_SHARP_);};
G__35607.cljs$lang$maxFixedArity = 1;
G__35607.cljs$lang$applyTo = (function (arglist__35609){
var p1__35581_SHARP_ = cljs.core.first(arglist__35609);
var rest__35582_SHARP_ = cljs.core.rest(arglist__35609);
return G__35607__delegate(p1__35581_SHARP_,rest__35582_SHARP_);
});
G__35607.cljs$core$IFn$_invoke$arity$variadic = G__35607__delegate;
return G__35607;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__35610__delegate = function (p1__35583_SHARP_,rest__35584_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35583_SHARP_], null),rest__35584_SHARP_);
};
var G__35610 = function (p1__35583_SHARP_,var_args){
var rest__35584_SHARP_ = null;
if (arguments.length > 1) {
var G__35611__i = 0, G__35611__a = new Array(arguments.length -  1);
while (G__35611__i < G__35611__a.length) {G__35611__a[G__35611__i] = arguments[G__35611__i + 1]; ++G__35611__i;}
  rest__35584_SHARP_ = new cljs.core.IndexedSeq(G__35611__a,0,null);
} 
return G__35610__delegate.call(this,p1__35583_SHARP_,rest__35584_SHARP_);};
G__35610.cljs$lang$maxFixedArity = 1;
G__35610.cljs$lang$applyTo = (function (arglist__35612){
var p1__35583_SHARP_ = cljs.core.first(arglist__35612);
var rest__35584_SHARP_ = cljs.core.rest(arglist__35612);
return G__35610__delegate(p1__35583_SHARP_,rest__35584_SHARP_);
});
G__35610.cljs$core$IFn$_invoke$arity$variadic = G__35610__delegate;
return G__35610;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__35613__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__35614__delegate = function (p1__35585_SHARP_,rest__35586_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__35585_SHARP_),rest__35586_SHARP_);
};
var G__35614 = function (p1__35585_SHARP_,var_args){
var rest__35586_SHARP_ = null;
if (arguments.length > 1) {
var G__35615__i = 0, G__35615__a = new Array(arguments.length -  1);
while (G__35615__i < G__35615__a.length) {G__35615__a[G__35615__i] = arguments[G__35615__i + 1]; ++G__35615__i;}
  rest__35586_SHARP_ = new cljs.core.IndexedSeq(G__35615__a,0,null);
} 
return G__35614__delegate.call(this,p1__35585_SHARP_,rest__35586_SHARP_);};
G__35614.cljs$lang$maxFixedArity = 1;
G__35614.cljs$lang$applyTo = (function (arglist__35616){
var p1__35585_SHARP_ = cljs.core.first(arglist__35616);
var rest__35586_SHARP_ = cljs.core.rest(arglist__35616);
return G__35614__delegate(p1__35585_SHARP_,rest__35586_SHARP_);
});
G__35614.cljs$core$IFn$_invoke$arity$variadic = G__35614__delegate;
return G__35614;
})()
;})(ms__$1))
,a,mr);
};
var G__35613 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__35617__i = 0, G__35617__a = new Array(arguments.length -  3);
while (G__35617__i < G__35617__a.length) {G__35617__a[G__35617__i] = arguments[G__35617__i + 3]; ++G__35617__i;}
  mr = new cljs.core.IndexedSeq(G__35617__a,0,null);
} 
return G__35613__delegate.call(this,i,m,a,mr);};
G__35613.cljs$lang$maxFixedArity = 3;
G__35613.cljs$lang$applyTo = (function (arglist__35618){
var i = cljs.core.first(arglist__35618);
arglist__35618 = cljs.core.next(arglist__35618);
var m = cljs.core.first(arglist__35618);
arglist__35618 = cljs.core.next(arglist__35618);
var a = cljs.core.first(arglist__35618);
var mr = cljs.core.rest(arglist__35618);
return G__35613__delegate(i,m,a,mr);
});
G__35613.cljs$core$IFn$_invoke$arity$variadic = G__35613__delegate;
return G__35613;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4376__auto___35619 = cljs.core.count.call(null,m__$1);
var i_35620 = (0);
while(true){
if((i_35620 < n__4376__auto___35619)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_35620),((function (i_35620,n__4376__auto___35619,m__$1){
return (function (p1__35587_SHARP_,p2__35588_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_35620,p1__35587_SHARP_),p2__35588_SHARP_);
});})(i_35620,n__4376__auto___35619,m__$1))
);

var G__35621 = (i_35620 + (1));
i_35620 = G__35621;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4376__auto___35622 = cljs.core.count.call(null,m__$1);
var i_35623 = (0);
while(true){
if((i_35623 < n__4376__auto___35622)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_35623),((function (i_35623,n__4376__auto___35622,m__$1){
return (function() { 
var G__35624__delegate = function (p1__35589_SHARP_,rest__35590_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_35623,p1__35589_SHARP_),rest__35590_SHARP_);
};
var G__35624 = function (p1__35589_SHARP_,var_args){
var rest__35590_SHARP_ = null;
if (arguments.length > 1) {
var G__35625__i = 0, G__35625__a = new Array(arguments.length -  1);
while (G__35625__i < G__35625__a.length) {G__35625__a[G__35625__i] = arguments[G__35625__i + 1]; ++G__35625__i;}
  rest__35590_SHARP_ = new cljs.core.IndexedSeq(G__35625__a,0,null);
} 
return G__35624__delegate.call(this,p1__35589_SHARP_,rest__35590_SHARP_);};
G__35624.cljs$lang$maxFixedArity = 1;
G__35624.cljs$lang$applyTo = (function (arglist__35626){
var p1__35589_SHARP_ = cljs.core.first(arglist__35626);
var rest__35590_SHARP_ = cljs.core.rest(arglist__35626);
return G__35624__delegate(p1__35589_SHARP_,rest__35590_SHARP_);
});
G__35624.cljs$core$IFn$_invoke$arity$variadic = G__35624__delegate;
return G__35624;
})()
;})(i_35623,n__4376__auto___35622,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_35623));

var G__35627 = (i_35623 + (1));
i_35623 = G__35627;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4376__auto___35628 = cljs.core.count.call(null,m__$1);
var i_35629 = (0);
while(true){
if((i_35629 < n__4376__auto___35628)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_35629),((function (i_35629,n__4376__auto___35628,m__$1){
return (function() { 
var G__35630__delegate = function (p1__35591_SHARP_,rest__35592_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_35629,p1__35591_SHARP_),rest__35592_SHARP_);
};
var G__35630 = function (p1__35591_SHARP_,var_args){
var rest__35592_SHARP_ = null;
if (arguments.length > 1) {
var G__35631__i = 0, G__35631__a = new Array(arguments.length -  1);
while (G__35631__i < G__35631__a.length) {G__35631__a[G__35631__i] = arguments[G__35631__i + 1]; ++G__35631__i;}
  rest__35592_SHARP_ = new cljs.core.IndexedSeq(G__35631__a,0,null);
} 
return G__35630__delegate.call(this,p1__35591_SHARP_,rest__35592_SHARP_);};
G__35630.cljs$lang$maxFixedArity = 1;
G__35630.cljs$lang$applyTo = (function (arglist__35632){
var p1__35591_SHARP_ = cljs.core.first(arglist__35632);
var rest__35592_SHARP_ = cljs.core.rest(arglist__35632);
return G__35630__delegate(p1__35591_SHARP_,rest__35592_SHARP_);
});
G__35630.cljs$core$IFn$_invoke$arity$variadic = G__35630__delegate;
return G__35630;
})()
;})(i_35629,n__4376__auto___35628,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_35629),cljs.core.map.call(null,((function (i_35629,n__4376__auto___35628,m__$1){
return (function (p1__35593_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__35593_SHARP_,i_35629);
});})(i_35629,n__4376__auto___35628,m__$1))
,more));

var G__35633 = (i_35629 + (1));
i_35629 = G__35633;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__35634_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__35634_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,["Array dimension does not match length of args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__35635_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__35635_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map?rel=1526052102099
