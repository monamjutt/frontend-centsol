import React, { Component } from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

class App extends Component {
	render(){
		return(
			<div className="App">
				<FunctionClick></FunctionClick>
				<ClassClick></ClassClick>
			</div>
		)
	}
}

export default App
