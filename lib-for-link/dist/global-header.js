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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/global-header/breeze-theme/breeze.js":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/breeze.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * var x=&quot;<data:post.title/>&quot;
 ,y=&quot;<data:post.url/>&quot;
 ,z=&quot;<data:post.author/>&quot;
 ,t=&quot;<data:post.timestamp/>&quot;
 ,u=&quot;<data:post.numComments/>&quot;;
 rm2(&quot;p<data:post.id/>&quot;,&quot;<data:post.url/>&quot;);
 */
var rm2 = function rm2(postId, postTitle, postUrl, postAuthor, postTimestamp, postNumComments) {
  //let postId = getBloggerPostsVariable('data-post-id')[0]
  //postUrl = postUrl + '#more'
  var _id = postId;

  var _labels = $("#lp" + postId).clone().show().html();

  var postElement = document.getElementById('p' + postId);

  if (!postElement) {
    return;
  }

  var imgtag = '';
  var ifrtag = '';
  var ifrsrc = '';
  var ifrtb = -1;
  var img = postElement.getElementsByTagName('img');
  var ifr = postElement.getElementsByTagName('iframe');

  for (var i = 0; i < ifr['length']; i++) {
    ifrsrc = ifr[i]['src'];

    if (ifrsrc['indexOf']('//www.youtube.com/embed/') != -1) {
      ifrtb = i;
      break;
    } else {
      if (ifrsrc['indexOf']('//player.vimeo.com/video/') != -1) {
        ifrtb = i;
        break;
      } else {
        if (ifrsrc['indexOf']('//www.dailymotion.com/embed/video/') != -1) {
          ifrtb = i;
          break;
        } else {
          if (ifrsrc['indexOf']('//w.soundcloud.com/player/') != -1) {
            ifrtb = i;
            break;
          }
        }
      }
    }
  }

  if (ifrtb !== -1) {
    ifrtag = '<div class="entry-video"><iframe width="840" height="472" src=""' + ifrsrc + '?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>'; //$(ifrtag).prependTo($(postElement))

    $(postElement).find('.entry-image').html(ifrtag);
  } else {
    /*
     if (img.length >= 1) {
     imgtag = '<div class="entry-image"><a href="'
     + postUrl
     + '"><img class="thumb" src="'
     + img[0]['src']
     + '" /></a></div>'
     } 
     else {
     imgtag = '<div class="entry-image no-image">'
     + '<a href="' + postUrl + '">'
     //+ '<img class="thumb" src="//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg" />'
     +'</a>' 
     + '</div>'
     }
     //console.log(imgtag)
     //$(imgtag).prependTo($(postElement))
     console.log(img[0]['src'])
     $(postElement).find('.entry-image .thumb').attr(img[0]['src'])
     */
    //let imageUrl = $(postElement).find('.entry-content img:first').parent().attr('href')
    var imageUrl = $(postElement).find('.entry-content img:first').attr('src'); //$(postElement).find('.entry-image .thumb').attr('src', imageUrl)

    if (imageUrl !== undefined) {
      $(postElement).find('.entry-image').css('background-image', 'url(' + imageUrl + ')');
    } else {
      $(postElement).find('.entry-image').hide();
    }
  }
  /*
   postElement['innerHTML'] = ifrtag
   + imgtag
   + '<div class="entry-container"><div class="entry-content"><div class="foundation"> '
   + '<div class="post-avatar"></div>'
   + ' <div class="avatar-name">' + postAuthor + '</div>'
   + '<div class="meta">'
   + '<p><small> <span class="post-timestamp">'
   + '<i class="fa fa-clock-o"></i>' + postTimestamp + '</span>' 
   
   + '<span class="comment-number"><i class="fa fa-comments"></i> '
   + '<a href="' + postUrl + '#comments-anchor">' + postNumComments + ' Comments</a>'
   + '</span>'
   + _labels
   + '</small></p>'
   //+ '<p><small>' + _labels  + '</small></p>'
   + '</div></div>'
   + '<h1 class="entry-title">'
   + ' <a href="' + postUrl + '">' + postTitle + ' </a> </h1> '
   + '<p>'
   //+ stripTags2(postElement.innerHTML, 60)
   //  .replace(/<\/p>(?!.*?<\/p>)/, ' <a class="more" href="' + postUrl + '">(more...)</a>' + '</p>')
   + postElement.innerHTML
   + ' <a class="more" href="' + postUrl + '">(more...)</a>' + '</p>';
   */
  //after_rm2(_id);

};

var stripTags2 = function stripTags2(a) {
  return a.replace(/<img[^>]*>/ig, '');
};

var after_rm2 = function after_rm2(_id) {
  var _img_div = jQuery("#" + _id + " div.entry-image:first"); //console.log(_img_div.length);


  var _img_src = _img_div.find('img.thumb:first').attr('src'); //console.log(_img_src)


  _img_div.css('background-image', 'url("' + _img_src + '")');

  _img_div.attr('data-bg-src', _img_src);
};

$(function () {
  // 好像真的不用做這些，我可以直接修改耶
  $('.post-variables').each(function (i, span) {
    var postVariables = $(span).find('.post-variable');
    rm2(postVariables.attr('data-post-id'), postVariables.attr('data-post-title'), postVariables.attr('data-post-url'), postVariables.attr('data-post-author'), postVariables.attr('data-post-timestamp'), postVariables.attr('data-post-numComments'));
  });
});

/***/ }),

/***/ "./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./font-awesome.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/font-awesome.css");

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

/***/ "./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css":
/*!********************************************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./googleapis-font-family-crete-round.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css");

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

/***/ "./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css":
/*!*************************************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./googleapis-font-family-lato.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css");

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

/***/ "./lib-for-link/src/global-header/btn-navbar/btn-navbar.js":
/*!*****************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/btn-navbar.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('#masthead .btn-navbar').click(function () {
    $('#masthead .nav-collapse').toggleClass('collapse');
  });

  var testOpen = function testOpen() {
    $('#masthead .btn-navbar').click();
  }; //testOpen()  

});

/***/ }),

/***/ "./lib-for-link/src/global-header/btn-navbar/btn-navbar.less":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./btn-navbar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less");

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

/***/ "./lib-for-link/src/global-header/btn-navbar/nav-collapse.less":
/*!*********************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./nav-collapse.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less");

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

/***/ "./lib-for-link/src/global-header/go-top/go-top.js":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/go-top/go-top.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//---------------------------------------
$('.go-top').click(function () {
  $('.st-content').animate({
    scrollTop: 0
  }, 'slow');
  $('html, body').animate({
    scrollTop: 0
  }, 'slow');
  return false;
});

/***/ }),

/***/ "./lib-for-link/src/global-header/go-top/go-top.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/go-top/go-top.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./go-top.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/default.css":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/default.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./default.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/gsc-search/default.css");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less":
/*!***********************************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-bar-placeholder.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less":
/*!***********************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-bar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-result.less":
/*!**************************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-result.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search.js":
/*!*****************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
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
*/
(function () {
  var cx = '017270649262638447003:o6vaq9on3vs';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s); //initSearchInput()

  /*
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  */

  $(function () {
    //console.log($('.gcse-placeholder').length)
    $('.gcse-placeholder').submit(function () {
      return menu_search_submit(this);
    });
    $('.srch_btn').click(function () {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder:first').submit();
    });
    $('.gcse-placeholder-dropdown').submit(function () {
      return menu_search_submit(this);
    });
    $('.srch_btn-dropdown').click(function () {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder-dropdown').submit();
    });

    var testSearch = function testSearch() {
      $('.gcse-placeholder:first input').val('test');
      setTimeout(function () {
        $('.gcse-placeholder:first').submit();
      }, 1000);
    }; //testSearch()


    var testSearchDropdown = function testSearchDropdown() {
      $('.gcse-placeholder-dropdown input').val('test');
      setTimeout(function () {
        $('.gcse-placeholder-dropdown').submit();
      }, 1000);
    }; //testSearchDropdown()

  });
  /*
  var timer = setInterval(() => {
    if ($('#gsc-i-id1').length > 0) {
      $('#gsc-i-id1').attr('placeholder', 'Search')
      $('.navbar-inner .search-bar').addClass('visible')
      clearInterval(timer)
    }
  }, 500)
  */
})();
/**
 * 幫search button做調整
 * @author Pulipuli Chen 20190228
 */

/*
$(function () {
    $("#srch_btn").click(function () {
        $("#masthead input.gsc-search-button").click();
    });
});
*/


var menu_search_submit = function menu_search_submit(_form) {
  var _query;

  if (typeof _form['q'] !== "undefined") {
    _query = _form.q.value;
  } else if (typeof _form['search'] !== "undefined") {
    _query = _form.search.value;
  } else {
    //console.log('找不到')
    return false;
  }

  _query = _query.trim();

  if (_query === '') {
    return false;
  }

  ga("send", "event", "search", _query, 1); //console.log("送出GA事件 search");

  $(".gcse input.gsc-input").val(_query);
  $(".gcse .gsc-search-button").click(); //console.log(['query', _query])

  return false;
};

/***/ }),

/***/ "./lib-for-link/src/global-header/masthead/masthead.js":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/global-header/masthead/masthead.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// -------------------
$(function ($) {
  var aboveHeight = $('#leader-wrapper').outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() > aboveHeight) {
      $('body').addClass('fixed-nav');
      $('#masthead').addClass('fixed-nav'); //.next().css('padding-top', '5px');
    } else {
      $('body').removeClass('fixed-nav');
      $('#masthead').removeClass('fixed-nav'); //.next().css('padding-top', '0');
    }
  });
});

/***/ }),

/***/ "./lib-for-link/src/global-header/masthead/masthead.less":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/global-header/masthead/masthead.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./masthead.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less");

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

/***/ "./lib-for-link/src/global-header/modules/lscache/lscache.js":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/global-header/modules/lscache/lscache.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint undef:true, browser:true, node:true */

/* global define */
(function (root, factory) {
  /*
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], factory);
  } else if (typeof module !== "undefined" && module.exports) {
      // CommonJS/Node module
      module.exports = factory();
  } else {
      // Browser globals
      root.lscache = factory();
  }
  */
  lscache = factory();
})(this, function () {
  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-'; // Suffix for the key name on the expiration items in localStorage

  var CACHE_SUFFIX = '-cacheexpiration'; // expiration date radix (set to Base-36 for most space savings)

  var EXPIRY_RADIX = 10; // time resolution in milliseconds

  var expiryMilliseconds = 60 * 1000; // ECMAScript max Date (epoch + 1e8 days)

  var maxDate = calculateMaxDate(expiryMilliseconds);
  var cachedStorage;
  var cachedJSON;
  var cacheBucket = '';
  var warnings = false; // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.

  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    } // some browsers will throw an error if you try to access local storage (e.g. brave browser)
    // hence check is inside a try/catch


    try {
      if (!localStorage) {
        return false;
      }
    } catch (ex) {
      return false;
    }

    try {
      setItem(key, value);
      removeItem(key);
      cachedStorage = true;
    } catch (e) {
      // If we hit the limit, and we don't have an empty localStorage then it means we have support
      if (isOutOfSpace(e) && localStorage.length) {
        cachedStorage = true; // just maxed it out and even the set test failed.
      } else {
        cachedStorage = false;
      }
    }

    return cachedStorage;
  } // Check to set if the error is us dealing with being out of space


  function isOutOfSpace(e) {
    return e && (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.name === 'QuotaExceededError');
  } // Determines if native JSON (de-)serialization is supported in the browser.


  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = window.JSON != null;
    }

    return cachedJSON;
  }
  /**
   * Returns a string where all RegExp special characters are escaped with a \.
   * @param {String} text
   * @return {string}
   */


  function escapeRegExpSpecialCharacters(text) {
    return text.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
  }
  /**
   * Returns the full string for the localStorage expiration item.
   * @param {String} key
   * @return {string}
   */


  function expirationKey(key) {
    return key + CACHE_SUFFIX;
  }
  /**
   * Returns the number of minutes since the epoch.
   * @return {number}
   */


  function currentTime() {
    return Math.floor(new Date().getTime() / expiryMilliseconds);
  }
  /**
   * Wrapper functions for localStorage methods
   */


  function getItem(key) {
    return localStorage.getItem(CACHE_PREFIX + cacheBucket + key);
  }

  function setItem(key, value) {
    // Fix for iPad issue - sometimes throws QUOTA_EXCEEDED_ERR on setItem.
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
    localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
  }

  function eachKey(fn) {
    var prefixRegExp = new RegExp('^' + CACHE_PREFIX + escapeRegExpSpecialCharacters(cacheBucket) + '(.*)'); // Loop in reverse as removing items will change indices of tail

    for (var i = localStorage.length - 1; i >= 0; --i) {
      var key = localStorage.key(i);
      key = key && key.match(prefixRegExp);
      key = key && key[1];

      if (key && key.indexOf(CACHE_SUFFIX) < 0) {
        fn(key, expirationKey(key));
      }
    }
  }

  function flushItem(key) {
    var exprKey = expirationKey(key);
    removeItem(key);
    removeItem(exprKey);
  }

  function flushExpiredItem(key) {
    var exprKey = expirationKey(key);
    var expr = getItem(exprKey);

    if (expr) {
      var expirationTime = parseInt(expr, EXPIRY_RADIX); // Check if we should actually kick item out of storage

      if (currentTime() >= expirationTime) {
        removeItem(key);
        removeItem(exprKey);
        return true;
      }
    }
  }

  function warn(message, err) {
    if (!warnings) return;
    if (!('console' in window) || typeof window.console.warn !== 'function') return;
    window.console.warn("lscache - " + message);
    if (err) window.console.warn("lscache - The error was: " + err.message);
  }

  function calculateMaxDate(expiryMilliseconds) {
    return Math.floor(8.64e15 / expiryMilliseconds);
  }

  var lscache = {
    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     * @return true if the value was inserted successfully
     */
    set: function set(key, value, time) {
      if (!supportsStorage()) return false; // If we don't get a string value, try to stringify
      // In future, localStorage may properly support storing non-strings
      // and this can be removed.

      if (!supportsJSON()) return false;

      try {
        value = JSON.stringify(value);
      } catch (e) {
        // Sometimes we can't stringify due to circular refs
        // in complex objects, so we won't bother storing then.
        return false;
      }

      try {
        setItem(key, value);
      } catch (e) {
        if (isOutOfSpace(e)) {
          // If we exceeded the quota, then we will sort
          // by the expire time, and then remove the N oldest
          var storedKeys = [];
          var storedKey;
          eachKey(function (key, exprKey) {
            var expiration = getItem(exprKey);

            if (expiration) {
              expiration = parseInt(expiration, EXPIRY_RADIX);
            } else {
              // TODO: Store date added for non-expiring items for smarter removal
              expiration = maxDate;
            }

            storedKeys.push({
              key: key,
              size: (getItem(key) || '').length,
              expiration: expiration
            });
          }); // Sorts the keys with oldest expiration time last

          storedKeys.sort(function (a, b) {
            return b.expiration - a.expiration;
          });
          var targetSize = (value || '').length;

          while (storedKeys.length && targetSize > 0) {
            storedKey = storedKeys.pop();
            warn("Cache is full, removing item with key '" + key + "'");
            flushItem(storedKey.key);
            targetSize -= storedKey.size;
          }

          try {
            setItem(key, value);
          } catch (e) {
            // value may be larger than total quota
            warn("Could not add item with key '" + key + "', perhaps it's too big?", e);
            return false;
          }
        } else {
          // If it was some other error, just give up.
          warn("Could not add item with key '" + key + "'", e);
          return false;
        }
      } // If a time is specified, store expiration info in localStorage


      if (time) {
        setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
      } else {
        // In case they previously set a time, remove that info from localStorage.
        removeItem(expirationKey(key));
      }

      return true;
    },

    /**
     * Retrieves specified value from localStorage, if not expired.
     * @param {string} key
     * @return {string|Object}
     */
    get: function get(key) {
      if (!supportsStorage()) return null; // Return the de-serialized item if not expired

      if (flushExpiredItem(key)) {
        return null;
      } // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.


      var value = getItem(key);

      if (!value || !supportsJSON()) {
        return value;
      }

      try {
        // We can't tell if its JSON or a string, so we try to parse
        return JSON.parse(value);
      } catch (e) {
        // If we can't parse, it's probably because it isn't an object
        return value;
      }
    },

    /**
     * Removes a value from localStorage.
     * Equivalent to 'delete' in memcache, but that's a keyword in JS.
     * @param {string} key
     */
    remove: function remove(key) {
      if (!supportsStorage()) return;
      flushItem(key);
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function supported() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function flush() {
      if (!supportsStorage()) return;
      eachKey(function (key) {
        flushItem(key);
      });
    },

    /**
     * Flushes expired lscache items and expiry markers without affecting rest of localStorage
     */
    flushExpired: function flushExpired() {
      if (!supportsStorage()) return;
      eachKey(function (key) {
        flushExpiredItem(key);
      });
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     * @param {string} bucket
     */
    setBucket: function setBucket(bucket) {
      cacheBucket = bucket;
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function resetBucket() {
      cacheBucket = '';
    },

    /**
     * @returns {number} The currently set number of milliseconds each time unit represents in
     *   the set() function's "time" argument.
     */
    getExpiryMilliseconds: function getExpiryMilliseconds() {
      return expiryMilliseconds;
    },

    /**
     * Sets the number of milliseconds each time unit represents in the set() function's
     *   "time" argument.
     * Sample values:
     *  1: each time unit = 1 millisecond
     *  1000: each time unit = 1 second
     *  60000: each time unit = 1 minute (Default value)
     *  360000: each time unit = 1 hour
     * @param {number} milliseconds
     */
    setExpiryMilliseconds: function setExpiryMilliseconds(milliseconds) {
      expiryMilliseconds = milliseconds;
      maxDate = calculateMaxDate(expiryMilliseconds);
    },

    /**
     * Sets whether to display warnings when an item is removed from the cache or not.
     */
    enableWarnings: function enableWarnings(enabled) {
      warnings = enabled;
    }
  }; // Return the module

  return lscache;
});

/***/ }),

