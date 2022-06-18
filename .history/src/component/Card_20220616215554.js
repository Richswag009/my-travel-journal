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
                <span>{rating}</span>
                <span className='gray'>{reviewCount}</span>
                <span className='gray'>{country}</span>
                </div>
                <p>life lessons from kattie Zaferes</p>
                <p><b>from $136</b>/ person</p>
            </div>
        )
    }
}
