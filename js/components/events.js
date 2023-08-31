import { getCollectionProductData, getSingleProductData } from "JsComponents/get-data";

class GtmEvent {
	constructor(eventName, data) {
		this.eventName = eventName;
		this.data = data;
	}
	send = () => {
		window.dataLayer = window.dataLayer || [];
		window.datalayer = [];
		window.dataLayer.push({
			'event': this.eventName,
			...this.data
		});
	}
}
export default GtmEvent;

//utilities and events 
export const getPromotionParams = () => {
	const promotionData = {};
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
});
const promotionName = params.promotion_name;
const promotionId = params.promotion_id;
	if(promotionName) {
		promotionData =  {
			promotionName,
			promotionId
		}
	}
	return promotionData;

}

export const curateEcommerceData = (data) => {
	return data.map((item, index) => {
		let item_variant = item?.variant_title;
		if (!item_variant) {
			if (item.variants) {
				item_variant = item.variants[0].title
			}
			else {
				item_variant = item.product_title
			}
		}
		let item_price = item?.price || item.variants[0].price;
		return {
			item_id: `${item.id}`,
			item_name: `${item.title}`,
			index: `${index}`,
			item_brand: `${item.vendor}`,
			item_variant: `${item_variant}`,
			price: item_price*0.01,
			quantity: 1
		}
	})
}
export const updateProductUrlWithPromotion = () => {
	const links = document.querySelectorAll('[data-promotion-product-url]');
	const {promotionId, promotionName} = getPromotionParams();
	if (promotionName) {
		links.forEach((link) => {
			const url = redirectWithPromotion(link, promotionId, promotionName);
			link.href = url;
		})
	}
}
export const AddPromotionAsItemProperty = () => {
	const forms = document.querySelectorAll('[action = "/cart/add"]');
	const {promotionId} = getPromotionParams();
	const inputHtml = `<input type="hidden" name=properties[_promotionId] value='${promotionId}' />`
	if (promotionId) {
		forms.forEach((form) => {
			//do not add if it already exist
			if (!(form.querySelector('[name="properties[_promotionId]"]'))) {
				form.insertAdjacentHTML('beforeend', inputHtml);
			}
		})
	}
}
export const redirectWithPromotion = (url, promotionId, promotionName) => {
	return `${url}?promotion_id=${promotionId}&promotion_name=${promotionName}`;
}
export const clickPromotion = async (url, promotionName, promotionId) => {
	const gtmData = {
		promotion_id: promotionId,
		promotion_name: promotionName
	}
	const selectPromotion = new GtmEvent('custom_promotion_click', gtmData);
	selectPromotion.send();
	window.location.href = redirectWithPromotion(url, promotionId, promotionName);
}
export const selectItemList = async (handle, promotionName, promotionId) => {
	const data = [await getSingleProductData(handle)];
	const curatedData = {
		promotion_id: promotionId,
		item_list_id: promotionId,
		item_list_name: promotionName
	}
	const viewItemListEventData = {
		...curatedData, items: curateEcommerceData(data)
	}
	const customViewItemListEvent = new GtmEvent('custom_select_item', viewItemListEventData);
	customViewItemListEvent.send();
}
export const ViewItemList = async (handle, promotionName, promotionId) => {
	const data = await getCollectionProductData(handle);
	const curatedData = {
		promotion_id: promotionId,
		item_list_id: promotionId,
		item_list_name: promotionName
	}
	const viewItemListEventData = {
		...curatedData, items: curateEcommerceData(data)
	}
	const customViewItemListEvent = new GtmEvent('custom_view_item_list', viewItemListEventData);
	customViewItemListEvent.send();
}
export const viewItem = async (handle, promotionId) => {
	const data = [await getSingleProductData(handle)];
	const viewItemEventData = {
		currency: window.Shopify?.currency?.active,
		value: data[0]?.price,
		promotion_id: promotionId,
		items: curateEcommerceData(data)
	}
	const customViewItemListEvent = new GtmEvent('custom_view_item', viewItemEventData);
	customViewItemListEvent.send();
}
export const addToCartEvent = (cartItem, promotionId) => {
	const curatedData = curateEcommerceData([cartItem]);
	const [{ price }] = curatedData;
	const addTocartData = {
		promotion_id: promotionId,
		currency: `${window.Shopify.currency.active}`,
		value: `${price}`,
		items: curatedData
	}
	const addTocartEvent = new GtmEvent('custom_add_to_cart', addTocartData);
	addTocartEvent.send();
}

