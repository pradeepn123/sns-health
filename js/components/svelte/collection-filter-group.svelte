<script>
  import CollectionFilterComponent from "./collection-filter.svelte";

  export let filters;
  export let filterDrawerOpen;
  export let toggleFilterDrawer;
  export let appliedFilterObject;
  export let filterNames;

 $: FilterDataArray = Object.keys(filters).map(filterKey => { return {
   title: filterKey,
   values: filters[filterKey]
 }})

 $:appliedFilterData = Object.keys(appliedFilterObject).map((item) => {
          const key = item;
          if(key == "sortBy") return false;
           const dataArr = appliedFilterObject[key] || [];
           if(dataArr && dataArr.length > 0) {
           return dataArr.map(element => {
              return {key, value: element}
           });
          }
    }).filter(item => item && item).flat();

  function removeFilter(event) {
    const category = event.target.dataset.key;
    const option = event.target.dataset.value;
    appliedFilterObject[category] = appliedFilterObject[category].filter(filter=>filter != option);
    appliedFilterObject = appliedFilterObject;
  }

  function clearAllFilters() {
    Object.keys(appliedFilterObject).forEach((item) => {
      appliedFilterObject[item] = []
    })
    appliedFilterObject = appliedFilterObject;
  }
</script>

<div class="collection-filter-wrapper" data-drawer-open={filterDrawerOpen} >
  <div class="collection-filter-inner">
    <div class="collection-filter-header">
      <button class="collection-drawer__close" data-action="close-drawer" on:click={toggleFilterDrawer}>
        <svg focusable="false" class="icon icon--close" viewBox="0 0 19 19" role="presentation">
          <path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <div class="collection-filter-contents">
      <div class="custom-filter">
      <p class="custom-filter_heading"> Filters </p>
      {#if appliedFilterData.length > 0}<p class="custom-filter_caption"> Refined By   <button on:click={clearAllFilters}>Clear All</button></p> {/if}
      {#each appliedFilterData as selectedFilterItem} 
        <p class="filter_selectedFilterItem"><span>{selectedFilterItem.key} : <strong>{selectedFilterItem.value}</strong></span><button class="collection-filter-remove" on:click={removeFilter}  data-key={selectedFilterItem.key} data-value={selectedFilterItem.value}>&#10005;</button></p>
     {/each}
    </div>
      {#each FilterDataArray as filterItem, index (filterItem.title + '-' + index)}
        <CollectionFilterComponent name={filterNames[filterItem.title]} bind:filterItem bind:appliedFilterObject />
      {/each}
    </div>
    <!-- <div class="collection-filter-header results">
      <button class="collection-drawer__close" data-action="close-drawer" on:click={toggleFilterDrawer}>
        View Results
      </button>
    </div> -->
  </div>
</div>
<button class="collection-filter-drawer-overlay" on:click={toggleFilterDrawer}></button>