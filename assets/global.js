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
    var _this$querySelector, _this$querySelector2;
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    this.carouselContent = this.querySelector('[data-carousel-content]').innerHTML;
    this.placeholders = (_this$querySelector2 = this.querySelector('[data-carousel-placeholder]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.currentWidth = window.innerWidth;
    this.innerHTML = "<div class=\"carousel__container swiper hide\" data-swiper-container>\n    <div class=\"swiper-wrapper\">\n    ".concat(this.carouselContent, "\n    </div> </div>\n    <div class=\"swiper-pagination\"></div>\n    <div class=\"swiper-navigation swiper-navigation--next ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n      <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n      <path d=\"M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    <div class=\"swiper-navigation swiper-navigation--prev ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#ED1C24\"/>\n        <path d=\"M22.7061 26.353L16.9413 20.5883L22.7061 14.8236\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    ").concat(this.placeholders ? this.placeholders : "<div class=\"carousel-placeholders\"></div>");
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
            var el = this.querySelector('.carousel__container');
            (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(el);
          }
        },
        afterInit: () => {
          this.querySelector('.carousel__container').classList.remove('hide');
          this.querySelector('.carousel-placeholders').classList.add('hide');
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _this$querySelector3, _this$querySelectorAl;
      (_this$querySelector3 = this.querySelector('.swiper-pagination-bullet-active')) === null || _this$querySelector3 === void 0 ? void 0 : _this$querySelector3.classList.remove('swiper-pagination-bullet-active');
      (_this$querySelectorAl = this.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _this$querySelectorAl === void 0 ? void 0 : _this$querySelectorAl.classList.add('swiper-pagination-bullet-active');
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
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.addToCartEvent)(item, item.properties._promotionId); //if it came from promotion, trigger events
    }
  });

  //boost tile loaded on collection pages
  if (window.ProductList) {
    window.ProductList.prototype.afterRender = function () {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.updateProductUrlWithPromotion)(); //update all urls with promotion
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_1__.AddPromotionAsItemProperty)(); //add promotion id as a item property
      var collectionEl = document.querySelector('[data-section-type="collection"]');
      (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_2__["default"])(collectionEl);
    };
  }
});

/***/ }),

/***/ "./js/components/events.js":
/*!*********************************!*\
  !*** ./js/components/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPromotionAsItemProperty: () => (/* binding */ AddPromotionAsItemProperty),
/* harmony export */   ViewItemList: () => (/* binding */ ViewItemList),
/* harmony export */   addToCartEvent: () => (/* binding */ addToCartEvent),
/* harmony export */   clickPromotion: () => (/* binding */ clickPromotion),
/* harmony export */   getPromotionParams: () => (/* binding */ getPromotionParams),
/* harmony export */   selectItemList: () => (/* binding */ selectItemList),
/* harmony export */   updateProductUrlWithPromotion: () => (/* binding */ updateProductUrlWithPromotion),
/* harmony export */   viewItem: () => (/* binding */ viewItem),
/* harmony export */   viewPromotion: () => (/* binding */ viewPromotion)
/* harmony export */ });
/* unused harmony exports curateEcommerceData, redirectWithPromotion */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

class GtmEvent {
  constructor(eventName, data) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "send", () => {
      window.datalayer = [];
      window.dataLayer.push(_objectSpread({
        'event': this.eventName
      }, this.data));
    });
    this.eventName = eventName;
    this.data = data;
  }
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (GtmEvent);

//utilities and events 
var getPromotionParams = () => {
  var promotionData = {};
  var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
  var promotionName = params.promotion_name;
  var promotionId = params.promotion_id;
  if (promotionName) {
    promotionData = {
      promotionName,
      promotionId
    };
  }
  return promotionData;
};
var curateEcommerceData = data => {
  return data.map((item, index) => {
    var item_variant = item === null || item === void 0 ? void 0 : item.variant_title;
    if (!item_variant) {
      if (item.variants) {
        item_variant = item.variants[0].title;
      } else {
        item_variant = item.product_title;
      }
    }
    var item_price = (item === null || item === void 0 ? void 0 : item.price) || item.variants[0].price;
    return {
      item_id: "".concat(item.id),
      item_name: "".concat(item.title),
      index: "".concat(index),
      item_brand: "".concat(item.vendor),
      item_variant: "".concat(item_variant),
      price: item_price * 0.01,
      quantity: 1
    };
  });
};
var updateProductUrlWithPromotion = () => {
  var links = document.querySelectorAll('[data-promotion-product-url]');
  var {
    promotionId,
    promotionName
  } = getPromotionParams();
  if (promotionName) {
    links.forEach(link => {
      var url = redirectWithPromotion(link, promotionId, promotionName);
      link.href = url;
    });
  }
};
var AddPromotionAsItemProperty = () => {
  var forms = document.querySelectorAll('[action = "/cart/add"]');
  var {
    promotionId
  } = getPromotionParams();
  var inputHtml = "<input type=\"hidden\" name=properties[_promotionId] value='".concat(promotionId, "' />");
  if (promotionId) {
    forms.forEach(form => {
      //do not add if it already exist
      if (!form.querySelector('[name="properties[_promotionId]"]')) {
        form.insertAdjacentHTML('beforeend', inputHtml);
      }
    });
  }
};
var redirectWithPromotion = (url, promotionId, promotionName) => {
  return "".concat(url, "?promotion_id=").concat(promotionId, "&promotion_name=").concat(promotionName);
};
var clickPromotion = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, promotionName, promotionId) {
    debugger;
    var gtmData = {
      promotion_id: promotionId,
      promotion_name: promotionName
    };
    var selectPromotion = new GtmEvent('custom_promotion_click', gtmData);
    selectPromotion.send();
    window.location.href = redirectWithPromotion(url, promotionId, promotionName);
  });
  return function clickPromotion(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var selectItemList = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionName, promotionId) {
    var data = [yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getSingleProductData)(handle)];
    var curatedData = {
      promotion_id: promotionId,
      item_list_id: promotionId,
      item_list_name: promotionName
    };
    var viewItemListEventData = _objectSpread(_objectSpread({}, curatedData), {}, {
      selectedItem: curateEcommerceData(data)
    });
    var customViewItemListEvent = new GtmEvent('custom_select_item', viewItemListEventData);
    customViewItemListEvent.send();
  });
  return function selectItemList(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var ViewItemList = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionName, promotionId) {
    var data = yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getCollectionProductData)(handle);
    var curatedData = {
      promotion_id: promotionId,
      item_list_id: promotionId,
      item_list_name: promotionName
    };
    var viewItemListEventData = _objectSpread(_objectSpread({}, curatedData), {}, {
      viewedItems: curateEcommerceData(data)
    });
    var customViewItemListEvent = new GtmEvent('custom_view_item_list', viewItemListEventData);
    customViewItemListEvent.send();
  });
  return function ViewItemList(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var viewItem = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionId) {
    var _window$shopifyVariab, _data$;
    var currency = ((_window$shopifyVariab = window.shopifyVariables) === null || _window$shopifyVariab === void 0 ? void 0 : _window$shopifyVariab.activeCurrency) || 'CAD';
    var data = [yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getSingleProductData)(handle)];
    var viewItemEventData = {
      currency: "".concat(currency),
      value: ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.price) * 0.01,
      promotion_id: promotionId,
      viewedItem: curateEcommerceData(data)
    };
    var customViewItemListEvent = new GtmEvent('custom_view_item', viewItemEventData);
    customViewItemListEvent.send();
  });
  return function viewItem(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var addToCartEvent = (cartItem, promotionId) => {
  var _window$shopifyVariab2;
  var curatedData = curateEcommerceData([cartItem]);
  var [{
    price
  }] = curatedData;
  var addTocartData = {
    promotion_id: promotionId,
    currency: ((_window$shopifyVariab2 = window.shopifyVariables) === null || _window$shopifyVariab2 === void 0 ? void 0 : _window$shopifyVariab2.activeCurrency) || 'CAD',
    value: "".concat(price),
    addedItems: curatedData
  };
  var addTocartEvent = new GtmEvent('custom_add_to_cart', addTocartData);
  addTocartEvent.send();
};
var viewPromotion = (promotionId, promotionName, creativeName) => {
  var promotionData = {
    promotion_id: promotionId,
    promotion_name: promotionName,
    creative_name: creativeName
  };
  var viewPromotionEvent = new GtmEvent('custom_view_promotion', promotionData);
  viewPromotionEvent.send();
};

/***/ }),

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCollectionProductData: () => (/* binding */ getCollectionProductData),
/* harmony export */   getSingleProductData: () => (/* binding */ getSingleProductData)
/* harmony export */ });
/* unused harmony exports customerLocation, getProductData, getReviewData, getReviewDataAggregate */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var _excluded = ["ruleId", "text"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var customerLocation = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
    var data = yield fetch('/browsing_context_suggestions.json');
    var {
      detected_values: {
        country: {
          handle
        } = {}
      } = {}
    } = yield data.json();
    return handle;
  });
  return function customerLocation() {
    return _ref.apply(this, arguments);
  };
}();
var getProductData = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (additionalParams) {
    var _ref3 = additionalParams || {},
      {
        ruleId = '',
        text = ''
      } = _ref3,
      otherparams = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _excluded);
    var url = '';
    url = new URL("https://rebuyengine.com/api/v1/custom/id/".concat(ruleId));
    var params = _objectSpread({
      limit: 10,
      filter_oos: "yes",
      context: "default",
      key: "7af510977e690f362f5dae7f36a736bbeefdfc25",
      //rebuy key
      metafields: "yes"
    }, otherparams);
    Object.keys(params).forEach(param => {
      url.searchParams.append(param, params[param]);
    }); //set params
    var data = yield fetch(url);
    var productData = yield data.json();
    return productData;
  });
  return function getProductData(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getReviewData = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (id) {
    var url = new URL("https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/reviews?/collections/".concat(id, "&orderBy=rating%20desc"));
    var data = yield fetch(url);
    var reviewData = yield data.json();
    return reviewData;
  });
  return function getReviewData(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var getReviewDataAggregate = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
    var url = new URL("https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/review_aggregate");
    var data = yield fetch(url);
    var aggregiateReviewData = yield data.json();
    var reviewAggCount = aggregiateReviewData.reviewAggregate;
    return reviewAggCount === null || reviewAggCount === void 0 ? void 0 : reviewAggCount.reviewCount;
  });
  return function getReviewDataAggregate() {
    return _ref5.apply(this, arguments);
  };
}();
var getCollectionProductData = /*#__PURE__*/function () {
  var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (collectionHandle) {
    var url = "/collections/".concat(collectionHandle, "?view=data-json");
    var data = yield fetch(url);
    var collectionProducts = yield data.json();
    return collectionProducts;
  });
  return function getCollectionProductData(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var getSingleProductData = /*#__PURE__*/function () {
  var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (productHandle) {
    var url = "/products/".concat(productHandle, ".js");
    var data = yield fetch(url);
    var product = yield data.json();
    return product;
  });
  return function getSingleProductData(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/components/gtm-event-trigger.js":
/*!********************************************!*\
  !*** ./js/components/gtm-event-trigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemClickEvents: () => (/* binding */ itemClickEvents),
/* harmony export */   pageLoadEvent: () => (/* binding */ pageLoadEvent),
/* harmony export */   viewPromotionTrigger: () => (/* binding */ viewPromotionTrigger)
/* harmony export */ });
/* harmony import */ var JsComponents_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/events */ "./js/components/events.js");
/* harmony import */ var JsComponents_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/utils */ "./js/components/utils.js");


