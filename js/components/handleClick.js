import { itemClickEvents } from "JsComponents/gtm-event-trigger";

export default (dynamicElements) => {
  const handleRedirectOnDiv = (item, event) => {
    const url = item.dataset.url || item.href;
    if (item.closest('[data-promotion]') || item.closest('[data-promotion-product-url]')) {
      itemClickEvents(item, url, event);
    }
    else if (url) {
      if ((event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank');
      }
      else {
        window.location.href = url;
      }
    }
  }
  const clickHandle = dynamicElements ? dynamicElements.parentElement.querySelectorAll('[data-js-click]') : document.querySelectorAll('[data-js-click]');
  clickHandle.forEach(item => item.addEventListener('click', (ev) => {
    if (!ev.target.closest('.product-card__atc')) {
      handleRedirectOnDiv(item, ev)
    }
  }));
}