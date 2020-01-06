import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<main>
				<Navbar></Navbar>
				<TourList></TourList>
			</main>
		)
	}
}

export default App
