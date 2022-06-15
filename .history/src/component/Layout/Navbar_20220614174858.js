import React, { Component } from 'react'
import logo from '../layout/logo192.png'
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
               
            <h1> <img src={logo} alt="" style={{width:'30px' margin-top:'10px'}} />React</h1>
            <ul className='px-1'>
                <li>Pricing </li>
                <li>About </li>
                <li>Contact </li>
            </ul>
            </nav>  
             
            </div>
        )
    }
}
