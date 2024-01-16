import React, { useEffect, useState } from "react";
import { Listbox } from '@headlessui/react';
import Order from "./Order";

export default ({ data: orders }) => {

  // create orderData array state
  // create filterDays int state with 30 days as default
  // create ordersToRender array state
  // fetch all orders using getOrders function and update orderData
  // enable filter and search only when all orders are fetched
  // useeffect to listen to filterDays change and run filterOrders function to update ordersToRender

  let initialOrders = {};
  orders.forEach(item => initialOrders[item.id] = item);
  const [ordersData, setOrdersData] = useState({ ...initialOrders });
  const [ordersToRender, setOrdersToRender] = useState({ ...initialOrders });
  const [allOrdersFetched, setAllOrdersFetched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const filterOptions = [
    { name: "last 30 days", value: 30 },
    { name: "last 60 days", value: 60 },
    { name: "last 90 days", value: 90 },
    { name: "older", value: "older" },
    { name: "all orders", value: null }
  ]
  const [filterDays, setFilterDays] = useState(filterOptions[0]);

  useEffect(() => {
    getOrders();
  }, [])

  useEffect(() => {
    if (allOrdersFetched) {
      console.log('all orders fetched')
    }
  }, [allOrdersFetched])

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

  async function getOrders(page = 0) {
    console.log('page', page);
    try {
      let url = "/account?view=orders";
      let fetchedOrders = {};
      if (page) {
        url += `&page=${page}`;
      }
      const response = await fetch(url).then(res => res.json());
      response.data.forEach(item => fetchedOrders[item.id] = item);
      setOrdersData({ ...ordersData, ...fetchedOrders });
      if (response.hasNext) {
        getOrders(++page)
      } else {
        setTimeout(() => {
          setAllOrdersFetched(true)
        }, 5000);
      }
    } catch (error) {
      console.log({ page, error });
    }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearchQuery(value);
  }

  // on click of invoice button on any order call downloadInvoice with order url as params
  async function downloadInvoice(url, id) {
    try {
      let invoiceData = await fetch(url + "?view=invoice").then(res => res.text())
      let invoiceEl = document.createElement('div');
      invoiceEl.innerHTML = invoiceData;
      invoiceEl.id = "invoice-element";
      document.body.appendChild(invoiceEl);
      setTimeout(function () {
        window.print();
        invoiceEl.remove();
      }, 1000)
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching your invoice. Please try again after sometime")
    }
  }

  return (
    <>
      <div className="account-orders__orders-header">
        <div className="account-orders__orders-header-content">
          <h2>My Orders</h2>
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
        </div>
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
      </div>
      <div className="account_orders-content-wrapper">
        {Object.values(ordersToRender).map(order => <Order data={order} downloadInvoice={downloadInvoice} key={order.id} search={searchQuery} />)}
      </div>
    </>
  )
}