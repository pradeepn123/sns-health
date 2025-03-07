import Delegate from 'ftdomdelegate';

export const addFormDelegate = (dynamicData) => {
    const forms = dynamicData ? document.querySelectorAll('[action="/cart/add"]') : document.querySelectorAll('[action="/cart/add"]') ;
    forms.forEach(form => {
      const formDelegate = new Delegate(form);
      formDelegate.on('submit', (ev) => {
        ev.preventDefault();
        return false;
      })
    })
  }

export const addBtnDelegate = (dynamicData) => {
    const forms = dynamicData ? dynamicData.querySelectorAll('[action="/cart/add"]') : document.querySelectorAll('[action="/cart/add"]') ;
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

export const removeAttributesForCartBinding = (dynamicData) => {
  const dataAttributes = dynamicData ? dynamicData.querySelectorAll('[data-action="add-to-cart"]') : document.querySelectorAll('[data-action="add-to-cart"]');
  dataAttributes.forEach(btn => {
        btn.removeAttribute('data-action');
    })
}

export const removeCartToggleBinding = () => {
   const cartToggle =  document.querySelector('[data-action="toggle-mini-cart"]');
   if(cartToggle) {
    cartToggle.removeAttribute('data-action');
    cartToggle.removeAttribute('href');
   }
   cartToggle.addEventListener('click', () => {
    if(window.Rebuy?.SmartCart?.show) {
        window.Rebuy?.SmartCart?.show();
    } 
   })
}
