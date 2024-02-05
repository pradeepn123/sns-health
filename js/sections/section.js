import announcementBar from "./announcementBar";
import productCarousel from "./product-carousel";
import reviews from "./customer-reviews";
import categorySection from './category-section'
import customProductCard from './custom-product-card';
import collectionGrid from './collection-grid';
import productTabs from "./product";
import bundleCart from "./bundle-cart"
import AccountPage from "./account-page"
import ReactModal from "./react-modal"

document.addEventListener('DOMContentLoaded', () => {
    announcementBar();
    reviews();
    categorySection();
    productCarousel();
    customProductCard();
    collectionGrid();
    productTabs();
    bundleCart();
    AccountPage();
    ReactModal();
    window.customProductCard = customProductCard;
    window.productCarousel = productCarousel;
});