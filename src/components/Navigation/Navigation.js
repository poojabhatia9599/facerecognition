import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return (
			<nav style={{ display: 'flex', justifyContent:'flex-end' }}>
				<p onClick={()=>onRouteChange('Signout')} className='pa3 pointer f3 dim underline'>Sign Out</p>
			</nav>
			);
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent:'flex-end' }}>
				<p onClick={()=>onRouteChange('Signin')} className='pa3 pointer f3 dim underline'>Sign In</p>
				<p onClick={()=>onRouteChange('register')} className='pa3 pointer f3 dim underline'>Register</p>
			</nav>
			);
	}
}

export default Navigation;