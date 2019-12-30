import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
	render(){
		return(
			<div className="App">
				{/* <Greet></Greet> */}
				<Greet name="bruce" heroName="Batman" >
					<p>This is children</p>	
				</Greet>
				<Greet name="clark" heroName="Superman" />
				
				<Welcome name="bruce" heroName="Batman">
				<p>This is children</p>	
				</Welcome>
				<Welcome name="clark" heroName="Superman" />
			</div>
		)
	}
}

export default App
