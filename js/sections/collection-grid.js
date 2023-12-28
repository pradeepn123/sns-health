import svelteWrapper from "JsComponents/svelte-wrapper";
import CollectionGrid from 'SvelteComponents/collection-grid.svelte';

export default () => {
  return svelteWrapper(CollectionGrid, 'collection-grid');
}