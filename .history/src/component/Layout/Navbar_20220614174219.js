import React, { Component } from 'react'

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
            <nav className='navbar  bg-primary'>
            <h1>React</h1>
            <ul className='mx-1'>
                <li>Pricing </li>
                <li>About </li>
                <li>Contact </li>
            </ul>
            </nav>  
             
            </div>
        )
    }
}
