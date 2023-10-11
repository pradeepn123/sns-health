"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["registerCustomElements"],{

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
    var _this$querySelector, _this$querySelector2, _this$querySelector3;
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    this.carouselContent = (_this$querySelector2 = this.querySelector('[data-carousel-content]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.placeholders = (_this$querySelector3 = this.querySelector('[data-carousel-placeholder]')) === null || _this$querySelector3 === void 0 ? void 0 : _this$querySelector3.innerHTML;
    this.navigations = this.querySelector('[data-swiper-navigations]');
    this.currentWidth = window.innerWidth;
    var swiperNavigationElements = "\n      <div class=\"swiper-navigation swiper-navigation--next ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n      <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n      <path d=\"M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    <div class=\"swiper-navigation swiper-navigation--prev ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n        <path d=\"M22.7061 26.353L16.9413 20.5883L22.7061 14.8236\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    ");
    this.carouselContent ? this.innerHTML = "<div class=\"carousel__container swiper hide\" data-swiper-container>\n    <div class=\"swiper-wrapper\">\n    ".concat(this.carouselContent, "\n    </div> </div>\n    <div class=\"swiper-pagination\"></div>\n    ").concat(this.carouselSettings['customNavigation'] ? '' : swiperNavigationElements, "\n    ").concat(this.placeholders ? this.placeholders : "<div class=\"carousel-placeholders\"></div>") : this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    var carouselSettings = this.getCarouselSettings();
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
          if (!!swiper.navigation) {
            swiper.navigation.destroy();
            // const el = this.querySelector('.carousel__container')
            // handleClick(el);
          }
        },

        afterInit: () => {
          var _this$querySelector4;
          this.querySelector('.carousel__container').classList.remove('hide');
          (_this$querySelector4 = this.querySelector('.carousel-placeholders')) === null || _this$querySelector4 === void 0 ? void 0 : _this$querySelector4.classList.add('hide');
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _this$querySelector5, _this$querySelectorAl;
      (_this$querySelector5 = this.querySelector('.swiper-pagination-bullet-active')) === null || _this$querySelector5 === void 0 ? void 0 : _this$querySelector5.classList.remove('swiper-pagination-bullet-active');
      (_this$querySelectorAl = this.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _this$querySelectorAl === void 0 ? void 0 : _this$querySelectorAl.classList.add('swiper-pagination-bullet-active');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/custom-carousel */ "./js/components/custom-carousel.js");
/* harmony import */ var JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/product-card */ "./js/components/product-card.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
  customElements.define('product-card', JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ })

}]);