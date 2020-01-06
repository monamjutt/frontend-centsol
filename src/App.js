import React, { Component } from 'react';
import './App.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'boostrap/dist/css/boostrap.min.css';
import uuid from 'uuid';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<ToDoInput></ToDoInput>
				<ToDoList></ToDoList>
			</div>
		)
	}
}

export default App
