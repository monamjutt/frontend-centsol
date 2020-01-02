import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal-root');

class Example extends Component {

  constructor(props) {
    super(props)
  
    this.el = document.createElement('div')
  }

  componentDidMount(){
    console.log('******************* Mounted **********************');
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount(){
    portalRoot.removeChild(this.el)
  }
  
  render() {
    console.log('******************* Rendered ********************');
    return ReactDOM.createPortal(<div>Text</div>, this.el);
  }
}

export default Example
