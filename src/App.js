import React, { Component } from 'react';
import './App.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props)
  
    this.state = {
      listCount: 0,
			list: [],
			isEditItem: false
		}

		this.componentRef = React.createRef();
	}

	editList = (obj) => {
		this.componentRef.current.placeValue(obj.name);
		this.setState(prevState => {
			return {
				isEditItem: true,
				list: prevState.list.filter(item => item.id !== obj.id)
			}
		})
	}

	deleteItemFromList = (id) => {
		this.setState(prevState => {
			return {
				listCount: prevState.listCount - 1,
				list: prevState.list.filter(item => item.id !== id)
			}
		})
	}

	clearList = () => {
		this.setState({
			listCount: 0,
			list: []
		})
	}
	
	addItemToList = (value) => {
    this.setState(prevState => {
      return {
        listCount: prevState.listCount + 1,
				list: [...prevState.list, {
          id: prevState.listCount + 1,
          name: value
				}],
				isEditItem: false
      }
    })
  }

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">
							todo Input
						</h3>
						<ToDoInput ref={this.componentRef} addItemToList={this.addItemToList} isEditItem={this.state.isEditItem}></ToDoInput>
						<ToDoList propagateList={this.state.list} editList={this.editList} deleteItemFromList={this.deleteItemFromList} clearList={this.clearList}></ToDoList>
					</div>
				</div>
			</div>
		)
	}
}

export default App
