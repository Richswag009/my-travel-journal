import React, { Component } from 'react'
// import Image12 from '../images/image12.png'
// import Star from '../images/Star-1.png'

export default class Card extends Component {
    
    render() {
        return (
            <div className='card'>
                <img className='card-img' src={`../images/${this.props.img}`} alt="" />
                <div className='card-stats'>
                <img className='card-star' src={this.props.star} alt="" />
                <span>{this.props.rating}</span>
                <span className='gray'>{this.props.reviewCount}</span>
                <span className='gray'>{this.props.country}</span>
                </div>
                <p>{this.props.title}</p>
                <p><b>{this.props.price}</b>/ person</p>
            </div>
        )
    }
}
