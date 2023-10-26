/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/sections/blog-post.js":
/*!**********************************!*\
  !*** ./js/sections/blog-post.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export blogItemTriggers */
/* harmony import */ var JsComponents_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/utils */ "./js/components/utils.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);
var navigateActive = true;
var swiperInstance;
var debounce = function debounce(callback) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timeoutId = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
var handleScroll = debounce((index, swiperInstance) => {
  //add check for each element , code shouldnt run if element doesnt exist
  var sectionIndex = index;
  swiperInstance.slideTo(sectionIndex - 1);
  var prevActiveSlider = document.querySelector('.blog-page-list-section__icon-text.active');
  var prevActiveSliderIndex = prevActiveSlider.dataset.slideIndex;
  if (prevActiveSliderIndex == sectionIndex) return;
  var setActiveSlider = document.querySelector("[data-slide-index='".concat(sectionIndex, "']"));
  setActiveSlider.classList.add('active'); //add check for eg , setActiveSlider?.classList.add('active');
  prevActiveSlider.blur(); //we dont need this 
  prevActiveSlider.classList.remove('active');
}, 100);
var blogItemTriggers = () => {
  var _document$querySelect;
  swiperInstance = (_document$querySelect = document.querySelector('.blog-page-list-section__content .swiper')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.swiper;
  var blogItems = document.querySelectorAll('[data-blog-post-container]');
  var callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.blog-page-list-section').classList.add('isSticky'); //add checl
        if (navigateActive) {
          handleScroll(entry.target.dataset.sectionIndex, swiperInstance);
        }
      }
    });
  };
  var options = {
    rootMargin: "40px",
    threshold: 0.8
  };
  var blogObserver = new JsComponents_utils__WEBPACK_IMPORTED_MODULE_2__.IntersectObserver(callback, blogItems, options);
  blogObserver.init();
};

// border add when section become sticky 

(function (d) {
  var newEl = d.createElement("div");
  newEl.classList.add("myObserver");
  var ref = d.querySelector(".blog-page-list-section");
  ref.before(newEl);
  var observer = new IntersectionObserver(_ref => {
    var [entry] = _ref;
    var blogSection = d.querySelector(".blog-page-list-section");
    blogSection.classList.toggle("sticky-element", entry.intersectionRatio === 0);
    blogSection.style.borderBottom = entry.intersectionRatio === 0 ? '1px solid #DADADA' : 'none';
  }, {
    threshold: [0, 1]
  });
  observer.observe(d.querySelector(".myObserver"));
})(document);
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);
document.addEventListener('DOMContentLoaded', () => {
  blogItemTriggers();
  document.querySelectorAll('[blog-list]').forEach(item => item.addEventListener('click', ev => {
    var _document$querySelect2;
    ev.preventDefault();
    navigateActive = false;
    swiperInstance = (_document$querySelect2 = document.querySelector('.blog-page-list-section__content .swiper')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.swiper;
    var currentSliderTarget = ev.target.closest('[blog-list]');
    var slideIndex = currentSliderTarget.dataset.slideIndex; //add check 
    handleScroll(slideIndex, swiperInstance);
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(window, 1, {
      scrollTo: {
        y: "#blog-post-".concat(slideIndex),
        offsetY: 225,
        autoKill: false
      },
      onComplete: () => {
        navigateActive = true;
      }
    });
  }));
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blog-post": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./js/sections/blog-post.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;