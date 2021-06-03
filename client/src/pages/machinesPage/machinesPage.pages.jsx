import React from 'react';
import SolidButton from '../../components/customButton/solidButton.component';
import './machinesPage.styles.css';

function hotelPage() {
	return (
		<div id='hotel'>
			<div id='hotel-head'>
				<h1>Go Cost-Effective</h1>
				<div id='hotel-back' />
			</div>

			<div id='hotel-content'>
				<div id='hotel-text'>
					<h2>Get Fresh Vegetables, with exclusive offers and delivery facilities.</h2>
				</div>
			</div>

			

			<div id='end-contact'>
				<p>For furthur enquires you can contact us.</p>
				<SolidButton title='Contact' link='/contact' />
			</div>
		</div>
	);
}

export default hotelPage;
