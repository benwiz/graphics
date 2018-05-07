// Compiled by ClojureScript 1.10.238 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__21831 = arguments.length;
switch (G__21831) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__21833 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__21834 = null;
var count__21835 = (0);
var i__21836 = (0);
while(true){
if((i__21836 < count__21835)){
var vec__21837 = cljs.core._nth.call(null,chunk__21834,i__21836);
var processing_name = cljs.core.nth.call(null,vec__21837,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21837,(1),null);
var temp__5457__auto___21845 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___21845)){
var handler_21846 = temp__5457__auto___21845;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21833,chunk__21834,count__21835,i__21836,handler_21846,temp__5457__auto___21845,vec__21837,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_21840 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_21846.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_21840;
}});})(seq__21833,chunk__21834,count__21835,i__21836,handler_21846,temp__5457__auto___21845,vec__21837,processing_name,quil_name))
);
} else {
}


var G__21847 = seq__21833;
var G__21848 = chunk__21834;
var G__21849 = count__21835;
var G__21850 = (i__21836 + (1));
seq__21833 = G__21847;
chunk__21834 = G__21848;
count__21835 = G__21849;
i__21836 = G__21850;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21833);
if(temp__5457__auto__){
var seq__21833__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21833__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21833__$1);
var G__21851 = cljs.core.chunk_rest.call(null,seq__21833__$1);
var G__21852 = c__4319__auto__;
var G__21853 = cljs.core.count.call(null,c__4319__auto__);
var G__21854 = (0);
seq__21833 = G__21851;
chunk__21834 = G__21852;
count__21835 = G__21853;
i__21836 = G__21854;
continue;
} else {
var vec__21841 = cljs.core.first.call(null,seq__21833__$1);
var processing_name = cljs.core.nth.call(null,vec__21841,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21841,(1),null);
var temp__5457__auto___21855__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___21855__$1)){
var handler_21856 = temp__5457__auto___21855__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21833,chunk__21834,count__21835,i__21836,handler_21856,temp__5457__auto___21855__$1,vec__21841,processing_name,quil_name,seq__21833__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_21844 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_21856.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_21844;
}});})(seq__21833,chunk__21834,count__21835,i__21836,handler_21856,temp__5457__auto___21855__$1,vec__21841,processing_name,quil_name,seq__21833__$1,temp__5457__auto__))
);
} else {
}


var G__21857 = cljs.core.next.call(null,seq__21833__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__21833 = G__21857;
chunk__21834 = G__21858;
count__21835 = G__21859;
i__21836 = G__21860;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__21861_SHARP_){
return p1__21861_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21863 = arguments.length;
var i__4500__auto___21864 = (0);
while(true){
if((i__4500__auto___21864 < len__4499__auto___21863)){
args__4502__auto__.push((arguments[i__4500__auto___21864]));

var G__21865 = (i__4500__auto___21864 + (1));
i__4500__auto___21864 = G__21865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq21862){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21862));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__21870 = quil.sketch.empty_body_QMARK_.call(null);
var seq__21866_21871 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__21867_21872 = null;
var count__21868_21873 = (0);
var i__21869_21874 = (0);
while(true){
if((i__21869_21874 < count__21868_21873)){
var sk_21875 = cljs.core._nth.call(null,chunk__21867_21872,i__21869_21874);
if(cljs.core.truth_(add_elem_QMARK__21870)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21875));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21875).call(null);


var G__21876 = seq__21866_21871;
var G__21877 = chunk__21867_21872;
var G__21878 = count__21868_21873;
var G__21879 = (i__21869_21874 + (1));
seq__21866_21871 = G__21876;
chunk__21867_21872 = G__21877;
count__21868_21873 = G__21878;
i__21869_21874 = G__21879;
continue;
} else {
var temp__5457__auto___21880 = cljs.core.seq.call(null,seq__21866_21871);
if(temp__5457__auto___21880){
var seq__21866_21881__$1 = temp__5457__auto___21880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21866_21881__$1)){
var c__4319__auto___21882 = cljs.core.chunk_first.call(null,seq__21866_21881__$1);
var G__21883 = cljs.core.chunk_rest.call(null,seq__21866_21881__$1);
var G__21884 = c__4319__auto___21882;
var G__21885 = cljs.core.count.call(null,c__4319__auto___21882);
var G__21886 = (0);
seq__21866_21871 = G__21883;
chunk__21867_21872 = G__21884;
count__21868_21873 = G__21885;
i__21869_21874 = G__21886;
continue;
} else {
var sk_21887 = cljs.core.first.call(null,seq__21866_21881__$1);
if(cljs.core.truth_(add_elem_QMARK__21870)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21887));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21887).call(null);


var G__21888 = cljs.core.next.call(null,seq__21866_21881__$1);
var G__21889 = null;
var G__21890 = (0);
var G__21891 = (0);
seq__21866_21871 = G__21888;
chunk__21867_21872 = G__21889;
count__21868_21873 = G__21890;
i__21869_21874 = G__21891;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1525651787582
