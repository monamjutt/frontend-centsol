import React, { Component } from 'react';
import UserGreeting from './components/UserGreeting';
import './App.css'

class App extends Component {
	render(){
		return(
			<div className="App">
				<UserGreeting></UserGreeting>
			</div>
		)
	}
}

export default App
