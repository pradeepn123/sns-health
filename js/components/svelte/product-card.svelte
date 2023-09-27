<script>
  import ResponsiveImage from "SvelteComponents/responsive-image.svelte";
  export let product;

  export let otherData;
  const {
    image,
    variants: [{ compare_at_price: comparePrice, price }],
    vendor,
    title,
    tags,
    metafields,
    link,
    skipFormatMoney = false,
    discountPercentage: shopifyDiscountPercentage = 0,
  } = product;

  let rating = false;
  
  metafields.forEach((metafield) => {
    const { namespace, key, value } = metafield;
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
  const { currencySymbol, soldOutText, chooseMoreText, addToCartText } =
    otherData || {};

  const bestseller = tags.includes("bestseller");
  const onsale = tags.includes("onsale");
  const srcTokens = {
    replacementToken: "?width=300&height=300",
    dataSrcToken: "?{width}&{height}",
    srcToken: "?width=300&height=300",
  };

  //conflicting data between shopify and rebuy
  let discountPercentage = 0;
  if (skipFormatMoney) {
    discountPercentage = shopifyDiscountPercentage;
  }
  else {
    discountPercentage = (comparePrice - price * 100) / price
  }

</script>

<div
  class="product-card swiper-slide"
  data-redirect-click
  data-js-click
  data-url={link}
>
  <div class="product-card__body">
    <div class="product-card__image">
      <ResponsiveImage {image} image_aspect_ratio={1} {srcTokens} />
    </div>
    <div class="product-card__header">
      <div class="product-card__header-tags">
        {#if discountPercentage > 0}<div class="product-card__discount">
            {discountPercentage }% off
          </div>
        {/if}
        {#if bestseller}<div class="product-card__discount">Best Seller</div>
        {/if}
        {#if onsale}<div class="product-card__discount">On Sale</div> {/if}
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
        {vendor}
      </div>
    {/if}
    <div class="product-card__title">
      {title}
    </div>
  </div>
  <div class="product-card__footer">
    <div class="product-card__price-container">
      {#if discountPercentage > 0}<div
          class=" product-card__price product-card__price--compare"
        >
          {#if skipFormatMoney}
          {window.formatCurrency(
            comparePrice,
            `${currencySymbol}{{amount}}`
          )}
          {window.Shopify?.currency?.active}
          {:else}
            {window.formatCurrency(
              comparePrice * (window.Shopify?.currency?.rate * 100),
              `${currencySymbol}{{amount}}`
            )}
            {window.Shopify?.currency?.active}
          {/if}
        </div>
      {/if}
      <div class="product-card__price">
        {#if skipFormatMoney}
        {window.formatCurrency(
          price,
          `${currencySymbol}{{amount}}`
        )}
        {window.Shopify?.currency?.active}
        {:else}
          {window.formatCurrency(
            price * (window.Shopify?.currency?.rate * 100),
            `${currencySymbol}{{amount}}`
          )}
          {window.Shopify?.currency?.active}
        {/if}
      </div>
    </div>
    <div class="product-card__atc">
      <form method="post" action="/cart/add">
        <input type="hidden" name="quantity" value="1" />
        <input type="hidden" name="id" value={product.variants[0].id} />
        {#if product.variants.size == 1}
          <button
            type="submit"
            class="product-item__action-button product-item__action-button--list-view-only button button--small button--primary"
            data-action="add-to-cart"
          >
            {addToCartText}
          </button>
        {:else}
          <a
            href={product.link}
            class="product-card__cta product-item__action-button product-item__action-button--list-view-only button button--small button--primary"
            >{chooseMoreText}</a
          >
        {/if}
      </form>
    </div>
  </div>
</div>
