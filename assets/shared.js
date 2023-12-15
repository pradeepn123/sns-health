"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

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
  var creativeName = params.creative_name;
  if (promotionName) {
    promotionData = {
      promotionName,
      promotionId,
      creativeName
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
    promotionName,
    creativeName
  } = getPromotionParams();
  if (promotionName) {
    links.forEach(link => {
      var url = redirectWithPromotion(link, promotionId, promotionName, creativeName);
      link.href = url;
    });
  }
};
var AddPromotionAsItemProperty = () => {
  var forms = document.querySelectorAll('[action = "/cart/add"]');
  var {
    promotionId,
    promotionName,
    creativeName
  } = getPromotionParams();
  var inputHtml = "<input type=\"hidden\" name=properties[_promotionId] value='".concat(promotionId, "' />\n\t<input type=\"hidden\" name=properties[_promotionName] value='").concat(promotionName, "' />\n\t<input type=\"hidden\" name=properties[_creativeName] value='").concat(creativeName, "' />\n\t");
  if (promotionId) {
    forms.forEach(form => {
      //do not add if it already exist
      if (!form.querySelector('[name="properties[_promotionId]"]')) {
        form.insertAdjacentHTML('beforeend', inputHtml);
      }
    });
  }
};
var redirectWithPromotion = (url, promotionId, promotionName, creativeName) => {
  return "".concat(url, "?promotion_id=").concat(promotionId, "&promotion_name=").concat(promotionName, "&creative_name=").concat(creativeName);
};
var clickPromotion = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, promotionName, promotionId, creativeName) {
    var gtmData = {
      promotion_id: promotionId,
      promotion_name: promotionName,
      creative_name: creativeName
    };
    var selectPromotion = new GtmEvent('custom_promotion_click', gtmData);
    selectPromotion.send();
    window.location.href = redirectWithPromotion(url, promotionId, promotionName, creativeName);
  });
  return function clickPromotion(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var selectItemList = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionName, promotionId, creativeName) {
    var data = [yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getSingleProductData)(handle)];
    var curatedData = {
      promotion_id: promotionId,
      item_list_id: promotionId,
      item_list_name: promotionName,
      promotion_name: promotionName,
      creativeName: creativeName
    };
    var viewItemListEventData = _objectSpread(_objectSpread({}, curatedData), {}, {
      selectedItem: curateEcommerceData(data)
    });
    var customViewItemListEvent = new GtmEvent('custom_select_item', viewItemListEventData);
    customViewItemListEvent.send();
  });
  return function selectItemList(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();
var ViewItemList = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionName, promotionId, creativeName) {
    var data = yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getCollectionProductData)(handle);
    var curatedData = {
      promotion_id: promotionId,
      item_list_id: promotionId,
      item_list_name: promotionName,
      promotion_name: promotionName,
      creative_name: creativeName
    };
    var viewItemListEventData = _objectSpread(_objectSpread({}, curatedData), {}, {
      viewedItems: curateEcommerceData(data)
    });
    var customViewItemListEvent = new GtmEvent('custom_view_item_list', viewItemListEventData);
    customViewItemListEvent.send();
  });
  return function ViewItemList(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();
var viewItem = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle, promotionName, promotionId, creativeName) {
    var _window$shopifyVariab, _data$;
    var currency = ((_window$shopifyVariab = window.shopifyVariables) === null || _window$shopifyVariab === void 0 ? void 0 : _window$shopifyVariab.activeCurrency) || 'CAD';
    var data = [yield (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_2__.getSingleProductData)(handle)];
    var viewItemEventData = {
      currency: "".concat(currency),
      value: ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.price) * 0.01,
      promotion_id: promotionId,
      promotion_name: promotionName,
      creative_name: creativeName,
      viewedItem: curateEcommerceData(data)
    };
    var customViewItemListEvent = new GtmEvent('custom_view_item', viewItemEventData);
    customViewItemListEvent.send();
  });
  return function viewItem(_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();
var addToCartEvent = (cartItem, promotionName, promotionId, creativeName) => {
  var _window$shopifyVariab2;
  var curatedData = curateEcommerceData([cartItem]);
  var [{
    price
  }] = curatedData;
  var addTocartData = {
    promotion_id: promotionId,
    promotion_name: promotionName,
    creative_name: creativeName,
    currency: ((_window$shopifyVariab2 = window.shopifyVariables) === null || _window$shopifyVariab2 === void 0 ? void 0 : _window$shopifyVariab2.activeCurrency) || 'CAD',
    value: "".concat(price),
    addedItems: curatedData
  };
  var addTocartEvent = new GtmEvent('custom_add_to_cart', addTocartData);
  addTocartEvent.send();
};
var viewPromotion = (promotionName, promotionId, creativeName) => {
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
/* harmony export */   customerLocation: () => (/* binding */ customerLocation),
/* harmony export */   getCollectionProductData: () => (/* binding */ getCollectionProductData),
/* harmony export */   getProductData: () => (/* binding */ getProductData),
/* harmony export */   getReviewData: () => (/* binding */ getReviewData),
/* harmony export */   getReviewDataAggregate: () => (/* binding */ getReviewDataAggregate),
/* harmony export */   getSingleProductData: () => (/* binding */ getSingleProductData)
/* harmony export */ });
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
      promotionId,
      creativeName
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (promotionName) {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.ViewItemList)(collectionHandle, promotionName, promotionId, creativeName);
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.AddPromotionAsItemProperty)();
    }
  }
  if (url.includes('/products/')) {
    var _urlPArams = url.split('/products/')[1];
    var productHandle = _urlPArams.split('?')[0];
    var {
      promotionId: _promotionId,
      promotionName: _promotionName,
      creativeName: _creativeName
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (_promotionId) {
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.viewItem)(productHandle, _promotionName, _promotionId, _creativeName);
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.AddPromotionAsItemProperty)();
    }
  }
};
var itemClickEvents = (item, url, event) => {
  //This events handles the promotion_select (anywhere) and select_item (plp)
  if (item.closest('[data-promotion]')) {
    if (!item.closest('[data-promotion = "false"]')) {
      var promotionName = item.dataset.promotionName;
      var promotionId = item.dataset.promotionId;
      var creativeName = item.dataset.creativeName;
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.clickPromotion)(url, promotionName, promotionId, creativeName);
    } else {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  }
  if (item.closest('[data-section-type="collection"]')) {
    var {
      promotionId: _promotionId2,
      promotionName: _promotionName2,
      creativeName: _creativeName2
    } = (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.getPromotionParams)() || {};
    if (_promotionId2) {
      var productHandle = item.href.split("?")[0];
      productHandle = productHandle.split('/products/')[1];
      (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.selectItemList)(productHandle, _promotionName2, _promotionId2, _creativeName2);
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
          (0,JsComponents_events__WEBPACK_IMPORTED_MODULE_0__.viewPromotion)(promotionName, promotionId, creativeName);
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
  var handleRedirectOnDiv = (item, event) => {
    var url = item.dataset.url || item.href;
    if (item.closest('[data-promotion]') || item.closest('[data-promotion-product-url]')) {
      (0,JsComponents_gtm_event_trigger__WEBPACK_IMPORTED_MODULE_0__.itemClickEvents)(item, url, event);
    } else if (url) {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  };
  var clickHandle = dynamicElements ? dynamicElements.parentElement.querySelectorAll('[data-js-click]') : document.querySelectorAll('[data-js-click]');
  clickHandle.forEach(item => item.addEventListener('click', ev => {
    if (!ev.target.closest('.product-card__atc')) {
      handleRedirectOnDiv(item, ev);
    }
  }));
});

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

var addFormDelegate = dynamicData => {
  var forms = dynamicData ? document.querySelectorAll('[action="/cart/add"]') : document.querySelectorAll('[action="/cart/add"]');
  forms.forEach(form => {
    var formDelegate = new ftdomdelegate__WEBPACK_IMPORTED_MODULE_0__["default"](form);
    formDelegate.on('submit', ev => {
      ev.preventDefault();
      return false;
    });
  });
};
var addBtnDelegate = dynamicData => {
  var forms = dynamicData ? dynamicData.querySelectorAll('[action="/cart/add"]') : document.querySelectorAll('[action="/cart/add"]');
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
var removeAttributesForCartBinding = dynamicData => {
  var dataAttributes = dynamicData ? dynamicData.querySelectorAll('[data-action="add-to-cart"]') : document.querySelectorAll('[data-action="add-to-cart"]');
  dataAttributes.forEach(btn => {
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

/***/ "./js/components/scroll-on-click.js":
/*!******************************************!*\
  !*** ./js/components/scroll-on-click.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollOnClick: () => (/* binding */ scrollOnClick)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);
var scrollOnClick = function scrollOnClick(selector, target) {
  var _document$querySelect;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  (_document$querySelect = document.querySelectorAll(selector)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(item => item.addEventListener('click', ev => {
    ev.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(window, 1, {
      scrollTo: {
        y: target,
        offsetY: offset
      }
    });
  }));
};

/***/ }),

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    var props = {};
    if (appTarget && !initialized) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec;
        props = json_6__WEBPACK_IMPORTED_MODULE_0___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });

      appTarget.dataset.initialized = true;
      return instance;
    }
  });
});

