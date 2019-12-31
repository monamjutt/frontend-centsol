import React, { Component } from 'react'

// this keyword is variant according to context, this is a JS concept not reactjs
// there are number of ways to bind event in reactjs.


export class EventBind extends Component {
  constructor(props) {
		super(props)
	
		this.state = {
			 message: 'Hello'
    }
    
    // this.clickHandler = this.clickHandler.bind(this) // official way of binding event
  }

  // clickHandler(){
  //   // this is here now confusing if not binded
    // this.setState((prevState) => ({
    //   message: prevState.message == "Hello" ? 'Good Bye!' : 'Hello'
    // }))
  // }

  // final approach, how you can bind event?
  // answer is: by arrow function
  clickHandler = () => { //clickHandler is now class property as an arrow function
    this.setState((prevState) => ({
      message: prevState.message == "Hello" ? 'Good Bye!' : 'Hello'
    }))
  }

  // Four ways of binding event
  // 1) Binding within render function with .bind()
  // 2) Binding within render function with arrow function
  // 3) Binding in class constructor
  // 4) Binding a class property as an arrow function

  // if your component doesn't have any nested re-rendring child components then approach 2 is also suggested but
  // 3rd and 4th are official but approach 4 is still experimental for now in 2019
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* without event binding */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* one way of binding event --but this might be confusing with nested children*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button */} 
        {/* 2nd approach of binding event -- this also has performance implications in some scenarios */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* 3nd and most approached way of binding event also official react documented way */}
        {/* This follows the binding event handler in constructor as opposed in render method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
