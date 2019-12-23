import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
	render(){
		return(
			<div className="App">
				<Greet></Greet>
				<Welcome />
			</div>
		)
	}
}

export default App
