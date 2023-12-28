<script>
  import ProductCard from "SvelteComponents/product-card.svelte";
  
  export let products
  $: paginatedData = [...products]
  $: console.log('products',paginatedData)
</script>

<div class="product-list--collection product-list--custom">
  {#each paginatedData as product, index (product.handle + '-' + index )}
    <ProductCard product={product}/> 
  {/each}
</div>