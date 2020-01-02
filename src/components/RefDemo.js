import React, { Component } from 'react'

class RefDemo extends Component {
  constructor(props) {
    super(props)
    // new approach
    this.inputRef = React.createRef();
    // old approach
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element
    }
  }

  componentDidMount(){
    // new approach code
    this.inputRef.current.focus()

    // old approach code
    if(this.cbRef){ // checking if not null beacause when component is unmounted this will return null
      this.cbRef.focus()
    }
  }

  clickHandler = event => {
    alert(this.inputRef.current.value);
  }
  
  render() {
    return (
      <div>
        {/* new approach code */}
        <input type="text" ref={this.inputRef}/>
        {/* old approach code */}
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click!</button>
      </div>
    )
  }
}

export default RefDemo
