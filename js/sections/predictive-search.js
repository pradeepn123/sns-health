import svelteWrapper from "JsComponents/svelte-wrapper";
import PredictiveSearch from 'SvelteComponents/predictive-search/index.svelte';

export default () => {
    svelteWrapper(PredictiveSearch,'predictive-search-result');
}