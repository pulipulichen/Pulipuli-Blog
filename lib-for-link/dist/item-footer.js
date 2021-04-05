/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"item-footer": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./lib-for-link/src/item-footer/item-footer.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/item-footer/TableUtil/TableUtil.js":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/item-footer/TableUtil/TableUtil.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vandors_dom_to_image_dom_to_image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../vandors/dom-to-image/dom-to-image.js */ "./lib-for-link/src/item-footer/vandors/dom-to-image/dom-to-image.js");
/* harmony import */ var _vandors_dom_to_image_dom_to_image_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vandors_dom_to_image_dom_to_image_js__WEBPACK_IMPORTED_MODULE_0__);
/* global CopyPasteHelper */


//console.log(domToImage)

let TableUtil = {
  init: function () {
    let tables = $('.entry-content article > table')
    
    //console.log(tables.length)
    tables.each((i, table) => {
      let $table = $(table)
      this.addLabel($table)
      this.setupThumbnail(table)
    })
  },
  addLabel: function ($table) {
    let container = $(`<div class="table-labels puli-utils-append"></div>`)
      .insertBefore($table)
    
    let copyLabel = $(`<div class="table-label">
      <i aria-hidden="true" class="fa fa-copy" title="Copy table"></i>
      COPY
    </div>`).appendTo(container)

    copyLabel.click(function () {
      let table = $(this).parent().next()
      //let html = table.prop('outerHTML')

      //console.log(html)
      CopyPasteHelper.copyRichFormat(table)
    })
    
    let openLabel = $(`<div class="table-label">
      <i aria-hidden="true" class="fa fa fa-external-link" title="Open table in new window"></i>
      POPUP
    </div>`).appendTo(container)

    let _this = this
    openLabel.click(function () {
      let table = $(this).parent().next()
      _this.popupTable(table)
    })
  },
  popupTable: function (table) {
    let win = window.open('', '_blank')
    //let win = window.open(`data:text/html;charset=utf8,<html><head><link href='//lh3.googleusercontent.com/-EJjh-ZlKl64/VvtjyofcjNI/AAAAAAACuME/hYJhk_ZuORs/s0/pulipuli192x192.jpg' rel='icon' sizes='192x192'/></head><body></body></html>`);
    win.document.title = 'Table: ' + document.title

    //WIN = win

    let cssURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/table-popup.css'
    if ($('script[src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js"]').length === 0) {
      cssURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/static/table-popup.css'
    }

    win.document.body.innerHTML = table.prop('outerHTML')
      + `<link href='${cssURL}' rel='stylesheet' type='text/css'/>`
  },
  setupThumbnail: function (table) {
    //console.log(domToImage.toSvg(table))
    let _this = this
    
    table.style.minWidth = '800px'
    table.border = 0
    _vandors_dom_to_image_dom_to_image_js__WEBPACK_IMPORTED_MODULE_0___default.a.toSvg(table)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          //document.body.appendChild(img);
          let $img = $(img)
          $img.addClass('table-thumbnail')
                  .addClass('puli-utils-append')
                  .attr('title', 'Open table in new window')
                  .insertAfter(table)
          $img.click(function () {
            let $table = $(this).prev()
            _this.popupTable($table)
          })
          $(table).addClass('table-thumbnail-ready')
          table.style.minWidth = 'auto'
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  },
}

$(() => {
  TableUtil.init()
})

/***/ }),

/***/ "./lib-for-link/src/item-footer/TableUtil/TableUtil.less":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/item-footer/TableUtil/TableUtil.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./TableUtil.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/TableUtil/TableUtil.less");

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

/***/ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.js":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let AdminToolsStat = {
  init: function () {
    let statContainer = $('.entry-content article:first .meta1 .article-stats-container:visible:first')
    
    if (statContainer.length === 0) {
      return false
    }
    
    statContainer.append(`<i class="fa fa-safari" aria-hidden="true"></i>`)
    
    let list = []
    
    let append = () => {
      let listString = list.join(', ')
      statContainer.append(`<span>${listString}</span>`)
    }
    
    this.countChar((count) => {
      //console.log(count)
      if (typeof(count) === 'string') {
        list.push(count)
      }
      
      this.countImage((count) => {
        //console.log(count)
        if (typeof(count) === 'string') {
          list.push(count)
        }
        
        this.countTable((count) => {
          //console.log(count)
          if (typeof(count) === 'string') {
            list.push(count)
          }
          
          this.countIframe((count) => {
            ///console.log(count)
            if (typeof(count) === 'string') {
              list.push(count)
            }
            append()
          })
        })
      })
    })
  },
  countChar: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    article = article.clone()
    article.children('h1:first').remove()
    let articleText = article.text()
    
    // 我想要把中文跟英文斷開來... 算了，先不要這樣做吧，這樣太拖慢網頁速度了
    let count = articleText.replace(/ /g, '').length
    if (count > 1) {
      count = `${count} Characters`
    }
    else if (count === 1) {
      count = `${count} Character`
    }
    callback(count)
  },
  countImage: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('a[href] > img[src]').length
    if (count > 1) {
      count = `${count} Images`
    }
    else if (count === 1) {
      count = `${count} Image`
    }
    callback(count)
  },
  countTable: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('table').length
    if (count > 1) {
      count = `${count} Tables`
    }
    else if (count === 1) {
      count = `${count} Table`
    }
    callback(count)
  },
  countIframe: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('iframe').length
    if (count > 1) {
      count = `${count} Embed Iframes`
    }
    else if (count === 1) {
      count = `${count} Embed Iframe`
    }
    callback(count)
  }
}

$(() => {
  setTimeout(() => {
    AdminToolsStat.init()
  }, 3000)
})

/***/ }),

/***/ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./AdminToolsStat.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less");

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

/***/ "./lib-for-link/src/item-footer/comment/CommentLinkParser.js":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/CommentLinkParser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// ------------------------------
// 20170309 留言網址變連結
let replaceURLtoLink = () => {
  //console.trace('誰讀取了 replaceURLtoLink')
  $('#comment-holder .comment-content:not(.replaced-url-to-link)').html(function (i, inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/\(\)%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|\(\)])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="https://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    $(this).addClass('replaced-url-to-link')

    //console.log(inputText, replacedText)
    return replacedText;
  });
}

let parseImgur = () => {
  $('#comment-holder .comment-content a[href$=".png"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".gif"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".jpg"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".jpeg"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".PNG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".GIF"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".JPG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".JPEG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href^="http://imgur.com/"]:not([href^="http://imgur.com/upload"]):not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]:not([href^="https://imgur.com/upload"]):not(.parsed-imgur)').each(function (i, aNode) {
      let url = aNode.href

      if (url.indexOf('://imgur.com/') > 0) {
        if (url === 'http://imgur.com/'
                || url === 'https://imgur.com/') {
          return false
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
          return true
        }

        url = url + '.jpg'
      }

      //console.log(url)
      $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
      $(aNode).addClass('parsed-imgur')
    })
    
    // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
}

let parseYouTube = () => {
  $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="https://youtu.be/"]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]:not(.parsed-youtube)').each(function (i, aNode) {
      let url = aNode.href

      // 取得id
      if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
        url = url.slice(url.indexOf('?v=') + 3)
      } else if (url.indexOf('//youtu.be/') > 0) {
        url = url.slice(url.indexOf('.be/') + 4)
      }

      //console.log(url)
      $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')
      $(aNode).addClass('parsed-youtube')
    })
}

// 20170309 留言網址變連結
let anonymousToImage = () => {
  //console.trace('誰讀取了 replaceURLtoLink')
  $('.avatar-image-container > img[src="//resources.blogblog.com/img/blank.gif"]').each(function (i, ele) {
    ele = $(ele)
    ele.after(`<img src="//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png" class="anonymous-avatar" />`)
    ele.remove()
  });
}

/**
 * @author Pulipuli Chen 20190929
 * https://streamable.com
 * 
https://www.youtube.com/watch?v=XF4-5qOA1tY

https://streamable.com/h9hif

<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/s/h9hif/qdchgw" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
 */
let parseStreamable = () => {
  
  $('#comment-holder .comment-content a[href^="https://streamable.com/"]').each(function (i, aNode) {
      let url = aNode.href
      if (typeof(url) !== 'string') {
        return false
      }

      // 取得id
      let id = url.slice(url.lastIndexOf('/') + 1)

      //console.log(url)
      $(aNode).before(`<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;">
        <iframe src="https://streamable.com/s/${id}" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
      </div>`)
    })
}

let commentInited = false
var _setup_comment_to_link = function () {
  if (commentInited === true) {
    return false
  }
  
  var _len = $("#comment-holder").length;
  if (_len === 0) {
    setTimeout(_setup_comment_to_link, 1000);
  } else {
    replaceURLtoLink()
    parseImgur()
    parseYouTube()
    parseStreamable()
    anonymousToImage()
    commentInited = true
  }
};

$(function () {
  _setup_comment_to_link();
});

//console.trace('是誰讀取CommentLinkParser.js')

/***/ }),

/***/ "./lib-for-link/src/item-footer/comment/CommentToggle.js":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/CommentToggle.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentToggle_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentToggle.less */ "./lib-for-link/src/item-footer/comment/CommentToggle.less");
/* harmony import */ var _CommentToggle_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CommentToggle_less__WEBPACK_IMPORTED_MODULE_0__);
$(() => {
  let comments = $('#comments')
  $('.toggle-comment-display').click((event) => {
    event.stopPropagation()
    event.preventDefault()
    comments.toggleClass('hide-comments')
  })
})



/***/ }),

/***/ "./lib-for-link/src/item-footer/comment/CommentToggle.less":
/*!*****************************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/CommentToggle.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./CommentToggle.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/CommentToggle.less");

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

/***/ "./lib-for-link/src/item-footer/comment/comment-form-tool.less":
/*!*********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/comment-form-tool.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./comment-form-tool.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment-form-tool.less");

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

/***/ "./lib-for-link/src/item-footer/comment/comment.js":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/comment.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentToggle.js */ "./lib-for-link/src/item-footer/comment/CommentToggle.js");

// ----------------------------------
// 20160522 Relate post的功能

let displayComment = function () {
  var items = getBloggerVariable('post-commentJso');
  var msgs = getBloggerVariable('post-commentMsgs');
  var config = getBloggerVariable('post-commentConfig');
  
  var cursor = null;
  if (items && items.length > 0) {
    cursor = parseInt(items[items.length - 1].timestamp) + 1;
  }

  var bodyFromEntry = function (entry) {
    if (entry.gd$extendedProperty) {
      for (var k in entry.gd$extendedProperty) {
        if (entry.gd$extendedProperty[k].name === 'blogger.contentRemoved') {
          return '<span class="deleted-comment">' + entry.content.$t + '</span>';
        }
      }
    }
    return entry.content.$t;
  }

  var parse = function (data) {
    cursor = null;
    var comments = [];
    if (data && data.feed && data.feed.entry) {
      for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
        var comment = {};
        // comment ID, parsed out of the original id format
        var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
        comment.id = id ? id[2] : null;
        comment.body = bodyFromEntry(entry);
        comment.timestamp = Date.parse(entry.published.$t) + '';
        if (entry.author && entry.author.constructor === Array) {
          var auth = entry.author[0];
          if (auth) {
            comment.author = {
              name: (auth.name ? auth.name.$t : undefined),
              profileUrl: (auth.uri ? auth.uri.$t : undefined),
              avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
            };
          }
        }
        if (entry.link) {
          if (entry.link[2]) {
            comment.link = comment.permalink = entry.link[2].href;
          }
          if (entry.link[3]) {
            var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
            if (pid && pid[1]) {
              comment.parentId = pid[1];
            }
          }
        }
        comment.deleteclass = 'item-control blog-admin';
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name === 'blogger.itemClass') {
              comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
            }
          }
        }
        comments.push(comment);
      }
    }
    return comments;
  };

  /**
   * @author Pulipuli Chen 20190306
   * 完全不知道下面這個要幹嘛，先全部移除掉
   */
  /*
  var paginator = function (callback) {
    if (hasMore()) {
      var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
      if (cursor) {
        url += '&published-min=' + new Date(cursor).toISOString();
      }
      window.bloggercomments = function (data) {
        var parsed = parse(data);
        cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1;
        callback(parsed);
        window.bloggercomments = null;
      };
      url += '&callback=bloggercomments';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  };
  var hasMore = function () {
    return !!cursor;
  };
  var getMeta = function (key, comment) {
    if ('iswriter' === key) {
      var matches = !!comment.author
              && comment.author.name === config.authorName
              && comment.author.profileUrl === config.authorUrl;
      return matches ? 'true' : '';
    } else if ('deletelink' === key) {
      return config.baseUri + '/delete-comment.g?blogID='
              + config.blogId + '&postID=' + comment.id;
    } else if ('deleteclass' === key) {
      return comment.deleteclass;
    }
    return '';
  };

  var replybox = null;
  var replyUrlParts = null;
  var replyParent = undefined;

  var onReply = function (commentId, domId) {
    if (replybox === null) {
      // lazily cache replybox, and adjust to suit this style:
      replybox = document.getElementById('comment-editor');
      if (replybox !== null) {
        replybox.height = '210px';
        replybox.style.display = 'block';
        replyUrlParts = replybox.src.split('#');
      }
    }
    if (replybox && (commentId !== replyParent)) {
      document.getElementById(domId).insertBefore(replybox, null);
      replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
      replyParent = commentId;
    }
  };

  var hash = (window.location.hash || '#').substring(1);
  var startThread, targetComment;
  if (/^comment-form_/.test(hash)) {
    startThread = hash.substring('comment-form_'.length);
  } else if (/^c[0-9]+$/.test(hash)) {
    targetComment = hash.substring(1);
  }

  // Configure commenting API:
  var configJso = {
    'maxDepth': config.maxThreadDepth
  };
  var provider = {
    'id': config.postId,
    'data': items,
    //'loadNext': paginator,
    'hasMore': hasMore,
    'getMeta': getMeta,
    'onReply': onReply,
    'rendered': true,
    'initComment': targetComment,
    'initReplyThread': startThread,
    'config': configJso,
    'messages': msgs
  };

  
  var render = function () {
    if (goog && goog.comments) {
      var holder = document.getElementById('comment-holder');
      goog.comments.render(holder, provider);
    }

    var _div = $(".comment-replies ol li.comment span.comment-actions");
    for (var _i = 0; _i < _div.length; _i++) {
      _div.eq(_i).append(_reply_link.clone(true));
    }
    //console.log(_div.length);
  };

  // render now, or queue to render when library loads:
  if (goog && goog.comments) {
    render();
  } else {
    goog = goog || {};
    goog.comments = goog.comments || {};
    goog.comments.loadQueue = goog.comments.loadQueue || [];
    goog.comments.loadQueue.push(render);
  }
  */

};


