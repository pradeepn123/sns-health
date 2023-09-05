import { ViewItemList, selectItemList, clickPromotion, AddPromotionAsItemProperty, viewItem, getPromotionParams, viewPromotion } from 'JsComponents/events';
import { IntersectObserver } from 'JsComponents/utils';


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

export const itemClickEvents = (item, url) => { 
	//This events handles the promotion_select (anywhere) and select_item (plp)
	if (item.closest('[data-promotion]')) {
		if (!(item.closest('[data-promotion = "false"]'))) {
			const promotionName = item.dataset.promotionName;
			const promotionId = item.dataset.promotionId;
			clickPromotion(url, promotionName, promotionId);
		}
		else {
			window.location.href = url;
		}
	}

	if (item.closest('[data-section-type="collection"]')) {
		const { promotionId, promotionName } = getPromotionParams() || {};
		if (promotionId) {
			let productHandle = (item.href).split("?")[0];
			productHandle = productHandle.split('/products/')[1];
			selectItemList(productHandle, promotionName, promotionId)
		}
	}
}

export const viewPromotionTrigger = () => {
	const promotionItems = document.querySelectorAll('[data-promotion]');
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (!(entry.target.closest('[data-promotion = "false"]'))) {
				if (entry.isIntersecting) {
					const promotionId = entry.target.dataset.promotionId;
					const promotionName = entry.target.dataset.promotionName;
					const creativeName = entry.target.dataset.creativeName;
					viewPromotion(promotionId, promotionName, creativeName);
					observer.unobserve(entry.target);
				}
			}
		});
	};
	const promotionObserver = new IntersectObserver(callback, promotionItems);
	promotionObserver.init();
}


