!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=24)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),s=null,u=0,c=[],p=e(2);function d(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],n))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(v(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:l}}}}function f(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):e.push(r[a]={id:a,parts:[l]})}return e}function h(t,n){var e=l(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),c.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(t.insertAt.before,e);e.insertBefore(n,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=c.indexOf(t);n>=0&&c.splice(n,1)}function g(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return m(n,t.attrs),h(t,n),n}function m(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=u++;e=s||(s=g(n)),r=x.bind(null,e,a,!1),o=x.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(n,t.attrs),h(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,e,n),o=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){b(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=f(t,n);return d(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var a=e[o];(l=i[a.id]).refs--,r.push(l)}t&&d(f(t,n),n);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var k,y=(k=[],function(t,n){return k[t]=n,k.filter(Boolean).join("\n")});function x(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,,,,,,,,,,,,,,,,,,,,,function(t,n,e){e(25),e(26),e(28),e(29),e(30),e(31),e(32),t.exports=e(34)},function(t,n){jQuery.puliGuestBook=function(t){var n=function(n,e){return void 0===t[n]?e:t[n]},e=function(){var t=location.href,n=t.indexOf(".blogspot."),e=t.indexOf("/",n);return t=t.substring(0,e+1)},r=n("container","#puliGuestBook"),o=jQuery(r);if(0===o.length){var i=r.substr(1);document.write('<div id="'+i+'"></div>'),o=jQuery(r)}o.addClass("puli-guest-book");var a=n("blogID",null),l=n("postID",null),s=null;if(null===a&&null===l){if(null===(s=n("url",null)))return void window.alert("puliGuestBook沒有設定URL");if("http://"!==s.substring(0,7)){var u=(p=location.href).indexOf(".blogspot."),c=p.indexOf("/",u);s=(p=p.substring(0,c+1))+"feeds/"+s+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli"}"default"===s.substring(s.length-"default".length,s.length)&&(s=s.substring(0,s.length-"default".length),s+="full?alt=json-in-script&callback=handleGuestbookPulipuli")}else{var p;s=(p=e())+"feeds/"+l+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli"}var d=n("listID","Feedpulipuli_guestbookDisplay"),f=n("listNumber",20),h=n("adminName","布丁布丁吃布丁"),b=n("adminPhoto",null),g=n("anonymous","匿名"),m=n("readMore","閱讀全部的留言"),v=n("write","撰寫留言"),k=n("reload","重新讀取"),y=n("addLink",null);handleGuestbookPulipuli=function(t){o.html("");var n='<ul id="'+d+'" class="guest-book-list">',r=f,i=[];try{i=t.feed.entry.sort(function(t,n){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(n.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order})}catch(t){}for(var s,u=null,c=0;(s=i[c])&&(0===c&&(u=s),!(c>=r));c++){for(var p=s.content.$t,x=p.replace("<BR/>","<br />\n"),w="",$=0;$<p.length;$++){var j=p.substr($,1);if("<"!==j)w+=j;else{var D=p.indexOf(">",$);-1!==D&&($=D)}}p=w;s.link[2].href;var C=x,I=s.author[0].name.$t;"Anonymous"===I&&(I=g),I===h&&null!==b&&(I='<img src="'+b+'" class="admin-photo" border="0" /> '+I);void 0!==s.author[0].uri&&(I='<a href="'+s.author[0].uri.$t+'" target="_blank">'+I+"</a>");var M=s.published.$t.substr(0,10),A=M.substr(0,4),O=M.substr(5,2),B=M.substr(8,2),U=0;c%2==1&&(U=1),n+='<li class="guest-book-li guest-book-li-'+U+'"><span class="item-title">'+"<span class='date'>%Y%-%M%-%D%</span> <strong class='name'>%authorname%</strong>:<br /> %comment%".replace("%comment%",C).replace("%Y%",A).replace("%M%",O).replace("%D%",B).replace("%authorname%",I)+"</span></li>"}var T=y,N="",S=null;if(null===a&&null===l&&null!==u){var L=u.link[0].href.split("/");a=L[4],l=L[5];var P=(S=u.link[2].href).indexOf(".com/");S=S.substring(0,P+5)}else S=e();null===T&&(T="https://www.blogger.com/comment.g?blogID="+a+"&postID="+l),N="jQuery.getScript('"+S+"feeds/"+l+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli')",(s=i[c])&&(n+='<li class="guest-book-li readmore"><span class="item-title"><a href="'+T+'#comments" target="guestbook_write">'+m+"</a></span></li>"),n+="</ul>",n+='<div class="guestbook-write"> <a href="'+T+'" class="write" target="guestbook_write">'+v+'</a> <a class="write" onclick="'+N+'">'+k+"</a></div>",o.html(n)},jQuery.ajax({url:s,dataType:"script",cache:!1})}},function(t,n,e){var r=e(27);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".puli-guest-book .admin-photo {\n  float:left;\n  margin-right: 5px;\n  width:20px; \n  height: 20px;\n  display:block;\n}\n\n.puli-guest-book .guest-book-list {\n  border: 3px solid #D2CBBD;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: #5B5743;\n  font-size:90%;\n\n  padding: 0;\n  margin: 0;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li {\n  background-image:none;\n  background-color: white !important;\n  margin: 0;\n  padding: 8px;\n  list-style:none;\n  clear:both;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li:hover {\n  padding-left: 5px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li .date {\n  background-image:none !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n  list-style:none;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n  width: auto !important;\n  height: auto !important;\n\n\n  display: block;\n  float:right;\n  text-align: right;\n  color: #B4AF98;\n  font-size:70%;\n  margin: 0 !important;\n  margin-left: 10px !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore {\n  text-align:center;\n  font-weight: bold;\n  border-top: 1px solid #5B5743;\n  background-color: white;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write {\n  text-align:center;\n  font-weight: bold;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write a.write {\n  color: #5B5743;\n  border: 1px solid #D2CBBD;\n  background-color:white;\n  padding: 5px;\n  margin: 5px;\n  text-decoration:none;\n  font-size:90%;\n  cursor:pointer;\n\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guestbook-write a.write:hover {\n  color: #5B5743;\n  border-color: #5B5743;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-0 {\n  background-color: #F6F3E0 !important;\n}\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-1 {\n  background-color: white !important;\n}\n\n.puli-guest-book .guest-book-list strong.name a {\n  display: inline;\n}",""])},function(t,n){jQuery.puliGuestBook({blogID:"16607461",postID:"113544406852218769",url:"/2005/12/blogger_113544406852218769.html",container:".puliGuestBook",listNumber:20,adminName:"布丁布丁吃布丁",adminPhoto:"//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/",anonymous:"匿名",readMore:"閱讀全部留言",write:"撰寫留言",reload:"重新讀取",addLink:"/2005/12/blogger_113544406852218769.html#comment-editor"})},function(t,n){puliHandlePost=function(){var t=this;return t.title="",t.divID="puliHandlePostDiv",t.loading="Loading...",t.ulID="puliHandlePostUl",t.ulClass="",t.liClass="puliHandlePost-item-title",t.postshow=10,t.titlelen="",t.layout="%Y%-%M%-%D% %authorname%<br />%title%",t.bloggerName="pulipuli",t.tagname="",t.callback,t.compareentry=function(t,n){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(n.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},t.handlePosts=function(n){var e="";""!==t.title&&(e="<h2>"+t.title+"</h2>");for(var r,o=e+'<ul id="'+t.ulID+'">',i=t.postshow,a=t.titlelen,l=t.layout,s=n.feed.entry.sort(compareentry),u=0;(r=s[u])&&!(u>=i);u++){e=r.title.$t;if(""!==a&&e.length>a&&(e=e.substr(0,a)+"..."),e.indexOf(" / ")>0){var c=e.indexOf(" / ");e="<strong>"+e.substr(0,c)+"</strong>"+e.substr(c)}else e="<strong>"+e+"</strong>";var p=r.link[4].href;if(".html"!==p.substr(p.length-5,5))for(var d=r.link,f=0;f<d.length&&".html"!==(p=d[f].href).substr(p.length-5,p.length);f++);var h='<a href="'+p+'">'+e+"</a>",b=r.author[0].name.$t,g=r.published.$t.substr(0,10),m=g.substr(0,4),v=g.substr(5,2),k=g.substr(8,2),y=l.replace("%title%",h).replace("%Y%",m).replace("%M%",v).replace("%D%",k).replace("%authorname%",b);o+='<li class="'+t.liClass+'">'+y+"</li>"}o+="</ul>",jQuery("#"+t.divID).html(o),"function"==typeof t.callback&&t.callback()},t.load=function(n){jQuery("#"+n).html('<div id="'+t.divID+'"><h2>'+t.loading+"</h2></div>");var e=t.tagname;return"/-/"!==e.substr(0,3)&&""!==e&&(e="/-/"+e),jQuery.getJSON("/feeds/posts/summary"+e+"/?alt=json-in-script&callback=?",function(n){t.handlePosts(n)}),t},t}},function(t,n){puliHandleComments=function(){var t=this;return t.title="",t.divID="puliHandleCommentsDiv",t.loading="Loading...",t.ulID="puliHandleCommentsUl",t.ulClass="",t.liClass="puliHandleCom-item-title",t.postshow=10,t.titlelen=20,t.layout="%Y%-%M%-%D% %authorname%<br />%title%",t.bloggerName="pulipuli",t.compareentry=function(t,n){return order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(n.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},t.handleComments=function(n){var e="";""!==t.title&&(e="<h2>"+t.title+"</h2>");for(var r,o=e+'<ul id="'+t.ulID+'">',i=t.postshow,a=t.titlelen,l=t.layout,s=n.feed.entry.sort(compareentry),u=0;(r=s[u])&&!(u>=i);u++){e=r.title.$t;""!==a&&e.length>a&&(e=e.substr(0,a)+"...");var c="#";if(void 0!==r.link[2]&&(c=r.link[2].href),e=e.replace("<","&lt;").replace(">","&gt;"),""!==$.trim(e)){var p='<a href="'+c+'">'+e+"</a>",d=r.author[0].name.$t,f=r.published.$t.substr(0,10),h=f.substr(0,4),b=f.substr(5,2),g=f.substr(8,2),m=l.replace("%comment%",p).replace("%Y%",h).replace("%M%",b).replace("%D%",g).replace("%authorname%",d);o+='<li class="'+t.liClass+'">'+m+"</li>"}else i++}o+="</ul>",jQuery("#"+t.divID).html(o)},t.load=function(n){return jQuery("#"+n).html('<div id="'+t.divID+'"><h2>'+t.loading+"</h2></div>"),jQuery.getJSON("/feeds/comments/full?alt=json-in-script&callback=?",function(n){t.handleComments(n)}),t},t}},function(t,n){var e,r=function(){pHC=puliHandleComments(),pHC.bloggerName="pulipuli",pHC.postshow=10,pHC.titlelen="20",pHC.layout=decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25"),pHC.load("puliCommentsNode")};(e=puliHandlePost()).bloggerName="pulipuli",e.postshow=10,e.titlelen="",e.layout=decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)"),e.tagname="",e.callback=r,e.load("puliHandlePostNode")},function(t,n,e){var r=e(33);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".search-bar {\n  -moz-transition: .3s linear;\n  -webkit-transition: .3s ease-out;\n  transition: .3s linear;\n  float: right;\n  right: 0;\n  cursor: pointer;\n  background-image: url();\n  background-repeat: no-repeat;\n  padding: 0px 20px 23px;\n  background-size: 100px 100px;\n  top: 0;\n  z-index: 99999;\n  margin-top: -5px;\n\n  visibility: hidden;\n}\n\n.search-bar:hover {\n  -moz-transition: .01s linear;\n  -webkit-transition: .01s ease-out;\n  transition: .01s linear;\n  /*opacity: 1; */\n  background-image:none;\n}\n\n.nav-search {\n  width: auto;\n  height: 30px;\n  position: relative;\n  left: 0;\n  float: left;\n  line-height: 10px;\n  color: #fff !important;\n}\n\n.nav-search label {\n  display: none;\n}\n\n.nav-search input {\n  float: left;\n  /*width: 0;*/\n  background: none;\n  height: 30px;\n  line-height: 20px;\n  margin: 22px 0 0;\n  padding: 0 10px 0 0;\n  font-size: 15px;\n  /*color: #fff !important;*/\n  outline: 0;\n  border-radius: 0;\n  border: 0;\n  /*opacity: 1;*/\n  /*opacity: 1;*/\n  /*-webkit-transition: all .8s ease-in-out;\n  -moz-transition: all .8s ease-in-out;\n  -o-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n  -webkit-appearance: none;*/\n\n  width: 160px;\n  margin-left: 33px;\n  background: none;\n  border-bottom: 1px solid #f1f1f1;\n  opacity: 1;\n}\n\n/*\n.search-bar:hover .nav-search input {\n    width: 160px;\n    margin-left: 33px;\n    background: none;\n    border-bottom: 1px solid #f1f1f1;\n    opacity: 1;\n}\n*/\n/*\n.nav-search input::-webkit-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input::-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-ms-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input:focus {\n    color: #fff;\n}\n*/\n\n.nav-search .srch_btn {\n  height: 42px;\n  width: 23px;\n  margin-top: 0;\n  background: url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px center no-repeat;\n  text-indent: 9999px;\n  position: relative;\n}\n\n.search-bar.visible {\n  visibility: visible\n}",""])},function(t,n){var e=()=>{$("#s.search_input").blur(function(){""===this.value.trim()&&(this.value=this.defaultValue)}).focus(function(){this.value===this.defaultValue&&(this.value="")})};!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//cse.google.com/cse.js?cx=017270649262638447003:o6vaq9on3vs";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),$("#gsce_submit").click(()=>{$("input.gsc-search-button").click()}),e(),$("#searchform").submit(function(){return r(this)});var o=setInterval(()=>{$("#gsc-i-id1").length>0&&($("#gsc-i-id1").attr("placeholder","Search"),$(".navbar-inner .search-bar").addClass("visible"),clearInterval(o))},500)}(),$(function(){$("#srch_btn").click(function(){$("#masthead input.gsc-search-button").click()})});var r=function(t){var n=t.q.value;return ga("send","event","search",n,1),$("#masthead input.gsc-input").val(n).attr("placeholder",""),$("#masthead input.gsc-search-button").click(),!1}}]);