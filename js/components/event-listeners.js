import { updateProductUrlWithPromotion, AddPromotionAsItemProperty, addToCartEvent } from "JsComponents/events";
import { addBtnDelegate, addFormDelegate, removeAttributesForCartBinding } from 'JsComponents/rebuy-cart-integration';
import handleClick from "JsComponents/handleClick";

export default () => {
	//variant change event
	window.addEventListener('variant:changed', () => {
		removeAttributesForCartBinding() //remove default cart binding
		AddPromotionAsItemProperty(); //add promotion property
		addFormDelegate(); //disable default form add to cart submit behaviour 
	})

	//modal open event (all modals)
	window.addEventListener('modal:open', () => {
		addFormDelegate(); //disable default form behaviour and add dynamic quick view events
		addBtnDelegate(); //handle add to cart for dynamic model
		AddPromotionAsItemProperty(); //add promotion id as a item property 
	})

	//rebuy add To cart tracking
	document.addEventListener('rebuy:cart.add', (event) => {
		const { item } = event?.detail;
		if (item.properties?._promotionId) {
			addToCartEvent(item, item.properties._promotionName,item.properties._promotionId, item.properties._creativeName) //if it came from promotion, trigger events
		}
	});

	//boost tile loaded on collection pages
	if(window.ProductList) {
		window.ProductList.prototype.afterRender = function () {
			updateProductUrlWithPromotion(); //update all urls with promotion
			AddPromotionAsItemProperty(); //add promotion id as a item property
			const collectionEl = document.querySelector('[data-section-type="collection"]');
			handleClick(collectionEl);
			window.customProductCard();
			addFormDelegate(); //disable default form behaviour and add dynamic quick view events
		    addBtnDelegate();
		}
  }
}