/***/ }),

/***/ "./js/components/tab-section.js":
/*!**************************************!*\
  !*** ./js/components/tab-section.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_tab_section_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/tab-section.svelte */ "./js/components/svelte/tab-section.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_tab_section_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'tab-section', '#tab-section-data');
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

/***/ "./js/components/svelte/AnnouncementBar.svelte":
/*!*****************************************************!*\
  !*** ./js/components/svelte/AnnouncementBar.svelte ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* js/components/svelte/AnnouncementBar.svelte generated by Svelte v4.2.0 */






function instance($$self, $$props, $$invalidate) {
	let country;
	let { shopifyData } = $$props;
	const blockData = shopifyData;

	const handleLocationBasedAnnouncement = () => {
		for (let countryBlock in blockData) {
			if (blockData[countryBlock]?.handle?.includes(country)) {
				const announcementBar = document.querySelector("[data-announcement-bar]");
				announcementBar.classList.remove("hidden");

				announcementBar?.querySelectorAll("[ data-announcement-text]")?.forEach(text => {
					text.innerHTML = blockData[countryBlock]?.text;
				});

				break;
			}
		}

		const announcementBar = document.querySelector("[data-announcement-bar]");
		const overlay = document.querySelector('.overlay');
		overlay.style.setProperty('--announcement-bar-height', `${announcementBar.offsetHeight}px`);
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		country = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__.customerLocation)();
		handleLocationBasedAnnouncement();
	});

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(0, shopifyData = $$props.shopifyData);
	};

	return [shopifyData];
}

class AnnouncementBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, null, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 0 });
	}

	get shopifyData() {
		return this.$$.ctx[0];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(AnnouncementBar, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementBar);

/***/ }),

/***/ "./js/components/svelte/accordion.svelte":
/*!***********************************************!*\
  !*** ./js/components/svelte/accordion.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/src/runtime/transition/index.js");
/* js/components/svelte/accordion.svelte generated by Svelte v4.2.0 */





function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-2b2s64", "div.accordion.svelte-2b2s64.svelte-2b2s64{margin:1rem 0}div.header.svelte-2b2s64.svelte-2b2s64{display:flex;width:100%}div.header.svelte-2b2s64 .text.svelte-2b2s64{flex:1;margin-right:5px}div.details.svelte-2b2s64.svelte-2b2s64{background-color:#cecece;padding:1rem}");
}

const get_details_slot_changes = dirty => ({});
const get_details_slot_context = ctx => ({});
const get_head_slot_changes = dirty => ({});
const get_head_slot_context = ctx => ({});

