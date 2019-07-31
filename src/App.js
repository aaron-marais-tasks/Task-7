import React, {Component} from 'react'
import './App.css'

import Header from './Components/Header'
import Product from './Components/Product'
import Landing from './Components/Landing'

const products = [
  {name: "PHPBadWeather", description: "This IDE is used for PHP development"},
  {name: "PythonCharmer", description: "This IDE is used for Python development"},
  {name: "WebCloudy", description: "This IDE is used for web development"},
  {name: "SeeTiger", description: "This IDE is used for C development"},
  {name: "GrippedData", description: "This IDE is used for Data Science"},
  {name: "RubyGemstones", description: "This IDE is used for Ruby development"}
]

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Header loggedIn={false} />
        <Landing name="I.T. Infinity">We are a collection that strives for good computers</Landing>
        <Product>
          {products.map(({name: n, description: d}, index) => <Product.Item key={index} name={n}>{d}</Product.Item>)}
        </Product>
      </div>
    )
  }
}
