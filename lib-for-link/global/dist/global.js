!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(2)},function(t,e){var n,r,o,a,i,s;n=window,r=document,o="script",a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,i=r.createElement(o),s=r.getElementsByTagName(o)[0],i.async=1,i.src="//www.google-analytics.com/analytics.js",s.parentNode.insertBefore(i,s);var l=function(){return Math.floor(3*Math.random())},c=["abc","def","ghi"][l()]+"-"+["123","456","789"][l()]+"-"+["rst","uvw","xyz"][l()];ga("create","UA-37178375-1",{userId:c}),ga("require","displayfeatures"),ga("set","dimension1",c),ga("send","pageview"),$(function(){var t=function(){0===$(".gsc-search-button").length?setTimeout(t,1e3):$(".gsc-search-button:first").click(function(){ga("send","event","search",$("input.gsc-input:first").val(),1)})};t(),$(".social-button").click(function(){ga("send","event","share",$(this).attr("data-title"),1)})})},function(t,e){"undefined"==typeof PULI_UTILS&&(PULI_UTILS={}),void 0===PULI_UTILS.post&&(PULI_UTILS.post={}),$(function(){$("#srch_btn").click(function(){$("#masthead input.gsc-search-button").click()})});PULI_UTILS.log=function(t,e){void 0===e&&(e=t,t=null),null!==t&&(e="["+t+"] "+e),e="[PULIPULI] "+e},PULI_UTILS.is_blogger_fullpage=function(){var t=location.href.split("/"),e=t.length>5&&"label"!==t[4],n="file:"!==t[0],r="localhost"===t[2],o="fullpage.html"===t[t.length-1];return r?!!o:!(!e||!n)},PULI_UTILS.is_guess_message=function(){var t="/2005/12/blogger_113544406852218769.html",e=location.href;return e.substr(e.length-t.length,t.length)===t},PULI_UTILS.create_id=function(){return(new Date).getTime()+""};var n=0;PULI_UTILS.create_page_id=function(){var t=location.pathname.split("/").slice(-1);return"string"==typeof t[0]&&(t=t[0]),t+=n,n++,t};$(".go-top").click(function(){return $(".st-content").animate({scrollTop:0},"slow"),$("html, body").animate({scrollTop:0},"slow"),!1}),$(function(){$(".widget h2").wrapInner("<span/>")}),$(function(t){var e=t("#leader-wrapper").outerHeight();t(window).scroll(function(){t(window).scrollTop()>e?t("#masthead").addClass("fixed-nav").css("top","0").next().css("padding-top","5px"):t("#masthead").removeClass("fixed-nav").next().css("padding-top","0")})}),$(function(){o()});var r,o=function(){var t=$("#random_posts");t.empty();var e=[],n=0;e=new Array(5);randomposts=function(t){n=t.feed.openSearch$totalResults.$t};var r=function(){return 1+Math.round(Math.random()*(n-1))};random_posts=function(e){for(var n=0;n<5;n++){var r=e.feed.entry[n],o=r.title.$t;if(o.length>40&&(o=o.substr(0,40)+"..."),o.indexOf(" / ")>0){var a=o.indexOf(" / ");o="<strong>"+o.substr(0,a)+"</strong>"+o.substr(a)}else o="<strong>"+o+"</strong>";if("content"in r)var i=r.content.$t;else if("summary"in r)i=r.summary.$t;else i="";if((i=i.replace(/<[^>]*>/g,"")).length<110)var s=i;else{var l=(i=i.substring(0,110)).lastIndexOf(" ");s=i.substring(0,l)+"&#133;"}for(var c=0;c<r.link.length;c++){if("thr$total"in r&&r.thr$total.$t>0)var u=r.thr$total.$t+" 留言";else u="";if("alternate"===r.link[c].rel){var f=r.link[c].href,d=r.published.$t;if("media$thumbnail"in r)var p=r.media$thumbnail.url;else p="http://3.bp.blogspot.com/-5SoVe1K6JSk/Utl0OOmucAI/AAAAAAAAF6E/hQghgD_EJdQ/s1600/no_thumb.png"}}var g="";g=(g=(g+="<dd>")+'<a href="'+f+'" rel="nofollow" title="'+s+'">')+'<img alt="'+o+'" src="'+p+'"/>',g=(g+=o)+'<span><div  class="random-info">('+d.substring(0,4)+"-"+d.substring(8,10)+"-"+d.substring(5,7)+") "+u+"</span>",g+='<div style="clear:both"></div>',g+="</a></dd>",t.append(g)}},$.getScript("/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts",function(){!function(){for(var t=0;t<5;t++){for(var n=!1,o=r(),a=0;a<e.length;a++)if(e[a]===o){n=!0;break}n?t--:e[t]=o}}();var t=0,n=function(){t<5&&($.getScript("/feeds/posts/default?alt=json-in-script&start-index="+e[t]+"&max-results=1&callback=random_posts"),t++,n())};n()})};void 0!==(r=function(t){for(var e=window.location.search.substring(1).split("&"),n=0;n<e.length;n++){var r=e[n].split("=");if(r[0]===t)return r[1]}}("icon"))&&($("head link[rel='icon']").remove(),$("head link[rel='shortcut icon']").remove(),$("head link[rel='apple-touch-icon']").remove(),$("head").append('<link rel="shortcut icon" href="'+r+'" type="image/'+r.substr(r.lastIndexOf(".")+1)+'" size="192x192" />')),$(function(){a()});var a=function(){$(".widget.HTML.fb-fan-page .widget-content").html('<iframe src="//www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpulipuli.blogspot&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=391880581194257" width="350" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>')}}]);