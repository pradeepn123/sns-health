/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/collapsible.js":
/*!**************************************!*\
  !*** ./js/components/collapsible.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapsible: () => (/* binding */ collapsible)
/* harmony export */ });
console.log("----------------------------");
var collapsible = () => {
  var _document$querySelect;
  (_document$querySelect = document.querySelectorAll('[data-test]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(triggerel => {
    triggerel.addEventListener("click", ev => {
      var container = ev.target.closest('[data-container]');
      var target_half = container === null || container === void 0 ? void 0 : container.querySelector('[data-content-half]');
      var target_full = container === null || container === void 0 ? void 0 : container.querySelector('[data-content-full]');
      if (target_half.classList.contains('text-wrap__description--hidden')) {
        target_half.style.display = "none";
        target_full.style.display = "block";
      } else {
        target_half.style.display = "block";
        target_full.style.display = "none";
      }
    });
  });
};

/***/ }),

/***/ "./js/components/custom-carousel.js":
/*!******************************************!*\
  !*** ./js/components/custom-carousel.js ***!
  \******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/shoptrade/Desktop/sns-health/js/components/custom-carousel.js: Unterminated template. (116:50)\n\n\u001b[0m \u001b[90m 114 |\u001b[39m \u001b[32m      </svg>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 115 |\u001b[39m \u001b[32m    </div>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 116 |\u001b[39m \u001b[32m     ${this.placeholders ? this.placeholders : ''}\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 117 |\u001b[39m \u001b[32m    this.container = this.querySelector('[data-swiper-container]');\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 118 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 119 |\u001b[39m \u001b[32m     const carouselSettings = this.getCarouselSettings();\u001b[39m\u001b[0m\n    at instantiate (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:358:12)\n    at JSXParserMixin.raise (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:3255:19)\n    at Object.unterminated (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:2266:20)\n    at readStringContents (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:1955:14)\n    at JSXParserMixin.readTemplateToken (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:3162:9)\n    at JSXParserMixin.readTemplateContinuation (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:3152:10)\n    at JSXParserMixin.parseTemplate (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:11639:12)\n    at JSXParserMixin.parseExprAtom (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:11194:21)\n    at JSXParserMixin.parseExprAtom (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10890:23)\n    at JSXParserMixin.parseUpdate (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOps (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10692:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10630:21)\n    at JSXParserMixin.parseMaybeAssign (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10656:25)\n    at JSXParserMixin.parseExpressionBase (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10584:23)\n    at /Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10580:39\n    at JSXParserMixin.allowInAnd (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12275:16)\n    at JSXParserMixin.parseExpression (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:10580:17)\n    at JSXParserMixin.parseStatementContent (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12733:23)\n    at JSXParserMixin.parseStatementLike (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12584:17)\n    at JSXParserMixin.parseStatementListItem (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12564:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13185:61)\n    at JSXParserMixin.parseBlockBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13178:10)\n    at JSXParserMixin.parseBlock (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13166:10)\n    at JSXParserMixin.parseFunctionBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:11947:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:11933:10)\n    at JSXParserMixin.parseMethod (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:11891:31)\n    at JSXParserMixin.pushClassMethod (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13619:30)\n    at JSXParserMixin.parseClassMemberWithIsStatic (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13491:12)\n    at JSXParserMixin.parseClassMember (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13435:10)\n    at /Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13385:14\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12257:14)\n    at JSXParserMixin.parseClassBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13365:10)\n    at JSXParserMixin.parseClass (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13343:22)\n    at JSXParserMixin.parseStatementContent (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12613:21)\n    at JSXParserMixin.parseStatementLike (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12584:17)\n    at JSXParserMixin.parseModuleItem (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12561:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13185:36)\n    at JSXParserMixin.parseBlockBody (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:13178:10)\n    at JSXParserMixin.parseProgram (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12460:10)\n    at JSXParserMixin.parseTopLevel (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:12450:25)\n    at JSXParserMixin.parse (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:14345:10)\n    at parse (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/parser/lib/index.js:14386:38)\n    at parser (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/shoptrade/Desktop/sns-health/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)");

/***/ }),

