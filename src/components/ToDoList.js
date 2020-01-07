import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  render() {
    const { propagateList } = this.props;
    return (
      <div className="card card-body my-3">
        <ul>
          <h3 className="text-capitalize text-center">
            todo List
          </h3>
          {
            propagateList.map(item => {
              return <ToDoItem key={item.id} item={item.name} />
            })
          }
          <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
        </ul>
      </div>
    )
  }
}

export default ToDoList
