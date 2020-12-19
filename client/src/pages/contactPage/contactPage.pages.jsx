import React, { useRef } from 'react';
import Map from './Map';
import './contactPage.styles.scss';

export default function ContactPage() {
	const nameRef = useRef('');
	const phnoRef = useRef('');
	const emailRef = useRef('');
	const messageRef = useRef('');

	function handleSubmit(e) {
		const data = {
			name: nameRef.current.value,
			phno: phnoRef.current.value,
			email: emailRef.current.value,
			message: messageRef.current.value
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
						<p>krishitech@gmail.com</p>
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
						<input required placeholder='Name' name='name' type='text' ref={nameRef} />
						<input required placeholder='Phone Number' name='phno' type='text' ref={phnoRef} />
						<input required placeholder='Email' name='email' type='text' ref={emailRef} />
						<input required placeholder='Message' name='message' type='textarea' ref={messageRef} />
						<button type='submit' id='contact-btn'>
							Submit
						</button>
					</form>
				</div>
			</div>

			<div id='map'>
				<Map />
			</div>
		</div>
	);
}
