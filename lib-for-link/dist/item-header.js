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
/******/ 		"item-header": 0
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
/******/ 	deferredModules.push(["./lib-for-link/src/item-header/item-header.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/item-header/item-header.js":
/*!*****************************************************!*\
  !*** ./lib-for-link/src/item-header/item-header.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_article_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/article.less */ "./lib-for-link/src/item-header/style/article.less");
/* harmony import */ var _style_article_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_article_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_go_top_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/go-top.less */ "./lib-for-link/src/item-header/style/go-top.less");
/* harmony import */ var _style_go_top_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_go_top_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_image_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/image.less */ "./lib-for-link/src/item-header/style/image.less");
/* harmony import */ var _style_image_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_image_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_backlinks_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/backlinks.less */ "./lib-for-link/src/item-header/style/backlinks.less");
/* harmony import */ var _style_backlinks_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_backlinks_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_sidebar_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/sidebar.less */ "./lib-for-link/src/item-header/style/sidebar.less");
/* harmony import */ var _style_sidebar_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_sidebar_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_style_item_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/style-item.less */ "./lib-for-link/src/item-header/style/style-item.less");
/* harmony import */ var _style_style_item_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_style_item_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _script_comment_iframe_link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script/comment-iframe-link.js */ "./lib-for-link/src/item-header/script/comment-iframe-link.js");
/* harmony import */ var _script_comment_iframe_link_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_script_comment_iframe_link_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_article_meta_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/article-meta.less */ "./lib-for-link/src/item-header/style/article-meta.less");
/* harmony import */ var _style_article_meta_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_article_meta_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_article_code_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/article-code.less */ "./lib-for-link/src/item-header/style/article-code.less");
/* harmony import */ var _style_article_code_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_article_code_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_article_table_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/article-table.less */ "./lib-for-link/src/item-header/style/article-table.less");
/* harmony import */ var _style_article_table_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_article_table_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_article_iframe_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/article-iframe.less */ "./lib-for-link/src/item-header/style/article-iframe.less");
/* harmony import */ var _style_article_iframe_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_article_iframe_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_article_footer_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style/article-footer.less */ "./lib-for-link/src/item-header/style/article-footer.less");
/* harmony import */ var _style_article_footer_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_article_footer_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_addthis_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style/addthis.less */ "./lib-for-link/src/item-header/style/addthis.less");
/* harmony import */ var _style_addthis_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_addthis_less__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style-print/item-style-print.less */ "./lib-for-link/src/item-header/style-print/item-style-print.less");
/* harmony import */ var _style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_print_item_style_print_less__WEBPACK_IMPORTED_MODULE_13__);














//import "./style-print/gutenberg.min.less"


/***/ }),

/***/ "./lib-for-link/src/item-header/script/comment-iframe-link.js":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/item-header/script/comment-iframe-link.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */


// -----------------------------
// 20170309 我要發問
$(function () {
  var _setup_iframe_anchor = function () {
    var _len1 = $("#comment-holder iframe:last").length;
    var _len2 = $(".comment-form > iframe:last").length;
    if (_len1 === 0 && _len2 === 0) {
      //console.log("iframe not found");
      setTimeout(_setup_iframe_anchor, 1000);
    } else {
      var _iframe = $("#comment-holder iframe:last");
      if (_len1 === 0 && _len2 > 0) {
        _iframe = $(".comment-form > iframe:last");
      }
      //console.log([_len1, _len2]);
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
});


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

/***/ "./lib-for-link/src/item-header/style/addthis.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/addthis.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./addthis.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/addthis.less");

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

/***/ "./lib-for-link/src/item-header/style/article-code.less":
/*!**************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-code.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article-code.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-code.less");

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

/***/ "./lib-for-link/src/item-header/style/article-footer.less":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-footer.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article-footer.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-footer.less");

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

/***/ "./lib-for-link/src/item-header/style/article-iframe.less":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-iframe.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article-iframe.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-iframe.less");

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

/***/ "./lib-for-link/src/item-header/style/article-meta.less":
/*!**************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-meta.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article-meta.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-meta.less");

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

/***/ "./lib-for-link/src/item-header/style/article-table.less":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-table.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article-table.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-table.less");

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

/***/ "./lib-for-link/src/item-header/style/article.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./article.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article.less");

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

/***/ "./lib-for-link/src/item-header/style/backlinks.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/backlinks.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./backlinks.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/backlinks.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./go-top.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/go-top.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./image.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/image.less");

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

/***/ "./lib-for-link/src/item-header/style/sidebar.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/sidebar.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./sidebar.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/sidebar.less");

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

