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

	//Rebuy init 
	//Todo remove this dependancy, !also remove the event from app once removed
	// document.addEventListener('rebuyReadyToRock', () => {
	// 	document.querySelector('.header__cart-toggle--disabled')?.classList.remove('header__cart-toggle--disabled'); //disable cart till rebuy init
	// })

	//rebuy add To cart tracking
	document.addEventListener('rebuy:cart.add', (event) => {
		const { item } = event?.detail;
		if (item.properties?._promotionId) {
			addToCartEvent(item, item.properties._promotionId) //if it came from promotion, trigger events
		}
	});

	//boost tile loaded on collection pages
	if(window.ProductList) {
		window.ProductList.prototype.afterRender = function () {
			updateProductUrlWithPromotion(); //update all urls with promotion
			AddPromotionAsItemProperty(); //add promotion id as a item property
			const collectionEl = document.querySelector('[data-section-type="collection"]');
			handleClick(collectionEl);
		}
  }
}