// (23:8) {:else}
function create_else_block(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*openIcon*/ ctx[1];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (19:8) {#if open}
function create_if_block_1(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*closeIcon*/ ctx[2];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (30:4) {#if open}
function create_if_block(ctx) {
	let div;
	let div_transition;
	let current;
	const details_slot_template = /*#slots*/ ctx[5].details;
	const details_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(details_slot_template, ctx, /*$$scope*/ ctx[4], get_details_slot_context);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (details_slot) details_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "details svelte-2b2s64");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (details_slot) {
				details_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (details_slot) {
				if (details_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						details_slot,
						details_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[4])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(details_slot_template, /*$$scope*/ ctx[4], dirty, get_details_slot_changes),
						get_details_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(details_slot, local);

			if (local) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
					if (!current) return;
					if (!div_transition) div_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div, svelte_transition__WEBPACK_IMPORTED_MODULE_2__.slide, {}, true);
					div_transition.run(1);
				});
			}

			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(details_slot, local);

			if (local) {
				if (!div_transition) div_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div, svelte_transition__WEBPACK_IMPORTED_MODULE_2__.slide, {}, false);
				div_transition.run(0);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if (details_slot) details_slot.d(detaching);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div1;
	let div0;
	let t0;
	let t1;
	let current;
	let mounted;
	let dispose;
	const head_slot_template = /*#slots*/ ctx[5].head;
	const head_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(head_slot_template, ctx, /*$$scope*/ ctx[4], get_head_slot_context);

	function select_block_type(ctx, dirty) {
		if (/*open*/ ctx[0]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*open*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (head_slot) head_slot.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block0.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "text svelte-2b2s64");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "header svelte-2b2s64");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "accordion svelte-2b2s64");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);

			if (head_slot) {
				head_slot.m(div0, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t0);
			if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			if (if_block1) if_block1.m(div2, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div1, "click", /*handleClick*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (head_slot) {
				if (head_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						head_slot,
						head_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[4])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(head_slot_template, /*$$scope*/ ctx[4], dirty, get_head_slot_changes),
						get_head_slot_context
					);
				}
			}

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div1, null);
				}
			}

			if (/*open*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*open*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(head_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(head_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			if (head_slot) head_slot.d(detaching);
			if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { open = false } = $$props;

	const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9H16V11H11V16H9V11H4V9H9V4H11V9Z" fill="black" fill-opacity="0.6"/>
                    </svg>`;

	const closeIcon = `<svg focusable="false" class="icon icon--minus" viewBox="0 0 10 2" role="presentation">
                    <path d="M10 0v2H0V0z" fill="currentColor"></path>
                    </svg>`;

	const handleClick = () => $$invalidate(0, open = !open);

	$$self.$$set = $$props => {
		if ('open' in $$props) $$invalidate(0, open = $$props.open);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [open, openIcon, closeIcon, handleClick, $$scope, slots];
}

class Accordion extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { open: 0 }, add_css);
	}

	get open() {
		return this.$$.ctx[0];
	}

	set open(open) {
		this.$$set({ open });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Accordion, {"open":{"type":"Boolean"}}, ["head","details"], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ }),

/***/ "./js/components/svelte/customer-reviews.svelte":
/*!******************************************************!*\
  !*** ./js/components/svelte/customer-reviews.svelte ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_review_card_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/review-card.svelte */ "./js/components/svelte/review-card.svelte");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* js/components/svelte/customer-reviews.svelte generated by Svelte v4.2.0 */







function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

// (63:0) {#if curatedReviewData.length}
function create_if_block(ctx) {
	let div8;
	let div7;
	let div6;
	let div3;
	let div2;
	let div0;
	let each_blocks_1 = [];
	let each0_lookup = new Map();
	let t0;
	let div1;
	let t1;
	let t2;
	let t3;
	let div5;
	let custom_carousel;
	let div4;
	let t4;
	let script;
	let current;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*getStars*/ ctx[3](/*avarageReviewCount*/ ctx[0]));
	const get_key = ctx => /*index*/ ctx[14];

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*curatedReviewData*/ ctx[2]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*totalReviewCount*/ ctx[1]);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Reviews");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			custom_carousel = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("custom-carousel");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			script = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("script");
			script.textContent = "{\n              \"navigation\": true,\n              \"slidesPerView\": 1,\n              \"breakpoints\": {\n               \"768\": {\n                  \"pagination\": false,\n                  \"navigation\": true,\n                  \"slidesPerView\": 2,\n                  \"spaceBetween\": 14\n                },\n                \"1024\": {\n                  \"pagination\": false,\n                  \"navigation\": true,\n                  \"slidesPerView\": 3,\n                  \"spaceBetween\": 27.5\n                }\n              }\n            }";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "total_reviews-star");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "total_reviews-text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "total_reviews");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "reviews_header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "custom-carousel__content hide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "data-carousel-content", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(script, "type", "text/json");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(script, "data-settings", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "review_carousel");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "customer-review__wrapper");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "customer-review__content");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "customer-review customer-review__container product-card-wrapper");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div8, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				if (each_blocks_1[i]) {
					each_blocks_1[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, custom_carousel);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div4, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, script);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*getStars, avarageReviewCount*/ 9) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*getStars*/ ctx[3](/*avarageReviewCount*/ ctx[0]));
				each_blocks_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, div0, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block_1, null, get_each_context_1);
			}

			if (!current || dirty & /*totalReviewCount*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, /*totalReviewCount*/ ctx[1]);

			if (dirty & /*curatedReviewData, getStars*/ 12) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*curatedReviewData*/ ctx[2]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div4, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div8);
			}

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].d();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (70:12) {#each getStars(avarageReviewCount) as star, index (index)}
function create_each_block_1(key_1, ctx) {
	let first;
	let html_tag;
	let raw_value = /*star*/ ctx[12] + "";
	let html_anchor;

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag.a = html_anchor;
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
			html_tag.m(raw_value, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*avarageReviewCount*/ 1 && raw_value !== (raw_value = /*star*/ ctx[12] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
				html_tag.d();
			}
		}
	};
}

// (82:12) {#each curatedReviewData as review}
function create_each_block(ctx) {
	let div;
	let reviewcard;
	let current;

	reviewcard = new SvelteComponents_review_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				review: /*review*/ ctx[9],
				getStars: /*getStars*/ ctx[3]
			}
		});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(reviewcard.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "swiper-slide");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(reviewcard, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const reviewcard_changes = {};
			if (dirty & /*curatedReviewData*/ 4) reviewcard_changes.review = /*review*/ ctx[9];
			reviewcard.$set(reviewcard_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(reviewcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(reviewcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(reviewcard);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*curatedReviewData*/ ctx[2].length && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*curatedReviewData*/ ctx[2].length) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*curatedReviewData*/ 4) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

const totalRatings = 5;

function instance($$self, $$props, $$invalidate) {
	let { shopifyData } = $$props;
	let avarageReviewCount = 0;
	let totalReviewCount = 0;
	let curatedReviewData = [];
	let reviews = [];
	const { id = "" } = shopifyData || {}; //return if id doesnt exist 

	const getStars = count => {
		const selectedRating = Array.from(Array(count).keys()).map(item => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99998 0L9.97732 5.98213L16 6.11138L11.2001 9.93803L12.9441 16L7.99998 12.3825L3.05531 16L4.79988 9.93803L0 6.11138L6.02211 5.98213L7.99998 0Z" fill="#FFBD00"/>
            </svg>`;
		});

		const remainingRatings = Array.from(Array(totalRatings - count).keys()).map(item => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99998 0L9.97732 5.98213L16 6.11138L11.2001 9.93803L12.9441 16L7.99998 12.3825L3.05531 16L4.79988 9.93803L0 6.11138L6.02211 5.98213L7.99998 0Z" fill="gray"/>
            </svg>`;
		});

		return [...selectedRating, ...remainingRatings]; //merge both selected rating and remaining rating
	};

	const curateReviewData = reviews => {
		return reviews.map(review => {
			return {
				rating: review.rating, //use object destructuring and give default value or check if it exist
				date: review.dateCreated,
				product_image: review.productImageUrl,
				product_name: review.productName,
				title: review.title,
				review_content: review.body
			};
		});
	};

	const averageReviews = reviews => {
		const reviewsLength = reviews.length;

		const totalReviewsCount = reviews.reduce(
			(currentCount, nextReview) => {
				return currentCount += nextReview.rating;
			},
			0
		);

		$$invalidate(0, avarageReviewCount = Math.round(totalReviewsCount / reviewsLength) >= totalRatings
		? totalRatings
		: Math.round(totalReviewsCount / reviewsLength));
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		reviews = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__.getReviewData)(id);
		$$invalidate(1, totalReviewCount = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__.getReviewDataAggregate)());
		$$invalidate(2, curatedReviewData = curateReviewData(reviews.reviews));
		averageReviews(curatedReviewData);
	});

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(4, shopifyData = $$props.shopifyData);
	};

	return [avarageReviewCount, totalReviewCount, curatedReviewData, getStars, shopifyData];
}

