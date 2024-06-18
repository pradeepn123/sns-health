export const customerLocation = async () => {
    const data = await fetch('/browsing_context_suggestions.json');
    const { detected_values: { country: { handle } = {} } = {} } = await data.json();
    return handle;
}
export const getProductData = async (additionalParams) => {
    const { ruleId = '', text = '',productId,...otherparams } = additionalParams || {};
    let url = '';
    url = new URL(`https://rebuyengine.com/api/v1/custom/id/${ruleId}`);
    const params = {
        limit: 10,
        filter_oos: "yes",
        context: "default",
        key: "7af510977e690f362f5dae7f36a736bbeefdfc25", //rebuy key
        metafields: "yes",
        ...otherparams
    }
    if(productId) {
        params.shopify_product_ids = `${productId}`;
    }
    Object.keys(params).forEach((param) => {
        url.searchParams.append(param, params[param]);
    }) //set params
    const data = await fetch(url);
    const productData = await data.json();
    return productData;
}
export const getReviewData = async (id) => {
    // const url = new URL(`https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/reviews?/collections/${id}&orderBy=rating%20desc`); //to test with reviews
    const url = new URL(`https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/collections/${id}/reviews?&orderBy=rating%20desc`); //url to be used on prod
    const data = await fetch(url);
    const reviewData = await data.json();
    return reviewData;
}
export const getReviewDataAggregate = async () => {
    const url = new URL(`https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/review_aggregate`);
    const data = await fetch(url);
    const aggregiateReviewData = await data.json();
    const reviewAggCount = aggregiateReviewData.reviewAggregate;
    return reviewAggCount?.reviewCount;
}
export const getCollectionProductData = async (collectionHandle) => {
    const url = `/collections/${collectionHandle}?view=data-json`;
    const data = await fetch(url);
    const collectionProducts = await data.json();
    return collectionProducts;
}
export const getSingleProductData = async (productHandle) => {
    const url = `/products/${productHandle}.js`;
    const data = await fetch(url);
    const product = await data.json();
    return product;
}
export const getSearchResult = async(query, limit) => {
    const storeFrontKey = 'bc613e26638752aae34fdeeac6210cf0';
    const url = "/api/2024-01/graphql.json";
    let shopifyHeader = new Headers();
    shopifyHeader.append("Content-Type", "application/json");
    shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
    const graphqlquery = {
      query: `query searchProducts($query: String!, $first: Int) {
        search(query: $query, first: $first, unavailableProducts:HIDE) {
          totalCount
          edges {
            node {
              ... on Product {
              handle
                productType
                tags
                vendor
                title
                featuredImage { 
                  altText
                  height
                  width         
                  id              
                  src
                } 
                variants(first: 100) {
                  nodes {
                    metafields(identifiers: [{namespace: "custom", key: "show_in_bundle"}]) {
                      value
                    }
                    id
                    title
                    availableForSale
                    quantityAvailable
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                     image { 
                          altText
                          height
                          width         
                          id              
                          src
                      }
                  selectedOptions {
                  name
                  value
                }
                  }
       
                }
           
              }
            }
          }
        }
      }`
      ,
      variables:{
        "query":`${query}`,
        "first": limit
      }
    }

    let requestOptions = {
      method: 'POST',
      headers: shopifyHeader,
      body: JSON.stringify(graphqlquery)
    };

    const data = await fetch(url, requestOptions);
    const productData = await data.json();
    return productData;
}

export const getPredictiveSearch = async(query) => {
  const storeFrontKey = 'bc613e26638752aae34fdeeac6210cf0';
  const url = "/api/2024-01/graphql.json";
    let shopifyHeader = new Headers();
    shopifyHeader.append("Content-Type", "application/json");
    shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
    const graphqlquery = {
      query: `query suggestions($query: String!) {
        predictiveSearch(query: $query, limit: 6, limitScope: EACH) {
          queries {
            text
          }
          collections {
            handle
            title
          }
          pages {
              handle
              title
          }
        }
      }`
      ,
      variables:{
        "query":`${query}`        
      }
    }

    let requestOptions = {
      method: 'POST',
      headers: shopifyHeader,
      body: JSON.stringify(graphqlquery)
    };

    const data = await fetch(url, requestOptions);
    const searchData = await data.json();
    // console.log(searchData, 'jiiiiii')
    return searchData;
}