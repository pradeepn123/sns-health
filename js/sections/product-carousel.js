import svelteWrapper from "JsComponents/svelte-wrapper";
import ProductCarousel from 'SvelteComponents/product-carousel.svelte';

export default () => {
    svelteWrapper(ProductCarousel,'product-carousel', '#product-data');
}