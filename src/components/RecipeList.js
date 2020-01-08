import React, { Fragment, Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

class RecipeList extends Component {
  render() {
    const { recipes, showRecipeDetail, handleSubmit, resultNotFound } = this.props;
    return (
      <Fragment>
        <RecipeSearch handleSubmit={handleSubmit}/>
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">
                recipe list
              </h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {
              resultNotFound ? 
              <h1 className="mx-auto text-danger text-center">Sorry, your query doesn't return any result</h1>
              : 
              recipes.map(recipe => {
                return <Recipe key={recipe.recipe_id} recipe={recipe} showRecipeDetail={showRecipeDetail}/>
              })
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeList
