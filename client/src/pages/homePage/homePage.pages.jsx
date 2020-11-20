import React from 'react';
import TransparentButton from '../../components/customButton/transparentButton.component';
import CustomCard from '../../components/card/card.component';
import { Carousel } from 'react-bootstrap';
import './homePage.styles.scss';
import veggies from '../../assets/veggies.jpg';
import shoppingCart from '../../assets/shopping-cart.png';
import farming from '../../assets/farming.jpg';
import fertilizer from '../../assets/veggie-fertilizer.jpg';
import slide1Pic from '../../assets/farm-field.jpg';
import slide2Pic from '../../assets/slide-2.jpg';
import slide3Pic from '../../assets/slide-3.jpeg';

function HomePage() {
	return (
		<div>
			<div id='home'>
				<Carousel className='bg-dark'>
					<Carousel.Item>
						<img
							className='img d-block w-100'
							style={{
								backgroundColor: '#1a6c7a',
								opacity: '0.7'
							}}
							src={slide1Pic}
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>"JAI JAWAN JAI KISSAN"</h3>
							<h5>WELCOME to Krishi-Tech</h5>
							<p>
								Farmer are the backbone of our country,our work is to give support to farmer in this
								technology era.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='img d-block w-100'
							style={{
								backgroundColor: '#1a6c7a',
								opacity: '0.7'
							}}
							src={slide2Pic}
							alt='Second slide'
						/>

						<Carousel.Caption
							className='slide-2-caption'
							style={{
								left: '120px',
								bottom: '40px',
								width: '450px'
							}}
						>
							<p style={{ fontSize: '30px', margin: '0' }}>Small Farmers - Small Retailers</p>
							<p style={{ fontSize: '40px', display: 'block', margin: '0' }}>BIG BUISNESS</p>
							<p style={{ fontSize: '25px', margin: '0' }}>To Find more Retailers:</p>
							<TransparentButton title='Click Here' link='/contact' isTransparent={true} />
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='img d-block w-100' src={slide3Pic} alt='Third slide' />
						<Carousel.Caption
							style={{
								left: '120px',
								top: '50px',
								width: '450px',
								color: 'black'
							}}
						>
							<p style={{ fontSize: '40px', display: 'block', margin: '0' }}>One Stop Farm</p>
							<p style={{ fontSize: '28px', display: 'block', margin: '0' }}>
								We Farm, We Deliver, You Relax.
							</p>
							<div
								style={{ position: 'absolute', left: '120px', top: '420px' }}
								className='button'
								id='solid-button'
							>
								<a href='/consumer'>Order Now</a>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div id='announcements'>
				<div id='announcement-cards'>
					<CustomCard
						title="Fruits and Vegetable's updated prices of APMC"
						imgLink={veggies}
						link='/commodities'
					/>
					<CustomCard title='Sell yours fresh vegetables to us' imgLink={shoppingCart} link='/services' />
					<CustomCard title='Get money by giving your dryland for rent' imgLink={farming} link='/land' />
					<CustomCard
						title='Learn about the Damage cause by chemical fertilizers'
						imgLink={fertilizer}
						link='/fertilizer'
					/>
				</div>
				<div id='announcement-content'>
					<h3>Amazing Things for You</h3>
					<div className='para'>
						<p>
							This website is to give benefits and good services to the farmers.Here you can get the
							updated rate of the vegetable and fruits and also he can sell his vegetables and fruits to
							us.
						</p>
						<p>
							If in case the farmers have a land which is not sutiable for farming then please find your
							solution here.
						</p>
						<div>
							<TransparentButton title='Our History' link='/about' />
						</div>
					</div>
				</div>
			</div>
			<div id='home-contact'>
				<div id='home-contact-content' />
				<h1>CONTACT US</h1>
				<p>
					<span>Contact us on +91-7338095085</span>
					<span>mail us on krishitech@gmail.com</span>
				</p>
				<div className='button-holder'>
					<TransparentButton title='Contact' link='/contact' isTransparent={true} />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
