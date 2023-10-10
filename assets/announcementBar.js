/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerLocation: () => (/* binding */ customerLocation)
/* harmony export */ });
/* unused harmony exports getProductData, getReviewData, getReviewDataAggregate, getCollectionProductData, getSingleProductData */
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

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting

  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var props = {};
    if (appTarget) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec, _appTarget$querySelec2;
        console.log((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML);
        props = JSON.parse((_appTarget$querySelec2 = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec2 === void 0 ? void 0 : _appTarget$querySelec2.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });

      return instance;
    }
  });
});

/***/ }),

/***/ "./js/sections/announcementBar.js":
/*!****************************************!*\
  !*** ./js/sections/announcementBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/AnnouncementBar.svelte */ "./js/components/svelte/AnnouncementBar.svelte");
 //wrapper that inject svelte into DOM
 //svelte component to load

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'announcement-bar', '#announcement-bar-data');
});

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
/******/ 			"announcementBar": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./js/sections/announcementBar.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;