"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/constants.js":
/*!************************************!*\
  !*** ./js/components/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryMap: () => (/* binding */ countryMap)
/* harmony export */ });
//all in smallcase, we are comparing it by making it lower case, key should match up with the data-json from shopify
//check JSON-output-section-product-carousel.liquid
var countryMap = {
  "canada": "ca,in",
  "other": ""
};

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


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

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
/* harmony export */   getPredictiveSearch: () => (/* binding */ getPredictiveSearch),
/* harmony export */   getProductData: () => (/* binding */ getProductData),
/* harmony export */   getReviewData: () => (/* binding */ getReviewData),
/* harmony export */   getReviewDataAggregate: () => (/* binding */ getReviewDataAggregate),
/* harmony export */   getSearchResult: () => (/* binding */ getSearchResult),
/* harmony export */   getSingleProductData: () => (/* binding */ getSingleProductData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var _excluded = ["ruleId", "text", "productId"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
        text = '',
        productId
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
    if (productId) {
      params.shopify_product_ids = "".concat(productId);
    }
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
var getSearchResult = /*#__PURE__*/function () {
  var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (query, limit) {
    var storeFrontKey = 'bc613e26638752aae34fdeeac6210cf0';
    var url = "/api/2024-01/graphql.json";
    var shopifyHeader = new Headers();
    shopifyHeader.append("Content-Type", "application/json");
    shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
    var graphqlquery = {
      query: "query searchProducts($query: String!, $first: Int) {\n        search(query: $query, first: $first, unavailableProducts:HIDE) {\n          totalCount\n          edges {\n            node {\n              ... on Product {\n              handle\n                productType\n                tags\n                vendor\n                title\n                featuredImage { \n                  altText\n                  height\n                  width         \n                  id              \n                  src\n                } \n                variants(first: 100) {\n                  nodes {\n                    metafields(identifiers: [{namespace: \"custom\", key: \"show_in_bundle\"}]) {\n                      value\n                    }\n                    id\n                    title\n                    availableForSale\n                    quantityAvailable\n                    price {\n                      amount\n                      currencyCode\n                    }\n                    compareAtPrice {\n                      amount\n                      currencyCode\n                    }\n                     image { \n                          altText\n                          height\n                          width         \n                          id              \n                          src\n                      }\n                  selectedOptions {\n                  name\n                  value\n                }\n                  }\n       \n                }\n           \n              }\n            }\n          }\n        }\n      }",
      variables: {
        "query": "".concat(query),
        "first": limit
      }
    };
    var requestOptions = {
      method: 'POST',
      headers: shopifyHeader,
      body: JSON.stringify(graphqlquery)
    };
    var data = yield fetch(url, requestOptions);
    var productData = yield data.json();
    return productData;
  });
  return function getSearchResult(_x5, _x6) {
    return _ref8.apply(this, arguments);
  };
}();
var getPredictiveSearch = /*#__PURE__*/function () {
  var _ref9 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (query) {
    var storeFrontKey = 'bc613e26638752aae34fdeeac6210cf0';
    var url = "/api/2024-01/graphql.json";
    var shopifyHeader = new Headers();
    shopifyHeader.append("Content-Type", "application/json");
    shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
    var graphqlquery = {
      query: "query suggestions($query: String!) {\n        predictiveSearch(query: $query, limit: 6, limitScope: EACH) {\n          queries {\n            text\n          }\n          collections {\n            handle\n            title\n          }\n          pages {\n              handle\n              title\n          }\n        }\n      }",
      variables: {
        "query": "".concat(query)
      }
    };
    var requestOptions = {
      method: 'POST',
      headers: shopifyHeader,
      body: JSON.stringify(graphqlquery)
    };
    var data = yield fetch(url, requestOptions);
    var searchData = yield data.json();
    // console.log(searchData, 'jiiiiii')
    return searchData;
  });
  return function getPredictiveSearch(_x7) {
    return _ref9.apply(this, arguments);
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

/***/ "./js/components/react-wrapper.js":
/*!****************************************!*\
  !*** ./js/components/react-wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  var singlePropsEl = document.querySelector(propsEl);
  var props = {};
  if (singlePropsEl) {
    props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(singlePropsEl === null || singlePropsEl === void 0 ? void 0 : singlePropsEl.innerHTML) || {};
  }
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    if (appTarget && !initialized) {
      if (!singlePropsEl) {
        if (propsEl) {
          var _appTarget$querySelec;
          props = {};
          props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
        }
      }
      appTarget.dataset.initialized = true;
      var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appTarget);
      root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        shopifyData: props
      }));
      return root;
    }
  });
});

/***/ }),

/***/ "./js/components/react/AccountPage.js":
/*!********************************************!*\
  !*** ./js/components/react/AccountPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SvgIcon */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ReactComponents_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ReactComponents/Profile */ "./js/components/react/Profile.js");
/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Addresses */ "./js/components/react/Addresses.js");
/* harmony import */ var _ordersData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordersData */ "./js/components/react/ordersData.js");
/* harmony import */ var _discount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discount */ "./js/components/react/discount.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






var logoutIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.12729 3.9873C5.91815 3.9873 4.12729 5.77817 4.12729 7.9873V24.0128C4.12729 26.2219 5.91815 28.0128 8.12729 28.0128H20.4118V25.3461H8.12729C7.39091 25.3461 6.79396 24.7492 6.79396 24.0128V7.9873C6.79396 7.25092 7.39091 6.65397 8.12729 6.65397H20.4118V3.9873H8.12729ZM19.3978 10.276L23.922 14.8002H11.8679V17.2002H23.922L19.563 21.5593L21.2601 23.2563L27.6676 16.8488C28.1362 16.3801 28.1362 15.6203 27.6676 15.1517L21.0949 8.57898L19.3978 10.276Z\" fill=\"#ED1C24\"/>\n</svg>";
var popStateActive = true;
var SvgIcon = _ref => {
  var {
    icon,
    svgClass
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: svgClass,
    dangerouslySetInnerHTML: {
      __html: icon
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref2 => {
  var {
    shopifyData
  } = _ref2;
  var initialOrders = {};
  var [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  shopifyData.orders.data.forEach(item => initialOrders[item.id] = item);
  var [ordersData, setOrdersData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_objectSpread({}, initialOrders));
  var [allOrdersFetched, setAllOrdersFetched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getOrders();
    var url = window.location.search;
    if (!url) {
      var isAddressesPage = window.location.pathname.split('account/')[1];
      if (isAddressesPage) setSelectedIndex(2);
    } else {
      url == '?tab=orders' ? setSelectedIndex(1) : url == '?tab=addresses' ? setSelectedIndex(2) : url == '?tab=discount' ? setSelectedIndex(3) : null;
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!popStateActive) {
      var tab = window.location.search.split("tab=")[1];
      console.log('url', selectedIndex, tab);
      if (selectedIndex == 1 && tab != 'orders') {
        var params = new URLSearchParams(window.location.search);
        params.set('tab', 'orders');
        history.pushState({
          "tab": "orders"
        }, "", window.location.pathname + "?" + params.toString());
      } else if (selectedIndex == 2 && tab != 'addresses') {
        var _params = new URLSearchParams(window.location.search);
        _params.set('tab', 'addresses');
        history.pushState({
          "tab": "addresses"
        }, "", window.location.pathname + "?" + _params.toString());
      } else if (selectedIndex == 3 && tab != 'discount') {
        var _params2 = new URLSearchParams(window.location.search);
        _params2.set('tab', 'discount');
        history.pushState({
          "tab": "discount"
        }, "", window.location.pathname + "?" + _params2.toString());
      } else if (selectedIndex == 0 && tab != 'profile') {
        var _params3 = new URLSearchParams(window.location.search);
        _params3.set('tab', 'profile');
        history.pushState({
          "tab": "profile"
        }, "", window.location.pathname + "?" + _params3.toString());
      }
    } else {
      popStateActive = false;
    }
  }, [selectedIndex]);
  window.addEventListener('popstate', event => {
    var _event$state, _event$state2, _event$state3, _event$state4;
    if (((_event$state = event.state) === null || _event$state === void 0 ? void 0 : _event$state.tab) == 'orders' && selectedIndex != 1 || ((_event$state2 = event.state) === null || _event$state2 === void 0 ? void 0 : _event$state2.tab) == 'addresses' && selectedIndex != 2 || ((_event$state3 = event.state) === null || _event$state3 === void 0 ? void 0 : _event$state3.tab) == 'discount' && selectedIndex != 3 || selectedIndex != 0) {
      popStateActive = true;
    }
    var tab = (_event$state4 = event.state) === null || _event$state4 === void 0 ? void 0 : _event$state4.tab;
    tab == 'orders' ? setSelectedIndex(1) : tab == 'addresses' ? setSelectedIndex(2) : tab == 'discount' ? setSelectedIndex(3) : setSelectedIndex(0);
  });
  function getOrders() {
    return _getOrders.apply(this, arguments);
  }
  function _getOrders() {
    _getOrders = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      try {
        var url = "/account?page=".concat(page, "&view=orders");
        var fetchedOrders = {};
        var response = yield fetch(url).then(res => res.json());
        response.data.forEach(item => fetchedOrders[item.id] = item);
        setOrdersData(_objectSpread(_objectSpread({}, ordersData), fetchedOrders));
        if (response.hasNext) {
          getOrders(++page);
        } else {
          setAllOrdersFetched(true);
        }
      } catch (error) {
        console.log({
          page,
          error
        });
      }
    });
    return _getOrders.apply(this, arguments);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Group, {
    vertical: true,
    selectedIndex: selectedIndex,
    onChange: setSelectedIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.List, {
    className: "account-heading__tab-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__mobile account-heading__desktop-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "My Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: "/account/logout",
    "data-exclude-instant": true
  }, "Log out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__item-list account-heading__padding-bottom account-heading__mobile-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__name"
  }, "Hi, ", shopifyData.profile.data.first_name, " ", shopifyData.profile.data.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__email"
  }, shopifyData.profile.data.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__item-list"
  }, Object.keys(shopifyData).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab, {
    key: key,
    className: "account-heading__item-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__item-value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SvgIcon, {
    svgClass: "account-heading__icon account-heading__active-icon",
    icon: shopifyData[key].icon.active
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SvgIcon, {
    svgClass: "account-heading__icon account-heading__normal-icon",
    icon: shopifyData[key].icon.normal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "account-heading__title"
  }, shopifyData[key].title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-heading__item-block account-heading__logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: "/account/logout",
    className: "account-heading__item-value",
    "data-exclude-instant": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SvgIcon, {
    svgClass: "account-heading__icon account-heading__normal-icon",
    icon: logoutIcon
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Log out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panels, {
    className: "account-heading__item-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ReactComponents_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: shopifyData.profile.data
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ordersData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ordersData: ordersData,
    allOrdersFetched: allOrdersFetched
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Addresses__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: shopifyData.addresses.data,
    classNameName: "account_addresses-container"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_discount__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ordersData: ordersData,
    allOrdersFetched: allOrdersFetched
  })))));
});

/***/ }),

/***/ "./js/components/react/Address.js":
/*!****************************************!*\
  !*** ./js/components/react/Address.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    address
  } = _ref;
  var defaultAddressClass = address.default ? " default-address" : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-content-block".concat(defaultAddressClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-content-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-content-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account_name"
  }, address.first_name, " ", address.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account_phone"
  }, address.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    as: "ul",
    className: "account_addresses-options-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "4",
    height: "18",
    fill: "none",
    viewBox: "0 0 4 18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: "#000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "2",
    cy: "9",
    r: "2",
    fill: "#000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "2",
    cy: "16",
    r: "2",
    fill: "#000"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
    static: true,
    className: "account_addresses-options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-action": "open-modal",
    "aria-controls": "modal-address-".concat(address.id)
  }, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      Shopify.CustomerAddress.destroy(address.id);
      return false;
    }
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-content-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", address.address1 !== '' ? address.address1 + ', ' : '', " ", address.address2 !== '' ? address.address2 + ', ' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, address.city !== '' ? address.city + ', ' : '', address.province_code, address.zip !== "" ? address.zip + ' ,' : ','), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, address.country)));
});

/***/ }),

/***/ "./js/components/react/Addresses.js":
/*!******************************************!*\
  !*** ./js/components/react/Addresses.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address */ "./js/components/react/Address.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var sortedAddresses = data.sort(a => a.default ? -1 : 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-header account_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "account_title"
  }, "My Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "account_addresses-add account_addresses-add-desktop button",
    "data-action": "open-modal",
    "aria-controls": "modal-address-new"
  }, "+ Add address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account_addresses-content-wrapper"
  }, sortedAddresses.map((block, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Address__WEBPACK_IMPORTED_MODULE_1__["default"], {
    address: block,
    key: "".concat(block.id)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "account_addresses-add account_addresses-add-mobile button",
    "data-action": "open-modal",
    "aria-controls": "modal-address-new"
  }, "+ Add address"));
});

/***/ }),

/***/ "./js/components/react/Modal.js":
/*!**************************************!*\
  !*** ./js/components/react/Modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  window.OpenReactModal = component => {
    setModalContent(component);
    setTimeout(() => {
      setModalOpen(true);
    });
    document.addEventListener('keydown', checkForEscape);
  };
  var checkForEscape = event => {
    console.log('kwydown');
    if (event.key === "Escape") {
      closeModal();
    }
  };
  function closeModal() {
    document.removeEventListener('keydown', checkForEscape);
    setModalOpen(false);
    setTimeout(() => {
      setModalContent('');
    }, 150);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, modalContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-modal-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-modal__overlay",
    onClick: closeModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-modal__content-wrapper".concat(modalOpen ? " open" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "react-modal__close-btn",
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12",
    fill: "#E9E9E9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    stroke: "#B3B3B3",
    strokeLinecap: "square",
    strokeWidth: 1.797,
    d: "m8 16 4-4m0 0 4 4m-4-4L8 8m4 4 4-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-modal__content"
  }, modalContent))));
});

/***/ }),

/***/ "./js/components/react/Order.js":
/*!**************************************!*\
  !*** ./js/components/react/Order.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SvgIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-item */ "./js/components/react/order-item.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_1__);




// order status constants 
var orderStatusConst = {
  "recieved": "Order Received",
  "cancelled": "Order Cancelled",
  "shipped": "Order Shipped",
  "delivered": "Order Delivered",
  "shipped_partial": "Order Partially Shipped"
};
var arrow = "<svg width=\"30\" height=\"8\" viewBox=\"0 0 10 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M1.5575 0.221191L5 3.65619L8.4425 0.221191L9.5 1.27869L5 5.7787L0.5 1.27869L1.5575 0.221191Z\" fill=\"#0086BF\"/>\n                </svg>";
var SvgIcon = _ref => {
  var {
    icon,
    svgClass
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: svgClass,
    dangerouslySetInnerHTML: {
      __html: icon
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref2 => {
  var _orderData$tags, _orderData$tags2;
  var {
    data: orderData,
    search
  } = _ref2;
  var {
    fulfillment_status = '',
    name = '',
    line_items: lineItems = [],
    total_price: totalPrice,
    created_at: savedTime,
    item_count: totalQuantity,
    id: orderId,
    url
  } = orderData || {};
  var [first, second, ...otherProducts] = lineItems || [];
  var topFoldContents = [first, second].filter(item => item && item);
  var hiddenContents = [...otherProducts];
  var [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [renderProducts, updateRenderProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(topFoldContents);
  var [baseLineItems, setBaseLineItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([...lineItems]);
  var invoiceComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var [invoiceData, setInvoiceData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  // on click of invoice button on any order call downloadInvoice with order url as params
  function downloadInvoice(url, id) {
    try {
      fetch(url + "?view=invoice").then(res => res.text()).then(data => {
        setInvoiceData(data);
        setTimeout(handlePrint, 100);
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching your invoice. Please try again after sometime");
    }
  }
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_1__.useReactToPrint)({
    content: () => invoiceComponent.current
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    active ? updateRenderProducts([...renderProducts, ...hiddenContents]) : updateRenderProducts([...topFoldContents]);
  }, [active]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('search', search == "");
    if (search != "") {
      var sortedLines = [...lineItems].sort((a, b) => {
        if (b.title.toLowerCase().includes(search.toLowerCase())) return 1;
        if (a.title.toLowerCase().includes(search.toLowerCase())) return -1;
        return 0;
      });
      setBaseLineItems([...sortedLines]);
    }
  }, [search]);

  // set order status and tracking url
  var trackingUrl = lineItems.map(item => item.tracking_url)[0];
  var orderStatus = "";
  if ((_orderData$tags = orderData.tags) !== null && _orderData$tags !== void 0 && _orderData$tags.includes("order_delivered")) {
    orderStatus = "delivered";
  } else if ((_orderData$tags2 = orderData.tags) !== null && _orderData$tags2 !== void 0 && _orderData$tags2.includes("order_in-transit") || trackingUrl) {
    orderStatus = "shipped";
  } else if (orderData.cancelled == "true") {
    orderStatus = "cancelled";
  } else {
    orderStatus = "recieved";
  }
  var formatedDate = new Date(savedTime.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3')).toLocaleString("en-CA", {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__status-invoice-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-status"
  }, "Order status: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__order-status-".concat(orderStatus)
  }, orderStatusConst[orderStatus])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__tracking-invoice-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, trackingUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: trackingUrl
  }, "Track the order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "account-orders__invoice-btn",
    onClick: () => downloadInvoice(url, name)
  }, "Invoice")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__status-invoice-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-detail-wrap "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-placed account-orders__grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading"
  }, "Order Placed on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading-value"
  }, formatedDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-id account-orders__grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading"
  }, "Order ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading-value".concat(search && name.includes(search) ? " order-higlight" : "")
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-quantity account-orders__grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading"
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading-value"
  }, totalQuantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-price account-orders__grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__heading-value"
  }, totalPrice)), trackingUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__tracking-invoice-wrap-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: trackingUrl
  }, "Track the order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__tracking-invoice-wrap-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "account-orders__invoice-btn",
    onClick: () => downloadInvoice(url)
  }, "Invoice")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__order-wrapp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !active && baseLineItems.map((item, index) => {
    if (index < 2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: item,
        key: index,
        search: search
      });
    }
  }), active && baseLineItems.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_order_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item,
      key: index,
      search: search
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__repeat-order account-heading__mobile-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-orders__btn",
    href: "https://snshealth.com/apps/rebuy/reorder?shopify_order_id=".concat(orderId, "&_kx=")
  }, "Repeat Order"))), hiddenContents.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "account-orders__more-button",
    onClick: () => {
      setActive(!active);
    }
  }, " ", !active ? hiddenContents.length : '', " ", !active ? "More" : "Less", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SvgIcon, {
    svgClass: "__arrow ".concat(!active ? "" : "account-orders__arrow-active"),
    icon: arrow
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-orders__btn",
    href: "https://snshealth.com/apps/rebuy/reorder?shopify_order_id=".concat(orderId, "&_kx=")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__repeat-order account-heading__desktop-hidden"
  }, "Repeat Order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "invoice-element",
    dangerouslySetInnerHTML: {
      __html: invoiceData
    },
    ref: invoiceComponent
  }));
});

/***/ }),

