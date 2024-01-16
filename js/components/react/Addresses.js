import React, { useEffect } from "react";
import Address from "./Address";

export default ({ data }) => {
  const sortedAddresses = data.sort((a) => a.default ? -1 : 1)

  return (
    <>
      <div className="account_addresses-header account_header">
        <h2 className="account_title">My Address</h2>
        <button className="account_addresses-add account_addresses-add-desktop button" data-action="open-modal" aria-controls="modal-address-new">+ Add address</button>
      </div>
      <div className="account_addresses-content-wrapper">
        {sortedAddresses.map((block, i) =>
          <Address address={block} key={`${block.id}`} />
        )}
      </div>
      <button className="account_addresses-add account_addresses-add-mobile button" data-action="open-modal" aria-controls="modal-address-new">+ Add address</button>
    </>
  )
}