var pageLoadEvent = () => {
  //This handles the view_item_list (plp) and view_item(pdp)
  var url = window.location.href;
  if (url.includes('/collections/')) {
    var urlPArams = url.split('/collections/')[1];
    var collectionHandle = urlPArams.split('?')[0];
    var {
      promotionName,
      promotionId
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (promotionName) {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.ViewItemList)(collectionHandle, promotionName, promotionId);
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.AddPromotionAsItemProperty)();
    }
  }
  if (url.includes('/products/')) {
    var _urlPArams = url.split('/products/')[1];
    var productHandle = _urlPArams.split('?')[0];
    var {
      promotionId: _promotionId
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (_promotionId) {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.viewItem)(productHandle, _promotionId);
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.AddPromotionAsItemProperty)();
    }
  }
};
var itemClickEvents = (item, url) => {
  debugger; //This events handles the promotion_select (anywhere) and select_item (plp)
  if (item.closest('[data-promotion]')) {
    if (!item.closest('[data-promotion = "false"]')) {
      var promotionName = item.dataset.promotionName;
      var promotionId = item.dataset.promotionId;
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.clickPromotion)(url, promotionName, promotionId);
    } else {
      window.location.href = url;
    }
  }
  if (item.closest('[data-section-type="collection"]')) {
    var {
      promotionId: _promotionId2,
      promotionName: _promotionName
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (_promotionId2) {
      var productHandle = item.href.split("?")[0];
      productHandle = productHandle.split('/products/')[1];
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.selectItemList)(productHandle, _promotionName, _promotionId2);
    }
  }
};
var viewPromotionTrigger = () => {
  var promotionItems = document.querySelectorAll('[data-promotion]');
  var callback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.target.closest('[data-promotion = "false"]')) {
        if (entry.isIntersecting) {
          var promotionId = entry.target.dataset.promotionId;
          var promotionName = entry.target.dataset.promotionName;
          var creativeName = entry.target.dataset.creativeName;
          (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.viewPromotion)(promotionId, promotionName, creativeName);
          observer.unobserve(entry.target);
        }
      }
    });
  };
  var promotionObserver = new JsComponents_utils__WEBPACK_IMPORTED_MODULE_1__.IntersectObserver(callback, promotionItems);
  promotionObserver.init();
};

