(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.mjs":
/*!***********************!*\
  !*** ./lib/index.mjs ***!
  \***********************/
/*! exports provided: deepStrictEqual, deepEqual, default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepStrictEqual", function() { return deepStrictEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony import */ var assert_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert-plus */ "assert-plus");
/* harmony import */ var json_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-diff */ "json-diff");



function AssertDiff() {
  assert_plus__WEBPACK_IMPORTED_MODULE_0__.ok.apply(assert_plus__WEBPACK_IMPORTED_MODULE_0__.ok, arguments);
}

AssertDiff.options = {strict: false};

Object.keys(assert_plus__WEBPACK_IMPORTED_MODULE_0__).forEach(function(k) {
  AssertDiff[k] = function() {
    assert_plus__WEBPACK_IMPORTED_MODULE_0__[k].apply(assert_plus__WEBPACK_IMPORTED_MODULE_0__[k], arguments);
  };
});

const deepStrictEqual = AssertDiff.deepStrictEqual = function deepStrictEqual() {
  try {
    assert_plus__WEBPACK_IMPORTED_MODULE_0__.deepStrictEqual.apply(assert_plus__WEBPACK_IMPORTED_MODULE_0__.deepStrictEqual, arguments);
  } catch (e) {
    throw new assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError({
      message: addDiffToMessage(e.message, json_diff__WEBPACK_IMPORTED_MODULE_1__.diffString(e.expected, e.actual)),
      stackStartFunction: assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError
    })
  }
};

const deepEqual = AssertDiff.deepEqual = function deepEqual() {
  try {
    assert_plus__WEBPACK_IMPORTED_MODULE_0__.deepEqual.apply(assert_plus__WEBPACK_IMPORTED_MODULE_0__.deepEqual, arguments);
  } catch (e) {
    throw new assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError({
      message: addDiffToMessage(e.message, json_diff__WEBPACK_IMPORTED_MODULE_1__.diffString(e.expected, e.actual)),
      stackStartFunction: assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError
    })
  }
  if (AssertDiff.options.strict && json_diff__WEBPACK_IMPORTED_MODULE_1__.diff(arguments[0], arguments[1])) {
    throw new assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError({
      message: addDiffToMessage(arguments[2], json_diff__WEBPACK_IMPORTED_MODULE_1__.diffString(arguments[0], arguments[1])),
      stackStartFunction: assert_plus__WEBPACK_IMPORTED_MODULE_0__.AssertionError
    })
  }
};

function addDiffToMessage(message, diff) {
  var msg = message ? message : '';
  var resetCliColorAttributes = '\u001b[m';

  return msg + resetCliColorAttributes + '\n' + diff;
}

AssertDiff.deepEqualOrig = assert_plus__WEBPACK_IMPORTED_MODULE_0__.deepEqual;

/* harmony default export */ __webpack_exports__["default"] = (AssertDiff);


/***/ }),

/***/ "assert-plus":
/*!******************************!*\
  !*** external "assert-plus" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert-plus");

/***/ }),

/***/ "json-diff":
/*!****************************!*\
  !*** external "json-diff" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-diff");

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map