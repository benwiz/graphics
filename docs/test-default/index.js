!function(){return function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var p="function"==typeof require&&require;if(!a&&p)return p(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){return r(e[s][1][t]||t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}}()({1:[function(t,e,n){(function(i){!function(i,r){"object"==typeof n&&void 0!==e?e.exports=r(t("convert-length")):"function"==typeof define&&define.amd?define(["convert-length"],r):i.canvasSketch=r(null)}(this,function(t){t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var s=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),p=1;p<arguments.length;p++){for(var c in i=Object(arguments[p]))r.call(i,c)&&(a[c]=i[c]);if(n){s=n(i);for(var u=0;u<s.length;u++)o.call(i,s[u])&&(a[s[u]]=i[s[u]])}}return a},a="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{};function p(t,e){return t(e={exports:{}},e.exports),e.exports}var c=a.performance&&a.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date},u=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};var h=function(t){return!(!t||"object"!=typeof t)&&("object"==typeof window&&"object"==typeof window.Node?t instanceof window.Node:"number"==typeof t.nodeType&&"string"==typeof t.nodeName)};function f(){return"undefined"!=typeof window&&window["canvas-sketch-cli"]}function d(){return"undefined"!=typeof document}var l,m=p(function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n}),y=p(function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function i(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?i:r).supported=i,e.unsupported=r}),g=p(function(t){var e=Array.prototype.slice,n=t.exports=function(t,o,s){return s||(s={}),t===o||(t instanceof Date&&o instanceof Date?t.getTime()===o.getTime():!t||!o||"object"!=typeof t&&"object"!=typeof o?s.strict?t===o:t==o:function(t,o,s){var a,p;if(i(t)||i(o))return!1;if(t.prototype!==o.prototype)return!1;if(y(t))return!!y(o)&&(t=e.call(t),o=e.call(o),n(t,o,s));if(r(t)){if(!r(o))return!1;if(t.length!==o.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==o[a])return!1;return!0}try{var c=m(t),u=m(o)}catch(t){return!1}if(c.length!=u.length)return!1;for(c.sort(),u.sort(),a=c.length-1;a>=0;a--)if(c[a]!=u[a])return!1;for(a=c.length-1;a>=0;a--)if(!n(t[p=c[a]],o[p],s))return!1;return typeof t==typeof o}(t,o,s))};function i(t){return null==t}function r(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}}),v=p(function(t,e){!function(e){var n,i,r,o=(n=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g,function(t,e,a,p){if(1!==arguments.length||"string"!==(null===(c=t)?"null":void 0===c?"undefined":"object"!=typeof c?typeof c:Array.isArray(c)?"array":{}.toString.call(c).slice(8,-1).toLowerCase())||/\d/.test(t)||(e=t,t=void 0),(t=t||new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var c,u=(e=String(o.masks[e]||e||o.masks.default)).slice(0,4);"UTC:"!==u&&"GMT:"!==u||(e=e.slice(4),a=!0,"GMT:"===u&&(p=!0));var h=a?"getUTC":"get",f=t[h+"Date"](),d=t[h+"Day"](),l=t[h+"Month"](),m=t[h+"FullYear"](),y=t[h+"Hours"](),g=t[h+"Minutes"](),v=t[h+"Seconds"](),w=t[h+"Milliseconds"](),b=a?0:t.getTimezoneOffset(),x=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var i=e.getTimezoneOffset()-n.getTimezoneOffset();return e.setHours(e.getHours()-i),1+Math.floor((e-n)/6048e5)}(t),_=function(t){var e=t.getDay();return 0===e&&(e=7),e}(t),k={d:f,dd:s(f),ddd:o.i18n.dayNames[d],dddd:o.i18n.dayNames[d+7],m:l+1,mm:s(l+1),mmm:o.i18n.monthNames[l],mmmm:o.i18n.monthNames[l+12],yy:String(m).slice(2),yyyy:m,h:y%12||12,hh:s(y%12||12),H:y,HH:s(y),M:g,MM:s(g),s:v,ss:s(v),l:s(w,3),L:s(Math.round(w/10)),t:y<12?o.i18n.timeNames[0]:o.i18n.timeNames[1],tt:y<12?o.i18n.timeNames[2]:o.i18n.timeNames[3],T:y<12?o.i18n.timeNames[4]:o.i18n.timeNames[5],TT:y<12?o.i18n.timeNames[6]:o.i18n.timeNames[7],Z:p?"GMT":a?"UTC":(String(t).match(i)||[""]).pop().replace(r,""),o:(b>0?"-":"+")+s(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),S:["th","st","nd","rd"][f%10>3?0:(f%100-f%10!=10)*f%10],W:x,N:_};return e.replace(n,function(t){return t in k?k[t]:t.slice(1,t.length-1)})});function s(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},t.exports=o}()}),w="",b=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var n=t.length*e;if(l!==t||void 0===l)l=t,w="";else if(w.length>=n)return w.substr(0,n);for(;n>w.length&&e>1;)1&e&&(w+=t),e>>=1,t+=t;return w=(w+=t).substr(0,n)};var x,_=function(t,e,n){return t=t.toString(),void 0===e?t:(n=0===n?"0":n?n.toString():" ",b(n,e-t.length)+t)},k=function(){},T=["image/png","image/jpeg","image/webp"];function M(t,e){return void 0===e&&(e={}),function(t){return new Promise(function(e){var n=t.indexOf(",");if(-1!==n){for(var i=t.slice(n+1),r=window.atob(i),o=/data:([^;+]);/.exec(t),s=(o?o[1]:"")||void 0,a=new ArrayBuffer(r.length),p=new Uint8Array(a),c=0;c<r.length;c++)p[c]=r.charCodeAt(c);e(new window.Blob([a],{type:s}))}else e(new window.Blob)})}(t).then(function(t){return R(t,e)})}function R(t,e){return void 0===e&&(e={}),new Promise(function(n){var i=function(t){void 0===t&&(t={});if("function"==typeof(t=s({},t)).file)return t.file(t);if(t.file)return t.file;var e=null,n="";"string"==typeof t.extension&&(n=t.extension);if("number"==typeof t.frame){var i;i="number"==typeof t.totalFrames?t.totalFrames:Math.max(1e3,t.frame),e=_(String(t.frame),String(i).length,"0")}var r=isFinite(t.totalLayers)&&isFinite(t.layer)&&t.totalLayers>1?""+t.layer:"";if(null!=e)return[r,e].filter(Boolean).join("-")+n;var o=t.timeStamp;return[t.prefix,t.name||o,r,t.hash,t.suffix].filter(Boolean).join("-")+n}(e=s({extension:"",prefix:"",suffix:""},e)),r=f();if(r&&"function"==typeof r.saveBlob&&r.output)return r.saveBlob(t,s({},e,{filename:i})).then(function(t){return n(t)});x||((x=document.createElement("a")).style.visibility="hidden",x.target="_blank"),x.download=i,x.href=window.URL.createObjectURL(t),document.body.appendChild(x),x.onclick=function(){x.onclick=k,setTimeout(function(){window.URL.revokeObjectURL(t),document.body.removeChild(x),x.removeAttribute("href"),n({filename:i,client:!1})})},x.click()})}var F={dimension:"dimensions",animated:"animate",animating:"animate",unit:"units",P5:"p5",pixellated:"pixelated",looping:"loop",pixelPerInch:"pixels"},E=["dimensions","units","pixelsPerInch","orientation","scaleToFit","scaleToView","bleed","pixelRatio","exportPixelRatio","maxPixelRatio","scaleContext","resizeCanvas","styleCanvas","canvas","context","attributes","parent","file","name","prefix","suffix","animate","playing","loop","duration","totalFrames","fps","playbackRate","timeScale","frame","time","flush","pixelated","hotkeys","p5","id","scaleToFitPadding","data","params","encoding","encodingQuality"],P=function(t){Object.keys(t).forEach(function(t){t in F?console.warn('[canvas-sketch] Could not recognize the setting "'+t+'", did you mean "'+F[t]+'"?'):E.includes(t)||console.warn('[canvas-sketch] Could not recognize the setting "'+t+'"')})};var j=[["postcard",101.6,152.4],["poster-small",280,430],["poster",460,610],["poster-large",610,910],["business-card",50.8,88.9],["2r",64,89],["3r",89,127],["4r",102,152],["5r",127,178],["6r",152,203],["8r",203,254],["10r",254,305],["11r",279,356],["12r",305,381],["a0",841,1189],["a1",594,841],["a2",420,594],["a3",297,420],["a4",210,297],["a5",148,210],["a6",105,148],["a7",74,105],["a8",52,74],["a9",37,52],["a10",26,37],["2a0",1189,1682],["4a0",1682,2378],["b0",1e3,1414],["b1",707,1e3],["b1+",720,1020],["b2",500,707],["b2+",520,720],["b3",353,500],["b4",250,353],["b5",176,250],["b6",125,176],["b7",88,125],["b8",62,88],["b9",44,62],["b10",31,44],["b11",22,32],["b12",16,22],["c0",917,1297],["c1",648,917],["c2",458,648],["c3",324,458],["c4",229,324],["c5",162,229],["c6",114,162],["c7",81,114],["c8",57,81],["c9",40,57],["c10",28,40],["c11",22,32],["c12",16,22],["half-letter",5.5,8.5,"in"],["letter",8.5,11,"in"],["legal",8.5,14,"in"],["junior-legal",5,8,"in"],["ledger",11,17,"in"],["tabloid",11,17,"in"],["ansi-a",8.5,11,"in"],["ansi-b",11,17,"in"],["ansi-c",17,22,"in"],["ansi-d",22,34,"in"],["ansi-e",34,44,"in"],["arch-a",9,12,"in"],["arch-b",12,18,"in"],["arch-c",18,24,"in"],["arch-d",24,36,"in"],["arch-e",36,48,"in"],["arch-e1",30,42,"in"],["arch-e2",26,38,"in"],["arch-e3",27,39,"in"]].reduce(function(t,e){var n={units:e[3]||"mm",dimensions:[e[1],e[2]]};return t[e[0]]=n,t[e[0].replace(/-/g," ")]=n,t},{});function C(e,n,i,r){return void 0===n&&(n="px"),void 0===i&&(i="px"),void 0===r&&(r=72),t(e,n,i,{pixelsPerInch:r,precision:4,roundPixel:!0})}function S(t,n){var i,r,o,s,a,p,c=d(),u=n.dimensions,h=function(t){return!(!t.dimensions||"string"!=typeof t.dimensions&&!(Array.isArray(t.dimensions)&&t.dimensions.length>=2))}(n),f=t.exporting,l=!!h&&!1!==n.scaleToFit,m=!(!f&&h)||n.scaleToView;c||(l=m=!1);var y,g,v=n.units,w="number"==typeof n.pixelsPerInch&&isFinite(n.pixelsPerInch)?n.pixelsPerInch:72,b=e(n.bleed,0),x=c?window.devicePixelRatio:1,_=m?x:1;"number"==typeof n.pixelRatio&&isFinite(n.pixelRatio)?g=e(n.exportPixelRatio,y=n.pixelRatio):h?(y=_,g=e(n.exportPixelRatio,1)):g=e(n.exportPixelRatio,y=x),"number"==typeof n.maxPixelRatio&&isFinite(n.maxPixelRatio)&&(y=Math.min(n.maxPixelRatio,y),g=Math.min(n.maxPixelRatio,g)),f&&(y=g);var k,T,M=function(t,e){if(!d())return[300,150];var n=e.parent||window;if(n===window||n===document||n===document.body)return[window.innerWidth,window.innerHeight];var i=n.getBoundingClientRect();return[i.width,i.height]}(0,n),R=M[0],F=M[1];if(h){var E=function(t,e,n){if(void 0===e&&(e="px"),void 0===n&&(n=72),"string"==typeof t){var i=t.toLowerCase();if(!(i in j))throw new Error('The dimension preset "'+t+'" is not supported or could not be found; try using a4, a3, postcard, letter, etc.');var r=j[i];return r.dimensions.map(function(t){return C(t,r.units,e,n)})}return t}(u,v,w),P=Math.max(E[0],E[1]),S=Math.min(E[0],E[1]);if(n.orientation){var O="landscape"===n.orientation;i=O?P:S,r=O?S:P}else i=E[0],r=E[1];k=i,T=r,i+=2*b,r+=2*b}else k=i=R,T=r=F;var D=i,N=r;if(h&&v&&(D=C(i,v,"px",w),N=C(r,v,"px",w)),o=Math.round(D),s=Math.round(N),l&&!f&&h){var A=i/r,H=R/F,z=e(n.scaleToFitPadding,40),L=Math.round(R-2*z),I=Math.round(F-2*z);(o>L||s>I)&&(H>A?(s=I,o=Math.round(s*A)):(o=L,s=Math.round(o/A)))}return{bleed:b,pixelRatio:y,width:i,height:r,dimensions:[i,r],units:v||"px",scaleX:(a=m?Math.round(y*o):Math.round(y*D))/i,scaleY:(p=m?Math.round(y*s):Math.round(y*N))/r,viewportWidth:m?Math.round(o):Math.round(D),viewportHeight:m?Math.round(s):Math.round(N),canvasWidth:a,canvasHeight:p,trimWidth:k,trimHeight:T,styleWidth:o,styleHeight:s}}var O=function(t,e){if("string"!=typeof t)throw new TypeError("must specify type string");if(e=e||{},"undefined"==typeof document&&!e.canvas)return null;var n=e.canvas||document.createElement("canvas");"number"==typeof e.width&&(n.width=e.width);"number"==typeof e.height&&(n.height=e.height);var i,r=e;try{var o=[t];0===t.indexOf("webgl")&&o.push("experimental-"+t);for(var s=0;s<o.length;s++)if(i=n.getContext(o[s],r))return i}catch(t){i=null}return i||null};function D(t){var e,n;void 0===t&&(t={});var i=!1;if(!1!==t.canvas){if(!(e=t.context)||"string"==typeof e){var r=t.canvas;r||(r=function(){if(!d())throw new Error("It appears you are runing from Node.js or a non-browser environment. Try passing in an existing { canvas } interface instead.");return document.createElement("canvas")}(),i=!0);var o=e||"2d";if("function"!=typeof r.getContext)throw new Error("The specified { canvas } element does not have a getContext() function, maybe it is not a <canvas> tag?");if(!(e=O(o,s({},t.attributes,{canvas:r}))))throw new Error("Failed at canvas.getContext('"+o+"') - the browser may not support this context, or a different context may already be in use with this canvas.")}if(n=e.canvas,t.canvas&&n!==t.canvas)throw new Error("The { canvas } and { context } settings must point to the same underlying canvas element");t.pixelated&&(e.imageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.oImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,n.style["image-rendering"]="pixelated")}return{canvas:n,context:e,ownsCanvas:i}}var N=function(){var t=this;this._settings={},this._props={},this._sketch=void 0,this._raf=null,this._lastRedrawResult=void 0,this._isP5Resizing=!1,this._keyboardShortcuts=function(t){void 0===t&&(t={});var e=function(e){if(t.enabled()){var n=f();83!==e.keyCode||e.altKey||!e.metaKey&&!e.ctrlKey?32===e.keyCode?t.togglePlay(e):n&&!e.altKey&&75===e.keyCode&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t.commit(e)):(e.preventDefault(),t.save(e))}};return{attach:function(){window.addEventListener("keydown",e)},detach:function(){window.removeEventListener("keydown",e)}}}({enabled:function(){return!1!==t.settings.hotkeys},save:function(e){e.shiftKey?t.props.recording?(t.endRecord(),t.run()):t.record():t.exportFrame()},togglePlay:function(){t.props.playing?t.pause():t.play()},commit:function(e){t.exportFrame({commit:!0})}}),this._animateHandler=function(){return t.animate()},this._resizeHandler=function(){t.resize()&&t.render()}},A={sketch:{configurable:!0},settings:{configurable:!0},props:{configurable:!0}};A.sketch.get=function(){return this._sketch},A.settings.get=function(){return this._settings},A.props.get=function(){return this._props},N.prototype._computePlayhead=function(t,e){return"number"==typeof e&&isFinite(e)?t/e:0},N.prototype._computeFrame=function(t,e,n,i){return isFinite(n)&&n>1?Math.floor(t*(n-1)):Math.floor(i*e)},N.prototype._computeCurrentFrame=function(){return this._computeFrame(this.props.playhead,this.props.time,this.props.totalFrames,this.props.fps)},N.prototype._getSizeProps=function(){var t=this.props;return{width:t.width,height:t.height,pixelRatio:t.pixelRatio,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight,viewportWidth:t.viewportWidth,viewportHeight:t.viewportHeight}},N.prototype.run=function(){if(!this.sketch)throw new Error("should wait until sketch is loaded before trying to play()");return!1!==this.settings.playing&&this.play(),"function"==typeof this.sketch.dispose&&console.warn("In canvas-sketch@0.0.23 the dispose() event has been renamed to unload()"),this.props.started||(this._signalBegin(),this.props.started=!0),this.tick(),this.render(),this},N.prototype.play=function(){var t=this.settings.animate;"animation"in this.settings&&(t=!0,console.warn("[canvas-sketch] { animation } has been renamed to { animate }")),t&&(d()?this.props.playing||(this.props.started||(this._signalBegin(),this.props.started=!0),this.props.playing=!0,null!=this._raf&&window.cancelAnimationFrame(this._raf),this._lastTime=c(),this._raf=window.requestAnimationFrame(this._animateHandler)):console.error("[canvas-sketch] WARN: Using { animate } in Node.js is not yet supported"))},N.prototype.pause=function(){this.props.recording&&this.endRecord(),this.props.playing=!1,null!=this._raf&&d()&&window.cancelAnimationFrame(this._raf)},N.prototype.togglePlay=function(){this.props.playing?this.pause():this.play()},N.prototype.stop=function(){this.pause(),this.props.frame=0,this.props.playhead=0,this.props.time=0,this.props.deltaTime=0,this.props.started=!1,this.render()},N.prototype.record=function(){var t=this;if(!this.props.recording)if(d()){this.stop(),this.props.playing=!0,this.props.recording=!0;var e=1/this.props.fps;null!=this._raf&&window.cancelAnimationFrame(this._raf);var n=function(){return t.props.recording?(t.props.deltaTime=e,t.tick(),t.exportFrame({sequence:!0}).then(function(){t.props.recording&&(t.props.deltaTime=0,t.props.frame++,t.props.frame<t.props.totalFrames?(t.props.time+=e,t.props.playhead=t._computePlayhead(t.props.time,t.props.duration),t._raf=window.requestAnimationFrame(n)):(console.log("Finished recording"),t._signalEnd(),t.endRecord(),t.stop(),t.run()))})):Promise.resolve()};this.props.started||(this._signalBegin(),this.props.started=!0),this._raf=window.requestAnimationFrame(n)}else console.error("[canvas-sketch] WARN: Recording from Node.js is not yet supported")},N.prototype._signalBegin=function(){var t=this;this.sketch&&"function"==typeof this.sketch.begin&&this._wrapContextScale(function(e){return t.sketch.begin(e)})},N.prototype._signalEnd=function(){var t=this;this.sketch&&"function"==typeof this.sketch.end&&this._wrapContextScale(function(e){return t.sketch.end(e)})},N.prototype.endRecord=function(){null!=this._raf&&d()&&window.cancelAnimationFrame(this._raf),this.props.recording=!1,this.props.deltaTime=0,this.props.playing=!1},N.prototype.exportFrame=function(t){var e=this;if(void 0===t&&(t={}),!this.sketch)return Promise.all([]);"function"==typeof this.sketch.preExport&&this.sketch.preExport();var n=s({sequence:t.sequence,frame:t.sequence?this.props.frame:void 0,file:this.settings.file,name:this.settings.name,prefix:this.settings.prefix,suffix:this.settings.suffix,encoding:this.settings.encoding,encodingQuality:this.settings.encodingQuality,timeStamp:v(new Date,"yyyy.mm.dd-HH.MM.ss"),totalFrames:isFinite(this.props.totalFrames)?Math.max(100,this.props.totalFrames):1e3}),i=f(),r=Promise.resolve();if(i&&t.commit&&"function"==typeof i.commit){var o=s({},n),a=i.commit(o);r=u(a)?a:Promise.resolve(a)}return r.then(function(t){return e._doExportFrame(s({},n,{hash:t||""}))})},N.prototype._doExportFrame=function(t){var n=this;void 0===t&&(t={}),this._props.exporting=!0,this.resize();var i=this.render();return void 0===i&&(i=[this.props.canvas]),i=(i=[].concat(i).filter(Boolean)).map(function(n){var i,r="object"==typeof n&&n&&("data"in n||"dataURL"in n),o=r?n.data:n,a=r?s({},n,{data:o}):{data:o};if(h(i=o)&&/canvas/i.test(i.nodeName)&&"function"==typeof i.getContext){var p=function(t,e){void 0===e&&(e={});var n=e.encoding||"image/png";if(!T.includes(n))throw new Error("Invalid canvas encoding "+n);var i=(n.split("/")[1]||"").replace(/jpeg/i,"jpg");return i&&(i=("."+i).toLowerCase()),{extension:i,type:n,dataURL:t.toDataURL(n,e.encodingQuality)}}(o,{encoding:a.encoding||t.encoding,encodingQuality:e(a.encodingQuality,t.encodingQuality,.95)});return Object.assign(a,{dataURL:p.dataURL,extension:p.extension,type:p.type})}return a}),this._props.exporting=!1,this.resize(),this.render(),Promise.all(i.map(function(e,n,i){var r=s({},t,e,{layer:n,totalLayers:i.length}),o=e.data;if(e.dataURL){var a=e.dataURL;return delete r.dataURL,M(a,r)}return function(t,e){void 0===e&&(e={});var n=Array.isArray(t)?t:[t];return R(new window.Blob(n,{type:e.type||""}),e)}(o,r)})).then(function(e){if(e.length>0){var i,r=e.find(function(t){return t.outputName}),o=e.some(function(t){return t.client});i=e.length>1?e.length:r?r.outputName+"/"+e[0].filename:""+e[0].filename;var s="";if(t.sequence)s=isFinite(n.props.totalFrames)?" (frame "+(t.frame+1)+" / "+n.props.totalFrames+")":" (frame "+t.frame+")";else e.length>1&&(s=" files");console.log("%c["+(o?"canvas-sketch-cli":"canvas-sketch")+"]%c Exported %c"+i+"%c"+s,"color: #8e8e8e;","color: initial;","font-weight: bold;","font-weight: initial;")}"function"==typeof n.sketch.postExport&&n.sketch.postExport()})},N.prototype._wrapContextScale=function(t){this._preRender(),t(this.props),this._postRender()},N.prototype._preRender=function(){var t=this.props;this.props.gl||!t.context||t.p5?t.p5&&t.p5.scale(t.scaleX/t.pixelRatio,t.scaleY/t.pixelRatio):(t.context.save(),!1!==this.settings.scaleContext&&t.context.scale(t.scaleX,t.scaleY))},N.prototype._postRender=function(){var t=this.props;this.props.gl||!t.context||t.p5||t.context.restore(),t.gl&&!1!==this.settings.flush&&!t.p5&&t.gl.flush()},N.prototype.tick=function(){this.sketch&&"function"==typeof this.sketch.tick&&(this._preRender(),this.sketch.tick(this.props),this._postRender())},N.prototype.render=function(){return this.props.p5?(this._lastRedrawResult=void 0,this.props.p5.redraw(),this._lastRedrawResult):this.submitDrawCall()},N.prototype.submitDrawCall=function(){if(this.sketch){var t,e=this.props;return this._preRender(),"function"==typeof this.sketch?t=this.sketch(e):"function"==typeof this.sketch.render&&(t=this.sketch.render(e)),this._postRender(),t}},N.prototype.update=function(t){var e=this;void 0===t&&(t={});var n=["animate"];Object.keys(t).forEach(function(t){if(n.indexOf(t)>=0)throw new Error("Sorry, the { "+t+" } option is not yet supported with update().")});var i=this._settings.canvas,r=this._settings.context;for(var o in t){var s=t[o];void 0!==s&&(e._settings[o]=s)}var a=Object.assign({},this._settings,t);if("time"in t&&"frame"in t)throw new Error("You should specify { time } or { frame } but not both");if("time"in t?delete a.frame:"frame"in t&&delete a.time,"duration"in t&&"totalFrames"in t)throw new Error("You should specify { duration } or { totalFrames } but not both");"duration"in t?delete a.totalFrames:"totalFrames"in t&&delete a.duration,"data"in t&&(this._props.data=t.data);var p=this.getTimeProps(a);if(Object.assign(this._props,p),i!==this._settings.canvas||r!==this._settings.context){var c=D(this._settings),u=c.context;this.props.canvas=c.canvas,this.props.context=u,this._setupGLKey(),this._appendCanvasIfNeeded()}return t.p5&&"function"!=typeof t.p5&&(this.props.p5=t.p5,this.props.p5.draw=function(){e._isP5Resizing||(e._lastRedrawResult=e.submitDrawCall())}),"playing"in t&&(t.playing?this.play():this.pause()),P(this._settings),this.resize(),this.render(),this.props},N.prototype.resize=function(){var t=this._getSizeProps(),e=this.settings,n=this.props,i=S(n,e);Object.assign(this._props,i);var r=this.props,o=r.pixelRatio,s=r.canvasWidth,a=r.canvasHeight,p=r.styleWidth,c=r.styleHeight,u=this.props.canvas;u&&!1!==e.resizeCanvas&&(n.p5?u.width===s&&u.height===a||(this._isP5Resizing=!0,n.p5.pixelDensity(o),n.p5.resizeCanvas(s/o,a/o,!1),this._isP5Resizing=!1):(u.width!==s&&(u.width=s),u.height!==a&&(u.height=a)),d()&&!1!==e.styleCanvas&&(u.style.width=p+"px",u.style.height=c+"px"));var h=this._getSizeProps(),f=!g(t,h);return f&&this._sizeChanged(),f},N.prototype._sizeChanged=function(){this.sketch&&"function"==typeof this.sketch.resize&&this.sketch.resize(this.props)},N.prototype.animate=function(){if(this.props.playing)if(d()){this._raf=window.requestAnimationFrame(this._animateHandler);var t=c(),e=1e3/this.props.fps,n=t-this._lastTime,i=this.props.duration,r="number"==typeof i&&isFinite(i),o=!0,s=this.settings.playbackRate;"fixed"===s?n=e:"throttle"===s?n>e?this._lastTime=t-=n%e:o=!1:this._lastTime=t;var a=n/1e3,p=this.props.time+a*this.props.timeScale;p<0&&r&&(p=i+p);var u=!1,h=!1;if(r&&p>=i&&(!1!==this.settings.loop?(o=!0,p%=i,h=!0):(o=!1,p=i,u=!0),this._signalEnd()),o){this.props.deltaTime=a,this.props.time=p,this.props.playhead=this._computePlayhead(p,i);var f=this.props.frame;this.props.frame=this._computeCurrentFrame(),h&&this._signalBegin(),f!==this.props.frame&&this.tick(),this.render(),this.props.deltaTime=0}u&&this.pause()}else console.error("[canvas-sketch] WARN: Animation in Node.js is not yet supported")},N.prototype.dispatch=function(t){if("function"!=typeof t)throw new Error("must pass function into dispatch()");t(this.props),this.render()},N.prototype.mount=function(){this._appendCanvasIfNeeded()},N.prototype.unmount=function(){d()&&(window.removeEventListener("resize",this._resizeHandler),this._keyboardShortcuts.detach()),this.props.canvas.parentElement&&this.props.canvas.parentElement.removeChild(this.props.canvas)},N.prototype._appendCanvasIfNeeded=function(){d()&&(!1!==this.settings.parent&&this.props.canvas&&!this.props.canvas.parentElement&&(this.settings.parent||document.body).appendChild(this.props.canvas))},N.prototype._setupGLKey=function(){var t;this.props.context&&("function"==typeof(t=this.props.context).clear&&"function"==typeof t.clearColor&&"function"==typeof t.bufferData?this._props.gl=this.props.context:delete this._props.gl)},N.prototype.getTimeProps=function(t){void 0===t&&(t={});var n=t.duration,i=t.totalFrames,r=e(t.timeScale,1),o=e(t.fps,24),s="number"==typeof n&&isFinite(n),a="number"==typeof i&&isFinite(i),p=s?Math.floor(o*n):void 0,c=a?i/o:void 0;if(s&&a&&p!==i)throw new Error("You should specify either duration or totalFrames, but not both. Or, they must match exactly.");void 0===t.dimensions&&void 0!==t.units&&console.warn("You've specified a { units } setting but no { dimension }, so the units will be ignored."),i=e(i,p,Infinity),n=e(n,c,Infinity);var u=t.time,h=t.frame,f="number"==typeof u&&isFinite(u),d="number"==typeof h&&isFinite(h),l=0,m=0,y=0;if(f&&d)throw new Error("You should specify either start frame or time, but not both.");return f?(y=this._computePlayhead(l=u,n),m=this._computeFrame(y,l,i,o)):d&&(y=this._computePlayhead(l=(m=h)/o,n)),{playhead:y,time:l,frame:m,duration:n,totalFrames:i,fps:o,timeScale:r}},N.prototype.setup=function(t){var e=this;if(void 0===t&&(t={}),this.sketch)throw new Error("Multiple setup() calls not yet supported.");this._settings=Object.assign({},t,this._settings),P(this._settings);var n=D(this._settings),i=n.context,r=n.canvas,o=this.getTimeProps(this._settings);this._props=Object.assign({},o,{canvas:r,context:i,deltaTime:0,started:!1,exporting:!1,playing:!1,recording:!1,settings:this.settings,data:this.settings.data,render:function(){return e.render()},togglePlay:function(){return e.togglePlay()},dispatch:function(t){return e.dispatch(t)},tick:function(){return e.tick()},resize:function(){return e.resize()},update:function(t){return e.update(t)},exportFrame:function(t){return e.exportFrame(t)},record:function(){return e.record()},play:function(){return e.play()},pause:function(){return e.pause()},stop:function(){return e.stop()}}),this._setupGLKey(),this.resize()},N.prototype.loadAndRun=function(t,e){var n=this;return this.load(t,e).then(function(){return n.run(),n})},N.prototype.unload=function(){var t=this;this.pause(),this.sketch&&("function"==typeof this.sketch.unload&&this._wrapContextScale(function(e){return t.sketch.unload(e)}),this._sketch=null)},N.prototype.destroy=function(){this.unload(),this.unmount()},N.prototype.load=function(t,e){var n=this;if("function"!=typeof t)throw new Error("The function must take in a function as the first parameter. Example:\n  canvasSketcher(() => { ... }, settings)");this.sketch&&this.unload(),void 0!==e&&this.update(e),this._preRender();var i=Promise.resolve();if(this.settings.p5){if(!d())throw new Error("[canvas-sketch] ERROR: Using p5.js in Node.js is not supported");i=new Promise(function(t){var e,i=n.settings.p5;i.p5&&(e=i.preload,i=i.p5);var r=function(i){e&&(i.preload=function(){return e(i)}),i.setup=function(){var e=n.props,r="webgl"===n.settings.context,o=r?i.WEBGL:i.P2D;i.noLoop(),i.pixelDensity(e.pixelRatio),i.createCanvas(e.viewportWidth,e.viewportHeight,o),r&&n.settings.attributes&&i.setAttributes(n.settings.attributes),n.update({p5:i,canvas:i.canvas,context:i._renderer.drawingContext}),t()}};if("function"==typeof i)new i(r);else{if("function"!=typeof window.createCanvas)throw new Error("{ p5 } setting is passed but can't find p5.js in global (window) scope. Maybe you did not create it globally?\nnew p5(); // <-- attaches to global scope");r(window)}})}return i.then(function(){var e=t(n.props);return u(e)||(e=Promise.resolve(e)),e}).then(function(t){return t||(t={}),n._sketch=t,d()&&(n._keyboardShortcuts.attach(),window.addEventListener("resize",n._resizeHandler)),n._postRender(),n._sizeChanged(),n}).catch(function(t){throw console.warn("Could not start sketch, the async loading function rejected with an error:\n    Error: "+t.message),t})},Object.defineProperties(N.prototype,A);var H="hot-id-cache",z=[];function L(t,n){if(void 0===n&&(n={}),n.p5){if(n.canvas||n.context&&"string"!=typeof n.context)throw new Error('In { p5 } mode, you can\'t pass your own canvas or context, unless the context is a "webgl" or "2d" string');n=Object.assign({},n,{canvas:!1,context:"string"==typeof n.context&&n.context})}var i,r,o=(i=f())&&i.hot;o&&(r=e(n.id,"$__DEFAULT_CANVAS_SKETCH_ID__$"));var s=o&&"string"==typeof r;s&&z.includes(r)&&(console.warn("Warning: You have multiple calls to canvasSketch() in --hot mode. You must pass unique { id } strings in settings to enable hot reload across multiple sketches. ",r),s=!1);var a=Promise.resolve();if(s){z.push(r);var p=function(t){var e=f();if(e)return e[H]=e[H]||{},e[H][t]}(r);if(p){var c=function(){var t,e=(t=p.manager,n.animate?{time:t.props.time}:void 0);return p.manager.destroy(),e};a=p.load.then(c).catch(c)}}return a.then(function(e){var i,o,a,p,c=new N;return t?(n=Object.assign({},n,e),c.setup(n),c.mount(),i=c.loadAndRun(t)):i=Promise.resolve(c),s&&(o=r,a={load:i,manager:c},(p=f())&&(p[H]=p[H]||{},p[H][o]=a)),i})}return L.canvasSketch=L,L.PaperSizes=j,L})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"convert-length":2}],2:[function(t,e,n){var i=t("defined"),r=["mm","cm","m","pc","pt","in","ft","px"],o={m:{system:"metric",factor:1},cm:{system:"metric",factor:.01},mm:{system:"metric",factor:.001},pt:{system:"imperial",factor:1/72},pc:{system:"imperial",factor:1/6},in:{system:"imperial",factor:1},ft:{system:"imperial",factor:12}};const s={metric:{unit:"m",ratio:1/.0254},imperial:{unit:"in",ratio:.0254}};e.exports=function(t,e,n,a){if("number"!=typeof t||!isFinite(t))throw new Error("Value must be a finite number");if(!e||!n)throw new Error("Must specify from and to units");var p=i((a=a||{}).pixelsPerInch,96),c=a.precision,u=!1!==a.roundPixel;if(e=e.toLowerCase(),n=n.toLowerCase(),-1===r.indexOf(e))throw new Error('Invalid from unit "'+e+'", must be one of: '+r.join(", "));if(-1===r.indexOf(n))throw new Error('Invalid from unit "'+n+'", must be one of: '+r.join(", "));if(e===n)return t;var h=1,f=1,d=!1;"px"===e&&(f=1/p,e="in"),"px"===n&&(d=!0,h=p,n="in");var l=o[e],m=o[n],y=t*l.factor*f;l.system!==m.system&&(y*=s[l.system].ratio);var g=y/m.factor*h;return d&&u?g=Math.round(g):"number"==typeof c&&isFinite(c)&&(g=function(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}(g,c)),g},e.exports.units=r},{defined:3}],3:[function(t,e,n){e.exports=function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}},{}],4:[function(t,e,n){t("canvas-sketch")(()=>({context:t,width:e,height:n})=>{t.fillStyle="lightblue",t.fillRect(0,0,e,n)},{dimensions:[2048,2048]})},{"canvas-sketch":1}],5:[function(t,e,n){(function(t){t.CANVAS_SKETCH_DEFAULT_STORAGE_KEY=window.location.href}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[4,5]);