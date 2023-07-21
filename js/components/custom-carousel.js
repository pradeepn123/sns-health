import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.HTMLElement = this.innerHTML;
    this.carouselSettings = JSON.parse(this.querySelector('[data-settings]')?.innerHTML || "{}");
    this.currentWidth = window.innerWidth;
    const {breakpoints, ...otherSettings } = this.carouselSettings;
    if(breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
       this.breakpoints.forEach((breakpoint,index) => {
        if(this.currentWidth >= breakpoint) {
          if(breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          }
          else {
            this.breakpointSettings = breakpoints[this.breakpoints[index-1]];
          }
          const {pagination, navigation, ...otherResponsiveSettings } = this.breakpointSettings;
          this.carouselSettings = {pagination, navigation, ...otherSettings, ...otherResponsiveSettings};
          }
       })
    }
    this.innerHTML = `<div class="carousel__container swiper" data-swiper-container>
    <div class="swiper-wrapper">
    ${this.HTMLElement}
    </div> </div>
    <div class="swiper-pagination"></div>
    ${this.carouselSettings.navigation ?  
    `<div class="swiper-navigation swiper-navigation--next">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="21" fill="#ED1C24"/>
      <path d="M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531" stroke="white" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>
    <div class="swiper-navigation swiper-navigation--prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#ED1C24"/>
        <path d="M22.7061 26.353L16.9413 20.5883L22.7061 14.8236" stroke="white" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>` : ''
    }
   `
    this.container = this.querySelector('[data-swiper-container]');

  }

  // Observe one or multiple elements
  connectedCallback() {
    this.initCarousel();
  }

  getCarouselSettings () {
    const defaultSettings = {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 1000,
        navigation: false
    }
    let carouselSettings = defaultSettings;
    if(this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
          const {navigation , pagination, ...otherSwiperSettings } = this.carouselSettings;
          carouselSettings = {...otherSwiperSettings};
            if(navigation) {
              carouselSettings = {...carouselSettings,navigation: {
                nextEl: '.swiper-navigation--next',
                prevEl: '.swiper-navigation--prev',
              } }
            }
            if(pagination) {
              carouselSettings = {...carouselSettings, pagination: {
                el: '.swiper-pagination',
                clickable: true
              }, }
            }
    }
    return carouselSettings;
  }

  initCarousel() {
 
      const carouselSettings = this.getCarouselSettings() || {};
      this.swiper = new Swiper(this.container, {
        modules: [Navigation, Pagination],
        ...carouselSettings
      });
  }
}
export default CustomCarousel;
