import svelteWrapper from "JsComponents/svelte-wrapper";
import CustomerReviews from 'SvelteComponents/customer-reviews.svelte';

export default () => {
    svelteWrapper(CustomerReviews, 'customer-reviews', '#customer-reviews-data')
}
