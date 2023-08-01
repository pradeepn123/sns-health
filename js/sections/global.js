import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
lazysizes.cfg.loadMode = 1;

//Custom Carousel
import CustomCarousel from '../components/custom-carousel';
import ProductCard from '../components/product-card';

const handleRedirectOnDiv = (item) => {
   const url =  item.dataset.url;
   if(url) {
    window.location.href = url;
   }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('custom-carousel', CustomCarousel);
    customElements.define('product-card', ProductCard);
    const clickHandle = document.querySelectorAll('[data-redirect-click]');
    clickHandle.forEach(item => item.addEventListener('click', (ev) => { 
        if(ev.target.closest('.swiper-navigation')) {
            return;
        }
        handleRedirectOnDiv(item)}));
})

