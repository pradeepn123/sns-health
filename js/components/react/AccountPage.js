import React, { useEffect, useState, Component } from "react";
import Profile from 'ReactComponents/Profile';
import Addresses from "./Addresses";
import OrdersData from "./ordersData";
import { Tab } from '@headlessui/react';
import ResponsiveImage from "./ResponsiveImage";

const logoutIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12729 3.9873C5.91815 3.9873 4.12729 5.77817 4.12729 7.9873V24.0128C4.12729 26.2219 5.91815 28.0128 8.12729 28.0128H20.4118V25.3461H8.12729C7.39091 25.3461 6.79396 24.7492 6.79396 24.0128V7.9873C6.79396 7.25092 7.39091 6.65397 8.12729 6.65397H20.4118V3.9873H8.12729ZM19.3978 10.276L23.922 14.8002H11.8679V17.2002H23.922L19.563 21.5593L21.2601 23.2563L27.6676 16.8488C28.1362 16.3801 28.1362 15.6203 27.6676 15.1517L21.0949 8.57898L19.3978 10.276Z" fill="#ED1C24"/>
</svg>`;
let popStateActive = true;
export const SvgIcon = ({ icon, svgClass }) => {
  return <span className={svgClass} dangerouslySetInnerHTML={{ __html: icon }}></span>
}

export default ({ shopifyData }) => {
  // console.log('shopifydata', shopifyData);
  const [currentPage, setCurrentPage] = useState("profile")
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const url = window.location.href.split('#')[1];
    if (!url && window.location.pathname.split('account/')[1] == 'addresses') {
      setSelectedIndex(2)
    } else {
      (url == 'orders') ? setSelectedIndex(1) : (url == 'addresses') ? setSelectedIndex(2) : null
    }
  }, [])

  useEffect(() => {
    if (!popStateActive) {
      console.log('selectedIndex', selectedIndex);
      if (selectedIndex == 0) {
        history.pushState({ tab: 'profile' }, "", "/account")
        console.log('pushed p');
      } else if (selectedIndex == 1) {
        history.pushState({ tab: 'orders' }, "", "/account#orders")
        console.log('pushed o');
      } else if (selectedIndex == 2) {
        history.pushState({ tab: 'addresses' }, "", "/account/addresses")
        console.log('pushed a');
      }
    } else {
      popStateActive = false;
    }
  }, [selectedIndex])

  window.addEventListener('popstate', (event) => {
    if ((event.state?.tab == 'orders' && selectedIndex != 1) || (event.state?.tab == 'addresses' && selectedIndex != 2) || selectedIndex != 0) {
      popStateActive = true;
    }
    const tab = event.state?.tab
    console.log(tab)
    tab == 'orders' ? setSelectedIndex(1) : tab == 'addresses' ? setSelectedIndex(2) : setSelectedIndex(0);
  })

  const image_aspect_ratio = 1; // Get it from line_item.image.aspect_ratio
  const image = shopifyData.orders.data[0].line_items[0].image // Get it from line_item.image
  const srcTokens = {
    replacementToken: "width=2000",
    dataSrcToken: "{width}",
    srcToken: "width=10",
  };

  return (
    <div className="account-heading__wrap">
      <Tab.Group
        vertical selectedIndex={selectedIndex} onChange={setSelectedIndex} >
        <Tab.List className="account-heading__tab-group">
          <div className="account-heading__mobile account-heading__desktop-hidden">
            <h2>My Account</h2>
            <a href="/account/logout">Log out</a>
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
            <div className="account-heading__item-block account-heading__logout">
              <a href="/account/logout" className="account-heading__item-value">
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
            <OrdersData data={shopifyData.orders.data} />
          </Tab.Panel>
          <Tab.Panel>
            <Addresses data={shopifyData.addresses.data} classNameName="account_addresses-container" />
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>

    </div>
  )
}