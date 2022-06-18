import React, { Component } from 'react'
import Image12 from '../images/image12.png'
import Star from '../images/Star-1.png'

export default class Card extends Component {


    render() {
        return (
            <div className='card'>
                <img className='card-img' src={Image12} alt="" />
                <div className='card-rating'>
                <img src={Star} alt="" />
                <span>5.0</span>
                <span>(6) .</span>
                <span>USA</span>
                </div>
                <p>life lessons from kattie Zaferes</p>
                <p>from $136 / person</p>
            </div>
        )
    }
}
