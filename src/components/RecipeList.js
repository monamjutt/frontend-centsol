import React, { Fragment, Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

class RecipeList extends Component {
  render() {
    const { recipes, showRecipeDetail } = this.props;
    return (
      <Fragment>
        <h1>Hello from Recipe List</h1>
        <RecipeSearch/>
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
