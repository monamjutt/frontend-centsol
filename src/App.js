import React, { Component } from 'react';
import './App.css'
import PortalDemo from './components/PortalDemo';
import Example from './components/Example';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				{/* <PortalDemo></PortalDemo> */}
				<Example/>
			</div>
		)
	}
}

export default App
