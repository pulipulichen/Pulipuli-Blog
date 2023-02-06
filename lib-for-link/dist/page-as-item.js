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
/******/ 		"page-as-item": 0
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
/******/ 	deferredModules.push(["./lib-for-link/src/page-as-item/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./lib-for-link/src/item-header/style-print/item-style-print.less":
/*!************************************************************************!*\
  !*** ./lib-for-link/src/item-header/style-print/item-style-print.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./item-style-print.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/item-style-print.less");

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

/***/ "./lib-for-link/src/page-as-item/index.js":
/*!************************************************!*\
  !*** ./lib-for-link/src/page-as-item/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_footer_admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../item-footer/admin-tools/AdminToolsStat.js */ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.js");
/* harmony import */ var _item_footer_admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_item_footer_admin_tools_AdminToolsStat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item_footer_admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../item-footer/admin-tools/AdminToolsStat.less */ "./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less");
/* harmony import */ var _item_footer_admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_footer_admin_tools_AdminToolsStat_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_footer_script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../item-footer/script/admin-tools-loader.js */ "./lib-for-link/src/item-footer/script/admin-tools-loader.js");
/* harmony import */ var _item_footer_script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_item_footer_script_admin_tools_loader_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _item_header_style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../item-header/style-print/item-style-print.less */ "./lib-for-link/src/item-header/style-print/item-style-print.less");
/* harmony import */ var _item_header_style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_item_header_style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type{white-space:nowrap}.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type:active{color:inherit}.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type>i:first-of-type{margin-right:10px}#main .entry-content .blog-admin>a{cursor:pointer;margin-right:.5rem}", "",{"version":3,"sources":["/app/lib-for-link/src/item-footer/admin-tools/AdminToolsStat.less","AdminToolsStat.less"],"names":[],"mappings":"AAAA,mFACE,kBCCF,CDCE,0FACE,aCCJ,CDEE,mGACE,iBCAJ,CDQA,mCACE,cAAA,CACA,kBCNF","file":"AdminToolsStat.less","sourcesContent":[".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type {\n  white-space: nowrap;\n  \n  &:active {\n    color: inherit;\n  }\n  \n  &> i:first-of-type {\n    margin-right: 10px;\n  }\n  \n  &> span {\n    //margin-right: auto;\n  }\n}\n\n#main .entry-content .blog-admin > a {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}",".entry-content article:first-of-type .meta1 .article-stats-container:first-of-type {\n  white-space: nowrap;\n}\n.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type:active {\n  color: inherit;\n}\n.entry-content article:first-of-type .meta1 .article-stats-container:first-of-type > i:first-of-type {\n  margin-right: 10px;\n}\n#main .entry-content .blog-admin > a {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/item-style-print.less":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/item-style-print.less ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media print{#masthead{border-bottom:1px solid grey;position:static!important}#masthead.fixed-nav{position:static!important;height:82px;background-color:transparent!important}#masthead.fixed-nav.fixed-nav h1{line-height:30px;margin-top:10px;font-size:30px}#masthead #menu-primary,#masthead .btn-navbar,#masthead .gcse{display:none}#masthead #header-inner{width:100%!important;padding-left:0}#masthead .titlewrapper{float:left}#masthead .title a{text-decoration:none}#masthead .title a:after{content:\"\"}#masthead .descriptionwrapper{width:max-content;padding-left:18em;padding-top:5px}#masthead .descriptionwrapper:after{content:attr(url);display:block;text-decoration:underline}#masthead .description{margin-bottom:0}#content,.row{margin-left:0}#content-wrapper{padding-top:0}#main #backlinks-container,#main .blogger-comment-from-post,#main .read-more,#main .related-posts,#main .share-story-container,#main a[name=more]{display:none}#main .post a[href]:after{content:\" (\" attr(href) \") \";font-size:.8em;font-weight:400;text-decoration:underline!important;white-space:break-spaces;word-break:break-all;max-width:100%;text-overflow:ellipsis}#main .post .puli-utils-append a[href]:after,#main .post a.btn:after,#main .post a.lightbox-group:after,#main .post a[href*=\".googleusercontent.com/-\"]:after,#main .post a[href*=\"/s1600/\"]:after,#main .post a[href^=\"https://1drv.ms/p/\"]:after,#main .post a[href^=\"https://app.box.com/s/\"]:after,#main .post a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,#main .post a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,#main .post a[href^=\"https://mega.nz/\"]:after,#main .post a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,#main .post a[href^=\"https://translate.google.com.tw/#view=\"]:after,#main .post a[href^=\"https://www.mediafire.com/file/\"]:after,#main .post a[href^=\"https://www.slideshare.net/\"]:after,#main .post a[href^=\"javascript:\"]:after,#main .post h1 a[href]:after{content:none!important}#main .entry-content .puli-toc,#main .entry-content .puli-toc li,#main .entry-content .puli-toc li a{color:#000!important}#main .entry-content .puli-toc li,#main .entry-content .puli-toc ul{margin-top:0!important;margin-bottom:0!important}#main .entry-content .puli-toc.puli-utils-append{border:1px solid #ccc}#main .entry-content hr.puli-utils-append{display:none}#main .entry-content iframe{height:40rem!important;break-inside:avoid;border:1px solid #ccc}#main .entry-content article.article{text-align:left}#main .entry-content article>p,#main .entry-content article>ul>li{line-height:150%}#main .entry-content hr{border:2px solid #ccc}#main .entry-content article a.lightbox-group:first-of-type>img,#main .entry-content img.original-size{max-width:30rem!important;height:auto!important}#main .entry-content article .meta1{line-height:50%}.at-share-dock-outer{display:none!important}#main .entry-content .code-label.puli-utils-append{display:none;margin-left:0!important;background:#fff!important}#main .entry-content .code-label.puli-utils-append i,.code-label.puli-utils-append{display:none}#main .entry-content .lightbox-group img{border:1px solid #ccc}#main #comments>h4,#main .blog-admin{display:none!important}#masthead{margin-bottom:0}#comments,#masthead .back-button{display:none!important}#comments{padding:0!important;border-top:2px solid #ddd}#comments #backlinks-container,#comments .comment#c6292867368144666888 .parsed-imgur:not(:first-of-type),#comments .comment-form-tool,#comments .comment-reply,#comments .comment-replybox-single,#comments .comment-replybox-thread,#comments .comment:not(#c6292867368144666888),#comments .thread-toggle{display:none!important}#comments .comment#c6292867368144666888 .comment-block{height:30rem}#comments .comment-content{margin-bottom:0;padding-bottom:0}#comments .comment-content img{max-width:60%!important}#comments img[src=\"//resources.blogblog.com/img/blank.gif\"]:after{content:url(\"<img src='/3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\")}#comments.hide-comments{display:none!important}.post{margin-bottom:0!important;border-bottom-width:0!important}#main #comments a[href]:after,#main .post #ArchiveList a.post-count-link:after,#main .post .entry-content .meta1 a:after,#main .post .entry-content a[href$=\".png\"]:after,#main .post a.toggle:after,#main .post a[href=\"javascript:void(0)\"]:after,#main .post a[href^=\"#\"]:after{content:none}#main .post .puli-toc a[href^=\"#\"]{display:inline}#main #comments h4:after{border-top-width:0}#main .post:last-of-type{margin-bottom:0}#main .post h4,#main .post h5,#main .post h6{page-break-before:avoid}#main .post table{page-break-inside:avoid}#main .post .entry-content{padding-left:0;padding-right:0}#main .entry-meta{display:none}#main #comments{border-bottom-width:0}#sidebar{margin-left:0}#sidebar .about-me img[align=right]{float:left;margin-left:0;margin-right:.5em}#sidebar .about-me .widget-content{margin-top:.5em}#sidebar .about-me .about-link,#sidebar .about-me .email-subscribe{display:none}#sidebar .about-me a:after{content:\"\"}#sidebar .about-me .social-media div{text-align:left;padding-right:0!important;padding-left:0!important;margin-bottom:0!important}#sidebar .about-me .social-media div .social-button-wrapper{display:block;text-align:left}#sidebar .about-me .social-media div .social-button-wrapper a{display:inline}#sidebar .about-me .social-media div .social-button.android,#sidebar .about-me .social-media div .social-button.chrome,#sidebar .about-me .social-media div .social-button.github,#sidebar .about-me .social-media div .social-button.google-plus,#sidebar .about-me .social-media div .social-button.linkedin,#sidebar .about-me .social-media div .social-button.plurk,#sidebar .about-me .social-media div .social-button.rss,#sidebar .about-me .social-media div .social-button.twitter{display:none}#sidebar .about-me .social-media div a:after{content:\" \" attr(title) \": \" attr(href) \"\";margin-left:1em}#sidebar .about-me .social-media div a.email:after{content:\" \" attr(href) \"\"}#sidebar .popular-posts a[rel=bookmark]{text-decoration:none}#sidebar .popular-posts a[rel=bookmark]:after{content:attr(href);text-decoration:underline;display:block}#sidebar .comments a[href]:after,#sidebar .guestbook a[href]:after,#sidebar .new a[href]:after{content:\"\"}#sidebar .comments,#sidebar .guestbook,#sidebar .new,#sidebar .PopularPosts{display:none}#sidebar .widget{page-break-inside:avoid}#content-wrapper{margin-bottom:0}#footer .container{padding:0}#footer p{text-align:center;width:100%}#footer p a:after{content:\" \" attr(href) \"\"}#footer .themexpose,a.quickedit{display:none}a:after{white-space:nowrap}body>.sumome-share-client-wrapper{display:none}}", "",{"version":3,"sources":["/app/lib-for-link/src/item-header/style-print/item-style-print.less","item-style-print.less"],"names":[],"mappings":"AAEA,aAIE,UACE,4BAAA,CACA,yBCHF,CDOA,oBACE,yBAAA,CACA,WAAA,CACA,sCCLF,CDQA,iCACE,gBAAA,CACA,eAAA,CACA,cCNF,CDSA,8DAGE,YCPF,CDUA,wBACE,oBAAA,CACA,cCRF,CDUA,wBACE,UCRF,CDUA,mBACE,oBCRF,CDWA,yBACE,UCTF,CDYA,8BACE,iBAAA,CAEA,iBAAA,CACA,eCVF,CDiBA,oCACE,iBAAA,CACA,aAAA,CACA,yBCfF,CDkBA,uBACE,eChBF,CDyBA,cACE,aCnBF,CDsBA,iBACE,aCpBF,CDyBA,kJAME,YCtBF,CD6BA,0BAEI,4BAAA,CACA,cAAA,CACA,eAAA,CACA,mCAAA,CACA,wBAAA,CACA,oBAAA,CACA,cAAA,CACA,sBCxBJ,CDeA,umCAqCI,sBC7BJ,CDsCA,qGAII,oBCjCJ,CD6BA,oEASI,sBAAA,CACA,yBClCJ,CDwBA,iDAcI,qBCnCJ,CDqBA,0CAkBI,YCpCJ,CD4CA,4BAEI,sBAAA,CACA,kBAAA,CACA,qBCvCJ,CD2CA,qCACE,eCzCF,CDgDA,kEAQI,gBC9CJ,CDuDA,wBAEI,qBClDJ,CD0DA,uGAGI,yBAAA,CACA,qBCrDJ,CD6DA,oCAEI,eCxDJ,CD4DA,qBACE,sBC1DF,CDkEA,mDAEI,YAAA,CAEA,uBAAA,CACA,yBC9DJ,CDsEA,mFACE,YCjEF,CDwEA,yCAEI,qBCnEJ,CD4EA,qCAGI,sBCvEJ,CDgFA,UAIE,eC7EF,CDoFA,iCATI,sBC3DJ,CDoEA,UA6CE,mBAAA,CAUA,yBC3HF,CDoEA,4SAsBM,sBC5EN,CDsDA,uDA0BM,YC7EN,CDmDA,2BAiCI,eAAA,CACA,gBCjFJ,CD+CA,+BAqCM,uBCjFN,CD4CA,kEAgDI,2JCzFJ,CD4FE,wBACE,sBC1FJ,CDkGA,MACE,yBAAA,CACA,+BChGF,CDmGA,mRAOE,YCjGF,CDwGA,mCACE,cCtGF,CD0GA,yBACE,kBCxGF,CD2GA,yBACE,eCzGF,CD4GA,6CAGE,uBC1GF,CD6GA,kBACE,uBC3GF,CD8GA,2BACE,cAAA,CACA,eC5GF,CD+GA,kBACE,YC7GF,CDgHA,gBACE,qBC9GF,CDkHA,SACE,aC/GF,CDkHA,oCACE,UAAA,CACA,aAAA,CACA,iBChHF,CDoHA,mCACE,eClHF,CDoHA,mEAEE,YClHF,CDqHA,2BACE,UCnHF,CDsHA,qCACE,eAAA,CACA,yBAAA,CACA,wBAAA,CACA,yBCpHF,CDuHA,4DACE,aAAA,CACA,eCrHF,CDuHA,8DACE,cCrHF,CDwHA,6dAQE,YCtHF,CDyHA,6CACE,0CAAA,CACA,eCvHF,CD0HA,mDACE,yBCxHF,CD2HA,wCACE,oBCzHF,CD4HA,8CACE,kBAAA,CACA,yBAAA,CACA,aC1HF,CD6HA,+FAGE,UC3HF,CD8HA,4EAIE,YC5HF,CD+HA,iBACE,uBC7HF,CDiIA,iBACE,eC9HF,CDkIA,mBACE,SC/HF,CDiIA,UACE,iBAAA,CACA,UC/HF,CDkIA,kBACE,yBChIF,CDwIA,gCACE,YClIF,CDqIA,QACE,kBCnIF,CDsIA,kCACE,YCpIF,CACF","file":"item-style-print.less","sourcesContent":["\n/******************************************/\n@media print {\n  //@page {\n  //  size: A4 portrait;\n  //}\n  #masthead {\n    border-bottom: 1px solid gray;\n    position: static !important;\n    \n  }\n\n  #masthead.fixed-nav {\n    position: static !important;\n    height: 82px;\n    background-color: transparent !important;\n  }\n\n  #masthead.fixed-nav.fixed-nav h1 {\n    line-height: 30px;\n    margin-top: 10px;\n    font-size: 30px;\n  }\n\n  #masthead .gcse,\n  #masthead .btn-navbar,\n  #masthead #menu-primary {\n    display:none;\n  }\n\n  #masthead #header-inner {\n    width: 100% !important;\n    padding-left: 0;\n  }\n  #masthead .titlewrapper {\n    float: left;\n  }\n  #masthead .title a {\n    text-decoration: none;\n  }\n\n  #masthead .title a:after {\n    content: \"\";\n  }\n\n  #masthead .descriptionwrapper {\n    width: max-content;\n    /*padding-top: 20px;*/\n    padding-left: 18em;\n    padding-top: 5px;\n  }\n\n  //#masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n  //    display: block;\n  //}\n\n  #masthead .descriptionwrapper:after {\n    content:attr(url);\n    display:block;\n    text-decoration: underline;\n  }\n\n  #masthead .description {\n    margin-bottom: 0;\n  }\n\n  /****************/\n\n  .row {\n    margin-left: 0;\n  }\n\n  #content {\n    margin-left:0;\n  }\n\n  #content-wrapper {\n    padding-top: 0;\n  }\n\n  /*****************/\n\n  #main .read-more,\n  #main .share-story-container,\n  #main a[name=\"more\"],\n  #main .related-posts,\n  #main .blogger-comment-from-post,\n  #main #backlinks-container {\n    display: none;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理連結的問題\n   */\n  #main .post {\n    a[href]:after{\n      content:\" (\" attr(href) \") \";\n      font-size:0.8em;\n      font-weight:normal;\n      text-decoration: underline !important;\n      white-space: break-spaces;\n      word-break: break-all;\n      max-width: 100%;\n      text-overflow: ellipsis;\n    }\n\n    h1, \n    .puli-utils-append {\n      a[href]:after {\n        content: none !important;\n      }\n    }\n\n    a.btn:after,\n      a.lightbox-group:after,\n      a[href*=\".googleusercontent.com/-\"]:after,\n      a[href*=\"/s1600/\"]:after,\n      //a[href^=\"#\"]:after,\n      a[href^=\"javascript:\"]:after,\n      a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,\n      a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,\n      a[href^=\"https://www.slideshare.net/\"]:after,\n      a[href^=\"https://1drv.ms/p/\"]:after,\n      a[href^=\"https://app.box.com/s/\"]:after,\n      a[href^=\"https://mega.nz/\"]:after,\n      a[href^=\"https://www.mediafire.com/file/\"]:after,\n      a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://translate.google.com.tw/#view=\"]:after {\n      content: none !important;\n    }\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理目錄問題\n   */\n  #main .entry-content {\n    .puli-toc,\n    .puli-toc li,\n    .puli-toc li a,{\n      color: #000 !important;\n    }\n\n    .puli-toc ul,\n    .puli-toc li {\n      margin-top: 0 !important;\n      margin-bottom: 0 !important;\n    }\n\n    .puli-toc.puli-utils-append {\n      border: 1px solid #CCC;\n    }\n\n    hr.puli-utils-append {\n      display: none;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理iframe問題\n   */\n  #main .entry-content {\n    iframe {\n      height: 40rem !important;\n      break-inside: avoid;\n      border: 1px solid #CCC;\n    }\n  }\n\n  #main .entry-content article.article {\n    text-align: left;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理段落問題\n   */\n  #main .entry-content {\n\n    article > p {\n      //margin-bottom: 0;\n      line-height: 150%;\n    }\n\n    article > ul > li {\n      line-height: 150%;\n    }\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content {\n    hr {\n      border: 2px solid #CCC;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content {\n    article a.lightbox-group:first-of-type > img,\n      img.original-size {\n      max-width: 30rem !important;\n      height: auto !important;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理標題下說明的問題\n   */\n  #main .entry-content article {\n    .meta1 {\n      line-height: 50%;\n    }\n  }\n\n  .at-share-dock-outer {\n    display: none !important;\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理程式碼問題\n   */\n  #main .entry-content {\n    .code-label.puli-utils-append {\n      display: none;\n\n      margin-left: 0 !important;\n      background: #FFF !important;\n\n      i {\n        display: none;\n      }\n    }\n  }\n\n  .code-label.puli-utils-append {\n    display: none;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理圖片的問題\n   */\n  #main .entry-content {\n    .lightbox-group img {\n      border: 1px solid #CCC;\n    }\n\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理要隱藏資訊的問題\n   */\n  #main {\n    .blog-admin,\n    #comments > h4 {\n      display: none !important;\n    }\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理標題消失的問題\n   */\n  #masthead {\n    .back-button {\n      display: none !important;\n    }\n    margin-bottom: 0;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理留言的部分\n   */\n  #comments {\n    .comment-replybox-thread,\n    .comment-form-tool,\n    .comment-reply,\n    #backlinks-container,\n    .thread-toggle,\n    .comment-replybox-single {\n      display: none !important;\n    }\n\n    // -----------------------------\n\n    /**\n     * @Pulipuli 20210406\n     * 是圖片的問題\n     */\n    .comment:not(#c6292867368144666888) {\n      display: none !important;\n    }\n\n    .comment#c6292867368144666888 {\n      .parsed-imgur:not(:first-of-type) {\n        display: none !important;\n      }\n\n      .comment-block {\n        height: 30rem;\n      }\n    }\n\n    // -----------------------------\n\n    .comment-content {\n      margin-bottom: 0;\n      padding-bottom: 0;\n\n      img {\n        max-width: 60% !important;\n      }\n    }\n\n    //.comment-block {\n    //  break-inside: avoid;\n    //}\n\n    padding: 0 !important;\n\n    img[src=\"//resources.blogblog.com/img/blank.gif\"]:after {\n      content: url(\"<img src='//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\");\n    }\n\n    &.hide-comments {\n      display: none !important;\n    }\n\n    border-top: 2px solid #ddd;\n\n    display: none !important;\n  }\n\n  .post {\n    margin-bottom: 0 !important;\n    border-bottom-width: 0 !important; \n  }\n\n  #main .post .entry-content .meta1 a:after,\n  #main .post .entry-content a[href$=\".png\"]:after,\n  #main #comments a[href]:after,\n  #main .post a[href=\"javascript:void(0)\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a.toggle:after,\n  #main .post #ArchiveList a.post-count-link:after {\n    content: none;\n  }\n\n  //#main .post a[href^=\"#\"] {\n  //  display: none;\n  //}\n\n  #main .post .puli-toc a[href^=\"#\"] {\n    display: inline;\n  }\n\n\n  #main #comments h4:after {\n    border-top-width: 0;\n  }\n\n  #main .post:last-of-type {\n    margin-bottom: 0;\n  }\n\n  #main .post h4,\n  #main .post h5,\n  #main .post h6 {\n    page-break-before: avoid;\n  }\n\n  #main .post table {\n    page-break-inside: avoid;\n  }\n\n  #main .post .entry-content {\n    padding-left:0;\n    padding-right:0;\n  }\n\n  #main .entry-meta {\n    display: none;\n  }\n\n  #main #comments {\n    border-bottom-width: 0;\n  }\n\n  /*********************/\n  #sidebar {\n    margin-left: 0;\n  }\n\n  #sidebar .about-me img[align=\"right\"] {\n    float:left;\n    margin-left: 0;\n    margin-right: 0.5em;\n\n  }\n\n  #sidebar .about-me .widget-content {\n    margin-top: 0.5em;\n  }\n  #sidebar .about-me .about-link,\n  #sidebar .about-me .email-subscribe {\n    display: none;\n  }\n\n  #sidebar .about-me a:after {\n    content: \"\";\n  }\n\n  #sidebar .about-me .social-media div {\n    text-align: left;\n    padding-right:0 !important;\n    padding-left:0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  #sidebar .about-me .social-media div .social-button-wrapper {\n    display: block;\n    text-align: left;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper a {\n    display: inline;\n  }\n\n  #sidebar .about-me .social-media div .social-button.google-plus,\n  #sidebar .about-me .social-media div .social-button.plurk,\n  #sidebar .about-me .social-media div .social-button.linkedin,\n  #sidebar .about-me .social-media div .social-button.twitter,\n  #sidebar .about-me .social-media div .social-button.github,\n  #sidebar .about-me .social-media div .social-button.android,\n  #sidebar .about-me .social-media div .social-button.chrome,\n  #sidebar .about-me .social-media div .social-button.rss {\n    display: none;\n  }\n\n  #sidebar .about-me .social-media div a:after {\n    content: \" \" attr(title) \": \" attr(href) \"\";\n    margin-left: 1em;\n  }\n\n  #sidebar .about-me .social-media div a.email:after {\n    content: \" \" attr(href) \"\";\n  }\n\n  #sidebar .popular-posts a[rel=\"bookmark\"] {\n    text-decoration: none;\n  }\n\n  #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n    content: attr(href);\n    text-decoration: underline;\n    display: block;\n  }\n\n  #sidebar .guestbook a[href]:after,\n  #sidebar .new a[href]:after,\n  #sidebar .comments a[href]:after {\n    content: \"\";\n  }\n\n  #sidebar .guestbook,\n  #sidebar .comments,\n  #sidebar .new,\n  #sidebar .PopularPosts {\n    display: none;\n  }\n\n  #sidebar .widget {\n    page-break-inside: avoid;\n  }\n\n  /**********************************/\n  #content-wrapper {\n    margin-bottom: 0;\n  }\n\n  /*************************************/\n  #footer .container {\n    padding: 0;\n  }\n  #footer p {\n    text-align: center;\n    width: 100%;\n  }\n\n  #footer p a:after {\n    content: \" \" attr(href) \"\";\n  }\n\n  #footer .themexpose {\n    display: none;\n  }\n\n  /*****************************/\n  a.quickedit {\n    display: none;\n  }\n\n  a:after {\n    white-space:nowrap;\n  }\n\n  body > .sumome-share-client-wrapper {\n    display: none;\n  }\n}   /* @media print { */","/******************************************/\n@media print {\n  #masthead {\n    border-bottom: 1px solid gray;\n    position: static !important;\n  }\n  #masthead.fixed-nav {\n    position: static !important;\n    height: 82px;\n    background-color: transparent !important;\n  }\n  #masthead.fixed-nav.fixed-nav h1 {\n    line-height: 30px;\n    margin-top: 10px;\n    font-size: 30px;\n  }\n  #masthead .gcse,\n  #masthead .btn-navbar,\n  #masthead #menu-primary {\n    display: none;\n  }\n  #masthead #header-inner {\n    width: 100% !important;\n    padding-left: 0;\n  }\n  #masthead .titlewrapper {\n    float: left;\n  }\n  #masthead .title a {\n    text-decoration: none;\n  }\n  #masthead .title a:after {\n    content: \"\";\n  }\n  #masthead .descriptionwrapper {\n    width: max-content;\n    /*padding-top: 20px;*/\n    padding-left: 18em;\n    padding-top: 5px;\n  }\n  #masthead .descriptionwrapper:after {\n    content: attr(url);\n    display: block;\n    text-decoration: underline;\n  }\n  #masthead .description {\n    margin-bottom: 0;\n  }\n  /****************/\n  .row {\n    margin-left: 0;\n  }\n  #content {\n    margin-left: 0;\n  }\n  #content-wrapper {\n    padding-top: 0;\n  }\n  /*****************/\n  #main .read-more,\n  #main .share-story-container,\n  #main a[name=\"more\"],\n  #main .related-posts,\n  #main .blogger-comment-from-post,\n  #main #backlinks-container {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理連結的問題\n   */\n  #main .post a[href]:after {\n    content: \" (\" attr(href) \") \";\n    font-size: 0.8em;\n    font-weight: normal;\n    text-decoration: underline !important;\n    white-space: break-spaces;\n    word-break: break-all;\n    max-width: 100%;\n    text-overflow: ellipsis;\n  }\n  #main .post h1 a[href]:after,\n  #main .post .puli-utils-append a[href]:after {\n    content: none !important;\n  }\n  #main .post a.btn:after,\n  #main .post a.lightbox-group:after,\n  #main .post a[href*=\".googleusercontent.com/-\"]:after,\n  #main .post a[href*=\"/s1600/\"]:after,\n  #main .post a[href^=\"javascript:\"]:after,\n  #main .post a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,\n  #main .post a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,\n  #main .post a[href^=\"https://www.slideshare.net/\"]:after,\n  #main .post a[href^=\"https://1drv.ms/p/\"]:after,\n  #main .post a[href^=\"https://app.box.com/s/\"]:after,\n  #main .post a[href^=\"https://mega.nz/\"]:after,\n  #main .post a[href^=\"https://www.mediafire.com/file/\"]:after,\n  #main .post a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://translate.google.com.tw/#view=\"]:after {\n    content: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理目錄問題\n   */\n  #main .entry-content .puli-toc,\n  #main .entry-content .puli-toc li,\n  #main .entry-content .puli-toc li a {\n    color: #000 !important;\n  }\n  #main .entry-content .puli-toc ul,\n  #main .entry-content .puli-toc li {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  #main .entry-content .puli-toc.puli-utils-append {\n    border: 1px solid #CCC;\n  }\n  #main .entry-content hr.puli-utils-append {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理iframe問題\n   */\n  #main .entry-content iframe {\n    height: 40rem !important;\n    break-inside: avoid;\n    border: 1px solid #CCC;\n  }\n  #main .entry-content article.article {\n    text-align: left;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理段落問題\n   */\n  #main .entry-content article > p {\n    line-height: 150%;\n  }\n  #main .entry-content article > ul > li {\n    line-height: 150%;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content hr {\n    border: 2px solid #CCC;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content article a.lightbox-group:first-of-type > img,\n  #main .entry-content img.original-size {\n    max-width: 30rem !important;\n    height: auto !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理標題下說明的問題\n   */\n  #main .entry-content article .meta1 {\n    line-height: 50%;\n  }\n  .at-share-dock-outer {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理程式碼問題\n   */\n  #main .entry-content .code-label.puli-utils-append {\n    display: none;\n    margin-left: 0 !important;\n    background: #FFF !important;\n  }\n  #main .entry-content .code-label.puli-utils-append i {\n    display: none;\n  }\n  .code-label.puli-utils-append {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理圖片的問題\n   */\n  #main .entry-content .lightbox-group img {\n    border: 1px solid #CCC;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理要隱藏資訊的問題\n   */\n  #main .blog-admin,\n  #main #comments > h4 {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理標題消失的問題\n   */\n  #masthead {\n    margin-bottom: 0;\n  }\n  #masthead .back-button {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理留言的部分\n   */\n  #comments {\n    /**\n     * @Pulipuli 20210406\n     * 是圖片的問題\n     */\n    padding: 0 !important;\n    border-top: 2px solid #ddd;\n    display: none !important;\n  }\n  #comments .comment-replybox-thread,\n  #comments .comment-form-tool,\n  #comments .comment-reply,\n  #comments #backlinks-container,\n  #comments .thread-toggle,\n  #comments .comment-replybox-single {\n    display: none !important;\n  }\n  #comments .comment:not(#c6292867368144666888) {\n    display: none !important;\n  }\n  #comments .comment#c6292867368144666888 .parsed-imgur:not(:first-of-type) {\n    display: none !important;\n  }\n  #comments .comment#c6292867368144666888 .comment-block {\n    height: 30rem;\n  }\n  #comments .comment-content {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n  #comments .comment-content img {\n    max-width: 60% !important;\n  }\n  #comments img[src=\"//resources.blogblog.com/img/blank.gif\"]:after {\n    content: url(\"<img src='//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\");\n  }\n  #comments.hide-comments {\n    display: none !important;\n  }\n  .post {\n    margin-bottom: 0 !important;\n    border-bottom-width: 0 !important;\n  }\n  #main .post .entry-content .meta1 a:after,\n  #main .post .entry-content a[href$=\".png\"]:after,\n  #main #comments a[href]:after,\n  #main .post a[href=\"javascript:void(0)\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a.toggle:after,\n  #main .post #ArchiveList a.post-count-link:after {\n    content: none;\n  }\n  #main .post .puli-toc a[href^=\"#\"] {\n    display: inline;\n  }\n  #main #comments h4:after {\n    border-top-width: 0;\n  }\n  #main .post:last-of-type {\n    margin-bottom: 0;\n  }\n  #main .post h4,\n  #main .post h5,\n  #main .post h6 {\n    page-break-before: avoid;\n  }\n  #main .post table {\n    page-break-inside: avoid;\n  }\n  #main .post .entry-content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #main .entry-meta {\n    display: none;\n  }\n  #main #comments {\n    border-bottom-width: 0;\n  }\n  /*********************/\n  #sidebar {\n    margin-left: 0;\n  }\n  #sidebar .about-me img[align=\"right\"] {\n    float: left;\n    margin-left: 0;\n    margin-right: 0.5em;\n  }\n  #sidebar .about-me .widget-content {\n    margin-top: 0.5em;\n  }\n  #sidebar .about-me .about-link,\n  #sidebar .about-me .email-subscribe {\n    display: none;\n  }\n  #sidebar .about-me a:after {\n    content: \"\";\n  }\n  #sidebar .about-me .social-media div {\n    text-align: left;\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper {\n    display: block;\n    text-align: left;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper a {\n    display: inline;\n  }\n  #sidebar .about-me .social-media div .social-button.google-plus,\n  #sidebar .about-me .social-media div .social-button.plurk,\n  #sidebar .about-me .social-media div .social-button.linkedin,\n  #sidebar .about-me .social-media div .social-button.twitter,\n  #sidebar .about-me .social-media div .social-button.github,\n  #sidebar .about-me .social-media div .social-button.android,\n  #sidebar .about-me .social-media div .social-button.chrome,\n  #sidebar .about-me .social-media div .social-button.rss {\n    display: none;\n  }\n  #sidebar .about-me .social-media div a:after {\n    content: \" \" attr(title) \": \" attr(href) \"\";\n    margin-left: 1em;\n  }\n  #sidebar .about-me .social-media div a.email:after {\n    content: \" \" attr(href) \"\";\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"] {\n    text-decoration: none;\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n    content: attr(href);\n    text-decoration: underline;\n    display: block;\n  }\n  #sidebar .guestbook a[href]:after,\n  #sidebar .new a[href]:after,\n  #sidebar .comments a[href]:after {\n    content: \"\";\n  }\n  #sidebar .guestbook,\n  #sidebar .comments,\n  #sidebar .new,\n  #sidebar .PopularPosts {\n    display: none;\n  }\n  #sidebar .widget {\n    page-break-inside: avoid;\n  }\n  /**********************************/\n  #content-wrapper {\n    margin-bottom: 0;\n  }\n  /*************************************/\n  #footer .container {\n    padding: 0;\n  }\n  #footer p {\n    text-align: center;\n    width: 100%;\n  }\n  #footer p a:after {\n    content: \" \" attr(href) \"\";\n  }\n  #footer .themexpose {\n    display: none;\n  }\n  /*****************************/\n  a.quickedit {\n    display: none;\n  }\n  a:after {\n    white-space: nowrap;\n  }\n  body > .sumome-share-client-wrapper {\n    display: none;\n  }\n}\n/* @media print { */\n"]}]);



/***/ })

/******/ });
//# sourceMappingURL=page-as-item.js.map