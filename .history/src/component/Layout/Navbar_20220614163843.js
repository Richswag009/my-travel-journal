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
               <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">Navbar</a>
                <button className="navbar-toggler" type='button' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle-navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"id='navbarSupportedContent'>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a href="" className="nav-link">link</a>
                        </li>
                    </ul>
                </div>
                </nav> 
            </div>
        )
    }
}
