
import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
      <Navbar/>
      <div className="container">
      <Users />
      </div>
      </div>
    );
  }
}

export default App;
