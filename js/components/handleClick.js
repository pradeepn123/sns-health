import { itemClickEvents } from "JsComponents/gtm-event-trigger";

export default (dynamicElements) => {
  const handleRedirectOnDiv = (item) => {
    debugger;
    const url = item.dataset.url || item.href;
    if (item.closest('[data-promotion]') || item.closest('[data-promotion-product-url]')) {
      itemClickEvents(item, url);
    }
    else if (url) {
      window.location.href = url;
    }
  }
  const clickHandle = dynamicElements ? dynamicElements.querySelectorAll('[data-js-click]') : document.querySelectorAll('[data-redirect-click]');
  clickHandle.forEach(item => item.addEventListener('click', (ev) => {
    if (!ev.target.closest('.product-card__atc')) {
      handleRedirectOnDiv(item)
    }
  }));
}