class Customer_reviews extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 4 });
	}

	get shopifyData() {
		return this.$$.ctx[4];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Customer_reviews, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer_reviews);

/***/ }),

/***/ "./js/components/svelte/product-card.svelte":
/*!**************************************************!*\
  !*** ./js/components/svelte/product-card.svelte ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/responsive-image.svelte */ "./js/components/svelte/responsive-image.svelte");
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");
/* harmony import */ var JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! JsComponents/rebuy-cart-integration */ "./js/components/rebuy-cart-integration.js");
/* js/components/svelte/product-card.svelte generated by Svelte v4.2.0 */





 //js based handle click



function create_if_block_8(ctx) {
	let div;
	let t0;
	let t1;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*discountPercentage*/ ctx[2]);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("% off");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__discount");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*discountPercentage*/ 4) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, /*discountPercentage*/ ctx[2]);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (86:8) {#if bestseller}
function create_if_block_7(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div.textContent = "Best Seller";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__discount");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (88:8) {#if onsale}
function create_if_block_6(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div.textContent = "On Sale";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__discount");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (90:6) {#if rating}
function create_if_block_5(ctx) {
	let div;
	let svg;
	let use;
	let t0;
	let span;
	let t1_value = (/*rating*/ ctx[1] ? /*rating*/ ctx[1] : "") + "";
	let t1;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "x", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "#oke-star-filled");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", "16");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", "16");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 16 16");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "aria-hidden", "true");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "product-card__star-text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__star");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, use);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*rating*/ 2 && t1_value !== (t1_value = (/*rating*/ ctx[1] ? /*rating*/ ctx[1] : "") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (99:4) {#if vendor}
function create_if_block_4(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__vendor");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			div.innerHTML = /*vendor*/ ctx[5];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (110:6) {#if discountPercentage > 0}
function create_if_block_2(ctx) {
	let div;

	function select_block_type(ctx, dirty) {
		if (/*skipFormatMoney*/ ctx[7]) return create_if_block_3;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__price product-card__price--compare");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			if_block.m(div, null);
		},
		p(ctx, dirty) {
			if_block.p(ctx, dirty);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if_block.d();
		}
	};
}

// (119:10) {:else}
function create_else_block_2(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[12] * (window.Shopify?.currency?.rate * 100), `${/*currencySymbol*/ ctx[9]}{{amount}}`) + "";
	let t0;
	let t1;
	let t2_value = window.Shopify?.currency?.active + "";
	let t2;

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			}
		}
	};
}

// (113:10) {#if skipFormatMoney}
function create_if_block_3(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[12], `${/*currencySymbol*/ ctx[9]}{{amount}}`) + "";
	let t0;
	let t1;
	let t2_value = window.Shopify?.currency?.active + "";
	let t2;

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			}
		}
	};
}

// (135:8) {:else}
function create_else_block_1(ctx) {
	let t0_value = window.formatCurrency(/*price*/ ctx[13] * (window.Shopify?.currency?.rate * 100), `${/*currencySymbol*/ ctx[9]}{{amount}}`) + "";
	let t0;
	let t1;
	let t2_value = window.Shopify?.currency?.active + "";
	let t2;

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			}
		}
	};
}

// (129:8) {#if skipFormatMoney}
function create_if_block_1(ctx) {
	let t0_value = window.formatCurrency(/*price*/ ctx[13], `${/*currencySymbol*/ ctx[9]}{{amount}}`) + "";
	let t0;
	let t1;
	let t2_value = window.Shopify?.currency?.active + "";
	let t2;

	return {
		c() {
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			}
		}
	};
}

// (156:8) {:else}
function create_else_block(ctx) {
	let a;
	let t;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*chooseMoreText*/ ctx[10]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*link*/ ctx[15]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "product-card__cta product-item__action-button product-item__action-button--list-view-only button button--small button--primary");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}
		}
	};
}

// (148:8) {#if variants.length == 1 && enableAddToCart == true}
function create_if_block(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.textContent = `${/*addToCartText*/ ctx[11]}`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "product-item__action-button product-item__action-button--list-view-only button button--small button--primary");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-action", "add-to-cart");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

