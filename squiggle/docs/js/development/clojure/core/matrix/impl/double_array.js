// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.impl.double_array');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
/**
 * Creates a new zero-filled nested double array of the given shape
 */
clojure.core.matrix.impl.double_array.new_double_array = (function clojure$core$matrix$impl$double_array$new_double_array(shape){
var dims = cljs.core.count.call(null,shape);
if(((0) === dims)){
return 0.0;
} else {
if(((1) === dims)){
return cljs.core.double_array.call(null,(cljs.core.first.call(null,shape) | (0)));
} else {
var ns = cljs.core.next.call(null,shape);
var rn = cljs.core.long$.call(null,cljs.core.first.call(null,shape));
var r0 = clojure.core.matrix.impl.double_array.new_double_array.call(null,ns);
return cljs.core.into_array.call(null,cljs.core.cons.call(null,r0,(function (){var iter__4292__auto__ = ((function (ns,rn,r0,dims){
return (function clojure$core$matrix$impl$double_array$new_double_array_$_iter__35856(s__35857){
return (new cljs.core.LazySeq(null,((function (ns,rn,r0,dims){
return (function (){
var s__35857__$1 = s__35857;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35857__$1);
if(temp__5457__auto__){
var s__35857__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35857__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35857__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35859 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35858 = (0);
while(true){
if((i__35858 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__35858);
cljs.core.chunk_append.call(null,b__35859,clojure.core.matrix.impl.double_array.new_double_array.call(null,ns));

var G__35860 = (i__35858 + (1));
i__35858 = G__35860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35859),clojure$core$matrix$impl$double_array$new_double_array_$_iter__35856.call(null,cljs.core.chunk_rest.call(null,s__35857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35859),null);
}
} else {
var i = cljs.core.first.call(null,s__35857__$2);
return cljs.core.cons.call(null,clojure.core.matrix.impl.double_array.new_double_array.call(null,ns),clojure$core$matrix$impl$double_array$new_double_array_$_iter__35856.call(null,cljs.core.rest.call(null,s__35857__$2)));
}
} else {
return null;
}
break;
}
});})(ns,rn,r0,dims))
,null,null));
});})(ns,rn,r0,dims))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(rn - (1))));
})()));

}
}
});
clojure.core.matrix.impl.double_array.construct_double_array = (function clojure$core$matrix$impl$double_array$construct_double_array(data){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data));
if((dims === (1))){
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,data,(0)));
var r = cljs.core.double_array.call(null,n);
var n__4376__auto___35861 = n;
var i_35862 = (0);
while(true){
if((i_35862 < n__4376__auto___35861)){
(r[i_35862] = clojure.core.matrix.protocols.get_1d.call(null,data,i_35862));

var G__35863 = (i_35862 + (1));
i_35862 = G__35863;
continue;
} else {
}
break;
}

return r;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,data);
} else {
return null;

}
}
});
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"array",true);

