import React, { Component } from 'react'

export default class Joke extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.setup}</p>
                <h2>{this.props.punchline}</h2>
                <hr />
            </div>
        )
    }
}
