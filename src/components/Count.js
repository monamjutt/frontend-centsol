import React, { Component } from 'react';

class Count extends Component{
  constructor(){
    super()

    this.state = {
      count: 0
    }
  }

  increment(){
    // this.setState({ // this is an asynchronous function
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback value', this.state.count)
    // });

    // console.log(this.state.count)
    this.setState((prevState) => ({ // if you want to user previous state of obejct you have to pass method instead of object to setState()
      count: prevState.count + 1
    }), 
    () => {
      console.log('Callback value', this.state.count)
    })
    console.log('Value', this.state.count)
  }

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render(){
    return(
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button><br/>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    )
  }
}

export default Count;