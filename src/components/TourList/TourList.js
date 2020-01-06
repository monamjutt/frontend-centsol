import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import "./TourList.scss"
import { tourData } from '../tourData'

class TourList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tours: tourData
    }
  }

  removeListItem = (id) => {
    const {tours} = this.state.tours;
    const sortList = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortList
    })
  }

  render() {
    const {tours} = this.state;
    return (
     <section className="tourlist">
       {
        tours.map(tourItem => {
          return <Tour key={tourItem.id} tour={tourItem} removeListItem={this.removeListItem}></Tour>
        })
       }
     </section> 
    )
  }
}

export default TourList
