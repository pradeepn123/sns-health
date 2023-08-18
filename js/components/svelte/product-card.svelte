<script>
  import ResponsiveImage from "SvelteComponents/responsive-image.svelte";
  export let product;
  export let otherData;
  const {
    image,
    variants: [{ compare_at_price: comparePrice, price }],
    ratings: { yotpo_average_star_rating: rating } = {},
    vendor,
    title,
    tags,
  } = product;
  const { currency, soldOutText, chooseMoreText, addToCartText } =
    otherData || {};

  const discountPercentage = (comparePrice - price * 100) / price;
  const bestseller = tags.includes("bestseller");
  const onsale = tags.includes("onsale");
  const srcTokens = {
 replacementToken: '?width=300&height=300',
  dataSrcToken: '?{width}&{height}',
  srcToken: '?width=300&height=300'}
</script>

<div class="product-card swiper-slide" data-redirect-click
data-url={product.link}>
  <div class="product-card__body">
    <div
      class="product-card__image"
     
    >
      <ResponsiveImage {image} image_aspect_ratio={1} srcTokens={srcTokens}/>
    </div>
    <div class="product-card__header">
      <div class="product-card__header-tags">
        {#if discountPercentage > 0}<div class="product-card__discount">
            {{ discountPercentage }}% off
          </div>
        {/if}
        {#if bestseller}<div class="product-card__discount">Best Seller</div>
        {/if}
        {#if onsale}<div class="product-card__discount">On Sale</div> {/if}
      </div>
      {#if rating}
      <div class="product-card__star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          ><path
            d="M7.99998 0L9.97732 5.98213L16 6.11138L11.2001 9.93803L12.9441 16L7.99998 12.3825L3.05531 16L4.79988 9.93803L0 6.11138L6.02211 5.98213L7.99998 0Z"
            fill="#FFBD00"
          /></svg
        ><span class="product-card__star-text">{rating ? rating : ''}</span>
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
          {window.formatCurrency(
            window.formatCurrency(comparePrice, `${currency}{{amount}}`)
          )}
        </div>
      {/if}
      <div class="product-card__price">
        {window.formatCurrency(price, `${currency}{{amount}}`)}
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
