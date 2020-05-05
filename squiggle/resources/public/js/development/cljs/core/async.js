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
var G__27322 = arguments.length;
switch (G__27322) {
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
if(typeof cljs.core.async.t_cljs$core$async27323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27323 = (function (f,blockable,meta27324){
this.f = f;
this.blockable = blockable;
this.meta27324 = meta27324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27325,meta27324__$1){
var self__ = this;
var _27325__$1 = this;
return (new cljs.core.async.t_cljs$core$async27323(self__.f,self__.blockable,meta27324__$1));
});

cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27325){
var self__ = this;
var _27325__$1 = this;
return self__.meta27324;
});

cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27324","meta27324",400380138,null)], null);
});

cljs.core.async.t_cljs$core$async27323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27323";

cljs.core.async.t_cljs$core$async27323.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27323");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27323.
 */
cljs.core.async.__GT_t_cljs$core$async27323 = (function cljs$core$async$__GT_t_cljs$core$async27323(f__$1,blockable__$1,meta27324){
return (new cljs.core.async.t_cljs$core$async27323(f__$1,blockable__$1,meta27324));
});

}

return (new cljs.core.async.t_cljs$core$async27323(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27329 = arguments.length;
switch (G__27329) {
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
var G__27332 = arguments.length;
switch (G__27332) {
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
var G__27335 = arguments.length;
switch (G__27335) {
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
var val_27337 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27337);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27337,ret){
return (function (){
return fn1.call(null,val_27337);
});})(val_27337,ret))
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
var G__27339 = arguments.length;
switch (G__27339) {
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
var n__4376__auto___27341 = n;
var x_27342 = (0);
while(true){
if((x_27342 < n__4376__auto___27341)){
(a[x_27342] = (0));

var G__27343 = (x_27342 + (1));
x_27342 = G__27343;
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

var G__27344 = (i + (1));
i = G__27344;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27345 = (function (flag,meta27346){
this.flag = flag;
this.meta27346 = meta27346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27347,meta27346__$1){
var self__ = this;
var _27347__$1 = this;
return (new cljs.core.async.t_cljs$core$async27345(self__.flag,meta27346__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27347){
var self__ = this;
var _27347__$1 = this;
return self__.meta27346;
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27346","meta27346",-1400610844,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27345";

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27345");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27345.
 */
cljs.core.async.__GT_t_cljs$core$async27345 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27345(flag__$1,meta27346){
return (new cljs.core.async.t_cljs$core$async27345(flag__$1,meta27346));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27345(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27348 = (function (flag,cb,meta27349){
this.flag = flag;
this.cb = cb;
this.meta27349 = meta27349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27350,meta27349__$1){
var self__ = this;
var _27350__$1 = this;
return (new cljs.core.async.t_cljs$core$async27348(self__.flag,self__.cb,meta27349__$1));
});

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27350){
var self__ = this;
var _27350__$1 = this;
return self__.meta27349;
});

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27349","meta27349",806107638,null)], null);
});

cljs.core.async.t_cljs$core$async27348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27348";

cljs.core.async.t_cljs$core$async27348.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27348");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27348.
 */
cljs.core.async.__GT_t_cljs$core$async27348 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27348(flag__$1,cb__$1,meta27349){
return (new cljs.core.async.t_cljs$core$async27348(flag__$1,cb__$1,meta27349));
});

}

return (new cljs.core.async.t_cljs$core$async27348(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27351_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27351_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27352_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27352_SHARP_,port], null));
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
var G__27353 = (i + (1));
i = G__27353;
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
var len__4499__auto___27359 = arguments.length;
var i__4500__auto___27360 = (0);
while(true){
if((i__4500__auto___27360 < len__4499__auto___27359)){
args__4502__auto__.push((arguments[i__4500__auto___27360]));

var G__27361 = (i__4500__auto___27360 + (1));
i__4500__auto___27360 = G__27361;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27356){
var map__27357 = p__27356;
var map__27357__$1 = ((((!((map__27357 == null)))?(((((map__27357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27357):map__27357);
var opts = map__27357__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27354){
var G__27355 = cljs.core.first.call(null,seq27354);
var seq27354__$1 = cljs.core.next.call(null,seq27354);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27355,seq27354__$1);
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
var G__27363 = arguments.length;
switch (G__27363) {
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
var c__25398__auto___27409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___27409){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___27409){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (7))){
var inst_27383 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27389_27410 = state_27387__$1;
(statearr_27389_27410[(2)] = inst_27383);

(statearr_27389_27410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (1))){
var state_27387__$1 = state_27387;
var statearr_27390_27411 = state_27387__$1;
(statearr_27390_27411[(2)] = null);

(statearr_27390_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (4))){
var inst_27366 = (state_27387[(7)]);
var inst_27366__$1 = (state_27387[(2)]);
var inst_27367 = (inst_27366__$1 == null);
var state_27387__$1 = (function (){var statearr_27391 = state_27387;
(statearr_27391[(7)] = inst_27366__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27367)){
var statearr_27392_27412 = state_27387__$1;
(statearr_27392_27412[(1)] = (5));

} else {
var statearr_27393_27413 = state_27387__$1;
(statearr_27393_27413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (13))){
var state_27387__$1 = state_27387;
var statearr_27394_27414 = state_27387__$1;
(statearr_27394_27414[(2)] = null);

(statearr_27394_27414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (6))){
var inst_27366 = (state_27387[(7)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(11),to,inst_27366);
} else {
if((state_val_27388 === (3))){
var inst_27385 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
if((state_val_27388 === (12))){
var state_27387__$1 = state_27387;
var statearr_27395_27415 = state_27387__$1;
(statearr_27395_27415[(2)] = null);

(statearr_27395_27415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (2))){
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,(4),from);
} else {
if((state_val_27388 === (11))){
var inst_27376 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
if(cljs.core.truth_(inst_27376)){
var statearr_27396_27416 = state_27387__$1;
(statearr_27396_27416[(1)] = (12));

} else {
var statearr_27397_27417 = state_27387__$1;
(statearr_27397_27417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (9))){
var state_27387__$1 = state_27387;
var statearr_27398_27418 = state_27387__$1;
(statearr_27398_27418[(2)] = null);

(statearr_27398_27418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (5))){
var state_27387__$1 = state_27387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27399_27419 = state_27387__$1;
(statearr_27399_27419[(1)] = (8));

} else {
var statearr_27400_27420 = state_27387__$1;
(statearr_27400_27420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (14))){
var inst_27381 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27401_27421 = state_27387__$1;
(statearr_27401_27421[(2)] = inst_27381);

(statearr_27401_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (10))){
var inst_27373 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27402_27422 = state_27387__$1;
(statearr_27402_27422[(2)] = inst_27373);

(statearr_27402_27422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (8))){
var inst_27370 = cljs.core.async.close_BANG_.call(null,to);
var state_27387__$1 = state_27387;
var statearr_27403_27423 = state_27387__$1;
(statearr_27403_27423[(2)] = inst_27370);

(statearr_27403_27423[(1)] = (10));


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
});})(c__25398__auto___27409))
;
return ((function (switch__25311__auto__,c__25398__auto___27409){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_27404 = [null,null,null,null,null,null,null,null];
(statearr_27404[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_27404[(1)] = (1));

return statearr_27404;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_27387){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27405){if((e27405 instanceof Object)){
var ex__25315__auto__ = e27405;
var statearr_27406_27424 = state_27387;
(statearr_27406_27424[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27425 = state_27387;
state_27387 = G__27425;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___27409))
})();
var state__25400__auto__ = (function (){var statearr_27407 = f__25399__auto__.call(null);
(statearr_27407[(6)] = c__25398__auto___27409);

return statearr_27407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___27409))
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
return (function (p__27426){
var vec__27427 = p__27426;
var v = cljs.core.nth.call(null,vec__27427,(0),null);
var p = cljs.core.nth.call(null,vec__27427,(1),null);
var job = vec__27427;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25398__auto___27598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results){
return (function (state_27434){
var state_val_27435 = (state_27434[(1)]);
if((state_val_27435 === (1))){
var state_27434__$1 = state_27434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27434__$1,(2),res,v);
} else {
if((state_val_27435 === (2))){
var inst_27431 = (state_27434[(2)]);
var inst_27432 = cljs.core.async.close_BANG_.call(null,res);
var state_27434__$1 = (function (){var statearr_27436 = state_27434;
(statearr_27436[(7)] = inst_27431);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27434__$1,inst_27432);
} else {
return null;
}
}
});})(c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results))
;
return ((function (switch__25311__auto__,c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_27437 = [null,null,null,null,null,null,null,null];
(statearr_27437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1 = (function (state_27434){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27438){if((e27438 instanceof Object)){
var ex__25315__auto__ = e27438;
var statearr_27439_27599 = state_27434;
(statearr_27439_27599[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27600 = state_27434;
state_27434 = G__27600;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = function(state_27434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1.call(this,state_27434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results))
})();
var state__25400__auto__ = (function (){var statearr_27440 = f__25399__auto__.call(null);
(statearr_27440[(6)] = c__25398__auto___27598);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___27598,res,vec__27427,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27441){
var vec__27442 = p__27441;
var v = cljs.core.nth.call(null,vec__27442,(0),null);
var p = cljs.core.nth.call(null,vec__27442,(1),null);
var job = vec__27442;
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
var n__4376__auto___27601 = n;
var __27602 = (0);
while(true){
if((__27602 < n__4376__auto___27601)){
var G__27445_27603 = type;
var G__27445_27604__$1 = (((G__27445_27603 instanceof cljs.core.Keyword))?G__27445_27603.fqn:null);
switch (G__27445_27604__$1) {
case "compute":
var c__25398__auto___27606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27602,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (__27602,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function (state_27458){
var state_val_27459 = (state_27458[(1)]);
if((state_val_27459 === (1))){
var state_27458__$1 = state_27458;
var statearr_27460_27607 = state_27458__$1;
(statearr_27460_27607[(2)] = null);

(statearr_27460_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (2))){
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27458__$1,(4),jobs);
} else {
if((state_val_27459 === (3))){
var inst_27456 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27458__$1,inst_27456);
} else {
if((state_val_27459 === (4))){
var inst_27448 = (state_27458[(2)]);
var inst_27449 = process.call(null,inst_27448);
var state_27458__$1 = state_27458;
if(cljs.core.truth_(inst_27449)){
var statearr_27461_27608 = state_27458__$1;
(statearr_27461_27608[(1)] = (5));

} else {
var statearr_27462_27609 = state_27458__$1;
(statearr_27462_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (5))){
var state_27458__$1 = state_27458;
var statearr_27463_27610 = state_27458__$1;
(statearr_27463_27610[(2)] = null);

(statearr_27463_27610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (6))){
var state_27458__$1 = state_27458;
var statearr_27464_27611 = state_27458__$1;
(statearr_27464_27611[(2)] = null);

(statearr_27464_27611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (7))){
var inst_27454 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
var statearr_27465_27612 = state_27458__$1;
(statearr_27465_27612[(2)] = inst_27454);

(statearr_27465_27612[(1)] = (3));


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
});})(__27602,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
;
return ((function (__27602,switch__25311__auto__,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_27466 = [null,null,null,null,null,null,null];
(statearr_27466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__);

(statearr_27466[(1)] = (1));

return statearr_27466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1 = (function (state_27458){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27467){if((e27467 instanceof Object)){
var ex__25315__auto__ = e27467;
var statearr_27468_27613 = state_27458;
(statearr_27468_27613[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27614 = state_27458;
state_27458 = G__27614;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = function(state_27458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1.call(this,state_27458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__;
})()
;})(__27602,switch__25311__auto__,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
})();
var state__25400__auto__ = (function (){var statearr_27469 = f__25399__auto__.call(null);
(statearr_27469[(6)] = c__25398__auto___27606);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(__27602,c__25398__auto___27606,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
);


break;
case "async":
var c__25398__auto___27615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27602,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (__27602,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function (state_27482){
var state_val_27483 = (state_27482[(1)]);
if((state_val_27483 === (1))){
var state_27482__$1 = state_27482;
var statearr_27484_27616 = state_27482__$1;
(statearr_27484_27616[(2)] = null);

(statearr_27484_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (2))){
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27482__$1,(4),jobs);
} else {
if((state_val_27483 === (3))){
var inst_27480 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27482__$1,inst_27480);
} else {
if((state_val_27483 === (4))){
var inst_27472 = (state_27482[(2)]);
var inst_27473 = async.call(null,inst_27472);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27473)){
var statearr_27485_27617 = state_27482__$1;
(statearr_27485_27617[(1)] = (5));

} else {
var statearr_27486_27618 = state_27482__$1;
(statearr_27486_27618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (5))){
var state_27482__$1 = state_27482;
var statearr_27487_27619 = state_27482__$1;
(statearr_27487_27619[(2)] = null);

(statearr_27487_27619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (6))){
var state_27482__$1 = state_27482;
var statearr_27488_27620 = state_27482__$1;
(statearr_27488_27620[(2)] = null);

(statearr_27488_27620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (7))){
var inst_27478 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27489_27621 = state_27482__$1;
(statearr_27489_27621[(2)] = inst_27478);

(statearr_27489_27621[(1)] = (3));


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
});})(__27602,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
;
return ((function (__27602,switch__25311__auto__,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null];
(statearr_27490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1 = (function (state_27482){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__25315__auto__ = e27491;
var statearr_27492_27622 = state_27482;
(statearr_27492_27622[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27482;
state_27482 = G__27623;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = function(state_27482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1.call(this,state_27482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__;
})()
;})(__27602,switch__25311__auto__,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
})();
var state__25400__auto__ = (function (){var statearr_27493 = f__25399__auto__.call(null);
(statearr_27493[(6)] = c__25398__auto___27615);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(__27602,c__25398__auto___27615,G__27445_27603,G__27445_27604__$1,n__4376__auto___27601,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27445_27604__$1)].join('')));

}

var G__27624 = (__27602 + (1));
__27602 = G__27624;
continue;
} else {
}
break;
}

var c__25398__auto___27625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___27625,jobs,results,process,async){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___27625,jobs,results,process,async){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (1))){
var state_27515__$1 = state_27515;
var statearr_27517_27626 = state_27515__$1;
(statearr_27517_27626[(2)] = null);

(statearr_27517_27626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (2))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),from);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (4))){
var inst_27496 = (state_27515[(7)]);
var inst_27496__$1 = (state_27515[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var state_27515__$1 = (function (){var statearr_27518 = state_27515;
(statearr_27518[(7)] = inst_27496__$1);

return statearr_27518;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27519_27627 = state_27515__$1;
(statearr_27519_27627[(1)] = (5));

} else {
var statearr_27520_27628 = state_27515__$1;
(statearr_27520_27628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (5))){
var inst_27499 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27515__$1 = state_27515;
var statearr_27521_27629 = state_27515__$1;
(statearr_27521_27629[(2)] = inst_27499);

(statearr_27521_27629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (6))){
var inst_27501 = (state_27515[(8)]);
var inst_27496 = (state_27515[(7)]);
var inst_27501__$1 = cljs.core.async.chan.call(null,(1));
var inst_27502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27503 = [inst_27496,inst_27501__$1];
var inst_27504 = (new cljs.core.PersistentVector(null,2,(5),inst_27502,inst_27503,null));
var state_27515__$1 = (function (){var statearr_27522 = state_27515;
(statearr_27522[(8)] = inst_27501__$1);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(8),jobs,inst_27504);
} else {
if((state_val_27516 === (7))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27523_27630 = state_27515__$1;
(statearr_27523_27630[(2)] = inst_27511);

(statearr_27523_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (8))){
var inst_27501 = (state_27515[(8)]);
var inst_27506 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27524 = state_27515;
(statearr_27524[(9)] = inst_27506);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(9),results,inst_27501);
} else {
if((state_val_27516 === (9))){
var inst_27508 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27525 = state_27515;
(statearr_27525[(10)] = inst_27508);

return statearr_27525;
})();
var statearr_27526_27631 = state_27515__$1;
(statearr_27526_27631[(2)] = null);

(statearr_27526_27631[(1)] = (2));


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
});})(c__25398__auto___27625,jobs,results,process,async))
;
return ((function (switch__25311__auto__,c__25398__auto___27625,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_27527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__);

(statearr_27527[(1)] = (1));

return statearr_27527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1 = (function (state_27515){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27528){if((e27528 instanceof Object)){
var ex__25315__auto__ = e27528;
var statearr_27529_27632 = state_27515;
(statearr_27529_27632[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27633 = state_27515;
state_27515 = G__27633;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___27625,jobs,results,process,async))
})();
var state__25400__auto__ = (function (){var statearr_27530 = f__25399__auto__.call(null);
(statearr_27530[(6)] = c__25398__auto___27625);

return statearr_27530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___27625,jobs,results,process,async))
);


var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__,jobs,results,process,async){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__,jobs,results,process,async){
return (function (state_27568){
var state_val_27569 = (state_27568[(1)]);
if((state_val_27569 === (7))){
var inst_27564 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27570_27634 = state_27568__$1;
(statearr_27570_27634[(2)] = inst_27564);

(statearr_27570_27634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (20))){
var state_27568__$1 = state_27568;
var statearr_27571_27635 = state_27568__$1;
(statearr_27571_27635[(2)] = null);

(statearr_27571_27635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (1))){
var state_27568__$1 = state_27568;
var statearr_27572_27636 = state_27568__$1;
(statearr_27572_27636[(2)] = null);

(statearr_27572_27636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (4))){
var inst_27533 = (state_27568[(7)]);
var inst_27533__$1 = (state_27568[(2)]);
var inst_27534 = (inst_27533__$1 == null);
var state_27568__$1 = (function (){var statearr_27573 = state_27568;
(statearr_27573[(7)] = inst_27533__$1);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27534)){
var statearr_27574_27637 = state_27568__$1;
(statearr_27574_27637[(1)] = (5));

} else {
var statearr_27575_27638 = state_27568__$1;
(statearr_27575_27638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (15))){
var inst_27546 = (state_27568[(8)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27568__$1,(18),to,inst_27546);
} else {
if((state_val_27569 === (21))){
var inst_27559 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27576_27639 = state_27568__$1;
(statearr_27576_27639[(2)] = inst_27559);

(statearr_27576_27639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (13))){
var inst_27561 = (state_27568[(2)]);
var state_27568__$1 = (function (){var statearr_27577 = state_27568;
(statearr_27577[(9)] = inst_27561);

return statearr_27577;
})();
var statearr_27578_27640 = state_27568__$1;
(statearr_27578_27640[(2)] = null);

(statearr_27578_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (6))){
var inst_27533 = (state_27568[(7)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(11),inst_27533);
} else {
if((state_val_27569 === (17))){
var inst_27554 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
if(cljs.core.truth_(inst_27554)){
var statearr_27579_27641 = state_27568__$1;
(statearr_27579_27641[(1)] = (19));

} else {
var statearr_27580_27642 = state_27568__$1;
(statearr_27580_27642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (3))){
var inst_27566 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27568__$1,inst_27566);
} else {
if((state_val_27569 === (12))){
var inst_27543 = (state_27568[(10)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(14),inst_27543);
} else {
if((state_val_27569 === (2))){
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(4),results);
} else {
if((state_val_27569 === (19))){
var state_27568__$1 = state_27568;
var statearr_27581_27643 = state_27568__$1;
(statearr_27581_27643[(2)] = null);

(statearr_27581_27643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (11))){
var inst_27543 = (state_27568[(2)]);
var state_27568__$1 = (function (){var statearr_27582 = state_27568;
(statearr_27582[(10)] = inst_27543);

return statearr_27582;
})();
var statearr_27583_27644 = state_27568__$1;
(statearr_27583_27644[(2)] = null);

(statearr_27583_27644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (9))){
var state_27568__$1 = state_27568;
var statearr_27584_27645 = state_27568__$1;
(statearr_27584_27645[(2)] = null);

(statearr_27584_27645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (5))){
var state_27568__$1 = state_27568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27585_27646 = state_27568__$1;
(statearr_27585_27646[(1)] = (8));

} else {
var statearr_27586_27647 = state_27568__$1;
(statearr_27586_27647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (14))){
var inst_27546 = (state_27568[(8)]);
var inst_27548 = (state_27568[(11)]);
var inst_27546__$1 = (state_27568[(2)]);
var inst_27547 = (inst_27546__$1 == null);
var inst_27548__$1 = cljs.core.not.call(null,inst_27547);
var state_27568__$1 = (function (){var statearr_27587 = state_27568;
(statearr_27587[(8)] = inst_27546__$1);

(statearr_27587[(11)] = inst_27548__$1);

return statearr_27587;
})();
if(inst_27548__$1){
var statearr_27588_27648 = state_27568__$1;
(statearr_27588_27648[(1)] = (15));

} else {
var statearr_27589_27649 = state_27568__$1;
(statearr_27589_27649[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (16))){
var inst_27548 = (state_27568[(11)]);
var state_27568__$1 = state_27568;
var statearr_27590_27650 = state_27568__$1;
(statearr_27590_27650[(2)] = inst_27548);

(statearr_27590_27650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (10))){
var inst_27540 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27591_27651 = state_27568__$1;
(statearr_27591_27651[(2)] = inst_27540);

(statearr_27591_27651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (18))){
var inst_27551 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27592_27652 = state_27568__$1;
(statearr_27592_27652[(2)] = inst_27551);

(statearr_27592_27652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (8))){
var inst_27537 = cljs.core.async.close_BANG_.call(null,to);
var state_27568__$1 = state_27568;
var statearr_27593_27653 = state_27568__$1;
(statearr_27593_27653[(2)] = inst_27537);

(statearr_27593_27653[(1)] = (10));


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
});})(c__25398__auto__,jobs,results,process,async))
;
return ((function (switch__25311__auto__,c__25398__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_27594 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__);

(statearr_27594[(1)] = (1));

return statearr_27594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1 = (function (state_27568){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27595){if((e27595 instanceof Object)){
var ex__25315__auto__ = e27595;
var statearr_27596_27654 = state_27568;
(statearr_27596_27654[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27655 = state_27568;
state_27568 = G__27655;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__,jobs,results,process,async))
})();
var state__25400__auto__ = (function (){var statearr_27597 = f__25399__auto__.call(null);
(statearr_27597[(6)] = c__25398__auto__);

return statearr_27597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__,jobs,results,process,async))
);

return c__25398__auto__;
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
var G__27657 = arguments.length;
switch (G__27657) {
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
var G__27660 = arguments.length;
switch (G__27660) {
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
var G__27663 = arguments.length;
switch (G__27663) {
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
var c__25398__auto___27712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___27712,tc,fc){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___27712,tc,fc){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27691_27713 = state_27689__$1;
(statearr_27691_27713[(2)] = inst_27685);

(statearr_27691_27713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var state_27689__$1 = state_27689;
var statearr_27692_27714 = state_27689__$1;
(statearr_27692_27714[(2)] = null);

(statearr_27692_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27666 = (state_27689[(7)]);
var inst_27666__$1 = (state_27689[(2)]);
var inst_27667 = (inst_27666__$1 == null);
var state_27689__$1 = (function (){var statearr_27693 = state_27689;
(statearr_27693[(7)] = inst_27666__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27667)){
var statearr_27694_27715 = state_27689__$1;
(statearr_27694_27715[(1)] = (5));

} else {
var statearr_27695_27716 = state_27689__$1;
(statearr_27695_27716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (13))){
var state_27689__$1 = state_27689;
var statearr_27696_27717 = state_27689__$1;
(statearr_27696_27717[(2)] = null);

(statearr_27696_27717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (6))){
var inst_27666 = (state_27689[(7)]);
var inst_27672 = p.call(null,inst_27666);
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27672)){
var statearr_27697_27718 = state_27689__$1;
(statearr_27697_27718[(1)] = (9));

} else {
var statearr_27698_27719 = state_27689__$1;
(statearr_27698_27719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (12))){
var state_27689__$1 = state_27689;
var statearr_27699_27720 = state_27689__$1;
(statearr_27699_27720[(2)] = null);

(statearr_27699_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (2))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(4),ch);
} else {
if((state_val_27690 === (11))){
var inst_27666 = (state_27689[(7)]);
var inst_27676 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27689__$1,(8),inst_27676,inst_27666);
} else {
if((state_val_27690 === (9))){
var state_27689__$1 = state_27689;
var statearr_27700_27721 = state_27689__$1;
(statearr_27700_27721[(2)] = tc);

(statearr_27700_27721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (5))){
var inst_27669 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27670 = cljs.core.async.close_BANG_.call(null,fc);
var state_27689__$1 = (function (){var statearr_27701 = state_27689;
(statearr_27701[(8)] = inst_27669);

return statearr_27701;
})();
var statearr_27702_27722 = state_27689__$1;
(statearr_27702_27722[(2)] = inst_27670);

(statearr_27702_27722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (14))){
var inst_27683 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27703_27723 = state_27689__$1;
(statearr_27703_27723[(2)] = inst_27683);

(statearr_27703_27723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var state_27689__$1 = state_27689;
var statearr_27704_27724 = state_27689__$1;
(statearr_27704_27724[(2)] = fc);

(statearr_27704_27724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27678 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27678)){
var statearr_27705_27725 = state_27689__$1;
(statearr_27705_27725[(1)] = (12));

} else {
var statearr_27706_27726 = state_27689__$1;
(statearr_27706_27726[(1)] = (13));

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
});})(c__25398__auto___27712,tc,fc))
;
return ((function (switch__25311__auto__,c__25398__auto___27712,tc,fc){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_27707 = [null,null,null,null,null,null,null,null,null];
(statearr_27707[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_27707[(1)] = (1));

return statearr_27707;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_27689){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27708){if((e27708 instanceof Object)){
var ex__25315__auto__ = e27708;
var statearr_27709_27727 = state_27689;
(statearr_27709_27727[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27728 = state_27689;
state_27689 = G__27728;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___27712,tc,fc))
})();
var state__25400__auto__ = (function (){var statearr_27710 = f__25399__auto__.call(null);
(statearr_27710[(6)] = c__25398__auto___27712);

return statearr_27710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___27712,tc,fc))
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
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__){
return (function (state_27749){
var state_val_27750 = (state_27749[(1)]);
if((state_val_27750 === (7))){
var inst_27745 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27751_27769 = state_27749__$1;
(statearr_27751_27769[(2)] = inst_27745);

(statearr_27751_27769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (1))){
var inst_27729 = init;
var state_27749__$1 = (function (){var statearr_27752 = state_27749;
(statearr_27752[(7)] = inst_27729);

return statearr_27752;
})();
var statearr_27753_27770 = state_27749__$1;
(statearr_27753_27770[(2)] = null);

(statearr_27753_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (4))){
var inst_27732 = (state_27749[(8)]);
var inst_27732__$1 = (state_27749[(2)]);
var inst_27733 = (inst_27732__$1 == null);
var state_27749__$1 = (function (){var statearr_27754 = state_27749;
(statearr_27754[(8)] = inst_27732__$1);

return statearr_27754;
})();
if(cljs.core.truth_(inst_27733)){
var statearr_27755_27771 = state_27749__$1;
(statearr_27755_27771[(1)] = (5));

} else {
var statearr_27756_27772 = state_27749__$1;
(statearr_27756_27772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (6))){
var inst_27736 = (state_27749[(9)]);
var inst_27729 = (state_27749[(7)]);
var inst_27732 = (state_27749[(8)]);
var inst_27736__$1 = f.call(null,inst_27729,inst_27732);
var inst_27737 = cljs.core.reduced_QMARK_.call(null,inst_27736__$1);
var state_27749__$1 = (function (){var statearr_27757 = state_27749;
(statearr_27757[(9)] = inst_27736__$1);

return statearr_27757;
})();
if(inst_27737){
var statearr_27758_27773 = state_27749__$1;
(statearr_27758_27773[(1)] = (8));

} else {
var statearr_27759_27774 = state_27749__$1;
(statearr_27759_27774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (3))){
var inst_27747 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27749__$1,inst_27747);
} else {
if((state_val_27750 === (2))){
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(4),ch);
} else {
if((state_val_27750 === (9))){
var inst_27736 = (state_27749[(9)]);
var inst_27729 = inst_27736;
var state_27749__$1 = (function (){var statearr_27760 = state_27749;
(statearr_27760[(7)] = inst_27729);

return statearr_27760;
})();
var statearr_27761_27775 = state_27749__$1;
(statearr_27761_27775[(2)] = null);

(statearr_27761_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (5))){
var inst_27729 = (state_27749[(7)]);
var state_27749__$1 = state_27749;
var statearr_27762_27776 = state_27749__$1;
(statearr_27762_27776[(2)] = inst_27729);

(statearr_27762_27776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (10))){
var inst_27743 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27763_27777 = state_27749__$1;
(statearr_27763_27777[(2)] = inst_27743);

(statearr_27763_27777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (8))){
var inst_27736 = (state_27749[(9)]);
var inst_27739 = cljs.core.deref.call(null,inst_27736);
var state_27749__$1 = state_27749;
var statearr_27764_27778 = state_27749__$1;
(statearr_27764_27778[(2)] = inst_27739);

(statearr_27764_27778[(1)] = (10));


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
});})(c__25398__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25312__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25312__auto____0 = (function (){
var statearr_27765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27765[(0)] = cljs$core$async$reduce_$_state_machine__25312__auto__);

(statearr_27765[(1)] = (1));

return statearr_27765;
});
var cljs$core$async$reduce_$_state_machine__25312__auto____1 = (function (state_27749){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27766){if((e27766 instanceof Object)){
var ex__25315__auto__ = e27766;
var statearr_27767_27779 = state_27749;
(statearr_27767_27779[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27780 = state_27749;
state_27749 = G__27780;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25312__auto__ = function(state_27749){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25312__auto____1.call(this,state_27749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25312__auto____0;
cljs$core$async$reduce_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25312__auto____1;
return cljs$core$async$reduce_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__))
})();
var state__25400__auto__ = (function (){var statearr_27768 = f__25399__auto__.call(null);
(statearr_27768[(6)] = c__25398__auto__);

return statearr_27768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__))
);

return c__25398__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__,f__$1){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__,f__$1){
return (function (state_27786){
var state_val_27787 = (state_27786[(1)]);
if((state_val_27787 === (1))){
var inst_27781 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27786__$1,(2),inst_27781);
} else {
if((state_val_27787 === (2))){
var inst_27783 = (state_27786[(2)]);
var inst_27784 = f__$1.call(null,inst_27783);
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27786__$1,inst_27784);
} else {
return null;
}
}
});})(c__25398__auto__,f__$1))
;
return ((function (switch__25311__auto__,c__25398__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25312__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25312__auto____0 = (function (){
var statearr_27788 = [null,null,null,null,null,null,null];
(statearr_27788[(0)] = cljs$core$async$transduce_$_state_machine__25312__auto__);

(statearr_27788[(1)] = (1));

return statearr_27788;
});
var cljs$core$async$transduce_$_state_machine__25312__auto____1 = (function (state_27786){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27789){if((e27789 instanceof Object)){
var ex__25315__auto__ = e27789;
var statearr_27790_27792 = state_27786;
(statearr_27790_27792[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27786;
state_27786 = G__27793;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25312__auto__ = function(state_27786){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25312__auto____1.call(this,state_27786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25312__auto____0;
cljs$core$async$transduce_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25312__auto____1;
return cljs$core$async$transduce_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__,f__$1))
})();
var state__25400__auto__ = (function (){var statearr_27791 = f__25399__auto__.call(null);
(statearr_27791[(6)] = c__25398__auto__);

return statearr_27791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__,f__$1))
);

return c__25398__auto__;
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
var G__27795 = arguments.length;
switch (G__27795) {
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
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__){
return (function (state_27820){
var state_val_27821 = (state_27820[(1)]);
if((state_val_27821 === (7))){
var inst_27802 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27822_27843 = state_27820__$1;
(statearr_27822_27843[(2)] = inst_27802);

(statearr_27822_27843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (1))){
var inst_27796 = cljs.core.seq.call(null,coll);
var inst_27797 = inst_27796;
var state_27820__$1 = (function (){var statearr_27823 = state_27820;
(statearr_27823[(7)] = inst_27797);

return statearr_27823;
})();
var statearr_27824_27844 = state_27820__$1;
(statearr_27824_27844[(2)] = null);

(statearr_27824_27844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (4))){
var inst_27797 = (state_27820[(7)]);
var inst_27800 = cljs.core.first.call(null,inst_27797);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27820__$1,(7),ch,inst_27800);
} else {
if((state_val_27821 === (13))){
var inst_27814 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27825_27845 = state_27820__$1;
(statearr_27825_27845[(2)] = inst_27814);

(statearr_27825_27845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (6))){
var inst_27805 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27805)){
var statearr_27826_27846 = state_27820__$1;
(statearr_27826_27846[(1)] = (8));

} else {
var statearr_27827_27847 = state_27820__$1;
(statearr_27827_27847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (3))){
var inst_27818 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27820__$1,inst_27818);
} else {
if((state_val_27821 === (12))){
var state_27820__$1 = state_27820;
var statearr_27828_27848 = state_27820__$1;
(statearr_27828_27848[(2)] = null);

(statearr_27828_27848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (2))){
var inst_27797 = (state_27820[(7)]);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27797)){
var statearr_27829_27849 = state_27820__$1;
(statearr_27829_27849[(1)] = (4));

} else {
var statearr_27830_27850 = state_27820__$1;
(statearr_27830_27850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (11))){
var inst_27811 = cljs.core.async.close_BANG_.call(null,ch);
var state_27820__$1 = state_27820;
var statearr_27831_27851 = state_27820__$1;
(statearr_27831_27851[(2)] = inst_27811);

(statearr_27831_27851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (9))){
var state_27820__$1 = state_27820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27832_27852 = state_27820__$1;
(statearr_27832_27852[(1)] = (11));

} else {
var statearr_27833_27853 = state_27820__$1;
(statearr_27833_27853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (5))){
var inst_27797 = (state_27820[(7)]);
var state_27820__$1 = state_27820;
var statearr_27834_27854 = state_27820__$1;
(statearr_27834_27854[(2)] = inst_27797);

(statearr_27834_27854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (10))){
var inst_27816 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27835_27855 = state_27820__$1;
(statearr_27835_27855[(2)] = inst_27816);

(statearr_27835_27855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (8))){
var inst_27797 = (state_27820[(7)]);
var inst_27807 = cljs.core.next.call(null,inst_27797);
var inst_27797__$1 = inst_27807;
var state_27820__$1 = (function (){var statearr_27836 = state_27820;
(statearr_27836[(7)] = inst_27797__$1);

return statearr_27836;
})();
var statearr_27837_27856 = state_27820__$1;
(statearr_27837_27856[(2)] = null);

(statearr_27837_27856[(1)] = (2));


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
});})(c__25398__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_27838 = [null,null,null,null,null,null,null,null];
(statearr_27838[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_27838[(1)] = (1));

return statearr_27838;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_27820){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object)){
var ex__25315__auto__ = e27839;
var statearr_27840_27857 = state_27820;
(statearr_27840_27857[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27858 = state_27820;
state_27820 = G__27858;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_27820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_27820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__))
})();
var state__25400__auto__ = (function (){var statearr_27841 = f__25399__auto__.call(null);
(statearr_27841[(6)] = c__25398__auto__);

return statearr_27841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__))
);

return c__25398__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27859 = (function (ch,cs,meta27860){
this.ch = ch;
this.cs = cs;
this.meta27860 = meta27860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27861,meta27860__$1){
var self__ = this;
var _27861__$1 = this;
return (new cljs.core.async.t_cljs$core$async27859(self__.ch,self__.cs,meta27860__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27861){
var self__ = this;
var _27861__$1 = this;
return self__.meta27860;
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27860","meta27860",-640482517,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27859";

cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27859");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27859.
 */
cljs.core.async.__GT_t_cljs$core$async27859 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27859(ch__$1,cs__$1,meta27860){
return (new cljs.core.async.t_cljs$core$async27859(ch__$1,cs__$1,meta27860));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27859(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25398__auto___28081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28081,cs,m,dchan,dctr,done){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28081,cs,m,dchan,dctr,done){
return (function (state_27996){
var state_val_27997 = (state_27996[(1)]);
if((state_val_27997 === (7))){
var inst_27992 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_27998_28082 = state_27996__$1;
(statearr_27998_28082[(2)] = inst_27992);

(statearr_27998_28082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (20))){
var inst_27895 = (state_27996[(7)]);
var inst_27907 = cljs.core.first.call(null,inst_27895);
var inst_27908 = cljs.core.nth.call(null,inst_27907,(0),null);
var inst_27909 = cljs.core.nth.call(null,inst_27907,(1),null);
var state_27996__$1 = (function (){var statearr_27999 = state_27996;
(statearr_27999[(8)] = inst_27908);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27909)){
var statearr_28000_28083 = state_27996__$1;
(statearr_28000_28083[(1)] = (22));

} else {
var statearr_28001_28084 = state_27996__$1;
(statearr_28001_28084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (27))){
var inst_27864 = (state_27996[(9)]);
var inst_27939 = (state_27996[(10)]);
var inst_27937 = (state_27996[(11)]);
var inst_27944 = (state_27996[(12)]);
var inst_27944__$1 = cljs.core._nth.call(null,inst_27937,inst_27939);
var inst_27945 = cljs.core.async.put_BANG_.call(null,inst_27944__$1,inst_27864,done);
var state_27996__$1 = (function (){var statearr_28002 = state_27996;
(statearr_28002[(12)] = inst_27944__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_28003_28085 = state_27996__$1;
(statearr_28003_28085[(1)] = (30));

} else {
var statearr_28004_28086 = state_27996__$1;
(statearr_28004_28086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (1))){
var state_27996__$1 = state_27996;
var statearr_28005_28087 = state_27996__$1;
(statearr_28005_28087[(2)] = null);

(statearr_28005_28087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (24))){
var inst_27895 = (state_27996[(7)]);
var inst_27914 = (state_27996[(2)]);
var inst_27915 = cljs.core.next.call(null,inst_27895);
var inst_27873 = inst_27915;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28006 = state_27996;
(statearr_28006[(13)] = inst_27874);

(statearr_28006[(14)] = inst_27875);

(statearr_28006[(15)] = inst_27914);

(statearr_28006[(16)] = inst_27873);

(statearr_28006[(17)] = inst_27876);

return statearr_28006;
})();
var statearr_28007_28088 = state_27996__$1;
(statearr_28007_28088[(2)] = null);

(statearr_28007_28088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (39))){
var state_27996__$1 = state_27996;
var statearr_28011_28089 = state_27996__$1;
(statearr_28011_28089[(2)] = null);

(statearr_28011_28089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (4))){
var inst_27864 = (state_27996[(9)]);
var inst_27864__$1 = (state_27996[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var state_27996__$1 = (function (){var statearr_28012 = state_27996;
(statearr_28012[(9)] = inst_27864__$1);

return statearr_28012;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_28013_28090 = state_27996__$1;
(statearr_28013_28090[(1)] = (5));

} else {
var statearr_28014_28091 = state_27996__$1;
(statearr_28014_28091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (15))){
var inst_27874 = (state_27996[(13)]);
var inst_27875 = (state_27996[(14)]);
var inst_27873 = (state_27996[(16)]);
var inst_27876 = (state_27996[(17)]);
var inst_27891 = (state_27996[(2)]);
var inst_27892 = (inst_27876 + (1));
var tmp28008 = inst_27874;
var tmp28009 = inst_27875;
var tmp28010 = inst_27873;
var inst_27873__$1 = tmp28010;
var inst_27874__$1 = tmp28008;
var inst_27875__$1 = tmp28009;
var inst_27876__$1 = inst_27892;
var state_27996__$1 = (function (){var statearr_28015 = state_27996;
(statearr_28015[(13)] = inst_27874__$1);

(statearr_28015[(14)] = inst_27875__$1);

(statearr_28015[(16)] = inst_27873__$1);

(statearr_28015[(17)] = inst_27876__$1);

(statearr_28015[(18)] = inst_27891);

return statearr_28015;
})();
var statearr_28016_28092 = state_27996__$1;
(statearr_28016_28092[(2)] = null);

(statearr_28016_28092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (21))){
var inst_27918 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28020_28093 = state_27996__$1;
(statearr_28020_28093[(2)] = inst_27918);

(statearr_28020_28093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (31))){
var inst_27944 = (state_27996[(12)]);
var inst_27948 = done.call(null,null);
var inst_27949 = cljs.core.async.untap_STAR_.call(null,m,inst_27944);
var state_27996__$1 = (function (){var statearr_28021 = state_27996;
(statearr_28021[(19)] = inst_27948);

return statearr_28021;
})();
var statearr_28022_28094 = state_27996__$1;
(statearr_28022_28094[(2)] = inst_27949);

(statearr_28022_28094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (32))){
var inst_27939 = (state_27996[(10)]);
var inst_27937 = (state_27996[(11)]);
var inst_27936 = (state_27996[(20)]);
var inst_27938 = (state_27996[(21)]);
var inst_27951 = (state_27996[(2)]);
var inst_27952 = (inst_27939 + (1));
var tmp28017 = inst_27937;
var tmp28018 = inst_27936;
var tmp28019 = inst_27938;
var inst_27936__$1 = tmp28018;
var inst_27937__$1 = tmp28017;
var inst_27938__$1 = tmp28019;
var inst_27939__$1 = inst_27952;
var state_27996__$1 = (function (){var statearr_28023 = state_27996;
(statearr_28023[(22)] = inst_27951);

(statearr_28023[(10)] = inst_27939__$1);

(statearr_28023[(11)] = inst_27937__$1);

(statearr_28023[(20)] = inst_27936__$1);

(statearr_28023[(21)] = inst_27938__$1);

return statearr_28023;
})();
var statearr_28024_28095 = state_27996__$1;
(statearr_28024_28095[(2)] = null);

(statearr_28024_28095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (40))){
var inst_27964 = (state_27996[(23)]);
var inst_27968 = done.call(null,null);
var inst_27969 = cljs.core.async.untap_STAR_.call(null,m,inst_27964);
var state_27996__$1 = (function (){var statearr_28025 = state_27996;
(statearr_28025[(24)] = inst_27968);

return statearr_28025;
})();
var statearr_28026_28096 = state_27996__$1;
(statearr_28026_28096[(2)] = inst_27969);

(statearr_28026_28096[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (33))){
var inst_27955 = (state_27996[(25)]);
var inst_27957 = cljs.core.chunked_seq_QMARK_.call(null,inst_27955);
var state_27996__$1 = state_27996;
if(inst_27957){
var statearr_28027_28097 = state_27996__$1;
(statearr_28027_28097[(1)] = (36));

} else {
var statearr_28028_28098 = state_27996__$1;
(statearr_28028_28098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (13))){
var inst_27885 = (state_27996[(26)]);
var inst_27888 = cljs.core.async.close_BANG_.call(null,inst_27885);
var state_27996__$1 = state_27996;
var statearr_28029_28099 = state_27996__$1;
(statearr_28029_28099[(2)] = inst_27888);

(statearr_28029_28099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (22))){
var inst_27908 = (state_27996[(8)]);
var inst_27911 = cljs.core.async.close_BANG_.call(null,inst_27908);
var state_27996__$1 = state_27996;
var statearr_28030_28100 = state_27996__$1;
(statearr_28030_28100[(2)] = inst_27911);

(statearr_28030_28100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (36))){
var inst_27955 = (state_27996[(25)]);
var inst_27959 = cljs.core.chunk_first.call(null,inst_27955);
var inst_27960 = cljs.core.chunk_rest.call(null,inst_27955);
var inst_27961 = cljs.core.count.call(null,inst_27959);
var inst_27936 = inst_27960;
var inst_27937 = inst_27959;
var inst_27938 = inst_27961;
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28031 = state_27996;
(statearr_28031[(10)] = inst_27939);

(statearr_28031[(11)] = inst_27937);

(statearr_28031[(20)] = inst_27936);

(statearr_28031[(21)] = inst_27938);

return statearr_28031;
})();
var statearr_28032_28101 = state_27996__$1;
(statearr_28032_28101[(2)] = null);

(statearr_28032_28101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (41))){
var inst_27955 = (state_27996[(25)]);
var inst_27971 = (state_27996[(2)]);
var inst_27972 = cljs.core.next.call(null,inst_27955);
var inst_27936 = inst_27972;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28033 = state_27996;
(statearr_28033[(10)] = inst_27939);

(statearr_28033[(11)] = inst_27937);

(statearr_28033[(27)] = inst_27971);

(statearr_28033[(20)] = inst_27936);

(statearr_28033[(21)] = inst_27938);

return statearr_28033;
})();
var statearr_28034_28102 = state_27996__$1;
(statearr_28034_28102[(2)] = null);

(statearr_28034_28102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (43))){
var state_27996__$1 = state_27996;
var statearr_28035_28103 = state_27996__$1;
(statearr_28035_28103[(2)] = null);

(statearr_28035_28103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (29))){
var inst_27980 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28036_28104 = state_27996__$1;
(statearr_28036_28104[(2)] = inst_27980);

(statearr_28036_28104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (44))){
var inst_27989 = (state_27996[(2)]);
var state_27996__$1 = (function (){var statearr_28037 = state_27996;
(statearr_28037[(28)] = inst_27989);

return statearr_28037;
})();
var statearr_28038_28105 = state_27996__$1;
(statearr_28038_28105[(2)] = null);

(statearr_28038_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (6))){
var inst_27928 = (state_27996[(29)]);
var inst_27927 = cljs.core.deref.call(null,cs);
var inst_27928__$1 = cljs.core.keys.call(null,inst_27927);
var inst_27929 = cljs.core.count.call(null,inst_27928__$1);
var inst_27930 = cljs.core.reset_BANG_.call(null,dctr,inst_27929);
var inst_27935 = cljs.core.seq.call(null,inst_27928__$1);
var inst_27936 = inst_27935;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28039 = state_27996;
(statearr_28039[(10)] = inst_27939);

(statearr_28039[(29)] = inst_27928__$1);

(statearr_28039[(11)] = inst_27937);

(statearr_28039[(20)] = inst_27936);

(statearr_28039[(21)] = inst_27938);

(statearr_28039[(30)] = inst_27930);

return statearr_28039;
})();
var statearr_28040_28106 = state_27996__$1;
(statearr_28040_28106[(2)] = null);

(statearr_28040_28106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (28))){
var inst_27955 = (state_27996[(25)]);
var inst_27936 = (state_27996[(20)]);
var inst_27955__$1 = cljs.core.seq.call(null,inst_27936);
var state_27996__$1 = (function (){var statearr_28041 = state_27996;
(statearr_28041[(25)] = inst_27955__$1);

return statearr_28041;
})();
if(inst_27955__$1){
var statearr_28042_28107 = state_27996__$1;
(statearr_28042_28107[(1)] = (33));

} else {
var statearr_28043_28108 = state_27996__$1;
(statearr_28043_28108[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (25))){
var inst_27939 = (state_27996[(10)]);
var inst_27938 = (state_27996[(21)]);
var inst_27941 = (inst_27939 < inst_27938);
var inst_27942 = inst_27941;
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27942)){
var statearr_28044_28109 = state_27996__$1;
(statearr_28044_28109[(1)] = (27));

} else {
var statearr_28045_28110 = state_27996__$1;
(statearr_28045_28110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (34))){
var state_27996__$1 = state_27996;
var statearr_28046_28111 = state_27996__$1;
(statearr_28046_28111[(2)] = null);

(statearr_28046_28111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (17))){
var state_27996__$1 = state_27996;
var statearr_28047_28112 = state_27996__$1;
(statearr_28047_28112[(2)] = null);

(statearr_28047_28112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (3))){
var inst_27994 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27996__$1,inst_27994);
} else {
if((state_val_27997 === (12))){
var inst_27923 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28048_28113 = state_27996__$1;
(statearr_28048_28113[(2)] = inst_27923);

(statearr_28048_28113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (2))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(4),ch);
} else {
if((state_val_27997 === (23))){
var state_27996__$1 = state_27996;
var statearr_28049_28114 = state_27996__$1;
(statearr_28049_28114[(2)] = null);

(statearr_28049_28114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (35))){
var inst_27978 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28050_28115 = state_27996__$1;
(statearr_28050_28115[(2)] = inst_27978);

(statearr_28050_28115[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (19))){
var inst_27895 = (state_27996[(7)]);
var inst_27899 = cljs.core.chunk_first.call(null,inst_27895);
var inst_27900 = cljs.core.chunk_rest.call(null,inst_27895);
var inst_27901 = cljs.core.count.call(null,inst_27899);
var inst_27873 = inst_27900;
var inst_27874 = inst_27899;
var inst_27875 = inst_27901;
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28051 = state_27996;
(statearr_28051[(13)] = inst_27874);

(statearr_28051[(14)] = inst_27875);

(statearr_28051[(16)] = inst_27873);

(statearr_28051[(17)] = inst_27876);

return statearr_28051;
})();
var statearr_28052_28116 = state_27996__$1;
(statearr_28052_28116[(2)] = null);

(statearr_28052_28116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (11))){
var inst_27895 = (state_27996[(7)]);
var inst_27873 = (state_27996[(16)]);
var inst_27895__$1 = cljs.core.seq.call(null,inst_27873);
var state_27996__$1 = (function (){var statearr_28053 = state_27996;
(statearr_28053[(7)] = inst_27895__$1);

return statearr_28053;
})();
if(inst_27895__$1){
var statearr_28054_28117 = state_27996__$1;
(statearr_28054_28117[(1)] = (16));

} else {
var statearr_28055_28118 = state_27996__$1;
(statearr_28055_28118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (9))){
var inst_27925 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28056_28119 = state_27996__$1;
(statearr_28056_28119[(2)] = inst_27925);

(statearr_28056_28119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (5))){
var inst_27871 = cljs.core.deref.call(null,cs);
var inst_27872 = cljs.core.seq.call(null,inst_27871);
var inst_27873 = inst_27872;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28057 = state_27996;
(statearr_28057[(13)] = inst_27874);

(statearr_28057[(14)] = inst_27875);

(statearr_28057[(16)] = inst_27873);

(statearr_28057[(17)] = inst_27876);

return statearr_28057;
})();
var statearr_28058_28120 = state_27996__$1;
(statearr_28058_28120[(2)] = null);

(statearr_28058_28120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (14))){
var state_27996__$1 = state_27996;
var statearr_28059_28121 = state_27996__$1;
(statearr_28059_28121[(2)] = null);

(statearr_28059_28121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (45))){
var inst_27986 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28060_28122 = state_27996__$1;
(statearr_28060_28122[(2)] = inst_27986);

(statearr_28060_28122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (26))){
var inst_27928 = (state_27996[(29)]);
var inst_27982 = (state_27996[(2)]);
var inst_27983 = cljs.core.seq.call(null,inst_27928);
var state_27996__$1 = (function (){var statearr_28061 = state_27996;
(statearr_28061[(31)] = inst_27982);

return statearr_28061;
})();
if(inst_27983){
var statearr_28062_28123 = state_27996__$1;
(statearr_28062_28123[(1)] = (42));

} else {
var statearr_28063_28124 = state_27996__$1;
(statearr_28063_28124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (16))){
var inst_27895 = (state_27996[(7)]);
var inst_27897 = cljs.core.chunked_seq_QMARK_.call(null,inst_27895);
var state_27996__$1 = state_27996;
if(inst_27897){
var statearr_28064_28125 = state_27996__$1;
(statearr_28064_28125[(1)] = (19));

} else {
var statearr_28065_28126 = state_27996__$1;
(statearr_28065_28126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (38))){
var inst_27975 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28066_28127 = state_27996__$1;
(statearr_28066_28127[(2)] = inst_27975);

(statearr_28066_28127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (30))){
var state_27996__$1 = state_27996;
var statearr_28067_28128 = state_27996__$1;
(statearr_28067_28128[(2)] = null);

(statearr_28067_28128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (10))){
var inst_27874 = (state_27996[(13)]);
var inst_27876 = (state_27996[(17)]);
var inst_27884 = cljs.core._nth.call(null,inst_27874,inst_27876);
var inst_27885 = cljs.core.nth.call(null,inst_27884,(0),null);
var inst_27886 = cljs.core.nth.call(null,inst_27884,(1),null);
var state_27996__$1 = (function (){var statearr_28068 = state_27996;
(statearr_28068[(26)] = inst_27885);

return statearr_28068;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_28069_28129 = state_27996__$1;
(statearr_28069_28129[(1)] = (13));

} else {
var statearr_28070_28130 = state_27996__$1;
(statearr_28070_28130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (18))){
var inst_27921 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28071_28131 = state_27996__$1;
(statearr_28071_28131[(2)] = inst_27921);

(statearr_28071_28131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (42))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(45),dchan);
} else {
if((state_val_27997 === (37))){
var inst_27955 = (state_27996[(25)]);
var inst_27864 = (state_27996[(9)]);
var inst_27964 = (state_27996[(23)]);
var inst_27964__$1 = cljs.core.first.call(null,inst_27955);
var inst_27965 = cljs.core.async.put_BANG_.call(null,inst_27964__$1,inst_27864,done);
var state_27996__$1 = (function (){var statearr_28072 = state_27996;
(statearr_28072[(23)] = inst_27964__$1);

return statearr_28072;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28073_28132 = state_27996__$1;
(statearr_28073_28132[(1)] = (39));

} else {
var statearr_28074_28133 = state_27996__$1;
(statearr_28074_28133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (8))){
var inst_27875 = (state_27996[(14)]);
var inst_27876 = (state_27996[(17)]);
var inst_27878 = (inst_27876 < inst_27875);
var inst_27879 = inst_27878;
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27879)){
var statearr_28075_28134 = state_27996__$1;
(statearr_28075_28134[(1)] = (10));

} else {
var statearr_28076_28135 = state_27996__$1;
(statearr_28076_28135[(1)] = (11));

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
});})(c__25398__auto___28081,cs,m,dchan,dctr,done))
;
return ((function (switch__25311__auto__,c__25398__auto___28081,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25312__auto__ = null;
var cljs$core$async$mult_$_state_machine__25312__auto____0 = (function (){
var statearr_28077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28077[(0)] = cljs$core$async$mult_$_state_machine__25312__auto__);

(statearr_28077[(1)] = (1));

return statearr_28077;
});
var cljs$core$async$mult_$_state_machine__25312__auto____1 = (function (state_27996){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_27996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28078){if((e28078 instanceof Object)){
var ex__25315__auto__ = e28078;
var statearr_28079_28136 = state_27996;
(statearr_28079_28136[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28137 = state_27996;
state_27996 = G__28137;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25312__auto__ = function(state_27996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25312__auto____1.call(this,state_27996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25312__auto____0;
cljs$core$async$mult_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25312__auto____1;
return cljs$core$async$mult_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28081,cs,m,dchan,dctr,done))
})();
var state__25400__auto__ = (function (){var statearr_28080 = f__25399__auto__.call(null);
(statearr_28080[(6)] = c__25398__auto___28081);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28081,cs,m,dchan,dctr,done))
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
var G__28139 = arguments.length;
switch (G__28139) {
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
var len__4499__auto___28151 = arguments.length;
var i__4500__auto___28152 = (0);
while(true){
if((i__4500__auto___28152 < len__4499__auto___28151)){
args__4502__auto__.push((arguments[i__4500__auto___28152]));

var G__28153 = (i__4500__auto___28152 + (1));
i__4500__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28145){
var map__28146 = p__28145;
var map__28146__$1 = ((((!((map__28146 == null)))?(((((map__28146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28146):map__28146);
var opts = map__28146__$1;
var statearr_28148_28154 = state;
(statearr_28148_28154[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28146,map__28146__$1,opts){
return (function (val){
var statearr_28149_28155 = state;
(statearr_28149_28155[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28146,map__28146__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28150_28156 = state;
(statearr_28150_28156[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28141){
var G__28142 = cljs.core.first.call(null,seq28141);
var seq28141__$1 = cljs.core.next.call(null,seq28141);
var G__28143 = cljs.core.first.call(null,seq28141__$1);
var seq28141__$2 = cljs.core.next.call(null,seq28141__$1);
var G__28144 = cljs.core.first.call(null,seq28141__$2);
var seq28141__$3 = cljs.core.next.call(null,seq28141__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28142,G__28143,G__28144,seq28141__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28157 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28158){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28158 = meta28158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28159,meta28158__$1){
var self__ = this;
var _28159__$1 = this;
return (new cljs.core.async.t_cljs$core$async28157(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28158__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28159){
var self__ = this;
var _28159__$1 = this;
return self__.meta28158;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28157.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28158","meta28158",446014237,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28157";

cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28157");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28157.
 */
cljs.core.async.__GT_t_cljs$core$async28157 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28157(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28158){
return (new cljs.core.async.t_cljs$core$async28157(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28158));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28157(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25398__auto___28321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (7))){
var inst_28176 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28263_28322 = state_28261__$1;
(statearr_28263_28322[(2)] = inst_28176);

(statearr_28263_28322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (20))){
var inst_28188 = (state_28261[(7)]);
var state_28261__$1 = state_28261;
var statearr_28264_28323 = state_28261__$1;
(statearr_28264_28323[(2)] = inst_28188);

(statearr_28264_28323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (27))){
var state_28261__$1 = state_28261;
var statearr_28265_28324 = state_28261__$1;
(statearr_28265_28324[(2)] = null);

(statearr_28265_28324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (1))){
var inst_28163 = (state_28261[(8)]);
var inst_28163__$1 = calc_state.call(null);
var inst_28165 = (inst_28163__$1 == null);
var inst_28166 = cljs.core.not.call(null,inst_28165);
var state_28261__$1 = (function (){var statearr_28266 = state_28261;
(statearr_28266[(8)] = inst_28163__$1);

return statearr_28266;
})();
if(inst_28166){
var statearr_28267_28325 = state_28261__$1;
(statearr_28267_28325[(1)] = (2));

} else {
var statearr_28268_28326 = state_28261__$1;
(statearr_28268_28326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (24))){
var inst_28212 = (state_28261[(9)]);
var inst_28221 = (state_28261[(10)]);
var inst_28235 = (state_28261[(11)]);
var inst_28235__$1 = inst_28212.call(null,inst_28221);
var state_28261__$1 = (function (){var statearr_28269 = state_28261;
(statearr_28269[(11)] = inst_28235__$1);

return statearr_28269;
})();
if(cljs.core.truth_(inst_28235__$1)){
var statearr_28270_28327 = state_28261__$1;
(statearr_28270_28327[(1)] = (29));

} else {
var statearr_28271_28328 = state_28261__$1;
(statearr_28271_28328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (4))){
var inst_28179 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28179)){
var statearr_28272_28329 = state_28261__$1;
(statearr_28272_28329[(1)] = (8));

} else {
var statearr_28273_28330 = state_28261__$1;
(statearr_28273_28330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (15))){
var inst_28206 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28206)){
var statearr_28274_28331 = state_28261__$1;
(statearr_28274_28331[(1)] = (19));

} else {
var statearr_28275_28332 = state_28261__$1;
(statearr_28275_28332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (21))){
var inst_28211 = (state_28261[(12)]);
var inst_28211__$1 = (state_28261[(2)]);
var inst_28212 = cljs.core.get.call(null,inst_28211__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28213 = cljs.core.get.call(null,inst_28211__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28214 = cljs.core.get.call(null,inst_28211__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28261__$1 = (function (){var statearr_28276 = state_28261;
(statearr_28276[(9)] = inst_28212);

(statearr_28276[(13)] = inst_28213);

(statearr_28276[(12)] = inst_28211__$1);

return statearr_28276;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28261__$1,(22),inst_28214);
} else {
if((state_val_28262 === (31))){
var inst_28243 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28243)){
var statearr_28277_28333 = state_28261__$1;
(statearr_28277_28333[(1)] = (32));

} else {
var statearr_28278_28334 = state_28261__$1;
(statearr_28278_28334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (32))){
var inst_28220 = (state_28261[(14)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28261__$1,(35),out,inst_28220);
} else {
if((state_val_28262 === (33))){
var inst_28211 = (state_28261[(12)]);
var inst_28188 = inst_28211;
var state_28261__$1 = (function (){var statearr_28279 = state_28261;
(statearr_28279[(7)] = inst_28188);

return statearr_28279;
})();
var statearr_28280_28335 = state_28261__$1;
(statearr_28280_28335[(2)] = null);

(statearr_28280_28335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (13))){
var inst_28188 = (state_28261[(7)]);
var inst_28195 = inst_28188.cljs$lang$protocol_mask$partition0$;
var inst_28196 = (inst_28195 & (64));
var inst_28197 = inst_28188.cljs$core$ISeq$;
var inst_28198 = (cljs.core.PROTOCOL_SENTINEL === inst_28197);
var inst_28199 = ((inst_28196) || (inst_28198));
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28199)){
var statearr_28281_28336 = state_28261__$1;
(statearr_28281_28336[(1)] = (16));

} else {
var statearr_28282_28337 = state_28261__$1;
(statearr_28282_28337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (22))){
var inst_28221 = (state_28261[(10)]);
var inst_28220 = (state_28261[(14)]);
var inst_28219 = (state_28261[(2)]);
var inst_28220__$1 = cljs.core.nth.call(null,inst_28219,(0),null);
var inst_28221__$1 = cljs.core.nth.call(null,inst_28219,(1),null);
var inst_28222 = (inst_28220__$1 == null);
var inst_28223 = cljs.core._EQ_.call(null,inst_28221__$1,change);
var inst_28224 = ((inst_28222) || (inst_28223));
var state_28261__$1 = (function (){var statearr_28283 = state_28261;
(statearr_28283[(10)] = inst_28221__$1);

(statearr_28283[(14)] = inst_28220__$1);

return statearr_28283;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28284_28338 = state_28261__$1;
(statearr_28284_28338[(1)] = (23));

} else {
var statearr_28285_28339 = state_28261__$1;
(statearr_28285_28339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (36))){
var inst_28211 = (state_28261[(12)]);
var inst_28188 = inst_28211;
var state_28261__$1 = (function (){var statearr_28286 = state_28261;
(statearr_28286[(7)] = inst_28188);

return statearr_28286;
})();
var statearr_28287_28340 = state_28261__$1;
(statearr_28287_28340[(2)] = null);

(statearr_28287_28340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (29))){
var inst_28235 = (state_28261[(11)]);
var state_28261__$1 = state_28261;
var statearr_28288_28341 = state_28261__$1;
(statearr_28288_28341[(2)] = inst_28235);

(statearr_28288_28341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (6))){
var state_28261__$1 = state_28261;
var statearr_28289_28342 = state_28261__$1;
(statearr_28289_28342[(2)] = false);

(statearr_28289_28342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (28))){
var inst_28231 = (state_28261[(2)]);
var inst_28232 = calc_state.call(null);
var inst_28188 = inst_28232;
var state_28261__$1 = (function (){var statearr_28290 = state_28261;
(statearr_28290[(7)] = inst_28188);

(statearr_28290[(15)] = inst_28231);

return statearr_28290;
})();
var statearr_28291_28343 = state_28261__$1;
(statearr_28291_28343[(2)] = null);

(statearr_28291_28343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (25))){
var inst_28257 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28292_28344 = state_28261__$1;
(statearr_28292_28344[(2)] = inst_28257);

(statearr_28292_28344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (34))){
var inst_28255 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28293_28345 = state_28261__$1;
(statearr_28293_28345[(2)] = inst_28255);

(statearr_28293_28345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (17))){
var state_28261__$1 = state_28261;
var statearr_28294_28346 = state_28261__$1;
(statearr_28294_28346[(2)] = false);

(statearr_28294_28346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (3))){
var state_28261__$1 = state_28261;
var statearr_28295_28347 = state_28261__$1;
(statearr_28295_28347[(2)] = false);

(statearr_28295_28347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (12))){
var inst_28259 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (2))){
var inst_28163 = (state_28261[(8)]);
var inst_28168 = inst_28163.cljs$lang$protocol_mask$partition0$;
var inst_28169 = (inst_28168 & (64));
var inst_28170 = inst_28163.cljs$core$ISeq$;
var inst_28171 = (cljs.core.PROTOCOL_SENTINEL === inst_28170);
var inst_28172 = ((inst_28169) || (inst_28171));
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28172)){
var statearr_28296_28348 = state_28261__$1;
(statearr_28296_28348[(1)] = (5));

} else {
var statearr_28297_28349 = state_28261__$1;
(statearr_28297_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (23))){
var inst_28220 = (state_28261[(14)]);
var inst_28226 = (inst_28220 == null);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28226)){
var statearr_28298_28350 = state_28261__$1;
(statearr_28298_28350[(1)] = (26));

} else {
var statearr_28299_28351 = state_28261__$1;
(statearr_28299_28351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (35))){
var inst_28246 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28246)){
var statearr_28300_28352 = state_28261__$1;
(statearr_28300_28352[(1)] = (36));

} else {
var statearr_28301_28353 = state_28261__$1;
(statearr_28301_28353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (19))){
var inst_28188 = (state_28261[(7)]);
var inst_28208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28188);
var state_28261__$1 = state_28261;
var statearr_28302_28354 = state_28261__$1;
(statearr_28302_28354[(2)] = inst_28208);

(statearr_28302_28354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (11))){
var inst_28188 = (state_28261[(7)]);
var inst_28192 = (inst_28188 == null);
var inst_28193 = cljs.core.not.call(null,inst_28192);
var state_28261__$1 = state_28261;
if(inst_28193){
var statearr_28303_28355 = state_28261__$1;
(statearr_28303_28355[(1)] = (13));

} else {
var statearr_28304_28356 = state_28261__$1;
(statearr_28304_28356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (9))){
var inst_28163 = (state_28261[(8)]);
var state_28261__$1 = state_28261;
var statearr_28305_28357 = state_28261__$1;
(statearr_28305_28357[(2)] = inst_28163);

(statearr_28305_28357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (5))){
var state_28261__$1 = state_28261;
var statearr_28306_28358 = state_28261__$1;
(statearr_28306_28358[(2)] = true);

(statearr_28306_28358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (14))){
var state_28261__$1 = state_28261;
var statearr_28307_28359 = state_28261__$1;
(statearr_28307_28359[(2)] = false);

(statearr_28307_28359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (26))){
var inst_28221 = (state_28261[(10)]);
var inst_28228 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28221);
var state_28261__$1 = state_28261;
var statearr_28308_28360 = state_28261__$1;
(statearr_28308_28360[(2)] = inst_28228);

(statearr_28308_28360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (16))){
var state_28261__$1 = state_28261;
var statearr_28309_28361 = state_28261__$1;
(statearr_28309_28361[(2)] = true);

(statearr_28309_28361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (38))){
var inst_28251 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28310_28362 = state_28261__$1;
(statearr_28310_28362[(2)] = inst_28251);

(statearr_28310_28362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (30))){
var inst_28212 = (state_28261[(9)]);
var inst_28213 = (state_28261[(13)]);
var inst_28221 = (state_28261[(10)]);
var inst_28238 = cljs.core.empty_QMARK_.call(null,inst_28212);
var inst_28239 = inst_28213.call(null,inst_28221);
var inst_28240 = cljs.core.not.call(null,inst_28239);
var inst_28241 = ((inst_28238) && (inst_28240));
var state_28261__$1 = state_28261;
var statearr_28311_28363 = state_28261__$1;
(statearr_28311_28363[(2)] = inst_28241);

(statearr_28311_28363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (10))){
var inst_28163 = (state_28261[(8)]);
var inst_28184 = (state_28261[(2)]);
var inst_28185 = cljs.core.get.call(null,inst_28184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28186 = cljs.core.get.call(null,inst_28184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28187 = cljs.core.get.call(null,inst_28184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28188 = inst_28163;
var state_28261__$1 = (function (){var statearr_28312 = state_28261;
(statearr_28312[(16)] = inst_28185);

(statearr_28312[(7)] = inst_28188);

(statearr_28312[(17)] = inst_28186);

(statearr_28312[(18)] = inst_28187);

return statearr_28312;
})();
var statearr_28313_28364 = state_28261__$1;
(statearr_28313_28364[(2)] = null);

(statearr_28313_28364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (18))){
var inst_28203 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28314_28365 = state_28261__$1;
(statearr_28314_28365[(2)] = inst_28203);

(statearr_28314_28365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (37))){
var state_28261__$1 = state_28261;
var statearr_28315_28366 = state_28261__$1;
(statearr_28315_28366[(2)] = null);

(statearr_28315_28366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (8))){
var inst_28163 = (state_28261[(8)]);
var inst_28181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28163);
var state_28261__$1 = state_28261;
var statearr_28316_28367 = state_28261__$1;
(statearr_28316_28367[(2)] = inst_28181);

(statearr_28316_28367[(1)] = (10));


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
});})(c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25311__auto__,c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25312__auto__ = null;
var cljs$core$async$mix_$_state_machine__25312__auto____0 = (function (){
var statearr_28317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28317[(0)] = cljs$core$async$mix_$_state_machine__25312__auto__);

(statearr_28317[(1)] = (1));

return statearr_28317;
});
var cljs$core$async$mix_$_state_machine__25312__auto____1 = (function (state_28261){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28318){if((e28318 instanceof Object)){
var ex__25315__auto__ = e28318;
var statearr_28319_28368 = state_28261;
(statearr_28319_28368[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28369 = state_28261;
state_28261 = G__28369;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25312__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25312__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25312__auto____0;
cljs$core$async$mix_$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25312__auto____1;
return cljs$core$async$mix_$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25400__auto__ = (function (){var statearr_28320 = f__25399__auto__.call(null);
(statearr_28320[(6)] = c__25398__auto___28321);

return statearr_28320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28371 = arguments.length;
switch (G__28371) {
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
var G__28375 = arguments.length;
switch (G__28375) {
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
return (function (p1__28373_SHARP_){
if(cljs.core.truth_(p1__28373_SHARP_.call(null,topic))){
return p1__28373_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28376 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28377){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28377 = meta28377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28378,meta28377__$1){
var self__ = this;
var _28378__$1 = this;
return (new cljs.core.async.t_cljs$core$async28376(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28377__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28378){
var self__ = this;
var _28378__$1 = this;
return self__.meta28377;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28377","meta28377",-1327643802,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28376";

cljs.core.async.t_cljs$core$async28376.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28376");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28376.
 */
cljs.core.async.__GT_t_cljs$core$async28376 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28377){
return (new cljs.core.async.t_cljs$core$async28376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28377));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28376(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25398__auto___28496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28496,mults,ensure_mult,p){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28496,mults,ensure_mult,p){
return (function (state_28450){
var state_val_28451 = (state_28450[(1)]);
if((state_val_28451 === (7))){
var inst_28446 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28452_28497 = state_28450__$1;
(statearr_28452_28497[(2)] = inst_28446);

(statearr_28452_28497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (20))){
var state_28450__$1 = state_28450;
var statearr_28453_28498 = state_28450__$1;
(statearr_28453_28498[(2)] = null);

(statearr_28453_28498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (1))){
var state_28450__$1 = state_28450;
var statearr_28454_28499 = state_28450__$1;
(statearr_28454_28499[(2)] = null);

(statearr_28454_28499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (24))){
var inst_28429 = (state_28450[(7)]);
var inst_28438 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28429);
var state_28450__$1 = state_28450;
var statearr_28455_28500 = state_28450__$1;
(statearr_28455_28500[(2)] = inst_28438);

(statearr_28455_28500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (4))){
var inst_28381 = (state_28450[(8)]);
var inst_28381__$1 = (state_28450[(2)]);
var inst_28382 = (inst_28381__$1 == null);
var state_28450__$1 = (function (){var statearr_28456 = state_28450;
(statearr_28456[(8)] = inst_28381__$1);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28382)){
var statearr_28457_28501 = state_28450__$1;
(statearr_28457_28501[(1)] = (5));

} else {
var statearr_28458_28502 = state_28450__$1;
(statearr_28458_28502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (15))){
var inst_28423 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28459_28503 = state_28450__$1;
(statearr_28459_28503[(2)] = inst_28423);

(statearr_28459_28503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (21))){
var inst_28443 = (state_28450[(2)]);
var state_28450__$1 = (function (){var statearr_28460 = state_28450;
(statearr_28460[(9)] = inst_28443);

return statearr_28460;
})();
var statearr_28461_28504 = state_28450__$1;
(statearr_28461_28504[(2)] = null);

(statearr_28461_28504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (13))){
var inst_28405 = (state_28450[(10)]);
var inst_28407 = cljs.core.chunked_seq_QMARK_.call(null,inst_28405);
var state_28450__$1 = state_28450;
if(inst_28407){
var statearr_28462_28505 = state_28450__$1;
(statearr_28462_28505[(1)] = (16));

} else {
var statearr_28463_28506 = state_28450__$1;
(statearr_28463_28506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (22))){
var inst_28435 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
if(cljs.core.truth_(inst_28435)){
var statearr_28464_28507 = state_28450__$1;
(statearr_28464_28507[(1)] = (23));

} else {
var statearr_28465_28508 = state_28450__$1;
(statearr_28465_28508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (6))){
var inst_28429 = (state_28450[(7)]);
var inst_28381 = (state_28450[(8)]);
var inst_28431 = (state_28450[(11)]);
var inst_28429__$1 = topic_fn.call(null,inst_28381);
var inst_28430 = cljs.core.deref.call(null,mults);
var inst_28431__$1 = cljs.core.get.call(null,inst_28430,inst_28429__$1);
var state_28450__$1 = (function (){var statearr_28466 = state_28450;
(statearr_28466[(7)] = inst_28429__$1);

(statearr_28466[(11)] = inst_28431__$1);

return statearr_28466;
})();
if(cljs.core.truth_(inst_28431__$1)){
var statearr_28467_28509 = state_28450__$1;
(statearr_28467_28509[(1)] = (19));

} else {
var statearr_28468_28510 = state_28450__$1;
(statearr_28468_28510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (25))){
var inst_28440 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28469_28511 = state_28450__$1;
(statearr_28469_28511[(2)] = inst_28440);

(statearr_28469_28511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (17))){
var inst_28405 = (state_28450[(10)]);
var inst_28414 = cljs.core.first.call(null,inst_28405);
var inst_28415 = cljs.core.async.muxch_STAR_.call(null,inst_28414);
var inst_28416 = cljs.core.async.close_BANG_.call(null,inst_28415);
var inst_28417 = cljs.core.next.call(null,inst_28405);
var inst_28391 = inst_28417;
var inst_28392 = null;
var inst_28393 = (0);
var inst_28394 = (0);
var state_28450__$1 = (function (){var statearr_28470 = state_28450;
(statearr_28470[(12)] = inst_28391);

(statearr_28470[(13)] = inst_28394);

(statearr_28470[(14)] = inst_28416);

(statearr_28470[(15)] = inst_28392);

(statearr_28470[(16)] = inst_28393);

return statearr_28470;
})();
var statearr_28471_28512 = state_28450__$1;
(statearr_28471_28512[(2)] = null);

(statearr_28471_28512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (3))){
var inst_28448 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28450__$1,inst_28448);
} else {
if((state_val_28451 === (12))){
var inst_28425 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28472_28513 = state_28450__$1;
(statearr_28472_28513[(2)] = inst_28425);

(statearr_28472_28513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (2))){
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28450__$1,(4),ch);
} else {
if((state_val_28451 === (23))){
var state_28450__$1 = state_28450;
var statearr_28473_28514 = state_28450__$1;
(statearr_28473_28514[(2)] = null);

(statearr_28473_28514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (19))){
var inst_28381 = (state_28450[(8)]);
var inst_28431 = (state_28450[(11)]);
var inst_28433 = cljs.core.async.muxch_STAR_.call(null,inst_28431);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28450__$1,(22),inst_28433,inst_28381);
} else {
if((state_val_28451 === (11))){
var inst_28391 = (state_28450[(12)]);
var inst_28405 = (state_28450[(10)]);
var inst_28405__$1 = cljs.core.seq.call(null,inst_28391);
var state_28450__$1 = (function (){var statearr_28474 = state_28450;
(statearr_28474[(10)] = inst_28405__$1);

return statearr_28474;
})();
if(inst_28405__$1){
var statearr_28475_28515 = state_28450__$1;
(statearr_28475_28515[(1)] = (13));

} else {
var statearr_28476_28516 = state_28450__$1;
(statearr_28476_28516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (9))){
var inst_28427 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28477_28517 = state_28450__$1;
(statearr_28477_28517[(2)] = inst_28427);

(statearr_28477_28517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (5))){
var inst_28388 = cljs.core.deref.call(null,mults);
var inst_28389 = cljs.core.vals.call(null,inst_28388);
var inst_28390 = cljs.core.seq.call(null,inst_28389);
var inst_28391 = inst_28390;
var inst_28392 = null;
var inst_28393 = (0);
var inst_28394 = (0);
var state_28450__$1 = (function (){var statearr_28478 = state_28450;
(statearr_28478[(12)] = inst_28391);

(statearr_28478[(13)] = inst_28394);

(statearr_28478[(15)] = inst_28392);

(statearr_28478[(16)] = inst_28393);

return statearr_28478;
})();
var statearr_28479_28518 = state_28450__$1;
(statearr_28479_28518[(2)] = null);

(statearr_28479_28518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (14))){
var state_28450__$1 = state_28450;
var statearr_28483_28519 = state_28450__$1;
(statearr_28483_28519[(2)] = null);

(statearr_28483_28519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (16))){
var inst_28405 = (state_28450[(10)]);
var inst_28409 = cljs.core.chunk_first.call(null,inst_28405);
var inst_28410 = cljs.core.chunk_rest.call(null,inst_28405);
var inst_28411 = cljs.core.count.call(null,inst_28409);
var inst_28391 = inst_28410;
var inst_28392 = inst_28409;
var inst_28393 = inst_28411;
var inst_28394 = (0);
var state_28450__$1 = (function (){var statearr_28484 = state_28450;
(statearr_28484[(12)] = inst_28391);

(statearr_28484[(13)] = inst_28394);

(statearr_28484[(15)] = inst_28392);

(statearr_28484[(16)] = inst_28393);

return statearr_28484;
})();
var statearr_28485_28520 = state_28450__$1;
(statearr_28485_28520[(2)] = null);

(statearr_28485_28520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (10))){
var inst_28391 = (state_28450[(12)]);
var inst_28394 = (state_28450[(13)]);
var inst_28392 = (state_28450[(15)]);
var inst_28393 = (state_28450[(16)]);
var inst_28399 = cljs.core._nth.call(null,inst_28392,inst_28394);
var inst_28400 = cljs.core.async.muxch_STAR_.call(null,inst_28399);
var inst_28401 = cljs.core.async.close_BANG_.call(null,inst_28400);
var inst_28402 = (inst_28394 + (1));
var tmp28480 = inst_28391;
var tmp28481 = inst_28392;
var tmp28482 = inst_28393;
var inst_28391__$1 = tmp28480;
var inst_28392__$1 = tmp28481;
var inst_28393__$1 = tmp28482;
var inst_28394__$1 = inst_28402;
var state_28450__$1 = (function (){var statearr_28486 = state_28450;
(statearr_28486[(12)] = inst_28391__$1);

(statearr_28486[(17)] = inst_28401);

(statearr_28486[(13)] = inst_28394__$1);

(statearr_28486[(15)] = inst_28392__$1);

(statearr_28486[(16)] = inst_28393__$1);

return statearr_28486;
})();
var statearr_28487_28521 = state_28450__$1;
(statearr_28487_28521[(2)] = null);

(statearr_28487_28521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (18))){
var inst_28420 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28488_28522 = state_28450__$1;
(statearr_28488_28522[(2)] = inst_28420);

(statearr_28488_28522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (8))){
var inst_28394 = (state_28450[(13)]);
var inst_28393 = (state_28450[(16)]);
var inst_28396 = (inst_28394 < inst_28393);
var inst_28397 = inst_28396;
var state_28450__$1 = state_28450;
if(cljs.core.truth_(inst_28397)){
var statearr_28489_28523 = state_28450__$1;
(statearr_28489_28523[(1)] = (10));

} else {
var statearr_28490_28524 = state_28450__$1;
(statearr_28490_28524[(1)] = (11));

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
});})(c__25398__auto___28496,mults,ensure_mult,p))
;
return ((function (switch__25311__auto__,c__25398__auto___28496,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28491[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28491[(1)] = (1));

return statearr_28491;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28450){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28492){if((e28492 instanceof Object)){
var ex__25315__auto__ = e28492;
var statearr_28493_28525 = state_28450;
(statearr_28493_28525[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28526 = state_28450;
state_28450 = G__28526;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28496,mults,ensure_mult,p))
})();
var state__25400__auto__ = (function (){var statearr_28494 = f__25399__auto__.call(null);
(statearr_28494[(6)] = c__25398__auto___28496);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28496,mults,ensure_mult,p))
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
var G__28528 = arguments.length;
switch (G__28528) {
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
var G__28531 = arguments.length;
switch (G__28531) {
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
var G__28534 = arguments.length;
switch (G__28534) {
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
var c__25398__auto___28601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28573){
var state_val_28574 = (state_28573[(1)]);
if((state_val_28574 === (7))){
var state_28573__$1 = state_28573;
var statearr_28575_28602 = state_28573__$1;
(statearr_28575_28602[(2)] = null);

(statearr_28575_28602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (1))){
var state_28573__$1 = state_28573;
var statearr_28576_28603 = state_28573__$1;
(statearr_28576_28603[(2)] = null);

(statearr_28576_28603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (4))){
var inst_28537 = (state_28573[(7)]);
var inst_28539 = (inst_28537 < cnt);
var state_28573__$1 = state_28573;
if(cljs.core.truth_(inst_28539)){
var statearr_28577_28604 = state_28573__$1;
(statearr_28577_28604[(1)] = (6));

} else {
var statearr_28578_28605 = state_28573__$1;
(statearr_28578_28605[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (15))){
var inst_28569 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
var statearr_28579_28606 = state_28573__$1;
(statearr_28579_28606[(2)] = inst_28569);

(statearr_28579_28606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (13))){
var inst_28562 = cljs.core.async.close_BANG_.call(null,out);
var state_28573__$1 = state_28573;
var statearr_28580_28607 = state_28573__$1;
(statearr_28580_28607[(2)] = inst_28562);

(statearr_28580_28607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (6))){
var state_28573__$1 = state_28573;
var statearr_28581_28608 = state_28573__$1;
(statearr_28581_28608[(2)] = null);

(statearr_28581_28608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (3))){
var inst_28571 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28573__$1,inst_28571);
} else {
if((state_val_28574 === (12))){
var inst_28559 = (state_28573[(8)]);
var inst_28559__$1 = (state_28573[(2)]);
var inst_28560 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28559__$1);
var state_28573__$1 = (function (){var statearr_28582 = state_28573;
(statearr_28582[(8)] = inst_28559__$1);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28560)){
var statearr_28583_28609 = state_28573__$1;
(statearr_28583_28609[(1)] = (13));

} else {
var statearr_28584_28610 = state_28573__$1;
(statearr_28584_28610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (2))){
var inst_28536 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28537 = (0);
var state_28573__$1 = (function (){var statearr_28585 = state_28573;
(statearr_28585[(7)] = inst_28537);

(statearr_28585[(9)] = inst_28536);

return statearr_28585;
})();
var statearr_28586_28611 = state_28573__$1;
(statearr_28586_28611[(2)] = null);

(statearr_28586_28611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (11))){
var inst_28537 = (state_28573[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28573,(10),Object,null,(9));
var inst_28546 = chs__$1.call(null,inst_28537);
var inst_28547 = done.call(null,inst_28537);
var inst_28548 = cljs.core.async.take_BANG_.call(null,inst_28546,inst_28547);
var state_28573__$1 = state_28573;
var statearr_28587_28612 = state_28573__$1;
(statearr_28587_28612[(2)] = inst_28548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (9))){
var inst_28537 = (state_28573[(7)]);
var inst_28550 = (state_28573[(2)]);
var inst_28551 = (inst_28537 + (1));
var inst_28537__$1 = inst_28551;
var state_28573__$1 = (function (){var statearr_28588 = state_28573;
(statearr_28588[(10)] = inst_28550);

(statearr_28588[(7)] = inst_28537__$1);

return statearr_28588;
})();
var statearr_28589_28613 = state_28573__$1;
(statearr_28589_28613[(2)] = null);

(statearr_28589_28613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (5))){
var inst_28557 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28590 = state_28573;
(statearr_28590[(11)] = inst_28557);

return statearr_28590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28573__$1,(12),dchan);
} else {
if((state_val_28574 === (14))){
var inst_28559 = (state_28573[(8)]);
var inst_28564 = cljs.core.apply.call(null,f,inst_28559);
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28573__$1,(16),out,inst_28564);
} else {
if((state_val_28574 === (16))){
var inst_28566 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28591 = state_28573;
(statearr_28591[(12)] = inst_28566);

return statearr_28591;
})();
var statearr_28592_28614 = state_28573__$1;
(statearr_28592_28614[(2)] = null);

(statearr_28592_28614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (10))){
var inst_28541 = (state_28573[(2)]);
var inst_28542 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28573__$1 = (function (){var statearr_28593 = state_28573;
(statearr_28593[(13)] = inst_28541);

return statearr_28593;
})();
var statearr_28594_28615 = state_28573__$1;
(statearr_28594_28615[(2)] = inst_28542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (8))){
var inst_28555 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
var statearr_28595_28616 = state_28573__$1;
(statearr_28595_28616[(2)] = inst_28555);

(statearr_28595_28616[(1)] = (5));


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
});})(c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25311__auto__,c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28573){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__25315__auto__ = e28597;
var statearr_28598_28617 = state_28573;
(statearr_28598_28617[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28618 = state_28573;
state_28573 = G__28618;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25400__auto__ = (function (){var statearr_28599 = f__25399__auto__.call(null);
(statearr_28599[(6)] = c__25398__auto___28601);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28601,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28621 = arguments.length;
switch (G__28621) {
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
var c__25398__auto___28675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28675,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28675,out){
return (function (state_28653){
var state_val_28654 = (state_28653[(1)]);
if((state_val_28654 === (7))){
var inst_28632 = (state_28653[(7)]);
var inst_28633 = (state_28653[(8)]);
var inst_28632__$1 = (state_28653[(2)]);
var inst_28633__$1 = cljs.core.nth.call(null,inst_28632__$1,(0),null);
var inst_28634 = cljs.core.nth.call(null,inst_28632__$1,(1),null);
var inst_28635 = (inst_28633__$1 == null);
var state_28653__$1 = (function (){var statearr_28655 = state_28653;
(statearr_28655[(7)] = inst_28632__$1);

(statearr_28655[(9)] = inst_28634);

(statearr_28655[(8)] = inst_28633__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28635)){
var statearr_28656_28676 = state_28653__$1;
(statearr_28656_28676[(1)] = (8));

} else {
var statearr_28657_28677 = state_28653__$1;
(statearr_28657_28677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (1))){
var inst_28622 = cljs.core.vec.call(null,chs);
var inst_28623 = inst_28622;
var state_28653__$1 = (function (){var statearr_28658 = state_28653;
(statearr_28658[(10)] = inst_28623);

return statearr_28658;
})();
var statearr_28659_28678 = state_28653__$1;
(statearr_28659_28678[(2)] = null);

(statearr_28659_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (4))){
var inst_28623 = (state_28653[(10)]);
var state_28653__$1 = state_28653;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28653__$1,(7),inst_28623);
} else {
if((state_val_28654 === (6))){
var inst_28649 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28660_28679 = state_28653__$1;
(statearr_28660_28679[(2)] = inst_28649);

(statearr_28660_28679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (3))){
var inst_28651 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else {
if((state_val_28654 === (2))){
var inst_28623 = (state_28653[(10)]);
var inst_28625 = cljs.core.count.call(null,inst_28623);
var inst_28626 = (inst_28625 > (0));
var state_28653__$1 = state_28653;
if(cljs.core.truth_(inst_28626)){
var statearr_28662_28680 = state_28653__$1;
(statearr_28662_28680[(1)] = (4));

} else {
var statearr_28663_28681 = state_28653__$1;
(statearr_28663_28681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (11))){
var inst_28623 = (state_28653[(10)]);
var inst_28642 = (state_28653[(2)]);
var tmp28661 = inst_28623;
var inst_28623__$1 = tmp28661;
var state_28653__$1 = (function (){var statearr_28664 = state_28653;
(statearr_28664[(11)] = inst_28642);

(statearr_28664[(10)] = inst_28623__$1);

return statearr_28664;
})();
var statearr_28665_28682 = state_28653__$1;
(statearr_28665_28682[(2)] = null);

(statearr_28665_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (9))){
var inst_28633 = (state_28653[(8)]);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28653__$1,(11),out,inst_28633);
} else {
if((state_val_28654 === (5))){
var inst_28647 = cljs.core.async.close_BANG_.call(null,out);
var state_28653__$1 = state_28653;
var statearr_28666_28683 = state_28653__$1;
(statearr_28666_28683[(2)] = inst_28647);

(statearr_28666_28683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (10))){
var inst_28645 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28667_28684 = state_28653__$1;
(statearr_28667_28684[(2)] = inst_28645);

(statearr_28667_28684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (8))){
var inst_28632 = (state_28653[(7)]);
var inst_28634 = (state_28653[(9)]);
var inst_28633 = (state_28653[(8)]);
var inst_28623 = (state_28653[(10)]);
var inst_28637 = (function (){var cs = inst_28623;
var vec__28628 = inst_28632;
var v = inst_28633;
var c = inst_28634;
return ((function (cs,vec__28628,v,c,inst_28632,inst_28634,inst_28633,inst_28623,state_val_28654,c__25398__auto___28675,out){
return (function (p1__28619_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28619_SHARP_);
});
;})(cs,vec__28628,v,c,inst_28632,inst_28634,inst_28633,inst_28623,state_val_28654,c__25398__auto___28675,out))
})();
var inst_28638 = cljs.core.filterv.call(null,inst_28637,inst_28623);
var inst_28623__$1 = inst_28638;
var state_28653__$1 = (function (){var statearr_28668 = state_28653;
(statearr_28668[(10)] = inst_28623__$1);

return statearr_28668;
})();
var statearr_28669_28685 = state_28653__$1;
(statearr_28669_28685[(2)] = null);

(statearr_28669_28685[(1)] = (2));


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
});})(c__25398__auto___28675,out))
;
return ((function (switch__25311__auto__,c__25398__auto___28675,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28670[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28670[(1)] = (1));

return statearr_28670;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28653){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28671){if((e28671 instanceof Object)){
var ex__25315__auto__ = e28671;
var statearr_28672_28686 = state_28653;
(statearr_28672_28686[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28687 = state_28653;
state_28653 = G__28687;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28675,out))
})();
var state__25400__auto__ = (function (){var statearr_28673 = f__25399__auto__.call(null);
(statearr_28673[(6)] = c__25398__auto___28675);

return statearr_28673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28675,out))
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
var G__28689 = arguments.length;
switch (G__28689) {
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
var c__25398__auto___28734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28734,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28734,out){
return (function (state_28713){
var state_val_28714 = (state_28713[(1)]);
if((state_val_28714 === (7))){
var inst_28695 = (state_28713[(7)]);
var inst_28695__$1 = (state_28713[(2)]);
var inst_28696 = (inst_28695__$1 == null);
var inst_28697 = cljs.core.not.call(null,inst_28696);
var state_28713__$1 = (function (){var statearr_28715 = state_28713;
(statearr_28715[(7)] = inst_28695__$1);

return statearr_28715;
})();
if(inst_28697){
var statearr_28716_28735 = state_28713__$1;
(statearr_28716_28735[(1)] = (8));

} else {
var statearr_28717_28736 = state_28713__$1;
(statearr_28717_28736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (1))){
var inst_28690 = (0);
var state_28713__$1 = (function (){var statearr_28718 = state_28713;
(statearr_28718[(8)] = inst_28690);

return statearr_28718;
})();
var statearr_28719_28737 = state_28713__$1;
(statearr_28719_28737[(2)] = null);

(statearr_28719_28737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (4))){
var state_28713__$1 = state_28713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28713__$1,(7),ch);
} else {
if((state_val_28714 === (6))){
var inst_28708 = (state_28713[(2)]);
var state_28713__$1 = state_28713;
var statearr_28720_28738 = state_28713__$1;
(statearr_28720_28738[(2)] = inst_28708);

(statearr_28720_28738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (3))){
var inst_28710 = (state_28713[(2)]);
var inst_28711 = cljs.core.async.close_BANG_.call(null,out);
var state_28713__$1 = (function (){var statearr_28721 = state_28713;
(statearr_28721[(9)] = inst_28710);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28713__$1,inst_28711);
} else {
if((state_val_28714 === (2))){
var inst_28690 = (state_28713[(8)]);
var inst_28692 = (inst_28690 < n);
var state_28713__$1 = state_28713;
if(cljs.core.truth_(inst_28692)){
var statearr_28722_28739 = state_28713__$1;
(statearr_28722_28739[(1)] = (4));

} else {
var statearr_28723_28740 = state_28713__$1;
(statearr_28723_28740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (11))){
var inst_28690 = (state_28713[(8)]);
var inst_28700 = (state_28713[(2)]);
var inst_28701 = (inst_28690 + (1));
var inst_28690__$1 = inst_28701;
var state_28713__$1 = (function (){var statearr_28724 = state_28713;
(statearr_28724[(8)] = inst_28690__$1);

(statearr_28724[(10)] = inst_28700);

return statearr_28724;
})();
var statearr_28725_28741 = state_28713__$1;
(statearr_28725_28741[(2)] = null);

(statearr_28725_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (9))){
var state_28713__$1 = state_28713;
var statearr_28726_28742 = state_28713__$1;
(statearr_28726_28742[(2)] = null);

(statearr_28726_28742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (5))){
var state_28713__$1 = state_28713;
var statearr_28727_28743 = state_28713__$1;
(statearr_28727_28743[(2)] = null);

(statearr_28727_28743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (10))){
var inst_28705 = (state_28713[(2)]);
var state_28713__$1 = state_28713;
var statearr_28728_28744 = state_28713__$1;
(statearr_28728_28744[(2)] = inst_28705);

(statearr_28728_28744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28714 === (8))){
var inst_28695 = (state_28713[(7)]);
var state_28713__$1 = state_28713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28713__$1,(11),out,inst_28695);
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
});})(c__25398__auto___28734,out))
;
return ((function (switch__25311__auto__,c__25398__auto___28734,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28729[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28729[(1)] = (1));

return statearr_28729;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28713){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28730){if((e28730 instanceof Object)){
var ex__25315__auto__ = e28730;
var statearr_28731_28745 = state_28713;
(statearr_28731_28745[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28746 = state_28713;
state_28713 = G__28746;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28734,out))
})();
var state__25400__auto__ = (function (){var statearr_28732 = f__25399__auto__.call(null);
(statearr_28732[(6)] = c__25398__auto___28734);

return statearr_28732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28734,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28748 = (function (f,ch,meta28749){
this.f = f;
this.ch = ch;
this.meta28749 = meta28749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28750,meta28749__$1){
var self__ = this;
var _28750__$1 = this;
return (new cljs.core.async.t_cljs$core$async28748(self__.f,self__.ch,meta28749__$1));
});

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28750){
var self__ = this;
var _28750__$1 = this;
return self__.meta28749;
});

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28751 = (function (f,ch,meta28749,_,fn1,meta28752){
this.f = f;
this.ch = ch;
this.meta28749 = meta28749;
this._ = _;
this.fn1 = fn1;
this.meta28752 = meta28752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28753,meta28752__$1){
var self__ = this;
var _28753__$1 = this;
return (new cljs.core.async.t_cljs$core$async28751(self__.f,self__.ch,self__.meta28749,self__._,self__.fn1,meta28752__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28753){
var self__ = this;
var _28753__$1 = this;
return self__.meta28752;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28747_SHARP_){
return f1.call(null,(((p1__28747_SHARP_ == null))?null:self__.f.call(null,p1__28747_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28749","meta28749",-974902901,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28748","cljs.core.async/t_cljs$core$async28748",-247115549,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28752","meta28752",-83234868,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28751";

cljs.core.async.t_cljs$core$async28751.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28751");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28751.
 */
cljs.core.async.__GT_t_cljs$core$async28751 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28751(f__$1,ch__$1,meta28749__$1,___$2,fn1__$1,meta28752){
return (new cljs.core.async.t_cljs$core$async28751(f__$1,ch__$1,meta28749__$1,___$2,fn1__$1,meta28752));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28751(self__.f,self__.ch,self__.meta28749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28749","meta28749",-974902901,null)], null);
});

cljs.core.async.t_cljs$core$async28748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28748";

cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28748");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28748.
 */
cljs.core.async.__GT_t_cljs$core$async28748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28748(f__$1,ch__$1,meta28749){
return (new cljs.core.async.t_cljs$core$async28748(f__$1,ch__$1,meta28749));
});

}

return (new cljs.core.async.t_cljs$core$async28748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28754 = (function (f,ch,meta28755){
this.f = f;
this.ch = ch;
this.meta28755 = meta28755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28756,meta28755__$1){
var self__ = this;
var _28756__$1 = this;
return (new cljs.core.async.t_cljs$core$async28754(self__.f,self__.ch,meta28755__$1));
});

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28756){
var self__ = this;
var _28756__$1 = this;
return self__.meta28755;
});

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28755","meta28755",1413291984,null)], null);
});

cljs.core.async.t_cljs$core$async28754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28754";

cljs.core.async.t_cljs$core$async28754.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28754");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28754.
 */
cljs.core.async.__GT_t_cljs$core$async28754 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28754(f__$1,ch__$1,meta28755){
return (new cljs.core.async.t_cljs$core$async28754(f__$1,ch__$1,meta28755));
});

}

return (new cljs.core.async.t_cljs$core$async28754(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28757 = (function (p,ch,meta28758){
this.p = p;
this.ch = ch;
this.meta28758 = meta28758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28759,meta28758__$1){
var self__ = this;
var _28759__$1 = this;
return (new cljs.core.async.t_cljs$core$async28757(self__.p,self__.ch,meta28758__$1));
});

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28759){
var self__ = this;
var _28759__$1 = this;
return self__.meta28758;
});

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28758","meta28758",1202138674,null)], null);
});

cljs.core.async.t_cljs$core$async28757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28757";

cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28757");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28757.
 */
cljs.core.async.__GT_t_cljs$core$async28757 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28757(p__$1,ch__$1,meta28758){
return (new cljs.core.async.t_cljs$core$async28757(p__$1,ch__$1,meta28758));
});

}

return (new cljs.core.async.t_cljs$core$async28757(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28761 = arguments.length;
switch (G__28761) {
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
var c__25398__auto___28801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28801,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28801,out){
return (function (state_28782){
var state_val_28783 = (state_28782[(1)]);
if((state_val_28783 === (7))){
var inst_28778 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28784_28802 = state_28782__$1;
(statearr_28784_28802[(2)] = inst_28778);

(statearr_28784_28802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (1))){
var state_28782__$1 = state_28782;
var statearr_28785_28803 = state_28782__$1;
(statearr_28785_28803[(2)] = null);

(statearr_28785_28803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (4))){
var inst_28764 = (state_28782[(7)]);
var inst_28764__$1 = (state_28782[(2)]);
var inst_28765 = (inst_28764__$1 == null);
var state_28782__$1 = (function (){var statearr_28786 = state_28782;
(statearr_28786[(7)] = inst_28764__$1);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28765)){
var statearr_28787_28804 = state_28782__$1;
(statearr_28787_28804[(1)] = (5));

} else {
var statearr_28788_28805 = state_28782__$1;
(statearr_28788_28805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (6))){
var inst_28764 = (state_28782[(7)]);
var inst_28769 = p.call(null,inst_28764);
var state_28782__$1 = state_28782;
if(cljs.core.truth_(inst_28769)){
var statearr_28789_28806 = state_28782__$1;
(statearr_28789_28806[(1)] = (8));

} else {
var statearr_28790_28807 = state_28782__$1;
(statearr_28790_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (3))){
var inst_28780 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28782__$1,inst_28780);
} else {
if((state_val_28783 === (2))){
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28782__$1,(4),ch);
} else {
if((state_val_28783 === (11))){
var inst_28772 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28791_28808 = state_28782__$1;
(statearr_28791_28808[(2)] = inst_28772);

(statearr_28791_28808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (9))){
var state_28782__$1 = state_28782;
var statearr_28792_28809 = state_28782__$1;
(statearr_28792_28809[(2)] = null);

(statearr_28792_28809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (5))){
var inst_28767 = cljs.core.async.close_BANG_.call(null,out);
var state_28782__$1 = state_28782;
var statearr_28793_28810 = state_28782__$1;
(statearr_28793_28810[(2)] = inst_28767);

(statearr_28793_28810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (10))){
var inst_28775 = (state_28782[(2)]);
var state_28782__$1 = (function (){var statearr_28794 = state_28782;
(statearr_28794[(8)] = inst_28775);

return statearr_28794;
})();
var statearr_28795_28811 = state_28782__$1;
(statearr_28795_28811[(2)] = null);

(statearr_28795_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (8))){
var inst_28764 = (state_28782[(7)]);
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28782__$1,(11),out,inst_28764);
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
});})(c__25398__auto___28801,out))
;
return ((function (switch__25311__auto__,c__25398__auto___28801,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28796 = [null,null,null,null,null,null,null,null,null];
(statearr_28796[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28796[(1)] = (1));

return statearr_28796;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28782){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28797){if((e28797 instanceof Object)){
var ex__25315__auto__ = e28797;
var statearr_28798_28812 = state_28782;
(statearr_28798_28812[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28813 = state_28782;
state_28782 = G__28813;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28801,out))
})();
var state__25400__auto__ = (function (){var statearr_28799 = f__25399__auto__.call(null);
(statearr_28799[(6)] = c__25398__auto___28801);

return statearr_28799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28801,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28815 = arguments.length;
switch (G__28815) {
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
var c__25398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto__){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto__){
return (function (state_28878){
var state_val_28879 = (state_28878[(1)]);
if((state_val_28879 === (7))){
var inst_28874 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28880_28918 = state_28878__$1;
(statearr_28880_28918[(2)] = inst_28874);

(statearr_28880_28918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (20))){
var inst_28844 = (state_28878[(7)]);
var inst_28855 = (state_28878[(2)]);
var inst_28856 = cljs.core.next.call(null,inst_28844);
var inst_28830 = inst_28856;
var inst_28831 = null;
var inst_28832 = (0);
var inst_28833 = (0);
var state_28878__$1 = (function (){var statearr_28881 = state_28878;
(statearr_28881[(8)] = inst_28831);

(statearr_28881[(9)] = inst_28832);

(statearr_28881[(10)] = inst_28833);

(statearr_28881[(11)] = inst_28855);

(statearr_28881[(12)] = inst_28830);

return statearr_28881;
})();
var statearr_28882_28919 = state_28878__$1;
(statearr_28882_28919[(2)] = null);

(statearr_28882_28919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (1))){
var state_28878__$1 = state_28878;
var statearr_28883_28920 = state_28878__$1;
(statearr_28883_28920[(2)] = null);

(statearr_28883_28920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (4))){
var inst_28819 = (state_28878[(13)]);
var inst_28819__$1 = (state_28878[(2)]);
var inst_28820 = (inst_28819__$1 == null);
var state_28878__$1 = (function (){var statearr_28884 = state_28878;
(statearr_28884[(13)] = inst_28819__$1);

return statearr_28884;
})();
if(cljs.core.truth_(inst_28820)){
var statearr_28885_28921 = state_28878__$1;
(statearr_28885_28921[(1)] = (5));

} else {
var statearr_28886_28922 = state_28878__$1;
(statearr_28886_28922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (15))){
var state_28878__$1 = state_28878;
var statearr_28890_28923 = state_28878__$1;
(statearr_28890_28923[(2)] = null);

(statearr_28890_28923[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (21))){
var state_28878__$1 = state_28878;
var statearr_28891_28924 = state_28878__$1;
(statearr_28891_28924[(2)] = null);

(statearr_28891_28924[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (13))){
var inst_28831 = (state_28878[(8)]);
var inst_28832 = (state_28878[(9)]);
var inst_28833 = (state_28878[(10)]);
var inst_28830 = (state_28878[(12)]);
var inst_28840 = (state_28878[(2)]);
var inst_28841 = (inst_28833 + (1));
var tmp28887 = inst_28831;
var tmp28888 = inst_28832;
var tmp28889 = inst_28830;
var inst_28830__$1 = tmp28889;
var inst_28831__$1 = tmp28887;
var inst_28832__$1 = tmp28888;
var inst_28833__$1 = inst_28841;
var state_28878__$1 = (function (){var statearr_28892 = state_28878;
(statearr_28892[(8)] = inst_28831__$1);

(statearr_28892[(14)] = inst_28840);

(statearr_28892[(9)] = inst_28832__$1);

(statearr_28892[(10)] = inst_28833__$1);

(statearr_28892[(12)] = inst_28830__$1);

return statearr_28892;
})();
var statearr_28893_28925 = state_28878__$1;
(statearr_28893_28925[(2)] = null);

(statearr_28893_28925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (22))){
var state_28878__$1 = state_28878;
var statearr_28894_28926 = state_28878__$1;
(statearr_28894_28926[(2)] = null);

(statearr_28894_28926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (6))){
var inst_28819 = (state_28878[(13)]);
var inst_28828 = f.call(null,inst_28819);
var inst_28829 = cljs.core.seq.call(null,inst_28828);
var inst_28830 = inst_28829;
var inst_28831 = null;
var inst_28832 = (0);
var inst_28833 = (0);
var state_28878__$1 = (function (){var statearr_28895 = state_28878;
(statearr_28895[(8)] = inst_28831);

(statearr_28895[(9)] = inst_28832);

(statearr_28895[(10)] = inst_28833);

(statearr_28895[(12)] = inst_28830);

return statearr_28895;
})();
var statearr_28896_28927 = state_28878__$1;
(statearr_28896_28927[(2)] = null);

(statearr_28896_28927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (17))){
var inst_28844 = (state_28878[(7)]);
var inst_28848 = cljs.core.chunk_first.call(null,inst_28844);
var inst_28849 = cljs.core.chunk_rest.call(null,inst_28844);
var inst_28850 = cljs.core.count.call(null,inst_28848);
var inst_28830 = inst_28849;
var inst_28831 = inst_28848;
var inst_28832 = inst_28850;
var inst_28833 = (0);
var state_28878__$1 = (function (){var statearr_28897 = state_28878;
(statearr_28897[(8)] = inst_28831);

(statearr_28897[(9)] = inst_28832);

(statearr_28897[(10)] = inst_28833);

(statearr_28897[(12)] = inst_28830);

return statearr_28897;
})();
var statearr_28898_28928 = state_28878__$1;
(statearr_28898_28928[(2)] = null);

(statearr_28898_28928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (3))){
var inst_28876 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28878__$1,inst_28876);
} else {
if((state_val_28879 === (12))){
var inst_28864 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28899_28929 = state_28878__$1;
(statearr_28899_28929[(2)] = inst_28864);

(statearr_28899_28929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (2))){
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28878__$1,(4),in$);
} else {
if((state_val_28879 === (23))){
var inst_28872 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28900_28930 = state_28878__$1;
(statearr_28900_28930[(2)] = inst_28872);

(statearr_28900_28930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (19))){
var inst_28859 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28901_28931 = state_28878__$1;
(statearr_28901_28931[(2)] = inst_28859);

(statearr_28901_28931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (11))){
var inst_28844 = (state_28878[(7)]);
var inst_28830 = (state_28878[(12)]);
var inst_28844__$1 = cljs.core.seq.call(null,inst_28830);
var state_28878__$1 = (function (){var statearr_28902 = state_28878;
(statearr_28902[(7)] = inst_28844__$1);

return statearr_28902;
})();
if(inst_28844__$1){
var statearr_28903_28932 = state_28878__$1;
(statearr_28903_28932[(1)] = (14));

} else {
var statearr_28904_28933 = state_28878__$1;
(statearr_28904_28933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (9))){
var inst_28866 = (state_28878[(2)]);
var inst_28867 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28878__$1 = (function (){var statearr_28905 = state_28878;
(statearr_28905[(15)] = inst_28866);

return statearr_28905;
})();
if(cljs.core.truth_(inst_28867)){
var statearr_28906_28934 = state_28878__$1;
(statearr_28906_28934[(1)] = (21));

} else {
var statearr_28907_28935 = state_28878__$1;
(statearr_28907_28935[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (5))){
var inst_28822 = cljs.core.async.close_BANG_.call(null,out);
var state_28878__$1 = state_28878;
var statearr_28908_28936 = state_28878__$1;
(statearr_28908_28936[(2)] = inst_28822);

(statearr_28908_28936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (14))){
var inst_28844 = (state_28878[(7)]);
var inst_28846 = cljs.core.chunked_seq_QMARK_.call(null,inst_28844);
var state_28878__$1 = state_28878;
if(inst_28846){
var statearr_28909_28937 = state_28878__$1;
(statearr_28909_28937[(1)] = (17));

} else {
var statearr_28910_28938 = state_28878__$1;
(statearr_28910_28938[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (16))){
var inst_28862 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28911_28939 = state_28878__$1;
(statearr_28911_28939[(2)] = inst_28862);

(statearr_28911_28939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (10))){
var inst_28831 = (state_28878[(8)]);
var inst_28833 = (state_28878[(10)]);
var inst_28838 = cljs.core._nth.call(null,inst_28831,inst_28833);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28878__$1,(13),out,inst_28838);
} else {
if((state_val_28879 === (18))){
var inst_28844 = (state_28878[(7)]);
var inst_28853 = cljs.core.first.call(null,inst_28844);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28878__$1,(20),out,inst_28853);
} else {
if((state_val_28879 === (8))){
var inst_28832 = (state_28878[(9)]);
var inst_28833 = (state_28878[(10)]);
var inst_28835 = (inst_28833 < inst_28832);
var inst_28836 = inst_28835;
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28836)){
var statearr_28912_28940 = state_28878__$1;
(statearr_28912_28940[(1)] = (10));

} else {
var statearr_28913_28941 = state_28878__$1;
(statearr_28913_28941[(1)] = (11));

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
});})(c__25398__auto__))
;
return ((function (switch__25311__auto__,c__25398__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____0 = (function (){
var statearr_28914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28914[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__);

(statearr_28914[(1)] = (1));

return statearr_28914;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____1 = (function (state_28878){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28915){if((e28915 instanceof Object)){
var ex__25315__auto__ = e28915;
var statearr_28916_28942 = state_28878;
(statearr_28916_28942[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28943 = state_28878;
state_28878 = G__28943;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__ = function(state_28878){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____1.call(this,state_28878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25312__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto__))
})();
var state__25400__auto__ = (function (){var statearr_28917 = f__25399__auto__.call(null);
(statearr_28917[(6)] = c__25398__auto__);

return statearr_28917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto__))
);

return c__25398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28945 = arguments.length;
switch (G__28945) {
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
var G__28948 = arguments.length;
switch (G__28948) {
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
var G__28951 = arguments.length;
switch (G__28951) {
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
var c__25398__auto___28998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___28998,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___28998,out){
return (function (state_28975){
var state_val_28976 = (state_28975[(1)]);
if((state_val_28976 === (7))){
var inst_28970 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28977_28999 = state_28975__$1;
(statearr_28977_28999[(2)] = inst_28970);

(statearr_28977_28999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (1))){
var inst_28952 = null;
var state_28975__$1 = (function (){var statearr_28978 = state_28975;
(statearr_28978[(7)] = inst_28952);

return statearr_28978;
})();
var statearr_28979_29000 = state_28975__$1;
(statearr_28979_29000[(2)] = null);

(statearr_28979_29000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (4))){
var inst_28955 = (state_28975[(8)]);
var inst_28955__$1 = (state_28975[(2)]);
var inst_28956 = (inst_28955__$1 == null);
var inst_28957 = cljs.core.not.call(null,inst_28956);
var state_28975__$1 = (function (){var statearr_28980 = state_28975;
(statearr_28980[(8)] = inst_28955__$1);

return statearr_28980;
})();
if(inst_28957){
var statearr_28981_29001 = state_28975__$1;
(statearr_28981_29001[(1)] = (5));

} else {
var statearr_28982_29002 = state_28975__$1;
(statearr_28982_29002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (6))){
var state_28975__$1 = state_28975;
var statearr_28983_29003 = state_28975__$1;
(statearr_28983_29003[(2)] = null);

(statearr_28983_29003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (3))){
var inst_28972 = (state_28975[(2)]);
var inst_28973 = cljs.core.async.close_BANG_.call(null,out);
var state_28975__$1 = (function (){var statearr_28984 = state_28975;
(statearr_28984[(9)] = inst_28972);

return statearr_28984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else {
if((state_val_28976 === (2))){
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28975__$1,(4),ch);
} else {
if((state_val_28976 === (11))){
var inst_28955 = (state_28975[(8)]);
var inst_28964 = (state_28975[(2)]);
var inst_28952 = inst_28955;
var state_28975__$1 = (function (){var statearr_28985 = state_28975;
(statearr_28985[(10)] = inst_28964);

(statearr_28985[(7)] = inst_28952);

return statearr_28985;
})();
var statearr_28986_29004 = state_28975__$1;
(statearr_28986_29004[(2)] = null);

(statearr_28986_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (9))){
var inst_28955 = (state_28975[(8)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28975__$1,(11),out,inst_28955);
} else {
if((state_val_28976 === (5))){
var inst_28955 = (state_28975[(8)]);
var inst_28952 = (state_28975[(7)]);
var inst_28959 = cljs.core._EQ_.call(null,inst_28955,inst_28952);
var state_28975__$1 = state_28975;
if(inst_28959){
var statearr_28988_29005 = state_28975__$1;
(statearr_28988_29005[(1)] = (8));

} else {
var statearr_28989_29006 = state_28975__$1;
(statearr_28989_29006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (10))){
var inst_28967 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28990_29007 = state_28975__$1;
(statearr_28990_29007[(2)] = inst_28967);

(statearr_28990_29007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (8))){
var inst_28952 = (state_28975[(7)]);
var tmp28987 = inst_28952;
var inst_28952__$1 = tmp28987;
var state_28975__$1 = (function (){var statearr_28991 = state_28975;
(statearr_28991[(7)] = inst_28952__$1);

return statearr_28991;
})();
var statearr_28992_29008 = state_28975__$1;
(statearr_28992_29008[(2)] = null);

(statearr_28992_29008[(1)] = (2));


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
});})(c__25398__auto___28998,out))
;
return ((function (switch__25311__auto__,c__25398__auto___28998,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_28975){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_28975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__25315__auto__ = e28994;
var statearr_28995_29009 = state_28975;
(statearr_28995_29009[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29010 = state_28975;
state_28975 = G__29010;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___28998,out))
})();
var state__25400__auto__ = (function (){var statearr_28996 = f__25399__auto__.call(null);
(statearr_28996[(6)] = c__25398__auto___28998);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___28998,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29012 = arguments.length;
switch (G__29012) {
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
var c__25398__auto___29078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___29078,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___29078,out){
return (function (state_29050){
var state_val_29051 = (state_29050[(1)]);
if((state_val_29051 === (7))){
var inst_29046 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29052_29079 = state_29050__$1;
(statearr_29052_29079[(2)] = inst_29046);

(statearr_29052_29079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (1))){
var inst_29013 = (new Array(n));
var inst_29014 = inst_29013;
var inst_29015 = (0);
var state_29050__$1 = (function (){var statearr_29053 = state_29050;
(statearr_29053[(7)] = inst_29015);

(statearr_29053[(8)] = inst_29014);

return statearr_29053;
})();
var statearr_29054_29080 = state_29050__$1;
(statearr_29054_29080[(2)] = null);

(statearr_29054_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (4))){
var inst_29018 = (state_29050[(9)]);
var inst_29018__$1 = (state_29050[(2)]);
var inst_29019 = (inst_29018__$1 == null);
var inst_29020 = cljs.core.not.call(null,inst_29019);
var state_29050__$1 = (function (){var statearr_29055 = state_29050;
(statearr_29055[(9)] = inst_29018__$1);

return statearr_29055;
})();
if(inst_29020){
var statearr_29056_29081 = state_29050__$1;
(statearr_29056_29081[(1)] = (5));

} else {
var statearr_29057_29082 = state_29050__$1;
(statearr_29057_29082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (15))){
var inst_29040 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29058_29083 = state_29050__$1;
(statearr_29058_29083[(2)] = inst_29040);

(statearr_29058_29083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (13))){
var state_29050__$1 = state_29050;
var statearr_29059_29084 = state_29050__$1;
(statearr_29059_29084[(2)] = null);

(statearr_29059_29084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (6))){
var inst_29015 = (state_29050[(7)]);
var inst_29036 = (inst_29015 > (0));
var state_29050__$1 = state_29050;
if(cljs.core.truth_(inst_29036)){
var statearr_29060_29085 = state_29050__$1;
(statearr_29060_29085[(1)] = (12));

} else {
var statearr_29061_29086 = state_29050__$1;
(statearr_29061_29086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (3))){
var inst_29048 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29050__$1,inst_29048);
} else {
if((state_val_29051 === (12))){
var inst_29014 = (state_29050[(8)]);
var inst_29038 = cljs.core.vec.call(null,inst_29014);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29050__$1,(15),out,inst_29038);
} else {
if((state_val_29051 === (2))){
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29050__$1,(4),ch);
} else {
if((state_val_29051 === (11))){
var inst_29030 = (state_29050[(2)]);
var inst_29031 = (new Array(n));
var inst_29014 = inst_29031;
var inst_29015 = (0);
var state_29050__$1 = (function (){var statearr_29062 = state_29050;
(statearr_29062[(7)] = inst_29015);

(statearr_29062[(10)] = inst_29030);

(statearr_29062[(8)] = inst_29014);

return statearr_29062;
})();
var statearr_29063_29087 = state_29050__$1;
(statearr_29063_29087[(2)] = null);

(statearr_29063_29087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (9))){
var inst_29014 = (state_29050[(8)]);
var inst_29028 = cljs.core.vec.call(null,inst_29014);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29050__$1,(11),out,inst_29028);
} else {
if((state_val_29051 === (5))){
var inst_29018 = (state_29050[(9)]);
var inst_29015 = (state_29050[(7)]);
var inst_29014 = (state_29050[(8)]);
var inst_29023 = (state_29050[(11)]);
var inst_29022 = (inst_29014[inst_29015] = inst_29018);
var inst_29023__$1 = (inst_29015 + (1));
var inst_29024 = (inst_29023__$1 < n);
var state_29050__$1 = (function (){var statearr_29064 = state_29050;
(statearr_29064[(12)] = inst_29022);

(statearr_29064[(11)] = inst_29023__$1);

return statearr_29064;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29065_29088 = state_29050__$1;
(statearr_29065_29088[(1)] = (8));

} else {
var statearr_29066_29089 = state_29050__$1;
(statearr_29066_29089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (14))){
var inst_29043 = (state_29050[(2)]);
var inst_29044 = cljs.core.async.close_BANG_.call(null,out);
var state_29050__$1 = (function (){var statearr_29068 = state_29050;
(statearr_29068[(13)] = inst_29043);

return statearr_29068;
})();
var statearr_29069_29090 = state_29050__$1;
(statearr_29069_29090[(2)] = inst_29044);

(statearr_29069_29090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (10))){
var inst_29034 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29070_29091 = state_29050__$1;
(statearr_29070_29091[(2)] = inst_29034);

(statearr_29070_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (8))){
var inst_29014 = (state_29050[(8)]);
var inst_29023 = (state_29050[(11)]);
var tmp29067 = inst_29014;
var inst_29014__$1 = tmp29067;
var inst_29015 = inst_29023;
var state_29050__$1 = (function (){var statearr_29071 = state_29050;
(statearr_29071[(7)] = inst_29015);

(statearr_29071[(8)] = inst_29014__$1);

return statearr_29071;
})();
var statearr_29072_29092 = state_29050__$1;
(statearr_29072_29092[(2)] = null);

(statearr_29072_29092[(1)] = (2));


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
});})(c__25398__auto___29078,out))
;
return ((function (switch__25311__auto__,c__25398__auto___29078,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_29073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29073[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_29073[(1)] = (1));

return statearr_29073;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_29050){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_29050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e29074){if((e29074 instanceof Object)){
var ex__25315__auto__ = e29074;
var statearr_29075_29093 = state_29050;
(statearr_29075_29093[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29094 = state_29050;
state_29050 = G__29094;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_29050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_29050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___29078,out))
})();
var state__25400__auto__ = (function (){var statearr_29076 = f__25399__auto__.call(null);
(statearr_29076[(6)] = c__25398__auto___29078);

return statearr_29076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___29078,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29096 = arguments.length;
switch (G__29096) {
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
var c__25398__auto___29166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25398__auto___29166,out){
return (function (){
var f__25399__auto__ = (function (){var switch__25311__auto__ = ((function (c__25398__auto___29166,out){
return (function (state_29138){
var state_val_29139 = (state_29138[(1)]);
if((state_val_29139 === (7))){
var inst_29134 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29140_29167 = state_29138__$1;
(statearr_29140_29167[(2)] = inst_29134);

(statearr_29140_29167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (1))){
var inst_29097 = [];
var inst_29098 = inst_29097;
var inst_29099 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29138__$1 = (function (){var statearr_29141 = state_29138;
(statearr_29141[(7)] = inst_29098);

(statearr_29141[(8)] = inst_29099);

return statearr_29141;
})();
var statearr_29142_29168 = state_29138__$1;
(statearr_29142_29168[(2)] = null);

(statearr_29142_29168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (4))){
var inst_29102 = (state_29138[(9)]);
var inst_29102__$1 = (state_29138[(2)]);
var inst_29103 = (inst_29102__$1 == null);
var inst_29104 = cljs.core.not.call(null,inst_29103);
var state_29138__$1 = (function (){var statearr_29143 = state_29138;
(statearr_29143[(9)] = inst_29102__$1);

return statearr_29143;
})();
if(inst_29104){
var statearr_29144_29169 = state_29138__$1;
(statearr_29144_29169[(1)] = (5));

} else {
var statearr_29145_29170 = state_29138__$1;
(statearr_29145_29170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (15))){
var inst_29128 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29146_29171 = state_29138__$1;
(statearr_29146_29171[(2)] = inst_29128);

(statearr_29146_29171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (13))){
var state_29138__$1 = state_29138;
var statearr_29147_29172 = state_29138__$1;
(statearr_29147_29172[(2)] = null);

(statearr_29147_29172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (6))){
var inst_29098 = (state_29138[(7)]);
var inst_29123 = inst_29098.length;
var inst_29124 = (inst_29123 > (0));
var state_29138__$1 = state_29138;
if(cljs.core.truth_(inst_29124)){
var statearr_29148_29173 = state_29138__$1;
(statearr_29148_29173[(1)] = (12));

} else {
var statearr_29149_29174 = state_29138__$1;
(statearr_29149_29174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (3))){
var inst_29136 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29138__$1,inst_29136);
} else {
if((state_val_29139 === (12))){
var inst_29098 = (state_29138[(7)]);
var inst_29126 = cljs.core.vec.call(null,inst_29098);
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29138__$1,(15),out,inst_29126);
} else {
if((state_val_29139 === (2))){
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29138__$1,(4),ch);
} else {
if((state_val_29139 === (11))){
var inst_29106 = (state_29138[(10)]);
var inst_29102 = (state_29138[(9)]);
var inst_29116 = (state_29138[(2)]);
var inst_29117 = [];
var inst_29118 = inst_29117.push(inst_29102);
var inst_29098 = inst_29117;
var inst_29099 = inst_29106;
var state_29138__$1 = (function (){var statearr_29150 = state_29138;
(statearr_29150[(11)] = inst_29116);

(statearr_29150[(12)] = inst_29118);

(statearr_29150[(7)] = inst_29098);

(statearr_29150[(8)] = inst_29099);

return statearr_29150;
})();
var statearr_29151_29175 = state_29138__$1;
(statearr_29151_29175[(2)] = null);

(statearr_29151_29175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (9))){
var inst_29098 = (state_29138[(7)]);
var inst_29114 = cljs.core.vec.call(null,inst_29098);
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29138__$1,(11),out,inst_29114);
} else {
if((state_val_29139 === (5))){
var inst_29099 = (state_29138[(8)]);
var inst_29106 = (state_29138[(10)]);
var inst_29102 = (state_29138[(9)]);
var inst_29106__$1 = f.call(null,inst_29102);
var inst_29107 = cljs.core._EQ_.call(null,inst_29106__$1,inst_29099);
var inst_29108 = cljs.core.keyword_identical_QMARK_.call(null,inst_29099,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29109 = ((inst_29107) || (inst_29108));
var state_29138__$1 = (function (){var statearr_29152 = state_29138;
(statearr_29152[(10)] = inst_29106__$1);

return statearr_29152;
})();
if(cljs.core.truth_(inst_29109)){
var statearr_29153_29176 = state_29138__$1;
(statearr_29153_29176[(1)] = (8));

} else {
var statearr_29154_29177 = state_29138__$1;
(statearr_29154_29177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (14))){
var inst_29131 = (state_29138[(2)]);
var inst_29132 = cljs.core.async.close_BANG_.call(null,out);
var state_29138__$1 = (function (){var statearr_29156 = state_29138;
(statearr_29156[(13)] = inst_29131);

return statearr_29156;
})();
var statearr_29157_29178 = state_29138__$1;
(statearr_29157_29178[(2)] = inst_29132);

(statearr_29157_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (10))){
var inst_29121 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29158_29179 = state_29138__$1;
(statearr_29158_29179[(2)] = inst_29121);

(statearr_29158_29179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (8))){
var inst_29098 = (state_29138[(7)]);
var inst_29106 = (state_29138[(10)]);
var inst_29102 = (state_29138[(9)]);
var inst_29111 = inst_29098.push(inst_29102);
var tmp29155 = inst_29098;
var inst_29098__$1 = tmp29155;
var inst_29099 = inst_29106;
var state_29138__$1 = (function (){var statearr_29159 = state_29138;
(statearr_29159[(7)] = inst_29098__$1);

(statearr_29159[(14)] = inst_29111);

(statearr_29159[(8)] = inst_29099);

return statearr_29159;
})();
var statearr_29160_29180 = state_29138__$1;
(statearr_29160_29180[(2)] = null);

(statearr_29160_29180[(1)] = (2));


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
});})(c__25398__auto___29166,out))
;
return ((function (switch__25311__auto__,c__25398__auto___29166,out){
return (function() {
var cljs$core$async$state_machine__25312__auto__ = null;
var cljs$core$async$state_machine__25312__auto____0 = (function (){
var statearr_29161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29161[(0)] = cljs$core$async$state_machine__25312__auto__);

(statearr_29161[(1)] = (1));

return statearr_29161;
});
var cljs$core$async$state_machine__25312__auto____1 = (function (state_29138){
while(true){
var ret_value__25313__auto__ = (function (){try{while(true){
var result__25314__auto__ = switch__25311__auto__.call(null,state_29138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25314__auto__;
}
break;
}
}catch (e29162){if((e29162 instanceof Object)){
var ex__25315__auto__ = e29162;
var statearr_29163_29181 = state_29138;
(statearr_29163_29181[(5)] = ex__25315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29138;
state_29138 = G__29182;
continue;
} else {
return ret_value__25313__auto__;
}
break;
}
});
cljs$core$async$state_machine__25312__auto__ = function(state_29138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25312__auto____1.call(this,state_29138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25312__auto____0;
cljs$core$async$state_machine__25312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25312__auto____1;
return cljs$core$async$state_machine__25312__auto__;
})()
;})(switch__25311__auto__,c__25398__auto___29166,out))
})();
var state__25400__auto__ = (function (){var statearr_29164 = f__25399__auto__.call(null);
(statearr_29164[(6)] = c__25398__auto___29166);

return statearr_29164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25400__auto__);
});})(c__25398__auto___29166,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525651795073
