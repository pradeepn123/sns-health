import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
//lazyload image dependencies

import { collapsible } from "JsComponents/collapsible";
import { register } from 'swiper/element/bundle'; //needed for swiper
import {pageLoadEvent} from 'JsComponents/gtm-event-trigger'; //gtm trigger event
import eventListeners from 'JsComponents/event-listeners'; //3rd party event listeners
import headerEvents from 'JsComponents/header'; //header
import handleClick from 'JsComponents/handleClick'; //js based handle click
import registerCustomElements from 'JsComponents/registerCustomElements'; //register custom elements
import {addFormDelegate,removeCartToggleBinding} from 'JsComponents/rebuy-cart-integration'; //disable add to cart form submit

//config lazyload to default settings
lazysizes.cfg.loadMode = 1;

document.addEventListener('DOMContentLoaded', () => {
  register(); //swiper
  headerEvents(); //header and megamenu
  registerCustomElements(); //carousel and product cards
  handleClick(); //js click handling
  collapsible(); //collapsable
  pageLoadEvent();//tracking
  addFormDelegate(); //rebuy integration 
  eventListeners(); //tracking + rebuy integration + boost
  removeCartToggleBinding() //remove toggle click
})




