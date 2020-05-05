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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32316_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32316_SHARP_));
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
var seq__32317 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32318 = null;
var count__32319 = (0);
var i__32320 = (0);
while(true){
if((i__32320 < count__32319)){
var n = cljs.core._nth.call(null,chunk__32318,i__32320);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32321 = seq__32317;
var G__32322 = chunk__32318;
var G__32323 = count__32319;
var G__32324 = (i__32320 + (1));
seq__32317 = G__32321;
chunk__32318 = G__32322;
count__32319 = G__32323;
i__32320 = G__32324;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32317);
if(temp__5457__auto__){
var seq__32317__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32317__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32317__$1);
var G__32325 = cljs.core.chunk_rest.call(null,seq__32317__$1);
var G__32326 = c__4319__auto__;
var G__32327 = cljs.core.count.call(null,c__4319__auto__);
var G__32328 = (0);
seq__32317 = G__32325;
chunk__32318 = G__32326;
count__32319 = G__32327;
i__32320 = G__32328;
continue;
} else {
var n = cljs.core.first.call(null,seq__32317__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32329 = cljs.core.next.call(null,seq__32317__$1);
var G__32330 = null;
var G__32331 = (0);
var G__32332 = (0);
seq__32317 = G__32329;
chunk__32318 = G__32330;
count__32319 = G__32331;
i__32320 = G__32332;
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
return cljs.core.some.call(null,(function (p__32333){
var vec__32334 = p__32333;
var _ = cljs.core.nth.call(null,vec__32334,(0),null);
var v = cljs.core.nth.call(null,vec__32334,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__32337){
var vec__32338 = p__32337;
var k = cljs.core.nth.call(null,vec__32338,(0),null);
var v = cljs.core.nth.call(null,vec__32338,(1),null);
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

var seq__32350_32358 = cljs.core.seq.call(null,deps);
var chunk__32351_32359 = null;
var count__32352_32360 = (0);
var i__32353_32361 = (0);
while(true){
if((i__32353_32361 < count__32352_32360)){
var dep_32362 = cljs.core._nth.call(null,chunk__32351_32359,i__32353_32361);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32362;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32362));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32362,(depth + (1)),state);
} else {
}


var G__32363 = seq__32350_32358;
var G__32364 = chunk__32351_32359;
var G__32365 = count__32352_32360;
var G__32366 = (i__32353_32361 + (1));
seq__32350_32358 = G__32363;
chunk__32351_32359 = G__32364;
count__32352_32360 = G__32365;
i__32353_32361 = G__32366;
continue;
} else {
var temp__5457__auto___32367 = cljs.core.seq.call(null,seq__32350_32358);
if(temp__5457__auto___32367){
var seq__32350_32368__$1 = temp__5457__auto___32367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32350_32368__$1)){
var c__4319__auto___32369 = cljs.core.chunk_first.call(null,seq__32350_32368__$1);
var G__32370 = cljs.core.chunk_rest.call(null,seq__32350_32368__$1);
var G__32371 = c__4319__auto___32369;
var G__32372 = cljs.core.count.call(null,c__4319__auto___32369);
var G__32373 = (0);
seq__32350_32358 = G__32370;
chunk__32351_32359 = G__32371;
count__32352_32360 = G__32372;
i__32353_32361 = G__32373;
continue;
} else {
var dep_32374 = cljs.core.first.call(null,seq__32350_32368__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32374;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32374));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32374,(depth + (1)),state);
} else {
}


var G__32375 = cljs.core.next.call(null,seq__32350_32368__$1);
var G__32376 = null;
var G__32377 = (0);
var G__32378 = (0);
seq__32350_32358 = G__32375;
chunk__32351_32359 = G__32376;
count__32352_32360 = G__32377;
i__32353_32361 = G__32378;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32354){
var vec__32355 = p__32354;
var seq__32356 = cljs.core.seq.call(null,vec__32355);
var first__32357 = cljs.core.first.call(null,seq__32356);
var seq__32356__$1 = cljs.core.next.call(null,seq__32356);
var x = first__32357;
var xs = seq__32356__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32355,seq__32356,first__32357,seq__32356__$1,x,xs,get_deps__$1){
return (function (p1__32341_SHARP_){
return clojure.set.difference.call(null,p1__32341_SHARP_,x);
});})(vec__32355,seq__32356,first__32357,seq__32356__$1,x,xs,get_deps__$1))
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
var seq__32379 = cljs.core.seq.call(null,provides);
var chunk__32380 = null;
var count__32381 = (0);
var i__32382 = (0);
while(true){
if((i__32382 < count__32381)){
var prov = cljs.core._nth.call(null,chunk__32380,i__32382);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32383_32391 = cljs.core.seq.call(null,requires);
var chunk__32384_32392 = null;
var count__32385_32393 = (0);
var i__32386_32394 = (0);
while(true){
if((i__32386_32394 < count__32385_32393)){
var req_32395 = cljs.core._nth.call(null,chunk__32384_32392,i__32386_32394);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32395,prov);


var G__32396 = seq__32383_32391;
var G__32397 = chunk__32384_32392;
var G__32398 = count__32385_32393;
var G__32399 = (i__32386_32394 + (1));
seq__32383_32391 = G__32396;
chunk__32384_32392 = G__32397;
count__32385_32393 = G__32398;
i__32386_32394 = G__32399;
continue;
} else {
var temp__5457__auto___32400 = cljs.core.seq.call(null,seq__32383_32391);
if(temp__5457__auto___32400){
var seq__32383_32401__$1 = temp__5457__auto___32400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32383_32401__$1)){
var c__4319__auto___32402 = cljs.core.chunk_first.call(null,seq__32383_32401__$1);
var G__32403 = cljs.core.chunk_rest.call(null,seq__32383_32401__$1);
var G__32404 = c__4319__auto___32402;
var G__32405 = cljs.core.count.call(null,c__4319__auto___32402);
var G__32406 = (0);
seq__32383_32391 = G__32403;
chunk__32384_32392 = G__32404;
count__32385_32393 = G__32405;
i__32386_32394 = G__32406;
continue;
} else {
var req_32407 = cljs.core.first.call(null,seq__32383_32401__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32407,prov);


var G__32408 = cljs.core.next.call(null,seq__32383_32401__$1);
var G__32409 = null;
var G__32410 = (0);
var G__32411 = (0);
seq__32383_32391 = G__32408;
chunk__32384_32392 = G__32409;
count__32385_32393 = G__32410;
i__32386_32394 = G__32411;
continue;
}
} else {
}
}
break;
}


