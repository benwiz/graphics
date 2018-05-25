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
return (function (state_50041){
var state_val_50042 = (state_50041[(1)]);
if((state_val_50042 === (7))){
var state_50041__$1 = state_50041;
var statearr_50043_50069 = state_50041__$1;
(statearr_50043_50069[(2)] = false);

(statearr_50043_50069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (1))){
var inst_50000 = cljs.core.async.sliding_buffer.call(null,(10));
var inst_50001 = cljs_audiocapture.core.capture_audio.call(null,inst_50000);
var state_50041__$1 = state_50041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50041__$1,(2),inst_50001);
} else {
if((state_val_50042 === (4))){
var state_50041__$1 = state_50041;
var statearr_50044_50070 = state_50041__$1;
(statearr_50044_50070[(2)] = false);

(statearr_50044_50070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (15))){
var inst_50025 = (state_50041[(7)]);
var state_50041__$1 = state_50041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50041__$1,(17),inst_50025);
} else {
if((state_val_50042 === (13))){
var inst_50025 = (state_50041[(7)]);
var inst_50030 = cljs.core.async.put_BANG_.call(null,inst_50025,new cljs.core.Keyword(null,"start","start",-355208981));
var state_50041__$1 = (function (){var statearr_50045 = state_50041;
(statearr_50045[(8)] = inst_50030);

return statearr_50045;
})();
var statearr_50046_50071 = state_50041__$1;
(statearr_50046_50071[(2)] = null);

(statearr_50046_50071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (6))){
var state_50041__$1 = state_50041;
var statearr_50047_50072 = state_50041__$1;
(statearr_50047_50072[(2)] = true);

(statearr_50047_50072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (17))){
var inst_50033 = (state_50041[(2)]);
var inst_50034 = console.log(inst_50033);
var state_50041__$1 = (function (){var statearr_50048 = state_50041;
(statearr_50048[(9)] = inst_50034);

return statearr_50048;
})();
var statearr_50049_50073 = state_50041__$1;
(statearr_50049_50073[(2)] = null);

(statearr_50049_50073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (3))){
var inst_50003 = (state_50041[(10)]);
var inst_50008 = inst_50003.cljs$lang$protocol_mask$partition0$;
var inst_50009 = (inst_50008 & (64));
var inst_50010 = inst_50003.cljs$core$ISeq$;
var inst_50011 = (cljs.core.PROTOCOL_SENTINEL === inst_50010);
var inst_50012 = ((inst_50009) || (inst_50011));
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_50012)){
var statearr_50050_50074 = state_50041__$1;
(statearr_50050_50074[(1)] = (6));

} else {
var statearr_50051_50075 = state_50041__$1;
(statearr_50051_50075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (12))){
var inst_50026 = (state_50041[(11)]);
var inst_50028 = console.error(inst_50026);
var state_50041__$1 = state_50041;
var statearr_50052_50076 = state_50041__$1;
(statearr_50052_50076[(2)] = inst_50028);

(statearr_50052_50076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (2))){
var inst_50003 = (state_50041[(10)]);
var inst_50003__$1 = (state_50041[(2)]);
var inst_50005 = (inst_50003__$1 == null);
var inst_50006 = cljs.core.not.call(null,inst_50005);
var state_50041__$1 = (function (){var statearr_50053 = state_50041;
(statearr_50053[(10)] = inst_50003__$1);

return statearr_50053;
})();
if(inst_50006){
var statearr_50054_50077 = state_50041__$1;
(statearr_50054_50077[(1)] = (3));

} else {
var statearr_50055_50078 = state_50041__$1;
(statearr_50055_50078[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (11))){
var inst_50026 = (state_50041[(11)]);
var inst_50024 = (state_50041[(2)]);
var inst_50025 = cljs.core.get.call(null,inst_50024,new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416));
var inst_50026__$1 = cljs.core.get.call(null,inst_50024,new cljs.core.Keyword(null,"error","error",-978969032));
var state_50041__$1 = (function (){var statearr_50056 = state_50041;
(statearr_50056[(7)] = inst_50025);

(statearr_50056[(11)] = inst_50026__$1);

return statearr_50056;
})();
if(cljs.core.truth_(inst_50026__$1)){
var statearr_50057_50079 = state_50041__$1;
(statearr_50057_50079[(1)] = (12));

} else {
var statearr_50058_50080 = state_50041__$1;
(statearr_50058_50080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (9))){
var inst_50003 = (state_50041[(10)]);
var inst_50021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50003);
var state_50041__$1 = state_50041;
var statearr_50059_50081 = state_50041__$1;
(statearr_50059_50081[(2)] = inst_50021);

(statearr_50059_50081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (5))){
var inst_50019 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_50019)){
var statearr_50060_50082 = state_50041__$1;
(statearr_50060_50082[(1)] = (9));

} else {
var statearr_50061_50083 = state_50041__$1;
(statearr_50061_50083[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (14))){
var inst_50039 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50041__$1,inst_50039);
} else {
if((state_val_50042 === (16))){
var inst_50037 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50062_50084 = state_50041__$1;
(statearr_50062_50084[(2)] = inst_50037);

(statearr_50062_50084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (10))){
var inst_50003 = (state_50041[(10)]);
var state_50041__$1 = state_50041;
var statearr_50063_50085 = state_50041__$1;
(statearr_50063_50085[(2)] = inst_50003);

(statearr_50063_50085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (8))){
var inst_50016 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50064_50086 = state_50041__$1;
(statearr_50064_50086[(2)] = inst_50016);

(statearr_50064_50086[(1)] = (5));


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
});})(c__28412__auto__))
;
return ((function (switch__28389__auto__,c__28412__auto__){
return (function() {
var squiggle$listen$audio_$_state_machine__28390__auto__ = null;
var squiggle$listen$audio_$_state_machine__28390__auto____0 = (function (){
var statearr_50065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50065[(0)] = squiggle$listen$audio_$_state_machine__28390__auto__);

(statearr_50065[(1)] = (1));

return statearr_50065;
});
var squiggle$listen$audio_$_state_machine__28390__auto____1 = (function (state_50041){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_50041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e50066){if((e50066 instanceof Object)){
var ex__28393__auto__ = e50066;
var statearr_50067_50087 = state_50041;
(statearr_50067_50087[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50088 = state_50041;
state_50041 = G__50088;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
squiggle$listen$audio_$_state_machine__28390__auto__ = function(state_50041){
switch(arguments.length){
case 0:
return squiggle$listen$audio_$_state_machine__28390__auto____0.call(this);
case 1:
return squiggle$listen$audio_$_state_machine__28390__auto____1.call(this,state_50041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = squiggle$listen$audio_$_state_machine__28390__auto____0;
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = squiggle$listen$audio_$_state_machine__28390__auto____1;
return squiggle$listen$audio_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_50068 = f__28413__auto__.call(null);
(statearr_50068[(6)] = c__28412__auto__);

return statearr_50068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});

//# sourceMappingURL=listen.js.map?rel=1527257854635