/***/ }),

/***/ "./js/components/handleClick.js":
/*!**************************************!*\
  !*** ./js/components/handleClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/gtm-event-trigger */ "./js/components/gtm-event-trigger.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicElements => {
  var handleRedirectOnDiv = item => {
    var url = item.dataset.url || item.href;
    if (item.closest('[data-promotion]') || item.closest('[data-promotion-product-url]')) {
      (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_0__.itemClickEvents)(item, url);
    } else if (url) {
      window.location.href = url;
    }
  };
  var clickHandle = dynamicElements ? dynamicElements.querySelectorAll('[data-js-click]') : document.querySelectorAll('[data-redirect-click]');
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

/***/ "./js/components/rebuy-cart-integration.js":
/*!*************************************************!*\
  !*** ./js/components/rebuy-cart-integration.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBtnDelegate: () => (/* binding */ addBtnDelegate),
/* harmony export */   addFormDelegate: () => (/* binding */ addFormDelegate),
/* harmony export */   removeAttributesForCartBinding: () => (/* binding */ removeAttributesForCartBinding),
/* harmony export */   removeCartToggleBinding: () => (/* binding */ removeCartToggleBinding)
/* harmony export */ });
/* harmony import */ var ftdomdelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ftdomdelegate */ "./node_modules/ftdomdelegate/main.js");

