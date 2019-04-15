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

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-olw/style/style-olw.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/item-olw/style/style-olw.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body{background:url(http://2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;font-family:Noto Sans TC,微軟正黑體,sans-serif}#content-wrapper{padding-top:0;width:100%}#masthead{display:none}#main .post>h3{display:block;border-bottom:3px solid #ce8a42;padding-bottom:20px}#main .post>h3>a{text-decoration:none;color:#333;font-size:38.5px;font-weight:400;line-height:100%;margin-bottom:20px}#main .post{line-height:200%;background:#fff;padding:50px;width:100%}#main .post>SPAN>DIV>DIV>p{text-indent:2em}#main .post>SPAN>DIV>DIV>h4{font-size:24pt;color:#bd8242;margin-top:1.5em;margin-bottom:1em}#main .post>SPAN>DIV>DIV>h5{font-size:20pt;color:#bd8242;margin-top:1.5em;margin-bottom:1em}#main .post>SPAN>DIV>DIV>h6{font-size:18pt;font-style:italic;color:#634121;margin-top:1em;margin-bottom:.5em}#main .post>SPAN>DIV>DIV>hr{border-top:3px solid #ce8a42;border-bottom:0 solid #bd8a39}#main .post li,#main .post ul{margin-left:2em!important;margin-top:.5em!important;margin-bottom:.5em!important}#main .post li{list-style:square!important;line-height:200%}#main .post ol>li{list-style:decimal!important}#main .post>SPAN>DIV>DIV>blockquote{border-left-color:#f7ebde}#main .post a{text-decoration:underline;color:#bd8242}#main .post>SPAN>DIV>DIV>h1 a{text-decoration:none;color:#333;font-family:Noto Sans TC,微軟正黑體,sans-serif}#main .post>SPAN>DIV>DIV>table>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}#main .post>SPAN>DIV>DIV>table>tbody>tr>td,#main .post>SPAN>DIV>DIV>table>tbody>tr>th,#main .post>SPAN>DIV>DIV>table>tfoot>tr>td,#main .post>SPAN>DIV>DIV>table>tfoot>tr>th,#main .post>SPAN>DIV>DIV>table>thead>tr>td,#main .post>SPAN>DIV>DIV>table>thead>tr>th{padding:8px;vertical-align:top;border-top:1px solid #ddd}#main .post>SPAN>DIV>DIV>table>tbody>tr:first-of-type>td{border-top-width:0}#main .post>SPAN>DIV>DIV>table>tbody>tr:hover{background-color:#f5f5f5}#main .post>SPAN>DIV>DIV code{padding:0;border-radius:0;white-space:normal;font-size:.8em;line-height:1.15em;display:block}#main .post>SPAN>DIV>DIV pre{font-size:1em}#main .post>SPAN>DIV>DIV p>code{text-indent:0}", "",{"version":3,"sources":["style-olw.css"],"names":[],"mappings":"AAAA,KACE,0IAA6I,CAC7I,yCACF,CAEA,iBACE,aAAc,CACd,UACF,CAEA,UACE,YACF,CAEA,eACE,aAAc,CACd,+BAAgC,CAChC,mBACF,CAEA,iBACE,oBAAqB,CACrB,UAAW,CACX,gBAAiB,CACjB,eAAmB,CACnB,gBAAiB,CACjB,kBACF,CAIA,YACE,gBAAiB,CACjB,eAAgB,CAChB,YAAa,CACb,UACF,CAEA,2BACE,eACF,CAEA,4BACE,cAAe,CACf,aAAa,CACb,gBAAiB,CACjB,iBACF,CAEA,4BACE,cAAe,CACf,aAAa,CAEb,gBAAiB,CACjB,iBACF,CAEA,4BACE,cAAe,CACf,iBAAkB,CAClB,aAAa,CACb,cAAe,CACf,kBACF,CAEA,4BACE,4BAA6B,CAC7B,6BACF,CAEA,8BAEE,yBAA2B,CAC3B,yBAA2B,CAC3B,4BACF,CAEA,eACE,2BAA6B,CAC7B,gBAEF,CAEA,kBACE,4BACF,CAEA,oCACE,yBACF,CAEA,cACE,yBAA0B,CAC1B,aACF,CAEA,8BACE,oBAAqB,CACrB,UAAW,CACX,yCACF,CAQA,yDACE,wBACF,CAEA,kQAME,WAAY,CAEZ,kBAAmB,CACnB,yBACF,CAEA,yDACE,kBACF,CAEA,8CACE,wBACF,CAEA,8BACE,SAAU,CACV,eAAiB,CACjB,kBAAmB,CACnB,cAAgB,CAChB,kBAAmB,CACnB,aACF,CAEA,6BACE,aACF,CAEA,gCACE,aACF","file":"style-olw.css","sourcesContent":["body {\n  background: url(\"http://2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png\") repeat scroll 0 0 transparent;\n  font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;\n}\n\n#content-wrapper {\n  padding-top: 0;\n  width: 100%;\n}\n\n#masthead {\n  display: none;\n}\n\n#main .post > h3 {\n  display: block;\n  border-bottom: 3px solid #CE8A42;\n  padding-bottom: 20px;\n}\n\n#main .post > h3 > a {\n  text-decoration: none;\n  color: #333;\n  font-size: 38.5px;\n  font-weight: normal;\n  line-height: 100%;\n  margin-bottom: 20px;\n}\n\n/********************************/\n\n#main .post {\n  line-height: 200%;\n  background: #FFF;\n  padding: 50px;\n  width:100%;\n}\n\n#main .post > SPAN > DIV > DIV > p {\n  text-indent: 2em;\n}\n\n#main .post > SPAN > DIV > DIV > h4 {\n  font-size: 24pt;\n  color:#BD8242;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n#main .post > SPAN > DIV > DIV > h5 {\n  font-size: 20pt;\n  color:#BD8242;\n\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n#main .post > SPAN > DIV > DIV > h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color:#634121;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n\n#main .post > SPAN > DIV > DIV > hr {\n  border-top: 3px solid #CE8A42;\n  border-bottom: 0px solid #BD8A39;\n}\n\n#main .post ul,\n#main .post li {\n  margin-left: 2em !important;\n  margin-top:0.5em !important;\n  margin-bottom:0.5em !important;\n}\n\n#main .post li {\n  list-style: square !important;\n  line-height: 200%;\n\n}\n\n#main .post ol > li {\n  list-style: decimal !important;\n}\n\n#main .post > SPAN > DIV > DIV > blockquote {\n  border-left-color: #F7EBDE;\n}\n\n#main .post a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n\n#main .post > SPAN > DIV > DIV > h1 a {\n  text-decoration: none;\n  color: #333;\n  font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;\n}\n\n#main .post > SPAN > DIV > DIV > table,\n#main .post > SPAN > DIV > DIV > table th,\n#main .post > SPAN > DIV > DIV > table td {\n  /*border: 1px solid #BD8242;*/\n}\n\n#main .post > SPAN > DIV > DIV > table > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n#main .post > SPAN > DIV > DIV > table>tbody>tr>td,\n#main .post > SPAN > DIV > DIV > table>tbody>tr>th, \n#main .post > SPAN > DIV > DIV > table>tfoot>tr>td,\n#main .post > SPAN > DIV > DIV > table>tfoot>tr>th,\n#main .post > SPAN > DIV > DIV > table>thead>tr>td,\n#main .post > SPAN > DIV > DIV > table>thead>tr>th {\n  padding: 8px;\n  /*line-height: 1.42857143;*/\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n#main .post > SPAN > DIV > DIV > table>tbody>tr:first-of-type>td {\n  border-top-width: 0;\n}\n\n#main .post > SPAN > DIV > DIV > table > tbody > tr:hover {\n  background-color: #f5f5f5; \n}\n\n#main .post > SPAN > DIV > DIV code {\n  padding: 0;\n  border-radius:0px;\n  white-space: normal;\n  font-size: 0.8em;\n  line-height: 1.15em;\n  display: block;\n}\n\n#main .post > SPAN > DIV > DIV pre {\n  font-size: 1em;\n}\n\n#main .post > SPAN > DIV > DIV p > code {\n  text-indent: 0;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
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

/***/ "../../../../../usr/lib/node_modules/style-loader/lib/addStyles.js":
/*!***********************************************************!*\
  !*** /usr/lib/node_modules/style-loader/lib/addStyles.js ***!
  \***********************************************************/
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

var	fixUrls = __webpack_require__(/*! ./urls */ "../../../../../usr/lib/node_modules/style-loader/lib/urls.js");

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

/***/ "../../../../../usr/lib/node_modules/style-loader/lib/urls.js":
/*!******************************************************!*\
  !*** /usr/lib/node_modules/style-loader/lib/urls.js ***!
  \******************************************************/
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

/***/ "./lib-for-link/src/item-olw/style/style-olw.css":
/*!*******************************************************!*\
  !*** ./lib-for-link/src/item-olw/style/style-olw.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./style-olw.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/item-olw/style/style-olw.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/style-loader/lib/addStyles.js */ "../../../../../usr/lib/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 5:
/*!*************************************************************!*\
  !*** multi ./lib-for-link/src/item-olw/style/style-olw.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-for-link/src/item-olw/style/style-olw.css */"./lib-for-link/src/item-olw/style/style-olw.css");


/***/ })

/******/ });
//# sourceMappingURL=item-owl.js.map