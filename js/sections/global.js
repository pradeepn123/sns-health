import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
lazysizes.cfg.loadMode = 1;

//Custom Carousel
import CustomCarousel from '../components/custom-carousel';

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('custom-carousel', CustomCarousel);
})