let addSubCommentReplyLink = () => {
  
  // 為每個回覆的留言後面加上回覆的連結
  var _reply_link = $('<a kind="i" href="javascript:void(0);" target="_self" o="r">' + '回覆' + '</a>').click(function () {
    //console.log('OK')
    //console.log($(this).parents(".comment-replies:first").prev().find('a.comment-reply:first').length)
    $(this).parents(".comment-replies:first").prev().find('a.comment-reply:first')[0].click();
    var _top = $("#comment-editor:first").offset().top - $("#masthead .container:first").height();
    window.scrollTo(0, _top);
    initTopContinueButton()
    //console.log('addSubCommentReplyLink')
    //console.log([$('#top-continue').length, $('#top-continue').html()])
    
    
    /*
    $('#top-continue a.comment-reply').text('取消回覆，新增主題留言')
    
    $('#top-continue a.comment-reply').click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false
    })
    */
  });
  var _div = $(".comment-replies ol li.comment span.comment-actions");
  for (var _i = 0; _i < _div.length; _i++) {
    _div.eq(_i).prepend(_reply_link.clone(true));
  }
}

let isInitTopContinueButton = false
let topContinueButton = null
let initTopContinueButton = () => {
  let button
  if (isInitTopContinueButton === true) {
    topContinueButton.show()
    return true
  }
  
  let topContinue = $('#top-continue')
  button = topContinue.clone()
          .attr('id', 'top-continue-clone')
          .insertAfter(topContinue)
  
  button.find('a').text('取消回覆，新增主題留言')
  
  button.click(() => {
    if (window.confirm('你確定要取消回覆，新增主題留言嗎？') === false) {
      return false
    }
    topContinue.find('a')[0].click()
    button.hide()
  })
  
  topContinue.hide()
  
  isInitTopContinueButton = true
  topContinueButton = button
}

// --------------------------------------------------------------

let initCommnetToolsSelect = () => {
  $('#CommentToolsSelect').change(function () {
    let $option = $(this).find('option:selected')
    let url = $option.attr('data-url')
    //console.log(type)
    
    if (url === undefined) {
      return false
    }
    else {
      window.open(url)
    }
    
    this.value = ''
  })
}

// ---------------------------------------

$(() => {
  displayComment()
  addSubCommentReplyLink()
  initCommnetToolsSelect()
  //console.log("aaa")
})



/***/ }),

/***/ "./lib-for-link/src/item-footer/comment/comment.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/item-footer/comment/comment.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./comment.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment.less");

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

/***/ "./lib-for-link/src/item-footer/item-footer.js":
/*!*****************************************************!*\
  !*** ./lib-for-link/src/item-footer/item-footer.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_highlight_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/highlight/default.css */ "./lib-for-link/src/item-footer/modules/highlight/default.css");
/* harmony import */ var _modules_highlight_default_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_highlight_default_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_highlight_highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/highlight/highlight.js */ "./lib-for-link/src/item-footer/modules/highlight/highlight.js");
/* harmony import */ var _modules_highlight_highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_highlight_highlight_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_highlight_init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/highlight/init.js */ "./lib-for-link/src/item-footer/modules/highlight/init.js");
/* harmony import */ var _modules_highlight_init_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_highlight_init_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_lightbox2_lokeshdhakar_init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/lightbox2-lokeshdhakar/init.js */ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js");
/* harmony import */ var _modules_lightbox2_lokeshdhakar_init_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_lightbox2_lokeshdhakar_init_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/admin-tools-loader.js */ "./lib-for-link/src/item-footer/script/admin-tools-loader.js");
/* harmony import */ var _script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _script_icon_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/icon-replace.js */ "./lib-for-link/src/item-footer/script/icon-replace.js");
/* harmony import */ var _script_icon_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_script_icon_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_related_posts_related_posts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/related-posts/related-posts.js */ "./lib-for-link/src/item-footer/modules/related-posts/related-posts.js");
/* harmony import */ var _modules_related_posts_related_posts_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_related_posts_related_posts_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_CopyPasteHelper_CopyPasteHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/CopyPasteHelper/CopyPasteHelper.js */ "./lib-for-link/src/item-footer/modules/CopyPasteHelper/CopyPasteHelper.js");
/* harmony import */ var _modules_CopyPasteHelper_CopyPasteHelper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_CopyPasteHelper_CopyPasteHelper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _toc_toc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toc/toc.js */ "./lib-for-link/src/item-footer/toc/toc.js");
/* harmony import */ var _toc_toc_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_toc_toc_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _toc_toc_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toc/toc.less */ "./lib-for-link/src/item-footer/toc/toc.less");
/* harmony import */ var _toc_toc_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_toc_toc_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TableUtil_TableUtil_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableUtil/TableUtil.js */ "./lib-for-link/src/item-footer/TableUtil/TableUtil.js");
/* harmony import */ var _TableUtil_TableUtil_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableUtil/TableUtil.less */ "./lib-for-link/src/item-footer/TableUtil/TableUtil.less");
/* harmony import */ var _TableUtil_TableUtil_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TableUtil_TableUtil_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _comment_comment_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment/comment.js */ "./lib-for-link/src/item-footer/comment/comment.js");
/* harmony import */ var _comment_comment_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.less */ "./lib-for-link/src/item-footer/comment/comment.less");
/* harmony import */ var _comment_comment_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_comment_comment_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _comment_comment_form_tool_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comment/comment-form-tool.less */ "./lib-for-link/src/item-footer/comment/comment-form-tool.less");
/* harmony import */ var _comment_comment_form_tool_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_comment_comment_form_tool_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _comment_CommentLinkParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comment/CommentLinkParser.js */ "./lib-for-link/src/item-footer/comment/CommentLinkParser.js");
/* harmony import */ var _comment_CommentLinkParser_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_comment_CommentLinkParser_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-tools/AdminToolsStat.js */ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.js");
/* harmony import */ var _admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-tools/AdminToolsStat.less */ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less");
/* harmony import */ var _admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_17__);





//import "./modules/disqus/disqus.css"
//import "./modules/disqus/disqus.js"
//import "./modules/disqus/blogger_item.js"




















/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/CopyPasteHelper/CopyPasteHelper.js":
/*!*********************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/CopyPasteHelper/CopyPasteHelper.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

CopyPasteHelper = {
  copyPlainText: function (text) {
    var copyTextInput = document.getElementById("puliClipboardInput")
    if (copyTextInput === null) {
      var copyTextInput = document.createElement("textarea");
      copyTextInput.id = "puliClipboardInput"
      //copyTextInput.type = "text"
      document.body.appendChild(copyTextInput);
    }

    copyTextInput.value = text

    copyTextInput.style = "display: block; position: absolute; top: -1000px; left: -1000px;"
    /* Select the text field */
    copyTextInput.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copyTextInput.style = "display: none"
  },
  copyRichFormatListener: function (e, str) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  },
  copyRichFormat: function (str) {
    if (typeof(str) === 'object') {
      if (typeof(str.outerHTML) === 'string') {
        str = str.outerHTML
      }
      if (typeof(str.prop) === 'function') {
        str = str.prop('outerHTML')
      }
    }
    
    document.addEventListener("copy", (e) => {
      this.copyRichFormatListener(e, str)
    });
    document.execCommand("copy");
    document.removeEventListener("copy", (e) => {
      this.copyRichFormatListener(e, str)
    });
  }
}


/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/highlight/default.css":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/highlight/default.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../node_modules/postcss-loader/src?sourceMap!./default.css */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-footer/modules/highlight/default.css");

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

/* global CopyPasteHelper, hljs */

/**
 * 語法標亮
 * @author https://highlightjs.org/usage/ 20160928
 */
