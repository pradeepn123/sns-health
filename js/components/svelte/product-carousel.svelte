<script>
  import { getProductData } from "JsComponents/get-data";
  import { onMount } from "svelte";
  import ProductCard from "SvelteComponents/product-card.svelte";
  export let shopifyData; //for parent level props
  let productData = []; //to store api data
  let isLoading = true;

  const {
    currency = "$",
    soldOutText = "Sold Out",
    chooseMoreText = "Choose Options",
    addToCartText = "Add To Cart",
    mobileCarousel = false,
    blocks = [],
  } = shopifyData || {};
  const otherData = {
    currency,
    soldOutText,
    chooseMoreText,
    addToCartText,
  };

  const paramsHash = blocks.reduce((accumulator, block) => {
    return (accumulator = {
      ...accumulator,
      [block.text]: {
        ruleId: `${block?.ruleId}`,
        text: block?.text,
      },
    });
  }, {});

  const collectionTexts = Object.keys(paramsHash);
  let selectedParams = { ...paramsHash[collectionTexts[0]] };

  const requestData = async (selectedParams) => {
    isLoading = true;
    const responseData = await getProductData(selectedParams);
    productData = responseData.data;
    isLoading = false;
  };

  const updateParams = async (text) => {
    selectedParams = paramsHash[text];
    await requestData(selectedParams);
  };

  onMount(async () => {
    await requestData(selectedParams);
  });
</script>

{#if productData.length && !isLoading}
  {#if collectionTexts.length > 1}
    <div class="featured-products__Category_wrapp">
      {#each collectionTexts as text}
        <div class="featured-products__Category">
          <button
            class={`button button--primary product-category__button ${
              selectedParams.text == text && "product-category__button--active"
            }`}
            on:click={() => {
              updateParams(text);
            }}>{text}</button
          >
        </div>
      {/each}
    </div>
  {/if}

  {#key productData}
    <div class="featured-products__wrapper product-card-wrapper">
      <div
        class={`featured-products__content featured-products__content--desktop ${
          mobileCarousel ? "featured-products__content--show-mobile" : ""
        }`}
      >
        <custom-carousel>
          {#each productData as product, index}
            {#if product.variants[0].price > 0}
              <ProductCard {product} {otherData} />
            {/if}
          {/each}
          <script type="text/json" data-settings>
      {
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
          </script>
        </custom-carousel>
      </div>
      <div
        class={`featured-products__content featured-products__content--mobile ${
          mobileCarousel ? "featured-products__content--hide-mobile" : ""
        }`}
      >
        {#each productData as product, index}
          <ProductCard {product} {otherData} />
        {/each}
      </div>
    </div>
  {/key}
{:else}
  <div class="carousel-placeholders">
    <div class="placeholder" />
    <div class="placeholder" />
    <div class="placeholder" />
    <div class="placeholder" />
    <div class="placeholder" />
  </div>
{/if}
