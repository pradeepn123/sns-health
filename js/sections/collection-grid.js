import svelteWrapper from "JsComponents/svelte-wrapper";
import CollectionComponent from 'SvelteComponents/collection-component.svelte';

export default () => {
  return svelteWrapper(CollectionComponent, 'collection-component');
}