/***/ "./lib-for-link/src/item-header/style/style-item.less":
/*!************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/style-item.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./style-item.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/style-item.less");

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

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/item-style-print.less":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/item-style-print.less ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media print{#masthead{border-bottom:1px solid grey;position:static!important}#masthead.fixed-nav{position:static!important;height:82px;background-color:transparent!important}#masthead.fixed-nav.fixed-nav h1{line-height:30px;margin-top:10px;font-size:30px}#masthead #menu-primary,#masthead .btn-navbar,#masthead .gcse{display:none}#masthead #header-inner{width:100%!important;padding-left:0}#masthead .titlewrapper{float:left}#masthead .title a{text-decoration:none}#masthead .title a:after{content:\"\"}#masthead .descriptionwrapper{width:max-content;padding-left:18em;padding-top:5px}#masthead .descriptionwrapper:after{content:attr(url);display:block;text-decoration:underline}#masthead .description{margin-bottom:0}#content,.row{margin-left:0}#content-wrapper{padding-top:0}#main #backlinks-container,#main .blogger-comment-from-post,#main .read-more,#main .related-posts,#main .share-story-container,#main a[name=more]{display:none}#main .post a[href]:after{content:\" (\" attr(href) \") \";font-size:.8em;font-weight:400;text-decoration:underline!important;white-space:break-spaces;word-break:break-all;max-width:100%;text-overflow:ellipsis}#main .post .puli-utils-append a[href]:after,#main .post a.btn:after,#main .post a.lightbox-group:after,#main .post a[href*=\".googleusercontent.com/-\"]:after,#main .post a[href*=\"/s1600/\"]:after,#main .post a[href^=\"#\"]:after,#main .post a[href^=\"https://1drv.ms/p/\"]:after,#main .post a[href^=\"https://app.box.com/s/\"]:after,#main .post a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,#main .post a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,#main .post a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,#main .post a[href^=\"https://mega.nz/\"]:after,#main .post a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,#main .post a[href^=\"https://translate.google.com.tw/#view=\"]:after,#main .post a[href^=\"https://www.mediafire.com/file/\"]:after,#main .post a[href^=\"https://www.slideshare.net/\"]:after,#main .post a[href^=\"javascript:\"]:after,#main .post h1 a[href]:after{content:none!important}.gcse{display:none!important}#main .entry-content .puli-toc,#main .entry-content .puli-toc li,#main .entry-content .puli-toc li a{color:#000!important}#main .entry-content .puli-toc li,#main .entry-content .puli-toc ul{margin-top:0!important;margin-bottom:0!important}#main .entry-content .puli-toc.puli-utils-append{border:1px solid #ccc}#main .entry-content hr.puli-utils-append{display:none}#main .entry-content iframe{height:40rem!important;break-inside:avoid;border:1px solid #ccc}#main .entry-content article.article{text-align:left}#main .entry-content article>p,#main .entry-content article>ul>li{line-height:150%}#main .entry-content hr{border:2px solid #ccc}#main .entry-content article a.lightbox-group:first-of-type>img,#main .entry-content img.original-size{max-width:30rem!important;height:auto!important}#main .entry-content article .meta1{line-height:50%}.at-share-dock-outer{display:none!important}#main .entry-content .code-label.puli-utils-append{display:none;margin-left:0!important;background:#fff!important}#main .entry-content .code-label.puli-utils-append i,.code-label.puli-utils-append{display:none}#main .entry-content .lightbox-group img{border:1px solid #ccc}#main #comments>h4,#main .blog-admin{display:none!important}#masthead{margin-bottom:0}#comments,#masthead .back-button{display:none!important}#comments{padding:0!important;border-top:2px solid #ddd}#comments #backlinks-container,#comments .comment#c6292867368144666888 .parsed-imgur:not(:first-of-type),#comments .comment-form-tool,#comments .comment-reply,#comments .comment-replybox-single,#comments .comment-replybox-thread,#comments .comment:not(#c6292867368144666888),#comments .thread-toggle{display:none!important}#comments .comment#c6292867368144666888 .comment-block{height:30rem}#comments .comment-content{margin-bottom:0;padding-bottom:0}#comments .comment-content img{max-width:60%!important}#comments img[src=\"//resources.blogblog.com/img/blank.gif\"]:after{content:url(\"<img src='/3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\")}#comments.hide-comments{display:none!important}.post{margin-bottom:0!important;border-bottom-width:0!important}#main #comments a[href]:after,#main .post #ArchiveList a.post-count-link:after,#main .post .entry-content .meta1 a:after,#main .post .entry-content a[href$=\".png\"]:after,#main .post a.toggle:after,#main .post a[href=\"javascript:void(0)\"]:after,#main .post a[href^=\"#\"]:after{content:none}#main .post a[href^=\"#\"]{display:none}#main .post .puli-toc a[href^=\"#\"]{display:inline}#main #comments h4:after{border-top-width:0}#main .post:last-of-type{margin-bottom:0}#main .post h4,#main .post h5,#main .post h6{page-break-before:avoid}#main .post table{page-break-inside:avoid}#main .post .entry-content{padding-left:0;padding-right:0}#main .entry-meta{display:none}#main #comments{border-bottom-width:0}#sidebar{margin-left:0}#sidebar .about-me img[align=right]{float:left;margin-left:0;margin-right:.5em}#sidebar .about-me .widget-content{margin-top:.5em}#sidebar .about-me .about-link,#sidebar .about-me .email-subscribe{display:none}#sidebar .about-me a:after{content:\"\"}#sidebar .about-me .social-media div{text-align:left;padding-right:0!important;padding-left:0!important;margin-bottom:0!important}#sidebar .about-me .social-media div .social-button-wrapper{display:block;text-align:left}#sidebar .about-me .social-media div .social-button-wrapper a{display:inline}#sidebar .about-me .social-media div .social-button.android,#sidebar .about-me .social-media div .social-button.chrome,#sidebar .about-me .social-media div .social-button.github,#sidebar .about-me .social-media div .social-button.google-plus,#sidebar .about-me .social-media div .social-button.linkedin,#sidebar .about-me .social-media div .social-button.plurk,#sidebar .about-me .social-media div .social-button.rss,#sidebar .about-me .social-media div .social-button.twitter{display:none}#sidebar .about-me .social-media div a:after{content:\" \" attr(title) \": \" attr(href) \"\";margin-left:1em}#sidebar .about-me .social-media div a.email:after{content:\" \" attr(href) \"\"}#sidebar .popular-posts a[rel=bookmark]{text-decoration:none}#sidebar .popular-posts a[rel=bookmark]:after{content:attr(href);text-decoration:underline;display:block}#sidebar .comments a[href]:after,#sidebar .guestbook a[href]:after,#sidebar .new a[href]:after{content:\"\"}#sidebar .comments,#sidebar .guestbook,#sidebar .new,#sidebar .PopularPosts{display:none}#sidebar .widget{page-break-inside:avoid}#content-wrapper{margin-bottom:0}#footer .container{padding:0}#footer p{text-align:center;width:100%}#footer p a:after{content:\" \" attr(href) \"\"}#footer .themexpose,a.quickedit{display:none}a:after{white-space:nowrap}body>.sumome-share-client-wrapper{display:none}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style-print/item-style-print.less","item-style-print.less"],"names":[],"mappings":"AAEA,aAIE,UACE,4BAAA,CACA,yBCHF,CDOA,oBACE,yBAAA,CACA,WAAA,CACA,sCCLF,CDQA,iCACE,gBAAA,CACA,eAAA,CACA,cCNF,CDSA,8DAGE,YCPF,CDUA,wBACE,oBAAA,CACA,cCRF,CDUA,wBACE,UCRF,CDUA,mBACE,oBCRF,CDWA,yBACE,UCTF,CDYA,8BACE,iBAAA,CAEA,iBAAA,CACA,eCVF,CDiBA,oCACE,iBAAA,CACA,aAAA,CACA,yBCfF,CDkBA,uBACE,eChBF,CDyBA,cACE,aCnBF,CDsBA,iBACE,aCpBF,CDyBA,kJAME,YCtBF,CD6BA,0BAEI,4BAAA,CACA,cAAA,CACA,eAAA,CACA,mCAAA,CACA,wBAAA,CACA,oBAAA,CACA,cAAA,CACA,sBCxBJ,CDeA,soCAqCI,sBC5BJ,CDgCA,MACE,sBC9BF,CDsCA,qGAII,oBCjCJ,CD6BA,oEASI,sBAAA,CACA,yBClCJ,CDwBA,iDAcI,qBCnCJ,CDqBA,0CAkBI,YCpCJ,CD4CA,4BAEI,sBAAA,CACA,kBAAA,CACA,qBCvCJ,CD2CA,qCACE,eCzCF,CDgDA,kEAQI,gBC9CJ,CDuDA,wBAEI,qBClDJ,CD0DA,uGAGI,yBAAA,CACA,qBCrDJ,CD6DA,oCAEI,eCxDJ,CD4DA,qBACE,sBC1DF,CDkEA,mDAEI,YAAA,CAEA,uBAAA,CACA,yBC9DJ,CDsEA,mFACE,YCjEF,CDwEA,yCAEI,qBCnEJ,CD4EA,qCAGI,sBCvEJ,CDgFA,UAIE,eC7EF,CDoFA,iCATI,sBC3DJ,CDoEA,UA6CE,mBAAA,CAUA,yBC3HF,CDoEA,4SAsBM,sBC5EN,CDsDA,uDA0BM,YC7EN,CDmDA,2BAiCI,eAAA,CACA,gBCjFJ,CD+CA,+BAqCM,uBCjFN,CD4CA,kEAgDI,2JCzFJ,CD4FE,wBACE,sBC1FJ,CDkGA,MACE,yBAAA,CACA,+BChGF,CDmGA,mRAOE,YCjGF,CDoGA,yBACE,YClGF,CDqGA,mCACE,cCnGF,CDuGA,yBACE,kBCrGF,CDwGA,yBACE,eCtGF,CDyGA,6CAGE,uBCvGF,CD0GA,kBACE,uBCxGF,CD2GA,2BACE,cAAA,CACA,eCzGF,CD4GA,kBACE,YC1GF,CD6GA,gBACE,qBC3GF,CD+GA,SACE,aC5GF,CD+GA,oCACE,UAAA,CACA,aAAA,CACA,iBC7GF,CDiHA,mCACE,eC/GF,CDiHA,mEAEE,YC/GF,CDkHA,2BACE,UChHF,CDmHA,qCACE,eAAA,CACA,yBAAA,CACA,wBAAA,CACA,yBCjHF,CDoHA,4DACE,aAAA,CACA,eClHF,CDoHA,8DACE,cClHF,CDqHA,6dAQE,YCnHF,CDsHA,6CACE,0CAAA,CACA,eCpHF,CDuHA,mDACE,yBCrHF,CDwHA,wCACE,oBCtHF,CDyHA,8CACE,kBAAA,CACA,yBAAA,CACA,aCvHF,CD0HA,+FAGE,UCxHF,CD2HA,4EAIE,YCzHF,CD4HA,iBACE,uBC1HF,CD8HA,iBACE,eC3HF,CD+HA,mBACE,SC5HF,CD8HA,UACE,iBAAA,CACA,UC5HF,CD+HA,kBACE,yBC7HF,CDqIA,gCACE,YC/HF,CDkIA,QACE,kBChIF,CDmIA,kCACE,YCjIF,CACF","file":"item-style-print.less","sourcesContent":["\n/******************************************/\n@media print {\n  //@page {\n  //  size: A4 portrait;\n  //}\n  #masthead {\n    border-bottom: 1px solid gray;\n    position: static !important;\n    \n  }\n\n  #masthead.fixed-nav {\n    position: static !important;\n    height: 82px;\n    background-color: transparent !important;\n  }\n\n  #masthead.fixed-nav.fixed-nav h1 {\n    line-height: 30px;\n    margin-top: 10px;\n    font-size: 30px;\n  }\n\n  #masthead .gcse,\n  #masthead .btn-navbar,\n  #masthead #menu-primary {\n    display:none;\n  }\n\n  #masthead #header-inner {\n    width: 100% !important;\n    padding-left: 0;\n  }\n  #masthead .titlewrapper {\n    float: left;\n  }\n  #masthead .title a {\n    text-decoration: none;\n  }\n\n  #masthead .title a:after {\n    content: \"\";\n  }\n\n  #masthead .descriptionwrapper {\n    width: max-content;\n    /*padding-top: 20px;*/\n    padding-left: 18em;\n    padding-top: 5px;\n  }\n\n  //#masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n  //    display: block;\n  //}\n\n  #masthead .descriptionwrapper:after {\n    content:attr(url);\n    display:block;\n    text-decoration: underline;\n  }\n\n  #masthead .description {\n    margin-bottom: 0;\n  }\n\n  /****************/\n\n  .row {\n    margin-left: 0;\n  }\n\n  #content {\n    margin-left:0;\n  }\n\n  #content-wrapper {\n    padding-top: 0;\n  }\n\n  /*****************/\n\n  #main .read-more,\n  #main .share-story-container,\n  #main a[name=\"more\"],\n  #main .related-posts,\n  #main .blogger-comment-from-post,\n  #main #backlinks-container {\n    display: none;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理連結的問題\n   */\n  #main .post {\n    a[href]:after{\n      content:\" (\" attr(href) \") \";\n      font-size:0.8em;\n      font-weight:normal;\n      text-decoration: underline !important;\n      white-space: break-spaces;\n      word-break: break-all;\n      max-width: 100%;\n      text-overflow: ellipsis;\n    }\n\n    h1, \n    .puli-utils-append {\n      a[href]:after {\n        content: none !important;\n      }\n    }\n\n    a.btn:after,\n      a.lightbox-group:after,\n      a[href*=\".googleusercontent.com/-\"]:after,\n      a[href*=\"/s1600/\"]:after,\n      a[href^=\"#\"]:after,\n      a[href^=\"javascript:\"]:after,\n      a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,\n      a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,\n      a[href^=\"https://www.slideshare.net/\"]:after,\n      a[href^=\"https://1drv.ms/p/\"]:after,\n      a[href^=\"https://app.box.com/s/\"]:after,\n      a[href^=\"https://mega.nz/\"]:after,\n      a[href^=\"https://www.mediafire.com/file/\"]:after,\n      a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,\n      a[href^=\"https://translate.google.com.tw/#view=\"]:after {\n      content: none !important;\n    }\n  }\n\n  .gcse {\n    display: none !important;\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理目錄問題\n   */\n  #main .entry-content {\n    .puli-toc,\n    .puli-toc li,\n    .puli-toc li a,{\n      color: #000 !important;\n    }\n\n    .puli-toc ul,\n    .puli-toc li {\n      margin-top: 0 !important;\n      margin-bottom: 0 !important;\n    }\n\n    .puli-toc.puli-utils-append {\n      border: 1px solid #CCC;\n    }\n\n    hr.puli-utils-append {\n      display: none;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理iframe問題\n   */\n  #main .entry-content {\n    iframe {\n      height: 40rem !important;\n      break-inside: avoid;\n      border: 1px solid #CCC;\n    }\n  }\n\n  #main .entry-content article.article {\n    text-align: left;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理段落問題\n   */\n  #main .entry-content {\n\n    article > p {\n      //margin-bottom: 0;\n      line-height: 150%;\n    }\n\n    article > ul > li {\n      line-height: 150%;\n    }\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content {\n    hr {\n      border: 2px solid #CCC;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content {\n    article a.lightbox-group:first-of-type > img,\n      img.original-size {\n      max-width: 30rem !important;\n      height: auto !important;\n    }\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理標題下說明的問題\n   */\n  #main .entry-content article {\n    .meta1 {\n      line-height: 50%;\n    }\n  }\n\n  .at-share-dock-outer {\n    display: none !important;\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理程式碼問題\n   */\n  #main .entry-content {\n    .code-label.puli-utils-append {\n      display: none;\n\n      margin-left: 0 !important;\n      background: #FFF !important;\n\n      i {\n        display: none;\n      }\n    }\n  }\n\n  .code-label.puli-utils-append {\n    display: none;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理圖片的問題\n   */\n  #main .entry-content {\n    .lightbox-group img {\n      border: 1px solid #CCC;\n    }\n\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理要隱藏資訊的問題\n   */\n  #main {\n    .blog-admin,\n    #comments > h4 {\n      display: none !important;\n    }\n  }\n\n\n  /**\n   * @Pulipuli 20210406\n   * 處理標題消失的問題\n   */\n  #masthead {\n    .back-button {\n      display: none !important;\n    }\n    margin-bottom: 0;\n  }\n\n  /**\n   * @Pulipuli 20210406\n   * 處理留言的部分\n   */\n  #comments {\n    .comment-replybox-thread,\n    .comment-form-tool,\n    .comment-reply,\n    #backlinks-container,\n    .thread-toggle,\n    .comment-replybox-single {\n      display: none !important;\n    }\n\n    // -----------------------------\n\n    /**\n     * @Pulipuli 20210406\n     * 是圖片的問題\n     */\n    .comment:not(#c6292867368144666888) {\n      display: none !important;\n    }\n\n    .comment#c6292867368144666888 {\n      .parsed-imgur:not(:first-of-type) {\n        display: none !important;\n      }\n\n      .comment-block {\n        height: 30rem;\n      }\n    }\n\n    // -----------------------------\n\n    .comment-content {\n      margin-bottom: 0;\n      padding-bottom: 0;\n\n      img {\n        max-width: 60% !important;\n      }\n    }\n\n    //.comment-block {\n    //  break-inside: avoid;\n    //}\n\n    padding: 0 !important;\n\n    img[src=\"//resources.blogblog.com/img/blank.gif\"]:after {\n      content: url(\"<img src='//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\");\n    }\n\n    &.hide-comments {\n      display: none !important;\n    }\n\n    border-top: 2px solid #ddd;\n\n    display: none !important;\n  }\n\n  .post {\n    margin-bottom: 0 !important;\n    border-bottom-width: 0 !important; \n  }\n\n  #main .post .entry-content .meta1 a:after,\n  #main .post .entry-content a[href$=\".png\"]:after,\n  #main #comments a[href]:after,\n  #main .post a[href=\"javascript:void(0)\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a.toggle:after,\n  #main .post #ArchiveList a.post-count-link:after {\n    content: none;\n  }\n\n  #main .post a[href^=\"#\"] {\n    display: none;\n  }\n\n  #main .post .puli-toc a[href^=\"#\"] {\n    display: inline;\n  }\n\n\n  #main #comments h4:after {\n    border-top-width: 0;\n  }\n\n  #main .post:last-of-type {\n    margin-bottom: 0;\n  }\n\n  #main .post h4,\n  #main .post h5,\n  #main .post h6 {\n    page-break-before: avoid;\n  }\n\n  #main .post table {\n    page-break-inside: avoid;\n  }\n\n  #main .post .entry-content {\n    padding-left:0;\n    padding-right:0;\n  }\n\n  #main .entry-meta {\n    display: none;\n  }\n\n  #main #comments {\n    border-bottom-width: 0;\n  }\n\n  /*********************/\n  #sidebar {\n    margin-left: 0;\n  }\n\n  #sidebar .about-me img[align=\"right\"] {\n    float:left;\n    margin-left: 0;\n    margin-right: 0.5em;\n\n  }\n\n  #sidebar .about-me .widget-content {\n    margin-top: 0.5em;\n  }\n  #sidebar .about-me .about-link,\n  #sidebar .about-me .email-subscribe {\n    display: none;\n  }\n\n  #sidebar .about-me a:after {\n    content: \"\";\n  }\n\n  #sidebar .about-me .social-media div {\n    text-align: left;\n    padding-right:0 !important;\n    padding-left:0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  #sidebar .about-me .social-media div .social-button-wrapper {\n    display: block;\n    text-align: left;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper a {\n    display: inline;\n  }\n\n  #sidebar .about-me .social-media div .social-button.google-plus,\n  #sidebar .about-me .social-media div .social-button.plurk,\n  #sidebar .about-me .social-media div .social-button.linkedin,\n  #sidebar .about-me .social-media div .social-button.twitter,\n  #sidebar .about-me .social-media div .social-button.github,\n  #sidebar .about-me .social-media div .social-button.android,\n  #sidebar .about-me .social-media div .social-button.chrome,\n  #sidebar .about-me .social-media div .social-button.rss {\n    display: none;\n  }\n\n  #sidebar .about-me .social-media div a:after {\n    content: \" \" attr(title) \": \" attr(href) \"\";\n    margin-left: 1em;\n  }\n\n  #sidebar .about-me .social-media div a.email:after {\n    content: \" \" attr(href) \"\";\n  }\n\n  #sidebar .popular-posts a[rel=\"bookmark\"] {\n    text-decoration: none;\n  }\n\n  #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n    content: attr(href);\n    text-decoration: underline;\n    display: block;\n  }\n\n  #sidebar .guestbook a[href]:after,\n  #sidebar .new a[href]:after,\n  #sidebar .comments a[href]:after {\n    content: \"\";\n  }\n\n  #sidebar .guestbook,\n  #sidebar .comments,\n  #sidebar .new,\n  #sidebar .PopularPosts {\n    display: none;\n  }\n\n  #sidebar .widget {\n    page-break-inside: avoid;\n  }\n\n  /**********************************/\n  #content-wrapper {\n    margin-bottom: 0;\n  }\n\n  /*************************************/\n  #footer .container {\n    padding: 0;\n  }\n  #footer p {\n    text-align: center;\n    width: 100%;\n  }\n\n  #footer p a:after {\n    content: \" \" attr(href) \"\";\n  }\n\n  #footer .themexpose {\n    display: none;\n  }\n\n  /*****************************/\n  a.quickedit {\n    display: none;\n  }\n\n  a:after {\n    white-space:nowrap;\n  }\n\n  body > .sumome-share-client-wrapper {\n    display: none;\n  }\n}   /* @media print { */","/******************************************/\n@media print {\n  #masthead {\n    border-bottom: 1px solid gray;\n    position: static !important;\n  }\n  #masthead.fixed-nav {\n    position: static !important;\n    height: 82px;\n    background-color: transparent !important;\n  }\n  #masthead.fixed-nav.fixed-nav h1 {\n    line-height: 30px;\n    margin-top: 10px;\n    font-size: 30px;\n  }\n  #masthead .gcse,\n  #masthead .btn-navbar,\n  #masthead #menu-primary {\n    display: none;\n  }\n  #masthead #header-inner {\n    width: 100% !important;\n    padding-left: 0;\n  }\n  #masthead .titlewrapper {\n    float: left;\n  }\n  #masthead .title a {\n    text-decoration: none;\n  }\n  #masthead .title a:after {\n    content: \"\";\n  }\n  #masthead .descriptionwrapper {\n    width: max-content;\n    /*padding-top: 20px;*/\n    padding-left: 18em;\n    padding-top: 5px;\n  }\n  #masthead .descriptionwrapper:after {\n    content: attr(url);\n    display: block;\n    text-decoration: underline;\n  }\n  #masthead .description {\n    margin-bottom: 0;\n  }\n  /****************/\n  .row {\n    margin-left: 0;\n  }\n  #content {\n    margin-left: 0;\n  }\n  #content-wrapper {\n    padding-top: 0;\n  }\n  /*****************/\n  #main .read-more,\n  #main .share-story-container,\n  #main a[name=\"more\"],\n  #main .related-posts,\n  #main .blogger-comment-from-post,\n  #main #backlinks-container {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理連結的問題\n   */\n  #main .post a[href]:after {\n    content: \" (\" attr(href) \") \";\n    font-size: 0.8em;\n    font-weight: normal;\n    text-decoration: underline !important;\n    white-space: break-spaces;\n    word-break: break-all;\n    max-width: 100%;\n    text-overflow: ellipsis;\n  }\n  #main .post h1 a[href]:after,\n  #main .post .puli-utils-append a[href]:after {\n    content: none !important;\n  }\n  #main .post a.btn:after,\n  #main .post a.lightbox-group:after,\n  #main .post a[href*=\".googleusercontent.com/-\"]:after,\n  #main .post a[href*=\"/s1600/\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a[href^=\"javascript:\"]:after,\n  #main .post a[href^=\"https://docs.google.com/\"][href*=\"/export/\"]:after,\n  #main .post a[href^=\"https://pulipulichen.github.io/blog-pulipuli-info-data-\"]:after,\n  #main .post a[href^=\"https://www.slideshare.net/\"]:after,\n  #main .post a[href^=\"https://1drv.ms/p/\"]:after,\n  #main .post a[href^=\"https://app.box.com/s/\"]:after,\n  #main .post a[href^=\"https://mega.nz/\"]:after,\n  #main .post a[href^=\"https://www.mediafire.com/file/\"]:after,\n  #main .post a[href^=\"https://drive.google.com/file/d/\"][href$=\"/view?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/document/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/presentation/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://docs.google.com/spreadsheets/d/\"][href$=\"/edit?usp=sharing\"]:after,\n  #main .post a[href^=\"https://translate.google.com.tw/#view=\"]:after {\n    content: none !important;\n  }\n  .gcse {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理目錄問題\n   */\n  #main .entry-content .puli-toc,\n  #main .entry-content .puli-toc li,\n  #main .entry-content .puli-toc li a {\n    color: #000 !important;\n  }\n  #main .entry-content .puli-toc ul,\n  #main .entry-content .puli-toc li {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  #main .entry-content .puli-toc.puli-utils-append {\n    border: 1px solid #CCC;\n  }\n  #main .entry-content hr.puli-utils-append {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理iframe問題\n   */\n  #main .entry-content iframe {\n    height: 40rem !important;\n    break-inside: avoid;\n    border: 1px solid #CCC;\n  }\n  #main .entry-content article.article {\n    text-align: left;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理段落問題\n   */\n  #main .entry-content article > p {\n    line-height: 150%;\n  }\n  #main .entry-content article > ul > li {\n    line-height: 150%;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content hr {\n    border: 2px solid #CCC;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理水平線問題\n   */\n  #main .entry-content article a.lightbox-group:first-of-type > img,\n  #main .entry-content img.original-size {\n    max-width: 30rem !important;\n    height: auto !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理標題下說明的問題\n   */\n  #main .entry-content article .meta1 {\n    line-height: 50%;\n  }\n  .at-share-dock-outer {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理程式碼問題\n   */\n  #main .entry-content .code-label.puli-utils-append {\n    display: none;\n    margin-left: 0 !important;\n    background: #FFF !important;\n  }\n  #main .entry-content .code-label.puli-utils-append i {\n    display: none;\n  }\n  .code-label.puli-utils-append {\n    display: none;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理圖片的問題\n   */\n  #main .entry-content .lightbox-group img {\n    border: 1px solid #CCC;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理要隱藏資訊的問題\n   */\n  #main .blog-admin,\n  #main #comments > h4 {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理標題消失的問題\n   */\n  #masthead {\n    margin-bottom: 0;\n  }\n  #masthead .back-button {\n    display: none !important;\n  }\n  /**\n   * @Pulipuli 20210406\n   * 處理留言的部分\n   */\n  #comments {\n    /**\n     * @Pulipuli 20210406\n     * 是圖片的問題\n     */\n    padding: 0 !important;\n    border-top: 2px solid #ddd;\n    display: none !important;\n  }\n  #comments .comment-replybox-thread,\n  #comments .comment-form-tool,\n  #comments .comment-reply,\n  #comments #backlinks-container,\n  #comments .thread-toggle,\n  #comments .comment-replybox-single {\n    display: none !important;\n  }\n  #comments .comment:not(#c6292867368144666888) {\n    display: none !important;\n  }\n  #comments .comment#c6292867368144666888 .parsed-imgur:not(:first-of-type) {\n    display: none !important;\n  }\n  #comments .comment#c6292867368144666888 .comment-block {\n    height: 30rem;\n  }\n  #comments .comment-content {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n  #comments .comment-content img {\n    max-width: 60% !important;\n  }\n  #comments img[src=\"//resources.blogblog.com/img/blank.gif\"]:after {\n    content: url(\"<img src='//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png' />\");\n  }\n  #comments.hide-comments {\n    display: none !important;\n  }\n  .post {\n    margin-bottom: 0 !important;\n    border-bottom-width: 0 !important;\n  }\n  #main .post .entry-content .meta1 a:after,\n  #main .post .entry-content a[href$=\".png\"]:after,\n  #main #comments a[href]:after,\n  #main .post a[href=\"javascript:void(0)\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a.toggle:after,\n  #main .post #ArchiveList a.post-count-link:after {\n    content: none;\n  }\n  #main .post a[href^=\"#\"] {\n    display: none;\n  }\n  #main .post .puli-toc a[href^=\"#\"] {\n    display: inline;\n  }\n  #main #comments h4:after {\n    border-top-width: 0;\n  }\n  #main .post:last-of-type {\n    margin-bottom: 0;\n  }\n  #main .post h4,\n  #main .post h5,\n  #main .post h6 {\n    page-break-before: avoid;\n  }\n  #main .post table {\n    page-break-inside: avoid;\n  }\n  #main .post .entry-content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #main .entry-meta {\n    display: none;\n  }\n  #main #comments {\n    border-bottom-width: 0;\n  }\n  /*********************/\n  #sidebar {\n    margin-left: 0;\n  }\n  #sidebar .about-me img[align=\"right\"] {\n    float: left;\n    margin-left: 0;\n    margin-right: 0.5em;\n  }\n  #sidebar .about-me .widget-content {\n    margin-top: 0.5em;\n  }\n  #sidebar .about-me .about-link,\n  #sidebar .about-me .email-subscribe {\n    display: none;\n  }\n  #sidebar .about-me a:after {\n    content: \"\";\n  }\n  #sidebar .about-me .social-media div {\n    text-align: left;\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper {\n    display: block;\n    text-align: left;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper a {\n    display: inline;\n  }\n  #sidebar .about-me .social-media div .social-button.google-plus,\n  #sidebar .about-me .social-media div .social-button.plurk,\n  #sidebar .about-me .social-media div .social-button.linkedin,\n  #sidebar .about-me .social-media div .social-button.twitter,\n  #sidebar .about-me .social-media div .social-button.github,\n  #sidebar .about-me .social-media div .social-button.android,\n  #sidebar .about-me .social-media div .social-button.chrome,\n  #sidebar .about-me .social-media div .social-button.rss {\n    display: none;\n  }\n  #sidebar .about-me .social-media div a:after {\n    content: \" \" attr(title) \": \" attr(href) \"\";\n    margin-left: 1em;\n  }\n  #sidebar .about-me .social-media div a.email:after {\n    content: \" \" attr(href) \"\";\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"] {\n    text-decoration: none;\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n    content: attr(href);\n    text-decoration: underline;\n    display: block;\n  }\n  #sidebar .guestbook a[href]:after,\n  #sidebar .new a[href]:after,\n  #sidebar .comments a[href]:after {\n    content: \"\";\n  }\n  #sidebar .guestbook,\n  #sidebar .comments,\n  #sidebar .new,\n  #sidebar .PopularPosts {\n    display: none;\n  }\n  #sidebar .widget {\n    page-break-inside: avoid;\n  }\n  /**********************************/\n  #content-wrapper {\n    margin-bottom: 0;\n  }\n  /*************************************/\n  #footer .container {\n    padding: 0;\n  }\n  #footer p {\n    text-align: center;\n    width: 100%;\n  }\n  #footer p a:after {\n    content: \" \" attr(href) \"\";\n  }\n  #footer .themexpose {\n    display: none;\n  }\n  /*****************************/\n  a.quickedit {\n    display: none;\n  }\n  a:after {\n    white-space: nowrap;\n  }\n  body > .sumome-share-client-wrapper {\n    display: none;\n  }\n}\n/* @media print { */\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/addthis.less":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/addthis.less ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body .addthis-smartlayers{display:block!important}.at4-thankyou-background .at4lb-inner{display:none!important}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/addthis.less","addthis.less"],"names":[],"mappings":"AACA,0BACE,uBCAF,CDGA,sCACE,sBCDF","file":"addthis.less","sourcesContent":["\nbody .addthis-smartlayers {\n  display: block !important;\n}\n\n.at4-thankyou-background .at4lb-inner {\n  display: none !important;\n}\n\n","body .addthis-smartlayers {\n  display: block !important;\n}\n.at4-thankyou-background .at4lb-inner {\n  display: none !important;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-code.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-code.less ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .entry-content article code{display:block}#main .entry-content article pre>.code-label:first-of-type{display:block;cursor:pointer;user-select:none;font-size:.5rem;border:1px dotted grey;background-color:grey;color:#fff;clear:both;line-height:.7rem;text-align:center;text-indent:0;position:absolute;margin-top:-1.3rem;margin-left:-.9rem;border-radius:4px;margin-bottom:-.7rem;width:fit-content;white-space:nowrap;padding:.2rem}#main .entry-content article pre>.code-label:first-of-type:active{opacity:.7}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article-code.less","article-code.less"],"names":[],"mappings":"AAAA,kCAEI,aCqIJ,CDvIA,2DASI,aAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,UAAA,CAEA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,oBAAA,CACA,iBAAA,CAGA,kBAAA,CACA,aCiIJ,CD/HI,kEACE,UCiIN","file":"article-code.less","sourcesContent":["#main .entry-content article {\n  code {\n    display: block;\n  }\n  \n  //article pre code::before {\n  pre > .code-label:first-of-type {\n    //content: '';\n    //display: none;\n    display: block;\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.5rem;\n    border: 1px dotted gray;\n    background-color: gray;\n    color: white;\n    margin-bottom: 5px;\n    clear: both;\n    line-height: 0.7rem;\n    text-align: center;\n    text-indent: 0;\n    position: absolute;\n    margin-top: -1.3rem;\n    margin-left: -0.9rem;\n    border-radius: 4px;\n    margin-bottom: -0.7rem;\n    width: fit-content;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem;\n    white-space: nowrap;\n    padding: .2rem;\n    \n    &:active {\n      opacity: 0.7;\n    }\n  }\n\n  /*\n  article pre code.javascript::before {\n    content: 'JavaScript';\n    display: block;\n  }\n\n  article pre code.html::before {\n    content: 'HTML';\n    display: block;\n  }\n\n  article pre code.css::before {\n    content: 'CSS';\n    display: block;\n  }\n\n  article pre code.bash::before {\n    content: 'Bash';\n    display: block;\n  }\n\n  article pre code.ini::before {\n    content: 'INI';\n    display: block;\n  }\n\n  article pre code.json::before {\n    content: 'JSON';\n    display: block;\n  }\n\n  article pre code.java::before {\n    content: 'Java';\n    display: block;\n  }\n\n  article pre code.php::before {\n    content: 'PHP';\n    display: block;\n  }\n\n  article pre code.perl::before {\n    content: 'Perl';\n    display: block;\n  }\n\n  article pre code.r::before {\n    content: 'R';\n    display: block;\n  }\n\n  article pre code.sql::before {\n    content: 'SQL';\n    display: block;\n  }\n\n  article pre code.autoit::before {\n    content: 'AutoIT';\n    display: block;\n  }\n\n  article pre code.csharp::before {\n    content: 'C#';\n    display: block;\n  }\n\n  article pre code.cpp::before {\n    content: 'C++';\n    display: block;\n  }\n\n  article pre code.dos::before {\n    content: 'DOS';\n    display: block;\n  }\n\n  article pre code.excel::before {\n    content: 'Excel';\n    display: block;\n  }\n\n  article pre code.markdown::before {\n    content: 'Markdown';\n    display: block;\n  }\n\n  article pre code.nginx::before {\n    content: 'Nginx';\n    display: block;\n  }\n\n  article pre code.python::before {\n    content: 'Python';\n    display: block;\n  }\n\n  article pre code.ruby::before {\n    content: 'Ruby';\n    display: block;\n  }\n\n  article pre code.swift::before {\n    content: 'Swift';\n    display: block;\n  }\n\n  article pre code.typescript::before {\n    content: 'TypeScript';\n    display: block;\n  }\n\n  article pre code.vbnet::before {\n    content: 'VB.Net';\n    display: block;\n  }\n\n  article pre code.vbscript::before {\n    content: 'VBscript';\n    display: block;\n  }\n\n  article pre code.xpath::before {\n    content: 'XQuery, Xpath';\n    display: block;\n  }\n\n  article pre code.matlab::before {\n    content: 'Matlab';\n    display: block;\n  }\n  */\n}","#main .entry-content article {\n  /*\n  article pre code.javascript::before {\n    content: 'JavaScript';\n    display: block;\n  }\n\n  article pre code.html::before {\n    content: 'HTML';\n    display: block;\n  }\n\n  article pre code.css::before {\n    content: 'CSS';\n    display: block;\n  }\n\n  article pre code.bash::before {\n    content: 'Bash';\n    display: block;\n  }\n\n  article pre code.ini::before {\n    content: 'INI';\n    display: block;\n  }\n\n  article pre code.json::before {\n    content: 'JSON';\n    display: block;\n  }\n\n  article pre code.java::before {\n    content: 'Java';\n    display: block;\n  }\n\n  article pre code.php::before {\n    content: 'PHP';\n    display: block;\n  }\n\n  article pre code.perl::before {\n    content: 'Perl';\n    display: block;\n  }\n\n  article pre code.r::before {\n    content: 'R';\n    display: block;\n  }\n\n  article pre code.sql::before {\n    content: 'SQL';\n    display: block;\n  }\n\n  article pre code.autoit::before {\n    content: 'AutoIT';\n    display: block;\n  }\n\n  article pre code.csharp::before {\n    content: 'C#';\n    display: block;\n  }\n\n  article pre code.cpp::before {\n    content: 'C++';\n    display: block;\n  }\n\n  article pre code.dos::before {\n    content: 'DOS';\n    display: block;\n  }\n\n  article pre code.excel::before {\n    content: 'Excel';\n    display: block;\n  }\n\n  article pre code.markdown::before {\n    content: 'Markdown';\n    display: block;\n  }\n\n  article pre code.nginx::before {\n    content: 'Nginx';\n    display: block;\n  }\n\n  article pre code.python::before {\n    content: 'Python';\n    display: block;\n  }\n\n  article pre code.ruby::before {\n    content: 'Ruby';\n    display: block;\n  }\n\n  article pre code.swift::before {\n    content: 'Swift';\n    display: block;\n  }\n\n  article pre code.typescript::before {\n    content: 'TypeScript';\n    display: block;\n  }\n\n  article pre code.vbnet::before {\n    content: 'VB.Net';\n    display: block;\n  }\n\n  article pre code.vbscript::before {\n    content: 'VBscript';\n    display: block;\n  }\n\n  article pre code.xpath::before {\n    content: 'XQuery, Xpath';\n    display: block;\n  }\n\n  article pre code.matlab::before {\n    content: 'Matlab';\n    display: block;\n  }\n  */\n}\n#main .entry-content article code {\n  display: block;\n}\n#main .entry-content article pre > .code-label:first-of-type {\n  display: block;\n  cursor: pointer;\n  user-select: none;\n  font-size: 0.5rem;\n  border: 1px dotted gray;\n  background-color: gray;\n  color: white;\n  margin-bottom: 5px;\n  clear: both;\n  line-height: 0.7rem;\n  text-align: center;\n  text-indent: 0;\n  position: absolute;\n  margin-top: -1.3rem;\n  margin-left: -0.9rem;\n  border-radius: 4px;\n  margin-bottom: -0.7rem;\n  width: fit-content;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  white-space: nowrap;\n  padding: 0.2rem;\n}\n#main .entry-content article pre > .code-label:first-of-type:active {\n  opacity: 0.7;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-footer.less":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-footer.less ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"article-footer.less"}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-iframe.less":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-iframe.less ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media (max-width:1200px){iframe[src^=\"https://docs.google.com/presentation/d/e/\"]{width:100%;height:70vw}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article-iframe.less","article-iframe.less"],"names":[],"mappings":"AAIA,0BACE,yDAEE,UAAA,CACA,WCDF,CACF","file":"article-iframe.less","sourcesContent":["\n\n/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n  iframe[src^=\"https://docs.google.com/presentation/d/e/\"] {\n    /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n    width: 100%;\n    height: calc(100vw * 0.7);\n  }\n}   /* @media (max-widt@media (max-width: 1200px) {*/\n","/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n  iframe[src^=\"https://docs.google.com/presentation/d/e/\"] {\n    /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n    width: 100%;\n    height: calc(100vw * 0.7);\n  }\n}\n/* @media (max-widt@media (max-width: 1200px) {*/\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-meta.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-meta.less ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .entry-content article.article .meta1 .item-control a{margin-right:.5rem;white-space:nowrap;cursor:pointer;user-select:none}#main .entry-content article.article .meta1 .comment-count{white-space:nowrap}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article-meta.less","article-meta.less"],"names":[],"mappings":"AAAA,4DAEI,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBCAJ,CDLA,2DASI,kBCDJ","file":"article-meta.less","sourcesContent":["#main .entry-content article.article .meta1 {\n  .item-control a {\n    margin-right: 0.5rem;\n    white-space: nowrap;\n    cursor: pointer;\n    user-select: none;\n  }\n  \n  .comment-count {\n    white-space: nowrap;\n  }\n}","#main .entry-content article.article .meta1 .item-control a {\n  margin-right: 0.5rem;\n  white-space: nowrap;\n  cursor: pointer;\n  user-select: none;\n}\n#main .entry-content article.article .meta1 .comment-count {\n  white-space: nowrap;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-table.less":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article-table.less ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .entry-content article>table{line-height:100%;border-bottom:1px solid #ddd;margin-left:auto;margin-right:auto}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article-table.less","article-table.less"],"names":[],"mappings":"AAAA,mCACE,gBAAA,CACA,4BAAA,CACA,gBAAA,CACA,iBCCF","file":"article-table.less","sourcesContent":["#main .entry-content article > table {\n  line-height: 100%;\n  border-bottom: 1px solid #ddd;\n  margin-left: auto;\n  margin-right: auto;\n}","#main .entry-content article > table {\n  line-height: 100%;\n  border-bottom: 1px solid #ddd;\n  margin-left: auto;\n  margin-right: auto;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article.less":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/article.less ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .entry-content{padding:30px 30px 15px}#main .entry-content article.article{text-align:justify}#main .entry-content article.article li{word-wrap:break-word}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article.less","article.less"],"names":[],"mappings":"AAAA,qBAEE,sBCCF,CDEA,qCACE,kBCAF,CDDA,wCAMI,oBCFJ","file":"article.less","sourcesContent":["#main .entry-content {\n  padding: 30px;\n  padding-bottom: 15px;\n}\n\n#main .entry-content article.article {\n  text-align: justify;\n\n  //background-color: rgba(0,255,0,0.7) !important;  // 20191001 test\n\n  li {\n    word-wrap: break-word;\n  }\n}","#main .entry-content {\n  padding: 30px;\n  padding-bottom: 15px;\n}\n#main .entry-content article.article {\n  text-align: justify;\n}\n#main .entry-content article.article li {\n  word-wrap: break-word;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/backlinks.less":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/backlinks.less ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#backlinks-container h4{float:left;line-height:1rem;margin-right:25px;cursor:default}#backlinks-container h4:after{bottom:10px;left:inherit;right:-20px}#backlinks-container a[href]{line-height:2.4rem}#backlinks-container p{margin-bottom:0}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/backlinks.less","backlinks.less"],"names":[],"mappings":"AAAA,wBAEI,UAAA,CACA,gBAAA,CACA,iBAAA,CACA,cCAJ,CDLA,8BAQI,WAAA,CACA,YAAA,CACA,WCAJ,CDVA,6BAcI,kBCDJ,CDbA,uBAkBI,eCFJ","file":"backlinks.less","sourcesContent":["#backlinks-container {\n  h4 {\n    float: left;\n    line-height: 1rem;\n    margin-right: 25px;\n    cursor: default;\n  }\n  h4:after {\n    bottom: 10px;\n    left: inherit;\n    right: -20px;\n  }\n\n  a[href] {\n    line-height: 2.4rem;\n  }\n\n  p {\n    margin-bottom: 0;\n  }\n} ","#backlinks-container h4 {\n  float: left;\n  line-height: 1rem;\n  margin-right: 25px;\n  cursor: default;\n}\n#backlinks-container h4:after {\n  bottom: 10px;\n  left: inherit;\n  right: -20px;\n}\n#backlinks-container a[href] {\n  line-height: 2.4rem;\n}\n#backlinks-container p {\n  margin-bottom: 0;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/go-top.less":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/go-top.less ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#footer .go-top .goto-comment{display:block!important}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/go-top.less","go-top.less"],"names":[],"mappings":"AAAA,8BAII,uBCFJ","file":"go-top.less","sourcesContent":["#footer .go-top {\n  //bottom: calc(50px + 1em);\n\n  .goto-comment {\n    display: block !important;\n  }\n}","#footer .go-top .goto-comment {\n  display: block !important;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/image.less":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/image.less ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main article img{max-width:calc(100% - 2rem)}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type,#main article p:first-of-type>a[href$=\".png\"]:first-of-type,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type{margin-left:-2em;display:block;text-align:center}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type img,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type img,#main article p:first-of-type>a[href$=\".png\"]:first-of-type img,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type img,#main article p:first-of-type>a[href$=-no]:first-of-type img,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type img{box-shadow:4px 4px 2px grey;margin-right:auto;margin-bottom:auto}#main article p:not(:first-of-type)>a[href$=\".gif\"] img,#main article p:not(:first-of-type)>a[href$=\".jpg\"] img,#main article p:not(:first-of-type)>a[href$=\".png\"] img,#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"] img{box-shadow:4px 4px 2px grey;margin-right:5px;margin-bottom:5px}@media (max-width:767px){#main article p:not(:first-of-type)>a[href$=\".gif\"],#main article p:not(:first-of-type)>a[href$=\".jpg\"],#main article p:not(:first-of-type)>a[href$=\".png\"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"]{display:block;text-align:center;margin-left:-1rem;margin-right:1rem}}@media (max-width:480px){#main article img{max-width:100%}#main article p>a[href]>img{display:block;text-align:center;text-indent:0!important}#main article p:first-of-type>a[href$=\".gif\"]:first-of-type,#main article p:first-of-type>a[href$=\".jpg\"]:first-of-type,#main article p:first-of-type>a[href$=\".png\"]:first-of-type,#main article p:first-of-type>a[href$=\".png?puli_gphoto=1\"]:first-of-type,#main article p:first-of-type>a[href$=-no]:first-of-type,#main article p:first-of-type>a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type{margin-left:0!important}#main article p:not(:first-of-type)>a[href$=\".gif\"],#main article p:not(:first-of-type)>a[href$=\".jpg\"],#main article p:not(:first-of-type)>a[href$=\".png\"],#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"],#main article p:not(:first-of-type)>a[href$=-no],#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"]{margin-left:1rem;text-indent:-.5em}#main article p:not(:first-of-type)>a[href$=\".gif\"] img,#main article p:not(:first-of-type)>a[href$=\".jpg\"] img,#main article p:not(:first-of-type)>a[href$=\".png\"] img,#main article p:not(:first-of-type)>a[href$=\".png?puli_gphoto=1\"] img,#main article p:not(:first-of-type)>a[href$=-no] img,#main article p:not(:first-of-type)>a[href|=\"https://lh3.googleusercontent.com/\"] img{width:100%}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/image.less","image.less"],"names":[],"mappings":"AAIA,kBAEI,2BCUJ,CDZA,iZAWI,gBAAA,CACA,aAAA,CACA,iBCSJ,CDtBA,yaAiBM,2BAAA,CACA,iBAAA,CACA,kBCaN,CDhCA,yXAgCM,2BAAA,CACA,gBAAA,CACA,iBCQN,CDwBA,yBAyBI,+RAME,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBCdJ,CACF,CDoBA,yBACE,kBACE,cClBF,CDqBA,4BAEI,aAAA,CACA,iBAAA,CACA,uBCnBJ,CDeA,iZAcI,uBCrBJ,CDOA,iWAwBI,gBAAA,CACA,iBCtBJ,CDHA,yXA4BM,UChBN,CACF","file":"image.less","sourcesContent":["/**\n * @author Pulipuli Chen 20190301\n * 修正圖片寬度的問題\n */\n#main article {\n  img {\n    max-width: calc(100% - 2rem);\n  }\n\n  p:first-of-type > a[href$=\".png\"]:first-of-type,\n    p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n    p:first-of-type > a[href$=\".gif\"]:first-of-type,\n    p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n    p:first-of-type > a[href$=\"-no\"]:first-of-type,\n    p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n    margin-left: -2em;\n    display: block;\n    text-align:center;\n    \n    img {\n      //box-shadow: 0px 0px 0px grey;\n      box-shadow: 4px 4px 2px grey;\n      margin-right: auto;\n      margin-bottom: auto;\n      //margin-left: -1rem;\n    }\n  }\n\n  p:not(:first-of-type) > a[href$=\".png\"],\n  p:not(:first-of-type) > a[href$=\".jpg\"],\n  p:not(:first-of-type) > a[href$=\".gif\"],\n  p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n  p:not(:first-of-type) > a[href$=\"-no\"],\n  p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] {\n\n    img {\n      box-shadow: 4px 4px 2px grey;\n      margin-right: 5px;\n      margin-bottom: 5px;\n    }\n  }\n\n\n  /*\n  p:first-of-type a[href$=\"-no\"] img:first-of-type {\n    box-shadow: 0px 0px 0px grey;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: -1rem;\n  }\n  */\n} \n\n// --------------------------------------------------------------\n\n@media (min-width: 767px) {\n  #main article {\n    p:first-of-type > a[href$=\".png\"]:first-of-type,\n      p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n      p:first-of-type > a[href$=\".gif\"]:first-of-type,\n      p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n      p:first-of-type > a[href$=\"-no\"]:first-of-type {\n      /*margin-left: -2em;\n      margin-right: 2em;*/\n    }\n  } \n}\n\n// ------------------------------------------------\n\n@media (max-width: 767px) {\n    /*\n    #main .entry-content > article > p:first-of-type > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\"-no\"]:first-of-type{\n        margin-left: -2em;\n        //width: 100%;\n        //height: auto;\n        //max-height: 200px;\n        display: block;\n        text-align:center;\n    }\n    */\n    \n    /*\n    #main .entry-content a[href$=\".png\"]:first-of-type img,\n    #main .entry-content a[href$=\".jpg\"]:first-of-type img,\n    #main .entry-content a[href$=\".gif\"]:first-of-type img,\n    #main .entry-content a[href$=\"-no\"]:first-of-type img{\n        width: 80%;\n        height: auto;\n        // max-height: 500px;\n    }\n    */\n    #main article {\n    p:not(:first-of-type) > a[href$=\".png\"],\n      p:not(:first-of-type) > a[href$=\".jpg\"],\n      p:not(:first-of-type) > a[href$=\".gif\"],\n      p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n      p:not(:first-of-type) > a[href$=\"-no\"] {\n      display: block;\n      text-align: center;\n      margin-left: -1rem;\n      margin-right: 1rem;\n    }\n  } \n}\n\n// --------------------------------------------------------------\n\n@media (max-width: 480px) {\n  #main article img {\n    max-width: 100%;\n  }\n\n  #main article {\n    p > a[href] > img {\n      display: block;\n      text-align: center;\n      text-indent: 0 !important;\n      /*margin-left: -1rem;*/\n    }\n\n    p:first-of-type > a[href$=\".png\"]:first-of-type,\n      p:first-of-type > a[href$=\".jpg\"]:first-of-type, \n      p:first-of-type > a[href$=\".gif\"]:first-of-type, \n      p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n      p:first-of-type > a[href$=\"-no\"]:first-of-type, \n      p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n      margin-left: 0 !important;\n    }\n    \n    p:not(:first-of-type) > a[href$=\".png\"],\n    p:not(:first-of-type) > a[href$=\".jpg\"],\n    p:not(:first-of-type) > a[href$=\".gif\"],\n    p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n    p:not(:first-of-type) > a[href$=\"-no\"],\n    p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] {\n      /*margin-left: 2rem;*/\n      margin-left: 1rem;\n      text-indent: -0.5em;\n      \n      img {\n        width: 100%;\n        /*max-height: 500px;*/\n      }\n        \n    }\n  } \n}","/**\n * @author Pulipuli Chen 20190301\n * 修正圖片寬度的問題\n */\n#main article {\n  /*\n  p:first-of-type a[href$=\"-no\"] img:first-of-type {\n    box-shadow: 0px 0px 0px grey;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: -1rem;\n  }\n  */\n}\n#main article img {\n  max-width: calc(100% - 2rem);\n}\n#main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n#main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n#main article p:first-of-type > a[href$=\"-no\"]:first-of-type,\n#main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n  margin-left: -2em;\n  display: block;\n  text-align: center;\n}\n#main article p:first-of-type > a[href$=\".png\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".jpg\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".gif\"]:first-of-type img,\n#main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\"-no\"]:first-of-type img,\n#main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: auto;\n  margin-bottom: auto;\n}\n#main article p:not(:first-of-type) > a[href$=\".png\"] img,\n#main article p:not(:first-of-type) > a[href$=\".jpg\"] img,\n#main article p:not(:first-of-type) > a[href$=\".gif\"] img,\n#main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"] img,\n#main article p:not(:first-of-type) > a[href$=\"-no\"] img,\n#main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] img {\n  box-shadow: 4px 4px 2px grey;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n@media (min-width: 767px) {\n  #main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n  #main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\"-no\"]:first-of-type {\n    /*margin-left: -2em;\n      margin-right: 2em;*/\n  }\n}\n@media (max-width: 767px) {\n  /*\n    #main .entry-content > article > p:first-of-type > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\"-no\"]:first-of-type{\n        margin-left: -2em;\n        //width: 100%;\n        //height: auto;\n        //max-height: 200px;\n        display: block;\n        text-align:center;\n    }\n    */\n  /*\n    #main .entry-content a[href$=\".png\"]:first-of-type img,\n    #main .entry-content a[href$=\".jpg\"]:first-of-type img,\n    #main .entry-content a[href$=\".gif\"]:first-of-type img,\n    #main .entry-content a[href$=\"-no\"]:first-of-type img{\n        width: 80%;\n        height: auto;\n        // max-height: 500px;\n    }\n    */\n  #main article p:not(:first-of-type) > a[href$=\".png\"],\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"],\n  #main article p:not(:first-of-type) > a[href$=\".gif\"],\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n  #main article p:not(:first-of-type) > a[href$=\"-no\"] {\n    display: block;\n    text-align: center;\n    margin-left: -1rem;\n    margin-right: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  #main article img {\n    max-width: 100%;\n  }\n  #main article p > a[href] > img {\n    display: block;\n    text-align: center;\n    text-indent: 0 !important;\n    /*margin-left: -1rem;*/\n  }\n  #main article p:first-of-type > a[href$=\".png\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".gif\"]:first-of-type,\n  #main article p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\"-no\"]:first-of-type,\n  #main article p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n    margin-left: 0 !important;\n  }\n  #main article p:not(:first-of-type) > a[href$=\".png\"],\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"],\n  #main article p:not(:first-of-type) > a[href$=\".gif\"],\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"],\n  #main article p:not(:first-of-type) > a[href$=\"-no\"],\n  #main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] {\n    /*margin-left: 2rem;*/\n    margin-left: 1rem;\n    text-indent: -0.5em;\n  }\n  #main article p:not(:first-of-type) > a[href$=\".png\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".jpg\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".gif\"] img,\n  #main article p:not(:first-of-type) > a[href|=\"https://lh3.googleusercontent.com/\"] img,\n  #main article p:not(:first-of-type) > a[href$=\"-no\"] img,\n  #main article p:not(:first-of-type) > a[href$=\".png?puli_gphoto=1\"] img {\n    width: 100%;\n    /*max-height: 500px;*/\n  }\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/sidebar.less":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/sidebar.less ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#sidebar .widget.about-me .link-buttons .subscribe{display:none}@media (min-width:767px){#side-bar{width:100%}#sidebar>div.widget .widget-content{min-height:360px;max-height:360px;overflow-y:auto;margin-bottom:0}.sidebar .widget{margin-bottom:0}#content{width:100%!important;max-width:1170px}}#side-bar{margin-left:30px}@media (min-width:767px){#side-bar{max-width:1170px}}@media (max-width:1200px){#side-bar{margin-left:20px}}@media (min-width:979px) and (max-width:1200px){#sidebar>div.widget{width:calc(33% - .5em);margin-right:1em}}@media (min-width:767px) and (max-width:979px){#content-wrapper #side-bar{margin-left:0}#content-wrapper #side-bar #sidebar>.widget:not(.two-col){display:none}#content-wrapper #side-bar #sidebar>.widget.two-col{margin-bottom:18px;width:calc(50% - .5em);float:left}#content-wrapper #side-bar #sidebar>.widget.two-col-1,#content-wrapper #side-bar #sidebar>.widget.two-col-3{margin-right:16px}#content-wrapper #side-bar #sidebar>.widget.two-col-2,#content-wrapper #side-bar #sidebar>.widget.two-col-4{margin-right:0;clear:none}}@media (min-width:979px){#sidebar>.widget:not(.three-col){display:none}#sidebar>.widget.three-col{margin-bottom:18px;width:calc(33% - 9px);float:left;margin-right:18px;clear:none}#sidebar>.widget.three-col:nth-of-type(3n){margin-right:0}#sidebar>.comments{display:block}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/sidebar.less","sidebar.less"],"names":[],"mappings":"AAAA,mDACE,YCCF,CDOA,yBACI,UAEI,UCDN,CDOE,oCACI,gBAAA,CACA,gBAAA,CACA,eAAA,CACA,eCLN,CDQE,iBACI,eCNN,CDSE,SACI,oBAAA,CACA,gBCPN,CAMF,CDWA,UACI,gBCTJ,CDYA,yBACI,UACI,gBCVN,CACF,CDaA,0BACI,UACI,gBCXN,CACF,CDcA,gDACI,oBACI,sBAAA,CACA,gBCZN,CACF,CDeA,+CACE,2BACE,aCbF,CDgBI,0DACE,YCNN,CDSI,oDACE,kBAAA,CACA,sBAAA,CACA,UCLN,CDaI,4GAEE,iBCVN,CDiBI,4GAGE,cAAA,CACA,UCfN,CACF,CDoBA,yBAOE,iCACE,YCnBF,CDsBA,2BACE,kBAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,UClBF,CDuBA,2CAEE,cCrBF,CDwBA,mBACE,aCtBF,CACF","file":"sidebar.less","sourcesContent":["#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n  #content-wrapper #side-bar {\n    margin-left: 0;\n    \n    #sidebar {\n      &> .widget:not(.two-col) {\n        display: none;\n      }\n\n      &> .widget.two-col {\n        margin-bottom: 18px;\n        width: calc(50% - 0.5em);\n        float: left;\n        /*width: calc(50% - 0.5em);*/\n        /*border: 1px solid red;*/\n      }\n\n      /**\n       * 1 3 5\n       */\n      &> .widget.two-col-1,\n      &> .widget.two-col-3 {\n        margin-right: 16px;\n        /*clear: both;*/\n      }\n\n      /**\n       * 2 4 6\n       */\n      &> .widget.two-col-2,\n      &> .widget.two-col-4 {\n        /*border: 3px solid red;*/\n        margin-right: 0;\n        clear: none;\n      }\n    } // #sidebar {\n  }\n} \n\n@media (min-width:979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  \n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }    \n\n  #sidebar > .comments {\n    display: block;\n  }\n}","#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n@media (min-width: 767px) {\n  #side-bar {\n    /*display: none;*/\n    width: 100%;\n  }\n  #sidebar > div.widget .widget-content {\n    min-height: 360px;\n    max-height: 360px;\n    overflow-y: auto;\n    margin-bottom: 0;\n  }\n  .sidebar .widget {\n    margin-bottom: 0;\n  }\n  #content {\n    width: 100% !important;\n    max-width: 1170px;\n  }\n  /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n#side-bar {\n  margin-left: 30px;\n}\n@media (min-width: 767px) {\n  #side-bar {\n    max-width: 1170px;\n  }\n}\n@media (max-width: 1200px) {\n  #side-bar {\n    margin-left: 20px;\n  }\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  #sidebar > div.widget {\n    width: calc(33% - 0.5em);\n    margin-right: 1em;\n  }\n}\n@media (min-width: 767px) and (max-width: 979px) {\n  #content-wrapper #side-bar {\n    margin-left: 0;\n  }\n  #content-wrapper #side-bar #sidebar {\n    /**\n       * 1 3 5\n       */\n    /**\n       * 2 4 6\n       */\n  }\n  #content-wrapper #side-bar #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  #content-wrapper #side-bar #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  #content-wrapper #side-bar #sidebar > .widget.two-col-1,\n  #content-wrapper #side-bar #sidebar > .widget.two-col-3 {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  #content-wrapper #side-bar #sidebar > .widget.two-col-2,\n  #content-wrapper #side-bar #sidebar > .widget.two-col-4 {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n}\n@media (min-width: 979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }\n  #sidebar > .comments {\n    display: block;\n  }\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/style-item.less":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style/style-item.less ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media (min-width:767px){#main .author-meta{max-width:calc(100% - 300px)}}#main .post-iframe{height:90vh}#main .entry-meta .creative-commons,#main .entry-meta .introduction{font-size:.8em;line-height:1.5em;margin-left:74px}#main .entry-meta .bl_popover{display:inline-block;margin-left:1em}#main .entry-meta .creative-commons img{border-width:0;margin-right:0;padding-top:0}#main .entry-meta img.avatar-author{float:left;margin-top:8px}#main .entry-meta h4{line-height:1em}#main .entry-meta .creative-commons .author,#main .entry-meta .creative-commons .title{text-decoration:underline;color:#bd8242;font-weight:700}@media (max-width:480px){#footer .management{margin-bottom:70px}body>.sumome-stylebufferbottom-shim{display:none}#main .post h4{font-size:1.3rem;line-height:1.5rem}#main .post h5,#main .post h6{font-size:1rem;line-height:1.5rem}.entry-content>article>p{text-indent:1em}.entry-content>article>p:not(:first-of-type)>a.lightbox-group{display:inline-block;text-indent:-1em;text-align:center;width:100%}.entry-content li,.entry-content ul{margin-top:0!important;margin-bottom:0!important}}@media (max-width:767px){#main .entry-container .entry-content{padding-bottom:5px;padding-top:1em}#main .entry-meta{border-top-width:1px}#main .entry-meta .author-meta{padding-left:0;text-align:center}#main .entry-meta .avatar-author,#main .entry-meta .bl_popover{display:none}#main .entry-meta .avatar-author{display:block;margin-top:10px}#main .entry-meta .creative-commons{margin-left:0!important;line-height:1.5em!important}#main .entry-meta .creative-commons a.img{display:block;margin-top:1.5em}#main .entry-meta .creative-commons img{float:none;margin-left:0}.entry-meta img{margin-right:0}.entry-meta .author-meta h4:after{content:attr(data-content);display:block;font-weight:400;line-height:1.5em}.entry-meta .popover{display:none!important}.entry-meta{padding-bottom:0;padding-top:0}.share-story-container ul{margin-top:0}#side-bar{margin-left:0}.entry-meta .author-meta{margin-bottom:5px}}#main div.comments#disqus_thread{min-height:380px}#main div.comments#comments{min-height:378px}#main .entry-content>article p>code{text-indent:0}#main .entry-content>article pre{font-size:1em}#main .entry-content>article code{font-size:.8em;line-height:1.15em}.entry-content .puli-toc{padding:.5em;background-color:#2d2d2d;color:#fff!important;display:inline-block}.entry-content .puli-toc a,.entry-content .puli-toc li{color:#fff!important}@media (max-width:480px){#masthead #header{max-width:calc(100% - 130px)}.entry-content,.entry-content li{line-height:150%}.entry-content article h1 div.meta1 p small span{white-space:nowrap}#comment-holder li.comment div.avatar-image-container{position:relative;z-index:1;margin:10px}#comment-holder li.comment div.comment-block{margin-left:0}#comment-holder li.comment div.comment-block>*{margin-left:60px}#comment-holder li.comment div.comment-replies{margin-left:0}#main .post h1 .meta1{line-height:1rem}}#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"]{background-image:url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);background-size:cover}.entry-meta.clearfix .share-story-container .share-story.about,.entry-meta.clearfix .share-story-container .share-story.about li a{display:block}@media (max-width:767px){.entry-meta.clearfix .share-story-container .share-story.about li a{line-height:50px;padding:0;margin-bottom:10px}}@media (min-width:767px){.pull-right.share-story-container{margin-top:0}.entry-meta.clearfix .share-story-container .share-story.about li{width:auto}.entry-meta.clearfix .share-story-container .share-story.about li a{background-color:#d6d7d6;border-radius:6px;line-height:32px;padding:0 10px;margin-top:5px;font-size:.8em}.entry-meta.clearfix .share-story-container .share-story.about li a:hover{color:#fff;background-color:#333}}.author-meta .popover{font-weight:400;font-size:.8rem}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/style-item.less","style-item.less"],"names":[],"mappings":"AAGA,yBACE,mBACE,4BCDF,CACF,CDKA,mBACE,WCHF,CDMA,oEAEE,cAAA,CACA,iBAAA,CACA,gBCJF,CDMA,8BACE,oBAAA,CACA,eCJF,CDOA,wCACE,cAAA,CAEA,cAAA,CACA,aCLF,CDQA,oCACE,UAAA,CACA,cCNF,CDSA,qBACE,eCPF,CDUA,uFAEE,yBAAA,CACA,aAAA,CACA,eCRF,CDWA,yBACE,oBACE,kBCTF,CDYA,oCACE,YCVF,CDaA,eACE,gBAAA,CACA,kBCXF,CDcA,8BAEE,cAAA,CACA,kBCZF,CDeA,yBACE,eCbF,CDgBA,8DACE,oBAAA,CACA,gBAAA,CACA,iBAAA,CACA,UCdF,CDqBA,oCACE,sBAAA,CACA,yBCfF,CACF,CDkBA,yBACE,sCACE,kBAAA,CACA,eCfF,CDkBA,kBACE,oBChBF,CDmBA,+BACE,cAAA,CACA,iBChBF,CDmBA,+DAEE,YCjBF,CDoBA,iCACE,aAAA,CACA,eClBF,CDqBA,oCACE,uBAAA,CACA,2BCnBF,CDqBA,0CACE,aAAA,CACA,gBCnBF,CDqBA,wCACE,UAAA,CACA,aCnBF,CDsBA,gBACE,cCpBF,CDuBA,kCACE,0BAAA,CACA,aAAA,CACA,eAAA,CACA,iBCrBF,CDwBA,qBACE,sBCtBF,CDyBA,YACE,gBAAA,CACA,aCvBF,CD0BA,0BACE,YCxBF,CD2BA,UACE,aCzBF,CD6BA,yBACE,iBC1BF,CACF,CD8BA,iCACE,gBC1BF,CD6BA,4BACE,gBC3BF,CDgCA,oCACE,aC5BF,CD+BA,iCACE,aC7BF,CDgCA,kCACE,cAAA,CACA,kBC9BF,CDmCA,yBAEE,YAAA,CACA,wBAAA,CACA,oBAAA,CACA,oBC/BF,CDkCA,uDAEE,oBChCF,CDqCA,yBACE,kBACE,4BCjCF,CDqCA,iCAEE,gBCnCF,CDsCA,iDACE,kBCpCF,CDuCA,sDACE,iBAAA,CACA,SAAA,CACA,WCrCF,CDwCA,6CACE,aCtCF,CDyCA,+CACE,gBCvCF,CD0CA,+CACE,aCxCF,CD4CA,sBACE,gBCzCF,CACF,CD4CA,mGAEE,wFAAA,CACA,qBC1CF,CDmDA,mIACE,aC5CF,CD+CA,yBACE,oEACE,gBAAA,CACA,SAAA,CACA,kBC7CF,CACF,CDgDA,yBACE,kCACE,YC9CF,CDiDA,kEACE,UC/CF,CDkDA,oEACE,wBAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,cAAA,CACA,cChDF,CDmDA,0EACE,UAAA,CACA,qBCjDF,CACF,CDoDA,sBACE,eAAA,CACA,eClDF","file":"style-item.less","sourcesContent":["\n/*************************************/\n\n@media (min-width:767px) {\n  #main .author-meta {\n    max-width: calc(100% - 300px);\n  }\n\n}\n\n#main .post-iframe {\n  height: 90vh;\n}\n\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n  font-size: 0.8em;\n  line-height: 1.5em;\n  margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n  display: inline-block;\n  margin-left: 1em;\n}\n\n#main .entry-meta .creative-commons img {\n  border-width: 0;\n  /*float:left;*/\n  margin-right: 0;\n  padding-top: 0;\n}\n\n#main .entry-meta img.avatar-author {\n  float:left;\n  margin-top: 8px;\n}\n\n#main .entry-meta h4 {\n  line-height: 1em;\n}\n\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n  text-decoration: underline;\n  color: #BD8242;\n  font-weight: bold;\n}\n\n@media (max-width: 480px) {\n  #footer .management {\n    margin-bottom: 70px;\n  }\n\n  body > .sumome-stylebufferbottom-shim {\n    display: none;\n  }\n\n  #main .post h4 {\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n  }\n\n  #main .post h5,\n  #main .post h6 {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .entry-content > article > p {\n    text-indent: 1em;\n  }\n\n  .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n    display: inline-block;\n    text-indent: -1em;\n    text-align: center;\n    width: 100%;\n  }\n\n  /*#main .entry-content > article > p > a[href$=\".png\"]:first-of-type img {\n      max-height: 300px;\n  }*/\n\n  .entry-content ul, .entry-content li {\n    margin-top: 0em !important; \n    margin-bottom: 0em !important; \n  }\n}\n/**************************/\n@media (max-width: 767px) {\n  #main .entry-container .entry-content {\n    padding-bottom: 5px;\n    padding-top: 1em;\n  }\n\n  #main .entry-meta {\n    border-top-width: 1px;\n  }\n\n  #main .entry-meta .author-meta {\n    padding-left:0;\n    text-align: center;\n    /*display: none;*/\n  }\n  #main .entry-meta .avatar-author,\n  #main .entry-meta .bl_popover {\n    display: none;\n  }\n\n  #main .entry-meta .avatar-author {\n    display: block;\n    margin-top: 10px;\n  }\n\n  #main .entry-meta .creative-commons {\n    margin-left: 0 !important;\n    line-height: 1.5em !important;\n  }\n  #main .entry-meta .creative-commons a.img {\n    display: block;\n    margin-top: 1.5em;\n  }\n  #main .entry-meta .creative-commons img {\n    float: none;\n    margin-left: 0;\n  }\n\n  .entry-meta img {\n    margin-right:0;\n  }\n\n  .entry-meta .author-meta h4:after {\n    content: attr(data-content);\n    display:block;\n    font-weight: normal;\n    line-height: 1.5em;\n  }\n\n  .entry-meta .popover {\n    display:none !important;\n  }\n\n  .entry-meta {\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n\n  .share-story-container ul {\n    margin-top:0;\n  }\n\n  #side-bar {\n    margin-left:0;\n  }\n\n  /* 20161118 */\n  .entry-meta .author-meta {\n    margin-bottom: 5px;\n  }\n}\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n  min-height: 380px;\n}\n\n#main div.comments#comments {\n  min-height: 378px;\n}\n\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n  text-indent: 0;\n}\n\n#main .entry-content > article pre {\n  font-size: 1em;\n}\n\n#main .entry-content > article code {\n  font-size: 0.8em;\n  line-height: 1.15em;\n}\n\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n  /*border: 3px solid #CE8A42;*/\n  padding: 0.5em;\n  background-color: #2d2d2d;\n  color: white !important;\n  display: inline-block;\n}\n\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n  color: white !important;\n}\n\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 480px) {\n  #masthead #header {\n    max-width: calc(100% - 130px);\n  }\n\n\n  .entry-content,\n  .entry-content li {\n    line-height: 150%;\n  }\n\n  .entry-content article h1 div.meta1 p small span {\n    white-space: nowrap;\n  }\n\n  #comment-holder li.comment div.avatar-image-container {\n    position: relative;\n    z-index: 1;\n    margin: 10px;\n  }\n\n  #comment-holder li.comment div.comment-block {\n    margin-left: 0;\n  }\n\n  #comment-holder li.comment div.comment-block > * {\n    margin-left: 60px;\n  }\n\n  #comment-holder li.comment div.comment-replies {\n    margin-left: 0;\n  }\n\n  /* 20161117 */\n  #main .post h1 .meta1 {\n    line-height: 1rem;\n  }\n}\n\n#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"] {\n  /*Gender_Neutral_User-48*/\n  background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n  background-size: cover;\n}\n\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n  display: block;\n}\n\n.entry-meta.clearfix .share-story-container .share-story.about li a  {\n  display: block;\n}\n\n@media (max-width: 767px) {\n  .entry-meta.clearfix .share-story-container .share-story.about li a  {\n    line-height: 50px;\n    padding: 0;\n    margin-bottom: 10px;\n  }\n}\n\n@media (min-width: 767px) {\n  .pull-right.share-story-container {\n    margin-top: 0;\n  }\n\n  .entry-meta.clearfix .share-story-container .share-story.about li {\n    width: auto;\n  }\n\n  .entry-meta.clearfix .share-story-container .share-story.about li a {\n    background-color: #D6D7D6;\n    border-radius: 6px;\n    line-height: 32px;\n    padding: 0 10px;\n    margin-top: 5px;\n    font-size: 0.8em;\n  }\n\n  .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n    color:white;\n    background-color: #333;\n  }\n}\n\n.author-meta .popover {\n  font-weight: normal;\n  font-size: 0.8rem;\n}\n\n","/*************************************/\n@media (min-width: 767px) {\n  #main .author-meta {\n    max-width: calc(100% - 300px);\n  }\n}\n#main .post-iframe {\n  height: 90vh;\n}\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n  font-size: 0.8em;\n  line-height: 1.5em;\n  margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n  display: inline-block;\n  margin-left: 1em;\n}\n#main .entry-meta .creative-commons img {\n  border-width: 0;\n  /*float:left;*/\n  margin-right: 0;\n  padding-top: 0;\n}\n#main .entry-meta img.avatar-author {\n  float: left;\n  margin-top: 8px;\n}\n#main .entry-meta h4 {\n  line-height: 1em;\n}\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n  text-decoration: underline;\n  color: #BD8242;\n  font-weight: bold;\n}\n@media (max-width: 480px) {\n  #footer .management {\n    margin-bottom: 70px;\n  }\n  body > .sumome-stylebufferbottom-shim {\n    display: none;\n  }\n  #main .post h4 {\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n  }\n  #main .post h5,\n  #main .post h6 {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .entry-content > article > p {\n    text-indent: 1em;\n  }\n  .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n    display: inline-block;\n    text-indent: -1em;\n    text-align: center;\n    width: 100%;\n  }\n  /*#main .entry-content > article > p > a[href$=\".png\"]:first-of-type img {\n      max-height: 300px;\n  }*/\n  .entry-content ul,\n  .entry-content li {\n    margin-top: 0em !important;\n    margin-bottom: 0em !important;\n  }\n}\n/**************************/\n@media (max-width: 767px) {\n  #main .entry-container .entry-content {\n    padding-bottom: 5px;\n    padding-top: 1em;\n  }\n  #main .entry-meta {\n    border-top-width: 1px;\n  }\n  #main .entry-meta .author-meta {\n    padding-left: 0;\n    text-align: center;\n    /*display: none;*/\n  }\n  #main .entry-meta .avatar-author,\n  #main .entry-meta .bl_popover {\n    display: none;\n  }\n  #main .entry-meta .avatar-author {\n    display: block;\n    margin-top: 10px;\n  }\n  #main .entry-meta .creative-commons {\n    margin-left: 0 !important;\n    line-height: 1.5em !important;\n  }\n  #main .entry-meta .creative-commons a.img {\n    display: block;\n    margin-top: 1.5em;\n  }\n  #main .entry-meta .creative-commons img {\n    float: none;\n    margin-left: 0;\n  }\n  .entry-meta img {\n    margin-right: 0;\n  }\n  .entry-meta .author-meta h4:after {\n    content: attr(data-content);\n    display: block;\n    font-weight: normal;\n    line-height: 1.5em;\n  }\n  .entry-meta .popover {\n    display: none !important;\n  }\n  .entry-meta {\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n  .share-story-container ul {\n    margin-top: 0;\n  }\n  #side-bar {\n    margin-left: 0;\n  }\n  /* 20161118 */\n  .entry-meta .author-meta {\n    margin-bottom: 5px;\n  }\n}\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n  min-height: 380px;\n}\n#main div.comments#comments {\n  min-height: 378px;\n}\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n  text-indent: 0;\n}\n#main .entry-content > article pre {\n  font-size: 1em;\n}\n#main .entry-content > article code {\n  font-size: 0.8em;\n  line-height: 1.15em;\n}\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n  /*border: 3px solid #CE8A42;*/\n  padding: 0.5em;\n  background-color: #2d2d2d;\n  color: white !important;\n  display: inline-block;\n}\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n  color: white !important;\n}\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 480px) {\n  #masthead #header {\n    max-width: calc(100% - 130px);\n  }\n  .entry-content,\n  .entry-content li {\n    line-height: 150%;\n  }\n  .entry-content article h1 div.meta1 p small span {\n    white-space: nowrap;\n  }\n  #comment-holder li.comment div.avatar-image-container {\n    position: relative;\n    z-index: 1;\n    margin: 10px;\n  }\n  #comment-holder li.comment div.comment-block {\n    margin-left: 0;\n  }\n  #comment-holder li.comment div.comment-block > * {\n    margin-left: 60px;\n  }\n  #comment-holder li.comment div.comment-replies {\n    margin-left: 0;\n  }\n  /* 20161117 */\n  #main .post h1 .meta1 {\n    line-height: 1rem;\n  }\n}\n#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"] {\n  /*Gender_Neutral_User-48*/\n  background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n  background-size: cover;\n}\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n  display: block;\n}\n.entry-meta.clearfix .share-story-container .share-story.about li a {\n  display: block;\n}\n@media (max-width: 767px) {\n  .entry-meta.clearfix .share-story-container .share-story.about li a {\n    line-height: 50px;\n    padding: 0;\n    margin-bottom: 10px;\n  }\n}\n@media (min-width: 767px) {\n  .pull-right.share-story-container {\n    margin-top: 0;\n  }\n  .entry-meta.clearfix .share-story-container .share-story.about li {\n    width: auto;\n  }\n  .entry-meta.clearfix .share-story-container .share-story.about li a {\n    background-color: #D6D7D6;\n    border-radius: 6px;\n    line-height: 32px;\n    padding: 0 10px;\n    margin-top: 5px;\n    font-size: 0.8em;\n  }\n  .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n    color: white;\n    background-color: #333;\n  }\n}\n.author-meta .popover {\n  font-weight: normal;\n  font-size: 0.8rem;\n}\n"]}]);



/***/ })

/******/ });
//# sourceMappingURL=item-header.js.map