// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.listen');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_audiocapture.core');
squiggle.listen.audio = (function squiggle$listen$audio(){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__){
return (function (state_48316){
var state_val_48317 = (state_48316[(1)]);
if((state_val_48317 === (7))){
var state_48316__$1 = state_48316;
var statearr_48318_48349 = state_48316__$1;
(statearr_48318_48349[(2)] = false);

(statearr_48318_48349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (20))){
var inst_48310 = (state_48316[(2)]);
var state_48316__$1 = state_48316;
var statearr_48319_48350 = state_48316__$1;
(statearr_48319_48350[(2)] = inst_48310);

(statearr_48319_48350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (1))){
var inst_48267 = cljs.core.async.sliding_buffer.call(null,(10));
var inst_48268 = cljs_audiocapture.core.capture_audio.call(null,inst_48267);
var state_48316__$1 = state_48316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48316__$1,(2),inst_48268);
} else {
if((state_val_48317 === (4))){
var state_48316__$1 = state_48316;
var statearr_48320_48351 = state_48316__$1;
(statearr_48320_48351[(2)] = false);

(statearr_48320_48351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (15))){
var inst_48292 = (state_48316[(7)]);
var state_48316__$1 = state_48316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48316__$1,(17),inst_48292);
} else {
if((state_val_48317 === (13))){
var inst_48292 = (state_48316[(7)]);
var inst_48297 = cljs.core.async.put_BANG_.call(null,inst_48292,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_48298 = (4);
var state_48316__$1 = (function (){var statearr_48321 = state_48316;
(statearr_48321[(8)] = inst_48297);

(statearr_48321[(9)] = inst_48298);

return statearr_48321;
})();
var statearr_48322_48352 = state_48316__$1;
(statearr_48322_48352[(2)] = null);

(statearr_48322_48352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (6))){
var state_48316__$1 = state_48316;
var statearr_48323_48353 = state_48316__$1;
(statearr_48323_48353[(2)] = true);

(statearr_48323_48353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (17))){
var inst_48298 = (state_48316[(9)]);
var inst_48301 = (state_48316[(2)]);
var inst_48302 = console.log(inst_48301);
var inst_48303 = (inst_48298 === (0));
var state_48316__$1 = (function (){var statearr_48324 = state_48316;
(statearr_48324[(10)] = inst_48302);

return statearr_48324;
})();
if(cljs.core.truth_(inst_48303)){
var statearr_48325_48354 = state_48316__$1;
(statearr_48325_48354[(1)] = (18));

} else {
var statearr_48326_48355 = state_48316__$1;
(statearr_48326_48355[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (3))){
var inst_48270 = (state_48316[(11)]);
var inst_48275 = inst_48270.cljs$lang$protocol_mask$partition0$;
var inst_48276 = (inst_48275 & (64));
var inst_48277 = inst_48270.cljs$core$ISeq$;
var inst_48278 = (cljs.core.PROTOCOL_SENTINEL === inst_48277);
var inst_48279 = ((inst_48276) || (inst_48278));
var state_48316__$1 = state_48316;
if(cljs.core.truth_(inst_48279)){
var statearr_48327_48356 = state_48316__$1;
(statearr_48327_48356[(1)] = (6));

} else {
var statearr_48328_48357 = state_48316__$1;
(statearr_48328_48357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (12))){
var inst_48293 = (state_48316[(12)]);
var inst_48295 = console.error(inst_48293);
var state_48316__$1 = state_48316;
var statearr_48329_48358 = state_48316__$1;
(statearr_48329_48358[(2)] = inst_48295);

(statearr_48329_48358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (2))){
var inst_48270 = (state_48316[(11)]);
var inst_48270__$1 = (state_48316[(2)]);
var inst_48272 = (inst_48270__$1 == null);
var inst_48273 = cljs.core.not.call(null,inst_48272);
var state_48316__$1 = (function (){var statearr_48330 = state_48316;
(statearr_48330[(11)] = inst_48270__$1);

return statearr_48330;
})();
if(inst_48273){
var statearr_48331_48359 = state_48316__$1;
(statearr_48331_48359[(1)] = (3));

} else {
var statearr_48332_48360 = state_48316__$1;
(statearr_48332_48360[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (19))){
var inst_48298 = (state_48316[(9)]);
var inst_48307 = (inst_48298 - (1));
var inst_48298__$1 = inst_48307;
var state_48316__$1 = (function (){var statearr_48333 = state_48316;
(statearr_48333[(9)] = inst_48298__$1);

return statearr_48333;
})();
var statearr_48334_48361 = state_48316__$1;
(statearr_48334_48361[(2)] = null);

(statearr_48334_48361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (11))){
var inst_48293 = (state_48316[(12)]);
var inst_48291 = (state_48316[(2)]);
var inst_48292 = cljs.core.get.call(null,inst_48291,new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416));
var inst_48293__$1 = cljs.core.get.call(null,inst_48291,new cljs.core.Keyword(null,"error","error",-978969032));
var state_48316__$1 = (function (){var statearr_48335 = state_48316;
(statearr_48335[(7)] = inst_48292);

(statearr_48335[(12)] = inst_48293__$1);

return statearr_48335;
})();
if(cljs.core.truth_(inst_48293__$1)){
var statearr_48336_48362 = state_48316__$1;
(statearr_48336_48362[(1)] = (12));

} else {
var statearr_48337_48363 = state_48316__$1;
(statearr_48337_48363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (9))){
var inst_48270 = (state_48316[(11)]);
var inst_48288 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48270);
var state_48316__$1 = state_48316;
var statearr_48338_48364 = state_48316__$1;
(statearr_48338_48364[(2)] = inst_48288);

(statearr_48338_48364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (5))){
var inst_48286 = (state_48316[(2)]);
var state_48316__$1 = state_48316;
if(cljs.core.truth_(inst_48286)){
var statearr_48339_48365 = state_48316__$1;
(statearr_48339_48365[(1)] = (9));

} else {
var statearr_48340_48366 = state_48316__$1;
(statearr_48340_48366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (14))){
var inst_48314 = (state_48316[(2)]);
var state_48316__$1 = state_48316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48316__$1,inst_48314);
} else {
if((state_val_48317 === (16))){
var inst_48312 = (state_48316[(2)]);
var state_48316__$1 = state_48316;
var statearr_48341_48367 = state_48316__$1;
(statearr_48341_48367[(2)] = inst_48312);

(statearr_48341_48367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (10))){
var inst_48270 = (state_48316[(11)]);
var state_48316__$1 = state_48316;
var statearr_48342_48368 = state_48316__$1;
(statearr_48342_48368[(2)] = inst_48270);

(statearr_48342_48368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (18))){
var inst_48292 = (state_48316[(7)]);
var inst_48305 = cljs.core.async.put_BANG_.call(null,inst_48292,new cljs.core.Keyword(null,"pause","pause",-2095325672));
var state_48316__$1 = state_48316;
var statearr_48343_48369 = state_48316__$1;
(statearr_48343_48369[(2)] = inst_48305);

(statearr_48343_48369[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48317 === (8))){
var inst_48283 = (state_48316[(2)]);
var state_48316__$1 = state_48316;
var statearr_48344_48370 = state_48316__$1;
(statearr_48344_48370[(2)] = inst_48283);

(statearr_48344_48370[(1)] = (5));


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
});})(c__28412__auto__))
;
return ((function (switch__28389__auto__,c__28412__auto__){
return (function() {
var squiggle$listen$audio_$_state_machine__28390__auto__ = null;
var squiggle$listen$audio_$_state_machine__28390__auto____0 = (function (){
var statearr_48345 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48345[(0)] = squiggle$listen$audio_$_state_machine__28390__auto__);

(statearr_48345[(1)] = (1));

return statearr_48345;
});
var squiggle$listen$audio_$_state_machine__28390__auto____1 = (function (state_48316){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_48316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e48346){if((e48346 instanceof Object)){
var ex__28393__auto__ = e48346;
var statearr_48347_48371 = state_48316;
(statearr_48347_48371[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48372 = state_48316;
state_48316 = G__48372;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
squiggle$listen$audio_$_state_machine__28390__auto__ = function(state_48316){
switch(arguments.length){
case 0:
return squiggle$listen$audio_$_state_machine__28390__auto____0.call(this);
case 1:
return squiggle$listen$audio_$_state_machine__28390__auto____1.call(this,state_48316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = squiggle$listen$audio_$_state_machine__28390__auto____0;
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = squiggle$listen$audio_$_state_machine__28390__auto____1;
return squiggle$listen$audio_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_48348 = f__28413__auto__.call(null);
(statearr_48348[(6)] = c__28412__auto__);

return statearr_48348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});

//# sourceMappingURL=listen.js.map?rel=1527209156256
