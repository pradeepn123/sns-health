/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getReviewData: () => (/* binding */ getReviewData),
/* harmony export */   getReviewDataAggregate: () => (/* binding */ getReviewDataAggregate)
/* harmony export */ });
/* unused harmony exports customerLocation, getProductData */
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

/***/ "./js/sections/customer-reviews.js":
/*!*****************************************!*\
  !*** ./js/sections/customer-reviews.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_customer_reviews_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/customer-reviews.svelte */ "./js/components/svelte/customer-reviews.svelte");


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_customer_reviews_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'customer-reviews', '#customer-reviews-data');
});

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
/******/ 			"customer-reviews": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./js/sections/customer-reviews.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;