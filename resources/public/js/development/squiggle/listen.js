// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.listen');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_audiocapture.core');
squiggle.listen.audio = (function squiggle$listen$audio(){
var c__34686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34686__auto__){
return (function (){
var f__34687__auto__ = (function (){var switch__34663__auto__ = ((function (c__34686__auto__){
return (function (state_40403){
var state_val_40404 = (state_40403[(1)]);
if((state_val_40404 === (7))){
var state_40403__$1 = state_40403;
var statearr_40405_40430 = state_40403__$1;
(statearr_40405_40430[(2)] = false);

(statearr_40405_40430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (1))){
var inst_40365 = cljs.core.async.sliding_buffer.call(null,(10));
var inst_40366 = cljs_audiocapture.core.capture_audio.call(null,inst_40365);
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40403__$1,(2),inst_40366);
} else {
if((state_val_40404 === (4))){
var state_40403__$1 = state_40403;
var statearr_40406_40431 = state_40403__$1;
(statearr_40406_40431[(2)] = false);

(statearr_40406_40431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (15))){
var state_40403__$1 = state_40403;
var statearr_40407_40432 = state_40403__$1;
(statearr_40407_40432[(2)] = null);

(statearr_40407_40432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (13))){
var inst_40390 = (state_40403[(7)]);
var inst_40395 = cljs.core.async.put_BANG_.call(null,inst_40390,new cljs.core.Keyword(null,"start","start",-355208981));
var state_40403__$1 = (function (){var statearr_40408 = state_40403;
(statearr_40408[(8)] = inst_40395);

return statearr_40408;
})();
var statearr_40409_40433 = state_40403__$1;
(statearr_40409_40433[(2)] = null);

(statearr_40409_40433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (6))){
var state_40403__$1 = state_40403;
var statearr_40410_40434 = state_40403__$1;
(statearr_40410_40434[(2)] = true);

(statearr_40410_40434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (3))){
var inst_40368 = (state_40403[(9)]);
var inst_40373 = inst_40368.cljs$lang$protocol_mask$partition0$;
var inst_40374 = (inst_40373 & (64));
var inst_40375 = inst_40368.cljs$core$ISeq$;
var inst_40376 = (cljs.core.PROTOCOL_SENTINEL === inst_40375);
var inst_40377 = ((inst_40374) || (inst_40376));
var state_40403__$1 = state_40403;
if(cljs.core.truth_(inst_40377)){
var statearr_40411_40435 = state_40403__$1;
(statearr_40411_40435[(1)] = (6));

} else {
var statearr_40412_40436 = state_40403__$1;
(statearr_40412_40436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (12))){
var inst_40391 = (state_40403[(10)]);
var inst_40393 = console.error(inst_40391);
var state_40403__$1 = state_40403;
var statearr_40413_40437 = state_40403__$1;
(statearr_40413_40437[(2)] = inst_40393);

(statearr_40413_40437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (2))){
var inst_40368 = (state_40403[(9)]);
var inst_40368__$1 = (state_40403[(2)]);
var inst_40370 = (inst_40368__$1 == null);
var inst_40371 = cljs.core.not.call(null,inst_40370);
var state_40403__$1 = (function (){var statearr_40414 = state_40403;
(statearr_40414[(9)] = inst_40368__$1);

return statearr_40414;
})();
if(inst_40371){
var statearr_40415_40438 = state_40403__$1;
(statearr_40415_40438[(1)] = (3));

} else {
var statearr_40416_40439 = state_40403__$1;
(statearr_40416_40439[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (11))){
var inst_40391 = (state_40403[(10)]);
var inst_40389 = (state_40403[(2)]);
var inst_40390 = cljs.core.get.call(null,inst_40389,new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416));
var inst_40391__$1 = cljs.core.get.call(null,inst_40389,new cljs.core.Keyword(null,"error","error",-978969032));
var state_40403__$1 = (function (){var statearr_40417 = state_40403;
(statearr_40417[(7)] = inst_40390);

(statearr_40417[(10)] = inst_40391__$1);

return statearr_40417;
})();
if(cljs.core.truth_(inst_40391__$1)){
var statearr_40418_40440 = state_40403__$1;
(statearr_40418_40440[(1)] = (12));

} else {
var statearr_40419_40441 = state_40403__$1;
(statearr_40419_40441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (9))){
var inst_40368 = (state_40403[(9)]);
var inst_40386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40368);
var state_40403__$1 = state_40403;
var statearr_40420_40442 = state_40403__$1;
(statearr_40420_40442[(2)] = inst_40386);

(statearr_40420_40442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (5))){
var inst_40384 = (state_40403[(2)]);
var state_40403__$1 = state_40403;
if(cljs.core.truth_(inst_40384)){
var statearr_40421_40443 = state_40403__$1;
(statearr_40421_40443[(1)] = (9));

} else {
var statearr_40422_40444 = state_40403__$1;
(statearr_40422_40444[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (14))){
var inst_40401 = (state_40403[(2)]);
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40403__$1,inst_40401);
} else {
if((state_val_40404 === (16))){
var inst_40399 = (state_40403[(2)]);
var state_40403__$1 = state_40403;
var statearr_40423_40445 = state_40403__$1;
(statearr_40423_40445[(2)] = inst_40399);

(statearr_40423_40445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (10))){
var inst_40368 = (state_40403[(9)]);
var state_40403__$1 = state_40403;
var statearr_40424_40446 = state_40403__$1;
(statearr_40424_40446[(2)] = inst_40368);

(statearr_40424_40446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40404 === (8))){
var inst_40381 = (state_40403[(2)]);
var state_40403__$1 = state_40403;
var statearr_40425_40447 = state_40403__$1;
(statearr_40425_40447[(2)] = inst_40381);

(statearr_40425_40447[(1)] = (5));


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
});})(c__34686__auto__))
;
return ((function (switch__34663__auto__,c__34686__auto__){
return (function() {
var squiggle$listen$audio_$_state_machine__34664__auto__ = null;
var squiggle$listen$audio_$_state_machine__34664__auto____0 = (function (){
var statearr_40426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40426[(0)] = squiggle$listen$audio_$_state_machine__34664__auto__);

(statearr_40426[(1)] = (1));

return statearr_40426;
});
var squiggle$listen$audio_$_state_machine__34664__auto____1 = (function (state_40403){
while(true){
var ret_value__34665__auto__ = (function (){try{while(true){
var result__34666__auto__ = switch__34663__auto__.call(null,state_40403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34666__auto__;
}
break;
}
}catch (e40427){if((e40427 instanceof Object)){
var ex__34667__auto__ = e40427;
var statearr_40428_40448 = state_40403;
(statearr_40428_40448[(5)] = ex__34667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40449 = state_40403;
state_40403 = G__40449;
continue;
} else {
return ret_value__34665__auto__;
}
break;
}
});
squiggle$listen$audio_$_state_machine__34664__auto__ = function(state_40403){
switch(arguments.length){
case 0:
return squiggle$listen$audio_$_state_machine__34664__auto____0.call(this);
case 1:
return squiggle$listen$audio_$_state_machine__34664__auto____1.call(this,state_40403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
squiggle$listen$audio_$_state_machine__34664__auto__.cljs$core$IFn$_invoke$arity$0 = squiggle$listen$audio_$_state_machine__34664__auto____0;
squiggle$listen$audio_$_state_machine__34664__auto__.cljs$core$IFn$_invoke$arity$1 = squiggle$listen$audio_$_state_machine__34664__auto____1;
return squiggle$listen$audio_$_state_machine__34664__auto__;
})()
;})(switch__34663__auto__,c__34686__auto__))
})();
var state__34688__auto__ = (function (){var statearr_40429 = f__34687__auto__.call(null);
(statearr_40429[(6)] = c__34686__auto__);

return statearr_40429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34688__auto__);
});})(c__34686__auto__))
);

return c__34686__auto__;
});

//# sourceMappingURL=listen.js.map?rel=1527279058149
