!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=101)}({0:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,l=0,f=[],u=n(3);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=s||(s=g(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},101:function(e,t,n){n(102),e.exports=n(103)},102:function(e,t){ArchiveListUtils={openListYear:function(e){console.log("openListYear");let t=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)"),n=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)");t.addClass("expanded").removeClass("collapsed"),n.addClass("toggle-open").text("▼ "),"function"==typeof e&&e()},openListMonth:function(e){this.openListYear(()=>{let t=document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle"),n=r=>{r<t.length?(t[r].click(),$(()=>{setTimeout(()=>{n(++r)},500)})):"function"==typeof e&&e()};n(0)})},displayConfiguration:function(){console.log("displayConfiguration");this.openListYear(()=>{let e=function(){if("year"===$(this).attr("data-folder-type")){$(this).parent().find("ul > li > .download-checkbox").prop("checked",this.checked)}else{let e=$(this).parent().parent().parent(),t=e.children(".download-checkbox"),n=!0;e.find("ul.hierarchy > li > .download-checkbox").each((e,t)=>{!1===t.checked&&(n=!1)}),t.prop("checked",n)}let e={};$("#BlogArchive1_ArchiveList input.download-checkbox").each((t,n)=>{e[n.id]=n.checked}),lscache.set("archivesCheckboxStatus",e)};$("#BlogArchive1_ArchiveList a.toggle").each((t,n)=>{let r,o="month";if("BlogArchive1_ArchiveList"===$(n).parent().parent().parent().attr("id")&&(o="year"),"year"===o)r="d_"+$(n).parent().children("a.post-count-link").text().trim();else{let e=$(n).parent().children("a.post-count-link").attr("href").split("/");r="d_"+e[e.length-3]+"_"+e[e.length-2]}let i=$('<input type="checkbox" checked="checked" class="download-checkbox" />').attr("id",r).attr("data-folder-type",o).change(e);$(n).before(i).parent().addClass("init-download-checkbox")});let t=lscache.get("archivesCheckboxStatus");if(t)for(let e in t)$("#"+e).prop("checked",t[e])})},loopOpenItem:function(e,t){let n=r=>{if(r<e.length){let t=3,o=()=>{let i=window.open(e[r]),a=300,c=()=>{if(!1===i.closed&&a>0)setTimeout(()=>{a--,c()},1e3);else{if(0===a){if(i.close(),--t>0)return void o();console.log(["DOWNLOAD ERROR",e[r]])}setTimeout(()=>{n(++r)},3e3)}};c()};o()}else"function"==typeof t&&t()};n(0)},startDownload:function(e){let t=$('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked'),n=r=>{if(r<t.length){let e=t.eq(r).parent();if(e.hasClass("collapsed"))e.children("a.toggle")[0].click(),setTimeout(()=>{n(r)},1e3);else{let o=[];e.find("ul.posts > li > a").each((e,t)=>{o.push(t.href+"?downloadArticle=true")}),this.loopOpenItem(o,()=>{t.eq(r).prop("checked",!1).change(),n(++r)})}}else"function"==typeof e&&e()};n(0)}},$(()=>{let e=$("#ArchiveList > .page-tool");e.find(".open-list.year").click(()=>{ArchiveListUtils.openListYear()}),e.find(".open-list.month").click(()=>{ArchiveListUtils.openListMonth()}),e.find(".setup-checkbox").click(()=>{ArchiveListUtils.displayConfiguration()}).click(),e.find(".start-download").click(()=>{ArchiveListUtils.startDownload()})})},103:function(e,t,n){var r=n(104);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},104:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"#content.main {\n  display: none;\n}\n#main {\n  margin-top: 30px;\n}\n#ArchiveList > #BlogArchive1_ArchiveList ul.hierarchy > li.archivedate {\n  padding-left: 0;\n  margin-left: 1rem !important;\n}\n#ArchiveList > #BlogArchive1_ArchiveList ul.posts > li {\n  padding-left: 0.75rem;\n  margin-left: 1rem !important;\n}\n#ArchiveList > #BlogArchive1_ArchiveList input.download-checkbox {\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n#main .page-tool {\n  font-size: 14px;\n  user-select: none;\n}\n#main .page-tool a button {\n  background-color: #f8f8f8;\n  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-family: arial, sans-serif;\n  font-size: 11px;\n  height: 27px;\n  padding-bottom: 0;\n  text-align: center;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  user-select: none;\n}\n",""])},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}});
//# sourceMappingURL=page.js.map