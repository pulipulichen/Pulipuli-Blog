!function(s){function t(t){for(var e,r,n=t[0],o=t[1],i=t[2],a=0,l=[];a<n.length;a++)r=n[a],c[r]&&l.push(c[r][0]),c[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(p&&p(t);l.length;)l.shift()();return d.push.apply(d,i||[]),u()}function u(){for(var t,e=0;e<d.length;e++){for(var r=d[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==c[i]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=r[0]))}return t}var r={},c={2:0},d=[];function a(t){var e;return(r[t]||(e=r[t]={i:t,l:!1,exports:{}},s[t].call(e.exports,e,e.exports,a),e.l=!0,e)).exports}a.m=s,a.c=r,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var e=(n=window.webpackJsonp=window.webpackJsonp||[]).push.bind(n);n.push=t;for(var n=n.slice(),o=0;o<n.length;o++)t(n[o]);var p=e;d.push([85,0]),u()}({188:function(t,e,r){var n=r(189),o=("string"==typeof n&&(n=[[t.i,n,""]]),{hmr:!0});o.transform=void 0,o.insertInto=void 0,r(2)(n,o);n.locals&&(t.exports=n.locals)},189:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,".sidebar-list-item{max-height:360px;overflow-y:auto}.sidebar-list-item .admin-photo{float:left;margin-right:5px;width:20px;height:20px;display:block}.sidebar-list-item strong.name a{display:inline}.sidebar-list-item ul{font-size:90%;padding:0;margin:0;-moz-border-radius:3px;-webkit-border-radius:3px}.sidebar-list-item ul li{background-image:none;background-color:#fff!important;margin:0;padding:18px;list-style:none;clear:both;text-indent:0!important}.sidebar-list-item ul li:hover{padding-left:15px}.sidebar-list-item ul li .readmore{text-align:center;font-weight:700;padding:10px 0;background-color:#d6d7d6!important}.sidebar-list-item ul li .readmore:hover{padding-left:-9px!important;border-left-width:0!important}.sidebar-list-item ul li .date{background-image:none!important;background-color:transparent!important;padding:0!important;list-style:none;text-indent:0!important;width:auto!important;height:auto!important;display:block;float:right;text-align:right;font-size:70%;margin:0 0 0 10px!important}.sidebar-list-item .bottom-block{text-align:center;font-weight:700;padding:10px 0}.sidebar-list-item .bottom-block a.link{color:#5b5743;border:1px solid #d2cbbd;background-color:#fff;padding:5px;margin:5px;text-decoration:none;font-size:90%;cursor:pointer;-moz-border-radius:3px;-webkit-border-radius:3px}.sidebar-list-item .bottom-block a.link:hover{color:#5b5743;border-color:#5b5743}",""])},85:function(t,e,r){"use strict";r.r(e);r(86),r(87),r(89),r(188),r(90),r(91),r(92),r(93),r(94),r(96),r(97);e=r(8);e.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",e.a.defaults.headers.common["Access-Control-Allow-Methods"]="GET, POST, PUT, DELETE",e.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type",window.axios=e.a,window.PULI_BLOG_INITED=!0},86:function(t,e){jQuery.puliGuestBook=function(r){function t(t,e){return void 0===r[t]?e:r[t]}function k(){var t=location.href,e=t.indexOf(".blogspot."),e=t.indexOf("/",e);return t=t.substring(0,e+1)}var e=t("container","#puliGuestBook"),O=jQuery(e),C=(0===O.length&&(n=e.substr(1),$("body").append('<div id="'+n+'"></div>'),O=jQuery(e)),O.addClass("puli-guest-book"),t("blogID",null)),I=t("postID",null),n=null;if(null===C&&null===I){if(null===(n=t("url",null)))return void window.alert("puliGuestBook沒有設定URL");"http://"!==n.substring(0,7)&&(e=(o=location.href).indexOf(".blogspot."),e=o.indexOf("/",e),n=(o=o.substring(0,e+1))+"feeds/"+n+"/comments/full?alt=json-in-script&callback=?");var o,e="default";n.substring(n.length-e.length,n.length)===e&&(n=n.substring(0,n.length-e.length),n+="full?alt=json-in-script&callback=?")}else n=(o=k())+"feeds/"+I+"/comments/full?alt=json-in-script&callback=?";var L=t("listID","Feedpulipuli_guestbookDisplay"),S=t("listNumber",20),D=t("adminName","布丁布丁吃布丁"),_=t("adminPhoto",null),j=t("anonymous","匿名"),P=t("readMore","閱讀全部的留言"),T=t("write","撰寫留言"),E=t("reload","重新讀取"),A=t("addLink",null),U=t("disableBottomButtons",!1);lscacheHelper.getJSON(n,function e(t){O.html("");var r='<ul id="'+L+'" class="guest-book-list">',n=S,o=[];try{o=t.feed.entry.sort(function(t,e){return 0-(order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")))})}catch(t){}for(var i,a=null,l=0;(i=o[l])&&(0===l&&(a=i),!(n<=l));l++){for(var s=(f=i.content.$t).replace("<BR/>","<br />\n"),u="",c=0;c<f.length;c++){var d,p=f.substr(c,1);"<"===p?-1!==(d=f.indexOf(">",c))&&(c=d):u+=p}var f=u,h=(i.link[2]&&i.link[2].href,(h=i.id.$t).slice(h.lastIndexOf(".post-")+6,h.length)),g=A,h=(g=(g=g.indexOf("#")?g.slice(0,g.indexOf("#")):g)+"#c"+h,i.author[0].name.$t),m=((h="Anonymous"===h?j:h)===D&&null!==_&&(h='<img src="'+_+'" class="admin-photo" border="0" /> '+h),void 0!==i.author[0].uri&&(h='<a href="'+g+'" target="_blank">'+h+"</a>"),i.published.$t.substr(0,10)),b=m.substr(0,4),v=m.substr(5,2),m=m.substr(8,2);r+='<li class="guest-book-li guest-book-li-'+(l%2==1?1:0)+'"><span class="item-title">'+'<a class="date" href="%COMMENT_LINK%" target="_blank">%M%-%D% <i aria-hidden="true" class="fa fa-link"></i></a>\n      <strong class="name">%authorname%</strong>:<br />\n      %comment%'.replace("%comment%",s).replace("%Y%",b).replace("%M%",v).replace("%D%",m).replace("%authorname%",h).replace("%COMMENT_LINK%",g)+"</span></li>"}var y,t=A,x="",w=null;w=null===C&&null===I&&null!==a?(y=a.link[0].href.split("/"),C=y[4],I=y[5],y=(w=a.link[2].href).indexOf(".com/"),w.substring(0,y+5)):k();null===t&&(t="https://www.blogger.com/comment.g?blogID="+C+"&postID="+I),x="jQuery.getScript('"+w+"feeds/"+I+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli')",$("#sidebar .guestbook a.icon.reload").click(function(){var t=w+"feeds/"+I+"/comments/full?alt=json-in-script&callback=?";lscacheHelper.getJSON(t,e)}),(i=o[l])&&(r+='<li class="guest-book-li readmore"><span class="item-title"><a href="'+t+'#comments" target="guestbook_write">'+P+"</a></span></li>"),r+="</ul>",!1===U&&(r+='<div class="guestbook-write"> <a href="'+t+'" class="write" target="guestbook_write">'+T+'</a> <a class="write" onclick="'+x+'">'+E+"</a></div>"),O.html(r)})}},87:function(t,e,r){var n=r(88),o=("string"==typeof n&&(n=[[t.i,n,""]]),{hmr:!0});o.transform=void 0,o.insertInto=void 0,r(2)(n,o);n.locals&&(t.exports=n.locals)},88:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,".puli-guest-book .admin-photo{float:left;margin-right:5px;width:20px;height:20px;display:block}.puli-guest-book .guest-book-list{font-size:90%;padding:0;margin:0;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guest-book-list .guest-book-li{background-image:none;background-color:#fff!important;margin:0;padding:18px;list-style:none;clear:both;text-indent:0!important}.puli-guest-book .guest-book-list .guest-book-li:hover{padding-left:15px}.puli-guest-book .guest-book-list .guest-book-li.readmore:hover{padding-left:-9px!important;border-left-width:0!important}.puli-guest-book .guest-book-list .guest-book-li .date{background-image:none!important;background-color:transparent!important;padding:0!important;list-style:none;text-indent:0!important;width:auto!important;height:auto!important;display:block;float:right;text-align:right;font-size:70%;margin:0 0 0 10px!important}.puli-guest-book .guest-book-list .guest-book-li.readmore{text-align:center;font-weight:700;padding:10px 0;background-color:#d6d7d6!important}.puli-guest-book .guestbook-write{text-align:center;font-weight:700;padding:10px 0}.puli-guest-book .guestbook-write a.write{color:#5b5743;border:1px solid #d2cbbd;background-color:#fff;padding:5px;margin:5px;text-decoration:none;font-size:90%;cursor:pointer;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guestbook-write a.write:hover{color:#5b5743;border-color:#5b5743}.puli-guest-book .guest-book-list strong.name a{display:inline}",""])},89:function(t,e){jQuery.puliGuestBook({blogID:"16607461",postID:"8588880036067257582",url:"/p/2024-guestbook-2024.html#comment-editor",container:".puliGuestBook",listNumber:10,adminName:"Pulipuli Chen",adminPhoto:"//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/",anonymous:"匿名",readMore:"閱讀全部留言",write:"撰寫留言",reload:"重新讀取",addLink:"/p/2024-guestbook-2024.html#comment-editor",disableBottomButtons:!0})},90:function(t,e){function r(){var d=$("#random_posts"),a=(d.empty(),5),p=110,f=!0,h="留言",g="",l=[],s=0,l=new Array(a),u=function(){return 1+Math.round(Math.random()*(s-1))};lscacheHelper.getJSON("/feeds/posts/default?alt=json-in-script&max-results=0&callback=?",function(t){if(s=t.feed.openSearch$totalResults.$t,null===(l=lscache.get("randomPostIds"))){l=new Array(a);for(var e=0;e<a;e++){for(var r=!1,n=u(),o=0;o<l.length;o++)if(l[o]===n){r=!0;break}r?e--:l[e]=n}lscache.set("randomPostIds",l,5)}(function t(e){var r;e<l.length&&(r="/feeds/posts/default?alt=json-in-script&start-index="+l[e]+"&max-results=1&callback=?",lscacheHelper.getJSON(r,function(t){var e,r=t.feed.entry[0],n=t=40<(t=(r=void 0===r?t.feed.entry[i+""]:r).title.$t).length?t.substr(0,40)+"...":t;0<t.indexOf(" / ")?(e=t.indexOf(" / "),n=(t="<strong>"+t.substr(0,e)+"</strong>"+t.substr(e)).substr(0,e)):t="<strong>"+t+"</strong>",e=(e=(e="content"in r?r.content.$t:"summary"in r?r.summary.$t:"").replace(/<[^>]*>/g,"")).length<p?e:(c=(e=e.substring(0,p)).lastIndexOf(" "),e.substring(0,c)+"&#133;");for(var o=0;o<r.link.length;o++){var a,l,s,u="thr$total"in r&&0<r.thr$total.$t?r.thr$total.$t+" "+h:g;"alternate"===r.link[o].rel&&(a=r.link[o].href,l=r.published.$t,s="media$thumbnail"in r?r.media$thumbnail.url:"//3.bp.blogspot.com/-5SoVe1K6JSk/Utl0OOmucAI/AAAAAAAAF6E/hQghgD_EJdQ/s1600/no_thumb.png")}var c="",c=(c=(c+="<dd>")+'<a href="'+a+'" rel="nofollow" title="'+e+'">')+'<img alt="'+n+'" src="'+(s=s.startsWith("http://")?s.slice(s.indexOf("//")):s)+'"/>';c+=t,!0===f&&(c=c+'<span><div  class="random-info">('+l.substring(0,4)+"-"+l.substring(8,10)+"-"+l.substring(5,7)+") "+u+"</span>"),d.append(c=c+'<div style="clear:both"></div>'+"</a></dd>")}),t(++e))})(0)},43200)}$(function(){r(),$(".widget.HTML.random > a.button").click(r)})},91:function(t,e){puliHandlePost=function(){var m=this;return m.title="",m.divID="puliHandlePostDiv",m.loading="Loading...",m.ulID="puliHandlePostUl",m.ulClass="",m.liClass="puliHandlePost-item-title",m.postshow=10,m.titlelen="",m.layout="%Y%-%M%-%D% %authorname%<br />%title%",m.bloggerName="pulipuli",m.tagname="",m.callback,m.compareentry=function(t,e){return 0-(order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")))},m.handlePosts=function(t){for(var e="",r=(e=""!==m.title?"<h2>"+m.title+"</h2>":e)+'<ul id="'+m.ulID+'">',n=m.postshow,o=m.titlelen,i=m.layout,a=t.feed.entry.sort(compareentry),l=0;(f=a[l])&&!(n<=l);l++){var e=f.title.$t,s=(e=0<(e=""!==o&&e.length>o?e.substr(0,o)+"...":e).indexOf(" / ")?(d=e.indexOf(" / "),"<strong>"+e.substr(0,d)+"</strong>"+e.substr(d)):"<strong>"+e+"</strong>",f.link[4].href);if(".html"!==s.substr(s.length-5,5))for(var u=f.link,c=0;c<u.length&&".html"!==(s=u[c].href).substr(s.length-5,s.length);c++);var d='<a href="'+s+'">'+e+"</a>",p=f.author[0].name.$t,f=f.published.$t.substr(0,10),h=f.substr(0,4),g=f.substr(5,2),f=f.substr(8,2),h=i.replace("%title%",d).replace("%Y%",h).replace("%M%",g).replace("%D%",f).replace("%authorname%",p);r+='<li class="'+m.liClass+'">'+h+"</li>"}r+="</ul>",jQuery("#"+m.divID).html(r),"function"==typeof m.callback&&m.callback()},m.load=function(t){jQuery("#"+t).html('<div id="'+m.divID+'"><h2>'+m.loading+"</h2></div>");t=m.tagname,t="/feeds/posts/summary"+(t="/-/"!==t.substr(0,3)&&""!==t?"/-/"+t:t)+"/?alt=json-in-script&callback=?";return lscacheHelper.getJSON(t,function(t){m.handlePosts(t)}),m},m}},92:function(t,e){puliHandleComments=function(){var f=this;return f.title="",f.divID="puliHandleCommentsDiv",f.loading="Loading...",f.ulID="puliHandleCommentsUl",f.ulClass="",f.liClass="puliHandleCom-item-title",f.postshow=10,f.titlelen=20,f.layout='<a class="date">%Y%-%M%-%D% <i aria-hidden="true" class="fa fa-link"></i></a><strong class="name">%authorname%</strong>:<br />%title%',console.log(f.layout),f.bloggerName="pulipuli",f.compareentry=function(t,e){return 0-(order=Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")))},f.handleComments=function(t){for(var e="",r=(e=""!==f.title?"<h2>"+f.title+"</h2>":e)+'<ul id="'+f.ulID+'">',n=f.postshow,o=f.titlelen,i=f.layout,a=t.feed.entry.sort(compareentry),l=0;(d=a[l])&&!(n<=l);l++){var s,u,c,d,e=d.title.$t,p=(""!==o&&e.length>o&&(e=e.substr(0,o)+"..."),"#");void 0!==d.link[2]&&(p=d.link[2].href),e=e.replace("<","&lt;").replace(">","&gt;"),""===$.trim(e)?n++:(p='<a href="'+p+'">'+e+"</a>",s=d.author[0].name.$t,u=(d=d.published.$t.substr(0,10)).substr(0,4),c=d.substr(5,2),d=d.substr(8,2),p=i.replace("%comment%",p).replace("%Y%",u).replace("%M%",c).replace("%D%",d).replace("%authorname%",s),r+='<li class="'+f.liClass+'">'+p+"</li>")}r+="</ul>",jQuery("#"+f.divID).html(r)},f.load=function(t){jQuery("#"+t).html('<div id="'+f.divID+'"><h2>'+f.loading+"</h2></div>");return lscacheHelper.getJSON("/feeds/comments/full?alt=json-in-script&callback=?",function(t){f.handleComments(t)}),f},f}},93:function(t,e){function r(){(pHC=puliHandleComments()).bloggerName="pulipuli",pHC.postshow=10,pHC.titlelen="20",pHC.layout=decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25"),pHC.load("puliCommentsNode")}var n;(n=puliHandlePost()).bloggerName="pulipuli",n.postshow=10,n.titlelen="",n.layout=decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)"),n.tagname="",n.callback=r,n.load("puliHandlePostNode")},94:function(t,e,r){var n=r(95),o=("string"==typeof n&&(n=[[t.i,n,""]]),{hmr:!0});o.transform=void 0,o.insertInto=void 0,r(2)(n,o);n.locals&&(t.exports=n.locals)},95:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,".cookie-banner{position:fixed;bottom:0;left:0;background-color:rgba(44,44,44,.7);color:#fff;width:100%}.cookie-banner .cookie-banner-wrapper{width:100%;max-width:1170px;margin-left:auto;margin-right:auto;padding-left:50px}.cookie-banner .cookie-banner-wrapper>.button{float:right;cursor:pointer;display:block;border-radius:3px;font-size:13px;padding:3px 10px;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin:.9rem 0 .9rem 1rem}.cookie-banner .cookie-banner-wrapper>.description{margin:.5rem 1rem .5rem 0}.cookie-banner .cookie-banner-wrapper>.description .header{font-size:1rem;line-height:1.5rem;font-weight:700;text-transform:uppercase}.cookie-banner .cookie-banner-wrapper>.description .content{font-size:.7rem;line-height:1rem;font-weight:400}.cookie-banner .cookie-banner-wrapper>.description .content a{color:#ff0;font-weight:700}@media (max-width:1200px){.cookie-banner>.cookie-banner-wrapper{width:960px;max-width:inherit;padding-left:70px}}@media (max-width:979px){.cookie-banner>.cookie-banner-wrapper{width:calc(100% - 70px);max-width:inherit;padding-left:30px}}@media (max-width:480px){.cookie-banner{bottom:40px}.cookie-banner>.cookie-banner-wrapper{width:calc(100% - 40px);padding-left:20px;margin-left:0}}",""])},96:function(t,e){$(function(){var t,e="cookiePolicyOK";null===localStorage.getItem(e)&&((t=$('<div class="cookie-banner">\n  <div class="cookie-banner-wrapper">\n  <button type="button" class="button">\n    <i aria-hidden="true" class="fa fa-check"></i>\n    OK\n  </button>\n  <div class="description">\n    <div class="header">We use cookies</div>\n    <div class="content">\n      We use cookie to offer you a better experience and analyze site traffic. By using this blog you agree to our \n      <a href="/p/cookie-policy.html" target="cookie-policy">Cookie Policy</a>.\n    </div>\n  </div>\n  </div>\n</div>')).find("button").click(function(){localStorage.setItem(e,1),t.remove()}),$("body").append(t))})},97:function(t,e){function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */C=function(){return a};var a={},t=Object.prototype,s=t.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o,i,a,l,e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),n=new w(n||[]);return u(e,"_invoke",{value:(o=t,i=r,a=n,l="suspendedStart",function(t,e){if("executing"===l)throw new Error("Generator is already running");if("completed"===l){if("throw"===t)throw e;return $()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;n=c(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}(r,a);if(r){if(r===d)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===l)throw l="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);l="executing";r=c(o,i,a);if("normal"===r.type){if(l=a.done?"completed":"suspendedYield",r.arg===d)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(l="completed",a.method="throw",a.arg=r.arg)}})}),e}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=l;var d={};function p(){}function f(){}function h(){}var e={},g=(i(e,n,function(){return this}),Object.getPrototypeOf),g=g&&g(g(k([]))),m=(g&&g!==t&&s.call(g,n)&&(e=g),h.prototype=p.prototype=Object.create(e));function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function v(a,l){var e;u(this,"_invoke",{value:function(r,n){function t(){return new l(function(t,e){!function e(t,r,n,o){var i,t=c(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==O(r)&&s.call(r,"__await")?l.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):l.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function y(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(y,this),this.reset(!0)}function k(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:$}}function $(){return{value:void 0,done:!0}}return u(m,"constructor",{value:f.prototype=h,configurable:!0}),u(h,"constructor",{value:f,configurable:!0}),f.displayName=i(h,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},a.awrap=function(t){return{__await:t}},b(v.prototype),i(v.prototype,r,function(){return this}),a.AsyncIterator=v,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new v(l(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(m),i(m,o,"Generator"),i(m,n,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=k,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),l=s.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},a}function s(t,e,r,n,o,i,a){try{var l=t[i](a),s=l.value}catch(t){return void r(t)}l.done?e(s):Promise.resolve(s).then(n,o)}function a(l){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=l.apply(t,a);function o(t){s(n,e,r,o,i,"next",t)}function i(t){s(n,e,r,o,i,"throw",t)}o(void 0)})}}BLOG_STATISTIC={api:"https://script.google.com/macros/s/AKfycbxt5pC6irHRoGwxt1ur4uIRdmYR4Si0wG_cXCiRr4sTPhh4--7ZyBvYjpnY_fD_yEmf/exec",log:function(t,e,r,n){var o="https://blog.pulipuli.info"+(r=this.filterURL(r)),i=this.api+"?type="+e+"&url="+encodeURIComponent(r);setTimeout(a(C().mark(function t(){return C().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i,{mode:"no-cors"});case 2:case"end":return t.stop()}},t)})),0),"share_web_share_api"===e&&this.openWebShareAPI(o,n),gtag("event","share",{target:e,url:o}),this.addCount(t)},logAskMe:function(t){t=this.filterURL(t),gtag("event","ask_me",{url:"https://blog.pulipuli.info"+t})},addCount:function(t){var e,t=$(t).parents(".share-story:first");return 0!==t.length&&0!==(t=t.find(".share-count[post-url]:first")).length&&(""===(e=t.text().trim())&&(e=0),e=Number(e)+1,void this.setShareCount(t,e))},openWebShareAPI:function(t,e){navigator.share?navigator.share({title:e,text:e,url:t}).then(function(){console.log("Content shared successfully")}).catch(function(t){console.error("Error sharing content:",t)}):(console.log("Web Share API is not supported"),window.open("https://www.addtoany.com/share#url=".concat(encodeURIComponent(t)),"_blank"))},filterURL:function(e){try{return(e=new URL(e)).pathname}catch(t){return console.error("Error url: "+e),e}},getCount:function(){for(var e=this,r=$("#content .share-count[post-url]"),n=$("#content .view-count[post-url]"),t=[],o=0;o<r.length;o++){var i=r.eq(o).attr("post-url"),i=this.filterURL(i);-1===t.indexOf(i)&&t.push(i)}var a={};a.postURLList=t,1!==$('script[src$="/item-footer.js"]').length&&1!==$('script[src$="/page-as-item.js"]').length||(a.view=this.filterURL(location.href),a.uuid=this.generateDeviceUUID()),fetch(this.api,{redirect:"follow",method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"text/plain;charset=utf-8"}}).then(function(t){return t.json()}).then(function(t){if(t.status&&"error"===t.status)return console.error(t),!1;e.setShareCounts(r,t),e.setViewCounts(n,t)}).catch(function(t){console.error(t)})},setShareCounts:function(t,e){for(var r=0;r<t.length;r++){var n=t.eq(r),o=n.attr("post-url");e[o=this.filterURL(o)]&&(o=e[o][1])&&0!==o&&this.setShareCount(n,o)}},setShareCount:function(t,e){t.text(e),t.addClass("show"),t.parents("li.web-share-api:first").addClass("show-share-count")},setViewCounts:function(t,e){for(var r=0;r<t.length;r++){var n,o=t.eq(r),i=o.attr("post-url");e[i=this.filterURL(i)]&&(n=e[i][0],i=e[i][2],n)&&0!==n&&this.setViewCount(o,n,i)}},setViewCount:function(t,e,r){t.text(e),t.addClass("show");e=t.parents("li.view-count:first");e.addClass("show-view-count"),r&&e.find(".view-time").addClass("show-view-time").find(".hour").text(r)},generateDeviceUUID:function(){var t=localStorage.getItem("deviceUUID");return t||(t=this.generateRandomUUID(),localStorage.setItem("deviceUUID",t)),t},generateRandomUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}},$(function(){BLOG_STATISTIC.getCount()})}});