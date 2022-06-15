import React, { Component } from 'react'

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='container border-1'>
            <nav className='navbar bg-primary'>
            <h1>React</h1>
            </nav>  
             
            </div>
        )
    }
}