/***/ "./js/components/react/Profile.js":
/*!****************************************!*\
  !*** ./js/components/react/Profile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var [customerInfo, setCustomerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_objectSpread({}, data));
  var [infoChanged, setInfoChanged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [enablePassword, setEnablePassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [userPassword, setUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  var [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [updateSuccess, setUpdateSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  function handleInputChange() {
    var _event$target$classLi;
    var inputEl = event.target;
    var info = customerInfo;
    if (event.target.name == 'mobile number') {
      info[event.target.name] = event.target.value.replace(/[^0-9+]/g, "");
    } else {
      info[event.target.name] = event.target.value;
    }
    setCustomerInfo(_objectSpread({}, info));
    setInfoChanged(true);
    setFormError(false);
    (_event$target$classLi = event.target.classList) === null || _event$target$classLi === void 0 || _event$target$classLi.remove('error');
    if (event.target.value == '') event.target.classList.add('error');
  }
  function clearEdits() {
    setCustomerInfo(_objectSpread({}, data));
    setInfoChanged(false);
    setEnablePassword(false);
    setFormError(false);
    Object.keys(customerInfo).forEach(info => {
      var _document$querySelect;
      (_document$querySelect = document.querySelector("[name=\"".concat(info, "\"]")).classList) === null || _document$querySelect === void 0 || _document$querySelect.remove('error');
    });
  }
  function handlePasswordChange() {
    setUserPassword(event.target.value);
    setPasswordError(false);
    if (event.target.value == '') event.target.classList.add('error');
  }
  function validateForm() {
    return Object.keys(customerInfo).filter(info => {
      return customerInfo[info] == '';
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _document$getElementB;
    enablePassword ? (_document$getElementB = document.getElementById('password')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.focus() : null;
  }, [enablePassword]);
  function handleFormSubmit() {
    return _handleFormSubmit.apply(this, arguments);
  }
  function _handleFormSubmit() {
    _handleFormSubmit = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var submitBtn = event.target;
      submitBtn.setAttribute("disabled", "disabled");
      try {
        var _customerUpdate$data$;
        if (validateForm().length > 0) {
          throw {
            'key': validateForm(),
            'data': "".concat(validateForm().join(', ').replaceAll('_', ' '), "  cannot be empty")
          };
        } else if (userPassword.length == 0) {
          throw {
            key: 'password',
            data: 'Incorrect password'
          };
        }
        console.log(userPassword);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Shopify-Storefront-Access-Token", "bc613e26638752aae34fdeeac6210cf0");
        var graphql = {
          query: "mutation customerAccessTokenCreate ($input: CustomerAccessTokenCreateInput!){\n        customerAccessTokenCreate(input: $input) {\n          customerAccessToken {\n            accessToken\n              expiresAt\n          }\n          customerUserErrors {\n              code\n              field\n              message\n          }\n        }\n      }",
          variables: {
            "input": {
              "email": data.email,
              "password": userPassword
            }
          }
        };
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(graphql)
        };
        var accessToken = yield fetch("/api/2024-01/graphql.json", requestOptions).then(response => response.json()).then(data => {
          var _data$data;
          return data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 || (_data$data = _data$data.customerAccessTokenCreate) === null || _data$data === void 0 || (_data$data = _data$data.customerAccessToken) === null || _data$data === void 0 ? void 0 : _data$data.accessToken;
        });
        if (!accessToken) throw {
          key: 'password',
          data: 'Incorrect password'
        };
        var updateCustomer = {
          query: "mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {\n        customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {\n          customer {\n              phone\n              firstName\n              lastName\n          }\n          customerUserErrors {\n              code\n              field\n              message\n          }\n        }\n      }",
          variables: {
            "customer": {
              email: customerInfo['email'],
              phone: customerInfo['mobile number'].trim(),
              firstName: customerInfo['first_name'].trim(),
              lastName: customerInfo['last_name'].trim()
            },
            "customerAccessToken": accessToken
          }
        };
        var requestOptions2 = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(updateCustomer)
        };
        var customerUpdate = yield fetch("/api/2024-01/graphql.json", requestOptions2).then(response => response.json()).then(data => data);
        var customerError = (_customerUpdate$data$ = customerUpdate.data['customerUpdate'].customerUserErrors[0]) === null || _customerUpdate$data$ === void 0 ? void 0 : _customerUpdate$data$.message;
        if (customerError) throw customerError;
        console.log(customerUpdate);
        setUpdateSuccess(true);
        setEnablePassword(false);
        setUserPassword('');
        setInfoChanged(false);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 5000);
      } catch (error) {
        var _error$key;
        console.log(error);
        if (typeof error == 'string') {
          setFormError(true);
          document.querySelector('.account_profile-update-form-error span').textContent = error;
        } else if (error.key == 'password') {
          var _document$getElementB2;
          setPasswordError(true);
          (_document$getElementB2 = document.getElementById('password')) === null || _document$getElementB2 === void 0 || _document$getElementB2.focus();
        } else if (((_error$key = error.key) === null || _error$key === void 0 ? void 0 : _error$key.length) > 0) {
          setFormError(true);
          document.querySelector('.account_profile-update-form-error span').textContent = error.data;
          error.key.forEach(field => {
            document.querySelector("[name=\"".concat(field, "\"]")).classList.add('error');
          });
        }
      } finally {
        submitBtn.removeAttribute("disabled");
      }
    });
    return _handleFormSubmit.apply(this, arguments);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-header account_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", {
    className: "account_title"
  }, "Personal Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-form-error".concat(!formError ? ' hidden' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
    fill: "none",
    strokeMiterlimit: "10",
    strokeWidth: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", {
    fill: "#E80000",
    d: "M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45z",
    transform: "matrix(2.81 0 0 2.81 1.407 1.407)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", {
    fill: "#FFF",
    d: "M45 60.473a4.516 4.516 0 01-4.515-4.515v-36.44a4.516 4.516 0 019.03 0v36.44A4.516 4.516 0 0145 60.473zM45 75.003a4.55 4.55 0 01-3.195-1.333 5.414 5.414 0 01-.564-.677 4.669 4.669 0 01-.406-.79 4.49 4.49 0 01-.26-.836 4.684 4.684 0 01-.09-.88c0-1.197.485-2.359 1.321-3.195.214-.215.44-.407.688-.564.249-.17.508-.305.779-.418.271-.112.553-.203.847-.26a4.657 4.657 0 011.761 0c.294.057.576.148.847.26.27.112.53.248.778.418.248.158.474.349.689.564a4.553 4.553 0 011.321 3.195 4.538 4.538 0 01-1.321 3.182 4.03 4.03 0 01-.689.564 5.114 5.114 0 01-.778.418 4.553 4.553 0 01-1.728.352z",
    transform: "matrix(2.81 0 0 2.81 1.407 1.407)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-content-wrapper"
  }, Object.keys(customerInfo).map((block, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-content-block",
    key: "".concat(block, "-").concat(i)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: block
  }, block.replace("_", " "), " ", block == 'mobile number' ? "(include country code)" : ''), block == "email" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: block,
    name: block,
    value: customerInfo[block],
    disabled: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: block == 'mobile number' ? 'tel' : 'text',
    id: block,
    name: block,
    value: customerInfo[block] || '',
    onChange: handleInputChange
  })))), enablePassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-password-wrapper account_profile-content-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "password"
  }, "Please confirm your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: showPassword ? "text" : "password",
    id: "password",
    name: "password",
    className: "account_profile-update-password".concat(passwordError ? " error" : ""),
    placeholder: "Please confirm your password",
    value: userPassword,
    onChange: handlePasswordChange
  }), passwordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-password-error"
  }, "Incorrect password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-show-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "checkbox",
    id: "show_password",
    name: "show_password",
    className: "account_profile-show-password-check",
    value: showPassword,
    onChange: () => setShowPassword(!showPassword)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "show_password",
    className: "account_profile-show-password-label"
  }, "  Show Password"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "button account_profile-update-btn account_profile-update-btn-cancel",
    onClick: clearEdits
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "button account_profile-update-btn account_profile-update-btn-save",
    onClick: handleFormSubmit
  }, "Confirm Save")) : infoChanged && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "button account_profile-update-btn account_profile-update-btn-cancel",
    onClick: clearEdits
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "button account_profile-update-btn account_profile-update-btn-save",
    onClick: () => setEnablePassword(true)
  }, "Save")), updateSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-success"
  }, "Profile has been updated successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account_profile-update-error"
  })));
});

/***/ }),

/***/ "./js/components/react/ResponsiveImage.js":
/*!************************************************!*\
  !*** ./js/components/react/ResponsiveImage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    image_aspect_ratio,
    image,
    srcTokens
  } = _ref;
  var min = 100;
  var max = 10000;
  var diff = max - min;
  var generated_image_id = Date.now() / diff + min;
  var displayImage = image;
  if (!displayImage) {
    displayImage = {
      width: 1920,
      height: 1080,
      id: Date.now(),
      src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
    };
  }
  var aspectRatio = image_aspect_ratio;
  var {
    height: maxHeightImage,
    id: image_id,
    src: imageSrc,
    width: maxWidthImage
  } = displayImage;
  var IMAGE_WIDTHS = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024];
  var getImageWidths = nativeWidth => {
    var imageWidths = [];
    for (var i = 0; i < IMAGE_WIDTHS.length; i++) {
      var width = IMAGE_WIDTHS[i];
      if (nativeWidth > width) {
        imageWidths.push(width);
      } else {
        imageWidths.push(nativeWidth);
        break;
      }
    }
    return imageWidths.join(',');
  };
  var imageWidth = getImageWidths(displayImage.width);
  var urlTokens = srcTokens;
  var uriEncodedSrc = "".concat(encodeURI(imageSrc), "?width=300&height=300");
  var dataSrcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.dataSrcToken);
  var srcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.srcToken);
  if (aspectRatio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * aspectRatio;
  } else {
    maxHeightImage = parseInt(maxWidthImage) / aspectRatio;
  }
  var maxWidthImageFloat = maxWidthImage * 1.0;
  var getWrapperStyles = () => {
    return {
      '--padding-top': "".concat(maxHeightImage / maxWidthImageFloat * 100, "%"),
      '--max-height': "".concat(maxHeightImage, "px"),
      '--max-width': "".concat(maxWidthImage, "px")
    };
  };
  var getImageStyle = () => {
    return {
      maxWidth: "".concat(maxWidthImage, "px"),
      maxHeight: "".concat(maxHeightImage, "px"),
      objectFit: 'contain'
    };
  };
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n      \n  }";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ImageWrapper-".concat(image_id, "-").concat(generated_image_id),
    "data-image-id": image_id,
    className: "responsive-image__wrapper",
    style: getWrapperStyles()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "Image-".concat(image_id, "-").concat(generated_image_id),
    className: "responsive-image__image lazyload",
    src: srcUrl,
    srcSet: uriEncodedSrc,
    "data-src": dataSrcUrl,
    "data-widths": "[".concat(imageWidth, "]"),
    "data-aspectratio": aspectRatio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css));
});

/***/ }),

/***/ "./js/components/react/discount-item.js":
/*!**********************************************!*\
  !*** ./js/components/react/discount-item.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order */ "./js/components/react/Order.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data,
    order
  } = _ref;
  var {
    created_at: savedTime,
    name: orderId,
    title
  } = data || {};
  var formatedDate = new Date(savedTime.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3')).toLocaleString("en-CA", {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
  function openModal() {
    if (window.OpenReactModal) window.OpenReactModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Order__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: order,
      search: ""
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__container-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__content-discount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__date discount__flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__date-id"
  }, "Date:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__order-date discount__order-value"
  }, formatedDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "discount__id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__date-id"
  }, "Order no:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__order-id discount__order-value",
    onClick: openModal
  }, orderId))))));
});

/***/ }),

/***/ "./js/components/react/discount.js":
/*!*****************************************!*\
  !*** ./js/components/react/discount.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _discount_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discount-item */ "./js/components/react/discount-item.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    ordersData
  } = _ref;
  var discounts = [];
  Object.values(ordersData).forEach(order => {
    order.discount_applications.forEach(discount => {
      discounts.push({
        title: discount.title,
        created_at: order.created_at,
        name: order.name,
        id: order.id
      });
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discount__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "sidebar-title"
  }, "Used Discounts"), discounts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, discounts.map((discount, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_discount_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: discount,
    key: discount.name + index,
    order: ordersData[discount.id]
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have no discounts with your order.")));
});

/***/ }),

/***/ "./js/components/react/order-item.js":
/*!*******************************************!*\
  !*** ./js/components/react/order-item.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/react/ResponsiveImage.js");


var srcTokens = {
  replacementToken: "?width=90&height=90",
  dataSrcToken: "?width=width&height=height",
  srcToken: "?width=90&height=90"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data: lineItem,
    search
  } = _ref;
  var {
    total_price: lineTotalPrice = 0,
    title: variantName = '',
    quantity: singleQuantity,
    final_line_price: productPrice,
    image: image,
    url: productUrl
  } = lineItem || {};
  variantName = new DOMParser().parseFromString(variantName, "text/html").body.textContent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__product-lane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__product-info-wrap".concat(search && variantName.toLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLowerCase()) ? " search-highlight-border" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__image-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: productUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image_aspect_ratio: 1,
    image: image,
    srcTokens: srcTokens
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "account-orders__quantity"
  }, singleQuantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__product-info-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__title".concat(search && variantName.toLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLowerCase()) ? " search-highlight-title" : "")
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: productUrl
  }, variantName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-orders__variant"
  }, productPrice, " | ", variantName.split("-").pop())))));
});

/***/ }),

/***/ "./js/components/react/ordersData.js":
/*!*******************************************!*\
  !*** ./js/components/react/ordersData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Order */ "./js/components/react/Order.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    ordersData
  } = _ref;
  var [ordersToRender, setOrdersToRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread({}, ordersData));
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var filterOptions = [{
    name: "All orders",
    value: null
  }, {
    name: "Last 30 days",
    value: 30
  }, {
    name: "Last 60 days",
    value: 60
  }, {
    name: "Last 90 days",
    value: 90
  }];
  var [filterDays, setFilterDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filterOptions[0]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setOrdersToRender(filterOrders(filterDays));
  }, [filterDays, searchQuery, ordersData]);
  function filterOrders(daysLimit) {
    var filteredOrders;
    if (daysLimit.value == "older") {
      filteredOrders = Object.values(ordersData).filter(order => {
        var createdDate = order.created_at.split(" ")[0];
        var orderDate = new Date(createdDate.replace(/-/g, "/"));
        var today = new Date();
        var timeDiff = today.getTime() - orderDate.getTime();
        var daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
        return daysDiff > 90;
      });
    } else if (typeof daysLimit.value == 'number') {
      filteredOrders = Object.values(ordersData).filter(order => {
        var createdDate = order.created_at.split(" ")[0];
        var orderDate = new Date(createdDate.replace(/-/g, "/"));
        var today = new Date();
        var timeDiff = today.getTime() - orderDate.getTime();
        var daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
        return daysDiff < daysLimit.value;
      });
    } else {
      filteredOrders = _objectSpread({}, ordersData);
    }
    // apply search after filtering done
    if (searchQuery) {
      filteredOrders = Object.values(filteredOrders).filter(order => {
        return order.line_items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())) || order.name.includes(searchQuery);
      });
    }
    return _objectSpread({}, filteredOrders);
  }
  function handleSearch(event) {
    var value = event.target.value;
    setSearchQuery(value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "account-orders__orders-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "account-orders__orders-header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "My Orders"), Object.values(ordersToRender).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "account-orders__filter-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "account-orders__filter-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, Object.values(ordersToRender).length, " orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox, {
    as: "div",
    className: "account-orders__filter",
    value: filterDays,
    onChange: setFilterDays
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Button, {
    className: "account-orders__filter-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, filterDays.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M5.5575 6.22119L9 9.65619L12.4425 6.22119L13.5 7.27869L9 11.7787L4.5 7.27869L5.5575 6.22119Z",
    fill: "black"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Options, {
    static: true,
    className: "account-orders__filter-dropdown"
  }, filterOptions.map((filter, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Option, {
    key: index,
    value: filter,
    className: filterDays.value == filter.value ? "selected" : ""
  }, filter.name)))))), Object.values(ordersToRender).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "account-orders__search-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: "search-box",
    className: "visually-hidden"
  }, "Search by order id or product name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "text",
    id: "search-box",
    name: "search-box",
    className: "account-orders__orders-search",
    placeholder: "Search by order id / product name",
    value: searchQuery,
    onChange: handleSearch
  }), searchQuery ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "account-orders__search-clear",
    onClick: () => setSearchQuery('')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12",
    fill: "#E9E9E9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    stroke: "#B3B3B3",
    strokeLinecap: "square",
    strokeWidth: 1.797,
    d: "m8 16 4-4m0 0 4 4m-4-4L8 8m4 4 4-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "account_orders-content-wrapper"
  }, Object.values(ordersToRender).length > 0 ? Object.values(ordersToRender).map(order => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Order__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: order,
    key: order.id,
    search: searchQuery
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "You haven't placed any orders yet.")));
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
      (_window$Rebuy2 = window.Rebuy) === null || _window$Rebuy2 === void 0 || (_window$Rebuy2 = _window$Rebuy2.SmartCart) === null || _window$Rebuy2 === void 0 || _window$Rebuy2.show();
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
  (_document$querySelect = document.querySelectorAll(selector)) === null || _document$querySelect === void 0 || _document$querySelect.forEach(item => item.addEventListener('click', ev => {
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

/***/ "./js/components/sticky-atc.js":
/*!*************************************!*\
  !*** ./js/components/sticky-atc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stickyATC: () => (/* binding */ stickyATC)
/* harmony export */ });
var stickyATC = () => {
  var options = {
    root: document,
    rootMargin: "0px",
    threshold: 0.5
  };
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector(".product-form__add-button.quick-add-to-cart").classList.remove("sticky");
      } else {
        document.querySelector(".product-form__add-button.quick-add-to-cart").classList.add("sticky");
      }
    });
  }, options);
  var target = document.querySelector(".product-form__info-item.product-form__info-item--quantity");
  if (target) observer.observe(target);
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

/***/ "./js/components/svelte/bundle-store.js":
/*!**********************************************!*\
  !*** ./js/components/svelte/bundle-store.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   cartContents: () => (/* binding */ cartContents),
/* harmony export */   clearMiniCart: () => (/* binding */ clearMiniCart),
/* harmony export */   finalBundlePrice: () => (/* binding */ finalBundlePrice),
/* harmony export */   updateQuantity: () => (/* binding */ updateQuantity)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/src/runtime/store/index.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var cartContents = (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.writable)({});
var finalBundlePrice = {
  12: 49.00,
  24: 85.00,
  36: 120.00
};
var localStorageData = JSON.parse(window.localStorage.getItem("bundleCartData") || "{}");
cartContents.update(contents => {
  contents = _objectSpread({}, localStorageData);
  return contents;
});
var syncLocalStorage = data => {
  localStorage.setItem("bundleCartData", JSON.stringify({}));
  localStorage.setItem("bundleCartData", JSON.stringify(data));
};
window.addedBundleProducts = [];
var updateQuantity = (item, quantity) => {
  var id = item.id;
  cartContents.update(contents => {
    if (quantity <= 0) {
      delete contents[id];
    } else {
      contents[id].quantity = quantity;
    }
    syncLocalStorage(contents);
    return contents;
  });
};
var addProduct = productObj => {
  var variantId = productObj.id;
  cartContents.update(contents => {
    contents[variantId] = productObj;
    syncLocalStorage(contents);
    return contents;
  });
};
var clearMiniCart = () => cartContents.update(contents => {
  contents = {};
  syncLocalStorage(contents);
  return contents;
});

/***/ }),

/***/ "./js/components/svelte/predictive-search/searchStore.js":
/*!***************************************************************!*\
  !*** ./js/components/svelte/predictive-search/searchStore.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchQuery: () => (/* binding */ searchQuery),
/* harmony export */   updateSearchQuery: () => (/* binding */ updateSearchQuery)
/* harmony export */ });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/src/runtime/store/index.js");

var searchQuery = (0,svelte_store__WEBPACK_IMPORTED_MODULE_0__.writable)('');
var updateSearchQuery = query => {
  searchQuery.update(data => {
    data = query;
    return data;
  });
};

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
/* js/components/svelte/AnnouncementBar.svelte generated by Svelte v4.2.12 */






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
		const announcementBarHeight = document.querySelector('#shopify-section-announcement-bar')?.getBoundingClientRect().height;
		document.querySelector('body').style.setProperty('--announcement-bar-height-sticky', `${announcementBarHeight}px`);
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
/* js/components/svelte/accordion.svelte generated by Svelte v4.2.12 */




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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "details");
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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "accordion custom_filter_header");
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
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { open: 0 });
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

/***/ "./js/components/svelte/bundle-cart.svelte":
/*!*************************************************!*\
  !*** ./js/components/svelte/bundle-cart.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/bundle-store.js */ "./js/components/svelte/bundle-store.js");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/src/runtime/transition/index.js");
/* harmony import */ var SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! SvelteComponents/responsive-image.svelte */ "./js/components/svelte/responsive-image.svelte");
/* js/components/svelte/bundle-cart.svelte generated by Svelte v4.2.12 */









function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	child_ctx[17] = list;
	child_ctx[18] = i;
	return child_ctx;
}

