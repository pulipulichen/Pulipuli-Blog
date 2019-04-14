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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".puli-guest-book .admin-photo{float:left;margin-right:5px;width:20px;height:20px;display:block}.puli-guest-book .guest-book-list{max-height:500px;overflow-x:hidden;overflow-y:auto;color:#5b5743;font-size:90%;padding:0;margin:0;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guest-book-list .guest-book-li{background-image:none;background-color:#fff!important;margin:0;padding:18px;list-style:none;clear:both;text-indent:0!important;color:#5b5743!important}.puli-guest-book .guest-book-list .guest-book-li:hover{padding-left:15px}.puli-guest-book .guest-book-list .guest-book-li.readmore:hover{padding-left:-9px!important;border-left-width:0!important}.puli-guest-book .guest-book-list .guest-book-li .date{background-image:none!important;background-color:transparent!important;padding:0!important;list-style:none;text-indent:0!important;color:#5b5743!important;width:auto!important;height:auto!important;display:block;float:right;text-align:right;color:#b4af98;font-size:70%;margin:0 0 0 10px!important}.puli-guest-book .guest-book-list .guest-book-li.readmore{text-align:center;font-weight:700;padding:10px 0;background-color:#d6d7d6!important}.puli-guest-book .guestbook-write{text-align:center;font-weight:700;padding:10px 0}.puli-guest-book .guestbook-write a.write{color:#5b5743;border:1px solid #d2cbbd;background-color:#fff;padding:5px;margin:5px;text-decoration:none;font-size:90%;cursor:pointer;-moz-border-radius:3px;-webkit-border-radius:3px}.puli-guest-book .guestbook-write a.write:hover{color:#5b5743;border-color:#5b5743}.puli-guest-book .guest-book-list strong.name a{display:inline}", "",{"version":3,"sources":["puli-guest-book.css"],"names":[],"mappings":"AAAA,8BACE,UAAU,CACV,gBAAiB,CACjB,UAAU,CACV,WAAY,CACZ,aACF,CAEA,kCAEE,gBAAiB,CACjB,iBAAkB,CAClB,eAAgB,CAChB,aAAc,CACd,aAAa,CAEb,SAAU,CACV,QAAS,CACT,sBAAuB,CACvB,yBACF,CAEA,iDACE,qBAAqB,CACrB,+BAAkC,CAClC,QAAS,CACT,YAAa,CACb,eAAe,CACf,UAAU,CACV,uBAA2B,CAC3B,uBACF,CAEA,uDACE,iBACF,CAEA,gEACE,2BAA6B,CAC7B,6BACF,CAEA,uDACE,+BAAgC,CAChC,sCAAwC,CACxC,mBAAqB,CACrB,eAAe,CACf,uBAA2B,CAC3B,uBAAyB,CACzB,oBAAsB,CACtB,qBAAuB,CAGvB,aAAc,CACd,WAAW,CACX,gBAAiB,CACjB,aAAc,CACd,aAAa,CAEb,2BACF,CAEA,0DACE,iBAAiB,CACjB,eAAiB,CAGjB,cAAe,CACf,kCACF,CAEA,kCACE,iBAAiB,CACjB,eAAiB,CACjB,cACF,CAEA,0CACE,aAAc,CACd,wBAAyB,CACzB,qBAAsB,CACtB,WAAY,CACZ,UAAW,CACX,oBAAoB,CACpB,aAAa,CACb,cAAc,CAEd,sBAAuB,CACvB,yBACF,CAEA,gDACE,aAAc,CACd,oBACF,CAWA,gDACE,cACF","file":"puli-guest-book.css","sourcesContent":[".puli-guest-book .admin-photo {\n  float:left;\n  margin-right: 5px;\n  width:20px; \n  height: 20px;\n  display:block;\n}\n\n.puli-guest-book .guest-book-list {\n  /* border: 3px solid #D2CBBD; */\n  max-height: 500px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: #5B5743;\n  font-size:90%;\n\n  padding: 0;\n  margin: 0;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li {\n  background-image:none;\n  background-color: white !important;\n  margin: 0;\n  padding: 18px;\n  list-style:none;\n  clear:both;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li:hover {\n  padding-left: 15px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore:hover {\n  padding-left: -9px !important;\n  border-left-width: 0 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li .date {\n  background-image:none !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n  list-style:none;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n  width: auto !important;\n  height: auto !important;\n\n\n  display: block;\n  float:right;\n  text-align: right;\n  color: #B4AF98;\n  font-size:70%;\n  margin: 0 !important;\n  margin-left: 10px !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore {\n  text-align:center;\n  font-weight: bold;\n  /*border-top: 1px solid #5B5743;*/\n  /*background-color: white;*/\n  padding: 10px 0;\n  background-color: #D6D7D6 !important;\n}\n\n.puli-guest-book .guestbook-write {\n  text-align:center;\n  font-weight: bold;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write a.write {\n  color: #5B5743;\n  border: 1px solid #D2CBBD;\n  background-color:white;\n  padding: 5px;\n  margin: 5px;\n  text-decoration:none;\n  font-size:90%;\n  cursor:pointer;\n\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guestbook-write a.write:hover {\n  color: #5B5743;\n  border-color: #5B5743;\n}\n\n/*\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-0 {\n  background-color: #F6F3E0 !important;\n}\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-1 {\n  background-color: white !important;\n}\n*/\n\n.puli-guest-book .guest-book-list strong.name a {\n  display: inline;\n}"]}]);



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

