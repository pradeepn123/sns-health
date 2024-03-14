<script>
  import { afterUpdate, onMount } from "svelte";
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
  let curatedBundleProduct = {};
  let isAddedToBundle = false;
  let ref;


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
  } = product || shopifyData || {};

  const currencySymbol = window.shopifyVariables.currencySymbol || "$";
  const soldOutText = "Sold Out";
  const collectionHandle = window.shopifyVariables.collectionHandle;
  const collectionTitle =  window.shopifyVariables.collectionTitle
  const chooseMoreText =
    window.shopifyVariables.chooseMoreText || "See Options";
  const addToCartText = window.shopifyVariables.addToCartText || "Add To Cart";
  const bundleText = window.shopifyVariables.bundleText || "Add To Bundle";
  const bundleTextAdded = window.shopifyVariables.bundleTextAdded || "Added";

  const [{ compare_at_price: comparePrice, price, id: variantId } = {}] =
    variants || [];
  let link = `${window.Shopify.routes.root}products/${handle}?variant=${variantId}`;
  if(collectionTitle && collectionHandle) {
     link = `${link}&collectionTitle=${collectionTitle}&collectionURL=${window.Shopify.routes.root}collections/${collectionHandle}`
  }
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
  const isBundle = collectionHandle.includes("build-your-own-box") || false;
  const onsale = tags.includes("onsale");
  const srcTokens = {
    replacementToken: "?width=300&height=300",
    dataSrcToken: "?{width}&{height}",
    srcToken: "?width=300&height=300",
  };

  const productFormattedPrice = skipFormatMoney
    ? window.formatCurrency(price, `${currencySymbol}{{amount}}`)
    : window.formatCurrency(
        price * (window.Shopify?.currency?.rate * 100),
        `${currencySymbol}{{amount}}`,
      );

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
      price: productFormattedPrice,
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
      price: productFormattedPrice,
      quantity: 1
    };
    //if [currentVariant] id exist on hash object(store), then update the product
    isAddedToBundle ?  updateProduct(currentAddedBundleProduct,currentAddedBundleProduct.quantity + 1 ) : addProduct(curatedBundleProduct);
    //else add [current variant] on the hash object
  }

  // const updateProduct = (ev) => {
  //   ev.preventDefault();
  //   cartContents.update((contents) => {
  //     if (isAddedToBundle) {
  //       const quantity = (contents[variantId].quantity += 1);
  //       updateQuantity(contents[variantId], quantity);
  //     } else {
  //       const productObj = {
  //         [variantId]: curatedBundleProduct,
  //       };
  //       return productObj;
  //     }
  //   });
  // };

  onMount(() => {
    handleClick(ref);
    removeAttributesForCartBinding(ref);
  });
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
      <ResponsiveImage {image} image_aspect_ratio={1} {srcTokens} />
    </div>
    <div class="product-card__header">
      <div class="product-card__header-tags">
        {#if discountPercentage > 0}<div class="product-card__discount">
            {discountPercentage}% off
          </div>
        {/if}
        {#if bestseller}<div class="product-card__discount">Best Seller</div>
        {/if}
        {#if onsale}<div class="product-card__discount">On Sale</div>
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
    {#if vendor}
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
        {productFormattedPrice}
        {window.Shopify?.currency?.active}
      </div>
    </div>
    <div class="product-card__atc">
      <form
        method="post"
        action="/cart/add"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="quantity" value="1" />
        <input type="hidden" name="id" value={variantId} />
        {#if isBundle}
          <div
            class={`product-card__bundle-atc product-card__bundle-action-btn product-card__quantity-button-wrapp ${
              isAddedToBundle ? "active" : ""
            }`}
          >
          <div
          class={`product-card__bundle-atc-quantity ${
            isAddedToBundle?.quantity <=2 ? "active" : ""
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
            isAddedToBundle?.quantity > 2  ? "active" : ""
          }`}
        >
              <button
              class="product-card__quantity-buttons">
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
        {:else if variants.length == 1 && enableAddToCart == true}
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
    </div>
  </div>
</div>
</a>
