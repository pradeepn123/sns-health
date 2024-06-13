
<script>
    export let items;
    export let reviews;
    import Reviews from './reviews.svelte';
    import Carousel from "./image-carousel.svelte";
    let reviewExist = reviews?.reviews?.length > 0
    let settings = `{
        "slidesPerView": 1.3,
        "spaceBetween": 15,
        "breakpoints": {
            "320": {
            "pagination": false
            },
            "768": {
            "slidesPerView": 2,
            "spaceBetween": 20,
            "navigation": true
            }
        }
    }`
    if(!reviewExist) {
         settings = `{
            "slidesPerView": 3,
            "navigation": true,
            "spaceBetween": 20
       }`
    }
</script>

<div class={`landing-page-review-carousel__grid ${!reviewExist && 'landing-page-review-carousel__grid--full'}`}>
    {#if reviewExist}
    <div class="landing-page-review-carousel__grid-reviews" data-parent>
        <Reviews reviews={reviews} />
    </div>
   {/if}
   <div class="landing-page-review-carousel__grid-carousel" data-parent>
       <Carousel items={items} carouselSettings={settings} />
   </div>
</div>