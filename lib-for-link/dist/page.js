!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=133)}({0:function(e,t,n){"use strict";e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&n[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),a.push(i))}},a}},1:function(e,t,o){var n,r,i,s={},l=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=(i={},function(e,t){if("function"==typeof e)return e();if(void 0===i[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}i[e]=n}return i[e]}),f=null,u=0,c=[],p=o(2);function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=s[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(y(o.parts[i],t))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(y(o.parts[i],t));s[o.id]={id:o.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function v(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);0<=t&&c.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return m(t,e.attrs),v(e,t),t}function m(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,e){var n,o,r,i,a,c;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=f||(f=b(e)),o=A.bind(null,n,s,!1),r=A.bind(null,n,s,!0)}else r=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=e,c=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",m(c,a.attrs),v(a,c),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n=c,e),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}e.exports=function(e,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=l()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var c=h(e,a);return d(c,a),function(e){for(var t=[],n=0;n<c.length;n++){var o=c[n];(r=s[o.id]).refs--,t.push(r)}e&&d(h(e,a),a);for(n=0;n<t.length;n++){var r;if(0===(r=t[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete s[r.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function A(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},133:function(e,t,n){n(134),e.exports=n(135)},134:function(e,t){ArchiveListUtils={openListYear:function(e){console.log("openListYear");var t=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)"),n=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)");t.addClass("expanded").removeClass("collapsed"),n.addClass("toggle-open").text("▼ "),"function"==typeof e&&e()},openListMonth:function(o){this.openListYear(function(){var n=document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle");!function e(t){t<n.length?(n[t].click(),$(function(){setTimeout(function(){e(++t)},500)})):"function"==typeof o&&o()}(0)})},displayConfiguration:function(){console.log("displayConfiguration");var r="archivesCheckboxStatus";this.openListYear(function(){var a=function(){if("year"===$(this).attr("data-folder-type")){$(this).parent().find("ul > li > .download-checkbox").prop("checked",this.checked)}else{var e=$(this).parent().parent().parent(),t=e.children(".download-checkbox"),n=!0;e.find("ul.hierarchy > li > .download-checkbox").each(function(e,t){!1===t.checked&&(n=!1)}),t.prop("checked",n)}var o={};$("#BlogArchive1_ArchiveList input.download-checkbox").each(function(e,t){o[t.id]=t.checked}),lscache.set(r,o)};$("#BlogArchive1_ArchiveList a.toggle").each(function(e,t){var n,o="month";if("BlogArchive1_ArchiveList"===$(t).parent().parent().parent().attr("id")&&(o="year"),"year"===o)n="d_"+$(t).parent().children("a.post-count-link").text().trim();else{var r=$(t).parent().children("a.post-count-link").attr("href").split("/");n="d_"+r[r.length-3]+"_"+r[r.length-2]}var i=$('<input type="checkbox" checked="checked" class="download-checkbox" />').attr("id",n).attr("data-folder-type",o).change(a);$(t).before(i).parent().addClass("init-download-checkbox")});var e=lscache.get(r);if(e)for(var t in e)$("#"+t).prop("checked",e[t])})},loopOpenItem:function(c,e){!function r(i){if(i<c.length){var a=3;!function t(){var n=window.open(c[i]),o=300;!function e(){if(!1===n.closed&&0<o)setTimeout(function(){o--,e()},1e3);else{if(0===o){if(n.close(),0<--a)return void t();console.log(["DOWNLOAD ERROR",c[i]])}setTimeout(function(){r(++i)},3e3)}}()}()}else"function"==typeof e&&e()}(0)},startDownload:function(r){var i=this,a=$('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked');!function e(t){if(t<a.length){var n=a.eq(t).parent();if(n.hasClass("collapsed"))n.children("a.toggle")[0].click(),setTimeout(function(){e(t)},1e3);else{var o=[];n.find("ul.posts > li > a").each(function(e,t){o.push(t.href+"?downloadArticle=true")}),i.loopOpenItem(o,function(){a.eq(t).prop("checked",!1).change(),e(++t)})}}else"function"==typeof r&&r()}(0)}},$(function(){var e=$("#ArchiveList > .page-tool");e.find(".open-list.year").click(function(){ArchiveListUtils.openListYear()}),e.find(".open-list.month").click(function(){ArchiveListUtils.openListMonth()}),e.find(".setup-checkbox").click(function(){ArchiveListUtils.displayConfiguration()}).click(),e.find(".start-download").click(function(){ArchiveListUtils.startDownload()})})},135:function(e,t,n){var o=n(136);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(e.exports=o.locals)},136:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"#content.main{display:none}#main{margin-top:30px}#ArchiveList>#BlogArchive1_ArchiveList ul.hierarchy>li.archivedate{padding-left:0;margin-left:1rem !important}#ArchiveList>#BlogArchive1_ArchiveList ul.posts>li{padding-left:.75rem;margin-left:1rem !important}#ArchiveList>#BlogArchive1_ArchiveList input.download-checkbox{width:16px;height:16px;margin-top:-2px}#main .page-tool{font-size:14px;user-select:none}#main .page-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top, #f8f8f8, #f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);font-weight:bold;margin-right:.5rem;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,0.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none}",""])},2:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,i=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}}});
//# sourceMappingURL=page.js.map