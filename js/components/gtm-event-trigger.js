import { ViewItemList, selectItemList, clickPromotion, AddPromotionAsItemProperty, viewItem, getPromotionParams, viewPromotion } from 'JsComponents/events';
import { IntersectObserver } from 'JsComponents/utils';


export const pageLoadEvent = () => { 	//This handles the view_item_list (plp) and view_item(pdp)
	const url = window.location.href;
	if (url.includes('/collections/')) {
		const urlPArams = url.split('/collections/')[1];
		const collectionHandle = urlPArams.split('?')[0];
		const { promotionName, promotionId, creativeName } = getPromotionParams() || {};
		if (promotionName) {
			ViewItemList(collectionHandle, promotionName, promotionId, creativeName)
			AddPromotionAsItemProperty();
		}
	}
	if (url.includes('/products/')) {
		const urlPArams = url.split('/products/')[1];
		const productHandle = urlPArams.split('?')[0];
		const { promotionId, promotionName, creativeName } = getPromotionParams() || {};
		if (promotionId) {
			viewItem(productHandle, promotionName, promotionId, creativeName )
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
			const creativeName = item.dataset.creativeName;
			clickPromotion(url, promotionName, promotionId, promotionName , creativeName);
		}
		else {
			window.location.href = url;
		}
	}

	if (item.closest('[data-section-type="collection"]')) {
		const { promotionId, promotionName, creativeName } = getPromotionParams() || {};
		if (promotionId) {
			let productHandle = (item.href).split("?")[0];
			productHandle = productHandle.split('/products/')[1];
			selectItemList(productHandle, promotionName, promotionId, creativeName)
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
					viewPromotion(promotionName,promotionId,creativeName);
					observer.unobserve(entry.target);
				}
			}
		});
	};
	const promotionObserver = new IntersectObserver(callback, promotionItems);
	promotionObserver.init();
}


