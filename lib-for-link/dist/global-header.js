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

var _0xd44f=["\x53\x20\x62\x3D\x5B\x22\x5C\x6B\x22\x2C\x22\x5C\x31\x76\x5C\x70\x5C\x66\x5C\x76\x22\x2C\x22\x5C\x69\x5C\x6C\x5C\x66\x5C\x71\x5C\x61\x22\x2C\x22\x5C\x69\x5C\x45\x5C\x6C\x5C\x66\x5C\x67\x22\x2C\x22\x22\x2C\x22\x5C\x72\x5C\x61\x5C\x45\x5C\x6C\x5C\x65\x5C\x71\x5C\x61\x22\x2C\x22\x5C\x44\x5C\x61\x5C\x67\x5C\x31\x73\x5C\x6C\x5C\x61\x5C\x6D\x5C\x61\x5C\x76\x5C\x67\x5C\x31\x65\x5C\x4A\x5C\x31\x75\x5C\x77\x22\x2C\x22\x5C\x66\x5C\x6D\x5C\x44\x22\x2C\x22\x5C\x44\x5C\x61\x5C\x67\x5C\x31\x73\x5C\x6C\x5C\x61\x5C\x6D\x5C\x61\x5C\x76\x5C\x67\x5C\x69\x5C\x31\x65\x5C\x4A\x5C\x52\x5C\x65\x5C\x44\x5C\x32\x6D\x5C\x65\x5C\x6D\x5C\x61\x22\x2C\x22\x5C\x66\x5C\x48\x5C\x72\x5C\x65\x5C\x6D\x5C\x61\x22\x2C\x22\x5C\x6C\x5C\x61\x5C\x76\x5C\x44\x5C\x67\x5C\x43\x22\x2C\x22\x5C\x69\x5C\x72\x5C\x71\x22\x2C\x22\x5C\x6A\x5C\x6A\x5C\x49\x5C\x49\x5C\x49\x5C\x46\x5C\x4A\x5C\x70\x5C\x4B\x5C\x67\x5C\x4B\x5C\x4C\x5C\x61\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x5C\x61\x5C\x6D\x5C\x4C\x5C\x61\x5C\x77\x5C\x6A\x22\x2C\x22\x5C\x66\x5C\x76\x5C\x77\x5C\x61\x5C\x31\x71\x5C\x31\x48\x5C\x48\x22\x2C\x22\x5C\x6A\x5C\x6A\x5C\x45\x5C\x6C\x5C\x65\x5C\x4A\x5C\x61\x5C\x72\x5C\x46\x5C\x42\x5C\x66\x5C\x6D\x5C\x61\x5C\x70\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x5C\x42\x5C\x66\x5C\x77\x5C\x61\x5C\x70\x5C\x6A\x22\x2C\x22\x5C\x6A\x5C\x6A\x5C\x49\x5C\x49\x5C\x49\x5C\x46\x5C\x77\x5C\x65\x5C\x66\x5C\x6C\x5C\x4A\x5C\x6D\x5C\x70\x5C\x67\x5C\x66\x5C\x70\x5C\x76\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x5C\x61\x5C\x6D\x5C\x4C\x5C\x61\x5C\x77\x5C\x6A\x5C\x42\x5C\x66\x5C\x77\x5C\x61\x5C\x70\x5C\x6A\x22\x2C\x22\x5C\x6A\x5C\x6A\x5C\x49\x5C\x46\x5C\x69\x5C\x70\x5C\x4B\x5C\x76\x5C\x77\x5C\x71\x5C\x6C\x5C\x70\x5C\x4B\x5C\x77\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x5C\x45\x5C\x6C\x5C\x65\x5C\x4A\x5C\x61\x5C\x72\x5C\x6A\x22\x2C\x22\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x42\x5C\x66\x5C\x77\x5C\x61\x5C\x70\x5C\x68\x5C\x6E\x5C\x6F\x5C\x66\x5C\x48\x5C\x72\x5C\x65\x5C\x6D\x5C\x61\x5C\x6B\x5C\x49\x5C\x66\x5C\x77\x5C\x67\x5C\x43\x5C\x41\x5C\x68\x5C\x31\x4E\x5C\x31\x6B\x5C\x31\x69\x5C\x68\x5C\x6B\x5C\x43\x5C\x61\x5C\x66\x5C\x44\x5C\x43\x5C\x67\x5C\x41\x5C\x68\x5C\x31\x6B\x5C\x31\x46\x5C\x31\x61\x5C\x68\x5C\x6B\x5C\x69\x5C\x72\x5C\x71\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x31\x4B\x5C\x42\x5C\x31\x4D\x5C\x41\x5C\x6D\x5C\x61\x5C\x77\x5C\x66\x5C\x4B\x5C\x6D\x5C\x31\x66\x5C\x72\x5C\x61\x5C\x6C\x5C\x41\x5C\x31\x69\x5C\x68\x5C\x6B\x5C\x48\x5C\x72\x5C\x65\x5C\x6D\x5C\x61\x5C\x4C\x5C\x70\x5C\x72\x5C\x77\x5C\x61\x5C\x72\x5C\x41\x5C\x68\x5C\x31\x69\x5C\x68\x5C\x6B\x5C\x65\x5C\x6C\x5C\x6C\x5C\x70\x5C\x49\x5C\x48\x5C\x4B\x5C\x6C\x5C\x6C\x5C\x69\x5C\x71\x5C\x72\x5C\x61\x5C\x61\x5C\x76\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x66\x5C\x48\x5C\x72\x5C\x65\x5C\x6D\x5C\x61\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x22\x2C\x22\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x66\x5C\x6D\x5C\x65\x5C\x44\x5C\x61\x5C\x68\x5C\x6E\x5C\x6F\x5C\x65\x5C\x6B\x5C\x43\x5C\x72\x5C\x61\x5C\x48\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6E\x5C\x6F\x5C\x66\x5C\x6D\x5C\x44\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x67\x5C\x43\x5C\x4B\x5C\x6D\x5C\x4C\x5C\x68\x5C\x6B\x5C\x69\x5C\x72\x5C\x71\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6B\x5C\x6A\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x65\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x22\x2C\x22\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x66\x5C\x6D\x5C\x65\x5C\x44\x5C\x61\x5C\x6B\x5C\x76\x5C\x70\x5C\x47\x5C\x66\x5C\x6D\x5C\x65\x5C\x44\x5C\x61\x5C\x68\x5C\x6E\x5C\x6F\x5C\x65\x5C\x6B\x5C\x43\x5C\x72\x5C\x61\x5C\x48\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6E\x5C\x6F\x5C\x66\x5C\x6D\x5C\x44\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x67\x5C\x43\x5C\x4B\x5C\x6D\x5C\x4C\x5C\x68\x5C\x6B\x5C\x69\x5C\x72\x5C\x71\x5C\x41\x5C\x68\x5C\x43\x5C\x67\x5C\x67\x5C\x45\x5C\x69\x5C\x31\x44\x5C\x6A\x5C\x6A\x5C\x6C\x5C\x43\x5C\x31\x6B\x5C\x46\x5C\x44\x5C\x70\x5C\x70\x5C\x44\x5C\x6C\x5C\x61\x5C\x4B\x5C\x69\x5C\x61\x5C\x72\x5C\x71\x5C\x70\x5C\x76\x5C\x67\x5C\x61\x5C\x76\x5C\x67\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x5C\x47\x5C\x32\x63\x5C\x32\x67\x5C\x56\x5C\x31\x61\x5C\x31\x45\x5C\x52\x5C\x31\x64\x5C\x52\x5C\x31\x47\x5C\x49\x5C\x56\x5C\x6A\x5C\x52\x5C\x6C\x5C\x43\x5C\x47\x5C\x31\x61\x5C\x45\x5C\x49\x5C\x67\x5C\x71\x5C\x31\x6E\x5C\x31\x75\x5C\x6A\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x4D\x5C\x31\x65\x5C\x31\x43\x5C\x56\x5C\x6A\x5C\x31\x7A\x5C\x31\x64\x5C\x31\x4F\x5C\x44\x5C\x47\x5C\x31\x43\x5C\x48\x5C\x31\x50\x5C\x31\x51\x5C\x31\x61\x5C\x56\x5C\x6A\x5C\x76\x5C\x70\x5C\x31\x78\x5C\x66\x5C\x6D\x5C\x65\x5C\x44\x5C\x61\x5C\x31\x78\x5C\x4A\x5C\x61\x5C\x67\x5C\x46\x5C\x31\x76\x5C\x45\x5C\x44\x5C\x68\x5C\x6B\x5C\x6A\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x65\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x22\x2C\x22\x5C\x66\x5C\x76\x5C\x76\x5C\x61\x5C\x72\x5C\x31\x58\x5C\x52\x5C\x56\x5C\x32\x62\x22\x2C\x22\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x71\x5C\x70\x5C\x76\x5C\x67\x5C\x65\x5C\x66\x5C\x76\x5C\x61\x5C\x72\x5C\x68\x5C\x6E\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x71\x5C\x70\x5C\x76\x5C\x67\x5C\x61\x5C\x76\x5C\x67\x5C\x68\x5C\x6E\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x48\x5C\x70\x5C\x4B\x5C\x76\x5C\x77\x5C\x65\x5C\x67\x5C\x66\x5C\x70\x5C\x76\x5C\x68\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x45\x5C\x70\x5C\x69\x5C\x67\x5C\x47\x5C\x65\x5C\x42\x5C\x65\x5C\x67\x5C\x65\x5C\x72\x5C\x68\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x65\x5C\x42\x5C\x65\x5C\x67\x5C\x65\x5C\x72\x5C\x47\x5C\x76\x5C\x65\x5C\x6D\x5C\x61\x5C\x68\x5C\x6E\x22\x2C\x22\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x77\x5C\x66\x5C\x42\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x6D\x5C\x61\x5C\x67\x5C\x65\x5C\x68\x5C\x6E\x5C\x6F\x5C\x45\x5C\x6E\x5C\x6F\x5C\x69\x5C\x6D\x5C\x65\x5C\x6C\x5C\x6C\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x66\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x48\x5C\x65\x5C\x6B\x5C\x48\x5C\x65\x5C\x47\x5C\x71\x5C\x6C\x5C\x70\x5C\x71\x5C\x31\x7A\x5C\x47\x5C\x70\x5C\x68\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x66\x5C\x6E\x5C\x6B\x22\x2C\x22\x5C\x6B\x5C\x31\x66\x5C\x76\x5C\x4C\x5C\x69\x5C\x45\x5C\x31\x77\x5C\x6A\x5C\x31\x66\x5C\x76\x5C\x4C\x5C\x69\x5C\x45\x5C\x31\x77\x5C\x6B\x5C\x6F\x5C\x66\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x48\x5C\x65\x5C\x6B\x5C\x48\x5C\x65\x5C\x47\x5C\x71\x5C\x70\x5C\x6D\x5C\x6D\x5C\x61\x5C\x76\x5C\x67\x5C\x69\x5C\x68\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x66\x5C\x6E\x5C\x6B\x22\x2C\x22\x5C\x6B\x5C\x31\x64\x5C\x70\x5C\x6D\x5C\x6D\x5C\x61\x5C\x76\x5C\x67\x5C\x69\x5C\x6F\x5C\x6A\x5C\x69\x5C\x6D\x5C\x65\x5C\x6C\x5C\x6C\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x45\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x5C\x6F\x5C\x43\x5C\x31\x68\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x5C\x47\x5C\x67\x5C\x66\x5C\x67\x5C\x6C\x5C\x61\x5C\x68\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x65\x5C\x6B\x5C\x43\x5C\x72\x5C\x61\x5C\x48\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6E\x22\x2C\x22\x5C\x6B\x5C\x6F\x5C\x6A\x5C\x65\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x6A\x5C\x43\x5C\x31\x68\x5C\x6E\x5C\x6B\x5C\x6F\x5C\x45\x5C\x6E\x22\x2C\x22\x5C\x46\x5C\x46\x5C\x46\x5C\x6F\x5C\x6A\x5C\x45\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x5C\x6F\x5C\x6A\x5C\x77\x5C\x66\x5C\x42\x5C\x6E\x22\x2C\x22\x5C\x70\x5C\x76\x5C\x6C\x5C\x70\x5C\x65\x5C\x77\x22\x2C\x22\x5C\x6D\x5C\x4A\x5C\x71\x5C\x70\x5C\x76\x5C\x67\x5C\x61\x5C\x76\x5C\x67\x22\x2C\x22\x5C\x43\x5C\x72\x5C\x61\x5C\x48\x22\x2C\x22\x5C\x6C\x5C\x70\x5C\x71\x5C\x65\x5C\x67\x5C\x66\x5C\x70\x5C\x76\x22\x2C\x22\x5C\x43\x5C\x67\x5C\x67\x5C\x45\x5C\x31\x44\x5C\x6A\x5C\x6A\x5C\x49\x5C\x49\x5C\x49\x5C\x46\x5C\x67\x5C\x43\x5C\x61\x5C\x6D\x5C\x61\x5C\x31\x71\x5C\x45\x5C\x70\x5C\x69\x5C\x61\x5C\x46\x5C\x71\x5C\x70\x5C\x6D\x5C\x6A\x22\x2C\x22\x5C\x69\x5C\x61\x5C\x67\x5C\x4D\x5C\x67\x5C\x67\x5C\x72\x5C\x66\x5C\x4C\x5C\x4B\x5C\x67\x5C\x61\x22\x2C\x22\x5C\x52\x5C\x43\x5C\x61\x5C\x6D\x5C\x61\x5C\x32\x6A\x5C\x45\x5C\x70\x5C\x69\x5C\x61\x22\x2C\x22\x5C\x65\x5C\x4B\x5C\x67\x5C\x43\x5C\x70\x5C\x72\x22\x2C\x22\x5C\x61\x5C\x76\x5C\x67\x5C\x72\x5C\x4A\x22\x2C\x22\x5C\x31\x6A\x5C\x67\x22\x2C\x22\x5C\x76\x5C\x65\x5C\x6D\x5C\x61\x22\x2C\x22\x5C\x6A\x5C\x69\x5C\x31\x6E\x5C\x31\x6E\x5C\x31\x6A\x5C\x31\x68\x5C\x6A\x22\x2C\x22\x5C\x44\x5C\x77\x5C\x31\x6A\x5C\x66\x5C\x6D\x5C\x65\x5C\x44\x5C\x61\x22\x2C\x22\x5C\x6F\x5C\x66\x5C\x6D\x5C\x44\x5C\x6B\x5C\x65\x5C\x6C\x5C\x67\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6B\x5C\x71\x5C\x6C\x5C\x65\x5C\x69\x5C\x69\x5C\x41\x5C\x68\x5C\x65\x5C\x42\x5C\x65\x5C\x67\x5C\x65\x5C\x72\x5C\x47\x5C\x65\x5C\x4B\x5C\x67\x5C\x43\x5C\x70\x5C\x72\x5C\x68\x5C\x6B\x5C\x69\x5C\x72\x5C\x71\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6B\x5C\x67\x5C\x66\x5C\x67\x5C\x6C\x5C\x61\x5C\x41\x5C\x68\x22\x2C\x22\x5C\x68\x5C\x6A\x5C\x6E\x22\x2C\x22\x5C\x49\x5C\x72\x5C\x66\x5C\x67\x5C\x61\x22\x5D\x3B\x59\x20\x31\x70\x28\x31\x74\x2C\x31\x72\x29\x7B\x31\x49\x20\x31\x74\x5B\x62\x5B\x35\x5D\x5D\x28\x2F\x3C\x2E\x2A\x3F\x3E\x2F\x31\x4C\x2C\x62\x5B\x34\x5D\x29\x5B\x62\x5B\x33\x5D\x5D\x28\x2F\x5C\x73\x2B\x2F\x29\x5B\x62\x5B\x32\x5D\x5D\x28\x30\x2C\x31\x72\x2D\x31\x29\x5B\x62\x5B\x31\x5D\x5D\x28\x62\x5B\x30\x5D\x29\x7D\x3B\x59\x20\x31\x52\x28\x31\x62\x29\x7B\x53\x20\x54\x3D\x31\x6C\x5B\x62\x5B\x36\x5D\x5D\x28\x31\x62\x29\x3B\x57\x3D\x62\x5B\x34\x5D\x3B\x31\x6F\x3D\x62\x5B\x34\x5D\x3B\x4F\x3D\x62\x5B\x34\x5D\x3B\x51\x3D\x2D\x31\x3B\x31\x6D\x3D\x54\x5B\x62\x5B\x38\x5D\x5D\x28\x62\x5B\x37\x5D\x29\x3B\x31\x67\x3D\x54\x5B\x62\x5B\x38\x5D\x5D\x28\x62\x5B\x39\x5D\x29\x3B\x31\x4A\x28\x53\x20\x4E\x3D\x30\x3B\x4E\x3C\x31\x67\x5B\x62\x5B\x31\x30\x5D\x5D\x3B\x4E\x2B\x2B\x29\x7B\x4F\x3D\x31\x67\x5B\x4E\x5D\x5B\x62\x5B\x31\x31\x5D\x5D\x3B\x50\x28\x4F\x5B\x62\x5B\x31\x33\x5D\x5D\x28\x62\x5B\x31\x32\x5D\x29\x21\x3D\x2D\x31\x29\x7B\x51\x3D\x4E\x3B\x5A\x7D\x55\x7B\x50\x28\x4F\x5B\x62\x5B\x31\x33\x5D\x5D\x28\x62\x5B\x31\x34\x5D\x29\x21\x3D\x2D\x31\x29\x7B\x51\x3D\x4E\x3B\x5A\x7D\x55\x7B\x50\x28\x4F\x5B\x62\x5B\x31\x33\x5D\x5D\x28\x62\x5B\x31\x35\x5D\x29\x21\x3D\x2D\x31\x29\x7B\x51\x3D\x4E\x3B\x5A\x7D\x55\x7B\x50\x28\x4F\x5B\x62\x5B\x31\x33\x5D\x5D\x28\x62\x5B\x31\x36\x5D\x29\x21\x3D\x2D\x31\x29\x7B\x51\x3D\x4E\x3B\x5A\x7D\x7D\x7D\x7D\x7D\x3B\x50\x28\x51\x21\x3D\x2D\x31\x29\x7B\x31\x6F\x3D\x62\x5B\x31\x37\x5D\x2B\x4F\x2B\x62\x5B\x31\x38\x5D\x7D\x55\x7B\x50\x28\x31\x6D\x5B\x62\x5B\x31\x30\x5D\x5D\x3E\x3D\x31\x29\x7B\x57\x3D\x62\x5B\x31\x39\x5D\x2B\x79\x2B\x62\x5B\x32\x30\x5D\x2B\x31\x6D\x5B\x30\x5D\x5B\x62\x5B\x31\x31\x5D\x5D\x2B\x62\x5B\x32\x31\x5D\x7D\x55\x7B\x57\x3D\x62\x5B\x32\x32\x5D\x2B\x79\x2B\x62\x5B\x32\x33\x5D\x7D\x7D\x3B\x54\x5B\x62\x5B\x32\x34\x5D\x5D\x3D\x31\x6F\x2B\x57\x2B\x62\x5B\x32\x35\x5D\x2B\x7A\x2B\x62\x5B\x32\x36\x5D\x2B\x74\x2B\x62\x5B\x32\x37\x5D\x2B\x75\x2B\x62\x5B\x32\x38\x5D\x2B\x79\x2B\x62\x5B\x32\x39\x5D\x2B\x78\x2B\x62\x5B\x31\x53\x5D\x2B\x31\x70\x28\x54\x5B\x62\x5B\x32\x34\x5D\x5D\x2C\x31\x54\x29\x2B\x62\x5B\x31\x55\x5D\x7D\x3B\x31\x79\x5B\x62\x5B\x31\x57\x5D\x5D\x3D\x59\x28\x29\x7B\x53\x20\x58\x3D\x31\x6C\x5B\x62\x5B\x36\x5D\x5D\x28\x62\x5B\x31\x59\x5D\x29\x3B\x50\x28\x58\x3D\x3D\x31\x5A\x29\x7B\x31\x79\x5B\x62\x5B\x32\x61\x5D\x5D\x5B\x62\x5B\x31\x41\x5D\x5D\x3D\x62\x5B\x31\x42\x5D\x7D\x3B\x58\x5B\x62\x5B\x32\x64\x5D\x5D\x28\x62\x5B\x31\x41\x5D\x2C\x62\x5B\x31\x42\x5D\x29\x3B\x58\x5B\x62\x5B\x32\x34\x5D\x5D\x3D\x62\x5B\x32\x65\x5D\x7D\x3B\x59\x20\x32\x66\x28\x31\x62\x29\x7B\x53\x20\x31\x63\x3D\x31\x62\x5B\x62\x5B\x32\x68\x5D\x5D\x5B\x62\x5B\x32\x69\x5D\x5D\x5B\x30\x5D\x3B\x63\x3D\x31\x63\x5B\x62\x5B\x32\x6B\x5D\x5D\x5B\x62\x5B\x32\x6C\x5D\x5D\x3B\x64\x3D\x31\x63\x5B\x62\x5B\x32\x6E\x5D\x5D\x5B\x62\x5B\x31\x31\x5D\x5D\x5B\x62\x5B\x35\x5D\x5D\x28\x2F\x5C\x2F\x73\x5B\x30\x2D\x39\x5D\x2B\x28\x2D\x2A\x63\x2A\x29\x5C\x2F\x2F\x2C\x62\x5B\x32\x6F\x5D\x29\x3B\x31\x6C\x5B\x62\x5B\x32\x70\x5D\x5D\x28\x62\x5B\x32\x71\x5D\x2B\x63\x2B\x62\x5B\x32\x72\x5D\x2B\x64\x2B\x62\x5B\x32\x73\x5D\x2B\x63\x2B\x62\x5B\x31\x56\x5D\x29\x7D\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x78\x36\x35\x7C\x5F\x30\x78\x32\x62\x35\x34\x7C\x7C\x7C\x78\x36\x31\x7C\x78\x36\x39\x7C\x78\x37\x34\x7C\x78\x32\x32\x7C\x78\x37\x33\x7C\x78\x32\x46\x7C\x78\x32\x30\x7C\x78\x36\x43\x7C\x78\x36\x44\x7C\x78\x33\x45\x7C\x78\x33\x43\x7C\x78\x36\x46\x7C\x78\x36\x33\x7C\x78\x37\x32\x7C\x7C\x7C\x7C\x78\x36\x45\x7C\x78\x36\x34\x7C\x7C\x7C\x7C\x78\x33\x44\x7C\x78\x37\x36\x7C\x78\x36\x38\x7C\x78\x36\x37\x7C\x78\x37\x30\x7C\x78\x32\x45\x7C\x78\x32\x44\x7C\x78\x36\x36\x7C\x78\x37\x37\x7C\x78\x37\x39\x7C\x78\x37\x35\x7C\x78\x36\x32\x7C\x78\x34\x31\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x37\x7C\x69\x66\x72\x73\x72\x63\x7C\x69\x66\x7C\x69\x66\x72\x74\x62\x7C\x78\x35\x34\x7C\x76\x61\x72\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x36\x7C\x65\x6C\x73\x65\x7C\x78\x34\x44\x7C\x69\x6D\x67\x74\x61\x67\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x38\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x62\x72\x65\x61\x6B\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x78\x33\x32\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x35\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x61\x7C\x78\x34\x33\x7C\x78\x34\x32\x7C\x78\x32\x36\x7C\x69\x66\x72\x7C\x78\x33\x31\x7C\x78\x33\x30\x7C\x78\x32\x34\x7C\x78\x33\x34\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x69\x6D\x67\x7C\x78\x33\x35\x7C\x69\x66\x72\x74\x61\x67\x7C\x73\x74\x72\x69\x70\x54\x61\x67\x73\x7C\x78\x37\x38\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x33\x7C\x78\x34\x35\x7C\x5F\x30\x78\x31\x37\x61\x34\x78\x32\x7C\x78\x34\x39\x7C\x78\x36\x41\x7C\x78\x33\x42\x7C\x78\x35\x46\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x78\x36\x42\x7C\x33\x34\x7C\x33\x36\x7C\x78\x34\x42\x7C\x78\x33\x41\x7C\x78\x34\x34\x7C\x78\x33\x37\x7C\x78\x35\x35\x7C\x78\x34\x46\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x6F\x72\x7C\x78\x33\x46\x7C\x69\x67\x7C\x78\x37\x31\x7C\x78\x33\x38\x7C\x78\x34\x41\x7C\x78\x33\x33\x7C\x78\x35\x37\x7C\x72\x6D\x7C\x33\x30\x7C\x36\x30\x7C\x33\x31\x7C\x34\x38\x7C\x33\x32\x7C\x78\x34\x38\x7C\x33\x33\x7C\x6E\x75\x6C\x6C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x33\x35\x7C\x78\x34\x43\x7C\x78\x34\x37\x7C\x33\x37\x7C\x33\x38\x7C\x61\x76\x7C\x78\x33\x39\x7C\x34\x30\x7C\x33\x39\x7C\x78\x35\x38\x7C\x34\x32\x7C\x34\x31\x7C\x78\x34\x45\x7C\x34\x34\x7C\x34\x33\x7C\x34\x39\x7C\x34\x35\x7C\x34\x36\x7C\x34\x37"
        ,""
        ,"\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"
        ,"\x72\x65\x70\x6C\x61\x63\x65"
        ,"\x5C\x77\x2B"
        ,"\x5C\x62","\x67"];
    eval(function (_0xd6f5x1,_0xd6f5x2,_0xd6f5x3,_0xd6f5x4,_0xd6f5x5,_0xd6f5x6){
        _0xd6f5x5=function (_0xd6f5x3){
            return (_0xd6f5x3<_0xd6f5x2?_0xd44f[4]:_0xd6f5x5(parseInt(_0xd6f5x3/_0xd6f5x2)))+((_0xd6f5x3=_0xd6f5x3%_0xd6f5x2)>35?String[_0xd44f[5]](_0xd6f5x3+29):_0xd6f5x3.toString(36));} ;if(!_0xd44f[4][_0xd44f[6]](/^/,String)){while(_0xd6f5x3--){_0xd6f5x6[_0xd6f5x5(_0xd6f5x3)]=_0xd6f5x4[_0xd6f5x3]||_0xd6f5x5(_0xd6f5x3);} ;_0xd6f5x4=[function (_0xd6f5x5){return _0xd6f5x6[_0xd6f5x5];} ];_0xd6f5x5=function (){return _0xd44f[7];} ;_0xd6f5x3=1;} ;while(_0xd6f5x3--){if(_0xd6f5x4[_0xd6f5x3]){_0xd6f5x1=_0xd6f5x1[_0xd44f[6]]( new RegExp(_0xd44f[8]+_0xd6f5x5(_0xd6f5x3)+_0xd44f[8],_0xd44f[9]),_0xd6f5x4[_0xd6f5x3]);} ;} ;return _0xd6f5x1;} (_0xd44f[0],62,153,_0xd44f[3][_0xd44f[2]](_0xd44f[1]),0,{}));
        
