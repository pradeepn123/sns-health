var boostPFSIntegrationTemplate = {
    compileTemplate: {
      reviews: "var okendoWidgetPlusEnabled = document && !!document.getElementById('okendo-reviews-script');var itemOkendoReviewsHtml = okendoWidgetPlusEnabled ? (Utils.getProductMetafield(data, 'okendo', 'StarRatingSnippet') !== null ? Utils.getProductMetafield(data, 'okendo', 'StarRatingSnippet') : '') : (Utils.getProductMetafield(data, 'okendo', 'ProductListingSnippet') !== null ? Utils.getProductMetafield(data, 'okendo', 'ProductListingSnippet') : ''); itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemOkendoReviewsHtml);"
    },
    call3rdFunction: {
      reviews: ''
    }
  };