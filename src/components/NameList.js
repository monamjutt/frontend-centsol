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
      id: 1,
      name: 'Bruce',
      age: 31,
      heroName: 'Batman'
    },
    {
      id: 2,
      name: 'Clark',
      age: 30,
      heroName: 'Superman'
    },
    {
      id: 3,
      name: 'Diana',
      age: 35,
      heroName: 'Wonder Woman'
    }
  ];

  const personList = persons.map( person => <Person key={person.id} person={person}/> )

  return  <div> { personList } </div>
  
}

export default NameList
