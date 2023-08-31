export const customerLocation = async () => {
    const data = await fetch('/browsing_context_suggestions.json');
    const {detected_values:{country:{handle} = {}} = {}} = await data.json();
    return handle;
}
export const getProductData = async (additionalParams) => {
    const {ruleId='',text='',...otherparams} = additionalParams || {};
    let url = '';
    url =  new URL(`https://rebuyengine.com/api/v1/custom/id/${ruleId}`);
    const params = {
        limit: 10,
        filter_oos: "yes",
        context: "default",
        key: "7af510977e690f362f5dae7f36a736bbeefdfc25", //rebuy key
        metafields: "yes",
        ...otherparams
    }
    Object.keys(params).forEach((param)=> {
     url.searchParams.append(param, params[param]);
    }) //set params
    const data = await fetch(url);
    const productData = await data.json();
    return productData;
}
export const getReviewData = async (id) => {
    const url =  new URL(`https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/reviews?/collections/${id}&orderBy=rating%20desc`);
    const data = await fetch(url);
    const reviewData = await data.json();
    return reviewData;
}
export const getReviewDataAggregate = async () => {
    const url =  new URL(`https://api.okendo.io/v1/stores/c07e5fe4-26c5-43e5-9d58-7295ba6f5596/review_aggregate`);
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