!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=69)}({0:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(o).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},1:function(n,t,e){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),m=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var i=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}}(),s=null,p=0,l=[],f=e(2);function c(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],t))}else{var m=[];for(a=0;a<i.parts.length;a++)m.push(b(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:m}}}}function d(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],a=t.base?o[0]+t.base:o[0],m={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(m):e.push(i[a]={id:a,parts:[m]})}return e}function h(n,t){var e=m(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(n.insertAt.before,e);e.insertBefore(t,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function u(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return e.nc}();i&&(n.attrs.nonce=i)}return y(t,n.attrs),h(n,t),t}function y(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,i,r,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=p++;e=s||(s=u(t)),i=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",y(t,n.attrs),h(n,t),t}(t),i=function(n,t,e){var i=e.css,r=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=f(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),m=n.href;n.href=URL.createObjectURL(a),m&&URL.revokeObjectURL(m)}.bind(null,e,t),r=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=u(t),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){g(e)});return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return c(e,t),function(n){for(var i=[],r=0;r<e.length;r++){var a=e[r];(m=o[a.id]).refs--,i.push(m)}n&&c(d(n,t),t);for(r=0;r<i.length;r++){var m;if(0===(m=i[r]).refs){for(var s=0;s<m.parts.length;s++)m.parts[s]();delete o[m.id]}}}};var x,v=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function w(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=v(t,r);else{var o=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},2:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,i=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},69:function(n,t,e){e(70),e(72),e(74),e(76),e(78),e(80),e(82),e(84),e(86),n.exports=e(87)},70:function(n,t,e){var i=e(71);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},71:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#main .entry-content article .meta1 .item-control a {\n  margin-right: 0.5rem;\n  white-space: nowrap;\n  cursor: pointer;\n}",""])},72:function(n,t,e){var i=e(73);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},73:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n\n#comment-editor.hide {\n  display: none;\n}\n\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom:-2px;\n}\n\n\n/* ************************ */\n\n#disqus_thread {\n  overflow: hidden;\n  background: #FFFFFF;\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px;\n}\n",""])},74:function(n,t,e){var i=e(75);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},75:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#footer .go-top .goto-comment {\n  display: block !important;\n}\n",""])},76:function(n,t,e){var i=e(77);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},77:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'/**\n * @author Pulipuli Chen 20190301\n * 修正圖片寬度的問題\n */\n#main article {\n  /*\n  p:first-of-type a[href$="-no"] img:first-of-type {\n    box-shadow: 0px 0px 0px grey;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: -1rem;\n  }\n  */\n}\n#main article img {\n  max-width: calc(100% - 2rem);\n}\n#main article p:first-of-type > a[href$=".png"]:first-of-type,\n#main article p:first-of-type > a[href$=".jpg"]:first-of-type,\n#main article p:first-of-type > a[href$=".gif"]:first-of-type,\n#main article p:first-of-type > a[href|="https://lh3.googleusercontent.com/"]:first-of-type,\n#main article p:first-of-type > a[href$="-no"]:first-of-type,\n#main article p:first-of-type > a[href$=".png?puli_gphoto=1"]:first-of-type {\n  margin-left: -2em;\n  display: block;\n  text-align: center;\n}\n#main article p:first-of-type > a[href$=".png"]:first-of-type img,\n#main article p:first-of-type > a[href$=".jpg"]:first-of-type img,\n#main article p:first-of-type > a[href$=".gif"]:first-of-type img,\n#main article p:first-of-type > a[href|="https://lh3.googleusercontent.com/"]:first-of-type img,\n#main article p:first-of-type > a[href$="-no"]:first-of-type img,\n#main article p:first-of-type > a[href$=".png?puli_gphoto=1"]:first-of-type img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: auto;\n  margin-bottom: auto;\n}\n#main article p:not(:first-of-type) > a[href$=".png"] img,\n#main article p:not(:first-of-type) > a[href$=".jpg"] img,\n#main article p:not(:first-of-type) > a[href$=".gif"] img,\n#main article p:not(:first-of-type) > a[href|="https://lh3.googleusercontent.com/"] img,\n#main article p:not(:first-of-type) > a[href$="-no"] img,\n#main article p:not(:first-of-type) > a[href$=".png?puli_gphoto=1"] img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n@media (min-width: 767px) {\n  #main article p:first-of-type > a[href$=".png"]:first-of-type,\n  #main article p:first-of-type > a[href$=".jpg"]:first-of-type,\n  #main article p:first-of-type > a[href$=".gif"]:first-of-type,\n  #main article p:first-of-type > a[href|="https://lh3.googleusercontent.com/"]:first-of-type,\n  #main article p:first-of-type > a[href$="-no"]:first-of-type {\n    /*margin-left: -2em;\n      margin-right: 2em;*/\n  }\n}\n@media (max-width: 767px) {\n  /*\n    #main .entry-content > article > p:first-of-type > a[href$=".png"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=".jpg"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=".gif"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$="-no"]:first-of-type{\n        margin-left: -2em;\n        //width: 100%;\n        //height: auto;\n        //max-height: 200px;\n        display: block;\n        text-align:center;\n    }\n    */\n  /*\n    #main .entry-content a[href$=".png"]:first-of-type img,\n    #main .entry-content a[href$=".jpg"]:first-of-type img,\n    #main .entry-content a[href$=".gif"]:first-of-type img,\n    #main .entry-content a[href$="-no"]:first-of-type img{\n        width: 80%;\n        height: auto;\n        // max-height: 500px;\n    }\n    */\n  #main article p:not(:first-of-type) > a[href$=".png"],\n  #main article p:not(:first-of-type) > a[href$=".jpg"],\n  #main article p:not(:first-of-type) > a[href$=".gif"],\n  #main article p:not(:first-of-type) > a[href|="https://lh3.googleusercontent.com/"],\n  #main article p:not(:first-of-type) > a[href$="-no"] {\n    display: block;\n    text-align: center;\n    margin-left: -2rem;\n    margin-right: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  #main article img {\n    max-width: 100%;\n  }\n  #main article p > a[href] > img {\n    display: block;\n    text-align: center;\n    text-indent: 0 !important;\n    /*margin-left: -1rem;*/\n  }\n  #main article p:first-of-type > a[href$=".png"]:first-of-type,\n  #main article p:first-of-type > a[href$=".jpg"]:first-of-type,\n  #main article p:first-of-type > a[href$=".gif"]:first-of-type,\n  #main article p:first-of-type > a[href|="https://lh3.googleusercontent.com/"]:first-of-type,\n  #main article p:first-of-type > a[href$="-no"]:first-of-type,\n  #main article p:first-of-type > a[href$=".png?puli_gphoto=1"]:first-of-type {\n    margin-left: 0 !important;\n  }\n  #main article p:not(:first-of-type) > a[href$=".png"],\n  #main article p:not(:first-of-type) > a[href$=".jpg"],\n  #main article p:not(:first-of-type) > a[href$=".gif"],\n  #main article p:not(:first-of-type) > a[href|="https://lh3.googleusercontent.com/"],\n  #main article p:not(:first-of-type) > a[href$="-no"],\n  #main article p:not(:first-of-type) > a[href$=".png?puli_gphoto=1"] {\n    /*margin-left: 2rem;*/\n    margin-left: 1rem;\n    text-indent: -0.5em;\n  }\n  #main article p:not(:first-of-type) > a[href$=".png"] img,\n  #main article p:not(:first-of-type) > a[href$=".jpg"] img,\n  #main article p:not(:first-of-type) > a[href$=".gif"] img,\n  #main article p:not(:first-of-type) > a[href|="https://lh3.googleusercontent.com/"] img,\n  #main article p:not(:first-of-type) > a[href$="-no"] img,\n  #main article p:not(:first-of-type) > a[href$=".png?puli_gphoto=1"] img {\n    width: 100%;\n    /*max-height: 500px;*/\n  }\n}\n',""])},78:function(n,t,e){var i=e(79);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},79:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#backlinks-container h4 {\n  float: left;\n  line-height: 1rem;\n  margin-right: 25px;\n  cursor: default;\n}\n\n#backlinks-container h4:after {\n  bottom: 10px;\n  left: inherit;\n  right: -20px;\n}\n\n#backlinks-container a[href] {\n  line-height: 2.4rem;\n}\n\n#backlinks-container p {\n  margin-bottom: 0;\n}",""])},80:function(n,t,e){var i=e(81);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},81:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n  #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  /**\n   * 1 3 5\n   */\n  #sidebar > .widget.two-col:nth-of-type(odd) {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  \n  /**\n   * 2 4 6\n   */\n  #sidebar > .widget.two-col:nth-of-type(even) {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n} \n\n@media (min-width:979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  \n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }    \n\n  #sidebar > .comments {\n    display: block;\n  }\n}",""])},82:function(n,t,e){var i=e(83);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},83:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"/******************************/\n/* 20170309 上傳圖片 */\n.comment-form-tool a button {\n  background-color: #f8f8f8;\n  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  margin: 0 8px 6px 0;\n  font-family: arial, sans-serif;\n  font-size: 11px;\n  height: 27px;\n  padding-bottom: 0;\n  text-align: center;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  user-select: none;\n  margin-left: 0.5em;\n}\n.comment-form-tool {\n  font-size: 14px;\n  user-select: none;\n}\n",""])},84:function(n,t,e){var i=e(85);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},85:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'\n\n#main .entry-content, \n#main .entry-content li {\n    word-wrap: break-word;\n}\n\n#main .entry-content > article code {\n    display: block;\n}\n\nbody .addthis-smartlayers {\n    display: block !important;\n}\n\n.at4-thankyou-background .at4lb-inner {\n    display: none !important;\n}\n\n\n/*************************************/\n\n@media (min-width:767px) {\n    #main .author-meta {\n        max-width: calc(100% - 300px);\n    }\n    \n}\n\n#main .post-iframe {\n    height: 90vh;\n}\n\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n    font-size: 0.8em;\n    line-height: 1.5em;\n    margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n    display: inline-block;\n    margin-left: 1em;\n}\n\n#main .entry-meta .creative-commons img {\n    border-width: 0;\n    /*float:left;*/\n    margin-right: 0;\n    padding-top: 0;\n}\n\n#main .entry-meta img.avatar-author {\n    float:left;\n    margin-top: 8px;\n}\n\n#main .entry-meta h4 {\n    line-height: 1em;\n}\n\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n    text-decoration: underline;\n    color: #BD8242;\n    font-weight: bold;\n}\n\n@media (max-width: 480px) {\n    #footer .management {\n        margin-bottom: 70px;\n    }\n    \n    body > .sumome-stylebufferbottom-shim {\n        display: none;\n    }\n    \n    #main .post h4 {\n        font-size: 1.3rem;\n        line-height: 1.5rem;\n    }\n    \n    #main .post h5,\n    #main .post h6 {\n        font-size: 1rem;\n        line-height: 1.5rem;\n    }\n    \n    .entry-content > article > p {\n        text-indent: 1em;\n    }\n    \n    .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n        display: inline-block;\n        text-indent: -1em;\n        text-align: center;\n        width: 100%;\n    }\n    \n    /*#main .entry-content > article > p > a[href$=".png"]:first-of-type img {\n        max-height: 300px;\n    }*/\n    \n    .entry-content ul, .entry-content li {\n        margin-top: 0em !important; \n        margin-bottom: 0em !important; \n    }\n    \n}\n/**************************/\n@media (max-width: 767px) {\n    #main .entry-container .entry-content {\n        padding-bottom: 5px;\n        padding-top: 1em;\n    }\n    \n    #main .entry-meta {\n        border-top-width: 1px;\n    }\n    \n    #main .entry-meta .author-meta {\n        padding-left:0;\n        text-align: center;\n        /*display: none;*/\n    }\n    #main .entry-meta .avatar-author,\n    #main .entry-meta .bl_popover {\n        display: none;\n    }\n    \n    #main .entry-meta .avatar-author {\n        display: block;\n        margin-top: 10px;\n    }\n    \n    #main .entry-meta .creative-commons {\n        margin-left: 0 !important;\n        line-height: 1.5em !important;\n    }\n    #main .entry-meta .creative-commons a.img {\n        display: block;\n        margin-top: 1.5em;\n    }\n    #main .entry-meta .creative-commons img {\n        float: none;\n        margin-left: 0;\n    }\n    \n    .entry-meta img {\n        margin-right:0;\n    }\n    \n    .entry-meta .author-meta h4:after {\n        content: attr(data-content);\n        display:block;\n        font-weight: normal;\n        line-height: 1.5em;\n    }\n    \n    .entry-meta .popover {\n        display:none !important;\n    }\n    \n    .entry-meta {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n    \n    .share-story-container ul {\n        margin-top:0;\n    }\n    \n    #side-bar {\n        margin-left:0;\n    }\n    \n    /* 20161118 */\n    .entry-meta .author-meta {\n        margin-bottom: 5px;\n    }\n}\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n    min-height: 380px;\n}\n\n#main div.comments#comments {\n    min-height: 378px;\n}\n\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n    text-indent: 0;\n}\n\n#main .entry-content > article pre {\n    font-size: 1em;\n}\n\n#main .entry-content > article code {\n    font-size: 0.8em;\n    line-height: 1.15em;\n}\n\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n    /*border: 3px solid #CE8A42;*/\n    padding: 0.5em;\n    background-color: #2d2d2d;\n    color: white !important;\n    display: inline-block;\n}\n\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n    color: white !important;\n}\n\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 480px) {\n    #masthead #header {\n        max-width: calc(100% - 130px);\n    }\n    \n    \n    .entry-content,\n    .entry-content li {\n        line-height: 150%;\n    }\n    \n    .entry-content article h1 div.meta1 p small span {\n        white-space: nowrap;\n    }\n    \n    #comment-holder li.comment div.avatar-image-container {\n        position: relative;\n        z-index: 1;\n        margin: 10px;\n    }\n    \n    #comment-holder li.comment div.comment-block {\n        margin-left: 0;\n    }\n    \n    #comment-holder li.comment div.comment-block > * {\n        margin-left: 60px;\n    }\n    \n    #comment-holder li.comment div.comment-replies {\n        margin-left: 0;\n    }\n    \n    /* 20161117 */\n    #main .post h1 .meta1 {\n        line-height: 1rem;\n    }\n}\n\n#comment-holder li.comment div.avatar-image-container img[src="//img1.blogblog.com/img/blank.gif"] {\n    /*Gender_Neutral_User-48*/\n    background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n    background-size: cover;\n}\n\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n    display: block;\n}\n\n.entry-meta.clearfix .share-story-container .share-story.about li a  {\n    display: block;\n}\n\n@media (max-width: 767px) {\n    .entry-meta.clearfix .share-story-container .share-story.about li a  {\n        line-height: 50px;\n        padding: 0;\n        margin-bottom: 10px;\n    }\n}\n\n@media (min-width: 767px) {\n    .pull-right.share-story-container {\n        margin-top: 0;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li {\n        width: auto;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a {\n        background-color: #D6D7D6;\n        border-radius: 6px;\n        line-height: 32px;\n        padding: 0 10px;\n        margin-top: 5px;\n        font-size: 0.8em;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n        color:white;\n        background-color: #333;\n    }\n}\n\n\n.author-meta .popover {\n    font-weight: normal;\n    font-size: 0.8rem;\n}\n\n\n\n/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n    iframe[src^="https://docs.google.com/presentation/d/e/"] {\n        /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n        width: 100%;\n        height: calc(100vw * 0.7);\n    }\n}   /* @media (max-widt@media (max-width: 1200px) {*/\n\n/*****************************/\n/* 20181021 留言裡面的圖片 */\n/* https://blog.pulipuli.info/2017/10/k-determin-optimal-number-of-clusters.html */\n#comment-holder .comment-content img.comment-image {\n  display: block;\n}\n\n#comment-holder .comment-content iframe.youtube-embed {\n  max-width: 100%;\n  display: block;\n}\n\n\n/* ------------------------- */\n#main article .cata-title {\n  width: 75%;\n}\n\n#main article .heading-button {\n  margin:0;\n  padding:0;\n  text-decoration:none;\n  font-size:smaller;\n  font-weight:normal;\n  float:right;\n}\n',""])},86:function(n,t){PULI_UTILS.post.toc=function(n,t){var e,i;$(function(){if(void 0===t&&(t="h4"),void 0===n){if($("div.entry-content .disable-post-catalog").length>0)return;var r=$("div.entry-content:first > article > "+t+":first");if(0===r.length)return;var o=r.prev().filter("font");o.length>0&&o.remove();var a=r.prev().filter("hr");if(a.length>0)a.remove();else if((a=r.prevAll("div:first").children(":last").filter("hr")).length>0)a.remove();else{var m=r.prevAll("p:first");(a=m.children().filter("hr")).length>0?a.remove():(a=m.prev().filter("hr")).length>0&&a.remove(),""===$.trim(m.html())&&m.remove()}(n=$("<span></span>").addClass("puli-utils-append").hide().insertBefore(r)).attr("id","postcata"+PULI_UTILS.create_page_id())}var s=jQuery(n).attr("id"),p=jQuery(n).parents("article:first");if(!(p.find(".cate-title").length>0)){var l=p.find("h4,h5"),f=[],c={};for(e=0;e<l.length;e++)t=l.eq(e),c[i=t.offset().top]=t,f.push(i);if(1!==f.length){for(f.sort(function(n,t){return n-t}),l=[],e=0;e<f.length;e++)i=f[e],t=c[i],l.push(t);var d=s+"cataTitle",h=jQuery('<a class="puli-utils-append" name="'+d+'" id="'+d+'" />'),g=jQuery('<a class="puli-utils-append heading-button" href="#'+d+'"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>'),u=jQuery("<ul></ul>").addClass("puli-toc").addClass("puli-utils-append");for(e=0;e<l.length;e++){var y=l[e],b=y.text(),x=s+"_anchor"+e,v=jQuery('<a class="heading-anchor puli-utils-append" id="'+x+'" name="'+x+'" />');y.prepend(v),y.prepend(g.clone());var w=y.prop("tagName");void 0===w&&(w=y.attr("tagName")),"string"==typeof w&&(w=w.toLowerCase());var k=jQuery("<li><a href='#"+x+"'>"+b+"</a></li>");if("h4"===w)u.append(k);else if("h5"===w){var j=u.children("li:last");0===j.length&&(j=$("<li></li>").appendTo(u));var _=j.children("ul:last");0===_.length&&(_=$("<ul></ul>").appendTo(j)),_.append(k)}}l.length>1&&(n.append(h).append(u).slideDown(),n.prepend('<hr class="puli-utils-append" />'),n.append('<hr class="puli-utils-append" />'))}else 0===(a=r.prevAll().filter("hr")).length&&r.before("<hr />")}})},$(function(){PULI_UTILS.post.toc()}),$(function(){var n=function(){var t=$("#comment-holder iframe:last").length,e=$(".comment-form > iframe:last").length;if(0===t&&0===e)setTimeout(n,1e3);else{var i=$("#comment-holder iframe:last");0===t&&e>0&&(i=$(".comment-form > iframe:last")),i.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');var r=location.href;if("#comment-form-iframe"===r.substr(r.length-"#comment-form-iframe".length)){var o=i.offset().top-50;$(window).scrollTop(o)}}};n()}),$(function(){var n=function(){0===$("#comment-holder").length?setTimeout(n,1e3):($("#comment-holder .comment-content").html(function(n,t){var e,i,r;return e=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,i=/(^|[^\/])(www\.[\S]+(\b|$))/gim,r=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,t.replace(e,'<a href="$1" target="_blank">$1</a>').replace(i,'$1<a href="http://$2" target="_blank">$2</a>').replace(r,'<a href="mailto:$1">$1</a>')}),$('#comment-holder .comment-content a[href$=".png"],#comment-holder .comment-content a[href$=".gif"],#comment-holder .comment-content a[href$=".jpg"],#comment-holder .comment-content a[href^="http://imgur.com/"],#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(n,t){let e=t.href;if(e.indexOf("://imgur.com/")>0){if("http://imgur.com/"===e||"https://imgur.com/"===e)return;if(e.indexOf(",")>0&&(e=e.slice(0,e.indexOf(","))),e.indexOf("//imgur.com/a/")>0)return e=e.slice(e.indexOf("/a/")+3),void $(t).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/'+e+'"><a href="//imgur.com/'+e+'"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"><\/script>');e+=".jpg"}$(t).html('<img src="'+e+'" border="0" class="comment-image" />')}),$('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="https://youtu.be/"],#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(n,t){let e=t.href;e.indexOf("//www.youtube.com/watch?v=")>0?e=e.slice(e.indexOf("?v=")+3):e.indexOf("//youtu.be/")>0&&(e=e.slice(e.indexOf(".be/")+4)),$(t).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+e+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')}))};n()})},87:function(n,t,e){var i=e(88);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},88:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'\n/******************************************/\n@media print {\n    #masthead {\n        border-bottom: 1px solid gray;\n        position: static !important;\n    }\n    \n    #masthead.fixed-nav {\n        position: static !important;\n        height: 82px;\n    }\n    \n    #masthead.fixed-nav.fixed-nav h1 {\n        line-height: 30px;\n        margin-top: 10px;\n        font-size: 30px;\n    }\n    \n    #masthead .gcse,\n    #masthead .btn-navbar,\n    #masthead #menu-primary {\n        display:none;\n    }\n    \n    #masthead #header-inner {\n        width: 100% !important;\n        padding-left: 0;\n    }\n    #masthead .titlewrapper {\n        float: left;\n    }\n    #masthead .title a {\n        text-decoration: none;\n    }\n    \n    #masthead .title a:after {\n        content: "";\n    }\n    \n    #masthead .descriptionwrapper {\n        width: max-content;\n        /*padding-top: 20px;*/\n        padding-left: 18em;\n        padding-top: 5px;\n    }\n    \n    #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n        display: block;\n    }\n    \n    #masthead .descriptionwrapper:after {\n        content:attr(url);\n        display:block;\n        text-decoration: underline;\n    }\n    \n    #masthead .description {\n        margin-bottom: 0;\n    }\n    \n    /****************/\n    \n    .row {\n        margin-left: 0;\n    }\n    \n    #content {\n        margin-left:0;\n    }\n    \n    #content-wrapper {\n        padding-top: 0;\n    }\n    \n    /*****************/\n    \n    #main .read-more,\n    #main .share-story-container,\n    #main a[name="more"],\n    #main .related-posts,\n    #main .blogger-comment-from-post,\n    #main #backlinks-container {\n        display: none;\n    }\n    \n    #main .post a[href]:after{\n        content:" (" attr(href) ") ";\n        font-size:0.8em;\n        font-weight:normal;\n        text-decoration: underline !important;\n    }\n    \n    #main .post .entry-content .meta1 a:after,\n    #main .post .entry-content a[href$=".png"]:after,\n    #main #comments a[href]:after,\n    #main .post a[href="javascript:void(0)"]:after,\n    #main .post a[href^="#"]:after,\n    #main .post a.toggle:after,\n    #main .post #ArchiveList a.post-count-link:after {\n        content: "";\n    }\n    \n    #main .post a[href^="#"] {\n        display: none;\n    }\n    \n    #main .post .puli-toc a[href^="#"] {\n        display: inline;\n    }\n    \n    \n    #main #comments h4:after {\n        border-top-width: 0;\n    }\n    \n    #main .post:last-of-type {\n        margin-bottom: 0;\n    }\n    \n    #main .post h4,\n    #main .post h5,\n    #main .post h6 {\n        page-break-before: avoid;\n    }\n    \n    #main .post table {\n        page-break-inside: avoid;\n    }\n    \n    #main .post .entry-content {\n        padding-left:0;\n        padding-right:0;\n    }\n    \n    #main .entry-meta {\n        display: none;\n    }\n    \n    #main #comments {\n        border-bottom-width: 0;\n    }\n        \n    /*********************/\n    #sidebar {\n        margin-left: 0;\n    }\n    \n    #sidebar .about-me img[align="right"] {\n        float:left;\n        margin-left: 0;\n        margin-right: 0.5em;\n        \n    }\n    \n    #sidebar .about-me .widget-content {\n        margin-top: 0.5em;\n    }\n    #sidebar .about-me .about-link,\n    #sidebar .about-me .email-subscribe {\n        display: none;\n    }\n    \n    #sidebar .about-me a:after {\n        content: "";\n    }\n    \n    #sidebar .about-me .social-media div {\n        text-align: left;\n        padding-right:0 !important;\n        padding-left:0 !important;\n        margin-bottom: 0 !important;\n    }\n    \n    #sidebar .about-me .social-media div .social-button-wrapper {\n        display: block;\n        text-align: left;\n    }\n    #sidebar .about-me .social-media div .social-button-wrapper a {\n        display: inline;\n    }\n    \n    #sidebar .about-me .social-media div .social-button.google-plus,\n    #sidebar .about-me .social-media div .social-button.plurk,\n    #sidebar .about-me .social-media div .social-button.linkedin,\n    #sidebar .about-me .social-media div .social-button.twitter,\n    #sidebar .about-me .social-media div .social-button.github,\n    #sidebar .about-me .social-media div .social-button.android,\n    #sidebar .about-me .social-media div .social-button.chrome,\n    #sidebar .about-me .social-media div .social-button.rss {\n        display: none;\n    }\n    \n    #sidebar .about-me .social-media div a:after {\n        content: " " attr(title) ": " attr(href) "";\n        margin-left: 1em;\n    }\n    \n    #sidebar .about-me .social-media div a.email:after {\n        content: " " attr(href) "";\n    }\n    \n    #sidebar .popular-posts a[rel="bookmark"] {\n        text-decoration: none;\n    }\n    \n    #sidebar .popular-posts a[rel="bookmark"]:after {\n        content: attr(href);\n        text-decoration: underline;\n        display: block;\n    }\n    \n    #sidebar .guestbook a[href]:after,\n    #sidebar .new a[href]:after,\n    #sidebar .comments a[href]:after {\n        content: "";\n    }\n    \n    #sidebar .guestbook,\n    #sidebar .comments,\n    #sidebar .new,\n    #sidebar .PopularPosts {\n        display: none;\n    }\n    \n    #sidebar .widget {\n        page-break-inside: avoid;\n    }\n    \n    /**********************************/\n    #content-wrapper {\n        margin-bottom: 0;\n    }\n    \n    .site-footer #footer-body,\n    .site-footer .management,\n    .site-footer .go-top,\n    .site-footer .container {\n        display: none;\n    }\n    \n    .site-footer a:after {\n        content: "";\n    }\n    \n    /*************************************/\n    #footer .container {\n        padding: 0;\n    }\n    #footer p {\n        text-align: center;\n        width: 100%;\n    }\n    \n    #footer p a:after {\n        content: " " attr(href) "";\n    }\n    \n    #footer .themexpose {\n        display: none;\n    }\n    \n    /*****************************/\n    a.quickedit {\n        display: none;\n    }\n    \n    a:after {\n        white-space:nowrap;\n    }\n    \n    body > .sumome-share-client-wrapper {\n        display: none;\n    }\n}   /* @media print { */',""])}});
//# sourceMappingURL=item-header.js.map