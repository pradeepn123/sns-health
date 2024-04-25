<script>
	import { onMount } from "svelte";
	import CollectionGrid from "./collection-grid.svelte";
	let apiPaginatedData = [];
	let loading = true;
	let firstFoldLoaded = false;

	const handleTagMap = {
		//handle and metafield value
		"build-your-own-box": "show_in_bundle",
		"sale": "show_in_sale",
		"clearance": "show_in_clearance"
	};

	async function loadProductData(cursor = "") {
		const collectionHandle = window.shopifyVariables.collectionHandle;
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
			query: `query AllProducts @inContext(country: ${window.Shopify.country}) {
            collection(handle: "${collectionHandle}") {
            handle ${options} { 
							nodes {
									id
									title
									onlineStoreUrl
									handle
									productType 
									tags 
									createdAt
									vendor 
									featuredImage { 
										src
										id
										width
										height 
										altText 
									}
                  metafield(key: "summaryData",namespace: "okendo") { value  updatedAt}
									variants(first: 100) {
											nodes {
													metafields(identifiers: [{namespace: "custom", key: "show_in_bundle"},
													{namespace: "custom", key: "show_in_sale"},
													{namespace: "custom", key: "show_in_clearance"}]) { 
														key
														value             
													}
													availableForSale
													quantityAvailable              
													price {   
														amount
														currencyCode 
													}
													selectedOptions { 
															name
															value        
													}             
													compareAtPrice {               
															amount             
															currencyCode            
													}            
													title            
													id           
													image {  
														altText 
															height 
															width                
															id           
															src 
													}
											}          
										}    
                  }     
									pageInfo {
										endCursor
										hasNextPage        
										hasPreviousPage        
										startCursor
									}   
							}  
						}
					}`,
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
		console.log(apiPaginatedData, "api paginatedData");
		if (data.data.collection.products.pageInfo.hasNextPage) {
			loading = true;
			loadProductData(data.data.collection.products.pageInfo.endCursor);
		}
	}
	onMount(async () => {
		await loadProductData();
	});
</script>

<CollectionGrid {loading} {firstFoldLoaded} {apiPaginatedData} {handleTagMap} />
