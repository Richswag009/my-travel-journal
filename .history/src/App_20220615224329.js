
import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';

// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Header/>
       <Hero/>
        </div>
    );
  }
}

export default App;
