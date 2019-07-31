/*
  This page holds my product components
*/

// Import react into script scope
import React from 'react';

// Export named class "Product" so I can expect with subcomponents after export
export default class Product extends React.Component {
  render() {
    return (
      // Render the products div
      <div className="products">
        {/* Container title */}
        <div className="title">Our Products</div>
        
        {/* Product list */}
        <div className="list">
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Add Item subcomponent to Product
Product.Item = props => (
  // Render each product in a div
  <div className="product">
    {/* Product name */}
    <div className="name">{props.name}</div>
    
    {/* Product description */}
    <div className="description">{props.children}</div>
  </div>
)
