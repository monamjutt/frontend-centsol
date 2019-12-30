import React, { Component } from 'react';

// desturcting props means
// extract props values into separate variables
// 2nd way of doing it extract them in render function body.
class Welcome extends Component{
  render(){
    const {name, heroName} = this.props;
    return (
      <div>
        <h1>Hello {name} aka {heroName}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome;