import React, { useState, useEffect } from 'react';
import { dataAPIKey } from '../../keys';
import ApiData from './ApiData';
import './commodities.styles.scss';

export default function Commodities() {
	const [data, setData] = useState();
	const limit = 20;

	useEffect(() => {
		fetch(
			`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${dataAPIKey}&format=json&offset=0&limit=${limit}&filters=fruits%20and%20vegetables`
		)
			.then(res => res.json())
			.then(api => setData(api.records))
			.catch(err => console.log(err));
	}, [!data]);

	return (
		<div id='commodities'>
			<div id='commodities-head'>
				<div id='commodities-back' />
				<h1>Commodities Prices by APMC</h1>
			</div>
			<div id='commodities-info'>
				<h1>Table with the current prices for fruits and vegetables</h1>
				<div id='table'>
					<div id='table-head'>
						<h2
							style={{
								width: '40%'
							}}
						>
							Commodity Name
						</h2>
						<h2>Min Price</h2>
						<h2>Max Price</h2>
						<h2>Modal Price</h2>
					</div>
					<div id='table-body'>
						<ApiData data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}
