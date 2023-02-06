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
/******/ 		"page": 0
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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/page/script/archives.js":
/*!**************************************************!*\
  !*** ./lib-for-link/src/page/script/archives.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ArchiveListUtils = {
  openListYear: function (callback) {
    console.log('openListYear')
    //$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) a.toggle:eq(0)").trigger("click")
    let li = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)")
    let zippy = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)")
    li.addClass("expanded").removeClass('collapsed')
    zippy.addClass('toggle-open').text('▼ ')
    
    if (typeof(callback) === 'function') {
      callback()
    }
  },
  openListMonth: function (callback) {
    //console.log('openListMonth')
    
    //let li = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate > ul.hierarchy > li.archivedate.collapsed")
    //console.log(111)
    this.openListYear(() => {
      //console.log(document.querySelectorAll("ul > li > ul > li.archivedate.collapsed > a.toggle").length)
      // 請溫柔地開它
      let aList = document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle")
      let loop = (i) => {
        if (i < aList.length) {
          aList[i].click()
          $(() => {
            setTimeout(() => {
              i++
              loop(i)
            }, 500)
          })
        }
        else {
          if (typeof(callback) === "function") {
            callback()
          }
        }
      }
      loop(0)
    })
  },
  displayConfiguration: function () {
    //console.log('displayConfiguration')
    let cacheKey = 'archivesCheckboxStatus'
    
    this.openListYear(() => {
      
      // -------------------------------
      
      let checkboxChange = function () {
        // 要先確認自己是位於那個階層
        let folderType = $(this).attr('data-folder-type')
        //console.log(folderType)
        
        if (folderType === 'year') {
          // 強迫它底下的所有checkbox都check
          //console.log(this.checked)
          //console.log($(this).find('.download-checkbox').length)
          /*
          let checked = 'checked'
          if (this.checked === false) {
            checked = false
          } 
          */
          let checkboxList = $(this).parent().find('ul > li > .download-checkbox')
          //console.log(checkboxList.length)
          //console.log(checked)
          checkboxList.prop('checked', this.checked)
        }
        else {
          // 檢查上面一層底下的所有狀態，有跟自己不一樣的就移除上層的打勾
          let yearLi = $(this).parent().parent().parent()
          //console.log(yearLi.prop('className'))
          let yearCheckbox = yearLi.children('.download-checkbox')
          
          let yearChecked = true
          yearLi.find('ul.hierarchy > li > .download-checkbox').each((i, input) => {
            if (input.checked === false) {
              yearChecked = false
            }
          })
          yearCheckbox.prop('checked', yearChecked)
        }
        
        // -------------------------------------
        // 儲存狀態
        let data = {}
        $('#BlogArchive1_ArchiveList input.download-checkbox').each((i, input) => {
          data[input.id] = input.checked
        })
        lscache.set(cacheKey, data)
      }
      
      // -------------------------------------
      
      $('#BlogArchive1_ArchiveList a.toggle').each((i, a) => {
        //console.log($(a).parent().hasClass('init-download-checkbox'))
        if ($(a).parent().hasClass('init-download-checkbox')) {
          return false
        }
        
        // 查看一下現在的狀態，然後加上年月好嗎
        let folderType = 'month'
        if ($(a).parent().parent().parent().attr('id') === 'BlogArchive1_ArchiveList') {
          folderType = 'year'
        }
        
        let value
        if (folderType === 'year') {
          value = 'd_' + $(a).parent().children('a.post-count-link').text().trim()
        }
        else {
          let link = $(a).parent().children('a.post-count-link').attr('href')
          let linkParts = link.split('/')
          value = 'd_' + linkParts[(linkParts.length - 3)] + '_' + linkParts[(linkParts.length - 2)]
        }
        
        let checkbox = $('<input type="checkbox" checked="checked" class="download-checkbox" />')
                .attr('id', value)
                .attr('data-folder-type', folderType)
                .change(checkboxChange)
        $(a).before(checkbox)
                .parent().addClass('init-download-checkbox')
      })
      
      // --------------------------------
      // 讀取狀態
      let data = lscache.get(cacheKey)
      if (data) {
        for (let id in data) {
          $('#' + id).prop('checked', data[id])
        }
      }
    }) 
  },
  
  // ------------------------------------------------------------------
  loopOpenItem: function (linkList, callback) {
    let loop = (i) => {
      if (i < linkList.length) {
        let openRetryCount = 3
        let openWindow = () => {
          let win = window.open(linkList[i])

          // 這邊要等待它關閉
          let waitCount = 60 * 5
          let checkWinClosed = () => {
            if (win.closed === false && waitCount > 0) {
              setTimeout(() => {
                waitCount--
                checkWinClosed()
              }, 1000)
            }
            else {
              if (waitCount === 0) {
                // 五分鐘都沒關閉，一定有問題
                win.close()
                
                openRetryCount--
                if (openRetryCount > 0) {
                  openWindow()
                  return
                }
                console.log(['DOWNLOAD ERROR', linkList[i]])
              }

              setTimeout(() => {
                i++
                loop(i)
              }, 3000)
            }
          }
          checkWinClosed()
        }
        
        openWindow()
      }
      else {
        if (typeof(callback) === 'function') {
          callback()
        }
      }
    }
    loop(0)
    
    
  },
  startDownload: function (callback) {
    //console.log('startDownload')
    
    let checkedList = $('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked')
    let loopChecklist = (i) => {
      if (i < checkedList.length) {
        let li = checkedList.eq(i).parent()
        if (li.hasClass('collapsed')) {
          // 要先點開
          li.children('a.toggle')[0].click()
          setTimeout(() => {
            loopChecklist(i)
          }, 1000)
        }
        else {
          // 已經點開了
          let linkList = []
          li.find('ul.posts > li > a').each((i, ele) => {
            linkList.push(ele.href + '?downloadArticle=true')
          })
          
          // 那我們逐一點開吧
          this.loopOpenItem(linkList, () => {
            checkedList.eq(i).prop('checked', false).change()
            i++
            loopChecklist(i)
          })
        }
        
      }
      else {
        if (typeof(callback) === 'function') {
          callback()
        }
      }
    }
    loopChecklist(0)
  }
}

