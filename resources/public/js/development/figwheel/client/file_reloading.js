// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26631_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26631_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26632 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26633 = null;
var count__26634 = (0);
var i__26635 = (0);
while(true){
if((i__26635 < count__26634)){
var n = cljs.core._nth.call(null,chunk__26633,i__26635);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26636 = seq__26632;
var G__26637 = chunk__26633;
var G__26638 = count__26634;
var G__26639 = (i__26635 + (1));
seq__26632 = G__26636;
chunk__26633 = G__26637;
count__26634 = G__26638;
i__26635 = G__26639;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26632);
if(temp__5457__auto__){
var seq__26632__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26632__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26632__$1);
var G__26640 = cljs.core.chunk_rest.call(null,seq__26632__$1);
var G__26641 = c__4319__auto__;
var G__26642 = cljs.core.count.call(null,c__4319__auto__);
var G__26643 = (0);
seq__26632 = G__26640;
chunk__26633 = G__26641;
count__26634 = G__26642;
i__26635 = G__26643;
continue;
} else {
var n = cljs.core.first.call(null,seq__26632__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26644 = cljs.core.next.call(null,seq__26632__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__26632 = G__26644;
chunk__26633 = G__26645;
count__26634 = G__26646;
i__26635 = G__26647;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26648){
var vec__26649 = p__26648;
var _ = cljs.core.nth.call(null,vec__26649,(0),null);
var v = cljs.core.nth.call(null,vec__26649,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__26652){
var vec__26653 = p__26652;
var k = cljs.core.nth.call(null,vec__26653,(0),null);
var v = cljs.core.nth.call(null,vec__26653,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26665_26673 = cljs.core.seq.call(null,deps);
var chunk__26666_26674 = null;
var count__26667_26675 = (0);
var i__26668_26676 = (0);
while(true){
if((i__26668_26676 < count__26667_26675)){
var dep_26677 = cljs.core._nth.call(null,chunk__26666_26674,i__26668_26676);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26677;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26677));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26677,(depth + (1)),state);
} else {
}


var G__26678 = seq__26665_26673;
var G__26679 = chunk__26666_26674;
var G__26680 = count__26667_26675;
var G__26681 = (i__26668_26676 + (1));
seq__26665_26673 = G__26678;
chunk__26666_26674 = G__26679;
count__26667_26675 = G__26680;
i__26668_26676 = G__26681;
continue;
} else {
var temp__5457__auto___26682 = cljs.core.seq.call(null,seq__26665_26673);
if(temp__5457__auto___26682){
var seq__26665_26683__$1 = temp__5457__auto___26682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26665_26683__$1)){
var c__4319__auto___26684 = cljs.core.chunk_first.call(null,seq__26665_26683__$1);
var G__26685 = cljs.core.chunk_rest.call(null,seq__26665_26683__$1);
var G__26686 = c__4319__auto___26684;
var G__26687 = cljs.core.count.call(null,c__4319__auto___26684);
var G__26688 = (0);
seq__26665_26673 = G__26685;
chunk__26666_26674 = G__26686;
count__26667_26675 = G__26687;
i__26668_26676 = G__26688;
continue;
} else {
var dep_26689 = cljs.core.first.call(null,seq__26665_26683__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26689;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26689));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26689,(depth + (1)),state);
} else {
}


