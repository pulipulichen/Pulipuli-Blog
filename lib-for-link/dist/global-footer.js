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

/***/ "./lib-for-link/src/global-footer/modules/blogger-feed-loader/comment-lib.js":
/*!***********************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/blogger-feed-loader/comment-lib.js ***!
  \***********************************************************************************/
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

    pHC.load = function (nodeID)
    {
        jQuery("#" + nodeID).html('<div id="' + pHC.divID + '"><h2>' + pHC.loading + '</h2></div>');
        //console.log('a')
        jQuery.getJSON("/feeds/comments/full?alt=json-in-script&callback=?", function (data) {
          //console.log('b')
          pHC.handleComments(data);
        });
        return pHC;
    };
    return pHC;
}

/***/ }),

/***/ "./lib-for-link/src/global-footer/modules/blogger-feed-loader/init.js":
/*!****************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/blogger-feed-loader/init.js ***!
  \****************************************************************************/
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

/***/ "./lib-for-link/src/global-footer/modules/blogger-feed-loader/recent-lib.js":
/*!**********************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/blogger-feed-loader/recent-lib.js ***!
  \**********************************************************************************/
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

    jQuery.getJSON("/feeds/posts/summary" + tagname + "/?alt=json-in-script&callback=?",
            function (data) {
              pHP.handlePosts(data);
            });
    return pHP;
  };
  return pHP;
};



/***/ }),

/***/ "./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css":
/*!**************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./gsc-search.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css");

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

/***/ "./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.js":
/*!*************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var initSearchInput = () => {
  $("#s.search_input").blur(function () {
    if (this.value.trim() === '') {
      this.value = this.defaultValue;
    }
  }).focus(function () {
    if (this.value === this.defaultValue) {
      this.value = ''
    }
  })
}

(function () {
  var cx = '017270649262638447003:o6vaq9on3vs';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
  
  $('#gsce_submit').click(() => {
    $('input.gsc-search-button').click()
  })
  
  initSearchInput()
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  
  var timer = setInterval(() => {
    if ($('#gsc-i-id1').length > 0) {
      $('#gsc-i-id1').attr('placeholder', 'Search')
      $('.navbar-inner .search-bar').addClass('visible')
      clearInterval(timer)
    }
  }, 500)
})();

/**
 * 幫search button做調整
 * @author Pulipuli Chen 20190228
 */
$(function () {
    $("#srch_btn").click(function () {
        $("#masthead input.gsc-search-button").click();
    });
});

var menu_search_submit = function (_form) {
    var _query = _form.q.value;
    ga("send", "event", "search", _query, 1);
    //console.log("送出GA事件 search");
    
    $("#masthead input.gsc-input").val(_query).attr('placeholder', '')
    $("#masthead input.gsc-search-button").click();
    return false;
};


/***/ }),

/***/ "./lib-for-link/src/global-footer/modules/puli-guest-book/init.js":
/*!************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/puli-guest-book/init.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 布丁式Blogger留言板
// @param {Object} config 設定
jQuery.puliGuestBook({
    blogID: "16607461",    //blog的ID
    postID: "113544406852218769",    //post的ID
    url: "/2005/12/blogger_113544406852218769.html",    //訂閱張貼意見的網址，或是文章ID:115667103250300740
    //css: "//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/puliGuestBook/puliGuestBook.css",    //CSS樣式表
    container: ".puliGuestBook",    //顯示留言的元素
    listNumber: 20,    //顯示留言數量。超過此數量時，會顯示「閱讀全部留言」的連結。
    adminName: '布丁布丁吃布丁',    //Blog主人的名字
    adminPhoto: '//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/',    //部落格主人的照片
    anonymous: '匿名',    //匿名者的名字
    readMore: '閱讀全部留言',    //閱讀全部留言連結的名稱
    write: '撰寫留言',    //撰寫留言連結的名稱
    reload: '重新讀取',    //重新讀取連結的名稱
    addLink: "/2005/12/blogger_113544406852218769.html#comment-editor" //撰寫留言的按鈕連結
});

/***/ }),

