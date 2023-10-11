import svelteWrapper from "JsComponents/svelte-wrapper";
import ProductCard from 'SvelteComponents/product-card.svelte';

export default () => {
    return svelteWrapper(ProductCard,'custom-product-card', '#product-json');
}