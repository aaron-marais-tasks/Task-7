/*
	This file holds my main content components
*/

// Import React into script scope
import React from "react"

// Import my smooth sccroll polyfill
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// Export the parseUserResume function
export function parseUserResume(value) {
	// If value is just an array, return the value
	if(Array.isArray(value)) return value

	// If any action should be done on return of string, then get that action, and value
	let action
	if(typeof value !== "string") {
		action = value.action
		value = value.value
	}

	// If our value starts with "FROM_USER:" then parse out content
	if(value.startsWith("FROM_USER:")) {
		// Slice our item by colon
		value = value.slice(value.indexOf(':') + 1)

		// Set a temporary variable to hold our output string
		let outputString = ""
		// Loot over items split by a + sign
		for(const item of value.split("+")) {
			// If there's a "." in our line, handle it correctly
			if(item.indexOf('.') !== -1) {
				// Split our item by dots
				const splitValues = item.split('.')

				// Continue if the first item is in the user property
				if(splitValues[0] in this.props.user) {
					// Set our curreent item to be user object, and set isCompleted to tru (default)
					let currentItem = this.props.user,
						isCompleted = true

					// Loop over our split items
					for(const index of splitValues) {
						// If the object keys in the current item include our current index, 
						// then replace the current item with the new item
						if(Object.keys(currentItem).includes(index)) {
							currentItem = currentItem[index]
						} else {
							// If it doesn't exist, log the issue, set icCompleted to false, and break loop
							console.log(`Index "${index}" does not exist in path ` +
										`"${item.slice(0, item.indexOf(index)-1)}"`)
							isCompleted = false
							break
						}
					}

					// If the loop is completed, then update our output string to contain current
					// item value, and continue to next loop instead of inserting into loop again
					if(isCompleted) {
						outputString += currentItem
						continue
					}
				}
			}

			// When loop is not continued above, this will insert the raw item or text into the output string
			outputString += item in this.props.user ? this.props.user[item] : item
		}

		// Update our value to hold the new value. If an action is present, perform the action
		value = action ? action(outputString) : outputString
	}

	// Return the value after processing above
	return value
}

// Export a Box functional component, which is wrapped in a forward reference
// (passes reference from parent)
export const Box = React.forwardRef(
	// Unpack our expected properties, and our reference from parent
	({className=undefined, title, children}, ref) => (
		// If a class name is defined, prepend it onto "box" class, and pass our ref into the div
		<div className={(className || "") + "box"} ref={ref}>
			{/* If a title is set, then display the title, else don't display */}
			{title ? <span className="title">{title}</span> : null}

			{/* The content container holds the children of the box */}
			<div className="content">
				{children}
			</div>
		</div>
	)
)

// Add an InfoBox sub-component to our box component
// We unpack expected properties from first argument
Box.InfoBox = ({title, content=undefined, children=undefined}) => (
	// Our InfoBox is really just a box in disguise, using prepended classname
	<Box className="info" title={title}>
		{/* Either content property, or children, can be present */}
		{content||children}
	</Box>
)

// Add a FullWidthInfoBox sub-component to our box component
// We unpack expected properties from first argument
Box.FullWidthInfoBox = ({title, content=undefined, children=undefined}) => (
	// Our FullWidthInfoBox is reall just a box in disguise, usng prepended className
	<Box className="fw-info">
		{/* Either content, or children, can be present */}
		{content||children}
	</Box>
)
