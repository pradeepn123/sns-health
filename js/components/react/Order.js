
import React, { useState, useEffect, useRef } from "react";
import OrderItem from "./order-item";
import { useReactToPrint } from "react-to-print";

// order status constants 
const orderStatusConst = {
    "recieved": "Order Received",
    "cancelled": "Order Cancelled",
    "shipped": "Order Shipped",
    "delivered": "Order Delivered",
    "shipped_partial": "Order Partially Shipped"
}

const arrow = `<svg width="30" height="8" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5575 0.221191L5 3.65619L8.4425 0.221191L9.5 1.27869L5 5.7787L0.5 1.27869L1.5575 0.221191Z" fill="#0086BF"/>
                </svg>`;

export const SvgIcon = ({ icon, svgClass }) => {
    return <span className={svgClass} dangerouslySetInnerHTML={{ __html: icon }}></span>
}

export default ({ data: orderData, search }) => {
    const { fulfillment_status = '', name = '', line_items: lineItems = [], total_price: totalPrice, created_at: savedTime, item_count: totalQuantity, id: orderId, url } = orderData || {};
    const [first, second, ...otherProducts] = lineItems || []
    const topFoldContents = [first, second].filter(item => item && item);
    const hiddenContents = [...otherProducts];
    const [active, setActive] = useState(false);
    const [renderProducts, updateRenderProducts] = useState(topFoldContents);
    const [baseLineItems, setBaseLineItems] = useState([...lineItems])
    const invoiceComponent = useRef();
    const [invoiceData, setInvoiceData] = useState('');
    
    // on click of invoice button on any order call downloadInvoice with order url as params
    function downloadInvoice(url, id) {
      try {
        fetch(url + "?view=invoice").then(res => res.text()).then((data) => {
          setInvoiceData(data)
          setTimeout(handlePrint, 100);
        })
      } catch (error) {
        console.log(error)
        alert("Something went wrong while fetching your invoice. Please try again after sometime")
      }
    }


  const handlePrint = useReactToPrint({
    content: () => invoiceComponent.current,
  });


    useEffect(() => {
        active ?
            updateRenderProducts([...renderProducts, ...hiddenContents])
            : updateRenderProducts([...topFoldContents]);
    }, [active])

    useEffect(() => {
        console.log('search', search == "");
        if (search != "") {
            let sortedLines = [...lineItems].sort((a, b) => {
                if (b.title.toLowerCase().includes(search.toLowerCase())) return 1
                if (a.title.toLowerCase().includes(search.toLowerCase())) return -1
                return 0
            })
            setBaseLineItems([...sortedLines])
        }
    }, [search])

    // set order status and tracking url
    let trackingUrl = lineItems.map(item => item.tracking_url)[0];
    let orderStatus = "";
    if (orderData.tags?.includes("order_delivered")) {
        orderStatus = "delivered"
    } else if (orderData.tags?.includes("order_in-transit") || trackingUrl) {
        orderStatus = "shipped"
    } else if (orderData.cancelled == "true") {
        orderStatus = "cancelled"
    } else {
        orderStatus = "recieved";
    }
    const formatedDate = new Date(savedTime.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3')).toLocaleString(
        "en-CA",
        {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
    );

    return (

        <div className="account-orders__container">
            <div className="account-orders__status-invoice-wrap">
                <div className="account-orders__order-status">Order status: <span className={`account-orders__order-status-${orderStatus}`}>{orderStatusConst[orderStatus]}</span></div>
                <div className="account-orders__tracking-invoice-wrap">
                    <div>{trackingUrl && <a href={trackingUrl}>Track the order</a>}</div>
                    <div><button className="account-orders__invoice-btn" onClick={() => downloadInvoice(url, name)}>Invoice</button></div>
                </div>
            </div>
            <div className="account-orders__status-invoice-wrap">
                <div className="account-orders__order-detail-wrap ">
                    <div className="account-orders__order-placed account-orders__grid"><span className="account-orders__heading">Order Placed on</span><span className="account-orders__heading-value">{formatedDate}</span></div>
                    <div className="account-orders__order-id account-orders__grid"><span className="account-orders__heading">Order ID</span><span className={`account-orders__heading-value${search && name.includes(search) ? " order-higlight" : ""}`}>{name}</span></div>
                    <div className="account-orders__order-quantity account-orders__grid"><span className="account-orders__heading">Quantity</span><span className="account-orders__heading-value">{totalQuantity}</span></div>
                    <div className="account-orders__order-price account-orders__grid"><span className="account-orders__heading">Total</span><span className="account-orders__heading-value">{totalPrice}</span></div>
                    {
                        trackingUrl &&
                        <div className="account-orders__tracking-invoice-wrap-mobile">{<a href={trackingUrl}>Track the order</a>}</div>
                    }
                    <div className="account-orders__tracking-invoice-wrap-mobile"><button className="account-orders__invoice-btn" onClick={() => downloadInvoice(url)}>Invoice</button></div>
                </div>
            </div>
            <div className="account-orders__order-wrapp">
                <div>
                    {!active && baseLineItems.map((item, index) => {
                        if (index < 2) {
                            return <OrderItem data={item} key={index} search={search} />
                        }
                    })}
                    {active && baseLineItems.map((item, index) => {
                        return <OrderItem data={item} key={index} search={search} />
                    })}
                </div>
                <div className="account-orders__repeat-order account-heading__mobile-hidden"><a className="account-orders__btn" href={`https://snshealth.com/apps/rebuy/reorder?shopify_order_id=${orderId}&_kx=`}>Repeat Order</a></div>
            </div>
            {hiddenContents.length > 0 &&
                <button className="account-orders__more-button" onClick={() => { setActive(!active) }}> {!active ? hiddenContents.length : ''} {!active ? "More" : "Less"}<SvgIcon svgClass={`__arrow ${!active ? "" : "account-orders__arrow-active"}`} icon={arrow} /></button>
            }

            <a className="account-orders__btn" href={`https://snshealth.com/apps/rebuy/reorder?shopify_order_id=${orderId}&_kx=`}><div className="account-orders__repeat-order account-heading__desktop-hidden">Repeat Order</div></a>
            <div id="invoice-element" dangerouslySetInnerHTML={{ __html: invoiceData }} ref={invoiceComponent} />
        </div >

    )
}