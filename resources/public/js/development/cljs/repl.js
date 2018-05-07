// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28104){
var map__28105 = p__28104;
var map__28105__$1 = ((((!((map__28105 == null)))?(((((map__28105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28105):map__28105);
var m = map__28105__$1;
var n = cljs.core.get.call(null,map__28105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28107_28129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28108_28130 = null;
var count__28109_28131 = (0);
var i__28110_28132 = (0);
while(true){
if((i__28110_28132 < count__28109_28131)){
var f_28133 = cljs.core._nth.call(null,chunk__28108_28130,i__28110_28132);
cljs.core.println.call(null,"  ",f_28133);


var G__28134 = seq__28107_28129;
var G__28135 = chunk__28108_28130;
var G__28136 = count__28109_28131;
var G__28137 = (i__28110_28132 + (1));
seq__28107_28129 = G__28134;
chunk__28108_28130 = G__28135;
count__28109_28131 = G__28136;
i__28110_28132 = G__28137;
continue;
} else {
var temp__5457__auto___28138 = cljs.core.seq.call(null,seq__28107_28129);
if(temp__5457__auto___28138){
var seq__28107_28139__$1 = temp__5457__auto___28138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28107_28139__$1)){
var c__4319__auto___28140 = cljs.core.chunk_first.call(null,seq__28107_28139__$1);
var G__28141 = cljs.core.chunk_rest.call(null,seq__28107_28139__$1);
var G__28142 = c__4319__auto___28140;
var G__28143 = cljs.core.count.call(null,c__4319__auto___28140);
var G__28144 = (0);
seq__28107_28129 = G__28141;
chunk__28108_28130 = G__28142;
count__28109_28131 = G__28143;
i__28110_28132 = G__28144;
continue;
} else {
var f_28145 = cljs.core.first.call(null,seq__28107_28139__$1);
cljs.core.println.call(null,"  ",f_28145);


var G__28146 = cljs.core.next.call(null,seq__28107_28139__$1);
var G__28147 = null;
var G__28148 = (0);
var G__28149 = (0);
seq__28107_28129 = G__28146;
chunk__28108_28130 = G__28147;
count__28109_28131 = G__28148;
i__28110_28132 = G__28149;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28150 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28150);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28150)))?cljs.core.second.call(null,arglists_28150):arglists_28150));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28111_28151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28112_28152 = null;
var count__28113_28153 = (0);
var i__28114_28154 = (0);
while(true){
if((i__28114_28154 < count__28113_28153)){
var vec__28115_28155 = cljs.core._nth.call(null,chunk__28112_28152,i__28114_28154);
var name_28156 = cljs.core.nth.call(null,vec__28115_28155,(0),null);
var map__28118_28157 = cljs.core.nth.call(null,vec__28115_28155,(1),null);
var map__28118_28158__$1 = ((((!((map__28118_28157 == null)))?(((((map__28118_28157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28118_28157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28118_28157):map__28118_28157);
var doc_28159 = cljs.core.get.call(null,map__28118_28158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28160 = cljs.core.get.call(null,map__28118_28158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28156);

cljs.core.println.call(null," ",arglists_28160);

if(cljs.core.truth_(doc_28159)){
cljs.core.println.call(null," ",doc_28159);
} else {
}


var G__28161 = seq__28111_28151;
var G__28162 = chunk__28112_28152;
var G__28163 = count__28113_28153;
var G__28164 = (i__28114_28154 + (1));
seq__28111_28151 = G__28161;
chunk__28112_28152 = G__28162;
count__28113_28153 = G__28163;
i__28114_28154 = G__28164;
continue;
} else {
var temp__5457__auto___28165 = cljs.core.seq.call(null,seq__28111_28151);
if(temp__5457__auto___28165){
var seq__28111_28166__$1 = temp__5457__auto___28165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28111_28166__$1)){
var c__4319__auto___28167 = cljs.core.chunk_first.call(null,seq__28111_28166__$1);
var G__28168 = cljs.core.chunk_rest.call(null,seq__28111_28166__$1);
var G__28169 = c__4319__auto___28167;
var G__28170 = cljs.core.count.call(null,c__4319__auto___28167);
var G__28171 = (0);
seq__28111_28151 = G__28168;
chunk__28112_28152 = G__28169;
count__28113_28153 = G__28170;
i__28114_28154 = G__28171;
continue;
} else {
var vec__28120_28172 = cljs.core.first.call(null,seq__28111_28166__$1);
var name_28173 = cljs.core.nth.call(null,vec__28120_28172,(0),null);
var map__28123_28174 = cljs.core.nth.call(null,vec__28120_28172,(1),null);
var map__28123_28175__$1 = ((((!((map__28123_28174 == null)))?(((((map__28123_28174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28123_28174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28123_28174):map__28123_28174);
var doc_28176 = cljs.core.get.call(null,map__28123_28175__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28177 = cljs.core.get.call(null,map__28123_28175__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28173);

cljs.core.println.call(null," ",arglists_28177);

if(cljs.core.truth_(doc_28176)){
cljs.core.println.call(null," ",doc_28176);
} else {
}


var G__28178 = cljs.core.next.call(null,seq__28111_28166__$1);
var G__28179 = null;
var G__28180 = (0);
var G__28181 = (0);
seq__28111_28151 = G__28178;
chunk__28112_28152 = G__28179;
count__28113_28153 = G__28180;
i__28114_28154 = G__28181;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28125 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28126 = null;
var count__28127 = (0);
var i__28128 = (0);
while(true){
if((i__28128 < count__28127)){
var role = cljs.core._nth.call(null,chunk__28126,i__28128);
var temp__5457__auto___28182__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28182__$1)){
var spec_28183 = temp__5457__auto___28182__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28183));
} else {
}


var G__28184 = seq__28125;
var G__28185 = chunk__28126;
var G__28186 = count__28127;
var G__28187 = (i__28128 + (1));
seq__28125 = G__28184;
chunk__28126 = G__28185;
count__28127 = G__28186;
i__28128 = G__28187;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28125);
if(temp__5457__auto____$1){
var seq__28125__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28125__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28125__$1);
var G__28188 = cljs.core.chunk_rest.call(null,seq__28125__$1);
var G__28189 = c__4319__auto__;
var G__28190 = cljs.core.count.call(null,c__4319__auto__);
var G__28191 = (0);
seq__28125 = G__28188;
chunk__28126 = G__28189;
count__28127 = G__28190;
i__28128 = G__28191;
continue;
} else {
var role = cljs.core.first.call(null,seq__28125__$1);
var temp__5457__auto___28192__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28192__$2)){
var spec_28193 = temp__5457__auto___28192__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28193));
} else {
}


var G__28194 = cljs.core.next.call(null,seq__28125__$1);
var G__28195 = null;
var G__28196 = (0);
var G__28197 = (0);
seq__28125 = G__28194;
chunk__28126 = G__28195;
count__28127 = G__28196;
i__28128 = G__28197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1525651481834
