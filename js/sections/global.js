import { collapsible } from "JsComponents/collapsible";
import { register } from 'swiper/element/bundle'; //needed for swiper
import {pageLoadEvent,viewPromotionTrigger} from 'JsComponents/gtm-event-trigger'; //gtm trigger event
import eventListeners from 'JsComponents/event-listeners'; //3rd party event listeners
import headerEvents from 'JsComponents/header'; //header
import handleClick from 'JsComponents/handleClick'; //js based handle click
import registerCustomElements from 'JsComponents/registerCustomElements'; //register custom elements
import {addFormDelegate,removeCartToggleBinding} from 'JsComponents/rebuy-cart-integration'; //disable add to cart form submit
import { rebuyAutoAdd } from 'JsComponents/klaiyo-auto-add';



document.addEventListener('DOMContentLoaded', () => {
  headerEvents(); //header and megamenu
  removeCartToggleBinding() //remove toggle click
  eventListeners();
  pageLoadEvent();
  register(); //swiper
  registerCustomElements(); //carousel and product cards
  viewPromotionTrigger();
  handleClick();
  collapsible(); //collapsable
  rebuyAutoAdd();
  addFormDelegate(); //rebuy integration 
})




