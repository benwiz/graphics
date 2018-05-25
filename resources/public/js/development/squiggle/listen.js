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
return (function (state_49779){
var state_val_49780 = (state_49779[(1)]);
if((state_val_49780 === (7))){
var state_49779__$1 = state_49779;
var statearr_49781_49807 = state_49779__$1;
(statearr_49781_49807[(2)] = false);

(statearr_49781_49807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (1))){
var inst_49738 = cljs.core.async.sliding_buffer.call(null,(10));
var inst_49739 = cljs_audiocapture.core.capture_audio.call(null,inst_49738);
var state_49779__$1 = state_49779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49779__$1,(2),inst_49739);
} else {
if((state_val_49780 === (4))){
var state_49779__$1 = state_49779;
var statearr_49782_49808 = state_49779__$1;
(statearr_49782_49808[(2)] = false);

(statearr_49782_49808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (15))){
var inst_49763 = (state_49779[(7)]);
var state_49779__$1 = state_49779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49779__$1,(17),inst_49763);
} else {
if((state_val_49780 === (13))){
var inst_49763 = (state_49779[(7)]);
var inst_49768 = cljs.core.async.put_BANG_.call(null,inst_49763,new cljs.core.Keyword(null,"start","start",-355208981));
var state_49779__$1 = (function (){var statearr_49783 = state_49779;
(statearr_49783[(8)] = inst_49768);

return statearr_49783;
})();
var statearr_49784_49809 = state_49779__$1;
(statearr_49784_49809[(2)] = null);

(statearr_49784_49809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (6))){
var state_49779__$1 = state_49779;
var statearr_49785_49810 = state_49779__$1;
(statearr_49785_49810[(2)] = true);

(statearr_49785_49810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (17))){
var inst_49771 = (state_49779[(2)]);
var inst_49772 = console.log(inst_49771);
var state_49779__$1 = (function (){var statearr_49786 = state_49779;
(statearr_49786[(9)] = inst_49772);

return statearr_49786;
})();
var statearr_49787_49811 = state_49779__$1;
(statearr_49787_49811[(2)] = null);

(statearr_49787_49811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (3))){
var inst_49741 = (state_49779[(10)]);
var inst_49746 = inst_49741.cljs$lang$protocol_mask$partition0$;
var inst_49747 = (inst_49746 & (64));
var inst_49748 = inst_49741.cljs$core$ISeq$;
var inst_49749 = (cljs.core.PROTOCOL_SENTINEL === inst_49748);
var inst_49750 = ((inst_49747) || (inst_49749));
var state_49779__$1 = state_49779;
if(cljs.core.truth_(inst_49750)){
var statearr_49788_49812 = state_49779__$1;
(statearr_49788_49812[(1)] = (6));

} else {
var statearr_49789_49813 = state_49779__$1;
(statearr_49789_49813[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (12))){
var inst_49764 = (state_49779[(11)]);
var inst_49766 = console.error(inst_49764);
var state_49779__$1 = state_49779;
var statearr_49790_49814 = state_49779__$1;
(statearr_49790_49814[(2)] = inst_49766);

(statearr_49790_49814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (2))){
var inst_49741 = (state_49779[(10)]);
var inst_49741__$1 = (state_49779[(2)]);
var inst_49743 = (inst_49741__$1 == null);
var inst_49744 = cljs.core.not.call(null,inst_49743);
var state_49779__$1 = (function (){var statearr_49791 = state_49779;
(statearr_49791[(10)] = inst_49741__$1);

return statearr_49791;
})();
if(inst_49744){
var statearr_49792_49815 = state_49779__$1;
(statearr_49792_49815[(1)] = (3));

} else {
var statearr_49793_49816 = state_49779__$1;
(statearr_49793_49816[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (11))){
var inst_49764 = (state_49779[(11)]);
var inst_49762 = (state_49779[(2)]);
var inst_49763 = cljs.core.get.call(null,inst_49762,new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416));
var inst_49764__$1 = cljs.core.get.call(null,inst_49762,new cljs.core.Keyword(null,"error","error",-978969032));
var state_49779__$1 = (function (){var statearr_49794 = state_49779;
(statearr_49794[(7)] = inst_49763);

(statearr_49794[(11)] = inst_49764__$1);

return statearr_49794;
})();
if(cljs.core.truth_(inst_49764__$1)){
var statearr_49795_49817 = state_49779__$1;
(statearr_49795_49817[(1)] = (12));

} else {
var statearr_49796_49818 = state_49779__$1;
(statearr_49796_49818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (9))){
var inst_49741 = (state_49779[(10)]);
var inst_49759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49741);
var state_49779__$1 = state_49779;
var statearr_49797_49819 = state_49779__$1;
(statearr_49797_49819[(2)] = inst_49759);

(statearr_49797_49819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (5))){
var inst_49757 = (state_49779[(2)]);
var state_49779__$1 = state_49779;
if(cljs.core.truth_(inst_49757)){
var statearr_49798_49820 = state_49779__$1;
(statearr_49798_49820[(1)] = (9));

} else {
var statearr_49799_49821 = state_49779__$1;
(statearr_49799_49821[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (14))){
var inst_49777 = (state_49779[(2)]);
var state_49779__$1 = state_49779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49779__$1,inst_49777);
} else {
if((state_val_49780 === (16))){
var inst_49775 = (state_49779[(2)]);
var state_49779__$1 = state_49779;
var statearr_49800_49822 = state_49779__$1;
(statearr_49800_49822[(2)] = inst_49775);

(statearr_49800_49822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (10))){
var inst_49741 = (state_49779[(10)]);
var state_49779__$1 = state_49779;
var statearr_49801_49823 = state_49779__$1;
(statearr_49801_49823[(2)] = inst_49741);

(statearr_49801_49823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49780 === (8))){
var inst_49754 = (state_49779[(2)]);
var state_49779__$1 = state_49779;
var statearr_49802_49824 = state_49779__$1;
(statearr_49802_49824[(2)] = inst_49754);

(statearr_49802_49824[(1)] = (5));


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
var statearr_49803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49803[(0)] = squiggle$listen$audio_$_state_machine__28390__auto__);

(statearr_49803[(1)] = (1));

return statearr_49803;
});
var squiggle$listen$audio_$_state_machine__28390__auto____1 = (function (state_49779){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_49779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e49804){if((e49804 instanceof Object)){
var ex__28393__auto__ = e49804;
var statearr_49805_49825 = state_49779;
(statearr_49805_49825[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49826 = state_49779;
state_49779 = G__49826;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
squiggle$listen$audio_$_state_machine__28390__auto__ = function(state_49779){
switch(arguments.length){
case 0:
return squiggle$listen$audio_$_state_machine__28390__auto____0.call(this);
case 1:
return squiggle$listen$audio_$_state_machine__28390__auto____1.call(this,state_49779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = squiggle$listen$audio_$_state_machine__28390__auto____0;
squiggle$listen$audio_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = squiggle$listen$audio_$_state_machine__28390__auto____1;
return squiggle$listen$audio_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_49806 = f__28413__auto__.call(null);
(statearr_49806[(6)] = c__28412__auto__);

return statearr_49806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});

//# sourceMappingURL=listen.js.map?rel=1527257800328
