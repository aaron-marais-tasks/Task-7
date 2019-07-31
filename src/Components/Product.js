import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div className="products">
        <div className="title">Our Products</div>
        <div className="list">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Product.Item = props => (
  <div className="product">
    <div className="name">{props.name}</div>
    <div className="description">{props.children}</div>
  </div>
)
