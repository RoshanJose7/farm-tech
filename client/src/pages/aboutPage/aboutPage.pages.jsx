import React from 'react';
import './aboutPage.styles.scss';

export default function AboutPage() {
	return (
		<div id='about'>
			<div id='about-head'>
				<div id='about-back' />
				<h1>About</h1>
			</div>
			<div id='about-info'>
				<div id='about-info-head'>
					<h1>STARTUP STARTED BY THE FUTURE ENGINEERS</h1>
				</div>
				<div id='about-info-para'>
					<p>
						Agriculture continuous to be the source of livehood for majority of the Indian citizens, As the
						agriculture has vast impact on us either directly or indirectly. During this pandemic period we
						all are going through very tough time especially farmers who have mainly depend on agriculture
						as their main source of income and suffered a lot from this pandemic.
					</p>
					<p>
						As we know technology places important role in all the fields, but the use of technology in
						agriculture is comparatively less compared to other fields.
					</p>
					<p>
						So making use of latest technology in agriculture is very important and it will be profitable
						for farmers and a big boost for Digital India.
					</p>
					<p>
						We are sincerely focusing on the “ATMANIBHAR BHARTH” and mainly on “ATMANIBHAR KRISHI” which as
						announced by our Honorable Prime minister shri Narendra Modi which mainly focus on farmers
						agreement on price, trade,E-Commerce.
					</p>
					<h4>- AGRI-TECH Team</h4>
				</div>
			</div>
			<div id='about-missions'>
				<div className='mission'>
					<h3>Mission</h3>
					<p>“FOR THE FARMERS, TO THE FARMERS”</p>
				</div>
				<div className='mission'>
					<h3>Vision</h3>
					<p>To make the farmer more confident to sell his crop in the market.</p>
				</div>
				<div className='mission'>
					<h3>Values</h3>
					<ul>
						<li>To be honest to farmers</li>
						<li>To a part of farmers growth in this science era</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
