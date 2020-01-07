import React, { Component } from 'react'

class ToDoInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  placeValue(value){
    this.inputRef.current.value = value;
  }
  
  render() {
    const { addItemToList, isEditItem } = this.props;
    return (
      <div className="card card-body my-3">
        <div className="input-group">
          <div className="input-group-text bg-primary text-white">
            <i className="fas fa-book"/>
          </div>
          <input type="text" placeholder="Add item to list" className="form-control text-capitalize" ref={this.inputRef}/>
        </div>
        <button type="button" className="btn btn-block btn-primary mt-3" onClick={() => {
              addItemToList(this.inputRef.current.value); 
              this.inputRef.current.value = "";
            }
          }>
          { isEditItem ? "Edit item" : "Add item" }
        </button>
      </div>
    )
  }
}

export default ToDoInput