// (106:0) {#if Object.keys($cartContents).length}
function create_if_block(ctx) {
	let div12;
	let div11;
	let div10;
	let div2;
	let div0;
	let t1;
	let div1;
	let a;
	let t2;
	let div3;
	let t3;
	let div8;
	let div6;
	let div4;
	let t4;
	let t5;

	let t6_value = (SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]] && /*totalPrice*/ ctx[4] >= SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]]
	? SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]]
	: /*totalPrice*/ ctx[4]) + "";

	let t6;
	let t7;
	let t8;
	let t9;
	let div5;
	let t10;
	let t11;
	let t12;
	let div7;
	let t13;
	let div9;
	let div12_transition;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*open*/ ctx[0]) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*open*/ ctx[0] && create_if_block_2(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*cartValidate*/ ctx[5]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_1(ctx, -1);
	let if_block2 = current_block_type_1(ctx);

	return {
		c() {
			div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			div0.innerHTML = `<p>Discount auto-applies once your bundle has exactly 12, 24 or 36
              items</p>`;

			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			if_block0.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block1) if_block1.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*currencySymbol*/ ctx[10]);
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t6_value);
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*currency*/ ctx[9]);
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*totalQuantity*/ ctx[1]);
			t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" items in bundle");
			t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block2.c();
			t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div9.textContent = "*Limited to 1 bundle per order";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "bundle-cart__heading");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "bundle-cart__svg");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "bundle-cart__wrap");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "bundle-cart__info");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "bundle-cart__price");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "bundle-cart__total-bundle");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "bundle-cart__footer-price");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "bundle-cart__footer");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "bundle-cart__info-text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "bundle-cart__container");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "bundle-cart");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div12, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, div10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, a);
			if_block0.m(a, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div3);
			if (if_block1) if_block1.m(div3, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
			if_block2.m(div7, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t13);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a, "click", /*swapIcon*/ ctx[8]);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(a, null);
				}
			}

			if (/*open*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*open*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div3, null);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if ((!current || dirty & /*totalQuantity, totalPrice*/ 18) && t6_value !== (t6_value = (SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]] && /*totalPrice*/ ctx[4] >= SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]]
			? SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[/*totalQuantity*/ ctx[1]]
			: /*totalPrice*/ ctx[4]) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6, t6_value);

			if (!current || dirty & /*totalQuantity*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t10, /*totalQuantity*/ ctx[1]);

			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx, dirty)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type_1(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(div7, null);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);

			if (local) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
					if (!current) return;
					if (!div12_transition) div12_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div12, /*animate*/ ctx[11], Object.keys(/*$cartContents*/ ctx[2]).length, true);
					div12_transition.run(1);
				});
			}

			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);

			if (local) {
				if (!div12_transition) div12_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div12, /*animate*/ ctx[11], Object.keys(/*$cartContents*/ ctx[2]).length, false);
				div12_transition.run(0);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div12);
			}

			if_block0.d();
			if (if_block1) if_block1.d();
			if_block2.d();
			if (detaching && div12_transition) div12_transition.end();
			mounted = false;
			dispose();
		}
	};
}

// (123:14) {:else}
function create_else_block_1(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*openIcon*/ ctx[6];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (119:14) {#if open}
function create_if_block_3(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*closeIcon*/ ctx[7];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (133:10) {#if open}
function create_if_block_2(ctx) {
	let each_1_anchor;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.values(/*$cartContents*/ ctx[2]));
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
			if (dirty & /*Object, $cartContents*/ 4) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.values(/*$cartContents*/ ctx[2]));
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

// (134:12) {#each Object.values($cartContents) as item}
function create_each_block(ctx) {
	let div5;
	let div0;
	let responsiveimage;
	let t0;
	let div1;
	let p;
	let t1_value = /*item*/ ctx[16].title + "";
	let t1;
	let t2;
	let span0;
	let raw_value = /*item*/ ctx[16].price + "";
	let t3;
	let div4;
	let div2;
	let button0;
	let t5;
	let span1;
	let t6_value = /*item*/ ctx[16].quantity + "";
	let t6;
	let t7;
	let button1;
	let t9;
	let div3;
	let input;
	let t10;
	let button2;
	let t12;
	let current;
	let mounted;
	let dispose;

	responsiveimage = new SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				image: /*item*/ ctx[16].image,
				image_aspect_ratio: 0.8
			}
		});

	function click_handler() {
		return /*click_handler*/ ctx[13](/*item*/ ctx[16], /*each_value*/ ctx[17], /*item_index*/ ctx[18]);
	}

	function click_handler_1() {
		return /*click_handler_1*/ ctx[14](/*item*/ ctx[16], /*each_value*/ ctx[17], /*item_index*/ ctx[18]);
	}

	function click_handler_2() {
		return /*click_handler_2*/ ctx[15](/*item*/ ctx[16]);
	}

	return {
		c() {
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(responsiveimage.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button0.textContent = "-";
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t6_value);
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button1.textContent = "+";
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button2.textContent = "Remove";
			t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "bundle-cart__image");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "bundle-cart__title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "bundle-cart__title-and-price");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "name", "remove");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "name", "add");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "bundle-cart__quantity-form");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "index");
			input.value = "0";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "bundle-cart__remove");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "bundle-cart__quantity");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "bundle-cart__image-wrapp");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(responsiveimage, div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span0);
			span0.innerHTML = raw_value;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, button0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, button1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, input);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, button2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t12);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_1)),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button2, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_2))
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const responsiveimage_changes = {};
			if (dirty & /*$cartContents*/ 4) responsiveimage_changes.image = /*item*/ ctx[16].image;
			responsiveimage.$set(responsiveimage_changes);
			if ((!current || dirty & /*$cartContents*/ 4) && t1_value !== (t1_value = /*item*/ ctx[16].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
			if ((!current || dirty & /*$cartContents*/ 4) && raw_value !== (raw_value = /*item*/ ctx[16].price + "")) span0.innerHTML = raw_value;;
			if ((!current || dirty & /*$cartContents*/ 4) && t6_value !== (t6_value = /*item*/ ctx[16].quantity + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6, t6_value);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div5);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

// (211:12) {:else}
function create_else_block(ctx) {
	let button;

	let t0_value = (/*totalQuantity*/ ctx[1] < 12
	? 12 - /*totalQuantity*/ ctx[1]
	: 12 - /*totalQuantity*/ ctx[1] % 12) + "";

	let t0;
	let t1;
	let mounted;
	let dispose;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" more to go ...");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-action", "add-to-cart");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "href", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "bundle-cart__popup-btn bundle-cart__popup-btn--disabled");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*bundleAddToCart*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*totalQuantity*/ 2 && t0_value !== (t0_value = (/*totalQuantity*/ ctx[1] < 12
			? 12 - /*totalQuantity*/ ctx[1]
			: 12 - /*totalQuantity*/ ctx[1] % 12) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}

			mounted = false;
			dispose();
		}
	};
}

// (203:12) {#if cartValidate}
function create_if_block_1(ctx) {
	let button;
	let t_value = (/*loading*/ ctx[3] ? "Adding" : "Add to cart") + "";
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-action", "add-to-cart");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "href", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "bundle-cart__popup-btn");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*bundleAddToCart*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*loading*/ 8 && t_value !== (t_value = (/*loading*/ ctx[3] ? "Adding" : "Add to cart") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let show_if = Object.keys(/*$cartContents*/ ctx[2]).length;
	let if_block_anchor;
	let current;
	let if_block = show_if && create_if_block(ctx);

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
			if (dirty & /*$cartContents*/ 4) show_if = Object.keys(/*$cartContents*/ ctx[2]).length;

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$cartContents*/ 4) {
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

function instance($$self, $$props, $$invalidate) {
	let totalQuantity;
	let totalPrice;
	let cartValidate;
	let $cartContents;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.cartContents, $$value => $$invalidate(2, $cartContents = $$value));
	let { open = false } = $$props;

	const openIcon = ` <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21.5" cy="21.5" r="21" transform="rotate(-90 21.5 21.5)" fill="white"/>
                      <path d="M15.4999 23.5586L21.2646 17.7939L27.0294 23.5586" stroke="black" stroke-width="1.79723" stroke-linecap="square"/>
                    </svg>`;

	const closeIcon = `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="21" r="21" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0.5 0.5)" fill="white"/>
                      <path d="M15.4999 19.4414L21.2646 25.2061L27.0293 19.4414" stroke="black" stroke-width="1.79723" stroke-linecap="square"/>
                    </svg>`;

	const swapIcon = () => $$invalidate(0, open = !open);
	const currency = window.Shopify?.currency?.active;
	const currencySymbol = window.shopifyVariables.currencySymbol || "$";
	let loading = false;
	const animate = (node, args) => (0,svelte_transition__WEBPACK_IMPORTED_MODULE_2__.fade)(node, args);

	const bundleAddToCart = ev => {
		ev.preventDefault();
		$$invalidate(3, loading = true);

		const properties = {
			_isBundle: true,
			_customBundleTotal: totalPrice,
			_customBundleDiscountedPrice: SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[totalQuantity] && totalPrice >= SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[totalQuantity]
			? SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.finalBundlePrice[totalQuantity]
			: totalPrice
		};

		const curatedProductsArray = Object.values($cartContents).map(product => {
			const { quantity, id } = product;
			const curatedProductData = { id, quantity, properties };
			console.log("666", curatedProductData);
			return curatedProductData;
		});

		const addedProducts = Object.values($cartContents).map(item => {
			return `${item.quantity} x ${item.title}`;
		});

		window.localStorage.setItem("addedBundleProducts", JSON.stringify([]));
		window.localStorage.setItem("addedBundleProducts", JSON.stringify(addedProducts));
		const items = Rebuy.Cart.items() || [];
		const bundleProduct = items.find(item => item.id == "43497517842583");

		if (bundleProduct) {
			Rebuy.Cart.removeItem(bundleProduct, () => {
				Rebuy.Cart.addItem({ items: curatedProductsArray });
			});
		} else {
			Rebuy.Cart.addItem({ items: curatedProductsArray });
		}

		setTimeout(
			() => {
				$$invalidate(3, loading = false);
				(0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.clearMiniCart)();
			},
			2000
		);
	};

	const click_handler = (item, each_value, item_index) => (0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.updateQuantity)(item, item.quantity <= 0
	? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.cartContents, each_value[item_index].quantity = 0, $cartContents)
	: item.quantity - 1);

	const click_handler_1 = (item, each_value, item_index) => (0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.updateQuantity)(item, item.quantity >= 3
	? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.cartContents, each_value[item_index].quantity = 3, $cartContents)
	: item.quantity + 1);

	const click_handler_2 = item => {
		(0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_3__.updateQuantity)(item, 0);
	};

	$$self.$$set = $$props => {
		if ('open' in $$props) $$invalidate(0, open = $$props.open);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$cartContents, Object*/ 4) {
			//stateful variables
			$: $$invalidate(1, totalQuantity = $cartContents && Object.values($cartContents).reduce(
				(acc, currentVal) => {
					acc += currentVal.quantity;
					return acc;
				},
				0
			));
		}

		if ($$self.$$.dirty & /*$cartContents, Object*/ 4) {
			$: $$invalidate(4, totalPrice = $cartContents && Object.values($cartContents).reduce((total, item) => total += parseFloat(item.price.replace(currencySymbol, "")) * item.quantity, 0).toFixed(2));
		}

		if ($$self.$$.dirty & /*totalQuantity*/ 2) {
			$: $$invalidate(5, cartValidate = totalQuantity % 12 == 0);
		}
	};

	return [
		open,
		totalQuantity,
		$cartContents,
		loading,
		totalPrice,
		cartValidate,
		openIcon,
		closeIcon,
		swapIcon,
		currency,
		currencySymbol,
		animate,
		bundleAddToCart,
		click_handler,
		click_handler_1,
		click_handler_2
	];
}

class Bundle_cart extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { open: 0 });
	}

	get open() {
		return this.$$.ctx[0];
	}

	set open(open) {
		this.$$set({ open });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Bundle_cart, {"open":{"type":"Boolean"}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bundle_cart);

/***/ }),

/***/ "./js/components/svelte/checkbox.svelte":
/*!**********************************************!*\
  !*** ./js/components/svelte/checkbox.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/checkbox.svelte generated by Svelte v4.2.12 */



const get_content_slot_changes = dirty => ({});
const get_content_slot_context = ctx => ({});

function create_fragment(ctx) {
	let label;
	let input;
	let t;
	let current;
	let mounted;
	let dispose;
	const content_slot_template = /*#slots*/ ctx[3].content;
	const content_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(content_slot_template, ctx, /*$$scope*/ ctx[2], get_content_slot_context);

	return {
		c() {
			label = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (content_slot) content_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "checkbox");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, label, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label, input);
			input.checked = /*checked*/ ctx[0];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label, t);

			if (content_slot) {
				content_slot.m(label, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change", /*input_change_handler*/ ctx[4]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "click", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*handler*/ ctx[1])) /*handler*/ ctx[1].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*checked*/ 1) {
				input.checked = /*checked*/ ctx[0];
			}

			if (content_slot) {
				if (content_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						content_slot,
						content_slot_template,
						ctx,
						/*$$scope*/ ctx[2],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[2])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(content_slot_template, /*$$scope*/ ctx[2], dirty, get_content_slot_changes),
						get_content_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(content_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(content_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(label);
			}

			if (content_slot) content_slot.d(detaching);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { checked } = $$props;
	let { handler } = $$props;

	function input_change_handler() {
		checked = this.checked;
		$$invalidate(0, checked);
	}

	$$self.$$set = $$props => {
		if ('checked' in $$props) $$invalidate(0, checked = $$props.checked);
		if ('handler' in $$props) $$invalidate(1, handler = $$props.handler);
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [checked, handler, $$scope, slots, input_change_handler];
}

class Checkbox extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { checked: 0, handler: 1 });
	}

	get checked() {
		return this.$$.ctx[0];
	}

	set checked(checked) {
		this.$$set({ checked });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get handler() {
		return this.$$.ctx[1];
	}

	set handler(handler) {
		this.$$set({ handler });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Checkbox, {"checked":{},"handler":{}}, ["content"], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./js/components/svelte/collection-component.svelte":
/*!**********************************************************!*\
  !*** ./js/components/svelte/collection-component.svelte ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var _collection_grid_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-grid.svelte */ "./js/components/svelte/collection-grid.svelte");
/* js/components/svelte/collection-component.svelte generated by Svelte v4.2.12 */






function create_fragment(ctx) {
	let collectiongrid;
	let current;

	collectiongrid = new _collection_grid_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				loading: /*loading*/ ctx[1],
				firstFoldLoaded: /*firstFoldLoaded*/ ctx[2],
				apiPaginatedData: /*apiPaginatedData*/ ctx[0],
				handleTagMap: /*handleTagMap*/ ctx[3]
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(collectiongrid.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(collectiongrid, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const collectiongrid_changes = {};
			if (dirty & /*loading*/ 2) collectiongrid_changes.loading = /*loading*/ ctx[1];
			if (dirty & /*firstFoldLoaded*/ 4) collectiongrid_changes.firstFoldLoaded = /*firstFoldLoaded*/ ctx[2];
			if (dirty & /*apiPaginatedData*/ 1) collectiongrid_changes.apiPaginatedData = /*apiPaginatedData*/ ctx[0];
			collectiongrid.$set(collectiongrid_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(collectiongrid.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(collectiongrid.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(collectiongrid, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let apiPaginatedData = [];
	let loading = true;
	let firstFoldLoaded = false;

	const handleTagMap = {
		//handle and metafield value
		"build-your-own-box": "show_in_bundle",
		"sale": "show_in_sale",
		"clearance": "show_in_clearance"
	};

	async function loadProductData(cursor = "") {
		const collectionHandle = window.shopifyVariables.collectionHandle;
		let options = `products(first: 25)`;

		if (cursor !== "" && cursor !== "end") {
			options = `products(first: 250, after: "${cursor}")`;
		}

		let myHeaders = new Headers();
		myHeaders.append("X-Shopify-Storefront-Access-Token", "bc613e26638752aae34fdeeac6210cf0");
		myHeaders.append("X-Shopify-Api-Features", "include-presentment-prices");
		myHeaders.append("Content-Type", "application/json");

		let graphql = JSON.stringify({
			query: `query AllProducts @inContext(country: ${window.Shopify.country}) {
            collection(handle: "${collectionHandle}") {
            handle ${options} { 
							nodes {
									id
									title
									onlineStoreUrl
									handle
									productType 
									tags 
									createdAt
									vendor 
									featuredImage { 
										src
										id
										width
										height 
										altText 
									}
                  metafield(key: "summaryData",namespace: "okendo") { value  updatedAt}
									variants(first: 100) {
											nodes {
													metafields(identifiers: [{namespace: "custom", key: "show_in_bundle"},
													{namespace: "custom", key: "show_in_sale"},
													{namespace: "custom", key: "show_in_clearance"}]) { 
														key
														value             
													}
													availableForSale
													quantityAvailable              
													price {   
														amount
														currencyCode 
													}
													selectedOptions { 
															name
															value        
													}             
													compareAtPrice {               
															amount             
															currencyCode            
													}            
													title            
													id           
													image {  
														altText 
															height 
															width                
															id           
															src 
													}
											}          
										}    
                  }     
									pageInfo {
										endCursor
										hasNextPage        
										hasPreviousPage        
										startCursor
									}   
							}  
						}
					}`,
			variables: {}
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: graphql,
			redirect: "follow"
		};

		let data = await fetch("/api/2023-10/graphql.json", requestOptions).then(response => response.json());
		$$invalidate(2, firstFoldLoaded = true);
		$$invalidate(1, loading = false);
		$$invalidate(0, apiPaginatedData = [...data.data.collection.products.nodes]);
		console.log(apiPaginatedData, "api paginatedData");

		if (data.data.collection.products.pageInfo.hasNextPage) {
			$$invalidate(1, loading = true);
			loadProductData(data.data.collection.products.pageInfo.endCursor);
		}
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		await loadProductData();
	});

	return [apiPaginatedData, loading, firstFoldLoaded, handleTagMap];
}

class Collection_component extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_component, {}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_component);

/***/ }),

/***/ "./js/components/svelte/collection-filter-group.svelte":
/*!*************************************************************!*\
  !*** ./js/components/svelte/collection-filter-group.svelte ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _collection_filter_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-filter.svelte */ "./js/components/svelte/collection-filter.svelte");
/* js/components/svelte/collection-filter-group.svelte generated by Svelte v4.2.12 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	child_ctx[12] = list;
	child_ctx[13] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

// (53:6) {#if appliedFilterData.length > 0}
function create_if_block(ctx) {
	let p;
	let t0;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Refined By   ");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.textContent = "Clear All";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "custom-filter_caption");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, button);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*clearAllFilters*/ ctx[7]);
				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
			}

			mounted = false;
			dispose();
		}
	};
}

// (54:6) {#each appliedFilterData as selectedFilterItem}
function create_each_block_1(ctx) {
	let p;
	let span;
	let t0_value = /*selectedFilterItem*/ ctx[14].key + "";
	let t0;
	let t1;
	let strong;
	let t2_value = /*selectedFilterItem*/ ctx[14].value + "";
	let t2;
	let button;
	let t3;
	let button_data_key_value;
	let button_data_value_value;
	let mounted;
	let dispose;

	return {
		c() {
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" : ");
			strong = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("strong");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("✕");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "collection-filter-remove");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-key", button_data_key_value = /*selectedFilterItem*/ ctx[14].key);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-value", button_data_value_value = /*selectedFilterItem*/ ctx[14].value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "filter_selectedFilterItem");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, strong);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(strong, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t3);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*removeFilter*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*appliedFilterData*/ 16 && t0_value !== (t0_value = /*selectedFilterItem*/ ctx[14].key + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
			if (dirty & /*appliedFilterData*/ 16 && t2_value !== (t2_value = /*selectedFilterItem*/ ctx[14].value + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);

			if (dirty & /*appliedFilterData*/ 16 && button_data_key_value !== (button_data_key_value = /*selectedFilterItem*/ ctx[14].key)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-key", button_data_key_value);
			}

			if (dirty & /*appliedFilterData*/ 16 && button_data_value_value !== (button_data_value_value = /*selectedFilterItem*/ ctx[14].value)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-value", button_data_value_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
			}

			mounted = false;
			dispose();
		}
	};
}

