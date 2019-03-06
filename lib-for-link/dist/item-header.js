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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/item-header/script/script-item.js":
/*!************************************************************!*\
  !*** ./lib-for-link/src/item-header/script/script-item.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */

/**
 * Table of Content
 * for Pulipuli.blogspot.tw
 * 布丁式自動標題產生器
 * 
 * 如果要停止功能，請加入<span class="disable-post-catalog"></span>
 * @author Pulipuli Chen
 * @version 20130304
 */
PULI_UTILS.post.toc = function (cata_container, heading) {
  var i, top; //if (PULI_UTILS.is_blogger_fullpage() === false) {
  //	return;
  //}
  //PULI_UTILS.log('post.toc', '1');

  $(function () {
    //頁面讀取完之後，再進行讀取
    if (typeof heading === "undefined") {
      heading = "h4";
    } //PULI_UTILS.log('post.toc', '2');


    if (typeof cata_container === "undefined") {
      //先檢查是否有取消目錄的功能
      if ($('div.entry-content .disable-post-catalog').length > 0) {
        return;
      }

      var firstHeading = $('div.entry-content:first > article > ' + heading + ':first'); //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

      if (firstHeading.length === 0) {
        return;
      } //如果firstHeading之前有<font size="3"></font>，則移除之


      var font = firstHeading.prev().filter('font');

      if (font.length > 0) {
        font.remove();
      } //如果firstHeading之前有hr，則移除之


      var hr = firstHeading.prev().filter('hr');

      if (hr.length > 0) {
        hr.remove();
        /*console.log("有<hr />");*/
      } else {
        var div = firstHeading.prevAll("div:first");
        hr = div.children(':last').filter('hr');

        if (hr.length > 0) {
          hr.remove();
          /*console.log("有 div > hr");*/
        } else {
          var p = firstHeading.prevAll("p:first"); //p.css("border", "1px solid red");
          //console.log([p.length, p.html()]);

          hr = p.children().filter('hr');

          if (hr.length > 0) {
            hr.remove();
            /*console.log("有 p > hr");*/
          } else {
            hr = p.prev().filter("hr");

            if (hr.length > 0) {
              hr.remove();
            } //console.log(["p裡面找不到", p.length, p.children().length, p.html() ]);

          }

          if ($.trim(p.html()) === "") {
            p.remove(); //console.log('p 也移除囉');
          }
        }
      } //var p = firstHeading.prevAll("p:first");
      //console.log(firstHeading.html());
      //console.log(p.children().length);
      //if (p.length > 0) {
      //	p.remove();
      //}


      cata_container = $('<span></span>').addClass("puli-utils-append").hide().insertBefore(firstHeading);
      cata_container.attr('id', 'postcata' + PULI_UTILS.create_page_id());
    } //get cataSlt ID


    var cata = jQuery(cata_container);
    var prefix = cata.attr("id"); //取得divID所在的所有的heading

    var postBody = jQuery(cata_container).parents("article:first"); //postBody.css("border", "1px solid red");

    if (postBody.find('.cate-title').length > 0) {
      return;
    } //PULI_UTILS.log('post.toc', '3');


    var headingAry = postBody.find("h4,h5");
    var headingTop = [];
    var topId = {};

    for (i = 0; i < headingAry.length; i++) {
      heading = headingAry.eq(i);
      top = heading.offset().top;
      topId[top] = heading;
      headingTop.push(top);
    }

    if (headingTop.length === 1) {
      hr = firstHeading.prevAll().filter('hr');

      if (hr.length === 0) {
        firstHeading.before("<hr />");
      }

      return;
    } //然後將headingTop排序


    headingTop.sort(function (a, b) {
      return a - b;
    }); //重新輸入headingAry

    headingAry = [];

    for (i = 0; i < headingTop.length; i++) {
      top = headingTop[i];
      heading = topId[top];
      headingAry.push(heading);
    } //PULI_UTILS.log('post.toc', '4');
    //headingAry.css("border", "1px solid red");


    var cataTitleID = prefix + "cataTitle";
    var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');
    var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '">' + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>' + '</a>');
    var ulObj = jQuery("<ul></ul>").addClass("puli-toc").addClass("puli-utils-append"); //在每個Heading後面加入錨點

    for (i = 0; i < headingAry.length; i++) {
      var hdObj = headingAry[i];
      var title = hdObj.text();
      var anchorID = prefix + "_anchor" + i;
      var anc = jQuery('<a class="heading-anchor puli-utils-append" id="' + anchorID + '" name="' + anchorID + '" />');
      hdObj.prepend(anc);
      hdObj.prepend(goCata.clone());
      var tagName = hdObj.prop('tagName');

      if (tagName === undefined) {
        tagName = hdObj.attr('tagName');
      }

      if (typeof tagName === "string") {
        tagName = tagName.toLowerCase();
      }

      var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

      if (tagName === 'h4') {
        ulObj.append(hd);
      } else if (tagName === 'h5') {
        var lastHd = ulObj.children('li:last');

        if (lastHd.length === 0) {
          lastHd = $('<li></li>').appendTo(ulObj);
        }

        var lastUl = lastHd.children("ul:last");

        if (lastUl.length === 0) {
          lastUl = $('<ul></ul>').appendTo(lastHd);
        }

        lastUl.append(hd);
      } //ulObj.append(hd);

    } //PULI_UTILS.log('post.toc', '5');

    /**
     * 顯示目錄
     */
    //console.log(headingAry.length);


    if (headingAry.length > 1) {
      cata_container.append(cataTitle).append(ulObj).slideDown();
      cata_container.prepend('<hr class="puli-utils-append" />');
      cata_container.append('<hr class="puli-utils-append" />');
    }
  }); //$(function () {
  //PULI_UTILS.log('post.toc', '6');
};

