export const Personal = props => (
	<div className="fullname">
		<span className="name">{props.first}</span>
		<span className="surname">{props.last}</span>
		<div className="short">
			{props.shortInfo}
		</div>
	</div>
)

export const InfoItem = ({className, icon, text=undefined, children=undefined}) => (
	<div className="infoitem">
		<FontAwesomeIcon icon={icon} />
		{children||text}
	</div>
)