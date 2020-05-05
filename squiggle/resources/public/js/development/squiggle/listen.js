// Compiled by ClojureScript 1.10.238 {}
goog.provide('squiggle.listen');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_audiocapture.core');
squiggle.listen.current_frame = (19);
var c__40201__auto___48486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40201__auto___48486){
return (function (){
var f__40202__auto__ = (function (){var switch__40178__auto__ = ((function (c__40201__auto___48486){
return (function (state_48458){
var state_val_48459 = (state_48458[(1)]);
if((state_val_48459 === (7))){
var state_48458__$1 = state_48458;
var statearr_48460_48487 = state_48458__$1;
(statearr_48460_48487[(2)] = false);

(statearr_48460_48487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (1))){
var inst_48417 = cljs.core.async.sliding_buffer.call(null,(10));
var inst_48418 = cljs_audiocapture.core.capture_audio.call(null,inst_48417);
var state_48458__$1 = state_48458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48458__$1,(2),inst_48418);
} else {
if((state_val_48459 === (4))){
var state_48458__$1 = state_48458;
var statearr_48461_48488 = state_48458__$1;
(statearr_48461_48488[(2)] = false);

(statearr_48461_48488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (15))){
var inst_48442 = (state_48458[(7)]);
var state_48458__$1 = state_48458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48458__$1,(17),inst_48442);
} else {
if((state_val_48459 === (13))){
var inst_48442 = (state_48458[(7)]);
var inst_48447 = cljs.core.async.put_BANG_.call(null,inst_48442,new cljs.core.Keyword(null,"start","start",-355208981));
var state_48458__$1 = (function (){var statearr_48462 = state_48458;
(statearr_48462[(8)] = inst_48447);

return statearr_48462;
})();
var statearr_48463_48489 = state_48458__$1;
(statearr_48463_48489[(2)] = null);

(statearr_48463_48489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (6))){
var state_48458__$1 = state_48458;
var statearr_48464_48490 = state_48458__$1;
(statearr_48464_48490[(2)] = true);

(statearr_48464_48490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (17))){
var inst_48450 = (state_48458[(2)]);
var inst_48451 = squiggle.listen.current_frame = inst_48450;
var state_48458__$1 = (function (){var statearr_48465 = state_48458;
(statearr_48465[(9)] = inst_48451);

return statearr_48465;
})();
var statearr_48466_48491 = state_48458__$1;
(statearr_48466_48491[(2)] = null);

(statearr_48466_48491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (3))){
var inst_48420 = (state_48458[(10)]);
var inst_48425 = inst_48420.cljs$lang$protocol_mask$partition0$;
var inst_48426 = (inst_48425 & (64));
var inst_48427 = inst_48420.cljs$core$ISeq$;
var inst_48428 = (cljs.core.PROTOCOL_SENTINEL === inst_48427);
var inst_48429 = ((inst_48426) || (inst_48428));
var state_48458__$1 = state_48458;
if(cljs.core.truth_(inst_48429)){
var statearr_48467_48492 = state_48458__$1;
(statearr_48467_48492[(1)] = (6));

} else {
var statearr_48468_48493 = state_48458__$1;
(statearr_48468_48493[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (12))){
var inst_48443 = (state_48458[(11)]);
var inst_48445 = console.error(inst_48443);
var state_48458__$1 = state_48458;
var statearr_48469_48494 = state_48458__$1;
(statearr_48469_48494[(2)] = inst_48445);

(statearr_48469_48494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (2))){
var inst_48420 = (state_48458[(10)]);
var inst_48420__$1 = (state_48458[(2)]);
var inst_48422 = (inst_48420__$1 == null);
var inst_48423 = cljs.core.not.call(null,inst_48422);
var state_48458__$1 = (function (){var statearr_48470 = state_48458;
(statearr_48470[(10)] = inst_48420__$1);

return statearr_48470;
})();
if(inst_48423){
var statearr_48471_48495 = state_48458__$1;
(statearr_48471_48495[(1)] = (3));

} else {
var statearr_48472_48496 = state_48458__$1;
(statearr_48472_48496[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (11))){
var inst_48443 = (state_48458[(11)]);
var inst_48441 = (state_48458[(2)]);
var inst_48442 = cljs.core.get.call(null,inst_48441,new cljs.core.Keyword(null,"audio-chan","audio-chan",-371195416));
var inst_48443__$1 = cljs.core.get.call(null,inst_48441,new cljs.core.Keyword(null,"error","error",-978969032));
var state_48458__$1 = (function (){var statearr_48473 = state_48458;
(statearr_48473[(7)] = inst_48442);

(statearr_48473[(11)] = inst_48443__$1);

return statearr_48473;
})();
if(cljs.core.truth_(inst_48443__$1)){
var statearr_48474_48497 = state_48458__$1;
(statearr_48474_48497[(1)] = (12));

} else {
var statearr_48475_48498 = state_48458__$1;
(statearr_48475_48498[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (9))){
var inst_48420 = (state_48458[(10)]);
var inst_48438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48420);
var state_48458__$1 = state_48458;
var statearr_48476_48499 = state_48458__$1;
(statearr_48476_48499[(2)] = inst_48438);

(statearr_48476_48499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (5))){
var inst_48436 = (state_48458[(2)]);
var state_48458__$1 = state_48458;
if(cljs.core.truth_(inst_48436)){
var statearr_48477_48500 = state_48458__$1;
(statearr_48477_48500[(1)] = (9));

} else {
var statearr_48478_48501 = state_48458__$1;
(statearr_48478_48501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (14))){
var inst_48456 = (state_48458[(2)]);
var state_48458__$1 = state_48458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48458__$1,inst_48456);
} else {
if((state_val_48459 === (16))){
var inst_48454 = (state_48458[(2)]);
var state_48458__$1 = state_48458;
var statearr_48479_48502 = state_48458__$1;
(statearr_48479_48502[(2)] = inst_48454);

(statearr_48479_48502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (10))){
var inst_48420 = (state_48458[(10)]);
var state_48458__$1 = state_48458;
var statearr_48480_48503 = state_48458__$1;
(statearr_48480_48503[(2)] = inst_48420);

(statearr_48480_48503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48459 === (8))){
var inst_48433 = (state_48458[(2)]);
var state_48458__$1 = state_48458;
var statearr_48481_48504 = state_48458__$1;
(statearr_48481_48504[(2)] = inst_48433);

(statearr_48481_48504[(1)] = (5));


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
});})(c__40201__auto___48486))
;
return ((function (switch__40178__auto__,c__40201__auto___48486){
return (function() {
var squiggle$listen$state_machine__40179__auto__ = null;
var squiggle$listen$state_machine__40179__auto____0 = (function (){
var statearr_48482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48482[(0)] = squiggle$listen$state_machine__40179__auto__);

(statearr_48482[(1)] = (1));

return statearr_48482;
});
var squiggle$listen$state_machine__40179__auto____1 = (function (state_48458){
while(true){
var ret_value__40180__auto__ = (function (){try{while(true){
var result__40181__auto__ = switch__40178__auto__.call(null,state_48458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40181__auto__;
}
break;
}
}catch (e48483){if((e48483 instanceof Object)){
var ex__40182__auto__ = e48483;
var statearr_48484_48505 = state_48458;
(statearr_48484_48505[(5)] = ex__40182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48506 = state_48458;
state_48458 = G__48506;
continue;
} else {
return ret_value__40180__auto__;
}
break;
}
});
squiggle$listen$state_machine__40179__auto__ = function(state_48458){
switch(arguments.length){
case 0:
return squiggle$listen$state_machine__40179__auto____0.call(this);
case 1:
return squiggle$listen$state_machine__40179__auto____1.call(this,state_48458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
squiggle$listen$state_machine__40179__auto__.cljs$core$IFn$_invoke$arity$0 = squiggle$listen$state_machine__40179__auto____0;
squiggle$listen$state_machine__40179__auto__.cljs$core$IFn$_invoke$arity$1 = squiggle$listen$state_machine__40179__auto____1;
return squiggle$listen$state_machine__40179__auto__;
})()
;})(switch__40178__auto__,c__40201__auto___48486))
})();
var state__40203__auto__ = (function (){var statearr_48485 = f__40202__auto__.call(null);
(statearr_48485[(6)] = c__40201__auto___48486);

return statearr_48485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40203__auto__);
});})(c__40201__auto___48486))
);


//# sourceMappingURL=listen.js.map?rel=1527390125167
