import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
// import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			editing: false,
			toDoCounter: 1,
			sortId: "desc",
			sortDate: "desc",
			List: [
				{
					id: 1,
					name: 'First',
					date: new Date()
				}
			]
		}

		this.appendToList = this.appendToList.bind(this);
		this.sortById = this.sortById.bind(this);
		this.sortByDate = this.sortByDate.bind(this);
		this.editRow = this.editRow.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
	}

	editRow(rowId){
		let editRowList = this.state.List.map((obj, i) => {
			if(obj.id === rowId) {
				obj.name = <input id={rowId + "_name"} value={obj.name} onChange={(evt) => this.changingInputValue(obj.id, evt)} onBlur={(evt) => this.updateName(evt)}/>;
			}
			return obj;
		});

		this.setState({
			List: editRowList
		})
	}

	changingInputValue(id, evt){
		let editRowList = this.state.List.map((obj, i) => {
			if(obj.id === id) {
				obj.name = <input id={id + "_name"} value={evt.target.value} onChange={(evt) => this.changingInputValue(obj.id, evt)} onBlur={(evt) => this.updateName(evt)}/>;
			}
			return obj;
		});

		this.setState({
			List: editRowList
		})
	}

	deleteRow(rowId){
		let afterDeleteList = this.state.List.filter((obj, i) => {
			if (obj.id !== rowId){
				return obj;
			}
		})

		this.setState((prevState) => ({
			List: afterDeleteList
		}))
	}

	appendToList(){
		let new_toDoCounter = this.state.toDoCounter + 1
		const newList = {
			id: new_toDoCounter,
			name: <input id={new_toDoCounter + "_name"} onBlur={(evt) => this.updateName(evt)}/>,
			date: new Date()
		}
		this.setState({
			toDoCounter: new_toDoCounter,
			List: [
				...this.state.List,
				newList
			]
		})
	}

	sortByDate(){
		const sortByDate = this.state.List.sort((a, b) => {
			if(this.state.sortDate === "asc"){
				return a.date - b.date
			}else{
				return b.date - a.date
			}
		});

		this.setState({
			sortDate: this.state.sortDate === "asc" ? "desc" : "asc",
			List: sortByDate
		})
	}

	sortById(){
		const sortByIdList = this.state.List.sort((a,b) => {
			if(this.state.sortId === "asc"){
				if (a.id > b.id) {
					return 1;
				}
				if (b.id > a.id) {
					return -1;
				}
				return 0;
			}
			else{
				if (a.id > b.id) {
					return -1;
				}
				if (b.id > a.id) {
					return 1;
				}
				return 0;
			}
		})

		this.setState({
			sortId: this.state.sortId === "asc" ? "desc" : "asc",
			List: sortByIdList
		})
	}

	updateName(event){
		let input_value = event.target.value;
		let index = parseInt(event.target.id.split('_')[0]);
		if(input_value !== ""){
			this.setState({
				List: this.state.List.map((obj, i) => {
					if(obj.id === index) {
						obj.name = input_value;
					}
					return obj;
				})
			})
		}
	}
	
	render(){
		return(
			<div className="App">
				<button onClick={this.appendToList}>Add to List</button>
				<button onClick={this.sortById}>Sort by Id</button>
				<button onClick={this.sortByDate}>Sort by Date</button>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Date</th>
						</tr>
					</thead>
					<ToDoList list={this.state.List} edit={this.editRow} delete={this.deleteRow}></ToDoList>
				</table>
			</div>
		)
	}
}

export default App
