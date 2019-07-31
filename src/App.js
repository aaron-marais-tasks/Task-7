/*
  This file handles our application rendering
*/

// Import our React library into application scope
import React from 'react'

// Import our application styling
import './App.css'

// Import my image
import Me from './Images/Me.jpg'

// Import our About and Content components
import About from './Components/LeftBar.jsx'
import Content from './Components/MainContent.jsx'

// Import FontAwesome library and its requirements
import { library } from '@fortawesome/fontawesome'
import { faLocationArrow, faEnvelope, faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faGitlab, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

// Populate the FontAwesome library with our required FontAwesome SVG icons
library.add(faLocationArrow, faEnvelope, faHeart, faCoffee, faGithub, faGitlab, faLinkedin, faTwitter);

// Object holding my information
const me = {
  // Basic information: full name, email, description...
  name: "Aaron",
  midname: "Lee",
  surname: "Marais",
  email: "its_me@aaronleem.co.za",
  short: "Junior Web Developer",

  // Object-based properties
  born: {year: 1996, month: 11, day: 11},
  myPic: Me,
  location: {city: "Cape Town", country: "South Africa"},

  // The array of items in the resume
  resume: [
    // Each item becomes a box
    {
      // Box title
      title: "Information",
      // Content is a list of boxes
      boxes: {
        // Format is { "title": ("content" | {value: "content", action: transformedValue => {... action ...}}) }
        
        // Name and location parsed from user object
        "Name": "FROM_USER:name+ +midname+ +surname",
        "Location": "FROM_USER:location.city+, +location.country",

        // Born value gotten from user object, then has an action to transform into readable date
        "Born": {
          value: "FROM_USER:born.day+ +born.month+ +born.year",
          action: string => {
            const [day, month, year] = string.split(" ").map(string => parseInt(string))
            const birthday = new Date(year, month - 1, day)
            const date = new Intl.DateTimeFormat('en-ZA', { year: "numeric", month: "long", day: "2-digit" })
            return date.format(birthday)
          }
        },

        // Age value gotten from user object, then transformed into user's age
        "Age": {
          value: "FROM_USER:born.day+ +born.month+ +born.year",
          action: string => {
            const [day, month, year] = string.split(" ").map(string => parseInt(string))
            const birth = new Date(year, month - 1 , day)
            const age = new Date(Date.now() - birth.getTime())
            return Math.abs(age.getUTCFullYear() - 1970);
          }
        },
        "Phone": "+27 76 619 7593",

        // Email value gotten from user object, then transformed into link
        "E-Mail": {
          value: "FROM_USER:email",
          action: string => <a href={"mailto:" + string}>{string}</a>
        },

        // Address is an array
        "Address": [
          "66 CJ Langenhoven street",
          <br key="1" />,
          "Parow North",
          <br key="2" />,
          "7500"
        ]
      }
    }, {
      // Box title
      title: "Objective",
      // Box content is a listOf strings
      listOf: [
        "8+ years of experience with software and web development",
        "Ability to use user-centric development in combination with full-stack knowledge"
      ]
    }, {
      // Box title
      title: "Education",
      // Box content is an experience array
      experience: [
        // Format is: {title: "", location: "", start: {year: 0, month: 0},
        // end?: {year: 0, : 0}, duties: ["", ...]}
        {
          title: "CoGrammar Software Engineer Bootcamp",
          location: "Salesian's Life Choices, Cape Town",
          start: {year: 2019, month: 4},
          duties: [
            "I will have to make an iTunes API integration using React.JS",
            "I have to create a game using React.JS",
            "I had to create this resume for our class"
          ]
        },
        {
          title: "National Certificate Vocational: Information Technology",
          location: "College of Cape Town, Crawford Campus",
          start: {year: 2013, month: 1},
          end: {year: 2017, month: 12},
          duties: [
            "Programming Fundamentals",
            "Systems Analysis",
            "Data Communition",
            "Networking"
          ]
        }
      ]
    }
  ]
}

// Export an anonymous class as our default export
export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <About user={me} />
        <Content user={me} />
      </React.Fragment>
    )
  }
}