/***/ "./lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js":
/*!***************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

puliHandleComments = function ()	{
    var pHC = this;
    pHC.title = "";
    pHC.divID = "puliHandleCommentsDiv";
    pHC.loading = "Loading...";
    pHC.ulID = "puliHandleCommentsUl";
    pHC.ulClass = "";
    pHC.liClass = "puliHandleCom-item-title";
    pHC.postshow = 10;
    pHC.titlelen = 20;
    pHC.layout = "%Y%-%M%-%D% %authorname%<br />%title%";
    pHC.bloggerName = "pulipuli";

    pHC.compareentry = function (a, b) {
        order = Date.parse(a.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
                '$1/$2/$3 $4 GMT')) - Date.parse(b.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
                '$1/$2/$3 $4 GMT'));
        return 0 - order;
    };

    pHC.handleComments = function (json) {
        var title = '';
        if (pHC.title !== '')
            title = '<h2>' + pHC.title + '</h2>';
        var temp = title + '<ul id="' + pHC.ulID + '">';
        var postshow = pHC.postshow;
        var titlelen = pHC.titlelen;
        var layout = pHC.layout;
        var sortentry = json.feed.entry.sort(compareentry);
        for (var i = 0, post; post = sortentry[i]; i++) {
            if (i >= postshow) {
                break;
            }
            var title = post.title.$t;
            if (titlelen !== "" && title.length > titlelen)
                title = title.substr(0, titlelen) + "...";
            var link = "#";
            if (typeof (post.link[2]) !== "undefined") {
                link = post.link[2].href;
            }

            title = title.replace("<", "&lt;")
                    .replace(">", "&gt;");

            if ($.trim(title) === "") {
                postshow++;
                continue;
            }
            var title_link = '<a href="' + link + '">' + title + '</a>';


            var authorname = post.author[0].name.$t;
            var timestamp = post.published.$t.substr(0, 10);
            var y = timestamp.substr(0, 4);
            var m = timestamp.substr(5, 2);
            var d = timestamp.substr(8, 2);

            var layout_replace = layout.replace("%comment%", title_link).replace("%Y%", y).replace("%M%", m).replace("%D%", d).replace("%authorname%", authorname);

            temp += '<li class="' + pHC.liClass + '">' + layout_replace + '</li>';
        }   //for (var i = 0, post; post = sortentry[i]; i++) {
        temp += "</ul>";
        jQuery("#" + pHC.divID).html(temp);
    };

    pHC.load = function (nodeID) {
        jQuery("#" + nodeID).html('<div id="' + pHC.divID + '"><h2>' + pHC.loading + '</h2></div>');
        //console.log('a')
        let url = "/feeds/comments/full?alt=json-in-script&callback=?"
        let callback = function (data) {
          //console.log('b')
          pHC.handleComments(data);
        }
        //jQuery.getJSON(url, callback);
        lscacheHelper.getJSON(url, callback)
        return pHC;
    };
    return pHC;
}

/***/ }),

/***/ "./lib-for-link/src/global-footer/blogger-feed-loader/init.js":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/global-footer/blogger-feed-loader/init.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Pulipuli Chen 20190301
 * 會先執行initRecent
 */
