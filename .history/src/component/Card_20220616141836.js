import React, { Component } from 'react'
import Image12 from '../images/image12.png'
import Star from '../images/Star-1.png'

export default class Card extends Component {
    
    render() {
        return (
            <div className='card'>
                <img className='card-img' src={Image12} alt="" />
                <div className='card-stats'>
                <img className='card-star' src={Star} alt="" />
                <span>5.0</span>
                <span className='gray'>(6) .</span>
                <span className='gray'>USA</span>
                </div>
                <p>life lessons from kattie Zaferes</p>
                <p><b>from $136</b>/ person</p>
                <h1>its currently {date.getHours()}</h1>
            </div>
        )
    }
}
