import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return (
      <div>
        <h1>Hello {this.props.name} aka {this.props.heroName}</h1>
        {this.props.children}
      </div>
    )
  return <h1>Hello {this.props.name} aka {this.props.heroName}</h1>
  }
}

export default Welcome;