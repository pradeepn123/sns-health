import React, { useEffect, useState, Component } from "react";
import Profile from 'ReactComponents/Profile';
import Addresses from "./Addresses";
import OrdersData from "./ordersData";
import Discounts from "./discount";
import { Tab } from '@headlessui/react';

const logoutIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12729 3.9873C5.91815 3.9873 4.12729 5.77817 4.12729 7.9873V24.0128C4.12729 26.2219 5.91815 28.0128 8.12729 28.0128H20.4118V25.3461H8.12729C7.39091 25.3461 6.79396 24.7492 6.79396 24.0128V7.9873C6.79396 7.25092 7.39091 6.65397 8.12729 6.65397H20.4118V3.9873H8.12729ZM19.3978 10.276L23.922 14.8002H11.8679V17.2002H23.922L19.563 21.5593L21.2601 23.2563L27.6676 16.8488C28.1362 16.3801 28.1362 15.6203 27.6676 15.1517L21.0949 8.57898L19.3978 10.276Z" fill="#ED1C24"/>
</svg>`;
const helpCenter = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_3025_2926" fill="white">
<rect x="3" y="3" width="27" height="27" rx="2"/>
</mask>
<rect x="3" y="3" width="27" height="27" rx="2" stroke="black" stroke-width="4.66" mask="url(#path-1-inside-1_3025_2926)"/>
<path d="M15.5034 20.9063V20.8031C15.5147 19.7075 15.6281 18.8356 15.8435 18.1874C16.059 17.5392 16.3651 17.0143 16.7619 16.6128C17.1587 16.2113 17.6349 15.8413 18.1905 15.5029C18.5249 15.2964 18.8254 15.0526 19.0918 14.7715C19.3583 14.4847 19.568 14.1549 19.7211 13.782C19.8798 13.4092 19.9592 12.9962 19.9592 12.543C19.9592 11.9809 19.8288 11.4933 19.568 11.0803C19.3073 10.6673 18.9586 10.3489 18.5221 10.1252C18.0856 9.90153 17.6009 9.78967 17.068 9.78967C16.6032 9.78967 16.1553 9.88719 15.7245 10.0822C15.2937 10.2772 14.9337 10.5841 14.6446 11.0029C14.3554 11.4216 14.1882 11.9694 14.1429 12.6463H12C12.0454 11.6711 12.2948 10.8365 12.7483 10.1424C13.2075 9.44838 13.8112 8.91778 14.5595 8.55067C15.3135 8.18356 16.1497 8 17.068 8C18.0658 8 18.9331 8.20076 19.6701 8.60229C20.4127 9.00382 20.9853 9.55449 21.3878 10.2543C21.7959 10.9541 22 11.7514 22 12.6463C22 13.2772 21.9036 13.848 21.7109 14.3585C21.5238 14.869 21.2517 15.325 20.8946 15.7266C20.5431 16.1281 20.1179 16.4837 19.619 16.7935C19.1202 17.109 18.7205 17.4417 18.4201 17.7916C18.1196 18.1358 17.9014 18.5459 17.7653 19.022C17.6293 19.4981 17.5556 20.0918 17.5442 20.8031V20.9063H15.5034ZM16.5918 26C16.1723 26 15.8124 25.848 15.5119 25.544C15.2115 25.24 15.0612 24.8757 15.0612 24.4512C15.0612 24.0268 15.2115 23.6625 15.5119 23.3585C15.8124 23.0545 16.1723 22.9025 16.5918 22.9025C17.0113 22.9025 17.3713 23.0545 17.6718 23.3585C17.9722 23.6625 18.1224 24.0268 18.1224 24.4512C18.1224 24.7323 18.0516 24.9904 17.9099 25.2256C17.7738 25.4608 17.5896 25.6501 17.3571 25.7935C17.1304 25.9312 16.8753 26 16.5918 26Z" fill="black"/>
</svg>`;

let popStateActive = true;
export const SvgIcon = ({ icon, svgClass }) => {
  return <span className={svgClass} dangerouslySetInnerHTML={{ __html: icon }}></span>
}

