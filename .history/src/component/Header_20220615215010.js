import React, { Component } from 'react'
import images from './images.png'

export default class Header extends Component {

   
    render() {
        return (
            <div>
                <nav>
                    <img src={images} alt="" />
                </nav>
            </div>
        )
    }
}
