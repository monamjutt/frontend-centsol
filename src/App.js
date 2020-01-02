import React, { Component } from 'react';
import './App.css'
import RefDemo from './components/RefDemo';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<RefDemo></RefDemo>
			</div>
		)
	}
}

export default App
