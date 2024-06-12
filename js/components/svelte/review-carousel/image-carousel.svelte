<script>
    import ResponsiveImage from 'SvelteComponents/responsive-image.svelte';
    export let items;
    export let carouselSettings;
</script>
<custom-carousel>
<div class="carousel__container swiper" data-swiper-container>
    <div class="swiper-wrapper">
       {#each items as item}
         <div class="swiper-slide">
            <ResponsiveImage image={item.image} image_aspect_ratio={2.25} objectFit="cover" />
         </div>
       {/each}
    </div>
    <div class="swiper-navigations" data-swiper-navigations></div>
    <div class="swiper-pagination"></div>
  </div>
  <div  style="display: none" type="text/json" data-settings>
     {@html carouselSettings}
  </div>
</custom-carousel>
