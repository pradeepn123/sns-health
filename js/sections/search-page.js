import svelteWrapper from "JsComponents/svelte-wrapper";
import SearchComponent from 'SvelteComponents/search-component.svelte';

export default () => {
  return svelteWrapper(SearchComponent, 'search-component');
}