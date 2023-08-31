import { ViewItemList, selectItemList, clickPromotion, AddPromotionAsItemProperty, viewItem, getPromotionParams } from 'JsComponents/events';


export const pageLoadEvent = () => { 	//This handles the view_item_list (plp) and view_item(pdp)
	const url = window.location.href;
	if (url.includes('/collections/')) {
		const urlPArams = url.split('/collections/')[1];
		const collectionHandle = urlPArams.split('?')[0];
		const { promotionName, promotionId } = getPromotionParams() || {};
		if (promotionName) {
			ViewItemList(collectionHandle, promotionName, promotionId)
			AddPromotionAsItemProperty();
		}
	}
	if (url.includes('/products/')) {
		const urlPArams = url.split('/products/')[1];
		const productHandle = urlPArams.split('?')[0];
		const { promotionId } = getPromotionParams() || {};
		if (promotionId) {
			viewItem(productHandle, promotionId)
			AddPromotionAsItemProperty();
		}
	}
}

export const itemClickEvents = (item, url) => { 	//This events handles the promotion_select (anywhere) and select_item (plp)
	if (item.closest('[data-promotion]')) {
		const promotionName = item.dataset.promotionName;
		const promotionId = item.dataset.promotionId;
		clickPromotion(url, promotionName, promotionId);
	}
	
	if (item.closest('[data-section-type="collection"]')) {
		const { promotionId } = getPromotionParams() || {};
		if (promotionId) {
			let productHandle = (item.href).split("?")[0];
			productHandle = productHandle.split('/products/')[1];
			selectItemList(productHandle, promotionId)
		}
	}
}


