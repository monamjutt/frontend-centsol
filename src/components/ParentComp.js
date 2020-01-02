import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Jutt !'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'Jutt !'
      })
    }, 2000)
  }
  
  render() {
    console.log('************************** Parent *****************************');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