$(function () {
  $("article code[class]").each(function (_i, _code) {
    //console.log(_code.className)
    let className = _code.className
    
    _code = $(_code);
    if (_code.parent().filter("pre").length === 0) {
      _code.wrap("<pre></pre>");
    }

    if (typeof (className) === 'string') {
      className = className.split(' ')
              .filter(c => {
                return (c !== 'hljs')
              })
              .join('')
    }
    let label = $(`<span class="code-label puli-utils-append" title="Copy code">
            <span>${className}</span>
            <i aria-hidden="true" class="fa fa-copy"></i>
        </span>`).insertBefore(_code)

    label.click(function () {
      //console.log('click')
      let code = $(this).parent().clone()

      if (code.find('.hljs').length > 0) {
        code = code.find('.hljs:first')
      }
      code.find('.code-label:first').remove()

      let codeString = code.html()
      codeString = codeString.replace(/\&nbsp\;/g, ' ')
          .replace(/<br>/g, '\n')
      //console.log(codeString)
      CopyPasteHelper.copyPlainText(codeString)
    })
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


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/postcss-loader/src?sourceMap!./lightbox.css */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css");

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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./css/lightbox.css */ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css")
__webpack_require__(/*! ./js/lightbox.js */ "./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js")

/**
 * 加入圖片的lightbox
 * @author http://lokeshdhakar.com/projects/lightbox2/#getting-started 20160928
 */
$(function () {
  if (document.body.clientWidth < 460) {
    $.each($("article a:has(img)"), function (_i) {
      $(this).attr("target", "_blank");
    });
    return;
  }

  $.each($("article a:has(img)"), function (_i) {
    var _title = "image";
    if ($(this).attr("title") !== undefined) {
      try {
        _title = $(this).hasAttr("title");
      } catch (e) {

      }
    }
    _title = _title + _i;

    let href = $(this).attr("href")
    if (typeof(href) !== 'undefined' 
            && href.indexOf("amazon.com") === -1) {
      $(this).addClass("lightbox-group")
              .attr("href", $(this).attr("href").replace(/s1600-h/g, "s1600"))
              .attr("data-lightbox", _title);
    }
  });

  /*
   * 
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
    $("#lightbox .lb-close").click()
  });
  //$("#lightbox .lb-nav").
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
    jQuery(`
<div id="lightboxOverlay" class="lightboxOverlay"></div>
<div id="lightbox" class="lightbox">
    <div class="lb-outerContainer">
        <div class="lb-container">
            <img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
            <a class="lb-nav" target="_blank">
                <a class="lb-prev" href=""></a>
                <a class="lb-next" href=""></a>
            </a>
            <div class="lb-loader">
                <a class="lb-cancel"></a>
            </div>
        </div>
    </div>
    <div class="lb-dataContainer">
        <div class="lb-data">
            <div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div>
            <div class="lb-closeContainer">
                <a class="lb-close"></a>
            </div>
        </div>
    </div>
</div>
`).appendTo(jQuery('body'));

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
    
    //console.log("顯示了")
    //console.log($image)
    let src = self.album[imageNumber].link
    $("#lightbox .lb-nav").attr('href', src)
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

/***/ "./lib-for-link/src/item-footer/modules/related-posts/jQueryOwlCarousel.js":
/*!*********************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/related-posts/jQueryOwlCarousel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// jQuery OwlCarousel Modified For Blogger By themexpose

// http://www.owlgraphic.com/owlcarousel/
// http://ar-themes.blogspot.com/
// Copyright (c) 2013 Bartosz Wojciechowski
// Licensed under MIT

"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
                [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            _puli_related_post_render(this.$userItems);
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if ($(".owl-wrapper-outer").hasClass("stop-play")) {
                return;
            };
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 2 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0),
                !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
                    [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);

// 後來用printRelatedLabels_thumbs取代，不使用這個
//var _0x13d6=["\x6C\x20\x31\x30\x28\x65\x29\x7B\x6B\x28\x34\x20\x74\x3D\x30\x3B\x74\x3C\x65\x2E\x41\x2E\x4D\x2E\x32\x3B\x74\x2B\x2B\x29\x7B\x34\x20\x6E\x3D\x65\x2E\x41\x2E\x4D\x5B\x74\x5D\x3B\x33\x5B\x39\x5D\x3D\x6E\x2E\x70\x2E\x24\x74\x3B\x5A\x7B\x38\x5B\x39\x5D\x3D\x6E\x2E\x59\x24\x58\x2E\x54\x7D\x31\x31\x28\x72\x29\x7B\x73\x3D\x6E\x2E\x31\x6D\x2E\x24\x74\x3B\x61\x3D\x73\x2E\x78\x28\x22\x3C\x79\x22\x29\x3B\x62\x3D\x73\x2E\x78\x28\x27\x49\x3D\x22\x27\x2C\x61\x29\x3B\x63\x3D\x73\x2E\x78\x28\x27\x22\x27\x2C\x62\x2B\x35\x29\x3B\x64\x3D\x73\x2E\x31\x75\x28\x62\x2B\x35\x2C\x63\x2D\x62\x2D\x35\x29\x3B\x36\x28\x61\x21\x3D\x2D\x31\x26\x26\x62\x21\x3D\x2D\x31\x26\x26\x63\x21\x3D\x2D\x31\x26\x26\x64\x21\x3D\x22\x22\x29\x7B\x38\x5B\x39\x5D\x3D\x64\x7D\x6D\x7B\x36\x28\x45\x20\x42\x21\x3D\x3D\x22\x4B\x22\x29\x38\x5B\x39\x5D\x3D\x42\x3B\x6D\x20\x38\x5B\x39\x5D\x3D\x22\x22\x7D\x7D\x36\x28\x33\x5B\x39\x5D\x2E\x32\x3E\x43\x29\x33\x5B\x39\x5D\x3D\x33\x5B\x39\x5D\x2E\x31\x76\x28\x30\x2C\x43\x29\x2B\x22\x2E\x2E\x2E\x22\x3B\x6B\x28\x34\x20\x69\x3D\x30\x3B\x69\x3C\x6E\x2E\x76\x2E\x32\x3B\x69\x2B\x2B\x29\x7B\x36\x28\x6E\x2E\x76\x5B\x69\x5D\x2E\x31\x74\x3D\x3D\x22\x31\x73\x22\x29\x7B\x37\x5B\x39\x5D\x3D\x6E\x2E\x76\x5B\x69\x5D\x2E\x6F\x3B\x39\x2B\x2B\x7D\x7D\x7D\x7D\x6C\x20\x31\x34\x28\x29\x7B\x34\x20\x65\x3D\x77\x20\x75\x28\x30\x29\x3B\x34\x20\x74\x3D\x77\x20\x75\x28\x30\x29\x3B\x34\x20\x6E\x3D\x77\x20\x75\x28\x30\x29\x3B\x6B\x28\x34\x20\x72\x3D\x30\x3B\x72\x3C\x37\x2E\x32\x3B\x72\x2B\x2B\x29\x7B\x36\x28\x21\x4E\x28\x65\x2C\x37\x5B\x72\x5D\x29\x29\x7B\x65\x2E\x32\x2B\x3D\x31\x3B\x65\x5B\x65\x2E\x32\x2D\x31\x5D\x3D\x37\x5B\x72\x5D\x3B\x74\x2E\x32\x2B\x3D\x31\x3B\x6E\x2E\x32\x2B\x3D\x31\x3B\x74\x5B\x74\x2E\x32\x2D\x31\x5D\x3D\x33\x5B\x72\x5D\x3B\x6E\x5B\x6E\x2E\x32\x2D\x31\x5D\x3D\x38\x5B\x72\x5D\x7D\x7D\x33\x3D\x74\x3B\x37\x3D\x65\x3B\x38\x3D\x6E\x7D\x6C\x20\x4E\x28\x65\x2C\x74\x29\x7B\x6B\x28\x34\x20\x6E\x3D\x30\x3B\x6E\x3C\x65\x2E\x32\x3B\x6E\x2B\x2B\x29\x36\x28\x65\x5B\x6E\x5D\x3D\x3D\x74\x29\x4F\x20\x55\x3B\x4F\x20\x31\x64\x7D\x6C\x20\x53\x28\x65\x29\x7B\x34\x20\x74\x3B\x36\x28\x45\x20\x51\x21\x3D\x3D\x22\x4B\x22\x29\x74\x3D\x51\x3B\x6D\x20\x74\x3D\x22\x22\x3B\x6B\x28\x34\x20\x6E\x3D\x30\x3B\x6E\x3C\x37\x2E\x32\x3B\x6E\x2B\x2B\x29\x7B\x36\x28\x37\x5B\x6E\x5D\x3D\x3D\x65\x7C\x7C\x21\x33\x5B\x6E\x5D\x29\x7B\x37\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x33\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x38\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x6E\x2D\x2D\x7D\x7D\x34\x20\x72\x3D\x50\x2E\x56\x28\x28\x33\x2E\x32\x2D\x31\x29\x2A\x50\x2E\x57\x28\x29\x29\x3B\x34\x20\x6E\x3D\x30\x3B\x36\x28\x33\x2E\x32\x3E\x30\x29\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x70\x22\x3E\x3C\x4C\x3E\x27\x2B\x31\x32\x2B\x22\x3C\x2F\x4C\x3E\x3C\x2F\x6A\x3E\x22\x29\x3B\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x31\x33\x20\x7A\x2D\x31\x35\x20\x7A\x2D\x31\x36\x22\x20\x31\x37\x3D\x22\x7A\x2D\x31\x38\x22\x2F\x3E\x27\x29\x3B\x31\x39\x28\x6E\x3C\x33\x2E\x32\x26\x26\x6E\x3C\x31\x61\x26\x26\x6E\x3C\x31\x62\x29\x7B\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x31\x63\x2D\x79\x22\x3E\x3C\x61\x20\x27\x29\x3B\x36\x28\x6E\x21\x3D\x30\x29\x66\x2E\x67\x28\x22\x22\x29\x3B\x6D\x20\x66\x2E\x67\x28\x27\x22\x27\x29\x3B\x66\x2E\x67\x28\x27\x20\x6F\x3D\x22\x27\x2B\x37\x5B\x72\x5D\x2B\x27\x22\x20\x70\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x3E\x3C\x79\x20\x52\x3D\x22\x31\x65\x3A\x31\x66\x3B\x31\x67\x3A\x31\x68\x3B\x22\x20\x31\x69\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x20\x70\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x20\x49\x3D\x22\x27\x2B\x38\x5B\x72\x5D\x2E\x31\x6A\x28\x22\x2F\x31\x6B\x2D\x63\x2F\x22\x2C\x22\x2F\x31\x6C\x2D\x63\x2F\x22\x29\x2B\x27\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x6A\x3E\x27\x29\x3B\x6E\x2B\x2B\x3B\x36\x28\x72\x3C\x33\x2E\x32\x2D\x31\x29\x7B\x72\x2B\x2B\x7D\x6D\x7B\x72\x3D\x30\x7D\x7D\x66\x2E\x67\x28\x22\x3C\x2F\x6A\x3E\x22\x29\x3B\x37\x2E\x68\x28\x30\x2C\x37\x2E\x32\x29\x3B\x38\x2E\x68\x28\x30\x2C\x38\x2E\x32\x29\x3B\x33\x2E\x68\x28\x30\x2C\x33\x2E\x32\x29\x7D\x4A\x2E\x31\x6E\x3D\x6C\x28\x29\x7B\x34\x20\x65\x3D\x66\x2E\x31\x6F\x28\x22\x31\x70\x22\x29\x3B\x36\x28\x65\x3D\x3D\x31\x71\x29\x7B\x4A\x2E\x31\x72\x2E\x6F\x3D\x22\x48\x3A\x2F\x2F\x47\x2E\x46\x2E\x44\x2F\x22\x7D\x65\x2E\x31\x77\x28\x22\x6F\x22\x2C\x22\x48\x3A\x2F\x2F\x47\x2E\x46\x2E\x44\x2F\x22\x29\x3B\x65\x2E\x31\x78\x3D\x22\x31\x79\x22\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x6C\x61\x74\x65\x64\x54\x69\x74\x6C\x65\x73\x7C\x76\x61\x72\x7C\x7C\x69\x66\x7C\x72\x65\x6C\x61\x74\x65\x64\x55\x72\x6C\x73\x7C\x74\x68\x75\x6D\x62\x75\x72\x6C\x7C\x72\x65\x6C\x61\x74\x65\x64\x54\x69\x74\x6C\x65\x73\x4E\x75\x6D\x7C\x7C\x7C\x7C\x7C\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x77\x72\x69\x74\x65\x7C\x73\x70\x6C\x69\x63\x65\x7C\x7C\x64\x69\x76\x7C\x66\x6F\x72\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x65\x6C\x73\x65\x7C\x7C\x68\x72\x65\x66\x7C\x74\x69\x74\x6C\x65\x7C\x63\x6C\x61\x73\x73\x7C\x7C\x7C\x7C\x41\x72\x72\x61\x79\x7C\x6C\x69\x6E\x6B\x7C\x6E\x65\x77\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x69\x6D\x67\x7C\x6F\x77\x6C\x7C\x66\x65\x65\x64\x7C\x64\x65\x66\x61\x75\x6C\x74\x6E\x6F\x69\x6D\x61\x67\x65\x7C\x36\x30\x7C\x63\x6F\x6D\x7C\x74\x79\x70\x65\x6F\x66\x7C\x74\x68\x65\x6D\x65\x78\x70\x6F\x73\x65\x7C\x77\x77\x77\x7C\x68\x74\x74\x70\x7C\x73\x72\x63\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x7C\x68\x34\x7C\x65\x6E\x74\x72\x79\x7C\x63\x6F\x6E\x74\x61\x69\x6E\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x72\x65\x74\x75\x72\x6E\x7C\x4D\x61\x74\x68\x7C\x73\x70\x6C\x69\x74\x74\x65\x72\x63\x6F\x6C\x6F\x72\x7C\x73\x74\x79\x6C\x65\x7C\x70\x72\x69\x6E\x74\x52\x65\x6C\x61\x74\x65\x64\x4C\x61\x62\x65\x6C\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x75\x72\x6C\x7C\x74\x72\x75\x65\x7C\x66\x6C\x6F\x6F\x72\x7C\x72\x61\x6E\x64\x6F\x6D\x7C\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x7C\x6D\x65\x64\x69\x61\x7C\x74\x72\x79\x7C\x72\x65\x6C\x61\x74\x65\x64\x5F\x72\x65\x73\x75\x6C\x74\x73\x5F\x6C\x61\x62\x65\x6C\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x63\x61\x74\x63\x68\x7C\x72\x65\x6C\x61\x74\x65\x64\x70\x6F\x73\x74\x73\x74\x69\x74\x6C\x65\x7C\x63\x61\x72\x6F\x75\x73\x65\x6C\x5F\x72\x65\x6C\x61\x74\x65\x64\x7C\x72\x65\x6D\x6F\x76\x65\x52\x65\x6C\x61\x74\x65\x64\x44\x75\x70\x6C\x69\x63\x61\x74\x65\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x63\x61\x72\x6F\x75\x73\x65\x6C\x7C\x74\x68\x65\x6D\x65\x7C\x69\x64\x7C\x64\x65\x6D\x6F\x7C\x77\x68\x69\x6C\x65\x7C\x32\x30\x7C\x6D\x61\x78\x72\x65\x73\x75\x6C\x74\x73\x7C\x69\x74\x65\x6D\x7C\x66\x61\x6C\x73\x65\x7C\x77\x69\x64\x74\x68\x7C\x32\x34\x30\x70\x78\x7C\x68\x65\x69\x67\x68\x74\x7C\x31\x36\x30\x70\x78\x7C\x61\x6C\x74\x7C\x72\x65\x70\x6C\x61\x63\x65\x7C\x73\x37\x32\x7C\x73\x32\x39\x30\x7C\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x6F\x6E\x6C\x6F\x61\x64\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x6E\x75\x6C\x6C\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x61\x6C\x74\x65\x72\x6E\x61\x74\x65\x7C\x72\x65\x6C\x7C\x73\x75\x62\x73\x74\x72\x7C\x73\x75\x62\x73\x74\x72\x69\x6E\x67\x7C\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x54\x68\x65\x6D\x65\x58\x70\x6F\x73\x65","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0x571ex1,_0x571ex2,_0x571ex3,_0x571ex4,_0x571ex5,_0x571ex6){_0x571ex5=function (_0x571ex3){return (_0x571ex3<_0x571ex2?_0x13d6[4]:_0x571ex5(parseInt(_0x571ex3/_0x571ex2)))+((_0x571ex3=_0x571ex3%_0x571ex2)>35?String[_0x13d6[5]](_0x571ex3+29):_0x571ex3.toString(36));} ;if(!_0x13d6[4][_0x13d6[6]](/^/,String)){while(_0x571ex3--){_0x571ex6[_0x571ex5(_0x571ex3)]=_0x571ex4[_0x571ex3]||_0x571ex5(_0x571ex3);} ;_0x571ex4=[function (_0x571ex5){return _0x571ex6[_0x571ex5];} ];_0x571ex5=function (){return _0x13d6[7];} ;_0x571ex3=1;} ;while(_0x571ex3--){if(_0x571ex4[_0x571ex3]){_0x571ex1=_0x571ex1[_0x13d6[6]]( new RegExp(_0x13d6[8]+_0x571ex5(_0x571ex3)+_0x13d6[8],_0x13d6[9]),_0x571ex4[_0x571ex3]);} ;} ;return _0x571ex1;} (_0x13d6[0],62,97,_0x13d6[3][_0x13d6[2]](_0x13d6[1]),0,{}));



let _puli_related_post_render = function (_owl_items) {
  //console.log($(_owl_items[0]).html());
  for (var _i = 0; _i < _owl_items.length; _i++) {
    var _item = $(_owl_items[_i]);
    var _a = _item.find("a:first");
    var _title = _a.attr("title");
    _a.prepend('<div class="related-post-title">' + _title + '</div>');
  }

  $(function () {
    var _stop_play = "stop-play";
    $(".owl-wrapper-outer").hover(function () {
      $(this).addClass(_stop_play);
    }, function () {
      $(this).removeClass(_stop_play);
    });
  });
};

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/related-posts/printRelatedLabels_thumbs.js":
/*!*****************************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/related-posts/printRelatedLabels_thumbs.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

related_results_labels_thumbs = function (e) {
  for (var t = 0; t < e.feed.entry.length; t++) {
    var n = e.feed.entry[t];
    relatedTitles[relatedTitlesNum] = n.title.$t;
    try {
      thumburl[relatedTitlesNum] = n.media$thumbnail.url
    } catch (r) {
      s = n.content.$t;
      a = s.indexOf("<img");
      b = s.indexOf('src="', a);
      c = s.indexOf('"', b + 5);
      d = s.substr(b + 5, c - b - 5);
      if (a != -1 && b != -1 && c != -1 && d != "") {
        thumburl[relatedTitlesNum] = d
      } else {
        if (typeof defaultnoimage !== "undefined") {
          thumburl[relatedTitlesNum] = defaultnoimage;
        }
        else {
          thumburl[relatedTitlesNum] = ""
        }
      }
    }
    if (relatedTitles[relatedTitlesNum].length > 60) {
      relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
    }
    for (var i = 0; i < n.link.length; i++) {
      if (n.link[i].rel == "alternate") {
        relatedUrls[relatedTitlesNum] = n.link[i].href;
        relatedTitlesNum++
      }
    }
  }
}

removeRelatedDuplicates_thumbs = function () {
  var e = new Array(0);
  var t = new Array(0);
  var n = new Array(0);
  for (var r = 0; r < relatedUrls.length; r++) {
    if (!contains_thumbs(e, relatedUrls[r])) {
      e.length += 1;
      e[e.length - 1] = relatedUrls[r];
      t.length += 1;
      n.length += 1;
      t[t.length - 1] = relatedTitles[r];
      n[n.length - 1] = thumburl[r]
    }
  }
  relatedTitles = t;
  relatedUrls = e;
  thumburl = n
}

contains_thumbs = function (e, t) {
  for (var n = 0; n < e.length; n++) {
    if (e[n] === t) {
      return true;
    }
  }
  return false
}

printRelatedLabels_thumbs = function (e) {
  //console.log(e)

  var t;
  if (typeof splittercolor !== "undefined") {
    t = splittercolor;
  } else {
    t = "";
  }
  for (var n = 0; n < relatedUrls.length; n++) {
    if (relatedUrls[n] == e || !relatedTitles[n]) {
      relatedUrls.splice(n, 1);
      relatedTitles.splice(n, 1);
      thumburl.splice(n, 1);
      n--
    }
  }
  var r = Math.floor((relatedTitles.length - 1) * Math.random());
  var n = 0;
  var c = $('<div></div>').appendTo($('.related-posts:first'))
  /*
  if (relatedTitles.length > 0) {
    //document.write('<div class="title"><h4>' + relatedpoststitle + "</h4></div>");
    c.append($('<div class="title"><h4>' + relatedpoststitle + '</h4></div>'))
  }
  */
  //document.write('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>');
  //var owl = $('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>').appendTo(c)
  var owl = $('.related-posts:first #owl-demo')
  //console.log(relatedTitles)
  if (relatedTitles.length > 0) {
    $('.related-posts.hidden').removeClass('hidden')
  }

  while (n < relatedTitles.length && n < 20 && n < maxresults) {
    //document.write('<div class="item-img"><a ');
    var aTag = '<div class="item-img"><a '
    if (n !== 0) {
      //document.write("");
    } else {
      //document.write('"');
      aTag += '"'
    }
    //document.write(' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img style="width:240px;height:160px;" alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>');
    aTag += ' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>'
    n++;
    if (r < relatedTitles.length - 1) {
      r++
    } else {
      r = 0
    }
    owl.append($(aTag))
  }
  //document.write("</div>");
  relatedUrls.splice(0, relatedUrls.length);
  thumburl.splice(0, thumburl.length);
  relatedTitles.splice(0, relatedTitles.length)
}

/*
 window.onload = function() {
 var e = document.getElementById("mycontent");
 if (e == null) {
 window.location.href = "http://www.themexpose.com/"
 }
 e.setAttribute("href", "http://www.themexpose.com/");
 e.innerHTML = "ThemeXpose"
 }
 */

/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/related-posts/related-posts.js":
/*!*****************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/related-posts/related-posts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./related-posts.less */ "./lib-for-link/src/item-footer/modules/related-posts/related-posts.less")
__webpack_require__(/*! ./jQueryOwlCarousel.js */ "./lib-for-link/src/item-footer/modules/related-posts/jQueryOwlCarousel.js")
__webpack_require__(/*! ./printRelatedLabels_thumbs.js */ "./lib-for-link/src/item-footer/modules/related-posts/printRelatedLabels_thumbs.js")

maxresults = 10
splittercolor = ''
//relatedpoststitle = 'Related Posts'

let pulipuli_related_results_labels_thumbs = function (e) {
  //console.log(e);
  /*
  if (typeof (e.feed.entry) === "undefined") {
    if ($(".related-posts").hasClass("has-item") === false) {
      $(".related-posts").hide();
    }
    return;
  } else {
    $(".related-posts").addClass("has-item");
    $(".related-posts").show();
  }
  */

  for (var t = 0; t < e.feed.entry.length; t++) {
    var n = e.feed.entry[t];
    relatedTitles[relatedTitlesNum] = n.title.$t;
    try {
      thumburl[relatedTitlesNum] = n.media$thumbnail.url;
    } catch (r) {
      var s = n.content.$t;
      var a = s.indexOf("<img");
      var b = s.indexOf('src="', a);
      var c = s.indexOf('"', b + 5);
      var d = s.substr(b + 5, c - b - 5);
      if (a !== -1 && b !== -1 && c !== -1 && d !== "") {
        thumburl[relatedTitlesNum] = d;
      } else {
        if (typeof defaultnoimage !== "undefined")
          thumburl[relatedTitlesNum] = defaultnoimage;
        else
          thumburl[relatedTitlesNum] = "";
      }
    }
    //if (relatedTitles[relatedTitlesNum].length > 60) {
    //    relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
    //}
    for (var i = 0; i < n.link.length; i++) {
      if (n.link[i].rel === "alternate") {
        relatedUrls[relatedTitlesNum] = n.link[i].href;
        relatedTitlesNum++;
      }
    }
  }
}

let loadLabelsRelatedPosts = (callback) => {
  let labelList = getBloggerPostsVariable('data-label-name')[0]
  //console.log(labelList)
  
  let maxResults = 6
  if (labelList.length === 1) {
    maxResults = 10
  }
  //console.log(labelList.length)
  //console.log(labelList)
  let loop = (i) => {
    if (i < labelList.length) {
      let label = encodeURIComponent(labelList[i])
      //console.log(label)

      if (typeof (label) !== 'string'
              || label.trim() === '') {
        i++
        loop(i)
        return
      }
      // <script src='/feeds/posts/default/-/Software/GoogleDoc?alt=json-in-script&callback=pulipuli_related_results_labels_thumbs&max-results=6' type='text/javascript'></script>
      let url = '/feeds/posts/default/-/' + label + '?alt=json-in-script&max-results=' + maxResults + '&callback=?'
      //console.log(url)
      lscacheHelper.getJSON(url, (data) => {
        //$.getJSON(url, (data) => {
        //console.log(data)
        pulipuli_related_results_labels_thumbs(data)
        i++
        loop(i)
      })
    } else {
      if (typeof (callback) === 'function') {
        callback()
      }
    }
  }
  loop(0)
}

// --------------------

relatedTitles = new Array;
relatedTitlesNum = 0;
relatedUrls = new Array;
thumburl = new Array;

$(function () {
  let postUrl = getBloggerPostsVariable('data-post-url')[0]
  if (typeof (postUrl) === 'undefined') {
    return
  }


  loadLabelsRelatedPosts(() => {
    removeRelatedDuplicates_thumbs();
    //console.log('printRelatedLabels_thumbs')
    printRelatedLabels_thumbs(postUrl);

    $(".related-posts #owl-demo").owlCarousel({
      autoPlay: 5000,
      items: 4,
      itemsDesktop: [1200, 3],
      //itemsDesktopSmall: [979, 3],
      itemsTablet: [940, 2],
      //itemsTabletSmall: [979, 3],
      itemsMobile: [340, 1]
    })
  })
});

// ----------------------------------------


/***/ }),

/***/ "./lib-for-link/src/item-footer/modules/related-posts/related-posts.less":
/*!*******************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/modules/related-posts/related-posts.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../node_modules/postcss-loader/src?sourceMap!../../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./related-posts.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/modules/related-posts/related-posts.less");

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

/***/ "./lib-for-link/src/item-footer/script/admin-tools-loader.js":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/item-footer/script/admin-tools-loader.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global articleDownload */

let loadAdminToolsIsLoaded = false
let loadAdminTools = function (callback) {
  //console.log(loadAdminToolsIsLoaded)
  if (loadAdminToolsIsLoaded === true) {
    if (typeof(callback) === "function") {
      callback()
    }
  }
  else {
    //let adminToolURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    let adminToolURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    
    if ($('script[src$="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js"]').length === 0) {
      // 嘗試找尋另一種的讀取方法
      let baseScriptTag = $('script[src$="/lib-for-link/dist/global-header.js"]:first')
      let src = baseScriptTag.attr('src')
      
      adminToolURL = src.slice(0, src.lastIndexOf('/dist/')) + '/dist/admin-tools.js'
    }
    
    //console.log(adminToolURL)
    
    $.getScript(adminToolURL, () => {
      loadAdminToolsIsLoaded = true
      loadAdminTools(callback)
    })
  }
}

$(() => {
  
  $('#main .entry-content .blog-admin .copy-html-button').click(function () {
    loadAdminTools(() => {
      articleDownload.copyHTML()
    })
  })
  
  $('#main .entry-content .blog-admin .download-article-button').click(function () {
    //console.log('aaa')
    loadAdminTools(() => {
      articleDownload.downloadArticle()
    })
  })
  
  if (location.href.endsWith('downloadArticle=true')) {
    setTimeout(() => {
      $('#main .entry-content .blog-admin .download-article-button:visible').click()
    }, 1000)
  }
})

/***/ }),

