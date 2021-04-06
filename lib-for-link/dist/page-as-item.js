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



/***/ })

/******/ });
//# sourceMappingURL=page-as-item.js.map