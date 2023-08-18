/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./js/sections/common.js ***!
  \*******************************/
var button = document.getElementsByClassName("collection-banner__cta")[0];
var contact = document.getElementById("title-description");
button.addEventListener("click", () => {
  //  $("html, body").animate({ scrollTop: 3200 }, "slow");
  $('html,body').animate({
    scrollTop: $(".category-section").offset().top
  }, 'slow');
});
/******/ })()
;