// (58:6) {#each FilterDataArray as filterItem, index (filterItem.title + '-' + index)}
function create_each_block(key_1, ctx) {
	let first;
	let collectionfiltercomponent;
	let updating_filterItem;
	let updating_appliedFilterObject;
	let current;

	function collectionfiltercomponent_filterItem_binding(value) {
		/*collectionfiltercomponent_filterItem_binding*/ ctx[9](value, /*filterItem*/ ctx[11], /*each_value*/ ctx[12], /*index*/ ctx[13]);
	}

	function collectionfiltercomponent_appliedFilterObject_binding(value) {
		/*collectionfiltercomponent_appliedFilterObject_binding*/ ctx[10](value);
	}

	let collectionfiltercomponent_props = {
		name: /*filterNames*/ ctx[3][/*filterItem*/ ctx[11].title]
	};

	if (/*filterItem*/ ctx[11] !== void 0) {
		collectionfiltercomponent_props.filterItem = /*filterItem*/ ctx[11];
	}

	if (/*appliedFilterObject*/ ctx[0] !== void 0) {
		collectionfiltercomponent_props.appliedFilterObject = /*appliedFilterObject*/ ctx[0];
	}

	collectionfiltercomponent = new _collection_filter_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: collectionfiltercomponent_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(collectionfiltercomponent, 'filterItem', collectionfiltercomponent_filterItem_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(collectionfiltercomponent, 'appliedFilterObject', collectionfiltercomponent_appliedFilterObject_binding));

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(collectionfiltercomponent.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(collectionfiltercomponent, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const collectionfiltercomponent_changes = {};
			if (dirty & /*filterNames, FilterDataArray*/ 40) collectionfiltercomponent_changes.name = /*filterNames*/ ctx[3][/*filterItem*/ ctx[11].title];

			if (!updating_filterItem && dirty & /*FilterDataArray*/ 32) {
				updating_filterItem = true;
				collectionfiltercomponent_changes.filterItem = /*filterItem*/ ctx[11];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_filterItem = false);
			}

			if (!updating_appliedFilterObject && dirty & /*appliedFilterObject*/ 1) {
				updating_appliedFilterObject = true;
				collectionfiltercomponent_changes.appliedFilterObject = /*appliedFilterObject*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_appliedFilterObject = false);
			}

			collectionfiltercomponent.$set(collectionfiltercomponent_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(collectionfiltercomponent.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(collectionfiltercomponent.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(collectionfiltercomponent, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div4;
	let div3;
	let div0;
	let button0;
	let t0;
	let div2;
	let div1;
	let p;
	let t2;
	let t3;
	let t4;
	let each_blocks = [];
	let each1_lookup = new Map();
	let t5;
	let button1;
	let current;
	let mounted;
	let dispose;
	let if_block = /*appliedFilterData*/ ctx[4].length > 0 && create_if_block(ctx);
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*appliedFilterData*/ ctx[4]);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*FilterDataArray*/ ctx[5]);
	const get_key = ctx => /*filterItem*/ ctx[11].title + '-' + /*index*/ ctx[13];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button0.innerHTML = `<svg focusable="false" class="icon icon--close" viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fill="currentColor" fill-rule="evenodd"></path></svg>`;
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p.textContent = "Filters";
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "collection-drawer__close");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "data-action", "close-drawer");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "collection-filter-header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "custom-filter_heading");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "custom-filter");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "collection-filter-contents");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "collection-filter-inner");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "collection-filter-wrapper");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "data-drawer-open", /*filterDrawerOpen*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "collection-filter-drawer-overlay");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div4, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, button0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			if (if_block) if_block.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t3);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				if (each_blocks_1[i]) {
					each_blocks_1[i].m(div1, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div2, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t5, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button1, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*toggleFilterDrawer*/ ctx[2])) /*toggleFilterDrawer*/ ctx[2].apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*toggleFilterDrawer*/ ctx[2])) /*toggleFilterDrawer*/ ctx[2].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (/*appliedFilterData*/ ctx[4].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, t3);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*appliedFilterData, removeFilter*/ 80) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*appliedFilterData*/ ctx[4]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div1, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*filterNames, FilterDataArray, appliedFilterObject*/ 41) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*FilterDataArray*/ ctx[5]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each1_lookup, div2, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.outro_and_destroy_block, create_each_block, null, get_each_context);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (!current || dirty & /*filterDrawerOpen*/ 2) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "data-drawer-open", /*filterDrawerOpen*/ ctx[1]);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div4);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t5);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button1);
			}

			if (if_block) if_block.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let FilterDataArray;
	let appliedFilterData;
	let { filters } = $$props;
	let { filterDrawerOpen } = $$props;
	let { toggleFilterDrawer } = $$props;
	let { appliedFilterObject } = $$props;
	let { filterNames } = $$props;

	function removeFilter(event) {
		const category = event.target.dataset.key;
		const option = event.target.dataset.value;
		$$invalidate(0, appliedFilterObject[category] = appliedFilterObject[category].filter(filter => filter != option), appliedFilterObject);
		$$invalidate(0, appliedFilterObject);
	}

	function clearAllFilters() {
		Object.keys(appliedFilterObject).forEach(item => {
			$$invalidate(0, appliedFilterObject[item] = [], appliedFilterObject);
		});

		$$invalidate(0, appliedFilterObject);
	}

	function collectionfiltercomponent_filterItem_binding(value, filterItem, each_value, index) {
		each_value[index] = value;
		($$invalidate(5, FilterDataArray), $$invalidate(8, filters));
	}

	function collectionfiltercomponent_appliedFilterObject_binding(value) {
		appliedFilterObject = value;
		$$invalidate(0, appliedFilterObject);
	}

	$$self.$$set = $$props => {
		if ('filters' in $$props) $$invalidate(8, filters = $$props.filters);
		if ('filterDrawerOpen' in $$props) $$invalidate(1, filterDrawerOpen = $$props.filterDrawerOpen);
		if ('toggleFilterDrawer' in $$props) $$invalidate(2, toggleFilterDrawer = $$props.toggleFilterDrawer);
		if ('appliedFilterObject' in $$props) $$invalidate(0, appliedFilterObject = $$props.appliedFilterObject);
		if ('filterNames' in $$props) $$invalidate(3, filterNames = $$props.filterNames);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*filters*/ 256) {
			$: $$invalidate(5, FilterDataArray = Object.keys(filters).map(filterKey => {
				return {
					title: filterKey,
					values: filters[filterKey]
				};
			}));
		}

		if ($$self.$$.dirty & /*appliedFilterObject*/ 1) {
			$: $$invalidate(4, appliedFilterData = Object.keys(appliedFilterObject).map(item => {
				const key = item;
				if (key == "sortBy") return false;
				const dataArr = appliedFilterObject[key] || [];

				if (dataArr && dataArr.length > 0) {
					return dataArr.map(element => {
						return { key, value: element };
					});
				}
			}).filter(item => item && item).flat());
		}
	};

	return [
		appliedFilterObject,
		filterDrawerOpen,
		toggleFilterDrawer,
		filterNames,
		appliedFilterData,
		FilterDataArray,
		removeFilter,
		clearAllFilters,
		filters,
		collectionfiltercomponent_filterItem_binding,
		collectionfiltercomponent_appliedFilterObject_binding
	];
}

class Collection_filter_group extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			filters: 8,
			filterDrawerOpen: 1,
			toggleFilterDrawer: 2,
			appliedFilterObject: 0,
			filterNames: 3
		});
	}

	get filters() {
		return this.$$.ctx[8];
	}

	set filters(filters) {
		this.$$set({ filters });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get filterDrawerOpen() {
		return this.$$.ctx[1];
	}

	set filterDrawerOpen(filterDrawerOpen) {
		this.$$set({ filterDrawerOpen });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get toggleFilterDrawer() {
		return this.$$.ctx[2];
	}

	set toggleFilterDrawer(toggleFilterDrawer) {
		this.$$set({ toggleFilterDrawer });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get appliedFilterObject() {
		return this.$$.ctx[0];
	}

	set appliedFilterObject(appliedFilterObject) {
		this.$$set({ appliedFilterObject });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get filterNames() {
		return this.$$.ctx[3];
	}

	set filterNames(filterNames) {
		this.$$set({ filterNames });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_filter_group, {"filters":{},"filterDrawerOpen":{},"toggleFilterDrawer":{},"appliedFilterObject":{},"filterNames":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_filter_group);

/***/ }),

/***/ "./js/components/svelte/collection-filter.svelte":
/*!*******************************************************!*\
  !*** ./js/components/svelte/collection-filter.svelte ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_checkbox_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/checkbox.svelte */ "./js/components/svelte/checkbox.svelte");
/* js/components/svelte/collection-filter.svelte generated by Svelte v4.2.12 */






function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

// (43:0) {#if totalCount > 0}
function create_if_block(ctx) {
	let div2;
	let div0;
	let span0;
	let t0;
	let span1;
	let t1;
	let t2;
	let div1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*checkboxData*/ ctx[3]);
	const get_key = ctx => /*filterItem*/ ctx[1].title + '-' + /*index*/ ctx[11];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*name*/ ctx[0]);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "icon");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "head");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "custom-filer__header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "details");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "custom-filter");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*name*/ 1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, /*name*/ ctx[0]);

			if (dirty & /*selectedFilters, checkboxData, handleFilterClick, title*/ 120) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*checkboxData*/ ctx[3]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div1, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.outro_and_destroy_block, create_each_block, null, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

// (51:8) {#if filterItem.count > 0}
function create_if_block_1(ctx) {
	let checkbox;
	let current;

	checkbox = new SvelteComponents_checkbox_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				checked: /*selectedFilters*/ ctx[5].includes(/*filterItem*/ ctx[1].title),
				handler: /*handleFilterClick*/ ctx[6],
				$$slots: { content: [create_content_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(checkbox.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(checkbox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const checkbox_changes = {};
			if (dirty & /*selectedFilters, checkboxData*/ 40) checkbox_changes.checked = /*selectedFilters*/ ctx[5].includes(/*filterItem*/ ctx[1].title);

			if (dirty & /*$$scope, title, checkboxData*/ 4120) {
				checkbox_changes.$$scope = { dirty, ctx };
			}

			checkbox.$set(checkbox_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(checkbox.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(checkbox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(checkbox, detaching);
		}
	};
}

// (53:12) 
function create_content_slot(ctx) {
	let div2;
	let div0;
	let t0_value = (/*filterItem*/ ctx[1].title || "") + "";
	let t0;
	let t1;
	let div1;
	let t2;
	let t3_value = (/*filterItem*/ ctx[1].count || "") + "";
	let t3;
	let t4;
	let t5;
	let div2_data_filter_value_value;

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("(");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t3_value);
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(")");
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "slot", "content");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "data-filter-category", /*title*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "data-filter-value", div2_data_filter_value_value = /*filterItem*/ ctx[1].title);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t5);
		},
		p(ctx, dirty) {
			if (dirty & /*checkboxData*/ 8 && t0_value !== (t0_value = (/*filterItem*/ ctx[1].title || "") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
			if (dirty & /*checkboxData*/ 8 && t3_value !== (t3_value = (/*filterItem*/ ctx[1].count || "") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t3, t3_value);

			if (dirty & /*title*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "data-filter-category", /*title*/ ctx[4]);
			}

			if (dirty & /*checkboxData*/ 8 && div2_data_filter_value_value !== (div2_data_filter_value_value = /*filterItem*/ ctx[1].title)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "data-filter-value", div2_data_filter_value_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}
		}
	};
}

// (50:8) {#each checkboxData as filterItem, index (filterItem.title + '-' + index)}
function create_each_block(key_1, ctx) {
	let first;
	let if_block_anchor;
	let current;
	let if_block = /*filterItem*/ ctx[1].count > 0 && create_if_block_1(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (/*filterItem*/ ctx[1].count > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*checkboxData*/ 8) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*totalCount*/ ctx[2] > 0 && create_if_block(ctx);

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
			if (/*totalCount*/ ctx[2] > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*totalCount*/ 4) {
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

function instance($$self, $$props, $$invalidate) {
	let appliedFilters;
	let title;
	let values;
	let checkboxData;
	let selectedFilters;
	let totalCount;
	let { name } = $$props;
	let { filterItem } = $$props;
	let { appliedFilterObject } = $$props;
	console.log(title, appliedFilterObject[title]);

	function handleFilterClick(e) {
		const category = e.currentTarget.nextElementSibling.dataset.filterCategory;
		const value = e.currentTarget.nextElementSibling.dataset.filterValue;

		if (!appliedFilterObject[category].includes(value)) {
			appliedFilterObject[category].push(value);
		} else {
			const index = appliedFilterObject[category].indexOf(value);

			if (index > -1) {
				appliedFilterObject[category].splice(index, 1);
			}
		}

		$$invalidate(7, appliedFilterObject);
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('filterItem' in $$props) $$invalidate(1, filterItem = $$props.filterItem);
		if ('appliedFilterObject' in $$props) $$invalidate(7, appliedFilterObject = $$props.appliedFilterObject);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*appliedFilterObject*/ 128) {
			$: appliedFilters = appliedFilterObject;
		}

		if ($$self.$$.dirty & /*filterItem*/ 2) {
			$: $$invalidate(4, { title, values } = filterItem, title, ($$invalidate(8, values), $$invalidate(1, filterItem)));
		}

		if ($$self.$$.dirty & /*values*/ 256) {
			$: $$invalidate(3, checkboxData = Object.keys(values).map(filterOption => {
				return {
					title: filterOption,
					count: values[filterOption]
				};
			}));
		}

		if ($$self.$$.dirty & /*appliedFilterObject, title*/ 144) {
			$: $$invalidate(5, selectedFilters = appliedFilterObject[title]);
		}

		if ($$self.$$.dirty & /*checkboxData*/ 8) {
			$: console.log('selectedFilt', checkboxData);
		}

		if ($$self.$$.dirty & /*values*/ 256) {
			$: $$invalidate(2, totalCount = Object.keys(values).reduce(
				(acc, filterOption) => {
					if (values[filterOption]) {
						acc += values[filterOption];
					}

					return acc;
				},
				0
			));
		}

		if ($$self.$$.dirty & /*totalCount*/ 4) {
			$: console.log(totalCount);
		}
	};

	return [
		name,
		filterItem,
		totalCount,
		checkboxData,
		title,
		selectedFilters,
		handleFilterClick,
		appliedFilterObject,
		values
	];
}

class Collection_filter extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			name: 0,
			filterItem: 1,
			appliedFilterObject: 7
		});
	}

	get name() {
		return this.$$.ctx[0];
	}

	set name(name) {
		this.$$set({ name });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get filterItem() {
		return this.$$.ctx[1];
	}

	set filterItem(filterItem) {
		this.$$set({ filterItem });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get appliedFilterObject() {
		return this.$$.ctx[7];
	}

	set appliedFilterObject(appliedFilterObject) {
		this.$$set({ appliedFilterObject });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_filter, {"name":{},"filterItem":{},"appliedFilterObject":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_filter);

/***/ }),

/***/ "./js/components/svelte/collection-grid.svelte":
/*!*****************************************************!*\
  !*** ./js/components/svelte/collection-grid.svelte ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_product_card_skeleton_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/product-card-skeleton.svelte */ "./js/components/svelte/product-card-skeleton.svelte");
/* harmony import */ var SvelteComponents_collection_filter_group_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/collection-filter-group.svelte */ "./js/components/svelte/collection-filter-group.svelte");
/* harmony import */ var SvelteComponents_collection_product_grid_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! SvelteComponents/collection-product-grid.svelte */ "./js/components/svelte/collection-product-grid.svelte");
/* harmony import */ var SvelteComponents_collection_pagination_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! SvelteComponents/collection-pagination.svelte */ "./js/components/svelte/collection-pagination.svelte");
/* harmony import */ var SvelteComponents_dropdown_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! SvelteComponents/dropdown.svelte */ "./js/components/svelte/dropdown.svelte");
/* js/components/svelte/collection-grid.svelte generated by Svelte v4.2.12 */









function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[29] = list[i];
	child_ctx[31] = i;
	return child_ctx;
}

// (437:2) {:else}
function create_else_block_2(ctx) {
	let div6;
	let div0;
	let t0;
	let div5;
	let div3;
	let t2;
	let div4;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Array(20));
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3.innerHTML = `<div class="skeleton-box collection-skeleton-header"></div> <div class="skeleton-box collection-skeleton-header"></div>`;
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "layout__section layout__section--secondary skeleton-box");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "collection-product-grid-header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "product-list--collection product-list--custom");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "layout__section");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "layout container");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div6, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div4, null);
				}
			}

			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div6);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (398:2) {#if firstFoldLoaded}
function create_if_block(ctx) {
	let div3;
	let div0;
	let previous_key = /*loading*/ ctx[0];
	let t0;
	let div2;
	let div1;
	let button;
	let t2;
	let t3;
	let current_block_type_index;
	let if_block1;
	let current;
	let mounted;
	let dispose;
	let key_block = create_key_block(ctx);
	let if_block0 = /*paginatedData*/ ctx[8].length > 0 && create_if_block_2(ctx);
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_2(ctx, dirty) {
		if (/*paginatedData*/ ctx[8].length == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_2(ctx, [-1, -1]);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			key_block.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");

			button.innerHTML = `<span class="collection__filter-icon"><svg focusable="false" class="icon icon--filter" viewBox="0 0 19 20" role="presentation"><path d="M17.0288086 4.01391602L11 9v7.0072021l-4 2.008545V9L1.01306152 4.01391602V1H17.0288086z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="square"></path></svg></span>
            Filter`;

			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block0) if_block0.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "layout__section layout__section--secondary");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "collection-filter-toggle hidden-lap-and-up");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "collection-product-grid-header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "layout__section");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "layout container");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
			key_block.m(div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, button);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			if (if_block0) if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
			if_blocks[current_block_type_index].m(div2, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", /*toggleFilterDrawer*/ ctx[14]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*loading*/ 1 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal)(previous_key, previous_key = /*loading*/ ctx[0])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(key_block, 1, 1, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				key_block = create_key_block(ctx);
				key_block.c();
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(key_block, 1);
				key_block.m(div0, null);
			} else {
				key_block.p(ctx, dirty);
			}

			if (/*paginatedData*/ ctx[8].length > 0) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*paginatedData*/ 256) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					if_block0.m(div1, null);
				}
			} else if (if_block0) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_2(ctx, dirty);

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
				if_block1.m(div2, null);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(key_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(key_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
			}

			key_block.d(detaching);
			if (if_block0) if_block0.d();
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};
}

// (446:8) {#each Array(20) as _, i}
function create_each_block(ctx) {
	let productcardskeleton;
	let current;
	productcardskeleton = new SvelteComponents_product_card_skeleton_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(productcardskeleton.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(productcardskeleton, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(productcardskeleton.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(productcardskeleton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(productcardskeleton, detaching);
		}
	};
}

// (401:8) {#key loading}
function create_key_block(ctx) {
	let colletionfiltergroup;
	let updating_appliedFilterObject;
	let current;

	function colletionfiltergroup_appliedFilterObject_binding(value) {
		/*colletionfiltergroup_appliedFilterObject_binding*/ ctx[17](value);
	}

	let colletionfiltergroup_props = {
		filters: /*filters*/ ctx[6],
		loading: /*loading*/ ctx[0],
		filterDrawerOpen: /*filterDrawerOpen*/ ctx[4],
		toggleFilterDrawer: /*toggleFilterDrawer*/ ctx[14],
		filterNames: /*filterNames*/ ctx[10]
	};

	if (/*appliedFilterObject*/ ctx[5] !== void 0) {
		colletionfiltergroup_props.appliedFilterObject = /*appliedFilterObject*/ ctx[5];
	}

	colletionfiltergroup = new SvelteComponents_collection_filter_group_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: colletionfiltergroup_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(colletionfiltergroup, 'appliedFilterObject', colletionfiltergroup_appliedFilterObject_binding));

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(colletionfiltergroup.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(colletionfiltergroup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const colletionfiltergroup_changes = {};
			if (dirty[0] & /*filters*/ 64) colletionfiltergroup_changes.filters = /*filters*/ ctx[6];
			if (dirty[0] & /*loading*/ 1) colletionfiltergroup_changes.loading = /*loading*/ ctx[0];
			if (dirty[0] & /*filterDrawerOpen*/ 16) colletionfiltergroup_changes.filterDrawerOpen = /*filterDrawerOpen*/ ctx[4];

			if (!updating_appliedFilterObject && dirty[0] & /*appliedFilterObject*/ 32) {
				updating_appliedFilterObject = true;
				colletionfiltergroup_changes.appliedFilterObject = /*appliedFilterObject*/ ctx[5];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_appliedFilterObject = false);
			}

			colletionfiltergroup.$set(colletionfiltergroup_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(colletionfiltergroup.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(colletionfiltergroup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(colletionfiltergroup, detaching);
		}
	};
}

// (415:10) {#if paginatedData.length > 0}
function create_if_block_2(ctx) {
	let span;
	let t0;
	let t1_value = (/*currentPage*/ ctx[3] - 1) * productsPerPage + 1 + "";
	let t1;
	let t2;

	let t3_value = (/*currentPage*/ ctx[3] == /*totalPages*/ ctx[9]
	? /*filteredVariants*/ ctx[2].length
	: /*currentPage*/ ctx[3] * productsPerPage) + "";

	let t3;
	let t4;
	let t5;
	let t6;
	let div;
	let dropdown;
	let current;

	function select_block_type_1(ctx, dirty) {
		if (!/*loading*/ ctx[0]) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	dropdown = new SvelteComponents_dropdown_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				dropdownData: /*sortDropdownData*/ ctx[13]
			}
		});

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Showing ");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" - ");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t3_value);
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" of ");
			if_block.c();
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" products");
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(dropdown.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "collection-filter-products-count");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "collection__sort");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t4);
			if_block.m(span, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t6, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(dropdown, div, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*currentPage*/ 8) && t1_value !== (t1_value = (/*currentPage*/ ctx[3] - 1) * productsPerPage + 1 + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);

			if ((!current || dirty[0] & /*currentPage, totalPages, filteredVariants*/ 524) && t3_value !== (t3_value = (/*currentPage*/ ctx[3] == /*totalPages*/ ctx[9]
			? /*filteredVariants*/ ctx[2].length
			: /*currentPage*/ ctx[3] * productsPerPage) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t3, t3_value);

			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(span, t5);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(dropdown.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(dropdown.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t6);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if_block.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(dropdown);
		}
	};
}

