import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../customButton/navButton.component';
import './navBar.styles.scss';

const NavBar = () => {
	const LinkStyles = {
		textDecoration: 'none',
		color: 'black'
	};

	useEffect(() => {
		const burger = document.querySelector('#burger');
		const nav = document.querySelector('#nav-links');
		const navLinks = document.querySelectorAll('#nav-links li');
		const body = document.querySelector('body');

		//Close the navbar when a nav-link is clicked
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				// Toggle Nav
				nav.classList.toggle('open');
				// Burger Animation
				burger.classList.toggle('toggle');
			});
		});

		burger.addEventListener('click', () => {
			//to stop scrolling
			body.classList.toggle('fixed-position');
			// Toggle Nav
			nav.classList.toggle('open');
			// Burger Animation
			burger.classList.toggle('toggle');
		});
	});

	return (
		<nav>
			<div id='logo'>
				<Link style={LinkStyles} to='/'>
					<h1>LOGO</h1>
				</Link>
			</div>
			<ul id='nav-links'>
				<Link style={LinkStyles} to='/about'>
					<li>About</li>
				</Link>
				<Link to='/services'>
					<li>Services</li>
				</Link>
				<Link to='/contact'>
					<li>Contact</li>
				</Link>
				<li>
					<NavButton title='TAKE ACTION' link='#'>
						Take Action
					</NavButton>
				</li>
			</ul>
			<div id='burger'>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
};

export default NavBar;