var initRecent = function () {
  var pHP = puliHandlePost()
  pHP.bloggerName = "pulipuli"
  pHP.postshow = 10
  pHP.titlelen = ""
  pHP.layout = decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)")
  pHP.tagname = ""
  pHP.callback = initComment
  pHP.load("puliHandlePostNode")
}

/**
 * @author Pulipuli Chen 20190301
 * 必須要先執行完initRecent才會執行它
 */
var initComment = function () {
  pHC = puliHandleComments()
  pHC.bloggerName = "pulipuli"
  pHC.postshow = 10
  pHC.titlelen = "20"
  pHC.layout = decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25")
  pHC.load("puliCommentsNode")
}

initRecent()




/***/ }),

/***/ "./lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js":
/*!****************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var _load_random_posts = function () {
  var _ul = $("#random_posts");
  _ul.empty();

  var randomposts_number = 5;
  var randomposts_chars = 110;
  var randomposts_details = true;
  var randomposts_comments = '留言';
  var randomposts_commentsd = '';
  var randomposts_current = [];
  var total_randomposts = 0;
  
  var randomposts_current = new Array(randomposts_number);
  /*
  var randomposts_current = lscache.get('randomPostIds')
  if (randomposts_current === null) {
    randomposts_current = new Array(randomposts_number)
    lscache.set('randomPostIds', randomposts_current, 5)
  }
  */
  //console.log(randomposts_current)

  let randomposts = function (json) {
    total_randomposts = json.feed.openSearch$totalResults.$t;
    //console.log({'total_randomposts': total_randomposts})
  };
  //document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts\"><\/script>');

  /**
   * 取得隨機篇數的語法
   * 這邊改成每5分鐘再更換，不然太頻繁更換很麻煩
   * @author Pulipuli Chen 20190304
   */
  var getvalue = function () {
    randomposts_current = lscache.get('randomPostIds')
    if (randomposts_current !== null) {
      return
    }
    randomposts_current = new Array(randomposts_number)
    
    for (var i = 0; i < randomposts_number; i++) {
      var found = false;
      var rndValue = get_random();
      for (var j = 0; j < randomposts_current.length; j++) {
        if (randomposts_current[j] === rndValue) {
          found = true;
          break
        }
      }
      ;
      if (found) {
        i--;
      } else {
        randomposts_current[i] = rndValue;
      }
    }
    
    lscache.set('randomPostIds', randomposts_current, 5)
  };

  var get_random = function () {
    var ranNum = 1 + Math.round(Math.random() * (total_randomposts - 1));
    return ranNum;
  };

  var random_posts = function (json) {
    //for (var i = 0; i < randomposts_number; i++) {
      var entry = json.feed.entry[0];
      //console.log(entry)
      if (entry === undefined) {
        entry = json.feed.entry[i + ''];
      }
      //console.log(entry.title)
      //console.log(entry.title['$t'])
      //console.log(entry.title.$t)
      var randompoststitle = entry.title.$t;

      if (randompoststitle.length > 40) {
        randompoststitle = randompoststitle.substr(0, 40) + "...";
      }
      // 20160625 最新標題，把/之前的文字加上粗體
      if (randompoststitle.indexOf(" / ") > 0) {
        var _slash_pos = randompoststitle.indexOf(" / ");
        randompoststitle = "<strong>" + randompoststitle.substr(0, _slash_pos) + "</strong>" + randompoststitle.substr(_slash_pos);
      } else {
        randompoststitle = "<strong>" + randompoststitle + "</strong>";
      }

      if ('content' in entry) {
        var randompostsnippet = entry.content.$t;
      } else {
        if ('summary' in entry) {
          var randompostsnippet = entry.summary.$t;
        } else {
          var randompostsnippet = "";
        }
      }
      ;
      randompostsnippet = randompostsnippet.replace(/<[^>]*>/g, "");
      if (randompostsnippet.length < randomposts_chars) {
        var randomposts_snippet = randompostsnippet;
      } else {
        randompostsnippet = randompostsnippet.substring(0, randomposts_chars);
        var whitespace = randompostsnippet.lastIndexOf(" ");
        randomposts_snippet = randompostsnippet.substring(0, whitespace) + "&#133;";
      }
      ;
      for (var j = 0; j < entry.link.length; j++) {
        if ('thr$total' in entry && entry.thr$total.$t > 0) {
          var randomposts_commentsnum = entry.thr$total.$t + ' ' + randomposts_comments;
        } else {
          randomposts_commentsnum = randomposts_commentsd;
        }
        ;
        if (entry.link[j].rel === 'alternate') {
          var randompostsurl = entry.link[j].href;
          var randomposts_date = entry.published.$t;
          if ('media$thumbnail' in entry) {
            var randompoststhumb = entry.media$thumbnail.url;
          } else {
            randompoststhumb = "http://3.bp.blogspot.com/-5SoVe1K6JSk/Utl0OOmucAI/AAAAAAAAF6E/hQghgD_EJdQ/s1600/no_thumb.png";
          }
        }
      }
      ;
      var _li = '';
      //document.write('<li>');
      _li = _li + '<dd>';
      _li = _li + '<a href="' + randompostsurl + '" rel="nofollow" title="' + randomposts_snippet + '">';
      //document.write('<a href="' + randompostsurl + '" rel="nofollow"><img alt="' + randompoststitle + '" src="' + randompoststhumb + '"/></a>');
      _li = _li + '<img alt="' + randompoststitle + '" src="' + randompoststhumb + '"/>';
      //document.write('<div><a href="' + randompostsurl + '" rel="nofollow">' + randompoststitle + '</a></div>');

      _li = _li + randompoststitle;

      if (randomposts_details === true) {
        //document.write('<span><div  class="random-info">' + randomposts_date.substring(8, 10) + '.' + randomposts_date.substring(5, 7) + '.' + randomposts_date.substring(0, 4) + ' - ' + randomposts_commentsnum) + '</div></span>'

        _li = _li + '<span><div  class="random-info">('
                + randomposts_date.substring(0, 4)
                + '-' + randomposts_date.substring(8, 10)
                + '-' + randomposts_date.substring(5, 7)

                + ') ' + randomposts_commentsnum
                + '</span>';
      }
      ;
      //document.write('<br/><div class="random-summary">' + randomposts_snippet + '</div><div style="clear:both"></div></li>')
      //_li = _li + '<br/><div class="random-summary">' + randomposts_snippet + '</div>';
      _li = _li + '<div style="clear:both"></div>';
      _li = _li + '</a>' + '</dd>';
      _ul.append(_li);
    //}
  };
  
  let url = "/feeds/posts/default?alt=json-in-script&max-results=0&callback=?"
  let callback = function (data) {
    randomposts(data)
    //console.log(data)
    
    getvalue();
    //for (var i = 0; i < randomposts_number; i++) {
    //document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts\"><\/script>')
    //$.getScript('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts');
    //};

    var _loop = function (_i) {
      //console.log([_i, randomposts_number]);
      //console.log(_i)
      if (_i < randomposts_current.length) {
        //console.log('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=random_posts');
        
        //$.getScript('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=random_posts');
        let url = '/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=?'
        //console.log(url)
        lscacheHelper.getJSON(url, (data) => {
          //console.log(data)
          random_posts(data)
        })
        _i++
        //console.log(_i)
        _loop(_i)
      }
    }
    _loop(0)
  }

  //console.log("/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts");
  //$.getScript(url, callback);
  //console.log(url)
  lscacheHelper.getJSON(url, callback, 60 * 24 * 30)
};

