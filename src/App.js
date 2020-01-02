import React, { Component } from 'react';
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="App">
				{/* <User render={(isLoggedIn) => isLoggedIn ? "Jutt" : "Guest"}/>
				<ClickCounterTwo/>
				<HoverCounterTwo/> */}

				<Counter>
					{(count, incrementCount) => (
							<ClickCounterTwo count={count} incrementCount={incrementCount}/>
						)}
				</Counter>

				<Counter>
					{(count, incrementCount) => (
						<HoverCounterTwo count={count} incrementCount={incrementCount}/>
						)}
				</Counter>
			</div>
		)
	}
}

export default App