goog.object.set(clojure.core.matrix.protocols.assign,"array",(function (m,source){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PAssignment,"array",true);

goog.object.set(clojure.core.matrix.protocols.assign_BANG_,"array",(function (m,source){
var n__4376__auto___35864 = cljs.core.count.call(null,source);
var i_35865 = (0);
while(true){
if((i_35865 < n__4376__auto___35864)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i_35865,cljs.core.nth.call(null,source,i_35865));

var G__35866 = (i_35865 + (1));
i_35865 = G__35866;
continue;
} else {
}
break;
}

return m;
}));

goog.object.set(clojure.core.matrix.protocols.assign_array_BANG_,"array",(function (m,arr,start,length){
var length_35867__$1 = cljs.core.long$.call(null,length);
var start_35868__$1 = cljs.core.long$.call(null,start);
var n__4376__auto___35869 = length_35867__$1;
var i_35870 = (0);
while(true){
if((i_35870 < n__4376__auto___35869)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i_35870,cljs.core.nth.call(null,arr,(start_35868__$1 + i_35870)));

var G__35871 = (i_35870 + (1));
i_35870 = G__35871;
continue;
} else {
}
break;
}

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PImplementation,"array",true);

goog.object.set(clojure.core.matrix.protocols.implementation_key,"array",(function (m){
return new cljs.core.Keyword(null,"number-array","number-array",-676376237);
}));

goog.object.set(clojure.core.matrix.protocols.meta_info,"array",(function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure.core.matrix implementation for JS arrays"], null);
}));

goog.object.set(clojure.core.matrix.protocols.new_vector,"array",(function (m,length){
return cljs.core.double_array.call(null,(length | (0)));
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix,"array",(function (m,rows,columns){
return clojure.core.matrix.impl.double_array.new_double_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns], null));
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix_nd,"array",(function (m,shape){
return clojure.core.matrix.impl.double_array.new_double_array.call(null,shape);
}));

goog.object.set(clojure.core.matrix.protocols.construct_matrix,"array",(function (m,data){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data));
if((dims === (2))){
throw cljs.core.ex_info.call(null,["Double arrays in cljs only support a single dimension currently - submit a patch!"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === (1))){
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,data,(0)));
var arr = cljs.core.double_array.call(null,n);
var n__4376__auto___35872 = n;
var i_35873 = (0);
while(true){
if((i_35873 < n__4376__auto___35872)){
(arr[i_35873] = clojure.core.matrix.protocols.get_1d.call(null,data,i_35873));

var G__35874 = (i_35873 + (1));
i_35873 = G__35874;
continue;
} else {
}
break;
}

return arr;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,data);
} else {
return null;

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.supports_dimensionality_QMARK_,"array",(function (m,dims){
var dims__$1 = cljs.core.long$.call(null,dims);
return (((dims__$1 === (1))) || ((dims__$1 === (2))));
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"array",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"array",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"array",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"array",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"array",(function (m){
return (new cljs.core.List(null,cljs.core.count.call(null,m),null,(1),null));
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"array",(function (m,x){
if((cljs.core.long$.call(null,x) === (0))){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,["Double array does not have dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshaping,"array",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"array",(function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$double_array$partition_shape(es__$1,shape__$1){
var temp__5455__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__5455__auto__){
var s = temp__5455__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__5455__auto__,gv,es){
return (function (p1__35875_SHARP_){
return clojure$core$matrix$impl$double_array$partition_shape.call(null,p1__35875_SHARP_,ns);
});})(ns,plen,s,temp__5455__auto__,gv,es))
,cljs.core.partition.call(null,plen,es__$1));
} else {
return cljs.core.first.call(null,es__$1);
}
});})(gv,es))
;
var temp__5455__auto__ = cljs.core.seq.call(null,shape);
if(temp__5455__auto__){
var shape__$1 = temp__5455__auto__;
var fs = cljs.core.long$.call(null,cljs.core.first.call(null,shape__$1));
var parts = partition_shape.call(null,es,shape__$1);
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"array",(function (m){
return Number;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"array",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"array",(function (m,x){
return (m[(x | (0))]);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"array",(function (m,row,column){
throw cljs.core.ex_info.call(null,["Can't do get-2D from 1D double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"array",(function (m,indexes){
if(((1) === cljs.core.count.call(null,indexes))){
return (m[(cljs.core.first.call(null,indexes) | (0))]);
} else {
throw cljs.core.ex_info.call(null,["Can't get from double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"array",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"array",(function (m,x,v){
var arr = m.slice();
(arr[(x | (0))] = v);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"array",(function (m,x,y,v){
throw cljs.core.ex_info.call(null,["Can't do 2D set on double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"array",(function (m,indexes,v){
if(((1) === cljs.core.count.call(null,indexes))){
var arr = m.slice();
var x = (cljs.core.first.call(null,indexes) | (0));
(arr[(x | (0))] = v);

return arr;
} else {
throw cljs.core.ex_info.call(null,["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"array",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedSettingMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.set_1d_BANG_,"array",(function (m,x,v){
(m[(x | (0))] = v);

return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_2d_BANG_,"array",(function (m,x,y,v){
throw cljs.core.ex_info.call(null,["Can't do 2D set on double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd_BANG_,"array",(function (m,indexes,v){
if(((1) === cljs.core.count.call(null,indexes))){
(m[(cljs.core.first.call(null,indexes) | (0))] = v);

return m;
} else {
throw cljs.core.ex_info.call(null,["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"array",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"array",(function (m){
return m.slice();
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"array",true);

goog.object.set(clojure.core.matrix.protocols.scale,"array",(function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.call(null,len);
var a__$1 = a;
var n__4376__auto___35876 = len;
var i_35877 = (0);
while(true){
if((i_35877 < n__4376__auto___35876)){
(arr[i_35877] = (a__$1 * (m__$1[i_35877])));

var G__35878 = (i_35877 + (1));
i_35877 = G__35878;
continue;
} else {
}
break;
}

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"array",(function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.call(null,len);
var a__$1 = a;
var n__4376__auto___35879 = len;
var i_35880 = (0);
while(true){
if((i_35880 < n__4376__auto___35879)){
(arr[i_35880] = (a__$1 * (m__$1[i_35880])));

var G__35881 = (i_35880 + (1));
i_35880 = G__35881;
continue;
} else {
}
break;
}

return arr;
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"array",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"array",(function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4376__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__35882 = (i + (1));
i = G__35882;
continue;
} else {
return null;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"array",(function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4376__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__35883 = (i + (1));
i = G__35883;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PConversion,"array",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"array",(function (m){
return cljs.core.vec.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"array",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"array",(function() {
var G__35885 = null;
var G__35885__2 = (function (m,f){
var cnt = m.length;
var r = cljs.core.double_array.call(null,cnt);
var n__4376__auto___35886 = cnt;
var i_35887 = (0);
while(true){
if((i_35887 < n__4376__auto___35886)){
(r[i_35887] = f.call(null,(m[i_35887])));

var G__35888 = (i_35887 + (1));
i_35887 = G__35888;
continue;
} else {
}
break;
}

return r;
});
var G__35885__3 = (function (m,f,a){
var r = cljs.core.double_array.call(null,m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce.call(null,r,a);
var n__4376__auto___35889 = m.length;
var i_35890 = (0);
while(true){
if((i_35890 < n__4376__auto___35889)){
(r[i_35890] = f.call(null,(m[i_35890]),(a__$1[i_35890])));

var G__35891 = (i_35890 + (1));
i_35890 = G__35891;
continue;
} else {
}
break;
}

return r;
});
var G__35885__4 = (function (m,f,a,more){
var r = cljs.core.double_array.call(null,m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,a);
var more__$1 = cljs.core.mapv.call(null,((function (r,a__$1){
return (function (p1__35884_SHARP_){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,p1__35884_SHARP_);
});})(r,a__$1))
,more);
var more_count = cljs.core.long$.call(null,cljs.core.count.call(null,more__$1));
var vs = cljs.core.double_array.call(null,more_count);
var n__4376__auto___35892 = m.length;
var i_35893 = (0);
while(true){
if((i_35893 < n__4376__auto___35892)){
var n__4376__auto___35894__$1 = more_count;
var j_35895 = (0);
while(true){
if((j_35895 < n__4376__auto___35894__$1)){
(vs[j_35895] = (more__$1.call(null,j_35895)[i_35893]));

var G__35896 = (j_35895 + (1));
j_35895 = G__35896;
continue;
} else {
}
break;
}

(r[i_35893] = cljs.core.apply.call(null,f,(m[i_35893]),(a__$1[i_35893]),vs));

var G__35897 = (i_35893 + (1));
i_35893 = G__35897;
continue;
} else {
}
break;
}

return r;
});
G__35885 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__35885__2.call(this,m,f);
case 3:
return G__35885__3.call(this,m,f,a);
case 4:
return G__35885__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35885.cljs$core$IFn$_invoke$arity$2 = G__35885__2;
G__35885.cljs$core$IFn$_invoke$arity$3 = G__35885__3;
G__35885.cljs$core$IFn$_invoke$arity$4 = G__35885__4;
return G__35885;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"array",(function() {
var G__35898 = null;
var G__35898__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__35898__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__35898__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__35898 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__35898__2.call(this,m,f);
case 3:
return G__35898__3.call(this,m,f,a);
case 4:
return G__35898__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35898.cljs$core$IFn$_invoke$arity$2 = G__35898__2;
G__35898.cljs$core$IFn$_invoke$arity$3 = G__35898__3;
G__35898.cljs$core$IFn$_invoke$arity$4 = G__35898__4;
return G__35898;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"array",(function() {
var G__35899 = null;
var G__35899__2 = (function (m,f){
var m__$1 = m;
return cljs.core.reduce.call(null,f,m__$1);
});
var G__35899__3 = (function (m,f,init){
var m__$1 = m;
return cljs.core.reduce.call(null,f,init,m__$1);
});
G__35899 = function(m,f,init){
switch(arguments.length){
case 2:
return G__35899__2.call(this,m,f);
case 3:
return G__35899__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35899.cljs$core$IFn$_invoke$arity$2 = G__35899__2;
G__35899.cljs$core$IFn$_invoke$arity$3 = G__35899__3;
return G__35899;
})()
);
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"array",true);

goog.object.set(clojure.core.matrix.protocols.index_QMARK_,"array",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.index_to_longs,"array",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.index_to_ints,"array",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.index_from_longs,"array",(function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_from_ints,"array",(function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_coerce,"array",(function (m,a){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"array",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"array",(function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if(cljs.core.truth_((function (){var and__3911__auto__ = (mdims === ndims);
if(and__3911__auto__){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape);
} else {
return and__3911__auto__;
}
})())){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
goog.object.set(clojure.core.matrix.protocols.PNumerical,"array",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"array",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PSubVector,"array",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"array",(function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"array",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"array",(function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__27979__auto__ = b;
if(typeof x__27979__auto__ === 'number'){
return x__27979__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__27979__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
}
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSameShape,"array",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"array",(function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"array",true);

goog.object.set(clojure.core.matrix.protocols.select,"array",(function (a,area){
var or__3922__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
goog.object.set(clojure.core.matrix.protocols.PLogistic,"array",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.logistic_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"array",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"array",true);

goog.object.set(clojure.core.matrix.protocols.softmax,"array",(function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.softmax_BANG_,"array",(function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.softplus_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLU,"array",true);

goog.object.set(clojure.core.matrix.protocols.relu,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.relu_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"array",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"array",(function (m){
var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
if((((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$.call(null,(0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$.call(null,(0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d.call(null,m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__35902 = (j + (1));
j = G__35902;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__35903 = (j + (1));
j = G__35903;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__35904 = (i + (1));
i = G__35904;
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
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"array",(function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__35900_SHARP_){
return ((typeof p1__35900_SHARP_ === 'number') && ((p1__35900_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"array",(function (m){
var G__35901 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__35901) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__3911__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__3911__auto__)){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__3911__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"number",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"number",(function (m){
return cljs.core._EQ_.call(null,(1),m);
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"number",(function (m){
return (m === (0));
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"number",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PSummable,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"array",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"array",true);

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"array",(function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__35906 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__35906,(0),null);
var acols = cljs.core.nth.call(null,vec__35906,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var vec__35909 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__35909,(0),null);
var mcols = cljs.core.nth.call(null,vec__35909,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__35912 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__35912,(0),null);
var mcols = cljs.core.nth.call(null,vec__35912,(1),null);
var vec__35915 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__35915,(0),null);
var acols = cljs.core.nth.call(null,vec__35915,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_35921 = cljs.core.long$.call(null,(0));
while(true){
if((i_35921 < mrows)){
var j_35922 = cljs.core.long$.call(null,(0));
while(true){
if((j_35922 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_35921,j_35922,(0));

var G__35923 = (j_35922 + (1));
j_35922 = G__35923;
continue;
} else {
}
break;
}

var G__35924 = (i_35921 + (1));
i_35921 = G__35924;
continue;
} else {
}
break;
}


var i_35925 = cljs.core.long$.call(null,(0));
while(true){
if((i_35925 < mrows)){
var j_35926 = cljs.core.long$.call(null,(0));
while(true){
if((j_35926 < acols)){
var k_35927 = cljs.core.long$.call(null,(0));
while(true){
if((k_35927 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_35925,j_35926,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_35925,j_35926) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_35925,k_35927) * clojure.core.matrix.protocols.get_2d.call(null,a,k_35927,j_35926))));

var G__35928 = (k_35927 + (1));
k_35927 = G__35928;
continue;
} else {
}
break;
}

var G__35929 = (j_35926 + (1));
j_35926 = G__35929;
continue;
} else {
}
break;
}

var G__35930 = (i_35925 + (1));
i_35925 = G__35930;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_multiply,"array",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__35918 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__35918,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35918,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"array",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"array",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"array",(function() {
var G__35931 = null;
var G__35931__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__35931__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__35931 = function(m,a){
switch(arguments.length){
case 1:
return G__35931__1.call(this,m);
case 2:
return G__35931__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35931.cljs$core$IFn$_invoke$arity$1 = G__35931__1;
G__35931.cljs$core$IFn$_invoke$arity$2 = G__35931__2;
return G__35931;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"array",(function() {
var G__35935 = null;
var G__35935__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__35935__2 = (function (m,a){
var vec__35932 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__35932,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35932,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__35935 = function(m,a){
switch(arguments.length){
case 1:
return G__35935__1.call(this,m);
case 2:
return G__35935__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35935.cljs$core$IFn$_invoke$arity$1 = G__35935__1;
G__35935.cljs$core$IFn$_invoke$arity$2 = G__35935__2;
return G__35935;
})()
);
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"array",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"array",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PCoercion,"array",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"array",(function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__3922__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return param__$1;
}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"array",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"array",(function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(cljs.core.truth_(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa))){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"array",true);

goog.object.set(clojure.core.matrix.protocols.trace,"array",(function (m){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
} else {
throw cljs.core.ex_info.call(null,["Trace requires a 2D matrix"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__35936 = (i + (1));
var G__35937 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__35936;
res = G__35937;
continue;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.determinant,"array",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"array",(function (m){
return null;
}));

//# sourceMappingURL=double_array.js.map?rel=1526052102728
