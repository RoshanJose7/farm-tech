import React, { useState, useEffect } from 'react';
import { dataAPIKey } from '../../keys';
import ApiData from './ApiData';
import fruits from '../../assets/fruit-market.jpg';
import SolidButton from '../../components/customButton/solidButton.component';
import './servicesPage.styles.scss';

export default function Commodities() {
	const [data, setData] = useState(undefined);
	const [filters, setFilters] = useState({
		name: undefined,
		limit: 20
	});

	useEffect(() => {
		fetch(
			`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${dataAPIKey}&offset=10&limit=1000&format=json&offset=10&filters=fruits%2C%20vegetables`
		)
			.then(res => res.json())
			.then(items => setData(items.records));
	}, []);

	function handleChange(event) {
		setFilters({ ...data, [event.target.name]: event.target.value });
	}

	return (
		<div id='services'>
			<div id='services-head'>
				<div id='services-back' />
				<h1>Services</h1>
			</div>
			<div id='services-info'>
				<div className='service'>
					<div className='text'>
						<h3>Want to sell yours vegetables?</h3>
						<p>
							Farmers can sell there fresh vegetables and fruits with our company according to the updated
							price of APMC .
						</p>
						<SolidButton title='Contact' link='/contact' />
					</div>
					<div className='img' style={{ backgroundImage: `url(${fruits})` }} />
				</div>
				<div id='services-table'>
					<h1>Table with the current prices for fruits and vegetables</h1>
					<div className='filters'>
						<div className='filter'>
							<label>Name of commodities</label>
							<input name='name' onChange={e => handleChange(e)} type='text' placeholder='Item Name' />
						</div>
						<div className='filter'>
							<label>No. of commodities</label>
							<input
								name='limit'
								onChange={e => handleChange(e)}
								type='text'
								placeholder='No of Commodities'
							/>
						</div>
					</div>
					<div className='table'>
						<div className='table-head'>
							<h2
								style={{
									width: '40%'
								}}
							>
								Commodity Name
							</h2>
							<h2>District || State</h2>
							<h2>Min Price (kg)</h2>
							<h2>Max Price (kg)</h2>
							<h2>Modal Price (kg)</h2>
						</div>
						<div className='table-body'>
							<ApiData data={data} limit={filters.limit} filterName={filters.name} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
