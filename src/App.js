import React, { Component } from 'react';
import './App.css'
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<HoverCounter name="Jutt"/>
				<ClickCounter name="Jutt"/>
			</div>
		)
	}
}

export default App
