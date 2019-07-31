/*
  This file handles our main application
*/

// Import react into script scope
import React from 'react'

// Import our styling
import './App.css'

// Import our core components
import Header from './Components/Header'
import Product from './Components/Product'
import Landing from './Components/Landing'

// Our products list
const products = [
  {name: "PHPBadWeather", description: "This IDE is used for PHP development"},
  {name: "PythonCharmer", description: "This IDE is used for Python development"},
  {name: "WebCloudy", description: "This IDE is used for web development"},
  {name: "SeeTiger", description: "This IDE is used for C development"},
  {name: "GrippedData", description: "This IDE is used for Data Science"},
  {name: "RubyGemstones", description: "This IDE is used for Ruby development"}
]

// Export an anonymous classs as the default export
export default class extends React.Component {
  render() {
    return (
      {/* Our application container */}
      <div className="App">
        {/* Our header; pass loggedIn as false */}
        <Header loggedIn={false} />

        {/* The landing page component */}
        <Landing name="I.T. Infinity">We are a collection that strives for good computers</Landing>

        {/* The product's container */}
        <Product>
          {/* Populate products by looping over the array, and return a product item */}
          {products.map(({name: n, description: d}, index) => <Product.Item key={index} name={n}>{d}</Product.Item>)}
        </Product>
      </div>
    )
  }
}