// --------------------------------------

$(() => {
  let archiveTool = $('#ArchiveList > .page-tool')
  archiveTool.find('.open-list.year').click(() => {
    ArchiveListUtils.openListYear()
  })
  archiveTool.find('.open-list.month').click(() => {
    ArchiveListUtils.openListMonth()
  })
  archiveTool.find('.setup-checkbox').click(() => {
    ArchiveListUtils.displayConfiguration()
  }).click()
  archiveTool.find('.start-download').click(() => {
    ArchiveListUtils.startDownload()
  })
  
  let labelsTool = $('#labelsTool > .page-tool')
  labelsTool.find('.copy-labels').click(() => {
    LabelsUtils.copyLabels()
  })
})

/***/ }),

/***/ "./lib-for-link/src/page/script/labels.js":
/*!************************************************!*\
  !*** ./lib-for-link/src/page/script/labels.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


LabelsUtils = {
  copyLabels: function () {
    //console.log('copyLabels')
    
    let list = []
    $('.list-label-widget-content li a').each((i, aTag) => {
      list.push(aTag.innerText.trim())
    })
    
    list.sort()
    
    //console.log(list)
    let listString = list.join("\n")
    this.copyPlainText(listString)
  },
  copyPlainText: function (text) {
    var copyTextInput = document.getElementById("puliClipboardInput")
    if (copyTextInput === null) {
      var copyTextInput = document.createElement("textarea")
      copyTextInput.id = "puliClipboardInput"
      //copyTextInput.type = "text"
      document.body.appendChild(copyTextInput)
    }

    copyTextInput.value = text

    copyTextInput.style = "display: block; position: absolute; top: -1000px; left: -1000px;"
    /* Select the text field */
    copyTextInput.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copyTextInput.style = "display: none"
  },
}

// --------------------------------------

$(() => {
  let labelsTool = $('#labelsTool > .page-tool')
  labelsTool.find('.copy-labels').click(() => {
    LabelsUtils.copyLabels()
  })
})

/***/ }),