var G__26690 = cljs.core.next.call(null,seq__26665_26683__$1);
var G__26691 = null;
var G__26692 = (0);
var G__26693 = (0);
seq__26665_26673 = G__26690;
chunk__26666_26674 = G__26691;
count__26667_26675 = G__26692;
i__26668_26676 = G__26693;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26669){
var vec__26670 = p__26669;
var seq__26671 = cljs.core.seq.call(null,vec__26670);
var first__26672 = cljs.core.first.call(null,seq__26671);
var seq__26671__$1 = cljs.core.next.call(null,seq__26671);
var x = first__26672;
var xs = seq__26671__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26670,seq__26671,first__26672,seq__26671__$1,x,xs,get_deps__$1){
return (function (p1__26656_SHARP_){
return clojure.set.difference.call(null,p1__26656_SHARP_,x);
});})(vec__26670,seq__26671,first__26672,seq__26671__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26694 = cljs.core.seq.call(null,provides);
var chunk__26695 = null;
var count__26696 = (0);
var i__26697 = (0);
while(true){
if((i__26697 < count__26696)){
var prov = cljs.core._nth.call(null,chunk__26695,i__26697);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26698_26706 = cljs.core.seq.call(null,requires);
var chunk__26699_26707 = null;
var count__26700_26708 = (0);
var i__26701_26709 = (0);
while(true){
if((i__26701_26709 < count__26700_26708)){
var req_26710 = cljs.core._nth.call(null,chunk__26699_26707,i__26701_26709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26710,prov);


var G__26711 = seq__26698_26706;
var G__26712 = chunk__26699_26707;
var G__26713 = count__26700_26708;
var G__26714 = (i__26701_26709 + (1));
seq__26698_26706 = G__26711;
chunk__26699_26707 = G__26712;
count__26700_26708 = G__26713;
i__26701_26709 = G__26714;
continue;
} else {
var temp__5457__auto___26715 = cljs.core.seq.call(null,seq__26698_26706);
if(temp__5457__auto___26715){
var seq__26698_26716__$1 = temp__5457__auto___26715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26698_26716__$1)){
var c__4319__auto___26717 = cljs.core.chunk_first.call(null,seq__26698_26716__$1);
var G__26718 = cljs.core.chunk_rest.call(null,seq__26698_26716__$1);
var G__26719 = c__4319__auto___26717;
var G__26720 = cljs.core.count.call(null,c__4319__auto___26717);
var G__26721 = (0);
seq__26698_26706 = G__26718;
chunk__26699_26707 = G__26719;
count__26700_26708 = G__26720;
i__26701_26709 = G__26721;
continue;
} else {
var req_26722 = cljs.core.first.call(null,seq__26698_26716__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26722,prov);


var G__26723 = cljs.core.next.call(null,seq__26698_26716__$1);
var G__26724 = null;
var G__26725 = (0);
var G__26726 = (0);
seq__26698_26706 = G__26723;
chunk__26699_26707 = G__26724;
count__26700_26708 = G__26725;
i__26701_26709 = G__26726;
continue;
}
} else {
}
}
break;
}


var G__26727 = seq__26694;
var G__26728 = chunk__26695;
var G__26729 = count__26696;
var G__26730 = (i__26697 + (1));
seq__26694 = G__26727;
chunk__26695 = G__26728;
count__26696 = G__26729;
i__26697 = G__26730;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26694);
if(temp__5457__auto__){
var seq__26694__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26694__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26694__$1);
var G__26731 = cljs.core.chunk_rest.call(null,seq__26694__$1);
var G__26732 = c__4319__auto__;
var G__26733 = cljs.core.count.call(null,c__4319__auto__);
var G__26734 = (0);
seq__26694 = G__26731;
chunk__26695 = G__26732;
count__26696 = G__26733;
i__26697 = G__26734;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26694__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26702_26735 = cljs.core.seq.call(null,requires);
var chunk__26703_26736 = null;
var count__26704_26737 = (0);
var i__26705_26738 = (0);
while(true){
if((i__26705_26738 < count__26704_26737)){
var req_26739 = cljs.core._nth.call(null,chunk__26703_26736,i__26705_26738);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26739,prov);


var G__26740 = seq__26702_26735;
var G__26741 = chunk__26703_26736;
var G__26742 = count__26704_26737;
var G__26743 = (i__26705_26738 + (1));
seq__26702_26735 = G__26740;
chunk__26703_26736 = G__26741;
count__26704_26737 = G__26742;
i__26705_26738 = G__26743;
continue;
} else {
var temp__5457__auto___26744__$1 = cljs.core.seq.call(null,seq__26702_26735);
if(temp__5457__auto___26744__$1){
var seq__26702_26745__$1 = temp__5457__auto___26744__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26702_26745__$1)){
var c__4319__auto___26746 = cljs.core.chunk_first.call(null,seq__26702_26745__$1);
var G__26747 = cljs.core.chunk_rest.call(null,seq__26702_26745__$1);
var G__26748 = c__4319__auto___26746;
var G__26749 = cljs.core.count.call(null,c__4319__auto___26746);
var G__26750 = (0);
seq__26702_26735 = G__26747;
chunk__26703_26736 = G__26748;
count__26704_26737 = G__26749;
i__26705_26738 = G__26750;
continue;
} else {
var req_26751 = cljs.core.first.call(null,seq__26702_26745__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26751,prov);


var G__26752 = cljs.core.next.call(null,seq__26702_26745__$1);
var G__26753 = null;
var G__26754 = (0);
var G__26755 = (0);
seq__26702_26735 = G__26752;
chunk__26703_26736 = G__26753;
count__26704_26737 = G__26754;
i__26705_26738 = G__26755;
continue;
}
} else {
}
}
break;
}


