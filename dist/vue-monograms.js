!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(t,e){return d.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:a,exports:s,options:c}}},function(t,e,n){var r=n(0)(n(7),n(8),!1,function(t){n(2)},"data-v-b331a714",null);t.exports=r.exports},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(5)("44acde2a",r,!0)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".monogram .text[data-v-b331a714]{fill:#0a0a0a;font-family:Constantia,Lucida Bright,Lucidabright,Lucida Serif,Lucida,DejaVu Serif,Bitstream Vera Serif,Liberation Serif,Georgia,serif;font-weight:700;font-size:1.5rem}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(6),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,d=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){c=n;var r=o(t,e);return l(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a];(u=i[s.id]).refs--,n.push(u)}e?l(r=o(t,e)):r=[];for(a=0;a<n.length;a++){var u;if(0===(u=n[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};function l(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(h(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(h(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function p(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function h(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(f){var o=u++;r=s||(s=p()),e=m.bind(null,r,o,!1),n=m.bind(null,r,o,!0)}else r=p(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Monogram",props:["width","letters","primaryColor"],data:function(){return{fillColor:{fill:this.primaryColor}}},methods:{calculatePointsForHexagon:function(){return[[parseFloat((this.width/2).toFixed(2)),0],[parseFloat(this.width),parseFloat((this.width/Math.sqrt(3)/2).toFixed(2))],[parseFloat(this.width),parseFloat((this.width/Math.sqrt(3)+this.width/Math.sqrt(3)/2).toFixed(2))],[parseFloat((this.width/2).toFixed(2)),parseFloat((this.width/Math.sqrt(3)*2).toFixed(2))],[0,parseFloat((this.width/Math.sqrt(3)+this.width/Math.sqrt(3)/2).toFixed(2))],[0,parseFloat((this.width/Math.sqrt(3)/2).toFixed(2))]].join(" ")}},computed:{monogramPoints:function(){return this.calculatePointsForHexagon()},height:function(){return parseFloat((this.width/Math.sqrt(3)*2).toFixed(2))}}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"monogram",style:this.fillColor,attrs:{width:this.width,height:this.height}},[e("polygon",{attrs:{points:this.monogramPoints}}),this._v(" "),e("text",{staticClass:"text",attrs:{x:"50%",y:"52%","alignment-baseline":"middle","text-anchor":"middle"}},[this._v("\n        "+this._s(this.letters)+"\n    ")])])},staticRenderFns:[]}},,,,,,,,,,,,function(t,e,n){t.exports=n(1)}]);