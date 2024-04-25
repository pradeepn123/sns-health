<script>
  import { onMount } from "svelte";
  import ResponsiveImage from "SvelteComponents/responsive-image.svelte";
  import handleClick from "JsComponents/handleClick"; //js based handle click
  import { removeAttributesForCartBinding } from "JsComponents/rebuy-cart-integration";
  import {
    cartContents,
    updateQuantity,
    addProduct
  } from "SvelteComponents/bundle-store.js";



  export let shopifyData;
  export let product;
  export let productCardSettings = {};
  
  let curatedBundleProduct = {};
  let isAddedToBundle = false;
  let ref;

   let settings = {
    vendor: true, 
    price: true,
    addToCartButton: true,
    tags: true
  }
  settings = {...settings,...productCardSettings};

  //to declare it as reactive
  let expiryDate = false
  let isFinalSale = false;

  const {
    image,
    variants = [],
    vendor,
    title,
    tags = [],
    metafields = [],
    handle,
    skipFormatMoney = false,
    discountPercentage: shopifyDiscountPercentage = 0,
    enableAddToCart = true,
    forceSeeOptions = false,
    // flag for adding conversion rate
    addConversionRate = false,
    expiryDateData = false
  } = product || shopifyData || {};

  $:expiryDate = expiryDateData && expiryDateData.expiryDate || false;
  $:isFinalSale = expiryDateData && expiryDateData.isFinalSale || false;

  let [{ compare_at_price: comparePrice, price, id: variantId } = {}] =
    variants || [];

  const getExpiryData = async(handle) => {
    const expiryData = await fetch(`/products/${handle}?variant=${variantId}&view=get-expiry-date`);
    const expiryDateJson = await expiryData.json();
    const {isFinalSale:isFinalSaleFromJson, expiryDate:expiryDateFromJson} = expiryDateJson;
    expiryDate = expiryDateFromJson
    isFinalSale = isFinalSaleFromJson;
    product.expiryDateData = {expiryDate, isFinalSale}
    product = product;
  } 

  onMount(async() => {
    if(!expiryDateData) {
      await getExpiryData(handle);
    }
    else{
      const {isFinalSale:isFinalSaleFromShopify, expiryDate:expiryDateFromShopify} = expiryDateData;
      expiryDate = expiryDateFromShopify
      isFinalSale = isFinalSaleFromShopify;
    }
  })


  const fireEmoji = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.16 122.88"><defs><style>.cls-1{fill:#f77d02;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#ffc928;}.cls-3{fill:#fff073;}</style></defs><title>flames</title><path class="cls-1" d="M14.45,35.35c1.82,14.45,4.65,25.4,9.44,29.45C24.48,30.87,43,27.4,38.18,0,53.52,3,67.77,33.33,71.36,66.15a37.5,37.5,0,0,0,6.53-19.46c13.76,15.72,21.31,56.82-.17,69.52-12.53,7.41-38.13,7.79-51.46,5.27a27.64,27.64,0,0,1-13.5-5.36c-19.2-14.66-15.17-62.25,1.69-80.77Z"/><path class="cls-2" d="M77.73,116.2h0c-8,4.74-21.42,6.61-33.51,6.67H42.45a95.69,95.69,0,0,1-16.19-1.39,27.64,27.64,0,0,1-13.5-5.36,2.43,2.43,0,0,0-.25-.2c-2.13-10.28,1.76-24,8.49-31.29a25.49,25.49,0,0,0,4.85,13.71C28.51,75.22,39.11,57,50.5,54.94c-3,19.1,11,24.21,10.62,42.45,3.56-2.85,5.66-10.57,7-20.75,9.12,9.49,13.59,26.32,9.59,39.56Z"/><path class="cls-3" d="M65.81,120.73a115,115,0,0,1-39.55.82l-1-.13c.06-5.73,2.21-12,5.47-15.73a17.18,17.18,0,0,0,2.93,8.84c1.61-14.91,8-26.63,14.88-28-1.79,12.32,6.65,15.61,6.4,27.37,2.15-1.84,3.42-6.82,4.23-13.38,4.47,5,7.09,12.84,6.63,20.19Z"/></svg>`
  const currencySymbol = window.shopifyVariables.currencySymbol || "$";
  const soldOutText = "Sold Out";
  const chooseMoreText =
    window.shopifyVariables.chooseMoreText || "See Options";
  const addToCartText = window.shopifyVariables.addToCartText || "Add To Cart";
  const bundleText = window.shopifyVariables.bundleText || "Add To Bundle";
  const bundleTextAdded = window.shopifyVariables.bundleTextAdded || "Added";


  let link = `${window.Shopify.routes.root}products/${handle}?variant=${variantId}`;
  let rating = false;
  metafields.forEach((metafield) => {
    const { namespace, key, value } = metafield || {};
    if (namespace == "okendo" && key == "summaryData") {
      let parsedValue = {};
      if (typeof value == "object") {
        parsedValue = value;
      } else {
        parsedValue = JSON.parse(value) || {};
      }
      rating = parsedValue?.reviewAverageValue;
    }
  });

  const bestseller = tags.includes("bestseller");
  const isBundle = (window.location.href).includes("build-your-own-box") || false;
  const onsale = tags.includes("onsale");
  
  const productFormattedPrice = (price) => {
    let amount = parseFloat(price);
    let formattedPrice;
    if(addConversionRate && !(window.Shopify.currency.active).toLowerCase().includes('cad')) {
      amount = parseFloat(amount + (0.10 * amount))
    }
    if(skipFormatMoney) {
      formattedPrice = window.formatCurrency(amount, `${currencySymbol}{{amount}}`)
     } else { 
      formattedPrice = window.formatCurrency(
        amount * (window.Shopify?.currency?.rate * 100),
        `${currencySymbol}{{amount}}`,
      );
     }
   return formattedPrice;
  }

  //conflicting data between shopify and rebuy
  let discountPercentage = 0;
  if (skipFormatMoney) {
    discountPercentage = shopifyDiscountPercentage;
  } else {
    discountPercentage = Math.round(
      ((comparePrice - price) * 100) / comparePrice,
    );
  }

  if (isBundle) {
    curatedBundleProduct = {
      id: variantId,
      image,
      title,
      price: productFormattedPrice(price),
      quantity: 1
    };
  }

  $: isAddedToBundle = $cartContents && $cartContents[variantId];

  const currentAddedBundleProduct = $cartContents[variantId];

  const handleProductUpdate = (ev) => {
    ev.preventDefault(); //override default behaviour
    const curatedBundleProduct = {
      id: variantId,
      image,
      title,
      price: productFormattedPrice(price),
      quantity: 1
    };
    //if [currentVariant] id exist on hash object(store), then update the product
    isAddedToBundle ?  updateProduct(currentAddedBundleProduct,currentAddedBundleProduct.quantity + 1 ) : addProduct(curatedBundleProduct);
    //else add [current variant] on the hash object
  }

  onMount(() => {
    handleClick(ref);
    removeAttributesForCartBinding(ref);
  });

  const {
    enableTags,
  } = settings

