/*
	This file contains my header component
*/

// Import react and logo into script scope
import React from 'react';
import Logo from '../Images/logo.png'

// Export an anonymous function as the default export
export default props => 
	// Rendering our header
	<header>
		{/* Our header image */}
		<img src={Logo} alt="logo" />

		{/* If user's logged in, welcome the user, otherwise ask user to sign in */}
		<h1>{props.loggedIn ? "Welcome" : "Please sign in"}</h1>
	</header>
