import announcementBar from "./announcementBar";
import productCarousel from "./product-carousel";
import reviews from "./customer-reviews";
import categorySection from './category-section'
import customProductCard from './custom-product-card';
import productTabs from "./product";

document.addEventListener('DOMContentLoaded', () => {
    announcementBar();
    reviews();
    categorySection();
    productCarousel();
    customProductCard();
    productTabs();
    window.customProductCard = customProductCard;
    window.productCarousel = productCarousel;
});