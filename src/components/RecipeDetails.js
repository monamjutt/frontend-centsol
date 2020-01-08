import React, { Fragment, Component } from 'react'

class RecipeDetails extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients,
      recipe_id
    } = this.props.recipeDetails[0];

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={this.props.hideRecipeDetail}>back to recipe list</button>
              <img className="d-block w-100" alt="recipe" src={image_url}/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
              <a 
                href={publisher_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary mt-2 text-capitalize">
                  publisher webpage
              </a>
              <a 
                href={source_url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-success mt-2 mx-3 text-capitalize">
                  recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mt-4 text-capitalize">ingredients</h2>
                {
                  ingredients.map((ingredient, index) => {
                    return(
                      <li key={index} className="list-group-item text-slanted">
                        {ingredient}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeDetails
