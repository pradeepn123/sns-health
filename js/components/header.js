 export default () => {
 
 //mobile header megamenu
 document.querySelectorAll('[data-megamenu-mobile]').forEach(megamenu => {
    const targetId = megamenu.dataset.megamenuId;
    if (targetId) {
      const targetContainer = document.querySelector(`[data-mobile-megamenu-target-${targetId}]`);
      if (targetContainer) {
        targetContainer.appendChild(megamenu);
      }
    }
  })
//desktop header megamenu
  document.querySelectorAll('[data-megamenu-desktop]').forEach(megamenu => {
    const targetId = megamenu.dataset.megamenuId;
    if (targetId) {
      const targetContainer = document.querySelector(`[data-desktop-megamenu-target-${targetId}]`);
      if (targetContainer) {
        targetContainer.appendChild(megamenu);
      }
    }
  })


  //header
  const headerWrapper = document.querySelector('.shopify-section__header');
  const searchBar = document.querySelector('.header__search-bar-wrapper--mobile');
  const navBar = document.querySelector('.nav-bar__inner');
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    searchBar.style.opacity = 1 - scrollTop / 85
    navBar.style.opacity = 1 - scrollTop / 10;
      if (scrollTop == 0) {
        if (headerWrapper.classList.contains('shopify-section__header--fixed')) {
          headerWrapper.classList.remove('shopify-section__header--fixed');
        }
      }
      else {
        headerWrapper.classList.add('shopify-section__header--fixed');
      }
  }


  //For rebuy tag based
  Window.custom = {
    'rebuyTag': 'minerals'
  };

  window.searchOpen = true;
  window.addEventListener('scroll', () => {
    handleScroll();
  })
}