// (420:79) {:else}
function create_else_block_1(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "skeleton-loader");
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

// (420:50) {#if !loading}
function create_if_block_3(ctx) {
	let t;

	return {
		c() {
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*totalProducts*/ ctx[7]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*totalProducts*/ 128) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*totalProducts*/ ctx[7]);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			}
		}
	};
}

// (431:8) {:else}
function create_else_block(ctx) {
	let collectionproductgrid;
	let t;
	let collectionpagination;
	let updating_currentPage;
	let current;

	collectionproductgrid = new SvelteComponents_collection_product_grid_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: { products: /*paginatedData*/ ctx[8] }
		});

	function collectionpagination_currentPage_binding(value) {
		/*collectionpagination_currentPage_binding*/ ctx[18](value);
	}

	let collectionpagination_props = {
		totalPages: /*totalPages*/ ctx[9],
		next: /*next*/ ctx[11],
		previous: /*previous*/ ctx[12],
		scrollToTop
	};

	if (/*currentPage*/ ctx[3] !== void 0) {
		collectionpagination_props.currentPage = /*currentPage*/ ctx[3];
	}

	collectionpagination = new SvelteComponents_collection_pagination_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({ props: collectionpagination_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(collectionpagination, 'currentPage', collectionpagination_currentPage_binding));

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(collectionproductgrid.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(collectionpagination.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(collectionproductgrid, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(collectionpagination, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const collectionproductgrid_changes = {};
			if (dirty[0] & /*paginatedData*/ 256) collectionproductgrid_changes.products = /*paginatedData*/ ctx[8];
			collectionproductgrid.$set(collectionproductgrid_changes);
			const collectionpagination_changes = {};
			if (dirty[0] & /*totalPages*/ 512) collectionpagination_changes.totalPages = /*totalPages*/ ctx[9];

			if (!updating_currentPage && dirty[0] & /*currentPage*/ 8) {
				updating_currentPage = true;
				collectionpagination_changes.currentPage = /*currentPage*/ ctx[3];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_currentPage = false);
			}

			collectionpagination.$set(collectionpagination_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(collectionproductgrid.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(collectionpagination.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(collectionproductgrid.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(collectionpagination.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(collectionproductgrid, detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(collectionpagination, detaching);
		}
	};
}

// (429:8) {#if paginatedData.length == 0}
function create_if_block_1(ctx) {
	let h1;

	return {
		c() {
			h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
			h1.textContent = "Search results not found";
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, h1, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(h1);
			}
		}
	};
}

function create_fragment(ctx) {
	let div;
	let style;
	let t1;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block, create_else_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*firstFoldLoaded*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, [-1, -1]);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			style = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("style");
			style.textContent = "/* remove once actual css is done */\n    .custom-filter label {\n      display: flex;\n      gap: 0.5rem;\n    }\n    .custom-filter div[slot=\"content\"] {\n      display: flex;\n      justify-content: space-between;\n      width: 100%;\n    }";
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block.c();
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, style);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p(ctx, dirty) {
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
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(div, null);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if_blocks[current_block_type_index].d();
		}
	};
}

const productsPerPage = 24;

function scrollToTop() {
	const productGrid = "collection-component";
	const header = '[data-section-type="header"]';
	const productGridElement = document.querySelector(productGrid);
	const headerHeight = document.querySelector(header);
	const y = productGridElement.getBoundingClientRect().y - headerHeight.getBoundingClientRect().height + window.pageYOffset;
	window.scrollTo({ top: y, behavior: 'smooth' });
}

function instance($$self, $$props, $$invalidate) {
	let selectedSort;
	let totalProducts;
	let { apiPaginatedData = [] } = $$props;
	let { handleTagMap = {} } = $$props;
	let { loading = false } = $$props;
	let { firstFoldLoaded = false } = $$props;
	let variantData = [];
	let filteredVariants = [];
	let paginatedData = [];
	let totalPages = 0;
	let currentPage = 1;
	let filterDrawerOpen = false;

	const setFilters = () => {
		apiPaginatedData.forEach(product => {
			product.variants.nodes.forEach(variant => {
				const collectionHandle = window.shopifyVariables.collectionHandle || '';
				const { quantityAvailable } = variant;
				let shouldShowVariant = true;

				if (handleTagMap[collectionHandle]) {
					const mappedVariant = variant.metafields.filter(item => item).find(({ key = false }) => key == handleTagMap[collectionHandle]);
					shouldShowVariant = mappedVariant?.value || false;
				}

				let image = (variant.image?.src)
				? variant.image
				: product.featuredImage;

				let variantObj = {
					createdAt: product.createdAt,
					image: {
						width: image?.width,
						height: image?.height,
						alt: image?.altText,
						src: image?.src,
						id: image?.id.split("gid://shopify/ProductImage/")[1]
					},
					variants: [
						{
							compare_at_price: variant.compareAtPrice
							? variant.compareAtPrice.amount * 100
							: "",
							price: variant.price.amount * 100,
							id: variant.id.split("gid://shopify/ProductVariant/")[1]
						}
					],
					vendor: product.vendor,
					title: product.title + " - " + variant.title.replaceAll("/", "-"),
					tags: product.tags,
					metafields: product.metafield
					? [
							{
								namespace: "okendo",
								type: "json_string",
								value: product.metafield?.value,
								key: "summaryData"
							}
						]
					: [],
					link: product.onlineStoreUrl,
					handle: product.handle,
					skipFormatMoney: true,
					availableForSale: variant.availableForSale,
					quantityAvailable,
					shouldShowVariant
				};

				const brand = product.vendor?.toLowerCase();

				//populate filter
				if (filtersTemp["brand"].has(brand)) {
					$$invalidate(6, filters["brand"][brand] = filters["brand"][brand] + 1, filters);
				} else {
					filtersTemp["brand"].add(brand);
					$$invalidate(6, filters["brand"][brand] = 1, filters);
				}

				variantObj.brand = brand;
				const productType = product.productType.toLowerCase();

				if (filtersTemp["productType"].has(productType)) {
					$$invalidate(6, filters["productType"][productType] = filters["productType"][productType] + 1, filters);
				} else {
					filtersTemp["productType"].add(productType);
					$$invalidate(6, filters["productType"][productType] = 1, filters);
				}

				variantObj.productType = productType;

				product.tags.forEach(tag => {
					let diet = null;

					if (tag.toLowerCase().includes("diet_")) {
						diet = tag.toLowerCase().split("diet_")[1];

						if (filtersTemp["diet"].has(diet)) {
							$$invalidate(6, filters["diet"][diet] = filters["diet"][diet] + 1, filters);
						} else {
							filtersTemp["diet"].add(diet);
							$$invalidate(6, filters["diet"][diet] = 1, filters);
						}

						variantObj.diet = diet;
					}
				});

				variant.selectedOptions.forEach(option => {
					let flavor = null;

					if (option.name.toLowerCase() == "flavor" || option.name.toLowerCase() == "flavour") {
						flavor = option.value.toLowerCase();

						if (filtersTemp["flavor"].has(flavor)) {
							$$invalidate(6, filters["flavor"][flavor] = filters["flavor"][flavor] + 1, filters);
						} else {
							filtersTemp["flavor"].add(flavor);
							$$invalidate(6, filters["flavor"][flavor] = 1, filters);
						}

						variantObj.flavor = flavor;
					}
				});

				//check and add it to the variants list that renders the variant
				JSON.parse(shouldShowVariant) && quantityAvailable > 1 && variantData.push(variantObj);
			});
		});

		variantData = variantData;
	};

	let appliedFilterObject = {
		brand: [],
		productType: [],
		diet: [],
		flavor: [],
		sortBy: "featured"
	};

	let sortNames = {
		"featured": "Featured",
		"top-rated": "Top rated",
		"title-ascending": "Title ascending",
		"title-descending": "Title descending",
		"price-ascending": "Price ascending",
		"price-descending": "Price descending",
		"created-ascending": "Created ascending",
		"created-descending": "Created descending"
	};

	let filterNames = {
		brand: "Brand",
		productType: "Product type",
		diet: "Diet",
		flavor: "Flavor"
	};

	let filtersTemp = {
		brand: new Set(),
		productType: new Set(),
		diet: new Set(),
		flavor: new Set()
	};

	let filters = {
		brand: {},
		productType: {},
		diet: {},
		flavor: {}
	};

	//handling pagination
	function next() {
		currentPage < totalPages
		? $$invalidate(3, currentPage++, currentPage)
		: totalPages;

		scrollToTop();
	}

	function previous() {
		currentPage > 1
		? $$invalidate(3, currentPage--, currentPage)
		: 1;

		scrollToTop();
	}

	function handlePagination(array) {
		return array.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
	}

	//handle sort
	function handleSortClick(selectedValue) {
		scrollToTop();
		$$invalidate(5, appliedFilterObject.sortBy = selectedValue, appliedFilterObject);
		$$invalidate(5, appliedFilterObject);
	}

	//handle filter
	function handleFilterChange() {
		let hasFilter = false;
		let filterProducts = JSON.parse(JSON.stringify(variantData));

		Object.keys(appliedFilterObject).forEach(filter => {
			if (filter != "sortBy" && appliedFilterObject[filter].length) hasFilter = true;
		});

		if (hasFilter) {
			filterProducts = filterProducts.filter(product => {
				let qualified = true;

				Object.keys(appliedFilterObject).forEach(filter => {
					if (filter != "sortBy" && appliedFilterObject[filter].length > 0) {
						qualified = qualified && appliedFilterObject[filter].includes(product[filter]);
					}
				});

				return qualified;
			});
		}

		switch (appliedFilterObject["sortBy"]) {
			case "top-rated":
				filterProducts.sort((a, b) => {
					if (!a.metafields[0]) {
						return 1;
					} else if (!b.metafields[0]) {
						return -1;
					} else {
						const aValue = JSON.parse(a.metafields[0]?.value)?.reviewAverageValue;
						const bValue = JSON.parse(b.metafields[0]?.value)?.reviewAverageValue;
						return bValue - aValue;
					}
				});
				break;
			case "title-ascending":
				filterProducts.sort((a, b) => {
					return a.handle < b.handle ? -1 : a.handle > b.handle ? 1 : 0;
				});
				break;
			case "title-descending":
				filterProducts.sort((a, b) => {
					return a.handle < b.handle ? 1 : a.handle > b.handle ? -1 : 0;
				});
				break;
			case "price-ascending":
				filterProducts.sort((a, b) => {
					return a.variants[0].price < b.variants[0].price
					? -1
					: a.variants[0].price > b.variants[0].price ? 1 : 0;
				});
				break;
			case "price-descending":
				filterProducts.sort((a, b) => {
					return a.variants[0].price > b.variants[0].price
					? -1
					: a.variants[0].price < b.variants[0].price ? 1 : 0;
				});
				break;
			case "created-ascending":
				filterProducts.sort((a, b) => {
					return new Date(a.createdAt) < new Date(b.createdAt)
					? -1
					: new Date(a.createdAt) > new Date(b.createdAt) ? 1 : 0;
				});
				break;
			case "created-descending":
				filterProducts.sort((a, b) => {
					return new Date(a.createdAt) > new Date(b.createdAt)
					? -1
					: new Date(a.createdAt) < new Date(b.createdAt) ? 1 : 0;
				});
				break;
		}

		$$invalidate(2, filteredVariants = [...filterProducts]);

		if (!loading) {
			const urlParams = new URLSearchParams(window.location.search);

			Object.keys(appliedFilterObject).forEach(filter => {
				urlParams.has(filter)
				? urlParams.set(filter, appliedFilterObject[filter])
				: urlParams.append(filter, appliedFilterObject[filter]);
			});

			history.replaceState(null, null, "?" + urlParams.toString());
		}

		$$invalidate(3, currentPage = 1);
	}

	//update filter and sort on page load
	function updateFilterParams() {
		const params = JSON.parse('{"' + decodeURI(new URLSearchParams(window.location.search)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

		Object.keys(appliedFilterObject).forEach(filter => {
			if (filter != "sortBy") {
				$$invalidate(
					5,
					appliedFilterObject[filter] = params[filter]
					? decodeURIComponent(params[filter]).replaceAll("+", " ").split(",")
					: [],
					appliedFilterObject
				);
			} else {
				$$invalidate(5, appliedFilterObject[filter] = params[filter] || "featured", appliedFilterObject);
			}
		});

		handleFilterChange();
	}

	//update product count of filters when a filter is applied
	function updateFilterCount() {
		let availableFilters = {};
		let filtersTemp2 = {};

		Object.keys(filters).forEach(filter => {
			if (appliedFilterObject[filter].length == 0) {
				availableFilters[filter] = {};
				filtersTemp2[filter] = new Set();
			}
		});

		Object.keys(availableFilters).forEach(filter => {
			//calculate the count of products for the applied filters Vs the available filters
			filteredVariants.forEach(product => {
				if (filtersTemp2[filter].has(product[filter])) {
					availableFilters[filter][product[filter]] = availableFilters[filter][product[filter]] + 1;
				} else if (product[filter]) {
					filtersTemp2[filter].add(product[filter]);
					availableFilters[filter][product[filter]] = 1;
				}
			});

			//update the count of products for the applied filters Vs the available filters to the rendered filter object
			Object.keys(filters[filter]).forEach(realfilter => {
				if (availableFilters[filter][realfilter]) {
					$$invalidate(6, filters[filter][realfilter] = availableFilters[filter][realfilter], filters);
				} else {
					$$invalidate(6, filters[filter][realfilter] = 0, filters);
				}
			});
		});
	} // console.log('remaining filters and count' , availableFilters, 'updated filters and count', filters);

	const sortDropdownData = {
		options: sortNames,
		title: "Sort by:",
		wrapperClass: "collection-dropdown",
		changeCallBack: handleSortClick,
		openIcon: `<svg xmlns="http://www.w3.org/2000/svg"  width="10" height="6" viewBox="0 0 10 6" fill="none"> <path d="M7.69922 1.33032L4.69922 4.33032L1.69922 1.33032" stroke="black" stroke-width="1.875" stroke-linecap="square"/> </svg>`,
		closeIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"> <path d="M7.69922 1.33032L4.69922 4.33032L1.69922 1.33032" stroke="black" stroke-width="1.875" stroke-linecap="square"/> </svg>`
	};

	function toggleFilterDrawer() {
		$$invalidate(4, filterDrawerOpen = !filterDrawerOpen);
	}

	function colletionfiltergroup_appliedFilterObject_binding(value) {
		appliedFilterObject = value;
		$$invalidate(5, appliedFilterObject);
	}

	function collectionpagination_currentPage_binding(value) {
		currentPage = value;
		$$invalidate(3, currentPage);
	}

	$$self.$$set = $$props => {
		if ('apiPaginatedData' in $$props) $$invalidate(15, apiPaginatedData = $$props.apiPaginatedData);
		if ('handleTagMap' in $$props) $$invalidate(16, handleTagMap = $$props.handleTagMap);
		if ('loading' in $$props) $$invalidate(0, loading = $$props.loading);
		if ('firstFoldLoaded' in $$props) $$invalidate(1, firstFoldLoaded = $$props.firstFoldLoaded);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*apiPaginatedData*/ 32768) {
			$: (apiPaginatedData, setFilters());
		}

		if ($$self.$$.dirty[0] & /*appliedFilterObject*/ 32) {
			$: selectedSort = appliedFilterObject["sortBy"];
		}

		if ($$self.$$.dirty[0] & /*appliedFilterObject*/ 32) {
			$: appliedFilterObject && handleFilterChange();
		}

		if ($$self.$$.dirty[0] & /*filteredVariants*/ 4) {
			// $: !loading && updateFilterParams();
			$: $$invalidate(7, totalProducts = filteredVariants.length);
		}

		if ($$self.$$.dirty[0] & /*filteredVariants*/ 4) {
			$: filteredVariants && updateFilterCount();
		}

		if ($$self.$$.dirty[0] & /*firstFoldLoaded, currentPage, filteredVariants*/ 14) {
			$: $$invalidate(8, paginatedData = firstFoldLoaded || currentPage
			? handlePagination(filteredVariants)
			: null);
		}

		if ($$self.$$.dirty[0] & /*totalProducts*/ 128) {
			$: $$invalidate(9, totalPages = Math.ceil(totalProducts / productsPerPage));
		}

		if ($$self.$$.dirty[0] & /*filters*/ 64) {
			$: console.log(filters);
		}

		if ($$self.$$.dirty[0] & /*filterDrawerOpen*/ 16) {
			$: if (!filterDrawerOpen) {
				document.body.style.overflow = "unset";
				document.body.style.height = "unset";
			} else {
				document.body.style.overflow = "hidden";
				document.body.style.height = "100vh";
			}
		}
	};

	return [
		loading,
		firstFoldLoaded,
		filteredVariants,
		currentPage,
		filterDrawerOpen,
		appliedFilterObject,
		filters,
		totalProducts,
		paginatedData,
		totalPages,
		filterNames,
		next,
		previous,
		sortDropdownData,
		toggleFilterDrawer,
		apiPaginatedData,
		handleTagMap,
		colletionfiltergroup_appliedFilterObject_binding,
		collectionpagination_currentPage_binding
	];
}

class Collection_grid extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				apiPaginatedData: 15,
				handleTagMap: 16,
				loading: 0,
				firstFoldLoaded: 1
			},
			null,
			[-1, -1]
		);
	}

	get apiPaginatedData() {
		return this.$$.ctx[15];
	}

	set apiPaginatedData(apiPaginatedData) {
		this.$$set({ apiPaginatedData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get handleTagMap() {
		return this.$$.ctx[16];
	}

	set handleTagMap(handleTagMap) {
		this.$$set({ handleTagMap });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get loading() {
		return this.$$.ctx[0];
	}

	set loading(loading) {
		this.$$set({ loading });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get firstFoldLoaded() {
		return this.$$.ctx[1];
	}

	set firstFoldLoaded(firstFoldLoaded) {
		this.$$set({ firstFoldLoaded });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_grid, {"apiPaginatedData":{},"handleTagMap":{},"loading":{"type":"Boolean"},"firstFoldLoaded":{"type":"Boolean"}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_grid);

/***/ }),

/***/ "./js/components/svelte/collection-pagination.svelte":
/*!***********************************************************!*\
  !*** ./js/components/svelte/collection-pagination.svelte ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/collection-pagination.svelte generated by Svelte v4.2.12 */




function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (23:2) {:else}
function create_else_block_2(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (20:2) {#if currentPage != 1}
function create_if_block_4(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.innerHTML = `<span>&lt; <span class="collection_pagination__button collection_pagination__button">Previous</span></span>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "collection_pagination__prevBtn");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*previous*/ ctx[3])) /*previous*/ ctx[3].apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}

			mounted = false;
			dispose();
		}
	};
}

// (28:6) {#if page >= 1 && page <= totalPages }
function create_if_block_2(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*currentPage*/ ctx[0] == /*page*/ ctx[8]) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if_block.d(detaching);
		}
	};
}

// (31:8) {:else}
function create_else_block_1(ctx) {
	let div;
	let span;
	let t_value = /*page*/ ctx[8] + "";
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "data-paginate", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "collection_pagination_count__current");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*updatePagination*/ ctx[5](/*page*/ ctx[8]))) /*updatePagination*/ ctx[5](/*page*/ ctx[8]).apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*pagesArrays*/ 16 && t_value !== (t_value = /*page*/ ctx[8] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
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

// (29:8) {#if currentPage == page}
function create_if_block_3(ctx) {
	let div;
	let span;
	let t_value = /*page*/ ctx[8] + "";
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "data-paginate", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "collection_pagination_count__current active-pagination");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*updatePagination*/ ctx[5](/*page*/ ctx[8]))) /*updatePagination*/ ctx[5](/*page*/ ctx[8]).apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*pagesArrays*/ 16 && t_value !== (t_value = /*page*/ ctx[8] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
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

// (27:4) {#each pagesArrays as page}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*page*/ ctx[8] >= 1 && /*page*/ ctx[8] <= /*totalPages*/ ctx[1] && create_if_block_2(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*page*/ ctx[8] >= 1 && /*page*/ ctx[8] <= /*totalPages*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

// (36:4) {#if pagesArrays[4] < totalPages}
function create_if_block_1(ctx) {
	let div0;
	let t1;
	let div1;
	let span1;
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0.innerHTML = `<span>...</span>`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*totalPages*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "collection_pagination_count_dots");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "data-paginate", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "collection_pagination_count__total");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t2);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div1, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*updatePagination*/ ctx[5](/*totalPages*/ ctx[1]))) /*updatePagination*/ ctx[5](/*totalPages*/ ctx[1]).apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*totalPages*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, /*totalPages*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (44:2) {:else}
function create_else_block(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (41:2) {#if currentPage != totalPages}
function create_if_block(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.innerHTML = `<span><span class="collection_pagination__button collection_pagination__button">Next</span> &gt;</span>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "collection_pagination__nxtBtn");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*next*/ ctx[2])) /*next*/ ctx[2].apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let t0;
	let div0;
	let t1;
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*currentPage*/ ctx[0] != 1) return create_if_block_4;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*pagesArrays*/ ctx[4]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block1 = /*pagesArrays*/ ctx[4][4] < /*totalPages*/ ctx[1] && create_if_block_1(ctx);

	function select_block_type_2(ctx, dirty) {
		if (/*currentPage*/ ctx[0] != /*totalPages*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block2 = current_block_type_1(ctx);

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block0.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block2.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "collection_pagination_count");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "collection_pagination container");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
			if (if_block1) if_block1.m(div0, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			if_block2.m(div1, null);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div1, t0);
				}
			}

			if (dirty & /*updatePagination, pagesArrays, currentPage, totalPages*/ 51) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*pagesArrays*/ ctx[4]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, t1);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (/*pagesArrays*/ ctx[4][4] < /*totalPages*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div0, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx, dirty)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type_1(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(div1, null);
				}
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}

			if_block0.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			if (if_block1) if_block1.d();
			if_block2.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let pagesArrays;
	let { totalPages } = $$props;
	let { currentPage } = $$props;
	let { next } = $$props;
	let { previous } = $$props;
	let { scrollToTop } = $$props;

	function updatePagination(pageNumber) {
		$$invalidate(0, currentPage = pageNumber);
		scrollToTop();
	}

	function updatePageNumbers() {
		return [
			currentPage + 2,
			currentPage + 1,
			currentPage,
			currentPage - 1,
			currentPage - 2
		].reverse();
	}

	$$self.$$set = $$props => {
		if ('totalPages' in $$props) $$invalidate(1, totalPages = $$props.totalPages);
		if ('currentPage' in $$props) $$invalidate(0, currentPage = $$props.currentPage);
		if ('next' in $$props) $$invalidate(2, next = $$props.next);
		if ('previous' in $$props) $$invalidate(3, previous = $$props.previous);
		if ('scrollToTop' in $$props) $$invalidate(6, scrollToTop = $$props.scrollToTop);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*currentPage*/ 1) {
			$: $$invalidate(4, pagesArrays = currentPage && updatePageNumbers());
		}
	};

	return [
		currentPage,
		totalPages,
		next,
		previous,
		pagesArrays,
		updatePagination,
		scrollToTop
	];
}

class Collection_pagination extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			totalPages: 1,
			currentPage: 0,
			next: 2,
			previous: 3,
			scrollToTop: 6
		});
	}

	get totalPages() {
		return this.$$.ctx[1];
	}

	set totalPages(totalPages) {
		this.$$set({ totalPages });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get currentPage() {
		return this.$$.ctx[0];
	}

	set currentPage(currentPage) {
		this.$$set({ currentPage });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get next() {
		return this.$$.ctx[2];
	}

	set next(next) {
		this.$$set({ next });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get previous() {
		return this.$$.ctx[3];
	}

	set previous(previous) {
		this.$$set({ previous });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get scrollToTop() {
		return this.$$.ctx[6];
	}

	set scrollToTop(scrollToTop) {
		this.$$set({ scrollToTop });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_pagination, {"totalPages":{},"currentPage":{},"next":{},"previous":{},"scrollToTop":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_pagination);

/***/ }),

/***/ "./js/components/svelte/collection-product-grid.svelte":
/*!*************************************************************!*\
  !*** ./js/components/svelte/collection-product-grid.svelte ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/product-card.svelte */ "./js/components/svelte/product-card.svelte");
/* js/components/svelte/collection-product-grid.svelte generated by Svelte v4.2.12 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (10:2) {#each paginatedData as product, index (product.handle + '-' + index )}
function create_each_block(key_1, ctx) {
	let first;
	let productcard;
	let current;
	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: { product: /*product*/ ctx[2] } });

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(productcard.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(productcard, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const productcard_changes = {};
			if (dirty & /*paginatedData*/ 1) productcard_changes.product = /*product*/ ctx[2];
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(productcard, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*paginatedData*/ ctx[0]);
	const get_key = ctx => /*product*/ ctx[2].handle + '-' + /*index*/ ctx[4];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-list--collection product-list--custom");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*paginatedData*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*paginatedData*/ ctx[0]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.outro_and_destroy_block, create_each_block, null, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let paginatedData;
	let { products } = $$props;

	$$self.$$set = $$props => {
		if ('products' in $$props) $$invalidate(1, products = $$props.products);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*products*/ 2) {
			$: $$invalidate(0, paginatedData = [...products]);
		}

		if ($$self.$$.dirty & /*paginatedData*/ 1) {
			$: console.log('products', paginatedData);
		}
	};

	return [paginatedData, products];
}