$(function () {
  PULI_UTILS.post.toc();
}); // -----------------------------
// 20170309 我要發問

$(function () {
  var _setup_iframe_anchor = function _setup_iframe_anchor() {
    var _len1 = $("#comment-holder iframe:last").length;
    var _len2 = $(".comment-form > iframe:last").length;

    if (_len1 === 0 && _len2 === 0) {
      //console.log("iframe not found");
      setTimeout(_setup_iframe_anchor, 1000);
    } else {
      var _iframe = $("#comment-holder iframe:last");

      if (_len1 === 0 && _len2 > 0) {
        _iframe = $(".comment-form > iframe:last");
      } //console.log([_len1, _len2]);


      _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');

      var _needle = "#comment-form-iframe";
      var _href = location.href;

      if (_href.substr(_href.length - _needle.length) === _needle) {
        var _top = _iframe.offset().top - 50;

        $(window).scrollTop(_top);
      }
    }
  };

  _setup_iframe_anchor();
}); // ------------------------------
// 20170309 留言網址變連結

$(function () {
  var _setup_comment_to_link = function _setup_comment_to_link() {
    var _len = $("#comment-holder").length;

    if (_len === 0) {
      setTimeout(_setup_comment_to_link, 1000);
    } else {
      $('#comment-holder .comment-content').html(function (i, inputText) {
        var replacedText, replacePattern1, replacePattern2, replacePattern3; //URLs starting with http://, https://, or ftp://

        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>'); //URLs starting with "www." (without // before it, or it'd re-link the ones done above).

        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>'); //Change email addresses to mailto:: links.

        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
        return replacedText;
      });
      $('#comment-holder .comment-content a[href$=".png"],' + '#comment-holder .comment-content a[href$=".gif"],' + '#comment-holder .comment-content a[href$=".jpg"],' + '#comment-holder .comment-content a[href^="http://imgur.com/"],' + '#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function (i, aNode) {
        var url = aNode.href;

        if (url.indexOf('://imgur.com/') > 0) {
          if (url === 'http://imgur.com/' || url === 'https://imgur.com/') {
            return;
          }

          if (url.indexOf(',') > 0) {
            url = url.slice(0, url.indexOf(','));
          }

          if (url.indexOf('//imgur.com/a/') > 0) {
            //url = url.split('//imgur.com/a/').join('//imgur.com/')
            url = url.slice(url.indexOf('/a/') + 3);
            $(aNode).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/' + url + '">' + '<a href="//imgur.com/' + url + '"></a>' + '</blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>');
            return;
          }

          url = url + '.jpg';
        } //console.log(url)


        $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />');
      });
      $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],' + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],' + '#comment-holder .comment-content a[href^="https://youtu.be/"],' + '#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function (i, aNode) {
        var url = aNode.href; // 取得id

        if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
          url = url.slice(url.indexOf('?v=') + 3);
        } else if (url.indexOf('//youtu.be/') > 0) {
          url = url.slice(url.indexOf('.be/') + 4);
        } //console.log(url)


        $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>');
      }); // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
    }
  };

  _setup_comment_to_link();
});

