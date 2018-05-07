// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23424 = arguments.length;
switch (G__23424) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23425 = (function (f,blockable,meta23426){
this.f = f;
this.blockable = blockable;
this.meta23426 = meta23426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23427,meta23426__$1){
var self__ = this;
var _23427__$1 = this;
return (new cljs.core.async.t_cljs$core$async23425(self__.f,self__.blockable,meta23426__$1));
});

cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23427){
var self__ = this;
var _23427__$1 = this;
return self__.meta23426;
});

cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23426","meta23426",151862512,null)], null);
});

cljs.core.async.t_cljs$core$async23425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23425";

cljs.core.async.t_cljs$core$async23425.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23425");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23425.
 */
cljs.core.async.__GT_t_cljs$core$async23425 = (function cljs$core$async$__GT_t_cljs$core$async23425(f__$1,blockable__$1,meta23426){
return (new cljs.core.async.t_cljs$core$async23425(f__$1,blockable__$1,meta23426));
});

}

return (new cljs.core.async.t_cljs$core$async23425(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23431 = arguments.length;
switch (G__23431) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23437 = arguments.length;
switch (G__23437) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23439 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23439);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23439,ret){
return (function (){
return fn1.call(null,val_23439);
});})(val_23439,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23441 = arguments.length;
switch (G__23441) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___23443 = n;
var x_23444 = (0);
while(true){
if((x_23444 < n__4376__auto___23443)){
(a[x_23444] = (0));

var G__23445 = (x_23444 + (1));
x_23444 = G__23445;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23446 = (i + (1));
i = G__23446;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23447 = (function (flag,meta23448){
this.flag = flag;
this.meta23448 = meta23448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23449,meta23448__$1){
var self__ = this;
var _23449__$1 = this;
return (new cljs.core.async.t_cljs$core$async23447(self__.flag,meta23448__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23449){
var self__ = this;
var _23449__$1 = this;
return self__.meta23448;
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23448","meta23448",-841757351,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23447";

cljs.core.async.t_cljs$core$async23447.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23447");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23447.
 */
cljs.core.async.__GT_t_cljs$core$async23447 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23447(flag__$1,meta23448){
return (new cljs.core.async.t_cljs$core$async23447(flag__$1,meta23448));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23447(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23450 = (function (flag,cb,meta23451){
this.flag = flag;
this.cb = cb;
this.meta23451 = meta23451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23452,meta23451__$1){
var self__ = this;
var _23452__$1 = this;
return (new cljs.core.async.t_cljs$core$async23450(self__.flag,self__.cb,meta23451__$1));
});

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23452){
var self__ = this;
var _23452__$1 = this;
return self__.meta23451;
});

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23451","meta23451",1289671548,null)], null);
});

cljs.core.async.t_cljs$core$async23450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23450";

cljs.core.async.t_cljs$core$async23450.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23450");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23450.
 */
cljs.core.async.__GT_t_cljs$core$async23450 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23450(flag__$1,cb__$1,meta23451){
return (new cljs.core.async.t_cljs$core$async23450(flag__$1,cb__$1,meta23451));
});

}

return (new cljs.core.async.t_cljs$core$async23450(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23453_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23453_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23454_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23454_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23455 = (i + (1));
i = G__23455;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23461 = arguments.length;
var i__4500__auto___23462 = (0);
while(true){
if((i__4500__auto___23462 < len__4499__auto___23461)){
args__4502__auto__.push((arguments[i__4500__auto___23462]));

var G__23463 = (i__4500__auto___23462 + (1));
i__4500__auto___23462 = G__23463;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23458){
var map__23459 = p__23458;
var map__23459__$1 = ((((!((map__23459 == null)))?(((((map__23459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23459):map__23459);
var opts = map__23459__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23456){
var G__23457 = cljs.core.first.call(null,seq23456);
var seq23456__$1 = cljs.core.next.call(null,seq23456);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23457,seq23456__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23465 = arguments.length;
switch (G__23465) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23364__auto___23511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___23511){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___23511){
return (function (state_23489){
var state_val_23490 = (state_23489[(1)]);
if((state_val_23490 === (7))){
var inst_23485 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
var statearr_23491_23512 = state_23489__$1;
(statearr_23491_23512[(2)] = inst_23485);

(statearr_23491_23512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (1))){
var state_23489__$1 = state_23489;
var statearr_23492_23513 = state_23489__$1;
(statearr_23492_23513[(2)] = null);

(statearr_23492_23513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (4))){
var inst_23468 = (state_23489[(7)]);
var inst_23468__$1 = (state_23489[(2)]);
var inst_23469 = (inst_23468__$1 == null);
var state_23489__$1 = (function (){var statearr_23493 = state_23489;
(statearr_23493[(7)] = inst_23468__$1);

return statearr_23493;
})();
if(cljs.core.truth_(inst_23469)){
var statearr_23494_23514 = state_23489__$1;
(statearr_23494_23514[(1)] = (5));

} else {
var statearr_23495_23515 = state_23489__$1;
(statearr_23495_23515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (13))){
var state_23489__$1 = state_23489;
var statearr_23496_23516 = state_23489__$1;
(statearr_23496_23516[(2)] = null);

(statearr_23496_23516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (6))){
var inst_23468 = (state_23489[(7)]);
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23489__$1,(11),to,inst_23468);
} else {
if((state_val_23490 === (3))){
var inst_23487 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23489__$1,inst_23487);
} else {
if((state_val_23490 === (12))){
var state_23489__$1 = state_23489;
var statearr_23497_23517 = state_23489__$1;
(statearr_23497_23517[(2)] = null);

(statearr_23497_23517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (2))){
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23489__$1,(4),from);
} else {
if((state_val_23490 === (11))){
var inst_23478 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
if(cljs.core.truth_(inst_23478)){
var statearr_23498_23518 = state_23489__$1;
(statearr_23498_23518[(1)] = (12));

} else {
var statearr_23499_23519 = state_23489__$1;
(statearr_23499_23519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (9))){
var state_23489__$1 = state_23489;
var statearr_23500_23520 = state_23489__$1;
(statearr_23500_23520[(2)] = null);

(statearr_23500_23520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (5))){
var state_23489__$1 = state_23489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23501_23521 = state_23489__$1;
(statearr_23501_23521[(1)] = (8));

} else {
var statearr_23502_23522 = state_23489__$1;
(statearr_23502_23522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (14))){
var inst_23483 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
var statearr_23503_23523 = state_23489__$1;
(statearr_23503_23523[(2)] = inst_23483);

(statearr_23503_23523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (10))){
var inst_23475 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
var statearr_23504_23524 = state_23489__$1;
(statearr_23504_23524[(2)] = inst_23475);

(statearr_23504_23524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23490 === (8))){
var inst_23472 = cljs.core.async.close_BANG_.call(null,to);
var state_23489__$1 = state_23489;
var statearr_23505_23525 = state_23489__$1;
(statearr_23505_23525[(2)] = inst_23472);

(statearr_23505_23525[(1)] = (10));


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
});})(c__23364__auto___23511))
;
return ((function (switch__23309__auto__,c__23364__auto___23511){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_23506 = [null,null,null,null,null,null,null,null];
(statearr_23506[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_23506[(1)] = (1));

return statearr_23506;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_23489){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23507){if((e23507 instanceof Object)){
var ex__23313__auto__ = e23507;
var statearr_23508_23526 = state_23489;
(statearr_23508_23526[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23527 = state_23489;
state_23489 = G__23527;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_23489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_23489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___23511))
})();
var state__23366__auto__ = (function (){var statearr_23509 = f__23365__auto__.call(null);
(statearr_23509[(6)] = c__23364__auto___23511);

return statearr_23509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___23511))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23528){
var vec__23529 = p__23528;
var v = cljs.core.nth.call(null,vec__23529,(0),null);
var p = cljs.core.nth.call(null,vec__23529,(1),null);
var job = vec__23529;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23364__auto___23700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results){
return (function (state_23536){
var state_val_23537 = (state_23536[(1)]);
if((state_val_23537 === (1))){
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23536__$1,(2),res,v);
} else {
if((state_val_23537 === (2))){
var inst_23533 = (state_23536[(2)]);
var inst_23534 = cljs.core.async.close_BANG_.call(null,res);
var state_23536__$1 = (function (){var statearr_23538 = state_23536;
(statearr_23538[(7)] = inst_23533);

return statearr_23538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23536__$1,inst_23534);
} else {
return null;
}
}
});})(c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results))
;
return ((function (switch__23309__auto__,c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_23539 = [null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1 = (function (state_23536){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23540){if((e23540 instanceof Object)){
var ex__23313__auto__ = e23540;
var statearr_23541_23701 = state_23536;
(statearr_23541_23701[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23702 = state_23536;
state_23536 = G__23702;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = function(state_23536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1.call(this,state_23536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results))
})();
var state__23366__auto__ = (function (){var statearr_23542 = f__23365__auto__.call(null);
(statearr_23542[(6)] = c__23364__auto___23700);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___23700,res,vec__23529,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23543){
var vec__23544 = p__23543;
var v = cljs.core.nth.call(null,vec__23544,(0),null);
var p = cljs.core.nth.call(null,vec__23544,(1),null);
var job = vec__23544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___23703 = n;
var __23704 = (0);
while(true){
if((__23704 < n__4376__auto___23703)){
var G__23547_23705 = type;
var G__23547_23706__$1 = (((G__23547_23705 instanceof cljs.core.Keyword))?G__23547_23705.fqn:null);
switch (G__23547_23706__$1) {
case "compute":
var c__23364__auto___23708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23704,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (__23704,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function (state_23560){
var state_val_23561 = (state_23560[(1)]);
if((state_val_23561 === (1))){
var state_23560__$1 = state_23560;
var statearr_23562_23709 = state_23560__$1;
(statearr_23562_23709[(2)] = null);

(statearr_23562_23709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (2))){
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23560__$1,(4),jobs);
} else {
if((state_val_23561 === (3))){
var inst_23558 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23560__$1,inst_23558);
} else {
if((state_val_23561 === (4))){
var inst_23550 = (state_23560[(2)]);
var inst_23551 = process.call(null,inst_23550);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23551)){
var statearr_23563_23710 = state_23560__$1;
(statearr_23563_23710[(1)] = (5));

} else {
var statearr_23564_23711 = state_23560__$1;
(statearr_23564_23711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (5))){
var state_23560__$1 = state_23560;
var statearr_23565_23712 = state_23560__$1;
(statearr_23565_23712[(2)] = null);

(statearr_23565_23712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (6))){
var state_23560__$1 = state_23560;
var statearr_23566_23713 = state_23560__$1;
(statearr_23566_23713[(2)] = null);

(statearr_23566_23713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (7))){
var inst_23556 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23567_23714 = state_23560__$1;
(statearr_23567_23714[(2)] = inst_23556);

(statearr_23567_23714[(1)] = (3));


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
});})(__23704,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
;
return ((function (__23704,switch__23309__auto__,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_23568 = [null,null,null,null,null,null,null];
(statearr_23568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__);

(statearr_23568[(1)] = (1));

return statearr_23568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1 = (function (state_23560){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23569){if((e23569 instanceof Object)){
var ex__23313__auto__ = e23569;
var statearr_23570_23715 = state_23560;
(statearr_23570_23715[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23716 = state_23560;
state_23560 = G__23716;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = function(state_23560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1.call(this,state_23560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__;
})()
;})(__23704,switch__23309__auto__,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
})();
var state__23366__auto__ = (function (){var statearr_23571 = f__23365__auto__.call(null);
(statearr_23571[(6)] = c__23364__auto___23708);

return statearr_23571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(__23704,c__23364__auto___23708,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
);


break;
case "async":
var c__23364__auto___23717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23704,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (__23704,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function (state_23584){
var state_val_23585 = (state_23584[(1)]);
if((state_val_23585 === (1))){
var state_23584__$1 = state_23584;
var statearr_23586_23718 = state_23584__$1;
(statearr_23586_23718[(2)] = null);

(statearr_23586_23718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (2))){
var state_23584__$1 = state_23584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23584__$1,(4),jobs);
} else {
if((state_val_23585 === (3))){
var inst_23582 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23584__$1,inst_23582);
} else {
if((state_val_23585 === (4))){
var inst_23574 = (state_23584[(2)]);
var inst_23575 = async.call(null,inst_23574);
var state_23584__$1 = state_23584;
if(cljs.core.truth_(inst_23575)){
var statearr_23587_23719 = state_23584__$1;
(statearr_23587_23719[(1)] = (5));

} else {
var statearr_23588_23720 = state_23584__$1;
(statearr_23588_23720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (5))){
var state_23584__$1 = state_23584;
var statearr_23589_23721 = state_23584__$1;
(statearr_23589_23721[(2)] = null);

(statearr_23589_23721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (6))){
var state_23584__$1 = state_23584;
var statearr_23590_23722 = state_23584__$1;
(statearr_23590_23722[(2)] = null);

(statearr_23590_23722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (7))){
var inst_23580 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23591_23723 = state_23584__$1;
(statearr_23591_23723[(2)] = inst_23580);

(statearr_23591_23723[(1)] = (3));


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
});})(__23704,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
;
return ((function (__23704,switch__23309__auto__,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_23592 = [null,null,null,null,null,null,null];
(statearr_23592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__);

(statearr_23592[(1)] = (1));

return statearr_23592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1 = (function (state_23584){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23593){if((e23593 instanceof Object)){
var ex__23313__auto__ = e23593;
var statearr_23594_23724 = state_23584;
(statearr_23594_23724[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23725 = state_23584;
state_23584 = G__23725;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = function(state_23584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1.call(this,state_23584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__;
})()
;})(__23704,switch__23309__auto__,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
})();
var state__23366__auto__ = (function (){var statearr_23595 = f__23365__auto__.call(null);
(statearr_23595[(6)] = c__23364__auto___23717);

return statearr_23595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(__23704,c__23364__auto___23717,G__23547_23705,G__23547_23706__$1,n__4376__auto___23703,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23547_23706__$1)].join('')));

}

var G__23726 = (__23704 + (1));
__23704 = G__23726;
continue;
} else {
}
break;
}

var c__23364__auto___23727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___23727,jobs,results,process,async){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___23727,jobs,results,process,async){
return (function (state_23617){
var state_val_23618 = (state_23617[(1)]);
if((state_val_23618 === (1))){
var state_23617__$1 = state_23617;
var statearr_23619_23728 = state_23617__$1;
(statearr_23619_23728[(2)] = null);

(statearr_23619_23728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (2))){
var state_23617__$1 = state_23617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23617__$1,(4),from);
} else {
if((state_val_23618 === (3))){
var inst_23615 = (state_23617[(2)]);
var state_23617__$1 = state_23617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23617__$1,inst_23615);
} else {
if((state_val_23618 === (4))){
var inst_23598 = (state_23617[(7)]);
var inst_23598__$1 = (state_23617[(2)]);
var inst_23599 = (inst_23598__$1 == null);
var state_23617__$1 = (function (){var statearr_23620 = state_23617;
(statearr_23620[(7)] = inst_23598__$1);

return statearr_23620;
})();
if(cljs.core.truth_(inst_23599)){
var statearr_23621_23729 = state_23617__$1;
(statearr_23621_23729[(1)] = (5));

} else {
var statearr_23622_23730 = state_23617__$1;
(statearr_23622_23730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (5))){
var inst_23601 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23617__$1 = state_23617;
var statearr_23623_23731 = state_23617__$1;
(statearr_23623_23731[(2)] = inst_23601);

(statearr_23623_23731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (6))){
var inst_23598 = (state_23617[(7)]);
var inst_23603 = (state_23617[(8)]);
var inst_23603__$1 = cljs.core.async.chan.call(null,(1));
var inst_23604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23605 = [inst_23598,inst_23603__$1];
var inst_23606 = (new cljs.core.PersistentVector(null,2,(5),inst_23604,inst_23605,null));
var state_23617__$1 = (function (){var statearr_23624 = state_23617;
(statearr_23624[(8)] = inst_23603__$1);

return statearr_23624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23617__$1,(8),jobs,inst_23606);
} else {
if((state_val_23618 === (7))){
var inst_23613 = (state_23617[(2)]);
var state_23617__$1 = state_23617;
var statearr_23625_23732 = state_23617__$1;
(statearr_23625_23732[(2)] = inst_23613);

(statearr_23625_23732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (8))){
var inst_23603 = (state_23617[(8)]);
var inst_23608 = (state_23617[(2)]);
var state_23617__$1 = (function (){var statearr_23626 = state_23617;
(statearr_23626[(9)] = inst_23608);

return statearr_23626;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23617__$1,(9),results,inst_23603);
} else {
if((state_val_23618 === (9))){
var inst_23610 = (state_23617[(2)]);
var state_23617__$1 = (function (){var statearr_23627 = state_23617;
(statearr_23627[(10)] = inst_23610);

return statearr_23627;
})();
var statearr_23628_23733 = state_23617__$1;
(statearr_23628_23733[(2)] = null);

(statearr_23628_23733[(1)] = (2));


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
});})(c__23364__auto___23727,jobs,results,process,async))
;
return ((function (switch__23309__auto__,c__23364__auto___23727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_23629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__);

(statearr_23629[(1)] = (1));

return statearr_23629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1 = (function (state_23617){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23630){if((e23630 instanceof Object)){
var ex__23313__auto__ = e23630;
var statearr_23631_23734 = state_23617;
(statearr_23631_23734[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23735 = state_23617;
state_23617 = G__23735;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = function(state_23617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1.call(this,state_23617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___23727,jobs,results,process,async))
})();
var state__23366__auto__ = (function (){var statearr_23632 = f__23365__auto__.call(null);
(statearr_23632[(6)] = c__23364__auto___23727);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___23727,jobs,results,process,async))
);


var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__,jobs,results,process,async){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__,jobs,results,process,async){
return (function (state_23670){
var state_val_23671 = (state_23670[(1)]);
if((state_val_23671 === (7))){
var inst_23666 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
var statearr_23672_23736 = state_23670__$1;
(statearr_23672_23736[(2)] = inst_23666);

(statearr_23672_23736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (20))){
var state_23670__$1 = state_23670;
var statearr_23673_23737 = state_23670__$1;
(statearr_23673_23737[(2)] = null);

(statearr_23673_23737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (1))){
var state_23670__$1 = state_23670;
var statearr_23674_23738 = state_23670__$1;
(statearr_23674_23738[(2)] = null);

(statearr_23674_23738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (4))){
var inst_23635 = (state_23670[(7)]);
var inst_23635__$1 = (state_23670[(2)]);
var inst_23636 = (inst_23635__$1 == null);
var state_23670__$1 = (function (){var statearr_23675 = state_23670;
(statearr_23675[(7)] = inst_23635__$1);

return statearr_23675;
})();
if(cljs.core.truth_(inst_23636)){
var statearr_23676_23739 = state_23670__$1;
(statearr_23676_23739[(1)] = (5));

} else {
var statearr_23677_23740 = state_23670__$1;
(statearr_23677_23740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (15))){
var inst_23648 = (state_23670[(8)]);
var state_23670__$1 = state_23670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23670__$1,(18),to,inst_23648);
} else {
if((state_val_23671 === (21))){
var inst_23661 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
var statearr_23678_23741 = state_23670__$1;
(statearr_23678_23741[(2)] = inst_23661);

(statearr_23678_23741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (13))){
var inst_23663 = (state_23670[(2)]);
var state_23670__$1 = (function (){var statearr_23679 = state_23670;
(statearr_23679[(9)] = inst_23663);

return statearr_23679;
})();
var statearr_23680_23742 = state_23670__$1;
(statearr_23680_23742[(2)] = null);

(statearr_23680_23742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (6))){
var inst_23635 = (state_23670[(7)]);
var state_23670__$1 = state_23670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23670__$1,(11),inst_23635);
} else {
if((state_val_23671 === (17))){
var inst_23656 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
if(cljs.core.truth_(inst_23656)){
var statearr_23681_23743 = state_23670__$1;
(statearr_23681_23743[(1)] = (19));

} else {
var statearr_23682_23744 = state_23670__$1;
(statearr_23682_23744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (3))){
var inst_23668 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23670__$1,inst_23668);
} else {
if((state_val_23671 === (12))){
var inst_23645 = (state_23670[(10)]);
var state_23670__$1 = state_23670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23670__$1,(14),inst_23645);
} else {
if((state_val_23671 === (2))){
var state_23670__$1 = state_23670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23670__$1,(4),results);
} else {
if((state_val_23671 === (19))){
var state_23670__$1 = state_23670;
var statearr_23683_23745 = state_23670__$1;
(statearr_23683_23745[(2)] = null);

(statearr_23683_23745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (11))){
var inst_23645 = (state_23670[(2)]);
var state_23670__$1 = (function (){var statearr_23684 = state_23670;
(statearr_23684[(10)] = inst_23645);

return statearr_23684;
})();
var statearr_23685_23746 = state_23670__$1;
(statearr_23685_23746[(2)] = null);

(statearr_23685_23746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (9))){
var state_23670__$1 = state_23670;
var statearr_23686_23747 = state_23670__$1;
(statearr_23686_23747[(2)] = null);

(statearr_23686_23747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (5))){
var state_23670__$1 = state_23670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23687_23748 = state_23670__$1;
(statearr_23687_23748[(1)] = (8));

} else {
var statearr_23688_23749 = state_23670__$1;
(statearr_23688_23749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (14))){
var inst_23650 = (state_23670[(11)]);
var inst_23648 = (state_23670[(8)]);
var inst_23648__$1 = (state_23670[(2)]);
var inst_23649 = (inst_23648__$1 == null);
var inst_23650__$1 = cljs.core.not.call(null,inst_23649);
var state_23670__$1 = (function (){var statearr_23689 = state_23670;
(statearr_23689[(11)] = inst_23650__$1);

(statearr_23689[(8)] = inst_23648__$1);

return statearr_23689;
})();
if(inst_23650__$1){
var statearr_23690_23750 = state_23670__$1;
(statearr_23690_23750[(1)] = (15));

} else {
var statearr_23691_23751 = state_23670__$1;
(statearr_23691_23751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (16))){
var inst_23650 = (state_23670[(11)]);
var state_23670__$1 = state_23670;
var statearr_23692_23752 = state_23670__$1;
(statearr_23692_23752[(2)] = inst_23650);

(statearr_23692_23752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (10))){
var inst_23642 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
var statearr_23693_23753 = state_23670__$1;
(statearr_23693_23753[(2)] = inst_23642);

(statearr_23693_23753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (18))){
var inst_23653 = (state_23670[(2)]);
var state_23670__$1 = state_23670;
var statearr_23694_23754 = state_23670__$1;
(statearr_23694_23754[(2)] = inst_23653);

(statearr_23694_23754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23671 === (8))){
var inst_23639 = cljs.core.async.close_BANG_.call(null,to);
var state_23670__$1 = state_23670;
var statearr_23695_23755 = state_23670__$1;
(statearr_23695_23755[(2)] = inst_23639);

(statearr_23695_23755[(1)] = (10));


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
}
});})(c__23364__auto__,jobs,results,process,async))
;
return ((function (switch__23309__auto__,c__23364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_23696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__);

(statearr_23696[(1)] = (1));

return statearr_23696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1 = (function (state_23670){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23697){if((e23697 instanceof Object)){
var ex__23313__auto__ = e23697;
var statearr_23698_23756 = state_23670;
(statearr_23698_23756[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23757 = state_23670;
state_23670 = G__23757;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__ = function(state_23670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1.call(this,state_23670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__,jobs,results,process,async))
})();
var state__23366__auto__ = (function (){var statearr_23699 = f__23365__auto__.call(null);
(statearr_23699[(6)] = c__23364__auto__);

return statearr_23699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__,jobs,results,process,async))
);

return c__23364__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23759 = arguments.length;
switch (G__23759) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23762 = arguments.length;
switch (G__23762) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23765 = arguments.length;
switch (G__23765) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23364__auto___23814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___23814,tc,fc){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___23814,tc,fc){
return (function (state_23791){
var state_val_23792 = (state_23791[(1)]);
if((state_val_23792 === (7))){
var inst_23787 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23793_23815 = state_23791__$1;
(statearr_23793_23815[(2)] = inst_23787);

(statearr_23793_23815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (1))){
var state_23791__$1 = state_23791;
var statearr_23794_23816 = state_23791__$1;
(statearr_23794_23816[(2)] = null);

(statearr_23794_23816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (4))){
var inst_23768 = (state_23791[(7)]);
var inst_23768__$1 = (state_23791[(2)]);
var inst_23769 = (inst_23768__$1 == null);
var state_23791__$1 = (function (){var statearr_23795 = state_23791;
(statearr_23795[(7)] = inst_23768__$1);

return statearr_23795;
})();
if(cljs.core.truth_(inst_23769)){
var statearr_23796_23817 = state_23791__$1;
(statearr_23796_23817[(1)] = (5));

} else {
var statearr_23797_23818 = state_23791__$1;
(statearr_23797_23818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (13))){
var state_23791__$1 = state_23791;
var statearr_23798_23819 = state_23791__$1;
(statearr_23798_23819[(2)] = null);

(statearr_23798_23819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (6))){
var inst_23768 = (state_23791[(7)]);
var inst_23774 = p.call(null,inst_23768);
var state_23791__$1 = state_23791;
if(cljs.core.truth_(inst_23774)){
var statearr_23799_23820 = state_23791__$1;
(statearr_23799_23820[(1)] = (9));

} else {
var statearr_23800_23821 = state_23791__$1;
(statearr_23800_23821[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (3))){
var inst_23789 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23791__$1,inst_23789);
} else {
if((state_val_23792 === (12))){
var state_23791__$1 = state_23791;
var statearr_23801_23822 = state_23791__$1;
(statearr_23801_23822[(2)] = null);

(statearr_23801_23822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (2))){
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23791__$1,(4),ch);
} else {
if((state_val_23792 === (11))){
var inst_23768 = (state_23791[(7)]);
var inst_23778 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23791__$1,(8),inst_23778,inst_23768);
} else {
if((state_val_23792 === (9))){
var state_23791__$1 = state_23791;
var statearr_23802_23823 = state_23791__$1;
(statearr_23802_23823[(2)] = tc);

(statearr_23802_23823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (5))){
var inst_23771 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23772 = cljs.core.async.close_BANG_.call(null,fc);
var state_23791__$1 = (function (){var statearr_23803 = state_23791;
(statearr_23803[(8)] = inst_23771);

return statearr_23803;
})();
var statearr_23804_23824 = state_23791__$1;
(statearr_23804_23824[(2)] = inst_23772);

(statearr_23804_23824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (14))){
var inst_23785 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23805_23825 = state_23791__$1;
(statearr_23805_23825[(2)] = inst_23785);

(statearr_23805_23825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (10))){
var state_23791__$1 = state_23791;
var statearr_23806_23826 = state_23791__$1;
(statearr_23806_23826[(2)] = fc);

(statearr_23806_23826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (8))){
var inst_23780 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
if(cljs.core.truth_(inst_23780)){
var statearr_23807_23827 = state_23791__$1;
(statearr_23807_23827[(1)] = (12));

} else {
var statearr_23808_23828 = state_23791__$1;
(statearr_23808_23828[(1)] = (13));

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
});})(c__23364__auto___23814,tc,fc))
;
return ((function (switch__23309__auto__,c__23364__auto___23814,tc,fc){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_23809 = [null,null,null,null,null,null,null,null,null];
(statearr_23809[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_23809[(1)] = (1));

return statearr_23809;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_23791){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23810){if((e23810 instanceof Object)){
var ex__23313__auto__ = e23810;
var statearr_23811_23829 = state_23791;
(statearr_23811_23829[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23830 = state_23791;
state_23791 = G__23830;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_23791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_23791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___23814,tc,fc))
})();
var state__23366__auto__ = (function (){var statearr_23812 = f__23365__auto__.call(null);
(statearr_23812[(6)] = c__23364__auto___23814);

return statearr_23812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___23814,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__){
return (function (state_23851){
var state_val_23852 = (state_23851[(1)]);
if((state_val_23852 === (7))){
var inst_23847 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
var statearr_23853_23871 = state_23851__$1;
(statearr_23853_23871[(2)] = inst_23847);

(statearr_23853_23871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (1))){
var inst_23831 = init;
var state_23851__$1 = (function (){var statearr_23854 = state_23851;
(statearr_23854[(7)] = inst_23831);

return statearr_23854;
})();
var statearr_23855_23872 = state_23851__$1;
(statearr_23855_23872[(2)] = null);

(statearr_23855_23872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (4))){
var inst_23834 = (state_23851[(8)]);
var inst_23834__$1 = (state_23851[(2)]);
var inst_23835 = (inst_23834__$1 == null);
var state_23851__$1 = (function (){var statearr_23856 = state_23851;
(statearr_23856[(8)] = inst_23834__$1);

return statearr_23856;
})();
if(cljs.core.truth_(inst_23835)){
var statearr_23857_23873 = state_23851__$1;
(statearr_23857_23873[(1)] = (5));

} else {
var statearr_23858_23874 = state_23851__$1;
(statearr_23858_23874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (6))){
var inst_23838 = (state_23851[(9)]);
var inst_23834 = (state_23851[(8)]);
var inst_23831 = (state_23851[(7)]);
var inst_23838__$1 = f.call(null,inst_23831,inst_23834);
var inst_23839 = cljs.core.reduced_QMARK_.call(null,inst_23838__$1);
var state_23851__$1 = (function (){var statearr_23859 = state_23851;
(statearr_23859[(9)] = inst_23838__$1);

return statearr_23859;
})();
if(inst_23839){
var statearr_23860_23875 = state_23851__$1;
(statearr_23860_23875[(1)] = (8));

} else {
var statearr_23861_23876 = state_23851__$1;
(statearr_23861_23876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (3))){
var inst_23849 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23851__$1,inst_23849);
} else {
if((state_val_23852 === (2))){
var state_23851__$1 = state_23851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23851__$1,(4),ch);
} else {
if((state_val_23852 === (9))){
var inst_23838 = (state_23851[(9)]);
var inst_23831 = inst_23838;
var state_23851__$1 = (function (){var statearr_23862 = state_23851;
(statearr_23862[(7)] = inst_23831);

return statearr_23862;
})();
var statearr_23863_23877 = state_23851__$1;
(statearr_23863_23877[(2)] = null);

(statearr_23863_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (5))){
var inst_23831 = (state_23851[(7)]);
var state_23851__$1 = state_23851;
var statearr_23864_23878 = state_23851__$1;
(statearr_23864_23878[(2)] = inst_23831);

(statearr_23864_23878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (10))){
var inst_23845 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
var statearr_23865_23879 = state_23851__$1;
(statearr_23865_23879[(2)] = inst_23845);

(statearr_23865_23879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (8))){
var inst_23838 = (state_23851[(9)]);
var inst_23841 = cljs.core.deref.call(null,inst_23838);
var state_23851__$1 = state_23851;
var statearr_23866_23880 = state_23851__$1;
(statearr_23866_23880[(2)] = inst_23841);

(statearr_23866_23880[(1)] = (10));


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
});})(c__23364__auto__))
;
return ((function (switch__23309__auto__,c__23364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23310__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23310__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$reduce_$_state_machine__23310__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$reduce_$_state_machine__23310__auto____1 = (function (state_23851){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__23313__auto__ = e23868;
var statearr_23869_23881 = state_23851;
(statearr_23869_23881[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23882 = state_23851;
state_23851 = G__23882;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23310__auto__ = function(state_23851){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23310__auto____1.call(this,state_23851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23310__auto____0;
cljs$core$async$reduce_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23310__auto____1;
return cljs$core$async$reduce_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__))
})();
var state__23366__auto__ = (function (){var statearr_23870 = f__23365__auto__.call(null);
(statearr_23870[(6)] = c__23364__auto__);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__))
);

return c__23364__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__,f__$1){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__,f__$1){
return (function (state_23888){
var state_val_23889 = (state_23888[(1)]);
if((state_val_23889 === (1))){
var inst_23883 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23888__$1,(2),inst_23883);
} else {
if((state_val_23889 === (2))){
var inst_23885 = (state_23888[(2)]);
var inst_23886 = f__$1.call(null,inst_23885);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23888__$1,inst_23886);
} else {
return null;
}
}
});})(c__23364__auto__,f__$1))
;
return ((function (switch__23309__auto__,c__23364__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23310__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23310__auto____0 = (function (){
var statearr_23890 = [null,null,null,null,null,null,null];
(statearr_23890[(0)] = cljs$core$async$transduce_$_state_machine__23310__auto__);

(statearr_23890[(1)] = (1));

return statearr_23890;
});
var cljs$core$async$transduce_$_state_machine__23310__auto____1 = (function (state_23888){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object)){
var ex__23313__auto__ = e23891;
var statearr_23892_23894 = state_23888;
(statearr_23892_23894[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23895 = state_23888;
state_23888 = G__23895;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23310__auto__ = function(state_23888){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23310__auto____1.call(this,state_23888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23310__auto____0;
cljs$core$async$transduce_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23310__auto____1;
return cljs$core$async$transduce_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__,f__$1))
})();
var state__23366__auto__ = (function (){var statearr_23893 = f__23365__auto__.call(null);
(statearr_23893[(6)] = c__23364__auto__);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__,f__$1))
);

return c__23364__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23897 = arguments.length;
switch (G__23897) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__){
return (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (7))){
var inst_23904 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23924_23945 = state_23922__$1;
(statearr_23924_23945[(2)] = inst_23904);

(statearr_23924_23945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (1))){
var inst_23898 = cljs.core.seq.call(null,coll);
var inst_23899 = inst_23898;
var state_23922__$1 = (function (){var statearr_23925 = state_23922;
(statearr_23925[(7)] = inst_23899);

return statearr_23925;
})();
var statearr_23926_23946 = state_23922__$1;
(statearr_23926_23946[(2)] = null);

(statearr_23926_23946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (4))){
var inst_23899 = (state_23922[(7)]);
var inst_23902 = cljs.core.first.call(null,inst_23899);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23922__$1,(7),ch,inst_23902);
} else {
if((state_val_23923 === (13))){
var inst_23916 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23927_23947 = state_23922__$1;
(statearr_23927_23947[(2)] = inst_23916);

(statearr_23927_23947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (6))){
var inst_23907 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23907)){
var statearr_23928_23948 = state_23922__$1;
(statearr_23928_23948[(1)] = (8));

} else {
var statearr_23929_23949 = state_23922__$1;
(statearr_23929_23949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (3))){
var inst_23920 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
if((state_val_23923 === (12))){
var state_23922__$1 = state_23922;
var statearr_23930_23950 = state_23922__$1;
(statearr_23930_23950[(2)] = null);

(statearr_23930_23950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (2))){
var inst_23899 = (state_23922[(7)]);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23899)){
var statearr_23931_23951 = state_23922__$1;
(statearr_23931_23951[(1)] = (4));

} else {
var statearr_23932_23952 = state_23922__$1;
(statearr_23932_23952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (11))){
var inst_23913 = cljs.core.async.close_BANG_.call(null,ch);
var state_23922__$1 = state_23922;
var statearr_23933_23953 = state_23922__$1;
(statearr_23933_23953[(2)] = inst_23913);

(statearr_23933_23953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (9))){
var state_23922__$1 = state_23922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23934_23954 = state_23922__$1;
(statearr_23934_23954[(1)] = (11));

} else {
var statearr_23935_23955 = state_23922__$1;
(statearr_23935_23955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (5))){
var inst_23899 = (state_23922[(7)]);
var state_23922__$1 = state_23922;
var statearr_23936_23956 = state_23922__$1;
(statearr_23936_23956[(2)] = inst_23899);

(statearr_23936_23956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (10))){
var inst_23918 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23937_23957 = state_23922__$1;
(statearr_23937_23957[(2)] = inst_23918);

(statearr_23937_23957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (8))){
var inst_23899 = (state_23922[(7)]);
var inst_23909 = cljs.core.next.call(null,inst_23899);
var inst_23899__$1 = inst_23909;
var state_23922__$1 = (function (){var statearr_23938 = state_23922;
(statearr_23938[(7)] = inst_23899__$1);

return statearr_23938;
})();
var statearr_23939_23958 = state_23922__$1;
(statearr_23939_23958[(2)] = null);

(statearr_23939_23958[(1)] = (2));


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
});})(c__23364__auto__))
;
return ((function (switch__23309__auto__,c__23364__auto__){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_23940 = [null,null,null,null,null,null,null,null];
(statearr_23940[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_23940[(1)] = (1));

return statearr_23940;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_23922){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e23941){if((e23941 instanceof Object)){
var ex__23313__auto__ = e23941;
var statearr_23942_23959 = state_23922;
(statearr_23942_23959[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23960 = state_23922;
state_23922 = G__23960;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__))
})();
var state__23366__auto__ = (function (){var statearr_23943 = f__23365__auto__.call(null);
(statearr_23943[(6)] = c__23364__auto__);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__))
);

return c__23364__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23961 = (function (ch,cs,meta23962){
this.ch = ch;
this.cs = cs;
this.meta23962 = meta23962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23963,meta23962__$1){
var self__ = this;
var _23963__$1 = this;
return (new cljs.core.async.t_cljs$core$async23961(self__.ch,self__.cs,meta23962__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23963){
var self__ = this;
var _23963__$1 = this;
return self__.meta23962;
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23962","meta23962",918123521,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23961";

cljs.core.async.t_cljs$core$async23961.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23961");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23961.
 */
cljs.core.async.__GT_t_cljs$core$async23961 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23961(ch__$1,cs__$1,meta23962){
return (new cljs.core.async.t_cljs$core$async23961(ch__$1,cs__$1,meta23962));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23961(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23364__auto___24183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24183,cs,m,dchan,dctr,done){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24183,cs,m,dchan,dctr,done){
return (function (state_24098){
var state_val_24099 = (state_24098[(1)]);
if((state_val_24099 === (7))){
var inst_24094 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24100_24184 = state_24098__$1;
(statearr_24100_24184[(2)] = inst_24094);

(statearr_24100_24184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (20))){
var inst_23997 = (state_24098[(7)]);
var inst_24009 = cljs.core.first.call(null,inst_23997);
var inst_24010 = cljs.core.nth.call(null,inst_24009,(0),null);
var inst_24011 = cljs.core.nth.call(null,inst_24009,(1),null);
var state_24098__$1 = (function (){var statearr_24101 = state_24098;
(statearr_24101[(8)] = inst_24010);

return statearr_24101;
})();
if(cljs.core.truth_(inst_24011)){
var statearr_24102_24185 = state_24098__$1;
(statearr_24102_24185[(1)] = (22));

} else {
var statearr_24103_24186 = state_24098__$1;
(statearr_24103_24186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (27))){
var inst_24046 = (state_24098[(9)]);
var inst_24041 = (state_24098[(10)]);
var inst_23966 = (state_24098[(11)]);
var inst_24039 = (state_24098[(12)]);
var inst_24046__$1 = cljs.core._nth.call(null,inst_24039,inst_24041);
var inst_24047 = cljs.core.async.put_BANG_.call(null,inst_24046__$1,inst_23966,done);
var state_24098__$1 = (function (){var statearr_24104 = state_24098;
(statearr_24104[(9)] = inst_24046__$1);

return statearr_24104;
})();
if(cljs.core.truth_(inst_24047)){
var statearr_24105_24187 = state_24098__$1;
(statearr_24105_24187[(1)] = (30));

} else {
var statearr_24106_24188 = state_24098__$1;
(statearr_24106_24188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (1))){
var state_24098__$1 = state_24098;
var statearr_24107_24189 = state_24098__$1;
(statearr_24107_24189[(2)] = null);

(statearr_24107_24189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (24))){
var inst_23997 = (state_24098[(7)]);
var inst_24016 = (state_24098[(2)]);
var inst_24017 = cljs.core.next.call(null,inst_23997);
var inst_23975 = inst_24017;
var inst_23976 = null;
var inst_23977 = (0);
var inst_23978 = (0);
var state_24098__$1 = (function (){var statearr_24108 = state_24098;
(statearr_24108[(13)] = inst_23975);

(statearr_24108[(14)] = inst_23977);

(statearr_24108[(15)] = inst_23976);

(statearr_24108[(16)] = inst_23978);

(statearr_24108[(17)] = inst_24016);

return statearr_24108;
})();
var statearr_24109_24190 = state_24098__$1;
(statearr_24109_24190[(2)] = null);

(statearr_24109_24190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (39))){
var state_24098__$1 = state_24098;
var statearr_24113_24191 = state_24098__$1;
(statearr_24113_24191[(2)] = null);

(statearr_24113_24191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (4))){
var inst_23966 = (state_24098[(11)]);
var inst_23966__$1 = (state_24098[(2)]);
var inst_23967 = (inst_23966__$1 == null);
var state_24098__$1 = (function (){var statearr_24114 = state_24098;
(statearr_24114[(11)] = inst_23966__$1);

return statearr_24114;
})();
if(cljs.core.truth_(inst_23967)){
var statearr_24115_24192 = state_24098__$1;
(statearr_24115_24192[(1)] = (5));

} else {
var statearr_24116_24193 = state_24098__$1;
(statearr_24116_24193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (15))){
var inst_23975 = (state_24098[(13)]);
var inst_23977 = (state_24098[(14)]);
var inst_23976 = (state_24098[(15)]);
var inst_23978 = (state_24098[(16)]);
var inst_23993 = (state_24098[(2)]);
var inst_23994 = (inst_23978 + (1));
var tmp24110 = inst_23975;
var tmp24111 = inst_23977;
var tmp24112 = inst_23976;
var inst_23975__$1 = tmp24110;
var inst_23976__$1 = tmp24112;
var inst_23977__$1 = tmp24111;
var inst_23978__$1 = inst_23994;
var state_24098__$1 = (function (){var statearr_24117 = state_24098;
(statearr_24117[(13)] = inst_23975__$1);

(statearr_24117[(14)] = inst_23977__$1);

(statearr_24117[(15)] = inst_23976__$1);

(statearr_24117[(18)] = inst_23993);

(statearr_24117[(16)] = inst_23978__$1);

return statearr_24117;
})();
var statearr_24118_24194 = state_24098__$1;
(statearr_24118_24194[(2)] = null);

(statearr_24118_24194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (21))){
var inst_24020 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24122_24195 = state_24098__$1;
(statearr_24122_24195[(2)] = inst_24020);

(statearr_24122_24195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (31))){
var inst_24046 = (state_24098[(9)]);
var inst_24050 = done.call(null,null);
var inst_24051 = cljs.core.async.untap_STAR_.call(null,m,inst_24046);
var state_24098__$1 = (function (){var statearr_24123 = state_24098;
(statearr_24123[(19)] = inst_24050);

return statearr_24123;
})();
var statearr_24124_24196 = state_24098__$1;
(statearr_24124_24196[(2)] = inst_24051);

(statearr_24124_24196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (32))){
var inst_24040 = (state_24098[(20)]);
var inst_24041 = (state_24098[(10)]);
var inst_24039 = (state_24098[(12)]);
var inst_24038 = (state_24098[(21)]);
var inst_24053 = (state_24098[(2)]);
var inst_24054 = (inst_24041 + (1));
var tmp24119 = inst_24040;
var tmp24120 = inst_24039;
var tmp24121 = inst_24038;
var inst_24038__$1 = tmp24121;
var inst_24039__$1 = tmp24120;
var inst_24040__$1 = tmp24119;
var inst_24041__$1 = inst_24054;
var state_24098__$1 = (function (){var statearr_24125 = state_24098;
(statearr_24125[(20)] = inst_24040__$1);

(statearr_24125[(10)] = inst_24041__$1);

(statearr_24125[(12)] = inst_24039__$1);

(statearr_24125[(21)] = inst_24038__$1);

(statearr_24125[(22)] = inst_24053);

return statearr_24125;
})();
var statearr_24126_24197 = state_24098__$1;
(statearr_24126_24197[(2)] = null);

(statearr_24126_24197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (40))){
var inst_24066 = (state_24098[(23)]);
var inst_24070 = done.call(null,null);
var inst_24071 = cljs.core.async.untap_STAR_.call(null,m,inst_24066);
var state_24098__$1 = (function (){var statearr_24127 = state_24098;
(statearr_24127[(24)] = inst_24070);

return statearr_24127;
})();
var statearr_24128_24198 = state_24098__$1;
(statearr_24128_24198[(2)] = inst_24071);

(statearr_24128_24198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (33))){
var inst_24057 = (state_24098[(25)]);
var inst_24059 = cljs.core.chunked_seq_QMARK_.call(null,inst_24057);
var state_24098__$1 = state_24098;
if(inst_24059){
var statearr_24129_24199 = state_24098__$1;
(statearr_24129_24199[(1)] = (36));

} else {
var statearr_24130_24200 = state_24098__$1;
(statearr_24130_24200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (13))){
var inst_23987 = (state_24098[(26)]);
var inst_23990 = cljs.core.async.close_BANG_.call(null,inst_23987);
var state_24098__$1 = state_24098;
var statearr_24131_24201 = state_24098__$1;
(statearr_24131_24201[(2)] = inst_23990);

(statearr_24131_24201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (22))){
var inst_24010 = (state_24098[(8)]);
var inst_24013 = cljs.core.async.close_BANG_.call(null,inst_24010);
var state_24098__$1 = state_24098;
var statearr_24132_24202 = state_24098__$1;
(statearr_24132_24202[(2)] = inst_24013);

(statearr_24132_24202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (36))){
var inst_24057 = (state_24098[(25)]);
var inst_24061 = cljs.core.chunk_first.call(null,inst_24057);
var inst_24062 = cljs.core.chunk_rest.call(null,inst_24057);
var inst_24063 = cljs.core.count.call(null,inst_24061);
var inst_24038 = inst_24062;
var inst_24039 = inst_24061;
var inst_24040 = inst_24063;
var inst_24041 = (0);
var state_24098__$1 = (function (){var statearr_24133 = state_24098;
(statearr_24133[(20)] = inst_24040);

(statearr_24133[(10)] = inst_24041);

(statearr_24133[(12)] = inst_24039);

(statearr_24133[(21)] = inst_24038);

return statearr_24133;
})();
var statearr_24134_24203 = state_24098__$1;
(statearr_24134_24203[(2)] = null);

(statearr_24134_24203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (41))){
var inst_24057 = (state_24098[(25)]);
var inst_24073 = (state_24098[(2)]);
var inst_24074 = cljs.core.next.call(null,inst_24057);
var inst_24038 = inst_24074;
var inst_24039 = null;
var inst_24040 = (0);
var inst_24041 = (0);
var state_24098__$1 = (function (){var statearr_24135 = state_24098;
(statearr_24135[(27)] = inst_24073);

(statearr_24135[(20)] = inst_24040);

(statearr_24135[(10)] = inst_24041);

(statearr_24135[(12)] = inst_24039);

(statearr_24135[(21)] = inst_24038);

return statearr_24135;
})();
var statearr_24136_24204 = state_24098__$1;
(statearr_24136_24204[(2)] = null);

(statearr_24136_24204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (43))){
var state_24098__$1 = state_24098;
var statearr_24137_24205 = state_24098__$1;
(statearr_24137_24205[(2)] = null);

(statearr_24137_24205[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (29))){
var inst_24082 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24138_24206 = state_24098__$1;
(statearr_24138_24206[(2)] = inst_24082);

(statearr_24138_24206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (44))){
var inst_24091 = (state_24098[(2)]);
var state_24098__$1 = (function (){var statearr_24139 = state_24098;
(statearr_24139[(28)] = inst_24091);

return statearr_24139;
})();
var statearr_24140_24207 = state_24098__$1;
(statearr_24140_24207[(2)] = null);

(statearr_24140_24207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (6))){
var inst_24030 = (state_24098[(29)]);
var inst_24029 = cljs.core.deref.call(null,cs);
var inst_24030__$1 = cljs.core.keys.call(null,inst_24029);
var inst_24031 = cljs.core.count.call(null,inst_24030__$1);
var inst_24032 = cljs.core.reset_BANG_.call(null,dctr,inst_24031);
var inst_24037 = cljs.core.seq.call(null,inst_24030__$1);
var inst_24038 = inst_24037;
var inst_24039 = null;
var inst_24040 = (0);
var inst_24041 = (0);
var state_24098__$1 = (function (){var statearr_24141 = state_24098;
(statearr_24141[(29)] = inst_24030__$1);

(statearr_24141[(20)] = inst_24040);

(statearr_24141[(10)] = inst_24041);

(statearr_24141[(30)] = inst_24032);

(statearr_24141[(12)] = inst_24039);

(statearr_24141[(21)] = inst_24038);

return statearr_24141;
})();
var statearr_24142_24208 = state_24098__$1;
(statearr_24142_24208[(2)] = null);

(statearr_24142_24208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (28))){
var inst_24057 = (state_24098[(25)]);
var inst_24038 = (state_24098[(21)]);
var inst_24057__$1 = cljs.core.seq.call(null,inst_24038);
var state_24098__$1 = (function (){var statearr_24143 = state_24098;
(statearr_24143[(25)] = inst_24057__$1);

return statearr_24143;
})();
if(inst_24057__$1){
var statearr_24144_24209 = state_24098__$1;
(statearr_24144_24209[(1)] = (33));

} else {
var statearr_24145_24210 = state_24098__$1;
(statearr_24145_24210[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (25))){
var inst_24040 = (state_24098[(20)]);
var inst_24041 = (state_24098[(10)]);
var inst_24043 = (inst_24041 < inst_24040);
var inst_24044 = inst_24043;
var state_24098__$1 = state_24098;
if(cljs.core.truth_(inst_24044)){
var statearr_24146_24211 = state_24098__$1;
(statearr_24146_24211[(1)] = (27));

} else {
var statearr_24147_24212 = state_24098__$1;
(statearr_24147_24212[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (34))){
var state_24098__$1 = state_24098;
var statearr_24148_24213 = state_24098__$1;
(statearr_24148_24213[(2)] = null);

(statearr_24148_24213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (17))){
var state_24098__$1 = state_24098;
var statearr_24149_24214 = state_24098__$1;
(statearr_24149_24214[(2)] = null);

(statearr_24149_24214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (3))){
var inst_24096 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24098__$1,inst_24096);
} else {
if((state_val_24099 === (12))){
var inst_24025 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24150_24215 = state_24098__$1;
(statearr_24150_24215[(2)] = inst_24025);

(statearr_24150_24215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (2))){
var state_24098__$1 = state_24098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24098__$1,(4),ch);
} else {
if((state_val_24099 === (23))){
var state_24098__$1 = state_24098;
var statearr_24151_24216 = state_24098__$1;
(statearr_24151_24216[(2)] = null);

(statearr_24151_24216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (35))){
var inst_24080 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24152_24217 = state_24098__$1;
(statearr_24152_24217[(2)] = inst_24080);

(statearr_24152_24217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (19))){
var inst_23997 = (state_24098[(7)]);
var inst_24001 = cljs.core.chunk_first.call(null,inst_23997);
var inst_24002 = cljs.core.chunk_rest.call(null,inst_23997);
var inst_24003 = cljs.core.count.call(null,inst_24001);
var inst_23975 = inst_24002;
var inst_23976 = inst_24001;
var inst_23977 = inst_24003;
var inst_23978 = (0);
var state_24098__$1 = (function (){var statearr_24153 = state_24098;
(statearr_24153[(13)] = inst_23975);

(statearr_24153[(14)] = inst_23977);

(statearr_24153[(15)] = inst_23976);

(statearr_24153[(16)] = inst_23978);

return statearr_24153;
})();
var statearr_24154_24218 = state_24098__$1;
(statearr_24154_24218[(2)] = null);

(statearr_24154_24218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (11))){
var inst_23975 = (state_24098[(13)]);
var inst_23997 = (state_24098[(7)]);
var inst_23997__$1 = cljs.core.seq.call(null,inst_23975);
var state_24098__$1 = (function (){var statearr_24155 = state_24098;
(statearr_24155[(7)] = inst_23997__$1);

return statearr_24155;
})();
if(inst_23997__$1){
var statearr_24156_24219 = state_24098__$1;
(statearr_24156_24219[(1)] = (16));

} else {
var statearr_24157_24220 = state_24098__$1;
(statearr_24157_24220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (9))){
var inst_24027 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24158_24221 = state_24098__$1;
(statearr_24158_24221[(2)] = inst_24027);

(statearr_24158_24221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (5))){
var inst_23973 = cljs.core.deref.call(null,cs);
var inst_23974 = cljs.core.seq.call(null,inst_23973);
var inst_23975 = inst_23974;
var inst_23976 = null;
var inst_23977 = (0);
var inst_23978 = (0);
var state_24098__$1 = (function (){var statearr_24159 = state_24098;
(statearr_24159[(13)] = inst_23975);

(statearr_24159[(14)] = inst_23977);

(statearr_24159[(15)] = inst_23976);

(statearr_24159[(16)] = inst_23978);

return statearr_24159;
})();
var statearr_24160_24222 = state_24098__$1;
(statearr_24160_24222[(2)] = null);

(statearr_24160_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (14))){
var state_24098__$1 = state_24098;
var statearr_24161_24223 = state_24098__$1;
(statearr_24161_24223[(2)] = null);

(statearr_24161_24223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (45))){
var inst_24088 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24162_24224 = state_24098__$1;
(statearr_24162_24224[(2)] = inst_24088);

(statearr_24162_24224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (26))){
var inst_24030 = (state_24098[(29)]);
var inst_24084 = (state_24098[(2)]);
var inst_24085 = cljs.core.seq.call(null,inst_24030);
var state_24098__$1 = (function (){var statearr_24163 = state_24098;
(statearr_24163[(31)] = inst_24084);

return statearr_24163;
})();
if(inst_24085){
var statearr_24164_24225 = state_24098__$1;
(statearr_24164_24225[(1)] = (42));

} else {
var statearr_24165_24226 = state_24098__$1;
(statearr_24165_24226[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (16))){
var inst_23997 = (state_24098[(7)]);
var inst_23999 = cljs.core.chunked_seq_QMARK_.call(null,inst_23997);
var state_24098__$1 = state_24098;
if(inst_23999){
var statearr_24166_24227 = state_24098__$1;
(statearr_24166_24227[(1)] = (19));

} else {
var statearr_24167_24228 = state_24098__$1;
(statearr_24167_24228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (38))){
var inst_24077 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24168_24229 = state_24098__$1;
(statearr_24168_24229[(2)] = inst_24077);

(statearr_24168_24229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (30))){
var state_24098__$1 = state_24098;
var statearr_24169_24230 = state_24098__$1;
(statearr_24169_24230[(2)] = null);

(statearr_24169_24230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (10))){
var inst_23976 = (state_24098[(15)]);
var inst_23978 = (state_24098[(16)]);
var inst_23986 = cljs.core._nth.call(null,inst_23976,inst_23978);
var inst_23987 = cljs.core.nth.call(null,inst_23986,(0),null);
var inst_23988 = cljs.core.nth.call(null,inst_23986,(1),null);
var state_24098__$1 = (function (){var statearr_24170 = state_24098;
(statearr_24170[(26)] = inst_23987);

return statearr_24170;
})();
if(cljs.core.truth_(inst_23988)){
var statearr_24171_24231 = state_24098__$1;
(statearr_24171_24231[(1)] = (13));

} else {
var statearr_24172_24232 = state_24098__$1;
(statearr_24172_24232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (18))){
var inst_24023 = (state_24098[(2)]);
var state_24098__$1 = state_24098;
var statearr_24173_24233 = state_24098__$1;
(statearr_24173_24233[(2)] = inst_24023);

(statearr_24173_24233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (42))){
var state_24098__$1 = state_24098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24098__$1,(45),dchan);
} else {
if((state_val_24099 === (37))){
var inst_24057 = (state_24098[(25)]);
var inst_23966 = (state_24098[(11)]);
var inst_24066 = (state_24098[(23)]);
var inst_24066__$1 = cljs.core.first.call(null,inst_24057);
var inst_24067 = cljs.core.async.put_BANG_.call(null,inst_24066__$1,inst_23966,done);
var state_24098__$1 = (function (){var statearr_24174 = state_24098;
(statearr_24174[(23)] = inst_24066__$1);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24067)){
var statearr_24175_24234 = state_24098__$1;
(statearr_24175_24234[(1)] = (39));

} else {
var statearr_24176_24235 = state_24098__$1;
(statearr_24176_24235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24099 === (8))){
var inst_23977 = (state_24098[(14)]);
var inst_23978 = (state_24098[(16)]);
var inst_23980 = (inst_23978 < inst_23977);
var inst_23981 = inst_23980;
var state_24098__$1 = state_24098;
if(cljs.core.truth_(inst_23981)){
var statearr_24177_24236 = state_24098__$1;
(statearr_24177_24236[(1)] = (10));

} else {
var statearr_24178_24237 = state_24098__$1;
(statearr_24178_24237[(1)] = (11));

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
});})(c__23364__auto___24183,cs,m,dchan,dctr,done))
;
return ((function (switch__23309__auto__,c__23364__auto___24183,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23310__auto__ = null;
var cljs$core$async$mult_$_state_machine__23310__auto____0 = (function (){
var statearr_24179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24179[(0)] = cljs$core$async$mult_$_state_machine__23310__auto__);

(statearr_24179[(1)] = (1));

return statearr_24179;
});
var cljs$core$async$mult_$_state_machine__23310__auto____1 = (function (state_24098){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24180){if((e24180 instanceof Object)){
var ex__23313__auto__ = e24180;
var statearr_24181_24238 = state_24098;
(statearr_24181_24238[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24239 = state_24098;
state_24098 = G__24239;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23310__auto__ = function(state_24098){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23310__auto____1.call(this,state_24098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23310__auto____0;
cljs$core$async$mult_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23310__auto____1;
return cljs$core$async$mult_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24183,cs,m,dchan,dctr,done))
})();
var state__23366__auto__ = (function (){var statearr_24182 = f__23365__auto__.call(null);
(statearr_24182[(6)] = c__23364__auto___24183);

return statearr_24182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24183,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24241 = arguments.length;
switch (G__24241) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24253 = arguments.length;
var i__4500__auto___24254 = (0);
while(true){
if((i__4500__auto___24254 < len__4499__auto___24253)){
args__4502__auto__.push((arguments[i__4500__auto___24254]));

var G__24255 = (i__4500__auto___24254 + (1));
i__4500__auto___24254 = G__24255;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24247){
var map__24248 = p__24247;
var map__24248__$1 = ((((!((map__24248 == null)))?(((((map__24248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24248):map__24248);
var opts = map__24248__$1;
var statearr_24250_24256 = state;
(statearr_24250_24256[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24248,map__24248__$1,opts){
return (function (val){
var statearr_24251_24257 = state;
(statearr_24251_24257[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24248,map__24248__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24252_24258 = state;
(statearr_24252_24258[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24243){
var G__24244 = cljs.core.first.call(null,seq24243);
var seq24243__$1 = cljs.core.next.call(null,seq24243);
var G__24245 = cljs.core.first.call(null,seq24243__$1);
var seq24243__$2 = cljs.core.next.call(null,seq24243__$1);
var G__24246 = cljs.core.first.call(null,seq24243__$2);
var seq24243__$3 = cljs.core.next.call(null,seq24243__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24244,G__24245,G__24246,seq24243__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24259 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24260){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24260 = meta24260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24261,meta24260__$1){
var self__ = this;
var _24261__$1 = this;
return (new cljs.core.async.t_cljs$core$async24259(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24260__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24261){
var self__ = this;
var _24261__$1 = this;
return self__.meta24260;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24260","meta24260",864504816,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24259";

cljs.core.async.t_cljs$core$async24259.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24259");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24259.
 */
cljs.core.async.__GT_t_cljs$core$async24259 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24259(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24260){
return (new cljs.core.async.t_cljs$core$async24259(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24260));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24259(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23364__auto___24423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24363){
var state_val_24364 = (state_24363[(1)]);
if((state_val_24364 === (7))){
var inst_24278 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24365_24424 = state_24363__$1;
(statearr_24365_24424[(2)] = inst_24278);

(statearr_24365_24424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (20))){
var inst_24290 = (state_24363[(7)]);
var state_24363__$1 = state_24363;
var statearr_24366_24425 = state_24363__$1;
(statearr_24366_24425[(2)] = inst_24290);

(statearr_24366_24425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (27))){
var state_24363__$1 = state_24363;
var statearr_24367_24426 = state_24363__$1;
(statearr_24367_24426[(2)] = null);

(statearr_24367_24426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (1))){
var inst_24265 = (state_24363[(8)]);
var inst_24265__$1 = calc_state.call(null);
var inst_24267 = (inst_24265__$1 == null);
var inst_24268 = cljs.core.not.call(null,inst_24267);
var state_24363__$1 = (function (){var statearr_24368 = state_24363;
(statearr_24368[(8)] = inst_24265__$1);

return statearr_24368;
})();
if(inst_24268){
var statearr_24369_24427 = state_24363__$1;
(statearr_24369_24427[(1)] = (2));

} else {
var statearr_24370_24428 = state_24363__$1;
(statearr_24370_24428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (24))){
var inst_24314 = (state_24363[(9)]);
var inst_24337 = (state_24363[(10)]);
var inst_24323 = (state_24363[(11)]);
var inst_24337__$1 = inst_24314.call(null,inst_24323);
var state_24363__$1 = (function (){var statearr_24371 = state_24363;
(statearr_24371[(10)] = inst_24337__$1);

return statearr_24371;
})();
if(cljs.core.truth_(inst_24337__$1)){
var statearr_24372_24429 = state_24363__$1;
(statearr_24372_24429[(1)] = (29));

} else {
var statearr_24373_24430 = state_24363__$1;
(statearr_24373_24430[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (4))){
var inst_24281 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24281)){
var statearr_24374_24431 = state_24363__$1;
(statearr_24374_24431[(1)] = (8));

} else {
var statearr_24375_24432 = state_24363__$1;
(statearr_24375_24432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (15))){
var inst_24308 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24308)){
var statearr_24376_24433 = state_24363__$1;
(statearr_24376_24433[(1)] = (19));

} else {
var statearr_24377_24434 = state_24363__$1;
(statearr_24377_24434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (21))){
var inst_24313 = (state_24363[(12)]);
var inst_24313__$1 = (state_24363[(2)]);
var inst_24314 = cljs.core.get.call(null,inst_24313__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24315 = cljs.core.get.call(null,inst_24313__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24316 = cljs.core.get.call(null,inst_24313__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24363__$1 = (function (){var statearr_24378 = state_24363;
(statearr_24378[(9)] = inst_24314);

(statearr_24378[(12)] = inst_24313__$1);

(statearr_24378[(13)] = inst_24315);

return statearr_24378;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24363__$1,(22),inst_24316);
} else {
if((state_val_24364 === (31))){
var inst_24345 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24345)){
var statearr_24379_24435 = state_24363__$1;
(statearr_24379_24435[(1)] = (32));

} else {
var statearr_24380_24436 = state_24363__$1;
(statearr_24380_24436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (32))){
var inst_24322 = (state_24363[(14)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24363__$1,(35),out,inst_24322);
} else {
if((state_val_24364 === (33))){
var inst_24313 = (state_24363[(12)]);
var inst_24290 = inst_24313;
var state_24363__$1 = (function (){var statearr_24381 = state_24363;
(statearr_24381[(7)] = inst_24290);

return statearr_24381;
})();
var statearr_24382_24437 = state_24363__$1;
(statearr_24382_24437[(2)] = null);

(statearr_24382_24437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (13))){
var inst_24290 = (state_24363[(7)]);
var inst_24297 = inst_24290.cljs$lang$protocol_mask$partition0$;
var inst_24298 = (inst_24297 & (64));
var inst_24299 = inst_24290.cljs$core$ISeq$;
var inst_24300 = (cljs.core.PROTOCOL_SENTINEL === inst_24299);
var inst_24301 = ((inst_24298) || (inst_24300));
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24301)){
var statearr_24383_24438 = state_24363__$1;
(statearr_24383_24438[(1)] = (16));

} else {
var statearr_24384_24439 = state_24363__$1;
(statearr_24384_24439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (22))){
var inst_24322 = (state_24363[(14)]);
var inst_24323 = (state_24363[(11)]);
var inst_24321 = (state_24363[(2)]);
var inst_24322__$1 = cljs.core.nth.call(null,inst_24321,(0),null);
var inst_24323__$1 = cljs.core.nth.call(null,inst_24321,(1),null);
var inst_24324 = (inst_24322__$1 == null);
var inst_24325 = cljs.core._EQ_.call(null,inst_24323__$1,change);
var inst_24326 = ((inst_24324) || (inst_24325));
var state_24363__$1 = (function (){var statearr_24385 = state_24363;
(statearr_24385[(14)] = inst_24322__$1);

(statearr_24385[(11)] = inst_24323__$1);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24326)){
var statearr_24386_24440 = state_24363__$1;
(statearr_24386_24440[(1)] = (23));

} else {
var statearr_24387_24441 = state_24363__$1;
(statearr_24387_24441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (36))){
var inst_24313 = (state_24363[(12)]);
var inst_24290 = inst_24313;
var state_24363__$1 = (function (){var statearr_24388 = state_24363;
(statearr_24388[(7)] = inst_24290);

return statearr_24388;
})();
var statearr_24389_24442 = state_24363__$1;
(statearr_24389_24442[(2)] = null);

(statearr_24389_24442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (29))){
var inst_24337 = (state_24363[(10)]);
var state_24363__$1 = state_24363;
var statearr_24390_24443 = state_24363__$1;
(statearr_24390_24443[(2)] = inst_24337);

(statearr_24390_24443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (6))){
var state_24363__$1 = state_24363;
var statearr_24391_24444 = state_24363__$1;
(statearr_24391_24444[(2)] = false);

(statearr_24391_24444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (28))){
var inst_24333 = (state_24363[(2)]);
var inst_24334 = calc_state.call(null);
var inst_24290 = inst_24334;
var state_24363__$1 = (function (){var statearr_24392 = state_24363;
(statearr_24392[(7)] = inst_24290);

(statearr_24392[(15)] = inst_24333);

return statearr_24392;
})();
var statearr_24393_24445 = state_24363__$1;
(statearr_24393_24445[(2)] = null);

(statearr_24393_24445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (25))){
var inst_24359 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24394_24446 = state_24363__$1;
(statearr_24394_24446[(2)] = inst_24359);

(statearr_24394_24446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (34))){
var inst_24357 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24395_24447 = state_24363__$1;
(statearr_24395_24447[(2)] = inst_24357);

(statearr_24395_24447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (17))){
var state_24363__$1 = state_24363;
var statearr_24396_24448 = state_24363__$1;
(statearr_24396_24448[(2)] = false);

(statearr_24396_24448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (3))){
var state_24363__$1 = state_24363;
var statearr_24397_24449 = state_24363__$1;
(statearr_24397_24449[(2)] = false);

(statearr_24397_24449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (12))){
var inst_24361 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24363__$1,inst_24361);
} else {
if((state_val_24364 === (2))){
var inst_24265 = (state_24363[(8)]);
var inst_24270 = inst_24265.cljs$lang$protocol_mask$partition0$;
var inst_24271 = (inst_24270 & (64));
var inst_24272 = inst_24265.cljs$core$ISeq$;
var inst_24273 = (cljs.core.PROTOCOL_SENTINEL === inst_24272);
var inst_24274 = ((inst_24271) || (inst_24273));
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24274)){
var statearr_24398_24450 = state_24363__$1;
(statearr_24398_24450[(1)] = (5));

} else {
var statearr_24399_24451 = state_24363__$1;
(statearr_24399_24451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (23))){
var inst_24322 = (state_24363[(14)]);
var inst_24328 = (inst_24322 == null);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24328)){
var statearr_24400_24452 = state_24363__$1;
(statearr_24400_24452[(1)] = (26));

} else {
var statearr_24401_24453 = state_24363__$1;
(statearr_24401_24453[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (35))){
var inst_24348 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24348)){
var statearr_24402_24454 = state_24363__$1;
(statearr_24402_24454[(1)] = (36));

} else {
var statearr_24403_24455 = state_24363__$1;
(statearr_24403_24455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (19))){
var inst_24290 = (state_24363[(7)]);
var inst_24310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24290);
var state_24363__$1 = state_24363;
var statearr_24404_24456 = state_24363__$1;
(statearr_24404_24456[(2)] = inst_24310);

(statearr_24404_24456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (11))){
var inst_24290 = (state_24363[(7)]);
var inst_24294 = (inst_24290 == null);
var inst_24295 = cljs.core.not.call(null,inst_24294);
var state_24363__$1 = state_24363;
if(inst_24295){
var statearr_24405_24457 = state_24363__$1;
(statearr_24405_24457[(1)] = (13));

} else {
var statearr_24406_24458 = state_24363__$1;
(statearr_24406_24458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (9))){
var inst_24265 = (state_24363[(8)]);
var state_24363__$1 = state_24363;
var statearr_24407_24459 = state_24363__$1;
(statearr_24407_24459[(2)] = inst_24265);

(statearr_24407_24459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (5))){
var state_24363__$1 = state_24363;
var statearr_24408_24460 = state_24363__$1;
(statearr_24408_24460[(2)] = true);

(statearr_24408_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (14))){
var state_24363__$1 = state_24363;
var statearr_24409_24461 = state_24363__$1;
(statearr_24409_24461[(2)] = false);

(statearr_24409_24461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (26))){
var inst_24323 = (state_24363[(11)]);
var inst_24330 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24323);
var state_24363__$1 = state_24363;
var statearr_24410_24462 = state_24363__$1;
(statearr_24410_24462[(2)] = inst_24330);

(statearr_24410_24462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (16))){
var state_24363__$1 = state_24363;
var statearr_24411_24463 = state_24363__$1;
(statearr_24411_24463[(2)] = true);

(statearr_24411_24463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (38))){
var inst_24353 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24412_24464 = state_24363__$1;
(statearr_24412_24464[(2)] = inst_24353);

(statearr_24412_24464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (30))){
var inst_24314 = (state_24363[(9)]);
var inst_24323 = (state_24363[(11)]);
var inst_24315 = (state_24363[(13)]);
var inst_24340 = cljs.core.empty_QMARK_.call(null,inst_24314);
var inst_24341 = inst_24315.call(null,inst_24323);
var inst_24342 = cljs.core.not.call(null,inst_24341);
var inst_24343 = ((inst_24340) && (inst_24342));
var state_24363__$1 = state_24363;
var statearr_24413_24465 = state_24363__$1;
(statearr_24413_24465[(2)] = inst_24343);

(statearr_24413_24465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (10))){
var inst_24265 = (state_24363[(8)]);
var inst_24286 = (state_24363[(2)]);
var inst_24287 = cljs.core.get.call(null,inst_24286,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24288 = cljs.core.get.call(null,inst_24286,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24289 = cljs.core.get.call(null,inst_24286,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24290 = inst_24265;
var state_24363__$1 = (function (){var statearr_24414 = state_24363;
(statearr_24414[(16)] = inst_24289);

(statearr_24414[(7)] = inst_24290);

(statearr_24414[(17)] = inst_24288);

(statearr_24414[(18)] = inst_24287);

return statearr_24414;
})();
var statearr_24415_24466 = state_24363__$1;
(statearr_24415_24466[(2)] = null);

(statearr_24415_24466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (18))){
var inst_24305 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24416_24467 = state_24363__$1;
(statearr_24416_24467[(2)] = inst_24305);

(statearr_24416_24467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (37))){
var state_24363__$1 = state_24363;
var statearr_24417_24468 = state_24363__$1;
(statearr_24417_24468[(2)] = null);

(statearr_24417_24468[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (8))){
var inst_24265 = (state_24363[(8)]);
var inst_24283 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24265);
var state_24363__$1 = state_24363;
var statearr_24418_24469 = state_24363__$1;
(statearr_24418_24469[(2)] = inst_24283);

(statearr_24418_24469[(1)] = (10));


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
});})(c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23309__auto__,c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23310__auto__ = null;
var cljs$core$async$mix_$_state_machine__23310__auto____0 = (function (){
var statearr_24419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24419[(0)] = cljs$core$async$mix_$_state_machine__23310__auto__);

(statearr_24419[(1)] = (1));

return statearr_24419;
});
var cljs$core$async$mix_$_state_machine__23310__auto____1 = (function (state_24363){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24420){if((e24420 instanceof Object)){
var ex__23313__auto__ = e24420;
var statearr_24421_24470 = state_24363;
(statearr_24421_24470[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24471 = state_24363;
state_24363 = G__24471;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23310__auto__ = function(state_24363){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23310__auto____1.call(this,state_24363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23310__auto____0;
cljs$core$async$mix_$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23310__auto____1;
return cljs$core$async$mix_$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23366__auto__ = (function (){var statearr_24422 = f__23365__auto__.call(null);
(statearr_24422[(6)] = c__23364__auto___24423);

return statearr_24422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24473 = arguments.length;
switch (G__24473) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24477 = arguments.length;
switch (G__24477) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24475_SHARP_){
if(cljs.core.truth_(p1__24475_SHARP_.call(null,topic))){
return p1__24475_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24475_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24478 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24479){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24479 = meta24479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24480,meta24479__$1){
var self__ = this;
var _24480__$1 = this;
return (new cljs.core.async.t_cljs$core$async24478(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24479__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24480){
var self__ = this;
var _24480__$1 = this;
return self__.meta24479;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24479","meta24479",-129878969,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24478";

cljs.core.async.t_cljs$core$async24478.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24478");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24478.
 */
cljs.core.async.__GT_t_cljs$core$async24478 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24479){
return (new cljs.core.async.t_cljs$core$async24478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24479));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24478(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23364__auto___24598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24598,mults,ensure_mult,p){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24598,mults,ensure_mult,p){
return (function (state_24552){
var state_val_24553 = (state_24552[(1)]);
if((state_val_24553 === (7))){
var inst_24548 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24554_24599 = state_24552__$1;
(statearr_24554_24599[(2)] = inst_24548);

(statearr_24554_24599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (20))){
var state_24552__$1 = state_24552;
var statearr_24555_24600 = state_24552__$1;
(statearr_24555_24600[(2)] = null);

(statearr_24555_24600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (1))){
var state_24552__$1 = state_24552;
var statearr_24556_24601 = state_24552__$1;
(statearr_24556_24601[(2)] = null);

(statearr_24556_24601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (24))){
var inst_24531 = (state_24552[(7)]);
var inst_24540 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24531);
var state_24552__$1 = state_24552;
var statearr_24557_24602 = state_24552__$1;
(statearr_24557_24602[(2)] = inst_24540);

(statearr_24557_24602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (4))){
var inst_24483 = (state_24552[(8)]);
var inst_24483__$1 = (state_24552[(2)]);
var inst_24484 = (inst_24483__$1 == null);
var state_24552__$1 = (function (){var statearr_24558 = state_24552;
(statearr_24558[(8)] = inst_24483__$1);

return statearr_24558;
})();
if(cljs.core.truth_(inst_24484)){
var statearr_24559_24603 = state_24552__$1;
(statearr_24559_24603[(1)] = (5));

} else {
var statearr_24560_24604 = state_24552__$1;
(statearr_24560_24604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (15))){
var inst_24525 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24561_24605 = state_24552__$1;
(statearr_24561_24605[(2)] = inst_24525);

(statearr_24561_24605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (21))){
var inst_24545 = (state_24552[(2)]);
var state_24552__$1 = (function (){var statearr_24562 = state_24552;
(statearr_24562[(9)] = inst_24545);

return statearr_24562;
})();
var statearr_24563_24606 = state_24552__$1;
(statearr_24563_24606[(2)] = null);

(statearr_24563_24606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (13))){
var inst_24507 = (state_24552[(10)]);
var inst_24509 = cljs.core.chunked_seq_QMARK_.call(null,inst_24507);
var state_24552__$1 = state_24552;
if(inst_24509){
var statearr_24564_24607 = state_24552__$1;
(statearr_24564_24607[(1)] = (16));

} else {
var statearr_24565_24608 = state_24552__$1;
(statearr_24565_24608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (22))){
var inst_24537 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
if(cljs.core.truth_(inst_24537)){
var statearr_24566_24609 = state_24552__$1;
(statearr_24566_24609[(1)] = (23));

} else {
var statearr_24567_24610 = state_24552__$1;
(statearr_24567_24610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (6))){
var inst_24483 = (state_24552[(8)]);
var inst_24531 = (state_24552[(7)]);
var inst_24533 = (state_24552[(11)]);
var inst_24531__$1 = topic_fn.call(null,inst_24483);
var inst_24532 = cljs.core.deref.call(null,mults);
var inst_24533__$1 = cljs.core.get.call(null,inst_24532,inst_24531__$1);
var state_24552__$1 = (function (){var statearr_24568 = state_24552;
(statearr_24568[(7)] = inst_24531__$1);

(statearr_24568[(11)] = inst_24533__$1);

return statearr_24568;
})();
if(cljs.core.truth_(inst_24533__$1)){
var statearr_24569_24611 = state_24552__$1;
(statearr_24569_24611[(1)] = (19));

} else {
var statearr_24570_24612 = state_24552__$1;
(statearr_24570_24612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (25))){
var inst_24542 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24571_24613 = state_24552__$1;
(statearr_24571_24613[(2)] = inst_24542);

(statearr_24571_24613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (17))){
var inst_24507 = (state_24552[(10)]);
var inst_24516 = cljs.core.first.call(null,inst_24507);
var inst_24517 = cljs.core.async.muxch_STAR_.call(null,inst_24516);
var inst_24518 = cljs.core.async.close_BANG_.call(null,inst_24517);
var inst_24519 = cljs.core.next.call(null,inst_24507);
var inst_24493 = inst_24519;
var inst_24494 = null;
var inst_24495 = (0);
var inst_24496 = (0);
var state_24552__$1 = (function (){var statearr_24572 = state_24552;
(statearr_24572[(12)] = inst_24496);

(statearr_24572[(13)] = inst_24494);

(statearr_24572[(14)] = inst_24495);

(statearr_24572[(15)] = inst_24518);

(statearr_24572[(16)] = inst_24493);

return statearr_24572;
})();
var statearr_24573_24614 = state_24552__$1;
(statearr_24573_24614[(2)] = null);

(statearr_24573_24614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (3))){
var inst_24550 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24552__$1,inst_24550);
} else {
if((state_val_24553 === (12))){
var inst_24527 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24574_24615 = state_24552__$1;
(statearr_24574_24615[(2)] = inst_24527);

(statearr_24574_24615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (2))){
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24552__$1,(4),ch);
} else {
if((state_val_24553 === (23))){
var state_24552__$1 = state_24552;
var statearr_24575_24616 = state_24552__$1;
(statearr_24575_24616[(2)] = null);

(statearr_24575_24616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (19))){
var inst_24483 = (state_24552[(8)]);
var inst_24533 = (state_24552[(11)]);
var inst_24535 = cljs.core.async.muxch_STAR_.call(null,inst_24533);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24552__$1,(22),inst_24535,inst_24483);
} else {
if((state_val_24553 === (11))){
var inst_24507 = (state_24552[(10)]);
var inst_24493 = (state_24552[(16)]);
var inst_24507__$1 = cljs.core.seq.call(null,inst_24493);
var state_24552__$1 = (function (){var statearr_24576 = state_24552;
(statearr_24576[(10)] = inst_24507__$1);

return statearr_24576;
})();
if(inst_24507__$1){
var statearr_24577_24617 = state_24552__$1;
(statearr_24577_24617[(1)] = (13));

} else {
var statearr_24578_24618 = state_24552__$1;
(statearr_24578_24618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (9))){
var inst_24529 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24579_24619 = state_24552__$1;
(statearr_24579_24619[(2)] = inst_24529);

(statearr_24579_24619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (5))){
var inst_24490 = cljs.core.deref.call(null,mults);
var inst_24491 = cljs.core.vals.call(null,inst_24490);
var inst_24492 = cljs.core.seq.call(null,inst_24491);
var inst_24493 = inst_24492;
var inst_24494 = null;
var inst_24495 = (0);
var inst_24496 = (0);
var state_24552__$1 = (function (){var statearr_24580 = state_24552;
(statearr_24580[(12)] = inst_24496);

(statearr_24580[(13)] = inst_24494);

(statearr_24580[(14)] = inst_24495);

(statearr_24580[(16)] = inst_24493);

return statearr_24580;
})();
var statearr_24581_24620 = state_24552__$1;
(statearr_24581_24620[(2)] = null);

(statearr_24581_24620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (14))){
var state_24552__$1 = state_24552;
var statearr_24585_24621 = state_24552__$1;
(statearr_24585_24621[(2)] = null);

(statearr_24585_24621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (16))){
var inst_24507 = (state_24552[(10)]);
var inst_24511 = cljs.core.chunk_first.call(null,inst_24507);
var inst_24512 = cljs.core.chunk_rest.call(null,inst_24507);
var inst_24513 = cljs.core.count.call(null,inst_24511);
var inst_24493 = inst_24512;
var inst_24494 = inst_24511;
var inst_24495 = inst_24513;
var inst_24496 = (0);
var state_24552__$1 = (function (){var statearr_24586 = state_24552;
(statearr_24586[(12)] = inst_24496);

(statearr_24586[(13)] = inst_24494);

(statearr_24586[(14)] = inst_24495);

(statearr_24586[(16)] = inst_24493);

return statearr_24586;
})();
var statearr_24587_24622 = state_24552__$1;
(statearr_24587_24622[(2)] = null);

(statearr_24587_24622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (10))){
var inst_24496 = (state_24552[(12)]);
var inst_24494 = (state_24552[(13)]);
var inst_24495 = (state_24552[(14)]);
var inst_24493 = (state_24552[(16)]);
var inst_24501 = cljs.core._nth.call(null,inst_24494,inst_24496);
var inst_24502 = cljs.core.async.muxch_STAR_.call(null,inst_24501);
var inst_24503 = cljs.core.async.close_BANG_.call(null,inst_24502);
var inst_24504 = (inst_24496 + (1));
var tmp24582 = inst_24494;
var tmp24583 = inst_24495;
var tmp24584 = inst_24493;
var inst_24493__$1 = tmp24584;
var inst_24494__$1 = tmp24582;
var inst_24495__$1 = tmp24583;
var inst_24496__$1 = inst_24504;
var state_24552__$1 = (function (){var statearr_24588 = state_24552;
(statearr_24588[(17)] = inst_24503);

(statearr_24588[(12)] = inst_24496__$1);

(statearr_24588[(13)] = inst_24494__$1);

(statearr_24588[(14)] = inst_24495__$1);

(statearr_24588[(16)] = inst_24493__$1);

return statearr_24588;
})();
var statearr_24589_24623 = state_24552__$1;
(statearr_24589_24623[(2)] = null);

(statearr_24589_24623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (18))){
var inst_24522 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24590_24624 = state_24552__$1;
(statearr_24590_24624[(2)] = inst_24522);

(statearr_24590_24624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (8))){
var inst_24496 = (state_24552[(12)]);
var inst_24495 = (state_24552[(14)]);
var inst_24498 = (inst_24496 < inst_24495);
var inst_24499 = inst_24498;
var state_24552__$1 = state_24552;
if(cljs.core.truth_(inst_24499)){
var statearr_24591_24625 = state_24552__$1;
(statearr_24591_24625[(1)] = (10));

} else {
var statearr_24592_24626 = state_24552__$1;
(statearr_24592_24626[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23364__auto___24598,mults,ensure_mult,p))
;
return ((function (switch__23309__auto__,c__23364__auto___24598,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_24593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24593[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_24593[(1)] = (1));

return statearr_24593;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_24552){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24594){if((e24594 instanceof Object)){
var ex__23313__auto__ = e24594;
var statearr_24595_24627 = state_24552;
(statearr_24595_24627[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24628 = state_24552;
state_24552 = G__24628;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_24552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_24552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24598,mults,ensure_mult,p))
})();
var state__23366__auto__ = (function (){var statearr_24596 = f__23365__auto__.call(null);
(statearr_24596[(6)] = c__23364__auto___24598);

return statearr_24596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24598,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24630 = arguments.length;
switch (G__24630) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24633 = arguments.length;
switch (G__24633) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24636 = arguments.length;
switch (G__24636) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23364__auto___24703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24675){
var state_val_24676 = (state_24675[(1)]);
if((state_val_24676 === (7))){
var state_24675__$1 = state_24675;
var statearr_24677_24704 = state_24675__$1;
(statearr_24677_24704[(2)] = null);

(statearr_24677_24704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (1))){
var state_24675__$1 = state_24675;
var statearr_24678_24705 = state_24675__$1;
(statearr_24678_24705[(2)] = null);

(statearr_24678_24705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (4))){
var inst_24639 = (state_24675[(7)]);
var inst_24641 = (inst_24639 < cnt);
var state_24675__$1 = state_24675;
if(cljs.core.truth_(inst_24641)){
var statearr_24679_24706 = state_24675__$1;
(statearr_24679_24706[(1)] = (6));

} else {
var statearr_24680_24707 = state_24675__$1;
(statearr_24680_24707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (15))){
var inst_24671 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24681_24708 = state_24675__$1;
(statearr_24681_24708[(2)] = inst_24671);

(statearr_24681_24708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (13))){
var inst_24664 = cljs.core.async.close_BANG_.call(null,out);
var state_24675__$1 = state_24675;
var statearr_24682_24709 = state_24675__$1;
(statearr_24682_24709[(2)] = inst_24664);

(statearr_24682_24709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (6))){
var state_24675__$1 = state_24675;
var statearr_24683_24710 = state_24675__$1;
(statearr_24683_24710[(2)] = null);

(statearr_24683_24710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (3))){
var inst_24673 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24675__$1,inst_24673);
} else {
if((state_val_24676 === (12))){
var inst_24661 = (state_24675[(8)]);
var inst_24661__$1 = (state_24675[(2)]);
var inst_24662 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24661__$1);
var state_24675__$1 = (function (){var statearr_24684 = state_24675;
(statearr_24684[(8)] = inst_24661__$1);

return statearr_24684;
})();
if(cljs.core.truth_(inst_24662)){
var statearr_24685_24711 = state_24675__$1;
(statearr_24685_24711[(1)] = (13));

} else {
var statearr_24686_24712 = state_24675__$1;
(statearr_24686_24712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (2))){
var inst_24638 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24639 = (0);
var state_24675__$1 = (function (){var statearr_24687 = state_24675;
(statearr_24687[(9)] = inst_24638);

(statearr_24687[(7)] = inst_24639);

return statearr_24687;
})();
var statearr_24688_24713 = state_24675__$1;
(statearr_24688_24713[(2)] = null);

(statearr_24688_24713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (11))){
var inst_24639 = (state_24675[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24675,(10),Object,null,(9));
var inst_24648 = chs__$1.call(null,inst_24639);
var inst_24649 = done.call(null,inst_24639);
var inst_24650 = cljs.core.async.take_BANG_.call(null,inst_24648,inst_24649);
var state_24675__$1 = state_24675;
var statearr_24689_24714 = state_24675__$1;
(statearr_24689_24714[(2)] = inst_24650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (9))){
var inst_24639 = (state_24675[(7)]);
var inst_24652 = (state_24675[(2)]);
var inst_24653 = (inst_24639 + (1));
var inst_24639__$1 = inst_24653;
var state_24675__$1 = (function (){var statearr_24690 = state_24675;
(statearr_24690[(7)] = inst_24639__$1);

(statearr_24690[(10)] = inst_24652);

return statearr_24690;
})();
var statearr_24691_24715 = state_24675__$1;
(statearr_24691_24715[(2)] = null);

(statearr_24691_24715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (5))){
var inst_24659 = (state_24675[(2)]);
var state_24675__$1 = (function (){var statearr_24692 = state_24675;
(statearr_24692[(11)] = inst_24659);

return statearr_24692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24675__$1,(12),dchan);
} else {
if((state_val_24676 === (14))){
var inst_24661 = (state_24675[(8)]);
var inst_24666 = cljs.core.apply.call(null,f,inst_24661);
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24675__$1,(16),out,inst_24666);
} else {
if((state_val_24676 === (16))){
var inst_24668 = (state_24675[(2)]);
var state_24675__$1 = (function (){var statearr_24693 = state_24675;
(statearr_24693[(12)] = inst_24668);

return statearr_24693;
})();
var statearr_24694_24716 = state_24675__$1;
(statearr_24694_24716[(2)] = null);

(statearr_24694_24716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (10))){
var inst_24643 = (state_24675[(2)]);
var inst_24644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24675__$1 = (function (){var statearr_24695 = state_24675;
(statearr_24695[(13)] = inst_24643);

return statearr_24695;
})();
var statearr_24696_24717 = state_24675__$1;
(statearr_24696_24717[(2)] = inst_24644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (8))){
var inst_24657 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24697_24718 = state_24675__$1;
(statearr_24697_24718[(2)] = inst_24657);

(statearr_24697_24718[(1)] = (5));


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
});})(c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23309__auto__,c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_24698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24698[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_24698[(1)] = (1));

return statearr_24698;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_24675){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24699){if((e24699 instanceof Object)){
var ex__23313__auto__ = e24699;
var statearr_24700_24719 = state_24675;
(statearr_24700_24719[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24720 = state_24675;
state_24675 = G__24720;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23366__auto__ = (function (){var statearr_24701 = f__23365__auto__.call(null);
(statearr_24701[(6)] = c__23364__auto___24703);

return statearr_24701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24703,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24723 = arguments.length;
switch (G__24723) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___24777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24777,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24777,out){
return (function (state_24755){
var state_val_24756 = (state_24755[(1)]);
if((state_val_24756 === (7))){
var inst_24735 = (state_24755[(7)]);
var inst_24734 = (state_24755[(8)]);
var inst_24734__$1 = (state_24755[(2)]);
var inst_24735__$1 = cljs.core.nth.call(null,inst_24734__$1,(0),null);
var inst_24736 = cljs.core.nth.call(null,inst_24734__$1,(1),null);
var inst_24737 = (inst_24735__$1 == null);
var state_24755__$1 = (function (){var statearr_24757 = state_24755;
(statearr_24757[(7)] = inst_24735__$1);

(statearr_24757[(8)] = inst_24734__$1);

(statearr_24757[(9)] = inst_24736);

return statearr_24757;
})();
if(cljs.core.truth_(inst_24737)){
var statearr_24758_24778 = state_24755__$1;
(statearr_24758_24778[(1)] = (8));

} else {
var statearr_24759_24779 = state_24755__$1;
(statearr_24759_24779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (1))){
var inst_24724 = cljs.core.vec.call(null,chs);
var inst_24725 = inst_24724;
var state_24755__$1 = (function (){var statearr_24760 = state_24755;
(statearr_24760[(10)] = inst_24725);

return statearr_24760;
})();
var statearr_24761_24780 = state_24755__$1;
(statearr_24761_24780[(2)] = null);

(statearr_24761_24780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (4))){
var inst_24725 = (state_24755[(10)]);
var state_24755__$1 = state_24755;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24755__$1,(7),inst_24725);
} else {
if((state_val_24756 === (6))){
var inst_24751 = (state_24755[(2)]);
var state_24755__$1 = state_24755;
var statearr_24762_24781 = state_24755__$1;
(statearr_24762_24781[(2)] = inst_24751);

(statearr_24762_24781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (3))){
var inst_24753 = (state_24755[(2)]);
var state_24755__$1 = state_24755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24755__$1,inst_24753);
} else {
if((state_val_24756 === (2))){
var inst_24725 = (state_24755[(10)]);
var inst_24727 = cljs.core.count.call(null,inst_24725);
var inst_24728 = (inst_24727 > (0));
var state_24755__$1 = state_24755;
if(cljs.core.truth_(inst_24728)){
var statearr_24764_24782 = state_24755__$1;
(statearr_24764_24782[(1)] = (4));

} else {
var statearr_24765_24783 = state_24755__$1;
(statearr_24765_24783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (11))){
var inst_24725 = (state_24755[(10)]);
var inst_24744 = (state_24755[(2)]);
var tmp24763 = inst_24725;
var inst_24725__$1 = tmp24763;
var state_24755__$1 = (function (){var statearr_24766 = state_24755;
(statearr_24766[(11)] = inst_24744);

(statearr_24766[(10)] = inst_24725__$1);

return statearr_24766;
})();
var statearr_24767_24784 = state_24755__$1;
(statearr_24767_24784[(2)] = null);

(statearr_24767_24784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (9))){
var inst_24735 = (state_24755[(7)]);
var state_24755__$1 = state_24755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24755__$1,(11),out,inst_24735);
} else {
if((state_val_24756 === (5))){
var inst_24749 = cljs.core.async.close_BANG_.call(null,out);
var state_24755__$1 = state_24755;
var statearr_24768_24785 = state_24755__$1;
(statearr_24768_24785[(2)] = inst_24749);

(statearr_24768_24785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (10))){
var inst_24747 = (state_24755[(2)]);
var state_24755__$1 = state_24755;
var statearr_24769_24786 = state_24755__$1;
(statearr_24769_24786[(2)] = inst_24747);

(statearr_24769_24786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24756 === (8))){
var inst_24735 = (state_24755[(7)]);
var inst_24734 = (state_24755[(8)]);
var inst_24736 = (state_24755[(9)]);
var inst_24725 = (state_24755[(10)]);
var inst_24739 = (function (){var cs = inst_24725;
var vec__24730 = inst_24734;
var v = inst_24735;
var c = inst_24736;
return ((function (cs,vec__24730,v,c,inst_24735,inst_24734,inst_24736,inst_24725,state_val_24756,c__23364__auto___24777,out){
return (function (p1__24721_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24721_SHARP_);
});
;})(cs,vec__24730,v,c,inst_24735,inst_24734,inst_24736,inst_24725,state_val_24756,c__23364__auto___24777,out))
})();
var inst_24740 = cljs.core.filterv.call(null,inst_24739,inst_24725);
var inst_24725__$1 = inst_24740;
var state_24755__$1 = (function (){var statearr_24770 = state_24755;
(statearr_24770[(10)] = inst_24725__$1);

return statearr_24770;
})();
var statearr_24771_24787 = state_24755__$1;
(statearr_24771_24787[(2)] = null);

(statearr_24771_24787[(1)] = (2));


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
});})(c__23364__auto___24777,out))
;
return ((function (switch__23309__auto__,c__23364__auto___24777,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_24772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24772[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_24772[(1)] = (1));

return statearr_24772;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_24755){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24773){if((e24773 instanceof Object)){
var ex__23313__auto__ = e24773;
var statearr_24774_24788 = state_24755;
(statearr_24774_24788[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24789 = state_24755;
state_24755 = G__24789;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_24755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_24755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24777,out))
})();
var state__23366__auto__ = (function (){var statearr_24775 = f__23365__auto__.call(null);
(statearr_24775[(6)] = c__23364__auto___24777);

return statearr_24775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24777,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24791 = arguments.length;
switch (G__24791) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___24836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24836,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24836,out){
return (function (state_24815){
var state_val_24816 = (state_24815[(1)]);
if((state_val_24816 === (7))){
var inst_24797 = (state_24815[(7)]);
var inst_24797__$1 = (state_24815[(2)]);
var inst_24798 = (inst_24797__$1 == null);
var inst_24799 = cljs.core.not.call(null,inst_24798);
var state_24815__$1 = (function (){var statearr_24817 = state_24815;
(statearr_24817[(7)] = inst_24797__$1);

return statearr_24817;
})();
if(inst_24799){
var statearr_24818_24837 = state_24815__$1;
(statearr_24818_24837[(1)] = (8));

} else {
var statearr_24819_24838 = state_24815__$1;
(statearr_24819_24838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (1))){
var inst_24792 = (0);
var state_24815__$1 = (function (){var statearr_24820 = state_24815;
(statearr_24820[(8)] = inst_24792);

return statearr_24820;
})();
var statearr_24821_24839 = state_24815__$1;
(statearr_24821_24839[(2)] = null);

(statearr_24821_24839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (4))){
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24815__$1,(7),ch);
} else {
if((state_val_24816 === (6))){
var inst_24810 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
var statearr_24822_24840 = state_24815__$1;
(statearr_24822_24840[(2)] = inst_24810);

(statearr_24822_24840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (3))){
var inst_24812 = (state_24815[(2)]);
var inst_24813 = cljs.core.async.close_BANG_.call(null,out);
var state_24815__$1 = (function (){var statearr_24823 = state_24815;
(statearr_24823[(9)] = inst_24812);

return statearr_24823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24815__$1,inst_24813);
} else {
if((state_val_24816 === (2))){
var inst_24792 = (state_24815[(8)]);
var inst_24794 = (inst_24792 < n);
var state_24815__$1 = state_24815;
if(cljs.core.truth_(inst_24794)){
var statearr_24824_24841 = state_24815__$1;
(statearr_24824_24841[(1)] = (4));

} else {
var statearr_24825_24842 = state_24815__$1;
(statearr_24825_24842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (11))){
var inst_24792 = (state_24815[(8)]);
var inst_24802 = (state_24815[(2)]);
var inst_24803 = (inst_24792 + (1));
var inst_24792__$1 = inst_24803;
var state_24815__$1 = (function (){var statearr_24826 = state_24815;
(statearr_24826[(8)] = inst_24792__$1);

(statearr_24826[(10)] = inst_24802);

return statearr_24826;
})();
var statearr_24827_24843 = state_24815__$1;
(statearr_24827_24843[(2)] = null);

(statearr_24827_24843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (9))){
var state_24815__$1 = state_24815;
var statearr_24828_24844 = state_24815__$1;
(statearr_24828_24844[(2)] = null);

(statearr_24828_24844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (5))){
var state_24815__$1 = state_24815;
var statearr_24829_24845 = state_24815__$1;
(statearr_24829_24845[(2)] = null);

(statearr_24829_24845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (10))){
var inst_24807 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
var statearr_24830_24846 = state_24815__$1;
(statearr_24830_24846[(2)] = inst_24807);

(statearr_24830_24846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (8))){
var inst_24797 = (state_24815[(7)]);
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24815__$1,(11),out,inst_24797);
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
});})(c__23364__auto___24836,out))
;
return ((function (switch__23309__auto__,c__23364__auto___24836,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_24831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24831[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_24831[(1)] = (1));

return statearr_24831;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_24815){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24832){if((e24832 instanceof Object)){
var ex__23313__auto__ = e24832;
var statearr_24833_24847 = state_24815;
(statearr_24833_24847[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24848 = state_24815;
state_24815 = G__24848;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_24815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_24815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24836,out))
})();
var state__23366__auto__ = (function (){var statearr_24834 = f__23365__auto__.call(null);
(statearr_24834[(6)] = c__23364__auto___24836);

return statearr_24834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24836,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24850 = (function (f,ch,meta24851){
this.f = f;
this.ch = ch;
this.meta24851 = meta24851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24852,meta24851__$1){
var self__ = this;
var _24852__$1 = this;
return (new cljs.core.async.t_cljs$core$async24850(self__.f,self__.ch,meta24851__$1));
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24852){
var self__ = this;
var _24852__$1 = this;
return self__.meta24851;
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24853 = (function (f,ch,meta24851,_,fn1,meta24854){
this.f = f;
this.ch = ch;
this.meta24851 = meta24851;
this._ = _;
this.fn1 = fn1;
this.meta24854 = meta24854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24855,meta24854__$1){
var self__ = this;
var _24855__$1 = this;
return (new cljs.core.async.t_cljs$core$async24853(self__.f,self__.ch,self__.meta24851,self__._,self__.fn1,meta24854__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24855){
var self__ = this;
var _24855__$1 = this;
return self__.meta24854;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24849_SHARP_){
return f1.call(null,(((p1__24849_SHARP_ == null))?null:self__.f.call(null,p1__24849_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24851","meta24851",-1043550741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24850","cljs.core.async/t_cljs$core$async24850",2117026064,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24854","meta24854",-238274220,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24853";

cljs.core.async.t_cljs$core$async24853.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24853");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24853.
 */
cljs.core.async.__GT_t_cljs$core$async24853 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24853(f__$1,ch__$1,meta24851__$1,___$2,fn1__$1,meta24854){
return (new cljs.core.async.t_cljs$core$async24853(f__$1,ch__$1,meta24851__$1,___$2,fn1__$1,meta24854));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24853(self__.f,self__.ch,self__.meta24851,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24851","meta24851",-1043550741,null)], null);
});

cljs.core.async.t_cljs$core$async24850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24850";

cljs.core.async.t_cljs$core$async24850.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24850");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24850.
 */
cljs.core.async.__GT_t_cljs$core$async24850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24850(f__$1,ch__$1,meta24851){
return (new cljs.core.async.t_cljs$core$async24850(f__$1,ch__$1,meta24851));
});

}

return (new cljs.core.async.t_cljs$core$async24850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24856 = (function (f,ch,meta24857){
this.f = f;
this.ch = ch;
this.meta24857 = meta24857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24858,meta24857__$1){
var self__ = this;
var _24858__$1 = this;
return (new cljs.core.async.t_cljs$core$async24856(self__.f,self__.ch,meta24857__$1));
});

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24858){
var self__ = this;
var _24858__$1 = this;
return self__.meta24857;
});

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24857","meta24857",203019229,null)], null);
});

cljs.core.async.t_cljs$core$async24856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24856";

cljs.core.async.t_cljs$core$async24856.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24856");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24856.
 */
cljs.core.async.__GT_t_cljs$core$async24856 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24856(f__$1,ch__$1,meta24857){
return (new cljs.core.async.t_cljs$core$async24856(f__$1,ch__$1,meta24857));
});

}

return (new cljs.core.async.t_cljs$core$async24856(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24859 = (function (p,ch,meta24860){
this.p = p;
this.ch = ch;
this.meta24860 = meta24860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24861,meta24860__$1){
var self__ = this;
var _24861__$1 = this;
return (new cljs.core.async.t_cljs$core$async24859(self__.p,self__.ch,meta24860__$1));
});

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24861){
var self__ = this;
var _24861__$1 = this;
return self__.meta24860;
});

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24860","meta24860",1413476998,null)], null);
});

cljs.core.async.t_cljs$core$async24859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24859";

cljs.core.async.t_cljs$core$async24859.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24859");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24859.
 */
cljs.core.async.__GT_t_cljs$core$async24859 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24859(p__$1,ch__$1,meta24860){
return (new cljs.core.async.t_cljs$core$async24859(p__$1,ch__$1,meta24860));
});

}

return (new cljs.core.async.t_cljs$core$async24859(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24863 = arguments.length;
switch (G__24863) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___24903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___24903,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___24903,out){
return (function (state_24884){
var state_val_24885 = (state_24884[(1)]);
if((state_val_24885 === (7))){
var inst_24880 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24886_24904 = state_24884__$1;
(statearr_24886_24904[(2)] = inst_24880);

(statearr_24886_24904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (1))){
var state_24884__$1 = state_24884;
var statearr_24887_24905 = state_24884__$1;
(statearr_24887_24905[(2)] = null);

(statearr_24887_24905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (4))){
var inst_24866 = (state_24884[(7)]);
var inst_24866__$1 = (state_24884[(2)]);
var inst_24867 = (inst_24866__$1 == null);
var state_24884__$1 = (function (){var statearr_24888 = state_24884;
(statearr_24888[(7)] = inst_24866__$1);

return statearr_24888;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24889_24906 = state_24884__$1;
(statearr_24889_24906[(1)] = (5));

} else {
var statearr_24890_24907 = state_24884__$1;
(statearr_24890_24907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (6))){
var inst_24866 = (state_24884[(7)]);
var inst_24871 = p.call(null,inst_24866);
var state_24884__$1 = state_24884;
if(cljs.core.truth_(inst_24871)){
var statearr_24891_24908 = state_24884__$1;
(statearr_24891_24908[(1)] = (8));

} else {
var statearr_24892_24909 = state_24884__$1;
(statearr_24892_24909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (3))){
var inst_24882 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24884__$1,inst_24882);
} else {
if((state_val_24885 === (2))){
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24884__$1,(4),ch);
} else {
if((state_val_24885 === (11))){
var inst_24874 = (state_24884[(2)]);
var state_24884__$1 = state_24884;
var statearr_24893_24910 = state_24884__$1;
(statearr_24893_24910[(2)] = inst_24874);

(statearr_24893_24910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (9))){
var state_24884__$1 = state_24884;
var statearr_24894_24911 = state_24884__$1;
(statearr_24894_24911[(2)] = null);

(statearr_24894_24911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (5))){
var inst_24869 = cljs.core.async.close_BANG_.call(null,out);
var state_24884__$1 = state_24884;
var statearr_24895_24912 = state_24884__$1;
(statearr_24895_24912[(2)] = inst_24869);

(statearr_24895_24912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (10))){
var inst_24877 = (state_24884[(2)]);
var state_24884__$1 = (function (){var statearr_24896 = state_24884;
(statearr_24896[(8)] = inst_24877);

return statearr_24896;
})();
var statearr_24897_24913 = state_24884__$1;
(statearr_24897_24913[(2)] = null);

(statearr_24897_24913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24885 === (8))){
var inst_24866 = (state_24884[(7)]);
var state_24884__$1 = state_24884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24884__$1,(11),out,inst_24866);
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
});})(c__23364__auto___24903,out))
;
return ((function (switch__23309__auto__,c__23364__auto___24903,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_24898 = [null,null,null,null,null,null,null,null,null];
(statearr_24898[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_24898[(1)] = (1));

return statearr_24898;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_24884){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e24899){if((e24899 instanceof Object)){
var ex__23313__auto__ = e24899;
var statearr_24900_24914 = state_24884;
(statearr_24900_24914[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24915 = state_24884;
state_24884 = G__24915;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_24884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_24884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___24903,out))
})();
var state__23366__auto__ = (function (){var statearr_24901 = f__23365__auto__.call(null);
(statearr_24901[(6)] = c__23364__auto___24903);

return statearr_24901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___24903,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24917 = arguments.length;
switch (G__24917) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto__){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto__){
return (function (state_24980){
var state_val_24981 = (state_24980[(1)]);
if((state_val_24981 === (7))){
var inst_24976 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_24982_25020 = state_24980__$1;
(statearr_24982_25020[(2)] = inst_24976);

(statearr_24982_25020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (20))){
var inst_24946 = (state_24980[(7)]);
var inst_24957 = (state_24980[(2)]);
var inst_24958 = cljs.core.next.call(null,inst_24946);
var inst_24932 = inst_24958;
var inst_24933 = null;
var inst_24934 = (0);
var inst_24935 = (0);
var state_24980__$1 = (function (){var statearr_24983 = state_24980;
(statearr_24983[(8)] = inst_24957);

(statearr_24983[(9)] = inst_24935);

(statearr_24983[(10)] = inst_24934);

(statearr_24983[(11)] = inst_24933);

(statearr_24983[(12)] = inst_24932);

return statearr_24983;
})();
var statearr_24984_25021 = state_24980__$1;
(statearr_24984_25021[(2)] = null);

(statearr_24984_25021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (1))){
var state_24980__$1 = state_24980;
var statearr_24985_25022 = state_24980__$1;
(statearr_24985_25022[(2)] = null);

(statearr_24985_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (4))){
var inst_24921 = (state_24980[(13)]);
var inst_24921__$1 = (state_24980[(2)]);
var inst_24922 = (inst_24921__$1 == null);
var state_24980__$1 = (function (){var statearr_24986 = state_24980;
(statearr_24986[(13)] = inst_24921__$1);

return statearr_24986;
})();
if(cljs.core.truth_(inst_24922)){
var statearr_24987_25023 = state_24980__$1;
(statearr_24987_25023[(1)] = (5));

} else {
var statearr_24988_25024 = state_24980__$1;
(statearr_24988_25024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (15))){
var state_24980__$1 = state_24980;
var statearr_24992_25025 = state_24980__$1;
(statearr_24992_25025[(2)] = null);

(statearr_24992_25025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (21))){
var state_24980__$1 = state_24980;
var statearr_24993_25026 = state_24980__$1;
(statearr_24993_25026[(2)] = null);

(statearr_24993_25026[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (13))){
var inst_24935 = (state_24980[(9)]);
var inst_24934 = (state_24980[(10)]);
var inst_24933 = (state_24980[(11)]);
var inst_24932 = (state_24980[(12)]);
var inst_24942 = (state_24980[(2)]);
var inst_24943 = (inst_24935 + (1));
var tmp24989 = inst_24934;
var tmp24990 = inst_24933;
var tmp24991 = inst_24932;
var inst_24932__$1 = tmp24991;
var inst_24933__$1 = tmp24990;
var inst_24934__$1 = tmp24989;
var inst_24935__$1 = inst_24943;
var state_24980__$1 = (function (){var statearr_24994 = state_24980;
(statearr_24994[(9)] = inst_24935__$1);

(statearr_24994[(10)] = inst_24934__$1);

(statearr_24994[(11)] = inst_24933__$1);

(statearr_24994[(14)] = inst_24942);

(statearr_24994[(12)] = inst_24932__$1);

return statearr_24994;
})();
var statearr_24995_25027 = state_24980__$1;
(statearr_24995_25027[(2)] = null);

(statearr_24995_25027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (22))){
var state_24980__$1 = state_24980;
var statearr_24996_25028 = state_24980__$1;
(statearr_24996_25028[(2)] = null);

(statearr_24996_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (6))){
var inst_24921 = (state_24980[(13)]);
var inst_24930 = f.call(null,inst_24921);
var inst_24931 = cljs.core.seq.call(null,inst_24930);
var inst_24932 = inst_24931;
var inst_24933 = null;
var inst_24934 = (0);
var inst_24935 = (0);
var state_24980__$1 = (function (){var statearr_24997 = state_24980;
(statearr_24997[(9)] = inst_24935);

(statearr_24997[(10)] = inst_24934);

(statearr_24997[(11)] = inst_24933);

(statearr_24997[(12)] = inst_24932);

return statearr_24997;
})();
var statearr_24998_25029 = state_24980__$1;
(statearr_24998_25029[(2)] = null);

(statearr_24998_25029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (17))){
var inst_24946 = (state_24980[(7)]);
var inst_24950 = cljs.core.chunk_first.call(null,inst_24946);
var inst_24951 = cljs.core.chunk_rest.call(null,inst_24946);
var inst_24952 = cljs.core.count.call(null,inst_24950);
var inst_24932 = inst_24951;
var inst_24933 = inst_24950;
var inst_24934 = inst_24952;
var inst_24935 = (0);
var state_24980__$1 = (function (){var statearr_24999 = state_24980;
(statearr_24999[(9)] = inst_24935);

(statearr_24999[(10)] = inst_24934);

(statearr_24999[(11)] = inst_24933);

(statearr_24999[(12)] = inst_24932);

return statearr_24999;
})();
var statearr_25000_25030 = state_24980__$1;
(statearr_25000_25030[(2)] = null);

(statearr_25000_25030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (3))){
var inst_24978 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24980__$1,inst_24978);
} else {
if((state_val_24981 === (12))){
var inst_24966 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25001_25031 = state_24980__$1;
(statearr_25001_25031[(2)] = inst_24966);

(statearr_25001_25031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (2))){
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24980__$1,(4),in$);
} else {
if((state_val_24981 === (23))){
var inst_24974 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25002_25032 = state_24980__$1;
(statearr_25002_25032[(2)] = inst_24974);

(statearr_25002_25032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (19))){
var inst_24961 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25003_25033 = state_24980__$1;
(statearr_25003_25033[(2)] = inst_24961);

(statearr_25003_25033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (11))){
var inst_24946 = (state_24980[(7)]);
var inst_24932 = (state_24980[(12)]);
var inst_24946__$1 = cljs.core.seq.call(null,inst_24932);
var state_24980__$1 = (function (){var statearr_25004 = state_24980;
(statearr_25004[(7)] = inst_24946__$1);

return statearr_25004;
})();
if(inst_24946__$1){
var statearr_25005_25034 = state_24980__$1;
(statearr_25005_25034[(1)] = (14));

} else {
var statearr_25006_25035 = state_24980__$1;
(statearr_25006_25035[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (9))){
var inst_24968 = (state_24980[(2)]);
var inst_24969 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24980__$1 = (function (){var statearr_25007 = state_24980;
(statearr_25007[(15)] = inst_24968);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24969)){
var statearr_25008_25036 = state_24980__$1;
(statearr_25008_25036[(1)] = (21));

} else {
var statearr_25009_25037 = state_24980__$1;
(statearr_25009_25037[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (5))){
var inst_24924 = cljs.core.async.close_BANG_.call(null,out);
var state_24980__$1 = state_24980;
var statearr_25010_25038 = state_24980__$1;
(statearr_25010_25038[(2)] = inst_24924);

(statearr_25010_25038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (14))){
var inst_24946 = (state_24980[(7)]);
var inst_24948 = cljs.core.chunked_seq_QMARK_.call(null,inst_24946);
var state_24980__$1 = state_24980;
if(inst_24948){
var statearr_25011_25039 = state_24980__$1;
(statearr_25011_25039[(1)] = (17));

} else {
var statearr_25012_25040 = state_24980__$1;
(statearr_25012_25040[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (16))){
var inst_24964 = (state_24980[(2)]);
var state_24980__$1 = state_24980;
var statearr_25013_25041 = state_24980__$1;
(statearr_25013_25041[(2)] = inst_24964);

(statearr_25013_25041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24981 === (10))){
var inst_24935 = (state_24980[(9)]);
var inst_24933 = (state_24980[(11)]);
var inst_24940 = cljs.core._nth.call(null,inst_24933,inst_24935);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24980__$1,(13),out,inst_24940);
} else {
if((state_val_24981 === (18))){
var inst_24946 = (state_24980[(7)]);
var inst_24955 = cljs.core.first.call(null,inst_24946);
var state_24980__$1 = state_24980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24980__$1,(20),out,inst_24955);
} else {
if((state_val_24981 === (8))){
var inst_24935 = (state_24980[(9)]);
var inst_24934 = (state_24980[(10)]);
var inst_24937 = (inst_24935 < inst_24934);
var inst_24938 = inst_24937;
var state_24980__$1 = state_24980;
if(cljs.core.truth_(inst_24938)){
var statearr_25014_25042 = state_24980__$1;
(statearr_25014_25042[(1)] = (10));

} else {
var statearr_25015_25043 = state_24980__$1;
(statearr_25015_25043[(1)] = (11));

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
}
}
}
}
}
}
});})(c__23364__auto__))
;
return ((function (switch__23309__auto__,c__23364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____0 = (function (){
var statearr_25016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25016[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__);

(statearr_25016[(1)] = (1));

return statearr_25016;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____1 = (function (state_24980){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_24980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object)){
var ex__23313__auto__ = e25017;
var statearr_25018_25044 = state_24980;
(statearr_25018_25044[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25045 = state_24980;
state_24980 = G__25045;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__ = function(state_24980){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____1.call(this,state_24980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23310__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto__))
})();
var state__23366__auto__ = (function (){var statearr_25019 = f__23365__auto__.call(null);
(statearr_25019[(6)] = c__23364__auto__);

return statearr_25019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto__))
);

return c__23364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25047 = arguments.length;
switch (G__25047) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25050 = arguments.length;
switch (G__25050) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25053 = arguments.length;
switch (G__25053) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___25100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___25100,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___25100,out){
return (function (state_25077){
var state_val_25078 = (state_25077[(1)]);
if((state_val_25078 === (7))){
var inst_25072 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
var statearr_25079_25101 = state_25077__$1;
(statearr_25079_25101[(2)] = inst_25072);

(statearr_25079_25101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (1))){
var inst_25054 = null;
var state_25077__$1 = (function (){var statearr_25080 = state_25077;
(statearr_25080[(7)] = inst_25054);

return statearr_25080;
})();
var statearr_25081_25102 = state_25077__$1;
(statearr_25081_25102[(2)] = null);

(statearr_25081_25102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (4))){
var inst_25057 = (state_25077[(8)]);
var inst_25057__$1 = (state_25077[(2)]);
var inst_25058 = (inst_25057__$1 == null);
var inst_25059 = cljs.core.not.call(null,inst_25058);
var state_25077__$1 = (function (){var statearr_25082 = state_25077;
(statearr_25082[(8)] = inst_25057__$1);

return statearr_25082;
})();
if(inst_25059){
var statearr_25083_25103 = state_25077__$1;
(statearr_25083_25103[(1)] = (5));

} else {
var statearr_25084_25104 = state_25077__$1;
(statearr_25084_25104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (6))){
var state_25077__$1 = state_25077;
var statearr_25085_25105 = state_25077__$1;
(statearr_25085_25105[(2)] = null);

(statearr_25085_25105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (3))){
var inst_25074 = (state_25077[(2)]);
var inst_25075 = cljs.core.async.close_BANG_.call(null,out);
var state_25077__$1 = (function (){var statearr_25086 = state_25077;
(statearr_25086[(9)] = inst_25074);

return statearr_25086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25077__$1,inst_25075);
} else {
if((state_val_25078 === (2))){
var state_25077__$1 = state_25077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25077__$1,(4),ch);
} else {
if((state_val_25078 === (11))){
var inst_25057 = (state_25077[(8)]);
var inst_25066 = (state_25077[(2)]);
var inst_25054 = inst_25057;
var state_25077__$1 = (function (){var statearr_25087 = state_25077;
(statearr_25087[(7)] = inst_25054);

(statearr_25087[(10)] = inst_25066);

return statearr_25087;
})();
var statearr_25088_25106 = state_25077__$1;
(statearr_25088_25106[(2)] = null);

(statearr_25088_25106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (9))){
var inst_25057 = (state_25077[(8)]);
var state_25077__$1 = state_25077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25077__$1,(11),out,inst_25057);
} else {
if((state_val_25078 === (5))){
var inst_25054 = (state_25077[(7)]);
var inst_25057 = (state_25077[(8)]);
var inst_25061 = cljs.core._EQ_.call(null,inst_25057,inst_25054);
var state_25077__$1 = state_25077;
if(inst_25061){
var statearr_25090_25107 = state_25077__$1;
(statearr_25090_25107[(1)] = (8));

} else {
var statearr_25091_25108 = state_25077__$1;
(statearr_25091_25108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (10))){
var inst_25069 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
var statearr_25092_25109 = state_25077__$1;
(statearr_25092_25109[(2)] = inst_25069);

(statearr_25092_25109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (8))){
var inst_25054 = (state_25077[(7)]);
var tmp25089 = inst_25054;
var inst_25054__$1 = tmp25089;
var state_25077__$1 = (function (){var statearr_25093 = state_25077;
(statearr_25093[(7)] = inst_25054__$1);

return statearr_25093;
})();
var statearr_25094_25110 = state_25077__$1;
(statearr_25094_25110[(2)] = null);

(statearr_25094_25110[(1)] = (2));


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
});})(c__23364__auto___25100,out))
;
return ((function (switch__23309__auto__,c__23364__auto___25100,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_25095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25095[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_25095[(1)] = (1));

return statearr_25095;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_25077){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_25077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e25096){if((e25096 instanceof Object)){
var ex__23313__auto__ = e25096;
var statearr_25097_25111 = state_25077;
(statearr_25097_25111[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25112 = state_25077;
state_25077 = G__25112;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_25077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_25077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___25100,out))
})();
var state__23366__auto__ = (function (){var statearr_25098 = f__23365__auto__.call(null);
(statearr_25098[(6)] = c__23364__auto___25100);

return statearr_25098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___25100,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25114 = arguments.length;
switch (G__25114) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___25180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___25180,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___25180,out){
return (function (state_25152){
var state_val_25153 = (state_25152[(1)]);
if((state_val_25153 === (7))){
var inst_25148 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25154_25181 = state_25152__$1;
(statearr_25154_25181[(2)] = inst_25148);

(statearr_25154_25181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (1))){
var inst_25115 = (new Array(n));
var inst_25116 = inst_25115;
var inst_25117 = (0);
var state_25152__$1 = (function (){var statearr_25155 = state_25152;
(statearr_25155[(7)] = inst_25116);

(statearr_25155[(8)] = inst_25117);

return statearr_25155;
})();
var statearr_25156_25182 = state_25152__$1;
(statearr_25156_25182[(2)] = null);

(statearr_25156_25182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (4))){
var inst_25120 = (state_25152[(9)]);
var inst_25120__$1 = (state_25152[(2)]);
var inst_25121 = (inst_25120__$1 == null);
var inst_25122 = cljs.core.not.call(null,inst_25121);
var state_25152__$1 = (function (){var statearr_25157 = state_25152;
(statearr_25157[(9)] = inst_25120__$1);

return statearr_25157;
})();
if(inst_25122){
var statearr_25158_25183 = state_25152__$1;
(statearr_25158_25183[(1)] = (5));

} else {
var statearr_25159_25184 = state_25152__$1;
(statearr_25159_25184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (15))){
var inst_25142 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25160_25185 = state_25152__$1;
(statearr_25160_25185[(2)] = inst_25142);

(statearr_25160_25185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (13))){
var state_25152__$1 = state_25152;
var statearr_25161_25186 = state_25152__$1;
(statearr_25161_25186[(2)] = null);

(statearr_25161_25186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (6))){
var inst_25117 = (state_25152[(8)]);
var inst_25138 = (inst_25117 > (0));
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25138)){
var statearr_25162_25187 = state_25152__$1;
(statearr_25162_25187[(1)] = (12));

} else {
var statearr_25163_25188 = state_25152__$1;
(statearr_25163_25188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (3))){
var inst_25150 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25152__$1,inst_25150);
} else {
if((state_val_25153 === (12))){
var inst_25116 = (state_25152[(7)]);
var inst_25140 = cljs.core.vec.call(null,inst_25116);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25152__$1,(15),out,inst_25140);
} else {
if((state_val_25153 === (2))){
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(4),ch);
} else {
if((state_val_25153 === (11))){
var inst_25132 = (state_25152[(2)]);
var inst_25133 = (new Array(n));
var inst_25116 = inst_25133;
var inst_25117 = (0);
var state_25152__$1 = (function (){var statearr_25164 = state_25152;
(statearr_25164[(7)] = inst_25116);

(statearr_25164[(8)] = inst_25117);

(statearr_25164[(10)] = inst_25132);

return statearr_25164;
})();
var statearr_25165_25189 = state_25152__$1;
(statearr_25165_25189[(2)] = null);

(statearr_25165_25189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (9))){
var inst_25116 = (state_25152[(7)]);
var inst_25130 = cljs.core.vec.call(null,inst_25116);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25152__$1,(11),out,inst_25130);
} else {
if((state_val_25153 === (5))){
var inst_25116 = (state_25152[(7)]);
var inst_25125 = (state_25152[(11)]);
var inst_25117 = (state_25152[(8)]);
var inst_25120 = (state_25152[(9)]);
var inst_25124 = (inst_25116[inst_25117] = inst_25120);
var inst_25125__$1 = (inst_25117 + (1));
var inst_25126 = (inst_25125__$1 < n);
var state_25152__$1 = (function (){var statearr_25166 = state_25152;
(statearr_25166[(12)] = inst_25124);

(statearr_25166[(11)] = inst_25125__$1);

return statearr_25166;
})();
if(cljs.core.truth_(inst_25126)){
var statearr_25167_25190 = state_25152__$1;
(statearr_25167_25190[(1)] = (8));

} else {
var statearr_25168_25191 = state_25152__$1;
(statearr_25168_25191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (14))){
var inst_25145 = (state_25152[(2)]);
var inst_25146 = cljs.core.async.close_BANG_.call(null,out);
var state_25152__$1 = (function (){var statearr_25170 = state_25152;
(statearr_25170[(13)] = inst_25145);

return statearr_25170;
})();
var statearr_25171_25192 = state_25152__$1;
(statearr_25171_25192[(2)] = inst_25146);

(statearr_25171_25192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (10))){
var inst_25136 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25172_25193 = state_25152__$1;
(statearr_25172_25193[(2)] = inst_25136);

(statearr_25172_25193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (8))){
var inst_25116 = (state_25152[(7)]);
var inst_25125 = (state_25152[(11)]);
var tmp25169 = inst_25116;
var inst_25116__$1 = tmp25169;
var inst_25117 = inst_25125;
var state_25152__$1 = (function (){var statearr_25173 = state_25152;
(statearr_25173[(7)] = inst_25116__$1);

(statearr_25173[(8)] = inst_25117);

return statearr_25173;
})();
var statearr_25174_25194 = state_25152__$1;
(statearr_25174_25194[(2)] = null);

(statearr_25174_25194[(1)] = (2));


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
});})(c__23364__auto___25180,out))
;
return ((function (switch__23309__auto__,c__23364__auto___25180,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_25175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25175[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_25175[(1)] = (1));

return statearr_25175;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_25152){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_25152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object)){
var ex__23313__auto__ = e25176;
var statearr_25177_25195 = state_25152;
(statearr_25177_25195[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25196 = state_25152;
state_25152 = G__25196;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_25152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_25152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___25180,out))
})();
var state__23366__auto__ = (function (){var statearr_25178 = f__23365__auto__.call(null);
(statearr_25178[(6)] = c__23364__auto___25180);

return statearr_25178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___25180,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25198 = arguments.length;
switch (G__25198) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23364__auto___25268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23364__auto___25268,out){
return (function (){
var f__23365__auto__ = (function (){var switch__23309__auto__ = ((function (c__23364__auto___25268,out){
return (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (7))){
var inst_25236 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25242_25269 = state_25240__$1;
(statearr_25242_25269[(2)] = inst_25236);

(statearr_25242_25269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (1))){
var inst_25199 = [];
var inst_25200 = inst_25199;
var inst_25201 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25240__$1 = (function (){var statearr_25243 = state_25240;
(statearr_25243[(7)] = inst_25201);

(statearr_25243[(8)] = inst_25200);

return statearr_25243;
})();
var statearr_25244_25270 = state_25240__$1;
(statearr_25244_25270[(2)] = null);

(statearr_25244_25270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (4))){
var inst_25204 = (state_25240[(9)]);
var inst_25204__$1 = (state_25240[(2)]);
var inst_25205 = (inst_25204__$1 == null);
var inst_25206 = cljs.core.not.call(null,inst_25205);
var state_25240__$1 = (function (){var statearr_25245 = state_25240;
(statearr_25245[(9)] = inst_25204__$1);

return statearr_25245;
})();
if(inst_25206){
var statearr_25246_25271 = state_25240__$1;
(statearr_25246_25271[(1)] = (5));

} else {
var statearr_25247_25272 = state_25240__$1;
(statearr_25247_25272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (15))){
var inst_25230 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25248_25273 = state_25240__$1;
(statearr_25248_25273[(2)] = inst_25230);

(statearr_25248_25273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (13))){
var state_25240__$1 = state_25240;
var statearr_25249_25274 = state_25240__$1;
(statearr_25249_25274[(2)] = null);

(statearr_25249_25274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (6))){
var inst_25200 = (state_25240[(8)]);
var inst_25225 = inst_25200.length;
var inst_25226 = (inst_25225 > (0));
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25226)){
var statearr_25250_25275 = state_25240__$1;
(statearr_25250_25275[(1)] = (12));

} else {
var statearr_25251_25276 = state_25240__$1;
(statearr_25251_25276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (3))){
var inst_25238 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25240__$1,inst_25238);
} else {
if((state_val_25241 === (12))){
var inst_25200 = (state_25240[(8)]);
var inst_25228 = cljs.core.vec.call(null,inst_25200);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25240__$1,(15),out,inst_25228);
} else {
if((state_val_25241 === (2))){
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25240__$1,(4),ch);
} else {
if((state_val_25241 === (11))){
var inst_25204 = (state_25240[(9)]);
var inst_25208 = (state_25240[(10)]);
var inst_25218 = (state_25240[(2)]);
var inst_25219 = [];
var inst_25220 = inst_25219.push(inst_25204);
var inst_25200 = inst_25219;
var inst_25201 = inst_25208;
var state_25240__$1 = (function (){var statearr_25252 = state_25240;
(statearr_25252[(7)] = inst_25201);

(statearr_25252[(11)] = inst_25218);

(statearr_25252[(12)] = inst_25220);

(statearr_25252[(8)] = inst_25200);

return statearr_25252;
})();
var statearr_25253_25277 = state_25240__$1;
(statearr_25253_25277[(2)] = null);

(statearr_25253_25277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (9))){
var inst_25200 = (state_25240[(8)]);
var inst_25216 = cljs.core.vec.call(null,inst_25200);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25240__$1,(11),out,inst_25216);
} else {
if((state_val_25241 === (5))){
var inst_25204 = (state_25240[(9)]);
var inst_25201 = (state_25240[(7)]);
var inst_25208 = (state_25240[(10)]);
var inst_25208__$1 = f.call(null,inst_25204);
var inst_25209 = cljs.core._EQ_.call(null,inst_25208__$1,inst_25201);
var inst_25210 = cljs.core.keyword_identical_QMARK_.call(null,inst_25201,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25211 = ((inst_25209) || (inst_25210));
var state_25240__$1 = (function (){var statearr_25254 = state_25240;
(statearr_25254[(10)] = inst_25208__$1);

return statearr_25254;
})();
if(cljs.core.truth_(inst_25211)){
var statearr_25255_25278 = state_25240__$1;
(statearr_25255_25278[(1)] = (8));

} else {
var statearr_25256_25279 = state_25240__$1;
(statearr_25256_25279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (14))){
var inst_25233 = (state_25240[(2)]);
var inst_25234 = cljs.core.async.close_BANG_.call(null,out);
var state_25240__$1 = (function (){var statearr_25258 = state_25240;
(statearr_25258[(13)] = inst_25233);

return statearr_25258;
})();
var statearr_25259_25280 = state_25240__$1;
(statearr_25259_25280[(2)] = inst_25234);

(statearr_25259_25280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (10))){
var inst_25223 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25260_25281 = state_25240__$1;
(statearr_25260_25281[(2)] = inst_25223);

(statearr_25260_25281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (8))){
var inst_25204 = (state_25240[(9)]);
var inst_25200 = (state_25240[(8)]);
var inst_25208 = (state_25240[(10)]);
var inst_25213 = inst_25200.push(inst_25204);
var tmp25257 = inst_25200;
var inst_25200__$1 = tmp25257;
var inst_25201 = inst_25208;
var state_25240__$1 = (function (){var statearr_25261 = state_25240;
(statearr_25261[(7)] = inst_25201);

(statearr_25261[(14)] = inst_25213);

(statearr_25261[(8)] = inst_25200__$1);

return statearr_25261;
})();
var statearr_25262_25282 = state_25240__$1;
(statearr_25262_25282[(2)] = null);

(statearr_25262_25282[(1)] = (2));


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
});})(c__23364__auto___25268,out))
;
return ((function (switch__23309__auto__,c__23364__auto___25268,out){
return (function() {
var cljs$core$async$state_machine__23310__auto__ = null;
var cljs$core$async$state_machine__23310__auto____0 = (function (){
var statearr_25263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25263[(0)] = cljs$core$async$state_machine__23310__auto__);

(statearr_25263[(1)] = (1));

return statearr_25263;
});
var cljs$core$async$state_machine__23310__auto____1 = (function (state_25240){
while(true){
var ret_value__23311__auto__ = (function (){try{while(true){
var result__23312__auto__ = switch__23309__auto__.call(null,state_25240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23312__auto__;
}
break;
}
}catch (e25264){if((e25264 instanceof Object)){
var ex__23313__auto__ = e25264;
var statearr_25265_25283 = state_25240;
(statearr_25265_25283[(5)] = ex__23313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25284 = state_25240;
state_25240 = G__25284;
continue;
} else {
return ret_value__23311__auto__;
}
break;
}
});
cljs$core$async$state_machine__23310__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23310__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23310__auto____0;
cljs$core$async$state_machine__23310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23310__auto____1;
return cljs$core$async$state_machine__23310__auto__;
})()
;})(switch__23309__auto__,c__23364__auto___25268,out))
})();
var state__23366__auto__ = (function (){var statearr_25266 = f__23365__auto__.call(null);
(statearr_25266[(6)] = c__23364__auto___25268);

return statearr_25266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23366__auto__);
});})(c__23364__auto___25268,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525651477899
