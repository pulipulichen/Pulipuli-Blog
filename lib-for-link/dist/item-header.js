!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}({107:function(e,t){},109:function(e,t){},111:function(e,t){},113:function(e,t){},115:function(e,t){},117:function(e,t){},119:function(e,t){},121:function(e,t){},123:function(e,t){},22:function(e,t,n){n(107),n(109),n(111),n(113),n(115),n(117),n(119),n(121),n(23),e.exports=n(123)},23:function(e,t){PULI_UTILS.post.toc=function(e,t){var n,r;$(function(){if(void 0===t&&(t="h4"),void 0===e){if($("div.entry-content .disable-post-catalog").length>0)return;var o=$("div.entry-content:first > article > "+t+":first");if(0===o.length)return;var i=o.prev().filter("font");i.length>0&&i.remove();var a=o.prev().filter("hr");if(a.length>0)a.remove();else if((a=o.prevAll("div:first").children(":last").filter("hr")).length>0)a.remove();else{var l=o.prevAll("p:first");(a=l.children().filter("hr")).length>0?a.remove():(a=l.prev().filter("hr")).length>0&&a.remove(),""===$.trim(l.html())&&l.remove()}(e=$("<span></span>").addClass("puli-utils-append").hide().insertBefore(o)).attr("id","postcata"+PULI_UTILS.create_page_id())}var c=jQuery(e).attr("id"),f=jQuery(e).parents("article:first");if(!(f.find(".cate-title").length>0)){var m=f.find("h4,h5"),u=[],p={};for(n=0;n<m.length;n++)t=m.eq(n),p[r=t.offset().top]=t,u.push(r);if(1!==u.length){for(u.sort(function(e,t){return e-t}),m=[],n=0;n<u.length;n++)r=u[n],t=p[r],m.push(t);var h=c+"cataTitle",s=jQuery('<a class="puli-utils-append" name="'+h+'" id="'+h+'" />'),d=jQuery('<a class="puli-utils-append heading-button" href="#'+h+'"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>'),g=jQuery("<ul></ul>").addClass("puli-toc").addClass("puli-utils-append");for(n=0;n<m.length;n++){var v=m[n],b=v.text(),y=c+"_anchor"+n,w=jQuery('<a class="heading-anchor puli-utils-append" id="'+y+'" name="'+y+'" />');v.prepend(w),v.prepend(d.clone());var _=v.prop("tagName");void 0===_&&(_=v.attr("tagName")),"string"==typeof _&&(_=_.toLowerCase());var j=jQuery("<li><a href='#"+y+"'>"+b+"</a></li>");if("h4"===_)g.append(j);else if("h5"===_){var x=g.children("li:last");0===x.length&&(x=$("<li></li>").appendTo(g));var O=x.children("ul:last");0===O.length&&(O=$("<ul></ul>").appendTo(x)),O.append(j)}}m.length>1&&(e.append(s).append(g).slideDown(),e.prepend('<hr class="puli-utils-append" />'),e.append('<hr class="puli-utils-append" />'))}else 0===(a=o.prevAll().filter("hr")).length&&o.before("<hr />")}})},$(function(){PULI_UTILS.post.toc()}),$(function(){var e=function(){var t=$("#comment-holder iframe:last").length,n=$(".comment-form > iframe:last").length;if(0===t&&0===n)setTimeout(e,1e3);else{var r=$("#comment-holder iframe:last");0===t&&n>0&&(r=$(".comment-form > iframe:last")),r.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');var o=location.href;if("#comment-form-iframe"===o.substr(o.length-"#comment-form-iframe".length)){var i=r.offset().top-50;$(window).scrollTop(i)}}};e()}),$(function(){var e=function(){0===$("#comment-holder").length?setTimeout(e,1e3):($("#comment-holder .comment-content").html(function(e,t){var n,r,o;return n=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,r=/(^|[^\/])(www\.[\S]+(\b|$))/gim,o=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,t.replace(n,'<a href="$1" target="_blank">$1</a>').replace(r,'$1<a href="http://$2" target="_blank">$2</a>').replace(o,'<a href="mailto:$1">$1</a>')}),$('#comment-holder .comment-content a[href$=".png"],#comment-holder .comment-content a[href$=".gif"],#comment-holder .comment-content a[href$=".jpg"],#comment-holder .comment-content a[href^="http://imgur.com/"],#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(e,t){let n=t.href;if(n.indexOf("://imgur.com/")>0){if("http://imgur.com/"===n||"https://imgur.com/"===n)return;if(n.indexOf(",")>0&&(n=n.slice(0,n.indexOf(","))),n.indexOf("//imgur.com/a/")>0)return n=n.slice(n.indexOf("/a/")+3),void $(t).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/'+n+'"><a href="//imgur.com/'+n+'"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"><\/script>');n+=".jpg"}$(t).html('<img src="'+n+'" border="0" class="comment-image" />')}),$('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],#comment-holder .comment-content a[href^="https://youtu.be/"],#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(e,t){let n=t.href;n.indexOf("//www.youtube.com/watch?v=")>0?n=n.slice(n.indexOf("?v=")+3):n.indexOf("//youtu.be/")>0&&(n=n.slice(n.indexOf(".be/")+4)),$(t).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+n+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')}))};e()})}});
//# sourceMappingURL=item-header.js.map