var G__32412 = seq__32379;
var G__32413 = chunk__32380;
var G__32414 = count__32381;
var G__32415 = (i__32382 + (1));
seq__32379 = G__32412;
chunk__32380 = G__32413;
count__32381 = G__32414;
i__32382 = G__32415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32379);
if(temp__5457__auto__){
var seq__32379__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32379__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32379__$1);
var G__32416 = cljs.core.chunk_rest.call(null,seq__32379__$1);
var G__32417 = c__4319__auto__;
var G__32418 = cljs.core.count.call(null,c__4319__auto__);
var G__32419 = (0);
seq__32379 = G__32416;
chunk__32380 = G__32417;
count__32381 = G__32418;
i__32382 = G__32419;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32379__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32387_32420 = cljs.core.seq.call(null,requires);
var chunk__32388_32421 = null;
var count__32389_32422 = (0);
var i__32390_32423 = (0);
while(true){
if((i__32390_32423 < count__32389_32422)){
var req_32424 = cljs.core._nth.call(null,chunk__32388_32421,i__32390_32423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32424,prov);


var G__32425 = seq__32387_32420;
var G__32426 = chunk__32388_32421;
var G__32427 = count__32389_32422;
var G__32428 = (i__32390_32423 + (1));
seq__32387_32420 = G__32425;
chunk__32388_32421 = G__32426;
count__32389_32422 = G__32427;
i__32390_32423 = G__32428;
continue;
} else {
var temp__5457__auto___32429__$1 = cljs.core.seq.call(null,seq__32387_32420);
if(temp__5457__auto___32429__$1){
var seq__32387_32430__$1 = temp__5457__auto___32429__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32387_32430__$1)){
var c__4319__auto___32431 = cljs.core.chunk_first.call(null,seq__32387_32430__$1);
var G__32432 = cljs.core.chunk_rest.call(null,seq__32387_32430__$1);
var G__32433 = c__4319__auto___32431;
var G__32434 = cljs.core.count.call(null,c__4319__auto___32431);
var G__32435 = (0);
seq__32387_32420 = G__32432;
chunk__32388_32421 = G__32433;
count__32389_32422 = G__32434;
i__32390_32423 = G__32435;
continue;
} else {
var req_32436 = cljs.core.first.call(null,seq__32387_32430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32436,prov);


var G__32437 = cljs.core.next.call(null,seq__32387_32430__$1);
var G__32438 = null;
var G__32439 = (0);
var G__32440 = (0);
seq__32387_32420 = G__32437;
chunk__32388_32421 = G__32438;
count__32389_32422 = G__32439;
i__32390_32423 = G__32440;
continue;
}
} else {
}
}
break;
}


