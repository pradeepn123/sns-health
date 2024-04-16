<script>
    import { onMount } from "svelte";
    import { searchQuery, updateSearchQuery } from "./searchStore.js";
    export let category;
    let queries = [];
    $:$searchQuery, updateText();

    const boldString = (categoryTitle, queryString) => {
        if(!categoryTitle) return
        let regex = new RegExp(queryString, 'g');
        return categoryTitle.replace(regex, `<b>${queryString}</b>`);  
    };

    const updateText =() =>{
        category.content.forEach(item => {
            let {title, text} = item;
            if(!title && !text) return
            if(!title) {
               title = text
            }
            queries.push({title: boldString(title?.toLowerCase(), $searchQuery.toLowerCase()), handle: item?.handle})
        })
    };
    const updateQuery = (query) => {
        updateSearchQuery(query);
    }
    
</script>
<div class="predictive-search__category-block">
    {#if category?.content?.length}
        <p class="predictive-search__category-title">{category.title}</p>
        <div class="predictive-search__category-content">
            {#each queries as query, index}
                {#if query?.handle != undefined}
                        <a href={`${category.title == 'collections' ? '/collections/' : '/pages/' }${query?.handle}`}>
                            <p class="predictive-search__category-content-title">{@html query?.title}</p>
                        </a>
                {:else}
                       <p class="predictive-search__category-item" on:click={event => updateQuery(category?.content[index]?.title || category?.content[index]?.text)}> {@html query?.title} </p>
                {/if}
            {/each}
        </div>
    {/if}
</div>
