import React from 'react'

function Columns() {
  const list = [{id: 1, name: 'Jutt !'}]
  return (
      <React.Fragment>
        {
          list.map(record => (
            <React.Fragment key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
            </React.Fragment>
          ))
        }
      </React.Fragment>
  )
}

export default Columns
