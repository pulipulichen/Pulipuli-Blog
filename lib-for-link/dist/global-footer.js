!function(s){function e(e){for(var t,o,r=e[0],n=e[1],i=e[2],l=0,a=[];l<r.length;l++)o=r[l],c[o]&&a.push(c[o][0]),c[o]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);for(p&&p(e);a.length;)a.shift()();return d.push.apply(d,i||[]),u()}function u(){for(var e,t=0;t<d.length;t++){for(var o=d[t],r=!0,n=1;n<o.length;n++){var i=o[n];0!==c[i]&&(r=!1)}r&&(d.splice(t--,1),e=l(l.s=o[0]))}return e}var o={},c={2:0},d=[];function l(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=s,l.c=o,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(o,r,function(e){return t[e]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var p=r;d.push([93,0]),u()}({100:function(e,t){puliHandleComments=function(){var h=this;return h.title="",h.divID="puliHandleCommentsDiv",h.loading="Loading...",h.ulID="puliHandleCommentsUl",h.ulClass="",h.liClass="puliHandleCom-item-title",h.postshow=10,h.titlelen=20,h.layout="%Y%-%M%-%D% %authorname%<br />%title%",h.bloggerName="pulipuli",h.compareentry=function(e,t){return order=Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},h.handleComments=function(e){var t="";""!==h.title&&(t="<h2>"+h.title+"</h2>");for(var o,r=t+'<ul id="'+h.ulID+'">',n=h.postshow,i=h.titlelen,l=h.layout,a=e.feed.entry.sort(compareentry),s=0;(o=a[s])&&!(n<=s);s++){t=o.title.$t;""!==i&&t.length>i&&(t=t.substr(0,i)+"...");var u="#";if(void 0!==o.link[2]&&(u=o.link[2].href),t=t.replace("<","&lt;").replace(">","&gt;"),""!==$.trim(t)){var c='<a href="'+u+'">'+t+"</a>",d=o.author[0].name.$t,p=o.published.$t.substr(0,10),b=p.substr(0,4),f=p.substr(5,2),g=p.substr(8,2),m=l.replace("%comment%",c).replace("%Y%",b).replace("%M%",f).replace("%D%",g).replace("%authorname%",d);r+='<li class="'+h.liClass+'">'+m+"</li>"}else n++}r+="</ul>",jQuery("#"+h.divID).html(r)},h.load=function(e){jQuery("#"+e).html('<div id="'+h.divID+'"><h2>'+h.loading+"</h2></div>");return lscacheHelper.getJSON("/feeds/comments/full?alt=json-in-script&callback=?",function(e){h.handleComments(e)}),h},h}},101:function(e,t){var o,r=function(){pHC=puliHandleComments(),pHC.bloggerName="pulipuli",pHC.postshow=10,pHC.titlelen="20",pHC.layout=decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25"),pHC.load("puliCommentsNode")};(o=puliHandlePost()).bloggerName="pulipuli",o.postshow=10,o.titlelen="",o.layout=decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)"),o.tagname="",o.callback=r,o.load("puliHandlePostNode")},102:function(e,t,o){var r=o(103);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(r,n);r.locals&&(e.exports=r.locals)},103:function(e,t,o){(e.exports=o(0)(!1)).push([e.i,".cookie-banner{position:fixed;bottom:0;left:0;background-color:rgba(44,44,44,.7);color:#fff;width:100%}.cookie-banner .cookie-banner-wrapper{width:100%;max-width:1170px;margin-left:auto;margin-right:auto;padding-left:50px}.cookie-banner .cookie-banner-wrapper>.button{float:right;cursor:pointer;display:block;border-radius:3px;font-size:13px;padding:3px 10px;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin:.9rem 0 .9rem 1rem}.cookie-banner .cookie-banner-wrapper>.description{margin:.5rem 1rem .5rem 0}.cookie-banner .cookie-banner-wrapper>.description .header{font-size:1rem;line-height:1.5rem;font-weight:700;text-transform:uppercase}.cookie-banner .cookie-banner-wrapper>.description .content{font-size:.7rem;line-height:1rem;font-weight:400}.cookie-banner .cookie-banner-wrapper>.description .content a{color:#ff0;font-weight:700}@media (max-width:1200px){.cookie-banner>.cookie-banner-wrapper{width:960px;max-width:inherit;padding-left:70px}}@media (max-width:979px){.cookie-banner>.cookie-banner-wrapper{width:calc(100% - 70px);max-width:inherit;padding-left:30px}}@media (max-width:480px){.cookie-banner{bottom:40px}.cookie-banner>.cookie-banner-wrapper{width:calc(100% - 40px);padding-left:20px;margin-left:0}}",""])},104:function(e,t){$(function(){var e="cookiePolicyOK";if(null===localStorage.getItem(e)){var t=$('<div class="cookie-banner">\n  <div class="cookie-banner-wrapper">\n  <button type="button" class="button">\n    <i aria-hidden="true" class="fa fa-check"></i>\n    OK\n  </button>\n  <div class="description">\n    <div class="header">We use cookies</div>\n    <div class="content">\n      We use cookie to offer you a better experience and analyze site traffic. By using this blog you agree to our \n      <a href="/p/cookie-policy.html" target="cookie-policy">Cookie Policy</a>.\n    </div>\n  </div>\n  </div>\n</div>');t.find("button").click(function(){localStorage.setItem(e,1),t.remove()}),$("body").append(t)}})},93:function(e,t,o){o(94),o(95),o(97),o(98),o(99),o(100),o(101),o(102),o(104)},94:function(e,t){jQuery.puliGuestBook=function(o){var e=function(e,t){return void 0===o[e]?t:o[e]},j=function(){var e=location.href,t=e.indexOf(".blogspot."),o=e.indexOf("/",t);return e=e.substring(0,o+1)},t=e("container","#puliGuestBook"),H=jQuery(t);if(0===H.length){var r=t.substr(1);document.write('<div id="'+r+'"></div>'),H=jQuery(t)}H.addClass("puli-guest-book");var P=e("blogID",null),N=e("postID",null),n=null;if(null===P&&null===N){if(null===(n=e("url",null)))return void window.alert("puliGuestBook沒有設定URL");if("http://"!==n.substring(0,7)){var i=(s=location.href).indexOf(".blogspot."),l=s.indexOf("/",i);n=(s=s.substring(0,l+1))+"feeds/"+n+"/comments/full?alt=json-in-script&callback=?"}var a="default";n.substring(n.length-a.length,n.length)===a&&(n=n.substring(0,n.length-a.length),n+="full?alt=json-in-script&callback=?")}else{var s;n=(s=j())+"feeds/"+N+"/comments/full?alt=json-in-script&callback=?"}var A=e("listID","Feedpulipuli_guestbookDisplay"),S=e("listNumber",20),_=e("adminName","布丁布丁吃布丁"),T=e("adminPhoto",null),B=e("anonymous","匿名"),G=e("readMore","閱讀全部的留言"),Q=e("write","撰寫留言"),z=e("reload","重新讀取"),J=e("addLink",null),L=e("disableBottomButtons",!1);lscacheHelper.getJSON(n,function t(e){H.html("");var o='<ul id="'+A+'" class="guest-book-list">',r=S,n=[];try{n=e.feed.entry.sort(function(e,t){return order=Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order})}catch(e){}for(var i,l=null,a=0;(i=n[a])&&(0===a&&(l=i),!(r<=a));a++){for(var s=i.content.$t,u=s.replace("<BR/>","<br />\n"),c="",d=0;d<s.length;d++){var p=s.substr(d,1);if("<"!==p)c+=p;else{var b=s.indexOf(">",d);-1!==b&&(d=b)}}s=c,i.link[2].href;var f=u,g=i.id.$t;g=g.slice(g.lastIndexOf(".post-")+6,g.length);var m=J;m.indexOf("#")&&(m=m.slice(0,m.indexOf("#"))),m=m+"#c"+g;var h=i.author[0].name.$t;"Anonymous"===h&&(h=B),h===_&&null!==T&&(h='<img src="'+T+'" class="admin-photo" border="0" /> '+h),void 0!==i.author[0].uri&&(h='<a href="'+m+'" target="_blank">'+h+"</a>");var k=i.published.$t.substr(0,10),v=k.substr(0,4),x=k.substr(5,2),y=k.substr(8,2),w=0;a%2==1&&(w=1),o+='<li class="guest-book-li guest-book-li-'+w+'"><span class="item-title">'+'<a class="date" href="%COMMENT_LINK%" target="_blank">%Y%-%M%-%D% (查看留言)</a>\n      <strong class="name">%authorname%</strong>:<br />\n      %comment%'.replace("%comment%",f).replace("%Y%",v).replace("%M%",x).replace("%D%",y).replace("%authorname%",h).replace("%COMMENT_LINK%",m)+"</span></li>"}var O=J,D="",I=null;if(null===P&&null===N&&null!==l){var M=l.link[0].href.split("/");P=M[4],N=M[5];var C=(I=l.link[2].href).indexOf(".com/");I=I.substring(0,C+5)}else I=j();null===O&&(O="https://www.blogger.com/comment.g?blogID="+P+"&postID="+N),D="jQuery.getScript('"+I+"feeds/"+N+"/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli')",$("#sidebar .guestbook a.icon.reload").click(function(){var e=I+"feeds/"+N+"/comments/full?alt=json-in-script&callback=?";lscacheHelper.getJSON(e,t)}),(i=n[a])&&(o+='<li class="guest-book-li readmore"><span class="item-title"><a href="'+O+'#comments" target="guestbook_write">'+G+"</a></span></li>"),o+="</ul>",!1===L&&(o+='<div class="guestbook-write"> <a href="'+O+'" class="write" target="guestbook_write">'+Q+'</a> <a class="write" onclick="'+D+'">'+z+"</a></div>"),H.html(o)})}},95:function(e,t,o){var r=o(96);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(r,n);r.locals&&(e.exports=r.locals)},96:function(e,t,o){(e.exports=o(0)(!1)).push([e.i,".puli-guest-book .admin-photo{float:left;margin-right:5px;width:20px;height:20px;display:block}.puli-guest-book .guest-book-list{color:#5b5743;font-size:90%;padding:0;margin:0;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guest-book-list .guest-book-li{background-image:none;background-color:#fff!important;margin:0;padding:18px;list-style:none;clear:both;text-indent:0!important;color:#5b5743!important}.puli-guest-book .guest-book-list .guest-book-li:hover{padding-left:15px}.puli-guest-book .guest-book-list .guest-book-li.readmore:hover{padding-left:-9px!important;border-left-width:0!important}.puli-guest-book .guest-book-list .guest-book-li .date{background-image:none!important;background-color:transparent!important;padding:0!important;list-style:none;text-indent:0!important;color:#5b5743!important;width:auto!important;height:auto!important;display:block;float:right;text-align:right;color:#b4af98;font-size:70%;margin:0 0 0 10px!important}.puli-guest-book .guest-book-list .guest-book-li.readmore{text-align:center;font-weight:700;padding:10px 0;background-color:#d6d7d6!important}.puli-guest-book .guestbook-write{text-align:center;font-weight:700;padding:10px 0}.puli-guest-book .guestbook-write a.write{color:#5b5743;border:1px solid #d2cbbd;background-color:#fff;padding:5px;margin:5px;text-decoration:none;font-size:90%;cursor:pointer;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guestbook-write a.write:hover{color:#5b5743;border-color:#5b5743}.puli-guest-book .guest-book-list strong.name a{display:inline}",""])},97:function(e,t){jQuery.puliGuestBook({blogID:"16607461",postID:"113544406852218769",url:"/2005/12/blogger_113544406852218769.html#comment-editor",container:".puliGuestBook",listNumber:10,adminName:"Pulipuli Chen",adminPhoto:"//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/",anonymous:"匿名",readMore:"閱讀全部留言",write:"撰寫留言",reload:"重新讀取",addLink:"/2005/12/blogger_113544406852218769.html#comment-editor",disableBottomButtons:!0})},98:function(e,t){var o=function(){var f=$("#random_posts");f.empty();var n=[],t=0,l=(n=new Array(5),function(){return 1+Math.round(Math.random()*(t-1))});lscacheHelper.getJSON("/feeds/posts/default?alt=json-in-script&max-results=0&callback=?",function(e){t=e.feed.openSearch$totalResults.$t,function(){if(null===(n=lscache.get("randomPostIds"))){n=new Array(5);for(var e=0;e<5;e++){for(var t=!1,o=l(),r=0;r<n.length;r++)if(n[r]===o){t=!0;break}t?e--:n[e]=o}lscache.set("randomPostIds",n,5)}}();!function e(t){if(t<n.length){var o="/feeds/posts/default?alt=json-in-script&start-index="+n[t]+"&max-results=1&callback=?";lscacheHelper.getJSON(o,function(e){!function(e){var t=e.feed.entry[0];void 0===t&&(t=e.feed.entry[i+""]);var o=t.title.$t;if(40<o.length&&(o=o.substr(0,40)+"..."),0<o.indexOf(" / ")){var r=o.indexOf(" / ");o="<strong>"+o.substr(0,r)+"</strong>"+o.substr(r)}else o="<strong>"+o+"</strong>";if("content"in t)var n=t.content.$t;else n="summary"in t?t.summary.$t:"";if((n=n.replace(/<[^>]*>/g,"")).length<110)var l=n;else{var a=(n=n.substring(0,110)).lastIndexOf(" ");l=n.substring(0,a)+"&#133;"}for(var s=0;s<t.link.length;s++){if("thr$total"in t&&0<t.thr$total.$t)var u=t.thr$total.$t+" 留言";else u="";if("alternate"===t.link[s].rel){var c=t.link[s].href,d=t.published.$t;if("media$thumbnail"in t)var p=t.media$thumbnail.url;else p="http://3.bp.blogspot.com/-5SoVe1K6JSk/Utl0OOmucAI/AAAAAAAAF6E/hQghgD_EJdQ/s1600/no_thumb.png"}}var b="";b=(b=(b+="<dd>")+'<a href="'+c+'" rel="nofollow" title="'+l+'">')+'<img alt="'+o+'" src="'+p+'"/>',b=(b+=o)+'<span><div  class="random-info">('+d.substring(0,4)+"-"+d.substring(8,10)+"-"+d.substring(5,7)+") "+u+"</span>",b+='<div style="clear:both"></div>',b+="</a></dd>",f.append(b)}(e)}),e(++t)}}(0)},43200)};$(function(){o(),$(".widget.HTML.random > a.button").click(o)})},99:function(e,t){puliHandlePost=function(){var x=this;return x.title="",x.divID="puliHandlePostDiv",x.loading="Loading...",x.ulID="puliHandlePostUl",x.ulClass="",x.liClass="puliHandlePost-item-title",x.postshow=10,x.titlelen="",x.layout="%Y%-%M%-%D% %authorname%<br />%title%",x.bloggerName="pulipuli",x.tagname="",x.callback,x.compareentry=function(e,t){return order=Date.parse(e.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT"))-Date.parse(t.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,"$1/$2/$3 $4 GMT")),0-order},x.handlePosts=function(e){var t="";""!==x.title&&(t="<h2>"+x.title+"</h2>");for(var o,r=t+'<ul id="'+x.ulID+'">',n=x.postshow,i=x.titlelen,l=x.layout,a=e.feed.entry.sort(compareentry),s=0;(o=a[s])&&!(n<=s);s++){t=o.title.$t;if(""!==i&&t.length>i&&(t=t.substr(0,i)+"..."),0<t.indexOf(" / ")){var u=t.indexOf(" / ");t="<strong>"+t.substr(0,u)+"</strong>"+t.substr(u)}else t="<strong>"+t+"</strong>";var c=o.link[4].href;if(".html"!==c.substr(c.length-5,5))for(var d=o.link,p=0;p<d.length&&".html"!==(c=d[p].href).substr(c.length-5,c.length);p++);var b='<a href="'+c+'">'+t+"</a>",f=o.author[0].name.$t,g=o.published.$t.substr(0,10),m=g.substr(0,4),h=g.substr(5,2),k=g.substr(8,2),v=l.replace("%title%",b).replace("%Y%",m).replace("%M%",h).replace("%D%",k).replace("%authorname%",f);r+='<li class="'+x.liClass+'">'+v+"</li>"}r+="</ul>",jQuery("#"+x.divID).html(r),"function"==typeof x.callback&&x.callback()},x.load=function(e){jQuery("#"+e).html('<div id="'+x.divID+'"><h2>'+x.loading+"</h2></div>");var t=x.tagname;"/-/"!==t.substr(0,3)&&""!==t&&(t="/-/"+t);var o="/feeds/posts/summary"+t+"/?alt=json-in-script&callback=?";return lscacheHelper.getJSON(o,function(e){x.handlePosts(e)}),x},x}}});