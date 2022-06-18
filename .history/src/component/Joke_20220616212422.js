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
                <p>{props.setup}</p>
                <h2>{props.punchline}</h2>
            </div>
        )
    }
}
