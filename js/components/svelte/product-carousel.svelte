<script>
  import { getProductData } from "JsComponents/get-data";
  import { onMount } from "svelte";
  import ProductCard from "SvelteComponents/product-card.svelte";

  export let shopifyData; //for parent level props
  let productData = []; //to store api data
  let isLoading = true;

  const {
    mobileCarousel = false,
    blocks = [],
    carouselSettingValues = false
  } = shopifyData || {};

  const defaultSettings = {
              "slidesPerView": 2,
              "spaceBetween": 10,
              "overflowNagivation": true,
              "progressPagination": true,
              "pagination": true,
              "navigation": false,
              "breakpoints": {
                "768": {
                  "pagination": false,
                  "navigation": true,
                  "slidesPerView": 3,
                  "spaceBetween": 27.5
                },
               "1024": {
                  "pagination": false,
                  "navigation": true,
                  "slidesPerView": 5,
                  "spaceBetween": 27.5
                }
              }
            }

   const carouselSettings = carouselSettingValues || defaultSettings;


  const paramsHash = blocks.reduce((accumulator, block) => {
    return (accumulator = {
      ...accumulator,
      [block.text]: {
        ruleId: `${block?.ruleId}`,
        text: block?.text,
        productId: block.productId,
        collectionData: block?.collectionData || []
      },
    });
  }, {});

  const collectionTexts = Object.keys(paramsHash);
  let selectedParams = { ...paramsHash[collectionTexts[0]] };

  const requestData = async (selectedParams) => {
    isLoading = true;
    if((selectedParams.collectionData).length > 0) {
      productData = selectedParams.collectionData || []
    }
    else {
      const responseData = await getProductData(selectedParams);
      let responseProductData = responseData.data || [];
      productData = responseProductData.map(item => {item["addConversionRate"] = true; return item})
    }
    isLoading = false;
  };

  const updateParams = async (ev,text) => {
    selectedParams = paramsHash[text];
    await requestData(selectedParams);
    if(!checkIfVisisble(ev)){
      const element = ev?.target.closest('.product-category__button--active');
      element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  };

  const checkIfVisisble = (ev) =>{
    const element = ev?.target.closest('.product-category__button--active');
  const elementRect = element?.getBoundingClientRect();
  const isVisible = (
    elementRect?.top >= 0 &&
    elementRect?.left >= 0 &&
    elementRect?.bottom <= (window.innerHeight ||
    document.documentElement.clientHeight) &&
    elementRect?.right <= (window.innerWidth || 
    document.documentElement.clientWidth)
  );
  return isVisible || false;
  }
  onMount(async () => {
    await requestData(selectedParams);
  });
</script>
<div class="rebuy-container-wrap">
{#if collectionTexts.length > 1}
  <div class="featured-products__Category_wrapp">
    {#each collectionTexts as text}
      <div class="featured-products__Category">
        <button
          class={`button button--primary product-category__button ${
            selectedParams.text == text && "product-category__button--active"
          }`}
          on:click={(ev) => {
            updateParams(ev,text);
          }}>{text}</button
        >
      </div>
    {/each}
  </div>
{/if}
{#if isLoading}
<div class="carousel-placeholders">
  <div class="product-placeholders">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</div>
{:else}
{#key productData}
  <div class="featured-products__wrapper product-card-wrapper">
    <div
      class={`featured-products__content featured-products__content--desktop ${
        JSON.parse(mobileCarousel)
          ? "featured-products__content--show-mobile"
          : ""
      }`}
    >
      {#if productData.length > 0  }
        <custom-carousel>
          <div class="custom-carousel__content hide" data-carousel-content>
            {#each productData as product, index}
              {#if product.variants[0].price > 0}
                <p style="display: none !important">{product.enableAddToCart = false}</p>
                <ProductCard {product}/>
              {/if}
            {/each}
          </div>
          <div class="carousel-placeholders">
            <div class="product-placeholders">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div class="lds-ring" />
          </div>
          <div type="text/json" data-settings style="display: none;">
               {JSON.stringify(carouselSettings)}
          </div>
        </custom-carousel>
      {/if}
    </div>
    <div
      class={`featured-products__content featured-products__content--mobile ${
        JSON.parse(mobileCarousel)
          ? "featured-products__content--hide-mobile"
          : ""
      }`}
    >
      {#each productData as product, index}
        {#if index < 4}
          <ProductCard {product} />
        {/if}
      {/each}
    </div>
  </div>
{/key}
{/if}
</div>