var addFormDelegate = () => {
  var forms = document.querySelectorAll('[action="/cart/add"]');
  forms.forEach(form => {
    var formDelegate = new ftdomdelegate__WEBPACK_IMPORTED_MODULE_0__["default"](form);
    formDelegate.on('submit', ev => {
      ev.preventDefault();
      return false;
    });
  });
};
var addBtnDelegate = () => {
  var forms = document.querySelectorAll('[action="/cart/add"]');
  forms.forEach(form => {
    var btn = form.querySelector('[type="submit"]');
    var btnDelegate = new ftdomdelegate__WEBPACK_IMPORTED_MODULE_0__["default"](btn);
    btnDelegate.off();
    btnDelegate.on('click', ev => {
      ev.preventDefault();
      var formEl = ev.target.closest('[action="/cart/add"]');
      var productForm = Rebuy.util.serializeForm(formEl);
      return Rebuy.Cart.addItem(productForm);
    });
  });
};
var removeAttributesForCartBinding = () => {
  document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
    btn.removeAttribute('data-action');
  });
};
var removeCartToggleBinding = () => {
  var cartToggle = document.querySelector('[data-action="toggle-mini-cart"]');
  if (cartToggle) {
    cartToggle.removeAttribute('data-action');
    cartToggle.removeAttribute('href');
  }
  cartToggle.addEventListener('click', () => {
    var _window$Rebuy;
    if ((_window$Rebuy = window.Rebuy) !== null && _window$Rebuy !== void 0 && (_window$Rebuy = _window$Rebuy.SmartCart) !== null && _window$Rebuy !== void 0 && _window$Rebuy.show) {
      var _window$Rebuy2;
      (_window$Rebuy2 = window.Rebuy) === null || _window$Rebuy2 === void 0 || (_window$Rebuy2 = _window$Rebuy2.SmartCart) === null || _window$Rebuy2 === void 0 ? void 0 : _window$Rebuy2.show();
    }
  });
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
/* harmony import */ var JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/product-card */ "./js/components/product-card.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
  customElements.define('product-card', JsComponents_product_card__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./js/components/utils.js":
/*!********************************!*\
  !*** ./js/components/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntersectObserver: () => (/* binding */ IntersectObserver)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class IntersectObserver {
  constructor(callback) {
    var targets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "init", () => {
      var observer = new IntersectionObserver(this.callback, this.options);
      this.targets.forEach(target => {
        observer.observe(target);
      });
    });
    this.callback = callback;
    this.options = options;
    this.targets = targets;
  }
}

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
/* harmony import */ var JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! JsComponents/collapsible */ "./js/components/collapsible.js");
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");
/* harmony import */ var JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! JsComponents/gtm-event-trigger */ "./js/components/gtm-event-trigger.js");
/* harmony import */ var JsComponents_event_listeners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! JsComponents/event-listeners */ "./js/components/event-listeners.js");
/* harmony import */ var JsComponents_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! JsComponents/header */ "./js/components/header.js");
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");
/* harmony import */ var JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! JsComponents/registerCustomElements */ "./js/components/registerCustomElements.js");
/* harmony import */ var JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! JsComponents/rebuy-cart-integration */ "./js/components/rebuy-cart-integration.js");






//lazyload image dependencies


 //needed for swiper
 //gtm trigger event
 //3rd party event listeners
 //header
 //js based handle click
 //register custom elements
 //disable add to cart form submit

//config lazyload to default settings
(lazysizes__WEBPACK_IMPORTED_MODULE_0___default().cfg).loadMode = 1;
document.addEventListener('DOMContentLoaded', () => {
  (0,JsComponents_header__WEBPACK_IMPORTED_MODULE_7__["default"])(); //header and megamenu
  (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_8__.addFormDelegate)(); //rebuy integration 
  (0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_8__.removeCartToggleBinding)(); //remove toggle click
  (0,JsComponents_event_listeners__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_10__.pageLoadEvent)();
  (0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__.register)(); //swiper
  (0,JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_11__["default"])(); //carousel and product cards
  (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_10__.viewPromotionTrigger)();
  (0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,JsComponents_collapsible__WEBPACK_IMPORTED_MODULE_13__.collapsible)(); //collapsable
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