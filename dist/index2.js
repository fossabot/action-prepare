!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=19)}({0:function(e,r){e.exports=require("@actions/core")},1:function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},19:function(e,r,n){e.exports=n(20)},2:function(e,r){e.exports=require("source-map-support/register")},20:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.run=void 0,n(2);const t=n(0);async function o(e){t.info("Hello World"),t.info("base dir: "+e);const r=n(21);throw t.info("camel case: "+r("Foo Bar")),new Error("aa")}r.run=o,t.info("require.main = "+n.c[n.s]),t.info("module = "+e),t.info("require.main === module = "+(n.c[n.s]===e)),t.info("process.cwd() = "+process.cwd());o(process.cwd())}).call(this,n(1)(e))},21:function(e,r){e.exports=require("lodash/camelCase")}});
//# sourceMappingURL=index2.js.map