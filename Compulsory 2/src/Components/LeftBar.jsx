import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../LeftBar.css'

export default class extends React.Component {
	render() {
		const {name, surname, myPic, short, location, email} = this.props.user
		return (
			<div className="about">
				<div className="pic">
					<img src={myPic} alt="Me" />
				</div>
				<div className="info">
					<Personal first={name} last={surname} shortInfo={short} />
					<InfoItem icon="location-arrow" text={location.city} />
					<InfoItem icon="envelope"><a href={"mailto:" + email}>E-Mail me</a></InfoItem>
					<InfoItem icon="github" />
				</div>
			</div>
		)
	}
}
