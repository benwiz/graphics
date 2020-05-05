// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_audiocapture.core');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
cljs_audiocapture.core._STAR_AUDIO_FORMAT_STAR_ = "audio/x-pcm;bit=16;rate=44100";
cljs_audiocapture.core._STAR_FRAME_SIZE_STAR_ = (4096);
cljs_audiocapture.core.SAMPLE_RATE = (44100);
/**
 * Constructs bidirectional channel
 */
cljs_audiocapture.core.bidirectional = (function cljs_audiocapture$core$bidirectional(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28502 = arguments.length;
var i__4500__auto___28503 = (0);
while(true){
if((i__4500__auto___28503 < len__4499__auto___28502)){
args__4502__auto__.push((arguments[i__4500__auto___28503]));

var G__28504 = (i__4500__auto___28503 + (1));
i__4500__auto___28503 = G__28504;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_audiocapture.core.bidirectional.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_audiocapture.core.bidirectional.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__28493){
var vec__28494 = p__28493;
var map__28497 = cljs.core.nth.call(null,vec__28494,(0),null);
var map__28497__$1 = ((((!((map__28497 == null)))?(((((map__28497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28497):map__28497);
var on_close = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof cljs_audiocapture.core.t_cljs_audiocapture$core28499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_audiocapture.core.t_cljs_audiocapture$core28499 = (function (read_ch,write_ch,p__28493,vec__28494,map__28497,on_close,meta28500){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__28493 = p__28493;
this.vec__28494 = vec__28494;
this.map__28497 = map__28497;
this.on_close = on_close;
this.meta28500 = meta28500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (_28501,meta28500__$1){
var self__ = this;
var _28501__$1 = this;
return (new cljs_audiocapture.core.t_cljs_audiocapture$core28499(self__.read_ch,self__.write_ch,self__.p__28493,self__.vec__28494,self__.map__28497,self__.on_close,meta28500__$1));
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (_28501){
var self__ = this;
var _28501__$1 = this;
return self__.meta28500;
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.getBasis = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__28493","p__28493",-2103801614,null),new cljs.core.Symbol(null,"vec__28494","vec__28494",-1339714577,null),new cljs.core.Symbol(null,"map__28497","map__28497",2013216679,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta28500","meta28500",1271158273,null)], null);
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.cljs$lang$type = true;

cljs_audiocapture.core.t_cljs_audiocapture$core28499.cljs$lang$ctorStr = "cljs-audiocapture.core/t_cljs_audiocapture$core28499";

cljs_audiocapture.core.t_cljs_audiocapture$core28499.cljs$lang$ctorPrWriter = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs-audiocapture.core/t_cljs_audiocapture$core28499");
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

/**
 * Positional factory function for cljs-audiocapture.core/t_cljs_audiocapture$core28499.
 */
cljs_audiocapture.core.__GT_t_cljs_audiocapture$core28499 = ((function (vec__28494,map__28497,map__28497__$1,on_close){
return (function cljs_audiocapture$core$__GT_t_cljs_audiocapture$core28499(read_ch__$1,write_ch__$1,p__28493__$1,vec__28494__$1,map__28497__$2,on_close__$1,meta28500){
return (new cljs_audiocapture.core.t_cljs_audiocapture$core28499(read_ch__$1,write_ch__$1,p__28493__$1,vec__28494__$1,map__28497__$2,on_close__$1,meta28500));
});})(vec__28494,map__28497,map__28497__$1,on_close))
;

}

return (new cljs_audiocapture.core.t_cljs_audiocapture$core28499(read_ch,write_ch,p__28493,vec__28494,map__28497__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

cljs_audiocapture.core.bidirectional.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_audiocapture.core.bidirectional.cljs$lang$applyTo = (function (seq28490){
var G__28491 = cljs.core.first.call(null,seq28490);
var seq28490__$1 = cljs.core.next.call(null,seq28490);
var G__28492 = cljs.core.first.call(null,seq28490__$1);
var seq28490__$2 = cljs.core.next.call(null,seq28490__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28491,G__28492,seq28490__$2);
});

/**
 * Encode seq of chunks to (downloadable) .wav BLOB
 */
cljs_audiocapture.core.pcm_frames__GT_wav = (function cljs_audiocapture$core$pcm_frames__GT_wav(chunks){
var pcm_size = cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__28505_SHARP_){
return p1__28505_SHARP_.byteLength;
})),cljs.core._PLUS_,chunks);
var pcm_data = (new ArrayBuffer(((44) + pcm_size)));
var view = (new DataView(pcm_data));
var int_view = (new Int16Array(pcm_data));
view.setUint32((0),(1380533830));

view.setUint32((4),((32) + pcm_size));

view.setUint32((8),(1463899717));

view.setUint32((12),(1718449184));

view.setUint32((16),(16),true);

view.setUint16((20),(1),true);

view.setUint16((22),(1),true);

view.setUint32((24),cljs_audiocapture.core.SAMPLE_RATE,true);

view.setUint32((28),((2) * cljs_audiocapture.core.SAMPLE_RATE),true);

view.setUint16((32),(2),true);

view.setUint16((34),(16),true);

view.setUint32((36),(1684108385));

view.setUint32((40),pcm_size,true);

var offset_28506 = (22);
var chunks_28507__$1 = chunks;
while(true){
var temp__5457__auto___28508 = cljs.core.seq.call(null,chunks_28507__$1);
if(temp__5457__auto___28508){
var xs__6012__auto___28509 = temp__5457__auto___28508;
var chunk_28510 = cljs.core.first.call(null,xs__6012__auto___28509);
int_view.set(chunk_28510,offset_28506);

var G__28511 = (offset_28506 + chunk_28510.length);
var G__28512 = cljs.core.rest.call(null,chunks_28507__$1);
offset_28506 = G__28511;
chunks_28507__$1 = G__28512;
continue;
} else {
}
break;
}

return (new Blob((new Array(pcm_data)),({"type": "audio/x-wav"})));
});
/**
 * Converts frame from AudioContext to PCM
 */
cljs_audiocapture.core.convert = (function cljs_audiocapture$core$convert(frame){
var pcm_data = (new Int16Array(frame.length));
var seq__28513_28517 = cljs.core.seq.call(null,cljs.core.range.call(null,frame.length));
var chunk__28514_28518 = null;
var count__28515_28519 = (0);
var i__28516_28520 = (0);
while(true){
if((i__28516_28520 < count__28515_28519)){
var i_28521 = cljs.core._nth.call(null,chunk__28514_28518,i__28516_28520);
(pcm_data[i_28521] = ((function (){var x__4009__auto__ = (function (){var x__4006__auto__ = (frame[i_28521]);
var y__4007__auto__ = (-1);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var y__4010__auto__ = (1);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() * (32767)));


var G__28522 = seq__28513_28517;
var G__28523 = chunk__28514_28518;
var G__28524 = count__28515_28519;
var G__28525 = (i__28516_28520 + (1));
seq__28513_28517 = G__28522;
chunk__28514_28518 = G__28523;
count__28515_28519 = G__28524;
i__28516_28520 = G__28525;
continue;
} else {
var temp__5457__auto___28526 = cljs.core.seq.call(null,seq__28513_28517);
if(temp__5457__auto___28526){
var seq__28513_28527__$1 = temp__5457__auto___28526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28513_28527__$1)){
var c__4319__auto___28528 = cljs.core.chunk_first.call(null,seq__28513_28527__$1);
var G__28529 = cljs.core.chunk_rest.call(null,seq__28513_28527__$1);
var G__28530 = c__4319__auto___28528;
var G__28531 = cljs.core.count.call(null,c__4319__auto___28528);
var G__28532 = (0);
seq__28513_28517 = G__28529;
chunk__28514_28518 = G__28530;
count__28515_28519 = G__28531;
i__28516_28520 = G__28532;
continue;
} else {
var i_28533 = cljs.core.first.call(null,seq__28513_28527__$1);
(pcm_data[i_28533] = ((function (){var x__4009__auto__ = (function (){var x__4006__auto__ = (frame[i_28533]);
var y__4007__auto__ = (-1);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var y__4010__auto__ = (1);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() * (32767)));


var G__28534 = cljs.core.next.call(null,seq__28513_28527__$1);
var G__28535 = null;
var G__28536 = (0);
var G__28537 = (0);
seq__28513_28517 = G__28534;
chunk__28514_28518 = G__28535;
count__28515_28519 = G__28536;
i__28516_28520 = G__28537;
continue;
}
} else {
}
}
break;
}

return pcm_data;
});
cljs_audiocapture.core.capture_audio_flash = (function cljs_audiocapture$core$capture_audio_flash(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28586 = arguments.length;
var i__4500__auto___28587 = (0);
while(true){
if((i__4500__auto___28587 < len__4499__auto___28586)){
args__4502__auto__.push((arguments[i__4500__auto___28587]));

var G__28588 = (i__4500__auto___28587 + (1));
i__4500__auto___28587 = G__28588;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_audiocapture.core.capture_audio_flash.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_audiocapture.core.capture_audio_flash.cljs$core$IFn$_invoke$arity$variadic = (function (p__28539){
var vec__28540 = p__28539;
var buffer = cljs.core.nth.call(null,vec__28540,(0),null);
var swf_uri = cljs.core.nth.call(null,vec__28540,(1),null);
var wait_chan = cljs.core.async.chan.call(null);
var commands_chan = cljs.core.async.chan.call(null);
var frames_chan = cljs.core.async.chan.call(null,buffer);
var audio_chan = cljs_audiocapture.core.bidirectional.call(null,frames_chan,commands_chan);
var samples_handler_fn_name = cljs.core.gensym.call(null,"cljs_audiocapture_ok__");
var fail_fn_name = cljs.core.gensym.call(null,"cljs_audiocapture_fail__");
var push = ((function (wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,vec__28540,buffer,swf_uri){
return (function (data){
return cljs.core.async.put_BANG_.call(null,frames_chan,cljs_audiocapture.core.convert.call(null,data));
});})(wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,vec__28540,buffer,swf_uri))
;
var drop = ((function (wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,vec__28540,buffer,swf_uri){
return (function (data){
return null;
});})(wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,vec__28540,buffer,swf_uri))
;
var connect_input = ((function (wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri){
return (function (obj){
cljs.core.async.put_BANG_.call(null,wait_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416),audio_chan,new cljs.core.Keyword(null,"error","error",-978969032),null], null));

cljs.core.async.close_BANG_.call(null,wait_chan);

var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri){
return (function (state_28568){
var state_val_28569 = (state_28568[(1)]);
if((state_val_28569 === (7))){
var inst_28563 = (state_28568[(2)]);
var state_28568__$1 = (function (){var statearr_28570 = state_28568;
(statearr_28570[(7)] = inst_28563);

return statearr_28570;
})();
var statearr_28571_28589 = state_28568__$1;
(statearr_28571_28589[(2)] = null);

(statearr_28571_28589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (1))){
var state_28568__$1 = state_28568;
var statearr_28572_28590 = state_28568__$1;
(statearr_28572_28590[(2)] = null);

(statearr_28572_28590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (4))){
var inst_28545 = (state_28568[(8)]);
var inst_28545__$1 = (state_28568[(2)]);
var inst_28549 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",-355208981),inst_28545__$1);
var state_28568__$1 = (function (){var statearr_28573 = state_28568;
(statearr_28573[(8)] = inst_28545__$1);

return statearr_28573;
})();
if(inst_28549){
var statearr_28574_28591 = state_28568__$1;
(statearr_28574_28591[(1)] = (5));

} else {
var statearr_28575_28592 = state_28568__$1;
(statearr_28575_28592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (6))){
var inst_28545 = (state_28568[(8)]);
var inst_28553 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),inst_28545);
var state_28568__$1 = state_28568;
if(inst_28553){
var statearr_28576_28593 = state_28568__$1;
(statearr_28576_28593[(1)] = (8));

} else {
var statearr_28577_28594 = state_28568__$1;
(statearr_28577_28594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (3))){
var inst_28566 = (state_28568[(2)]);
var state_28568__$1 = state_28568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28568__$1,inst_28566);
} else {
if((state_val_28569 === (2))){
var state_28568__$1 = state_28568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28568__$1,(4),commands_chan);
} else {
if((state_val_28569 === (9))){
var inst_28545 = (state_28568[(8)]);
var inst_28557 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28545)].join('');
var inst_28558 = (new Error(inst_28557));
var inst_28559 = (function(){throw inst_28558})();
var state_28568__$1 = state_28568;
var statearr_28578_28595 = state_28568__$1;
(statearr_28578_28595[(2)] = inst_28559);

(statearr_28578_28595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (5))){
var inst_28551 = (window[samples_handler_fn_name] = push);
var state_28568__$1 = state_28568;
var statearr_28579_28596 = state_28568__$1;
(statearr_28579_28596[(2)] = inst_28551);

(statearr_28579_28596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (10))){
var inst_28561 = (state_28568[(2)]);
var state_28568__$1 = state_28568;
var statearr_28580_28597 = state_28568__$1;
(statearr_28580_28597[(2)] = inst_28561);

(statearr_28580_28597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28569 === (8))){
var inst_28555 = (window[samples_handler_fn_name] = drop);
var state_28568__$1 = state_28568;
var statearr_28581_28598 = state_28568__$1;
(statearr_28581_28598[(2)] = inst_28555);

(statearr_28581_28598[(1)] = (10));


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
});})(c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri))
;
return ((function (switch__28389__auto__,c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri){
return (function() {
var cljs_audiocapture$core$state_machine__28390__auto__ = null;
var cljs_audiocapture$core$state_machine__28390__auto____0 = (function (){
var statearr_28582 = [null,null,null,null,null,null,null,null,null];
(statearr_28582[(0)] = cljs_audiocapture$core$state_machine__28390__auto__);

(statearr_28582[(1)] = (1));

return statearr_28582;
});
var cljs_audiocapture$core$state_machine__28390__auto____1 = (function (state_28568){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_28568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e28583){if((e28583 instanceof Object)){
var ex__28393__auto__ = e28583;
var statearr_28584_28599 = state_28568;
(statearr_28584_28599[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28600 = state_28568;
state_28568 = G__28600;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
cljs_audiocapture$core$state_machine__28390__auto__ = function(state_28568){
switch(arguments.length){
case 0:
return cljs_audiocapture$core$state_machine__28390__auto____0.call(this);
case 1:
return cljs_audiocapture$core$state_machine__28390__auto____1.call(this,state_28568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_audiocapture$core$state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_audiocapture$core$state_machine__28390__auto____0;
cljs_audiocapture$core$state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_audiocapture$core$state_machine__28390__auto____1;
return cljs_audiocapture$core$state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri))
})();
var state__28414__auto__ = (function (){var statearr_28585 = f__28413__auto__.call(null);
(statearr_28585[(6)] = c__28412__auto__);

return statearr_28585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri))
);

return c__28412__auto__;
});})(wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,vec__28540,buffer,swf_uri))
;
(window[fail_fn_name] = ((function (wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,connect_input,vec__28540,buffer,swf_uri){
return (function (error){
cljs.core.async.close_BANG_.call(null,audio_chan);

cljs.core.async.put_BANG_.call(null,wait_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416),null,new cljs.core.Keyword(null,"error","error",-978969032),error], null));

return cljs.core.async.close_BANG_.call(null,wait_chan);
});})(wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,connect_input,vec__28540,buffer,swf_uri))
);

var flashvars_28601 = ({"samples": samples_handler_fn_name, "fail": fail_fn_name});
var params_28602 = ({});
var attributes_28603 = ({});
var callback_28604 = ((function (flashvars_28601,params_28602,attributes_28603,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,connect_input,vec__28540,buffer,swf_uri){
return (function (event){
var temp__5455__auto__ = event.ref;
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return connect_input.call(null,obj);
} else {
return (window[fail_fn_name]).call(null,"Flash embed failed");
}
});})(flashvars_28601,params_28602,attributes_28603,wait_chan,commands_chan,frames_chan,audio_chan,samples_handler_fn_name,fail_fn_name,push,drop,connect_input,vec__28540,buffer,swf_uri))
;
swfobject.embedSWF(swf_uri,"audiocapture-flash-fallback","215","138","10.1.0",false,flashvars_28601,params_28602,attributes_28603,callback_28604);

return wait_chan;
});

cljs_audiocapture.core.capture_audio_flash.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_audiocapture.core.capture_audio_flash.cljs$lang$applyTo = (function (seq28538){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28538));
});

cljs_audiocapture.core.capture_audio_native = (function cljs_audiocapture$core$capture_audio_native(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28656 = arguments.length;
var i__4500__auto___28657 = (0);
while(true){
if((i__4500__auto___28657 < len__4499__auto___28656)){
args__4502__auto__.push((arguments[i__4500__auto___28657]));

var G__28658 = (i__4500__auto___28657 + (1));
i__4500__auto___28657 = G__28658;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_audiocapture.core.capture_audio_native.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_audiocapture.core.capture_audio_native.cljs$core$IFn$_invoke$arity$variadic = (function (p__28606){
var vec__28607 = p__28606;
var buffer = cljs.core.nth.call(null,vec__28607,(0),null);
var wait_chan = cljs.core.async.chan.call(null);
var commands_chan = cljs.core.async.chan.call(null);
var frames_chan = cljs.core.async.chan.call(null,buffer);
var processor_avoid_gc = cljs.core.gensym.call(null,"audio_context__");
var input_avoid_gc = cljs.core.gensym.call(null,"audio_input__");
var audio_chan = cljs_audiocapture.core.bidirectional.call(null,frames_chan,commands_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,vec__28607,buffer){
return (function (){
delete window[input_avoid_gc];

return delete window[processor_avoid_gc];
});})(wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,vec__28607,buffer))
], null));
var context = ((typeof AudioContext !== 'undefined')?(new AudioContext()):((typeof webkitAudioContext !== 'undefined')?(new webkitAudioContext()):null));
var processor = context.createScriptProcessor(cljs_audiocapture.core._STAR_FRAME_SIZE_STAR_,(1),(1));
var muter = context.createGain();
(window[processor_avoid_gc] = processor);

processor.connect(muter);

(muter["gain"] = (0));

muter.connect((context["destination"]));

cljs_audiocapture.core.connect_input = ((function (wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function cljs_audiocapture$core$connect_input(stream){
var input = context.createMediaStreamSource(stream);
var data = ((function (input,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function (e){
return e.inputBuffer.getChannelData((0));
});})(input,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
;
(window[input_avoid_gc] = input);

input.connect(processor);

cljs.core.async.put_BANG_.call(null,wait_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416),audio_chan,new cljs.core.Keyword(null,"error","error",-978969032),null], null));

cljs.core.async.close_BANG_.call(null,wait_chan);

var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function (state_28637){
var state_val_28638 = (state_28637[(1)]);
if((state_val_28638 === (7))){
var inst_28632 = (state_28637[(2)]);
var state_28637__$1 = (function (){var statearr_28639 = state_28637;
(statearr_28639[(7)] = inst_28632);

return statearr_28639;
})();
var statearr_28640_28659 = state_28637__$1;
(statearr_28640_28659[(2)] = null);

(statearr_28640_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (1))){
var state_28637__$1 = state_28637;
var statearr_28641_28660 = state_28637__$1;
(statearr_28641_28660[(2)] = null);

(statearr_28641_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (4))){
var inst_28612 = (state_28637[(8)]);
var inst_28612__$1 = (state_28637[(2)]);
var inst_28616 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",-355208981),inst_28612__$1);
var state_28637__$1 = (function (){var statearr_28642 = state_28637;
(statearr_28642[(8)] = inst_28612__$1);

return statearr_28642;
})();
if(inst_28616){
var statearr_28643_28661 = state_28637__$1;
(statearr_28643_28661[(1)] = (5));

} else {
var statearr_28644_28662 = state_28637__$1;
(statearr_28644_28662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (6))){
var inst_28612 = (state_28637[(8)]);
var inst_28621 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),inst_28612);
var state_28637__$1 = state_28637;
if(inst_28621){
var statearr_28645_28663 = state_28637__$1;
(statearr_28645_28663[(1)] = (8));

} else {
var statearr_28646_28664 = state_28637__$1;
(statearr_28646_28664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (3))){
var inst_28635 = (state_28637[(2)]);
var state_28637__$1 = state_28637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28637__$1,inst_28635);
} else {
if((state_val_28638 === (2))){
var state_28637__$1 = state_28637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28637__$1,(4),commands_chan);
} else {
if((state_val_28638 === (9))){
var inst_28612 = (state_28637[(8)]);
var inst_28626 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28612)].join('');
var inst_28627 = (new Error(inst_28626));
var inst_28628 = (function(){throw inst_28627})();
var state_28637__$1 = state_28637;
var statearr_28647_28665 = state_28637__$1;
(statearr_28647_28665[(2)] = inst_28628);

(statearr_28647_28665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (5))){
var inst_28612 = (state_28637[(8)]);
var inst_28618 = (function (){var command = inst_28612;
var pred__28613 = cljs.core._EQ_;
var expr__28614 = inst_28612;
return ((function (command,pred__28613,expr__28614,inst_28612,state_val_28638,c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function (e){
return cljs.core.async.put_BANG_.call(null,frames_chan,cljs_audiocapture.core.convert.call(null,data.call(null,e)));
});
;})(command,pred__28613,expr__28614,inst_28612,state_val_28638,c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
})();
var inst_28619 = (processor["onaudioprocess"] = inst_28618);
var state_28637__$1 = state_28637;
var statearr_28648_28666 = state_28637__$1;
(statearr_28648_28666[(2)] = inst_28619);

(statearr_28648_28666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (10))){
var inst_28630 = (state_28637[(2)]);
var state_28637__$1 = state_28637;
var statearr_28649_28667 = state_28637__$1;
(statearr_28649_28667[(2)] = inst_28630);

(statearr_28649_28667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28638 === (8))){
var inst_28623 = delete window[input_avoid_gc];
var inst_28624 = (processor["onaudioprocess"] = null);
var state_28637__$1 = (function (){var statearr_28650 = state_28637;
(statearr_28650[(9)] = inst_28623);

return statearr_28650;
})();
var statearr_28651_28668 = state_28637__$1;
(statearr_28651_28668[(2)] = inst_28624);

(statearr_28651_28668[(1)] = (10));


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
});})(c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
;
return ((function (switch__28389__auto__,c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function() {
var cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__ = null;
var cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____0 = (function (){
var statearr_28652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28652[(0)] = cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__);

(statearr_28652[(1)] = (1));

return statearr_28652;
});
var cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____1 = (function (state_28637){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_28637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e28653){if((e28653 instanceof Object)){
var ex__28393__auto__ = e28653;
var statearr_28654_28669 = state_28637;
(statearr_28654_28669[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28670 = state_28637;
state_28637 = G__28670;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__ = function(state_28637){
switch(arguments.length){
case 0:
return cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____0.call(this);
case 1:
return cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____1.call(this,state_28637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____0;
cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_audiocapture$core$connect_input_$_state_machine__28390__auto____1;
return cljs_audiocapture$core$connect_input_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
})();
var state__28414__auto__ = (function (){var statearr_28655 = f__28413__auto__.call(null);
(statearr_28655[(6)] = c__28412__auto__);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,input,data,wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
);

return c__28412__auto__;
});})(wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
;

cljs_audiocapture.core.fail = ((function (wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer){
return (function cljs_audiocapture$core$fail(error){
cljs.core.async.close_BANG_.call(null,audio_chan);

cljs.core.async.put_BANG_.call(null,wait_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416),null,new cljs.core.Keyword(null,"error","error",-978969032),error], null));

return cljs.core.async.close_BANG_.call(null,wait_chan);
});})(wait_chan,commands_chan,frames_chan,processor_avoid_gc,input_avoid_gc,audio_chan,context,processor,muter,vec__28607,buffer))
;

if(typeof navigator.getUserMedia !== 'undefined'){
navigator.getUserMedia(({"audio": true}),cljs_audiocapture.core.connect_input,cljs_audiocapture.core.fail);
} else {
if(typeof navigator.webkitGetUserMedia !== 'undefined'){
navigator.webkitGetUserMedia(({"audio": true}),cljs_audiocapture.core.connect_input,cljs_audiocapture.core.fail);
} else {
if(typeof navigator.mozGetUserMedia !== 'undefined'){
navigator.mozGetUserMedia(({"audio": true}),cljs_audiocapture.core.connect_input,cljs_audiocapture.core.fail);
} else {
}
}
}

return wait_chan;
});

cljs_audiocapture.core.capture_audio_native.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_audiocapture.core.capture_audio_native.cljs$lang$applyTo = (function (seq28605){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28605));
});

/**
 * Create bidirectional channel
 * 
 *   Put :start to start or resume audio capturing
 *   Put :pause to pause capturing
 * 
 *   You can use map with keys
 *  :buffer - core.async buffer to use
 *  :swf-uri - URI to Flash fallback
 */
cljs_audiocapture.core.capture_audio = (function cljs_audiocapture$core$capture_audio(var_args){
var G__28672 = arguments.length;
switch (G__28672) {
case 0:
return cljs_audiocapture.core.capture_audio.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_audiocapture.core.capture_audio.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_audiocapture.core.capture_audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_audiocapture.core.capture_audio.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cljs_audiocapture.core.capture_audio.cljs$core$IFn$_invoke$arity$1 = (function (p__28673){
var map__28674 = p__28673;
var map__28674__$1 = ((((!((map__28674 == null)))?(((((map__28674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28674):map__28674);
var buffer = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var swf_uri = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"swf-uri","swf-uri",2018330894));
if(typeof navigator.getUserMedia !== 'undefined'){
return cljs_audiocapture.core.capture_audio_native.call(null,buffer);
} else {
if(typeof navigator.webkitGetUserMedia !== 'undefined'){
return cljs_audiocapture.core.capture_audio_native.call(null,buffer);
} else {
if(typeof navigator.mozGetUserMedia !== 'undefined'){
return cljs_audiocapture.core.capture_audio_native.call(null,buffer);
} else {
return cljs_audiocapture.core.capture_audio_flash.call(null,buffer,swf_uri);

}
}
}
});

cljs_audiocapture.core.capture_audio.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=core.js.map?rel=1527207522940