</script>

<a href="{link}" target="_blank" style="user-select: none;">
<div
  class="product-card swiper-slide"
  data-redirect-click
  data-js-click
  data-url={link}
  bind:this={ref}
>
  <div class="product-card__body">
    <div class="product-card__image">
      <ResponsiveImage {image} image_aspect_ratio={1} />
    </div>


      <div class="product-card__header">
        <div class="product-card__header-tags">
          {#if discountPercentage > 0}<div class="product-card__discount">
              {discountPercentage}% off
            </div>
          {/if}
          {#if bestseller}
            <div class="product-card__discount">Best Seller</div>
          {/if}
          {#if onsale}
            <div class="product-card__discount">On Sale</div>
          {/if}
            {#if isFinalSale }
              <div class="product-card__discount product-card__discount--final-sale"><div class="icon-holder">{@html fireEmoji}</div>Final sale</div>
            {/if}
        </div>
        {#if rating}
          <div class="product-card__star">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <use x="0" href="#oke-star-filled" />
            </svg>
            <span class="product-card__star-text">{rating ? rating : ""}</span>
          </div>
        {/if}
      </div>


    {#if vendor && settings.vendor}
      <div class="product-card__vendor">
        {@html vendor}
      </div>
    {/if}
    <div class="product-card__title">
      {@html title}
    </div>
  </div>
  <div class="product-card__footer">
    <div class="product-card__price-container">
      {#if settings.price }
        {#if discountPercentage > 0}<div
            class=" product-card__price product-card__price--compare"
          >
            {#if skipFormatMoney}
              {window.formatCurrency(comparePrice, `${currencySymbol}{{amount}}`)}
              {window.Shopify?.currency?.active}
            {:else}
              {window.formatCurrency(
                comparePrice * (window.Shopify?.currency?.rate * 100),
                `${currencySymbol}{{amount}}`,
              )}
              {window.Shopify?.currency?.active}
            {/if}
          </div>
        {/if}
        <div class="product-card__price">
          {productFormattedPrice(price)}
          {window.Shopify?.currency?.active}
        </div>
      {/if}
    </div>
    <div class="product-card__atc">
      {#if settings.addToCartButton }
        <form
          method="post"
          action="/cart/add"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="quantity" value="1" />
          <input type="hidden" name="id" value={variantId} />
          {#if isFinalSale} 
           <input type="hidden" name="properties[best-before]" value="{expiryDate}" />
          {/if}

          {#if isBundle}
            <div
              class={`product-card__bundle-atc product-card__bundle-action-btn product-card__quantity-button-wrapp ${
                isAddedToBundle ? "active" : ""
              }`}
            >
          <div
          class={`product-card__bundle-atc-quantity ${
            isAddedToBundle?.quantity <= 2 && isAddedToBundle?.quantity <= product.quantityAvailable  ? "active" : ""
          }`}
        >
        <div>
              <button
                class="product-card__quantity-buttons"
                name="remove"
                on:click|preventDefault={() => {
                  let currentQuantity = isAddedToBundle?.quantity;
                  if (currentQuantity <= 1) {
                    currentQuantity = 0;
                  } else {
                    currentQuantity = currentQuantity - 1;
                  }
                  updateQuantity(isAddedToBundle, currentQuantity);
                }}>-</button
              >
            </div>
              <div class="product-card__quantity-buttons">
                <span>{isAddedToBundle?.quantity}</span>
              </div>
                <div>
                <button
                  class="product-card__quantity-buttons"
                  name="add"
                  on:click|preventDefault={() =>
                    updateQuantity(
                      isAddedToBundle || {},
                      isAddedToBundle?.quantity + 1,
                    )}>+</button
                >
              </div>
            </div>
      
 
           <div class={`product-card__bundle-atc-added  ${
              isAddedToBundle?.quantity <= 2 && isAddedToBundle?.quantity <= product.quantityAvailable  ? "" : "active"
          }`}
            onclick= {(e) => e.preventDefault()}>
              <button
              class="product-card__quantity-buttons" disabled=true>
              {bundleTextAdded}
            </button>
        </div>
          </div>
            <button
              type="button"
              class={`product-item__action-button product-item__action-button--list-view-only button button--small button--primary product-card__bundle-action-btn  ${
                !isAddedToBundle ? "active" : ""
              }`}
              data-action="add-to-bundle"
              on:click={handleProductUpdate}
            >
              {bundleText}
            </button>
          {:else if variants.length == 1 && enableAddToCart == true && !forceSeeOptions}
            <button
              type="submit"
              class="product-item__action-button product-item__action-button--list-view-only button button--small button--primary"
              data-action="add-to-cart"
            >
              {addToCartText}
            </button>
          {:else}
            <a
              href={link}
              class="product-card__cta product-item__action-button product-item__action-button--list-view-only button button--small button--primary"
              >{chooseMoreText}</a
            >
          {/if}
        </form>
      {/if}
    </div>
  </div>
</div>
</a>