// --------------
// 20160625 隨機文章
$(function () {
  _load_random_posts();

  $('.widget.HTML.random > a.button').click(_load_random_posts)
});


/***/ }),

/***/ "./lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js":
/*!**************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

puliHandlePost = function () {
  var pHP = this;
  pHP.title = "";
  pHP.divID = "puliHandlePostDiv";
  pHP.loading = "Loading...";
  pHP.ulID = "puliHandlePostUl";
  pHP.ulClass = "";
  pHP.liClass = "puliHandlePost-item-title";
  pHP.postshow = 10;
  pHP.titlelen = '';
  pHP.layout = "%Y%-%M%-%D% %authorname%<br />%title%";
  pHP.bloggerName = "pulipuli";
  pHP.tagname = "";
  pHP.callback;

  pHP.compareentry = function (a, b) {
    order = Date.parse(a.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
            '$1/$2/$3 $4 GMT')) - Date.parse(b.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
            '$1/$2/$3 $4 GMT'));
    return 0 - order;
  };

  pHP.handlePosts = function (json) {
    var title = '';
    if (pHP.title !== '') {
      title = '<h2>' + pHP.title + '</h2>';
    }
    var temp = title + '<ul id="' + pHP.ulID + '">';
    var postshow = pHP.postshow;
    var titlelen = pHP.titlelen;
    var layout = pHP.layout;
    var sortentry = json.feed.entry.sort(compareentry);
    for (var i = 0, post; post = sortentry[i]; i++) {
      if (i >= postshow) {
        break;
      }
      var title = post.title.$t;
      if (titlelen !== "" && title.length > titlelen) {
        title = title.substr(0, titlelen) + "...";
      }

      // 20160625 最新標題，把/之前的文字加上粗體
      if (title.indexOf(" / ") > 0) {
        var _slash_pos = title.indexOf(" / ");
        title = "<strong>" + title.substr(0, _slash_pos) + "</strong>" + title.substr(_slash_pos);
      } else {
        title = "<strong>" + title + "</strong>";
      }

      var link = post.link[4].href;
      if (link.substr(link.length - 5, 5) !== ".html") {
        //如果擷取到的網址不是html網頁的話
        var _links = post.link;
        for (var _l = 0; _l < _links.length; _l++)
        {
          link = _links[_l].href;
          if (link.substr(link.length - 5, link.length) === ".html") {
            break;
          }
        }
      }
      var title_link = '<a href="' + link + '">' + title + '</a>';
      var authorname = post.author[0].name.$t;
      var timestamp = post.published.$t.substr(0, 10);
      var y = timestamp.substr(0, 4);
      var m = timestamp.substr(5, 2);
      var d = timestamp.substr(8, 2);

      var layout_replace = layout.replace("%title%", title_link).replace("%Y%", y).replace("%M%", m).replace("%D%", d).replace("%authorname%", authorname);

      temp += '<li class="' + pHP.liClass + '">' + layout_replace + '</li>';
    }
    temp += "</ul>";
    jQuery("#" + pHP.divID).html(temp);

    if (typeof (pHP.callback) === "function") {
      pHP.callback();
    }
  };

  pHP.load = function (nodeID) {
    jQuery("#" + nodeID).html('<div id="' + pHP.divID + '"><h2>' + pHP.loading + '</h2></div>');

    var tagname = pHP.tagname;
    if (tagname.substr(0, 3) !== "/-/"
            && tagname !== "") {
      tagname = "/-/" + tagname;
    }

    let url = "/feeds/posts/summary" + tagname + "/?alt=json-in-script&callback=?"
    let callback = function (data) {
      pHP.handlePosts(data)
    }
    //jQuery.getJSON(url, callback);
    lscacheHelper.getJSON(url, callback)
    return pHP;
  };
  return pHP;
};



/***/ }),

