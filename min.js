var utf8ToUtf16=function(r){"use strict";
/*! (c) Andrea Giammarchi @WebReflection */var f=Math.ceil,i=String.fromCharCode;return r.pack=function(r){for(var t=0,n=r.length,a=f(n/2),o=new Uint16Array(a+1),e=0,u=0;u<a;u++){var c=r[e++]<<8;o[u]=c+(e<n?r[e++]:t++)}return o[a]=t,i.apply(null,o)},r.unpack=function(r){for(var t=[],n=r.length-1,a=0;a<n;a++){var o=r.charCodeAt(a);t.push(o>>8,255&o)}return r.charCodeAt(n)&&t.pop(),Uint8Array.from(t)},r}({});