<script>
    import { updateSearchQuery } from './searchStore.js'
    import { onMount } from "svelte";
    import Categories from "./categories.svelte";
    import Products from "./product.svelte";
    import {getPredictiveSearch, getSearchResult} from 'JsComponents/get-data';
    let showPredictiveSearch = false;
    let isLoading = true

    let data = {};

    const handleSearchInputChange = async (ev) => {
        isLoading = true
        const input = ev.target;
        const value = input.value;
        if(!value || [...value].length <= 3 ) return showPredictiveSearch = false;
        updateSearchQuery(value);
        const predictiveData = await getPredictiveSearch(value);
        const searchData = await getSearchResult(value,6);
        const currentPredictiveData = predictiveData.data.predictiveSearch
        const curatedSearchData = searchData.data.search.edges.map(({node}) => node)
        const curatedObj = {
            products: curatedSearchData,
            ...currentPredictiveData
        }
       data = {...curatedObj};
       console.log(curatedObj, "curatedObj");
       data = data;
      showPredictiveSearch = true
      isLoading = false
    }

    let predictiveSearchInput = document.querySelectorAll('[data-predictive-search-input]');
    const debounce = (func, delay) => {
        let debounceTimer
        return function () {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => func.apply(context, args), delay)
        }
    }

    onMount(() => {
        predictiveSearchInput.forEach((predictiveSearch => {
            predictiveSearch.addEventListener('input', debounce(handleSearchInputChange), 3000);
            window.addEventListener('click', (e) => {
                if(e.target.closest != predictiveSearch) return showPredictiveSearch = false
            })
        }))
    });
</script>
{#if showPredictiveSearch}
    <div class="predictive-search">
        {#if isLoading}
            <div class="spinner"></div>
        {:else}
            <Categories categories={{suggestions:data?.queries, collections:data?.collections , pages:data?.pages}}/>
            <Products products={data?.products}/>
        {/if}
    </div>
{/if} 
