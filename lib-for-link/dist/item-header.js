!function(e){var i={};function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=69)}({0:function(n,t,e){"use strict";n.exports=function(e){var a=[];return a.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(o).concat([r]).join("\n")}var a;return[e].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},a.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(e[r]=!0)}for(i=0;i<n.length;i++){var o=n[i];null!=o[0]&&e[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),a.push(o))}},a}},1:function(n,t,i){var e,r,o,s={},l=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=e.apply(this,arguments)),r}),a=(o={},function(n,t){if("function"==typeof n)return n();if(void 0===o[n]){var e=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}o[n]=e}return o[n]}),p=null,c=0,m=[],f=i(2);function d(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=s[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(v(i.parts[o],t))}else{var a=[];for(o=0;o<i.parts.length;o++)a.push(v(i.parts[o],t));s[i.id]={id:i.id,refs:1,parts:a}}}}function h(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],a=t.base?o[0]+t.base:o[0],m={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(m):e.push(i[a]={id:a,parts:[m]})}return e}function u(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=m[m.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),m.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertAt.before,e);e.insertBefore(t,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=m.indexOf(n);0<=t&&m.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return i.nc}();e&&(n.attrs.nonce=e)}return y(t,n.attrs),u(n,t),t}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,n){var e,i,r,o,a,m;if(n.transform&&t.css){if(!(o="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=o}if(n.singleton){var s=c++;e=p||(p=b(n)),i=k.bind(null,e,s,!1),r=k.bind(null,e,s,!0)}else r=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=n,m=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",y(m,a.attrs),u(a,m),i=function(n,t,e){var i=e.css,r=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=f(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),m=n.href;n.href=URL.createObjectURL(a),m&&URL.revokeObjectURL(m)}.bind(null,e=m,n),function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),function(){g(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else r()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=l()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var m=h(n,a);return d(m,a),function(n){for(var t=[],e=0;e<m.length;e++){var i=m[e];(r=s[i.id]).refs--,t.push(r)}n&&d(h(n,a),a);for(e=0;e<t.length;e++){var r;if(0===(r=t[e]).refs){for(var o=0;o<r.parts.length;o++)r.parts[o]();delete s[r.id]}}}};var x,w=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function k(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},2:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=t.protocol+"//"+t.host,o=r+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var e,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(e=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}},69:function(n,t,e){e(70),e(72),e(74),e(76),e(78),e(80),e(82),e(84),e(86),n.exports=e(87)},70:function(n,t,e){var i=e(71);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},71:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#main .entry-content article .meta1 .item-control a {\n  margin-right: 0.5rem;\n  white-space: nowrap;\n  cursor: pointer;\n}",""])},72:function(n,t,e){var i=e(73);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},73:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n\n#comment-editor.hide {\n  display: none;\n}\n\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom:-2px;\n}\n\n\n/* ************************ */\n\n#disqus_thread {\n  overflow: hidden;\n  background: #FFFFFF;\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px;\n}\n",""])},74:function(n,t,e){var i=e(75);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},75:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#footer .go-top .goto-comment{display:block !important}",""])},76:function(n,t,e){var i=e(77);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},77:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'#main article img{max-width:calc(100% - 2rem)}#main article p:first-of-type>a[href$=".png"]:first-of-type,#main article p:first-of-type>a[href$=".jpg"]:first-of-type,#main article p:first-of-type>a[href$=".gif"]:first-of-type,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type,#main article p:first-of-type>a[href$="-no"]:first-of-type,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type{margin-left:-2em;display:block;text-align:center}#main article p:first-of-type>a[href$=".png"]:first-of-type img,#main article p:first-of-type>a[href$=".jpg"]:first-of-type img,#main article p:first-of-type>a[href$=".gif"]:first-of-type img,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type img,#main article p:first-of-type>a[href$="-no"]:first-of-type img,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type img{box-shadow:4px 4px 2px grey;margin-right:auto;margin-bottom:auto}#main article p:not(:first-of-type)>a[href$=".png"] img,#main article p:not(:first-of-type)>a[href$=".jpg"] img,#main article p:not(:first-of-type)>a[href$=".gif"] img,#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"] img,#main article p:not(:first-of-type)>a[href$="-no"] img,#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"] img{box-shadow:4px 4px 2px grey;margin-right:5px;margin-bottom:5px}@media (max-width:767px){#main article p:not(:first-of-type)>a[href$=".png"],#main article p:not(:first-of-type)>a[href$=".jpg"],#main article p:not(:first-of-type)>a[href$=".gif"],#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"],#main article p:not(:first-of-type)>a[href$="-no"]{display:block;text-align:center;margin-left:-2rem;margin-right:2rem}}@media (max-width:480px){#main article img{max-width:100%}#main article p>a[href]>img{display:block;text-align:center;text-indent:0 !important}#main article p:first-of-type>a[href$=".png"]:first-of-type,#main article p:first-of-type>a[href$=".jpg"]:first-of-type,#main article p:first-of-type>a[href$=".gif"]:first-of-type,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type,#main article p:first-of-type>a[href$="-no"]:first-of-type,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type{margin-left:0 !important}#main article p:not(:first-of-type)>a[href$=".png"],#main article p:not(:first-of-type)>a[href$=".jpg"],#main article p:not(:first-of-type)>a[href$=".gif"],#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"],#main article p:not(:first-of-type)>a[href$="-no"],#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"]{margin-left:1rem;text-indent:-0.5em}#main article p:not(:first-of-type)>a[href$=".png"] img,#main article p:not(:first-of-type)>a[href$=".jpg"] img,#main article p:not(:first-of-type)>a[href$=".gif"] img,#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"] img,#main article p:not(:first-of-type)>a[href$="-no"] img,#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"] img{width:100%}}',""])},78:function(n,t,e){var i=e(79);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},79:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#backlinks-container h4 {\n  float: left;\n  line-height: 1rem;\n  margin-right: 25px;\n  cursor: default;\n}\n\n#backlinks-container h4:after {\n  bottom: 10px;\n  left: inherit;\n  right: -20px;\n}\n\n#backlinks-container a[href] {\n  line-height: 2.4rem;\n}\n\n#backlinks-container p {\n  margin-bottom: 0;\n}",""])},80:function(n,t,e){var i=e(81);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},81:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n  #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  /**\n   * 1 3 5\n   */\n  #sidebar > .widget.two-col:nth-of-type(odd) {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  \n  /**\n   * 2 4 6\n   */\n  #sidebar > .widget.two-col:nth-of-type(even) {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n} \n\n@media (min-width:979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  \n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }    \n\n  #sidebar > .comments {\n    display: block;\n  }\n}",""])},82:function(n,t,e){var i=e(83);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},83:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".comment-form-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top, #f8f8f8, #f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);font-weight:bold;margin:0 8px 6px 0;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,0.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none;margin-left:.5em}.comment-form-tool{font-size:14px;user-select:none}",""])},84:function(n,t,e){var i=e(85);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},85:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'\n\n#main .entry-content, \n#main .entry-content li {\n    word-wrap: break-word;\n}\n\n#main .entry-content > article code {\n    display: block;\n}\n\nbody .addthis-smartlayers {\n    display: block !important;\n}\n\n.at4-thankyou-background .at4lb-inner {\n    display: none !important;\n}\n\n\n/*************************************/\n\n@media (min-width:767px) {\n    #main .author-meta {\n        max-width: calc(100% - 300px);\n    }\n    \n}\n\n#main .post-iframe {\n    height: 90vh;\n}\n\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n    font-size: 0.8em;\n    line-height: 1.5em;\n    margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n    display: inline-block;\n    margin-left: 1em;\n}\n\n#main .entry-meta .creative-commons img {\n    border-width: 0;\n    /*float:left;*/\n    margin-right: 0;\n    padding-top: 0;\n}\n\n#main .entry-meta img.avatar-author {\n    float:left;\n    margin-top: 8px;\n}\n\n#main .entry-meta h4 {\n    line-height: 1em;\n}\n\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n    text-decoration: underline;\n    color: #BD8242;\n    font-weight: bold;\n}\n\n@media (max-width: 480px) {\n    #footer .management {\n        margin-bottom: 70px;\n    }\n    \n    body > .sumome-stylebufferbottom-shim {\n        display: none;\n    }\n    \n    #main .post h4 {\n        font-size: 1.3rem;\n        line-height: 1.5rem;\n    }\n    \n    #main .post h5,\n    #main .post h6 {\n        font-size: 1rem;\n        line-height: 1.5rem;\n    }\n    \n    .entry-content > article > p {\n        text-indent: 1em;\n    }\n    \n    .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n        display: inline-block;\n        text-indent: -1em;\n        text-align: center;\n        width: 100%;\n    }\n    \n    /*#main .entry-content > article > p > a[href$=".png"]:first-of-type img {\n        max-height: 300px;\n    }*/\n    \n    .entry-content ul, .entry-content li {\n        margin-top: 0em !important; \n        margin-bottom: 0em !important; \n    }\n    \n}\n/**************************/\n@media (max-width: 767px) {\n    #main .entry-container .entry-content {\n        padding-bottom: 5px;\n        padding-top: 1em;\n    }\n    \n    #main .entry-meta {\n        border-top-width: 1px;\n    }\n    \n    #main .entry-meta .author-meta {\n        padding-left:0;\n        text-align: center;\n        /*display: none;*/\n    }\n    #main .entry-meta .avatar-author,\n    #main .entry-meta .bl_popover {\n        display: none;\n    }\n    \n    #main .entry-meta .avatar-author {\n        display: block;\n        margin-top: 10px;\n    }\n    \n    #main .entry-meta .creative-commons {\n        margin-left: 0 !important;\n        line-height: 1.5em !important;\n    }\n    #main .entry-meta .creative-commons a.img {\n        display: block;\n        margin-top: 1.5em;\n    }\n    #main .entry-meta .creative-commons img {\n        float: none;\n        margin-left: 0;\n    }\n    \n    .entry-meta img {\n        margin-right:0;\n    }\n    \n    .entry-meta .author-meta h4:after {\n        content: attr(data-content);\n        display:block;\n        font-weight: normal;\n        line-height: 1.5em;\n    }\n    \n    .entry-meta .popover {\n        display:none !important;\n    }\n    \n    .entry-meta {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n    \n    .share-story-container ul {\n        margin-top:0;\n    }\n    \n    #side-bar {\n        margin-left:0;\n    }\n    \n    /* 20161118 */\n    .entry-meta .author-meta {\n        margin-bottom: 5px;\n    }\n}\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n    min-height: 380px;\n}\n\n#main div.comments#comments {\n    min-height: 378px;\n}\n\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n    text-indent: 0;\n}\n\n#main .entry-content > article pre {\n    font-size: 1em;\n}\n\n#main .entry-content > article code {\n    font-size: 0.8em;\n    line-height: 1.15em;\n}\n\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n    /*border: 3px solid #CE8A42;*/\n    padding: 0.5em;\n    background-color: #2d2d2d;\n    color: white !important;\n    display: inline-block;\n}\n\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n    color: white !important;\n}\n\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 480px) {\n    #masthead #header {\n        max-width: calc(100% - 130px);\n    }\n    \n    \n    .entry-content,\n    .entry-content li {\n        line-height: 150%;\n    }\n    \n    .entry-content article h1 div.meta1 p small span {\n        white-space: nowrap;\n    }\n    \n    #comment-holder li.comment div.avatar-image-container {\n        position: relative;\n        z-index: 1;\n        margin: 10px;\n    }\n    \n    #comment-holder li.comment div.comment-block {\n        margin-left: 0;\n    }\n    \n    #comment-holder li.comment div.comment-block > * {\n        margin-left: 60px;\n    }\n    \n    #comment-holder li.comment div.comment-replies {\n        margin-left: 0;\n    }\n    \n    /* 20161117 */\n    #main .post h1 .meta1 {\n        line-height: 1rem;\n    }\n}\n\n#comment-holder li.comment div.avatar-image-container img[src="//img1.blogblog.com/img/blank.gif"] {\n    /*Gender_Neutral_User-48*/\n    background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n    background-size: cover;\n}\n\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n    display: block;\n}\n\n.entry-meta.clearfix .share-story-container .share-story.about li a  {\n    display: block;\n}\n\n@media (max-width: 767px) {\n    .entry-meta.clearfix .share-story-container .share-story.about li a  {\n        line-height: 50px;\n        padding: 0;\n        margin-bottom: 10px;\n    }\n}\n\n@media (min-width: 767px) {\n    .pull-right.share-story-container {\n        margin-top: 0;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li {\n        width: auto;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a {\n        background-color: #D6D7D6;\n        border-radius: 6px;\n        line-height: 32px;\n        padding: 0 10px;\n        margin-top: 5px;\n        font-size: 0.8em;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n        color:white;\n        background-color: #333;\n    }\n}\n\n\n.author-meta .popover {\n    font-weight: normal;\n    font-size: 0.8rem;\n}\n\n\n\n/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n    iframe[src^="https://docs.google.com/presentation/d/e/"] {\n        /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n        width: 100%;\n        height: calc(100vw * 0.7);\n    }\n}   /* @media (max-widt@media (max-width: 1200px) {*/\n\n/*****************************/\n/* 20181021 留言裡面的圖片 */\n/* https://blog.pulipuli.info/2017/10/k-determin-optimal-number-of-clusters.html */\n#comment-holder .comment-content img.comment-image {\n  display: block;\n}\n\n#comment-holder .comment-content iframe.youtube-embed {\n  max-width: 100%;\n  display: block;\n}\n\n\n/* ------------------------- */\n#main article .cata-title {\n  width: 75%;\n}\n\n#main article .heading-button {\n  margin:0;\n  padding:0;\n  text-decoration:none;\n  font-size:smaller;\n  font-weight:normal;\n  float:right;\n}\n',""])},86:function(n,t){PULI_UTILS.post.toc=function(w,k){var j,_;$(function(){if(void 0===k&&(k="h4"),void 0===w){if(0<$("div.entry-content .disable-post-catalog").length)return;var n=$("div.entry-content:first > article > "+k+":first");if(0===n.length)return;var t=n.prev().filter("font");0<t.length&&t.remove();var e=n.prev().filter("hr");if(0<e.length)e.remove();else if(0<(e=n.prevAll("div:first").children(":last").filter("hr")).length)e.remove();else{var i=n.prevAll("p:first");0<(e=i.children().filter("hr")).length?e.remove():0<(e=i.prev().filter("hr")).length&&e.remove(),""===$.trim(i.html())&&i.remove()}(w=$("<span></span>").addClass("puli-utils-append").hide().insertBefore(n)).attr("id","postcata"+PULI_UTILS.create_page_id())}var r=jQuery(w).attr("id"),o=jQuery(w).parents("article:first");if(!(0<o.find(".cate-title").length)){var a=o.find("h4,h5"),m=[],s={};for(j=0;j<a.length;j++)k=a.eq(j),s[_=k.offset().top]=k,m.push(_);if(1!==m.length){for(m.sort(function(n,t){return n-t}),a=[],j=0;j<m.length;j++)_=m[j],k=s[_],a.push(k);var l=r+"cataTitle",p=jQuery('<a class="puli-utils-append" name="'+l+'" id="'+l+'" />'),c=jQuery('<a class="puli-utils-append heading-button" href="#'+l+'"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>'),f=jQuery("<ul></ul>").addClass("puli-toc").addClass("puli-utils-append");for(j=0;j<a.length;j++){var d=a[j],h=d.text(),u=r+"_anchor"+j,g=jQuery('<a class="heading-anchor puli-utils-append" id="'+u+'" name="'+u+'" />');d.prepend(g),d.prepend(c.clone());var b=d.prop("tagName");void 0===b&&(b=d.attr("tagName")),"string"==typeof b&&(b=b.toLowerCase());var y=jQuery("<li><a href='#"+u+"'>"+h+"</a></li>");if("h4"===b)f.append(y);else if("h5"===b){var v=f.children("li:last");0===v.length&&(v=$("<li></li>").appendTo(f));var x=v.children("ul:last");0===x.length&&(x=$("<ul></ul>").appendTo(v)),x.append(y)}}1<a.length&&(w.append(p).append(f).slideDown(),w.prepend('<hr class="puli-utils-append" />'),w.append('<hr class="puli-utils-append" />'))}else 0===(e=n.prevAll().filter("hr")).length&&n.before("<hr />")}})},$(function(){PULI_UTILS.post.toc()}),$(function(){!function n(){var t=$("#comment-holder iframe:last").length,e=$(".comment-form > iframe:last").length;if(0===t&&0===e)setTimeout(n,1e3);else{var i=$("#comment-holder iframe:last");0===t&&0<e&&(i=$(".comment-form > iframe:last")),i.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');var r="#comment-form-iframe",o=location.href;if(o.substr(o.length-r.length)===r){var a=i.offset().top-50;$(window).scrollTop(a)}}}()}),$(function(){!function n(){0===$("#comment-holder").length?setTimeout(n,1e3):($("#comment-holder .comment-content").html(function(n,t){var e,i,r;return e=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,i=/(^|[^\/])(www\.[\S]+(\b|$))/gim,r=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,t.replace(e,'<a href="$1" target="_blank">$1</a>').replace(i,'$1<a href="http://$2" target="_blank">$2</a>').replace(r,'<a href="mailto:$1">$1</a>')}),$('#comment-holder .comment-content a[href$=".png"],#comment-holder .comment-content a[href$=".gif"],#comment-holder .comment-content a[href$=".jpg"],#comment-holder .comment-content a[href^="http://imgur.com/"],#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(n,t){var e=t.href;if(0<e.indexOf("://imgur.com/")){if("http://imgur.com/"===e||"https://imgur.com/"===e)return;if(0<e.indexOf(",")&&(e=e.slice(0,e.indexOf(","))),0<e.indexOf("//imgur.com/a/"))return e=e.slice(e.indexOf("/a/")+3),void $(t).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/'+e+'"><a href="//imgur.com/'+e+'"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"><\/script>');e+=".jpg"}$(t).html('<img src="'+e+'" border="0" class="comment-image" />')}),$('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="https://youtu.be/"],#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(n,t){var e=t.href;0<e.indexOf("//www.youtube.com/watch?v=")?e=e.slice(e.indexOf("?v=")+3):0<e.indexOf("//youtu.be/")&&(e=e.slice(e.indexOf(".be/")+4)),$(t).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+e+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')}))}()})},87:function(n,t,e){var i=e(88);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},88:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'\n/******************************************/\n@media print {\n    #masthead {\n        border-bottom: 1px solid gray;\n        position: static !important;\n    }\n    \n    #masthead.fixed-nav {\n        position: static !important;\n        height: 82px;\n    }\n    \n    #masthead.fixed-nav.fixed-nav h1 {\n        line-height: 30px;\n        margin-top: 10px;\n        font-size: 30px;\n    }\n    \n    #masthead .gcse,\n    #masthead .btn-navbar,\n    #masthead #menu-primary {\n        display:none;\n    }\n    \n    #masthead #header-inner {\n        width: 100% !important;\n        padding-left: 0;\n    }\n    #masthead .titlewrapper {\n        float: left;\n    }\n    #masthead .title a {\n        text-decoration: none;\n    }\n    \n    #masthead .title a:after {\n        content: "";\n    }\n    \n    #masthead .descriptionwrapper {\n        width: max-content;\n        /*padding-top: 20px;*/\n        padding-left: 18em;\n        padding-top: 5px;\n    }\n    \n    #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n        display: block;\n    }\n    \n    #masthead .descriptionwrapper:after {\n        content:attr(url);\n        display:block;\n        text-decoration: underline;\n    }\n    \n    #masthead .description {\n        margin-bottom: 0;\n    }\n    \n    /****************/\n    \n    .row {\n        margin-left: 0;\n    }\n    \n    #content {\n        margin-left:0;\n    }\n    \n    #content-wrapper {\n        padding-top: 0;\n    }\n    \n    /*****************/\n    \n    #main .read-more,\n    #main .share-story-container,\n    #main a[name="more"],\n    #main .related-posts,\n    #main .blogger-comment-from-post,\n    #main #backlinks-container {\n        display: none;\n    }\n    \n    #main .post a[href]:after{\n        content:" (" attr(href) ") ";\n        font-size:0.8em;\n        font-weight:normal;\n        text-decoration: underline !important;\n    }\n    \n    #main .post .entry-content .meta1 a:after,\n    #main .post .entry-content a[href$=".png"]:after,\n    #main #comments a[href]:after,\n    #main .post a[href="javascript:void(0)"]:after,\n    #main .post a[href^="#"]:after,\n    #main .post a.toggle:after,\n    #main .post #ArchiveList a.post-count-link:after {\n        content: "";\n    }\n    \n    #main .post a[href^="#"] {\n        display: none;\n    }\n    \n    #main .post .puli-toc a[href^="#"] {\n        display: inline;\n    }\n    \n    \n    #main #comments h4:after {\n        border-top-width: 0;\n    }\n    \n    #main .post:last-of-type {\n        margin-bottom: 0;\n    }\n    \n    #main .post h4,\n    #main .post h5,\n    #main .post h6 {\n        page-break-before: avoid;\n    }\n    \n    #main .post table {\n        page-break-inside: avoid;\n    }\n    \n    #main .post .entry-content {\n        padding-left:0;\n        padding-right:0;\n    }\n    \n    #main .entry-meta {\n        display: none;\n    }\n    \n    #main #comments {\n        border-bottom-width: 0;\n    }\n        \n    /*********************/\n    #sidebar {\n        margin-left: 0;\n    }\n    \n    #sidebar .about-me img[align="right"] {\n        float:left;\n        margin-left: 0;\n        margin-right: 0.5em;\n        \n    }\n    \n    #sidebar .about-me .widget-content {\n        margin-top: 0.5em;\n    }\n    #sidebar .about-me .about-link,\n    #sidebar .about-me .email-subscribe {\n        display: none;\n    }\n    \n    #sidebar .about-me a:after {\n        content: "";\n    }\n    \n    #sidebar .about-me .social-media div {\n        text-align: left;\n        padding-right:0 !important;\n        padding-left:0 !important;\n        margin-bottom: 0 !important;\n    }\n    \n    #sidebar .about-me .social-media div .social-button-wrapper {\n        display: block;\n        text-align: left;\n    }\n    #sidebar .about-me .social-media div .social-button-wrapper a {\n        display: inline;\n    }\n    \n    #sidebar .about-me .social-media div .social-button.google-plus,\n    #sidebar .about-me .social-media div .social-button.plurk,\n    #sidebar .about-me .social-media div .social-button.linkedin,\n    #sidebar .about-me .social-media div .social-button.twitter,\n    #sidebar .about-me .social-media div .social-button.github,\n    #sidebar .about-me .social-media div .social-button.android,\n    #sidebar .about-me .social-media div .social-button.chrome,\n    #sidebar .about-me .social-media div .social-button.rss {\n        display: none;\n    }\n    \n    #sidebar .about-me .social-media div a:after {\n        content: " " attr(title) ": " attr(href) "";\n        margin-left: 1em;\n    }\n    \n    #sidebar .about-me .social-media div a.email:after {\n        content: " " attr(href) "";\n    }\n    \n    #sidebar .popular-posts a[rel="bookmark"] {\n        text-decoration: none;\n    }\n    \n    #sidebar .popular-posts a[rel="bookmark"]:after {\n        content: attr(href);\n        text-decoration: underline;\n        display: block;\n    }\n    \n    #sidebar .guestbook a[href]:after,\n    #sidebar .new a[href]:after,\n    #sidebar .comments a[href]:after {\n        content: "";\n    }\n    \n    #sidebar .guestbook,\n    #sidebar .comments,\n    #sidebar .new,\n    #sidebar .PopularPosts {\n        display: none;\n    }\n    \n    #sidebar .widget {\n        page-break-inside: avoid;\n    }\n    \n    /**********************************/\n    #content-wrapper {\n        margin-bottom: 0;\n    }\n    \n    .site-footer #footer-body,\n    .site-footer .management,\n    .site-footer .go-top,\n    .site-footer .container {\n        display: none;\n    }\n    \n    .site-footer a:after {\n        content: "";\n    }\n    \n    /*************************************/\n    #footer .container {\n        padding: 0;\n    }\n    #footer p {\n        text-align: center;\n        width: 100%;\n    }\n    \n    #footer p a:after {\n        content: " " attr(href) "";\n    }\n    \n    #footer .themexpose {\n        display: none;\n    }\n    \n    /*****************************/\n    a.quickedit {\n        display: none;\n    }\n    \n    a:after {\n        white-space:nowrap;\n    }\n    \n    body > .sumome-share-client-wrapper {\n        display: none;\n    }\n}   /* @media print { */',""])}});
//# sourceMappingURL=item-header.js.map