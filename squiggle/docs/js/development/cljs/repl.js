// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34459){
var map__34460 = p__34459;
var map__34460__$1 = ((((!((map__34460 == null)))?(((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34460):map__34460);
var m = map__34460__$1;
var n = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34462_34484 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34463_34485 = null;
var count__34464_34486 = (0);
var i__34465_34487 = (0);
while(true){
if((i__34465_34487 < count__34464_34486)){
var f_34488 = cljs.core._nth.call(null,chunk__34463_34485,i__34465_34487);
cljs.core.println.call(null,"  ",f_34488);


var G__34489 = seq__34462_34484;
var G__34490 = chunk__34463_34485;
var G__34491 = count__34464_34486;
var G__34492 = (i__34465_34487 + (1));
seq__34462_34484 = G__34489;
chunk__34463_34485 = G__34490;
count__34464_34486 = G__34491;
i__34465_34487 = G__34492;
continue;
} else {
var temp__5457__auto___34493 = cljs.core.seq.call(null,seq__34462_34484);
if(temp__5457__auto___34493){
var seq__34462_34494__$1 = temp__5457__auto___34493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34462_34494__$1)){
var c__4319__auto___34495 = cljs.core.chunk_first.call(null,seq__34462_34494__$1);
var G__34496 = cljs.core.chunk_rest.call(null,seq__34462_34494__$1);
var G__34497 = c__4319__auto___34495;
var G__34498 = cljs.core.count.call(null,c__4319__auto___34495);
var G__34499 = (0);
seq__34462_34484 = G__34496;
chunk__34463_34485 = G__34497;
count__34464_34486 = G__34498;
i__34465_34487 = G__34499;
continue;
} else {
var f_34500 = cljs.core.first.call(null,seq__34462_34494__$1);
cljs.core.println.call(null,"  ",f_34500);


var G__34501 = cljs.core.next.call(null,seq__34462_34494__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__34462_34484 = G__34501;
chunk__34463_34485 = G__34502;
count__34464_34486 = G__34503;
i__34465_34487 = G__34504;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34505 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34505);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34505)))?cljs.core.second.call(null,arglists_34505):arglists_34505));
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
var seq__34466_34506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34467_34507 = null;
var count__34468_34508 = (0);
var i__34469_34509 = (0);
while(true){
if((i__34469_34509 < count__34468_34508)){
var vec__34470_34510 = cljs.core._nth.call(null,chunk__34467_34507,i__34469_34509);
var name_34511 = cljs.core.nth.call(null,vec__34470_34510,(0),null);
var map__34473_34512 = cljs.core.nth.call(null,vec__34470_34510,(1),null);
var map__34473_34513__$1 = ((((!((map__34473_34512 == null)))?(((((map__34473_34512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34473_34512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34473_34512):map__34473_34512);
var doc_34514 = cljs.core.get.call(null,map__34473_34513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34515 = cljs.core.get.call(null,map__34473_34513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34511);

cljs.core.println.call(null," ",arglists_34515);

if(cljs.core.truth_(doc_34514)){
cljs.core.println.call(null," ",doc_34514);
} else {
}


var G__34516 = seq__34466_34506;
var G__34517 = chunk__34467_34507;
var G__34518 = count__34468_34508;
var G__34519 = (i__34469_34509 + (1));
seq__34466_34506 = G__34516;
chunk__34467_34507 = G__34517;
count__34468_34508 = G__34518;
i__34469_34509 = G__34519;
continue;
} else {
var temp__5457__auto___34520 = cljs.core.seq.call(null,seq__34466_34506);
if(temp__5457__auto___34520){
var seq__34466_34521__$1 = temp__5457__auto___34520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34466_34521__$1)){
var c__4319__auto___34522 = cljs.core.chunk_first.call(null,seq__34466_34521__$1);
var G__34523 = cljs.core.chunk_rest.call(null,seq__34466_34521__$1);
var G__34524 = c__4319__auto___34522;
var G__34525 = cljs.core.count.call(null,c__4319__auto___34522);
var G__34526 = (0);
seq__34466_34506 = G__34523;
chunk__34467_34507 = G__34524;
count__34468_34508 = G__34525;
i__34469_34509 = G__34526;
continue;
} else {
var vec__34475_34527 = cljs.core.first.call(null,seq__34466_34521__$1);
var name_34528 = cljs.core.nth.call(null,vec__34475_34527,(0),null);
var map__34478_34529 = cljs.core.nth.call(null,vec__34475_34527,(1),null);
var map__34478_34530__$1 = ((((!((map__34478_34529 == null)))?(((((map__34478_34529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34478_34529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34478_34529):map__34478_34529);
var doc_34531 = cljs.core.get.call(null,map__34478_34530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34532 = cljs.core.get.call(null,map__34478_34530__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34528);

cljs.core.println.call(null," ",arglists_34532);

if(cljs.core.truth_(doc_34531)){
cljs.core.println.call(null," ",doc_34531);
} else {
}


var G__34533 = cljs.core.next.call(null,seq__34466_34521__$1);
var G__34534 = null;
var G__34535 = (0);
var G__34536 = (0);
seq__34466_34506 = G__34533;
chunk__34467_34507 = G__34534;
count__34468_34508 = G__34535;
i__34469_34509 = G__34536;
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

var seq__34480 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34481 = null;
var count__34482 = (0);
var i__34483 = (0);
while(true){
if((i__34483 < count__34482)){
var role = cljs.core._nth.call(null,chunk__34481,i__34483);
var temp__5457__auto___34537__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34537__$1)){
var spec_34538 = temp__5457__auto___34537__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34538));
} else {
}


var G__34539 = seq__34480;
var G__34540 = chunk__34481;
var G__34541 = count__34482;
var G__34542 = (i__34483 + (1));
seq__34480 = G__34539;
chunk__34481 = G__34540;
count__34482 = G__34541;
i__34483 = G__34542;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__34480);
if(temp__5457__auto____$1){
var seq__34480__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34480__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34480__$1);
var G__34543 = cljs.core.chunk_rest.call(null,seq__34480__$1);
var G__34544 = c__4319__auto__;
var G__34545 = cljs.core.count.call(null,c__4319__auto__);
var G__34546 = (0);
seq__34480 = G__34543;
chunk__34481 = G__34544;
count__34482 = G__34545;
i__34483 = G__34546;
continue;
} else {
var role = cljs.core.first.call(null,seq__34480__$1);
var temp__5457__auto___34547__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34547__$2)){
var spec_34548 = temp__5457__auto___34547__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34548));
} else {
}


var G__34549 = cljs.core.next.call(null,seq__34480__$1);
var G__34550 = null;
var G__34551 = (0);
var G__34552 = (0);
seq__34480 = G__34549;
chunk__34481 = G__34550;
count__34482 = G__34551;
i__34483 = G__34552;
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

//# sourceMappingURL=repl.js.map?rel=1525651801917
