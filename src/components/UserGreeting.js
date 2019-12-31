import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true
    }
  }
  
  render() {
    // one way ()
    // if(this.state.isLoggedIn){
    //   return  <div> Welcome jutt! </div>
    // }else{
    //   return <div> Welcome guest! </div>
    // }

    //second way (element variable approach)
    // let message;
    // if(this.state.isLoggedIn){
    //   message = 'Welcome jutt!'
    // }else{
    //   message = 'Welcome guest!'
    // }
    // return <div>{message}</div>

    //third approach (ternary operator)
    // return this.state.isLoggedIn ? ( <div>Welcome jutt!</div> ) : ( <div>Welcome guest!</div> )

    //fourth approach (short circuit approach)
    return this.state.isLoggedIn && <div> Welcome jutt !</div>
  }
}

export default UserGreeting
