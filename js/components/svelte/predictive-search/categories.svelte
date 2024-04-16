<script>
    import CategoryBlock from "./category-block.svelte";
    export let categories;  
</script>

<div class="predictive-search__categories">
    <div class="predictive-search__categories-inner">
        {#each Object.keys(categories) as category}
            <CategoryBlock category={{title: category, content:categories[category]}}/>
        {/each}
    </div>
</div>