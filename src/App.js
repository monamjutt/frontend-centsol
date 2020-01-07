import React, { Component } from 'react';
import './App.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props)
  
    this.state = {
      listCount: 0,
      list: []
    }
	}
	
	clickHandler = (value) => {
    this.setState(prevState => {
      return {
        listCount: prevState.listCount + 1,
				list:  [...prevState.list, {
          id: prevState.listCount + 1,
          name: value
        }]
      }
    })
  }

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">
							todo Input
						</h3>
						<ToDoInput clickHandler={this.clickHandler}></ToDoInput>
						<ToDoList propagateList={this.state.list}></ToDoList>
					</div>
				</div>
			</div>
			// <div className="App">
			// </div>
		)
	}
}

export default App
