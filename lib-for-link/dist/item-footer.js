/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/item-footer/modules/disqus/blogger_index.js":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/disqus/blogger_index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){

     var hasClass = function(obj,className) {
         var re = new RegExp("(^|\\s)" + className + "(\\s|$)");
         return re.test(obj.className);
     };

     var get_blog_block = function() {
         var block;
         for(var i = 0;Math.min(i,19) != 19; i++) {
             block = document.getElementById('Blog'+i);
             if (!!block) break;
         }
         return block;
     };
     var change_links = function(post) {
         var spans = post.getElementsByTagName('span');
         var anchors, changelist = [], permalink = '', tempanchor, permalink_found = false, elements;
         for(var i = 0; Math.min(i, spans.length) != (spans.length); i++) {
             if ((hasClass(spans[i], 'post-timestamp') || hasClass(spans[i], 'disqus-blogger-permalink')) && !permalink_found) {
                 anchors = spans[i].getElementsByTagName('a');
                 for (var q=0; Math.min(q, anchors.length) != (anchors.length); q++) {
                     if (hasClass(anchors[q], 'timestamp-link') || hasClass(anchors[q], 'disqus-blogger-permalink-url')) {
                         permalink = anchors[q].href;
                         permalink_found = true;
                     }
                 }
             }
             if (hasClass(spans[i], 'post-comment-link') || hasClass(spans[i], 'disqus-blogger-comment-link'))
                 changelist.push(spans[i]);
         }
         //if not found, use slower method and iterate through every element in the post
         if (!permalink_found) {
             elements = post.getElementsByTagName('*');
             for(var k = 0; k < elements.length; k++) {
                 if ((hasClass(elements[k], 'entry-title')||hasClass(elements[k], 'post-title')) && !permalink_found) {
                     anchors = elements[k].getElementsByTagName('a');
                     for (var g=0; g < anchors.length; g++) {
                         if (!!anchors[g].href) {
                             permalink = anchors[g].href;
                             permalink_found = true;
                             break;
                         }
                     }
                 }
                 if (permalink_found) break;
             }
         }

         // if we still can't find a permalink, just skip this post and call it a loss
         if (!permalink_found) {
            return;
         }

         // with blogger's country specific tld changes, we need to check to see if the permalink we grabbed
         // matches a country specific tld.  to do so, we use the blog.homepageUrl and blog.homepageCanonicalUrl
         // we set in the actual widget html to check and do a search and replace
         // if the normal url and the canonical url match, then we know there isn't a country specific tld
         if ((disqus_blogger_homepage_url && disqus_blogger_canonical_homepage_url) &&
             (disqus_blogger_homepage_url != disqus_blogger_canonical_homepage_url)) {
             // make sure that the country tld is in the permalink
             if (permalink.match(disqus_blogger_homepage_url)) {
                // switch out country specific tld for canonical normal tld
                permalink = permalink.replace(disqus_blogger_homepage_url, disqus_blogger_canonical_homepage_url);
             }
         }

         tempanchor = document.createElement('a');
         tempanchor.className = 'comment-link disqus-blogger-comment-link';
         tempanchor.href = permalink + '#disqus_thread';
         for (var j=0; Math.min(j, changelist.length) != (changelist.length); j++) {
             changelist[j].innerHTML = '';
             changelist[j].appendChild(tempanchor);
             changelist[j].style.visibility = 'visible';
         }
         //if no comment-link elements were found, append to timestamp
         if (changelist.length === 0) {
             for(var h = 0; Math.min(h, spans.length) != (spans.length); h++) {
                 if (hasClass(spans[h], 'post-timestamp') || hasClass(spans[h], 'disqus-blogger-permalink'))
                     spans[h].appendChild(tempanchor);
             }
         }
     };
     var blog_block = get_blog_block();
     if (!!blog_block) {
         var posts = blog_block.getElementsByTagName('div');
         for(var i = 0; Math.min(i, posts.length) != (posts.length); i++) {
             if (hasClass(posts[i], "hentry") || hasClass(posts[i], "post") || hasClass(posts[i], 'disqus-blogger-post'))
                 change_links(posts[i]);
         }
         (function () {
              var s = document.createElement('script'); s.async = true;
              s.src = '//'+disqus_shortname+'.disqus.com/count.js';
              (document.getElementsByTagName('HEAD')[0] || document.body).appendChild(s);
          }());
     }
 })();

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/disqus/blogger_item.js":
/*!*********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/disqus/blogger_item.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();


/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/disqus/disqus.css":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/disqus/disqus.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./disqus.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/disqus/disqus.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/disqus/disqus.js":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/disqus/disqus.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * disqus主要檔案
 * @author Pulipuli Chen 20190301
 * @type String
 */
disqus_shortname = 'pulipuli'

disqus_blogger_current_url = getBloggerVariable('data-blog-canonicalUrl')
if (!disqus_blogger_current_url.length) {
  disqus_blogger_current_url = getBloggerVariable('data-blog-url')
}
disqus_blogger_homepage_url = getBloggerVariable('data-blog-homepageUrl')
disqus_blogger_canonical_homepage_url = getBloggerVariable('data-blog-canonicalHomepageUrl')