/***/ "./lib-for-link/src/global-footer/puli-guest-book/init.js":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/global-footer/puli-guest-book/init.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 布丁式Blogger留言板
// @param {Object} config 設定
jQuery.puliGuestBook({
    blogID: "16607461",    //blog的ID
    postID: "113544406852218769",    //post的ID
    url: "/2005/12/blogger_113544406852218769.html#comment-editor",    //訂閱張貼意見的網址，或是文章ID:115667103250300740
    //css: "//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/puliGuestBook/puliGuestBook.css",    //CSS樣式表
    container: ".puliGuestBook",    //顯示留言的元素
    listNumber: 20,    //顯示留言數量。超過此數量時，會顯示「閱讀全部留言」的連結。
    adminName: 'Pulipuli Chen',    //Blog主人的名字
    adminPhoto: '//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/',    //部落格主人的照片
    anonymous: '匿名',    //匿名者的名字
    readMore: '閱讀全部留言',    //閱讀全部留言連結的名稱
    write: '撰寫留言',    //撰寫留言連結的名稱
    reload: '重新讀取',    //重新讀取連結的名稱
    addLink: "/2005/12/blogger_113544406852218769.html#comment-editor", //撰寫留言的按鈕連結
    disableBottomButtons: true
});

/***/ }),

