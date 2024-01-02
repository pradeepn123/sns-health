<script>
export let totalPages
export let currentPage
export let next
export let previous
export let scrollToTop

function updatePagination(pageNumber) {
  currentPage = pageNumber;
  scrollToTop()
}

function updatePageNumbers() {
  return [currentPage +2, currentPage +1, currentPage, currentPage -1, currentPage -2].reverse();
}

$: pagesArrays = currentPage && updatePageNumbers()
</script>
<div class="collection_pagination container"> 
  {#if currentPage != 1}
    <button class="collection_pagination__prevBtn" on:click={previous}><span> &lt; <span class="collection_pagination__button
      collection_pagination__button">Previous</span></span></button> 
  {:else}
    <div></div>
  {/if}
  <div class="collection_pagination_count">
    {#each pagesArrays as page}
      {#if page >= 1 && page <= totalPages }
        {#if currentPage == page}
          <div class="collection_pagination_count__current active-pagination" on:click={updatePagination(page)}><span data-paginate> {page} </span></div>
        {:else}
          <div class="collection_pagination_count__current" on:click={updatePagination(page)}><span data-paginate> {page} </span></div>
        {/if}
      {/if}
    {/each}
    {#if pagesArrays[4] < totalPages}
      <div class="collection_pagination_count_dots"><span> ... </span></div> 
      <div class="collection_pagination_count__total" on:click={updatePagination(totalPages)}> <span data-paginate>{totalPages} </span></div>
    {/if}
  </div>
  {#if currentPage != totalPages}
  <button class="collection_pagination__nxtBtn" on:click={next}><span><span class="collection_pagination__button
    collection_pagination__button">Next</span> &gt;</span></button>
  {:else}
    <div></div>
  {/if}
</div>