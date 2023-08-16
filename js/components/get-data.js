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
        ...otherparams
    }

    Object.keys(params).forEach((param)=> {
     url.searchParams.append(param, params[param]);
    }) //set params

    const data = await fetch(url);
    const productData = await data.json();
    return productData;
}