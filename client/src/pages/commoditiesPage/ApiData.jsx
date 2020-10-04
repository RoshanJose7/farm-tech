import React from 'react';

export default function ApiData({ data }) {
	if (data) {
		return data.map(item => (
			<div className='table-row'>
				<span
					style={{
						width: '40%'
					}}
					className='table-data'
				>
					{item.commodity}
				</span>
				<span className='table-data'>{item.min_price / 100}₹</span>
				<span className='table-data'>{item.max_price / 100}₹</span>
				<span className='table-data'>{item.modal_price / 100}₹</span>
			</div>
		));
	} else {
		return (
			<div className='table-row'>
				<h1>Enter no. of commodities...</h1>
			</div>
		);
	}
}