function create_fragment(ctx) {
	let a;
	let div9;
	let div4;
	let div0;
	let responsiveimage;
	let t0;
	let div2;
	let div1;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let div3;
	let t6;
	let div8;
	let div6;
	let t7;
	let div5;
	let t8;
	let div7;
	let form;
	let input0;
	let t9;
	let input1;
	let t10;
	let current;

	responsiveimage = new SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				image: /*image*/ ctx[3],
				image_aspect_ratio: 1,
				srcTokens: /*srcTokens*/ ctx[18]
			}
		});

	let if_block0 = /*discountPercentage*/ ctx[2] > 0 && create_if_block_8(ctx);
	let if_block1 = /*bestseller*/ ctx[16] && create_if_block_7(ctx);
	let if_block2 = /*onsale*/ ctx[17] && create_if_block_6(ctx);
	let if_block3 = /*rating*/ ctx[1] && create_if_block_5(ctx);
	let if_block4 = /*vendor*/ ctx[5] && create_if_block_4(ctx);
	let if_block5 = /*discountPercentage*/ ctx[2] > 0 && create_if_block_2(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*skipFormatMoney*/ ctx[7]) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block6 = current_block_type(ctx);

	function select_block_type_2(ctx, dirty) {
		if (/*variants*/ ctx[4].length == 1 && /*enableAddToCart*/ ctx[8] == true) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block7 = current_block_type_1(ctx);

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(responsiveimage.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block0) if_block0.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block2) if_block2.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block3) if_block3.c();
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block4) if_block4.c();
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block5) if_block5.c();
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block6.c();
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block7.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "product-card__image");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "product-card__header-tags");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "product-card__header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "product-card__title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "product-card__body");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "product-card__price");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "product-card__price-container");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "name", "quantity");
			input0.value = "1";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "name", "id");
			input1.value = /*variantId*/ ctx[14];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "action", "/cart/add");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "accept-charset", "UTF-8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "enctype", "multipart/form-data");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "product-card__atc");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "product-card__footer");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "product-card swiper-slide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-redirect-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-js-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-url", /*link*/ ctx[15]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*link*/ ctx[15]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "target", "_blank");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a, "user-select", "none");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, div9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(responsiveimage, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			if (if_block0) if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t1);
			if (if_block1) if_block1.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			if (if_block2) if_block2.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
			if (if_block3) if_block3.m(div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t4);
			if (if_block4) if_block4.m(div4, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			div3.innerHTML = /*title*/ ctx[6];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div6);
			if (if_block5) if_block5.m(div6, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			if_block6.m(div5, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, form);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t10);
			if_block7.m(form, null);
			/*div9_binding*/ ctx[21](div9);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*discountPercentage*/ ctx[2] > 0) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_8(ctx);
					if_block0.c();
					if_block0.m(div1, t1);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*rating*/ ctx[1]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_5(ctx);
					if_block3.c();
					if_block3.m(div2, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (/*vendor*/ ctx[5]) if_block4.p(ctx, dirty);

			if (/*discountPercentage*/ ctx[2] > 0) {
				if (if_block5) {
					if_block5.p(ctx, dirty);
				} else {
					if_block5 = create_if_block_2(ctx);
					if_block5.c();
					if_block5.m(div6, t7);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if_block6.p(ctx, dirty);
			if_block7.p(ctx, dirty);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(responsiveimage.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(responsiveimage.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if_block6.d();
			if_block7.d();
			/*div9_binding*/ ctx[21](null);
		}
	};
}

const soldOutText = "Sold Out";

function instance($$self, $$props, $$invalidate) {
	let { shopifyData } = $$props;
	let { product } = $$props;
	let ref;
	const { image, variants = [], vendor, title, tags = [], metafields = [], handle, skipFormatMoney = false, discountPercentage: shopifyDiscountPercentage = 0, enableAddToCart = true } = product || shopifyData || {};
	const currencySymbol = window.shopifyVariables.currencySymbol || "$";
	const chooseMoreText = window.shopifyVariables.chooseMoreText || "See Options";
	const addToCartText = window.shopifyVariables.addToCartText || "Add To Cart";
	console.log(window.shopifyVariables.currency);
	const [{ compare_at_price: comparePrice, price, id: variantId } = {}] = variants || [];
	const link = `${window.Shopify.routes.root}products/${handle}?variant=${variantId}`;
	let rating = false;

	metafields.forEach(metafield => {
		const { namespace, key, value } = metafield || {};

		if (namespace == "okendo" && key == "summaryData") {
			let parsedValue = {};

			if (typeof value == "object") {
				parsedValue = value;
			} else {
				parsedValue = JSON.parse(value) || {};
			}

			$$invalidate(1, rating = parsedValue?.reviewAverageValue);
		}
	});

	const bestseller = tags.includes("bestseller");
	const onsale = tags.includes("onsale");

	const srcTokens = {
		replacementToken: "?width=300&height=300",
		dataSrcToken: "?{width}&{height}",
		srcToken: "?width=300&height=300"
	};

	//conflicting data between shopify and rebuy
	let discountPercentage = 0;

	if (skipFormatMoney) {
		discountPercentage = shopifyDiscountPercentage;
	} else {
		discountPercentage = Math.round((comparePrice - price) * 100 / comparePrice);
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(() => {
		(0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(ref);
		(0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_5__.removeAttributesForCartBinding)(ref);
	});

	function div9_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			ref = $$value;
			$$invalidate(0, ref);
		});
	}

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(19, shopifyData = $$props.shopifyData);
		if ('product' in $$props) $$invalidate(20, product = $$props.product);
	};

	return [
		ref,
		rating,
		discountPercentage,
		image,
		variants,
		vendor,
		title,
		skipFormatMoney,
		enableAddToCart,
		currencySymbol,
		chooseMoreText,
		addToCartText,
		comparePrice,
		price,
		variantId,
		link,
		bestseller,
		onsale,
		srcTokens,
		shopifyData,
		product,
		div9_binding
	];
}

class Product_card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 19, product: 20 });
	}

	get shopifyData() {
		return this.$$.ctx[19];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get product() {
		return this.$$.ctx[20];
	}

	set product(product) {
		this.$$set({ product });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product_card, {"shopifyData":{},"product":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product_card);

/***/ }),

/***/ "./js/components/svelte/product-carousel.svelte":
/*!******************************************************!*\
  !*** ./js/components/svelte/product-carousel.svelte ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/product-card.svelte */ "./js/components/svelte/product-card.svelte");
/* js/components/svelte/product-carousel.svelte generated by Svelte v4.2.0 */







function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	return child_ctx;
}

