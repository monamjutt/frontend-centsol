import React, { Fragment, Component } from 'react'
import { recipes } from '../tempList';

class Recipe extends Component {
  render() {
    const { recipe, showRecipeDetail } = this.props;
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = recipe;
    return (
      <Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image_url} className="img-card-top" style={{height:"14rem"}} alt="recipe"/>
            <div className="card-body text-capitalize">
              <h6 style={{whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis"}}>{title}</h6>
              <h6 className="text-warning text-slanted">provided by {publisher}</h6>
            </div>
            <div className="card-footer">
              <a onClick={() => showRecipeDetail(recipe_id)} className="btn btn-primary mt-2 mx-2 text-capitalize text-white">details</a>
              <a href={source_url} target="_blank" className="btn btn-success mt-2 mx-2 text-capitalize">recipe url</a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Recipe
