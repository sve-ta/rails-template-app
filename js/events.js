/*
 * events.js DOM Event Model v0.0.2 for Internet Explorer
 */
(function(g,o){var m=g.Element,h=g.document,i=h.documentElement,c=g.spike||{},e={},l={click:1,dblclick:1,keydown:1,keypress:1,keyup:1,mousedown:1,mousemove:1,mouseup:1,mouseover:1,mouseout:1},k={DOMContentLoaded:{name:"readystatechange",rule:function(){return"complete"===h.readyState?!0:!1}}};c.Event=function(b){var a=this,j=h.body;if(a.srcElement===o||a.button===o)return c.Event.apply(h.createEventObject(),arguments);b!==o&&(a.type=b);null==a.pageX&&null!=a.clientX&&(a.pageX=a.clientX+(i&&i.scrollLeft||
    j&&j.scrollLeft||0)-(i.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i.clientTop||0));a.target=a.target||a.srcElement;a.target&&/3|4/.test(a.target.nodeType)&&(a.target=a.target.parentNode);a.currentTarget=a.currentTarget||null;a.eventPhase=a.eventPhase||a.target==a.currentTarget?c.Event.AT_TARGET:c.Event.BUBBLING_PHASE;a.bubbles=a.bubbles||!1;a.cancelable=a.cancelable||!1;a.timeStamp=a.timeStamp||(new Date).getTime();a.defaultPrevented=a.defaultPrevented||!1;a.isTrusted=a.isTrusted||
    !1;a.detail=a.detail||null;a.view=a.view||null;a.metaKey=a.metaKey||!1;a.relatedTarget=a.relatedTarget||"mouseout"==a.type?a.toElement:"mouseover"==a.type?a.fromElement:null;a.layerX=a.layerX||a.offsetX;a.layerY=a.layerY||a.offsetY;a.which=a.which&&a.button&1?1:a.button&2?3:a.button&4?2:0;a.isDefaultPrevented=!1;a.isPropagationStopped=!1;a.isImmediatePropagationStopped=!1;a.preventDefault=function(){a.isDefaultPrevented=true;a.returnValue=false};a.stopPropagation=function(){a.isPropagationStopped=
    true;a.cancelBubble=true};a.stopImmediatePropagation=function(){a.isImmediatePropagationStopped=true;a.stopPropagation()};return a};c.Event.CAPTURING_PHASE=1;c.Event.AT_TARGET=2;c.Event.BUBBLING_PHASE=3;c.createEvent=function(b){var a=new c.Event;a["init"+b]=function(a,c,f,p,g,e,h,k,i,l,m,n,o,q,r){this.type=a;this.canBubble=c;this.cancelable=f;"Event"!==b&&(this.detail="CustomEvent"===b?p:g);"UIEvent"===b&&(this.view=p);"MouseEvent"===b&&(this.view=p,this.screenX=e,this.screenY=h,this.clientX=k,this.clientY=
    i,this.ctrlKey=l,this.altKey=m,this.shiftKey=n,this.metaKey=o,this.button=q,this.relatedTarget=r)};return a};var n=function(b,a){b.currentTarget=a.elem;b.eventPhase=b.target==b.currentTarget?c.Event.AT_TARGET:a.capture?c.Event.CAPTURING_PHASE:c.Event.BUBBLING_PHASE;if(!1===b.isPropagationStopped||a.elem===b._propagationStoppedElem&&b.eventPhase===b._propagationStoppedPhase)if(!1===a.listener.call(a.elem,b)&&b.preventDefault(),!0===b.isPropagationStopped&&!b._propagationStoppedPhase&&(b._propagationStoppedPhase=
    b.eventPhase,b._propagationStoppedElem=a.elem),!0===b.isImmediatePropagationStopped)return!1};c.addEventListener=function(b,a,j){var d=k[b]?k[b].name:b;1===l[b]&&(h.attachEvent("on"+d,l[b]=function(a){for(var d=0,f,j=l[b].targets,a=c.Event.call(a||g.event);(f=j[d++])&&!1!==n(a,f););a._propagationStoppedElem=null;j.length=0;if(a.isDefaultPrevented)return!1}),l[b].targets=[]);e[b]=e[b]||[];var f;e[b].push(f={listener:a,capture:j,elem:this,index:e[b].eventIndex=++e[b].eventIndex||0,proxy:function(a){if(l[b]){var a=
    l[b].targets,e,h=a.length,i=0;if(j){for(;(e=a[i++])&&e.elem===f.elem&&e.capture&&e.index<f.index;);a.splice(--i,0,f)}else{for(;(e=a[--h])&&e.elem===f.elem&&!e.capture&&e.index>f.index;);a.splice(++h,0,f)}}else if(d===b||k[b].rule()){n(c.Event.call(a||g.event),f);if(a.isDefaultPrevented)return false}}});return this.attachEvent("on"+d,f.proxy)};c.removeEventListener=function(b,a,c){if(e[b])for(var d,f=e[b].length;d=e[b][--f];)if(a===d.listener&&c==d.capture&&this===d.elem)return this.detachEvent("on"+
    (k[b]?k[b].name:b),d.proxy),d.listener=d.proxy=d.elem=null,e[b].splice(f,1),!0;return!1};c.dispatchEvent=function(b){try{return this.fireEvent("on"+(k[b.type]?k[b.type].name:b.type),b)}catch(a){if(e[b.type]){var c,d,f=e[b.type];for(c=0;(d=f[c++])&&(!d.capture||!(d.elem===this&&!1===n(b,d))););if(!b.isImmediatePropagationStopped)for(c=0;(d=f[c++])&&(d.capture||!(d.elem===this&&!1===n(b,d))););if(b.isDefaultPrevented)return!1}return!0}};g.spike=c;!g.addEventListener&&g.attachEvent&&m&&(g.Event=c.Event,
    h.createEvent=c.createEvent,m.prototype.addEventListener=h.addEventListener=g.addEventListener=c.addEventListener,m.prototype.removeEventListener=h.removeEventListener=g.removeEventListener=c.removeEventListener,m.prototype.dispatchEvent=h.dispatchEvent=g.dispatchEvent=c.dispatchEvent)})(window);
