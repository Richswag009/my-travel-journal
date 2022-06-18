import React, { Component } from 'react'
//  import Group from '../images/Group-77.png'
export default class Hero extends Component {

    render() {
        return (
            < section className='card'>
                <img className='card-image' src=' https://source.unsplash.com/WLxQvbMyfas' alt="" />
                <div className='card-content'>       
                    <div className='location'>
                            <span><img src="./images/location.png" alt="" /></span>
                            <span className='card-title'>{this.props.location}</span>
                            <span className='card-map-link'><a href={this.props.googleMapsUrl}>view on google map</a></span>
                    </div>
                  <h2>Mount Fuji</h2>
                  <div className='card-date'>
                    <span>{this.props.start-date} -{this.props.end-date}</span>
                  </div>
                  <p>{this.props.description}</p>
                </div>
            </section>
        )
    }
}
