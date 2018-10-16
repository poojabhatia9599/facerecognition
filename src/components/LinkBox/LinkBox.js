import React from 'react';
import './LinkBox.css';

const LinkBox = ({onInputChange, onButtonClick}) => {
	return (
		<div>
			<p className='f3'>
				{'This magic brain will detect pictures in your image. Enter an url and increase your Score!!'}
			</p>
			<div className='center'>
				<div className='form center shadow-2 pa4 br3'>
					<input className='f4 pa2 w-70 center' type='text' placeholder='Enter the url..' onChange={onInputChange}/>
					<button className='f4 w-30 grow white bg-black ph3 pv2 dib link' onClick={onButtonClick}>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default LinkBox;