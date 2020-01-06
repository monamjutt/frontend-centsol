import React, { Component } from 'react';
import './App.css'
import PostList from './components/PostList';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				<PostList/>
			</div>
		)
	}
}

export default App
