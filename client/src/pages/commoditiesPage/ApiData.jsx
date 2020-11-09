import React, { useRef } from 'react';

function ApiData({ data, filterName, limit }) {
	const matches = useRef([]);

	function mapData() {
		if (data !== undefined) {
			function removeDuplicateUsingSet(arr) {
				const unique_array = Array.from(new Set(arr));
				return unique_array;
			}

			data = removeDuplicateUsingSet(data);

			if (filterName === undefined || filterName === '') {
				return data.slice(0, limit).map((item, index) => (
					<div className='table-row' key={index}>
						<span
							style={{
								width: '30%'
							}}
							className='table-data'
						>
							{item.commodity}
						</span>
						<span className='table-data'>
							{item.district}
							||
							{item.state}
						</span>
						<span className='table-data'>
							{item.min_price / 100}₹ / {item.min_price}₹
						</span>
						<span className='table-data'>
							{item.max_price / 100}₹ / {item.min_price}₹
						</span>
						<span className='table-data'>
							{item.modal_price / 100}₹ / {item.min_price}₹
						</span>
					</div>
				));
			} else {
				data.filter(item => {
					return item.commodity.toLowerCase() === filterName.toLowerCase()
						? matches.current.push(item)
						: null;
				});

				matches.current = removeDuplicateUsingSet(matches.current);

				return matches.current.map((item, index) => {
					return item.commodity.toLowerCase() === filterName.toLowerCase() ? (
						<div className='table-row' key={index}>
							<span
								style={{
									width: '40%'
								}}
								className='table-data'
							>
								{item.commodity}
							</span>
							<span className='table-data'>
								{item.district}
								||
								{item.state}
							</span>
							<span className='table-data'>{item.min_price / 100}₹</span>
							<span className='table-data'>{item.max_price / 100}₹</span>
							<span className='table-data'>{item.modal_price / 100}₹</span>
						</div>
					) : null;
				});
			}
		} else {
			return <h1>Loading</h1>;
		}
	}

	return <div>{mapData()}</div>;
}

export default ApiData;