/***/ "./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js":
/*!*************************************************************************!*\
  !*** ./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

lscacheHelper = {
  expiredMinute: 60 * 24,
  getJSONLock: false,
  getJSON: function getJSON(url, callback, expiredMinute) {
    var _this = this;

    if (this.getJSONLock === true) {
      setTimeout(function () {
        _this.getJSON(url, callback, expiredMinute);
      }, 500);
      return;
    }

    if (typeof expiredMinute !== 'number') {
      expiredMinute = this.expiredMinute;
    }

    var getHeader = 'getHeader-';
    var lscacheKey = getHeader + url; //console.log(lscacheKey)

    var data = lscache.get(lscacheKey);

    if (data !== null) {
      if (typeof callback === 'function') {
        //console.log('lscached: ' + url)
        callback(data);
      }

      return;
    } else {
      /*
      if (url.indexOf('callback=?') > -1) {
        url = url.split('callback=?').join('callback=a')
      }
      */
      this.getJSONLock = true;
      $.getJSON(url, function (data) {
        _this.getJSONLock = false; //if (data.indexOf('a(') > -1) {
        //  data = data.slice(data.indexOf('a(') + 2, data.length - 2)
        //}

        lscache.set(lscacheKey, data, expiredMinute);

        if (typeof callback === 'function') {
          callback(data);
        }
      });
    }
  }
};

/***/ }),

/***/ "./lib-for-link/src/global-header/script/back-button.js":
/*!**************************************************************!*\
  !*** ./lib-for-link/src/global-header/script/back-button.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ----------------------------------
// 20160522 回到上一頁的功能：如果上一頁不是布丁布丁吃什麼，那就隱藏
var _header_back_button_click = function _header_back_button_click() {
  var _back_type = "back";

  if (typeof document.referrer !== "string") {
    _back_type = "index";
  } else {
    var _needle = ["http://blog.pulipuli.info/", "http://pulipuli.info/", "http://pulipuli.blogspot.com/", "http://pulipuli.blogspot.tw/"];
    var _result = false;

    for (var _i = 0; _i < _needle.length; _i++) {
      var _n = _needle[_i];

      if (document.referrer.substr(0, _n.length) === _n) {
        _result = true;
        break;
      }
    }

    if (_result === false) {
      _back_type = "index";
    }
  }

  if (_back_type === "back") {
    if (history.back() === undefined) {
      location.href = "/";
    }
  } else {
    location.href = "/";
  }
};

$(function () {
  $('#masthead header .back-button').click(_header_back_button_click);
});

/***/ }),

/***/ "./lib-for-link/src/global-header/script/env-variables.js":
/*!****************************************************************!*\
  !*** ./lib-for-link/src/global-header/script/env-variables.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Pulipuli Chen 20190301 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerVariable = function getBloggerVariable(key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key;
  }

  var valueProcess = function valueProcess(value) {
    if (value === undefined) {
      return;
    } else if (value === 'null') {
      return null;
    } else if (value.startsWith('{') && value.endsWith('}')) {
      try {
        value = JSON.parse(value);
      } catch (e) {}

      return value;
    } else {
      return value;
    }
  };

  var ele;

  if (key.startsWith('data-blog-')) {
    ele = $('.blog-variables');
  } else if (key.startsWith('data-post-')) {
    ele = $('.post-variable');
  } else if (key.startsWith('data-label-')) {
    ele = $('.label-variable');
  }

  if (ele.length === 1 && !key.startsWith('data-label-')) {
    var value = ele.attr(key);
    value = valueProcess(value);
    return value;
  } else {
    var output = [];
    ele.each(function (i, item) {
      var value = $(item).attr(key); //console.log([key, value])

      value = valueProcess(value);
      output.push(value);
    });
    return output;
  }
};
/**
 * @author Pulipuli Chen 20190307 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */


getBloggerPostsVariable = function getBloggerPostsVariable(key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key;
  }

  var valueProcess = function valueProcess(value) {
    if (value === undefined) {
      return;
    } else if (value === 'null') {
      return null;
    } else if (value.startsWith('{') && value.endsWith('}')) {
      try {
        value = JSON.parse(value);
      } catch (e) {}

      return value;
    } else {
      return value;
    }
  };

  var output = [];
  $('.post-variables').each(function (i, postVariables) {
    var ele;

    if (key.startsWith('data-post-')) {
      ele = $(postVariables).find('.post-variable');
    } else if (key.startsWith('data-label-')) {
      ele = $(postVariables).find('.label-variable');
    }

    if (ele.length === 1 && !key.startsWith('data-label-')) {
      var value = ele.attr(key);
      value = valueProcess(value);
      output.push(value); //return value
    } else {
      var postOutput = [];
      ele.each(function (i, item) {
        var value = $(item).attr(key); //console.log([key, value])

        value = valueProcess(value);
        postOutput.push(value);
      });
      output.push(postOutput);
    }
  }); // $('.post-variables').each((i, postVariables) => {

  return output;
  /*
  let ele
  if (key.startsWith('data-post-')) {
    ele = $('.post-variable')
  } else if (key.startsWith('data-label-')) {
    ele = $('.label-variable')
  }
   if (ele.length === 1 && !key.startsWith('data-label-')) {
    let value = ele.attr(key)
    value = valueProcess(value)
    return value
  } else {
    let output = []
    ele.each((i, item) => {
      let value = $(item).attr(key)
      //console.log([key, value])
      value = valueProcess(value)
      output.push(value)
    })
    return output
  }
  */
};

/***/ }),

/***/ "./lib-for-link/src/global-header/script/facebook.js":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/script/facebook.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*1551359715,,JIT Construction: v4806240,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a, b, c, d, e) {
  var f = window.console;
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  if (window[c]) return;
  if (!window.JSON) return;
  var g = window[c] = {
    __buffer: {
      replay: function replay() {
        var a = this,
            b = function b(d) {
          var b = window[c];
          a.calls[d][0].split(".").forEach(function (a) {
            return b = b[a];
          });
          b.apply(null, a.calls[d][1]);
        };

        for (var d = 0; d < this.calls.length; d++) {
          b(d);
        }

        this.calls = [];
      },
      calls: [],
      opts: null
    },
    getUserID: function getUserID() {
      return "";
    },
    getAuthResponse: function getAuthResponse() {
      return null;
    },
    getAccessToken: function getAccessToken() {
      return null;
    },
    init: function init(a) {
      g.__buffer.opts = a;
    }
  };

  for (var b = 0; b < d.length; b++) {
    f = d[b];
    if (f in g) continue;
    var h = f.split("."),
        i = h.pop(),
        j = g;

    for (var k = 0; k < h.length; k++) {
      j = j[h[k]] || (j[h[k]] = {});
    }

    j[i] = function (a) {
      if (a === "init") return;
      return function () {
        g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
      };
    }(f);
  }

  k = a;
  h = /Chrome\/(\d+)/.exec(navigator.userAgent);
  h && Number(h[1]) >= 55 && "assign" in Object && "findIndex" in [] && (k += "&ua=modern_es6");
  j = document.createElement("script");
  j.src = k;
  j.async = !0;
  e && (j.crossOrigin = "anonymous");
  i = document.getElementsByTagName("script")[0];
  i.parentNode && i.parentNode.insertBefore(j, i);
})("https:\/\/connect.facebook.net\/en_US\/all.js?hash=c24a3668728a59a4eebd6931668369c5", 1551359715, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], false); // --------------
// 20181226 FB粉專


$(function () {
  _load_fan_page();
});

var _load_fan_page = function _load_fan_page() {
  $('.widget.HTML.fb-fan-page .widget-content').html('<iframe src="//www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpulipuli.blogspot&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=391880581194257" width="350" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
};

/***/ }),

/***/ "./lib-for-link/src/global-header/script/google-analytics.js":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/global-header/script/google-analytics.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); //ga('create', 'UA-37178375-1', 'auto');    // 原始的呼叫方法
// IMPORTANT: This is just example data for demonstration purposes to send *something* to GA. Populate your `customUserId` some other way. DO NOT COPY THIS.


var prefix = ['abc', 'def', 'ghi'],
    middle = ['123', '456', '789'],
    suffix = ['rst', 'uvw', 'xyz'],
    random = function random() {
  return Math.floor(Math.random() * 3);
}; // IMPORTANT: POPULATE YOUR OWN `customUserId` HERE...
// Simple pseudo-random user id - 27 possible values
// This is *just* some "random" text that we're using as userIds. DO NOT COPY THIS.
// You'll need to implement something here linked to your customer database, CRM system, mailing list or whatever you're using


var customUserId = prefix[random()] + '-' + middle[random()] + '-' + suffix[random()]; // e.g. abc-123-rst

ga('create', 'UA-37178375-1', {
  'userId': customUserId
}); // 20161118 嘗試加入userId看看

ga('require', 'displayfeatures');
ga('set', 'dimension1', customUserId);
ga('send', 'pageview'); // ----------------------------------------

/**
 * 20161118 加入事件設定
 */

$(function () {
  // ------------------------
  // 搜尋
  var _check_ga_search_ready = function _check_ga_search_ready() {
    if ($(".gsc-search-button").length === 0) {
      setTimeout(_check_ga_search_ready, 1000);
    } else {
      $(".gsc-search-button:first").click(function () {
        ga("send", "event", "search", $("input.gsc-input:first").val(), 1); //console.log("送出GA event search");
      });
    }
  };

  _check_ga_search_ready(); // ----------------------------
  // 分享


  $(".social-button").click(function () {
    //var _btn = $(this);
    //var _link = _btn.parent("aside:first");
    ga("send", "event", "share", $(this).attr("data-title"), 1); //console.log("送出GA event search");
  });
});

/***/ }),

/***/ "./lib-for-link/src/global-header/script/script.js":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/script/script.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 檢查PULI_UTILS是否存在
 * @author Pulipuli Chen 20190228
 */
if (typeof PULI_UTILS === "undefined") {
  PULI_UTILS = {};
}

if (typeof PULI_UTILS.post === "undefined") {
  PULI_UTILS.post = {};
} //----------------------------------

/**
 * 記錄
 * 
 * @param {String} _title 標題
 * @param {String} _message 內文
 */


PULI_UTILS.log = function (_title, _message) {
  if (_message === undefined) {
    _message = _title;
    _title = null;
  }

  if (_title !== null) {
    _message = "[" + _title + "] " + _message;
  }

  _message = "[PULIPULI] " + _message; //console.trace(_message);
};
/**
 * 確認Blogger是否是全文網頁
 * @return {boolean}
 */


PULI_UTILS.is_blogger_fullpage = function () {
  var href_array = location.href.split("/"); //var href_array2 = location.href.split("\\");

  var _is_fulllpage = href_array.length > 5 && href_array[4] !== "label";

  var _is_file = href_array[0] !== "file:";

  var _is_localhost = href_array[2] === 'localhost';

  var _is_localhost_fullpage = href_array[href_array.length - 1] === 'fullpage.html';

  if (_is_localhost) {
    if (_is_localhost_fullpage) {
      return true;
    } else {
      return false;
    }
  }

  if (_is_fulllpage && _is_file) {
    //console.log('is_blogger_fullpage: true');
    return true;
  } else {
    //console.log('is_blogger_fullpage: false');
    return false;
  }
};
/**
 * 確認Blogger是否是全文網頁
 * @return {boolean}
 */


