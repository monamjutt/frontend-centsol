import React, { Component } from 'react'

class ToDoList extends Component {
  render() {
    return (
      <tbody>
        {
          this.props.list.map(item =>
            <tr key={item.id} id={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date.toLocaleTimeString()}</td>
              <td><button onClick={() => this.props.edit(item.id)}>Edit</button>&nbsp;
                  <button onClick={() => this.props.delete(item.id)}>Delete</button></td>
            </tr>)
        }
      </tbody>
    )
  }
}

export default ToDoList