class Collection_product_grid extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { products: 1 });
	}

	get products() {
		return this.$$.ctx[1];
	}

	set products(products) {
		this.$$set({ products });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Collection_product_grid, {"products":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection_product_grid);

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
/* js/components/svelte/customer-reviews.svelte generated by Svelte v4.2.12 */







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

/***/ "./js/components/svelte/dropdown.svelte":
/*!**********************************************!*\
  !*** ./js/components/svelte/dropdown.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/dropdown.svelte generated by Svelte v4.2.12 */




function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1s1bxhm", ".dropdown.svelte-1s1bxhm{cursor:pointer}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (31:67) {:else }
function create_else_block_1(ctx) {
	let html_tag;
	let html_anchor;

	return {
		c() {
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(/*closeIcon*/ ctx[5], target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
				html_tag.d();
			}
		}
	};
}

// (31:38) {#if isOpen}
function create_if_block_1(ctx) {
	let html_tag;
	let html_anchor;

	return {
		c() {
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(/*openIcon*/ ctx[4], target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
				html_tag.d();
			}
		}
	};
}

// (48:16) {:else}
function create_else_block(ctx) {
	let div;
	let t_value = /*options*/ ctx[3][/*key*/ ctx[11]] + "";
	let t;
	let div_class_value;
	let div_data_value_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__item ${/*wrapperClass*/ ctx[2]}__item is-selected`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "data-value", div_data_value_value = /*key*/ ctx[11]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click", /*handleDropdownChange*/ ctx[8]);
				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			mounted = false;
			dispose();
		}
	};
}

// (46:16) {#if key != selectedValue}
function create_if_block(ctx) {
	let div;
	let t_value = /*options*/ ctx[3][/*key*/ ctx[11]] + "";
	let t;
	let div_class_value;
	let div_data_value_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__item ${/*wrapperClass*/ ctx[2]}__item`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "data-value", div_data_value_value = /*key*/ ctx[11]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click", /*handleDropdownChange*/ ctx[8]);
				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			mounted = false;
			dispose();
		}
	};
}

// (43:12) {#each Object.keys(options) as key}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*key*/ ctx[11] != /*selectedValue*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if_block.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div7;
	let div3;
	let div0;
	let t1;
	let div1;
	let t2_value = /*options*/ ctx[3][/*selectedValue*/ ctx[0]] + "";
	let t2;
	let t3;
	let div2;
	let t4;
	let div6;
	let div5;
	let div4;
	let p;
	let t6;
	let button0;
	let svg;
	let path;
	let button0_class_value;
	let div4_class_value;
	let t7;
	let div5_class_value;
	let div6_class_value;
	let div6_aria_hidden_value;
	let t8;
	let button1;
	let button1_class_value;
	let div7_class_value;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*isOpen*/ ctx[1]) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*options*/ ctx[3]));
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0.textContent = `${/*title*/ ctx[6]}`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block.c();
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p.textContent = "Sort By";
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "dropdown__title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "dropdown__selected-value");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "dropdown__icon");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "dropdown__selected");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "custom-filter_heading");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill", "currentColor");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill-rule", "evenodd");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "focusable", "false");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "icon icon--close");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", "0 0 19 19");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "role", "presentation");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", button0_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__${/*wrapperClass*/ ctx[2]}-close`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", div4_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__header ${/*wrapperClass*/ ctx[2]}__header`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", div5_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__items ${/*wrapperClass*/ ctx[2]}__items`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", div6_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__container ${/*wrapperClass*/ ctx[2]}__container`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "aria-hidden", div6_aria_hidden_value = !/*isOpen*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", button1_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown__${/*wrapperClass*/ ctx[2]}-overlay`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", div7_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`dropdown dropdown__${/*wrapperClass*/ ctx[2]}`) + " svelte-1s1bxhm"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "data-dropdown-container", "");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div7, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			if_block.m(div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, button0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button0, svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t7);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div5, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, button1);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div3, "click", /*toggleDropdown*/ ctx[7]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click", /*toggleDropdown*/ ctx[7]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click", /*toggleDropdown*/ ctx[7])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*selectedValue*/ 1 && t2_value !== (t2_value = /*options*/ ctx[3][/*selectedValue*/ ctx[0]] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div2, null);
				}
			}

			if (dirty & /*wrapperClass, Object, options, handleDropdownChange, selectedValue*/ 269) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*options*/ ctx[3]));
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div5, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*isOpen*/ 2 && div6_aria_hidden_value !== (div6_aria_hidden_value = !/*isOpen*/ ctx[1])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "aria-hidden", div6_aria_hidden_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div7);
			}

			if_block.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { dropdownData } = $$props;
	const { wrapperClass = "", options = {}, openIcon = '', closeIcon = '', title = "", changeCallBack } = dropdownData || {};
	let selectedValue = Object.keys(options)[0];
	let isOpen = false;
	const toggleDropdown = () => $$invalidate(1, isOpen = !isOpen);

	const handleDropdownChange = ev => {
		$$invalidate(0, selectedValue = ev.target.closest('[data-value]').dataset.value);
		changeCallBack(selectedValue); //update the selected sort
		toggleDropdown();
	};

	document.addEventListener('click', ev => {
		const isDropdownTarget = ev.target.closest('[data-dropdown-container]');
		if (isDropdownTarget) return;

		if (isOpen) {
			toggleDropdown();
		}
	});

	$$self.$$set = $$props => {
		if ('dropdownData' in $$props) $$invalidate(9, dropdownData = $$props.dropdownData);
	};

	return [
		selectedValue,
		isOpen,
		wrapperClass,
		options,
		openIcon,
		closeIcon,
		title,
		toggleDropdown,
		handleDropdownChange,
		dropdownData
	];
}

class Dropdown extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { dropdownData: 9 }, add_css);
	}

	get dropdownData() {
		return this.$$.ctx[9];
	}

	set dropdownData(dropdownData) {
		this.$$set({ dropdownData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Dropdown, {"dropdownData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./js/components/svelte/predictive-search/categories.svelte":
/*!******************************************************************!*\
  !*** ./js/components/svelte/predictive-search/categories.svelte ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _category_block_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-block.svelte */ "./js/components/svelte/predictive-search/category-block.svelte");
/* js/components/svelte/predictive-search/categories.svelte generated by Svelte v4.2.12 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (8:8) {#each Object.keys(categories) as category}
function create_each_block(ctx) {
	let categoryblock;
	let current;

	categoryblock = new _category_block_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				category: {
					title: /*category*/ ctx[1],
					content: /*categories*/ ctx[0][/*category*/ ctx[1]]
				}
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(categoryblock.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(categoryblock, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const categoryblock_changes = {};

			if (dirty & /*categories*/ 1) categoryblock_changes.category = {
				title: /*category*/ ctx[1],
				content: /*categories*/ ctx[0][/*category*/ ctx[1]]
			};

			categoryblock.$set(categoryblock_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(categoryblock.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(categoryblock.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(categoryblock, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*categories*/ ctx[0]));
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "predictive-search__categories-inner");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "predictive-search__categories");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*Object, categories*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*categories*/ ctx[0]));
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
						each_blocks[i].m(div0, null);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { categories } = $$props;

	$$self.$$set = $$props => {
		if ('categories' in $$props) $$invalidate(0, categories = $$props.categories);
	};

	return [categories];
}

class Categories extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { categories: 0 });
	}

	get categories() {
		return this.$$.ctx[0];
	}

	set categories(categories) {
		this.$$set({ categories });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Categories, {"categories":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./js/components/svelte/predictive-search/category-block.svelte":
/*!**********************************************************************!*\
  !*** ./js/components/svelte/predictive-search/category-block.svelte ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var _searchStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchStore.js */ "./js/components/svelte/predictive-search/searchStore.js");
/* js/components/svelte/predictive-search/category-block.svelte generated by Svelte v4.2.12 */






function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (30:4) {#if category?.content?.length}
function create_if_block(ctx) {
	let p;
	let t0_value = /*category*/ ctx[0].title + "";
	let t0;
	let t1;
	let div;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*queries*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "predictive-search__category-title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "predictive-search__category-content");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}
		},
		p(ctx, dirty) {
			if (dirty & /*category*/ 1 && t0_value !== (t0_value = /*category*/ ctx[0].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

			if (dirty & /*category, queries, undefined, updateQuery*/ 7) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*queries*/ ctx[1]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (38:16) {:else}
function create_else_block(ctx) {
	let p;
	let html_tag;
	let raw_value = /*query*/ ctx[7]?.title + "";
	let t;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[4](/*index*/ ctx[9], ...args);
	}

	return {
		c() {
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			html_tag.a = t;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "predictive-search__category-item");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
			html_tag.m(raw_value, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(p, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
			}

			mounted = false;
			dispose();
		}
	};
}

// (34:16) {#if query?.handle != undefined}
function create_if_block_1(ctx) {
	let a;
	let p;
	let raw_value = /*query*/ ctx[7]?.title + "";
	let t;
	let a_href_value;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "predictive-search__category-content-title");

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = `${/*category*/ ctx[0].title == 'collections'
			? '/collections/'
			: '/pages/'}${/*query*/ ctx[7]?.handle}`);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, p);
			p.innerHTML = raw_value;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*category*/ 1 && a_href_value !== (a_href_value = `${/*category*/ ctx[0].title == 'collections'
			? '/collections/'
			: '/pages/'}${/*query*/ ctx[7]?.handle}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}
		}
	};
}

// (33:12) {#each queries as query, index}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*query*/ ctx[7]?.handle != undefined) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if_block.p(ctx, dirty);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if_block.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let if_block = /*category*/ ctx[0]?.content?.length && create_if_block(ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block) if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "predictive-search__category-block");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p(ctx, [dirty]) {
			if (/*category*/ ctx[0]?.content?.length) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $searchQuery;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _searchStore_js__WEBPACK_IMPORTED_MODULE_3__.searchQuery, $$value => $$invalidate(3, $searchQuery = $$value));
	let { category } = $$props;
	let queries = [];

	const boldString = (categoryTitle, queryString) => {
		if (!categoryTitle) return;
		let regex = new RegExp(queryString, 'g');
		return categoryTitle.replace(regex, `<b>${queryString}</b>`);
	};

	const updateText = () => {
		category.content.forEach(item => {
			let { title, text } = item;
			if (!title && !text) return;

			if (!title) {
				title = text;
			}

			queries.push({
				title: boldString(title?.toLowerCase(), $searchQuery.toLowerCase()),
				handle: item?.handle
			});
		});
	};

	const updateQuery = query => {
		(0,_searchStore_js__WEBPACK_IMPORTED_MODULE_3__.updateSearchQuery)(query);
	};

	const click_handler = (index, event) => updateQuery(category?.content[index]?.title || category?.content[index]?.text);

	$$self.$$set = $$props => {
		if ('category' in $$props) $$invalidate(0, category = $$props.category);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$searchQuery*/ 8) {
			$: ($searchQuery, updateText());
		}
	};

	return [category, queries, updateQuery, $searchQuery, click_handler];
}

class Category_block extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { category: 0 });
	}

	get category() {
		return this.$$.ctx[0];
	}

	set category(category) {
		this.$$set({ category });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Category_block, {"category":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category_block);

/***/ }),

/***/ "./js/components/svelte/predictive-search/index.svelte":
/*!*************************************************************!*\
  !*** ./js/components/svelte/predictive-search/index.svelte ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _searchStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchStore.js */ "./js/components/svelte/predictive-search/searchStore.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var _categories_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.svelte */ "./js/components/svelte/predictive-search/categories.svelte");
/* harmony import */ var _product_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.svelte */ "./js/components/svelte/predictive-search/product.svelte");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* js/components/svelte/predictive-search/index.svelte generated by Svelte v4.2.12 */









function create_if_block(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*isLoading*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "predictive-search");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p(ctx, dirty) {
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
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(div, null);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if_blocks[current_block_type_index].d();
		}
	};
}

// (73:8) {:else}
function create_else_block(ctx) {
	let categories;
	let t;
	let products;
	let current;

	categories = new _categories_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				categories: {
					suggestions: /*data*/ ctx[2]?.queries,
					collections: /*data*/ ctx[2]?.collections,
					pages: /*data*/ ctx[2]?.pages
				}
			}
		});

	products = new _product_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: { products: /*data*/ ctx[2]?.products }
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(categories.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(products.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(categories, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(products, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const categories_changes = {};

			if (dirty & /*data*/ 4) categories_changes.categories = {
				suggestions: /*data*/ ctx[2]?.queries,
				collections: /*data*/ ctx[2]?.collections,
				pages: /*data*/ ctx[2]?.pages
			};

			categories.$set(categories_changes);
			const products_changes = {};
			if (dirty & /*data*/ 4) products_changes.products = /*data*/ ctx[2]?.products;
			products.$set(products_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(categories.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(products.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(categories.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(products.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(categories, detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(products, detaching);
		}
	};
}

// (71:8) {#if isLoading}
function create_if_block_1(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "spinner");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showPredictiveSearch*/ ctx[0] && create_if_block(ctx);

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
			if (/*showPredictiveSearch*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*showPredictiveSearch*/ 1) {
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

function instance($$self, $$props, $$invalidate) {
	let $searchQuery;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _searchStore_js__WEBPACK_IMPORTED_MODULE_5__.searchQuery, $$value => $$invalidate(3, $searchQuery = $$value));
	let showPredictiveSearch = false;
	let isLoading = true;
	let data = {};

	const updateQueryParams = ev => {
		(0,_searchStore_js__WEBPACK_IMPORTED_MODULE_5__.updateSearchQuery)(ev.target.value);
	};

	const handleSearchInputChange = async () => {
		$$invalidate(0, showPredictiveSearch = true);
		$$invalidate(1, isLoading = true);
		const value = $searchQuery;

		predictiveSearchInput.forEach(predictiveSearch => {
			predictiveSearch.value = $searchQuery;
		});

		if (!value || [...value].length <= 3) return $$invalidate(0, showPredictiveSearch = false);
		const predictiveData = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_6__.getPredictiveSearch)(value);
		const searchData = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_6__.getSearchResult)(value, 6);
		const currentPredictiveData = predictiveData.data.predictiveSearch;
		const curatedSearchData = searchData.data.search.edges.map(({ node }) => node);

		const curatedObj = {
			products: curatedSearchData,
			...currentPredictiveData
		};

		$$invalidate(2, data = { ...curatedObj });
		$$invalidate(2, data);
		$$invalidate(1, isLoading = false);
	};

	let predictiveSearchInput = document.querySelectorAll('[data-predictive-search-input]');

	const debounce = (func, delay) => {
		let debounceTimer;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => func.apply(context, args), delay);
		};
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(() => {
		predictiveSearchInput.forEach(predictiveSearch => {
			predictiveSearch.addEventListener('input', debounce(updateQueryParams), 3000);

			document.addEventListener('click', ev => {
				if (ev.target.closest('.header__search-bar-wrapper') || ev.target.closest('.predictive-search__category-content')) {
					if (ev.target.closest('.header__search-bar-wrapper--mobile').classList.contains('is-fixed')) {
						$$invalidate(0, showPredictiveSearch = true);
					} else $$invalidate(0, showPredictiveSearch = false);
				} else {
					$$invalidate(0, showPredictiveSearch = false);
				}
			});
		});
	});

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$searchQuery*/ 8) {
			$: ($searchQuery, handleSearchInputChange());
		}
	};

	return [showPredictiveSearch, isLoading, data, $searchQuery];
}

class Predictive_search extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Predictive_search, {}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Predictive_search);

/***/ }),

