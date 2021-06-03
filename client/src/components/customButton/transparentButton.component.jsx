import React from 'react';
import { Link } from 'react-router-dom';
import './customButton.styles.css';

const TransparentButton = ({ title, link }) => {
	return (
		<Link to={link}>
			<div className='button' id='transparent-button'>
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default TransparentButton;
