<script>
  import {
    cartContents,
    updateQuantity,
    finalBundlePrice,
    clearMiniCart,
  } from "SvelteComponents/bundle-store.js";
  import { fade } from "svelte/transition";
  import ResponsiveImage from "SvelteComponents/responsive-image.svelte";

  const srcTokens = {
    replacementToken: "?width=300&height=300",
    dataSrcToken: "?{width}&{height}",
    srcToken: "?width=300&height=300",
  };


  export let open = false;

  const openIcon = ` <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21.5" cy="21.5" r="21" transform="rotate(-90 21.5 21.5)" fill="white"/>
                      <path d="M15.4999 23.5586L21.2646 17.7939L27.0294 23.5586" stroke="black" stroke-width="1.79723" stroke-linecap="square"/>
                    </svg>`;
  const closeIcon = `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="21" r="21" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0.5 0.5)" fill="white"/>
                      <path d="M15.4999 19.4414L21.2646 25.2061L27.0293 19.4414" stroke="black" stroke-width="1.79723" stroke-linecap="square"/>
                    </svg>`;

  const swapIcon = () => (open = !open);

  const currency = window.Shopify?.currency?.active;
  const currencySymbol = window.shopifyVariables.currencySymbol || "$";
  let loading = false;

  const animate = (node, args) => fade(node, args);


  //stateful variables

  $: totalQuantity =
    $cartContents &&
    Object.values($cartContents).reduce((acc, currentVal) => {
      acc += currentVal.quantity;
      return acc;
    }, 0);


  $: totalPrice =
    $cartContents &&
    Object.values($cartContents)
      .reduce(
        (total, item) =>
          (total +=
            parseFloat(item.price.replace(currencySymbol, "")) * item.quantity),
        0,
      )
      .toFixed(2);

  $: cartValidate = totalQuantity % 12 == 0;


  const bundleAddToCart = (ev) => {
    ev.preventDefault();
    loading = true;
    const properties = {
      _isBundle: true,
      _customBundleTotal: totalPrice,
      _customBundleDiscountedPrice: finalBundlePrice[totalQuantity] && totalPrice >= finalBundlePrice[totalQuantity] ? finalBundlePrice[totalQuantity]  : totalPrice
    };

    const curatedProductsArray = Object.values($cartContents).map((product) => {
      const { quantity, id } = product;
      const curatedProductData = {
        id,
        quantity,
        properties,
      };
      console.log("666",curatedProductData )
      return curatedProductData;
    });

    const addedProducts = Object.values($cartContents).map((item) => {
      return `${item.quantity} x ${item.title}`
    });

    window.localStorage.setItem("addedBundleProducts", JSON.stringify([]));
    window.localStorage.setItem("addedBundleProducts", JSON.stringify(addedProducts));

    const items = Rebuy.Cart.items() || [];
    const bundleProduct = items.find((item) => item.id == "43497517842583");

    if(bundleProduct) {
      Rebuy.Cart.removeItem(bundleProduct, () => {
        Rebuy.Cart.addItem({items: curatedProductsArray})
      }); 
 
    }
    else {
     Rebuy.Cart.addItem({items: curatedProductsArray})
    }

    setTimeout(() => {
      loading = false;
      clearMiniCart();
    },2000)
  };



</script>

{#if Object.keys($cartContents).length}
  <div transition:animate={Object.keys($cartContents).length}>
    <div class="bundle-cart">
      <div class="bundle-cart__container">
        <div class="bundle-cart__wrap">
          <div class="bundle-cart__heading">
            <p>
              Discount auto-applies once your bundle has exactly 12, 24 or 36
              items
            </p>
          </div>
          <div class="bundle-cart__svg">
            <a on:click={swapIcon}>
              {#if open}
                <button>
                  {@html closeIcon}
                </button>
              {:else}
                <button>
                  {@html openIcon}
                </button>
              {/if}
            </a>
          </div>
        </div>

        <div class="bundle-cart__info">
          {#if open}
            {#each Object.values($cartContents) as item}
              <!-- <div class="bundle-cart__cart-info-container"> -->
              <div class="bundle-cart__image-wrapp">
                <div class="bundle-cart__image">
                  <!-- <img src={item.image.src} alt={item.image.src} /> -->
                  <ResponsiveImage image={item.image} image_aspect_ratio={0.8} {srcTokens} /> 
                </div>
                <div class="bundle-cart__title-and-price">
                  <p class="bundle-cart__title">{item.title}</p>
                  <span>{@html item.price}</span>
                </div>

                <div class="bundle-cart__quantity">
                  <div class="bundle-cart__quantity-form">
                    <button
                      type="submit"
                      name="remove"
                      on:click|preventDefault={() =>
                        updateQuantity(
                          item,
                          item.quantity <= 0
                            ? (item.quantity = 0)
                            : item.quantity - 1,
                        )}>-</button
                    >
                    <span>{item.quantity}</span>

                    <button
                      type="submit"
                      name="add"
                      on:click|preventDefault={() =>
                        updateQuantity(
                          item,
                          item.quantity >= 3
                            ? (item.quantity = 3)
                            : item.quantity + 1,  
                        )}>+</button
                    >
                  </div>
                  <div>
                    <input type="hidden" name="index" value="0" />
                    <button
                      type="submit"
                      class="bundle-cart__remove"
                      on:click|preventDefault={() => {
                        updateQuantity(item, 0);
                      }}>Remove</button
                    >
                  </div>
                </div>
              </div>
            {/each}
          {/if}
        </div>

        <div class="bundle-cart__footer">
          <div class="bundle-cart__footer-price">
            <div class="bundle-cart__price">
              {currencySymbol}
              {finalBundlePrice[totalQuantity] && totalPrice >= finalBundlePrice[totalQuantity]
                ? finalBundlePrice[totalQuantity]
                : totalPrice}
              {currency}
            </div>
            <div class="bundle-cart__total-bundle">
              {totalQuantity} items in bundle
            </div>
          </div>
          <div>
            {#if cartValidate} 
              <button
                type="submit"
                data-action="add-to-cart"
                on:click={bundleAddToCart}
                href=""
                class="bundle-cart__popup-btn">{loading ? "Adding" : "Add to cart"}</button
              >
            {:else}
              <button
                type="submit"
                data-action="add-to-cart"
                href=""
                on:click={bundleAddToCart}
                class="bundle-cart__popup-btn bundle-cart__popup-btn--disabled"
                >{totalQuantity < 12
                  ? 12 - totalQuantity
                  : 12 - (totalQuantity % 12)} more to go ...</button
              >
            {/if}
          </div>
        </div>
        <div class="bundle-cart__info-text">*Limited to 1 bundle per order</div>
      </div>
    </div>
  </div>
{/if}
