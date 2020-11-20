import React from 'react';
import './Consumer.styles.scss';

function ConsumerPage() {
	const nameRef = React.useRef('');
	const addressRef = React.useRef('');
	const contactRef = React.useRef('');
	const timeRef = React.useRef();

	function handleSubmit(e) {
		const data = {
			name: nameRef.current.value,
			phno: addressRef.current.value,
			email: contactRef.current.value,
			message: timeRef.current.value
		};
		e.preventDefault();
		fetch('/api/formdata', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => {
				alert('Request Sent!!!');
				console.log(res);
			})
			.catch(err => console.log(err));
	}

	return (
		<div id='consumer-main'>
			<div id='consumer-head'>
				<div id='consumer-back' />
			</div>
			<div id='consumer-info'>
				<h2 style={{ margin: '50px 30px 0 30px' }}>Please Fill the form below to place your order: -</h2>
				<form onSubmit={handleSubmit}>
					<h3>Name</h3>
					<input type='text' name='name' ref={nameRef} />

					<h3>Address</h3>
					<input type='textarea' name='address' ref={addressRef} />

					<h3>Contact Number</h3>
					<input type='text' name='contact' ref={contactRef} />

					<h3>Time To Deliver</h3>
					<input type='time' name='time' ref={timeRef} />

					<button className='button' type='submit'>
						<p>Submit</p>
					</button>
				</form>
			</div>
		</div>
	);
}

export default ConsumerPage;
