import React, { Component } from 'react';
import './App.css'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<UserProvider value={{name: "Jutt", age: 17}}>
				 <ComponentC/>
				</UserProvider>
			</div>
		)
	}
}

export default App
