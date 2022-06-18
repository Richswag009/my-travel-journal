import React, { Component } from 'react'
// import Image12 from '../images/image12.png'
// import Star from '../images/Star-1.png'

export default class Card extends Component {

    render() {
        let badgeText
        if(this.props.openSpots===0){
            badgeText='SOLD OUT'
        }else if(this.props.Location ==='Online'){
            badgeText='ONLINE'

        }
        return (
            <div className='card'>
                {badgeText &&<div className='card-badge'>{this.props.badgeText}</div>}
                <img className='card-img' src={`/images/${this.props.items.coverImg}`} alt="" />
                <div className='card-stats'>
                <img className='card-star' src='./images/Star-1.png' alt="" />
                <span>{this.props.items.stats.rating}</span>
                <span className='gray'>({this.props.items.stats.reviewCount})</span>
                <span className='gray'>{this.props.items.Location}</span>
                </div>
                <p className='card-title'>{this.props.items.title}</p>
                <p className='card-price'><b>{this.props.items.price}</b>/ person</p>
            </div>
        )
    }
}
