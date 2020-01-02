import React, { Component } from 'react';
import './App.css'
import FocusInput from './components/FocusInput';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<FocusInput></FocusInput>
			</div>
		)
	}
}

export default App
