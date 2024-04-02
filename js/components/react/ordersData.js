import React, { useEffect, useState, useRef } from "react";
import { Listbox } from '@headlessui/react';
import Order from "./Order";
import { useReactToPrint } from 'react-to-print';

export default ({ ordersData }) => {

  const [ordersToRender, setOrdersToRender] = useState({ ...ordersData });
  const [searchQuery, setSearchQuery] = useState('')


  const filterOptions = [
    { name: "All orders", value: null },
    { name: "Last 30 days", value: 30 },
    { name: "Last 60 days", value: 60 },
    { name: "Last 90 days", value: 90 }
  ]
  const [filterDays, setFilterDays] = useState(filterOptions[0]);

  useEffect(() => {
    setOrdersToRender(filterOrders(filterDays))
  }, [filterDays, searchQuery, ordersData])

  function filterOrders(daysLimit) {
    let filteredOrders;
    if (daysLimit.value == "older") {
      filteredOrders = Object.values(ordersData).filter(order => {
        const createdDate = order.created_at.split(" ")[0];
        const orderDate = new Date(createdDate.replace(/-/g, "/"));
        const today = new Date();
        const timeDiff = today.getTime() - orderDate.getTime();
        const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
        return daysDiff > 90;
      })
    } else if (typeof daysLimit.value == 'number') {
      filteredOrders = Object.values(ordersData).filter(order => {
        const createdDate = order.created_at.split(" ")[0];
        const orderDate = new Date(createdDate.replace(/-/g, "/"));
        const today = new Date();
        const timeDiff = today.getTime() - orderDate.getTime();
        const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
        return daysDiff < daysLimit.value
      })
    } else {
      filteredOrders = { ...ordersData }
    }
    // apply search after filtering done
    if (searchQuery) {
      filteredOrders = Object.values(filteredOrders).filter(order => {
        return order.line_items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())) || order.name.includes(searchQuery)
      })
    }
    return { ...filteredOrders }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearchQuery(value);
  }

  return (
    <>
      <div className="account-orders__orders-header">
        <div className="account-orders__orders-header-content">
          <h2>My Orders</h2>
          {Object.values(ordersToRender).length > 0 &&
            <div className="account-orders__filter-wrapper">
              <span className="account-orders__filter-text"><strong>{Object.values(ordersToRender).length} orders</strong></span>
              <Listbox as="div" className="account-orders__filter" value={filterDays} onChange={setFilterDays}>
                <Listbox.Button className="account-orders__filter-button">
                  <span>{filterDays.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5.5575 6.22119L9 9.65619L12.4425 6.22119L13.5 7.27869L9 11.7787L4.5 7.27869L5.5575 6.22119Z" fill="black" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options static={true} className="account-orders__filter-dropdown">
                  {filterOptions.map((filter, index) => (
                    <Listbox.Option
                      key={index}
                      value={filter}
                      className={filterDays.value == filter.value ? "selected" : ""}
                    >
                      {filter.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          }
        </div>
        {Object.values(ordersToRender).length > 0 &&
          <div className="account-orders__search-wrapper">
            <label htmlFor="search-box" className="visually-hidden">Search by order id or product name</label>
            <input type="text" id="search-box" name="search-box" className="account-orders__orders-search" placeholder="Search by order id / product name" value={searchQuery} onChange={handleSearch} />
            {
              searchQuery ? <button className="account-orders__search-clear" onClick={() => setSearchQuery('')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <g clipPath="url(#a)">
                    <circle cx="12" cy="12" r="12" fill="#E9E9E9" />
                    <path
                      stroke="#B3B3B3"
                      strokeLinecap="square"
                      strokeWidth={1.797}
                      d="m8 16 4-4m0 0 4 4m-4-4L8 8m4 4 4-4"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button> : null
            }
          </div>
        }
      </div>
      <div className="account_orders-content-wrapper">
        {Object.values(ordersToRender).length > 0 ?
          Object.values(ordersToRender).map(order => <Order data={order} key={order.id} search={searchQuery} />)
          :
          <div>You haven't placed any orders yet.</div>
        }
      </div>

    </>
  )
}