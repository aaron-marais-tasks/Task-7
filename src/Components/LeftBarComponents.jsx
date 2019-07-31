/*
	This file holds our left bar's components
*/

// Import React into our scope
import React from 'react'

// Import FontAwesomeIcon from the fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Export our personal function renderer
export const Personal = props => (
	/* My full name container */
	<div className="fullname">
		{/* First and last name */}
		<span className="name">{props.first}</span>
		<span className="surname">{props.last}</span>

		{/* Short information about me */}
		<div className="short">
			{props.shortInfo}
		</div>
	</div>
)

// Export our information item function renderer
export const InfoItem = ({icon, text=undefined, children=undefined}) => (
	/* Information item container. Takes an icon, and either children or text */
	<div className={"infoitem" + (!(text||children) ? " nocontent" : "")}>
		<FontAwesomeIcon icon={icon} />
		{children||text}
	</div>
)

// Add a Link subcomponent to our information item
InfoItem.Link = ({link, icon: ic, text:tx=undefined, children:cd=undefined}) => (
	/* Generate an A link tag with our information item inside it */
	<a href={link}>
		<InfoItem icon={ic} text={tx} children={cd} />
	</a>
)