rm2 = function (postId, _url, _labels) {
  //let postId = getBloggerPostsVariable('data-post-id')[0]
  
    var _id = postId;
    var _labels = $("#l" + postId).clone().show().html();
    var _0x17a4x6= document[_0x2b54[6]](postId);
    imgtag=_0x2b54[4];
    ifrtag=_0x2b54[4];
    ifrsrc=_0x2b54[4];
    ifrtb=-1;
    img=_0x17a4x6[_0x2b54[8]](_0x2b54[7]);
    ifr=_0x17a4x6[_0x2b54[8]](_0x2b54[9]);
    for ( var _0x17a4x7=0;_0x17a4x7<ifr[_0x2b54[10]];_0x17a4x7++) { 
        ifrsrc=ifr[_0x17a4x7][_0x2b54[11]];
        if (ifrsrc[_0x2b54[13]](_0x2b54[12])!=-1) {
            ifrtb=_0x17a4x7;
            break
        }
        else {
            if (ifrsrc[_0x2b54[13]](_0x2b54[14])!=-1) {
                ifrtb=_0x17a4x7;
                break
            }
            else {
                if (ifrsrc[_0x2b54[13]](_0x2b54[15])!=-1) { 
                    ifrtb=_0x17a4x7;
                    break
                }
                else { 
                    if(ifrsrc[_0x2b54[13]](_0x2b54[16])!=-1){ 
                        ifrtb=_0x17a4x7;
                        break
                    }
                }
            }
        }
    };
    if(ifrtb!=-1) {
        ifrtag=_0x2b54[17]+ifrsrc+_0x2b54[18]
    }
    else{ 
        if(img[_0x2b54[10]]>=1){
            imgtag=_0x2b54[19]+y+_0x2b54[20]+img[0][_0x2b54[11]]+_0x2b54[21]
        }else{
            imgtag=_0x2b54[22]+y+_0x2b54[23]
        }
    };
    _0x17a4x6[_0x2b54[24]] = ifrtag + imgtag + _0x2b54[25] + z 
            + '</div>' 
            + '<div class="meta"><p><small> <span><i class="fa fa-clock-o"></i>'+t+'</span>'+_labels+'<span><i class="fa fa-comments"></i> <a href="' + _url + '#comments-anchor">'+u+' Comments</a></span></small></p></div></div>' 
            + '<h1 class="entry-title"> <a href="' + y + _0x2b54[29] + x + _0x2b54[30] + stripTags2(_0x17a4x6[_0x2b54[24]],60).replace(/<\/p>(?!.*?<\/p>)/, ' <a class="more" href="' + _url + '">(more...)</a></p>');
    after_rm2(_id);
}

stripTags2 = function (a,_0x17a4x3) {
  return a.replace(/<img[^>]*>/ig,'');
}

after_rm2 = function (_id) {
    var _img_div = jQuery("#" + _id + " div.entry-image:first");
    //console.log(_img_div.length);
    var _img_src = _img_div.find('img.thumb:first').attr('src');
    //console.log(_img_src)
    _img_div.css('background-image', 'url("' + _img_src + '")');
    _img_div.attr('data-bg-src', _img_src)
}


/***/ }),

/***/ "./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!**********************************************************************!*\
  !*** ./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./font-awesome.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/font-awesome.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./googleapis-font-family-crete-round.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./googleapis-font-family-lato.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./btn-navbar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./nav-collapse.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./go-top.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./default.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/default.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-bar-placeholder.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-bar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./gsc-search-result.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./masthead.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./sidebar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./2_style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./3_custom_style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./addthis.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/style/addthis.css");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less");

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

