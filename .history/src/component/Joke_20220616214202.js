import React, { Component } from 'react'

export default class Joke extends Component {

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
