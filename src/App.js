import React, { Fragment, Component } from 'react';
import './App.css';
import axios from 'axios';
import { recipes } from './tempList';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { recipeDetails } from './tempDetails'
class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			recipes: recipes,
			recipeDetails: recipeDetails,
			showRecipeDetail: [],
			recipeDetail: false,
			resultNotFound: false
			// url: "https://community-food2fork.p.rapidapi.com/search?key=b457bf7744msha25338d3541f1cap1da51bjsn5b3f6925dfc9"
		}
	}

	async getRecipes(){
		// axios({
		// 	"method":"GET",
		// 	"url":"https://community-food2fork.p.rapidapi.com/search",
		// 	"headers":{
		// 	'Access-Control-Allow-Origin': '*',
		// 	"content-type":"application/octet-stream",
		// 	"x-rapidapi-host":"community-food2fork.p.rapidapi.com",
		// 	"x-rapidapi-key":"b457bf7744msha25338d3541f1cap1da51bjsn5b3f6925dfc9"
		// 	},
		// 	"params":{
		// 		"q":"shredded chicken"
		// 	}
		// })
		// .then((response)=>{
		// 	console.log(response)
		// })
		// .catch((error)=>{
		// 	console.log(error)
		// })

	axios({
		"method":"GET",
		"url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer",
		"headers":{
		"content-type":"application/octet-stream",
		"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key":"b457bf7744msha25338d3541f1cap1da51bjsn5b3f6925dfc9"
		},"params":{
		"q":"How much vitamin c is in 2 apples%3F"
		}
	})
	.then((response)=>{
		console.log(response)
	})
	.catch((error)=>{
		console.log(error)
	})
	}

	componentDidMount(){
		// this.getRecipes()
	}

	hideRecipeDetail = () => {
		this.setState({
			recipeDetail: !this.state.recipeDetail,
			showRecipeDetail: []
		})
	}

	showRecipeDetail = (recipe_id) => {
		this.setState({
			showRecipeDetail: this.state.recipeDetails.filter(recipe => recipe.recipe_id === recipe_id),
			recipeDetail: true
		})
	}

	handleSubmit = (event, value) => {
		event.preventDefault();
		var searchValues = value.split(',');
		let result = this.state.recipeDetails.filter(function (recipeDetail) {
			let title = searchValues.some(function (query) {
				let regex = new RegExp(query.toLowerCase());
				return regex.test(recipeDetail.title.toLowerCase());
			});

			if(title === false){
				let ingredient = recipeDetail.ingredients.filter(item => {
					return searchValues.some(q => {
						let regex = new RegExp(q);
						return regex.test(item);
					})
				})

				if(ingredient.length > 0){
					return recipeDetail;
				}
			}
			return title;
		})
		this.setState({
			resultNotFound: result.length > 0 ? false : true,
			recipes: result
		})
	}
	
	render(){
		return(
			<Fragment>
				{this.state.recipeDetail ? 
				<RecipeDetails recipeDetails={this.state.showRecipeDetail} hideRecipeDetail={this.hideRecipeDetail} /> 
				:
				<RecipeList showRecipeDetail={this.showRecipeDetail} resultNotFound={this.state.resultNotFound} recipes={this.state.recipes} handleSubmit={this.handleSubmit}/>}
			</Fragment>
		)
	}
}

export default App
