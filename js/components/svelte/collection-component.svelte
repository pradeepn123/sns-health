<script>
    import { onMount } from "svelte";
    import CollectionGrid from "./collection-grid.svelte";
    let apiPaginatedData = [];
    let loading = true;
    let firstFoldLoaded = false;

    async function loadProductData(cursor = "") {
        let options = `products(first: 25)`;
        if (cursor !== "" && cursor !== "end") {
        options = `products(first: 250, after: "${cursor}")`;
        }

        let myHeaders = new Headers();
        myHeaders.append(
        "X-Shopify-Storefront-Access-Token",
        "bc613e26638752aae34fdeeac6210cf0",
        );
        myHeaders.append("X-Shopify-Api-Features", "include-presentment-prices");
        myHeaders.append("Content-Type", "application/json");

        let graphql = JSON.stringify({
        query: `query AllProducts @inContext(country: ${window.Shopify.country}) {\n  collection(handle: \"build-your-own-box\") {\n    handle\n    ${options} {\n      nodes {\n        id\n          title\n          onlineStoreUrl\n          handle\n          productType\n          tags\n          createdAt\n          vendor\n          featuredImage {\n          src\n          id\n          width\n          height\n          altText\n            }\n            metafield(key: \"summaryData\", namespace: \"okendo\") {\n            value\n            updatedAt\n            }\n          variants(first: 100) {\n            nodes {\n              metafields(identifiers: [{namespace: \"custom\", key: \"show_in_bundle\"}]) {\n                value\n              }\n              availableForSale\n              quantityAvailable\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value \n              }\n              compareAtPrice {\n                amount\n                currencyCode\n              }\n              title\n              id\n              image {\n                altText\n                height\n                width\n                id\n                src\n              }\n            }\n          }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}`,
        variables: {},
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
        };

        let data = await fetch("/api/2023-10/graphql.json", requestOptions).then(
        (response) => response.json(),
        );
        firstFoldLoaded = true;
        loading = false;
        apiPaginatedData = [...data.data.collection.products.nodes];
 
        if (data.data.collection.products.pageInfo.hasNextPage) {
        loading = true;
        loadProductData(data.data.collection.products.pageInfo.endCursor);
        }
    }
    onMount(async() => {
        await loadProductData();
    })
</script>
<CollectionGrid loading={loading} firstFoldLoaded={firstFoldLoaded} apiPaginatedData={apiPaginatedData} disableBundleCheck={false} />