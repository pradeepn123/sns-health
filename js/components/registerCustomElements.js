import CustomCarousel from 'JsComponents/custom-carousel';
import ProductCard from 'JsComponents/product-card';

export default () => {
    customElements.define('custom-carousel', CustomCarousel);
    customElements.define('product-card', ProductCard);
}