var G__32441 = cljs.core.next.call(null,seq__32379__$1);
var G__32442 = null;
var G__32443 = (0);
var G__32444 = (0);
seq__32379 = G__32441;
chunk__32380 = G__32442;
count__32381 = G__32443;
i__32382 = G__32444;
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
var seq__32445_32449 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32446_32450 = null;
var count__32447_32451 = (0);
var i__32448_32452 = (0);
while(true){
if((i__32448_32452 < count__32447_32451)){
var ns_32453 = cljs.core._nth.call(null,chunk__32446_32450,i__32448_32452);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32453);


var G__32454 = seq__32445_32449;
var G__32455 = chunk__32446_32450;
var G__32456 = count__32447_32451;
var G__32457 = (i__32448_32452 + (1));
seq__32445_32449 = G__32454;
chunk__32446_32450 = G__32455;
count__32447_32451 = G__32456;
i__32448_32452 = G__32457;
continue;
} else {
var temp__5457__auto___32458 = cljs.core.seq.call(null,seq__32445_32449);
if(temp__5457__auto___32458){
var seq__32445_32459__$1 = temp__5457__auto___32458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32445_32459__$1)){
var c__4319__auto___32460 = cljs.core.chunk_first.call(null,seq__32445_32459__$1);
var G__32461 = cljs.core.chunk_rest.call(null,seq__32445_32459__$1);
var G__32462 = c__4319__auto___32460;
var G__32463 = cljs.core.count.call(null,c__4319__auto___32460);
var G__32464 = (0);
seq__32445_32449 = G__32461;
chunk__32446_32450 = G__32462;
count__32447_32451 = G__32463;
i__32448_32452 = G__32464;
continue;
} else {
var ns_32465 = cljs.core.first.call(null,seq__32445_32459__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32465);


var G__32466 = cljs.core.next.call(null,seq__32445_32459__$1);
var G__32467 = null;
var G__32468 = (0);
var G__32469 = (0);
seq__32445_32449 = G__32466;
chunk__32446_32450 = G__32467;
count__32447_32451 = G__32468;
i__32448_32452 = G__32469;
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
var G__32470__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32471__i = 0, G__32471__a = new Array(arguments.length -  0);
while (G__32471__i < G__32471__a.length) {G__32471__a[G__32471__i] = arguments[G__32471__i + 0]; ++G__32471__i;}
  args = new cljs.core.IndexedSeq(G__32471__a,0,null);
} 
return G__32470__delegate.call(this,args);};
G__32470.cljs$lang$maxFixedArity = 0;
G__32470.cljs$lang$applyTo = (function (arglist__32472){
var args = cljs.core.seq(arglist__32472);
return G__32470__delegate(args);
});
G__32470.cljs$core$IFn$_invoke$arity$variadic = G__32470__delegate;
return G__32470;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__32473_SHARP_,p2__32474_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32473_SHARP_)].join('')),p2__32474_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__32475_SHARP_,p2__32476_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32475_SHARP_)].join(''),p2__32476_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32477 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32477.addCallback(((function (G__32477){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32477))
);

G__32477.addErrback(((function (G__32477){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32477))
);

return G__32477;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32478){if((e32478 instanceof Error)){
var e = e32478;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32478;

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
}catch (e32479){if((e32479 instanceof Error)){
var e = e32479;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32479;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32480 = cljs.core._EQ_;
var expr__32481 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32480.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32481))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32480.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32481))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32480.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32481))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32480,expr__32481){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32480,expr__32481))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32483,callback){
var map__32484 = p__32483;
var map__32484__$1 = ((((!((map__32484 == null)))?(((((map__32484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32484):map__32484);
var file_msg = map__32484__$1;
var request_url = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32484,map__32484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32484,map__32484__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__){
return (function (state_32522){
var state_val_32523 = (state_32522[(1)]);
if((state_val_32523 === (7))){
var inst_32518 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32524_32550 = state_32522__$1;
(statearr_32524_32550[(2)] = inst_32518);

(statearr_32524_32550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (1))){
var state_32522__$1 = state_32522;
var statearr_32525_32551 = state_32522__$1;
(statearr_32525_32551[(2)] = null);

(statearr_32525_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (4))){
var inst_32488 = (state_32522[(7)]);
var inst_32488__$1 = (state_32522[(2)]);
var state_32522__$1 = (function (){var statearr_32526 = state_32522;
(statearr_32526[(7)] = inst_32488__$1);

return statearr_32526;
})();
if(cljs.core.truth_(inst_32488__$1)){
var statearr_32527_32552 = state_32522__$1;
(statearr_32527_32552[(1)] = (5));

} else {
var statearr_32528_32553 = state_32522__$1;
(statearr_32528_32553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (15))){
var inst_32503 = (state_32522[(8)]);
var inst_32501 = (state_32522[(9)]);
var inst_32505 = inst_32503.call(null,inst_32501);
var state_32522__$1 = state_32522;
var statearr_32529_32554 = state_32522__$1;
(statearr_32529_32554[(2)] = inst_32505);

(statearr_32529_32554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (13))){
var inst_32512 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32530_32555 = state_32522__$1;
(statearr_32530_32555[(2)] = inst_32512);

(statearr_32530_32555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (6))){
var state_32522__$1 = state_32522;
var statearr_32531_32556 = state_32522__$1;
(statearr_32531_32556[(2)] = null);

(statearr_32531_32556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (17))){
var inst_32509 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32532_32557 = state_32522__$1;
(statearr_32532_32557[(2)] = inst_32509);

(statearr_32532_32557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (3))){
var inst_32520 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32522__$1,inst_32520);
} else {
if((state_val_32523 === (12))){
var state_32522__$1 = state_32522;
var statearr_32533_32558 = state_32522__$1;
(statearr_32533_32558[(2)] = null);

(statearr_32533_32558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (2))){
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32522__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32523 === (11))){
var inst_32493 = (state_32522[(10)]);
var inst_32499 = figwheel.client.file_reloading.blocking_load.call(null,inst_32493);
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32522__$1,(14),inst_32499);
} else {
if((state_val_32523 === (9))){
var inst_32493 = (state_32522[(10)]);
var state_32522__$1 = state_32522;
if(cljs.core.truth_(inst_32493)){
var statearr_32534_32559 = state_32522__$1;
(statearr_32534_32559[(1)] = (11));

} else {
var statearr_32535_32560 = state_32522__$1;
(statearr_32535_32560[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (5))){
var inst_32488 = (state_32522[(7)]);
var inst_32494 = (state_32522[(11)]);
var inst_32493 = cljs.core.nth.call(null,inst_32488,(0),null);
var inst_32494__$1 = cljs.core.nth.call(null,inst_32488,(1),null);
var state_32522__$1 = (function (){var statearr_32536 = state_32522;
(statearr_32536[(11)] = inst_32494__$1);

(statearr_32536[(10)] = inst_32493);

return statearr_32536;
})();
if(cljs.core.truth_(inst_32494__$1)){
var statearr_32537_32561 = state_32522__$1;
(statearr_32537_32561[(1)] = (8));

} else {
var statearr_32538_32562 = state_32522__$1;
(statearr_32538_32562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (14))){
var inst_32503 = (state_32522[(8)]);
var inst_32493 = (state_32522[(10)]);
var inst_32501 = (state_32522[(2)]);
var inst_32502 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32503__$1 = cljs.core.get.call(null,inst_32502,inst_32493);
var state_32522__$1 = (function (){var statearr_32539 = state_32522;
(statearr_32539[(8)] = inst_32503__$1);

(statearr_32539[(9)] = inst_32501);

return statearr_32539;
})();
if(cljs.core.truth_(inst_32503__$1)){
var statearr_32540_32563 = state_32522__$1;
(statearr_32540_32563[(1)] = (15));

} else {
var statearr_32541_32564 = state_32522__$1;
(statearr_32541_32564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (16))){
var inst_32501 = (state_32522[(9)]);
var inst_32507 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32501);
var state_32522__$1 = state_32522;
var statearr_32542_32565 = state_32522__$1;
(statearr_32542_32565[(2)] = inst_32507);

(statearr_32542_32565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (10))){
var inst_32514 = (state_32522[(2)]);
var state_32522__$1 = (function (){var statearr_32543 = state_32522;
(statearr_32543[(12)] = inst_32514);

return statearr_32543;
})();
var statearr_32544_32566 = state_32522__$1;
(statearr_32544_32566[(2)] = null);

(statearr_32544_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (8))){
var inst_32494 = (state_32522[(11)]);
var inst_32496 = eval(inst_32494);
var state_32522__$1 = state_32522;
var statearr_32545_32567 = state_32522__$1;
(statearr_32545_32567[(2)] = inst_32496);

(statearr_32545_32567[(1)] = (10));


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
});})(c__25398__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25312__auto__ = null;
var figwheel$client$file_reloading$state_machine__25312__auto____0 = (function (){
var statearr_32546 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32546[(0)] = figwheel$client$file_reloading$state_machine__25312__auto__);

(statearr_32546[(1)] = (1));

return statearr_32546;
});
var figwheel$client$file_reloading$state_machine__25312__auto____1 = (function (state_32522){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_32522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e32547){if((e32547 instanceof Object)){
var ex__25315__auto__ = e32547;
var statearr_32548_32568 = state_32522;
(statearr_32548_32568[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32569 = state_32522;
state_32522 = G__32569;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25312__auto__ = function(state_32522){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25312__auto____1.call(this,state_32522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25312__auto____0;
figwheel$client$file_reloading$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25312__auto____1;
return figwheel$client$file_reloading$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__))
})();
var state__25400__auto__ = (function (){var statearr_32549 = f__25399__auto__.call(null);
(statearr_32549[(6)] = c__25398__auto__);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__))
);

return c__25398__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32571 = arguments.length;
switch (G__32571) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32573,callback){
var map__32574 = p__32573;
var map__32574__$1 = ((((!((map__32574 == null)))?(((((map__32574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32574):map__32574);
var file_msg = map__32574__$1;
var namespace = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32574,map__32574__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32574,map__32574__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32576){
var map__32577 = p__32576;
var map__32577__$1 = ((((!((map__32577 == null)))?(((((map__32577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32577):map__32577);
var file_msg = map__32577__$1;
var namespace = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32579){
var map__32580 = p__32579;
var map__32580__$1 = ((((!((map__32580 == null)))?(((((map__32580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32580):map__32580);
var file_msg = map__32580__$1;
var namespace = cljs.core.get.call(null,map__32580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32582,callback){
var map__32583 = p__32582;
var map__32583__$1 = ((((!((map__32583 == null)))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32583):map__32583);
var file_msg = map__32583__$1;
var request_url = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25398__auto___32633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___32633,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___32633,out){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (1))){
var inst_32592 = cljs.core.seq.call(null,files);
var inst_32593 = cljs.core.first.call(null,inst_32592);
var inst_32594 = cljs.core.next.call(null,inst_32592);
var inst_32595 = files;
var state_32618__$1 = (function (){var statearr_32620 = state_32618;
(statearr_32620[(7)] = inst_32595);

(statearr_32620[(8)] = inst_32594);

(statearr_32620[(9)] = inst_32593);

return statearr_32620;
})();
var statearr_32621_32634 = state_32618__$1;
(statearr_32621_32634[(2)] = null);

(statearr_32621_32634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var inst_32595 = (state_32618[(7)]);
var inst_32601 = (state_32618[(10)]);
var inst_32600 = cljs.core.seq.call(null,inst_32595);
var inst_32601__$1 = cljs.core.first.call(null,inst_32600);
var inst_32602 = cljs.core.next.call(null,inst_32600);
var inst_32603 = (inst_32601__$1 == null);
var inst_32604 = cljs.core.not.call(null,inst_32603);
var state_32618__$1 = (function (){var statearr_32622 = state_32618;
(statearr_32622[(11)] = inst_32602);

(statearr_32622[(10)] = inst_32601__$1);

return statearr_32622;
})();
if(inst_32604){
var statearr_32623_32635 = state_32618__$1;
(statearr_32623_32635[(1)] = (4));

} else {
var statearr_32624_32636 = state_32618__$1;
(statearr_32624_32636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var inst_32616 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32618__$1,inst_32616);
} else {
if((state_val_32619 === (4))){
var inst_32601 = (state_32618[(10)]);
var inst_32606 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32601);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32618__$1,(7),inst_32606);
} else {
if((state_val_32619 === (5))){
var inst_32612 = cljs.core.async.close_BANG_.call(null,out);
var state_32618__$1 = state_32618;
var statearr_32625_32637 = state_32618__$1;
(statearr_32625_32637[(2)] = inst_32612);

(statearr_32625_32637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var inst_32614 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32626_32638 = state_32618__$1;
(statearr_32626_32638[(2)] = inst_32614);

(statearr_32626_32638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (7))){
var inst_32602 = (state_32618[(11)]);
var inst_32608 = (state_32618[(2)]);
var inst_32609 = cljs.core.async.put_BANG_.call(null,out,inst_32608);
var inst_32595 = inst_32602;
var state_32618__$1 = (function (){var statearr_32627 = state_32618;
(statearr_32627[(12)] = inst_32609);

(statearr_32627[(7)] = inst_32595);

return statearr_32627;
})();
var statearr_32628_32639 = state_32618__$1;
(statearr_32628_32639[(2)] = null);

(statearr_32628_32639[(1)] = (2));


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
});})(c__25398__auto___32633,out))
;
return ((function (switch__25311__auto__,c__25398__auto___32633,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____1 = (function (state_32618){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_32618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e32630){if((e32630 instanceof Object)){
var ex__25315__auto__ = e32630;
var statearr_32631_32640 = state_32618;
(statearr_32631_32640[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_32618;
state_32618 = G__32641;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___32633,out))
})();
var state__25400__auto__ = (function (){var statearr_32632 = f__25399__auto__.call(null);
(statearr_32632[(6)] = c__25398__auto___32633);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___32633,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32642,opts){
var map__32643 = p__32642;
var map__32643__$1 = ((((!((map__32643 == null)))?(((((map__32643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32643):map__32643);
var eval_body = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32645){var e = e32645;
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
return (function (p1__32646_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32646_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32647){
var vec__32648 = p__32647;
var k = cljs.core.nth.call(null,vec__32648,(0),null);
var v = cljs.core.nth.call(null,vec__32648,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32651){
var vec__32652 = p__32651;
var k = cljs.core.nth.call(null,vec__32652,(0),null);
var v = cljs.core.nth.call(null,vec__32652,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32658,p__32659){
var map__32660 = p__32658;
var map__32660__$1 = ((((!((map__32660 == null)))?(((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32660):map__32660);
var opts = map__32660__$1;
var before_jsload = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32661 = p__32659;
var map__32661__$1 = ((((!((map__32661 == null)))?(((((map__32661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32661):map__32661);
var msg = map__32661__$1;
var files = cljs.core.get.call(null,map__32661__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32661__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32661__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32675 = (state_32815[(7)]);
var inst_32678 = (state_32815[(8)]);
var inst_32676 = (state_32815[(9)]);
var inst_32677 = (state_32815[(10)]);
var inst_32683 = cljs.core._nth.call(null,inst_32676,inst_32678);
var inst_32684 = figwheel.client.file_reloading.eval_body.call(null,inst_32683,opts);
var inst_32685 = (inst_32678 + (1));
var tmp32817 = inst_32675;
var tmp32818 = inst_32676;
var tmp32819 = inst_32677;
var inst_32675__$1 = tmp32817;
var inst_32676__$1 = tmp32818;
var inst_32677__$1 = tmp32819;
var inst_32678__$1 = inst_32685;
var state_32815__$1 = (function (){var statearr_32820 = state_32815;
(statearr_32820[(7)] = inst_32675__$1);

(statearr_32820[(11)] = inst_32684);

(statearr_32820[(8)] = inst_32678__$1);

(statearr_32820[(9)] = inst_32676__$1);

(statearr_32820[(10)] = inst_32677__$1);

return statearr_32820;
})();
var statearr_32821_32904 = state_32815__$1;
(statearr_32821_32904[(2)] = null);

(statearr_32821_32904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (20))){
var inst_32718 = (state_32815[(12)]);
var inst_32726 = figwheel.client.file_reloading.sort_files.call(null,inst_32718);
var state_32815__$1 = state_32815;
var statearr_32822_32905 = state_32815__$1;
(statearr_32822_32905[(2)] = inst_32726);

(statearr_32822_32905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (27))){
var state_32815__$1 = state_32815;
var statearr_32823_32906 = state_32815__$1;
(statearr_32823_32906[(2)] = null);

(statearr_32823_32906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var inst_32667 = (state_32815[(13)]);
var inst_32664 = before_jsload.call(null,files);
var inst_32665 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32666 = (function (){return ((function (inst_32667,inst_32664,inst_32665,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32655_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32655_SHARP_);
});
;})(inst_32667,inst_32664,inst_32665,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32667__$1 = cljs.core.filter.call(null,inst_32666,files);
var inst_32668 = cljs.core.not_empty.call(null,inst_32667__$1);
var state_32815__$1 = (function (){var statearr_32824 = state_32815;
(statearr_32824[(13)] = inst_32667__$1);

(statearr_32824[(14)] = inst_32664);

(statearr_32824[(15)] = inst_32665);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32825_32907 = state_32815__$1;
(statearr_32825_32907[(1)] = (2));

} else {
var statearr_32826_32908 = state_32815__$1;
(statearr_32826_32908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (24))){
var state_32815__$1 = state_32815;
var statearr_32827_32909 = state_32815__$1;
(statearr_32827_32909[(2)] = null);

(statearr_32827_32909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (39))){
var inst_32768 = (state_32815[(16)]);
var state_32815__$1 = state_32815;
var statearr_32828_32910 = state_32815__$1;
(statearr_32828_32910[(2)] = inst_32768);

(statearr_32828_32910[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (46))){
var inst_32810 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32829_32911 = state_32815__$1;
(statearr_32829_32911[(2)] = inst_32810);

(statearr_32829_32911[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32712 = (state_32815[(2)]);
var inst_32713 = cljs.core.List.EMPTY;
var inst_32714 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32713);
var inst_32715 = (function (){return ((function (inst_32712,inst_32713,inst_32714,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32656_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32656_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32656_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32656_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_32712,inst_32713,inst_32714,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32716 = cljs.core.filter.call(null,inst_32715,files);
var inst_32717 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32718 = cljs.core.concat.call(null,inst_32716,inst_32717);
var state_32815__$1 = (function (){var statearr_32830 = state_32815;
(statearr_32830[(17)] = inst_32714);

(statearr_32830[(12)] = inst_32718);

(statearr_32830[(18)] = inst_32712);

return statearr_32830;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32831_32912 = state_32815__$1;
(statearr_32831_32912[(1)] = (16));

} else {
var statearr_32832_32913 = state_32815__$1;
(statearr_32832_32913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (15))){
var inst_32702 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32833_32914 = state_32815__$1;
(statearr_32833_32914[(2)] = inst_32702);

(statearr_32833_32914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (21))){
var inst_32728 = (state_32815[(19)]);
var inst_32728__$1 = (state_32815[(2)]);
var inst_32729 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32728__$1);
var state_32815__$1 = (function (){var statearr_32834 = state_32815;
(statearr_32834[(19)] = inst_32728__$1);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32815__$1,(22),inst_32729);
} else {
if((state_val_32816 === (31))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (32))){
var inst_32768 = (state_32815[(16)]);
var inst_32773 = inst_32768.cljs$lang$protocol_mask$partition0$;
var inst_32774 = (inst_32773 & (64));
var inst_32775 = inst_32768.cljs$core$ISeq$;
var inst_32776 = (cljs.core.PROTOCOL_SENTINEL === inst_32775);
var inst_32777 = ((inst_32774) || (inst_32776));
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32777)){
var statearr_32835_32915 = state_32815__$1;
(statearr_32835_32915[(1)] = (35));

} else {
var statearr_32836_32916 = state_32815__$1;
(statearr_32836_32916[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (40))){
var inst_32790 = (state_32815[(20)]);
var inst_32789 = (state_32815[(2)]);
var inst_32790__$1 = cljs.core.get.call(null,inst_32789,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32791 = cljs.core.get.call(null,inst_32789,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32792 = cljs.core.not_empty.call(null,inst_32790__$1);
var state_32815__$1 = (function (){var statearr_32837 = state_32815;
(statearr_32837[(20)] = inst_32790__$1);

(statearr_32837[(21)] = inst_32791);

return statearr_32837;
})();
if(cljs.core.truth_(inst_32792)){
var statearr_32838_32917 = state_32815__$1;
(statearr_32838_32917[(1)] = (41));

} else {
var statearr_32839_32918 = state_32815__$1;
(statearr_32839_32918[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (33))){
var state_32815__$1 = state_32815;
var statearr_32840_32919 = state_32815__$1;
(statearr_32840_32919[(2)] = false);

(statearr_32840_32919[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (13))){
var inst_32688 = (state_32815[(22)]);
var inst_32692 = cljs.core.chunk_first.call(null,inst_32688);
var inst_32693 = cljs.core.chunk_rest.call(null,inst_32688);
var inst_32694 = cljs.core.count.call(null,inst_32692);
var inst_32675 = inst_32693;
var inst_32676 = inst_32692;
var inst_32677 = inst_32694;
var inst_32678 = (0);
var state_32815__$1 = (function (){var statearr_32841 = state_32815;
(statearr_32841[(7)] = inst_32675);

(statearr_32841[(8)] = inst_32678);

(statearr_32841[(9)] = inst_32676);

(statearr_32841[(10)] = inst_32677);

return statearr_32841;
})();
var statearr_32842_32920 = state_32815__$1;
(statearr_32842_32920[(2)] = null);

(statearr_32842_32920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (22))){
var inst_32731 = (state_32815[(23)]);
var inst_32728 = (state_32815[(19)]);
var inst_32732 = (state_32815[(24)]);
var inst_32736 = (state_32815[(25)]);
var inst_32731__$1 = (state_32815[(2)]);
var inst_32732__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32731__$1);
var inst_32733 = (function (){var all_files = inst_32728;
var res_SINGLEQUOTE_ = inst_32731__$1;
var res = inst_32732__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32731,inst_32728,inst_32732,inst_32736,inst_32731__$1,inst_32732__$1,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32657_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32657_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32731,inst_32728,inst_32732,inst_32736,inst_32731__$1,inst_32732__$1,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32734 = cljs.core.filter.call(null,inst_32733,inst_32731__$1);
var inst_32735 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32736__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32735);
var inst_32737 = cljs.core.not_empty.call(null,inst_32736__$1);
var state_32815__$1 = (function (){var statearr_32843 = state_32815;
(statearr_32843[(23)] = inst_32731__$1);

(statearr_32843[(26)] = inst_32734);

(statearr_32843[(24)] = inst_32732__$1);

(statearr_32843[(25)] = inst_32736__$1);

return statearr_32843;
})();
if(cljs.core.truth_(inst_32737)){
var statearr_32844_32921 = state_32815__$1;
(statearr_32844_32921[(1)] = (23));

} else {
var statearr_32845_32922 = state_32815__$1;
(statearr_32845_32922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (36))){
var state_32815__$1 = state_32815;
var statearr_32846_32923 = state_32815__$1;
(statearr_32846_32923[(2)] = false);

(statearr_32846_32923[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (41))){
var inst_32790 = (state_32815[(20)]);
var inst_32794 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32795 = cljs.core.map.call(null,inst_32794,inst_32790);
var inst_32796 = cljs.core.pr_str.call(null,inst_32795);
var inst_32797 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32796)].join('');
var inst_32798 = figwheel.client.utils.log.call(null,inst_32797);
var state_32815__$1 = state_32815;
var statearr_32847_32924 = state_32815__$1;
(statearr_32847_32924[(2)] = inst_32798);

(statearr_32847_32924[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (43))){
var inst_32791 = (state_32815[(21)]);
var inst_32801 = (state_32815[(2)]);
var inst_32802 = cljs.core.not_empty.call(null,inst_32791);
var state_32815__$1 = (function (){var statearr_32848 = state_32815;
(statearr_32848[(27)] = inst_32801);

return statearr_32848;
})();
if(cljs.core.truth_(inst_32802)){
var statearr_32849_32925 = state_32815__$1;
(statearr_32849_32925[(1)] = (44));

} else {
var statearr_32850_32926 = state_32815__$1;
(statearr_32850_32926[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (29))){
var inst_32731 = (state_32815[(23)]);
var inst_32768 = (state_32815[(16)]);
var inst_32728 = (state_32815[(19)]);
var inst_32734 = (state_32815[(26)]);
var inst_32732 = (state_32815[(24)]);
var inst_32736 = (state_32815[(25)]);
var inst_32764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32767 = (function (){var all_files = inst_32728;
var res_SINGLEQUOTE_ = inst_32731;
var res = inst_32732;
var files_not_loaded = inst_32734;
var dependencies_that_loaded = inst_32736;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32768,inst_32728,inst_32734,inst_32732,inst_32736,inst_32764,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32766){
var map__32851 = p__32766;
var map__32851__$1 = ((((!((map__32851 == null)))?(((((map__32851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32851):map__32851);
var namespace = cljs.core.get.call(null,map__32851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32768,inst_32728,inst_32734,inst_32732,inst_32736,inst_32764,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32768__$1 = cljs.core.group_by.call(null,inst_32767,inst_32734);
var inst_32770 = (inst_32768__$1 == null);
var inst_32771 = cljs.core.not.call(null,inst_32770);
var state_32815__$1 = (function (){var statearr_32853 = state_32815;
(statearr_32853[(28)] = inst_32764);

(statearr_32853[(16)] = inst_32768__$1);

return statearr_32853;
})();
if(inst_32771){
var statearr_32854_32927 = state_32815__$1;
(statearr_32854_32927[(1)] = (32));

} else {
var statearr_32855_32928 = state_32815__$1;
(statearr_32855_32928[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (44))){
var inst_32791 = (state_32815[(21)]);
var inst_32804 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32791);
var inst_32805 = cljs.core.pr_str.call(null,inst_32804);
var inst_32806 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32805)].join('');
var inst_32807 = figwheel.client.utils.log.call(null,inst_32806);
var state_32815__$1 = state_32815;
var statearr_32856_32929 = state_32815__$1;
(statearr_32856_32929[(2)] = inst_32807);

(statearr_32856_32929[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var inst_32709 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32857_32930 = state_32815__$1;
(statearr_32857_32930[(2)] = inst_32709);

(statearr_32857_32930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (28))){
var inst_32734 = (state_32815[(26)]);
var inst_32761 = (state_32815[(2)]);
var inst_32762 = cljs.core.not_empty.call(null,inst_32734);
var state_32815__$1 = (function (){var statearr_32858 = state_32815;
(statearr_32858[(29)] = inst_32761);

return statearr_32858;
})();
if(cljs.core.truth_(inst_32762)){
var statearr_32859_32931 = state_32815__$1;
(statearr_32859_32931[(1)] = (29));

} else {
var statearr_32860_32932 = state_32815__$1;
(statearr_32860_32932[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (25))){
var inst_32732 = (state_32815[(24)]);
var inst_32748 = (state_32815[(2)]);
var inst_32749 = cljs.core.not_empty.call(null,inst_32732);
var state_32815__$1 = (function (){var statearr_32861 = state_32815;
(statearr_32861[(30)] = inst_32748);

return statearr_32861;
})();
if(cljs.core.truth_(inst_32749)){
var statearr_32862_32933 = state_32815__$1;
(statearr_32862_32933[(1)] = (26));

} else {
var statearr_32863_32934 = state_32815__$1;
(statearr_32863_32934[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (34))){
var inst_32784 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32784)){
var statearr_32864_32935 = state_32815__$1;
(statearr_32864_32935[(1)] = (38));

} else {
var statearr_32865_32936 = state_32815__$1;
(statearr_32865_32936[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (17))){
var state_32815__$1 = state_32815;
var statearr_32866_32937 = state_32815__$1;
(statearr_32866_32937[(2)] = recompile_dependents);

(statearr_32866_32937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (3))){
var state_32815__$1 = state_32815;
var statearr_32867_32938 = state_32815__$1;
(statearr_32867_32938[(2)] = null);

(statearr_32867_32938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (12))){
var inst_32705 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32868_32939 = state_32815__$1;
(statearr_32868_32939[(2)] = inst_32705);

(statearr_32868_32939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (2))){
var inst_32667 = (state_32815[(13)]);
var inst_32674 = cljs.core.seq.call(null,inst_32667);
var inst_32675 = inst_32674;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32815__$1 = (function (){var statearr_32869 = state_32815;
(statearr_32869[(7)] = inst_32675);

(statearr_32869[(8)] = inst_32678);

(statearr_32869[(9)] = inst_32676);

(statearr_32869[(10)] = inst_32677);

return statearr_32869;
})();
var statearr_32870_32940 = state_32815__$1;
(statearr_32870_32940[(2)] = null);

(statearr_32870_32940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (23))){
var inst_32731 = (state_32815[(23)]);
var inst_32728 = (state_32815[(19)]);
var inst_32734 = (state_32815[(26)]);
var inst_32732 = (state_32815[(24)]);
var inst_32736 = (state_32815[(25)]);
var inst_32739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32741 = (function (){var all_files = inst_32728;
var res_SINGLEQUOTE_ = inst_32731;
var res = inst_32732;
var files_not_loaded = inst_32734;
var dependencies_that_loaded = inst_32736;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32739,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32740){
var map__32871 = p__32740;
var map__32871__$1 = ((((!((map__32871 == null)))?(((((map__32871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32871):map__32871);
var request_url = cljs.core.get.call(null,map__32871__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32739,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32742 = cljs.core.reverse.call(null,inst_32736);
var inst_32743 = cljs.core.map.call(null,inst_32741,inst_32742);
var inst_32744 = cljs.core.pr_str.call(null,inst_32743);
var inst_32745 = figwheel.client.utils.log.call(null,inst_32744);
var state_32815__$1 = (function (){var statearr_32873 = state_32815;
(statearr_32873[(31)] = inst_32739);

return statearr_32873;
})();
var statearr_32874_32941 = state_32815__$1;
(statearr_32874_32941[(2)] = inst_32745);

(statearr_32874_32941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (35))){
var state_32815__$1 = state_32815;
var statearr_32875_32942 = state_32815__$1;
(statearr_32875_32942[(2)] = true);

(statearr_32875_32942[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (19))){
var inst_32718 = (state_32815[(12)]);
var inst_32724 = figwheel.client.file_reloading.expand_files.call(null,inst_32718);
var state_32815__$1 = state_32815;
var statearr_32876_32943 = state_32815__$1;
(statearr_32876_32943[(2)] = inst_32724);

(statearr_32876_32943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (11))){
var state_32815__$1 = state_32815;
var statearr_32877_32944 = state_32815__$1;
(statearr_32877_32944[(2)] = null);

(statearr_32877_32944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var inst_32707 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32878_32945 = state_32815__$1;
(statearr_32878_32945[(2)] = inst_32707);

(statearr_32878_32945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var inst_32678 = (state_32815[(8)]);
var inst_32677 = (state_32815[(10)]);
var inst_32680 = (inst_32678 < inst_32677);
var inst_32681 = inst_32680;
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32681)){
var statearr_32879_32946 = state_32815__$1;
(statearr_32879_32946[(1)] = (7));

} else {
var statearr_32880_32947 = state_32815__$1;
(statearr_32880_32947[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (14))){
var inst_32688 = (state_32815[(22)]);
var inst_32697 = cljs.core.first.call(null,inst_32688);
var inst_32698 = figwheel.client.file_reloading.eval_body.call(null,inst_32697,opts);
var inst_32699 = cljs.core.next.call(null,inst_32688);
var inst_32675 = inst_32699;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32815__$1 = (function (){var statearr_32881 = state_32815;
(statearr_32881[(7)] = inst_32675);

(statearr_32881[(8)] = inst_32678);

(statearr_32881[(9)] = inst_32676);

(statearr_32881[(32)] = inst_32698);

(statearr_32881[(10)] = inst_32677);

return statearr_32881;
})();
var statearr_32882_32948 = state_32815__$1;
(statearr_32882_32948[(2)] = null);

(statearr_32882_32948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (45))){
var state_32815__$1 = state_32815;
var statearr_32883_32949 = state_32815__$1;
(statearr_32883_32949[(2)] = null);

(statearr_32883_32949[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (26))){
var inst_32731 = (state_32815[(23)]);
var inst_32728 = (state_32815[(19)]);
var inst_32734 = (state_32815[(26)]);
var inst_32732 = (state_32815[(24)]);
var inst_32736 = (state_32815[(25)]);
var inst_32751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32753 = (function (){var all_files = inst_32728;
var res_SINGLEQUOTE_ = inst_32731;
var res = inst_32732;
var files_not_loaded = inst_32734;
var dependencies_that_loaded = inst_32736;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32751,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32752){
var map__32884 = p__32752;
var map__32884__$1 = ((((!((map__32884 == null)))?(((((map__32884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32884):map__32884);
var namespace = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32751,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32754 = cljs.core.map.call(null,inst_32753,inst_32732);
var inst_32755 = cljs.core.pr_str.call(null,inst_32754);
var inst_32756 = figwheel.client.utils.log.call(null,inst_32755);
var inst_32757 = (function (){var all_files = inst_32728;
var res_SINGLEQUOTE_ = inst_32731;
var res = inst_32732;
var files_not_loaded = inst_32734;
var dependencies_that_loaded = inst_32736;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32751,inst_32753,inst_32754,inst_32755,inst_32756,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32731,inst_32728,inst_32734,inst_32732,inst_32736,inst_32751,inst_32753,inst_32754,inst_32755,inst_32756,state_val_32816,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32758 = setTimeout(inst_32757,(10));
var state_32815__$1 = (function (){var statearr_32886 = state_32815;
(statearr_32886[(33)] = inst_32756);

(statearr_32886[(34)] = inst_32751);

return statearr_32886;
})();
var statearr_32887_32950 = state_32815__$1;
(statearr_32887_32950[(2)] = inst_32758);

(statearr_32887_32950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (16))){
var state_32815__$1 = state_32815;
var statearr_32888_32951 = state_32815__$1;
(statearr_32888_32951[(2)] = reload_dependents);

(statearr_32888_32951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (38))){
var inst_32768 = (state_32815[(16)]);
var inst_32786 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32768);
var state_32815__$1 = state_32815;
var statearr_32889_32952 = state_32815__$1;
(statearr_32889_32952[(2)] = inst_32786);

(statearr_32889_32952[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (30))){
var state_32815__$1 = state_32815;
var statearr_32890_32953 = state_32815__$1;
(statearr_32890_32953[(2)] = null);

(statearr_32890_32953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32688 = (state_32815[(22)]);
var inst_32690 = cljs.core.chunked_seq_QMARK_.call(null,inst_32688);
var state_32815__$1 = state_32815;
if(inst_32690){
var statearr_32891_32954 = state_32815__$1;
(statearr_32891_32954[(1)] = (13));

} else {
var statearr_32892_32955 = state_32815__$1;
(statearr_32892_32955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (18))){
var inst_32722 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32722)){
var statearr_32893_32956 = state_32815__$1;
(statearr_32893_32956[(1)] = (19));

} else {
var statearr_32894_32957 = state_32815__$1;
(statearr_32894_32957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (42))){
var state_32815__$1 = state_32815;
var statearr_32895_32958 = state_32815__$1;
(statearr_32895_32958[(2)] = null);

(statearr_32895_32958[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (37))){
var inst_32781 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32896_32959 = state_32815__$1;
(statearr_32896_32959[(2)] = inst_32781);

(statearr_32896_32959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32688 = (state_32815[(22)]);
var inst_32675 = (state_32815[(7)]);
var inst_32688__$1 = cljs.core.seq.call(null,inst_32675);
var state_32815__$1 = (function (){var statearr_32897 = state_32815;
(statearr_32897[(22)] = inst_32688__$1);

return statearr_32897;
})();
if(inst_32688__$1){
var statearr_32898_32960 = state_32815__$1;
(statearr_32898_32960[(1)] = (10));

} else {
var statearr_32899_32961 = state_32815__$1;
(statearr_32899_32961[(1)] = (11));

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
});})(c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25311__auto__,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____1 = (function (state_32815){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e32901){if((e32901 instanceof Object)){
var ex__25315__auto__ = e32901;
var statearr_32902_32962 = state_32815;
(statearr_32902_32962[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32963 = state_32815;
state_32815 = G__32963;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25400__auto__ = (function (){var statearr_32903 = f__25399__auto__.call(null);
(statearr_32903[(6)] = c__25398__auto__);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__,map__32660,map__32660__$1,opts,before_jsload,on_jsload,reload_dependents,map__32661,map__32661__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32966,link){
var map__32967 = p__32966;
var map__32967__$1 = ((((!((map__32967 == null)))?(((((map__32967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32967):map__32967);
var file = cljs.core.get.call(null,map__32967__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__32967,map__32967__$1,file){
return (function (p1__32964_SHARP_,p2__32965_SHARP_){
if(cljs.core._EQ_.call(null,p1__32964_SHARP_,p2__32965_SHARP_)){
return p1__32964_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__32967,map__32967__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32970){
var map__32971 = p__32970;
var map__32971__$1 = ((((!((map__32971 == null)))?(((((map__32971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32971):map__32971);
var match_length = cljs.core.get.call(null,map__32971__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32971__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32969_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32969_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32973_SHARP_,p2__32974_SHARP_){
return cljs.core.assoc.call(null,p1__32973_SHARP_,cljs.core.get.call(null,p2__32974_SHARP_,key),p2__32974_SHARP_);
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
var loaded_f_datas_32975 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32975);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32975);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32976,p__32977){
var map__32978 = p__32976;
var map__32978__$1 = ((((!((map__32978 == null)))?(((((map__32978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32978):map__32978);
var on_cssload = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32979 = p__32977;
var map__32979__$1 = ((((!((map__32979 == null)))?(((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var files_msg = map__32979__$1;
var files = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525651799521
