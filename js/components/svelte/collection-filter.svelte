<script>
  import Accordion from "SvelteComponents/accordion.svelte";
  import Checkbox from "SvelteComponents/checkbox.svelte";
  export let name;
  export let filterItem;
  export let appliedFilterObject;

  $:appliedFilters = appliedFilterObject;

  $: ({ title, values } = filterItem);
  $: checkboxData = Object.keys(values).map((filterOption) => {
    return {
      title: filterOption,
      count: values[filterOption],
    };
  });
   console.log(title,appliedFilterObject[title])
  $: selectedFilters = appliedFilterObject[title];
  $: console.log('selectedFilt', checkboxData);
  $: totalCount = Object.keys(values).reduce((acc, filterOption)=>{
    if(values[filterOption]) {
      acc += values[filterOption]
    }
    return acc;
  },0)
  $: console.log(totalCount)

  function handleFilterClick(e) {
    const category = e.currentTarget.nextElementSibling.dataset.filterCategory;
    const value = e.currentTarget.nextElementSibling.dataset.filterValue;
    if(!appliedFilterObject[category].includes(value)) {
      appliedFilterObject[category].push(value)
    } else {
      const index = appliedFilterObject[category].indexOf(value);
      if (index > -1) {
        appliedFilterObject[category].splice(index, 1);
      }
    }
    appliedFilterObject = appliedFilterObject;
  }
</script>

{#if totalCount > 0}
  <div class="custom-filter">
      <div class="custom-filer__header">
        <span class="icon"></span>
        <span class="head">{name}</span>
      </div>
      <div class="details">
        {#each checkboxData as filterItem, index (filterItem.title + '-' + index)}
        {#if filterItem.count > 0}
          <Checkbox checked={selectedFilters.includes(filterItem.title)} handler={handleFilterClick} >
            <div slot="content" data-filter-category={title} data-filter-value={filterItem.title}>
              <div>{filterItem.title || ""}</div>
              <div>({filterItem.count || ""})</div>
            </div>
          </Checkbox>
          {/if}
        {/each}
      </div>
  </div>
{/if}