// (68:0) {#if collectionTexts.length > 1}
function create_if_block_4(ctx) {
	let div;
	let each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*collectionTexts*/ ctx[4]);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "featured-products__Category_wrapp");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}
		},
		p(ctx, dirty) {
			if (dirty & /*selectedParams, collectionTexts, updateParams*/ 52) {
				each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*collectionTexts*/ ctx[4]);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (70:4) {#each collectionTexts as text}
function create_each_block_2(ctx) {
	let div;
	let button;
	let t0_value = /*text*/ ctx[16] + "";
	let t0;
	let button_class_value;
	let t1;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[7](/*text*/ ctx[16], ...args);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[16] && "product-category__button--active"}`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "featured-products__Category");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*selectedParams*/ 4 && button_class_value !== (button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[16] && "product-category__button--active"}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", button_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			mounted = false;
			dispose();
		}
	};
}

// (94:0) {:else}
function create_else_block(ctx) {
	let previous_key = /*productData*/ ctx[0];
	let key_block_anchor;
	let current;
	let key_block = create_key_block(ctx);

	return {
		c() {
			key_block.c();
			key_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			key_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, key_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*productData*/ 1 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal)(previous_key, previous_key = /*productData*/ ctx[0])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(key_block, 1, 1, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				key_block = create_key_block(ctx);
				key_block.c();
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(key_block, 1);
				key_block.m(key_block_anchor.parentNode, key_block_anchor);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(key_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(key_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(key_block_anchor);
			}

			key_block.d(detaching);
		}
	};
}

// (84:0) {#if isLoading}
function create_if_block(ctx) {
	let div6;

	return {
		c() {
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6.innerHTML = `<div class="product-placeholders"><div></div> <div></div> <div></div> <div></div> <div></div></div>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "carousel-placeholders");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div6, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div6);
			}
		}
	};
}

