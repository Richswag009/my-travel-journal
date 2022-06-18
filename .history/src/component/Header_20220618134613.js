import React, { Component } from 'react'
// import logo from './images/logo.png'
export default class Header extends Component {

  

    render() {
        return (
            <div>
                <nav>
                < img className='nav-logo' src='./images/fill.png' alt="" />
                <h1>My Travel Journal</h1>
                </nav>
            </div>
        )
    }
}
