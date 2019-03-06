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
    var i, top;

    //if (PULI_UTILS.is_blogger_fullpage() === false) {
    //	return;
    //}

    //PULI_UTILS.log('post.toc', '1');

    $(function () {	//頁面讀取完之後，再進行讀取

        if (typeof heading === "undefined") {
            heading = "h4";
        }

        //PULI_UTILS.log('post.toc', '2');

        if (typeof cata_container === "undefined") {

            //先檢查是否有取消目錄的功能
            if ($('div.entry-content .disable-post-catalog').length > 0) {
                return;
            }

            var firstHeading = $('div.entry-content:first > article > ' + heading + ':first');

            //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

            if (firstHeading.length === 0) {
                return;
            }

            //如果firstHeading之前有<font size="3"></font>，則移除之
            var font = firstHeading.prev().filter('font');
            if (font.length > 0) {
                font.remove();
            }

            //如果firstHeading之前有hr，則移除之
            var hr = firstHeading.prev().filter('hr');
            if (hr.length > 0) {
                hr.remove();
                /*console.log("有<hr />");*/
            }
            else {
                var div = firstHeading.prevAll("div:first");
                hr = div.children(':last').filter('hr');
                if (hr.length > 0) {
                    hr.remove();
                    /*console.log("有 div > hr");*/
                }
                else {
                    var p = firstHeading.prevAll("p:first");
                    //p.css("border", "1px solid red");
                    //console.log([p.length, p.html()]);
                    hr = p.children().filter('hr');
                    if (hr.length > 0) {
                        hr.remove();
                        /*console.log("有 p > hr");*/
                    }
                    else {
                        hr = p.prev().filter("hr");
                        if (hr.length > 0) {
                            hr.remove();
                        }
                        //console.log(["p裡面找不到", p.length, p.children().length, p.html() ]);
                    }
                    if ($.trim(p.html()) === "") {
                        p.remove();
                        //console.log('p 也移除囉');
                    }
                }
            }

            //var p = firstHeading.prevAll("p:first");
            //console.log(firstHeading.html());
            //console.log(p.children().length);
            //if (p.length > 0) {
            //	p.remove();
            //}

            cata_container = $('<span></span>')
                    .addClass("puli-utils-append")
                    .hide()
                    .insertBefore(firstHeading);
            cata_container.attr('id', 'postcata' + PULI_UTILS.create_page_id());
        }

        //get cataSlt ID
        var cata = jQuery(cata_container);
        var prefix = cata.attr("id");

        //取得divID所在的所有的heading
        var postBody = jQuery(cata_container).parents("article:first");
        //postBody.css("border", "1px solid red");

        if (postBody.find('.cate-title').length > 0) {
            return;
        }

        //PULI_UTILS.log('post.toc', '3');

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
        }

        //然後將headingTop排序
        headingTop.sort(function (a, b) {
            return a - b;
        });

        //重新輸入headingAry
        headingAry = [];
        for (i = 0; i < headingTop.length; i++) {
            top = headingTop[i];
            heading = topId[top];
            headingAry.push(heading);
        }

        //PULI_UTILS.log('post.toc', '4');

        //headingAry.css("border", "1px solid red");

        var cataTitleID = prefix + "cataTitle";
        var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');

        var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '">'
        + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'
        + '</a>');

        var ulObj = jQuery("<ul></ul>")
                .addClass("puli-toc")
                .addClass("puli-utils-append")

        //在每個Heading後面加入錨點
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
            if (typeof (tagName) === "string") {
                tagName = tagName.toLowerCase();
            }

            var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

            if (tagName === 'h4') {
                ulObj.append(hd);
            }
            else if (tagName === 'h5') {

                var lastHd = ulObj.children('li:last');

                if (lastHd.length === 0) {
                    lastHd = $('<li></li>').appendTo(ulObj);
                }

                var lastUl = lastHd.children("ul:last");

                if (lastUl.length === 0) {
                    lastUl = $('<ul></ul>').appendTo(lastHd);
                }
                lastUl.append(hd);
            }
            //ulObj.append(hd);
        }

        //PULI_UTILS.log('post.toc', '5');

        /**
         * 顯示目錄
         */
        //console.log(headingAry.length);
        if (headingAry.length > 1) {

            cata_container.append(cataTitle)
                    .append(ulObj)
                    .slideDown();

            cata_container.prepend('<hr class="puli-utils-append" />');
            cata_container.append('<hr class="puli-utils-append" />');
        }

    });	//$(function () {

    //PULI_UTILS.log('post.toc', '6');

};