$(function () {
  disqus_url = disqus_blogger_current_url;
  (function () {
      "use strict";
      //$.getScript('//pulipuli.disqus.com/embed.js');
      disqus_embed()
  })();
});

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/disqus/embed.js":
/*!**************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/disqus/embed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

disqus_embed = function () {
  
(function () {
    'use strict';
    var _config = window.disqus_config;
    window.disqus_config = function () {
        if (_config) {
            try {
                _config.call(this);
            } catch(err) {
                console.error('There was a problem with the Disqus configuration.', err);
            }
        }
        this.server_side = {
  "bin":"embed:promoted_discovery:dynamic:network_default_hidden:fallthrough",
  "experiment":"network_default_hidden",
  "service":"dynamic",
  "gif_picker_enabled":"",
  "bottom_placement_url":"",
  "variant":"fallthrough",
  "forum_id":"3945693",
  "inthread_leading_comment_count":"",
  "depth_mode":"0",
  "inthread_show_after_comment":"3",
  "inthread_repeat_comment_count":"",
  "sandbox_ads":"1",
  "home_discovery_enabled":"",
  "inthread_placement_url":"",
  "top_placement_url":"",
  "inthread_multiple_ads":"",
  "can_disable_ads":"",
  "inthread_minimum_comment_count":"4",
  "inthread_trailing_comment_count":"",
  "is_private":"",
  "t":"1551430317"
};
    };
})();
!function(a,b){function c(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca={},da={},ea={},fa={},ga={},ha={},ia={},ja={};e=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},f=function(a){return function(b,c){var d=b.length,e=Array.prototype.forEach;if(isNaN(d))for(var f in b)a(b,f)&&c(b[f],f,b);else if(e)e.call(b,c);else for(var g=0;g<d;g++)c(b[g],g,b)}}(e),ca=function(a){var c=f;return a=function(a){var d=[];return c(a,function(a,c){a!==b&&d.push(encodeURIComponent(c)+(null===a?"":"="+encodeURIComponent(a)))}),d.join("&")}}(ca),da=function(a){var b=ca;return a=function c(a,d,e){if(d&&(a.indexOf("?")===-1?a+="?":"&"!==a.charAt(a.length-1)&&(a+="&"),a+=b(d)),e){var f={};return f[(new Date).getTime()]=null,c(a,f)}var g=a.length;return"&"===a.charAt(g-1)?a.slice(0,g-1):a}}(da),ea=function(b){var c=da,d=a.document,e=d.head||d.getElementsByTagName("head")[0]||d.body;return b=function(a,b,f,g){var h=d.createElement("script");h.src=c(a,b,f),h.async=!0,h.charset="UTF-8",h.onload=g,e.appendChild(h)}}(ea),g=function(){var b="adsbox",c=100,d=a.document;return function(a){if(a){var e=d.createElement("div");e.innerHTML="&nbsp;",e.className=b,d.body.appendChild(e),setTimeout(function(){a(0===e.offsetHeight),d.body.removeChild(e)},c)}}}(),h=function(a){try{return a.self!==a.top}catch(b){return!0}},i=function(a,b){return function(c){return a(Array.prototype.slice.call(arguments,1),function(a){for(var d in a)b(a,d)&&(c[d]=a[d])}),c}}(f,e),j=function(c){function d(a){var b=a.split("."),c=b.length>2?b[b.length-2]:"";return c.match(/^[0-9a-f]{32}$/i)&&c}function e(b){(new a.Image).src=j(k+"/stat.gif",{event:b})}function g(b){(new a.Image).src=j(k+"/event.gif",b)}function h(c){var d=new a.URLSearchParams;i(c,function(a,c){a!==b&&d.append(c,a)});var e=new a.XMLHttpRequest;e.open("POST",k+"/event.json",!0),e.withCredentials=!0,e.send(d)}var i=f,j=da,k="https://referrer.disqus.com/juggler";return{getLoaderVersionFromUrl:d,logStat:e,reportJester:g,reportJesterPOST:h}}({}),k=function(){function b(b){b=b||{};var c=b.Math||a.Math,d=b.Date||a.Date;try{var e=(new d).getTimezoneOffset(),f=1,g=a.screen;g&&g.availWidth?f=g.availWidth*g.availHeight+g.colorDepth:g&&g.width&&(f=g.width*g.height);var h=a.document.documentElement,i=h.clientWidth*h.clientHeight;return c.abs(17*e+25*f-i)}catch(j){return 1}}return{get:b}}(),l=function(b){function c(b){b=b||{};var c=b.Uint32Array||a.Uint32Array,d=b.crypto||a.crypto,e=b.Math||a.Math;try{var f=new c(1);return d.getRandomValues(f),f[0]}catch(g){return e.floor(1e9*e.random())}}function d(){var b=a.performance,c=b&&b.timing;if(!c)return 1e5;var d=c.domainLookupEnd-c.domainLookupStart,e=c.connectEnd-c.connectStart,f=c.responseStart-c.navigationStart;return 11*d+13*e+17*f}function e(e){e=e||{};var f=e.Math||a.Math,g=Number((new Date).getTime().toString().substring(3)),h=f.abs(g+d()-b.get()).toString(32);return h+=c(e).toString(32)}return{generate:e}}(k),m=function(b){var c=a.document,d=c.createElement("iframe");return d.style.display="none",function(a,b){var e=b&&b[a]||null;try{return d.parentNode!==c.body&&c.body.appendChild(d),d.contentWindow[a]||e}catch(f){return e}}}({}),n=function(){var c={isIE:function(){return Boolean(a.document.documentMode)},isSafari:function(){var b=a.navigator.userAgent.toLowerCase();return b.indexOf("safari")>-1&&b.indexOf("chrome")===-1},isFirefox:function(){var b=a.navigator.userAgent.toLowerCase();return b.indexOf("firefox")>-1&&b.indexOf("chrome")===-1},isChrome:function(){var c=a.navigator.userAgent.toLowerCase();return c.indexOf("crios")>-1||Boolean(a.chrome)&&"Google Inc."===a.navigator.vendor&&a.opr===b&&c.indexOf("edge")===-1},isEdge:function(){var b=a.navigator.userAgent.toLowerCase();return b.indexOf("edge")>-1},isOpera:function(){var b=a.navigator.userAgent.toLowerCase();return b.indexOf("opera")>-1||b.indexOf("opr")>-1},isCrawler:function(c){c===b&&(c=a);var d=c.navigator.userAgent;return/bot|crawl|slurp|spider|facebookexternalhit|embedly|feedly|pinterest/i.test(d)}};return c}(),o=function(a){return"[object String]"===Object.prototype.toString.call(a)},p=function(){return a.getComputedStyle?function(b,c,d){try{return a.document.defaultView.getComputedStyle(b,null).getPropertyValue(c)}catch(e){return null}}:function(a,b,c){return a.currentStyle[b]||a.currentStyle[c]}}(),q=function(a){function b(a){return a.replace(/\s+/g,"").toLowerCase()}var c=f,d=o,e=i;return function(a,f,g){var h={};d(f)?h[f]=g:h=f;var i=e({},h);c(i,function(a,c){var d=b(c);d!==c&&(delete i[c],i[d]=a),null===a&&(i[d]=""),void 0===a&&delete i[d]});var j=a.style;c(i,function(a,b){j.setProperty(b,String(a),"important")})}}({}),r=function(b){function c(a){return a.replace(/\s+/g,"").toLowerCase()}function d(a){return a=a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/,"#$1$1$2$2$3$3"),a=a.slice(1),{red:parseInt(a.slice(0,2),16),green:parseInt(a.slice(2,4),16),blue:parseInt(a.slice(4,6),16)}}function e(a){var b=a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);return{red:parseInt(b[1],10),green:parseInt(b[2],10),blue:parseInt(b[3],10)}}function f(a){var b=a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);return{red:parseInt(b[1],10),green:parseInt(b[2],10),blue:parseInt(b[3],10),alpha:parseFloat(b[4])}}function g(b,c,d,e){return c=a.document.createElement(c),i(c,{visibility:"hidden",color:d}),b.appendChild(c),d=e(c),b.removeChild(c),d}function h(b,d){d=d||{};var f=d.container||a.document.body;return a.getComputedStyle?(b=g(f,"span",b,function(b){return a.getComputedStyle(b,null).getPropertyValue("color")}),e(c(b))):(b=g(f,"textarea",b,function(a){return a.createTextRange().queryCommandValue("ForeColor")}),{red:255&b,blue:b>>>16,green:(65280&b)>>>8})}var i=q;return function(a,b){a=c(a);var g;if("transparent"===a)return{red:0,green:0,blue:0,alpha:0};if("#"===a.charAt(0))g=d;else if("rgba("===a.slice(0,5))g=f;else if("rgb("===a.slice(0,4))g=e;else{if(!/^[a-z]+$/.test(a))throw new Error("parseColor received unparseable color: "+a);g=h}return g(a,b)}}({}),s=function(c){function d(a){if(!a||"embed.js"!==a.substring(a.length-8))return null;for(var b,c=[/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_-]+)/i,/(https?:)?\/\/(www\.)?([\w_-]+)\.disqus\.com/i,/(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_-]+)/i,/(https?:)?\/\/(www\.)?([\w_-]+)\.dev\.disqus\.org/i],d=c.length,e=0;e<d;e++)if(b=a.match(c[e]),b&&b.length&&4===b.length)return b[3];return null}function e(a,b){var c,e,f,g=a.getElementsByTagName("script"),h=g.length;b=b||d;for(var i=h-1;i>=0;i--)if(c=g[i],e=c.getAttribute?c.getAttribute("src"):c.src,f=b(e),null!==f)return f.toLowerCase();return null}function f(a,b){var c,d,e=0,f=new Array(a.length);for(c=0;c<=a.length;c++)for(f[c]=new Array(b.length),d=0;d<=b.length;d++)f[c][d]=0;for(c=0;c<a.length;c++)for(d=0;d<b.length;d++)a[c]===b[d]&&(f[c+1][d+1]=f[c][d]+1,f[c+1][d+1]>e&&(e=f[c+1][d+1]));return e}function g(){for(var a=z.getElementsByTagName("h1"),c=z.title,d=c.length,e=c,g=.6,h=function(a){var h,i=a.textContent||a.innerText;null!==i&&i!==b&&(h=f(c,i)/d,h>g&&(g=h,e=i))},i=0;i<a.length;i++)h(a[i]);return e}function h(a){return a.toLowerCase().replace(/^\s+|\s+$/g,"").replace(/['"]/g,"")}function i(a){var b=0,c=1,d=2;if(!y("atob")||!y("requestAnimationFrame"))return c;try{a.postMessage("ping","*")}catch(e){return d}return b}function j(a,b,c){c=c||b;var d=w(a,b,c);return!d||/color/i.test(b)&&0===x(d).alpha?a&&j(a.parentNode,b,c)||d:d||null}function k(a,b,c,d){v(b)&&(b=z.createElement(b));var e=null;return b.style.visibility="hidden",a.appendChild(b),e=j(b,c,d),a.removeChild(b),e}function l(a){for(var b,c=k(a,"span","font-family","fontFamily"),d=c.split(","),e={courier:1,times:1,"times new roman":1,georgia:1,palatino:1,serif:1},f=0;f<d.length;f++)if(b=h(d[f]),e.hasOwnProperty(b))return!0;return!1}function q(a){var b=z.createElement("a");return b.href=Number(new Date),x(k(a,b,"color"),{container:a})}function s(a){var b=a.red,c=a.green,d=a.blue;if(a.hasOwnProperty("alpha")){var e=a.alpha,f=function(a){return Math.round(a*e+255*(1-e))};b=f(b),c=f(c),d=f(d)}return(299*b+587*c+114*d)/1e3}function t(a){var b=k(a,"span","background-color","backgroundColor"),c=x(b,{container:a});return 0===c.alpha?"light":s(c)<128?"dark":"light"}var u=n,v=o,w=p,x=r,y=m,z=a.document,A=function(){var a,b,c=function(){return!1};if("hidden"in z)a="hidden",b="visibilitychange";else{if(!("webkitHidden"in z))return{isHidden:c,listen:c,stopListening:c};a="webkitHidden",b="webkitvisibilitychange"}return{isHidden:function(){return z[a]},listen:function(a){return z.addEventListener(b,a)},stopListening:function(a){return z.removeEventListener(b,a)}}}(),B=function(){var a=z.createElement("div");a.style.visibility="hidden",a.style.width="100px",a.style.msOverflowStyle="scrollbar",z.body.appendChild(a);var b=a.offsetWidth;a.style.overflow="scroll";var c=z.createElement("div");c.style.width="100%",a.appendChild(c);var d=c.offsetWidth;return a.parentNode.removeChild(a),b-d},C={getItem:function(b){try{return a.localStorage.getItem(b)}catch(c){}},setItem:function(b,c){try{return a.localStorage.setItem(b,c)}catch(d){}}},D=1,E=function(a){if(a.nodeType===D){var b=w(a,"max-height","maxHeight"),c=w(a,"overflow-y","overflowY");return b&&"none"!==b&&c&&"visible"!==c}},F=4,G=function(a){if(a.nodeType===D)return a.scrollHeight-a.clientHeight>F},H=function(){if(z.querySelector){var a=z.querySelector("link[rel=canonical]");if(a)return a.href}};return{MAX_Z_INDEX:2147483647,getShortnameFromUrl:d,getForum:e,guessThreadTitle:g,getContrastYIQ:s,getColorScheme:t,getElementStyle:k,getAnchorColor:q,normalizeFontValue:h,isSerif:l,getBrowserSupport:i,pageVisibility:A,getScrollbarWidth:B,browser:u,storage:C,appearsToHideContent:E,hasOverflow:G,getCanonicalUrl:H}}({}),t=function(a){var c=f,d=l,e=m,g=s,h=function(a,c){this.win=a,this.configurator=c,this.config={page:{url:b,title:b,slug:b,category_id:b,identifier:b,language:b,integration:b,api_key:b,remote_auth_s3:b,author_s3:b},experiment:{enable_scroll_container:!0,force_auto_styles:b,sort_order:b,force_mobile:b},server_side:{service:"static",experiment:"default",variant:"control",top_placement_url:b,bottom_placement_url:b,inthread_placement_url:b,outside_placement_url:b,inthread_minimum_comment_count:b,inthread_show_after_comment:b,inthread_leading_comment_count:b,inthread_repeat_comment_count:b,inthread_trailing_comment_count:b,inthread_count_children:b,inthread_multiple_ads:b,sandbox_ads:b,can_disable_ads:b,home_discovery_enabled:b,forum_id:b,is_private:b,depth_mode:b,gif_picker_enabled:b},discovery:{disable_all:b,disable_promoted:b,sponsored_comment_id:b,preview:!1,adsFixture:b,pdFixture:b},strings:b,sso:{},callbacks:{preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onNewComment:[],preReset:[],onPaginate:[],onIdentify:[],beforeComment:[]}}};h.DISQUS_GLOBALS=["shortname","identifier","url","title","integration","slug","category_id"];var i=h.prototype;return i.getContainer=function(){var a=this.win;return a.document.getElementById(a.disqus_container_id||"disqus_thread")},i.runConfigurator=function(){var a=this.configurator||this.win.disqus_config;if("function"==typeof a)try{a.call(this.config)}catch(b){}},i.getValuesFromGlobals=function(){var a,b=this.win,d=this.config,e=d.page;c(h.DISQUS_GLOBALS,function(a){var c=b["disqus_"+a];"undefined"!=typeof c&&(e[a]=c)}),this.runConfigurator(),d.forum||(a=e.shortname,d.forum=a?a.toLowerCase():g.getForum(b.document))},i.toJSON=function(){var a,b=this.win,c=this.config,f=c.page,h=this.getContainer(),i=g.getBrowserSupport(b);return this.getValuesFromGlobals(),(c.server_side.outside_placement_url||c.server_side.top_placement_url||c.server_side.inthread_placement_url||c.server_side.bottom_placement_url)&&(a=d.generate({Math:e("Math",b),crypto:e("crypto",b),Uint32Array:e("Uint32Array",b),Date:e("Date",b)})),{impressionId:a||null,container:h,forum:c.forum,sortOrder:c.experiment.sort_order||g.storage.getItem("disqus.sort")||"default",language:c.language,typeface:g.isSerif(h)?"serif":"sans-serif",anchorColor:g.getAnchorColor(h),colorScheme:g.getColorScheme(h),canonicalUrl:g.getCanonicalUrl(),url:f.url||b.location.href.replace(/#.*$/,""),title:f.title,documentTitle:g.guessThreadTitle(),slug:f.slug,category:f.category_id,identifier:f.identifier,integration:f.integration,discovery:c.discovery,experimentName:c.server_side.experiment,experimentVariant:c.server_side.variant,experimentService:c.server_side.service,forumId:c.server_side.forum_id,topPlacementUrl:c.server_side.top_placement_url,bottomPlacementUrl:c.server_side.bottom_placement_url,inthreadPlacementUrl:c.server_side.inthread_placement_url,outsidePlacementUrl:c.server_side.outside_placement_url,inthreadMinimumCommentCount:c.server_side.inthread_minimum_comment_count,inthreadShowAfterComment:c.server_side.inthread_show_after_comment,inthreadLeadingCommentCount:c.server_side.inthread_leading_comment_count,inthreadRepeatCommentCount:c.server_side.inthread_repeat_comment_count,inthreadTrailingCommentCount:c.server_side.inthread_trailing_comment_count,inthreadCountChildren:c.server_side.inthread_count_children,inthreadMultipleAds:c.server_side.inthread_multiple_ads,sandboxAds:c.server_side.sandbox_ads,canDisableAds:c.server_side.can_disable_ads,homeDiscoveryEnabled:c.server_side.home_discovery_enabled,apiKey:f.api_key,remoteAuthS3:f.remote_auth_s3,sso:c.sso,unsupported:i,degraded:Boolean(i)||g.browser.isCrawler(),callbacks:c.callbacks,enableScrollContainer:c.experiment.enable_scroll_container,forceAutoStyles:c.experiment.force_auto_styles,forceMobile:c.experiment.force_mobile,isPrivate:c.server_side.is_private,depthMode:c.server_side.depth_mode||0,gifPickerEnabled:Boolean(c.server_side.gif_picker_enabled)}},{HostConfig:h}}({}),u=function(){var a;return a="undefined"==typeof console?function(){}:"function"==typeof console.log?function(){return console.log(Array.prototype.slice.call(arguments,0).join(" "))}:function(){return console.log.apply(console,arguments)},{log:a}}(),v=function(a){return function(b){return Boolean(b&&(b.offsetWidth||b.offsetHeight||b.getClientRects().length)&&"hidden"!==a(b,"visibility"))}}(p),w=function(a,b,c){var d=function(){var e=a();return e?void b(e):void setTimeout(d,c)};d()},x=function(b){function c(a){return f.getElementById(a)||f.body||f.documentElement}function d(a){return g.href=a,g.hostname}function e(a,b){b=b||f.documentElement;for(var c=a,d=0,e=0;c&&c!==b;)d+=c.offsetLeft,e+=c.offsetTop,c=c.offsetParent;return{top:e,left:d,height:a.offsetHeight,width:a.offsetWidth}}var f=a.document,g=f.createElement("a");return{getContainer:c,getHost:d,getOffset:e}}({}),y=function(){var a=1e4,b=Math.floor(Math.random()*a+1);return function(a){b+=1;var c=String(b);return a?a+c:c}}(),z=function(a){var b=f,c=e,d=y,g=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},h=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var d in a)c(a,d)&&(b[b.length]=d);return b},i=[].slice,j={on:function(a,b,c){if(!l(this,"on",a,[b,c])||!b)return this;this._events=this._events||{};var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,b,c){if(!l(this,"once",a,[b,c])||!b)return this;var d=this,e=g(function(){d.off(a,e),b.apply(this,arguments)});return e._callback=b,this.on(a,e,c)},off:function(a,b,c){var d,e,f,g,i,j,k,m;if(!this._events||!l(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;for(g=a?[a]:h(this._events),i=0,j=g.length;i<j;i++)if(a=g[i],f=this._events[a]){if(this._events[a]=d=[],b||c)for(k=0,m=f.length;k<m;k++)e=f[k],(c&&c!==e.context||b&&b!==e.callback&&b!==e.callback._callback)&&d.push(e);d.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=i.call(arguments,1);if(!l(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;return c&&m(c,b),d&&m(d,arguments),this},stopListening:function(a,b,c){var d=this._listeners;if(!d)return this;var e=!b&&!c;"object"==typeof b&&(c=this),a&&((d={})[a._listenerId]=a);for(var f in d)d[f].off(b,c,this),e&&delete this._listeners[f];return this}},k=/\s+/,l=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var e in c)a[b].apply(a,[e,c[e]].concat(d));return!1}if(k.test(c)){for(var f=c.split(k),g=0,h=f.length;g<h;g++)a[b].apply(a,[f[g]].concat(d));return!1}return!0},m=function(a,b){var c,d,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(d=0;d<e;d++)(c=a[d]).callback.call(c.ctx);return;case 1:for(d=0;d<e;d++)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(d=0;d<e;d++)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(d=0;d<e;d++)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(d=0;d<e;d++)(c=a[d]).callback.apply(c.ctx,b)}},n={listenTo:"on",listenToOnce:"once"};return b(n,function(a,b){j[b]=function(b,c,e){var f=this._listeners||(this._listeners={}),g=b._listenerId||(b._listenerId=d("l"));return f[g]=b,"object"==typeof c&&(e=this),b[a](c,e,this),this}}),j.bind=j.on,j.unbind=j.off,j}({}),A=function(b){var c,d=a,e=m;return c="[object JSON]"===d.Object.prototype.toString.call(d.JSON)?d.JSON:e("JSON",d),c?c:{}}({}),B=function(a){var b=z,c=i,d=y,e=x,f=A,g=function h(a){a=a||{},this.state=h.INIT,this.uid=a.uid||d("dsq-frame"),this.origin=a.origin,this.host=e.getHost(this.origin),this.target=a.target,this.sandbox=a.sandbox,this.window=null,h.windows[this.uid]=this,this.on("ready",function(){this.state=h.READY},this),this.on("die",function(){this.state=h.KILLED},this)};return c(g,{INIT:0,READY:1,KILLED:2,windows:{},postMessage:function(a,b,c){return a.postMessage(b,c)}}),c(g.prototype,b),g.prototype.requiresWindow=function(a){var b=this;return function(){var c=Array.prototype.slice.call(arguments),d=function e(){var d=b.window;d?a.apply(b,c):setTimeout(e,500)};b.isReady()?d():b.on("ready",d)}},g.prototype.sendMessage=function(a,b){var c=f.stringify({scope:"client",name:a,data:b});this.requiresWindow(function(a){g.postMessage(this.window,a,this.origin)})(c)},g.prototype.hide=function(){},g.prototype.show=function(){},g.prototype.url=function(){return this.target},g.prototype.destroy=function(){this.state=g.KILLED,this.off()},g.prototype.isReady=function(){return this.state===g.READY},g.prototype.isKilled=function(){return this.state===g.KILLED},g}({}),C=function(b){var c=q,d=i,e=B,f=x,g=a.document,h=function(a){e.call(this,a),this.styles=a.styles||{},this.tabIndex=a.tabIndex||0,this.title=a.title||"Disqus",this.sandbox=a.sandbox,this.container=a.container,this.elem=null};return d(h.prototype,e.prototype),h.prototype.load=function(){var a=this.elem=g.createElement("iframe");a.setAttribute("id",this.uid),a.setAttribute("name",this.uid),a.setAttribute("allowTransparency","true"),a.setAttribute("frameBorder","0"),a.setAttribute("scrolling","no"),this.role&&a.setAttribute("role",this.role),a.setAttribute("tabindex",this.tabIndex),a.setAttribute("title",this.title),"string"==typeof this.sandbox&&a.setAttribute("sandbox",this.sandbox),this.setInlineStyle(this.styles)},h.prototype.getOffset=function(a){return f.getOffset(this.elem,a)},h.prototype.setInlineStyle=function(a,b){return c(this.elem,a,b)},h.prototype.removeInlineStyle=function(a){var b=this.elem.style;return"removeProperty"in b?void b.removeProperty(a):void(b[a]="")},h.prototype.hide=function(){this.setInlineStyle("display","none")},h.prototype.show=function(){this.removeInlineStyle("display")},h.prototype.destroy=function(){return this.elem&&this.elem.parentNode&&(this.elem.parentNode.removeChild(this.elem),this.elem=null),e.prototype.destroy.call(this)},h}({}),D=function(b){var c=o,d=i,e=x,f=C,g=a.document,h=function(a){f.call(this,a),this.contents=a.contents||"",this.styles=d({width:"100%",border:"none",overflow:"hidden"},a.styles||{})};return d(h.prototype,f.prototype),h.prototype.load=function(a){f.prototype.load.call(this);var b=this.elem,d=c(this.container)?e.getContainer(this.container):this.container;d.appendChild(b),this.window=b.contentWindow;try{this.window.document.open()}catch(h){b.src='javascript:var d=document.open();d.domain="'+g.domain+'";void(0);'}return this.document=this.window.document,this.document.write(this.contents),this.document.close(),this.updateHeight(),a&&setTimeout(a,0),this},h.prototype.updateHeight=function(){var a=this.document.body;if(a){var b=a.offsetHeight+"px";this.setInlineStyle({height:b,"min-height":b,"max-height":b})}},h.prototype.show=function(){this.setInlineStyle("display","block"),this.updateHeight()},h.prototype.click=function(a){var b=this,c=b.document.body;c.addEventListener("click",function(c){a.call(b,c)})},h}({}),E=function(b){var c=p,d=a.document.body;return function(){var a=d.offsetHeight,b=parseInt(c(d,"margin-top","marginTop"),10);b&&(a+=b);var e=parseInt(c(d,"margin-bottom","marginBottom"),10);return e&&(a+=e),a}}({}),F=function(a){var b=i,c=da,d=ca,e="default",f={lounge:"http://disqus.com/embed/comments/",home:"https://disqus.com/home/".replace("home/","")},g=function(a){return"https://"+a.replace(/^\s*(\w+:)?\/\//,"")},h=function(a,h,i){var j=f[a];if(!j)throw new Error("Unknown app: "+a);var k=g(j),l=b({base:e},h||{}),m=i?"#"+d(i):"";return c(k,l)+m};return{BASE:e,apps:f,get:h,ensureHTTPSProtocol:g}}({}),G=function(a){var b=z,c=i,d=e,f=y,g=function(a){this.uid=f("dsq-app"),this.settings=a||{};var b=[],c=this.constructor.prototype;do b.unshift(c),c=c.constructor.__super__;while(c);for(var e=0,g=b.length;e<g;e++)c=b[e],d(c,"events")&&this.on(c.events,this),d(c,"onceEvents")&&this.once(c.onceEvents,this)};return c(g.prototype,b),g.prototype.destroy=function(){this.off(),this.stopListening()},g.extend=function(a,b){var e,f=this;e=a&&d(a,"constructor")?a.constructor:function(){return f.apply(this,arguments)},c(e,f,b);var g=function(){this.constructor=e};return g.prototype=f.prototype,e.prototype=new g,a&&c(e.prototype,a),e.__super__=f.prototype,e},g}({}),H=function(a,b,c){c||(c=0);var d,e,f,g,h=0,i=function(){h=new Date,f=null,g=a.apply(d,e)};return function(){var j=new Date,k=b-(j-h);return d=this,e=arguments,k<=0?(clearTimeout(f),f=null,h=j,g=a.apply(d,e)):f||(f=setTimeout(i,k+c)),g}},fa=function(b){var c=z,d=o,f=e,g=i,h=C,j=B,k=x,l=A,m=a.document;b.throttle=H,a.addEventListener("message",function(a){var c;try{c=l.parse(a.data)}catch(d){return}var e=c.sender,g=f(j.windows,e)&&j.windows[e];g&&k.getHost(a.origin)===g.host&&(a.origin!==g.origin&&(g.origin=a.origin),"host"===c.scope&&g.trigger(c.name,c.data),"error"===c.name&&b.trigger("error",c.data))}),a.addEventListener("hashchange",function(){b.trigger("window.hashchange",{hash:a.location.hash})}),a.addEventListener("resize",b.throttle(function(){b.trigger("window.resize")},250,50)),m.addEventListener("mousemove",b.throttle(function(){b.trigger("window.mousemove")},250,50));var n=function(){b.trigger("window.scroll")};a.addEventListener("scroll",b.throttle(n,250,50),!1),m.addEventListener("click",function(){b.trigger("window.click")});var p=b.Popup=function(a){a.uid=a.windowName,j.call(this,a)};g(p.prototype,j.prototype),p.prototype.load=function(){var b=this.window=a.open("",this.uid||"_blank");b.location=this.url()},p.prototype.isKilled=function(){return j.prototype.isKilled()||this.window.closed};var q=b.Channel=function(a){var b=this;b.window=null,h.call(b,a),this.insertBeforeEl=a.insertBeforeEl,this.insertAfterEl=a.insertAfterEl,b.styles=g({width:"1px","min-width":"100%",border:"none",overflow:"hidden",height:"0"},a.styles||{})};return g(q.prototype,h.prototype),q.prototype.load=function(a){var b=this;h.prototype.load.call(b);var c=b.elem;c.setAttribute("width","100%"),c.setAttribute("src",this.url()),c.addEventListener("load",function(){b.window=c.contentWindow,a&&a()});var e=d(b.container)?k.getContainer(b.container):b.container,f=(b.insertAfterEl?b.insertAfterEl.nextSibling:b.insertBeforeEl)||null;e.insertBefore(c,f)},q.prototype.destroy=function(){return this.window=null,h.prototype.destroy.call(this)},b.on=c.on,b.off=c.off,b.trigger=c.trigger,b}(fa),I=function(b){var c=i,d=F,e=G,f=fa,g=a.document,h=e.extend({name:null,loaderVersion:null,frame:null,origin:d.ensureHTTPSProtocol("https://disqus.com"),state:null,getUrl:function(a,b){return this.loaderVersion&&(b=c({version:this.loaderVersion},b)),d.ensureHTTPSProtocol(d.get(this.name,a,b))},getFrameSettings:function(){var a={target:this.getUrl(),origin:this.origin,uid:this.uid,sandbox:this.sandbox},b=this.settings;return b.windowName?a.windowName=b.windowName:a.container=b.container||g.body,a},getFrame:function(){var a=this.getFrameSettings(),b=a.windowName?f.Popup:f.Channel;return new b(a)},setState:function(a){var b=this.constructor;return a in b.states&&(this.state=b.states[a],void this.trigger("state:"+a))},init:function(){var a,b=this;b.frame=a=this.getFrame(),b.listenTo(a,"all",function(c,d){b.trigger("frame:"+c,d,a)}),b.trigger("change:frame",a),b.frame.load(function(){b.setState("LOADED")}),b.setState("INIT")},destroy:function(){var a=this.frame;a&&(this.stopListening(a),a.destroy()),this.setState("KILLED"),this.frame=null,e.prototype.destroy.call(this)},events:{"frame:ready":function(){this.setState("READY")}}},{states:{INIT:0,LOADED:1,READY:2,RUNNING:3,KILLED:4}});return h}({}),J=function(b){var c=p,d=E,e=v,f=I,g=fa,h=s,i=a.document,j=i.querySelector("html"),k=f.extend({getUrl:function(){var b=this.settings,c={f:b.forum,t_i:b.identifier,t_u:b.url||a.location.href,t_s:b.slug,t_e:b.title,t_d:b.documentTitle,t_t:b.title||b.documentTitle,t_c:b.category,s_o:b.sortOrder,l:b.language,d_m:b.depthMode};return b.unsupported&&(c.n_s=b.unsupported),f.prototype.getUrl.call(this,c)},getFrameInitParams:function(b){var c=this.settings,d={permalink:c.permalink,anchorColor:c.anchorColor,referrer:a.location.href,hostReferrer:i.referrer,canonicalUrl:c.canonicalUrl,colorScheme:c.colorScheme,typeface:c.typeface,remoteAuthS3:c.remoteAuthS3,apiKey:c.apiKey,sso:c.sso,parentWindowHash:a.location.hash,forceAutoStyles:c.forceAutoStyles,forceMobile:c.forceMobile,layout:c.layout,integration:c.integration,version:c.version,isPrivate:c.isPrivate,timestamp:this.timestamp,embedLoadTime:this.getBootloaderTimingInfo(),isHeightRestricted:this.isHeightRestricted()};return d.initialPosition=this.getViewportAndScrollStatus(),d},listenToScrollEvent:function(a){var b=this,c=b.getScrollContainer();if(c===j)return b.listenTo(g,"window.scroll",a),function(){b.stopListening(g,"window.scroll",a)};var d=g.throttle(function(){a.call(b)},250,50);return c.addEventListener("scroll",d),function(){c.removeEventListener("scroll",d)}},storeScrollContainer:function(){if(!this.settings.enableScrollContainer)return void(this.scrollContainer=j);var a,b,d=[];if(this.potentialScrollContainers)for(b=0;b<this.potentialScrollContainers.length&&(a=this.potentialScrollContainers[b],!(a.clientHeight<a.scrollHeight));b++)a=null;else{a=this.settings.container;do{var e=c(a,"overflow-y","overflowY");if(("scroll"===e||"auto"===e)&&(d.push(a),a.clientHeight<a.scrollHeight))break;a=a.parentNode}while(a&&a!==j)}a&&a!==i.body||(a=j),this.potentialScrollContainers||(this.potentialScrollContainers=d);var f=this.scrollContainer&&this.scrollContainer!==a;this.scrollContainer=a,f&&(this.stopListeningToScrollEvent&&this.stopListeningToScrollEvent(),this.stopListeningToScrollEvent=this.listenToScrollEvent(this.communicateViewportAndScrollStatus))},getScrollContainer:function(){return this.scrollContainer||this.storeScrollContainer(),this.scrollContainer},getViewportCoords:function(){return this.getScrollContainer()===j?this.getWindowCoords():this.getScrollContainerCoords()},getWindowCoords:function(){if("number"==typeof a.pageYOffset)this.getWindowScroll=function(){return a.pageYOffset},this.getWindowHeight=function(){return a.innerHeight};else{var b=j.clientHeight||j.clientWidth?j:i.body;this.getWindowScroll=function(){return b.scrollTop},this.getWindowHeight=function(){return b.clientHeight}}return this.getWindowCoords=function(){return{top:this.getWindowScroll(),height:this.getWindowHeight()}},this.getWindowCoords()},getScrollContainerCoords:function(){var a=this.getScrollContainer();return{top:a.scrollTop,height:a.clientHeight}},getBootloaderTimingInfo:function(){if(a.performance&&a.performance.getEntriesByName){var b=i.currentScript?i.currentScript.src:"https://"+this.settings.forum+".disqus.com/embed.js",c=a.performance.getEntriesByName(b)[0];return c&&c.duration}},getViewportAndScrollStatus:function(){var a=this.frame;if(!a||!a.getOffset)return null;if(!e(a.elem))return null;var b=this.getViewportCoords();return{frameOffset:a.getOffset(this.getScrollContainer()),pageOffset:b.top,height:b.height}},communicateViewportAndScrollStatus:function(){var a=this.getViewportAndScrollStatus();if(a){var b=a.frameOffset,c=b.top,d=c+b.height,e=a.pageOffset,f=a.height,g=e+f,h=!1,i=!1;c<=g+f&&(h=d>=e,i=h&&c<=g);var j=this.frame;j.sendMessage("window.scroll.always",a),h&&j.sendMessage("window.scroll",a),i!==this.wasInViewport&&(j.sendMessage(i?"window.inViewport":"window.scrollOffViewport"),this.wasInViewport=i)}},getBestNextFrameHeight:function(a){var b=this.getViewportAndScrollStatus();if(!b||this.settings.enableScrollContainer||!this.getScrollContainer())return a;var c=b.frameOffset;if(a>=c.height)return a;var e=d(),f=e-(c.height+c.top),g=b.pageOffset+b.height-(c.top+f);return g>a?g+1:a},isHeightRestricted:function(a){function b(){return h.appearsToHideContent(d)||f&&h.appearsToHideContent(e)}function c(){return h.appearsToHideContent(d)&&h.hasOverflow(d)||f&&h.appearsToHideContent(e)&&h.hasOverflow(e)}a=a||{};var d=this.settings.container,e=d.parentNode,f=e!==j&&e!==i.body;return a.checkScrollHeight?c():b()},events:{"state:INIT":function(){this.settings.degraded||(this.settings.windowName||(this.stopListeningToScrollEvent=this.listenToScrollEvent(this.communicateViewportAndScrollStatus),this.listenTo(g,"window.resize",this.communicateViewportAndScrollStatus)),this.timestamp=Number(new Date))},"state:LOADED":function(){var a=this.frame,b=a.elem;this.settings.degraded?(a.setInlineStyle("height","500px"),b.setAttribute("scrolling","yes"),b.setAttribute("horizontalscrolling","no"),b.setAttribute("verticalscrolling","yes"),a.show()):this.settings.windowName||(this.rendered=!1,a.setInlineStyle("height","0"),b.setAttribute("scrolling","no"),b.setAttribute("horizontalscrolling","no"),b.setAttribute("verticalscrolling","no"))},"frame:ready":function(a,b){var c=this.getFrameInitParams(a,b);b.sendMessage("init",c)},"frame:resize":function(a,b){var c=a.height;b.elem&&this.rendered&&(c=this.getBestNextFrameHeight(c),b.setInlineStyle("height",c+"px"),b.sendMessage("embed.resized")),this.storeScrollContainer(),this.communicateViewportAndScrollStatus()},"frame:rendered":function(a,b){this.rendered=!0,this.wasInViewport=!1,b.trigger("resize",a),b.sendMessage("embed.rendered")},"frame:fail":function(a,b){b.elem&&b.setInlineStyle("height",a&&a.height||"75px")},"frame:scrollTo":function(b,c){if(c.elem&&c.getOffset){var d=this.getScrollContainer(),e=c.getOffset(d),f="window"===b.relative?b.top:e.top+b.top,g=this.getViewportCoords();!b.force&&f>g.top&&f<g.top+g.height||(d===j?a.scrollTo(0,f):d.scrollTop=f)}}}});return k}({}),K=function(b){var c=p,d=da,e=s,f=F,g=I,h=a.document,i=/^calc\((.+)\)$/,j=g.extend({name:"home",events:{"frame:close":function(b,c){c.hide(),a.focus()},"frame:openReady":function(){this.frame.show(),this.frame.sendMessage("open"),(e.browser.isIE()||e.browser.isSafari())&&this.preventScrolling(),this.frame.elem&&this.frame.elem.focus()},"state:LOADED":function(){this.frame.removeInlineStyle("visibility")},"frame:after:render":function(){e.browser.isSafari()&&this.triggerHostReflow()}},preventScrolling:function(){var a=this.getBodyOverflow(),b=h.body.style.marginRight,d=h.documentElement.style,e=d.overflow;
this.listenToOnce(this,"frame:close",function(){this.setBodyStyles({overflow:a,marginRight:b}),d.overflow=e}),this.setBodyStyles({overflow:"hidden",marginRight:this.calcMargin(c(h.body,"margin-right","marginRight")||b)}),d.overflow="hidden"},triggerHostReflow:function(){var a=h.createElement("style");h.body.appendChild(a),h.body.removeChild(a)},calcMargin:function(a){var b=a.match(i);return b&&(a=b[1]),a?"calc("+a+" + "+e.getScrollbarWidth()+"px)":e.getScrollbarWidth()+"px"},setBodyStyles:function(a){for(var b in a)h.body.style[b]=a[b]},getBodyOverflow:function(){return h.body.style.overflow},getSecureOrigin:function(){return f.ensureHTTPSProtocol(j.SECURE_HOME_URL).split("/").slice(0,3).join("/")},getFrameSettings:function(){var a=g.prototype.getFrameSettings.call(this);return a.role="dialog",a.origin=this.getSecureOrigin(),a.styles={height:"100%",position:"fixed",top:0,right:0,left:"auto",bottom:"auto","z-index":e.MAX_Z_INDEX,visibility:"hidden"},a},getUrl:function(){var a=this.settings.path||"",b=this.settings.language,c={utm_source:"disqus_embed"};return b&&"en"!==b&&(c.l=b),d(f.apps[this.name]+a,c)},show:function(a){if(!this.frame.isReady())return void this.once("frame:ready",function(){this.show(a)},this);var b={disableMOTD:this.settings.disableMOTD,path:a};this.settings.sso&&(b.sso=this.settings.sso),this.frame.sendMessage("showPath",b)}},{SECURE_HOME_URL:"https://disqus.com/home/",READY_TIMEOUT:1e4,getInstanceOrLoad:function(a){var b=j.instance;return b?b:(b=j.instance=new j(a),a.preload&&b.listenToOnce(b,"state:INIT",function(){b.frame.hide()}),j.setHomeTimeout(b),b.init(),a.forum&&b.listenToOnce(b,"frame:ready",function(){b.frame.sendMessage("setForum",a.forum)}),b)},setHomeTimeout:function(a){j.homeTimeoutId&&clearTimeout(j.homeTimeoutId);var b=j.homeTimeoutId=setTimeout(function(){a.frame.destroy(),a.trigger("timeout")},j.READY_TIMEOUT);a.listenToOnce(a,"state:READY",function(){clearTimeout(b)})},preload:function(a){return a.preload=!0,j.getInstanceOrLoad(a)},destroy:function(){var a=j.instance;a&&(a.destroy(),j.instance=null)},show:function(a){var b=j.getInstanceOrLoad(a);return b.show(a.path),b}});return{show:j.show,preload:j.preload,destroy:j.destroy,HomeApp:j}}({}),L=function(b){var c=a.document,d=f,e=ea,g=i,h=v,k=w,l=j,m=D,n=x,o=J,p=fa,q=u,r=s,t=K,y=o.extend({name:"lounge",loaderVersion:l.getLoaderVersionFromUrl("https://c.disquscdn.com/next/embed/lounge.load.1a104dbd58e8322771ec614533d7cf2f.js"),indicators:null,wasInViewport:!1,triggeredSlowEvent:!1,events:{"state:INIT":function(){var b=this.settings,d=b.server_side;return d&&"fallback"===d.service&&l.logStat("embed.fallback"),b.degraded?void l.reportJester({imp:b.impressionId,experiment:b.experimentName,variant:b.experimentVariant,service:b.experimentService,forum:b.forum,version:this.loaderVersion,page_url:a.location.href,page_referrer:c.referrer,event:"activity",verb:"load",product:"embed",zone:"thread",section:"degraded",adjective:b.unsupported,object_type:"thread",object_id:b.identifier}):(this.indicators={},this.isContainerVisible()?this.addLoadingAnim():this.addLoadingAnimOnContainerVisible(),this.bindPublisherCallbacks(),void this.forwardGlobalEvents())},"state:LOADED":function(){this.isContainerVisible()&&this.addLoadingAnim()},"frame:reload":function(){a.location.reload()},"frame:navigate":function(b){a.location.href=b},"frame:session.identify":function(a){this.trigger("session.identify",a)},"frame:posts.paginate":function(){this.trigger("posts.paginate")},"frame:posts.count":function(a){this.trigger("posts.count",a)},"frame:posts.create":function(a){this.trigger("posts.create",{id:a.id,text:a.raw_message})},"frame:posts.beforeCreate":function(a){this.onBeforePostCreate(a)},"frame:home.destroy":function(){this.destroyHome()},"frame:home.preload":function(a){this.preloadHome(a)},"frame:home.show":function(a){this.showHome(a)},"frame:home.open":function(b){a.location=b},"frame:indicator:init":function(a,b){if(b.getOffset){for(var c,d,e=["north","south"],f=this.indicators,h=b.getOffset().width+"px",i={width:h,"min-width":h,"max-width":h,position:"fixed","z-index":r.MAX_Z_INDEX-1},j={north:{top:"0"},south:{bottom:"0"}},k=function(){b.sendMessage("indicator:click",this.uid.split("-")[1])},l=0;l<e.length;l++){d=e[l],c=new m({uid:"indicator-"+d,container:this.settings.container,contents:a[d].contents,styles:g(j[d],i),role:"alert",type:d});try{c.load()}catch(n){continue}c.hide(),c.click(k),f[d]=c}this.on({"frame:indicator:show":function(a){var b=f[a.type];b&&(b.document.getElementById("message").innerHTML=a.content,b.show())},"frame:indicator:hide":function(a){var b=a&&a.type,c=b&&f[b];if(c)c.hide();else if(!b)for(var d=0;d<e.length;d++)b=e[d],c=f[b],c&&c.hide()}})}},"frame:change:sort":function(a){r.storage.setItem("disqus.sort",a)},"frame:fail frame:rendered":function(){this.removeLoadingAnim(),this.setState("RUNNING")},"frame:fail":function(a){l.logStat("failed_embed.server."+a.code)},"frame:rendered":function(){this.triggeredSlowEvent&&l.logStat("rendered_embed.slow")},"frame:tracking:init":function(){var b=this,c=469;if(b.settings.isPrivate){var d=function(a,d){d&&(a.vendorConsents[c]&&a.purposeConsents[1]&&a.purposeConsents[2]&&a.purposeConsents[3]&&a.purposeConsents[4]&&a.purposeConsents[5]?(l.logStat("cmp.consent"),b.frame.sendMessage("cmp.consent")):l.logStat("cmp.no_consent"))};if(a.__cmp){l.logStat("cmp.present"),a.__cmp("getVendorConsents",[c],d);try{a.__cmp("addEventListener","onSubmit",function(){a.__cmp("getVendorConsents",[c],d)})}catch(e){}}}}},onceEvents:{"frame:viglink:init":function(b){var c=function(){for(var b in a)if(0===b.indexOf("skimlinks")||0===b.indexOf("skimwords"))return!0;return!1};if(!(a.vglnk_self||a.vglnk||c())){var d=b.apiUrl,f=b.key,g=String(b.id);null!=b.clientUrl&&null!=d&&null!=f&&null!=b.id&&(DISQUS.vglnk={api_url:d,key:f,sub_id:g},a.vglnk_self="DISQUS.vglnk",e(b.clientUrl))}}},getFrameInitParams:function(a,b){var c=o.prototype.getFrameInitParams.call(this,a,b);return c.experiment={experiment:this.settings.experimentName,variant:this.settings.experimentVariant,service:this.settings.experimentService},c.isBehindClick=this.isHeightRestricted()||!h(b.elem),c.startedFullyVisible=!1,this.whenFullyVisible(function(){c.startedFullyVisible=!0,b.sendMessage("frame.visible",{})}),c.discovery=this.settings.discovery,c.isHostIframed=this.settings.isHostIframed,c.sandboxAds=this.settings.sandboxAds,c.canDisableAds=this.settings.canDisableAds,c.homeDiscoveryEnabled=this.settings.homeDiscoveryEnabled,c.inthreadMinimumCommentCount=this.settings.inthreadMinimumCommentCount,c.inthreadShowAfterComment=this.settings.inthreadShowAfterComment,c.inthreadPlacementUrl=this.settings.inthreadPlacementUrl,c.inthreadLeadingCommentCount=this.settings.inthreadLeadingCommentCount,c.inthreadRepeatCommentCount=this.settings.inthreadRepeatCommentCount,c.inthreadTrailingCommentCount=this.settings.inthreadTrailingCommentCount,c.inthreadCountChildren=this.settings.inthreadCountChildren,c.inthreadMultipleAds=this.settings.inthreadMultipleAds,this.settings.impressionId&&(c.impressionId=this.settings.impressionId),(this.settings.discoveryDisabled||this.settings.isHostIframed)&&(c.discoveryDisabled=!0),c.depthMode=this.settings.depthMode,c.gifPickerEnabled=this.settings.gifPickerEnabled,c},onBeforePostCreate:function(a){var b={text:a.raw_message};try{var c=this.settings.callbacks.beforeComment;if(c)for(var d=0;d<c.length;d++)b=c[d](b)}catch(e){q.log("Error processing Disqus callback: ",e.toString())}finally{this.frame.sendMessage("posts.beforeCreate.response",b&&b.text)}},destroyHome:function(){t.destroy()},preloadHome:function(a){a.path="home/preload/";var b=this.home=t.preload(this.getHomeData(a));this.listenToOnce(b,"frame:ready",function(){this.frame.sendMessage("home.ready")}),this.handleHomeTimeout(b)},handleHomeTimeout:function(a){this.listenTo(a,"timeout",function(){this.frame.sendMessage("home.timeout")})},showHome:function(a){var b=this.home=t.show(this.getHomeData(a));this.listenToOnce(b,"frame:openReady",function(){this.frame.sendMessage("home.opened")}),this.handleHomeTimeout(b)},getHomeData:function(a){var b=this.settings;return a.language||(a.language=b.language),b.apiKey&&b.remoteAuthS3&&(a.sso={apiKey:b.apiKey,remoteAuthS3:b.remoteAuthS3}),a},forwardGlobalEvents:function(){var a=this;a.settings.windowName||(a.listenTo(p,"window.resize",function(){a.frame.sendMessage("window.resize")}),a.listenTo(p,"window.click",function(){a.frame.sendMessage("window.click")}),a.listenTo(p,"window.mousemove",function(){a.frame.sendMessage("window.mousemove")}),a.listenTo(p,"error",function(b){a.on("frame:rendered",function(){a.frame.sendMessage("error",b)})})),a.listenTo(p,"window.hashchange",function(b){a.frame.sendMessage("window.hashchange",b.hash)})},bindPublisherCallbacks:function(){var a=this,b=a.settings,c=y.LEGACY_EVENTS_MAPPING,e=b.callbacks;e&&d(e,function(b,e){c[e]&&d(b,function(b){a.on(c[e],b)})})},isContainerVisible:function(){var a=this.getViewportCoords(),b=n.getOffset(this.settings.container,this.getScrollContainer()),c=b.top+b.height-a.top;return c>0&&c<=a.height},pollFullyVisible:function(){var a=this;if(!a.pollingFullVisibility){a.pollingFullVisibility=!0;var b=a.isHeightRestricted(),c={};k(function(){return a.frame&&a.frame.elem?!(b&&!a.rendered)&&(h(a.frame.elem)&&!a.isHeightRestricted({checkScrollHeight:!0})):c},function(b){b!==c&&(a.fullyVisible=!0,a.trigger("fullyVisible"))},a.constructor.VISIBILITY_POLL_INTERVAL)}},whenFullyVisible:function(a){this.pollFullyVisible(),this.fullyVisible?a():this.once("fullyVisible",a)},showSlowLoadingMessage:function(){var a,b=this;if(b.loadingElem){if(r.pageVisibility.isHidden())return a=function(){r.pageVisibility.stopListening(a),b.setSlowLoadingMessageTimer(2e3)},void r.pageVisibility.listen(a);b.triggeredSlowEvent=!0,b.state===b.constructor.states.READY?l.logStat("slow_embed.got_ready"):b.state===b.constructor.states.LOADED?l.logStat("slow_embed.loaded"):l.logStat("slow_embed.no_ready"),b.loadingElem.firstChild.insertAdjacentHTML("afterend",'<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')}},clearSlowLoadingMessageTimer:function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},setSlowLoadingMessageTimer:function(a){var b=this;b.clearSlowLoadingMessageTimer(),b.timeout=setTimeout(function(){b.showSlowLoadingMessage()},a)},addLoadingAnimOnContainerVisible:function(){var a,b=this;a=b.listenToScrollEvent(function(){var c=b.isContainerVisible();(c||b.state>=b.constructor.states.RUNNING)&&a(),c&&b.addLoadingAnim()})},addLoadingAnim:function(){var a,b,d,e=this,f=e.settings.container;if(e.loadingElem)return e.loadingElem;if(!(e.state>=e.constructor.states.RUNNING||this.settings.degraded)){a=c.createElement("div"),b=c.createElement("div"),d=c.createElement("div"),b.appendChild(d),a.appendChild(b),a.dir="ltr",a.style.overflow="hidden";var g="dark"===e.settings.colorScheme,h=b.style;h.height="52px",h.width="54px",h.margin="0 auto",h.overflow="hidden",h.position="relative",h.background="url(https://c.disquscdn.com/next/embed/assets/img/loader-bg.173909e4737a7481df14d5492b5eeb48.png) no-repeat",g&&(h.backgroundPosition="0 -52px");var i=13,j=g?"rgba(223, 228, 237, .4)":"rgba(51, 54, 58, .4)",k=d.style;h.boxSizing=k.boxSizing="border-box",k.height=k.width=2*i+"px",k.position="absolute",k.top="13px",k.left="15px",k.borderWidth="3px",k.borderStyle="solid",k.borderColor=j+" transparent",k.borderRadius=i+"px",k.transformOrigin="50% 50% 0px";var m="transform"in k?{js:"transform",css:"transform"}:{js:"webkitTransform",css:"-webkit-transform"};return k.transition=m.css+" 700s linear",setTimeout(function(){k[m.js]="rotate(360000deg)"},16),f.appendChild(a),e.loadingElem=a,l.logStat("lounge.loading.view"),e.setSlowLoadingMessageTimer(15e3),e.loadingElem}},removeLoadingAnim:function(){var a=this.loadingElem,b=this.settings.container;this.clearSlowLoadingMessageTimer(),a&&a.parentNode===b&&(b.removeChild(a),this.loadingElem=null)},destroy:function(){var a=this.indicators;this.removeLoadingAnim(),a&&a.north&&(a.north.destroy(),a.north=null),a&&a.south&&(a.south.destroy(),a.south=null),o.prototype.destroy.call(this)}},{LEGACY_EVENTS_MAPPING:{onReady:"frame:rendered",onNewComment:"posts.create",onPaginate:"posts.paginate",onCommentCountChange:"posts.count",onIdentify:"session.identify"},VISIBILITY_POLL_INTERVAL:500}),z=function(a){return new y(a)};return{Lounge:z}}({}),M=function(a,b,c){var d,e,f,g,h,i=function(){var j=(new Date).getTime()-g;j<b&&j>=0?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,g=(new Date).getTime();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},N=function(a,b){for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1},O=function(a,b,c){for(var d=0;d<a.length;++d)if(b.call(c,a[d],d,a))return!0;return!1},P=function(a){return"[object Function]"===Object.prototype.toString.call(a)},Q=function(a){return function(b,c,d){var e=null===b||void 0===b?void 0:b[c];return void 0===e&&(e=d),a(e)?e.call(b):e}}(P),R=function(a){return Boolean(a&&1===a.nodeType)},ga=function(a,b,c){return a.getElement=function(a){return b(a)?a:a&&a.el},a.EL_ID_ATTR="data-visibility-id",a.OBJ_ID_PROP="_visibility_id",a.getId=function(d){var e=null;return b(d)?(e=d.getAttribute(a.EL_ID_ATTR)||null,e||(e=c(),d.setAttribute(a.EL_ID_ATTR,e))):d&&(e=d[a.OBJ_ID_PROP]||null,e||(e=d[a.OBJ_ID_PROP]=c())),e},a.visiblePercent=function(a,b){var c=0;if(!b)return c;var d=a.top,e=d+a.height,f=b.visibleTop<d,g=b.visibleBottom>e;return!f&&!g||f&&g?c=1:f?c=(b.height-(d-b.visibleTop))/b.height:g&&(c=(e-b.visibleTop)/b.height),Math.round(100*c)},a}(ga,R,y),ha=function(c,d,e,f,g,h){return h.events=[],h.lastPos=null,h.clearCache=function(a){if(a===b)h.getElementOffset.cache={};else{var c=g.getId(a);c&&(h.getElementOffset.cache[c]=null)}},h.calculateOffset=function(b){if(!b)return null;if(!e(b))return null;var c=b.ownerDocument.documentElement;return{height:b.offsetHeight,top:b.getBoundingClientRect().top+a.pageYOffset-(c.clientTop||0)}},h._getElementOffset=function(a){var b=g.getElement(a);if(!b)return null;var c=h.calculateOffset(b);return c?{visibleTop:c.top+(f(a,"topEdgeOffset")||0),visibleBottom:c.top+c.height-(f(a,"bottomEdgeOffset")||0),offsetTop:c.top,height:c.height}:null},h.getElementOffset=function(){var a=function(b){var c=a.cache,d=g.getId(b);if(d&&c[d])return c[d];var e=h._getElementOffset(b);return d&&e&&(c[d]=e),e};return a.cache={},a}(),h.EVENT_NAMES=["enter","exit","visible","invisible","all"],h.updateTracking=function(a){var e,f=function(a){return a?function(b){return a[b]}:function(){return b}};d(h.EVENT_NAMES,f(a._events))?(e=c(h.events,a),e===-1&&h.events.push(a)):(e=c(h.events,a),e!==-1&&h.events.splice(e,1))},h.processEvents=function(a){h.lastPos=a;var b=h.events;if(b.length)for(var c=b.length-1;c>=0;--c){var d=b[c],e=d.isVisible(a);null!==e&&(e!==d.lastVisible&&d.trigger(e?"enter":"exit",d,a),d.trigger(e?"visible":"invisible",d,a),d.lastVisible=e)}},h}(N,O,v,Q,ga,ha),S=function(b,c,d,e,f){function g(a){return this instanceof g?(this.obj=a,void(this.lastVisible=!1)):new g(a)}var h=c(function(){f.processEvents(f.lastPos)},250);return e(g.prototype,b,{on:function(a){var c=!(this._events&&this._events[a]),d=b.on.apply(this,arguments);return c&&f.updateTracking(this),h(),d},off:function(a){var c=b.off.apply(this,arguments);return this._events&&this._events[a]||f.updateTracking(this),c},offset:function(){return f.getElementOffset(this.obj)},isVisible:function(a){if(a=a||f.lastPos,!a)return null;var b=a.top,c=b+a.height,d=this.offset();return!!d&&(d.offsetTop>=b&&d.visibleTop<c||d.offsetTop+d.height<=c&&d.visibleBottom>b)},invalidate:function(){return f.clearCache(this.obj),this}}),e(g,{invalidate:f.clearCache,scroll:f.processEvents,_windowScrollHandlerBound:!1,_ignoreCache:!1,_windowScrollHandler:d(function(){g._ignoreCache&&g.invalidate(),f.processEvents({top:a.pageYOffset,height:a.document.documentElement.clientHeight})},250),bindWindowEvents:function(b){this._windowScrollHandlerBound||("undefined"!=typeof b&&(g._ignoreCache=b),a.addEventListener("scroll",this._windowScrollHandler),a.addEventListener("resize",this._windowScrollHandler),this._windowScrollHandlerBound=!0,this._windowScrollHandler())},unbindWindowEvents:function(){g._ignoreCache=!1,a.removeEventListener("scroll",this._windowScrollHandler),a.removeEventListener("resize",this._windowScrollHandler),this._windowScrollHandlerBound=!1}}),g}(z,M,H,i,ha),T=function(a){return a}(S),ia=function(a){return a=function(a,b){var c=null,d=!1;this.start=function(){d||(c=setTimeout(function(){d=!0,a()},b))},this.clear=function(){clearTimeout(c)}}}(ia),U=function(){function a(a){if(a=Number(a),isNaN(a)||a>255)throw new Error("Color components should be numbers less than 256");return a=a.toString(16),1===a.length?"0"+a:String(a)}return function(b){return"#"+a(b.red)+a(b.green)+a(b.blue)}}(),V=function(){var a=["allow-forms","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts","allow-top-navigation"],b=function(b){return b?a.reduce(function(a,c){return b[c]&&(a+=c+" "),a},"").trim():""};return{getAttribute:b}}(),W=function(b){return function(c){"undefined"==typeof c&&(c=a.location.search);var d={};return b(c.substr(1).split("&"),function(a){var b=a.split("=").map(function(a){return decodeURIComponent(a.replace(/\+/g,"%20"))});b[0]&&(d[b[0]]=b[1])}),d}}(f),X=function(){var b={},c=a.document.createElement("a");return b.getOrigin=function(a){c.href=a;var b=c.href.split("/");return b[0]+"//"+b[2]},b.getHostName=function(a){return c.href=a,c.hostname},b.getDomainPart=function(a,c){"undefined"==typeof c&&(c=0);var d=b.getHostName(a),e=d.split(".").reverse();return e[c]},b.getQuery=function(a){return c.href=a,c.search},b.getPathname=function(a){return c.href=a,c.pathname},b}(),Y=function(){var a=function(a){return null!==a&&!isNaN(Number(a))&&isFinite(a)},b=function(a){return Math.min.apply(Math,c(a))||0},d=function(a){return Math.max.apply(Math,c(a))||0};return{min:b,max:d,isNumeric:a}}();var ka=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Z=function(a){var b=function(){function b(){return d(this,b),1!==arguments.length||a.isNumeric(arguments[0])?void this.fromArray(arguments):Array.isArray(arguments[0])?this.fromArray(arguments[0]):this.fromObject(arguments[0])}return ka(b,[{key:"fromArray",value:function(a){this.reset(),a.length>=6?(this.top=a[0],this.right=a[1],this.bottom=a[2],this.left=a[3],this.width=a[4],this.height=a[5]):a.length>=4?(this.top=a[0],this.right=a[1],this.bottom=a[2],this.left=a[3]):3===a.length?(this.top=a[0],this.right=a[1],this.bottom=a[2],this.left=0):2===a.length?(this.top=a[0],this.right=a[1],this.bottom=a[0],this.left=a[1]):(this.top=a[0],this.right=a[0],this.bottom=a[0],this.left=a[0]),this.update()}},{key:"fromObject",value:function(a){return this.fromArray([a.top,a.right,a.bottom,a.left,a.width,a.height])}},{key:"update",value:function(){this.width||(this.width=this.right-this.left),this.height||(this.height=this.bottom-this.top)}},{key:"reset",value:function(a){a=a||0,this.top=a,this.right=a,this.bottom=a,this.left=a,this.width=a,this.height=a}},{key:"getArea",value:function(){return(this.right-this.left)*(this.bottom-this.top)}}]),b}();return b.getOverlapRect=function(c,d){var e=a.max([c.left,d.left]),f=a.min([c.left+c.width,d.left+d.width]),g=a.max([c.top,d.top]),h=a.min([c.top+c.height,d.top+d.height]);return f>=e&&h>=g&&new b(g,f,h,e,f-e,h-g)},b.getOverlapArea=function(b,c){var d=a.max([0,a.min([b.right,c.right])-a.max([b.left,c.left])]),e=a.max([0,a.min([b.bottom,c.bottom])-a.max([b.top,c.top])]);return d*e},b}(Y),$=function(b){var c=9,d=function(a){return a&&a.parentNode},e=function(b,c){if(!b)return null;var d=a.document.defaultView.getComputedStyle(b);return c&&d.hasOwnProperty(c)?d[c]:d},f=function(){return{x:a.pageXOffset,y:a.pageYOffset}},g=function(a){var c=void 0;if(a&&a.style){var d=a.style.display;a.style.display="block",c=a.getBoundingClientRect(),a.style.display=d,c=new b(c);var e=f();c.left+=e.x,c.right+=e.x,c.top+=e.y,c.bottom+=e.y}else c=new b(0);return c},h=function(a,b){var c=g(a);if(b){var d=g(b);c.top=d.top-d.top+b.scrollTop,c.bottom=c.top+c.height+b.scrollTop,c.left=c.left-d.left+b.scrollLeft,c.right=c.left+c.width+b.scrollLeft}return c},i=function(){var c=f(),d=c.y,e=c.x+a.innerWidth,g=c.y+a.innerHeight,h=c.x,i=a.innerWidth,j=a.innerHeight;return new b(d,e,g,h,i,j)},j=function(a){try{return a.nodeType===c?a:a.ownerDocument}catch(b){return null}},k=function(b){var c=j(b),d=void 0;try{c&&(d=c.parentWindow||c.defaultView||a)}catch(e){d=a}return d},l=function(a){var c=k(a),d=new b(0,c.innerWidth,c.innerHeight,0,c.innerWidth,c.innerHeight),e=f();return d.left+=e.x,d.right+=e.x,d.top+=e.y,d.bottom+=e.y,d},m=function(a){var b=j(a);if(b)return b.documentElement||b.body},n=function(a){var c=m(a)||{},d=new b;return d.right=d.width=c.scrollWidth||0,d.bottom=d.height=c.scrollHeight||0,d},o=function(a,b){for(;b;){if(b===a)return!0;b=b.parentNode}return!1},p=function(a){var b=e(a);return"inline-block"===b.display||"none"!==b["float"]||"absolute"===b.position||"fixed"===b.position||"auto"!==b.width||"auto"!==b.height},q=function(a){var b=e(a),c={};return"scroll"===b.overflowX||"auto"===b.overflowX?c.xscroll=a.offsetWidth-a.clientWidth:c.xscroll=0,"scroll"===b.overflowY||"auto"===b.overflowY?c.yscroll=a.offsetHeight-a.clientHeight:c.yscroll=0,c.xhidden="hidden"===b.overflowX,c.yhidden="hidden"===b.overflowY,c},r=function(a){var b=e(a);return!!(b.clip&&"auto"!==b.clip||b.clipPath&&"none"!==b.clipPath)};return{getParentNode:d,getWindow:k,getScroll:f,getRect:g,getRectRelativeTo:h,getViewportRect:i,getDocument:j,getWindowRect:l,getRootNode:m,getRootRect:n,getNodeStyle:e,isParentOf:o,hasLayout:p,getNodeOverflow:q,isNodeClipped:r}}(Z);var ka=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();_=function(b,c){var e=1,f=function(){function f(a){d(this,f),this.node=a,this.document=b.getDocument(a),this.window=b.getWindow(a),this.root=b.getRootNode(a),this.ref=this.getRefNode(a.parentNode)}return ka(f,[{key:"getRefNode",value:function(a){for(;a&&a.nodeType===e;){var c=b.getNodeStyle(a);if(b.hasLayout(a)||"block"===c.display||"none"!==c.clear){var d=b.getNodeOverflow(a);if(d.xscroll||d.yscroll||d.xhidden||d.yhidden)return a;if(b.isNodeClipped(a))return a}a=a.parentNode}return this.root}},{key:"getNodesOver",value:function(d,f){f=f||1;var g=[],h=b.getRect(d),i=b.getRect(this.ref),j=b.getViewportRect(d);if(!a.document.elementFromPoint)return g;for(var k={top:c.max([h.top,i.top])-j.top,right:c.min([h.right,i.right])-j.left,bottom:c.min([h.bottom,i.bottom])-j.top,left:c.max([h.left,i.left])-j.left},l=(k.right-k.left)/10,m=(k.bottom-k.top)/10,n=k.left;n<k.right;n+=l)for(var o=k.top;o<k.bottom;o+=m){for(var p=a.document.elementFromPoint(n,o);p&&p.nodeType===e;){var q=b.getNodeStyle(p);if(b.hasLayout(p)||"block"===q.display||"none"!==q.clear)break;p=p.parentNode}p&&p.nodeType===e&&p!==this.node&&p!==this.root&&!b.isParentOf(p,this.node)&&(g.push(p),g.length>=f&&(n=k.right,o=k.bottom))}return g}},{key:"getWindowGeom",value:function(){var a=this.window.innerHeight||0,b=this.window.innerWidth||0,c=this.window.screenY||this.window.screenTop||0,d=c+a,e=this.window.screenX||this.window.screenLeft||0,f=e+b;return{t:c,r:f,b:d,l:e,w:b,h:a}}},{key:"getSelfGeom",value:function(){var a=b.getRect(this.node),d=b.getRect(this.ref),e=b.getNodeStyle(this.node),f=b.getWindowRect(this.node),g=a.width,h=a.height;this.ref!==this.root&&(g=c.max([0,c.min([a.right,d.right])-c.max([a.left,d.left])]),h=c.max([0,c.min([a.bottom,d.bottom])-c.max([a.top,d.top])]));var i=c.max([0,c.min(a.right,f.right)-c.max([a.left,f.left])]),j=c.max([0,c.min([a.bottom,f.bottom])-c.max([a.top,f.top])]),k=c.min([g,i]),l=c.min([h,j]),m=a.width?k/a.width:0,n=a.height?l/a.height:0,o=k*l/(a.width*a.height),p=1,q=this.getNodesOver(this.node,p);if(q.length){var r=b.getRect(q[0]),s=c.max([0,c.min([r.right,a.right])-c.max([r.left,a.left])]),t=c.max([0,c.min([r.bottom,a.bottom])-c.max([r.top,a.top])]);o=c.max([0,(k*l-s*t)/(a.width*a.height)])}var u=b.getScroll();return{t:a.top-u.y,r:a.right-u.x,b:a.bottom-u.y,l:a.left-u.x,z:e.zIndex,w:a.width,h:a.height,xiv:1===m?"1":Number(m).toFixed(2),yiv:1===n?"1":Number(n).toFixed(2),iv:1===o?"1":Number(o).toFixed(2)}}},{key:"getExpandGeom",value:function(){var a=b.getRect(this.ref),d=b.getRect(this.node),e=b.getWindowRect(this.node),f={top:c.max([a.top,e.top]),right:c.min([a.right,e.right]),bottom:c.min([a.bottom,e.bottom]),left:c.max([a.left,e.left])},g=b.getNodeOverflow(this.ref);return{t:c.max([0,d.top-f.top]),r:c.max([0,f.right-d.right]),b:c.max([0,f.bottom-d.bottom]),l:c.max([0,d.left-f.left]),xs:Boolean(g.yscroll),yx:Boolean(g.xscroll)}}},{key:"getGeom",value:function(){return{win:this.getWindowGeom(),self:this.getSelfGeom(),exp:this.getExpandGeom()}}}]),f}(),g={get:function(a){var b=new f(a);return b.getGeom()}};return g}($,Y),aa=function(c){var d=F,e=I,f=A,g=S,h=ga,k=ia,l=U,m=i,n=V,o=W,p=da,q=X.getOrigin,r=X.getQuery,s=j,t=B,u=_,v={adsnative:160465,prebid:160465,displayonly:160465,gravity:184723,taboola:184193,outbrain:185359,lq:160465},w=e.extend({name:"ads",origin:b,onceEvents:{"view:enter":function(){this._reportLegacy({verb:"view",adverb:"0ms-no50perc"})},"view:iab":function(){this._reportLegacy({verb:"view",adverb:"iab-scroll"})}},events:{"frame:ready":function(a){this.forumId=a.forumId,this._reportOnce({verb:"load",extra_data:a.extraData},"load"),this.bindViewEvents(),this.triggerGeomUpdate()},"frame:resize":function(a){this.frame.setInlineStyle("height",a.height+"px"),this.triggerGeomUpdate()},"frame:click":function(){this._reportOnce({verb:"click"},"click")},"frame:hover":function(){this._reportOnce({verb:"hover"},"hover")},"frame:error-provider-not-ready":function(){this._reportLegacy({verb:"fail",object_type:"provider",object_id:this.getProvider(),adverb:"provider_not_ready"})},"frame:error-no-height":function(){this._reportLegacy({verb:"fail",object_type:"provider",object_id:this.getProvider(),adverb:"no_height"})},"frame:clearSandbox":function(){this.frame.elem.hasAttribute("sandbox")&&this.frame.elem.removeAttribute("sandbox")},"frame:redirect":function(a){this.frame.elem.src=a},"frame:logAd":function(a){this._report(a,{usePOST:!0})},"frame:$sf-init":function(){this.isSafeframe=!0},"frame:error":function(a){this.postMessageDirect({event:"error",data:{error:a}})}},constructor:function(){e.apply(this,arguments),this.origin=q(this.settings.adUrl),this._reportOnceHistory={}},init:function(){if(!this.settings.isHostIframed&&(this.settings.forum=o(r(this.settings.adUrl)).shortname,this.settings.forum)){var b=this.settings.discovery,c=b&&(b.disable_all||b.disable_promoted),f=0===a.location.href.indexOf(d.apps.home);!f&&c&&this.settings.canDisableAds||(this._reportOnce({verb:"call",object_type:"provider",object_id:this.getProvider(),adjective:1},"call"),this.settings.sandboxAds&&(this.sandbox=n.getAttribute({"allow-scripts":!0,"allow-same-origin":!0,"allow-forms":!0,"allow-popups":!0})),e.prototype.init.call(this))}},getProvider:function(){if(this._provider)return this._provider;var a=this.settings.adUrl.match(/provider=(\w+)/);return a&&(this._provider=a[1]),this._provider},getUrl:function(){var b=this.settings;return p(b.adUrl,{anchorColor:l(b.anchorColor),colorScheme:b.colorScheme,sourceUrl:a.document.location.href,typeface:b.typeface,canonicalUrl:b.canonicalUrl,disqus_version:b.version})},triggerGeomUpdate:function(){if(this.frame.elem&&this.isSafeframe){var a=u.get(this.frame.elem);this.postMessageDirect({event:"geom-update",data:{geom:a}})}},bindViewEvents:function(){if(!this._viewEventsBound){this._viewEventsBound=!0,g.bindWindowEvents(!0);var a=this,b=function(b,c){a.postMessageDirect({event:b,percentViewable:c})},c=1e3,d=new k(function(){a.trigger("view:iab"),b("view:iab")},c),e=!1;this.listenTo(g({el:this.frame.elem}),{enter:function(){a.trigger("view:enter"),b("view:enter"),a.triggerGeomUpdate()},exit:function(){b("view:exit"),e&&(e=!1,b("view:50out"),d.clear()),a.triggerGeomUpdate()},visible:function(c,f){var g=h.visiblePercent(f,c.offset());g>=50&&!e?(e=!0,b("view:50in"),d.start()):g<50&&e&&(e=!1,b("view:50out"),d.clear()),b("view",g),a.triggerGeomUpdate()}})}},postMessageDirect:function(a){this.frame.requiresWindow(function(a){var b=f.stringify(m({},a,{space:"disqus"}));t.postMessage(this.window,b,this.origin),t.postMessage(this.window,"disqus."+a.event,this.origin)})(a)},_report:function(c){var d=arguments.length>1&&arguments[1]!==b?arguments[1]:{},e=this.settings,f=this.getProvider();c.forum_id=e.forumId||this.forumId;var g=d.usePOST?"reportJesterPOST":"reportJester";s[g](m({imp:e.impressionId,experiment:e.experimentName,variant:e.experimentVariant,service:e.experimentService,area:e.placement,product:"embed",forum:e.forum,zone:"thread",version:s.getLoaderVersionFromUrl("https://c.disquscdn.com/next/embed/lounge.load.1a104dbd58e8322771ec614533d7cf2f.js"),page_url:a.document.location.href,page_referrer:a.document.referrer,object_type:"advertisement",provider:f,event:"activity"},c))},_reportLegacy:function(a){var b=this.settings,c=this.getProvider();this._report(m({advertisement_id:v[c],ad_product_name:"iab_display",ad_product_layout:"iab_display",bin:"embed:promoted_discovery:"+b.experimentService+":"+b.experimentName+":"+b.experimentVariant,object_id:"["+v[c]+"]",section:"default"},a))},_reportOnce:function(a,b){this._reportOnceHistory[b]||(this._reportLegacy(a),this._reportOnceHistory[b]=!0)},getFrameSettings:function(){var a=e.prototype.getFrameSettings.call(this);return a.insertBeforeEl=this.settings.insertBeforeEl,a.insertAfterEl=this.settings.insertAfterEl,a}}),x=function(a){return new w(a)};return{Ads:x}}({}),ja=function(c){var d=g,e=h,f=i,k=j,l=t.HostConfig,m=u,n=L,o=aa,p=new l(a);c.configAdapter=p;var q=[],r=!1,s=e(a),v=c.removeDisqusLink=function(){var b=a.document;if(b.getElementsByClassName){if("complete"!==b.readyState)return a.addEventListener("load",v);var c=b.getElementsByClassName("dsq-brlink"),d=c&&c.length&&c[0];d&&d.parentNode.removeChild(d)}};c.VERSION="fd9ee73",c.loadEmbed=function(a){if(q.length)return y({reload:!0}),m.log("Use DISQUS.reset instead of reloading embed.js please."),void m.log("See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites");p.configurator=a;var b=p.toJSON();b.version=c.VERSION,r||(b.container.innerHTML="",r=!0),c.loadApps(b),c.removeDisqusLink()};var w=function(){for(var a;a=q.pop();)a.triggeredSlowEvent&&a.state!==a.constructor.states.RUNNING&&k.logStat("reset_embed.slow"),a.destroy()},x=function(b){w();var c=n.Lounge(f({},b,{discoveryDisabled:b.bottomPlacementUrl&&!b.homeDiscoveryEnabled,isHostIframed:s}));q.push(c),c.init();var d=function(a){c.whenFullyVisible(a)},e=function(a){return b.adBlockEnabled?a.replace(/\/(adsnative|prebid)/,"/taboola").replace(/\/\/tempest.disquss.com\//,"//disqusads.com/"):a};if(b.outsidePlacementUrl){var g=a.document.getElementById("disqus_ad");if(g){var h=o.Ads(f({adUrl:b.outsidePlacementUrl,placement:"outside"},b,{isHostIframed:s,container:g}));q.push(h),h.init()}}var i=null;if(b.topPlacementUrl&&(b.topPlacementUrl=e(b.topPlacementUrl),i=o.Ads(f({adUrl:b.topPlacementUrl,placement:"top"},b,{isHostIframed:s,insertBeforeEl:c.frame.elem})),q.push(i),d(function(){i.init()})),b.bottomPlacementUrl&&!b.homeDiscoveryEnabled){b.bottomPlacementUrl=e(b.bottomPlacementUrl);var j=o.Ads(f({adUrl:b.bottomPlacementUrl,placement:"bottom"},b,{
isHostIframed:s,insertAfterEl:c.frame.elem}));q.push(j),d(function(){null===i?j.init():j.listenToOnce(i,"frame:ready",function(){j.init()})})}};c.loadApps=function(a){a.adBlockEnabled===b?d(function(b){a.adBlockEnabled=b,x(a)}):x(a)};var y=c.reset=function(a){a=a||{},w(),a.reload&&c.loadEmbed(a.config)};return c}(ja),ba=function(b){var c=a.document,d=a.DISQUS||{},e=ea;d.reset||(d.reset=ja.reset),d.request||(d.request={}),d.request.get||(d.request.get=function(a,b,c){e(a,b,c)}),d.host||(d.host={}),d.host._loadEmbed||(d.host._loadEmbed=ja.loadEmbed),a.DISQUS=d;var f=c.createElement("link");f.rel="prefetch";try{f.relList.supports("preload")&&(f.rel="preload")}catch(g){}var h=function(a,b){var d=f.cloneNode();return d.as=b||"script",d.pr=1,d.href=a,c.head.appendChild(d),d};h("https://c.disquscdn.com/next/embed/styles/lounge.5ba6e9cd2303dd1f62b0ffa27f19e09d.css","style"),h("https://c.disquscdn.com/next/embed/common.bundle.505b628fe4a369d7faa766dd8c23b076.js"),h("https://c.disquscdn.com/next/embed/lounge.bundle.cc9b481c9f61ae3665ad4c9ae9e9840f.js"),h("https://disqus.com/next/config.js")}({})}(this),this.DISQUS.host._loadEmbed();

} // disqus_embed = function () {

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/highlight/default.css":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/highlight/default.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./default.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/highlight/default.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/highlight/highlight.js":
/*!*********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/highlight/highlight.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/
//hljs = function () {}

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;
  
  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(false) {} else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});
    
    // Finally register the global hljs with AMD.
    if(true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return globalObject.hljs;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  // The object will be assigned by the build tool. It used to synchronize API 
  // of external language files with minified version of the highlight.js library.
  var API_REPLACES;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function restoreLanguageApi(obj) {
    if(API_REPLACES && !obj.langApiRestored) {
      obj.langApiRestored = true;
      for(var key in API_REPLACES)
        obj[key] && (obj[API_REPLACES[key]] = obj[key]);
      (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
    }
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
      }
      return ret;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(?:' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(joinRe(terminators, '|'), true) : {exec: function(/*s*/) {return null;}};
    }
    
    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          if (mode.contains[i].endSameAsBegin) {
            mode.contains[i].endRe = escapeRe( mode.contains[i].beginRe.exec(lexeme)[0] );
          }
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          if (end_mode.endSameAsBegin) {
            end_mode.starts.endRe = end_mode.endRe;
          }
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    restoreLanguageApi(lang);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/highlight/init.js":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/highlight/init.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 語法標亮
 * @author https://highlightjs.org/usage/ 20160928
 */
