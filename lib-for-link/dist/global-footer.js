!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=50)}({0:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(l=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var l;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var l=t[r];null!=l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},1:function(t,e,n){var o,r,i={},l=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,u=0,c=[],d=n(2);function p(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](o.parts[l]);for(;l<o.parts.length;l++)r.parts.push(v(o.parts[l],e))}else{var a=[];for(l=0;l<o.parts.length;l++)a.push(v(o.parts[l],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],l=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[l]?o[l].parts.push(a):n.push(o[l]={id:l,parts:[a]})}return n}function b(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return m(e,t.attrs),b(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var l=u++;n=s||(s=h(e)),o=x.bind(null,n,l,!1),r=x.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),b(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var l=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){g(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var l=n[r];(a=i[l.id]).refs--,o.push(a)}t&&p(f(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var k,y=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}},2:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},50:function(t,e,n){n(51),n(52),n(54),n(55),n(56),t.exports=n(57)},51:function(t,e){jQuery.puliGuestBook=function(t){var e=function(e,n){return void 0===t[e]?n:t[e]},n=function(){var t=location.href,e=t.indexOf(".blogspot."),n=t.indexOf("/",e);return t=t.substring(0,n+1)},o=e("container","#puliGuestBook"),r=jQuery(o);if(0===r.length){var i=o.substr(1);document.write('<div id="'+i+'"></div>'),r=jQuery(o)}r.addClass("puli-guest-book");var l=e("blogID",null),a=e("postID",null),s=null;if(null===l&&null===a){if(null===(s=e("url",null)))return void window.alert("puliGuestBook沒有設定URL");if("http://"!==s.substring(0,7)){var u=(d=location.href).indexOf(".blogspot."),c=d.indexOf("/",u);s=(d=d.substring(0,c+1))+"feeds/"+s+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli"}"default"===s.substring(s.length-"default".length,s.length)&&(s=s.substring(0,s.length-"default".length),s+="full?alt=json-in-script&callback=handleGuestbookPulipuli")}else{var d;s=(d=n())+"feeds/"+a+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli"}var p=e("listID","Feedpulipuli_guestbookDisplay"),f=e("listNumber",20),b=e("adminName","布丁布丁吃布丁"),g=e("adminPhoto",null),h=e("anonymous","匿名"),m=e("readMore","閱讀全部的留言"),v=e("write","撰寫留言"),k=e("reload","重新讀取"),y=e("addLink",null),x=e("disableBottomButtons",!1);handleGuestbookPulipuli=function(t){r.html("");var e='<ul id="'+p+'" class="guest-book-list">',o=f,i='<a class="date" href="%COMMENT_LINK%" target="_blank">%Y%-%M%-%D% (查看留言)</a>\n      <strong class="name">%authorname%</strong>:<br />\n      %comment%',s=[];try{s=t.feed.entry.sort(function(t,e){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order})}catch(t){}for(var u,c=null,d=0;(u=s[d])&&(0===d&&(c=u),!(d>=o));d++){for(var w=u.content.$t,D=w.replace("<BR/>","<br />\n"),j="",C=0;C<w.length;C++){var O=w.substr(C,1);if("<"!==O)j+=O;else{var M=w.indexOf(">",C);-1!==M&&(C=M)}}w=j;u.link[2].href;var B=D;let t=u.id.$t;t=t.slice(t.lastIndexOf(".post-")+6,t.length);let n=y;n.indexOf("#")&&(n=n.slice(0,n.indexOf("#"))),n=n+"#c"+t;var I=u.author[0].name.$t;"Anonymous"===I&&(I=h),I===b&&null!==g&&(I='<img src="'+g+'" class="admin-photo" border="0" /> '+I);void 0!==u.author[0].uri&&(I='<a href="'+n+'" target="_blank">'+I+"</a>");var U=u.published.$t.substr(0,10),T=U.substr(0,4),N=U.substr(5,2),L=U.substr(8,2),S=0;d%2==1&&(S=1),e+='<li class="guest-book-li guest-book-li-'+S+'"><span class="item-title">'+i.replace("%comment%",B).replace("%Y%",T).replace("%M%",N).replace("%D%",L).replace("%authorname%",I).replace("%COMMENT_LINK%",n)+"</span></li>"}var A=y,P="",R=null;if(null===l&&null===a&&null!==c){var G=c.link[0].href.split("/");l=G[4],a=G[5];var H=(R=c.link[2].href).indexOf(".com/");R=R.substring(0,H+5)}else R=n();null===A&&(A="https://www.blogger.com/comment.g?blogID="+l+"&postID="+a),P="jQuery.getScript('"+R+"feeds/"+a+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli')",$("#sidebar .guestbook a.icon.reload").click(()=>{jQuery.getScript(R+"feeds/"+a+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli")}),(u=s[d])&&(e+='<li class="guest-book-li readmore"><span class="item-title"><a href="'+A+'#comments" target="guestbook_write">'+m+"</a></span></li>"),e+="</ul>",!1===x&&(e+='<div class="guestbook-write"> <a href="'+A+'" class="write" target="guestbook_write">'+v+'</a> <a class="write" onclick="'+P+'">'+k+"</a></div>"),r.html(e)},jQuery.ajax({url:s,dataType:"script",cache:!1})}},52:function(t,e,n){var o=n(53);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(t.exports=o.locals)},53:function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".puli-guest-book .admin-photo {\n  float:left;\n  margin-right: 5px;\n  width:20px; \n  height: 20px;\n  display:block;\n}\n\n.puli-guest-book .guest-book-list {\n  /* border: 3px solid #D2CBBD; */\n  max-height: 500px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: #5B5743;\n  font-size:90%;\n\n  padding: 0;\n  margin: 0;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li {\n  background-image:none;\n  background-color: white !important;\n  margin: 0;\n  padding: 18px;\n  list-style:none;\n  clear:both;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li:hover {\n  padding-left: 15px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore:hover {\n  padding-left: -9px !important;\n  border-left-width: 0 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li .date {\n  background-image:none !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n  list-style:none;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n  width: auto !important;\n  height: auto !important;\n\n\n  display: block;\n  float:right;\n  text-align: right;\n  color: #B4AF98;\n  font-size:70%;\n  margin: 0 !important;\n  margin-left: 10px !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore {\n  text-align:center;\n  font-weight: bold;\n  /*border-top: 1px solid #5B5743;*/\n  /*background-color: white;*/\n  padding: 10px 0;\n  background-color: #D6D7D6 !important;\n}\n\n.puli-guest-book .guestbook-write {\n  text-align:center;\n  font-weight: bold;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write a.write {\n  color: #5B5743;\n  border: 1px solid #D2CBBD;\n  background-color:white;\n  padding: 5px;\n  margin: 5px;\n  text-decoration:none;\n  font-size:90%;\n  cursor:pointer;\n\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guestbook-write a.write:hover {\n  color: #5B5743;\n  border-color: #5B5743;\n}\n\n/*\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-0 {\n  background-color: #F6F3E0 !important;\n}\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-1 {\n  background-color: white !important;\n}\n*/\n\n.puli-guest-book .guest-book-list strong.name a {\n  display: inline;\n}",""])},54:function(t,e){jQuery.puliGuestBook({blogID:"16607461",postID:"113544406852218769",url:"/2005/12/blogger_113544406852218769.html#comment-editor",container:".puliGuestBook",listNumber:20,adminName:"Pulipuli Chen",adminPhoto:"//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/",anonymous:"匿名",readMore:"閱讀全部留言",write:"撰寫留言",reload:"重新讀取",addLink:"/2005/12/blogger_113544406852218769.html#comment-editor",disableBottomButtons:!0})},55:function(t,e){puliHandlePost=function(){var t=this;return t.title="",t.divID="puliHandlePostDiv",t.loading="Loading...",t.ulID="puliHandlePostUl",t.ulClass="",t.liClass="puliHandlePost-item-title",t.postshow=10,t.titlelen="",t.layout="%Y%-%M%-%D% %authorname%<br />%title%",t.bloggerName="pulipuli",t.tagname="",t.callback,t.compareentry=function(t,e){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},t.handlePosts=function(e){var n="";""!==t.title&&(n="<h2>"+t.title+"</h2>");for(var o,r=n+'<ul id="'+t.ulID+'">',i=t.postshow,l=t.titlelen,a=t.layout,s=e.feed.entry.sort(compareentry),u=0;(o=s[u])&&!(u>=i);u++){n=o.title.$t;if(""!==l&&n.length>l&&(n=n.substr(0,l)+"..."),n.indexOf(" / ")>0){var c=n.indexOf(" / ");n="<strong>"+n.substr(0,c)+"</strong>"+n.substr(c)}else n="<strong>"+n+"</strong>";var d=o.link[4].href;if(".html"!==d.substr(d.length-5,5))for(var p=o.link,f=0;f<p.length&&".html"!==(d=p[f].href).substr(d.length-5,d.length);f++);var b='<a href="'+d+'">'+n+"</a>",g=o.author[0].name.$t,h=o.published.$t.substr(0,10),m=h.substr(0,4),v=h.substr(5,2),k=h.substr(8,2),y=a.replace("%title%",b).replace("%Y%",m).replace("%M%",v).replace("%D%",k).replace("%authorname%",g);r+='<li class="'+t.liClass+'">'+y+"</li>"}r+="</ul>",jQuery("#"+t.divID).html(r),"function"==typeof t.callback&&t.callback()},t.load=function(e){jQuery("#"+e).html('<div id="'+t.divID+'"><h2>'+t.loading+"</h2></div>");var n=t.tagname;return"/-/"!==n.substr(0,3)&&""!==n&&(n="/-/"+n),jQuery.getJSON("/feeds/posts/summary"+n+"/?alt=json-in-script&callback=?",function(e){t.handlePosts(e)}),t},t}},56:function(t,e){puliHandleComments=function(){var t=this;return t.title="",t.divID="puliHandleCommentsDiv",t.loading="Loading...",t.ulID="puliHandleCommentsUl",t.ulClass="",t.liClass="puliHandleCom-item-title",t.postshow=10,t.titlelen=20,t.layout="%Y%-%M%-%D% %authorname%<br />%title%",t.bloggerName="pulipuli",t.compareentry=function(t,e){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},t.handleComments=function(e){var n="";""!==t.title&&(n="<h2>"+t.title+"</h2>");for(var o,r=n+'<ul id="'+t.ulID+'">',i=t.postshow,l=t.titlelen,a=t.layout,s=e.feed.entry.sort(compareentry),u=0;(o=s[u])&&!(u>=i);u++){n=o.title.$t;""!==l&&n.length>l&&(n=n.substr(0,l)+"...");var c="#";if(void 0!==o.link[2]&&(c=o.link[2].href),n=n.replace("<","&lt;").replace(">","&gt;"),""!==$.trim(n)){var d='<a href="'+c+'">'+n+"</a>",p=o.author[0].name.$t,f=o.published.$t.substr(0,10),b=f.substr(0,4),g=f.substr(5,2),h=f.substr(8,2),m=a.replace("%comment%",d).replace("%Y%",b).replace("%M%",g).replace("%D%",h).replace("%authorname%",p);r+='<li class="'+t.liClass+'">'+m+"</li>"}else i++}r+="</ul>",jQuery("#"+t.divID).html(r)},t.load=function(e){return jQuery("#"+e).html('<div id="'+t.divID+'"><h2>'+t.loading+"</h2></div>"),jQuery.getJSON("/feeds/comments/full?alt=json-in-script&callback=?",function(e){t.handleComments(e)}),t},t}},57:function(t,e){var n,o=function(){pHC=puliHandleComments(),pHC.bloggerName="pulipuli",pHC.postshow=10,pHC.titlelen="20",pHC.layout=decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25"),pHC.load("puliCommentsNode")};(n=puliHandlePost()).bloggerName="pulipuli",n.postshow=10,n.titlelen="",n.layout=decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)"),n.tagname="",n.callback=o,n.load("puliHandlePostNode")}});
//# sourceMappingURL=global-footer.js.map