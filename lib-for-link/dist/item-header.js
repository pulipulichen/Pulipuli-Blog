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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./style/article.less */ "./lib-for-link/src/item-header/style/article.less")
__webpack_require__(/*! ./style/go-top.less */ "./lib-for-link/src/item-header/style/go-top.less")
__webpack_require__(/*! ./style/image.less */ "./lib-for-link/src/item-header/style/image.less")
__webpack_require__(/*! ./style/backlinks.less */ "./lib-for-link/src/item-header/style/backlinks.less")
__webpack_require__(/*! ./style/sidebar.less */ "./lib-for-link/src/item-header/style/sidebar.less")
__webpack_require__(/*! ./style/style-item.less */ "./lib-for-link/src/item-header/style/style-item.less")
__webpack_require__(/*! ./script/script-item.js */ "./lib-for-link/src/item-header/script/script-item.js")
__webpack_require__(/*! ./style/article-meta.less */ "./lib-for-link/src/item-header/style/article-meta.less")
__webpack_require__(/*! ./style/article-code.less */ "./lib-for-link/src/item-header/style/article-code.less")
__webpack_require__(/*! ./style/article-table.less */ "./lib-for-link/src/item-header/style/article-table.less")
__webpack_require__(/*! ./style/article-iframe.less */ "./lib-for-link/src/item-header/style/article-iframe.less")
__webpack_require__(/*! ./style/article-footer.less */ "./lib-for-link/src/item-header/style/article-footer.less")
__webpack_require__(/*! ./style/addthis.less */ "./lib-for-link/src/item-header/style/addthis.less")

//require("./style-print/gutenberg.min.less")
__webpack_require__(/*! ./style-print/style-print.less */ "./lib-for-link/src/item-header/style-print/style-print.less")

/***/ }),

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

