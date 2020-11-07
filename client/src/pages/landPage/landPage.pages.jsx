import React from 'react';
import SolidButton from '../../components/customButton/solidButton.component';
import './landPage.styles.scss';

export default function LandPage() {
	return (
		<div id='land-main'>
			<div id='land-head'>
				<div id='land-back' />
			</div>
			<div id='land-info'>
				<div className='land'>
					<div className='text'>
						<h1>Give your Land to Us</h1>
						<h3>Want to sell yours Land?</h3>
						<p>Farmers can sell their land to us. And we will take care of the rest.</p>
						<p>For furthur enquires you can contact us.</p>
						<SolidButton title='Contact' link='/contact' />
					</div>
				</div>
			</div>
		</div>
	);
}
