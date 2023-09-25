export const rebuyAutoAdd = () => {
	const addProductsToRebuy = (productIds) => {
		const items = productIds.filter(item => [...item].length > 0).map((item) => {
			return {
				id: parseInt(item),
				quantity: 1
			}
		})
		if (items.length) {
			Rebuy.Cart.addItem({items});
		}
	}

	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	const variantIds = params.variant_id;
	if (variantIds) {
		const variantIdArray = variantIds.split(',')
		let checkRebuy = setInterval(() => {
			if (window.Rebuy?.SmartCart?.cart) {
				clearInterval(checkRebuy);
				checkRebuy = false;
				addProductsToRebuy(variantIdArray);
			}
		}, 500);
		setTimeout(() => {
			if (checkRebuy) {
				clearInterval(checkRebuy)
			}
		}, 8000)
	}
}