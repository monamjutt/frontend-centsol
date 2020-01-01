import React, { Component } from 'react';
import FragmentDemo from './components/FragmentDemo';
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<FragmentDemo></FragmentDemo>
			</div>
		)
	}
}

export default App
