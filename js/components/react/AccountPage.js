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
<path d="M4 17.1672C4 18.1424 4 21.029 4 21.4603V24.3947C4 24.6709 4.22386 24.8947 4.5 24.8947H6.08696M4 17.1672C4 15.5537 4 15.4428 4 12.8741C4 7.72239 9.21739 3 16 3C22.7826 3 28 7.72239 28 12.8741V17.1672M4 17.1672H7C7.27614 17.1672 7.5 17.391 7.5 17.6672V24.3947C7.5 24.6709 7.27614 24.8947 7 24.8947H6.08696M28 17.1672V21.4603V24.3947C28 24.6709 27.7761 24.8947 27.5 24.8947H25C24.7239 24.8947 24.5 24.6709 24.5 24.3947V17.6672C24.5 17.391 24.7239 17.1672 25 17.1672H28ZM6.08696 24.8947V24.8947C6.08696 27.162 7.92515 29 10.1924 29C11.7908 29 13.2852 29 15.5 29M15.5 29V28.5C15.5 28.2239 15.7239 28 16 28H17C17.2761 28 17.5 28.2239 17.5 28.5V29.5C17.5 29.7761 17.2761 30 17 30H16C15.7239 30 15.5 29.7761 15.5 29.5V29Z" stroke="black" stroke-width="2.33"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2047 12C9.56956 12 9.05469 12.5149 9.05469 13.15C9.05469 13.7851 9.56956 14.3 10.2047 14.3H21.7917C22.4268 14.3 22.9417 13.7851 22.9417 13.15C22.9417 12.5149 22.4268 12 21.7917 12H10.2047ZM12.5221 16.6348C11.887 16.6348 11.3721 17.1497 11.3721 17.7848C11.3721 18.4199 11.887 18.9348 12.5221 18.9348H19.4743C20.1094 18.9348 20.6243 18.4199 20.6243 17.7848C20.6243 17.1497 20.1094 16.6348 19.4743 16.6348H12.5221Z" fill="black"/>
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
              <a href="https://help.snshealth.com/" className="account-heading__item-value" target="_blank" >
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