/***/ "./lib-for-link/src/item-header/style-print/style-print.less":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/item-header/style-print/style-print.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./style-print.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/style-print.less");

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

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/style-print.less":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/item-header/style-print/style-print.less ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media print{#masthead{border-bottom:1px solid grey;position:static!important}#masthead.fixed-nav{position:static!important;height:82px}#masthead.fixed-nav.fixed-nav h1{line-height:30px;margin-top:10px;font-size:30px}#masthead #menu-primary,#masthead .btn-navbar,#masthead .gcse{display:none}#masthead #header-inner{width:100%!important;padding-left:0}#masthead .titlewrapper{float:left}#masthead .title a{text-decoration:none}#masthead .title a:after{content:\"\"}#masthead .descriptionwrapper{width:max-content;padding-left:18em;padding-top:5px}#masthead.fixed-nav.affix #header-inner .descriptionwrapper{display:block}#masthead .descriptionwrapper:after{content:attr(url);display:block;text-decoration:underline}#masthead .description{margin-bottom:0}#content,.row{margin-left:0}#content-wrapper{padding-top:0}#main #backlinks-container,#main .blogger-comment-from-post,#main .read-more,#main .related-posts,#main .share-story-container,#main a[name=more]{display:none}#main .post a[href]:after{content:\" (\" attr(href) \") \";font-size:.8em;font-weight:400;text-decoration:underline!important}#main #comments a[href]:after,#main .post #ArchiveList a.post-count-link:after,#main .post .entry-content .meta1 a:after,#main .post .entry-content a[href$=\".png\"]:after,#main .post a.toggle:after,#main .post a[href=\"javascript:void(0)\"]:after,#main .post a[href^=\"#\"]:after{content:\"\"}#main .post a[href^=\"#\"]{display:none}#main .post .puli-toc a[href^=\"#\"]{display:inline}#main #comments h4:after{border-top-width:0}#main .post:last-of-type{margin-bottom:0}#main .post h4,#main .post h5,#main .post h6{page-break-before:avoid}#main .post table{page-break-inside:avoid}#main .post .entry-content{padding-left:0;padding-right:0}#main .entry-meta{display:none}#main #comments{border-bottom-width:0}#sidebar{margin-left:0}#sidebar .about-me img[align=right]{float:left;margin-left:0;margin-right:.5em}#sidebar .about-me .widget-content{margin-top:.5em}#sidebar .about-me .about-link,#sidebar .about-me .email-subscribe{display:none}#sidebar .about-me a:after{content:\"\"}#sidebar .about-me .social-media div{text-align:left;padding-right:0!important;padding-left:0!important;margin-bottom:0!important}#sidebar .about-me .social-media div .social-button-wrapper{display:block;text-align:left}#sidebar .about-me .social-media div .social-button-wrapper a{display:inline}#sidebar .about-me .social-media div .social-button.android,#sidebar .about-me .social-media div .social-button.chrome,#sidebar .about-me .social-media div .social-button.github,#sidebar .about-me .social-media div .social-button.google-plus,#sidebar .about-me .social-media div .social-button.linkedin,#sidebar .about-me .social-media div .social-button.plurk,#sidebar .about-me .social-media div .social-button.rss,#sidebar .about-me .social-media div .social-button.twitter{display:none}#sidebar .about-me .social-media div a:after{content:\" \" attr(title) \": \" attr(href) \"\";margin-left:1em}#sidebar .about-me .social-media div a.email:after{content:\" \" attr(href) \"\"}#sidebar .popular-posts a[rel=bookmark]{text-decoration:none}#sidebar .popular-posts a[rel=bookmark]:after{content:attr(href);text-decoration:underline;display:block}#sidebar .comments a[href]:after,#sidebar .guestbook a[href]:after,#sidebar .new a[href]:after{content:\"\"}#sidebar .comments,#sidebar .guestbook,#sidebar .new,#sidebar .PopularPosts{display:none}#sidebar .widget{page-break-inside:avoid}#content-wrapper{margin-bottom:0}.site-footer #footer-body,.site-footer .container,.site-footer .go-top,.site-footer .management{display:none}.site-footer a:after{content:\"\"}#footer .container{padding:0}#footer p{text-align:center;width:100%}#footer p a:after{content:\" \" attr(href) \"\"}#footer .themexpose,a.quickedit{display:none}a:after{white-space:nowrap}body>.sumome-share-client-wrapper{display:none}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style-print/style-print.less","style-print.less"],"names":[],"mappings":"AAEA,aACI,UACI,4BAAA,CACA,yBCAN,CDGE,oBACI,yBAAA,CACA,WCDN,CDIE,iCACI,gBAAA,CACA,eAAA,CACA,cCFN,CDKE,8DAGI,YCHN,CDME,wBACI,oBAAA,CACA,cCJN,CDME,wBACI,UCJN,CDME,mBACI,oBCJN,CDOE,yBACI,UCLN,CDQE,8BACI,iBAAA,CAEA,iBAAA,CACA,eCNN,CDSE,4DACI,aCPN,CDUE,oCACI,iBAAA,CACA,aAAA,CACA,yBCRN,CDWE,uBACI,eCTN,CDkBE,cACI,aCZN,CDeE,iBACI,aCbN,CDkBE,kJAMI,YCfN,CDkBE,0BACI,4BAAA,CACA,cAAA,CACA,eAAA,CACA,mCChBN,CDmBE,mRAOI,UCjBN,CDoBE,yBACI,YClBN,CDqBE,mCACI,cCnBN,CDuBE,yBACI,kBCrBN,CDwBE,yBACI,eCtBN,CDyBE,6CAGI,uBCvBN,CD0BE,kBACI,uBCxBN,CD2BE,2BACI,cAAA,CACA,eCzBN,CD4BE,kBACI,YC1BN,CD6BE,gBACI,qBC3BN,CD+BE,SACI,aC5BN,CD+BE,oCACI,UAAA,CACA,aAAA,CACA,iBC7BN,CDiCE,mCACI,eC/BN,CDiCE,mEAEI,YC/BN,CDkCE,2BACI,UChCN,CDmCE,qCACI,eAAA,CACA,yBAAA,CACA,wBAAA,CACA,yBCjCN,CDoCE,4DACI,aAAA,CACA,eClCN,CDoCE,8DACI,cClCN,CDqCE,6dAQI,YCnCN,CDsCE,6CACI,0CAAA,CACA,eCpCN,CDuCE,mDACI,yBCrCN,CDwCE,wCACI,oBCtCN,CDyCE,8CACI,kBAAA,CACA,yBAAA,CACA,aCvCN,CD0CE,+FAGI,UCxCN,CD2CE,4EAII,YCzCN,CD4CE,iBACI,uBC1CN,CD8CE,iBACI,eC3CN,CD8CE,gGAII,YC5CN,CD+CE,qBACI,UC7CN,CDiDE,mBACI,SC9CN,CDgDE,UACI,iBAAA,CACA,UC9CN,CDiDE,kBACI,yBC/CN,CDuDE,gCACI,YCjDN,CDoDE,QACI,kBClDN,CDqDE,kCACI,YCnDN,CACF","file":"style-print.less","sourcesContent":["\n/******************************************/\n@media print {\n    #masthead {\n        border-bottom: 1px solid gray;\n        position: static !important;\n    }\n    \n    #masthead.fixed-nav {\n        position: static !important;\n        height: 82px;\n    }\n    \n    #masthead.fixed-nav.fixed-nav h1 {\n        line-height: 30px;\n        margin-top: 10px;\n        font-size: 30px;\n    }\n    \n    #masthead .gcse,\n    #masthead .btn-navbar,\n    #masthead #menu-primary {\n        display:none;\n    }\n    \n    #masthead #header-inner {\n        width: 100% !important;\n        padding-left: 0;\n    }\n    #masthead .titlewrapper {\n        float: left;\n    }\n    #masthead .title a {\n        text-decoration: none;\n    }\n    \n    #masthead .title a:after {\n        content: \"\";\n    }\n    \n    #masthead .descriptionwrapper {\n        width: max-content;\n        /*padding-top: 20px;*/\n        padding-left: 18em;\n        padding-top: 5px;\n    }\n    \n    #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n        display: block;\n    }\n    \n    #masthead .descriptionwrapper:after {\n        content:attr(url);\n        display:block;\n        text-decoration: underline;\n    }\n    \n    #masthead .description {\n        margin-bottom: 0;\n    }\n    \n    /****************/\n    \n    .row {\n        margin-left: 0;\n    }\n    \n    #content {\n        margin-left:0;\n    }\n    \n    #content-wrapper {\n        padding-top: 0;\n    }\n    \n    /*****************/\n    \n    #main .read-more,\n    #main .share-story-container,\n    #main a[name=\"more\"],\n    #main .related-posts,\n    #main .blogger-comment-from-post,\n    #main #backlinks-container {\n        display: none;\n    }\n    \n    #main .post a[href]:after{\n        content:\" (\" attr(href) \") \";\n        font-size:0.8em;\n        font-weight:normal;\n        text-decoration: underline !important;\n    }\n    \n    #main .post .entry-content .meta1 a:after,\n    #main .post .entry-content a[href$=\".png\"]:after,\n    #main #comments a[href]:after,\n    #main .post a[href=\"javascript:void(0)\"]:after,\n    #main .post a[href^=\"#\"]:after,\n    #main .post a.toggle:after,\n    #main .post #ArchiveList a.post-count-link:after {\n        content: \"\";\n    }\n    \n    #main .post a[href^=\"#\"] {\n        display: none;\n    }\n    \n    #main .post .puli-toc a[href^=\"#\"] {\n        display: inline;\n    }\n    \n    \n    #main #comments h4:after {\n        border-top-width: 0;\n    }\n    \n    #main .post:last-of-type {\n        margin-bottom: 0;\n    }\n    \n    #main .post h4,\n    #main .post h5,\n    #main .post h6 {\n        page-break-before: avoid;\n    }\n    \n    #main .post table {\n        page-break-inside: avoid;\n    }\n    \n    #main .post .entry-content {\n        padding-left:0;\n        padding-right:0;\n    }\n    \n    #main .entry-meta {\n        display: none;\n    }\n    \n    #main #comments {\n        border-bottom-width: 0;\n    }\n        \n    /*********************/\n    #sidebar {\n        margin-left: 0;\n    }\n    \n    #sidebar .about-me img[align=\"right\"] {\n        float:left;\n        margin-left: 0;\n        margin-right: 0.5em;\n        \n    }\n    \n    #sidebar .about-me .widget-content {\n        margin-top: 0.5em;\n    }\n    #sidebar .about-me .about-link,\n    #sidebar .about-me .email-subscribe {\n        display: none;\n    }\n    \n    #sidebar .about-me a:after {\n        content: \"\";\n    }\n    \n    #sidebar .about-me .social-media div {\n        text-align: left;\n        padding-right:0 !important;\n        padding-left:0 !important;\n        margin-bottom: 0 !important;\n    }\n    \n    #sidebar .about-me .social-media div .social-button-wrapper {\n        display: block;\n        text-align: left;\n    }\n    #sidebar .about-me .social-media div .social-button-wrapper a {\n        display: inline;\n    }\n    \n    #sidebar .about-me .social-media div .social-button.google-plus,\n    #sidebar .about-me .social-media div .social-button.plurk,\n    #sidebar .about-me .social-media div .social-button.linkedin,\n    #sidebar .about-me .social-media div .social-button.twitter,\n    #sidebar .about-me .social-media div .social-button.github,\n    #sidebar .about-me .social-media div .social-button.android,\n    #sidebar .about-me .social-media div .social-button.chrome,\n    #sidebar .about-me .social-media div .social-button.rss {\n        display: none;\n    }\n    \n    #sidebar .about-me .social-media div a:after {\n        content: \" \" attr(title) \": \" attr(href) \"\";\n        margin-left: 1em;\n    }\n    \n    #sidebar .about-me .social-media div a.email:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"] {\n        text-decoration: none;\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n        content: attr(href);\n        text-decoration: underline;\n        display: block;\n    }\n    \n    #sidebar .guestbook a[href]:after,\n    #sidebar .new a[href]:after,\n    #sidebar .comments a[href]:after {\n        content: \"\";\n    }\n    \n    #sidebar .guestbook,\n    #sidebar .comments,\n    #sidebar .new,\n    #sidebar .PopularPosts {\n        display: none;\n    }\n    \n    #sidebar .widget {\n        page-break-inside: avoid;\n    }\n    \n    /**********************************/\n    #content-wrapper {\n        margin-bottom: 0;\n    }\n    \n    .site-footer #footer-body,\n    .site-footer .management,\n    .site-footer .go-top,\n    .site-footer .container {\n        display: none;\n    }\n    \n    .site-footer a:after {\n        content: \"\";\n    }\n    \n    /*************************************/\n    #footer .container {\n        padding: 0;\n    }\n    #footer p {\n        text-align: center;\n        width: 100%;\n    }\n    \n    #footer p a:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #footer .themexpose {\n        display: none;\n    }\n    \n    /*****************************/\n    a.quickedit {\n        display: none;\n    }\n    \n    a:after {\n        white-space:nowrap;\n    }\n    \n    body > .sumome-share-client-wrapper {\n        display: none;\n    }\n}   /* @media print { */","/******************************************/\n@media print {\n  #masthead {\n    border-bottom: 1px solid gray;\n    position: static !important;\n  }\n  #masthead.fixed-nav {\n    position: static !important;\n    height: 82px;\n  }\n  #masthead.fixed-nav.fixed-nav h1 {\n    line-height: 30px;\n    margin-top: 10px;\n    font-size: 30px;\n  }\n  #masthead .gcse,\n  #masthead .btn-navbar,\n  #masthead #menu-primary {\n    display: none;\n  }\n  #masthead #header-inner {\n    width: 100% !important;\n    padding-left: 0;\n  }\n  #masthead .titlewrapper {\n    float: left;\n  }\n  #masthead .title a {\n    text-decoration: none;\n  }\n  #masthead .title a:after {\n    content: \"\";\n  }\n  #masthead .descriptionwrapper {\n    width: max-content;\n    /*padding-top: 20px;*/\n    padding-left: 18em;\n    padding-top: 5px;\n  }\n  #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n    display: block;\n  }\n  #masthead .descriptionwrapper:after {\n    content: attr(url);\n    display: block;\n    text-decoration: underline;\n  }\n  #masthead .description {\n    margin-bottom: 0;\n  }\n  /****************/\n  .row {\n    margin-left: 0;\n  }\n  #content {\n    margin-left: 0;\n  }\n  #content-wrapper {\n    padding-top: 0;\n  }\n  /*****************/\n  #main .read-more,\n  #main .share-story-container,\n  #main a[name=\"more\"],\n  #main .related-posts,\n  #main .blogger-comment-from-post,\n  #main #backlinks-container {\n    display: none;\n  }\n  #main .post a[href]:after {\n    content: \" (\" attr(href) \") \";\n    font-size: 0.8em;\n    font-weight: normal;\n    text-decoration: underline !important;\n  }\n  #main .post .entry-content .meta1 a:after,\n  #main .post .entry-content a[href$=\".png\"]:after,\n  #main #comments a[href]:after,\n  #main .post a[href=\"javascript:void(0)\"]:after,\n  #main .post a[href^=\"#\"]:after,\n  #main .post a.toggle:after,\n  #main .post #ArchiveList a.post-count-link:after {\n    content: \"\";\n  }\n  #main .post a[href^=\"#\"] {\n    display: none;\n  }\n  #main .post .puli-toc a[href^=\"#\"] {\n    display: inline;\n  }\n  #main #comments h4:after {\n    border-top-width: 0;\n  }\n  #main .post:last-of-type {\n    margin-bottom: 0;\n  }\n  #main .post h4,\n  #main .post h5,\n  #main .post h6 {\n    page-break-before: avoid;\n  }\n  #main .post table {\n    page-break-inside: avoid;\n  }\n  #main .post .entry-content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #main .entry-meta {\n    display: none;\n  }\n  #main #comments {\n    border-bottom-width: 0;\n  }\n  /*********************/\n  #sidebar {\n    margin-left: 0;\n  }\n  #sidebar .about-me img[align=\"right\"] {\n    float: left;\n    margin-left: 0;\n    margin-right: 0.5em;\n  }\n  #sidebar .about-me .widget-content {\n    margin-top: 0.5em;\n  }\n  #sidebar .about-me .about-link,\n  #sidebar .about-me .email-subscribe {\n    display: none;\n  }\n  #sidebar .about-me a:after {\n    content: \"\";\n  }\n  #sidebar .about-me .social-media div {\n    text-align: left;\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper {\n    display: block;\n    text-align: left;\n  }\n  #sidebar .about-me .social-media div .social-button-wrapper a {\n    display: inline;\n  }\n  #sidebar .about-me .social-media div .social-button.google-plus,\n  #sidebar .about-me .social-media div .social-button.plurk,\n  #sidebar .about-me .social-media div .social-button.linkedin,\n  #sidebar .about-me .social-media div .social-button.twitter,\n  #sidebar .about-me .social-media div .social-button.github,\n  #sidebar .about-me .social-media div .social-button.android,\n  #sidebar .about-me .social-media div .social-button.chrome,\n  #sidebar .about-me .social-media div .social-button.rss {\n    display: none;\n  }\n  #sidebar .about-me .social-media div a:after {\n    content: \" \" attr(title) \": \" attr(href) \"\";\n    margin-left: 1em;\n  }\n  #sidebar .about-me .social-media div a.email:after {\n    content: \" \" attr(href) \"\";\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"] {\n    text-decoration: none;\n  }\n  #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n    content: attr(href);\n    text-decoration: underline;\n    display: block;\n  }\n  #sidebar .guestbook a[href]:after,\n  #sidebar .new a[href]:after,\n  #sidebar .comments a[href]:after {\n    content: \"\";\n  }\n  #sidebar .guestbook,\n  #sidebar .comments,\n  #sidebar .new,\n  #sidebar .PopularPosts {\n    display: none;\n  }\n  #sidebar .widget {\n    page-break-inside: avoid;\n  }\n  /**********************************/\n  #content-wrapper {\n    margin-bottom: 0;\n  }\n  .site-footer #footer-body,\n  .site-footer .management,\n  .site-footer .go-top,\n  .site-footer .container {\n    display: none;\n  }\n  .site-footer a:after {\n    content: \"\";\n  }\n  /*************************************/\n  #footer .container {\n    padding: 0;\n  }\n  #footer p {\n    text-align: center;\n    width: 100%;\n  }\n  #footer p a:after {\n    content: \" \" attr(href) \"\";\n  }\n  #footer .themexpose {\n    display: none;\n  }\n  /*****************************/\n  a.quickedit {\n    display: none;\n  }\n  a:after {\n    white-space: nowrap;\n  }\n  body > .sumome-share-client-wrapper {\n    display: none;\n  }\n}\n/* @media print { */\n"]}]);



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
exports.push([module.i, "#main .entry-content article code{display:block}#main .entry-content article pre>.code-label:first-of-type{display:block;cursor:pointer;user-select:none;font-size:.5rem;border:1px dotted grey;background-color:grey;color:#fff;clear:both;line-height:.7rem;text-align:center;text-indent:0;position:absolute;margin-top:-.9rem;margin-left:-.9rem;border-radius:4px;margin-bottom:-.7rem;width:fit-content;white-space:nowrap;padding:.2rem}#main .entry-content article pre>.code-label:first-of-type:active{opacity:.7}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/article-code.less","article-code.less"],"names":[],"mappings":"AAAA,kCAEI,aCqIJ,CDvIA,2DASI,aAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,UAAA,CAEA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,oBAAA,CACA,iBAAA,CAGA,kBAAA,CACA,aCiIJ,CD/HI,kEACE,UCiIN","file":"article-code.less","sourcesContent":["#main .entry-content article {\n  code {\n    display: block;\n  }\n  \n  //article pre code::before {\n  pre > .code-label:first-of-type {\n    //content: '';\n    //display: none;\n    display: block;\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.5rem;\n    border: 1px dotted gray;\n    background-color: gray;\n    color: white;\n    margin-bottom: 5px;\n    clear: both;\n    line-height: 0.7rem;\n    text-align: center;\n    text-indent: 0;\n    position: absolute;\n    margin-top: -0.9rem;\n    margin-left: -0.9rem;\n    border-radius: 4px;\n    margin-bottom: -0.7rem;\n    width: fit-content;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem;\n    white-space: nowrap;\n    padding: .2rem;\n    \n    &:active {\n      opacity: 0.7;\n    }\n  }\n\n  /*\n  article pre code.javascript::before {\n    content: 'JavaScript';\n    display: block;\n  }\n\n  article pre code.html::before {\n    content: 'HTML';\n    display: block;\n  }\n\n  article pre code.css::before {\n    content: 'CSS';\n    display: block;\n  }\n\n  article pre code.bash::before {\n    content: 'Bash';\n    display: block;\n  }\n\n  article pre code.ini::before {\n    content: 'INI';\n    display: block;\n  }\n\n  article pre code.json::before {\n    content: 'JSON';\n    display: block;\n  }\n\n  article pre code.java::before {\n    content: 'Java';\n    display: block;\n  }\n\n  article pre code.php::before {\n    content: 'PHP';\n    display: block;\n  }\n\n  article pre code.perl::before {\n    content: 'Perl';\n    display: block;\n  }\n\n  article pre code.r::before {\n    content: 'R';\n    display: block;\n  }\n\n  article pre code.sql::before {\n    content: 'SQL';\n    display: block;\n  }\n\n  article pre code.autoit::before {\n    content: 'AutoIT';\n    display: block;\n  }\n\n  article pre code.csharp::before {\n    content: 'C#';\n    display: block;\n  }\n\n  article pre code.cpp::before {\n    content: 'C++';\n    display: block;\n  }\n\n  article pre code.dos::before {\n    content: 'DOS';\n    display: block;\n  }\n\n  article pre code.excel::before {\n    content: 'Excel';\n    display: block;\n  }\n\n  article pre code.markdown::before {\n    content: 'Markdown';\n    display: block;\n  }\n\n  article pre code.nginx::before {\n    content: 'Nginx';\n    display: block;\n  }\n\n  article pre code.python::before {\n    content: 'Python';\n    display: block;\n  }\n\n  article pre code.ruby::before {\n    content: 'Ruby';\n    display: block;\n  }\n\n  article pre code.swift::before {\n    content: 'Swift';\n    display: block;\n  }\n\n  article pre code.typescript::before {\n    content: 'TypeScript';\n    display: block;\n  }\n\n  article pre code.vbnet::before {\n    content: 'VB.Net';\n    display: block;\n  }\n\n  article pre code.vbscript::before {\n    content: 'VBscript';\n    display: block;\n  }\n\n  article pre code.xpath::before {\n    content: 'XQuery, Xpath';\n    display: block;\n  }\n\n  article pre code.matlab::before {\n    content: 'Matlab';\n    display: block;\n  }\n  */\n}","#main .entry-content article {\n  /*\n  article pre code.javascript::before {\n    content: 'JavaScript';\n    display: block;\n  }\n\n  article pre code.html::before {\n    content: 'HTML';\n    display: block;\n  }\n\n  article pre code.css::before {\n    content: 'CSS';\n    display: block;\n  }\n\n  article pre code.bash::before {\n    content: 'Bash';\n    display: block;\n  }\n\n  article pre code.ini::before {\n    content: 'INI';\n    display: block;\n  }\n\n  article pre code.json::before {\n    content: 'JSON';\n    display: block;\n  }\n\n  article pre code.java::before {\n    content: 'Java';\n    display: block;\n  }\n\n  article pre code.php::before {\n    content: 'PHP';\n    display: block;\n  }\n\n  article pre code.perl::before {\n    content: 'Perl';\n    display: block;\n  }\n\n  article pre code.r::before {\n    content: 'R';\n    display: block;\n  }\n\n  article pre code.sql::before {\n    content: 'SQL';\n    display: block;\n  }\n\n  article pre code.autoit::before {\n    content: 'AutoIT';\n    display: block;\n  }\n\n  article pre code.csharp::before {\n    content: 'C#';\n    display: block;\n  }\n\n  article pre code.cpp::before {\n    content: 'C++';\n    display: block;\n  }\n\n  article pre code.dos::before {\n    content: 'DOS';\n    display: block;\n  }\n\n  article pre code.excel::before {\n    content: 'Excel';\n    display: block;\n  }\n\n  article pre code.markdown::before {\n    content: 'Markdown';\n    display: block;\n  }\n\n  article pre code.nginx::before {\n    content: 'Nginx';\n    display: block;\n  }\n\n  article pre code.python::before {\n    content: 'Python';\n    display: block;\n  }\n\n  article pre code.ruby::before {\n    content: 'Ruby';\n    display: block;\n  }\n\n  article pre code.swift::before {\n    content: 'Swift';\n    display: block;\n  }\n\n  article pre code.typescript::before {\n    content: 'TypeScript';\n    display: block;\n  }\n\n  article pre code.vbnet::before {\n    content: 'VB.Net';\n    display: block;\n  }\n\n  article pre code.vbscript::before {\n    content: 'VBscript';\n    display: block;\n  }\n\n  article pre code.xpath::before {\n    content: 'XQuery, Xpath';\n    display: block;\n  }\n\n  article pre code.matlab::before {\n    content: 'Matlab';\n    display: block;\n  }\n  */\n}\n#main .entry-content article code {\n  display: block;\n}\n#main .entry-content article pre > .code-label:first-of-type {\n  display: block;\n  cursor: pointer;\n  user-select: none;\n  font-size: 0.5rem;\n  border: 1px dotted gray;\n  background-color: gray;\n  color: white;\n  margin-bottom: 5px;\n  clear: both;\n  line-height: 0.7rem;\n  text-align: center;\n  text-indent: 0;\n  position: absolute;\n  margin-top: -0.9rem;\n  margin-left: -0.9rem;\n  border-radius: 4px;\n  margin-bottom: -0.7rem;\n  width: fit-content;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  white-space: nowrap;\n  padding: 0.2rem;\n}\n#main .entry-content article pre > .code-label:first-of-type:active {\n  opacity: 0.7;\n}\n"]}]);



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
exports.push([module.i, "#sidebar .widget.about-me .link-buttons .subscribe{display:none}@media (min-width:767px){#side-bar{width:100%}#sidebar>div.widget .widget-content{min-height:360px;max-height:360px;overflow-y:auto;margin-bottom:0}.sidebar .widget{margin-bottom:0}#content{width:100%!important;max-width:1170px}}#side-bar{margin-left:30px}@media (min-width:767px){#side-bar{max-width:1170px}}@media (max-width:1200px){#side-bar{margin-left:20px}}@media (min-width:979px) and (max-width:1200px){#sidebar>div.widget{width:calc(33% - .5em);margin-right:1em}}@media (min-width:767px) and (max-width:979px){#sidebar>.widget:not(.two-col){display:none}#sidebar>.widget.two-col{margin-bottom:18px;width:calc(50% - .5em);float:left}#sidebar>.widget.two-col-1,#sidebar>.widget.two-col-3{margin-right:16px}#sidebar>.widget.two-col-2,#sidebar>.widget.two-col-4{margin-right:0;clear:none}}@media (min-width:979px){#sidebar>.widget:not(.three-col){display:none}#sidebar>.widget.three-col{margin-bottom:18px;width:calc(33% - 9px);float:left;margin-right:18px;clear:none}#sidebar>.widget.three-col:nth-of-type(3n){margin-right:0}#sidebar>.comments{display:block}}", "",{"version":3,"sources":["D:/xampp/htdocs/public/Pulipuli-Blog/lib-for-link/src/item-header/style/sidebar.less","sidebar.less"],"names":[],"mappings":"AAAA,mDACE,YCCF,CDOA,yBACI,UAEI,UCDN,CDOE,oCACI,gBAAA,CACA,gBAAA,CACA,eAAA,CACA,eCLN,CDQE,iBACI,eCNN,CDSE,SACI,oBAAA,CACA,gBCPN,CAMF,CDWA,UACI,gBCTJ,CDYA,yBACI,UACI,gBCVN,CACF,CDaA,0BACI,UACI,gBCXN,CACF,CDcA,gDACI,oBACI,sBAAA,CACA,gBCZN,CACF,CDeA,+CACE,+BACE,YCbF,CDgBA,yBACE,kBAAA,CACA,sBAAA,CACA,UCZF,CDoBA,sDAEE,iBCdF,CDqBA,sDAGE,cAAA,CACA,UChBF,CACF,CDmBA,yBAOE,iCACE,YClBF,CDqBA,2BACE,kBAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,UCjBF,CDsBA,2CAEE,cCpBF,CDuBA,mBACE,aCrBF,CACF","file":"sidebar.less","sourcesContent":["#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n  #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  /**\n   * 1 3 5\n   */\n  #sidebar > .widget.two-col-1,\n  #sidebar > .widget.two-col-3 {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  \n  /**\n   * 2 4 6\n   */\n  #sidebar > .widget.two-col-2,\n  #sidebar > .widget.two-col-4 {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n} \n\n@media (min-width:979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  \n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  \n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  \n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }    \n\n  #sidebar > .comments {\n    display: block;\n  }\n}","#sidebar .widget.about-me .link-buttons .subscribe {\n  display: none;\n}\n/**\n * @author Pulipuli Chen 20190301\n * 開始處理底板的問題\n */\n@media (min-width: 767px) {\n  #side-bar {\n    /*display: none;*/\n    width: 100%;\n  }\n  #sidebar > div.widget .widget-content {\n    min-height: 360px;\n    max-height: 360px;\n    overflow-y: auto;\n    margin-bottom: 0;\n  }\n  .sidebar .widget {\n    margin-bottom: 0;\n  }\n  #content {\n    width: 100% !important;\n    max-width: 1170px;\n  }\n  /*\n    .popular-posts {\n        padding-bottom: 0;\n    }\n    */\n}\n#side-bar {\n  margin-left: 30px;\n}\n@media (min-width: 767px) {\n  #side-bar {\n    max-width: 1170px;\n  }\n}\n@media (max-width: 1200px) {\n  #side-bar {\n    margin-left: 20px;\n  }\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  #sidebar > div.widget {\n    width: calc(33% - 0.5em);\n    margin-right: 1em;\n  }\n}\n@media (min-width: 767px) and (max-width: 979px) {\n  #sidebar > .widget:not(.two-col) {\n    display: none;\n  }\n  #sidebar > .widget.two-col {\n    margin-bottom: 18px;\n    width: calc(50% - 0.5em);\n    float: left;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  /**\n   * 1 3 5\n   */\n  #sidebar > .widget.two-col-1,\n  #sidebar > .widget.two-col-3 {\n    margin-right: 16px;\n    /*clear: both;*/\n  }\n  /**\n   * 2 4 6\n   */\n  #sidebar > .widget.two-col-2,\n  #sidebar > .widget.two-col-4 {\n    /*border: 3px solid red;*/\n    margin-right: 0;\n    clear: none;\n  }\n}\n@media (min-width: 979px) {\n  /*\n  #side-bar {\n    margin-left: 0 !important;\n  }\n  */\n  #sidebar > .widget:not(.three-col) {\n    display: none;\n  }\n  #sidebar > .widget.three-col {\n    margin-bottom: 18px;\n    width: calc(33% - 9px);\n    float: left;\n    margin-right: 18px;\n    clear: none;\n    /*width: calc(50% - 0.5em);*/\n    /*border: 1px solid red;*/\n  }\n  #sidebar > .widget.three-col:nth-of-type(3n) {\n    /*border: 1px solid red;*/\n    margin-right: 0;\n  }\n  #sidebar > .comments {\n    display: block;\n  }\n}\n"]}]);



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