/***/ "./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css":
/*!****************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./puli-guest-book.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css");

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

/***/ "./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js":
/*!***************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 if (typeof(jQuery) == 'undefined')
 {
 document.write("<sc"+"ript src='http://www.google.com/jsapi' type='text/javascript'></scr"+"ipt>\n"
 + "<scri"+"pt type='text/javasc"+"ript'>google.load('jquery','1.2.6');</sc"+"ript>");
 }
 */

/**
 * 布丁式Blogger留言板
 * @param {Object} config 設定
 * 用法：
 $.puliGuestBook({
 blogID: "32606656",    //blog的ID
 postID: "115706763683822273",    //post的ID
 url: "http://pulipuli.blogspot.com/feeds/6921201361608060798/comments/default",    //訂閱張貼意見的網址，或是文章ID:115667103250300740
 css: "https://sites.google.com/site/puddingchen35/Home/puliguestbook/puliGuestBook.css",
 container: "#puliGuestBook",    //顯示留言的元素
 listNumber: 20,    //顯示留言數量。超過此數量時，會顯示「閱讀全部留言」的連結。
 adminName: '布丁布丁吃布丁',    //Blog主人的名字
 adminPhoto: 'http://1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/',    //部落格主人的照片
 anonymous: '匿名',    //匿名者的名字
 readMore: '閱讀全部留言',    //閱讀全部留言連結的名稱
 write: '撰寫留言',    //撰寫留言連結的名稱
 reload: '重新讀取'    //重新讀取連結的名稱
 });
 */