var G__26756 = cljs.core.next.call(null,seq__26694__$1);
var G__26757 = null;
var G__26758 = (0);
var G__26759 = (0);
seq__26694 = G__26756;
chunk__26695 = G__26757;
count__26696 = G__26758;
i__26697 = G__26759;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26760_26764 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26761_26765 = null;
var count__26762_26766 = (0);
var i__26763_26767 = (0);
while(true){
if((i__26763_26767 < count__26762_26766)){
var ns_26768 = cljs.core._nth.call(null,chunk__26761_26765,i__26763_26767);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26768);


var G__26769 = seq__26760_26764;
var G__26770 = chunk__26761_26765;
var G__26771 = count__26762_26766;
var G__26772 = (i__26763_26767 + (1));
seq__26760_26764 = G__26769;
chunk__26761_26765 = G__26770;
count__26762_26766 = G__26771;
i__26763_26767 = G__26772;
continue;
} else {
var temp__5457__auto___26773 = cljs.core.seq.call(null,seq__26760_26764);
if(temp__5457__auto___26773){
var seq__26760_26774__$1 = temp__5457__auto___26773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26760_26774__$1)){
var c__4319__auto___26775 = cljs.core.chunk_first.call(null,seq__26760_26774__$1);
var G__26776 = cljs.core.chunk_rest.call(null,seq__26760_26774__$1);
var G__26777 = c__4319__auto___26775;
var G__26778 = cljs.core.count.call(null,c__4319__auto___26775);
var G__26779 = (0);
seq__26760_26764 = G__26776;
chunk__26761_26765 = G__26777;
count__26762_26766 = G__26778;
i__26763_26767 = G__26779;
continue;
} else {
var ns_26780 = cljs.core.first.call(null,seq__26760_26774__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26780);


var G__26781 = cljs.core.next.call(null,seq__26760_26774__$1);
var G__26782 = null;
var G__26783 = (0);
var G__26784 = (0);
seq__26760_26764 = G__26781;
chunk__26761_26765 = G__26782;
count__26762_26766 = G__26783;
i__26763_26767 = G__26784;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26785__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26786__i = 0, G__26786__a = new Array(arguments.length -  0);
while (G__26786__i < G__26786__a.length) {G__26786__a[G__26786__i] = arguments[G__26786__i + 0]; ++G__26786__i;}
  args = new cljs.core.IndexedSeq(G__26786__a,0,null);
} 
return G__26785__delegate.call(this,args);};
G__26785.cljs$lang$maxFixedArity = 0;
G__26785.cljs$lang$applyTo = (function (arglist__26787){
var args = cljs.core.seq(arglist__26787);
return G__26785__delegate(args);
});
G__26785.cljs$core$IFn$_invoke$arity$variadic = G__26785__delegate;
return G__26785;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__26788_SHARP_,p2__26789_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26788_SHARP_)].join('')),p2__26789_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__26790_SHARP_,p2__26791_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26790_SHARP_)].join(''),p2__26791_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26792 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26792.addCallback(((function (G__26792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26792))
);

G__26792.addErrback(((function (G__26792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26792))
);

return G__26792;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26793){if((e26793 instanceof Error)){
var e = e26793;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26793;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26794){if((e26794 instanceof Error)){
var e = e26794;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26794;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26795 = cljs.core._EQ_;
var expr__26796 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26795.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26796))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26795.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26796))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26795.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26796))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26795,expr__26796){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26795,expr__26796))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26798,callback){
var map__26799 = p__26798;
var map__26799__$1 = ((((!((map__26799 == null)))?(((((map__26799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var file_msg = map__26799__$1;
var request_url = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26799,map__26799__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26799,map__26799__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__){
return (function (state_26837){
var state_val_26838 = (state_26837[(1)]);
if((state_val_26838 === (7))){
var inst_26833 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26839_26865 = state_26837__$1;
(statearr_26839_26865[(2)] = inst_26833);

(statearr_26839_26865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (1))){
var state_26837__$1 = state_26837;
var statearr_26840_26866 = state_26837__$1;
(statearr_26840_26866[(2)] = null);

(statearr_26840_26866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (4))){
var inst_26803 = (state_26837[(7)]);
var inst_26803__$1 = (state_26837[(2)]);
var state_26837__$1 = (function (){var statearr_26841 = state_26837;
(statearr_26841[(7)] = inst_26803__$1);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26803__$1)){
var statearr_26842_26867 = state_26837__$1;
(statearr_26842_26867[(1)] = (5));

} else {
var statearr_26843_26868 = state_26837__$1;
(statearr_26843_26868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (15))){
var inst_26818 = (state_26837[(8)]);
var inst_26816 = (state_26837[(9)]);
var inst_26820 = inst_26818.call(null,inst_26816);
var state_26837__$1 = state_26837;
var statearr_26844_26869 = state_26837__$1;
(statearr_26844_26869[(2)] = inst_26820);

(statearr_26844_26869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (13))){
var inst_26827 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26845_26870 = state_26837__$1;
(statearr_26845_26870[(2)] = inst_26827);

(statearr_26845_26870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (6))){
var state_26837__$1 = state_26837;
var statearr_26846_26871 = state_26837__$1;
(statearr_26846_26871[(2)] = null);

(statearr_26846_26871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (17))){
var inst_26824 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26847_26872 = state_26837__$1;
(statearr_26847_26872[(2)] = inst_26824);

(statearr_26847_26872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (3))){
var inst_26835 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26837__$1,inst_26835);
} else {
if((state_val_26838 === (12))){
var state_26837__$1 = state_26837;
var statearr_26848_26873 = state_26837__$1;
(statearr_26848_26873[(2)] = null);

(statearr_26848_26873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (2))){
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26838 === (11))){
var inst_26808 = (state_26837[(10)]);
var inst_26814 = figwheel.client.file_reloading.blocking_load.call(null,inst_26808);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(14),inst_26814);
} else {
if((state_val_26838 === (9))){
var inst_26808 = (state_26837[(10)]);
var state_26837__$1 = state_26837;
if(cljs.core.truth_(inst_26808)){
var statearr_26849_26874 = state_26837__$1;
(statearr_26849_26874[(1)] = (11));

} else {
var statearr_26850_26875 = state_26837__$1;
(statearr_26850_26875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (5))){
var inst_26803 = (state_26837[(7)]);
var inst_26809 = (state_26837[(11)]);
var inst_26808 = cljs.core.nth.call(null,inst_26803,(0),null);
var inst_26809__$1 = cljs.core.nth.call(null,inst_26803,(1),null);
var state_26837__$1 = (function (){var statearr_26851 = state_26837;
(statearr_26851[(10)] = inst_26808);

(statearr_26851[(11)] = inst_26809__$1);

return statearr_26851;
})();
if(cljs.core.truth_(inst_26809__$1)){
var statearr_26852_26876 = state_26837__$1;
(statearr_26852_26876[(1)] = (8));

} else {
var statearr_26853_26877 = state_26837__$1;
(statearr_26853_26877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (14))){
var inst_26818 = (state_26837[(8)]);
var inst_26808 = (state_26837[(10)]);
var inst_26816 = (state_26837[(2)]);
var inst_26817 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26818__$1 = cljs.core.get.call(null,inst_26817,inst_26808);
var state_26837__$1 = (function (){var statearr_26854 = state_26837;
(statearr_26854[(8)] = inst_26818__$1);

(statearr_26854[(9)] = inst_26816);

return statearr_26854;
})();
if(cljs.core.truth_(inst_26818__$1)){
var statearr_26855_26878 = state_26837__$1;
(statearr_26855_26878[(1)] = (15));

} else {
var statearr_26856_26879 = state_26837__$1;
(statearr_26856_26879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (16))){
var inst_26816 = (state_26837[(9)]);
var inst_26822 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26816);
var state_26837__$1 = state_26837;
var statearr_26857_26880 = state_26837__$1;
(statearr_26857_26880[(2)] = inst_26822);

(statearr_26857_26880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (10))){
var inst_26829 = (state_26837[(2)]);
var state_26837__$1 = (function (){var statearr_26858 = state_26837;
(statearr_26858[(12)] = inst_26829);

return statearr_26858;
})();
var statearr_26859_26881 = state_26837__$1;
(statearr_26859_26881[(2)] = null);

(statearr_26859_26881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (8))){
var inst_26809 = (state_26837[(11)]);
var inst_26811 = eval(inst_26809);
var state_26837__$1 = state_26837;
var statearr_26860_26882 = state_26837__$1;
(statearr_26860_26882[(2)] = inst_26811);

(statearr_26860_26882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23364__auto__))
;
return ((function (switch__23309__auto__,c__23364__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23310__auto__ = null;
var figwheel$client$file_reloading$state_machine__23310__auto____0 = (function (){
var statearr_26861 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26861[(0)] = figwheel$client$file_reloading$state_machine__23310__auto__);

(statearr_26861[(1)] = (1));

return statearr_26861;
});
var figwheel$client$file_reloading$state_machine__23310__auto____1 = (function (state_26837){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_26837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e26862){if((e26862 instanceof Object)){
var ex__23313__auto__ = e26862;
var statearr_26863_26883 = state_26837;
(statearr_26863_26883[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26884 = state_26837;
state_26837 = G__26884;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23310__auto__ = function(state_26837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23310__auto____1.call(this,state_26837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23310__auto____0;
figwheel$client$file_reloading$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23310__auto____1;
return figwheel$client$file_reloading$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__))
})();
var state__23366__auto__ = (function (){var statearr_26864 = f__23365__auto__.call(null);
(statearr_26864[(6)] = c__23364__auto__);

return statearr_26864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__))
);

return c__23364__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26886 = arguments.length;
switch (G__26886) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26888,callback){
var map__26889 = p__26888;
var map__26889__$1 = ((((!((map__26889 == null)))?(((((map__26889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26889):map__26889);
var file_msg = map__26889__$1;
var namespace = cljs.core.get.call(null,map__26889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26889,map__26889__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26889,map__26889__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26891){
var map__26892 = p__26891;
var map__26892__$1 = ((((!((map__26892 == null)))?(((((map__26892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892):map__26892);
var file_msg = map__26892__$1;
var namespace = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26894){
var map__26895 = p__26894;
var map__26895__$1 = ((((!((map__26895 == null)))?(((((map__26895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var file_msg = map__26895__$1;
var namespace = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26897,callback){
var map__26898 = p__26897;
var map__26898__$1 = ((((!((map__26898 == null)))?(((((map__26898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26898):map__26898);
var file_msg = map__26898__$1;
var request_url = cljs.core.get.call(null,map__26898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23364__auto___26948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___26948,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___26948,out){
return (function (state_26933){
var state_val_26934 = (state_26933[(1)]);
if((state_val_26934 === (1))){
var inst_26907 = cljs.core.seq.call(null,files);
var inst_26908 = cljs.core.first.call(null,inst_26907);
var inst_26909 = cljs.core.next.call(null,inst_26907);
var inst_26910 = files;
var state_26933__$1 = (function (){var statearr_26935 = state_26933;
(statearr_26935[(7)] = inst_26910);

(statearr_26935[(8)] = inst_26908);

(statearr_26935[(9)] = inst_26909);

return statearr_26935;
})();
var statearr_26936_26949 = state_26933__$1;
(statearr_26936_26949[(2)] = null);

(statearr_26936_26949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (2))){
var inst_26916 = (state_26933[(10)]);
var inst_26910 = (state_26933[(7)]);
var inst_26915 = cljs.core.seq.call(null,inst_26910);
var inst_26916__$1 = cljs.core.first.call(null,inst_26915);
var inst_26917 = cljs.core.next.call(null,inst_26915);
var inst_26918 = (inst_26916__$1 == null);
var inst_26919 = cljs.core.not.call(null,inst_26918);
var state_26933__$1 = (function (){var statearr_26937 = state_26933;
(statearr_26937[(10)] = inst_26916__$1);

(statearr_26937[(11)] = inst_26917);

return statearr_26937;
})();
if(inst_26919){
var statearr_26938_26950 = state_26933__$1;
(statearr_26938_26950[(1)] = (4));

} else {
var statearr_26939_26951 = state_26933__$1;
(statearr_26939_26951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (3))){
var inst_26931 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26933__$1,inst_26931);
} else {
if((state_val_26934 === (4))){
var inst_26916 = (state_26933[(10)]);
var inst_26921 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26916);
var state_26933__$1 = state_26933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26933__$1,(7),inst_26921);
} else {
if((state_val_26934 === (5))){
var inst_26927 = cljs.core.async.close_BANG_.call(null,out);
var state_26933__$1 = state_26933;
var statearr_26940_26952 = state_26933__$1;
(statearr_26940_26952[(2)] = inst_26927);

(statearr_26940_26952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (6))){
var inst_26929 = (state_26933[(2)]);
var state_26933__$1 = state_26933;
var statearr_26941_26953 = state_26933__$1;
(statearr_26941_26953[(2)] = inst_26929);

(statearr_26941_26953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26934 === (7))){
var inst_26917 = (state_26933[(11)]);
var inst_26923 = (state_26933[(2)]);
var inst_26924 = cljs.core.async.put_BANG_.call(null,out,inst_26923);
var inst_26910 = inst_26917;
var state_26933__$1 = (function (){var statearr_26942 = state_26933;
(statearr_26942[(7)] = inst_26910);

(statearr_26942[(12)] = inst_26924);

return statearr_26942;
})();
var statearr_26943_26954 = state_26933__$1;
(statearr_26943_26954[(2)] = null);

(statearr_26943_26954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23364__auto___26948,out))
;
return ((function (switch__23309__auto__,c__23364__auto___26948,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____1 = (function (state_26933){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_26933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__23313__auto__ = e26945;
var statearr_26946_26955 = state_26933;
(statearr_26946_26955[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26956 = state_26933;
state_26933 = G__26956;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__ = function(state_26933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____1.call(this,state_26933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___26948,out))
})();
var state__23366__auto__ = (function (){var statearr_26947 = f__23365__auto__.call(null);
(statearr_26947[(6)] = c__23364__auto___26948);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___26948,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26957,opts){
var map__26958 = p__26957;
var map__26958__$1 = ((((!((map__26958 == null)))?(((((map__26958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26958):map__26958);
var eval_body = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26960){var e = e26960;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26961_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26961_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26962){
var vec__26963 = p__26962;
var k = cljs.core.nth.call(null,vec__26963,(0),null);
var v = cljs.core.nth.call(null,vec__26963,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26966){
var vec__26967 = p__26966;
var k = cljs.core.nth.call(null,vec__26967,(0),null);
var v = cljs.core.nth.call(null,vec__26967,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26973,p__26974){
var map__26975 = p__26973;
var map__26975__$1 = ((((!((map__26975 == null)))?(((((map__26975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26975):map__26975);
var opts = map__26975__$1;
var before_jsload = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26976 = p__26974;
var map__26976__$1 = ((((!((map__26976 == null)))?(((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var msg = map__26976__$1;
var files = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27130){
var state_val_27131 = (state_27130[(1)]);
if((state_val_27131 === (7))){
var inst_26991 = (state_27130[(7)]);
var inst_26992 = (state_27130[(8)]);
var inst_26990 = (state_27130[(9)]);
var inst_26993 = (state_27130[(10)]);
var inst_26998 = cljs.core._nth.call(null,inst_26991,inst_26993);
var inst_26999 = figwheel.client.file_reloading.eval_body.call(null,inst_26998,opts);
var inst_27000 = (inst_26993 + (1));
var tmp27132 = inst_26991;
var tmp27133 = inst_26992;
var tmp27134 = inst_26990;
var inst_26990__$1 = tmp27134;
var inst_26991__$1 = tmp27132;
var inst_26992__$1 = tmp27133;
var inst_26993__$1 = inst_27000;
var state_27130__$1 = (function (){var statearr_27135 = state_27130;
(statearr_27135[(7)] = inst_26991__$1);

(statearr_27135[(11)] = inst_26999);

(statearr_27135[(8)] = inst_26992__$1);

(statearr_27135[(9)] = inst_26990__$1);

(statearr_27135[(10)] = inst_26993__$1);

return statearr_27135;
})();
var statearr_27136_27219 = state_27130__$1;
(statearr_27136_27219[(2)] = null);

(statearr_27136_27219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (20))){
var inst_27033 = (state_27130[(12)]);
var inst_27041 = figwheel.client.file_reloading.sort_files.call(null,inst_27033);
var state_27130__$1 = state_27130;
var statearr_27137_27220 = state_27130__$1;
(statearr_27137_27220[(2)] = inst_27041);

(statearr_27137_27220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (27))){
var state_27130__$1 = state_27130;
var statearr_27138_27221 = state_27130__$1;
(statearr_27138_27221[(2)] = null);

(statearr_27138_27221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (1))){
var inst_26982 = (state_27130[(13)]);
var inst_26979 = before_jsload.call(null,files);
var inst_26980 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26981 = (function (){return ((function (inst_26982,inst_26979,inst_26980,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26970_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26970_SHARP_);
});
;})(inst_26982,inst_26979,inst_26980,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26982__$1 = cljs.core.filter.call(null,inst_26981,files);
var inst_26983 = cljs.core.not_empty.call(null,inst_26982__$1);
var state_27130__$1 = (function (){var statearr_27139 = state_27130;
(statearr_27139[(14)] = inst_26979);

(statearr_27139[(13)] = inst_26982__$1);

(statearr_27139[(15)] = inst_26980);

return statearr_27139;
})();
if(cljs.core.truth_(inst_26983)){
var statearr_27140_27222 = state_27130__$1;
(statearr_27140_27222[(1)] = (2));

} else {
var statearr_27141_27223 = state_27130__$1;
(statearr_27141_27223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (24))){
var state_27130__$1 = state_27130;
var statearr_27142_27224 = state_27130__$1;
(statearr_27142_27224[(2)] = null);

(statearr_27142_27224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (39))){
var inst_27083 = (state_27130[(16)]);
var state_27130__$1 = state_27130;
var statearr_27143_27225 = state_27130__$1;
(statearr_27143_27225[(2)] = inst_27083);

(statearr_27143_27225[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (46))){
var inst_27125 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27144_27226 = state_27130__$1;
(statearr_27144_27226[(2)] = inst_27125);

(statearr_27144_27226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (4))){
var inst_27027 = (state_27130[(2)]);
var inst_27028 = cljs.core.List.EMPTY;
var inst_27029 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27028);
var inst_27030 = (function (){return ((function (inst_27027,inst_27028,inst_27029,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26971_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26971_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26971_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26971_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27027,inst_27028,inst_27029,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27031 = cljs.core.filter.call(null,inst_27030,files);
var inst_27032 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27033 = cljs.core.concat.call(null,inst_27031,inst_27032);
var state_27130__$1 = (function (){var statearr_27145 = state_27130;
(statearr_27145[(17)] = inst_27027);

(statearr_27145[(18)] = inst_27029);

(statearr_27145[(12)] = inst_27033);

return statearr_27145;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27146_27227 = state_27130__$1;
(statearr_27146_27227[(1)] = (16));

} else {
var statearr_27147_27228 = state_27130__$1;
(statearr_27147_27228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (15))){
var inst_27017 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27148_27229 = state_27130__$1;
(statearr_27148_27229[(2)] = inst_27017);

(statearr_27148_27229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (21))){
var inst_27043 = (state_27130[(19)]);
var inst_27043__$1 = (state_27130[(2)]);
var inst_27044 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27043__$1);
var state_27130__$1 = (function (){var statearr_27149 = state_27130;
(statearr_27149[(19)] = inst_27043__$1);

return statearr_27149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27130__$1,(22),inst_27044);
} else {
if((state_val_27131 === (31))){
var inst_27128 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27130__$1,inst_27128);
} else {
if((state_val_27131 === (32))){
var inst_27083 = (state_27130[(16)]);
var inst_27088 = inst_27083.cljs$lang$protocol_mask$partition0$;
var inst_27089 = (inst_27088 & (64));
var inst_27090 = inst_27083.cljs$core$ISeq$;
var inst_27091 = (cljs.core.PROTOCOL_SENTINEL === inst_27090);
var inst_27092 = ((inst_27089) || (inst_27091));
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_27092)){
var statearr_27150_27230 = state_27130__$1;
(statearr_27150_27230[(1)] = (35));

} else {
var statearr_27151_27231 = state_27130__$1;
(statearr_27151_27231[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (40))){
var inst_27105 = (state_27130[(20)]);
var inst_27104 = (state_27130[(2)]);
var inst_27105__$1 = cljs.core.get.call(null,inst_27104,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27106 = cljs.core.get.call(null,inst_27104,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27107 = cljs.core.not_empty.call(null,inst_27105__$1);
var state_27130__$1 = (function (){var statearr_27152 = state_27130;
(statearr_27152[(20)] = inst_27105__$1);

(statearr_27152[(21)] = inst_27106);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27153_27232 = state_27130__$1;
(statearr_27153_27232[(1)] = (41));

} else {
var statearr_27154_27233 = state_27130__$1;
(statearr_27154_27233[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (33))){
var state_27130__$1 = state_27130;
var statearr_27155_27234 = state_27130__$1;
(statearr_27155_27234[(2)] = false);

(statearr_27155_27234[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (13))){
var inst_27003 = (state_27130[(22)]);
var inst_27007 = cljs.core.chunk_first.call(null,inst_27003);
var inst_27008 = cljs.core.chunk_rest.call(null,inst_27003);
var inst_27009 = cljs.core.count.call(null,inst_27007);
var inst_26990 = inst_27008;
var inst_26991 = inst_27007;
var inst_26992 = inst_27009;
var inst_26993 = (0);
var state_27130__$1 = (function (){var statearr_27156 = state_27130;
(statearr_27156[(7)] = inst_26991);

(statearr_27156[(8)] = inst_26992);

(statearr_27156[(9)] = inst_26990);

(statearr_27156[(10)] = inst_26993);

return statearr_27156;
})();
var statearr_27157_27235 = state_27130__$1;
(statearr_27157_27235[(2)] = null);

(statearr_27157_27235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (22))){
var inst_27046 = (state_27130[(23)]);
var inst_27047 = (state_27130[(24)]);
var inst_27043 = (state_27130[(19)]);
var inst_27051 = (state_27130[(25)]);
var inst_27046__$1 = (state_27130[(2)]);
var inst_27047__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27046__$1);
var inst_27048 = (function (){var all_files = inst_27043;
var res_SINGLEQUOTE_ = inst_27046__$1;
var res = inst_27047__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27046,inst_27047,inst_27043,inst_27051,inst_27046__$1,inst_27047__$1,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26972_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26972_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27046,inst_27047,inst_27043,inst_27051,inst_27046__$1,inst_27047__$1,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27049 = cljs.core.filter.call(null,inst_27048,inst_27046__$1);
var inst_27050 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27051__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27050);
var inst_27052 = cljs.core.not_empty.call(null,inst_27051__$1);
var state_27130__$1 = (function (){var statearr_27158 = state_27130;
(statearr_27158[(23)] = inst_27046__$1);

(statearr_27158[(24)] = inst_27047__$1);

(statearr_27158[(25)] = inst_27051__$1);

(statearr_27158[(26)] = inst_27049);

return statearr_27158;
})();
if(cljs.core.truth_(inst_27052)){
var statearr_27159_27236 = state_27130__$1;
(statearr_27159_27236[(1)] = (23));

} else {
var statearr_27160_27237 = state_27130__$1;
(statearr_27160_27237[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (36))){
var state_27130__$1 = state_27130;
var statearr_27161_27238 = state_27130__$1;
(statearr_27161_27238[(2)] = false);

(statearr_27161_27238[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (41))){
var inst_27105 = (state_27130[(20)]);
var inst_27109 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27110 = cljs.core.map.call(null,inst_27109,inst_27105);
var inst_27111 = cljs.core.pr_str.call(null,inst_27110);
var inst_27112 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27111)].join('');
var inst_27113 = figwheel.client.utils.log.call(null,inst_27112);
var state_27130__$1 = state_27130;
var statearr_27162_27239 = state_27130__$1;
(statearr_27162_27239[(2)] = inst_27113);

(statearr_27162_27239[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (43))){
var inst_27106 = (state_27130[(21)]);
var inst_27116 = (state_27130[(2)]);
var inst_27117 = cljs.core.not_empty.call(null,inst_27106);
var state_27130__$1 = (function (){var statearr_27163 = state_27130;
(statearr_27163[(27)] = inst_27116);

return statearr_27163;
})();
if(cljs.core.truth_(inst_27117)){
var statearr_27164_27240 = state_27130__$1;
(statearr_27164_27240[(1)] = (44));

} else {
var statearr_27165_27241 = state_27130__$1;
(statearr_27165_27241[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (29))){
var inst_27083 = (state_27130[(16)]);
var inst_27046 = (state_27130[(23)]);
var inst_27047 = (state_27130[(24)]);
var inst_27043 = (state_27130[(19)]);
var inst_27051 = (state_27130[(25)]);
var inst_27049 = (state_27130[(26)]);
var inst_27079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27082 = (function (){var all_files = inst_27043;
var res_SINGLEQUOTE_ = inst_27046;
var res = inst_27047;
var files_not_loaded = inst_27049;
var dependencies_that_loaded = inst_27051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27083,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27079,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27081){
var map__27166 = p__27081;
var map__27166__$1 = ((((!((map__27166 == null)))?(((((map__27166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27166):map__27166);
var namespace = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27083,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27079,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27083__$1 = cljs.core.group_by.call(null,inst_27082,inst_27049);
var inst_27085 = (inst_27083__$1 == null);
var inst_27086 = cljs.core.not.call(null,inst_27085);
var state_27130__$1 = (function (){var statearr_27168 = state_27130;
(statearr_27168[(16)] = inst_27083__$1);

(statearr_27168[(28)] = inst_27079);

return statearr_27168;
})();
if(inst_27086){
var statearr_27169_27242 = state_27130__$1;
(statearr_27169_27242[(1)] = (32));

} else {
var statearr_27170_27243 = state_27130__$1;
(statearr_27170_27243[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (44))){
var inst_27106 = (state_27130[(21)]);
var inst_27119 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27106);
var inst_27120 = cljs.core.pr_str.call(null,inst_27119);
var inst_27121 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27120)].join('');
var inst_27122 = figwheel.client.utils.log.call(null,inst_27121);
var state_27130__$1 = state_27130;
var statearr_27171_27244 = state_27130__$1;
(statearr_27171_27244[(2)] = inst_27122);

(statearr_27171_27244[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (6))){
var inst_27024 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27172_27245 = state_27130__$1;
(statearr_27172_27245[(2)] = inst_27024);

(statearr_27172_27245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (28))){
var inst_27049 = (state_27130[(26)]);
var inst_27076 = (state_27130[(2)]);
var inst_27077 = cljs.core.not_empty.call(null,inst_27049);
var state_27130__$1 = (function (){var statearr_27173 = state_27130;
(statearr_27173[(29)] = inst_27076);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27077)){
var statearr_27174_27246 = state_27130__$1;
(statearr_27174_27246[(1)] = (29));

} else {
var statearr_27175_27247 = state_27130__$1;
(statearr_27175_27247[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (25))){
var inst_27047 = (state_27130[(24)]);
var inst_27063 = (state_27130[(2)]);
var inst_27064 = cljs.core.not_empty.call(null,inst_27047);
var state_27130__$1 = (function (){var statearr_27176 = state_27130;
(statearr_27176[(30)] = inst_27063);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27064)){
var statearr_27177_27248 = state_27130__$1;
(statearr_27177_27248[(1)] = (26));

} else {
var statearr_27178_27249 = state_27130__$1;
(statearr_27178_27249[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (34))){
var inst_27099 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_27099)){
var statearr_27179_27250 = state_27130__$1;
(statearr_27179_27250[(1)] = (38));

} else {
var statearr_27180_27251 = state_27130__$1;
(statearr_27180_27251[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (17))){
var state_27130__$1 = state_27130;
var statearr_27181_27252 = state_27130__$1;
(statearr_27181_27252[(2)] = recompile_dependents);

(statearr_27181_27252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (3))){
var state_27130__$1 = state_27130;
var statearr_27182_27253 = state_27130__$1;
(statearr_27182_27253[(2)] = null);

(statearr_27182_27253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (12))){
var inst_27020 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27183_27254 = state_27130__$1;
(statearr_27183_27254[(2)] = inst_27020);

(statearr_27183_27254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (2))){
var inst_26982 = (state_27130[(13)]);
var inst_26989 = cljs.core.seq.call(null,inst_26982);
var inst_26990 = inst_26989;
var inst_26991 = null;
var inst_26992 = (0);
var inst_26993 = (0);
var state_27130__$1 = (function (){var statearr_27184 = state_27130;
(statearr_27184[(7)] = inst_26991);

(statearr_27184[(8)] = inst_26992);

(statearr_27184[(9)] = inst_26990);

(statearr_27184[(10)] = inst_26993);

return statearr_27184;
})();
var statearr_27185_27255 = state_27130__$1;
(statearr_27185_27255[(2)] = null);

(statearr_27185_27255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (23))){
var inst_27046 = (state_27130[(23)]);
var inst_27047 = (state_27130[(24)]);
var inst_27043 = (state_27130[(19)]);
var inst_27051 = (state_27130[(25)]);
var inst_27049 = (state_27130[(26)]);
var inst_27054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27056 = (function (){var all_files = inst_27043;
var res_SINGLEQUOTE_ = inst_27046;
var res = inst_27047;
var files_not_loaded = inst_27049;
var dependencies_that_loaded = inst_27051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27054,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27055){
var map__27186 = p__27055;
var map__27186__$1 = ((((!((map__27186 == null)))?(((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var request_url = cljs.core.get.call(null,map__27186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27054,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27057 = cljs.core.reverse.call(null,inst_27051);
var inst_27058 = cljs.core.map.call(null,inst_27056,inst_27057);
var inst_27059 = cljs.core.pr_str.call(null,inst_27058);
var inst_27060 = figwheel.client.utils.log.call(null,inst_27059);
var state_27130__$1 = (function (){var statearr_27188 = state_27130;
(statearr_27188[(31)] = inst_27054);

return statearr_27188;
})();
var statearr_27189_27256 = state_27130__$1;
(statearr_27189_27256[(2)] = inst_27060);

(statearr_27189_27256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (35))){
var state_27130__$1 = state_27130;
var statearr_27190_27257 = state_27130__$1;
(statearr_27190_27257[(2)] = true);

(statearr_27190_27257[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (19))){
var inst_27033 = (state_27130[(12)]);
var inst_27039 = figwheel.client.file_reloading.expand_files.call(null,inst_27033);
var state_27130__$1 = state_27130;
var statearr_27191_27258 = state_27130__$1;
(statearr_27191_27258[(2)] = inst_27039);

(statearr_27191_27258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (11))){
var state_27130__$1 = state_27130;
var statearr_27192_27259 = state_27130__$1;
(statearr_27192_27259[(2)] = null);

(statearr_27192_27259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (9))){
var inst_27022 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27193_27260 = state_27130__$1;
(statearr_27193_27260[(2)] = inst_27022);

(statearr_27193_27260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (5))){
var inst_26992 = (state_27130[(8)]);
var inst_26993 = (state_27130[(10)]);
var inst_26995 = (inst_26993 < inst_26992);
var inst_26996 = inst_26995;
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_26996)){
var statearr_27194_27261 = state_27130__$1;
(statearr_27194_27261[(1)] = (7));

} else {
var statearr_27195_27262 = state_27130__$1;
(statearr_27195_27262[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (14))){
var inst_27003 = (state_27130[(22)]);
var inst_27012 = cljs.core.first.call(null,inst_27003);
var inst_27013 = figwheel.client.file_reloading.eval_body.call(null,inst_27012,opts);
var inst_27014 = cljs.core.next.call(null,inst_27003);
var inst_26990 = inst_27014;
var inst_26991 = null;
var inst_26992 = (0);
var inst_26993 = (0);
var state_27130__$1 = (function (){var statearr_27196 = state_27130;
(statearr_27196[(32)] = inst_27013);

(statearr_27196[(7)] = inst_26991);

(statearr_27196[(8)] = inst_26992);

(statearr_27196[(9)] = inst_26990);

(statearr_27196[(10)] = inst_26993);

return statearr_27196;
})();
var statearr_27197_27263 = state_27130__$1;
(statearr_27197_27263[(2)] = null);

(statearr_27197_27263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (45))){
var state_27130__$1 = state_27130;
var statearr_27198_27264 = state_27130__$1;
(statearr_27198_27264[(2)] = null);

(statearr_27198_27264[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (26))){
var inst_27046 = (state_27130[(23)]);
var inst_27047 = (state_27130[(24)]);
var inst_27043 = (state_27130[(19)]);
var inst_27051 = (state_27130[(25)]);
var inst_27049 = (state_27130[(26)]);
var inst_27066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27068 = (function (){var all_files = inst_27043;
var res_SINGLEQUOTE_ = inst_27046;
var res = inst_27047;
var files_not_loaded = inst_27049;
var dependencies_that_loaded = inst_27051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27066,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27067){
var map__27199 = p__27067;
var map__27199__$1 = ((((!((map__27199 == null)))?(((((map__27199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27199):map__27199);
var namespace = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27066,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27069 = cljs.core.map.call(null,inst_27068,inst_27047);
var inst_27070 = cljs.core.pr_str.call(null,inst_27069);
var inst_27071 = figwheel.client.utils.log.call(null,inst_27070);
var inst_27072 = (function (){var all_files = inst_27043;
var res_SINGLEQUOTE_ = inst_27046;
var res = inst_27047;
var files_not_loaded = inst_27049;
var dependencies_that_loaded = inst_27051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27066,inst_27068,inst_27069,inst_27070,inst_27071,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27046,inst_27047,inst_27043,inst_27051,inst_27049,inst_27066,inst_27068,inst_27069,inst_27070,inst_27071,state_val_27131,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27073 = setTimeout(inst_27072,(10));
var state_27130__$1 = (function (){var statearr_27201 = state_27130;
(statearr_27201[(33)] = inst_27066);

(statearr_27201[(34)] = inst_27071);

return statearr_27201;
})();
var statearr_27202_27265 = state_27130__$1;
(statearr_27202_27265[(2)] = inst_27073);

(statearr_27202_27265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (16))){
var state_27130__$1 = state_27130;
var statearr_27203_27266 = state_27130__$1;
(statearr_27203_27266[(2)] = reload_dependents);

(statearr_27203_27266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (38))){
var inst_27083 = (state_27130[(16)]);
var inst_27101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27083);
var state_27130__$1 = state_27130;
var statearr_27204_27267 = state_27130__$1;
(statearr_27204_27267[(2)] = inst_27101);

(statearr_27204_27267[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (30))){
var state_27130__$1 = state_27130;
var statearr_27205_27268 = state_27130__$1;
(statearr_27205_27268[(2)] = null);

(statearr_27205_27268[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (10))){
var inst_27003 = (state_27130[(22)]);
var inst_27005 = cljs.core.chunked_seq_QMARK_.call(null,inst_27003);
var state_27130__$1 = state_27130;
if(inst_27005){
var statearr_27206_27269 = state_27130__$1;
(statearr_27206_27269[(1)] = (13));

} else {
var statearr_27207_27270 = state_27130__$1;
(statearr_27207_27270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (18))){
var inst_27037 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_27037)){
var statearr_27208_27271 = state_27130__$1;
(statearr_27208_27271[(1)] = (19));

} else {
var statearr_27209_27272 = state_27130__$1;
(statearr_27209_27272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (42))){
var state_27130__$1 = state_27130;
var statearr_27210_27273 = state_27130__$1;
(statearr_27210_27273[(2)] = null);

(statearr_27210_27273[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (37))){
var inst_27096 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27211_27274 = state_27130__$1;
(statearr_27211_27274[(2)] = inst_27096);

(statearr_27211_27274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (8))){
var inst_26990 = (state_27130[(9)]);
var inst_27003 = (state_27130[(22)]);
var inst_27003__$1 = cljs.core.seq.call(null,inst_26990);
var state_27130__$1 = (function (){var statearr_27212 = state_27130;
(statearr_27212[(22)] = inst_27003__$1);

return statearr_27212;
})();
if(inst_27003__$1){
var statearr_27213_27275 = state_27130__$1;
(statearr_27213_27275[(1)] = (10));

} else {
var statearr_27214_27276 = state_27130__$1;
(statearr_27214_27276[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23309__auto__,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____0 = (function (){
var statearr_27215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27215[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__);

(statearr_27215[(1)] = (1));

return statearr_27215;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____1 = (function (state_27130){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_27130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e27216){if((e27216 instanceof Object)){
var ex__23313__auto__ = e27216;
var statearr_27217_27277 = state_27130;
(statearr_27217_27277[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27278 = state_27130;
state_27130 = G__27278;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__ = function(state_27130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____1.call(this,state_27130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23366__auto__ = (function (){var statearr_27218 = f__23365__auto__.call(null);
(statearr_27218[(6)] = c__23364__auto__);

return statearr_27218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__,map__26975,map__26975__$1,opts,before_jsload,on_jsload,reload_dependents,map__26976,map__26976__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23364__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27281,link){
var map__27282 = p__27281;
var map__27282__$1 = ((((!((map__27282 == null)))?(((((map__27282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27282):map__27282);
var file = cljs.core.get.call(null,map__27282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27282,map__27282__$1,file){
return (function (p1__27279_SHARP_,p2__27280_SHARP_){
if(cljs.core._EQ_.call(null,p1__27279_SHARP_,p2__27280_SHARP_)){
return p1__27279_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27282,map__27282__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27285){
var map__27286 = p__27285;
var map__27286__$1 = ((((!((map__27286 == null)))?(((((map__27286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27286):map__27286);
var match_length = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27284_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27284_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27288_SHARP_,p2__27289_SHARP_){
return cljs.core.assoc.call(null,p1__27288_SHARP_,cljs.core.get.call(null,p2__27289_SHARP_,key),p2__27289_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27290 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27290);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27290);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27291,p__27292){
var map__27293 = p__27291;
var map__27293__$1 = ((((!((map__27293 == null)))?(((((map__27293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var on_cssload = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27294 = p__27292;
var map__27294__$1 = ((((!((map__27294 == null)))?(((((map__27294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27294):map__27294);
var files_msg = map__27294__$1;
var files = cljs.core.get.call(null,map__27294__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1525651480407
