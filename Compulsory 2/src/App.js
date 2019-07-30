import React, {Component} from 'react'
import './App.css'
import Me from './Images/Me.jpg'

import About from './Components/LeftBar.jsx'

import {library} from '@fortawesome/fontawesome'
import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(faLocationArrow, faEnvelope, fab);

const me = {
  name: "Aaron",
  surname: "Marais",
  email: "its_me@aaronleem.co.za",
  short: "Junior Web Developer",
  born: {year: 1996, month: 11, day: 11},
  myPic: Me,
  location: {city: "Cape Town", country: "South Africca"}
}

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <About user={me} />
      </React.Fragment>
    )
  }
}
