import announcementBar from "./announcementBar";
import productCarousel from "./product-carousel";
import reviews from "./customer-reviews";
import categorySection from './category-section'
import customProductCard from './custom-product-card';
import collectionGrid from './collection-grid';
import searchPage from './search-page';
import productTabs from "./product";
import bundleCart from "./bundle-cart"
import AccountPage from "./account-page"
import ReactModal from "./react-modal"
import PredictiveSearch from "./predictive-search";
import countdownBanner from './countdown-banner';

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
    searchPage();
    PredictiveSearch();
    countdownBanner();
    window.customProductCard = customProductCard;
    window.productCarousel = productCarousel;
});