import React, { Component } from 'react'
import "./Tour.scss"

class Tour extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showInfo: false
    }
  }

  handInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  
  render() {
    const {img, name, city, info} = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img}/>
          <span className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handInfo}>
              <i style={{cursor: "Pointer"}} className="fas fa-caret-square-down"/>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>} 
        </div>
      </article>
    )
  }
}

export default Tour
