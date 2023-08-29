import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import Delegate from 'ftdomdelegate';
import { collapsible } from "JsComponents/collapsible";
import { register } from 'swiper/element/bundle';
import checkRebuy from 'JsComponents/check-rebuy';
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
})

document.addEventListener('DOMContentLoaded', () => {
  const addFormDelegate = () => {
    const forms = document.querySelectorAll('[action="/cart/add"]');
    forms.forEach(form => {
      const formDelegate = new Delegate(form);
      formDelegate.on('submit', (ev) => {
        ev.preventDefault();
      })
    })
  }

  const addBtnDelegate = () => {
    const forms = document.querySelectorAll('[action="/cart/add"]');
    forms.forEach(form => {
      const btn = form.querySelector('[type="submit"]');
      const btnDelegate = new Delegate(btn);
      btnDelegate.off();
      btnDelegate.on('click', (ev) => {
        ev.preventDefault();
        const formEl = ev.target.closest('[action="/cart/add"]');
        const productForm = Rebuy.util.serializeForm(formEl);
        return Rebuy.Cart.addItem(productForm);
      })
    })
  }
  checkRebuy(addFormDelegate);
  window.addFormDelegate = addFormDelegate;
  window.addBtnDelegate = addBtnDelegate;
})

window.addEventListener('variant:changed', () => {
  document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
    btn.removeAttribute('data-action');
  })
  window.addFormDelegate();
})

window.addEventListener('modal:open', () => {
  window.addFormDelegate();
  window.addBtnDelegate();
})

document.addEventListener('rebuyReadyToRock' , () => {
  document.querySelector('.header__cart-toggle--disabled')?.classList.remove('header__cart-toggle--disabled');
})

