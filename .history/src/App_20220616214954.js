
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
        </div>
    );
  }
}

export default App;
