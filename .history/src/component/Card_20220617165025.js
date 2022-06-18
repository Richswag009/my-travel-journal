import React, { Component } from 'react'
// import Image12 from '../images/image12.png'
// import Star from '../images/Star-1.png'

export default class Card extends Component {

    render() {
        return (
            <div className='card'>
                {this.props.openSpots === 0 && <div className='card-badge'>Sold Out</div>}
                <img className='card-img' src={`/images/${this.props.img}`} alt="" />
                <div className='card-stats'>
                <img className='card-star' src='./images/Star-1.png' alt="" />
                <span>{this.props.rating}</span>
                <span className='gray'>({this.props.reviewCount})</span>
                <span className='gray'>{this.props.Location}</span>
                </div>
                <p className='card-title'>{this.props.title}</p>
                <p className='card-price'><b>{this.props.price}</b>/ person</p>
            </div>
        )
    }
}
