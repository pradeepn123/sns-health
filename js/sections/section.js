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
import CountdownBanner from './countdown-banner';
import brandLandingPage from "./brand-landing-page";

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
    CountdownBanner();
    brandLandingPage();
    window.customProductCard = customProductCard;
    window.productCarousel = productCarousel;
});