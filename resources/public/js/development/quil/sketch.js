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
var G__1408 = arguments.length;
switch (G__1408) {
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
var seq__1410 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__1411 = null;
var count__1412 = (0);
var i__1413 = (0);
while(true){
if((i__1413 < count__1412)){
var vec__1414 = cljs.core._nth.call(null,chunk__1411,i__1413);
var processing_name = cljs.core.nth.call(null,vec__1414,(0),null);
var quil_name = cljs.core.nth.call(null,vec__1414,(1),null);
var temp__5457__auto___1422 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___1422)){
var handler_1423 = temp__5457__auto___1422;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__1410,chunk__1411,count__1412,i__1413,handler_1423,temp__5457__auto___1422,vec__1414,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_1417 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_1423.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_1417;
}});})(seq__1410,chunk__1411,count__1412,i__1413,handler_1423,temp__5457__auto___1422,vec__1414,processing_name,quil_name))
);
} else {
}


var G__1424 = seq__1410;
var G__1425 = chunk__1411;
var G__1426 = count__1412;
var G__1427 = (i__1413 + (1));
seq__1410 = G__1424;
chunk__1411 = G__1425;
count__1412 = G__1426;
i__1413 = G__1427;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__1410);
if(temp__5457__auto__){
var seq__1410__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1410__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__1410__$1);
var G__1428 = cljs.core.chunk_rest.call(null,seq__1410__$1);
var G__1429 = c__4319__auto__;
var G__1430 = cljs.core.count.call(null,c__4319__auto__);
var G__1431 = (0);
seq__1410 = G__1428;
chunk__1411 = G__1429;
count__1412 = G__1430;
i__1413 = G__1431;
continue;
} else {
var vec__1418 = cljs.core.first.call(null,seq__1410__$1);
var processing_name = cljs.core.nth.call(null,vec__1418,(0),null);
var quil_name = cljs.core.nth.call(null,vec__1418,(1),null);
var temp__5457__auto___1432__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___1432__$1)){
var handler_1433 = temp__5457__auto___1432__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__1410,chunk__1411,count__1412,i__1413,handler_1433,temp__5457__auto___1432__$1,vec__1418,processing_name,quil_name,seq__1410__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_1421 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_1433.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_1421;
}});})(seq__1410,chunk__1411,count__1412,i__1413,handler_1433,temp__5457__auto___1432__$1,vec__1418,processing_name,quil_name,seq__1410__$1,temp__5457__auto__))
);
} else {
}


var G__1434 = cljs.core.next.call(null,seq__1410__$1);
var G__1435 = null;
var G__1436 = (0);
var G__1437 = (0);
seq__1410 = G__1434;
chunk__1411 = G__1435;
count__1412 = G__1436;
i__1413 = G__1437;
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
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__1438_SHARP_){
return p1__1438_SHARP_.call(null,options);
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
var len__4499__auto___1440 = arguments.length;
var i__4500__auto___1441 = (0);
while(true){
if((i__4500__auto___1441 < len__4499__auto___1440)){
args__4502__auto__.push((arguments[i__4500__auto___1441]));

var G__1442 = (i__4500__auto___1441 + (1));
i__4500__auto___1441 = G__1442;
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
quil.sketch.sketch.cljs$lang$applyTo = (function (seq1439){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1439));
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
var add_elem_QMARK__1447 = quil.sketch.empty_body_QMARK_.call(null);
var seq__1443_1448 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__1444_1449 = null;
var count__1445_1450 = (0);
var i__1446_1451 = (0);
while(true){
if((i__1446_1451 < count__1445_1450)){
var sk_1452 = cljs.core._nth.call(null,chunk__1444_1449,i__1446_1451);
if(cljs.core.truth_(add_elem_QMARK__1447)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_1452));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_1452).call(null);


var G__1453 = seq__1443_1448;
var G__1454 = chunk__1444_1449;
var G__1455 = count__1445_1450;
var G__1456 = (i__1446_1451 + (1));
seq__1443_1448 = G__1453;
chunk__1444_1449 = G__1454;
count__1445_1450 = G__1455;
i__1446_1451 = G__1456;
continue;
} else {
var temp__5457__auto___1457 = cljs.core.seq.call(null,seq__1443_1448);
if(temp__5457__auto___1457){
var seq__1443_1458__$1 = temp__5457__auto___1457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1443_1458__$1)){
var c__4319__auto___1459 = cljs.core.chunk_first.call(null,seq__1443_1458__$1);
var G__1460 = cljs.core.chunk_rest.call(null,seq__1443_1458__$1);
var G__1461 = c__4319__auto___1459;
var G__1462 = cljs.core.count.call(null,c__4319__auto___1459);
var G__1463 = (0);
seq__1443_1448 = G__1460;
chunk__1444_1449 = G__1461;
count__1445_1450 = G__1462;
i__1446_1451 = G__1463;
continue;
} else {
var sk_1464 = cljs.core.first.call(null,seq__1443_1458__$1);
if(cljs.core.truth_(add_elem_QMARK__1447)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_1464));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_1464).call(null);


var G__1465 = cljs.core.next.call(null,seq__1443_1458__$1);
var G__1466 = null;
var G__1467 = (0);
var G__1468 = (0);
seq__1443_1448 = G__1465;
chunk__1444_1449 = G__1466;
count__1445_1450 = G__1467;
i__1446_1451 = G__1468;
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

//# sourceMappingURL=sketch.js.map
