<script>
    import { updateSearchQuery,searchQuery } from './searchStore.js'
    import { onMount } from "svelte";
    import Categories from "./categories.svelte";
    import Products from "./product.svelte";
    import {getPredictiveSearch, getSearchResult} from 'JsComponents/get-data';
    let showPredictiveSearch = false;
    let isLoading = true

    let data = {};

    $:$searchQuery, handleSearchInputChange();


    const updateQueryParams = (ev) => {
        updateSearchQuery(ev.target.value);
    }

    const handleSearchInputChange = async () => {
        showPredictiveSearch = true
        isLoading = true
        const value = $searchQuery;
        predictiveSearchInput.forEach((predictiveSearch => {
            predictiveSearch.value = $searchQuery;
        }))
        if(!value || [...value].length <= 3 ) return showPredictiveSearch = false;
        const predictiveData = await getPredictiveSearch(value);
        const searchData = await getSearchResult(value,6);
        const currentPredictiveData = predictiveData.data.predictiveSearch
        const curatedSearchData = searchData.data.search.edges.map(({node}) => node)
        const curatedObj = {
            products: curatedSearchData,
            ...currentPredictiveData
        }
       data = {...curatedObj};
       data = data;
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
            predictiveSearch.addEventListener('input', debounce(updateQueryParams), 3000);
            document.addEventListener('click', (ev) => {
               if(ev.target.closest('.header__search-bar-wrapper') || ev.target.closest('.predictive-search__category-content')) {
                    if(ev.target.closest('.header__search-bar-wrapper--mobile').classList.contains('is-fixed')){
                        showPredictiveSearch = true;
                    }
                    else showPredictiveSearch = false;
               }
               else {
                showPredictiveSearch = false;
               }
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
