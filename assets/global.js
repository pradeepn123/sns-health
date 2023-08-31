(()=>{"use strict";var e,t={3487:(e,t,i)=>{var r=i(7090),n=i.n(r),o=(i(5507),i(1770),i(1035),i(9145),i(3501),i(5021)),a=i(5861),s=i(4572),c=function(){var e=(0,a.Z)((function*(e){var t="/collections/".concat(e,"?view=data-json"),i=yield fetch(t);return yield i.json()}));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((function*(e){var t="/products/".concat(e,".js"),i=yield fetch(t);return yield i.json()}));return function(t){return e.apply(this,arguments)}}();function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}class p{constructor(e,t){(0,s.Z)(this,"send",(()=>{window.dataLayer=window.dataLayer||[],window.datalayer=[],window.dataLayer.push(u({event:this.eventName},this.data))})),this.eventName=e,this.data=t}}var v=()=>{var e=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)}),t=e.promotion_name,i=e.promotion_id;if(t)return{promotionName:t,promotionId:i}},h=e=>e.map(((e,t)=>{var i=null==e?void 0:e.variant_title;i||(i=e.variants?e.variants[0].title:e.product_title);var r=(null==e?void 0:e.price)||e.variants[0].price;return{item_id:"".concat(e.id),item_name:"".concat(e.title),index:"".concat(t),item_brand:"".concat(e.vendor),item_variant:"".concat(i),price:.01*r,quantity:1}})),m=()=>{var e=document.querySelectorAll('[action = "/cart/add"]'),{promotionId:t}=v(),i='<input type="hidden" name=properties[_promotionId] value=\''.concat(t,"' />");t&&e.forEach((e=>{e.querySelector('[name="properties[_promotionId]"]')||e.insertAdjacentHTML("beforeend",i)}))},w=(e,t,i)=>"".concat(e,"?promotion_id=").concat(t,"&promotion_name=").concat(i),f=function(){var e=(0,a.Z)((function*(e,t,i){new p("custom_promotion_click",{promotion_id:i,promotion_name:t}).send(),window.location.href=w(e,i,t)}));return function(t,i,r){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)((function*(e,t,i){var r=[yield l(e)],n=u(u({},{promotion_id:i,item_list_id:i,item_list_name:t}),{},{items:h(r)});new p("custom_select_item",n).send()}));return function(t,i,r){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((function*(e,t,i){var r=yield c(e),n=u(u({},{promotion_id:i,item_list_id:i,item_list_name:t}),{},{items:h(r)});new p("custom_view_item_list",n).send()}));return function(t,i,r){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)((function*(e,t){var i,r,n=[yield l(e)],o={currency:null===(i=window.Shopify)||void 0===i||null===(i=i.currency)||void 0===i?void 0:i.active,value:null===(r=n[0])||void 0===r?void 0:r.price,promotion_id:t,items:h(n)};new p("custom_view_item",o).send()}));return function(t,i){return e.apply(this,arguments)}}(),_=i(9910),S=()=>{document.querySelectorAll('[action="/cart/add"]').forEach((e=>{new _.Z(e).on("submit",(e=>(e.preventDefault(),!1)))}))};const O=e=>{(e?e.querySelectorAll("[data-js-click]"):document.querySelectorAll("[data-redirect-click]")).forEach((e=>e.addEventListener("click",(t=>{t.target.closest(".product-card__atc")||(e=>{var t=e.dataset.url||e.href;e.closest("[data-promotion]")||e.closest("[data-promotion-product-url]")?((e,t)=>{if(e.closest("[data-promotion]")){var i=e.dataset.promotionName,r=e.dataset.promotionId;f(t,i,r)}if(e.closest('[data-section-type="collection"]')){var{promotionId:n}=v()||{};if(n){var o=e.href.split("?")[0];o=o.split("/products/")[1],y(o,n)}}})(e,t):t&&(window.location.href=t)})(e)}))))};var q=i(4925),L=i(8592),k=i(5560),E=["breakpoints"],j=["pagination","navigation"],P=["navigation","pagination","progressPagination"];function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}class A extends HTMLElement{constructor(){super(),this.carouselSettings,this.currentWidth,this.innerHTML,this.container}connectedCallback(){if(this.innerHTML.length>0)this.initCarousel();else{var e=this,t=window.setInterval((()=>{this.innerHTML.length>0&&(e.initCarousel(),window.clearInterval(t),t=!1)}),500);window.setTimeout((()=>{t&&window.clearInterval(t)}),5e3)}}getCarouselSettings(){this.currentWidth=window.innerWidth;var e={slidesPerView:1,spaceBetween:15,speed:1e3,navigation:!1},t=this.carouselSettings,{breakpoints:i}=t,r=(0,q.Z)(t,E);if(i&&(this.breakpoints=Object.keys(i),this.breakpoints.forEach(((e,t)=>{if(this.currentWidth>=e){i[e]?this.breakpointSettings=i[e]:this.breakpointSettings=i[this.breakpoints[t-1]];var n=this.breakpointSettings,{pagination:o,navigation:a}=n,s=(0,q.Z)(n,j);this.carouselSettings=I(I(I({},r),s),{},{pagination:o,navigation:a})}}))),this.carouselSettings&&Object.keys(this.carouselSettings).length>0){var n=this.carouselSettings,{navigation:o,pagination:a,progressPagination:s}=n;if(e=I({},(0,q.Z)(n,P)),o){var c=this.querySelector(".swiper-navigation--next"),l=this.querySelector(".swiper-navigation--prev");e=I(I({},e),{},{navigation:{nextEl:c,prevEl:l}})}if(a){var d=this.querySelector(".swiper-pagination"),u={el:d,clickable:!0};s&&(u={el:d,type:"progressbar"}),e=I(I({},e),{},{pagination:u})}}return e}initCarousel(){var e,t;this.carouselSettings=JSON.parse((null===(e=this.querySelector("[data-settings]"))||void 0===e?void 0:e.innerHTML)||"{}"),this.carouselContent=this.querySelector("[data-carousel-content]").innerHTML,this.placeholders=null===(t=this.querySelector("[data-carousel-placeholder]"))||void 0===t?void 0:t.innerHTML,this.currentWidth=window.innerWidth,this.innerHTML='<div class="carousel__container swiper hide" data-swiper-container>\n    <div class="swiper-wrapper">\n    '.concat(this.carouselContent,'\n    </div> </div>\n    <div class="swiper-pagination"></div>\n    <div class="swiper-navigation swiper-navigation--next ').concat(this.carouselSettings.overflowNagivation?"swiper-navigation--overflow":"",' ">\n      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">\n      <circle cx="21" cy="21" r="21" fill="#ED1C24"/>\n      <path d="M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531" stroke="white" stroke-width="2" stroke-linecap="square"/>\n      </svg>\n    </div>\n    <div class="swiper-navigation swiper-navigation--prev ').concat(this.carouselSettings.overflowNagivation?"swiper-navigation--overflow":"",' ">\n      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">\n        <circle cx="21" cy="21" r="21" fill="#ED1C24"/>\n        <path d="M22.7061 26.353L16.9413 20.5883L22.7061 14.8236" stroke="white" stroke-width="2" stroke-linecap="square"/>\n      </svg>\n    </div>\n    ').concat(this.placeholders?this.placeholders:'<div class="carousel-placeholders"></div>'),this.container=this.querySelector("[data-swiper-container]");var i=this.getCarouselSettings();this.swiper=new L.Z(this.container,I({on:{beforeInit:()=>{var{navigation:e,pagination:t}=i||{};e?this.querySelector(".swiper-navigation--hide")&&this.querySelectorAll(".swiper-navigation--hide").forEach((e=>e.classList.remove("swiper-pagination--hide"))):this.querySelectorAll(".swiper-navigation").forEach((e=>e.classList.add("swiper-navigation--hide"))),t?this.querySelector(".swiper-pagination--hide")&&this.querySelectorAll(".swiper-pagination--hide").forEach((e=>e.classList.remove("swiper-pagination--hide"))):this.querySelectorAll(".swiper-pagination").forEach((e=>e.classList.add("swiper-pagination--hide")))},init:e=>{if(e.navigation){e.navigation.destroy();var t=this.querySelector(".carousel__container");O(t)}},afterInit:()=>{this.querySelector(".carousel__container").classList.remove("hide"),this.querySelector(".carousel-placeholders").classList.add("hide")}},modules:[k.W_,k.tl]},i)),this.swiper.on("activeIndexChange",(e=>{var t,i;null===(t=this.querySelector(".swiper-pagination-bullet-active"))||void 0===t||t.classList.remove("swiper-pagination-bullet-active"),null===(i=this.querySelectorAll(".swiper-pagination-bullet")[e.activeIndex])||void 0===i||i.classList.add("swiper-pagination-bullet-active")}))}}const C=A;class M extends HTMLElement{constructor(){super(),this.HTMLElement=this.innerHTML}}const D=M;n().cfg.loadMode=1,document.addEventListener("DOMContentLoaded",(()=>{var e,t;(0,o.z2)(),(()=>{document.querySelectorAll("[data-megamenu-mobile]").forEach((e=>{var t=e.dataset.megamenuId;if(t){var i=document.querySelector("[data-mobile-megamenu-target-".concat(t,"]"));i&&i.appendChild(e)}})),document.querySelectorAll("[data-megamenu-desktop]").forEach((e=>{var t=e.dataset.megamenuId;if(t){var i=document.querySelector("[data-desktop-megamenu-target-".concat(t,"]"));i&&i.appendChild(e)}}));var e=document.querySelector(".shopify-section__header"),t=document.querySelector(".header__search-bar-wrapper--mobile"),i=document.querySelector(".nav-bar__inner"),r=document.querySelector(".header__action-item-link--search");Window.custom={rebuyTag:"minerals"},window.searchOpen=!0,window.addEventListener("scroll",(()=>{var n;n=window.scrollY,t.style.opacity=1-n/85,i.style.opacity=1-n/10,r.style.opacity=0+n/10,n<=150?e.classList.contains("shopify-section__header--fixed")&&e.classList.remove("shopify-section__header--fixed"):e.classList.add("shopify-section__header--fixed")}))})(),customElements.define("custom-carousel",C),customElements.define("product-card",D),O(),null===(e=document.querySelectorAll("[data-test]"))||void 0===e||e.forEach((e=>{e.addEventListener("click",(e=>{var t=e.target.closest("[data-container]"),i=null==t?void 0:t.querySelector("[data-content-half]"),r=null==t?void 0:t.querySelector("[data-content-full]");i.classList.contains("text-wrap__description--hidden")?(i.style.display="none",r.style.display="block"):(i.style.display="block",r.style.display="none")}))})),(()=>{var e=window.location.href;if(e.includes("/collections/")){var t=e.split("/collections/")[1].split("?")[0],{promotionName:i,promotionId:r}=v()||{};i&&(g(t,i,r),m())}if(e.includes("/products/")){var n=e.split("/products/")[1].split("?")[0],{promotionId:o}=v()||{};o&&(b(n,o),m())}})(),S(),window.addEventListener("variant:changed",(()=>{document.querySelectorAll('[data-action="add-to-cart"]').forEach((e=>{e.removeAttribute("data-action")})),m(),S()})),window.addEventListener("modal:open",(()=>{S(),document.querySelectorAll('[action="/cart/add"]').forEach((e=>{var t=e.querySelector('[type="submit"]'),i=new _.Z(t);i.off(),i.on("click",(e=>{e.preventDefault();var t=e.target.closest('[action="/cart/add"]'),i=Rebuy.util.serializeForm(t);return Rebuy.Cart.addItem(i)}))})),m()})),document.addEventListener("rebuy:cart.add",(e=>{var t,{item:i}=null==e?void 0:e.detail;null!==(t=i.properties)&&void 0!==t&&t._promotionId&&((e,t)=>{var i=h([e]),[{price:r}]=i,n={promotion_id:t,currency:"".concat(window.Shopify.currency.active),value:"".concat(r),items:i};new p("custom_add_to_cart",n).send()})(i,i.properties._promotionId)})),window.ProductList&&(window.ProductList.prototype.afterRender=function(){(()=>{var e=document.querySelectorAll("[data-promotion-product-url]"),{promotionId:t,promotionName:i}=v();i&&e.forEach((e=>{var r=w(e,t,i);e.href=r}))})(),m();var e=document.querySelector('[data-section-type="collection"]');O(e)}),(t=document.querySelector('[data-action="toggle-mini-cart"]'))&&(t.removeAttribute("data-action"),t.removeAttribute("href")),t.addEventListener("click",(()=>{var e,t;null!==(e=window.Rebuy)&&void 0!==e&&null!==(e=e.SmartCart)&&void 0!==e&&e.show&&(null===(t=window.Rebuy)||void 0===t||null===(t=t.SmartCart)||void 0===t||t.show())}))}))}},i={};function r(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,i,n,o)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,n,o]=e[d],s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](i[c])))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.j=172,(()=>{var e={172:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,[a,s,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var d=c(r)}for(t&&t(i);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},i=self.webpackChunkshoptrade_Shopify_Development=self.webpackChunkshoptrade_Shopify_Development||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=r.O(void 0,[216],(()=>r(3487)));n=r.O(n)})();