$(function () {
    PULI_UTILS.post.toc();
});

// -----------------------------
// 20170309 我要發問
$(function () {
    var _setup_iframe_anchor = function () {
        var _len1 = $("#comment-holder iframe:last").length;
        var _len2 = $(".comment-form > iframe:last").length;
        if (_len1 === 0 && _len2 === 0) {
            //console.log("iframe not found");
            setTimeout(_setup_iframe_anchor, 1000);
        }
        else {
            var _iframe = $("#comment-holder iframe:last");
            if (_len1 === 0 && _len2 > 0) {
                _iframe = $(".comment-form > iframe:last");
            }
            //console.log([_len1, _len2]);
            _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');
            
            var _needle = "#comment-form-iframe";
            var _href = location.href;
            if (_href.substr(_href.length-_needle.length) === _needle) {
                var _top = _iframe.offset().top - 50;
                $(window).scrollTop(_top);
            }
        }
    };
    _setup_iframe_anchor();
});

// ------------------------------
// 20170309 留言網址變連結
$(function () {
    var _setup_comment_to_link = function () {
        var _len = $("#comment-holder").length;
        if (_len === 0) {
            setTimeout(_setup_comment_to_link, 1000);
        }
        else {
            $('#comment-holder .comment-content').html(function(i, inputText) {
                var replacedText, replacePattern1, replacePattern2, replacePattern3;

                //URLs starting with http://, https://, or ftp://
                replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

                //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
                replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

                //Change email addresses to mailto:: links.
                replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
                replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

                return replacedText;
           });
           
           $('#comment-holder .comment-content a[href$=".png"],'
            + '#comment-holder .comment-content a[href$=".gif"],'
            + '#comment-holder .comment-content a[href$=".jpg"],'
            + '#comment-holder .comment-content a[href^="http://imgur.com/"],'
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(i, aNode) {
             let url = aNode.href
             
             if (url.indexOf('://imgur.com/') > 0) {
               if (url === 'http://imgur.com/'
                     || url === 'https://imgur.com/') {
                return
               }
               if (url.indexOf(',') > 0) {
                 url = url.slice(0, url.indexOf(','))
               }
               
               if (url.indexOf('//imgur.com/a/') > 0) {
                 //url = url.split('//imgur.com/a/').join('//imgur.com/')
                 url = url.slice(url.indexOf('/a/') + 3)
                 $(aNode).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/' + url + '">'
                  + '<a href="//imgur.com/' + url + '"></a>'
                  + '</blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>')
                 return
               }
               
               url = url + '.jpg'
             }
     
             //console.log(url)
             $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
           })
           
           $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="https://youtu.be/"],'
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(i, aNode) {
             let url = aNode.href
             
             // 取得id
             if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
               url = url.slice(url.indexOf('?v=') + 3)
             }
             else if (url.indexOf('//youtu.be/') > 0) {
               url = url.slice(url.indexOf('.be/') + 4)
             }
     
             //console.log(url)
             $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')
           })
           
           // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style-print.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./article-meta.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./backlinks.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./comment-form-tool.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./go-top.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./image.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/sidebar.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style-item.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n/******************************************/\n@media print {\n    #masthead {\n        border-bottom: 1px solid gray;\n        position: static !important;\n    }\n    \n    #masthead.fixed-nav {\n        position: static !important;\n        height: 82px;\n    }\n    \n    #masthead.fixed-nav.fixed-nav h1 {\n        line-height: 30px;\n        margin-top: 10px;\n        font-size: 30px;\n    }\n    \n    #masthead .gcse,\n    #masthead .btn-navbar,\n    #masthead #menu-primary {\n        display:none;\n    }\n    \n    #masthead #header-inner {\n        width: 100% !important;\n        padding-left: 0;\n    }\n    #masthead .titlewrapper {\n        float: left;\n    }\n    #masthead .title a {\n        text-decoration: none;\n    }\n    \n    #masthead .title a:after {\n        content: \"\";\n    }\n    \n    #masthead .descriptionwrapper {\n        width: max-content;\n        /*padding-top: 20px;*/\n        padding-left: 18em;\n        padding-top: 5px;\n    }\n    \n    #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n        display: block;\n    }\n    \n    #masthead .descriptionwrapper:after {\n        content:attr(url);\n        display:block;\n        text-decoration: underline;\n    }\n    \n    #masthead .description {\n        margin-bottom: 0;\n    }\n    \n    /****************/\n    \n    .row {\n        margin-left: 0;\n    }\n    \n    #content {\n        margin-left:0;\n    }\n    \n    #content-wrapper {\n        padding-top: 0;\n    }\n    \n    /*****************/\n    \n    #main .read-more,\n    #main .share-story-container,\n    #main a[name=\"more\"],\n    #main .related-posts,\n    #main .blogger-comment-from-post,\n    #main #backlinks-container {\n        display: none;\n    }\n    \n    #main .post a[href]:after{\n        content:\" (\" attr(href) \") \";\n        font-size:0.8em;\n        font-weight:normal;\n        text-decoration: underline !important;\n    }\n    \n    #main .post .entry-content .meta1 a:after,\n    #main .post .entry-content a[href$=\".png\"]:after,\n    #main #comments a[href]:after,\n    #main .post a[href=\"javascript:void(0)\"]:after,\n    #main .post a[href^=\"#\"]:after,\n    #main .post a.toggle:after,\n    #main .post #ArchiveList a.post-count-link:after {\n        content: \"\";\n    }\n    \n    #main .post a[href^=\"#\"] {\n        display: none;\n    }\n    \n    #main .post .puli-toc a[href^=\"#\"] {\n        display: inline;\n    }\n    \n    \n    #main #comments h4:after {\n        border-top-width: 0;\n    }\n    \n    #main .post:last-of-type {\n        margin-bottom: 0;\n    }\n    \n    #main .post h4,\n    #main .post h5,\n    #main .post h6 {\n        page-break-before: avoid;\n    }\n    \n    #main .post table {\n        page-break-inside: avoid;\n    }\n    \n    #main .post .entry-content {\n        padding-left:0;\n        padding-right:0;\n    }\n    \n    #main .entry-meta {\n        display: none;\n    }\n    \n    #main #comments {\n        border-bottom-width: 0;\n    }\n        \n    /*********************/\n    #sidebar {\n        margin-left: 0;\n    }\n    \n    #sidebar .about-me img[align=\"right\"] {\n        float:left;\n        margin-left: 0;\n        margin-right: 0.5em;\n        \n    }\n    \n    #sidebar .about-me .widget-content {\n        margin-top: 0.5em;\n    }\n    #sidebar .about-me .about-link,\n    #sidebar .about-me .email-subscribe {\n        display: none;\n    }\n    \n    #sidebar .about-me a:after {\n        content: \"\";\n    }\n    \n    #sidebar .about-me .social-media div {\n        text-align: left;\n        padding-right:0 !important;\n        padding-left:0 !important;\n        margin-bottom: 0 !important;\n    }\n    \n    #sidebar .about-me .social-media div .social-button-wrapper {\n        display: block;\n        text-align: left;\n    }\n    #sidebar .about-me .social-media div .social-button-wrapper a {\n        display: inline;\n    }\n    \n    #sidebar .about-me .social-media div .social-button.google-plus,\n    #sidebar .about-me .social-media div .social-button.plurk,\n    #sidebar .about-me .social-media div .social-button.linkedin,\n    #sidebar .about-me .social-media div .social-button.twitter,\n    #sidebar .about-me .social-media div .social-button.github,\n    #sidebar .about-me .social-media div .social-button.android,\n    #sidebar .about-me .social-media div .social-button.chrome,\n    #sidebar .about-me .social-media div .social-button.rss {\n        display: none;\n    }\n    \n    #sidebar .about-me .social-media div a:after {\n        content: \" \" attr(title) \": \" attr(href) \"\";\n        margin-left: 1em;\n    }\n    \n    #sidebar .about-me .social-media div a.email:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"] {\n        text-decoration: none;\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n        content: attr(href);\n        text-decoration: underline;\n        display: block;\n    }\n    \n    #sidebar .guestbook a[href]:after,\n    #sidebar .new a[href]:after,\n    #sidebar .comments a[href]:after {\n        content: \"\";\n    }\n    \n    #sidebar .guestbook,\n    #sidebar .comments,\n    #sidebar .new,\n    #sidebar .PopularPosts {\n        display: none;\n    }\n    \n    #sidebar .widget {\n        page-break-inside: avoid;\n    }\n    \n    /**********************************/\n    #content-wrapper {\n        margin-bottom: 0;\n    }\n    \n    .site-footer #footer-body,\n    .site-footer .management,\n    .site-footer .go-top,\n    .site-footer .container {\n        display: none;\n    }\n    \n    .site-footer a:after {\n        content: \"\";\n    }\n    \n    /*************************************/\n    #footer .container {\n        padding: 0;\n    }\n    #footer p {\n        text-align: center;\n        width: 100%;\n    }\n    \n    #footer p a:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #footer .themexpose {\n        display: none;\n    }\n    \n    /*****************************/\n    a.quickedit {\n        display: none;\n    }\n    \n    a:after {\n        white-space:nowrap;\n    }\n    \n    body > .sumome-share-client-wrapper {\n        display: none;\n    }\n}   /* @media print { */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .entry-content article .meta1 .item-control a {\n  margin-right: 0.5rem;\n  white-space: nowrap;\n  cursor: pointer;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#backlinks-container h4 {\n  float: left;\n  line-height: 1rem;\n  margin-right: 25px;\n  cursor: default;\n}\n\n#backlinks-container h4:after {\n  bottom: 10px;\n  left: inherit;\n  right: -20px;\n}\n\n#backlinks-container a[href] {\n  line-height: 2.4rem;\n}\n\n#backlinks-container p {\n  margin-bottom: 0;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n\n#comment-editor.hide {\n  display: none;\n}\n\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom:-2px;\n}\n\n\n/* ************************ */\n\n#disqus_thread {\n  overflow: hidden;\n  background: #FFFFFF;\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/sidebar.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/sidebar.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n  #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  /**\n   * 1 3 5\n   */\n  #sidebar > .widget.two-col:nth-of-type(odd) {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  \n  /**\n   * 2 4 6\n   */\n  #sidebar > .widget.two-col:nth-of-type(even) {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n} \n\n@media (min-width:979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  \n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }    \n\n  #sidebar > .comments {\n    display: block;\n  }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n#main .entry-content, \n#main .entry-content li {\n    word-wrap: break-word;\n}\n\n#main .entry-content > article code {\n    display: block;\n}\n\nbody .addthis-smartlayers {\n    display: block !important;\n}\n\n.at4-thankyou-background .at4lb-inner {\n    display: none !important;\n}\n\n\n/*************************************/\n\n@media (min-width:767px) {\n    #main .author-meta {\n        max-width: calc(100% - 300px);\n    }\n    \n}\n\n#main .post-iframe {\n    height: 90vh;\n}\n\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n    font-size: 0.8em;\n    line-height: 1.5em;\n    margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n    display: inline-block;\n    margin-left: 1em;\n}\n\n#main .entry-meta .creative-commons img {\n    border-width: 0;\n    /*float:left;*/\n    margin-right: 0;\n    padding-top: 0;\n}\n\n#main .entry-meta img.avatar-author {\n    float:left;\n    margin-top: 8px;\n}\n\n#main .entry-meta h4 {\n    line-height: 1em;\n}\n\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n    text-decoration: underline;\n    color: #BD8242;\n    font-weight: bold;\n}\n\n@media (max-width: 480px) {\n    #footer .management {\n        margin-bottom: 70px;\n    }\n    \n    body > .sumome-stylebufferbottom-shim {\n        display: none;\n    }\n    \n    #main .post h4 {\n        font-size: 1.3rem;\n        line-height: 1.5rem;\n    }\n    \n    #main .post h5,\n    #main .post h6 {\n        font-size: 1rem;\n        line-height: 1.5rem;\n    }\n    \n    .entry-content > article > p {\n        text-indent: 1em;\n    }\n    \n    .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n        display: inline-block;\n        text-indent: -1em;\n        text-align: center;\n        width: 100%;\n    }\n    \n    /*#main .entry-content > article > p > a[href$=\".png\"]:first-of-type img {\n        max-height: 300px;\n    }*/\n    \n    .entry-content ul, .entry-content li {\n        margin-top: 0em !important; \n        margin-bottom: 0em !important; \n    }\n    \n}\n/**************************/\n@media (max-width: 767px) {\n    #main .entry-container .entry-content {\n        padding-bottom: 5px;\n        padding-top: 1em;\n    }\n    \n    #main .entry-meta {\n        border-top-width: 1px;\n    }\n    \n    #main .entry-meta .author-meta {\n        padding-left:0;\n        text-align: center;\n        /*display: none;*/\n    }\n    #main .entry-meta .avatar-author,\n    #main .entry-meta .bl_popover {\n        display: none;\n    }\n    \n    #main .entry-meta .avatar-author {\n        display: block;\n        margin-top: 10px;\n    }\n    \n    #main .entry-meta .creative-commons {\n        margin-left: 0 !important;\n        line-height: 1.5em !important;\n    }\n    #main .entry-meta .creative-commons a.img {\n        display: block;\n        margin-top: 1.5em;\n    }\n    #main .entry-meta .creative-commons img {\n        float: none;\n        margin-left: 0;\n    }\n    \n    .entry-meta img {\n        margin-right:0;\n    }\n    \n    .entry-meta .author-meta h4:after {\n        content: attr(data-content);\n        display:block;\n        font-weight: normal;\n        line-height: 1.5em;\n    }\n    \n    .entry-meta .popover {\n        display:none !important;\n    }\n    \n    .entry-meta {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n    \n    .share-story-container ul {\n        margin-top:0;\n    }\n    \n    #side-bar {\n        margin-left:0;\n    }\n    \n    /* 20161118 */\n    .entry-meta .author-meta {\n        margin-bottom: 5px;\n    }\n}\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n    min-height: 380px;\n}\n\n#main div.comments#comments {\n    min-height: 378px;\n}\n\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n    text-indent: 0;\n}\n\n#main .entry-content > article pre {\n    font-size: 1em;\n}\n\n#main .entry-content > article code {\n    font-size: 0.8em;\n    line-height: 1.15em;\n}\n\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n    /*border: 3px solid #CE8A42;*/\n    padding: 0.5em;\n    background-color: #2d2d2d;\n    color: white !important;\n    display: inline-block;\n}\n\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n    color: white !important;\n}\n\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 480px) {\n    #masthead #header {\n        max-width: calc(100% - 130px);\n    }\n    \n    \n    .entry-content,\n    .entry-content li {\n        line-height: 150%;\n    }\n    \n    .entry-content article h1 div.meta1 p small span {\n        white-space: nowrap;\n    }\n    \n    #comment-holder li.comment div.avatar-image-container {\n        position: relative;\n        z-index: 1;\n        margin: 10px;\n    }\n    \n    #comment-holder li.comment div.comment-block {\n        margin-left: 0;\n    }\n    \n    #comment-holder li.comment div.comment-block > * {\n        margin-left: 60px;\n    }\n    \n    #comment-holder li.comment div.comment-replies {\n        margin-left: 0;\n    }\n    \n    /* 20161117 */\n    #main .post h1 .meta1 {\n        line-height: 1rem;\n    }\n}\n\n#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"] {\n    /*Gender_Neutral_User-48*/\n    background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n    background-size: cover;\n}\n\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n    display: block;\n}\n\n.entry-meta.clearfix .share-story-container .share-story.about li a  {\n    display: block;\n}\n\n@media (max-width: 767px) {\n    .entry-meta.clearfix .share-story-container .share-story.about li a  {\n        line-height: 50px;\n        padding: 0;\n        margin-bottom: 10px;\n    }\n}\n\n@media (min-width: 767px) {\n    .pull-right.share-story-container {\n        margin-top: 0;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li {\n        width: auto;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a {\n        background-color: #D6D7D6;\n        border-radius: 6px;\n        line-height: 32px;\n        padding: 0 10px;\n        margin-top: 5px;\n        font-size: 0.8em;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n        color:white;\n        background-color: #333;\n    }\n}\n\n\n.author-meta .popover {\n    font-weight: normal;\n    font-size: 0.8rem;\n}\n\n\n\n/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n    iframe[src^=\"https://docs.google.com/presentation/d/e/\"] {\n        /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n        width: 100%;\n        height: calc(100vw * 0.7);\n    }\n}   /* @media (max-widt@media (max-width: 1200px) {*/\n\n/*****************************/\n/* 20181021 留言裡面的圖片 */\n/* https://blog.pulipuli.info/2017/10/k-determin-optimal-number-of-clusters.html */\n#comment-holder .comment-content img.comment-image {\n  display: block;\n}\n\n#comment-holder .comment-content iframe.youtube-embed {\n  max-width: 100%;\n  display: block;\n}\n\n\n/* ------------------------- */\n#main article .cata-title {\n  width: 75%;\n}\n\n#main article .heading-button {\n  margin:0;\n  padding:0;\n  text-decoration:none;\n  font-size:smaller;\n  font-weight:normal;\n  float:right;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment-form-tool.less ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/******************************/\n/* 20170309 上傳圖片 */\n.comment-form-tool a button {\n  background-color: #f8f8f8;\n  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  margin: 0 8px 6px 0;\n  font-family: arial, sans-serif;\n  font-size: 11px;\n  height: 27px;\n  padding-bottom: 0;\n  text-align: center;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  user-select: none;\n  margin-left: 0.5em;\n}\n.comment-form-tool {\n  font-size: 14px;\n  user-select: none;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.less ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#footer .go-top .goto-comment {\n  display: block !important;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * @author Pulipuli Chen 20190301\n * 修正圖片寬度的問題\n */\n#main article {\n  /*\n  p:first-of-type a[href$=\"-no\"] img:first-of-type {\n    box-shadow: 0px 0px 0px grey;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: -1rem;\n  }\n  */\n}\n#main article img {\n  max-width: calc(100% - 2rem);\n}\n#main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n#main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n#main article p:first-of-type > a[href$=\"-no\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n  margin-left: -2em;\n  display: block;\n  text-align: center;\n}\n#main article p:first-of-type > a[href$=\".png\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".jpg\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".gif\"]:first-of-type img,\n#main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\"-no\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: auto;\n  margin-bottom: auto;\n}\n#main article p:not(:first-of-type) > a[href$=\".png\"] img,\n#main article p:not(:first-of-type) > a[href$=\".jpg\"] img,\n#main article p:not(:first-of-type) > a[href$=\".gif\"] img,\n#main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"] img,\n#main article p:not(:first-of-type) > a[href$=\"-no\"] img,\n#main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n@media (min-width: 767px) {\n  #main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n  #main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\"-no\"]:first-of-type {\n    /*margin-left: -2em;\n      margin-right: 2em;*/\n  }\n}\n@media (max-width: 767px) {\n  /*\n    #main .entry-content > article > p:first-of-type > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\"-no\"]:first-of-type{\n        margin-left: -2em;\n        //width: 100%;\n        //height: auto;\n        //max-height: 200px;\n        display: block;\n        text-align:center;\n    }\n    */\n  /*\n    #main .entry-content a[href$=\".png\"]:first-of-type img,\n    #main .entry-content a[href$=\".jpg\"]:first-of-type img,\n    #main .entry-content a[href$=\".gif\"]:first-of-type img,\n    #main .entry-content a[href$=\"-no\"]:first-of-type img{\n        width: 80%;\n        height: auto;\n        // max-height: 500px;\n    }\n    */\n  #main article p:not(:first-of-type) > a[href$=\".png\"],\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"],\n  #main article p:not(:first-of-type) > a[href$=\".gif\"],\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n  #main article p:not(:first-of-type) > a[href$=\"-no\"] {\n    display: block;\n    text-align: center;\n    margin-left: -2rem;\n    margin-right: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  #main article img {\n    max-width: 100%;\n  }\n  #main article p > a[href] > img {\n    display: block;\n    text-align: center;\n    text-indent: 0 !important;\n    /*margin-left: -1rem;*/\n  }\n  #main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n  #main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\"-no\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n    margin-left: 0 !important;\n  }\n  #main article p:not(:first-of-type) > a[href$=\".png\"],\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"],\n  #main article p:not(:first-of-type) > a[href$=\".gif\"],\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n  #main article p:not(:first-of-type) > a[href$=\"-no\"],\n  #main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] {\n    /*margin-left: 2rem;*/\n    margin-left: 1rem;\n    text-indent: -0.5em;\n  }\n  #main article p:not(:first-of-type) > a[href$=\".png\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".gif\"] img,\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"] img,\n  #main article p:not(:first-of-type) > a[href$=\"-no\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] img {\n    width: 100%;\n    /*max-height: 500px;*/\n  }\n}\n", ""]);



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