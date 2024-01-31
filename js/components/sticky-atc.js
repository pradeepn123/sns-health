export const stickyATC = () => {
  const options = {
    root: document,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".product-form__add-button.quick-add-to-cart").classList.remove("sticky")
      } else {
        document.querySelector(".product-form__add-button.quick-add-to-cart").classList.add("sticky")
      }
    })
  }, options);
  const target = document.querySelector(".product-form__info-item.product-form__info-item--quantity");
  if (target) observer.observe(target);
}