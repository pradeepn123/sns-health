import { IntersectObserver } from 'JsComponents/utils';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let navigateActive = true;
let swiperInstance ;

const debounce = (callback, wait=0) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
}

const handleScroll = debounce((index, swiperInstance) => { //add check for each element , code shouldnt run if element doesnt exist
    const sectionIndex = index;
    swiperInstance.slideTo(sectionIndex - 1);
    const prevActiveSlider = document.querySelector('.blog-page-list-section__icon-text.active');
    const prevActiveSliderIndex = prevActiveSlider.dataset.slideIndex;
    if(prevActiveSliderIndex == sectionIndex) return;
    const setActiveSlider = document.querySelector(`[data-slide-index='${sectionIndex}']`)
    setActiveSlider.classList.add('active'); //add check for eg , setActiveSlider?.classList.add('active');
    prevActiveSlider.blur(); //we dont need this 
    prevActiveSlider.classList.remove('active');
},100)

export const blogItemTriggers = () => {
    swiperInstance = document.querySelector('.blog-page-list-section__content .swiper')?.swiper;
    const blogItems = document.querySelectorAll('[data-blog-post-container]');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.blog-page-list-section').classList.add('isSticky'); //add checl
                if(navigateActive) {
                  handleScroll(entry.target.dataset.sectionIndex, swiperInstance)
                }
            }
        });
    };
    let options = {
        rootMargin: "40px",
        threshold: 0.8,
      };
    const blogObserver = new IntersectObserver(callback, blogItems,options);
    blogObserver.init();
}


// border add when section become sticky 

(function (d) {
    const newEl = d.createElement("div");
    newEl.classList.add("myObserver");
    const ref = d.querySelector(".blog-page-list-section");
    ref.before(newEl);
  
    const observer = new IntersectionObserver(([entry]) => {
      const blogSection = d.querySelector(".blog-page-list-section");
      blogSection.classList.toggle("sticky-element", entry.intersectionRatio === 0);
      blogSection.style.borderBottom = entry.intersectionRatio === 0 ? '1px solid #DADADA' : 'none';
    }, { threshold: [0, 1] });
  
    observer.observe(d.querySelector(".myObserver"));
  })(document);

 gsap.registerPlugin(ScrollToPlugin); 
document.addEventListener('DOMContentLoaded', () => {
    blogItemTriggers();
    document.querySelectorAll('[blog-list]').forEach(item => item.addEventListener('click', (ev) => {
        ev.preventDefault();
        navigateActive = false
        swiperInstance = document.querySelector('.blog-page-list-section__content .swiper')?.swiper;
       const currentSliderTarget = ev.target.closest('[blog-list]');
        const slideIndex =currentSliderTarget.dataset.slideIndex; //add check 
        handleScroll(slideIndex, swiperInstance);
        gsap.to(window,1, {scrollTo:{y:`#blog-post-${slideIndex}`, offsetY:250 , autoKill: false}, onComplete:()=>{
            navigateActive = true
        }});
    }))
})

