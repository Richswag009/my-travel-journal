import React, { Component } from 'react'

export default class Maincontent extends Component {

   

    render() {
        return (
            <div className='container card'>
               <h1>Fun facts about React</h1>
               <ol>
                <li>was first released in 2013</li>
                <li>was orginally created by Jordan Walke</li>
                <li>has well over 100k stars on github</li>
                <li>is maintained by facebook</li>
                <li>powers thousand of enterprise apps , including mobile apps</li>
               </ol>
            </div>
        )
    }

}