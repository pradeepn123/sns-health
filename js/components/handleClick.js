export default () => {

    const handleRedirectOnDiv = (item) => {
        const url = item.dataset.url;
        if (url) {
          window.location.href = url;
        }
      }
    const clickHandle = document.querySelectorAll('[data-redirect-click]');
    clickHandle.forEach(item => item.addEventListener('click', (ev) => {
      if (!ev.target.closest('.product-card__atc')){ 
        handleRedirectOnDiv(item)
    }
    }));
}