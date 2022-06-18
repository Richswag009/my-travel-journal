import React, { Component } from 'react'
//  import Group from '../images/Group-77.png'
export default class Hero extends Component {

    render() {
        return (
            < section className='card'>
                <img className='card-image' src=' https://source.unsplash.com/WLxQvbMyfas' alt="" />
                <div className='card-content'>       
                    <div>
                            <span><img src="./images/location.png" alt="" /></span>
                            <span>Japan</span>
                            <span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">view on google map</a></span>
                    </div>
                  <h2>title</h2>
                  <div className='card-date'>
                    <span></span>
                    <span></span>
                    <span>start-date</span>
                  </div>
                  <p>"Mount Fuji is the tallest mountain in Japan,
                    standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan,
                     for both Japanese and foreign tourists.",</p>
                </div>
            </section>
        )
    }
}
