import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import Delegate from 'ftdomdelegate';
import { collapsible } from "JsComponents/collapsible";
import { register } from 'swiper/element/bundle';
lazysizes.cfg.loadMode = 1;

import headerEvents from 'JsComponents/header';
import handleClick from 'JsComponents/handleClick';
import registerCustomElements from 'JsComponents/registerCustomElements';

document.addEventListener('DOMContentLoaded', () => {
  headerEvents();
  handleClick();
  registerCustomElements();
  collapsible();
  register();
  window.handleJsClick = handleClick;
  const btns =  document.querySelectorAll('[data-action="add-to-cart"]');

  const addDelegate = () => {
    const forms = document.querySelectorAll('[action="/cart/add"]');
    Rebuy?.SmartCart?.unregisterEventListener();
    forms.forEach(form => {
      const formDelegate = new Delegate(form);
      formDelegate.on('submit', (ev) => {
        ev.preventDefault();
        const productForm = Rebuy.util.serializeForm(form);
         Rebuy.Cart.addItem(productForm);
      })
    })
  }
  addDelegate();
  window.addDelegate = addDelegate;
})

