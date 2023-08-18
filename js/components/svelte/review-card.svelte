<script>
export let review;
export let getStars;
import ResponsiveImage from "SvelteComponents/responsive-image.svelte";
const getReviews = (rating) => getStars(rating);
const {
    rating,
    date,
    product_image: productImage, //set default image
    product_name:productName,
    title,
    review_content //put check for review_content , add alias for variable
  } = review;

  
  const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date(date));

  const srcTokens = {
  replacementToken: '_x280.',
  dataSrcToken: '_x{width}.',
  srcToken: '_x280.',
}

  const image= {
    id: Date.now(),
    width: 200,
    height: 200,
    src: productImage
  }
</script>

<div class="swiper-slide review_container">
    <div class="review_image">
        <ResponsiveImage image={image} srcTokens={srcTokens} image_aspect_ratio={1}/>
    </div>
    <div class="review_content">
        <div class="rating">
            <div class="rating-star">
            {#each getReviews(rating) as star, index(index)}
                {@html star }
            {/each}
            </div>
            <p class="date">{ formattedDate}</p>
        </div>
        <p class="title">{title}</p>
        <p class="review">{review_content}</p>
    </div>
</div>