$(function(){
    $("article code").each(function (_i, _code) {
        _code = $(_code);
        if (_code.parent().filter("pre").length === 0) {
            _code.wrap("<pre></pre>");
        }
    });
    
    /*
    $("head").append($("<link />").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "//pulipulichen.github.io/blogger/blogger/lib/highlight/default.min.css"
        //media: "screen"
    }));
    
    $.getScript("//pulipulichen.github.io/blogger/blogger/lib/highlight/highlight.min.js", function () {
        hljs.initHighlightingOnLoad();
    });
    */
    
    hljs.initHighlightingOnLoad();
});

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css":
/*!**************************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./lightbox.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js":
/*!*****************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 加入圖片的lightbox
 * @author http://lokeshdhakar.com/projects/lightbox2/#getting-started 20160928
 */
$(function(){
    if (document.body.clientWidth < 460) {
        $.each($("article a:has(img)"), function(_i){
            $(this).attr("target", "_blank");
        });
        return;
    }
    
    $.each($("article a:has(img)"), function(_i){
        var _title = "image";
        if ($(this).attr("title") !== undefined) {
            _title = $(this).hasAttr("title");
        }
        _title = _title + _i;
        
        if ($(this).attr("href").indexOf("amazon.com") === -1) {
            $(this).addClass("lightbox-group")
                .attr("href", $(this).attr("href").replace(/s1600-h/g, "s1600"))
                .attr("data-lightbox", _title);
        }
    });
    
    /*
    $("head").append($("<link />").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/lightbox2-lokeshdhakar/css/lightbox.min.css"
        //media: "screen"
    }));
    
    $.getScript("//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/lightbox2-lokeshdhakar/js/lightbox.min.js", function () {
        lightbox.option({
            'disableScrolling': true
        });
        $("#lightbox .lb-nav").click(function () {
            var _src = $(this).prev().attr("src");
            //console.log(_src);
            if (_src !== undefined) {
                window.open(_src);
            }
        });
    });
    */
    
    lightbox.option({
        'disableScrolling': true
    });
    $("#lightbox .lb-nav").click(function () {
        var _src = $(this).prev().attr("src");
        //console.log(_src);
        if (_src !== undefined) {
            window.open(_src);
        }
    });
});

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js":
/*!************************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Lightbox v2.8.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
  /*
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
    */
    lightbox = factory($);
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 500,
    fitImagesInViewport: true,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    this.enable();
    this.build();
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    jQuery('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start(jQuery(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    var self = this;
    jQuery('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(jQuery('body'));

    // Cache jQuery objects
    this.$lightbox       = jQuery('#lightbox');
    this.$overlay        = jQuery('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');

    // Store css values for future lookup
    this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10);
    this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10);
    this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10);
    this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10);

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if (jQuery(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$outerContainer.on('click', function(event) {
      if (jQuery(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = jQuery(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    jQuery('select, object, embed').css({
      visibility: 'hidden'
    });

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = jQuery($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum(jQuery($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = jQuery($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum(jQuery($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      jQuery('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;

    this.disableKeyboardNav();
    var $image = this.$lightbox.find('.lb-image');

    this.$overlay.fadeIn(this.options.fadeDuration);

    jQuery('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr('src', self.album[imageNumber].link);

      $preloader = jQuery(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);

      if (self.options.fitImagesInViewport) {
        // Fit image inside the viewport.
        // Take into account the border around the image and an additional 10px gutter on each side.

        windowWidth    = jQuery(window).width();
        windowHeight   = jQuery(window).height();
        maxImageWidth  = windowWidth - self.containerLeftPadding - self.containerRightPadding - 20;
        maxImageHeight = windowHeight - self.containerTopPadding - self.containerBottomPadding - 120;

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
          maxImageHeight = self.options.maxHeight;
        }

        // Is there a fitting issue?
        if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
          if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
            imageWidth  = maxImageWidth;
            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          } else {
            imageHeight = maxImageHeight;
            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          }
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    preloader.src          = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    this.$overlay
      .width(jQuery(document).width())
      .height(jQuery(document).height());
  };

  // Animate the size of the lightbox to fit the image we are showing
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerLeftPadding + this.containerRightPadding;
    var newHeight = imageHeight + this.containerTopPadding + this.containerBottomPadding;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);
      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn('slow');

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      this.$lightbox.find('.lb-caption')
        .html(this.album[this.currentImageIndex].title)
        .fadeIn('fast')
        .find('a').on('click', function(event) {
          if (jQuery(this).attr('target') !== undefined) {
            window.open(jQuery(this).attr('href'), jQuery(this).attr('target'));
          } else {
            location.href = jQuery(this).attr('href');
          }
        });
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    jQuery(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    jQuery(document).off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    var key     = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this.end();
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    jQuery(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    jQuery('select, object, embed').css({
      visibility: 'visible'
    });
    if (this.options.disableScrolling) {
      jQuery('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/disqus/disqus.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/disqus/disqus.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#comments { \n  display:none; \n}\n.post-comment-link { \n  visibility: hidden; \n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/highlight/default.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/highlight/default.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\nOriginal highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #F0F0F0;\n}\n\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #444;\n}\n\n.hljs-comment {\n  color: #888888;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-type,\n.hljs-string,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #880000;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #880000;\n  font-weight: bold;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #BC6060;\n}\n\n\n/* Language color: hue: 90; */\n\n.hljs-literal {\n  color: #78A960;\n}\n\n.hljs-built_in,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* Preload images */\nbody:after {\n  content: url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png);\n  display: none;\n}\n\nbody.lb-disable-scrolling {\n  overflow: hidden;\n}\n\n.lightboxOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background-color: black;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  opacity: 0.8;\n  display: none;\n}\n\n.lightbox {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 10000;\n  text-align: center;\n  line-height: 0;\n  font-weight: normal;\n}\n\n.lightbox .lb-image {\n  display: block;\n  height: auto;\n  max-width: inherit;\n  border-radius: 3px;\n}\n\n.lightbox a img {\n  border: none;\n}\n\n.lb-outerContainer {\n  position: relative;\n  background-color: white;\n  *zoom: 1;\n  width: 250px;\n  height: 250px;\n  margin: 0 auto;\n  border-radius: 4px;\n}\n\n.lb-outerContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.lb-container {\n  padding: 4px;\n}\n\n.lb-loader {\n  position: absolute;\n  top: 43%;\n  left: 0;\n  height: 25%;\n  width: 100%;\n  text-align: center;\n  line-height: 0;\n}\n\n.lb-cancel {\n  display: block;\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n  background: url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) no-repeat;\n}\n\n.lb-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n\n.lb-container > .nav {\n  left: 0;\n}\n\n.lb-nav a {\n  outline: none;\n  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');\n}\n\n.lb-prev, .lb-next {\n  height: 100%;\n  cursor: pointer;\n  display: block;\n}\n\n.lb-nav a.lb-prev {\n  width: 34%;\n  left: 0;\n  float: left;\n  background: url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) left 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.lb-nav a.lb-prev:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.lb-nav a.lb-next {\n  width: 64%;\n  right: 0;\n  float: right;\n  background: url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png) right 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.lb-nav a.lb-next:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.lb-dataContainer {\n  margin: 0 auto;\n  padding-top: 5px;\n  *zoom: 1;\n  width: 100%;\n  -moz-border-radius-bottomleft: 4px;\n  -webkit-border-bottom-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  -moz-border-radius-bottomright: 4px;\n  -webkit-border-bottom-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.lb-dataContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.lb-data {\n  padding: 0 4px;\n  color: #ccc;\n}\n\n.lb-data .lb-details {\n  width: 85%;\n  float: left;\n  text-align: left;\n  line-height: 1.1em;\n}\n\n.lb-data .lb-caption {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1em;\n}\n\n.lb-data .lb-number {\n  display: block;\n  clear: left;\n  padding-bottom: 1em;\n  font-size: 12px;\n  color: #999999;\n}\n\n.lb-data .lb-close {\n  display: block;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background: url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) top right no-repeat;\n  text-align: right;\n  outline: none;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s;\n  -moz-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n\n.lb-data .lb-close:hover {\n  cursor: pointer;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 5:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/item-footer/modules/highlight/default.css ./lib-for-link/src/item-footer/modules/highlight/highlight.js ./lib-for-link/src/item-footer/modules/highlight/init.js ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js ./lib-for-link/src/item-footer/modules/disqus/disqus.css ./lib-for-link/src/item-footer/modules/disqus/disqus.js ./lib-for-link/src/item-footer/modules/disqus/embed.js ./lib-for-link/src/item-footer/modules/disqus/blogger_item.js ./lib-for-link/src/item-footer/modules/disqus/blogger_index.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/highlight/default.css */"./lib-for-link/src/item-footer/modules/highlight/default.css");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/highlight/highlight.js */"./lib-for-link/src/item-footer/modules/highlight/highlight.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/highlight/init.js */"./lib-for-link/src/item-footer/modules/highlight/init.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css */"./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js */"./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js */"./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/disqus/disqus.css */"./lib-for-link/src/item-footer/modules/disqus/disqus.css");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/disqus/disqus.js */"./lib-for-link/src/item-footer/modules/disqus/disqus.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/disqus/embed.js */"./lib-for-link/src/item-footer/modules/disqus/embed.js");
__webpack_require__(/*! ./lib-for-link/src/item-footer/modules/disqus/blogger_item.js */"./lib-for-link/src/item-footer/modules/disqus/blogger_item.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/item-footer/modules/disqus/blogger_index.js */"./lib-for-link/src/item-footer/modules/disqus/blogger_index.js");


/***/ })

/******/ });
//# sourceMappingURL=item-footer.js.map