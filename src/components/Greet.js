import React from 'react';

// function Greet(){
//   return <h1>Hello, jutt</h1>
// }

const Greet = (props) => {

  return (
    <div>
      <h1>Hello {props.name} aka {props.heroName}</h1>
      {props.children}
    </div>
  )
}

export default Greet;