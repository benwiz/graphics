// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35425){if((e35425 instanceof Error)){
var e = e35425;
return "Error: Unable to stringify";
} else {
throw e35425;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35428 = arguments.length;
switch (G__35428) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35426_SHARP_){
if(typeof p1__35426_SHARP_ === 'string'){
return p1__35426_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35426_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35431 = arguments.length;
var i__4500__auto___35432 = (0);
while(true){
if((i__4500__auto___35432 < len__4499__auto___35431)){
args__4502__auto__.push((arguments[i__4500__auto___35432]));

var G__35433 = (i__4500__auto___35432 + (1));
i__4500__auto___35432 = G__35433;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35430){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35430));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35435 = arguments.length;
var i__4500__auto___35436 = (0);
while(true){
if((i__4500__auto___35436 < len__4499__auto___35435)){
args__4502__auto__.push((arguments[i__4500__auto___35436]));

var G__35437 = (i__4500__auto___35436 + (1));
i__4500__auto___35436 = G__35437;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35434){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35434));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35438){
var map__35439 = p__35438;
var map__35439__$1 = ((((!((map__35439 == null)))?(((((map__35439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35439):map__35439);
var message = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25398__auto___35518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___35518,ch){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___35518,ch){
return (function (state_35490){
var state_val_35491 = (state_35490[(1)]);
if((state_val_35491 === (7))){
var inst_35486 = (state_35490[(2)]);
var state_35490__$1 = state_35490;
var statearr_35492_35519 = state_35490__$1;
(statearr_35492_35519[(2)] = inst_35486);

(statearr_35492_35519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (1))){
var state_35490__$1 = state_35490;
var statearr_35493_35520 = state_35490__$1;
(statearr_35493_35520[(2)] = null);

(statearr_35493_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (4))){
var inst_35443 = (state_35490[(7)]);
var inst_35443__$1 = (state_35490[(2)]);
var state_35490__$1 = (function (){var statearr_35494 = state_35490;
(statearr_35494[(7)] = inst_35443__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35443__$1)){
var statearr_35495_35521 = state_35490__$1;
(statearr_35495_35521[(1)] = (5));

} else {
var statearr_35496_35522 = state_35490__$1;
(statearr_35496_35522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (15))){
var inst_35450 = (state_35490[(8)]);
var inst_35465 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35450);
var inst_35466 = cljs.core.first.call(null,inst_35465);
var inst_35467 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35466);
var inst_35468 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35467)].join('');
var inst_35469 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35468);
var state_35490__$1 = state_35490;
var statearr_35497_35523 = state_35490__$1;
(statearr_35497_35523[(2)] = inst_35469);

(statearr_35497_35523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (13))){
var inst_35474 = (state_35490[(2)]);
var state_35490__$1 = state_35490;
var statearr_35498_35524 = state_35490__$1;
(statearr_35498_35524[(2)] = inst_35474);

(statearr_35498_35524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (6))){
var state_35490__$1 = state_35490;
var statearr_35499_35525 = state_35490__$1;
(statearr_35499_35525[(2)] = null);

(statearr_35499_35525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (17))){
var inst_35472 = (state_35490[(2)]);
var state_35490__$1 = state_35490;
var statearr_35500_35526 = state_35490__$1;
(statearr_35500_35526[(2)] = inst_35472);

(statearr_35500_35526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (3))){
var inst_35488 = (state_35490[(2)]);
var state_35490__$1 = state_35490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35490__$1,inst_35488);
} else {
if((state_val_35491 === (12))){
var inst_35449 = (state_35490[(9)]);
var inst_35463 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35449,opts);
var state_35490__$1 = state_35490;
if(cljs.core.truth_(inst_35463)){
var statearr_35501_35527 = state_35490__$1;
(statearr_35501_35527[(1)] = (15));

} else {
var statearr_35502_35528 = state_35490__$1;
(statearr_35502_35528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (2))){
var state_35490__$1 = state_35490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35490__$1,(4),ch);
} else {
if((state_val_35491 === (11))){
var inst_35450 = (state_35490[(8)]);
var inst_35455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35456 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35450);
var inst_35457 = cljs.core.async.timeout.call(null,(1000));
var inst_35458 = [inst_35456,inst_35457];
var inst_35459 = (new cljs.core.PersistentVector(null,2,(5),inst_35455,inst_35458,null));
var state_35490__$1 = state_35490;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35490__$1,(14),inst_35459);
} else {
if((state_val_35491 === (9))){
var inst_35450 = (state_35490[(8)]);
var inst_35476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35477 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35450);
var inst_35478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35477);
var inst_35479 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35478)].join('');
var inst_35480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35479);
var state_35490__$1 = (function (){var statearr_35503 = state_35490;
(statearr_35503[(10)] = inst_35476);

return statearr_35503;
})();
var statearr_35504_35529 = state_35490__$1;
(statearr_35504_35529[(2)] = inst_35480);

(statearr_35504_35529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (5))){
var inst_35443 = (state_35490[(7)]);
var inst_35445 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35446 = (new cljs.core.PersistentArrayMap(null,2,inst_35445,null));
var inst_35447 = (new cljs.core.PersistentHashSet(null,inst_35446,null));
var inst_35448 = figwheel.client.focus_msgs.call(null,inst_35447,inst_35443);
var inst_35449 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35448);
var inst_35450 = cljs.core.first.call(null,inst_35448);
var inst_35451 = figwheel.client.autoload_QMARK_.call(null);
var state_35490__$1 = (function (){var statearr_35505 = state_35490;
(statearr_35505[(8)] = inst_35450);

(statearr_35505[(9)] = inst_35449);

return statearr_35505;
})();
if(cljs.core.truth_(inst_35451)){
var statearr_35506_35530 = state_35490__$1;
(statearr_35506_35530[(1)] = (8));

} else {
var statearr_35507_35531 = state_35490__$1;
(statearr_35507_35531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (14))){
var inst_35461 = (state_35490[(2)]);
var state_35490__$1 = state_35490;
var statearr_35508_35532 = state_35490__$1;
(statearr_35508_35532[(2)] = inst_35461);

(statearr_35508_35532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (16))){
var state_35490__$1 = state_35490;
var statearr_35509_35533 = state_35490__$1;
(statearr_35509_35533[(2)] = null);

(statearr_35509_35533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (10))){
var inst_35482 = (state_35490[(2)]);
var state_35490__$1 = (function (){var statearr_35510 = state_35490;
(statearr_35510[(11)] = inst_35482);

return statearr_35510;
})();
var statearr_35511_35534 = state_35490__$1;
(statearr_35511_35534[(2)] = null);

(statearr_35511_35534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35491 === (8))){
var inst_35449 = (state_35490[(9)]);
var inst_35453 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35449,opts);
var state_35490__$1 = state_35490;
if(cljs.core.truth_(inst_35453)){
var statearr_35512_35535 = state_35490__$1;
(statearr_35512_35535[(1)] = (11));

} else {
var statearr_35513_35536 = state_35490__$1;
(statearr_35513_35536[(1)] = (12));

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
});})(c__25398__auto___35518,ch))
;
return ((function (switch__25311__auto__,c__25398__auto___35518,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____0 = (function (){
var statearr_35514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35514[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__);

(statearr_35514[(1)] = (1));

return statearr_35514;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____1 = (function (state_35490){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_35490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e35515){if((e35515 instanceof Object)){
var ex__25315__auto__ = e35515;
var statearr_35516_35537 = state_35490;
(statearr_35516_35537[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35538 = state_35490;
state_35490 = G__35538;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__ = function(state_35490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____1.call(this,state_35490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25312__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___35518,ch))
})();
var state__25400__auto__ = (function (){var statearr_35517 = f__25399__auto__.call(null);
(statearr_35517[(6)] = c__25398__auto___35518);

return statearr_35517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___35518,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35539_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35539_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35543 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35543){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35542 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35541,_STAR_print_fn_STAR_35542,sb,base_path_35543){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_35541,_STAR_print_fn_STAR_35542,sb,base_path_35543))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35542;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35541;
}}catch (e35540){if((e35540 instanceof Error)){
var e = e35540;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35543], null));
} else {
var e = e35540;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35543))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35544){
var map__35545 = p__35544;
var map__35545__$1 = ((((!((map__35545 == null)))?(((((map__35545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35545):map__35545);
var opts = map__35545__$1;
var build_id = cljs.core.get.call(null,map__35545__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35545,map__35545__$1,opts,build_id){
return (function (p__35547){
var vec__35548 = p__35547;
var seq__35549 = cljs.core.seq.call(null,vec__35548);
var first__35550 = cljs.core.first.call(null,seq__35549);
var seq__35549__$1 = cljs.core.next.call(null,seq__35549);
var map__35551 = first__35550;
var map__35551__$1 = ((((!((map__35551 == null)))?(((((map__35551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35551):map__35551);
var msg = map__35551__$1;
var msg_name = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35549__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35548,seq__35549,first__35550,seq__35549__$1,map__35551,map__35551__$1,msg,msg_name,_,map__35545,map__35545__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35548,seq__35549,first__35550,seq__35549__$1,map__35551,map__35551__$1,msg,msg_name,_,map__35545,map__35545__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35545,map__35545__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35553){
var vec__35554 = p__35553;
var seq__35555 = cljs.core.seq.call(null,vec__35554);
var first__35556 = cljs.core.first.call(null,seq__35555);
var seq__35555__$1 = cljs.core.next.call(null,seq__35555);
var map__35557 = first__35556;
var map__35557__$1 = ((((!((map__35557 == null)))?(((((map__35557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35557):map__35557);
var msg = map__35557__$1;
var msg_name = cljs.core.get.call(null,map__35557__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35555__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35559){
var map__35560 = p__35559;
var map__35560__$1 = ((((!((map__35560 == null)))?(((((map__35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35560):map__35560);
var on_compile_warning = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35560,map__35560__$1,on_compile_warning,on_compile_fail){
return (function (p__35562){
var vec__35563 = p__35562;
var seq__35564 = cljs.core.seq.call(null,vec__35563);
var first__35565 = cljs.core.first.call(null,seq__35564);
var seq__35564__$1 = cljs.core.next.call(null,seq__35564);
var map__35566 = first__35565;
var map__35566__$1 = ((((!((map__35566 == null)))?(((((map__35566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35566):map__35566);
var msg = map__35566__$1;
var msg_name = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35564__$1;
var pred__35568 = cljs.core._EQ_;
var expr__35569 = msg_name;
if(cljs.core.truth_(pred__35568.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35569))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35568.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35569))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35560,map__35560__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__,msg_hist,msg_names,msg){
return (function (state_35658){
var state_val_35659 = (state_35658[(1)]);
if((state_val_35659 === (7))){
var inst_35578 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35578)){
var statearr_35660_35707 = state_35658__$1;
(statearr_35660_35707[(1)] = (8));

} else {
var statearr_35661_35708 = state_35658__$1;
(statearr_35661_35708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (20))){
var inst_35652 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35662_35709 = state_35658__$1;
(statearr_35662_35709[(2)] = inst_35652);

(statearr_35662_35709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (27))){
var inst_35648 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35663_35710 = state_35658__$1;
(statearr_35663_35710[(2)] = inst_35648);

(statearr_35663_35710[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (1))){
var inst_35571 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35571)){
var statearr_35664_35711 = state_35658__$1;
(statearr_35664_35711[(1)] = (2));

} else {
var statearr_35665_35712 = state_35658__$1;
(statearr_35665_35712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (24))){
var inst_35650 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35666_35713 = state_35658__$1;
(statearr_35666_35713[(2)] = inst_35650);

(statearr_35666_35713[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (4))){
var inst_35656 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35658__$1,inst_35656);
} else {
if((state_val_35659 === (15))){
var inst_35654 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35667_35714 = state_35658__$1;
(statearr_35667_35714[(2)] = inst_35654);

(statearr_35667_35714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (21))){
var inst_35607 = (state_35658[(2)]);
var inst_35608 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35609 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35608);
var state_35658__$1 = (function (){var statearr_35668 = state_35658;
(statearr_35668[(7)] = inst_35607);

return statearr_35668;
})();
var statearr_35669_35715 = state_35658__$1;
(statearr_35669_35715[(2)] = inst_35609);

(statearr_35669_35715[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (31))){
var inst_35637 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35637)){
var statearr_35670_35716 = state_35658__$1;
(statearr_35670_35716[(1)] = (34));

} else {
var statearr_35671_35717 = state_35658__$1;
(statearr_35671_35717[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (32))){
var inst_35646 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35672_35718 = state_35658__$1;
(statearr_35672_35718[(2)] = inst_35646);

(statearr_35672_35718[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (33))){
var inst_35633 = (state_35658[(2)]);
var inst_35634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35635 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35634);
var state_35658__$1 = (function (){var statearr_35673 = state_35658;
(statearr_35673[(8)] = inst_35633);

return statearr_35673;
})();
var statearr_35674_35719 = state_35658__$1;
(statearr_35674_35719[(2)] = inst_35635);

(statearr_35674_35719[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (13))){
var inst_35592 = figwheel.client.heads_up.clear.call(null);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(16),inst_35592);
} else {
if((state_val_35659 === (22))){
var inst_35613 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35614 = figwheel.client.heads_up.append_warning_message.call(null,inst_35613);
var state_35658__$1 = state_35658;
var statearr_35675_35720 = state_35658__$1;
(statearr_35675_35720[(2)] = inst_35614);

(statearr_35675_35720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (36))){
var inst_35644 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35676_35721 = state_35658__$1;
(statearr_35676_35721[(2)] = inst_35644);

(statearr_35676_35721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (29))){
var inst_35624 = (state_35658[(2)]);
var inst_35625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35626 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35625);
var state_35658__$1 = (function (){var statearr_35677 = state_35658;
(statearr_35677[(9)] = inst_35624);

return statearr_35677;
})();
var statearr_35678_35722 = state_35658__$1;
(statearr_35678_35722[(2)] = inst_35626);

(statearr_35678_35722[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (6))){
var inst_35573 = (state_35658[(10)]);
var state_35658__$1 = state_35658;
var statearr_35679_35723 = state_35658__$1;
(statearr_35679_35723[(2)] = inst_35573);

(statearr_35679_35723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (28))){
var inst_35620 = (state_35658[(2)]);
var inst_35621 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35622 = figwheel.client.heads_up.display_warning.call(null,inst_35621);
var state_35658__$1 = (function (){var statearr_35680 = state_35658;
(statearr_35680[(11)] = inst_35620);

return statearr_35680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(29),inst_35622);
} else {
if((state_val_35659 === (25))){
var inst_35618 = figwheel.client.heads_up.clear.call(null);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(28),inst_35618);
} else {
if((state_val_35659 === (34))){
var inst_35639 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(37),inst_35639);
} else {
if((state_val_35659 === (17))){
var inst_35598 = (state_35658[(2)]);
var inst_35599 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35600 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35599);
var state_35658__$1 = (function (){var statearr_35681 = state_35658;
(statearr_35681[(12)] = inst_35598);

return statearr_35681;
})();
var statearr_35682_35724 = state_35658__$1;
(statearr_35682_35724[(2)] = inst_35600);

(statearr_35682_35724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (3))){
var inst_35590 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35590)){
var statearr_35683_35725 = state_35658__$1;
(statearr_35683_35725[(1)] = (13));

} else {
var statearr_35684_35726 = state_35658__$1;
(statearr_35684_35726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (12))){
var inst_35586 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35685_35727 = state_35658__$1;
(statearr_35685_35727[(2)] = inst_35586);

(statearr_35685_35727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (2))){
var inst_35573 = (state_35658[(10)]);
var inst_35573__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35658__$1 = (function (){var statearr_35686 = state_35658;
(statearr_35686[(10)] = inst_35573__$1);

return statearr_35686;
})();
if(cljs.core.truth_(inst_35573__$1)){
var statearr_35687_35728 = state_35658__$1;
(statearr_35687_35728[(1)] = (5));

} else {
var statearr_35688_35729 = state_35658__$1;
(statearr_35688_35729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (23))){
var inst_35616 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35616)){
var statearr_35689_35730 = state_35658__$1;
(statearr_35689_35730[(1)] = (25));

} else {
var statearr_35690_35731 = state_35658__$1;
(statearr_35690_35731[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (35))){
var state_35658__$1 = state_35658;
var statearr_35691_35732 = state_35658__$1;
(statearr_35691_35732[(2)] = null);

(statearr_35691_35732[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (19))){
var inst_35611 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35611)){
var statearr_35692_35733 = state_35658__$1;
(statearr_35692_35733[(1)] = (22));

} else {
var statearr_35693_35734 = state_35658__$1;
(statearr_35693_35734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (11))){
var inst_35582 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35694_35735 = state_35658__$1;
(statearr_35694_35735[(2)] = inst_35582);

(statearr_35694_35735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (9))){
var inst_35584 = figwheel.client.heads_up.clear.call(null);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(12),inst_35584);
} else {
if((state_val_35659 === (5))){
var inst_35575 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35658__$1 = state_35658;
var statearr_35695_35736 = state_35658__$1;
(statearr_35695_35736[(2)] = inst_35575);

(statearr_35695_35736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (14))){
var inst_35602 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35602)){
var statearr_35696_35737 = state_35658__$1;
(statearr_35696_35737[(1)] = (18));

} else {
var statearr_35697_35738 = state_35658__$1;
(statearr_35697_35738[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (26))){
var inst_35628 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35628)){
var statearr_35698_35739 = state_35658__$1;
(statearr_35698_35739[(1)] = (30));

} else {
var statearr_35699_35740 = state_35658__$1;
(statearr_35699_35740[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (16))){
var inst_35594 = (state_35658[(2)]);
var inst_35595 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35596 = figwheel.client.heads_up.display_exception.call(null,inst_35595);
var state_35658__$1 = (function (){var statearr_35700 = state_35658;
(statearr_35700[(13)] = inst_35594);

return statearr_35700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(17),inst_35596);
} else {
if((state_val_35659 === (30))){
var inst_35630 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35631 = figwheel.client.heads_up.display_warning.call(null,inst_35630);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(33),inst_35631);
} else {
if((state_val_35659 === (10))){
var inst_35588 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35701_35741 = state_35658__$1;
(statearr_35701_35741[(2)] = inst_35588);

(statearr_35701_35741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (18))){
var inst_35604 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35605 = figwheel.client.heads_up.display_exception.call(null,inst_35604);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(21),inst_35605);
} else {
if((state_val_35659 === (37))){
var inst_35641 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35702_35742 = state_35658__$1;
(statearr_35702_35742[(2)] = inst_35641);

(statearr_35702_35742[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (8))){
var inst_35580 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(11),inst_35580);
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
});})(c__25398__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25311__auto__,c__25398__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____0 = (function (){
var statearr_35703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35703[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__);

(statearr_35703[(1)] = (1));

return statearr_35703;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____1 = (function (state_35658){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_35658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e35704){if((e35704 instanceof Object)){
var ex__25315__auto__ = e35704;
var statearr_35705_35743 = state_35658;
(statearr_35705_35743[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35744 = state_35658;
state_35658 = G__35744;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__ = function(state_35658){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____1.call(this,state_35658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__,msg_hist,msg_names,msg))
})();
var state__25400__auto__ = (function (){var statearr_35706 = f__25399__auto__.call(null);
(statearr_35706[(6)] = c__25398__auto__);

return statearr_35706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__,msg_hist,msg_names,msg))
);

return c__25398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25398__auto___35773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___35773,ch){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___35773,ch){
return (function (state_35759){
var state_val_35760 = (state_35759[(1)]);
if((state_val_35760 === (1))){
var state_35759__$1 = state_35759;
var statearr_35761_35774 = state_35759__$1;
(statearr_35761_35774[(2)] = null);

(statearr_35761_35774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (2))){
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(4),ch);
} else {
if((state_val_35760 === (3))){
var inst_35757 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35759__$1,inst_35757);
} else {
if((state_val_35760 === (4))){
var inst_35747 = (state_35759[(7)]);
var inst_35747__$1 = (state_35759[(2)]);
var state_35759__$1 = (function (){var statearr_35762 = state_35759;
(statearr_35762[(7)] = inst_35747__$1);

return statearr_35762;
})();
if(cljs.core.truth_(inst_35747__$1)){
var statearr_35763_35775 = state_35759__$1;
(statearr_35763_35775[(1)] = (5));

} else {
var statearr_35764_35776 = state_35759__$1;
(statearr_35764_35776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (5))){
var inst_35747 = (state_35759[(7)]);
var inst_35749 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35747);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(8),inst_35749);
} else {
if((state_val_35760 === (6))){
var state_35759__$1 = state_35759;
var statearr_35765_35777 = state_35759__$1;
(statearr_35765_35777[(2)] = null);

(statearr_35765_35777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (7))){
var inst_35755 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35766_35778 = state_35759__$1;
(statearr_35766_35778[(2)] = inst_35755);

(statearr_35766_35778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (8))){
var inst_35751 = (state_35759[(2)]);
var state_35759__$1 = (function (){var statearr_35767 = state_35759;
(statearr_35767[(8)] = inst_35751);

return statearr_35767;
})();
var statearr_35768_35779 = state_35759__$1;
(statearr_35768_35779[(2)] = null);

(statearr_35768_35779[(1)] = (2));


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
});})(c__25398__auto___35773,ch))
;
return ((function (switch__25311__auto__,c__25398__auto___35773,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25312__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25312__auto____0 = (function (){
var statearr_35769 = [null,null,null,null,null,null,null,null,null];
(statearr_35769[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25312__auto__);

(statearr_35769[(1)] = (1));

return statearr_35769;
});
var figwheel$client$heads_up_plugin_$_state_machine__25312__auto____1 = (function (state_35759){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_35759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e35770){if((e35770 instanceof Object)){
var ex__25315__auto__ = e35770;
var statearr_35771_35780 = state_35759;
(statearr_35771_35780[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35781 = state_35759;
state_35759 = G__35781;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25312__auto__ = function(state_35759){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25312__auto____1.call(this,state_35759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25312__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25312__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___35773,ch))
})();
var state__25400__auto__ = (function (){var statearr_35772 = f__25399__auto__.call(null);
(statearr_35772[(6)] = c__25398__auto___35773);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___35773,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__){
return (function (state_35787){
var state_val_35788 = (state_35787[(1)]);
if((state_val_35788 === (1))){
var inst_35782 = cljs.core.async.timeout.call(null,(3000));
var state_35787__$1 = state_35787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35787__$1,(2),inst_35782);
} else {
if((state_val_35788 === (2))){
var inst_35784 = (state_35787[(2)]);
var inst_35785 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35787__$1 = (function (){var statearr_35789 = state_35787;
(statearr_35789[(7)] = inst_35784);

return statearr_35789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35787__$1,inst_35785);
} else {
return null;
}
}
});})(c__25398__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____0 = (function (){
var statearr_35790 = [null,null,null,null,null,null,null,null];
(statearr_35790[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__);

(statearr_35790[(1)] = (1));

return statearr_35790;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____1 = (function (state_35787){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_35787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e35791){if((e35791 instanceof Object)){
var ex__25315__auto__ = e35791;
var statearr_35792_35794 = state_35787;
(statearr_35792_35794[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35795 = state_35787;
state_35787 = G__35795;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__ = function(state_35787){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____1.call(this,state_35787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25312__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__))
})();
var state__25400__auto__ = (function (){var statearr_35793 = f__25399__auto__.call(null);
(statearr_35793[(6)] = c__25398__auto__);

return statearr_35793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__))
);

return c__25398__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__,figwheel_version,temp__5457__auto__){
return (function (state_35802){
var state_val_35803 = (state_35802[(1)]);
if((state_val_35803 === (1))){
var inst_35796 = cljs.core.async.timeout.call(null,(2000));
var state_35802__$1 = state_35802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35802__$1,(2),inst_35796);
} else {
if((state_val_35803 === (2))){
var inst_35798 = (state_35802[(2)]);
var inst_35799 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35800 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35799);
var state_35802__$1 = (function (){var statearr_35804 = state_35802;
(statearr_35804[(7)] = inst_35798);

return statearr_35804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35802__$1,inst_35800);
} else {
return null;
}
}
});})(c__25398__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____0 = (function (){
var statearr_35805 = [null,null,null,null,null,null,null,null];
(statearr_35805[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__);

(statearr_35805[(1)] = (1));

return statearr_35805;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____1 = (function (state_35802){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_35802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e35806){if((e35806 instanceof Object)){
var ex__25315__auto__ = e35806;
var statearr_35807_35809 = state_35802;
(statearr_35807_35809[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35810 = state_35802;
state_35802 = G__35810;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__ = function(state_35802){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____1.call(this,state_35802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25400__auto__ = (function (){var statearr_35808 = f__25399__auto__.call(null);
(statearr_35808[(6)] = c__25398__auto__);

return statearr_35808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__,figwheel_version,temp__5457__auto__))
);

return c__25398__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35811){
var map__35812 = p__35811;
var map__35812__$1 = ((((!((map__35812 == null)))?(((((map__35812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35812):map__35812);
var file = cljs.core.get.call(null,map__35812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35812__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35812__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35814 = "";
var G__35814__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35814),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35814);
var G__35814__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35814__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35814__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35814__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35814__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35815){
var map__35816 = p__35815;
var map__35816__$1 = ((((!((map__35816 == null)))?(((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35816):map__35816);
var ed = map__35816__$1;
var formatted_exception = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35818_35822 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35819_35823 = null;
var count__35820_35824 = (0);
var i__35821_35825 = (0);
while(true){
if((i__35821_35825 < count__35820_35824)){
var msg_35826 = cljs.core._nth.call(null,chunk__35819_35823,i__35821_35825);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35826);


var G__35827 = seq__35818_35822;
var G__35828 = chunk__35819_35823;
var G__35829 = count__35820_35824;
var G__35830 = (i__35821_35825 + (1));
seq__35818_35822 = G__35827;
chunk__35819_35823 = G__35828;
count__35820_35824 = G__35829;
i__35821_35825 = G__35830;
continue;
} else {
var temp__5457__auto___35831 = cljs.core.seq.call(null,seq__35818_35822);
if(temp__5457__auto___35831){
var seq__35818_35832__$1 = temp__5457__auto___35831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35818_35832__$1)){
var c__4319__auto___35833 = cljs.core.chunk_first.call(null,seq__35818_35832__$1);
var G__35834 = cljs.core.chunk_rest.call(null,seq__35818_35832__$1);
var G__35835 = c__4319__auto___35833;
var G__35836 = cljs.core.count.call(null,c__4319__auto___35833);
var G__35837 = (0);
seq__35818_35822 = G__35834;
chunk__35819_35823 = G__35835;
count__35820_35824 = G__35836;
i__35821_35825 = G__35837;
continue;
} else {
var msg_35838 = cljs.core.first.call(null,seq__35818_35832__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35838);


var G__35839 = cljs.core.next.call(null,seq__35818_35832__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__35818_35822 = G__35839;
chunk__35819_35823 = G__35840;
count__35820_35824 = G__35841;
i__35821_35825 = G__35842;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35843){
var map__35844 = p__35843;
var map__35844__$1 = ((((!((map__35844 == null)))?(((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var w = map__35844__$1;
var message = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35846 = cljs.core.seq.call(null,plugins);
var chunk__35847 = null;
var count__35848 = (0);
var i__35849 = (0);
while(true){
if((i__35849 < count__35848)){
var vec__35850 = cljs.core._nth.call(null,chunk__35847,i__35849);
var k = cljs.core.nth.call(null,vec__35850,(0),null);
var plugin = cljs.core.nth.call(null,vec__35850,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35856 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35846,chunk__35847,count__35848,i__35849,pl_35856,vec__35850,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35856.call(null,msg_hist);
});})(seq__35846,chunk__35847,count__35848,i__35849,pl_35856,vec__35850,k,plugin))
);
} else {
}


var G__35857 = seq__35846;
var G__35858 = chunk__35847;
var G__35859 = count__35848;
var G__35860 = (i__35849 + (1));
seq__35846 = G__35857;
chunk__35847 = G__35858;
count__35848 = G__35859;
i__35849 = G__35860;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35846);
if(temp__5457__auto__){
var seq__35846__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35846__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35846__$1);
var G__35861 = cljs.core.chunk_rest.call(null,seq__35846__$1);
var G__35862 = c__4319__auto__;
var G__35863 = cljs.core.count.call(null,c__4319__auto__);
var G__35864 = (0);
seq__35846 = G__35861;
chunk__35847 = G__35862;
count__35848 = G__35863;
i__35849 = G__35864;
continue;
} else {
var vec__35853 = cljs.core.first.call(null,seq__35846__$1);
var k = cljs.core.nth.call(null,vec__35853,(0),null);
var plugin = cljs.core.nth.call(null,vec__35853,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35865 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35846,chunk__35847,count__35848,i__35849,pl_35865,vec__35853,k,plugin,seq__35846__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35865.call(null,msg_hist);
});})(seq__35846,chunk__35847,count__35848,i__35849,pl_35865,vec__35853,k,plugin,seq__35846__$1,temp__5457__auto__))
);
} else {
}


var G__35866 = cljs.core.next.call(null,seq__35846__$1);
var G__35867 = null;
var G__35868 = (0);
var G__35869 = (0);
seq__35846 = G__35866;
chunk__35847 = G__35867;
count__35848 = G__35868;
i__35849 = G__35869;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__35871 = arguments.length;
switch (G__35871) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35872_35877 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35873_35878 = null;
var count__35874_35879 = (0);
var i__35875_35880 = (0);
while(true){
if((i__35875_35880 < count__35874_35879)){
var msg_35881 = cljs.core._nth.call(null,chunk__35873_35878,i__35875_35880);
figwheel.client.socket.handle_incoming_message.call(null,msg_35881);


var G__35882 = seq__35872_35877;
var G__35883 = chunk__35873_35878;
var G__35884 = count__35874_35879;
var G__35885 = (i__35875_35880 + (1));
seq__35872_35877 = G__35882;
chunk__35873_35878 = G__35883;
count__35874_35879 = G__35884;
i__35875_35880 = G__35885;
continue;
} else {
var temp__5457__auto___35886 = cljs.core.seq.call(null,seq__35872_35877);
if(temp__5457__auto___35886){
var seq__35872_35887__$1 = temp__5457__auto___35886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35872_35887__$1)){
var c__4319__auto___35888 = cljs.core.chunk_first.call(null,seq__35872_35887__$1);
var G__35889 = cljs.core.chunk_rest.call(null,seq__35872_35887__$1);
var G__35890 = c__4319__auto___35888;
var G__35891 = cljs.core.count.call(null,c__4319__auto___35888);
var G__35892 = (0);
seq__35872_35877 = G__35889;
chunk__35873_35878 = G__35890;
count__35874_35879 = G__35891;
i__35875_35880 = G__35892;
continue;
} else {
var msg_35893 = cljs.core.first.call(null,seq__35872_35887__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35893);


var G__35894 = cljs.core.next.call(null,seq__35872_35887__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35872_35877 = G__35894;
chunk__35873_35878 = G__35895;
count__35874_35879 = G__35896;
i__35875_35880 = G__35897;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35902 = arguments.length;
var i__4500__auto___35903 = (0);
while(true){
if((i__4500__auto___35903 < len__4499__auto___35902)){
args__4502__auto__.push((arguments[i__4500__auto___35903]));

var G__35904 = (i__4500__auto___35903 + (1));
i__4500__auto___35903 = G__35904;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35899){
var map__35900 = p__35899;
var map__35900__$1 = ((((!((map__35900 == null)))?(((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35900):map__35900);
var opts = map__35900__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35898));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35905){if((e35905 instanceof Error)){
var e = e35905;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35905;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35906){
var map__35907 = p__35906;
var map__35907__$1 = ((((!((map__35907 == null)))?(((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
var msg_name = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525651802928