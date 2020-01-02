import React, { Component } from 'react';
import './App.css'
import FRParentInput from './components/FRParentInput';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<FRParentInput></FRParentInput>
			</div>
		)
	}
}

export default App
