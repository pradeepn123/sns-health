/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/collapsible.js":
/*!**************************************!*\
  !*** ./js/components/collapsible.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var _excluded = ["breakpoints"],
  _excluded2 = ["pagination", "navigation"],
  _excluded3 = ["navigation", "pagination", "progressPagination"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.HTMLElement;
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
  }
  connectedCallback() {
    if (this.innerHTML.length > 0) {
      this.initCarousel();
    } else {
      var that = this;
      var checkHtmlLength = window.setInterval(() => {
        if (this.innerHTML.length > 0) {
          that.initCarousel();
          window.clearInterval(checkHtmlLength);
          checkHtmlLength = false;
        }
      }, 500);
      window.setTimeout(() => {
        if (checkHtmlLength) {
          window.clearInterval(checkHtmlLength);
        }
      }, 5000);
    }
  }
  getCarouselSettings() {
    this.currentWidth = window.innerWidth;
    //default settings
    var defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    };
    var carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    var _this$carouselSetting = this.carouselSettings,
      {
        breakpoints
      } = _this$carouselSetting,
      otherSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting, _excluded);
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          } else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }
          var _this$breakpointSetti = this.breakpointSettings,
            {
              pagination,
              navigation
            } = _this$breakpointSetti,
            otherResponsiveSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$breakpointSetti, _excluded2);
          this.carouselSettings = _objectSpread(_objectSpread(_objectSpread({}, otherSettings), otherResponsiveSettings), {}, {
            pagination,
            navigation
          });
        }
      });
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      var _this$carouselSetting2 = this.carouselSettings,
        {
          navigation,
          pagination,
          progressPagination
        } = _this$carouselSetting2,
        otherSwiperSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting2, _excluded3);
      carouselSettings = _objectSpread({}, otherSwiperSettings);
      if (navigation) {
        var navigationNext = this.querySelector('.swiper-navigation--next');
        var navigationPrev = this.querySelector('.swiper-navigation--prev');
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        });
      }
      if (pagination) {
        var swiperPagination = this.querySelector('.swiper-pagination');
        var _pagination = {
          el: swiperPagination,
          clickable: true
        };
        if (progressPagination) {
          _pagination = {
            el: swiperPagination,
            type: 'progressbar'
          };
        }
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          pagination: _pagination
        });
      }
    }
    return carouselSettings;
  }
  initCarousel() {
    var _this$querySelector;
    this.HTMLElement = this.innerHTML;
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    this.currentWidth = window.innerWidth;
    var carouselSettings = this.getCarouselSettings() || {};
    this.innerHTML = "<div class=\"carousel__container swiper hide\" data-swiper-container>\n    <div class=\"swiper-wrapper \">\n    ".concat(this.HTMLElement, "\n    </div> </div>\n    <div class=\"swiper-pagination\"></div>\n    <div class=\"swiper-navigation swiper-navigation--next ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n      <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n      <path d=\"M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    <div class=\"swiper-navigation swiper-navigation--prev ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n        <path d=\"M22.7061 26.353L16.9413 20.5883L22.7061 14.8236\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    <div class=\"carousel-placeholders\">\n      ").concat(this.carouselSettings.placeholderClass == ".carousel-placeholders--product-grid" ? "\n      <div class=\"placeholder\"></div>\n      <div class=\"placeholder\"></div>\n      <div class=\"placeholder\"></div>\n      <div class=\"placeholder\"></div>\n      <div class=\"placeholder\"></div>" : '', "\n    </div>");
    this.container = this.querySelector('[data-swiper-container]');
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.container, _objectSpread({
      on: {
        beforeInit: () => {
          var {
            navigation,
            pagination
          } = carouselSettings || {};
          if (!navigation) {
            this.querySelectorAll('.swiper-navigation').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          } else {
            this.querySelector('.swiper-navigation--hide') && this.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
          if (!pagination) {
            this.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          } else {
            this.querySelector('.swiper-pagination--hide') && this.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: swiper => {
          setTimeout(() => {
            this.querySelector('.carousel__container').classList.remove('hide');
            this.querySelector('.carousel-placeholders').classList.add('hide');
          }, 1000);
          if (!!swiper.navigation) {
            swiper.navigation.destroy();
          }
          if (window.handleJsClick) {
            window.handleJsClick();
          }
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _this$querySelector2, _this$querySelectorAl;
      (_this$querySelector2 = this.querySelector('.swiper-pagination-bullet-active')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.classList.remove('swiper-pagination-bullet-active');
      (_this$querySelectorAl = this.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _this$querySelectorAl === void 0 ? void 0 : _this$querySelectorAl.classList.add('swiper-pagination-bullet-active');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

/***/ }),

/***/ "./js/components/handleClick.js":
/*!**************************************!*\
  !*** ./js/components/handleClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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