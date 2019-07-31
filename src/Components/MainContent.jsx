/*
	This file holds our main content
*/

// Import Reacct into the script scope
import React from 'react'

// Import our stylesheet
import '../Content.css'

// Import our Box component and parseUserResume method
import { Box, parseUserResume } from "./MainContentComponents.jsx"

// Get format method and rename to DateFormatter
const { format: DateFormatter } = new Intl.DateTimeFormat('en-ZA', { year: "numeric", month: "long" })

// Export an anonymous class as default
export default class extends React.Component {
	constructor(props) {
		// Using constsructor to set our refs state
		super(props)

		// Temporary variable for refs
		const refs = {}

		// Loop over user resume items and create refs to them by populating the temporary object
		props.user.resume
			.map(({title}) => title.split(" ").join("-").toLowerCase())
			.forEach(i => refs[i] = React.createRef())

		// Insert refs into our state
		this.state = { refs }
	}

	// This method handles smooth scrolling to our resume boxes
	// Takes resume title as it's argument
	scrollTo(title) {
		// Returns a callback function for onClick of right bar items
		return () => {
			// Constant ref for current ref item
			const ref = this.state.refs[title.split(" ").join("-").toLowerCase()]

			// Scroll ref's current item into view smoothly
			ref.current.scrollIntoView({ behavior: "smooth" })
		}
	}

	render() {
		return (
			// Use a React fragment as the parent container
			<>
				{/* Our right-side scrollers */}
				<div className="scrollers">
					{/* Populate right bar by mapping resume items to their titles only,
						then creating a div element  */}
					{this.props.user.resume.map(({title}, index) => (
						<div onClick={this.scrollTo(title)}>{title}</div>
					))}
				</div>

				{/* Our content container */}
				<div className="content">
					{/* Populated by mapping over resume and getting it's expected properties */}
					{this.props.user.resume.map(({title, listOf, experience=undefined, content=undefined, boxes=undefined, items=undefined}, index) => (
						// Generate a Box component with refs passed back into the div
						<Box title={title} ref={this.state.refs[title.split(" ").join("-").toLowerCase()]} key={index}>
							{/* Anonymous function to generate content based on properties available in current object */}
							{(() => {
								// If content is defined, generate a FullWidthInfoBox component
								if(content !== undefined) {
									return <Box.FullWidthInfoBox title={title} content={content} />
								}

								// If experience is defined, generate a FullWidthInfoBox component
								if(experience !== undefined) {
									return (
										<Box.FullWidthInfoBox title={title}>
											{/* Content is mapped over and replaced by divs, with expected props unpacked */}
											{experience.map(({title, location, start, end=undefined, duties}, index) => {
												// Replace Start with our formatted date
												start = DateFormatter(new Date(start.year, start.month, 1))

												// If end is defined, replace with formatted date
												if(end) {
													end = DateFormatter(new Date(end.year, end.month, 1))
												}

												return (
													// Our experiences container
													<div className="experience" key={index}>
														{/* Generate experience title and subtitle */}
														<div className="title">{title}</div>
														<div className="subtitle">{location} | {start} - {end || "Present"}</div>

														{/* Generate experience duties by mapping over duties array */}
														<ul className="duties">
															{duties.map((duty, index) => <li key={index}>{duty}</li>)}
														</ul>
													</div>
												)
											})}
										</Box.FullWidthInfoBox>
									)
								}

								// If listOf is defined, generate a FullWidthInfoBox component
								if(listOf !== undefined) {
									return (
										<Box.FullWidthInfoBox title={title}>
											<ul>
												{/* Map over listOf and replace with list items */}
												{listOf.map((item, index) => <li key={index}>{item}</li>)}
											</ul>
										</Box.FullWidthInfoBox>
									)
								}

								// If boxes is defined, generate a InfoBox component
								if(boxes !== undefined) {
									// Returns the entries of boxes mapped over and replaced with FullWidthInfoBox components
									return Object.entries(boxes).map(([title, value], index) => (
										<Box.InfoBox title={title} content={parseUserResume.call(this, value)} key={index} />
									))
								}

								// If items is defined, generate a list of FullWidthInfoBox components
								if(items !== undefined) {
									// Returns the items mapped over and replaced with FullWidthInfoBox components
									return items.map(({title, value}, index) => (
										<Box.FullWidthInfoBox title={title} content={parseUserResume.call(this, value)} key={index} />
									))
								}
							})()}
						</Box>
					))}
				</div>
			</>
		)
	}
}
