<script>
	export let reviews;
	const topReviews = reviews?.reviews?.slice(0, 8);
	let currentReview = topReviews[0];
	$: ({ rating, reviewer } = currentReview);

	const starFilledIcon = `<svg height="15" viewBox="0 0 15 16" aria-hidden="true"><use x="0" href="#oke-star-filled"></use></svg>`;
	const starEmptyIcon = `<svg height="15" viewBox="0 0 15 16" aria-hidden="true"><use x="0" href="#oke-star-empty"></use></svg>`;

	const onChangeCallBack = (swiper) => {
		currentReview = topReviews[swiper.activeIndex]
	}

	window.reviewChangeCallBack = onChangeCallBack;

	const carouselSettings = `
	   {
		   "slidesPerView": "1",
		   "autoplay": "false",
		   "onSlideChange": "reviewChangeCallBack",
		   "pagination": "true",
			 "breakpoints": {
				"1024": {
					"autoplay": "true",
					"onSlideChange": "reviewChangeCallBack",
					"slidesPerView": "1",
					"navigation": "true"
            }
        }
		 }
	`;
</script>

<div class="landing-page-reviews">
	<div class="landing-page-reviews__header">
		<div class="landing-page-reviews__header-items">
			<div class="landing-page-reviews__stars">
				{#each [1, 2, 3, 4, 5] as ratingIndex}
					{#if ratingIndex <= rating}
						<div class="landing-page-reviews__star">
							{@html starFilledIcon}
						</div>
					{:else}
						<div class="landing-page-reviews__star">
							{@html starEmptyIcon}
						</div>
					{/if}
				{/each}
			</div>
			<div class="landing-page-reviews__author landing-page-reviews--desktop">
				{reviewer?.displayName}
			</div>
		</div>
		<div class="swiper-navigations" data-swiper-navigations></div>
	</div>
	<custom-carousel>
		<div class="carousel__container swiper" data-swiper-container>
			<div class="swiper-wrapper">
				{#each topReviews as singleReview}
					<div class="swiper-slide">
						<div class="landing-page-reviews__content">
							{singleReview.body}
						</div>
					</div>
				{/each}
				<div data-settings style="display:none">
					{@html carouselSettings}
				</div>
			</div>
		</div>
	</custom-carousel>
	<div class="landing-page-reviews__author landing-page-reviews--mobile">
		{reviewer?.displayName}
	</div>
	<div class="swiper-pagination"></div>
</div>
