<script>
    import ProductCard from 'SvelteComponents/product-card';
    export let products;    
    let excludedProducts = 'free_gift'
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
    
</script>

<div class="predictive-search__products">
    {#each products as product}
        {#if !(product.tags).includes(excludedProducts)}
            <ProductCard product={curateProductData(product)}></ProductCard>
        {/if}
    {/each}
</div>