/***/ "./js/components/svelte/predictive-search/product.svelte":
/*!***************************************************************!*\
  !*** ./js/components/svelte/predictive-search/product.svelte ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_product_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/product-card */ "./js/components/svelte/product-card.svelte");
/* js/components/svelte/predictive-search/product.svelte generated by Svelte v4.2.12 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (41:0) {#if products?.length }
function create_if_block(ctx) {
	let div2;
	let div0;
	let h3;
	let t1;
	let a;
	let t3;
	let div1;
	let current;
	let mounted;
	let dispose;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*products*/ ctx[0]);
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
			h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
			h3.textContent = "Product Matches";
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			a.textContent = "View all possible matches";
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "predictive-search__products-innerwrap");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "predictive-search__products");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "predictive-search__products-main");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, a);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a, "click", /*handleSearchResults*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*curateProductData, products, settings, excludedProducts*/ 7) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*products*/ ctx[0]);
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};
}

// (49:16) {#if !(product.tags).includes(excludedProducts)}
function create_if_block_1(ctx) {
	let productcard;
	let current;

	productcard = new SvelteComponents_product_card__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				product: /*curateProductData*/ ctx[2](/*product*/ ctx[4]),
				productCardSettings: /*settings*/ ctx[1]
			}
		});

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
			if (dirty & /*products*/ 1) productcard_changes.product = /*curateProductData*/ ctx[2](/*product*/ ctx[4]);
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

// (48:12) {#each products as product}
function create_each_block(ctx) {
	let show_if = !/*product*/ ctx[4].tags.includes(excludedProducts);
	let if_block_anchor;
	let current;
	let if_block = show_if && create_if_block_1(ctx);

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
			if (dirty & /*products*/ 1) show_if = !/*product*/ ctx[4].tags.includes(excludedProducts);

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*products*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
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

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*products*/ ctx[0]?.length && create_if_block(ctx);

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
			if (/*products*/ ctx[0]?.length) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*products*/ 1) {
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

let excludedProducts = 'free_gift';

function instance($$self, $$props, $$invalidate) {
	let { products } = $$props;
	let settings = { addToCartButton: false, tags: false };

	const curateProductData = product => {
		const { featuredImage, variants: { nodes: variantArray }, title, tags, handle, vendor = '' } = product;

		const curatedVariantData = variantArray.map(variant => {
			const { price: { amount: price }, compareAtPrice = {}, id: variantId, ...rest } = variant || {};

			return {
				price,
				compare_at_price: compareAtPrice?.amount || 0,
				variantId: variantId.split('gid://shopify/ProductVariant/')[1],
				...rest
			};
		});

		return {
			image: featuredImage,
			variants: curatedVariantData,
			vendor,
			title,
			tags,
			metafields: [],
			handle,
			skipFormatMoney: true,
			enableAddToCart: true
		};
	};

	const handleSearchResults = () => {
		const submitFormBtn = document.querySelector('[data-form-submit]');
		if (!submitFormBtn) return;
		submitFormBtn.dispatchEvent(new Event('click', { bubbles: true }));
	};

	$$self.$$set = $$props => {
		if ('products' in $$props) $$invalidate(0, products = $$props.products);
	};

	return [products, settings, curateProductData, handleSearchResults];
}

class Product extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { products: 0 });
	}

	get products() {
		return this.$$.ctx[0];
	}

	set products(products) {
		this.$$set({ products });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product, {"products":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./js/components/svelte/product-card-skeleton.svelte":
/*!***********************************************************!*\
  !*** ./js/components/svelte/product-card-skeleton.svelte ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/product-card-skeleton.svelte generated by Svelte v4.2.12 */




function create_fragment(ctx) {
	let div6;

	return {
		c() {
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6.innerHTML = `<div class="product-card__body"><div class="product-card__image skeleton-box"></div> <div class="product-card__header skeleton-box"></div> <div class="product-card__title skeleton-box"></div> <div class="product-card__footer skeleton-box"></div></div> <div class="product-card__title skeleton-box"></div>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "product-card swiper-slide");
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

class Product_card_skeleton extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product_card_skeleton, {}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product_card_skeleton);

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
/* harmony import */ var JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! JsComponents/handleClick */ "./js/components/handleClick.js");
/* harmony import */ var JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! JsComponents/rebuy-cart-integration */ "./js/components/rebuy-cart-integration.js");
/* harmony import */ var SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! SvelteComponents/bundle-store.js */ "./js/components/svelte/bundle-store.js");
/* js/components/svelte/product-card.svelte generated by Svelte v4.2.12 */





 //js based handle click





function create_if_block_12(ctx) {
	let div;
	let t0;
	let t1;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*discountPercentage*/ ctx[5]);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("% off");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__discount");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*discountPercentage*/ 32) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, /*discountPercentage*/ ctx[5]);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (180:10) {#if bestseller}
function create_if_block_11(ctx) {
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

// (183:10) {#if onsale}
function create_if_block_10(ctx) {
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

// (186:12) {#if isFinalSale }
function create_if_block_9(ctx) {
	let div1;
	let div0;
	let t;

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Final sale");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "icon-holder");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "product-card__discount product-card__discount--final-sale");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			div0.innerHTML = /*fireEmoji*/ ctx[18];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}
		}
	};
}

// (190:8) {#if rating}
function create_if_block_8(ctx) {
	let div;
	let svg;
	let use;
	let t0;
	let span;
	let t1_value = (/*rating*/ ctx[4] ? /*rating*/ ctx[4] : "") + "";
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
			if (dirty[0] & /*rating*/ 16 && t1_value !== (t1_value = (/*rating*/ ctx[4] ? /*rating*/ ctx[4] : "") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (201:4) {#if vendor && settings.vendor}
function create_if_block_7(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__vendor");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			div.innerHTML = /*vendor*/ ctx[10];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (212:6) {#if settings.price }
function create_if_block_4(ctx) {
	let t0;
	let div;
	let if_block = /*discountPercentage*/ ctx[5] > 0 && create_if_block_5(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div.textContent = `${/*productFormattedPrice*/ ctx[28](/*price*/ ctx[16])} ${window.Shopify?.currency?.active}`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__price");
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		p(ctx, dirty) {
			if (/*discountPercentage*/ ctx[5] > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_5(ctx);
					if_block.c();
					if_block.m(t0.parentNode, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

// (213:8) {#if discountPercentage > 0}
function create_if_block_5(ctx) {
	let div;

	function select_block_type(ctx, dirty) {
		if (/*skipFormatMoney*/ ctx[12]) return create_if_block_6;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, [-1, -1]);
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

// (219:12) {:else}
function create_else_block_1(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[15] * (window.Shopify?.currency?.rate * 100), `${/*currencySymbol*/ ctx[19]}{{amount}}`) + "";
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

// (216:12) {#if skipFormatMoney}
function create_if_block_6(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[15], `${/*currencySymbol*/ ctx[19]}{{amount}}`) + "";
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

// (235:6) {#if settings.addToCartButton }
function create_if_block(ctx) {
	let form;
	let input0;
	let t0;
	let input1;
	let t1;
	let t2;
	let if_block0 = /*isFinalSale*/ ctx[7] && create_if_block_3(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*isBundle*/ ctx[26]) return create_if_block_1;
		if (/*variants*/ ctx[9].length == 1 && /*enableAddToCart*/ ctx[13] == true && !/*forceSeeOptions*/ ctx[14]) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx, [-1, -1]);
	let if_block1 = current_block_type(ctx);

	return {
		c() {
			form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block0) if_block0.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "name", "quantity");
			input0.value = "1";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "name", "id");
			input1.value = /*variantId*/ ctx[17];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "action", "/cart/add");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "accept-charset", "UTF-8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "enctype", "multipart/form-data");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, form, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t1);
			if (if_block0) if_block0.m(form, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t2);
			if_block1.m(form, null);
		},
		p(ctx, dirty) {
			if (/*isFinalSale*/ ctx[7]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(form, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if_block1.p(ctx, dirty);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(form);
			}

			if (if_block0) if_block0.d();
			if_block1.d();
		}
	};
}

// (244:10) {#if isFinalSale}
function create_if_block_3(ctx) {
	let input;

	return {
		c() {
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "hidden");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "properties[best-before]");
			input.value = /*expiryDate*/ ctx[6];
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, input, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*expiryDate*/ 64) {
				input.value = /*expiryDate*/ ctx[6];
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(input);
			}
		}
	};
}

// (319:10) {:else}
function create_else_block(ctx) {
	let a;
	let t;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*chooseMoreText*/ ctx[20]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*link*/ ctx[24]);
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

// (311:88) 
function create_if_block_2(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.textContent = `${/*addToCartText*/ ctx[21]}`;
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

// (248:10) {#if isBundle}
function create_if_block_1(ctx) {
	let div5;
	let div3;
	let div0;
	let button0;
	let t1;
	let div1;
	let span;
	let t2_value = /*isAddedToBundle*/ ctx[1]?.quantity + "";
	let t2;
	let t3;
	let div2;
	let button1;
	let div3_class_value;
	let t5;
	let div4;
	let button2;
	let div4_class_value;
	let div4_onclick_value;
	let div5_class_value;
	let t7;
	let button3;
	let t8;
	let button3_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button0.textContent = "-";
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button1.textContent = "+";
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button2.textContent = `${/*bundleTextAdded*/ ctx[23]}`;
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*bundleText*/ ctx[22]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "product-card__quantity-buttons");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "name", "remove");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "product-card__quantity-buttons");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "product-card__quantity-buttons");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "name", "add");

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", div3_class_value = `product-card__bundle-atc-quantity ${/*isAddedToBundle*/ ctx[1]?.quantity <= 2 && /*isAddedToBundle*/ ctx[1]?.quantity <= /*product*/ ctx[0].quantityAvailable
			? "active"
			: ""}`);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "product-card__quantity-buttons");
			button2.disabled = "true";

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", div4_class_value = `product-card__bundle-atc-added  ${/*isAddedToBundle*/ ctx[1]?.quantity <= 2 && /*isAddedToBundle*/ ctx[1]?.quantity <= /*product*/ ctx[0].quantityAvailable
			? ""
			: "active"}`);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "onclick", div4_onclick_value = func);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", div5_class_value = `product-card__bundle-atc product-card__bundle-action-btn product-card__quantity-button-wrapp ${/*isAddedToBundle*/ ctx[1] ? "active" : ""}`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "type", "button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "class", button3_class_value = `product-item__action-button product-item__action-button--list-view-only button button--small button--primary product-card__bundle-action-btn  ${!/*isAddedToBundle*/ ctx[1] ? "active" : ""}`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "data-action", "add-to-bundle");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, button0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, button1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, button2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t7, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button3, t8);

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(/*click_handler*/ ctx[34])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(/*click_handler_1*/ ctx[35])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button3, "click", /*handleProductUpdate*/ ctx[29])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*isAddedToBundle*/ 2 && t2_value !== (t2_value = /*isAddedToBundle*/ ctx[1]?.quantity + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);

			if (dirty[0] & /*isAddedToBundle, product*/ 3 && div3_class_value !== (div3_class_value = `product-card__bundle-atc-quantity ${/*isAddedToBundle*/ ctx[1]?.quantity <= 2 && /*isAddedToBundle*/ ctx[1]?.quantity <= /*product*/ ctx[0].quantityAvailable
			? "active"
			: ""}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", div3_class_value);
			}

			if (dirty[0] & /*isAddedToBundle, product*/ 3 && div4_class_value !== (div4_class_value = `product-card__bundle-atc-added  ${/*isAddedToBundle*/ ctx[1]?.quantity <= 2 && /*isAddedToBundle*/ ctx[1]?.quantity <= /*product*/ ctx[0].quantityAvailable
			? ""
			: "active"}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", div4_class_value);
			}

			if (dirty[0] & /*isAddedToBundle*/ 2 && div5_class_value !== (div5_class_value = `product-card__bundle-atc product-card__bundle-action-btn product-card__quantity-button-wrapp ${/*isAddedToBundle*/ ctx[1] ? "active" : ""}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", div5_class_value);
			}

			if (dirty[0] & /*isAddedToBundle*/ 2 && button3_class_value !== (button3_class_value = `product-item__action-button product-item__action-button--list-view-only button button--small button--primary product-card__bundle-action-btn  ${!/*isAddedToBundle*/ ctx[1] ? "active" : ""}`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "class", button3_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div5);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t7);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button3);
			}

			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let a;
	let div8;
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
	let t6;
	let div3;
	let t7;
	let div7;
	let div5;
	let t8;
	let div6;
	let current;

	responsiveimage = new SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				image: /*image*/ ctx[8],
				image_aspect_ratio: 1
			}
		});

	let if_block0 = /*discountPercentage*/ ctx[5] > 0 && create_if_block_12(ctx);
	let if_block1 = /*bestseller*/ ctx[25] && create_if_block_11(ctx);
	let if_block2 = /*onsale*/ ctx[27] && create_if_block_10(ctx);
	let if_block3 = /*isFinalSale*/ ctx[7] && create_if_block_9(ctx);
	let if_block4 = /*rating*/ ctx[4] && create_if_block_8(ctx);
	let if_block5 = /*vendor*/ ctx[10] && /*settings*/ ctx[3].vendor && create_if_block_7(ctx);
	let if_block6 = /*settings*/ ctx[3].price && create_if_block_4(ctx);
	let if_block7 = /*settings*/ ctx[3].addToCartButton && create_if_block(ctx);

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
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
			if (if_block5) if_block5.c();
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block6) if_block6.c();
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block7) if_block7.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "product-card__image");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "product-card__header-tags");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "product-card__header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "product-card__title");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "product-card__body");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "product-card__price-container");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "product-card__atc");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "product-card__footer");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "product-card swiper-slide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "data-redirect-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "data-js-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "data-url", /*link*/ ctx[24]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", /*link*/ ctx[24]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "target", "_blank");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a, "user-select", "none");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div4);
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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t3);
			if (if_block3) if_block3.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);
			if (if_block4) if_block4.m(div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t5);
			if (if_block5) if_block5.m(div4, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
			div3.innerHTML = /*title*/ ctx[11];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div5);
			if (if_block6) if_block6.m(div5, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
			if (if_block7) if_block7.m(div6, null);
			/*div8_binding*/ ctx[36](div8);
			current = true;
		},
		p(ctx, dirty) {
			if (/*discountPercentage*/ ctx[5] > 0) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_12(ctx);
					if_block0.c();
					if_block0.m(div1, t1);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*isFinalSale*/ ctx[7]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_9(ctx);
					if_block3.c();
					if_block3.m(div1, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (/*rating*/ ctx[4]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block_8(ctx);
					if_block4.c();
					if_block4.m(div2, null);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (/*vendor*/ ctx[10] && /*settings*/ ctx[3].vendor) {
				if (if_block5) {
					if_block5.p(ctx, dirty);
				} else {
					if_block5 = create_if_block_7(ctx);
					if_block5.c();
					if_block5.m(div4, t6);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if (/*settings*/ ctx[3].price) {
				if (if_block6) {
					if_block6.p(ctx, dirty);
				} else {
					if_block6 = create_if_block_4(ctx);
					if_block6.c();
					if_block6.m(div5, null);
				}
			} else if (if_block6) {
				if_block6.d(1);
				if_block6 = null;
			}

			if (/*settings*/ ctx[3].addToCartButton) {
				if (if_block7) {
					if_block7.p(ctx, dirty);
				} else {
					if_block7 = create_if_block(ctx);
					if_block7.c();
					if_block7.m(div6, null);
				}
			} else if (if_block7) {
				if_block7.d(1);
				if_block7 = null;
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			if (if_block7) if_block7.d();
			/*div8_binding*/ ctx[36](null);
		}
	};
}

const soldOutText = "Sold Out";
const func = e => e.preventDefault();

function instance($$self, $$props, $$invalidate) {
	let expiryDateData;
	let isFinalSale;
	let expiryDate;
	let $cartContents;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_4__.cartContents, $$value => $$invalidate(33, $cartContents = $$value));
	let { shopifyData } = $$props;
	let { product } = $$props;
	let { productCardSettings = {} } = $$props;
	let curatedBundleProduct = {};
	let isAddedToBundle = false;
	let ref;

	let settings = {
		vendor: true,
		price: true,
		addToCartButton: true,
		tags: true
	};

	settings = { ...settings, ...productCardSettings };

	const { image, variants = [], vendor, title, tags = [], metafields = [], handle, skipFormatMoney = false, discountPercentage: shopifyDiscountPercentage = 0, enableAddToCart = true, forceSeeOptions = false, // flag for adding conversion rate
	addConversionRate = false } = product || shopifyData || {};

	let [{ compare_at_price: comparePrice, price, id: variantId } = {}] = variants || [];

	const getExpiryData = async handle => {
		const expiryData = await fetch(`/products/${handle}?variant=${variantId}&view=get-expiry-date`);
		const expiryDateJson = await expiryData.json();
		const { isFinalSale: isFinalSaleFromJson, expiryDate: expiryDateFromJson } = expiryDateJson;
		$$invalidate(32, expiryDateData.isFinalSale = isFinalSaleFromJson, expiryDateData);
		$$invalidate(32, expiryDateData.expiryDate = expiryDateFromJson, expiryDateData);
		$$invalidate(32, expiryDateData); //reassigning value
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		await getExpiryData(handle);
	});

	const fireEmoji = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.16 122.88"><defs><style>.cls-1{fill:#f77d02;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#ffc928;}.cls-3{fill:#fff073;}</style></defs><title>flames</title><path class="cls-1" d="M14.45,35.35c1.82,14.45,4.65,25.4,9.44,29.45C24.48,30.87,43,27.4,38.18,0,53.52,3,67.77,33.33,71.36,66.15a37.5,37.5,0,0,0,6.53-19.46c13.76,15.72,21.31,56.82-.17,69.52-12.53,7.41-38.13,7.79-51.46,5.27a27.64,27.64,0,0,1-13.5-5.36c-19.2-14.66-15.17-62.25,1.69-80.77Z"/><path class="cls-2" d="M77.73,116.2h0c-8,4.74-21.42,6.61-33.51,6.67H42.45a95.69,95.69,0,0,1-16.19-1.39,27.64,27.64,0,0,1-13.5-5.36,2.43,2.43,0,0,0-.25-.2c-2.13-10.28,1.76-24,8.49-31.29a25.49,25.49,0,0,0,4.85,13.71C28.51,75.22,39.11,57,50.5,54.94c-3,19.1,11,24.21,10.62,42.45,3.56-2.85,5.66-10.57,7-20.75,9.12,9.49,13.59,26.32,9.59,39.56Z"/><path class="cls-3" d="M65.81,120.73a115,115,0,0,1-39.55.82l-1-.13c.06-5.73,2.21-12,5.47-15.73a17.18,17.18,0,0,0,2.93,8.84c1.61-14.91,8-26.63,14.88-28-1.79,12.32,6.65,15.61,6.4,27.37,2.15-1.84,3.42-6.82,4.23-13.38,4.47,5,7.09,12.84,6.63,20.19Z"/></svg>`;
	const currencySymbol = window.shopifyVariables.currencySymbol || "$";
	const chooseMoreText = window.shopifyVariables.chooseMoreText || "See Options";
	const addToCartText = window.shopifyVariables.addToCartText || "Add To Cart";
	const bundleText = window.shopifyVariables.bundleText || "Add To Bundle";
	const bundleTextAdded = window.shopifyVariables.bundleTextAdded || "Added";
	let link = `${window.Shopify.routes.root}products/${handle}?variant=${variantId}`;
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

			$$invalidate(4, rating = parsedValue?.reviewAverageValue);
		}
	});

	const bestseller = tags.includes("bestseller");
	const isBundle = window.location.href.includes("build-your-own-box") || false;
	const onsale = tags.includes("onsale");

	const productFormattedPrice = price => {
		let amount = parseFloat(price);
		let formattedPrice;

		if (addConversionRate && !window.Shopify.currency.active.toLowerCase().includes('cad')) {
			amount = parseFloat(amount + 0.10 * amount);
		}

		if (skipFormatMoney) {
			formattedPrice = window.formatCurrency(amount, `${currencySymbol}{{amount}}`);
		} else {
			formattedPrice = window.formatCurrency(amount * (window.Shopify?.currency?.rate * 100), `${currencySymbol}{{amount}}`);
		}

		return formattedPrice;
	};

	//conflicting data between shopify and rebuy
	let discountPercentage = 0;

	if (skipFormatMoney) {
		discountPercentage = shopifyDiscountPercentage;
	} else {
		discountPercentage = Math.round((comparePrice - price) * 100 / comparePrice);
	}

	if (isBundle) {
		curatedBundleProduct = {
			id: variantId,
			image,
			title,
			price: productFormattedPrice(price),
			quantity: 1
		};
	}

	const currentAddedBundleProduct = $cartContents[variantId];

	const handleProductUpdate = ev => {
		ev.preventDefault(); //override default behaviour

		const curatedBundleProduct = {
			id: variantId,
			image,
			title,
			price: productFormattedPrice(price),
			quantity: 1
		};

		//if [currentVariant] id exist on hash object(store), then update the product
		isAddedToBundle
		? updateProduct(currentAddedBundleProduct, currentAddedBundleProduct.quantity + 1)
		: (0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_4__.addProduct)(curatedBundleProduct);
	}; //else add [current variant] on the hash object

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(() => {
		(0,JsComponents_handleClick__WEBPACK_IMPORTED_MODULE_5__["default"])(ref);
		(0,JsComponents_rebuy_cart_integration__WEBPACK_IMPORTED_MODULE_6__.removeAttributesForCartBinding)(ref);
	});

	const { enableTags } = settings;

	const click_handler = () => {
		let currentQuantity = isAddedToBundle?.quantity;

		if (currentQuantity <= 1) {
			currentQuantity = 0;
		} else {
			currentQuantity = currentQuantity - 1;
		}

		(0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_4__.updateQuantity)(isAddedToBundle, currentQuantity);
	};

	const click_handler_1 = () => (0,SvelteComponents_bundle_store_js__WEBPACK_IMPORTED_MODULE_4__.updateQuantity)(isAddedToBundle || {}, isAddedToBundle?.quantity + 1);

	function div8_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			ref = $$value;
			$$invalidate(2, ref);
		});
	}

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(30, shopifyData = $$props.shopifyData);
		if ('product' in $$props) $$invalidate(0, product = $$props.product);
		if ('productCardSettings' in $$props) $$invalidate(31, productCardSettings = $$props.productCardSettings);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[1] & /*expiryDateData*/ 2) {
			$: $$invalidate(7, { isFinalSale, expiryDate } = expiryDateData, isFinalSale, ($$invalidate(6, expiryDate), $$invalidate(32, expiryDateData)));
		}

		if ($$self.$$.dirty[1] & /*$cartContents*/ 4) {
			$: $$invalidate(1, isAddedToBundle = $cartContents && $cartContents[variantId]);
		}
	};

	$: $$invalidate(32, expiryDateData = {});

	return [
		product,
		isAddedToBundle,
		ref,
		settings,
		rating,
		discountPercentage,
		expiryDate,
		isFinalSale,
		image,
		variants,
		vendor,
		title,
		skipFormatMoney,
		enableAddToCart,
		forceSeeOptions,
		comparePrice,
		price,
		variantId,
		fireEmoji,
		currencySymbol,
		chooseMoreText,
		addToCartText,
		bundleText,
		bundleTextAdded,
		link,
		bestseller,
		isBundle,
		onsale,
		productFormattedPrice,
		handleProductUpdate,
		shopifyData,
		productCardSettings,
		expiryDateData,
		$cartContents,
		click_handler,
		click_handler_1,
		div8_binding
	];
}

