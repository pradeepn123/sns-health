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
var collapsible = () => {
  document.querySelectorAll('[data-test]').forEach(triggerel => {
    // fixing trucation issue with liquid
    triggerel.previousElementSibling.outerHTML = triggerel.previousElementSibling.outerHTML.replaceAll('\x3Cscript', '\x3Cspan');
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
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");


var _excluded = ["breakpoints"],
  _excluded2 = ["pagination", "navigation"],
  _excluded3 = ["navigation", "pagination", "progressPagination"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



class CustomCarousel extends HTMLElement {
  constructor() {
    super();
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
          (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(this);
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
        var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        var navigationNext = parentSelector.querySelector('.swiper-navigation--next');
        var navigationPrev = parentSelector.querySelector('.swiper-navigation--prev');
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        });
      }
      if (pagination) {
        var _parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        var swiperPagination = _parentSelector.querySelector('.swiper-pagination');
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
    var _this$querySelector, _this$querySelector2, _parentSelector$query;
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
    this.carouselContent = (_this$querySelector2 = this.querySelector('[data-carousel-content]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.placeholders = (_parentSelector$query = parentSelector.querySelector('[data-carousel-placeholder]')) === null || _parentSelector$query === void 0 ? void 0 : _parentSelector$query.innerHTML;
    this.navigations = parentSelector.querySelector('[data-swiper-navigations]');
    this.currentWidth = window.innerWidth;
    var swiperNavigationElements = "\n      <div class=\"swiper-navigation swiper-navigation--next ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n      <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n      <path d=\"M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    <div class=\"swiper-navigation swiper-navigation--prev swiper-button-disabled  ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n        <path d=\"M22.7061 26.353L16.9413 20.5883L22.7061 14.8236\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    ");
    this.carouselContent ? this.innerHTML = "<div class=\"carousel__container swiper hide\" data-swiper-container>\n    <div class=\"swiper-wrapper\">\n    ".concat(this.carouselContent, "\n    </div> </div>\n    <div class=\"swiper-pagination\"></div>\n    ").concat(this.carouselSettings['customNavigation'] ? '' : swiperNavigationElements, "\n    ").concat(this.placeholders ? this.placeholders : "<div class=\"carousel-placeholders\"></div>") : this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    var carouselSettings = this.getCarouselSettings();
    console.log(carouselSettings, "carousel settings");
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.container, _objectSpread({
      on: {
        beforeInit: () => {
          var {
            navigation,
            pagination
          } = carouselSettings || {};
          var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
          if (!navigation) {
            parentSelector.querySelectorAll('.swiper-navigation').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          } else {
            parentSelector.querySelector('.swiper-navigation--hide') && parentSelector.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
          if (!pagination) {
            parentSelector.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          } else {
            parentSelector.querySelector('.swiper-pagination--hide') && parentSelector.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: swiper => {
          if (!!swiper.navigation) {
            swiper.navigation.destroy();
          }
        },
        afterInit: () => {
          var _parentSelector$query2;
          parentSelector.querySelector('.carousel__container').classList.remove('hide');
          (_parentSelector$query2 = parentSelector.querySelector('.carousel-placeholders')) === null || _parentSelector$query2 === void 0 ? void 0 : _parentSelector$query2.classList.add('hide');
        },
        slideChange: swiper => {
          var {
            onSlideChange
          } = carouselSettings;
          window[onSlideChange] && window[onSlideChange](swiper);
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _parentSelector$query3, _parentSelector$query4;
      (_parentSelector$query3 = parentSelector.querySelector('.swiper-pagination-bullet-active')) === null || _parentSelector$query3 === void 0 ? void 0 : _parentSelector$query3.classList.remove('swiper-pagination-bullet-active');
      (_parentSelector$query4 = parentSelector.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _parentSelector$query4 === void 0 ? void 0 : _parentSelector$query4.classList.add('swiper-pagination-bullet-active');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

/***/ }),

/***/ "./js/components/event-listeners.js":
/*!******************************************!*\
  !*** ./js/components/event-listeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/events */ "./js/components/events.js");
/* harmony import */ var JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/rebuy-cart-integration */ "./js/components/rebuy-cart-integration.js");
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  //variant change event
  window.addEventListener('variant:changed', () => {
    (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.removeAttributesForCartBinding)(); //remove default cart binding
    (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.AddPromotionAsItemProperty)(); //add promotion property
    (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.addFormDelegate)(); //disable default form add to cart submit behaviour 
  });

  //modal open event (all modals)
  window.addEventListener('modal:open', () => {
    (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.addFormDelegate)(); //disable default form behaviour and add dynamic quick view events
    (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.addBtnDelegate)(); //handle add to cart for dynamic model
    (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.AddPromotionAsItemProperty)(); //add promotion id as a item property 
  });

  //rebuy add To cart tracking
  document.addEventListener('rebuy:cart.add', event => {
    var _item$properties;
    var {
      item
    } = event === null || event === void 0 ? void 0 : event.detail;
    if ((_item$properties = item.properties) !== null && _item$properties !== void 0 && _item$properties._promotionId) {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.addToCartEvent)(item, item.properties._promotionName, item.properties._promotionId, item.properties._creativeName); //if it came from promotion, trigger events
    }
  });

  //boost tile loaded on collection pages
  if (window.ProductList) {
    window.ProductList.prototype.afterRender = function () {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.updateProductUrlWithPromotion)(); //update all urls with promotion
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.AddPromotionAsItemProperty)(); //add promotion id as a item property
      var collectionEl = document.querySelector('[data-section-type="collection"]');
      (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_2__["default"])(collectionEl);
      window.customProductCard();
      (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.addFormDelegate)(); //disable default form behaviour and add dynamic quick view events
      (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_0__.addBtnDelegate)();
    };
  }
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
    searchIcon.style.opacity = 0 + scrollTop / 10;
    if (scrollTop <= 150) {
      if (headerWrapper.classList.contains('shopify-section__header--fixed')) {
        headerWrapper.classList.remove('shopify-section__header--fixed');
      }
    } else {
      headerWrapper.classList.add('shopify-section__header--fixed');
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

/***/ "./js/components/klaiyo-auto-add.js":
/*!******************************************!*\
  !*** ./js/components/klaiyo-auto-add.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rebuyAutoAdd: () => (/* binding */ rebuyAutoAdd)
/* harmony export */ });
var rebuyAutoAdd = () => {
  var addProductsToRebuy = productIds => {
    var items = productIds.filter(item => [...item].length > 0).map(item => {
      return {
        id: parseInt(item),
        quantity: 1
      };
    });
    if (items.length) {
      Rebuy.Cart.addItem({
        items
      });
    }
  };
  var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
  var variantIds = params.variant_id;
  if (variantIds) {
    var variantIdArray = variantIds.split(',');
    var checkRebuy = setInterval(() => {
      var _window$Rebuy;
      if ((_window$Rebuy = window.Rebuy) !== null && _window$Rebuy !== void 0 && (_window$Rebuy = _window$Rebuy.SmartCart) !== null && _window$Rebuy !== void 0 && _window$Rebuy.cart) {
        clearInterval(checkRebuy);
        checkRebuy = false;
        addProductsToRebuy(variantIdArray);
      }
    }, 500);
    setTimeout(() => {
      if (checkRebuy) {
        clearInterval(checkRebuy);
      }
    }, 8000);
  }
};

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! JsComponents/collapsible */ "./js/components/collapsible.js");
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");
/* harmony import */ var JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/gtm-event-trigger */ "./js/components/gtm-event-trigger.js");
/* harmony import */ var JsComponents_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/event-listeners */ "./js/components/event-listeners.js");
/* harmony import */ var JsComponents_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/header */ "./js/components/header.js");
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");
/* harmony import */ var JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! JsComponents/registerCustomElements */ "./js/components/registerCustomElements.js");
/* harmony import */ var JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/rebuy-cart-integration */ "./js/components/rebuy-cart-integration.js");
/* harmony import */ var JsComponents_klaiyo_auto_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! JsComponents/klaiyo-auto-add */ "./js/components/klaiyo-auto-add.js");

 //needed for swiper
 //gtm trigger event
 //3rd party event listeners
 //header
 //js based handle click
 //register custom elements
 //disable add to cart form submit

document.addEventListener('DOMContentLoaded', () => {
  (0,JsComponents_header__WEBPACK_IMPORTED_MODULE_1__["default"])(); //header and megamenu
  (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_2__.removeCartToggleBinding)(); //remove toggle click
  (0,JsComponents_event_listeners__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_4__.pageLoadEvent)();
  (0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_0__.register)(); //swiper
  (0,JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_5__["default"])(); //carousel and product cards
  (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_4__.viewPromotionTrigger)();
  (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_7__.collapsible)(); //collapsable
  (0,JsComponents_klaiyo_auto_add__WEBPACK_IMPORTED_MODULE_8__.rebuyAutoAdd)();
  (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_2__.addFormDelegate)(); //rebuy integration 
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./js/sections/global.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;