PULI_UTILS.is_guess_message = function () {
  var _needle = "/2005/12/blogger_113544406852218769.html";
  var _href = location.href;
  return _href.substr(_href.length - _needle.length, _needle.length) === _needle;
};
/**
 * 建立獨一無二的ID
 * @return {integer}
 */


PULI_UTILS.create_id = function () {
  return new Date().getTime() + '';
};

var _page_index = 0;

PULI_UTILS.create_page_id = function () {
  var _pagename = location.pathname.split("/").slice(-1);

  if (typeof _pagename[0] === "string") {
    _pagename = _pagename[0];
  }

  _pagename = _pagename + _page_index;
  _page_index++;
  return _pagename;
};

/***/ }),

/***/ "./lib-for-link/src/global-header/sidebar/random_posts.less":
/*!******************************************************************!*\
  !*** ./lib-for-link/src/global-header/sidebar/random_posts.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./random_posts.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/random_posts.less");

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

/***/ "./lib-for-link/src/global-header/sidebar/sidebar.js":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/sidebar/sidebar.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $("#side-bar .widget h2").wrapInner("<span/>");
});

/***/ }),

/***/ "./lib-for-link/src/global-header/sidebar/sidebar.less":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/global-header/sidebar/sidebar.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./sidebar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less");

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

/***/ "./lib-for-link/src/global-header/style/2_style.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/2_style.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./2_style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less");

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

/***/ "./lib-for-link/src/global-header/style/3_custom_style.less":
/*!******************************************************************!*\
  !*** ./lib-for-link/src/global-header/style/3_custom_style.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./3_custom_style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less");

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

/***/ "./lib-for-link/src/global-header/style/addthis.css":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/addthis.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./addthis.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/style/addthis.css");

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

/***/ "./lib-for-link/src/global-header/style/content.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/content.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./content.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/content.less");

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

/***/ "./lib-for-link/src/global-header/style/footer.less":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/footer.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./footer.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/footer.less");

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

/***/ "./lib-for-link/src/global-header/style/header.less":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/header.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less");

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

/***/ "./lib-for-link/src/global-header/style/index.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/index.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less");

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