/***/ "./lib-for-link/src/item-footer/script/icon-replace.js":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/item-footer/script/icon-replace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


(function () {
    var _getQueryVariable = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if (pair[0] === variable) {
            return pair[1];
          }
        }
    };
    
    var _icon = _getQueryVariable("icon");
    if (_icon !== undefined) {
        $("head link[rel='icon']").remove();
        $("head link[rel='shortcut icon']").remove();
        $("head link[rel='apple-touch-icon']").remove();
        $("head").append('<link rel="shortcut icon" href="'+_icon+'" type="image/' + _icon.substr(_icon.lastIndexOf('.')+1) + '" size="192x192" />');
    }
})();


/***/ }),

/***/ "./lib-for-link/src/item-footer/toc/toc.js":
/*!*************************************************!*\
  !*** ./lib-for-link/src/item-footer/toc/toc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/* global PULI_UTILS, CopyPasteHelper */

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
  let cateID = 'postcata' + PULI_UTILS.create_page_id()
  let isCached = false
  
  let cachedHTML = localStorage.getItem(cateID)
  if (cachedHTML !== null) {
    isCached = true
  }

  //if (PULI_UTILS.is_blogger_fullpage() === false) {
  //	return;
  //}

  //PULI_UTILS.log('post.toc', '1');

  $(function () {	//頁面讀取完之後，再進行讀取
  
    //取得divID所在的所有的heading
    
    /**
     * 修復 #77的問題
     * https://github.com/pulipulichen/Pulipuli-Blog/issues/77
     * @author Pulipuli Chen 20190521
     * @returns {Array}
     */
    var postBody = $("#main article.article:first");

    /**
     * 如果已經有cata-title元素，則不使用本功能
     */
    if (postBody.find('.cate-title').length > 0) {
      return;
    }
    
    let headingTag = ['h4', 'h5']
    if (postBody.find("h2").length > 0) {
      headingTag = ['h2', 'h3']
      postBody.addClass('heading-h2-h3')
    }
    else {
      postBody.addClass('heading-h4-h5')
    }
    //console.log(headingTag)
    
    if (typeof heading === "undefined") {
      heading = headingTag[0];
    }

    //PULI_UTILS.log('post.toc', '2');
    var firstHeading = $('div.entry-content:first > article > ' + heading + ':first');
    cleanFirstHeading(firstHeading)

    if (isCached === false 
            && typeof cata_container === "undefined") {

      //先檢查是否有取消目錄的功能
      if ($('div.entry-content .disable-post-catalog').length > 0) {
        return;
      }

      

      //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

      if (firstHeading.length === 0) {
        return;
      }

      cata_container = $('<span></span>')
              .addClass("puli-utils-append")
              .hide()
              .insertBefore(firstHeading)
      cata_container.attr('id', cateID)
    }
    else {
      //console.log(cachedHTML)
      //console.log(firstHeading.length)
      cata_container = $(cachedHTML).insertBefore(firstHeading)
    }

    //get cataSlt ID
    //var cata = jQuery(cata_container)
    var prefix = cateID

    //postBody.css("border", "1px solid red");


    //PULI_UTILS.log('post.toc', '3');

    var headingAry = getHeadingAry(postBody, headingTag, firstHeading)

    var cataTitleID = prefix + "cataTitle";
    var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');
    var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '" title="Go to top">'
            + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'
            + '</a>');

    var ulObj
    if (isCached === false) {
      ulObj = jQuery("<ul></ul>")
              .addClass("puli-toc")
              .addClass("puli-utils-append")
    }

    //在每個Heading後面加入錨點
    //console.log(headingAry)
    for (i = 0; i < headingAry.length; i++) {
      var hdObj = headingAry[i];

      var title = hdObj.text();
      var anchorID = prefix + "_anchor" + i;

      var anc = jQuery('<a class="heading-anchor puli-utils-append" id="' + anchorID + '" name="' + anchorID + '" />');
      hdObj.prepend(anc);
      
      /**
       * @author Pulipuli Chen 20190929
       * 與此同時，也在每個Heading前面加上錨點
       */
      let permanentLink = jQuery(`<a class="heading-permanent-link puli-utils-append" href="#${anchorID}" title="Copy link">
        <i aria-hidden="true" class="fa fa-link" title="Copy link"></i>
      </a>`);
      hdObj.prepend(permanentLink);
      
      permanentLink.click(function (event) {
        
        /*
        let url = location.href
        if (url.indexOf('#') > 0) {
          url = url.slice(0, url.indexOf('#'))
        }
        */
        let url = this.href
        CopyPasteHelper.copyPlainText(url)
        /*
        var textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        textArea.style.position = 'absolute'
        textArea.style.top = top + 'px'
        
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          //console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
        
        event.preventDefault()
        event.stopPropagation()
        */
        //return false
      })

      hdObj.prepend(goCata.clone());

      var tagName = hdObj.prop('tagName');
      if (tagName === undefined) {
        tagName = hdObj.attr('tagName');
      }
      if (typeof (tagName) === "string") {
        tagName = tagName.toLowerCase();
      }
      
      // -----------------------------------

      if (isCached === false) {
        var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

        if (tagName === headingTag[0]) {
          ulObj.append(hd);
        } else if (tagName === headingTag[1]) {

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
      }
      //ulObj.append(hd);
    }

    //PULI_UTILS.log('post.toc', '5');

    /**
     * 顯示目錄
     */
    //console.log(headingAry.length)
    if (isCached === false) {
      if (headingAry.length > 1) {
        cata_container.append(cataTitle)
                .append(ulObj)
                .slideDown();

        cata_container.prepend('<hr class="puli-utils-append" />');
        cata_container.append('<hr class="puli-utils-append" />');
      }
    }
    else {
      cata_container.slideDown();
    }
    
    if (isCached === false) {
      let html = cata_container.prop('outerHTML')
      html = html.replace('overflow: hidden;', '')
      cata_container.find('.puli-toc').dblclick(() => {
        localStorage.removeItem(cateID)
      })
      //console.log(html)
      
      localStorage.setItem(cateID, html)
    }
  
  });	//$(function () {

  //PULI_UTILS.log('post.toc', '6');
  
};

