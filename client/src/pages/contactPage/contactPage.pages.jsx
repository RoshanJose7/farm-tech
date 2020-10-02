import React, { useState } from 'react';
import Map from '../../components/googleMap/googleMap.component';
import './contactPage.styles.scss';

export default function ContactPage() {
	const [data, setData] = useState({
		name: '',
		phno: '',
		email: '',
		message: ''
	});

	function handleSubmit(e) {
		e.preventDefault();
		fetch('http://localhost:3001/api/formdata', {
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

	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });

		if (e.target.name === 'phno') {
			if (isNaN(parseInt(e.target.value)) && e.target.value !== '') {
				alert('Enter a number');
			}
		}
	}

	return (
		<div id='contact'>
			<div id='contact-head'>
				<div id='contact-back' />
				<h1>Contact</h1>
			</div>
			<div id='contact-info'>
				<div id='get-in-touch'>
					<h2>Get In Touch</h2>
					<div id='numbers'>
						<h3>Numbers</h3>
						<p>e-commerce enquiries: - +91-7338095085</p>
						<p>enquiries on selling land: - +91-948718619</p>
					</div>
					<div id='email'>
						<h3>Email</h3>
						<p>agritech@gmail.com</p>
						<p>support@example.com</p>
					</div>
					<div id='work-time'>
						<h3>Buisness Hours</h3>
						<p>Monday - Friday : 9am to 5pm</p>
						<p>Saturday : 10am to 3pm</p>
						<p>Sunday : Closed</p>
					</div>
				</div>
				<div id='contact-form'>
					<h2>Send us a message</h2>
					<form onSubmit={handleSubmit}>
						<input required placeholder='Name' name='name' type='text' onChange={e => handleChange(e)} />
						<input
							required
							placeholder='Phone Number'
							name='phno'
							type='text'
							onChange={e => handleChange(e)}
						/>
						<input required placeholder='Email' name='email' type='text' onChange={e => handleChange(e)} />
						<input
							required
							placeholder='Message'
							name='message'
							type='textarea'
							onChange={e => handleChange(e)}
						/>
						<button type='submit' id='contact-btn'>
							Submit
						</button>
					</form>
				</div>
			</div>
			<Map />
		</div>
	);
}
