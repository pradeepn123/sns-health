import React from "react";
import DiscountItem from "./discount-item";

export default ({ ordersData }) => {

    let discounts = [];
    Object.values(ordersData).forEach(order => {
        order.discount_applications.forEach(discount => {
            discounts.push({
                title: discount.title,
                created_at: order.created_at,
                name: order.name,
                id: order.id
            })
        });
    })


    return (
        <div className="discount__container">
            <div className="discount__header-content">
                <h2 className="sidebar-title">Used Discounts</h2>
                {discounts.length > 0 ?
                    <div>
                        {discounts.map((discount, index) => <DiscountItem data={discount} key={discount.name + index} order={ordersData[discount.id]} />)}
                    </div>
                    :
                    <div>You have no discounts with your order.</div>
                }
            </div>
        </div>

    )
}


