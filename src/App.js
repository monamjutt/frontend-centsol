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
			recipeDetail: false
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
	
	render(){
		return(
			<Fragment>
				{this.state.recipeDetail ? 
				<RecipeDetails recipeDetails={this.state.showRecipeDetail} hideRecipeDetail={this.hideRecipeDetail} /> 
				: 
				<RecipeList showRecipeDetail={this.showRecipeDetail} recipes={this.state.recipes}/>}
			</Fragment>
		)
	}
}

export default App
