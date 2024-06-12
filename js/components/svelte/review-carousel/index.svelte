<script>
  import { onMount } from "svelte";
  import { getReviewData } from "JsComponents/get-data";
  import ImageCarouselWithReview from "./image-with-review.svelte";
  export let shopifyData;
  const { collectionId, blocks } = shopifyData || {};
  let reviews = false;
  onMount(async () => {
    reviews = await getReviewData(collectionId);
  });
</script>

<div class="landing-page-review-carousel__wrapper">
  <div class="landing-page-review-carousel__container">
    {#if reviews != false}
        <ImageCarouselWithReview items={blocks} {reviews} />
    {:else}
      <div class="landing-page-review-carousel__placeholder"></div>
    {/if}
  </div>
</div>
