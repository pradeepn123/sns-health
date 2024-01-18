import React from "react";
import { Menu, Transition } from "@headlessui/react";

export default ({ address }) => {
  const defaultAddressClass = address.default ? " default-address" : "";

  return (
    <div className={`account_addresses-content-block${defaultAddressClass}`}>
      <div className="account_addresses-content-header">
        <div className="account_addresses-content-name">
          <span className="account_name">{address.first_name} {address.last_name}</span>
          <span className="account_phone">{address.phone}</span>
        </div>
        <Menu as="ul" className="account_addresses-options-wrapper">
          <Menu.Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" fill="none" viewBox="0 0 4 18">
              <circle cx="2" cy="2" r="2" fill="#000"></circle>
              <circle cx="2" cy="9" r="2" fill="#000"></circle>
              <circle cx="2" cy="16" r="2" fill="#000"></circle>
            </svg>
          </Menu.Button>
          <Menu.Items static={true} className="account_addresses-options">
            <Menu.Item>
              <button data-action="open-modal" aria-controls={`modal-address-${address.id}`}>Edit</button>
            </Menu.Item>
            <Menu.Item>
              <button onClick={() => { Shopify.CustomerAddress.destroy(address.id); return false }}>Delete</button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div className="account_addresses-content-body">
        <span> {address.address1 !== '' ? address.address1 + ', ' : ''} {address.address2 !== '' ? address.address2 + ', ' : ''}</span>
        <span>{address.city !== '' ? address.city + ', ' : ''}{address.province_code}{address.zip !== "" ? address.zip + ' ,' : ','}</span>
        <span>{address.country}</span>
      </div>
      {/* <button data-action="open-modal" aria-controls={`modal-address-${address.id}`}>Edit</button>
      <button onClick={() => { Shopify.CustomerAddress.destroy(address.id); return false }}>Delete</button> */}
    </div>
  )
}