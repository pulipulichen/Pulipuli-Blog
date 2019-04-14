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

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media (max-width:979px){#masthead .btn-navbar{font-size:23px!important;width:23px;padding:0 18px 0 17px;line-height:82px;margin:0 49px 0 0}#masthead.fixed-nav .btn-navbar{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;line-height:56px}}@media (max-width:480px){#masthead .btn-navbar,#masthead.fixed-nav .btn-navbar{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;line-height:56px}#masthead .btn-navbar{margin-right:5px}#masthead #menu-primary{padding-top:27px}#masthead .nav-collapse,#masthead .nav-collapse.collapse{top:0}#masthead #header-inner{margin-top:0;margin-bottom:0}#masthead.fixed-nav.affix #header-inner{margin-top:0!important;line-height:55px}#masthead #header-inner .descriptionwrapper{display:none}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/btn-navbar/btn-navbar.less","btn-navbar.less"],"names":[],"mappings":"AAMA,yBACE,sBACE,wBAAA,CAMA,UAAA,CAGA,qBAAA,CAGA,gBAAA,CACA,iBCDF,CDMA,gCAEE,YAAA,CACA,eAAA,CACA,aAAA,CACA,gBAAA,CACA,gBCFF,CACF,CDKA,yBACE,sDAEE,YAAA,CACA,eAAA,CACA,aAAA,CACA,gBAAA,CACA,gBCCF,CDMA,sBACE,gBCJF,CDOA,wBACE,gBCLF,CDQA,yDACE,KCLF,CDSA,wBACE,YAAA,CACA,eCPF,CDcA,wCACE,sBAAA,CACA,gBCTF,CDeA,4CACE,YCbF,CACF","file":"btn-navbar.less","sourcesContent":["/**\n * 只有在 979 以下才會顯示這個按鈕\n */\n\n/* --------------------------------------------- */\n/* @media (max-width: 979px) {*/\n@media (max-width: 979px) {\n  #masthead .btn-navbar {\n    font-size: 23px !important;\n    /*margin-top: 15px;*/\n    /*margin-bottom: 0;*/\n    padding-right: 18px;\n    margin-left: 0;\n    padding-left: 17px;\n    width: 23px;\n    \n    padding-top: 0;\n    padding-bottom: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    line-height: 82px;\n    margin-right: 49px;\n  }\n  \n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav {*/\n  #masthead.fixed-nav .btn-navbar {\n    /*margin-top: 5px;*/\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n  }\n}\n\n@media (max-width: 480px) {\n  #masthead .btn-navbar,\n  #masthead.fixed-nav .btn-navbar {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n    /*\n    margin:0;\n    margin-top: 3px !important;\n    */\n  }\n  \n  #masthead .btn-navbar {\n    margin-right: 5px;\n  }\n\n  #masthead #menu-primary {\n    padding-top: 27px;\n  }\n\n  #masthead .nav-collapse, #masthead .nav-collapse.collapse {\n    top: 0;\n  }\n\n\n  #masthead #header-inner {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  #masthead #header-inner .title {\n    /*line-height: 44px;*/\n\n  }\n\n  #masthead.fixed-nav.affix #header-inner {\n    margin-top:0 !important;\n    line-height: 55px;\n  }\n\n  \n\n\n  #masthead #header-inner .descriptionwrapper {\n    display: none;\n  }\n}","/**\n * 只有在 979 以下才會顯示這個按鈕\n */\n/* --------------------------------------------- */\n/* @media (max-width: 979px) {*/\n@media (max-width: 979px) {\n  #masthead .btn-navbar {\n    font-size: 23px !important;\n    /*margin-top: 15px;*/\n    /*margin-bottom: 0;*/\n    padding-right: 18px;\n    margin-left: 0;\n    padding-left: 17px;\n    width: 23px;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    line-height: 82px;\n    margin-right: 49px;\n  }\n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav {*/\n  #masthead.fixed-nav .btn-navbar {\n    /*margin-top: 5px;*/\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n  }\n}\n@media (max-width: 480px) {\n  #masthead .btn-navbar,\n  #masthead.fixed-nav .btn-navbar {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n    /*\n    margin:0;\n    margin-top: 3px !important;\n    */\n  }\n  #masthead .btn-navbar {\n    margin-right: 5px;\n  }\n  #masthead #menu-primary {\n    padding-top: 27px;\n  }\n  #masthead .nav-collapse,\n  #masthead .nav-collapse.collapse {\n    top: 0;\n  }\n  #masthead #header-inner {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  #masthead #header-inner .title {\n    /*line-height: 44px;*/\n  }\n  #masthead.fixed-nav.affix #header-inner {\n    margin-top: 0 !important;\n    line-height: 55px;\n  }\n  #masthead #header-inner .descriptionwrapper {\n    display: none;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#masthead #menu-primary a{color:#fff}#masthead #menu-primary ul>li>a{white-space:nowrap;overflow-x:hidden}#masthead #menu-primary li.home{width:6rem;text-align:right}#masthead #menu-primary li.home a.accesskey-menu{padding-right:0}#masthead #menu-primary li.dropdown{cursor:pointer}#masthead #menu-primary .dropdown-toggle i{font-size:20px}#masthead #menu-primary li.help a{padding-left:0;padding-right:0}#masthead #menu-primary li.help .icon{font-size:20px;line-height:27px}#masthead #menu-primary li.help .title,#masthead #menu-primary li.search{display:none}#masthead #menu-primary li.search a{padding:12px 15px}#masthead #menu-primary .dropdown-menu{z-index:-1}#masthead #menu-primary .dropdown-menu li>a{padding:12px 15px}#masthead.fixed-nav #menu-primary li>a{line-height:56px;padding:0 0 0 10px}#masthead.fixed-nav #menu-primary li.home{width:5rem}#masthead.fixed-nav #menu-primary li.home a.accesskey-menu{padding-right:5px;padding-top:0;line-height:54px}#masthead.fixed-nav #menu-primary li.help .icon{line-height:29px}#masthead.fixed-nav #menu-primary .dropdown-menu{position:fixed;top:54px;left:calc(100vw - (100vw - 1170px)/2 - 10px - 367px)}#masthead.fixed-nav #menu-primary .dropdown-menu li>a{padding:12px 15px;line-height:20px}@media (min-width:1200px){#masthead #menu-primary .dropdown-menu{margin-top:2px;margin-left:5px}#masthead.fixed-nav #menu-primary .dropdown-menu{margin-left:0}}@media (max-width:1200px){#masthead #menu-primary li.home{width:6rem}#masthead #menu-primary .dropdown-menu{margin-left:-5px}#masthead #menu-primary li>a{padding-left:10px;padding-right:10px}#masthead #menu-primary li.home a.accesskey-menu{padding-right:0}#masthead.fixed-nav #menu-primary .dropdown-menu{left:calc(100vw - (100vw - 960px)/2 - 10px - 277px);margin-left:0}}@media (max-width:979px){#masthead .nav-collapse{height:0}#masthead .nav-collapse #menu-primary{background-color:#2d2d2d}#masthead .nav-collapse #menu-primary li.help .title{display:block}#masthead .nav-collapse #menu-primary li.help a{padding-left:15px;padding-right:15px}#masthead .nav-collapse #menu-primary li.help .icon{float:left;margin-right:.5em}#masthead .nav-collapse #menu-primary .dropdown-menu{border-top:2px solid #f69087;position:fixed;z-index:-1;width:calc(100vw - 12px);background-color:#2d2d2d;display:block;margin:0 0 0 -55px;padding-top:8px}#masthead .nav-collapse #menu-primary .dropdown-menu li a{padding-left:18px!important;border-radius:0}#masthead .nav-collapse #menu-primary .dropdown-menu li a:active,#masthead .nav-collapse #menu-primary .dropdown-menu li a:focus,#masthead .nav-collapse #menu-primary .dropdown-menu li a:hover{border-left:3px solid #85ccb1;padding-left:15px!important}#masthead .nav-collapse #menu-primary .dropdown-menu li.active,#masthead .nav-collapse #menu-primary .dropdown-menu li:hover{background:none repeat scroll 0 0 hsla(0,0%,100%,.02);color:#fff}#masthead .nav-collapse .nav>li.dropdown>a,#masthead .nav-collapse .nav>li:not(.dropdown){display:none}#masthead .nav-collapse.collapse{overflow:hidden;height:0}#masthead .nav-collapse.collapse .dropdown-menu,#masthead .nav-collapse.in.collapse .dropdown .dropdown-toggle{display:none!important}#masthead.fixed-nav #menu-primary .dropdown-menu{left:0;top:56px;margin-left:0}}@media (max-width:767px){#masthead .nav-collapse .dropdown-menu{margin-top:0}}@media (max-width:680px){#masthead .nav-collapse.collapse li.search{display:none}#masthead .nav-collapse li.search{padding-top:12px}#masthead .nav-collapse .dropdown-menu{clear:both;margin-top:0}#masthead .nav-collapse li.search .gcse-placeholder-dropdown{background-color:#fff;border-radius:4px;margin-left:15px;width:calc(100vw - 60px);line-height:28px;padding-bottom:3px}#masthead .nav-collapse li.search .gcse-placeholder-dropdown input.gsc-input-placeholder{float:left;border-width:0;outline:none;width:calc(100% - 40px);height:23px}#masthead .nav-collapse li.search .srch_btn-dropdown{color:grey;cursor:pointer;margin-top:0}#masthead .nav-collapse li.search .srch_btn-dropdown:hover{color:#222}#masthead.fixed-nav form.gcse-placeholder-dropdown{margin-top:0}}@media (max-width:480px){#masthead nav .nav-collapse{overflow:initial}#masthead nav .nav-collapse #menu-primary{padding-top:0}#masthead nav .nav-collapse #menu-primary .dropdown-menu{position:static;width:calc(100vw - 17px);margin-left:-10px;left:-10px;top:0}}@media (max-height:480px){#masthead #menu-primary .dropdown-menu{max-height:calc(100vh - 80px);overflow-x:auto;width:100%;margin:0}#masthead.fixed-nav #menu-primary .dropdown-menu{display:none}}@media (max-width:480px) and (max-height:480px){#masthead #menu-primary .dropdown-menu{max-height:calc(100vh - 106px)}}@media (max-height:480px) and (min-width:979px){#masthead #menu-primary .dropdown-menu{width:13rem}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/btn-navbar/nav-collapse.less","nav-collapse.less"],"names":[],"mappings":"AAGA,0BAGI,UCJJ,CDCA,gCAOI,kBAAA,CACA,iBCLJ,CDHA,gCAaI,UAAA,CACA,gBCPJ,CDPA,iDAiBM,eCPN,CDVA,oCAsBI,cCTJ,CDbA,2CA0BI,cCVJ,CDhBA,kCA+BM,cAAA,CACA,eCZN,CDpBA,sCAoDM,cAAA,CACA,gBCZN,CDzCA,yEA6DI,YCdJ,CD/CA,oCAgEM,iBCdN,CDlDA,uCAqEI,UCfJ,CDtDA,4CAyEM,iBChBN,CDyBA,uCAGI,gBAAA,CAIA,kBCxBJ,CDiBA,0CAWI,UCzBJ,CDcA,2DAcM,iBAAA,CACA,aAAA,CACA,gBCzBN,CDSA,gDAqBI,gBC3BJ,CDMA,iDA0BI,cAAA,CACA,QAAA,CACA,oDC5BJ,CDAA,sDA+BM,iBAAA,CACA,gBC5BN,CDoCA,0BACE,uCAEI,cAAA,CACA,eCjCJ,CDqCA,iDAEI,aCpCJ,CACF,CD2CA,0BACE,gCAEI,UCxCJ,CDsCA,uCAOI,gBCzCJ,CDkCA,6BAWI,iBAAA,CACA,kBC1CJ,CD8BA,iDAgBI,eC3CJ,CD+CA,iDAGI,mDAAA,CACA,aC9CJ,CACF,CD+DA,yBACE,wBAEI,QC1DJ,CDwDA,sCAKM,wBC1DN,CDqDA,qDAOQ,aCzDR,CDkDA,gDAUQ,iBAAA,CACA,kBCzDR,CD8CA,oDAcQ,UAAA,CACA,iBCzDR,CD0CA,qDAmBQ,4BAAA,CACA,cAAA,CACA,UAAA,CACA,wBAAA,CAEA,wBAAA,CACA,aAAA,CAEA,kBAAA,CACA,eCzDR,CD6BA,0DAgCU,2BAAA,CACA,eC1DV,CDyBA,iMAuCU,6BAAA,CACA,2BC3DV,CDmBA,6HA6CU,qDAAA,CACA,UC5DV,CDcA,0FAyDM,YCjEN,CDQA,iCAgEI,eAAA,CACA,QCrEJ,CDIA,+GA2EI,sBCzEJ,CDgFA,iDAEI,MAAA,CACA,QAAA,CACA,aC/EJ,CACF,CDsFA,yBACE,uCAEI,YCrFJ,CACF,CD4FA,yBACE,2CACE,YCxFF,CD2FA,kCAEE,gBCzFF,CD4FA,uCAEE,UAAA,CACA,YC1FF,CD6FA,6DACE,qBAAA,CACA,iBAAA,CACA,gBAAA,CACA,wBAAA,CACA,gBAAA,CACA,kBC3FF,CD8FA,yFACE,UAAA,CACA,cAAA,CACA,YAAA,CAKA,uBAAA,CACA,WC5FF,CD+FA,qDACE,UAAA,CACA,cAAA,CACA,YC7FF,CD+FA,2DACE,UC7FF,CDgGA,mDACE,YC9FF,CACF,CDoGA,yBACE,4BAEI,gBCjGJ,CD+FA,0CAKM,aCjGN,CD4FA,yDAQQ,eAAA,CACA,wBAAA,CACA,iBAAA,CACA,UAAA,CACA,KCjGR,CACF,CDwHA,0BAEE,uCACE,6BAAA,CACA,eAAA,CACA,UAAA,CACA,QC5GF,CD+GA,iDACE,YC7GF,CACF,CDgHA,gDACE,uCACE,8BC9GF,CACF,CDkHA,gDACE,uCACE,WChHF,CACF","file":"nav-collapse.less","sourcesContent":["// -------------------------------------\n// global\n\n#masthead #menu-primary {\n  \n  a {\n    color: white;\n  }\n\n  ul > li > a {\n    white-space: nowrap;\n    overflow-x: hidden;\n  }\n  \n  \n  li.home {\n    width: 6rem;\n    text-align: right;\n    \n    a.accesskey-menu {\n      padding-right: 0px;\n    }\n  }\n  \n  li.dropdown {\n    cursor: pointer;\n  }\n  \n  .dropdown-toggle i {\n    font-size: 20px;\n  }\n\n  li.help {\n    a {\n      padding-left: 0;\n      padding-right: 0;\n    }\n    .icon {\n      /*\n      background-color: #FFF;\n      display: inline-block;\n      width: 22px;\n      height: 22px;\n      line-height: 22px;\n      border-radius: 11px;\n      -o-transition: all .20s linear;\n      -webkit-transition: all .20s linear;\n      -moz-transition: all .20s linear;\n      transition:  all .20s linear;\n      cursor: pointer;\n      text-align: center;\n      text-decoration: none;\n      color: #000;\n      font-weight: bold;\n      */\n      font-size: 20px;\n      line-height: 27px;\n    }\n    .title {\n      display: none;\n    }\n  }\n\n  li.search {\n    display: none;\n    \n    a {\n      padding: 12px 15px;\n    }\n  }\n  \n  .dropdown-menu {\n    z-index: -1;\n    /*display: block;*/\n    \n    li > a {\n      padding: 12px 15px;\n    }\n    \n  }\n} \n\n// --------------------------\n// global fixed-nav\n\n#masthead.fixed-nav #menu-primary {\n  li > a {\n    /* padding: 6px 20px 10px; */\n    line-height: 56px;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 0;\n    padding-left: 10px;\n  }\n\n  li.home {\n    width: 5rem;\n\n    a.accesskey-menu {\n      padding-right: 5px;\n      padding-top: 0;\n      line-height: 54px;\n    }\n  }\n  \n  li.help .icon {\n    line-height: 29px;\n  }\n  \n  .dropdown-menu {\n    /*display: block;*/\n    position: fixed;\n    top: 54px;\n    left: calc(100vw - ((100vw - 1170px) / 2 + 10px) - 367px);\n    // 1170 / 2 = 600-15 = 585\n    li > a {\n      padding: 12px 15px;\n      line-height: 20px;\n    }\n  }\n}\n\n/* ****************************************** */\n/* @media (min-width: 1200px) { */\n\n@media (min-width: 1200px) {\n  #masthead #menu-primary {\n    .dropdown-menu {\n      margin-top: 2px;\n      margin-left: 5px;\n    }\n  }\n  \n  #masthead.fixed-nav #menu-primary {\n    .dropdown-menu {\n      margin-left: 0;\n    }\n  }\n}\n\n/* ****************************************** */\n/* @media (max-width: 1200px) { */\n\n@media (max-width: 1200px) {\n  #masthead #menu-primary {\n    li.home {\n      width: 6rem;\n    }\n    \n    .dropdown-menu {\n      /*display: block;*/\n      margin-left: -5px;\n    }\n    \n    li > a {\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n    \n    li.home a.accesskey-menu {\n      padding-right: 0;\n    }\n  }\n  \n  #masthead.fixed-nav #menu-primary {\n    .dropdown-menu {\n      /*display: block;*/\n      left: calc(100vw - ((100vw - 960px) / 2 + 10px) - 277px);\n      margin-left: 0;\n    }\n  }\n}\n\n/* ****************************************** */\n/* @media (min-width: 979px) { */\n\n@media (min-width: 979px) {\n\n}\n\n// ------------------------------------\n\n\n/* ****************************************** */\n/* @media (max-width: 979px) { */\n\n@media (max-width: 979px) {\n  #masthead {\n    .nav-collapse {\n      height: 0;\n\n      #menu-primary {\n        background-color: #2D2D2D;\n        li.help .title {\n          display: block;\n        }\n        li.help a {\n          padding-left: 15px;\n          padding-right: 15px;\n        }\n        li.help .icon {\n          float:left;\n          margin-right: 0.5em;\n        }\n        \n        .dropdown-menu {\n          border-top: 2px solid #F69087;\n          position: fixed;\n          z-index: -1;\n          width: calc(100vw - 12px);\n          /*margin-top: 10px;*/\n          background-color: #2D2D2D;\n          display: block;\n          margin: 0;\n          margin-left: -55px;\n          padding-top: 8px;\n          /*top: 56px;*/\n\n          li a {\n            padding-left:18px !important;\n            border-radius: 0;\n          }\n\n          li a:hover, \n            li a:active, \n            li a:focus {\n            border-left: 3px solid #85CCB1;\n            padding-left:15px !important;\n          }\n\n          li.active, \n          li:hover {\n            background: none repeat scroll 0 0 rgba(255,255,255,0.02);\n            color: #fff;\n          }\n        }\n      }\n      \n      \n\n      .nav > li:not(.dropdown) {\n        display: none;\n      }\n      .nav > li.dropdown > a {\n        display: none;\n      }\n    }\n\n    // -------------------------------\n\n    .nav-collapse.collapse {\n      overflow: hidden;\n      height: 0;\n\n      .dropdown-menu {\n        display: none !important;\n      }\n    }\n\n    // ---------------\n\n    .nav-collapse.in.collapse .dropdown .dropdown-toggle {\n      display:none !important;\n    }\n\n    // --------------------------------\n\n  }\n  \n  #masthead.fixed-nav #menu-primary {\n    .dropdown-menu {\n      left: 0;\n      top: 56px;\n      margin-left: 0;\n    }\n  }\n}\n\n// ------------------------------------\n// @media (max-width: 767px) {\n\n@media (max-width: 767px) {\n  #masthead .nav-collapse {\n    .dropdown-menu {\n      margin-top: 0px;\n    }\n  }\n}\n\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n\n@media (max-width: 680px) {\n  #masthead .nav-collapse.collapse li.search {\n    display: none;\n  }\n  \n  #masthead .nav-collapse li.search {\n    /*border-top: 2px solid #F69087;*/\n    padding-top: 12px;\n  }\n  \n  #masthead .nav-collapse .dropdown-menu {\n    /*border-top-width: 0;*/\n    clear: both;\n    margin-top: 0;\n  }\n  \n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown {\n    background-color: white;\n    border-radius: 4px;\n    margin-left: 15px;\n    width: calc(100vw - 60px);\n    line-height: 28px;\n    padding-bottom: 3px;\n  }\n  \n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown input.gsc-input-placeholder {\n    float: left;\n    border-width: 0;\n    outline: none;\n    /*\n    margin-left: 19px;\n    margin-right: 25px;\n    */\n    width: calc(100% - 40px);\n    height: 23px;\n  }\n  \n  #masthead .nav-collapse li.search .srch_btn-dropdown {\n    color: gray;\n    cursor: pointer;\n    margin-top: 0px;\n  }\n  #masthead .nav-collapse li.search .srch_btn-dropdown:hover {\n    color: #222222;\n  }\n  \n  #masthead.fixed-nav form.gcse-placeholder-dropdown {\n    margin-top: 0;\n  }\n}\n\n/* ****************************************** */\n/* @media (max-width: 480px) { */\n\n@media (max-width: 480px) {\n  #masthead nav {\n    .nav-collapse {\n      overflow: initial;\n\n      #menu-primary {\n        padding-top: 0;\n\n        .dropdown-menu {\n          position: static;\n          width: calc(100vw - 17px);\n          margin-left: -10px;\n          left: -10px;\n          top: 0;\n        }\n      }\n\n    }\n\n  }\n}\n\n/*\n@media (max-width: 480px) and (max-height: 480px) {\n  #masthead .nav-collapse .dropdown-menu {\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 320px;\n  }\n}\n*/\n\n\n/****************************************/\n// @media (max-width: 979px) and (max-height: 650px) {\n/* 20160523 畫面太矮的時候 */\n\n@media (max-height: 480px) {\n  \n  #masthead #menu-primary .dropdown-menu {\n    max-height: calc(100vh - 80px);\n    overflow-x: auto;\n    width: 100%;\n    margin: 0;\n  }\n  \n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    display: none;\n  }\n}\n\n@media (max-width: 480px) and (max-height: 480px) {\n  #masthead #menu-primary .dropdown-menu {\n    max-height: calc(100vh - 106px);\n  }\n  \n}\n\n@media (max-height: 480px) and (min-width: 979px) {\n  #masthead #menu-primary .dropdown-menu {\n    width: 13rem;\n  }\n}\n","#masthead #menu-primary a {\n  color: white;\n}\n#masthead #menu-primary ul > li > a {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n#masthead #menu-primary li.home {\n  width: 6rem;\n  text-align: right;\n}\n#masthead #menu-primary li.home a.accesskey-menu {\n  padding-right: 0px;\n}\n#masthead #menu-primary li.dropdown {\n  cursor: pointer;\n}\n#masthead #menu-primary .dropdown-toggle i {\n  font-size: 20px;\n}\n#masthead #menu-primary li.help a {\n  padding-left: 0;\n  padding-right: 0;\n}\n#masthead #menu-primary li.help .icon {\n  /*\n      background-color: #FFF;\n      display: inline-block;\n      width: 22px;\n      height: 22px;\n      line-height: 22px;\n      border-radius: 11px;\n      -o-transition: all .20s linear;\n      -webkit-transition: all .20s linear;\n      -moz-transition: all .20s linear;\n      transition:  all .20s linear;\n      cursor: pointer;\n      text-align: center;\n      text-decoration: none;\n      color: #000;\n      font-weight: bold;\n      */\n  font-size: 20px;\n  line-height: 27px;\n}\n#masthead #menu-primary li.help .title {\n  display: none;\n}\n#masthead #menu-primary li.search {\n  display: none;\n}\n#masthead #menu-primary li.search a {\n  padding: 12px 15px;\n}\n#masthead #menu-primary .dropdown-menu {\n  z-index: -1;\n  /*display: block;*/\n}\n#masthead #menu-primary .dropdown-menu li > a {\n  padding: 12px 15px;\n}\n#masthead.fixed-nav #menu-primary li > a {\n  /* padding: 6px 20px 10px; */\n  line-height: 56px;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n  padding-left: 10px;\n}\n#masthead.fixed-nav #menu-primary li.home {\n  width: 5rem;\n}\n#masthead.fixed-nav #menu-primary li.home a.accesskey-menu {\n  padding-right: 5px;\n  padding-top: 0;\n  line-height: 54px;\n}\n#masthead.fixed-nav #menu-primary li.help .icon {\n  line-height: 29px;\n}\n#masthead.fixed-nav #menu-primary .dropdown-menu {\n  /*display: block;*/\n  position: fixed;\n  top: 54px;\n  left: calc(100vw - ((100vw - 1170px) / 2 + 10px) - 367px);\n}\n#masthead.fixed-nav #menu-primary .dropdown-menu li > a {\n  padding: 12px 15px;\n  line-height: 20px;\n}\n/* ****************************************** */\n/* @media (min-width: 1200px) { */\n@media (min-width: 1200px) {\n  #masthead #menu-primary .dropdown-menu {\n    margin-top: 2px;\n    margin-left: 5px;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    margin-left: 0;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 1200px) { */\n@media (max-width: 1200px) {\n  #masthead #menu-primary li.home {\n    width: 6rem;\n  }\n  #masthead #menu-primary .dropdown-menu {\n    /*display: block;*/\n    margin-left: -5px;\n  }\n  #masthead #menu-primary li > a {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  #masthead #menu-primary li.home a.accesskey-menu {\n    padding-right: 0;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    /*display: block;*/\n    left: calc(100vw - ((100vw - 960px) / 2 + 10px) - 277px);\n    margin-left: 0;\n  }\n}\n/* ****************************************** */\n/* @media (min-width: 979px) { */\n/* ****************************************** */\n/* @media (max-width: 979px) { */\n@media (max-width: 979px) {\n  #masthead .nav-collapse {\n    height: 0;\n  }\n  #masthead .nav-collapse #menu-primary {\n    background-color: #2D2D2D;\n  }\n  #masthead .nav-collapse #menu-primary li.help .title {\n    display: block;\n  }\n  #masthead .nav-collapse #menu-primary li.help a {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  #masthead .nav-collapse #menu-primary li.help .icon {\n    float: left;\n    margin-right: 0.5em;\n  }\n  #masthead .nav-collapse #menu-primary .dropdown-menu {\n    border-top: 2px solid #F69087;\n    position: fixed;\n    z-index: -1;\n    width: calc(100vw - 12px);\n    /*margin-top: 10px;*/\n    background-color: #2D2D2D;\n    display: block;\n    margin: 0;\n    margin-left: -55px;\n    padding-top: 8px;\n    /*top: 56px;*/\n  }\n  #masthead .nav-collapse #menu-primary .dropdown-menu li a {\n    padding-left: 18px !important;\n    border-radius: 0;\n  }\n  #masthead .nav-collapse #menu-primary .dropdown-menu li a:hover,\n  #masthead .nav-collapse #menu-primary .dropdown-menu li a:active,\n  #masthead .nav-collapse #menu-primary .dropdown-menu li a:focus {\n    border-left: 3px solid #85CCB1;\n    padding-left: 15px !important;\n  }\n  #masthead .nav-collapse #menu-primary .dropdown-menu li.active,\n  #masthead .nav-collapse #menu-primary .dropdown-menu li:hover {\n    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.02);\n    color: #fff;\n  }\n  #masthead .nav-collapse .nav > li:not(.dropdown) {\n    display: none;\n  }\n  #masthead .nav-collapse .nav > li.dropdown > a {\n    display: none;\n  }\n  #masthead .nav-collapse.collapse {\n    overflow: hidden;\n    height: 0;\n  }\n  #masthead .nav-collapse.collapse .dropdown-menu {\n    display: none !important;\n  }\n  #masthead .nav-collapse.in.collapse .dropdown .dropdown-toggle {\n    display: none !important;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    left: 0;\n    top: 56px;\n    margin-left: 0;\n  }\n}\n@media (max-width: 767px) {\n  #masthead .nav-collapse .dropdown-menu {\n    margin-top: 0px;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  #masthead .nav-collapse.collapse li.search {\n    display: none;\n  }\n  #masthead .nav-collapse li.search {\n    /*border-top: 2px solid #F69087;*/\n    padding-top: 12px;\n  }\n  #masthead .nav-collapse .dropdown-menu {\n    /*border-top-width: 0;*/\n    clear: both;\n    margin-top: 0;\n  }\n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown {\n    background-color: white;\n    border-radius: 4px;\n    margin-left: 15px;\n    width: calc(100vw - 60px);\n    line-height: 28px;\n    padding-bottom: 3px;\n  }\n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown input.gsc-input-placeholder {\n    float: left;\n    border-width: 0;\n    outline: none;\n    /*\n    margin-left: 19px;\n    margin-right: 25px;\n    */\n    width: calc(100% - 40px);\n    height: 23px;\n  }\n  #masthead .nav-collapse li.search .srch_btn-dropdown {\n    color: gray;\n    cursor: pointer;\n    margin-top: 0px;\n  }\n  #masthead .nav-collapse li.search .srch_btn-dropdown:hover {\n    color: #222222;\n  }\n  #masthead.fixed-nav form.gcse-placeholder-dropdown {\n    margin-top: 0;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 480px) { */\n@media (max-width: 480px) {\n  #masthead nav .nav-collapse {\n    overflow: initial;\n  }\n  #masthead nav .nav-collapse #menu-primary {\n    padding-top: 0;\n  }\n  #masthead nav .nav-collapse #menu-primary .dropdown-menu {\n    position: static;\n    width: calc(100vw - 17px);\n    margin-left: -10px;\n    left: -10px;\n    top: 0;\n  }\n}\n/*\n@media (max-width: 480px) and (max-height: 480px) {\n  #masthead .nav-collapse .dropdown-menu {\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 320px;\n  }\n}\n*/\n/****************************************/\n/* 20160523 畫面太矮的時候 */\n@media (max-height: 480px) {\n  #masthead #menu-primary .dropdown-menu {\n    max-height: calc(100vh - 80px);\n    overflow-x: auto;\n    width: 100%;\n    margin: 0;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    display: none;\n  }\n}\n@media (max-width: 480px) and (max-height: 480px) {\n  #masthead #menu-primary .dropdown-menu {\n    max-height: calc(100vh - 106px);\n  }\n}\n@media (max-height: 480px) and (min-width: 979px) {\n  #masthead #menu-primary .dropdown-menu {\n    width: 13rem;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/go-top/go-top.less":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/go-top/go-top.less ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#footer .go-top{float:right;margin-left:20px;padding-left:20px}#footer .go-top a{display:block;width:30px;height:30px;color:#fff;font-size:14px;text-align:center;border-radius:2px;background-color:#f46b6b;transition:background-color .2s ease-in-out;-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out}#footer .go-top a:hover{background-color:#444}#footer .go-top a i{line-height:30px}#footer .go-top{position:fixed;right:20px;bottom:calc(50px + 1em);z-index:999;border-left-width:0!important}#footer .go-top a{background-color:#ad7518;-moz-box-shadow:2px 2px 3px rgba(51,51,102,.5);-webkit-box-shadow:2px 2px 3px rgba(51,51,102,.5);box-shadow:2px 2px 3px rgba(51,51,102,.5)}#footer .go-top .goto-comment{display:none;margin-top:.5em}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/go-top/go-top.less","go-top.less"],"names":[],"mappings":"AAKA,gBACC,WAAA,CACA,gBAAA,CACA,iBCCD,CDGA,kBACC,aAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,wBAAA,CACA,2CAAA,CACA,gDAAA,CACA,mDAAA,CACA,8CCDD,CDIA,wBACC,qBCFD,CDKA,oBACC,gBCHD,CDQA,gBACE,cAAA,CACA,UAAA,CACA,uBAAA,CACA,WAAA,CACA,6BCNF,CDCA,kBAQI,wBAAA,CACA,8CAAA,CACA,iDAAA,CACA,yCCLJ,CDNA,8BAeI,YAAA,CACA,eCNJ","file":"go-top.less","sourcesContent":["/**\n * @author Pulipuli Chen 20190305\n * 其實都還沒整理，亂成一團啊\n */\n\n#footer .go-top {\n\tfloat: right;\n\tmargin-left: 20px;\n\tpadding-left: 20px;\n\t/*border-left: 1px solid rgba(0, 0, 0, 0.1)*/\n}\n\n#footer .go-top a {\n\tdisplay: block;\n\twidth: 30px;\n\theight: 30px;\n\tcolor: #fff;\n\tfont-size: 14px;\n\ttext-align: center;\n\tborder-radius: 2px;\n\tbackground-color: #F46B6B;\n\ttransition: background-color 0.2s ease-in-out;\n\t-moz-transition: background-color 0.2s ease-in-out;\n\t-webkit-transition: background-color 0.2s ease-in-out;\n\t-o-transition: background-color 0.2s ease-in-out\n}\n\n#footer .go-top a:hover {\n\tbackground-color: #444\n}\n\n#footer .go-top a i {\n\tline-height: 30px\n}\n\n\n\n#footer .go-top {\n  position: fixed;\n  right: 20px;\n  bottom: calc(50px + 1em);\n  z-index: 999;\n  border-left-width: 0 !important;\n  \n  a {\n    background-color: #AD7518;\n    -moz-box-shadow: 2px 2px 3px rgba(20%,20%,40%,0.5);\n    -webkit-box-shadow:2px 2px 3px rgba(20%,20%,40%,0.5);\n    box-shadow:2px 2px 3px rgba(20%,20%,40%,0.5);\n    /*margin-bottom: 0.5em;*/\n  }\n  .goto-comment {\n    display: none;\n    margin-top: 0.5em;\n  }\n}","/**\n * @author Pulipuli Chen 20190305\n * 其實都還沒整理，亂成一團啊\n */\n#footer .go-top {\n  float: right;\n  margin-left: 20px;\n  padding-left: 20px;\n  /*border-left: 1px solid rgba(0, 0, 0, 0.1)*/\n}\n#footer .go-top a {\n  display: block;\n  width: 30px;\n  height: 30px;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 2px;\n  background-color: #F46B6B;\n  transition: background-color 0.2s ease-in-out;\n  -moz-transition: background-color 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  -o-transition: background-color 0.2s ease-in-out;\n}\n#footer .go-top a:hover {\n  background-color: #444;\n}\n#footer .go-top a i {\n  line-height: 30px;\n}\n#footer .go-top {\n  position: fixed;\n  right: 20px;\n  bottom: calc(50px + 1em);\n  z-index: 999;\n  border-left-width: 0 !important;\n}\n#footer .go-top a {\n  background-color: #AD7518;\n  -moz-box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  -webkit-box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  /*margin-bottom: 0.5em;*/\n}\n#footer .go-top .goto-comment {\n  display: none;\n  margin-top: 0.5em;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#masthead .search-bar{-moz-transition:.3s linear;-webkit-transition:.3s ease-out;transition:.3s linear;float:right;right:0;cursor:pointer;background-image:none;background-repeat:no-repeat;padding:0 0 0 20px;background-size:100px 100px;top:0;z-index:99999;margin-top:-5px}#masthead .search-bar .nav-search{width:100%}#masthead .search-bar .gcse-placeholder{display:block;width:100%;padding:0;float:left;margin-top:2px;margin-right:15px;background-color:#fff!important;border-radius:.5rem;height:34px}#masthead .search-bar .gcse-placeholder input.gsc-input-placeholder{width:calc(100% - 40px);border:none;margin:0;outline:none;padding:2px 0 0 8px;margin-top:0!important}#masthead .search-bar .nav-search{margin-top:22px;float:right}#masthead .search-bar .nav-search .srch_btn{position:relative;font-size:20px;color:grey;line-height:33px}#masthead .search-bar .nav-search .srch_btn:hover{color:#222}#masthead.fixed-nav .search-bar .nav-search{margin-top:6px}#masthead.fixed-nav .search-bar form.gcse-placeholder{margin-top:10px}@media (min-width:979px){.search-bar{width:240px}}@media (max-width:1200px) and (min-width:979px){#masthead .search-bar{width:160px!important}}@media (max-width:979px){#masthead .search-bar{width:260px;padding:0}#masthead .search-bar .nav-search{margin-top:28px}#masthead .search-bar .nav-search form.gcse-placeholder{margin-top:1px}#masthead.fixed-nav .search-bar form.gcse-placeholder{margin-top:10px}}@media (max-width:767px){#masthead .search-bar{width:200px}}@media (max-width:680px){#masthead .search-bar{display:none}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less","gsc-search-bar-placeholder.less"],"names":[],"mappings":"AAEA,sBACE,0BAAA,CACA,+BAAA,CACA,qBAAA,CACA,WAAA,CACA,OAAA,CACA,cAAA,CACA,qBAAA,CACA,2BAAA,CACA,kBAAA,CACA,2BAAA,CACA,KAAA,CACA,aAAA,CACA,eCCF,CDEA,kCACE,UCAF,CDGA,wCACE,aAAA,CACA,UAAA,CACA,SAAA,CACA,UAAA,CAEA,cAAA,CACA,iBAAA,CACA,+BAAA,CACA,mBAAA,CACA,WCDF,CDIA,oEACE,uBAAA,CAEA,WAAA,CACA,QAAA,CAGA,YAAA,CAEA,mBAAA,CACA,sBCDF,CDKA,kCAEI,eAAA,CACA,WCJJ,CDCA,4CAWM,iBAAA,CACA,cAAA,CACA,UAAA,CACA,gBCJN,CDVA,kDAkBM,UCLN,CDcA,4CAEI,cCXJ,CDSA,sDAKI,eCXJ,CD0BA,yBAME,YACE,WCjBF,CACF,CDsBA,gDACE,sBACE,qBClBF,CACF,CDkCA,yBACE,sBACE,WAAA,CACA,SCvBF,CDqBA,kCAKI,eCvBJ,CDkBA,wDAOM,cCtBN,CD2BA,sDAEI,eC1BJ,CAiBF,CDoCA,yBACE,sBACE,WChCF,CACF,CDsCA,yBACE,sBACE,YCjCF,CAMF","file":"gsc-search-bar-placeholder.less","sourcesContent":["/* --------------------------------------------- */\n/* all { */\n#masthead .search-bar {\n  -moz-transition: .3s linear;\n  -webkit-transition: .3s ease-out;\n  transition: .3s linear;\n  float: right;\n  right: 0;\n  cursor: pointer;\n  background-image: none;\n  background-repeat: no-repeat;\n  padding: 0px 0px 0px 20px;\n  background-size: 100px 100px;\n  top: 0;\n  z-index: 99999;\n  margin-top: -5px;\n}\n\n#masthead .search-bar .nav-search {\n  width: 100%;\n}\n\n#masthead .search-bar .gcse-placeholder {\n  display: block;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 2px;\n  margin-right: 15px;\n  background-color: white !important;\n  border-radius: 0.5rem;\n  height: 34px;\n}\n\n#masthead .search-bar .gcse-placeholder input.gsc-input-placeholder {\n  width: calc(100% - 40px); \n  padding: 0px; \n  border: none; \n  margin: 0px; \n  /* height: auto; */\n  /*text-indent: 48px;*/ \n  outline: none;\n  padding-top: 2px;\n  padding-left: 8px;\n  margin-top: 0 !important;\n  /*border: 1px solid red;*/\n}\n\n#masthead .search-bar {\n  .nav-search {\n    margin-top: 22px;\n    float: right;\n\n    .srch_btn {\n      /*height: 42px;\n      width: 23px;\n      */\n      /*line-height: 41px;*/\n      /*text-indent: 9999px;*/\n      position: relative;\n      font-size: 20px;\n      color: gray;\n      line-height: 33px;\n    }\n\n    .srch_btn:hover {\n      color: #222222;\n    }\n\n  }\n}\n\n/* --------------------------------------------- */\n/* all fixed-nav { */\n\n#masthead.fixed-nav .search-bar {\n  .nav-search {\n    margin-top: 6px;\n  }\n  form.gcse-placeholder {\n    margin-top: 10px;\n  }\n}\n\n\n/*\n#masthead.fixed-nav .nav-search .srch_btn {\n  margin-top: -15px;\n}\n*/\n\n\n/* --------------------------------------------- */\n/* @media (min-width: 979px) { */\n\n@media (min-width: 979px) {\n  /*\n  #masthead .search-bar .nav-search .srch_btn {\n    line-height: 32px;\n  }\n  */\n  .search-bar {\n    width: 240px;\n  }\n}\n\n/*********************************/\n/* 20160522 修正導覽列的問題 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #masthead .search-bar {\n    width: 160px !important;\n    //margin-right: 20px;\n  }\n}\n\n/*\n@media (max-width: 979px) {\n    .nav-collapse:not(.in) {\n        clear: none;\n    }\n} \n*/\n\n\n/* --------------------------------------------- */\n/* @media (max-width: 979px) { */\n\n@media (max-width: 979px) {\n  #masthead .search-bar {\n    width: 260px;\n    padding:0;\n\n    .nav-search {\n      margin-top: 28px;\n      form.gcse-placeholder {\n        margin-top: 1px;\n      }\n    }\n  }\n  \n  #masthead.fixed-nav .search-bar {\n    form.gcse-placeholder {\n      margin-top: 10px;\n    }\n  }\n  \n  /*\n  #masthead .nav-search .srch_btn {\n    margin-top: -3px;\n  }\n  */\n  \n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav { */\n  /*\n  #masthead.fixed-nav .search-bar .nav-search {\n    margin-top: 18px;\n  }\n  */\n  \n  /*\n  #masthead.fixed-nav .search-bar form.gcse-placeholder {\n    margin-top: 10px;\n  }*/\n}\n\n/* --------------------------------------------- */\n/* @media (max-width: 767px) { */\n\n@media (max-width: 767px) {\n  #masthead .search-bar {\n    width: 200px;\n  }\n}\n\n/* --------------------------------------------- */\n/* @media (max-width: 680px) { */\n\n@media (max-width: 680px) {\n  #masthead .search-bar {\n    display: none;\n    /*width: 200px;*/\n  }\n  /*\n  #masthead .search-bar .nav-search {\n    margin-right: 60px;\n  }\n  */\n}","/* --------------------------------------------- */\n/* all { */\n#masthead .search-bar {\n  -moz-transition: 0.3s linear;\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s linear;\n  float: right;\n  right: 0;\n  cursor: pointer;\n  background-image: none;\n  background-repeat: no-repeat;\n  padding: 0px 0px 0px 20px;\n  background-size: 100px 100px;\n  top: 0;\n  z-index: 99999;\n  margin-top: -5px;\n}\n#masthead .search-bar .nav-search {\n  width: 100%;\n}\n#masthead .search-bar .gcse-placeholder {\n  display: block;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 2px;\n  margin-right: 15px;\n  background-color: white !important;\n  border-radius: 0.5rem;\n  height: 34px;\n}\n#masthead .search-bar .gcse-placeholder input.gsc-input-placeholder {\n  width: calc(100% - 40px);\n  padding: 0px;\n  border: none;\n  margin: 0px;\n  /* height: auto; */\n  /*text-indent: 48px;*/\n  outline: none;\n  padding-top: 2px;\n  padding-left: 8px;\n  margin-top: 0 !important;\n  /*border: 1px solid red;*/\n}\n#masthead .search-bar .nav-search {\n  margin-top: 22px;\n  float: right;\n}\n#masthead .search-bar .nav-search .srch_btn {\n  /*height: 42px;\n      width: 23px;\n      */\n  /*line-height: 41px;*/\n  /*text-indent: 9999px;*/\n  position: relative;\n  font-size: 20px;\n  color: gray;\n  line-height: 33px;\n}\n#masthead .search-bar .nav-search .srch_btn:hover {\n  color: #222222;\n}\n/* --------------------------------------------- */\n/* all fixed-nav { */\n#masthead.fixed-nav .search-bar .nav-search {\n  margin-top: 6px;\n}\n#masthead.fixed-nav .search-bar form.gcse-placeholder {\n  margin-top: 10px;\n}\n/*\n#masthead.fixed-nav .nav-search .srch_btn {\n  margin-top: -15px;\n}\n*/\n/* --------------------------------------------- */\n/* @media (min-width: 979px) { */\n@media (min-width: 979px) {\n  /*\n  #masthead .search-bar .nav-search .srch_btn {\n    line-height: 32px;\n  }\n  */\n  .search-bar {\n    width: 240px;\n  }\n}\n/*********************************/\n/* 20160522 修正導覽列的問題 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #masthead .search-bar {\n    width: 160px !important;\n  }\n}\n/*\n@media (max-width: 979px) {\n    .nav-collapse:not(.in) {\n        clear: none;\n    }\n} \n*/\n/* --------------------------------------------- */\n/* @media (max-width: 979px) { */\n@media (max-width: 979px) {\n  #masthead .search-bar {\n    width: 260px;\n    padding: 0;\n  }\n  #masthead .search-bar .nav-search {\n    margin-top: 28px;\n  }\n  #masthead .search-bar .nav-search form.gcse-placeholder {\n    margin-top: 1px;\n  }\n  #masthead.fixed-nav .search-bar form.gcse-placeholder {\n    margin-top: 10px;\n  }\n  /*\n  #masthead .nav-search .srch_btn {\n    margin-top: -3px;\n  }\n  */\n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav { */\n  /*\n  #masthead.fixed-nav .search-bar .nav-search {\n    margin-top: 18px;\n  }\n  */\n  /*\n  #masthead.fixed-nav .search-bar form.gcse-placeholder {\n    margin-top: 10px;\n  }*/\n}\n/* --------------------------------------------- */\n/* @media (max-width: 767px) { */\n@media (max-width: 767px) {\n  #masthead .search-bar {\n    width: 200px;\n  }\n}\n/* --------------------------------------------- */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  #masthead .search-bar {\n    display: none;\n    /*width: 200px;*/\n  }\n  /*\n  #masthead .search-bar .nav-search {\n    margin-right: 60px;\n  }\n  */\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#masthead .search-bar .gcse{position:fixed;top:-1000px;left:-1000px}#masthead .search-bar:hover{-moz-transition:.01s linear;-webkit-transition:.01s ease-out;transition:.01s linear;background-image:none}#masthead .nav-search{height:30px;position:relative;left:0;line-height:10px;color:#fff!important}#masthead .nav-search label{display:none}#masthead .nav-search input{float:left;height:30px;line-height:20px;padding:0 10px 0 0;font-size:15px;outline:0;border-radius:0;border:0;width:160px;margin:22px 0 0 33px;background:none;border-bottom:1px solid #f1f1f1;opacity:1;margin-top:-4px!important}.nav-search input.search_input,.search-bar:hover .nav-search input{background-color:#fff;color:#000!important;padding-left:.5em;border-radius:3px;margin-top:27px}#masthead.fixed-nav.affix .search-bar{padding-bottom:0}#masthead.fixed-nav .descriptionwrapper{display:none}.gsc-control-cse{border-color:transparent!important;background-color:transparent!important;padding:0!important}.gcse{margin-top:7px}.gcse,.nav-search .srch_btn{float:left}#masthead .gsc-control-wrapper-cse,.cse .gsc-control-wrapper-cse{width:160px!important;transition:width .2s!important}.gsc-search-button{display:none!important}#masthead .gsc-input-box{border-radius:.5em!important}.gsc-input-box input.gsc-input{opacity:1!important;background-image:none!important;box-shadow:inset 0 0 0 0 red;text-indent:0!important}@media (max-width:979px){#masthead .search-bar .gcse{margin-top:13px}#masthead .nav-search input{line-height:34px}}@media (min-width:979px) and (max-width:1200px){#masthead .gsc-control-wrapper-cse{width:135px!important}}@media (min-width:979px){#masthead .search-bar .gcse{margin-top:7px}#masthead .nav-search input{line-height:26px}}@media (max-width:680px){.search-bar{position:absolute;top:-1000px}.navbar .nav li.search{display:list-item!important}.navbar .nav li.search form{margin:0}.navbar .nav li.search input{width:calc(100% - 100px)}.navbar .nav li.search .srch_btn{height:42px;width:23px;background:url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px no-repeat;text-indent:9999px;position:relative;float:left;margin-left:18px;margin-right:10px;margin-top:-5px;display:inline!important;border-width:0}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/gsc-search/gsc-search-bar.less","gsc-search-bar.less"],"names":[],"mappings":"AAEA,4BACE,cAAA,CACA,WAAA,CACA,YCDF,CDIA,4BACE,2BAAA,CACA,gCAAA,CACA,sBAAA,CAEA,qBCFF,CDKA,sBAEE,WAAA,CACA,iBAAA,CACA,MAAA,CAEA,gBAAA,CACA,oBCHF,CDMA,4BACE,YCJF,CDOA,4BACE,UAAA,CAGA,WAAA,CACA,gBAAA,CAEA,kBAAA,CACA,cAAA,CAEA,SAAA,CACA,eAAA,CACA,QAAA,CASA,WAAA,CACA,oBAAA,CACA,eAAA,CACA,+BAAA,CACA,SAAA,CACA,yBCPF,CDyDA,mEAEE,qBAAA,CACA,oBAAA,CACA,iBAAA,CACA,iBAAA,CACA,eCVF,CDcA,sCACE,gBCZF,CDeA,wCACE,YCbF,CDkBA,iBACE,kCAAA,CACA,sCAAA,CACA,mBCfF,CDkBA,MAGE,cChBF,CDmBA,4BALE,UCXF,CDoBA,iEAEE,qBAAA,CACA,8BClBF,CDqBA,mBACE,sBCnBF,CDsBA,yBACE,4BCnBF,CDuBA,+BACE,mBAAA,CAEA,+BAAA,CACA,4BAAA,CACA,uBCrBF,CDwBA,yBAEE,4BACE,eCvBF,CD0BA,4BACE,gBCxBF,CACF,CD2BA,gDACE,mCACE,qBCzBF,CACF,CD6BA,yBACE,4BACE,cC3BF,CDoCA,4BACE,gBC7BF,CACF,CDkCA,yBACE,YAEE,iBAAA,CACA,WChCF,CDqCA,uBACE,2BClCF,CDqCA,4BACE,QCnCF,CDsCA,6BACE,wBCnCF,CDuCA,iCACE,WAAA,CACA,UAAA,CAEA,wHAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CACA,wBAAA,CACA,cCrCF,CAqBF","file":"gsc-search-bar.less","sourcesContent":["\n\n#masthead .search-bar .gcse {\n  position: fixed;\n  top: -1000px;\n  left: -1000px;\n}\n\n#masthead .search-bar:hover {\n  -moz-transition: .01s linear;\n  -webkit-transition: .01s ease-out;\n  transition: .01s linear;\n  /*opacity: 1; */\n  background-image:none;\n}\n\n#masthead .nav-search {\n  /*width: auto;*/\n  height: 30px;\n  position: relative;\n  left: 0;\n  /* float: left; */\n  line-height: 10px;\n  color: #fff !important;\n}\n\n#masthead .nav-search label {\n  display: none;\n}\n\n#masthead .nav-search input {\n  float: left;\n  /*width: 0;*/\n  background: none;\n  height: 30px;\n  line-height: 20px;\n  margin: 22px 0 0;\n  padding: 0 10px 0 0;\n  font-size: 15px;\n  /*color: #fff !important;*/\n  outline: 0;\n  border-radius: 0;\n  border: 0;\n  /*opacity: 1;*/\n  /*opacity: 1;*/\n  /*-webkit-transition: all .8s ease-in-out;\n  -moz-transition: all .8s ease-in-out;\n  -o-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n  -webkit-appearance: none;*/\n\n  width: 160px;\n  margin-left: 33px;\n  background: none;\n  border-bottom: 1px solid #f1f1f1;\n  opacity: 1;\n  margin-top: -4px !important;\n}\n\n/*\n.search-bar:hover .nav-search input {\n    width: 160px;\n    margin-left: 33px;\n    background: none;\n    border-bottom: 1px solid #f1f1f1;\n    opacity: 1;\n}\n*/\n/*\n.nav-search input::-webkit-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input::-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-ms-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input:focus {\n    color: #fff;\n}\n*/\n\n/*\n#masthead .search-bar input.gsc-input {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n#masthead .search-bar.visible input.gsc-input {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n*/\n/******************************/\n/* 縮小寬度之下的導航列 */\n\n.nav-search input.search_input,\n.search-bar:hover .nav-search input {\n  background-color: white;\n  color: black !important;\n  padding-left: 0.5em;\n  border-radius: 3px;\n  margin-top:27px;\n}\n\n\n#masthead.fixed-nav.affix .search-bar {\n  padding-bottom: 0;\n}\n\n#masthead.fixed-nav .descriptionwrapper {\n  display: none;\n}\n\n\n/***********************/\n.gsc-control-cse {\n  border-color: transparent !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n\n.gcse {\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 7px;\n}\n\n.nav-search .srch_btn {\n  float: left;\n}\n\n.cse .gsc-control-wrapper-cse, \n#masthead .gsc-control-wrapper-cse {\n  width: 160px !important;\n  transition: width .2s !important;\n}\n\n.gsc-search-button {\n  display: none !important;\n}\n\n#masthead .gsc-input-box {\n  border-radius: 0.5em !important;\n  /*border: 2px solid yellow;*/\n}\n\n.gsc-input-box input.gsc-input {\n  opacity: 1 !important;\n  /*border-width: 0;*/\n  background-image: none !important;\n  box-shadow: inset 0px 0px 0px 0px red;\n  text-indent: 0 !important;\n}\n\n@media (max-width: 979px) {\n  \n  #masthead .search-bar .gcse {\n    margin-top: 13px;\n  }\n\n  #masthead .nav-search input {\n    line-height: 34px;\n  }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n  #masthead .gsc-control-wrapper-cse {\n    width: 135px !important;\n  }\n}\n\n\n@media (min-width: 979px) {\n  #masthead .search-bar .gcse {\n    margin-top: 7px;\n  }\n\n  /*\n  #masthead.fixed-nav .search-bar .srch_btn {\n    margin-top: -15px;\n  }\n  */\n\n  #masthead .nav-search input {\n    line-height: 26px;\n  }\n\n}\n\n\n@media (max-width: 680px) {\n  .search-bar {\n    /*display: none;*/\n    position: absolute;\n    top: -1000px;\n  }\n\n\n  /*********************/\n  .navbar .nav li.search {\n    display: list-item !important;\n  }\n\n  .navbar .nav li.search form {\n    margin: 0;\n  }\n\n  .navbar .nav li.search input {\n    width: calc(100% - 100px);\n    /*margin: 0 18px;*/\n  }\n\n  .navbar .nav li.search .srch_btn {\n    height: 42px;\n    width: 23px;\n    margin-top: 0;\n    background: url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px center no-repeat;\n    text-indent: 9999px;\n    position: relative;\n    float: left;\n    margin-left: 18px;\n    margin-right: 10px;\n    margin-top: -5px;\n    display: inline !important;\n    border-width: 0;\n  }\n  /*\n  .search-bar {\n      clear: both;\n      padding-top: 0;\n      padding-bottom: 5px;\n  }\n  .search-bar form {\n      margin: 0;\n  }\n  .nav-search input {\n      margin-top: 5px;\n  }\n  .navbar .btn-navbar {\n      margin-bottom: 0;\n  }\n\n  /*.search-bar:hover .nav-search input {\n      width:100%;\n  }\n  */\n}","#masthead .search-bar .gcse {\n  position: fixed;\n  top: -1000px;\n  left: -1000px;\n}\n#masthead .search-bar:hover {\n  -moz-transition: 0.01s linear;\n  -webkit-transition: 0.01s ease-out;\n  transition: 0.01s linear;\n  /*opacity: 1; */\n  background-image: none;\n}\n#masthead .nav-search {\n  /*width: auto;*/\n  height: 30px;\n  position: relative;\n  left: 0;\n  /* float: left; */\n  line-height: 10px;\n  color: #fff !important;\n}\n#masthead .nav-search label {\n  display: none;\n}\n#masthead .nav-search input {\n  float: left;\n  /*width: 0;*/\n  height: 30px;\n  line-height: 20px;\n  margin: 22px 0 0;\n  padding: 0 10px 0 0;\n  font-size: 15px;\n  /*color: #fff !important;*/\n  outline: 0;\n  border-radius: 0;\n  border: 0;\n  /*opacity: 1;*/\n  /*opacity: 1;*/\n  /*-webkit-transition: all .8s ease-in-out;\n  -moz-transition: all .8s ease-in-out;\n  -o-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n  -webkit-appearance: none;*/\n  width: 160px;\n  margin-left: 33px;\n  background: none;\n  border-bottom: 1px solid #f1f1f1;\n  opacity: 1;\n  margin-top: -4px !important;\n}\n/*\n.search-bar:hover .nav-search input {\n    width: 160px;\n    margin-left: 33px;\n    background: none;\n    border-bottom: 1px solid #f1f1f1;\n    opacity: 1;\n}\n*/\n/*\n.nav-search input::-webkit-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input::-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-ms-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input:focus {\n    color: #fff;\n}\n*/\n/*\n#masthead .search-bar input.gsc-input {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n#masthead .search-bar.visible input.gsc-input {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n*/\n/******************************/\n/* 縮小寬度之下的導航列 */\n.nav-search input.search_input,\n.search-bar:hover .nav-search input {\n  background-color: white;\n  color: black !important;\n  padding-left: 0.5em;\n  border-radius: 3px;\n  margin-top: 27px;\n}\n#masthead.fixed-nav.affix .search-bar {\n  padding-bottom: 0;\n}\n#masthead.fixed-nav .descriptionwrapper {\n  display: none;\n}\n/***********************/\n.gsc-control-cse {\n  border-color: transparent !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n.gcse {\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 7px;\n}\n.nav-search .srch_btn {\n  float: left;\n}\n.cse .gsc-control-wrapper-cse,\n#masthead .gsc-control-wrapper-cse {\n  width: 160px !important;\n  transition: width 0.2s !important;\n}\n.gsc-search-button {\n  display: none !important;\n}\n#masthead .gsc-input-box {\n  border-radius: 0.5em !important;\n  /*border: 2px solid yellow;*/\n}\n.gsc-input-box input.gsc-input {\n  opacity: 1 !important;\n  /*border-width: 0;*/\n  background-image: none !important;\n  box-shadow: inset 0px 0px 0px 0px red;\n  text-indent: 0 !important;\n}\n@media (max-width: 979px) {\n  #masthead .search-bar .gcse {\n    margin-top: 13px;\n  }\n  #masthead .nav-search input {\n    line-height: 34px;\n  }\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  #masthead .gsc-control-wrapper-cse {\n    width: 135px !important;\n  }\n}\n@media (min-width: 979px) {\n  #masthead .search-bar .gcse {\n    margin-top: 7px;\n  }\n  /*\n  #masthead.fixed-nav .search-bar .srch_btn {\n    margin-top: -15px;\n  }\n  */\n  #masthead .nav-search input {\n    line-height: 26px;\n  }\n}\n@media (max-width: 680px) {\n  .search-bar {\n    /*display: none;*/\n    position: absolute;\n    top: -1000px;\n  }\n  /*********************/\n  .navbar .nav li.search {\n    display: list-item !important;\n  }\n  .navbar .nav li.search form {\n    margin: 0;\n  }\n  .navbar .nav li.search input {\n    width: calc(100% - 100px);\n    /*margin: 0 18px;*/\n  }\n  .navbar .nav li.search .srch_btn {\n    height: 42px;\n    width: 23px;\n    margin-top: 0;\n    background: url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px center no-repeat;\n    text-indent: 9999px;\n    position: relative;\n    float: left;\n    margin-left: 18px;\n    margin-right: 10px;\n    margin-top: -5px;\n    display: inline !important;\n    border-width: 0;\n  }\n  /*\n  .search-bar {\n      clear: both;\n      padding-top: 0;\n      padding-bottom: 5px;\n  }\n  .search-bar form {\n      margin: 0;\n  }\n  .nav-search input {\n      margin-top: 5px;\n  }\n  .navbar .btn-navbar {\n      margin-bottom: 0;\n  }\n\n  /*.search-bar:hover .nav-search input {\n      width:100%;\n  }\n  */\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".gcse{position:fixed;top:-1000px}.gcse .gsc-results-wrapper-overlay{line-height:1.5em;top:90px;height:calc(100vh - 210px);left:50px;width:calc(100vw - 160px)}body.fixed-nav .gcse .gsc-results-wrapper-overlay{top:70px;height:calc(100vh - 160px)}.gcse .gsc-results-wrapper-overlay .gcsc-branding{display:none}.gcse .gsc-results-wrapper-overlay .gsc-cursor-box{text-align:center}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page{padding:7px 10px;border:1px solid grey!important;border-radius:5px;cursor:pointer!important;color:grey;text-decoration:none!important}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page{color:#000}.gcse .gsc-results-wrapper-overlay .gsc-wrapper{max-height:calc(100% - 120px);overflow-y:auto}.gcse .gsc-results-wrapper-overlay .gsc-wrapper>.gsc-adBlock{display:none}.gcse .gsc-results-wrapper-overlay .gsc-wrapper img.gs-image{width:100%!important;height:auto!important;max-width:100%!important;max-height:100%!important;border:1px solid grey}.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image{width:176px}.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box{width:176px;height:auto!important;max-height:176px;top:-3em;margin-bottom:-3em;position:relative}.gcse .gsc-results-wrapper-overlay div.gs-title,.gcse .gsc-results-wrapper-overlay div.gsc-url-top{margin-left:calc(176px + 1em)}.gcse .gsc-results-wrapper-overlay div.gs-snippet{margin-left:19px}.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail{width:176px;display:block!important}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page,.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page:hover{background-color:#ad7518;color:#fff}@media (max-width:680px){.gcse .gsc-results-wrapper-overlay{top:20px;height:calc(100vh - 100px);left:20px;width:calc(100vw - 100px)}}@media (max-width:480px){.gcse .gsc-results-wrapper-overlay{top:0;height:calc(100vh - 60px);left:0;width:calc(100vw - 60px)}.gcse .gsc-results-wrapper-overlay div.gs-title,.gcse .gsc-results-wrapper-overlay div.gsc-url-top{margin-left:0}.gcse .gsc-results-wrapper-overlay div.gs-snippet{margin-left:6px}.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box,.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image,.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail{width:0}.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page{line-height:35px}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/gsc-search/gsc-search-result.less","gsc-search-result.less"],"names":[],"mappings":"AAAA,MACE,cAAA,CACA,WCCF,CDEA,mCACE,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,SAAA,CACA,yBCAF,CDGA,kDACE,QAAA,CACA,0BCDF,CDIA,kDACE,YCFF,CDKA,mDACE,iBCHF,CDMA,gEACE,gBAAA,CACA,+BAAA,CACA,iBAAA,CACA,wBAAA,CACA,UAAA,CACA,8BCJF,CDOA,wFACE,UCLF,CDQA,gDACE,6BAAA,CACA,eCNF,CDSA,6DACE,YCPF,CDUA,6DACE,oBAAA,CACA,qBAAA,CACA,wBAAA,CACA,yBAAA,CACA,qBCRF,CDWA,2DACE,WCTF,CDYA,kEACE,WAAA,CACA,qBAAA,CACA,gBAAA,CAEA,QAAA,CACA,kBAAA,CACA,iBCVF,CDaA,mGAEE,6BCXF,CDcA,kDACE,gBCZF,CDeA,6EACE,WAAA,CACA,uBCbF,CDgBA,8JAEE,wBAAA,CACA,UCdF,CDoBA,yBACE,mCACE,QAAA,CACA,0BAAA,CAEA,SAAA,CACA,yBCjBF,CACF,CDwBA,yBACE,mCACE,KAAA,CACA,yBAAA,CAEA,MAAA,CACA,wBCrBF,CDwBA,mGAEE,aCtBF,CDyBA,kDACE,eCvBF,CD0BA,0MAGE,OCxBF,CD2BA,gEACE,gBCzBF,CACF","file":"gsc-search-result.less","sourcesContent":[".gcse {\n  position: fixed;\n  top: -1000px;\n}\n\n.gcse .gsc-results-wrapper-overlay {\n  line-height: 1.5em;\n  top: 90px;\n  height: calc(100vh - 210px);\n  left: 50px;\n  width: calc(100vw - 160px);\n}\n\nbody.fixed-nav .gcse .gsc-results-wrapper-overlay {\n  top: 70px;\n  height: calc(100vh - 160px);\n}\n\n.gcse .gsc-results-wrapper-overlay .gcsc-branding {\n  display: none;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-cursor-box {\n  text-align: center;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n  padding: 7px 10px;\n  border: 1px solid gray !important;\n  border-radius: 5px;\n  cursor: pointer !important;\n  color: gray;\n  text-decoration: none !important;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page {\n  color: black;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper {\n  max-height: calc(100% - 120px);\n  overflow-y: auto;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper > .gsc-adBlock {\n  display: none;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper img.gs-image {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  border: 1px solid gray;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n  width: 176px;\n}\n\n.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box {\n  width: 176px;\n  height: auto !important;\n  max-height: 176px;\n  /*margin-right: calc(1em + 7px);*/\n  top: -3em;\n  margin-bottom: -3em;\n  position: relative;\n}\n\n.gcse .gsc-results-wrapper-overlay div.gs-title,\n.gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n  margin-left: calc(176px + 1em);\n}\n\n.gcse .gsc-results-wrapper-overlay div.gs-snippet {\n  margin-left: 19px;\n}\n\n.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail {\n  width: 176px;\n  display: block !important;\n}\n\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page,\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page:hover {\n  background-color: #AD7518;\n  color: white;\n}\n\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n\n@media (max-width: 680px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 20px;\n    height: calc(100vh - 100px);\n    \n    left: 20px;\n    width: calc(100vw - 100px);    \n  }\n}\n\n\n/* ****************************************** */\n/* @media (max-width: 460px) { */\n\n@media (max-width: 480px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 0px;\n    height: calc(100vh - 60px);\n    \n    left: 0px;\n    width: calc(100vw - 60px);    \n  }\n  \n  .gcse .gsc-results-wrapper-overlay div.gs-title, \n  .gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n    margin-left: 0;\n  }\n  \n  .gcse .gsc-results-wrapper-overlay div.gs-snippet {\n    margin-left: 6px;\n  }\n  \n  .gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail,\n  .gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box,\n  .gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n    width: 0;\n  }\n  \n  .gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n    line-height: 35px;\n  }\n}",".gcse {\n  position: fixed;\n  top: -1000px;\n}\n.gcse .gsc-results-wrapper-overlay {\n  line-height: 1.5em;\n  top: 90px;\n  height: calc(100vh - 210px);\n  left: 50px;\n  width: calc(100vw - 160px);\n}\nbody.fixed-nav .gcse .gsc-results-wrapper-overlay {\n  top: 70px;\n  height: calc(100vh - 160px);\n}\n.gcse .gsc-results-wrapper-overlay .gcsc-branding {\n  display: none;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor-box {\n  text-align: center;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n  padding: 7px 10px;\n  border: 1px solid gray !important;\n  border-radius: 5px;\n  cursor: pointer !important;\n  color: gray;\n  text-decoration: none !important;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page {\n  color: black;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper {\n  max-height: calc(100% - 120px);\n  overflow-y: auto;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper > .gsc-adBlock {\n  display: none;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper img.gs-image {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  border: 1px solid gray;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n  width: 176px;\n}\n.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box {\n  width: 176px;\n  height: auto !important;\n  max-height: 176px;\n  /*margin-right: calc(1em + 7px);*/\n  top: -3em;\n  margin-bottom: -3em;\n  position: relative;\n}\n.gcse .gsc-results-wrapper-overlay div.gs-title,\n.gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n  margin-left: calc(176px + 1em);\n}\n.gcse .gsc-results-wrapper-overlay div.gs-snippet {\n  margin-left: 19px;\n}\n.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail {\n  width: 176px;\n  display: block !important;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page,\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page:hover {\n  background-color: #AD7518;\n  color: white;\n}\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 20px;\n    height: calc(100vh - 100px);\n    left: 20px;\n    width: calc(100vw - 100px);\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 460px) { */\n@media (max-width: 480px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 0px;\n    height: calc(100vh - 60px);\n    left: 0px;\n    width: calc(100vw - 60px);\n  }\n  .gcse .gsc-results-wrapper-overlay div.gs-title,\n  .gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n    margin-left: 0;\n  }\n  .gcse .gsc-results-wrapper-overlay div.gs-snippet {\n    margin-left: 6px;\n  }\n  .gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail,\n  .gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box,\n  .gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n    width: 0;\n  }\n  .gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n    line-height: 35px;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/masthead/masthead.less":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/masthead/masthead.less ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#masthead{padding-left:25px}#masthead #header h1{line-height:30px;margin-top:10px}#masthead.fixed-nav{opacity:1!important;background-color:rgba(34,34,34,.9)!important;position:fixed!important}#masthead.fixed-nav .affix #header h1{line-height:22px}@media (min-width:979px) and (max-width:1200px){.navbar{width:960px!important}}@media (max-width:979px){#masthead{position:fixed;padding-left:50px}#masthead #header #header-inner{margin-top:15px}#masthead.fixed-nav.affix .btn-navbar{margin-top:5px;margin-bottom:0}#masthead.fixed-nav.affix #header h1{line-height:55px;margin-top:0!important}#masthead.fixed-nav.affix #header-inner{margin-top:0}#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a{padding-left:22px!important}#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:active,#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:focus,#masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:hover{padding-left:19px!important}}@media (max-width:480px){#masthead{height:auto;padding-left:10px}#masthead #header{margin-right:0;max-width:calc(100% - 101px);overflow-x:hidden;white-space:nowrap}#masthead #header .description{display:none}}@media (max-height:480px){#masthead.fixed-nav{position:absolute!important}}#masthead.fixed-nav img{margin-top:0;width:auto;max-height:85%}#masthead.fixed-nav form{margin-top:-16px}#masthead.fixed-nav h1{font-size:20px;margin-top:9px}#masthead.fixed-nav{position:fixed;top:0;width:100%!important;margin:0 auto;z-index:999;height:56px;background-color:rgba(0,0,0,.9);box-shadow:0 2px 3px rgba(51,51,102,.5)}#masthead.fixed-nav .navbar{height:56px;max-height:56px;overflow-y:hidden}@media (max-width:480px){#masthead .navbar{overflow-y:initial!important}#masthead.fixed-nav{box-shadow:none}}@media (max-height:480px){#masthead.fixed-nav{background:#222;margin-bottom:50px;left:0;top:0;width:100%;z-index:999;box-shadow:none;position:static}#masthead .container{box-shadow:none}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/masthead/masthead.less","masthead.less"],"names":[],"mappings":"AAIA,UACE,iBCFF,CDCA,qBAII,gBAAA,CACA,eCFJ,CDQA,oBACE,mBAAA,CACA,4CAAA,CAEA,wBCNF,CDEA,sCAOI,gBCNJ,CDYA,gDACE,QACE,qBCVF,CACF,CDeA,yBAEE,UACE,cAAA,CACA,iBCdF,CDYA,gCAMI,eCdJ,CDkBA,sCAEI,cAAA,CACA,eCjBJ,CDcA,qCAMI,gBAAA,CACA,sBCjBJ,CDUA,wCAUI,YCjBJ,CDOA,2DAcM,2BClBN,CDIA,oMAmBM,2BClBN,CACF,CD4BA,yBACE,UACE,WAAA,CACA,iBCzBF,CDuBA,kBAOE,cAAA,CACA,4BAAA,CAEA,iBAAA,CACA,kBC1BF,CDeA,+BAcE,YC1BF,CAOF,CDgCA,0BACE,oBACE,2BC9BF,CACF,CDoCA,wBACE,YAAA,CACA,UAAA,CACA,cClCF,CDsCA,yBACE,gBCpCF,CDsCA,uBACE,cAAA,CACA,cCpCF,CD2CA,oBACE,cAAA,CACA,KAAA,CACA,oBAAA,CACA,aAAA,CACA,WAAA,CACA,WAAA,CACA,+BAAA,CAOA,uCCtCF,CDyCA,4BACE,WAAA,CACA,eAAA,CACA,iBCvCF,CD0CA,yBAQE,kBAGI,4BC3CJ,CD+CA,oBACE,eC7CF,CACF,CDiDA,0BAQE,oBACE,eAAA,CACA,kBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,eChDF,CDmDA,qBACE,eCjDF,CACF","file":"masthead.less","sourcesContent":["\n\n/******************/\n\n#masthead {\n  padding-left: 25px;\n\n  #header h1 {\n    line-height:30px;\n    margin-top: 10px;\n  }\n} \n\n// ----------------------\n\n#masthead.fixed-nav {\n  opacity: 1 !important;\n  background-color: rgba(34, 34, 34, 0.9) !important;\n  top: 0;\n  position: fixed !important;\n\n  .affix #header h1 {\n    line-height: 22px;\n  }\n}\n\n// -----------------------------\n\n@media (min-width: 979px) and (max-width: 1200px) {\n  .navbar {\n    width: 960px !important;\n  }\n}\n\n// -----------------------\n\n@media (max-width: 979px) {\n\n  #masthead {\n    position: fixed;\n    padding-left: 50px;\n\n    #header #header-inner{\n      /*margin-left: 10px !important;*/\n      margin-top: 15px;\n    }\n  }\n\n  #masthead.fixed-nav.affix {\n    .btn-navbar {\n      margin-top: 5px;\n      margin-bottom: 0;\n    }\n    #header h1 {\n      line-height: 55px;\n      margin-top: 0 !important;\n    }\n    #header-inner {\n      margin-top: 0px;\n    }\n    .navbar .nav .dropdown-menu li {\n      a {\n        padding-left:22px !important;\n      }\n      a:hover, \n        a:active, \n        a:focus {\n        padding-left:19px !important;\n      }\n    }\n\n  }\n\n}\n\n\n/* ------------------------------ */\n\n@media (max-width: 480px) {\n  #masthead {\n    height: auto;\n    padding-left: 10px;\n    \n    #header { \n      \n    /*margin-top: 15px;*/\n    margin-right:0 ;\n    max-width: calc(100% - 101px);\n    /*margin-left: 5px;*/\n    overflow-x: hidden;\n    white-space: nowrap;\n    \n      .description {\n    display: none;\n  }\n    }\n  } \n  /*\n  #masthead #header h1 {\n      line-height:50px;\n      margin-top: 2px;\n  }\n  */\n}\n\n\n@media (max-height: 480px) {\n  #masthead.fixed-nav {\n    position: absolute !important;\n  }\n}\n\n//--------------------------------------\n// 以下還沒整理\n\n#masthead.fixed-nav img {\n  margin-top: 0;\n  width: auto;\n  max-height: 85%;\n}\n\n\n#masthead.fixed-nav form {\n  margin-top: -16px;\n}\n#masthead.fixed-nav h1 {\n  font-size: 20px;\n  margin-top: 9px;\n}\n\n/***\n * 這是整個最上面的navbar設定\n **/\n\n#masthead.fixed-nav {\n  position: fixed;\n  top: 0;\n  width: 100% !important;\n  margin: 0px auto;\n  z-index: 999;\n  height: 56px;\n  background-color: rgba(0,0,0,0.9);\n  /*opacity: 0.9;*/\n  /*\n  -webkit-box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  -moz-box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  */\n  box-shadow: 0px 2px 3px rgba(20%,20%,40%,0.5);\n}\n\n#masthead.fixed-nav .navbar {\n  height: 56px;\n  max-height: 56px;\n  overflow-y: hidden;\n}\n\n@media (max-width: 480px) {\n  // 從480px開始，就沒有區分fixed-nav的差別，全部都要一樣小\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n  #masthead {\n    \n    .navbar {\n      overflow-y: initial !important;\n    }\n  }\n  \n  #masthead.fixed-nav {\n    box-shadow: none;\n  }\n  \n}\n\n@media (max-height: 480px) {\n  // 從480px開始，就沒有區分fixed-nav的差別，全部都要一樣小\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n  #masthead.fixed-nav {\n    background: #222222;\n    margin-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: 999;\n    box-shadow: none;\n    position: static;\n  }\n  \n  #masthead .container {\n    box-shadow: none;\n  }\n}\n\n\n/*****************************/\n/* 20161116 */\n@media (max-width: 979px) {\n  #masthead.fixed-nav > .container {\n    /*box-shadow: 2px 2px 3px rgba(20%,20%,40%,0.5);*/\n  }\n}","/******************/\n#masthead {\n  padding-left: 25px;\n}\n#masthead #header h1 {\n  line-height: 30px;\n  margin-top: 10px;\n}\n#masthead.fixed-nav {\n  opacity: 1 !important;\n  background-color: rgba(34, 34, 34, 0.9) !important;\n  top: 0;\n  position: fixed !important;\n}\n#masthead.fixed-nav .affix #header h1 {\n  line-height: 22px;\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  .navbar {\n    width: 960px !important;\n  }\n}\n@media (max-width: 979px) {\n  #masthead {\n    position: fixed;\n    padding-left: 50px;\n  }\n  #masthead #header #header-inner {\n    /*margin-left: 10px !important;*/\n    margin-top: 15px;\n  }\n  #masthead.fixed-nav.affix .btn-navbar {\n    margin-top: 5px;\n    margin-bottom: 0;\n  }\n  #masthead.fixed-nav.affix #header h1 {\n    line-height: 55px;\n    margin-top: 0 !important;\n  }\n  #masthead.fixed-nav.affix #header-inner {\n    margin-top: 0px;\n  }\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a {\n    padding-left: 22px !important;\n  }\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:hover,\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:active,\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:focus {\n    padding-left: 19px !important;\n  }\n}\n/* ------------------------------ */\n@media (max-width: 480px) {\n  #masthead {\n    height: auto;\n    padding-left: 10px;\n  }\n  #masthead #header {\n    /*margin-top: 15px;*/\n    margin-right: 0 ;\n    max-width: calc(100% - 101px);\n    /*margin-left: 5px;*/\n    overflow-x: hidden;\n    white-space: nowrap;\n  }\n  #masthead #header .description {\n    display: none;\n  }\n  /*\n  #masthead #header h1 {\n      line-height:50px;\n      margin-top: 2px;\n  }\n  */\n}\n@media (max-height: 480px) {\n  #masthead.fixed-nav {\n    position: absolute !important;\n  }\n}\n#masthead.fixed-nav img {\n  margin-top: 0;\n  width: auto;\n  max-height: 85%;\n}\n#masthead.fixed-nav form {\n  margin-top: -16px;\n}\n#masthead.fixed-nav h1 {\n  font-size: 20px;\n  margin-top: 9px;\n}\n/***\n * 這是整個最上面的navbar設定\n **/\n#masthead.fixed-nav {\n  position: fixed;\n  top: 0;\n  width: 100% !important;\n  margin: 0px auto;\n  z-index: 999;\n  height: 56px;\n  background-color: rgba(0, 0, 0, 0.9);\n  /*opacity: 0.9;*/\n  /*\n  -webkit-box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  -moz-box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  box-shadow: 0 5px 3px rgba(0, 0, 0, .1);\n  */\n  box-shadow: 0px 2px 3px rgba(51, 51, 102, 0.5);\n}\n#masthead.fixed-nav .navbar {\n  height: 56px;\n  max-height: 56px;\n  overflow-y: hidden;\n}\n@media (max-width: 480px) {\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n  #masthead .navbar {\n    overflow-y: initial !important;\n  }\n  #masthead.fixed-nav {\n    box-shadow: none;\n  }\n}\n@media (max-height: 480px) {\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n  #masthead.fixed-nav {\n    background: #222222;\n    margin-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: 999;\n    box-shadow: none;\n    position: static;\n  }\n  #masthead .container {\n    box-shadow: none;\n  }\n}\n/*****************************/\n/* 20161116 */\n@media (max-width: 979px) {\n  #masthead.fixed-nav > .container {\n    /*box-shadow: 2px 2px 3px rgba(20%,20%,40%,0.5);*/\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/random_posts.less":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/random_posts.less ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "ul#random_posts{list-style-type:none;padding:0 0 .5em}#random_posts dd{line-height:22px;margin:0;padding:8px 15px 8px 10px;position:relative;min-height:55px;border-left:3px solid transparent}#random_posts dd:hover{background:#f8f8f8;border-left:3px solid #f69087;cursor:pointer}#random_posts img{float:left;margin-right:5px;max-width:70px;height:auto;background-color:#f5f5f5;padding:3px;transition:all .2s linear 0s}#random_posts .random-summary{font-size:11px;background:none;padding:5px;margin-right:8px}#random_posts li{margin-bottom:10px;border-bottom:1px solid #eee;padding:4px}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/sidebar/random_posts.less","random_posts.less"],"names":[],"mappings":"AACA,gBACE,oBAAA,CAEA,gBCAF,CDGA,iBACE,gBAAA,CACA,QAAA,CACA,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,iCCDF,CDIA,uBACE,kBAAA,CACA,6BAAA,CACA,cCFF,CDKA,kBAEE,UAAA,CACA,gBAAA,CACA,cAAA,CACA,WAAA,CACA,wBAAA,CACA,WAAA,CACA,4BCHF,CD2BA,8BACE,cAAA,CACA,eAAA,CACA,WAAA,CACA,gBCPF,CDUA,iBACE,kBAAA,CACA,4BAAA,CACA,WCRF","file":"random_posts.less","sourcesContent":["\nul#random_posts {\n  list-style-type: none;\n  padding: 0px;\n  padding-bottom: 0.5em;\n}\n\n#random_posts dd {\n  line-height: 22px;\n  margin: 0;\n  padding: 8px 15px 8px 10px;\n  position: relative;\n  min-height: 55px;\n  border-left: 3px solid transparent;\n}\n\n#random_posts dd:hover {\n  background:#F8F8F8;\n  border-left:3px solid #F69087;\n  cursor:pointer\n}\n\n#random_posts img {\n  /*border-radius: 10px;*/\n  float: left;\n  margin-right: 5px;\n  max-width: 70px;\n  height: auto;\n  background-color: #F5F5F5;\n  padding: 3px;\n  transition: all 0.2s linear 0s;\n}\n\n/*\n#random_posts img:hover {\n    opacity: 0.6;\n}\n*/\n\n/*\n#random_posts a {\n    font-size: 12px;\n    text-transform: uppercase;\n    padding: 0px auto 5px;\n    \n}\n*/\n\n/*\n#random_posts a:hover {\n    text-decoration: none;\n}\n*/\n\n#random_posts .random-summary {\n  font-size: 11px;\n  background: none;\n  padding: 5px;\n  margin-right: 8px;\n}\n\n#random_posts li {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #EEEEEE;\n  padding: 4px;\n}","ul#random_posts {\n  list-style-type: none;\n  padding: 0px;\n  padding-bottom: 0.5em;\n}\n#random_posts dd {\n  line-height: 22px;\n  margin: 0;\n  padding: 8px 15px 8px 10px;\n  position: relative;\n  min-height: 55px;\n  border-left: 3px solid transparent;\n}\n#random_posts dd:hover {\n  background: #F8F8F8;\n  border-left: 3px solid #F69087;\n  cursor: pointer;\n}\n#random_posts img {\n  /*border-radius: 10px;*/\n  float: left;\n  margin-right: 5px;\n  max-width: 70px;\n  height: auto;\n  background-color: #F5F5F5;\n  padding: 3px;\n  transition: all 0.2s linear 0s;\n}\n/*\n#random_posts img:hover {\n    opacity: 0.6;\n}\n*/\n/*\n#random_posts a {\n    font-size: 12px;\n    text-transform: uppercase;\n    padding: 0px auto 5px;\n    \n}\n*/\n/*\n#random_posts a:hover {\n    text-decoration: none;\n}\n*/\n#random_posts .random-summary {\n  font-size: 11px;\n  background: none;\n  padding: 5px;\n  margin-right: 8px;\n}\n#random_posts li {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #EEEEEE;\n  padding: 4px;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/sidebar.less":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/sidebar.less ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#sidebar .widget a h2{cursor:inherit}#sidebar .widget h2{cursor:default}#sidebar .widget h2>span{position:relative;bottom:-2px;display:inline-block;border-bottom:2px solid #e23a3e;padding-bottom:5px;margin-top:0}#sidebar .widget .buttons a{cursor:pointer;display:block;border-radius:3px;font-size:13px;padding:3px 10px;background:#333;color:#fff;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin-top:5px;margin-bottom:12px;margin-left:.5rem}#sidebar .widget .buttons a:hover{color:#f69087}#sidebar .widget-content li a{font-size:inherit;color:inherit}#sidebar .widget>a.icon{cursor:pointer}#sidebar .widget.about-me .description{margin-bottom:.5rem}#sidebar .widget.about-me .description .avatar-image-container{background-image:url(//lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=50);background-repeat:no-repeat;height:54px;width:54px;border-width:0;margin-left:.5rem;display:block;float:right}#sidebar .widget.about-me .link-buttons{white-space:nowrap}@media (max-width:1200px) and (min-width:979px){#sidebar .about-link .read-more{padding:5px;margin-top:2px}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/sidebar/sidebar.less","sidebar.less"],"names":[],"mappings":"AAGA,sBAIM,cCLN,CDCA,oBAOM,cCLN,CDFA,yBAUM,iBAAA,CACA,WAAA,CACA,oBAAA,CACA,+BAAA,CACA,kBAAA,CACA,YCLN,CDVA,4BAoBQ,cAAA,CACA,aAAA,CAEA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,wBAAA,CACA,cAAA,CACA,kBAAA,CACA,iBCRR,CDzBA,kCAoCQ,aCRR,CD5BA,8BA0CI,iBAAA,CACA,aCXJ,CDhCA,wBA+CI,cCZJ,CDnCA,uCAoDM,mBCdN,CDtCA,+DAwDM,sHAAA,CACA,2BAAA,CAEA,WAAA,CACA,UAAA,CAIA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,WCfN,CDpDA,wCAuEM,kBChBN,CDuBA,gDACE,gCAEI,WAAA,CACA,cCpBJ,CACF","file":"sidebar.less","sourcesContent":["// ----------------------------------------\n// 以下尚未整理\n\n#sidebar {\n\n  .widget {\n    a h2 {\n      cursor: inherit;\n    }\n    h2 {\n      cursor: default;\n    }\n    h2 > span {\n      position: relative;\n      bottom: -2px;\n      display: inline-block;\n      border-bottom: 2px solid #e23a3e;\n      padding-bottom: 5px;\n      margin-top: 0px;\n    }\n    \n    .buttons {\n      a {\n        cursor: pointer;\n        display: block;\n        //float: left;\n        border-radius: 3px;\n        font-size: 13px;\n        padding: 3px 10px;\n        background: #333;\n        color: #fff;\n        letter-spacing: 0.5px;\n        text-transform: uppercase;\n        border: 1px solid #1D1D1D;\n        margin-top: 5px;\n        margin-bottom: 12px;\n        margin-left: 0.5rem;\n      } \n      a:hover {\n        color: #F69087;\n      } \n    }\n  }\n  \n  .widget-content li a {\n    font-size: inherit;\n    color: inherit;\n  }\n\n  .widget > a.icon {\n    cursor: pointer;\n  }\n\n  .widget.about-me {\n    .description {\n      margin-bottom: 0.5rem;\n    }\n    \n    .description .avatar-image-container {\n      background-image: url(//lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=50);\n      background-repeat: no-repeat;\n      border-width: 0;\n      height: 54px;\n      width: 54px;\n      border-right-width: 0px; \n      border-top-width: 0px; \n      border-bottom-width: 0px; \n      border-left-width: 0px;\n      margin-left: 0.5rem;\n      display: block;\n      float: right;\n    }\n\n    .link-buttons {\n      white-space: nowrap;\n    }\n  }\n}\n\n/*****************************************/\n/* 20160626 小畫面下面about me按鈕錯誤 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #sidebar {\n    .about-link .read-more {\n      padding: 5px;\n      margin-top: 2px;\n    }\n  }\n}   /* @media (max-width: 1200px) and (min-width: 979px) { */\n","#sidebar .widget a h2 {\n  cursor: inherit;\n}\n#sidebar .widget h2 {\n  cursor: default;\n}\n#sidebar .widget h2 > span {\n  position: relative;\n  bottom: -2px;\n  display: inline-block;\n  border-bottom: 2px solid #e23a3e;\n  padding-bottom: 5px;\n  margin-top: 0px;\n}\n#sidebar .widget .buttons a {\n  cursor: pointer;\n  display: block;\n  border-radius: 3px;\n  font-size: 13px;\n  padding: 3px 10px;\n  background: #333;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: 1px solid #1D1D1D;\n  margin-top: 5px;\n  margin-bottom: 12px;\n  margin-left: 0.5rem;\n}\n#sidebar .widget .buttons a:hover {\n  color: #F69087;\n}\n#sidebar .widget-content li a {\n  font-size: inherit;\n  color: inherit;\n}\n#sidebar .widget > a.icon {\n  cursor: pointer;\n}\n#sidebar .widget.about-me .description {\n  margin-bottom: 0.5rem;\n}\n#sidebar .widget.about-me .description .avatar-image-container {\n  background-image: url(//lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=50);\n  background-repeat: no-repeat;\n  border-width: 0;\n  height: 54px;\n  width: 54px;\n  border-right-width: 0px;\n  border-top-width: 0px;\n  border-bottom-width: 0px;\n  border-left-width: 0px;\n  margin-left: 0.5rem;\n  display: block;\n  float: right;\n}\n#sidebar .widget.about-me .link-buttons {\n  white-space: nowrap;\n}\n/*****************************************/\n/* 20160626 小畫面下面about me按鈕錯誤 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #sidebar .about-link .read-more {\n    padding: 5px;\n    margin-top: 2px;\n  }\n}\n/* @media (max-width: 1200px) and (min-width: 979px) { */\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/2_style.less":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/2_style.less ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "div.post-avatar{border:3px solid #eaeaea;width:100px;height:100px;overflow:hidden;float:left;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}div.meta1 p{padding:10px 0;margin-bottom:-20px;font-size:16px}.meta1 span{margin-right:10px}.badge,.label{display:inline-block;padding:2px 4px;font-size:11.844px;font-weight:700;line-height:14px;color:#fff;vertical-align:baseline;white-space:nowrap;text-shadow:0 -1px 0 rgba(0,0,0,.25);background-color:#999}.label{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.badge{padding-left:9px;padding-right:9px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px}.badge:empty,.label:empty{display:none}a.badge:focus,a.badge:hover,a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/2_style.less","2_style.less"],"names":[],"mappings":"AAAA,gBACE,wBAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,UAAA,CACA,sCAAA,CACA,mCAAA,CACA,iCAAA,CACA,8BCCF,CDGA,YACE,cAAA,CACA,mBAAA,CACA,cCDF,CDGA,YAAY,iBCAZ,CDEA,cAEC,oBAAA,CACA,eAAA,CACA,kBAAA,CACA,eAAA,CACA,gBAAA,CACA,UAAA,CACA,uBAAA,CACA,kBAAA,CACA,oCAAA,CACA,qBCAD,CDGA,OACC,yBAAA,CACA,sBAAA,CACA,iBCDD,CDIA,OACC,gBAAA,CACA,iBAAA,CACA,yBAAA,CACA,sBAAA,CACA,iBCFD,CDKA,0BAEC,YCHD,CDMA,wDAIC,UAAA,CACA,oBAAA,CACA,cCJD","file":"2_style.less","sourcesContent":["div.post-avatar {\n  border: 3px solid #eaeaea;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  float: left;\n  -webkit-transition: all .2s ease-in-out;\n  -moz-transition: all .2s ease-in-out;\n  -o-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n}\n\n\ndiv.meta1 p {\n  padding: 10px 0;\n  margin-bottom: -20px;\n  font-size: 16px;\n}\n.meta1 span{margin-right:10px}\n\n.label,\n.badge {\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tfont-size: 11.844px;\n\tfont-weight: bold;\n\tline-height: 14px;\n\tcolor: #fff;\n\tvertical-align: baseline;\n\twhite-space: nowrap;\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n\tbackground-color: #999\n}\n\n.label {\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px\n}\n\n.badge {\n\tpadding-left: 9px;\n\tpadding-right: 9px;\n\t-webkit-border-radius: 9px;\n\t-moz-border-radius: 9px;\n\tborder-radius: 9px\n}\n\n.label:empty,\n.badge:empty {\n\tdisplay: none\n}\n\na.label:hover,\na.label:focus,\na.badge:hover,\na.badge:focus {\n\tcolor: #fff;\n\ttext-decoration: none;\n\tcursor: pointer\n}\n\n\n","div.post-avatar {\n  border: 3px solid #eaeaea;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  float: left;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\ndiv.meta1 p {\n  padding: 10px 0;\n  margin-bottom: -20px;\n  font-size: 16px;\n}\n.meta1 span {\n  margin-right: 10px;\n}\n.label,\n.badge {\n  display: inline-block;\n  padding: 2px 4px;\n  font-size: 11.844px;\n  font-weight: bold;\n  line-height: 14px;\n  color: #fff;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  background-color: #999;\n}\n.label {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.badge {\n  padding-left: 9px;\n  padding-right: 9px;\n  -webkit-border-radius: 9px;\n  -moz-border-radius: 9px;\n  border-radius: 9px;\n}\n.label:empty,\n.badge:empty {\n  display: none;\n}\na.label:hover,\na.label:focus,\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/3_custom_style.less":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/3_custom_style.less ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#header-inner{width:auto!important;background-position:0 0!important;background-image:none!important}#header-inner .descriptionwrapper{margin-top:5px}.fixed-nav.affix #header-inner .descriptionwrapper,.fixed-nav.affix #header-inner img{display:none}.fixed-nav.affix #header-inner{background-image:none!important}#sidebar-popular-post .popular-posts>ul>dd{display:none}#sidebar-popular-post .popular-posts>ul>dd:first-of-type,#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(2),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(3),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(4),#sidebar-popular-post .popular-posts>ul>dd:nth-of-type(5){display:block}.site-footer .cloud-label-widget-content a{color:#ccc}.entry-content{line-height:200%}.entry-content>article>p{text-indent:2em}.entry-content h4{font-size:24pt;color:#bd8a39}.entry-content h5{font-size:20pt;color:#bd8a39}.entry-content h6{font-size:18pt;font-style:italic;color:#bd8a39}.entry-content hr{border-top:2px solid #deb46f;border-bottom:2px solid #bd8a39}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/3_custom_style.less","3_custom_style.less"],"names":[],"mappings":"AAAA,cACE,oBAAA,CAEA,iCAAA,CACA,+BCCF,CDEA,kCACE,cCAF,CDGA,sFAEE,YCDF,CDKA,+BACE,+BCHF,CDMA,2CACE,YCJF,CDOA,iSAKE,aCLF,CDQA,2CACE,UCNF,CDYA,eACE,gBCTF,CDYA,yBACE,eCVF,CDaA,kBACE,cAAA,CACA,aCXF,CDcA,kBACE,cAAA,CACA,aCZF,CDeA,kBACE,cAAA,CACA,iBAAA,CACA,aCbF,CDgBA,kBACE,4BAAA,CACA,+BCdF","file":"3_custom_style.less","sourcesContent":["#header-inner {\n  width: auto !important;\n  /*padding-left: 60px !important;*/\n  background-position: left top !important;\n  background-image: none !important;\n}\n\n#header-inner .descriptionwrapper {\n  margin-top:5px;\n}\n\n.fixed-nav.affix #header-inner .descriptionwrapper,\n.fixed-nav.affix #header-inner img {\n  display:none;\n\n}\n\n.fixed-nav.affix #header-inner {\n  background-image: none !important;\n}\n\n#sidebar-popular-post .popular-posts > ul > dd {\n  display:none;\n}\n\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display:block;\n}\n\n.site-footer .cloud-label-widget-content a {\n  color: #CCC;\n}\n\n\n/* ****************** */\n\n.entry-content {\n  line-height: 200%;\n}\n\n.entry-content > article > p {\n  text-indent: 2em;\n}\n\n.entry-content h4 {\n  font-size: 24pt;\n  color:#BD8A39;\n}\n\n.entry-content h5 {\n  font-size: 20pt;\n  color:#BD8A39;\n}\n\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color:#BD8A39;\n}\n\n.entry-content hr {\n  border-top: 2px solid #DEB46F;\n  border-bottom: 2px solid #BD8A39;\n}\n/*\n.entry-content ul {\n\n}\n\n*/\n","#header-inner {\n  width: auto !important;\n  /*padding-left: 60px !important;*/\n  background-position: left top !important;\n  background-image: none !important;\n}\n#header-inner .descriptionwrapper {\n  margin-top: 5px;\n}\n.fixed-nav.affix #header-inner .descriptionwrapper,\n.fixed-nav.affix #header-inner img {\n  display: none;\n}\n.fixed-nav.affix #header-inner {\n  background-image: none !important;\n}\n#sidebar-popular-post .popular-posts > ul > dd {\n  display: none;\n}\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display: block;\n}\n.site-footer .cloud-label-widget-content a {\n  color: #CCC;\n}\n/* ****************** */\n.entry-content {\n  line-height: 200%;\n}\n.entry-content > article > p {\n  text-indent: 2em;\n}\n.entry-content h4 {\n  font-size: 24pt;\n  color: #BD8A39;\n}\n.entry-content h5 {\n  font-size: 20pt;\n  color: #BD8A39;\n}\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #BD8A39;\n}\n.entry-content hr {\n  border-top: 2px solid #DEB46F;\n  border-bottom: 2px solid #BD8A39;\n}\n/*\n.entry-content ul {\n\n}\n\n*/\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/content.less":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/content.less ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#content-wrapper{padding-top:80px;padding-left:50px}@media (max-width:979px){#content-wrapper{padding-top:80px}#content-wrapper #primary{padding-left:0}}@media (max-width:480px){#content-wrapper{padding-top:50px!important;padding-left:0}#content-wrapper #primary{padding-left:0!important;padding-right:0!important}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/content.less","content.less"],"names":[],"mappings":"AAAA,iBACE,gBAAA,CACA,iBCCF,CDIA,yBAEE,iBACE,gBCHF,CDEA,0BAII,cCHJ,CACF,CDSA,yBACE,iBACE,0BAAA,CACA,cCPF,CDKA,0BAKI,wBAAA,CACA,yBCPJ,CAMF","file":"content.less","sourcesContent":["#content-wrapper {\n  padding-top: 80px;\n  padding-left: 50px;\n}\n\n// -------------------------------------------------\n\n@media (max-width: 979px) {\n\n  #content-wrapper {\n    padding-top: 80px;\n    \n    #primary {\n      padding-left: 0;\n    }\n  }\n}\n\n// -------------------------------------------------\n\n@media (max-width: 480px) {\n  #content-wrapper {\n    padding-top: 50px !important;\n    padding-left: 0;\n    \n    #primary {\n      padding-left:0px !important;\n      padding-right:0px !important; \n    }\n  }\n  \n  /*\n  .sumome-stylebufferbottom-shim {\n    height: 50px;\n  }\n  */\n}","#content-wrapper {\n  padding-top: 80px;\n  padding-left: 50px;\n}\n@media (max-width: 979px) {\n  #content-wrapper {\n    padding-top: 80px;\n  }\n  #content-wrapper #primary {\n    padding-left: 0;\n  }\n}\n@media (max-width: 480px) {\n  #content-wrapper {\n    padding-top: 50px !important;\n    padding-left: 0;\n  }\n  #content-wrapper #primary {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  /*\n  .sumome-stylebufferbottom-shim {\n    height: 50px;\n  }\n  */\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/footer.less":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/footer.less ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#footer{line-height:30px;padding:10px 0 0;background-color:#1a1a1a}#footer p{font-size:13px;float:left;line-height:30px}#footer a{color:#f57676}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/footer.less","footer.less"],"names":[],"mappings":"AAAA,QACC,gBAAA,CACA,gBAAA,CACA,wBCCD,CDEA,UACC,cAAA,CACA,UAAA,CACA,gBCAD,CDGA,UACC,aCDD","file":"footer.less","sourcesContent":["#footer {\n\tline-height: 30px;\n\tpadding: 10px 0 0px 0;\n\tbackground-color: #1a1a1a\n}\n\n#footer p {\n\tfont-size: 13px;\n\tfloat: left;\n\tline-height: 30px\n}\n\n#footer a {\n\tcolor: #F57676\n}","#footer {\n  line-height: 30px;\n  padding: 10px 0 0px 0;\n  background-color: #1a1a1a;\n}\n#footer p {\n  font-size: 13px;\n  float: left;\n  line-height: 30px;\n}\n#footer a {\n  color: #F57676;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/header.less":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/header.less ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#masthead header .back-button{float:left;font-size:30px;padding-right:10px;color:#fff;cursor:pointer;line-height:68px;width:30px}#masthead header #header{margin-top:-2px;cursor:default}#masthead header #header #header-inner.header-inner-not-mobile{background-repeat:no-repeat}#masthead header #header #header-inner:not(.no-header-image) .titlewrapper{background:transparent}#masthead header #header #header-inner:not(.no-header-image) .titlewrapper .title{background:transparent;border-width:0}#masthead header #header #header-inner-link,#masthead header #header #header-inner-link>a{display:block}#masthead header #header .descriptionwrapper{cursor:default}#masthead.fixed-nav header{margin-top:-5px}#masthead.fixed-nav header #header,#masthead.fixed-nav header #header h1.title{line-height:56px;margin-top:0}#masthead.fixed-nav header .back-button{font-size:20px;line-height:56px;width:20px;margin-top:-1px}@media (max-width:979px){#masthead header .back-button{margin-left:0;line-height:82px}#masthead header .back-button.placeholder{margin-left:0;padding-right:0}#masthead.fixed-nav header #header{margin:0}#masthead.fixed-nav header #header h1.title{font-size:20px;margin-top:0;line-height:56px}#masthead.fixed-nav header #header #header-inner{min-height:auto;margin-left:0!important;margin-top:auto}#masthead.fixed-nav header .back-button{margin-right:0;line-height:56px}}@media (max-width:480px){#masthead.fixed-nav header,#masthead header{overflow:hidden;margin-top:0}#masthead.fixed-nav header #header,#masthead header #header{max-width:calc(100% - 80px);margin:0}#masthead.fixed-nav header #header h1.title,#masthead header #header h1.title{font-size:20px;margin-top:0;line-height:56px}#masthead.fixed-nav header #header #header-inner,#masthead header #header #header-inner{min-height:auto;margin-left:0!important;margin-top:auto}#masthead.fixed-nav header .back-button,#masthead header .back-button{margin-right:-10px;font-size:20px;line-height:56px}#masthead.fixed-nav header #header{margin:0}#masthead.fixed-nav header .back-button{margin-right:0;line-height:56px}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/header.less","header.less"],"names":[],"mappings":"AAGA,8BAEI,UAAA,CACA,cAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,UCIJ,CDZA,yBAoBI,eAAA,CACA,cCLJ,CDhBA,+DA0BM,2BCPN,CDnBA,2EA+BQ,sBCTR,CDtBA,kFAmCQ,sBAAA,CACA,cCVR,CD1BA,0FA0CM,aCZN,CD9BA,6CA8CM,cCbN,CDqBA,2BACE,eCnBF,CDkBA,+EAKI,gBAAA,CACA,YCfJ,CDSA,wCAeI,cAAA,CACA,gBAAA,CACA,UAAA,CACA,eCrBJ,CDuCA,yBACE,8BAGI,aAAA,CACA,gBC/BJ,CD2BA,0CAWI,aAAA,CACA,eChCJ,CDoCA,mCAMI,QCnCJ,CD6BA,4CAUM,cAAA,CAEA,YAAA,CACA,gBCnCN,CDsBA,iDAiBM,eAAA,CACA,uBAAA,CACA,eCpCN,CDiBA,wCAwBI,cAAA,CACA,gBCtCJ,CACF,CD6CA,yBAGE,4CAEE,eAAA,CACA,YC7CF,CD0CA,4DAOI,2BAAA,CACA,QC5CJ,CDoCA,8EAYM,cAAA,CAEA,YAAA,CACA,gBC3CN,CD4BA,wFAmBM,eAAA,CACA,uBAAA,CACA,eC3CN,CDsBA,sEA0BI,kBAAA,CACA,cAAA,CACA,gBC5CJ,CDgDA,mCAGI,QC/CJ,CD4CA,wCAOI,cAAA,CACA,gBChDJ,CACF","file":"header.less","sourcesContent":["// --------------------------\n// Global\n\n#masthead header {\n  .back-button {\n    float: left;\n    font-size: 30px;\n    padding-right: 10px;\n    color: white;\n    cursor: pointer;\n    line-height: 68px;\n    width: 30px;\n    \n    /*\n    .back-button {\n      font-size: 20px;\n      line-height: 55px;\n      margin-top: 0px;\n    }\n    */\n  }\n  \n  #header {\n    margin-top: -2px;\n    cursor: default;\n  }\n  \n  #header {\n    #header-inner.header-inner-not-mobile {\n      background-repeat: no-repeat;\n    }\n\n    #header-inner:not(.no-header-image) {\n      .titlewrapper {\n        background: transparent\n      }\n\n      .titlewrapper .title {\n        background: transparent; \n        border-width: 0px\n      }\n    } \n\n    #header-inner-link,\n    #header-inner-link > a {\n      display: block;\n    }\n    \n    .descriptionwrapper {\n      cursor: default;\n    }\n  }\n}\n\n// ------------------------\n// global fixed-nav\n\n#masthead.fixed-nav header {\n  margin-top: -5px;\n    \n  #header {\n    /*margin-top: -5px;*/\n    line-height: 56px;\n    margin-top: 0;\n    \n    h1.title {\n      margin-top: 0;\n      line-height: 56px;\n    }\n  }\n\n  .back-button {\n    font-size: 20px;\n    line-height: 56px;\n    width: 20px;\n    margin-top:-1px;\n  }\n}\n\n// -------------------------------------------\n// @media (min-width: 979px) {\n\n@media (min-width: 979px) {\n  /*\n  #header {\n    margin-top: -5px;\n  }\n  */\n}\n\n// -----------------------------------\n// @media (max-width: 979px)\n\n@media (max-width: 979px) {\n  #masthead header {\n    .back-button {\n      /*margin-left: 20px;*/\n      margin-left: 0;\n      line-height: 82px;\n    }\n    \n    .back-button.placeholder {\n      /*\n      width: 20px;\n      height: 20px;*/\n      margin-left: 0;\n      padding-right: 0;\n    }\n  }\n    \n  #masthead.fixed-nav header {\n    #header {\n      /*\n      margin-top: 3px;\n      margin-bottom: -3px;\n      */\n      margin: 0;\n      \n      h1.title {\n        /*line-height: 55px;*/\n        font-size: 20px;\n        /*padding-left: 5px;*/\n        margin-top: 0px;\n        line-height: 56px;\n      }\n      \n      #header-inner {\n        min-height: auto;\n        margin-left: 0 !important;\n        margin-top: auto;\n      }\n    }\n    \n    .back-button {\n      margin-right: 0;\n      line-height: 56px;\n    }\n  }\n}\n\n// -----------------------------------\n// @media (max-width: 480px)\n\n@media (max-width: 480px) {\n  // 從480px開始，就沒有區分fixed-nav的差別，全部都要一樣小\n  \n  #masthead header,\n  #masthead.fixed-nav header {\n    overflow: hidden;\n    margin-top: 0;\n    \n    #header {\n      /*border:1px solid red;*/\n      max-width: calc(100% - 80px);\n      margin: 0;\n\n      h1.title {\n        /*line-height: 55px;*/\n        font-size: 20px;\n        /*padding-left: 5px;*/\n        margin-top: 0px;\n        line-height: 56px;\n      }\n      \n      #header-inner {\n        min-height: auto;\n        margin-left: 0 !important;\n        margin-top: auto;\n      }\n    }\n\n    .back-button {\n      margin-right: -10px;\n      font-size: 20px;\n      line-height: 56px;\n    }\n  } \n\n  #masthead.fixed-nav header {\n    #header {\n      /*margin-top: -11px;*/\n      margin: 0;\n    }\n    \n    .back-button {\n      margin-right: 0;\n      line-height: 56px;\n    }\n  }\n}","#masthead header .back-button {\n  float: left;\n  font-size: 30px;\n  padding-right: 10px;\n  color: white;\n  cursor: pointer;\n  line-height: 68px;\n  width: 30px;\n  /*\n    .back-button {\n      font-size: 20px;\n      line-height: 55px;\n      margin-top: 0px;\n    }\n    */\n}\n#masthead header #header {\n  margin-top: -2px;\n  cursor: default;\n}\n#masthead header #header #header-inner.header-inner-not-mobile {\n  background-repeat: no-repeat;\n}\n#masthead header #header #header-inner:not(.no-header-image) .titlewrapper {\n  background: transparent;\n}\n#masthead header #header #header-inner:not(.no-header-image) .titlewrapper .title {\n  background: transparent;\n  border-width: 0px;\n}\n#masthead header #header #header-inner-link,\n#masthead header #header #header-inner-link > a {\n  display: block;\n}\n#masthead header #header .descriptionwrapper {\n  cursor: default;\n}\n#masthead.fixed-nav header {\n  margin-top: -5px;\n}\n#masthead.fixed-nav header #header {\n  /*margin-top: -5px;*/\n  line-height: 56px;\n  margin-top: 0;\n}\n#masthead.fixed-nav header #header h1.title {\n  margin-top: 0;\n  line-height: 56px;\n}\n#masthead.fixed-nav header .back-button {\n  font-size: 20px;\n  line-height: 56px;\n  width: 20px;\n  margin-top: -1px;\n}\n@media (min-width: 979px) {\n  /*\n  #header {\n    margin-top: -5px;\n  }\n  */\n}\n@media (max-width: 979px) {\n  #masthead header .back-button {\n    /*margin-left: 20px;*/\n    margin-left: 0;\n    line-height: 82px;\n  }\n  #masthead header .back-button.placeholder {\n    /*\n      width: 20px;\n      height: 20px;*/\n    margin-left: 0;\n    padding-right: 0;\n  }\n  #masthead.fixed-nav header #header {\n    /*\n      margin-top: 3px;\n      margin-bottom: -3px;\n      */\n    margin: 0;\n  }\n  #masthead.fixed-nav header #header h1.title {\n    /*line-height: 55px;*/\n    font-size: 20px;\n    /*padding-left: 5px;*/\n    margin-top: 0px;\n    line-height: 56px;\n  }\n  #masthead.fixed-nav header #header #header-inner {\n    min-height: auto;\n    margin-left: 0 !important;\n    margin-top: auto;\n  }\n  #masthead.fixed-nav header .back-button {\n    margin-right: 0;\n    line-height: 56px;\n  }\n}\n@media (max-width: 480px) {\n  #masthead header,\n  #masthead.fixed-nav header {\n    overflow: hidden;\n    margin-top: 0;\n  }\n  #masthead header #header,\n  #masthead.fixed-nav header #header {\n    /*border:1px solid red;*/\n    max-width: calc(100% - 80px);\n    margin: 0;\n  }\n  #masthead header #header h1.title,\n  #masthead.fixed-nav header #header h1.title {\n    /*line-height: 55px;*/\n    font-size: 20px;\n    /*padding-left: 5px;*/\n    margin-top: 0px;\n    line-height: 56px;\n  }\n  #masthead header #header #header-inner,\n  #masthead.fixed-nav header #header #header-inner {\n    min-height: auto;\n    margin-left: 0 !important;\n    margin-top: auto;\n  }\n  #masthead header .back-button,\n  #masthead.fixed-nav header .back-button {\n    margin-right: -10px;\n    font-size: 20px;\n    line-height: 56px;\n  }\n  #masthead.fixed-nav header #header {\n    /*margin-top: -11px;*/\n    margin: 0;\n  }\n  #masthead.fixed-nav header .back-button {\n    margin-right: 0;\n    line-height: 56px;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/index.less":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/index.less ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#main .widget.Blog .post .index-post-body .index-labels{display:none}#main .widget.Blog .post .index-post-body .entry-image{max-height:430px;background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;display:block}#main .widget.Blog .post .index-post-body .entry-image .thumb{visibility:hidden}#main .widget.Blog .post .index-post-body .entry-image.no-image{background-image:url(//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg);background-position:50%;background-repeat:no-repeat}#main .widget.Blog .post .index-post-body .entry-content{padding-bottom:1rem;padding-top:1rem}#main .widget.Blog .post .index-post-body .entry-content .avatar-name{color:#fff;font-size:18px;margin-left:126px;margin-bottom:-48px;padding-top:17px;display:none}#main .widget.Blog .post .index-post-body .entry-content .post-avatar:hover{border-radius:50%;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}#main .widget.Blog .post .index-post-body .entry-content p{margin:0;text-align:justify}#main .widget.Blog .post .index-post-body .entry-content p img{display:none!important}#main .widget.Blog .post .index-post-body .entry-content .foundation{margin-bottom:1rem;text-align:justify}#main .widget.Blog .post .index-post-body .entry-content h1.entry-title{text-align:justify}#main .widget.Blog .post .index-post-body .entry-content h1.entry-title a{text-decoration:none}#main .widget.Blog .post .index-post-body .entry-content a{text-decoration:underline;color:#bd8242}#main .widget.Blog .post .index-post-body .entry-content a:hover{color:#f69087}#main .widget.Blog .post .index-post-body .entry-content .meta{line-height:100%}#main .widget.Blog .post .index-post-body .entry-content .meta p>small>span{margin-right:10px}#main .widget.Blog .post .index-post-body .entry-content .meta .label-info a,#main .widget.Blog .post .index-post-body .entry-content .meta p>small>span a{text-decoration:none;color:#333;margin-right:.5rem;white-space:nowrap}#main .widget.Blog .post .index-post-body .entry-content .meta .comment-number{white-space:nowrap}#main .widget.Blog .post .index-post-body .entry-content>a:last-of-type{display:none}#main .widget.Blog .post .entry-meta .buttons a{cursor:pointer;display:block;float:left;border-radius:3px;font-size:13px;padding:7px 20px;background:#333;color:#fff;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin-top:13px;margin-bottom:12px;margin-left:1em}#main .widget.Blog .post .entry-meta .buttons a:hover{color:#f69087}#main .widget.Blog .post .entry-meta .read-more{display:block;float:left;border-radius:3px;font-size:13px;padding:7px 20px;background:#333;color:#fff;letter-spacing:.5px;text-transform:uppercase;border:1px solid #1d1d1d;margin-top:13px;margin-bottom:12px}@media (max-width:767px){#main .widget.Blog .post .entry-meta .buttons{margin-bottom:15px}}@media (max-width:480px){#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left{float:none;text-align:center;width:100%}#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>.read-more,#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>span.item-control.blog-admin a{float:none;width:42%;display:inline-block}#main .widget.Blog .post .index-post-body .entry-meta.clearfix>aside>.pull-left>span.item-control.blog-admin a{margin-left:0}#main .share-story{display:none}#main .post h1{font-size:1.5rem;line-height:2rem}#main .post .entry-content p{font-size:1rem}#main .read-more{width:100%;text-align:center;margin:0;padding-left:0;padding-right:0}#main .entry-meta .pull-left{width:calc(100% - 80px);margin:0 20px 20px}#main .post>.entry-meta.clearfix>aside>.pull-left>.item-control.blog-admin a{width:100%;margin-left:0!important;margin-right:0;padding-left:0!important;padding-right:0!important;text-align:center}#main .entry-meta{border-top-width:0;padding:0}#main .entry-content>p{text-indent:1em}#main .widget.Blog .post .entry-meta .buttons a{margin:0}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/index.less","index.less"],"names":[],"mappings":"AAAA,wDAGM,YCDN,CDFA,uDAOM,gBAAA,CACA,uBAAA,CACA,2BAAA,CACA,qBAAA,CAEA,UAAA,CAEA,aCJN,CDVA,8DAiBQ,iBCJR,CDbA,gEAsBM,mHAAA,CACA,uBAAA,CACA,2BCNN,CDlBA,yDA6BM,mBAAA,CACA,gBCRN,CDtBA,sEAkCQ,UAAA,CACA,cAAA,CACA,iBAAA,CACA,mBAAA,CACA,gBAAA,CACA,YCTR,CD9BA,4EA4CQ,iBAAA,CACA,sCAAA,CACA,mCAAA,CACA,iCAAA,CACA,8BCXR,CDrCA,2DAqDQ,QAAA,CACA,kBCZR,CD1CA,+DAyDU,sBCZV,CD7CA,qEAkEQ,kBAAA,CACA,kBCdR,CDrDA,wEAuEQ,kBCfR,CDxDA,0EA2EQ,oBChBR,CD3DA,2DA+EQ,yBAAA,CACA,aCjBR,CD/DA,iEAoFQ,aClBR,CDlEA,+DA2FQ,gBCnBR,CDxEA,4EA8FU,iBCnBV,CD3EA,2JAkGU,oBAAA,CACA,UAAA,CACA,kBAAA,CACA,kBCnBV,CDlFA,+EAwGU,kBCnBV,CDrFA,wEA8GM,YCtBN,CDxFA,gDAuHM,cAAA,CACA,aAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,wBAAA,CACA,eAAA,CACA,kBAAA,CACA,eC5BN,CDxGA,sDAuIM,aC5BN,CD3GA,gDA4IM,aAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,wBAAA,CACA,eAAA,CACA,kBC9BN,CDyDA,yBACE,8CAMI,kBC5DJ,CACF,CDiEA,yBACE,gFAII,UAAA,CACA,iBAAA,CACA,UC7DJ,CDuDA,0MAWI,UAAA,CACA,SAAA,CACA,oBC9DJ,CDiDA,+GAiBI,aC/DJ,CDyEA,mBACE,YCtEF,CDyEA,eACE,gBAAA,CACA,gBCvEF,CD2EA,6BACE,cCzEF,CD4EA,iBACE,UAAA,CACA,iBAAA,CACA,QAAA,CACA,cAAA,CACA,eC1EF,CD6EA,6BACE,uBAAA,CAEA,kBC3EF,CD8EA,6EACE,UAAA,CACA,uBAAA,CACA,cAAA,CACA,wBAAA,CACA,yBAAA,CACA,iBC5EF,CD+EA,kBACE,kBAAA,CAEA,SC7EF,CDgFA,uBACE,eC9EF,CDiFA,gDACE,QC/EF,CACF","file":"index.less","sourcesContent":["#main .widget.Blog {\n  .post .index-post-body {\n    .index-labels {\n      display: none;  \n    }\n\n    .entry-image {\n      max-height: 430px;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n      //width: calc(100% + 10px);\n      width: 100%;\n      //height: 430px;\n      display: block;\n      \n      .thumb {\n        visibility: hidden;\n      }\n    }\n\n    .entry-image.no-image {\n      background-image: url(//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg);\n      background-position: center center;\n      background-repeat: no-repeat;\n    }\n\n    .entry-content {\n      //padding-bottom: 1px;\n      padding-bottom: 1rem;\n      padding-top: 1rem;\n\n\n      .avatar-name {\n        color: #fff;\n        font-size: 18px;\n        margin-left: 126px;\n        margin-bottom: -48px;\n        padding-top: 17px;\n        display:none;\n      }\n\n\n      .post-avatar:hover {\n        border-radius: 50%;\n        -webkit-transition: all .2s ease-in-out;\n        -moz-transition: all .2s ease-in-out;\n        -o-transition: all .2s ease-in-out;\n        transition: all .2s ease-in-out;\n      }\n\n      p {\n        /*text-indent: 0;*/\n        margin: 0;\n        text-align: justify;\n\n        img {\n          display: none !important;\n        }\n      }\n\n      .foundation {\n        /*\n        margin-bottom: 130px;\n        margin-top: -103px;\n        */\n        margin-bottom: 1rem;\n        text-align: justify;\n      }\n      \n      h1.entry-title {\n        text-align: justify;\n      }\n\n      h1.entry-title a {\n        text-decoration: none;\n      }\n\n      a {\n        text-decoration: underline;\n        color: #BD8242;\n      }\n\n      a:hover {\n        color: #F69087;\n      }\n\n      .meta {\n        /*margin-top: 63px;*/\n        /*position: absolute;*/\n        /*margin-left: 126px;*/\n        line-height: 100%;\n\n        p > small > span {\n          margin-right: 10px;\n        }\n        .label-info a,\n        p > small > span a{\n          text-decoration: none;\n          color: #333;\n          margin-right: 0.5rem;\n          white-space: nowrap;\n        }\n        .comment-number {\n          white-space: nowrap;\n        }\n      }\n    } \n\n    .entry-content > a:last-of-type {\n      display: none;\n    }\n\n  }\n\n\n  // 這是指最下面那一列\n  .post .entry-meta {\n    .buttons a {\n      cursor: pointer;\n      display: block;\n      float: left;\n      border-radius: 3px;\n      font-size: 13px;\n      padding: 7px 20px;\n      background: #333;\n      color: #fff;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      border: 1px solid #1D1D1D;\n      margin-top: 13px;\n      margin-bottom: 12px;\n      margin-left: 1em;\n    } \n    .buttons a:hover {\n      color: #F69087;\n    } \n\n\n    .read-more {\n      display: block;\n      float: left;\n      border-radius: 3px;\n      font-size: 13px;\n      padding: 7px 20px;\n      background: #333;\n      color: #fff;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      border: 1px solid #1D1D1D;\n      margin-top: 13px;\n      margin-bottom: 12px;\n    }\n  } \n\n}\n\n// ------------------------------------------\n\n@media (max-width: 1200px) {\n  #main .widget.Blog .post .index-post-body {\n    .entry-image {\n      //height: 320px;\n    }\n  }\n}\n\n\n@media (max-width: 979px) {\n  #main .widget.Blog .post .index-post-body {\n    .entry-image {\n      //height: 420px;\n    }\n  }\n}\n\n// ------------------------------------------\n\n@media (max-width: 767px) {\n  #main .widget.Blog .post {\n    .index-post-body .entry-image {\n      //height: 320px;\n    }\n    \n    .entry-meta .buttons {\n      margin-bottom: 15px;\n    }\n  }\n}\n\n/********************/\n@media (max-width: 480px) {\n  #main .widget.Blog .post .index-post-body  {\n    /*********************/\n    /* 20160926 修正小視窗底下按鈕沒有置中的問題 */\n    .entry-meta.clearfix > aside > .pull-left {\n      float: none;\n      text-align: center;\n      width: 100%;\n    }\n\n    .entry-meta.clearfix > aside > .pull-left > .read-more,\n    .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n      float: none;\n      width: 42%;\n      display: inline-block;\n    }\n\n    .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n      margin-left: 0;\n    }\n    \n    .entry-image {\n      //height: 240px;\n    }\n  }\n\n  /***********************/\n\n  #main .share-story {\n    display: none;\n  }\n\n  #main .post h1 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n\n  #main .post .entry-content p {\n    font-size: 1rem;\n  }\n\n  #main .read-more {\n    width: 100%;\n    text-align: center;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  #main .entry-meta .pull-left {\n    width: calc(100% - 80px);\n    margin: 20px;\n    margin-top: 0;\n  }\n\n  #main .post > .entry-meta.clearfix > aside > .pull-left > .item-control.blog-admin a {\n    width: 100%;\n    margin-left: 0 !important;\n    margin-right: 0;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    text-align: center;\n  }\n\n  #main .entry-meta {\n    border-top-width: 0;\n    padding-top: 0;\n    padding: 0;\n  }\n\n  #main .entry-content > p {\n    text-indent: 1em;\n  }\n  \n  #main .widget.Blog .post .entry-meta .buttons a {\n    margin: 0;\n  }\n} // @media (max-width: 480px) {\n\n// ------------------------------\n// 以下還沒整理\n\n\n","#main .widget.Blog .post .index-post-body .index-labels {\n  display: none;\n}\n#main .widget.Blog .post .index-post-body .entry-image {\n  max-height: 430px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  display: block;\n}\n#main .widget.Blog .post .index-post-body .entry-image .thumb {\n  visibility: hidden;\n}\n#main .widget.Blog .post .index-post-body .entry-image.no-image {\n  background-image: url(//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg);\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n#main .widget.Blog .post .index-post-body .entry-content {\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n}\n#main .widget.Blog .post .index-post-body .entry-content .avatar-name {\n  color: #fff;\n  font-size: 18px;\n  margin-left: 126px;\n  margin-bottom: -48px;\n  padding-top: 17px;\n  display: none;\n}\n#main .widget.Blog .post .index-post-body .entry-content .post-avatar:hover {\n  border-radius: 50%;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n#main .widget.Blog .post .index-post-body .entry-content p {\n  /*text-indent: 0;*/\n  margin: 0;\n  text-align: justify;\n}\n#main .widget.Blog .post .index-post-body .entry-content p img {\n  display: none !important;\n}\n#main .widget.Blog .post .index-post-body .entry-content .foundation {\n  /*\n        margin-bottom: 130px;\n        margin-top: -103px;\n        */\n  margin-bottom: 1rem;\n  text-align: justify;\n}\n#main .widget.Blog .post .index-post-body .entry-content h1.entry-title {\n  text-align: justify;\n}\n#main .widget.Blog .post .index-post-body .entry-content h1.entry-title a {\n  text-decoration: none;\n}\n#main .widget.Blog .post .index-post-body .entry-content a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n#main .widget.Blog .post .index-post-body .entry-content a:hover {\n  color: #F69087;\n}\n#main .widget.Blog .post .index-post-body .entry-content .meta {\n  /*margin-top: 63px;*/\n  /*position: absolute;*/\n  /*margin-left: 126px;*/\n  line-height: 100%;\n}\n#main .widget.Blog .post .index-post-body .entry-content .meta p > small > span {\n  margin-right: 10px;\n}\n#main .widget.Blog .post .index-post-body .entry-content .meta .label-info a,\n#main .widget.Blog .post .index-post-body .entry-content .meta p > small > span a {\n  text-decoration: none;\n  color: #333;\n  margin-right: 0.5rem;\n  white-space: nowrap;\n}\n#main .widget.Blog .post .index-post-body .entry-content .meta .comment-number {\n  white-space: nowrap;\n}\n#main .widget.Blog .post .index-post-body .entry-content > a:last-of-type {\n  display: none;\n}\n#main .widget.Blog .post .entry-meta .buttons a {\n  cursor: pointer;\n  display: block;\n  float: left;\n  border-radius: 3px;\n  font-size: 13px;\n  padding: 7px 20px;\n  background: #333;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: 1px solid #1D1D1D;\n  margin-top: 13px;\n  margin-bottom: 12px;\n  margin-left: 1em;\n}\n#main .widget.Blog .post .entry-meta .buttons a:hover {\n  color: #F69087;\n}\n#main .widget.Blog .post .entry-meta .read-more {\n  display: block;\n  float: left;\n  border-radius: 3px;\n  font-size: 13px;\n  padding: 7px 20px;\n  background: #333;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: 1px solid #1D1D1D;\n  margin-top: 13px;\n  margin-bottom: 12px;\n}\n@media (max-width: 767px) {\n  #main .widget.Blog .post .entry-meta .buttons {\n    margin-bottom: 15px;\n  }\n}\n/********************/\n@media (max-width: 480px) {\n  #main .widget.Blog .post .index-post-body {\n    /*********************/\n    /* 20160926 修正小視窗底下按鈕沒有置中的問題 */\n  }\n  #main .widget.Blog .post .index-post-body .entry-meta.clearfix > aside > .pull-left {\n    float: none;\n    text-align: center;\n    width: 100%;\n  }\n  #main .widget.Blog .post .index-post-body .entry-meta.clearfix > aside > .pull-left > .read-more,\n  #main .widget.Blog .post .index-post-body .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n    float: none;\n    width: 42%;\n    display: inline-block;\n  }\n  #main .widget.Blog .post .index-post-body .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n    margin-left: 0;\n  }\n  /***********************/\n  #main .share-story {\n    display: none;\n  }\n  #main .post h1 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  #main .post .entry-content p {\n    font-size: 1rem;\n  }\n  #main .read-more {\n    width: 100%;\n    text-align: center;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #main .entry-meta .pull-left {\n    width: calc(100% - 80px);\n    margin: 20px;\n    margin-top: 0;\n  }\n  #main .post > .entry-meta.clearfix > aside > .pull-left > .item-control.blog-admin a {\n    width: 100%;\n    margin-left: 0 !important;\n    margin-right: 0;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    text-align: center;\n  }\n  #main .entry-meta {\n    border-top-width: 0;\n    padding-top: 0;\n    padding: 0;\n  }\n  #main .entry-content > p {\n    text-indent: 1em;\n  }\n  #main .widget.Blog .post .entry-meta .buttons a {\n    margin: 0;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/style.less":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!/usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/style.less ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".entry-content{line-height:200%}.entry-content>article>p{text-indent:2em;text-align:justify}.entry-content h4{font-size:24pt;color:#bd8242;margin-top:1.5em;margin-bottom:1em}.entry-content h5{font-size:20pt;color:#713e06;margin-top:1.5em;margin-bottom:1em}.entry-content h6{font-size:18pt;font-style:italic;color:#634121;margin-top:1em;margin-bottom:.5em}.entry-content hr{border-top:3px solid #ce8a42;border-bottom:0 solid #bd8a39}.entry-content ul{margin-left:0!important}.entry-content li{margin-left:2em!important}@media (max-width:480px){.entry-content li{margin-left:1em!important}}.entry-content li,.entry-content ul{margin-top:.5em!important;margin-bottom:.5em!important}.entry-content li{list-style:square!important;line-height:200%}.entry-content .post ol>li,.entry-content ol>li{list-style:decimal!important}.entry-content blockquote{border-left-color:#f7ebde}.entry-content a{text-decoration:underline;color:#bd8242}.entry-content h1 a{text-decoration:none;color:#333}.entry-content>article>table>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.entry-content>article>table>tbody>tr>td,.entry-content>article>table>tbody>tr>th,.entry-content>article>table>tfoot>tr>td,.entry-content>article>table>tfoot>tr>th,.entry-content>article>table>thead>tr>td,.entry-content>article>table>thead>tr>th{padding:8px;vertical-align:top;border-top:1px solid #ddd}.entry-content>article>table>tbody>tr:first-of-type>td{border-top-width:0}.entry-content>article>table>tbody>tr:hover{background-color:#f5f5f5}#main .post>h3{display:none}#Blog1_backlinks-container .comment-footer{margin-top:10px}#footer_bar_body{background:transparent}.about-me .description{line-height:1.5em}.about-me .about-link{padding-bottom:1.5em}#sidebar .about-me h3{margin-top:1em;margin-bottom:.5em}#sidebar .about-me .description{margin-bottom:2em}#sidebar .about-link .read-more{float:right;display:inline-block;padding-left:10px;padding-right:10px;margin-left:5px;margin-top:0}#sidebar .about-link .social-button-wrapper{margin-top:4px;display:inline-block}.about-me .social-media{margin-top:.5em;text-align:center;clear:both}.about-me .email-subscribe{text-align:center}.about-me .widget-content{margin:0 1em}.fb-fan-page .widget-content{text-align:center}.about-me .email-subscribe td:first-of-type{text-align:left;padding-top:.7em}.about-me .email-subscribe .follow-by-email-address{width:95%}.donation input[type=image]{margin-top:10px;margin-right:10px}#footerbar-popular-post .popular-posts>ul>dd{display:none}#footerbar-popular-post .popular-posts>ul>dd:first-of-type,#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(2),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(3),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(4),#footerbar-popular-post .popular-posts>ul>dd:nth-of-type(5){display:block}.popular-posts{padding-bottom:.5em}@media (max-width:979px){#footer_bar{display:none}}.widget-content.popular-posts dd{margin-bottom:.5em;clear:both}.widget-content.popular-posts img{float:left}h1.title{font-size:30px}#header-inner .descriptionwrapper{font-size:14px}div.post-avatar{display:none}#content #archivespage ul,.meta{margin-left:0!important}#content #archivespage li.archivedate{list-style:none!important}.container1{width:100%!important}#footer .management{clear:both}@media (max-width:979px){.navbar-inverse .navbar-inner{background:#2d2d2d}#header{margin-right:0}}@media (min-width:480px) and (max-width:767px){.entry-container .entry-content{padding:2rem}}.entry-container .entry-content>p{text-indent:2em}.entry-container .entry-content a.more{font-weight:700;text-decoration:none}.site-footer .cloud-label-widget-content .label-size-1,.site-footer .cloud-label-widget-content .label-size-2{display:none}.site-footer .cloud-label-widget-content .btn{float:right;color:#000;margin-top:1em}@media (max-width:979px){div.donation{width:49.5%;float:left;margin-right:1%}.site-footer .cloud-label-widget-content .label-size-3{display:none}}.social-button{background-color:#d6d7d6;display:inline-block;width:33px;height:32px;line-height:33px;border-radius:16px;-o-transition:all .2s linear;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;transition:all .2s linear;cursor:pointer;text-align:center;text-decoration:none}.social-button.facebook:hover{color:#fff;background-color:#3165a5}.social-button.twitter:hover{color:#fff;background-color:#42aae7}.social-button.linkedin:hover{color:#fff;background-color:#0075b5}.social-button.plurk:hover{color:#fff;background-color:#ef4539}.social-button.line:hover{color:#fff;background-color:#4acf00}.social-button.google-plus:hover{color:#fff;background-color:#de4939}.social-button.chrome:hover{background-color:#42556b}.social-button.github:hover{color:#fff;background-color:#000}.social-button.android:hover{color:#fff;background-color:#a4c639}.social-button.chrome:hover{color:#fff;background-color:#4286f7}.social-button.rss:hover{color:#fff;background-color:#f78631}.social-button.addthis:hover{color:#fff;background-color:#ff5d39}@media (min-width:979px){.share-story-container li.line,.social-button.line{display:none}}@media (max-width:767px){div.share-story-container ul{margin:0}}.entry-meta.clearfix .share-story-container .about{display:none}.share-story-container ul{text-align:right}.pager .previous.hidden{visibility:hidden}.pager li.link>span{width:6em}.navbar .nav{margin-right:0}.entry-content .gsib_a{padding-top:0}.entry-content .gsc-input-box{height:auto}.entry-content .gsc-search-button{display:block!important}.entry-content input.gsc-search-button{height:13px;width:13px;min-width:0;border-radius:.5em;padding:13px;margin:0}a[name=more]:target,a[name][id]:target{margin-top:-60px;position:absolute}a#comment-form-anchor:target{margin-top:-300px}#masthead a[accesskey],.site-footer a[accesskey]{color:#fff}#masthead a[accesskey].accesskey-menu{float:left}.site-footer .container{padding-top:0!important}#masthead.fixed-nav li>a.accesskey-menu,.navbar .nav>li>a.accesskey-menu{padding-left:0;padding-right:0}.entry-content .post-btn{text-decoration:none!important;font-size:1em;padding:.5em}.entry-content .post-btn.btn-primary{color:#fff}.btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,.2)}.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}.btn-social-icon{position:relative;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding:0}.btn-social-icon>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;border-right:1px solid rgba(0,0,0,.2)}.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}.btn-social-icon>:first-child{border:none;text-align:center;width:100%!important}.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}.btn-adn{color:#fff;background-color:#d87a68;border-color:rgba(0,0,0,.2)}.btn-adn.active,.btn-adn.focus,.btn-adn:active,.btn-adn:focus,.btn-adn:hover,.open>.dropdown-toggle.btn-adn{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,.2)}.btn-adn.active.focus,.btn-adn.active:focus,.btn-adn.active:hover,.btn-adn:active.focus,.btn-adn:active:focus,.btn-adn:active:hover,.open>.dropdown-toggle.btn-adn.focus,.open>.dropdown-toggle.btn-adn:focus,.open>.dropdown-toggle.btn-adn:hover{color:#fff;background-color:#b94630;border-color:rgba(0,0,0,.2)}.btn-adn.active,.btn-adn:active,.open>.dropdown-toggle.btn-adn{background-image:none}.btn-adn.disabled,.btn-adn.disabled.active,.btn-adn.disabled.focus,.btn-adn.disabled:active,.btn-adn.disabled:focus,.btn-adn.disabled:hover,.btn-adn[disabled],.btn-adn[disabled].active,.btn-adn[disabled].focus,.btn-adn[disabled]:active,.btn-adn[disabled]:focus,.btn-adn[disabled]:hover,fieldset[disabled] .btn-adn,fieldset[disabled] .btn-adn.active,fieldset[disabled] .btn-adn.focus,fieldset[disabled] .btn-adn:active,fieldset[disabled] .btn-adn:focus,fieldset[disabled] .btn-adn:hover{background-color:#d87a68;border-color:rgba(0,0,0,.2)}.btn-adn .badge{color:#d87a68;background-color:#fff}.btn-bitbucket{color:#fff;background-color:#205081;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active,.btn-bitbucket.focus,.btn-bitbucket:active,.btn-bitbucket:focus,.btn-bitbucket:hover,.open>.dropdown-toggle.btn-bitbucket{color:#fff;background-color:#163758;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active.focus,.btn-bitbucket.active:focus,.btn-bitbucket.active:hover,.btn-bitbucket:active.focus,.btn-bitbucket:active:focus,.btn-bitbucket:active:hover,.open>.dropdown-toggle.btn-bitbucket.focus,.open>.dropdown-toggle.btn-bitbucket:focus,.open>.dropdown-toggle.btn-bitbucket:hover{color:#fff;background-color:#0f253c;border-color:rgba(0,0,0,.2)}.btn-bitbucket.active,.btn-bitbucket:active,.open>.dropdown-toggle.btn-bitbucket{background-image:none}.btn-bitbucket.disabled,.btn-bitbucket.disabled.active,.btn-bitbucket.disabled.focus,.btn-bitbucket.disabled:active,.btn-bitbucket.disabled:focus,.btn-bitbucket.disabled:hover,.btn-bitbucket[disabled],.btn-bitbucket[disabled].active,.btn-bitbucket[disabled].focus,.btn-bitbucket[disabled]:active,.btn-bitbucket[disabled]:focus,.btn-bitbucket[disabled]:hover,fieldset[disabled] .btn-bitbucket,fieldset[disabled] .btn-bitbucket.active,fieldset[disabled] .btn-bitbucket.focus,fieldset[disabled] .btn-bitbucket:active,fieldset[disabled] .btn-bitbucket:focus,fieldset[disabled] .btn-bitbucket:hover{background-color:#205081;border-color:rgba(0,0,0,.2)}.btn-bitbucket .badge{color:#205081;background-color:#fff}.btn-dropbox{color:#fff;background-color:#1087dd;border-color:rgba(0,0,0,.2)}.btn-dropbox.active,.btn-dropbox.focus,.btn-dropbox:active,.btn-dropbox:focus,.btn-dropbox:hover,.open>.dropdown-toggle.btn-dropbox{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,.2)}.btn-dropbox.active.focus,.btn-dropbox.active:focus,.btn-dropbox.active:hover,.btn-dropbox:active.focus,.btn-dropbox:active:focus,.btn-dropbox:active:hover,.open>.dropdown-toggle.btn-dropbox.focus,.open>.dropdown-toggle.btn-dropbox:focus,.open>.dropdown-toggle.btn-dropbox:hover{color:#fff;background-color:#0a568c;border-color:rgba(0,0,0,.2)}.btn-dropbox.active,.btn-dropbox:active,.open>.dropdown-toggle.btn-dropbox{background-image:none}.btn-dropbox.disabled,.btn-dropbox.disabled.active,.btn-dropbox.disabled.focus,.btn-dropbox.disabled:active,.btn-dropbox.disabled:focus,.btn-dropbox.disabled:hover,.btn-dropbox[disabled],.btn-dropbox[disabled].active,.btn-dropbox[disabled].focus,.btn-dropbox[disabled]:active,.btn-dropbox[disabled]:focus,.btn-dropbox[disabled]:hover,fieldset[disabled] .btn-dropbox,fieldset[disabled] .btn-dropbox.active,fieldset[disabled] .btn-dropbox.focus,fieldset[disabled] .btn-dropbox:active,fieldset[disabled] .btn-dropbox:focus,fieldset[disabled] .btn-dropbox:hover{background-color:#1087dd;border-color:rgba(0,0,0,.2)}.btn-dropbox .badge{color:#1087dd;background-color:#fff}.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,.2)}.btn-facebook.active,.btn-facebook.focus,.btn-facebook:active,.btn-facebook:focus,.btn-facebook:hover,.open>.dropdown-toggle.btn-facebook{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,.2)}.btn-facebook.active.focus,.btn-facebook.active:focus,.btn-facebook.active:hover,.btn-facebook:active.focus,.btn-facebook:active:focus,.btn-facebook:active:hover,.open>.dropdown-toggle.btn-facebook.focus,.open>.dropdown-toggle.btn-facebook:focus,.open>.dropdown-toggle.btn-facebook:hover{color:#fff;background-color:#23345a;border-color:rgba(0,0,0,.2)}.btn-facebook.active,.btn-facebook:active,.open>.dropdown-toggle.btn-facebook{background-image:none}.btn-facebook.disabled,.btn-facebook.disabled.active,.btn-facebook.disabled.focus,.btn-facebook.disabled:active,.btn-facebook.disabled:focus,.btn-facebook.disabled:hover,.btn-facebook[disabled],.btn-facebook[disabled].active,.btn-facebook[disabled].focus,.btn-facebook[disabled]:active,.btn-facebook[disabled]:focus,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook,fieldset[disabled] .btn-facebook.active,fieldset[disabled] .btn-facebook.focus,fieldset[disabled] .btn-facebook:active,fieldset[disabled] .btn-facebook:focus,fieldset[disabled] .btn-facebook:hover{background-color:#3b5998;border-color:rgba(0,0,0,.2)}.btn-facebook .badge{color:#3b5998;background-color:#fff}.btn-flickr{color:#fff;background-color:#ff0084;border-color:rgba(0,0,0,.2)}.btn-flickr.active,.btn-flickr.focus,.btn-flickr:active,.btn-flickr:focus,.btn-flickr:hover,.open>.dropdown-toggle.btn-flickr{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,.2)}.btn-flickr.active.focus,.btn-flickr.active:focus,.btn-flickr.active:hover,.btn-flickr:active.focus,.btn-flickr:active:focus,.btn-flickr:active:hover,.open>.dropdown-toggle.btn-flickr.focus,.open>.dropdown-toggle.btn-flickr:focus,.open>.dropdown-toggle.btn-flickr:hover{color:#fff;background-color:#a80057;border-color:rgba(0,0,0,.2)}.btn-flickr.active,.btn-flickr:active,.open>.dropdown-toggle.btn-flickr{background-image:none}.btn-flickr.disabled,.btn-flickr.disabled.active,.btn-flickr.disabled.focus,.btn-flickr.disabled:active,.btn-flickr.disabled:focus,.btn-flickr.disabled:hover,.btn-flickr[disabled],.btn-flickr[disabled].active,.btn-flickr[disabled].focus,.btn-flickr[disabled]:active,.btn-flickr[disabled]:focus,.btn-flickr[disabled]:hover,fieldset[disabled] .btn-flickr,fieldset[disabled] .btn-flickr.active,fieldset[disabled] .btn-flickr.focus,fieldset[disabled] .btn-flickr:active,fieldset[disabled] .btn-flickr:focus,fieldset[disabled] .btn-flickr:hover{background-color:#ff0084;border-color:rgba(0,0,0,.2)}.btn-flickr .badge{color:#ff0084;background-color:#fff}.btn-foursquare{color:#fff;background-color:#f94877;border-color:rgba(0,0,0,.2)}.btn-foursquare.active,.btn-foursquare.focus,.btn-foursquare:active,.btn-foursquare:focus,.btn-foursquare:hover,.open>.dropdown-toggle.btn-foursquare{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,.2)}.btn-foursquare.active.focus,.btn-foursquare.active:focus,.btn-foursquare.active:hover,.btn-foursquare:active.focus,.btn-foursquare:active:focus,.btn-foursquare:active:hover,.open>.dropdown-toggle.btn-foursquare.focus,.open>.dropdown-toggle.btn-foursquare:focus,.open>.dropdown-toggle.btn-foursquare:hover{color:#fff;background-color:#e30742;border-color:rgba(0,0,0,.2)}.btn-foursquare.active,.btn-foursquare:active,.open>.dropdown-toggle.btn-foursquare{background-image:none}.btn-foursquare.disabled,.btn-foursquare.disabled.active,.btn-foursquare.disabled.focus,.btn-foursquare.disabled:active,.btn-foursquare.disabled:focus,.btn-foursquare.disabled:hover,.btn-foursquare[disabled],.btn-foursquare[disabled].active,.btn-foursquare[disabled].focus,.btn-foursquare[disabled]:active,.btn-foursquare[disabled]:focus,.btn-foursquare[disabled]:hover,fieldset[disabled] .btn-foursquare,fieldset[disabled] .btn-foursquare.active,fieldset[disabled] .btn-foursquare.focus,fieldset[disabled] .btn-foursquare:active,fieldset[disabled] .btn-foursquare:focus,fieldset[disabled] .btn-foursquare:hover{background-color:#f94877;border-color:rgba(0,0,0,.2)}.btn-foursquare .badge{color:#f94877;background-color:#fff}.btn-github{color:#fff;background-color:#444;border-color:rgba(0,0,0,.2)}.btn-github.active,.btn-github.focus,.btn-github:active,.btn-github:focus,.btn-github:hover,.open>.dropdown-toggle.btn-github{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,.2)}.btn-github.active.focus,.btn-github.active:focus,.btn-github.active:hover,.btn-github:active.focus,.btn-github:active:focus,.btn-github:active:hover,.open>.dropdown-toggle.btn-github.focus,.open>.dropdown-toggle.btn-github:focus,.open>.dropdown-toggle.btn-github:hover{color:#fff;background-color:#191919;border-color:rgba(0,0,0,.2)}.btn-github.active,.btn-github:active,.open>.dropdown-toggle.btn-github{background-image:none}.btn-github.disabled,.btn-github.disabled.active,.btn-github.disabled.focus,.btn-github.disabled:active,.btn-github.disabled:focus,.btn-github.disabled:hover,.btn-github[disabled],.btn-github[disabled].active,.btn-github[disabled].focus,.btn-github[disabled]:active,.btn-github[disabled]:focus,.btn-github[disabled]:hover,fieldset[disabled] .btn-github,fieldset[disabled] .btn-github.active,fieldset[disabled] .btn-github.focus,fieldset[disabled] .btn-github:active,fieldset[disabled] .btn-github:focus,fieldset[disabled] .btn-github:hover{background-color:#444;border-color:rgba(0,0,0,.2)}.btn-github .badge{color:#444;background-color:#fff}.btn-google{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,.2)}.btn-google.active,.btn-google.focus,.btn-google:active,.btn-google:focus,.btn-google:hover,.open>.dropdown-toggle.btn-google{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,.2)}.btn-google.active.focus,.btn-google.active:focus,.btn-google.active:hover,.btn-google:active.focus,.btn-google:active:focus,.btn-google:active:hover,.open>.dropdown-toggle.btn-google.focus,.open>.dropdown-toggle.btn-google:focus,.open>.dropdown-toggle.btn-google:hover{color:#fff;background-color:#a32b1c;border-color:rgba(0,0,0,.2)}.btn-google.active,.btn-google:active,.open>.dropdown-toggle.btn-google{background-image:none}.btn-google.disabled,.btn-google.disabled.active,.btn-google.disabled.focus,.btn-google.disabled:active,.btn-google.disabled:focus,.btn-google.disabled:hover,.btn-google[disabled],.btn-google[disabled].active,.btn-google[disabled].focus,.btn-google[disabled]:active,.btn-google[disabled]:focus,.btn-google[disabled]:hover,fieldset[disabled] .btn-google,fieldset[disabled] .btn-google.active,fieldset[disabled] .btn-google.focus,fieldset[disabled] .btn-google:active,fieldset[disabled] .btn-google:focus,fieldset[disabled] .btn-google:hover{background-color:#dd4b39;border-color:rgba(0,0,0,.2)}.btn-google .badge{color:#dd4b39;background-color:#fff}.btn-instagram{color:#fff;background-color:#3f729b;border-color:rgba(0,0,0,.2)}.btn-instagram.active,.btn-instagram.focus,.btn-instagram:active,.btn-instagram:focus,.btn-instagram:hover,.open>.dropdown-toggle.btn-instagram{color:#fff;background-color:#305777;border-color:rgba(0,0,0,.2)}.btn-instagram.active.focus,.btn-instagram.active:focus,.btn-instagram.active:hover,.btn-instagram:active.focus,.btn-instagram:active:focus,.btn-instagram:active:hover,.open>.dropdown-toggle.btn-instagram.focus,.open>.dropdown-toggle.btn-instagram:focus,.open>.dropdown-toggle.btn-instagram:hover{color:#fff;background-color:#26455d;border-color:rgba(0,0,0,.2)}.btn-instagram.active,.btn-instagram:active,.open>.dropdown-toggle.btn-instagram{background-image:none}.btn-instagram.disabled,.btn-instagram.disabled.active,.btn-instagram.disabled.focus,.btn-instagram.disabled:active,.btn-instagram.disabled:focus,.btn-instagram.disabled:hover,.btn-instagram[disabled],.btn-instagram[disabled].active,.btn-instagram[disabled].focus,.btn-instagram[disabled]:active,.btn-instagram[disabled]:focus,.btn-instagram[disabled]:hover,fieldset[disabled] .btn-instagram,fieldset[disabled] .btn-instagram.active,fieldset[disabled] .btn-instagram.focus,fieldset[disabled] .btn-instagram:active,fieldset[disabled] .btn-instagram:focus,fieldset[disabled] .btn-instagram:hover{background-color:#3f729b;border-color:rgba(0,0,0,.2)}.btn-instagram .badge{color:#3f729b;background-color:#fff}.btn-linkedin{color:#fff;background-color:#007bb6;border-color:rgba(0,0,0,.2)}.btn-linkedin.active,.btn-linkedin.focus,.btn-linkedin:active,.btn-linkedin:focus,.btn-linkedin:hover,.open>.dropdown-toggle.btn-linkedin{color:#fff;background-color:#005983;border-color:rgba(0,0,0,.2)}.btn-linkedin.active.focus,.btn-linkedin.active:focus,.btn-linkedin.active:hover,.btn-linkedin:active.focus,.btn-linkedin:active:focus,.btn-linkedin:active:hover,.open>.dropdown-toggle.btn-linkedin.focus,.open>.dropdown-toggle.btn-linkedin:focus,.open>.dropdown-toggle.btn-linkedin:hover{color:#fff;background-color:#00405f;border-color:rgba(0,0,0,.2)}.btn-linkedin.active,.btn-linkedin:active,.open>.dropdown-toggle.btn-linkedin{background-image:none}.btn-linkedin.disabled,.btn-linkedin.disabled.active,.btn-linkedin.disabled.focus,.btn-linkedin.disabled:active,.btn-linkedin.disabled:focus,.btn-linkedin.disabled:hover,.btn-linkedin[disabled],.btn-linkedin[disabled].active,.btn-linkedin[disabled].focus,.btn-linkedin[disabled]:active,.btn-linkedin[disabled]:focus,.btn-linkedin[disabled]:hover,fieldset[disabled] .btn-linkedin,fieldset[disabled] .btn-linkedin.active,fieldset[disabled] .btn-linkedin.focus,fieldset[disabled] .btn-linkedin:active,fieldset[disabled] .btn-linkedin:focus,fieldset[disabled] .btn-linkedin:hover{background-color:#007bb6;border-color:rgba(0,0,0,.2)}.btn-linkedin .badge{color:#007bb6;background-color:#fff}.btn-microsoft{color:#fff;background-color:#2672ec;border-color:rgba(0,0,0,.2)}.btn-microsoft.active,.btn-microsoft.focus,.btn-microsoft:active,.btn-microsoft:focus,.btn-microsoft:hover,.open>.dropdown-toggle.btn-microsoft{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,.2)}.btn-microsoft.active.focus,.btn-microsoft.active:focus,.btn-microsoft.active:hover,.btn-microsoft:active.focus,.btn-microsoft:active:focus,.btn-microsoft:active:hover,.open>.dropdown-toggle.btn-microsoft.focus,.open>.dropdown-toggle.btn-microsoft:focus,.open>.dropdown-toggle.btn-microsoft:hover{color:#fff;background-color:#0f4bac;border-color:rgba(0,0,0,.2)}.btn-microsoft.active,.btn-microsoft:active,.open>.dropdown-toggle.btn-microsoft{background-image:none}.btn-microsoft.disabled,.btn-microsoft.disabled.active,.btn-microsoft.disabled.focus,.btn-microsoft.disabled:active,.btn-microsoft.disabled:focus,.btn-microsoft.disabled:hover,.btn-microsoft[disabled],.btn-microsoft[disabled].active,.btn-microsoft[disabled].focus,.btn-microsoft[disabled]:active,.btn-microsoft[disabled]:focus,.btn-microsoft[disabled]:hover,fieldset[disabled] .btn-microsoft,fieldset[disabled] .btn-microsoft.active,fieldset[disabled] .btn-microsoft.focus,fieldset[disabled] .btn-microsoft:active,fieldset[disabled] .btn-microsoft:focus,fieldset[disabled] .btn-microsoft:hover{background-color:#2672ec;border-color:rgba(0,0,0,.2)}.btn-microsoft .badge{color:#2672ec;background-color:#fff}.btn-odnoklassniki{color:#fff;background-color:#f4731c;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active,.btn-odnoklassniki.focus,.btn-odnoklassniki:active,.btn-odnoklassniki:focus,.btn-odnoklassniki:hover,.open>.dropdown-toggle.btn-odnoklassniki{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active.focus,.btn-odnoklassniki.active:focus,.btn-odnoklassniki.active:hover,.btn-odnoklassniki:active.focus,.btn-odnoklassniki:active:focus,.btn-odnoklassniki:active:hover,.open>.dropdown-toggle.btn-odnoklassniki.focus,.open>.dropdown-toggle.btn-odnoklassniki:focus,.open>.dropdown-toggle.btn-odnoklassniki:hover{color:#fff;background-color:#b14c09;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki.active,.btn-odnoklassniki:active,.open>.dropdown-toggle.btn-odnoklassniki{background-image:none}.btn-odnoklassniki.disabled,.btn-odnoklassniki.disabled.active,.btn-odnoklassniki.disabled.focus,.btn-odnoklassniki.disabled:active,.btn-odnoklassniki.disabled:focus,.btn-odnoklassniki.disabled:hover,.btn-odnoklassniki[disabled],.btn-odnoklassniki[disabled].active,.btn-odnoklassniki[disabled].focus,.btn-odnoklassniki[disabled]:active,.btn-odnoklassniki[disabled]:focus,.btn-odnoklassniki[disabled]:hover,fieldset[disabled] .btn-odnoklassniki,fieldset[disabled] .btn-odnoklassniki.active,fieldset[disabled] .btn-odnoklassniki.focus,fieldset[disabled] .btn-odnoklassniki:active,fieldset[disabled] .btn-odnoklassniki:focus,fieldset[disabled] .btn-odnoklassniki:hover{background-color:#f4731c;border-color:rgba(0,0,0,.2)}.btn-odnoklassniki .badge{color:#f4731c;background-color:#fff}.btn-openid{color:#fff;background-color:#f7931e;border-color:rgba(0,0,0,.2)}.btn-openid.active,.btn-openid.focus,.btn-openid:active,.btn-openid:focus,.btn-openid:hover,.open>.dropdown-toggle.btn-openid{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,.2)}.btn-openid.active.focus,.btn-openid.active:focus,.btn-openid.active:hover,.btn-openid:active.focus,.btn-openid:active:focus,.btn-openid:active:hover,.open>.dropdown-toggle.btn-openid.focus,.open>.dropdown-toggle.btn-openid:focus,.open>.dropdown-toggle.btn-openid:hover{color:#fff;background-color:#b86607;border-color:rgba(0,0,0,.2)}.btn-openid.active,.btn-openid:active,.open>.dropdown-toggle.btn-openid{background-image:none}.btn-openid.disabled,.btn-openid.disabled.active,.btn-openid.disabled.focus,.btn-openid.disabled:active,.btn-openid.disabled:focus,.btn-openid.disabled:hover,.btn-openid[disabled],.btn-openid[disabled].active,.btn-openid[disabled].focus,.btn-openid[disabled]:active,.btn-openid[disabled]:focus,.btn-openid[disabled]:hover,fieldset[disabled] .btn-openid,fieldset[disabled] .btn-openid.active,fieldset[disabled] .btn-openid.focus,fieldset[disabled] .btn-openid:active,fieldset[disabled] .btn-openid:focus,fieldset[disabled] .btn-openid:hover{background-color:#f7931e;border-color:rgba(0,0,0,.2)}.btn-openid .badge{color:#f7931e;background-color:#fff}.btn-pinterest{color:#fff;background-color:#cb2027;border-color:rgba(0,0,0,.2)}.btn-pinterest.active,.btn-pinterest.focus,.btn-pinterest:active,.btn-pinterest:focus,.btn-pinterest:hover,.open>.dropdown-toggle.btn-pinterest{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,.2)}.btn-pinterest.active.focus,.btn-pinterest.active:focus,.btn-pinterest.active:hover,.btn-pinterest:active.focus,.btn-pinterest:active:focus,.btn-pinterest:active:hover,.open>.dropdown-toggle.btn-pinterest.focus,.open>.dropdown-toggle.btn-pinterest:focus,.open>.dropdown-toggle.btn-pinterest:hover{color:#fff;background-color:#801419;border-color:rgba(0,0,0,.2)}.btn-pinterest.active,.btn-pinterest:active,.open>.dropdown-toggle.btn-pinterest{background-image:none}.btn-pinterest.disabled,.btn-pinterest.disabled.active,.btn-pinterest.disabled.focus,.btn-pinterest.disabled:active,.btn-pinterest.disabled:focus,.btn-pinterest.disabled:hover,.btn-pinterest[disabled],.btn-pinterest[disabled].active,.btn-pinterest[disabled].focus,.btn-pinterest[disabled]:active,.btn-pinterest[disabled]:focus,.btn-pinterest[disabled]:hover,fieldset[disabled] .btn-pinterest,fieldset[disabled] .btn-pinterest.active,fieldset[disabled] .btn-pinterest.focus,fieldset[disabled] .btn-pinterest:active,fieldset[disabled] .btn-pinterest:focus,fieldset[disabled] .btn-pinterest:hover{background-color:#cb2027;border-color:rgba(0,0,0,.2)}.btn-pinterest .badge{color:#cb2027;background-color:#fff}.btn-reddit{color:#000;background-color:#eff7ff;border-color:rgba(0,0,0,.2)}.btn-reddit.active,.btn-reddit.focus,.btn-reddit:active,.btn-reddit:focus,.btn-reddit:hover,.open>.dropdown-toggle.btn-reddit{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,.2)}.btn-reddit.active.focus,.btn-reddit.active:focus,.btn-reddit.active:hover,.btn-reddit:active.focus,.btn-reddit:active:focus,.btn-reddit:active:hover,.open>.dropdown-toggle.btn-reddit.focus,.open>.dropdown-toggle.btn-reddit:focus,.open>.dropdown-toggle.btn-reddit:hover{color:#000;background-color:#98ccff;border-color:rgba(0,0,0,.2)}.btn-reddit.active,.btn-reddit:active,.open>.dropdown-toggle.btn-reddit{background-image:none}.btn-reddit.disabled,.btn-reddit.disabled.active,.btn-reddit.disabled.focus,.btn-reddit.disabled:active,.btn-reddit.disabled:focus,.btn-reddit.disabled:hover,.btn-reddit[disabled],.btn-reddit[disabled].active,.btn-reddit[disabled].focus,.btn-reddit[disabled]:active,.btn-reddit[disabled]:focus,.btn-reddit[disabled]:hover,fieldset[disabled] .btn-reddit,fieldset[disabled] .btn-reddit.active,fieldset[disabled] .btn-reddit.focus,fieldset[disabled] .btn-reddit:active,fieldset[disabled] .btn-reddit:focus,fieldset[disabled] .btn-reddit:hover{background-color:#eff7ff;border-color:rgba(0,0,0,.2)}.btn-reddit .badge{color:#eff7ff;background-color:#000}.btn-soundcloud{color:#fff;background-color:#f50;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active,.btn-soundcloud.focus,.btn-soundcloud:active,.btn-soundcloud:focus,.btn-soundcloud:hover,.open>.dropdown-toggle.btn-soundcloud{color:#fff;background-color:#c40;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active.focus,.btn-soundcloud.active:focus,.btn-soundcloud.active:hover,.btn-soundcloud:active.focus,.btn-soundcloud:active:focus,.btn-soundcloud:active:hover,.open>.dropdown-toggle.btn-soundcloud.focus,.open>.dropdown-toggle.btn-soundcloud:focus,.open>.dropdown-toggle.btn-soundcloud:hover{color:#fff;background-color:#a83800;border-color:rgba(0,0,0,.2)}.btn-soundcloud.active,.btn-soundcloud:active,.open>.dropdown-toggle.btn-soundcloud{background-image:none}.btn-soundcloud.disabled,.btn-soundcloud.disabled.active,.btn-soundcloud.disabled.focus,.btn-soundcloud.disabled:active,.btn-soundcloud.disabled:focus,.btn-soundcloud.disabled:hover,.btn-soundcloud[disabled],.btn-soundcloud[disabled].active,.btn-soundcloud[disabled].focus,.btn-soundcloud[disabled]:active,.btn-soundcloud[disabled]:focus,.btn-soundcloud[disabled]:hover,fieldset[disabled] .btn-soundcloud,fieldset[disabled] .btn-soundcloud.active,fieldset[disabled] .btn-soundcloud.focus,fieldset[disabled] .btn-soundcloud:active,fieldset[disabled] .btn-soundcloud:focus,fieldset[disabled] .btn-soundcloud:hover{background-color:#f50;border-color:rgba(0,0,0,.2)}.btn-soundcloud .badge{color:#f50;background-color:#fff}.btn-tumblr{color:#fff;background-color:#2c4762;border-color:rgba(0,0,0,.2)}.btn-tumblr.active,.btn-tumblr.focus,.btn-tumblr:active,.btn-tumblr:focus,.btn-tumblr:hover,.open>.dropdown-toggle.btn-tumblr{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,.2)}.btn-tumblr.active.focus,.btn-tumblr.active:focus,.btn-tumblr.active:hover,.btn-tumblr:active.focus,.btn-tumblr:active:focus,.btn-tumblr:active:hover,.open>.dropdown-toggle.btn-tumblr.focus,.open>.dropdown-toggle.btn-tumblr:focus,.open>.dropdown-toggle.btn-tumblr:hover{color:#fff;background-color:#111c26;border-color:rgba(0,0,0,.2)}.btn-tumblr.active,.btn-tumblr:active,.open>.dropdown-toggle.btn-tumblr{background-image:none}.btn-tumblr.disabled,.btn-tumblr.disabled.active,.btn-tumblr.disabled.focus,.btn-tumblr.disabled:active,.btn-tumblr.disabled:focus,.btn-tumblr.disabled:hover,.btn-tumblr[disabled],.btn-tumblr[disabled].active,.btn-tumblr[disabled].focus,.btn-tumblr[disabled]:active,.btn-tumblr[disabled]:focus,.btn-tumblr[disabled]:hover,fieldset[disabled] .btn-tumblr,fieldset[disabled] .btn-tumblr.active,fieldset[disabled] .btn-tumblr.focus,fieldset[disabled] .btn-tumblr:active,fieldset[disabled] .btn-tumblr:focus,fieldset[disabled] .btn-tumblr:hover{background-color:#2c4762;border-color:rgba(0,0,0,.2)}.btn-tumblr .badge{color:#2c4762;background-color:#fff}.btn-twitter{color:#fff;background-color:#55acee;border-color:rgba(0,0,0,.2)}.btn-twitter.active,.btn-twitter.focus,.btn-twitter:active,.btn-twitter:focus,.btn-twitter:hover,.open>.dropdown-toggle.btn-twitter{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,.2)}.btn-twitter.active.focus,.btn-twitter.active:focus,.btn-twitter.active:hover,.btn-twitter:active.focus,.btn-twitter:active:focus,.btn-twitter:active:hover,.open>.dropdown-toggle.btn-twitter.focus,.open>.dropdown-toggle.btn-twitter:focus,.open>.dropdown-toggle.btn-twitter:hover{color:#fff;background-color:#1583d7;border-color:rgba(0,0,0,.2)}.btn-twitter.active,.btn-twitter:active,.open>.dropdown-toggle.btn-twitter{background-image:none}.btn-twitter.disabled,.btn-twitter.disabled.active,.btn-twitter.disabled.focus,.btn-twitter.disabled:active,.btn-twitter.disabled:focus,.btn-twitter.disabled:hover,.btn-twitter[disabled],.btn-twitter[disabled].active,.btn-twitter[disabled].focus,.btn-twitter[disabled]:active,.btn-twitter[disabled]:focus,.btn-twitter[disabled]:hover,fieldset[disabled] .btn-twitter,fieldset[disabled] .btn-twitter.active,fieldset[disabled] .btn-twitter.focus,fieldset[disabled] .btn-twitter:active,fieldset[disabled] .btn-twitter:focus,fieldset[disabled] .btn-twitter:hover{background-color:#55acee;border-color:rgba(0,0,0,.2)}.btn-twitter .badge{color:#55acee;background-color:#fff}.btn-vimeo{color:#fff;background-color:#1ab7ea;border-color:rgba(0,0,0,.2)}.btn-vimeo.active,.btn-vimeo.focus,.btn-vimeo:active,.btn-vimeo:focus,.btn-vimeo:hover,.open>.dropdown-toggle.btn-vimeo{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,.2)}.btn-vimeo.active.focus,.btn-vimeo.active:focus,.btn-vimeo.active:hover,.btn-vimeo:active.focus,.btn-vimeo:active:focus,.btn-vimeo:active:hover,.open>.dropdown-toggle.btn-vimeo.focus,.open>.dropdown-toggle.btn-vimeo:focus,.open>.dropdown-toggle.btn-vimeo:hover{color:#fff;background-color:#0f7b9f;border-color:rgba(0,0,0,.2)}.btn-vimeo.active,.btn-vimeo:active,.open>.dropdown-toggle.btn-vimeo{background-image:none}.btn-vimeo.disabled,.btn-vimeo.disabled.active,.btn-vimeo.disabled.focus,.btn-vimeo.disabled:active,.btn-vimeo.disabled:focus,.btn-vimeo.disabled:hover,.btn-vimeo[disabled],.btn-vimeo[disabled].active,.btn-vimeo[disabled].focus,.btn-vimeo[disabled]:active,.btn-vimeo[disabled]:focus,.btn-vimeo[disabled]:hover,fieldset[disabled] .btn-vimeo,fieldset[disabled] .btn-vimeo.active,fieldset[disabled] .btn-vimeo.focus,fieldset[disabled] .btn-vimeo:active,fieldset[disabled] .btn-vimeo:focus,fieldset[disabled] .btn-vimeo:hover{background-color:#1ab7ea;border-color:rgba(0,0,0,.2)}.btn-vimeo .badge{color:#1ab7ea;background-color:#fff}.btn-vk{color:#fff;background-color:#587ea3;border-color:rgba(0,0,0,.2)}.btn-vk.active,.btn-vk.focus,.btn-vk:active,.btn-vk:focus,.btn-vk:hover,.open>.dropdown-toggle.btn-vk{color:#fff;background-color:#466482;border-color:rgba(0,0,0,.2)}.btn-vk.active.focus,.btn-vk.active:focus,.btn-vk.active:hover,.btn-vk:active.focus,.btn-vk:active:focus,.btn-vk:active:hover,.open>.dropdown-toggle.btn-vk.focus,.open>.dropdown-toggle.btn-vk:focus,.open>.dropdown-toggle.btn-vk:hover{color:#fff;background-color:#3a526b;border-color:rgba(0,0,0,.2)}.btn-vk.active,.btn-vk:active,.open>.dropdown-toggle.btn-vk{background-image:none}.btn-vk.disabled,.btn-vk.disabled.active,.btn-vk.disabled.focus,.btn-vk.disabled:active,.btn-vk.disabled:focus,.btn-vk.disabled:hover,.btn-vk[disabled],.btn-vk[disabled].active,.btn-vk[disabled].focus,.btn-vk[disabled]:active,.btn-vk[disabled]:focus,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk,fieldset[disabled] .btn-vk.active,fieldset[disabled] .btn-vk.focus,fieldset[disabled] .btn-vk:active,fieldset[disabled] .btn-vk:focus,fieldset[disabled] .btn-vk:hover{background-color:#587ea3;border-color:rgba(0,0,0,.2)}.btn-vk .badge{color:#587ea3;background-color:#fff}.btn-yahoo{color:#fff;background-color:#720e9e;border-color:rgba(0,0,0,.2)}.btn-yahoo.active,.btn-yahoo.focus,.btn-yahoo:active,.btn-yahoo:focus,.btn-yahoo:hover,.open>.dropdown-toggle.btn-yahoo{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,.2)}.btn-yahoo.active.focus,.btn-yahoo.active:focus,.btn-yahoo.active:hover,.btn-yahoo:active.focus,.btn-yahoo:active:focus,.btn-yahoo:active:hover,.open>.dropdown-toggle.btn-yahoo.focus,.open>.dropdown-toggle.btn-yahoo:focus,.open>.dropdown-toggle.btn-yahoo:hover{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,.2)}.btn-yahoo.active,.btn-yahoo:active,.open>.dropdown-toggle.btn-yahoo{background-image:none}.btn-yahoo.disabled,.btn-yahoo.disabled.active,.btn-yahoo.disabled.focus,.btn-yahoo.disabled:active,.btn-yahoo.disabled:focus,.btn-yahoo.disabled:hover,.btn-yahoo[disabled],.btn-yahoo[disabled].active,.btn-yahoo[disabled].focus,.btn-yahoo[disabled]:active,.btn-yahoo[disabled]:focus,.btn-yahoo[disabled]:hover,fieldset[disabled] .btn-yahoo,fieldset[disabled] .btn-yahoo.active,fieldset[disabled] .btn-yahoo.focus,fieldset[disabled] .btn-yahoo:active,fieldset[disabled] .btn-yahoo:focus,fieldset[disabled] .btn-yahoo:hover{background-color:#720e9e;border-color:rgba(0,0,0,.2)}.btn-yahoo .badge{color:#720e9e;background-color:#fff}.btn-android{color:#fff;background-color:#558700;border-color:rgba(0,0,0,.2)}.btn-android.active,.btn-android.focus,.btn-android:active,.btn-android:focus,.btn-android:hover,.open>.dropdown-toggle.btn-android{color:#fff;background-color:#345300;border-color:rgba(0,0,0,.2)}.btn-android.active.focus,.btn-android.active:focus,.btn-android.active:hover,.btn-android:active.focus,.btn-android:active:focus,.btn-android:active:hover,.open>.dropdown-toggle.btn-android.focus,.open>.dropdown-toggle.btn-android:focus,.open>.dropdown-toggle.btn-android:hover{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,.2)}.btn-android.active,.btn-android:active,.open>.dropdown-toggle.btn-android{background-image:none}.btn-android.disabled,.btn-android.disabled.active,.btn-android.disabled.focus,.btn-android.disabled:active,.btn-android.disabled:focus,.btn-android.disabled:hover,.btn-android[disabled],.btn-android[disabled].active,.btn-android[disabled].focus,.btn-android[disabled]:active,.btn-android[disabled]:focus,.btn-android[disabled]:hover,fieldset[disabled] .btn-android,fieldset[disabled] .btn-android.active,fieldset[disabled] .btn-android.focus,fieldset[disabled] .btn-android:active,fieldset[disabled] .btn-android:focus,fieldset[disabled] .btn-android:hover{background-color:#558700;border-color:rgba(0,0,0,.2)}.btn-android .badge{color:#558700;background-color:#fff}.entry-content .btn:not(.btn-primary){background-image:none}.entry-content a.btn.btn-social{color:#fff;text-shadow:none;padding-top:0;padding-bottom:0}.entry-content a.btn.btn-social.btn-reddit{color:#000}.entry-content a.btn.btn-social:focus{padding-left:44px}.entry-content a.btn.btn-lg.btn-social{font-size:18px;line-height:45px}.entry-content a.btn.btn-lg.btn-social:focus{padding-left:61px}.entry-content a.btn{text-decoration:none}#sidebar .widget a.icon{float:right;line-height:40px;background:#fff;font-size:20px;font-weight:400;padding:10px 15px 0;color:#292929}.entry-content li,.entry-content p{color:#000}@media (max-width:979px){#header-inner{min-height:40px}}iframe#comment-editor{width:100%!important;height:250px}.post-avatar{background:url(//lh3.googleusercontent.com/-6qwdHih3tFk/Vv6N0dTaICI/AAAAAAACuRA/AsKTNm9c_Bg/s0/post-avatar.png)}.firstload-background{background:url(//2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;height:100%;left:0;position:fixed;top:0;width:100%;z-index:-1}.author-box{float:left;width:100%;padding:0}@media (max-width:480px){body{font-size:1rem}}", "",{"version":3,"sources":["/home/pudding/NetBeansProjects/[nodejs]/Pulipuli-Blog/lib-for-link/src/global-header/style/style.less","style.less"],"names":[],"mappings":"AACA,eACE,gBCAF,CDGA,yBACE,eAAA,CACA,kBCDF,CDIA,kBACE,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBCFF,CDKA,kBACE,cAAA,CACA,aAAA,CAEA,gBAAA,CACA,iBCJF,CDOA,kBACE,cAAA,CACA,iBAAA,CACA,aAAA,CACA,cAAA,CACA,kBCLF,CDQA,kBACE,4BAAA,CACA,6BCNF,CDSA,kBACE,uBCPF,CDUA,kBACE,yBCRF,CDWA,yBACE,kBACE,yBCTF,CACF,CDYA,oCAGE,yBAAA,CACA,4BCVF,CDaA,kBACE,2BAAA,CACA,gBCXF,CDkBA,gDACE,4BCbF,CDgBA,0BACE,yBCdF,CDiBA,iBACE,yBAAA,CACA,aCfF,CDkBA,oBACE,oBAAA,CACA,UChBF,CDyBA,uDACE,wBClBF,CDqBA,sPAME,WAAA,CAEA,kBAAA,CACA,yBCnBF,CDsBA,uDACE,kBCpBF,CDuBA,4CACE,wBCrBF,CDwBA,eACE,YCtBF,CD6BA,2CACE,eC1BF,CD6BA,iBACE,sBC3BF,CD+BA,uBACE,iBC5BF,CD8BA,sBAEE,oBC5BF,CDgCA,sBACE,cAAA,CACA,kBC7BF,CDgCA,gCACE,iBC9BF,CDkCA,gCACE,WAAA,CACA,oBAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,YChCF,CDmCA,4CACE,cAAA,CACA,oBCjCF,CDoCA,wBACE,eAAA,CACA,iBAAA,CACA,UClCF,CDoCA,2BACE,iBCjCF,CDqCA,0BACE,YCnCF,CDsCA,6BACE,iBCpCF,CDuCA,4CACE,eAAA,CACA,gBCrCF,CDwCA,oDACE,SCtCF,CDyCA,4BACE,eAAA,CACA,iBCvCF,CD2CA,6CACE,YCzCF,CD4CA,2SAKE,aC1CF,CD6CA,eACE,mBC3CF,CD8CA,yBACE,YACE,YC5CF,CACF,CD+CA,iCACE,kBAAA,CACA,UC7CF,CD+CA,kCACE,UC7CF,CDgDA,SACE,cC9CF,CDgDA,kCACE,cC9CF,CDiDA,gBACE,YC/CF,CDuDA,gCACE,uBCjDF,CDoDA,sCACE,yBClDF,CDsDA,YACE,oBCpDF,CDuDA,oBACE,UCpDF,CDwDA,yBASE,8BACE,kBCvDF,CDyDA,QACE,cCvDF,CACF,CDiEA,+CACE,gCAGE,YC3DF,CACF,CD8DA,kCACE,eC5DF,CD+DA,uCACE,eAAA,CACA,oBC7DF,CDmEA,8GAEE,YC/DF,CDoEA,8CACE,WAAA,CACA,UAAA,CACA,cClEF,CDsEA,yBACE,aACE,WAAA,CACA,UAAA,CACA,eCnEF,CDsEA,uDACE,YCpEF,CACF,CDiFA,eACE,wBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,4BAAA,CACA,iCAAA,CACA,8BAAA,CACA,yBAAA,CACA,cAAA,CACA,iBAAA,CACA,oBCvEF,CD0EA,8BACE,UAAA,CACA,wBCxEF,CD2EA,6BACE,UAAA,CACA,wBCzEF,CD4EA,8BACE,UAAA,CACA,wBC1EF,CD6EA,2BACE,UAAA,CACA,wBC3EF,CD8EA,0BACE,UAAA,CACA,wBC5EF,CD+EA,iCACE,UAAA,CACA,wBC7EF,CDgFA,4BAEE,wBC9EF,CDiFA,4BACE,UAAA,CACA,qBC/EF,CDkFA,6BACE,UAAA,CACA,wBChFF,CDmFA,4BACE,UAAA,CACA,wBCjFF,CDoFA,yBACE,UAAA,CACA,wBClFF,CDqFA,6BACE,UAAA,CACA,wBCnFF,CDuFA,yBACE,mDAEE,YCpFF,CACF,CDuFA,yBACE,6BACE,QCrFF,CACF,CDwFA,mDACE,YCtFF,CDyFA,0BACE,gBCvFF,CD2FA,wBACE,iBCxFF,CD2FA,oBACE,SCzFF,CD6FA,aACE,cC3FF,CDgGA,uBAEE,aC5FF,CD+FA,8BACE,WC7FF,CDgGA,kCACE,uBC9FF,CDiGA,uCACE,WAAA,CACA,UAAA,CAEA,WAAA,CACA,kBAAA,CACA,YAAA,CACA,QC/FF,CDoIA,uCAEE,gBAAA,CACA,iBCnGF,CDsGA,6BACE,iBCpGF,CDyGA,iDAEE,UCrGF,CDwGA,sCAEE,UCrGF,CD6GA,wBACE,uBCxGF,CDuHA,yEAEE,cAAA,CACA,eC7GF,CDoHA,yBACE,8BAAA,CACA,aAAA,CACA,YChHF,CDmHA,qCACE,UCjHF,CDgIA,YAAY,iBAAA,CAAkB,iBAAA,CAAkB,eAAA,CAAgB,kBAAA,CAAmB,eAAA,CAAgB,sBC7GnG,CD6G0H,yBAAyB,iBAAA,CAAkB,MAAA,CAAO,KAAA,CAAM,QAAA,CAAS,UAAA,CAAW,gBAAA,CAAiB,eAAA,CAAgB,iBAAA,CAAkB,qCClGzP,CDmGA,mBAAmB,iBChGnB,CDgGqC,gCAAgC,gBAAA,CAAiB,UAAA,CAAW,eC3FjG,CD4FA,mBAAmB,iBCzFnB,CDyFqC,gCAAgC,gBAAA,CAAiB,UAAA,CAAW,eCpFjG,CDqFA,mBAAmB,iBClFnB,CDkFqC,gCAAgC,gBAAA,CAAiB,UAAA,CAAW,eC7EjG,CD8EA,iBAAiB,iBAAA,CAAoC,eAAA,CAAgB,kBAAA,CAAmB,eAAA,CAAgB,sBAAA,CAAuB,WAAA,CAAY,UAAA,CAAW,SCnEtJ,CDmEgK,8BAA8B,iBAAA,CAAkB,MAAA,CAAO,KAAA,CAAM,QAAA,CAAS,UAAA,CAAW,gBAAA,CAAiB,eAAA,CAAkC,qCCxDpS,CDyDA,wBAAwB,iBCtDxB,CDsD0C,qCAAqC,gBAAA,CAAiB,UAAA,CAAW,eCjD3G,CDkDA,wBAAwB,iBC/CxB,CD+C0C,qCAAqC,gBAAA,CAAiB,UAAA,CAAW,eC1C3G,CD2CA,wBAAwB,iBCxCxB,CDwC0C,qCAAqC,gBAAA,CAAiB,UAAA,CAAW,eCnC3G,CDoCA,8BAA8B,WAAA,CAAY,iBAAA,CAAkB,oBC/B5D,CDgCA,wBAAwB,WAAA,CAAY,UAAA,CAAW,cAAA,CAAe,eC1B9D,CD2BA,wBAAwB,WAAA,CAAY,UAAA,CAAW,cAAA,CAAe,eCrB9D,CDsBA,wBAAwB,WAAA,CAAY,UAAA,CAAW,cAAA,CAAe,eChB9D,CDiBA,SAAS,UAAA,CAAW,wBAAA,CAAyB,2BCZ7C,CDcA,4GAA+D,UAAA,CAAW,wBAAA,CAAyB,2BCInG,CDJgI,mPAAmP,UAAA,CAAW,wBAAA,CAAyB,2BCiBvZ,CDhBA,+DAA+D,qBCqB/D,CDpBA,seAAse,wBAAA,CAAyB,2BCyC/f,CDxCA,gBAAgB,aAAA,CAAc,qBC4C9B,CD3CA,eAAe,UAAA,CAAW,wBAAA,CAAyB,2BCgDnD,CD9CA,gJAAiF,UAAA,CAAW,wBAAA,CAAyB,2BCgErH,CDhEkJ,ySAAyS,UAAA,CAAW,wBAAA,CAAyB,2BC6E/d,CD5EA,iFAAiF,qBCiFjF,CDhFA,klBAAklB,wBAAA,CAAyB,2BCqG3mB,CDpGA,sBAAsB,aAAA,CAAc,qBCwGpC,CDvGA,aAAa,UAAA,CAAW,wBAAA,CAAyB,2BC4GjD,CD1GA,oIAA2E,UAAA,CAAW,wBAAA,CAAyB,2BC4H/G,CD5H4I,uRAAuR,UAAA,CAAW,wBAAA,CAAyB,2BCyIvc,CDxIA,2EAA2E,qBC6I3E,CD5IA,8iBAA8iB,wBAAA,CAAyB,2BCiKvkB,CDhKA,oBAAoB,aAAA,CAAc,qBCoKlC,CDnKA,cAAc,UAAA,CAAW,wBAAA,CAAyB,2BCwKlD,CDtKA,0IAA8E,UAAA,CAAW,wBAAA,CAAyB,2BCwLlH,CDxL+I,gSAAgS,UAAA,CAAW,wBAAA,CAAyB,2BCqMnd,CDpMA,8EAA8E,qBCyM9E,CDxMA,gkBAAgkB,wBAAA,CAAyB,2BC6NzlB,CD5NA,qBAAqB,aAAA,CAAc,qBCgOnC,CD/NA,YAAY,UAAA,CAAW,wBAAA,CAAyB,2BCoOhD,CDlOA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BCoP5G,CDpPyI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCiQ3b,CDhQA,wEAAwE,qBCqQxE,CDpQA,4hBAA4hB,wBAAA,CAAyB,2BCyRrjB,CDxRA,mBAAmB,aAAA,CAAc,qBC4RjC,CD3RA,gBAAgB,UAAA,CAAW,wBAAA,CAAyB,2BCgSpD,CD9RA,sJAAoF,UAAA,CAAW,wBAAA,CAAyB,2BCgTxH,CDhTqJ,kTAAkT,UAAA,CAAW,wBAAA,CAAyB,2BC6T3e,CD5TA,oFAAoF,qBCiUpF,CDhUA,omBAAomB,wBAAA,CAAyB,2BCqV7nB,CDpVA,uBAAuB,aAAA,CAAc,qBCwVrC,CDvVA,YAAY,UAAA,CAAW,qBAAA,CAAsB,2BC4V7C,CD1VA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BC4W5G,CD5WyI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCyX3b,CDxXA,wEAAwE,qBC6XxE,CD5XA,4hBAA4hB,qBAAA,CAAsB,2BCiZljB,CDhZA,mBAAmB,UAAA,CAAW,qBCoZ9B,CDnZA,YAAY,UAAA,CAAW,wBAAA,CAAyB,2BCwZhD,CDtZA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BCwa5G,CDxayI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCqb3b,CDpbA,wEAAwE,qBCybxE,CDxbA,4hBAA4hB,wBAAA,CAAyB,2BC6crjB,CD5cA,mBAAmB,aAAA,CAAc,qBCgdjC,CD/cA,eAAe,UAAA,CAAW,wBAAA,CAAyB,2BCodnD,CDldA,gJAAiF,UAAA,CAAW,wBAAA,CAAyB,2BCoerH,CDpekJ,ySAAyS,UAAA,CAAW,wBAAA,CAAyB,2BCif/d,CDhfA,iFAAiF,qBCqfjF,CDpfA,klBAAklB,wBAAA,CAAyB,2BCygB3mB,CDxgBA,sBAAsB,aAAA,CAAc,qBC4gBpC,CD3gBA,cAAc,UAAA,CAAW,wBAAA,CAAyB,2BCghBlD,CD9gBA,0IAA8E,UAAA,CAAW,wBAAA,CAAyB,2BCgiBlH,CDhiB+I,gSAAgS,UAAA,CAAW,wBAAA,CAAyB,2BC6iBnd,CD5iBA,8EAA8E,qBCijB9E,CDhjBA,gkBAAgkB,wBAAA,CAAyB,2BCqkBzlB,CDpkBA,qBAAqB,aAAA,CAAc,qBCwkBnC,CDvkBA,eAAe,UAAA,CAAW,wBAAA,CAAyB,2BC4kBnD,CD1kBA,gJAAiF,UAAA,CAAW,wBAAA,CAAyB,2BC4lBrH,CD5lBkJ,ySAAyS,UAAA,CAAW,wBAAA,CAAyB,2BCymB/d,CDxmBA,iFAAiF,qBC6mBjF,CD5mBA,klBAAklB,wBAAA,CAAyB,2BCioB3mB,CDhoBA,sBAAsB,aAAA,CAAc,qBCooBpC,CDnoBA,mBAAmB,UAAA,CAAW,wBAAA,CAAyB,2BCwoBvD,CDtoBA,wKAA6F,UAAA,CAAW,wBAAA,CAAyB,2BCwpBjI,CDxpB8J,6UAA6U,UAAA,CAAW,wBAAA,CAAyB,2BCqqB/gB,CDpqBA,6FAA6F,qBCyqB7F,CDxqBA,0pBAA0pB,wBAAA,CAAyB,2BC6rBnrB,CD5rBA,0BAA0B,aAAA,CAAc,qBCgsBxC,CD/rBA,YAAY,UAAA,CAAW,wBAAA,CAAyB,2BCosBhD,CDlsBA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BCotB5G,CDptByI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCiuB3b,CDhuBA,wEAAwE,qBCquBxE,CDpuBA,4hBAA4hB,wBAAA,CAAyB,2BCyvBrjB,CDxvBA,mBAAmB,aAAA,CAAc,qBC4vBjC,CD3vBA,eAAe,UAAA,CAAW,wBAAA,CAAyB,2BCgwBnD,CD9vBA,gJAAiF,UAAA,CAAW,wBAAA,CAAyB,2BCgxBrH,CDhxBkJ,ySAAyS,UAAA,CAAW,wBAAA,CAAyB,2BC6xB/d,CD5xBA,iFAAiF,qBCiyBjF,CDhyBA,klBAAklB,wBAAA,CAAyB,2BCqzB3mB,CDpzBA,sBAAsB,aAAA,CAAc,qBCwzBpC,CDvzBA,YAAY,UAAA,CAAW,wBAAA,CAAyB,2BC4zBhD,CD1zBA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BC40B5G,CD50ByI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCy1B3b,CDx1BA,wEAAwE,qBC61BxE,CD51BA,4hBAA4hB,wBAAA,CAAyB,2BCi3BrjB,CDh3BA,mBAAmB,aAAA,CAAc,qBCo3BjC,CDn3BA,gBAAgB,UAAA,CAAW,qBAAA,CAAsB,2BCw3BjD,CDt3BA,sJAAoF,UAAA,CAAW,qBAAA,CAAsB,2BCw4BrH,CDx4BkJ,kTAAkT,UAAA,CAAW,wBAAA,CAAyB,2BCq5Bxe,CDp5BA,oFAAoF,qBCy5BpF,CDx5BA,omBAAomB,qBAAA,CAAsB,2BC66B1nB,CD56BA,uBAAuB,UAAA,CAAW,qBCg7BlC,CD/6BA,YAAY,UAAA,CAAW,wBAAA,CAAyB,2BCo7BhD,CDl7BA,8HAAwE,UAAA,CAAW,wBAAA,CAAyB,2BCo8B5G,CDp8ByI,8QAA8Q,UAAA,CAAW,wBAAA,CAAyB,2BCi9B3b,CDh9BA,wEAAwE,qBCq9BxE,CDp9BA,4hBAA4hB,wBAAA,CAAyB,2BCy+BrjB,CDx+BA,mBAAmB,aAAA,CAAc,qBC4+BjC,CD3+BA,aAAa,UAAA,CAAW,wBAAA,CAAyB,2BCg/BjD,CD9+BA,oIAA2E,UAAA,CAAW,wBAAA,CAAyB,2BCggC/G,CDhgC4I,uRAAuR,UAAA,CAAW,wBAAA,CAAyB,2BC6gCvc,CD5gCA,2EAA2E,qBCihC3E,CDhhCA,8iBAA8iB,wBAAA,CAAyB,2BCqiCvkB,CDpiCA,oBAAoB,aAAA,CAAc,qBCwiClC,CDviCA,WAAW,UAAA,CAAW,wBAAA,CAAyB,2BC4iC/C,CD1iCA,wHAAqE,UAAA,CAAW,wBAAA,CAAyB,2BC4jCzG,CD5jCsI,qQAAqQ,UAAA,CAAW,wBAAA,CAAyB,2BCykC/a,CDxkCA,qEAAqE,qBC6kCrE,CD5kCA,0gBAA0gB,wBAAA,CAAyB,2BCimCniB,CDhmCA,kBAAkB,aAAA,CAAc,qBComChC,CDnmCA,QAAQ,UAAA,CAAW,wBAAA,CAAyB,2BCwmC5C,CDtmCA,sGAA4D,UAAA,CAAW,wBAAA,CAAyB,2BCwnChG,CDxnC6H,0OAA0O,UAAA,CAAW,wBAAA,CAAyB,2BCqoC3Y,CDpoCA,4DAA4D,qBCyoC5D,CDxoCA,odAAod,wBAAA,CAAyB,2BC6pC7e,CD5pCA,eAAe,aAAA,CAAc,qBCgqC7B,CD/pCA,WAAW,UAAA,CAAW,wBAAA,CAAyB,2BCoqC/C,CDlqCA,wHAAqE,UAAA,CAAW,wBAAA,CAAyB,2BCorCzG,CDprCsI,qQAAqQ,UAAA,CAAW,wBAAA,CAAyB,2BCisC/a,CDhsCA,qEAAqE,qBCqsCrE,CDpsCA,0gBAA0gB,wBAAA,CAAyB,2BCytCniB,CDxtCA,kBAAkB,aAAA,CAAc,qBC4tChC,CD1tCA,aAAa,UAAA,CAAW,wBAAA,CAAyB,2BC+tCjD,CD7tCA,oIAA2E,UAAA,CAAW,wBAAA,CAAyB,2BC+uC/G,CD/uC4I,uRAAuR,UAAA,CAAW,wBAAA,CAAyB,2BC4vCvc,CD3vCA,2EAA2E,qBCgwC3E,CD/vCA,8iBAA8iB,wBAAA,CAAyB,2BCoxCvkB,CDnxCA,oBAAoB,aAAA,CAAc,qBCuxClC,CDrxCA,sCACE,qBCuxCF,CDrxCA,gCACE,UAAA,CACA,gBAAA,CACA,aAAA,CACA,gBCuxCF,CDpxCA,2CACE,UCsxCF,CDnxCA,sCACE,iBCqxCF,CDlxCA,uCACE,cAAA,CACA,gBCoxCF,CDjxCA,6CACE,iBCmxCF,CDhxCA,qBACE,oBCkxCF,CD5wCA,wBACE,WAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,aCgxCF,CD5wCA,mCAEE,UC8wCF,CDzwCA,yBACE,cACE,eC6wCF,CACF,CD1wCA,sBACE,oBAAA,CACA,YC4wCF,CDzwCA,aACE,+GC2wCF,CDtwCA,sBACE,qIAAA,CACA,WAAA,CACA,MAAA,CACA,cAAA,CACA,KAAA,CACA,UAAA,CACA,UCwwCF,CDrwCA,YACE,UAAA,CACA,UAAA,CACA,SCuwCF,CDpwCA,yBACE,KACE,cCswCF,CACF","file":"style.less","sourcesContent":["\n.entry-content {\n  line-height: 200%;\n}\n\n.entry-content > article > p {\n  text-indent: 2em;\n  text-align: justify;\n}\n\n.entry-content h4 {\n  font-size: 24pt;\n  color:#BD8242;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.entry-content h5 {\n  font-size: 20pt;\n  color:#713E06;\n\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color:#634121;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n\n.entry-content hr {\n  border-top: 3px solid #CE8A42;\n  border-bottom: 0px solid #BD8A39;\n}\n\n.entry-content ul {\n  margin-left: 0em !important;\n}\n\n.entry-content li {\n  margin-left: 2em !important;\n}\n\n@media (max-width:480px) {\n  .entry-content li {\n    margin-left: 1em !important;\n  }\n}\n\n.entry-content ul,\n.entry-content li {\n  /*margin-left: 2em !important;*/\n  margin-top:0.5em !important;\n  margin-bottom:0.5em !important;\n}\n\n.entry-content li {\n  list-style: square !important;\n  line-height: 200%;\n}\n\n.entry-content ol > li {\n  list-style: decimal !important;\n}\n\n.entry-content .post ol > li {\n  list-style: decimal !important;\n}\n\n.entry-content blockquote {\n  border-left-color: #F7EBDE;\n}\n\n.entry-content a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n\n.entry-content h1 a {\n  text-decoration: none;\n  color: #333;\n}\n\n.entry-content table,\n.entry-content table th,\n.entry-content table td {\n  /*border: 1px solid #BD8242;*/\n}\n\n.entry-content > article > table > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.entry-content > article > table>tbody>tr>td,\n.entry-content > article > table>tbody>tr>th, \n.entry-content > article > table>tfoot>tr>td,\n.entry-content > article > table>tfoot>tr>th,\n.entry-content > article > table>thead>tr>td,\n.entry-content > article > table>thead>tr>th {\n  padding: 8px;\n  /*line-height: 1.42857143;*/\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.entry-content > article > table>tbody>tr:first-of-type>td {\n  border-top-width: 0;\n}\n\n.entry-content > article > table>tbody>tr:hover {\n  background-color: #f5f5f5; \n}\n\n#main .post > h3 {\n  display: none;\n}\n\n\n\n/* ************************ */\n\n#Blog1_backlinks-container .comment-footer {\n  margin-top: 10px;\n}\n\n#footer_bar_body {\n  background: transparent;\n}\n\n/* *************************** */\n.about-me .description {\n  line-height: 1.5em;\n}\n.about-me .about-link {\n  /*float: right;*/\n  padding-bottom: 1.5em;\n}\n\n/* 20160601 加大About Me的高度 */\n#sidebar .about-me h3 {\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n\n#sidebar .about-me .description {\n  margin-bottom: 2em;\n}\n\n\n#sidebar .about-link .read-more {\n  float: right;\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-left: 5px;\n  margin-top: 0;\n}\n\n#sidebar .about-link .social-button-wrapper {\n  margin-top: 4px;\n  display: inline-block;\n}\n\n.about-me .social-media {\n  margin-top: 0.5em;\n  text-align: center;\n  clear: both;\n}\n.about-me .email-subscribe {\n  text-align: center;\n  /*margin: 1em;*/\n}\n\n.about-me .widget-content {\n  margin: 0 1em;\n}\n\n.fb-fan-page .widget-content {\n  text-align: center;\n}\n\n.about-me .email-subscribe td:first-of-type {\n  text-align: left;\n  padding-top: 0.7em;\n}\n\n.about-me .email-subscribe .follow-by-email-address {\n  width: 95%;\n}\n\n.donation input[type=\"image\"] {\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\n\n#footerbar-popular-post .popular-posts > ul > dd {\n  display:none; \n}\n\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display:block;\n}\n\n.popular-posts { \n  padding-bottom: 0.5em;\n}\n\n@media (max-width:979px) {\n  #footer_bar {\n    display: none;\n  } \n}\n\n.widget-content.popular-posts dd {\n  margin-bottom: 0.5em;\n  clear: both;\n}\n.widget-content.popular-posts img {\n  float: left;\n}\n\nh1.title {\n  font-size: 30px;\n}\n#header-inner .descriptionwrapper {\n  font-size: 14px;\n}\n\ndiv.post-avatar {\n  display:none;\n}\n\n.meta {\n  margin-left: 0px !important;\n}\n\n/************************/\n#content #archivespage ul {\n  margin-left: 0 !important;\n}\n\n#content #archivespage li.archivedate {\n  list-style: none !important;\n}\n\n\n.container1{\n  width:100% !important; \n}\n\n#footer .management {\n  clear: both;\n  /*margin-bottom: 70px;*/\n}\n\n@media (max-width: 979px) {\n  /*\n  .search-bar {\n      margin-top: 4px;\n      padding-left: 0;\n      padding-right: 0;\n  }\n  */\n\n  .navbar-inverse .navbar-inner {\n    background: #2d2d2d;\n  }\n  #header {\n    margin-right: 0;\n  }\n}\n\n/**********************************/\n/*\nbody .addthis-smartlayers {\n    display: none !important;\n}\n*/\n\n@media (min-width: 480px) and (max-width: 767px) {\n  .entry-container .entry-content {\n    //padding: 50px;\n    //padding-right: 20px;\n    padding: 2rem;\n  }\n}\n\n.entry-container .entry-content > p {\n  text-indent: 2em;\n}\n\n.entry-container .entry-content a.more {\n  font-weight: bold;\n  text-decoration: none;\n}\n\n/**********************************/\n/* 底部區域 */\n\n.site-footer .cloud-label-widget-content .label-size-2,\n.site-footer .cloud-label-widget-content .label-size-1 {\n  display:none;\n}\n\n\n\n.site-footer .cloud-label-widget-content .btn {\n  float: right;\n  color: black;\n  margin-top: 1em;\n}\n\n/* 20160527網頁寬度低於460時，Buy Me A Coffee跟Hit Count應該分開為左右2欄 */\n@media (max-width: 979px) {\n  div.donation {\n    width: 49.5%;\n    float: left;\n    margin-right: 1%;\n  }\n\n  .site-footer .cloud-label-widget-content .label-size-3 {\n    display:none;\n  }\n}\n\n/*\n@media (max-width: 480px) {\n    .site-footer .cloud-label-widget-content .label-size-4 {\n        display:none;\n    }\n}\n*/\n\n/**********************************/\n\n.social-button {\n  background-color: #D6D7D6;\n  display: inline-block;\n  width: 33px;\n  height: 32px;\n  line-height: 33px;\n  border-radius: 16px;\n  -o-transition: all .20s linear;\n  -webkit-transition: all .20s linear;\n  -moz-transition: all .20s linear;\n  transition:  all .20s linear;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n}\n\n.social-button.facebook:hover {\n  color:white;\n  background-color: #3165A5;\n}\n\n.social-button.twitter:hover {\n  color:white;\n  background-color: #42AAE7;\n}\n\n.social-button.linkedin:hover {\n  color:white;\n  background-color: #0075B5;\n}\n\n.social-button.plurk:hover {\n  color:white;\n  background-color: #EF4539;\n}\n\n.social-button.line:hover {\n  color:white;\n  background-color: #4ACF00;\n}\n\n.social-button.google-plus:hover {\n  color:white;\n  background-color: #DE4939;\n}\n\n.social-button.chrome:hover {\n  color:white;\n  background-color: #42556B;\n}\n\n.social-button.github:hover {\n  color:white;\n  background-color: black;\n}\n\n.social-button.android:hover {\n  color:white;\n  background-color: #a4c639;\n}\n\n.social-button.chrome:hover {\n  color:white;\n  background-color: #4286F7;\n}\n\n.social-button.rss:hover {\n  color:white;\n  background-color: #F78631;\n}\n\n.social-button.addthis:hover {\n  color:white;\n  background-color: #FF5D39;\n}\n\n/* 20161118 */\n@media (min-width: 979px) {\n  .social-button.line,\n  .share-story-container li.line {\n    display: none;\n  }\n}\n\n@media (max-width: 767px) {\n  div.share-story-container ul {\n    margin: 0;\n  }\n}\n\n.entry-meta.clearfix .share-story-container .about {\n  display: none;\n}\n\n.share-story-container ul {\n  text-align: right;\n}\n\n/***********************/\n.pager .previous.hidden {\n  visibility: hidden;\n}\n\n.pager li.link > span {\n  width: 6em;\n}\n\n\n.navbar .nav {\n  margin-right: 0;\n}\n\n/*******************************************/\n/* 20160530 文中自訂搜尋 */\n.entry-content .gsib_a {\n  /*padding-left:0;*/\n  padding-top:0;\n}\n\n.entry-content .gsc-input-box {\n  height: auto;\n}\n\n.entry-content .gsc-search-button {\n  display: block !important;\n}\n\n.entry-content input.gsc-search-button {\n  height: 13px;\n  width: 13px;\n  padding: 0;\n  min-width: 0;\n  border-radius: 0.5em;\n  padding: 13px;\n  margin: 0;\n}\n\n\n/**********************************/\n/* 來處理SumoMe的問題 */\n/*\nbody > a[title=\"SumoMe\"] {\n  visibility: hidden;\n}\n\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] > img {\n  display: none;\n}\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] {\n  background-image: url(//lh3.googleusercontent.com/-qWpis5y0_fQ/Vwp4Y1ies0I/AAAAAAACuvg/9VCLXE9q7Wk/s0/share-alt.png) !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\nbody > div.sumome-share-client-wrapper.sumome-share-client-wrapper-left-page {\n  top: 111px !important;\n}\n\nbody > div.sumome-share-client-counts div.sumome-share-client-animated {\n  border: 1px solid rgb(15, 82, 186);\n}\n\n@media (max-height: 320px) {\n  body > div.sumome-share-client-wrapper {\n    display: none;\n  }\n}\n*/\n\n/**************************/\n\na[name][id]:target,\na[name=\"more\"]:target {\n  margin-top: -60px;\n  position: absolute;\n}\n\na#comment-form-anchor:target {\n  margin-top: -300px;\n}\n\n/*********************************************/\n/* 20160522 accesskey */\n#masthead a[accesskey],\n.site-footer a[accesskey] {\n  color:white;\n}\n\n#masthead a[accesskey].accesskey-menu {\n  /*line-height: 70px;*/\n  float: left;\n  /*padding-left:5px;*/\n}\n\n#masthead.fixed-nav a[accesskey].accesskey-menu {\n  /*line-height: 35px;*/\n}\n\n.site-footer .container {\n  padding-top:0 !important;\n}\n\n\n\n@media (max-width: 979px) {\n  #masthead a[accesskey].accesskey-menu {\n    /*line-height: 80px;*/\n  }\n\n  #masthead.fixed-nav a[accesskey].accesskey-menu {\n    /*line-height: 55px;*/\n  }\n}\n\n#masthead.fixed-nav li > a.accesskey-menu,\n.navbar .nav > li > a.accesskey-menu {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n\n/****************************************/\n/* 20160523 常用按鈕 */\n\n.entry-content .post-btn {\n  text-decoration: none !important;\n  font-size: 1em;\n  padding: 0.5em;\n}\n\n.entry-content .post-btn.btn-primary {\n  color: white;\n}\n\n/********************************************************/\n/*\n * Social Buttons for Bootstrap\n *\n * Copyright 2013-2015 Panayiotis Lipiridis\n * Licensed under the MIT License\n *\n * https://github.com/lipis/bootstrap-social\n\n * 展示: https://lipis.github.io/bootstrap-social/\n */\n\n.btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\n.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}\n.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}\n.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}\n.btn-social-icon{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding:0}.btn-social-icon>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\n.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}\n.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}\n.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}\n.btn-social-icon>:first-child{border:none;text-align:center;width:100% !important}\n.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}\n.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}\n.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}\n.btn-adn{color:#fff;background-color:#d87a68;border-color:rgba(0,0,0,0.2)}.btn-adn:focus,.btn-adn.focus{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}\n.btn-adn:hover{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}\n.btn-adn:active,.btn-adn.active,.open>.dropdown-toggle.btn-adn{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}.btn-adn:active:hover,.btn-adn.active:hover,.open>.dropdown-toggle.btn-adn:hover,.btn-adn:active:focus,.btn-adn.active:focus,.open>.dropdown-toggle.btn-adn:focus,.btn-adn:active.focus,.btn-adn.active.focus,.open>.dropdown-toggle.btn-adn.focus{color:#fff;background-color:#b94630;border-color:rgba(0,0,0,0.2)}\n.btn-adn:active,.btn-adn.active,.open>.dropdown-toggle.btn-adn{background-image:none}\n.btn-adn.disabled,.btn-adn[disabled],fieldset[disabled] .btn-adn,.btn-adn.disabled:hover,.btn-adn[disabled]:hover,fieldset[disabled] .btn-adn:hover,.btn-adn.disabled:focus,.btn-adn[disabled]:focus,fieldset[disabled] .btn-adn:focus,.btn-adn.disabled.focus,.btn-adn[disabled].focus,fieldset[disabled] .btn-adn.focus,.btn-adn.disabled:active,.btn-adn[disabled]:active,fieldset[disabled] .btn-adn:active,.btn-adn.disabled.active,.btn-adn[disabled].active,fieldset[disabled] .btn-adn.active{background-color:#d87a68;border-color:rgba(0,0,0,0.2)}\n.btn-adn .badge{color:#d87a68;background-color:#fff}\n.btn-bitbucket{color:#fff;background-color:#205081;border-color:rgba(0,0,0,0.2)}.btn-bitbucket:focus,.btn-bitbucket.focus{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}\n.btn-bitbucket:hover{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}\n.btn-bitbucket:active,.btn-bitbucket.active,.open>.dropdown-toggle.btn-bitbucket{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}.btn-bitbucket:active:hover,.btn-bitbucket.active:hover,.open>.dropdown-toggle.btn-bitbucket:hover,.btn-bitbucket:active:focus,.btn-bitbucket.active:focus,.open>.dropdown-toggle.btn-bitbucket:focus,.btn-bitbucket:active.focus,.btn-bitbucket.active.focus,.open>.dropdown-toggle.btn-bitbucket.focus{color:#fff;background-color:#0f253c;border-color:rgba(0,0,0,0.2)}\n.btn-bitbucket:active,.btn-bitbucket.active,.open>.dropdown-toggle.btn-bitbucket{background-image:none}\n.btn-bitbucket.disabled,.btn-bitbucket[disabled],fieldset[disabled] .btn-bitbucket,.btn-bitbucket.disabled:hover,.btn-bitbucket[disabled]:hover,fieldset[disabled] .btn-bitbucket:hover,.btn-bitbucket.disabled:focus,.btn-bitbucket[disabled]:focus,fieldset[disabled] .btn-bitbucket:focus,.btn-bitbucket.disabled.focus,.btn-bitbucket[disabled].focus,fieldset[disabled] .btn-bitbucket.focus,.btn-bitbucket.disabled:active,.btn-bitbucket[disabled]:active,fieldset[disabled] .btn-bitbucket:active,.btn-bitbucket.disabled.active,.btn-bitbucket[disabled].active,fieldset[disabled] .btn-bitbucket.active{background-color:#205081;border-color:rgba(0,0,0,0.2)}\n.btn-bitbucket .badge{color:#205081;background-color:#fff}\n.btn-dropbox{color:#fff;background-color:#1087dd;border-color:rgba(0,0,0,0.2)}.btn-dropbox:focus,.btn-dropbox.focus{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}\n.btn-dropbox:hover{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}\n.btn-dropbox:active,.btn-dropbox.active,.open>.dropdown-toggle.btn-dropbox{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}.btn-dropbox:active:hover,.btn-dropbox.active:hover,.open>.dropdown-toggle.btn-dropbox:hover,.btn-dropbox:active:focus,.btn-dropbox.active:focus,.open>.dropdown-toggle.btn-dropbox:focus,.btn-dropbox:active.focus,.btn-dropbox.active.focus,.open>.dropdown-toggle.btn-dropbox.focus{color:#fff;background-color:#0a568c;border-color:rgba(0,0,0,0.2)}\n.btn-dropbox:active,.btn-dropbox.active,.open>.dropdown-toggle.btn-dropbox{background-image:none}\n.btn-dropbox.disabled,.btn-dropbox[disabled],fieldset[disabled] .btn-dropbox,.btn-dropbox.disabled:hover,.btn-dropbox[disabled]:hover,fieldset[disabled] .btn-dropbox:hover,.btn-dropbox.disabled:focus,.btn-dropbox[disabled]:focus,fieldset[disabled] .btn-dropbox:focus,.btn-dropbox.disabled.focus,.btn-dropbox[disabled].focus,fieldset[disabled] .btn-dropbox.focus,.btn-dropbox.disabled:active,.btn-dropbox[disabled]:active,fieldset[disabled] .btn-dropbox:active,.btn-dropbox.disabled.active,.btn-dropbox[disabled].active,fieldset[disabled] .btn-dropbox.active{background-color:#1087dd;border-color:rgba(0,0,0,0.2)}\n.btn-dropbox .badge{color:#1087dd;background-color:#fff}\n.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,0.2)}.btn-facebook:focus,.btn-facebook.focus{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}\n.btn-facebook:hover{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}\n.btn-facebook:active,.btn-facebook.active,.open>.dropdown-toggle.btn-facebook{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}.btn-facebook:active:hover,.btn-facebook.active:hover,.open>.dropdown-toggle.btn-facebook:hover,.btn-facebook:active:focus,.btn-facebook.active:focus,.open>.dropdown-toggle.btn-facebook:focus,.btn-facebook:active.focus,.btn-facebook.active.focus,.open>.dropdown-toggle.btn-facebook.focus{color:#fff;background-color:#23345a;border-color:rgba(0,0,0,0.2)}\n.btn-facebook:active,.btn-facebook.active,.open>.dropdown-toggle.btn-facebook{background-image:none}\n.btn-facebook.disabled,.btn-facebook[disabled],fieldset[disabled] .btn-facebook,.btn-facebook.disabled:hover,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook:hover,.btn-facebook.disabled:focus,.btn-facebook[disabled]:focus,fieldset[disabled] .btn-facebook:focus,.btn-facebook.disabled.focus,.btn-facebook[disabled].focus,fieldset[disabled] .btn-facebook.focus,.btn-facebook.disabled:active,.btn-facebook[disabled]:active,fieldset[disabled] .btn-facebook:active,.btn-facebook.disabled.active,.btn-facebook[disabled].active,fieldset[disabled] .btn-facebook.active{background-color:#3b5998;border-color:rgba(0,0,0,0.2)}\n.btn-facebook .badge{color:#3b5998;background-color:#fff}\n.btn-flickr{color:#fff;background-color:#ff0084;border-color:rgba(0,0,0,0.2)}.btn-flickr:focus,.btn-flickr.focus{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}\n.btn-flickr:hover{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}\n.btn-flickr:active,.btn-flickr.active,.open>.dropdown-toggle.btn-flickr{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}.btn-flickr:active:hover,.btn-flickr.active:hover,.open>.dropdown-toggle.btn-flickr:hover,.btn-flickr:active:focus,.btn-flickr.active:focus,.open>.dropdown-toggle.btn-flickr:focus,.btn-flickr:active.focus,.btn-flickr.active.focus,.open>.dropdown-toggle.btn-flickr.focus{color:#fff;background-color:#a80057;border-color:rgba(0,0,0,0.2)}\n.btn-flickr:active,.btn-flickr.active,.open>.dropdown-toggle.btn-flickr{background-image:none}\n.btn-flickr.disabled,.btn-flickr[disabled],fieldset[disabled] .btn-flickr,.btn-flickr.disabled:hover,.btn-flickr[disabled]:hover,fieldset[disabled] .btn-flickr:hover,.btn-flickr.disabled:focus,.btn-flickr[disabled]:focus,fieldset[disabled] .btn-flickr:focus,.btn-flickr.disabled.focus,.btn-flickr[disabled].focus,fieldset[disabled] .btn-flickr.focus,.btn-flickr.disabled:active,.btn-flickr[disabled]:active,fieldset[disabled] .btn-flickr:active,.btn-flickr.disabled.active,.btn-flickr[disabled].active,fieldset[disabled] .btn-flickr.active{background-color:#ff0084;border-color:rgba(0,0,0,0.2)}\n.btn-flickr .badge{color:#ff0084;background-color:#fff}\n.btn-foursquare{color:#fff;background-color:#f94877;border-color:rgba(0,0,0,0.2)}.btn-foursquare:focus,.btn-foursquare.focus{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}\n.btn-foursquare:hover{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}\n.btn-foursquare:active,.btn-foursquare.active,.open>.dropdown-toggle.btn-foursquare{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}.btn-foursquare:active:hover,.btn-foursquare.active:hover,.open>.dropdown-toggle.btn-foursquare:hover,.btn-foursquare:active:focus,.btn-foursquare.active:focus,.open>.dropdown-toggle.btn-foursquare:focus,.btn-foursquare:active.focus,.btn-foursquare.active.focus,.open>.dropdown-toggle.btn-foursquare.focus{color:#fff;background-color:#e30742;border-color:rgba(0,0,0,0.2)}\n.btn-foursquare:active,.btn-foursquare.active,.open>.dropdown-toggle.btn-foursquare{background-image:none}\n.btn-foursquare.disabled,.btn-foursquare[disabled],fieldset[disabled] .btn-foursquare,.btn-foursquare.disabled:hover,.btn-foursquare[disabled]:hover,fieldset[disabled] .btn-foursquare:hover,.btn-foursquare.disabled:focus,.btn-foursquare[disabled]:focus,fieldset[disabled] .btn-foursquare:focus,.btn-foursquare.disabled.focus,.btn-foursquare[disabled].focus,fieldset[disabled] .btn-foursquare.focus,.btn-foursquare.disabled:active,.btn-foursquare[disabled]:active,fieldset[disabled] .btn-foursquare:active,.btn-foursquare.disabled.active,.btn-foursquare[disabled].active,fieldset[disabled] .btn-foursquare.active{background-color:#f94877;border-color:rgba(0,0,0,0.2)}\n.btn-foursquare .badge{color:#f94877;background-color:#fff}\n.btn-github{color:#fff;background-color:#444;border-color:rgba(0,0,0,0.2)}.btn-github:focus,.btn-github.focus{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}\n.btn-github:hover{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}\n.btn-github:active,.btn-github.active,.open>.dropdown-toggle.btn-github{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}.btn-github:active:hover,.btn-github.active:hover,.open>.dropdown-toggle.btn-github:hover,.btn-github:active:focus,.btn-github.active:focus,.open>.dropdown-toggle.btn-github:focus,.btn-github:active.focus,.btn-github.active.focus,.open>.dropdown-toggle.btn-github.focus{color:#fff;background-color:#191919;border-color:rgba(0,0,0,0.2)}\n.btn-github:active,.btn-github.active,.open>.dropdown-toggle.btn-github{background-image:none}\n.btn-github.disabled,.btn-github[disabled],fieldset[disabled] .btn-github,.btn-github.disabled:hover,.btn-github[disabled]:hover,fieldset[disabled] .btn-github:hover,.btn-github.disabled:focus,.btn-github[disabled]:focus,fieldset[disabled] .btn-github:focus,.btn-github.disabled.focus,.btn-github[disabled].focus,fieldset[disabled] .btn-github.focus,.btn-github.disabled:active,.btn-github[disabled]:active,fieldset[disabled] .btn-github:active,.btn-github.disabled.active,.btn-github[disabled].active,fieldset[disabled] .btn-github.active{background-color:#444;border-color:rgba(0,0,0,0.2)}\n.btn-github .badge{color:#444;background-color:#fff}\n.btn-google{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}.btn-google:focus,.btn-google.focus{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}\n.btn-google:hover{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}\n.btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}.btn-google:active:hover,.btn-google.active:hover,.open>.dropdown-toggle.btn-google:hover,.btn-google:active:focus,.btn-google.active:focus,.open>.dropdown-toggle.btn-google:focus,.btn-google:active.focus,.btn-google.active.focus,.open>.dropdown-toggle.btn-google.focus{color:#fff;background-color:#a32b1c;border-color:rgba(0,0,0,0.2)}\n.btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{background-image:none}\n.btn-google.disabled,.btn-google[disabled],fieldset[disabled] .btn-google,.btn-google.disabled:hover,.btn-google[disabled]:hover,fieldset[disabled] .btn-google:hover,.btn-google.disabled:focus,.btn-google[disabled]:focus,fieldset[disabled] .btn-google:focus,.btn-google.disabled.focus,.btn-google[disabled].focus,fieldset[disabled] .btn-google.focus,.btn-google.disabled:active,.btn-google[disabled]:active,fieldset[disabled] .btn-google:active,.btn-google.disabled.active,.btn-google[disabled].active,fieldset[disabled] .btn-google.active{background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}\n.btn-google .badge{color:#dd4b39;background-color:#fff}\n.btn-instagram{color:#fff;background-color:#3f729b;border-color:rgba(0,0,0,0.2)}.btn-instagram:focus,.btn-instagram.focus{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}\n.btn-instagram:hover{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}\n.btn-instagram:active,.btn-instagram.active,.open>.dropdown-toggle.btn-instagram{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}.btn-instagram:active:hover,.btn-instagram.active:hover,.open>.dropdown-toggle.btn-instagram:hover,.btn-instagram:active:focus,.btn-instagram.active:focus,.open>.dropdown-toggle.btn-instagram:focus,.btn-instagram:active.focus,.btn-instagram.active.focus,.open>.dropdown-toggle.btn-instagram.focus{color:#fff;background-color:#26455d;border-color:rgba(0,0,0,0.2)}\n.btn-instagram:active,.btn-instagram.active,.open>.dropdown-toggle.btn-instagram{background-image:none}\n.btn-instagram.disabled,.btn-instagram[disabled],fieldset[disabled] .btn-instagram,.btn-instagram.disabled:hover,.btn-instagram[disabled]:hover,fieldset[disabled] .btn-instagram:hover,.btn-instagram.disabled:focus,.btn-instagram[disabled]:focus,fieldset[disabled] .btn-instagram:focus,.btn-instagram.disabled.focus,.btn-instagram[disabled].focus,fieldset[disabled] .btn-instagram.focus,.btn-instagram.disabled:active,.btn-instagram[disabled]:active,fieldset[disabled] .btn-instagram:active,.btn-instagram.disabled.active,.btn-instagram[disabled].active,fieldset[disabled] .btn-instagram.active{background-color:#3f729b;border-color:rgba(0,0,0,0.2)}\n.btn-instagram .badge{color:#3f729b;background-color:#fff}\n.btn-linkedin{color:#fff;background-color:#007bb6;border-color:rgba(0,0,0,0.2)}.btn-linkedin:focus,.btn-linkedin.focus{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}\n.btn-linkedin:hover{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}\n.btn-linkedin:active,.btn-linkedin.active,.open>.dropdown-toggle.btn-linkedin{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}.btn-linkedin:active:hover,.btn-linkedin.active:hover,.open>.dropdown-toggle.btn-linkedin:hover,.btn-linkedin:active:focus,.btn-linkedin.active:focus,.open>.dropdown-toggle.btn-linkedin:focus,.btn-linkedin:active.focus,.btn-linkedin.active.focus,.open>.dropdown-toggle.btn-linkedin.focus{color:#fff;background-color:#00405f;border-color:rgba(0,0,0,0.2)}\n.btn-linkedin:active,.btn-linkedin.active,.open>.dropdown-toggle.btn-linkedin{background-image:none}\n.btn-linkedin.disabled,.btn-linkedin[disabled],fieldset[disabled] .btn-linkedin,.btn-linkedin.disabled:hover,.btn-linkedin[disabled]:hover,fieldset[disabled] .btn-linkedin:hover,.btn-linkedin.disabled:focus,.btn-linkedin[disabled]:focus,fieldset[disabled] .btn-linkedin:focus,.btn-linkedin.disabled.focus,.btn-linkedin[disabled].focus,fieldset[disabled] .btn-linkedin.focus,.btn-linkedin.disabled:active,.btn-linkedin[disabled]:active,fieldset[disabled] .btn-linkedin:active,.btn-linkedin.disabled.active,.btn-linkedin[disabled].active,fieldset[disabled] .btn-linkedin.active{background-color:#007bb6;border-color:rgba(0,0,0,0.2)}\n.btn-linkedin .badge{color:#007bb6;background-color:#fff}\n.btn-microsoft{color:#fff;background-color:#2672ec;border-color:rgba(0,0,0,0.2)}.btn-microsoft:focus,.btn-microsoft.focus{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}\n.btn-microsoft:hover{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}\n.btn-microsoft:active,.btn-microsoft.active,.open>.dropdown-toggle.btn-microsoft{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}.btn-microsoft:active:hover,.btn-microsoft.active:hover,.open>.dropdown-toggle.btn-microsoft:hover,.btn-microsoft:active:focus,.btn-microsoft.active:focus,.open>.dropdown-toggle.btn-microsoft:focus,.btn-microsoft:active.focus,.btn-microsoft.active.focus,.open>.dropdown-toggle.btn-microsoft.focus{color:#fff;background-color:#0f4bac;border-color:rgba(0,0,0,0.2)}\n.btn-microsoft:active,.btn-microsoft.active,.open>.dropdown-toggle.btn-microsoft{background-image:none}\n.btn-microsoft.disabled,.btn-microsoft[disabled],fieldset[disabled] .btn-microsoft,.btn-microsoft.disabled:hover,.btn-microsoft[disabled]:hover,fieldset[disabled] .btn-microsoft:hover,.btn-microsoft.disabled:focus,.btn-microsoft[disabled]:focus,fieldset[disabled] .btn-microsoft:focus,.btn-microsoft.disabled.focus,.btn-microsoft[disabled].focus,fieldset[disabled] .btn-microsoft.focus,.btn-microsoft.disabled:active,.btn-microsoft[disabled]:active,fieldset[disabled] .btn-microsoft:active,.btn-microsoft.disabled.active,.btn-microsoft[disabled].active,fieldset[disabled] .btn-microsoft.active{background-color:#2672ec;border-color:rgba(0,0,0,0.2)}\n.btn-microsoft .badge{color:#2672ec;background-color:#fff}\n.btn-odnoklassniki{color:#fff;background-color:#f4731c;border-color:rgba(0,0,0,0.2)}.btn-odnoklassniki:focus,.btn-odnoklassniki.focus{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}\n.btn-odnoklassniki:hover{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}\n.btn-odnoklassniki:active,.btn-odnoklassniki.active,.open>.dropdown-toggle.btn-odnoklassniki{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}.btn-odnoklassniki:active:hover,.btn-odnoklassniki.active:hover,.open>.dropdown-toggle.btn-odnoklassniki:hover,.btn-odnoklassniki:active:focus,.btn-odnoklassniki.active:focus,.open>.dropdown-toggle.btn-odnoklassniki:focus,.btn-odnoklassniki:active.focus,.btn-odnoklassniki.active.focus,.open>.dropdown-toggle.btn-odnoklassniki.focus{color:#fff;background-color:#b14c09;border-color:rgba(0,0,0,0.2)}\n.btn-odnoklassniki:active,.btn-odnoklassniki.active,.open>.dropdown-toggle.btn-odnoklassniki{background-image:none}\n.btn-odnoklassniki.disabled,.btn-odnoklassniki[disabled],fieldset[disabled] .btn-odnoklassniki,.btn-odnoklassniki.disabled:hover,.btn-odnoklassniki[disabled]:hover,fieldset[disabled] .btn-odnoklassniki:hover,.btn-odnoklassniki.disabled:focus,.btn-odnoklassniki[disabled]:focus,fieldset[disabled] .btn-odnoklassniki:focus,.btn-odnoklassniki.disabled.focus,.btn-odnoklassniki[disabled].focus,fieldset[disabled] .btn-odnoklassniki.focus,.btn-odnoklassniki.disabled:active,.btn-odnoklassniki[disabled]:active,fieldset[disabled] .btn-odnoklassniki:active,.btn-odnoklassniki.disabled.active,.btn-odnoklassniki[disabled].active,fieldset[disabled] .btn-odnoklassniki.active{background-color:#f4731c;border-color:rgba(0,0,0,0.2)}\n.btn-odnoklassniki .badge{color:#f4731c;background-color:#fff}\n.btn-openid{color:#fff;background-color:#f7931e;border-color:rgba(0,0,0,0.2)}.btn-openid:focus,.btn-openid.focus{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}\n.btn-openid:hover{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}\n.btn-openid:active,.btn-openid.active,.open>.dropdown-toggle.btn-openid{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}.btn-openid:active:hover,.btn-openid.active:hover,.open>.dropdown-toggle.btn-openid:hover,.btn-openid:active:focus,.btn-openid.active:focus,.open>.dropdown-toggle.btn-openid:focus,.btn-openid:active.focus,.btn-openid.active.focus,.open>.dropdown-toggle.btn-openid.focus{color:#fff;background-color:#b86607;border-color:rgba(0,0,0,0.2)}\n.btn-openid:active,.btn-openid.active,.open>.dropdown-toggle.btn-openid{background-image:none}\n.btn-openid.disabled,.btn-openid[disabled],fieldset[disabled] .btn-openid,.btn-openid.disabled:hover,.btn-openid[disabled]:hover,fieldset[disabled] .btn-openid:hover,.btn-openid.disabled:focus,.btn-openid[disabled]:focus,fieldset[disabled] .btn-openid:focus,.btn-openid.disabled.focus,.btn-openid[disabled].focus,fieldset[disabled] .btn-openid.focus,.btn-openid.disabled:active,.btn-openid[disabled]:active,fieldset[disabled] .btn-openid:active,.btn-openid.disabled.active,.btn-openid[disabled].active,fieldset[disabled] .btn-openid.active{background-color:#f7931e;border-color:rgba(0,0,0,0.2)}\n.btn-openid .badge{color:#f7931e;background-color:#fff}\n.btn-pinterest{color:#fff;background-color:#cb2027;border-color:rgba(0,0,0,0.2)}.btn-pinterest:focus,.btn-pinterest.focus{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}\n.btn-pinterest:hover{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}\n.btn-pinterest:active,.btn-pinterest.active,.open>.dropdown-toggle.btn-pinterest{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}.btn-pinterest:active:hover,.btn-pinterest.active:hover,.open>.dropdown-toggle.btn-pinterest:hover,.btn-pinterest:active:focus,.btn-pinterest.active:focus,.open>.dropdown-toggle.btn-pinterest:focus,.btn-pinterest:active.focus,.btn-pinterest.active.focus,.open>.dropdown-toggle.btn-pinterest.focus{color:#fff;background-color:#801419;border-color:rgba(0,0,0,0.2)}\n.btn-pinterest:active,.btn-pinterest.active,.open>.dropdown-toggle.btn-pinterest{background-image:none}\n.btn-pinterest.disabled,.btn-pinterest[disabled],fieldset[disabled] .btn-pinterest,.btn-pinterest.disabled:hover,.btn-pinterest[disabled]:hover,fieldset[disabled] .btn-pinterest:hover,.btn-pinterest.disabled:focus,.btn-pinterest[disabled]:focus,fieldset[disabled] .btn-pinterest:focus,.btn-pinterest.disabled.focus,.btn-pinterest[disabled].focus,fieldset[disabled] .btn-pinterest.focus,.btn-pinterest.disabled:active,.btn-pinterest[disabled]:active,fieldset[disabled] .btn-pinterest:active,.btn-pinterest.disabled.active,.btn-pinterest[disabled].active,fieldset[disabled] .btn-pinterest.active{background-color:#cb2027;border-color:rgba(0,0,0,0.2)}\n.btn-pinterest .badge{color:#cb2027;background-color:#fff}\n.btn-reddit{color:#000;background-color:#eff7ff;border-color:rgba(0,0,0,0.2)}.btn-reddit:focus,.btn-reddit.focus{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}\n.btn-reddit:hover{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}\n.btn-reddit:active,.btn-reddit.active,.open>.dropdown-toggle.btn-reddit{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}.btn-reddit:active:hover,.btn-reddit.active:hover,.open>.dropdown-toggle.btn-reddit:hover,.btn-reddit:active:focus,.btn-reddit.active:focus,.open>.dropdown-toggle.btn-reddit:focus,.btn-reddit:active.focus,.btn-reddit.active.focus,.open>.dropdown-toggle.btn-reddit.focus{color:#000;background-color:#98ccff;border-color:rgba(0,0,0,0.2)}\n.btn-reddit:active,.btn-reddit.active,.open>.dropdown-toggle.btn-reddit{background-image:none}\n.btn-reddit.disabled,.btn-reddit[disabled],fieldset[disabled] .btn-reddit,.btn-reddit.disabled:hover,.btn-reddit[disabled]:hover,fieldset[disabled] .btn-reddit:hover,.btn-reddit.disabled:focus,.btn-reddit[disabled]:focus,fieldset[disabled] .btn-reddit:focus,.btn-reddit.disabled.focus,.btn-reddit[disabled].focus,fieldset[disabled] .btn-reddit.focus,.btn-reddit.disabled:active,.btn-reddit[disabled]:active,fieldset[disabled] .btn-reddit:active,.btn-reddit.disabled.active,.btn-reddit[disabled].active,fieldset[disabled] .btn-reddit.active{background-color:#eff7ff;border-color:rgba(0,0,0,0.2)}\n.btn-reddit .badge{color:#eff7ff;background-color:#000}\n.btn-soundcloud{color:#fff;background-color:#f50;border-color:rgba(0,0,0,0.2)}.btn-soundcloud:focus,.btn-soundcloud.focus{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}\n.btn-soundcloud:hover{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}\n.btn-soundcloud:active,.btn-soundcloud.active,.open>.dropdown-toggle.btn-soundcloud{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}.btn-soundcloud:active:hover,.btn-soundcloud.active:hover,.open>.dropdown-toggle.btn-soundcloud:hover,.btn-soundcloud:active:focus,.btn-soundcloud.active:focus,.open>.dropdown-toggle.btn-soundcloud:focus,.btn-soundcloud:active.focus,.btn-soundcloud.active.focus,.open>.dropdown-toggle.btn-soundcloud.focus{color:#fff;background-color:#a83800;border-color:rgba(0,0,0,0.2)}\n.btn-soundcloud:active,.btn-soundcloud.active,.open>.dropdown-toggle.btn-soundcloud{background-image:none}\n.btn-soundcloud.disabled,.btn-soundcloud[disabled],fieldset[disabled] .btn-soundcloud,.btn-soundcloud.disabled:hover,.btn-soundcloud[disabled]:hover,fieldset[disabled] .btn-soundcloud:hover,.btn-soundcloud.disabled:focus,.btn-soundcloud[disabled]:focus,fieldset[disabled] .btn-soundcloud:focus,.btn-soundcloud.disabled.focus,.btn-soundcloud[disabled].focus,fieldset[disabled] .btn-soundcloud.focus,.btn-soundcloud.disabled:active,.btn-soundcloud[disabled]:active,fieldset[disabled] .btn-soundcloud:active,.btn-soundcloud.disabled.active,.btn-soundcloud[disabled].active,fieldset[disabled] .btn-soundcloud.active{background-color:#f50;border-color:rgba(0,0,0,0.2)}\n.btn-soundcloud .badge{color:#f50;background-color:#fff}\n.btn-tumblr{color:#fff;background-color:#2c4762;border-color:rgba(0,0,0,0.2)}.btn-tumblr:focus,.btn-tumblr.focus{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}\n.btn-tumblr:hover{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}\n.btn-tumblr:active,.btn-tumblr.active,.open>.dropdown-toggle.btn-tumblr{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}.btn-tumblr:active:hover,.btn-tumblr.active:hover,.open>.dropdown-toggle.btn-tumblr:hover,.btn-tumblr:active:focus,.btn-tumblr.active:focus,.open>.dropdown-toggle.btn-tumblr:focus,.btn-tumblr:active.focus,.btn-tumblr.active.focus,.open>.dropdown-toggle.btn-tumblr.focus{color:#fff;background-color:#111c26;border-color:rgba(0,0,0,0.2)}\n.btn-tumblr:active,.btn-tumblr.active,.open>.dropdown-toggle.btn-tumblr{background-image:none}\n.btn-tumblr.disabled,.btn-tumblr[disabled],fieldset[disabled] .btn-tumblr,.btn-tumblr.disabled:hover,.btn-tumblr[disabled]:hover,fieldset[disabled] .btn-tumblr:hover,.btn-tumblr.disabled:focus,.btn-tumblr[disabled]:focus,fieldset[disabled] .btn-tumblr:focus,.btn-tumblr.disabled.focus,.btn-tumblr[disabled].focus,fieldset[disabled] .btn-tumblr.focus,.btn-tumblr.disabled:active,.btn-tumblr[disabled]:active,fieldset[disabled] .btn-tumblr:active,.btn-tumblr.disabled.active,.btn-tumblr[disabled].active,fieldset[disabled] .btn-tumblr.active{background-color:#2c4762;border-color:rgba(0,0,0,0.2)}\n.btn-tumblr .badge{color:#2c4762;background-color:#fff}\n.btn-twitter{color:#fff;background-color:#55acee;border-color:rgba(0,0,0,0.2)}.btn-twitter:focus,.btn-twitter.focus{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}\n.btn-twitter:hover{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}\n.btn-twitter:active,.btn-twitter.active,.open>.dropdown-toggle.btn-twitter{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}.btn-twitter:active:hover,.btn-twitter.active:hover,.open>.dropdown-toggle.btn-twitter:hover,.btn-twitter:active:focus,.btn-twitter.active:focus,.open>.dropdown-toggle.btn-twitter:focus,.btn-twitter:active.focus,.btn-twitter.active.focus,.open>.dropdown-toggle.btn-twitter.focus{color:#fff;background-color:#1583d7;border-color:rgba(0,0,0,0.2)}\n.btn-twitter:active,.btn-twitter.active,.open>.dropdown-toggle.btn-twitter{background-image:none}\n.btn-twitter.disabled,.btn-twitter[disabled],fieldset[disabled] .btn-twitter,.btn-twitter.disabled:hover,.btn-twitter[disabled]:hover,fieldset[disabled] .btn-twitter:hover,.btn-twitter.disabled:focus,.btn-twitter[disabled]:focus,fieldset[disabled] .btn-twitter:focus,.btn-twitter.disabled.focus,.btn-twitter[disabled].focus,fieldset[disabled] .btn-twitter.focus,.btn-twitter.disabled:active,.btn-twitter[disabled]:active,fieldset[disabled] .btn-twitter:active,.btn-twitter.disabled.active,.btn-twitter[disabled].active,fieldset[disabled] .btn-twitter.active{background-color:#55acee;border-color:rgba(0,0,0,0.2)}\n.btn-twitter .badge{color:#55acee;background-color:#fff}\n.btn-vimeo{color:#fff;background-color:#1ab7ea;border-color:rgba(0,0,0,0.2)}.btn-vimeo:focus,.btn-vimeo.focus{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}\n.btn-vimeo:hover{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}\n.btn-vimeo:active,.btn-vimeo.active,.open>.dropdown-toggle.btn-vimeo{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}.btn-vimeo:active:hover,.btn-vimeo.active:hover,.open>.dropdown-toggle.btn-vimeo:hover,.btn-vimeo:active:focus,.btn-vimeo.active:focus,.open>.dropdown-toggle.btn-vimeo:focus,.btn-vimeo:active.focus,.btn-vimeo.active.focus,.open>.dropdown-toggle.btn-vimeo.focus{color:#fff;background-color:#0f7b9f;border-color:rgba(0,0,0,0.2)}\n.btn-vimeo:active,.btn-vimeo.active,.open>.dropdown-toggle.btn-vimeo{background-image:none}\n.btn-vimeo.disabled,.btn-vimeo[disabled],fieldset[disabled] .btn-vimeo,.btn-vimeo.disabled:hover,.btn-vimeo[disabled]:hover,fieldset[disabled] .btn-vimeo:hover,.btn-vimeo.disabled:focus,.btn-vimeo[disabled]:focus,fieldset[disabled] .btn-vimeo:focus,.btn-vimeo.disabled.focus,.btn-vimeo[disabled].focus,fieldset[disabled] .btn-vimeo.focus,.btn-vimeo.disabled:active,.btn-vimeo[disabled]:active,fieldset[disabled] .btn-vimeo:active,.btn-vimeo.disabled.active,.btn-vimeo[disabled].active,fieldset[disabled] .btn-vimeo.active{background-color:#1ab7ea;border-color:rgba(0,0,0,0.2)}\n.btn-vimeo .badge{color:#1ab7ea;background-color:#fff}\n.btn-vk{color:#fff;background-color:#587ea3;border-color:rgba(0,0,0,0.2)}.btn-vk:focus,.btn-vk.focus{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}\n.btn-vk:hover{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}\n.btn-vk:active,.btn-vk.active,.open>.dropdown-toggle.btn-vk{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}.btn-vk:active:hover,.btn-vk.active:hover,.open>.dropdown-toggle.btn-vk:hover,.btn-vk:active:focus,.btn-vk.active:focus,.open>.dropdown-toggle.btn-vk:focus,.btn-vk:active.focus,.btn-vk.active.focus,.open>.dropdown-toggle.btn-vk.focus{color:#fff;background-color:#3a526b;border-color:rgba(0,0,0,0.2)}\n.btn-vk:active,.btn-vk.active,.open>.dropdown-toggle.btn-vk{background-image:none}\n.btn-vk.disabled,.btn-vk[disabled],fieldset[disabled] .btn-vk,.btn-vk.disabled:hover,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk:hover,.btn-vk.disabled:focus,.btn-vk[disabled]:focus,fieldset[disabled] .btn-vk:focus,.btn-vk.disabled.focus,.btn-vk[disabled].focus,fieldset[disabled] .btn-vk.focus,.btn-vk.disabled:active,.btn-vk[disabled]:active,fieldset[disabled] .btn-vk:active,.btn-vk.disabled.active,.btn-vk[disabled].active,fieldset[disabled] .btn-vk.active{background-color:#587ea3;border-color:rgba(0,0,0,0.2)}\n.btn-vk .badge{color:#587ea3;background-color:#fff}\n.btn-yahoo{color:#fff;background-color:#720e9e;border-color:rgba(0,0,0,0.2)}.btn-yahoo:focus,.btn-yahoo.focus{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}\n.btn-yahoo:hover{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}\n.btn-yahoo:active,.btn-yahoo.active,.open>.dropdown-toggle.btn-yahoo{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}.btn-yahoo:active:hover,.btn-yahoo.active:hover,.open>.dropdown-toggle.btn-yahoo:hover,.btn-yahoo:active:focus,.btn-yahoo.active:focus,.open>.dropdown-toggle.btn-yahoo:focus,.btn-yahoo:active.focus,.btn-yahoo.active.focus,.open>.dropdown-toggle.btn-yahoo.focus{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,0.2)}\n.btn-yahoo:active,.btn-yahoo.active,.open>.dropdown-toggle.btn-yahoo{background-image:none}\n.btn-yahoo.disabled,.btn-yahoo[disabled],fieldset[disabled] .btn-yahoo,.btn-yahoo.disabled:hover,.btn-yahoo[disabled]:hover,fieldset[disabled] .btn-yahoo:hover,.btn-yahoo.disabled:focus,.btn-yahoo[disabled]:focus,fieldset[disabled] .btn-yahoo:focus,.btn-yahoo.disabled.focus,.btn-yahoo[disabled].focus,fieldset[disabled] .btn-yahoo.focus,.btn-yahoo.disabled:active,.btn-yahoo[disabled]:active,fieldset[disabled] .btn-yahoo:active,.btn-yahoo.disabled.active,.btn-yahoo[disabled].active,fieldset[disabled] .btn-yahoo.active{background-color:#720e9e;border-color:rgba(0,0,0,0.2)}\n.btn-yahoo .badge{color:#720e9e;background-color:#fff}\n\n.btn-android{color:#fff;background-color:#558700;border-color:rgba(0,0,0,0.2)}.btn-android:focus,.btn-android.focus{color:#fff;background-color:#345300;border-color:rgba(0,0,0,0.2)}\n.btn-android:hover{color:#fff;background-color:#345300;border-color:rgba(0,0,0,0.2)}\n.btn-android:active,.btn-android.active,.open>.dropdown-toggle.btn-android{color:#fff;background-color:#345300;border-color:rgba(0,0,0,0.2)}.btn-android:active:hover,.btn-android.active:hover,.open>.dropdown-toggle.btn-android:hover,.btn-android:active:focus,.btn-android.active:focus,.open>.dropdown-toggle.btn-android:focus,.btn-android:active.focus,.btn-android.active.focus,.open>.dropdown-toggle.btn-android.focus{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,0.2)}\n.btn-android:active,.btn-android.active,.open>.dropdown-toggle.btn-android{background-image:none}\n.btn-android.disabled,.btn-android[disabled],fieldset[disabled] .btn-android,.btn-android.disabled:hover,.btn-android[disabled]:hover,fieldset[disabled] .btn-android:hover,.btn-android.disabled:focus,.btn-android[disabled]:focus,fieldset[disabled] .btn-android:focus,.btn-android.disabled.focus,.btn-android[disabled].focus,fieldset[disabled] .btn-android.focus,.btn-android.disabled:active,.btn-android[disabled]:active,fieldset[disabled] .btn-android:active,.btn-android.disabled.active,.btn-android[disabled].active,fieldset[disabled] .btn-android.active{background-color:#558700;border-color:rgba(0,0,0,0.2)}\n.btn-android .badge{color:#558700;background-color:#fff}\n\n.entry-content .btn:not(.btn-primary) {\n  background-image: none;\n}\n.entry-content a.btn.btn-social {\n  color:white;\n  text-shadow: none;\n  padding-top:0;\n  padding-bottom: 0;\n}\n\n.entry-content a.btn.btn-social.btn-reddit {\n  color: black;\n}\n\n.entry-content a.btn.btn-social:focus {\n  padding-left: 44px;\n}\n\n.entry-content a.btn.btn-lg.btn-social {\n  font-size: 18px;\n  line-height: 45px;\n}\n\n.entry-content a.btn.btn-lg.btn-social:focus {\n  padding-left: 61px;\n}\n\n.entry-content a.btn {\n  text-decoration: none;\n}\n\n/**********************************************/\n/* 20160527 調整側欄，加上RSS連結 */\n\n#sidebar .widget a.icon {\n  float: right;\n  line-height: 40px;\n  background: #FFFFFF;\n  font-size: 20px;\n  font-weight: normal;\n  padding: 10px 15px 0;\n  color: #292929;\n}\n\n\n.entry-content p, \n.entry-content li {\n  color: black;\n}\n\n/******************************/\n/* 20170912 navbar */\n@media (max-width: 979px) {\n  #header-inner {\n    min-height: 40px;\n  }\n}\n\niframe#comment-editor {\n  width: 100% !important;\n  height: 250px;\n}\n\n.post-avatar {\n  background:url(//lh3.googleusercontent.com/-6qwdHih3tFk/Vv6N0dTaICI/AAAAAAACuRA/AsKTNm9c_Bg/s0/post-avatar.png)\n}\n\n\n\n.firstload-background {\n  background: url(//2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.author-box{\n  float: left;\n  width: 100%;\n  padding: 0;\n}\n\n@media (max-width: 480px) {\n  body {\n    font-size: 1rem;\n  }\n}\n",".entry-content {\n  line-height: 200%;\n}\n.entry-content > article > p {\n  text-indent: 2em;\n  text-align: justify;\n}\n.entry-content h4 {\n  font-size: 24pt;\n  color: #BD8242;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content h5 {\n  font-size: 20pt;\n  color: #713E06;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #634121;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n.entry-content hr {\n  border-top: 3px solid #CE8A42;\n  border-bottom: 0px solid #BD8A39;\n}\n.entry-content ul {\n  margin-left: 0em !important;\n}\n.entry-content li {\n  margin-left: 2em !important;\n}\n@media (max-width: 480px) {\n  .entry-content li {\n    margin-left: 1em !important;\n  }\n}\n.entry-content ul,\n.entry-content li {\n  /*margin-left: 2em !important;*/\n  margin-top: 0.5em !important;\n  margin-bottom: 0.5em !important;\n}\n.entry-content li {\n  list-style: square !important;\n  line-height: 200%;\n}\n.entry-content ol > li {\n  list-style: decimal !important;\n}\n.entry-content .post ol > li {\n  list-style: decimal !important;\n}\n.entry-content blockquote {\n  border-left-color: #F7EBDE;\n}\n.entry-content a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n.entry-content h1 a {\n  text-decoration: none;\n  color: #333;\n}\n.entry-content table,\n.entry-content table th,\n.entry-content table td {\n  /*border: 1px solid #BD8242;*/\n}\n.entry-content > article > table > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.entry-content > article > table > tbody > tr > td,\n.entry-content > article > table > tbody > tr > th,\n.entry-content > article > table > tfoot > tr > td,\n.entry-content > article > table > tfoot > tr > th,\n.entry-content > article > table > thead > tr > td,\n.entry-content > article > table > thead > tr > th {\n  padding: 8px;\n  /*line-height: 1.42857143;*/\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.entry-content > article > table > tbody > tr:first-of-type > td {\n  border-top-width: 0;\n}\n.entry-content > article > table > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n#main .post > h3 {\n  display: none;\n}\n/* ************************ */\n#Blog1_backlinks-container .comment-footer {\n  margin-top: 10px;\n}\n#footer_bar_body {\n  background: transparent;\n}\n/* *************************** */\n.about-me .description {\n  line-height: 1.5em;\n}\n.about-me .about-link {\n  /*float: right;*/\n  padding-bottom: 1.5em;\n}\n/* 20160601 加大About Me的高度 */\n#sidebar .about-me h3 {\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n#sidebar .about-me .description {\n  margin-bottom: 2em;\n}\n#sidebar .about-link .read-more {\n  float: right;\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-left: 5px;\n  margin-top: 0;\n}\n#sidebar .about-link .social-button-wrapper {\n  margin-top: 4px;\n  display: inline-block;\n}\n.about-me .social-media {\n  margin-top: 0.5em;\n  text-align: center;\n  clear: both;\n}\n.about-me .email-subscribe {\n  text-align: center;\n  /*margin: 1em;*/\n}\n.about-me .widget-content {\n  margin: 0 1em;\n}\n.fb-fan-page .widget-content {\n  text-align: center;\n}\n.about-me .email-subscribe td:first-of-type {\n  text-align: left;\n  padding-top: 0.7em;\n}\n.about-me .email-subscribe .follow-by-email-address {\n  width: 95%;\n}\n.donation input[type=\"image\"] {\n  margin-top: 10px;\n  margin-right: 10px;\n}\n#footerbar-popular-post .popular-posts > ul > dd {\n  display: none;\n}\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display: block;\n}\n.popular-posts {\n  padding-bottom: 0.5em;\n}\n@media (max-width: 979px) {\n  #footer_bar {\n    display: none;\n  }\n}\n.widget-content.popular-posts dd {\n  margin-bottom: 0.5em;\n  clear: both;\n}\n.widget-content.popular-posts img {\n  float: left;\n}\nh1.title {\n  font-size: 30px;\n}\n#header-inner .descriptionwrapper {\n  font-size: 14px;\n}\ndiv.post-avatar {\n  display: none;\n}\n.meta {\n  margin-left: 0px !important;\n}\n/************************/\n#content #archivespage ul {\n  margin-left: 0 !important;\n}\n#content #archivespage li.archivedate {\n  list-style: none !important;\n}\n.container1 {\n  width: 100% !important;\n}\n#footer .management {\n  clear: both;\n  /*margin-bottom: 70px;*/\n}\n@media (max-width: 979px) {\n  /*\n  .search-bar {\n      margin-top: 4px;\n      padding-left: 0;\n      padding-right: 0;\n  }\n  */\n  .navbar-inverse .navbar-inner {\n    background: #2d2d2d;\n  }\n  #header {\n    margin-right: 0;\n  }\n}\n/**********************************/\n/*\nbody .addthis-smartlayers {\n    display: none !important;\n}\n*/\n@media (min-width: 480px) and (max-width: 767px) {\n  .entry-container .entry-content {\n    padding: 2rem;\n  }\n}\n.entry-container .entry-content > p {\n  text-indent: 2em;\n}\n.entry-container .entry-content a.more {\n  font-weight: bold;\n  text-decoration: none;\n}\n/**********************************/\n/* 底部區域 */\n.site-footer .cloud-label-widget-content .label-size-2,\n.site-footer .cloud-label-widget-content .label-size-1 {\n  display: none;\n}\n.site-footer .cloud-label-widget-content .btn {\n  float: right;\n  color: black;\n  margin-top: 1em;\n}\n/* 20160527網頁寬度低於460時，Buy Me A Coffee跟Hit Count應該分開為左右2欄 */\n@media (max-width: 979px) {\n  div.donation {\n    width: 49.5%;\n    float: left;\n    margin-right: 1%;\n  }\n  .site-footer .cloud-label-widget-content .label-size-3 {\n    display: none;\n  }\n}\n/*\n@media (max-width: 480px) {\n    .site-footer .cloud-label-widget-content .label-size-4 {\n        display:none;\n    }\n}\n*/\n/**********************************/\n.social-button {\n  background-color: #D6D7D6;\n  display: inline-block;\n  width: 33px;\n  height: 32px;\n  line-height: 33px;\n  border-radius: 16px;\n  -o-transition: all 0.2s linear;\n  -webkit-transition: all 0.2s linear;\n  -moz-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n}\n.social-button.facebook:hover {\n  color: white;\n  background-color: #3165A5;\n}\n.social-button.twitter:hover {\n  color: white;\n  background-color: #42AAE7;\n}\n.social-button.linkedin:hover {\n  color: white;\n  background-color: #0075B5;\n}\n.social-button.plurk:hover {\n  color: white;\n  background-color: #EF4539;\n}\n.social-button.line:hover {\n  color: white;\n  background-color: #4ACF00;\n}\n.social-button.google-plus:hover {\n  color: white;\n  background-color: #DE4939;\n}\n.social-button.chrome:hover {\n  color: white;\n  background-color: #42556B;\n}\n.social-button.github:hover {\n  color: white;\n  background-color: black;\n}\n.social-button.android:hover {\n  color: white;\n  background-color: #a4c639;\n}\n.social-button.chrome:hover {\n  color: white;\n  background-color: #4286F7;\n}\n.social-button.rss:hover {\n  color: white;\n  background-color: #F78631;\n}\n.social-button.addthis:hover {\n  color: white;\n  background-color: #FF5D39;\n}\n/* 20161118 */\n@media (min-width: 979px) {\n  .social-button.line,\n  .share-story-container li.line {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  div.share-story-container ul {\n    margin: 0;\n  }\n}\n.entry-meta.clearfix .share-story-container .about {\n  display: none;\n}\n.share-story-container ul {\n  text-align: right;\n}\n/***********************/\n.pager .previous.hidden {\n  visibility: hidden;\n}\n.pager li.link > span {\n  width: 6em;\n}\n.navbar .nav {\n  margin-right: 0;\n}\n/*******************************************/\n/* 20160530 文中自訂搜尋 */\n.entry-content .gsib_a {\n  /*padding-left:0;*/\n  padding-top: 0;\n}\n.entry-content .gsc-input-box {\n  height: auto;\n}\n.entry-content .gsc-search-button {\n  display: block !important;\n}\n.entry-content input.gsc-search-button {\n  height: 13px;\n  width: 13px;\n  padding: 0;\n  min-width: 0;\n  border-radius: 0.5em;\n  padding: 13px;\n  margin: 0;\n}\n/**********************************/\n/* 來處理SumoMe的問題 */\n/*\nbody > a[title=\"SumoMe\"] {\n  visibility: hidden;\n}\n\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] > img {\n  display: none;\n}\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] {\n  background-image: url(//lh3.googleusercontent.com/-qWpis5y0_fQ/Vwp4Y1ies0I/AAAAAAACuvg/9VCLXE9q7Wk/s0/share-alt.png) !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\nbody > div.sumome-share-client-wrapper.sumome-share-client-wrapper-left-page {\n  top: 111px !important;\n}\n\nbody > div.sumome-share-client-counts div.sumome-share-client-animated {\n  border: 1px solid rgb(15, 82, 186);\n}\n\n@media (max-height: 320px) {\n  body > div.sumome-share-client-wrapper {\n    display: none;\n  }\n}\n*/\n/**************************/\na[name][id]:target,\na[name=\"more\"]:target {\n  margin-top: -60px;\n  position: absolute;\n}\na#comment-form-anchor:target {\n  margin-top: -300px;\n}\n/*********************************************/\n/* 20160522 accesskey */\n#masthead a[accesskey],\n.site-footer a[accesskey] {\n  color: white;\n}\n#masthead a[accesskey].accesskey-menu {\n  /*line-height: 70px;*/\n  float: left;\n  /*padding-left:5px;*/\n}\n#masthead.fixed-nav a[accesskey].accesskey-menu {\n  /*line-height: 35px;*/\n}\n.site-footer .container {\n  padding-top: 0 !important;\n}\n@media (max-width: 979px) {\n  #masthead a[accesskey].accesskey-menu {\n    /*line-height: 80px;*/\n  }\n  #masthead.fixed-nav a[accesskey].accesskey-menu {\n    /*line-height: 55px;*/\n  }\n}\n#masthead.fixed-nav li > a.accesskey-menu,\n.navbar .nav > li > a.accesskey-menu {\n  padding-left: 0;\n  padding-right: 0;\n}\n/****************************************/\n/* 20160523 常用按鈕 */\n.entry-content .post-btn {\n  text-decoration: none !important;\n  font-size: 1em;\n  padding: 0.5em;\n}\n.entry-content .post-btn.btn-primary {\n  color: white;\n}\n/********************************************************/\n/*\n * Social Buttons for Bootstrap\n *\n * Copyright 2013-2015 Panayiotis Lipiridis\n * Licensed under the MIT License\n *\n * https://github.com/lipis/bootstrap-social\n\n * 展示: https://lipis.github.io/bootstrap-social/\n */\n.btn-social {\n  position: relative;\n  padding-left: 44px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-social > :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n  line-height: 34px;\n  font-size: 1.6em;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social.btn-lg {\n  padding-left: 61px;\n}\n.btn-social.btn-lg > :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social.btn-sm {\n  padding-left: 38px;\n}\n.btn-social.btn-sm > :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social.btn-xs {\n  padding-left: 30px;\n}\n.btn-social.btn-xs > :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon {\n  position: relative;\n  padding-left: 44px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 34px;\n  width: 34px;\n  padding: 0;\n}\n.btn-social-icon > :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n  line-height: 34px;\n  font-size: 1.6em;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social-icon.btn-lg {\n  padding-left: 61px;\n}\n.btn-social-icon.btn-lg > :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social-icon.btn-sm {\n  padding-left: 38px;\n}\n.btn-social-icon.btn-sm > :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social-icon.btn-xs {\n  padding-left: 30px;\n}\n.btn-social-icon.btn-xs > :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon > :first-child {\n  border: none;\n  text-align: center;\n  width: 100% !important;\n}\n.btn-social-icon.btn-lg {\n  height: 45px;\n  width: 45px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-sm {\n  height: 30px;\n  width: 30px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-xs {\n  height: 22px;\n  width: 22px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-adn {\n  color: #fff;\n  background-color: #d87a68;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:focus,\n.btn-adn.focus {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:hover {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active:hover,\n.btn-adn.active:hover,\n.open > .dropdown-toggle.btn-adn:hover,\n.btn-adn:active:focus,\n.btn-adn.active:focus,\n.open > .dropdown-toggle.btn-adn:focus,\n.btn-adn:active.focus,\n.btn-adn.active.focus,\n.open > .dropdown-toggle.btn-adn.focus {\n  color: #fff;\n  background-color: #b94630;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n  background-image: none;\n}\n.btn-adn.disabled,\n.btn-adn[disabled],\nfieldset[disabled] .btn-adn,\n.btn-adn.disabled:hover,\n.btn-adn[disabled]:hover,\nfieldset[disabled] .btn-adn:hover,\n.btn-adn.disabled:focus,\n.btn-adn[disabled]:focus,\nfieldset[disabled] .btn-adn:focus,\n.btn-adn.disabled.focus,\n.btn-adn[disabled].focus,\nfieldset[disabled] .btn-adn.focus,\n.btn-adn.disabled:active,\n.btn-adn[disabled]:active,\nfieldset[disabled] .btn-adn:active,\n.btn-adn.disabled.active,\n.btn-adn[disabled].active,\nfieldset[disabled] .btn-adn.active {\n  background-color: #d87a68;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn .badge {\n  color: #d87a68;\n  background-color: #fff;\n}\n.btn-bitbucket {\n  color: #fff;\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:focus,\n.btn-bitbucket.focus {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:hover {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active:hover,\n.btn-bitbucket.active:hover,\n.open > .dropdown-toggle.btn-bitbucket:hover,\n.btn-bitbucket:active:focus,\n.btn-bitbucket.active:focus,\n.open > .dropdown-toggle.btn-bitbucket:focus,\n.btn-bitbucket:active.focus,\n.btn-bitbucket.active.focus,\n.open > .dropdown-toggle.btn-bitbucket.focus {\n  color: #fff;\n  background-color: #0f253c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  background-image: none;\n}\n.btn-bitbucket.disabled,\n.btn-bitbucket[disabled],\nfieldset[disabled] .btn-bitbucket,\n.btn-bitbucket.disabled:hover,\n.btn-bitbucket[disabled]:hover,\nfieldset[disabled] .btn-bitbucket:hover,\n.btn-bitbucket.disabled:focus,\n.btn-bitbucket[disabled]:focus,\nfieldset[disabled] .btn-bitbucket:focus,\n.btn-bitbucket.disabled.focus,\n.btn-bitbucket[disabled].focus,\nfieldset[disabled] .btn-bitbucket.focus,\n.btn-bitbucket.disabled:active,\n.btn-bitbucket[disabled]:active,\nfieldset[disabled] .btn-bitbucket:active,\n.btn-bitbucket.disabled.active,\n.btn-bitbucket[disabled].active,\nfieldset[disabled] .btn-bitbucket.active {\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket .badge {\n  color: #205081;\n  background-color: #fff;\n}\n.btn-dropbox {\n  color: #fff;\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:focus,\n.btn-dropbox.focus {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:hover {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active:hover,\n.btn-dropbox.active:hover,\n.open > .dropdown-toggle.btn-dropbox:hover,\n.btn-dropbox:active:focus,\n.btn-dropbox.active:focus,\n.open > .dropdown-toggle.btn-dropbox:focus,\n.btn-dropbox:active.focus,\n.btn-dropbox.active.focus,\n.open > .dropdown-toggle.btn-dropbox.focus {\n  color: #fff;\n  background-color: #0a568c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  background-image: none;\n}\n.btn-dropbox.disabled,\n.btn-dropbox[disabled],\nfieldset[disabled] .btn-dropbox,\n.btn-dropbox.disabled:hover,\n.btn-dropbox[disabled]:hover,\nfieldset[disabled] .btn-dropbox:hover,\n.btn-dropbox.disabled:focus,\n.btn-dropbox[disabled]:focus,\nfieldset[disabled] .btn-dropbox:focus,\n.btn-dropbox.disabled.focus,\n.btn-dropbox[disabled].focus,\nfieldset[disabled] .btn-dropbox.focus,\n.btn-dropbox.disabled:active,\n.btn-dropbox[disabled]:active,\nfieldset[disabled] .btn-dropbox:active,\n.btn-dropbox.disabled.active,\n.btn-dropbox[disabled].active,\nfieldset[disabled] .btn-dropbox.active {\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox .badge {\n  color: #1087dd;\n  background-color: #fff;\n}\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:focus,\n.btn-facebook.focus {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:hover {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active:hover,\n.btn-facebook.active:hover,\n.open > .dropdown-toggle.btn-facebook:hover,\n.btn-facebook:active:focus,\n.btn-facebook.active:focus,\n.open > .dropdown-toggle.btn-facebook:focus,\n.btn-facebook:active.focus,\n.btn-facebook.active.focus,\n.open > .dropdown-toggle.btn-facebook.focus {\n  color: #fff;\n  background-color: #23345a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  background-image: none;\n}\n.btn-facebook.disabled,\n.btn-facebook[disabled],\nfieldset[disabled] .btn-facebook,\n.btn-facebook.disabled:hover,\n.btn-facebook[disabled]:hover,\nfieldset[disabled] .btn-facebook:hover,\n.btn-facebook.disabled:focus,\n.btn-facebook[disabled]:focus,\nfieldset[disabled] .btn-facebook:focus,\n.btn-facebook.disabled.focus,\n.btn-facebook[disabled].focus,\nfieldset[disabled] .btn-facebook.focus,\n.btn-facebook.disabled:active,\n.btn-facebook[disabled]:active,\nfieldset[disabled] .btn-facebook:active,\n.btn-facebook.disabled.active,\n.btn-facebook[disabled].active,\nfieldset[disabled] .btn-facebook.active {\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook .badge {\n  color: #3b5998;\n  background-color: #fff;\n}\n.btn-flickr {\n  color: #fff;\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:focus,\n.btn-flickr.focus {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:hover {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active:hover,\n.btn-flickr.active:hover,\n.open > .dropdown-toggle.btn-flickr:hover,\n.btn-flickr:active:focus,\n.btn-flickr.active:focus,\n.open > .dropdown-toggle.btn-flickr:focus,\n.btn-flickr:active.focus,\n.btn-flickr.active.focus,\n.open > .dropdown-toggle.btn-flickr.focus {\n  color: #fff;\n  background-color: #a80057;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  background-image: none;\n}\n.btn-flickr.disabled,\n.btn-flickr[disabled],\nfieldset[disabled] .btn-flickr,\n.btn-flickr.disabled:hover,\n.btn-flickr[disabled]:hover,\nfieldset[disabled] .btn-flickr:hover,\n.btn-flickr.disabled:focus,\n.btn-flickr[disabled]:focus,\nfieldset[disabled] .btn-flickr:focus,\n.btn-flickr.disabled.focus,\n.btn-flickr[disabled].focus,\nfieldset[disabled] .btn-flickr.focus,\n.btn-flickr.disabled:active,\n.btn-flickr[disabled]:active,\nfieldset[disabled] .btn-flickr:active,\n.btn-flickr.disabled.active,\n.btn-flickr[disabled].active,\nfieldset[disabled] .btn-flickr.active {\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr .badge {\n  color: #ff0084;\n  background-color: #fff;\n}\n.btn-foursquare {\n  color: #fff;\n  background-color: #f94877;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:focus,\n.btn-foursquare.focus {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:hover {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active:hover,\n.btn-foursquare.active:hover,\n.open > .dropdown-toggle.btn-foursquare:hover,\n.btn-foursquare:active:focus,\n.btn-foursquare.active:focus,\n.open > .dropdown-toggle.btn-foursquare:focus,\n.btn-foursquare:active.focus,\n.btn-foursquare.active.focus,\n.open > .dropdown-toggle.btn-foursquare.focus {\n  color: #fff;\n  background-color: #e30742;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  background-image: none;\n}\n.btn-foursquare.disabled,\n.btn-foursquare[disabled],\nfieldset[disabled] .btn-foursquare,\n.btn-foursquare.disabled:hover,\n.btn-foursquare[disabled]:hover,\nfieldset[disabled] .btn-foursquare:hover,\n.btn-foursquare.disabled:focus,\n.btn-foursquare[disabled]:focus,\nfieldset[disabled] .btn-foursquare:focus,\n.btn-foursquare.disabled.focus,\n.btn-foursquare[disabled].focus,\nfieldset[disabled] .btn-foursquare.focus,\n.btn-foursquare.disabled:active,\n.btn-foursquare[disabled]:active,\nfieldset[disabled] .btn-foursquare:active,\n.btn-foursquare.disabled.active,\n.btn-foursquare[disabled].active,\nfieldset[disabled] .btn-foursquare.active {\n  background-color: #f94877;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare .badge {\n  color: #f94877;\n  background-color: #fff;\n}\n.btn-github {\n  color: #fff;\n  background-color: #444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:focus,\n.btn-github.focus {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:hover {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active:hover,\n.btn-github.active:hover,\n.open > .dropdown-toggle.btn-github:hover,\n.btn-github:active:focus,\n.btn-github.active:focus,\n.open > .dropdown-toggle.btn-github:focus,\n.btn-github:active.focus,\n.btn-github.active.focus,\n.open > .dropdown-toggle.btn-github.focus {\n  color: #fff;\n  background-color: #191919;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  background-image: none;\n}\n.btn-github.disabled,\n.btn-github[disabled],\nfieldset[disabled] .btn-github,\n.btn-github.disabled:hover,\n.btn-github[disabled]:hover,\nfieldset[disabled] .btn-github:hover,\n.btn-github.disabled:focus,\n.btn-github[disabled]:focus,\nfieldset[disabled] .btn-github:focus,\n.btn-github.disabled.focus,\n.btn-github[disabled].focus,\nfieldset[disabled] .btn-github.focus,\n.btn-github.disabled:active,\n.btn-github[disabled]:active,\nfieldset[disabled] .btn-github:active,\n.btn-github.disabled.active,\n.btn-github[disabled].active,\nfieldset[disabled] .btn-github.active {\n  background-color: #444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github .badge {\n  color: #444;\n  background-color: #fff;\n}\n.btn-google {\n  color: #fff;\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:focus,\n.btn-google.focus {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:hover {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active:hover,\n.btn-google.active:hover,\n.open > .dropdown-toggle.btn-google:hover,\n.btn-google:active:focus,\n.btn-google.active:focus,\n.open > .dropdown-toggle.btn-google:focus,\n.btn-google:active.focus,\n.btn-google.active.focus,\n.open > .dropdown-toggle.btn-google.focus {\n  color: #fff;\n  background-color: #a32b1c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n  background-image: none;\n}\n.btn-google.disabled,\n.btn-google[disabled],\nfieldset[disabled] .btn-google,\n.btn-google.disabled:hover,\n.btn-google[disabled]:hover,\nfieldset[disabled] .btn-google:hover,\n.btn-google.disabled:focus,\n.btn-google[disabled]:focus,\nfieldset[disabled] .btn-google:focus,\n.btn-google.disabled.focus,\n.btn-google[disabled].focus,\nfieldset[disabled] .btn-google.focus,\n.btn-google.disabled:active,\n.btn-google[disabled]:active,\nfieldset[disabled] .btn-google:active,\n.btn-google.disabled.active,\n.btn-google[disabled].active,\nfieldset[disabled] .btn-google.active {\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google .badge {\n  color: #dd4b39;\n  background-color: #fff;\n}\n.btn-instagram {\n  color: #fff;\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:focus,\n.btn-instagram.focus {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:hover {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active:hover,\n.btn-instagram.active:hover,\n.open > .dropdown-toggle.btn-instagram:hover,\n.btn-instagram:active:focus,\n.btn-instagram.active:focus,\n.open > .dropdown-toggle.btn-instagram:focus,\n.btn-instagram:active.focus,\n.btn-instagram.active.focus,\n.open > .dropdown-toggle.btn-instagram.focus {\n  color: #fff;\n  background-color: #26455d;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  background-image: none;\n}\n.btn-instagram.disabled,\n.btn-instagram[disabled],\nfieldset[disabled] .btn-instagram,\n.btn-instagram.disabled:hover,\n.btn-instagram[disabled]:hover,\nfieldset[disabled] .btn-instagram:hover,\n.btn-instagram.disabled:focus,\n.btn-instagram[disabled]:focus,\nfieldset[disabled] .btn-instagram:focus,\n.btn-instagram.disabled.focus,\n.btn-instagram[disabled].focus,\nfieldset[disabled] .btn-instagram.focus,\n.btn-instagram.disabled:active,\n.btn-instagram[disabled]:active,\nfieldset[disabled] .btn-instagram:active,\n.btn-instagram.disabled.active,\n.btn-instagram[disabled].active,\nfieldset[disabled] .btn-instagram.active {\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram .badge {\n  color: #3f729b;\n  background-color: #fff;\n}\n.btn-linkedin {\n  color: #fff;\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:focus,\n.btn-linkedin.focus {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:hover {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active:hover,\n.btn-linkedin.active:hover,\n.open > .dropdown-toggle.btn-linkedin:hover,\n.btn-linkedin:active:focus,\n.btn-linkedin.active:focus,\n.open > .dropdown-toggle.btn-linkedin:focus,\n.btn-linkedin:active.focus,\n.btn-linkedin.active.focus,\n.open > .dropdown-toggle.btn-linkedin.focus {\n  color: #fff;\n  background-color: #00405f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  background-image: none;\n}\n.btn-linkedin.disabled,\n.btn-linkedin[disabled],\nfieldset[disabled] .btn-linkedin,\n.btn-linkedin.disabled:hover,\n.btn-linkedin[disabled]:hover,\nfieldset[disabled] .btn-linkedin:hover,\n.btn-linkedin.disabled:focus,\n.btn-linkedin[disabled]:focus,\nfieldset[disabled] .btn-linkedin:focus,\n.btn-linkedin.disabled.focus,\n.btn-linkedin[disabled].focus,\nfieldset[disabled] .btn-linkedin.focus,\n.btn-linkedin.disabled:active,\n.btn-linkedin[disabled]:active,\nfieldset[disabled] .btn-linkedin:active,\n.btn-linkedin.disabled.active,\n.btn-linkedin[disabled].active,\nfieldset[disabled] .btn-linkedin.active {\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin .badge {\n  color: #007bb6;\n  background-color: #fff;\n}\n.btn-microsoft {\n  color: #fff;\n  background-color: #2672ec;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:focus,\n.btn-microsoft.focus {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:hover {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active:hover,\n.btn-microsoft.active:hover,\n.open > .dropdown-toggle.btn-microsoft:hover,\n.btn-microsoft:active:focus,\n.btn-microsoft.active:focus,\n.open > .dropdown-toggle.btn-microsoft:focus,\n.btn-microsoft:active.focus,\n.btn-microsoft.active.focus,\n.open > .dropdown-toggle.btn-microsoft.focus {\n  color: #fff;\n  background-color: #0f4bac;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n  background-image: none;\n}\n.btn-microsoft.disabled,\n.btn-microsoft[disabled],\nfieldset[disabled] .btn-microsoft,\n.btn-microsoft.disabled:hover,\n.btn-microsoft[disabled]:hover,\nfieldset[disabled] .btn-microsoft:hover,\n.btn-microsoft.disabled:focus,\n.btn-microsoft[disabled]:focus,\nfieldset[disabled] .btn-microsoft:focus,\n.btn-microsoft.disabled.focus,\n.btn-microsoft[disabled].focus,\nfieldset[disabled] .btn-microsoft.focus,\n.btn-microsoft.disabled:active,\n.btn-microsoft[disabled]:active,\nfieldset[disabled] .btn-microsoft:active,\n.btn-microsoft.disabled.active,\n.btn-microsoft[disabled].active,\nfieldset[disabled] .btn-microsoft.active {\n  background-color: #2672ec;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft .badge {\n  color: #2672ec;\n  background-color: #fff;\n}\n.btn-odnoklassniki {\n  color: #fff;\n  background-color: #f4731c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:focus,\n.btn-odnoklassniki.focus {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:hover {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active,\n.btn-odnoklassniki.active,\n.open > .dropdown-toggle.btn-odnoklassniki {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active:hover,\n.btn-odnoklassniki.active:hover,\n.open > .dropdown-toggle.btn-odnoklassniki:hover,\n.btn-odnoklassniki:active:focus,\n.btn-odnoklassniki.active:focus,\n.open > .dropdown-toggle.btn-odnoklassniki:focus,\n.btn-odnoklassniki:active.focus,\n.btn-odnoklassniki.active.focus,\n.open > .dropdown-toggle.btn-odnoklassniki.focus {\n  color: #fff;\n  background-color: #b14c09;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active,\n.btn-odnoklassniki.active,\n.open > .dropdown-toggle.btn-odnoklassniki {\n  background-image: none;\n}\n.btn-odnoklassniki.disabled,\n.btn-odnoklassniki[disabled],\nfieldset[disabled] .btn-odnoklassniki,\n.btn-odnoklassniki.disabled:hover,\n.btn-odnoklassniki[disabled]:hover,\nfieldset[disabled] .btn-odnoklassniki:hover,\n.btn-odnoklassniki.disabled:focus,\n.btn-odnoklassniki[disabled]:focus,\nfieldset[disabled] .btn-odnoklassniki:focus,\n.btn-odnoklassniki.disabled.focus,\n.btn-odnoklassniki[disabled].focus,\nfieldset[disabled] .btn-odnoklassniki.focus,\n.btn-odnoklassniki.disabled:active,\n.btn-odnoklassniki[disabled]:active,\nfieldset[disabled] .btn-odnoklassniki:active,\n.btn-odnoklassniki.disabled.active,\n.btn-odnoklassniki[disabled].active,\nfieldset[disabled] .btn-odnoklassniki.active {\n  background-color: #f4731c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki .badge {\n  color: #f4731c;\n  background-color: #fff;\n}\n.btn-openid {\n  color: #fff;\n  background-color: #f7931e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:focus,\n.btn-openid.focus {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:hover {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active:hover,\n.btn-openid.active:hover,\n.open > .dropdown-toggle.btn-openid:hover,\n.btn-openid:active:focus,\n.btn-openid.active:focus,\n.open > .dropdown-toggle.btn-openid:focus,\n.btn-openid:active.focus,\n.btn-openid.active.focus,\n.open > .dropdown-toggle.btn-openid.focus {\n  color: #fff;\n  background-color: #b86607;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n  background-image: none;\n}\n.btn-openid.disabled,\n.btn-openid[disabled],\nfieldset[disabled] .btn-openid,\n.btn-openid.disabled:hover,\n.btn-openid[disabled]:hover,\nfieldset[disabled] .btn-openid:hover,\n.btn-openid.disabled:focus,\n.btn-openid[disabled]:focus,\nfieldset[disabled] .btn-openid:focus,\n.btn-openid.disabled.focus,\n.btn-openid[disabled].focus,\nfieldset[disabled] .btn-openid.focus,\n.btn-openid.disabled:active,\n.btn-openid[disabled]:active,\nfieldset[disabled] .btn-openid:active,\n.btn-openid.disabled.active,\n.btn-openid[disabled].active,\nfieldset[disabled] .btn-openid.active {\n  background-color: #f7931e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid .badge {\n  color: #f7931e;\n  background-color: #fff;\n}\n.btn-pinterest {\n  color: #fff;\n  background-color: #cb2027;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:focus,\n.btn-pinterest.focus {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:hover {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active:hover,\n.btn-pinterest.active:hover,\n.open > .dropdown-toggle.btn-pinterest:hover,\n.btn-pinterest:active:focus,\n.btn-pinterest.active:focus,\n.open > .dropdown-toggle.btn-pinterest:focus,\n.btn-pinterest:active.focus,\n.btn-pinterest.active.focus,\n.open > .dropdown-toggle.btn-pinterest.focus {\n  color: #fff;\n  background-color: #801419;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n  background-image: none;\n}\n.btn-pinterest.disabled,\n.btn-pinterest[disabled],\nfieldset[disabled] .btn-pinterest,\n.btn-pinterest.disabled:hover,\n.btn-pinterest[disabled]:hover,\nfieldset[disabled] .btn-pinterest:hover,\n.btn-pinterest.disabled:focus,\n.btn-pinterest[disabled]:focus,\nfieldset[disabled] .btn-pinterest:focus,\n.btn-pinterest.disabled.focus,\n.btn-pinterest[disabled].focus,\nfieldset[disabled] .btn-pinterest.focus,\n.btn-pinterest.disabled:active,\n.btn-pinterest[disabled]:active,\nfieldset[disabled] .btn-pinterest:active,\n.btn-pinterest.disabled.active,\n.btn-pinterest[disabled].active,\nfieldset[disabled] .btn-pinterest.active {\n  background-color: #cb2027;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest .badge {\n  color: #cb2027;\n  background-color: #fff;\n}\n.btn-reddit {\n  color: #000;\n  background-color: #eff7ff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:focus,\n.btn-reddit.focus {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:hover {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active:hover,\n.btn-reddit.active:hover,\n.open > .dropdown-toggle.btn-reddit:hover,\n.btn-reddit:active:focus,\n.btn-reddit.active:focus,\n.open > .dropdown-toggle.btn-reddit:focus,\n.btn-reddit:active.focus,\n.btn-reddit.active.focus,\n.open > .dropdown-toggle.btn-reddit.focus {\n  color: #000;\n  background-color: #98ccff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n  background-image: none;\n}\n.btn-reddit.disabled,\n.btn-reddit[disabled],\nfieldset[disabled] .btn-reddit,\n.btn-reddit.disabled:hover,\n.btn-reddit[disabled]:hover,\nfieldset[disabled] .btn-reddit:hover,\n.btn-reddit.disabled:focus,\n.btn-reddit[disabled]:focus,\nfieldset[disabled] .btn-reddit:focus,\n.btn-reddit.disabled.focus,\n.btn-reddit[disabled].focus,\nfieldset[disabled] .btn-reddit.focus,\n.btn-reddit.disabled:active,\n.btn-reddit[disabled]:active,\nfieldset[disabled] .btn-reddit:active,\n.btn-reddit.disabled.active,\n.btn-reddit[disabled].active,\nfieldset[disabled] .btn-reddit.active {\n  background-color: #eff7ff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit .badge {\n  color: #eff7ff;\n  background-color: #000;\n}\n.btn-soundcloud {\n  color: #fff;\n  background-color: #f50;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:focus,\n.btn-soundcloud.focus {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:hover {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active:hover,\n.btn-soundcloud.active:hover,\n.open > .dropdown-toggle.btn-soundcloud:hover,\n.btn-soundcloud:active:focus,\n.btn-soundcloud.active:focus,\n.open > .dropdown-toggle.btn-soundcloud:focus,\n.btn-soundcloud:active.focus,\n.btn-soundcloud.active.focus,\n.open > .dropdown-toggle.btn-soundcloud.focus {\n  color: #fff;\n  background-color: #a83800;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n  background-image: none;\n}\n.btn-soundcloud.disabled,\n.btn-soundcloud[disabled],\nfieldset[disabled] .btn-soundcloud,\n.btn-soundcloud.disabled:hover,\n.btn-soundcloud[disabled]:hover,\nfieldset[disabled] .btn-soundcloud:hover,\n.btn-soundcloud.disabled:focus,\n.btn-soundcloud[disabled]:focus,\nfieldset[disabled] .btn-soundcloud:focus,\n.btn-soundcloud.disabled.focus,\n.btn-soundcloud[disabled].focus,\nfieldset[disabled] .btn-soundcloud.focus,\n.btn-soundcloud.disabled:active,\n.btn-soundcloud[disabled]:active,\nfieldset[disabled] .btn-soundcloud:active,\n.btn-soundcloud.disabled.active,\n.btn-soundcloud[disabled].active,\nfieldset[disabled] .btn-soundcloud.active {\n  background-color: #f50;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud .badge {\n  color: #f50;\n  background-color: #fff;\n}\n.btn-tumblr {\n  color: #fff;\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:focus,\n.btn-tumblr.focus {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:hover {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active:hover,\n.btn-tumblr.active:hover,\n.open > .dropdown-toggle.btn-tumblr:hover,\n.btn-tumblr:active:focus,\n.btn-tumblr.active:focus,\n.open > .dropdown-toggle.btn-tumblr:focus,\n.btn-tumblr:active.focus,\n.btn-tumblr.active.focus,\n.open > .dropdown-toggle.btn-tumblr.focus {\n  color: #fff;\n  background-color: #111c26;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  background-image: none;\n}\n.btn-tumblr.disabled,\n.btn-tumblr[disabled],\nfieldset[disabled] .btn-tumblr,\n.btn-tumblr.disabled:hover,\n.btn-tumblr[disabled]:hover,\nfieldset[disabled] .btn-tumblr:hover,\n.btn-tumblr.disabled:focus,\n.btn-tumblr[disabled]:focus,\nfieldset[disabled] .btn-tumblr:focus,\n.btn-tumblr.disabled.focus,\n.btn-tumblr[disabled].focus,\nfieldset[disabled] .btn-tumblr.focus,\n.btn-tumblr.disabled:active,\n.btn-tumblr[disabled]:active,\nfieldset[disabled] .btn-tumblr:active,\n.btn-tumblr.disabled.active,\n.btn-tumblr[disabled].active,\nfieldset[disabled] .btn-tumblr.active {\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr .badge {\n  color: #2c4762;\n  background-color: #fff;\n}\n.btn-twitter {\n  color: #fff;\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:focus,\n.btn-twitter.focus {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:hover {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active:hover,\n.btn-twitter.active:hover,\n.open > .dropdown-toggle.btn-twitter:hover,\n.btn-twitter:active:focus,\n.btn-twitter.active:focus,\n.open > .dropdown-toggle.btn-twitter:focus,\n.btn-twitter:active.focus,\n.btn-twitter.active.focus,\n.open > .dropdown-toggle.btn-twitter.focus {\n  color: #fff;\n  background-color: #1583d7;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  background-image: none;\n}\n.btn-twitter.disabled,\n.btn-twitter[disabled],\nfieldset[disabled] .btn-twitter,\n.btn-twitter.disabled:hover,\n.btn-twitter[disabled]:hover,\nfieldset[disabled] .btn-twitter:hover,\n.btn-twitter.disabled:focus,\n.btn-twitter[disabled]:focus,\nfieldset[disabled] .btn-twitter:focus,\n.btn-twitter.disabled.focus,\n.btn-twitter[disabled].focus,\nfieldset[disabled] .btn-twitter.focus,\n.btn-twitter.disabled:active,\n.btn-twitter[disabled]:active,\nfieldset[disabled] .btn-twitter:active,\n.btn-twitter.disabled.active,\n.btn-twitter[disabled].active,\nfieldset[disabled] .btn-twitter.active {\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter .badge {\n  color: #55acee;\n  background-color: #fff;\n}\n.btn-vimeo {\n  color: #fff;\n  background-color: #1ab7ea;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:focus,\n.btn-vimeo.focus {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:hover {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active:hover,\n.btn-vimeo.active:hover,\n.open > .dropdown-toggle.btn-vimeo:hover,\n.btn-vimeo:active:focus,\n.btn-vimeo.active:focus,\n.open > .dropdown-toggle.btn-vimeo:focus,\n.btn-vimeo:active.focus,\n.btn-vimeo.active.focus,\n.open > .dropdown-toggle.btn-vimeo.focus {\n  color: #fff;\n  background-color: #0f7b9f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n  background-image: none;\n}\n.btn-vimeo.disabled,\n.btn-vimeo[disabled],\nfieldset[disabled] .btn-vimeo,\n.btn-vimeo.disabled:hover,\n.btn-vimeo[disabled]:hover,\nfieldset[disabled] .btn-vimeo:hover,\n.btn-vimeo.disabled:focus,\n.btn-vimeo[disabled]:focus,\nfieldset[disabled] .btn-vimeo:focus,\n.btn-vimeo.disabled.focus,\n.btn-vimeo[disabled].focus,\nfieldset[disabled] .btn-vimeo.focus,\n.btn-vimeo.disabled:active,\n.btn-vimeo[disabled]:active,\nfieldset[disabled] .btn-vimeo:active,\n.btn-vimeo.disabled.active,\n.btn-vimeo[disabled].active,\nfieldset[disabled] .btn-vimeo.active {\n  background-color: #1ab7ea;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo .badge {\n  color: #1ab7ea;\n  background-color: #fff;\n}\n.btn-vk {\n  color: #fff;\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:focus,\n.btn-vk.focus {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:hover {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active:hover,\n.btn-vk.active:hover,\n.open > .dropdown-toggle.btn-vk:hover,\n.btn-vk:active:focus,\n.btn-vk.active:focus,\n.open > .dropdown-toggle.btn-vk:focus,\n.btn-vk:active.focus,\n.btn-vk.active.focus,\n.open > .dropdown-toggle.btn-vk.focus {\n  color: #fff;\n  background-color: #3a526b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  background-image: none;\n}\n.btn-vk.disabled,\n.btn-vk[disabled],\nfieldset[disabled] .btn-vk,\n.btn-vk.disabled:hover,\n.btn-vk[disabled]:hover,\nfieldset[disabled] .btn-vk:hover,\n.btn-vk.disabled:focus,\n.btn-vk[disabled]:focus,\nfieldset[disabled] .btn-vk:focus,\n.btn-vk.disabled.focus,\n.btn-vk[disabled].focus,\nfieldset[disabled] .btn-vk.focus,\n.btn-vk.disabled:active,\n.btn-vk[disabled]:active,\nfieldset[disabled] .btn-vk:active,\n.btn-vk.disabled.active,\n.btn-vk[disabled].active,\nfieldset[disabled] .btn-vk.active {\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk .badge {\n  color: #587ea3;\n  background-color: #fff;\n}\n.btn-yahoo {\n  color: #fff;\n  background-color: #720e9e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:focus,\n.btn-yahoo.focus {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:hover {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active:hover,\n.btn-yahoo.active:hover,\n.open > .dropdown-toggle.btn-yahoo:hover,\n.btn-yahoo:active:focus,\n.btn-yahoo.active:focus,\n.open > .dropdown-toggle.btn-yahoo:focus,\n.btn-yahoo:active.focus,\n.btn-yahoo.active.focus,\n.open > .dropdown-toggle.btn-yahoo.focus {\n  color: #fff;\n  background-color: #39074e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n  background-image: none;\n}\n.btn-yahoo.disabled,\n.btn-yahoo[disabled],\nfieldset[disabled] .btn-yahoo,\n.btn-yahoo.disabled:hover,\n.btn-yahoo[disabled]:hover,\nfieldset[disabled] .btn-yahoo:hover,\n.btn-yahoo.disabled:focus,\n.btn-yahoo[disabled]:focus,\nfieldset[disabled] .btn-yahoo:focus,\n.btn-yahoo.disabled.focus,\n.btn-yahoo[disabled].focus,\nfieldset[disabled] .btn-yahoo.focus,\n.btn-yahoo.disabled:active,\n.btn-yahoo[disabled]:active,\nfieldset[disabled] .btn-yahoo:active,\n.btn-yahoo.disabled.active,\n.btn-yahoo[disabled].active,\nfieldset[disabled] .btn-yahoo.active {\n  background-color: #720e9e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo .badge {\n  color: #720e9e;\n  background-color: #fff;\n}\n.btn-android {\n  color: #fff;\n  background-color: #558700;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:focus,\n.btn-android.focus {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:hover {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active,\n.btn-android.active,\n.open > .dropdown-toggle.btn-android {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active:hover,\n.btn-android.active:hover,\n.open > .dropdown-toggle.btn-android:hover,\n.btn-android:active:focus,\n.btn-android.active:focus,\n.open > .dropdown-toggle.btn-android:focus,\n.btn-android:active.focus,\n.btn-android.active.focus,\n.open > .dropdown-toggle.btn-android.focus {\n  color: #fff;\n  background-color: #39074e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active,\n.btn-android.active,\n.open > .dropdown-toggle.btn-android {\n  background-image: none;\n}\n.btn-android.disabled,\n.btn-android[disabled],\nfieldset[disabled] .btn-android,\n.btn-android.disabled:hover,\n.btn-android[disabled]:hover,\nfieldset[disabled] .btn-android:hover,\n.btn-android.disabled:focus,\n.btn-android[disabled]:focus,\nfieldset[disabled] .btn-android:focus,\n.btn-android.disabled.focus,\n.btn-android[disabled].focus,\nfieldset[disabled] .btn-android.focus,\n.btn-android.disabled:active,\n.btn-android[disabled]:active,\nfieldset[disabled] .btn-android:active,\n.btn-android.disabled.active,\n.btn-android[disabled].active,\nfieldset[disabled] .btn-android.active {\n  background-color: #558700;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android .badge {\n  color: #558700;\n  background-color: #fff;\n}\n.entry-content .btn:not(.btn-primary) {\n  background-image: none;\n}\n.entry-content a.btn.btn-social {\n  color: white;\n  text-shadow: none;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.entry-content a.btn.btn-social.btn-reddit {\n  color: black;\n}\n.entry-content a.btn.btn-social:focus {\n  padding-left: 44px;\n}\n.entry-content a.btn.btn-lg.btn-social {\n  font-size: 18px;\n  line-height: 45px;\n}\n.entry-content a.btn.btn-lg.btn-social:focus {\n  padding-left: 61px;\n}\n.entry-content a.btn {\n  text-decoration: none;\n}\n/**********************************************/\n/* 20160527 調整側欄，加上RSS連結 */\n#sidebar .widget a.icon {\n  float: right;\n  line-height: 40px;\n  background: #FFFFFF;\n  font-size: 20px;\n  font-weight: normal;\n  padding: 10px 15px 0;\n  color: #292929;\n}\n.entry-content p,\n.entry-content li {\n  color: black;\n}\n/******************************/\n/* 20170912 navbar */\n@media (max-width: 979px) {\n  #header-inner {\n    min-height: 40px;\n  }\n}\niframe#comment-editor {\n  width: 100% !important;\n  height: 250px;\n}\n.post-avatar {\n  background: url(//lh3.googleusercontent.com/-6qwdHih3tFk/Vv6N0dTaICI/AAAAAAACuRA/AsKTNm9c_Bg/s0/post-avatar.png);\n}\n.firstload-background {\n  background: url(//2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n.author-box {\n  float: left;\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 480px) {\n  body {\n    font-size: 1rem;\n  }\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\n *  Font Awesome 4.4.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?v=4.4.0);src:url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot#iefix&v=4.4.0) format(\"embedded-opentype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff2?v=4.4.0) format(\"woff2\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0) format(\"woff\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf?v=4.4.0) format(\"truetype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.svg?v=4.4.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1);-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}", "",{"version":3,"sources":["font-awesome.css"],"names":[],"mappings":"AAAA;;;EAGE,CAGF,WACE,uBAA0B,CAC1B,2FAA8F,CAC9F,mjBAAmkB,CACnkB,eAAmB,CACnB,iBACF,CACA,IACE,oBAAqB,CACrB,4CAA6C,CAC7C,iBAAkB,CAClB,mBAAoB,CACpB,kCAAmC,CACnC,iCACF,CAEA,OACE,sBAAuB,CACvB,iBAAmB,CACnB,mBACF,CACA,OACE,aACF,CACA,OACE,aACF,CACA,OACE,aACF,CACA,OACE,aACF,CACA,OACE,kBAAmB,CACnB,iBACF,CACA,OACE,cAAe,CACf,wBAAyB,CACzB,oBACF,CACA,UACE,iBACF,CACA,OACE,iBAAkB,CAClB,kBAAmB,CACnB,kBAAmB,CACnB,eAAiB,CACjB,iBACF,CACA,aACE,kBACF,CACA,WACE,wBAAyB,CACzB,uBAA4B,CAC5B,kBACF,CACA,cACE,UACF,CACA,eACE,WACF,CACA,iBACE,iBACF,CACA,kBACE,gBACF,CAEA,YACE,WACF,CACA,WACE,UACF,CACA,cACE,iBACF,CACA,eACE,gBACF,CACA,SACE,4CAA6C,CAC7C,oCACF,CACA,UACE,8CAA+C,CAC/C,sCACF,CACA,2BACE,GACE,8BAA+B,CAC/B,sBACF,CACA,GACE,gCAAiC,CACjC,wBACF,CACF,CACA,mBACE,GACE,8BAA+B,CAC/B,sBACF,CACA,GACE,gCAAiC,CACjC,wBACF,CACF,CACA,cACE,+DAAgE,CAChE,+BAAgC,CAChC,2BAA4B,CAC5B,uBACF,CACA,eACE,+DAAgE,CAChE,gCAAiC,CACjC,4BAA6B,CAC7B,wBACF,CACA,eACE,+DAAgE,CAChE,gCAAiC,CACjC,4BAA6B,CAC7B,wBACF,CACA,oBACE,wEAA0E,CAC1E,4BAA+B,CAC/B,wBAA2B,CAC3B,oBACF,CACA,kBACE,wEAA0E,CAC1E,4BAA+B,CAC/B,wBAA2B,CAC3B,oBACF,CACA,gHAKE,WACF,CACA,UACE,iBAAkB,CAClB,oBAAqB,CACrB,SAAU,CACV,UAAW,CACX,eAAgB,CAChB,qBACF,CACA,0BAEE,iBAAkB,CAClB,MAAO,CACP,UAAW,CACX,iBACF,CACA,aACE,mBACF,CACA,aACE,aACF,CACA,YACE,UACF,CAGA,iBACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,iBACE,eACF,CACA,gBACE,eACF,CACA,kBACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,oBACE,eACF,CACA,cACE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,oDAGE,eACF,CACA,uBACE,eACF,CACA,wBACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,+BAEE,eACF,CACA,mBACE,eACF,CACA,gBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,gBACE,eACF,CACA,oBACE,eACF,CACA,+BACE,eACF,CACA,6BACE,eACF,CACA,iBACE,eACF,CACA,yBACE,eACF,CACA,0CAEE,eACF,CACA,mBACE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,eACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,oBACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,kBACE,eACF,CACA,uBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,gBACE,eACF,CACA,qCAEE,eACF,CACA,kBACE,eACF,CACA,wBACE,eACF,CACA,uDAGE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,gBACE,eACF,CACA,2CAEE,eACF,CACA,0BACE,eACF,CACA,0BACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,yBACE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,iBACE,eACF,CACA,gBACE,eACF,CACA,mBACE,eACF,CACA,wBACE,eACF,CACA,wBACE,eACF,CACA,iBACE,eACF,CACA,wBACE,eACF,CACA,yBACE,eACF,CACA,uBACE,eACF,CACA,wBACE,eACF,CACA,wBACE,eACF,CACA,wBACE,eACF,CACA,2BACE,eACF,CACA,uBACE,eACF,CACA,sBACE,eACF,CACA,0BACE,eACF,CACA,0BACE,eACF,CACA,eACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,yCAEE,eACF,CACA,kBACE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,iBACE,eACF,CACA,oBACE,eACF,CACA,8BACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,gBACE,eACF,CACA,eACE,eACF,CACA,qBACE,eACF,CACA,mDAEE,eACF,CACA,iBACE,eACF,CACA,oBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,yBACE,eACF,CACA,kBACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,oBACE,eACF,CACA,4CAEE,eACF,CACA,0BACE,eACF,CACA,2BACE,eACF,CACA,wBACE,eACF,CACA,eACE,eACF,CACA,iCAEE,eACF,CACA,oBACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,qBACE,eACF,CACA,mBACE,eACF,CACA,oBACE,eACF,CACA,2BACE,eACF,CACA,sBACE,eACF,CACA,yBACE,eACF,CACA,mBACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,0CAEE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,uBACE,eACF,CACA,+BAEE,eACF,CACA,iBACE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,uBACE,eACF,CACA,wBACE,eACF,CACA,uBACE,eACF,CACA,qBACE,eACF,CACA,uBACE,eACF,CACA,6BACE,eACF,CACA,8BACE,eACF,CACA,2BACE,eACF,CACA,6BACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,kCAEE,eACF,CACA,iCAEE,eACF,CACA,iBACE,eACF,CACA,iBACE,eACF,CACA,mCAEE,eACF,CACA,mCAEE,eACF,CACA,qBACE,eACF,CACA,oCAEE,eACF,CACA,kBACE,eACF,CACA,sDAGE,eACF,CACA,mBACE,eACF,CACA,mBACE,eACF,CACA,yBACE,eACF,CACA,qBACE,eACF,CACA,iBACE,eACF,CACA,iBACE,eACF,CACA,iBACE,eACF,CACA,qBACE,eACF,CACA,4BACE,eACF,CACA,8BACE,eACF,CACA,uBACE,eACF,CACA,iBACE,eACF,CACA,sBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,mBACE,eACF,CACA,oCAEE,eACF,CACA,0CAEE,eACF,CACA,uCAEE,eACF,CACA,oBACE,eACF,CACA,oBACE,eACF,CACA,uCAEE,eACF,CACA,kCAEE,eACF,CACA,2CAEE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,iCAEE,eACF,CACA,mBACE,eACF,CACA,oBACE,eACF,CACA,sCAEE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,0BACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,uBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,uBACE,eACF,CACA,gBACE,eACF,CACA,oBACE,eACF,CACA,uBACE,eACF,CACA,6BACE,eACF,CACA,8BACE,eACF,CACA,2BACE,eACF,CACA,6BACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,mBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,0CAEE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,mBACE,eACF,CACA,kBACE,eACF,CACA,uCAEE,eACF,CACA,sBACE,eACF,CACA,oBACE,eACF,CACA,yBACE,eACF,CACA,mBACE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,mBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,0BACE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,+CAEE,eACF,CACA,4EAGE,eACF,CACA,0BACE,eACF,CACA,gBACE,eACF,CACA,qBACE,eACF,CACA,0CAEE,eACF,CACA,oBACE,eACF,CACA,gBACE,eACF,CACA,uBACE,eACF,CACA,uBACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,wBACE,eACF,CACA,sBACE,eACF,CACA,4BACE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,6BACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,+BACE,eACF,CACA,gCACE,eACF,CACA,6BACE,eACF,CACA,+BACE,eACF,CACA,iBACE,eACF,CACA,gBACE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,kBACE,eACF,CACA,wBACE,eACF,CACA,0BACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,yBACE,eACF,CACA,gCACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,sDAEE,eACF,CACA,kDAEE,eACF,CACA,wDAEE,eACF,CACA,+BAEE,eACF,CACA,eACE,eACF,CACA,iCAEE,eACF,CACA,gCAEE,eACF,CACA,4DAIE,eACF,CACA,kDAGE,eACF,CACA,8BAEE,eACF,CACA,kCAEE,eACF,CACA,gBACE,eACF,CACA,qBACE,eACF,CACA,0BACE,eACF,CACA,2BACE,eACF,CACA,2BACE,eACF,CACA,4BACE,eACF,CACA,4BACE,eACF,CACA,6BACE,eACF,CACA,qBACE,eACF,CACA,uBACE,eACF,CACA,0BACE,eACF,CACA,mBACE,eACF,CACA,gBACE,eACF,CACA,uBACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,0BACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,eACE,eACF,CACA,qBACE,eACF,CACA,4BACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,2BACE,eACF,CACA,yBACE,eACF,CACA,2BACE,eACF,CACA,4BACE,eACF,CACA,iBACE,eACF,CACA,mBACE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,oBACE,eACF,CACA,iBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,gBACE,eACF,CACA,sCAEE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,eACE,eACF,CACA,cACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,qBACE,eACF,CACA,0BACE,eACF,CACA,gCACE,eACF,CACA,+BACE,eACF,CACA,sDAEE,eACF,CACA,wBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,uCAEE,eACF,CACA,yBACE,eACF,CACA,yBACE,eACF,CACA,iBACE,eACF,CACA,2BACE,eACF,CACA,qBACE,eACF,CACA,kBACE,eACF,CACA,6DAGE,eACF,CACA,kDAEE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,8BACE,eACF,CACA,uBACE,eACF,CACA,qBACE,eACF,CACA,gBACE,eACF,CACA,sBACE,eACF,CACA,0BACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,oBACE,eACF,CACA,eACE,eACF,CACA,oBACE,eACF,CACA,iBACE,eACF,CACA,eACE,eACF,CACA,iBACE,eACF,CACA,gBACE,eACF,CACA,iBACE,eACF,CACA,mBACE,eACF,CACA,0BACE,eACF,CACA,iBACE,eACF,CACA,wBACE,eACF,CACA,mBACE,eACF,CACA,qCAEE,eACF,CACA,+BAEE,eACF,CACA,gBACE,eACF,CACA,mBACE,eACF,CACA,sBACE,eACF,CACA,sBACE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,wBACE,eACF,CACA,6BACE,eACF,CACA,0EAGE,eACF,CACA,gDAEE,eACF,CACA,gDAEE,eACF,CACA,gDAEE,eACF,CACA,uBACE,eACF,CACA,gBACE,eACF,CACA,mBACE,eACF,CACA,oBACE,eACF,CACA,wGAKE,eACF,CACA,0BACE,eACF,CACA,+BAEE,eACF,CACA,gCAEE,eACF,CACA,sBACE,eACF,CACA,eACE,eACF,CACA,2EAGE,eACF,CACA,yBACE,eACF,CACA,cACE,eACF,CACA,oCAEE,eACF,CACA,uCAEE,eACF,CACA,2CAEE,eACF,CACA,mBACE,eACF,CACA,uBACE,eACF,CACA,kBACE,eACF,CACA,qBACE,eACF,CACA,mBACE,eACF,CACA,qBACE,eACF,CACA,4BACE,eACF,CACA,gBACE,eACF,CACA,6CAEE,eACF,CACA,eACE,eACF,CACA,sBACE,eACF,CACA,gBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,gBACE,eACF,CACA,uBACE,eACF,CACA,gBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,mBACE,eACF,CACA,yBACE,eACF,CACA,uBACE,eACF,CACA,mBACE,eACF,CACA,qBACE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,iBACE,eACF,CACA,qBACE,eACF,CACA,cACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,sBACE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,kBACE,eACF,CACA,yBACE,eACF,CACA,sBACE,eACF,CACA,qBACE,eACF,CACA,mBACE,eACF,CACA,eACE,eACF,CACA,mBACE,eACF,CACA,qBACE,eACF,CACA,cACE,eACF,CACA,mDAGE,eACF,CACA,oBACE,eACF,CACA,sBACE,eACF,CACA,0BACE,eACF,CACA,oBACE,eACF,CACA,oBACE,eACF,CACA,mBACE,eACF,CACA,kBACE,eACF,CACA,wBACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,qBACE,eACF,CACA,2BACE,eACF,CACA,mBACE,eACF,CACA,gBACE,eACF,CACA,uBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,qBACE,eACF,CACA,iBACE,eACF,CACA,gBACE,eACF,CACA,mBACE,eACF,CACA,2CAEE,eACF,CACA,2BACE,eACF,CACA,wBACE,eACF,CACA,uBACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,yBACE,eACF,CACA,kBACE,eACF,CACA,sBACE,eACF,CACA,6BACE,eACF,CACA,uBACE,eACF,CACA,oBACE,eACF,CACA,kBACE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,gCAEE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,sCAEE,eACF,CACA,yBACE,eACF,CACA,oBACE,eACF,CACA,wBACE,eACF,CACA,6CAEE,eACF,CACA,uDAEE,eACF,CACA,6CAEE,eACF,CACA,gDAEE,eACF,CACA,8CAEE,eACF,CACA,yBACE,eACF,CACA,oBACE,eACF,CACA,wBACE,eACF,CACA,0BACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,kBACE,eACF,CACA,0BACE,eACF,CACA,iBACE,eACF,CACA,yBACE,eACF,CACA,uBACE,eACF,CACA,kDAEE,eACF,CACA,iDAEE,eACF,CACA,gDAEE,eACF,CACA,qBACE,eACF,CACA,8CAEE,eACF,CACA,+CAEE,eACF,CACA,2BACE,eACF,CACA,yBACE,eACF,CACA,wBACE,eACF,CACA,0BACE,eACF,CACA,wBACE,eACF,CACA,qBACE,eACF,CACA,sBACE,eACF,CACA,4BACE,eACF,CACA,cACE,eACF,CACA,qBACE,eACF,CACA,uBACE,eACF,CACA,yBACE,eACF,CACA,gCACE,eACF,CACA,sBACE,eACF,CACA,uBACE,eACF,CACA,kBACE,eACF,CACA,kBACE,eACF,CACA,mBACE,eACF,CACA,iBACE,eACF,CACA,6BACE,eACF,CACA,oCAEE,eACF,CACA,kBACE,eACF,CACA,iBACE,eACF,CACA,kBACE,eACF,CACA,2BACE,eACF,CACA,4BACE,eACF,CACA,4BACE,eACF,CACA,4BACE,eACF,CACA,oBACE,eACF,CACA,mBACE,eACF,CACA,qBACE,eACF,CACA,iBACE,eACF,CACA,eACE,eACF,CACA,sBACE,eACF,CACA,wBACE,eACF,CACA,iBACE,eACF,CACA,iBACE,eACF,CACA,qBACE,eACF,CACA,qBACE,eACF","file":"font-awesome.css","sourcesContent":["/*!\n *  Font Awesome 4.4.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?v=4.4.0');\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?#iefix&v=4.4.0') format('embedded-opentype'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff2?v=4.4.0') format('woff2'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0') format('woff'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf?v=4.4.0') format('truetype'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.svg?v=4.4.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@font-face{font-family:Crete Round;font-style:normal;font-weight:400;src:local(\"Crete Round\"),local(\"CreteRound-Regular\"),url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK110b3wKg.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Crete Round;font-style:normal;font-weight:400;src:local(\"Crete Round\"),local(\"CreteRound-Regular\"),url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK170b0.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}", "",{"version":3,"sources":["googleapis-font-family-crete-round.css"],"names":[],"mappings":"AACA,WACE,uBAA0B,CAC1B,iBAAkB,CAClB,eAAgB,CAChB,wJAA2J,CAC3J,qGACF,CAEA,WACE,uBAA0B,CAC1B,iBAAkB,CAClB,eAAgB,CAChB,qJAAwJ,CACxJ,mJACF","file":"googleapis-font-family-crete-round.css","sourcesContent":["/* latin-ext */\n@font-face {\n  font-family: 'Crete Round';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Crete Round'), local('CreteRound-Regular'), url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK110b3wKg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Crete Round';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Crete Round'), local('CreteRound-Regular'), url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK170b0.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@font-face{font-family:Lato;font-style:normal;font-weight:400;src:local(\"Lato Regular\"),local(\"Lato-Regular\"),url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Lato;font-style:normal;font-weight:400;src:local(\"Lato Regular\"),local(\"Lato-Regular\"),url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}", "",{"version":3,"sources":["googleapis-font-family-lato.css"],"names":[],"mappings":"AACA,WACE,gBAAmB,CACnB,iBAAkB,CAClB,eAAgB,CAChB,8HAAiI,CACjI,qGACF,CAEA,WACE,gBAAmB,CACnB,iBAAkB,CAClB,eAAgB,CAChB,4HAA+H,CAC/H,mJACF","file":"googleapis-font-family-lato.css","sourcesContent":["/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/gsc-search/default.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-header/gsc-search/default.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".cse .gsc-control-cse,.gsc-control-cse{padding:1em;width:auto}.cse .gsc-control-wrapper-cse,.gsc-control-wrapper-cse{width:100%}.cse .gsc-branding,.gsc-branding{display:none}.cse .gsc-control-cse,.gsc-control-cse{background-color:#fff;border:1px solid #fff}.cse .gsc-control-cse:after,.gsc-control-cse:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.cse .gsc-resultsHeader,.gsc-resultsHeader{border:block}table.gsc-search-box td.gsc-input{padding-right:24px}.gsc-search-box-tools .gsc-search-box .gsc-input{padding-right:12px}input.gsc-input{font-size:16px}.gsc-input::-ms-clear{display:none;height:0;width:0}.gsc-input-box{border:1px solid #d9d9d9;background:#fff}.gsc-input-box-hover,.gsc-search-box .gsc-input>input:hover{border:1px solid #b9b9b9;border-top-color:#a0a0a0;-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1);outline:none}.gsc-input-box-focus,.gsc-search-box .gsc-input>input:focus{border:1px solid #4d90fe;-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.3);box-shadow:inset 0 1px 2px rgba(0,0,0,.3);outline:none}.cse .gsc-search-button-v2,.gsc-search-button-v2{font-size:0;padding:6px 27px;width:auto;vertical-align:middle;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;border:1px solid #3079ed;background-color:#4d90fe;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(top,#4d90fe,#4787ed);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#4d90fe\",EndColorStr=\"#4787ed\")}.cse .gsc-search-button-v2:hover,.gsc-search-button-v2:hover{border-color:#2f5bb7;background-color:#357ae8;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(top,#4d90fe,#357ae8);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#4d90fe\",EndColorStr=\"#357ae8\")}.cse .gsc-search-button-v2:focus,.gsc-search-button-v2:focus{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5);-webkit-box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5);-moz-box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.5)}.gsc-search-button-v2 svg{fill:#fff}button::-moz-focus-inner{padding:0;border:0}.gsc-refinementHeader{text-decoration:none;font-weight:700;color:#666}.gsc-refinementHeader.gsc-refinementhActive{text-decoration:none;color:#dd4b39}.gsc-refinementHeader.gsc-refinementhInactive{text-decoration:none;cursor:pointer}.gsc-refinementHeader.gsc-refinementhInactive>span:hover{text-decoration:underline}.gsc-refinementhActive>span{border-bottom:3px solid;padding-bottom:2px}.gsc-refinementsArea{margin-top:0;padding-bottom:4px;padding-top:10px}.gsc-tabsArea{font-size:11px}.gsc-tabsArea>.gsc-tabHeader{height:27px}.gsc-tabsArea>div{height:30px;overflow:auto}.gsc-tabsArea .gs-spacer,.gsc-tabsArea .gs-spacer-opera{display:none}.gsc-tabsArea{margin-top:12px;margin-bottom:0;height:29px;border-bottom:1px solid #ccc}.gsc-tabHeader{display:inline-block;padding:0 8px 1px;margin-right:0;margin-top:0;font-weight:700;height:27px;line-height:27px;min-width:54px;text-align:center}.gsc-tabHeader.gsc-tabhActive{border:1px solid;border-color:#ccc #ccc #fff;color:#202020}.gsc-tabHeader.gsc-tabhInactive{background:#fff;color:#666;border-left:0;border-right:0;border-top:0}.gsc-imageResult-classic,.gsc-imageResult-column{padding:.25em;border:1px solid #fff;margin-bottom:1em}.gsc-webResult.gsc-result{padding:.25em}.cse .gsc-webResult.gsc-result,.gsc-webResult.gsc-result{border:1px solid #fff;margin-bottom:0}.gsc-webResult .gsc-result{padding:10px 0}.cse .gsc-webResult.gsc-result:hover,.gsc-results .gsc-imageResult-classic:hover,.gsc-results .gsc-imageResult-column:hover,.gsc-webResult.gsc-result.gsc-promotion:hover,.gsc-webResult.gsc-result:hover{border:1px solid #fff}.gs-promotion-image-box,.gs-web-image-box{padding:2px 0}.gs-promotion-image-box img.gs-promotion-image{max-width:50px}.gs-promotion-image-box,.gs-promotion-image-box img.gs-promotion-image{width:50px}.gs-web-image-box img.gs-image{max-width:70px;max-height:70px}.gs-web-image-box-landscape img.gs-image{max-width:70px;max-height:50px}.gs-web-image-box-portrait img.gs-image{max-width:50px;max-height:120px}.gs-image-box.gs-web-image-box.gs-web-image-box-landscape{width:80px}.gs-image-box.gs-web-image-box.gs-web-image-box-portrait{width:60px;height:50px;overflow:hidden}.gs-web-image-box{text-align:inherit}.gs-promotion-image-box img.gs-promotion-image{border:1px solid #ebebeb}.cse .gsc-webResult.gsc-result.gsc-promotion,.gsc-webResult.gsc-result.gsc-promotion{background-color:#f6f6f6;margin-top:5px;margin-bottom:10px}.gsc-result-info{margin-top:0;margin-bottom:0;padding:8px 8px 10px}.gs-promotion-text-cell .gs-snippet,.gs-promotion-text-cell .gs-visibleUrl{font-size:13px}.gsc-table-result,.gsc-thumbnail-inside,.gsc-url-top{padding-left:8px;padding-right:8px}.gs-promotion-table{margin-left:8px;margin-right:8px}.gs-promotion table{padding-left:8px;padding-right:8px}table.gs-promotion-table-snippet-with-image{padding-left:0;padding-right:0}.gs-promotion-text-cell{margin-left:8px;margin-right:8px}.gs-promotion-text-cell-with-image{padding-left:10px;padding-right:10px;vertical-align:top}.cse .gs-promotion .gs-snippet a:active,.cse .gs-promotion .gs-snippet a:hover,.cse .gs-promotion .gs-snippet a:link,.cse .gs-promotion .gs-snippet a:visited,.cse .gs-promotion a.gs-title:active,.cse .gs-promotion a.gs-title:active *,.cse .gs-promotion a.gs-title:hover,.cse .gs-promotion a.gs-title:hover *,.cse .gs-promotion a.gs-title:link,.cse .gs-promotion a.gs-title:link *,.cse .gs-promotion a.gs-title:visited,.cse .gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:active,.gs-promotion .gs-snippet a:hover,.gs-promotion .gs-snippet a:link,.gs-promotion .gs-snippet a:visited,.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *{color:#15c}.cse .gs-promotion .gs-snippet,.cse .gs-promotion .gs-title .gs-promotion-title-right,.cse .gs-promotion .gs-title .gs-promotion-title-right *,.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#000}.cse .gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl{color:#093}.gsc-completion-selected{background:#eee}.gsc-completion-container{font-family:Arial,sans-serif;font-size:16px;background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;margin:0}.gsc-completion-title{color:#15c}.gsc-completion-snippet{color:#000}.gs-promotion div.gs-visibleUrl-short,.gs-webResult div.gs-visibleUrl-short{display:none}.gs-promotion div.gs-visibleUrl-long,.gs-webResult div.gs-visibleUrl-long,.gsc-url-top{display:block}.gsc-thumbnail-left,.gsc-url-bottom{display:none}.gsc-thumbnail-inside{display:block}.gsc-result .gs-title{height:1.2em}.gs-result .gs-title,.gs-result .gs-title *{color:#15c}.gs-result .gs-visibleUrl,.gs-result a.gs-visibleUrl{color:#093;text-decoration:none;padding-bottom:2px}.gsc-results .gsc-cursor-box{margin:10px}.gsc-results .gsc-cursor-box .gsc-cursor-page{text-decoration:none}.gsc-results .gsc-cursor-box .gsc-cursor-page:hover{text-decoration:underline}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{text-decoration:none;color:#dd4b39}.gsc-control-cse .gs-promotion em,.gsc-control-cse .gs-snippet,.gsc-preview-reviews{color:#333}.gsc-control-cse-zh_CN .gs-promotion em,.gsc-control-cse-zh_CN .gs-snippet b,.gsc-control-cse-zh_TW .gs-promotion em,.gsc-control-cse-zh_TW .gs-snippet b{color:#c03}.gsc-author,.gsc-location,.gsc-org,.gsc-reviewer,.gsc-role,.gsc-snippet-metadata,.gsc-tel{color:#666}.gsc-wrapper.gsc-thinWrapper{border-right:1px solid #e9e9e9}.gs-spelling a{color:#15c}.gs-spelling{color:#333;padding-left:7px;padding-right:7px}.gs-snippet{margin-top:1px}div.gsc-clear-button{background-image:url(//www.google.com/cse/static/css/v2/clear.png)}div.gsc-clear-button:hover{background-image:url(//www.google.com/cse/static/css/v2/clear-hover.png)}.gsc-preview-reviews ul{padding-left:0;padding-right:0}.gsc-completion-container .gsc-completion-icon-cell{width:42px;height:42px;padding-right:10px}.gcsc-branding-text,.gsc-branding-text{color:#666}.gcsc-branding{padding-top:4px;padding-left:8px;padding-right:8px}.gsc-adBlock{padding-bottom:5px}.gsc-table-cell-snippet-close,.gsc-table-cell-snippet-open{padding-left:0;padding-right:0}.gsc-selected-option-container{background-color:#f5f5f5;background-image:linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1)}.gsc-context-box{font-size:83%;margin-top:3px;border-collapse:collapse}.gsc-context-box .gsc-col{padding:1px 0;white-space:nowrap;vertical-align:middle}.gsc-context-box .gsc-facet-label{width:65px;padding-left:2px;text-decoration:underline;color:#00c;cursor:pointer}.gsc-context-box .gsc-chart{width:32em;padding:3px;border-left:1px solid #00c;border-right:1px solid #00c}.gsc-context-box .gsc-top{border-top:1px solid #00c}.gsc-context-box .gsc-bottom{border-bottom:1px solid #00c}.gsc-context-box .gsc-chart div{background:#00c;height:9px}.gsc-context-box .gsc-facet-result{color:#00c;width:30px;text-align:right;padding-right:5px}.gsc-usr-group-thumbnail{display:inline-block;max-width:72px;max-height:72px}.gsc-usr-group-thumbnail img{max-height:72px;overflow:hidden}.gs-webResult .gs-title .gs-title.gsc-usr-group-heading{color:#00c;cursor:pointer}.gsc-usr-group{min-height:100px;zoom:1;display:block;line-height:1.24;margin-top:-7px;margin-bottom:-7px;margin-left:20px}.gsc-usr-group-content{padding-top:1px;padding-bottom:3px}.gsc-usr-group-content-thumbnail{display:inline-block;vertical-align:top}.gsc-usr-group-head-result{display:inline-block;padding-left:6px}.gsc-usr-group-snippet{width:100%;height:3.6em;overflow:hidden}.gsc-usr-group-content-results{font-size:12px;padding-left:1px;width:80%;padding-top:7px}.gsc-usr-group-head-results{display:inline-block;font-size:13px;padding-left:6px;width:80%}.gs-webResult .gs-title .gs-title.gsc-usr-group-all-results{font-size:11px;line-height:10px}.gs-webResult .gs-title .gs-title.gsc-usr-group-all-results b{font-size:14px;font-weight:600}.gcsc-find-more-on-google,.gs-webResult .gs-title .gs-title.gsc-usr-group-heading b{color:#00c}.gcsc-find-more-on-google-magnifier{fill:#00c}", "",{"version":3,"sources":["default.css"],"names":[],"mappings":"AAKA,uCAEE,WAAY,CACZ,UACF,CACA,uDAEE,UACF,CACA,iCAEE,YACF,CAEA,uCAEE,qBAAsB,CACtB,qBACF,CACA,mDAEE,WAAY,CACZ,aAAc,CACd,QAAS,CACT,UAAW,CACX,iBACF,CACA,2CAEE,YACF,CACA,kCACE,kBACF,CAEA,iDACE,kBACF,CAEA,gBACE,cACF,CAEA,sBACE,YAAa,CACb,QAAS,CACT,OACF,CAEA,eACE,wBAAyB,CACzB,eACF,CAEA,4DAGE,wBAAyB,CAAzB,wBAAyB,CACzB,8CAA+C,CAC/C,iDAAkD,CAClD,yCAA0C,CAC1C,YACF,CACA,4DAEE,wBAAyB,CACzB,8CAA+C,CAC/C,iDAAkD,CAClD,yCAA0C,CAC1C,YACF,CAGA,iDAEE,WAAc,CACd,gBAAiB,CACjB,UAAW,CACX,qBAAsB,CAGtB,iBAAkB,CAClB,sBAAuB,CACvB,yBAA0B,CAE1B,wBAAqB,CACrB,wBAAyB,CACzB,wFAAyF,CACzF,6DAA8D,CAC9D,0DAA2D,CAC3D,yDAA0D,CAC1D,wDAAyD,CACzD,qDAAsD,CACtD,gGACF,CAEA,6DAEE,oBAAqB,CACrB,wBAAyB,CACzB,wFAAyF,CACzF,6DAA8D,CAC9D,0DAA2D,CAC3D,yDAA0D,CAC1D,wDAAyD,CACzD,qDAAsD,CACtD,gGACF,CAEA,6DAEE,6CAAiD,CACjD,qDAAyD,CACzD,kDACF,CAEA,0BACE,SACF,CAGA,yBACI,SAAU,CACV,QACJ,CAEA,sBACE,oBAAqB,CACrB,eAAiB,CACjB,UACF,CAEA,4CACE,oBAAqB,CACrB,aACF,CAEA,8CACE,oBAAqB,CACrB,cACF,CAEA,yDACE,yBACF,CAEA,4BACE,uBAAwB,CACxB,kBACF,CAEA,qBACE,YAAa,CACb,kBAAmB,CACnB,gBACF,CAGA,cACE,cACF,CAEA,6BACE,WACF,CACA,kBACE,WAAY,CACZ,aACF,CAKA,wDACE,YACF,CACA,cACE,eAAgB,CAChB,eAAgB,CAChB,WAAY,CACZ,4BACF,CAEA,eACE,oBAAqB,CACrB,iBAAsB,CACtB,cAAiB,CACjB,YAAe,CACf,eAAiB,CACjB,WAAY,CACZ,gBAAiB,CACjB,cAAe,CACf,iBACF,CAEA,8BAEE,gBAAyB,CAAzB,2BAAyB,CACzB,aACF,CAEA,gCACE,eAAgB,CAChB,UAAW,CACX,aAAc,CACd,cAAe,CACf,YACF,CAEA,iDAEE,aAAc,CACd,qBAAsB,CACtB,iBACF,CAEA,0BACE,aAGF,CAEA,yDAJE,qBAAsB,CACtB,eAMF,CAEA,2BACE,cACF,CAEA,0MAKE,qBACF,CACA,0CAEE,aACF,CACA,+CACE,cACF,CACA,uEAEE,UACF,CACA,+BACE,cAAe,CACf,eACF,CAEA,yCACE,cAAe,CACf,eACF,CAEA,wCACE,cAAe,CACf,gBACF,CAEA,0DACE,UACF,CAEA,yDACE,UAAW,CACX,WAAY,CACZ,eACF,CAEA,kBACE,kBACF,CACA,+CACE,wBACF,CAGA,qFAEE,wBAAyB,CACzB,cAAe,CACf,kBACF,CACA,iBACE,YAAa,CACb,eAAgB,CAEhB,oBACF,CACA,2EAEE,cACF,CAEA,qDAGE,gBAAiB,CACjB,iBACF,CAEA,oBACE,eAAgB,CAChB,gBACF,CAEA,oBACE,gBAAiB,CACjB,iBACF,CAEA,4CACE,cAAe,CACf,eACF,CAEA,wBACE,eAAgB,CAChB,gBACF,CAEA,mCACE,iBAAkB,CAClB,kBAAmB,CACnB,kBACF,CA2BA,w1BAME,UACF,CAEA,+QAME,UACF,CAEA,+DAEE,UACF,CAKA,yBACE,eACF,CAEA,0BACE,4BAA8B,CAC9B,cAAe,CACf,eAAiB,CAEjB,qBAAyB,CAAzB,wBAAyB,CACzB,QACF,CAEA,sBACE,UACF,CACA,wBACE,UACF,CAGA,4EAEE,YACF,CAOA,uFACE,aACF,CAOA,oCACE,YACF,CAEA,sBACE,aACF,CAEA,sBACE,YACF,CAEA,4CAEE,UACF,CAEA,qDAEE,UAAW,CACX,oBAAqB,CACrB,kBACF,CAEA,6BACE,WACF,CAEA,8CACE,oBACF,CAEA,oDACE,yBACF,CAEA,sDACE,oBAAqB,CACrB,aACF,CAEA,oFAKE,UACF,CAEA,0JAIE,UACF,CAEA,0FAOE,UACF,CAEA,6BACE,8BACF,CAEA,eACE,UACF,CAEA,aACE,UAAW,CACX,gBAAiB,CACjB,iBACF,CAEA,YACE,cACF,CAEA,qBACE,kEACF,CAEA,2BACE,wEACF,CAEA,wBACE,cAAe,CACf,eACF,CAEA,oDACE,UAAW,CACX,WAAY,CACZ,kBACF,CAEA,uCACE,UACF,CAEA,eACE,eAAgB,CAChB,gBAAiB,CACjB,iBACF,CAEA,aACE,kBACF,CAEA,2DAEE,cAAe,CACf,eACF,CAEA,+BACE,wBAA4B,CAC5B,qDAAyD,CACzD,6DAAiE,CACjE,0DAA8D,CAC9D,yDAA6D,CAC7D,wDACF,CAGA,iBACE,aAAc,CACd,cAAe,CACf,wBACF,CAEA,0BACE,aAAa,CACb,kBAAmB,CACnB,qBACF,CAEA,kCACE,UAAW,CACX,gBAAiB,CACjB,yBAA0B,CAC1B,UAAc,CACd,cACF,CAEA,4BACE,UAAW,CACX,WAAY,CACZ,0BAA8B,CAC9B,2BACF,CAEA,0BACE,yBACF,CAEA,6BACE,4BACF,CAEA,gCACE,eAAmB,CACnB,UACF,CAEA,mCACE,UAAc,CACd,UAAW,CACX,gBAAiB,CACjB,iBACF,CAGA,yBACE,oBAAqB,CACrB,cAAe,CACf,eACF,CACA,6BACE,eAAgB,CAChB,eACF,CACA,wDAEE,UAAc,CACd,cACF,CACA,eACE,gBAAiB,CACjB,MAAO,CACP,aAAc,CACd,gBAAiB,CACjB,eAAgB,CAChB,kBAAmB,CACnB,gBACF,CACA,uBACE,eAAgB,CAChB,kBACF,CACA,iCACE,oBAAqB,CACrB,kBACF,CACA,2BACE,oBAAqB,CACrB,gBACF,CACA,uBACE,UAAW,CACX,YAAa,CACb,eACF,CACA,+BACE,cAAe,CACf,gBAAiB,CACjB,SAAU,CACV,eACF,CACA,4BACE,oBAAoB,CACpB,cAAe,CACf,gBAAiB,CACjB,SACF,CACA,4DAEE,cAAe,CACf,gBACF,CACA,8DAGE,cAAe,CACf,eACF,CAOA,oFACE,UACF,CAEA,oCACE,SACF","file":"default.css","sourcesContent":["/**\n * Default Theme, v2.\n *\n */\n/* Slight reset to make the preview have ample padding. */\n.cse .gsc-control-cse,\n.gsc-control-cse {\n  padding: 1em;\n  width: auto;\n}\n.cse .gsc-control-wrapper-cse,\n.gsc-control-wrapper-cse {\n  width: 100%;\n}\n.cse .gsc-branding,\n.gsc-branding {\n  display: none;\n}\n/* Selector for entire element. */\n.cse .gsc-control-cse,\n.gsc-control-cse {\n  background-color: #fff;\n  border: 1px solid #fff;\n}\n.cse .gsc-control-cse:after,\n.gsc-control-cse:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.cse .gsc-resultsHeader,\n.gsc-resultsHeader {\n  border: block;\n}\ntable.gsc-search-box td.gsc-input {\n  padding-right: 24px;\n}\n\n.gsc-search-box-tools .gsc-search-box .gsc-input {\n  padding-right: 12px;\n}\n\ninput.gsc-input {\n  font-size: 16px;\n}\n/* Hide clear input X added by MSIE. */\n.gsc-input::-ms-clear {\n  display: none;\n  height: 0;\n  width: 0;\n}\n\n.gsc-input-box {\n  border: 1px solid #D9D9D9;\n  background: #fff;\n}\n\n.gsc-search-box .gsc-input>input:hover,\n.gsc-input-box-hover {\n  border: 1px solid #b9b9b9;\n  border-top-color: #a0a0a0;\n  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  outline: none;\n}\n.gsc-search-box .gsc-input>input:focus,\n.gsc-input-box-focus {\n  border: 1px solid #4d90fe;\n  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  outline: none;\n}\n\n/* Search button */\n.cse .gsc-search-button-v2,\n.gsc-search-button-v2 {\n  font-size: 0px;\n  padding: 6px 27px;\n  width: auto;\n  vertical-align: middle;\n\n  border: 1px solid #666666;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n\n  border-color: #3079ed;\n  background-color: #4d90fe;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));\n  background-image: -webkit-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -moz-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -ms-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -o-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: linear-gradient(top,#4d90fe,#4787ed);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed');\n}\n\n.cse .gsc-search-button-v2:hover,\n.gsc-search-button-v2:hover {\n  border-color: #2f5bb7;\n  background-color: #357ae8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));\n  background-image: -webkit-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -moz-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -ms-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -o-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: linear-gradient(top,#4d90fe,#357ae8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8');\n}\n\n.cse .gsc-search-button-v2:focus,\n.gsc-search-button-v2:focus {\n  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n  -webkit-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n  -moz-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n}\n\n.gsc-search-button-v2 svg {\n  fill: #fff;\n}\n\n/* Firefox button fix */\nbutton::-moz-focus-inner {\n    padding: 0;\n    border: 0\n}\n\n.gsc-refinementHeader {\n  text-decoration: none;\n  font-weight: bold;\n  color: #666;\n}\n\n.gsc-refinementHeader.gsc-refinementhActive {\n  text-decoration: none;\n  color: #DD4B39;\n}\n\n.gsc-refinementHeader.gsc-refinementhInactive {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.gsc-refinementHeader.gsc-refinementhInactive>span:hover {\n  text-decoration: underline;\n}\n\n.gsc-refinementhActive>span {\n  border-bottom: 3px solid;\n  padding-bottom: 2px;\n}\n\n.gsc-refinementsArea {\n  margin-top: 0;\n  padding-bottom: 4px;\n  padding-top: 10px;\n}\n\n/* Foont size for refinements */\n.gsc-tabsArea {\n  font-size: 11px;\n}\n/* For searcher tabs */\n.gsc-tabsArea > .gsc-tabHeader {\n  height: 27px;\n}\n.gsc-tabsArea > div {\n  height: 30px;\n  overflow: auto;\n}\n/* No spacers needed for keneddy refinements */\n.gsc-tabsArea .gs-spacer {\n  display: none;\n}\n.gsc-tabsArea .gs-spacer-opera {\n  display: none;\n}\n.gsc-tabsArea {\n  margin-top: 12px;\n  margin-bottom: 0;\n  height: 29px;\n  border-bottom: 1px solid #CCC;\n}\n/* Refinement tab properties */\n.gsc-tabHeader {\n  display: inline-block;\n  padding: 0 8px 1px 8px;\n  margin-right: 0px;\n  margin-top: 0px;\n  font-weight: bold;\n  height: 27px;\n  line-height: 27px;\n  min-width: 54px;\n  text-align: center;\n}\n/* Active refinement tab properties */\n.gsc-tabHeader.gsc-tabhActive {\n  border: 1px solid #ccc;\n  border-bottom-color: #fff;\n  color: #202020;\n}\n/* Inactive refinement tab properties */\n.gsc-tabHeader.gsc-tabhInactive {\n  background: #fff;\n  color: #666;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n}\n/* Inner wrapper for an image result */\n.gsc-imageResult-column,\n.gsc-imageResult-classic {\n  padding: .25em;\n  border: 1px solid #fff;\n  margin-bottom: 1em;\n}\n/* Inner wrapper for a result */\n.gsc-webResult.gsc-result {\n  padding: .25em;\n  border: 1px solid #fff;\n  margin-bottom: 0;\n}\n/* Inner wrapper for a result */\n.cse .gsc-webResult.gsc-result {\n  border: 1px solid #fff;\n  margin-bottom: 0;\n}\n/* Wrapper for a result. */\n.gsc-webResult .gsc-result {\n  padding: 10px 0 10px 0;\n}\n/* Result hover event styling */\n.cse .gsc-webResult.gsc-result:hover,\n.gsc-webResult.gsc-result:hover,\n.gsc-webResult.gsc-result.gsc-promotion:hover,\n.gsc-results .gsc-imageResult-classic:hover,\n.gsc-results .gsc-imageResult-column:hover {\n  border: 1px solid #fff;\n}\n.gs-web-image-box,\n.gs-promotion-image-box {\n  padding: 2px 0;\n}\n.gs-promotion-image-box img.gs-promotion-image {\n  max-width: 50px;\n}\n.gs-promotion-image-box img.gs-promotion-image,\n.gs-promotion-image-box {\n  width: 50px;\n}\n.gs-web-image-box img.gs-image {\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.gs-web-image-box-landscape img.gs-image {\n  max-width: 70px;\n  max-height: 50px;\n}\n\n.gs-web-image-box-portrait img.gs-image {\n  max-width: 50px;\n  max-height: 120px;\n}\n\n.gs-image-box.gs-web-image-box.gs-web-image-box-landscape {\n  width: 80px;\n}\n\n.gs-image-box.gs-web-image-box.gs-web-image-box-portrait {\n  width: 60px;\n  height: 50px;\n  overflow: hidden;\n}\n\n.gs-web-image-box {\n  text-align: inherit;\n}\n.gs-promotion-image-box img.gs-promotion-image {\n  border: 1px solid #ebebeb;\n}\n/*Promotion Settings*/\n/* The entire promo */\n.cse .gsc-webResult.gsc-result.gsc-promotion,\n.gsc-webResult.gsc-result.gsc-promotion {\n  background-color: #F6F6F6;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.gsc-result-info {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 8px;\n  padding-bottom: 10px;\n}\n.gs-promotion-text-cell .gs-visibleUrl,\n.gs-promotion-text-cell .gs-snippet {\n  font-size: 13px;\n}\n\n.gsc-table-result,\n.gsc-thumbnail-inside,\n.gsc-url-top {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.gs-promotion-table {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.gs-promotion table {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\ntable.gs-promotion-table-snippet-with-image{\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gs-promotion-text-cell {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.gs-promotion-text-cell-with-image {\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: top;\n}\n\n/* Promotion links */\n.cse .gs-promotion a.gs-title:link,\n.gs-promotion a.gs-title:link,\n.cse .gs-promotion a.gs-title:link *,\n.gs-promotion a.gs-title:link *,\n.cse .gs-promotion .gs-snippet a:link,\n.gs-promotion .gs-snippet a:link {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:visited,\n.gs-promotion a.gs-title:visited,\n.cse .gs-promotion a.gs-title:visited *,\n.gs-promotion a.gs-title:visited *,\n.cse .gs-promotion .gs-snippet a:visited,\n.gs-promotion .gs-snippet a:visited {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:hover,\n.gs-promotion a.gs-title:hover,\n.cse .gs-promotion a.gs-title:hover *,\n.gs-promotion a.gs-title:hover *,\n.cse .gs-promotion .gs-snippet a:hover,\n.gs-promotion .gs-snippet a:hover {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:active,\n.gs-promotion a.gs-title:active,\n.cse .gs-promotion a.gs-title:active *,\n.gs-promotion a.gs-title:active *,\n.cse .gs-promotion .gs-snippet a:active,\n.gs-promotion .gs-snippet a:active {\n  color: #15C;\n}\n/* Promotion snippet */\n.cse .gs-promotion .gs-snippet,\n.gs-promotion .gs-snippet,\n.cse .gs-promotion .gs-title .gs-promotion-title-right,\n.gs-promotion .gs-title .gs-promotion-title-right,\n.cse .gs-promotion .gs-title .gs-promotion-title-right *,\n.gs-promotion .gs-title .gs-promotion-title-right * {\n  color: #000;\n}\n/* Promotion url */\n.cse .gs-promotion .gs-visibleUrl,\n.gs-promotion .gs-visibleUrl {\n  color: #093;\n}\n/* Style for auto-completion table\n * .gsc-completion-selected : styling for a suggested query which the user has moused-over\n * .gsc-completion-container : styling for the table which contains the completions\n */\n.gsc-completion-selected {\n  background: #EEE;\n}\n\n.gsc-completion-container {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  background: white;\n  border: 1px solid #CCC;\n  border-top-color: #D9D9D9;\n  margin: 0;\n}\n\n.gsc-completion-title {\n  color: #15C;\n}\n.gsc-completion-snippet {\n  color: #000;\n}\n\n/* Full URL */\n.gs-webResult div.gs-visibleUrl-short,\n.gs-promotion div.gs-visibleUrl-short {\n  display: none;\n}\n.gs-webResult div.gs-visibleUrl-long,\n.gs-promotion div.gs-visibleUrl-long {\n  display: block;\n}\n\n/* Keneddy shows url at the top of the snippet, after title */\n.gsc-url-top {\n  display: block;\n}\n\n.gsc-url-bottom {\n  display: none;\n}\n\n/* Keneddy shows thumbnail inside the snippet, under title and url */\n.gsc-thumbnail-left {\n  display: none;\n}\n\n.gsc-thumbnail-inside {\n  display: block;\n}\n\n.gsc-result .gs-title {\n  height: 1.2em;\n}\n\n.gs-result .gs-title,\n.gs-result .gs-title * {\n  color: #15C;\n}\n\n.gs-result a.gs-visibleUrl,\n.gs-result .gs-visibleUrl {\n  color: #093;\n  text-decoration: none;\n  padding-bottom: 2px;\n}\n\n.gsc-results .gsc-cursor-box {\n  margin: 10px;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-page {\n  text-decoration: none;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-page:hover {\n  text-decoration: underline;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-current-page {\n  text-decoration: none;\n  color: #DD4B39;\n}\n\n.gsc-preview-reviews,\n.gsc-control-cse .gs-snippet,\n.gsc-control-cse .gs-promotion em,\n.gsc-control-cse .gs-snippet,\n.gsc-control-cse .gs-promotion em {\n  color: #333;\n}\n\n.gsc-control-cse-zh_CN .gs-snippet b,\n.gsc-control-cse-zh_CN .gs-promotion em,\n.gsc-control-cse-zh_TW .gs-snippet b,\n.gsc-control-cse-zh_TW .gs-promotion em {\n  color: #C03;\n}\n\n.gsc-snippet-metadata,\n.gsc-role,\n.gsc-tel,\n.gsc-org,\n.gsc-location,\n.gsc-reviewer,\n.gsc-author {\n  color: #666;\n}\n\n.gsc-wrapper.gsc-thinWrapper {\n  border-right: 1px solid #e9e9e9;\n}\n\n.gs-spelling a {\n  color: #15C;\n}\n\n.gs-spelling {\n  color: #333;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n\n.gs-snippet {\n  margin-top: 1px;\n}\n\ndiv.gsc-clear-button {\n  background-image: url('//www.google.com/cse/static/css/v2/clear.png');\n}\n\ndiv.gsc-clear-button:hover {\n  background-image: url('//www.google.com/cse/static/css/v2/clear-hover.png');\n}\n\n.gsc-preview-reviews ul {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gsc-completion-container .gsc-completion-icon-cell {\n  width: 42px;\n  height: 42px;\n  padding-right: 10px;\n}\n\n.gsc-branding-text, .gcsc-branding-text {\n  color: #666;\n}\n\n.gcsc-branding {\n  padding-top: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.gsc-adBlock {\n  padding-bottom: 5px;\n}\n\n.gsc-table-cell-snippet-close,\n.gsc-table-cell-snippet-open {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gsc-selected-option-container {\n  background-color: whiteSmoke;\n  background-image: linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -webkit-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -moz-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -ms-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -o-linear-gradient(top,whiteSmoke,#F1F1F1);\n}\n\n/* Facet box css */\n.gsc-context-box {\n  font-size: 83%;\n  margin-top: 3px;\n  border-collapse: collapse;\n}\n\n.gsc-context-box .gsc-col {\n  padding:1px 0;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.gsc-context-box .gsc-facet-label {\n  width: 65px;\n  padding-left: 2px;\n  text-decoration: underline;\n  color: #0000cc;\n  cursor: pointer;\n}\n\n.gsc-context-box .gsc-chart {\n  width: 32em;\n  padding: 3px;\n  border-left: 1px solid #0000cc;\n  border-right: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-top {\n  border-top: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-bottom {\n  border-bottom: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-chart div {\n  background: #0000cc;\n  height: 9px;\n}\n\n.gsc-context-box .gsc-facet-result {\n  color: #0000cc;\n  width: 30px;\n  text-align: right;\n  padding-right: 5px;\n}\n\n/* Universal one box css. */\n.gsc-usr-group-thumbnail {\n  display: inline-block;\n  max-width: 72px;\n  max-height: 72px;\n}\n.gsc-usr-group-thumbnail img {\n  max-height: 72px;\n  overflow: hidden;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-heading {\n  color: #0000cc;\n  cursor: pointer;\n}\n.gsc-usr-group {\n  min-height: 100px;\n  zoom: 1;\n  display: block;\n  line-height: 1.24;\n  margin-top: -7px;\n  margin-bottom: -7px;\n  margin-left: 20px;\n}\n.gsc-usr-group-content {\n  padding-top: 1px;\n  padding-bottom: 3px;\n}\n.gsc-usr-group-content-thumbnail {\n  display: inline-block;\n  vertical-align: top;\n}\n.gsc-usr-group-head-result {\n  display: inline-block;\n  padding-left: 6px;\n}\n.gsc-usr-group-snippet {\n  width: 100%;\n  height: 3.6em;\n  overflow: hidden;\n}\n.gsc-usr-group-content-results {\n  font-size: 12px;\n  padding-left: 1px;\n  width: 80%;\n  padding-top: 7px;\n}\n.gsc-usr-group-head-results {\n  display:inline-block;\n  font-size: 13px;\n  padding-left: 6px;\n  width: 80%;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-all-results {\n  font-size: 11px;\n  line-height: 10px;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-all-results\nb {\n  font-size: 14px;\n  font-weight: 600;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-heading\nb {\n  color: #0000cc;\n}\n\n.gcsc-find-more-on-google {\n  color: #0000cc;\n}\n\n.gcsc-find-more-on-google-magnifier {\n  fill: #0000cc;\n}\n"]}]);



/***/ }),

/***/ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/style/addthis.css":
/*!********************************************************************************************************************************************************************!*\
  !*** /usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!/usr/lib/node_modules/postcss-loader/src?sourceMap!./lib-for-link/src/global-header/style/addthis.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js */ "../../../../../usr/lib/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".addthis-smartlayers .atss{z-index:auto}@media (min-width:480px){.addthis-smartlayers-mobile{display:none!important}}.addthis-smartlayers .at-custom-sidebar-counter{background-color:#fff;min-height:31px;cursor:default}", "",{"version":3,"sources":["addthis.css"],"names":[],"mappings":"AAAA,2BACE,YACF,CAEA,yBACE,4BACE,sBACF,CACF,CAEA,gDACE,qBAAuB,CACvB,eAAgB,CAChB,cACF","file":"addthis.css","sourcesContent":[".addthis-smartlayers .atss {\n  z-index: auto;\n}\n\n@media (min-width: 480px) {\n  .addthis-smartlayers-mobile {\n    display: none !important;\n  }\n}\n\n.addthis-smartlayers .at-custom-sidebar-counter {\n  background-color: white;\n  min-height: 31px;\n  cursor: default;\n}\n\n@media (min-width: 480px) and (max-width: 979px) {\n  /*\n  .nav-collapse ul li {\n      padding-left: 50px;\n  }\n  */\n  /*\n  .sumome-share-client-wrapper.sumome-share-client-wrapper-left-page {\n    z-index: auto !important;\n  }\n  */\n}\n"]}]);



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

let rm2 = function (postId, postTitle, postUrl, postAuthor, postTimestamp, postNumComments) {
  //let postId = getBloggerPostsVariable('data-post-id')[0]

  //postUrl = postUrl + '#more'

  //var _id = postId;
  //var _labels = $("#lp" + postId).clone().show().html();
  var postElement = document.getElementById('p' + postId);
  if (!postElement) {
    return
  }
  let imgtag = '';
  let ifrtag = '';
  let ifrsrc = '';
  let ifrtb = -1;
  let img = postElement.getElementsByTagName('img');
  let ifr = postElement.getElementsByTagName('iframe');
  for (var i = 0; i < ifr.length; i++) {
    ifrsrc = ifr[i]['src'];
    if (ifrsrc.indexOf('//www.youtube.com/embed/') != -1) {
      ifrtb = i;
      break
    } else {
      if (ifrsrc.indexOf('//player.vimeo.com/video/') != -1) {
        ifrtb = i;
        break
      } else {
        if (ifrsrc.indexOf('//www.dailymotion.com/embed/video/') != -1) {
          ifrtb = i;
          break
        } else {
          if (ifrsrc.indexOf('//w.soundcloud.com/player/') != -1) {
            ifrtb = i;
            break
          }
        }
      }
    }
  }
  //console.log(postId)
  if (ifrtb !== -1) {
    ifrtag = '<div class="entry-video"><iframe width="840" height="472" src=""'
            + ifrsrc
            + '?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>'
    //$(ifrtag).prependTo($(postElement))
    
    $(postElement).find('.entry-image').html(ifrtag)
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
    let imageUrl = $(postElement).find('.entry-content img:first').attr('src')
    //$(postElement).find('.entry-image .thumb').attr('src', imageUrl)
    if (imageUrl !== undefined) {
      //console.log(imageUrl)
      $(postElement).find('.entry-image img.thumb').attr('src', imageUrl)
      $(postElement).find('.entry-image').css('background-image', 'url(' + imageUrl + ')')
    } else {
      $(postElement).find('.entry-image').hide()
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
}

let stripTags2 = function (a) {
  return a.replace(/<img[^>]*>/ig, '');
}

let after_rm2 = function (_id) {
  var _img_div = jQuery("#" + _id + " div.entry-image:first");
  //console.log(_img_div.length);
  var _img_src = _img_div.find('img.thumb:first').attr('src');
  //console.log(_img_src)
  _img_div.css('background-image', 'url("' + _img_src + '")');
  _img_div.attr('data-bg-src', _img_src)
}

$(() => {
  // 好像真的不用做這些，我可以直接修改耶

  $('.post-variables').each((i, span) => {
    //console.log(i)
    let postVariables = $(span).find('.post-variable')
    rm2(postVariables.attr('data-post-id')
            , postVariables.attr('data-post-title')
            , postVariables.attr('data-post-url')
            , postVariables.attr('data-post-author')
            , postVariables.attr('data-post-timestamp')
            , postVariables.attr('data-post-numComments'))
  })
})

/***/ }),

/***/ "./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./font-awesome.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/font-awesome.css");

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

/***/ "./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css":
/*!********************************************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./googleapis-font-family-crete-round.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css");

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

/***/ "./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css":
/*!*************************************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./googleapis-font-family-lato.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css");

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

/***/ "./lib-for-link/src/global-header/btn-navbar/btn-navbar.js":
/*!*****************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/btn-navbar.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(() => {
  $('#masthead .btn-navbar').click(() => {
    $('#masthead .nav-collapse').toggleClass('collapse')
  })
  
  let testOpen = () => {
    $('#masthead .btn-navbar').click()
  }
  //testOpen()  
})



/***/ }),

/***/ "./lib-for-link/src/global-header/btn-navbar/btn-navbar.less":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./btn-navbar.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less");

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

/***/ "./lib-for-link/src/global-header/btn-navbar/nav-collapse.less":
/*!*********************************************************************!*\
  !*** ./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./nav-collapse.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less");

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

/***/ "./lib-for-link/src/global-header/go-top/go-top.js":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/go-top/go-top.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//---------------------------------------

$('.go-top').click(function(){
  $('.st-content').animate({scrollTop:0},'slow');
  $('html, body').animate({scrollTop:0},'slow');
  return false;
});

/***/ }),

/***/ "./lib-for-link/src/global-header/go-top/go-top.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/go-top/go-top.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./go-top.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/go-top/go-top.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/default.css":
/*!***************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/default.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./default.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/gsc-search/default.css");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less":
/*!***********************************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./gsc-search-bar-placeholder.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less":
/*!***********************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./gsc-search-bar.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less");

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

/***/ "./lib-for-link/src/global-header/gsc-search/gsc-search-result.less":
/*!**************************************************************************!*\
  !*** ./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./gsc-search-result.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less");

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
  s.parentNode.insertBefore(gcse, s);
  
  
  //initSearchInput()
  /*
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  */
  
  $(() => {
    //console.log($('.gcse-placeholder').length)
    $('.gcse-placeholder').submit(function () {
      return menu_search_submit(this);
    })
    
    $('.srch_btn').click(() => {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder:first').submit()
    })
    
    $('.gcse-placeholder-dropdown').submit(function () {
      return menu_search_submit(this);
    })
    $('.srch_btn-dropdown').click(() => {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder-dropdown').submit()
    })
    
    var testSearch = () => {
      $('.gcse-placeholder:first input').val('test')
      setTimeout(() => {
        $('.gcse-placeholder:first').submit()
      }, 1000)
    }
    //testSearch()
    
    var testSearchDropdown = () => {
      $('.gcse-placeholder-dropdown input').val('test')
      setTimeout(() => {
        $('.gcse-placeholder-dropdown').submit()
      }, 1000)
    }
    //testSearchDropdown()
  })
    
  
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

var menu_search_submit = function (_form) {
  let _query
  if (typeof(_form['q']) !== "undefined") {
    _query = _form.q.value
  }
  else if (typeof(_form['search']) !== "undefined") {
    _query = _form.search.value
  }
  else {
    //console.log('找不到')
    return false
  }
  
  _query = _query.trim()
  if (_query === '') {
    return false
  }
  
  
  ga("send", "event", "search", _query, 1);
  //console.log("送出GA事件 search");

  $(".gcse input.gsc-input").val(_query)
  $(".gcse .gsc-search-button").click()
  //console.log(['query', _query])
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
      $('body').addClass('fixed-nav')
      $('#masthead').addClass('fixed-nav')
              //.next().css('padding-top', '5px');

    } else {
      $('body').removeClass('fixed-nav')
      $('#masthead').removeClass('fixed-nav')
              //.next().css('padding-top', '0');
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


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./masthead.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/masthead/masthead.less");

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
}(this, function () {

  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-';

  // Suffix for the key name on the expiration items in localStorage
  var CACHE_SUFFIX = '-cacheexpiration';

  // expiration date radix (set to Base-36 for most space savings)
  var EXPIRY_RADIX = 10;

  // time resolution in milliseconds
  var expiryMilliseconds = 60 * 1000;
  // ECMAScript max Date (epoch + 1e8 days)
  var maxDate = calculateMaxDate(expiryMilliseconds);

  var cachedStorage;
  var cachedJSON;
  var cacheBucket = '';
  var warnings = false;

  // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.
  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    }

    // some browsers will throw an error if you try to access local storage (e.g. brave browser)
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
  }

  // Check to set if the error is us dealing with being out of space
  function isOutOfSpace(e) {
    return e && (
      e.name === 'QUOTA_EXCEEDED_ERR' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
      e.name === 'QuotaExceededError'
    );
  }

  // Determines if native JSON (de-)serialization is supported in the browser.
  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = (window.JSON != null);
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
    return Math.floor((new Date().getTime())/expiryMilliseconds);
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
    var prefixRegExp = new RegExp('^' + CACHE_PREFIX + escapeRegExpSpecialCharacters(cacheBucket) + '(.*)');
    // Loop in reverse as removing items will change indices of tail
    for (var i = localStorage.length-1; i >= 0 ; --i) {
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
      var expirationTime = parseInt(expr, EXPIRY_RADIX);

      // Check if we should actually kick item out of storage
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
    return Math.floor(8.64e15/expiryMilliseconds);
  }

  var lscache = {
    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     * @return true if the value was inserted successfully
     */
    set: function(key, value, time) {
      if (!supportsStorage()) return false;

      // If we don't get a string value, try to stringify
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
          eachKey(function(key, exprKey) {
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
          });
          // Sorts the keys with oldest expiration time last
          storedKeys.sort(function(a, b) { return (b.expiration-a.expiration); });

          var targetSize = (value||'').length;
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
      }

      // If a time is specified, store expiration info in localStorage
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
    get: function(key) {
      if (!supportsStorage()) return null;

      // Return the de-serialized item if not expired
      if (flushExpiredItem(key)) { return null; }

      // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.
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
    remove: function(key) {
      if (!supportsStorage()) return;

      flushItem(key);
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushItem(key);
      });
    },

    /**
     * Flushes expired lscache items and expiry markers without affecting rest of localStorage
     */
    flushExpired: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushExpiredItem(key);
      });
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     * @param {string} bucket
     */
    setBucket: function(bucket) {
      cacheBucket = bucket;
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function() {
      cacheBucket = '';
    },

    /**
     * @returns {number} The currently set number of milliseconds each time unit represents in
     *   the set() function's "time" argument.
     */
    getExpiryMilliseconds: function() {
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
    setExpiryMilliseconds: function(milliseconds) {
        expiryMilliseconds = milliseconds;
        maxDate = calculateMaxDate(expiryMilliseconds);
    },

    /**
     * Sets whether to display warnings when an item is removed from the cache or not.
     */
    enableWarnings: function(enabled) {
      warnings = enabled;
    }
  };

  // Return the module
  return lscache;
}));


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
  getJSON: function (url, callback, expiredMinute) {
    if (this.getJSONLock === true) {
      setTimeout(() => {
        this.getJSON(url, callback, expiredMinute)
      }, 500)
      return
    }
    
    if (typeof(expiredMinute) !== 'number') {
      expiredMinute = this.expiredMinute
    }
    
    let getHeader = 'getHeader-'
    let lscacheKey = getHeader + url
    //console.log(lscacheKey)
    
    let data = lscache.get(lscacheKey)
    if (data !== null) {
      if (typeof(callback) === 'function') {
        //console.log('lscached: ' + url)
        callback(data)
      }
      return
    }
    else {
      /*
      if (url.indexOf('callback=?') > -1) {
        url = url.split('callback=?').join('callback=a')
      }
      */
      this.getJSONLock = true
      $.getJSON(url, (data) => {
        this.getJSONLock = false
        //if (data.indexOf('a(') > -1) {
        //  data = data.slice(data.indexOf('a(') + 2, data.length - 2)
        //}
        lscache.set(lscacheKey, data, expiredMinute)
        if (typeof(callback) === 'function') {
          callback(data)
        }
      })
    }
  }
}

/***/ }),

/***/ "./lib-for-link/src/global-header/script/back-button.js":
/*!**************************************************************!*\
  !*** ./lib-for-link/src/global-header/script/back-button.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ----------------------------------
// 20160522 回到上一頁的功能：如果上一頁不是布丁布丁吃什麼，那就隱藏

var _header_back_button_click = function () {

  var _back_type = "back";

  if (typeof (document.referrer) !== "string") {
    _back_type = "index";
  } else {
    var _needle = [
      "http://blog.pulipuli.info/",
      "http://pulipuli.info/",
      "http://pulipuli.blogspot.com/",
      "http://pulipuli.blogspot.tw/"
    ];

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
  $('#masthead header .back-button').click(_header_back_button_click)
})


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
getBloggerVariable = function (key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key
  }
  
  let valueProcess = (value) => {
    if (value === undefined) {
      return
    }
    else if (value === 'null') {
      return null
    }
    else if (value.startsWith('{') && value.endsWith('}')) {
      try {
        value = JSON.parse(value)
      }
      catch (e) { }
      return value
    }
    else {
      return value
    }
  }
  
  let ele
  if (key.startsWith('data-blog-')) {
    ele = $('.blog-variables')
  }
  else if (key.startsWith('data-post-')) {
    ele = $('.post-variable')
  }
  else if (key.startsWith('data-label-')) {
    ele = $('.label-variable')
  }
  
  if (ele.length === 1 && !key.startsWith('data-label-')) {
    let value = ele.attr(key)
    value = valueProcess(value)
    return value
  }
  else {
    let output = []
    ele.each((i, item) => {
      let value = $(item).attr(key)
      //console.log([key, value])
      value = valueProcess(value)
      output.push(value)
    })
    return output
  }
}

/**
 * @author Pulipuli Chen 20190307 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerPostsVariable = function (key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key
  }
  
  let valueProcess = (value) => {
    if (value === undefined) {
      return
    }
    else if (value === 'null') {
      return null
    }
    else if (value.startsWith('{') && value.endsWith('}')) {
      try {
        value = JSON.parse(value)
      }
      catch (e) { }
      return value
    }
    else {
      return value
    }
  }
  
  let output = []
  $('.post-variables').each((i, postVariables) => {
    let ele
    if (key.startsWith('data-post-')) {
      ele = $(postVariables).find('.post-variable')
    } else if (key.startsWith('data-label-')) {
      ele = $(postVariables).find('.label-variable')
    }

    if (ele.length === 1 && !key.startsWith('data-label-')) {
      let value = ele.attr(key)
      value = valueProcess(value)
      output.push(value)
      //return value
    } else {
      let postOutput = []
      ele.each((i, item) => {
        let value = $(item).attr(key)
        //console.log([key, value])
        value = valueProcess(value)
        postOutput.push(value)
      })
      output.push(postOutput)
    }
  })  // $('.post-variables').each((i, postVariables) => {
  return output
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
}

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
(function _(a,b,c,d,e){var f=window.console;f&&Math.floor(new Date().getTime()/1e3)-b>7*24*60*60&&f.warn("The Facebook JSSDK is more than 7 days old.");if(window[c])return;if(!window.JSON)return;var g=window[c]={__buffer:{replay:function(){var a=this,b=function(d){var b=window[c];a.calls[d][0].split(".").forEach(function(a){return b=b[a]});b.apply(null,a.calls[d][1])};for(var d=0;d<this.calls.length;d++)b(d);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(a){g.__buffer.opts=a}};for(var b=0;b<d.length;b++){f=d[b];if(f in g)continue;var h=f.split("."),i=h.pop(),j=g;for(var k=0;k<h.length;k++)j=j[h[k]]||(j[h[k]]={});j[i]=function(a){if(a==="init")return;return function(){g.__buffer.calls.push([a,Array.prototype.slice.call(arguments)])}}(f)}k=a;h=/Chrome\/(\d+)/.exec(navigator.userAgent);h&&Number(h[1])>=55&&"assign"in Object&&"findIndex"in[]&&(k+="&ua=modern_es6");j=document.createElement("script");j.src=k;j.async=!0;e&&(j.crossOrigin="anonymous");i=document.getElementsByTagName("script")[0];i.parentNode&&i.parentNode.insertBefore(j,i)})("https:\/\/connect.facebook.net\/en_US\/all.js?hash=c24a3668728a59a4eebd6931668369c5", 1551359715, "FB", ["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"], false);

// --------------
// 20181226 FB粉專
$(function () {
    _load_fan_page()
});

var _load_fan_page = function () {
  $('.widget.HTML.fb-fan-page .widget-content').html('<iframe src="//www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpulipuli.blogspot&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=391880581194257" width="350" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
}

/***/ }),

/***/ "./lib-for-link/src/global-header/script/google-analytics.js":
/*!*******************************************************************!*\
  !*** ./lib-for-link/src/global-header/script/google-analytics.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//ga('create', 'UA-37178375-1', 'auto');    // 原始的呼叫方法

// IMPORTANT: This is just example data for demonstration purposes to send *something* to GA. Populate your `customUserId` some other way. DO NOT COPY THIS.
  var prefix = ['abc', 'def', 'ghi'],
      middle = ['123', '456', '789'],
      suffix = ['rst', 'uvw', 'xyz'],
      random = function() {
          return Math.floor(Math.random() * 3);
      };
 
  // IMPORTANT: POPULATE YOUR OWN `customUserId` HERE...
  // Simple pseudo-random user id - 27 possible values
  // This is *just* some "random" text that we're using as userIds. DO NOT COPY THIS.
  // You'll need to implement something here linked to your customer database, CRM system, mailing list or whatever you're using
  var customUserId = prefix[random()] + '-' + middle[random()] + '-' + suffix[random()]; // e.g. abc-123-rst
 
ga('create', 'UA-37178375-1', {'userId': customUserId});   // 20161118 嘗試加入userId看看
ga('require', 'displayfeatures');
ga('set', 'dimension1', customUserId);

ga('send', 'pageview');

// ----------------------------------------
/**
 * 20161118 加入事件設定
 */
  
 $(function () {
     
     // ------------------------
     // 搜尋
     var _check_ga_search_ready = function () {
         if ($(".gsc-search-button").length === 0) {
             setTimeout(_check_ga_search_ready, 1000);
         }
         else {
             $(".gsc-search-button:first").click(function () {
                 ga("send", "event", "search", $("input.gsc-input:first").val(), 1);
                 //console.log("送出GA event search");
             });
         }
     };
     _check_ga_search_ready();
     
     // ----------------------------
     // 分享
     $(".social-button").click(function () {
         //var _btn = $(this);
         //var _link = _btn.parent("aside:first");
         ga("send", "event", "share", $(this).attr("data-title"), 1);
        //console.log("送出GA event search");
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
if (typeof(PULI_UTILS) === "undefined") {
	PULI_UTILS = {};
}
 
if (typeof PULI_UTILS.post === "undefined") {
	PULI_UTILS.post = {};
}

//----------------------------------

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
	
	_message = "[PULIPULI] " + _message;
	//console.trace(_message);
};
		
/**
 * 確認Blogger是否是全文網頁
 * @return {boolean}
 */
PULI_UTILS.is_blogger_fullpage = function()
{
	var href_array = location.href.split("/");
	//var href_array2 = location.href.split("\\");
	var _is_fulllpage = (href_array.length > 5 && href_array[4] !== "label");
	var _is_file = href_array[0] !== "file:";
	var _is_localhost = (href_array[2] === 'localhost');
	var _is_localhost_fullpage = (href_array[href_array.length-1] === 'fullpage.html');
	
	if (_is_localhost) {
		if (_is_localhost_fullpage) {
		return true;
	}
	else {
		return false;
	}
	}
	
	if (_is_fulllpage 
			&& _is_file) {
		//console.log('is_blogger_fullpage: true');
		return true;
	}
	else {
		//console.log('is_blogger_fullpage: false');
		return false;
	}
};

/**
 * 確認Blogger是否是全文網頁
 * @return {boolean}
 */
PULI_UTILS.is_guess_message = function()
{
	var _needle = "/2005/12/blogger_113544406852218769.html";
	var _href = location.href;
	return (_href.substr((_href.length - _needle.length), _needle.length ) === _needle);
};

/**
 * 建立獨一無二的ID
 * @return {integer}
 */
PULI_UTILS.create_id = function () {
    return (new Date()).getTime() + '';
};

var _page_index = 0;
PULI_UTILS.create_page_id = function () {
    var _pagename = location.pathname.split("/").slice(-1);
    if (typeof(_pagename[0]) === "string") {
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


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./random_posts.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/random_posts.less");

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


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./sidebar.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/sidebar/sidebar.less");

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

/***/ "./lib-for-link/src/global-header/style/2_style.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/2_style.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./2_style.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/2_style.less");

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

/***/ "./lib-for-link/src/global-header/style/3_custom_style.less":
/*!******************************************************************!*\
  !*** ./lib-for-link/src/global-header/style/3_custom_style.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./3_custom_style.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/3_custom_style.less");

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

/***/ "./lib-for-link/src/global-header/style/addthis.css":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/addthis.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!./addthis.css */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!./lib-for-link/src/global-header/style/addthis.css");

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

/***/ "./lib-for-link/src/global-header/style/content.less":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/content.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./content.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/content.less");

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

/***/ "./lib-for-link/src/global-header/style/footer.less":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/footer.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./footer.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/footer.less");

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

/***/ "./lib-for-link/src/global-header/style/header.less":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/header.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./header.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/header.less");

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

/***/ "./lib-for-link/src/global-header/style/index.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/index.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./index.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/index.less");

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

/***/ "./lib-for-link/src/global-header/style/style.less":
/*!*********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/style.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../../../../usr/lib/node_modules/postcss-loader/src?sourceMap!../../../../../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./style.less */ "../../../../../usr/lib/node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../usr/lib/node_modules/postcss-loader/src/index.js?sourceMap!../../../../../usr/lib/node_modules/less-loader/dist/cjs.js?sourceMap!./lib-for-link/src/global-header/style/style.less");

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