export default ({ shopifyData }) => {
  let initialOrders = {}
  const [selectedIndex, setSelectedIndex] = useState(0)
  shopifyData.orders.data.forEach(item => initialOrders[item.id] = item);
  const [ordersData, setOrdersData] = useState({ ...initialOrders });
  const [allOrdersFetched, setAllOrdersFetched] = useState(false);

  useEffect(() => {
    getOrders();
    const url = window.location.search;
    if (!url) {
      let isAddressesPage = window.location.pathname.split('account/')[1];
      if (isAddressesPage) setSelectedIndex(2)
    } else {
      (url == '?tab=orders') ? setSelectedIndex(1) : (url == '?tab=addresses') ? setSelectedIndex(2) : (url == '?tab=discount') ? setSelectedIndex(3) : null
    }
  }, [])

  useEffect(() => {
    if (!popStateActive) {
      let tab = window.location.search.split("tab=")[1];
      console.log('url', selectedIndex, tab)
      if (selectedIndex == 1 && tab != 'orders') {
        let params = new URLSearchParams(window.location.search);
        params.set('tab', 'orders');
        history.pushState({ "tab": "orders" }, "", window.location.pathname + "?" + params.toString());
      } else if (selectedIndex == 2 && tab != 'addresses') {
        let params = new URLSearchParams(window.location.search);
        params.set('tab', 'addresses');
        history.pushState({ "tab": "addresses" }, "", window.location.pathname + "?" + params.toString());
      } else if (selectedIndex == 3 && tab != 'discount') {
        let params = new URLSearchParams(window.location.search);
        params.set('tab', 'discount');
        history.pushState({ "tab": "discount" }, "", window.location.pathname + "?" + params.toString());
      } else if (selectedIndex == 0 && tab != 'profile') {
        let params = new URLSearchParams(window.location.search);
        params.set('tab', 'profile');
        history.pushState({ "tab": "profile" }, "", window.location.pathname + "?" + params.toString());
      }
    } else {
      popStateActive = false;
    }
  }, [selectedIndex])

  window.addEventListener('popstate', (event) => {
    if ((event.state?.tab == 'orders' && selectedIndex != 1) || (event.state?.tab == 'addresses' && selectedIndex != 2) || (event.state?.tab == 'discount' && selectedIndex != 3) || selectedIndex != 0) {
      popStateActive = true;
    }
    const tab = event.state?.tab
    tab == 'orders' ? setSelectedIndex(1) : tab == 'addresses' ? setSelectedIndex(2) : tab == 'discount' ? setSelectedIndex(3) : setSelectedIndex(0);
  })

  async function getOrders(page = 1) {
    try {
      let url = `/account?page=${page}&view=orders`;
      let fetchedOrders = {};
      const response = await fetch(url).then(res => res.json());
      response.data.forEach(item => fetchedOrders[item.id] = item);
      setOrdersData({ ...ordersData, ...fetchedOrders });
      if (response.hasNext) {
        getOrders(++page);
      } else {
        setAllOrdersFetched(true)
      }
    } catch (error) {
      console.log({ page, error });
    }
  }
  return (
    <div className="account-heading__wrap">
      <Tab.Group
        vertical selectedIndex={selectedIndex} onChange={setSelectedIndex} >
        <Tab.List className="account-heading__tab-group">
          <div className="account-heading__mobile account-heading__desktop-hidden">
            <h2>My Account</h2>
            <a href="/account/logout" data-exclude-instant>Log out</a>
          </div>
          <div className="account-heading__item-list account-heading__padding-bottom account-heading__mobile-hidden">
            <div className="account-heading__name">Hi, {shopifyData.profile.data.first_name} {shopifyData.profile.data.last_name}</div>
            <div className="account-heading__email">{shopifyData.profile.data.email}</div>
          </div>
          <div className="account-heading__item-list">
            {Object.keys(shopifyData).map((key) => (
              <Tab key={key} className="account-heading__item-block">
                <div className="account-heading__item-value">
                  <SvgIcon svgClass="account-heading__icon account-heading__active-icon" icon={shopifyData[key].icon.active} />
                  <SvgIcon svgClass="account-heading__icon account-heading__normal-icon" icon={shopifyData[key].icon.normal} />
                  <span className="account-heading__title">{shopifyData[key].title}</span>
                </div>
              </Tab>
            ))}
             <div className="account-heading__item-block">
              <a href="https://help.snshealth.com/" className="account-heading__item-value">
                <SvgIcon svgClass="account-heading__icon account-heading__normal-icon" icon={helpCenter} /> <span>Help Center</span>
              </a>
            </div>
            <div className="account-heading__item-block account-heading__logout">
              <a href="/account/logout" className="account-heading__item-value" data-exclude-instant>
                <SvgIcon svgClass="account-heading__icon account-heading__normal-icon" icon={logoutIcon} /> <span>Log out</span>
              </a>
            </div>
          </div>
        </Tab.List>

        <Tab.Panels className="account-heading__item-content">

          <Tab.Panel>
            <Profile data={shopifyData.profile.data} />
          </Tab.Panel>
          <Tab.Panel>
            <OrdersData ordersData={ordersData} allOrdersFetched={allOrdersFetched}  />
          </Tab.Panel>
          <Tab.Panel>
            <Addresses data={shopifyData.addresses.data} classNameName="account_addresses-container" />
          </Tab.Panel>
          <Tab.Panel>
            <Discounts ordersData={ordersData} allOrdersFetched={allOrdersFetched}/>
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>

    </div>
  )
}