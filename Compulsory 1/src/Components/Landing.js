import React from 'react'

export default props => (
  <div className="landing">
    <div className="title">{props.name}</div>
    <div className="description">{props.children}</div>
  </div>
)