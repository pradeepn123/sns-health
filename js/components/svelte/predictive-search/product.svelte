<script>
    import ProductCard from 'SvelteComponents/product-card';
    export let products;    
    let excludedProducts = 'free_gift'
    let settings = {
        addToCartButton: false,
        tags: false
    } 
    const curateProductData = (product) => {
           
        const {featuredImage, variants:{nodes:variantArray}, title, tags, handle, vendor='' } = product
        const curatedVariantData = variantArray.map(variant => {
            const { price: {amount: price}, compareAtPrice = {}, id:variantId, ...rest } = variant || {}; 
            return {
                price,
                compare_at_price:compareAtPrice?.amount || 0,
                variantId:variantId.split('gid://shopify/ProductVariant/')[1],
                ...rest
            }
        });   
        return {
            image: featuredImage,
            variants: curatedVariantData,
            vendor,
            title,
            tags,
            metafields: [], 
            handle,
            skipFormatMoney: true,
            enableAddToCart: true
        };        
    }
    const handleSearchResults = () => {        
        const submitFormBtn = document.querySelector('[data-form-submit]');
        if( !submitFormBtn) return;
        submitFormBtn.dispatchEvent(new Event('click', { bubbles: true }))
    }
    
</script>

{#if products?.length }
    <div class="predictive-search__products-main">
        <div class="predictive-search__products-innerwrap">
            <h3>Product Matches</h3>
            <a on:click={handleSearchResults}>View all possible matches</a>
        </div>
        <div class="predictive-search__products">
            {#each products as product}
                {#if !(product.tags).includes(excludedProducts)}
                    <ProductCard product={curateProductData(product)} productCardSettings={settings}></ProductCard>
                {/if}
            {/each}
        </div>
    </div>
{/if}