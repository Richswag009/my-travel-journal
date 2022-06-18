import React, { Component } from 'react'
 import Group from '../images/Group-77.png'
export default class Hero extends Component {

    render() {
        return (
            < section className='hero'>
                <img className='hero-image' src={Group} alt="" />
                <div>       
                <h1>Online Experience</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
                </div>
            </section>
        )
    }
}
