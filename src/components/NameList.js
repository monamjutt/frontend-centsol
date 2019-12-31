import React from 'react'
import Person from './Person'


function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  // return (
  //   // <div>
  //   //   <h2>{names[0]}</h2>
  //   //   <h2>{names[1]}</h2>
  //   //   <h2>{names[2]}</h2>
  //   // </div>
  //   <div>
  //     {
  //       names.map(name => <h2>{name}</h2>)
  //     }
  //   </div>
  // )
  // const nameList = names.map(name => <h2>{name}</h2>)
  // return(
  //   <div>
  //     {
  //       nameList
  //     }
  //   </div>
  // )
 
  const persons = [
    {
      name: 'Bruce',
      age: 31,
      heroName: 'Batman'
    },
    {
      name: 'Clark',
      age: 30,
      heroName: 'Superman'
    },
    {
      name: 'Diana',
      age: 35,
      heroName: 'Wonder Woman'
    }
  ];

  const personList = persons.map( person => <Person person={person}/> )

  return  <div> { personList } </div>
  
}

export default NameList
