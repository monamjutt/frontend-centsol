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
  render() {
    const {tours} = this.state;
    return (
     <section className="tourlist">
       {
        tours.map(tourItem => {
          return <Tour key={tourItem.id} tour={tourItem}></Tour>
        })
       }
     </section> 
    )
  }
}

export default TourList
