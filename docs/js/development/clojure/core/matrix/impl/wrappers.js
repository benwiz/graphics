// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.wrappers');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.utils');



/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.ScalarWrapper = (function (value){
this.value = value;
});
clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value)].join('');
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"scalar-wrapper","scalar-wrapper",-1626299275);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a single scalar as a mutable 0-D array"], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,data))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(data));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d.call(null,data)));
}
} else {
return clojure.core.matrix.protocols.clone.call(null,data);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$.call(null,dims) === (0));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (0);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't get dimension-count of ScalarWrapper: no dimensions exist"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't get-1d on ScalarWrapper."].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't get-2d on ScalarWrapper."].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't get-1d on ScalarWrapper."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return self__.value;
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't do 1D set on 0D array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Can't do 2D set on 0D array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
if(cljs.core.not.call(null,cljs.core.seq.call(null,indexes))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(v));
} else {
throw cljs.core.ex_info.call(null,["Can't set on 0D array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,v){
var self__ = this;
var m__$1 = this;
return self__.value = v;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(self__.value));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/ScalarWrapper";

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"clojure.core.matrix.impl.wrappers/ScalarWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/ScalarWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_ScalarWrapper = (function clojure$core$matrix$impl$wrappers$__GT_ScalarWrapper(value){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(value));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.SliceWrapper = (function (array,slice){
this.array = array;
this.slice = slice;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m))].join('');
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,self__.array))){
return clojure.core.matrix.protocols.get_1d.call(null,self__.array,self__.slice);
} else {
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,clojure.core.matrix.protocols.clone.call(null,self__.array),self__.slice);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_1d.call(null,self__.array,self__.slice);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d_BANG_.call(null,self__.array,self__.slice,value);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,self__.array)) - (1));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,self__.array));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,self__.array)));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
var dimension_number__$1 = cljs.core.long$.call(null,dimension_number);
if((dimension_number__$1 < (0))){
throw cljs.core.ex_info.call(null,["Can't access negative dimension!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,self__.array,(dimension_number__$1 + (1)));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d_BANG_.call(null,self__.array,self__.slice,row,v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,cljs.core.cons.call(null,self__.slice,indexes),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_2d.call(null,self__.array,self__.slice,row);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,cljs.core.cons.call(null,self__.slice,indexes));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$2,row,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$2,row,column,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$2,indexes,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,self__.array);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"slice-wrapper","slice-wrapper",449772415);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a row-major slice of an array"], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"slice","slice",-353076229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/SliceWrapper";

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"clojure.core.matrix.impl.wrappers/SliceWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/SliceWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_SliceWrapper = (function clojure$core$matrix$impl$wrappers$__GT_SliceWrapper(array,slice){
return (new clojure.core.matrix.impl.wrappers.SliceWrapper(array,slice));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {cljs.core.IIndexed}
 * @implements {clojure.core.matrix.protocols.PSubVector}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PSliceView2}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.NDWrapper = (function (array,shape,dim_map,index_maps,source_position){
this.array = array;
this.shape = shape;
this.dim_map = dim_map;
this.index_maps = index_maps;
this.source_position = source_position;
this.cljs$lang$protocol_mask$partition0$ = 8388626;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.matrix.impl.wrappers.NDWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.persistent_vector_coerce.call(null,m))].join('');
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (m,i){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (m,i,not_found){
var self__ = this;
var m__$1 = this;
if(((cljs.core.integer_QMARK_.call(null,i)) && (((0) <= i)) && ((i < (self__.shape[(0)]))))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
return not_found;
}
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ICounted$_count$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (self__.shape[(0)]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,self__.source_position);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,self__.source_position,value);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape.length;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((1) === self__.shape.length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
return (self__.shape[(dimension_number | (0))]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var im = (self__.index_maps[(0)]);
var i35752_35760 = (0);
var tdim__35662__auto___35761 = (self__.dim_map[i35752_35760]);
if((tdim__35662__auto___35761 >= (0))){
(ix[tdim__35662__auto___35761] = ((self__.index_maps[i35752_35760])[row]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var i35753_35762 = (0);
var tdim__35662__auto___35763 = (self__.dim_map[i35753_35762]);
if((tdim__35662__auto___35763 >= (0))){
(ix[tdim__35662__auto___35763] = ((self__.index_maps[i35753_35762])[row]));
} else {
}

var i35754_35764 = (1);
var tdim__35662__auto___35765 = (self__.dim_map[i35754_35764]);
if((tdim__35662__auto___35765 >= (0))){
(ix[tdim__35662__auto___35765] = ((self__.index_maps[i35754_35764])[column]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var n = self__.shape.length;
if(cljs.core.not_EQ_.call(null,n,cljs.core.count.call(null,indexes))){
throw cljs.core.ex_info.call(null,["set-nd! called with index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,indexes))," indexes on wrapped array of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4376__auto___35766 = self__.shape.length;
var i_35767 = (0);
while(true){
if((i_35767 < n__4376__auto___35766)){
var i35755_35768 = i_35767;
var tdim__35662__auto___35769 = (self__.dim_map[i35755_35768]);
if((tdim__35662__auto___35769 >= (0))){
(ix[tdim__35662__auto___35769] = ((self__.index_maps[i35755_35768])[cljs.core.nth.call(null,indexes,i_35767)]));
} else {
}

var G__35770 = (i_35767 + (1));
i_35767 = G__35770;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var self__ = this;
var m__$1 = this;
if(cljs.core.not_EQ_.call(null,(1),self__.shape.length)){
throw cljs.core.ex_info.call(null,["Can't take subvector: wrong dimensionality = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape.length)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var vlen = cljs.core.long$.call(null,(self__.shape[(0)]));
var start__$1 = cljs.core.long$.call(null,start);
var length__$1 = cljs.core.long$.call(null,length);
var end = (start__$1 + length__$1);
var old_index_map = (self__.index_maps[(0)]);
var new_index_map = cljs.core.long_array.call(null,length__$1);
if((start__$1 < (0))){
throw cljs.core.ex_info.call(null,["Start index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((end > vlen)){
throw cljs.core.ex_info.call(null,["End index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4376__auto___35771 = length__$1;
var i_35772 = (0);
while(true){
if((i_35772 < n__4376__auto___35771)){
(new_index_map[i_35772] = (old_index_map[(start__$1 + i_35772)]));

var G__35773 = (i_35772 + (1));
i_35772 = G__35773;
continue;
} else {
}
break;
}

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,clojure.core.matrix.utils.long_array_of.call(null,length__$1),self__.dim_map,clojure.core.matrix.utils.object_array_of.call(null,new_index_map),clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position)));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var im = (self__.index_maps[(0)]);
var i35756_35774 = (0);
var tdim__35662__auto___35775 = (self__.dim_map[i35756_35774]);
if((tdim__35662__auto___35775 >= (0))){
(ix[tdim__35662__auto___35775] = ((self__.index_maps[i35756_35774])[row]));
} else {
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var i35757_35776 = (0);
var tdim__35662__auto___35777 = (self__.dim_map[i35757_35776]);
if((tdim__35662__auto___35777 >= (0))){
(ix[tdim__35662__auto___35777] = ((self__.index_maps[i35757_35776])[row]));
} else {
}

var i35758_35778 = (1);
var tdim__35662__auto___35779 = (self__.dim_map[i35758_35778]);
if((tdim__35662__auto___35779 >= (0))){
(ix[tdim__35662__auto___35779] = ((self__.index_maps[i35758_35778])[column]));
} else {
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var n__4376__auto___35780 = self__.shape.length;
var i_35781 = (0);
while(true){
if((i_35781 < n__4376__auto___35780)){
var i35759_35782 = i_35781;
var tdim__35662__auto___35783 = (self__.dim_map[i35759_35782]);
if((tdim__35662__auto___35783 >= (0))){
(ix[tdim__35662__auto___35783] = ((self__.index_maps[i35759_35782])[cljs.core.nth.call(null,indexes,i_35781)]));
} else {
}

var G__35784 = (i_35781 + (1));
i_35781 = G__35784;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dim,i){
var self__ = this;
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var dim__$1 = cljs.core.long$.call(null,dim);
var nsp = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var sdim = cljs.core.long$.call(null,(self__.dim_map[dim__$1]));
(nsp[sdim] = i__$1);

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,(function (){var n__28188__auto__ = self__.shape.length;
var length__28189__auto__ = ((n__28188__auto__ - (1)) | (0));
var new_xs__28190__auto__ = self__.shape.slice((0),length__28189__auto__);
var j__28191__auto___35785 = (dim__$1 | (0));
while(true){
if((j__28191__auto___35785 < (n__28188__auto__ - (1)))){
(new_xs__28190__auto__[(j__28191__auto___35785 | (0))] = (self__.shape[((j__28191__auto___35785 + (1)) | (0))]));

var G__35786 = (j__28191__auto___35785 + (1));
j__28191__auto___35785 = G__35786;
continue;
} else {
}
break;
}


return new_xs__28190__auto__;
})(),(function (){var n__28188__auto__ = self__.dim_map.length;
var length__28189__auto__ = ((n__28188__auto__ - (1)) | (0));
var new_xs__28190__auto__ = self__.dim_map.slice((0),length__28189__auto__);
var j__28191__auto___35787 = (dim__$1 | (0));
while(true){
if((j__28191__auto___35787 < (n__28188__auto__ - (1)))){
(new_xs__28190__auto__[(j__28191__auto___35787 | (0))] = (self__.dim_map[((j__28191__auto___35787 + (1)) | (0))]));

var G__35788 = (j__28191__auto___35787 + (1));
j__28191__auto___35787 = G__35788;
continue;
} else {
}
break;
}


return new_xs__28190__auto__;
})(),(function (){var n__28188__auto__ = self__.index_maps.length;
var length__28189__auto__ = ((n__28188__auto__ - (1)) | (0));
var new_xs__28190__auto__ = self__.index_maps.slice((0),length__28189__auto__);
var j__28191__auto___35789 = (dim__$1 | (0));
while(true){
if((j__28191__auto___35789 < (n__28188__auto__ - (1)))){
(new_xs__28190__auto__[(j__28191__auto___35789 | (0))] = (self__.index_maps[((j__28191__auto___35789 + (1)) | (0))]));

var G__35790 = (j__28191__auto___35789 + (1));
j__28191__auto___35789 = G__35790;
continue;
} else {
}
break;
}


return new_xs__28190__auto__;
})(),nsp));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),x,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),x,y,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),indexes,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,self__.array);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"nd-wrapper","nd-wrapper",563497943);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps an N-dimensional subset or broadcast of an array"], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.NDWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dim-map","dim-map",-1307232993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index-maps","index-maps",-257128425,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"source-position","source-position",915497720,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/NDWrapper";

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"clojure.core.matrix.impl.wrappers/NDWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/NDWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_NDWrapper = (function clojure$core$matrix$impl$wrappers$__GT_NDWrapper(array,shape,dim_map,index_maps,source_position){
return (new clojure.core.matrix.impl.wrappers.NDWrapper(array,shape,dim_map,index_maps,source_position));
});

/**
 * Creates a view of a major slice of an array.
 */
clojure.core.matrix.impl.wrappers.wrap_slice = (function clojure$core$matrix$impl$wrappers$wrap_slice(m,slice){
var slice__$1 = cljs.core.long$.call(null,slice);
if((slice__$1 >= cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))))){
throw cljs.core.ex_info.call(null,["Slice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slice__$1)," does not exist on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (new clojure.core.matrix.impl.wrappers.SliceWrapper(m,slice__$1));
});
/**
 * Wraps an array in a NDWrapper view. Useful for taking submatrices, subviews etc.
 */
clojure.core.matrix.impl.wrappers.wrap_nd = (function clojure$core$matrix$impl$wrappers$wrap_nd(m){
var shp = cljs.core.long_array.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var dims = shp.length;
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,clojure.core.matrix.utils.long_range.call(null,dims),cljs.core.object_array.call(null,cljs.core.map.call(null,((function (shp,dims){
return (function (p1__35791_SHARP_){
return clojure.core.matrix.utils.long_range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,p1__35791_SHARP_));
});})(shp,dims))
,cljs.core.range.call(null,dims))),cljs.core.long_array.call(null,dims)));
});
/**
 * Wraps an array using a selection of indexes for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_selection = (function clojure$core$matrix$impl$wrappers$wrap_selection(m,indices){
var shp = cljs.core.long_array.call(null,cljs.core.map.call(null,cljs.core.count,indices));
var dims = cljs.core.count.call(null,shp);
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,cljs.core.long_array.call(null,cljs.core.range.call(null,dims)),cljs.core.object_array.call(null,cljs.core.map.call(null,cljs.core.long_array,indices)),cljs.core.long_array.call(null,cljs.core.repeat.call(null,dims,(0)))));
});
/**
 * Wraps an array using a selection of [start length] ranges for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_submatrix = (function clojure$core$matrix$impl$wrappers$wrap_submatrix(m,dim_ranges){
var shp = clojure.core.matrix.protocols.get_shape.call(null,m);
var dims = cljs.core.count.call(null,shp);
var _ = ((!((dims === cljs.core.count.call(null,dim_ranges))))?(function(){throw cljs.core.ex_info.call(null,["submatrix ranges ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim_ranges)," do not match matrix dimensionality of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shp)].join(''),cljs.core.PersistentArrayMap.EMPTY)})():null);
var dim_ranges__$1 = cljs.core.mapv.call(null,((function (shp,dims,_){
return (function (a,cnt){
if(cljs.core.truth_(a)){
return cljs.core.vec.call(null,a);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cnt], null);
}
});})(shp,dims,_))
,dim_ranges,shp);
var new_shape = cljs.core.long_array.call(null,cljs.core.map.call(null,((function (shp,dims,_,dim_ranges__$1){
return (function (p__35792){
var vec__35793 = p__35792;
var start = cljs.core.nth.call(null,vec__35793,(0),null);
var len = cljs.core.nth.call(null,vec__35793,(1),null);
return len;
});})(shp,dims,_,dim_ranges__$1))
,dim_ranges__$1));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,new_shape,cljs.core.long_array.call(null,cljs.core.range.call(null,cljs.core.count.call(null,shp))),cljs.core.object_array.call(null,cljs.core.map.call(null,((function (shp,dims,_,dim_ranges__$1,new_shape){
return (function (p__35796){
var vec__35797 = p__35796;
var start = cljs.core.nth.call(null,vec__35797,(0),null);
var len = cljs.core.nth.call(null,vec__35797,(1),null);
return cljs.core.long_array.call(null,cljs.core.range.call(null,start,(start + len)));
});})(shp,dims,_,dim_ranges__$1,new_shape))
,dim_ranges__$1)),cljs.core.long_array.call(null,cljs.core.repeat.call(null,dims,(0)))));
});
/**
 * Wraps an array with broadcasting to the given target shape.
 */
clojure.core.matrix.impl.wrappers.wrap_broadcast = (function clojure$core$matrix$impl$wrappers$wrap_broadcast(m,target_shape){
var tshape = cljs.core.long_array.call(null,target_shape);
var tdims = tshape.length;
var mshape = cljs.core.long_array.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var mdims = mshape.length;
var dim_map = cljs.core.long_array.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,(tdims - mdims),(-1)),cljs.core.range.call(null,mdims)));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,tshape,dim_map,cljs.core.object_array.call(null,(function (){var iter__4292__auto__ = ((function (tshape,tdims,mshape,mdims,dim_map){
return (function clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__35800(s__35801){
return (new cljs.core.LazySeq(null,((function (tshape,tdims,mshape,mdims,dim_map){
return (function (){
var s__35801__$1 = s__35801;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35801__$1);
if(temp__5457__auto__){
var s__35801__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35801__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35801__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35803 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35802 = (0);
while(true){
if((i__35802 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__35802);
cljs.core.chunk_append.call(null,b__35803,(function (){var i__$1 = cljs.core.long$.call(null,i);
var arr = cljs.core.long_array.call(null,(tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_35804 = (mshape[mdim]);
var tdc_35805 = (tshape[i__$1]);
if((mdc_35804 === (1))){
} else {
if((mdc_35804 === tdc_35805)){
var n__4376__auto___35806 = mdc_35804;
var i_35807__$2 = (0);
while(true){
if((i_35807__$2 < n__4376__auto___35806)){
(arr[i_35807__$2] = i_35807__$2);

var G__35808 = (i_35807__$2 + (1));
i_35807__$2 = G__35808;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.call(null,["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq.call(null,mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq.call(null,tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})());

var G__35809 = (i__35802 + (1));
i__35802 = G__35809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35803),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__35800.call(null,cljs.core.chunk_rest.call(null,s__35801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35803),null);
}
} else {
var i = cljs.core.first.call(null,s__35801__$2);
return cljs.core.cons.call(null,(function (){var i__$1 = cljs.core.long$.call(null,i);
var arr = cljs.core.long_array.call(null,(tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_35810 = (mshape[mdim]);
var tdc_35811 = (tshape[i__$1]);
if((mdc_35810 === (1))){
} else {
if((mdc_35810 === tdc_35811)){
var n__4376__auto___35812 = mdc_35810;
var i_35813__$2 = (0);
while(true){
if((i_35813__$2 < n__4376__auto___35812)){
(arr[i_35813__$2] = i_35813__$2);

var G__35814 = (i_35813__$2 + (1));
i_35813__$2 = G__35814;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.call(null,["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq.call(null,mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq.call(null,tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})(),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__35800.call(null,cljs.core.rest.call(null,s__35801__$2)));
}
} else {
return null;
}
break;
}
});})(tshape,tdims,mshape,mdims,dim_map))
,null,null));
});})(tshape,tdims,mshape,mdims,dim_map))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,tdims));
})()),cljs.core.long_array.call(null,mdims)));
});
/**
 * Wraps a scalar value into a mutable 0D array.
 */
clojure.core.matrix.impl.wrappers.wrap_scalar = (function clojure$core$matrix$impl$wrappers$wrap_scalar(m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(m));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d.call(null,m)));

}
});
clojure.core.matrix.implementations.register_implementation.call(null,(new clojure.core.matrix.impl.wrappers.ScalarWrapper((13))));
clojure.core.matrix.implementations.register_implementation.call(null,(new clojure.core.matrix.impl.wrappers.NDWrapper(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.long_array.call(null,(0)),cljs.core.long_array.call(null,(0)),cljs.core.object_array.call(null,(0)),cljs.core.long_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))));

//# sourceMappingURL=wrappers.js.map?rel=1526052102399