/***/ }),

/***/ "./lib-for-link/src/item-header/style-print/style-print.css":
/*!******************************************************************!*\
  !*** ./lib-for-link/src/item-header/style-print/style-print.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./style-print.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style-print/style-print.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/article-meta.css":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-meta.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./article-meta.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/article-meta.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/backlinks.css":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/backlinks.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./backlinks.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/backlinks.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/comment-form-tool.less":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/comment-form-tool.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./comment-form-tool.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/comment.css":
/*!********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/comment.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/comment.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/go-top.less":
/*!********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/go-top.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./go-top.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/image.less":
/*!*******************************************************!*\
  !*** ./lib-for-link/src/item-header/style/image.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./image.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/sidebar.css":
/*!********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/sidebar.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/sidebar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/style-item.css":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/style-item.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./style-item.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/style-item.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style-print/style-print.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style-print/style-print.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media print{#masthead{border-bottom:1px solid grey;position:static!important}#masthead.fixed-nav{position:static!important;height:82px}#masthead.fixed-nav.fixed-nav h1{line-height:30px;margin-top:10px;font-size:30px}#masthead #menu-primary,#masthead .btn-navbar,#masthead .gcse{display:none}#masthead #header-inner{width:100%!important;padding-left:0}#masthead .titlewrapper{float:left}#masthead .title a{text-decoration:none}#masthead .title a:after{content:\"\"}#masthead .descriptionwrapper{width:max-content;padding-left:18em;padding-top:5px}#masthead.fixed-nav.affix #header-inner .descriptionwrapper{display:block}#masthead .descriptionwrapper:after{content:attr(url);display:block;text-decoration:underline}#masthead .description{margin-bottom:0}#content,.row{margin-left:0}#content-wrapper{padding-top:0}#main #backlinks-container,#main .blogger-comment-from-post,#main .read-more,#main .related-posts,#main .share-story-container,#main a[name=more]{display:none}#main .post a[href]:after{content:\" (\" attr(href) \") \";font-size:.8em;font-weight:400;text-decoration:underline!important}#main #comments a[href]:after,#main .post #ArchiveList a.post-count-link:after,#main .post .entry-content .meta1 a:after,#main .post .entry-content a[href$=\".png\"]:after,#main .post a.toggle:after,#main .post a[href=\"javascript:void(0)\"]:after,#main .post a[href^=\"#\"]:after{content:\"\"}#main .post a[href^=\"#\"]{display:none}#main .post .puli-toc a[href^=\"#\"]{display:inline}#main #comments h4:after{border-top-width:0}#main .post:last-of-type{margin-bottom:0}#main .post h4,#main .post h5,#main .post h6{page-break-before:avoid}#main .post table{page-break-inside:avoid}#main .post .entry-content{padding-left:0;padding-right:0}#main .entry-meta{display:none}#main #comments{border-bottom-width:0}#sidebar{margin-left:0}#sidebar .about-me img[align=right]{float:left;margin-left:0;margin-right:.5em}#sidebar .about-me .widget-content{margin-top:.5em}#sidebar .about-me .about-link,#sidebar .about-me .email-subscribe{display:none}#sidebar .about-me a:after{content:\"\"}#sidebar .about-me .social-media div{text-align:left;padding-right:0!important;padding-left:0!important;margin-bottom:0!important}#sidebar .about-me .social-media div .social-button-wrapper{display:block;text-align:left}#sidebar .about-me .social-media div .social-button-wrapper a{display:inline}#sidebar .about-me .social-media div .social-button.android,#sidebar .about-me .social-media div .social-button.chrome,#sidebar .about-me .social-media div .social-button.github,#sidebar .about-me .social-media div .social-button.google-plus,#sidebar .about-me .social-media div .social-button.linkedin,#sidebar .about-me .social-media div .social-button.plurk,#sidebar .about-me .social-media div .social-button.rss,#sidebar .about-me .social-media div .social-button.twitter{display:none}#sidebar .about-me .social-media div a:after{content:\" \" attr(title) \": \" attr(href) \"\";margin-left:1em}#sidebar .about-me .social-media div a.email:after{content:\" \" attr(href) \"\"}#sidebar .popular-posts a[rel=bookmark]{text-decoration:none}#sidebar .popular-posts a[rel=bookmark]:after{content:attr(href);text-decoration:underline;display:block}#sidebar .comments a[href]:after,#sidebar .guestbook a[href]:after,#sidebar .new a[href]:after{content:\"\"}#sidebar .comments,#sidebar .guestbook,#sidebar .new,#sidebar .PopularPosts{display:none}#sidebar .widget{page-break-inside:avoid}#content-wrapper{margin-bottom:0}.site-footer #footer-body,.site-footer .container,.site-footer .go-top,.site-footer .management{display:none}.site-footer a:after{content:\"\"}#footer .container{padding:0}#footer p{text-align:center;width:100%}#footer p a:after{content:\" \" attr(href) \"\"}#footer .themexpose,a.quickedit{display:none}a:after{white-space:nowrap}body>.sumome-share-client-wrapper{display:none}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/article-meta.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style/article-meta.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .entry-content article .meta1 .item-control a{margin-right:.5rem;white-space:nowrap;cursor:pointer}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/backlinks.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style/backlinks.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#backlinks-container h4{float:left;line-height:1rem;margin-right:25px;cursor:default}#backlinks-container h4:after{bottom:10px;left:inherit;right:-20px}#backlinks-container a[href]{line-height:2.4rem}#backlinks-container p{margin-bottom:0}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/comment.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style/comment.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#comment-editor{width:100%;height:210px;border-width:0}#comment-editor.hide{display:none}#comments-block img.favicon{height:16px;width:16px;margin-bottom:-2px}#disqus_thread{overflow:hidden;background:#fff;border-bottom:2px solid #ddd;padding:25px}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/sidebar.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style/sidebar.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#sidebar .widget.about-me .link-buttons .subscribe{display:none}@media (min-width:767px){#side-bar{width:100%}#sidebar>div.widget .widget-content{min-height:360px;max-height:360px;overflow-y:auto;margin-bottom:0}.sidebar .widget{margin-bottom:0}#content{width:100%!important;max-width:1170px}}#side-bar{margin-left:30px}@media (min-width:767px){#side-bar{max-width:1170px}}@media (max-width:1200px){#side-bar{margin-left:20px}}@media (min-width:979px) and (max-width:1200px){#sidebar>div.widget{width:calc(33% - .5em);margin-right:1em}}@media (min-width:767px) and (max-width:979px){#sidebar>.widget:not(.two-col){display:none}#sidebar>.widget.two-col{margin-bottom:18px;width:calc(50% - .5em);float:left}#sidebar>.widget.two-col:nth-of-type(odd){margin-right:16px}#sidebar>.widget.two-col:nth-of-type(2n){margin-right:0;clear:none}}@media (min-width:979px){#sidebar>.widget:not(.three-col){display:none}#sidebar>.widget.three-col{margin-bottom:18px;width:calc(33% - 9px);float:left;margin-right:18px;clear:none}#sidebar>.widget.three-col:nth-of-type(3n){margin-right:0}#sidebar>.comments{display:block}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/item-header/style/style-item.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/item-header/style/style-item.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .entry-content,#main .entry-content li{word-wrap:break-word}#main .entry-content>article code{display:block}body .addthis-smartlayers{display:block!important}.at4-thankyou-background .at4lb-inner{display:none!important}@media (min-width:767px){#main .author-meta{max-width:calc(100% - 300px)}}#main .post-iframe{height:90vh}#main .entry-meta .creative-commons,#main .entry-meta .introduction{font-size:.8em;line-height:1.5em;margin-left:74px}#main .entry-meta .bl_popover{display:inline-block;margin-left:1em}#main .entry-meta .creative-commons img{border-width:0;margin-right:0;padding-top:0}#main .entry-meta img.avatar-author{float:left;margin-top:8px}#main .entry-meta h4{line-height:1em}#main .entry-meta .creative-commons .author,#main .entry-meta .creative-commons .title{text-decoration:underline;color:#bd8242;font-weight:700}@media (max-width:480px){#footer .management{margin-bottom:70px}body>.sumome-stylebufferbottom-shim{display:none}#main .post h4{font-size:1.3rem;line-height:1.5rem}#main .post h5,#main .post h6{font-size:1rem;line-height:1.5rem}.entry-content>article>p{text-indent:1em}.entry-content>article>p:not(:first-of-type)>a.lightbox-group{display:inline-block;text-indent:-1em;text-align:center;width:100%}.entry-content li,.entry-content ul{margin-top:0!important;margin-bottom:0!important}}@media (max-width:767px){#main .entry-container .entry-content{padding-bottom:5px;padding-top:1em}#main .entry-meta{border-top-width:1px}#main .entry-meta .author-meta{padding-left:0;text-align:center}#main .entry-meta .avatar-author,#main .entry-meta .bl_popover{display:none}#main .entry-meta .avatar-author{display:block;margin-top:10px}#main .entry-meta .creative-commons{margin-left:0!important;line-height:1.5em!important}#main .entry-meta .creative-commons a.img{display:block;margin-top:1.5em}#main .entry-meta .creative-commons img{float:none;margin-left:0}.entry-meta img{margin-right:0}.entry-meta .author-meta h4:after{content:attr(data-content);display:block;font-weight:400;line-height:1.5em}.entry-meta .popover{display:none!important}.entry-meta{padding-bottom:0;padding-top:0}.share-story-container ul{margin-top:0}#side-bar{margin-left:0}.entry-meta .author-meta{margin-bottom:5px}}#main div.comments#disqus_thread{min-height:380px}#main div.comments#comments{min-height:378px}#main .entry-content>article p>code{text-indent:0}#main .entry-content>article pre{font-size:1em}#main .entry-content>article code{font-size:.8em;line-height:1.15em}.entry-content .puli-toc{padding:.5em;background-color:#2d2d2d;color:#fff!important;display:inline-block}.entry-content .puli-toc a,.entry-content .puli-toc li{color:#fff!important}@media (max-width:480px){#masthead #header{max-width:calc(100% - 130px)}.entry-content,.entry-content li{line-height:150%}.entry-content article h1 div.meta1 p small span{white-space:nowrap}#comment-holder li.comment div.avatar-image-container{position:relative;z-index:1;margin:10px}#comment-holder li.comment div.comment-block{margin-left:0}#comment-holder li.comment div.comment-block>*{margin-left:60px}#comment-holder li.comment div.comment-replies{margin-left:0}#main .post h1 .meta1{line-height:1rem}}#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"]{background-image:url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);background-size:cover}.entry-meta.clearfix .share-story-container .share-story.about,.entry-meta.clearfix .share-story-container .share-story.about li a{display:block}@media (max-width:767px){.entry-meta.clearfix .share-story-container .share-story.about li a{line-height:50px;padding:0;margin-bottom:10px}}@media (min-width:767px){.pull-right.share-story-container{margin-top:0}.entry-meta.clearfix .share-story-container .share-story.about li{width:auto}.entry-meta.clearfix .share-story-container .share-story.about li a{background-color:#d6d7d6;border-radius:6px;line-height:32px;padding:0 10px;margin-top:5px;font-size:.8em}.entry-meta.clearfix .share-story-container .share-story.about li a:hover{color:#fff;background-color:#333}}.author-meta .popover{font-weight:400;font-size:.8rem}@media (max-width:1200px){iframe[src^=\"https://docs.google.com/presentation/d/e/\"]{width:100%;height:70vw}}#comment-holder .comment-content img.comment-image{display:block}#comment-holder .comment-content iframe.youtube-embed{max-width:100%;display:block}#main article .cata-title{width:75%}#main article .heading-button{margin:0;padding:0;text-decoration:none;font-size:smaller;font-weight:400;float:right}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".comment-form-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none;margin:0 8px 6px .5em}.comment-form-tool{font-size:14px;user-select:none}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#footer .go-top .goto-comment{display:block!important}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main article img{max-width:calc(100% - 2rem)}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type,#main article p:first-of-type>a[href$=\".png\"]:first-of-type,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type{margin-left:-2em;display:block;text-align:center}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type img,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type img,#main article p:first-of-type>a[href$=\".png\"]:first-of-type img,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type img,#main article p:first-of-type>a[href$=-no]:first-of-type img,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type img{box-shadow:4px 4px 2px grey;margin-right:auto;margin-bottom:auto}#main article p:not(:first-of-type)>a[href$=\".gif\"] img,#main article p:not(:first-of-type)>a[href$=\".jpg\"] img,#main article p:not(:first-of-type)>a[href$=\".png\"] img,#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"] img{box-shadow:4px 4px 2px grey;margin-right:5px;margin-bottom:5px}@media (max-width:767px){#main article p:not(:first-of-type)>a[href$=\".gif\"],#main article p:not(:first-of-type)>a[href$=\".jpg\"],#main article p:not(:first-of-type)>a[href$=\".png\"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"]{display:block;text-align:center;margin-left:-2rem;margin-right:2rem}}@media (max-width:480px){#main article img{max-width:100%}#main article p>a[href]>img{display:block;text-align:center;text-indent:0!important}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type,#main article p:first-of-type>a[href$=\".png\"]:first-of-type,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type{margin-left:0!important}#main article p:not(:first-of-type)>a[href$=\".gif\"],#main article p:not(:first-of-type)>a[href$=\".jpg\"],#main article p:not(:first-of-type)>a[href$=\".png\"],#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"]{margin-left:1rem;text-indent:-.5em}#main article p:not(:first-of-type)>a[href$=\".gif\"] img,#main article p:not(:first-of-type)>a[href$=\".jpg\"] img,#main article p:not(:first-of-type)>a[href$=\".png\"] img,#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"] img{width:100%}}", ""]);



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

/***/ 2:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/item-header/style/article-meta.css ./lib-for-link/src/item-header/style/comment.css ./lib-for-link/src/item-header/style/go-top.less ./lib-for-link/src/item-header/style/image.less ./lib-for-link/src/item-header/style/backlinks.css ./lib-for-link/src/item-header/style/sidebar.css ./lib-for-link/src/item-header/style/comment-form-tool.less ./lib-for-link/src/item-header/style/style-item.css ./lib-for-link/src/item-header/script/script-item.js ./lib-for-link/src/item-header/style-print/style-print.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/item-header/style/article-meta.css */"./lib-for-link/src/item-header/style/article-meta.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/comment.css */"./lib-for-link/src/item-header/style/comment.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/go-top.less */"./lib-for-link/src/item-header/style/go-top.less");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/image.less */"./lib-for-link/src/item-header/style/image.less");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/backlinks.css */"./lib-for-link/src/item-header/style/backlinks.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/sidebar.css */"./lib-for-link/src/item-header/style/sidebar.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/comment-form-tool.less */"./lib-for-link/src/item-header/style/comment-form-tool.less");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/style-item.css */"./lib-for-link/src/item-header/style/style-item.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/script/script-item.js */"./lib-for-link/src/item-header/script/script-item.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/item-header/style-print/style-print.css */"./lib-for-link/src/item-header/style-print/style-print.css");


/***/ })

/******/ });
//# sourceMappingURL=item-header.js.map