/***/ "./lib-for-link/src/page/style/style-page.less":
/*!*****************************************************!*\
  !*** ./lib-for-link/src/page/style/style-page.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/postcss-loader/src?sourceMap!../../../../node_modules/less-loader/dist/cjs.js?sourceMap!./style-page.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/page/style/style-page.less");

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

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/page/style/style-page.less":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/postcss-loader/src?sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/page/style/style-page.less ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#content.main{display:none}#main{margin-top:30px}#ArchiveList>#BlogArchive1_ArchiveList ul.hierarchy>li.archivedate{padding-left:0;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList ul.posts>li{padding-left:.75rem;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList input.download-checkbox{width:16px;height:16px;margin-top:-2px}#main .page-tool{font-size:14px;user-select:none}#main .page-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;margin-right:.5rem;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none}", "",{"version":3,"sources":["/app/lib-for-link/src/page/style/style-page.less","style-page.less"],"names":[],"mappings":"AAAA,cACI,YCCJ,CDEA,MACE,eCAF,CDGA,mEAEI,cAAA,CACA,0BCFJ,CDDA,mDAOI,mBAAA,CACA,0BCHJ,CDLA,+DAWI,UAAA,CACA,WAAA,CACA,eCHJ,CDOA,iBACE,cAAA,CACA,gBCLF,CDGA,0BAKI,wBAAA,CACA,6DAAA,CACA,wBAAA,CACA,UAAA,CACA,sBAAA,CACA,2CAAA,CACA,eAAA,CACA,kBAAA,CACA,4BAAA,CACA,cAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,gCAAA,CACA,kBAAA,CACA,uBAAA,CACA,qBAAA,CACA,gBCLJ","file":"style-page.less","sourcesContent":["#content.main {\n    display: none;\n}\n\n#main {\n  margin-top: 30px;\n}\n\n#ArchiveList > #BlogArchive1_ArchiveList {\n  ul.hierarchy > li.archivedate {\n    padding-left: 0;\n    margin-left: 1rem !important;\n  }\n  \n  ul.posts > li {\n    padding-left: 0.75rem;\n    margin-left: 1rem !important;\n  }\n  input.download-checkbox {\n    width: 16px;\n    height: 16px;\n    margin-top: -2px;\n  }\n}\n\n#main .page-tool {\n  font-size: 14px;\n  user-select: none;\n    \n  a button {\n    background-color: #f8f8f8;\n    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n    border: 1px solid #c6c6c6;\n    color: #222;\n    -webkit-transition: all;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);\n    font-weight: bold;\n    margin-right: 0.5rem;\n    font-family: arial,sans-serif;\n    font-size: 11px;\n    height: 27px;\n    padding-bottom: 0;\n    text-align: center;\n    text-shadow: 0 1px rgba(0,0,0,.1);\n    vertical-align: top;\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    user-select: none;\n  }\n}","#content.main {\n  display: none;\n}\n#main {\n  margin-top: 30px;\n}\n#ArchiveList > #BlogArchive1_ArchiveList ul.hierarchy > li.archivedate {\n  padding-left: 0;\n  margin-left: 1rem !important;\n}\n#ArchiveList > #BlogArchive1_ArchiveList ul.posts > li {\n  padding-left: 0.75rem;\n  margin-left: 1rem !important;\n}\n#ArchiveList > #BlogArchive1_ArchiveList input.download-checkbox {\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n#main .page-tool {\n  font-size: 14px;\n  user-select: none;\n}\n#main .page-tool a button {\n  background-color: #f8f8f8;\n  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-family: arial, sans-serif;\n  font-size: 11px;\n  height: 27px;\n  padding-bottom: 0;\n  text-align: center;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  user-select: none;\n}\n"]}]);



/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/page/script/archives.js ./lib-for-link/src/page/script/labels.js ./lib-for-link/src/page/style/style-page.less ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/page/script/archives.js */"./lib-for-link/src/page/script/archives.js");
__webpack_require__(/*! ./lib-for-link/src/page/script/labels.js */"./lib-for-link/src/page/script/labels.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/page/style/style-page.less */"./lib-for-link/src/page/style/style-page.less");


/***/ })

/******/ });
//# sourceMappingURL=page.js.map