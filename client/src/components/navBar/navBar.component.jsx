import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
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
		const width = window.screen.width;

		if (width < 900) {
			navLinks.forEach(link => {
				link.addEventListener('click', () => {
					//to stop scrolling
					body.classList.toggle('fixed-position');
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
		}
	});

	return (
		<nav>
			<div id='logo'>
				<Link style={LinkStyles} to='/'>
					<img className='logoImg' src={logo} alt='Logo' />
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
				<Link to='/commodities'>
					<li>Commodities</li>
				</Link>
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
