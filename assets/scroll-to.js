/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./js/sections/scroll-to.js ***!
  \**********************************/
var click = document.querySelector('[data-click]');
click.addEventListener("click", () => {
  $('html,body').animate({
    scrollTop: $(".footer__wrapper").offset().top
  }, 'slow');
});
/******/ })()
;