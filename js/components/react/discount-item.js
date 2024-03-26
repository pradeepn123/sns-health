import React from "react";
import Order from "./Order";

export default ({ data, order }) => {
	const { created_at: savedTime, name: orderId, title } = data || {};

	const formatedDate = new Date(savedTime.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3')).toLocaleString(
		"en-CA",
		{
			year: 'numeric',
			month: 'long',
			day: '2-digit'
		}
	);

	function openModal() {
		if (window.OpenReactModal) window.OpenReactModal(<Order data={order} search={""}/>)
	}

	return (
		<>
			<div className="discount__container-data">
				<div className="discount__title">{title}</div>
				<div className="discount__content-discount">
					<div className="discount__date discount__flex"><div className="discount__date-id">Date:</div> <div className="discount__order-date discount__order-value">{formatedDate}</div></div>
					<div className="discount__flex"><button className="discount__id" ><div className="discount__date-id">Order no:</div> <div className="discount__order-id discount__order-value" onClick={openModal}>{orderId}</div></button></div>
				</div>
			</div>
		</>
	)
}




