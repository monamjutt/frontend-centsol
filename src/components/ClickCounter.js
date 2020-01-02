import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementClick}>{this.props.name} button - {this.props.click}</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,5)
