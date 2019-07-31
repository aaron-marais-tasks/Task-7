/*
	This file contains our left bar's HTML renderer

	It renders my pictures my personal info, and other information
*/

// Import our react library
import React from 'react'

// Import personal information and info item renderer
import { Personal, InfoItem } from './LeftBarComponents.jsx'

// Import the FontAwesomeIcon from our fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import leftbar styling
import '../LeftBar.css'

// Export an anonymous class
export default class extends React.Component {
	render() {
		// Unpack required information from our properties
		const {name, surname, myPic, short, location, email} = this.props.user
		return (
			/* My leftbar container */
			<div className="about">
				{/* My image */}
				<div className="pic">
					<img src={myPic} alt="Me" />
				</div>

				{/* The information in left bar, justified to the end of flex bar */}
				<div className="leftbarEnd">
					{/* My information */}
					<div className="info">
						{/* Personal details */}
						<Personal first={name} last={surname} shortInfo={short} />

						{/* FontAwesome-generated information items, with my city and email address */}
						<InfoItem icon="location-arrow" text={location.city} />
						<InfoItem icon="envelope"><a href={"mailto:" + email}>E-Mail me</a></InfoItem>

						{/* Social links */}
						<div className="social">
							{/* Using "fab" in icon prop since fontawesome uses fab for brands */}
							<InfoItem.Link link="https://github.com/gear4s" icon={["fab", "github"]} />
							<InfoItem.Link link="https://gitlab.com/aaronleem" icon={["fab", "gitlab"]} />
							<InfoItem.Link link="https://linkedin.com/in/aaronleem" icon={["fab", "linkedin"]} />
							<InfoItem.Link link="https://twitter.com/DaddyGruul" icon={["fab", "twitter"]} />
						</div>
					</div>

					{/* Our page's footer */}
					<footer>
						Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" /> using React.JS
					</footer>
				</div>
			</div>
		)
	}
}
