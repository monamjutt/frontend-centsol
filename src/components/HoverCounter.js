import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementClick}>{this.props.name} hovered text - {this.props.click}</h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 2)