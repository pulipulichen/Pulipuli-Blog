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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/admin-tools/article-download/FileSaver.js":
/*!********************************************************************!*\
  !*** ./lib-for-link/src/admin-tools/article-download/FileSaver.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";
  /*
  * FileSaver.js
  * A saveAs() FileSaver implementation.
  *
  * By Eli Grey, http://eligrey.com
  *
  * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
  * source  : http://purl.eligrey.com/github/FileSaver.js
  */
  // The one and only way of getting global scope in all environments
  // https://stackoverflow.com/q/3277182/1008999

  var _global = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.window === window ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self.self === self ? self : (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global.global === global ? global : void 0;

  function bom(blob, opts) {
    if (typeof opts === 'undefined') opts = {
      autoBom: false
    };else if (_typeof(opts) !== 'object') {
      console.warn('Depricated: Expected third argument to be a object');
      opts = {
        autoBom: !opts
      };
    } // prepend BOM for UTF-8 XML and text/* types (including HTML)
    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(0xFEFF), blob], {
        type: blob.type
      });
    }

    return blob;
  }

  function download(url, name, opts) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      saveAs(xhr.response, name, opts);
    };

    xhr.onerror = function () {
      console.error('could not download file');
    };

    xhr.send();
  }

  function corsEnabled(url) {
    var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

    xhr.open('HEAD', url, false);
    xhr.send();
    return xhr.status >= 200 && xhr.status <= 299;
  } // `a.click()` doesn't work for all browsers (#465)


  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent('click'));
    } catch (e) {
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }

  var saveAs = _global.saveAs || ( // probably in some web worker
  (typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || window !== _global ? function saveAs() {}
  /* noop */
  // Use download attribute first if possible (#193 Lumia mobile)
  : 'download' in HTMLAnchorElement.prototype ? function saveAs(blob, name, opts) {
    var URL = _global.URL || _global.webkitURL;
    var a = document.createElement('a');
    name = name || blob.name || 'download';
    a.download = name;
    a.rel = 'noopener'; // tabnabbing
    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob;

      if (a.origin !== location.origin) {
        corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
      } else {
        click(a);
      }
    } else {
      // Support blobs
      a.href = URL.createObjectURL(blob);
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
      }, 4E4); // 40s

      setTimeout(function () {
        click(a);
      }, 0);
    }
  } // Use msSaveOrOpenBlob as a second approach
  : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
    name = name || blob.name || 'download';

    if (typeof blob === 'string') {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        var a = document.createElement('a');
        a.href = blob;
        a.target = '_blank';
        setTimeout(function () {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  } // Fallback to using FileReader and a popup
  : function saveAs(blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only avalible on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank');

    if (popup) {
      popup.document.title = popup.document.body.innerText = 'downloading...';
    }

    if (typeof blob === 'string') return download(blob, name, opts);
    var force = blob.type === 'application/octet-stream';

    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;

    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((isChromeIOS || force && isSafari) && (typeof FileReader === "undefined" ? "undefined" : _typeof(FileReader)) === 'object') {
      // Safari doesn't allow downloading of blob urls
      var reader = new FileReader();

      reader.onloadend = function () {
        var url = reader.result;
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
        if (popup) popup.location.href = url;else location = url;
        popup = null; // reverse-tabnabbing #460
      };

      reader.readAsDataURL(blob);
    } else {
      var URL = _global.URL || _global.webkitURL;
      var url = URL.createObjectURL(blob);
      if (popup) popup.location = url;else location.href = url;
      popup = null; // reverse-tabnabbing #460

      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 4E4); // 40s
    }
  });
  _global.saveAs = saveAs.saveAs = saveAs;

  if (true) {
    module.exports = saveAs;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib-for-link/src/admin-tools/article-download/article-download.js":
/*!***************************************************************************!*\
  !*** ./lib-for-link/src/admin-tools/article-download/article-download.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./jszip.js */ "./lib-for-link/src/admin-tools/article-download/jszip.js");

__webpack_require__(/*! ./jszip-utils.js */ "./lib-for-link/src/admin-tools/article-download/jszip-utils.js"); //require('./beautify.js')
//require('./beautify-css.js')


__webpack_require__(/*! ./beautify-html.js */ "./lib-for-link/src/admin-tools/article-download/beautify-html.js");

__webpack_require__(/*! ./FileSaver.js */ "./lib-for-link/src/admin-tools/article-download/FileSaver.js");

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var extractExt = function extractExt(link) {
  var urlObject = url.parse(link);
  var ext = null;

  if (urlObject.pathname !== null && urlObject.pathname.lastIndexOf('.') > -1) {
    ext = urlObject.pathname.slice(urlObject.pathname.lastIndexOf('.') + 1, urlObject.pathname.length);

    if (ext.indexOf('/') > -1 || ext.indexOf("'") > -1 || ext.indexOf(';') > -1 || ext.indexOf(':') > -1) {
      ext = null;
    }
  }

  return ext;
};

articleDownload = {
  getRenderedPost: function getRenderedPost() {
    var article = $('#main .post .entry-content > article').clone(); // 移除標題 & meta

    article.find("h1:first").remove(); // 移除lightbox

    article.find('.lightbox-group').each(function (i, ele) {
      $(ele).removeClass('lightbox-group').removeAttr('data-lightbox');
    }); // 移除目錄

    article.find('.puli-utils-append').remove(); // 把圖片的網址從https改成 //

    var linkRemoveHttpHeader = function linkRemoveHttpHeader(link) {
      if (link.startsWith('http://')) {
        link = link.slice(5, link.length);
      } else if (link.startsWith('https://')) {
        link = link.slice(6, link.length);
      }

      return link;
    };
    /*
    let imgUrlPatterns = [
      '.googleusercontent.com/',
      '.bp.blogspot.com/'
    ]
    
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        ele.href = linkRemoveHttpHeader(ele.href)
        $(ele).removeAttr('target')
      })
       article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        ele.src = linkRemoveHttpHeader(ele.src)
      })
    })
    */


    return article;
  },
  copyToClip: function copyToClip(str) {
    var listener = function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    };

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  },
  beautifyHTML: function beautifyHTML(html) {
    return html_beautify(html, {
      "indent_size": 2,
      "indent_char": " ",
      "indent_with_tabs": false
    });
  },
  copyHTML: function copyHTML() {
    //console.log(beautify(data, { indent_size:2 }));
    //console.log(js_beautify);
    //console.log(html_beautify);
    //return
    var article = this.getRenderedPost();
    var html = this.beautifyHTML(article.html()); //console.log(html);

    this.copyToClip(html);
  },
  getArticleFilename: function getArticleFilename() {
    var articleDate = $('article .meta1 .timestamp').text().trim().split('/');
    var date = {
      year: parseInt(articleDate[2].trim(), 10),
      month: parseInt(articleDate[0].trim(), 10),
      day: parseInt(articleDate[1].trim(), 10)
    };

    var paddingZero = function paddingZero(n) {
      if (n < 10) {
        return '0' + n;
      } else {
        return n;
      }
    };

    var pathname = location.pathname;
    pathname = pathname.slice(1, pathname.length);
    var filename = pathname.split("/");
    filename = date.year + '-' + paddingZero(date.month) + '-' + paddingZero(date.day) + '_' + filename[filename.length - 1]; // 移除最後的html

    if (filename.endsWith(".html")) {
      filename = filename.slice(0, filename.length - 5);
    }

    return filename;
  },
  getMetadata: function getMetadata() {
    var metadata = {};
    var h1 = $('article > h1').clone();
    h1.find('div.meta1').remove();
    metadata.title = h1.text().trim();
    var articleDate = $('article .meta1 .timestamp').text().trim().split('/');
    metadata.date = {
      year: parseInt(articleDate[2].trim(), 10),
      month: parseInt(articleDate[0].trim(), 10),
      day: parseInt(articleDate[1].trim(), 10)
    };
    metadata.labels = [];
    $('article .meta1 .label-info > a').each(function (i, ele) {
      metadata.labels.push(ele.innerHTML.trim());
    });
    var commentCount = $('article .meta1 .comment-count').text().trim();
    commentCount = commentCount.slice(0, commentCount.indexOf(' '));
    commentCount = parseInt(commentCount, 10);
    metadata.commentCount = commentCount;
    var shareCount = $('.addthis-smartlayers .at-custom-sidebar-count').text();
    shareCount = parseInt(shareCount, 10);
    metadata.shareCount = shareCount;
    return metadata;
  },
  getComments: function getComments() {
    var comments = [];
    return comments;
  },
  parseImageList: function parseImageList(article) {
    var imageList = {};
    var filenameList = [];
    var imgUrlPatterns = ['.googleusercontent.com/', '.bp.blogspot.com/', '.google.com/puddingchen.35/'];
    var allowExtList = ['apk', 'arff', 'au3', 'bat', 'conf', 'csl', 'css', 'csv', 'doc', 'docx', 'emf', 'exe', 'fdf', 'gif', 'ico', 'ini', 'java', 'jpe', 'jpg', 'JPG', 'js', 'lrc', 'mas', 'model', 'ods', 'odt', 'pdf', 'png', 'ppt', 'pptx', 'py', 'r', 'R', 'reg', 'sav', 'sh', 'sql', 'ssa', 'svg', 'swf', 'tmpl', 'ttf', 'txt', 'wav', 'xls', 'xlsx', 'xml', 'yaml'];

    var pushImageList = function pushImageList(link) {
      if (link.indexOf('/blob/') > -1 || link.indexOf('skydrive.live.com/') > -1 || link.indexOf('/pudding.miroko.tw/') > -1 || link.indexOf('/www.mediafire.com/') > -1 || link.indexOf('/yandex.com/') > -1 || link.indexOf('.flashmirrors.com') > -1 || link.indexOf('/puddingchen.35.googlepages.com/') > -1) {
        return;
      }

      var ext = extractExt(link);

      if (allowExtList.indexOf(ext) === -1) {
        return;
      } // https://lh3.googleusercontent.com/-quhLaYWL29s/WCsAVr6SwpI/AAAAAAAC9iI/F62sfdA4C90/image_thumb%25255B4%25255D.png?imgmax=800
      // http://2.bp.blogspot.com/-L-p05d-w9LA/XHbAUssrMPI/AAAAAAAED78/31DtDe9q6JcGr77dvTTUOna6huIYwbvEgCK4BGAYYCw/s0/%25E7%25B0%25A1%25E5%25A0%25B11.png


      if (typeof imageList[link] === 'string') {
        // 表示已經加入了
        return;
      }

      var filename = link;
      filename = filename.slice(filename.lastIndexOf('/') + 1, filename.length);

      if (filename.lastIndexOf("?") > -1) {
        filename = filename.slice(0, filename.lastIndexOf("?"));
      } // unescape

      /*
      while (filename !== unescape(filename)) {
        filename = unescape(filename)
      }
      */


      while (filename !== decodeURIComponent(filename)) {
        filename = decodeURIComponent(filename);
      }
      /*
      if (!filename.endsWith('.jpg')
              && !filename.endsWith('.png')
              && !filename.endsWith('.gif')) {
        // 我覺得這個可能用不到
        filename = filename + '.png'
      }
      */


      if (filenameList.indexOf(filename) > -1) {
        var count = 0;
        var filenameHeader = filename.slice(0, filename.lastIndexOf('.'));
        var filenameFooter = filename.slice(filename.lastIndexOf('.'), filename.length);
        var tempFilename = filenameHeader + '-' + count + filenameFooter;

        while (filenameList.indexOf(tempFilename) > -1) {
          count++;
          tempFilename = filenameHeader + '-' + count + filenameFooter;
        }

        filename = tempFilename;
      }

      filenameList.push(filename);
      imageList[link] = filename;
    };
    /*
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.href)
      })
       article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.src)
      })
    })
    */


    article.find('a[href]').each(function (i, ele) {
      pushImageList(ele.href);
    });
    article.find('img[src]').each(function (i, ele) {
      pushImageList(ele.src);
    }); //console.log(filenameList.length)
    //console.log(filenameList)

    return imageList;
  },
  getImageFromList: function getImageFromList(imageList, callback) {
    var linkList = [];
    var linkFileList = {};

    for (var link in imageList) {
      linkList.push(link);
      linkFileList[link] = {
        'filename': imageList[link]
      };
    }

    var loop = function loop(i) {
      if (i < linkList.length) {
        var _link = linkList[i];
        JSZipUtils.getBinaryContent(_link, function (err, data) {
          if (err) {
            //throw err; // or handle the error
            // 下載不到檔案的話
            delete linkFileList[_link];
          } else {
            linkFileList[_link].data = data;
          }

          i++;
          loop(i);
        });
      } else {
        if (typeof callback === "function") {
          callback(linkFileList);
        }
      }
    };

    loop(0);
  },
  replaceArticleLink: function replaceArticleLink(article, linkFileList) {
    var _loop = function _loop(link) {
      var filename = 'assets/' + linkFileList[link].filename; //console.log(filename)

      article.find('a[href="' + link + '"]').each(function (i, ele) {
        ele.href = filename;
      });
      article.find('img[src="' + link + '"]').each(function (i, ele) {
        ele.src = filename;
      });
    };

    for (var link in linkFileList) {
      _loop(link);
    }

    return article;
  },
  downloadZIP: function downloadZIP(filename, zip, callback) {
    zip.generateAsync({
      type: "blob"
    }).then(function (content) {
      // see FileSaver.js
      var filesaver = saveAs(content, filename + ".zip");
      setTimeout(function () {
        if (typeof callback === 'function') {
          callback();
        }
      }, 3000);
    });
  },
  downloadArticle: function downloadArticle() {
    var _this = this;

    //console.log('downloadArticle')
    //console.log(JSZip)
    //console.log(this.getMetadata())
    if ($('.addthis-smartlayers .at-custom-sidebar-count:visible').length === 0) {
      setTimeout(function () {
        _this.downloadArticle();
      }, 3000);
      return;
    }

    var filename = this.getArticleFilename();
    var zip = new JSZip();
    var article = this.getRenderedPost();
    var imageList = this.parseImageList(article); //console.log(imageList)
    //return 

    this.getImageFromList(imageList, function (linkFileList) {
      article = _this.replaceArticleLink(article, linkFileList);

      var articleHTML = _this.beautifyHTML(article.html());

      zip.file("article.html", articleHTML);
      var assets = null;

      for (var link in linkFileList) {
        if (assets === null) {
          assets = zip.folder("assets");
        }

        var item = linkFileList[link];
        assets.file(item.filename, item.data, {
          binary: true
        });
      } // --------------------------


      var metadata = _this.getMetadata();

      metadata = JSON.stringify(metadata, null, 2);
      zip.file("metadata.json", metadata); // 下載comments的json

      var commentJSONLink = $('.comment-form-tool a.feed.json').attr('href');
      commentJSONLink = commentJSONLink + '-in-script&callback=?';
      $.getJSON(commentJSONLink, function (commentJSON) {
        commentJSON = JSON.stringify(commentJSON, null, 2);
        zip.file("comments.json", commentJSON);

        _this.downloadZIP(filename, zip, function () {
          if (location.href.endsWith('downloadArticle=true')) {
            window.close();
          }
        });
      });
    }); //console.log(imageList)
    // loading a file and add it in a zip file

    /*
    JSZipUtils.getBinaryContent("https://lh3.googleusercontent.com/-u-i8xAlRMUw/XDXF1ELCZ-I/AAAAAAAD-oE/1I3wbxMnkC01ZvX07hpLTiZUpdPRPh9gQCHMYCw/%252111_thumb%255B1%255D?imgmax=800", function (err, data) {
       if(err) {
          throw err; // or handle the error
       }
       var zip = new JSZip();
       zip.file("picture.png", data, {binary:true});
       zip.generateAsync({type:"blob"})
      .then((content) => {
          // see FileSaver.js
          saveAs(content,"a.zip");
      });
    });
    */

    /*
    let filename = this.getArticleFilename()
    var zip = new JSZip();
    
    let downloadZip = function () {
      //var img = zip.folder("images");
      //img.file("smile.gif", imgData, {base64: true});
      zip.generateAsync({type:"blob"})
      .then((content) => {
          // see FileSaver.js
          saveAs(content,filename + ".zip");
      });
      //let article = this.getRenderedPost()
    } 
    
    
    */
  }
};

/***/ }),

/***/ "./lib-for-link/src/admin-tools/article-download/beautify-html.js":
/*!************************************************************************!*\
  !*** ./lib-for-link/src/admin-tools/article-download/beautify-html.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* AUTO-GENERATED. DO NOT MODIFY. */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <einar@beautifier.io>
    https://beautifier.io/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
    inline (defaults to inline tags) - list of tags to be considered inline tags
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    content_unformatted (defaults to ["pre", "textarea"] tags) - list of tags, whose content shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
    end_with_newline (false)          - end with a newline
    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false,
      'extra_liners': ['/html']
    });
*/
(function () {
  /* GENERATED_BUILD_OUTPUT */
  var legacy_beautify_html =
  /******/
  function (modules) {
    // webpackBootstrap

    /******/
    // The module cache

    /******/
    var installedModules = {};
    /******/

    /******/
    // The require function

    /******/

    function __webpack_require__(moduleId) {
      /******/

      /******/
      // Check if module is in cache

      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/
      // Create a new module (and put it into the cache)

      /******/


      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,

        /******/
        l: false,

        /******/
        exports: {}
        /******/

      };
      /******/

      /******/
      // Execute the module function

      /******/

      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/

      /******/
      // Flag the module as loaded

      /******/

      module.l = true;
      /******/

      /******/
      // Return the exports of the module

      /******/

      return module.exports;
      /******/
    }
    /******/

    /******/

    /******/
    // expose the modules object (__webpack_modules__)

    /******/


    __webpack_require__.m = modules;
    /******/

    /******/
    // expose the module cache

    /******/

    __webpack_require__.c = installedModules;
    /******/

    /******/
    // define getter function for harmony exports

    /******/

    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/

    };
    /******/

    /******/
    // define __esModule on exports

    /******/


    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

    /******/
    // create a fake namespace object

    /******/
    // mode & 1: value is a module id, require it

    /******/
    // mode & 2: merge all properties of value into the ns

    /******/
    // mode & 4: return value when already ns object

    /******/
    // mode & 8|1: behave like require

    /******/


    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/

      if (mode & 8) return value;
      /******/

      if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
      /******/

      var ns = Object.create(null);
      /******/

      __webpack_require__.r(ns);
      /******/


      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/

      if (mode & 2 && typeof value != 'string') for (var key in value) {
        __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      /******/

      return ns;
      /******/
    };
    /******/

    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/


    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
      /******/

      __webpack_require__.d(getter, 'a', getter);
      /******/


      return getter;
      /******/
    };
    /******/

    /******/
    // Object.prototype.hasOwnProperty.call

    /******/


    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/

    /******/
    // __webpack_public_path__

    /******/


    __webpack_require__.p = "";
    /******/

    /******/

    /******/
    // Load entry module and return exports

    /******/

    return __webpack_require__(__webpack_require__.s = 18);
    /******/
  }(
  /************************************************************************/

  /******/
  [,,
  /* 0 */

  /* 1 */

  /* 2 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function OutputLine(parent) {
      this.__parent = parent;
      this.__character_count = 0; // use indent_count as a marker for this.__lines that have preserved indentation

      this.__indent_count = -1;
      this.__alignment_count = 0;
      this.__wrap_point_index = 0;
      this.__wrap_point_character_count = 0;
      this.__wrap_point_indent_count = -1;
      this.__wrap_point_alignment_count = 0;
      this.__items = [];
    }

    OutputLine.prototype.clone_empty = function () {
      var line = new OutputLine(this.__parent);
      line.set_indent(this.__indent_count, this.__alignment_count);
      return line;
    };

    OutputLine.prototype.item = function (index) {
      if (index < 0) {
        return this.__items[this.__items.length + index];
      } else {
        return this.__items[index];
      }
    };

    OutputLine.prototype.has_match = function (pattern) {
      for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
        if (this.__items[lastCheckedOutput].match(pattern)) {
          return true;
        }
      }

      return false;
    };

    OutputLine.prototype.set_indent = function (indent, alignment) {
      if (this.is_empty()) {
        this.__indent_count = indent || 0;
        this.__alignment_count = alignment || 0;
        this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
      }
    };

    OutputLine.prototype._set_wrap_point = function () {
      if (this.__parent.wrap_line_length) {
        this.__wrap_point_index = this.__items.length;
        this.__wrap_point_character_count = this.__character_count;
        this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
        this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
      }
    };

    OutputLine.prototype._should_wrap = function () {
      return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
    };

    OutputLine.prototype._allow_wrap = function () {
      if (this._should_wrap()) {
        this.__parent.add_new_line();

        var next = this.__parent.current_line;
        next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
        next.__items = this.__items.slice(this.__wrap_point_index);
        this.__items = this.__items.slice(0, this.__wrap_point_index);
        next.__character_count += this.__character_count - this.__wrap_point_character_count;
        this.__character_count = this.__wrap_point_character_count;

        if (next.__items[0] === " ") {
          next.__items.splice(0, 1);

          next.__character_count -= 1;
        }

        return true;
      }

      return false;
    };

    OutputLine.prototype.is_empty = function () {
      return this.__items.length === 0;
    };

    OutputLine.prototype.last = function () {
      if (!this.is_empty()) {
        return this.__items[this.__items.length - 1];
      } else {
        return null;
      }
    };

    OutputLine.prototype.push = function (item) {
      this.__items.push(item);

      var last_newline_index = item.lastIndexOf('\n');

      if (last_newline_index !== -1) {
        this.__character_count = item.length - last_newline_index;
      } else {
        this.__character_count += item.length;
      }
    };

    OutputLine.prototype.pop = function () {
      var item = null;

      if (!this.is_empty()) {
        item = this.__items.pop();
        this.__character_count -= item.length;
      }

      return item;
    };

    OutputLine.prototype._remove_indent = function () {
      if (this.__indent_count > 0) {
        this.__indent_count -= 1;
        this.__character_count -= this.__parent.indent_size;
      }
    };

    OutputLine.prototype._remove_wrap_indent = function () {
      if (this.__wrap_point_indent_count > 0) {
        this.__wrap_point_indent_count -= 1;
      }
    };

    OutputLine.prototype.trim = function () {
      while (this.last() === ' ') {
        this.__items.pop();

        this.__character_count -= 1;
      }
    };

    OutputLine.prototype.toString = function () {
      var result = '';

      if (!this.is_empty()) {
        result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
        result += this.__items.join('');
      }

      return result;
    };

    function IndentStringCache(options, baseIndentString) {
      this.__cache = [''];
      this.__indent_size = options.indent_size;
      this.__indent_string = options.indent_char;

      if (!options.indent_with_tabs) {
        this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
      } // Set to null to continue support for auto detection of base indent


      baseIndentString = baseIndentString || '';

      if (options.indent_level > 0) {
        baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
      }

      this.__base_string = baseIndentString;
      this.__base_string_length = baseIndentString.length;
    }

    IndentStringCache.prototype.get_indent_size = function (indent, column) {
      var result = this.__base_string_length;
      column = column || 0;

      if (indent < 0) {
        result = 0;
      }

      result += indent * this.__indent_size;
      result += column;
      return result;
    };

    IndentStringCache.prototype.get_indent_string = function (indent_level, column) {
      var result = this.__base_string;
      column = column || 0;

      if (indent_level < 0) {
        indent_level = 0;
        result = '';
      }

      column += indent_level * this.__indent_size;

      this.__ensure_cache(column);

      result += this.__cache[column];
      return result;
    };

    IndentStringCache.prototype.__ensure_cache = function (column) {
      while (column >= this.__cache.length) {
        this.__add_column();
      }
    };

    IndentStringCache.prototype.__add_column = function () {
      var column = this.__cache.length;
      var indent = 0;
      var result = '';

      if (this.__indent_size && column >= this.__indent_size) {
        indent = Math.floor(column / this.__indent_size);
        column -= indent * this.__indent_size;
        result = new Array(indent + 1).join(this.__indent_string);
      }

      if (column) {
        result += new Array(column + 1).join(' ');
      }

      this.__cache.push(result);
    };

    function Output(options, baseIndentString) {
      this.__indent_cache = new IndentStringCache(options, baseIndentString);
      this.raw = false;
      this._end_with_newline = options.end_with_newline;
      this.indent_size = options.indent_size;
      this.wrap_line_length = options.wrap_line_length;
      this.__lines = [];
      this.previous_line = null;
      this.current_line = null;
      this.next_line = new OutputLine(this);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false; // initialize

      this.__add_outputline();
    }

    Output.prototype.__add_outputline = function () {
      this.previous_line = this.current_line;
      this.current_line = this.next_line.clone_empty();

      this.__lines.push(this.current_line);
    };

    Output.prototype.get_line_number = function () {
      return this.__lines.length;
    };

    Output.prototype.get_indent_string = function (indent, column) {
      return this.__indent_cache.get_indent_string(indent, column);
    };

    Output.prototype.get_indent_size = function (indent, column) {
      return this.__indent_cache.get_indent_size(indent, column);
    };

    Output.prototype.is_empty = function () {
      return !this.previous_line && this.current_line.is_empty();
    };

    Output.prototype.add_new_line = function (force_newline) {
      // never newline at the start of file
      // otherwise, newline only if we didn't just add one or we're forced
      if (this.is_empty() || !force_newline && this.just_added_newline()) {
        return false;
      } // if raw output is enabled, don't print additional newlines,
      // but still return True as though you had


      if (!this.raw) {
        this.__add_outputline();
      }

      return true;
    };

    Output.prototype.get_code = function (eol) {
      this.trim(true); // handle some edge cases where the last tokens
      // has text that ends with newline(s)

      var last_item = this.current_line.pop();

      if (last_item) {
        if (last_item[last_item.length - 1] === '\n') {
          last_item = last_item.replace(/\n+$/g, '');
        }

        this.current_line.push(last_item);
      }

      if (this._end_with_newline) {
        this.__add_outputline();
      }

      var sweet_code = this.__lines.join('\n');

      if (eol !== '\n') {
        sweet_code = sweet_code.replace(/[\n]/g, eol);
      }

      return sweet_code;
    };

    Output.prototype.set_wrap_point = function () {
      this.current_line._set_wrap_point();
    };

    Output.prototype.set_indent = function (indent, alignment) {
      indent = indent || 0;
      alignment = alignment || 0; // Next line stores alignment values

      this.next_line.set_indent(indent, alignment); // Never indent your first output indent at the start of the file

      if (this.__lines.length > 1) {
        this.current_line.set_indent(indent, alignment);
        return true;
      }

      this.current_line.set_indent();
      return false;
    };

    Output.prototype.add_raw_token = function (token) {
      for (var x = 0; x < token.newlines; x++) {
        this.__add_outputline();
      }

      this.current_line.set_indent(-1);
      this.current_line.push(token.whitespace_before);
      this.current_line.push(token.text);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false;
    };

    Output.prototype.add_token = function (printable_token) {
      this.__add_space_before_token();

      this.current_line.push(printable_token);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = this.current_line._allow_wrap();
    };

    Output.prototype.__add_space_before_token = function () {
      if (this.space_before_token && !this.just_added_newline()) {
        if (!this.non_breaking_space) {
          this.set_wrap_point();
        }

        this.current_line.push(' ');
      }
    };

    Output.prototype.remove_indent = function (index) {
      var output_length = this.__lines.length;

      while (index < output_length) {
        this.__lines[index]._remove_indent();

        index++;
      }

      this.current_line._remove_wrap_indent();
    };

    Output.prototype.trim = function (eat_newlines) {
      eat_newlines = eat_newlines === undefined ? false : eat_newlines;
      this.current_line.trim();

      while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
        this.__lines.pop();

        this.current_line = this.__lines[this.__lines.length - 1];
        this.current_line.trim();
      }

      this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
    };

    Output.prototype.just_added_newline = function () {
      return this.current_line.is_empty();
    };

    Output.prototype.just_added_blankline = function () {
      return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
    };

    Output.prototype.ensure_empty_line_above = function (starts_with, ends_with) {
      var index = this.__lines.length - 2;

      while (index >= 0) {
        var potentialEmptyLine = this.__lines[index];

        if (potentialEmptyLine.is_empty()) {
          break;
        } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
          this.__lines.splice(index + 1, 0, new OutputLine(this));

          this.previous_line = this.__lines[this.__lines.length - 2];
          break;
        }

        index--;
      }
    };

    module.exports.Output = Output;
    /***/
  },
  /* 3 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function Token(type, text, newlines, whitespace_before) {
      this.type = type;
      this.text = text; // comments_before are
      // comments that have a new line before them
      // and may or may not have a newline after
      // this is a set of comments before

      this.comments_before = null;
      /* inline comment*/
      // this.comments_after =  new TokenStream(); // no new line before and newline after

      this.newlines = newlines || 0;
      this.whitespace_before = whitespace_before || '';
      this.parent = null;
      this.next = null;
      this.previous = null;
      this.opened = null;
      this.closed = null;
      this.directives = null;
    }

    module.exports.Token = Token;
    /***/
  },,,
  /* 4 */

  /* 5 */

  /* 6 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function Options(options, merge_child_field) {
      this.raw_options = _mergeOpts(options, merge_child_field); // Support passing the source text back with no change

      this.disabled = this._get_boolean('disabled');
      this.eol = this._get_characters('eol', 'auto');
      this.end_with_newline = this._get_boolean('end_with_newline');
      this.indent_size = this._get_number('indent_size', 4);
      this.indent_char = this._get_characters('indent_char', ' ');
      this.indent_level = this._get_number('indent_level');
      this.preserve_newlines = this._get_boolean('preserve_newlines', true);
      this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);

      if (!this.preserve_newlines) {
        this.max_preserve_newlines = 0;
      }

      this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');

      if (this.indent_with_tabs) {
        this.indent_char = '\t'; // indent_size behavior changed after 1.8.6
        // It used to be that indent_size would be
        // set to 1 for indent_with_tabs. That is no longer needed and
        // actually doesn't make sense - why not use spaces? Further,
        // that might produce unexpected behavior - tabs being used
        // for single-column alignment. So, when indent_with_tabs is true
        // and indent_size is 1, reset indent_size to 4.

        if (this.indent_size === 1) {
          this.indent_size = 4;
        }
      } // Backwards compat with 1.3.x


      this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));
    }

    Options.prototype._get_array = function (name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || [];

      if (_typeof(option_value) === 'object') {
        if (option_value !== null && typeof option_value.concat === 'function') {
          result = option_value.concat();
        }
      } else if (typeof option_value === 'string') {
        result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
      }

      return result;
    };

    Options.prototype._get_boolean = function (name, default_value) {
      var option_value = this.raw_options[name];
      var result = option_value === undefined ? !!default_value : !!option_value;
      return result;
    };

    Options.prototype._get_characters = function (name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || '';

      if (typeof option_value === 'string') {
        result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
      }

      return result;
    };

    Options.prototype._get_number = function (name, default_value) {
      var option_value = this.raw_options[name];
      default_value = parseInt(default_value, 10);

      if (isNaN(default_value)) {
        default_value = 0;
      }

      var result = parseInt(option_value, 10);

      if (isNaN(result)) {
        result = default_value;
      }

      return result;
    };

    Options.prototype._get_selection = function (name, selection_list, default_value) {
      var result = this._get_selection_list(name, selection_list, default_value);

      if (result.length !== 1) {
        throw new Error("Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
      }

      return result[0];
    };

    Options.prototype._get_selection_list = function (name, selection_list, default_value) {
      if (!selection_list || selection_list.length === 0) {
        throw new Error("Selection list cannot be empty.");
      }

      default_value = default_value || [selection_list[0]];

      if (!this._is_valid_selection(default_value, selection_list)) {
        throw new Error("Invalid Default Value!");
      }

      var result = this._get_array(name, default_value);

      if (!this._is_valid_selection(result, selection_list)) {
        throw new Error("Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
      }

      return result;
    };

    Options.prototype._is_valid_selection = function (result, selection_list) {
      return result.length && selection_list.length && !result.some(function (item) {
        return selection_list.indexOf(item) === -1;
      });
    }; // merges child options up with the parent options object
    // Example: obj = {a: 1, b: {a: 2}}
    //          mergeOpts(obj, 'b')
    //
    //          Returns: {a: 2}


    function _mergeOpts(allOptions, childFieldName) {
      var finalOpts = {};
      allOptions = _normalizeOpts(allOptions);
      var name;

      for (name in allOptions) {
        if (name !== childFieldName) {
          finalOpts[name] = allOptions[name];
        }
      } //merge in the per type settings for the childFieldName


      if (childFieldName && allOptions[childFieldName]) {
        for (name in allOptions[childFieldName]) {
          finalOpts[name] = allOptions[childFieldName][name];
        }
      }

      return finalOpts;
    }

    function _normalizeOpts(options) {
      var convertedOpts = {};
      var key;

      for (key in options) {
        var newKey = key.replace(/-/g, "_");
        convertedOpts[newKey] = options[key];
      }

      return convertedOpts;
    }

    module.exports.Options = Options;
    module.exports.normalizeOpts = _normalizeOpts;
    module.exports.mergeOpts = _mergeOpts;
    /***/
  },,
  /* 7 */

  /* 8 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

    function InputScanner(input_string) {
      this.__input = input_string || '';
      this.__input_length = this.__input.length;
      this.__position = 0;
    }

    InputScanner.prototype.restart = function () {
      this.__position = 0;
    };

    InputScanner.prototype.back = function () {
      if (this.__position > 0) {
        this.__position -= 1;
      }
    };

    InputScanner.prototype.hasNext = function () {
      return this.__position < this.__input_length;
    };

    InputScanner.prototype.next = function () {
      var val = null;

      if (this.hasNext()) {
        val = this.__input.charAt(this.__position);
        this.__position += 1;
      }

      return val;
    };

    InputScanner.prototype.peek = function (index) {
      var val = null;
      index = index || 0;
      index += this.__position;

      if (index >= 0 && index < this.__input_length) {
        val = this.__input.charAt(index);
      }

      return val;
    }; // This is a JavaScript only helper function (not in python)
    // Javascript doesn't have a match method
    // and not all implementation support "sticky" flag.
    // If they do not support sticky then both this.match() and this.test() method
    // must get the match and check the index of the match.
    // If sticky is supported and set, this method will use it.
    // Otherwise it will check that global is set, and fall back to the slower method.


    InputScanner.prototype.__match = function (pattern, index) {
      pattern.lastIndex = index;
      var pattern_match = pattern.exec(this.__input);

      if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
        if (pattern_match.index !== index) {
          pattern_match = null;
        }
      }

      return pattern_match;
    };

    InputScanner.prototype.test = function (pattern, index) {
      index = index || 0;
      index += this.__position;

      if (index >= 0 && index < this.__input_length) {
        return !!this.__match(pattern, index);
      } else {
        return false;
      }
    };

    InputScanner.prototype.testChar = function (pattern, index) {
      // test one character regex match
      var val = this.peek(index);
      pattern.lastIndex = 0;
      return val !== null && pattern.test(val);
    };

    InputScanner.prototype.match = function (pattern) {
      var pattern_match = this.__match(pattern, this.__position);

      if (pattern_match) {
        this.__position += pattern_match[0].length;
      } else {
        pattern_match = null;
      }

      return pattern_match;
    };

    InputScanner.prototype.read = function (starting_pattern, until_pattern, until_after) {
      var val = '';
      var match;

      if (starting_pattern) {
        match = this.match(starting_pattern);

        if (match) {
          val += match[0];
        }
      }

      if (until_pattern && (match || !starting_pattern)) {
        val += this.readUntil(until_pattern, until_after);
      }

      return val;
    };

    InputScanner.prototype.readUntil = function (pattern, until_after) {
      var val = '';
      var match_index = this.__position;
      pattern.lastIndex = this.__position;
      var pattern_match = pattern.exec(this.__input);

      if (pattern_match) {
        match_index = pattern_match.index;

        if (until_after) {
          match_index += pattern_match[0].length;
        }
      } else {
        match_index = this.__input_length;
      }

      val = this.__input.substring(this.__position, match_index);
      this.__position = match_index;
      return val;
    };

    InputScanner.prototype.readUntilAfter = function (pattern) {
      return this.readUntil(pattern, true);
    };

    InputScanner.prototype.get_regexp = function (pattern, match_from) {
      var result = null;
      var flags = 'g';

      if (match_from && regexp_has_sticky) {
        flags = 'y';
      } // strings are converted to regexp


      if (typeof pattern === "string" && pattern !== '') {
        // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
        result = new RegExp(pattern, flags);
      } else if (pattern) {
        result = new RegExp(pattern.source, flags);
      }

      return result;
    };

    InputScanner.prototype.get_literal_regexp = function (literal_string) {
      return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    };
    /* css beautifier legacy helpers */


    InputScanner.prototype.peekUntilAfter = function (pattern) {
      var start = this.__position;
      var val = this.readUntilAfter(pattern);
      this.__position = start;
      return val;
    };

    InputScanner.prototype.lookBack = function (testVal) {
      var start = this.__position - 1;
      return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
    };

    module.exports.InputScanner = InputScanner;
    /***/
  },
  /* 9 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var InputScanner = __webpack_require__(8).InputScanner;

    var Token = __webpack_require__(3).Token;

    var TokenStream = __webpack_require__(10).TokenStream;

    var WhitespacePattern = __webpack_require__(11).WhitespacePattern;

    var TOKEN = {
      START: 'TK_START',
      RAW: 'TK_RAW',
      EOF: 'TK_EOF'
    };

    var Tokenizer = function Tokenizer(input_string, options) {
      this._input = new InputScanner(input_string);
      this._options = options || {};
      this.__tokens = null;
      this._patterns = {};
      this._patterns.whitespace = new WhitespacePattern(this._input);
    };

    Tokenizer.prototype.tokenize = function () {
      this._input.restart();

      this.__tokens = new TokenStream();

      this._reset();

      var current;
      var previous = new Token(TOKEN.START, '');
      var open_token = null;
      var open_stack = [];
      var comments = new TokenStream();

      while (previous.type !== TOKEN.EOF) {
        current = this._get_next_token(previous, open_token);

        while (this._is_comment(current)) {
          comments.add(current);
          current = this._get_next_token(previous, open_token);
        }

        if (!comments.isEmpty()) {
          current.comments_before = comments;
          comments = new TokenStream();
        }

        current.parent = open_token;

        if (this._is_opening(current)) {
          open_stack.push(open_token);
          open_token = current;
        } else if (open_token && this._is_closing(current, open_token)) {
          current.opened = open_token;
          open_token.closed = current;
          open_token = open_stack.pop();
          current.parent = open_token;
        }

        current.previous = previous;
        previous.next = current;

        this.__tokens.add(current);

        previous = current;
      }

      return this.__tokens;
    };

    Tokenizer.prototype._is_first_token = function () {
      return this.__tokens.isEmpty();
    };

    Tokenizer.prototype._reset = function () {};

    Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
      // jshint unused:false
      this._readWhitespace();

      var resulting_string = this._input.read(/.+/g);

      if (resulting_string) {
        return this._create_token(TOKEN.RAW, resulting_string);
      } else {
        return this._create_token(TOKEN.EOF, '');
      }
    };

    Tokenizer.prototype._is_comment = function (current_token) {
      // jshint unused:false
      return false;
    };

    Tokenizer.prototype._is_opening = function (current_token) {
      // jshint unused:false
      return false;
    };

    Tokenizer.prototype._is_closing = function (current_token, open_token) {
      // jshint unused:false
      return false;
    };

    Tokenizer.prototype._create_token = function (type, text) {
      var token = new Token(type, text, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
      return token;
    };

    Tokenizer.prototype._readWhitespace = function () {
      return this._patterns.whitespace.read();
    };

    module.exports.Tokenizer = Tokenizer;
    module.exports.TOKEN = TOKEN;
    /***/
  },
  /* 10 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function TokenStream(parent_token) {
      // private
      this.__tokens = [];
      this.__tokens_length = this.__tokens.length;
      this.__position = 0;
      this.__parent_token = parent_token;
    }

    TokenStream.prototype.restart = function () {
      this.__position = 0;
    };

    TokenStream.prototype.isEmpty = function () {
      return this.__tokens_length === 0;
    };

    TokenStream.prototype.hasNext = function () {
      return this.__position < this.__tokens_length;
    };

    TokenStream.prototype.next = function () {
      var val = null;

      if (this.hasNext()) {
        val = this.__tokens[this.__position];
        this.__position += 1;
      }

      return val;
    };

    TokenStream.prototype.peek = function (index) {
      var val = null;
      index = index || 0;
      index += this.__position;

      if (index >= 0 && index < this.__tokens_length) {
        val = this.__tokens[index];
      }

      return val;
    };

    TokenStream.prototype.add = function (token) {
      if (this.__parent_token) {
        token.parent = this.__parent_token;
      }

      this.__tokens.push(token);

      this.__tokens_length += 1;
    };

    module.exports.TokenStream = TokenStream;
    /***/
  },
  /* 11 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var Pattern = __webpack_require__(12).Pattern;

    function WhitespacePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);

      if (parent) {
        this._line_regexp = this._input.get_regexp(parent._line_regexp);
      } else {
        this.__set_whitespace_patterns('', '');
      }

      this.newline_count = 0;
      this.whitespace_before_token = '';
    }

    WhitespacePattern.prototype = new Pattern();

    WhitespacePattern.prototype.__set_whitespace_patterns = function (whitespace_chars, newline_chars) {
      whitespace_chars += '\\t ';
      newline_chars += '\\n\\r';
      this._match_pattern = this._input.get_regexp('[' + whitespace_chars + newline_chars + ']+', true);
      this._newline_regexp = this._input.get_regexp('\\r\\n|[' + newline_chars + ']');
    };

    WhitespacePattern.prototype.read = function () {
      this.newline_count = 0;
      this.whitespace_before_token = '';

      var resulting_string = this._input.read(this._match_pattern);

      if (resulting_string === ' ') {
        this.whitespace_before_token = ' ';
      } else if (resulting_string) {
        var matches = this.__split(this._newline_regexp, resulting_string);

        this.newline_count = matches.length - 1;
        this.whitespace_before_token = matches[this.newline_count];
      }

      return resulting_string;
    };

    WhitespacePattern.prototype.matching = function (whitespace_chars, newline_chars) {
      var result = this._create();

      result.__set_whitespace_patterns(whitespace_chars, newline_chars);

      result._update();

      return result;
    };

    WhitespacePattern.prototype._create = function () {
      return new WhitespacePattern(this._input, this);
    };

    WhitespacePattern.prototype.__split = function (regexp, input_string) {
      regexp.lastIndex = 0;
      var start_index = 0;
      var result = [];
      var next_match = regexp.exec(input_string);

      while (next_match) {
        result.push(input_string.substring(start_index, next_match.index));
        start_index = next_match.index + next_match[0].length;
        next_match = regexp.exec(input_string);
      }

      if (start_index < input_string.length) {
        result.push(input_string.substring(start_index, input_string.length));
      } else {
        result.push('');
      }

      return result;
    };

    module.exports.WhitespacePattern = WhitespacePattern;
    /***/
  },
  /* 12 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function Pattern(input_scanner, parent) {
      this._input = input_scanner;
      this._starting_pattern = null;
      this._match_pattern = null;
      this._until_pattern = null;
      this._until_after = false;

      if (parent) {
        this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
        this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
        this._until_pattern = this._input.get_regexp(parent._until_pattern);
        this._until_after = parent._until_after;
      }
    }

    Pattern.prototype.read = function () {
      var result = this._input.read(this._starting_pattern);

      if (!this._starting_pattern || result) {
        result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
      }

      return result;
    };

    Pattern.prototype.read_match = function () {
      return this._input.match(this._match_pattern);
    };

    Pattern.prototype.until_after = function (pattern) {
      var result = this._create();

      result._until_after = true;
      result._until_pattern = this._input.get_regexp(pattern);

      result._update();

      return result;
    };

    Pattern.prototype.until = function (pattern) {
      var result = this._create();

      result._until_after = false;
      result._until_pattern = this._input.get_regexp(pattern);

      result._update();

      return result;
    };

    Pattern.prototype.starting_with = function (pattern) {
      var result = this._create();

      result._starting_pattern = this._input.get_regexp(pattern, true);

      result._update();

      return result;
    };

    Pattern.prototype.matching = function (pattern) {
      var result = this._create();

      result._match_pattern = this._input.get_regexp(pattern, true);

      result._update();

      return result;
    };

    Pattern.prototype._create = function () {
      return new Pattern(this._input, this);
    };

    Pattern.prototype._update = function () {};

    module.exports.Pattern = Pattern;
    /***/
  },
  /* 13 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    function Directives(start_block_pattern, end_block_pattern) {
      start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
      end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
      this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
      this.__directive_pattern = / (\w+)[:](\w+)/g;
      this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
    }

    Directives.prototype.get_directives = function (text) {
      if (!text.match(this.__directives_block_pattern)) {
        return null;
      }

      var directives = {};
      this.__directive_pattern.lastIndex = 0;

      var directive_match = this.__directive_pattern.exec(text);

      while (directive_match) {
        directives[directive_match[1]] = directive_match[2];
        directive_match = this.__directive_pattern.exec(text);
      }

      return directives;
    };

    Directives.prototype.readIgnored = function (input) {
      return input.readUntilAfter(this.__directives_end_ignore_pattern);
    };

    module.exports.Directives = Directives;
    /***/
  },
  /* 14 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var Pattern = __webpack_require__(12).Pattern;

    var template_names = {
      django: false,
      erb: false,
      handlebars: false,
      php: false
    }; // This lets templates appear anywhere we would do a readUntil
    // The cost is higher but it is pay to play.

    function TemplatablePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);
      this.__template_pattern = null;
      this._disabled = Object.assign({}, template_names);
      this._excluded = Object.assign({}, template_names);

      if (parent) {
        this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
        this._excluded = Object.assign(this._excluded, parent._excluded);
        this._disabled = Object.assign(this._disabled, parent._disabled);
      }

      var pattern = new Pattern(input_scanner);
      this.__patterns = {
        handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
        handlebars: pattern.starting_with(/{{/).until_after(/}}/),
        php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
        erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
        // django coflicts with handlebars a bit.
        django: pattern.starting_with(/{%/).until_after(/%}/),
        django_value: pattern.starting_with(/{{/).until_after(/}}/),
        django_comment: pattern.starting_with(/{#/).until_after(/#}/)
      };
    }

    TemplatablePattern.prototype = new Pattern();

    TemplatablePattern.prototype._create = function () {
      return new TemplatablePattern(this._input, this);
    };

    TemplatablePattern.prototype._update = function () {
      this.__set_templated_pattern();
    };

    TemplatablePattern.prototype.disable = function (language) {
      var result = this._create();

      result._disabled[language] = true;

      result._update();

      return result;
    };

    TemplatablePattern.prototype.exclude = function (language) {
      var result = this._create();

      result._excluded[language] = true;

      result._update();

      return result;
    };

    TemplatablePattern.prototype.read = function () {
      var result = '';

      if (this._match_pattern) {
        result = this._input.read(this._starting_pattern);
      } else {
        result = this._input.read(this._starting_pattern, this.__template_pattern);
      }

      var next = this._read_template();

      while (next) {
        if (this._match_pattern) {
          next += this._input.read(this._match_pattern);
        } else {
          next += this._input.readUntil(this.__template_pattern);
        }

        result += next;
        next = this._read_template();
      }

      if (this._until_after) {
        result += this._input.readUntilAfter(this._until_pattern);
      }

      return result;
    };

    TemplatablePattern.prototype.__set_templated_pattern = function () {
      var items = [];

      if (!this._disabled.php) {
        items.push(this.__patterns.php._starting_pattern.source);
      }

      if (!this._disabled.handlebars) {
        items.push(this.__patterns.handlebars._starting_pattern.source);
      }

      if (!this._disabled.erb) {
        items.push(this.__patterns.erb._starting_pattern.source);
      }

      if (!this._disabled.django) {
        items.push(this.__patterns.django._starting_pattern.source);
        items.push(this.__patterns.django_value._starting_pattern.source);
        items.push(this.__patterns.django_comment._starting_pattern.source);
      }

      if (this._until_pattern) {
        items.push(this._until_pattern.source);
      }

      this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
    };

    TemplatablePattern.prototype._read_template = function () {
      var resulting_string = '';

      var c = this._input.peek();

      if (c === '<') {
        var peek1 = this._input.peek(1); //if we're in a comment, do something special
        // We treat all comments as literals, even more than preformatted tags
        // we just look for the appropriate close tag


        if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
          resulting_string = resulting_string || this.__patterns.php.read();
        }

        if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
          resulting_string = resulting_string || this.__patterns.erb.read();
        }
      } else if (c === '{') {
        if (!this._disabled.handlebars && !this._excluded.handlebars) {
          resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
          resulting_string = resulting_string || this.__patterns.handlebars.read();
        }

        if (!this._disabled.django) {
          // django coflicts with handlebars a bit.
          if (!this._excluded.django && !this._excluded.handlebars) {
            resulting_string = resulting_string || this.__patterns.django_value.read();
          }

          if (!this._excluded.django) {
            resulting_string = resulting_string || this.__patterns.django_comment.read();
            resulting_string = resulting_string || this.__patterns.django.read();
          }
        }
      }

      return resulting_string;
    };

    module.exports.TemplatablePattern = TemplatablePattern;
    /***/
  },,,,
  /* 15 */

  /* 16 */

  /* 17 */

  /* 18 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var Beautifier = __webpack_require__(19).Beautifier,
        Options = __webpack_require__(20).Options;

    function style_html(html_source, options, js_beautify, css_beautify) {
      var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
      return beautifier.beautify();
    }

    module.exports = style_html;

    module.exports.defaultOptions = function () {
      return new Options();
    };
    /***/

  },
  /* 19 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var Options = __webpack_require__(20).Options;

    var Output = __webpack_require__(2).Output;

    var Tokenizer = __webpack_require__(21).Tokenizer;

    var TOKEN = __webpack_require__(21).TOKEN;

    var lineBreak = /\r\n|[\r\n]/;
    var allLineBreaks = /\r\n|[\r\n]/g;

    var Printer = function Printer(options, base_indent_string) {
      //handles input/output and some other printing functions
      this.indent_level = 0;
      this.alignment_size = 0;
      this.max_preserve_newlines = options.max_preserve_newlines;
      this.preserve_newlines = options.preserve_newlines;
      this._output = new Output(options, base_indent_string);
    };

    Printer.prototype.current_line_has_match = function (pattern) {
      return this._output.current_line.has_match(pattern);
    };

    Printer.prototype.set_space_before_token = function (value, non_breaking) {
      this._output.space_before_token = value;
      this._output.non_breaking_space = non_breaking;
    };

    Printer.prototype.set_wrap_point = function () {
      this._output.set_indent(this.indent_level, this.alignment_size);

      this._output.set_wrap_point();
    };

    Printer.prototype.add_raw_token = function (token) {
      this._output.add_raw_token(token);
    };

    Printer.prototype.print_preserved_newlines = function (raw_token) {
      var newlines = 0;

      if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
        newlines = raw_token.newlines ? 1 : 0;
      }

      if (this.preserve_newlines) {
        newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
      }

      for (var n = 0; n < newlines; n++) {
        this.print_newline(n > 0);
      }

      return newlines !== 0;
    };

    Printer.prototype.traverse_whitespace = function (raw_token) {
      if (raw_token.whitespace_before || raw_token.newlines) {
        if (!this.print_preserved_newlines(raw_token)) {
          this._output.space_before_token = true;
        }

        return true;
      }

      return false;
    };

    Printer.prototype.previous_token_wrapped = function () {
      return this._output.previous_token_wrapped;
    };

    Printer.prototype.print_newline = function (force) {
      this._output.add_new_line(force);
    };

    Printer.prototype.print_token = function (token) {
      if (token.text) {
        this._output.set_indent(this.indent_level, this.alignment_size);

        this._output.add_token(token.text);
      }
    };

    Printer.prototype.indent = function () {
      this.indent_level++;
    };

    Printer.prototype.get_full_indent = function (level) {
      level = this.indent_level + (level || 0);

      if (level < 1) {
        return '';
      }

      return this._output.get_indent_string(level);
    };

    var get_type_attribute = function get_type_attribute(start_token) {
      var result = null;
      var raw_token = start_token.next; // Search attributes for a type attribute

      while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
        if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === 'type') {
          if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
            result = raw_token.next.next.text;
          }

          break;
        }

        raw_token = raw_token.next;
      }

      return result;
    };

    var get_custom_beautifier_name = function get_custom_beautifier_name(tag_check, raw_token) {
      var typeAttribute = null;
      var result = null;

      if (!raw_token.closed) {
        return null;
      }

      if (tag_check === 'script') {
        typeAttribute = 'text/javascript';
      } else if (tag_check === 'style') {
        typeAttribute = 'text/css';
      }

      typeAttribute = get_type_attribute(raw_token) || typeAttribute; // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
      // For those without a type attribute use default;

      if (typeAttribute.search('text/css') > -1) {
        result = 'css';
      } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) {
        result = 'javascript';
      } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
        result = 'html';
      } else if (typeAttribute.search(/test\/null/) > -1) {
        // Test only mime-type for testing the beautifier when null is passed as beautifing function
        result = 'null';
      }

      return result;
    };

    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }

    function TagFrame(parent, parser_token, indent_level) {
      this.parent = parent || null;
      this.tag = parser_token ? parser_token.tag_name : '';
      this.indent_level = indent_level || 0;
      this.parser_token = parser_token || null;
    }

    function TagStack(printer) {
      this._printer = printer;
      this._current_frame = null;
    }

    TagStack.prototype.get_parser_token = function () {
      return this._current_frame ? this._current_frame.parser_token : null;
    };

    TagStack.prototype.record_tag = function (parser_token) {
      //function to record a tag and its parent in this.tags Object
      var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
      this._current_frame = new_frame;
    };

    TagStack.prototype._try_pop_frame = function (frame) {
      //function to retrieve the opening tag to the corresponding closer
      var parser_token = null;

      if (frame) {
        parser_token = frame.parser_token;
        this._printer.indent_level = frame.indent_level;
        this._current_frame = frame.parent;
      }

      return parser_token;
    };

    TagStack.prototype._get_frame = function (tag_list, stop_list) {
      //function to retrieve the opening tag to the corresponding closer
      var frame = this._current_frame;

      while (frame) {
        //till we reach '' (the initial value);
        if (tag_list.indexOf(frame.tag) !== -1) {
          //if this is it use it
          break;
        } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
          frame = null;
          break;
        }

        frame = frame.parent;
      }

      return frame;
    };

    TagStack.prototype.try_pop = function (tag, stop_list) {
      //function to retrieve the opening tag to the corresponding closer
      var frame = this._get_frame([tag], stop_list);

      return this._try_pop_frame(frame);
    };

    TagStack.prototype.indent_to_tag = function (tag_list) {
      var frame = this._get_frame(tag_list);

      if (frame) {
        this._printer.indent_level = frame.indent_level;
      }
    };

    function Beautifier(source_text, options, js_beautify, css_beautify) {
      //Wrapper function to invoke all the necessary constructors and deal with the output.
      this._source_text = source_text || '';
      options = options || {};
      this._js_beautify = js_beautify;
      this._css_beautify = css_beautify;
      this._tag_stack = null; // Allow the setting of language/file-type specific options
      // with inheritance of overall settings

      var optionHtml = new Options(options, 'html');
      this._options = optionHtml;
      this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
      this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === 'force-expand-multiline';
      this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === 'force-aligned';
      this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === 'aligned-multiple';
      this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
      this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === 'preserve-aligned';
    }

    Beautifier.prototype.beautify = function () {
      // if disabled, return the input unchanged.
      if (this._options.disabled) {
        return this._source_text;
      }

      var source_text = this._source_text;
      var eol = this._options.eol;

      if (this._options.eol === 'auto') {
        eol = '\n';

        if (source_text && lineBreak.test(source_text)) {
          eol = source_text.match(lineBreak)[0];
        }
      } // HACK: newline parsing inconsistent. This brute force normalizes the input.


      source_text = source_text.replace(allLineBreaks, '\n');
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      var last_token = {
        text: '',
        type: ''
      };
      var last_tag_token = new TagOpenParserToken();
      var printer = new Printer(this._options, baseIndentString);
      var tokens = new Tokenizer(source_text, this._options).tokenize();
      this._tag_stack = new TagStack(printer);
      var parser_token = null;
      var raw_token = tokens.next();

      while (raw_token.type !== TOKEN.EOF) {
        if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
          parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
          last_tag_token = parser_token;
        } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
          parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
        } else if (raw_token.type === TOKEN.TAG_CLOSE) {
          parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
        } else if (raw_token.type === TOKEN.TEXT) {
          parser_token = this._handle_text(printer, raw_token, last_tag_token);
        } else {
          // This should never happen, but if it does. Print the raw token
          printer.add_raw_token(raw_token);
        }

        last_token = parser_token;
        raw_token = tokens.next();
      }

      var sweet_code = printer._output.get_code(eol);

      return sweet_code;
    };

    Beautifier.prototype._handle_tag_close = function (printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.alignment_size = 0;
      last_tag_token.tag_complete = true;
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);

      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        if (last_tag_token.tag_start_char === '<') {
          printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >

          if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
            printer.print_newline(false);
          }
        }

        printer.print_token(raw_token);
      }

      if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.indent(); // only indent once per opened tag

        last_tag_token.indent_content = false;
      }

      if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.set_wrap_point();
      }

      return parser_token;
    };

    Beautifier.prototype._handle_inside_tag = function (printer, raw_token, last_tag_token, tokens) {
      var wrapped = last_tag_token.has_wrapped_attrs;
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);

      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN.TEXT) {
        // For the insides of handlebars allow newlines or a single space between open and contents
        if (printer.print_preserved_newlines(raw_token)) {
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
        } else {
          printer.print_token(raw_token);
        }
      } else {
        if (raw_token.type === TOKEN.ATTRIBUTE) {
          printer.set_space_before_token(true);
          last_tag_token.attr_count += 1;
        } else if (raw_token.type === TOKEN.EQUALS) {
          //no space before =
          printer.set_space_before_token(false);
        } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
          //no space before value
          printer.set_space_before_token(false);
        }

        if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
          if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
            printer.traverse_whitespace(raw_token);
            wrapped = wrapped || raw_token.newlines !== 0;
          }

          if (this._is_wrap_attributes_force) {
            var force_attr_wrap = last_tag_token.attr_count > 1;

            if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
              var is_only_attribute = true;
              var peek_index = 0;
              var peek_token;

              do {
                peek_token = tokens.peek(peek_index);

                if (peek_token.type === TOKEN.ATTRIBUTE) {
                  is_only_attribute = false;
                  break;
                }

                peek_index += 1;
              } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);

              force_attr_wrap = !is_only_attribute;
            }

            if (force_attr_wrap) {
              printer.print_newline(false);
              wrapped = true;
            }
          }
        }

        printer.print_token(raw_token);
        wrapped = wrapped || printer.previous_token_wrapped();
        last_tag_token.has_wrapped_attrs = wrapped;
      }

      return parser_token;
    };

    Beautifier.prototype._handle_text = function (printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: 'TK_CONTENT'
      };

      if (last_tag_token.custom_beautifier_name) {
        //check if we need to format javascript
        this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
      } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        printer.traverse_whitespace(raw_token);
        printer.print_token(raw_token);
      }

      return parser_token;
    };

    Beautifier.prototype._print_custom_beatifier_text = function (printer, raw_token, last_tag_token) {
      var local = this;

      if (raw_token.text !== '') {
        printer.print_newline(false);

        var text = raw_token.text,
            _beautifier,
            script_indent_level = 1;

        if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
          _beautifier = this._js_beautify;
        } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
          _beautifier = this._css_beautify;
        } else if (last_tag_token.custom_beautifier_name === 'html') {
          _beautifier = function _beautifier(html_source, options) {
            var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
            return beautifier.beautify();
          };
        }

        if (this._options.indent_scripts === "keep") {
          script_indent_level = 0;
        } else if (this._options.indent_scripts === "separate") {
          script_indent_level = -printer.indent_level;
        }

        var indentation = printer.get_full_indent(script_indent_level); // if there is at least one empty line at the end of this text, strip it
        // we'll be adding one back after the text but before the containing tag.

        text = text.replace(/\n[ \t]*$/, '');

        if (_beautifier) {
          // call the Beautifier if avaliable
          var Child_options = function Child_options() {
            this.eol = '\n';
          };

          Child_options.prototype = this._options.raw_options;
          var child_options = new Child_options();
          text = _beautifier(indentation + text, child_options);
        } else {
          // simply indent the string otherwise
          var white = raw_token.whitespace_before;

          if (white) {
            text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
          }

          text = indentation + text.replace(/\n/g, '\n' + indentation);
        }

        if (text) {
          raw_token.text = text;
          raw_token.whitespace_before = '';
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
          printer.print_newline(true);
        }
      }
    };

    Beautifier.prototype._handle_tag_open = function (printer, raw_token, last_tag_token, last_token) {
      var parser_token = this._get_tag_open_token(raw_token);

      if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf('</') === 0) {
        // End element tags for unformatted or content_unformatted elements
        // are printed raw to keep any newlines inside them exactly the same.
        printer.add_raw_token(raw_token);
      } else {
        printer.traverse_whitespace(raw_token);

        this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);

        if (!parser_token.is_inline_element) {
          printer.set_wrap_point();
        }

        printer.print_token(raw_token);
      } //indent attributes an auto, forced, aligned or forced-align line-wrap


      if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
        parser_token.alignment_size = raw_token.text.length + 1;
      }

      if (!parser_token.tag_complete && !parser_token.is_unformatted) {
        printer.alignment_size = parser_token.alignment_size;
      }

      return parser_token;
    };

    var TagOpenParserToken = function TagOpenParserToken(parent, raw_token) {
      this.parent = parent || null;
      this.text = '';
      this.type = 'TK_TAG_OPEN';
      this.tag_name = '';
      this.is_inline_element = false;
      this.is_unformatted = false;
      this.is_content_unformatted = false;
      this.is_empty_element = false;
      this.is_start_tag = false;
      this.is_end_tag = false;
      this.indent_content = false;
      this.multiline_content = false;
      this.custom_beautifier_name = null;
      this.start_tag_token = null;
      this.attr_count = 0;
      this.has_wrapped_attrs = false;
      this.alignment_size = 0;
      this.tag_complete = false;
      this.tag_start_char = '';
      this.tag_check = '';

      if (!raw_token) {
        this.tag_complete = true;
      } else {
        var tag_check_match;
        this.tag_start_char = raw_token.text[0];
        this.text = raw_token.text;

        if (this.tag_start_char === '<') {
          tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : '';
        } else {
          tag_check_match = raw_token.text.match(/^{{[#\^]?([^\s}]+)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : '';
        }

        this.tag_check = this.tag_check.toLowerCase();

        if (raw_token.type === TOKEN.COMMENT) {
          this.tag_complete = true;
        }

        this.is_start_tag = this.tag_check.charAt(0) !== '/';
        this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
        this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === '/>'; // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.

        this.is_end_tag = this.is_end_tag || this.tag_start_char === '{' && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2)));
      }
    };

    Beautifier.prototype._get_tag_open_token = function (raw_token) {
      //function to get a full tag and parse its type
      var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
      parser_token.alignment_size = this._options.wrap_attributes_indent_size;
      parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
      parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
      parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
      parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
      parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === '{';
      return parser_token;
    };

    Beautifier.prototype._set_tag_position = function (printer, raw_token, parser_token, last_tag_token, last_token) {
      if (!parser_token.is_empty_element) {
        if (parser_token.is_end_tag) {
          //this tag is a double tag so check for tag-ending
          parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
        } else {
          // it's a start-tag
          // check if this tag is starting an element that has optional end element
          // and do an ending needed
          if (this._do_optional_end_element(parser_token)) {
            if (!parser_token.is_inline_element) {
              if (parser_token.parent) {
                parser_token.parent.multiline_content = true;
              }

              printer.print_newline(false);
            }
          }

          this._tag_stack.record_tag(parser_token); //push it on the tag stack


          if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
            parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
          }
        }
      }

      if (in_array(parser_token.tag_check, this._options.extra_liners)) {
        //check if this double needs an extra line
        printer.print_newline(false);

        if (!printer._output.just_added_blankline()) {
          printer.print_newline(true);
        }
      }

      if (parser_token.is_empty_element) {
        //if this tag name is a single tag type (either in the list or has a closing /)
        // if you hit an else case, reset the indent level if you are inside an:
        // 'if', 'unless', or 'each' block.
        if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
          this._tag_stack.indent_to_tag(['if', 'unless', 'each']);

          parser_token.indent_content = true; // Don't add a newline if opening {{#if}} tag is on the current line

          var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);

          if (!foundIfOnCurrentLine) {
            printer.print_newline(false);
          }
        } // Don't add a newline before elements that should remain where they are.


        if (parser_token.tag_name === '!--' && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) {//Do nothing. Leave comments on same line.
        } else if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
          printer.print_newline(false);
        }
      } else if (parser_token.is_unformatted || parser_token.is_content_unformatted) {
        if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
          printer.print_newline(false);
        }
      } else if (parser_token.is_end_tag) {
        //this tag is a double tag so check for tag-ending
        if (parser_token.start_tag_token && parser_token.start_tag_token.multiline_content || !(parser_token.is_inline_element || last_tag_token.is_inline_element || last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token || last_token.type === 'TK_CONTENT')) {
          printer.print_newline(false);
        }
      } else {
        // it's a start-tag
        parser_token.indent_content = !parser_token.custom_beautifier_name;

        if (parser_token.tag_start_char === '<') {
          if (parser_token.tag_name === 'html') {
            parser_token.indent_content = this._options.indent_inner_html;
          } else if (parser_token.tag_name === 'head') {
            parser_token.indent_content = this._options.indent_head_inner_html;
          } else if (parser_token.tag_name === 'body') {
            parser_token.indent_content = this._options.indent_body_inner_html;
          }
        }

        if (!parser_token.is_inline_element && last_token.type !== 'TK_CONTENT') {
          if (parser_token.parent) {
            parser_token.parent.multiline_content = true;
          }

          printer.print_newline(false);
        }
      }
    }; //To be used for <p> tag special case:
    //var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];


    Beautifier.prototype._do_optional_end_element = function (parser_token) {
      var result = null; // NOTE: cases of "if there is no more content in the parent element"
      // are handled automatically by the beautifier.
      // It assumes parent or ancestor close tag closes all children.
      // https://www.w3.org/TR/html5/syntax.html#optional-tags

      if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
        return;
      } else if (parser_token.tag_name === 'body') {
        // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
        result = result || this._tag_stack.try_pop('head'); //} else if (parser_token.tag_name === 'body') {
        // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.
      } else if (parser_token.tag_name === 'li') {
        // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
        result = result || this._tag_stack.try_pop('li', ['ol', 'ul']);
      } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
        // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
        // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
        result = result || this._tag_stack.try_pop('dt', ['dl']);
        result = result || this._tag_stack.try_pop('dd', ['dl']); //} else if (p_closers.indexOf(parser_token.tag_name) !== -1) {
        //TODO: THIS IS A BUG FARM. We are not putting this into 1.8.0 as it is likely to blow up.
        //A p element’s end tag may be omitted if the p element is immediately followed by an address, article, aside, blockquote, details, div, dl, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, main, nav, ol, p, pre, section, table, or ul element, or if there is no more content in the parent element and the parent element is an HTML element that is not an a, audio, del, ins, map, noscript, or video element, or an autonomous custom element.
        //result = result || this._tag_stack.try_pop('p', ['body']);
      } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
        // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
        // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
        result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
        result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);
      } else if (parser_token.tag_name === 'optgroup') {
        // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
        // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
        result = result || this._tag_stack.try_pop('optgroup', ['select']); //result = result || this._tag_stack.try_pop('option', ['select']);
      } else if (parser_token.tag_name === 'option') {
        // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
        result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);
      } else if (parser_token.tag_name === 'colgroup') {
        // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
        // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
        result = result || this._tag_stack.try_pop('caption', ['table']);
      } else if (parser_token.tag_name === 'thead') {
        // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
        // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
        result = result || this._tag_stack.try_pop('caption', ['table']);
        result = result || this._tag_stack.try_pop('colgroup', ['table']); //} else if (parser_token.tag_name === 'caption') {
        // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.
      } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
        // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
        // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
        // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
        // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
        result = result || this._tag_stack.try_pop('caption', ['table']);
        result = result || this._tag_stack.try_pop('colgroup', ['table']);
        result = result || this._tag_stack.try_pop('thead', ['table']);
        result = result || this._tag_stack.try_pop('tbody', ['table']); //} else if (parser_token.tag_name === 'tfoot') {
        // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.
      } else if (parser_token.tag_name === 'tr') {
        // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
        // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
        // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
        result = result || this._tag_stack.try_pop('caption', ['table']);
        result = result || this._tag_stack.try_pop('colgroup', ['table']);
        result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);
      } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
        // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
        // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
        result = result || this._tag_stack.try_pop('td', ['tr']);
        result = result || this._tag_stack.try_pop('th', ['tr']);
      } // Start element omission not handled currently
      // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
      // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
      // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
      // Fix up the parent of the parser token


      parser_token.parent = this._tag_stack.get_parser_token();
      return result;
    };

    module.exports.Beautifier = Beautifier;
    /***/
  },
  /* 20 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var BaseOptions = __webpack_require__(6).Options;

    function Options(options) {
      BaseOptions.call(this, options, 'html');
      this.indent_inner_html = this._get_boolean('indent_inner_html');
      this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
      this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);
      this.indent_handlebars = this._get_boolean('indent_handlebars', true);
      this.wrap_attributes = this._get_selection('wrap_attributes', ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
      this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
      this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']); // Block vs inline elements
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
      // https://www.w3.org/TR/html5/dom.html#phrasing-content

      this.inline = this._get_array('inline', ['a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp',
      /* 'script', */
      'select', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var', 'video', 'wbr', 'text', // obsolete inline tags
      'acronym', 'big', 'strike', 'tt']);
      this.void_elements = this._get_array('void_elements', [// HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr', // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      '!doctype', '?xml', // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      'basefont', 'isindex']);
      this.unformatted = this._get_array('unformatted', []);
      this.content_unformatted = this._get_array('content_unformatted', ['pre', 'textarea']);
      this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
      this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);
    }

    Options.prototype = new BaseOptions();
    module.exports.Options = Options;
    /***/
  },
  /* 21 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*jshint node:true */

    /*
    
      The MIT License (MIT)
    
      Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.
    
      Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation files
      (the "Software"), to deal in the Software without restriction,
      including without limitation the rights to use, copy, modify, merge,
      publish, distribute, sublicense, and/or sell copies of the Software,
      and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
    
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
    
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
      ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
      CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    var BaseTokenizer = __webpack_require__(9).Tokenizer;

    var BASETOKEN = __webpack_require__(9).TOKEN;

    var Directives = __webpack_require__(13).Directives;

    var TemplatablePattern = __webpack_require__(14).TemplatablePattern;

    var Pattern = __webpack_require__(12).Pattern;

    var TOKEN = {
      TAG_OPEN: 'TK_TAG_OPEN',
      TAG_CLOSE: 'TK_TAG_CLOSE',
      ATTRIBUTE: 'TK_ATTRIBUTE',
      EQUALS: 'TK_EQUALS',
      VALUE: 'TK_VALUE',
      COMMENT: 'TK_COMMENT',
      TEXT: 'TK_TEXT',
      UNKNOWN: 'TK_UNKNOWN',
      START: BASETOKEN.START,
      RAW: BASETOKEN.RAW,
      EOF: BASETOKEN.EOF
    };
    var directives_core = new Directives(/<\!--/, /-->/);

    var Tokenizer = function Tokenizer(input_string, options) {
      BaseTokenizer.call(this, input_string, options);
      this._current_tag_name = ''; // Words end at whitespace or when a tag starts
      // if we are indenting handlebars, they are considered tags

      var templatable_reader = new TemplatablePattern(this._input);
      var pattern_reader = new Pattern(this._input);
      this.__patterns = {
        word: templatable_reader.until(/[\n\r\t <]/),
        single_quote: templatable_reader.until_after(/'/),
        double_quote: templatable_reader.until_after(/"/),
        attribute: templatable_reader.until(/[\n\r\t =\/>]/),
        element_name: templatable_reader.until(/[\n\r\t >\/]/),
        handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
        handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
        handlebars_open: pattern_reader.until(/[\n\r\t }]/),
        handlebars_raw_close: pattern_reader.until(/}}/),
        comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
        cdata: pattern_reader.starting_with(/<!\[cdata\[/).until_after(/]]>/),
        // https://en.wikipedia.org/wiki/Conditional_comment
        conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
        processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
      };

      if (this._options.indent_handlebars) {
        this.__patterns.word = this.__patterns.word.exclude('handlebars');
      }

      this._unformatted_content_delimiter = null;

      if (this._options.unformatted_content_delimiter) {
        var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);

        this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
      }
    };

    Tokenizer.prototype = new BaseTokenizer();

    Tokenizer.prototype._is_comment = function (current_token) {
      // jshint unused:false
      return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
    };

    Tokenizer.prototype._is_opening = function (current_token) {
      return current_token.type === TOKEN.TAG_OPEN;
    };

    Tokenizer.prototype._is_closing = function (current_token, open_token) {
      return current_token.type === TOKEN.TAG_CLOSE && open_token && ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<' || current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{');
    };

    Tokenizer.prototype._reset = function () {
      this._current_tag_name = '';
    };

    Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
      // jshint unused:false
      var token = null;

      this._readWhitespace();

      var c = this._input.peek();

      if (c === null) {
        return this._create_token(TOKEN.EOF, '');
      }

      token = token || this._read_open_handlebars(c, open_token);
      token = token || this._read_attribute(c, previous_token, open_token);
      token = token || this._read_raw_content(previous_token, open_token);
      token = token || this._read_close(c, open_token);
      token = token || this._read_content_word(c);
      token = token || this._read_comment(c);
      token = token || this._read_open(c, open_token);
      token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
      return token;
    };

    Tokenizer.prototype._read_comment = function (c) {
      // jshint unused:false
      var token = null;
      var resulting_string = null;
      var directives = null;

      if (c === '<') {
        var peek1 = this._input.peek(1); //if we're in a comment, do something special
        // We treat all comments as literals, even more than preformatted tags
        // we just look for the appropriate close tag


        if (c === '<' && (peek1 === '!' || peek1 === '?')) {
          resulting_string = this.__patterns.comment.read(); // only process directive on html comments

          if (resulting_string) {
            directives = directives_core.get_directives(resulting_string);

            if (directives && directives.ignore === 'start') {
              resulting_string += directives_core.readIgnored(this._input);
            }
          } else {
            resulting_string = this.__patterns.cdata.read();
            resulting_string = resulting_string || this.__patterns.conditional_comment.read();
            resulting_string = resulting_string || this.__patterns.processing.read();
          }
        }

        if (resulting_string) {
          token = this._create_token(TOKEN.COMMENT, resulting_string);
          token.directives = directives;
        }
      }

      return token;
    };

    Tokenizer.prototype._read_open = function (c, open_token) {
      var resulting_string = null;
      var token = null;

      if (!open_token) {
        if (c === '<') {
          resulting_string = this._input.next();

          if (this._input.peek() === '/') {
            resulting_string += this._input.next();
          }

          resulting_string += this.__patterns.element_name.read();
          token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
        }
      }

      return token;
    };

    Tokenizer.prototype._read_open_handlebars = function (c, open_token) {
      var resulting_string = null;
      var token = null;

      if (!open_token) {
        if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
          if (this._input.peek(2) === '!') {
            resulting_string = this.__patterns.handlebars_comment.read();
            resulting_string = resulting_string || this.__patterns.handlebars.read();
            token = this._create_token(TOKEN.COMMENT, resulting_string);
          } else {
            resulting_string = this.__patterns.handlebars_open.read();
            token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
          }
        }
      }

      return token;
    };

    Tokenizer.prototype._read_close = function (c, open_token) {
      var resulting_string = null;
      var token = null;

      if (open_token) {
        if (open_token.text[0] === '<' && (c === '>' || c === '/' && this._input.peek(1) === '>')) {
          resulting_string = this._input.next();

          if (c === '/') {
            //  for close tag "/>"
            resulting_string += this._input.next();
          }

          token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
        } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
          this._input.next();

          this._input.next();

          token = this._create_token(TOKEN.TAG_CLOSE, '}}');
        }
      }

      return token;
    };

    Tokenizer.prototype._read_attribute = function (c, previous_token, open_token) {
      var token = null;
      var resulting_string = '';

      if (open_token && open_token.text[0] === '<') {
        if (c === '=') {
          token = this._create_token(TOKEN.EQUALS, this._input.next());
        } else if (c === '"' || c === "'") {
          var content = this._input.next();

          if (c === '"') {
            content += this.__patterns.double_quote.read();
          } else {
            content += this.__patterns.single_quote.read();
          }

          token = this._create_token(TOKEN.VALUE, content);
        } else {
          resulting_string = this.__patterns.attribute.read();

          if (resulting_string) {
            if (previous_token.type === TOKEN.EQUALS) {
              token = this._create_token(TOKEN.VALUE, resulting_string);
            } else {
              token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
            }
          }
        }
      }

      return token;
    };

    Tokenizer.prototype._is_content_unformatted = function (tag_name) {
      // void_elements have no content and so cannot have unformatted content
      // script and style tags should always be read as unformatted content
      // finally content_unformatted and unformatted element contents are unformatted
      return this._options.void_elements.indexOf(tag_name) === -1 && (tag_name === 'script' || tag_name === 'style' || this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
    };

    Tokenizer.prototype._read_raw_content = function (previous_token, open_token) {
      // jshint unused:false
      var resulting_string = '';

      if (open_token && open_token.text[0] === '{') {
        resulting_string = this.__patterns.handlebars_raw_close.read();
      } else if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === '<') {
        var tag_name = previous_token.opened.text.substr(1).toLowerCase();

        if (this._is_content_unformatted(tag_name)) {
          resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
        }
      }

      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }

      return null;
    };

    Tokenizer.prototype._read_content_word = function (c) {
      var resulting_string = '';

      if (this._options.unformatted_content_delimiter) {
        if (c === this._options.unformatted_content_delimiter[0]) {
          resulting_string = this.__patterns.unformatted_content_delimiter.read();
        }
      }

      if (!resulting_string) {
        resulting_string = this.__patterns.word.read();
      }

      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }
    };

    module.exports.Tokenizer = Tokenizer;
    module.exports.TOKEN = TOKEN;
    /***/
  }]);

  var style_html = legacy_beautify_html;
  /* Footer */

  if (false) {} else if (false) { var css_beautify, js_beautify; } else if (typeof window !== "undefined") {
    // If we're running a web page and don't have either of the above, add our one global
    window.html_beautify = function (html_source, options) {
      return style_html(html_source, options, window.js_beautify, window.css_beautify);
    };
  } else if (typeof global !== "undefined") {
    // If we don't even have window, try global.
    global.html_beautify = function (html_source, options) {
      return style_html(html_source, options, global.js_beautify, global.css_beautify);
    };
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib-for-link/src/admin-tools/article-download/jszip-utils.js":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/admin-tools/article-download/jszip-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!

JSZipUtils - A collection of cross-browser utilities to go along with JSZip.
<http://stuk.github.io/jszip-utils>

(c) 2014 Stuart Knightley, David Duponchel
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip-utils/master/LICENSE.markdown.

*/
!function (e) {
   false ? undefined :  false ? undefined : "undefined" != typeof window ? window.JSZipUtils = e() : "undefined" != typeof global ? global.JSZipUtils = e() : "undefined" != typeof self && (self.JSZipUtils = e());
}(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          throw new Error("Cannot find module '" + o + "'");
        }

        var f = n[o] = {
          exports: {}
        };
        t[o][0].call(f.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      'use strict';

      var JSZipUtils = {}; // just use the responseText with xhr1, response with xhr2.
      // The transformation doesn't throw away high-order byte (with responseText)
      // because JSZip handles that case. If not used with JSZip, you may need to
      // do it, see https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data

      JSZipUtils._getBinaryFromXHR = function (xhr) {
        // for xhr.responseText, the 0xFF mask is applied by JSZip
        return xhr.response || xhr.responseText;
      }; // taken from jQuery


      function createStandardXHR() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      }

      function createActiveXHR() {
        try {
          return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      } // Create the request object


      var createXHR = window.ActiveXObject ?
      /* Microsoft failed to properly
       * implement the XMLHttpRequest in IE7 (can't request local files),
       * so we use the ActiveXObject when it is available
       * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
       * we need a fallback.
       */
      function () {
        return createStandardXHR() || createActiveXHR();
      } : // For all other browsers, use the standard XMLHttpRequest object
      createStandardXHR;

      JSZipUtils.getBinaryContent = function (path, callback) {
        /*
         * Here is the tricky part : getting the data.
         * In firefox/chrome/opera/... setting the mimeType to 'text/plain; charset=x-user-defined'
         * is enough, the result is in the standard xhr.responseText.
         * cf https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data_in_older_browsers
         * In IE <= 9, we must use (the IE only) attribute responseBody
         * (for binary data, its content is different from responseText).
         * In IE 10, the 'charset=x-user-defined' trick doesn't work, only the
         * responseType will work :
         * http://msdn.microsoft.com/en-us/library/ie/hh673569%28v=vs.85%29.aspx#Binary_Object_upload_and_download
         *
         * I'd like to use jQuery to avoid this XHR madness, but it doesn't support
         * the responseType attribute : http://bugs.jquery.com/ticket/11461
         */
        try {
          var xhr = createXHR();
          xhr.open('GET', path, true); // recent browsers

          if ("responseType" in xhr) {
            xhr.responseType = "arraybuffer";
          } // older browser


          if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }

          xhr.onreadystatechange = function (evt) {
            var file, err; // use `xhr` and not `this`... thanks IE

            if (xhr.readyState === 4) {
              if (xhr.status === 200 || xhr.status === 0) {
                file = null;
                err = null;

                try {
                  file = JSZipUtils._getBinaryFromXHR(xhr);
                } catch (e) {
                  err = new Error(e);
                }

                callback(err, file);
              } else {
                callback(new Error("Ajax error for " + path + " : " + this.status + " " + this.statusText), null);
              }
            }
          };

          xhr.send();
        } catch (e) {
          callback(new Error(e), null);
        }
      }; // export


      module.exports = JSZipUtils; // enforcing Stuk's coding style
      // vim: set shiftwidth=4 softtabstop=4:
    }, {}]
  }, {}, [1])(1);
});
;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib-for-link/src/admin-tools/article-download/jszip.js":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/admin-tools/article-download/jszip.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, setImmediate) {var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!

JSZip v3.2.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
(function (f) {
  if (false) {} else if (false) {} else {
    var g;

    if (typeof window !== "undefined") {
      g = window; //console.log(1)
    } else if (typeof global !== "undefined") {
      g = global; //console.log(2)
    } else if (typeof self !== "undefined") {
      g = self; //console.log(3)
    } else {
      g = this; //console.log(4)
    }

    g.JSZip = f(); //JSZip = f()
    //globalJSZip = f()
    //console.log(f)
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      'use strict';

      var utils = require('./utils');

      var support = require('./support'); // private property


      var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; // public method for encoding

      exports.encode = function (input) {
        var output = [];
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0,
            len = input.length,
            remainingBytes = len;
        var isArray = utils.getTypeOf(input) !== "string";

        while (i < input.length) {
          remainingBytes = len - i;

          if (!isArray) {
            chr1 = input.charCodeAt(i++);
            chr2 = i < len ? input.charCodeAt(i++) : 0;
            chr3 = i < len ? input.charCodeAt(i++) : 0;
          } else {
            chr1 = input[i++];
            chr2 = i < len ? input[i++] : 0;
            chr3 = i < len ? input[i++] : 0;
          }

          enc1 = chr1 >> 2;
          enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          enc3 = remainingBytes > 1 ? (chr2 & 15) << 2 | chr3 >> 6 : 64;
          enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
          output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
        }

        return output.join("");
      }; // public method for decoding


      exports.decode = function (input) {
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0,
            resultIndex = 0;
        var dataUrlPrefix = "data:";

        if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
          // This is a common error: people give a data url
          // (data:image/png;base64,iVBOR...) with a {base64: true} and
          // wonders why things don't work.
          // We can detect that the string input looks like a data url but we
          // *can't* be sure it is one: removing everything up to the comma would
          // be too dangerous.
          throw new Error("Invalid base64 input, it looks like a data url.");
        }

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var totalLength = input.length * 3 / 4;

        if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
          totalLength--;
        }

        if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
          totalLength--;
        }

        if (totalLength % 1 !== 0) {
          // totalLength is not an integer, the length does not match a valid
          // base64 content. That can happen if:
          // - the input is not a base64 content
          // - the input is *almost* a base64 content, with a extra chars at the
          //   beginning or at the end
          // - the input uses a base64 variant (base64url for example)
          throw new Error("Invalid base64 input, bad content length.");
        }

        var output;

        if (support.uint8array) {
          output = new Uint8Array(totalLength | 0);
        } else {
          output = new Array(totalLength | 0);
        }

        while (i < input.length) {
          enc1 = _keyStr.indexOf(input.charAt(i++));
          enc2 = _keyStr.indexOf(input.charAt(i++));
          enc3 = _keyStr.indexOf(input.charAt(i++));
          enc4 = _keyStr.indexOf(input.charAt(i++));
          chr1 = enc1 << 2 | enc2 >> 4;
          chr2 = (enc2 & 15) << 4 | enc3 >> 2;
          chr3 = (enc3 & 3) << 6 | enc4;
          output[resultIndex++] = chr1;

          if (enc3 !== 64) {
            output[resultIndex++] = chr2;
          }

          if (enc4 !== 64) {
            output[resultIndex++] = chr3;
          }
        }

        return output;
      };
    }, {
      "./support": 30,
      "./utils": 32
    }],
    2: [function (require, module, exports) {
      'use strict';

      var external = require("./external");

      var DataWorker = require('./stream/DataWorker');

      var DataLengthProbe = require('./stream/DataLengthProbe');

      var Crc32Probe = require('./stream/Crc32Probe');

      var DataLengthProbe = require('./stream/DataLengthProbe');
      /**
       * Represent a compressed object, with everything needed to decompress it.
       * @constructor
       * @param {number} compressedSize the size of the data compressed.
       * @param {number} uncompressedSize the size of the data after decompression.
       * @param {number} crc32 the crc32 of the decompressed file.
       * @param {object} compression the type of compression, see lib/compressions.js.
       * @param {String|ArrayBuffer|Uint8Array|Buffer} data the compressed data.
       */


      function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
        this.compressedSize = compressedSize;
        this.uncompressedSize = uncompressedSize;
        this.crc32 = crc32;
        this.compression = compression;
        this.compressedContent = data;
      }

      CompressedObject.prototype = {
        /**
         * Create a worker to get the uncompressed content.
         * @return {GenericWorker} the worker.
         */
        getContentWorker: function getContentWorker() {
          var worker = new DataWorker(external.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new DataLengthProbe("data_length"));
          var that = this;
          worker.on("end", function () {
            if (this.streamInfo['data_length'] !== that.uncompressedSize) {
              throw new Error("Bug : uncompressed data size mismatch");
            }
          });
          return worker;
        },

        /**
         * Create a worker to get the compressed content.
         * @return {GenericWorker} the worker.
         */
        getCompressedWorker: function getCompressedWorker() {
          return new DataWorker(external.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        }
      };
      /**
       * Chain the given worker with other workers to compress the content with the
       * given compresion.
       * @param {GenericWorker} uncompressedWorker the worker to pipe.
       * @param {Object} compression the compression object.
       * @param {Object} compressionOptions the options to use when compressing.
       * @return {GenericWorker} the new worker compressing the content.
       */

      CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
        return uncompressedWorker.pipe(new Crc32Probe()).pipe(new DataLengthProbe("uncompressedSize")).pipe(compression.compressWorker(compressionOptions)).pipe(new DataLengthProbe("compressedSize")).withStreamInfo("compression", compression);
      };

      module.exports = CompressedObject;
    }, {
      "./external": 6,
      "./stream/Crc32Probe": 25,
      "./stream/DataLengthProbe": 26,
      "./stream/DataWorker": 27
    }],
    3: [function (require, module, exports) {
      'use strict';

      var GenericWorker = require("./stream/GenericWorker");

      exports.STORE = {
        magic: "\x00\x00",
        compressWorker: function compressWorker(compressionOptions) {
          return new GenericWorker("STORE compression");
        },
        uncompressWorker: function uncompressWorker() {
          return new GenericWorker("STORE decompression");
        }
      };
      exports.DEFLATE = require('./flate');
    }, {
      "./flate": 7,
      "./stream/GenericWorker": 28
    }],
    4: [function (require, module, exports) {
      'use strict';

      var utils = require('./utils');
      /**
       * The following functions come from pako, from pako/lib/zlib/crc32.js
       * released under the MIT license, see pako https://github.com/nodeca/pako/
       */
      // Use ordinary array, since untyped makes no boost here


      function makeTable() {
        var c,
            table = [];

        for (var n = 0; n < 256; n++) {
          c = n;

          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }

          table[n] = c;
        }

        return table;
      } // Create table on load. Just 255 signed longs. Not a problem.


      var crcTable = makeTable();

      function crc32(crc, buf, len, pos) {
        var t = crcTable,
            end = pos + len;
        crc = crc ^ -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      } // That's all for the pako functions.

      /**
       * Compute the crc32 of a string.
       * This is almost the same as the function crc32, but for strings. Using the
       * same function for the two use cases leads to horrible performances.
       * @param {Number} crc the starting value of the crc.
       * @param {String} str the string to use.
       * @param {Number} len the length of the string.
       * @param {Number} pos the starting position for the crc32 computation.
       * @return {Number} the computed crc32.
       */


      function crc32str(crc, str, len, pos) {
        var t = crcTable,
            end = pos + len;
        crc = crc ^ -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ str.charCodeAt(i)) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      }

      module.exports = function crc32wrapper(input, crc) {
        if (typeof input === "undefined" || !input.length) {
          return 0;
        }

        var isArray = utils.getTypeOf(input) !== "string";

        if (isArray) {
          return crc32(crc | 0, input, input.length, 0);
        } else {
          return crc32str(crc | 0, input, input.length, 0);
        }
      };
    }, {
      "./utils": 32
    }],
    5: [function (require, module, exports) {
      'use strict';

      exports.base64 = false;
      exports.binary = false;
      exports.dir = false;
      exports.createFolders = true;
      exports.date = null;
      exports.compression = null;
      exports.compressionOptions = null;
      exports.comment = null;
      exports.unixPermissions = null;
      exports.dosPermissions = null;
    }, {}],
    6: [function (require, module, exports) {
      /* global Promise */
      'use strict'; // load the global object first:
      // - it should be better integrated in the system (unhandledRejection in node)
      // - the environment may have a custom Promise implementation (see zone.js)

      var ES6Promise = null;

      if (typeof Promise !== "undefined") {
        ES6Promise = Promise;
      } else {
        ES6Promise = require("lie");
      }
      /**
       * Let the user use/change some implementations.
       */


      module.exports = {
        Promise: ES6Promise
      };
    }, {
      "lie": 37
    }],
    7: [function (require, module, exports) {
      'use strict';

      var USE_TYPEDARRAY = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Uint32Array !== 'undefined';

      var pako = require("pako");

      var utils = require("./utils");

      var GenericWorker = require("./stream/GenericWorker");

      var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";
      exports.magic = "\x08\x00";
      /**
       * Create a worker that uses pako to inflate/deflate.
       * @constructor
       * @param {String} action the name of the pako function to call : either "Deflate" or "Inflate".
       * @param {Object} options the options to use when (de)compressing.
       */

      function FlateWorker(action, options) {
        GenericWorker.call(this, "FlateWorker/" + action);
        this._pako = null;
        this._pakoAction = action;
        this._pakoOptions = options; // the `meta` object from the last chunk received
        // this allow this worker to pass around metadata

        this.meta = {};
      }

      utils.inherits(FlateWorker, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      FlateWorker.prototype.processChunk = function (chunk) {
        this.meta = chunk.meta;

        if (this._pako === null) {
          this._createPako();
        }

        this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
      };
      /**
       * @see GenericWorker.flush
       */


      FlateWorker.prototype.flush = function () {
        GenericWorker.prototype.flush.call(this);

        if (this._pako === null) {
          this._createPako();
        }

        this._pako.push([], true);
      };
      /**
       * @see GenericWorker.cleanUp
       */


      FlateWorker.prototype.cleanUp = function () {
        GenericWorker.prototype.cleanUp.call(this);
        this._pako = null;
      };
      /**
       * Create the _pako object.
       * TODO: lazy-loading this object isn't the best solution but it's the
       * quickest. The best solution is to lazy-load the worker list. See also the
       * issue #446.
       */


      FlateWorker.prototype._createPako = function () {
        this._pako = new pako[this._pakoAction]({
          raw: true,
          level: this._pakoOptions.level || -1 // default compression

        });
        var self = this;

        this._pako.onData = function (data) {
          self.push({
            data: data,
            meta: self.meta
          });
        };
      };

      exports.compressWorker = function (compressionOptions) {
        return new FlateWorker("Deflate", compressionOptions);
      };

      exports.uncompressWorker = function () {
        return new FlateWorker("Inflate", {});
      };
    }, {
      "./stream/GenericWorker": 28,
      "./utils": 32,
      "pako": 38
    }],
    8: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      var GenericWorker = require('../stream/GenericWorker');

      var utf8 = require('../utf8');

      var crc32 = require('../crc32');

      var signature = require('../signature');
      /**
       * Transform an integer into a string in hexadecimal.
       * @private
       * @param {number} dec the number to convert.
       * @param {number} bytes the number of bytes to generate.
       * @returns {string} the result.
       */


      var decToHex = function decToHex(dec, bytes) {
        var hex = "",
            i;

        for (i = 0; i < bytes; i++) {
          hex += String.fromCharCode(dec & 0xff);
          dec = dec >>> 8;
        }

        return hex;
      };
      /**
       * Generate the UNIX part of the external file attributes.
       * @param {Object} unixPermissions the unix permissions or null.
       * @param {Boolean} isDir true if the entry is a directory, false otherwise.
       * @return {Number} a 32 bit integer.
       *
       * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
       *
       * TTTTsstrwxrwxrwx0000000000ADVSHR
       * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
       *     ^^^_________________________ setuid, setgid, sticky
       *        ^^^^^^^^^________________ permissions
       *                 ^^^^^^^^^^______ not used ?
       *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
       */


      var generateUnixExternalFileAttr = function generateUnixExternalFileAttr(unixPermissions, isDir) {
        var result = unixPermissions;

        if (!unixPermissions) {
          // I can't use octal values in strict mode, hence the hexa.
          //  040775 => 0x41fd
          // 0100664 => 0x81b4
          result = isDir ? 0x41fd : 0x81b4;
        }

        return (result & 0xFFFF) << 16;
      };
      /**
       * Generate the DOS part of the external file attributes.
       * @param {Object} dosPermissions the dos permissions or null.
       * @param {Boolean} isDir true if the entry is a directory, false otherwise.
       * @return {Number} a 32 bit integer.
       *
       * Bit 0     Read-Only
       * Bit 1     Hidden
       * Bit 2     System
       * Bit 3     Volume Label
       * Bit 4     Directory
       * Bit 5     Archive
       */


      var generateDosExternalFileAttr = function generateDosExternalFileAttr(dosPermissions, isDir) {
        // the dir flag is already set for compatibility
        return (dosPermissions || 0) & 0x3F;
      };
      /**
       * Generate the various parts used in the construction of the final zip file.
       * @param {Object} streamInfo the hash with informations about the compressed file.
       * @param {Boolean} streamedContent is the content streamed ?
       * @param {Boolean} streamingEnded is the stream finished ?
       * @param {number} offset the current offset from the start of the zip file.
       * @param {String} platform let's pretend we are this platform (change platform dependents fields)
       * @param {Function} encodeFileName the function to encode the file name / comment.
       * @return {Object} the zip parts.
       */


      var generateZipParts = function generateZipParts(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
        var file = streamInfo['file'],
            compression = streamInfo['compression'],
            useCustomEncoding = encodeFileName !== utf8.utf8encode,
            encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
            utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
            comment = file.comment,
            encodedComment = utils.transformTo("string", encodeFileName(comment)),
            utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
            useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
            useUTF8ForComment = utfEncodedComment.length !== comment.length,
            dosTime,
            dosDate,
            extraFields = "",
            unicodePathExtraField = "",
            unicodeCommentExtraField = "",
            dir = file.dir,
            date = file.date;
        var dataInfo = {
          crc32: 0,
          compressedSize: 0,
          uncompressedSize: 0
        }; // if the content is streamed, the sizes/crc32 are only available AFTER
        // the end of the stream.

        if (!streamedContent || streamingEnded) {
          dataInfo.crc32 = streamInfo['crc32'];
          dataInfo.compressedSize = streamInfo['compressedSize'];
          dataInfo.uncompressedSize = streamInfo['uncompressedSize'];
        }

        var bitflag = 0;

        if (streamedContent) {
          // Bit 3: the sizes/crc32 are set to zero in the local header.
          // The correct values are put in the data descriptor immediately
          // following the compressed data.
          bitflag |= 0x0008;
        }

        if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
          // Bit 11: Language encoding flag (EFS).
          bitflag |= 0x0800;
        }

        var extFileAttr = 0;
        var versionMadeBy = 0;

        if (dir) {
          // dos or unix, we set the dos dir flag
          extFileAttr |= 0x00010;
        }

        if (platform === "UNIX") {
          versionMadeBy = 0x031E; // UNIX, version 3.0

          extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
        } else {
          // DOS or other, fallback to DOS
          versionMadeBy = 0x0014; // DOS, version 2.0

          extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
        } // date
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html


        dosTime = date.getUTCHours();
        dosTime = dosTime << 6;
        dosTime = dosTime | date.getUTCMinutes();
        dosTime = dosTime << 5;
        dosTime = dosTime | date.getUTCSeconds() / 2;
        dosDate = date.getUTCFullYear() - 1980;
        dosDate = dosDate << 4;
        dosDate = dosDate | date.getUTCMonth() + 1;
        dosDate = dosDate << 5;
        dosDate = dosDate | date.getUTCDate();

        if (useUTF8ForFileName) {
          // set the unicode path extra field. unzip needs at least one extra
          // field to correctly handle unicode path, so using the path is as good
          // as any other information. This could improve the situation with
          // other archive managers too.
          // This field is usually used without the utf8 flag, with a non
          // unicode path in the header (winrar, winzip). This helps (a bit)
          // with the messy Windows' default compressed folders feature but
          // breaks on p7zip which doesn't seek the unicode path extra field.
          // So for now, UTF-8 everywhere !
          unicodePathExtraField = // Version
          decToHex(1, 1) + // NameCRC32
          decToHex(crc32(encodedFileName), 4) + // UnicodeName
          utfEncodedFileName;
          extraFields += // Info-ZIP Unicode Path Extra Field
          "\x75\x70" + // size
          decToHex(unicodePathExtraField.length, 2) + // content
          unicodePathExtraField;
        }

        if (useUTF8ForComment) {
          unicodeCommentExtraField = // Version
          decToHex(1, 1) + // CommentCRC32
          decToHex(crc32(encodedComment), 4) + // UnicodeName
          utfEncodedComment;
          extraFields += // Info-ZIP Unicode Path Extra Field
          "\x75\x63" + // size
          decToHex(unicodeCommentExtraField.length, 2) + // content
          unicodeCommentExtraField;
        }

        var header = ""; // version needed to extract

        header += "\x0A\x00"; // general purpose bit flag

        header += decToHex(bitflag, 2); // compression method

        header += compression.magic; // last mod file time

        header += decToHex(dosTime, 2); // last mod file date

        header += decToHex(dosDate, 2); // crc-32

        header += decToHex(dataInfo.crc32, 4); // compressed size

        header += decToHex(dataInfo.compressedSize, 4); // uncompressed size

        header += decToHex(dataInfo.uncompressedSize, 4); // file name length

        header += decToHex(encodedFileName.length, 2); // extra field length

        header += decToHex(extraFields.length, 2);
        var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
        var dirRecord = signature.CENTRAL_FILE_HEADER + // version made by (00: DOS)
        decToHex(versionMadeBy, 2) + // file header (common to file and central directory)
        header + // file comment length
        decToHex(encodedComment.length, 2) + // disk number start
        "\x00\x00" + // internal file attributes TODO
        "\x00\x00" + // external file attributes
        decToHex(extFileAttr, 4) + // relative offset of local header
        decToHex(offset, 4) + // file name
        encodedFileName + // extra field
        extraFields + // file comment
        encodedComment;
        return {
          fileRecord: fileRecord,
          dirRecord: dirRecord
        };
      };
      /**
       * Generate the EOCD record.
       * @param {Number} entriesCount the number of entries in the zip file.
       * @param {Number} centralDirLength the length (in bytes) of the central dir.
       * @param {Number} localDirLength the length (in bytes) of the local dir.
       * @param {String} comment the zip file comment as a binary string.
       * @param {Function} encodeFileName the function to encode the comment.
       * @return {String} the EOCD record.
       */


      var generateCentralDirectoryEnd = function generateCentralDirectoryEnd(entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
        var dirEnd = "";
        var encodedComment = utils.transformTo("string", encodeFileName(comment)); // end of central dir signature

        dirEnd = signature.CENTRAL_DIRECTORY_END + // number of this disk
        "\x00\x00" + // number of the disk with the start of the central directory
        "\x00\x00" + // total number of entries in the central directory on this disk
        decToHex(entriesCount, 2) + // total number of entries in the central directory
        decToHex(entriesCount, 2) + // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) + // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) + // .ZIP file comment length
        decToHex(encodedComment.length, 2) + // .ZIP file comment
        encodedComment;
        return dirEnd;
      };
      /**
       * Generate data descriptors for a file entry.
       * @param {Object} streamInfo the hash generated by a worker, containing informations
       * on the file entry.
       * @return {String} the data descriptors.
       */


      var generateDataDescriptors = function generateDataDescriptors(streamInfo) {
        var descriptor = "";
        descriptor = signature.DATA_DESCRIPTOR + // crc-32                          4 bytes
        decToHex(streamInfo['crc32'], 4) + // compressed size                 4 bytes
        decToHex(streamInfo['compressedSize'], 4) + // uncompressed size               4 bytes
        decToHex(streamInfo['uncompressedSize'], 4);
        return descriptor;
      };
      /**
       * A worker to concatenate other workers to create a zip file.
       * @param {Boolean} streamFiles `true` to stream the content of the files,
       * `false` to accumulate it.
       * @param {String} comment the comment to use.
       * @param {String} platform the platform to use, "UNIX" or "DOS".
       * @param {Function} encodeFileName the function to encode file names and comments.
       */


      function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
        GenericWorker.call(this, "ZipFileWorker"); // The number of bytes written so far. This doesn't count accumulated chunks.

        this.bytesWritten = 0; // The comment of the zip file

        this.zipComment = comment; // The platform "generating" the zip file.

        this.zipPlatform = platform; // the function to encode file names and comments.

        this.encodeFileName = encodeFileName; // Should we stream the content of the files ?

        this.streamFiles = streamFiles; // If `streamFiles` is false, we will need to accumulate the content of the
        // files to calculate sizes / crc32 (and write them *before* the content).
        // This boolean indicates if we are accumulating chunks (it will change a lot
        // during the lifetime of this worker).

        this.accumulate = false; // The buffer receiving chunks when accumulating content.

        this.contentBuffer = []; // The list of generated directory records.

        this.dirRecords = []; // The offset (in bytes) from the beginning of the zip file for the current source.

        this.currentSourceOffset = 0; // The total number of entries in this zip file.

        this.entriesCount = 0; // the name of the file currently being added, null when handling the end of the zip file.
        // Used for the emited metadata.

        this.currentFile = null;
        this._sources = [];
      }

      utils.inherits(ZipFileWorker, GenericWorker);
      /**
       * @see GenericWorker.push
       */

      ZipFileWorker.prototype.push = function (chunk) {
        var currentFilePercent = chunk.meta.percent || 0;
        var entriesCount = this.entriesCount;
        var remainingFiles = this._sources.length;

        if (this.accumulate) {
          this.contentBuffer.push(chunk);
        } else {
          this.bytesWritten += chunk.data.length;
          GenericWorker.prototype.push.call(this, {
            data: chunk.data,
            meta: {
              currentFile: this.currentFile,
              percent: entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
            }
          });
        }
      };
      /**
       * The worker started a new source (an other worker).
       * @param {Object} streamInfo the streamInfo object from the new source.
       */


      ZipFileWorker.prototype.openedSource = function (streamInfo) {
        this.currentSourceOffset = this.bytesWritten;
        this.currentFile = streamInfo['file'].name;
        var streamedContent = this.streamFiles && !streamInfo['file'].dir; // don't stream folders (because they don't have any content)

        if (streamedContent) {
          var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({
            data: record.fileRecord,
            meta: {
              percent: 0
            }
          });
        } else {
          // we need to wait for the whole file before pushing anything
          this.accumulate = true;
        }
      };
      /**
       * The worker finished a source (an other worker).
       * @param {Object} streamInfo the streamInfo object from the finished source.
       */


      ZipFileWorker.prototype.closedSource = function (streamInfo) {
        this.accumulate = false;
        var streamedContent = this.streamFiles && !streamInfo['file'].dir;
        var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.dirRecords.push(record.dirRecord);

        if (streamedContent) {
          // after the streamed file, we put data descriptors
          this.push({
            data: generateDataDescriptors(streamInfo),
            meta: {
              percent: 100
            }
          });
        } else {
          // the content wasn't streamed, we need to push everything now
          // first the file record, then the content
          this.push({
            data: record.fileRecord,
            meta: {
              percent: 0
            }
          });

          while (this.contentBuffer.length) {
            this.push(this.contentBuffer.shift());
          }
        }

        this.currentFile = null;
      };
      /**
       * @see GenericWorker.flush
       */


      ZipFileWorker.prototype.flush = function () {
        var localDirLength = this.bytesWritten;

        for (var i = 0; i < this.dirRecords.length; i++) {
          this.push({
            data: this.dirRecords[i],
            meta: {
              percent: 100
            }
          });
        }

        var centralDirLength = this.bytesWritten - localDirLength;
        var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);
        this.push({
          data: dirEnd,
          meta: {
            percent: 100
          }
        });
      };
      /**
       * Prepare the next source to be read.
       */


      ZipFileWorker.prototype.prepareNextSource = function () {
        this.previous = this._sources.shift();
        this.openedSource(this.previous.streamInfo);

        if (this.isPaused) {
          this.previous.pause();
        } else {
          this.previous.resume();
        }
      };
      /**
       * @see GenericWorker.registerPrevious
       */


      ZipFileWorker.prototype.registerPrevious = function (previous) {
        this._sources.push(previous);

        var self = this;
        previous.on('data', function (chunk) {
          self.processChunk(chunk);
        });
        previous.on('end', function () {
          self.closedSource(self.previous.streamInfo);

          if (self._sources.length) {
            self.prepareNextSource();
          } else {
            self.end();
          }
        });
        previous.on('error', function (e) {
          self.error(e);
        });
        return this;
      };
      /**
       * @see GenericWorker.resume
       */


      ZipFileWorker.prototype.resume = function () {
        if (!GenericWorker.prototype.resume.call(this)) {
          return false;
        }

        if (!this.previous && this._sources.length) {
          this.prepareNextSource();
          return true;
        }

        if (!this.previous && !this._sources.length && !this.generatedError) {
          this.end();
          return true;
        }
      };
      /**
       * @see GenericWorker.error
       */


      ZipFileWorker.prototype.error = function (e) {
        var sources = this._sources;

        if (!GenericWorker.prototype.error.call(this, e)) {
          return false;
        }

        for (var i = 0; i < sources.length; i++) {
          try {
            sources[i].error(e);
          } catch (e) {// the `error` exploded, nothing to do
          }
        }

        return true;
      };
      /**
       * @see GenericWorker.lock
       */


      ZipFileWorker.prototype.lock = function () {
        GenericWorker.prototype.lock.call(this);
        var sources = this._sources;

        for (var i = 0; i < sources.length; i++) {
          sources[i].lock();
        }
      };

      module.exports = ZipFileWorker;
    }, {
      "../crc32": 4,
      "../signature": 23,
      "../stream/GenericWorker": 28,
      "../utf8": 31,
      "../utils": 32
    }],
    9: [function (require, module, exports) {
      'use strict';

      var compressions = require('../compressions');

      var ZipFileWorker = require('./ZipFileWorker');
      /**
       * Find the compression to use.
       * @param {String} fileCompression the compression defined at the file level, if any.
       * @param {String} zipCompression the compression defined at the load() level.
       * @return {Object} the compression object to use.
       */


      var getCompression = function getCompression(fileCompression, zipCompression) {
        var compressionName = fileCompression || zipCompression;
        var compression = compressions[compressionName];

        if (!compression) {
          throw new Error(compressionName + " is not a valid compression method !");
        }

        return compression;
      };
      /**
       * Create a worker to generate a zip file.
       * @param {JSZip} zip the JSZip instance at the right root level.
       * @param {Object} options to generate the zip file.
       * @param {String} comment the comment to use.
       */


      exports.generateWorker = function (zip, options, comment) {
        var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
        var entriesCount = 0;

        try {
          zip.forEach(function (relativePath, file) {
            entriesCount++;
            var compression = getCompression(file.options.compression, options.compression);
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
            var dir = file.dir,
                date = file.date;

            file._compressWorker(compression, compressionOptions).withStreamInfo("file", {
              name: relativePath,
              dir: dir,
              date: date,
              comment: file.comment || "",
              unixPermissions: file.unixPermissions,
              dosPermissions: file.dosPermissions
            }).pipe(zipFileWorker);
          });
          zipFileWorker.entriesCount = entriesCount;
        } catch (e) {
          zipFileWorker.error(e);
        }

        return zipFileWorker;
      };
    }, {
      "../compressions": 3,
      "./ZipFileWorker": 8
    }],
    10: [function (require, module, exports) {
      'use strict';
      /**
       * Representation a of zip file in js
       * @constructor
       */

      function JSZip() {
        // if this constructor is used without `new`, it adds `new` before itself:
        if (!(this instanceof JSZip)) {
          return new JSZip();
        }

        if (arguments.length) {
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        } // object containing the files :
        // {
        //   "folder/" : {...},
        //   "folder/data.txt" : {...}
        // }


        this.files = {};
        this.comment = null; // Where we are in the hierarchy

        this.root = "";

        this.clone = function () {
          var newObj = new JSZip();

          for (var i in this) {
            if (typeof this[i] !== "function") {
              newObj[i] = this[i];
            }
          }

          return newObj;
        };
      }

      JSZip.prototype = require('./object');
      JSZip.prototype.loadAsync = require('./load');
      JSZip.support = require('./support');
      JSZip.defaults = require('./defaults'); // TODO find a better way to handle this version,
      // a require('package.json').version doesn't work with webpack, see #327

      JSZip.version = "3.2.0";

      JSZip.loadAsync = function (content, options) {
        return new JSZip().loadAsync(content, options);
      };

      JSZip.external = require("./external");
      module.exports = JSZip;
    }, {
      "./defaults": 5,
      "./external": 6,
      "./load": 11,
      "./object": 15,
      "./support": 30
    }],
    11: [function (require, module, exports) {
      'use strict';

      var utils = require('./utils');

      var external = require("./external");

      var utf8 = require('./utf8');

      var utils = require('./utils');

      var ZipEntries = require('./zipEntries');

      var Crc32Probe = require('./stream/Crc32Probe');

      var nodejsUtils = require("./nodejsUtils");
      /**
       * Check the CRC32 of an entry.
       * @param {ZipEntry} zipEntry the zip entry to check.
       * @return {Promise} the result.
       */


      function checkEntryCRC32(zipEntry) {
        return new external.Promise(function (resolve, reject) {
          var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
          worker.on("error", function (e) {
            reject(e);
          }).on("end", function () {
            if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
              reject(new Error("Corrupted zip : CRC32 mismatch"));
            } else {
              resolve();
            }
          }).resume();
        });
      }

      module.exports = function (data, options) {
        var zip = this;
        options = utils.extend(options || {}, {
          base64: false,
          checkCRC32: false,
          optimizedBinaryString: false,
          createFolders: false,
          decodeFileName: utf8.utf8decode
        });

        if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
          return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
        }

        return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64).then(function (data) {
          var zipEntries = new ZipEntries(options);
          zipEntries.load(data);
          return zipEntries;
        }).then(function checkCRC32(zipEntries) {
          var promises = [external.Promise.resolve(zipEntries)];
          var files = zipEntries.files;

          if (options.checkCRC32) {
            for (var i = 0; i < files.length; i++) {
              promises.push(checkEntryCRC32(files[i]));
            }
          }

          return external.Promise.all(promises);
        }).then(function addFiles(results) {
          var zipEntries = results.shift();
          var files = zipEntries.files;

          for (var i = 0; i < files.length; i++) {
            var input = files[i];
            zip.file(input.fileNameStr, input.decompressed, {
              binary: true,
              optimizedBinaryString: true,
              date: input.date,
              dir: input.dir,
              comment: input.fileCommentStr.length ? input.fileCommentStr : null,
              unixPermissions: input.unixPermissions,
              dosPermissions: input.dosPermissions,
              createFolders: options.createFolders
            });
          }

          if (zipEntries.zipComment.length) {
            zip.comment = zipEntries.zipComment;
          }

          return zip;
        });
      };
    }, {
      "./external": 6,
      "./nodejsUtils": 14,
      "./stream/Crc32Probe": 25,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntries": 33
    }],
    12: [function (require, module, exports) {
      "use strict";

      var utils = require('../utils');

      var GenericWorker = require('../stream/GenericWorker');
      /**
       * A worker that use a nodejs stream as source.
       * @constructor
       * @param {String} filename the name of the file entry for this stream.
       * @param {Readable} stream the nodejs stream.
       */


      function NodejsStreamInputAdapter(filename, stream) {
        GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
        this._upstreamEnded = false;

        this._bindStream(stream);
      }

      utils.inherits(NodejsStreamInputAdapter, GenericWorker);
      /**
       * Prepare the stream and bind the callbacks on it.
       * Do this ASAP on node 0.10 ! A lazy binding doesn't always work.
       * @param {Stream} stream the nodejs stream to use.
       */

      NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
        var self = this;
        this._stream = stream;
        stream.pause();
        stream.on("data", function (chunk) {
          self.push({
            data: chunk,
            meta: {
              percent: 0
            }
          });
        }).on("error", function (e) {
          if (self.isPaused) {
            this.generatedError = e;
          } else {
            self.error(e);
          }
        }).on("end", function () {
          if (self.isPaused) {
            self._upstreamEnded = true;
          } else {
            self.end();
          }
        });
      };

      NodejsStreamInputAdapter.prototype.pause = function () {
        if (!GenericWorker.prototype.pause.call(this)) {
          return false;
        }

        this._stream.pause();

        return true;
      };

      NodejsStreamInputAdapter.prototype.resume = function () {
        if (!GenericWorker.prototype.resume.call(this)) {
          return false;
        }

        if (this._upstreamEnded) {
          this.end();
        } else {
          this._stream.resume();
        }

        return true;
      };

      module.exports = NodejsStreamInputAdapter;
    }, {
      "../stream/GenericWorker": 28,
      "../utils": 32
    }],
    13: [function (require, module, exports) {
      'use strict';

      var Readable = require('readable-stream').Readable;

      var utils = require('../utils');

      utils.inherits(NodejsStreamOutputAdapter, Readable);
      /**
      * A nodejs stream using a worker as source.
      * @see the SourceWrapper in http://nodejs.org/api/stream.html
      * @constructor
      * @param {StreamHelper} helper the helper wrapping the worker
      * @param {Object} options the nodejs stream options
      * @param {Function} updateCb the update callback.
      */

      function NodejsStreamOutputAdapter(helper, options, updateCb) {
        Readable.call(this, options);
        this._helper = helper;
        var self = this;
        helper.on("data", function (data, meta) {
          if (!self.push(data)) {
            self._helper.pause();
          }

          if (updateCb) {
            updateCb(meta);
          }
        }).on("error", function (e) {
          self.emit('error', e);
        }).on("end", function () {
          self.push(null);
        });
      }

      NodejsStreamOutputAdapter.prototype._read = function () {
        this._helper.resume();
      };

      module.exports = NodejsStreamOutputAdapter;
    }, {
      "../utils": 32,
      "readable-stream": 16
    }],
    14: [function (require, module, exports) {
      'use strict';

      module.exports = {
        /**
         * True if this is running in Nodejs, will be undefined in a browser.
         * In a browser, browserify won't include this file and the whole module
         * will be resolved an empty object.
         */
        isNode: typeof Buffer !== "undefined",

        /**
         * Create a new nodejs Buffer from an existing content.
         * @param {Object} data the data to pass to the constructor.
         * @param {String} encoding the encoding to use.
         * @return {Buffer} a new Buffer.
         */
        newBufferFrom: function newBufferFrom(data, encoding) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) {
            return Buffer.from(data, encoding);
          } else {
            if (typeof data === "number") {
              // Safeguard for old Node.js versions. On newer versions,
              // Buffer.from(number) / Buffer(number, encoding) already throw.
              throw new Error("The \"data\" argument must not be a number");
            }

            return new Buffer(data, encoding);
          }
        },

        /**
         * Create a new nodejs Buffer with the specified size.
         * @param {Integer} size the size of the buffer.
         * @return {Buffer} a new Buffer.
         */
        allocBuffer: function allocBuffer(size) {
          if (Buffer.alloc) {
            return Buffer.alloc(size);
          } else {
            var buf = new Buffer(size);
            buf.fill(0);
            return buf;
          }
        },

        /**
         * Find out if an object is a Buffer.
         * @param {Object} b the object to test.
         * @return {Boolean} true if the object is a Buffer, false otherwise.
         */
        isBuffer: function isBuffer(b) {
          return Buffer.isBuffer(b);
        },
        isStream: function isStream(obj) {
          return obj && typeof obj.on === "function" && typeof obj.pause === "function" && typeof obj.resume === "function";
        }
      };
    }, {}],
    15: [function (require, module, exports) {
      'use strict';

      var utf8 = require('./utf8');

      var utils = require('./utils');

      var GenericWorker = require('./stream/GenericWorker');

      var StreamHelper = require('./stream/StreamHelper');

      var defaults = require('./defaults');

      var CompressedObject = require('./compressedObject');

      var ZipObject = require('./zipObject');

      var generate = require("./generate");

      var nodejsUtils = require("./nodejsUtils");

      var NodejsStreamInputAdapter = require("./nodejs/NodejsStreamInputAdapter");
      /**
       * Add a file in the current folder.
       * @private
       * @param {string} name the name of the file
       * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
       * @param {Object} originalOptions the options of the file
       * @return {Object} the new file.
       */


      var fileAdd = function fileAdd(name, data, originalOptions) {
        // be sure sub folders exist
        var dataType = utils.getTypeOf(data),
            parent;
        /*
         * Correct options.
         */

        var o = utils.extend(originalOptions || {}, defaults);
        o.date = o.date || new Date();

        if (o.compression !== null) {
          o.compression = o.compression.toUpperCase();
        }

        if (typeof o.unixPermissions === "string") {
          o.unixPermissions = parseInt(o.unixPermissions, 8);
        } // UNX_IFDIR  0040000 see zipinfo.c


        if (o.unixPermissions && o.unixPermissions & 0x4000) {
          o.dir = true;
        } // Bit 4    Directory


        if (o.dosPermissions && o.dosPermissions & 0x0010) {
          o.dir = true;
        }

        if (o.dir) {
          name = forceTrailingSlash(name);
        }

        if (o.createFolders && (parent = parentFolder(name))) {
          folderAdd.call(this, parent, true);
        }

        var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;

        if (!originalOptions || typeof originalOptions.binary === "undefined") {
          o.binary = !isUnicodeString;
        }

        var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;

        if (isCompressedEmpty || o.dir || !data || data.length === 0) {
          o.base64 = false;
          o.binary = true;
          data = "";
          o.compression = "STORE";
          dataType = "string";
        }
        /*
         * Convert content to fit.
         */


        var zipObjectContent = null;

        if (data instanceof CompressedObject || data instanceof GenericWorker) {
          zipObjectContent = data;
        } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
          zipObjectContent = new NodejsStreamInputAdapter(name, data);
        } else {
          zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
        }

        var object = new ZipObject(name, zipObjectContent, o);
        this.files[name] = object;
        /*
        TODO: we can't throw an exception because we have async promises
        (we can have a promise of a Date() for example) but returning a
        promise is useless because file(name, data) returns the JSZip
        object for chaining. Should we break that to allow the user
        to catch the error ?
         return external.Promise.resolve(zipObjectContent)
        .then(function () {
            return object;
        });
        */
      };
      /**
       * Find the parent folder of the path.
       * @private
       * @param {string} path the path to use
       * @return {string} the parent folder, or ""
       */


      var parentFolder = function parentFolder(path) {
        if (path.slice(-1) === '/') {
          path = path.substring(0, path.length - 1);
        }

        var lastSlash = path.lastIndexOf('/');
        return lastSlash > 0 ? path.substring(0, lastSlash) : "";
      };
      /**
       * Returns the path with a slash at the end.
       * @private
       * @param {String} path the path to check.
       * @return {String} the path with a trailing slash.
       */


      var forceTrailingSlash = function forceTrailingSlash(path) {
        // Check the name ends with a /
        if (path.slice(-1) !== "/") {
          path += "/"; // IE doesn't like substr(-1)
        }

        return path;
      };
      /**
       * Add a (sub) folder in the current folder.
       * @private
       * @param {string} name the folder's name
       * @param {boolean=} [createFolders] If true, automatically create sub
       *  folders. Defaults to false.
       * @return {Object} the new folder.
       */


      var folderAdd = function folderAdd(name, createFolders) {
        createFolders = typeof createFolders !== 'undefined' ? createFolders : defaults.createFolders;
        name = forceTrailingSlash(name); // Does this folder already exist?

        if (!this.files[name]) {
          fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
          });
        }

        return this.files[name];
      };
      /**
      * Cross-window, cross-Node-context regular expression detection
      * @param  {Object}  object Anything
      * @return {Boolean}        true if the object is a regular expression,
      * false otherwise
      */


      function isRegExp(object) {
        return Object.prototype.toString.call(object) === "[object RegExp]";
      } // return the actual prototype of JSZip


      var out = {
        /**
         * @see loadAsync
         */
        load: function load() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },

        /**
         * Call a callback function for each entry at this folder level.
         * @param {Function} cb the callback function:
         * function (relativePath, file) {...}
         * It takes 2 arguments : the relative path and the file.
         */
        forEach: function forEach(cb) {
          var filename, relativePath, file;

          for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
              continue;
            }

            file = this.files[filename];
            relativePath = filename.slice(this.root.length, filename.length);

            if (relativePath && filename.slice(0, this.root.length) === this.root) {
              // the file is in the current root
              cb(relativePath, file); // TODO reverse the parameters ? need to be clean AND consistent with the filter search fn...
            }
          }
        },

        /**
         * Filter nested files/folders with the specified function.
         * @param {Function} search the predicate to use :
         * function (relativePath, file) {...}
         * It takes 2 arguments : the relative path and the file.
         * @return {Array} An array of matching elements.
         */
        filter: function filter(search) {
          var result = [];
          this.forEach(function (relativePath, entry) {
            if (search(relativePath, entry)) {
              // the file matches the function
              result.push(entry);
            }
          });
          return result;
        },

        /**
         * Add a file to the zip file, or search a file.
         * @param   {string|RegExp} name The name of the file to add (if data is defined),
         * the name of the file to find (if no data) or a regex to match files.
         * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
         * @param   {Object} o     File options
         * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
         * a file (when searching by string) or an array of files (when searching by regex).
         */
        file: function file(name, data, o) {
          if (arguments.length === 1) {
            if (isRegExp(name)) {
              var regexp = name;
              return this.filter(function (relativePath, file) {
                return !file.dir && regexp.test(relativePath);
              });
            } else {
              // text
              var obj = this.files[this.root + name];

              if (obj && !obj.dir) {
                return obj;
              } else {
                return null;
              }
            }
          } else {
            // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
          }

          return this;
        },

        /**
         * Add a directory to the zip file, or search.
         * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
         * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
         */
        folder: function folder(arg) {
          if (!arg) {
            return this;
          }

          if (isRegExp(arg)) {
            return this.filter(function (relativePath, file) {
              return file.dir && arg.test(relativePath);
            });
          } // else, name is a new folder


          var name = this.root + arg;
          var newFolder = folderAdd.call(this, name); // Allow chaining by returning a new object with this folder as the root

          var ret = this.clone();
          ret.root = newFolder.name;
          return ret;
        },

        /**
         * Delete a file, or a directory and all sub-files, from the zip
         * @param {string} name the name of the file to delete
         * @return {JSZip} this JSZip object
         */
        remove: function remove(name) {
          name = this.root + name;
          var file = this.files[name];

          if (!file) {
            // Look for any folders
            if (name.slice(-1) !== "/") {
              name += "/";
            }

            file = this.files[name];
          }

          if (file && !file.dir) {
            // file
            delete this.files[name];
          } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function (relativePath, file) {
              return file.name.slice(0, name.length) === name;
            });

            for (var i = 0; i < kids.length; i++) {
              delete this.files[kids[i].name];
            }
          }

          return this;
        },

        /**
         * Generate the complete zip file
         * @param {Object} options the options to generate the zip file :
         * - compression, "STORE" by default.
         * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
         * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
         */
        generate: function generate(options) {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },

        /**
         * Generate the complete zip file as an internal stream.
         * @param {Object} options the options to generate the zip file :
         * - compression, "STORE" by default.
         * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
         * @return {StreamHelper} the streamed zip file.
         */
        generateInternalStream: function generateInternalStream(options) {
          var worker,
              opts = {};

          try {
            opts = utils.extend(options || {}, {
              streamFiles: false,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: 'application/zip',
              encodeFileName: utf8.utf8encode
            });
            opts.type = opts.type.toLowerCase();
            opts.compression = opts.compression.toUpperCase(); // "binarystring" is prefered but the internals use "string".

            if (opts.type === "binarystring") {
              opts.type = "string";
            }

            if (!opts.type) {
              throw new Error("No output type specified.");
            }

            utils.checkSupport(opts.type); // accept nodejs `process.platform`

            if (opts.platform === 'darwin' || opts.platform === 'freebsd' || opts.platform === 'linux' || opts.platform === 'sunos') {
              opts.platform = "UNIX";
            }

            if (opts.platform === 'win32') {
              opts.platform = "DOS";
            }

            var comment = opts.comment || this.comment || "";
            worker = generate.generateWorker(this, opts, comment);
          } catch (e) {
            worker = new GenericWorker("error");
            worker.error(e);
          }

          return new StreamHelper(worker, opts.type || "string", opts.mimeType);
        },

        /**
         * Generate the complete zip file asynchronously.
         * @see generateInternalStream
         */
        generateAsync: function generateAsync(options, onUpdate) {
          return this.generateInternalStream(options).accumulate(onUpdate);
        },

        /**
         * Generate the complete zip file asynchronously.
         * @see generateInternalStream
         */
        generateNodeStream: function generateNodeStream(options, onUpdate) {
          options = options || {};

          if (!options.type) {
            options.type = "nodebuffer";
          }

          return this.generateInternalStream(options).toNodejsStream(onUpdate);
        }
      };
      module.exports = out;
    }, {
      "./compressedObject": 2,
      "./defaults": 5,
      "./generate": 9,
      "./nodejs/NodejsStreamInputAdapter": 12,
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31,
      "./utils": 32,
      "./zipObject": 35
    }],
    16: [function (require, module, exports) {
      /*
       * This file is used by module bundlers (browserify/webpack/etc) when
       * including a stream implementation. We use "readable-stream" to get a
       * consistent behavior between nodejs versions but bundlers often have a shim
       * for "stream". Using this shim greatly improve the compatibility and greatly
       * reduce the final size of the bundle (only one stream implementation, not
       * two).
       */
      module.exports = require("stream");
    }, {
      "stream": undefined
    }],
    17: [function (require, module, exports) {
      'use strict';

      var DataReader = require('./DataReader');

      var utils = require('../utils');

      function ArrayReader(data) {
        DataReader.call(this, data);

        for (var i = 0; i < this.data.length; i++) {
          data[i] = data[i] & 0xFF;
        }
      }

      utils.inherits(ArrayReader, DataReader);
      /**
       * @see DataReader.byteAt
       */

      ArrayReader.prototype.byteAt = function (i) {
        return this.data[this.zero + i];
      };
      /**
       * @see DataReader.lastIndexOfSignature
       */


      ArrayReader.prototype.lastIndexOfSignature = function (sig) {
        var sig0 = sig.charCodeAt(0),
            sig1 = sig.charCodeAt(1),
            sig2 = sig.charCodeAt(2),
            sig3 = sig.charCodeAt(3);

        for (var i = this.length - 4; i >= 0; --i) {
          if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
          }
        }

        return -1;
      };
      /**
       * @see DataReader.readAndCheckSignature
       */


      ArrayReader.prototype.readAndCheckSignature = function (sig) {
        var sig0 = sig.charCodeAt(0),
            sig1 = sig.charCodeAt(1),
            sig2 = sig.charCodeAt(2),
            sig3 = sig.charCodeAt(3),
            data = this.readData(4);
        return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
      };
      /**
       * @see DataReader.readData
       */


      ArrayReader.prototype.readData = function (size) {
        this.checkOffset(size);

        if (size === 0) {
          return [];
        }

        var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
        this.index += size;
        return result;
      };

      module.exports = ArrayReader;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    18: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      function DataReader(data) {
        this.data = data; // type : see implementation

        this.length = data.length;
        this.index = 0;
        this.zero = 0;
      }

      DataReader.prototype = {
        /**
         * Check that the offset will not go too far.
         * @param {string} offset the additional offset to check.
         * @throws {Error} an Error if the offset is out of bounds.
         */
        checkOffset: function checkOffset(offset) {
          this.checkIndex(this.index + offset);
        },

        /**
         * Check that the specified index will not be too far.
         * @param {string} newIndex the index to check.
         * @throws {Error} an Error if the index is out of bounds.
         */
        checkIndex: function checkIndex(newIndex) {
          if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
          }
        },

        /**
         * Change the index.
         * @param {number} newIndex The new index.
         * @throws {Error} if the new index is out of the data.
         */
        setIndex: function setIndex(newIndex) {
          this.checkIndex(newIndex);
          this.index = newIndex;
        },

        /**
         * Skip the next n bytes.
         * @param {number} n the number of bytes to skip.
         * @throws {Error} if the new index is out of the data.
         */
        skip: function skip(n) {
          this.setIndex(this.index + n);
        },

        /**
         * Get the byte at the specified index.
         * @param {number} i the index to use.
         * @return {number} a byte.
         */
        byteAt: function byteAt(i) {// see implementations
        },

        /**
         * Get the next number with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {number} the corresponding number.
         */
        readInt: function readInt(size) {
          var result = 0,
              i;
          this.checkOffset(size);

          for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
          }

          this.index += size;
          return result;
        },

        /**
         * Get the next string with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {string} the corresponding string.
         */
        readString: function readString(size) {
          return utils.transformTo("string", this.readData(size));
        },

        /**
         * Get raw data without conversion, <size> bytes.
         * @param {number} size the number of bytes to read.
         * @return {Object} the raw data, implementation specific.
         */
        readData: function readData(size) {// see implementations
        },

        /**
         * Find the last occurence of a zip signature (4 bytes).
         * @param {string} sig the signature to find.
         * @return {number} the index of the last occurence, -1 if not found.
         */
        lastIndexOfSignature: function lastIndexOfSignature(sig) {// see implementations
        },

        /**
         * Read the signature (4 bytes) at the current position and compare it with sig.
         * @param {string} sig the expected signature
         * @return {boolean} true if the signature matches, false otherwise.
         */
        readAndCheckSignature: function readAndCheckSignature(sig) {// see implementations
        },

        /**
         * Get the next date.
         * @return {Date} the date.
         */
        readDate: function readDate() {
          var dostime = this.readInt(4);
          return new Date(Date.UTC((dostime >> 25 & 0x7f) + 1980, // year
          (dostime >> 21 & 0x0f) - 1, // month
          dostime >> 16 & 0x1f, // day
          dostime >> 11 & 0x1f, // hour
          dostime >> 5 & 0x3f, // minute
          (dostime & 0x1f) << 1)); // second
        }
      };
      module.exports = DataReader;
    }, {
      "../utils": 32
    }],
    19: [function (require, module, exports) {
      'use strict';

      var Uint8ArrayReader = require('./Uint8ArrayReader');

      var utils = require('../utils');

      function NodeBufferReader(data) {
        Uint8ArrayReader.call(this, data);
      }

      utils.inherits(NodeBufferReader, Uint8ArrayReader);
      /**
       * @see DataReader.readData
       */

      NodeBufferReader.prototype.readData = function (size) {
        this.checkOffset(size);
        var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
        this.index += size;
        return result;
      };

      module.exports = NodeBufferReader;
    }, {
      "../utils": 32,
      "./Uint8ArrayReader": 21
    }],
    20: [function (require, module, exports) {
      'use strict';

      var DataReader = require('./DataReader');

      var utils = require('../utils');

      function StringReader(data) {
        DataReader.call(this, data);
      }

      utils.inherits(StringReader, DataReader);
      /**
       * @see DataReader.byteAt
       */

      StringReader.prototype.byteAt = function (i) {
        return this.data.charCodeAt(this.zero + i);
      };
      /**
       * @see DataReader.lastIndexOfSignature
       */


      StringReader.prototype.lastIndexOfSignature = function (sig) {
        return this.data.lastIndexOf(sig) - this.zero;
      };
      /**
       * @see DataReader.readAndCheckSignature
       */


      StringReader.prototype.readAndCheckSignature = function (sig) {
        var data = this.readData(4);
        return sig === data;
      };
      /**
       * @see DataReader.readData
       */


      StringReader.prototype.readData = function (size) {
        this.checkOffset(size); // this will work because the constructor applied the "& 0xff" mask.

        var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
        this.index += size;
        return result;
      };

      module.exports = StringReader;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    21: [function (require, module, exports) {
      'use strict';

      var ArrayReader = require('./ArrayReader');

      var utils = require('../utils');

      function Uint8ArrayReader(data) {
        ArrayReader.call(this, data);
      }

      utils.inherits(Uint8ArrayReader, ArrayReader);
      /**
       * @see DataReader.readData
       */

      Uint8ArrayReader.prototype.readData = function (size) {
        this.checkOffset(size);

        if (size === 0) {
          // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
          return new Uint8Array(0);
        }

        var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
        this.index += size;
        return result;
      };

      module.exports = Uint8ArrayReader;
    }, {
      "../utils": 32,
      "./ArrayReader": 17
    }],
    22: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      var support = require('../support');

      var ArrayReader = require('./ArrayReader');

      var StringReader = require('./StringReader');

      var NodeBufferReader = require('./NodeBufferReader');

      var Uint8ArrayReader = require('./Uint8ArrayReader');
      /**
       * Create a reader adapted to the data.
       * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data to read.
       * @return {DataReader} the data reader.
       */


      module.exports = function (data) {
        var type = utils.getTypeOf(data);
        utils.checkSupport(type);

        if (type === "string" && !support.uint8array) {
          return new StringReader(data);
        }

        if (type === "nodebuffer") {
          return new NodeBufferReader(data);
        }

        if (support.uint8array) {
          return new Uint8ArrayReader(utils.transformTo("uint8array", data));
        }

        return new ArrayReader(utils.transformTo("array", data));
      };
    }, {
      "../support": 30,
      "../utils": 32,
      "./ArrayReader": 17,
      "./NodeBufferReader": 19,
      "./StringReader": 20,
      "./Uint8ArrayReader": 21
    }],
    23: [function (require, module, exports) {
      'use strict';

      exports.LOCAL_FILE_HEADER = "PK\x03\x04";
      exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
      exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
      exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
      exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
      exports.DATA_DESCRIPTOR = "PK\x07\x08";
    }, {}],
    24: [function (require, module, exports) {
      'use strict';

      var GenericWorker = require('./GenericWorker');

      var utils = require('../utils');
      /**
       * A worker which convert chunks to a specified type.
       * @constructor
       * @param {String} destType the destination type.
       */


      function ConvertWorker(destType) {
        GenericWorker.call(this, "ConvertWorker to " + destType);
        this.destType = destType;
      }

      utils.inherits(ConvertWorker, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      ConvertWorker.prototype.processChunk = function (chunk) {
        this.push({
          data: utils.transformTo(this.destType, chunk.data),
          meta: chunk.meta
        });
      };

      module.exports = ConvertWorker;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    25: [function (require, module, exports) {
      'use strict';

      var GenericWorker = require('./GenericWorker');

      var crc32 = require('../crc32');

      var utils = require('../utils');
      /**
       * A worker which calculate the crc32 of the data flowing through.
       * @constructor
       */


      function Crc32Probe() {
        GenericWorker.call(this, "Crc32Probe");
        this.withStreamInfo("crc32", 0);
      }

      utils.inherits(Crc32Probe, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      Crc32Probe.prototype.processChunk = function (chunk) {
        this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
        this.push(chunk);
      };

      module.exports = Crc32Probe;
    }, {
      "../crc32": 4,
      "../utils": 32,
      "./GenericWorker": 28
    }],
    26: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      var GenericWorker = require('./GenericWorker');
      /**
       * A worker which calculate the total length of the data flowing through.
       * @constructor
       * @param {String} propName the name used to expose the length
       */


      function DataLengthProbe(propName) {
        GenericWorker.call(this, "DataLengthProbe for " + propName);
        this.propName = propName;
        this.withStreamInfo(propName, 0);
      }

      utils.inherits(DataLengthProbe, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      DataLengthProbe.prototype.processChunk = function (chunk) {
        if (chunk) {
          var length = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = length + chunk.data.length;
        }

        GenericWorker.prototype.processChunk.call(this, chunk);
      };

      module.exports = DataLengthProbe;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    27: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      var GenericWorker = require('./GenericWorker'); // the size of the generated chunks
      // TODO expose this as a public variable


      var DEFAULT_BLOCK_SIZE = 16 * 1024;
      /**
       * A worker that reads a content and emits chunks.
       * @constructor
       * @param {Promise} dataP the promise of the data to split
       */

      function DataWorker(dataP) {
        GenericWorker.call(this, "DataWorker");
        var self = this;
        this.dataIsReady = false;
        this.index = 0;
        this.max = 0;
        this.data = null;
        this.type = "";
        this._tickScheduled = false;
        dataP.then(function (data) {
          self.dataIsReady = true;
          self.data = data;
          self.max = data && data.length || 0;
          self.type = utils.getTypeOf(data);

          if (!self.isPaused) {
            self._tickAndRepeat();
          }
        }, function (e) {
          self.error(e);
        });
      }

      utils.inherits(DataWorker, GenericWorker);
      /**
       * @see GenericWorker.cleanUp
       */

      DataWorker.prototype.cleanUp = function () {
        GenericWorker.prototype.cleanUp.call(this);
        this.data = null;
      };
      /**
       * @see GenericWorker.resume
       */


      DataWorker.prototype.resume = function () {
        if (!GenericWorker.prototype.resume.call(this)) {
          return false;
        }

        if (!this._tickScheduled && this.dataIsReady) {
          this._tickScheduled = true;
          utils.delay(this._tickAndRepeat, [], this);
        }

        return true;
      };
      /**
       * Trigger a tick a schedule an other call to this function.
       */


      DataWorker.prototype._tickAndRepeat = function () {
        this._tickScheduled = false;

        if (this.isPaused || this.isFinished) {
          return;
        }

        this._tick();

        if (!this.isFinished) {
          utils.delay(this._tickAndRepeat, [], this);
          this._tickScheduled = true;
        }
      };
      /**
       * Read and push a chunk.
       */


      DataWorker.prototype._tick = function () {
        if (this.isPaused || this.isFinished) {
          return false;
        }

        var size = DEFAULT_BLOCK_SIZE;
        var data = null,
            nextIndex = Math.min(this.max, this.index + size);

        if (this.index >= this.max) {
          // EOF
          return this.end();
        } else {
          switch (this.type) {
            case "string":
              data = this.data.substring(this.index, nextIndex);
              break;

            case "uint8array":
              data = this.data.subarray(this.index, nextIndex);
              break;

            case "array":
            case "nodebuffer":
              data = this.data.slice(this.index, nextIndex);
              break;
          }

          this.index = nextIndex;
          return this.push({
            data: data,
            meta: {
              percent: this.max ? this.index / this.max * 100 : 0
            }
          });
        }
      };

      module.exports = DataWorker;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    28: [function (require, module, exports) {
      'use strict';
      /**
       * A worker that does nothing but passing chunks to the next one. This is like
       * a nodejs stream but with some differences. On the good side :
       * - it works on IE 6-9 without any issue / polyfill
       * - it weights less than the full dependencies bundled with browserify
       * - it forwards errors (no need to declare an error handler EVERYWHERE)
       *
       * A chunk is an object with 2 attributes : `meta` and `data`. The former is an
       * object containing anything (`percent` for example), see each worker for more
       * details. The latter is the real data (String, Uint8Array, etc).
       *
       * @constructor
       * @param {String} name the name of the stream (mainly used for debugging purposes)
       */

      function GenericWorker(name) {
        // the name of the worker
        this.name = name || "default"; // an object containing metadata about the workers chain

        this.streamInfo = {}; // an error which happened when the worker was paused

        this.generatedError = null; // an object containing metadata to be merged by this worker into the general metadata

        this.extraStreamInfo = {}; // true if the stream is paused (and should not do anything), false otherwise

        this.isPaused = true; // true if the stream is finished (and should not do anything), false otherwise

        this.isFinished = false; // true if the stream is locked to prevent further structure updates (pipe), false otherwise

        this.isLocked = false; // the event listeners

        this._listeners = {
          'data': [],
          'end': [],
          'error': []
        }; // the previous worker, if any

        this.previous = null;
      }

      GenericWorker.prototype = {
        /**
         * Push a chunk to the next workers.
         * @param {Object} chunk the chunk to push
         */
        push: function push(chunk) {
          this.emit("data", chunk);
        },

        /**
         * End the stream.
         * @return {Boolean} true if this call ended the worker, false otherwise.
         */
        end: function end() {
          if (this.isFinished) {
            return false;
          }

          this.flush();

          try {
            this.emit("end");
            this.cleanUp();
            this.isFinished = true;
          } catch (e) {
            this.emit("error", e);
          }

          return true;
        },

        /**
         * End the stream with an error.
         * @param {Error} e the error which caused the premature end.
         * @return {Boolean} true if this call ended the worker with an error, false otherwise.
         */
        error: function error(e) {
          if (this.isFinished) {
            return false;
          }

          if (this.isPaused) {
            this.generatedError = e;
          } else {
            this.isFinished = true;
            this.emit("error", e); // in the workers chain exploded in the middle of the chain,
            // the error event will go downward but we also need to notify
            // workers upward that there has been an error.

            if (this.previous) {
              this.previous.error(e);
            }

            this.cleanUp();
          }

          return true;
        },

        /**
         * Add a callback on an event.
         * @param {String} name the name of the event (data, end, error)
         * @param {Function} listener the function to call when the event is triggered
         * @return {GenericWorker} the current object for chainability
         */
        on: function on(name, listener) {
          this._listeners[name].push(listener);

          return this;
        },

        /**
         * Clean any references when a worker is ending.
         */
        cleanUp: function cleanUp() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null;
          this._listeners = [];
        },

        /**
         * Trigger an event. This will call registered callback with the provided arg.
         * @param {String} name the name of the event (data, end, error)
         * @param {Object} arg the argument to call the callback with.
         */
        emit: function emit(name, arg) {
          if (this._listeners[name]) {
            for (var i = 0; i < this._listeners[name].length; i++) {
              this._listeners[name][i].call(this, arg);
            }
          }
        },

        /**
         * Chain a worker with an other.
         * @param {Worker} next the worker receiving events from the current one.
         * @return {worker} the next worker for chainability
         */
        pipe: function pipe(next) {
          return next.registerPrevious(this);
        },

        /**
         * Same as `pipe` in the other direction.
         * Using an API with `pipe(next)` is very easy.
         * Implementing the API with the point of view of the next one registering
         * a source is easier, see the ZipFileWorker.
         * @param {Worker} previous the previous worker, sending events to this one
         * @return {Worker} the current worker for chainability
         */
        registerPrevious: function registerPrevious(previous) {
          if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
          } // sharing the streamInfo...


          this.streamInfo = previous.streamInfo; // ... and adding our own bits

          this.mergeStreamInfo();
          this.previous = previous;
          var self = this;
          previous.on('data', function (chunk) {
            self.processChunk(chunk);
          });
          previous.on('end', function () {
            self.end();
          });
          previous.on('error', function (e) {
            self.error(e);
          });
          return this;
        },

        /**
         * Pause the stream so it doesn't send events anymore.
         * @return {Boolean} true if this call paused the worker, false otherwise.
         */
        pause: function pause() {
          if (this.isPaused || this.isFinished) {
            return false;
          }

          this.isPaused = true;

          if (this.previous) {
            this.previous.pause();
          }

          return true;
        },

        /**
         * Resume a paused stream.
         * @return {Boolean} true if this call resumed the worker, false otherwise.
         */
        resume: function resume() {
          if (!this.isPaused || this.isFinished) {
            return false;
          }

          this.isPaused = false; // if true, the worker tried to resume but failed

          var withError = false;

          if (this.generatedError) {
            this.error(this.generatedError);
            withError = true;
          }

          if (this.previous) {
            this.previous.resume();
          }

          return !withError;
        },

        /**
         * Flush any remaining bytes as the stream is ending.
         */
        flush: function flush() {},

        /**
         * Process a chunk. This is usually the method overridden.
         * @param {Object} chunk the chunk to process.
         */
        processChunk: function processChunk(chunk) {
          this.push(chunk);
        },

        /**
         * Add a key/value to be added in the workers chain streamInfo once activated.
         * @param {String} key the key to use
         * @param {Object} value the associated value
         * @return {Worker} the current worker for chainability
         */
        withStreamInfo: function withStreamInfo(key, value) {
          this.extraStreamInfo[key] = value;
          this.mergeStreamInfo();
          return this;
        },

        /**
         * Merge this worker's streamInfo into the chain's streamInfo.
         */
        mergeStreamInfo: function mergeStreamInfo() {
          for (var key in this.extraStreamInfo) {
            if (!this.extraStreamInfo.hasOwnProperty(key)) {
              continue;
            }

            this.streamInfo[key] = this.extraStreamInfo[key];
          }
        },

        /**
         * Lock the stream to prevent further updates on the workers chain.
         * After calling this method, all calls to pipe will fail.
         */
        lock: function lock() {
          if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
          }

          this.isLocked = true;

          if (this.previous) {
            this.previous.lock();
          }
        },

        /**
         *
         * Pretty print the workers chain.
         */
        toString: function toString() {
          var me = "Worker " + this.name;

          if (this.previous) {
            return this.previous + " -> " + me;
          } else {
            return me;
          }
        }
      };
      module.exports = GenericWorker;
    }, {}],
    29: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils');

      var ConvertWorker = require('./ConvertWorker');

      var GenericWorker = require('./GenericWorker');

      var base64 = require('../base64');

      var support = require("../support");

      var external = require("../external");

      var NodejsStreamOutputAdapter = null;

      if (support.nodestream) {
        try {
          NodejsStreamOutputAdapter = require('../nodejs/NodejsStreamOutputAdapter');
        } catch (e) {}
      }
      /**
       * Apply the final transformation of the data. If the user wants a Blob for
       * example, it's easier to work with an U8intArray and finally do the
       * ArrayBuffer/Blob conversion.
       * @param {String} type the name of the final type
       * @param {String|Uint8Array|Buffer} content the content to transform
       * @param {String} mimeType the mime type of the content, if applicable.
       * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the content in the right format.
       */


      function transformZipOutput(type, content, mimeType) {
        switch (type) {
          case "blob":
            return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);

          case "base64":
            return base64.encode(content);

          default:
            return utils.transformTo(type, content);
        }
      }
      /**
       * Concatenate an array of data of the given type.
       * @param {String} type the type of the data in the given array.
       * @param {Array} dataArray the array containing the data chunks to concatenate
       * @return {String|Uint8Array|Buffer} the concatenated data
       * @throws Error if the asked type is unsupported
       */


      function concat(type, dataArray) {
        var i,
            index = 0,
            res = null,
            totalLength = 0;

        for (i = 0; i < dataArray.length; i++) {
          totalLength += dataArray[i].length;
        }

        switch (type) {
          case "string":
            return dataArray.join("");

          case "array":
            return Array.prototype.concat.apply([], dataArray);

          case "uint8array":
            res = new Uint8Array(totalLength);

            for (i = 0; i < dataArray.length; i++) {
              res.set(dataArray[i], index);
              index += dataArray[i].length;
            }

            return res;

          case "nodebuffer":
            return Buffer.concat(dataArray);

          default:
            throw new Error("concat : unsupported type '" + type + "'");
        }
      }
      /**
       * Listen a StreamHelper, accumulate its content and concatenate it into a
       * complete block.
       * @param {StreamHelper} helper the helper to use.
       * @param {Function} updateCallback a callback called on each update. Called
       * with one arg :
       * - the metadata linked to the update received.
       * @return Promise the promise for the accumulation.
       */


      function _accumulate(helper, updateCallback) {
        return new external.Promise(function (resolve, reject) {
          var dataArray = [];
          var chunkType = helper._internalType,
              resultType = helper._outputType,
              mimeType = helper._mimeType;
          helper.on('data', function (data, meta) {
            dataArray.push(data);

            if (updateCallback) {
              updateCallback(meta);
            }
          }).on('error', function (err) {
            dataArray = [];
            reject(err);
          }).on('end', function () {
            try {
              var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
              resolve(result);
            } catch (e) {
              reject(e);
            }

            dataArray = [];
          }).resume();
        });
      }
      /**
       * An helper to easily use workers outside of JSZip.
       * @constructor
       * @param {Worker} worker the worker to wrap
       * @param {String} outputType the type of data expected by the use
       * @param {String} mimeType the mime type of the content, if applicable.
       */


      function StreamHelper(worker, outputType, mimeType) {
        var internalType = outputType;

        switch (outputType) {
          case "blob":
          case "arraybuffer":
            internalType = "uint8array";
            break;

          case "base64":
            internalType = "string";
            break;
        }

        try {
          // the type used internally
          this._internalType = internalType; // the type used to output results

          this._outputType = outputType; // the mime type

          this._mimeType = mimeType;
          utils.checkSupport(internalType);
          this._worker = worker.pipe(new ConvertWorker(internalType)); // the last workers can be rewired without issues but we need to
          // prevent any updates on previous workers.

          worker.lock();
        } catch (e) {
          this._worker = new GenericWorker("error");

          this._worker.error(e);
        }
      }

      StreamHelper.prototype = {
        /**
         * Listen a StreamHelper, accumulate its content and concatenate it into a
         * complete block.
         * @param {Function} updateCb the update callback.
         * @return Promise the promise for the accumulation.
         */
        accumulate: function accumulate(updateCb) {
          return _accumulate(this, updateCb);
        },

        /**
         * Add a listener on an event triggered on a stream.
         * @param {String} evt the name of the event
         * @param {Function} fn the listener
         * @return {StreamHelper} the current helper.
         */
        on: function on(evt, fn) {
          var self = this;

          if (evt === "data") {
            this._worker.on(evt, function (chunk) {
              fn.call(self, chunk.data, chunk.meta);
            });
          } else {
            this._worker.on(evt, function () {
              utils.delay(fn, arguments, self);
            });
          }

          return this;
        },

        /**
         * Resume the flow of chunks.
         * @return {StreamHelper} the current helper.
         */
        resume: function resume() {
          utils.delay(this._worker.resume, [], this._worker);
          return this;
        },

        /**
         * Pause the flow of chunks.
         * @return {StreamHelper} the current helper.
         */
        pause: function pause() {
          this._worker.pause();

          return this;
        },

        /**
         * Return a nodejs stream for this helper.
         * @param {Function} updateCb the update callback.
         * @return {NodejsStreamOutputAdapter} the nodejs stream.
         */
        toNodejsStream: function toNodejsStream(updateCb) {
          utils.checkSupport("nodestream");

          if (this._outputType !== "nodebuffer") {
            // an object stream containing blob/arraybuffer/uint8array/string
            // is strange and I don't know if it would be useful.
            // I you find this comment and have a good usecase, please open a
            // bug report !
            throw new Error(this._outputType + " is not supported by this method");
          }

          return new NodejsStreamOutputAdapter(this, {
            objectMode: this._outputType !== "nodebuffer"
          }, updateCb);
        }
      };
      module.exports = StreamHelper;
    }, {
      "../base64": 1,
      "../external": 6,
      "../nodejs/NodejsStreamOutputAdapter": 13,
      "../support": 30,
      "../utils": 32,
      "./ConvertWorker": 24,
      "./GenericWorker": 28
    }],
    30: [function (require, module, exports) {
      'use strict';

      exports.base64 = true;
      exports.array = true;
      exports.string = true;
      exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
      exports.nodebuffer = typeof Buffer !== "undefined"; // contains true if JSZip can read/generate Uint8Array, false otherwise.

      exports.uint8array = typeof Uint8Array !== "undefined";

      if (typeof ArrayBuffer === "undefined") {
        exports.blob = false;
      } else {
        var buffer = new ArrayBuffer(0);

        try {
          exports.blob = new Blob([buffer], {
            type: "application/zip"
          }).size === 0;
        } catch (e) {
          try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
          } catch (e) {
            exports.blob = false;
          }
        }
      }

      try {
        exports.nodestream = !!require('readable-stream').Readable;
      } catch (e) {
        exports.nodestream = false;
      }
    }, {
      "readable-stream": 16
    }],
    31: [function (require, module, exports) {
      'use strict';

      var utils = require('./utils');

      var support = require('./support');

      var nodejsUtils = require('./nodejsUtils');

      var GenericWorker = require('./stream/GenericWorker');
      /**
       * The following functions come from pako, from pako/lib/utils/strings
       * released under the MIT license, see pako https://github.com/nodeca/pako/
       */
      // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff


      var _utf8len = new Array(256);

      for (var i = 0; i < 256; i++) {
        _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
      }

      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
      // convert string to array (typed, when possible)

      var string2buf = function string2buf(str) {
        var buf,
            c,
            c2,
            m_pos,
            i,
            str_len = str.length,
            buf_len = 0; // count binary size

        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        } // allocate buffer


        if (support.uint8array) {
          buf = new Uint8Array(buf_len);
        } else {
          buf = new Array(buf_len);
        } // convert


        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }

        return buf;
      }; // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);


      var utf8border = function utf8border(buf, max) {
        var pos;
        max = max || buf.length;

        if (max > buf.length) {
          max = buf.length;
        } // go back from last position, until start of sequence found


        pos = max - 1;

        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
          pos--;
        } // Fuckup - very small and broken sequence,
        // return max, because we should return something anyway.


        if (pos < 0) {
          return max;
        } // If we came to start of buffer - that means vuffer is too small,
        // return max too.


        if (pos === 0) {
          return max;
        }

        return pos + _utf8len[buf[pos]] > max ? pos : max;
      }; // convert array to string


      var buf2string = function buf2string(buf) {
        var str, i, out, c, c_len;
        var len = buf.length; // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.

        var utf16buf = new Array(len * 2);

        for (out = 0, i = 0; i < len;) {
          c = buf[i++]; // quick process ascii

          if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
          }

          c_len = _utf8len[c]; // skip 5 & 6 byte codes

          if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
          } // apply mask on first byte


          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          } // terminated by end of string?


          if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
          }

          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        } // shrinkBuf(utf16buf, out)


        if (utf16buf.length !== out) {
          if (utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
          } else {
            utf16buf.length = out;
          }
        } // return String.fromCharCode.apply(null, utf16buf);


        return utils.applyFromCharCode(utf16buf);
      }; // That's all for the pako functions.

      /**
       * Transform a javascript string into an array (typed if possible) of bytes,
       * UTF-8 encoded.
       * @param {String} str the string to encode
       * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
       */


      exports.utf8encode = function utf8encode(str) {
        if (support.nodebuffer) {
          return nodejsUtils.newBufferFrom(str, "utf-8");
        }

        return string2buf(str);
      };
      /**
       * Transform a bytes array (or a representation) representing an UTF-8 encoded
       * string into a javascript string.
       * @param {Array|Uint8Array|Buffer} buf the data de decode
       * @return {String} the decoded string.
       */


      exports.utf8decode = function utf8decode(buf) {
        if (support.nodebuffer) {
          return utils.transformTo("nodebuffer", buf).toString("utf-8");
        }

        buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
        return buf2string(buf);
      };
      /**
       * A worker to decode utf8 encoded binary chunks into string chunks.
       * @constructor
       */


      function Utf8DecodeWorker() {
        GenericWorker.call(this, "utf-8 decode"); // the last bytes if a chunk didn't end with a complete codepoint.

        this.leftOver = null;
      }

      utils.inherits(Utf8DecodeWorker, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      Utf8DecodeWorker.prototype.processChunk = function (chunk) {
        var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data); // 1st step, re-use what's left of the previous chunk

        if (this.leftOver && this.leftOver.length) {
          if (support.uint8array) {
            var previousData = data;
            data = new Uint8Array(previousData.length + this.leftOver.length);
            data.set(this.leftOver, 0);
            data.set(previousData, this.leftOver.length);
          } else {
            data = this.leftOver.concat(data);
          }

          this.leftOver = null;
        }

        var nextBoundary = utf8border(data);
        var usableData = data;

        if (nextBoundary !== data.length) {
          if (support.uint8array) {
            usableData = data.subarray(0, nextBoundary);
            this.leftOver = data.subarray(nextBoundary, data.length);
          } else {
            usableData = data.slice(0, nextBoundary);
            this.leftOver = data.slice(nextBoundary, data.length);
          }
        }

        this.push({
          data: exports.utf8decode(usableData),
          meta: chunk.meta
        });
      };
      /**
       * @see GenericWorker.flush
       */


      Utf8DecodeWorker.prototype.flush = function () {
        if (this.leftOver && this.leftOver.length) {
          this.push({
            data: exports.utf8decode(this.leftOver),
            meta: {}
          });
          this.leftOver = null;
        }
      };

      exports.Utf8DecodeWorker = Utf8DecodeWorker;
      /**
       * A worker to endcode string chunks into utf8 encoded binary chunks.
       * @constructor
       */

      function Utf8EncodeWorker() {
        GenericWorker.call(this, "utf-8 encode");
      }

      utils.inherits(Utf8EncodeWorker, GenericWorker);
      /**
       * @see GenericWorker.processChunk
       */

      Utf8EncodeWorker.prototype.processChunk = function (chunk) {
        this.push({
          data: exports.utf8encode(chunk.data),
          meta: chunk.meta
        });
      };

      exports.Utf8EncodeWorker = Utf8EncodeWorker;
    }, {
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./support": 30,
      "./utils": 32
    }],
    32: [function (require, module, exports) {
      'use strict';

      var support = require('./support');

      var base64 = require('./base64');

      var nodejsUtils = require('./nodejsUtils');

      var setImmediate = require('set-immediate-shim');

      var external = require("./external");
      /**
       * Convert a string that pass as a "binary string": it should represent a byte
       * array but may have > 255 char codes. Be sure to take only the first byte
       * and returns the byte array.
       * @param {String} str the string to transform.
       * @return {Array|Uint8Array} the string in a binary format.
       */


      function string2binary(str) {
        var result = null;

        if (support.uint8array) {
          result = new Uint8Array(str.length);
        } else {
          result = new Array(str.length);
        }

        return stringToArrayLike(str, result);
      }
      /**
       * Create a new blob with the given content and the given type.
       * @param {String|ArrayBuffer} part the content to put in the blob. DO NOT use
       * an Uint8Array because the stock browser of android 4 won't accept it (it
       * will be silently converted to a string, "[object Uint8Array]").
       *
       * Use only ONE part to build the blob to avoid a memory leak in IE11 / Edge:
       * when a large amount of Array is used to create the Blob, the amount of
       * memory consumed is nearly 100 times the original data amount.
       *
       * @param {String} type the mime type of the blob.
       * @return {Blob} the created blob.
       */


      exports.newBlob = function (part, type) {
        exports.checkSupport("blob");

        try {
          // Blob constructor
          return new Blob([part], {
            type: type
          });
        } catch (e) {
          try {
            // deprecated, browser only, old way
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(part);
            return builder.getBlob(type);
          } catch (e) {
            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      /**
       * The identity function.
       * @param {Object} input the input.
       * @return {Object} the same input.
       */


      function identity(input) {
        return input;
      }
      /**
       * Fill in an array with a string.
       * @param {String} str the string to use.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
       * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
       */


      function stringToArrayLike(str, array) {
        for (var i = 0; i < str.length; ++i) {
          array[i] = str.charCodeAt(i) & 0xFF;
        }

        return array;
      }
      /**
       * An helper for the function arrayLikeToString.
       * This contains static informations and functions that
       * can be optimized by the browser JIT compiler.
       */


      var arrayToStringHelper = {
        /**
         * Transform an array of int into a string, chunk by chunk.
         * See the performances notes on arrayLikeToString.
         * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
         * @param {String} type the type of the array.
         * @param {Integer} chunk the chunk size.
         * @return {String} the resulting string.
         * @throws Error if the chunk is too big for the stack.
         */
        stringifyByChunk: function stringifyByChunk(array, type, chunk) {
          var result = [],
              k = 0,
              len = array.length; // shortcut

          if (len <= chunk) {
            return String.fromCharCode.apply(null, array);
          }

          while (k < len) {
            if (type === "array" || type === "nodebuffer") {
              result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            } else {
              result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }

            k += chunk;
          }

          return result.join("");
        },

        /**
         * Call String.fromCharCode on every item in the array.
         * This is the naive implementation, which generate A LOT of intermediate string.
         * This should be used when everything else fail.
         * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
         * @return {String} the result.
         */
        stringifyByChar: function stringifyByChar(array) {
          var resultStr = "";

          for (var i = 0; i < array.length; i++) {
            resultStr += String.fromCharCode(array[i]);
          }

          return resultStr;
        },
        applyCanBeUsed: {
          /**
           * true if the browser accepts to use String.fromCharCode on Uint8Array
           */
          uint8array: function () {
            try {
              return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (e) {
              return false;
            }
          }(),

          /**
           * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
           */
          nodebuffer: function () {
            try {
              return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
            } catch (e) {
              return false;
            }
          }()
        }
      };
      /**
       * Transform an array-like object to a string.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @return {String} the result.
       */

      function arrayLikeToString(array) {
        // Performances notes :
        // --------------------
        // String.fromCharCode.apply(null, array) is the fastest, see
        // see http://jsperf.com/converting-a-uint8array-to-a-string/2
        // but the stack is limited (and we can get huge arrays !).
        //
        // result += String.fromCharCode(array[i]); generate too many strings !
        //
        // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
        // TODO : we now have workers that split the work. Do we still need that ?
        var chunk = 65536,
            type = exports.getTypeOf(array),
            canUseApply = true;

        if (type === "uint8array") {
          canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
        } else if (type === "nodebuffer") {
          canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
        }

        if (canUseApply) {
          while (chunk > 1) {
            try {
              return arrayToStringHelper.stringifyByChunk(array, type, chunk);
            } catch (e) {
              chunk = Math.floor(chunk / 2);
            }
          }
        } // no apply or chunk error : slow and painful algorithm
        // default browser on android 4.*


        return arrayToStringHelper.stringifyByChar(array);
      }

      exports.applyFromCharCode = arrayLikeToString;
      /**
       * Copy the data from an array-like to an other array-like.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
       * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
       */

      function arrayLikeToArrayLike(arrayFrom, arrayTo) {
        for (var i = 0; i < arrayFrom.length; i++) {
          arrayTo[i] = arrayFrom[i];
        }

        return arrayTo;
      } // a matrix containing functions to transform everything into everything.


      var transform = {}; // string to ?

      transform["string"] = {
        "string": identity,
        "array": function array(input) {
          return stringToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function arraybuffer(input) {
          return transform["string"]["uint8array"](input).buffer;
        },
        "uint8array": function uint8array(input) {
          return stringToArrayLike(input, new Uint8Array(input.length));
        },
        "nodebuffer": function nodebuffer(input) {
          return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
        }
      }; // array to ?

      transform["array"] = {
        "string": arrayLikeToString,
        "array": identity,
        "arraybuffer": function arraybuffer(input) {
          return new Uint8Array(input).buffer;
        },
        "uint8array": function uint8array(input) {
          return new Uint8Array(input);
        },
        "nodebuffer": function nodebuffer(input) {
          return nodejsUtils.newBufferFrom(input);
        }
      }; // arraybuffer to ?

      transform["arraybuffer"] = {
        "string": function string(input) {
          return arrayLikeToString(new Uint8Array(input));
        },
        "array": function array(input) {
          return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
        },
        "arraybuffer": identity,
        "uint8array": function uint8array(input) {
          return new Uint8Array(input);
        },
        "nodebuffer": function nodebuffer(input) {
          return nodejsUtils.newBufferFrom(new Uint8Array(input));
        }
      }; // uint8array to ?

      transform["uint8array"] = {
        "string": arrayLikeToString,
        "array": function array(input) {
          return arrayLikeToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function arraybuffer(input) {
          return input.buffer;
        },
        "uint8array": identity,
        "nodebuffer": function nodebuffer(input) {
          return nodejsUtils.newBufferFrom(input);
        }
      }; // nodebuffer to ?

      transform["nodebuffer"] = {
        "string": arrayLikeToString,
        "array": function array(input) {
          return arrayLikeToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function arraybuffer(input) {
          return transform["nodebuffer"]["uint8array"](input).buffer;
        },
        "uint8array": function uint8array(input) {
          return arrayLikeToArrayLike(input, new Uint8Array(input.length));
        },
        "nodebuffer": identity
      };
      /**
       * Transform an input into any type.
       * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
       * If no output type is specified, the unmodified input will be returned.
       * @param {String} outputType the output type.
       * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
       * @throws {Error} an Error if the browser doesn't support the requested output type.
       */

      exports.transformTo = function (outputType, input) {
        if (!input) {
          // undefined, null, etc
          // an empty string won't harm.
          input = "";
        }

        if (!outputType) {
          return input;
        }

        exports.checkSupport(outputType);
        var inputType = exports.getTypeOf(input);
        var result = transform[inputType][outputType](input);
        return result;
      };
      /**
       * Return the type of the input.
       * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
       * @param {Object} input the input to identify.
       * @return {String} the (lowercase) type of the input.
       */


      exports.getTypeOf = function (input) {
        if (typeof input === "string") {
          return "string";
        }

        if (Object.prototype.toString.call(input) === "[object Array]") {
          return "array";
        }

        if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
          return "nodebuffer";
        }

        if (support.uint8array && input instanceof Uint8Array) {
          return "uint8array";
        }

        if (support.arraybuffer && input instanceof ArrayBuffer) {
          return "arraybuffer";
        }
      };
      /**
       * Throw an exception if the type is not supported.
       * @param {String} type the type to check.
       * @throws {Error} an Error if the browser doesn't support the requested type.
       */


      exports.checkSupport = function (type) {
        var supported = support[type.toLowerCase()];

        if (!supported) {
          throw new Error(type + " is not supported by this platform");
        }
      };

      exports.MAX_VALUE_16BITS = 65535;
      exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

      /**
       * Prettify a string read as binary.
       * @param {string} str the string to prettify.
       * @return {string} a pretty string.
       */

      exports.pretty = function (str) {
        var res = '',
            code,
            i;

        for (i = 0; i < (str || "").length; i++) {
          code = str.charCodeAt(i);
          res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
        }

        return res;
      };
      /**
       * Defer the call of a function.
       * @param {Function} callback the function to call asynchronously.
       * @param {Array} args the arguments to give to the callback.
       */


      exports.delay = function (callback, args, self) {
        setImmediate(function () {
          callback.apply(self || null, args || []);
        });
      };
      /**
       * Extends a prototype with an other, without calling a constructor with
       * side effects. Inspired by nodejs' `utils.inherits`
       * @param {Function} ctor the constructor to augment
       * @param {Function} superCtor the parent constructor to use
       */


      exports.inherits = function (ctor, superCtor) {
        var Obj = function Obj() {};

        Obj.prototype = superCtor.prototype;
        ctor.prototype = new Obj();
      };
      /**
       * Merge the objects passed as parameters into a new one.
       * @private
       * @param {...Object} var_args All objects to merge.
       * @return {Object} a new object with the data of the others.
       */


      exports.extend = function () {
        var result = {},
            i,
            attr;

        for (i = 0; i < arguments.length; i++) {
          // arguments is not enumerable in some browsers
          for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
              result[attr] = arguments[i][attr];
            }
          }
        }

        return result;
      };
      /**
       * Transform arbitrary content into a Promise.
       * @param {String} name a name for the content being processed.
       * @param {Object} inputData the content to process.
       * @param {Boolean} isBinary true if the content is not an unicode string
       * @param {Boolean} isOptimizedBinaryString true if the string content only has one byte per character.
       * @param {Boolean} isBase64 true if the string content is encoded with base64.
       * @return {Promise} a promise in a format usable by JSZip.
       */


      exports.prepareContent = function (name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
        // if inputData is already a promise, this flatten it.
        var promise = external.Promise.resolve(inputData).then(function (data) {
          var isBlob = support.blob && (data instanceof Blob || ['[object File]', '[object Blob]'].indexOf(Object.prototype.toString.call(data)) !== -1);

          if (isBlob && typeof FileReader !== "undefined") {
            return new external.Promise(function (resolve, reject) {
              var reader = new FileReader();

              reader.onload = function (e) {
                resolve(e.target.result);
              };

              reader.onerror = function (e) {
                reject(e.target.error);
              };

              reader.readAsArrayBuffer(data);
            });
          } else {
            return data;
          }
        });
        return promise.then(function (data) {
          var dataType = exports.getTypeOf(data);

          if (!dataType) {
            return external.Promise.reject(new Error("Can't read the data of '" + name + "'. Is it " + "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          } // special case : it's way easier to work with Uint8Array than with ArrayBuffer


          if (dataType === "arraybuffer") {
            data = exports.transformTo("uint8array", data);
          } else if (dataType === "string") {
            if (isBase64) {
              data = base64.decode(data);
            } else if (isBinary) {
              // optimizedBinaryString === true means that the file has already been filtered with a 0xFF mask
              if (isOptimizedBinaryString !== true) {
                // this is a string, not in a base64 format.
                // Be sure that this is a correct "binary string"
                data = string2binary(data);
              }
            }
          }

          return data;
        });
      };
    }, {
      "./base64": 1,
      "./external": 6,
      "./nodejsUtils": 14,
      "./support": 30,
      "set-immediate-shim": 54
    }],
    33: [function (require, module, exports) {
      'use strict';

      var readerFor = require('./reader/readerFor');

      var utils = require('./utils');

      var sig = require('./signature');

      var ZipEntry = require('./zipEntry');

      var utf8 = require('./utf8');

      var support = require('./support'); //  class ZipEntries {{{

      /**
       * All the entries in the zip file.
       * @constructor
       * @param {Object} loadOptions Options for loading the stream.
       */


      function ZipEntries(loadOptions) {
        this.files = [];
        this.loadOptions = loadOptions;
      }

      ZipEntries.prototype = {
        /**
         * Check that the reader is on the specified signature.
         * @param {string} expectedSignature the expected signature.
         * @throws {Error} if it is an other signature.
         */
        checkSignature: function checkSignature(expectedSignature) {
          if (!this.reader.readAndCheckSignature(expectedSignature)) {
            this.reader.index -= 4;
            var signature = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
          }
        },

        /**
         * Check if the given signature is at the given index.
         * @param {number} askedIndex the index to check.
         * @param {string} expectedSignature the signature to expect.
         * @return {boolean} true if the signature is here, false otherwise.
         */
        isSignature: function isSignature(askedIndex, expectedSignature) {
          var currentIndex = this.reader.index;
          this.reader.setIndex(askedIndex);
          var signature = this.reader.readString(4);
          var result = signature === expectedSignature;
          this.reader.setIndex(currentIndex);
          return result;
        },

        /**
         * Read the end of the central directory.
         */
        readBlockEndOfCentral: function readBlockEndOfCentral() {
          this.diskNumber = this.reader.readInt(2);
          this.diskWithCentralDirStart = this.reader.readInt(2);
          this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
          this.centralDirRecords = this.reader.readInt(2);
          this.centralDirSize = this.reader.readInt(4);
          this.centralDirOffset = this.reader.readInt(4);
          this.zipCommentLength = this.reader.readInt(2); // warning : the encoding depends of the system locale
          // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
          // On a windows machine, this field is encoded with the localized windows code page.

          var zipComment = this.reader.readData(this.zipCommentLength);
          var decodeParamType = support.uint8array ? "uint8array" : "array"; // To get consistent behavior with the generation part, we will assume that
          // this is utf8 encoded unless specified otherwise.

          var decodeContent = utils.transformTo(decodeParamType, zipComment);
          this.zipComment = this.loadOptions.decodeFileName(decodeContent);
        },

        /**
         * Read the end of the Zip 64 central directory.
         * Not merged with the method readEndOfCentral :
         * The end of central can coexist with its Zip64 brother,
         * I don't want to read the wrong number of bytes !
         */
        readBlockZip64EndOfCentral: function readBlockZip64EndOfCentral() {
          this.zip64EndOfCentralSize = this.reader.readInt(8);
          this.reader.skip(4); // this.versionMadeBy = this.reader.readString(2);
          // this.versionNeeded = this.reader.readInt(2);

          this.diskNumber = this.reader.readInt(4);
          this.diskWithCentralDirStart = this.reader.readInt(4);
          this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
          this.centralDirRecords = this.reader.readInt(8);
          this.centralDirSize = this.reader.readInt(8);
          this.centralDirOffset = this.reader.readInt(8);
          this.zip64ExtensibleData = {};
          var extraDataSize = this.zip64EndOfCentralSize - 44,
              index = 0,
              extraFieldId,
              extraFieldLength,
              extraFieldValue;

          while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readData(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
              id: extraFieldId,
              length: extraFieldLength,
              value: extraFieldValue
            };
          }
        },

        /**
         * Read the end of the Zip 64 central directory locator.
         */
        readBlockZip64EndOfCentralLocator: function readBlockZip64EndOfCentralLocator() {
          this.diskWithZip64CentralDirStart = this.reader.readInt(4);
          this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
          this.disksCount = this.reader.readInt(4);

          if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
          }
        },

        /**
         * Read the local files, based on the offset read in the central part.
         */
        readLocalFiles: function readLocalFiles() {
          var i, file;

          for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
          }
        },

        /**
         * Read the central directory.
         */
        readCentralDir: function readCentralDir() {
          var file;
          this.reader.setIndex(this.centralDirOffset);

          while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
            file = new ZipEntry({
              zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
          }

          if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
              // We expected some records but couldn't find ANY.
              // This is really suspicious, as if something went wrong.
              throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {// We found some records but not all.
              // Something is wrong but we got something for the user: no error here.
              // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
          }
        },

        /**
         * Read the end of central directory.
         */
        readEndOfCentral: function readEndOfCentral() {
          var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);

          if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
              throw new Error("Can't find end of central directory : is this a zip file ? " + "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
              throw new Error("Corrupted zip: can't find end of central directory");
            }
          }

          this.reader.setIndex(offset);
          var endOfCentralDirOffset = offset;
          this.checkSignature(sig.CENTRAL_DIRECTORY_END);
          this.readBlockEndOfCentral();
          /* extract from the zip spec :
              4)  If one of the fields in the end of central directory
                  record is too small to hold required data, the field
                  should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                  ZIP64 format record should be created.
              5)  The end of central directory record and the
                  Zip64 end of central directory locator record must
                  reside on the same disk when splitting or spanning
                  an archive.
           */

          if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;
            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : JavaScript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */
            // should look for a zip64 EOCD locator

            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);

            if (offset < 0) {
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            }

            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator(); // now the zip64 EOCD record

            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
              // console.warn("ZIP64 end of central directory not where expected.");
              this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);

              if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              }
            }

            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
          }

          var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;

          if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator

            expectedEndOfCentralDirOffset += 12
            /* should not include the leading 12 bytes */
            + this.zip64EndOfCentralSize;
          }

          var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

          if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {// The offsets seem wrong, but we have something at the specified offset.
              // So… we keep it.
            } else {
              // the offset is wrong, update the "zero" of the reader
              // this happens if data has been prepended (crx files for example)
              this.reader.zero = extraBytes;
            }
          } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
          }
        },
        prepareReader: function prepareReader(data) {
          this.reader = readerFor(data);
        },

        /**
         * Read a zip file and create ZipEntries.
         * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
         */
        load: function load(data) {
          this.prepareReader(data);
          this.readEndOfCentral();
          this.readCentralDir();
          this.readLocalFiles();
        }
      }; // }}} end of ZipEntries

      module.exports = ZipEntries;
    }, {
      "./reader/readerFor": 22,
      "./signature": 23,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntry": 34
    }],
    34: [function (require, module, exports) {
      'use strict';

      var readerFor = require('./reader/readerFor');

      var utils = require('./utils');

      var CompressedObject = require('./compressedObject');

      var crc32fn = require('./crc32');

      var utf8 = require('./utf8');

      var compressions = require('./compressions');

      var support = require('./support');

      var MADE_BY_DOS = 0x00;
      var MADE_BY_UNIX = 0x03;
      /**
       * Find a compression registered in JSZip.
       * @param {string} compressionMethod the method magic to find.
       * @return {Object|null} the JSZip compression object, null if none found.
       */

      var findCompression = function findCompression(compressionMethod) {
        for (var method in compressions) {
          if (!compressions.hasOwnProperty(method)) {
            continue;
          }

          if (compressions[method].magic === compressionMethod) {
            return compressions[method];
          }
        }

        return null;
      }; // class ZipEntry {{{

      /**
       * An entry in the zip file.
       * @constructor
       * @param {Object} options Options of the current file.
       * @param {Object} loadOptions Options for loading the stream.
       */


      function ZipEntry(options, loadOptions) {
        this.options = options;
        this.loadOptions = loadOptions;
      }

      ZipEntry.prototype = {
        /**
         * say if the file is encrypted.
         * @return {boolean} true if the file is encrypted, false otherwise.
         */
        isEncrypted: function isEncrypted() {
          // bit 1 is set
          return (this.bitFlag & 0x0001) === 0x0001;
        },

        /**
         * say if the file has utf-8 filename/comment.
         * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
         */
        useUTF8: function useUTF8() {
          // bit 11 is set
          return (this.bitFlag & 0x0800) === 0x0800;
        },

        /**
         * Read the local part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readLocalPart: function readLocalPart(reader) {
          var compression, localExtraFieldsLength; // we already know everything from the central dir !
          // If the central dir data are false, we are doomed.
          // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
          // The less data we get here, the more reliable this should be.
          // Let's skip the whole header and dash to the data !

          reader.skip(22); // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
          // Strangely, the filename here is OK.
          // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
          // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
          // Search "unzip mismatching "local" filename continuing with "central" filename version" on
          // the internet.
          //
          // I think I see the logic here : the central directory is used to display
          // content and the local directory is used to extract the files. Mixing / and \
          // may be used to display \ to windows users and use / when extracting the files.
          // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394

          this.fileNameLength = reader.readInt(2);
          localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
          // the fileName is stored as binary data, the handleUTF8 method will take care of the encoding.

          this.fileName = reader.readData(this.fileNameLength);
          reader.skip(localExtraFieldsLength);

          if (this.compressedSize === -1 || this.uncompressedSize === -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
          }

          compression = findCompression(this.compressionMethod);

          if (compression === null) {
            // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
          }

          this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
        },

        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readCentralPart: function readCentralPart(reader) {
          this.versionMadeBy = reader.readInt(2);
          reader.skip(2); // this.versionNeeded = reader.readInt(2);

          this.bitFlag = reader.readInt(2);
          this.compressionMethod = reader.readString(2);
          this.date = reader.readDate();
          this.crc32 = reader.readInt(4);
          this.compressedSize = reader.readInt(4);
          this.uncompressedSize = reader.readInt(4);
          var fileNameLength = reader.readInt(2);
          this.extraFieldsLength = reader.readInt(2);
          this.fileCommentLength = reader.readInt(2);
          this.diskNumberStart = reader.readInt(2);
          this.internalFileAttributes = reader.readInt(2);
          this.externalFileAttributes = reader.readInt(4);
          this.localHeaderOffset = reader.readInt(4);

          if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
          } // will be read in the local part, see the comments there


          reader.skip(fileNameLength);
          this.readExtraFields(reader);
          this.parseZIP64ExtraField(reader);
          this.fileComment = reader.readData(this.fileCommentLength);
        },

        /**
         * Parse the external file attributes and get the unix/dos permissions.
         */
        processAttributes: function processAttributes() {
          this.unixPermissions = null;
          this.dosPermissions = null;
          var madeBy = this.versionMadeBy >> 8; // Check if we have the DOS directory flag set.
          // We look for it in the DOS and UNIX permissions
          // but some unknown platform could set it as a compatibility flag.

          this.dir = this.externalFileAttributes & 0x0010 ? true : false;

          if (madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
          }

          if (madeBy === MADE_BY_UNIX) {
            this.unixPermissions = this.externalFileAttributes >> 16 & 0xFFFF; // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
          } // fail safe : if the name ends with a / it probably means a folder


          if (!this.dir && this.fileNameStr.slice(-1) === '/') {
            this.dir = true;
          }
        },

        /**
         * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
         * @param {DataReader} reader the reader to use.
         */
        parseZIP64ExtraField: function parseZIP64ExtraField(reader) {
          if (!this.extraFields[0x0001]) {
            return;
          } // should be something, preparing the extra reader


          var extraReader = readerFor(this.extraFields[0x0001].value); // I really hope that these 64bits integer can fit in 32 bits integer, because js
          // won't let us have more.

          if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
          }

          if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
          }

          if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
          }

          if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
          }
        },

        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readExtraFields: function readExtraFields(reader) {
          var end = reader.index + this.extraFieldsLength,
              extraFieldId,
              extraFieldLength,
              extraFieldValue;

          if (!this.extraFields) {
            this.extraFields = {};
          }

          while (reader.index < end) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readData(extraFieldLength);
            this.extraFields[extraFieldId] = {
              id: extraFieldId,
              length: extraFieldLength,
              value: extraFieldValue
            };
          }
        },

        /**
         * Apply an UTF8 transformation if needed.
         */
        handleUTF8: function handleUTF8() {
          var decodeParamType = support.uint8array ? "uint8array" : "array";

          if (this.useUTF8()) {
            this.fileNameStr = utf8.utf8decode(this.fileName);
            this.fileCommentStr = utf8.utf8decode(this.fileComment);
          } else {
            var upath = this.findExtraFieldUnicodePath();

            if (upath !== null) {
              this.fileNameStr = upath;
            } else {
              // ASCII text or unsupported code page
              var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();

            if (ucomment !== null) {
              this.fileCommentStr = ucomment;
            } else {
              // ASCII text or unsupported code page
              var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
          }
        },

        /**
         * Find the unicode path declared in the extra field, if any.
         * @return {String} the unicode path, null otherwise.
         */
        findExtraFieldUnicodePath: function findExtraFieldUnicodePath() {
          var upathField = this.extraFields[0x7075];

          if (upathField) {
            var extraReader = readerFor(upathField.value); // wrong version

            if (extraReader.readInt(1) !== 1) {
              return null;
            } // the crc of the filename changed, this field is out of date.


            if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
              return null;
            }

            return utf8.utf8decode(extraReader.readData(upathField.length - 5));
          }

          return null;
        },

        /**
         * Find the unicode comment declared in the extra field, if any.
         * @return {String} the unicode comment, null otherwise.
         */
        findExtraFieldUnicodeComment: function findExtraFieldUnicodeComment() {
          var ucommentField = this.extraFields[0x6375];

          if (ucommentField) {
            var extraReader = readerFor(ucommentField.value); // wrong version

            if (extraReader.readInt(1) !== 1) {
              return null;
            } // the crc of the comment changed, this field is out of date.


            if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
              return null;
            }

            return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
          }

          return null;
        }
      };
      module.exports = ZipEntry;
    }, {
      "./compressedObject": 2,
      "./compressions": 3,
      "./crc32": 4,
      "./reader/readerFor": 22,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32
    }],
    35: [function (require, module, exports) {
      'use strict';

      var StreamHelper = require('./stream/StreamHelper');

      var DataWorker = require('./stream/DataWorker');

      var utf8 = require('./utf8');

      var CompressedObject = require('./compressedObject');

      var GenericWorker = require('./stream/GenericWorker');
      /**
       * A simple object representing a file in the zip file.
       * @constructor
       * @param {string} name the name of the file
       * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
       * @param {Object} options the options of the file
       */


      var ZipObject = function ZipObject(name, data, options) {
        this.name = name;
        this.dir = options.dir;
        this.date = options.date;
        this.comment = options.comment;
        this.unixPermissions = options.unixPermissions;
        this.dosPermissions = options.dosPermissions;
        this._data = data;
        this._dataBinary = options.binary; // keep only the compression

        this.options = {
          compression: options.compression,
          compressionOptions: options.compressionOptions
        };
      };

      ZipObject.prototype = {
        /**
         * Create an internal stream for the content of this object.
         * @param {String} type the type of each chunk.
         * @return StreamHelper the stream.
         */
        internalStream: function internalStream(type) {
          var result = null,
              outputType = "string";

          try {
            if (!type) {
              throw new Error("No output type specified.");
            }

            outputType = type.toLowerCase();
            var askUnicodeString = outputType === "string" || outputType === "text";

            if (outputType === "binarystring" || outputType === "text") {
              outputType = "string";
            }

            result = this._decompressWorker();
            var isUnicodeString = !this._dataBinary;

            if (isUnicodeString && !askUnicodeString) {
              result = result.pipe(new utf8.Utf8EncodeWorker());
            }

            if (!isUnicodeString && askUnicodeString) {
              result = result.pipe(new utf8.Utf8DecodeWorker());
            }
          } catch (e) {
            result = new GenericWorker("error");
            result.error(e);
          }

          return new StreamHelper(result, outputType, "");
        },

        /**
         * Prepare the content in the asked type.
         * @param {String} type the type of the result.
         * @param {Function} onUpdate a function to call on each internal update.
         * @return Promise the promise of the result.
         */
        async: function async(type, onUpdate) {
          return this.internalStream(type).accumulate(onUpdate);
        },

        /**
         * Prepare the content as a nodejs stream.
         * @param {String} type the type of each chunk.
         * @param {Function} onUpdate a function to call on each internal update.
         * @return Stream the stream.
         */
        nodeStream: function nodeStream(type, onUpdate) {
          return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
        },

        /**
         * Return a worker for the compressed content.
         * @private
         * @param {Object} compression the compression object to use.
         * @param {Object} compressionOptions the options to use when compressing.
         * @return Worker the worker.
         */
        _compressWorker: function _compressWorker(compression, compressionOptions) {
          if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
            return this._data.getCompressedWorker();
          } else {
            var result = this._decompressWorker();

            if (!this._dataBinary) {
              result = result.pipe(new utf8.Utf8EncodeWorker());
            }

            return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
          }
        },

        /**
         * Return a worker for the decompressed content.
         * @private
         * @return Worker the worker.
         */
        _decompressWorker: function _decompressWorker() {
          if (this._data instanceof CompressedObject) {
            return this._data.getContentWorker();
          } else if (this._data instanceof GenericWorker) {
            return this._data;
          } else {
            return new DataWorker(this._data);
          }
        }
      };
      var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];

      var removedFn = function removedFn() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      };

      for (var i = 0; i < removedMethods.length; i++) {
        ZipObject.prototype[removedMethods[i]] = removedFn;
      }

      module.exports = ZipObject;
    }, {
      "./compressedObject": 2,
      "./stream/DataWorker": 27,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31
    }],
    36: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var Mutation = global.MutationObserver || global.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global.document.createTextNode('');
            observer.observe(element, {
              characterData: true
            });

            scheduleDrain = function scheduleDrain() {
              element.data = called = ++called % 2;
            };
          } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
            var channel = new global.MessageChannel();
            channel.port1.onmessage = nextTick;

            scheduleDrain = function scheduleDrain() {
              channel.port2.postMessage(0);
            };
          } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
            scheduleDrain = function scheduleDrain() {
              // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
              // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
              var scriptEl = global.document.createElement('script');

              scriptEl.onreadystatechange = function () {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };

              global.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function scheduleDrain() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = []; //named nextTick for less confusing stack traces

        function nextTick() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;

          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;

            while (++i < len) {
              oldQueue[i]();
            }

            len = queue.length;
          }

          draining = false;
        }

        module.exports = immediate;

        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    37: [function (require, module, exports) {
      'use strict';

      var immediate = require('immediate');
      /* istanbul ignore next */


      function INTERNAL() {}

      var handlers = {};
      var REJECTED = ['REJECTED'];
      var FULFILLED = ['FULFILLED'];
      var PENDING = ['PENDING'];
      module.exports = Promise;

      function Promise(resolver) {
        if (typeof resolver !== 'function') {
          throw new TypeError('resolver must be a function');
        }

        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;

        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }

      Promise.prototype["finally"] = function (callback) {
        if (typeof callback !== 'function') {
          return this;
        }

        var p = this.constructor;
        return this.then(resolve, reject);

        function resolve(value) {
          function yes() {
            return value;
          }

          return p.resolve(callback()).then(yes);
        }

        function reject(reason) {
          function no() {
            throw reason;
          }

          return p.resolve(callback()).then(no);
        }
      };

      Promise.prototype["catch"] = function (onRejected) {
        return this.then(null, onRejected);
      };

      Promise.prototype.then = function (onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function' && this.state === FULFILLED || typeof onRejected !== 'function' && this.state === REJECTED) {
          return this;
        }

        var promise = new this.constructor(INTERNAL);

        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }

        return promise;
      };

      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;

        if (typeof onFulfilled === 'function') {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }

        if (typeof onRejected === 'function') {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }

      QueueItem.prototype.callFulfilled = function (value) {
        handlers.resolve(this.promise, value);
      };

      QueueItem.prototype.otherCallFulfilled = function (value) {
        unwrap(this.promise, this.onFulfilled, value);
      };

      QueueItem.prototype.callRejected = function (value) {
        handlers.reject(this.promise, value);
      };

      QueueItem.prototype.otherCallRejected = function (value) {
        unwrap(this.promise, this.onRejected, value);
      };

      function unwrap(promise, func, value) {
        immediate(function () {
          var returnValue;

          try {
            returnValue = func(value);
          } catch (e) {
            return handlers.reject(promise, e);
          }

          if (returnValue === promise) {
            handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }

      handlers.resolve = function (self, value) {
        var result = tryCatch(getThen, value);

        if (result.status === 'error') {
          return handlers.reject(self, result.value);
        }

        var thenable = result.value;

        if (thenable) {
          safelyResolveThenable(self, thenable);
        } else {
          self.state = FULFILLED;
          self.outcome = value;
          var i = -1;
          var len = self.queue.length;

          while (++i < len) {
            self.queue[i].callFulfilled(value);
          }
        }

        return self;
      };

      handlers.reject = function (self, error) {
        self.state = REJECTED;
        self.outcome = error;
        var i = -1;
        var len = self.queue.length;

        while (++i < len) {
          self.queue[i].callRejected(error);
        }

        return self;
      };

      function getThen(obj) {
        // Make sure we only access the accessor once as required by the spec
        var then = obj && obj.then;

        if (obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof then === 'function') {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }

      function safelyResolveThenable(self, thenable) {
        // Either fulfill, reject or reject with error
        var called = false;

        function onError(value) {
          if (called) {
            return;
          }

          called = true;
          handlers.reject(self, value);
        }

        function onSuccess(value) {
          if (called) {
            return;
          }

          called = true;
          handlers.resolve(self, value);
        }

        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }

        var result = tryCatch(tryToUnwrap);

        if (result.status === 'error') {
          onError(result.value);
        }
      }

      function tryCatch(func, value) {
        var out = {};

        try {
          out.value = func(value);
          out.status = 'success';
        } catch (e) {
          out.status = 'error';
          out.value = e;
        }

        return out;
      }

      Promise.resolve = resolve;

      function resolve(value) {
        if (value instanceof this) {
          return value;
        }

        return handlers.resolve(new this(INTERNAL), value);
      }

      Promise.reject = reject;

      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }

      Promise.all = all;

      function all(iterable) {
        var self = this;

        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
          return this.reject(new TypeError('must be an array'));
        }

        var len = iterable.length;
        var called = false;

        if (!len) {
          return this.resolve([]);
        }

        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);

        while (++i < len) {
          allResolver(iterable[i], i);
        }

        return promise;

        function allResolver(value, i) {
          self.resolve(value).then(resolveFromAll, function (error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });

          function resolveFromAll(outValue) {
            values[i] = outValue;

            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }

      Promise.race = race;

      function race(iterable) {
        var self = this;

        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
          return this.reject(new TypeError('must be an array'));
        }

        var len = iterable.length;
        var called = false;

        if (!len) {
          return this.resolve([]);
        }

        var i = -1;
        var promise = new this(INTERNAL);

        while (++i < len) {
          resolver(iterable[i]);
        }

        return promise;

        function resolver(value) {
          self.resolve(value).then(function (response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function (error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, {
      "immediate": 36
    }],
    38: [function (require, module, exports) {
      // Top level file is just a mixin of submodules & constants
      'use strict';

      var assign = require('./lib/utils/common').assign;

      var deflate = require('./lib/deflate');

      var inflate = require('./lib/inflate');

      var constants = require('./lib/zlib/constants');

      var pako = {};
      assign(pako, deflate, inflate, constants);
      module.exports = pako;
    }, {
      "./lib/deflate": 39,
      "./lib/inflate": 40,
      "./lib/utils/common": 41,
      "./lib/zlib/constants": 44
    }],
    39: [function (require, module, exports) {
      'use strict';

      var zlib_deflate = require('./zlib/deflate');

      var utils = require('./utils/common');

      var strings = require('./utils/strings');

      var msg = require('./zlib/messages');

      var ZStream = require('./zlib/zstream');

      var toString = Object.prototype.toString;
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      var Z_NO_FLUSH = 0;
      var Z_FINISH = 4;
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_SYNC_FLUSH = 2;
      var Z_DEFAULT_COMPRESSION = -1;
      var Z_DEFAULT_STRATEGY = 0;
      var Z_DEFLATED = 8;
      /* ===========================================================================*/

      /**
       * class Deflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[deflate]],
       * [[deflateRaw]] and [[gzip]].
       **/

      /* internal
       * Deflate.chunks -> Array
       *
       * Chunks of output data, if [[Deflate#onData]] not overriden.
       **/

      /**
       * Deflate.result -> Uint8Array|Array
       *
       * Compressed result, generated by default [[Deflate#onData]]
       * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
       * push a chunk with explicit flush (call [[Deflate#push]] with
       * `Z_SYNC_FLUSH` param).
       **/

      /**
       * Deflate.err -> Number
       *
       * Error code after deflate finished. 0 (Z_OK) on success.
       * You will not need it in real life, because deflate errors
       * are possible only on wrong options or bad `onData` / `onEnd`
       * custom handlers.
       **/

      /**
       * Deflate.msg -> String
       *
       * Error message, if [[Deflate.err]] != 0
       **/

      /**
       * new Deflate(options)
       * - options (Object): zlib deflate options.
       *
       * Creates new deflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `level`
       * - `windowBits`
       * - `memLevel`
       * - `strategy`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw deflate
       * - `gzip` (Boolean) - create gzip wrapper
       * - `to` (String) - if equal to 'string', then result will be "binary string"
       *    (each char code [0..255])
       * - `header` (Object) - custom header for gzip
       *   - `text` (Boolean) - true if compressed data believed to be text
       *   - `time` (Number) - modification time, unix timestamp
       *   - `os` (Number) - operation system code
       *   - `extra` (Array) - array of bytes with extra data (max 65536)
       *   - `name` (String) - file name (binary string)
       *   - `comment` (String) - comment (binary string)
       *   - `hcrc` (Boolean) - true if header crc should be added
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * var deflate = new pako.Deflate({ level: 3});
       *
       * deflate.push(chunk1, false);
       * deflate.push(chunk2, true);  // true -> last chunk
       *
       * if (deflate.err) { throw new Error(deflate.err); }
       *
       * console.log(deflate.result);
       * ```
       **/

      function Deflate(options) {
        if (!(this instanceof Deflate)) return new Deflate(options);
        this.options = utils.assign({
          level: Z_DEFAULT_COMPRESSION,
          method: Z_DEFLATED,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Z_DEFAULT_STRATEGY,
          to: ''
        }, options || {});
        var opt = this.options;

        if (opt.raw && opt.windowBits > 0) {
          opt.windowBits = -opt.windowBits;
        } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
          opt.windowBits += 16;
        }

        this.err = 0; // error code, if happens (0 = Z_OK)

        this.msg = ''; // error message

        this.ended = false; // used to avoid multiple onEnd() calls

        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);

        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }

        if (opt.header) {
          zlib_deflate.deflateSetHeader(this.strm, opt.header);
        }

        if (opt.dictionary) {
          var dict; // Convert data if needed

          if (typeof opt.dictionary === 'string') {
            // If we need to compress text, change encoding to utf8.
            dict = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
            dict = new Uint8Array(opt.dictionary);
          } else {
            dict = opt.dictionary;
          }

          status = zlib_deflate.deflateSetDictionary(this.strm, dict);

          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }

          this._dict_set = true;
        }
      }
      /**
       * Deflate#push(data[, mode]) -> Boolean
       * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
       *   converted to utf8 byte sequence.
       * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
       *
       * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
       * new compressed chunks. Returns `true` on success. The last data block must have
       * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
       * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
       * can use mode Z_SYNC_FLUSH, keeping the compression context.
       *
       * On fail call [[Deflate#onEnd]] with error code and return false.
       *
       * We strongly recommend to use `Uint8Array` on input for best speed (output
       * array format is detected automatically). Also, don't skip last param and always
       * use the same type in your code (boolean or number). That will improve JS speed.
       *
       * For regular `Array`-s make sure all elements are [0..255].
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/


      Deflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;

        var status, _mode;

        if (this.ended) {
          return false;
        }

        _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH; // Convert data if needed

        if (typeof data === 'string') {
          // If we need to compress text, change encoding to utf8.
          strm.input = strings.string2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_deflate.deflate(strm, _mode);
          /* no bad return value */

          if (status !== Z_STREAM_END && status !== Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
            if (this.options.to === 'string') {
              this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END); // Finalize on the last chunk.


        if (_mode === Z_FINISH) {
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        } // callback interim results if Z_SYNC_FLUSH.


        if (_mode === Z_SYNC_FLUSH) {
          this.onEnd(Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };
      /**
       * Deflate#onData(chunk) -> Void
       * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
       *   on js engine support. When string output requested, each chunk
       *   will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/


      Deflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };
      /**
       * Deflate#onEnd(status) -> Void
       * - status (Number): deflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called once after you tell deflate that the input stream is
       * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
       * or if an error happened. By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/


      Deflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === Z_OK) {
          if (this.options.to === 'string') {
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }

        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      /**
       * deflate(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * Compress `data` with deflate algorithm and `options`.
       *
       * Supported options are:
       *
       * - level
       * - windowBits
       * - memLevel
       * - strategy
       * - dictionary
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be "binary string"
       *    (each char code [0..255])
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
       *
       * console.log(pako.deflate(data));
       * ```
       **/


      function deflate(input, options) {
        var deflator = new Deflate(options);
        deflator.push(input, true); // That will never happens, if you don't cheat with options :)

        if (deflator.err) {
          throw deflator.msg || msg[deflator.err];
        }

        return deflator.result;
      }
      /**
       * deflateRaw(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/


      function deflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return deflate(input, options);
      }
      /**
       * gzip(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but create gzip wrapper instead of
       * deflate one.
       **/


      function gzip(input, options) {
        options = options || {};
        options.gzip = true;
        return deflate(input, options);
      }

      exports.Deflate = Deflate;
      exports.deflate = deflate;
      exports.deflateRaw = deflateRaw;
      exports.gzip = gzip;
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/deflate": 46,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    40: [function (require, module, exports) {
      'use strict';

      var zlib_inflate = require('./zlib/inflate');

      var utils = require('./utils/common');

      var strings = require('./utils/strings');

      var c = require('./zlib/constants');

      var msg = require('./zlib/messages');

      var ZStream = require('./zlib/zstream');

      var GZheader = require('./zlib/gzheader');

      var toString = Object.prototype.toString;
      /**
       * class Inflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[inflate]]
       * and [[inflateRaw]].
       **/

      /* internal
       * inflate.chunks -> Array
       *
       * Chunks of output data, if [[Inflate#onData]] not overriden.
       **/

      /**
       * Inflate.result -> Uint8Array|Array|String
       *
       * Uncompressed result, generated by default [[Inflate#onData]]
       * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
       * push a chunk with explicit flush (call [[Inflate#push]] with
       * `Z_SYNC_FLUSH` param).
       **/

      /**
       * Inflate.err -> Number
       *
       * Error code after inflate finished. 0 (Z_OK) on success.
       * Should be checked if broken data possible.
       **/

      /**
       * Inflate.msg -> String
       *
       * Error message, if [[Inflate.err]] != 0
       **/

      /**
       * new Inflate(options)
       * - options (Object): zlib inflate options.
       *
       * Creates new inflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `windowBits`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw inflate
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       * By default, when no options set, autodetect deflate/gzip data format via
       * wrapper header.
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * var inflate = new pako.Inflate({ level: 3});
       *
       * inflate.push(chunk1, false);
       * inflate.push(chunk2, true);  // true -> last chunk
       *
       * if (inflate.err) { throw new Error(inflate.err); }
       *
       * console.log(inflate.result);
       * ```
       **/

      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options);
        this.options = utils.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ''
        }, options || {});
        var opt = this.options; // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.

        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;

          if (opt.windowBits === 0) {
            opt.windowBits = -15;
          }
        } // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate


        if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
          opt.windowBits += 32;
        } // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible


        if (opt.windowBits > 15 && opt.windowBits < 48) {
          // bit 3 (16) -> gzipped data
          // bit 4 (32) -> autodetect gzip/deflate
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }

        this.err = 0; // error code, if happens (0 = Z_OK)

        this.msg = ''; // error message

        this.ended = false; // used to avoid multiple onEnd() calls

        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);

        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }

        this.header = new GZheader();
        zlib_inflate.inflateGetHeader(this.strm, this.header);
      }
      /**
       * Inflate#push(data[, mode]) -> Boolean
       * - data (Uint8Array|Array|ArrayBuffer|String): input data
       * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
       *
       * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
       * new output chunks. Returns `true` on success. The last data block must have
       * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
       * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
       * can use mode Z_SYNC_FLUSH, keeping the decompression context.
       *
       * On fail call [[Inflate#onEnd]] with error code and return false.
       *
       * We strongly recommend to use `Uint8Array` on input for best speed (output
       * format is detected automatically). Also, don't skip last param and always
       * use the same type in your code (boolean or number). That will improve JS speed.
       *
       * For regular `Array`-s make sure all elements are [0..255].
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/


      Inflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;

        var status, _mode;

        var next_out_utf8, tail, utf8str;
        var dict; // Flag to properly process Z_BUF_ERROR on testing inflate call
        // when we check that all output data was flushed.

        var allowBufError = false;

        if (this.ended) {
          return false;
        }

        _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH; // Convert data if needed

        if (typeof data === 'string') {
          // Only binary strings can be decompressed on practice
          strm.input = strings.binstring2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
          /* no bad return value */

          if (status === c.Z_NEED_DICT && dictionary) {
            // Convert data if needed
            if (typeof dictionary === 'string') {
              dict = strings.string2buf(dictionary);
            } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
              dict = new Uint8Array(dictionary);
            } else {
              dict = dictionary;
            }

            status = zlib_inflate.inflateSetDictionary(this.strm, dict);
          }

          if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
          }

          if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
              if (this.options.to === 'string') {
                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                tail = strm.next_out - next_out_utf8;
                utf8str = strings.buf2string(strm.output, next_out_utf8); // move tail

                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;

                if (tail) {
                  utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                }

                this.onData(utf8str);
              } else {
                this.onData(utils.shrinkBuf(strm.output, strm.next_out));
              }
            }
          } // When no more input data, we should check that internal inflate buffers
          // are flushed. The only way to do it when avail_out = 0 - run one more
          // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
          // Here we set flag to process this error properly.
          //
          // NOTE. Deflate does not return error in this case and does not needs such
          // logic.


          if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

        if (status === c.Z_STREAM_END) {
          _mode = c.Z_FINISH;
        } // Finalize on the last chunk.


        if (_mode === c.Z_FINISH) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === c.Z_OK;
        } // callback interim results if Z_SYNC_FLUSH.


        if (_mode === c.Z_SYNC_FLUSH) {
          this.onEnd(c.Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };
      /**
       * Inflate#onData(chunk) -> Void
       * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
       *   on js engine support. When string output requested, each chunk
       *   will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/


      Inflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };
      /**
       * Inflate#onEnd(status) -> Void
       * - status (Number): inflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called either after you tell inflate that the input stream is
       * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
       * or if an error happened. By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/


      Inflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === c.Z_OK) {
          if (this.options.to === 'string') {
            // Glue & convert here, until we teach pako to send
            // utf8 alligned strings to onData
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }

        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      /**
       * inflate(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Decompress `data` with inflate/ungzip and `options`. Autodetect
       * format via wrapper header by default. That's why we don't provide
       * separate `ungzip` method.
       *
       * Supported options are:
       *
       * - windowBits
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
       *   , output;
       *
       * try {
       *   output = pako.inflate(input);
       * } catch (err)
       *   console.log(err);
       * }
       * ```
       **/


      function inflate(input, options) {
        var inflator = new Inflate(options);
        inflator.push(input, true); // That will never happens, if you don't cheat with options :)

        if (inflator.err) {
          throw inflator.msg || msg[inflator.err];
        }

        return inflator.result;
      }
      /**
       * inflateRaw(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * The same as [[inflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/


      function inflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return inflate(input, options);
      }
      /**
       * ungzip(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Just shortcut to [[inflate]], because it autodetects format
       * by header.content. Done for convenience.
       **/


      exports.Inflate = Inflate;
      exports.inflate = inflate;
      exports.inflateRaw = inflateRaw;
      exports.ungzip = inflate;
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/constants": 44,
      "./zlib/gzheader": 47,
      "./zlib/inflate": 49,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    41: [function (require, module, exports) {
      'use strict';

      var TYPED_OK = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';

      exports.assign = function (obj
      /*from1, from2, from3, ...*/
      ) {
        var sources = Array.prototype.slice.call(arguments, 1);

        while (sources.length) {
          var source = sources.shift();

          if (!source) {
            continue;
          }

          if (_typeof(source) !== 'object') {
            throw new TypeError(source + 'must be non-object');
          }

          for (var p in source) {
            if (source.hasOwnProperty(p)) {
              obj[p] = source[p];
            }
          }
        }

        return obj;
      }; // reduce buffer size, avoiding mem copy


      exports.shrinkBuf = function (buf, size) {
        if (buf.length === size) {
          return buf;
        }

        if (buf.subarray) {
          return buf.subarray(0, size);
        }

        buf.length = size;
        return buf;
      };

      var fnTyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
          } // Fallback to ordinary array


          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          var i, l, len, pos, chunk, result; // calculate data length

          len = 0;

          for (i = 0, l = chunks.length; i < l; i++) {
            len += chunks[i].length;
          } // join chunks


          result = new Uint8Array(len);
          pos = 0;

          for (i = 0, l = chunks.length; i < l; i++) {
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
          }

          return result;
        }
      };
      var fnUntyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          return [].concat.apply([], chunks);
        }
      }; // Enable/Disable typed arrays use, for testing
      //

      exports.setTyped = function (on) {
        if (on) {
          exports.Buf8 = Uint8Array;
          exports.Buf16 = Uint16Array;
          exports.Buf32 = Int32Array;
          exports.assign(exports, fnTyped);
        } else {
          exports.Buf8 = Array;
          exports.Buf16 = Array;
          exports.Buf32 = Array;
          exports.assign(exports, fnUntyped);
        }
      };

      exports.setTyped(TYPED_OK);
    }, {}],
    42: [function (require, module, exports) {
      // String encode/decode helpers
      'use strict';

      var utils = require('./common'); // Quick check if we can use fast array to bin string conversion
      //
      // - apply(Array) can fail on Android 2.2
      // - apply(Uint8Array) can fail on iOS 5.1 Safary
      //


      var STR_APPLY_OK = true;
      var STR_APPLY_UIA_OK = true;

      try {
        String.fromCharCode.apply(null, [0]);
      } catch (__) {
        STR_APPLY_OK = false;
      }

      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (__) {
        STR_APPLY_UIA_OK = false;
      } // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff


      var _utf8len = new utils.Buf8(256);

      for (var q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }

      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
      // convert string to array (typed, when possible)

      exports.string2buf = function (str) {
        var buf,
            c,
            c2,
            m_pos,
            i,
            str_len = str.length,
            buf_len = 0; // count binary size

        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        } // allocate buffer


        buf = new utils.Buf8(buf_len); // convert

        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }

        return buf;
      }; // Helper (used in 2 places)


      function buf2binstring(buf, len) {
        // use fallback for big arrays to avoid stack overflow
        if (len < 65537) {
          if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
          }
        }

        var result = '';

        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }

        return result;
      } // Convert byte array to binary string


      exports.buf2binstring = function (buf) {
        return buf2binstring(buf, buf.length);
      }; // Convert binary string (typed, when possible)


      exports.binstring2buf = function (str) {
        var buf = new utils.Buf8(str.length);

        for (var i = 0, len = buf.length; i < len; i++) {
          buf[i] = str.charCodeAt(i);
        }

        return buf;
      }; // convert array to string


      exports.buf2string = function (buf, max) {
        var i, out, c, c_len;
        var len = max || buf.length; // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.

        var utf16buf = new Array(len * 2);

        for (out = 0, i = 0; i < len;) {
          c = buf[i++]; // quick process ascii

          if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
          }

          c_len = _utf8len[c]; // skip 5 & 6 byte codes

          if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
          } // apply mask on first byte


          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          } // terminated by end of string?


          if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
          }

          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        }

        return buf2binstring(utf16buf, out);
      }; // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);


      exports.utf8border = function (buf, max) {
        var pos;
        max = max || buf.length;

        if (max > buf.length) {
          max = buf.length;
        } // go back from last position, until start of sequence found


        pos = max - 1;

        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
          pos--;
        } // Fuckup - very small and broken sequence,
        // return max, because we should return something anyway.


        if (pos < 0) {
          return max;
        } // If we came to start of buffer - that means vuffer is too small,
        // return max too.


        if (pos === 0) {
          return max;
        }

        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };
    }, {
      "./common": 41
    }],
    43: [function (require, module, exports) {
      'use strict'; // Note: adler32 takes 12% for level 0 and 2% for level 6.
      // It doesn't worth to make additional optimizationa as in original.
      // Small size is preferable.
      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function adler32(adler, buf, len, pos) {
        var s1 = adler & 0xffff | 0,
            s2 = adler >>> 16 & 0xffff | 0,
            n = 0;

        while (len !== 0) {
          // Set limit ~ twice less than 5552, to keep
          // s2 in 31-bits, because we force signed ints.
          // in other case %= will fail.
          n = len > 2000 ? 2000 : len;
          len -= n;

          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);

          s1 %= 65521;
          s2 %= 65521;
        }

        return s1 | s2 << 16 | 0;
      }

      module.exports = adler32;
    }, {}],
    44: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {
        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,

        /* Return codes for the compression/decompression functions. Negative values
        * are errors, positive values are used for special but normal events.
        */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,

        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,

        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,

        /* The deflate compression method */
        Z_DEFLATED: 8 //Z_NULL:                 null // Use -1 or null inline, depending on var type

      };
    }, {}],
    45: [function (require, module, exports) {
      'use strict'; // Note: we can't get significant speed boost here.
      // So write code to minimize size - no pregenerated tables
      // and array tools dependencies.
      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.
      // Use ordinary array, since untyped makes no boost here

      function makeTable() {
        var c,
            table = [];

        for (var n = 0; n < 256; n++) {
          c = n;

          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }

          table[n] = c;
        }

        return table;
      } // Create table on load. Just 255 signed longs. Not a problem.


      var crcTable = makeTable();

      function crc32(crc, buf, len, pos) {
        var t = crcTable,
            end = pos + len;
        crc ^= -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      }

      module.exports = crc32;
    }, {}],
    46: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var trees = require('./trees');

      var adler32 = require('./adler32');

      var crc32 = require('./crc32');

      var msg = require('./messages');
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      /* Allowed flush values; see deflate() and inflate() below for details */


      var Z_NO_FLUSH = 0;
      var Z_PARTIAL_FLUSH = 1; //var Z_SYNC_FLUSH    = 2;

      var Z_FULL_FLUSH = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5; //var Z_TREES         = 6;

      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */

      var Z_OK = 0;
      var Z_STREAM_END = 1; //var Z_NEED_DICT     = 2;
      //var Z_ERRNO         = -1;

      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3; //var Z_MEM_ERROR     = -4;

      var Z_BUF_ERROR = -5; //var Z_VERSION_ERROR = -6;

      /* compression levels */
      //var Z_NO_COMPRESSION      = 0;
      //var Z_BEST_SPEED          = 1;
      //var Z_BEST_COMPRESSION    = 9;

      var Z_DEFAULT_COMPRESSION = -1;
      var Z_FILTERED = 1;
      var Z_HUFFMAN_ONLY = 2;
      var Z_RLE = 3;
      var Z_FIXED = 4;
      var Z_DEFAULT_STRATEGY = 0;
      /* Possible values of the data_type field (though see inflate()) */
      //var Z_BINARY              = 0;
      //var Z_TEXT                = 1;
      //var Z_ASCII               = 1; // = Z_TEXT

      var Z_UNKNOWN = 2;
      /* The deflate compression method */

      var Z_DEFLATED = 8;
      /*============================================================================*/

      var MAX_MEM_LEVEL = 9;
      /* Maximum value for memLevel in deflateInit2 */

      var MAX_WBITS = 15;
      /* 32K LZ77 window */

      var DEF_MEM_LEVEL = 8;
      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS = 256;
      /* number of literal bytes 0..255 */

      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES = 30;
      /* number of distance codes */

      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */

      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
      var PRESET_DICT = 0x20;
      var INIT_STATE = 42;
      var EXTRA_STATE = 69;
      var NAME_STATE = 73;
      var COMMENT_STATE = 91;
      var HCRC_STATE = 103;
      var BUSY_STATE = 113;
      var FINISH_STATE = 666;
      var BS_NEED_MORE = 1;
      /* block not completed, need more input or more output */

      var BS_BLOCK_DONE = 2;
      /* block flush performed */

      var BS_FINISH_STARTED = 3;
      /* finish started, need only more output at next deflate */

      var BS_FINISH_DONE = 4;
      /* finish done, accept no more input or output */

      var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

      function err(strm, errorCode) {
        strm.msg = msg[errorCode];
        return errorCode;
      }

      function rank(f) {
        return (f << 1) - (f > 4 ? 9 : 0);
      }

      function zero(buf) {
        var len = buf.length;

        while (--len >= 0) {
          buf[len] = 0;
        }
      }
      /* =========================================================================
       * Flush as much pending output as possible. All deflate() output goes
       * through this function so some applications may wish to modify it
       * to avoid allocating a large strm->output buffer and copying into it.
       * (See also read_buf()).
       */


      function flush_pending(strm) {
        var s = strm.state; //_tr_flush_bits(s);

        var len = s.pending;

        if (len > strm.avail_out) {
          len = strm.avail_out;
        }

        if (len === 0) {
          return;
        }

        utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
        strm.next_out += len;
        s.pending_out += len;
        strm.total_out += len;
        strm.avail_out -= len;
        s.pending -= len;

        if (s.pending === 0) {
          s.pending_out = 0;
        }
      }

      function flush_block_only(s, last) {
        trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);

        s.block_start = s.strstart;
        flush_pending(s.strm);
      }

      function put_byte(s, b) {
        s.pending_buf[s.pending++] = b;
      }
      /* =========================================================================
       * Put a short in the pending buffer. The 16-bit value is put in MSB order.
       * IN assertion: the stream state is correct and there is enough room in
       * pending_buf.
       */


      function putShortMSB(s, b) {
        //  put_byte(s, (Byte)(b >> 8));
        //  put_byte(s, (Byte)(b & 0xff));
        s.pending_buf[s.pending++] = b >>> 8 & 0xff;
        s.pending_buf[s.pending++] = b & 0xff;
      }
      /* ===========================================================================
       * Read a new buffer from the current input stream, update the adler32
       * and total number of bytes read.  All deflate() input goes through
       * this function so some applications may wish to modify it to avoid
       * allocating a large strm->input buffer and copying from it.
       * (See also flush_pending()).
       */


      function read_buf(strm, buf, start, size) {
        var len = strm.avail_in;

        if (len > size) {
          len = size;
        }

        if (len === 0) {
          return 0;
        }

        strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);

        utils.arraySet(buf, strm.input, strm.next_in, len, start);

        if (strm.state.wrap === 1) {
          strm.adler = adler32(strm.adler, buf, len, start);
        } else if (strm.state.wrap === 2) {
          strm.adler = crc32(strm.adler, buf, len, start);
        }

        strm.next_in += len;
        strm.total_in += len;
        return len;
      }
      /* ===========================================================================
       * Set match_start to the longest match starting at the given string and
       * return its length. Matches shorter or equal to prev_length are discarded,
       * in which case the result is equal to prev_length and match_start is
       * garbage.
       * IN assertions: cur_match is the head of the hash chain for the current
       *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
       * OUT assertion: the match length is not greater than s->lookahead.
       */


      function longest_match(s, cur_match) {
        var chain_length = s.max_chain_length;
        /* max hash chain length */

        var scan = s.strstart;
        /* current string */

        var match;
        /* matched string */

        var len;
        /* length of current match */

        var best_len = s.prev_length;
        /* best match length so far */

        var nice_match = s.nice_match;
        /* stop if match long enough */

        var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0
        /*NIL*/
        ;
        var _win = s.window; // shortcut

        var wmask = s.w_mask;
        var prev = s.prev;
        /* Stop when cur_match becomes <= limit. To simplify the code,
         * we prevent matches with the string of window index 0.
         */

        var strend = s.strstart + MAX_MATCH;
        var scan_end1 = _win[scan + best_len - 1];
        var scan_end = _win[scan + best_len];
        /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
         * It is easy to get rid of this optimization if necessary.
         */
        // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

        /* Do not waste too much time if we already have a good match: */

        if (s.prev_length >= s.good_match) {
          chain_length >>= 2;
        }
        /* Do not look for matches beyond the end of the input. This is necessary
         * to make deflate deterministic.
         */


        if (nice_match > s.lookahead) {
          nice_match = s.lookahead;
        } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");


        do {
          // Assert(cur_match < s->strstart, "no future");
          match = cur_match;
          /* Skip to next match if the match length cannot increase
           * or if the match length is less than 2.  Note that the checks below
           * for insufficient lookahead only occur occasionally for performance
           * reasons.  Therefore uninitialized memory will be accessed, and
           * conditional jumps will be made that depend on those values.
           * However the length of the match is limited to the lookahead, so
           * the output of deflate is not affected by the uninitialized values.
           */

          if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
            continue;
          }
          /* The check at best_len-1 can be removed because it will be made
           * again later. (This heuristic is not always a win.)
           * It is not necessary to compare scan[2] and match[2] since they
           * are always equal when the other bytes match, given that
           * the hash keys are equal and that HASH_BITS >= 8.
           */


          scan += 2;
          match++; // Assert(*scan == *match, "match[2]?");

          /* We check for insufficient lookahead only every 8th comparison;
           * the 256th check will be made at strstart+258.
           */

          do {
            /*jshint noempty:false*/
          } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");


          len = MAX_MATCH - (strend - scan);
          scan = strend - MAX_MATCH;

          if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;

            if (len >= nice_match) {
              break;
            }

            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
          }
        } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

        if (best_len <= s.lookahead) {
          return best_len;
        }

        return s.lookahead;
      }
      /* ===========================================================================
       * Fill the window when the lookahead becomes insufficient.
       * Updates strstart and lookahead.
       *
       * IN assertion: lookahead < MIN_LOOKAHEAD
       * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
       *    At least one byte has been read, or avail_in == 0; reads are
       *    performed for at least two bytes (required for the zip translate_eol
       *    option -- not supported here).
       */


      function fill_window(s) {
        var _w_size = s.w_size;
        var p, n, m, more, str; //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

        do {
          more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed

          /* Deal with !@#$% 64K limit: */
          //if (sizeof(int) <= 2) {
          //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
          //        more = wsize;
          //
          //  } else if (more == (unsigned)(-1)) {
          //        /* Very unlikely, but possible on 16 bit machine if
          //         * strstart == 0 && lookahead == 1 (input done a byte at time)
          //         */
          //        more--;
          //    }
          //}

          /* If the window is almost full and there is insufficient lookahead,
           * move the upper half to the lower one to make room in the upper half.
           */

          if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */

            s.block_start -= _w_size;
            /* Slide the hash table (could be avoided with 32 bit values
             at the expense of memory usage). We slide even when level == 0
             to keep the hash table consistent if we switch back to level > 0
             later. (Using level 0 permanently is not an optimal usage of
             zlib, so we don't care about this pathological case.)
             */

            n = s.hash_size;
            p = n;

            do {
              m = s.head[--p];
              s.head[p] = m >= _w_size ? m - _w_size : 0;
            } while (--n);

            n = _w_size;
            p = n;

            do {
              m = s.prev[--p];
              s.prev[p] = m >= _w_size ? m - _w_size : 0;
              /* If n is not on any hash chain, prev[n] is garbage but
               * its value will never be used.
               */
            } while (--n);

            more += _w_size;
          }

          if (s.strm.avail_in === 0) {
            break;
          }
          /* If there was no sliding:
           *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
           *    more == window_size - lookahead - strstart
           * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
           * => more >= window_size - 2*WSIZE + 2
           * In the BIG_MEM or MMAP case (not yet supported),
           *   window_size == input_size + MIN_LOOKAHEAD  &&
           *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
           * Otherwise, window_size == 2*WSIZE so more >= 2.
           * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
           */
          //Assert(more >= 2, "more < 2");


          n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
          s.lookahead += n;
          /* Initialize the hash value now that we have some input: */

          if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */

            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask; //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif

            while (s.insert) {
              /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
              s.prev[str & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = str;
              str++;
              s.insert--;

              if (s.lookahead + s.insert < MIN_MATCH) {
                break;
              }
            }
          }
          /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
           * but this is not important since only literal bytes will be emitted.
           */

        } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
        /* If the WIN_INIT bytes after the end of the current data have never been
         * written, then zero those bytes in order to avoid memory check reports of
         * the use of uninitialized (or uninitialised as Julian writes) bytes by
         * the longest match routines.  Update the high water mark for the next
         * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
         * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
         */
        //  if (s.high_water < s.window_size) {
        //    var curr = s.strstart + s.lookahead;
        //    var init = 0;
        //
        //    if (s.high_water < curr) {
        //      /* Previous high water mark below current data -- zero WIN_INIT
        //       * bytes or up to end of window, whichever is less.
        //       */
        //      init = s.window_size - curr;
        //      if (init > WIN_INIT)
        //        init = WIN_INIT;
        //      zmemzero(s->window + curr, (unsigned)init);
        //      s->high_water = curr + init;
        //    }
        //    else if (s->high_water < (ulg)curr + WIN_INIT) {
        //      /* High water mark at or above current data, but below current data
        //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
        //       * to end of window, whichever is less.
        //       */
        //      init = (ulg)curr + WIN_INIT - s->high_water;
        //      if (init > s->window_size - s->high_water)
        //        init = s->window_size - s->high_water;
        //      zmemzero(s->window + s->high_water, (unsigned)init);
        //      s->high_water += init;
        //    }
        //  }
        //
        //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
        //    "not enough room for search");

      }
      /* ===========================================================================
       * Copy without compression as much as possible from the input stream, return
       * the current block state.
       * This function does not insert new strings in the dictionary since
       * uncompressible data is probably not useful. This function is used
       * only for the level=0 compression option.
       * NOTE: this function should be optimized to avoid extra copying from
       * window to pending_buf.
       */


      function deflate_stored(s, flush) {
        /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
         * to pending_buf_size, and each stored block has a 5 byte header:
         */
        var max_block_size = 0xffff;

        if (max_block_size > s.pending_buf_size - 5) {
          max_block_size = s.pending_buf_size - 5;
        }
        /* Copy as much as possible from input to output: */


        for (;;) {
          /* Fill the window as much as possible: */
          if (s.lookahead <= 1) {
            //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
            //  s->block_start >= (long)s->w_size, "slide too late");
            //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
            //        s.block_start >= s.w_size)) {
            //        throw  new Error("slide too late");
            //      }
            fill_window(s);

            if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          } //Assert(s->block_start >= 0L, "block gone");
          //    if (s.block_start < 0) throw new Error("block gone");


          s.strstart += s.lookahead;
          s.lookahead = 0;
          /* Emit a stored block if pending_buf will be full: */

          var max_start = s.block_start + max_block_size;

          if (s.strstart === 0 || s.strstart >= max_start) {
            /* strstart == 0 is possible when wraparound on 16-bit machine */
            s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            /*** FLUSH_BLOCK(s, 0); ***/

            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
          /* Flush if we may have to slide, otherwise block_start may become
           * negative and the data will be gone:
           */


          if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.strstart > s.block_start) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_NEED_MORE;
      }
      /* ===========================================================================
       * Compress as much as possible from the input stream, return the current
       * block state.
       * This function does not perform lazy evaluation of matches and inserts
       * new strings in the dictionary only for unmatched strings or for short
       * matches. It is used only for the fast compression options.
       */


      function deflate_fast(s, flush) {
        var hash_head;
        /* head of the hash chain */

        var bflush;
        /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);

            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
              /* flush the current block */
            }
          }
          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */


          hash_head = 0
          /*NIL*/
          ;

          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
          /* Find the longest match, discarding those <= prev_length.
           * At this point we have always match_length < MIN_MATCH
           */


          if (hash_head !== 0
          /*NIL*/
          && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
             * of window index 0 (in particular we have to avoid a match
             * of the string with itself at the start of the input file).
             */
            s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */
          }

          if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                           s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
             * is not too large. This saves time but degrades compression.
             */

            if (s.match_length <= s.max_lazy_match
            /*max_insert_length*/
            && s.lookahead >= MIN_MATCH) {
              s.match_length--;
              /* string at strstart already in table */

              do {
                s.strstart++;
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/

                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/

                /* strstart never exceeds WSIZE-MAX_MATCH, so there are
                 * always MIN_MATCH bytes ahead.
                 */
              } while (--s.match_length !== 0);

              s.strstart++;
            } else {
              s.strstart += s.match_length;
              s.match_length = 0;
              s.ins_h = s.window[s.strstart];
              /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */

              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask; //#if MIN_MATCH != 3
              //                Call UPDATE_HASH() MIN_MATCH-3 more times
              //#endif

              /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
               * matter since it will be recomputed at next deflate call.
               */
            }
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s.window[s.strstart]));

            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * Same as above, but achieves better compression. We use a lazy
       * evaluation for matches: a match is finally adopted only if there is
       * no better match at the next window position.
       */


      function deflate_slow(s, flush) {
        var hash_head;
        /* head of hash chain */

        var bflush;
        /* set if current block must be flushed */

        var max_insert;
        /* Process the input block. */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);

            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          }
          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */


          hash_head = 0
          /*NIL*/
          ;

          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
          /* Find the longest match, discarding those <= prev_length.
           */


          s.prev_length = s.match_length;
          s.prev_match = s.match_start;
          s.match_length = MIN_MATCH - 1;

          if (hash_head !== 0
          /*NIL*/
          && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD
          /*MAX_DIST(s)*/
          ) {
              /* To simplify the code, we prevent matches with the string
               * of window index 0 (in particular we have to avoid a match
               * of the string with itself at the start of the input file).
               */
              s.match_length = longest_match(s, hash_head);
              /* longest_match() sets match_start */

              if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096
              /*TOO_FAR*/
              )) {
                /* If prev_match is also MIN_MATCH, match_start is garbage
                 * but we will ignore the current match anyway.
                 */
                s.match_length = MIN_MATCH - 1;
              }
            }
          /* If there was a match at the previous step and the current
           * match is not better, output the previous match:
           */


          if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */
            //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                           s.prev_length - MIN_MATCH, bflush);***/

            bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
             * strstart-1 and strstart are already inserted. If there is not
             * enough lookahead, the last two strings are not inserted in
             * the hash table.
             */

            s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;

            do {
              if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
              }
            } while (--s.prev_length !== 0);

            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;

            if (bflush) {
              /*** FLUSH_BLOCK(s, 0); ***/
              flush_block_only(s, false);

              if (s.strm.avail_out === 0) {
                return BS_NEED_MORE;
              }
              /***/

            }
          } else if (s.match_available) {
            /* If there was no match at the previous position, output a
             * single literal. If there was a match but the current match
             * is longer, truncate the previous match to a single literal.
             */
            //Tracevv((stderr,"%c", s->window[s->strstart-1]));

            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

            if (bflush) {
              /*** FLUSH_BLOCK_ONLY(s, 0) ***/
              flush_block_only(s, false);
              /***/
            }

            s.strstart++;
            s.lookahead--;

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          } else {
            /* There is no previous match to compare with, wait for
             * the next step to decide.
             */
            s.match_available = 1;
            s.strstart++;
            s.lookahead--;
          }
        } //Assert (flush != Z_NO_FLUSH, "no flush?");


        if (s.match_available) {
          //Tracevv((stderr,"%c", s->window[s->strstart-1]));

          /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          s.match_available = 0;
        }

        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * For Z_RLE, simply look for runs of bytes, generate matches only of distance
       * one.  Do not maintain a hash table.  (It will be regenerated if this run of
       * deflate switches away from Z_RLE.)
       */


      function deflate_rle(s, flush) {
        var bflush;
        /* set if current block must be flushed */

        var prev;
        /* byte at distance one to match */

        var scan, strend;
        /* scan goes up to strend for length of run */

        var _win = s.window;

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the longest run, plus one for the unrolled loop.
           */
          if (s.lookahead <= MAX_MATCH) {
            fill_window(s);

            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          }
          /* See how many times the previous byte repeats */


          s.match_length = 0;

          if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];

            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
              strend = s.strstart + MAX_MATCH;

              do {
                /*jshint noempty:false*/
              } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);

              s.match_length = MAX_MATCH - (strend - scan);

              if (s.match_length > s.lookahead) {
                s.match_length = s.lookahead;
              }
            } //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");

          }
          /* Emit match if have run of MIN_MATCH or longer, else emit literal */


          if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);

            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s->window[s->strstart]));

            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
       * (It will be regenerated if this run of deflate switches away from Huffman.)
       */


      function deflate_huff(s, flush) {
        var bflush;
        /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we have a literal to write. */
          if (s.lookahead === 0) {
            fill_window(s);

            if (s.lookahead === 0) {
              if (flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
              }

              break;
              /* flush the current block */
            }
          }
          /* Output a literal byte */


          s.match_length = 0; //Tracevv((stderr,"%c", s->window[s->strstart]));

          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/

          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* Values for max_lazy_match, good_match and max_chain_length, depending on
       * the desired pack level (0..9). The values given below have been tuned to
       * exclude worst case performance for pathological files. Better values may be
       * found for specific files.
       */


      function Config(good_length, max_lazy, nice_length, max_chain, func) {
        this.good_length = good_length;
        this.max_lazy = max_lazy;
        this.nice_length = nice_length;
        this.max_chain = max_chain;
        this.func = func;
      }

      var configuration_table;
      configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
      ];
      /* ===========================================================================
       * Initialize the "longest match" routines for a new zlib stream
       */

      function lm_init(s) {
        s.window_size = 2 * s.w_size;
        /*** CLEAR_HASH(s); ***/

        zero(s.head); // Fill with NIL (= 0);

        /* Set the default configuration parameters:
         */

        s.max_lazy_match = configuration_table[s.level].max_lazy;
        s.good_match = configuration_table[s.level].good_length;
        s.nice_match = configuration_table[s.level].nice_length;
        s.max_chain_length = configuration_table[s.level].max_chain;
        s.strstart = 0;
        s.block_start = 0;
        s.lookahead = 0;
        s.insert = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        s.ins_h = 0;
      }

      function DeflateState() {
        this.strm = null;
        /* pointer back to this zlib stream */

        this.status = 0;
        /* as the name implies */

        this.pending_buf = null;
        /* output still pending */

        this.pending_buf_size = 0;
        /* size of pending_buf */

        this.pending_out = 0;
        /* next pending byte to output to the stream */

        this.pending = 0;
        /* nb of bytes in the pending buffer */

        this.wrap = 0;
        /* bit 0 true for zlib, bit 1 true for gzip */

        this.gzhead = null;
        /* gzip header information to write */

        this.gzindex = 0;
        /* where in extra, name, or comment */

        this.method = Z_DEFLATED;
        /* can only be DEFLATED */

        this.last_flush = -1;
        /* value of flush param for previous deflate call */

        this.w_size = 0;
        /* LZ77 window size (32K by default) */

        this.w_bits = 0;
        /* log2(w_size)  (8..16) */

        this.w_mask = 0;
        /* w_size - 1 */

        this.window = null;
        /* Sliding window. Input bytes are read into the second half of the window,
         * and move to the first half later to keep a dictionary of at least wSize
         * bytes. With this organization, matches are limited to a distance of
         * wSize-MAX_MATCH bytes, but this ensures that IO is always
         * performed with a length multiple of the block size.
         */

        this.window_size = 0;
        /* Actual size of window: 2*wSize, except when the user input buffer
         * is directly used as sliding window.
         */

        this.prev = null;
        /* Link to older string with same hash index. To limit the size of this
         * array to 64K, this link is maintained only for the last 32K strings.
         * An index in this array is thus a window index modulo 32K.
         */

        this.head = null;
        /* Heads of the hash chains or NIL. */

        this.ins_h = 0;
        /* hash index of string to be inserted */

        this.hash_size = 0;
        /* number of elements in hash table */

        this.hash_bits = 0;
        /* log2(hash_size) */

        this.hash_mask = 0;
        /* hash_size-1 */

        this.hash_shift = 0;
        /* Number of bits by which ins_h must be shifted at each input
         * step. It must be such that after MIN_MATCH steps, the oldest
         * byte no longer takes part in the hash key, that is:
         *   hash_shift * MIN_MATCH >= hash_bits
         */

        this.block_start = 0;
        /* Window position at the beginning of the current output block. Gets
         * negative when the window is moved backwards.
         */

        this.match_length = 0;
        /* length of best match */

        this.prev_match = 0;
        /* previous match */

        this.match_available = 0;
        /* set if previous match exists */

        this.strstart = 0;
        /* start of string to insert */

        this.match_start = 0;
        /* start of matching string */

        this.lookahead = 0;
        /* number of valid bytes ahead in window */

        this.prev_length = 0;
        /* Length of the best match at previous step. Matches not greater than this
         * are discarded. This is used in the lazy match evaluation.
         */

        this.max_chain_length = 0;
        /* To speed up deflation, hash chains are never searched beyond this
         * length.  A higher limit improves compression ratio but degrades the
         * speed.
         */

        this.max_lazy_match = 0;
        /* Attempt to find a better match only when the current match is strictly
         * smaller than this value. This mechanism is used only for compression
         * levels >= 4.
         */
        // That's alias to max_lazy_match, don't use directly
        //this.max_insert_length = 0;

        /* Insert new strings in the hash table only if the match length is not
         * greater than this length. This saves time but degrades compression.
         * max_insert_length is used only for compression levels <= 3.
         */

        this.level = 0;
        /* compression level (1..9) */

        this.strategy = 0;
        /* favor or force Huffman coding*/

        this.good_match = 0;
        /* Use a faster search when the previous match is longer than this */

        this.nice_match = 0;
        /* Stop searching when current match exceeds this */

        /* used by trees.c: */

        /* Didn't use ct_data typedef below to suppress compiler warning */
        // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
        // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
        // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
        // Use flat array of DOUBLE size, with interleaved fata,
        // because JS does not support effective

        this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
        this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
        this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
        zero(this.dyn_ltree);
        zero(this.dyn_dtree);
        zero(this.bl_tree);
        this.l_desc = null;
        /* desc. for literal tree */

        this.d_desc = null;
        /* desc. for distance tree */

        this.bl_desc = null;
        /* desc. for bit length tree */
        //ush bl_count[MAX_BITS+1];

        this.bl_count = new utils.Buf16(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */
        //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */

        this.heap = new utils.Buf16(2 * L_CODES + 1);
        /* heap used to build the Huffman trees */

        zero(this.heap);
        this.heap_len = 0;
        /* number of elements in the heap */

        this.heap_max = 0;
        /* element of largest frequency */

        /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
         * The same heap array is used to build all trees.
         */

        this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];

        zero(this.depth);
        /* Depth of each subtree used as tie breaker for trees of equal frequency
         */

        this.l_buf = 0;
        /* buffer index for literals or lengths */

        this.lit_bufsize = 0;
        /* Size of match buffer for literals/lengths.  There are 4 reasons for
         * limiting lit_bufsize to 64K:
         *   - frequencies can be kept in 16 bit counters
         *   - if compression is not successful for the first block, all input
         *     data is still in the window so we can still emit a stored block even
         *     when input comes from standard input.  (This can also be done for
         *     all blocks if lit_bufsize is not greater than 32K.)
         *   - if compression is not successful for a file smaller than 64K, we can
         *     even emit a stored file instead of a stored block (saving 5 bytes).
         *     This is applicable only for zip (not gzip or zlib).
         *   - creating new Huffman trees less frequently may not provide fast
         *     adaptation to changes in the input data statistics. (Take for
         *     example a binary file with poorly compressible code followed by
         *     a highly compressible string table.) Smaller buffer sizes give
         *     fast adaptation but have of course the overhead of transmitting
         *     trees more frequently.
         *   - I can't count above 4
         */

        this.last_lit = 0;
        /* running index in l_buf */

        this.d_buf = 0;
        /* Buffer index for distances. To simplify the code, d_buf and l_buf have
         * the same number of elements. To use different lengths, an extra flag
         * array would be necessary.
         */

        this.opt_len = 0;
        /* bit length of current block with optimal trees */

        this.static_len = 0;
        /* bit length of current block with static trees */

        this.matches = 0;
        /* number of string matches in current block */

        this.insert = 0;
        /* bytes at end of window left to insert */

        this.bi_buf = 0;
        /* Output buffer. bits are inserted starting at the bottom (least
         * significant bits).
         */

        this.bi_valid = 0;
        /* Number of valid bits in bi_buf.  All bits above the last valid bit
         * are always zero.
         */
        // Used for window memory init. We safely ignore it for JS. That makes
        // sense only for pointers and memory check tools.
        //this.high_water = 0;

        /* High water mark offset in window for initialized bytes -- bytes above
         * this are set to zero in order to avoid memory check warnings when
         * longest match routines access bytes past the input.  This is then
         * updated to the new high water mark.
         */
      }

      function deflateResetKeep(strm) {
        var s;

        if (!strm || !strm.state) {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.total_in = strm.total_out = 0;
        strm.data_type = Z_UNKNOWN;
        s = strm.state;
        s.pending = 0;
        s.pending_out = 0;

        if (s.wrap < 0) {
          s.wrap = -s.wrap;
          /* was made negative by deflate(..., Z_FINISH); */
        }

        s.status = s.wrap ? INIT_STATE : BUSY_STATE;
        strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
        : 1; // adler32(0, Z_NULL, 0)

        s.last_flush = Z_NO_FLUSH;

        trees._tr_init(s);

        return Z_OK;
      }

      function deflateReset(strm) {
        var ret = deflateResetKeep(strm);

        if (ret === Z_OK) {
          lm_init(strm.state);
        }

        return ret;
      }

      function deflateSetHeader(strm, head) {
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        if (strm.state.wrap !== 2) {
          return Z_STREAM_ERROR;
        }

        strm.state.gzhead = head;
        return Z_OK;
      }

      function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
        if (!strm) {
          // === Z_NULL
          return Z_STREAM_ERROR;
        }

        var wrap = 1;

        if (level === Z_DEFAULT_COMPRESSION) {
          level = 6;
        }

        if (windowBits < 0) {
          /* suppress zlib wrapper */
          wrap = 0;
          windowBits = -windowBits;
        } else if (windowBits > 15) {
          wrap = 2;
          /* write gzip wrapper instead */

          windowBits -= 16;
        }

        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
          return err(strm, Z_STREAM_ERROR);
        }

        if (windowBits === 8) {
          windowBits = 9;
        }
        /* until 256-byte window bug fixed */


        var s = new DeflateState();
        strm.state = s;
        s.strm = strm;
        s.wrap = wrap;
        s.gzhead = null;
        s.w_bits = windowBits;
        s.w_size = 1 << s.w_bits;
        s.w_mask = s.w_size - 1;
        s.hash_bits = memLevel + 7;
        s.hash_size = 1 << s.hash_bits;
        s.hash_mask = s.hash_size - 1;
        s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
        s.window = new utils.Buf8(s.w_size * 2);
        s.head = new utils.Buf16(s.hash_size);
        s.prev = new utils.Buf16(s.w_size); // Don't need mem init magic for JS.
        //s.high_water = 0;  /* nothing written to s->window yet */

        s.lit_bufsize = 1 << memLevel + 6;
        /* 16K elements by default */

        s.pending_buf_size = s.lit_bufsize * 4; //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
        //s->pending_buf = (uchf *) overlay;

        s.pending_buf = new utils.Buf8(s.pending_buf_size); // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
        //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);

        s.d_buf = 1 * s.lit_bufsize; //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;

        s.l_buf = (1 + 2) * s.lit_bufsize;
        s.level = level;
        s.strategy = strategy;
        s.method = method;
        return deflateReset(strm);
      }

      function deflateInit(strm, level) {
        return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
      }

      function deflate(strm, flush) {
        var old_flush, s;
        var beg, val; // for gzip header write only

        if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
          return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
        }

        s = strm.state;

        if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
          return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
        }

        s.strm = strm;
        /* just in case */

        old_flush = s.last_flush;
        s.last_flush = flush;
        /* Write the header */

        if (s.status === INIT_STATE) {
          if (s.wrap === 2) {
            // GZIP header
            strm.adler = 0; //crc32(0L, Z_NULL, 0);

            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);

            if (!s.gzhead) {
              // s->gzhead == Z_NULL
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, OS_CODE);
              s.status = BUSY_STATE;
            } else {
              put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
              put_byte(s, s.gzhead.time & 0xff);
              put_byte(s, s.gzhead.time >> 8 & 0xff);
              put_byte(s, s.gzhead.time >> 16 & 0xff);
              put_byte(s, s.gzhead.time >> 24 & 0xff);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, s.gzhead.os & 0xff);

              if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
              }

              if (s.gzhead.hcrc) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
              }

              s.gzindex = 0;
              s.status = EXTRA_STATE;
            }
          } else // DEFLATE header
            {
              var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
              var level_flags = -1;

              if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
                level_flags = 0;
              } else if (s.level < 6) {
                level_flags = 1;
              } else if (s.level === 6) {
                level_flags = 2;
              } else {
                level_flags = 3;
              }

              header |= level_flags << 6;

              if (s.strstart !== 0) {
                header |= PRESET_DICT;
              }

              header += 31 - header % 31;
              s.status = BUSY_STATE;
              putShortMSB(s, header);
              /* Save the adler32 of the preset dictionary: */

              if (s.strstart !== 0) {
                putShortMSB(s, strm.adler >>> 16);
                putShortMSB(s, strm.adler & 0xffff);
              }

              strm.adler = 1; // adler32(0L, Z_NULL, 0);
            }
        } //#ifdef GZIP


        if (s.status === EXTRA_STATE) {
          if (s.gzhead.extra
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */

              while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    break;
                  }
                }

                put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
                s.gzindex++;
              }

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (s.gzindex === s.gzhead.extra.length) {
                s.gzindex = 0;
                s.status = NAME_STATE;
              }
            } else {
            s.status = NAME_STATE;
          }
        }

        if (s.status === NAME_STATE) {
          if (s.gzhead.name
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                } // JS specific: little magic to add zero terminator to end of string


                if (s.gzindex < s.gzhead.name.length) {
                  val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }

                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (val === 0) {
                s.gzindex = 0;
                s.status = COMMENT_STATE;
              }
            } else {
            s.status = COMMENT_STATE;
          }
        }

        if (s.status === COMMENT_STATE) {
          if (s.gzhead.comment
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                } // JS specific: little magic to add zero terminator to end of string


                if (s.gzindex < s.gzhead.comment.length) {
                  val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }

                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (val === 0) {
                s.status = HCRC_STATE;
              }
            } else {
            s.status = HCRC_STATE;
          }
        }

        if (s.status === HCRC_STATE) {
          if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
              flush_pending(strm);
            }

            if (s.pending + 2 <= s.pending_buf_size) {
              put_byte(s, strm.adler & 0xff);
              put_byte(s, strm.adler >> 8 & 0xff);
              strm.adler = 0; //crc32(0L, Z_NULL, 0);

              s.status = BUSY_STATE;
            }
          } else {
            s.status = BUSY_STATE;
          }
        } //#endif

        /* Flush as much pending output as possible */


        if (s.pending !== 0) {
          flush_pending(strm);

          if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
             * more output space, but possibly with both pending and
             * avail_in equal to zero. There won't be anything to do,
             * but this is not an error situation so make sure we
             * return OK instead of BUF_ERROR at next call of deflate:
             */
            s.last_flush = -1;
            return Z_OK;
          }
          /* Make sure there is something to do and avoid duplicate consecutive
           * flushes. For repeated and useless calls with Z_FINISH, we keep
           * returning Z_STREAM_END instead of Z_BUF_ERROR.
           */

        } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
          return err(strm, Z_BUF_ERROR);
        }
        /* User must not provide more input after the first FINISH: */


        if (s.status === FINISH_STATE && strm.avail_in !== 0) {
          return err(strm, Z_BUF_ERROR);
        }
        /* Start a new block or continue the current one.
         */


        if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
          var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);

          if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s.status = FINISH_STATE;
          }

          if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR next call, see above */
            }

            return Z_OK;
            /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
             * of deflate should use the same flush parameter to make sure
             * that the flush is complete. So we don't have to output an
             * empty block here, this will be done at next call. This also
             * ensures that for a very small output buffer, we emit at most
             * one empty block.
             */
          }

          if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
              trees._tr_align(s);
            } else if (flush !== Z_BLOCK) {
              /* FULL_FLUSH or SYNC_FLUSH */
              trees._tr_stored_block(s, 0, 0, false);
              /* For a full flush, this empty block will be recognized
               * as a special marker by inflate_sync().
               */


              if (flush === Z_FULL_FLUSH) {
                /*** CLEAR_HASH(s); ***/

                /* forget history */
                zero(s.head); // Fill with NIL (= 0);

                if (s.lookahead === 0) {
                  s.strstart = 0;
                  s.block_start = 0;
                  s.insert = 0;
                }
              }
            }

            flush_pending(strm);

            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR at next call, see above */

              return Z_OK;
            }
          }
        } //Assert(strm->avail_out > 0, "bug2");
        //if (strm.avail_out <= 0) { throw new Error("bug2");}


        if (flush !== Z_FINISH) {
          return Z_OK;
        }

        if (s.wrap <= 0) {
          return Z_STREAM_END;
        }
        /* Write the trailer */


        if (s.wrap === 2) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          put_byte(s, strm.adler >> 16 & 0xff);
          put_byte(s, strm.adler >> 24 & 0xff);
          put_byte(s, strm.total_in & 0xff);
          put_byte(s, strm.total_in >> 8 & 0xff);
          put_byte(s, strm.total_in >> 16 & 0xff);
          put_byte(s, strm.total_in >> 24 & 0xff);
        } else {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }

        flush_pending(strm);
        /* If avail_out is zero, the application will call deflate again
         * to flush the rest.
         */

        if (s.wrap > 0) {
          s.wrap = -s.wrap;
        }
        /* write the trailer only once! */


        return s.pending !== 0 ? Z_OK : Z_STREAM_END;
      }

      function deflateEnd(strm) {
        var status;

        if (!strm
        /*== Z_NULL*/
        || !strm.state
        /*== Z_NULL*/
        ) {
            return Z_STREAM_ERROR;
          }

        status = strm.state.status;

        if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.state = null;
        return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
      }
      /* =========================================================================
       * Initializes the compression dictionary from the given byte
       * sequence without producing any compressed output.
       */


      function deflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var s;
        var str, n;
        var wrap;
        var avail;
        var next;
        var input;
        var tmpDict;

        if (!strm
        /*== Z_NULL*/
        || !strm.state
        /*== Z_NULL*/
        ) {
            return Z_STREAM_ERROR;
          }

        s = strm.state;
        wrap = s.wrap;

        if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
          return Z_STREAM_ERROR;
        }
        /* when using zlib wrappers, compute Adler-32 for provided dictionary */


        if (wrap === 1) {
          /* adler32(strm->adler, dictionary, dictLength); */
          strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
        }

        s.wrap = 0;
        /* avoid computing Adler-32 in read_buf */

        /* if dictionary would fill window, just replace the history */

        if (dictLength >= s.w_size) {
          if (wrap === 0) {
            /* already empty otherwise */

            /*** CLEAR_HASH(s); ***/
            zero(s.head); // Fill with NIL (= 0);

            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
          /* use the tail */
          // dictionary = dictionary.slice(dictLength - s.w_size);


          tmpDict = new utils.Buf8(s.w_size);
          utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
          dictionary = tmpDict;
          dictLength = s.w_size;
        }
        /* insert dictionary into window and hash */


        avail = strm.avail_in;
        next = strm.next_in;
        input = strm.input;
        strm.avail_in = dictLength;
        strm.next_in = 0;
        strm.input = dictionary;
        fill_window(s);

        while (s.lookahead >= MIN_MATCH) {
          str = s.strstart;
          n = s.lookahead - (MIN_MATCH - 1);

          do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
          } while (--n);

          s.strstart = str;
          s.lookahead = MIN_MATCH - 1;
          fill_window(s);
        }

        s.strstart += s.lookahead;
        s.block_start = s.strstart;
        s.insert = s.lookahead;
        s.lookahead = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        strm.next_in = next;
        strm.input = input;
        strm.avail_in = avail;
        s.wrap = wrap;
        return Z_OK;
      }

      exports.deflateInit = deflateInit;
      exports.deflateInit2 = deflateInit2;
      exports.deflateReset = deflateReset;
      exports.deflateResetKeep = deflateResetKeep;
      exports.deflateSetHeader = deflateSetHeader;
      exports.deflate = deflate;
      exports.deflateEnd = deflateEnd;
      exports.deflateSetDictionary = deflateSetDictionary;
      exports.deflateInfo = 'pako deflate (from Nodeca project)';
      /* Not implemented
      exports.deflateBound = deflateBound;
      exports.deflateCopy = deflateCopy;
      exports.deflateParams = deflateParams;
      exports.deflatePending = deflatePending;
      exports.deflatePrime = deflatePrime;
      exports.deflateTune = deflateTune;
      */
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./messages": 51,
      "./trees": 52
    }],
    47: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function GZheader() {
        /* true if compressed data believed to be text */
        this.text = 0;
        /* modification time */

        this.time = 0;
        /* extra flags (not used when writing a gzip file) */

        this.xflags = 0;
        /* operating system */

        this.os = 0;
        /* pointer to extra field or Z_NULL if none */

        this.extra = null;
        /* extra field length (valid if extra != Z_NULL) */

        this.extra_len = 0; // Actually, we don't need it in JS,
        // but leave for few code modifications
        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //

        /* space at extra (only when reading header) */
        // this.extra_max  = 0;

        /* pointer to zero-terminated file name or Z_NULL */

        this.name = '';
        /* space at name (only when reading header) */
        // this.name_max   = 0;

        /* pointer to zero-terminated comment or Z_NULL */

        this.comment = '';
        /* space at comment (only when reading header) */
        // this.comm_max   = 0;

        /* true if there was or will be a header crc */

        this.hcrc = 0;
        /* true when done reading gzip header (not used when writing a gzip file) */

        this.done = false;
      }

      module.exports = GZheader;
    }, {}],
    48: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.
      // See state defs from inflate.js

      var BAD = 30;
      /* got a data error -- remain here until reset */

      var TYPE = 12;
      /* i: waiting for type bits, including last-flag bit */

      /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.
      
         Entry assumptions:
      
              state.mode === LEN
              strm.avail_in >= 6
              strm.avail_out >= 258
              start >= strm.avail_out
              state.bits < 8
      
         On return, state.mode is one of:
      
              LEN -- ran out of enough output space or enough available input
              TYPE -- reached end of block code, inflate() to interpret next block
              BAD -- error in block data
      
         Notes:
      
          - The maximum input bits used by a length/distance pair is 15 bits for the
            length code, 5 bits for the length extra, 15 bits for the distance code,
            and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
            Therefore if strm.avail_in >= 6, then there is enough input to avoid
            checking for available input while decoding.
      
          - The maximum bytes that a single length/distance pair can output is 258
            bytes, which is the maximum length that can be coded.  inflate_fast()
            requires strm.avail_out >= 258 for each loop to avoid checking for
            output space.
       */

      module.exports = function inflate_fast(strm, start) {
        var state;

        var _in;
        /* local strm.input */


        var last;
        /* have enough input while in < last */

        var _out;
        /* local strm.output */


        var beg;
        /* inflate()'s initial strm.output */

        var end;
        /* while out < end, enough space available */
        //#ifdef INFLATE_STRICT

        var dmax;
        /* maximum distance from zlib header */
        //#endif

        var wsize;
        /* window size or zero if not using window */

        var whave;
        /* valid bytes in the window */

        var wnext;
        /* window write index */
        // Use `s_window` instead `window`, avoid conflict with instrumentation tools

        var s_window;
        /* allocated sliding window, if wsize != 0 */

        var hold;
        /* local strm.hold */

        var bits;
        /* local strm.bits */

        var lcode;
        /* local strm.lencode */

        var dcode;
        /* local strm.distcode */

        var lmask;
        /* mask for first level of length codes */

        var dmask;
        /* mask for first level of distance codes */

        var here;
        /* retrieved table entry */

        var op;
        /* code bits, operation, extra bits, or */

        /*  window position, window bytes to copy */

        var len;
        /* match length, unused bytes */

        var dist;
        /* match distance */

        var from;
        /* where to copy match from */

        var from_source;
        var input, output; // JS specific, because we have no pointers

        /* copy state to local variables */

        state = strm.state; //here = state.here;

        _in = strm.next_in;
        input = strm.input;
        last = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257); //#ifdef INFLATE_STRICT

        dmax = state.dmax; //#endif

        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;
        /* decode literals and length/distances until end-of-block or not enough
           input data or output space */

        top: do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = lcode[hold & lmask];

          dolen: for (;;) {
            // Goto emulation
            op = here >>> 24
            /*here.bits*/
            ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff
            /*here.op*/
            ;

            if (op === 0) {
              /* literal */
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              output[_out++] = here & 0xffff
              /*here.val*/
              ;
            } else if (op & 16) {
              /* length base */
              len = here & 0xffff
              /*here.val*/
              ;
              op &= 15;
              /* number of extra bits */

              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }

                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              } //Tracevv((stderr, "inflate:         length %u\n", len));


              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }

              here = dcode[hold & dmask];

              dodist: for (;;) {
                // goto emulation
                op = here >>> 24
                /*here.bits*/
                ;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 0xff
                /*here.op*/
                ;

                if (op & 16) {
                  /* distance base */
                  dist = here & 0xffff
                  /*here.val*/
                  ;
                  op &= 15;
                  /* number of extra bits */

                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;

                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }

                  dist += hold & (1 << op) - 1; //#ifdef INFLATE_STRICT

                  if (dist > dmax) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  } //#endif


                  hold >>>= op;
                  bits -= op; //Tracevv((stderr, "inflate:         distance %u\n", dist));

                  op = _out - beg;
                  /* max distance in output */

                  if (dist > op) {
                    /* see if copy from window */
                    op = dist - op;
                    /* distance back in window */

                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break top;
                      } // (!) This block is disabled in zlib defailts,
                      // don't enable it for binary compatibility
                      //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                      //                if (len <= op - whave) {
                      //                  do {
                      //                    output[_out++] = 0;
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //                len -= op - whave;
                      //                do {
                      //                  output[_out++] = 0;
                      //                } while (--op > whave);
                      //                if (op === 0) {
                      //                  from = _out - dist;
                      //                  do {
                      //                    output[_out++] = output[from++];
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //#endif

                    }

                    from = 0; // window index

                    from_source = s_window;

                    if (wnext === 0) {
                      /* very common case */
                      from += wsize - op;

                      if (op < len) {
                        /* some from window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = _out - dist;
                        /* rest from output */

                        from_source = output;
                      }
                    } else if (wnext < op) {
                      /* wrap around window */
                      from += wsize + wnext - op;
                      op -= wnext;

                      if (op < len) {
                        /* some from end of window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = 0;

                        if (wnext < len) {
                          /* some from start of window */
                          op = wnext;
                          len -= op;

                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);

                          from = _out - dist;
                          /* rest from output */

                          from_source = output;
                        }
                      }
                    } else {
                      /* contiguous in window */
                      from += wnext - op;

                      if (op < len) {
                        /* some from window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = _out - dist;
                        /* rest from output */

                        from_source = output;
                      }
                    }

                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }

                    if (len) {
                      output[_out++] = from_source[from++];

                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    /* copy direct from output */

                    do {
                      /* minimum length is three */
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);

                    if (len) {
                      output[_out++] = output[from++];

                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  /* 2nd level distance code */
                  here = dcode[(here & 0xffff) + (
                  /*here.val*/
                  hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = 'invalid distance code';
                  state.mode = BAD;
                  break top;
                }

                break; // need to emulate goto via "continue"
              }
            } else if ((op & 64) === 0) {
              /* 2nd level length code */
              here = lcode[(here & 0xffff) + (
              /*here.val*/
              hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              /* end-of-block */
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } while (_in < last && _out < end);
        /* return unused bytes (on entry, bits < 8, so in won't go too far back) */


        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;
        /* update state and return */

        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };
    }, {}],
    49: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var adler32 = require('./adler32');

      var crc32 = require('./crc32');

      var inflate_fast = require('./inffast');

      var inflate_table = require('./inftrees');

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      /* Allowed flush values; see deflate() and inflate() below for details */
      //var Z_NO_FLUSH      = 0;
      //var Z_PARTIAL_FLUSH = 1;
      //var Z_SYNC_FLUSH    = 2;
      //var Z_FULL_FLUSH    = 3;

      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_TREES = 6;
      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */

      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_NEED_DICT = 2; //var Z_ERRNO         = -1;

      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_MEM_ERROR = -4;
      var Z_BUF_ERROR = -5; //var Z_VERSION_ERROR = -6;

      /* The deflate compression method */

      var Z_DEFLATED = 8;
      /* STATES ====================================================================*/

      /* ===========================================================================*/

      var HEAD = 1;
      /* i: waiting for magic header */

      var FLAGS = 2;
      /* i: waiting for method and flags (gzip) */

      var TIME = 3;
      /* i: waiting for modification time (gzip) */

      var OS = 4;
      /* i: waiting for extra flags and operating system (gzip) */

      var EXLEN = 5;
      /* i: waiting for extra length (gzip) */

      var EXTRA = 6;
      /* i: waiting for extra bytes (gzip) */

      var NAME = 7;
      /* i: waiting for end of file name (gzip) */

      var COMMENT = 8;
      /* i: waiting for end of comment (gzip) */

      var HCRC = 9;
      /* i: waiting for header crc (gzip) */

      var DICTID = 10;
      /* i: waiting for dictionary check value */

      var DICT = 11;
      /* waiting for inflateSetDictionary() call */

      var TYPE = 12;
      /* i: waiting for type bits, including last-flag bit */

      var TYPEDO = 13;
      /* i: same, but skip check to exit inflate on new block */

      var STORED = 14;
      /* i: waiting for stored size (length and complement) */

      var COPY_ = 15;
      /* i/o: same as COPY below, but only first time in */

      var COPY = 16;
      /* i/o: waiting for input or output to copy stored block */

      var TABLE = 17;
      /* i: waiting for dynamic block table lengths */

      var LENLENS = 18;
      /* i: waiting for code length code lengths */

      var CODELENS = 19;
      /* i: waiting for length/lit and distance code lengths */

      var LEN_ = 20;
      /* i: same as LEN below, but only first time in */

      var LEN = 21;
      /* i: waiting for length/lit/eob code */

      var LENEXT = 22;
      /* i: waiting for length extra bits */

      var DIST = 23;
      /* i: waiting for distance code */

      var DISTEXT = 24;
      /* i: waiting for distance extra bits */

      var MATCH = 25;
      /* o: waiting for output space to copy string */

      var LIT = 26;
      /* o: waiting for output space to write literal */

      var CHECK = 27;
      /* i: waiting for 32-bit check value */

      var LENGTH = 28;
      /* i: waiting for 32-bit length (gzip) */

      var DONE = 29;
      /* finished check, done -- remain here until reset */

      var BAD = 30;
      /* got a data error -- remain here until reset */

      var MEM = 31;
      /* got an inflate() memory error -- remain here until reset */

      var SYNC = 32;
      /* looking for synchronization bytes to restart inflate() */

      /* ===========================================================================*/

      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592; //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

      var MAX_WBITS = 15;
      /* 32K LZ77 window */

      var DEF_WBITS = MAX_WBITS;

      function zswap32(q) {
        return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
      }

      function InflateState() {
        this.mode = 0;
        /* current inflate mode */

        this.last = false;
        /* true if processing last block */

        this.wrap = 0;
        /* bit 0 true for zlib, bit 1 true for gzip */

        this.havedict = false;
        /* true if dictionary provided */

        this.flags = 0;
        /* gzip header method and flags (0 if zlib) */

        this.dmax = 0;
        /* zlib header max distance (INFLATE_STRICT) */

        this.check = 0;
        /* protected copy of check value */

        this.total = 0;
        /* protected copy of output count */
        // TODO: may be {}

        this.head = null;
        /* where to save gzip header information */

        /* sliding window */

        this.wbits = 0;
        /* log base 2 of requested window size */

        this.wsize = 0;
        /* window size or zero if not using window */

        this.whave = 0;
        /* valid bytes in the window */

        this.wnext = 0;
        /* window write index */

        this.window = null;
        /* allocated sliding window, if needed */

        /* bit accumulator */

        this.hold = 0;
        /* input bit accumulator */

        this.bits = 0;
        /* number of bits in "in" */

        /* for string and stored block copying */

        this.length = 0;
        /* literal or length of data to copy */

        this.offset = 0;
        /* distance back to copy string from */

        /* for table and code decoding */

        this.extra = 0;
        /* extra bits needed */

        /* fixed and dynamic code tables */

        this.lencode = null;
        /* starting table for length/literal codes */

        this.distcode = null;
        /* starting table for distance codes */

        this.lenbits = 0;
        /* index bits for lencode */

        this.distbits = 0;
        /* index bits for distcode */

        /* dynamic table building */

        this.ncode = 0;
        /* number of code length code lengths */

        this.nlen = 0;
        /* number of length code lengths */

        this.ndist = 0;
        /* number of distance code lengths */

        this.have = 0;
        /* number of code lengths in lens[] */

        this.next = null;
        /* next available space in codes[] */

        this.lens = new utils.Buf16(320);
        /* temporary storage for code lengths */

        this.work = new utils.Buf16(288);
        /* work area for code table building */

        /*
         because we don't have pointers in js, we use lencode and distcode directly
         as buffers so we don't need codes
        */
        //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */

        this.lendyn = null;
        /* dynamic table for length/literal codes (JS specific) */

        this.distdyn = null;
        /* dynamic table for distance codes (JS specific) */

        this.sane = 0;
        /* if false, allow invalid distance too far */

        this.back = 0;
        /* bits back of last unprocessed length/lit */

        this.was = 0;
        /* initial length of match */
      }

      function inflateResetKeep(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = '';
        /*Z_NULL*/

        if (state.wrap) {
          /* to support ill-conceived Java test suite */
          strm.adler = state.wrap & 1;
        }

        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.dmax = 32768;
        state.head = null
        /*Z_NULL*/
        ;
        state.hold = 0;
        state.bits = 0; //state.lencode = state.distcode = state.next = state.codes;

        state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
        state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
        state.sane = 1;
        state.back = -1; //Tracev((stderr, "inflate: reset\n"));

        return Z_OK;
      }

      function inflateReset(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);
      }

      function inflateReset2(strm, windowBits) {
        var wrap;
        var state;
        /* get the state */

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        /* extract wrap request from windowBits parameter */

        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else {
          wrap = (windowBits >> 4) + 1;

          if (windowBits < 48) {
            windowBits &= 15;
          }
        }
        /* set number of window bits, free window if different */


        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR;
        }

        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }
        /* update state and reset the rest of it */


        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      }

      function inflateInit2(strm, windowBits) {
        var ret;
        var state;

        if (!strm) {
          return Z_STREAM_ERROR;
        } //strm.msg = Z_NULL;                 /* in case we return an error */


        state = new InflateState(); //if (state === Z_NULL) return Z_MEM_ERROR;
        //Tracev((stderr, "inflate: allocated\n"));

        strm.state = state;
        state.window = null
        /*Z_NULL*/
        ;
        ret = inflateReset2(strm, windowBits);

        if (ret !== Z_OK) {
          strm.state = null
          /*Z_NULL*/
          ;
        }

        return ret;
      }

      function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      }
      /*
       Return state with length and distance decoding tables and index sizes set to
       fixed code decoding.  Normally this returns fixed tables from inffixed.h.
       If BUILDFIXED is defined, then instead this routine builds the tables the
       first time it's called, and returns those tables the first time and
       thereafter.  This reduces the size of the code by about 2K bytes, in
       exchange for a little execution time.  However, BUILDFIXED should not be
       used for threaded applications, since the rewriting of the tables and virgin
       may not be thread-safe.
       */


      var virgin = true;
      var lenfix, distfix; // We have no pointers in JS, so keep tables separate

      function fixedtables(state) {
        /* build fixed huffman tables if first call (may not be thread safe) */
        if (virgin) {
          var sym;
          lenfix = new utils.Buf32(512);
          distfix = new utils.Buf32(32);
          /* literal/length table */

          sym = 0;

          while (sym < 144) {
            state.lens[sym++] = 8;
          }

          while (sym < 256) {
            state.lens[sym++] = 9;
          }

          while (sym < 280) {
            state.lens[sym++] = 7;
          }

          while (sym < 288) {
            state.lens[sym++] = 8;
          }

          inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
          });
          /* distance table */

          sym = 0;

          while (sym < 32) {
            state.lens[sym++] = 5;
          }

          inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
          });
          /* do this just once */

          virgin = false;
        }

        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      }
      /*
       Update the window with the last wsize (normally 32K) bytes written before
       returning.  If window does not exist yet, create it.  This is only called
       when a window is already in use, or when output has been written during this
       inflate call, but the end of the deflate stream has not been reached yet.
       It is also called to create a window for dictionary data when a dictionary
       is loaded.
      
       Providing output buffers larger than 32K to inflate() should provide a speed
       advantage, since only the last 32K of output is copied to the sliding window
       upon return from inflate(), and since all distances after the first 32K of
       output will fall in the output data, making match copies simpler and faster.
       The advantage may be dependent on the size of the processor's data caches.
       */


      function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;
        /* if it hasn't been done already, allocate space for the window */

        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;
          state.window = new utils.Buf8(state.wsize);
        }
        /* copy state->wsize or less output bytes into the circular window */


        if (copy >= state.wsize) {
          utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else {
          dist = state.wsize - state.wnext;

          if (dist > copy) {
            dist = copy;
          } //zmemcpy(state->window + state->wnext, end - copy, dist);


          utils.arraySet(state.window, src, end - copy, dist, state.wnext);
          copy -= dist;

          if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else {
            state.wnext += dist;

            if (state.wnext === state.wsize) {
              state.wnext = 0;
            }

            if (state.whave < state.wsize) {
              state.whave += dist;
            }
          }
        }

        return 0;
      }

      function inflate(strm, flush) {
        var state;
        var input, output; // input/output buffers

        var next;
        /* next input INDEX */

        var put;
        /* next output INDEX */

        var have, left;
        /* available input and output */

        var hold;
        /* bit buffer */

        var bits;
        /* bits in bit buffer */

        var _in, _out;
        /* save starting available input and output */


        var copy;
        /* number of stored or match bytes to copy */

        var from;
        /* where to copy match bytes from */

        var from_source;
        var here = 0;
        /* current decoding table entry */

        var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
        //var last;                   /* parent table entry */

        var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)

        var len;
        /* length to copy for repeats, bits to drop */

        var ret;
        /* return code */

        var hbuf = new utils.Buf8(4);
        /* buffer for gzip header crc calculation */

        var opts;
        var n; // temporary var for NEED_BITS

        var order =
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

        if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;

        if (state.mode === TYPE) {
          state.mode = TYPEDO;
        }
        /* skip check */
        //--- LOAD() ---


        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits; //---

        _in = have;
        _out = left;
        ret = Z_OK;

        inf_leave: // goto emulation
        for (;;) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              } //=== NEEDBITS(16);


              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.wrap & 2 && hold === 0x8b1f) {
                /* gzip header */
                state.check = 0
                /*crc32(0L, Z_NULL, 0)*/
                ; //=== CRC2(state.check, hold);

                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
                //=== INITBITS();

                hold = 0;
                bits = 0; //===//

                state.mode = FLAGS;
                break;
              }

              state.flags = 0;
              /* expect zlib header */

              if (state.head) {
                state.head.done = false;
              }

              if (!(state.wrap & 1) ||
              /* check if zlib header allowed */
              (((hold & 0xff) <<
              /*BITS(8)*/
              8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
              }

              if ((hold & 0x0f) !==
              /*BITS(4)*/
              Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              } //--- DROPBITS(4) ---//


              hold >>>= 4;
              bits -= 4; //---//

              len = (hold & 0x0f) +
              /*BITS(4)*/
              8;

              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
              }

              state.dmax = 1 << len; //Tracev((stderr, "inflate:   zlib header ok\n"));

              strm.adler = state.check = 1
              /*adler32(0L, Z_NULL, 0)*/
              ;
              state.mode = hold & 0x200 ? DICTID : TYPE; //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              break;

            case FLAGS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.flags = hold;

              if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }

              if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
              }

              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }

              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = TIME;

            /* falls through */

            case TIME:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.head) {
                state.head.time = hold;
              }

              if (state.flags & 0x0200) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32(state.check, hbuf, 4, 0); //===
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = OS;

            /* falls through */

            case OS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
              }

              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = EXLEN;

            /* falls through */

            case EXLEN:
              if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.length = hold;

                if (state.head) {
                  state.head.extra_len = hold;
                }

                if (state.flags & 0x0200) {
                  //=== CRC2(state.check, hold);
                  hbuf[0] = hold & 0xff;
                  hbuf[1] = hold >>> 8 & 0xff;
                  state.check = crc32(state.check, hbuf, 2, 0); //===//
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
              } else if (state.head) {
                state.head.extra = null
                /*Z_NULL*/
                ;
              }

              state.mode = EXTRA;

            /* falls through */

            case EXTRA:
              if (state.flags & 0x0400) {
                copy = state.length;

                if (copy > have) {
                  copy = have;
                }

                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;

                    if (!state.head.extra) {
                      // Use untyped array for more conveniend processing later
                      state.head.extra = new Array(state.head.extra_len);
                    }

                    utils.arraySet(state.head.extra, input, next, // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len); //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                  }

                  if (state.flags & 0x0200) {
                    state.check = crc32(state.check, input, copy, next);
                  }

                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }

                if (state.length) {
                  break inf_leave;
                }
              }

              state.length = 0;
              state.mode = NAME;

            /* falls through */

            case NAME:
              if (state.flags & 0x0800) {
                if (have === 0) {
                  break inf_leave;
                }

                copy = 0;

                do {
                  // TODO: 2 or 1 bytes?
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */

                  if (state.head && len && state.length < 65536
                  /*state.head.name_max*/
                  ) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }

                have -= copy;
                next += copy;

                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }

              state.length = 0;
              state.mode = COMMENT;

            /* falls through */

            case COMMENT:
              if (state.flags & 0x1000) {
                if (have === 0) {
                  break inf_leave;
                }

                copy = 0;

                do {
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */

                  if (state.head && len && state.length < 65536
                  /*state.head.comm_max*/
                  ) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }

                have -= copy;
                next += copy;

                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }

              state.mode = HCRC;

            /* falls through */

            case HCRC:
              if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                if (hold !== (state.check & 0xffff)) {
                  strm.msg = 'header crc mismatch';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
              }

              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }

              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;

            case DICTID:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              strm.adler = state.check = zswap32(hold); //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              state.mode = DICT;

            /* falls through */

            case DICT:
              if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits; //---

                return Z_NEED_DICT;
              }

              strm.adler = state.check = 1
              /*adler32(0L, Z_NULL, 0)*/
              ;
              state.mode = TYPE;

            /* falls through */

            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case TYPEDO:
              if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7; //---//

                state.mode = CHECK;
                break;
              } //=== NEEDBITS(3); */


              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.last = hold & 0x01
              /*BITS(1)*/
              ; //--- DROPBITS(1) ---//

              hold >>>= 1;
              bits -= 1; //---//

              switch (hold & 0x03) {
                /*BITS(2)*/
                case 0:
                  /* stored block */
                  //Tracev((stderr, "inflate:     stored block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = STORED;
                  break;

                case 1:
                  /* fixed block */
                  fixedtables(state); //Tracev((stderr, "inflate:     fixed codes block%s\n",
                  //        state.last ? " (last)" : ""));

                  state.mode = LEN_;
                  /* decode codes */

                  if (flush === Z_TREES) {
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2; //---//

                    break inf_leave;
                  }

                  break;

                case 2:
                  /* dynamic block */
                  //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = TABLE;
                  break;

                case 3:
                  strm.msg = 'invalid block type';
                  state.mode = BAD;
              } //--- DROPBITS(2) ---//


              hold >>>= 2;
              bits -= 2; //---//

              break;

            case STORED:
              //--- BYTEBITS() ---// /* go to byte boundary */
              hold >>>= bits & 7;
              bits -= bits & 7; //---//
              //=== NEEDBITS(32); */

              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
              }

              state.length = hold & 0xffff; //Tracev((stderr, "inflate:       stored length %u\n",
              //        state.length));
              //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              state.mode = COPY_;

              if (flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case COPY_:
              state.mode = COPY;

            /* falls through */

            case COPY:
              copy = state.length;

              if (copy) {
                if (copy > have) {
                  copy = have;
                }

                if (copy > left) {
                  copy = left;
                }

                if (copy === 0) {
                  break inf_leave;
                } //--- zmemcpy(put, next, copy); ---


                utils.arraySet(output, input, next, copy, put); //---//

                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              } //Tracev((stderr, "inflate:       stored end\n"));


              state.mode = TYPE;
              break;

            case TABLE:
              //=== NEEDBITS(14); */
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.nlen = (hold & 0x1f) +
              /*BITS(5)*/
              257; //--- DROPBITS(5) ---//

              hold >>>= 5;
              bits -= 5; //---//

              state.ndist = (hold & 0x1f) +
              /*BITS(5)*/
              1; //--- DROPBITS(5) ---//

              hold >>>= 5;
              bits -= 5; //---//

              state.ncode = (hold & 0x0f) +
              /*BITS(4)*/
              4; //--- DROPBITS(4) ---//

              hold >>>= 4;
              bits -= 4; //---//
              //#ifndef PKZIP_BUG_WORKAROUND

              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
              } //#endif
              //Tracev((stderr, "inflate:       table sizes ok\n"));


              state.have = 0;
              state.mode = LENLENS;

            /* falls through */

            case LENLENS:
              while (state.have < state.ncode) {
                //=== NEEDBITS(3);
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//

                hold >>>= 3;
                bits -= 3; //---//
              }

              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              } // We have separate tables & no pointers. 2 commented lines below not needed.
              //state.next = state.codes;
              //state.lencode = state.next;
              // Switch to use dynamic table


              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = {
                bits: state.lenbits
              };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;

              if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
              } //Tracev((stderr, "inflate:       code lengths ok\n"));


              state.have = 0;
              state.mode = CODELENS;

            /* falls through */

            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (;;) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  /*BITS(state.lenbits)*/

                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                }

                if (here_val < 16) {
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits; //---//

                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    //=== NEEDBITS(here.bits + 2);
                    n = here_bits + 2;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    if (state.have === 0) {
                      strm.msg = 'invalid bit length repeat';
                      state.mode = BAD;
                      break;
                    }

                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 0x03); //BITS(2);
                    //--- DROPBITS(2) ---//

                    hold >>>= 2;
                    bits -= 2; //---//
                  } else if (here_val === 17) {
                    //=== NEEDBITS(here.bits + 3);
                    n = here_bits + 3;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    len = 0;
                    copy = 3 + (hold & 0x07); //BITS(3);
                    //--- DROPBITS(3) ---//

                    hold >>>= 3;
                    bits -= 3; //---//
                  } else {
                    //=== NEEDBITS(here.bits + 7);
                    n = here_bits + 7;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    len = 0;
                    copy = 11 + (hold & 0x7f); //BITS(7);
                    //--- DROPBITS(7) ---//

                    hold >>>= 7;
                    bits -= 7; //---//
                  }

                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }

                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              /* handle error breaks in while */


              if (state.mode === BAD) {
                break;
              }
              /* check for end-of-block code (better have one) */


              if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
              }
              /* build code tables -- note: do not change the lenbits or distbits
                 values here (9 and 6) without reading the comments in inftrees.h
                 concerning the ENOUGH constants, which depend on those values */


              state.lenbits = 9;
              opts = {
                bits: state.lenbits
              };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;

              state.lenbits = opts.bits; // state.lencode = state.next;

              if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
              }

              state.distbits = 6; //state.distcode.copy(state.codes);
              // Switch to use dynamic table

              state.distcode = state.distdyn;
              opts = {
                bits: state.distbits
              };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;

              state.distbits = opts.bits; // state.distcode = state.next;

              if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
              } //Tracev((stderr, 'inflate:       codes ok\n'));


              state.mode = LEN_;

              if (flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case LEN_:
              state.mode = LEN;

            /* falls through */

            case LEN:
              if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits; //---

                inflate_fast(strm, _out); //--- LOAD() ---

                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits; //---

                if (state.mode === TYPE) {
                  state.back = -1;
                }

                break;
              }

              state.back = 0;

              for (;;) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                /*BITS(state.lenbits)*/

                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                } //--- PULLBYTE() ---//


                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8; //---//
              }

              if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;

                for (;;) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
                  /*BITS(last.bits + last.op)*/
                  last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                } //--- DROPBITS(last.bits) ---//


                hold >>>= last_bits;
                bits -= last_bits; //---//

                state.back += last_bits;
              } //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.back += here_bits;
              state.length = here_val;

              if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
              }

              if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
              }

              if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
              }

              state.extra = here_op & 15;
              state.mode = LENEXT;

            /* falls through */

            case LENEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.length += hold & (1 << state.extra) - 1
                /*BITS(state.extra)*/
                ; //--- DROPBITS(state.extra) ---//

                hold >>>= state.extra;
                bits -= state.extra; //---//

                state.back += state.extra;
              } //Tracevv((stderr, "inflate:         length %u\n", state.length));


              state.was = state.length;
              state.mode = DIST;

            /* falls through */

            case DIST:
              for (;;) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                /*BITS(state.distbits)*/

                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                } //--- PULLBYTE() ---//


                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8; //---//
              }

              if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;

                for (;;) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
                  /*BITS(last.bits + last.op)*/
                  last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                } //--- DROPBITS(last.bits) ---//


                hold >>>= last_bits;
                bits -= last_bits; //---//

                state.back += last_bits;
              } //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.back += here_bits;

              if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
              }

              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;

            /* falls through */

            case DISTEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.offset += hold & (1 << state.extra) - 1
                /*BITS(state.extra)*/
                ; //--- DROPBITS(state.extra) ---//

                hold >>>= state.extra;
                bits -= state.extra; //---//

                state.back += state.extra;
              } //#ifdef INFLATE_STRICT


              if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              } //#endif
              //Tracevv((stderr, "inflate:         distance %u\n", state.offset));


              state.mode = MATCH;

            /* falls through */

            case MATCH:
              if (left === 0) {
                break inf_leave;
              }

              copy = _out - left;

              if (state.offset > copy) {
                /* copy from window */
                copy = state.offset - copy;

                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break;
                  } // (!) This block is disabled in zlib defailts,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //          Trace((stderr, "inflate.c too far\n"));
                  //          copy -= state.whave;
                  //          if (copy > state.length) { copy = state.length; }
                  //          if (copy > left) { copy = left; }
                  //          left -= copy;
                  //          state.length -= copy;
                  //          do {
                  //            output[put++] = 0;
                  //          } while (--copy);
                  //          if (state.length === 0) { state.mode = LEN; }
                  //          break;
                  //#endif

                }

                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }

                if (copy > state.length) {
                  copy = state.length;
                }

                from_source = state.window;
              } else {
                /* copy from output */
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }

              if (copy > left) {
                copy = left;
              }

              left -= copy;
              state.length -= copy;

              do {
                output[put++] = from_source[from++];
              } while (--copy);

              if (state.length === 0) {
                state.mode = LEN;
              }

              break;

            case LIT:
              if (left === 0) {
                break inf_leave;
              }

              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;

            case CHECK:
              if (state.wrap) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--; // Use '|' insdead of '+' to make sure that result is signed

                  hold |= input[next++] << bits;
                  bits += 8;
                } //===//


                _out -= left;
                strm.total_out += _out;
                state.total += _out;

                if (_out) {
                  strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }

                _out = left; // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too

                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = 'incorrect data check';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
                //Tracev((stderr, "inflate:   check matches trailer\n"));
              }

              state.mode = LENGTH;

            /* falls through */

            case LENGTH:
              if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                if (hold !== (state.total & 0xffffffff)) {
                  strm.msg = 'incorrect length check';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
                //Tracev((stderr, "inflate:   length matches trailer\n"));
              }

              state.mode = DONE;

            /* falls through */

            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;

            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;

            case MEM:
              return Z_MEM_ERROR;

            case SYNC:
            /* falls through */

            default:
              return Z_STREAM_ERROR;
          }
        } // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

        /*
           Return from inflate(), updating the total counts and the check value.
           If there was no progress during the inflate() call, return a buffer
           error.  Call updatewindow() to create and/or update the window state.
           Note: a memory error from inflate() is non-recoverable.
         */
        //--- RESTORE() ---


        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits; //---

        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
          }
        }

        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;

        if (state.wrap && _out) {
          strm.adler = state.check =
          /*UPDATE(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
        }

        strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);

        if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
          ret = Z_BUF_ERROR;
        }

        return ret;
      }

      function inflateEnd(strm) {
        if (!strm || !strm.state
        /*|| strm->zfree == (free_func)0*/
        ) {
            return Z_STREAM_ERROR;
          }

        var state = strm.state;

        if (state.window) {
          state.window = null;
        }

        strm.state = null;
        return Z_OK;
      }

      function inflateGetHeader(strm, head) {
        var state;
        /* check state */

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;

        if ((state.wrap & 2) === 0) {
          return Z_STREAM_ERROR;
        }
        /* save header structure */


        state.head = head;
        head.done = false;
        return Z_OK;
      }

      function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var state;
        var dictid;
        var ret;
        /* check state */

        if (!strm
        /* == Z_NULL */
        || !strm.state
        /* == Z_NULL */
        ) {
            return Z_STREAM_ERROR;
          }

        state = strm.state;

        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR;
        }
        /* check for correct dictionary identifier */


        if (state.mode === DICT) {
          dictid = 1;
          /* adler32(0, null, 0)*/

          /* dictid = adler32(dictid, dictionary, dictLength); */

          dictid = adler32(dictid, dictionary, dictLength, 0);

          if (dictid !== state.check) {
            return Z_DATA_ERROR;
          }
        }
        /* copy dictionary to window using updatewindow(), which will amend the
         existing dictionary if appropriate */


        ret = updatewindow(strm, dictionary, dictLength, dictLength);

        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }

        state.havedict = 1; // Tracev((stderr, "inflate:   dictionary set\n"));

        return Z_OK;
      }

      exports.inflateReset = inflateReset;
      exports.inflateReset2 = inflateReset2;
      exports.inflateResetKeep = inflateResetKeep;
      exports.inflateInit = inflateInit;
      exports.inflateInit2 = inflateInit2;
      exports.inflate = inflate;
      exports.inflateEnd = inflateEnd;
      exports.inflateGetHeader = inflateGetHeader;
      exports.inflateSetDictionary = inflateSetDictionary;
      exports.inflateInfo = 'pako inflate (from Nodeca project)';
      /* Not implemented
      exports.inflateCopy = inflateCopy;
      exports.inflateGetDictionary = inflateGetDictionary;
      exports.inflateMark = inflateMark;
      exports.inflatePrime = inflatePrime;
      exports.inflateSync = inflateSync;
      exports.inflateSyncPoint = inflateSyncPoint;
      exports.inflateUndermine = inflateUndermine;
      */
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./inffast": 48,
      "./inftrees": 50
    }],
    50: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var MAXBITS = 15;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592; //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      var lbase = [
      /* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
      var lext = [
      /* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
      var dbase = [
      /* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
      var dext = [
      /* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

      module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
        var bits = opts.bits; //here = opts.here; /* table entry for duplication */

        var len = 0;
        /* a code's length in bits */

        var sym = 0;
        /* index of code symbols */

        var min = 0,
            max = 0;
        /* minimum and maximum code lengths */

        var root = 0;
        /* number of index bits for root table */

        var curr = 0;
        /* number of index bits for current table */

        var drop = 0;
        /* code bits to drop for sub-table */

        var left = 0;
        /* number of prefix codes available */

        var used = 0;
        /* code entries in table used */

        var huff = 0;
        /* Huffman code */

        var incr;
        /* for incrementing code, index */

        var fill;
        /* index for replicating entries */

        var low;
        /* low bits for current root entry */

        var mask;
        /* mask for low root bits */

        var next;
        /* next available space in table */

        var base = null;
        /* base value table to use */

        var base_index = 0; //  var shoextra;    /* extra bits table to use */

        var end;
        /* use base and extra for symbol > end */

        var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */

        var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */

        var extra = null;
        var extra_index = 0;
        var here_bits, here_op, here_val;
        /*
         Process a set of code lengths to create a canonical Huffman code.  The
         code lengths are lens[0..codes-1].  Each length corresponds to the
         symbols 0..codes-1.  The Huffman code is generated by first sorting the
         symbols by length from short to long, and retaining the symbol order
         for codes with equal lengths.  Then the code starts with all zero bits
         for the first code of the shortest length, and the codes are integer
         increments for the same length, and zeros are appended as the length
         increases.  For the deflate format, these bits are stored backwards
         from their more natural integer increment ordering, and so when the
         decoding tables are built in the large loop below, the integer codes
         are incremented backwards.
          This routine assumes, but does not check, that all of the entries in
         lens[] are in the range 0..MAXBITS.  The caller must assure this.
         1..MAXBITS is interpreted as that code length.  zero means that that
         symbol does not occur in this code.
          The codes are sorted by computing a count of codes for each length,
         creating from that a table of starting indices for each length in the
         sorted table, and then entering the symbols in order in the sorted
         table.  The sorted table is work[], with that space being provided by
         the caller.
          The length counts are used for other purposes as well, i.e. finding
         the minimum and maximum length codes, determining if there are any
         codes at all, checking for a valid set of lengths, and looking ahead
         at length counts to determine sub-table sizes when building the
         decoding tables.
         */

        /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */

        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }

        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }
        /* bound code lengths, force root to be within code lengths */


        root = bits;

        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {
            break;
          }
        }

        if (root > max) {
          root = max;
        }

        if (max === 0) {
          /* no symbols to code at all */
          //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
          //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
          //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0; //table.op[opts.table_index] = 64;
          //table.bits[opts.table_index] = 1;
          //table.val[opts.table_index++] = 0;

          table[table_index++] = 1 << 24 | 64 << 16 | 0;
          opts.bits = 1;
          return 0;
          /* no symbols, but wait for decoding to report error */
        }

        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {
            break;
          }
        }

        if (root < min) {
          root = min;
        }
        /* check for an over-subscribed or incomplete set of lengths */


        left = 1;

        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];

          if (left < 0) {
            return -1;
          }
          /* over-subscribed */

        }

        if (left > 0 && (type === CODES || max !== 1)) {
          return -1;
          /* incomplete set */
        }
        /* generate offsets into symbol table for each length for sorting */


        offs[1] = 0;

        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }
        /* sort symbols by length, by symbol order within each length */


        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }
        /*
         Create and fill in decoding tables.  In this loop, the table being
         filled is at next and has curr index bits.  The code being used is huff
         with length len.  That code is converted to an index by dropping drop
         bits off of the bottom.  For codes where len is less than drop + curr,
         those top drop + curr - len bits are incremented through all values to
         fill the table with replicated entries.
          root is the number of index bits for the root table.  When len exceeds
         root, sub-tables are created pointed to by the root entry with an index
         of the low root bits of huff.  This is saved in low to check for when a
         new sub-table should be started.  drop is zero when the root table is
         being filled, and drop is root when sub-tables are being filled.
          When a new sub-table is needed, it is necessary to look ahead in the
         code lengths to determine what size sub-table is needed.  The length
         counts are used for this, and so count[] is decremented as codes are
         entered in the tables.
          used keeps track of how many table entries have been allocated from the
         provided *table space.  It is checked for LENS and DIST tables against
         the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
         the initial root table size constants.  See the comments in inftrees.h
         for more information.
          sym increments through all symbols, and the loop terminates when
         all codes of length max, i.e. all codes, have been processed.  This
         routine permits incomplete codes, so another loop after this one fills
         in the rest of the decoding tables with invalid code markers.
         */

        /* set up for code type */
        // poor man optimization - use if-else instead of switch,
        // to avoid deopts in old v8


        if (type === CODES) {
          base = extra = work;
          /* dummy value--not used */

          end = 19;
        } else if (type === LENS) {
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;
        } else {
          /* DISTS */
          base = dbase;
          extra = dext;
          end = -1;
        }
        /* initialize opts for loop */


        huff = 0;
        /* starting code */

        sym = 0;
        /* starting code symbol */

        len = min;
        /* starting code length */

        next = table_index;
        /* current table to fill in */

        curr = root;
        /* current table index bits */

        drop = 0;
        /* current bits to drop from code for index */

        low = -1;
        /* trigger new sub-table when len > root */

        used = 1 << root;
        /* use root table entries */

        mask = used - 1;
        /* mask for comparing low */

        /* check available table space */

        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        /* process all codes and make table entries */


        for (;;) {
          /* create table entry */
          here_bits = len - drop;

          if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
          } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
          } else {
            here_op = 32 + 64;
            /* end of block */

            here_val = 0;
          }
          /* replicate for those indices with low len bits equal to huff */


          incr = 1 << len - drop;
          fill = 1 << curr;
          min = fill;
          /* save offset to next table */

          do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill !== 0);
          /* backwards increment the len-bit code huff */


          incr = 1 << len - 1;

          while (huff & incr) {
            incr >>= 1;
          }

          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }
          /* go to next symbol, update count, len */


          sym++;

          if (--count[len] === 0) {
            if (len === max) {
              break;
            }

            len = lens[lens_index + work[sym]];
          }
          /* create new sub-table if needed */


          if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */
            if (drop === 0) {
              drop = root;
            }
            /* increment past last table */


            next += min;
            /* here min is 1 << curr */

            /* determine length of next table */

            curr = len - drop;
            left = 1 << curr;

            while (curr + drop < max) {
              left -= count[curr + drop];

              if (left <= 0) {
                break;
              }

              curr++;
              left <<= 1;
            }
            /* check for enough space */


            used += 1 << curr;

            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
              return 1;
            }
            /* point entry in root table to sub-table */


            low = huff & mask;
            /*table.op[low] = curr;
            table.bits[low] = root;
            table.val[low] = next - opts.table_index;*/

            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }
        /* fill in remaining table entry if code is incomplete (guaranteed to have
         at most one remaining entry, since if the code is incomplete, the
         maximum code length that was allowed to get this far is one bit) */


        if (huff !== 0) {
          //table.op[next + huff] = 64;            /* invalid code marker */
          //table.bits[next + huff] = len - drop;
          //table.val[next + huff] = 0;
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }
        /* set return parameters */
        //opts.table_index += used;


        opts.bits = root;
        return 0;
      };
    }, {
      "../utils/common": 41
    }],
    51: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {
        2: 'need dictionary',

        /* Z_NEED_DICT       2  */
        1: 'stream end',

        /* Z_STREAM_END      1  */
        0: '',

        /* Z_OK              0  */
        '-1': 'file error',

        /* Z_ERRNO         (-1) */
        '-2': 'stream error',

        /* Z_STREAM_ERROR  (-2) */
        '-3': 'data error',

        /* Z_DATA_ERROR    (-3) */
        '-4': 'insufficient memory',

        /* Z_MEM_ERROR     (-4) */
        '-5': 'buffer error',

        /* Z_BUF_ERROR     (-5) */
        '-6': 'incompatible version'
        /* Z_VERSION_ERROR (-6) */

      };
    }, {}],
    52: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');
      /* Public constants ==========================================================*/

      /* ===========================================================================*/
      //var Z_FILTERED          = 1;
      //var Z_HUFFMAN_ONLY      = 2;
      //var Z_RLE               = 3;


      var Z_FIXED = 4; //var Z_DEFAULT_STRATEGY  = 0;

      /* Possible values of the data_type field (though see inflate()) */

      var Z_BINARY = 0;
      var Z_TEXT = 1; //var Z_ASCII             = 1; // = Z_TEXT

      var Z_UNKNOWN = 2;
      /*============================================================================*/

      function zero(buf) {
        var len = buf.length;

        while (--len >= 0) {
          buf[len] = 0;
        }
      } // From zutil.h


      var STORED_BLOCK = 0;
      var STATIC_TREES = 1;
      var DYN_TREES = 2;
      /* The three kinds of block type */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      /* The minimum and maximum match lengths */
      // From deflate.h

      /* ===========================================================================
       * Internal compression state.
       */

      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS = 256;
      /* number of literal bytes 0..255 */

      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES = 30;
      /* number of distance codes */

      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */

      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var Buf_size = 16;
      /* size of bit buffer in bi_buf */

      /* ===========================================================================
       * Constants
       */

      var MAX_BL_BITS = 7;
      /* Bit length codes must not exceed MAX_BL_BITS bits */

      var END_BLOCK = 256;
      /* end of block literal code */

      var REP_3_6 = 16;
      /* repeat previous bit length 3-6 times (2 bits of repeat count) */

      var REPZ_3_10 = 17;
      /* repeat a zero length 3-10 times  (3 bits of repeat count) */

      var REPZ_11_138 = 18;
      /* repeat a zero length 11-138 times  (7 bits of repeat count) */

      /* eslint-disable comma-spacing,array-bracket-spacing */

      var extra_lbits =
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
      var extra_dbits =
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
      var extra_blbits =
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
      var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      /* eslint-enable comma-spacing,array-bracket-spacing */

      /* The lengths of the bit length codes are sent in order of decreasing
       * probability, to avoid transmitting the lengths for unused bit length codes.
       */

      /* ===========================================================================
       * Local data. These are initialized only once.
       */
      // We pre-fill arrays with 0 to avoid uninitialized gaps

      var DIST_CODE_LEN = 512;
      /* see definition of array dist_code below */
      // !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1

      var static_ltree = new Array((L_CODES + 2) * 2);
      zero(static_ltree);
      /* The static literal tree. Since the bit lengths are imposed, there is no
       * need for the L_CODES extra codes used during heap construction. However
       * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
       * below).
       */

      var static_dtree = new Array(D_CODES * 2);
      zero(static_dtree);
      /* The static distance tree. (Actually a trivial tree since all codes use
       * 5 bits.)
       */

      var _dist_code = new Array(DIST_CODE_LEN);

      zero(_dist_code);
      /* Distance codes. The first 256 values correspond to the distances
       * 3 .. 258, the last 256 values correspond to the top 8 bits of
       * the 15 bit distances.
       */

      var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);

      zero(_length_code);
      /* length code for each normalized match length (0 == MIN_MATCH) */

      var base_length = new Array(LENGTH_CODES);
      zero(base_length);
      /* First normalized length for each code (0 = MIN_MATCH) */

      var base_dist = new Array(D_CODES);
      zero(base_dist);
      /* First normalized distance for each code (0 = distance of 1) */

      function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
        this.static_tree = static_tree;
        /* static tree or NULL */

        this.extra_bits = extra_bits;
        /* extra bits for each code or NULL */

        this.extra_base = extra_base;
        /* base index for extra_bits */

        this.elems = elems;
        /* max number of elements in the tree */

        this.max_length = max_length;
        /* max bit length for the codes */
        // show if `static_tree` has data or dummy - needed for monomorphic objects

        this.has_stree = static_tree && static_tree.length;
      }

      var static_l_desc;
      var static_d_desc;
      var static_bl_desc;

      function TreeDesc(dyn_tree, stat_desc) {
        this.dyn_tree = dyn_tree;
        /* the dynamic tree */

        this.max_code = 0;
        /* largest code with non zero frequency */

        this.stat_desc = stat_desc;
        /* the corresponding static tree */
      }

      function d_code(dist) {
        return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
      }
      /* ===========================================================================
       * Output a short LSB first on the stream.
       * IN assertion: there is enough room in pendingBuf.
       */


      function put_short(s, w) {
        //    put_byte(s, (uch)((w) & 0xff));
        //    put_byte(s, (uch)((ush)(w) >> 8));
        s.pending_buf[s.pending++] = w & 0xff;
        s.pending_buf[s.pending++] = w >>> 8 & 0xff;
      }
      /* ===========================================================================
       * Send a value on a given number of bits.
       * IN assertion: length <= 16 and value fits in length bits.
       */


      function send_bits(s, value, length) {
        if (s.bi_valid > Buf_size - length) {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          put_short(s, s.bi_buf);
          s.bi_buf = value >> Buf_size - s.bi_valid;
          s.bi_valid += length - Buf_size;
        } else {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          s.bi_valid += length;
        }
      }

      function send_code(s, c, tree) {
        send_bits(s, tree[c * 2]
        /*.Code*/
        , tree[c * 2 + 1]
        /*.Len*/
        );
      }
      /* ===========================================================================
       * Reverse the first len bits of a code, using straightforward code (a faster
       * method would use a table)
       * IN assertion: 1 <= len <= 15
       */


      function bi_reverse(code, len) {
        var res = 0;

        do {
          res |= code & 1;
          code >>>= 1;
          res <<= 1;
        } while (--len > 0);

        return res >>> 1;
      }
      /* ===========================================================================
       * Flush the bit buffer, keeping at most 7 bits in it.
       */


      function bi_flush(s) {
        if (s.bi_valid === 16) {
          put_short(s, s.bi_buf);
          s.bi_buf = 0;
          s.bi_valid = 0;
        } else if (s.bi_valid >= 8) {
          s.pending_buf[s.pending++] = s.bi_buf & 0xff;
          s.bi_buf >>= 8;
          s.bi_valid -= 8;
        }
      }
      /* ===========================================================================
       * Compute the optimal bit lengths for a tree and update the total bit length
       * for the current block.
       * IN assertion: the fields freq and dad are set, heap[heap_max] and
       *    above are the tree nodes sorted by increasing frequency.
       * OUT assertions: the field len is set to the optimal bit length, the
       *     array bl_count contains the frequencies for each bit length.
       *     The length opt_len is updated; static_len is also updated if stree is
       *     not null.
       */


      function gen_bitlen(s, desc) //    deflate_state *s;
      //    tree_desc *desc;    /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var max_code = desc.max_code;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var extra = desc.stat_desc.extra_bits;
        var base = desc.stat_desc.extra_base;
        var max_length = desc.stat_desc.max_length;
        var h;
        /* heap index */

        var n, m;
        /* iterate over the tree elements */

        var bits;
        /* bit length */

        var xbits;
        /* extra bits */

        var f;
        /* frequency */

        var overflow = 0;
        /* number of elements with bit length too large */

        for (bits = 0; bits <= MAX_BITS; bits++) {
          s.bl_count[bits] = 0;
        }
        /* In a first pass, compute the optimal bit lengths (which may
         * overflow in the case of the bit length tree).
         */


        tree[s.heap[s.heap_max] * 2 + 1]
        /*.Len*/
        = 0;
        /* root of the heap */

        for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
          n = s.heap[h];
          bits = tree[tree[n * 2 + 1]
          /*.Dad*/
          * 2 + 1]
          /*.Len*/
          + 1;

          if (bits > max_length) {
            bits = max_length;
            overflow++;
          }

          tree[n * 2 + 1]
          /*.Len*/
          = bits;
          /* We overwrite tree[n].Dad which is no longer needed */

          if (n > max_code) {
            continue;
          }
          /* not a leaf node */


          s.bl_count[bits]++;
          xbits = 0;

          if (n >= base) {
            xbits = extra[n - base];
          }

          f = tree[n * 2]
          /*.Freq*/
          ;
          s.opt_len += f * (bits + xbits);

          if (has_stree) {
            s.static_len += f * (stree[n * 2 + 1]
            /*.Len*/
            + xbits);
          }
        }

        if (overflow === 0) {
          return;
        } // Trace((stderr,"\nbit length overflow\n"));

        /* This happens for example on obj2 and pic of the Calgary corpus */

        /* Find the first bit length which could increase: */


        do {
          bits = max_length - 1;

          while (s.bl_count[bits] === 0) {
            bits--;
          }

          s.bl_count[bits]--;
          /* move one leaf down the tree */

          s.bl_count[bits + 1] += 2;
          /* move one overflow item as its brother */

          s.bl_count[max_length]--;
          /* The brother of the overflow item also moves one step up,
           * but this does not affect bl_count[max_length]
           */

          overflow -= 2;
        } while (overflow > 0);
        /* Now recompute all bit lengths, scanning in increasing frequency.
         * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
         * lengths instead of fixing only the wrong ones. This idea is taken
         * from 'ar' written by Haruhiko Okumura.)
         */


        for (bits = max_length; bits !== 0; bits--) {
          n = s.bl_count[bits];

          while (n !== 0) {
            m = s.heap[--h];

            if (m > max_code) {
              continue;
            }

            if (tree[m * 2 + 1]
            /*.Len*/
            !== bits) {
              // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
              s.opt_len += (bits - tree[m * 2 + 1]
              /*.Len*/
              ) * tree[m * 2]
              /*.Freq*/
              ;
              tree[m * 2 + 1]
              /*.Len*/
              = bits;
            }

            n--;
          }
        }
      }
      /* ===========================================================================
       * Generate the codes for a given tree and bit counts (which need not be
       * optimal).
       * IN assertion: the array bl_count contains the bit length statistics for
       * the given tree and the field len is set for all tree elements.
       * OUT assertion: the field code is set for all tree elements of non
       *     zero code length.
       */


      function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
      //    int max_code;              /* largest code with non zero frequency */
      //    ushf *bl_count;            /* number of codes at each bit length */
      {
        var next_code = new Array(MAX_BITS + 1);
        /* next code value for each bit length */

        var code = 0;
        /* running code value */

        var bits;
        /* bit index */

        var n;
        /* code index */

        /* The distribution counts are first used to generate the code values
         * without bit reversal.
         */

        for (bits = 1; bits <= MAX_BITS; bits++) {
          next_code[bits] = code = code + bl_count[bits - 1] << 1;
        }
        /* Check that the bit counts in bl_count are consistent. The last code
         * must be all ones.
         */
        //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        //        "inconsistent bit counts");
        //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));


        for (n = 0; n <= max_code; n++) {
          var len = tree[n * 2 + 1]
          /*.Len*/
          ;

          if (len === 0) {
            continue;
          }
          /* Now reverse the bits */


          tree[n * 2]
          /*.Code*/
          = bi_reverse(next_code[len]++, len); //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
          //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
        }
      }
      /* ===========================================================================
       * Initialize the various 'constant' tables.
       */


      function tr_static_init() {
        var n;
        /* iterates over tree elements */

        var bits;
        /* bit counter */

        var length;
        /* length value */

        var code;
        /* code value */

        var dist;
        /* distance index */

        var bl_count = new Array(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */
        // do check in _tr_init()
        //if (static_init_done) return;

        /* For some embedded targets, global variables are not initialized: */

        /*#ifdef NO_INIT_GLOBAL_POINTERS
          static_l_desc.static_tree = static_ltree;
          static_l_desc.extra_bits = extra_lbits;
          static_d_desc.static_tree = static_dtree;
          static_d_desc.extra_bits = extra_dbits;
          static_bl_desc.extra_bits = extra_blbits;
        #endif*/

        /* Initialize the mapping length (0..255) -> length code (0..28) */

        length = 0;

        for (code = 0; code < LENGTH_CODES - 1; code++) {
          base_length[code] = length;

          for (n = 0; n < 1 << extra_lbits[code]; n++) {
            _length_code[length++] = code;
          }
        } //Assert (length == 256, "tr_static_init: length != 256");

        /* Note that the length 255 (match length 258) can be represented
         * in two different ways: code 284 + 5 bits or code 285, so we
         * overwrite length_code[255] to use the best encoding:
         */


        _length_code[length - 1] = code;
        /* Initialize the mapping dist (0..32K) -> dist code (0..29) */

        dist = 0;

        for (code = 0; code < 16; code++) {
          base_dist[code] = dist;

          for (n = 0; n < 1 << extra_dbits[code]; n++) {
            _dist_code[dist++] = code;
          }
        } //Assert (dist == 256, "tr_static_init: dist != 256");


        dist >>= 7;
        /* from now on, all distances are divided by 128 */

        for (; code < D_CODES; code++) {
          base_dist[code] = dist << 7;

          for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
            _dist_code[256 + dist++] = code;
          }
        } //Assert (dist == 256, "tr_static_init: 256+dist != 512");

        /* Construct the codes of the static literal tree */


        for (bits = 0; bits <= MAX_BITS; bits++) {
          bl_count[bits] = 0;
        }

        n = 0;

        while (n <= 143) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 8;
          n++;
          bl_count[8]++;
        }

        while (n <= 255) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 9;
          n++;
          bl_count[9]++;
        }

        while (n <= 279) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 7;
          n++;
          bl_count[7]++;
        }

        while (n <= 287) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 8;
          n++;
          bl_count[8]++;
        }
        /* Codes 286 and 287 do not exist, but we must include them in the
         * tree construction to get a canonical Huffman tree (longest code
         * all ones)
         */


        gen_codes(static_ltree, L_CODES + 1, bl_count);
        /* The static distance tree is trivial: */

        for (n = 0; n < D_CODES; n++) {
          static_dtree[n * 2 + 1]
          /*.Len*/
          = 5;
          static_dtree[n * 2]
          /*.Code*/
          = bi_reverse(n, 5);
        } // Now data ready and we can init static trees


        static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
        static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
        static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS); //static_init_done = true;
      }
      /* ===========================================================================
       * Initialize a new block.
       */


      function init_block(s) {
        var n;
        /* iterates over tree elements */

        /* Initialize the trees. */

        for (n = 0; n < L_CODES; n++) {
          s.dyn_ltree[n * 2]
          /*.Freq*/
          = 0;
        }

        for (n = 0; n < D_CODES; n++) {
          s.dyn_dtree[n * 2]
          /*.Freq*/
          = 0;
        }

        for (n = 0; n < BL_CODES; n++) {
          s.bl_tree[n * 2]
          /*.Freq*/
          = 0;
        }

        s.dyn_ltree[END_BLOCK * 2]
        /*.Freq*/
        = 1;
        s.opt_len = s.static_len = 0;
        s.last_lit = s.matches = 0;
      }
      /* ===========================================================================
       * Flush the bit buffer and align the output on a byte boundary
       */


      function bi_windup(s) {
        if (s.bi_valid > 8) {
          put_short(s, s.bi_buf);
        } else if (s.bi_valid > 0) {
          //put_byte(s, (Byte)s->bi_buf);
          s.pending_buf[s.pending++] = s.bi_buf;
        }

        s.bi_buf = 0;
        s.bi_valid = 0;
      }
      /* ===========================================================================
       * Copy a stored block, storing first the length and its
       * one's complement if requested.
       */


      function copy_block(s, buf, len, header) //DeflateState *s;
      //charf    *buf;    /* the input data */
      //unsigned len;     /* its length */
      //int      header;  /* true if block header must be written */
      {
        bi_windup(s);
        /* align on byte boundary */

        if (header) {
          put_short(s, len);
          put_short(s, ~len);
        } //  while (len--) {
        //    put_byte(s, *buf++);
        //  }


        utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
        s.pending += len;
      }
      /* ===========================================================================
       * Compares to subtrees, using the tree depth as tie breaker when
       * the subtrees have equal frequency. This minimizes the worst case length.
       */


      function smaller(tree, n, m, depth) {
        var _n2 = n * 2;

        var _m2 = m * 2;

        return tree[_n2]
        /*.Freq*/
        < tree[_m2]
        /*.Freq*/
        || tree[_n2]
        /*.Freq*/
        === tree[_m2]
        /*.Freq*/
        && depth[n] <= depth[m];
      }
      /* ===========================================================================
       * Restore the heap property by moving down the tree starting at node k,
       * exchanging a node with the smallest of its two sons if necessary, stopping
       * when the heap property is re-established (each father smaller than its
       * two sons).
       */


      function pqdownheap(s, tree, k) //    deflate_state *s;
      //    ct_data *tree;  /* the tree to restore */
      //    int k;               /* node to move down */
      {
        var v = s.heap[k];
        var j = k << 1;
        /* left son of k */

        while (j <= s.heap_len) {
          /* Set j to the smallest of the two sons: */
          if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
            j++;
          }
          /* Exit if v is smaller than both sons */


          if (smaller(tree, v, s.heap[j], s.depth)) {
            break;
          }
          /* Exchange v with the smallest son */


          s.heap[k] = s.heap[j];
          k = j;
          /* And continue down the tree, setting j to the left son of k */

          j <<= 1;
        }

        s.heap[k] = v;
      } // inlined manually
      // var SMALLEST = 1;

      /* ===========================================================================
       * Send the block data compressed using the given Huffman trees
       */


      function compress_block(s, ltree, dtree) //    deflate_state *s;
      //    const ct_data *ltree; /* literal tree */
      //    const ct_data *dtree; /* distance tree */
      {
        var dist;
        /* distance of matched string */

        var lc;
        /* match length or unmatched char (if dist == 0) */

        var lx = 0;
        /* running index in l_buf */

        var code;
        /* the code to send */

        var extra;
        /* number of extra bits to send */

        if (s.last_lit !== 0) {
          do {
            dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
            lc = s.pending_buf[s.l_buf + lx];
            lx++;

            if (dist === 0) {
              send_code(s, lc, ltree);
              /* send a literal byte */
              //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
            } else {
              /* Here, lc is the match length - MIN_MATCH */
              code = _length_code[lc];
              send_code(s, code + LITERALS + 1, ltree);
              /* send the length code */

              extra = extra_lbits[code];

              if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra);
                /* send the extra length bits */
              }

              dist--;
              /* dist is now the match distance - 1 */

              code = d_code(dist); //Assert (code < D_CODES, "bad d_code");

              send_code(s, code, dtree);
              /* send the distance code */

              extra = extra_dbits[code];

              if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra);
                /* send the extra distance bits */
              }
            }
            /* literal or match pair ? */

            /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
            //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
            //       "pendingBuf overflow");

          } while (lx < s.last_lit);
        }

        send_code(s, END_BLOCK, ltree);
      }
      /* ===========================================================================
       * Construct one Huffman tree and assigns the code bit strings and lengths.
       * Update the total bit length for the current block.
       * IN assertion: the field freq is set for all tree elements.
       * OUT assertions: the fields len and code are set to the optimal bit length
       *     and corresponding code. The length opt_len is updated; static_len is
       *     also updated if stree is not null. The field max_code is set.
       */


      function build_tree(s, desc) //    deflate_state *s;
      //    tree_desc *desc; /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var elems = desc.stat_desc.elems;
        var n, m;
        /* iterate over heap elements */

        var max_code = -1;
        /* largest code with non zero frequency */

        var node;
        /* new node being created */

        /* Construct the initial heap, with least frequent element in
         * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
         * heap[0] is not used.
         */

        s.heap_len = 0;
        s.heap_max = HEAP_SIZE;

        for (n = 0; n < elems; n++) {
          if (tree[n * 2]
          /*.Freq*/
          !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
          } else {
            tree[n * 2 + 1]
            /*.Len*/
            = 0;
          }
        }
        /* The pkzip format requires that at least one distance code exists,
         * and that at least one bit should be sent even if there is only one
         * possible code. So to avoid special checks later on we force at least
         * two codes of non zero frequency.
         */


        while (s.heap_len < 2) {
          node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
          tree[node * 2]
          /*.Freq*/
          = 1;
          s.depth[node] = 0;
          s.opt_len--;

          if (has_stree) {
            s.static_len -= stree[node * 2 + 1]
            /*.Len*/
            ;
          }
          /* node is 0 or 1 so it does not have extra bits */

        }

        desc.max_code = max_code;
        /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
         * establish sub-heaps of increasing lengths:
         */

        for (n = s.heap_len >> 1
        /*int /2*/
        ; n >= 1; n--) {
          pqdownheap(s, tree, n);
        }
        /* Construct the Huffman tree by repeatedly combining the least two
         * frequent nodes.
         */


        node = elems;
        /* next internal node of the tree */

        do {
          //pqremove(s, tree, n);  /* n = node of least frequency */

          /*** pqremove ***/
          n = s.heap[1
          /*SMALLEST*/
          ];
          s.heap[1
          /*SMALLEST*/
          ] = s.heap[s.heap_len--];
          pqdownheap(s, tree, 1
          /*SMALLEST*/
          );
          /***/

          m = s.heap[1
          /*SMALLEST*/
          ];
          /* m = node of next least frequency */

          s.heap[--s.heap_max] = n;
          /* keep the nodes sorted by frequency */

          s.heap[--s.heap_max] = m;
          /* Create a new node father of n and m */

          tree[node * 2]
          /*.Freq*/
          = tree[n * 2]
          /*.Freq*/
          + tree[m * 2]
          /*.Freq*/
          ;
          s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
          tree[n * 2 + 1]
          /*.Dad*/
          = tree[m * 2 + 1]
          /*.Dad*/
          = node;
          /* and insert the new node in the heap */

          s.heap[1
          /*SMALLEST*/
          ] = node++;
          pqdownheap(s, tree, 1
          /*SMALLEST*/
          );
        } while (s.heap_len >= 2);

        s.heap[--s.heap_max] = s.heap[1
        /*SMALLEST*/
        ];
        /* At this point, the fields freq and dad are set. We can now
         * generate the bit lengths.
         */

        gen_bitlen(s, desc);
        /* The field len is now set, we can generate the bit codes */

        gen_codes(tree, max_code, s.bl_count);
      }
      /* ===========================================================================
       * Scan a literal or distance tree to determine the frequencies of the codes
       * in the bit length tree.
       */


      function scan_tree(s, tree, max_code) //    deflate_state *s;
      //    ct_data *tree;   /* the tree to be scanned */
      //    int max_code;    /* and its largest code of non zero frequency */
      {
        var n;
        /* iterates over all tree elements */

        var prevlen = -1;
        /* last emitted length */

        var curlen;
        /* length of current code */

        var nextlen = tree[0 * 2 + 1]
        /*.Len*/
        ;
        /* length of next code */

        var count = 0;
        /* repeat count of the current code */

        var max_count = 7;
        /* max repeat count */

        var min_count = 4;
        /* min repeat count */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }

        tree[(max_code + 1) * 2 + 1]
        /*.Len*/
        = 0xffff;
        /* guard */

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1]
          /*.Len*/
          ;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            s.bl_tree[curlen * 2]
            /*.Freq*/
            += count;
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              s.bl_tree[curlen * 2] /*.Freq*/++;
            }

            s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
          } else if (count <= 10) {
            s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
          } else {
            s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
          }

          count = 0;
          prevlen = curlen;

          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      /* ===========================================================================
       * Send a literal or distance tree in compressed form, using the codes in
       * bl_tree.
       */


      function send_tree(s, tree, max_code) //    deflate_state *s;
      //    ct_data *tree; /* the tree to be scanned */
      //    int max_code;       /* and its largest code of non zero frequency */
      {
        var n;
        /* iterates over all tree elements */

        var prevlen = -1;
        /* last emitted length */

        var curlen;
        /* length of current code */

        var nextlen = tree[0 * 2 + 1]
        /*.Len*/
        ;
        /* length of next code */

        var count = 0;
        /* repeat count of the current code */

        var max_count = 7;
        /* max repeat count */

        var min_count = 4;
        /* min repeat count */

        /* tree[max_code+1].Len = -1; */

        /* guard already set */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1]
          /*.Len*/
          ;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            do {
              send_code(s, curlen, s.bl_tree);
            } while (--count !== 0);
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              send_code(s, curlen, s.bl_tree);
              count--;
            } //Assert(count >= 3 && count <= 6, " 3_6?");


            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
          } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
          } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
          }

          count = 0;
          prevlen = curlen;

          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      /* ===========================================================================
       * Construct the Huffman tree for the bit lengths and return the index in
       * bl_order of the last bit length code to send.
       */


      function build_bl_tree(s) {
        var max_blindex;
        /* index of last bit length code of non zero freq */

        /* Determine the bit length frequencies for literal and distance trees */

        scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
        scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
        /* Build the bit length tree: */

        build_tree(s, s.bl_desc);
        /* opt_len now includes the length of the tree representations, except
         * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
         */

        /* Determine the number of bit length codes to send. The pkzip format
         * requires that at least 4 bit length codes be sent. (appnote.txt says
         * 3 but the actual value used is 4.)
         */

        for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
          if (s.bl_tree[bl_order[max_blindex] * 2 + 1]
          /*.Len*/
          !== 0) {
            break;
          }
        }
        /* Update opt_len to include the bit length tree and counts */


        s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
        //        s->opt_len, s->static_len));

        return max_blindex;
      }
      /* ===========================================================================
       * Send the header for a block using dynamic Huffman trees: the counts, the
       * lengths of the bit length codes, the literal tree and the distance tree.
       * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
       */


      function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
      //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
      {
        var rank;
        /* index in bl_order */
        //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
        //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
        //        "too many codes");
        //Tracev((stderr, "\nbl counts: "));

        send_bits(s, lcodes - 257, 5);
        /* not +255 as stated in appnote.txt */

        send_bits(s, dcodes - 1, 5);
        send_bits(s, blcodes - 4, 4);
        /* not -3 as stated in appnote.txt */

        for (rank = 0; rank < blcodes; rank++) {
          //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
          send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]
          /*.Len*/
          , 3);
        } //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));


        send_tree(s, s.dyn_ltree, lcodes - 1);
        /* literal tree */
        //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_dtree, dcodes - 1);
        /* distance tree */
        //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
      }
      /* ===========================================================================
       * Check if the data type is TEXT or BINARY, using the following algorithm:
       * - TEXT if the two conditions below are satisfied:
       *    a) There are no non-portable control characters belonging to the
       *       "black list" (0..6, 14..25, 28..31).
       *    b) There is at least one printable character belonging to the
       *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
       * - BINARY otherwise.
       * - The following partially-portable control characters form a
       *   "gray list" that is ignored in this detection algorithm:
       *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
       * IN assertion: the fields Freq of dyn_ltree are set.
       */


      function detect_data_type(s) {
        /* black_mask is the bit mask of black-listed bytes
         * set bits 0..6, 14..25, and 28..31
         * 0xf3ffc07f = binary 11110011111111111100000001111111
         */
        var black_mask = 0xf3ffc07f;
        var n;
        /* Check for non-textual ("black-listed") bytes. */

        for (n = 0; n <= 31; n++, black_mask >>>= 1) {
          if (black_mask & 1 && s.dyn_ltree[n * 2]
          /*.Freq*/
          !== 0) {
            return Z_BINARY;
          }
        }
        /* Check for textual ("white-listed") bytes. */


        if (s.dyn_ltree[9 * 2]
        /*.Freq*/
        !== 0 || s.dyn_ltree[10 * 2]
        /*.Freq*/
        !== 0 || s.dyn_ltree[13 * 2]
        /*.Freq*/
        !== 0) {
          return Z_TEXT;
        }

        for (n = 32; n < LITERALS; n++) {
          if (s.dyn_ltree[n * 2]
          /*.Freq*/
          !== 0) {
            return Z_TEXT;
          }
        }
        /* There are no "black-listed" or "white-listed" bytes:
         * this stream either is empty or has tolerated ("gray-listed") bytes only.
         */


        return Z_BINARY;
      }

      var static_init_done = false;
      /* ===========================================================================
       * Initialize the tree data structures for a new zlib stream.
       */

      function _tr_init(s) {
        if (!static_init_done) {
          tr_static_init();
          static_init_done = true;
        }

        s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
        s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
        s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
        s.bi_buf = 0;
        s.bi_valid = 0;
        /* Initialize the first block of the first file: */

        init_block(s);
      }
      /* ===========================================================================
       * Send a stored block
       */


      function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
      //charf *buf;       /* input block */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
        /* send block type */

        copy_block(s, buf, stored_len, true);
        /* with header */
      }
      /* ===========================================================================
       * Send one empty static block to give enough lookahead for inflate.
       * This takes 10 bits, of which 7 may remain in the bit buffer.
       */


      function _tr_align(s) {
        send_bits(s, STATIC_TREES << 1, 3);
        send_code(s, END_BLOCK, static_ltree);
        bi_flush(s);
      }
      /* ===========================================================================
       * Determine the best encoding for the current block: dynamic trees, static
       * trees or store, and output the encoded block to the zip file.
       */


      function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
      //charf *buf;       /* input block, or NULL if too old */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        var opt_lenb, static_lenb;
        /* opt_len and static_len in bytes */

        var max_blindex = 0;
        /* index of last bit length code of non zero freq */

        /* Build the Huffman trees unless a stored block is forced */

        if (s.level > 0) {
          /* Check if the file is binary or text */
          if (s.strm.data_type === Z_UNKNOWN) {
            s.strm.data_type = detect_data_type(s);
          }
          /* Construct the literal and distance trees */


          build_tree(s, s.l_desc); // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          build_tree(s, s.d_desc); // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          /* At this point, opt_len and static_len are the total bit lengths of
           * the compressed block data, excluding the tree representations.
           */

          /* Build the bit length tree for the above two trees, and get the index
           * in bl_order of the last bit length code to send.
           */

          max_blindex = build_bl_tree(s);
          /* Determine the best encoding. Compute the block lengths in bytes. */

          opt_lenb = s.opt_len + 3 + 7 >>> 3;
          static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
          //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
          //        s->last_lit));

          if (static_lenb <= opt_lenb) {
            opt_lenb = static_lenb;
          }
        } else {
          // Assert(buf != (char*)0, "lost buf");
          opt_lenb = static_lenb = stored_len + 5;
          /* force a stored block */
        }

        if (stored_len + 4 <= opt_lenb && buf !== -1) {
          /* 4: two words for the lengths */

          /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
           * Otherwise we can't have processed more than WSIZE input bytes since
           * the last block flush, because compression would have been
           * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
           * transform a block into a stored block.
           */
          _tr_stored_block(s, buf, stored_len, last);
        } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
          send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
          compress_block(s, static_ltree, static_dtree);
        } else {
          send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
          send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
          compress_block(s, s.dyn_ltree, s.dyn_dtree);
        } // Assert (s->compressed_len == s->bits_sent, "bad compressed size");

        /* The above check is made mod 2^32, for files larger than 512 MB
         * and uLong implemented on 32 bits.
         */


        init_block(s);

        if (last) {
          bi_windup(s);
        } // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
        //       s->compressed_len-7*last));

      }
      /* ===========================================================================
       * Save the match info and tally the frequency counts. Return true if
       * the current block must be flushed.
       */


      function _tr_tally(s, dist, lc) //    deflate_state *s;
      //    unsigned dist;  /* distance of matched string */
      //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
      {
        //var out_length, in_length, dcode;
        s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
        s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
        s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
        s.last_lit++;

        if (dist === 0) {
          /* lc is the unmatched char */
          s.dyn_ltree[lc * 2] /*.Freq*/++;
        } else {
          s.matches++;
          /* Here, lc is the match length - MIN_MATCH */

          dist--;
          /* dist = match distance - 1 */
          //Assert((ush)dist < (ush)MAX_DIST(s) &&
          //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
          //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

          s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
          s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
        } // (!) This block is disabled in zlib defailts,
        // don't enable it for binary compatibility
        //#ifdef TRUNCATE_BLOCK
        //  /* Try to guess if it is profitable to stop the current block here */
        //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
        //    /* Compute an upper bound for the compressed length */
        //    out_length = s.last_lit*8;
        //    in_length = s.strstart - s.block_start;
        //
        //    for (dcode = 0; dcode < D_CODES; dcode++) {
        //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
        //    }
        //    out_length >>>= 3;
        //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
        //    //       s->last_lit, in_length, out_length,
        //    //       100L - out_length*100L/in_length));
        //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
        //      return true;
        //    }
        //  }
        //#endif


        return s.last_lit === s.lit_bufsize - 1;
        /* We avoid equality with lit_bufsize because of wraparound at 64K
         * on 16 bit machines and because stored blocks are restricted to
         * 64K-1 bytes.
         */
      }

      exports._tr_init = _tr_init;
      exports._tr_stored_block = _tr_stored_block;
      exports._tr_flush_block = _tr_flush_block;
      exports._tr_tally = _tr_tally;
      exports._tr_align = _tr_align;
    }, {
      "../utils/common": 41
    }],
    53: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function ZStream() {
        /* next input byte */
        this.input = null; // JS specific, because we have no pointers

        this.next_in = 0;
        /* number of bytes available at input */

        this.avail_in = 0;
        /* total number of input bytes read so far */

        this.total_in = 0;
        /* next output byte should be put there */

        this.output = null; // JS specific, because we have no pointers

        this.next_out = 0;
        /* remaining free space at output */

        this.avail_out = 0;
        /* total number of bytes output so far */

        this.total_out = 0;
        /* last error message, NULL if no error */

        this.msg = ''
        /*Z_NULL*/
        ;
        /* not visible by applications */

        this.state = null;
        /* best guess about the data type: binary or text */

        this.data_type = 2
        /*Z_UNKNOWN*/
        ;
        /* adler32 value of the uncompressed data */

        this.adler = 0;
      }

      module.exports = ZStream;
    }, {}],
    54: [function (require, module, exports) {
      'use strict';

      module.exports = typeof setImmediate === 'function' ? setImmediate : function setImmediate() {
        var args = [].slice.apply(arguments);
        args.splice(1, 0, 0);
        setTimeout.apply(null, args);
      };
    }, {}]
  }, {}, [10])(10);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 4:
/*!*********************************************************************************!*\
  !*** multi ./lib-for-link/src/admin-tools/article-download/article-download.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-for-link/src/admin-tools/article-download/article-download.js */"./lib-for-link/src/admin-tools/article-download/article-download.js");


/***/ })

/******/ });
//# sourceMappingURL=admin-tools.js.map