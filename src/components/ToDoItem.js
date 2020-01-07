import React, { Component } from 'react'

class ToDoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{this.props.item}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fa fa-pen"/>
          </span>
          <span className="mx-2 text-danger ">
            <i className="fa fa-trash"/>
          </span>
        </div>
      </li>
    )
  }
}

export default ToDoItem
