import React, { Component } from 'react'

class ToDoItem extends Component {
  render() {
    const { item, name, editItem, deleteItem } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{name}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={() => editItem(item)}>
            <i className="fa fa-pen"/>
          </span>
          <span className="mx-2 text-danger" onClick={() => deleteItem(item.id)}>
            <i className="fa fa-trash"/>
          </span>
        </div>
      </li>
    )
  }
}

export default ToDoItem
