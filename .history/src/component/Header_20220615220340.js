import React, { Component } from 'react'
import images from './images'
export default class Header extends Component {

  

    render() {
        return (
            <div>
                
                <img src={images} alt="" />
            </div>
        )
    }
}