// (104:6) {#if productData.length > 0  }
function create_if_block_2(ctx) {
	let custom_carousel;
	let div0;
	let t0;
	let div8;
	let t6;
	let script;
	let current;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*productData*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			custom_carousel = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("custom-carousel");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div8.innerHTML = `<div class="product-placeholders"><div></div> <div></div> <div></div> <div></div> <div></div></div> <div class="lds-ring"></div>`;
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			script = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("script");
			script.textContent = "{\n        \"slidesPerView\": 2,\n        \"spaceBetween\": 10,\n      \"overflowNagivation\": true,\n        \"progressPagination\": true,\n        \"pagination\": true,\n        \"navigation\": false,\n        \"breakpoints\": {\n          \"768\": {\n            \"pagination\": false,\n            \"navigation\": true,\n            \"slidesPerView\": 3,\n            \"spaceBetween\": 27.5\n          },\n         \"1024\": {\n            \"pagination\": false,\n            \"navigation\": true,\n            \"slidesPerView\": 5,\n            \"spaceBetween\": 27.5\n          }\n        }\n      }";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "custom-carousel__content hide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "data-carousel-content", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "carousel-placeholders");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(script, "type", "text/json");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(script, "data-settings", "");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, custom_carousel, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, script);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*productData*/ 1) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*productData*/ ctx[0]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(custom_carousel);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (108:14) {#if product.variants[0].price > 0}
function create_if_block_3(ctx) {
	let p;
	let t0_value = (/*product*/ ctx[12].enableAddToCart = false) + "";
	let t0;
	let t1;
	let productcard;
	let current;
	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { product: /*product*/ ctx[12] } });

	return {
		c() {
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(productcard.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(p, "display", "none", 1);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(productcard, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*productData*/ 1) && t0_value !== (t0_value = (/*product*/ ctx[12].enableAddToCart = false) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
			const productcard_changes = {};
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[12];
			productcard.$set(productcard_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(productcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(productcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(productcard, detaching);
		}
	};
}

// (107:12) {#each productData as product, index}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*product*/ ctx[12].variants[0].price > 0 && create_if_block_3(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*product*/ ctx[12].variants[0].price > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*productData*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

// (159:8) {#if index < 4}
function create_if_block_1(ctx) {
	let productcard;
	let current;
	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { product: /*product*/ ctx[12] } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(productcard.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(productcard, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const productcard_changes = {};
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[12];
			productcard.$set(productcard_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(productcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(productcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(productcard, detaching);
		}
	};
}

// (158:6) {#each productData as product, index}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*index*/ ctx[14] < 4 && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*index*/ ctx[14] < 4) if_block.p(ctx, dirty);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

// (95:0) {#key productData}
function create_key_block(ctx) {
	let div2;
	let div0;
	let div0_class_value;
	let t;
	let div1;
	let div1_class_value;
	let current;
	let if_block = /*productData*/ ctx[0].length > 0 && create_if_block_2(ctx);
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*productData*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block) if_block.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", div0_class_value = `featured-products__content featured-products__content--desktop ${JSON.parse(/*mobileCarousel*/ ctx[3])
			? "featured-products__content--show-mobile"
			: ""}`);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", div1_class_value = `featured-products__content featured-products__content--mobile ${JSON.parse(/*mobileCarousel*/ ctx[3])
			? "featured-products__content--hide-mobile"
			: ""}`);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "featured-products__wrapper product-card-wrapper");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			if (if_block) if_block.m(div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			current = true;
		},
		p(ctx, dirty) {
			if (/*productData*/ ctx[0].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*productData*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(div0, null);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (dirty & /*productData*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*productData*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			if (if_block) if_block.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current_block_type_index;
	let if_block1;
	let current;
	let if_block0 = /*collectionTexts*/ ctx[4].length > 1 && create_if_block_4(ctx);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*isLoading*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block0) if_block0.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "rebuy-container-wrap");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*collectionTexts*/ ctx[4].length > 1) if_block0.p(ctx, dirty);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
				if_block1.m(div, null);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if (if_block0) if_block0.d();
			if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { shopifyData } = $$props;
	let productData = []; //to store api data
	let isLoading = true;
	const { mobileCarousel = false, blocks = [] } = shopifyData || {};

	const paramsHash = blocks.reduce(
		(accumulator, block) => {
			return accumulator = {
				...accumulator,
				[block.text]: {
					ruleId: `${block?.ruleId}`,
					text: block?.text,
					collectionData: block?.collectionData || []
				}
			};
		},
		{}
	);

	const collectionTexts = Object.keys(paramsHash);
	let selectedParams = { ...paramsHash[collectionTexts[0]] };

	const requestData = async selectedParams => {
		$$invalidate(1, isLoading = true);

		if (selectedParams.collectionData.length > 0) {
			$$invalidate(0, productData = selectedParams.collectionData);
		} else {
			const responseData = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__.getProductData)(selectedParams);
			$$invalidate(0, productData = responseData.data);
		}

		$$invalidate(1, isLoading = false);
	};

	const updateParams = async (ev, text) => {
		$$invalidate(2, selectedParams = paramsHash[text]);
		await requestData(selectedParams);

		if (!checkIfVisisble(ev)) {
			const element = ev?.target.closest('.product-category__button--active');

			element?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center'
			});
		}
	};

	const checkIfVisisble = ev => {
		const element = ev?.target.closest('.product-category__button--active');
		const elementRect = element?.getBoundingClientRect();
		const isVisible = elementRect?.top >= 0 && elementRect?.left >= 0 && elementRect?.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elementRect?.right <= (window.innerWidth || document.documentElement.clientWidth);
		return isVisible || false;
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		await requestData(selectedParams);
	});

	const click_handler = (text, ev) => {
		updateParams(ev, text);
	};

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(6, shopifyData = $$props.shopifyData);
	};

	return [
		productData,
		isLoading,
		selectedParams,
		mobileCarousel,
		collectionTexts,
		updateParams,
		shopifyData,
		click_handler
	];
}

class Product_carousel extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 6 });
	}

	get shopifyData() {
		return this.$$.ctx[6];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product_carousel, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product_carousel);

/***/ }),

/***/ "./js/components/svelte/responsive-image.svelte":
/*!******************************************************!*\
  !*** ./js/components/svelte/responsive-image.svelte ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/responsive-image.svelte generated by Svelte v4.2.0 */




function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-10oi4ts", ".responsive-image__wrapper.svelte-10oi4ts:before{content:'';width:100%;display:block;padding-top:var(--padding-top)}.responsive-image__wrapper.svelte-10oi4ts{max-width:var(--max-width);height:100%;position:relative;max-height:var(--max-height);height:auto}.responsive-image__image.svelte-10oi4ts{position:absolute;top:0;height:100%;left:0;width:100%}");
}

function create_fragment(ctx) {
	let div;
	let img;
	let img_id_value;
	let img_src_value;
	let img_srcset_value;
	let img_data_widths_value;
	let img_style_value;
	let div_id_value;
	let div_style_value;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "id", img_id_value = "Image-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "responsive-image__image lazyload svelte-10oi4ts");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*srcUrl*/ ctx[5])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.srcset_url_equal)(img, img_srcset_value = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/u3zfwAJrQPhbkYXzAAAAABJRU5ErkJggg==")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "srcset", img_srcset_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-src", /*dataSrcUrl*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-widths", img_data_widths_value = "[" + /*imageWidth*/ ctx[3] + "]");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-aspectratio", /*image_aspect_ratio*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-sizes", "auto");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "tabindex", "-1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "style", img_style_value = /*getImageStyle*/ ctx[7]());
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "id", div_id_value = "ImageWrapper-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "data-image-id", /*image_id*/ ctx[2]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "responsive-image__wrapper svelte-10oi4ts");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style", div_style_value = /*getWrapperStyles*/ ctx[6]());
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, img);
		},
		p(ctx, [dirty]) {
			if (dirty & /*image_aspect_ratio*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-aspectratio", /*image_aspect_ratio*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

let min = 100;
let max = 10000;

function instance($$self, $$props, $$invalidate) {
	let { image_aspect_ratio } = $$props;
	let { image } = $$props;
	let { srcTokens } = $$props;
	let diff = max - min;
	let generated_image_id = Date.now() / diff + min;
	let displayImage = image;

	if (!displayImage) {
		displayImage = {
			width: 1920,
			height: 1080,
			id: Date.now(),
			src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
		};
	}

	let image_id = displayImage.id;
	let max_height_image = displayImage.height;
	let max_width_image = displayImage.width;

	const IMAGE_WIDTHS = [
		180,
		360,
		540,
		720,
		900,
		1080,
		1296,
		1512,
		1728,
		1944,
		2160,
		2376,
		2592,
		2808,
		3024
	];

	const getImageWidths = nativeWidth => {
		const imageWidths = [];

		for (let i = 0; i < IMAGE_WIDTHS.length; i++) {
			const width = IMAGE_WIDTHS[i];

			if (nativeWidth > width) {
				imageWidths.push(width);
			} else {
				imageWidths.push(nativeWidth);
				break;
			}
		}

		return imageWidths.join(',');
	};

	const imageWidth = getImageWidths(displayImage.width);
	const max_width_image_float = max_width_image * 1.0;
	let urlTokens = srcTokens;
	let uriEncodedSrc = `${encodeURI(displayImage.src)}?width=300&height=300`;
	let dataSrcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.dataSrcToken);
	let srcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.srcToken);

	(aspectRatio => {
		if (aspectRatio <= 1) {
			max_height_image = image_height;
			max_width_image = max_height_image * image_aspect_ratio;
		} else {
			max_height_image = max_width_image / image_aspect_ratio;
		}
	})();

	const getWrapperStyles = () => {
		return `
    --padding-top: ${max_height_image / max_width_image_float * 100}%;
    --max-height: ${max_height_image}px;
    --max-width: ${max_width_image}px;
    `;
	};

	const getImageStyle = () => {
		return `
    max-width: ${max_width_image}px;
    max-height: ${max_height_image}px;
    object-fit: contain;`;
	};

	$$self.$$set = $$props => {
		if ('image_aspect_ratio' in $$props) $$invalidate(0, image_aspect_ratio = $$props.image_aspect_ratio);
		if ('image' in $$props) $$invalidate(8, image = $$props.image);
		if ('srcTokens' in $$props) $$invalidate(9, srcTokens = $$props.srcTokens);
	};

	return [
		image_aspect_ratio,
		generated_image_id,
		image_id,
		imageWidth,
		dataSrcUrl,
		srcUrl,
		getWrapperStyles,
		getImageStyle,
		image,
		srcTokens
	];
}

class Responsive_image extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				image_aspect_ratio: 0,
				image: 8,
				srcTokens: 9
			},
			add_css
		);
	}

	get image_aspect_ratio() {
		return this.$$.ctx[0];
	}

	set image_aspect_ratio(image_aspect_ratio) {
		this.$$set({ image_aspect_ratio });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get image() {
		return this.$$.ctx[8];
	}

	set image(image) {
		this.$$set({ image });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get srcTokens() {
		return this.$$.ctx[9];
	}

	set srcTokens(srcTokens) {
		this.$$set({ srcTokens });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Responsive_image, {"image_aspect_ratio":{},"image":{},"srcTokens":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive_image);

/***/ }),

/***/ "./js/components/svelte/review-card.svelte":
/*!*************************************************!*\
  !*** ./js/components/svelte/review-card.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/responsive-image.svelte */ "./js/components/svelte/responsive-image.svelte");
/* js/components/svelte/review-card.svelte generated by Svelte v4.2.0 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

// (39:12) {#each getReviews(rating) as star, index(index)}
function create_each_block(key_1, ctx) {
	let first;
	let html_tag;
	let raw_value = /*star*/ ctx[12] + "";
	let html_anchor;

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag.a = html_anchor;
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
			html_tag.m(raw_value, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
				html_tag.d();
			}
		}
	};
}

function create_fragment(ctx) {
	let div4;
	let div0;
	let responsiveimage;
	let t0;
	let div3;
	let div2;
	let div1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t1;
	let p0;
	let t3;
	let p1;
	let t5;
	let p2;
	let current;

	responsiveimage = new SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				image: /*image*/ ctx[6],
				srcTokens: /*srcTokens*/ ctx[5],
				image_aspect_ratio: 1
			}
		});

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*getReviews*/ ctx[0](/*rating*/ ctx[1]));
	const get_key = ctx => /*index*/ ctx[14];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(responsiveimage.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p0.textContent = `${/*formattedDate*/ ctx[4]}`;
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p1.textContent = `${/*title*/ ctx[2]}`;
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p2.textContent = `${/*review_content*/ ctx[3]}`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "review_image");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "rating-star");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "date");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "rating");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p2, "class", "review");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "review_content");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "swiper-slide review_container");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div4, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(responsiveimage, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, p0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, p1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, p2);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*getReviews, rating*/ 3) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*getReviews*/ ctx[0](/*rating*/ ctx[1]));
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div1, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_block, create_each_block, null, get_each_context);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(responsiveimage.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(responsiveimage.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div4);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { review } = $$props;
	let { getStars } = $$props;
	const getReviews = rating => getStars(rating);
	const { rating, date, product_image: productImage, product_name: productName, title, review_content } = review; //set default image
	const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date(date));

	const srcTokens = {
		replacementToken: '_x280.',
		dataSrcToken: '_x{width}.',
		srcToken: '_x280.'
	};

	const image = {
		id: Date.now(),
		width: 200,
		height: 200,
		src: productImage
	};

	$$self.$$set = $$props => {
		if ('review' in $$props) $$invalidate(7, review = $$props.review);
		if ('getStars' in $$props) $$invalidate(8, getStars = $$props.getStars);
	};

	return [
		getReviews,
		rating,
		title,
		review_content,
		formattedDate,
		srcTokens,
		image,
		review,
		getStars
	];
}

class Review_card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { review: 7, getStars: 8 });
	}

	get review() {
		return this.$$.ctx[7];
	}

	set review(review) {
		this.$$set({ review });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get getStars() {
		return this.$$.ctx[8];
	}

	set getStars(getStars) {
		this.$$set({ getStars });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Review_card, {"review":{},"getStars":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review_card);

/***/ }),

/***/ "./js/components/svelte/tab-section.svelte":
/*!*************************************************!*\
  !*** ./js/components/svelte/tab-section.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_accordion_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/accordion.svelte */ "./js/components/svelte/accordion.svelte");
/* js/components/svelte/tab-section.svelte generated by Svelte v4.2.0 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[7] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (11:8) {#if tabsTitle.length >= 1}
function create_if_block_1(ctx) {
	let div0;
	let t;
	let div1;
	let raw_value = /*tabsData*/ ctx[1][/*selectedKey*/ ctx[0]] + "";
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[2]);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "tab-section__tabs");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "tab-section__tab-description");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div0, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			div1.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*tabsTitle, selectedKey*/ 5) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[2]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*selectedKey*/ 1 && raw_value !== (raw_value = /*tabsData*/ ctx[1][/*selectedKey*/ ctx[0]] + "")) div1.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (13:16) {#each tabsTitle as tab}
function create_each_block_1(ctx) {
	let a;
	let t_value = /*tab*/ ctx[8].replace("_", " ") + "";
	let t;
	let a_aria_label_value;
	let a_class_value;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[4](/*tab*/ ctx[8], ...args);
	}

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "aria-label", a_aria_label_value = /*tab*/ ctx[8].replace("_", " "));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "role", "button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", a_class_value = `tab-section__tab-title ${/*selectedKey*/ ctx[0] == /*tab*/ ctx[8] && "product-atb__button--active"}`);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*selectedKey*/ 1 && a_class_value !== (a_class_value = `tab-section__tab-title ${/*selectedKey*/ ctx[0] == /*tab*/ ctx[8] && "product-atb__button--active"}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", a_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}

			mounted = false;
			dispose();
		}
	};
}

// (32:8) {#if tabsTitle.length >= 1}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[2]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*tabsData, tabsTitle*/ 6) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[2]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (35:20) 
function create_head_slot(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = `${/*accordionTitle*/ ctx[5].replace("_", " ")}`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "head");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			}
		}
	};
}

