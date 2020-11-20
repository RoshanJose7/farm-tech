import React from 'react';
import './Consumer.styles.scss';

function ConsumerPage() {
	return (
		<div id='consumer-main'>
			<div id='consumer-head'>
				<div id='consumer-back' />
			</div>
			<div id='consumer-info'>
				<form>
					<h3>Name</h3>
					<input type='text' name='name' id='' />

					<h3>Address</h3>
					<input type='textarea' name='address' id='' />

					<h3>Contact Number</h3>
					<input type='text' name='contact' id='' />

					<h3>Time To Deliver</h3>
					<input type='time' name='time' id='' />

					<button className='button' type='submit'>
						<p>Submit</p>
					</button>
				</form>
			</div>
		</div>
	);
}

export default ConsumerPage;
