!function(i){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=i,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=77)}({0:function(t,e,i){"use strict";t.exports=function(i){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(o).concat([r]).join("\n")}return[i].join("\n")}(t,i);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];null!=r&&(i[r]=!0)}for(n=0;n<t.length;n++){var o=t[n];null!=o[0]&&i[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),a.push(o))}},a}},1:function(t,e,n){var i,r,o,s={},l=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=(o={},function(t,e){if("function"==typeof t)return t();if(void 0===o[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}o[t]=i}return o[t]}),m=null,p=0,c=[],f=n(2);function d(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o],e))}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o],e));s[n.id]={id:n.id,refs:1,parts:a}}}}function h(t,e){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],m={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(m):i.push(n[a]={id:a,parts:[m]})}return i}function u(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),c.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,i);i.insertBefore(e,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);0<=e&&c.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return y(e,t.attrs),u(t,e),e}function y(e,i){Object.keys(i).forEach(function(t){e.setAttribute(t,i[t])})}function v(e,t){var i,n,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var a=p++;i=m||(m=b(t)),n=k.bind(null,i,a,!1),r=k.bind(null,i,a,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),u(t,e),e}(t),n=function(t,e,i){var n=i.css,r=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(n=f(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),m=t.href;t.href=URL.createObjectURL(a),m&&URL.revokeObjectURL(m)}.bind(null,i,t),function(){g(i),i.href&&URL.revokeObjectURL(i.href)}):(i=b(t),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),function(){g(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}t.exports=function(t,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=l()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var m=h(t,a);return d(m,a),function(t){for(var e=[],i=0;i<m.length;i++){var n=m[i];(r=s[n.id]).refs--,e.push(r)}t&&d(h(t,a),a);for(i=0;i<e.length;i++){var r;if(0===(r=e[i]).refs){for(var o=0;o<r.parts.length;o++)r.parts[o]();delete s[r.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function k(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},2:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?t:(i=0===n.indexOf("//")?n:0===n.indexOf("/")?r+n:o+n.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},77:function(t,e,i){i(78),i(80),i(82),i(84),i(86),i(88),i(90),i(92),i(94),t.exports=i(95)},78:function(t,e,i){var n=i(79);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},79:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"#main .entry-content article.article{text-align:justify}#main .entry-content article.article .meta1 .item-control a{margin-right:.5rem;white-space:nowrap;cursor:pointer}",""])},80:function(t,e,i){var n=i(81);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},81:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"#comment-editor{width:100%;height:210px;border-width:0}#comment-editor.hide{display:none}#comments-block img.favicon{height:16px;width:16px;margin-bottom:-2px}#disqus_thread{overflow:hidden;background:#fff;border-bottom:2px solid #ddd;padding:25px}#main div.comments#comments{min-height:0}",""])},82:function(t,e,i){var n=i(83);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},83:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"#footer .go-top .goto-comment{display:block!important}",""])},84:function(t,e,i){var n=i(85);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},85:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,'#main article img{max-width:calc(100% - 2rem)}#main article p:first-of-type>a[href$=".gif"]:first-of-type,#main article p:first-of-type>a[href$=".jpg"]:first-of-type,#main article p:first-of-type>a[href$=".png"]:first-of-type,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type{margin-left:-2em;display:block;text-align:center}#main article p:first-of-type>a[href$=".gif"]:first-of-type img,#main article p:first-of-type>a[href$=".jpg"]:first-of-type img,#main article p:first-of-type>a[href$=".png"]:first-of-type img,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type img,#main article p:first-of-type>a[href$=-no]:first-of-type img,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type img{box-shadow:4px 4px 2px grey;margin-right:auto;margin-bottom:auto}#main article p:not(:first-of-type)>a[href$=".gif"] img,#main article p:not(:first-of-type)>a[href$=".jpg"] img,#main article p:not(:first-of-type)>a[href$=".png"] img,#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"] img{box-shadow:4px 4px 2px grey;margin-right:5px;margin-bottom:5px}@media (max-width:767px){#main article p:not(:first-of-type)>a[href$=".gif"],#main article p:not(:first-of-type)>a[href$=".jpg"],#main article p:not(:first-of-type)>a[href$=".png"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"]{display:block;text-align:center;margin-left:-1rem;margin-right:1rem}}@media (max-width:480px){#main article img{max-width:100%}#main article p>a[href]>img{display:block;text-align:center;text-indent:0!important}#main article p:first-of-type>a[href$=".gif"]:first-of-type,#main article p:first-of-type>a[href$=".jpg"]:first-of-type,#main article p:first-of-type>a[href$=".png"]:first-of-type,#main article p:first-of-type>a[href$=".png?puli_gphoto=1"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|="https://lh3.googleusercontent.com/"]:first-of-type{margin-left:0!important}#main article p:not(:first-of-type)>a[href$=".gif"],#main article p:not(:first-of-type)>a[href$=".jpg"],#main article p:not(:first-of-type)>a[href$=".png"],#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"]{margin-left:1rem;text-indent:-.5em}#main article p:not(:first-of-type)>a[href$=".gif"] img,#main article p:not(:first-of-type)>a[href$=".jpg"] img,#main article p:not(:first-of-type)>a[href$=".png"] img,#main article p:not(:first-of-type)>a[href$=".png?puli_gphoto=1"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|="https://lh3.googleusercontent.com/"] img{width:100%}}',""])},86:function(t,e,i){var n=i(87);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},87:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"#backlinks-container h4{float:left;line-height:1rem;margin-right:25px;cursor:default}#backlinks-container h4:after{bottom:10px;left:inherit;right:-20px}#backlinks-container a[href]{line-height:2.4rem}#backlinks-container p{margin-bottom:0}",""])},88:function(t,e,i){var n=i(89);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},89:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"#sidebar .widget.about-me .link-buttons .subscribe{display:none}@media (min-width:767px){#side-bar{width:100%}#sidebar>div.widget .widget-content{min-height:360px;max-height:360px;overflow-y:auto;margin-bottom:0}.sidebar .widget{margin-bottom:0}#content{width:100%!important;max-width:1170px}}#side-bar{margin-left:30px}@media (min-width:767px){#side-bar{max-width:1170px}}@media (max-width:1200px){#side-bar{margin-left:20px}}@media (min-width:979px) and (max-width:1200px){#sidebar>div.widget{width:calc(33% - .5em);margin-right:1em}}@media (min-width:767px) and (max-width:979px){#sidebar>.widget:not(.two-col){display:none}#sidebar>.widget.two-col{margin-bottom:18px;width:calc(50% - .5em);float:left}#sidebar>.widget.two-col-1,#sidebar>.widget.two-col-3{margin-right:16px}#sidebar>.widget.two-col-2,#sidebar>.widget.two-col-4{margin-right:0;clear:none}}@media (min-width:979px){#sidebar>.widget:not(.three-col){display:none}#sidebar>.widget.three-col{margin-bottom:18px;width:calc(33% - 9px);float:left;margin-right:18px;clear:none}#sidebar>.widget.three-col:nth-of-type(3n){margin-right:0}#sidebar>.comments{display:block}}",""])},90:function(t,e,i){var n=i(91);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},91:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,".comment-form-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none;margin:0 8px 6px .5em}.comment-form-tool{font-size:14px;user-select:none}",""])},92:function(t,e,i){var n=i(93);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},93:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,'#main .entry-content,#main .entry-content li{word-wrap:break-word}#main .entry-content>article code{display:block}body .addthis-smartlayers{display:block!important}.at4-thankyou-background .at4lb-inner{display:none!important}@media (min-width:767px){#main .author-meta{max-width:calc(100% - 300px)}}#main .post-iframe{height:90vh}#main .entry-meta .creative-commons,#main .entry-meta .introduction{font-size:.8em;line-height:1.5em;margin-left:74px}#main .entry-meta .bl_popover{display:inline-block;margin-left:1em}#main .entry-meta .creative-commons img{border-width:0;margin-right:0;padding-top:0}#main .entry-meta img.avatar-author{float:left;margin-top:8px}#main .entry-meta h4{line-height:1em}#main .entry-meta .creative-commons .author,#main .entry-meta .creative-commons .title{text-decoration:underline;color:#bd8242;font-weight:700}@media (max-width:480px){#footer .management{margin-bottom:70px}body>.sumome-stylebufferbottom-shim{display:none}#main .post h4{font-size:1.3rem;line-height:1.5rem}#main .post h5,#main .post h6{font-size:1rem;line-height:1.5rem}.entry-content>article>p{text-indent:1em}.entry-content>article>p:not(:first-of-type)>a.lightbox-group{display:inline-block;text-indent:-1em;text-align:center;width:100%}.entry-content li,.entry-content ul{margin-top:0!important;margin-bottom:0!important}}@media (max-width:767px){#main .entry-container .entry-content{padding-bottom:5px;padding-top:1em}#main .entry-meta{border-top-width:1px}#main .entry-meta .author-meta{padding-left:0;text-align:center}#main .entry-meta .avatar-author,#main .entry-meta .bl_popover{display:none}#main .entry-meta .avatar-author{display:block;margin-top:10px}#main .entry-meta .creative-commons{margin-left:0!important;line-height:1.5em!important}#main .entry-meta .creative-commons a.img{display:block;margin-top:1.5em}#main .entry-meta .creative-commons img{float:none;margin-left:0}.entry-meta img{margin-right:0}.entry-meta .author-meta h4:after{content:attr(data-content);display:block;font-weight:400;line-height:1.5em}.entry-meta .popover{display:none!important}.entry-meta{padding-bottom:0;padding-top:0}.share-story-container ul{margin-top:0}#side-bar{margin-left:0}.entry-meta .author-meta{margin-bottom:5px}}#main div.comments#disqus_thread{min-height:380px}#main div.comments#comments{min-height:378px}#main .entry-content>article p>code{text-indent:0}#main .entry-content>article pre{font-size:1em}#main .entry-content>article code{font-size:.8em;line-height:1.15em}.entry-content .puli-toc{padding:.5em;background-color:#2d2d2d;color:#fff!important;display:inline-block}.entry-content .puli-toc a,.entry-content .puli-toc li{color:#fff!important}@media (max-width:480px){#masthead #header{max-width:calc(100% - 130px)}.entry-content,.entry-content li{line-height:150%}.entry-content article h1 div.meta1 p small span{white-space:nowrap}#comment-holder li.comment div.avatar-image-container{position:relative;z-index:1;margin:10px}#comment-holder li.comment div.comment-block{margin-left:0}#comment-holder li.comment div.comment-block>*{margin-left:60px}#comment-holder li.comment div.comment-replies{margin-left:0}#main .post h1 .meta1{line-height:1rem}}#comment-holder li.comment div.avatar-image-container img[src="//img1.blogblog.com/img/blank.gif"]{background-image:url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);background-size:cover}.entry-meta.clearfix .share-story-container .share-story.about,.entry-meta.clearfix .share-story-container .share-story.about li a{display:block}@media (max-width:767px){.entry-meta.clearfix .share-story-container .share-story.about li a{line-height:50px;padding:0;margin-bottom:10px}}@media (min-width:767px){.pull-right.share-story-container{margin-top:0}.entry-meta.clearfix .share-story-container .share-story.about li{width:auto}.entry-meta.clearfix .share-story-container .share-story.about li a{background-color:#d6d7d6;border-radius:6px;line-height:32px;padding:0 10px;margin-top:5px;font-size:.8em}.entry-meta.clearfix .share-story-container .share-story.about li a:hover{color:#fff;background-color:#333}}.author-meta .popover{font-weight:400;font-size:.8rem}@media (max-width:1200px){iframe[src^="https://docs.google.com/presentation/d/e/"]{width:100%;height:70vw}}#comment-holder .comment-content img.comment-image{display:block}#comment-holder .comment-content iframe.youtube-embed{max-width:100%;display:block}#main article .cata-title{width:75%}#main article .heading-button{margin:0;padding:0;text-decoration:none;font-size:smaller;font-weight:400;float:right}',""])},94:function(t,e){PULI_UTILS.post.toc=function(w,k){var j,O;$(function(){if(void 0===k&&(k="h4"),void 0===w){if(0<$("div.entry-content .disable-post-catalog").length)return;var t=$("div.entry-content:first > article > "+k+":first");if(0===t.length)return;var e=t.prev().filter("font");0<e.length&&e.remove();var i=t.prev().filter("hr");if(0<i.length)i.remove();else if(0<(i=t.prevAll("div:first").children(":last").filter("hr")).length)i.remove();else{var n=t.prevAll("p:first");0<(i=n.children().filter("hr")).length?i.remove():0<(i=n.prev().filter("hr")).length&&i.remove(),""===$.trim(n.html())&&n.remove()}(w=$("<span></span>").addClass("puli-utils-append").hide().insertBefore(t)).attr("id","postcata"+PULI_UTILS.create_page_id())}var r=jQuery(w).attr("id"),o=jQuery(w).parents("article:first");if(!(0<o.find(".cate-title").length)){var a=o.find("h4,h5"),m=[],s={};for(j=0;j<a.length;j++)k=a.eq(j),s[O=k.offset().top]=k,m.push(O);if(1!==m.length){for(m.sort(function(t,e){return t-e}),a=[],j=0;j<m.length;j++)O=m[j],k=s[O],a.push(k);var l=r+"cataTitle",p=jQuery('<a class="puli-utils-append" name="'+l+'" id="'+l+'" />'),c=jQuery('<a class="puli-utils-append heading-button" href="#'+l+'"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>'),f=jQuery("<ul></ul>").addClass("puli-toc").addClass("puli-utils-append");for(j=0;j<a.length;j++){var d=a[j],h=d.text(),u=r+"_anchor"+j,g=jQuery('<a class="heading-anchor puli-utils-append" id="'+u+'" name="'+u+'" />');d.prepend(g),d.prepend(c.clone());var b=d.prop("tagName");void 0===b&&(b=d.attr("tagName")),"string"==typeof b&&(b=b.toLowerCase());var y=jQuery("<li><a href='#"+u+"'>"+h+"</a></li>");if("h4"===b)f.append(y);else if("h5"===b){var v=f.children("li:last");0===v.length&&(v=$("<li></li>").appendTo(f));var x=v.children("ul:last");0===x.length&&(x=$("<ul></ul>").appendTo(v)),x.append(y)}}1<a.length&&(w.append(p).append(f).slideDown(),w.prepend('<hr class="puli-utils-append" />'),w.append('<hr class="puli-utils-append" />'))}else 0===(i=t.prevAll().filter("hr")).length&&t.before("<hr />")}})},$(function(){PULI_UTILS.post.toc()}),$(function(){!function t(){var e=$("#comment-holder iframe:last").length,i=$(".comment-form > iframe:last").length;if(0===e&&0===i)setTimeout(t,1e3);else{var n=$("#comment-holder iframe:last");0===e&&0<i&&(n=$(".comment-form > iframe:last")),n.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');var r="#comment-form-iframe",o=location.href;if(o.substr(o.length-r.length)===r){var a=n.offset().top-50;$(window).scrollTop(a)}}}()}),$(function(){!function t(){0===$("#comment-holder").length?setTimeout(t,1e3):($("#comment-holder .comment-content").html(function(t,e){var i,n,r;return i=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,n=/(^|[^\/])(www\.[\S]+(\b|$))/gim,r=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,e.replace(i,'<a href="$1" target="_blank">$1</a>').replace(n,'$1<a href="http://$2" target="_blank">$2</a>').replace(r,'<a href="mailto:$1">$1</a>')}),$('#comment-holder .comment-content a[href$=".png"],#comment-holder .comment-content a[href$=".gif"],#comment-holder .comment-content a[href$=".jpg"],#comment-holder .comment-content a[href^="http://imgur.com/"],#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(t,e){var i=e.href;if(0<i.indexOf("://imgur.com/")){if("http://imgur.com/"===i||"https://imgur.com/"===i)return;if(0<i.indexOf(",")&&(i=i.slice(0,i.indexOf(","))),0<i.indexOf("//imgur.com/a/"))return i=i.slice(i.indexOf("/a/")+3),void $(e).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/'+i+'"><a href="//imgur.com/'+i+'"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"><\/script>');i+=".jpg"}$(e).html('<img src="'+i+'" border="0" class="comment-image" />')}),$('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="https://youtu.be/"],#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(t,e){var i=e.href;0<i.indexOf("//www.youtube.com/watch?v=")?i=i.slice(i.indexOf("?v=")+3):0<i.indexOf("//youtu.be/")&&(i=i.slice(i.indexOf(".be/")+4)),$(e).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+i+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')}))}()})},95:function(t,e,i){var n=i(96);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(t.exports=n.locals)},96:function(t,e,i){(t.exports=i(0)(!1)).push([t.i,'@media print{#masthead{border-bottom:1px solid grey;position:static!important}#masthead.fixed-nav{position:static!important;height:82px}#masthead.fixed-nav.fixed-nav h1{line-height:30px;margin-top:10px;font-size:30px}#masthead #menu-primary,#masthead .btn-navbar,#masthead .gcse{display:none}#masthead #header-inner{width:100%!important;padding-left:0}#masthead .titlewrapper{float:left}#masthead .title a{text-decoration:none}#masthead .title a:after{content:""}#masthead .descriptionwrapper{width:max-content;padding-left:18em;padding-top:5px}#masthead.fixed-nav.affix #header-inner .descriptionwrapper{display:block}#masthead .descriptionwrapper:after{content:attr(url);display:block;text-decoration:underline}#masthead .description{margin-bottom:0}#content,.row{margin-left:0}#content-wrapper{padding-top:0}#main #backlinks-container,#main .blogger-comment-from-post,#main .read-more,#main .related-posts,#main .share-story-container,#main a[name=more]{display:none}#main .post a[href]:after{content:" (" attr(href) ") ";font-size:.8em;font-weight:400;text-decoration:underline!important}#main #comments a[href]:after,#main .post #ArchiveList a.post-count-link:after,#main .post .entry-content .meta1 a:after,#main .post .entry-content a[href$=".png"]:after,#main .post a.toggle:after,#main .post a[href="javascript:void(0)"]:after,#main .post a[href^="#"]:after{content:""}#main .post a[href^="#"]{display:none}#main .post .puli-toc a[href^="#"]{display:inline}#main #comments h4:after{border-top-width:0}#main .post:last-of-type{margin-bottom:0}#main .post h4,#main .post h5,#main .post h6{page-break-before:avoid}#main .post table{page-break-inside:avoid}#main .post .entry-content{padding-left:0;padding-right:0}#main .entry-meta{display:none}#main #comments{border-bottom-width:0}#sidebar{margin-left:0}#sidebar .about-me img[align=right]{float:left;margin-left:0;margin-right:.5em}#sidebar .about-me .widget-content{margin-top:.5em}#sidebar .about-me .about-link,#sidebar .about-me .email-subscribe{display:none}#sidebar .about-me a:after{content:""}#sidebar .about-me .social-media div{text-align:left;padding-right:0!important;padding-left:0!important;margin-bottom:0!important}#sidebar .about-me .social-media div .social-button-wrapper{display:block;text-align:left}#sidebar .about-me .social-media div .social-button-wrapper a{display:inline}#sidebar .about-me .social-media div .social-button.android,#sidebar .about-me .social-media div .social-button.chrome,#sidebar .about-me .social-media div .social-button.github,#sidebar .about-me .social-media div .social-button.google-plus,#sidebar .about-me .social-media div .social-button.linkedin,#sidebar .about-me .social-media div .social-button.plurk,#sidebar .about-me .social-media div .social-button.rss,#sidebar .about-me .social-media div .social-button.twitter{display:none}#sidebar .about-me .social-media div a:after{content:" " attr(title) ": " attr(href) "";margin-left:1em}#sidebar .about-me .social-media div a.email:after{content:" " attr(href) ""}#sidebar .popular-posts a[rel=bookmark]{text-decoration:none}#sidebar .popular-posts a[rel=bookmark]:after{content:attr(href);text-decoration:underline;display:block}#sidebar .comments a[href]:after,#sidebar .guestbook a[href]:after,#sidebar .new a[href]:after{content:""}#sidebar .comments,#sidebar .guestbook,#sidebar .new,#sidebar .PopularPosts{display:none}#sidebar .widget{page-break-inside:avoid}#content-wrapper{margin-bottom:0}.site-footer #footer-body,.site-footer .container,.site-footer .go-top,.site-footer .management{display:none}.site-footer a:after{content:""}#footer .container{padding:0}#footer p{text-align:center;width:100%}#footer p a:after{content:" " attr(href) ""}#footer .themexpose,a.quickedit{display:none}a:after{white-space:nowrap}body>.sumome-share-client-wrapper{display:none}}',""])}});