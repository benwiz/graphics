// Compiled by ClojureScript 1.10.238 {}
goog.provide('hum.core');
goog.require('cljs.core');
hum.core.create_osc = (function hum$core$create_osc(var_args){
var G__21632 = arguments.length;
switch (G__21632) {
case 1:
return hum.core.create_osc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_osc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hum.core.create_osc.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.createOscillator();
});

hum.core.create_osc.cljs$core$IFn$_invoke$arity$2 = (function (ctx,type){
var osc = ctx.createOscillator();
var osc_type = cljs.core.name.call(null,type);
osc.type = osc_type;

return osc;
});

hum.core.create_osc.cljs$lang$maxFixedArity = 2;

hum.core.set_gain_to = (function hum$core$set_gain_to(channel,val){
return channel.gain.value = val;
});
hum.core.create_gain = (function hum$core$create_gain(var_args){
var G__21635 = arguments.length;
switch (G__21635) {
case 1:
return hum.core.create_gain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_gain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hum.core.create_gain.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return hum.core.create_gain.call(null,ctx,(0));
});

hum.core.create_gain.cljs$core$IFn$_invoke$arity$2 = (function (ctx,level){
var gain = ctx.createGain();
hum.core.set_gain_to.call(null,gain,level);

return gain;
});

hum.core.create_gain.cljs$lang$maxFixedArity = 2;

hum.core.set_buffer_to = (function hum$core$set_buffer_to(buffer_src,buffer){
return buffer_src.buffer = buffer;
});
hum.core.create_buffer_source = (function hum$core$create_buffer_source(var_args){
var G__21638 = arguments.length;
switch (G__21638) {
case 1:
return hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.createBufferSource();
});

hum.core.create_buffer_source.cljs$core$IFn$_invoke$arity$2 = (function (ctx,buffer){
var buffer_src = hum.core.create_buffer_source.call(null,ctx);
hum.core.set_buffer_to.call(null,buffer_src,buffer);

return buffer_src;
});

hum.core.create_buffer_source.cljs$lang$maxFixedArity = 2;

hum.core.create_delay = (function hum$core$create_delay(ctx){
return ctx.createDelay();
});
hum.core.create_convolver = (function hum$core$create_convolver(ctx){
return ctx.createConvolver();
});
hum.core.create_dynamics_compressor = (function hum$core$create_dynamics_compressor(ctx){
return ctx.createDynamicsCompressor();
});
hum.core.create_biquad_filter = (function hum$core$create_biquad_filter(ctx){
var filter = ctx.createBiquadFilter();
return filter;
});
hum.core.connect = (function hum$core$connect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21645 = arguments.length;
var i__4500__auto___21646 = (0);
while(true){
if((i__4500__auto___21646 < len__4499__auto___21645)){
args__4502__auto__.push((arguments[i__4500__auto___21646]));

var G__21647 = (i__4500__auto___21646 + (1));
i__4500__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return hum.core.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

hum.core.connect.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__21641){
var vec__21642 = p__21641;
var a = cljs.core.nth.call(null,vec__21642,(0),null);
var b = cljs.core.nth.call(null,vec__21642,(1),null);
return a.connect(b);
}),cljs.core.partition.call(null,(2),(1),nodes)));
});

hum.core.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hum.core.connect.cljs$lang$applyTo = (function (seq21640){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21640));
});

hum.core.ctx_for = (function hum$core$ctx_for(audio_node){
return audio_node.context;
});
hum.core.connect_output = (function hum$core$connect_output(output){
output.connect(hum.core.ctx_for.call(null,output).destination);

return output;
});
hum.core.freq = (function hum$core$freq(filter){
filter.frequency;

return filter;
});
hum.core.curr_time = (function hum$core$curr_time(ctx){
return ctx.currentTime;
});
hum.core.start_osc = (function hum$core$start_osc(osc){
return osc.start(hum.core.curr_time.call(null,hum.core.ctx_for.call(null,osc)));
});
hum.core.note_on = (function hum$core$note_on(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21655 = arguments.length;
var i__4500__auto___21656 = (0);
while(true){
if((i__4500__auto___21656 < len__4499__auto___21655)){
args__4502__auto__.push((arguments[i__4500__auto___21656]));

var G__21657 = (i__4500__auto___21656 + (1));
i__4500__auto___21656 = G__21657;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return hum.core.note_on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

hum.core.note_on.cljs$core$IFn$_invoke$arity$variadic = (function (output,osc,freq,p__21652){
var map__21653 = p__21652;
var map__21653__$1 = ((((!((map__21653 == null)))?(((((map__21653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21653):map__21653);
var time = cljs.core.get.call(null,map__21653__$1,new cljs.core.Keyword(null,"time","time",1385887882),hum.core.curr_time.call(null,hum.core.ctx_for.call(null,osc)));
var ramp_time = cljs.core.get.call(null,map__21653__$1,new cljs.core.Keyword(null,"ramp-time","ramp-time",-339037957),0.1);
osc.frequency.setValueAtTime(freq,time);

return output.gain.linearRampToValueAtTime(1.0,(time + ramp_time));
});

hum.core.note_on.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
hum.core.note_on.cljs$lang$applyTo = (function (seq21648){
var G__21649 = cljs.core.first.call(null,seq21648);
var seq21648__$1 = cljs.core.next.call(null,seq21648);
var G__21650 = cljs.core.first.call(null,seq21648__$1);
var seq21648__$2 = cljs.core.next.call(null,seq21648__$1);
var G__21651 = cljs.core.first.call(null,seq21648__$2);
var seq21648__$3 = cljs.core.next.call(null,seq21648__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21649,G__21650,G__21651,seq21648__$3);
});

hum.core.note_off = (function hum$core$note_off(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21663 = arguments.length;
var i__4500__auto___21664 = (0);
while(true){
if((i__4500__auto___21664 < len__4499__auto___21663)){
args__4502__auto__.push((arguments[i__4500__auto___21664]));

var G__21665 = (i__4500__auto___21664 + (1));
i__4500__auto___21664 = G__21665;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return hum.core.note_off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

hum.core.note_off.cljs$core$IFn$_invoke$arity$variadic = (function (output,p__21660){
var map__21661 = p__21660;
var map__21661__$1 = ((((!((map__21661 == null)))?(((((map__21661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21661):map__21661);
var time = cljs.core.get.call(null,map__21661__$1,new cljs.core.Keyword(null,"time","time",1385887882),hum.core.curr_time.call(null,hum.core.ctx_for.call(null,output)));
var ramp_time = cljs.core.get.call(null,map__21661__$1,new cljs.core.Keyword(null,"ramp-time","ramp-time",-339037957),0.1);
return output.gain.linearRampToValueAtTime(0.0,(time + ramp_time));
});

hum.core.note_off.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hum.core.note_off.cljs$lang$applyTo = (function (seq21658){
var G__21659 = cljs.core.first.call(null,seq21658);
var seq21658__$1 = cljs.core.next.call(null,seq21658);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21659,seq21658__$1);
});

hum.core.create_context = (function hum$core$create_context(){
var constructor$ = (function (){var or__3922__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new constructor$());
});

//# sourceMappingURL=core.js.map?rel=1527206772750
