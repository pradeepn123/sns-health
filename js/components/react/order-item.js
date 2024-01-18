import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: "?width={width}&height={height}",
    srcToken: "?width=90&height=90",
};

export default ({ data: lineItem, search }) => {
    let { total_price: lineTotalPrice = 0, title: variantName = '', quantity: singleQuantity, final_line_price: productPrice, image: image, url: productUrl } = lineItem || {};
    variantName = new DOMParser().parseFromString(variantName, "text/html").body.textContent;
    console.log(variantName)
    return (
        <div className="account-orders__product-lane">
            <div className={`account-orders__product-info-wrap${search && variantName.toLowerCase().includes(search?.toLowerCase()) ? " search-highlight-border" : ""}`}>
                <div className="account-orders__image-wrap">
                    <div className="account-orders__image">
                        <a href={productUrl} ><ResponsiveImage image_aspect_ratio={1} image={image} srcTokens={srcTokens} /></a>
                        <span className="account-orders__quantity">{singleQuantity}</span>
                    </div>
                    <div className="account-orders__product-info-list">
                        <div className={`account-orders__title${search && variantName.toLowerCase().includes(search?.toLowerCase()) ? " search-highlight-title" : ""}`}> <a href={productUrl} >{variantName}</a></div>
                        <div className="account-orders__variant">{productPrice} | {variantName.split("-").pop()}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}