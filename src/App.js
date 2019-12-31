import React, { Component } from 'react';
import ParentComponent from './components/ParentComponent';
import './App.css'

class App extends Component {
	render(){
		return(
			<div className="App">
				<ParentComponent></ParentComponent>
			</div>
		)
	}
}

export default App
