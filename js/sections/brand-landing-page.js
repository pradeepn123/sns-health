import svelteWrapper from 'JsComponents/svelte-wrapper';
import ReviewCarousel from 'SvelteComponents/review-carousel/index.svelte';

export default () => {
    svelteWrapper(ReviewCarousel, 'review-carousel', '#review-carousel-data')
}