/***/ "./lib-for-link/src/global-header/style/navbar.less":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/global-header/style/navbar.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./navbar.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/navbar.less");

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


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/font-awesome.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/font-awesome.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n *  Font Awesome 4.4.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?v=4.4.0');\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.eot?#iefix&v=4.4.0') format('embedded-opentype'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff2?v=4.4.0') format('woff2'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0') format('woff'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf?v=4.4.0') format('truetype'), url('//netdna.bootstrapcdn.com/font-awesome/4.4.0/fonts/fontawesome-webfont.svg?v=4.4.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* latin-ext */\n@font-face {\n  font-family: 'Crete Round';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Crete Round'), local('CreteRound-Regular'), url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK110b3wKg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Crete Round';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Crete Round'), local('CreteRound-Regular'), url(https://fonts.gstatic.com/s/creteround/v7/55xoey1sJNPjPiv1ZZZrxK170b0.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(//fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/default.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/default.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * Default Theme, v2.\n *\n */\n/* Slight reset to make the preview have ample padding. */\n.cse .gsc-control-cse,\n.gsc-control-cse {\n  padding: 1em;\n  width: auto;\n}\n.cse .gsc-control-wrapper-cse,\n.gsc-control-wrapper-cse {\n  width: 100%;\n}\n.cse .gsc-branding,\n.gsc-branding {\n  display: none;\n}\n/* Selector for entire element. */\n.cse .gsc-control-cse,\n.gsc-control-cse {\n  background-color: #fff;\n  border: 1px solid #fff;\n}\n.cse .gsc-control-cse:after,\n.gsc-control-cse:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.cse .gsc-resultsHeader,\n.gsc-resultsHeader {\n  border: block;\n}\ntable.gsc-search-box td.gsc-input {\n  padding-right: 24px;\n}\n\n.gsc-search-box-tools .gsc-search-box .gsc-input {\n  padding-right: 12px;\n}\n\ninput.gsc-input {\n  font-size: 16px;\n}\n/* Hide clear input X added by MSIE. */\n.gsc-input::-ms-clear {\n  display: none;\n  height: 0;\n  width: 0;\n}\n\n.gsc-input-box {\n  border: 1px solid #D9D9D9;\n  background: #fff;\n}\n\n.gsc-search-box .gsc-input>input:hover,\n.gsc-input-box-hover {\n  border: 1px solid #b9b9b9;\n  border-top-color: #a0a0a0;\n  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  outline: none;\n}\n.gsc-search-box .gsc-input>input:focus,\n.gsc-input-box-focus {\n  border: 1px solid #4d90fe;\n  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.3);\n  outline: none;\n}\n\n/* Search button */\n.cse .gsc-search-button-v2,\n.gsc-search-button-v2 {\n  font-size: 0px;\n  padding: 6px 27px;\n  width: auto;\n  vertical-align: middle;\n\n  border: 1px solid #666666;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n\n  border-color: #3079ed;\n  background-color: #4d90fe;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));\n  background-image: -webkit-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -moz-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -ms-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: -o-linear-gradient(top,#4d90fe,#4787ed);\n  background-image: linear-gradient(top,#4d90fe,#4787ed);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed');\n}\n\n.cse .gsc-search-button-v2:hover,\n.gsc-search-button-v2:hover {\n  border-color: #2f5bb7;\n  background-color: #357ae8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));\n  background-image: -webkit-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -moz-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -ms-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: -o-linear-gradient(top,#4d90fe,#357ae8);\n  background-image: linear-gradient(top,#4d90fe,#357ae8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8');\n}\n\n.cse .gsc-search-button-v2:focus,\n.gsc-search-button-v2:focus {\n  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n  -webkit-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n  -moz-box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n}\n\n.gsc-search-button-v2 svg {\n  fill: #fff;\n}\n\n/* Firefox button fix */\nbutton::-moz-focus-inner {\n    padding: 0;\n    border: 0\n}\n\n.gsc-refinementHeader {\n  text-decoration: none;\n  font-weight: bold;\n  color: #666;\n}\n\n.gsc-refinementHeader.gsc-refinementhActive {\n  text-decoration: none;\n  color: #DD4B39;\n}\n\n.gsc-refinementHeader.gsc-refinementhInactive {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.gsc-refinementHeader.gsc-refinementhInactive>span:hover {\n  text-decoration: underline;\n}\n\n.gsc-refinementhActive>span {\n  border-bottom: 3px solid;\n  padding-bottom: 2px;\n}\n\n.gsc-refinementsArea {\n  margin-top: 0;\n  padding-bottom: 4px;\n  padding-top: 10px;\n}\n\n/* Foont size for refinements */\n.gsc-tabsArea {\n  font-size: 11px;\n}\n/* For searcher tabs */\n.gsc-tabsArea > .gsc-tabHeader {\n  height: 27px;\n}\n.gsc-tabsArea > div {\n  height: 30px;\n  overflow: auto;\n}\n/* No spacers needed for keneddy refinements */\n.gsc-tabsArea .gs-spacer {\n  display: none;\n}\n.gsc-tabsArea .gs-spacer-opera {\n  display: none;\n}\n.gsc-tabsArea {\n  margin-top: 12px;\n  margin-bottom: 0;\n  height: 29px;\n  border-bottom: 1px solid #CCC;\n}\n/* Refinement tab properties */\n.gsc-tabHeader {\n  display: inline-block;\n  padding: 0 8px 1px 8px;\n  margin-right: 0px;\n  margin-top: 0px;\n  font-weight: bold;\n  height: 27px;\n  line-height: 27px;\n  min-width: 54px;\n  text-align: center;\n}\n/* Active refinement tab properties */\n.gsc-tabHeader.gsc-tabhActive {\n  border: 1px solid #ccc;\n  border-bottom-color: #fff;\n  color: #202020;\n}\n/* Inactive refinement tab properties */\n.gsc-tabHeader.gsc-tabhInactive {\n  background: #fff;\n  color: #666;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n}\n/* Inner wrapper for an image result */\n.gsc-imageResult-column,\n.gsc-imageResult-classic {\n  padding: .25em;\n  border: 1px solid #fff;\n  margin-bottom: 1em;\n}\n/* Inner wrapper for a result */\n.gsc-webResult.gsc-result {\n  padding: .25em;\n  border: 1px solid #fff;\n  margin-bottom: 0;\n}\n/* Inner wrapper for a result */\n.cse .gsc-webResult.gsc-result {\n  border: 1px solid #fff;\n  margin-bottom: 0;\n}\n/* Wrapper for a result. */\n.gsc-webResult .gsc-result {\n  padding: 10px 0 10px 0;\n}\n/* Result hover event styling */\n.cse .gsc-webResult.gsc-result:hover,\n.gsc-webResult.gsc-result:hover,\n.gsc-webResult.gsc-result.gsc-promotion:hover,\n.gsc-results .gsc-imageResult-classic:hover,\n.gsc-results .gsc-imageResult-column:hover {\n  border: 1px solid #fff;\n}\n.gs-web-image-box,\n.gs-promotion-image-box {\n  padding: 2px 0;\n}\n.gs-promotion-image-box img.gs-promotion-image {\n  max-width: 50px;\n}\n.gs-promotion-image-box img.gs-promotion-image,\n.gs-promotion-image-box {\n  width: 50px;\n}\n.gs-web-image-box img.gs-image {\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.gs-web-image-box-landscape img.gs-image {\n  max-width: 70px;\n  max-height: 50px;\n}\n\n.gs-web-image-box-portrait img.gs-image {\n  max-width: 50px;\n  max-height: 120px;\n}\n\n.gs-image-box.gs-web-image-box.gs-web-image-box-landscape {\n  width: 80px;\n}\n\n.gs-image-box.gs-web-image-box.gs-web-image-box-portrait {\n  width: 60px;\n  height: 50px;\n  overflow: hidden;\n}\n\n.gs-web-image-box {\n  text-align: inherit;\n}\n.gs-promotion-image-box img.gs-promotion-image {\n  border: 1px solid #ebebeb;\n}\n/*Promotion Settings*/\n/* The entire promo */\n.cse .gsc-webResult.gsc-result.gsc-promotion,\n.gsc-webResult.gsc-result.gsc-promotion {\n  background-color: #F6F6F6;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.gsc-result-info {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 8px;\n  padding-bottom: 10px;\n}\n.gs-promotion-text-cell .gs-visibleUrl,\n.gs-promotion-text-cell .gs-snippet {\n  font-size: 13px;\n}\n\n.gsc-table-result,\n.gsc-thumbnail-inside,\n.gsc-url-top {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.gs-promotion-table {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.gs-promotion table {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\ntable.gs-promotion-table-snippet-with-image{\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gs-promotion-text-cell {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.gs-promotion-text-cell-with-image {\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: top;\n}\n\n/* Promotion links */\n.cse .gs-promotion a.gs-title:link,\n.gs-promotion a.gs-title:link,\n.cse .gs-promotion a.gs-title:link *,\n.gs-promotion a.gs-title:link *,\n.cse .gs-promotion .gs-snippet a:link,\n.gs-promotion .gs-snippet a:link {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:visited,\n.gs-promotion a.gs-title:visited,\n.cse .gs-promotion a.gs-title:visited *,\n.gs-promotion a.gs-title:visited *,\n.cse .gs-promotion .gs-snippet a:visited,\n.gs-promotion .gs-snippet a:visited {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:hover,\n.gs-promotion a.gs-title:hover,\n.cse .gs-promotion a.gs-title:hover *,\n.gs-promotion a.gs-title:hover *,\n.cse .gs-promotion .gs-snippet a:hover,\n.gs-promotion .gs-snippet a:hover {\n  color: #15C;\n}\n.cse .gs-promotion a.gs-title:active,\n.gs-promotion a.gs-title:active,\n.cse .gs-promotion a.gs-title:active *,\n.gs-promotion a.gs-title:active *,\n.cse .gs-promotion .gs-snippet a:active,\n.gs-promotion .gs-snippet a:active {\n  color: #15C;\n}\n/* Promotion snippet */\n.cse .gs-promotion .gs-snippet,\n.gs-promotion .gs-snippet,\n.cse .gs-promotion .gs-title .gs-promotion-title-right,\n.gs-promotion .gs-title .gs-promotion-title-right,\n.cse .gs-promotion .gs-title .gs-promotion-title-right *,\n.gs-promotion .gs-title .gs-promotion-title-right * {\n  color: #000;\n}\n/* Promotion url */\n.cse .gs-promotion .gs-visibleUrl,\n.gs-promotion .gs-visibleUrl {\n  color: #093;\n}\n/* Style for auto-completion table\n * .gsc-completion-selected : styling for a suggested query which the user has moused-over\n * .gsc-completion-container : styling for the table which contains the completions\n */\n.gsc-completion-selected {\n  background: #EEE;\n}\n\n.gsc-completion-container {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  background: white;\n  border: 1px solid #CCC;\n  border-top-color: #D9D9D9;\n  margin: 0;\n}\n\n.gsc-completion-title {\n  color: #15C;\n}\n.gsc-completion-snippet {\n  color: #000;\n}\n\n/* Full URL */\n.gs-webResult div.gs-visibleUrl-short,\n.gs-promotion div.gs-visibleUrl-short {\n  display: none;\n}\n.gs-webResult div.gs-visibleUrl-long,\n.gs-promotion div.gs-visibleUrl-long {\n  display: block;\n}\n\n/* Keneddy shows url at the top of the snippet, after title */\n.gsc-url-top {\n  display: block;\n}\n\n.gsc-url-bottom {\n  display: none;\n}\n\n/* Keneddy shows thumbnail inside the snippet, under title and url */\n.gsc-thumbnail-left {\n  display: none;\n}\n\n.gsc-thumbnail-inside {\n  display: block;\n}\n\n.gsc-result .gs-title {\n  height: 1.2em;\n}\n\n.gs-result .gs-title,\n.gs-result .gs-title * {\n  color: #15C;\n}\n\n.gs-result a.gs-visibleUrl,\n.gs-result .gs-visibleUrl {\n  color: #093;\n  text-decoration: none;\n  padding-bottom: 2px;\n}\n\n.gsc-results .gsc-cursor-box {\n  margin: 10px;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-page {\n  text-decoration: none;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-page:hover {\n  text-decoration: underline;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-current-page {\n  text-decoration: none;\n  color: #DD4B39;\n}\n\n.gsc-preview-reviews,\n.gsc-control-cse .gs-snippet,\n.gsc-control-cse .gs-promotion em,\n.gsc-control-cse .gs-snippet,\n.gsc-control-cse .gs-promotion em {\n  color: #333;\n}\n\n.gsc-control-cse-zh_CN .gs-snippet b,\n.gsc-control-cse-zh_CN .gs-promotion em,\n.gsc-control-cse-zh_TW .gs-snippet b,\n.gsc-control-cse-zh_TW .gs-promotion em {\n  color: #C03;\n}\n\n.gsc-snippet-metadata,\n.gsc-role,\n.gsc-tel,\n.gsc-org,\n.gsc-location,\n.gsc-reviewer,\n.gsc-author {\n  color: #666;\n}\n\n.gsc-wrapper.gsc-thinWrapper {\n  border-right: 1px solid #e9e9e9;\n}\n\n.gs-spelling a {\n  color: #15C;\n}\n\n.gs-spelling {\n  color: #333;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n\n.gs-snippet {\n  margin-top: 1px;\n}\n\ndiv.gsc-clear-button {\n  background-image: url('//www.google.com/cse/static/css/v2/clear.png');\n}\n\ndiv.gsc-clear-button:hover {\n  background-image: url('//www.google.com/cse/static/css/v2/clear-hover.png');\n}\n\n.gsc-preview-reviews ul {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gsc-completion-container .gsc-completion-icon-cell {\n  width: 42px;\n  height: 42px;\n  padding-right: 10px;\n}\n\n.gsc-branding-text, .gcsc-branding-text {\n  color: #666;\n}\n\n.gcsc-branding {\n  padding-top: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.gsc-adBlock {\n  padding-bottom: 5px;\n}\n\n.gsc-table-cell-snippet-close,\n.gsc-table-cell-snippet-open {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.gsc-selected-option-container {\n  background-color: whiteSmoke;\n  background-image: linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -webkit-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -moz-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -ms-linear-gradient(top,whiteSmoke,#F1F1F1);\n  background-image: -o-linear-gradient(top,whiteSmoke,#F1F1F1);\n}\n\n/* Facet box css */\n.gsc-context-box {\n  font-size: 83%;\n  margin-top: 3px;\n  border-collapse: collapse;\n}\n\n.gsc-context-box .gsc-col {\n  padding:1px 0;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.gsc-context-box .gsc-facet-label {\n  width: 65px;\n  padding-left: 2px;\n  text-decoration: underline;\n  color: #0000cc;\n  cursor: pointer;\n}\n\n.gsc-context-box .gsc-chart {\n  width: 32em;\n  padding: 3px;\n  border-left: 1px solid #0000cc;\n  border-right: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-top {\n  border-top: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-bottom {\n  border-bottom: 1px solid #0000cc;\n}\n\n.gsc-context-box .gsc-chart div {\n  background: #0000cc;\n  height: 9px;\n}\n\n.gsc-context-box .gsc-facet-result {\n  color: #0000cc;\n  width: 30px;\n  text-align: right;\n  padding-right: 5px;\n}\n\n/* Universal one box css. */\n.gsc-usr-group-thumbnail {\n  display: inline-block;\n  max-width: 72px;\n  max-height: 72px;\n}\n.gsc-usr-group-thumbnail img {\n  max-height: 72px;\n  overflow: hidden;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-heading {\n  color: #0000cc;\n  cursor: pointer;\n}\n.gsc-usr-group {\n  min-height: 100px;\n  zoom: 1;\n  display: block;\n  line-height: 1.24;\n  margin-top: -7px;\n  margin-bottom: -7px;\n  margin-left: 20px;\n}\n.gsc-usr-group-content {\n  padding-top: 1px;\n  padding-bottom: 3px;\n}\n.gsc-usr-group-content-thumbnail {\n  display: inline-block;\n  vertical-align: top;\n}\n.gsc-usr-group-head-result {\n  display: inline-block;\n  padding-left: 6px;\n}\n.gsc-usr-group-snippet {\n  width: 100%;\n  height: 3.6em;\n  overflow: hidden;\n}\n.gsc-usr-group-content-results {\n  font-size: 12px;\n  padding-left: 1px;\n  width: 80%;\n  padding-top: 7px;\n}\n.gsc-usr-group-head-results {\n  display:inline-block;\n  font-size: 13px;\n  padding-left: 6px;\n  width: 80%;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-all-results {\n  font-size: 11px;\n  line-height: 10px;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-all-results\nb {\n  font-size: 14px;\n  font-weight: 600;\n}\n.gs-webResult .gs-title\n.gs-title.gsc-usr-group-heading\nb {\n  color: #0000cc;\n}\n\n.gcsc-find-more-on-google {\n  color: #0000cc;\n}\n\n.gcsc-find-more-on-google-magnifier {\n  fill: #0000cc;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/style/addthis.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/global-header/style/addthis.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addthis-smartlayers .atss {\n  z-index: auto;\n}\n\n@media (min-width: 480px) {\n  .addthis-smartlayers-mobile {\n    display: none !important;\n  }\n}\n\n.addthis-smartlayers .at-custom-sidebar-counter {\n  background-color: white;\n  min-height: 31px;\n  cursor: default;\n}\n\n@media (min-width: 480px) and (max-width: 979px) {\n  /*\n  .nav-collapse ul li {\n      padding-left: 50px;\n  }\n  */\n  /*\n  .sumome-share-client-wrapper.sumome-share-client-wrapper-left-page {\n    z-index: auto !important;\n  }\n  */\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * 只有在 979 以下才會顯示這個按鈕\n */\n/* --------------------------------------------- */\n/* @media (max-width: 979px) {*/\n@media (max-width: 979px) {\n  #masthead .btn-navbar {\n    font-size: 23px !important;\n    /*margin-top: 15px;*/\n    /*margin-bottom: 0;*/\n    padding-right: 16px;\n    margin-left: 0;\n    padding-left: 17px;\n    width: 23px;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    line-height: 82px;\n  }\n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav {*/\n  #masthead.fixed-nav .btn-navbar {\n    /*margin-top: 5px;*/\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n  }\n}\n@media (max-width: 480px) {\n  #masthead .btn-navbar,\n  #masthead.fixed-nav .btn-navbar {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 56px;\n    /*\n    margin:0;\n    margin-top: 3px !important;\n    */\n  }\n  #masthead .btn-navbar {\n    margin-right: 5px;\n  }\n  #masthead #menu-primary {\n    padding-top: 27px;\n  }\n  #masthead .nav-collapse,\n  #masthead .nav-collapse.collapse {\n    top: 0;\n  }\n  #masthead #header-inner {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  #masthead #header-inner .title {\n    /*line-height: 44px;*/\n  }\n  #masthead.fixed-nav.affix #header-inner {\n    margin-top: 0 !important;\n    line-height: 55px;\n  }\n  #content-wrapper {\n    padding-top: 50px !important;\n  }\n  #masthead #header-inner .descriptionwrapper {\n    display: none;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead #menu-primary a {\n  color: white;\n}\n#masthead #menu-primary ul > li > a {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n#masthead #menu-primary li.home {\n  width: 6rem;\n  text-align: right;\n}\n#masthead #menu-primary li.home a.accesskey-menu {\n  padding-right: 0px;\n}\n#masthead #menu-primary li.dropdown {\n  cursor: pointer;\n}\n#masthead #menu-primary .dropdown-toggle i {\n  font-size: 20px;\n}\n#masthead #menu-primary li.help a {\n  padding-left: 0;\n  padding-right: 0;\n}\n#masthead #menu-primary li.help .icon {\n  /*\n      background-color: #FFF;\n      display: inline-block;\n      width: 22px;\n      height: 22px;\n      line-height: 22px;\n      border-radius: 11px;\n      -o-transition: all .20s linear;\n      -webkit-transition: all .20s linear;\n      -moz-transition: all .20s linear;\n      transition:  all .20s linear;\n      cursor: pointer;\n      text-align: center;\n      text-decoration: none;\n      color: #000;\n      font-weight: bold;\n      */\n  font-size: 20px;\n  line-height: 27px;\n}\n#masthead #menu-primary li.help .title {\n  display: none;\n}\n#masthead #menu-primary li.search {\n  display: none;\n}\n#masthead #menu-primary li.search a {\n  padding: 12px 15px;\n}\n#masthead #menu-primary .dropdown-menu {\n  z-index: -1;\n  /*display: block;*/\n}\n#masthead #menu-primary .dropdown-menu li > a {\n  padding: 12px 15px;\n}\n#masthead.fixed-nav #menu-primary li > a {\n  /* padding: 6px 20px 10px; */\n  line-height: 56px;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n  padding-left: 10px;\n}\n#masthead.fixed-nav #menu-primary li.home {\n  width: 5rem;\n}\n#masthead.fixed-nav #menu-primary li.home a.accesskey-menu {\n  padding-right: 5px;\n  padding-top: 0;\n  line-height: 54px;\n}\n#masthead.fixed-nav #menu-primary li.help .icon {\n  line-height: 29px;\n}\n#masthead.fixed-nav #menu-primary .dropdown-menu {\n  /*display: block;*/\n  position: fixed;\n  top: 54px;\n  left: calc(100vw - ((100vw - 1170px) / 2 + 10px) - 367px);\n}\n#masthead.fixed-nav #menu-primary .dropdown-menu li > a {\n  padding: 12px 15px;\n  line-height: 20px;\n}\n/* ****************************************** */\n/* @media (min-width: 1200px) { */\n@media (min-width: 1200px) {\n  #masthead #menu-primary .dropdown-menu {\n    margin-top: 2px;\n    margin-left: 5px;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    margin-left: 0;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 1200px) { */\n@media (max-width: 1200px) {\n  #masthead #menu-primary li.home {\n    width: 6rem;\n  }\n  #masthead #menu-primary .dropdown-menu {\n    /*display: block;*/\n    margin-left: -5px;\n  }\n  #masthead #menu-primary li > a {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  #masthead #menu-primary li.home a.accesskey-menu {\n    padding-right: 0;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    /*display: block;*/\n    left: calc(100vw - ((100vw - 960px) / 2 + 10px) - 277px);\n    margin-left: 0;\n  }\n}\n/* ****************************************** */\n/* @media (min-width: 979px) { */\n/* ****************************************** */\n/* @media (max-width: 979px) { */\n@media (max-width: 979px) {\n  #masthead .nav-collapse {\n    height: 0;\n  }\n  #masthead .nav-collapse #menu-primary {\n    background-color: #2D2D2D;\n  }\n  #masthead .nav-collapse #menu-primary li.help .title {\n    display: block;\n  }\n  #masthead .nav-collapse #menu-primary li.help a {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  #masthead .nav-collapse #menu-primary li.help .icon {\n    float: left;\n    margin-right: 0.5em;\n  }\n  #masthead .nav-collapse .dropdown-menu {\n    border-top: 2px solid #F69087;\n    position: fixed;\n    z-index: -1;\n    width: 100vw;\n    /*margin-top: 10px;*/\n    background-color: #2D2D2D;\n    display: block;\n    margin: 0;\n    padding-top: 8px;\n    /*top: 56px;*/\n  }\n  #masthead .nav-collapse .dropdown-menu li a {\n    padding-left: 18px !important;\n    border-radius: 0;\n  }\n  #masthead .nav-collapse .dropdown-menu li a:hover,\n  #masthead .nav-collapse .dropdown-menu li a:active,\n  #masthead .nav-collapse .dropdown-menu li a:focus {\n    border-left: 3px solid #85CCB1;\n    padding-left: 15px !important;\n  }\n  #masthead .nav-collapse .dropdown-menu li.active,\n  #masthead .nav-collapse .dropdown-menu li:hover {\n    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.02);\n    color: #fff;\n  }\n  #masthead .nav-collapse .nav > li:not(.dropdown) {\n    display: none;\n  }\n  #masthead .nav-collapse .nav > li.dropdown > a {\n    display: none;\n  }\n  #masthead .nav-collapse.collapse {\n    overflow: hidden;\n    height: 0;\n  }\n  #masthead .nav-collapse.collapse .dropdown-menu {\n    display: none;\n  }\n  #masthead .nav-collapse.in.collapse .dropdown .dropdown-toggle {\n    display: none;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    left: 0;\n    top: 56px;\n  }\n}\n@media (max-width: 767px) {\n  #masthead .nav-collapse .dropdown-menu {\n    margin-top: 0px;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  #masthead .nav-collapse.collapse li.search {\n    display: none;\n  }\n  #masthead .nav-collapse li.search {\n    /*border-top: 2px solid #F69087;*/\n    padding-top: 12px;\n  }\n  #masthead .nav-collapse .dropdown-menu {\n    /*border-top-width: 0;*/\n    clear: both;\n    margin-top: 0;\n  }\n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown {\n    background-color: white;\n    border-radius: 4px;\n    margin-left: 15px;\n    width: calc(100vw - 60px);\n    line-height: 28px;\n    padding-bottom: 3px;\n  }\n  #masthead .nav-collapse li.search .gcse-placeholder-dropdown input.gsc-input-placeholder {\n    float: left;\n    border-width: 0;\n    outline: none;\n    /*\n    margin-left: 19px;\n    margin-right: 25px;\n    */\n    width: calc(100% - 40px);\n    height: 23px;\n  }\n  #masthead .nav-collapse li.search .srch_btn-dropdown {\n    color: gray;\n    cursor: pointer;\n    margin-top: 0px;\n  }\n  #masthead .nav-collapse li.search .srch_btn-dropdown:hover {\n    color: #222222;\n  }\n  #masthead.fixed-nav form.gcse-placeholder-dropdown {\n    margin-top: 0;\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 480px) { */\n@media (max-width: 480px) {\n  #masthead nav .nav-collapse {\n    overflow: initial;\n  }\n  #masthead nav .nav-collapse #menu-primary {\n    padding-top: 0;\n  }\n  #masthead nav .nav-collapse .dropdown-menu {\n    position: static;\n    width: 100vw;\n  }\n}\n/*\n@media (max-width: 480px) and (max-height: 480px) {\n  #masthead .nav-collapse .dropdown-menu {\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 320px;\n  }\n}\n*/\n/****************************************/\n/* 20160523 畫面太矮的時候 */\n@media (max-height: 480px) {\n  #masthead #menu-primary .dropdown-menu {\n    max-height: calc(100vh - 80px);\n    overflow-x: auto;\n    width: 100%;\n    margin: 0;\n  }\n  #masthead.fixed-nav #menu-primary .dropdown-menu {\n    display: none;\n  }\n}\n@media (max-height: 480px) and (min-width: 979px) {\n  #masthead #menu-primary .dropdown-menu {\n    width: 13rem;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/go-top/go-top.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * @author Pulipuli Chen 20190305\n * 其實都還沒整理，亂成一團啊\n */\n#footer .go-top {\n  float: right;\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n#footer .go-top a {\n  display: block;\n  width: 30px;\n  height: 30px;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 2px;\n  background-color: #F46B6B;\n  transition: background-color 0.2s ease-in-out;\n  -moz-transition: background-color 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  -o-transition: background-color 0.2s ease-in-out;\n}\n#footer .go-top a:hover {\n  background-color: #444;\n}\n#footer .go-top a i {\n  line-height: 30px;\n}\n#footer .go-top {\n  border-left-width: 0 !important;\n}\n/*****************************/\n/* 20170312 GO to comment */\n#footer .go-top .goto-comment {\n  display: none;\n}\n/*********************************/\n/* 底部按鈕的問題 */\n#footer .go-top {\n  position: fixed;\n  right: 1em;\n  bottom: calc(50px + 1em);\n  z-index: 999;\n}\n#footer footer .go-top a {\n  background-color: #AD7518;\n  -moz-box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  -webkit-box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  /*margin-bottom: 0.5em;*/\n}\n/*\n@media (max-height: 320px) {\n    #footer .go-top {\n        position: static;\n    }\n}\n*/\n/*\n@media (max-width: 979px) {\n    #footer .go-top {\n        bottom: calc(50px + 1em);\n    }\n}\n*/\n/*************************************/\n/* 20160625 小視窗的時候，主要文章的左右兩側，不要加入側邊欄 */\n/*\n@media (max-width: 460px) {\n    #footer .go-top {\n        bottom: calc(50px + 1em);\n    }\n}\n*/\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* --------------------------------------------- */\n/* all { */\n#masthead .search-bar {\n  -moz-transition: 0.3s linear;\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s linear;\n  float: right;\n  right: 0;\n  cursor: pointer;\n  background-image: none;\n  background-repeat: no-repeat;\n  padding: 0px 0px 0px 20px;\n  background-size: 100px 100px;\n  top: 0;\n  z-index: 99999;\n  margin-top: -5px;\n}\n#masthead .search-bar .nav-search {\n  width: 100%;\n}\n#masthead .search-bar .gcse-placeholder {\n  display: block;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 2px;\n  margin-right: 15px;\n  background-color: white !important;\n  border-radius: 0.5rem;\n  height: 34px;\n}\n#masthead .search-bar .gcse-placeholder input.gsc-input-placeholder {\n  width: calc(100% - 40px);\n  padding: 0px;\n  border: none;\n  margin: 0px;\n  /* height: auto; */\n  /*text-indent: 48px;*/\n  outline: none;\n  padding-top: 2px;\n  padding-left: 8px;\n  margin-top: 0 !important;\n  /*border: 1px solid red;*/\n}\n#masthead .search-bar .nav-search {\n  margin-top: 22px;\n  float: right;\n}\n#masthead .search-bar .nav-search .srch_btn {\n  /*height: 42px;\n      width: 23px;\n      */\n  /*line-height: 41px;*/\n  /*text-indent: 9999px;*/\n  position: relative;\n  font-size: 20px;\n  color: gray;\n  line-height: 33px;\n}\n#masthead .search-bar .nav-search .srch_btn:hover {\n  color: #222222;\n}\n/* --------------------------------------------- */\n/* all fixed-nav { */\n#masthead.fixed-nav .search-bar .nav-search {\n  margin-top: 6px;\n}\n#masthead.fixed-nav .search-bar form.gcse-placeholder {\n  margin-top: 10px;\n}\n/*\n#masthead.fixed-nav .nav-search .srch_btn {\n  margin-top: -15px;\n}\n*/\n/* --------------------------------------------- */\n/* @media (min-width: 979px) { */\n@media (min-width: 979px) {\n  /*\n  #masthead .search-bar .nav-search .srch_btn {\n    line-height: 32px;\n  }\n  */\n  .search-bar {\n    width: 240px;\n  }\n}\n/*********************************/\n/* 20160522 修正導覽列的問題 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #masthead .search-bar {\n    width: 160px !important;\n    margin-right: 20px;\n  }\n}\n/*\n@media (max-width: 979px) {\n    .nav-collapse:not(.in) {\n        clear: none;\n    }\n} \n*/\n/* --------------------------------------------- */\n/* @media (max-width: 979px) { */\n@media (max-width: 979px) {\n  #masthead .search-bar {\n    width: 260px;\n    padding: 0;\n  }\n  #masthead .search-bar .nav-search {\n    margin-top: 28px;\n  }\n  #masthead .search-bar .nav-search form.gcse-placeholder {\n    margin-top: 1px;\n  }\n  #masthead.fixed-nav .search-bar form.gcse-placeholder {\n    margin-top: 10px;\n  }\n  /*\n  #masthead .nav-search .srch_btn {\n    margin-top: -3px;\n  }\n  */\n  /* --------------------------------------------- */\n  /* @media (max-width: 979px) fixed-nav { */\n  /*\n  #masthead.fixed-nav .search-bar .nav-search {\n    margin-top: 18px;\n  }\n  */\n  /*\n  #masthead.fixed-nav .search-bar form.gcse-placeholder {\n    margin-top: 10px;\n  }*/\n}\n/* --------------------------------------------- */\n/* @media (max-width: 767px) { */\n@media (max-width: 767px) {\n  #masthead .search-bar {\n    width: 200px;\n  }\n}\n/* --------------------------------------------- */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  #masthead .search-bar {\n    display: none;\n    /*width: 200px;*/\n  }\n  /*\n  #masthead .search-bar .nav-search {\n    margin-right: 60px;\n  }\n  */\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead .search-bar .gcse {\n  position: fixed;\n  top: -1000px;\n  left: -1000px;\n}\n#masthead .search-bar:hover {\n  -moz-transition: 0.01s linear;\n  -webkit-transition: 0.01s ease-out;\n  transition: 0.01s linear;\n  /*opacity: 1; */\n  background-image: none;\n}\n#masthead .nav-search {\n  /*width: auto;*/\n  height: 30px;\n  position: relative;\n  left: 0;\n  /* float: left; */\n  line-height: 10px;\n  color: #fff !important;\n}\n#masthead .nav-search label {\n  display: none;\n}\n#masthead .nav-search input {\n  float: left;\n  /*width: 0;*/\n  height: 30px;\n  line-height: 20px;\n  margin: 22px 0 0;\n  padding: 0 10px 0 0;\n  font-size: 15px;\n  /*color: #fff !important;*/\n  outline: 0;\n  border-radius: 0;\n  border: 0;\n  /*opacity: 1;*/\n  /*opacity: 1;*/\n  /*-webkit-transition: all .8s ease-in-out;\n  -moz-transition: all .8s ease-in-out;\n  -o-transition: all .8s ease-in-out;\n  transition: all .8s ease-in-out;\n  -webkit-appearance: none;*/\n  width: 160px;\n  margin-left: 33px;\n  background: none;\n  border-bottom: 1px solid #f1f1f1;\n  opacity: 1;\n  margin-top: -4px !important;\n}\n/*\n.search-bar:hover .nav-search input {\n    width: 160px;\n    margin-left: 33px;\n    background: none;\n    border-bottom: 1px solid #f1f1f1;\n    opacity: 1;\n}\n*/\n/*\n.nav-search input::-webkit-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input::-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-moz-placeholder {\n    color: #eee;\n}\n\n.nav-search input:-ms-input-placeholder {\n    color: #eee;\n}\n\n.nav-search input:focus {\n    color: #fff;\n}\n*/\n/*\n#masthead .search-bar input.gsc-input {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n#masthead .search-bar.visible input.gsc-input {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n*/\n/******************************/\n/* 縮小寬度之下的導航列 */\n.nav-search input.search_input,\n.search-bar:hover .nav-search input {\n  background-color: white;\n  color: black !important;\n  padding-left: 0.5em;\n  border-radius: 3px;\n  margin-top: 27px;\n}\n#masthead.fixed-nav.affix .search-bar {\n  padding-bottom: 0;\n}\n#masthead.fixed-nav .descriptionwrapper {\n  display: none;\n}\n/***********************/\n.gsc-control-cse {\n  border-color: transparent !important;\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n.gcse {\n  float: left;\n  /*margin-left: 30px;*/\n  margin-top: 7px;\n}\n.nav-search .srch_btn {\n  float: left;\n}\n.cse .gsc-control-wrapper-cse,\n#masthead .gsc-control-wrapper-cse {\n  width: 160px !important;\n  transition: width 0.2s !important;\n}\n.gsc-search-button {\n  display: none !important;\n}\n#masthead .gsc-input-box {\n  border-radius: 0.5em !important;\n  /*border: 2px solid yellow;*/\n}\n.gsc-input-box input.gsc-input {\n  opacity: 1 !important;\n  /*border-width: 0;*/\n  background-image: none !important;\n  box-shadow: inset 0px 0px 0px 0px red;\n  text-indent: 0 !important;\n}\n@media (max-width: 979px) {\n  #masthead .search-bar .gcse {\n    margin-top: 13px;\n  }\n  #masthead .nav-search input {\n    line-height: 34px;\n  }\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  #masthead .gsc-control-wrapper-cse {\n    width: 135px !important;\n  }\n}\n@media (min-width: 979px) {\n  #masthead .search-bar .gcse {\n    margin-top: 7px;\n  }\n  /*\n  #masthead.fixed-nav .search-bar .srch_btn {\n    margin-top: -15px;\n  }\n  */\n  #masthead .nav-search input {\n    line-height: 26px;\n  }\n}\n@media (max-width: 680px) {\n  .search-bar {\n    /*display: none;*/\n    position: absolute;\n    top: -1000px;\n  }\n  /*********************/\n  .navbar .nav li.search {\n    display: list-item !important;\n  }\n  .navbar .nav li.search form {\n    margin: 0;\n  }\n  .navbar .nav li.search input {\n    width: calc(100% - 100px);\n    /*margin: 0 18px;*/\n  }\n  .navbar .nav li.search .srch_btn {\n    height: 42px;\n    width: 23px;\n    margin-top: 0;\n    background: url(//3.bp.blogspot.com/-h-x1pzE69JE/U5sUcTyNfAI/AAAAAAAAAdg/PYKJ6twHM1M/s1600/search-icon.png) 2px center no-repeat;\n    text-indent: 9999px;\n    position: relative;\n    float: left;\n    margin-left: 18px;\n    margin-right: 10px;\n    margin-top: -5px;\n    display: inline !important;\n    border-width: 0;\n  }\n  /*\n  .search-bar {\n      clear: both;\n      padding-top: 0;\n      padding-bottom: 5px;\n  }\n  .search-bar form {\n      margin: 0;\n  }\n  .nav-search input {\n      margin-top: 5px;\n  }\n  .navbar .btn-navbar {\n      margin-bottom: 0;\n  }\n\n  /*.search-bar:hover .nav-search input {\n      width:100%;\n  }\n  */\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".gcse .gsc-results-wrapper-overlay {\n  line-height: 1.5em;\n  top: 50px;\n  height: calc(100vh - 160px);\n  left: 50px;\n  width: calc(100vw - 160px);\n}\n.gcse .gsc-results-wrapper-overlay .gcsc-branding {\n  display: none;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor-box {\n  text-align: center;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n  padding: 7px 10px;\n  border: 1px solid gray !important;\n  border-radius: 5px;\n  cursor: pointer !important;\n  color: gray;\n  text-decoration: none !important;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page {\n  color: black;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper {\n  max-height: calc(100% - 120px);\n  overflow-y: auto;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper > .gsc-adBlock {\n  display: none;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper img.gs-image {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  border: 1px solid gray;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n  width: 176px;\n}\n.gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box {\n  width: 176px;\n  height: auto !important;\n  max-height: 176px;\n  /*margin-right: calc(1em + 7px);*/\n  top: -3em;\n  margin-bottom: -3em;\n  position: relative;\n}\n.gcse .gsc-results-wrapper-overlay div.gs-title,\n.gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n  margin-left: calc(176px + 1em);\n}\n.gcse .gsc-results-wrapper-overlay div.gs-snippet {\n  margin-left: 19px;\n}\n.gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail {\n  width: 176px;\n  display: block !important;\n}\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page.gsc-cursor-current-page,\n.gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page:hover {\n  background-color: #AD7518;\n  color: white;\n}\n/* ****************************************** */\n/* @media (max-width: 680px) { */\n@media (max-width: 680px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 20px;\n    height: calc(100vh - 100px);\n    left: 20px;\n    width: calc(100vw - 100px);\n  }\n}\n/* ****************************************** */\n/* @media (max-width: 460px) { */\n@media (max-width: 480px) {\n  .gcse .gsc-results-wrapper-overlay {\n    top: 0px;\n    height: calc(100vh - 60px);\n    left: 0px;\n    width: calc(100vw - 60px);\n  }\n  .gcse .gsc-results-wrapper-overlay div.gs-title,\n  .gcse .gsc-results-wrapper-overlay div.gsc-url-top {\n    margin-left: 0;\n  }\n  .gcse .gsc-results-wrapper-overlay div.gs-snippet {\n    margin-left: 6px;\n  }\n  .gcse .gsc-results-wrapper-overlay td.gsc-table-cell-thumbnail.gsc-thumbnail,\n  .gcse .gsc-results-wrapper-overlay .gs-image-box.gs-web-image-box,\n  .gcse .gsc-results-wrapper-overlay .gsc-wrapper a.gs-image {\n    width: 0;\n  }\n  .gcse .gsc-results-wrapper-overlay .gsc-cursor .gsc-cursor-page {\n    line-height: 35px;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/masthead/masthead.less ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/******************/\n#masthead #header h1 {\n  line-height: 30px;\n  margin-top: 10px;\n}\n#masthead.fixed-nav {\n  opacity: 1 !important;\n  background-color: rgba(34, 34, 34, 0.9) !important;\n  top: 0;\n  position: fixed !important;\n}\n#masthead.fixed-nav .affix #header h1 {\n  line-height: 22px;\n}\n/* ------------------------------ */\n@media (max-width: 480px) {\n  #masthead #header .description {\n    display: none;\n  }\n  #masthead #header {\n    /*margin-top: 15px;*/\n    margin-right: 0 ;\n    max-width: calc(100% - 101px);\n    /*margin-left: 5px;*/\n    overflow-x: hidden;\n    white-space: nowrap;\n  }\n  #masthead {\n    height: auto;\n  }\n  /*\n  #masthead #header h1 {\n      line-height:50px;\n      margin-top: 2px;\n  }\n  */\n}\n@media (max-width: 979px) {\n  #masthead #header #header-inner {\n    /*margin-left: 10px !important;*/\n    margin-top: 15px;\n  }\n  /************/\n  #masthead {\n    position: fixed;\n  }\n  #masthead.fixed-nav.affix .btn-navbar {\n    margin-top: 5px;\n    margin-bottom: 0;\n  }\n  #masthead.fixed-nav.affix #header h1 {\n    line-height: 55px;\n    margin-top: 0 !important;\n  }\n  #masthead.fixed-nav.affix #header-inner {\n    margin-top: 0px;\n  }\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a {\n    padding-left: 22px !important;\n  }\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:hover,\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:active,\n  #masthead.fixed-nav.affix .navbar .nav .dropdown-menu li a:focus {\n    padding-left: 19px !important;\n  }\n}\n@media (min-width: 979px) and (max-width: 1200px) {\n  .navbar {\n    width: 960px !important;\n  }\n}\n@media (max-height: 480px) {\n  #masthead.fixed-nav {\n    position: absolute !important;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/sidebar/sidebar.less ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#sidebar .widget.about-me .description .avatar-image-container {\n  background-image: url(//lh3.googleusercontent.com/-tkBPlsBsFJg/V0M0b-gPKNI/AAAAAAACw9Y/Y-2BGg4z3H4/Image.jpg?imgmax=50);\n  background-repeat: no-repeat;\n  border-width: 0;\n  height: 54px;\n  width: 54px;\n  border-right-width: 0px;\n  border-top-width: 0px;\n  border-bottom-width: 0px;\n  border-left-width: 0px;\n  margin-left: 0.5rem;\n  display: block;\n  float: right;\n}\n#sidebar .widget.about-me .link-buttons {\n  white-space: nowrap;\n}\n#sidebar .widget a h2 {\n  cursor: inherit;\n}\n#sidebar .widget h2 {\n  cursor: default;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/2_style.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.post-avatar {\n  border: 3px solid #eaeaea;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  float: left;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.foundation {\n  margin-bottom: 121px;\n  margin-top: -103px;\n}\n.meta {\n  margin-top: 63px;\n  position: absolute;\n  margin-left: 126px;\n}\n.avatar-name {\n  color: #fff;\n  font-size: 18px;\n  margin-left: 126px;\n  margin-bottom: -48px;\n  padding-top: 17px;\n  display: none;\n}\n.post-avatar:hover {\n  border-radius: 50%;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar h2 > span {\n  position: relative;\n  bottom: -2px;\n  display: inline-block;\n  border-bottom: 2px solid #e23a3e;\n  padding-bottom: 5px;\n  margin-top: 0px;\n}\n.read-more {\n  display: block;\n  float: left;\n  border-radius: 3px;\n  font-size: 13px;\n  padding: 7px 20px;\n  background: #333;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: 1px solid #1D1D1D;\n  margin-top: 13px;\n  margin-bottom: 12px;\n}\n#masthead.fixed-nav img {\n  margin-top: 0;\n  width: auto;\n  max-height: 85%;\n}\n#masthead.fixed-nav form {\n  margin-top: -16px;\n}\n#masthead.fixed-nav h1 {\n  font-size: 20px;\n  margin-top: 9px;\n}\ndiv.meta1 p {\n  padding: 10px 0;\n  margin-bottom: -20px;\n  font-size: 16px;\n}\n.meta1 span {\n  margin-right: 10px;\n}\n.label,\n.badge {\n  display: inline-block;\n  padding: 2px 4px;\n  font-size: 11.844px;\n  font-weight: bold;\n  line-height: 14px;\n  color: #fff;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  background-color: #999;\n}\n.label {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.badge {\n  padding-left: 9px;\n  padding-right: 9px;\n  -webkit-border-radius: 9px;\n  -moz-border-radius: 9px;\n  border-radius: 9px;\n}\n.label:empty,\n.badge:empty {\n  display: none;\n}\na.label:hover,\na.label:focus,\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n#footer {\n  line-height: 30px;\n  padding: 10px 0 0px 0;\n  background-color: #1a1a1a;\n}\n#footer p {\n  font-size: 13px;\n  float: left;\n  line-height: 30px;\n}\n#footer a {\n  color: #F57676;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/3_custom_style.less ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#header-inner {\n  width: auto !important;\n  /*padding-left: 60px !important;*/\n  background-position: left top !important;\n  background-image: none !important;\n}\n#header-inner .descriptionwrapper {\n  margin-top: 5px;\n}\n.fixed-nav.affix #header-inner .descriptionwrapper,\n.fixed-nav.affix #header-inner img {\n  display: none;\n}\n.fixed-nav.affix #header-inner {\n  background-image: none !important;\n}\n#sidebar-popular-post .popular-posts > ul > dd {\n  display: none;\n}\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#sidebar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display: block;\n}\n.site-footer .cloud-label-widget-content a {\n  color: #CCC;\n}\n.entry-image {\n  max-height: 430px;\n}\n/* ****************** */\n.entry-content {\n  line-height: 200%;\n}\n.entry-content > article > p {\n  text-indent: 2em;\n}\n.entry-content h4 {\n  font-size: 24pt;\n  color: #BD8A39;\n}\n.entry-content h5 {\n  font-size: 20pt;\n  color: #BD8A39;\n}\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #BD8A39;\n}\n.entry-content hr {\n  border-top: 2px solid #DEB46F;\n  border-bottom: 2px solid #BD8A39;\n}\n/*\n.entry-content ul {\n\n}\n\n*/\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/header.less ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#masthead header .back-button {\n  float: left;\n  font-size: 30px;\n  padding-right: 10px;\n  color: white;\n  cursor: pointer;\n  line-height: 68px;\n  width: 30px;\n  /*\n    .back-button {\n      font-size: 20px;\n      line-height: 55px;\n      margin-top: 0px;\n    }\n    */\n}\n#masthead header #header {\n  margin-top: -2px;\n  cursor: default;\n}\n#masthead header #header #header-inner.header-inner-not-mobile {\n  background-repeat: no-repeat;\n}\n#masthead header #header #header-inner:not(.no-header-image) .titlewrapper {\n  background: transparent;\n}\n#masthead header #header #header-inner:not(.no-header-image) .titlewrapper .title {\n  background: transparent;\n  border-width: 0px;\n}\n#masthead header #header #header-inner-link,\n#masthead header #header #header-inner-link > a {\n  display: block;\n}\n#masthead header #header .descriptionwrapper {\n  cursor: default;\n}\n#masthead.fixed-nav header {\n  margin-top: -5px;\n}\n#masthead.fixed-nav header #header {\n  /*margin-top: -5px;*/\n  line-height: 56px;\n  margin-top: 0;\n}\n#masthead.fixed-nav header #header h1.title {\n  margin-top: 0;\n  line-height: 56px;\n}\n#masthead.fixed-nav header .back-button {\n  font-size: 20px;\n  line-height: 56px;\n  width: 20px;\n  margin-top: -1px;\n}\n@media (min-width: 979px) {\n  /*\n  #header {\n    margin-top: -5px;\n  }\n  */\n}\n@media (max-width: 979px) {\n  #masthead header .back-button {\n    margin-left: 20px;\n  }\n  #masthead header .back-button.placeholder {\n    width: 20px;\n    height: 20px;\n    margin-left: 0;\n    padding-right: 0;\n  }\n  #masthead.fixed-nav header #header {\n    /*\n      margin-top: 3px;\n      margin-bottom: -3px;\n      */\n    margin: 0;\n  }\n  #masthead.fixed-nav header #header h1.title {\n    /*line-height: 55px;*/\n    font-size: 20px;\n    /*padding-left: 5px;*/\n    margin-top: 0px;\n    line-height: 56px;\n  }\n  #masthead.fixed-nav header #header #header-inner {\n    min-height: auto;\n    margin-left: 0 !important;\n    margin-top: auto;\n  }\n  #masthead.fixed-nav header .back-button {\n    margin-right: 0;\n    line-height: 56px;\n  }\n}\n@media (max-width: 480px) {\n  #masthead header,\n  #masthead.fixed-nav header {\n    overflow: hidden;\n    margin-top: 0;\n  }\n  #masthead header #header,\n  #masthead.fixed-nav header #header {\n    /*border:1px solid red;*/\n    max-width: calc(100% - 80px);\n    margin: 0;\n  }\n  #masthead header #header h1.title,\n  #masthead.fixed-nav header #header h1.title {\n    /*line-height: 55px;*/\n    font-size: 20px;\n    /*padding-left: 5px;*/\n    margin-top: 0px;\n    line-height: 56px;\n  }\n  #masthead header #header #header-inner,\n  #masthead.fixed-nav header #header #header-inner {\n    min-height: auto;\n    margin-left: 0 !important;\n    margin-top: auto;\n  }\n  #masthead header .back-button,\n  #masthead.fixed-nav header .back-button {\n    margin-right: -10px;\n    font-size: 20px;\n    line-height: 56px;\n  }\n  #masthead.fixed-nav header #header {\n    /*margin-top: -11px;*/\n    margin: 0;\n  }\n  #masthead.fixed-nav header .back-button {\n    margin-right: 0;\n    line-height: 56px;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/index.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .widget.Blog .entry-content a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n#main .widget.Blog .entry-content a:hover {\n  color: #F69087;\n}\n#main .widget.Blog .entry-meta .buttons a {\n  cursor: pointer;\n  display: block;\n  float: left;\n  border-radius: 3px;\n  font-size: 13px;\n  padding: 7px 20px;\n  background: #333;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: 1px solid #1D1D1D;\n  margin-top: 13px;\n  margin-bottom: 12px;\n  margin-left: 1em;\n}\n#main .widget.Blog .entry-meta .buttons a:hover {\n  color: #F69087;\n}\n/********************/\n@media (max-width: 480px) {\n  #main .widget.Blog {\n    /*********************/\n    /* 20160926 修正小視窗底下按鈕沒有置中的問題 */\n  }\n  #main .widget.Blog .entry-meta.clearfix > aside > .pull-left {\n    float: none;\n    text-align: center;\n    width: 100%;\n  }\n  #main .widget.Blog .entry-meta.clearfix > aside > .pull-left > .read-more,\n  #main .widget.Blog .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n    float: none;\n    width: 42%;\n    display: inline-block;\n  }\n  #main .widget.Blog .entry-meta.clearfix > aside > .pull-left > span.item-control.blog-admin a {\n    margin-left: 0;\n  }\n  /***********************/\n  #main .share-story {\n    display: none;\n  }\n  #main .post h1 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  #main .post .entry-content p {\n    font-size: 1rem;\n  }\n  #main .read-more {\n    width: 100%;\n    text-align: center;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #main .entry-meta .pull-left {\n    width: 100%;\n  }\n  #main .post > .entry-meta.clearfix > aside > .pull-left > .item-control.blog-admin a {\n    width: 100%;\n    margin-left: 0 !important;\n    margin-right: 0;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    text-align: center;\n  }\n  #main .entry-meta {\n    border-top-width: 0;\n    padding-top: 0;\n  }\n  #main .entry-content > p {\n    text-indent: 1em;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/navbar.less":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/navbar.less ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/***\n * 這是整個最上面的navbar設定\n **/\n#masthead.fixed-nav {\n  position: fixed;\n  top: 0;\n  width: 100% !important;\n  margin: 0px auto;\n  z-index: 999;\n  height: 56px;\n  opacity: 0.9;\n  -webkit-box-shadow: 0 5px 3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.1);\n}\n#masthead.fixed-nav .navbar {\n  height: 56px;\n  max-height: 56px;\n  overflow-y: hidden;\n}\n@media (max-width: 480px) {\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n}\n@media (max-height: 480px) {\n  /*\n  #masthead .navbar {\n    max-height: 56px;\n    overflow-y: hidden;\n  }\n  */\n  #masthead.fixed-nav {\n    background: #222222;\n    margin-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: 999;\n    box-shadow: none;\n    position: static;\n  }\n  #masthead .container {\n    box-shadow: none;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./lib-for-link/src/global-header/style/style.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".entry-content {\n  line-height: 200%;\n}\n.entry-content > article > p {\n  text-indent: 2em;\n  text-align: justify;\n}\n.entry-content h4 {\n  font-size: 24pt;\n  color: #BD8242;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content h5 {\n  font-size: 20pt;\n  color: #713E06;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n.entry-content h6 {\n  font-size: 18pt;\n  font-style: italic;\n  color: #634121;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n.entry-content hr {\n  border-top: 3px solid #CE8A42;\n  border-bottom: 0px solid #BD8A39;\n}\n.entry-content ul {\n  margin-left: 0em !important;\n}\n.entry-content li {\n  margin-left: 2em !important;\n}\n@media (max-width: 480px) {\n  .entry-content li {\n    margin-left: 1em !important;\n  }\n}\n.entry-content ul,\n.entry-content li {\n  /*margin-left: 2em !important;*/\n  margin-top: 0.5em !important;\n  margin-bottom: 0.5em !important;\n}\n.entry-content li {\n  list-style: square !important;\n  line-height: 200%;\n}\n.entry-content ol > li {\n  list-style: decimal !important;\n}\n.entry-content .post ol > li {\n  list-style: decimal !important;\n}\n.entry-content blockquote {\n  border-left-color: #F7EBDE;\n}\n.entry-content a {\n  text-decoration: underline;\n  color: #BD8242;\n}\n.entry-content h1 a {\n  text-decoration: none;\n  color: #333;\n}\n.entry-content table,\n.entry-content table th,\n.entry-content table td {\n  /*border: 1px solid #BD8242;*/\n}\n.entry-content > article > table > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.entry-content > article > table > tbody > tr > td,\n.entry-content > article > table > tbody > tr > th,\n.entry-content > article > table > tfoot > tr > td,\n.entry-content > article > table > tfoot > tr > th,\n.entry-content > article > table > thead > tr > td,\n.entry-content > article > table > thead > tr > th {\n  padding: 8px;\n  /*line-height: 1.42857143;*/\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.entry-content > article > table > tbody > tr:first-of-type > td {\n  border-top-width: 0;\n}\n.entry-content > article > table > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n#main .post > h3 {\n  display: none;\n}\n#main .post .entry-image .thumb {\n  width: 95%;\n  max-width: 95%;\n}\n#main .post .entry-image {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: calc(100% + 10px);\n}\n#main .post .entry-image > a[href] > img.thumb:first-of-type {\n  visibility: hidden;\n}\n/* ************************ */\n#disqus_thread {\n  overflow: hidden;\n  background: #FFFFFF;\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px;\n}\n/* ************************ */\n#Blog1_backlinks-container .comment-footer {\n  margin-top: 10px;\n}\n#footer_bar_body {\n  background: transparent;\n}\n/* *************************** */\n.about-me .description {\n  line-height: 1.5em;\n}\n.about-me .about-link {\n  /*float: right;*/\n  padding-bottom: 1.5em;\n}\n/* 20160601 加大About Me的高度 */\n#sidebar .about-me h3 {\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n}\n#sidebar .about-me .description {\n  margin-bottom: 2em;\n}\n#sidebar .about-link .read-more {\n  float: right;\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-left: 5px;\n  margin-top: 0;\n}\n#sidebar .about-link .social-button-wrapper {\n  margin-top: 4px;\n  display: inline-block;\n}\n.about-me .social-media {\n  margin-top: 0.5em;\n  text-align: center;\n  clear: both;\n}\n.about-me .email-subscribe {\n  text-align: center;\n  /*margin: 1em;*/\n}\n.about-me .widget-content {\n  margin: 0 1em;\n}\n.fb-fan-page .widget-content {\n  text-align: center;\n}\n.about-me .email-subscribe td:first-of-type {\n  text-align: left;\n  padding-top: 0.7em;\n}\n.about-me .email-subscribe .follow-by-email-address {\n  width: 95%;\n}\n.donation input[type=\"image\"] {\n  margin-top: 10px;\n  margin-right: 10px;\n}\n#footerbar-popular-post .popular-posts > ul > dd {\n  display: none;\n}\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(1),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(2),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(3),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(4),\n#footerbar-popular-post .popular-posts > ul > dd:nth-of-type(5) {\n  display: block;\n}\n.popular-posts {\n  padding-bottom: 0.5em;\n}\n@media (max-width: 979px) {\n  #footer_bar {\n    display: none;\n  }\n}\n.widget-content.popular-posts dd {\n  margin-bottom: 0.5em;\n  clear: both;\n}\n.widget-content.popular-posts img {\n  float: left;\n}\nh1.title {\n  font-size: 30px;\n}\n#header-inner .descriptionwrapper {\n  font-size: 14px;\n}\ndiv.post-avatar {\n  display: none;\n}\n.meta {\n  margin-left: 0px !important;\n}\n/************************/\n#content #archivespage ul {\n  margin-left: 0 !important;\n}\n#content #archivespage li.archivedate {\n  list-style: none !important;\n}\n@media (max-width: 979px) {\n  #content-wrapper {\n    padding-top: 80px;\n  }\n}\n.container1 {\n  width: 100% !important;\n}\n#footer .management {\n  clear: both;\n  /*margin-bottom: 70px;*/\n}\n@media (max-width: 979px) {\n  /*\n  .search-bar {\n      margin-top: 4px;\n      padding-left: 0;\n      padding-right: 0;\n  }\n  */\n  .navbar-inverse .navbar-inner {\n    background: #2d2d2d;\n  }\n  #header {\n    margin-right: 0;\n  }\n}\n/**********************************/\n/*\nbody .addthis-smartlayers {\n    display: none !important;\n}\n*/\n@media (min-width: 480px) and (max-width: 767px) {\n  .entry-container .entry-content {\n    padding: 50px;\n    padding-right: 20px;\n  }\n}\n.entry-container .entry-content > p {\n  text-indent: 2em;\n}\n.entry-container .entry-content a.more {\n  font-weight: bold;\n  text-decoration: none;\n}\n/**********************************/\n/* 底部區域 */\n.site-footer .cloud-label-widget-content .label-size-2,\n.site-footer .cloud-label-widget-content .label-size-1 {\n  display: none;\n}\n.site-footer .cloud-label-widget-content .btn {\n  float: right;\n  color: black;\n  margin-top: 1em;\n}\n/* 20160527網頁寬度低於460時，Buy Me A Coffee跟Hit Count應該分開為左右2欄 */\n@media (max-width: 979px) {\n  div.donation {\n    width: 49.5%;\n    float: left;\n    margin-right: 1%;\n  }\n  .site-footer .cloud-label-widget-content .label-size-3 {\n    display: none;\n  }\n}\n/*\n@media (max-width: 480px) {\n    .site-footer .cloud-label-widget-content .label-size-4 {\n        display:none;\n    }\n}\n*/\n/**********************************/\n.social-button {\n  background-color: #D6D7D6;\n  display: inline-block;\n  width: 33px;\n  height: 32px;\n  line-height: 33px;\n  border-radius: 16px;\n  -o-transition: all 0.2s linear;\n  -webkit-transition: all 0.2s linear;\n  -moz-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n}\n.social-button.facebook:hover {\n  color: white;\n  background-color: #3165A5;\n}\n.social-button.twitter:hover {\n  color: white;\n  background-color: #42AAE7;\n}\n.social-button.linkedin:hover {\n  color: white;\n  background-color: #0075B5;\n}\n.social-button.plurk:hover {\n  color: white;\n  background-color: #EF4539;\n}\n.social-button.line:hover {\n  color: white;\n  background-color: #4ACF00;\n}\n.social-button.google-plus:hover {\n  color: white;\n  background-color: #DE4939;\n}\n.social-button.chrome:hover {\n  color: white;\n  background-color: #42556B;\n}\n.social-button.github:hover {\n  color: white;\n  background-color: black;\n}\n.social-button.android:hover {\n  color: white;\n  background-color: #a4c639;\n}\n.social-button.chrome:hover {\n  color: white;\n  background-color: #4286F7;\n}\n.social-button.rss:hover {\n  color: white;\n  background-color: #F78631;\n}\n.social-button.addthis:hover {\n  color: white;\n  background-color: #FF5D39;\n}\n/* 20161118 */\n@media (min-width: 979px) {\n  .social-button.line,\n  .share-story-container li.line {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  div.share-story-container ul {\n    margin: 0;\n  }\n}\n.entry-meta.clearfix .share-story-container .about {\n  display: none;\n}\n.share-story-container ul {\n  text-align: right;\n}\n/***********************/\n.pager .previous.hidden {\n  visibility: hidden;\n}\n.pager li.link > span {\n  width: 6em;\n}\n.navbar .nav {\n  margin-right: 0;\n}\n/*******************************************/\n/* 20160530 文中自訂搜尋 */\n.entry-content .gsib_a {\n  /*padding-left:0;*/\n  padding-top: 0;\n}\n.entry-content .gsc-input-box {\n  height: auto;\n}\n.entry-content .gsc-search-button {\n  display: block !important;\n}\n.entry-content input.gsc-search-button {\n  height: 13px;\n  width: 13px;\n  padding: 0;\n  min-width: 0;\n  border-radius: 0.5em;\n  padding: 13px;\n  margin: 0;\n}\n/**********************************/\n/* 來處理SumoMe的問題 */\n/*\nbody > a[title=\"SumoMe\"] {\n  visibility: hidden;\n}\n\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] > img {\n  display: none;\n}\nbody > div.sumome-share-client-counts a[title=\"SumoMe\"] {\n  background-image: url(//lh3.googleusercontent.com/-qWpis5y0_fQ/Vwp4Y1ies0I/AAAAAAACuvg/9VCLXE9q7Wk/s0/share-alt.png) !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\nbody > div.sumome-share-client-wrapper.sumome-share-client-wrapper-left-page {\n  top: 111px !important;\n}\n\nbody > div.sumome-share-client-counts div.sumome-share-client-animated {\n  border: 1px solid rgb(15, 82, 186);\n}\n\n@media (max-height: 320px) {\n  body > div.sumome-share-client-wrapper {\n    display: none;\n  }\n}\n*/\n/**************************/\na[name][id]:target,\na[name=\"more\"]:target {\n  margin-top: -60px;\n  position: absolute;\n}\na#comment-form-anchor:target {\n  margin-top: -300px;\n}\n/*********************************************/\n/* 20160522 accesskey */\n#masthead a[accesskey],\n.site-footer a[accesskey] {\n  color: white;\n}\n#masthead a[accesskey].accesskey-menu {\n  /*line-height: 70px;*/\n  float: left;\n  /*padding-left:5px;*/\n}\n#masthead.fixed-nav a[accesskey].accesskey-menu {\n  /*line-height: 35px;*/\n}\n.site-footer .container {\n  padding-top: 0 !important;\n}\n#content-wrapper {\n  padding-top: 80px;\n}\n@media (max-width: 979px) {\n  #masthead a[accesskey].accesskey-menu {\n    /*line-height: 80px;*/\n  }\n  #masthead.fixed-nav a[accesskey].accesskey-menu {\n    /*line-height: 55px;*/\n  }\n}\n#masthead.fixed-nav li > a.accesskey-menu,\n.navbar .nav > li > a.accesskey-menu {\n  padding-left: 0;\n  padding-right: 0;\n}\n/****************************************/\n/* 20160523 常用按鈕 */\n.entry-content .post-btn {\n  text-decoration: none !important;\n  font-size: 1em;\n  padding: 0.5em;\n}\n.entry-content .post-btn.btn-primary {\n  color: white;\n}\n/********************************************************/\n/*\n * Social Buttons for Bootstrap\n *\n * Copyright 2013-2015 Panayiotis Lipiridis\n * Licensed under the MIT License\n *\n * https://github.com/lipis/bootstrap-social\n\n * 展示: https://lipis.github.io/bootstrap-social/\n */\n.btn-social {\n  position: relative;\n  padding-left: 44px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-social > :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n  line-height: 34px;\n  font-size: 1.6em;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social.btn-lg {\n  padding-left: 61px;\n}\n.btn-social.btn-lg > :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social.btn-sm {\n  padding-left: 38px;\n}\n.btn-social.btn-sm > :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social.btn-xs {\n  padding-left: 30px;\n}\n.btn-social.btn-xs > :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon {\n  position: relative;\n  padding-left: 44px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 34px;\n  width: 34px;\n  padding: 0;\n}\n.btn-social-icon > :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n  line-height: 34px;\n  font-size: 1.6em;\n  text-align: center;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n}\n.btn-social-icon.btn-lg {\n  padding-left: 61px;\n}\n.btn-social-icon.btn-lg > :first-child {\n  line-height: 45px;\n  width: 45px;\n  font-size: 1.8em;\n}\n.btn-social-icon.btn-sm {\n  padding-left: 38px;\n}\n.btn-social-icon.btn-sm > :first-child {\n  line-height: 28px;\n  width: 28px;\n  font-size: 1.4em;\n}\n.btn-social-icon.btn-xs {\n  padding-left: 30px;\n}\n.btn-social-icon.btn-xs > :first-child {\n  line-height: 20px;\n  width: 20px;\n  font-size: 1.2em;\n}\n.btn-social-icon > :first-child {\n  border: none;\n  text-align: center;\n  width: 100% !important;\n}\n.btn-social-icon.btn-lg {\n  height: 45px;\n  width: 45px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-sm {\n  height: 30px;\n  width: 30px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-social-icon.btn-xs {\n  height: 22px;\n  width: 22px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-adn {\n  color: #fff;\n  background-color: #d87a68;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:focus,\n.btn-adn.focus {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:hover {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n  color: #fff;\n  background-color: #ce563f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active:hover,\n.btn-adn.active:hover,\n.open > .dropdown-toggle.btn-adn:hover,\n.btn-adn:active:focus,\n.btn-adn.active:focus,\n.open > .dropdown-toggle.btn-adn:focus,\n.btn-adn:active.focus,\n.btn-adn.active.focus,\n.open > .dropdown-toggle.btn-adn.focus {\n  color: #fff;\n  background-color: #b94630;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n  background-image: none;\n}\n.btn-adn.disabled,\n.btn-adn[disabled],\nfieldset[disabled] .btn-adn,\n.btn-adn.disabled:hover,\n.btn-adn[disabled]:hover,\nfieldset[disabled] .btn-adn:hover,\n.btn-adn.disabled:focus,\n.btn-adn[disabled]:focus,\nfieldset[disabled] .btn-adn:focus,\n.btn-adn.disabled.focus,\n.btn-adn[disabled].focus,\nfieldset[disabled] .btn-adn.focus,\n.btn-adn.disabled:active,\n.btn-adn[disabled]:active,\nfieldset[disabled] .btn-adn:active,\n.btn-adn.disabled.active,\n.btn-adn[disabled].active,\nfieldset[disabled] .btn-adn.active {\n  background-color: #d87a68;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-adn .badge {\n  color: #d87a68;\n  background-color: #fff;\n}\n.btn-bitbucket {\n  color: #fff;\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:focus,\n.btn-bitbucket.focus {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:hover {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  color: #fff;\n  background-color: #163758;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active:hover,\n.btn-bitbucket.active:hover,\n.open > .dropdown-toggle.btn-bitbucket:hover,\n.btn-bitbucket:active:focus,\n.btn-bitbucket.active:focus,\n.open > .dropdown-toggle.btn-bitbucket:focus,\n.btn-bitbucket:active.focus,\n.btn-bitbucket.active.focus,\n.open > .dropdown-toggle.btn-bitbucket.focus {\n  color: #fff;\n  background-color: #0f253c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n  background-image: none;\n}\n.btn-bitbucket.disabled,\n.btn-bitbucket[disabled],\nfieldset[disabled] .btn-bitbucket,\n.btn-bitbucket.disabled:hover,\n.btn-bitbucket[disabled]:hover,\nfieldset[disabled] .btn-bitbucket:hover,\n.btn-bitbucket.disabled:focus,\n.btn-bitbucket[disabled]:focus,\nfieldset[disabled] .btn-bitbucket:focus,\n.btn-bitbucket.disabled.focus,\n.btn-bitbucket[disabled].focus,\nfieldset[disabled] .btn-bitbucket.focus,\n.btn-bitbucket.disabled:active,\n.btn-bitbucket[disabled]:active,\nfieldset[disabled] .btn-bitbucket:active,\n.btn-bitbucket.disabled.active,\n.btn-bitbucket[disabled].active,\nfieldset[disabled] .btn-bitbucket.active {\n  background-color: #205081;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-bitbucket .badge {\n  color: #205081;\n  background-color: #fff;\n}\n.btn-dropbox {\n  color: #fff;\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:focus,\n.btn-dropbox.focus {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:hover {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  color: #fff;\n  background-color: #0d6aad;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active:hover,\n.btn-dropbox.active:hover,\n.open > .dropdown-toggle.btn-dropbox:hover,\n.btn-dropbox:active:focus,\n.btn-dropbox.active:focus,\n.open > .dropdown-toggle.btn-dropbox:focus,\n.btn-dropbox:active.focus,\n.btn-dropbox.active.focus,\n.open > .dropdown-toggle.btn-dropbox.focus {\n  color: #fff;\n  background-color: #0a568c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n  background-image: none;\n}\n.btn-dropbox.disabled,\n.btn-dropbox[disabled],\nfieldset[disabled] .btn-dropbox,\n.btn-dropbox.disabled:hover,\n.btn-dropbox[disabled]:hover,\nfieldset[disabled] .btn-dropbox:hover,\n.btn-dropbox.disabled:focus,\n.btn-dropbox[disabled]:focus,\nfieldset[disabled] .btn-dropbox:focus,\n.btn-dropbox.disabled.focus,\n.btn-dropbox[disabled].focus,\nfieldset[disabled] .btn-dropbox.focus,\n.btn-dropbox.disabled:active,\n.btn-dropbox[disabled]:active,\nfieldset[disabled] .btn-dropbox:active,\n.btn-dropbox.disabled.active,\n.btn-dropbox[disabled].active,\nfieldset[disabled] .btn-dropbox.active {\n  background-color: #1087dd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-dropbox .badge {\n  color: #1087dd;\n  background-color: #fff;\n}\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:focus,\n.btn-facebook.focus {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:hover {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  color: #fff;\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active:hover,\n.btn-facebook.active:hover,\n.open > .dropdown-toggle.btn-facebook:hover,\n.btn-facebook:active:focus,\n.btn-facebook.active:focus,\n.open > .dropdown-toggle.btn-facebook:focus,\n.btn-facebook:active.focus,\n.btn-facebook.active.focus,\n.open > .dropdown-toggle.btn-facebook.focus {\n  color: #fff;\n  background-color: #23345a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n  background-image: none;\n}\n.btn-facebook.disabled,\n.btn-facebook[disabled],\nfieldset[disabled] .btn-facebook,\n.btn-facebook.disabled:hover,\n.btn-facebook[disabled]:hover,\nfieldset[disabled] .btn-facebook:hover,\n.btn-facebook.disabled:focus,\n.btn-facebook[disabled]:focus,\nfieldset[disabled] .btn-facebook:focus,\n.btn-facebook.disabled.focus,\n.btn-facebook[disabled].focus,\nfieldset[disabled] .btn-facebook.focus,\n.btn-facebook.disabled:active,\n.btn-facebook[disabled]:active,\nfieldset[disabled] .btn-facebook:active,\n.btn-facebook.disabled.active,\n.btn-facebook[disabled].active,\nfieldset[disabled] .btn-facebook.active {\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-facebook .badge {\n  color: #3b5998;\n  background-color: #fff;\n}\n.btn-flickr {\n  color: #fff;\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:focus,\n.btn-flickr.focus {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:hover {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  color: #fff;\n  background-color: #cc006a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active:hover,\n.btn-flickr.active:hover,\n.open > .dropdown-toggle.btn-flickr:hover,\n.btn-flickr:active:focus,\n.btn-flickr.active:focus,\n.open > .dropdown-toggle.btn-flickr:focus,\n.btn-flickr:active.focus,\n.btn-flickr.active.focus,\n.open > .dropdown-toggle.btn-flickr.focus {\n  color: #fff;\n  background-color: #a80057;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n  background-image: none;\n}\n.btn-flickr.disabled,\n.btn-flickr[disabled],\nfieldset[disabled] .btn-flickr,\n.btn-flickr.disabled:hover,\n.btn-flickr[disabled]:hover,\nfieldset[disabled] .btn-flickr:hover,\n.btn-flickr.disabled:focus,\n.btn-flickr[disabled]:focus,\nfieldset[disabled] .btn-flickr:focus,\n.btn-flickr.disabled.focus,\n.btn-flickr[disabled].focus,\nfieldset[disabled] .btn-flickr.focus,\n.btn-flickr.disabled:active,\n.btn-flickr[disabled]:active,\nfieldset[disabled] .btn-flickr:active,\n.btn-flickr.disabled.active,\n.btn-flickr[disabled].active,\nfieldset[disabled] .btn-flickr.active {\n  background-color: #ff0084;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-flickr .badge {\n  color: #ff0084;\n  background-color: #fff;\n}\n.btn-foursquare {\n  color: #fff;\n  background-color: #f94877;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:focus,\n.btn-foursquare.focus {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:hover {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  color: #fff;\n  background-color: #f71752;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active:hover,\n.btn-foursquare.active:hover,\n.open > .dropdown-toggle.btn-foursquare:hover,\n.btn-foursquare:active:focus,\n.btn-foursquare.active:focus,\n.open > .dropdown-toggle.btn-foursquare:focus,\n.btn-foursquare:active.focus,\n.btn-foursquare.active.focus,\n.open > .dropdown-toggle.btn-foursquare.focus {\n  color: #fff;\n  background-color: #e30742;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n  background-image: none;\n}\n.btn-foursquare.disabled,\n.btn-foursquare[disabled],\nfieldset[disabled] .btn-foursquare,\n.btn-foursquare.disabled:hover,\n.btn-foursquare[disabled]:hover,\nfieldset[disabled] .btn-foursquare:hover,\n.btn-foursquare.disabled:focus,\n.btn-foursquare[disabled]:focus,\nfieldset[disabled] .btn-foursquare:focus,\n.btn-foursquare.disabled.focus,\n.btn-foursquare[disabled].focus,\nfieldset[disabled] .btn-foursquare.focus,\n.btn-foursquare.disabled:active,\n.btn-foursquare[disabled]:active,\nfieldset[disabled] .btn-foursquare:active,\n.btn-foursquare.disabled.active,\n.btn-foursquare[disabled].active,\nfieldset[disabled] .btn-foursquare.active {\n  background-color: #f94877;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-foursquare .badge {\n  color: #f94877;\n  background-color: #fff;\n}\n.btn-github {\n  color: #fff;\n  background-color: #444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:focus,\n.btn-github.focus {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:hover {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  color: #fff;\n  background-color: #2b2b2b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active:hover,\n.btn-github.active:hover,\n.open > .dropdown-toggle.btn-github:hover,\n.btn-github:active:focus,\n.btn-github.active:focus,\n.open > .dropdown-toggle.btn-github:focus,\n.btn-github:active.focus,\n.btn-github.active.focus,\n.open > .dropdown-toggle.btn-github.focus {\n  color: #fff;\n  background-color: #191919;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n  background-image: none;\n}\n.btn-github.disabled,\n.btn-github[disabled],\nfieldset[disabled] .btn-github,\n.btn-github.disabled:hover,\n.btn-github[disabled]:hover,\nfieldset[disabled] .btn-github:hover,\n.btn-github.disabled:focus,\n.btn-github[disabled]:focus,\nfieldset[disabled] .btn-github:focus,\n.btn-github.disabled.focus,\n.btn-github[disabled].focus,\nfieldset[disabled] .btn-github.focus,\n.btn-github.disabled:active,\n.btn-github[disabled]:active,\nfieldset[disabled] .btn-github:active,\n.btn-github.disabled.active,\n.btn-github[disabled].active,\nfieldset[disabled] .btn-github.active {\n  background-color: #444;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-github .badge {\n  color: #444;\n  background-color: #fff;\n}\n.btn-google {\n  color: #fff;\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:focus,\n.btn-google.focus {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:hover {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n  color: #fff;\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active:hover,\n.btn-google.active:hover,\n.open > .dropdown-toggle.btn-google:hover,\n.btn-google:active:focus,\n.btn-google.active:focus,\n.open > .dropdown-toggle.btn-google:focus,\n.btn-google:active.focus,\n.btn-google.active.focus,\n.open > .dropdown-toggle.btn-google.focus {\n  color: #fff;\n  background-color: #a32b1c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n  background-image: none;\n}\n.btn-google.disabled,\n.btn-google[disabled],\nfieldset[disabled] .btn-google,\n.btn-google.disabled:hover,\n.btn-google[disabled]:hover,\nfieldset[disabled] .btn-google:hover,\n.btn-google.disabled:focus,\n.btn-google[disabled]:focus,\nfieldset[disabled] .btn-google:focus,\n.btn-google.disabled.focus,\n.btn-google[disabled].focus,\nfieldset[disabled] .btn-google.focus,\n.btn-google.disabled:active,\n.btn-google[disabled]:active,\nfieldset[disabled] .btn-google:active,\n.btn-google.disabled.active,\n.btn-google[disabled].active,\nfieldset[disabled] .btn-google.active {\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-google .badge {\n  color: #dd4b39;\n  background-color: #fff;\n}\n.btn-instagram {\n  color: #fff;\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:focus,\n.btn-instagram.focus {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:hover {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  color: #fff;\n  background-color: #305777;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active:hover,\n.btn-instagram.active:hover,\n.open > .dropdown-toggle.btn-instagram:hover,\n.btn-instagram:active:focus,\n.btn-instagram.active:focus,\n.open > .dropdown-toggle.btn-instagram:focus,\n.btn-instagram:active.focus,\n.btn-instagram.active.focus,\n.open > .dropdown-toggle.btn-instagram.focus {\n  color: #fff;\n  background-color: #26455d;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n  background-image: none;\n}\n.btn-instagram.disabled,\n.btn-instagram[disabled],\nfieldset[disabled] .btn-instagram,\n.btn-instagram.disabled:hover,\n.btn-instagram[disabled]:hover,\nfieldset[disabled] .btn-instagram:hover,\n.btn-instagram.disabled:focus,\n.btn-instagram[disabled]:focus,\nfieldset[disabled] .btn-instagram:focus,\n.btn-instagram.disabled.focus,\n.btn-instagram[disabled].focus,\nfieldset[disabled] .btn-instagram.focus,\n.btn-instagram.disabled:active,\n.btn-instagram[disabled]:active,\nfieldset[disabled] .btn-instagram:active,\n.btn-instagram.disabled.active,\n.btn-instagram[disabled].active,\nfieldset[disabled] .btn-instagram.active {\n  background-color: #3f729b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-instagram .badge {\n  color: #3f729b;\n  background-color: #fff;\n}\n.btn-linkedin {\n  color: #fff;\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:focus,\n.btn-linkedin.focus {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:hover {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  color: #fff;\n  background-color: #005983;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active:hover,\n.btn-linkedin.active:hover,\n.open > .dropdown-toggle.btn-linkedin:hover,\n.btn-linkedin:active:focus,\n.btn-linkedin.active:focus,\n.open > .dropdown-toggle.btn-linkedin:focus,\n.btn-linkedin:active.focus,\n.btn-linkedin.active.focus,\n.open > .dropdown-toggle.btn-linkedin.focus {\n  color: #fff;\n  background-color: #00405f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n  background-image: none;\n}\n.btn-linkedin.disabled,\n.btn-linkedin[disabled],\nfieldset[disabled] .btn-linkedin,\n.btn-linkedin.disabled:hover,\n.btn-linkedin[disabled]:hover,\nfieldset[disabled] .btn-linkedin:hover,\n.btn-linkedin.disabled:focus,\n.btn-linkedin[disabled]:focus,\nfieldset[disabled] .btn-linkedin:focus,\n.btn-linkedin.disabled.focus,\n.btn-linkedin[disabled].focus,\nfieldset[disabled] .btn-linkedin.focus,\n.btn-linkedin.disabled:active,\n.btn-linkedin[disabled]:active,\nfieldset[disabled] .btn-linkedin:active,\n.btn-linkedin.disabled.active,\n.btn-linkedin[disabled].active,\nfieldset[disabled] .btn-linkedin.active {\n  background-color: #007bb6;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-linkedin .badge {\n  color: #007bb6;\n  background-color: #fff;\n}\n.btn-microsoft {\n  color: #fff;\n  background-color: #2672ec;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:focus,\n.btn-microsoft.focus {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:hover {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n  color: #fff;\n  background-color: #125acd;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active:hover,\n.btn-microsoft.active:hover,\n.open > .dropdown-toggle.btn-microsoft:hover,\n.btn-microsoft:active:focus,\n.btn-microsoft.active:focus,\n.open > .dropdown-toggle.btn-microsoft:focus,\n.btn-microsoft:active.focus,\n.btn-microsoft.active.focus,\n.open > .dropdown-toggle.btn-microsoft.focus {\n  color: #fff;\n  background-color: #0f4bac;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n  background-image: none;\n}\n.btn-microsoft.disabled,\n.btn-microsoft[disabled],\nfieldset[disabled] .btn-microsoft,\n.btn-microsoft.disabled:hover,\n.btn-microsoft[disabled]:hover,\nfieldset[disabled] .btn-microsoft:hover,\n.btn-microsoft.disabled:focus,\n.btn-microsoft[disabled]:focus,\nfieldset[disabled] .btn-microsoft:focus,\n.btn-microsoft.disabled.focus,\n.btn-microsoft[disabled].focus,\nfieldset[disabled] .btn-microsoft.focus,\n.btn-microsoft.disabled:active,\n.btn-microsoft[disabled]:active,\nfieldset[disabled] .btn-microsoft:active,\n.btn-microsoft.disabled.active,\n.btn-microsoft[disabled].active,\nfieldset[disabled] .btn-microsoft.active {\n  background-color: #2672ec;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-microsoft .badge {\n  color: #2672ec;\n  background-color: #fff;\n}\n.btn-odnoklassniki {\n  color: #fff;\n  background-color: #f4731c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:focus,\n.btn-odnoklassniki.focus {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:hover {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active,\n.btn-odnoklassniki.active,\n.open > .dropdown-toggle.btn-odnoklassniki {\n  color: #fff;\n  background-color: #d35b0a;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active:hover,\n.btn-odnoklassniki.active:hover,\n.open > .dropdown-toggle.btn-odnoklassniki:hover,\n.btn-odnoklassniki:active:focus,\n.btn-odnoklassniki.active:focus,\n.open > .dropdown-toggle.btn-odnoklassniki:focus,\n.btn-odnoklassniki:active.focus,\n.btn-odnoklassniki.active.focus,\n.open > .dropdown-toggle.btn-odnoklassniki.focus {\n  color: #fff;\n  background-color: #b14c09;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki:active,\n.btn-odnoklassniki.active,\n.open > .dropdown-toggle.btn-odnoklassniki {\n  background-image: none;\n}\n.btn-odnoklassniki.disabled,\n.btn-odnoklassniki[disabled],\nfieldset[disabled] .btn-odnoklassniki,\n.btn-odnoklassniki.disabled:hover,\n.btn-odnoklassniki[disabled]:hover,\nfieldset[disabled] .btn-odnoklassniki:hover,\n.btn-odnoklassniki.disabled:focus,\n.btn-odnoklassniki[disabled]:focus,\nfieldset[disabled] .btn-odnoklassniki:focus,\n.btn-odnoklassniki.disabled.focus,\n.btn-odnoklassniki[disabled].focus,\nfieldset[disabled] .btn-odnoklassniki.focus,\n.btn-odnoklassniki.disabled:active,\n.btn-odnoklassniki[disabled]:active,\nfieldset[disabled] .btn-odnoklassniki:active,\n.btn-odnoklassniki.disabled.active,\n.btn-odnoklassniki[disabled].active,\nfieldset[disabled] .btn-odnoklassniki.active {\n  background-color: #f4731c;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-odnoklassniki .badge {\n  color: #f4731c;\n  background-color: #fff;\n}\n.btn-openid {\n  color: #fff;\n  background-color: #f7931e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:focus,\n.btn-openid.focus {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:hover {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n  color: #fff;\n  background-color: #da7908;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active:hover,\n.btn-openid.active:hover,\n.open > .dropdown-toggle.btn-openid:hover,\n.btn-openid:active:focus,\n.btn-openid.active:focus,\n.open > .dropdown-toggle.btn-openid:focus,\n.btn-openid:active.focus,\n.btn-openid.active.focus,\n.open > .dropdown-toggle.btn-openid.focus {\n  color: #fff;\n  background-color: #b86607;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n  background-image: none;\n}\n.btn-openid.disabled,\n.btn-openid[disabled],\nfieldset[disabled] .btn-openid,\n.btn-openid.disabled:hover,\n.btn-openid[disabled]:hover,\nfieldset[disabled] .btn-openid:hover,\n.btn-openid.disabled:focus,\n.btn-openid[disabled]:focus,\nfieldset[disabled] .btn-openid:focus,\n.btn-openid.disabled.focus,\n.btn-openid[disabled].focus,\nfieldset[disabled] .btn-openid.focus,\n.btn-openid.disabled:active,\n.btn-openid[disabled]:active,\nfieldset[disabled] .btn-openid:active,\n.btn-openid.disabled.active,\n.btn-openid[disabled].active,\nfieldset[disabled] .btn-openid.active {\n  background-color: #f7931e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-openid .badge {\n  color: #f7931e;\n  background-color: #fff;\n}\n.btn-pinterest {\n  color: #fff;\n  background-color: #cb2027;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:focus,\n.btn-pinterest.focus {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:hover {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n  color: #fff;\n  background-color: #9f191f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active:hover,\n.btn-pinterest.active:hover,\n.open > .dropdown-toggle.btn-pinterest:hover,\n.btn-pinterest:active:focus,\n.btn-pinterest.active:focus,\n.open > .dropdown-toggle.btn-pinterest:focus,\n.btn-pinterest:active.focus,\n.btn-pinterest.active.focus,\n.open > .dropdown-toggle.btn-pinterest.focus {\n  color: #fff;\n  background-color: #801419;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n  background-image: none;\n}\n.btn-pinterest.disabled,\n.btn-pinterest[disabled],\nfieldset[disabled] .btn-pinterest,\n.btn-pinterest.disabled:hover,\n.btn-pinterest[disabled]:hover,\nfieldset[disabled] .btn-pinterest:hover,\n.btn-pinterest.disabled:focus,\n.btn-pinterest[disabled]:focus,\nfieldset[disabled] .btn-pinterest:focus,\n.btn-pinterest.disabled.focus,\n.btn-pinterest[disabled].focus,\nfieldset[disabled] .btn-pinterest.focus,\n.btn-pinterest.disabled:active,\n.btn-pinterest[disabled]:active,\nfieldset[disabled] .btn-pinterest:active,\n.btn-pinterest.disabled.active,\n.btn-pinterest[disabled].active,\nfieldset[disabled] .btn-pinterest.active {\n  background-color: #cb2027;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-pinterest .badge {\n  color: #cb2027;\n  background-color: #fff;\n}\n.btn-reddit {\n  color: #000;\n  background-color: #eff7ff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:focus,\n.btn-reddit.focus {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:hover {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n  color: #000;\n  background-color: #bcddff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active:hover,\n.btn-reddit.active:hover,\n.open > .dropdown-toggle.btn-reddit:hover,\n.btn-reddit:active:focus,\n.btn-reddit.active:focus,\n.open > .dropdown-toggle.btn-reddit:focus,\n.btn-reddit:active.focus,\n.btn-reddit.active.focus,\n.open > .dropdown-toggle.btn-reddit.focus {\n  color: #000;\n  background-color: #98ccff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n  background-image: none;\n}\n.btn-reddit.disabled,\n.btn-reddit[disabled],\nfieldset[disabled] .btn-reddit,\n.btn-reddit.disabled:hover,\n.btn-reddit[disabled]:hover,\nfieldset[disabled] .btn-reddit:hover,\n.btn-reddit.disabled:focus,\n.btn-reddit[disabled]:focus,\nfieldset[disabled] .btn-reddit:focus,\n.btn-reddit.disabled.focus,\n.btn-reddit[disabled].focus,\nfieldset[disabled] .btn-reddit.focus,\n.btn-reddit.disabled:active,\n.btn-reddit[disabled]:active,\nfieldset[disabled] .btn-reddit:active,\n.btn-reddit.disabled.active,\n.btn-reddit[disabled].active,\nfieldset[disabled] .btn-reddit.active {\n  background-color: #eff7ff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-reddit .badge {\n  color: #eff7ff;\n  background-color: #000;\n}\n.btn-soundcloud {\n  color: #fff;\n  background-color: #f50;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:focus,\n.btn-soundcloud.focus {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:hover {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n  color: #fff;\n  background-color: #c40;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active:hover,\n.btn-soundcloud.active:hover,\n.open > .dropdown-toggle.btn-soundcloud:hover,\n.btn-soundcloud:active:focus,\n.btn-soundcloud.active:focus,\n.open > .dropdown-toggle.btn-soundcloud:focus,\n.btn-soundcloud:active.focus,\n.btn-soundcloud.active.focus,\n.open > .dropdown-toggle.btn-soundcloud.focus {\n  color: #fff;\n  background-color: #a83800;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n  background-image: none;\n}\n.btn-soundcloud.disabled,\n.btn-soundcloud[disabled],\nfieldset[disabled] .btn-soundcloud,\n.btn-soundcloud.disabled:hover,\n.btn-soundcloud[disabled]:hover,\nfieldset[disabled] .btn-soundcloud:hover,\n.btn-soundcloud.disabled:focus,\n.btn-soundcloud[disabled]:focus,\nfieldset[disabled] .btn-soundcloud:focus,\n.btn-soundcloud.disabled.focus,\n.btn-soundcloud[disabled].focus,\nfieldset[disabled] .btn-soundcloud.focus,\n.btn-soundcloud.disabled:active,\n.btn-soundcloud[disabled]:active,\nfieldset[disabled] .btn-soundcloud:active,\n.btn-soundcloud.disabled.active,\n.btn-soundcloud[disabled].active,\nfieldset[disabled] .btn-soundcloud.active {\n  background-color: #f50;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-soundcloud .badge {\n  color: #f50;\n  background-color: #fff;\n}\n.btn-tumblr {\n  color: #fff;\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:focus,\n.btn-tumblr.focus {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:hover {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  color: #fff;\n  background-color: #1c2d3f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active:hover,\n.btn-tumblr.active:hover,\n.open > .dropdown-toggle.btn-tumblr:hover,\n.btn-tumblr:active:focus,\n.btn-tumblr.active:focus,\n.open > .dropdown-toggle.btn-tumblr:focus,\n.btn-tumblr:active.focus,\n.btn-tumblr.active.focus,\n.open > .dropdown-toggle.btn-tumblr.focus {\n  color: #fff;\n  background-color: #111c26;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n  background-image: none;\n}\n.btn-tumblr.disabled,\n.btn-tumblr[disabled],\nfieldset[disabled] .btn-tumblr,\n.btn-tumblr.disabled:hover,\n.btn-tumblr[disabled]:hover,\nfieldset[disabled] .btn-tumblr:hover,\n.btn-tumblr.disabled:focus,\n.btn-tumblr[disabled]:focus,\nfieldset[disabled] .btn-tumblr:focus,\n.btn-tumblr.disabled.focus,\n.btn-tumblr[disabled].focus,\nfieldset[disabled] .btn-tumblr.focus,\n.btn-tumblr.disabled:active,\n.btn-tumblr[disabled]:active,\nfieldset[disabled] .btn-tumblr:active,\n.btn-tumblr.disabled.active,\n.btn-tumblr[disabled].active,\nfieldset[disabled] .btn-tumblr.active {\n  background-color: #2c4762;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-tumblr .badge {\n  color: #2c4762;\n  background-color: #fff;\n}\n.btn-twitter {\n  color: #fff;\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:focus,\n.btn-twitter.focus {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:hover {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  color: #fff;\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active:hover,\n.btn-twitter.active:hover,\n.open > .dropdown-toggle.btn-twitter:hover,\n.btn-twitter:active:focus,\n.btn-twitter.active:focus,\n.open > .dropdown-toggle.btn-twitter:focus,\n.btn-twitter:active.focus,\n.btn-twitter.active.focus,\n.open > .dropdown-toggle.btn-twitter.focus {\n  color: #fff;\n  background-color: #1583d7;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n  background-image: none;\n}\n.btn-twitter.disabled,\n.btn-twitter[disabled],\nfieldset[disabled] .btn-twitter,\n.btn-twitter.disabled:hover,\n.btn-twitter[disabled]:hover,\nfieldset[disabled] .btn-twitter:hover,\n.btn-twitter.disabled:focus,\n.btn-twitter[disabled]:focus,\nfieldset[disabled] .btn-twitter:focus,\n.btn-twitter.disabled.focus,\n.btn-twitter[disabled].focus,\nfieldset[disabled] .btn-twitter.focus,\n.btn-twitter.disabled:active,\n.btn-twitter[disabled]:active,\nfieldset[disabled] .btn-twitter:active,\n.btn-twitter.disabled.active,\n.btn-twitter[disabled].active,\nfieldset[disabled] .btn-twitter.active {\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-twitter .badge {\n  color: #55acee;\n  background-color: #fff;\n}\n.btn-vimeo {\n  color: #fff;\n  background-color: #1ab7ea;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:focus,\n.btn-vimeo.focus {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:hover {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n  color: #fff;\n  background-color: #1295bf;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active:hover,\n.btn-vimeo.active:hover,\n.open > .dropdown-toggle.btn-vimeo:hover,\n.btn-vimeo:active:focus,\n.btn-vimeo.active:focus,\n.open > .dropdown-toggle.btn-vimeo:focus,\n.btn-vimeo:active.focus,\n.btn-vimeo.active.focus,\n.open > .dropdown-toggle.btn-vimeo.focus {\n  color: #fff;\n  background-color: #0f7b9f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n  background-image: none;\n}\n.btn-vimeo.disabled,\n.btn-vimeo[disabled],\nfieldset[disabled] .btn-vimeo,\n.btn-vimeo.disabled:hover,\n.btn-vimeo[disabled]:hover,\nfieldset[disabled] .btn-vimeo:hover,\n.btn-vimeo.disabled:focus,\n.btn-vimeo[disabled]:focus,\nfieldset[disabled] .btn-vimeo:focus,\n.btn-vimeo.disabled.focus,\n.btn-vimeo[disabled].focus,\nfieldset[disabled] .btn-vimeo.focus,\n.btn-vimeo.disabled:active,\n.btn-vimeo[disabled]:active,\nfieldset[disabled] .btn-vimeo:active,\n.btn-vimeo.disabled.active,\n.btn-vimeo[disabled].active,\nfieldset[disabled] .btn-vimeo.active {\n  background-color: #1ab7ea;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vimeo .badge {\n  color: #1ab7ea;\n  background-color: #fff;\n}\n.btn-vk {\n  color: #fff;\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:focus,\n.btn-vk.focus {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:hover {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  color: #fff;\n  background-color: #466482;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active:hover,\n.btn-vk.active:hover,\n.open > .dropdown-toggle.btn-vk:hover,\n.btn-vk:active:focus,\n.btn-vk.active:focus,\n.open > .dropdown-toggle.btn-vk:focus,\n.btn-vk:active.focus,\n.btn-vk.active.focus,\n.open > .dropdown-toggle.btn-vk.focus {\n  color: #fff;\n  background-color: #3a526b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n  background-image: none;\n}\n.btn-vk.disabled,\n.btn-vk[disabled],\nfieldset[disabled] .btn-vk,\n.btn-vk.disabled:hover,\n.btn-vk[disabled]:hover,\nfieldset[disabled] .btn-vk:hover,\n.btn-vk.disabled:focus,\n.btn-vk[disabled]:focus,\nfieldset[disabled] .btn-vk:focus,\n.btn-vk.disabled.focus,\n.btn-vk[disabled].focus,\nfieldset[disabled] .btn-vk.focus,\n.btn-vk.disabled:active,\n.btn-vk[disabled]:active,\nfieldset[disabled] .btn-vk:active,\n.btn-vk.disabled.active,\n.btn-vk[disabled].active,\nfieldset[disabled] .btn-vk.active {\n  background-color: #587ea3;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-vk .badge {\n  color: #587ea3;\n  background-color: #fff;\n}\n.btn-yahoo {\n  color: #fff;\n  background-color: #720e9e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:focus,\n.btn-yahoo.focus {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:hover {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n  color: #fff;\n  background-color: #500a6f;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active:hover,\n.btn-yahoo.active:hover,\n.open > .dropdown-toggle.btn-yahoo:hover,\n.btn-yahoo:active:focus,\n.btn-yahoo.active:focus,\n.open > .dropdown-toggle.btn-yahoo:focus,\n.btn-yahoo:active.focus,\n.btn-yahoo.active.focus,\n.open > .dropdown-toggle.btn-yahoo.focus {\n  color: #fff;\n  background-color: #39074e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n  background-image: none;\n}\n.btn-yahoo.disabled,\n.btn-yahoo[disabled],\nfieldset[disabled] .btn-yahoo,\n.btn-yahoo.disabled:hover,\n.btn-yahoo[disabled]:hover,\nfieldset[disabled] .btn-yahoo:hover,\n.btn-yahoo.disabled:focus,\n.btn-yahoo[disabled]:focus,\nfieldset[disabled] .btn-yahoo:focus,\n.btn-yahoo.disabled.focus,\n.btn-yahoo[disabled].focus,\nfieldset[disabled] .btn-yahoo.focus,\n.btn-yahoo.disabled:active,\n.btn-yahoo[disabled]:active,\nfieldset[disabled] .btn-yahoo:active,\n.btn-yahoo.disabled.active,\n.btn-yahoo[disabled].active,\nfieldset[disabled] .btn-yahoo.active {\n  background-color: #720e9e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-yahoo .badge {\n  color: #720e9e;\n  background-color: #fff;\n}\n.btn-android {\n  color: #fff;\n  background-color: #558700;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:focus,\n.btn-android.focus {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:hover {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active,\n.btn-android.active,\n.open > .dropdown-toggle.btn-android {\n  color: #fff;\n  background-color: #345300;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active:hover,\n.btn-android.active:hover,\n.open > .dropdown-toggle.btn-android:hover,\n.btn-android:active:focus,\n.btn-android.active:focus,\n.open > .dropdown-toggle.btn-android:focus,\n.btn-android:active.focus,\n.btn-android.active.focus,\n.open > .dropdown-toggle.btn-android.focus {\n  color: #fff;\n  background-color: #39074e;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android:active,\n.btn-android.active,\n.open > .dropdown-toggle.btn-android {\n  background-image: none;\n}\n.btn-android.disabled,\n.btn-android[disabled],\nfieldset[disabled] .btn-android,\n.btn-android.disabled:hover,\n.btn-android[disabled]:hover,\nfieldset[disabled] .btn-android:hover,\n.btn-android.disabled:focus,\n.btn-android[disabled]:focus,\nfieldset[disabled] .btn-android:focus,\n.btn-android.disabled.focus,\n.btn-android[disabled].focus,\nfieldset[disabled] .btn-android.focus,\n.btn-android.disabled:active,\n.btn-android[disabled]:active,\nfieldset[disabled] .btn-android:active,\n.btn-android.disabled.active,\n.btn-android[disabled].active,\nfieldset[disabled] .btn-android.active {\n  background-color: #558700;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.btn-android .badge {\n  color: #558700;\n  background-color: #fff;\n}\n.entry-content .btn:not(.btn-primary) {\n  background-image: none;\n}\n.entry-content a.btn.btn-social {\n  color: white;\n  text-shadow: none;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.entry-content a.btn.btn-social.btn-reddit {\n  color: black;\n}\n.entry-content a.btn.btn-social:focus {\n  padding-left: 44px;\n}\n.entry-content a.btn.btn-lg.btn-social {\n  font-size: 18px;\n  line-height: 45px;\n}\n.entry-content a.btn.btn-lg.btn-social:focus {\n  padding-left: 61px;\n}\n.entry-content a.btn {\n  text-decoration: none;\n}\n/**********************************************/\n/* 20160527 調整側欄，加上RSS連結 */\n#sidebar .widget a.icon {\n  float: right;\n  line-height: 40px;\n  background: #FFFFFF;\n  font-size: 20px;\n  font-weight: normal;\n  padding: 10px 15px 0;\n  color: #292929;\n}\n/**********************************************/\n/* 20160608 首頁的labels */\n#main .index-labels {\n  display: none;\n}\n#main .meta .label-info a,\n#main .meta > p > small > span a {\n  text-decoration: none;\n  color: #333;\n}\n#main .meta > p > small > span {\n  margin-right: 10px;\n}\n#main .meta > p > small > span,\n#main .meta > p > small > a {\n  white-space: nowrap;\n}\n/*************************************/\n/* 20160625 小視窗的時候，主要文章的左右兩側，不要加入側邊欄 */\n@media (max-width: 480px) {\n  #content-wrapper #primary {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .sumome-stylebufferbottom-shim {\n    height: 50px;\n  }\n}\n/****************************************/\n/* 20160625 隨機文章 */\n.sidebar .widget-content li a {\n  font-size: inherit;\n  color: inherit;\n}\nul#random_posts {\n  list-style-type: none;\n  padding: 0px;\n  padding-bottom: 0.5em;\n}\n#random_posts dd {\n  line-height: 22px;\n  margin: 0;\n  padding: 8px 15px 8px 10px;\n  position: relative;\n  min-height: 55px;\n  border-left: 3px solid transparent;\n}\n#random_posts dd:hover {\n  background: #F8F8F8;\n  border-left: 3px solid #F69087;\n  cursor: pointer;\n}\n#random_posts img {\n  /*border-radius: 10px;*/\n  float: left;\n  margin-right: 5px;\n  max-width: 70px;\n  height: auto;\n  background-color: #F5F5F5;\n  padding: 3px;\n  transition: all 0.2s linear 0s;\n}\n/*\n#random_posts img:hover {\n    opacity: 0.6;\n}\n*/\n/*\n#random_posts a {\n    font-size: 12px;\n    text-transform: uppercase;\n    padding: 0px auto 5px;\n    \n}\n*/\n/*\n#random_posts a:hover {\n    text-decoration: none;\n}\n*/\n#random_posts .random-summary {\n  font-size: 11px;\n  background: none;\n  padding: 5px;\n  margin-right: 8px;\n}\n#random_posts li {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #EEEEEE;\n  padding: 4px;\n}\n#sidebar > .widget > a.icon {\n  cursor: pointer;\n}\n/*****************************************/\n/* 20160626 小畫面下面about me按鈕錯誤 */\n@media (max-width: 1200px) and (min-width: 979px) {\n  #sidebar .about-link .read-more {\n    padding: 5px;\n    margin-top: 2px;\n  }\n}\n/* @media (max-width: 1200px) and (min-width: 979px) { */\n#main .entry-container .entry-content .foundation .meta {\n  line-height: 100%;\n}\n#main .entry-container .entry-content > a:last-of-type {\n  display: none;\n}\n#main .entry-container .entry-content {\n  padding-bottom: 1px;\n}\n/*****************************/\n/* 20161116 */\n@media (max-width: 979px) {\n  #masthead.fixed-nav > .container {\n    box-shadow: 2px 2px 3px rgba(51, 51, 102, 0.5);\n  }\n}\n.entry-content p,\n.entry-content li {\n  color: black;\n}\n/******************************/\n/* 20170912 navbar */\n@media (max-width: 979px) {\n  #header-inner {\n    min-height: 40px;\n  }\n}\niframe#comment-editor {\n  width: 100% !important;\n  height: 250px;\n}\n.post-avatar {\n  background: url(//lh3.googleusercontent.com/-6qwdHih3tFk/Vv6N0dTaICI/AAAAAAACuRA/AsKTNm9c_Bg/s0/post-avatar.png);\n}\n.firstload-background {\n  background: url(//2.bp.blogspot.com/-h8fC3jrTphQ/U9Ywn5XUesI/AAAAAAAABGA/TOLe6IOXPtQ/s1600/pattern5.png) repeat scroll 0 0 transparent;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n.author-box {\n  float: left;\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 480px) {\n  body {\n    font-size: 1rem;\n  }\n}\n", ""]);



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
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/global-header/breeze-theme/font-awesome.css ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css ./lib-for-link/src/global-header/go-top/go-top.less ./lib-for-link/src/global-header/go-top/go-top.js ./lib-for-link/src/global-header/sidebar/sidebar.less ./lib-for-link/src/global-header/sidebar/sidebar.js ./lib-for-link/src/global-header/btn-navbar/nav-collapse.less ./lib-for-link/src/global-header/btn-navbar/btn-navbar.less ./lib-for-link/src/global-header/btn-navbar/btn-navbar.js ./lib-for-link/src/global-header/masthead/masthead.less ./lib-for-link/src/global-header/masthead/masthead.js ./lib-for-link/src/global-header/style/2_style.less ./lib-for-link/src/global-header/style/3_custom_style.less ./lib-for-link/src/global-header/style/header.less ./lib-for-link/src/global-header/style/addthis.css ./lib-for-link/src/global-header/style/navbar.less ./lib-for-link/src/global-header/style/index.less ./lib-for-link/src/global-header/style/style.less ./lib-for-link/src/global-header/gsc-search/default.css ./lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less ./lib-for-link/src/global-header/gsc-search/gsc-search-bar.less ./lib-for-link/src/global-header/gsc-search/gsc-search-result.less ./lib-for-link/src/global-header/gsc-search/gsc-search.js ./lib-for-link/src/global-header/modules/lscache/lscache.js ./lib-for-link/src/global-header/modules/lscache/lscacheHelper.js ./lib-for-link/src/global-header/breeze-theme/breeze.js ./lib-for-link/src/global-header/script/google-analytics.js ./lib-for-link/src/global-header/script/facebook.js ./lib-for-link/src/global-header/script/env-variables.js ./lib-for-link/src/global-header/script/back-button.js ./lib-for-link/src/global-header/script/script.js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/font-awesome.css */"./lib-for-link/src/global-header/breeze-theme/font-awesome.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css */"./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css */"./lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css");
__webpack_require__(/*! ./lib-for-link/src/global-header/go-top/go-top.less */"./lib-for-link/src/global-header/go-top/go-top.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/go-top/go-top.js */"./lib-for-link/src/global-header/go-top/go-top.js");
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
__webpack_require__(/*! ./lib-for-link/src/global-header/style/navbar.less */"./lib-for-link/src/global-header/style/navbar.less");
__webpack_require__(/*! ./lib-for-link/src/global-header/style/index.less */"./lib-for-link/src/global-header/style/index.less");
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