/***/ "./lib-for-link/src/global-header/style/style.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/style.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n *  Font Awesome 4.4.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?v=4.4.0);src:url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot#iefix&v=4.4.0) format(\"embedded-opentype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff2?v=4.4.0) format(\"woff2\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0) format(\"woff\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf?v=4.4.0) format(\"truetype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.svg?v=4.4.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1);-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@font-face{font-family:Crete Round;font-style:normal;font-weight:400;src:local(\"Crete Round\"),local(\"CreteRound-Regular\"),url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK110b3wKg.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Crete Round;font-style:normal;font-weight:400;src:local(\"Crete Round\"),local(\"CreteRound-Regular\"),url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK170b0.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@font-face{font-family:Lato;font-style:normal;font-weight:400;src:local(\"Lato Regular\"),local(\"Lato-Regular\"),url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Lato;font-style:normal;font-weight:400;src:local(\"Lato Regular\"),local(\"Lato-Regular\"),url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/gsc-search/default.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/global-header/gsc-search/default.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cse .gsc-control-cse,.gsc-control-cse{padding:1em;width:auto}.cse .gsc-control-wrapper-cse,.gsc-control-wrapper-cse{width:100%}.cse .gsc-branding,.gsc-branding{display:none}.cse .gsc-control-cse,.gsc-control-cse{background-color:#fff;border:1px solid #fff}.cse .gsc-control-cse:after,.gsc-control-cse:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.cse .gsc-resultsHeader,.gsc-resultsHeader{border:block}table.gsc-search-box td.gsc-input{padding-right:24px}.gsc-search-box-tools .gsc-search-box .gsc-input{padding-right:12px}input.gsc-input{font-size:16px}.gsc-input::-ms-clear{display:none;height:0;width:0}.gsc-input-box{border:1px solid #d9d9d9;background:#fff}.gsc-input-box-hover,.gsc-search-box .gsc-input>input:hover{border:1px solid #b9b9b9;border-top-color:#a0a0a0;-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1);outline:none}.gsc-input-box-focus,.gsc-search-box .gsc-input>input:focus{border:1px solid #4d90fe;-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);box-shadow:inset 0 1px 2px rgba(0,0,0,.3);outline:none}.cse .gsc-search-button-v2,.gsc-search-button-v2{font-size:0;padding:6px 27px;width:auto;vertical-align:middle;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;border:1px solid #3079ed;background-color:#4d90fe;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(top,#4d90fe,#4787ed);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#4d90fe\",EndColorStr=\"#4787ed\")}.cse .gsc-search-button-v2:hover,.gsc-search-button-v2:hover{border-color:#2f5bb7;background-color:#357ae8;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(top,#4d90fe,#357ae8);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#4d90fe\",EndColorStr=\"#357ae8\")}.cse .gsc-search-button-v2:focus,.gsc-search-button-v2:focus{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5);-webkit-box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5);-moz-box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5)}.gsc-search-button-v2 svg{fill:#fff}button::-moz-focus-inner{padding:0;border:0}.gsc-refinementHeader{text-decoration:none;font-weight:700;color:#666}.gsc-refinementHeader.gsc-refinementhActive{text-decoration:none;color:#dd4b39}.gsc-refinementHeader.gsc-refinementhInactive{text-decoration:none;cursor:pointer}.gsc-refinementHeader.gsc-refinementhInactive>span:hover{text-decoration:underline}.gsc-refinementhActive>span{border-bottom:3px solid;padding-bottom:2px}.gsc-refinementsArea{margin-top:0;padding-bottom:4px;padding-top:10px}.gsc-tabsArea{font-size:11px}.gsc-tabsArea>.gsc-tabHeader{height:27px}.gsc-tabsArea>div{height:30px;overflow:auto}.gsc-tabsArea .gs-spacer,.gsc-tabsArea .gs-spacer-opera{display:none}.gsc-tabsArea{margin-top:12px;margin-bottom:0;height:29px;border-bottom:1px solid #ccc}.gsc-tabHeader{display:inline-block;padding:0 8px 1px;margin-right:0;margin-top:0;font-weight:700;height:27px;line-height:27px;min-width:54px;text-align:center}.gsc-tabHeader.gsc-tabhActive{border:1px solid;border-color:#ccc #ccc #fff;color:#202020}.gsc-tabHeader.gsc-tabhInactive{background:#fff;color:#666;border-left:0;border-right:0;border-top:0}.gsc-imageResult-classic,.gsc-imageResult-column{padding:.25em;border:1px solid #fff;margin-bottom:1em}.gsc-webResult.gsc-result{padding:.25em}.cse .gsc-webResult.gsc-result,.gsc-webResult.gsc-result{border:1px solid #fff;margin-bottom:0}.gsc-webResult .gsc-result{padding:10px 0}.cse .gsc-webResult.gsc-result:hover,.gsc-results .gsc-imageResult-classic:hover,.gsc-results .gsc-imageResult-column:hover,.gsc-webResult.gsc-result.gsc-promotion:hover,.gsc-webResult.gsc-result:hover{border:1px solid #fff}.gs-promotion-image-box,.gs-web-image-box{padding:2px 0}.gs-promotion-image-box img.gs-promotion-image{max-width:50px}.gs-promotion-image-box,.gs-promotion-image-box img.gs-promotion-image{width:50px}.gs-web-image-box img.gs-image{max-width:70px;max-height:70px}.gs-web-image-box-landscape img.gs-image{max-width:70px;max-height:50px}.gs-web-image-box-portrait img.gs-image{max-width:50px;max-height:120px}.gs-image-box.gs-web-image-box.gs-web-image-box-landscape{width:80px}.gs-image-box.gs-web-image-box.gs-web-image-box-portrait{width:60px;height:50px;overflow:hidden}.gs-web-image-box{text-align:inherit}.gs-promotion-image-box img.gs-promotion-image{border:1px solid #ebebeb}.cse .gsc-webResult.gsc-result.gsc-promotion,.gsc-webResult.gsc-result.gsc-promotion{background-color:#f6f6f6;margin-top:5px;margin-bottom:10px}.gsc-result-info{margin-top:0;margin-bottom:0;padding:8px 8px 10px}.gs-promotion-text-cell .gs-snippet,.gs-promotion-text-cell .gs-visibleUrl{font-size:13px}.gsc-table-result,.gsc-thumbnail-inside,.gsc-url-top{padding-left:8px;padding-right:8px}.gs-promotion-table{margin-left:8px;margin-right:8px}.gs-promotion table{padding-left:8px;padding-right:8px}table.gs-promotion-table-snippet-with-image{padding-left:0;padding-right:0}.gs-promotion-text-cell{margin-left:8px;margin-right:8px}.gs-promotion-text-cell-with-image{padding-left:10px;padding-right:10px;vertical-align:top}.cse .gs-promotion .gs-snippet a:active,.cse .gs-promotion .gs-snippet a:hover,.cse .gs-promotion .gs-snippet a:link,.cse .gs-promotion .gs-snippet a:visited,.cse .gs-promotion a.gs-title:active,.cse .gs-promotion a.gs-title:active *,.cse .gs-promotion a.gs-title:hover,.cse .gs-promotion a.gs-title:hover *,.cse .gs-promotion a.gs-title:link,.cse .gs-promotion a.gs-title:link *,.cse .gs-promotion a.gs-title:visited,.cse .gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:active,.gs-promotion .gs-snippet a:hover,.gs-promotion .gs-snippet a:link,.gs-promotion .gs-snippet a:visited,.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *{color:#15c}.cse .gs-promotion .gs-snippet,.cse .gs-promotion .gs-title .gs-promotion-title-right,.cse .gs-promotion .gs-title .gs-promotion-title-right *,.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#000}.cse .gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl{color:#093}.gsc-completion-selected{background:#eee}.gsc-completion-container{font-family:Arial,sans-serif;font-size:16px;background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;margin:0}.gsc-completion-title{color:#15c}.gsc-completion-snippet{color:#000}.gs-promotion div.gs-visibleUrl-short,.gs-webResult div.gs-visibleUrl-short{display:none}.gs-promotion div.gs-visibleUrl-long,.gs-webResult div.gs-visibleUrl-long,.gsc-url-top{display:block}.gsc-thumbnail-left,.gsc-url-bottom{display:none}.gsc-thumbnail-inside{display:block}.gsc-result .gs-title{height:1.2em}.gs-result .gs-title,.gs-result .gs-title *{color:#15c}.gs-result .gs-visibleUrl,.gs-result a.gs-visibleUrl{color:#093;text-decoration:none;padding-bottom:2px}.gsc-results .gsc-cursor-box{margin:10px}.gsc-results .gsc-cursor-box .gsc-cursor-page{text-decoration:none}.gsc-results .gsc-cursor-box .gsc-cursor-page:hover{text-decoration:underline}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{text-decoration:none;color:#dd4b39}.gsc-control-cse .gs-promotion em,.gsc-control-cse .gs-snippet,.gsc-preview-reviews{color:#333}.gsc-control-cse-zh_CN .gs-promotion em,.gsc-control-cse-zh_CN .gs-snippet b,.gsc-control-cse-zh_TW .gs-promotion em,.gsc-control-cse-zh_TW .gs-snippet b{color:#c03}.gsc-author,.gsc-location,.gsc-org,.gsc-reviewer,.gsc-role,.gsc-snippet-metadata,.gsc-tel{color:#666}.gsc-wrapper.gsc-thinWrapper{border-right:1px solid #e9e9e9}.gs-spelling a{color:#15c}.gs-spelling{color:#333;padding-left:7px;padding-right:7px}.gs-snippet{margin-top:1px}div.gsc-clear-button{background-image:url(//www.google.com/cse/static/css/v2/clear.png)}div.gsc-clear-button:hover{background-image:url(//www.google.com/cse/static/css/v2/clear-hover.png)}.gsc-preview-reviews ul{padding-left:0;padding-right:0}.gsc-completion-container .gsc-completion-icon-cell{width:42px;height:42px;padding-right:10px}.gcsc-branding-text,.gsc-branding-text{color:#666}.gcsc-branding{padding-top:4px;padding-left:8px;padding-right:8px}.gsc-adBlock{padding-bottom:5px}.gsc-table-cell-snippet-close,.gsc-table-cell-snippet-open{padding-left:0;padding-right:0}.gsc-selected-option-container{background-color:#f5f5f5;background-image:linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1)}.gsc-context-box{font-size:83%;margin-top:3px;border-collapse:collapse}.gsc-context-box .gsc-col{padding:1px 0;white-space:nowrap;vertical-align:middle}.gsc-context-box .gsc-facet-label{width:65px;padding-left:2px;text-decoration:underline;color:#00c;cursor:pointer}.gsc-context-box .gsc-chart{width:32em;padding:3px;border-left:1px solid #00c;border-right:1px solid #00c}.gsc-context-box .gsc-top{border-top:1px solid #00c}.gsc-context-box .gsc-bottom{border-bottom:1px solid #00c}.gsc-context-box .gsc-chart div{background:#00c;height:9px}.gsc-context-box .gsc-facet-result{color:#00c;width:30px;text-align:right;padding-right:5px}.gsc-usr-group-thumbnail{display:inline-block;max-width:72px;max-height:72px}.gsc-usr-group-thumbnail img{max-height:72px;overflow:hidden}.gs-webResult .gs-title .gs-title.gsc-usr-group-heading{color:#00c;cursor:pointer}.gsc-usr-group{min-height:100px;zoom:1;display:block;line-height:1.24;margin-top:-7px;margin-bottom:-7px;margin-left:20px}.gsc-usr-group-content{padding-top:1px;padding-bottom:3px}.gsc-usr-group-content-thumbnail{display:inline-block;vertical-align:top}.gsc-usr-group-head-result{display:inline-block;padding-left:6px}.gsc-usr-group-snippet{width:100%;height:3.6em;overflow:hidden}.gsc-usr-group-content-results{font-size:12px;padding-left:1px;width:80%;padding-top:7px}.gsc-usr-group-head-results{display:inline-block;font-size:13px;padding-left:6px;width:80%}.gs-webResult .gs-title .gs-title.gsc-usr-group-all-results{font-size:11px;line-height:10px}.gs-webResult .gs-title .gs-title.gsc-usr-group-all-results b{font-size:14px;font-weight:600}.gcsc-find-more-on-google,.gs-webResult .gs-title .gs-title.gsc-usr-group-heading b{color:#00c}.gcsc-find-more-on-google-magnifier{fill:#00c}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./lib-for-link/src/global-header/style/addthis.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./lib-for-link/src/global-header/style/addthis.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addthis-smartlayers .atss{z-index:auto}@media (min-width:480px){.addthis-smartlayers-mobile{display:none!important}}.addthis-smartlayers .at-custom-sidebar-counter{background-color:#fff;min-height:31px;cursor:default}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media (max-width:979px){#masthead .btn-navbar{font-size:23px!important;margin-left:0;width:23px;padding:0 16px 0 17px;margin-top:0;margin-bottom:0;line-height:82px}#masthead.fixed-nav .btn-navbar{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;line-height:56px}}@media (max-width:480px){#masthead .btn-navbar,#masthead.fixed-nav .btn-navbar{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;line-height:56px}#masthead .btn-navbar{margin-right:5px}#masthead #menu-primary{padding-top:27px}#masthead .nav-collapse,#masthead .nav-collapse.collapse{top:0}#masthead #header-inner{margin-top:0;margin-bottom:0}#masthead.fixed-nav.affix #header-inner{margin-top:0!important;line-height:55px}#masthead #header-inner .descriptionwrapper{display:none}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead #menu-primary a{color:#fff}#masthead #menu-primary ul>li>a{white-space:nowrap;overflow-x:hidden}#masthead #menu-primary li.home{width:6rem;text-align:right}#masthead #menu-primary li.home a.accesskey-menu{padding-right:0}#masthead #menu-primary li.dropdown{cursor:pointer}#masthead #menu-primary .dropdown-toggle i{font-size:20px}#masthead #menu-primary li.help a{padding-left:0;padding-right:0}#masthead #menu-primary li.help .icon{font-size:20px;line-height:27px}#masthead #menu-primary li.help .title,#masthead #menu-primary li.search{display:none}#masthead #menu-primary li.search a{padding:12px 15px}#masthead #menu-primary .dropdown-menu{z-index:-1}#masthead #menu-primary .dropdown-menu li>a{padding:12px 15px}#masthead.fixed-nav #menu-primary li>a{line-height:56px;padding:0 0 0 10px}#masthead.fixed-nav #menu-primary li.home{width:5rem}#masthead.fixed-nav #menu-primary li.home a.accesskey-menu{padding-right:5px;padding-top:0;line-height:54px}#masthead.fixed-nav #menu-primary li.help .icon{line-height:29px}#masthead.fixed-nav #menu-primary .dropdown-menu{position:fixed;top:54px;left:calc(100vw - (100vw - 1170px)/2 - 10px - 367px)}#masthead.fixed-nav #menu-primary .dropdown-menu li>a{padding:12px 15px;line-height:20px}@media (min-width:1200px){#masthead #menu-primary .dropdown-menu{margin-top:2px;margin-left:5px}#masthead.fixed-nav #menu-primary .dropdown-menu{margin-left:0}}@media (max-width:1200px){#masthead #menu-primary li.home{width:6rem}#masthead #menu-primary .dropdown-menu{margin-left:-5px}#masthead #menu-primary li>a{padding-left:10px;padding-right:10px}#masthead #menu-primary li.home a.accesskey-menu{padding-right:0}#masthead.fixed-nav #menu-primary .dropdown-menu{left:calc(100vw - (100vw - 960px)/2 - 10px - 277px);margin-left:0}}@media (max-width:979px){#masthead .nav-collapse{height:0}#masthead .nav-collapse #menu-primary{background-color:#2d2d2d}#masthead .nav-collapse #menu-primary li.help .title{display:block}#masthead .nav-collapse #menu-primary li.help a{padding-left:15px;padding-right:15px}#masthead .nav-collapse #menu-primary li.help .icon{float:left;margin-right:.5em}#masthead .nav-collapse .dropdown-menu{border-top:2px solid #f69087;position:fixed;z-index:-1;width:100vw;background-color:#2d2d2d;display:block;margin:0;padding-top:8px}#masthead .nav-collapse .dropdown-menu li a{padding-left:18px!important;border-radius:0}#masthead .nav-collapse .dropdown-menu li a:active,#masthead .nav-collapse .dropdown-menu li a:focus,#masthead .nav-collapse .dropdown-menu li a:hover{border-left:3px solid #85ccb1;padding-left:15px!important}#masthead .nav-collapse .dropdown-menu li.active,#masthead .nav-collapse .dropdown-menu li:hover{background:none repeat scroll 0 0 hsla(0,0%,100%,.02);color:#fff}#masthead .nav-collapse .nav>li.dropdown>a,#masthead .nav-collapse .nav>li:not(.dropdown){display:none}#masthead .nav-collapse.collapse{overflow:hidden;height:0}#masthead .nav-collapse.collapse .dropdown-menu,#masthead .nav-collapse.in.collapse .dropdown .dropdown-toggle{display:none}#masthead.fixed-nav #menu-primary .dropdown-menu{left:0;top:56px}}@media (max-width:767px){#masthead .nav-collapse .dropdown-menu{margin-top:0}}@media (max-width:680px){#masthead .nav-collapse.collapse li.search{display:none}#masthead .nav-collapse li.search{padding-top:12px}#masthead .nav-collapse .dropdown-menu{clear:both;margin-top:0}#masthead .nav-collapse li.search .gcse-placeholder-dropdown{background-color:#fff;border-radius:4px;margin-left:15px;width:calc(100vw - 60px);line-height:28px;padding-bottom:3px}#masthead .nav-collapse li.search .gcse-placeholder-dropdown input.gsc-input-placeholder{float:left;border-width:0;outline:none;width:calc(100% - 40px);height:23px}#masthead .nav-collapse li.search .srch_btn-dropdown{color:grey;cursor:pointer;margin-top:0}#masthead .nav-collapse li.search .srch_btn-dropdown:hover{color:#222}#masthead.fixed-nav form.gcse-placeholder-dropdown{margin-top:0}}@media (max-width:480px){#masthead nav .nav-collapse{overflow:initial}#masthead nav .nav-collapse #menu-primary{padding-top:0}#masthead nav .nav-collapse .dropdown-menu{position:static;width:100vw}}@media (max-height:480px){#masthead #menu-primary .dropdown-menu{max-height:calc(100vh - 80px);overflow-x:auto;width:100%;margin:0}#masthead.fixed-nav #menu-primary .dropdown-menu{display:none}}@media (max-height:480px) and (min-width:979px){#masthead #menu-primary .dropdown-menu{width:13rem}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#footer .go-top{float:right;margin-left:20px;padding-left:20px}#footer .go-top a{display:block;width:30px;height:30px;color:#fff;font-size:14px;text-align:center;border-radius:2px;background-color:#f46b6b;transition:background-color .2s ease-in-out;-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out}#footer .go-top a:hover{background-color:#444}#footer .go-top a i{line-height:30px}#footer .go-top{position:fixed;right:1em;bottom:calc(50px + 1em);z-index:999;border-left-width:0!important}#footer .go-top a{background-color:#ad7518;-moz-box-shadow:2px 2px 3px rgba(51,51,102,.5);-webkit-box-shadow:2px 2px 3px rgba(51,51,102,.5);box-shadow:2px 2px 3px rgba(51,51,102,.5)}#footer .go-top .goto-comment{display:none;margin-top:.5em}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead .search-bar{-moz-transition:.3s linear;-webkit-transition:.3s ease-out;transition:.3s linear;float:right;right:0;cursor:pointer;background-image:none;background-repeat:no-repeat;padding:0 0 0 20px;background-size:100px 100px;top:0;z-index:99999;margin-top:-5px}#masthead .search-bar .nav-search{width:100%}#masthead .search-bar .gcse-placeholder{display:block;width:100%;padding:0;float:left;margin-top:2px;margin-right:15px;background-color:#fff!important;border-radius:.5rem;height:34px}#masthead .search-bar .gcse-placeholder input.gsc-input-placeholder{width:calc(100% - 40px);border:none;margin:0;outline:none;padding:2px 0 0 8px;margin-top:0!important}#masthead .search-bar .nav-search{margin-top:22px;float:right}#masthead .search-bar .nav-search .srch_btn{position:relative;font-size:20px;color:grey;line-height:33px}#masthead .search-bar .nav-search .srch_btn:hover{color:#222}#masthead.fixed-nav .search-bar .nav-search{margin-top:6px}#masthead.fixed-nav .search-bar form.gcse-placeholder{margin-top:10px}@media (min-width:979px){.search-bar{width:240px}}@media (max-width:1200px) and (min-width:979px){#masthead .search-bar{width:160px!important;margin-right:20px}}@media (max-width:979px){#masthead .search-bar{width:260px;padding:0}#masthead .search-bar .nav-search{margin-top:28px}#masthead .search-bar .nav-search form.gcse-placeholder{margin-top:1px}#masthead.fixed-nav .search-bar form.gcse-placeholder{margin-top:10px}}@media (max-width:767px){#masthead .search-bar{width:200px}}@media (max-width:680px){#masthead .search-bar{display:none}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead .search-bar .gcse{position:fixed;top:-1000px;left:-1000px}#masthead .search-bar:hover{-moz-transition:.01s linear;-webkit-transition:.01s ease-out;transition:.01s linear;background-image:none}#masthead .nav-search{height:30px;position:relative;left:0;line-height:10px;color:#fff!important}#masthead .nav-search label{display:none}#masthead .nav-search input{float:left;height:30px;line-height:20px;padding:0 10px 0 0;font-size:15px;outline:0;border-radius:0;border:0;width:160px;margin:22px 0 0 33px;background:none;border-bottom:1px solid #f1f1f1;opacity:1;margin-top:-4px!important}.nav-search input.search_input,.search-bar:hover .nav-search input{background-color:#fff;color:#000!important;padding-left:.5em;border-radius:3px;margin-top:27px}#masthead.fixed-nav.affix .search-bar{padding-bottom:0}#masthead.fixed-nav .descriptionwrapper{display:none}.gsc-control-cse{border-color:transparent!important;background-color:transparent!important;padding:0!important}.gcse{margin-top:7px}.gcse,.nav-search .srch_btn{float:left}#masthead .gsc-control-wrapper-cse,.cse .gsc-control-wrapper-cse{width:160px!important;transition:width .2s!important}.gsc-search-button{display:none!important}#masthead .gsc-input-box{border-radius:.5em!important}.gsc-input-box input.gsc-input{opacity:1!important;background-image:none!important;box-shadow:inset 0 0 0 0 red;text-indent:0!important}@media (max-width:979px){#masthead .search-bar .gcse{margin-top:13px}#masthead .nav-search input{line-height:34px}}@media (min-width:979px) and (max-width:1200px){#masthead .gsc-control-wrapper-cse{width:135px!important}}@media (min-width:979px){#masthead .search-bar .gcse{margin-top:7px}#masthead .nav-search input{line-height:26px}}@media (max-width:680px){.search-bar{position:absolute;top:-1000px}.navbar .nav li.search{display:list-item!important}.navbar .nav li.search form{margin:0}.navbar .nav li.search input{width:calc(100% - 100px)}.navbar .nav li.search .srch_btn{height:42px;width:23px;background:url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px no-repeat;text-indent:9999px;position:relative;float:left;margin-left:18px;margin-right:10px;margin-top:-5px;display:inline!important;border-width:0}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".gcse{position:fixed;top:-1000px}.gcse .gsc-results-wrapper-overlay{line-height:1.5em;top:90px;height:calc(100vh - 210px);left:50px;width:calc(100vw - 160px)}body.fixed-nav .gcse .gsc-results-wrapper-overlay{top:70px;height:calc(100vh - 160px)}.gcse .gsc-results-wrapper-overlay .gcsc-branding{display:none}.gcse .gsc-results-wrapper-overlay .gsc-cursor-box{text-align:center}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page{padding:7px 10px;border:1px solid grey!important;border-radius:5px;cursor:pointer!important;color:grey;text-decoration:none!important}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page{color:#000}.gcse .gsc-results-wrapper-overlay .gsc-wrapper{max-height:calc(100% - 120px);overflow-y:auto}.gcse .gsc-results-wrapper-overlay .gsc-wrapper>.gsc-adBlock{display:none}.gcse .gsc-results-wrapper-overlay .gsc-wrapper img.gs-image{width:100%!important;height:auto!important;max-width:100%!important;max-height:100%!important;border:1px solid grey}.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image{width:176px}.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box{width:176px;height:auto!important;max-height:176px;top:-3em;margin-bottom:-3em;position:relative}.gcse .gsc-results-wrapper-overlay div.gs-title,.gcse .gsc-results-wrapper-overlay div.gsc-url-top{margin-left:calc(176px + 1em)}.gcse .gsc-results-wrapper-overlay div.gs-snippet{margin-left:19px}.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail{width:176px;display:block!important}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page,.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page:hover{background-color:#ad7518;color:#fff}@media (max-width:680px){.gcse .gsc-results-wrapper-overlay{top:20px;height:calc(100vh - 100px);left:20px;width:calc(100vw - 100px)}}@media (max-width:480px){.gcse .gsc-results-wrapper-overlay{top:0;height:calc(100vh - 60px);left:0;width:calc(100vw - 60px)}.gcse .gsc-results-wrapper-overlay div.gs-title,.gcse .gsc-results-wrapper-overlay div.gsc-url-top{margin-left:0}.gcse .gsc-results-wrapper-overlay div.gs-snippet{margin-left:6px}.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box,.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image,.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail{width:0}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page{line-height:35px}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead{padding-left:25px}#masthead #header h1{line-height:30px;margin-top:10px}#masthead.fixed-nav{opacity:1!important;background-color:rgba(34,34,34,.9)!important;position:fixed!important}#masthead.fixed-nav .affix #header h1{line-height:22px}@media (min-width:979px) and (max-width:1200px){.navbar{width:960px!important}}@media (max-width:979px){#masthead{position:fixed;padding-left:50px}#masthead #header #header-inner{margin-top:15px}#masthead.fixed-nav.affix .btn-navbar{margin-top:5px;margin-bottom:0}#masthead.fixed-nav.affix #header h1{line-height:55px;margin-top:0!important}#masthead.fixed-nav.affix #header-inner{margin-top:0}#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a{padding-left:22px!important}#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:active,#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:focus,#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:hover{padding-left:19px!important}}@media (max-width:480px){#masthead{height:auto;padding-left:10px}#masthead #header{margin-right:0;max-width:calc(100% - 101px);overflow-x:hidden;white-space:nowrap}#masthead #header .description{display:none}}@media (max-height:480px){#masthead.fixed-nav{position:absolute!important}}#masthead.fixed-nav img{margin-top:0;width:auto;max-height:85%}#masthead.fixed-nav form{margin-top:-16px}#masthead.fixed-nav h1{font-size:20px;margin-top:9px}#masthead.fixed-nav{position:fixed;top:0;width:100%!important;margin:0 auto;z-index:999;height:56px;background-color:rgba(0,0,0,.9);box-shadow:0 2px 3px rgba(51,51,102,.5)}#masthead.fixed-nav .navbar{height:56px;max-height:56px;overflow-y:hidden}@media (max-height:480px){#masthead.fixed-nav{background:#222;margin-bottom:50px;left:0;top:0;width:100%;z-index:999;box-shadow:none;position:static}#masthead .container{box-shadow:none}}@media (max-width:979px){#masthead.fixed-nav>.container{box-shadow:2px 2px 3px rgba(51,51,102,.5)}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/random_posts.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/random_posts.less ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ul#random_posts{list-style-type:none;padding:0 0 .5em}#random_posts dd{line-height:22px;margin:0;padding:8px 15px 8px 10px;position:relative;min-height:55px;border-left:3px solid transparent}#random_posts dd:hover{background:#f8f8f8;border-left:3px solid #f69087;cursor:pointer}#random_posts img{float:left;margin-right:5px;max-width:70px;height:auto;background-color:#f5f5f5;padding:3px;transition:all .2s linear 0s}#random_posts .random-summary{font-size:11px;background:none;padding:5px;margin-right:8px}#random_posts li{margin-bottom:10px;border-bottom:1px solid #eee;padding:4px}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#sidebar .widget.about-me .description .avatar-image-container{background-image:url(//lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=50);background-repeat:no-repeat;height:54px;width:54px;border-width:0;margin-left:.5rem;display:block;float:right}#sidebar .widget.about-me .link-buttons{white-space:nowrap}#sidebar .widget a h2{cursor:inherit}#sidebar .widget h2{cursor:default}.sidebar h2>span{position:relative;bottom:-2px;display:inline-block;border-bottom:2px solid #e23a3e;padding-bottom:5px;margin-top:0}.sidebar .widget-content li a{font-size:inherit;color:inherit}#sidebar>.widget>a.icon{cursor:pointer}@media (max-width:1200px) and (min-width:979px){#sidebar .about-link .read-more{padding:5px;margin-top:2px}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.post-avatar{border:3px solid #eaeaea;width:100px;height:100px;overflow:hidden;float:left;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}div.meta1 p{padding:10px 0;margin-bottom:-20px;font-size:16px}.meta1 span{margin-right:10px}.badge,.label{display:inline-block;padding:2px 4px;font-size:11.844px;font-weight:700;line-height:14px;color:#fff;vertical-align:baseline;white-space:nowrap;text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#999}.label{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.badge{padding-left:9px;padding-right:9px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px}.badge:empty,.label:empty{display:none}a.badge:focus,a.badge:hover,a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#header-inner{width:auto!important;background-position:0 0!important;background-image:none!important}#header-inner .descriptionwrapper{margin-top:5px}.fixed-nav.affix #header-inner .descriptionwrapper,.fixed-nav.affix #header-inner img{display:none}.fixed-nav.affix #header-inner{background-image:none!important}#sidebar-popular-post .popular-posts>ul>dd{display:none}#sidebar-popular-post .popular-posts>ul>dd:first-of-type,#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(2),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(3),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(4),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(5){display:block}.site-footer .cloud-label-widget-content a{color:#ccc}.entry-image{max-height:430px}.entry-content{line-height:200%}.entry-content>article>p{text-indent:2em}.entry-content h4{font-size:24pt;color:#bd8a39}.entry-content h5{font-size:20pt;color:#bd8a39}.entry-content h6{font-size:18pt;font-style:italic;color:#bd8a39}.entry-content hr{border-top:2px solid #deb46f;border-bottom:2px solid #bd8a39}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/content.less":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/content.less ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#content-wrapper{padding-top:80px;padding-left:50px}@media (max-width:979px){#content-wrapper{padding-top:80px}#content-wrapper #primary{padding-left:0}}@media (max-width:480px){#content-wrapper{padding-top:50px!important;padding-left:0}#content-wrapper #primary{padding-left:0!important;padding-right:0!important}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/footer.less":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/footer.less ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#footer{line-height:30px;padding:10px 0 0;background-color:#1a1a1a}#footer p{font-size:13px;float:left;line-height:30px}#footer a{color:#f57676}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead header .back-button{float:left;font-size:30px;padding-right:10px;color:#fff;cursor:pointer;line-height:68px;width:30px}#masthead header #header{margin-top:-2px;cursor:default}#masthead header #header #header-inner.header-inner-not-mobile{background-repeat:no-repeat}#masthead header #header #header-inner:not(.no-header-image) .titlewrapper{background:transparent}#masthead header #header #header-inner:not(.no-header-image) .titlewrapper .title{background:transparent;border-width:0}#masthead header #header #header-inner-link,#masthead header #header #header-inner-link>a{display:block}#masthead header #header .descriptionwrapper{cursor:default}#masthead.fixed-nav header{margin-top:-5px}#masthead.fixed-nav header #header,#masthead.fixed-nav header #header h1.title{line-height:56px;margin-top:0}#masthead.fixed-nav header .back-button{font-size:20px;line-height:56px;width:20px;margin-top:-1px}@media (max-width:979px){#masthead header .back-button{margin-left:0;line-height:82px}#masthead header .back-button.placeholder{width:20px;height:20px;margin-left:0;padding-right:0}#masthead.fixed-nav header #header{margin:0}#masthead.fixed-nav header #header h1.title{font-size:20px;margin-top:0;line-height:56px}#masthead.fixed-nav header #header #header-inner{min-height:auto;margin-left:0!important;margin-top:auto}#masthead.fixed-nav header .back-button{margin-right:0;line-height:56px}}@media (max-width:480px){#masthead.fixed-nav header,#masthead header{overflow:hidden;margin-top:0}#masthead.fixed-nav header #header,#masthead header #header{max-width:calc(100% - 80px);margin:0}#masthead.fixed-nav header #header h1.title,#masthead header #header h1.title{font-size:20px;margin-top:0;line-height:56px}#masthead.fixed-nav header #header #header-inner,#masthead header #header #header-inner{min-height:auto;margin-left:0!important;margin-top:auto}#masthead.fixed-nav header .back-button,#masthead header .back-button{margin-right:-10px;font-size:20px;line-height:56px}#masthead.fixed-nav header #header{margin:0}#masthead.fixed-nav header .back-button{margin-right:0;line-height:56px}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .widget.Blog .post .index-post-body .index-labels{display:none}#main .widget.Blog .post .index-post-body .entry-image{background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:430px;display:block}#main .widget.Blog .post .index-post-body .entry-image.no-image{background-image:url(//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg);background-position:50%;background-repeat:no-repeat}#main .widget.Blog .post .index-post-body .entry-content{padding-bottom:1rem;padding-top:1rem}#main .widget.Blog .post .index-post-body .entry-content .avatar-name{color:#fff;font-size:18px;margin-left:126px;margin-bottom:-48px;padding-top:17px;display:none}#main .widget.Blog .post .index-post-body .entry-content .post-avatar:hover{border-radius:50%;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}#main .widget.Blog .post .index-post-body .entry-content p{margin:0}#main .widget.Blog .post .index-post-body .entry-content p img{display:none!important}#main .widget.Blog .post .index-post-body .entry-content .foundation{margin-bottom:1rem}#main .widget.Blog .post .index-post-body .entry-content h1.entry-title a{text-decoration:none}#main .widget.Blog .post .index-post-body .entry-content a{text-decoration:underline;color:#bd8242}#main .widget.Blog .post .index-post-body .entry-content a:hover{color:#f69087}#main .widget.Blog .post .index-post-body .entry-content .meta{line-height:100%}#main .widget.Blog .post .index-post-body .entry-content .meta p>small>span{margin-right:10px}#main .widget.Blog .post .index-post-body .entry-content .meta .label-info a,#main .widget.Blog .post .index-post-body .entry-content .meta p>small>span a{text-decoration:none;color:#333;margin-right:.5rem;white-space:nowrap}#main .widget.Blog .post .index-post-body .entry-content .meta .comment-number{white-space:nowrap}#main .widget.Blog .post .index-post-body .entry-content>a:last-of-type{display:none}#main .widget.Blog .post .entry-meta .buttons a{cursor:pointer;display:block;float:left;border-radius:3px;font-size:13px;padding:7px 20px;background:#333;color:#fff;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin-top:13px;margin-bottom:12px;margin-left:1em}#main .widget.Blog .post .entry-meta .buttons a:hover{color:#f69087}#main .widget.Blog .post .entry-meta .read-more{display:block;float:left;border-radius:3px;font-size:13px;padding:7px 20px;background:#333;color:#fff;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin-top:13px;margin-bottom:12px}@media (max-width:1200px){#main .widget.Blog .post .index-post-body .entry-image{height:320px}}@media (max-width:979px){#main .widget.Blog .post .index-post-body .entry-image{height:420px}}@media (max-width:767px){#main .widget.Blog .post .index-post-body .entry-image{height:320px}}@media (max-width:480px){#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left{float:none;text-align:center;width:100%}#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>.read-more,#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>span.item-control.blog-admin a{float:none;width:42%;display:inline-block}#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>span.item-control.blog-admin a{margin-left:0}#main .widget.Blog .post .index-post-body .entry-image{height:240px}#main .share-story{display:none}#main .post h1{font-size:1.5rem;line-height:2rem}#main .post .entry-content p{font-size:1rem}#main .read-more{width:100%;text-align:center;margin:0;padding-left:0;padding-right:0}#main .entry-meta .pull-left{width:100%}#main .post>.entry-meta.clearfix>aside>.pull-left>.item-control.blog-admin a{width:100%;margin-left:0!important;margin-right:0;padding-left:0!important;padding-right:0!important;text-align:center}#main .entry-meta{border-top-width:0;padding-top:0}#main .entry-content>p{text-indent:1em}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".entry-content{line-height:200%}.entry-content>article>p{text-indent:2em;text-align:justify}.entry-content h4{font-size:24pt;color:#bd8242;margin-top:1.5em;margin-bottom:1em}.entry-content h5{font-size:20pt;color:#713e06;margin-top:1.5em;margin-bottom:1em}.entry-content h6{font-size:18pt;font-style:italic;color:#634121;margin-top:1em;margin-bottom:.5em}.entry-content hr{border-top:3px solid #ce8a42;border-bottom:0 solid #bd8a39}.entry-content ul{margin-left:0!important}.entry-content li{margin-left:2em!important}@media (max-width:480px){.entry-content li{margin-left:1em!important}}.entry-content li,.entry-content ul{margin-top:.5em!important;margin-bottom:.5em!important}.entry-content li{list-style:square!important;line-height:200%}.entry-content .post ol>li,.entry-content ol>li{list-style:decimal!important}.entry-content blockquote{border-left-color:#f7ebde}.entry-content a{text-decoration:underline;color:#bd8242}.entry-content h1 a{text-decoration:none;color:#333}.entry-content>article>table>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.entry-content>article>table>tbody>tr>td,.entry-content>article>table>tbody>tr>th,.entry-content>article>table>tfoot>tr>td,.entry-content>article>table>tfoot>tr>th,.entry-content>article>table>thead>tr>td,.entry-content>article>table>thead>tr>th{padding:8px;vertical-align:top;border-top:1px solid #ddd}.entry-content>article>table>tbody>tr:first-of-type>td{border-top-width:0}.entry-content>article>table>tbody>tr:hover{background-color:#f5f5f5}#main .post>h3{display:none}#Blog1_backlinks-container .comment-footer{margin-top:10px}#footer_bar_body{background:transparent}.about-me .description{line-height:1.5em}.about-me .about-link{padding-bottom:1.5em}#sidebar .about-me h3{margin-top:1em;margin-bottom:.5em}#sidebar .about-me .description{margin-bottom:2em}#sidebar .about-link .read-more{float:right;display:inline-block;padding-left:10px;padding-right:10px;margin-left:5px;margin-top:0}#sidebar .about-link .social-button-wrapper{margin-top:4px;display:inline-block}.about-me .social-media{margin-top:.5em;text-align:center;clear:both}.about-me .email-subscribe{text-align:center}.about-me .widget-content{margin:0 1em}.fb-fan-page .widget-content{text-align:center}.about-me .email-subscribe td:first-of-type{text-align:left;padding-top:.7em}.about-me .email-subscribe .follow-by-email-address{width:95%}.donation input[type=image]{margin-top:10px;margin-right:10px}#footerbar-popular-post .popular-posts>ul>dd{display:none}#footerbar-popular-post .popular-posts>ul>dd:first-of-type,#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(2),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(3),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(4),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(5){display:block}.popular-posts{padding-bottom:.5em}@media (max-width:979px){#footer_bar{display:none}}.widget-content.popular-posts dd{margin-bottom:.5em;clear:both}.widget-content.popular-posts img{float:left}h1.title{font-size:30px}#header-inner .descriptionwrapper{font-size:14px}div.post-avatar{display:none}#content #archivespage ul,.meta{margin-left:0!important}#content #archivespage li.archivedate{list-style:none!important}.container1{width:100%!important}#footer .management{clear:both}@media (max-width:979px){.navbar-inverse .navbar-inner{background:#2d2d2d}#header{margin-right:0}}@media (min-width:480px) and (max-width:767px){.entry-container .entry-content{padding:50px 20px 50px 50px}}.entry-container .entry-content>p{text-indent:2em}.entry-container .entry-content a.more{font-weight:700;text-decoration:none}.site-footer .cloud-label-widget-content .label-size-1,.site-footer .cloud-label-widget-content .label-size-2{display:none}.site-footer .cloud-label-widget-content .btn{float:right;color:#000;margin-top:1em}@media (max-width:979px){div.donation{width:49.5%;float:left;margin-right:1%}.site-footer .cloud-label-widget-content .label-size-3{display:none}}.social-button{background-color:#d6d7d6;display:inline-block;width:33px;height:32px;line-height:33px;border-radius:16px;-o-transition:all .2s linear;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;transition:all .2s linear;cursor:pointer;text-align:center;text-decoration:none}.social-button.facebook:hover{color:#fff;background-color:#3165a5}.social-button.twitter:hover{color:#fff;background-color:#42aae7}.social-button.linkedin:hover{color:#fff;background-color:#0075b5}.social-button.plurk:hover{color:#fff;background-color:#ef4539}.social-button.line:hover{color:#fff;background-color:#4acf00}.social-button.google-plus:hover{color:#fff;background-color:#de4939}.social-button.chrome:hover{background-color:#42556b}.social-button.github:hover{color:#fff;background-color:#000}.social-button.android:hover{color:#fff;background-color:#a4c639}.social-button.chrome:hover{color:#fff;background-color:#4286f7}.social-button.rss:hover{color:#fff;background-color:#f78631}.social-button.addthis:hover{color:#fff;background-color:#ff5d39}@media (min-width:979px){.share-story-container li.line,.social-button.line{display:none}}@media (max-width:767px){div.share-story-container ul{margin:0}}.entry-meta.clearfix .share-story-container .about{display:none}.share-story-container ul{text-align:right}.pager .previous.hidden{visibility:hidden}.pager li.link>span{width:6em}.navbar .nav{margin-right:0}.entry-content .gsib_a{padding-top:0}.entry-content .gsc-input-box{height:auto}.entry-content .gsc-search-button{display:block!important}.entry-content input.gsc-search-button{height:13px;width:13px;min-width:0;border-radius:.5em;padding:13px;margin:0}a[name=more]:target,a[name][id]:target{margin-top:-60px;position:absolute}a#comment-form-anchor:target{margin-top:-300px}#masthead a[accesskey],.site-footer a[accesskey]{color:#fff}#masthead a[accesskey].accesskey-menu{float:left}.site-footer .container{padding-top:0!important}#masthead.fixed-nav li>a.accesskey-menu,.navbar .nav>li>a.accesskey-menu{padding-left:0;padding-right:0}.entry-content .post-btn{text-decoration:none!important;font-size:1em;padding:.5em}.entry-content .post-btn.btn-primary{color:#fff}.btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,.2)}.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}.btn-social-icon{position:relative;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding:0}.btn-social-icon>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;border-right:1px solid rgba(0,0,0,.2)}.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}.btn-social-icon>:first-child{border:none;text-align:center;width:100%!important}.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}.btn-adn{color:#fff;background-color:#d87a68;border-color:rgba(0,0,0,.2)}.btn-adn.active,.btn-adn.focus,.btn-adn:active,.btn-adn:focus,.btn-adn:hover,.open>.dropdown-toggle.btn-adn{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,.2)}.btn-adn.active.focus,.btn-adn.active:focus,.btn-adn.active:hover,.btn-adn:active.focus,.btn-adn:active:focus,.btn-adn:active:hover,.open>.dropdown-toggle.btn-adn.focus,.open>.dropdown-toggle.btn-adn:focus,.open>.dropdown-toggle.btn-adn:hover{color:#fff;background-color:#b94630;border-color:rgba(0,0,0,.2)}.btn-adn.active,.btn-adn:active,.open>.dropdown-toggle.btn-adn{background-image:none}.btn-adn.disabled,.btn-adn.disabled.active,.btn-adn.disabled.focus,.btn-adn.disabled:active,.btn-adn.disabled:focus,.btn-adn.disabled:hover,.btn-adn[disabled],.btn-adn[disabled].active,.btn-adn[disabled].focus,.btn-adn[disabled]:active,.btn-adn[disabled]:focus,.btn-adn[disabled]:hover,fieldset[disabled] .btn-adn,fieldset[disabled] .btn-adn.active,fieldset[disabled] .btn-adn.focus,fieldset[disabled] .btn-adn:active,fieldset[disabled] .btn-adn:focus,fieldset[disabled] .btn-adn:hover{background-color:#d87a68;border-color:rgba(0,0,0,.2)}.btn-adn .badge{color:#d87a68;background-color:#fff}.btn-bitbucket{color:#fff;background-color:#205081;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active,.btn-bitbucket.focus,.btn-bitbucket:active,.btn-bitbucket:focus,.btn-bitbucket:hover,.open>.dropdown-toggle.btn-bitbucket{color:#fff;background-color:#163758;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active.focus,.btn-bitbucket.active:focus,.btn-bitbucket.active:hover,.btn-bitbucket:active.focus,.btn-bitbucket:active:focus,.btn-bitbucket:active:hover,.open>.dropdown-toggle.btn-bitbucket.focus,.open>.dropdown-toggle.btn-bitbucket:focus,.open>.dropdown-toggle.btn-bitbucket:hover{color:#fff;background-color:#0f253c;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active,.btn-bitbucket:active,.open>.dropdown-toggle.btn-bitbucket{background-image:none}.btn-bitbucket.disabled,.btn-bitbucket.disabled.active,.btn-bitbucket.disabled.focus,.btn-bitbucket.disabled:active,.btn-bitbucket.disabled:focus,.btn-bitbucket.disabled:hover,.btn-bitbucket[disabled],.btn-bitbucket[disabled].active,.btn-bitbucket[disabled].focus,.btn-bitbucket[disabled]:active,.btn-bitbucket[disabled]:focus,.btn-bitbucket[disabled]:hover,fieldset[disabled] .btn-bitbucket,fieldset[disabled] .btn-bitbucket.active,fieldset[disabled] .btn-bitbucket.focus,fieldset[disabled] .btn-bitbucket:active,fieldset[disabled] .btn-bitbucket:focus,fieldset[disabled] .btn-bitbucket:hover{background-color:#205081;border-color:rgba(0,0,0,.2)}.btn-bitbucket .badge{color:#205081;background-color:#fff}.btn-dropbox{color:#fff;background-color:#1087dd;border-color:rgba(0,0,0,.2)}.btn-dropbox.active,.btn-dropbox.focus,.btn-dropbox:active,.btn-dropbox:focus,.btn-dropbox:hover,.open>.dropdown-toggle.btn-dropbox{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,.2)}.btn-dropbox.active.focus,.btn-dropbox.active:focus,.btn-dropbox.active:hover,.btn-dropbox:active.focus,.btn-dropbox:active:focus,.btn-dropbox:active:hover,.open>.dropdown-toggle.btn-dropbox.focus,.open>.dropdown-toggle.btn-dropbox:focus,.open>.dropdown-toggle.btn-dropbox:hover{color:#fff;background-color:#0a568c;border-color:rgba(0,0,0,.2)}.btn-dropbox.active,.btn-dropbox:active,.open>.dropdown-toggle.btn-dropbox{background-image:none}.btn-dropbox.disabled,.btn-dropbox.disabled.active,.btn-dropbox.disabled.focus,.btn-dropbox.disabled:active,.btn-dropbox.disabled:focus,.btn-dropbox.disabled:hover,.btn-dropbox[disabled],.btn-dropbox[disabled].active,.btn-dropbox[disabled].focus,.btn-dropbox[disabled]:active,.btn-dropbox[disabled]:focus,.btn-dropbox[disabled]:hover,fieldset[disabled] .btn-dropbox,fieldset[disabled] .btn-dropbox.active,fieldset[disabled] .btn-dropbox.focus,fieldset[disabled] .btn-dropbox:active,fieldset[disabled] .btn-dropbox:focus,fieldset[disabled] .btn-dropbox:hover{background-color:#1087dd;border-color:rgba(0,0,0,.2)}.btn-dropbox .badge{color:#1087dd;background-color:#fff}.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,.2)}.btn-facebook.active,.btn-facebook.focus,.btn-facebook:active,.btn-facebook:focus,.btn-facebook:hover,.open>.dropdown-toggle.btn-facebook{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,.2)}.btn-facebook.active.focus,.btn-facebook.active:focus,.btn-facebook.active:hover,.btn-facebook:active.focus,.btn-facebook:active:focus,.btn-facebook:active:hover,.open>.dropdown-toggle.btn-facebook.focus,.open>.dropdown-toggle.btn-facebook:focus,.open>.dropdown-toggle.btn-facebook:hover{color:#fff;background-color:#23345a;border-color:rgba(0,0,0,.2)}.btn-facebook.active,.btn-facebook:active,.open>.dropdown-toggle.btn-facebook{background-image:none}.btn-facebook.disabled,.btn-facebook.disabled.active,.btn-facebook.disabled.focus,.btn-facebook.disabled:active,.btn-facebook.disabled:focus,.btn-facebook.disabled:hover,.btn-facebook[disabled],.btn-facebook[disabled].active,.btn-facebook[disabled].focus,.btn-facebook[disabled]:active,.btn-facebook[disabled]:focus,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook,fieldset[disabled] .btn-facebook.active,fieldset[disabled] .btn-facebook.focus,fieldset[disabled] .btn-facebook:active,fieldset[disabled] .btn-facebook:focus,fieldset[disabled] .btn-facebook:hover{background-color:#3b5998;border-color:rgba(0,0,0,.2)}.btn-facebook .badge{color:#3b5998;background-color:#fff}.btn-flickr{color:#fff;background-color:#ff0084;border-color:rgba(0,0,0,.2)}.btn-flickr.active,.btn-flickr.focus,.btn-flickr:active,.btn-flickr:focus,.btn-flickr:hover,.open>.dropdown-toggle.btn-flickr{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,.2)}.btn-flickr.active.focus,.btn-flickr.active:focus,.btn-flickr.active:hover,.btn-flickr:active.focus,.btn-flickr:active:focus,.btn-flickr:active:hover,.open>.dropdown-toggle.btn-flickr.focus,.open>.dropdown-toggle.btn-flickr:focus,.open>.dropdown-toggle.btn-flickr:hover{color:#fff;background-color:#a80057;border-color:rgba(0,0,0,.2)}.btn-flickr.active,.btn-flickr:active,.open>.dropdown-toggle.btn-flickr{background-image:none}.btn-flickr.disabled,.btn-flickr.disabled.active,.btn-flickr.disabled.focus,.btn-flickr.disabled:active,.btn-flickr.disabled:focus,.btn-flickr.disabled:hover,.btn-flickr[disabled],.btn-flickr[disabled].active,.btn-flickr[disabled].focus,.btn-flickr[disabled]:active,.btn-flickr[disabled]:focus,.btn-flickr[disabled]:hover,fieldset[disabled] .btn-flickr,fieldset[disabled] .btn-flickr.active,fieldset[disabled] .btn-flickr.focus,fieldset[disabled] .btn-flickr:active,fieldset[disabled] .btn-flickr:focus,fieldset[disabled] .btn-flickr:hover{background-color:#ff0084;border-color:rgba(0,0,0,.2)}.btn-flickr .badge{color:#ff0084;background-color:#fff}.btn-foursquare{color:#fff;background-color:#f94877;border-color:rgba(0,0,0,.2)}.btn-foursquare.active,.btn-foursquare.focus,.btn-foursquare:active,.btn-foursquare:focus,.btn-foursquare:hover,.open>.dropdown-toggle.btn-foursquare{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,.2)}.btn-foursquare.active.focus,.btn-foursquare.active:focus,.btn-foursquare.active:hover,.btn-foursquare:active.focus,.btn-foursquare:active:focus,.btn-foursquare:active:hover,.open>.dropdown-toggle.btn-foursquare.focus,.open>.dropdown-toggle.btn-foursquare:focus,.open>.dropdown-toggle.btn-foursquare:hover{color:#fff;background-color:#e30742;border-color:rgba(0,0,0,.2)}.btn-foursquare.active,.btn-foursquare:active,.open>.dropdown-toggle.btn-foursquare{background-image:none}.btn-foursquare.disabled,.btn-foursquare.disabled.active,.btn-foursquare.disabled.focus,.btn-foursquare.disabled:active,.btn-foursquare.disabled:focus,.btn-foursquare.disabled:hover,.btn-foursquare[disabled],.btn-foursquare[disabled].active,.btn-foursquare[disabled].focus,.btn-foursquare[disabled]:active,.btn-foursquare[disabled]:focus,.btn-foursquare[disabled]:hover,fieldset[disabled] .btn-foursquare,fieldset[disabled] .btn-foursquare.active,fieldset[disabled] .btn-foursquare.focus,fieldset[disabled] .btn-foursquare:active,fieldset[disabled] .btn-foursquare:focus,fieldset[disabled] .btn-foursquare:hover{background-color:#f94877;border-color:rgba(0,0,0,.2)}.btn-foursquare .badge{color:#f94877;background-color:#fff}.btn-github{color:#fff;background-color:#444;border-color:rgba(0,0,0,.2)}.btn-github.active,.btn-github.focus,.btn-github:active,.btn-github:focus,.btn-github:hover,.open>.dropdown-toggle.btn-github{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,.2)}.btn-github.active.focus,.btn-github.active:focus,.btn-github.active:hover,.btn-github:active.focus,.btn-github:active:focus,.btn-github:active:hover,.open>.dropdown-toggle.btn-github.focus,.open>.dropdown-toggle.btn-github:focus,.open>.dropdown-toggle.btn-github:hover{color:#fff;background-color:#191919;border-color:rgba(0,0,0,.2)}.btn-github.active,.btn-github:active,.open>.dropdown-toggle.btn-github{background-image:none}.btn-github.disabled,.btn-github.disabled.active,.btn-github.disabled.focus,.btn-github.disabled:active,.btn-github.disabled:focus,.btn-github.disabled:hover,.btn-github[disabled],.btn-github[disabled].active,.btn-github[disabled].focus,.btn-github[disabled]:active,.btn-github[disabled]:focus,.btn-github[disabled]:hover,fieldset[disabled] .btn-github,fieldset[disabled] .btn-github.active,fieldset[disabled] .btn-github.focus,fieldset[disabled] .btn-github:active,fieldset[disabled] .btn-github:focus,fieldset[disabled] .btn-github:hover{background-color:#444;border-color:rgba(0,0,0,.2)}.btn-github .badge{color:#444;background-color:#fff}.btn-google{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,.2)}.btn-google.active,.btn-google.focus,.btn-google:active,.btn-google:focus,.btn-google:hover,.open>.dropdown-toggle.btn-google{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,.2)}.btn-google.active.focus,.btn-google.active:focus,.btn-google.active:hover,.btn-google:active.focus,.btn-google:active:focus,.btn-google:active:hover,.open>.dropdown-toggle.btn-google.focus,.open>.dropdown-toggle.btn-google:focus,.open>.dropdown-toggle.btn-google:hover{color:#fff;background-color:#a32b1c;border-color:rgba(0,0,0,.2)}.btn-google.active,.btn-google:active,.open>.dropdown-toggle.btn-google{background-image:none}.btn-google.disabled,.btn-google.disabled.active,.btn-google.disabled.focus,.btn-google.disabled:active,.btn-google.disabled:focus,.btn-google.disabled:hover,.btn-google[disabled],.btn-google[disabled].active,.btn-google[disabled].focus,.btn-google[disabled]:active,.btn-google[disabled]:focus,.btn-google[disabled]:hover,fieldset[disabled] .btn-google,fieldset[disabled] .btn-google.active,fieldset[disabled] .btn-google.focus,fieldset[disabled] .btn-google:active,fieldset[disabled] .btn-google:focus,fieldset[disabled] .btn-google:hover{background-color:#dd4b39;border-color:rgba(0,0,0,.2)}.btn-google .badge{color:#dd4b39;background-color:#fff}.btn-instagram{color:#fff;background-color:#3f729b;border-color:rgba(0,0,0,.2)}.btn-instagram.active,.btn-instagram.focus,.btn-instagram:active,.btn-instagram:focus,.btn-instagram:hover,.open>.dropdown-toggle.btn-instagram{color:#fff;background-color:#305777;border-color:rgba(0,0,0,.2)}.btn-instagram.active.focus,.btn-instagram.active:focus,.btn-instagram.active:hover,.btn-instagram:active.focus,.btn-instagram:active:focus,.btn-instagram:active:hover,.open>.dropdown-toggle.btn-instagram.focus,.open>.dropdown-toggle.btn-instagram:focus,.open>.dropdown-toggle.btn-instagram:hover{color:#fff;background-color:#26455d;border-color:rgba(0,0,0,.2)}.btn-instagram.active,.btn-instagram:active,.open>.dropdown-toggle.btn-instagram{background-image:none}.btn-instagram.disabled,.btn-instagram.disabled.active,.btn-instagram.disabled.focus,.btn-instagram.disabled:active,.btn-instagram.disabled:focus,.btn-instagram.disabled:hover,.btn-instagram[disabled],.btn-instagram[disabled].active,.btn-instagram[disabled].focus,.btn-instagram[disabled]:active,.btn-instagram[disabled]:focus,.btn-instagram[disabled]:hover,fieldset[disabled] .btn-instagram,fieldset[disabled] .btn-instagram.active,fieldset[disabled] .btn-instagram.focus,fieldset[disabled] .btn-instagram:active,fieldset[disabled] .btn-instagram:focus,fieldset[disabled] .btn-instagram:hover{background-color:#3f729b;border-color:rgba(0,0,0,.2)}.btn-instagram .badge{color:#3f729b;background-color:#fff}.btn-linkedin{color:#fff;background-color:#007bb6;border-color:rgba(0,0,0,.2)}.btn-linkedin.active,.btn-linkedin.focus,.btn-linkedin:active,.btn-linkedin:focus,.btn-linkedin:hover,.open>.dropdown-toggle.btn-linkedin{color:#fff;background-color:#005983;border-color:rgba(0,0,0,.2)}.btn-linkedin.active.focus,.btn-linkedin.active:focus,.btn-linkedin.active:hover,.btn-linkedin:active.focus,.btn-linkedin:active:focus,.btn-linkedin:active:hover,.open>.dropdown-toggle.btn-linkedin.focus,.open>.dropdown-toggle.btn-linkedin:focus,.open>.dropdown-toggle.btn-linkedin:hover{color:#fff;background-color:#00405f;border-color:rgba(0,0,0,.2)}.btn-linkedin.active,.btn-linkedin:active,.open>.dropdown-toggle.btn-linkedin{background-image:none}.btn-linkedin.disabled,.btn-linkedin.disabled.active,.btn-linkedin.disabled.focus,.btn-linkedin.disabled:active,.btn-linkedin.disabled:focus,.btn-linkedin.disabled:hover,.btn-linkedin[disabled],.btn-linkedin[disabled].active,.btn-linkedin[disabled].focus,.btn-linkedin[disabled]:active,.btn-linkedin[disabled]:focus,.btn-linkedin[disabled]:hover,fieldset[disabled] .btn-linkedin,fieldset[disabled] .btn-linkedin.active,fieldset[disabled] .btn-linkedin.focus,fieldset[disabled] .btn-linkedin:active,fieldset[disabled] .btn-linkedin:focus,fieldset[disabled] .btn-linkedin:hover{background-color:#007bb6;border-color:rgba(0,0,0,.2)}.btn-linkedin .badge{color:#007bb6;background-color:#fff}.btn-microsoft{color:#fff;background-color:#2672ec;border-color:rgba(0,0,0,.2)}.btn-microsoft.active,.btn-microsoft.focus,.btn-microsoft:active,.btn-microsoft:focus,.btn-microsoft:hover,.open>.dropdown-toggle.btn-microsoft{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,.2)}.btn-microsoft.active.focus,.btn-microsoft.active:focus,.btn-microsoft.active:hover,.btn-microsoft:active.focus,.btn-microsoft:active:focus,.btn-microsoft:active:hover,.open>.dropdown-toggle.btn-microsoft.focus,.open>.dropdown-toggle.btn-microsoft:focus,.open>.dropdown-toggle.btn-microsoft:hover{color:#fff;background-color:#0f4bac;border-color:rgba(0,0,0,.2)}.btn-microsoft.active,.btn-microsoft:active,.open>.dropdown-toggle.btn-microsoft{background-image:none}.btn-microsoft.disabled,.btn-microsoft.disabled.active,.btn-microsoft.disabled.focus,.btn-microsoft.disabled:active,.btn-microsoft.disabled:focus,.btn-microsoft.disabled:hover,.btn-microsoft[disabled],.btn-microsoft[disabled].active,.btn-microsoft[disabled].focus,.btn-microsoft[disabled]:active,.btn-microsoft[disabled]:focus,.btn-microsoft[disabled]:hover,fieldset[disabled] .btn-microsoft,fieldset[disabled] .btn-microsoft.active,fieldset[disabled] .btn-microsoft.focus,fieldset[disabled] .btn-microsoft:active,fieldset[disabled] .btn-microsoft:focus,fieldset[disabled] .btn-microsoft:hover{background-color:#2672ec;border-color:rgba(0,0,0,.2)}.btn-microsoft .badge{color:#2672ec;background-color:#fff}.btn-odnoklassniki{color:#fff;background-color:#f4731c;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active,.btn-odnoklassniki.focus,.btn-odnoklassniki:active,.btn-odnoklassniki:focus,.btn-odnoklassniki:hover,.open>.dropdown-toggle.btn-odnoklassniki{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active.focus,.btn-odnoklassniki.active:focus,.btn-odnoklassniki.active:hover,.btn-odnoklassniki:active.focus,.btn-odnoklassniki:active:focus,.btn-odnoklassniki:active:hover,.open>.dropdown-toggle.btn-odnoklassniki.focus,.open>.dropdown-toggle.btn-odnoklassniki:focus,.open>.dropdown-toggle.btn-odnoklassniki:hover{color:#fff;background-color:#b14c09;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active,.btn-odnoklassniki:active,.open>.dropdown-toggle.btn-odnoklassniki{background-image:none}.btn-odnoklassniki.disabled,.btn-odnoklassniki.disabled.active,.btn-odnoklassniki.disabled.focus,.btn-odnoklassniki.disabled:active,.btn-odnoklassniki.disabled:focus,.btn-odnoklassniki.disabled:hover,.btn-odnoklassniki[disabled],.btn-odnoklassniki[disabled].active,.btn-odnoklassniki[disabled].focus,.btn-odnoklassniki[disabled]:active,.btn-odnoklassniki[disabled]:focus,.btn-odnoklassniki[disabled]:hover,fieldset[disabled] .btn-odnoklassniki,fieldset[disabled] .btn-odnoklassniki.active,fieldset[disabled] .btn-odnoklassniki.focus,fieldset[disabled] .btn-odnoklassniki:active,fieldset[disabled] .btn-odnoklassniki:focus,fieldset[disabled] .btn-odnoklassniki:hover{background-color:#f4731c;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki .badge{color:#f4731c;background-color:#fff}.btn-openid{color:#fff;background-color:#f7931e;border-color:rgba(0,0,0,.2)}.btn-openid.active,.btn-openid.focus,.btn-openid:active,.btn-openid:focus,.btn-openid:hover,.open>.dropdown-toggle.btn-openid{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,.2)}.btn-openid.active.focus,.btn-openid.active:focus,.btn-openid.active:hover,.btn-openid:active.focus,.btn-openid:active:focus,.btn-openid:active:hover,.open>.dropdown-toggle.btn-openid.focus,.open>.dropdown-toggle.btn-openid:focus,.open>.dropdown-toggle.btn-openid:hover{color:#fff;background-color:#b86607;border-color:rgba(0,0,0,.2)}.btn-openid.active,.btn-openid:active,.open>.dropdown-toggle.btn-openid{background-image:none}.btn-openid.disabled,.btn-openid.disabled.active,.btn-openid.disabled.focus,.btn-openid.disabled:active,.btn-openid.disabled:focus,.btn-openid.disabled:hover,.btn-openid[disabled],.btn-openid[disabled].active,.btn-openid[disabled].focus,.btn-openid[disabled]:active,.btn-openid[disabled]:focus,.btn-openid[disabled]:hover,fieldset[disabled] .btn-openid,fieldset[disabled] .btn-openid.active,fieldset[disabled] .btn-openid.focus,fieldset[disabled] .btn-openid:active,fieldset[disabled] .btn-openid:focus,fieldset[disabled] .btn-openid:hover{background-color:#f7931e;border-color:rgba(0,0,0,.2)}.btn-openid .badge{color:#f7931e;background-color:#fff}.btn-pinterest{color:#fff;background-color:#cb2027;border-color:rgba(0,0,0,.2)}.btn-pinterest.active,.btn-pinterest.focus,.btn-pinterest:active,.btn-pinterest:focus,.btn-pinterest:hover,.open>.dropdown-toggle.btn-pinterest{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,.2)}.btn-pinterest.active.focus,.btn-pinterest.active:focus,.btn-pinterest.active:hover,.btn-pinterest:active.focus,.btn-pinterest:active:focus,.btn-pinterest:active:hover,.open>.dropdown-toggle.btn-pinterest.focus,.open>.dropdown-toggle.btn-pinterest:focus,.open>.dropdown-toggle.btn-pinterest:hover{color:#fff;background-color:#801419;border-color:rgba(0,0,0,.2)}.btn-pinterest.active,.btn-pinterest:active,.open>.dropdown-toggle.btn-pinterest{background-image:none}.btn-pinterest.disabled,.btn-pinterest.disabled.active,.btn-pinterest.disabled.focus,.btn-pinterest.disabled:active,.btn-pinterest.disabled:focus,.btn-pinterest.disabled:hover,.btn-pinterest[disabled],.btn-pinterest[disabled].active,.btn-pinterest[disabled].focus,.btn-pinterest[disabled]:active,.btn-pinterest[disabled]:focus,.btn-pinterest[disabled]:hover,fieldset[disabled] .btn-pinterest,fieldset[disabled] .btn-pinterest.active,fieldset[disabled] .btn-pinterest.focus,fieldset[disabled] .btn-pinterest:active,fieldset[disabled] .btn-pinterest:focus,fieldset[disabled] .btn-pinterest:hover{background-color:#cb2027;border-color:rgba(0,0,0,.2)}.btn-pinterest .badge{color:#cb2027;background-color:#fff}.btn-reddit{color:#000;background-color:#eff7ff;border-color:rgba(0,0,0,.2)}.btn-reddit.active,.btn-reddit.focus,.btn-reddit:active,.btn-reddit:focus,.btn-reddit:hover,.open>.dropdown-toggle.btn-reddit{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,.2)}.btn-reddit.active.focus,.btn-reddit.active:focus,.btn-reddit.active:hover,.btn-reddit:active.focus,.btn-reddit:active:focus,.btn-reddit:active:hover,.open>.dropdown-toggle.btn-reddit.focus,.open>.dropdown-toggle.btn-reddit:focus,.open>.dropdown-toggle.btn-reddit:hover{color:#000;background-color:#98ccff;border-color:rgba(0,0,0,.2)}.btn-reddit.active,.btn-reddit:active,.open>.dropdown-toggle.btn-reddit{background-image:none}.btn-reddit.disabled,.btn-reddit.disabled.active,.btn-reddit.disabled.focus,.btn-reddit.disabled:active,.btn-reddit.disabled:focus,.btn-reddit.disabled:hover,.btn-reddit[disabled],.btn-reddit[disabled].active,.btn-reddit[disabled].focus,.btn-reddit[disabled]:active,.btn-reddit[disabled]:focus,.btn-reddit[disabled]:hover,fieldset[disabled] .btn-reddit,fieldset[disabled] .btn-reddit.active,fieldset[disabled] .btn-reddit.focus,fieldset[disabled] .btn-reddit:active,fieldset[disabled] .btn-reddit:focus,fieldset[disabled] .btn-reddit:hover{background-color:#eff7ff;border-color:rgba(0,0,0,.2)}.btn-reddit .badge{color:#eff7ff;background-color:#000}.btn-soundcloud{color:#fff;background-color:#f50;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active,.btn-soundcloud.focus,.btn-soundcloud:active,.btn-soundcloud:focus,.btn-soundcloud:hover,.open>.dropdown-toggle.btn-soundcloud{color:#fff;background-color:#c40;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active.focus,.btn-soundcloud.active:focus,.btn-soundcloud.active:hover,.btn-soundcloud:active.focus,.btn-soundcloud:active:focus,.btn-soundcloud:active:hover,.open>.dropdown-toggle.btn-soundcloud.focus,.open>.dropdown-toggle.btn-soundcloud:focus,.open>.dropdown-toggle.btn-soundcloud:hover{color:#fff;background-color:#a83800;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active,.btn-soundcloud:active,.open>.dropdown-toggle.btn-soundcloud{background-image:none}.btn-soundcloud.disabled,.btn-soundcloud.disabled.active,.btn-soundcloud.disabled.focus,.btn-soundcloud.disabled:active,.btn-soundcloud.disabled:focus,.btn-soundcloud.disabled:hover,.btn-soundcloud[disabled],.btn-soundcloud[disabled].active,.btn-soundcloud[disabled].focus,.btn-soundcloud[disabled]:active,.btn-soundcloud[disabled]:focus,.btn-soundcloud[disabled]:hover,fieldset[disabled] .btn-soundcloud,fieldset[disabled] .btn-soundcloud.active,fieldset[disabled] .btn-soundcloud.focus,fieldset[disabled] .btn-soundcloud:active,fieldset[disabled] .btn-soundcloud:focus,fieldset[disabled] .btn-soundcloud:hover{background-color:#f50;border-color:rgba(0,0,0,.2)}.btn-soundcloud .badge{color:#f50;background-color:#fff}.btn-tumblr{color:#fff;background-color:#2c4762;border-color:rgba(0,0,0,.2)}.btn-tumblr.active,.btn-tumblr.focus,.btn-tumblr:active,.btn-tumblr:focus,.btn-tumblr:hover,.open>.dropdown-toggle.btn-tumblr{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,.2)}.btn-tumblr.active.focus,.btn-tumblr.active:focus,.btn-tumblr.active:hover,.btn-tumblr:active.focus,.btn-tumblr:active:focus,.btn-tumblr:active:hover,.open>.dropdown-toggle.btn-tumblr.focus,.open>.dropdown-toggle.btn-tumblr:focus,.open>.dropdown-toggle.btn-tumblr:hover{color:#fff;background-color:#111c26;border-color:rgba(0,0,0,.2)}.btn-tumblr.active,.btn-tumblr:active,.open>.dropdown-toggle.btn-tumblr{background-image:none}.btn-tumblr.disabled,.btn-tumblr.disabled.active,.btn-tumblr.disabled.focus,.btn-tumblr.disabled:active,.btn-tumblr.disabled:focus,.btn-tumblr.disabled:hover,.btn-tumblr[disabled],.btn-tumblr[disabled].active,.btn-tumblr[disabled].focus,.btn-tumblr[disabled]:active,.btn-tumblr[disabled]:focus,.btn-tumblr[disabled]:hover,fieldset[disabled] .btn-tumblr,fieldset[disabled] .btn-tumblr.active,fieldset[disabled] .btn-tumblr.focus,fieldset[disabled] .btn-tumblr:active,fieldset[disabled] .btn-tumblr:focus,fieldset[disabled] .btn-tumblr:hover{background-color:#2c4762;border-color:rgba(0,0,0,.2)}.btn-tumblr .badge{color:#2c4762;background-color:#fff}.btn-twitter{color:#fff;background-color:#55acee;border-color:rgba(0,0,0,.2)}.btn-twitter.active,.btn-twitter.focus,.btn-twitter:active,.btn-twitter:focus,.btn-twitter:hover,.open>.dropdown-toggle.btn-twitter{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,.2)}.btn-twitter.active.focus,.btn-twitter.active:focus,.btn-twitter.active:hover,.btn-twitter:active.focus,.btn-twitter:active:focus,.btn-twitter:active:hover,.open>.dropdown-toggle.btn-twitter.focus,.open>.dropdown-toggle.btn-twitter:focus,.open>.dropdown-toggle.btn-twitter:hover{color:#fff;background-color:#1583d7;border-color:rgba(0,0,0,.2)}.btn-twitter.active,.btn-twitter:active,.open>.dropdown-toggle.btn-twitter{background-image:none}.btn-twitter.disabled,.btn-twitter.disabled.active,.btn-twitter.disabled.focus,.btn-twitter.disabled:active,.btn-twitter.disabled:focus,.btn-twitter.disabled:hover,.btn-twitter[disabled],.btn-twitter[disabled].active,.btn-twitter[disabled].focus,.btn-twitter[disabled]:active,.btn-twitter[disabled]:focus,.btn-twitter[disabled]:hover,fieldset[disabled] .btn-twitter,fieldset[disabled] .btn-twitter.active,fieldset[disabled] .btn-twitter.focus,fieldset[disabled] .btn-twitter:active,fieldset[disabled] .btn-twitter:focus,fieldset[disabled] .btn-twitter:hover{background-color:#55acee;border-color:rgba(0,0,0,.2)}.btn-twitter .badge{color:#55acee;background-color:#fff}.btn-vimeo{color:#fff;background-color:#1ab7ea;border-color:rgba(0,0,0,.2)}.btn-vimeo.active,.btn-vimeo.focus,.btn-vimeo:active,.btn-vimeo:focus,.btn-vimeo:hover,.open>.dropdown-toggle.btn-vimeo{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,.2)}.btn-vimeo.active.focus,.btn-vimeo.active:focus,.btn-vimeo.active:hover,.btn-vimeo:active.focus,.btn-vimeo:active:focus,.btn-vimeo:active:hover,.open>.dropdown-toggle.btn-vimeo.focus,.open>.dropdown-toggle.btn-vimeo:focus,.open>.dropdown-toggle.btn-vimeo:hover{color:#fff;background-color:#0f7b9f;border-color:rgba(0,0,0,.2)}.btn-vimeo.active,.btn-vimeo:active,.open>.dropdown-toggle.btn-vimeo{background-image:none}.btn-vimeo.disabled,.btn-vimeo.disabled.active,.btn-vimeo.disabled.focus,.btn-vimeo.disabled:active,.btn-vimeo.disabled:focus,.btn-vimeo.disabled:hover,.btn-vimeo[disabled],.btn-vimeo[disabled].active,.btn-vimeo[disabled].focus,.btn-vimeo[disabled]:active,.btn-vimeo[disabled]:focus,.btn-vimeo[disabled]:hover,fieldset[disabled] .btn-vimeo,fieldset[disabled] .btn-vimeo.active,fieldset[disabled] .btn-vimeo.focus,fieldset[disabled] .btn-vimeo:active,fieldset[disabled] .btn-vimeo:focus,fieldset[disabled] .btn-vimeo:hover{background-color:#1ab7ea;border-color:rgba(0,0,0,.2)}.btn-vimeo .badge{color:#1ab7ea;background-color:#fff}.btn-vk{color:#fff;background-color:#587ea3;border-color:rgba(0,0,0,.2)}.btn-vk.active,.btn-vk.focus,.btn-vk:active,.btn-vk:focus,.btn-vk:hover,.open>.dropdown-toggle.btn-vk{color:#fff;background-color:#466482;border-color:rgba(0,0,0,.2)}.btn-vk.active.focus,.btn-vk.active:focus,.btn-vk.active:hover,.btn-vk:active.focus,.btn-vk:active:focus,.btn-vk:active:hover,.open>.dropdown-toggle.btn-vk.focus,.open>.dropdown-toggle.btn-vk:focus,.open>.dropdown-toggle.btn-vk:hover{color:#fff;background-color:#3a526b;border-color:rgba(0,0,0,.2)}.btn-vk.active,.btn-vk:active,.open>.dropdown-toggle.btn-vk{background-image:none}.btn-vk.disabled,.btn-vk.disabled.active,.btn-vk.disabled.focus,.btn-vk.disabled:active,.btn-vk.disabled:focus,.btn-vk.disabled:hover,.btn-vk[disabled],.btn-vk[disabled].active,.btn-vk[disabled].focus,.btn-vk[disabled]:active,.btn-vk[disabled]:focus,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk,fieldset[disabled] .btn-vk.active,fieldset[disabled] .btn-vk.focus,fieldset[disabled] .btn-vk:active,fieldset[disabled] .btn-vk:focus,fieldset[disabled] .btn-vk:hover{background-color:#587ea3;border-color:rgba(0,0,0,.2)}.btn-vk .badge{color:#587ea3;background-color:#fff}.btn-yahoo{color:#fff;background-color:#720e9e;border-color:rgba(0,0,0,.2)}.btn-yahoo.active,.btn-yahoo.focus,.btn-yahoo:active,.btn-yahoo:focus,.btn-yahoo:hover,.open>.dropdown-toggle.btn-yahoo{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,.2)}.btn-yahoo.active.focus,.btn-yahoo.active:focus,.btn-yahoo.active:hover,.btn-yahoo:active.focus,.btn-yahoo:active:focus,.btn-yahoo:active:hover,.open>.dropdown-toggle.btn-yahoo.focus,.open>.dropdown-toggle.btn-yahoo:focus,.open>.dropdown-toggle.btn-yahoo:hover{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,.2)}.btn-yahoo.active,.btn-yahoo:active,.open>.dropdown-toggle.btn-yahoo{background-image:none}.btn-yahoo.disabled,.btn-yahoo.disabled.active,.btn-yahoo.disabled.focus,.btn-yahoo.disabled:active,.btn-yahoo.disabled:focus,.btn-yahoo.disabled:hover,.btn-yahoo[disabled],.btn-yahoo[disabled].active,.btn-yahoo[disabled].focus,.btn-yahoo[disabled]:active,.btn-yahoo[disabled]:focus,.btn-yahoo[disabled]:hover,fieldset[disabled] .btn-yahoo,fieldset[disabled] .btn-yahoo.active,fieldset[disabled] .btn-yahoo.focus,fieldset[disabled] .btn-yahoo:active,fieldset[disabled] .btn-yahoo:focus,fieldset[disabled] .btn-yahoo:hover{background-color:#720e9e;border-color:rgba(0,0,0,.2)}.btn-yahoo .badge{color:#720e9e;background-color:#fff}.btn-android{color:#fff;background-color:#558700;border-color:rgba(0,0,0,.2)}.btn-android.active,.btn-android.focus,.btn-android:active,.btn-android:focus,.btn-android:hover,.open>.dropdown-toggle.btn-android{color:#fff;background-color:#345300;border-color:rgba(0,0,0,.2)}.btn-android.active.focus,.btn-android.active:focus,.btn-android.active:hover,.btn-android:active.focus,.btn-android:active:focus,.btn-android:active:hover,.open>.dropdown-toggle.btn-android.focus,.open>.dropdown-toggle.btn-android:focus,.open>.dropdown-toggle.btn-android:hover{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,.2)}.btn-android.active,.btn-android:active,.open>.dropdown-toggle.btn-android{background-image:none}.btn-android.disabled,.btn-android.disabled.active,.btn-android.disabled.focus,.btn-android.disabled:active,.btn-android.disabled:focus,.btn-android.disabled:hover,.btn-android[disabled],.btn-android[disabled].active,.btn-android[disabled].focus,.btn-android[disabled]:active,.btn-android[disabled]:focus,.btn-android[disabled]:hover,fieldset[disabled] .btn-android,fieldset[disabled] .btn-android.active,fieldset[disabled] .btn-android.focus,fieldset[disabled] .btn-android:active,fieldset[disabled] .btn-android:focus,fieldset[disabled] .btn-android:hover{background-color:#558700;border-color:rgba(0,0,0,.2)}.btn-android .badge{color:#558700;background-color:#fff}.entry-content .btn:not(.btn-primary){background-image:none}.entry-content a.btn.btn-social{color:#fff;text-shadow:none;padding-top:0;padding-bottom:0}.entry-content a.btn.btn-social.btn-reddit{color:#000}.entry-content a.btn.btn-social:focus{padding-left:44px}.entry-content a.btn.btn-lg.btn-social{font-size:18px;line-height:45px}.entry-content a.btn.btn-lg.btn-social:focus{padding-left:61px}.entry-content a.btn{text-decoration:none}#sidebar .widget a.icon{float:right;line-height:40px;background:#fff;font-size:20px;font-weight:400;padding:10px 15px 0;color:#292929}.entry-content li,.entry-content p{color:#000}@media (max-width:979px){#header-inner{min-height:40px}}iframe#comment-editor{width:100%!important;height:250px}.post-avatar{background:url(//lh3.googleusercontent.com/-6qwdHih3tFk/Vv6N0dTaICI/AAAAAAACuRA/AsKTNm9c_Bg/s0/post-avatar.png)}.firstload-background{background:url(//2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;height:100%;left:0;position:fixed;top:0;width:100%;z-index:-1}.author-box{float:left;width:100%;padding:0}@media (max-width:480px){body{font-size:1rem}}", ""]);



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

/***/ 0:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/global-header/breeze-theme/font-awesome.css ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ./lib-for-link/src/global-header/go-top/go-top.less ./lib-for-link/src/global-header/go-top/go-top.js ./lib-for-link/src/global-header/sidebar/random_posts.less ./lib-for-link/src/global-header/sidebar/sidebar.less ./lib-for-link/src/global-header/sidebar/sidebar.js ./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ./lib-for-link/src/global-header/btn-navbar/btn-navbar.js ./lib-for-link/src/global-header/masthead/masthead.less ./lib-for-link/src/global-header/masthead/masthead.js ./lib-for-link/src/global-header/style/2_style.less ./lib-for-link/src/global-header/style/3_custom_style.less ./lib-for-link/src/global-header/style/header.less ./lib-for-link/src/global-header/style/addthis.css ./lib-for-link/src/global-header/style/index.less ./lib-for-link/src/global-header/style/footer.less ./lib-for-link/src/global-header/style/content.less ./lib-for-link/src/global-header/style/style.less ./lib-for-link/src/global-header/gsc-search/default.css ./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ./lib-for-link/src/global-header/gsc-search/gsc-search.js ./lib-for-link/src/global-header/modules/lscache/lscache.js ./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js ./lib-for-link/src/global-header/breeze-theme/breeze.js ./lib-for-link/src/global-header/script/google-analytics.js ./lib-for-link/src/global-header/script/facebook.js ./lib-for-link/src/global-header/script/env-variables.js ./lib-for-link/src/global-header/script/back-button.js ./lib-for-link/src/global-header/script/script.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/font-awesome.css */"./lib-for-link/src/global-header/breeze-theme/font-awesome.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css */"./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css */"./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/go-top/go-top.less */"./lib-for-link/src/global-header/go-top/go-top.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/go-top/go-top.js */"./lib-for-link/src/global-header/go-top/go-top.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/sidebar/random_posts.less */"./lib-for-link/src/global-header/sidebar/random_posts.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/sidebar/sidebar.less */"./lib-for-link/src/global-header/sidebar/sidebar.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/sidebar/sidebar.js */"./lib-for-link/src/global-header/sidebar/sidebar.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/btn-navbar/nav-collapse.less */"./lib-for-link/src/global-header/btn-navbar/nav-collapse.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/btn-navbar/btn-navbar.less */"./lib-for-link/src/global-header/btn-navbar/btn-navbar.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/btn-navbar/btn-navbar.js */"./lib-for-link/src/global-header/btn-navbar/btn-navbar.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/masthead/masthead.less */"./lib-for-link/src/global-header/masthead/masthead.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/masthead/masthead.js */"./lib-for-link/src/global-header/masthead/masthead.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/2_style.less */"./lib-for-link/src/global-header/style/2_style.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/3_custom_style.less */"./lib-for-link/src/global-header/style/3_custom_style.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/header.less */"./lib-for-link/src/global-header/style/header.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/addthis.css */"./lib-for-link/src/global-header/style/addthis.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/index.less */"./lib-for-link/src/global-header/style/index.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/footer.less */"./lib-for-link/src/global-header/style/footer.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/content.less */"./lib-for-link/src/global-header/style/content.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/style.less */"./lib-for-link/src/global-header/style/style.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/gsc-search/default.css */"./lib-for-link/src/global-header/gsc-search/default.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less */"./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less */"./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/gsc-search/gsc-search-result.less */"./lib-for-link/src/global-header/gsc-search/gsc-search-result.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/gsc-search/gsc-search.js */"./lib-for-link/src/global-header/gsc-search/gsc-search.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/modules/lscache/lscache.js */"./lib-for-link/src/global-header/modules/lscache/lscache.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js */"./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/breeze.js */"./lib-for-link/src/global-header/breeze-theme/breeze.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/script/google-analytics.js */"./lib-for-link/src/global-header/script/google-analytics.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/script/facebook.js */"./lib-for-link/src/global-header/script/facebook.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/script/env-variables.js */"./lib-for-link/src/global-header/script/env-variables.js");
__webpack_require__(/*! ./lib-for-link/src/global-header/script/back-button.js */"./lib-for-link/src/global-header/script/back-button.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/global-header/script/script.js */"./lib-for-link/src/global-header/script/script.js");


/***/ })

/******/ });
//# sourceMappingURL=global-header.js.map