import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      Portal Demo
    </div>
    , 
    document.getElementById('portal-root')
  )
}

export default PortalDemo
//to see more examples
//
// event bubbling
//https://codepen.io/gaearon/pen/jGBWpE