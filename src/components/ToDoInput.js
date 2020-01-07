import React, { Component } from 'react'

class ToDoInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  
  render() {
    const { clickHandler } = this.props;
    return (
      <div className="card card-body my-3">
        {/* <form> */}
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"/>
            </div>
            <input type="text" placeholder="Add item to list" className="form-control" ref={this.inputRef}/>
          </div>
          <button type="button" className="btn btn-block btn-primary mt-3" onClick={() => {
                clickHandler(this.inputRef.current.value); 
                this.inputRef.current.value = "";
              }
            }>
            Add item
          </button>
        {/* </form> */}
      </div>
    )
  }
}

export default ToDoInput
