import React, { Fragment, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {ProductProvider} from './components/ProductContext'
import Modal from './components/modals/Modal';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<ProductProvider>
				<Fragment>
					<Navbar></Navbar>
					<Switch>
						<Route exact path="/" component={ProductList}/>
						<Route path="/details" component={Details}/>
						<Route path="/cart" component={Cart}/>
						<Route component={Default}/>
					</Switch>
					<Modal></Modal>
				</Fragment>
			</ProductProvider>
		)
	}
}

export default App
