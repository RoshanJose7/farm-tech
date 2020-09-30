import React from 'react';
import { Link } from 'react-router-dom';
import './customButton.styles.scss';

const SolidButton = ({ title, link }) => {
	return (
		<Link to={link}>
			<div className='button' id='solid-button'>
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default SolidButton;
