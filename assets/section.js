/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerLocation: () => (/* binding */ customerLocation),
/* harmony export */   getProductData: () => (/* binding */ getProductData),
/* harmony export */   getReviewData: () => (/* binding */ getReviewData),
/* harmony export */   getReviewDataAggregate: () => (/* binding */ getReviewDataAggregate)
/* harmony export */ });
/* unused harmony exports getCollectionProductData, getSingleProductData */
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
        var _appTarget$querySelec;
        props = JSON.parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/AnnouncementBar.svelte */ "./js/components/svelte/AnnouncementBar.svelte");
 //wrapper that inject svelte into DOM
 //svelte component to load

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'announcement-bar', '#announcement-bar-data');
});

/***/ }),

/***/ "./js/sections/category-section.js":
/*!*****************************************!*\
  !*** ./js/sections/category-section.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_scroll_on_click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/scroll-on-click */ "./js/components/scroll-on-click.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,JsComponents_scroll_on_click__WEBPACK_IMPORTED_MODULE_0__.scrollOnClick)('.collection-banner__cta', '.category-title-description', 200));

/***/ }),

/***/ "./js/sections/customer-reviews.js":
/*!*****************************************!*\
  !*** ./js/sections/customer-reviews.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_customer_reviews_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/customer-reviews.svelte */ "./js/components/svelte/customer-reviews.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_customer_reviews_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'customer-reviews', '#customer-reviews-data');
});

/***/ }),

/***/ "./js/sections/product-carousel.js":
/*!*****************************************!*\
  !*** ./js/sections/product-carousel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_product_carousel_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/product-carousel.svelte */ "./js/components/svelte/product-carousel.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_product_carousel_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'product-carousel', '#product-data');
});

/***/ }),

/***/ "./js/sections/section.js":
/*!********************************!*\
  !*** ./js/sections/section.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _announcementBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcementBar */ "./js/sections/announcementBar.js");
/* harmony import */ var _product_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-carousel */ "./js/sections/product-carousel.js");
/* harmony import */ var _customer_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-reviews */ "./js/sections/customer-reviews.js");
/* harmony import */ var _category_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-section */ "./js/sections/category-section.js");




