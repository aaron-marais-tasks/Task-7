import React from 'react';
import Logo from '../Images/logo.png'

export default props => 
	<header>
		<img src={Logo} alt="logo" />
		<h1>{props.loggedIn ? "Welcome" : "Please sign in"}</h1>
	</header>
