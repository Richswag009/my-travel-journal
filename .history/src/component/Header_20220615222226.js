import React, { Component } from 'react'
import images from './images/Images.gif'
export default class Header extends Component {

  

    render() {
        return (
            <div>
                
                <img src={images} alt="" />
            </div>
        )
    }
}