// (36:20) 
function create_details_slot(ctx) {
	let div;
	let html_tag;
	let raw_value = /*tabsData*/ ctx[1][/*accordionTitle*/ ctx[5]] + "";
	let t;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			html_tag.a = t;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "slot", "details");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			html_tag.m(raw_value, div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (33:12) {#each tabsTitle as accordionTitle, index}
function create_each_block(ctx) {
	let accordion;
	let current;

	accordion = new SvelteComponents_accordion_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				open: /*index*/ ctx[7] == 0,
				$$slots: {
					details: [create_details_slot],
					head: [create_head_slot]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(accordion.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(accordion, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const accordion_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				accordion_changes.$$scope = { dirty, ctx };
			}

			accordion.$set(accordion_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(accordion.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(accordion.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(accordion, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	let if_block0 = /*tabsTitle*/ ctx[2].length >= 1 && create_if_block_1(ctx);
	let if_block1 = /*tabsTitle*/ ctx[2].length >= 1 && create_if_block(ctx);

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block0) if_block0.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block1) if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "tab-section__tabs tab-section--desktop");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "tab-section__accordion tab-section--mobile");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "tab-section");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			if (if_block0) if_block0.m(div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			if (if_block1) if_block1.m(div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*tabsTitle*/ ctx[2].length >= 1) if_block0.p(ctx, dirty);
			if (/*tabsTitle*/ ctx[2].length >= 1) if_block1.p(ctx, dirty);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { shopifyData } = $$props;
	const tabsData = JSON.parse(JSON.stringify(shopifyData));
	const tabsTitle = Object.keys(shopifyData);
	let selectedKey = tabsTitle[0];

	const click_handler = (tab, ev) => {
		$$invalidate(0, selectedKey = tab);
	};

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(3, shopifyData = $$props.shopifyData);
	};

	return [selectedKey, tabsData, tabsTitle, shopifyData, click_handler];
}

class Tab_section extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 3 });
	}

	get shopifyData() {
		return this.$$.ctx[3];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Tab_section, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab_section);

/***/ })

}]);