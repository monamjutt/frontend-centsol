import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputStyle: {
        width: 'auto'
      },
      selectStyle: {
        width: '10%',
        lineHeight: 1.5
      },
      selectValue: 'react',
      userName: '',
      comments: ''
    }
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleCommentChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSelectChange = event => {
    this.setState({
      selectValue: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.selectValue}`)
  }
  
  render() {
    const {inputStyle, selectStyle, userName, comments, selectValue} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input style={inputStyle} value={userName} onChange={this.handleUserNameChange} type='text'></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea style={inputStyle} value={comments} onChange={this.handleCommentChange} ></textarea>
        </div>
        <div>
          <label>Select</label>
          <select style={selectStyle} value={selectValue} onChange={this.handleSelectChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