class Product_card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				shopifyData: 30,
				product: 0,
				productCardSettings: 31
			},
			null,
			[-1, -1]
		);
	}

	get shopifyData() {
		return this.$$.ctx[30];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get product() {
		return this.$$.ctx[0];
	}

	set product(product) {
		this.$$set({ product });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get productCardSettings() {
		return this.$$.ctx[31];
	}

	set productCardSettings(productCardSettings) {
		this.$$set({ productCardSettings });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product_card, {"shopifyData":{},"product":{},"productCardSettings":{}}, [], [], true);
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
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/product-card.svelte */ "./js/components/svelte/product-card.svelte");
/* harmony import */ var JsComponents_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/constants */ "./js/components/constants.js");
/* js/components/svelte/product-carousel.svelte generated by Svelte v4.2.12 */









function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	child_ctx[18] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	child_ctx[18] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	return child_ctx;
}

// (117:0) {#if collectionTexts.length > 1}
function create_if_block_4(ctx) {
	let div;
	let each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*collectionTexts*/ ctx[5]);
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
			if (dirty & /*selectedParams, collectionTexts, updateParams*/ 100) {
				each_value_2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*collectionTexts*/ ctx[5]);
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

// (119:4) {#each collectionTexts as text}
function create_each_block_2(ctx) {
	let div;
	let button;
	let t0_value = /*text*/ ctx[20] + "";
	let t0;
	let button_class_value;
	let t1;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[8](/*text*/ ctx[20], ...args);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[20] && "product-category__button--active"}`);
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

			if (dirty & /*selectedParams*/ 4 && button_class_value !== (button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[20] && "product-category__button--active"}`)) {
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

// (143:0) {:else}
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

// (133:0) {#if isLoading}
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

// (153:6) {#if productData.length > 0  }
function create_if_block_2(ctx) {
	let custom_carousel;
	let div1;
	let div0;
	let t0;
	let div2;
	let t1;
	let div3;
	let t2;
	let div4;
	let t4;
	let div11;
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
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div4.textContent = `${JSON.stringify(/*carouselSettings*/ ctx[4])}`;
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div11.innerHTML = `<div class="product-placeholders"><div></div> <div></div> <div></div> <div></div> <div></div></div>`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "swiper-wrapper");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "carousel__container swiper hide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "data-swiper-container", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "swiper-pagination");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "swiper-navigations");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "data-swiper-navigations", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "type", "text/json");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "data-settings", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div4, "display", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "carousel-placeholders");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "data-carousel-placeholder", "");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, custom_carousel, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(custom_carousel, div11);
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

// (158:20) {#if product.variants[0].price > 0}
function create_if_block_3(ctx) {
	let div;
	let p;
	let t0_value = (/*product*/ ctx[16].enableAddToCart = false) + "";
	let t0;
	let t1;
	let productcard;
	let t2;
	let current;
	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { product: /*product*/ ctx[16] } });

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(productcard.$$.fragment);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(p, "display", "none", 1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "swiper-slide");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(productcard, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t2);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*productData*/ 1) && t0_value !== (t0_value = (/*product*/ ctx[16].enableAddToCart = false) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
			const productcard_changes = {};
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[16];
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(productcard);
		}
	};
}

// (157:20) {#each productData as product, index}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*product*/ ctx[16].variants[0].price > 0 && create_if_block_3(ctx);

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
			if (/*product*/ ctx[16].variants[0].price > 0) {
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

// (192:8) {#if index < 4}
function create_if_block_1(ctx) {
	let productcard;
	let current;
	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { product: /*product*/ ctx[16] } });

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
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[16];
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

// (191:6) {#each productData as product, index}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*index*/ ctx[18] < 4 && create_if_block_1(ctx);

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
			if (/*index*/ ctx[18] < 4) if_block.p(ctx, dirty);
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

// (144:0) {#key productData}
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
	let if_block0 = /*collectionTexts*/ ctx[5].length > 1 && create_if_block_4(ctx);
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
			if (/*collectionTexts*/ ctx[5].length > 1) if_block0.p(ctx, dirty);
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
	const { mobileCarousel = false, blocks = [], carouselSettingValues = false } = shopifyData || {};

	const defaultSettings = {
		"slidesPerView": 2,
		"spaceBetween": 10,
		"overflowNagivation": true,
		"progressPagination": true,
		"pagination": true,
		"navigation": false,
		"breakpoints": {
			"768": {
				"pagination": false,
				"navigation": true,
				"slidesPerView": 3,
				"spaceBetween": 27.5
			},
			"1024": {
				"pagination": false,
				"navigation": true,
				"slidesPerView": 5,
				"spaceBetween": 27.5
			}
		}
	};

	const getCurrentSelectedCountryHandle = handle => {
		return Object.keys(JsComponents_constants__WEBPACK_IMPORTED_MODULE_4__.countryMap).find(countryName => {
			if (JsComponents_constants__WEBPACK_IMPORTED_MODULE_4__.countryMap[countryName].includes(handle.toLowerCase())) {
				return countryName;
			}
		});
	};

	const carouselSettings = carouselSettingValues || defaultSettings;

	const paramsHash = blocks.reduce(
		(accumulator, block) => {
			return accumulator = {
				...accumulator,
				[block.text]: {
					rebuy: block?.rebuy,
					text: block?.text,
					productId: block.productId,
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
			$$invalidate(0, productData = selectedParams.collectionData || []);
		} else {
			const { rebuy, ...otherParams } = selectedParams;
			const currentSelectedCountryHandle = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_5__.customerLocation)();
			const currentCustomerCountry = getCurrentSelectedCountryHandle(currentSelectedCountryHandle);
			let rebuyRuleId = rebuy['other'] || rebuy['canada'];

			if (rebuy[currentCustomerCountry]) {
				rebuyRuleId = rebuy[currentCustomerCountry];
			}

			const rebuyApiParams = { ...otherParams, ruleId: rebuyRuleId };
			const responseData = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_5__.getProductData)(rebuyApiParams);
			let responseProductData = responseData.data || [];

			$$invalidate(0, productData = responseProductData.map(item => {
				item["addConversionRate"] = true;
				return item;
			}));
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
		if ('shopifyData' in $$props) $$invalidate(7, shopifyData = $$props.shopifyData);
	};

	return [
		productData,
		isLoading,
		selectedParams,
		mobileCarousel,
		carouselSettings,
		collectionTexts,
		updateParams,
		shopifyData,
		click_handler
	];
}

class Product_carousel extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 7 });
	}

	get shopifyData() {
		return this.$$.ctx[7];
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
/* js/components/svelte/responsive-image.svelte generated by Svelte v4.2.12 */




function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-10oi4ts", ".responsive-image__wrapper.svelte-10oi4ts:before{content:'';width:100%;display:block;padding-top:var(--padding-top)}.responsive-image__wrapper.svelte-10oi4ts{max-width:var(--max-width);height:100%;position:relative;max-height:var(--max-height);height:auto}.responsive-image__image.svelte-10oi4ts{position:absolute;top:0;height:100%;left:0;width:100%}");
}

function create_fragment(ctx) {
	let div;
	let img;
	let img_id_value;
	let img_src_value;
	let img_srcset_value;
	let img_style_value;
	let div_id_value;
	let div_style_value;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "id", img_id_value = "Image-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "responsive-image__image svelte-10oi4ts");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*srcUrl*/ ctx[4])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.srcset_url_equal)(img, img_srcset_value = /*imageSrcSet*/ ctx[3])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "srcset", img_srcset_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "data-aspectratio", /*image_aspect_ratio*/ ctx[0]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "tabindex", "-1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "style", img_style_value = /*getImageStyle*/ ctx[6]());
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "loading", "lazy");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "id", div_id_value = "ImageWrapper-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "data-image-id", /*image_id*/ ctx[2]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "responsive-image__wrapper svelte-10oi4ts");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style", div_style_value = /*getWrapperStyles*/ ctx[5]());
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

		return imageWidths;
	};

	const imageSizes = getImageWidths(displayImage.width);

	const imageSrcSet = imageSizes.map(width => {
		return `${displayImage.src}&width=${width} ${width}w`;
	}).join(",");

	const max_width_image_float = max_width_image * 1.0;
	let srcUrl = `${displayImage.src}&width=10`;

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
		if ('image' in $$props) $$invalidate(7, image = $$props.image);
	};

	return [
		image_aspect_ratio,
		generated_image_id,
		image_id,
		imageSrcSet,
		srcUrl,
		getWrapperStyles,
		getImageStyle,
		image
	];
}

class Responsive_image extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { image_aspect_ratio: 0, image: 7 }, add_css);
	}

	get image_aspect_ratio() {
		return this.$$.ctx[0];
	}

	set image_aspect_ratio(image_aspect_ratio) {
		this.$$set({ image_aspect_ratio });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get image() {
		return this.$$.ctx[7];
	}

	set image(image) {
		this.$$set({ image });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Responsive_image, {"image_aspect_ratio":{},"image":{}}, [], [], true);
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
/* js/components/svelte/review-card.svelte generated by Svelte v4.2.12 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	child_ctx[13] = i;
	return child_ctx;
}

// (33:12) {#each getReviews(rating) as star, index(index)}
function create_each_block(key_1, ctx) {
	let first;
	let html_tag;
	let raw_value = /*star*/ ctx[11] + "";
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
				image: /*image*/ ctx[5],
				image_aspect_ratio: 1
			}
		});

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*getReviews*/ ctx[0](/*rating*/ ctx[1]));
	const get_key = ctx => /*index*/ ctx[13];

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

	const image = {
		id: Date.now(),
		width: 200,
		height: 200,
		src: productImage
	};

	$$self.$$set = $$props => {
		if ('review' in $$props) $$invalidate(6, review = $$props.review);
		if ('getStars' in $$props) $$invalidate(7, getStars = $$props.getStars);
	};

	return [
		getReviews,
		rating,
		title,
		review_content,
		formattedDate,
		image,
		review,
		getStars
	];
}

class Review_card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { review: 6, getStars: 7 });
	}

	get review() {
		return this.$$.ctx[6];
	}

	set review(review) {
		this.$$set({ review });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get getStars() {
		return this.$$.ctx[7];
	}

	set getStars(getStars) {
		this.$$set({ getStars });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Review_card, {"review":{},"getStars":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review_card);

/***/ }),

/***/ "./js/components/svelte/search-component.svelte":
/*!******************************************************!*\
  !*** ./js/components/svelte/search-component.svelte ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var _collection_grid_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-grid.svelte */ "./js/components/svelte/collection-grid.svelte");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* js/components/svelte/search-component.svelte generated by Svelte v4.2.12 */







function create_fragment(ctx) {
	let collectiongrid;
	let current;

	collectiongrid = new _collection_grid_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				loading: /*loading*/ ctx[1],
				firstFoldLoaded: /*firstFoldLoaded*/ ctx[2],
				apiPaginatedData: /*apiPaginatedData*/ ctx[0]
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(collectiongrid.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(collectiongrid, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const collectiongrid_changes = {};
			if (dirty & /*loading*/ 2) collectiongrid_changes.loading = /*loading*/ ctx[1];
			if (dirty & /*firstFoldLoaded*/ 4) collectiongrid_changes.firstFoldLoaded = /*firstFoldLoaded*/ ctx[2];
			if (dirty & /*apiPaginatedData*/ 1) collectiongrid_changes.apiPaginatedData = /*apiPaginatedData*/ ctx[0];
			collectiongrid.$set(collectiongrid_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(collectiongrid.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(collectiongrid.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(collectiongrid, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let apiPaginatedData = [];
	let loading = true;
	let firstFoldLoaded = false;
	let query = '';

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		const searchUrl = window.location.search;
		query = new URLSearchParams(searchUrl).get('q');
		const data = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_4__.getSearchResult)(query, 200);
		$$invalidate(1, loading = false);
		$$invalidate(2, firstFoldLoaded = true);
		const curatedData = data.data.search.edges.map(({ node }) => node);
		console.log(curatedData, "curated Data");

		if (curatedData) {
			$$invalidate(0, apiPaginatedData = curatedData);
		}
	});

	return [apiPaginatedData, loading, firstFoldLoaded];
}

class Search_component extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Search_component, {}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_component);

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
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var SvelteComponents_accordion_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SvelteComponents/accordion.svelte */ "./js/components/svelte/accordion.svelte");
/* js/components/svelte/tab-section.svelte generated by Svelte v4.2.12 */






function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

// (32:8) {#if tabsTitle.length >= 1}
function create_if_block_1(ctx) {
	let div0;
	let t;
	let div1;
	let raw_value = /*tabsData*/ ctx[2][/*selectedKey*/ ctx[1]] + "";
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[0]);
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
			if (dirty & /*tabsTitle, selectedKey*/ 3) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[0]);
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

			if (dirty & /*tabsData, selectedKey*/ 6 && raw_value !== (raw_value = /*tabsData*/ ctx[2][/*selectedKey*/ ctx[1]] + "")) div1.innerHTML = raw_value;;
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

// (34:16) {#each tabsTitle as tab}
function create_each_block_1(ctx) {
	let a;
	let t_value = /*tab*/ ctx[10].replace("_", " ") + "";
	let t;
	let a_aria_label_value;
	let a_class_value;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[5](/*tab*/ ctx[10], ...args);
	}

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "aria-label", a_aria_label_value = /*tab*/ ctx[10].replace("_", " "));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "role", "button");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", a_class_value = `tab-section__tab-title ${/*selectedKey*/ ctx[1] == /*tab*/ ctx[10] && "product-atb__button--active"}`);
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
			if (dirty & /*tabsTitle*/ 1 && t_value !== (t_value = /*tab*/ ctx[10].replace("_", " ") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*tabsTitle*/ 1 && a_aria_label_value !== (a_aria_label_value = /*tab*/ ctx[10].replace("_", " "))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "aria-label", a_aria_label_value);
			}

			if (dirty & /*selectedKey, tabsTitle*/ 3 && a_class_value !== (a_class_value = `tab-section__tab-title ${/*selectedKey*/ ctx[1] == /*tab*/ ctx[10] && "product-atb__button--active"}`)) {
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

// (53:8) {#if tabsTitle.length >= 1}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[0]);
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
			if (dirty & /*tabsData, tabsTitle*/ 5) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*tabsTitle*/ ctx[0]);
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

// (56:20) 
function create_head_slot(ctx) {
	let span;
	let t_value = /*accordionTitle*/ ctx[7].replace("_", " ") + "";
	let t;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "head");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*tabsTitle*/ 1 && t_value !== (t_value = /*accordionTitle*/ ctx[7].replace("_", " ") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			}
		}
	};
}

// (57:20) 
function create_details_slot(ctx) {
	let div;
	let html_tag;
	let raw_value = /*tabsData*/ ctx[2][/*accordionTitle*/ ctx[7]] + "";
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
		p(ctx, dirty) {
			if (dirty & /*tabsData, tabsTitle*/ 5 && raw_value !== (raw_value = /*tabsData*/ ctx[2][/*accordionTitle*/ ctx[7]] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

// (54:12) {#each tabsTitle as accordionTitle, index}
function create_each_block(ctx) {
	let accordion;
	let current;

	accordion = new SvelteComponents_accordion_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				open: /*index*/ ctx[9] == 0,
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

			if (dirty & /*$$scope, tabsData, tabsTitle*/ 8197) {
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
	let if_block0 = /*tabsTitle*/ ctx[0].length >= 1 && create_if_block_1(ctx);
	let if_block1 = /*tabsTitle*/ ctx[0].length >= 1 && create_if_block(ctx);

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
			if (/*tabsTitle*/ ctx[0].length >= 1) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*tabsTitle*/ ctx[0].length >= 1) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*tabsTitle*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div1, null);
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
	let tabsData;
	let tabsTitle;
	let selectedKey;
	let { shopifyData } = $$props;
	let componentProps = shopifyData;

	const updateTabProps = updatedProps => {
		if (updatedProps) {
			const { data: props } = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(updatedProps);

			Object.keys(props).forEach(propKey => {
				$$invalidate(4, componentProps[propKey] = props[propKey], componentProps);
			});

			$$invalidate(4, componentProps);
		}
	};

	window["custom"] = {
		...window["custom"],
		"svelte": { updateTabProps }
	};

	const click_handler = (tab, ev) => {
		$$invalidate(1, selectedKey = tab);
	};

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(3, shopifyData = $$props.shopifyData);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*componentProps*/ 16) {
			$: $$invalidate(2, tabsData = JSON.parse(JSON.stringify(componentProps)));
		}

		if ($$self.$$.dirty & /*componentProps*/ 16) {
			$: $$invalidate(0, tabsTitle = Object.keys(componentProps));
		}

		if ($$self.$$.dirty & /*tabsTitle*/ 1) {
			$: $$invalidate(1, selectedKey = tabsTitle[0]);
		}
	};

	return [tabsTitle, selectedKey, tabsData, shopifyData, componentProps, click_handler];
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