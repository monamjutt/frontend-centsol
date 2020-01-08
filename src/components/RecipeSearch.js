import React, { Fragment, Component } from 'react'

class RecipeSearch extends Component {
  constructor(props) {
    super(props)
    
    this.inputRef = React.createRef();
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize"> 
                search for recipe with 
                <strong className="text-danger"> Food2Fork
                </strong> 
              </h1>
              <form className="mt-4" onSubmit={(event) => handleSubmit(event, this.inputRef.current.value)}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes separated by comma
                </label>
                <div className="input-group">
                  <input type="text" className="form-control" ref={this.inputRef} name="search" placeholder="chicken,onions,carrot"/>
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text bg-primary text-white">
                      <i className="fas fa-search"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment> 
    )
  }
}

export default RecipeSearch
