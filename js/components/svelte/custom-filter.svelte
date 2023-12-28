
<script>
  import {onMount} from "svelte";
  import Accordion from "./accordion.svelte";

  export let data;
  export let loading;
  export let appliedFilterObject;

  function handleFilterClick(e) {
    const category = e.currentTarget.querySelector('.collection-filter-value').dataset.filterCategory;
    const value = e.currentTarget.querySelector('.collection-filter-value').dataset.filterValue;
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


<div class="container">

</div>

<div>
  <li>
    <h3>Brand</h3>
    <div>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="brand" data-filter-value="fairlife">fairlife</span> <span class="collection-filter-count"> (10)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="brand" data-filter-value="grenade">grenade</span> <span class="collection-filter-count"> (37)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="brand" data-filter-value="owyn">owyn</span> <span class="collection-filter-count"> (17)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="brand" data-filter-value="prime">prime</span> <span class="collection-filter-count"> (8)</span></button>
    </div>
    <h3>Diet</h3>
    <div>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="diet" data-filter-value="keto">keto</span> <span class="collection-filter-count"> (193)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="diet" data-filter-value="vegan">vegan</span> <span class="collection-filter-count"> (215)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="diet" data-filter-value="organic">organic</span> <span class="collection-filter-count"> (50)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="diet" data-filter-value="paleo">paleo</span> <span class="collection-filter-count"> (24)</span></button>
    </div>
    <h3>Flavor</h3>
    <div>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="flavor" data-filter-value="banana">banana</span> <span class="collection-filter-count"> (3)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="flavor" data-filter-value="chocolate">chocolate</span> <span class="collection-filter-count"> (22)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="flavor" data-filter-value="vanilla">vanilla</span> <span class="collection-filter-count"> (20)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="flavor" data-filter-value="fudged up">fudged up</span> <span class="collection-filter-count"> (2)</span></button>
      <button on:click={handleFilterClick}><span class="collection-filter-value" data-filter-category="flavor" data-filter-value="oreo">oreo</span> <span class="collection-filter-count"> (2)</span></button>
    </div>
  </li>
</div>