let getHeadingAry = function (postBody, headingTag, firstHeading) {
  let top;
  
  var headingAry = postBody.find(headingTag.join(','))
  
  var headingTop = [];
  var topId = {};
  for (let i = 0; i < headingAry.length; i++) {
    let heading = headingAry.eq(i);
    top = heading.offset().top;
    topId[top] = heading;
    headingTop.push(top);
  }

  if (headingTop.length === 1) {
    let hr = firstHeading.prevAll().filter('hr');
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
  for (let i = 0; i < headingTop.length; i++) {
    top = headingTop[i];
    heading = topId[top];
    headingAry.push(heading);
  }
  
  return headingAry
}

let cleanFirstHeading = function (firstHeading) {
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
  } else {
    var div = firstHeading.prevAll("div:first");
    hr = div.children(':last').filter('hr');
    if (hr.length > 0) {
      hr.remove();
      /*console.log("有 div > hr");*/
    } else {
      var p = firstHeading.prevAll("p:first");
      //p.css("border", "1px solid red");
      //console.log([p.length, p.html()]);
      hr = p.children().filter('hr');
      if (hr.length > 0) {
        hr.remove();
        /*console.log("有 p > hr");*/
      } else {
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
}

$(function () {
  PULI_UTILS.post.toc();
});

/***/ }),

/***/ "./lib-for-link/src/item-footer/toc/toc.less":
/*!***************************************************!*\
  !*** ./lib-for-link/src/item-footer/toc/toc.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./toc.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/toc/toc.less");

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

/***/ "./lib-for-link/src/item-footer/vandors/dom-to-image/dom-to-image.js":
/*!***************************************************************************!*\
  !*** ./lib-for-link/src/item-footer/vandors/dom-to-image/dom-to-image.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}


    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function (node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function (clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function (property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function (canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if(typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if(typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function (image) {
                var canvas = newCanvas(domNode);
                canvas.getContext('2d').drawImage(image, 0, 0);
                return canvas;
            });

        function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function (clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function (clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function () {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function (child) {
                    done = done
                        .then(function () {
                            return cloneNode(child, filter);
                        })
                        .then(function (childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function () {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;
                    else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function (name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function (cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function () {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function (node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function (xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function (foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function (svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function (resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function (resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function () {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if(domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function (resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if(domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if(split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if(placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function () {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if(placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function (arg) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function (url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function (url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function (data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function (dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function (urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function (url) {
                        done = done.then(function (string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function (webFonts) {
                    return Promise.all(
                        webFonts.map(function (webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function (cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function (rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function (rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function (rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function (sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        //console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function () {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function (data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function (dataUrl) {
                        return new Promise(function (resolve, reject) {
                            element.onload = resolve;
                            element.onerror = reject;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function () {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function (child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function (inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function () {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-footer/modules/highlight/default.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/item-footer/modules/highlight/default.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;background:#f0f0f0}.hljs,.hljs-subst{color:#444}.hljs-comment{color:#888}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#bc6060}.hljs-literal{color:#78a960}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}", "",{"version":3,"sources":["default.css"],"names":[],"mappings":"AAMA,MACE,aAAc,CACd,eAAgB,CAChB,YAAc,CACd,kBACF,CAKA,kBAEE,UACF,CAEA,cACE,UACF,CAEA,4FAME,eACF,CAKA,0HAQE,UACF,CAEA,0BAEE,UAAc,CACd,eACF,CAEA,sHAOE,aACF,CAKA,cACE,aACF,CAEA,sDAIE,aACF,CAKA,WACE,aACF,CAEA,kBACE,aACF,CAKA,eACE,iBACF,CAEA,aACE,eACF","file":"default.css","sourcesContent":["/*\n\nOriginal highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #F0F0F0;\n}\n\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #444;\n}\n\n.hljs-comment {\n  color: #888888;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-type,\n.hljs-string,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #880000;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #880000;\n  font-weight: bold;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #BC6060;\n}\n\n\n/* Language color: hue: 90; */\n\n.hljs-literal {\n  color: #78A960;\n}\n\n.hljs-built_in,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body:after{content:url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png);display:none}body.lb-disable-scrolling{overflow:hidden}.lightboxOverlay{position:absolute;top:0;left:0;z-index:9999;background-color:#000;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);opacity:.8;display:none}.lightbox{position:absolute;left:0;width:100%;z-index:10000;text-align:center;line-height:0;font-weight:400}.lightbox .lb-image{display:block;height:auto;max-width:inherit;border-radius:3px}.lightbox a img{border:none}.lb-outerContainer{position:relative;background-color:#fff;*zoom:1;width:250px;height:250px;margin:0 auto;border-radius:4px}.lb-outerContainer:after{content:\"\";display:table;clear:both}.lb-container{padding:4px}.lb-loader{position:absolute;top:43%;left:0;height:25%;width:100%;text-align:center;line-height:0}.lb-cancel{display:block;width:32px;height:32px;margin:0 auto;background:url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) no-repeat}.lb-nav{position:absolute;top:0;left:0;height:100%;width:100%;z-index:10}.lb-container>.nav{left:0}.lb-nav a{outline:none;background-image:url(\"data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\")}.lb-next,.lb-prev{height:100%;cursor:pointer;display:block}.lb-nav a.lb-prev{width:34%;left:0;float:left;background:url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) left 48% no-repeat;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;-webkit-transition:opacity .6s;-moz-transition:opacity .6s;-o-transition:opacity .6s;transition:opacity .6s}.lb-nav a.lb-prev:hover{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}.lb-nav a.lb-next{width:64%;right:0;float:right;background:url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png) right 48% no-repeat;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;-webkit-transition:opacity .6s;-moz-transition:opacity .6s;-o-transition:opacity .6s;transition:opacity .6s}.lb-nav a.lb-next:hover{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}.lb-dataContainer{margin:0 auto;padding-top:5px;*zoom:1;width:100%;-moz-border-radius-bottomleft:4px;-webkit-border-bottom-left-radius:4px;border-bottom-left-radius:4px;-moz-border-radius-bottomright:4px;-webkit-border-bottom-right-radius:4px;border-bottom-right-radius:4px}.lb-dataContainer:after{content:\"\";display:table;clear:both}.lb-data{padding:0 4px;color:#ccc}.lb-data .lb-details{width:85%;float:left;text-align:left;line-height:1.1em}.lb-data .lb-caption{font-size:13px;font-weight:700;line-height:1em}.lb-data .lb-number{display:block;clear:left;padding-bottom:1em;font-size:12px;color:#999}.lb-data .lb-close{display:block;float:right;width:30px;height:30px;background:url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) 100% 0 no-repeat;text-align:right;outline:none;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70);opacity:.7;-webkit-transition:opacity .2s;-moz-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}.lb-data .lb-close:hover{cursor:pointer;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}", "",{"version":3,"sources":["lightbox.css"],"names":[],"mappings":"AACA,WACE,+eAAgf,CAChf,YACF,CAEA,0BACE,eACF,CAEA,iBACE,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,YAAa,CACb,qBAAuB,CACvB,0DAA2D,CAC3D,UAAY,CACZ,YACF,CAEA,UACE,iBAAkB,CAClB,MAAO,CACP,UAAW,CACX,aAAc,CACd,iBAAkB,CAClB,aAAc,CACd,eACF,CAEA,oBACE,aAAc,CACd,WAAY,CACZ,iBAAkB,CAClB,iBACF,CAEA,gBACE,WACF,CAEA,mBACE,iBAAkB,CAClB,qBAAuB,EACvB,MAAQ,CACR,WAAY,CACZ,YAAa,CACb,aAAc,CACd,iBACF,CAEA,yBACE,UAAW,CACX,aAAc,CACd,UACF,CAEA,cACE,WACF,CAEA,WACE,iBAAkB,CAClB,OAAQ,CACR,MAAO,CACP,UAAW,CACX,UAAW,CACX,iBAAkB,CAClB,aACF,CAEA,WACE,aAAc,CACd,UAAW,CACX,WAAY,CACZ,aAAc,CACd,gJACF,CAEA,QACE,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,WAAY,CACZ,UAAW,CACX,UACF,CAEA,mBACE,MACF,CAEA,UACE,YAAa,CACb,0GACF,CAEA,kBACE,WAAY,CACZ,cAAe,CACf,aACF,CAEA,kBACE,SAAU,CACV,MAAO,CACP,UAAW,CACX,sJAAuJ,CACvJ,yDAA0D,CAC1D,SAAU,CACV,8BAAgC,CAChC,2BAA6B,CAC7B,yBAA2B,CAC3B,sBACF,CAEA,wBACE,2DAA4D,CAC5D,SACF,CAEA,kBACE,SAAU,CACV,OAAQ,CACR,WAAY,CACZ,uJAAwJ,CACxJ,yDAA0D,CAC1D,SAAU,CACV,8BAAgC,CAChC,2BAA6B,CAC7B,yBAA2B,CAC3B,sBACF,CAEA,wBACE,2DAA4D,CAC5D,SACF,CAEA,kBACE,aAAc,CACd,eAAgB,EAChB,MAAQ,CACR,UAAW,CACX,iCAAkC,CAClC,qCAAsC,CACtC,6BAA8B,CAC9B,kCAAmC,CACnC,sCAAuC,CACvC,8BACF,CAEA,wBACE,UAAW,CACX,aAAc,CACd,UACF,CAEA,SACE,aAAc,CACd,UACF,CAEA,qBACE,SAAU,CACV,UAAW,CACX,eAAgB,CAChB,iBACF,CAEA,qBACE,cAAe,CACf,eAAiB,CACjB,eACF,CAEA,oBACE,aAAc,CACd,UAAW,CACX,kBAAmB,CACnB,cAAe,CACf,UACF,CAEA,mBACE,aAAc,CACd,WAAY,CACZ,UAAW,CACX,WAAY,CACZ,qJAAyJ,CACzJ,gBAAiB,CACjB,YAAa,CACb,0DAA2D,CAC3D,UAAY,CACZ,8BAAgC,CAChC,2BAA6B,CAC7B,yBAA2B,CAC3B,sBACF,CAEA,yBACE,cAAe,CACf,2DAA4D,CAC5D,SACF","file":"lightbox.css","sourcesContent":["/* Preload images */\nbody:after {\n  content: url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png);\n  display: none;\n}\n\nbody.lb-disable-scrolling {\n  overflow: hidden;\n}\n\n.lightboxOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background-color: black;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  opacity: 0.8;\n  display: none;\n}\n\n.lightbox {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 10000;\n  text-align: center;\n  line-height: 0;\n  font-weight: normal;\n}\n\n.lightbox .lb-image {\n  display: block;\n  height: auto;\n  max-width: inherit;\n  border-radius: 3px;\n}\n\n.lightbox a img {\n  border: none;\n}\n\n.lb-outerContainer {\n  position: relative;\n  background-color: white;\n  *zoom: 1;\n  width: 250px;\n  height: 250px;\n  margin: 0 auto;\n  border-radius: 4px;\n}\n\n.lb-outerContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.lb-container {\n  padding: 4px;\n}\n\n.lb-loader {\n  position: absolute;\n  top: 43%;\n  left: 0;\n  height: 25%;\n  width: 100%;\n  text-align: center;\n  line-height: 0;\n}\n\n.lb-cancel {\n  display: block;\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n  background: url(//2.bp.blogspot.com/-FIcNyNg4GAA/XHeikFwU0EI/AAAAAAAED-U/EXyhbC5ulewjYzDnH-GiU-5iesSzvUHjACK4BGAYYCw/s1600/loading.gif) no-repeat;\n}\n\n.lb-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n\n.lb-container > .nav {\n  left: 0;\n}\n\n.lb-nav a {\n  outline: none;\n  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');\n}\n\n.lb-prev, .lb-next {\n  height: 100%;\n  cursor: pointer;\n  display: block;\n}\n\n.lb-nav a.lb-prev {\n  width: 34%;\n  left: 0;\n  float: left;\n  background: url(//1.bp.blogspot.com/-mtGEP6IMjOU/XHeikJlbQLI/AAAAAAAED-g/5N9iYUg0eDYLk6fEWnmaOAO_zNpS-eepACK4BGAYYCw/s1600/prev.png) left 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.lb-nav a.lb-prev:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.lb-nav a.lb-next {\n  width: 64%;\n  right: 0;\n  float: right;\n  background: url(//1.bp.blogspot.com/-jZovgN3hsXQ/XHeij_OAJVI/AAAAAAAED-I/kGnuSu_LW6sJ6cUeRebh89FqEZd-OUd_QCK4BGAYYCw/s1600/next.png) right 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.lb-nav a.lb-next:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.lb-dataContainer {\n  margin: 0 auto;\n  padding-top: 5px;\n  *zoom: 1;\n  width: 100%;\n  -moz-border-radius-bottomleft: 4px;\n  -webkit-border-bottom-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  -moz-border-radius-bottomright: 4px;\n  -webkit-border-bottom-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.lb-dataContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.lb-data {\n  padding: 0 4px;\n  color: #ccc;\n}\n\n.lb-data .lb-details {\n  width: 85%;\n  float: left;\n  text-align: left;\n  line-height: 1.1em;\n}\n\n.lb-data .lb-caption {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1em;\n}\n\n.lb-data .lb-number {\n  display: block;\n  clear: left;\n  padding-bottom: 1em;\n  font-size: 12px;\n  color: #999999;\n}\n\n.lb-data .lb-close {\n  display: block;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background: url(//4.bp.blogspot.com/-CYj_Sg6HAKQ/XHeikDduAiI/AAAAAAAED-c/oNqs7OVR7NsTpOCl7pkikSp4ukujY1eMQCK4BGAYYCw/s1600/close.png) top right no-repeat;\n  text-align: right;\n  outline: none;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s;\n  -moz-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n\n.lb-data .lb-close:hover {\n  cursor: pointer;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/TableUtil/TableUtil.less":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/TableUtil/TableUtil.less ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".entry-content article .table-labels{text-align:center}.entry-content article .table-label{display:inline-block;cursor:pointer;user-select:none;font-size:.5rem;border:1px dotted grey;background-color:grey;color:#fff;clear:both;line-height:.7rem;text-align:center;text-indent:0;border-radius:4px;margin-bottom:.5rem;width:fit-content;padding:.2rem;margin-left:.5rem;margin-right:.5rem}.entry-content article>.table-thumbnail{display:none}@media (max-width:680px){.entry-content article>table.table-thumbnail-ready{display:none}.entry-content article>.table-thumbnail{display:block;cursor:pointer}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/TableUtil/TableUtil.less","TableUtil.less"],"names":[],"mappings":"AAAA,qCAII,iBCSJ,CDbA,oCAQI,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,aAAA,CAIA,iBAAA,CACA,mBAAA,CACA,iBAAA,CAIA,aAAA,CACA,iBAAA,CACA,kBCKJ,CDQE,wCACE,YCNJ,CDmBA,yBACE,mDACE,YCVF,CDaA,wCAEE,aAAA,CACA,cCZF,CACF","file":"TableUtil.less","sourcesContent":[".entry-content article {\n  .table-labels {\n    //amrgin-left: auto;\n    //margin-right: auto;\n    text-align: center;\n  }\n  \n  .table-label {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.5rem;\n    border: 1px dotted gray;\n    background-color: gray;\n    color: white;\n    clear: both;\n    line-height: 0.7rem;\n    text-align: center;\n    text-indent: 0;\n    //position: absolute;\n    //margin-top: -0.9rem;\n    //margin-left: -0.9rem;\n    border-radius: 4px;\n    margin-bottom: 0.5rem;\n    width: fit-content;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem;\n    padding-top: .2rem;\n    padding-bottom: .2rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  \n  /*\n  .table-container {\n    overflow: auto;\n    \n    &> table {\n      //min-width: 800px;\n    }\n  }\n  */\n  \n  &> .table-thumbnail {\n    display: none;\n  }\n}\n\n/*\n@media (max-width: 800px) {\n  .entry-content article > table {\n    min-width: 800px;\n  }\n}\n*/\n\n\n@media (max-width: 680px) {\n  .entry-content article > table.table-thumbnail-ready {\n    display: none;\n  }\n  \n  .entry-content article > .table-thumbnail {\n    //min-width: 800px;\n    display: block;\n    cursor: pointer;\n    //width: 100%;\n    //height: auto;\n  }\n}",".entry-content article {\n  /*\n  .table-container {\n    overflow: auto;\n    \n    &> table {\n      //min-width: 800px;\n    }\n  }\n  */\n}\n.entry-content article .table-labels {\n  text-align: center;\n}\n.entry-content article .table-label {\n  display: inline-block;\n  cursor: pointer;\n  user-select: none;\n  font-size: 0.5rem;\n  border: 1px dotted gray;\n  background-color: gray;\n  color: white;\n  clear: both;\n  line-height: 0.7rem;\n  text-align: center;\n  text-indent: 0;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  width: fit-content;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.entry-content article > .table-thumbnail {\n  display: none;\n}\n/*\n@media (max-width: 800px) {\n  .entry-content article > table {\n    min-width: 800px;\n  }\n}\n*/\n@media (max-width: 680px) {\n  .entry-content article > table.table-thumbnail-ready {\n    display: none;\n  }\n  .entry-content article > .table-thumbnail {\n    display: block;\n    cursor: pointer;\n  }\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type{white-space:nowrap}.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type:active{color:inherit}.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type>i:first-of-type{margin-right:10px}#main .entry-content .blog-admin>a{cursor:pointer;margin-right:.5rem}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less","AdminToolsStat.less"],"names":[],"mappings":"AAAA,mFACE,kBCCF,CDCE,0FACE,aCCJ,CDEE,mGACE,iBCAJ,CDQA,mCACE,cAAA,CACA,kBCNF","file":"AdminToolsStat.less","sourcesContent":[".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type {\n  white-space: nowrap;\n  \n  &:active {\n    color: inherit;\n  }\n  \n  &> i:first-of-type {\n    margin-right: 10px;\n  }\n  \n  &> span {\n    //margin-right: auto;\n  }\n}\n\n#main .entry-content .blog-admin > a {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}",".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type {\n  white-space: nowrap;\n}\n.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type:active {\n  color: inherit;\n}\n.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type > i:first-of-type {\n  margin-right: 10px;\n}\n#main .entry-content .blog-admin > a {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/CommentToggle.less":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/CommentToggle.less ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#comments.hide-comments #backlinks-container,#comments.hide-comments .comment-footer,#comments.hide-comments .comment-form,#comments.hide-comments .comments-content,#comments.hide-comments .hide-comments,#comments.hide-comments>p,#comments:not(.hide-comments) .show-comments{display:none!important}#comments.hide-comments h4:after{border-top-width:0!important}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/comment/CommentToggle.less","CommentToggle.less"],"names":[],"mappings":"AAMA,mRAOI,sBCHJ,CDJA,iCAWI,4BCJJ","file":"CommentToggle.less","sourcesContent":["#comments:not(.hide-comments) {\n  .show-comments {\n    display: none !important;\n  }\n}\n\n#comments.hide-comments {\n  .comments-content,\n  .comment-footer,\n  .comment-form,\n  .hide-comments,\n  &> p,\n  #backlinks-container {\n    display: none !important;\n  }\n  \n  h4:after {\n    border-top-width: 0 !important;\n  }\n}","#comments:not(.hide-comments) .show-comments {\n  display: none !important;\n}\n#comments.hide-comments .comments-content,\n#comments.hide-comments .comment-footer,\n#comments.hide-comments .comment-form,\n#comments.hide-comments .hide-comments,\n#comments.hide-comments > p,\n#comments.hide-comments #backlinks-container {\n  display: none !important;\n}\n#comments.hide-comments h4:after {\n  border-top-width: 0 !important;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment-form-tool.less":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment-form-tool.less ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".comment-form-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none;margin:0 8px 6px .5em}.comment-form-tool{font-size:14px;user-select:none}.comment-form-tool label{display:inline-block;position:relative;top:-.2rem}.comment-form-tool select.comment-tools-select{width:8rem}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/comment/comment-form-tool.less","comment-form-tool.less"],"names":[],"mappings":"AAGA,4BACI,wBAAA,CACA,6DAAA,CACA,wBAAA,CACA,UAAA,CACA,sBAAA,CACA,2CAAA,CACA,eAAA,CAEA,4BAAA,CACA,cAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,gCAAA,CACA,kBAAA,CACA,uBAAA,CACA,qBAAA,CACA,gBAAA,CACA,qBCAJ,CDGA,mBACE,cAAA,CACA,gBCDF,CDDA,yBAKI,oBAAA,CACA,iBAAA,CACA,UCDJ,CDNA,+CAWI,UCFJ","file":"comment-form-tool.less","sourcesContent":["\n/******************************/\n/* 20170309 上傳圖片 */\n.comment-form-tool a button {\n    background-color: #f8f8f8;\n    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n    border: 1px solid #c6c6c6;\n    color: #222;\n    -webkit-transition: all;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);\n    font-weight: bold;\n    margin: 0 8px 6px 0;\n    font-family: arial,sans-serif;\n    font-size: 11px;\n    height: 27px;\n    padding-bottom: 0;\n    text-align: center;\n    text-shadow: 0 1px rgba(0,0,0,.1);\n    vertical-align: top;\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    user-select: none;\n    margin-left: 0.5em;\n}\n\n.comment-form-tool {\n  font-size: 14px;\n  user-select: none;\n  \n  label {\n    display: inline-block;\n    position: relative;\n    top: -0.2rem;\n  }\n  \n  select.comment-tools-select {\n    width: 8rem;\n  }\n}\n\n","/******************************/\n/* 20170309 上傳圖片 */\n.comment-form-tool a button {\n  background-color: #f8f8f8;\n  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  margin: 0 8px 6px 0;\n  font-family: arial, sans-serif;\n  font-size: 11px;\n  height: 27px;\n  padding-bottom: 0;\n  text-align: center;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  user-select: none;\n  margin-left: 0.5em;\n}\n.comment-form-tool {\n  font-size: 14px;\n  user-select: none;\n}\n.comment-form-tool label {\n  display: inline-block;\n  position: relative;\n  top: -0.2rem;\n}\n.comment-form-tool select.comment-tools-select {\n  width: 8rem;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment.less":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/comment/comment.less ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#comment-editor{width:100%;height:210px;border-width:0}#comment-editor.hide{display:none}#comments-block img.favicon{height:16px;width:16px;margin-bottom:-2px}#main div.comments#comments{min-height:0;padding:15px 30px}#main div.comments#comments>.comments-content #top-ra>.comment:first-of-type:first-child{padding-top:0}#main div.comments#comments #comment-holder>.comment-thread.toplevel-thread{margin:12px 0 0}#main div.comments#comments #comment-holder>.comment-thread img[src=\"//resources.blogblog.com/img/blank.gif\"]{background-image:url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png);background-position:50%;background-repeat:no-repeat}#main div.comments#comments #comment-holder>.comment-thread .thread-expanded img[src=\"//resources.blogblog.com/img/blank.gif\"]{background-image:url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s36/gnome_stock_person.png)}#main div.comments#comments #comment-holder>.comment-thread .comment:first-of-type{margin-top:5px}#main div.comments#comments #comment-holder>.comment-thread .comment-replies .comment-thread{margin-top:0;margin-bottom:0;border:1px solid #ddd;border-top:0 solid #ddd}#main div.comments#comments #comment-holder>.comment-thread .comment-replies .comment-thread .thread-toggle{margin-top:5px;user-select:none}#main div.comments#comments #comment-holder>.comment-thread .comment-replies .comment-thread .thread-toggle.thread-collapsed{margin-bottom:5px}#main div.comments#comments #comment-holder>.comment-thread .comment-replies .comment-thread .comment{width:calc(100% - 40px)}#main div.comments#comments #comment-holder>.comment-thread .comment-block .datetime,#main div.comments#comments #comment-holder>.comment-thread .comment-block .user a{font-size:16px}#main div.comments#comments #comment-holder>.comment-thread .comment-block a{color:#bd8242}#main div.comments#comments #comment-holder>.comment-thread .comment-block a:hover{color:#f69087;text-decoration:underline}#main div.comments#comments #comment-holder>.comment-thread .comment-block img.comment-image{display:block}#main div.comments#comments #comment-holder>.comment-thread .comment-block iframe.youtube-embed{max-width:100%;display:block}#main div.comments#comments #comment-holder>.comment-thread .comment-block .item-control,#main div.comments#comments #comment-holder>.comment-thread .comment-block a.comment-reply,#main div.comments#comments #comment-holder>.comment-thread .comment-block a[kind=i]{user-select:none;font-weight:400}#main div.comments#comments #comment-holder>.comment-thread .comment-block .item-control:hover,#main div.comments#comments #comment-holder>.comment-thread .comment-block a.comment-reply:hover,#main div.comments#comments #comment-holder>.comment-thread .comment-block a[kind=i]:hover{text-decoration:none}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/comment/comment.less","comment.less"],"names":[],"mappings":"AAAA,gBACE,UAAA,CACA,YAAA,CACA,cCCF,CDEA,qBACE,YCAF,CDGA,4BACE,WAAA,CACA,UAAA,CACA,kBCDF,CDQA,4BACE,YAAA,CACA,iBCLF,CDOE,yFACE,aCLJ,CDUI,4EAEE,eCRN,CDJA,8GAgBM,qJAAA,CACA,uBAAA,CACA,2BCTN,CDTA,+HAsBM,qJCVN,CDZA,mFA0BM,cCXN,CDfA,6FA8BM,YAAA,CACA,eAAA,CAEA,qBAAA,CAAA,uBCZN,CDrBA,4GAoCQ,cAAA,CACA,gBCZR,CDcQ,6HACE,iBCZV,CD5BA,sGA6CQ,uBCdR,CD/BA,wKAqDQ,cClBR,CDnCA,6EA2DQ,aCrBR,CDuBQ,mFACE,aAAA,CACA,yBCrBV,CD1CA,6FAuEQ,aC1BR,CD7CA,gGA2EQ,cAAA,CACA,aC3BR,CDjDA,yQAoFQ,gBAAA,CACA,eC9BR,CDgCQ,2RACE,oBC5BV","file":"comment.less","sourcesContent":["#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n\n#comment-editor.hide {\n  display: none;\n}\n\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom:-2px;\n}\n\n\n/* ************************ */\n\n\n#main div.comments#comments {\n  min-height: initial;\n  padding: 15px 30px;\n  \n  &> .comments-content #top-ra > .comment:first-of-type:first-child {\n    padding-top: 0;\n  }\n  \n  #comment-holder > .comment-thread {\n\n    &.toplevel-thread {\n      margin: 0;\n      margin-top: 12px;\n    }\n    \n    img[src=\"//resources.blogblog.com/img/blank.gif\"] {\n      background-image: url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png);\n      background-position: center center;\n      background-repeat: no-repeat;\n    }\n    \n    .thread-expanded img[src=\"//resources.blogblog.com/img/blank.gif\"] {\n      background-image: url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s36/gnome_stock_person.png);\n    }\n    \n    .comment:first-of-type {\n      margin-top: 5px;\n    }\n    \n    .comment-replies .comment-thread {\n      margin-top: 0;\n      margin-bottom: 0;\n      border: 1px solid #ddd;\n      border-top-width: 0;\n      \n      .thread-toggle {\n        margin-top: 5px;\n        user-select: none;\n        \n        &.thread-collapsed {\n          margin-bottom: 5px;\n        }\n      }\n      \n      .comment {\n        width: calc(100% - 40px);\n      }\n    }\n    \n    .comment-block {\n      \n      .user a,\n      .datetime {\n        font-size: 16px;\n      }\n      \n      // -------------------\n      \n      a {\n        color: #bd8242;\n        \n        &:hover {\n          color: #f69087;\n          text-decoration: underline;\n        }\n      }\n      \n      \n      // 20181021 留言裡面的圖片\n      // https://blog.pulipuli.info/2017/10/k-determin-optimal-number-of-clusters.html\n      img.comment-image {\n        display: block;\n      }\n\n      iframe.youtube-embed {\n        max-width: 100%;\n        display: block;\n      }\n      \n      // --------------------\n      \n      .item-control, \n      a.comment-reply,\n      a[kind=\"i\"] {\n        user-select: none;\n        font-weight: normal;\n\n        &:hover {\n          text-decoration: none;\n        }\n      }\n    }\n  } // #comment-holder > .comment-thread {\n}\n","#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n#comment-editor.hide {\n  display: none;\n}\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom: -2px;\n}\n/* ************************ */\n#main div.comments#comments {\n  min-height: initial;\n  padding: 15px 30px;\n}\n#main div.comments#comments > .comments-content #top-ra > .comment:first-of-type:first-child {\n  padding-top: 0;\n}\n#main div.comments#comments #comment-holder > .comment-thread.toplevel-thread {\n  margin: 0;\n  margin-top: 12px;\n}\n#main div.comments#comments #comment-holder > .comment-thread img[src=\"//resources.blogblog.com/img/blank.gif\"] {\n  background-image: url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png);\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n#main div.comments#comments #comment-holder > .comment-thread .thread-expanded img[src=\"//resources.blogblog.com/img/blank.gif\"] {\n  background-image: url(//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s36/gnome_stock_person.png);\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment:first-of-type {\n  margin-top: 5px;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-replies .comment-thread {\n  margin-top: 0;\n  margin-bottom: 0;\n  border: 1px solid #ddd;\n  border-top-width: 0;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-replies .comment-thread .thread-toggle {\n  margin-top: 5px;\n  user-select: none;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-replies .comment-thread .thread-toggle.thread-collapsed {\n  margin-bottom: 5px;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-replies .comment-thread .comment {\n  width: calc(100% - 40px);\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block .user a,\n#main div.comments#comments #comment-holder > .comment-thread .comment-block .datetime {\n  font-size: 16px;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a {\n  color: #bd8242;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a:hover {\n  color: #f69087;\n  text-decoration: underline;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block img.comment-image {\n  display: block;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block iframe.youtube-embed {\n  max-width: 100%;\n  display: block;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block .item-control,\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a.comment-reply,\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a[kind=\"i\"] {\n  user-select: none;\n  font-weight: normal;\n}\n#main div.comments#comments #comment-holder > .comment-thread .comment-block .item-control:hover,\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a.comment-reply:hover,\n#main div.comments#comments #comment-holder > .comment-thread .comment-block a[kind=\"i\"]:hover {\n  text-decoration: none;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/modules/related-posts/related-posts.less":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/modules/related-posts/related-posts.less ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .post>.related-posts{overflow:hidden;z-index:100;background:#fff;padding:15px 30px;border-top:1px solid #ddd}#main .post>.related-posts .title{margin:0 0 15px;font-size:22px}#main .post>.related-posts .title>h4{user-select:none}#main .post>.related-posts #owl-demo{overflow:visible;max-height:233px}#main .post>.related-posts #owl-demo .owl-wrapper-outer{overflow:hidden;max-height:240px;margin-bottom:20px}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper{position:relative}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item{float:left;padding:0 10px;width:268px!important}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img{position:relative;max-height:160px;overflow:hidden}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img .related-post-title{overflow-x:hidden;white-space:nowrap;background-color:rgba(0,0,0,.7);color:#fff;padding-left:10px;text-overflow:ellipsis;max-width:100%}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img img{background:url(//1.bp.blogspot.com/-EpAZ7479vZU/U8q4-6oeF5I/AAAAAAAAB2w/mQFhf-xZRko/s1600/background.png) repeat scroll 0 0 #fff;display:table-cell;text-align:center;font-size:19px;width:100%!important;height:auto!important;margin-top:-35px;position:relative;z-index:-1}#main .post>.related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item:first-child{padding:0 10px 0 0}#main .post>.related-posts .owl-controls.clickable{position:relative;top:-20px}#main .post>.related-posts .owl-controls.clickable .owl-pagination{position:absolute;right:0;top:-208px}#main .post>.related-posts .owl-controls.clickable .owl-pagination .owl-page{display:inline-block;width:13px;height:13px;margin:5px 14px 5px -10px;opacity:.5;border-radius:20px;background:none repeat scroll 0 0 #ddd;cursor:pointer}#main .post>.related-posts .owl-controls.clickable .owl-pagination .owl-page:last-of-type{margin-right:0}#main .post>.related-posts .owl-controls.clickable .owl-pagination .owl-page.active,#main .post>.related-posts .owl-controls.clickable .owl-pagination .owl-page:hover{opacity:1;background:none repeat scroll 0 0 #333}#main .post>.related-posts.hidden{display:none}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/modules/related-posts/related-posts.less","related-posts.less"],"names":[],"mappings":"AAAA,2BAEE,eAAA,CACA,WAAA,CACA,eAAA,CAGA,iBAAA,CACA,yBCDF,CDPA,kCAaI,eAAA,CAEA,cCJJ,CDMI,qCACE,gBCJN,CDdA,qCAuBI,gBAAA,CAEA,gBCPJ,CDlBA,wDA4BM,eAAA,CACA,gBAAA,CACA,kBCPN,CDvBA,qEAiCQ,iBCPR,CD1BA,+EAoCU,UAAA,CACA,cAAA,CACA,qBCPV,CD/BA,yFAyCY,iBAAA,CACA,gBAAA,CACA,eCPZ,CDpCA,6GA8Cc,iBAAA,CACA,kBAAA,CACA,+BAAA,CACA,UAAA,CACA,iBAAA,CAEA,sBAAA,CACA,cCRd,CD7CA,6FAyDc,gIAAA,CACA,kBAAA,CACA,iBAAA,CAEA,cAAA,CAGA,oBAAA,CACA,qBAAA,CAEA,gBAAA,CACA,iBAAA,CACA,UCXd,CD1DA,2FA2EU,kBCdV,CD7DA,mDAmFI,iBAAA,CACA,SCnBJ,CDjEA,mEAuFM,iBAAA,CACA,OAAA,CACA,UCnBN,CDtEA,6EA6FQ,oBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CACA,UAAA,CACA,kBAAA,CACA,sCAAA,CACA,cCpBR,CDsBQ,0FACE,cCpBV,CDnFA,uKA6GQ,SAAA,CACA,sCCtBR,CD4BE,kCACE,YC1BJ","file":"related-posts.less","sourcesContent":["#main .post > .related-posts {\n  /*height: 240px;*/\n  overflow: hidden;\n  z-index: 100;\n  background: #fff;\n  //background-color: blue; // 20191001 for test\n  \n  padding: 15px 30px;\n  border-top: 1px solid #ddd;\n\n  .title {\n    //background: none repeat scroll 0% 0% #FFF;\n    //padding: 5px 20px;\n    margin: 0px 0px 15px;\n    //border-bottom: 1px solid #ddd;\n    font-size: 22px;\n    \n    &> h4 {\n      user-select: none;\n    }\n  }\n\n  #owl-demo {\n    overflow: visible;\n    //padding: 0px 20px;\n    max-height: 233px;\n\n    .owl-wrapper-outer {\n      overflow: hidden;\n      max-height: 240px;\n      margin-bottom: 20px;\n\n      .owl-wrapper {\n        position: relative;\n\n        .owl-item {\n          float: left;\n          padding: 0px 10px;\n          width: 268px !important;\n\n          .item-img {\n            position: relative;\n            max-height: 160px;\n            overflow: hidden;\n            \n            .related-post-title {\n              overflow-x: hidden;\n              white-space: nowrap;\n              background-color: rgba(0,0,0,0.7);\n              color: white;\n              padding-left: 10px;\n              \n              text-overflow: ellipsis;\n              max-width: 100%;\n            }\n\n            img {\n              background: url(//1.bp.blogspot.com/-EpAZ7479vZU/U8q4-6oeF5I/AAAAAAAAB2w/mQFhf-xZRko/s1600/background.png) repeat scroll 0% 0% #fff;\n              display: table-cell;\n              text-align: center;\n              /*color: #EB005D;*/\n              font-size: 19px;\n\n              /*max-width: 240px;*/\n              width: 100% !important;\n              height: auto !important;\n              \n              margin-top: -35px;\n              position: relative;\n              z-index: -1;\n            }\n\n          }\n        }\n        .owl-item:first-child {\n          padding: 0px 10px 0px 0px;\n        }\n      }\n    }\n  }\n\n\n  .owl-controls.clickable {\n    position: relative;\n    top: -20px;\n\n    .owl-pagination {\n      position: absolute;\n      right: 0px;\n      top: -208px;\n\n\n      .owl-page {\n        display: inline-block;\n        width: 13px;\n        height: 13px;\n        margin: 5px 14px 5px -10px;\n        opacity: 0.5;\n        border-radius: 20px;\n        background: none repeat scroll 0% 0% #DDD;\n        cursor: pointer;\n        \n        &:last-of-type {\n          margin-right: 0;\n        }\n      }\n\n      .owl-page.active, \n      .owl-page:hover {\n        opacity: 1;\n        background: none repeat scroll 0% 0% #333;\n      }\n    }\n\n  }\n  \n  &.hidden {\n    display: none;\n  }\n}","#main .post > .related-posts {\n  /*height: 240px;*/\n  overflow: hidden;\n  z-index: 100;\n  background: #fff;\n  padding: 15px 30px;\n  border-top: 1px solid #ddd;\n}\n#main .post > .related-posts .title {\n  margin: 0px 0px 15px;\n  font-size: 22px;\n}\n#main .post > .related-posts .title > h4 {\n  user-select: none;\n}\n#main .post > .related-posts #owl-demo {\n  overflow: visible;\n  max-height: 233px;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer {\n  overflow: hidden;\n  max-height: 240px;\n  margin-bottom: 20px;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper {\n  position: relative;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item {\n  float: left;\n  padding: 0px 10px;\n  width: 268px !important;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img {\n  position: relative;\n  max-height: 160px;\n  overflow: hidden;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img .related-post-title {\n  overflow-x: hidden;\n  white-space: nowrap;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding-left: 10px;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item .item-img img {\n  background: url(//1.bp.blogspot.com/-EpAZ7479vZU/U8q4-6oeF5I/AAAAAAAAB2w/mQFhf-xZRko/s1600/background.png) repeat scroll 0% 0% #fff;\n  display: table-cell;\n  text-align: center;\n  /*color: #EB005D;*/\n  font-size: 19px;\n  /*max-width: 240px;*/\n  width: 100% !important;\n  height: auto !important;\n  margin-top: -35px;\n  position: relative;\n  z-index: -1;\n}\n#main .post > .related-posts #owl-demo .owl-wrapper-outer .owl-wrapper .owl-item:first-child {\n  padding: 0px 10px 0px 0px;\n}\n#main .post > .related-posts .owl-controls.clickable {\n  position: relative;\n  top: -20px;\n}\n#main .post > .related-posts .owl-controls.clickable .owl-pagination {\n  position: absolute;\n  right: 0px;\n  top: -208px;\n}\n#main .post > .related-posts .owl-controls.clickable .owl-pagination .owl-page {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin: 5px 14px 5px -10px;\n  opacity: 0.5;\n  border-radius: 20px;\n  background: none repeat scroll 0% 0% #DDD;\n  cursor: pointer;\n}\n#main .post > .related-posts .owl-controls.clickable .owl-pagination .owl-page:last-of-type {\n  margin-right: 0;\n}\n#main .post > .related-posts .owl-controls.clickable .owl-pagination .owl-page.active,\n#main .post > .related-posts .owl-controls.clickable .owl-pagination .owl-page:hover {\n  opacity: 1;\n  background: none repeat scroll 0% 0% #333;\n}\n#main .post > .related-posts.hidden {\n  display: none;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/toc/toc.less":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/toc/toc.less ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".entry-content article.heading-h2-h3 h2{font-size:24pt;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article.heading-h2-h3 h3{font-size:20pt;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article.heading-h2-h3 h4{font-size:18pt;font-style:italic;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article.heading-h4-h5 h4{font-size:24pt;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article.heading-h4-h5 h5{font-size:20pt;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article.heading-h4-h5 h6{font-size:18pt;font-style:italic;color:#bd8a39;margin-top:1.5em;margin-bottom:1em}.entry-content article .heading-permanent-link{cursor:pointer;position:absolute;margin-left:0;margin-top:-2.5rem;opacity:0;transition:opacity .2s ease 1s}.entry-content article .heading-permanent-link:active{color:#f69087}.entry-content article h2:hover .heading-permanent-link,.entry-content article h3:hover .heading-permanent-link,.entry-content article h4:hover .heading-permanent-link,.entry-content article h5:hover .heading-permanent-link,.entry-content article h6:hover .heading-permanent-link{opacity:1;transition:opacity .2s ease 0s}#main .entry-content article .cata-title{width:75%}#main .entry-content article a.heading-button[href^=\"#\"]{position:absolute;margin-left:2.5rem;margin-top:-2.5rem;opacity:0;transition:opacity .2s ease 1s}#main .entry-content article h2:hover a.heading-button[href^=\"#\"],#main .entry-content article h3:hover a.heading-button[href^=\"#\"],#main .entry-content article h4:hover a.heading-button[href^=\"#\"],#main .entry-content article h5:hover a.heading-button[href^=\"#\"],#main .entry-content article h6:hover a.heading-button[href^=\"#\"]{opacity:1;transition:opacity .2s ease 0s}@media (max-width:460px){#main .entry-content article .heading-permanent-link{margin-top:-2rem;font-size:1.5rem}#main .entry-content article a.heading-button[href^=\"#\"]{font-size:1.5rem;margin-left:2rem;margin-top:-2rem}.entry-content article.heading-h2-h3 h2,.entry-content article.heading-h2-h3 h3,.entry-content article.heading-h2-h3 h4,.entry-content article.heading-h4-h5 h4,.entry-content article.heading-h4-h5 h5,.entry-content article.heading-h4-h5 h6{line-height:120%}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-footer/toc/toc.less","toc.less"],"names":[],"mappings":"AAAA,wCAEI,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCAJ,CDLA,wCASI,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCDJ,CDXA,wCAgBI,cAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCFJ,CDMA,wCAEI,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCLJ,CDAA,wCASI,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCNJ,CDNA,wCAgBI,cAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCPJ,CDWA,+CACE,cAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CAEA,SAAA,CACA,8BCTF,CDWE,sDACE,aCTJ,CDaA,wRAMI,SAAA,CACA,8BCZJ,CDkBA,yCAEI,SCjBJ,CDeA,yDAMI,iBAAA,CACA,kBAAA,CACA,kBAAA,CAEA,SAAA,CACA,8BClBJ,CDOA,0UAmBE,SAAA,CACA,8BCnBF,CDyBA,yBACE,qDAGI,gBAAA,CACA,gBCzBJ,CDqBA,yDAQI,gBAAA,CACA,gBAAA,CACA,gBC1BJ,CDoCA,gPAEI,gBC5BJ,CACF","file":"toc.less","sourcesContent":[".entry-content article.heading-h2-h3 {\n  h2 {\n    font-size: 24pt;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n\n  h3 {\n    font-size: 20pt;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n\n  h4 {\n    font-size: 18pt;\n    font-style: italic;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n}\n\n.entry-content article.heading-h4-h5 {\n  h4 {\n    font-size: 24pt;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n\n  h5 {\n    font-size: 20pt;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n\n  h6 {\n    font-size: 18pt;\n    font-style: italic;\n    color:#BD8A39;\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n  }\n}\n\n.entry-content article .heading-permanent-link {\n  cursor: pointer;\n  position: absolute;\n  margin-left: 0rem;\n  margin-top: -2.5rem;\n  //display: none;\n  opacity: 0;\n  transition: opacity 0.2s 1s ease;  /* Mouse leave: immediate */\n  \n  &:active {\n    color: #F69087;\n  }\n}\n\n.entry-content article {\n  h2:hover .heading-permanent-link,\n  h3:hover .heading-permanent-link,\n  h4:hover .heading-permanent-link,\n  h5:hover .heading-permanent-link,\n  h6:hover .heading-permanent-link {\n    opacity: 1;\n    transition: opacity 0.2s 0s ease;\n  }\n}\n\n// ------------------------\n\n#main .entry-content article {\n  .cata-title {\n    width: 75%;\n  }\n  \n  a.heading-button[href^=\"#\"] {\n    position: absolute;\n    margin-left: 2.5rem;\n    margin-top: -2.5rem;\n    \n    opacity: 0;\n    transition: opacity 0.2s 1s ease;  /* Mouse leave: immediate */\n  }\n  \n  h2:hover a.heading-button[href^=\"#\"],\n  h3:hover a.heading-button[href^=\"#\"],\n  h4:hover a.heading-button[href^=\"#\"],\n  h5:hover a.heading-button[href^=\"#\"],\n  h6:hover a.heading-button[href^=\"#\"] {\n  opacity: 1;\n  transition: opacity 0.2s 0s ease;\n  }\n}\n\n// -----------------------\n\n@media (max-width:460px) {\n  #main .entry-content article {\n    .heading-permanent-link {\n      //margin-left: 0;\n      margin-top: -2rem;\n      font-size: 1.5rem;\n    }\n    \n    a.heading-button[href^=\"#\"] {\n      font-size: 1.5rem;\n      margin-left: 2rem;\n      margin-top: -2rem;\n    }\n  }\n  \n  .entry-content article.heading-h2-h3 {\n    h2,h3,h4 {\n      line-height: 120%;\n    }\n  }\n  \n  .entry-content article.heading-h4-h5 {\n    h4,h5,h6 {\n      line-height: 120%;\n    }\n  }\n}\n\n",".entry-content article.heading-h2-h3 h2 {\n  font-size: 24pt;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article.heading-h2-h3 h3 {\n  font-size: 20pt;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article.heading-h2-h3 h4 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article.heading-h4-h5 h4 {\n  font-size: 24pt;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article.heading-h4-h5 h5 {\n  font-size: 20pt;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article.heading-h4-h5 h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #BD8A39;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content article .heading-permanent-link {\n  cursor: pointer;\n  position: absolute;\n  margin-left: 0rem;\n  margin-top: -2.5rem;\n  opacity: 0;\n  transition: opacity 0.2s 1s ease;\n  /* Mouse leave: immediate */\n}\n.entry-content article .heading-permanent-link:active {\n  color: #F69087;\n}\n.entry-content article h2:hover .heading-permanent-link,\n.entry-content article h3:hover .heading-permanent-link,\n.entry-content article h4:hover .heading-permanent-link,\n.entry-content article h5:hover .heading-permanent-link,\n.entry-content article h6:hover .heading-permanent-link {\n  opacity: 1;\n  transition: opacity 0.2s 0s ease;\n}\n#main .entry-content article .cata-title {\n  width: 75%;\n}\n#main .entry-content article a.heading-button[href^=\"#\"] {\n  position: absolute;\n  margin-left: 2.5rem;\n  margin-top: -2.5rem;\n  opacity: 0;\n  transition: opacity 0.2s 1s ease;\n  /* Mouse leave: immediate */\n}\n#main .entry-content article h2:hover a.heading-button[href^=\"#\"],\n#main .entry-content article h3:hover a.heading-button[href^=\"#\"],\n#main .entry-content article h4:hover a.heading-button[href^=\"#\"],\n#main .entry-content article h5:hover a.heading-button[href^=\"#\"],\n#main .entry-content article h6:hover a.heading-button[href^=\"#\"] {\n  opacity: 1;\n  transition: opacity 0.2s 0s ease;\n}\n@media (max-width: 460px) {\n  #main .entry-content article .heading-permanent-link {\n    margin-top: -2rem;\n    font-size: 1.5rem;\n  }\n  #main .entry-content article a.heading-button[href^=\"#\"] {\n    font-size: 1.5rem;\n    margin-left: 2rem;\n    margin-top: -2rem;\n  }\n  .entry-content article.heading-h2-h3 h2,\n  .entry-content article.heading-h2-h3 h3,\n  .entry-content article.heading-h2-h3 h4 {\n    line-height: 120%;\n  }\n  .entry-content article.heading-h4-h5 h4,\n  .entry-content article.heading-h4-h5 h5,\n  .entry-content article.heading-h4-h5 h6 {\n    line-height: 120%;\n  }\n}\n"]}]);



/***/ })

/******/ });
//# sourceMappingURL=item-footer.js.map