import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import handleClick from 'JsComponents/handleClick';

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
    }
    else {
      const that = this;
      let checkHtmlLength = window.setInterval(() => {
        if (this.innerHTML.length > 0) {
          that.initCarousel();
          handleClick(this)
          window.clearInterval(checkHtmlLength);
          checkHtmlLength = false
        }
      }, 500);
      window.setTimeout(() => {
        if (checkHtmlLength) {
          window.clearInterval(checkHtmlLength);
        }
      }, 5000)
    }
  }

  getCarouselSettings() {
    this.currentWidth = window.innerWidth;
    //default settings
    const defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    }
    let carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    const { breakpoints, ...otherSettings } = this.carouselSettings;
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          }
          else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }

          const { pagination, navigation, ...otherResponsiveSettings } = this.breakpointSettings;
          this.carouselSettings = { ...otherSettings, ...otherResponsiveSettings, pagination, navigation };
        }
      })
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      const { navigation, pagination, progressPagination, ...otherSwiperSettings } = this.carouselSettings;
      carouselSettings = { ...otherSwiperSettings };
      if (navigation) {
        const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        const navigationNext =  parentSelector.querySelector('.swiper-navigation--next');
        const navigationPrev = parentSelector.querySelector('.swiper-navigation--prev');
        carouselSettings = {
          ...carouselSettings, navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev,
          }
        }
      }
      if (pagination) {
        const swiperPagination = this.querySelector('.swiper-pagination');
        let pagination = {
          el: swiperPagination,
          clickable: true
        }
        if (progressPagination) {
          pagination = {
            el: swiperPagination,
            type: 'progressbar'
          }
        }

        carouselSettings = { ...carouselSettings, pagination }
      }
    }
    return carouselSettings;
  }

  initCarousel() {
    this.carouselSettings = JSON.parse(this.querySelector('[data-settings]')?.innerHTML || "{}");
    const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
    this.carouselContent = this.querySelector('[data-carousel-content]')?.innerHTML;
    this.placeholders = parentSelector.querySelector('[data-carousel-placeholder]')?.innerHTML;
    this.navigations = parentSelector.querySelector('[data-swiper-navigations]');
    this.currentWidth = window.innerWidth;
    const swiperNavigationElements = `
      <div class="swiper-navigation swiper-navigation--next ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="21" fill="#ED1C24"/>
      <path d="M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531" stroke="white" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>
    <div class="swiper-navigation swiper-navigation--prev swiper-button-disabled  ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#ED1C24"/>
        <path d="M22.7061 26.353L16.9413 20.5883L22.7061 14.8236" stroke="white" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>
    `
    this.carouselContent ?
      this.innerHTML = `<div class="carousel__container swiper hide" data-swiper-container>
    <div class="swiper-wrapper">
    ${this.carouselContent}
    </div> </div>
    <div class="swiper-pagination"></div>
    ${this.carouselSettings['customNavigation'] ? '' : swiperNavigationElements}
    ${this.placeholders ? this.placeholders : `<div class="carousel-placeholders"></div>`}`
      : this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    const carouselSettings = this.getCarouselSettings();
    console.log(carouselSettings, "carousel settings");
    this.swiper = new Swiper(this.container, {
      on: {
        beforeInit: () => {
          const { navigation, pagination} = carouselSettings || {};
          const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
          if (!navigation) {
            parentSelector.querySelectorAll('.swiper-navigation').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          }
          else {
            parentSelector.querySelector('.swiper-navigation--hide') && parentSelector.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }

          if (!pagination) {
            parentSelector.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          }
          else {
            parentSelector.querySelector('.swiper-pagination--hide') && parentSelector.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: (swiper) => {
          if (!!swiper.navigation) {
            swiper.navigation.destroy();
          }
        },
        afterInit: () => {
          parentSelector.querySelector('.carousel__container').classList.remove('hide');
          parentSelector.querySelector('.carousel-placeholders')?.classList.add('hide');
        },
        slideChange: (swiper) => {
          const {onSlideChange} = carouselSettings;
          window[onSlideChange] && window[onSlideChange](swiper);
        }
      },
      modules: [Navigation, Pagination],
      ...carouselSettings
    });

    this.swiper.on('activeIndexChange', (current) => {
      parentSelector.querySelector('.swiper-pagination-bullet-active')?.classList.remove('swiper-pagination-bullet-active');
      parentSelector.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]?.classList.add('swiper-pagination-bullet-active');
    })
  }
}
export default CustomCarousel;
