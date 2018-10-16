import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl , box }) => {
	return (
		<div className='center'>
			<div className='absolute mt2'>
				<img id='inputimage' src={ imageUrl } width='400px' height='auto' alt=''/>
				<div className='bounding_box' style={{ left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow}}></div>
			</div>
		</div>
		);
}

export default FaceRecognition;