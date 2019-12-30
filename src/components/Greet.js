import React from 'react';

// function Greet(){
//   return <h1>Hello, jutt</h1>
// }
// desturcting props means
// extract props values into separate variables
// one way of doing it that pass {variables...} instead of props to functional component
// 2nd way of doing it extract them in function body itself.
const Greet = ({name, heroName, children}) => {
  // const {name, heroName, children} = props;
  return (
    <div>
      <h1>Hello {name} aka {heroName}</h1>
      {children}
    </div>
  )
}

export default Greet;