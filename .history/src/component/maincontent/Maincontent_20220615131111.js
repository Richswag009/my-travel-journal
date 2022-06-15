import React, { Component } from 'react'
// import React from "react";
export default class Maincontent extends Component {

   

    render() {
        return (
            <div className=' grid ' style={{width:'70%',margin:'50px auto'}}>
                <div className=' card'>
                    <h1>Fun facts about React</h1>
                    <ol style={{margin:'20px'}}>
                        <li>was first released in 2013</li>
                        <li>was orginally created by Jordan Walke</li>
                        <li>has well over 100k stars on github</li>
                        <li>is maintained by facebook</li>
                        <li>powers thousand of enterprise apps , including mobile apps</li>
                    </ol>
                </div>
                <div className='card'>
                    <h1>Reasons Why i Love Reacts</h1>
                    <ol style={{margin:'20px'}}>
                        <li>its a popular libary</li>
                        <li>i'm more likely to get the job as a developer if i know react</li>
                    </ol>
                </div>
            </div>
        )
    }

}
// function page(){
    
//         return (
//             <div>
//                 <ol>
//                     <li>Lorem ipsum dolor sit amet.</li>
//                     <li>Lorem ipsum dolor sit amet.</li>
//                     <li>Lorem ipsum dolor sit amet.</li>
//                 </ol>
//             </div>
//         )
        
// }export default page