document.addEventListener('DOMContentLoaded', () => {
  (0,_announcementBar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_product_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_customer_reviews__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_category_section__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony import */ var SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/responsive-image.svelte */ "./js/components/svelte/responsive-image.svelte");
/* js/components/svelte/product-card.svelte generated by Svelte v4.2.0 */





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

// (70:8) {#if bestseller}
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

// (72:8) {#if onsale}
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

// (74:6) {#if rating}
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

// (83:4) {#if vendor}
function create_if_block_4(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div.textContent = `${/*vendor*/ ctx[6]}`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-card__vendor");
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

// (94:6) {#if discountPercentage > 0}
function create_if_block_2(ctx) {
	let div;

	function select_block_type(ctx, dirty) {
		if (/*skipFormatMoney*/ ctx[9]) return create_if_block_3;
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

// (103:10) {:else}
function create_else_block_2(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[4] * (window.Shopify?.currency?.rate * 100), `${/*currencySymbol*/ ctx[10]}{{amount}}`) + "";
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

// (97:10) {#if skipFormatMoney}
function create_if_block_3(ctx) {
	let t0_value = window.formatCurrency(/*comparePrice*/ ctx[4], `${/*currencySymbol*/ ctx[10]}{{amount}}`) + "";
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

// (119:8) {:else}
function create_else_block_1(ctx) {
	let t0_value = window.formatCurrency(/*price*/ ctx[5] * (window.Shopify?.currency?.rate * 100), `${/*currencySymbol*/ ctx[10]}{{amount}}`) + "";
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

// (113:8) {#if skipFormatMoney}
function create_if_block_1(ctx) {
	let t0_value = window.formatCurrency(/*price*/ ctx[5], `${/*currencySymbol*/ ctx[10]}{{amount}}`) + "";
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

// (140:8) {:else}
function create_else_block(ctx) {
	let a;
	let t;
	let a_href_value;

	return {
		c() {
			a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*chooseMoreText*/ ctx[11]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = /*product*/ ctx[0].link);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "product-card__cta product-item__action-button product-item__action-button--list-view-only button button--small button--primary");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*product*/ 1 && a_href_value !== (a_href_value = /*product*/ ctx[0].link)) {
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

// (132:8) {#if product.variants.size == 1}
function create_if_block(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			button.textContent = `${/*addToCartText*/ ctx[12]}`;
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
	let t7;
	let div8;
	let div6;
	let t8;
	let div5;
	let t9;
	let div7;
	let form;
	let input0;
	let t10;
	let input1;
	let input1_value_value;
	let t11;
	let current;

	responsiveimage = new SvelteComponents_responsive_image_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				image: /*image*/ ctx[3],
				image_aspect_ratio: 1,
				srcTokens: /*srcTokens*/ ctx[15]
			}
		});

	let if_block0 = /*discountPercentage*/ ctx[2] > 0 && create_if_block_8(ctx);
	let if_block1 = /*bestseller*/ ctx[13] && create_if_block_7(ctx);
	let if_block2 = /*onsale*/ ctx[14] && create_if_block_6(ctx);
	let if_block3 = /*rating*/ ctx[1] && create_if_block_5(ctx);
	let if_block4 = /*vendor*/ ctx[6] && create_if_block_4(ctx);
	let if_block5 = /*discountPercentage*/ ctx[2] > 0 && create_if_block_2(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*skipFormatMoney*/ ctx[9]) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block6 = current_block_type(ctx);

	function select_block_type_2(ctx, dirty) {
		if (/*product*/ ctx[0].variants.size == 1) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block7 = current_block_type_1(ctx);

	return {
		c() {
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
			div3.textContent = `${/*title*/ ctx[7]}`;
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block5) if_block5.c();
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if_block6.c();
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
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
			input1.value = input1_value_value = /*product*/ ctx[0].variants[0].id;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "action", "/cart/add");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "product-card__atc");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "product-card__footer");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "product-card swiper-slide");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-redirect-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-js-click", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "data-url", /*link*/ ctx[8]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div9, anchor);
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
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div6);
			if (if_block5) if_block5.m(div6, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
			if_block6.m(div5, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, form);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t11);
			if_block7.m(form, null);
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

			if (/*vendor*/ ctx[6]) if_block4.p(ctx, dirty);

			if (/*discountPercentage*/ ctx[2] > 0) {
				if (if_block5) {
					if_block5.p(ctx, dirty);
				} else {
					if_block5 = create_if_block_2(ctx);
					if_block5.c();
					if_block5.m(div6, t8);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if_block6.p(ctx, dirty);

			if (!current || dirty & /*product*/ 1 && input1_value_value !== (input1_value_value = /*product*/ ctx[0].variants[0].id)) {
				input1.value = input1_value_value;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx, dirty)) && if_block7) {
				if_block7.p(ctx, dirty);
			} else {
				if_block7.d(1);
				if_block7 = current_block_type_1(ctx);

				if (if_block7) {
					if_block7.c();
					if_block7.m(form, null);
				}
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
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div9);
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
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { product } = $$props;
	let { otherData } = $$props;
	const { image, variants: [{ compare_at_price: comparePrice, price }], vendor, title, tags, metafields, link, skipFormatMoney = false, discountPercentage: shopifyDiscountPercentage = 0 } = product;
	let rating = false;

	metafields.forEach(metafield => {
		const { namespace, key, value } = metafield;

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

	const { currencySymbol, soldOutText, chooseMoreText, addToCartText } = otherData || {};
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
		discountPercentage = (comparePrice - price * 100) / price;
	}

	$$self.$$set = $$props => {
		if ('product' in $$props) $$invalidate(0, product = $$props.product);
		if ('otherData' in $$props) $$invalidate(16, otherData = $$props.otherData);
	};

	return [
		product,
		rating,
		discountPercentage,
		image,
		comparePrice,
		price,
		vendor,
		title,
		link,
		skipFormatMoney,
		currencySymbol,
		chooseMoreText,
		addToCartText,
		bestseller,
		onsale,
		srcTokens,
		otherData
	];
}

class Product_card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { product: 0, otherData: 16 });
	}

	get product() {
		return this.$$.ctx[0];
	}

	set product(product) {
		this.$$set({ product });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get otherData() {
		return this.$$.ctx[16];
	}

	set otherData(otherData) {
		this.$$set({ otherData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Product_card, {"product":{},"otherData":{}}, [], [], true);
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
	child_ctx[17] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	return child_ctx;
}

// (78:0) {#if collectionTexts.length > 1}
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

// (80:4) {#each collectionTexts as text}
function create_each_block_2(ctx) {
	let div;
	let button;
	let t0_value = /*text*/ ctx[21] + "";
	let t0;
	let button_class_value;
	let t1;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[8](/*text*/ ctx[21], ...args);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[21] && "product-category__button--active"}`);
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

			if (dirty & /*selectedParams*/ 4 && button_class_value !== (button_class_value = `button button--primary product-category__button ${/*selectedParams*/ ctx[2].text == /*text*/ ctx[21] && "product-category__button--active"}`)) {
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

// (104:0) {:else}
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

// (94:0) {#if isLoading}
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

// (114:6) {#if productData.length }
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
			if (dirty & /*productData, otherData*/ 17) {
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

// (118:14) {#if product.variants[0].price > 0}
function create_if_block_3(ctx) {
	let productcard;
	let current;

	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				product: /*product*/ ctx[17],
				otherData: /*otherData*/ ctx[4]
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
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[17];
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

// (117:12) {#each productData as product, index}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*product*/ ctx[17].variants[0].price > 0 && create_if_block_3(ctx);

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
			if (/*product*/ ctx[17].variants[0].price > 0) {
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

// (168:8) {#if index < 4}
function create_if_block_1(ctx) {
	let productcard;
	let current;

	productcard = new SvelteComponents_product_card_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				product: /*product*/ ctx[17],
				otherData: /*otherData*/ ctx[4]
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
			if (dirty & /*productData*/ 1) productcard_changes.product = /*product*/ ctx[17];
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

// (167:6) {#each productData as product, index}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*index*/ ctx[19] < 4 && create_if_block_1(ctx);

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
			if (/*index*/ ctx[19] < 4) if_block.p(ctx, dirty);
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

// (105:0) {#key productData}
function create_key_block(ctx) {
	let div2;
	let div0;
	let div0_class_value;
	let t;
	let div1;
	let div1_class_value;
	let current;
	let if_block = /*productData*/ ctx[0].length && create_if_block_2(ctx);
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
			if (/*productData*/ ctx[0].length) {
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

			if (dirty & /*productData, otherData*/ 17) {
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
	const { currencySymbol = "$", soldOutText = "Sold Out", chooseMoreText = "Choose Options", addToCartText = "Add To Cart", mobileCarousel = false, blocks = [] } = shopifyData || {};

	const otherData = {
		currencySymbol,
		soldOutText,
		chooseMoreText,
		addToCartText
	};

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
		if ('shopifyData' in $$props) $$invalidate(7, shopifyData = $$props.shopifyData);
	};

	return [
		productData,
		isLoading,
		selectedParams,
		mobileCarousel,
		otherData,
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
/******/ 			"section": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./js/sections/section.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;