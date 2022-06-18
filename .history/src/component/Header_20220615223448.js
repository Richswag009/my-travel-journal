import React, { Component } from 'react'
import logo from '../images/logo.png'
export default class Header extends Component {

  

    render() {
        return (
            <div>
                <nav>
                <img src={logo} alt="" />
                </nav>
            </div>
        )
    }
}
