import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Personal = props => (
	<div className="fullname">
		<span className="name">{props.first}</span>
		<span className="surname">{props.last}</span>
		<div className="short">
			{props.shortInfo}
		</div>
	</div>
)

const InfoItem = ({className, icon, text=undefined, children=undefined}) => (
	<div className="infoitem">
		<FontAwesomeIcon icon={icon} />
		{children||text}
	</div>
)

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
