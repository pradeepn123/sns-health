import { writable } from 'svelte/store';


export const cartContents = writable({});

export const finalBundlePrice = {
  12: 49.00,
  24: 85.00,
  36: 120.00
}

let localStorageData = JSON.parse(window.localStorage.getItem("bundleCartData") || "{}");

cartContents.update(contents => {contents = {...localStorageData} ; return contents});

const syncLocalStorage = (data) => {
localStorage.setItem("bundleCartData", JSON.stringify({}));
 localStorage.setItem("bundleCartData", JSON.stringify(data));
}

window.addedBundleProducts = [];

export const updateQuantity = (item, quantity) => {
  const id = item.id;
  cartContents.update((contents) => {

    if (quantity <= 0) {
      delete contents[id];
    }
    else {
      contents[id].quantity = quantity
    }
    syncLocalStorage(contents);
    return contents;
  })
}

export const addProduct = (productObj) => {
  const variantId = productObj.id;
  cartContents.update((contents) => {
    contents[variantId] = productObj;
    syncLocalStorage(contents);
    return contents;
  })
}


export const clearMiniCart = () => cartContents.update((contents) => {contents = {}; syncLocalStorage(contents); return contents});


