<script>
  import ReviewCard from "SvelteComponents/review-card.svelte";
  import { getReviewData } from "JsComponents/get-data";
  import { onMount } from "svelte";
  export let shopifyData;
  let avarageReviewCount = 0;
  let curatedReviewData = [];
  let reviews = [];
  const { id = "" } = shopifyData || {}; //return if id doesnt exist 
  const totalRatings = 5;
  const getStars = (count) => {

    const selectedRating = Array.from(Array(count).keys()).map((item) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99998 0L9.97732 5.98213L16 6.11138L11.2001 9.93803L12.9441 16L7.99998 12.3825L3.05531 16L4.79988 9.93803L0 6.11138L6.02211 5.98213L7.99998 0Z" fill="#FFBD00"/>
            </svg>`;
    });

    const remainingRatings = Array.from(Array(totalRatings - count).keys()).map(
      (item) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99998 0L9.97732 5.98213L16 6.11138L11.2001 9.93803L12.9441 16L7.99998 12.3825L3.05531 16L4.79988 9.93803L0 6.11138L6.02211 5.98213L7.99998 0Z" fill="gray"/>
            </svg>`;
      }
    );
    return [...selectedRating, ...remainingRatings]; //merge both selected rating and remaining rating
  };

  const curateReviewData = (reviews) => {
    return reviews.map((review) => {
      return {
        rating: review.rating, //use object destructuring and give default value or check if it exist
        date: review.dateCreated,
        product_image: review.productImageUrl,
        product_name: review.productName,
        title: review.title,
        review_content: review.body,
      };
    });
  };

  const averageReviews = (reviews) => {
    const reviewsLength = reviews.length;
    const totalReviewsCount = reviews.reduce((currentCount, nextReview) => {
      return (currentCount += nextReview.rating);
    }, 0);
    avarageReviewCount =
      Math.round(totalReviewsCount / reviewsLength) >= totalRatings
        ? totalRatings
        : Math.round(totalReviewsCount / reviewsLength);
  };

  onMount(async () => {
    reviews = await getReviewData(id);
    curatedReviewData = curateReviewData(reviews.reviews);
    console.log("curatedReviewData", curatedReviewData); //remove all consoles
    averageReviews(curatedReviewData);
  });
</script>

{#if curatedReviewData.length}
  <div class="customer-review customer-review__container product-card-wrapper">
    <div class="customer-review__content">
      <div class="customer-review__wrapper">
        <div class="reviews_header">
          <div class="total_reviews">
            <div class="total_reviews-star">
            {#each getStars(avarageReviewCount) as star, index (index)}
              {@html star}
            {/each}
            </div>
            <div class="total_reviews-text">
            {curatedReviewData.length} Reviews
            </div>
          </div>
        </div>
        <div class="review_carousel">
          <custom-carousel>
          <div class="custom-carousel__content hide" data-carousel-content>
            {#each curatedReviewData as review}
            <div class="swiper-slide"><ReviewCard {review} {getStars} /></div>
            {/each}
          </div>
          <script type="text/json" data-settings>
            {
              "navigation": true,
              "slidesPerView": 1,
              "breakpoints": {
               "768": {
                  "pagination": false,
                  "navigation": true,
                  "slidesPerView": 2,
                  "spaceBetween": 14
                },
                "1024": {
                  "pagination": false,
                  "navigation": true,
                  "slidesPerView": 3,
                  "spaceBetween": 27.5
                }
              }
            }
            </script>
          </custom-carousel>
        </div>
      </div>
    </div>
  </div>
{/if}
