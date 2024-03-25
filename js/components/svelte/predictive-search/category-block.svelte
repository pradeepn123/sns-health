<script>
    import { searchQuery } from "./searchStore.js";
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
            queries.push(boldString(title?.toLowerCase(), $searchQuery.toLowerCase()))
        })
    }
    
    
</script>
<div class="predictive-search__category-block">
    {#if category?.content?.length}
        <p class="predictive-search__category-title">{category.title}</p>
        <ul class="predictive-search__category-content">
            {#each queries as query}
                <li>{@html query}</li>
            {/each}
        </ul>
    {/if}
</div>
