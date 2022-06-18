
import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Card from './component/Card';
import Joke from './component/Joke';

// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Header/>
       <Hero/>
       <Card/>
       <Joke 
       setup='this is a setup one'
       punchline='this is the punchline'/>
       <Joke
       setup='this is a setup two'
       punchline='this is the punchline2' />
       <Joke 
       setup='this is a setup three'
       punchline='this is the punchline3'
       ispun={true}
       author={[{
        riches, blessing, dog
       }]}/>

       <Joke
       setup='this is a setup four'
       punchline='this is the punchline4' />
       ispun={true}/>
        </div>
    );
  }
}

export default App;