/***/ "./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css":
/*!************************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./puli-guest-book.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css");

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

/***/ "./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js":
/*!***********************************************************************************!*\
  !*** ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js ***!
  \***********************************************************************************/
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

      url = host + 'feeds/' + url + '/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli';
    }

    var needle = 'default';
    if (url.substring(url.length - needle.length, url.length) === needle) {
      url = url.substring(0, url.length - needle.length);
      url = url + 'full?alt=json-in-script&callback=handleGuestbookPulipuli';
    }
  } else {
    var host = getBaseLink();

    url = host + 'feeds/' + postID + '/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli';
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

  handleGuestbookPulipuli = function (json) {
    //document.getElementById("pulipuli_guestbook").innerHTML = '';
    container.html('');

    var temp = '<ul id="' + listID + '" class="guest-book-list">';
    var postshow = listNumber;
    var titlelen = '20';
    var layout = "<span class='date'>%Y%-%M%-%D%</span> <strong class='name'>%authorname%</strong>:<br /> %comment%";
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
    }
    var firstPost = null;
    for (var i = 0, post; post = sortentry[i]; i++)
    {
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
      //if (titlelen != "" && title.length > titlelen)
      //  title = title.substr(0, titlelen) + "...";
      var title_temp = "";
      for (var j = 0; j < title.length; j++)
      {
        var temp_char = title.substr(j, 1);
        if (temp_char === "<")
        {
          var temp_j = title.indexOf(">", j);
          if (temp_j !== -1)
            j = temp_j;
          continue;
        } else
          title_temp = title_temp + temp_char;
      }
      title = title_temp;
      var link = post.link[2].href;
      var title_link = fulltitle;
      var authorname = post.author[0].name.$t;
      if (authorname === 'Anonymous') {
        authorname = anonymous;
      }

      if (authorname === adminName && adminPhoto !== null) {
        authorname = '<img src="' + adminPhoto + '" class="admin-photo" border="0" /> '
                + authorname;
      }

      var uri = '';
      if (typeof (post.author[0].uri) !== 'undefined') {
        uri = post.author[0].uri.$t;
        authorname = '<a href="' + uri + '" target="_blank">' + authorname + '</a>';
      }

      var timestamp = post.published.$t.substr(0, 10);
      var y = timestamp.substr(0, 4);
      var m = timestamp.substr(5, 2);
      var d = timestamp.substr(8, 2);

      var layout_replace = layout.replace("%comment%", title_link).replace("%Y%", y).replace("%M%", m).replace("%D%", d).replace("%authorname%", authorname);

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
      //$.getScript('http://pulipuli.blogspot.com/feeds/1187506547871300947/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli');
    }

    if (post = sortentry[i])
    {
      link = add_link;

      temp += '<li class="guest-book-li readmore"><span class="item-title">'
              + '<a href="' + link + '#comments" target="guestbook_write">' + readMore + '</a>'
              + '</span></li>';
    }
    temp += "</ul>";



    temp += '<div class="guestbook-write">'
            //+ ' <a href="'+rss_link+'" style="float:right;margin-right:1em;font-size: 1.5em;line-height: 1em;">'
            //+ '<img src="http://3.bp.blogspot.com/_yr4MQB4zDus/Ru35yvgloDI/AAAAAAAABOQ/bbtw-pQhpOk/s200/rss.gif" border="0" />'
            //+ '<i class="fa fa-rss-square"></i>'
            //+ '</a>'

            + ' <a href="' + add_link + '" class="write" target="guestbook_write">' + write + '</a>'
            + ' <a class="write" onclick="' + reload_cmd + '">' + reload + '</a>'
            + '</div>';

    //document.getElementById("pulipuli_guestbook").innerHTML = temp;
    container.html(temp);
  };	//function handleGuestbookPulipuli(json) {

  //http://pulipuli.blogspot.com/feeds/113544406852218769/comments/full?alt=json-in-script&callback=handleGuestbookPulipuli
  //http://pulipuli.blogspot.com/feeds/6921201361608060798/comments/default 
  jQuery.ajax({
    url: url,
    dataType: 'script',
    cache: false
  });

};    //$.puliGuestBook = function (config) {



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".search-bar {\n  -moz-transition: .3s linear;\n  -webkit-transition: .3s ease-out;\n  transition: .3s linear;\n  float: right;\n  right: 0;\n  cursor: pointer;\n  background-image: url();\n  background-repeat: no-repeat;\n  padding: 0px 20px 23px;\n  background-size: 100px 100px;\n  top: 0;\n  z-index: 99999;\n  margin-top: -5px;\n\n  visibility: hidden;\n}\n\n.search-bar:hover {\n  -moz-transition: .01s linear;\n  -webkit-transition: .01s ease-out;\n  transition: .01s linear;\n  /*opacity: 1; */\n  background-image:none;\n}\n\n.nav-search {\n  width: auto;\n  height: 30px;\n  position: relative;\n  left: 0;\n  float: left;\n  line-height: 10px;\n  color: #fff !important;\n}\n\n.nav-search label {\n  display: none;\n}\n\n.nav-search input {\n  float: left;\n  /*width: 0;*/\n  background: none;\n  height: 30px;\n  line-height: 20px;\n  margin: 22px 0 0;\n  padding: 0 10px 0 0;\n  font-size: 15px;\n  /*color: #fff !important;*/\n  outline: 0;\n  border-radius: 0;\n  border: 0;\n  /*opacity: 1;*/\n  /*opacity: 1;*/\n  /*-webkit-transition: all .8s ease-in-out;\n  -moz-transition: all .8s ease-in-out;\n  -o-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n  -webkit-appearance: none;*/\n\n  width: 160px;\n  margin-left: 33px;\n  background: none;\n  border-bottom: 1px solid #f1f1f1;\n  opacity: 1;\n}\n\n/*\n.search-bar:hover .nav-search input {\n    width: 160px;\n    margin-left: 33px;\n    background: none;\n    border-bottom: 1px solid #f1f1f1;\n    opacity: 1;\n}\n*/\n/*\n.nav-search input::-webkit-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input::-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-ms-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input:focus {\n    color: #fff;\n}\n*/\n\n.nav-search .srch_btn {\n  height: 42px;\n  width: 23px;\n  margin-top: 0;\n  background: url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px center no-repeat;\n  text-indent: 9999px;\n  position: relative;\n}\n\n.search-bar.visible {\n  visibility: visible\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".puli-guest-book .admin-photo {\n  float:left;\n  margin-right: 5px;\n  width:20px; \n  height: 20px;\n  display:block;\n}\n\n.puli-guest-book .guest-book-list {\n  border: 3px solid #D2CBBD;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: #5B5743;\n  font-size:90%;\n\n  padding: 0;\n  margin: 0;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li {\n  background-image:none;\n  background-color: white !important;\n  margin: 0;\n  padding: 8px;\n  list-style:none;\n  clear:both;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li:hover {\n  padding-left: 5px;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li .date {\n  background-image:none !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n  list-style:none;\n  text-indent: 0px !important;\n  color: #5B5743 !important;\n  width: auto !important;\n  height: auto !important;\n\n\n  display: block;\n  float:right;\n  text-align: right;\n  color: #B4AF98;\n  font-size:70%;\n  margin: 0 !important;\n  margin-left: 10px !important;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.readmore {\n  text-align:center;\n  font-weight: bold;\n  border-top: 1px solid #5B5743;\n  background-color: white;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write {\n  text-align:center;\n  font-weight: bold;\n  padding: 10px 0;\n}\n\n.puli-guest-book .guestbook-write a.write {\n  color: #5B5743;\n  border: 1px solid #D2CBBD;\n  background-color:white;\n  padding: 5px;\n  margin: 5px;\n  text-decoration:none;\n  font-size:90%;\n  cursor:pointer;\n\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n\n.puli-guest-book .guestbook-write a.write:hover {\n  color: #5B5743;\n  border-color: #5B5743;\n}\n\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-0 {\n  background-color: #F6F3E0 !important;\n}\n.puli-guest-book .guest-book-list .guest-book-li.guest-book-li-1 {\n  background-color: white !important;\n}\n\n.puli-guest-book .guest-book-list strong.name a {\n  display: inline;\n}", ""]);



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

/***/ 1:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css ./lib-for-link/src/global-footer/modules/puli-guest-book/init.js ./lib-for-link/src/global-footer/modules/blogger-feed-loader/recent-lib.js ./lib-for-link/src/global-footer/modules/blogger-feed-loader/comment-lib.js ./lib-for-link/src/global-footer/modules/blogger-feed-loader/init.js ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js */"./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css */"./lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/puli-guest-book/init.js */"./lib-for-link/src/global-footer/modules/puli-guest-book/init.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/blogger-feed-loader/recent-lib.js */"./lib-for-link/src/global-footer/modules/blogger-feed-loader/recent-lib.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/blogger-feed-loader/comment-lib.js */"./lib-for-link/src/global-footer/modules/blogger-feed-loader/comment-lib.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/blogger-feed-loader/init.js */"./lib-for-link/src/global-footer/modules/blogger-feed-loader/init.js");
__webpack_require__(/*! ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css */"./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.css");
module.exports = __webpack_require__(/*! ./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.js */"./lib-for-link/src/global-footer/modules/gsc-search/gsc-search.js");


/***/ })

/******/ });
//# sourceMappingURL=global-footer.js.map