/***/ "./js/components/handleClick.js":
/*!**************************************!*\
  !*** ./js/components/handleClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var handleRedirectOnDiv = item => {
    var url = item.dataset.url;
    if (url) {
      window.location.href = url;
    }
  };
  var clickHandle = document.querySelectorAll('[data-redirect-click]');
  clickHandle.forEach(item => item.addEventListener('click', ev => {
    if (!ev.target.closest('.product-card__atc')) {
      handleRedirectOnDiv(item);
    }
  }));
});

/***/ }),

/***/ "./js/components/header.js":
/*!*********************************!*\
  !*** ./js/components/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  //mobile header megamenu
  document.querySelectorAll('[data-megamenu-mobile]').forEach(megamenu => {
    var targetId = megamenu.dataset.megamenuId;
    if (targetId) {
      var targetContainer = document.querySelector("[data-mobile-megamenu-target-".concat(targetId, "]"));
      if (targetContainer) {
        targetContainer.appendChild(megamenu);
      }
    }
  });
  //desktop header megamenu
  document.querySelectorAll('[data-megamenu-desktop]').forEach(megamenu => {
    var targetId = megamenu.dataset.megamenuId;
    if (targetId) {
      var targetContainer = document.querySelector("[data-desktop-megamenu-target-".concat(targetId, "]"));
      if (targetContainer) {
        targetContainer.appendChild(megamenu);
      }
    }
  });

  //header
  var headerWrapper = document.querySelector('.shopify-section__header');
  var searchBar = document.querySelector('.header__search-bar-wrapper--mobile');
  var navBar = document.querySelector('.nav-bar__inner');
  var searchIcon = document.querySelector('.header__action-item-link--search');
  var handleScroll = () => {
    var scrollTop = window.scrollY;
    searchBar.style.opacity = 1 - scrollTop / 85;
    navBar.style.opacity = 1 - scrollTop / 10;
    searchIcon.style.opacity = 1 - scrollTop / 10;
    if (scrollTop < 150) {
      if (headerWrapper.classList.contains('shopify-section__header--fixed')) {
        headerWrapper.classList.remove('shopify-section__header--fixed');
        // header.classList.remove('header-margin-scroll');
      }
    } else {
      headerWrapper.classList.add('shopify-section__header--fixed');
      // header.classList.add('header-margin-scroll');
    }
  };

  //For rebuy tag based
  Window.custom = {
    'rebuyTag': 'minerals'
  };
  window.searchOpen = true;
  window.addEventListener('scroll', () => {
    handleScroll();
  });
});

/***/ }),

/***/ "./js/components/product-card.js":
/*!***************************************!*\
  !*** ./js/components/product-card.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.HTMLElement = this.innerHTML;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ "./js/components/registerCustomElements.js":
/*!*************************************************!*\
  !*** ./js/components/registerCustomElements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/custom-carousel */ "./js/components/custom-carousel.js");
/* harmony import */ var JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/product-card */ "./js/components/product-card.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
  customElements.define('product-card', JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/object-fit/ls.object-fit */ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/rias/ls.rias */ "./node_modules/lazysizes/plugins/rias/ls.rias.js");
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/bgset/ls.bgset */ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js");
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/respimg/ls.respimg */ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js");
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! JsComponents/collapsible */ "./js/components/collapsible.js");
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");
/* harmony import */ var JsComponents_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! JsComponents/header */ "./js/components/header.js");
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");
/* harmony import */ var JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! JsComponents/registerCustomElements */ "./js/components/registerCustomElements.js");








(lazysizes__WEBPACK_IMPORTED_MODULE_0___default().cfg).loadMode = 1;



document.addEventListener('DOMContentLoaded', () => {
  (0,JsComponents_header__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_10__.collapsible)();
  (0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__.register)();
  window.handleJsClick = JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_8__["default"];
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./js/sections/global.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;