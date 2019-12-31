import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* way of calling parent's method */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* way of passing parameters from child component to parent component's method */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
