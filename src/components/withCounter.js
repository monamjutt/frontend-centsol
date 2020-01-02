import React, { Component } from 'react'

const withCounter = (WrappedComponent, incrementCount) => {
  
  class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        click: 0
      }
    }

    incrementClick = () => {
      this.setState(prevState => {
        return { click: prevState.click + incrementCount }
      })
    }
    
    render() {
      return (
        <div>
          <WrappedComponent click={this.state.click} incrementClick={this.incrementClick} {...this.props}/>
        </div>
      )
    }
  }
  
  return NewComponent
}

export default withCounter
