import React from 'react'

function Joke(props) {
    return (
        <div>        
                <p>{this.props.setup}</p>
                <h2>{this.props.punchline}</h2>
                <hr />
        </div>
    )
}

export default Joke