jQuery.puliGuestBook = function (config) {

  var getParam = function (index, defaultValue) {
    if (typeof (config[index]) === 'undefined') {
      return defaultValue;
    } else {
      return config[index];
    }
  };

  var getBaseLink = function () {
    var host = location.href;

    // by Pudding Chen 20120609
    //因為字尾會被換成tw，所以不能這樣做了
    //var pos = host.indexOf('.com/');
    //host = host.substring(0, pos + 5);

    var _blogspot_str = '.blogspot.';
    var _blogspot_pos = host.indexOf(_blogspot_str);
    var _slash_pos = host.indexOf("/", _blogspot_pos);
    host = host.substring(0, _slash_pos + 1);

    return host;
  };

  //var css = getParam('css', 'https://sites.google.com/site/puddingchen35/Home/puliguestbook/puliGuestBook.css');
  /*
   var css = getParam('css', '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/puliGuestBook/puliGuestBook.css');
   if (jQuery('link[href="' + css + '"]').length === 0) {
   jQuery("<link type='text/css' rel='stylesheet' href='" + css + "' /> ").appendTo(jQuery('head'));
   }
   */

  var _container_id = getParam('container', '#puliGuestBook');
  var container = jQuery(_container_id);
  if (container.length === 0) {
    var _id = _container_id.substr(1);
    document.write('<div id="' + _id + '">'
            //+ 'Loading...'
            + '</div>');

    container = jQuery(_container_id);
  }
  container.addClass('puli-guest-book')

  var blogID = getParam('blogID', null);
  var postID = getParam('postID', null);
  var url = null;
  if (blogID === null && postID === null) {
    url = getParam('url', null);
    if (url === null) {
      window.alert('puliGuestBook沒有設定URL');
      return;
    }


    if (url.substring(0, 7) !== 'http://') {
      var host = location.href;

      // by Pudding Chen 20120609
      //因為字尾會被換成tw，所以不能這樣做了
      //var pos = host.indexOf('.com/');
      //host = host.substring(0, pos + 5);

      var _blogspot_str = '.blogspot.';
      var _blogspot_pos = host.indexOf(_blogspot_str);
      var _slash_pos = host.indexOf("/", _blogspot_pos);
      host = host.substring(0, _slash_pos + 1);

      //url = host + 'feeds/' + url + '/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli';
      url = host + 'feeds/' + url + '/comments/full?alt=json-in-script&callback=?';
    }

    var needle = 'default';
    if (url.substring(url.length - needle.length, url.length) === needle) {
      url = url.substring(0, url.length - needle.length);
      //url = url + 'full?alt=json-in-script&callback=handleGuestbookPulipuli';
      url = url + 'full?alt=json-in-script&callback=?';
    }
  } else {
    var host = getBaseLink();

    //url = host + 'feeds/' + postID + '/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli';
    url = host + 'feeds/' + postID + '/comments/full?alt=json-in-script&callback=?';
  }

  var listID = getParam('listID', 'Feedpulipuli_guestbookDisplay');

  var listNumber = getParam('listNumber', 20);
  var adminName = getParam('adminName', '布丁布丁吃布丁');
  //var adminPhoto = getParam('adminPhoto', 'http://1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/');
  var adminPhoto = getParam('adminPhoto', null);
  var anonymous = getParam('anonymous', '匿名');
  var readMore = getParam('readMore', '閱讀全部的留言');
  var write = getParam('write', '撰寫留言');
  var reload = getParam('reload', '重新讀取');
  var addLink = getParam('addLink', null);
  var disableBottomButtons = getParam('disableBottomButtons', false);

  let handleGuestbookPulipuli = function (json) {
    //document.getElementById("pulipuli_guestbook").innerHTML = '';
    container.html('');

    var temp = '<ul id="' + listID + '" class="guest-book-list">';
    var postshow = listNumber;
    var titlelen = '20';
    var layout = `<a class="date" href="%COMMENT_LINK%" target="_blank">%Y%-%M%-%D% (查看留言)</a>
      <strong class="name">%authorname%</strong>:<br />
      %comment%`;
    var sortentry = [];
    try
    {
      sortentry = json.feed.entry.sort(function (a, b) {
        order = Date.parse(a.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
                '$1/$2/$3 $4 GMT')) - Date.parse(b.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/,
                '$1/$2/$3 $4 GMT'));
        return 0 - order;
      });
    } catch (e) {
      // do nothing
    }
    var firstPost = null;
    //console.log('========要顯示post了============')
    for (var i = 0, post; post = sortentry[i]; i++) {
      //console.log(post)
      if (i === 0) {
        firstPost = post;
      }
      if (i >= postshow) {
        break;
      }
      var title = post.content.$t;
      var fulltitle = title.replace("\u003CBR/\u003E", "<br />\n");

      //var tmp = fulltitle.split('<br />'); fulltitle = tmp.join('&nbsp;\n');
      //var tmp = fulltitle.split('"'); fulltitle = tmp.join('&quot;');
      //var tmp = fulltitle.split('<'); fulltitle = tmp.join('&lt;');
      //var tmp = fulltitle.split('>'); fulltitle = tmp.join('&gt;');

      /**
       * 移除掉過長長度留言刪除的功能
       * @type String
       */

      //if (titlelen != "" && title.length > titlelen)
      //  title = title.substr(0, titlelen) + "...";

      var title_temp = "";
      for (var j = 0; j < title.length; j++) {
        var temp_char = title.substr(j, 1);
        if (temp_char === "<") {
          var temp_j = title.indexOf(">", j);
          if (temp_j !== -1)
            j = temp_j;
          continue;
        } else {
          title_temp = title_temp + temp_char;
        }
      }
      title = title_temp;
      var link = post.link[2].href;
      var title_link = fulltitle;

      /**
       * 取得comment id
       * "tag:blogger.com,1999:blog-16607461.post-2375590755261769329"
       * http://blog.pulipuli.info/2005/12/blogger_113544406852218769.html?showComment=1547392640473#c2375590755261769329
       * @type String
       */
      let commentId = post.id.$t
      commentId = commentId.slice(commentId.lastIndexOf('.post-') + 6, commentId.length)
      //console.log(commentId)
      let commentLink = addLink
      if (commentLink.indexOf('#')) {
        commentLink = commentLink.slice(0, commentLink.indexOf('#'))
      }
      commentLink = commentLink + '#c' + commentId

      var authorname = post.author[0].name.$t

      if (authorname === 'Anonymous') {
        authorname = anonymous;
      }

      if (authorname === adminName
              && adminPhoto !== null) {
        authorname = '<img src="' + adminPhoto + '" class="admin-photo" border="0" /> '
                + authorname;
      }

      var uri = '';
      if (typeof (post.author[0].uri) !== 'undefined') {
        //uri = post.author[0].uri.$t;
        uri = commentLink // 20190301 換成連結到comment那篇
        authorname = '<a href="' + uri + '" target="_blank">' + authorname + '</a>';
      }

      var timestamp = post.published.$t.substr(0, 10);
      var y = timestamp.substr(0, 4);
      var m = timestamp.substr(5, 2);
      var d = timestamp.substr(8, 2);

      var layout_replace = layout.replace("%comment%", title_link)
              .replace("%Y%", y)
              .replace("%M%", m)
              .replace("%D%", d)
              .replace("%authorname%", authorname)
              .replace("%COMMENT_LINK%", commentLink)

      var odd = 0;
      if (i % 2 === 1) {
        odd = 1;
      }
      temp += '<li class="guest-book-li guest-book-li-' + odd + '"><span class="item-title">' + layout_replace + '</span></li>';
    }

    var add_link = addLink;
    var rss_link = '';
    var reload_cmd = '';
    //if (firstPost != null)
    if (true) {
      var baseLink = null;
      if (blogID === null && postID === null && firstPost !== null)
      {
        link = firstPost.link[0].href;
        //http://www.blogger.com/feeds/16607461/1187506547871300947/comments/default/5372166020783852457
        var parts = link.split('/');
        blogID = parts[4];
        postID = parts[5];

        var baseLink = firstPost.link[2].href;
        var pos = baseLink.indexOf('.com/');
        baseLink = baseLink.substring(0, pos + 5);
      } else
        baseLink = getBaseLink();

      rss_link = baseLink + 'feeds/' + postID + '/comments/default';
      if (add_link === null) {
        add_link = 'https://www.blogger.com/comment.g?blogID=' + blogID + '&postID=' + postID;
      }
      //https://www.blogger.com/comment.g?blogID=16607461&postID=113544406852218769
      reload_cmd = "jQuery.getScript('" + baseLink + "feeds/" + postID + "/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli')";

      $('#sidebar .guestbook a.icon.reload').click(() => {
        //jQuery.getScript(baseLink + "feeds/" + postID + "/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli")
        let url = baseLink + "feeds/" + postID + "/comments/full?alt=json-in-script&callback=?"
        lscacheHelper.getJSON(url, handleGuestbookPulipuli)
      })
      //$.getScript('http://pulipuli.blogspot.com/feeds/1187506547871300947/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli');
    }

    if (post = sortentry[i]) {
      link = add_link;

      temp += '<li class="guest-book-li readmore"><span class="item-title">'
              + '<a href="' + link + '#comments" target="guestbook_write">' + readMore + '</a>'
              + '</span></li>';
    }
    temp += "</ul>";

    if (disableBottomButtons === false) {
      temp += '<div class="guestbook-write">'
              //+ ' <a href="'+rss_link+'" style="float:right;margin-right:1em;font-size: 1.5em;line-height: 1em;">'
              //+ '<img src="http://3.bp.blogspot.com/_yr4MQB4zDus/Ru35yvgloDI/AAAAAAAABOQ/bbtw-pQhpOk/s200/rss.gif" border="0" />'
              //+ '<i class="fa fa-rss-square"></i>'
              //+ '</a>'

              + ' <a href="' + add_link + '" class="write" target="guestbook_write">' + write + '</a>'
              + ' <a class="write" onclick="' + reload_cmd + '">' + reload + '</a>'
              + '</div>';
    }

    //document.getElementById("pulipuli_guestbook").innerHTML = temp;
    container.html(temp);
  };	//function handleGuestbookPulipuli(json) {

  //http://pulipuli.blogspot.com/feeds/113544406852218769/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli
  //http://pulipuli.blogspot.com/feeds/6921201361608060798/comments/default 
  /*
  jQuery.ajax({
    url: url,
    dataType: 'script',
    cache: false
  });
  */
  lscacheHelper.getJSON(url, handleGuestbookPulipuli)

};    //$.puliGuestBook = function (config) {



/***/ }),

/***/ 1:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css ./lib-for-link/src/global-footer/puli-guest-book/init.js ./lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js ./lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js ./lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js ./lib-for-link/src/global-footer/blogger-feed-loader/init.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js */"./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css */"./lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css");
__webpack_require__(/*! ./lib-for-link/src/global-footer/puli-guest-book/init.js */"./lib-for-link/src/global-footer/puli-guest-book/init.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js */"./lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js */"./lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js */"./lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/global-footer/blogger-feed-loader/init.js */"./lib-for-link/src/global-footer/blogger-feed-loader/init.js");


/***/ })

/******/ });
//# sourceMappingURL=global-footer.js.map