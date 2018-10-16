import React from 'react';
import 'tachyons';
import brain from './brain.png';
import Tilt from 'react-tilt'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner">
					<img style={{paddingTop:'25px'}} alt='logo' src={brain}/>
				</div>
			</Tilt>
		</div>
		);
}

export default Logo;