import React, { Component } from 'react'
import images

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
