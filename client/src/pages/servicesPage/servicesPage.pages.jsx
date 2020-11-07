import React from 'react';
import market from '../../assets/market.jpg';
import farmer from '../../assets/farmer-wheat-crop.jpg';
import fruits from '../../assets/fruit-market.jpg';
import TransparentButton from '../../components/customButton/transparentButton.component';
import './servicesPage.styles.scss';

export default function ServicesPage() {
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
						<TransparentButton title='Contact' link='/contact' />
					</div>
					<div className='img' style={{ backgroundImage: `url(${market})` }} />
				</div>
				<div className='service'>
					<div className='img' style={{ backgroundImage: `url(${farmer})` }} />
					<div className='text'>
						<h3>Want to sell yours Land?</h3>
						<p>Sell or Lease your Land to Us. We will take care of the rest.</p>
						<TransparentButton title='Contact' link='/contact' />
					</div>
				</div>
				<div className='service'>
					<div className='text'>
						<h3>Want to sell yours vegetables?</h3>
						<p>
							Farmers can sell there fresh vegetables and fruits with our company according to the updated
							price of APMC .
						</p>
						<TransparentButton title='Contact' link='/contact' />
					</div>
					<div className='img' style={{ backgroundImage: `url(${fruits})` }} />
				</div>
			</div>
		</div>
	);
}
