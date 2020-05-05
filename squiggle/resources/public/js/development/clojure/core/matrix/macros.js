// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
var ret__4533__auto___27863 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27864 = arguments.length;
var i__4500__auto___27865 = (0);
while(true){
if((i__4500__auto___27865 < len__4499__auto___27864)){
args__4502__auto__.push((arguments[i__4500__auto___27865]));

var G__27866 = (i__4500__auto___27865 + (1));
i__4500__auto___27865 = G__27866;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),vals))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq27860){
var G__27861 = cljs.core.first.call(null,seq27860);
var seq27860__$1 = cljs.core.next.call(null,seq27860);
var G__27862 = cljs.core.first.call(null,seq27860__$1);
var seq27860__$2 = cljs.core.next.call(null,seq27860__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27861,G__27862,seq27860__$2);
});

return null;
})()
;
clojure.core.matrix.macros.error.cljs$lang$macro = true;

var ret__4533__auto___27872 = (function (){
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var G__27871 = arguments.length;
switch (G__27871) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___27874 = arguments.length;
var i__4500__auto___27875 = (0);
while(true){
if((i__4500__auto___27875 < len__4499__auto___27874)){
args_arr__4514__auto__.push((arguments[i__4500__auto___27875]));

var G__27876 = (i__4500__auto___27875 + (1));
i__4500__auto___27875 = G__27876;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: not yet implemented",null,(1),null)))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: ",null,(1),null)),vals)));
});

/** @this {Function} */
clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq27868){
var G__27869 = cljs.core.first.call(null,seq27868);
var seq27868__$1 = cljs.core.next.call(null,seq27868);
var G__27870 = cljs.core.first.call(null,seq27868__$1);
var seq27868__$2 = cljs.core.next.call(null,seq27868__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27869,G__27870,seq27868__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);

return null;
})()
;
clojure.core.matrix.macros.TODO.cljs$lang$macro = true;

var ret__4533__auto___27877 = /**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae.cljs$lang$macro = true;

var ret__4533__auto___27878 = /**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,pred_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;

var ret__4533__auto___27888 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27889 = arguments.length;
var i__4500__auto___27890 = (0);
while(true){
if((i__4500__auto___27890 < len__4499__auto___27889)){
args__4502__auto__.push((arguments[i__4500__auto___27890]));

var G__27891 = (i__4500__auto___27890 + (1));
i__4500__auto___27890 = G__27891;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__27884,code){
var vec__27885 = p__27884;
var val_sym = cljs.core.nth.call(null,vec__27885,(0),null);
var values = cljs.core.nth.call(null,vec__27885,(1),null);
var index_sym = cljs.core.nth.call(null,vec__27885,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__27879__auto__","vals__27879__auto__",-912598225,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__27879__auto__","vals__27879__auto__",-912598225,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__27879__auto__","vals__27879__auto__",-912598225,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),code,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__27879__auto__","vals__27879__auto__",-912598225,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq27880){
var G__27881 = cljs.core.first.call(null,seq27880);
var seq27880__$1 = cljs.core.next.call(null,seq27880);
var G__27882 = cljs.core.first.call(null,seq27880__$1);
var seq27880__$2 = cljs.core.next.call(null,seq27880__$1);
var G__27883 = cljs.core.first.call(null,seq27880__$2);
var seq27880__$3 = cljs.core.next.call(null,seq27880__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27881,G__27882,G__27883,seq27880__$3);
});

return null;
})()
;
clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;

var ret__4533__auto___27892 = clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___27893 = clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___27894 = clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;

var ret__4533__auto___27905 = (function (){
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27906 = arguments.length;
var i__4500__auto___27907 = (0);
while(true){
if((i__4500__auto___27907 < len__4499__auto___27906)){
args__4502__auto__.push((arguments[i__4500__auto___27907]));

var G__27908 = (i__4500__auto___27907 + (1));
i__4500__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__27902 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__27902,(0),null);
var init = cljs.core.nth.call(null,vec__27902,(1),null);
var check = cljs.core.nth.call(null,vec__27902,(2),null);
var next = cljs.core.nth.call(null,vec__27902,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,check,null,(1),null)),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,next,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),c_for_rec.call(null,loops,body),(new cljs.core.List(null,null,null,(1),null)))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq27895){
var G__27896 = cljs.core.first.call(null,seq27895);
var seq27895__$1 = cljs.core.next.call(null,seq27895);
var G__27897 = cljs.core.first.call(null,seq27895__$1);
var seq27895__$2 = cljs.core.next.call(null,seq27895__$1);
var G__27898 = cljs.core.first.call(null,seq27895__$2);
var seq27895__$3 = cljs.core.next.call(null,seq27895__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27896,G__27897,G__27898,seq27895__$3);
});

return null;
})()
;
clojure.core.matrix.macros.c_for.cljs$lang$macro = true;

var ret__4533__auto___27910 = /**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__27909__auto__","x__27909__auto__",-119440960,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__27909__auto__","x__27909__auto__",-119440960,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__27909__auto__","x__27909__auto__",-119440960,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__27909__auto__","x__27909__auto__",-119440960,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;

var ret__4533__auto___27911 = /**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map?rel=1526052098512
