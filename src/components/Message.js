import React, { Component } from 'react';

class Message extends Component{
  constructor(){
    super() // we have extended react's Component to make sure we are calling base class constructor we have to call super()
    this.state = {
      message: 'Welcome visitor'
    }
  }

  changeMessage(){
    this.setState({
      message: 'Thanks for subscribing!'
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;