import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

export default Table
