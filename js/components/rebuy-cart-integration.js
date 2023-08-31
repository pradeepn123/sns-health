import Delegate from 'ftdomdelegate';

export const addFormDelegate = () => {
    const forms = document.querySelectorAll('[action="/cart/add"]');
    forms.forEach(form => {
      const formDelegate = new Delegate(form);
      formDelegate.on('submit', (ev) => {
        ev.preventDefault();
        return false;
      })
    })
  }

export const addBtnDelegate = () => {
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

export const removeAttributesForCartBinding = () => {
    document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
        btn.removeAttribute('data-action');
    })
}
