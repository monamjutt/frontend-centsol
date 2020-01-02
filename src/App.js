import React, { Component } from 'react';
import './App.css'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<ParentComp></ParentComp>
			</div>
		)
	}
}

export default App
